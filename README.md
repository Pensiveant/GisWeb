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

## 项目结构

```bash
GisWeb
├── README.md   
├── mock        
├── package.json
├── public      
│   └── arcgis              # arcgis API 引入的资源assets
│       └── assets
├── src
│   ├── components          # 公共组件
│   │   ├── ArcGis
│   │   └── other
│   ├── config
│   │   └── gisConfig.ts    # GIS 资源配置文件
│   ├── pages
│   │   ├── index.less
│   │   └── index.tsx
│   └── utils               # 公共工具
│       ├── Draw.ts         # 绘制工具
│       └── LayerCreate.ts  # 地图创建工具
├── tsconfig.json
├── typings.d.ts
└── yarn.lock
```
