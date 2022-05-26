'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [1197],
  {
    10699: (e, t, r) => {
      r.d(t, { I: () => s });
      var i = r(43697),
        o = r(52011);
      let n = 0;
      const s = (e) => {
        let t = class extends e {
          constructor(...e) {
            super(...e),
              Object.defineProperty(this, 'uid', {
                writable: !1,
                configurable: !1,
                value: Date.now().toString(16) + '-object-' + n++,
              });
          }
        };
        return (t = (0, i._)([(0, o.j)('esri.core.Identifiable')], t)), t;
      };
      let l = class extends s(class {}) {};
      l = (0, i._)([(0, o.j)('esri.core.Identifiable')], l);
    },
    16453: (e, t, r) => {
      r.d(t, { R: () => m, w: () => w });
      var i = r(43697),
        o = r(15923),
        n = r(70586),
        s = r(41103),
        l = r(22974),
        a = r(31263);
      class d {
        constructor() {
          (this._propertyOriginMap = new Map()),
            (this._originStores = new Array(a.kk)),
            (this._values = new Map()),
            (this.multipleOriginsSupported = !0);
        }
        clone(e) {
          const t = new d(),
            r = this._originStores[a.s3.DEFAULTS];
          r &&
            r.forEach((e, r) => {
              t.set(r, (0, l.d9)(e), a.s3.DEFAULTS);
            });
          for (let r = a.s3.SERVICE; r < a.kk; r++) {
            const i = this._originStores[r];
            i &&
              i.forEach((i, o) => {
                (e && e.has(o)) || t.set(o, (0, l.d9)(i), r);
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
          let i = this._originStores[r];
          if (
            (i || ((i = new Map()), (this._originStores[r] = i)),
            i.set(e, t),
            !this._values.has(e) ||
              (0, n.j0)(this._propertyOriginMap.get(e)) <= r)
          ) {
            const i = this._values.get(e);
            return (
              this._values.set(e, t), this._propertyOriginMap.set(e, r), i !== t
            );
          }
          return !1;
        }
        delete(e, t = a.s3.USER) {
          const r = this._originStores[t];
          if (!r) return;
          const i = r.get(e);
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
          return i;
        }
        has(e, t) {
          const r = void 0 === t ? this._values : this._originStores[t];
          return !!r && r.has(e);
        }
        revert(e, t) {
          for (; t > 0 && !this.has(e, t); ) --t;
          const r = this._originStores[t],
            i = r && r.get(e),
            o = this._values.get(e);
          return (
            this._values.set(e, i), this._propertyOriginMap.set(e, t), o !== i
          );
        }
        originOf(e) {
          return this._propertyOriginMap.get(e) || a.s3.DEFAULTS;
        }
        forEach(e) {
          this._values.forEach(e);
        }
      }
      var p = r(50549),
        u = r(1153),
        c = r(52011);
      const y = (e) => {
        let t = class extends e {
          constructor(...e) {
            super(...e);
            const t = (0, n.j0)((0, u.vw)(this)),
              r = t.store,
              i = new d();
            (t.store = i), (0, s.M)(t, r, i);
          }
          read(e, t) {
            (0, p.i)(this, e, t);
          }
          getAtOrigin(e, t) {
            const r = h(this),
              i = (0, a.M9)(t);
            if ('string' == typeof e) return r.get(e, i);
            const o = {};
            return (
              e.forEach((e) => {
                o[e] = r.get(e, i);
              }),
              o
            );
          }
          originOf(e) {
            return (0, a.x3)(this.originIdOf(e));
          }
          originIdOf(e) {
            return h(this).originOf(e);
          }
          revert(e, t) {
            const r = h(this),
              i = (0, a.M9)(t),
              o = (0, u.vw)(this);
            let n;
            (n = 'string' == typeof e ? ('*' === e ? r.keys(i) : [e]) : e),
              n.forEach((e) => {
                o.invalidate(e), r.revert(e, i), o.commit(e);
              });
          }
        };
        return (
          (t = (0, i._)(
            [(0, c.j)('esri.core.ReadOnlyMultiOriginJSONSupport')],
            t,
          )),
          t
        );
      };
      function h(e) {
        return (0, u.vw)(e).store;
      }
      let f = class extends y(o.Z) {};
      f = (0, i._)([(0, c.j)('esri.core.ReadOnlyMultiOriginJSONSupport')], f);
      var g = r(76169);
      const v = (e) => {
        let t = class extends e {
          constructor(...e) {
            super(...e);
          }
          clear(e, t = 'user') {
            return b(this).delete(e, (0, a.M9)(t));
          }
          write(e = {}, t) {
            return (0, g.c)(this, (e = e || {}), t), e;
          }
          setAtOrigin(e, t, r) {
            (0, u.vw)(this).setAtOrigin(e, t, (0, a.M9)(r));
          }
          removeOrigin(e) {
            const t = b(this),
              r = (0, a.M9)(e),
              i = t.keys(r);
            for (const e of i)
              t.originOf(e) === r && t.set(e, t.get(e, r), a.s3.USER);
          }
          updateOrigin(e, t) {
            const r = b(this),
              i = (0, a.M9)(t),
              o = this.get(e);
            for (let t = i + 1; t < a.kk; ++t) r.delete(e, t);
            r.set(e, o, i);
          }
          toJSON(e) {
            return this.write({}, e);
          }
        };
        return (
          (t = (0, i._)(
            [(0, c.j)('esri.core.WriteableMultiOriginJSONSupport')],
            t,
          )),
          (t.prototype.toJSON.isDefaultToJSON = !0),
          t
        );
      };
      function b(e) {
        return (0, u.vw)(e).store;
      }
      const m = (e) => {
        let t = class extends v(y(e)) {
          constructor(...e) {
            super(...e);
          }
        };
        return (
          (t = (0, i._)([(0, c.j)('esri.core.MultiOriginJSONSupport')], t)), t
        );
      };
      let w = class extends m(o.Z) {};
      w = (0, i._)([(0, c.j)('esri.core.MultiOriginJSONSupport')], w);
    },
    79235: (e, t, r) => {
      r.d(t, { Z: () => m });
      var i,
        o = r(43697),
        n = r(67676),
        s = r(35454),
        l = r(96674),
        a = r(67900),
        d = r(20941),
        p = r(5600),
        u = (r(80442), r(75215), r(71715)),
        c = r(52011),
        y = r(30556);
      const h = (0, s.w)()({
          orthometric: 'gravity-related-height',
          gravity_related_height: 'gravity-related-height',
          ellipsoidal: 'ellipsoidal',
        }),
        f = h.jsonValues.slice();
      (0, n.e$)(f, 'orthometric');
      const g = (0, s.w)()({
        meter: 'meters',
        foot: 'feet',
        'us-foot': 'us-feet',
        'clarke-foot': 'clarke-feet',
        'clarke-yard': 'clarke-yards',
        'clarke-link': 'clarke-links',
        'sears-yard': 'sears-yards',
        'sears-foot': 'sears-feet',
        'sears-chain': 'sears-chains',
        'benoit-1895-b-chain': 'benoit-1895-b-chains',
        'indian-yard': 'indian-yards',
        'indian-1937-yard': 'indian-1937-yards',
        'gold-coast-foot': 'gold-coast-feet',
        'sears-1922-truncated-chain': 'sears-1922-truncated-chains',
        '50-kilometers': '50-kilometers',
        '150-kilometers': '150-kilometers',
      });
      let v = (i = class extends l.wq {
        constructor(e) {
          super(e),
            (this.heightModel = 'gravity-related-height'),
            (this.heightUnit = 'meters'),
            (this.vertCRS = null);
        }
        writeHeightModel(e, t, r) {
          return h.write(e, t, r);
        }
        readHeightModel(e, t, r) {
          return (
            h.read(e) ||
            (r &&
              r.messages &&
              r.messages.push(
                (function (e, t) {
                  return new d.Z(
                    'height-model:unsupported',
                    `Height model of value '${e}' is not supported`,
                    t,
                  );
                })(e, { context: r }),
              ),
            null)
          );
        }
        readHeightUnit(e, t, r) {
          return (
            g.read(e) ||
            (r && r.messages && r.messages.push(b(e, { context: r })), null)
          );
        }
        readHeightUnitService(e, t, r) {
          return (
            (0, a.$C)(e) ||
            g.read(e) ||
            (r && r.messages && r.messages.push(b(e, { context: r })), null)
          );
        }
        readVertCRS(e, t) {
          return t.vertCRS || t.ellipsoid || t.geoid;
        }
        clone() {
          return new i({
            heightModel: this.heightModel,
            heightUnit: this.heightUnit,
            vertCRS: this.vertCRS,
          });
        }
        equals(e) {
          return (
            !!e &&
            (this === e ||
              (this.heightModel === e.heightModel &&
                this.heightUnit === e.heightUnit &&
                this.vertCRS === e.vertCRS))
          );
        }
        static deriveUnitFromSR(e, t) {
          const r = (0, a.cM)(t);
          return new i({
            heightModel: e.heightModel,
            heightUnit: r,
            vertCRS: e.vertCRS,
          });
        }
        write(e, t) {
          return (t = { origin: 'web-scene', ...t }), super.write(e, t);
        }
        static fromJSON(e) {
          if (!e) return null;
          const t = new i();
          return t.read(e, { origin: 'web-scene' }), t;
        }
      });
      function b(e, t) {
        return new d.Z(
          'height-unit:unsupported',
          `Height unit of value '${e}' is not supported`,
          t,
        );
      }
      (0, o._)(
        [
          (0, p.Cb)({
            type: h.apiValues,
            constructOnly: !0,
            json: {
              origins: { 'web-scene': { type: f, default: 'ellipsoidal' } },
            },
          }),
        ],
        v.prototype,
        'heightModel',
        void 0,
      ),
        (0, o._)(
          [(0, y.c)('web-scene', 'heightModel')],
          v.prototype,
          'writeHeightModel',
          null,
        ),
        (0, o._)(
          [(0, u.r)(['web-scene', 'service'], 'heightModel')],
          v.prototype,
          'readHeightModel',
          null,
        ),
        (0, o._)(
          [
            (0, p.Cb)({
              type: g.apiValues,
              constructOnly: !0,
              json: {
                origins: {
                  'web-scene': { type: g.jsonValues, write: g.write },
                },
              },
            }),
          ],
          v.prototype,
          'heightUnit',
          void 0,
        ),
        (0, o._)(
          [(0, u.r)('web-scene', 'heightUnit')],
          v.prototype,
          'readHeightUnit',
          null,
        ),
        (0, o._)(
          [(0, u.r)('service', 'heightUnit')],
          v.prototype,
          'readHeightUnitService',
          null,
        ),
        (0, o._)(
          [
            (0, p.Cb)({
              type: String,
              constructOnly: !0,
              json: { origins: { 'web-scene': { write: !0 } } },
            }),
          ],
          v.prototype,
          'vertCRS',
          void 0,
        ),
        (0, o._)(
          [(0, u.r)('service', 'vertCRS', ['vertCRS', 'ellipsoid', 'geoid'])],
          v.prototype,
          'readVertCRS',
          null,
        ),
        (v = i = (0, o._)([(0, c.j)('esri.geometry.HeightModelInfo')], v));
      const m = v;
    },
    29600: (e, t, r) => {
      r.d(t, { Z: () => w });
      var i = r(43697),
        o = r(68773),
        n = (r(66577), r(3172)),
        s = r(20102),
        l = r(32448),
        a = r(10699),
        d = r(83379),
        p = r(92604),
        u = r(95330),
        c = r(17452),
        y = r(5600),
        h = (r(67676), r(80442), r(75215), r(52011)),
        f = r(6570),
        g = r(82971);
      let v = 0;
      const b = p.Z.getLogger('esri.layers.Layer');
      let m = class extends l.Z.EventedMixin((0, a.I)(d.Z)) {
        constructor() {
          super(...arguments),
            (this.attributionDataUrl = null),
            (this.fullExtent = new f.Z(-180, -90, 180, 90, g.Z.WGS84)),
            (this.id = Date.now().toString(16) + '-layer-' + v++),
            (this.legendEnabled = !0),
            (this.listMode = 'show'),
            (this.opacity = 1),
            (this.parent = null),
            (this.popupEnabled = !0),
            (this.attributionVisible = !0),
            (this.spatialReference = g.Z.WGS84),
            (this.title = null),
            (this.type = null),
            (this.url = null),
            (this.visible = !0);
        }
        static async fromArcGISServerUrl(e) {
          const t = 'string' == typeof e ? { url: e } : e,
            i = await r.e(3529).then(r.bind(r, 63529));
          try {
            return await i.fromUrl(t);
          } catch (e) {
            throw (
              (b.error(
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
            i = await r.e(4579).then(r.bind(r, 44579));
          try {
            return await i.fromItem(t);
          } catch (e) {
            const r = t && t.portalItem,
              i = (r && r.id) || 'unset',
              n = (r && r.portal && r.portal.url) || o.Z.portalUrl;
            throw (
              (b.error(
                '#fromPortalItem()',
                "Failed to create layer from portal item (portal: '" +
                  n +
                  "', id: '" +
                  i +
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
            (0, u.D_)(e) ||
              p.Z.getLogger(this.declaredClass).error(
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
          return e ? (0, c.mN)(e) : null;
        }
        async fetchAttributionData() {
          const e = this.attributionDataUrl;
          if (this.hasAttributionData && e)
            return (
              await (0, n.default)(e, {
                query: { f: 'json' },
                responseType: 'json',
              })
            ).data;
          throw new s.Z(
            'layer:no-attribution-data',
            'Layer does not have attribution data',
          );
        }
      };
      (0, i._)(
        [(0, y.Cb)({ type: String })],
        m.prototype,
        'attributionDataUrl',
        void 0,
      ),
        (0, i._)([(0, y.Cb)({ type: f.Z })], m.prototype, 'fullExtent', void 0),
        (0, i._)(
          [(0, y.Cb)({ readOnly: !0 })],
          m.prototype,
          'hasAttributionData',
          null,
        ),
        (0, i._)(
          [(0, y.Cb)({ type: String, clonable: !1 })],
          m.prototype,
          'id',
          void 0,
        ),
        (0, i._)(
          [(0, y.Cb)({ type: Boolean, nonNullable: !0 })],
          m.prototype,
          'legendEnabled',
          void 0,
        ),
        (0, i._)(
          [(0, y.Cb)({ type: ['show', 'hide', 'hide-children'] })],
          m.prototype,
          'listMode',
          void 0,
        ),
        (0, i._)(
          [
            (0, y.Cb)({
              type: Number,
              range: { min: 0, max: 1 },
              nonNullable: !0,
            }),
          ],
          m.prototype,
          'opacity',
          void 0,
        ),
        (0, i._)([(0, y.Cb)({ clonable: !1 })], m.prototype, 'parent', void 0),
        (0, i._)([(0, y.Cb)({ readOnly: !0 })], m.prototype, 'parsedUrl', null),
        (0, i._)(
          [(0, y.Cb)({ type: Boolean })],
          m.prototype,
          'popupEnabled',
          void 0,
        ),
        (0, i._)(
          [(0, y.Cb)({ type: Boolean })],
          m.prototype,
          'attributionVisible',
          void 0,
        ),
        (0, i._)(
          [(0, y.Cb)({ type: g.Z })],
          m.prototype,
          'spatialReference',
          void 0,
        ),
        (0, i._)([(0, y.Cb)({ type: String })], m.prototype, 'title', void 0),
        (0, i._)(
          [(0, y.Cb)({ type: String, readOnly: !0, json: { read: !1 } })],
          m.prototype,
          'type',
          void 0,
        ),
        (0, i._)([(0, y.Cb)()], m.prototype, 'url', void 0),
        (0, i._)(
          [(0, y.Cb)({ type: Boolean, nonNullable: !0 })],
          m.prototype,
          'visible',
          void 0,
        ),
        (m = (0, i._)([(0, h.j)('esri.layers.Layer')], m));
      const w = m;
    },
    10608: (e, t, r) => {
      r.r(t), r.d(t, { default: () => te });
      var i = r(43697),
        o = r(51773),
        n = r(3172),
        s = r(20102),
        l = r(22974),
        a = r(92604),
        d = r(70586),
        p = r(16453),
        u = r(78286),
        c = r(95330),
        y = r(17452),
        h = r(5600),
        f = r(75215),
        g = r(71715),
        v = r(52011),
        b = r(30556),
        m = r(29600),
        w = r(54295),
        S = r(17287),
        _ = r(38009),
        C = r(16859),
        I = r(72965),
        x = r(32271),
        j = r(36030),
        T = r(96674);
      r(67676), r(80442);
      let L = class extends T.wq {
        constructor(e) {
          super(e), (this.field = null), (this.type = null);
        }
        clone() {
          return (
            console.warn(
              '.clone() is not implemented for ' + this.declaredClass,
            ),
            null
          );
        }
      };
      (0, i._)(
        [
          (0, h.Cb)({
            type: String,
            json: { write: { enabled: !0, isRequired: !0 } },
          }),
        ],
        L.prototype,
        'field',
        void 0,
      ),
        (0, i._)(
          [(0, h.Cb)({ readOnly: !0, nonNullable: !0, json: { read: !1 } })],
          L.prototype,
          'type',
          void 0,
        ),
        (L = (0, i._)(
          [(0, v.j)('esri.layers.pointCloudFilters.PointCloudFilter')],
          L,
        ));
      const O = L;
      var M;
      let R = (M = class extends O {
        constructor(e) {
          super(e),
            (this.requiredClearBits = null),
            (this.requiredSetBits = null),
            (this.type = 'bitfield');
        }
        clone() {
          return new M({
            field: this.field,
            requiredClearBits: (0, l.d9)(this.requiredClearBits),
            requiredSetBits: (0, l.d9)(this.requiredSetBits),
          });
        }
      });
      (0, i._)(
        [
          (0, h.Cb)({
            type: [f.z8],
            json: {
              write: {
                enabled: !0,
                overridePolicy() {
                  return { enabled: !0, isRequired: !this.requiredSetBits };
                },
              },
            },
          }),
        ],
        R.prototype,
        'requiredClearBits',
        void 0,
      ),
        (0, i._)(
          [
            (0, h.Cb)({
              type: [f.z8],
              json: {
                write: {
                  enabled: !0,
                  overridePolicy() {
                    return { enabled: !0, isRequired: !this.requiredClearBits };
                  },
                },
              },
            }),
          ],
          R.prototype,
          'requiredSetBits',
          void 0,
        ),
        (0, i._)(
          [(0, j.J)({ pointCloudBitfieldFilter: 'bitfield' })],
          R.prototype,
          'type',
          void 0,
        ),
        (R = M =
          (0, i._)(
            [
              (0, v.j)(
                'esri.layers.pointCloudFilters.PointCloudBitfieldFilter',
              ),
            ],
            R,
          ));
      const Z = R;
      var F;
      let V = (F = class extends O {
        constructor(e) {
          super(e), (this.includedReturns = []), (this.type = 'return');
        }
        clone() {
          return new F({
            field: this.field,
            includedReturns: (0, l.d9)(this.includedReturns),
          });
        }
      });
      (0, i._)(
        [
          (0, h.Cb)({
            type: [['firstOfMany', 'last', 'lastOfMany', 'single']],
            json: { write: { enabled: !0, isRequired: !0 } },
          }),
        ],
        V.prototype,
        'includedReturns',
        void 0,
      ),
        (0, i._)(
          [(0, j.J)({ pointCloudReturnFilter: 'return' })],
          V.prototype,
          'type',
          void 0,
        ),
        (V = F =
          (0, i._)(
            [(0, v.j)('esri.layers.pointCloudFilters.PointCloudReturnFilter')],
            V,
          ));
      const N = V;
      var E;
      let A = (E = class extends O {
        constructor(e) {
          super(e),
            (this.mode = 'exclude'),
            (this.type = 'value'),
            (this.values = []);
        }
        clone() {
          return new E({
            field: this.field,
            mode: this.mode,
            values: (0, l.d9)(this.values),
          });
        }
      });
      (0, i._)(
        [
          (0, h.Cb)({
            type: ['exclude', 'include'],
            json: { write: { enabled: !0, isRequired: !0 } },
          }),
        ],
        A.prototype,
        'mode',
        void 0,
      ),
        (0, i._)(
          [(0, j.J)({ pointCloudValueFilter: 'value' })],
          A.prototype,
          'type',
          void 0,
        ),
        (0, i._)(
          [
            (0, h.Cb)({
              type: [Number],
              json: { write: { enabled: !0, isRequired: !0 } },
            }),
          ],
          A.prototype,
          'values',
          void 0,
        ),
        (A = E =
          (0, i._)(
            [(0, v.j)('esri.layers.pointCloudFilters.PointCloudValueFilter')],
            A,
          ));
      const P = {
        key: 'type',
        base: O,
        typeMap: { value: A, bitfield: Z, return: N },
      };
      var q,
        k = r(21506),
        B = r(1231),
        D = r(53518),
        G = r(11223),
        U = r(23030),
        z = r(25848);
      let $ = (q = class extends z.Z {
        constructor(e) {
          super(e), (this.type = 'point-cloud-rgb'), (this.field = null);
        }
        clone() {
          return new q({
            ...this.cloneProperties(),
            field: (0, l.d9)(this.field),
          });
        }
      });
      (0, i._)(
        [(0, j.J)({ pointCloudRGBRenderer: 'point-cloud-rgb' })],
        $.prototype,
        'type',
        void 0,
      ),
        (0, i._)(
          [(0, h.Cb)({ type: String, json: { write: !0 } })],
          $.prototype,
          'field',
          void 0,
        ),
        ($ = q =
          (0, i._)([(0, v.j)('esri.renderers.PointCloudRGBRenderer')], $));
      const J = $;
      var K = r(14008),
        W = r(46329);
      const H = {
        key: 'type',
        base: z.Z,
        typeMap: {
          'point-cloud-class-breaks': U.Z,
          'point-cloud-rgb': J,
          'point-cloud-stretch': K.Z,
          'point-cloud-unique-value': W.Z,
        },
        errorContext: 'renderer',
      };
      var X = r(32163);
      const Q = a.Z.getLogger('esri.layers.PointCloudLayer'),
        Y = (0, D.v)();
      let ee = class extends (0, x.Vt)(
        (0, S.Y)((0, _.q)((0, C.I)((0, I.M)((0, p.R)((0, w.V)(m.Z)))))),
      ) {
        constructor(...e) {
          super(...e),
            (this.operationalLayerType = 'PointCloudLayer'),
            (this.popupEnabled = !0),
            (this.popupTemplate = null),
            (this.opacity = 1),
            (this.filters = []),
            (this.fields = null),
            (this.fieldsIndex = null),
            (this.outFields = null),
            (this.path = null),
            (this.legendEnabled = !0),
            (this.renderer = null),
            (this.type = 'point-cloud');
        }
        normalizeCtorArgs(e, t) {
          return 'string' == typeof e ? { url: e, ...t } : e;
        }
        get defaultPopupTemplate() {
          return this.attributeStorageInfo ? this.createPopupTemplate() : null;
        }
        getFieldDomain(e) {
          const t = this.fieldsIndex.get(e);
          return t && t.domain ? t.domain : null;
        }
        readServiceFields(e, t, r) {
          return Array.isArray(e)
            ? e.map((e) => {
                const t = new B.Z();
                return (
                  'FieldTypeInteger' === e.type &&
                    ((e = (0, l.d9)(e)).type = 'esriFieldTypeInteger'),
                  t.read(e, r),
                  t
                );
              })
            : Array.isArray(t.attributeStorageInfo)
            ? t.attributeStorageInfo.map(
                (e) =>
                  new B.Z({
                    name: e.name,
                    type: 'ELEVATION' === e.name ? 'double' : 'integer',
                  }),
              )
            : null;
        }
        set elevationInfo(e) {
          this._set('elevationInfo', e), this._validateElevationInfo();
        }
        writeRenderer(e, t, r, i) {
          (0, u.RB)('layerDefinition.drawingInfo.renderer', e.write({}, i), t);
        }
        load(e) {
          const t = (0, d.pC)(e) ? e.signal : null,
            r = this.loadFromPortal({ supportedTypes: ['Scene Service'] }, e)
              .catch(c.r9)
              .then(() => this._fetchService(t));
          return this.addResolvingPromise(r), Promise.resolve(this);
        }
        createPopupTemplate(e) {
          const t = (0, X.eZ)(this, e);
          return (
            this._formatPopupTemplateReturnsField(t),
            this._formatPopupTemplateRGBField(t),
            t
          );
        }
        _formatPopupTemplateReturnsField(e) {
          const t = this.fieldsIndex.get('RETURNS');
          if (!t) return;
          const r = e.fieldInfos.find((e) => e.fieldName === t.name);
          if (!r) return;
          const i = new G.Z({
            name: 'pcl-returns-decoded',
            title: t.alias || t.name,
            expression: `\n        var returnValue = $feature.${t.name};\n        return (returnValue % 16) + " / " + Floor(returnValue / 16);\n      `,
          });
          (e.expressionInfos = [...(e.expressionInfos || []), i]),
            (r.fieldName = 'expression/pcl-returns-decoded');
        }
        _formatPopupTemplateRGBField(e) {
          const t = this.fieldsIndex.get('RGB');
          if (!t) return;
          const r = e.fieldInfos.find((e) => e.fieldName === t.name);
          if (!r) return;
          const i = new G.Z({
            name: 'pcl-rgb-decoded',
            title: t.alias || t.name,
            expression: `\n        var rgb = $feature.${t.name};\n        var red = Floor(rgb / 65536, 0);\n        var green = Floor((rgb - (red * 65536)) / 256,0);\n        var blue = rgb - (red * 65536) - (green * 256);\n\n        return "rgb(" + red + "," + green + "," + blue + ")";\n      `,
          });
          (e.expressionInfos = [...(e.expressionInfos || []), i]),
            (r.fieldName = 'expression/pcl-rgb-decoded');
        }
        async queryCachedStatistics(e, t) {
          if ((await this.load(t), !this.attributeStorageInfo))
            throw new s.Z(
              'scenelayer:no-cached-statistics',
              'Cached statistics are not available for this layer',
            );
          const r = this.fieldsIndex.get(e);
          if (!r)
            throw new s.Z(
              'pointcloudlayer:field-unexisting',
              `Field '${e}' does not exist on the layer`,
            );
          for (const e of this.attributeStorageInfo)
            if (e.name === r.name) {
              const r = (0, y.v_)(this.parsedUrl.path, `./statistics/${e.key}`);
              return (0, n.default)(r, {
                query: { f: 'json', token: this.apiKey },
                responseType: 'json',
                signal: t ? t.signal : null,
              }).then((e) => e.data);
            }
          throw new s.Z(
            'pointcloudlayer:no-cached-statistics',
            'Cached statistics for this attribute are not available',
          );
        }
        async saveAs(e, t) {
          return this._debouncedSaveOperations(
            x.xp.SAVE_AS,
            {
              ...t,
              getTypeKeywords: () => this._getTypeKeywords(),
              portalItemLayerType: 'point-cloud',
            },
            e,
          );
        }
        async save() {
          const e = {
            getTypeKeywords: () => this._getTypeKeywords(),
            portalItemLayerType: 'point-cloud',
          };
          return this._debouncedSaveOperations(x.xp.SAVE, e);
        }
        validateLayer(e) {
          if (e.layerType && 'PointCloud' !== e.layerType)
            throw new s.Z(
              'pointcloudlayer:layer-type-not-supported',
              'PointCloudLayer does not support this layer type',
              { layerType: e.layerType },
            );
          if (isNaN(this.version.major) || isNaN(this.version.minor))
            throw new s.Z(
              'layer:service-version-not-supported',
              'Service version is not supported.',
              {
                serviceVersion: this.version.versionString,
                supportedVersions: '1.x-2.x',
              },
            );
          if (this.version.major > 2)
            throw new s.Z(
              'layer:service-version-too-new',
              'Service version is too new.',
              {
                serviceVersion: this.version.versionString,
                supportedVersions: '1.x-2.x',
              },
            );
        }
        hasCachedStatistics(e) {
          return (
            null != this.attributeStorageInfo &&
            this.attributeStorageInfo.some((t) => t.name === e)
          );
        }
        _getTypeKeywords() {
          return ['PointCloud'];
        }
        _validateElevationInfo() {
          const e = this.elevationInfo;
          e &&
            ('absolute-height' !== e.mode &&
              Q.warn(
                '.elevationInfo=',
                'Point cloud layers only support absolute-height elevation mode',
              ),
            e.featureExpressionInfo &&
              '0' !== e.featureExpressionInfo.expression &&
              Q.warn(
                '.elevationInfo=',
                'Point cloud layers do not support featureExpressionInfo',
              ));
        }
      };
      (0, i._)(
        [(0, h.Cb)({ type: ['PointCloudLayer'] })],
        ee.prototype,
        'operationalLayerType',
        void 0,
      ),
        (0, i._)([(0, h.Cb)(k.C_)], ee.prototype, 'popupEnabled', void 0),
        (0, i._)(
          [(0, h.Cb)({ type: o.Z, json: { name: 'popupInfo', write: !0 } })],
          ee.prototype,
          'popupTemplate',
          void 0,
        ),
        (0, i._)(
          [(0, h.Cb)({ readOnly: !0, json: { read: !1 } })],
          ee.prototype,
          'defaultPopupTemplate',
          null,
        ),
        (0, i._)(
          [
            (0, h.Cb)({
              readOnly: !0,
              json: {
                write: !1,
                read: !1,
                origins: { 'web-document': { write: !1, read: !1 } },
              },
            }),
          ],
          ee.prototype,
          'opacity',
          void 0,
        ),
        (0, i._)(
          [(0, h.Cb)({ type: ['show', 'hide'] })],
          ee.prototype,
          'listMode',
          void 0,
        ),
        (0, i._)(
          [
            (0, h.Cb)({
              types: [P],
              json: {
                origins: { service: { read: { source: 'filters' } } },
                name: 'layerDefinition.filters',
                write: !0,
              },
            }),
          ],
          ee.prototype,
          'filters',
          void 0,
        ),
        (0, i._)([(0, h.Cb)({ type: [B.Z] })], ee.prototype, 'fields', void 0),
        (0, i._)(
          [(0, h.Cb)(Y.fieldsIndex)],
          ee.prototype,
          'fieldsIndex',
          void 0,
        ),
        (0, i._)(
          [(0, g.r)('service', 'fields', ['fields', 'attributeStorageInfo'])],
          ee.prototype,
          'readServiceFields',
          null,
        ),
        (0, i._)([(0, h.Cb)(Y.outFields)], ee.prototype, 'outFields', void 0),
        (0, i._)(
          [(0, h.Cb)({ readOnly: !0 })],
          ee.prototype,
          'attributeStorageInfo',
          void 0,
        ),
        (0, i._)([(0, h.Cb)(k.PV)], ee.prototype, 'elevationInfo', null),
        (0, i._)(
          [
            (0, h.Cb)({
              type: String,
              json: {
                origins: {
                  'web-scene': { read: !0, write: !0 },
                  'portal-item': { read: !0, write: !0 },
                },
                read: !1,
              },
            }),
          ],
          ee.prototype,
          'path',
          void 0,
        ),
        (0, i._)([(0, h.Cb)(k.rn)], ee.prototype, 'legendEnabled', void 0),
        (0, i._)(
          [
            (0, h.Cb)({
              types: H,
              json: {
                origins: {
                  service: { read: { source: 'drawingInfo.renderer' } },
                },
                name: 'layerDefinition.drawingInfo.renderer',
                write: {
                  target: {
                    'layerDefinition.drawingInfo.renderer': { types: H },
                    'layerDefinition.drawingInfo.transparency': {
                      type: Number,
                    },
                  },
                },
              },
            }),
          ],
          ee.prototype,
          'renderer',
          void 0,
        ),
        (0, i._)([(0, b.c)('renderer')], ee.prototype, 'writeRenderer', null),
        (0, i._)(
          [(0, h.Cb)({ json: { read: !1 }, readOnly: !0 })],
          ee.prototype,
          'type',
          void 0,
        ),
        (ee = (0, i._)([(0, v.j)('esri.layers.PointCloudLayer')], ee));
      const te = ee;
    },
    38009: (e, t, r) => {
      r.d(t, { q: () => y });
      var i = r(43697),
        o = r(20102),
        n = r(17452),
        s = r(5600),
        l = (r(67676), r(80442), r(75215), r(52011)),
        a = r(30556),
        d = r(50549),
        p = r(76169);
      const u = {
        'web-scene/operational-layers': {
          ArcGISFeatureLayer: !0,
          ArcGISImageServiceLayer: !0,
          ArcGISMapServiceLayer: !0,
          ArcGISSceneServiceLayer: !0,
          ArcGISTiledElevationServiceLayer: !0,
          ArcGISTiledImageServiceLayer: !0,
          ArcGISTiledMapServiceLayer: !0,
          BuildingSceneLayer: !0,
          GroupLayer: !0,
          IntegratedMeshLayer: !0,
          OGCFeatureLayer: !0,
          PointCloudLayer: !0,
          WebTiledLayer: !0,
          CSV: !0,
          GeoJSON: !0,
          VectorTileLayer: !0,
          WFS: !0,
          WMS: !0,
          KML: !0,
          RasterDataLayer: !0,
          Voxel: !0,
        },
        'web-scene/basemap': {
          ArcGISTiledImageServiceLayer: !0,
          ArcGISTiledMapServiceLayer: !0,
          WebTiledLayer: !0,
          OpenStreetMap: !0,
          VectorTileLayer: !0,
          ArcGISImageServiceLayer: !0,
          WMS: !0,
          ArcGISMapServiceLayer: !0,
        },
        'web-scene/ground': {
          ArcGISTiledElevationServiceLayer: !0,
          RasterDataElevationLayer: !0,
        },
        'web-map/operational-layers': {
          ArcGISFeatureLayer: !0,
          ArcGISImageServiceLayer: !0,
          ArcGISImageServiceVectorLayer: !0,
          ArcGISMapServiceLayer: !0,
          ArcGISStreamLayer: !0,
          ArcGISTiledImageServiceLayer: !0,
          ArcGISTiledMapServiceLayer: !0,
          BingMapsAerial: !0,
          BingMapsHybrid: !0,
          BingMapsRoad: !0,
          CSV: !0,
          GeoRSS: !0,
          GeoJSON: !0,
          GroupLayer: !0,
          KML: !0,
          OGCFeatureLayer: !0,
          SubtypeGroupLayer: !0,
          VectorTileLayer: !0,
          WFS: !0,
          WMS: !0,
          WebTiledLayer: !0,
        },
        'web-map/basemap': {
          ArcGISImageServiceLayer: !0,
          ArcGISImageServiceVectorLayer: !0,
          ArcGISMapServiceLayer: !0,
          ArcGISTiledImageServiceLayer: !0,
          ArcGISTiledMapServiceLayer: !0,
          OpenStreetMap: !0,
          VectorTileLayer: !0,
          WMS: !0,
          WebTiledLayer: !0,
          BingMapsAerial: !0,
          BingMapsRoad: !0,
          BingMapsHybrid: !0,
        },
        'web-map/tables': { ArcGISFeatureLayer: !0 },
        'portal-item/operational-layers': {
          ArcGISFeatureLayer: !0,
          ArcGISSceneServiceLayer: !0,
          PointCloudLayer: !0,
          BuildingSceneLayer: !0,
          IntegratedMeshLayer: !0,
        },
      };
      var c = r(21506);
      const y = (e) => {
        let t = class extends e {
          constructor() {
            super(...arguments), (this.title = null);
          }
          writeListMode(e, t, r, i) {
            ((i && 'ground' === i.layerContainerType) ||
              (e && (0, p.d)(this, r, {}, i))) &&
              (t[r] = e);
          }
          writeOperationalLayerType(e, t, r, i) {
            !e || (i && 'tables' === i.layerContainerType) || (t.layerType = e);
          }
          writeTitle(e, t) {
            t.title = e || 'Layer';
          }
          read(e, t) {
            t && (t.layer = this),
              (0, d.$)(this, e, (t) => super.read(e, t), t);
          }
          write(e, t) {
            if (null != t && t.origin) {
              const e = `${t.origin}/${
                  t.layerContainerType || 'operational-layers'
                }`,
                i = u[e];
              let n = i && i[this.operationalLayerType];
              var r;
              if (
                ('ArcGISTiledElevationServiceLayer' ===
                  this.operationalLayerType &&
                  'web-scene/operational-layers' === e &&
                  (n = !1),
                !n)
              )
                return (
                  null == (r = t.messages) ||
                    r.push(
                      new o.Z(
                        'layer:unsupported',
                        `Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${e}'`,
                        { layer: this },
                      ),
                    ),
                  null
                );
            }
            const i = super.write(e, { ...t, layer: this }),
              s =
                !!t &&
                !!t.messages &&
                !!t.messages.filter(
                  (e) =>
                    e instanceof o.Z &&
                    'web-document-write:property-required' === e.name,
                ).length;
            var l;
            return (0, n.jc)(null == i ? void 0 : i.url)
              ? (null == t ||
                  null == (l = t.messages) ||
                  l.push(
                    new o.Z(
                      'layer:invalid-url',
                      `Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' using a Blob URL cannot be written to web scenes and web maps`,
                      { layer: this },
                    ),
                  ),
                null)
              : !this.url && s
              ? null
              : i;
          }
          beforeSave() {}
        };
        return (
          (0, i._)(
            [
              (0, s.Cb)({
                type: String,
                json: {
                  write: { ignoreOrigin: !0 },
                  origins: {
                    'web-scene': {
                      write: { isRequired: !0, ignoreOrigin: !0 },
                    },
                    'portal-item': { write: !1 },
                  },
                },
              }),
            ],
            t.prototype,
            'id',
            void 0,
          ),
          (0, i._)(
            [
              (0, s.Cb)({
                json: {
                  write: { ignoreOrigin: !0 },
                  origins: { 'web-map': { read: !1, write: !1 } },
                },
              }),
            ],
            t.prototype,
            'listMode',
            void 0,
          ),
          (0, i._)([(0, a.c)('listMode')], t.prototype, 'writeListMode', null),
          (0, i._)(
            [
              (0, s.Cb)({
                type: String,
                readOnly: !0,
                json: {
                  read: !1,
                  write: { target: 'layerType', ignoreOrigin: !0 },
                  origins: { 'portal-item': { write: !1 } },
                },
              }),
            ],
            t.prototype,
            'operationalLayerType',
            void 0,
          ),
          (0, i._)(
            [(0, a.c)('operationalLayerType')],
            t.prototype,
            'writeOperationalLayerType',
            null,
          ),
          (0, i._)([(0, s.Cb)(c.Oh)], t.prototype, 'opacity', void 0),
          (0, i._)(
            [
              (0, s.Cb)({
                type: String,
                json: {
                  write: { ignoreOrigin: !0, writerEnsuresNonNull: !0 },
                  origins: {
                    'web-scene': {
                      write: {
                        isRequired: !0,
                        ignoreOrigin: !0,
                        writerEnsuresNonNull: !0,
                      },
                    },
                    'portal-item': { write: !1 },
                  },
                },
                value: 'Layer',
              }),
            ],
            t.prototype,
            'title',
            void 0,
          ),
          (0, i._)([(0, a.c)('title')], t.prototype, 'writeTitle', null),
          (0, i._)(
            [(0, s.Cb)({ type: Boolean, json: { name: 'visibility' } })],
            t.prototype,
            'visible',
            void 0,
          ),
          (t = (0, i._)([(0, l.j)('esri.layers.mixins.OperationalLayer')], t)),
          t
        );
      };
    },
    72965: (e, t, r) => {
      r.d(t, { M: () => s });
      var i = r(43697),
        o = r(5600),
        n = (r(67676), r(80442), r(75215), r(52011));
      const s = (e) => {
        let t = class extends e {
          constructor() {
            super(...arguments), (this.minScale = 0), (this.maxScale = 0);
          }
          get effectiveScaleRange() {
            const e = { minScale: this.minScale, maxScale: this.maxScale },
              t = this.parent;
            t &&
              'effectiveScaleRange' in t &&
              (function (e, t) {
                (e.minScale =
                  e.minScale > 0
                    ? t.minScale > 0
                      ? Math.min(e.minScale, t.minScale)
                      : e.minScale
                    : t.minScale),
                  (e.maxScale =
                    e.maxScale > 0
                      ? t.maxScale > 0
                        ? Math.max(e.maxScale, t.maxScale)
                        : e.maxScale
                      : t.maxScale);
              })(e, t.effectiveScaleRange);
            const r = this._get('effectiveScaleRange');
            return r && r.minScale === e.minScale && r.maxScale === e.maxScale
              ? r
              : e;
          }
        };
        return (
          (0, i._)(
            [(0, o.Cb)({ type: Number, nonNullable: !0, json: { write: !0 } })],
            t.prototype,
            'minScale',
            void 0,
          ),
          (0, i._)(
            [(0, o.Cb)({ type: Number, nonNullable: !0, json: { write: !0 } })],
            t.prototype,
            'maxScale',
            void 0,
          ),
          (0, i._)(
            [(0, o.Cb)({ readOnly: !0 })],
            t.prototype,
            'effectiveScaleRange',
            null,
          ),
          (t = (0, i._)([(0, n.j)('esri.layers.mixins.ScaleRangeLayer')], t)),
          t
        );
      };
    },
    21506: (e, t, r) => {
      r.d(t, {
        qG: () => w,
        PV: () => g,
        id: () => _,
        iR: () => y,
        rn: () => f,
        u1: () => I,
        rO: () => C,
        Oh: () => b,
        bT: () => m,
        C_: () => c,
        Lx: () => v,
        vg: () => S,
        YI: () => u,
        HQ: () => h,
      });
      var i = r(92835),
        o = r(6570),
        n = r(82971),
        s = r(25929),
        l = r(70586),
        a = (r(95330), r(35463)),
        d = r(20682),
        p = r(65242);
      const u = {
          type: Boolean,
          value: !0,
          json: {
            origins: {
              service: { read: !1, write: !1 },
              'web-map': { read: !1, write: !1 },
            },
            name: 'screenSizePerspective',
            write: !0,
          },
        },
        c = {
          type: Boolean,
          value: !0,
          json: {
            name: 'disablePopup',
            read: { reader: (e, t) => !t.disablePopup },
            write: {
              enabled: !0,
              writer(e, t, r) {
                t[r] = !e;
              },
            },
          },
        },
        y = {
          type: Boolean,
          value: !0,
          json: { name: 'showLabels', write: !0 },
        },
        h = {
          type: String,
          json: {
            origins: { 'portal-item': { write: !1 } },
            write: { isRequired: !0, ignoreOrigin: !0, writer: s.w },
          },
        },
        f = {
          type: Boolean,
          value: !0,
          json: {
            origins: { service: { read: { enabled: !1 } } },
            name: 'showLegend',
            write: !0,
          },
        },
        g = {
          value: null,
          type: d.Z,
          json: {
            origins: { service: { name: 'elevationInfo', write: !0 } },
            name: 'layerDefinition.elevationInfo',
            write: !0,
          },
        };
      function v(e) {
        return {
          type: e,
          readOnly: !0,
          json: { origins: { service: { read: !0 } }, read: !1 },
        };
      }
      const b = {
          type: Number,
          json: {
            origins: {
              'web-document': { write: !0, read: !0 },
              'portal-item': { write: !0 },
            },
          },
        },
        m = {
          ...b,
          json: {
            ...b.json,
            origins: {
              'web-document': {
                ...b.json.origins['web-document'],
                write: {
                  enabled: !0,
                  target: {
                    opacity: { type: Number },
                    'layerDefinition.drawingInfo.transparency': {
                      type: Number,
                    },
                  },
                },
              },
            },
            read: {
              source: [
                'layerDefinition.drawingInfo.transparency',
                'drawingInfo.transparency',
              ],
              reader: (e, t, r) =>
                (r && 'service' !== r.origin) ||
                !t.drawingInfo ||
                void 0 === t.drawingInfo.transparency
                  ? t.layerDefinition &&
                    t.layerDefinition.drawingInfo &&
                    void 0 !== t.layerDefinition.drawingInfo.transparency
                    ? (0, p.b)(t.layerDefinition.drawingInfo.transparency)
                    : void 0
                  : (0, p.b)(t.drawingInfo.transparency),
            },
          },
        },
        w = {
          type: i.Z,
          readOnly: !0,
          get() {
            var e, t;
            if (null == (e = this.layer) || !e.timeInfo) return null;
            const {
                datesInUnknownTimezone: r,
                timeOffset: o,
                useViewTime: n,
              } = this.layer,
              s = null == (t = this.view) ? void 0 : t.timeExtent;
            let d = this.layer.timeExtent;
            r &&
              (d = (function (e) {
                if (!e) return e;
                const { start: t, end: r } = e;
                return new i.Z({
                  start: (0, l.pC)(t)
                    ? (0, a.Nm)(t, t.getTimezoneOffset(), 'minutes')
                    : t,
                  end: (0, l.pC)(r)
                    ? (0, a.Nm)(r, r.getTimezoneOffset(), 'minutes')
                    : r,
                });
              })(d));
            let p = n ? (s && d ? s.intersection(d) : s || d) : d;
            if (!p || p.isEmpty || p.isAllTime) return p;
            o && (p = p.offset(-o.value, o.unit)),
              r &&
                (p = (function (e) {
                  if (!e) return e;
                  const { start: t, end: r } = e;
                  return new i.Z({
                    start: (0, l.pC)(t)
                      ? (0, a.Nm)(t, -t.getTimezoneOffset(), 'minutes')
                      : t,
                    end: (0, l.pC)(r)
                      ? (0, a.Nm)(r, -r.getTimezoneOffset(), 'minutes')
                      : r,
                  });
                })(p));
            const u = this._get('timeExtent');
            return p.equals(u) ? u : p;
          },
        },
        S = {
          type: o.Z,
          readOnly: !0,
          json: {
            origins: {
              service: {
                read: {
                  source: ['fullExtent', 'spatialReference'],
                  reader: (e, t) => {
                    const r = o.Z.fromJSON(e);
                    return (
                      null != t.spatialReference &&
                        'object' == typeof t.spatialReference &&
                        (r.spatialReference = n.Z.fromJSON(t.spatialReference)),
                      r
                    );
                  },
                },
              },
            },
            read: !1,
          },
        },
        _ = {
          type: String,
          json: {
            origins: { service: { read: !1 }, 'portal-item': { read: !1 } },
          },
        },
        C = {
          type: Number,
          json: {
            origins: { service: { write: { enabled: !1 } } },
            read: { source: 'layerDefinition.minScale' },
            write: { target: 'layerDefinition.minScale' },
          },
        },
        I = {
          type: Number,
          json: {
            origins: { service: { write: { enabled: !1 } } },
            read: { source: 'layerDefinition.maxScale' },
            write: { target: 'layerDefinition.maxScale' },
          },
        };
    },
    53518: (e, t, r) => {
      r.d(t, { v: () => a });
      var i = r(92604),
        o = r(1231),
        n = r(99514),
        s = r(35671);
      const l = i.Z.getLogger('esri.layers.support.fieldProperties');
      function a() {
        return {
          fields: { type: [o.Z], value: null },
          fieldsIndex: {
            readOnly: !0,
            get() {
              return new n.Z(this.fields || []);
            },
          },
          outFields: {
            type: [String],
            json: { read: !1 },
            set: function (e) {
              (this._userOutFields = e), this.notifyChange('outFields');
            },
            get: function () {
              const e = this._userOutFields;
              if (!e || !e.length) return null;
              if (e.includes('*')) return ['*'];
              if (!this.fields) return e;
              for (const t of e)
                this.fieldsIndex.has(t) ||
                  l.error(
                    'field-attributes-layer:invalid-field',
                    `Invalid field ${t} found in outFields`,
                    { layer: this, outFields: e },
                  );
              return (0, s.Q0)(this.fieldsIndex, e);
            },
          },
        };
      }
    },
    23030: (e, t, r) => {
      r.d(t, { Z: () => b });
      var i,
        o = r(43697),
        n = r(22974),
        s = r(5600),
        l = r(75215),
        a = r(36030),
        d = r(52011),
        p = r(25848),
        u = r(66338),
        c = r(22303),
        y = r(96674);
      let h = (i = class extends y.wq {
        constructor() {
          super(...arguments),
            (this.description = null),
            (this.label = null),
            (this.minValue = 0),
            (this.maxValue = 0),
            (this.color = null);
        }
        clone() {
          return new i({
            description: this.description,
            label: this.label,
            minValue: this.minValue,
            maxValue: this.maxValue,
            color: (0, n.d9)(this.color),
          });
        }
      });
      (0, o._)(
        [(0, s.Cb)({ type: String, json: { write: !0 } })],
        h.prototype,
        'description',
        void 0,
      ),
        (0, o._)(
          [(0, s.Cb)({ type: String, json: { write: !0 } })],
          h.prototype,
          'label',
          void 0,
        ),
        (0, o._)(
          [
            (0, s.Cb)({
              type: Number,
              json: {
                read: { source: 'classMinValue' },
                write: { target: 'classMinValue' },
              },
            }),
          ],
          h.prototype,
          'minValue',
          void 0,
        ),
        (0, o._)(
          [
            (0, s.Cb)({
              type: Number,
              json: {
                read: { source: 'classMaxValue' },
                write: { target: 'classMaxValue' },
              },
            }),
          ],
          h.prototype,
          'maxValue',
          void 0,
        ),
        (0, o._)(
          [(0, s.Cb)({ type: c.Z, json: { type: [l.z8], write: !0 } })],
          h.prototype,
          'color',
          void 0,
        ),
        (h = i =
          (0, o._)(
            [(0, d.j)('esri.renderers.support.pointCloud.ColorClassBreakInfo')],
            h,
          ));
      const f = h;
      var g;
      let v = (g = class extends p.Z {
        constructor(e) {
          super(e),
            (this.type = 'point-cloud-class-breaks'),
            (this.field = null),
            (this.legendOptions = null),
            (this.fieldTransformType = null),
            (this.colorClassBreakInfos = null);
        }
        clone() {
          return new g({
            ...this.cloneProperties(),
            field: this.field,
            fieldTransformType: this.fieldTransformType,
            colorClassBreakInfos: (0, n.d9)(this.colorClassBreakInfos),
            legendOptions: (0, n.d9)(this.legendOptions),
          });
        }
      });
      (0, o._)(
        [
          (0, a.J)({
            pointCloudClassBreaksRenderer: 'point-cloud-class-breaks',
          }),
        ],
        v.prototype,
        'type',
        void 0,
      ),
        (0, o._)(
          [(0, s.Cb)({ json: { write: !0 }, type: String })],
          v.prototype,
          'field',
          void 0,
        ),
        (0, o._)(
          [(0, s.Cb)({ type: u.Z, json: { write: !0 } })],
          v.prototype,
          'legendOptions',
          void 0,
        ),
        (0, o._)(
          [
            (0, s.Cb)({
              type: p.Z.fieldTransformTypeKebabDict.apiValues,
              json: {
                type: p.Z.fieldTransformTypeKebabDict.jsonValues,
                read: p.Z.fieldTransformTypeKebabDict.read,
                write: p.Z.fieldTransformTypeKebabDict.write,
              },
            }),
          ],
          v.prototype,
          'fieldTransformType',
          void 0,
        ),
        (0, o._)(
          [(0, s.Cb)({ type: [f], json: { write: !0 } })],
          v.prototype,
          'colorClassBreakInfos',
          void 0,
        ),
        (v = g =
          (0, o._)(
            [(0, d.j)('esri.renderers.PointCloudClassBreaksRenderer')],
            v,
          ));
      const b = v;
    },
    25848: (e, t, r) => {
      r.d(t, { Z: () => I });
      var i,
        o = r(43697),
        n = r(35454),
        s = r(96674),
        l = r(22974),
        a = r(5600),
        d = (r(75215), r(52011));
      r(67676), r(80442);
      let p = (i = class extends s.wq {
        constructor() {
          super(...arguments),
            (this.field = null),
            (this.minValue = 0),
            (this.maxValue = 255);
        }
        clone() {
          return new i({
            field: this.field,
            minValue: this.minValue,
            maxValue: this.maxValue,
          });
        }
      });
      (0, o._)(
        [(0, a.Cb)({ type: String, json: { write: !0 } })],
        p.prototype,
        'field',
        void 0,
      ),
        (0, o._)(
          [(0, a.Cb)({ type: Number, nonNullable: !0, json: { write: !0 } })],
          p.prototype,
          'minValue',
          void 0,
        ),
        (0, o._)(
          [(0, a.Cb)({ type: Number, nonNullable: !0, json: { write: !0 } })],
          p.prototype,
          'maxValue',
          void 0,
        ),
        (p = i =
          (0, o._)(
            [(0, d.j)('esri.renderers.support.pointCloud.ColorModulation')],
            p,
          ));
      const u = p,
        c = new n.X({
          pointCloudFixedSizeAlgorithm: 'fixed-size',
          pointCloudSplatAlgorithm: 'splat',
        });
      let y = class extends s.wq {};
      (0, o._)(
        [
          (0, a.Cb)({
            type: c.apiValues,
            readOnly: !0,
            nonNullable: !0,
            json: { type: c.jsonValues, read: !1, write: c.write },
          }),
        ],
        y.prototype,
        'type',
        void 0,
      ),
        (y = (0, o._)(
          [(0, d.j)('esri.renderers.support.pointCloud.PointSizeAlgorithm')],
          y,
        ));
      const h = y;
      var f,
        g = r(36030);
      let v = (f = class extends h {
        constructor() {
          super(...arguments),
            (this.type = 'fixed-size'),
            (this.size = 0),
            (this.useRealWorldSymbolSizes = null);
        }
        clone() {
          return new f({
            size: this.size,
            useRealWorldSymbolSizes: this.useRealWorldSymbolSizes,
          });
        }
      });
      (0, o._)(
        [(0, g.J)({ pointCloudFixedSizeAlgorithm: 'fixed-size' })],
        v.prototype,
        'type',
        void 0,
      ),
        (0, o._)(
          [(0, a.Cb)({ type: Number, nonNullable: !0, json: { write: !0 } })],
          v.prototype,
          'size',
          void 0,
        ),
        (0, o._)(
          [(0, a.Cb)({ type: Boolean, json: { write: !0 } })],
          v.prototype,
          'useRealWorldSymbolSizes',
          void 0,
        ),
        (v = f =
          (0, o._)(
            [
              (0, d.j)(
                'esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm',
              ),
            ],
            v,
          ));
      const b = v;
      var m;
      let w = (m = class extends h {
        constructor() {
          super(...arguments), (this.type = 'splat'), (this.scaleFactor = 1);
        }
        clone() {
          return new m({ scaleFactor: this.scaleFactor });
        }
      });
      (0, o._)(
        [(0, g.J)({ pointCloudSplatAlgorithm: 'splat' })],
        w.prototype,
        'type',
        void 0,
      ),
        (0, o._)(
          [
            (0, a.Cb)({
              type: Number,
              value: 1,
              nonNullable: !0,
              json: { write: !0 },
            }),
          ],
          w.prototype,
          'scaleFactor',
          void 0,
        ),
        (w = m =
          (0, o._)(
            [
              (0, d.j)(
                'esri.renderers.support.pointCloud.PointSizeSplatAlgorithm',
              ),
            ],
            w,
          ));
      const S = {
          key: 'type',
          base: h,
          typeMap: { 'fixed-size': b, splat: w },
        },
        _ = (0, n.w)()({
          pointCloudClassBreaksRenderer: 'point-cloud-class-breaks',
          pointCloudRGBRenderer: 'point-cloud-rgb',
          pointCloudStretchRenderer: 'point-cloud-stretch',
          pointCloudUniqueValueRenderer: 'point-cloud-unique-value',
        });
      let C = class extends s.wq {
        constructor(e) {
          super(e),
            (this.type = void 0),
            (this.pointSizeAlgorithm = null),
            (this.colorModulation = null),
            (this.pointsPerInch = 10);
        }
        clone() {
          return (
            console.warn(
              '.clone() is not implemented for ' + this.declaredClass,
            ),
            null
          );
        }
        cloneProperties() {
          return {
            pointSizeAlgorithm: (0, l.d9)(this.pointSizeAlgorithm),
            colorModulation: (0, l.d9)(this.colorModulation),
            pointsPerInch: (0, l.d9)(this.pointsPerInch),
          };
        }
      };
      (0, o._)(
        [
          (0, a.Cb)({
            type: _.apiValues,
            readOnly: !0,
            nonNullable: !0,
            json: { type: _.jsonValues, read: !1, write: _.write },
          }),
        ],
        C.prototype,
        'type',
        void 0,
      ),
        (0, o._)(
          [(0, a.Cb)({ types: S, json: { write: !0 } })],
          C.prototype,
          'pointSizeAlgorithm',
          void 0,
        ),
        (0, o._)(
          [(0, a.Cb)({ type: u, json: { write: !0 } })],
          C.prototype,
          'colorModulation',
          void 0,
        ),
        (0, o._)(
          [(0, a.Cb)({ json: { write: !0 }, nonNullable: !0, type: Number })],
          C.prototype,
          'pointsPerInch',
          void 0,
        ),
        (C = (0, o._)([(0, d.j)('esri.renderers.PointCloudRenderer')], C)),
        ((C || (C = {})).fieldTransformTypeKebabDict = new n.X({
          none: 'none',
          lowFourBit: 'low-four-bit',
          highFourBit: 'high-four-bit',
          absoluteValue: 'absolute-value',
          moduloTen: 'modulo-ten',
        }));
      const I = C;
    },
    14008: (e, t, r) => {
      r.d(t, { Z: () => y });
      var i,
        o = r(43697),
        n = r(22974),
        s = r(5600),
        l = (r(75215), r(36030)),
        a = r(52011),
        d = r(25848),
        p = r(66338),
        u = r(21849);
      let c = (i = class extends d.Z {
        constructor(e) {
          super(e),
            (this.type = 'point-cloud-stretch'),
            (this.field = null),
            (this.legendOptions = null),
            (this.fieldTransformType = null),
            (this.stops = null);
        }
        clone() {
          return new i({
            ...this.cloneProperties(),
            field: (0, n.d9)(this.field),
            fieldTransformType: (0, n.d9)(this.fieldTransformType),
            stops: (0, n.d9)(this.stops),
            legendOptions: (0, n.d9)(this.legendOptions),
          });
        }
      });
      (0, o._)(
        [(0, l.J)({ pointCloudStretchRenderer: 'point-cloud-stretch' })],
        c.prototype,
        'type',
        void 0,
      ),
        (0, o._)(
          [(0, s.Cb)({ json: { write: !0 }, type: String })],
          c.prototype,
          'field',
          void 0,
        ),
        (0, o._)(
          [(0, s.Cb)({ type: p.Z, json: { write: !0 } })],
          c.prototype,
          'legendOptions',
          void 0,
        ),
        (0, o._)(
          [
            (0, s.Cb)({
              type: d.Z.fieldTransformTypeKebabDict.apiValues,
              json: {
                type: d.Z.fieldTransformTypeKebabDict.jsonValues,
                read: d.Z.fieldTransformTypeKebabDict.read,
                write: d.Z.fieldTransformTypeKebabDict.write,
              },
            }),
          ],
          c.prototype,
          'fieldTransformType',
          void 0,
        ),
        (0, o._)(
          [(0, s.Cb)({ type: [u.Z], json: { write: !0 } })],
          c.prototype,
          'stops',
          void 0,
        ),
        (c = i =
          (0, o._)([(0, a.j)('esri.renderers.PointCloudStretchRenderer')], c));
      const y = c;
    },
    46329: (e, t, r) => {
      r.d(t, { Z: () => b });
      var i,
        o = r(43697),
        n = r(22974),
        s = r(5600),
        l = r(75215),
        a = r(36030),
        d = r(52011),
        p = r(25848),
        u = r(66338),
        c = r(22303),
        y = r(96674);
      let h = (i = class extends y.wq {
        constructor() {
          super(...arguments),
            (this.description = null),
            (this.label = null),
            (this.values = null),
            (this.color = null);
        }
        clone() {
          return new i({
            description: this.description,
            label: this.label,
            values: (0, n.d9)(this.values),
            color: (0, n.d9)(this.color),
          });
        }
      });
      (0, o._)(
        [(0, s.Cb)({ type: String, json: { write: !0 } })],
        h.prototype,
        'description',
        void 0,
      ),
        (0, o._)(
          [(0, s.Cb)({ type: String, json: { write: !0 } })],
          h.prototype,
          'label',
          void 0,
        ),
        (0, o._)(
          [(0, s.Cb)({ type: [String], json: { write: !0 } })],
          h.prototype,
          'values',
          void 0,
        ),
        (0, o._)(
          [(0, s.Cb)({ type: c.Z, json: { type: [l.z8], write: !0 } })],
          h.prototype,
          'color',
          void 0,
        ),
        (h = i =
          (0, o._)(
            [
              (0, d.j)(
                'esri.renderers.support.pointCloud.ColorUniqueValueInfo',
              ),
            ],
            h,
          ));
      const f = h;
      var g;
      let v = (g = class extends p.Z {
        constructor(e) {
          super(e),
            (this.type = 'point-cloud-unique-value'),
            (this.field = null),
            (this.fieldTransformType = null),
            (this.colorUniqueValueInfos = null),
            (this.legendOptions = null);
        }
        clone() {
          return new g({
            ...this.cloneProperties(),
            field: (0, n.d9)(this.field),
            fieldTransformType: (0, n.d9)(this.fieldTransformType),
            colorUniqueValueInfos: (0, n.d9)(this.colorUniqueValueInfos),
            legendOptions: (0, n.d9)(this.legendOptions),
          });
        }
      });
      (0, o._)(
        [
          (0, a.J)({
            pointCloudUniqueValueRenderer: 'point-cloud-unique-value',
          }),
        ],
        v.prototype,
        'type',
        void 0,
      ),
        (0, o._)(
          [(0, s.Cb)({ json: { write: !0 }, type: String })],
          v.prototype,
          'field',
          void 0,
        ),
        (0, o._)(
          [
            (0, s.Cb)({
              type: p.Z.fieldTransformTypeKebabDict.apiValues,
              json: {
                type: p.Z.fieldTransformTypeKebabDict.jsonValues,
                read: p.Z.fieldTransformTypeKebabDict.read,
                write: p.Z.fieldTransformTypeKebabDict.write,
              },
            }),
          ],
          v.prototype,
          'fieldTransformType',
          void 0,
        ),
        (0, o._)(
          [(0, s.Cb)({ type: [f], json: { write: !0 } })],
          v.prototype,
          'colorUniqueValueInfos',
          void 0,
        ),
        (0, o._)(
          [(0, s.Cb)({ type: u.Z, json: { write: !0 } })],
          v.prototype,
          'legendOptions',
          void 0,
        ),
        (v = g =
          (0, o._)(
            [(0, d.j)('esri.renderers.PointCloudUniqueValueRenderer')],
            v,
          ));
      const b = v;
    },
    66338: (e, t, r) => {
      r.d(t, { Z: () => d });
      var i,
        o = r(43697),
        n = r(96674),
        s = r(5600),
        l = (r(67676), r(80442), r(75215), r(52011));
      let a = (i = class extends n.wq {
        constructor() {
          super(...arguments), (this.title = null);
        }
        clone() {
          return new i({ title: this.title });
        }
      });
      (0, o._)(
        [(0, s.Cb)({ type: String, json: { write: !0 } })],
        a.prototype,
        'title',
        void 0,
      ),
        (a = i =
          (0, o._)([(0, l.j)('esri.renderers.support.LegendOptions')], a));
      const d = a;
    },
    21849: (e, t, r) => {
      r.d(t, { Z: () => c });
      var i,
        o = r(43697),
        n = r(22303),
        s = r(96674),
        l = r(5600),
        a = (r(67676), r(80442), r(75215)),
        d = r(52011),
        p = r(30556);
      let u = (i = class extends s.wq {
        constructor(e) {
          super(e),
            (this.color = null),
            (this.label = null),
            (this.value = null);
        }
        writeValue(e, t, r) {
          t[r] = null == e ? 0 : e;
        }
        clone() {
          return new i({
            color: this.color && this.color.clone(),
            label: this.label,
            value: this.value,
          });
        }
      });
      (0, o._)(
        [(0, l.Cb)({ type: n.Z, json: { type: [a.z8], write: !0 } })],
        u.prototype,
        'color',
        void 0,
      ),
        (0, o._)(
          [(0, l.Cb)({ type: String, json: { write: !0 } })],
          u.prototype,
          'label',
          void 0,
        ),
        (0, o._)(
          [
            (0, l.Cb)({
              type: Number,
              json: { write: { writerEnsuresNonNull: !0 } },
            }),
          ],
          u.prototype,
          'value',
          void 0,
        ),
        (0, o._)([(0, p.c)('value')], u.prototype, 'writeValue', null),
        (u = i =
          (0, o._)(
            [(0, d.j)('esri.renderers.visualVariables.support.ColorStop')],
            u,
          ));
      const c = u;
    },
    32163: (e, t, r) => {
      r.d(t, { eZ: () => u });
      var i = r(51773),
        o = r(35671),
        n = r(84649),
        s = (r(63801), r(48074), r(38745), r(9190)),
        l = (r(10214), r(44951), r(422)),
        a = r(63061);
      const d = ['oid', 'global-id'],
        p = ['oid', 'global-id', 'guid'];
      function u(
        {
          displayField: e,
          editFieldsInfo: t,
          fields: r,
          objectIdField: a,
          title: d,
        },
        p,
      ) {
        if (!r) return null;
        const u = (function (
          { editFieldsInfo: e, fields: t, objectIdField: r },
          i,
        ) {
          return (function (e, t) {
            const r = e;
            return (
              t && (e = e.filter((e) => -1 === t.indexOf(e.type))),
              e === r && (e = e.slice()),
              e.sort(h),
              e
            );
          })(t, (null == i ? void 0 : i.ignoreFieldTypes) || m).map(
            (t) =>
              new l.Z({
                fieldName: t.name,
                isEditable: g(t, e),
                label: t.alias,
                format: v(t),
                visible: y(t, {
                  editFieldsInfo: e,
                  objectIdField: r,
                  visibleFieldNames: null == i ? void 0 : i.visibleFieldNames,
                }),
              }),
          );
        })({ editFieldsInfo: t, fields: r, objectIdField: a }, p);
        if (!u.length) return null;
        const c = (function (e) {
            const t = (0, o.O5)(e),
              { titleBase: r } = e;
            return t ? `${r}: {${t.trim()}}` : r;
          })({ titleBase: d, fields: r, displayField: e }),
          f = [new s.Z(), new n.Z()];
        return new i.Z({ title: c, content: f, fieldInfos: u });
      }
      const c = [
          /^fnode_$/i,
          /^tnode_$/i,
          /^lpoly_$/i,
          /^rpoly_$/i,
          /^poly_$/i,
          /^subclass$/i,
          /^subclass_$/i,
          /^rings_ok$/i,
          /^rings_nok$/i,
          /shape/i,
          /perimeter/i,
          /objectid/i,
          /_i$/i,
        ],
        y = (
          e,
          { editFieldsInfo: t, objectIdField: r, visibleFieldNames: i },
        ) =>
          i
            ? i.has(e.name)
            : !(
                f(e.name, t) ||
                (r && e.name === r) ||
                d.indexOf(e.type) > -1 ||
                c.some((t) => t.test(e.name))
              );
      function h(e, t) {
        return 'oid' === e.type
          ? -1
          : 'oid' === t.type
          ? 1
          : b(e)
          ? -1
          : b(t)
          ? 1
          : (e.alias || e.name)
              .toLocaleLowerCase()
              .localeCompare((t.alias || t.name).toLocaleLowerCase());
      }
      function f(e, t) {
        if (!e || !t) return !1;
        const {
          creationDateField: r,
          creatorField: i,
          editDateField: o,
          editorField: n,
        } = t;
        return (
          -1 !==
          [
            r && r.toLowerCase(),
            i && i.toLowerCase(),
            o && o.toLowerCase(),
            n && n.toLowerCase(),
          ].indexOf(e.toLowerCase())
        );
      }
      function g(e, t) {
        return e.editable && -1 === p.indexOf(e.type) && !f(e.name, t);
      }
      function v(e) {
        switch (e.type) {
          case 'small-integer':
          case 'integer':
          case 'single':
            return new a.Z({ digitSeparator: !0, places: 0 });
          case 'double':
            return new a.Z({ digitSeparator: !0, places: 2 });
          case 'date':
            return new a.Z({ dateFormat: 'long-month-day-year' });
          default:
            return null;
        }
      }
      function b(e) {
        return (
          'name' === (e.name && e.name.toLowerCase()) ||
          'name' === (e.alias && e.alias.toLowerCase()) ||
          void 0
        );
      }
      const m = ['geometry', 'blob', 'raster', 'guid', 'xml'];
    },
    20682: (e, t, r) => {
      r.d(t, { Z: () => S });
      var i,
        o = r(43697),
        n = r(35454),
        s = r(96674),
        l = r(70586),
        a = r(5600),
        d = (r(67676), r(80442), r(75215), r(71715)),
        p = r(52011),
        u = r(30556),
        c = r(35671);
      let y = (i = class extends s.wq {
        async collectRequiredFields(e, t) {
          return (0, c.io)(e, t, this.expression);
        }
        clone() {
          return new i({ expression: this.expression, title: this.title });
        }
      });
      (0, o._)(
        [(0, a.Cb)({ type: String, json: { write: !0 } })],
        y.prototype,
        'expression',
        void 0,
      ),
        (0, o._)(
          [(0, a.Cb)({ type: String, json: { write: !0 } })],
          y.prototype,
          'title',
          void 0,
        ),
        (y = i =
          (0, o._)([(0, p.j)('esri.layers.support.FeatureExpressionInfo')], y));
      const h = y;
      var f = r(99282);
      const g = (function () {
        const e = Object.keys(f.a);
        return e.sort(), e;
      })();
      var v;
      const b = (0, n.w)()({
          onTheGround: 'on-the-ground',
          relativeToGround: 'relative-to-ground',
          relativeToScene: 'relative-to-scene',
          absoluteHeight: 'absolute-height',
        }),
        m = new n.X({
          foot: 'feet',
          kilometer: 'kilometers',
          meter: 'meters',
          mile: 'miles',
          'us-foot': 'us-feet',
          yard: 'yards',
        });
      let w = (v = class extends s.wq {
        constructor() {
          super(...arguments), (this.offset = null);
        }
        readFeatureExpressionInfo(e, t) {
          return null != e
            ? e
            : t.featureExpression && 0 === t.featureExpression.value
            ? { expression: '0' }
            : void 0;
        }
        writeFeatureExpressionInfo(e, t, r, i) {
          (t[r] = e.write({}, i)),
            '0' === e.expression && (t.featureExpression = { value: 0 });
        }
        get mode() {
          const { offset: e, featureExpressionInfo: t } = this;
          return this._isOverridden('mode')
            ? this._get('mode')
            : (0, l.pC)(e) || t
            ? 'relative-to-ground'
            : 'on-the-ground';
        }
        set mode(e) {
          this._override('mode', e);
        }
        set unit(e) {
          this._set('unit', e);
        }
        write(e, t) {
          return this.offset ||
            this.mode ||
            this.featureExpressionInfo ||
            this.unit
            ? super.write(e, t)
            : null;
        }
        clone() {
          return new v({
            mode: this.mode,
            offset: this.offset,
            featureExpressionInfo: this.featureExpressionInfo
              ? this.featureExpressionInfo.clone()
              : void 0,
            unit: this.unit,
          });
        }
      });
      (0, o._)(
        [(0, a.Cb)({ type: h, json: { write: !0 } })],
        w.prototype,
        'featureExpressionInfo',
        void 0,
      ),
        (0, o._)(
          [
            (0, d.r)('featureExpressionInfo', [
              'featureExpressionInfo',
              'featureExpression',
            ]),
          ],
          w.prototype,
          'readFeatureExpressionInfo',
          null,
        ),
        (0, o._)(
          [
            (0, u.c)('featureExpressionInfo', {
              featureExpressionInfo: { type: h },
              'featureExpression.value': { type: [0] },
            }),
          ],
          w.prototype,
          'writeFeatureExpressionInfo',
          null,
        ),
        (0, o._)(
          [
            (0, a.Cb)({
              type: b.apiValues,
              nonNullable: !0,
              json: {
                type: b.jsonValues,
                read: b.read,
                write: { writer: b.write, isRequired: !0 },
              },
            }),
          ],
          w.prototype,
          'mode',
          null,
        ),
        (0, o._)(
          [(0, a.Cb)({ type: Number, json: { write: !0 } })],
          w.prototype,
          'offset',
          void 0,
        ),
        (0, o._)(
          [
            (0, a.Cb)({
              type: g,
              json: { type: String, read: m.read, write: m.write },
            }),
          ],
          w.prototype,
          'unit',
          null,
        ),
        (w = v = (0, o._)([(0, p.j)('esri.layers.support.ElevationInfo')], w));
      const S = w;
    },
    65242: (e, t, r) => {
      r.d(t, { a: () => o, b: () => n });
      var i = r(75215);
      function o(e) {
        const t = (0, i.vU)(100 * (1 - e));
        return Math.max(0, Math.min(t, 100));
      }
      function n(e) {
        const t = 1 - e / 100;
        return Math.max(0, Math.min(t, 1));
      }
    },
  },
]);
