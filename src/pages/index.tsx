import styles from './index.less';
import '@arcgis/core/assets/esri/themes/dark/main.css';
import esriConfig from '@arcgis/core/config.js';
import ArcMapView from '@/components/ArcGis/ArcMapView';
import ArcSceneView from '@/components/ArcGis/ArcSceneView';
import Map from '@arcgis/core/Map';
import { useState, useEffect, useRef } from 'react';
import gisConfig from '@/config/gisConfig';
import LayerCreate from '@/utils/LayerCreate';
import Basemap from '@arcgis/core/Basemap';
import Extent from '@arcgis/core/geometry/Extent';
import Draw from '@/utils/draw';
import services from '@/services/index';
import { useDispatch, useSelector } from 'umi';
import ViewClick from './ViewClick';
import Tools from './Tools';
import EyeMap from './EyeMap';

esriConfig.assetsPath = './arcgis/assets';

export default function IndexPage() {
  const [baseMap, setBaseMap] = useState<__esri.Basemap | undefined>();
  const dispatch = useDispatch();

  useEffect(() => {
    constructorBaseMap();
  }, []);

  // 构建底图
  async function constructorBaseMap() {
    const { basemaps } = gisConfig;
    if (basemaps.length === 0) {
      return;
    }
    let baseLayers: any[] = [];
    let visibleBaseMap;
    for (let i = 0; i < basemaps.length; i++) {
      if (basemaps[i].visible) {
        visibleBaseMap = basemaps[i];
      }
    }
    if (!visibleBaseMap) {
      console.log('请配置底图！');
      return;
    }
    let { baseLayers: baseLayersConfig } = visibleBaseMap;
    for (let i = 0, len = baseLayersConfig.length; i < len; i++) {
      const layerProperties: any = { ...baseLayersConfig[i] };
      delete layerProperties.type;
      const layerItem = await LayerCreate(
        baseLayersConfig[i].type,
        layerProperties,
      );
      baseLayers.push(layerItem);
    }

    let basemap = new Basemap({
      ...visibleBaseMap,
      baseLayers: baseLayers,
    });
    setBaseMap(basemap);
  }

  return (
    <div className={styles.indexPage}>
      {baseMap ? (
        <ArcMapView
          viewProps={{
            map: new Map({
              basemap: baseMap,
            }),
          }}
          onLoad={(view) => {
            const { initExtent, buinessLayers: layers } = gisConfig;
            const extent = Extent.fromJSON(initExtent);
            view.extent = extent;
            // 移除所有业务图层
            view.map.removeAll();
            let buinessLayers: Array<any> = [];
            for (let i = 0, len = layers.length; i < len; i++) {
              const layerProperties: any = { ...layers[i] };
              delete layerProperties.type;
              const layerItem = LayerCreate(layers[i].type, layerProperties);
              buinessLayers.push(layerItem);
            }
            view.map.addMany(buinessLayers);

            dispatch({
              type: 'global/updateState',
              payload: {
                view,
              },
            });
          }}
        />
      ) : null}
      <ViewClick />
      <Tools />
      <EyeMap />
    </div>
  );
}
