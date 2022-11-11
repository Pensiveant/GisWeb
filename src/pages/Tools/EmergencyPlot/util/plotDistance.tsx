/*
 * @Description: 标绘距离
 */
import Point from '@arcgis/core/geometry/Point';
import * as geometryEngine from '@arcgis/core/geometry/geometryEngine';
import { PlotTypes } from '../plotTypes';

/**
 * 标绘距离显示
 * 如果不传参数，则是取消距离显示
 * @param points 点列表
 * @param view sceneView
 */
function plotDistance(
  geometry?: __esri.Polyline,
  view?: __esri.SceneView,
  plotType?: PlotTypes,
) {
  let id = 'plotDistance';
  let dom = document.getElementById(id);
  if (dom) {
    dom.remove();
  }
  if (geometry && view) {
    let pointLength = geometry.paths[0].length;
    let lastPointXY = geometry.paths[0][pointLength - 1];
    let lastPoint = new Point({
      x: lastPointXY[0],
      y: lastPointXY[1],
      spatialReference: geometry.spatialReference,
    });
    let mouseXY = view.toScreen(lastPoint);

    let distance;
    if (
      geometry.spatialReference.isWGS84 ||
      geometry.spatialReference.isWebMercator
    ) {
      distance = geometryEngine.geodesicLength(geometry, 'meters');
    } else {
      distance = geometryEngine.planarLength(geometry, 'meters');
    }

    dom = document.createElement('div');
    dom.id = id;
    dom.style.borderRadius = '6px';
    dom.style.background = 'rgba(0, 0, 0, 0.6)';
    dom.style.color = '#ffff';
    dom.style.fontSize = '12px';
    dom.style.padding = '4px 8px';
    dom.style.position = 'fixed';
    dom.style.left = `${mouseXY.x}px`;
    dom.style.top = `${mouseXY.y + 78}px`; // 加上header的高度
    dom.style.pointerEvents = 'none';
    dom.style.transform = 'translate(-50%, -150%)';
    if (plotType === PlotTypes.circleDashed || plotType === PlotTypes.circle) {
      dom.innerText = `半径: ${distance.toFixed(2)} m`;
    } else {
      dom.innerText = `距离: ${distance.toFixed(2)} m`;
    }
    let root = document.getElementById('root');
    if (root) {
      root.appendChild(dom);
    }
  }
}

export default plotDistance;
