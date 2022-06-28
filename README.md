# GisWeb    Project

## 运行项目

安装依赖

```bash
$ yarn
```

项目启动

```bash
$ yarn start
```

## 打包部署

```bash
$ yarn build # 使用dev配置
$ yarn build:prod   # 使用产品配置
```

## 项目结构

```bash
GisWeb
├── README.md                   # 说明文档
├── mock
├── package.json
├── public
│   ├── arcgis
│   │   └── assets              # arcgis API 引入的资源assets
│   ├── assets
│   │   └── favicon.ico         # umijs favicon配置
│   └── font
├── src
│   ├── components              # 存放公共组件
│   │   ├── ArcGis
│   │   │   ├── ArcMapView      # MapView组件
│   │   │   └── ArcSceneView    # SceneView组件
│   │   └── other
│   ├── config                  # 存放配置文件
│   │   ├── appConfig.ts        # app配置，参考umijs
│   │   ├── gisConfig.ts        # gis资源配置，区分开发环境和生成环境
│   │   └── routes.ts           # 路由配置
│   ├── models                  # 存放Model
│   │   └── global.ts           # 全局Model
│   ├── pages                   # 存放组件文件夹
│   │   ├── Login               # 登录组件
│   │   │   ├── index.less
│   │   │   └── index.tsx
│   │   ├── index.less
│   │   └── index.tsx
│   ├── services                # 存放API服务
│   │   ├── API.d.ts            # API类型声明文件
│   │   ├── config.ts           # API接口地址配置
│   │   └── index.ts            # API统计接口生成
│   └── utils                   # 存放公共工具
│       ├── Draw.ts             # 绘制工具
│       └── LayerCreate.ts      # 地图创建工具
├── tsconfig.json
├── typings.d.ts
└── yarn.lock
```
