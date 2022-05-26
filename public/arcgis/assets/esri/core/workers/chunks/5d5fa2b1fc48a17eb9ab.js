'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [24, 4579, 8062],
  {
    70024: (e, a, r) => {
      r.r(a), r.d(a, { populateOperationalLayers: () => c });
      var t = r(80539),
        n = (r(80442), r(95330)),
        l = r(87344),
        i = r(15235);
      function y(e, a) {
        return (
          !(!e.layerType || 'ArcGISFeatureLayer' !== e.layerType) &&
          e.featureCollectionType === a
        );
      }
      var s = r(44579),
        o = r(40555);
      async function c(e, a, r) {
        if (!a) return;
        const t = [];
        for (const e of a) {
          const a = S(e, r);
          'GroupLayer' === e.layerType ? t.push(h(a, e, r)) : t.push(a);
        }
        const l = await (0, n.as)(t);
        for (const a of l)
          !a.value || (r.filter && !r.filter(a.value)) || e.add(a.value);
      }
      const u = {
          ArcGISFeatureLayer: 'FeatureLayer',
          ArcGISImageServiceLayer: 'ImageryLayer',
          ArcGISMapServiceLayer: 'MapImageLayer',
          PointCloudLayer: 'PointCloudLayer',
          ArcGISSceneServiceLayer: 'SceneLayer',
          IntegratedMeshLayer: 'IntegratedMeshLayer',
          OGCFeatureLayer: 'OGCFeatureLayer',
          BuildingSceneLayer: 'BuildingSceneLayer',
          ArcGISTiledElevationServiceLayer: 'ElevationLayer',
          ArcGISTiledImageServiceLayer: 'ImageryTileLayer',
          ArcGISTiledMapServiceLayer: 'TileLayer',
          GroupLayer: 'GroupLayer',
          GeoJSON: 'GeoJSONLayer',
          WebTiledLayer: 'WebTileLayer',
          CSV: 'CSVLayer',
          VectorTileLayer: 'VectorTileLayer',
          WFS: 'WFSLayer',
          WMS: 'WMSLayer',
          DefaultTileLayer: 'TileLayer',
          KML: 'KMLLayer',
          RasterDataLayer: 'UnsupportedLayer',
          Voxel: 'VoxelLayer',
        },
        d = {
          ArcGISTiledElevationServiceLayer: 'ElevationLayer',
          DefaultTileLayer: 'ElevationLayer',
          RasterDataElevationLayer: 'UnsupportedLayer',
        },
        L = {
          ArcGISTiledMapServiceLayer: 'TileLayer',
          ArcGISTiledImageServiceLayer: 'ImageryTileLayer',
          OpenStreetMap: 'OpenStreetMapLayer',
          WebTiledLayer: 'WebTileLayer',
          VectorTileLayer: 'VectorTileLayer',
          ArcGISImageServiceLayer: 'UnsupportedLayer',
          WMS: 'UnsupportedLayer',
          ArcGISMapServiceLayer: 'UnsupportedLayer',
          DefaultTileLayer: 'TileLayer',
        },
        p = {
          ArcGISFeatureLayer: 'FeatureLayer',
          ArcGISImageServiceLayer: 'ImageryLayer',
          ArcGISImageServiceVectorLayer: 'ImageryLayer',
          ArcGISMapServiceLayer: 'MapImageLayer',
          ArcGISStreamLayer: 'StreamLayer',
          ArcGISTiledImageServiceLayer: 'ImageryTileLayer',
          ArcGISTiledMapServiceLayer: 'TileLayer',
          BingMapsAerial: 'BingMapsLayer',
          BingMapsRoad: 'BingMapsLayer',
          BingMapsHybrid: 'BingMapsLayer',
          CSV: 'CSVLayer',
          DefaultTileLayer: 'TileLayer',
          GeoRSS: 'GeoRSSLayer',
          GeoJSON: 'GeoJSONLayer',
          GroupLayer: 'GroupLayer',
          KML: 'KMLLayer',
          OGCFeatureLayer: 'OGCFeatureLayer',
          SubtypeGroupLayer: 'UnsupportedLayer',
          VectorTileLayer: 'VectorTileLayer',
          WFS: 'WFSLayer',
          WMS: 'WMSLayer',
          WebTiledLayer: 'WebTileLayer',
        },
        m = { ArcGISFeatureLayer: 'FeatureLayer' },
        f = {
          ArcGISImageServiceLayer: 'ImageryLayer',
          ArcGISImageServiceVectorLayer: 'ImageryLayer',
          ArcGISMapServiceLayer: 'MapImageLayer',
          ArcGISTiledImageServiceLayer: 'ImageryTileLayer',
          ArcGISTiledMapServiceLayer: 'TileLayer',
          OpenStreetMap: 'OpenStreetMapLayer',
          VectorTileLayer: 'VectorTileLayer',
          WebTiledLayer: 'WebTileLayer',
          BingMapsAerial: 'BingMapsLayer',
          BingMapsRoad: 'BingMapsLayer',
          BingMapsHybrid: 'BingMapsLayer',
          WMS: 'WMSLayer',
          DefaultTileLayer: 'TileLayer',
        };
      async function S(e, a) {
        return (async function (e, a, r) {
          const t = new e();
          return (
            t.read(a, r.context),
            'group' === t.type &&
              I(a) &&
              (await (async function (e, a, r) {
                const t = l.T.FeatureLayer,
                  n = await t(),
                  i = a.featureCollection,
                  y = i.showLegend,
                  s = i.layers.map((t, l) => {
                    var i, s;
                    const o = new n();
                    o.read(t, r);
                    const c = { ...r, ignoreDefaults: !0 };
                    return (
                      o.read(
                        {
                          id: `${e.id}-sublayer-${l}`,
                          visibility:
                            null ==
                              (i =
                                null == (s = a.visibleLayers)
                                  ? void 0
                                  : s.includes(l)) || i,
                        },
                        c,
                      ),
                      null != y && o.read({ showLegend: y }, c),
                      o
                    );
                  });
                e.layers.addMany(s);
              })(t, a, r.context)),
            await (0, o.y)(t, r.context),
            t
          );
        })(
          await (async function (e, a) {
            const r = a.context,
              t = g(r);
            let n = e.layerType || e.type;
            !n && a && a.defaultLayerType && (n = a.defaultLayerType);
            const o = t[n];
            let c = o ? l.T[o] : l.T.UnknownLayer;
            if (T(e)) {
              const a = null == r ? void 0 : r.portal;
              if (e.itemId) {
                const r = new i.default({ id: e.itemId, portal: a });
                await r.load();
                const t =
                  (await (0, s.selectLayerClassPath)(r)).className ||
                  'UnknownLayer';
                c = l.T[t];
              }
            } else
              'ArcGISFeatureLayer' === n
                ? (function (e) {
                    return y(e, 'notes');
                  })(e)
                  ? (c = l.T.MapNotesLayer)
                  : (function (e) {
                      return y(e, 'route');
                    })(e)
                  ? (c = l.T.RouteLayer)
                  : I(e) && (c = l.T.GroupLayer)
                : e.wmtsInfo && e.wmtsInfo.url && e.wmtsInfo.layerIdentifier
                ? (c = l.T.WMTSLayer)
                : 'WFS' === n &&
                  '2.0.0' !== e.wfsInfo.version &&
                  (c = l.T.UnsupportedLayer);
            return c();
          })(e, a),
          e,
          a,
        );
      }
      function I(e) {
        var a, r, t;
        return (
          'ArcGISFeatureLayer' === e.layerType &&
          !T(e) &&
          (null !=
          (a =
            null == (r = e.featureCollection) || null == (t = r.layers)
              ? void 0
              : t.length)
            ? a
            : 0) > 1
        );
      }
      function T(e) {
        return 'Feature Collection' === e.type;
      }
      function g(e) {
        let a;
        if ('web-scene' === e.origin)
          switch (e.layerContainerType) {
            case 'basemap':
              a = L;
              break;
            case 'ground':
              a = d;
              break;
            default:
              a = u;
          }
        else
          switch (e.layerContainerType) {
            case 'basemap':
              a = f;
              break;
            case 'tables':
              a = m;
              break;
            default:
              a = p;
          }
        return a;
      }
      async function h(e, a, r) {
        const n = new t.Z(),
          l = c(n, Array.isArray(a.layers) ? a.layers : [], r),
          i = await e;
        if ((await l, 'group' === i.type)) return i.layers.addMany(n), i;
      }
    },
    87344: (e, a, r) => {
      r.d(a, { T: () => t });
      const t = {
        BingMapsLayer: async () =>
          (await Promise.all([r.e(6968), r.e(2397)]).then(r.bind(r, 2723)))
            .default,
        BuildingSceneLayer: async () =>
          (
            await Promise.all([
              r.e(6968),
              r.e(7319),
              r.e(1773),
              r.e(9989),
              r.e(7604),
              r.e(635),
              r.e(8326),
              r.e(7284),
              r.e(86),
              r.e(5808),
              r.e(223),
            ]).then(r.bind(r, 30223))
          ).default,
        CSVLayer: async () =>
          (
            await Promise.all([
              r.e(6968),
              r.e(7319),
              r.e(1773),
              r.e(9989),
              r.e(7604),
              r.e(635),
              r.e(8326),
              r.e(7284),
              r.e(712),
            ]).then(r.bind(r, 45425))
          ).default,
        ElevationLayer: async () =>
          (await Promise.all([r.e(9151), r.e(9932)]).then(r.bind(r, 49932)))
            .default,
        FeatureLayer: async () =>
          (
            await Promise.all([
              r.e(6968),
              r.e(7319),
              r.e(1773),
              r.e(9989),
              r.e(7604),
              r.e(635),
              r.e(8326),
              r.e(7284),
              r.e(4475),
            ]).then(r.bind(r, 67284))
          ).default,
        GroupLayer: async () =>
          (await Promise.all([r.e(6968), r.e(214)]).then(r.bind(r, 63144)))
            .default,
        GeoRSSLayer: async () =>
          (
            await Promise.all([r.e(6968), r.e(7319), r.e(4959)]).then(
              r.bind(r, 3723),
            )
          ).default,
        GeoJSONLayer: async () =>
          (
            await Promise.all([
              r.e(6968),
              r.e(7319),
              r.e(1773),
              r.e(9989),
              r.e(7604),
              r.e(635),
              r.e(9754),
            ]).then(r.bind(r, 23477))
          ).default,
        ImageryLayer: async () =>
          (
            await Promise.all([
              r.e(6968),
              r.e(7319),
              r.e(1773),
              r.e(9989),
              r.e(8326),
              r.e(176),
              r.e(609),
              r.e(7682),
            ]).then(r.bind(r, 510))
          ).default,
        ImageryTileLayer: async () =>
          (
            await Promise.all([
              r.e(6968),
              r.e(7319),
              r.e(1773),
              r.e(9989),
              r.e(4547),
              r.e(9151),
              r.e(176),
              r.e(609),
              r.e(2398),
              r.e(9032),
            ]).then(r.bind(r, 52294))
          ).default,
        IntegratedMeshLayer: async () =>
          (
            await Promise.all([r.e(4547), r.e(86), r.e(8297)]).then(
              r.bind(r, 4717),
            )
          ).default,
        KMLLayer: async () =>
          (
            await Promise.all([
              r.e(6968),
              r.e(7319),
              r.e(1773),
              r.e(9989),
              r.e(8014),
            ]).then(r.bind(r, 42756))
          ).default,
        MapImageLayer: async () =>
          (
            await Promise.all([
              r.e(6968),
              r.e(7319),
              r.e(1773),
              r.e(9989),
              r.e(7604),
              r.e(4369),
              r.e(5823),
              r.e(8739),
            ]).then(r.bind(r, 75823))
          ).default,
        MapNotesLayer: async () =>
          (
            await Promise.all([
              r.e(6968),
              r.e(7319),
              r.e(1773),
              r.e(9989),
              r.e(4547),
              r.e(7604),
              r.e(635),
              r.e(8326),
              r.e(7284),
              r.e(5163),
            ]).then(r.bind(r, 62128))
          ).default,
        OGCFeatureLayer: async () =>
          (
            await Promise.all([
              r.e(6968),
              r.e(7319),
              r.e(1773),
              r.e(9989),
              r.e(7604),
              r.e(635),
              r.e(6785),
            ]).then(r.bind(r, 88068))
          ).default,
        OpenStreetMapLayer: async () =>
          (
            await Promise.all([r.e(6968), r.e(678), r.e(6237)]).then(
              r.bind(r, 66237),
            )
          ).default,
        PointCloudLayer: async () =>
          (
            await Promise.all([r.e(1773), r.e(86), r.e(1197)]).then(
              r.bind(r, 10608),
            )
          ).default,
        RouteLayer: async () =>
          (
            await Promise.all([
              r.e(6968),
              r.e(7319),
              r.e(1773),
              r.e(9989),
              r.e(4547),
              r.e(5318),
              r.e(1188),
            ]).then(r.bind(r, 66277))
          ).default,
        SceneLayer: async () =>
          (
            await Promise.all([
              r.e(6968),
              r.e(7319),
              r.e(1773),
              r.e(9989),
              r.e(7604),
              r.e(635),
              r.e(8326),
              r.e(7284),
              r.e(86),
              r.e(5808),
              r.e(9254),
            ]).then(r.bind(r, 49254))
          ).default,
        StreamLayer: async () =>
          (
            await Promise.all([
              r.e(6968),
              r.e(7319),
              r.e(1773),
              r.e(9989),
              r.e(7604),
              r.e(635),
              r.e(5307),
            ]).then(r.bind(r, 88387))
          ).default,
        TileLayer: async () =>
          (
            await Promise.all([
              r.e(6968),
              r.e(7319),
              r.e(1773),
              r.e(9989),
              r.e(7604),
              r.e(9151),
              r.e(4369),
              r.e(5358),
            ]).then(r.bind(r, 98636))
          ).default,
        UnknownLayer: async () =>
          (await r.e(4166).then(r.bind(r, 44166))).default,
        UnsupportedLayer: async () =>
          (await r.e(9296).then(r.bind(r, 39296))).default,
        VectorTileLayer: async () =>
          (
            await Promise.all([
              r.e(6968),
              r.e(9151),
              r.e(4325),
              r.e(1785),
              r.e(9127),
            ]).then(r.bind(r, 94756))
          ).default,
        VoxelLayer: async () =>
          (await Promise.all([r.e(86), r.e(5410)]).then(r.bind(r, 58092)))
            .default,
        WebTileLayer: async () =>
          (await Promise.all([r.e(6968), r.e(678)]).then(r.bind(r, 16199)))
            .default,
        WFSLayer: async () =>
          (
            await Promise.all([
              r.e(6968),
              r.e(7319),
              r.e(1773),
              r.e(9989),
              r.e(4547),
              r.e(7604),
              r.e(635),
              r.e(3003),
            ]).then(r.bind(r, 12653))
          ).default,
        WMSLayer: async () =>
          (
            await Promise.all([
              r.e(6968),
              r.e(7319),
              r.e(1773),
              r.e(2279),
            ]).then(r.bind(r, 25906))
          ).default,
        WMTSLayer: async () =>
          (
            await Promise.all([r.e(6968), r.e(678), r.e(5853)]).then(
              r.bind(r, 55853),
            )
          ).default,
      };
    },
    33516: (e, a, r) => {
      r.d(a, { m: () => l });
      var t = r(17452),
        n = r(65587);
      function l(e) {
        return {
          origin: 'portal-item',
          url: (0, t.mN)(e.itemUrl),
          portal: e.portal || n.Z.getDefault(),
          portalItem: e,
          readResourcePaths: [],
        };
      }
    },
    18062: (e, a, r) => {
      r.r(a),
        r.d(a, {
          getFirstLayerOrTableId: () => p,
          getNumLayersAndTables: () => m,
          load: () => o,
          preprocessFSItemData: () => L,
        });
      var t = r(20102),
        n = r(87344),
        l = r(65587),
        i = r(33516),
        y = r(40555),
        s = r(96187);
      async function o(e, a) {
        const r = e.instance.portalItem;
        return r && r.id
          ? (await r.load(a),
            (function (e) {
              const a = e.instance.portalItem;
              if (-1 === e.supportedTypes.indexOf(a.type))
                throw new t.Z(
                  'portal:invalid-layer-item-type',
                  "Invalid layer item type '${type}', expected '${expectedType}'",
                  { type: a.type, expectedType: e.supportedTypes.join(', ') },
                );
            })(e),
            (async function (e, a) {
              const r = e.instance,
                l = r.portalItem,
                { url: o, title: u } = l,
                p = (0, i.m)(l);
              if ('group' === r.type)
                return (
                  r.read({ title: u }, p),
                  (function (e, a) {
                    let r;
                    const l = e.portalItem.type;
                    switch (l) {
                      case 'Feature Service':
                      case 'Feature Collection':
                        r = n.T.FeatureLayer;
                        break;
                      case 'Stream Service':
                        r = n.T.StreamLayer;
                        break;
                      case 'Scene Service':
                        r = n.T.SceneLayer;
                        break;
                      default:
                        throw new t.Z(
                          'portal:unsupported-item-type-as-group',
                          `The item type '${l}' is not supported as a 'IGroupLayer'`,
                        );
                    }
                    let i;
                    return r()
                      .then((e) => ((i = e), d(a)))
                      .then(async (a) =>
                        'Feature Service' === l
                          ? ((a = await L(a, e.portalItem.url)), c(e, i, a))
                          : m(a) > 0
                          ? c(e, i, a)
                          : (function (e, a) {
                              return e.portalItem.url
                                ? (0, s.b)(e.portalItem.url).then((r) => {
                                    var t, n;
                                    function l(e) {
                                      return { id: e.id, name: e.name };
                                    }
                                    r &&
                                      c(e, a, {
                                        layers:
                                          null == (t = r.layers)
                                            ? void 0
                                            : t.map(l),
                                        tables:
                                          null == (n = r.tables)
                                            ? void 0
                                            : n.map(l),
                                      });
                                  })
                                : Promise.resolve();
                            })(e, i),
                      );
                  })(r, e)
                );
              o && r.read({ url: o }, p);
              const f = await d(e, a);
              return (
                f && r.read(f, p),
                (r.resourceReferences = {
                  portalItem: l,
                  paths: p.readResourcePaths,
                }),
                r.read({ title: u }, p),
                (0, y.y)(r, p)
              );
            })(e, a))
          : Promise.resolve();
      }
      function c(e, a, r) {
        let t = r.layers || [];
        const n = r.tables || [];
        'Feature Collection' === e.portalItem.type &&
          (t.forEach((e) => {
            var a;
            'Table' ===
              (null == e || null == (a = e.layerDefinition)
                ? void 0
                : a.type) && n.push(e);
          }),
          (t = t.filter((e) => {
            var a;
            return (
              'Table' !==
              (null == e || null == (a = e.layerDefinition) ? void 0 : a.type)
            );
          }))),
          t.reverse().forEach((t) => {
            const n = u(e, a, r, t);
            e.add(n);
          }),
          n.reverse().forEach((t) => {
            const n = u(e, a, r, t);
            e.tables.add(n);
          });
      }
      function u(e, a, r, t) {
        const n = new a({
          portalItem: e.portalItem.clone(),
          layerId: t.id,
          sublayerTitleMode: 'service-name',
        });
        if ('Feature Collection' === e.portalItem.type) {
          const a = {
            origin: 'portal-item',
            portal: e.portalItem.portal || l.Z.getDefault(),
          };
          n.read(t, a);
          const i = r.showLegend;
          null != i && n.read({ showLegend: i }, a);
        }
        return n;
      }
      function d(e, a) {
        if (!1 === e.supportsData) return Promise.resolve(void 0);
        const r = e.instance;
        return r.portalItem
          .fetchData('json', a)
          .catch(() => null)
          .then(async (e) => {
            if (
              (function (e) {
                return 'stream' !== e.type && 'layerId' in e;
              })(r)
            ) {
              let a,
                t = !0;
              return (
                e &&
                  m(e) > 0 &&
                  (null == r.layerId && (r.layerId = p(e)),
                  (a = (function (e, a) {
                    const r = e.layers;
                    if (r)
                      for (let e = 0; e < r.length; e++)
                        if (r[e].id === a) return r[e];
                    const t = e.tables;
                    if (t)
                      for (let e = 0; e < t.length; e++)
                        if (t[e].id === a) return t[e];
                    return null;
                  })(e, r.layerId)),
                  a &&
                    (1 === m(e) && (t = !1),
                    null != e.showLegend && (a.showLegend = e.showLegend))),
                t &&
                  'service-name' !== r.sublayerTitleMode &&
                  (r.sublayerTitleMode = 'item-title-and-service-name'),
                a
              );
            }
            return e;
          });
      }
      async function L(e, a) {
        var r, t;
        if (
          null == (null == (r = e) ? void 0 : r.layers) ||
          null == (null == (t = e) ? void 0 : t.tables)
        ) {
          const r = await (0, s.b)(a);
          ((e = e || {}).layers = e.layers || (null == r ? void 0 : r.layers)),
            (e.tables = e.tables || (null == r ? void 0 : r.tables));
        }
        return e;
      }
      function p(e) {
        const a = e.layers;
        if (a && a.length) return a[0].id;
        const r = e.tables;
        return r && r.length ? r[0].id : null;
      }
      function m(e) {
        var a, r, t, n;
        return (
          (null != (a = null == e || null == (r = e.layers) ? void 0 : r.length)
            ? a
            : 0) +
          (null != (t = null == e || null == (n = e.tables) ? void 0 : n.length)
            ? t
            : 0)
        );
      }
    },
    44579: (e, a, r) => {
      r.r(a), r.d(a, { fromItem: () => o, selectLayerClassPath: () => c });
      var t = r(20102),
        n = r(87344),
        l = r(15235),
        i = r(18062);
      function y(e, a) {
        return !!e.typeKeywords && e.typeKeywords.indexOf(a) > -1;
      }
      var s = r(96187);
      function o(e) {
        return (
          !e.portalItem ||
            e.portalItem instanceof l.default ||
            (e = { ...e, portalItem: new l.default(e.portalItem) }),
          (function (e) {
            return e.load().then(c).then(u);
          })(e.portalItem).then((a) => {
            const r = { portalItem: e.portalItem, ...a.properties },
              t = a.constructor;
            return Promise.resolve(new t(r));
          })
        );
      }
      function c(e) {
        switch (e.type) {
          case 'Map Service':
            return (function (e) {
              return (0, s.b)(e.url).then((e) => e.tileInfo);
            })(e).then((e) =>
              e ? { className: 'TileLayer' } : { className: 'MapImageLayer' },
            );
          case 'Feature Service':
            return (function (e) {
              return d(e).then((e) => {
                if ('object' == typeof e) {
                  const a = {};
                  return (
                    null != e.id && (a.layerId = e.id),
                    { className: 'FeatureLayer', properties: a }
                  );
                }
                return { className: 'GroupLayer' };
              });
            })(e);
          case 'Feature Collection':
            return (async function (e) {
              if ((await e.load(), y(e, 'Map Notes')))
                return { className: 'MapNotesLayer' };
              if (y(e, 'Route Layer')) return { className: 'RouteLayer' };
              const a = await e.fetchData();
              return 1 === (0, i.getNumLayersAndTables)(a)
                ? { className: 'FeatureLayer' }
                : { className: 'GroupLayer' };
            })(e);
          case 'Scene Service':
            return (function (e) {
              return d(e).then((a) => {
                if ('object' == typeof a) {
                  const r = {};
                  let t;
                  if (
                    (null != a.id
                      ? ((r.layerId = a.id), (t = `${e.url}/layers/${a.id}`))
                      : (t = e.url),
                    Array.isArray(e.typeKeywords) && e.typeKeywords.length > 0)
                  ) {
                    const a = {
                      IntegratedMesh: 'IntegratedMeshLayer',
                      '3DObject': 'SceneLayer',
                      Point: 'SceneLayer',
                      PointCloud: 'PointCloudLayer',
                      Building: 'BuildingSceneLayer',
                    };
                    for (const r of Object.keys(a))
                      if (-1 !== e.typeKeywords.indexOf(r))
                        return { className: a[r] };
                  }
                  return (0, s.b)(t).then((e) => {
                    let a = 'SceneLayer';
                    const t = {
                      Point: 'SceneLayer',
                      '3DObject': 'SceneLayer',
                      IntegratedMesh: 'IntegratedMeshLayer',
                      PointCloud: 'PointCloudLayer',
                      Building: 'BuildingSceneLayer',
                    };
                    return (
                      e &&
                        e.layerType &&
                        t[e.layerType] &&
                        (a = t[e.layerType]),
                      { className: a, properties: r }
                    );
                  });
                }
                return !1 === a
                  ? (0, s.b)(e.url).then((e) =>
                      'Voxel' === (null == e ? void 0 : e.layerType)
                        ? { className: 'VoxelLayer' }
                        : { className: 'GroupLayer' },
                    )
                  : { className: 'GroupLayer' };
              });
            })(e);
          case 'Image Service':
            return (async function (e) {
              var a, r, t;
              await e.load();
              const n =
                null !=
                (a =
                  null == (r = e.typeKeywords)
                    ? void 0
                    : r.map((e) => e.toLowerCase()))
                  ? a
                  : [];
              if (n.indexOf('elevation 3d layer') > -1)
                return { className: 'ElevationLayer' };
              if (n.indexOf('tiled imagery') > -1)
                return { className: 'ImageryTileLayer' };
              const l = await e.fetchData(),
                i = null == l ? void 0 : l.layerType;
              return 'ArcGISTiledImageServiceLayer' === i
                ? { className: 'ImageryTileLayer' }
                : 'ArcGISImageServiceLayer' === i
                ? { className: 'ImageryLayer' }
                : 'map' ===
                  (null == (t = (await (0, s.b)(e.url)).cacheType)
                    ? void 0
                    : t.toLowerCase())
                ? { className: 'ImageryTileLayer' }
                : { className: 'ImageryLayer' };
            })(e);
          case 'Stream Service':
          case 'Feed':
            return { className: 'StreamLayer' };
          case 'Vector Tile Service':
            return { className: 'VectorTileLayer' };
          case 'KML':
            return { className: 'KMLLayer' };
          case 'WFS':
            return { className: 'WFSLayer' };
          case 'WMTS':
            return { className: 'WMTSLayer' };
          case 'WMS':
            return { className: 'WMSLayer' };
          default:
            return Promise.reject(
              new t.Z(
                'portal:unknown-item-type',
                "Unknown item type '${type}'",
                { type: e.type },
              ),
            );
        }
      }
      function u(e) {
        return (0, n.T[e.className])().then((a) => ({
          constructor: a,
          properties: e.properties,
        }));
      }
      function d(e) {
        return !e.url || e.url.match(/\/\d+$/)
          ? Promise.resolve({})
          : e
              .load()
              .then(() => e.fetchData())
              .then(async (a) =>
                'Feature Service' === e.type
                  ? L((a = await (0, i.preprocessFSItemData)(a, e.url)))
                  : (0, i.getNumLayersAndTables)(a) > 0
                  ? L(a)
                  : (0, s.b)(e.url).then(L),
              );
      }
      function L(e) {
        return (
          1 === (0, i.getNumLayersAndTables)(e) && {
            id: (0, i.getFirstLayerOrTableId)(e),
          }
        );
      }
    },
    40555: (e, a, r) => {
      r.d(a, { y: () => i });
      var t = r(66643),
        n = r(95330),
        l = r(20941);
      async function i(e, a, r) {
        const i = e && e.getAtOrigin && e.getAtOrigin('renderer', a.origin);
        if (i && 'unique-value' === i.type && i.styleOrigin) {
          const y = await (0, t.q6)(i.populateFromStyle());
          if (((0, n.k_)(r), !1 === y.ok)) {
            const r = y.error;
            a &&
              a.messages &&
              a.messages.push(
                new l.Z(
                  'renderer:style-reference',
                  `Failed to create unique value renderer from style reference: ${r.message}`,
                  { error: r, context: a },
                ),
              ),
              e.clear('renderer', a.origin);
          }
        }
      }
    },
    96187: (e, a, r) => {
      r.d(a, { b: () => n });
      var t = r(3172);
      async function n(e) {
        const { data: a } = await (0, t.default)(e, {
          responseType: 'json',
          query: { f: 'json' },
        });
        return a;
      }
    },
  },
]);
