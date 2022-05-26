'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [2397],
  {
    10699: (e, t, r) => {
      r.d(t, { I: () => l });
      var s = r(43697),
        i = r(52011);
      let o = 0;
      const l = (e) => {
        let t = class extends e {
          constructor(...e) {
            super(...e),
              Object.defineProperty(this, 'uid', {
                writable: !1,
                configurable: !1,
                value: Date.now().toString(16) + '-object-' + o++,
              });
          }
        };
        return (t = (0, s._)([(0, i.j)('esri.core.Identifiable')], t)), t;
      };
      let n = class extends l(class {}) {};
      n = (0, s._)([(0, i.j)('esri.core.Identifiable')], n);
    },
    16453: (e, t, r) => {
      r.d(t, { R: () => m, w: () => _ });
      var s = r(43697),
        i = r(15923),
        o = r(70586),
        l = r(41103),
        n = r(22974),
        a = r(31263);
      class p {
        constructor() {
          (this._propertyOriginMap = new Map()),
            (this._originStores = new Array(a.kk)),
            (this._values = new Map()),
            (this.multipleOriginsSupported = !0);
        }
        clone(e) {
          const t = new p(),
            r = this._originStores[a.s3.DEFAULTS];
          r &&
            r.forEach((e, r) => {
              t.set(r, (0, n.d9)(e), a.s3.DEFAULTS);
            });
          for (let r = a.s3.SERVICE; r < a.kk; r++) {
            const s = this._originStores[r];
            s &&
              s.forEach((s, i) => {
                (e && e.has(i)) || t.set(i, (0, n.d9)(s), r);
              });
          }
          return t;
        }
        get(e, t) {
          const r = void 0 === t ? this._values : this._originStores[t];
          return r ? r.get(e) : void 0;
        }
        keys(e) {
          const t = null == e ? this._values : this._originStores[e];
          return t ? [...t.keys()] : [];
        }
        set(e, t, r = a.s3.USER) {
          let s = this._originStores[r];
          if (
            (s || ((s = new Map()), (this._originStores[r] = s)),
            s.set(e, t),
            !this._values.has(e) ||
              (0, o.j0)(this._propertyOriginMap.get(e)) <= r)
          ) {
            const s = this._values.get(e);
            return (
              this._values.set(e, t), this._propertyOriginMap.set(e, r), s !== t
            );
          }
          return !1;
        }
        delete(e, t = a.s3.USER) {
          const r = this._originStores[t];
          if (!r) return;
          const s = r.get(e);
          if (
            (r.delete(e),
            this._values.has(e) && this._propertyOriginMap.get(e) === t)
          ) {
            this._values.delete(e);
            for (let r = t - 1; r >= 0; r--) {
              const t = this._originStores[r];
              if (t && t.has(e)) {
                this._values.set(e, t.get(e)),
                  this._propertyOriginMap.set(e, r);
                break;
              }
            }
          }
          return s;
        }
        has(e, t) {
          const r = void 0 === t ? this._values : this._originStores[t];
          return !!r && r.has(e);
        }
        revert(e, t) {
          for (; t > 0 && !this.has(e, t); ) --t;
          const r = this._originStores[t],
            s = r && r.get(e),
            i = this._values.get(e);
          return (
            this._values.set(e, s), this._propertyOriginMap.set(e, t), i !== s
          );
        }
        originOf(e) {
          return this._propertyOriginMap.get(e) || a.s3.DEFAULTS;
        }
        forEach(e) {
          this._values.forEach(e);
        }
      }
      var u = r(50549),
        c = r(1153),
        h = r(52011);
      const d = (e) => {
        let t = class extends e {
          constructor(...e) {
            super(...e);
            const t = (0, o.j0)((0, c.vw)(this)),
              r = t.store,
              s = new p();
            (t.store = s), (0, l.M)(t, r, s);
          }
          read(e, t) {
            (0, u.i)(this, e, t);
          }
          getAtOrigin(e, t) {
            const r = y(this),
              s = (0, a.M9)(t);
            if ('string' == typeof e) return r.get(e, s);
            const i = {};
            return (
              e.forEach((e) => {
                i[e] = r.get(e, s);
              }),
              i
            );
          }
          originOf(e) {
            return (0, a.x3)(this.originIdOf(e));
          }
          originIdOf(e) {
            return y(this).originOf(e);
          }
          revert(e, t) {
            const r = y(this),
              s = (0, a.M9)(t),
              i = (0, c.vw)(this);
            let o;
            (o = 'string' == typeof e ? ('*' === e ? r.keys(s) : [e]) : e),
              o.forEach((e) => {
                i.invalidate(e), r.revert(e, s), i.commit(e);
              });
          }
        };
        return (
          (t = (0, s._)(
            [(0, h.j)('esri.core.ReadOnlyMultiOriginJSONSupport')],
            t,
          )),
          t
        );
      };
      function y(e) {
        return (0, c.vw)(e).store;
      }
      let g = class extends d(i.Z) {};
      g = (0, s._)([(0, h.j)('esri.core.ReadOnlyMultiOriginJSONSupport')], g);
      var b = r(76169);
      const v = (e) => {
        let t = class extends e {
          constructor(...e) {
            super(...e);
          }
          clear(e, t = 'user') {
            return f(this).delete(e, (0, a.M9)(t));
          }
          write(e = {}, t) {
            return (0, b.c)(this, (e = e || {}), t), e;
          }
          setAtOrigin(e, t, r) {
            (0, c.vw)(this).setAtOrigin(e, t, (0, a.M9)(r));
          }
          removeOrigin(e) {
            const t = f(this),
              r = (0, a.M9)(e),
              s = t.keys(r);
            for (const e of s)
              t.originOf(e) === r && t.set(e, t.get(e, r), a.s3.USER);
          }
          updateOrigin(e, t) {
            const r = f(this),
              s = (0, a.M9)(t),
              i = this.get(e);
            for (let t = s + 1; t < a.kk; ++t) r.delete(e, t);
            r.set(e, i, s);
          }
          toJSON(e) {
            return this.write({}, e);
          }
        };
        return (
          (t = (0, s._)(
            [(0, h.j)('esri.core.WriteableMultiOriginJSONSupport')],
            t,
          )),
          (t.prototype.toJSON.isDefaultToJSON = !0),
          t
        );
      };
      function f(e) {
        return (0, c.vw)(e).store;
      }
      const m = (e) => {
        let t = class extends v(d(e)) {
          constructor(...e) {
            super(...e);
          }
        };
        return (
          (t = (0, s._)([(0, h.j)('esri.core.MultiOriginJSONSupport')], t)), t
        );
      };
      let _ = class extends m(i.Z) {};
      _ = (0, s._)([(0, h.j)('esri.core.MultiOriginJSONSupport')], _);
    },
    2723: (e, t, r) => {
      r.r(t), r.d(t, { default: () => C });
      var s = r(43697),
        i = r(3172),
        o = r(20102),
        l = r(35454),
        n = r(70586),
        a = r(16453),
        p = r(5600),
        u = (r(67676), r(80442), r(75215), r(52011)),
        c = r(82971),
        h = r(6570),
        d = r(24470),
        y = r(29600),
        g = r(71612),
        b = r(34760),
        v = r(72965),
        f = r(11145);
      const m = { id: '0/0/0', level: 0, row: 0, col: 0, extent: null };
      let _ = class extends (0, g.h)((0, v.M)((0, b.Q)(y.Z))) {
        constructor() {
          super(...arguments),
            (this.tileInfo = f.Z.create({
              spatialReference: c.Z.WebMercator,
              size: 256,
            })),
            (this.type = 'base-tile'),
            (this.fullExtent = new h.Z(
              -20037508.342787,
              -20037508.34278,
              20037508.34278,
              20037508.342787,
              c.Z.WebMercator,
            )),
            (this.spatialReference = c.Z.WebMercator);
        }
        getTileBounds(e, t, r, s) {
          const i = s || (0, d.Ue)();
          return (
            (m.level = e),
            (m.row = t),
            (m.col = r),
            (m.extent = i),
            this.tileInfo.updateTileInfo(m),
            (m.extent = null),
            i
          );
        }
        fetchTile(e, t, r, s = {}) {
          const { signal: o } = s,
            l = this.getTileUrl(e, t, r),
            n = {
              responseType: 'image',
              signal: o,
              query: { ...this.refreshParameters },
            };
          return (0, i.default)(l, n).then((e) => e.data);
        }
        getTileUrl() {
          throw new o.Z(
            'basetilelayer:gettileurl-not-implemented',
            'getTileUrl() is not implemented',
          );
        }
      };
      (0, s._)([(0, p.Cb)({ type: f.Z })], _.prototype, 'tileInfo', void 0),
        (0, s._)(
          [(0, p.Cb)({ type: ['show', 'hide'] })],
          _.prototype,
          'listMode',
          void 0,
        ),
        (0, s._)(
          [(0, p.Cb)({ readOnly: !0, value: 'base-tile' })],
          _.prototype,
          'type',
          void 0,
        ),
        (0, s._)(
          [(0, p.Cb)({ nonNullable: !0 })],
          _.prototype,
          'fullExtent',
          void 0,
        ),
        (0, s._)([(0, p.Cb)()], _.prototype, 'spatialReference', void 0),
        (_ = (0, s._)([(0, u.j)('esri.layers.BaseTileLayer')], _));
      const w = _;
      var M = r(38009);
      const S = new l.X({
        BingMapsAerial: 'aerial',
        BingMapsRoad: 'road',
        BingMapsHybrid: 'hybrid',
      });
      let O = class extends (0, g.h)((0, M.q)((0, a.R)(w))) {
        constructor(e) {
          super(e),
            (this.type = 'bing-maps'),
            (this.tileInfo = new f.Z({
              size: [256, 256],
              dpi: 96,
              origin: {
                x: -20037508.342787,
                y: 20037508.342787,
                spatialReference: c.Z.WebMercator,
              },
              spatialReference: c.Z.WebMercator,
              lods: [
                {
                  level: 1,
                  resolution: 78271.5169639999,
                  scale: 295828763.795777,
                },
                {
                  level: 2,
                  resolution: 39135.7584820001,
                  scale: 147914381.897889,
                },
                {
                  level: 3,
                  resolution: 19567.8792409999,
                  scale: 73957190.948944,
                },
                {
                  level: 4,
                  resolution: 9783.93962049996,
                  scale: 36978595.474472,
                },
                {
                  level: 5,
                  resolution: 4891.96981024998,
                  scale: 18489297.737236,
                },
                {
                  level: 6,
                  resolution: 2445.98490512499,
                  scale: 9244648.868618,
                },
                {
                  level: 7,
                  resolution: 1222.99245256249,
                  scale: 4622324.434309,
                },
                {
                  level: 8,
                  resolution: 611.49622628138,
                  scale: 2311162.217155,
                },
                {
                  level: 9,
                  resolution: 305.748113140558,
                  scale: 1155581.108577,
                },
                {
                  level: 10,
                  resolution: 152.874056570411,
                  scale: 577790.554289,
                },
                {
                  level: 11,
                  resolution: 76.4370282850732,
                  scale: 288895.277144,
                },
                {
                  level: 12,
                  resolution: 38.2185141425366,
                  scale: 144447.638572,
                },
                {
                  level: 13,
                  resolution: 19.1092570712683,
                  scale: 72223.819286,
                },
                {
                  level: 14,
                  resolution: 9.55462853563415,
                  scale: 36111.909643,
                },
                {
                  level: 15,
                  resolution: 4.77731426794937,
                  scale: 18055.954822,
                },
                { level: 16, resolution: 2.38865713397468, scale: 9027.977411 },
                { level: 17, resolution: 1.19432856685505, scale: 4513.988705 },
                {
                  level: 18,
                  resolution: 0.597164283559817,
                  scale: 2256.994353,
                },
                {
                  level: 19,
                  resolution: 0.298582141647617,
                  scale: 1128.497176,
                },
                {
                  level: 20,
                  resolution: 0.1492910708238085,
                  scale: 564.248588,
                },
              ],
            })),
            (this.key = null),
            (this.style = 'road'),
            (this.culture = 'en-US'),
            (this.region = null),
            (this.portalUrl = null),
            (this.hasAttributionData = !0);
        }
        get bingMetadata() {
          return this._get('bingMetadata');
        }
        set bingMetadata(e) {
          this._set('bingMetadata', e);
        }
        get copyright() {
          return (0, n.pC)(this.bingMetadata)
            ? this.bingMetadata.copyright
            : null;
        }
        get operationalLayerType() {
          return S.toJSON(this.style);
        }
        get bingLogo() {
          return (0, n.pC)(this.bingMetadata)
            ? this.bingMetadata.brandLogoUri
            : null;
        }
        load(e) {
          return (
            this.key
              ? this.addResolvingPromise(this._getMetadata())
              : this.portalUrl
              ? this.addResolvingPromise(
                  this._getPortalBingKey().then(() => this._getMetadata()),
                )
              : this.addResolvingPromise(
                  Promise.reject(
                    new o.Z(
                      'bingmapslayer:load',
                      'Bing layer must have bing key.',
                    ),
                  ),
                ),
            Promise.resolve(this)
          );
        }
        getTileUrl(e, t, r) {
          if (!this.loaded || (0, n.Wi)(this.bingMetadata)) return null;
          const s = this.bingMetadata.resourceSets[0].resources[0],
            i = s.imageUrlSubdomains[t % s.imageUrlSubdomains.length],
            o = this._getQuadKey(e, t, r);
          return s.imageUrl.replace('{subdomain}', i).replace('{quadkey}', o);
        }
        async fetchAttributionData() {
          return this.load().then(() =>
            (0, n.Wi)(this.bingMetadata)
              ? null
              : {
                  contributors:
                    this.bingMetadata.resourceSets[0].resources[0].imageryProviders.map(
                      (e) => ({
                        attribution: e.attribution,
                        coverageAreas: e.coverageAreas.map((e) => ({
                          zoomMin: e.zoomMin,
                          zoomMax: e.zoomMax,
                          score: 1,
                          bbox: [e.bbox[0], e.bbox[1], e.bbox[2], e.bbox[3]],
                        })),
                      }),
                    ),
                },
          );
        }
        _getMetadata() {
          const e = {
            road: 'roadOnDemand',
            aerial: 'aerial',
            hybrid: 'aerialWithLabelsOnDemand',
          }[this.style];
          return (0, i.default)(
            `https://dev.virtualearth.net/REST/v1/Imagery/Metadata/${e}`,
            {
              responseType: 'json',
              query: {
                include: 'ImageryProviders',
                uriScheme: 'https',
                key: this.key,
                suppressStatus: !0,
                output: 'json',
                culture: this.culture,
                userRegion: this.region,
              },
            },
          )
            .then((e) => {
              const t = e.data;
              if (200 !== t.statusCode)
                throw new o.Z('bingmapslayer:getmetadata', t.statusDescription);
              if (
                ((this.bingMetadata = t),
                0 === this.bingMetadata.resourceSets.length)
              )
                throw new o.Z(
                  'bingmapslayer:getmetadata',
                  'no bing resourcesets',
                );
              if (0 === this.bingMetadata.resourceSets[0].resources.length)
                throw new o.Z('bingmapslayer:getmetadata', 'no bing resources');
            })
            .catch((e) => {
              throw new o.Z('bingmapslayer:getmetadata', e.message);
            });
        }
        _getPortalBingKey() {
          return (0, i.default)(this.portalUrl, {
            responseType: 'json',
            authMode: 'no-prompt',
            query: { f: 'json' },
          })
            .then((e) => {
              if (!e.data.bingKey)
                throw new o.Z(
                  'bingmapslayer:getportalbingkey',
                  'The referenced Portal does not contain a valid bing key',
                );
              this.key = e.data.bingKey;
            })
            .catch((e) => {
              throw new o.Z('bingmapslayer:getportalbingkey', e.message);
            });
        }
        _getQuadKey(e, t, r) {
          let s = '';
          for (let i = e; i > 0; i--) {
            let e = 0;
            const o = 1 << (i - 1);
            0 != (r & o) && (e += 1),
              0 != (t & o) && (e += 2),
              (s += e.toString());
          }
          return s;
        }
      };
      (0, s._)(
        [(0, p.Cb)({ json: { read: !1, write: !1 }, value: null })],
        O.prototype,
        'bingMetadata',
        null,
      ),
        (0, s._)(
          [
            (0, p.Cb)({
              json: { read: !1, write: !1 },
              value: 'bing-maps',
              readOnly: !0,
            }),
          ],
          O.prototype,
          'type',
          void 0,
        ),
        (0, s._)([(0, p.Cb)({ type: f.Z })], O.prototype, 'tileInfo', void 0),
        (0, s._)(
          [
            (0, p.Cb)({
              type: String,
              readOnly: !0,
              json: { read: !1, write: !1 },
            }),
          ],
          O.prototype,
          'copyright',
          null,
        ),
        (0, s._)(
          [(0, p.Cb)({ type: String, json: { write: !1, read: !1 } })],
          O.prototype,
          'key',
          void 0,
        ),
        (0, s._)(
          [
            (0, p.Cb)({
              type: S.apiValues,
              nonNullable: !0,
              json: { read: { source: 'layerType', reader: S.read } },
            }),
          ],
          O.prototype,
          'style',
          void 0,
        ),
        (0, s._)(
          [
            (0, p.Cb)({
              type: ['BingMapsAerial', 'BingMapsHybrid', 'BingMapsRoad'],
            }),
          ],
          O.prototype,
          'operationalLayerType',
          null,
        ),
        (0, s._)(
          [(0, p.Cb)({ type: String, json: { write: !1, read: !1 } })],
          O.prototype,
          'culture',
          void 0,
        ),
        (0, s._)(
          [(0, p.Cb)({ type: String, json: { write: !1, read: !1 } })],
          O.prototype,
          'region',
          void 0,
        ),
        (0, s._)(
          [(0, p.Cb)({ type: String, json: { write: !0, read: !0 } })],
          O.prototype,
          'portalUrl',
          void 0,
        ),
        (0, s._)(
          [(0, p.Cb)({ type: Boolean, json: { write: !1, read: !1 } })],
          O.prototype,
          'hasAttributionData',
          void 0,
        ),
        (0, s._)(
          [(0, p.Cb)({ type: String, readOnly: !0 })],
          O.prototype,
          'bingLogo',
          null,
        ),
        (O = (0, s._)([(0, u.j)('esri.layers.BingMapsLayer')], O));
      const C = O;
    },
    29600: (e, t, r) => {
      r.d(t, { Z: () => _ });
      var s = r(43697),
        i = r(68773),
        o = (r(66577), r(3172)),
        l = r(20102),
        n = r(32448),
        a = r(10699),
        p = r(83379),
        u = r(92604),
        c = r(95330),
        h = r(17452),
        d = r(5600),
        y = (r(67676), r(80442), r(75215), r(52011)),
        g = r(6570),
        b = r(82971);
      let v = 0;
      const f = u.Z.getLogger('esri.layers.Layer');
      let m = class extends n.Z.EventedMixin((0, a.I)(p.Z)) {
        constructor() {
          super(...arguments),
            (this.attributionDataUrl = null),
            (this.fullExtent = new g.Z(-180, -90, 180, 90, b.Z.WGS84)),
            (this.id = Date.now().toString(16) + '-layer-' + v++),
            (this.legendEnabled = !0),
            (this.listMode = 'show'),
            (this.opacity = 1),
            (this.parent = null),
            (this.popupEnabled = !0),
            (this.attributionVisible = !0),
            (this.spatialReference = b.Z.WGS84),
            (this.title = null),
            (this.type = null),
            (this.url = null),
            (this.visible = !0);
        }
        static async fromArcGISServerUrl(e) {
          const t = 'string' == typeof e ? { url: e } : e,
            s = await r.e(3529).then(r.bind(r, 63529));
          try {
            return await s.fromUrl(t);
          } catch (e) {
            throw (
              (f.error(
                "#fromArcGISServerUrl({ url: '" + t.url + "'})",
                'Failed to create layer from arcgis server url',
                e,
              ),
              e)
            );
          }
        }
        static async fromPortalItem(e) {
          const t = 'portalItem' in e ? e : { portalItem: e },
            s = await r.e(4579).then(r.bind(r, 44579));
          try {
            return await s.fromItem(t);
          } catch (e) {
            const r = t && t.portalItem,
              s = (r && r.id) || 'unset',
              o = (r && r.portal && r.portal.url) || i.Z.portalUrl;
            throw (
              (f.error(
                '#fromPortalItem()',
                "Failed to create layer from portal item (portal: '" +
                  o +
                  "', id: '" +
                  s +
                  "')",
                e,
              ),
              e)
            );
          }
        }
        initialize() {
          this.when().catch((e) => {
            var t, r;
            (0, c.D_)(e) ||
              u.Z.getLogger(this.declaredClass).error(
                '#load()',
                `Failed to load layer (title: '${
                  null != (t = this.title) ? t : 'no title'
                }', id: '${null != (r = this.id) ? r : 'no id'}')`,
                { error: e },
              );
          });
        }
        destroy() {
          if (this.parent) {
            const e = this,
              t = this.parent;
            'layers' in t && t.layers.includes(e)
              ? t.layers.remove(e)
              : 'tables' in t && t.tables.includes(e)
              ? t.tables.remove(e)
              : 'baseLayers' in t && t.baseLayers.includes(e)
              ? t.baseLayers.remove(e)
              : 'baseLayers' in t &&
                t.referenceLayers.includes(e) &&
                t.referenceLayers.remove(e);
          }
        }
        get hasAttributionData() {
          return null != this.attributionDataUrl;
        }
        get parsedUrl() {
          const e = this.url;
          return e ? (0, h.mN)(e) : null;
        }
        async fetchAttributionData() {
          const e = this.attributionDataUrl;
          if (this.hasAttributionData && e)
            return (
              await (0, o.default)(e, {
                query: { f: 'json' },
                responseType: 'json',
              })
            ).data;
          throw new l.Z(
            'layer:no-attribution-data',
            'Layer does not have attribution data',
          );
        }
      };
      (0, s._)(
        [(0, d.Cb)({ type: String })],
        m.prototype,
        'attributionDataUrl',
        void 0,
      ),
        (0, s._)([(0, d.Cb)({ type: g.Z })], m.prototype, 'fullExtent', void 0),
        (0, s._)(
          [(0, d.Cb)({ readOnly: !0 })],
          m.prototype,
          'hasAttributionData',
          null,
        ),
        (0, s._)(
          [(0, d.Cb)({ type: String, clonable: !1 })],
          m.prototype,
          'id',
          void 0,
        ),
        (0, s._)(
          [(0, d.Cb)({ type: Boolean, nonNullable: !0 })],
          m.prototype,
          'legendEnabled',
          void 0,
        ),
        (0, s._)(
          [(0, d.Cb)({ type: ['show', 'hide', 'hide-children'] })],
          m.prototype,
          'listMode',
          void 0,
        ),
        (0, s._)(
          [
            (0, d.Cb)({
              type: Number,
              range: { min: 0, max: 1 },
              nonNullable: !0,
            }),
          ],
          m.prototype,
          'opacity',
          void 0,
        ),
        (0, s._)([(0, d.Cb)({ clonable: !1 })], m.prototype, 'parent', void 0),
        (0, s._)([(0, d.Cb)({ readOnly: !0 })], m.prototype, 'parsedUrl', null),
        (0, s._)(
          [(0, d.Cb)({ type: Boolean })],
          m.prototype,
          'popupEnabled',
          void 0,
        ),
        (0, s._)(
          [(0, d.Cb)({ type: Boolean })],
          m.prototype,
          'attributionVisible',
          void 0,
        ),
        (0, s._)(
          [(0, d.Cb)({ type: b.Z })],
          m.prototype,
          'spatialReference',
          void 0,
        ),
        (0, s._)([(0, d.Cb)({ type: String })], m.prototype, 'title', void 0),
        (0, s._)(
          [(0, d.Cb)({ type: String, readOnly: !0, json: { read: !1 } })],
          m.prototype,
          'type',
          void 0,
        ),
        (0, s._)([(0, d.Cb)()], m.prototype, 'url', void 0),
        (0, s._)(
          [(0, d.Cb)({ type: Boolean, nonNullable: !0 })],
          m.prototype,
          'visible',
          void 0,
        ),
        (m = (0, s._)([(0, y.j)('esri.layers.Layer')], m));
      const _ = m;
    },
    34760: (e, t, r) => {
      r.d(t, { Q: () => v });
      var s = r(43697),
        i = r(92604),
        o = r(95330),
        l = r(5600),
        n = (r(67676), r(80442), r(75215), r(52011)),
        a = r(80539),
        p = (r(20102), r(26258), r(87538));
      const u = new a.Z(),
        c = new WeakMap();
      function h(e) {
        return (
          e && 'object' == typeof e && 'refreshInterval' in e && 'refresh' in e
        );
      }
      function d(e, t) {
        return Number.isFinite(e) && Number.isFinite(t)
          ? t <= 0
            ? e
            : d(t, e % t)
          : 0;
      }
      let y = 0,
        g = 0;
      function b() {
        const e = Date.now();
        for (const r of u)
          if (r.refreshInterval) {
            var t;
            e - (null != (t = c.get(r)) ? t : 0) + 5 >=
              6e4 * r.refreshInterval && (c.set(r, e), r.refresh(e));
          }
      }
      (0, p.EH)(() => {
        const e = Date.now();
        let t = 0;
        for (const r of u)
          (t = d(Math.round(6e4 * r.refreshInterval), t)),
            r.refreshInterval ? c.get(r) || c.set(r, e) : c.delete(r);
        if (t !== g) {
          if (((g = t), clearInterval(y), 0 === g)) return void (y = 0);
          y = setInterval(b, g);
        }
      });
      const v = (e) => {
        let t = class extends e {
          constructor(...e) {
            super(...e),
              (this.refreshInterval = 0),
              (this.refreshTimestamp = 0),
              (this._debounceHasDataChanged = (0, o.Ds)(() =>
                this.hasDataChanged(),
              )),
              this.when().then(
                () => {
                  !(function (e) {
                    h(e) && u.push(e);
                  })(this);
                },
                () => {},
              );
          }
          destroy() {
            h(this) && u.includes(this) && u.remove(this);
          }
          get refreshParameters() {
            return { _ts: this.refreshTimestamp || null };
          }
          refresh(e = Date.now()) {
            (0, o.R8)(this._debounceHasDataChanged()).then(
              (t) => {
                t && this._set('refreshTimestamp', e),
                  this.emit('refresh', { dataChanged: t });
              },
              (e) => {
                i.Z.getLogger(this.declaredClass).error(e),
                  this.emit('refresh', { dataChanged: !1, error: e });
              },
            );
          }
          async hasDataChanged() {
            return !0;
          }
        };
        return (
          (0, s._)(
            [
              (0, l.Cb)({
                type: Number,
                cast: (e) => (e >= 0.1 ? e : e <= 0 ? 0 : 0.1),
                json: { write: !0 },
              }),
            ],
            t.prototype,
            'refreshInterval',
            void 0,
          ),
          (0, s._)(
            [(0, l.Cb)({ readOnly: !0 })],
            t.prototype,
            'refreshTimestamp',
            void 0,
          ),
          (0, s._)([(0, l.Cb)()], t.prototype, 'refreshParameters', null),
          (t = (0, s._)([(0, n.j)('esri.layers.mixins.RefreshableLayer')], t)),
          t
        );
      };
    },
    39450: (e, t, r) => {
      r.d(t, { Z: () => u });
      var s,
        i = r(43697),
        o = r(96674),
        l = r(5600),
        n = (r(67676), r(80442), r(75215)),
        a = r(52011);
      let p = (s = class extends o.wq {
        constructor(e) {
          super(e),
            (this.cols = null),
            (this.level = 0),
            (this.levelValue = null),
            (this.origin = null),
            (this.resolution = 0),
            (this.rows = null),
            (this.scale = 0);
        }
        clone() {
          return new s({
            cols: this.cols,
            level: this.level,
            levelValue: this.levelValue,
            resolution: this.resolution,
            rows: this.rows,
            scale: this.scale,
          });
        }
      });
      (0, i._)(
        [
          (0, l.Cb)({
            json: {
              write: !0,
              origins: {
                'web-document': { read: !1, write: !1 },
                'portal-item': { read: !1, write: !1 },
              },
            },
          }),
        ],
        p.prototype,
        'cols',
        void 0,
      ),
        (0, i._)(
          [(0, l.Cb)({ type: n.z8, json: { write: !0 } })],
          p.prototype,
          'level',
          void 0,
        ),
        (0, i._)(
          [(0, l.Cb)({ type: String, json: { write: !0 } })],
          p.prototype,
          'levelValue',
          void 0,
        ),
        (0, i._)(
          [
            (0, l.Cb)({
              json: {
                write: !0,
                origins: {
                  'web-document': { read: !1, write: !1 },
                  'portal-item': { read: !1, write: !1 },
                },
              },
            }),
          ],
          p.prototype,
          'origin',
          void 0,
        ),
        (0, i._)(
          [(0, l.Cb)({ type: Number, json: { write: !0 } })],
          p.prototype,
          'resolution',
          void 0,
        ),
        (0, i._)(
          [
            (0, l.Cb)({
              json: {
                write: !0,
                origins: {
                  'web-document': { read: !1, write: !1 },
                  'portal-item': { read: !1, write: !1 },
                },
              },
            }),
          ],
          p.prototype,
          'rows',
          void 0,
        ),
        (0, i._)(
          [(0, l.Cb)({ type: Number, json: { write: !0 } })],
          p.prototype,
          'scale',
          void 0,
        ),
        (p = s = (0, i._)([(0, a.j)('esri.layers.support.LOD')], p));
      const u = p;
    },
    11145: (e, t, r) => {
      r.d(t, { Z: () => O });
      var s,
        i = r(43697),
        o = r(35454),
        l = r(96674),
        n = r(70586),
        a = r(67900),
        p = r(5600),
        u = (r(67676), r(80442), r(75215)),
        c = r(71715),
        h = r(52011),
        d = r(30556),
        y = r(13473),
        g = r(82971),
        b = r(24470),
        v = r(8744),
        f = r(40488),
        m = r(39450);
      const _ = new o.X({
        PNG: 'png',
        PNG8: 'png8',
        PNG24: 'png24',
        PNG32: 'png32',
        JPEG: 'jpg',
        JPG: 'jpg',
        DIB: 'dib',
        TIFF: 'tiff',
        EMF: 'emf',
        PS: 'ps',
        PDF: 'pdf',
        GIF: 'gif',
        SVG: 'svg',
        SVGZ: 'svgz',
        Mixed: 'mixed',
        MIXED: 'mixed',
        LERC: 'lerc',
        LERC2D: 'lerc2d',
        RAW: 'raw',
        pbf: 'pbf',
      });
      let w = (s = class extends l.wq {
        constructor(e) {
          super(e),
            (this.dpi = 96),
            (this.format = null),
            (this.origin = null),
            (this.minScale = 0),
            (this.maxScale = 0),
            (this.size = null),
            (this.spatialReference = null);
        }
        static create(e = {}) {
          const {
            resolutionFactor: t = 1,
            scales: r,
            size: i = 256,
            spatialReference: o = g.Z.WebMercator,
            numLODs: l = 24,
          } = e;
          if (!(0, v.JY)(o)) {
            const e = [];
            if (r)
              for (let t = 0; t < r.length; t++) {
                const s = r[t];
                e.push({ level: t, scale: s, resolution: s });
              }
            else {
              let t = 5e-4;
              for (let r = l - 1; r >= 0; r--)
                e.unshift({ level: r, scale: t, resolution: t }), (t *= 2);
            }
            return new s({
              dpi: 96,
              lods: e,
              origin: new y.Z(0, 0, o),
              size: [i, i],
              spatialReference: o,
            });
          }
          const n = (0, v.C5)(o),
            p = e.origin
              ? new y.Z({ x: e.origin.x, y: e.origin.y, spatialReference: o })
              : new y.Z(
                  n
                    ? { x: n.origin[0], y: n.origin[1], spatialReference: o }
                    : { x: 0, y: 0, spatialReference: o },
                ),
            u = 1 / (39.37 * (0, a.c9)(o) * 96),
            c = [];
          if (r)
            for (let e = 0; e < r.length; e++) {
              const t = r[e],
                s = t * u;
              c.push({ level: e, scale: t, resolution: s });
            }
          else {
            let e = (0, v.sT)(o)
              ? (512 / i) * 591657527.5917094
              : (256 / i) * 591657527.591555;
            const r = Math.ceil(l / t);
            c.push({ level: 0, scale: e, resolution: e * u });
            for (let s = 1; s < r; s++) {
              const r = e / 2 ** t,
                i = r * u;
              c.push({ level: s, scale: r, resolution: i }), (e = r);
            }
          }
          return new s({
            dpi: 96,
            lods: c,
            origin: p,
            size: [i, i],
            spatialReference: o,
          });
        }
        get isWrappable() {
          const { spatialReference: e, origin: t } = this;
          if (e && t) {
            const r = (0, v.C5)(e);
            return e.isWrappable && Math.abs(r.origin[0] - t.x) <= r.dx;
          }
          return !1;
        }
        readOrigin(e, t) {
          return y.Z.fromJSON({ spatialReference: t.spatialReference, ...e });
        }
        set lods(e) {
          let t = 0,
            r = 0;
          const s = [];
          (this._levelToLOD = {}),
            e &&
              ((t = -1 / 0),
              (r = 1 / 0),
              e.forEach((e) => {
                s.push(e.scale),
                  (t = e.scale > t ? e.scale : t),
                  (r = e.scale < r ? e.scale : r),
                  (this._levelToLOD[e.level] = e);
              })),
            this._set('scales', s),
            this._set('minScale', t),
            this._set('maxScale', r),
            this._set('lods', e),
            this._initializeUpsampleLevels();
        }
        readSize(e, t) {
          return [t.cols, t.rows];
        }
        writeSize(e, t) {
          (t.cols = e[0]), (t.rows = e[1]);
        }
        zoomToScale(e) {
          const t = this.scales;
          if (e <= 0) return t[0];
          if (e >= t.length - 1) return t[t.length - 1];
          {
            const r = Math.floor(e),
              s = r + 1;
            return t[r] / (t[r] / t[s]) ** (e - r);
          }
        }
        scaleToZoom(e) {
          const t = this.scales,
            r = t.length - 1;
          let s = 0;
          for (; s < r; s++) {
            const r = t[s],
              i = t[s + 1];
            if (r <= e) return s;
            if (i === e) return s + 1;
            if (r > e && i < e) return s + Math.log(r / e) / Math.log(r / i);
          }
          return s;
        }
        snapScale(e, t = 0.95) {
          const r = this.scaleToZoom(e);
          return r % Math.floor(r) >= t
            ? this.zoomToScale(Math.ceil(r))
            : this.zoomToScale(Math.floor(r));
        }
        tileAt(e, t, r, s) {
          const i = this.lodAt(e);
          if (!i) return null;
          let o, l;
          if ('number' == typeof t) (o = t), (l = r);
          else if ((0, v.fS)(t.spatialReference, this.spatialReference))
            (o = t.x), (l = t.y), (s = r);
          else {
            const e = (0, f.iV)(t, this.spatialReference);
            if ((0, n.Wi)(e)) return null;
            (o = e.x), (l = e.y), (s = r);
          }
          const a = i.resolution * this.size[0],
            p = i.resolution * this.size[1];
          return (
            s ||
              (s = { id: null, level: 0, row: 0, col: 0, extent: (0, b.Ue)() }),
            (s.level = e),
            (s.row = Math.floor((this.origin.y - l) / p + 0.001)),
            (s.col = Math.floor((o - this.origin.x) / a + 0.001)),
            this.updateTileInfo(s),
            s
          );
        }
        updateTileInfo(e, t = s.ExtrapolateOptions.NONE) {
          let r = this.lodAt(e.level);
          if (!r && t === s.ExtrapolateOptions.POWER_OF_TWO) {
            const t = this.lods[this.lods.length - 1];
            t.level < e.level && (r = t);
          }
          if (!r) return;
          const i = e.level - r.level,
            o = (r.resolution * this.size[0]) / 2 ** i,
            l = (r.resolution * this.size[1]) / 2 ** i;
          (e.id = `${e.level}/${e.row}/${e.col}`),
            e.extent || (e.extent = (0, b.Ue)()),
            (e.extent[0] = this.origin.x + e.col * o),
            (e.extent[1] = this.origin.y - (e.row + 1) * l),
            (e.extent[2] = e.extent[0] + o),
            (e.extent[3] = e.extent[1] + l);
        }
        upsampleTile(e) {
          const t = this._upsampleLevels[e.level];
          return !(
            !t ||
            -1 === t.parentLevel ||
            ((e.level = t.parentLevel),
            (e.row = Math.floor(e.row / t.factor + 0.001)),
            (e.col = Math.floor(e.col / t.factor + 0.001)),
            this.updateTileInfo(e),
            0)
          );
        }
        getTileBounds(e, t) {
          const { resolution: r } = this.lodAt(t.level),
            s = r * this.size[0],
            i = r * this.size[1];
          return (
            (e[0] = this.origin.x + t.col * s),
            (e[1] = this.origin.y - (t.row + 1) * i),
            (e[2] = e[0] + s),
            (e[3] = e[1] + i),
            e
          );
        }
        lodAt(e) {
          return (this._levelToLOD && this._levelToLOD[e]) || null;
        }
        clone() {
          return s.fromJSON(this.write({}));
        }
        getOrCreateCompatible(e, t) {
          if (256 === this.size[0] && 256 === this.size[1])
            return 256 === e ? this : null;
          const r = [],
            i = this.lods.length;
          for (let e = 0; e < i; e++) {
            const s = this.lods[e],
              i = s.resolution * t;
            r.push(new m.Z({ level: s.level, scale: s.scale, resolution: i }));
          }
          return new s({
            size: [e, e],
            dpi: this.dpi,
            format: this.format,
            compressionQuality: this.compressionQuality,
            origin: this.origin,
            spatialReference: this.spatialReference,
            lods: r,
          });
        }
        _initializeUpsampleLevels() {
          const e = this.lods;
          this._upsampleLevels = [];
          let t = null;
          for (let r = 0; r < e.length; r++) {
            const s = e[r];
            (this._upsampleLevels[s.level] = {
              parentLevel: t ? t.level : -1,
              factor: t ? t.resolution / s.resolution : 0,
            }),
              (t = s);
          }
        }
      });
      var M, S;
      (0, i._)(
        [(0, p.Cb)({ type: Number, json: { write: !0 } })],
        w.prototype,
        'compressionQuality',
        void 0,
      ),
        (0, i._)(
          [(0, p.Cb)({ type: Number, json: { write: !0 } })],
          w.prototype,
          'dpi',
          void 0,
        ),
        (0, i._)(
          [
            (0, p.Cb)({
              type: String,
              json: {
                read: _.read,
                write: _.write,
                origins: { 'web-scene': { read: !1, write: !1 } },
              },
            }),
          ],
          w.prototype,
          'format',
          void 0,
        ),
        (0, i._)(
          [(0, p.Cb)({ readOnly: !0 })],
          w.prototype,
          'isWrappable',
          null,
        ),
        (0, i._)(
          [(0, p.Cb)({ type: y.Z, json: { write: !0 } })],
          w.prototype,
          'origin',
          void 0,
        ),
        (0, i._)([(0, c.r)('origin')], w.prototype, 'readOrigin', null),
        (0, i._)(
          [(0, p.Cb)({ type: [m.Z], value: null, json: { write: !0 } })],
          w.prototype,
          'lods',
          null,
        ),
        (0, i._)(
          [(0, p.Cb)({ readOnly: !0 })],
          w.prototype,
          'minScale',
          void 0,
        ),
        (0, i._)(
          [(0, p.Cb)({ readOnly: !0 })],
          w.prototype,
          'maxScale',
          void 0,
        ),
        (0, i._)([(0, p.Cb)({ readOnly: !0 })], w.prototype, 'scales', void 0),
        (0, i._)(
          [
            (0, p.Cb)({
              cast: (e) =>
                Array.isArray(e)
                  ? e
                  : 'number' == typeof e
                  ? [e, e]
                  : [256, 256],
            }),
          ],
          w.prototype,
          'size',
          void 0,
        ),
        (0, i._)(
          [(0, c.r)('size', ['rows', 'cols'])],
          w.prototype,
          'readSize',
          null,
        ),
        (0, i._)(
          [(0, d.c)('size', { cols: { type: u.z8 }, rows: { type: u.z8 } })],
          w.prototype,
          'writeSize',
          null,
        ),
        (0, i._)(
          [(0, p.Cb)({ type: g.Z, json: { write: !0 } })],
          w.prototype,
          'spatialReference',
          void 0,
        ),
        (w = s = (0, i._)([(0, h.j)('esri.layers.support.TileInfo')], w)),
        ((S =
          (M = w || (w = {})).ExtrapolateOptions ||
          (M.ExtrapolateOptions = {}))[(S.NONE = 0)] = 'NONE'),
        (S[(S.POWER_OF_TWO = 1)] = 'POWER_OF_TWO');
      const O = w;
    },
    99282: (e, t, r) => {
      r.d(t, { a: () => o });
      var s = r(67900),
        i = r(68441);
      const o = {
        inches: (0, s.En)(1, 'meters', 'inches'),
        feet: (0, s.En)(1, 'meters', 'feet'),
        'us-feet': (0, s.En)(1, 'meters', 'us-feet'),
        yards: (0, s.En)(1, 'meters', 'yards'),
        miles: (0, s.En)(1, 'meters', 'miles'),
        'nautical-miles': (0, s.En)(1, 'meters', 'nautical-miles'),
        millimeters: (0, s.En)(1, 'meters', 'millimeters'),
        centimeters: (0, s.En)(1, 'meters', 'centimeters'),
        decimeters: (0, s.En)(1, 'meters', 'decimeters'),
        meters: (0, s.En)(1, 'meters', 'meters'),
        kilometers: (0, s.En)(1, 'meters', 'kilometers'),
        'decimal-degrees': 1 / (0, s.ty)(1, 'meters', i.sv.radius),
      };
    },
    65242: (e, t, r) => {
      r.d(t, { a: () => i, b: () => o });
      var s = r(75215);
      function i(e) {
        const t = (0, s.vU)(100 * (1 - e));
        return Math.max(0, Math.min(t, 100));
      }
      function o(e) {
        const t = 1 - e / 100;
        return Math.max(0, Math.min(t, 1));
      }
    },
  },
]);
