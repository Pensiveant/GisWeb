import styles from './index.less';
import '@arcgis/core/assets/esri/themes/dark/main.css';
import esriConfig from '@arcgis/core/config.js';
import ArcMapView from '@/components/ArcGis/ArcMapView';
import ArcSceneView from '@/components/ArcGis/ArcSceneView';
import Map from '@arcgis/core/Map';
import { useState } from 'react';
import LayerCreate from '@/utils/LayerCreate';
import WebScene from '@arcgis/core/WebScene';

esriConfig.assetsPath = './arcgis/assets';

export default function IndexPage() {
  const [viewProps, setViewProps] = useState({
    map: new WebScene({
      portalItem: {
        id: 'f477c289e93347aba6a0c052bfe0e0a4',
      },
    }),
  });

  return (
    <div className={styles.indexPage}>
      <ArcSceneView
        viewProps={viewProps}
        onLoad={(view) => {
          let layer = LayerCreate('scene', {
            id: 'sumx',
            elevationInfo: {
              mode: 'absolute-height',
              offset: 15,
            },
            title: '南方美谷方案模型',
            url: 'https://tiles.arcgis.com/tiles/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Esri_Admin_Building/SceneServer',
          });
          if (layer) {
            view.map.add(layer);
          }
        }}
      />
    </div>
  );
}
