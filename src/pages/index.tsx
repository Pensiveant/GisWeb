import styles from './index.less';
import '@arcgis/core/assets/esri/themes/dark/main.css';
import esriConfig from '@arcgis/core/config.js';
import ArcMapView from '@/components/ArcGis/ArcMapView';
import ArcSceneView from '@/components/ArcGis/ArcSceneView';
import Map from '@arcgis/core/Map';
import { useState, useEffect } from 'react';
import gisConfig from '@/config/gisConfig';
import LayerCreate from '@/utils/LayerCreate';
import Basemap from '@arcgis/core/Basemap';
import Extent from '@arcgis/core/geometry/Extent';
import Draw from '@/utils/draw';
import ThreeRender from '@/utils/ThreeRender';
import * as externalRenderers from '@arcgis/core/views/3d/externalRenderers';

esriConfig.assetsPath = './arcgis/assets';

export default function IndexPage() {
  const [baseMap, setBaseMap] = useState<__esri.Basemap | undefined>();
  useEffect(() => {
    const { basemaps } = gisConfig;
    constructorBaseMap(basemaps);
  }, []);

  async function constructorBaseMap(basemaps: any) {
    if (basemaps.length === 0) {
      return;
    }
    let baseLayers: any[] = [];
    const baseLayersConfig = basemaps[0].baselayers;
    for (let i = 0, len = baseLayersConfig.length; i < len; i++) {
      const layerProperties = { ...baseLayersConfig[i] };
      delete layerProperties.type;
      const layerItem = await LayerCreate(
        baseLayersConfig[i].type,
        layerProperties,
      );
      baseLayers.push(layerItem);
    }

    let basemap = new Basemap({
      ...basemaps[0],
      baseLayers: baseLayers,
    });
    setBaseMap(basemap);
  }

  return (
    <div className={styles.indexPage}>
      {baseMap ? (
        <ArcSceneView
          viewProps={{
            map: new Map({
              basemap: baseMap,
            }),
          }}
          onLoad={(view) => {
            const { initExtent, buinessLayers: layers } = gisConfig;
            view.goTo(
              new Extent({
                ...initExtent,
                spatialReference: view.spatialReference,
              }),
            );
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

            // // 绘制工具测试
            // const drawInstance = new Draw({ view, mode: 'clear' });
            // drawInstance.draw('polygon').then((graphic: any) => {
            //   const { geometry } = graphic;
            // });

            // threejs
            const threeRender = new ThreeRender(view);
            externalRenderers.add(view, threeRender);
          }}
        />
      ) : null}
    </div>
  );
}
