'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [3668, 5235, 2515, 999],
  {
    93668: (e, r, t) => {
      t.r(r), t.d(r, { default: () => O });
      var a = t(43697),
        s = t(80539),
        i = t(70921),
        l = t(60235),
        o = t(96674),
        n = t(22974),
        c = t(83379),
        p = t(68668),
        y = t(92604),
        d = t(70586),
        h = t(95330),
        g = t(17452),
        u = t(5600),
        m = (t(75215), t(52011)),
        b = t(30556),
        v = t(82971),
        f = t(65587),
        L = t(15235),
        S = t(99880),
        w = t(94443);
      const T = {
        streets: {
          id: 'streets',
          classic: !0,
          deprecated: !0,
          get thumbnailUrl() {
            return (0, S.V)('esri/images/basemap/streets.jpg');
          },
          baseMapLayers: [
            {
              id: 'streets-base-layer',
              url: '//services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer',
              layerType: 'ArcGISTiledMapServiceLayer',
              title: 'World Street Map',
              showLegend: !1,
              visibility: !0,
              opacity: 1,
            },
          ],
        },
        satellite: {
          id: 'satellite',
          classic: !0,
          get thumbnailUrl() {
            return (0, S.V)('esri/images/basemap/satellite.jpg');
          },
          baseMapLayers: [
            {
              id: 'satellite-base-layer',
              url: '//services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer',
              layerType: 'ArcGISTiledMapServiceLayer',
              title: 'World Imagery',
              showLegend: !1,
              visibility: !0,
              opacity: 1,
            },
          ],
        },
        hybrid: {
          id: 'hybrid',
          classic: !0,
          get thumbnailUrl() {
            return (0, S.V)('esri/images/basemap/hybrid.jpg');
          },
          baseMapLayers: [
            {
              id: 'hybrid-base-layer',
              url: '//services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer',
              layerType: 'ArcGISTiledMapServiceLayer',
              title: 'World Imagery',
              showLegend: !1,
              visibility: !0,
              opacity: 1,
            },
            {
              id: 'hybrid-reference-layer',
              url: '//services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer',
              layerType: 'ArcGISTiledMapServiceLayer',
              title: 'World Boundaries and Places',
              isReference: !0,
              showLegend: !1,
              visibility: !0,
              opacity: 1,
            },
          ],
        },
        terrain: {
          id: 'terrain',
          classic: !0,
          get thumbnailUrl() {
            return (0, S.V)('esri/images/basemap/terrain.jpg');
          },
          baseMapLayers: [
            {
              id: 'terrain-base-layer',
              url: '//services.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer',
              layerType: 'ArcGISTiledMapServiceLayer',
              title: 'World Terrain Base',
              showLegend: !1,
              visibility: !0,
              opacity: 1,
            },
            {
              id: 'terrain-reference-layer',
              url: '//services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Reference_Overlay/MapServer',
              layerType: 'ArcGISTiledMapServiceLayer',
              title: 'World Reference Overlay',
              isReference: !0,
              showLegend: !1,
              visibility: !0,
              opacity: 1,
            },
          ],
        },
        topo: {
          id: 'topo',
          classic: !0,
          deprecated: !0,
          get thumbnailUrl() {
            return (0, S.V)('esri/images/basemap/topo.jpg');
          },
          baseMapLayers: [
            {
              id: 'topo-base-layer',
              url: '//services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer',
              layerType: 'ArcGISTiledMapServiceLayer',
              title: 'World Topo Map',
              showLegend: !1,
              visibility: !0,
              opacity: 1,
            },
          ],
        },
        gray: {
          id: 'gray',
          classic: !0,
          deprecated: !0,
          get thumbnailUrl() {
            return (0, S.V)('esri/images/basemap/gray.jpg');
          },
          baseMapLayers: [
            {
              id: 'gray-base-layer',
              url: '//services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer',
              layerType: 'ArcGISTiledMapServiceLayer',
              title: 'World Light Gray Base',
              showLegend: !1,
              visibility: !0,
              opacity: 1,
            },
            {
              id: 'gray-reference-layer',
              url: '//services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer',
              layerType: 'ArcGISTiledMapServiceLayer',
              title: 'World Light Gray Reference',
              isReference: !0,
              showLegend: !1,
              visibility: !0,
              opacity: 1,
            },
          ],
        },
        'dark-gray': {
          id: 'dark-gray',
          classic: !0,
          deprecated: !0,
          get thumbnailUrl() {
            return (0, S.V)('esri/images/basemap/dark-gray.jpg');
          },
          baseMapLayers: [
            {
              id: 'dark-gray-base-layer',
              url: '//services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer',
              layerType: 'ArcGISTiledMapServiceLayer',
              title: 'World Dark Gray Base',
              showLegend: !1,
              visibility: !0,
              opacity: 1,
            },
            {
              id: 'dark-gray-reference-layer',
              url: '//services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer',
              layerType: 'ArcGISTiledMapServiceLayer',
              title: 'World Dark Gray Reference',
              isReference: !0,
              showLegend: !1,
              visibility: !0,
              opacity: 1,
            },
          ],
        },
        oceans: {
          id: 'oceans',
          classic: !0,
          get thumbnailUrl() {
            return (0, S.V)('esri/images/basemap/oceans.jpg');
          },
          baseMapLayers: [
            {
              id: 'oceans-base-layer',
              url: '//services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer',
              layerType: 'ArcGISTiledMapServiceLayer',
              title: 'World Ocean Base',
              showLegend: !1,
              visibility: !0,
              opacity: 1,
            },
            {
              id: 'oceans-reference-layer',
              url: '//services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Reference/MapServer',
              layerType: 'ArcGISTiledMapServiceLayer',
              title: 'World Ocean Reference',
              isReference: !0,
              showLegend: !1,
              visibility: !0,
              opacity: 1,
            },
          ],
        },
        'national-geographic': {
          id: 'national-geographic',
          classic: !0,
          deprecated: !0,
          get thumbnailUrl() {
            return (0, S.V)('esri/images/basemap/national-geographic.jpg');
          },
          baseMapLayers: [
            {
              id: 'national-geographic-base-layer',
              url: '//services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer',
              title: 'NatGeo World Map',
              showLegend: !1,
              layerType: 'ArcGISTiledMapServiceLayer',
              visibility: !0,
              opacity: 1,
            },
          ],
        },
        osm: {
          id: 'osm',
          classic: !0,
          get thumbnailUrl() {
            return (0, S.V)('esri/images/basemap/osm.jpg');
          },
          baseMapLayers: [
            {
              id: 'osm-base-layer',
              layerType: 'OpenStreetMap',
              title: 'Open Street Map',
              showLegend: !1,
              visibility: !0,
              opacity: 1,
            },
          ],
        },
        'dark-gray-vector': {
          id: 'dark-gray-vector',
          classic: !0,
          get thumbnailUrl() {
            return (0, S.V)('esri/images/basemap/dark-gray-vector.jpg');
          },
          baseMapLayers: [
            {
              id: 'dark-gray-base-layer',
              styleUrl:
                'https://cdn.arcgis.com/sharing/rest/content/items/5e9b3685f4c24d8781073dd928ebda50/resources/styles/root.json',
              layerType: 'VectorTileLayer',
              title: 'Dark Gray Base',
              visibility: !0,
              opacity: 1,
            },
            {
              id: 'dark-gray-reference-layer',
              styleUrl:
                'https://cdn.arcgis.com/sharing/rest/content/items/747cb7a5329c478cbe6981076cc879c5/resources/styles/root.json',
              layerType: 'VectorTileLayer',
              title: 'Dark Gray Reference',
              isReference: !0,
              visibility: !0,
              opacity: 1,
            },
          ],
        },
        'gray-vector': {
          id: 'gray-vector',
          classic: !0,
          get thumbnailUrl() {
            return (0, S.V)('esri/images/basemap/gray-vector.jpg');
          },
          baseMapLayers: [
            {
              id: 'gray-base-layer',
              styleUrl:
                'https://cdn.arcgis.com/sharing/rest/content/items/291da5eab3a0412593b66d384379f89f/resources/styles/root.json',
              layerType: 'VectorTileLayer',
              title: 'Light Gray Base',
              visibility: !0,
              opacity: 1,
            },
            {
              id: 'gray-reference-layer',
              styleUrl:
                'https://cdn.arcgis.com/sharing/rest/content/items/1768e8369a214dfab4e2167d5c5f2454/resources/styles/root.json',
              layerType: 'VectorTileLayer',
              title: 'Light Gray Reference',
              isReference: !0,
              visibility: !0,
              opacity: 1,
            },
          ],
        },
        'streets-vector': {
          id: 'streets-vector',
          classic: !0,
          get thumbnailUrl() {
            return (0, S.V)('esri/images/basemap/streets-vector.jpg');
          },
          baseMapLayers: [
            {
              id: 'streets-vector-base-layer',
              styleUrl:
                '//cdn.arcgis.com/sharing/rest/content/items/de26a3cf4cc9451298ea173c4b324736/resources/styles/root.json',
              layerType: 'VectorTileLayer',
              title: 'World Streets',
              visibility: !0,
              opacity: 1,
            },
          ],
        },
        'topo-vector': {
          id: 'topo-vector',
          classic: !0,
          get thumbnailUrl() {
            return (0, S.V)('esri/images/basemap/topo-vector.jpg');
          },
          baseMapLayers: [
            {
              id: 'world-hillshade-layer',
              url: '//services.arcgisonline.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer',
              layerType: 'ArcGISTiledMapServiceLayer',
              title: 'World Hillshade',
              showLegend: !1,
              visibility: !0,
              opacity: 1,
            },
            {
              id: 'topo-vector-base-layer',
              styleUrl:
                '//cdn.arcgis.com/sharing/rest/content/items/7dc6cea0b1764a1f9af2e679f642f0f5/resources/styles/root.json',
              layerType: 'VectorTileLayer',
              title: 'World Topo',
              visibility: !0,
              opacity: 1,
            },
          ],
        },
        'streets-night-vector': {
          id: 'streets-night-vector',
          classic: !0,
          get thumbnailUrl() {
            return (0, S.V)('esri/images/basemap/streets-night.jpg');
          },
          baseMapLayers: [
            {
              id: 'streets-night-vector-base-layer',
              styleUrl:
                '//cdn.arcgis.com/sharing/rest/content/items/86f556a2d1fd468181855a35e344567f/resources/styles/root.json',
              layerType: 'VectorTileLayer',
              title: 'World Streets Night',
              visibility: !0,
              opacity: 1,
            },
          ],
        },
        'streets-relief-vector': {
          id: 'streets-relief-vector',
          classic: !0,
          get thumbnailUrl() {
            return (0, S.V)('esri/images/basemap/streets-relief.jpg');
          },
          baseMapLayers: [
            {
              id: 'world-hillshade-layer',
              url: '//services.arcgisonline.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer',
              layerType: 'ArcGISTiledMapServiceLayer',
              title: 'World Hillshade',
              showLegend: !1,
              visibility: !0,
              opacity: 1,
            },
            {
              id: 'streets-relief-vector-base-layer',
              styleUrl:
                '//www.arcgis.com/sharing/rest/content/items/b266e6d17fc345b498345613930fbd76/resources/styles/root.json',
              title: 'World Streets Relief',
              layerType: 'VectorTileLayer',
              visibility: !0,
              opacity: 1,
            },
          ],
        },
        'streets-navigation-vector': {
          id: 'streets-navigation-vector',
          classic: !0,
          get thumbnailUrl() {
            return (0, S.V)('esri/images/basemap/streets-navigation.jpg');
          },
          baseMapLayers: [
            {
              id: 'streets-navigation-vector-base-layer',
              styleUrl:
                '//cdn.arcgis.com/sharing/rest/content/items/63c47b7177f946b49902c24129b87252/resources/styles/root.json',
              layerType: 'VectorTileLayer',
              title: 'World Streets Navigation',
              visibility: !0,
              opacity: 1,
            },
          ],
        },
        'arcgis-imagery': {
          get thumbnailUrl() {
            return (0, S.V)('esri/images/basemap/hybrid.jpg');
          },
          title: 'Imagery Hybrid',
          baseMapLayers: [
            {
              layerType: 'ArcGISTiledMapServiceLayer',
              showLegend: !1,
              title: 'World Imagery',
              url: 'https://ibasemaps-api.arcgis.com/arcgis/rest/services/World_Imagery/MapServer',
            },
            {
              layerType: 'VectorTileLayer',
              styleUrl:
                'https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Imagery:Labels',
              title: 'Hybrid Reference Layer',
              isReference: !0,
            },
          ],
        },
        'arcgis-imagery-standard': {
          get thumbnailUrl() {
            return (0, S.V)('esri/images/basemap/satellite.jpg');
          },
          title: 'Imagery',
          baseMapLayers: [
            {
              layerType: 'ArcGISTiledMapServiceLayer',
              showLegend: !1,
              title: 'World Imagery',
              url: 'https://ibasemaps-api.arcgis.com/arcgis/rest/services/World_Imagery/MapServer',
            },
          ],
        },
        'arcgis-imagery-labels': {
          title: 'Hybrid [Reference]',
          baseMapLayers: [
            {
              layerType: 'VectorTileLayer',
              styleUrl:
                'https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Imagery:Labels',
              title: 'Hybrid Reference Layer',
              isReference: !0,
            },
          ],
        },
        'arcgis-light-gray': {
          get thumbnailUrl() {
            return (0, S.V)('esri/images/basemap/gray-vector.jpg');
          },
          title: 'Light Gray Canvas',
          baseMapLayers: [
            {
              layerType: 'VectorTileLayer',
              styleUrl:
                'https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:LightGray:Base',
              title: 'Light Gray Canvas Base',
            },
            {
              layerType: 'VectorTileLayer',
              styleUrl:
                'https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:LightGray:Labels',
              title: 'Light Gray Canvas Labels',
              isReference: !0,
            },
          ],
        },
        'arcgis-dark-gray': {
          get thumbnailUrl() {
            return (0, S.V)('esri/images/basemap/dark-gray.jpg');
          },
          title: 'Dark Gray Canvas',
          baseMapLayers: [
            {
              layerType: 'VectorTileLayer',
              styleUrl:
                'https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:DarkGray:Base',
              title: 'Dark Gray Canvas Base',
            },
            {
              layerType: 'VectorTileLayer',
              styleUrl:
                'https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:DarkGray:Labels',
              title: 'Dark Gray Canvas Labels',
              isReference: !0,
            },
          ],
        },
        'arcgis-navigation': {
          get thumbnailUrl() {
            return (0, S.V)('esri/images/basemap/streets-navigation.jpg');
          },
          title: 'Navigation',
          baseMapLayers: [
            {
              layerType: 'VectorTileLayer',
              styleUrl:
                'https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Navigation',
              title: 'World Navigation Map',
            },
          ],
        },
        'arcgis-navigation-night': {
          title: 'Navigation (Dark Mode)',
          baseMapLayers: [
            {
              layerType: 'VectorTileLayer',
              styleUrl:
                'https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:NavigationNight',
              title: 'World Navigation Map (Dark Mode)',
            },
          ],
        },
        'arcgis-streets': {
          get thumbnailUrl() {
            return (0, S.V)('esri/images/basemap/streets-vector.jpg');
          },
          title: 'Streets',
          baseMapLayers: [
            {
              layerType: 'VectorTileLayer',
              styleUrl:
                'https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Streets',
              title: 'World Street Map',
            },
          ],
        },
        'arcgis-streets-night': {
          get thumbnailUrl() {
            return (0, S.V)('esri/images/basemap/streets-night.jpg');
          },
          title: 'Streets (Night)',
          baseMapLayers: [
            {
              layerType: 'VectorTileLayer',
              styleUrl:
                'https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:StreetsNight',
              title: 'World Street Map (Night)',
            },
          ],
        },
        'arcgis-streets-relief': {
          get thumbnailUrl() {
            return (0, S.V)('esri/images/basemap/streets-relief.jpg');
          },
          title: 'Streets (with Relief)',
          baseMapLayers: [
            {
              layerType: 'ArcGISTiledMapServiceLayer',
              showLegend: !1,
              title: 'World Hillshade',
              url: 'https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer',
            },
            {
              layerType: 'VectorTileLayer',
              styleUrl:
                'https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:StreetsRelief:Base',
              title: 'World Street Map (with Relief)',
            },
          ],
        },
        'arcgis-topographic': {
          get thumbnailUrl() {
            return (0, S.V)('esri/images/basemap/topo.jpg');
          },
          title: 'Topographic',
          baseMapLayers: [
            {
              layerType: 'ArcGISTiledMapServiceLayer',
              showLegend: !1,
              title: 'World Hillshade',
              url: 'https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer',
            },
            {
              layerType: 'VectorTileLayer',
              styleUrl:
                'https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Topographic:Base',
              title: 'World Topographic Map',
            },
          ],
        },
        'arcgis-oceans': {
          get thumbnailUrl() {
            return (0, S.V)('esri/images/basemap/oceans.jpg');
          },
          title: 'Oceans',
          baseMapLayers: [
            {
              layerType: 'ArcGISTiledMapServiceLayer',
              showLegend: !1,
              title: 'World Ocean Base',
              url: 'https://ibasemaps-api.arcgis.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer',
            },
            {
              layerType: 'VectorTileLayer',
              styleUrl:
                'https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Oceans:Labels',
              title: 'World Ocean Reference',
              isReference: !0,
            },
          ],
        },
        'osm-standard': {
          title: 'OpenStreetMap',
          baseMapLayers: [
            {
              layerType: 'VectorTileLayer',
              styleUrl:
                'https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:Standard',
              title: 'OpenStreetMap',
            },
          ],
        },
        'osm-standard-relief': {
          title: 'OpenStreetMap (with relief)',
          baseMapLayers: [
            {
              layerType: 'ArcGISTiledMapServiceLayer',
              showLegend: !1,
              title: 'World Hillshade',
              url: 'https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer',
            },
            {
              styleUrl:
                'https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:StandardRelief:Base',
              layerType: 'VectorTileLayer',
              title: 'OpenStreetMap Relief Base',
            },
          ],
        },
        'osm-streets': {
          title: 'OpenStreetMap (Streets)',
          baseMapLayers: [
            {
              layerType: 'VectorTileLayer',
              styleUrl:
                'https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:Streets',
              title: 'OpenStreetMap (Streets)',
            },
          ],
        },
        'osm-streets-relief': {
          title: 'OpenStreetMap (Streets with relief)',
          baseMapLayers: [
            {
              layerType: 'ArcGISTiledMapServiceLayer',
              showLegend: !1,
              title: 'World Hillshade',
              url: 'https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer',
            },
            {
              styleUrl:
                'https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:StreetsRelief:Base',
              layerType: 'VectorTileLayer',
              title: 'OpenStreetMap Relief Base',
            },
          ],
        },
        'osm-light-gray': {
          title: 'OpenStreetMap (Light Gray Canvas)',
          baseMapLayers: [
            {
              layerType: 'VectorTileLayer',
              styleUrl:
                'https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:LightGray:Base',
              title: 'OSM (Light Gray Base)',
            },
            {
              layerType: 'VectorTileLayer',
              styleUrl:
                'https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:LightGray:Labels',
              title: 'OSM (Light Gray Reference)',
              isReference: !0,
            },
          ],
        },
        'osm-dark-gray': {
          title: 'OpenStreetMap (Dark Gray Canvas)',
          baseMapLayers: [
            {
              layerType: 'VectorTileLayer',
              styleUrl:
                'https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:DarkGray:Base',
              title: 'OSM (Dark Gray Base)',
            },
            {
              layerType: 'VectorTileLayer',
              styleUrl:
                'https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:DarkGray:Labels',
              title: 'OSM (Dark Gray Reference)',
              isReference: !0,
            },
          ],
        },
        'arcgis-terrain': {
          title: 'Terrain with Labels',
          baseMapLayers: [
            {
              layerType: 'ArcGISTiledMapServiceLayer',
              showLegend: !1,
              title: 'World Hillshade',
              url: 'https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer',
            },
            {
              layerType: 'VectorTileLayer',
              styleUrl:
                'https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Terrain:Base',
              title: 'World Terrain Base',
            },
            {
              layerType: 'VectorTileLayer',
              styleUrl:
                'https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Terrain:Detail',
              title: 'World Terrain Reference',
              isReference: !0,
            },
          ],
        },
        'arcgis-community': {
          title: 'Community',
          baseMapLayers: [
            {
              layerType: 'VectorTileLayer',
              styleUrl:
                'https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Community',
              title: 'Community',
            },
          ],
        },
        'arcgis-charted-territory': {
          title: 'Charted Territory',
          baseMapLayers: [
            {
              layerType: 'ArcGISTiledMapServiceLayer',
              showLegend: !1,
              title: 'World Hillshade',
              url: 'https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer',
            },
            {
              layerType: 'VectorTileLayer',
              styleUrl:
                'https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:ChartedTerritory:Base',
              title: 'Charted Territory',
            },
          ],
        },
        'arcgis-colored-pencil': {
          title: 'Colored Pencil',
          baseMapLayers: [
            {
              layerType: 'VectorTileLayer',
              styleUrl:
                'https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:ColoredPencil',
              title: 'Colored Pencil',
            },
          ],
        },
        'arcgis-nova': {
          title: 'Nova',
          baseMapLayers: [
            {
              layerType: 'VectorTileLayer',
              styleUrl:
                'https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Nova',
              title: 'Nova',
            },
          ],
        },
        'arcgis-modern-antique': {
          title: 'Modern Antique',
          baseMapLayers: [
            {
              layerType: 'ArcGISTiledMapServiceLayer',
              showLegend: !1,
              title: 'World Hillshade',
              url: 'https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer',
            },
            {
              layerType: 'VectorTileLayer',
              styleUrl:
                'https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:ModernAntique:Base',
              title: 'Modern Antique',
            },
          ],
        },
        'arcgis-midcentury': {
          title: 'Mid-Century',
          baseMapLayers: [
            {
              layerType: 'VectorTileLayer',
              styleUrl:
                'https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Midcentury',
              title: 'Mid-Century',
            },
          ],
        },
        'arcgis-newspaper': {
          title: 'Newspaper',
          baseMapLayers: [
            {
              layerType: 'VectorTileLayer',
              styleUrl:
                'https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Newspaper',
              title: 'Newspaper',
            },
          ],
        },
        'arcgis-hillshade-light': {
          title: 'Hillshade',
          baseMapLayers: [
            {
              layerType: 'ArcGISTiledMapServiceLayer',
              showLegend: !1,
              title: 'World Hillshade',
              url: 'https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer',
            },
          ],
        },
        'arcgis-hillshade-dark': {
          title: 'Hillshade (Dark)',
          baseMapLayers: [
            {
              layerType: 'ArcGISTiledMapServiceLayer',
              showLegend: !1,
              title: 'World Hillshade (Dark)',
              url: 'https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade_Dark/MapServer',
            },
          ],
        },
      };
      var M,
        _ = t(15650);
      let I = 0;
      const k = y.Z.getLogger('esri.Basemap');
      let C = (M = class extends (0, o.eC)(c.Z) {
        constructor(e) {
          super(e),
            (this.id = null),
            (this.portalItem = null),
            (this.spatialReference = null),
            (this.thumbnailUrl = null),
            (this.title = 'Basemap'),
            (this.id = Date.now().toString(16) + '-basemap-' + I++),
            (this.baseLayers = new s.Z()),
            (this.referenceLayers = new s.Z());
          const r = (e) => {
              e.parent &&
                e.parent !== this &&
                'remove' in e.parent &&
                e.parent.remove(e),
                (e.parent = this),
                'elevation' === e.type &&
                  k.error(
                    `Layer '${e.title}, id:${e.id}' of type '${e.type}' is not supported as a basemap layer and will therefore be ignored.`,
                  );
            },
            t = (e) => {
              e.parent = null;
            };
          this.baseLayers.on('after-add', (e) => r(e.item)),
            this.referenceLayers.on('after-add', (e) => r(e.item)),
            this.baseLayers.on('after-remove', (e) => t(e.item)),
            this.referenceLayers.on('after-remove', (e) => t(e.item));
        }
        initialize() {
          this.when().catch((e) => {
            k.error(
              '#load()',
              `Failed to load basemap (title: '${this.title}', id: '${this.id}')`,
              e,
            );
          }),
            this.resourceInfo &&
              this.read(this.resourceInfo.data, this.resourceInfo.context);
        }
        destroy() {
          var e;
          const r = this.baseLayers.removeAll();
          for (const e of r) e.destroy();
          const t = this.referenceLayers.removeAll();
          for (const e of t) e.destroy();
          this.baseLayers.destroy(),
            this.referenceLayers.destroy(),
            null == (e = this.portalItem) || e.destroy(),
            (this.portalItem = null);
        }
        normalizeCtorArgs(e) {
          return (
            e &&
              'resourceInfo' in e &&
              (this._set('resourceInfo', e.resourceInfo),
              delete (e = { ...e }).resourceInfo),
            e
          );
        }
        set baseLayers(e) {
          this._set('baseLayers', (0, i.Z)(e, this._get('baseLayers')));
        }
        _writeBaseLayers(e, r, t) {
          const a = [];
          e
            ? ((t = { ...t, layerContainerType: 'basemap' }),
              this.baseLayers.forEach((e) => {
                const r = (0, _.Nw)(
                  e,
                  t.webmap ? t.webmap.getLayerJSONFromResourceInfo(e) : null,
                  t,
                );
                (0, d.pC)(r) && a.push(r);
              }),
              this.referenceLayers.forEach((e) => {
                const r = (0, _.Nw)(
                  e,
                  t.webmap ? t.webmap.getLayerJSONFromResourceInfo(e) : null,
                  t,
                );
                (0, d.pC)(r) && ((r.isReference = !0), a.push(r));
              }),
              (r.baseMapLayers = a))
            : (r.baseMapLayers = a);
        }
        set referenceLayers(e) {
          this._set(
            'referenceLayers',
            (0, i.Z)(e, this._get('referenceLayers')),
          );
        }
        writeTitle(e, r) {
          r.title = e || 'Basemap';
        }
        load(e) {
          return (
            this.addResolvingPromise(this._loadFromSource(e)),
            Promise.resolve(this)
          );
        }
        loadAll() {
          return (0, p.G)(this, (e) => {
            e(this.baseLayers, this.referenceLayers);
          });
        }
        clone() {
          const e = {
            id: this.id,
            title: this.title,
            portalItem: this.portalItem,
            baseLayers: this.baseLayers.slice(),
            referenceLayers: this.referenceLayers.slice(),
          };
          return (
            this.loaded && (e.loadStatus = 'loaded'),
            new M({ resourceInfo: this.resourceInfo }).set(e)
          );
        }
        read(e, r) {
          this.resourceInfo ||
            this._set('resourceInfo', { data: e, context: r }),
            super.read(e, r);
        }
        write(e, r) {
          return (
            (e = e || {}),
            (r && r.origin) || (r = { origin: 'web-map', ...r }),
            super.write(e, r),
            !this.loaded &&
              this.resourceInfo &&
              this.resourceInfo.data.baseMapLayers &&
              (e.baseMapLayers = this.resourceInfo.data.baseMapLayers.map(
                (e) => {
                  const r = (0, n.d9)(e);
                  return (
                    r.url && (0, g.oC)(r.url) && (r.url = `https:${r.url}`),
                    r.templateUrl &&
                      (0, g.oC)(r.templateUrl) &&
                      (r.templateUrl = `https:${r.templateUrl}`),
                    r
                  );
                },
              )),
            e
          );
        }
        async _loadFromSource(e) {
          const { resourceInfo: r, portalItem: t } = this;
          (0, h.k_)(e);
          const a = [];
          if (r) {
            const t = r.context ? r.context.url : null;
            if (
              (a.push(this._loadLayersFromJSON(r.data, t, e)),
              r.data.id && !r.data.title)
            ) {
              const e = r.data.id;
              a.push(
                (async function (e) {
                  if (!e) return;
                  const r =
                      e.indexOf('-vector') > -1
                        ? e.slice(0, e.indexOf('-vector'))
                        : e,
                    t = await (0, w.ME)('esri/t9n/basemaps');
                  return t[e] || t[r];
                })(e).then((e) => {
                  e && this.read({ title: e }, r.context);
                }),
              );
            }
          } else t && a.push(this._loadFromItem(t, e));
          await Promise.all(a);
        }
        async _loadLayersFromJSON(e, r, a) {
          const s = this.resourceInfo && this.resourceInfo.context,
            i =
              (this.portalItem && this.portalItem.portal) ||
              (s && s.portal) ||
              null,
            l = s && 'web-scene' === s.origin ? 'web-scene' : 'web-map',
            { populateOperationalLayers: o } = await t
              .e(24)
              .then(t.bind(t, 70024)),
            n = [];
          if (
            ((0, h.k_)(a), e.baseMapLayers && Array.isArray(e.baseMapLayers))
          ) {
            const t = {
                context: {
                  origin: l,
                  url: r,
                  portal: i,
                  layerContainerType: 'basemap',
                },
                defaultLayerType: 'DefaultTileLayer',
              },
              a = o(
                this.baseLayers,
                e.baseMapLayers.filter((e) => !e.isReference),
                t,
              );
            n.push(a);
            const s = o(
              this.referenceLayers,
              e.baseMapLayers.filter((e) => e.isReference),
              t,
            );
            n.push(s);
          }
          await (0, h.as)(n);
        }
        async _loadFromItem(e, r) {
          const t = await e.load(r),
            a = await t.fetchData('json', r),
            s = (0, g.mN)(e.itemUrl);
          return (
            this._set('resourceInfo', {
              data: a.baseMap,
              context: {
                origin: 'web-map',
                portal: e.portal || f.Z.getDefault(),
                url: s,
              },
            }),
            this.read(this.resourceInfo.data, this.resourceInfo.context),
            this.read(
              { spatialReference: a.spatialReference },
              this.resourceInfo.context,
            ),
            this.read(
              { title: e.title, thumbnailUrl: e.thumbnailUrl },
              {
                origin: 'portal-item',
                portal: e.portal || f.Z.getDefault(),
                url: s,
              },
            ),
            this._loadLayersFromJSON(this.resourceInfo.data, s, r)
          );
        }
        static fromId(e) {
          const r = T[e];
          if (r) {
            if (r.deprecated) {
              let r = null;
              'dark-gray' === e
                ? (r = 'dark-gray-vector')
                : 'gray' === e
                ? (r = 'gray-vector')
                : 'streets' === e
                ? (r = 'streets-vector')
                : 'topo' === e && (r = 'topo-vector'),
                (0, l.x9)(
                  k,
                  `The ${e} basemap has entered mature support and is no longer being updated.`,
                  {
                    replacement: r,
                    see: 'https://arcg.is/1iq8aD',
                    warnOnce: !0,
                  },
                );
            }
            return M.fromJSON(r);
          }
          return null;
        }
      });
      (0, a._)(
        [
          (0, u.Cb)({
            json: {
              write: {
                ignoreOrigin: !0,
                target: 'baseMapLayers',
                writer(e, r, t, a) {
                  this._writeBaseLayers(e, r, a);
                },
              },
              origins: {
                'web-scene': {
                  write: {
                    ignoreOrigin: !0,
                    target: { baseMapLayers: { type: s.Z } },
                    writer(e, r, t, a) {
                      this._writeBaseLayers(e, r, a);
                    },
                  },
                },
              },
            },
          }),
        ],
        C.prototype,
        'baseLayers',
        null,
      ),
        (0, a._)(
          [
            (0, u.Cb)({
              type: String,
              json: { origins: { 'web-scene': { write: !0 } } },
            }),
          ],
          C.prototype,
          'id',
          void 0,
        ),
        (0, a._)(
          [(0, u.Cb)({ type: L.default })],
          C.prototype,
          'portalItem',
          void 0,
        ),
        (0, a._)([(0, u.Cb)()], C.prototype, 'referenceLayers', null),
        (0, a._)(
          [(0, u.Cb)({ readOnly: !0 })],
          C.prototype,
          'resourceInfo',
          void 0,
        ),
        (0, a._)(
          [(0, u.Cb)({ type: v.Z })],
          C.prototype,
          'spatialReference',
          void 0,
        ),
        (0, a._)([(0, u.Cb)()], C.prototype, 'thumbnailUrl', void 0),
        (0, a._)(
          [
            (0, u.Cb)({
              type: String,
              json: { origins: { 'web-scene': { write: { isRequired: !0 } } } },
            }),
          ],
          C.prototype,
          'title',
          void 0,
        ),
        (0, a._)([(0, b.c)('title')], C.prototype, 'writeTitle', null),
        (C = M = (0, a._)([(0, m.j)('esri.Basemap')], C));
      const O = C;
    },
    66643: (e, r, t) => {
      t.d(r, { Ed: () => i, UI: () => l, q6: () => o, mt: () => n });
      var a = t(70586),
        s = t(95330);
      function i(e, r, t) {
        return (0, s.as)(e.map((e, a) => r.apply(t, [e, a])));
      }
      function l(e, r, t) {
        return (0, s.as)(e.map((e, a) => r.apply(t, [e, a]))).then((e) =>
          e.map((e) => e.value),
        );
      }
      function o(e) {
        return (0, a.Wi)(e)
          ? (0, s.DB)()
          : e
              .then((e) => ({ ok: !0, value: e }))
              .catch((e) => ({ ok: !1, error: e }));
      }
      function n(e) {
        return e
          .then((e) => ({ ok: !0, value: e }))
          .catch((e) => ((0, s.r9)(e), { ok: !1, error: e }));
      }
    },
    70921: (e, r, t) => {
      t.d(r, { R: () => i, Z: () => s });
      var a = t(80539);
      function s(e, r, t = a.Z) {
        return (
          r || (r = new t()),
          r === e ||
            (r.removeAll(),
            (s = e) &&
            (Array.isArray(s) || ('items' in s && Array.isArray(s.items)))
              ? r.addMany(e)
              : e && r.add(e)),
          r
        );
        var s;
      }
      function i(e) {
        return e;
      }
    },
    68668: (e, r, t) => {
      t.d(r, { G: () => o, w: () => n });
      var a = t(66643),
        s = t(80539),
        i = t(83379),
        l = t(70586);
      async function o(e, r) {
        return await e.load(), n(e, r);
      }
      async function n(e, r) {
        const t = [],
          o = (...e) => {
            for (const r of e)
              (0, l.Wi)(r) ||
                (Array.isArray(r)
                  ? o(...r)
                  : s.Z.isCollection(r)
                  ? r.forEach((e) => o(e))
                  : i.Z.isLoadable(r) && t.push(r));
          };
        r(o);
        let n = null;
        if (
          (await (0, a.UI)(t, async (e) => {
            !1 !==
              (
                await (0, a.q6)(
                  (function (e) {
                    return 'loadAll' in e && 'function' == typeof e.loadAll;
                  })(e)
                    ? e.loadAll()
                    : e.load(),
                )
              ).ok ||
              n ||
              (n = e);
          }),
          n)
        )
          throw n.loadError;
        return e;
      }
    },
    94443: (e, r, t) => {
      t.d(r, { ME: () => h, Su: () => g, tz: () => d });
      var a = t(20102),
        s = t(95330),
        i = t(70171);
      const l = /^([a-z]{2})(?:[-_]([A-Za-z]{2}))?$/,
        o = {
          ar: !0,
          bg: !0,
          bs: !0,
          ca: !0,
          cs: !0,
          da: !0,
          de: !0,
          el: !0,
          en: !0,
          es: !0,
          et: !0,
          fi: !0,
          fr: !0,
          he: !0,
          hr: !0,
          hu: !0,
          id: !0,
          it: !0,
          ja: !0,
          ko: !0,
          lt: !0,
          lv: !0,
          nb: !0,
          nl: !0,
          pl: !0,
          'pt-BR': !0,
          'pt-PT': !0,
          ro: !0,
          ru: !0,
          sk: !0,
          sl: !0,
          sr: !0,
          sv: !0,
          th: !0,
          tr: !0,
          uk: !0,
          vi: !0,
          'zh-CN': !0,
          'zh-HK': !0,
          'zh-TW': !0,
        };
      function n(e) {
        var r;
        return null != (r = o[e]) && r;
      }
      const c = [],
        p = new Map();
      function y(e) {
        for (const r of p.keys()) u(e.pattern, r) && p.delete(r);
      }
      function d(e) {
        return (
          c.includes(e) || (y(e), c.unshift(e)),
          {
            remove() {
              const r = c.indexOf(e);
              r > -1 && (c.splice(r, 1), y(e));
            },
          }
        );
      }
      async function h(e) {
        const r = (0, i.Kd)();
        p.has(e) ||
          p.set(
            e,
            (async function (e, r) {
              const t = [];
              for (const a of c)
                if (u(a.pattern, e))
                  try {
                    return await a.fetchMessageBundle(e, r);
                  } catch (e) {
                    t.push(e);
                  }
              if (t.length)
                throw new a.Z(
                  'intl:message-bundle-error',
                  `Errors occurred while loading "${e}"`,
                  { errors: t },
                );
              throw new a.Z(
                'intl:no-message-bundle-loader',
                `No loader found for message bundle "${e}"`,
              );
            })(e, r),
          );
        const t = p.get(e);
        return await m.add(t), t;
      }
      function g(e) {
        if (!l.test(e)) return null;
        const [, r, t] = l.exec(e),
          a = r + (t ? '-' + t.toUpperCase() : '');
        return n(a) ? a : n(r) ? r : null;
      }
      function u(e, r) {
        return 'string' == typeof e ? r.startsWith(e) : e.test(r);
      }
      (0, i.Ze)(() => {
        p.clear();
      });
      const m = new (class {
        constructor() {
          this._numLoading = 0;
        }
        async waitForAll() {
          this._dfd && (await this._dfd.promise);
        }
        add(e) {
          return (
            this._increase(),
            e.then(
              () => this._decrease(),
              () => this._decrease(),
            ),
            this.waitForAll()
          );
        }
        _increase() {
          this._numLoading++, this._dfd || (this._dfd = (0, s.dD)());
        }
        _decrease() {
          (this._numLoading = Math.max(this._numLoading - 1, 0)),
            this._dfd &&
              0 === this._numLoading &&
              (this._dfd.resolve(), (this._dfd = null));
        }
      })();
    },
    15235: (e, r, t) => {
      t.r(r), t.d(r, { default: () => k });
      var a = t(43697),
        s = t(99880),
        i = t(20102),
        l = t(96674),
        o = t(22974),
        n = t(83379),
        c = t(70586),
        p = t(17452),
        y = t(5600),
        d = t(75215),
        h = t(71715),
        g = t(52011),
        u = t(6570),
        m = t(65587),
        b = t(15923),
        v = t(92604),
        f = (t(67676), t(80442), t(90578));
      const L = v.Z.getLogger('esri.portal.PortalItemResource');
      let S = class extends b.Z {
        constructor(e) {
          super(e), (this.portalItem = null);
        }
        normalizeCtorArgs(e) {
          return e && e.portalItem && e.path
            ? { ...e, path: this._normalizePath(e.path, e.portalItem) }
            : e;
        }
        set path(e) {
          (0, c.pC)(e) && (0, p.YP)(e)
            ? L.error(
                'portalitemresource:invalid-path',
                'A portal item resource path must be relative',
              )
            : this._set('path', e);
        }
        _castPath(e) {
          return this._normalizePath(e, this.portalItem);
        }
        get url() {
          return this.portalItem && this.path
            ? `${this.portalItem.itemUrl}/resources/${this.path}`
            : null;
        }
        get itemRelativeUrl() {
          return this.portalItem && this.path
            ? `./resources/${this.path}`
            : null;
        }
        fetch(e = 'json', r) {
          const t = this.url;
          if ((0, c.Wi)(t))
            throw new i.Z(
              'portal-item-resource:fetch',
              'Portal item resource does not refer to a valid item or path',
            );
          return this.portalItem.portal._request(t, {
            responseType: e,
            query: { token: this.portalItem.apiKey },
            signal: (0, c.U2)(r, 'signal'),
          });
        }
        async update(e, r) {
          return (await t.e(7873).then(t.bind(t, 97873))).addOrUpdateResource(
            this,
            'update',
            e,
            r,
          );
        }
        hasPath() {
          return (0, c.pC)(this.path);
        }
        _normalizePath(e, r) {
          return (0, c.Wi)(e)
            ? e
            : ((e = e.replace(/^\/+/, '')),
              (0, c.pC)(r) && (0, p.YP)(e) && (e = (0, p.PF)(e, r.itemUrl)),
              e.replace(/^\/+/, '').replace(/^(\.\/)?resources\//, ''));
        }
      };
      (0, a._)([(0, y.Cb)()], S.prototype, 'portalItem', void 0),
        (0, a._)(
          [(0, y.Cb)({ type: String, value: null })],
          S.prototype,
          'path',
          null,
        ),
        (0, a._)([(0, f.p)('path')], S.prototype, '_castPath', null),
        (0, a._)(
          [(0, y.Cb)({ type: String, readOnly: !0 })],
          S.prototype,
          'url',
          null,
        ),
        (0, a._)(
          [(0, y.Cb)({ type: String, readOnly: !0 })],
          S.prototype,
          'itemRelativeUrl',
          null,
        ),
        (S = (0, a._)([(0, g.j)('esri.portal.PortalItemResource')], S));
      const w = S;
      let T = class extends b.Z {
        constructor(e) {
          super(e), (this.created = null), (this.rating = null);
        }
      };
      (0, a._)([(0, y.Cb)()], T.prototype, 'created', void 0),
        (0, a._)([(0, y.Cb)()], T.prototype, 'rating', void 0),
        (T = (0, a._)([(0, g.j)('esri.portal.PortalRating')], T));
      const M = T;
      var _;
      let I = (_ = class extends (0, l.eC)(n.Z) {
        constructor(e) {
          super(e),
            (this.access = null),
            (this.accessInformation = null),
            (this.apiKey = null),
            (this.applicationProxies = null),
            (this.avgRating = null),
            (this.categories = null),
            (this.created = null),
            (this.culture = null),
            (this.description = null),
            (this.extent = null),
            (this.groupCategories = null),
            (this.id = null),
            (this.itemControl = null),
            (this.licenseInfo = null),
            (this.modified = null),
            (this.name = null),
            (this.numComments = null),
            (this.numRatings = null),
            (this.numViews = null),
            (this.owner = null),
            (this.ownerFolder = null),
            (this.portal = null),
            (this.screenshots = null),
            (this.size = null),
            (this.snippet = null),
            (this.sourceJSON = null),
            (this.tags = null),
            (this.title = null),
            (this.type = null),
            (this.typeKeywords = null),
            (this.url = null);
        }
        static from(e) {
          return (0, d.TJ)(_, e);
        }
        destroy() {
          this.portal = null;
        }
        get displayName() {
          const e = this.type,
            r = this.typeKeywords || [];
          let t = e;
          return (
            'Feature Service' === e || 'Feature Collection' === e
              ? (t =
                  r.indexOf('Table') > -1
                    ? 'Table'
                    : r.indexOf('Route Layer') > -1
                    ? 'Route Layer'
                    : r.indexOf('Markup') > -1
                    ? 'Markup'
                    : 'Feature Layer')
              : 'Image Service' === e
              ? (t =
                  r.indexOf('Elevation 3D Layer') > -1
                    ? 'Elevation Layer'
                    : r.indexOf('Tiled Imagery') > -1
                    ? 'Tiled Imagery Layer'
                    : 'Imagery Layer')
              : 'Scene Service' === e
              ? (t = 'Scene Layer')
              : 'Media Service' === e
              ? (t = 'Media Layer')
              : 'Scene Package' === e
              ? (t = 'Scene Layer Package')
              : 'Stream Service' === e
              ? (t = 'Feature Layer')
              : 'Geoprocessing Service' === e &&
                this.portal &&
                this.portal.isPortal
              ? (t =
                  r.indexOf('Web Tool') > -1 ? 'Tool' : 'Geoprocessing Service')
              : 'Geocoding Service' === e
              ? (t = 'Locator')
              : 'Geoenrichment Service' === e
              ? (t = 'GeoEnrichment Service')
              : 'Microsoft Powerpoint' === e
              ? (t = 'Microsoft PowerPoint')
              : 'GeoJson' === e
              ? (t = 'GeoJSON')
              : 'Globe Service' === e
              ? (t = 'Globe Layer')
              : 'Vector Tile Service' === e
              ? (t = 'Tile Layer')
              : 'netCDF' === e
              ? (t = 'NetCDF')
              : 'Map Service' === e
              ? (t =
                  -1 === r.indexOf('Spatiotemporal') &&
                  (r.indexOf('Hosted Service') > -1 ||
                    r.indexOf('Tiled') > -1) &&
                  -1 === r.indexOf('Relational')
                    ? 'Tile Layer'
                    : 'Map Image Layer')
              : e && e.toLowerCase().indexOf('add in') > -1
              ? (t = e.replace(/(add in)/gi, 'Add-In'))
              : 'datastore catalog service' === e
              ? (t = 'Big Data File Share')
              : 'Compact Tile Package' === e
              ? (t = 'Tile Package (tpkx)')
              : 'OGCFeatureServer' === e
              ? (t = 'OGC Feature Layer')
              : 'web mapping application' === e &&
                r.indexOf('configurableApp') > -1 &&
                (t = 'Instant App'),
            t
          );
        }
        readExtent(e) {
          return e && e.length
            ? new u.Z(e[0][0], e[0][1], e[1][0], e[1][1])
            : null;
        }
        get iconUrl() {
          const e = (this.type && this.type.toLowerCase()) || '',
            r = this.typeKeywords || [];
          let t,
            a = !1,
            i = !1,
            l = !1,
            o = !1,
            n = !1,
            c = !1;
          return (
            e.indexOf('service') > 0 ||
            'feature collection' === e ||
            'kml' === e ||
            'wms' === e ||
            'wmts' === e ||
            'wfs' === e
              ? ((a = r.indexOf('Hosted Service') > -1),
                'feature service' === e ||
                'feature collection' === e ||
                'kml' === e ||
                'wfs' === e
                  ? ((i = r.indexOf('Table') > -1),
                    (l = r.indexOf('Route Layer') > -1),
                    (o = r.indexOf('Markup') > -1),
                    (n = -1 !== r.indexOf('Spatiotemporal')),
                    (c = -1 !== r.indexOf('UtilityNetwork')),
                    (t =
                      n && i
                        ? 'spatiotemporaltable'
                        : i
                        ? 'table'
                        : l
                        ? 'routelayer'
                        : o
                        ? 'markup'
                        : n
                        ? 'spatiotemporal'
                        : a
                        ? 'featureshosted'
                        : c
                        ? 'utilitynetwork'
                        : 'features'))
                  : (t =
                      'map service' === e || 'wms' === e || 'wmts' === e
                        ? a || r.indexOf('Tiled') > -1 || 'wmts' === e
                          ? 'maptiles'
                          : 'mapimages'
                        : 'scene service' === e
                        ? r.indexOf('Line') > -1
                          ? 'sceneweblayerline'
                          : r.indexOf('3DObject') > -1
                          ? 'sceneweblayermultipatch'
                          : r.indexOf('Point') > -1
                          ? 'sceneweblayerpoint'
                          : r.indexOf('IntegratedMesh') > -1
                          ? 'sceneweblayermesh'
                          : r.indexOf('PointCloud') > -1
                          ? 'sceneweblayerpointcloud'
                          : r.indexOf('Polygon') > -1
                          ? 'sceneweblayerpolygon'
                          : r.indexOf('Building') > -1
                          ? 'sceneweblayerbuilding'
                          : r.indexOf('Voxel') > -1
                          ? 'sceneweblayervoxel'
                          : 'sceneweblayer'
                        : 'image service' === e
                        ? r.indexOf('Elevation 3D Layer') > -1
                          ? 'elevationlayer'
                          : r.indexOf('Tiled Imagery') > -1
                          ? 'tiledimagerylayer'
                          : 'imagery'
                        : 'stream service' === e
                        ? 'streamlayer'
                        : 'media service' === e
                        ? 'mediaservice'
                        : 'vector tile service' === e
                        ? 'vectortile'
                        : 'datastore catalog service' === e
                        ? 'datastorecollection'
                        : 'geocoding service' === e
                        ? 'geocodeservice'
                        : 'geoprocessing service' === e &&
                          r.indexOf('Web Tool') > -1 &&
                          this.portal &&
                          this.portal.isPortal
                        ? 'tool'
                        : 'layers'))
              : (t =
                  'web map' === e || 'cityengine web scene' === e
                    ? 'maps'
                    : 'web scene' === e
                    ? r.indexOf('ViewingMode-Local') > -1
                      ? 'webscenelocal'
                      : 'websceneglobal'
                    : 'web mapping application' === e &&
                      r.indexOf('configurableApp') > -1
                    ? 'instantapps'
                    : 'web mapping application' === e ||
                      'mobile application' === e ||
                      'application' === e ||
                      'operation view' === e ||
                      'desktop application' === e
                    ? 'apps'
                    : 'map document' === e ||
                      'map package' === e ||
                      'published map' === e ||
                      'scene document' === e ||
                      'globe document' === e ||
                      'basemap package' === e ||
                      'mobile basemap package' === e ||
                      'mobile map package' === e ||
                      'project package' === e ||
                      'project template' === e ||
                      'pro map' === e ||
                      'layout' === e ||
                      ('layer' === e && r.indexOf('ArcGIS Pro') > -1) ||
                      ('explorer map' === e && r.indexOf('Explorer Document'))
                    ? 'mapsgray'
                    : 'service definition' === e ||
                      'csv' === e ||
                      'shapefile' === e ||
                      'cad drawing' === e ||
                      'geojson' === e ||
                      '360 vr experience' === e ||
                      'netcdf' === e ||
                      'administrative report' === e
                    ? 'datafiles'
                    : 'explorer add in' === e ||
                      'desktop add in' === e ||
                      'windows viewer add in' === e ||
                      'windows viewer configuration' === e
                    ? 'appsgray'
                    : 'arcgis pro add in' === e ||
                      'arcgis pro configuration' === e
                    ? 'addindesktop'
                    : 'rule package' === e ||
                      'file geodatabase' === e ||
                      'sqlite geodatabase' === e ||
                      'csv collection' === e ||
                      'kml collection' === e ||
                      'windows mobile package' === e ||
                      'map template' === e ||
                      'desktop application template' === e ||
                      'gml' === e ||
                      'arcpad package' === e ||
                      'code sample' === e ||
                      'form' === e ||
                      'document link' === e ||
                      'earth configuration' === e ||
                      'operations dashboard add in' === e ||
                      'rules package' === e ||
                      'image' === e ||
                      'workflow manager package' === e ||
                      ('explorer map' === e &&
                        r.indexOf('Explorer Mapping Application') > -1) ||
                      r.indexOf('Document') > -1
                    ? 'datafilesgray'
                    : 'network analysis service' === e ||
                      'geoprocessing service' === e ||
                      'geodata service' === e ||
                      'geometry service' === e ||
                      'geoprocessing package' === e ||
                      'locator package' === e ||
                      'geoprocessing sample' === e ||
                      'workflow manager service' === e
                    ? 'toolsgray'
                    : 'layer' === e ||
                      'layer package' === e ||
                      'explorer layer' === e
                    ? 'layersgray'
                    : 'scene package' === e
                    ? 'scenepackage'
                    : 'mobile scene package' === e
                    ? 'mobilescenepackage'
                    : 'tile package' === e || 'compact tile package' === e
                    ? 'tilepackage'
                    : 'task file' === e
                    ? 'taskfile'
                    : 'report template' === e
                    ? 'report-template'
                    : 'statistical data collection' === e
                    ? 'statisticaldatacollection'
                    : 'insights workbook' === e
                    ? 'workbook'
                    : 'insights model' === e
                    ? 'insightsmodel'
                    : 'insights page' === e
                    ? 'insightspage'
                    : 'insights theme' === e
                    ? 'insightstheme'
                    : 'hub initiative' === e
                    ? 'hubinitiative'
                    : 'hubpage' === e
                    ? 'hubpage'
                    : 'hub event' === e
                    ? 'hubevent'
                    : 'hub site application' === e
                    ? 'hubsite'
                    : 'hub project' === e
                    ? 'hubproject'
                    : 'relational database connection' === e
                    ? 'relationaldatabaseconnection'
                    : 'big data file share' === e
                    ? 'datastorecollection'
                    : 'image collection' === e
                    ? 'imagecollection'
                    : 'style' === e
                    ? 'style'
                    : 'desktop style' === e
                    ? 'desktopstyle'
                    : 'dashboard' === e
                    ? 'dashboard'
                    : 'raster function template' === e
                    ? 'rasterprocessingtemplate'
                    : 'vector tile package' === e
                    ? 'vectortilepackage'
                    : 'ortho mapping project' === e
                    ? 'orthomappingproject'
                    : 'ortho mapping template' === e
                    ? 'orthomappingtemplate'
                    : 'solution' === e
                    ? 'solutions'
                    : 'geopackage' === e
                    ? 'geopackage'
                    : 'deep learning package' === e
                    ? 'deeplearningpackage'
                    : 'real time analytic' === e
                    ? 'realtimeanalytics'
                    : 'big data analytic' === e
                    ? 'bigdataanalytics'
                    : 'feed' === e
                    ? 'feed'
                    : 'excalibur imagery project' === e
                    ? 'excaliburimageryproject'
                    : 'notebook' === e
                    ? 'notebook'
                    : 'storymap' === e
                    ? 'storymap'
                    : 'survey123 add in' === e
                    ? 'survey123addin'
                    : 'mission' === e
                    ? 'mission'
                    : 'mission report' === e
                    ? 'missionreport'
                    : 'quickcapture project' === e
                    ? 'quickcaptureproject'
                    : 'pro report' === e
                    ? 'proreport'
                    : 'urban model' === e
                    ? 'urbanmodel'
                    : 'web experience' === e
                    ? 'experiencebuilder'
                    : 'web experience template' === e
                    ? 'webexperiencetemplate'
                    : 'experience builder widget' === e
                    ? 'experiencebuilderwidget'
                    : 'experience builder widget package' === e
                    ? 'experiencebuilderwidgetpackage'
                    : 'workflow' === e
                    ? 'workflow'
                    : 'insights script' === e
                    ? 'insightsscript'
                    : 'kernel gateway connection' === e
                    ? 'kernelgatewayconnection'
                    : 'hub initiative template' === e
                    ? 'hubinitiativetemplate'
                    : 'storymap theme' === e
                    ? 'storymaptheme'
                    : 'knowledge graph' === e
                    ? 'knowledgegraph'
                    : 'native application' === e
                    ? 'nativeapp'
                    : 'native application installer' === e
                    ? 'nativeappinstaller'
                    : 'link chart' === e
                    ? 'linkchart'
                    : 'investigation' === e
                    ? 'investigation'
                    : 'ogcfeatureserver' === e
                    ? 'features'
                    : 'pro project' === e
                    ? 'proproject'
                    : 'insights workbook package' === e
                    ? 'insightsworkbookpackage'
                    : 'apache parquet' === e
                    ? 'apacheparquet'
                    : 'maps'),
            t ? (0, s.V)('esri/images/portal/' + t + '16.png') : null
          );
        }
        get isLayer() {
          return (
            [
              'Map Service',
              'Feature Service',
              'Feature Collection',
              'Scene Service',
              'Image Service',
              'Stream Service',
              'Vector Tile Service',
              'WMTS',
              'WMS',
            ].indexOf(this.type) > -1
          );
        }
        get itemUrl() {
          const e = this.get('portal.restUrl');
          return e ? e + '/content/items/' + this.id : null;
        }
        get thumbnailUrl() {
          const e = this.itemUrl,
            r = this.thumbnail;
          return e && r
            ? this.portal._normalizeUrl(`${e}/info/${r}?f=json`)
            : null;
        }
        get userItemUrl() {
          const e = this.get('portal.restUrl');
          if (!e) return null;
          const r = this.owner || this.get('portal.user.username');
          return r
            ? `${e}/content/users/${
                this.ownerFolder ? `${r}/${this.ownerFolder}` : r
              }/items/${this.id}`
            : null;
        }
        load(e) {
          this.portal || (this.portal = m.Z.getDefault());
          const r = this.portal
            .load(e)
            .then(() =>
              this.sourceJSON
                ? this.sourceJSON
                : this.id && this.itemUrl
                ? this.portal._request(this.itemUrl, {
                    signal: (0, c.pC)(e) ? e.signal : null,
                    query: { token: this.apiKey },
                  })
                : {},
            )
            .then((e) => {
              (this.sourceJSON = e), this.read(e);
            });
          return this.addResolvingPromise(r), Promise.resolve(this);
        }
        addRating(e) {
          const r = { method: 'post', query: {} };
          return (
            e instanceof M && (e = e.rating),
            isNaN(e) || 'number' != typeof e || (r.query.rating = e),
            this.portal
              ._request(this.itemUrl + '/addRating', r)
              .then(() => new M({ rating: e, created: new Date() }))
          );
        }
        clone() {
          const e = {
            access: this.access,
            accessInformation: this.accessInformation,
            applicationProxies: (0, o.d9)(this.applicationProxies),
            avgRating: this.avgRating,
            categories: (0, o.d9)(this.categories),
            created: (0, o.d9)(this.created),
            culture: this.culture,
            description: this.description,
            extent: (0, o.d9)(this.extent),
            groupCategories: (0, o.d9)(this.groupCategories),
            id: this.id,
            itemControl: this.itemControl,
            licenseInfo: this.licenseInfo,
            modified: (0, o.d9)(this.modified),
            name: this.name,
            numComments: this.numComments,
            numRatings: this.numRatings,
            numViews: this.numViews,
            owner: this.owner,
            ownerFolder: this.ownerFolder,
            portal: this.portal,
            screenshots: (0, o.d9)(this.screenshots),
            size: this.size,
            snippet: this.snippet,
            tags: (0, o.d9)(this.tags),
            thumbnail: this.thumbnail,
            title: this.title,
            type: this.type,
            typeKeywords: (0, o.d9)(this.typeKeywords),
            url: this.url,
          };
          return (
            this.loaded && (e.loadStatus = 'loaded'),
            new _({ sourceJSON: this.sourceJSON }).set(e)
          );
        }
        createPostQuery() {
          const e = this.toJSON();
          for (const r in e)
            'tags' === r && null !== e[r] && (e[r] = e[r].join(', ')),
              'typeKeywords' === r && null !== e[r] && (e[r] = e[r].join(', ')),
              'extent' === r && e[r] && (e[r] = JSON.stringify(e[r]));
          return e;
        }
        deleteRating() {
          return this.portal
            ._request(this.itemUrl + '/deleteRating', { method: 'post' })
            .then(() => {});
        }
        fetchData(e = 'json', r) {
          return this.portal._request(this.itemUrl + '/data', {
            responseType: e,
            ...r,
            query: { token: this.apiKey },
          });
        }
        fetchRating(e) {
          return this.portal
            ._request(this.itemUrl + '/rating', {
              query: { token: this.apiKey },
              ...e,
            })
            .then((e) =>
              null != e.rating
                ? ((e.created = new Date(e.created)), new M(e))
                : null,
            );
        }
        fetchRelatedItems(e, r) {
          return this.portal._requestToTypedArray(
            this.itemUrl + '/relatedItems',
            { query: { ...e, token: this.apiKey }, ...r },
            _,
          );
        }
        getThumbnailUrl(e) {
          let r = this.thumbnailUrl;
          return r && e && (r += `&w=${e}`), r;
        }
        reload() {
          return this.portal
            ._request(this.itemUrl, {
              cacheBust: !0,
              query: { token: this.apiKey },
            })
            .then((e) => ((this.sourceJSON = e), this.read(e), this));
        }
        update(e) {
          return this.id
            ? this.load()
                .then(() => this.portal._signIn())
                .then(() => {
                  const r = e && e.data,
                    t = { method: 'post' };
                  t.query = this.createPostQuery();
                  for (const e in t.query)
                    null === t.query[e] && (t.query[e] = '');
                  return (
                    (t.query.clearEmptyFields = !0),
                    null != r &&
                      ('string' == typeof r
                        ? (t.query.text = r)
                        : 'object' == typeof r &&
                          (t.query.text = JSON.stringify(r))),
                    this.portal
                      ._request(`${this.userItemUrl}/update`, t)
                      .then(() => this.reload())
                  );
                })
            : Promise.reject(
                new i.Z(
                  'portal:item-does-not-exist',
                  'The item does not exist yet and cannot be updated',
                ),
              );
        }
        updateThumbnail(e) {
          return this.id
            ? this.load()
                .then(() => this.portal._signIn())
                .then(() => {
                  const r = e.thumbnail,
                    t = e.filename,
                    a = { method: 'post' };
                  if ('string' == typeof r)
                    (0, p.HK)(r)
                      ? (a.query = { data: r })
                      : (a.query = { url: (0, p.hF)(r) }),
                      (0, c.pC)(t) && (a.query.filename = t);
                  else {
                    const e = new FormData();
                    (0, c.pC)(t) ? e.append('file', r, t) : e.append('file', r),
                      (a.body = e);
                  }
                  return this.portal
                    ._request(`${this.userItemUrl}/updateThumbnail`, a)
                    .then(() => this.reload());
                })
            : Promise.reject(
                new i.Z(
                  'portal:item-does-not-exist',
                  'The item does not exist yet and cannot be updated',
                ),
              );
        }
        async fetchResources(e = {}, r) {
          return (await t.e(7873).then(t.bind(t, 97873))).fetchResources(
            this,
            e,
            r,
          );
        }
        async addResource(e, r, a) {
          const s = await t.e(7873).then(t.bind(t, 97873));
          return (e.portalItem = this), s.addOrUpdateResource(e, 'add', r, a);
        }
        async removeResource(e, r) {
          const a = await t.e(7873).then(t.bind(t, 97873));
          if (e.portalItem && e.portalItem.itemUrl !== this.itemUrl)
            throw new i.Z(
              'removeresource:portal-item-mismatch',
              'The portal item associated with the provided resource does not match the item',
            );
          return a.removeResource(this, e, r);
        }
        async removeAllResources(e) {
          return (await t.e(7873).then(t.bind(t, 97873))).removeAllResources(
            this,
            e,
          );
        }
        resourceFromPath(e) {
          return new w({ portalItem: this, path: e });
        }
        toJSON() {
          const e = this.extent,
            r = {
              created: this.created && this.created.getTime(),
              description: this.description,
              extent: e && [
                [e.xmin, e.ymin],
                [e.xmax, e.ymax],
              ],
              id: this.id,
              modified: this.modified && this.modified.getTime(),
              name: this.name,
              owner: this.owner,
              ownerFolder: this.ownerFolder,
              snippet: this.snippet,
              tags: this.tags,
              thumbnail: this.thumbnail,
              title: this.title,
              type: this.type,
              typeKeywords: this.typeKeywords,
              url: this.url,
            };
          return (0, o.yd)(r);
        }
        static fromJSON(e) {
          if (!e) return null;
          if (e.declaredClass)
            throw new Error('JSON object is already hydrated');
          return new _({ sourceJSON: e });
        }
        _getPostQuery() {
          const e = this.toJSON();
          for (const r in e)
            'tags' === r && null !== e[r] && (e[r] = e[r].join(', ')),
              'typeKeywords' === r && null !== e[r] && (e[r] = e[r].join(', ')),
              'extent' === r && e[r] && (e[r] = JSON.stringify(e[r]));
          return e;
        }
      });
      (0, a._)(
        [(0, y.Cb)({ type: ['private', 'shared', 'org', 'public'] })],
        I.prototype,
        'access',
        void 0,
      ),
        (0, a._)([(0, y.Cb)()], I.prototype, 'accessInformation', void 0),
        (0, a._)([(0, y.Cb)({ type: String })], I.prototype, 'apiKey', void 0),
        (0, a._)(
          [(0, y.Cb)({ json: { read: { source: 'appProxies' } } })],
          I.prototype,
          'applicationProxies',
          void 0,
        ),
        (0, a._)([(0, y.Cb)()], I.prototype, 'avgRating', void 0),
        (0, a._)([(0, y.Cb)()], I.prototype, 'categories', void 0),
        (0, a._)([(0, y.Cb)({ type: Date })], I.prototype, 'created', void 0),
        (0, a._)([(0, y.Cb)()], I.prototype, 'culture', void 0),
        (0, a._)([(0, y.Cb)()], I.prototype, 'description', void 0),
        (0, a._)(
          [(0, y.Cb)({ readOnly: !0 })],
          I.prototype,
          'displayName',
          null,
        ),
        (0, a._)([(0, y.Cb)({ type: u.Z })], I.prototype, 'extent', void 0),
        (0, a._)([(0, h.r)('extent')], I.prototype, 'readExtent', null),
        (0, a._)([(0, y.Cb)()], I.prototype, 'groupCategories', void 0),
        (0, a._)([(0, y.Cb)({ readOnly: !0 })], I.prototype, 'iconUrl', null),
        (0, a._)([(0, y.Cb)()], I.prototype, 'id', void 0),
        (0, a._)([(0, y.Cb)({ readOnly: !0 })], I.prototype, 'isLayer', null),
        (0, a._)([(0, y.Cb)()], I.prototype, 'itemControl', void 0),
        (0, a._)([(0, y.Cb)({ readOnly: !0 })], I.prototype, 'itemUrl', null),
        (0, a._)([(0, y.Cb)()], I.prototype, 'licenseInfo', void 0),
        (0, a._)([(0, y.Cb)({ type: Date })], I.prototype, 'modified', void 0),
        (0, a._)([(0, y.Cb)()], I.prototype, 'name', void 0),
        (0, a._)([(0, y.Cb)()], I.prototype, 'numComments', void 0),
        (0, a._)([(0, y.Cb)()], I.prototype, 'numRatings', void 0),
        (0, a._)([(0, y.Cb)()], I.prototype, 'numViews', void 0),
        (0, a._)([(0, y.Cb)()], I.prototype, 'owner', void 0),
        (0, a._)([(0, y.Cb)()], I.prototype, 'ownerFolder', void 0),
        (0, a._)([(0, y.Cb)({ type: m.Z })], I.prototype, 'portal', void 0),
        (0, a._)([(0, y.Cb)()], I.prototype, 'screenshots', void 0),
        (0, a._)([(0, y.Cb)()], I.prototype, 'size', void 0),
        (0, a._)([(0, y.Cb)()], I.prototype, 'snippet', void 0),
        (0, a._)([(0, y.Cb)()], I.prototype, 'sourceJSON', void 0),
        (0, a._)([(0, y.Cb)()], I.prototype, 'tags', void 0),
        (0, a._)([(0, y.Cb)()], I.prototype, 'thumbnail', void 0),
        (0, a._)(
          [(0, y.Cb)({ readOnly: !0 })],
          I.prototype,
          'thumbnailUrl',
          null,
        ),
        (0, a._)([(0, y.Cb)()], I.prototype, 'title', void 0),
        (0, a._)([(0, y.Cb)()], I.prototype, 'type', void 0),
        (0, a._)([(0, y.Cb)()], I.prototype, 'typeKeywords', void 0),
        (0, a._)([(0, y.Cb)()], I.prototype, 'url', void 0),
        (0, a._)(
          [(0, y.Cb)({ readOnly: !0 })],
          I.prototype,
          'userItemUrl',
          null,
        ),
        (I = _ = (0, a._)([(0, g.j)('esri.portal.PortalItem')], I));
      const k = I;
    },
    15650: (e, r, t) => {
      t.d(r, { Nw: () => h });
      var a = t(20102),
        s = t(22974),
        i = t(70586),
        l = t(78286),
        o = t(827);
      const n = new Set([
          'bing-maps',
          'imagery',
          'imagery-tile',
          'map-image',
          'open-street-map',
          'tile',
          'unknown',
          'unsupported',
          'vector-tile',
          'web-tile',
          'wms',
          'wmts',
        ]),
        c = new Set([
          'csv',
          'feature',
          'geo-rss',
          'geojson',
          'group',
          'imagery',
          'imagery-tile',
          'kml',
          'map-image',
          'map-notes',
          'ogc-feature',
          'route',
          'tile',
          'unknown',
          'unsupported',
          'vector-tile',
          'web-tile',
          'wfs',
          'wms',
          'wmts',
        ]);
      function p(e) {
        return !(
          'feature' !== e.type ||
          e.url ||
          !e.source ||
          'memory' !== e.source.type
        );
      }
      function y(e, r) {
        if (r.restrictedWebMapWriting) {
          const t = (function (e) {
            return 'basemap' === e.layerContainerType
              ? n
              : 'operational-layers' === e.layerContainerType
              ? c
              : null;
          })(r);
          return !(0, i.pC)(t) || (t.has(e.type) && !p(e));
        }
        return !0;
      }
      function d(e, r) {
        'maxScale' in e && (r.maxScale = (0, o.k)(e.maxScale)),
          'minScale' in e && (r.minScale = (0, o.k)(e.minScale));
      }
      function h(e, r, t) {
        if (!('write' in e) || !e.write)
          return (
            t &&
              t.messages &&
              t.messages.push(
                new a.Z(
                  'layer:unsupported',
                  `Layers (${e.title}, ${e.id}) of type '${e.declaredClass}' cannot be persisted`,
                  { layer: e },
                ),
              ),
            null
          );
        if (y(e, t)) {
          const r = {};
          return e.write(r, t) ? r : null;
        }
        return (
          (0, i.pC)(r) &&
            (function (e, r) {
              if (
                ((function (e, r) {
                  if (p(e)) {
                    const t = (0, l.hS)('featureCollection.layers', r),
                      a = t && t[0] && t[0].layerDefinition;
                    a && d(e, a);
                  } else
                    'stream' === e.type
                      ? d(e, (r.layerDefinition = r.layerDefinition || {}))
                      : 'group' !== e.type && d(e, r);
                })(e, r),
                'blendMode' in e &&
                  ((r.blendMode = e.blendMode),
                  'normal' === r.blendMode && delete r.blendMode),
                (r.opacity = (0, o.k)(e.opacity)),
                (r.title = e.title || 'Layer'),
                (r.visibility = e.visible),
                'legendEnabled' in e && 'wmts' !== e.type)
              )
                if (p(e)) {
                  const t = r.featureCollection;
                  t && (t.showLegend = e.legendEnabled);
                } else r.showLegend = e.legendEnabled;
            })(e, (r = (0, s.d9)(r))),
          r
        );
      }
    },
  },
]);
