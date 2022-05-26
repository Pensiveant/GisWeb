'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [3529],
  {
    63529: (e, a, r) => {
      r.r(a), r.d(a, { fromUrl: () => y });
      var t = r(3172),
        n = r(20102),
        l = r(70586),
        s = r(17452),
        i = r(66677),
        o = r(87344);
      async function y(e) {
        var a;
        const t = null == (a = e.properties) ? void 0 : a.customParameters,
          s = await (async function (e, a) {
            let r = (0, i.Qc)(e);
            if (((0, l.Wi)(r) && (r = await d(e, a)), (0, l.Wi)(r)))
              throw new n.Z(
                'arcgis-layers:url-mismatch',
                "The url '${url}' is not a valid arcgis resource",
                { url: e },
              );
            const { serverType: t, sublayer: s } = r;
            let y;
            const u = {
              FeatureServer: 'FeatureLayer',
              StreamServer: 'StreamLayer',
              VectorTileServer: 'VectorTileLayer',
            };
            switch (t) {
              case 'MapServer':
                y =
                  null != s
                    ? 'FeatureLayer'
                    : (async function (e, a) {
                        return (await h(e, a)).tileInfo;
                      })(e, a).then((e) => (e ? 'TileLayer' : 'MapImageLayer'));
                break;
              case 'ImageServer':
                y = h(e, a).then((e) => {
                  const a = e.tileInfo && e.tileInfo.format;
                  return e.tileInfo
                    ? !a ||
                      'LERC' !== a.toUpperCase() ||
                      (e.cacheType && 'elevation' !== e.cacheType.toLowerCase())
                      ? 'ImageryTileLayer'
                      : 'ElevationLayer'
                    : 'ImageryLayer';
                });
                break;
              case 'SceneServer':
                y = h(r.url.path, a).then((e) => {
                  if (e) {
                    if ('Voxel' === (null == e ? void 0 : e.layerType))
                      return 'VoxelLayer';
                    if (
                      null != e &&
                      e.layers &&
                      Array.isArray(e.layers) &&
                      e.layers.length > 0
                    ) {
                      var a;
                      const r = {
                          Point: 'SceneLayer',
                          '3DObject': 'SceneLayer',
                          IntegratedMesh: 'IntegratedMeshLayer',
                          PointCloud: 'PointCloudLayer',
                          Building: 'BuildingSceneLayer',
                        },
                        t = null == (a = e.layers[0]) ? void 0 : a.layerType;
                      if (null != r[t]) return r[t];
                    }
                  }
                  return 'SceneLayer';
                });
                break;
              default:
                y = u[t];
            }
            const c = 'FeatureServer' === t,
              b = {
                parsedUrl: r,
                Constructor: null,
                layerOrTableId: c ? s : null,
                sublayerIds: null,
                tableIds: null,
              },
              w = await y;
            if ({ FeatureLayer: !0, SceneLayer: !0 }[w] && null == s) {
              const r = await f(e, t, a);
              if (
                (c &&
                  ((b.sublayerInfos = r.layerInfos),
                  (b.tableInfos = r.tableInfos)),
                1 !== r.layerIds.length + r.tableIds.length)
              )
                (b.sublayerIds = r.layerIds), (b.tableIds = r.tableIds);
              else if (c) {
                var m, p;
                (b.layerOrTableId =
                  null != (m = r.layerIds[0]) ? m : r.tableIds[0]),
                  (b.sourceJSON =
                    null != (p = r.layerInfos[0]) ? p : r.tableInfos[0]);
              }
            }
            return (
              (b.Constructor = await (async function (e) {
                return (0, o.T[e])();
              })(w)),
              b
            );
          })(e.url, t),
          y = { ...e.properties, url: e.url };
        if (!s.sublayerIds)
          return (
            null != s.layerOrTableId &&
              ((y.layerId = s.layerOrTableId), (y.sourceJSON = s.sourceJSON)),
            new s.Constructor(y)
          );
        const c = new (0,
        (await Promise.all([r.e(6968), r.e(6088)]).then(r.bind(r, 63144)))
          .default)({ title: s.parsedUrl.title });
        return (
          (function (e, a, r) {
            function t(e, t) {
              const n = { ...r, layerId: e, sublayerTitleMode: 'service-name' };
              return (0, l.pC)(t) && (n.sourceJSON = t), new a.Constructor(n);
            }
            a.sublayerIds.forEach((r) => {
              const n = t(r, u(a.sublayerInfos, r));
              e.add(n);
            }),
              a.tableIds.forEach((r) => {
                const n = t(r, u(a.tableInfos, r));
                e.tables.add(n);
              });
          })(c, s, y),
          c
        );
      }
      function u(e, a) {
        return e ? e.find((e) => e.id === a) : null;
      }
      async function d(e, a) {
        var r;
        const t = await h(e, a);
        let n = null,
          o = null;
        const y = t.type;
        if (
          ('Feature Layer' === y || 'Table' === y
            ? ((n = 'FeatureServer'), (o = t.id))
            : 'indexedVector' === y
            ? (n = 'VectorTileServer')
            : t.hasOwnProperty('mapName')
            ? (n = 'MapServer')
            : t.hasOwnProperty('bandCount') && t.hasOwnProperty('pixelSizeX')
            ? (n = 'ImageServer')
            : t.hasOwnProperty('maxRecordCount') &&
              t.hasOwnProperty('allowGeometryUpdates')
            ? (n = 'FeatureServer')
            : t.hasOwnProperty('streamUrls')
            ? (n = 'StreamServer')
            : c(t)
            ? ((n = 'SceneServer'), (o = t.id))
            : t.hasOwnProperty('layers') &&
              c(null == (r = t.layers) ? void 0 : r[0]) &&
              (n = 'SceneServer'),
          !n)
        )
          return null;
        const u = null != o ? (0, i.DR)(e) : null;
        return {
          title: ((0, l.pC)(u) && t.name) || (0, s.vt)(e),
          serverType: n,
          sublayer: o,
          url: { path: (0, l.pC)(u) ? u.serviceUrl : (0, s.mN)(e).path },
        };
      }
      function c(e) {
        return (
          (null == e ? void 0 : e.hasOwnProperty('store')) &&
          e.hasOwnProperty('id') &&
          'number' == typeof e.id
        );
      }
      async function f(e, a, r) {
        var t, n;
        let l,
          s = !1;
        if ('FeatureServer' === a) {
          const a = await (async function (e, a) {
            var r, t;
            let n = await h(e, a);
            (n = n || {}),
              (n.layers =
                (null == (r = n.layers) ? void 0 : r.filter(b)) || []);
            const l = { serviceJSON: n };
            if (n.currentVersion < 10.5) return l;
            const s = await h(e + '/layers', a);
            return (
              (l.layersJSON = {
                layers:
                  (null == s || null == (t = s.layers)
                    ? void 0
                    : t.filter(b)) || [],
                tables: (null == s ? void 0 : s.tables) || [],
              }),
              l
            );
          })(e, r);
          (s = !!a.layersJSON), (l = a.layersJSON || a.serviceJSON);
        } else l = await h(e, r);
        const i = null == (t = l) ? void 0 : t.layers,
          o = null == (n = l) ? void 0 : n.tables;
        return {
          layerIds: (null == i ? void 0 : i.map((e) => e.id).reverse()) || [],
          tableIds: (null == o ? void 0 : o.map((e) => e.id).reverse()) || [],
          layerInfos: s ? i : [],
          tableInfos: s ? o : [],
        };
      }
      function b(e) {
        return !e.type || 'Feature Layer' === e.type;
      }
      async function h(e, a) {
        return (
          await (0, t.default)(e, {
            responseType: 'json',
            query: { f: 'json', ...a },
          })
        ).data;
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
  },
]);
