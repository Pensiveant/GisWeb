/**
 * @Description: 二维地图组件（默认去除所有微件）
 * @Author: Pensiveant
 * @Date: 2022-05-26 14:53:37
 */

import React, { useRef, useEffect } from 'react';
import styles from './index.less';
import MapView from '@arcgis/core/views/MapView';

interface ArcMapViewProps {
  viewProps: __esri.MapViewProperties;
  onLoad?: (view: __esri.MapView) => void; // 加载成功后访问
  onFail?: (error: __esri.Error) => void; // 加载失败后访问
}

const ArcMapView: React.FC<ArcMapViewProps> = ({
  viewProps,
  onLoad,
  onFail,
}) => {
  const mapViewContainerRef = useRef<any>();
  const viewRef = useRef<any>();
  useEffect(() => {
    if (mapViewContainerRef.current) {
      if (viewRef.current) {
        viewRef.current.destroy();
        viewRef.current = undefined;
      }

      const view = new MapView({
        ...viewProps,
        ui: {
          components: [],
        },
        container: mapViewContainerRef.current,
      });
      view.when(
        () => {
          if (onLoad && typeof onLoad === 'function') {
            onLoad(view);
          }
        },
        (error: __esri.Error) => {
          if (onFail && typeof onFail === 'function') {
            onFail(error);
          }
        },
      );
    }
  }, [viewProps]);

  return <div className={styles.arcMapView} ref={mapViewContainerRef}></div>;
};

export default ArcMapView;
