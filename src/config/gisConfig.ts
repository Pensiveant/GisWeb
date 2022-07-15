/**
 * @Description: 用于配置GIS资源以及系统GIS相关信息，同时区分开发环境和生产环境
 * @Author: Pensiveant
 * @Date: 2022-05-19 16:31:54
 */

type Basemap = {
  title: string;
  baselayers: layerItem[];
};

type layerItem = {
  type: string;
  id?: string;
  url?: string;
  urlTemplate?: string;
  title?: string;
  visible?: boolean; // 是否显示，默认显示
};

export interface GisConfig {
  initExtent: {
    xmin: number;
    ymin: number;
    xmax: number;
    ymax: number;
  }; // 地图初始范围
  basemaps: Basemap[]; // 底图配置
  buinessLayers: layerItem[]; //业务图层
}

//#region 开发配置
const devConfig = {
  basemaps: [
    {
      baselayers: [
        {
          type: 'web-tile',
          urlTemplate:
            'https://t0.tianditu.gov.cn/DataServer?T=vec_w&x={col}&y={row}&l={level}&tk=092fc7928d9f6d7d0c3ed1335092c4a4',
          title: '天地图矢量底图',
        },
        {
          type: 'web-tile',
          urlTemplate:
            'https://t0.tianditu.gov.cn/DataServer?T=cva_w&x={col}&y={row}&l={level}&tk=092fc7928d9f6d7d0c3ed1335092c4a4',
          title: '天地图注记',
        },
      ],
      title: '天地图',
    },
  ],
  buinessLayers: [
    {
      url: 'https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Landscape_Trees/FeatureServer/0',
      title: '要素图层',
      type: 'feature',
    },
  ],
};
//#endregion

//#region 产品配置
const productConfig = {
  basemaps: [
    {
      baselayers: [
        {
          type: 'web-tile',
          urlTemplate:
            'https://t0.tianditu.gov.cn/DataServer?T=vec_w&x={col}&y={row}&l={level}&tk=092fc7928d9f6d7d0c3ed1335092c4a4',
          title: '天地图矢量底图',
        },
        {
          type: 'web-tile',
          urlTemplate:
            'https://t0.tianditu.gov.cn/DataServer?T=cva_w&x={col}&y={row}&l={level}&tk=092fc7928d9f6d7d0c3ed1335092c4a4',
          title: '天地图注记',
        },
      ],
      title: '天地图',
    },
  ],
  buinessLayers: [
    {
      url: 'https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Landscape_Trees/FeatureServer/0',
      title: '要素图层',
      type: 'feature',
    },
  ],
};
//#endregion

const isProduct = process.env.APP_ENV === 'production';
const currentConfig = isProduct ? productConfig : devConfig;
let gisConfig: GisConfig = {
  initExtent: {
    xmax: 11642425.153093196,
    xmin: 11522799.402977252,
    ymax: 3619674.435119122,
    ymin: 3561358.566256493,
  },
  ...currentConfig,
};

export default gisConfig;
