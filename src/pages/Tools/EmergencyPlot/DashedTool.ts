/*
 * @Description: 标绘虚线箭头工具
 */

import Graphic from '@arcgis/core/Graphic';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import * as geometryEngine from '@arcgis/core/geometry/geometryEngine';
import Polyline from '@arcgis/core/geometry/Polyline';
import Point from '@arcgis/core/geometry/Point';
import Polygon from '@arcgis/core/geometry/Polygon';
import Circle from '@arcgis/core/geometry/Circle';
import plotDistance from './util/plotDistance';
import { throttle } from './util/index';
import { PlotTypes } from './plotTypes';

const DRAW_LAYER_ID = 'PLOT_TEMP_LAYER_ID'; // 临时图层
interface DrawEndEvent {
  type: PlotTypes;
  graphic: __esri.Graphic;
  points: __esri.Point[];
}
interface Options {
  view: __esri.SceneView;
  polylineSymbol?: __esri.Symbol;
  polygonSymbol?: __esri.Symbol;
  onDrawEnd?: (event: DrawEndEvent) => void;
}
interface Handler {
  remove: () => void;
}
const pointSymbol = {
  type: 'simple-marker',
  color: '#ffffff',
  size: '8px',
  outline: {
    color: '#000000',
    width: 1,
  },
};

class DashedTool {
  view: __esri.SceneView;
  tempLayer: __esri.GraphicsLayer | null = null; // 临时图层
  plotType: PlotTypes = PlotTypes.straightDashedArrow; // 标绘类型 straightDashedArrow: 直虚线 curveDashedArrow: 曲虚线
  clickHandler: Handler | null = null; // 单击事件
  doubleClickHandler: Handler | null = null; // 双击事件
  pointerMoveHandler: Handler | null = null; // 鼠标移动事件
  private pathPoints: __esri.Point[] = []; // 标绘点击的路径点
  polylineSymbol: __esri.Symbol | undefined;
  polygonSymbol: __esri.Symbol | undefined;
  drawEndCallback: (event: DrawEndEvent) => void = () => {}; // 完成绘制的回调

  constructor(options: Options) {
    this.view = options.view;
    this.polylineSymbol = options.polylineSymbol;
    this.polygonSymbol = options.polygonSymbol;
    if (options.onDrawEnd) {
      this.drawEndCallback = options.onDrawEnd;
    }
    this.initLayer(); // 初始化图层
    // this.createUpdateGraphicsWatch();
  }

  // 初始化图层
  initLayer() {
    if (this.view) {
      let tempLayer = this.view.map.findLayerById(
        DRAW_LAYER_ID,
      ) as __esri.GraphicsLayer;
      if (tempLayer) {
        this.tempLayer = tempLayer;
      } else {
        this.tempLayer = new GraphicsLayer({
          id: DRAW_LAYER_ID,
          title: '标绘临时图层',
        });
        this.view?.map.add(this.tempLayer as __esri.GraphicsLayer);
      }
    }
  }

  // createUpdateGraphicsWatch() {
  //   let extentOnChange = throttle(() => {
  //     this.updateGraphics();
  //   }, 300);
  //   if (window['__viewUpdateGraphicsWatchHandler__']) {
  //     window['__viewUpdateGraphicsWatchHandler__'].remove();
  //     window['__viewUpdateGraphicsWatchHandler__'] = null;
  //   }
  //   window['__viewUpdateGraphicsWatchHandler__'] = this.view.watch(
  //     'extent',
  //     () => {
  //       extentOnChange();
  //     }
  //   );
  // }

  static createUpdateLineWatch(view: any) {
    let extentOnChange = throttle(() => {
      DashedTool.updateLine(view);
    }, 300);
    if ((window as any)['__viewUpdateLineWatchHandler__']) {
      (window as any)['__viewUpdateLineWatchHandler__'].remove();
      (window as any)['__viewUpdateLineWatchHandler__'] = null;
    }
    (window as any)['__viewUpdateLineWatchHandler__'] = view.watch(
      'extent',
      () => {
        extentOnChange();
      },
    );
  }

  static updateLine(view: __esri.SceneView) {
    let lineLayer: __esri.GraphicsLayer = view.map.findLayerById(
      'plottingLineLayer',
    ) as __esri.GraphicsLayer;
    if (lineLayer) {
      let removeGraphics = lineLayer.graphics
        .filter(
          (item) =>
            (item.attributes.type === PlotTypes.straightDashed ||
              item.attributes.type === PlotTypes.straightDashedArrow ||
              item.attributes.type === PlotTypes.curveDashedArrow ||
              item.attributes.type === PlotTypes.straightArrow ||
              item.attributes.type === PlotTypes.curveArrow ||
              item.attributes.type === PlotTypes.circleDashed ||
              item.attributes.type === PlotTypes.dashedRectangle) &&
            item.visible,
        )
        .toArray();
      lineLayer.removeMany(removeGraphics);
      let lineGraphics = lineLayer.graphics
        .filter(
          (item) =>
            (item.attributes.type === PlotTypes.straightDashed ||
              item.attributes.type === PlotTypes.straightDashedArrow ||
              item.attributes.type === PlotTypes.curveDashedArrow ||
              item.attributes.type === PlotTypes.straightArrow ||
              item.attributes.type === PlotTypes.curveArrow ||
              item.attributes.type === PlotTypes.circleDashed ||
              item.attributes.type === PlotTypes.dashedRectangle) &&
            !item.visible,
        )
        .toArray();
      lineGraphics.forEach((item) => {
        let paths: number[][][] = [];
        let p1; // 用来计算箭头方向的点
        let p2; // 用来计算箭头方向的点
        let number = (item.geometry as __esri.Polyline).paths[0].length; // 点的数量
        p1 = [
          (item.geometry as __esri.Polyline).paths[0][number - 2][0],
          (item.geometry as __esri.Polyline).paths[0][number - 2][1],
        ];
        p2 = [
          (item.geometry as __esri.Polyline).paths[0][number - 1][0],
          (item.geometry as __esri.Polyline).paths[0][number - 1][1],
        ];
        if (
          item.attributes.type === PlotTypes.straightDashed ||
          item.attributes.type === PlotTypes.straightDashedArrow ||
          item.attributes.type === PlotTypes.dashedRectangle
        ) {
          // 直虚线、直虚线箭头、虚线矩形
          let fullLine = this.createLineByPoints(
            (item.geometry as __esri.Polyline).paths[0],
            view,
          );
          let cliped: any = geometryEngine.clip(fullLine, view.extent); // 裁剪后的
          if (cliped && cliped.paths.length && cliped.paths[0].length) {
            for (let i = 0; i < cliped.paths.length; i++) {
              let segmentLength = 20 * view.resolution; // 线段长度
              let dashedPaths = DashedTool.getLineDashedPaths(
                cliped.paths[i],
                segmentLength,
                view,
              );
              paths.push(...dashedPaths);
            }
          }
        } else if (item.attributes.type === PlotTypes.curveDashedArrow) {
          // 曲虚线箭头
          let points = (item.geometry as __esri.Polyline).paths[0];
          paths = DashedTool.getCurvePaths(points, item.attributes.type, view);
          if (paths.length > 0) {
            let pathsLength = paths.length;
            let pathLength = paths[pathsLength - 1].length;
            let endPoint = paths[pathsLength - 1][pathLength - 1];
            // 判断最后一个点坐标是否是点击的最后一个坐标
            if (
              endPoint[0] === points[points.length - 1][0] &&
              endPoint[1] === points[points.length - 1][1]
            ) {
              p1 = paths[pathsLength - 1][pathLength - 2];
              p2 = paths[pathsLength - 1][pathLength - 1];
            }
          }
        } else if (item.attributes.type === PlotTypes.straightArrow) {
          // 直线箭头
          paths = (item.geometry as __esri.Polyline).paths;
        } else if (item.attributes.type === PlotTypes.curveArrow) {
          // 曲线箭头
          let points = (item.geometry as __esri.Polyline).paths[0];
          paths = DashedTool.getCurvePaths(points, item.attributes.type, view);
          let pathsLength = paths.length;
          let pathLength = paths[pathsLength - 1].length;
          p1 = paths[pathsLength - 1][pathLength - 2];
          p2 = paths[pathsLength - 1][pathLength - 1];
        } else if (item.attributes.type === PlotTypes.circleDashed) {
          // 虚线圆
          let rings = (item.geometry as __esri.Polyline).paths;
          paths = DashedTool.getCircleDashedPaths(rings, view);
        }
        // 获取箭头的paths
        if (paths.length > 0) {
          if (
            p1 &&
            p2 &&
            item.attributes.type !== PlotTypes.straightDashed &&
            item.attributes.type !== PlotTypes.circleDashed &&
            item.attributes.type !== PlotTypes.dashedRectangle
          ) {
            let arrowPaths = DashedTool.getArrowPaths(p1, p2, view);
            paths = paths.concat(arrowPaths);
          }
          let line = new Polyline({
            paths: paths,
            spatialReference: view.spatialReference,
          });
          let lineGraphic = new Graphic({
            geometry: line,
            symbol: item.symbol,
            attributes: item.attributes,
          });
          lineLayer.add(lineGraphic);
        }
      });
    }
  }

  // 开始标绘
  active(type: PlotTypes) {
    this.removeClickHandler(); // 清除点击事件
    this.view.container.style.cursor = 'crosshair';
    this.plotType = type;
    // 单击添加点
    this.clickHandler = this.view.on('click', (event) => {
      // 阻止事件冒泡触发view 上其他事件
      event.stopPropagation();

      this.pathPoints.push(event.mapPoint);
      this.updateGraphics(this.pathPoints); // 更新图形
      // 如果有两个点且类型是 虚线圆、虚线面圆、虚线矩形 则结束绘制
      if (
        this.pathPoints.length === 2 &&
        (this.plotType === PlotTypes.circleDashed ||
          this.plotType === PlotTypes.circleDashedPlane ||
          this.plotType === PlotTypes.dashedRectangle)
      ) {
        this.onDrawComplete(this.pathPoints, this.plotType, this.view);
      }
    });
    // 双击结束
    this.doubleClickHandler = this.view.on('double-click', (event) => {
      if (this.pathPoints.length > 0) {
        event.stopPropagation();
        this.pathPoints.push(event.mapPoint);
        this.onDrawComplete(this.pathPoints, this.plotType, this.view);
      }
    });
    // 鼠标移动事件
    this.pointerMoveHandler = this.view.on(
      'pointer-move',
      throttle((event: any) => {
        if (this.pathPoints.length > 0) {
          let pointArr = this.pathPoints
            .concat(this.view.toMap(event))
            .filter((item) => !!item);
          this.updateGraphics(pointArr);
          // 直虚线和虚线圆显示标绘距离
          if (
            this.plotType === PlotTypes.straightDashed ||
            this.plotType === PlotTypes.circleDashed
          ) {
            let line = new Polyline({
              paths: [pointArr.map((point) => [point.x, point.y])],
              spatialReference: pointArr[0].spatialReference,
            });
            // plotDistance(line, this.view, this.plotType);
          }
        }
      }, 1000 / 24),
    );
  }

  // 完成绘制
  onDrawComplete(
    pathPoints: __esri.Point[],
    plotType: PlotTypes,
    view: __esri.SceneView,
  ) {
    this.removeClickHandler();
    let geometry;
    let visible = true;
    let points = pathPoints.map((point) => {
      return [point.x, point.y];
    });
    if (
      plotType === PlotTypes.straightDashed ||
      plotType === PlotTypes.straightDashedArrow ||
      plotType === PlotTypes.curveDashedArrow ||
      plotType === PlotTypes.straightArrow ||
      plotType === PlotTypes.curveArrow
    ) {
      // 直线虚线、直虚线箭头、曲虚线箭头、直线箭头、曲线箭头
      geometry = new Polyline({
        paths: [points],
        spatialReference: view.spatialReference,
      });
      visible = false;
    } else if (
      plotType === PlotTypes.straightDashedPlaneArrow ||
      plotType === PlotTypes.curveDashedPlaneArrow ||
      plotType === PlotTypes.curvePlaneArrow ||
      plotType === PlotTypes.straightPlaneArrow
    ) {
      // 直虚线面箭头、曲虚线面箭头、曲线面箭头、直线面箭头
      let rings = DashedTool.getPlaneRings(points, plotType, view);
      geometry = new Polygon({
        rings: rings,
        spatialReference: view.spatialReference,
      });
    } else if (plotType === PlotTypes.circleDashed) {
      // 虚线圆
      let rings = DashedTool.getCircleRings(points, view);
      geometry = new Polyline({
        paths: rings,
        spatialReference: view.spatialReference,
      });
      visible = false;
    } else if (plotType === PlotTypes.circleDashedPlane) {
      // 虚线面圆
      let rings = DashedTool.getCircleDashedPlaneRings(points, this.view);
      geometry = new Polygon({
        rings: rings,
        spatialReference: view.spatialReference,
      });
    } else if (plotType === PlotTypes.straightDashedPlane) {
      // 直虚线面
      let rings = DashedTool.getStraightDashedPlaneRings(points, this.view);
      geometry = new Polygon({
        rings: rings,
        spatialReference: view.spatialReference,
      });
    } else if (plotType === PlotTypes.dashedRectangle) {
      // 虚线矩形
      let paths = DashedTool.getRectanglePaths(points, this.view);
      geometry = new Polyline({
        paths: paths,
        spatialReference: view.spatialReference,
      });
      visible = false;
    }
    let graphic = new Graphic({
      geometry: geometry,
      attributes: {},
      visible,
    });
    this.drawEndCallback({
      type: plotType,
      graphic: graphic,
      points: this.pathPoints,
    });
    this.pathPoints = [];
    this.tempLayer?.removeAll();
  }

  // 清除点击事件
  removeClickHandler() {
    this.view.container.style.cursor = 'default';
    if (this.clickHandler) {
      this.clickHandler.remove();
      this.clickHandler = null;
    }
    if (this.doubleClickHandler) {
      this.doubleClickHandler.remove();
      this.doubleClickHandler = null;
    }
    if (this.pointerMoveHandler) {
      this.pointerMoveHandler.remove();
      this.pointerMoveHandler = null;
      plotDistance(); // 取消显示标绘距离
    }
  }

  // 更新
  private updateGraphics(pathPoints: __esri.Point[]) {
    this.tempLayer?.removeAll(); // 清除全部
    let pointGraphics: __esri.Graphic[] = []; // 小圆点列表
    for (let i = 0; i < pathPoints.length; i++) {
      pointGraphics.push(
        new Graphic({
          geometry: pathPoints[i],
          symbol: pointSymbol,
        }),
      );
    }
    this.tempLayer?.addMany(pointGraphics);

    let points: [number, number][] = pathPoints.map((item) => [item.x, item.y]);
    let paths: number[][][] = [];
    // 判断线类型
    if (
      this.plotType === PlotTypes.straightDashed ||
      this.plotType === PlotTypes.straightDashedArrow
    ) {
      // 直虚线、直虚线箭头
      let fullLine = DashedTool.createLineByPoints(points, this.view);
      let cliped: any = geometryEngine.clip(fullLine, this.view.extent); // 裁剪后的
      if (cliped && cliped.paths.length && cliped.paths[0].length) {
        for (let i = 0; i < cliped.paths.length; i++) {
          let segmentLength = 20 * this.view.resolution; // 线段长度
          let dashedPaths = DashedTool.getLineDashedPaths(
            cliped.paths[i],
            segmentLength,
            this.view,
          );
          paths.push(...dashedPaths);
        }
      }
      this.addPolylineToTempLayer(paths);
    } else if (
      this.plotType === PlotTypes.curveDashedArrow ||
      this.plotType === PlotTypes.curveArrow
    ) {
      // 曲虚线箭头、曲线箭头
      paths = DashedTool.getCurvePaths(points, this.plotType, this.view);
      this.addPolylineToTempLayer(paths);
    } else if (this.plotType === PlotTypes.straightArrow) {
      // 直线箭头
      paths = [points];
      this.addPolylineToTempLayer(paths);
    } else if (
      this.plotType === PlotTypes.straightDashedPlaneArrow ||
      this.plotType === PlotTypes.curveDashedPlaneArrow ||
      this.plotType === PlotTypes.straightPlaneArrow ||
      this.plotType === PlotTypes.curvePlaneArrow
    ) {
      // 直虚线面箭头、曲虚线面箭头、直线面箭头、曲线面箭头
      let rings = DashedTool.getPlaneRings(points, this.plotType, this.view);
      this.addPolygonToTempLayer(rings);
    } else if (this.plotType === PlotTypes.circleDashed) {
      // 虚线圆
      let rings = DashedTool.getCircleRings(points, this.view);
      paths = DashedTool.getCircleDashedPaths(rings, this.view);
      this.addPolylineToTempLayer(paths);
    } else if (this.plotType === PlotTypes.circleDashedPlane) {
      // 虚线面圆
      let rings = DashedTool.getCircleDashedPlaneRings(points, this.view);
      this.addPolygonToTempLayer(rings);
    } else if (this.plotType === PlotTypes.straightDashedPlane) {
      // 直虚线面
      let rings = DashedTool.getStraightDashedPlaneRings(points, this.view);
      this.addPolygonToTempLayer(rings);
    } else if (this.plotType === PlotTypes.dashedRectangle) {
      // 虚线矩形
      let paths = DashedTool.getDashedRectanglePaths(points, this.view);
      this.addPolylineToTempLayer(paths);
    }
  }

  // 加线到临时图层
  private addPolylineToTempLayer(paths: number[][][]) {
    let line = new Polyline({
      paths: paths,
      spatialReference: this.view.spatialReference,
    });
    let graphic = new Graphic({
      geometry: line,
      symbol: this.polylineSymbol,
    });
    this.tempLayer?.add(graphic);
  }

  // 加面到临时图层
  private addPolygonToTempLayer(rings: any) {
    let polygon = new Polygon({
      rings: rings,
      spatialReference: this.view.spatialReference,
    });
    let graphic = new Graphic({
      geometry: polygon,
      symbol: this.polygonSymbol,
    });
    this.tempLayer?.add(graphic);
  }

  // 通过点列表生成线
  static createLineByPoints(
    points: number[][],
    view: __esri.SceneView,
  ): __esri.Polyline {
    let line = new Polyline({
      paths: [points],
      spatialReference: view.spatialReference,
    });
    return line;
  }

  /**
   * 获取曲线paths
   * @param points 点列表坐标
   * @param plotType 线类型
   * @param view 地图view对象
   */
  static getCurvePaths(points: number[][], plotType: PlotTypes, view: any) {
    let resolution = view.resolution;
    let segmentLength = 20 * resolution;
    let paths: number[][][] = [];
    if (points.length === 2) {
      if (plotType === PlotTypes.curveArrow) {
        paths = [points];
      } else {
        // 只有两个点时画直线
        let linePaths = [[points[0], points[1]]];
        let dashedPaths = DashedTool.getLineDashedPaths(
          linePaths,
          segmentLength,
          view,
        );
        paths.push(...dashedPaths);
      }
    } else if (points.length > 2) {
      // 大于两个点时画贝塞尔曲线
      let controlPoints = this.getBezierControlPoints(points); // 控制点
      let bezierPoints: number[][] = [];
      for (let i = 0; i < points.length - 1; i++) {
        let list = this.getBezierPoints(
          100,
          points[i],
          controlPoints[i * 2],
          controlPoints[i * 2 + 1],
          points[i + 1],
        );
        bezierPoints = bezierPoints.concat(list);
      }
      if (plotType === PlotTypes.curveArrow) {
        paths = [bezierPoints];
      } else {
        let fullLine = new Polyline({
          paths: [bezierPoints],
          spatialReference: view.spatialReference,
        });
        paths = DashedTool.getDashedPathsByLine(fullLine, view);
      }
    }
    return paths;
  }

  /**
   * 给定一条线，返回虚线paths
   * @param line 给定的线几何图形
   * @param view 地图的view对象
   * @return 返回虚线paths
   */
  static getDashedPathsByLine(line: __esri.Polyline, view: __esri.SceneView) {
    let paths: number[][][] = [];
    let resolution = view.resolution;
    let distance = 20 * resolution;
    let cliped: any = geometryEngine.clip(line, view.extent); // 裁剪后的
    if (cliped && cliped.paths.length && cliped.paths[0].length) {
      for (let i = 0; i < cliped.paths.length; i++) {
        let path: number[][] = [];
        let len = 0; // 长度
        let isSpace = false; // 是否是间隔段
        for (let j = 1; j < cliped.paths[i].length; j++) {
          let p1 = cliped.paths[i][j - 1];
          let p2 = cliped.paths[i][j];
          let loop = true; // 是否循环
          while (loop) {
            if (len === 0) {
              path.push(p1);
            }
            // 两点距离
            let dis = Math.sqrt(
              Math.pow(p2[0] - p1[0], 2) + Math.pow(p2[1] - p1[1], 2),
            );
            if (len + dis > distance) {
              // 长度大于虚线线段长度，则需要加点分割
              let delta = distance - len; //
              let ratio = delta / dis;
              let p_x = p1[0] + (p2[0] - p1[0]) * ratio; // 分割点x坐标
              let p_y = p1[1] + (p2[1] - p1[1]) * ratio; // 分割点y坐标
              path.push([p_x, p_y]);
              if (!isSpace) {
                paths.push(path);
              }
              isSpace = !isSpace;
              len = 0;
              path = [];
              p1 = [p_x, p_y];
            } else if (len + dis < distance) {
              path.push(p2);
              len += dis;
              loop = false;
            } else {
              path.push(p2);
              if (!isSpace) {
                paths.push(path);
              }
              isSpace = !isSpace;
              len = 0;
              path = [];
              loop = false;
            }
          }
        }
        if (i === cliped.paths.length - 1) {
          paths.push(path);
        }
      }
    }
    return paths;
  }

  // 获取虚线圆的paths
  static getCircleDashedPaths(rings: number[][][], view: __esri.SceneView) {
    let circleLine = new Polyline({
      paths: rings,
      spatialReference: view.spatialReference,
    });
    let paths = DashedTool.getDashedPathsByLine(circleLine, view);
    return paths;
  }

  /**
   * 获取圆的rings
   * @param points 点坐标列表
   * @param view 地图的View对象
   * @return 返回圆的rings
   */
  static getCircleRings(
    points: number[][],
    view: __esri.SceneView,
  ): number[][][] {
    if (points.length === 1) {
      return [];
    }
    let p1 = DashedTool.xyToPoint(points[0], view);
    let p2 = DashedTool.xyToPoint(points[1], view);
    let unit: any = 'meters'; // 单位
    let distance = geometryEngine.distance(p1, p2, unit);
    let circle: __esri.Circle = new Circle({
      center: p1,
      radius: distance,
      radiusUnit: unit,
      spatialReference: view.spatialReference,
    });
    return circle.rings;
  }

  /**
   *
   * @param point 中心点坐标 [x, y]
   * @param radius 圆半径
   * @param view 地图的View对象
   * @return 返回圆的rings
   */
  static getCircleRingsByCenterAndRadius(
    point: number[],
    radius: number,
    view: __esri.SceneView,
  ): number[][][] {
    let p = DashedTool.xyToPoint(point, view);
    let unit: any = 'meters'; // 单位
    let circle: __esri.Circle = new Circle({
      center: p,
      radius: radius,
      radiusUnit: unit,
      spatialReference: view.spatialReference,
    });
    return circle.rings;
  }

  /**
   * 获取虚线面圆的rings
   * @param points 点坐标列表
   * @param view 地图的view对象
   */
  static getCircleDashedPlaneRings(
    points: number[][],
    view: __esri.SceneView,
  ): number[][][] {
    if (points.length < 2) {
      return [];
    }
    let rings: number[][][] = [];
    let width = 16; // 宽度
    let segmentLength = 20 * view.resolution; // 线段长度
    let resolution = view.resolution;
    let offsetDistance = (width / 2) * resolution;
    let p1 = DashedTool.xyToPoint(points[0], view);
    let p2 = DashedTool.xyToPoint(points[1], view);
    let unit: any = 'meters'; // 单位
    let distance = geometryEngine.distance(p1, p2, unit);
    let rings1 = DashedTool.getCircleRingsByCenterAndRadius(
      points[0],
      distance - offsetDistance,
      view,
    );
    let rings2 = DashedTool.getCircleRingsByCenterAndRadius(
      points[0],
      distance + offsetDistance,
      view,
    );
    let line1 = DashedTool.createLineByPoints(rings1[0], view);
    let line2 = DashedTool.createLineByPoints(rings2[0], view);
    if (line1 && line2) {
      let line1Length = DashedTool.getLineLength(line1);
      let line2Length = DashedTool.getLineLength(line2);
      let segmentNum = Math.floor(line1Length / segmentLength);
      if (segmentNum % 2 !== 0) {
        segmentNum += 1;
      }
      segmentLength = line1Length / segmentNum;
      let segmentList1 = DashedTool.splitLineBySegmentLength(
        line1,
        segmentLength,
      );
      segmentLength = line2Length / segmentNum;
      let segmentList2 = DashedTool.splitLineBySegmentLength(
        line2,
        segmentLength,
      );
      rings = [];
      for (
        let i = 0;
        i < Math.min(segmentList1.length, segmentList2.length) / 2;
        i++
      ) {
        let ring: number[][] = Array.prototype.concat(
          segmentList1[i * 2].reverse(),
          segmentList2[i * 2],
        );
        ring.push(segmentList1[i * 2][0]);
        rings.push(ring);
      }
      return rings;
    }
    return [];
  }

  /**
   * 获取矩形的四个顶点坐标
   * @param points 对角线的两个顶点坐标
   * @param view 地图的view对象
   * @return 返回矩形的四个顶点坐标
   */
  static getRectanglePaths(
    points: number[][],
    view: __esri.SceneView,
  ): number[][][] {
    if (points.length < 2) {
      return [];
    }
    let p1 = DashedTool.xyToPoint(points[0], view);
    let p2 = DashedTool.xyToPoint(points[1], view);
    let screenPoint1 = view.toScreen(p1);
    let screenPoint2 = view.toScreen(p2);
    let screenPoint3 = { x: screenPoint1.x, y: screenPoint2.y };
    let screenPoint4 = { x: screenPoint2.x, y: screenPoint1.y };
    let p3 = view.toMap(screenPoint3);
    let p4 = view.toMap(screenPoint4);
    if (p3 && p4) {
      return [[points[0], [p3.x, p3.y], points[1], [p4.x, p4.y], points[0]]];
    }
    return [];
  }

  /**
   * 获取虚线矩形的paths
   * @param points 点坐标列表
   * @param view 地图的view对象
   * @return 返回虚线矩形的paths
   */
  static getDashedRectanglePaths(
    points: number[][],
    view: __esri.SceneView,
  ): number[][][] {
    let rectanglePaths = DashedTool.getRectanglePaths(points, view);
    let paths: number[][][] = [];
    if (rectanglePaths[0]) {
      let segmentLength = 20 * view.resolution; // 线段长度
      paths = DashedTool.getLineDashedPaths(
        rectanglePaths,
        segmentLength,
        view,
      );
    }
    return paths;
  }

  /**
   * 获取直虚线面的rings
   * @param points 点坐标列表
   * @param view 地图的view对象
   */
  static getStraightDashedPlaneRings(
    points: number[][],
    view: __esri.SceneView,
  ) {
    if (points.length < 2) {
      return [];
    }
    let rings: number[][][] = [];
    let width = 16; // 宽度
    let segmentLength = 20 * view.resolution; // 线段长度
    let resolution = view.resolution;
    let offsetDistance = (width / 2) * resolution;
    let offsetUnit: any = 'meters';
    let joinType: any = 'round';
    for (let i = 1; i < points.length; i++) {
      let p1 = points[i - 1];
      let p2 = points[i];
      let line = DashedTool.createLineByPoints([p1, p2], view);
      let line1: any = geometryEngine.offset(
        line,
        offsetDistance,
        offsetUnit,
        joinType,
      );
      let line2: any = geometryEngine.offset(
        line,
        -offsetDistance,
        offsetUnit,
        joinType,
      );
      let segmentList1 = DashedTool.splitLineBySegmentLength(
        line1,
        segmentLength,
      );
      let segmentList2 = DashedTool.splitLineBySegmentLength(
        line2,
        segmentLength,
      );
      for (
        let i = 0;
        i < Math.min(segmentList1.length, segmentList2.length);
        i++
      ) {
        if (i % 2 !== 0) {
          continue;
        }
        let ring: number[][] = Array.prototype.concat(
          segmentList1[i].reverse(),
          segmentList2[i],
        );
        ring.push(segmentList1[i][0]);
        rings.push(ring);
      }
    }
    return rings;
  }

  /**
   * 获取面的rings
   * @param points 点坐标列表
   * @param plotType 绘制的类型
   * @param view 地图的View对象
   */
  static getPlaneRings(
    points: number[][],
    plotType: PlotTypes,
    view: __esri.SceneView,
  ): number[][][] {
    let rings: number[][][] = [];
    let width = 16; // 宽度
    let segmentLength = 20 * view.resolution; // 线段长度
    let resolution = view.resolution;
    let offsetDistance = (width / 2) * resolution;
    let offsetUnit: any = 'meters';
    let joinType: any = 'round';
    let arrowLen = width * resolution; // 箭头长度
    let pointsLen = points.length;
    let p_arrow = points[pointsLen - 1]; // 箭头尖点坐标

    if (points.length >= 2) {
      // 最后的点
      let p1 = DashedTool.xyToPoint(points[pointsLen - 1], view);
      // 倒数第二个点
      let p2 = DashedTool.xyToPoint(points[pointsLen - 2], view);
      let distance = geometryEngine.distance(p1, p2, 'meters');
      // 如果距离大于箭头长度，则需要添加点
      if (distance > arrowLen) {
        let ratio = arrowLen / distance;
        let p_x = p1.x - (p1.x - p2.x) * ratio;
        let p_y = p1.y - (p1.y - p2.y) * ratio;
        points[pointsLen - 1] = [p_x, p_y];
      } else {
        points.pop();
        // points长度为1时，只能画个三角形
        if (points.length === 1) {
          let pT_x = ((p1.x - p2.x) * arrowLen + distance * p2.x) / distance;
          let pT_y = ((p1.y - p2.y) * arrowLen + distance * p2.y) / distance;
          let pT = DashedTool.xyToPoint([pT_x, pT_y], view);
          let pL: any = geometryEngine.rotate(pT, 90, p2);
          let pR: any = geometryEngine.rotate(pT, -90, p2);
          return [
            [
              [pL.x, pL.y],
              [p_arrow[0], p_arrow[1]],
              [pR.x, pR.y],
              [pL.x, pL.y],
            ],
          ];
        }
      }
    }
    if (plotType === PlotTypes.straightDashedPlaneArrow) {
      // 直虚线面箭头
      rings = DashedTool.getStraightDashedPlaneRings(points, view);
      let arrowRings = this.getArrowRingsBy2Points(
        p_arrow,
        points[points.length - 1],
        segmentLength,
        view,
      );
      rings.push(arrowRings[0]);
      return rings;
    }
    let line: __esri.Polyline | undefined;
    let line1: __esri.Polyline | undefined;
    let line2: __esri.Polyline | undefined;
    if (
      plotType === PlotTypes.curveDashedPlaneArrow ||
      plotType === PlotTypes.curvePlaneArrow
    ) {
      // 曲虚线面箭头 或者 曲线面箭头
      if (points.length === 2) {
        line = new Polyline({
          paths: [points],
          spatialReference: view.spatialReference,
        });
      } else if (points.length > 2) {
        line = this.getBezierCurveLine(points, view);
      }
    } else if (plotType === PlotTypes.straightPlaneArrow) {
      // 直线面箭头
      line = new Polyline({
        paths: [points],
        spatialReference: view.spatialReference,
      });
    }
    if (line && points.length >= 2) {
      line1 = geometryEngine.offset(
        line,
        offsetDistance,
        offsetUnit,
        joinType,
      ) as __esri.Polyline;
      line2 = geometryEngine.offset(
        line,
        offsetDistance * -1,
        offsetUnit,
        joinType,
      ) as __esri.Polyline;
    }
    if (line && line1 && line2) {
      //  获取箭头rings
      let arrowRings = this.getArrowRings(
        p_arrow,
        points[points.length - 1],
        line1.paths[0][line1.paths[0].length - 1],
        line2.paths[0][line2.paths[0].length - 1],
        view,
      );
      // 判断是否是曲虚线面箭头
      if (plotType === PlotTypes.curveDashedPlaneArrow) {
        // 计算线段数量
        let lineLength = this.getLineLength(line);
        let line1Length = this.getLineLength(line1);
        let line2Length = this.getLineLength(line2);
        let segmentNum = Math.floor(lineLength / segmentLength);
        if (segmentNum % 2 === 0) {
          segmentNum += 1;
        }
        segmentLength = line1Length / segmentNum;
        let line1Paths = this.splitLineBySegmentLength(line1, segmentLength);
        segmentLength = line2Length / segmentNum;
        let line2Paths = this.splitLineBySegmentLength(line2, segmentLength);
        for (let i = 0; i < segmentNum; i++) {
          if (i % 2 === 0) {
            let ring: number[][] = [];
            if (i === segmentNum - 1) {
              ring = Array.prototype.concat(
                line1Paths[i],
                arrowRings[0],
                line2Paths[i].reverse(),
              );
            } else {
              ring = Array.prototype.concat(
                line1Paths[i],
                line2Paths[i].reverse(),
              );
            }
            ring.push(line1Paths[i][0]);
            ring.reverse();
            rings.push(ring);
          }
        }
      } else {
        // 曲线面箭头
        rings = [
          Array.prototype.concat(
            line1.paths[0],
            arrowRings[0],
            line2.paths[0].reverse(),
            [line1.paths[0][0]],
          ),
        ];
      }
    }
    return rings;
  }

  // 裁剪线
  static cutLine(line: __esri.Polyline, cutter: __esri.Polyline) {
    try {
      let cutResult = geometryEngine.cut(line, cutter);
      return cutResult;
    } catch (error) {
      let cutLinePoints = line.paths[0];
      let cutterPoints = cutter.paths[0];
      for (let i = 0; i < cutterPoints.length; i++) {
        for (let j = 0; j < cutLinePoints.length; j++) {
          if (
            cutLinePoints[j][0] === cutterPoints[i][0] &&
            cutLinePoints[j][1] === cutterPoints[i][1]
          ) {
            let splitLine1Points = cutLinePoints.slice(0, j + 1);
            let splitLine2Points = cutLinePoints.slice(j);
            let line1 = new Polyline({
              paths: [splitLine1Points],
              spatialReference: line.spatialReference,
            });
            let line2 = new Polyline({
              paths: [splitLine2Points],
              spatialReference: line.spatialReference,
            });
            return splitLine2Points.length === 0 ||
              splitLine2Points.length === 1
              ? [line1]
              : [line2, line1];
          }
        }
      }
    }
  }

  // 获取线长度
  static getLineLength(line: __esri.Polyline) {
    let len = 0;
    for (let i = 1; i < line.paths[0].length; i++) {
      let p1 = line.paths[0][i - 1];
      let p2 = line.paths[0][i];
      // 两点距离
      let dis = Math.sqrt(
        Math.pow(p2[0] - p1[0], 2) + Math.pow(p2[1] - p1[1], 2),
      );
      len += dis;
    }
    return len;
  }

  /**
   * 获取线的虚线paths
   * @param linePaths polyline的paths
   * @param segmentLength 线段长度
   * @param view 地图view对象
   * @return 返回线的虚线paths
   */
  static getLineDashedPaths(
    linePaths: number[][][],
    segmentLength: number,
    view: __esri.SceneView,
  ): number[][][] {
    let line = new Polyline({
      paths: linePaths,
      spatialReference: view.spatialReference,
    });
    let segmentList = DashedTool.splitLineBySegmentLength(line, segmentLength);
    let dashedPaths = segmentList.filter((item, i) => i % 2 === 0);
    return dashedPaths;
  }

  /**
   * @desc 根据线段长度分割线，并返回每段线段的点列表
   * @param {Polyline} line 线
   * @param {number} segmentLength 线段长度
   * @return 返回每段线段的点列表
   */
  static splitLineBySegmentLength(
    line: __esri.Polyline,
    segmentLength: number,
  ) {
    let linePaths: number[][][] = [];
    let len = 0; // 长度
    let segmentPoints: number[][] = []; // 每段线段的点列表
    for (let i = 1; i < line.paths[0].length; i++) {
      let p1 = line.paths[0][i - 1];
      let p2 = line.paths[0][i];
      let loop = true; // 是否循环
      while (loop) {
        if (len === 0) {
          segmentPoints.push(p1);
        }
        // 两点距离
        let dis = Math.sqrt(
          Math.pow(p2[0] - p1[0], 2) + Math.pow(p2[1] - p1[1], 2),
        );
        if (len + dis > segmentLength) {
          // 长度大于虚线线段长度，则需要加点分割
          let delta = segmentLength - len; //
          let ratio = delta / dis;
          let p_x = p1[0] + (p2[0] - p1[0]) * ratio; // 分割点x坐标
          let p_y = p1[1] + (p2[1] - p1[1]) * ratio; // 分割点y坐标
          segmentPoints.push([p_x, p_y]);
          linePaths = linePaths.concat([segmentPoints]);
          len = 0;
          segmentPoints = [];
          p1 = [p_x, p_y];
        } else if (len + dis < segmentLength) {
          segmentPoints.push(p2);
          len += dis;
          loop = false;
        } else {
          segmentPoints.push(p2);
          linePaths = linePaths.concat([segmentPoints]);
          len = 0;
          segmentPoints = [];
          loop = false;
        }
      }
    }
    if (segmentPoints.length > 0) {
      linePaths = linePaths.concat([segmentPoints]);
    }
    return linePaths;
  }

  // 获取贝塞尔曲线geometry
  static getBezierCurveLine(points: any, view: any) {
    let controlPoints = this.getBezierControlPoints(points); // 控制点
    let bezierPoints: number[][] = [];
    for (let i = 0; i < points.length - 1; i++) {
      let list = this.getBezierPoints(
        20,
        points[i],
        controlPoints[i * 2],
        controlPoints[i * 2 + 1],
        points[i + 1],
      );
      if (i !== points.length - 1) {
        list.shift();
      }
      bezierPoints = bezierPoints.concat(list);
    }
    let fullLine = new Polyline({
      paths: [bezierPoints],
      spatialReference: view.spatialReference,
    });
    return fullLine;
  }

  // 获取箭头paths
  static getArrowPaths(p1: any, p2: any, view: any) {
    let resolution = view.resolution; // 分辨率
    let distance = 20 * resolution; // 箭头长度
    // 最后一段线段长度
    let length = Math.sqrt(
      Math.pow(p2[0] - p1[0], 2) + Math.pow(p2[1] - p1[1], 2),
    );
    let ratio = distance / length; // 比例
    let deltaX = (p2[0] - p1[0]) * ratio;
    let deltaY = (p2[1] - p1[1]) * ratio;
    let p0 = [p2[0] - deltaX, p2[1] - deltaY];
    let line = new Polyline({
      paths: [
        [
          [p0[0], p0[1]],
          [p2[0], p2[1]],
        ],
      ],
      spatialReference: view.spatialReference,
    });
    let point2 = DashedTool.xyToPoint(p2, view);
    let line1 = geometryEngine.rotate(line, 30, point2) as __esri.Polyline;
    let line2 = geometryEngine.rotate(line, -30, point2) as __esri.Polyline;
    let paths: number[][][] = [];
    paths.push(...line.paths);
    paths.push(...line1.paths);
    paths.push(...line2.paths);
    return paths;
  }

  /**
   * 获取箭头rings
   * @param p1 箭头尖点坐标
   * @param p2 箭头尾点坐标
   * @param p3 箭头左侧的坐标
   * @param p4 箭头右侧的坐标
   * @param view 地图view对象
   * @return 返回箭头的rings
   */
  static getArrowRings(
    p1: number[],
    p2: number[],
    p3: number[],
    p4: number[],
    view: any,
  ): number[][][] {
    let pL_x = p3[0] - p2[0] + p3[0];
    let pL_y = p3[1] - p2[1] + p3[1];
    let pR_x = p4[0] - p2[0] + p4[0];
    let pR_y = p4[1] - p2[1] + p4[1];

    let point2 = DashedTool.xyToPoint(p2, view);
    let distance = Math.sqrt(
      Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2),
    );
    let distance1 = Math.sqrt(
      Math.pow(pL_x - p2[0], 2) + Math.pow(pL_y - p2[1], 2),
    );
    let pT_x = ((pL_x - p2[0]) * distance + distance1 * p2[0]) / distance1;
    let pT_y = ((pL_y - p2[1]) * distance + distance1 * p2[1]) / distance1;
    let pT = DashedTool.xyToPoint([pT_x, pT_y], view);
    let pT2: any = geometryEngine.rotate(pT, 90, point2);
    return [
      [
        [pL_x, pL_y],
        [pT2.x, pT2.y],
        [pR_x, pR_y],
      ],
    ];
  }

  /**
   * 通过两个点获取箭头rings
   * @param p1 箭头尖点坐标
   * @param p2 箭头尾点坐标
   * @param arrowWidth 箭头宽度
   * @param view 地图view对象
   * @return 返回箭头的rings
   */
  static getArrowRingsBy2Points(
    p1: number[],
    p2: number[],
    arrowWidth: number,
    view: __esri.SceneView,
  ): number[][][] {
    let pointsDistance = Math.sqrt(
      Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2),
    );
    let point2 = DashedTool.xyToPoint(p2, view);
    let pT_x = (arrowWidth / pointsDistance) * (p1[0] - p2[0]) + p2[0];
    let pT_Y = (arrowWidth / pointsDistance) * (p1[1] - p2[1]) + p2[1];
    let pT = DashedTool.xyToPoint([pT_x, pT_Y], view); // 临时点
    let pL: any = geometryEngine.rotate(pT, 90, point2);
    let pR: any = geometryEngine.rotate(pT, -90, point2);
    return [[[pL.x, pL.y], p1, [pR.x, pR.y]]];
  }

  /**
   * xy坐标转点
   * @param xy [x, y]坐标
   * @param view 地图view对象
   */
  static xyToPoint(xy: number[], view: any) {
    let point = new Point({
      x: xy[0],
      y: xy[1],
      spatialReference: view.spatialReference,
    });
    return point;
  }

  // 计算贝塞尔曲线的控制点
  static getBezierControlPoints(
    pointArr: number[][],
    smoothValue = 1,
  ): number[][] {
    let ctrlList = [pointArr[0]];
    for (let i = 0; i < pointArr.length; i++) {
      if (i === 0 || i === pointArr.length - 1) {
        continue;
      }
      let [a_x, a_y] = pointArr[i - 1]; // 第1个顶点
      let [b_x, b_y] = pointArr[i]; // 第2个顶点
      let [c_x, c_y] = pointArr[i + 1]; // 第3个顶点
      let ab_x = (a_x + b_x) / 2.0;
      let ab_y = (a_y + b_y) / 2.0;
      let bc_x = (c_x + b_x) / 2.0;
      let bc_y = (c_y + b_y) / 2.0;
      let len1 = this.getDis(pointArr[i - 1], pointArr[i]);
      let len2 = this.getDis(pointArr[i + 1], pointArr[i]);
      let k1 = len1 / (len1 + len2);
      let d_x = ab_x + (bc_x - ab_x) * k1;
      let d_y = ab_y + (bc_y - ab_y) * k1;
      let ctrl0_x = b_x + (ab_x - d_x) * smoothValue;
      let ctrl0_y = b_y + (ab_y - d_y) * smoothValue;
      let ctrl1_x = b_x + (bc_x - d_x) * smoothValue;
      let ctrl1_y = b_y + (bc_y - d_y) * smoothValue;
      ctrlList.push([ctrl0_x, ctrl0_y]);
      ctrlList.push([ctrl1_x, ctrl1_y]);
    }
    ctrlList.push(pointArr[pointArr.length - 1]);
    return ctrlList;
  }

  static getDis(dis1: any, dis2: any) {
    let v =
      (dis1[0] - dis2[0]) * (dis1[0] - dis2[0]) +
      (dis1[1] - dis2[1]) * (dis1[1] - dis2[1]);
    return Math.sqrt(v);
  }

  static getBezierPoints(
    num: number,
    p1: number[],
    p2: number[],
    p3: number[],
    p4: number[],
  ): number[][] {
    const points: number[][] = [];
    for (let i = 0; i < num; i++) {
      points.push(this.threeBezier(i / num, p1, p2, p3, p4));
    }
    points.push([...p4]);
    return points;
  }

  /**
   * @desc 三阶贝塞尔
   * @param {number} t 当前百分比
   * @param {Array} p1 起点坐标
   * @param {Array} cp1 控制点1
   * @param {Array} cp2 控制点2
   * @param {Array} p2 终点坐标
   * @return 返回点坐标
   */
  static threeBezier(
    t: number,
    p1: number[],
    cp1: number[],
    cp2: number[],
    p2: number[],
  ): number[] {
    const [x1, y1] = p1;
    const [x2, y2] = p2;
    const [cx1, cy1] = cp1;
    const [cx2, cy2] = cp2;
    let x =
      x1 * (1 - t) * (1 - t) * (1 - t) +
      3 * cx1 * t * (1 - t) * (1 - t) +
      3 * cx2 * t * t * (1 - t) +
      x2 * t * t * t;
    let y =
      y1 * (1 - t) * (1 - t) * (1 - t) +
      3 * cy1 * t * (1 - t) * (1 - t) +
      3 * cy2 * t * t * (1 - t) +
      y2 * t * t * t;
    return [x, y];
  }

  onDrawEnd(func: any) {
    this.drawEndCallback = func;
  }

  cancel() {
    this.removeClickHandler();
    this.tempLayer?.removeAll(); // 清空所有
  }
}

export default DashedTool;
