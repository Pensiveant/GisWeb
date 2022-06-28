/**
 * @Description: 公共方法，用于创建图层
 * @Author: Pensiveant
 * @Date: 2022-05-27 09:34:36
 */

import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import TileLayer from '@arcgis/core/layers/TileLayer';
import VectorTileLayer from '@arcgis/core/layers/VectorTileLayer';
import ImageryTileLayer from '@arcgis/core/layers/ImageryTileLayer';
import MapImageLayer from '@arcgis/core/layers/MapImageLayer';
import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer';
import BuildingSceneLayer from '@arcgis/core/layers/BuildingSceneLayer';
import SceneLayer from '@arcgis/core/layers/SceneLayer';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import WebTileLayer from '@arcgis/core/layers/WebTileLayer';
import IntegratedMeshLayer from '@arcgis/core/layers/IntegratedMeshLayer';
interface LayerFactory {
  [type: string]: (props: any) => __esri.Layer;
}

let layerFactory: LayerFactory = {
  feature: (props: __esri.FeatureLayerProperties) => {
    return new FeatureLayer(props);
  },
  tile: (props: __esri.TileLayerProperties) => {
    return new TileLayer(props);
  },
  'vector-tile': (props: __esri.VectorTileLayerProperties) => {
    return new VectorTileLayer(props);
  },
  'imagery-tile': (props: __esri.ImageryTileLayerProperties) => {
    return new ImageryTileLayer(props);
  },
  'map-image': (props: __esri.MapImageLayerProperties) => {
    return new MapImageLayer(props);
  },
  geojson: (props: __esri.GeoJSONLayerProperties) => {
    return new GeoJSONLayer(props);
  },
  graphics: (props: __esri.GraphicsLayerProperties) => {
    return new GraphicsLayer(props);
  },
  'building-scene': (props: __esri.BuildingSceneLayerProperties) => {
    return new BuildingSceneLayer(props);
  },
  scene: (props: __esri.SceneLayerProperties) => {
    return new SceneLayer(props);
  },
  'web-tile': (props: __esri.WebTileLayerProperties) => {
    return new WebTileLayer(props);
  },
  'integrated-mesh': (props: __esri.IntegratedMeshLayerProperties) => {
    // 比如，加载倾斜摄影
    return new IntegratedMeshLayer(props);
  },
};

let LayerCreate = function (type: string, props: any) {
  const types = Object.keys(layerFactory);
  if (types.includes(type)) {
    return layerFactory[type](props);
  } else {
    console.log('无该类型图层创建函数，请自行扩展。');
  }
};

export default LayerCreate;
