/**
 * @Description: 三维地图（默认去除所有微件）
 * @Author: Pensiveant
 * @Date: 2022-05-26 16:50:22
 */

import React, { useRef, useEffect } from 'react';
import styles from './index.less';
import SceneView from '@arcgis/core/views/SceneView';

interface ArcSceneViewProps {
  viewProps: __esri.SceneViewProperties;
  onLoad?: (view: __esri.SceneView) => void; // 加载成功后访问
  onFail?: (error: __esri.Error) => void; // 加载失败后访问
}

const ArcSceneView: React.FC<ArcSceneViewProps> = ({
  viewProps,
  onLoad,
  onFail,
}) => {
  const sceneViewContainerRef = useRef<any>();
  const viewRef = useRef<any>();

  useEffect(() => {
    if (sceneViewContainerRef.current) {
      if (viewRef.current) {
        viewRef.current.destroy();
        viewRef.current = undefined;
      }
      const view = new SceneView({
        ...viewProps,
        ui: {
          components: [],
        },
        container: sceneViewContainerRef.current,
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
      viewRef.current = view;
    }
  }, [viewProps]);

  return (
    <div className={styles.arcSceneView} ref={sceneViewContainerRef}></div>
  );
};

export default ArcSceneView;
