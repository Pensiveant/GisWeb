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
import BingMapsLayer from '@arcgis/core/layers/BingMapsLayer';
import CSVLayer from '@arcgis/core/layers/CSVLayer';
import ElevationLayer from '@arcgis/core/layers/ElevationLayer';
import GeoRSSLayer from '@arcgis/core/layers/GeoRSSLayer';
import ImageryLayer from '@arcgis/core/layers/ImageryLayer';
import KMLLayer from '@arcgis/core/layers/KMLLayer';
import LineOfSightLayer from '@arcgis/core/layers/LineOfSightLayer';
import MediaLayer from '@arcgis/core/layers/MediaLayer';
import OGCFeatureLayer from '@arcgis/core/layers/OGCFeatureLayer';
import OpenStreetMapLayer from '@arcgis/core/layers/OpenStreetMapLayer';
import PointCloudLayer from '@arcgis/core/layers/PointCloudLayer';
import RouteLayer from '@arcgis/core/layers/RouteLayer';
import StreamLayer from '@arcgis/core/layers/StreamLayer';
import SubtypeGroupLayer from '@arcgis/core/layers/SubtypeGroupLayer';
import VoxelLayer from '@arcgis/core/layers/VoxelLayer';
import WCSLayer from '@arcgis/core/layers/WCSLayer';
import WFSLayer from '@arcgis/core/layers/WFSLayer';
import WMSLayer from '@arcgis/core/layers/WMSLayer';
import WMTSLayer from '@arcgis/core/layers/WMTSLayer';

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
  'bing-maps': (props: __esri.BingMapsLayerProperties) => {
    return new BingMapsLayer(props);
  },
  csv: (props: __esri.CSVLayerProperties) => {
    return new CSVLayer(props);
  },
  elevation: (props: __esri.ElevationLayerProperties) => {
    return new ElevationLayer(props);
  },
  'geo-rss': (props: __esri.GeoRSSLayerProperties) => {
    return new GeoRSSLayer(props);
  },
  imagery: (props: __esri.ImageryLayerProperties) => {
    return new ImageryLayer(props);
  },
  kml: (props: __esri.KMLLayerProperties) => {
    return new KMLLayer(props);
  },
  'line-of-sight': (props: __esri.LineOfSightLayerProperties) => {
    return new LineOfSightLayer(props);
  },
  media: (props: __esri.MediaLayerProperties) => {
    return new MediaLayer(props);
  },
  'ogc-feature': (props: __esri.OGCFeatureLayerProperties) => {
    return new OGCFeatureLayer(props);
  },
  'open-street-map': (props: __esri.OpenStreetMapLayerProperties) => {
    return new OpenStreetMapLayer(props);
  },
  'point-cloud': (props: __esri.PointCloudLayerProperties) => {
    return new PointCloudLayer(props);
  },
  route: (props: __esri.RouteLayerProperties) => {
    return new RouteLayer(props);
  },
  stream: (props: __esri.StreamLayerProperties) => {
    return new StreamLayer(props);
  },
  'subtype-group': (props: __esri.SubtypeGroupLayerProperties) => {
    return new SubtypeGroupLayer(props);
  },
  voxel: (props: __esri.VoxelLayerProperties) => {
    return new VoxelLayer(props);
  },
  wcs: (props: __esri.WCSLayerProperties) => {
    return new WCSLayer(props);
  },
  wfs: (props: __esri.WFSLayerProperties) => {
    return new WFSLayer(props);
  },
  wms: (props: __esri.WMSLayerProperties) => {
    return new WMSLayer(props);
  },
  wmts: (props: __esri.WMTSLayerProperties) => {
    return new WMTSLayer(props);
  },
};

let LayerCreate = function (props: any) {
  const { type } = props;
  const propsClone = { ...props };
  delete propsClone.type;
  const types = Object.keys(layerFactory);
  if (types.includes(type)) {
    return layerFactory[type](propsClone);
  } else {
    console.log('无该类型图层创建函数，请自行扩展。');
  }
};

/**
 * 天地图矢量底图
 * @param key 天地图官网申请的key
 * @returns
 */
function getTDTVectorLayer({ key }: { key: string }) {
  const mapLayer = new WebTileLayer({
    urlTemplate: `http://{subDomain}.tianditu.com/vec_w/wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&FORMAT=tiles&TILEMATRIXSET=w&STYLE=default&LAYER=vec&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}&tk=${key}`,
    subDomains: ['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7'],
    title: '天地图矢量',
  });
  const noteLayer = new WebTileLayer({
    urlTemplate: `http://{subDomain}.tianditu.com/cva_w/wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&FORMAT=tiles&TILEMATRIXSET=w&STYLE=default&LAYER=cva&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}&tk=${key}`,
    subDomains: ['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7'],
    title: '天地图矢量注记',
  });
  return [mapLayer, noteLayer];
}

// 天地图影像底图
function getTDTImageLayer({ key }: { key: string }) {
  const mapLayer = new WebTileLayer({
    urlTemplate: `http://{subDomain}.tianditu.com/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={level}&TileRow={row}&TileCol={col}&style=default&format=tiles&tk=${key}`,
    subDomains: ['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7'],
    title: '天地图影像',
  });
  const noteLayer = new WebTileLayer({
    urlTemplate: `http://{subDomain}.tianditu.com/cia_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cia&tileMatrixSet=w&TileMatrix={level}&TileRow={row}&TileCol={col}&style=default&format=tiles&tk=${key}`,
    subDomains: ['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7'],
    title: '天地图影像注记',
  });
  return [mapLayer, noteLayer];
}

export { LayerCreate, getTDTVectorLayer, getTDTImageLayer };
