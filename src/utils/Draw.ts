/**
 * @Description: 绘制工具
 * @Author: Pensiveant
 * @Date: 2022-05-27 14:16:37
 */
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol';
import SimpleLineSymbol from '@arcgis/core/symbols/SimpleLineSymbol';
import SimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import SketchViewModel from '@arcgis/core/widgets/Sketch/SketchViewModel';

/**
 * 绘图工具
 * 1. 绘制后不能编辑
 * 2.
 */
class Draw {
  // 实例属性
  view: __esri.MapView | __esri.SceneView;
  mode: string;
  defaultSimpleMarkerSymbol: __esri.SimpleMarkerSymbol | undefined;
  defaultSimpleLineSymbol: __esri.SimpleLineSymbol | undefined;
  defaultSimpleFillSymbol: __esri.SimpleFillSymbol | undefined;
  sketchVM: __esri.SketchViewModel | undefined;
  drawLayer: __esri.GraphicsLayer | undefined;

  // 构造函数
  constructor({
    view,
    mode, // 'clear':绘制后会清除之前的
    graphicLayer,
  }: {
    view: __esri.MapView | __esri.SceneView;
    mode?: 'clear';
    graphicLayer?: any;
  }) {
    this.view = view;
    this.mode = mode ? mode : '';
    this.defaultSimpleMarkerSymbol;
    this.defaultSimpleLineSymbol;
    this.defaultSimpleFillSymbol;
    this.sketchVM;
    this.drawLayer;
    if (!graphicLayer) {
      this._initGraphicLayer();
    } else {
      this.drawLayer = graphicLayer;
    }
    this._initDefaultSymbol();
  }

  // 初始化symbol
  private async _initDefaultSymbol() {
    this.defaultSimpleMarkerSymbol = new SimpleMarkerSymbol({
      color: [0, 255, 0],
      size: 10,
    });
    this.defaultSimpleLineSymbol = new SimpleLineSymbol({
      color: [0, 255, 0],
      width: 2,
    });

    this.defaultSimpleFillSymbol = new SimpleFillSymbol({
      color: [0, 0, 0, 0.25],
      outline: {
        color: [0, 255, 0],
        width: 1.5,
      },
    });
  }

  private async _initGraphicLayer() {
    let drawLayer = <__esri.GraphicsLayer>(
      this.view.map.findLayerById('drawLayer')
    );
    if (!drawLayer) {
      drawLayer = new GraphicsLayer({
        id: 'drawLayer',
        listMode: 'hide',
      });
      this.view.map.add(drawLayer);
    }
    this.drawLayer = drawLayer;
  }

  /**
   * 绘制
   * @param {String} type 绘制的图形类型: point | multipoint |polyline|polygon| circle|rectangle|move|transform|reshape
   * @param {String} symbol 样式
   * @returns
   * @memberof Draw
   */
  async draw(type: any, symbol?: any): Promise<__esri.Graphic> {
    let that = this;
    return new Promise((resolve, reject) => {
      if (that.mode === 'clear') {
        if (that.drawLayer) {
          that.drawLayer.removeAll();
        }
      }
      if (that.sketchVM) {
        that.sketchVM.destroy();
      }
      let sketchVM = new SketchViewModel({
        layer: that.drawLayer,
        view: that.view,
        pointSymbol: symbol ? symbol : that.defaultSimpleMarkerSymbol,
        polylineSymbol: symbol ? symbol : that.defaultSimpleLineSymbol,
        polygonSymbol: symbol ? symbol : that.defaultSimpleFillSymbol,
        updateOnGraphicClick: false, // 去除编辑
      });
      sketchVM.create(type);
      sketchVM.on('create', function (e) {
        if (e.state === 'complete') {
          resolve(e.graphic);
        }
      });
      that.sketchVM = sketchVM;
    });
  }

  // 清除所有的绘制
  clear() {
    if (this.drawLayer) {
      this.drawLayer.removeAll();
    }
  }

  destroy() {
    if (this.sketchVM) {
      this.sketchVM.destroy();
    }
    if (this.drawLayer) {
      this.view.map.remove(this.drawLayer);
    }
  }
}

export default Draw;
