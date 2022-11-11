import PictureMarkerSymbol from '@arcgis/core/symbols/PictureMarkerSymbol';
import SimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol';
import SimpleLineSymbol from '@arcgis/core/symbols/SimpleLineSymbol';

class PlotSymbol {
  symbol = {
    /**
     * 测试点
     */
    // general_point: new PictureMarkerSymbol(window.appcfg.poltimg, 20, 20),
    /**
     * 测试线
     */
    general_line: new SimpleLineSymbol({
      color: [132, 0, 168, 255],
      width: '2px',
      style: 'solid',
    }),
    /**
     * 测试自由画线
     */
    general_freePolyline: new SimpleLineSymbol({
      color: [132, 0, 168, 255],
      width: '2px',
      style: 'solid',
    }),
    /**
     * 测试面
     */
    general_polygon: new SimpleFillSymbol({
      style: 'solid',
      color: [0, 0, 0, 0.25],
      outline: {
        color: [255, 0, 0],
        width: 2,
      },
    }),
    /**
     * 测试矩形
     */
    general_rectangle: new SimpleFillSymbol({
      style: 'solid',
      color: [0, 0, 0, 0.25],
      outline: {
        color: [255, 0, 0],
        width: 2,
      },
    }),
    /**
     * 普通箭头
     */
    general_arrow: new SimpleFillSymbol({
      style: 'solid',
      color: [0, 0, 0, 0.25],
      outline: {
        color: [255, 0, 0],
        width: 2,
      },
    }),
    /**
     * 燕尾箭头
     */
    swallowtail_arrow: new SimpleFillSymbol({
      style: 'solid',
      color: [0, 0, 0, 0.25],
      outline: {
        color: [255, 0, 0],
        width: 2,
      },
    }),
    /**
     * 双箭头
     */
    double_arrow: new SimpleFillSymbol({
      style: 'solid',
      color: [0, 0, 0, 0.25],
      outline: {
        color: [255, 0, 0],
        width: 2,
      },
    }),
    /**
     * 双箭头尾部线
     */
    double_arrow_line: new SimpleLineSymbol({
      style: 'solid',
      color: [255, 0, 0, 255],
      width: 2,
    }),
  };

  getBusPoint(img: any) {
    var sym = new PictureMarkerSymbol({
      url: 'images/plot/icon/' + img + '.png',
      width: 14,
      height: 14,
    });
    return sym;
  }
}

export default PlotSymbol;
