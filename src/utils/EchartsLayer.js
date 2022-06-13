/**
 * @Description:EchartsLayer图层，arcgis结合Echart图层。用于实现迁徙图
 * @Author: Pensiveant
 * @Date: 2022-06-10 17:48:39
 * @reference: https://www.jianshu.com/p/83f85a55ccfa、https://blog.csdn.net/qq_35117024/article/details/105112055、https://blog.csdn.net/Ocean111best/article/details/109912866
 */

import * as echarts from 'echarts';
import SpatialReference from '@arcgis/core/geometry/SpatialReference';

class ArcgisCoordinateSystem {
  constructor(view) {
    this.view = view;
    this._mapOffset = [0, 0];
    this.dimensions = ['x', 'y'];
  }

  setMapOffset(mapOffset) {
    this._mapOffset = mapOffset;
  }
  dataToPoint(data) {
    var point = {
      type: 'point',
      x: data[0],
      y: data[1],
      spatialReference: new SpatialReference(4326),
    };
    var px = view.toScreen(point);
    var mapOffset = this._mapOffset;
    return [px.x - mapOffset[0], px.y - mapOffset[1]];
  }

  pointToData(pt) {
    var mapOffset = this._mapOffset;
    var screentPoint = { x: pt[0] + mapOffset[0], y: pt[1] + mapOffset[1] };
    var data = view.toMap(screentPoint);
    return [data.x, data.y];
  }

  getViewRect() {
    return new graphic.BoundingRect(0, 0, this.view.width, this.view.height);
  }
  getRoamTransform() {
    return matrix.create();
  }
}

ArcgisCoordinateSystem.dimensions = ['x', 'y'];

ArcgisCoordinateSystem.create = function (ecModel) {
  ecModel.eachSeries(function (seriesModel) {
    if (seriesModel.get('coordinateSystem') === 'arcgis') {
      seriesModel.coordinateSystem = new ArcgisCoordinateSystem(view);
    }
  });
};

ArcgisCoordinateSystem.getDimensionsInfo = function () {
  return ['x', 'y'];
};

class EchartsLayer {
  constructor(view, option) {
    this.view = view;
    this.visible = true;
    //注册一个坐标系arcgis
    echarts.registerCoordinateSystem('arcgis', ArcgisCoordinateSystem);
    this.init(view, option);
  }
  init(view, option) {
    this.createLayer();
    //this.setChartOption(option);
  }
  setChartOption(option) {
    this.chartOption = option;
    this.setCharts();
  }
  setVisible(bool) {
    if (!this.box || this.visible === bool) return;
    this.box.hidden = !bool;
    this.visible = bool;
    bool === true && setCharts();
  }
  refreshBegin() {
    this.box.hidden = true;
  }
  refreshing() {
    setCharts();
  }
  refreshEnd() {
    this.box.hidden = false;
  }
  on(eventName, handler, context) {
    this.chart.on(eventName, handler, context);
  }
  off(eventName, handler, context) {
    this.chart.off(eventName, handler, context);
  }

  setCharts() {
    if (!this.visible) return;
    if (this.chartOption == null || this.chartOption == 'undefined') return;
    let baseExtent = this.view.extent;
    //判断是否使用了mark类型标签，每次重绘要重新转换地理坐标到屏幕坐标
    //根据地图extent,重绘echarts
    this.chartOption.xAxis = {
      show: false,
      min: baseExtent.xmin,
      max: baseExtent.xmax,
    };
    this.chartOption.yAxis = {
      show: false,
      min: baseExtent.ymin,
      max: baseExtent.ymax,
    };
    this.chart.setOption(this.chartOption);
    this.chartOption.animation = false;
  }
  /*创建layer的容器，添加到map的layers下面*/
  createLayer() {
    let box = (this.box = document.createElement('div'));
    box.setAttribute('id', 'echartsLayer');
    box.setAttribute('name', 'testData');
    box.style.width = this.view.width + 'px';
    box.style.height = this.view.height + 'px';
    box.style.position = 'absolute';
    box.style.top = 0;
    box.style.left = 0;
    let parent = document.getElementsByClassName('esri-view-surface')[0];
    parent.appendChild(box);
    this.chart = echarts.init(box);
    //this.setCharts();
    this.startMapEventListeners();
  }
  /*销毁实例*/
  removeLayer() {
    this.box.outerHTML = '';
    this.view = null;
    this.box = null;
    this.originLyr = null;
    this.features = null;
    this.screenData = [];
    this.chart = null;
    this.chartOption = null;
    this.map_DragStart_Listener.remove();
    this.map_DragEnd_Listener.remove();
    this.map_ZoomStart_Listener.remove();
    this.map_ZoomEnd_Listener.remove();
    this.map_ExtentChange_Listener.remove();
  }
  /*监听地图事件，根据图层是否显示，判断是否重绘echarts*/
  startMapEventListeners() {
    let view = this.view;
    var that = this;
    view.watch('extent', function () {
      if (!that.visible) return;
      that.setCharts();
      that.chart.resize();
      that.box.hidden = false;
    });
    view.watch('rotation', function () {
      if (!that.visible) return;
      that.setCharts();
      that.chart.resize();
      that.box.hidden = false;
    });
  }
}

export default EchartsLayer;
