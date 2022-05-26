'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [678],
  {
    10699: (e, t, r) => {
      r.d(t, { I: () => o });
      var s = r(43697),
        i = r(52011);
      let l = 0;
      const o = (e) => {
        let t = class extends e {
          constructor(...e) {
            super(...e),
              Object.defineProperty(this, 'uid', {
                writable: !1,
                configurable: !1,
                value: Date.now().toString(16) + '-object-' + l++,
              });
          }
        };
        return (t = (0, s._)([(0, i.j)('esri.core.Identifiable')], t)), t;
      };
      let n = class extends o(class {}) {};
      n = (0, s._)([(0, i.j)('esri.core.Identifiable')], n);
    },
    16453: (e, t, r) => {
      r.d(t, { R: () => b, w: () => w });
      var s = r(43697),
        i = r(15923),
        l = r(70586),
        o = r(41103),
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
              (0, l.j0)(this._propertyOriginMap.get(e)) <= r)
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
            const t = (0, l.j0)((0, c.vw)(this)),
              r = t.store,
              s = new p();
            (t.store = s), (0, o.M)(t, r, s);
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
            let l;
            (l = 'string' == typeof e ? ('*' === e ? r.keys(s) : [e]) : e),
              l.forEach((e) => {
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
      let f = class extends d(i.Z) {};
      f = (0, s._)([(0, h.j)('esri.core.ReadOnlyMultiOriginJSONSupport')], f);
      var m = r(76169);
      const v = (e) => {
        let t = class extends e {
          constructor(...e) {
            super(...e);
          }
          clear(e, t = 'user') {
            return g(this).delete(e, (0, a.M9)(t));
          }
          write(e = {}, t) {
            return (0, m.c)(this, (e = e || {}), t), e;
          }
          setAtOrigin(e, t, r) {
            (0, c.vw)(this).setAtOrigin(e, t, (0, a.M9)(r));
          }
          removeOrigin(e) {
            const t = g(this),
              r = (0, a.M9)(e),
              s = t.keys(r);
            for (const e of s)
              t.originOf(e) === r && t.set(e, t.get(e, r), a.s3.USER);
          }
          updateOrigin(e, t) {
            const r = g(this),
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
      function g(e) {
        return (0, c.vw)(e).store;
      }
      const b = (e) => {
        let t = class extends v(d(e)) {
          constructor(...e) {
            super(...e);
          }
        };
        return (
          (t = (0, s._)([(0, h.j)('esri.core.MultiOriginJSONSupport')], t)), t
        );
      };
      let w = class extends b(i.Z) {};
      w = (0, s._)([(0, h.j)('esri.core.MultiOriginJSONSupport')], w);
    },
    29600: (e, t, r) => {
      r.d(t, { Z: () => w });
      var s = r(43697),
        i = r(68773),
        l = (r(66577), r(3172)),
        o = r(20102),
        n = r(32448),
        a = r(10699),
        p = r(83379),
        u = r(92604),
        c = r(95330),
        h = r(17452),
        d = r(5600),
        y = (r(67676), r(80442), r(75215), r(52011)),
        f = r(6570),
        m = r(82971);
      let v = 0;
      const g = u.Z.getLogger('esri.layers.Layer');
      let b = class extends n.Z.EventedMixin((0, a.I)(p.Z)) {
        constructor() {
          super(...arguments),
            (this.attributionDataUrl = null),
            (this.fullExtent = new f.Z(-180, -90, 180, 90, m.Z.WGS84)),
            (this.id = Date.now().toString(16) + '-layer-' + v++),
            (this.legendEnabled = !0),
            (this.listMode = 'show'),
            (this.opacity = 1),
            (this.parent = null),
            (this.popupEnabled = !0),
            (this.attributionVisible = !0),
            (this.spatialReference = m.Z.WGS84),
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
              (g.error(
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
              l = (r && r.portal && r.portal.url) || i.Z.portalUrl;
            throw (
              (g.error(
                '#fromPortalItem()',
                "Failed to create layer from portal item (portal: '" +
                  l +
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
              await (0, l.default)(e, {
                query: { f: 'json' },
                responseType: 'json',
              })
            ).data;
          throw new o.Z(
            'layer:no-attribution-data',
            'Layer does not have attribution data',
          );
        }
      };
      (0, s._)(
        [(0, d.Cb)({ type: String })],
        b.prototype,
        'attributionDataUrl',
        void 0,
      ),
        (0, s._)([(0, d.Cb)({ type: f.Z })], b.prototype, 'fullExtent', void 0),
        (0, s._)(
          [(0, d.Cb)({ readOnly: !0 })],
          b.prototype,
          'hasAttributionData',
          null,
        ),
        (0, s._)(
          [(0, d.Cb)({ type: String, clonable: !1 })],
          b.prototype,
          'id',
          void 0,
        ),
        (0, s._)(
          [(0, d.Cb)({ type: Boolean, nonNullable: !0 })],
          b.prototype,
          'legendEnabled',
          void 0,
        ),
        (0, s._)(
          [(0, d.Cb)({ type: ['show', 'hide', 'hide-children'] })],
          b.prototype,
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
          b.prototype,
          'opacity',
          void 0,
        ),
        (0, s._)([(0, d.Cb)({ clonable: !1 })], b.prototype, 'parent', void 0),
        (0, s._)([(0, d.Cb)({ readOnly: !0 })], b.prototype, 'parsedUrl', null),
        (0, s._)(
          [(0, d.Cb)({ type: Boolean })],
          b.prototype,
          'popupEnabled',
          void 0,
        ),
        (0, s._)(
          [(0, d.Cb)({ type: Boolean })],
          b.prototype,
          'attributionVisible',
          void 0,
        ),
        (0, s._)(
          [(0, d.Cb)({ type: m.Z })],
          b.prototype,
          'spatialReference',
          void 0,
        ),
        (0, s._)([(0, d.Cb)({ type: String })], b.prototype, 'title', void 0),
        (0, s._)(
          [(0, d.Cb)({ type: String, readOnly: !0, json: { read: !1 } })],
          b.prototype,
          'type',
          void 0,
        ),
        (0, s._)([(0, d.Cb)()], b.prototype, 'url', void 0),
        (0, s._)(
          [(0, d.Cb)({ type: Boolean, nonNullable: !0 })],
          b.prototype,
          'visible',
          void 0,
        ),
        (b = (0, s._)([(0, y.j)('esri.layers.Layer')], b));
      const w = b;
    },
    16199: (e, t, r) => {
      r.r(t), r.d(t, { default: () => Z });
      var s = r(43697),
        i = (r(66577), r(3172)),
        l = r(20102),
        o = r(16453),
        n = r(19153),
        a = r(17452),
        p = r(5600),
        u = (r(67676), r(80442), r(75215), r(71715)),
        c = r(52011),
        h = r(30556),
        d = r(29600),
        y = r(71612),
        f = r(38009),
        m = r(16859),
        v = r(34760),
        g = r(72965),
        b = r(39450),
        w = r(11145),
        _ = r(5833),
        S = r(6570),
        C = r(82971),
        O = r(13473);
      let I = class extends (0, y.h)(
        (0, v.Q)((0, g.M)((0, f.q)((0, m.I)((0, o.R)(d.Z))))),
      ) {
        constructor(...e) {
          super(...e),
            (this.copyright = ''),
            (this.fullExtent = new S.Z(
              -20037508.342787,
              -20037508.34278,
              20037508.34278,
              20037508.342787,
              C.Z.WebMercator,
            )),
            (this.legendEnabled = !1),
            (this.isReference = null),
            (this.popupEnabled = !1),
            (this.spatialReference = C.Z.WebMercator),
            (this.subDomains = null),
            (this.tileInfo = new w.Z({
              size: [256, 256],
              dpi: 96,
              format: 'png8',
              compressionQuality: 0,
              origin: new O.Z({
                x: -20037508.342787,
                y: 20037508.342787,
                spatialReference: C.Z.WebMercator,
              }),
              spatialReference: C.Z.WebMercator,
              lods: [
                new b.Z({
                  level: 0,
                  scale: 591657527.591555,
                  resolution: 156543.033928,
                }),
                new b.Z({
                  level: 1,
                  scale: 295828763.795777,
                  resolution: 78271.5169639999,
                }),
                new b.Z({
                  level: 2,
                  scale: 147914381.897889,
                  resolution: 39135.7584820001,
                }),
                new b.Z({
                  level: 3,
                  scale: 73957190.948944,
                  resolution: 19567.8792409999,
                }),
                new b.Z({
                  level: 4,
                  scale: 36978595.474472,
                  resolution: 9783.93962049996,
                }),
                new b.Z({
                  level: 5,
                  scale: 18489297.737236,
                  resolution: 4891.96981024998,
                }),
                new b.Z({
                  level: 6,
                  scale: 9244648.868618,
                  resolution: 2445.98490512499,
                }),
                new b.Z({
                  level: 7,
                  scale: 4622324.434309,
                  resolution: 1222.99245256249,
                }),
                new b.Z({
                  level: 8,
                  scale: 2311162.217155,
                  resolution: 611.49622628138,
                }),
                new b.Z({
                  level: 9,
                  scale: 1155581.108577,
                  resolution: 305.748113140558,
                }),
                new b.Z({
                  level: 10,
                  scale: 577790.554289,
                  resolution: 152.874056570411,
                }),
                new b.Z({
                  level: 11,
                  scale: 288895.277144,
                  resolution: 76.4370282850732,
                }),
                new b.Z({
                  level: 12,
                  scale: 144447.638572,
                  resolution: 38.2185141425366,
                }),
                new b.Z({
                  level: 13,
                  scale: 72223.819286,
                  resolution: 19.1092570712683,
                }),
                new b.Z({
                  level: 14,
                  scale: 36111.909643,
                  resolution: 9.55462853563415,
                }),
                new b.Z({
                  level: 15,
                  scale: 18055.954822,
                  resolution: 4.77731426794937,
                }),
                new b.Z({
                  level: 16,
                  scale: 9027.977411,
                  resolution: 2.38865713397468,
                }),
                new b.Z({
                  level: 17,
                  scale: 4513.988705,
                  resolution: 1.19432856685505,
                }),
                new b.Z({
                  level: 18,
                  scale: 2256.994353,
                  resolution: 0.597164283559817,
                }),
                new b.Z({
                  level: 19,
                  scale: 1128.497176,
                  resolution: 0.298582141647617,
                }),
                new b.Z({
                  level: 20,
                  scale: 564.248588,
                  resolution: 0.14929107082380833,
                }),
                new b.Z({
                  level: 21,
                  scale: 282.124294,
                  resolution: 0.07464553541190416,
                }),
                new b.Z({
                  level: 22,
                  scale: 141.062147,
                  resolution: 0.03732276770595208,
                }),
                new b.Z({
                  level: 23,
                  scale: 70.5310735,
                  resolution: 0.01866138385297604,
                }),
              ],
            })),
            (this.type = 'web-tile'),
            (this.urlTemplate = null),
            (this.wmtsInfo = null);
        }
        normalizeCtorArgs(e, t) {
          return 'string' == typeof e ? { urlTemplate: e, ...t } : e;
        }
        load(e) {
          const t = this.loadFromPortal({ supportedTypes: ['WMTS'] }, e).then(
            () => {
              let e = '';
              if (this.urlTemplate)
                if (
                  this.spatialReference.equals(this.tileInfo.spatialReference)
                ) {
                  const t = new a.R9(this.urlTemplate);
                  (this.subDomains && this.subDomains.length > 0) ||
                    -1 === t.authority.indexOf('{subDomain}') ||
                    (e = "is missing 'subDomains' property");
                } else
                  e = 'spatialReference must match tileInfo.spatialReference';
              else e = "is missing the required 'urlTemplate' property value";
              if (e)
                throw new l.Z(
                  'web-tile-layer:load',
                  `WebTileLayer (title: '${this.title}', id: '${this.id}') ${e}`,
                );
            },
          );
          return this.addResolvingPromise(t), Promise.resolve(this);
        }
        get levelValues() {
          const e = [];
          if (!this.tileInfo) return null;
          for (const t of this.tileInfo.lods)
            e[t.level] = t.levelValue || t.level;
          return e;
        }
        readSpatialReference(e, t) {
          return (
            e ||
            (t.fullExtent &&
              t.fullExtent.spatialReference &&
              C.Z.fromJSON(t.fullExtent.spatialReference))
          );
        }
        get tileServers() {
          if (!this.urlTemplate) return null;
          const e = [],
            { urlTemplate: t, subDomains: r } = this,
            s = new a.R9(t),
            i = s.scheme ? s.scheme + '://' : '//',
            l = i + s.authority + '/';
          if (-1 === s.authority.indexOf('{subDomain}')) e.push(l);
          else if (r && r.length > 0 && s.authority.split('.').length > 1)
            for (const t of r)
              e.push(i + s.authority.replace(/\{subDomain\}/gi, t) + '/');
          return e.map(
            (e) => ('/' !== e.charAt(e.length - 1) && (e += '/'), e),
          );
        }
        get urlPath() {
          if (!this.urlTemplate) return null;
          const e = this.urlTemplate,
            t = new a.R9(e),
            r = (t.scheme ? t.scheme + '://' : '//') + t.authority + '/';
          return e.substring(r.length);
        }
        readUrlTemplate(e, t) {
          return e || t.templateUrl;
        }
        writeUrlTemplate(e, t) {
          e && (0, a.oC)(e) && (e = 'https:' + e),
            e &&
              ((e = e
                .replace(/\{z\}/gi, '{level}')
                .replace(/\{x\}/gi, '{col}')
                .replace(/\{y\}/gi, '{row}')),
              (e = (0, a.Fv)(e))),
            (t.templateUrl = e);
        }
        fetchTile(e, t, r, s = {}) {
          const { signal: l } = s,
            o = this.getTileUrl(e, t, r),
            n = {
              responseType: 'image',
              signal: l,
              query: { ...this.refreshParameters },
            };
          return (0, i.default)(o, n).then((e) => e.data);
        }
        getTileUrl(e, t, r) {
          const s = this.levelValues[e];
          return (
            this.tileServers[t % this.tileServers.length] +
            (0, n.gx)(this.urlPath, {
              level: s,
              z: s,
              col: r,
              x: r,
              row: t,
              y: t,
            })
          );
        }
      };
      (0, s._)(
        [(0, p.Cb)({ type: String, value: '', json: { write: !0 } })],
        I.prototype,
        'copyright',
        void 0,
      ),
        (0, s._)(
          [(0, p.Cb)({ type: S.Z, json: { write: !0 }, nonNullable: !0 })],
          I.prototype,
          'fullExtent',
          void 0,
        ),
        (0, s._)(
          [(0, p.Cb)({ readOnly: !0, json: { read: !1, write: !1 } })],
          I.prototype,
          'legendEnabled',
          void 0,
        ),
        (0, s._)(
          [(0, p.Cb)({ type: ['show', 'hide'] })],
          I.prototype,
          'listMode',
          void 0,
        ),
        (0, s._)([(0, p.Cb)()], I.prototype, 'levelValues', null),
        (0, s._)(
          [
            (0, p.Cb)({
              type: Boolean,
              json: {
                read: !1,
                write: { enabled: !0, overridePolicy: () => ({ enabled: !1 }) },
              },
            }),
          ],
          I.prototype,
          'isReference',
          void 0,
        ),
        (0, s._)(
          [(0, p.Cb)({ type: ['WebTiledLayer'], value: 'WebTiledLayer' })],
          I.prototype,
          'operationalLayerType',
          void 0,
        ),
        (0, s._)(
          [(0, p.Cb)({ readOnly: !0, json: { read: !1, write: !1 } })],
          I.prototype,
          'popupEnabled',
          void 0,
        ),
        (0, s._)(
          [(0, p.Cb)({ type: C.Z })],
          I.prototype,
          'spatialReference',
          void 0,
        ),
        (0, s._)(
          [
            (0, u.r)('spatialReference', [
              'spatialReference',
              'fullExtent.spatialReference',
            ]),
          ],
          I.prototype,
          'readSpatialReference',
          null,
        ),
        (0, s._)(
          [(0, p.Cb)({ type: [String], json: { write: !0 } })],
          I.prototype,
          'subDomains',
          void 0,
        ),
        (0, s._)(
          [(0, p.Cb)({ type: w.Z, json: { write: !0 } })],
          I.prototype,
          'tileInfo',
          void 0,
        ),
        (0, s._)(
          [(0, p.Cb)({ readOnly: !0 })],
          I.prototype,
          'tileServers',
          null,
        ),
        (0, s._)(
          [(0, p.Cb)({ json: { read: !1 } })],
          I.prototype,
          'type',
          void 0,
        ),
        (0, s._)([(0, p.Cb)()], I.prototype, 'urlPath', null),
        (0, s._)(
          [
            (0, p.Cb)({
              type: String,
              json: { origins: { 'portal-item': { read: { source: 'url' } } } },
            }),
          ],
          I.prototype,
          'urlTemplate',
          void 0,
        ),
        (0, s._)(
          [(0, u.r)('urlTemplate', ['urlTemplate', 'templateUrl'])],
          I.prototype,
          'readUrlTemplate',
          null,
        ),
        (0, s._)(
          [(0, h.c)('urlTemplate', { templateUrl: { type: String } })],
          I.prototype,
          'writeUrlTemplate',
          null,
        ),
        (0, s._)(
          [(0, p.Cb)({ type: _.Z, json: { write: !0 } })],
          I.prototype,
          'wmtsInfo',
          void 0,
        ),
        (I = (0, s._)([(0, c.j)('esri.layers.WebTileLayer')], I));
      const Z = I;
    },
    16859: (e, t, r) => {
      r.d(t, { I: () => w });
      var s = r(43697),
        i = r(40330),
        l = r(3172),
        o = r(66643),
        n = r(20102),
        a = r(92604),
        p = r(70586),
        u = r(95330),
        c = r(17452),
        h = r(5600),
        d = (r(67676), r(80442), r(75215), r(71715)),
        y = r(52011),
        f = r(30556),
        m = r(65587),
        v = r(15235),
        g = r(86082);
      const b = a.Z.getLogger('esri.layers.mixins.PortalLayer'),
        w = (e) => {
          let t = class extends e {
            constructor() {
              super(...arguments),
                (this.resourceReferences = { portalItem: null, paths: [] }),
                (this.userHasEditingPrivileges = !0);
            }
            destroy() {
              var e;
              null == (e = this.portalItem) || e.destroy(),
                (this.portalItem = null);
            }
            set portalItem(e) {
              e !== this._get('portalItem') &&
                (this.removeOrigin('portal-item'), this._set('portalItem', e));
            }
            readPortalItem(e, t, r) {
              if (t.itemId)
                return new v.default({ id: t.itemId, portal: r && r.portal });
            }
            writePortalItem(e, t) {
              e && e.id && (t.itemId = e.id);
            }
            async loadFromPortal(e, t) {
              if (this.portalItem && this.portalItem.id)
                try {
                  const s = await r.e(8062).then(r.bind(r, 18062));
                  return (
                    (0, u.k_)(t),
                    await s.load(
                      {
                        instance: this,
                        supportedTypes: e.supportedTypes,
                        validateItem: e.validateItem,
                        supportsData: e.supportsData,
                      },
                      t,
                    )
                  );
                } catch (e) {
                  throw (
                    ((0, u.D_)(e) ||
                      b.warn(
                        `Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${e}`,
                      ),
                    e)
                  );
                }
            }
            async finishLoadEditablePortalLayer(e) {
              this._set(
                'userHasEditingPrivileges',
                await this._fetchUserHasEditingPrivileges(e).catch(
                  (e) => ((0, u.r9)(e), !0),
                ),
              );
            }
            async _fetchUserHasEditingPrivileges(e) {
              const t = this.url
                ? null == i.id
                  ? void 0
                  : i.id.findCredential(this.url)
                : null;
              if (!t) return !0;
              const r =
                _.credential === t ? _.user : await this._fetchEditingUser(e);
              return (
                (_.credential = t),
                (_.user = r),
                (0, p.Wi)(r) ||
                  null == r.privileges ||
                  r.privileges.includes('features:user:edit')
              );
            }
            async _fetchEditingUser(e) {
              var t, r;
              const s =
                null == (t = this.portalItem) || null == (r = t.portal)
                  ? void 0
                  : r.user;
              if (s) return s;
              const n = i.id.findServerInfo(this.url);
              if (null == n || !n.owningSystemUrl) return null;
              const a = `${n.owningSystemUrl}/sharing/rest`,
                u = m.Z.getDefault();
              if (u && u.loaded && (0, c.Fv)(u.restUrl) === (0, c.Fv)(a))
                return u.user;
              const h = `${a}/community/self`,
                d = (0, p.pC)(e) ? e.signal : null,
                y = await (0, o.q6)(
                  (0, l.default)(h, {
                    authMode: 'no-prompt',
                    query: { f: 'json' },
                    signal: d,
                  }),
                );
              return y.ok ? g.default.fromJSON(y.value.data) : null;
            }
            read(e, t) {
              t && (t.layer = this), super.read(e, t);
            }
            write(e, t) {
              const r = t && t.portal,
                s =
                  this.portalItem &&
                  this.portalItem.id &&
                  (this.portalItem.portal || m.Z.getDefault());
              return r && s && !(0, c.tm)(s.restUrl, r.restUrl)
                ? (t.messages &&
                    t.messages.push(
                      new n.Z(
                        'layer:cross-portal',
                        `The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save the scene, set the layer.portalItem to null or save the scene to the same portal as the item associated with the layer`,
                        { layer: this },
                      ),
                    ),
                  null)
                : super.write(e, { ...t, layer: this });
            }
          };
          return (
            (0, s._)(
              [(0, h.Cb)({ type: v.default })],
              t.prototype,
              'portalItem',
              null,
            ),
            (0, s._)(
              [(0, d.r)('web-document', 'portalItem', ['itemId'])],
              t.prototype,
              'readPortalItem',
              null,
            ),
            (0, s._)(
              [
                (0, f.c)('web-document', 'portalItem', {
                  itemId: { type: String },
                }),
              ],
              t.prototype,
              'writePortalItem',
              null,
            ),
            (0, s._)(
              [(0, h.Cb)({ clonable: !1 })],
              t.prototype,
              'resourceReferences',
              void 0,
            ),
            (0, s._)(
              [(0, h.Cb)({ readOnly: !0 })],
              t.prototype,
              'userHasEditingPrivileges',
              void 0,
            ),
            (t = (0, s._)([(0, y.j)('esri.layers.mixins.PortalLayer')], t)),
            t
          );
        },
        _ = { credential: null, user: null };
    },
    34760: (e, t, r) => {
      r.d(t, { Q: () => v });
      var s = r(43697),
        i = r(92604),
        l = r(95330),
        o = r(5600),
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
        f = 0;
      function m() {
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
        if (t !== f) {
          if (((f = t), clearInterval(y), 0 === f)) return void (y = 0);
          y = setInterval(m, f);
        }
      });
      const v = (e) => {
        let t = class extends e {
          constructor(...e) {
            super(...e),
              (this.refreshInterval = 0),
              (this.refreshTimestamp = 0),
              (this._debounceHasDataChanged = (0, l.Ds)(() =>
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
            (0, l.R8)(this._debounceHasDataChanged()).then(
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
              (0, o.Cb)({
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
            [(0, o.Cb)({ readOnly: !0 })],
            t.prototype,
            'refreshTimestamp',
            void 0,
          ),
          (0, s._)([(0, o.Cb)()], t.prototype, 'refreshParameters', null),
          (t = (0, s._)([(0, n.j)('esri.layers.mixins.RefreshableLayer')], t)),
          t
        );
      };
    },
    39450: (e, t, r) => {
      r.d(t, { Z: () => u });
      var s,
        i = r(43697),
        l = r(96674),
        o = r(5600),
        n = (r(67676), r(80442), r(75215)),
        a = r(52011);
      let p = (s = class extends l.wq {
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
          (0, o.Cb)({
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
          [(0, o.Cb)({ type: n.z8, json: { write: !0 } })],
          p.prototype,
          'level',
          void 0,
        ),
        (0, i._)(
          [(0, o.Cb)({ type: String, json: { write: !0 } })],
          p.prototype,
          'levelValue',
          void 0,
        ),
        (0, i._)(
          [
            (0, o.Cb)({
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
          [(0, o.Cb)({ type: Number, json: { write: !0 } })],
          p.prototype,
          'resolution',
          void 0,
        ),
        (0, i._)(
          [
            (0, o.Cb)({
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
          [(0, o.Cb)({ type: Number, json: { write: !0 } })],
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
        l = r(35454),
        o = r(96674),
        n = r(70586),
        a = r(67900),
        p = r(5600),
        u = (r(67676), r(80442), r(75215)),
        c = r(71715),
        h = r(52011),
        d = r(30556),
        y = r(13473),
        f = r(82971),
        m = r(24470),
        v = r(8744),
        g = r(40488),
        b = r(39450);
      const w = new l.X({
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
      let _ = (s = class extends o.wq {
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
            spatialReference: l = f.Z.WebMercator,
            numLODs: o = 24,
          } = e;
          if (!(0, v.JY)(l)) {
            const e = [];
            if (r)
              for (let t = 0; t < r.length; t++) {
                const s = r[t];
                e.push({ level: t, scale: s, resolution: s });
              }
            else {
              let t = 5e-4;
              for (let r = o - 1; r >= 0; r--)
                e.unshift({ level: r, scale: t, resolution: t }), (t *= 2);
            }
            return new s({
              dpi: 96,
              lods: e,
              origin: new y.Z(0, 0, l),
              size: [i, i],
              spatialReference: l,
            });
          }
          const n = (0, v.C5)(l),
            p = e.origin
              ? new y.Z({ x: e.origin.x, y: e.origin.y, spatialReference: l })
              : new y.Z(
                  n
                    ? { x: n.origin[0], y: n.origin[1], spatialReference: l }
                    : { x: 0, y: 0, spatialReference: l },
                ),
            u = 1 / (39.37 * (0, a.c9)(l) * 96),
            c = [];
          if (r)
            for (let e = 0; e < r.length; e++) {
              const t = r[e],
                s = t * u;
              c.push({ level: e, scale: t, resolution: s });
            }
          else {
            let e = (0, v.sT)(l)
              ? (512 / i) * 591657527.5917094
              : (256 / i) * 591657527.591555;
            const r = Math.ceil(o / t);
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
            spatialReference: l,
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
          let l, o;
          if ('number' == typeof t) (l = t), (o = r);
          else if ((0, v.fS)(t.spatialReference, this.spatialReference))
            (l = t.x), (o = t.y), (s = r);
          else {
            const e = (0, g.iV)(t, this.spatialReference);
            if ((0, n.Wi)(e)) return null;
            (l = e.x), (o = e.y), (s = r);
          }
          const a = i.resolution * this.size[0],
            p = i.resolution * this.size[1];
          return (
            s ||
              (s = { id: null, level: 0, row: 0, col: 0, extent: (0, m.Ue)() }),
            (s.level = e),
            (s.row = Math.floor((this.origin.y - o) / p + 0.001)),
            (s.col = Math.floor((l - this.origin.x) / a + 0.001)),
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
            l = (r.resolution * this.size[0]) / 2 ** i,
            o = (r.resolution * this.size[1]) / 2 ** i;
          (e.id = `${e.level}/${e.row}/${e.col}`),
            e.extent || (e.extent = (0, m.Ue)()),
            (e.extent[0] = this.origin.x + e.col * l),
            (e.extent[1] = this.origin.y - (e.row + 1) * o),
            (e.extent[2] = e.extent[0] + l),
            (e.extent[3] = e.extent[1] + o);
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
            r.push(new b.Z({ level: s.level, scale: s.scale, resolution: i }));
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
      var S, C;
      (0, i._)(
        [(0, p.Cb)({ type: Number, json: { write: !0 } })],
        _.prototype,
        'compressionQuality',
        void 0,
      ),
        (0, i._)(
          [(0, p.Cb)({ type: Number, json: { write: !0 } })],
          _.prototype,
          'dpi',
          void 0,
        ),
        (0, i._)(
          [
            (0, p.Cb)({
              type: String,
              json: {
                read: w.read,
                write: w.write,
                origins: { 'web-scene': { read: !1, write: !1 } },
              },
            }),
          ],
          _.prototype,
          'format',
          void 0,
        ),
        (0, i._)(
          [(0, p.Cb)({ readOnly: !0 })],
          _.prototype,
          'isWrappable',
          null,
        ),
        (0, i._)(
          [(0, p.Cb)({ type: y.Z, json: { write: !0 } })],
          _.prototype,
          'origin',
          void 0,
        ),
        (0, i._)([(0, c.r)('origin')], _.prototype, 'readOrigin', null),
        (0, i._)(
          [(0, p.Cb)({ type: [b.Z], value: null, json: { write: !0 } })],
          _.prototype,
          'lods',
          null,
        ),
        (0, i._)(
          [(0, p.Cb)({ readOnly: !0 })],
          _.prototype,
          'minScale',
          void 0,
        ),
        (0, i._)(
          [(0, p.Cb)({ readOnly: !0 })],
          _.prototype,
          'maxScale',
          void 0,
        ),
        (0, i._)([(0, p.Cb)({ readOnly: !0 })], _.prototype, 'scales', void 0),
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
          _.prototype,
          'size',
          void 0,
        ),
        (0, i._)(
          [(0, c.r)('size', ['rows', 'cols'])],
          _.prototype,
          'readSize',
          null,
        ),
        (0, i._)(
          [(0, d.c)('size', { cols: { type: u.z8 }, rows: { type: u.z8 } })],
          _.prototype,
          'writeSize',
          null,
        ),
        (0, i._)(
          [(0, p.Cb)({ type: f.Z, json: { write: !0 } })],
          _.prototype,
          'spatialReference',
          void 0,
        ),
        (_ = s = (0, i._)([(0, h.j)('esri.layers.support.TileInfo')], _)),
        ((C =
          (S = _ || (_ = {})).ExtrapolateOptions ||
          (S.ExtrapolateOptions = {}))[(C.NONE = 0)] = 'NONE'),
        (C[(C.POWER_OF_TWO = 1)] = 'POWER_OF_TWO');
      const O = _;
    },
    5833: (e, t, r) => {
      r.d(t, { Z: () => u });
      var s,
        i = r(43697),
        l = r(96674),
        o = r(22974),
        n = r(5600),
        a = (r(75215), r(52011));
      let p = (s = class extends l.wq {
        constructor(e) {
          super(e);
        }
        clone() {
          return new s({
            customLayerParameters: (0, o.d9)(this.customLayerParameters),
            customParameters: (0, o.d9)(this.customParameters),
            layerIdentifier: this.layerIdentifier,
            tileMatrixSet: this.tileMatrixSet,
            url: this.url,
          });
        }
      });
      (0, i._)(
        [(0, n.Cb)({ json: { type: Object, write: !0 } })],
        p.prototype,
        'customLayerParameters',
        void 0,
      ),
        (0, i._)(
          [(0, n.Cb)({ json: { type: Object, write: !0 } })],
          p.prototype,
          'customParameters',
          void 0,
        ),
        (0, i._)(
          [(0, n.Cb)({ type: String, json: { write: !0 } })],
          p.prototype,
          'layerIdentifier',
          void 0,
        ),
        (0, i._)(
          [(0, n.Cb)({ type: String, json: { write: !0 } })],
          p.prototype,
          'tileMatrixSet',
          void 0,
        ),
        (0, i._)(
          [(0, n.Cb)({ type: String, json: { write: !0 } })],
          p.prototype,
          'url',
          void 0,
        ),
        (p = s = (0, i._)([(0, a.j)('esri.layer.support.WMTSLayerInfo')], p));
      const u = p;
    },
    99282: (e, t, r) => {
      r.d(t, { a: () => l });
      var s = r(67900),
        i = r(68441);
      const l = {
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
      r.d(t, { a: () => i, b: () => l });
      var s = r(75215);
      function i(e) {
        const t = (0, s.vU)(100 * (1 - e));
        return Math.max(0, Math.min(t, 100));
      }
      function l(e) {
        const t = 1 - e / 100;
        return Math.max(0, Math.min(t, 1));
      }
    },
  },
]);
