import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import Polyline from '@arcgis/core/geometry/Polyline';
import Polygon from '@arcgis/core/geometry/Polygon';
import Graphic from '@arcgis/core/Graphic';

import PlotSymbol from './PlotSymbol';
import GeneralArrow from './GeneralArrow';
import SwallowTailArrow from './SwallowTailArrow';
import DoubleArrow from './DoubleArrow';

const DRAW_LAYER_ID = 'PLOT_TEMP_LAYER_ID'; // 临时图层

class PlotDrawTool {
  controlPoints: any[] = [];
  endPoint: any;

  mouseClickFn: any = null;
  mouseMoveFn: any = null;
  mouseDoubleClickFn: any = null;
  drawEndHandler: any = null;
  finallyGraphic: any = null;

  plotType = '';
  drawLayer: any = null;
  mapView: any;
  symbol: any;
  plotSymbol: any;
  drawControl: any;
  isMovedAfterClick: any;

  constructor(options: any) {
    this.mapView = options.mapView;
    this.symbol = options.symbol;
    this.plotSymbol = new PlotSymbol();
    this.initLayer();
  }

  initLayer() {
    if (!this.mapView.map.findLayerById(DRAW_LAYER_ID)) {
      this.drawLayer = new GraphicsLayer({
        id: DRAW_LAYER_ID,
        title: '标绘临时图层',
        // elevationInfo: {
        //   mode: 'relative-to-ground',
        //   offset: 10,
        //   unit: 'meters',
        // },
      });
      this.mapView.map.add(this.drawLayer);
    } else {
      this.drawLayer = this.mapView.map.findLayerById(DRAW_LAYER_ID);
    }
  }

  goprepoint(event: any) {
    if (event.ctrlKey === true && event.keyCode === 90) {
      this.controlPoints.pop();
    }
  }

  active(type: any) {
    this.mapView.container.style.cursor = 'crosshair';
    document.addEventListener('keydown', this.goprepoint, false); // 添加键盘事件

    // 如果没有注册鼠标单击事件，则注册
    if (!this.mouseClickFn) {
      this.mouseClickFn = this.mapView.on(
        'click',
        this.addControlPnt.bind(this),
      );
    }

    // 开始绘制时清空控制点数组
    this.controlPoints = [];
    this.plotType = type;
    switch (this.plotType) {
      // 实例化普通箭头绘制类
      case 'general_arrow': {
        this.drawControl = new GeneralArrow();
        break;
      }
      // 实例化燕尾箭头绘制类
      case 'swallowtail_arrow': {
        this.drawControl = new SwallowTailArrow();
        break;
      }
      // 实例化双箭头类
      case 'double_arrow': {
        this.drawControl = new DoubleArrow();
        break;
      }
      default:
        break;
    }
  }

  addControlPnt(evt: any) {
    // 当前添加点
    let clickPoint: any = evt.mapPoint;
    // 绘制双箭头时，点击第四个点，直接结束绘制
    if (this.plotType === 'double_arrow') {
      if (this.controlPoints.length < 3) {
        // this.setTipContent("单击继续绘制");
      } else if (this.controlPoints.length === 3) {
        // this.setTipContent("单击结束绘制");
      } else if (this.controlPoints.length === 4) {
        this.endDraw(evt);
        return;
      }
    } else {
      // this.setTipContent('单击继续绘制，双击完成');
    }
    if (this.controlPoints.length > 1) {
      this.controlPoints.splice(this.controlPoints.length - 1, 1);
    }
    // 将当前绘制点添加到控制点数组中
    this.controlPoints.push(clickPoint);
    this.isMovedAfterClick = false;
    // 如果没有注册鼠标移动事件，则注册
    if (!this.mouseMoveFn) {
      this.mouseMoveFn = this.mapView.on('pointer-move', this.draw.bind(this));
    }
    // 如果没有注册鼠标双击事件
    if (!this.mouseDoubleClickFn) {
      this.mouseDoubleClickFn = this.mapView.on(
        'double-click',
        this.endDraw.bind(this),
      );
    }
    evt.stopPropagation();
  }

  // 鼠标移动事件处理方法
  // 以鼠标当前焦点为结束点绘制图形，并清除上一个结束点图形
  draw(evt: any) {
    // evt.stopPropagation();
    // 鼠标当前焦点作为标绘结束点
    this.endPoint = this.toMapPoint(evt);
    // 去除上一个移动点
    if (this.isMovedAfterClick) {
      this.controlPoints.splice(this.controlPoints.length - 1, 1);
    }
    // 将当前鼠标焦点添加到控制点数组中
    this.controlPoints.push(this.endPoint);

    // 清除之前的绘制图形
    this.drawLayer.removeAll();
    // 绘制
    let rings = this.drawControl.draw(this.controlPoints);
    this.addToEsriMap(rings);
    this.isMovedAfterClick = true;
  }

  // 鼠标双击事件处理方法,结束绘制
  endDraw(evt: any) {
    evt.stopPropagation();
    this.mapView.container.style.cursor = 'default';
    // alert('冒泡');

    // 移除键盘事件
    document.removeEventListener('keydown', this.goprepoint);

    this.drawLayer.removeAll();
    // 取消鼠标单击事件绑定
    this.mouseClickFn.remove();
    // 取消鼠标移动事件绑定
    this.mouseMoveFn.remove();
    // 取消鼠标双击事件绑定
    this.mouseDoubleClickFn.remove();
    this.mouseClickFn = null;
    this.mouseMoveFn = null;
    this.mouseDoubleClickFn = null;

    let endPnt = evt.screenPoint || evt;
    if (this.drawEndHandler) {
      this.drawEndHandler({
        type: this.plotType,
        graphic: this.finallyGraphic,
        endPnt: endPnt,
      });
    }
  }

  toMapPoint(evt: any) {
    return this.mapView.toMap({ x: evt.x, y: evt.y });
  }

  // 添加到地图上
  addToEsriMap(rings: any) {
    if (!rings) {
      return;
    }
    let spatialReference = this.mapView.spatialReference;
    let graphic = null;
    // 绘制双箭头的第二个点时
    if (this.plotType === 'double_arrow' && this.controlPoints.length === 2) {
      // 绘制双箭头尾部
      let polyline = new Polyline({
        paths: rings,
        spatialReference: spatialReference,
        hasZ: false,
      });
      let double_arrow_line: any =
        this.symbol || this.plotSymbol.symbol[this.plotType];
      graphic = new (Graphic as any)(polyline, double_arrow_line);
    } else {
      // 军标上所有点绘制完毕，构建点串集合rings
      let polygon = new Polygon({
        spatialReference: spatialReference,
      });
      polygon.addRing(rings);
      let symbol = this.symbol || this.plotSymbol.symbol[this.plotType];
      graphic = new Graphic({
        geometry: polygon,
        symbol: symbol,
      });
    }
    if (graphic) {
      this.finallyGraphic = graphic;
      // 将graphic发出去
    }
    this.drawLayer.add(graphic);
  }

  onDrawEnd(func: any) {
    this.drawEndHandler = func;
  }

  cancel() {
    this.mapView.container.style.cursor = 'default';

    // 移除键盘事件
    document.removeEventListener('keydown', this.goprepoint);

    this.drawLayer.removeAll();
    // 取消鼠标单击事件绑定
    if (this.mouseClickFn) {
      this.mouseClickFn.remove();
    }
    this.mouseClickFn = null;
    // 取消鼠标移动事件绑定
    if (this.mouseMoveFn) {
      this.mouseMoveFn.remove();
    }
    this.mouseMoveFn = null;
    // 取消鼠标双击事件绑定
    if (this.mouseDoubleClickFn) {
      this.mouseDoubleClickFn.remove();
    }
    this.mouseDoubleClickFn = null;
  }
}

export default PlotDrawTool;
