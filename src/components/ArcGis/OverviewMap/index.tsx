/**
 * @Description: 鹰眼功能
 * @Author: Pensiveant
 * @Date: 2022-04-26 10:24:48
 * @reference1: [https://www.jianshu.com/p/57c96fda5724]
 * @reference2:[https://blog.csdn.net/qq_41219789/article/details/115302686]
 * @reference3:[https://developers.arcgis.com/javascript/latest/sample-code/sandbox/?sample=overview-map]
 */

import React, { useEffect, useRef, useState } from 'react';
import styles from './index.less';
import MapView from '@arcgis/core/views/MapView';
import * as watchUtils from '@arcgis/core/core/watchUtils';
import Point from '@arcgis/core/geometry/Point';

let isDown = false;
let x: number;
let y: number;
let rangeLeft: number;
let rangeTop: number;

interface OverviewMapProps {
  mainView: __esri.MapView | __esri.SceneView;
}

const OverviewMap: React.FC<OverviewMapProps> = ({
  mainView, // 主视图View
}) => {
  const viewRef = useRef<any>();
  const [left, setLeft] = useState<string>();
  const [top, setTop] = useState<string>();
  const [width, setWidth] = useState<string>();
  const [height, setHeight] = useState<string>();
  const rangeRef = useRef<any>();
  const [mapView, setMapView] = useState<__esri.MapView | __esri.SceneView>();

  useEffect(() => {
    const mapView = new MapView({
      container: viewRef.current,
      map: mainView.map,
      constraints: {
        snapToZoom: false,
      },
    });
    mapView.ui.components = [];
    setMapView(mapView);

    watchUtils.init(mainView, 'extent', (extent) => {
      mapView
        .goTo({
          center: mainView.center,
          scale:
            mainView.scale *
            2 *
            Math.max(
              mainView.width / mapView.width,
              mainView.height / mapView.height,
            ),
        })
        .then(() => {
          calculateRangeCss(mapView, extent);
        })
        .catch((error) => {
          if (error.name != 'view:goto-interrupted') {
            console.error(error);
          }
        });
      calculateRangeCss(mapView, extent);
    });
  }, [mainView]);

  function calculateRangeCss(mapView: any, extent: __esri.Extent) {
    if (!mapView || !extent) {
      return;
    }
    var bottomLeft: any = mapView.toScreen(
      new Point({
        x: extent.xmin,
        y: extent.ymin,
        spatialReference: mapView.spatialReference,
      }),
    );
    var topRight: any = mapView.toScreen(
      new Point({
        x: extent.xmax,
        y: extent.ymax,
        spatialReference: mapView.spatialReference,
      }),
    );
    if (bottomLeft && topRight) {
      setTop(`${topRight.y}px`);
      setLeft(`${bottomLeft.x}px`);
      const width = topRight.x - bottomLeft.x;
      setWidth(`${width}px`);
      const height = bottomLeft.y - topRight.y;
      setHeight(`${height}px`);
    }
  }

  function rangeMouseDown(e: any) {
    x = e.clientX;
    y = e.clientY;

    //获取左部和顶部的偏移量
    rangeLeft = rangeRef.current.offsetLeft;
    rangeTop = rangeRef.current.offsetTop;
    //开关打开
    isDown = true;
    //设置样式
    rangeRef.current.style.cursor = 'move';
  }

  function rangeMouseMove(e: any) {
    if (isDown === false) {
      return;
    }
    //获取x和y
    let nx = e.clientX;
    let ny = e.clientY;
    //计算移动后的左偏移量和顶部的偏移量
    var nl = nx - (x - rangeLeft);
    var nt = ny - (y - rangeTop);
    rangeRef.current.style.left = nl + 'px';
    rangeRef.current.style.top = nt + 'px';
  }

  function rangeMouseUp(e: any) {
    //开关关闭
    isDown = false;
    rangeRef.current.style.cursor = 'default';

    // 同步view
    let nx = e.clientX;
    let ny = e.clientY;
    var nl = nx - (x - rangeLeft);
    var nt = ny - (y - rangeTop);
    var mapPoint = mapView.toMap({
      x: nl + rangeRef.current.clientWidth / 2,
      y: nt + rangeRef.current.clientHeight / 2,
    });
    mainView.goTo({
      center: mapPoint,
    });
    mapView.goTo({
      center: mapPoint,
    });
  }

  return (
    <div className={styles.overviewMap}>
      <div className={styles.mapWrap}>
        <div
          className={styles.range}
          style={{ top, left, width, height }}
          onMouseDown={rangeMouseDown}
          onMouseMove={rangeMouseMove}
          onMouseUp={rangeMouseUp}
          ref={rangeRef}
        ></div>
        <div className={styles.map} ref={viewRef}></div>
      </div>
    </div>
  );
};

export default OverviewMap;
