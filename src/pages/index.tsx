import styles from './index.less';
import '@arcgis/core/assets/esri/themes/dark/main.css';
import esriConfig from '@arcgis/core/config.js';
import ArcMapView from '@/components/ArcGis/ArcMapView';
import ArcSceneView from '@/components/ArcGis/ArcSceneView';
import Map from '@arcgis/core/Map';
import { useState } from 'react';

esriConfig.assetsPath = './arcgis/assets';

export default function IndexPage() {
  const [viewProps, setViewProps] = useState({
    map: new Map({
      basemap: 'streets-vector',
    }),
  });

  return (
    <div className={styles.indexPage}>
      <ArcMapView viewProps={viewProps} />
    </div>
  );
}
