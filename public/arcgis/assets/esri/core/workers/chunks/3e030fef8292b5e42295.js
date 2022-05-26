'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [5410],
  {
    10699: (e, t, i) => {
      i.d(t, { I: () => o });
      var r = i(43697),
        s = i(52011);
      let n = 0;
      const o = (e) => {
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
        return (t = (0, r._)([(0, s.j)('esri.core.Identifiable')], t)), t;
      };
      let a = class extends o(class {}) {};
      a = (0, r._)([(0, s.j)('esri.core.Identifiable')], a);
    },
    16453: (e, t, i) => {
      i.d(t, { R: () => T, w: () => A });
      var r = i(43697),
        s = i(15923),
        n = i(70586),
        o = i(41103),
        a = i(22974),
        l = i(31263);
      class _ {
        constructor() {
          (this._propertyOriginMap = new Map()),
            (this._originStores = new Array(l.kk)),
            (this._values = new Map()),
            (this.multipleOriginsSupported = !0);
        }
        clone(e) {
          const t = new _(),
            i = this._originStores[l.s3.DEFAULTS];
          i &&
            i.forEach((e, i) => {
              t.set(i, (0, a.d9)(e), l.s3.DEFAULTS);
            });
          for (let i = l.s3.SERVICE; i < l.kk; i++) {
            const r = this._originStores[i];
            r &&
              r.forEach((r, s) => {
                (e && e.has(s)) || t.set(s, (0, a.d9)(r), i);
              });
          }
          return t;
        }
        get(e, t) {
          const i = void 0 === t ? this._values : this._originStores[t];
          return i ? i.get(e) : void 0;
        }
        keys(e) {
          const t = null == e ? this._values : this._originStores[e];
          return t ? [...t.keys()] : [];
        }
        set(e, t, i = l.s3.USER) {
          let r = this._originStores[i];
          if (
            (r || ((r = new Map()), (this._originStores[i] = r)),
            r.set(e, t),
            !this._values.has(e) ||
              (0, n.j0)(this._propertyOriginMap.get(e)) <= i)
          ) {
            const r = this._values.get(e);
            return (
              this._values.set(e, t), this._propertyOriginMap.set(e, i), r !== t
            );
          }
          return !1;
        }
        delete(e, t = l.s3.USER) {
          const i = this._originStores[t];
          if (!i) return;
          const r = i.get(e);
          if (
            (i.delete(e),
            this._values.has(e) && this._propertyOriginMap.get(e) === t)
          ) {
            this._values.delete(e);
            for (let i = t - 1; i >= 0; i--) {
              const t = this._originStores[i];
              if (t && t.has(e)) {
                this._values.set(e, t.get(e)),
                  this._propertyOriginMap.set(e, i);
                break;
              }
            }
          }
          return r;
        }
        has(e, t) {
          const i = void 0 === t ? this._values : this._originStores[t];
          return !!i && i.has(e);
        }
        revert(e, t) {
          for (; t > 0 && !this.has(e, t); ) --t;
          const i = this._originStores[t],
            r = i && i.get(e),
            s = this._values.get(e);
          return (
            this._values.set(e, r), this._propertyOriginMap.set(e, t), s !== r
          );
        }
        originOf(e) {
          return this._propertyOriginMap.get(e) || l.s3.DEFAULTS;
        }
        forEach(e) {
          this._values.forEach(e);
        }
      }
      var d = i(50549),
        u = i(1153),
        p = i(52011);
      const c = (e) => {
        let t = class extends e {
          constructor(...e) {
            super(...e);
            const t = (0, n.j0)((0, u.vw)(this)),
              i = t.store,
              r = new _();
            (t.store = r), (0, o.M)(t, i, r);
          }
          read(e, t) {
            (0, d.i)(this, e, t);
          }
          getAtOrigin(e, t) {
            const i = h(this),
              r = (0, l.M9)(t);
            if ('string' == typeof e) return i.get(e, r);
            const s = {};
            return (
              e.forEach((e) => {
                s[e] = i.get(e, r);
              }),
              s
            );
          }
          originOf(e) {
            return (0, l.x3)(this.originIdOf(e));
          }
          originIdOf(e) {
            return h(this).originOf(e);
          }
          revert(e, t) {
            const i = h(this),
              r = (0, l.M9)(t),
              s = (0, u.vw)(this);
            let n;
            (n = 'string' == typeof e ? ('*' === e ? i.keys(r) : [e]) : e),
              n.forEach((e) => {
                s.invalidate(e), i.revert(e, r), s.commit(e);
              });
          }
        };
        return (
          (t = (0, r._)(
            [(0, p.j)('esri.core.ReadOnlyMultiOriginJSONSupport')],
            t,
          )),
          t
        );
      };
      function h(e) {
        return (0, u.vw)(e).store;
      }
      let E = class extends c(s.Z) {};
      E = (0, r._)([(0, p.j)('esri.core.ReadOnlyMultiOriginJSONSupport')], E);
      var y = i(76169);
      const S = (e) => {
        let t = class extends e {
          constructor(...e) {
            super(...e);
          }
          clear(e, t = 'user') {
            return R(this).delete(e, (0, l.M9)(t));
          }
          write(e = {}, t) {
            return (0, y.c)(this, (e = e || {}), t), e;
          }
          setAtOrigin(e, t, i) {
            (0, u.vw)(this).setAtOrigin(e, t, (0, l.M9)(i));
          }
          removeOrigin(e) {
            const t = R(this),
              i = (0, l.M9)(e),
              r = t.keys(i);
            for (const e of r)
              t.originOf(e) === i && t.set(e, t.get(e, i), l.s3.USER);
          }
          updateOrigin(e, t) {
            const i = R(this),
              r = (0, l.M9)(t),
              s = this.get(e);
            for (let t = r + 1; t < l.kk; ++t) i.delete(e, t);
            i.set(e, s, r);
          }
          toJSON(e) {
            return this.write({}, e);
          }
        };
        return (
          (t = (0, r._)(
            [(0, p.j)('esri.core.WriteableMultiOriginJSONSupport')],
            t,
          )),
          (t.prototype.toJSON.isDefaultToJSON = !0),
          t
        );
      };
      function R(e) {
        return (0, u.vw)(e).store;
      }
      const T = (e) => {
        let t = class extends S(c(e)) {
          constructor(...e) {
            super(...e);
          }
        };
        return (
          (t = (0, r._)([(0, p.j)('esri.core.MultiOriginJSONSupport')], t)), t
        );
      };
      let A = class extends T(s.Z) {};
      A = (0, r._)([(0, p.j)('esri.core.MultiOriginJSONSupport')], A);
    },
    70921: (e, t, i) => {
      i.d(t, { R: () => n, Z: () => s });
      var r = i(80539);
      function s(e, t, i = r.Z) {
        return (
          t || (t = new i()),
          t === e ||
            (t.removeAll(),
            (s = e) &&
            (Array.isArray(s) || ('items' in s && Array.isArray(s.items)))
              ? t.addMany(e)
              : e && t.add(e)),
          t
        );
        var s;
      }
      function n(e) {
        return e;
      }
    },
    79235: (e, t, i) => {
      i.d(t, { Z: () => T });
      var r,
        s = i(43697),
        n = i(67676),
        o = i(35454),
        a = i(96674),
        l = i(67900),
        _ = i(20941),
        d = i(5600),
        u = (i(80442), i(75215), i(71715)),
        p = i(52011),
        c = i(30556);
      const h = (0, o.w)()({
          orthometric: 'gravity-related-height',
          gravity_related_height: 'gravity-related-height',
          ellipsoidal: 'ellipsoidal',
        }),
        E = h.jsonValues.slice();
      (0, n.e$)(E, 'orthometric');
      const y = (0, o.w)()({
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
      let S = (r = class extends a.wq {
        constructor(e) {
          super(e),
            (this.heightModel = 'gravity-related-height'),
            (this.heightUnit = 'meters'),
            (this.vertCRS = null);
        }
        writeHeightModel(e, t, i) {
          return h.write(e, t, i);
        }
        readHeightModel(e, t, i) {
          return (
            h.read(e) ||
            (i &&
              i.messages &&
              i.messages.push(
                (function (e, t) {
                  return new _.Z(
                    'height-model:unsupported',
                    `Height model of value '${e}' is not supported`,
                    t,
                  );
                })(e, { context: i }),
              ),
            null)
          );
        }
        readHeightUnit(e, t, i) {
          return (
            y.read(e) ||
            (i && i.messages && i.messages.push(R(e, { context: i })), null)
          );
        }
        readHeightUnitService(e, t, i) {
          return (
            (0, l.$C)(e) ||
            y.read(e) ||
            (i && i.messages && i.messages.push(R(e, { context: i })), null)
          );
        }
        readVertCRS(e, t) {
          return t.vertCRS || t.ellipsoid || t.geoid;
        }
        clone() {
          return new r({
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
          const i = (0, l.cM)(t);
          return new r({
            heightModel: e.heightModel,
            heightUnit: i,
            vertCRS: e.vertCRS,
          });
        }
        write(e, t) {
          return (t = { origin: 'web-scene', ...t }), super.write(e, t);
        }
        static fromJSON(e) {
          if (!e) return null;
          const t = new r();
          return t.read(e, { origin: 'web-scene' }), t;
        }
      });
      function R(e, t) {
        return new _.Z(
          'height-unit:unsupported',
          `Height unit of value '${e}' is not supported`,
          t,
        );
      }
      (0, s._)(
        [
          (0, d.Cb)({
            type: h.apiValues,
            constructOnly: !0,
            json: {
              origins: { 'web-scene': { type: E, default: 'ellipsoidal' } },
            },
          }),
        ],
        S.prototype,
        'heightModel',
        void 0,
      ),
        (0, s._)(
          [(0, c.c)('web-scene', 'heightModel')],
          S.prototype,
          'writeHeightModel',
          null,
        ),
        (0, s._)(
          [(0, u.r)(['web-scene', 'service'], 'heightModel')],
          S.prototype,
          'readHeightModel',
          null,
        ),
        (0, s._)(
          [
            (0, d.Cb)({
              type: y.apiValues,
              constructOnly: !0,
              json: {
                origins: {
                  'web-scene': { type: y.jsonValues, write: y.write },
                },
              },
            }),
          ],
          S.prototype,
          'heightUnit',
          void 0,
        ),
        (0, s._)(
          [(0, u.r)('web-scene', 'heightUnit')],
          S.prototype,
          'readHeightUnit',
          null,
        ),
        (0, s._)(
          [(0, u.r)('service', 'heightUnit')],
          S.prototype,
          'readHeightUnitService',
          null,
        ),
        (0, s._)(
          [
            (0, d.Cb)({
              type: String,
              constructOnly: !0,
              json: { origins: { 'web-scene': { write: !0 } } },
            }),
          ],
          S.prototype,
          'vertCRS',
          void 0,
        ),
        (0, s._)(
          [(0, u.r)('service', 'vertCRS', ['vertCRS', 'ellipsoid', 'geoid'])],
          S.prototype,
          'readVertCRS',
          null,
        ),
        (S = r = (0, s._)([(0, p.j)('esri.geometry.HeightModelInfo')], S));
      const T = S;
    },
    29600: (e, t, i) => {
      i.d(t, { Z: () => A });
      var r = i(43697),
        s = i(68773),
        n = (i(66577), i(3172)),
        o = i(20102),
        a = i(32448),
        l = i(10699),
        _ = i(83379),
        d = i(92604),
        u = i(95330),
        p = i(17452),
        c = i(5600),
        h = (i(67676), i(80442), i(75215), i(52011)),
        E = i(6570),
        y = i(82971);
      let S = 0;
      const R = d.Z.getLogger('esri.layers.Layer');
      let T = class extends a.Z.EventedMixin((0, l.I)(_.Z)) {
        constructor() {
          super(...arguments),
            (this.attributionDataUrl = null),
            (this.fullExtent = new E.Z(-180, -90, 180, 90, y.Z.WGS84)),
            (this.id = Date.now().toString(16) + '-layer-' + S++),
            (this.legendEnabled = !0),
            (this.listMode = 'show'),
            (this.opacity = 1),
            (this.parent = null),
            (this.popupEnabled = !0),
            (this.attributionVisible = !0),
            (this.spatialReference = y.Z.WGS84),
            (this.title = null),
            (this.type = null),
            (this.url = null),
            (this.visible = !0);
        }
        static async fromArcGISServerUrl(e) {
          const t = 'string' == typeof e ? { url: e } : e,
            r = await i.e(3529).then(i.bind(i, 63529));
          try {
            return await r.fromUrl(t);
          } catch (e) {
            throw (
              (R.error(
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
            r = await i.e(4579).then(i.bind(i, 44579));
          try {
            return await r.fromItem(t);
          } catch (e) {
            const i = t && t.portalItem,
              r = (i && i.id) || 'unset',
              n = (i && i.portal && i.portal.url) || s.Z.portalUrl;
            throw (
              (R.error(
                '#fromPortalItem()',
                "Failed to create layer from portal item (portal: '" +
                  n +
                  "', id: '" +
                  r +
                  "')",
                e,
              ),
              e)
            );
          }
        }
        initialize() {
          this.when().catch((e) => {
            var t, i;
            (0, u.D_)(e) ||
              d.Z.getLogger(this.declaredClass).error(
                '#load()',
                `Failed to load layer (title: '${
                  null != (t = this.title) ? t : 'no title'
                }', id: '${null != (i = this.id) ? i : 'no id'}')`,
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
          return e ? (0, p.mN)(e) : null;
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
          throw new o.Z(
            'layer:no-attribution-data',
            'Layer does not have attribution data',
          );
        }
      };
      (0, r._)(
        [(0, c.Cb)({ type: String })],
        T.prototype,
        'attributionDataUrl',
        void 0,
      ),
        (0, r._)([(0, c.Cb)({ type: E.Z })], T.prototype, 'fullExtent', void 0),
        (0, r._)(
          [(0, c.Cb)({ readOnly: !0 })],
          T.prototype,
          'hasAttributionData',
          null,
        ),
        (0, r._)(
          [(0, c.Cb)({ type: String, clonable: !1 })],
          T.prototype,
          'id',
          void 0,
        ),
        (0, r._)(
          [(0, c.Cb)({ type: Boolean, nonNullable: !0 })],
          T.prototype,
          'legendEnabled',
          void 0,
        ),
        (0, r._)(
          [(0, c.Cb)({ type: ['show', 'hide', 'hide-children'] })],
          T.prototype,
          'listMode',
          void 0,
        ),
        (0, r._)(
          [
            (0, c.Cb)({
              type: Number,
              range: { min: 0, max: 1 },
              nonNullable: !0,
            }),
          ],
          T.prototype,
          'opacity',
          void 0,
        ),
        (0, r._)([(0, c.Cb)({ clonable: !1 })], T.prototype, 'parent', void 0),
        (0, r._)([(0, c.Cb)({ readOnly: !0 })], T.prototype, 'parsedUrl', null),
        (0, r._)(
          [(0, c.Cb)({ type: Boolean })],
          T.prototype,
          'popupEnabled',
          void 0,
        ),
        (0, r._)(
          [(0, c.Cb)({ type: Boolean })],
          T.prototype,
          'attributionVisible',
          void 0,
        ),
        (0, r._)(
          [(0, c.Cb)({ type: y.Z })],
          T.prototype,
          'spatialReference',
          void 0,
        ),
        (0, r._)([(0, c.Cb)({ type: String })], T.prototype, 'title', void 0),
        (0, r._)(
          [(0, c.Cb)({ type: String, readOnly: !0, json: { read: !1 } })],
          T.prototype,
          'type',
          void 0,
        ),
        (0, r._)([(0, c.Cb)()], T.prototype, 'url', void 0),
        (0, r._)(
          [(0, c.Cb)({ type: Boolean, nonNullable: !0 })],
          T.prototype,
          'visible',
          void 0,
        ),
        (T = (0, r._)([(0, h.j)('esri.layers.Layer')], T));
      const A = T;
    },
    58092: (e, t, i) => {
      i.r(t), i.d(t, { default: () => Be });
      var r,
        s,
        n,
        o,
        a,
        l = i(43697),
        _ = i(80539),
        d = i(20102),
        u = i(61247),
        p = i(92604),
        c = i(70586),
        h = i(16453),
        E = i(95330),
        y = i(17445),
        S = i(5600),
        R = (i(67676), i(80442)),
        T = i(75215),
        A = i(71715),
        b = i(52011),
        C = i(17896),
        g = i(65617),
        v = i(29600),
        N = i(3172);
      !(function (e) {
        (e[(e.Binary = 0)] = 'Binary'), (e[(e.JSON = 1)] = 'JSON');
      })(r || (r = {})),
        (function (e) {
          (e[(e.TreeIndex = 0)] = 'TreeIndex'),
            (e[(e.TreeStats = 1)] = 'TreeStats'),
            (e[(e.TreeData = 2)] = 'TreeData'),
            (e[(e.BrickBundles = 3)] = 'BrickBundles'),
            (e[(e.Section = 4)] = 'Section'),
            (e[(e.VariableStats = 5)] = 'VariableStats');
        })(s || (s = {})),
        (function (e) {
          (e[(e.None = 1)] = 'None'),
            (e[(e.Front = 2)] = 'Front'),
            (e[(e.Back = 3)] = 'Back');
        })(n || (n = {})),
        (function (e) {
          (e[(e.Low = 0)] = 'Low'),
            (e[(e.Medium = 1)] = 'Medium'),
            (e[(e.High = 2)] = 'High');
        })(o || (o = {})),
        (function (e) {
          (e[(e.None = 0)] = 'None'),
            (e[(e.StaticSections = 1)] = 'StaticSections'),
            (e[(e.Slices = 2)] = 'Slices'),
            (e[(e.DynamicSections = 4)] = 'DynamicSections'),
            (e[(e.GhostShell = 8)] = 'GhostShell'),
            (e[(e.Isosurface = 16)] = 'Isosurface'),
            (e[(e.Quality = 32)] = 'Quality'),
            (e[(e.SunLocation = 64)] = 'SunLocation'),
            (e[(e.StaticSectionSelection = 128)] = 'StaticSectionSelection'),
            (e[(e.ExaggerationAndOffset = 256)] = 'ExaggerationAndOffset'),
            (e[(e.CurrentTime = 512)] = 'CurrentTime'),
            (e[(e.CurrentVariable = 1024)] = 'CurrentVariable'),
            (e[(e.DeleteIsosurface = 2048)] = 'DeleteIsosurface'),
            (e[(e.ContainerVisibility = 4096)] = 'ContainerVisibility'),
            (e[(e.RenderMode = 8192)] = 'RenderMode'),
            (e[(e.Optimization = 16384)] = 'Optimization');
        })(a || (a = {}));
      var m = i(99880);
      function I(e) {
        return (0, m.V)(`esri/libs/vxl/${e}`);
      }
      var L = i(50173),
        f = i(97995),
        w = i(54738),
        O = i(35371);
      const M = p.Z.getLogger('esri.layers.VoxelWasmPerScene');
      var x;
      !(function (e) {
        (e[(e.Lifetime = 1)] = 'Lifetime'),
          (e[(e.RequestResponse = 2)] = 'RequestResponse'),
          (e[(e.Rendering = 3)] = 'Rendering'),
          (e[(e.Error = 4)] = 'Error');
      })(x || (x = {}));
      class P {
        constructor(e) {
          (this._halfIntTexturesAvailable = !1),
            (this._havePreparedWithAllLayers = !1),
            (this._renderPluginContext = null),
            (this._vxl = null),
            (this._pluginIsActive = !1),
            (this._moreToLoad = !1),
            (this._viewportWidth = -1),
            (this._viewportHeight = -1),
            (this._newLayers = []),
            (this._layers = new Map()),
            (this._renderPass = L.C.MATERIAL),
            (this._renderSlot = f.r.VOXEL),
            (this._rctx = null),
            (this._renderTargetToRestore = null),
            (this._lastFrameWasStationary = !1),
            (this._wasmMemBlockSizes = [
              512, 1024, 2048, 4096, 8192, 16384, 32768, 65536,
            ]),
            (this._wasmMemBlocks = new Map()),
            (this._dbgFlags = new Set()),
            (this._view = e),
            this._initialize();
        }
        get canRender() {
          return !!this._vxl && 'local' === this._view.viewingMode;
        }
        _dbg(e, t) {
          this._dbgFlags.has(e) && (e === x.Error ? M.error(t) : M.warn(t));
        }
        _removeRenderPlugin() {
          this._pluginIsActive &&
            this._view._stage &&
            (this._dbg(x.Lifetime, '--removeRenderPlugin--'),
            this._view._stage.removeRenderPlugin(this)),
            (this._pluginIsActive = !1);
        }
        _initialize() {
          this._dbg(x.Lifetime, '--initialize--');
          for (const e of this._wasmMemBlockSizes)
            this._wasmMemBlocks.set(e, 0);
          (this._readyWatchHandle = (0, y.YP)(
            () => this._view.ready,
            (e) => {
              e && 'local' === this._view.viewingMode
                ? (this._dbg(
                    x.Lifetime,
                    'view ready status changed to ready on a local view, calling addRenderPlugin',
                  ),
                  this._view._stage.addRenderPlugin([this._renderSlot], this),
                  (this._pluginIsActive = !0))
                : (this._dbg(
                    x.Lifetime,
                    'view ready status changed, not ready or not a local view!',
                  ),
                  this._removeRenderPlugin());
            },
            { initial: !0 },
          )),
            (this._qualityWatchHandle = (0, y.YP)(
              () => {
                var e;
                return null == (e = this._view) ? void 0 : e.qualityProfile;
              },
              (e) => {
                this._dbg(x.Rendering, 'qualityProfile changed to ' + e),
                  this._vxl && this._vxl.set_quality(this._toWasmQuality(e));
              },
              { initial: !0 },
            )),
            (this._timeExtentWatchHandle = (0, y.YP)(
              () => {
                var e;
                return null == (e = this._view) ? void 0 : e.timeExtent;
              },
              () => {
                if (this._vxl) {
                  var e;
                  const t = this._getTimeArgs(
                    null == (e = this._view) ? void 0 : e.timeExtent,
                  );
                  this._dbg(
                    x.Rendering,
                    'sceneView timeExtent changed to useTime=' +
                      t.useTime +
                      ' st=' +
                      t.startTime +
                      ' et=' +
                      t.endTime,
                  ),
                    this._vxl.set_scene_time_extent(
                      t.startTime,
                      t.endTime,
                      t.useTime,
                    ),
                    this._renderPluginContext.requestRender();
                }
              },
              { initial: !0 },
            )),
            (this._stationaryWatchHandle = (0, y.YP)(
              () => {
                var e;
                return null == (e = this._view) ? void 0 : e.stationary;
              },
              (e) => {
                this._vxl &&
                  e &&
                  !this._lastFrameWasStationary &&
                  this._renderPluginContext.requestRender();
              },
            ));
        }
        initializeRenderContext(e) {
          this._dbg(x.Lifetime, '--initializeRenderContext--');
          const t = e.renderContext.rctx;
          t.type === w.zO.WEBGL2
            ? ((this._renderPluginContext = e),
              (this._rctx = e.renderContext.rctx),
              (this._halfIntTexturesAvailable =
                !!this._rctx.capabilities.textureNorm16),
              this._initializeWasm(t.gl))
            : this._dbg(x.Error, 'WebGL 1 context only!');
        }
        uninitializeRenderContext() {
          (this._renderPluginContext = null),
            (this._rctx = null),
            this._dbg(x.Lifetime, '--uninitializeRenderContext--');
        }
        _restoreFramebuffer() {
          if (!this._renderTargetToRestore) return;
          const e = this._renderTargetToRestore.fbo;
          if (!this._rctx)
            return void this._dbg(x.Error, 'no context in restoreFramebuffer!');
          this._rctx.bindFramebuffer(e, !0);
          const t = this._renderTargetToRestore.viewport;
          this._rctx.setViewport(t.x, t.y, t.width, t.height);
        }
        _bindPreviousDepthToSlot(e, t) {
          const i = !!this._rctx,
            r = !!this._renderTargetToRestore;
          if (!i || !r) return 0;
          const s = this._renderTargetToRestore.fbo.depthStencilTexture;
          return s
            ? (0 === t
                ? this._rctx.bindTexture(null, e, !0)
                : this._rctx.bindTexture(s, e, !0),
              1)
            : (this._dbg(x.Error, 'no depth/stencil texture exists!'), 0);
        }
        _modifyResourceCount(e, t, i) {
          if (!this._rctx)
            return void this._dbg(
              x.Error,
              'modifyAllocation callback has no rendering context!',
            );
          const r = e;
          1 === i
            ? this._rctx.instanceCounter.increment(r, t)
            : this._rctx.instanceCounter.decrement(r, t);
        }
        _setBlendState(e, t, i, r) {
          this._rctx
            ? (this._rctx.setBlendingEnabled(1 === e),
              this._rctx.setBlendFunction(t, i),
              this._rctx.setBlendEquation(r))
            : this._dbg(
                x.Error,
                'setBlendState callback has no rendering context!',
              );
        }
        _setFrontFace(e) {
          this._rctx
            ? this._rctx.setFrontFace(e)
            : this._dbg(
                x.Error,
                'setFrontFace callback has no rendering context!',
              );
        }
        _setDepthStencilStateFunction(e, t, i) {
          this._rctx
            ? (this._rctx.setDepthFunction(i),
              this._rctx.setDepthTestEnabled(1 === e),
              this._rctx.setDepthWriteEnabled(1 === t),
              this._rctx.setStencilTestEnabled(!1),
              this._rctx.setStencilFunction(O.wb.ALWAYS, 0, 255),
              this._rctx.setStencilOpSeparate(
                O.LR.FRONT,
                O.xS.KEEP,
                O.xS.INCR,
                O.xS.KEEP,
              ),
              this._rctx.setStencilOpSeparate(
                O.LR.BACK,
                O.xS.KEEP,
                O.xS.DECR,
                O.xS.KEEP,
              ))
            : this._dbg(
                x.Error,
                'setDepthStencilStateFunction callback has no rendering context!',
              );
        }
        _setRasterizerState(e) {
          if (this._rctx)
            switch (e) {
              case n.None:
                this._rctx.setFaceCullingEnabled(!1);
                break;
              case n.Back:
                this._rctx.setCullFace(O.LR.BACK),
                  this._rctx.setFaceCullingEnabled(!0);
                break;
              case n.Front:
                this._rctx.setCullFace(O.LR.FRONT),
                  this._rctx.setFaceCullingEnabled(!0);
            }
          else
            this._dbg(
              x.Error,
              'setRasterizerState callback has no rendering context!',
            );
        }
        _setViewport(e, t, i, r) {
          this._rctx
            ? this._rctx.setViewport(e, t, i, r)
            : this._dbg(
                x.Error,
                'setViewport callback has no rendering context!',
              );
        }
        _updateMemoryUsage() {
          this._layers.forEach((e, t) => {
            if (e.needMemoryUsageUpdate) {
              const i = this._vxl.estimate_memory_usage(t);
              i >= 0 &&
                ((e.needMemoryUsageUpdate = !1), e.layerView.setUsedMemory(i));
            }
          });
        }
        _syncRequestsResponses() {
          this._layers.forEach((e, t) => {
            const i = [];
            e.responses.forEach((r, n) => {
              i.push(n),
                this._dbg(
                  x.RequestResponse,
                  'responding for requestID:' + n + ' size:' + r.size,
                ),
                this._vxl.respond(t, n, r),
                (r.requestType !== s.TreeIndex &&
                  r.requestType !== s.Section) ||
                  (e.needMemoryUsageUpdate = !0);
            });
            const r = e.responses;
            for (const e of i) r.delete(e);
            const n = this._vxl.get_new_requests(t),
              o = e.abortController.signal;
            for (const t in n) {
              (e.outstandingRequestCount += 1),
                1 === e.outstandingRequestCount &&
                  e.layerView.updatingFlagChanged();
              const i = n[t],
                s = { responseType: 'array-buffer', signal: o };
              this._dbg(
                x.RequestResponse,
                'making requestID:' + t + ' url:' + i.url,
              ),
                (0, N.default)(i.url, s)
                  .then((s) => {
                    (e.outstandingRequestCount -= 1),
                      0 === e.outstandingRequestCount &&
                        e.layerView.updatingFlagChanged(),
                      this._dbg(
                        x.RequestResponse,
                        'have response for requestID:' + t,
                      );
                    let n = 0;
                    if (s.data.byteLength > 0) {
                      n = this._vxl._malloc(s.data.byteLength);
                      const e = new Uint8Array(
                          this._vxl.HEAPU8.buffer,
                          n,
                          s.data.byteLength,
                        ),
                        t = new Uint8Array(s.data);
                      for (let i = 0; i < s.data.byteLength; ++i) e[i] = t[i];
                    }
                    r.set(+t, {
                      responseType: i.responseType,
                      ptr: n,
                      size: s.data.byteLength,
                      success: !0,
                      requestType: i.requestType,
                    });
                  })
                  .catch((s) => {
                    (e.outstandingRequestCount -= 1),
                      0 === e.outstandingRequestCount &&
                        e.layerView.updatingFlagChanged(),
                      (0, E.D_)(s) ||
                        (this._dbg(
                          x.Error,
                          `requestID:${t} failed, error=${s.toString()}`,
                        ),
                        r.set(+t, {
                          responseType: i.responseType,
                          ptr: 0,
                          size: 0,
                          success: !1,
                          requestType: i.requestType,
                        }));
                  });
            }
          });
        }
        updateWasmCamera(e) {
          this._vxl.set_projection_matrix.apply(this._vxl, e.projectionMatrix),
            this._vxl.set_view_matrix.apply(this._vxl, e.viewMatrix),
            this._vxl.set_near_far(e.near, e.far);
        }
        isUpdating(e) {
          return (
            !(this._vxl || !this._vxlPromise) ||
            (!!this._layers.has(e) &&
              this._layers.get(e).outstandingRequestCount > 0)
          );
        }
        setEnabled(e, t) {
          this._layers.forEach((i, r) => {
            i.layerView === e &&
              (this._vxl.set_enabled(r, t),
              this._renderPluginContext.requestRender());
          });
        }
        setSlices(e, t) {
          const i = {
            mask: a.Slices,
            slices: { planes: t, currentEditPlane: -1 },
          };
          return this._doMaskedUIUpdate(e, i, !0);
        }
        setDynamicSections(e, t) {
          const i = {
            mask: a.DynamicSections,
            dynamicSections: { planes: t, currentEditPlane: -1 },
          };
          return this._doMaskedUIUpdate(e, i, !0);
        }
        setStaticSections(e, t) {
          const i = { mask: a.StaticSections, staticSections: t };
          return this._doMaskedUIUpdate(e, i, !0);
        }
        setCurrentVariable(e, t) {
          const i = { mask: a.CurrentVariable, currentVariable: t };
          return this._doMaskedUIUpdate(e, i, !0);
        }
        setRenderMode(e, t) {
          const i = { mask: a.RenderMode, renderMode: t };
          return this._doMaskedUIUpdate(e, i, !0);
        }
        _doMaskedUIUpdate(e, t, i) {
          if (!this._vxl) return !1;
          let r = !1;
          return (
            this._layers.forEach((i, s) => {
              if (i.layerView === e) {
                const e = {
                  str: JSON.stringify(t),
                  byteCount: 0,
                  ptr: 0,
                  isReusable: !1,
                };
                this._allocateBlock(e) &&
                  ((r =
                    1 ===
                    this._vxl.handle_masked_ui_update(s, e.ptr, e.byteCount)),
                  e.isReusable || this._vxl._free(e.ptr));
              }
            }),
            r && i && this._renderPluginContext.requestRender(),
            r
          );
        }
        addVoxelLayer(e) {
          if (!this._vxl) {
            const t = {
                layerView: e,
                resolveCallback: null,
                rejectCallback: null,
              },
              i = new Promise((e, i) => {
                (t.resolveCallback = e), (t.rejectCallback = i);
              });
            return this._newLayers.push(t), i;
          }
          const t = this._addVoxelLayer(e);
          return t < 0 ? Promise.reject(-1) : Promise.resolve(t);
        }
        removeVoxelLayer(e) {
          if (!this._vxl) {
            const t = this._newLayers.findIndex((t) => e === t.layerView);
            t >= 0 &&
              (this._newLayers[t].resolveCallback(-1),
              this._newLayers.splice(t, 1));
            const i = this._newLayers.length;
            return (
              0 === i &&
                (this._dbg(
                  x.Lifetime,
                  ' no voxel layers left after removing a layer, removing RenderPlugin and destroying',
                ),
                this.destroy()),
              i
            );
          }
          let t = -1;
          this._layers.forEach((i, r) => {
            i.layerView === e &&
              ((t = r), i.abortController.abort(), this._vxl.remove_layer(t));
          }),
            t >= 0 && this._layers.delete(t);
          const i = this._layers.size;
          return (
            0 === i &&
              (this._dbg(
                x.Lifetime,
                ' no voxel layers left after removing a layer, removing RenderPlugin and destroying',
              ),
              this.destroy()),
            i
          );
        }
        _getBlockSize(e) {
          for (const t of this._wasmMemBlockSizes) if (e < t) return t;
          return -1;
        }
        _allocateBlock(e) {
          e.byteCount = this._vxl.lengthBytesUTF8(e.str) + 1;
          const t = this._getBlockSize(e.byteCount);
          return (
            t < 0
              ? ((e.isReusable = !1), (e.ptr = this._vxl._malloc(e.byteCount)))
              : ((e.isReusable = !0),
                (e.ptr = this._wasmMemBlocks.get(t)),
                0 === e.ptr &&
                  ((e.ptr = this._vxl._malloc(t)),
                  this._wasmMemBlocks.set(t, e.ptr))),
            0 !== e.ptr &&
              (this._vxl.stringToUTF8(e.str, e.ptr, e.byteCount), !0)
          );
        }
        _getTimeArgs(e) {
          let t = -Number.MAX_VALUE,
            i = Number.MAX_VALUE,
            r = !1;
          return (
            (0, c.pC)(e) &&
              (e.isAllTime
                ? (r = !0)
                : ((0, c.pC)(e.start) &&
                    ((r = !0), (t = e.start.getTime() / 1e3)),
                  (0, c.pC)(e.end) && ((r = !0), (i = e.end.getTime() / 1e3)))),
            { startTime: t, endTime: i, useTime: r }
          );
        }
        _addVoxelLayer(e) {
          var t;
          const i = e.layer;
          let r = -1;
          const s = i.getConfiguration();
          if (s.length < 1) return -1;
          const n = { str: s, byteCount: 0, ptr: 0, isReusable: !1 };
          if (!this._allocateBlock(n)) return -1;
          const o = this._getTimeArgs(
              null == (t = this._view) ? void 0 : t.timeExtent,
            ),
            a =
              this._view.spatialReference.isWGS84 && i.spatialReference.isWGS84
                ? 111319.49079327357
                : 1;
          if (
            ((r = this._vxl.add_layer(
              i.serviceRoot,
              n.ptr,
              n.byteCount,
              a,
              a,
              o.startTime,
              o.endTime,
              o.useTime,
              this._toWasmQuality(this._view.qualityProfile),
            )),
            n.isReusable || this._vxl._free(n.ptr),
            r >= 0)
          ) {
            const t = new AbortController();
            if (
              (this._layers.set(r, {
                layerView: e,
                responses: new Map(),
                outstandingRequestCount: 0,
                abortController: t,
                needMemoryUsageUpdate: !1,
              }),
              !this._halfIntTexturesAvailable || (0, R.Z)('mac'))
            ) {
              const t = [];
              let i = '';
              for (const r of e.layer.variables)
                ('Int16' !== r.renderingFormat.type &&
                  'UInt16' !== r.renderingFormat.type) ||
                  (t.push(r.name),
                  r.id === e.layer.style.currentVariableId && (i = r.name));
              '' !== i &&
                M.error(
                  '#addVoxelLayer_error()',
                  e.layer,
                  `The voxel layer '${e.layer.title}' cannot render the current variable '${i}' in this browser`,
                ),
                t.length > 0 &&
                  M.warn(
                    '#addVoxelLayer_warning()',
                    e.layer,
                    `The voxel layer '${
                      e.layer.title
                    }' cannot render the variables '${t.toString()}' in this browser`,
                  );
            }
            return (
              (0, R.Z)('esri-mobile') &&
                M.warnOnce(
                  'Mobile support differs across devices. Voxel layer might not display as expected.',
                ),
              r
            );
          }
          return -1;
        }
        prepareRender(e) {
          if (!this._vxl) return;
          const t = e.viewForward,
            i = e.eye;
          this._vxl.update_camera_pos_and_direction(
            i[0],
            i[1],
            i[2],
            t[0],
            t[1],
            t[2],
          );
          const r = this._vxl.cull();
          this._dbg(x.RequestResponse, 'missingResourceCount=' + r),
            (this._moreToLoad = r > 0),
            (this._havePreparedWithAllLayers = 0 === this._newLayers.length),
            this._updateMemoryUsage();
        }
        render(e) {
          if (
            !this._vxl ||
            e.pass !== this._renderPass ||
            e.slot !== this._renderSlot
          )
            return;
          for (const e of this._newLayers) {
            const t = this._addVoxelLayer(e.layerView);
            -1 === t ? e.rejectCallback(-1) : e.resolveCallback(t);
          }
          if (((this._newLayers = []), 0 === this._layers.size))
            return void this._dbg(
              x.Error,
              'No voxel layers but RenderPlugin instance is being asked to render!',
            );
          (this._renderTargetToRestore = {
            fbo: this._rctx.getBoundFramebufferObject(),
            viewport: this._rctx.getViewport(),
          }),
            this._syncRequestsResponses(),
            (this._lastFrameWasStationary = this._view.stationary),
            this._rctx.setPolygonOffsetFillEnabled(!1),
            this._rctx.setScissorTestEnabled(!1),
            this._rctx.setColorMask(!0, !0, !0, !0),
            this._vxl.begin_color_frame(
              !this._view.stationary || this._moreToLoad,
              e.scenelightingData.lightingMainDirection[0],
              e.scenelightingData.lightingMainDirection[1],
              e.scenelightingData.lightingMainDirection[2],
            );
          const t = this._renderTargetToRestore.viewport;
          (t.width === this._viewportWidth &&
            t.height === this._viewportHeight) ||
            ((this._viewportWidth = t.width),
            (this._viewportHeight = t.height),
            this._vxl.set_viewport(t.width, t.height),
            this._layers.forEach((e) => {
              e.needMemoryUsageUpdate = !0;
            })),
            (0 === t.x && 0 === t.y) ||
              this._dbg(x.Error, 'Unsupported viewport parameters detected!'),
            this.updateWasmCamera(e.camera),
            this._vxl.draw(),
            (this._renderTargetToRestore.fbo = null),
            e.rctx.externalTextureUnitUpdate(
              this._vxl.get_texture_units_bound_in_frame(),
              this._vxl.get_active_texture_unit(),
            ),
            e.rctx.externalVertexArrayObjectUpdate(),
            e.rctx.externalVertexBufferUpdate(),
            this._rctx.externalProgramUpdate(),
            (this._moreToLoad ||
              (!this._havePreparedWithAllLayers && this._layers.size > 0)) &&
              this._renderPluginContext.requestRender();
        }
        destroy() {
          this._dbg(x.Lifetime, '--destroy--'),
            this._removeRenderPlugin(),
            (this._readyWatchHandle = (0, c.hw)(this._readyWatchHandle)),
            (this._qualityWatchHandle = (0, c.hw)(this._qualityWatchHandle)),
            (this._timeExtentWatchHandle = (0, c.hw)(
              this._timeExtentWatchHandle,
            )),
            (this._stationaryWatchHandle = (0, c.hw)(
              this._stationaryWatchHandle,
            )),
            this._vxl &&
              (this._layers.forEach((e) => {
                e.abortController.abort();
              }),
              this._wasmMemBlocks.forEach((e) => {
                0 !== e && this._vxl._free(e);
              }),
              this._vxl.uninitialize_voxel_wasm(),
              (this._vxl = null));
        }
        _initializeWasm(e) {
          return this._vxl
            ? Promise.resolve()
            : (this._vxlPromise ||
                (this._vxlPromise = (function (e) {
                  return new Promise((t) =>
                    i
                      .e(6550)
                      .then(i.bind(i, 6550))
                      .then((e) => e.v)
                      .then(({ default: i }) => {
                        const r = i({
                          locateFile: I,
                          preinitializedWebGLContext: e,
                          onRuntimeInitialized: () => t(r),
                        });
                      }),
                  ).catch((e) => Promise.reject(e));
                })(e)
                  .then((e) => {
                    var t;
                    if (
                      ((this._vxl = e),
                      (this._vxlPromise = null),
                      this._newLayers.length <= 0)
                    )
                      return (
                        this._dbg(
                          x.Lifetime,
                          ' no voxel layers left after WASM downloaded, removing RenderPlugin and destroying',
                        ),
                        void this.destroy()
                      );
                    const i = this._getTimeArgs(
                        null == (t = this._view) ? void 0 : t.timeExtent,
                      ),
                      r = this._vxl.addFunction(
                        this._restoreFramebuffer.bind(this),
                        'v',
                      ),
                      s = this._vxl.addFunction(
                        this._setBlendState.bind(this),
                        'viiii',
                      ),
                      n = this._vxl.addFunction(
                        this._setFrontFace.bind(this),
                        'vi',
                      ),
                      o = this._vxl.addFunction(
                        this._setRasterizerState.bind(this),
                        'vi',
                      ),
                      a = this._vxl.addFunction(
                        this._setDepthStencilStateFunction.bind(this),
                        'viii',
                      ),
                      l = this._vxl.addFunction(
                        this._setViewport.bind(this),
                        'viiii',
                      ),
                      _ = this._vxl.addFunction(
                        this._bindPreviousDepthToSlot.bind(this),
                        'iii',
                      ),
                      d = this._vxl.addFunction(
                        this._modifyResourceCount.bind(this),
                        'viii',
                      ),
                      u = this._halfIntTexturesAvailable && !(0, R.Z)('mac');
                    this._vxl.initialize_voxel_wasm(
                      r,
                      s,
                      n,
                      o,
                      a,
                      l,
                      _,
                      d,
                      i.startTime,
                      i.endTime,
                      i.useTime,
                      u,
                    ),
                      this._renderPluginContext &&
                        this._renderPluginContext.requestRender();
                  })
                  .catch(() => {
                    for (const e of this._newLayers) e.rejectCallback(-2);
                    this._dbg(
                      x.Error,
                      ' WASM failed to download, removing RenderPlugin and destroying',
                    ),
                      this.destroy();
                  })),
              this._vxlPromise);
        }
        pickDepth(e, t, i) {
          if (!this._vxl || !this._rctx || 0 === this._layers.size) return null;
          const r = i.viewport[3] - t;
          if (e < 0 || e > i.viewport[2] || t < 0 || t > i.viewport[3])
            return (
              this._dbg(
                x.Error,
                `pickDepth: outOfRange, screenXY=[${e}, ${r}], vp=[${i.viewport.toString()}]`,
              ),
              null
            );
          this._renderTargetToRestore = {
            fbo: this._rctx.getBoundFramebufferObject(),
            viewport: this._rctx.getViewport(),
          };
          const s = i.viewForward,
            n = i.eye;
          this._vxl.update_camera_pos_and_direction(
            n[0],
            n[1],
            n[2],
            s[0],
            s[1],
            s[2],
          ),
            this.updateWasmCamera(i),
            this._vxl.begin_frame();
          const o = this._vxl.pick_depth(e, r);
          return (
            (this._renderTargetToRestore.fbo = null),
            this._rctx.externalTextureUnitUpdate(
              this._vxl.get_texture_units_bound_in_frame(),
              this._vxl.get_active_texture_unit(),
            ),
            this._rctx.externalVertexArrayObjectUpdate(),
            this._rctx.externalVertexBufferUpdate(),
            this._rctx.externalProgramUpdate(),
            o.success ? o.distanceToCamera : null
          );
        }
        _toWasmQuality(e) {
          switch (e) {
            case 'low':
              return 0;
            case 'medium':
              return 1;
            case 'high':
              return 2;
          }
        }
      }
      class D {
        constructor() {
          this.view2WASM = new Map();
        }
        static getInstance() {
          return D.instance || (D.instance = new D()), D.instance;
        }
        getVoxelWasmPerSceneView(e) {
          return this.view2WASM.has(e) ? this.view2WASM.get(e) : null;
        }
        isUpdating(e, t) {
          return !!this.view2WASM.has(e) && this.view2WASM.get(e).isUpdating(t);
        }
        addLayer(e, t) {
          return (
            this.view2WASM.has(e) || this.view2WASM.set(e, new P(e)),
            this.view2WASM.get(e).addVoxelLayer(t)
          );
        }
        removeLayer(e, t) {
          this.view2WASM.has(e) &&
            this.view2WASM.get(e).removeVoxelLayer(t) < 1 &&
            this.view2WASM.delete(e);
        }
        setLayerEnabled(e, t, i) {
          this.view2WASM.has(e) && this.view2WASM.get(e).setEnabled(t, i);
        }
        setLayerSlices(e, t) {
          let i = !1;
          return (
            this.view2WASM.forEach((r, s) => {
              s.allLayerViews
                .filter((e) => 'voxel-3d' === e.type)
                .forEach((s) => {
                  s.layer === e && (i = r.setSlices(s, t));
                });
            }),
            i
          );
        }
        setLayerDynamicSections(e, t) {
          let i = !1;
          return (
            this.view2WASM.forEach((r, s) => {
              s.allLayerViews
                .filter((e) => 'voxel-3d' === e.type)
                .forEach((s) => {
                  s.layer === e && (i = r.setDynamicSections(s, t));
                });
            }),
            i
          );
        }
        setLayerCurrentVariable(e, t) {
          let i = !1;
          return (
            this.view2WASM.forEach((r, s) => {
              s.allLayerViews
                .filter((e) => 'voxel-3d' === e.type)
                .forEach((s) => {
                  s.layer === e && (i = r.setCurrentVariable(s, t));
                });
            }),
            i
          );
        }
        setLayerRenderMode(e, t) {
          let i = !1;
          return (
            this.view2WASM.forEach((r, s) => {
              s.allLayerViews
                .filter((e) => 'voxel-3d' === e.type)
                .forEach((s) => {
                  s.layer === e && (i = r.setRenderMode(s, t));
                });
            }),
            i
          );
        }
        setLayerStaticSections(e, t) {
          let i = !1;
          return (
            this.view2WASM.forEach((r, s) => {
              s.allLayerViews
                .filter((e) => 'voxel-3d' === e.type)
                .forEach((s) => {
                  s.layer === e && (i = r.setStaticSections(s, t));
                });
            }),
            i
          );
        }
      }
      var U = i(54295),
        G = i(17287),
        B = i(38009),
        F = i(16859),
        V = i(72965),
        H = i(32271),
        j = i(66677),
        W = i(21506),
        q = i(96674);
      let k = class extends q.wq {
        constructor() {
          super(...arguments),
            (this.enabled = !0),
            (this.label = ''),
            (this.normal = null),
            (this.point = null);
        }
      };
      (0, l._)(
        [(0, S.Cb)({ type: Boolean, json: { default: !0, write: !0 } })],
        k.prototype,
        'enabled',
        void 0,
      ),
        (0, l._)(
          [(0, S.Cb)({ type: String, json: { write: !0 } })],
          k.prototype,
          'label',
          void 0,
        ),
        (0, l._)(
          [(0, S.Cb)({ type: [Number], json: { write: !0 } })],
          k.prototype,
          'normal',
          void 0,
        ),
        (0, l._)(
          [(0, S.Cb)({ type: [Number], json: { write: !0 } })],
          k.prototype,
          'point',
          void 0,
        ),
        (k = (0, l._)(
          [(0, b.j)('esri.layers.support.VoxelDynamicSection')],
          k,
        ));
      const Z = k;
      let z = class extends q.wq {
        constructor() {
          super(...arguments),
            (this.enabled = !0),
            (this.label = ''),
            (this.normal = null),
            (this.point = null);
        }
      };
      (0, l._)(
        [(0, S.Cb)({ type: Boolean, json: { write: !0 } })],
        z.prototype,
        'enabled',
        void 0,
      ),
        (0, l._)(
          [(0, S.Cb)({ type: String, json: { write: !0 } })],
          z.prototype,
          'label',
          void 0,
        ),
        (0, l._)(
          [(0, S.Cb)({ type: [Number], json: { write: !0 } })],
          z.prototype,
          'normal',
          void 0,
        ),
        (0, l._)(
          [(0, S.Cb)({ type: [Number], json: { write: !0 } })],
          z.prototype,
          'point',
          void 0,
        ),
        (z = (0, l._)([(0, b.j)('esri.layers.support.VoxelSlice')], z));
      const Y = z;
      var X = i(25929);
      let $ = class extends q.wq {
        constructor() {
          super(...arguments),
            (this.enabled = !0),
            (this.href = null),
            (this.id = null),
            (this.label = ''),
            (this.normal = null),
            (this.point = null),
            (this.sizeInPixel = null),
            (this.slices = null),
            (this.timeId = 0),
            (this.variableId = null);
        }
        readHref(e, t, i) {
          return (0, X.f)(e, i);
        }
      };
      (0, l._)(
        [(0, S.Cb)({ type: Boolean, json: { default: !0, write: !0 } })],
        $.prototype,
        'enabled',
        void 0,
      ),
        (0, l._)(
          [
            (0, S.Cb)({
              type: String,
              json: { write: { enabled: !0, isRequired: !0 } },
            }),
          ],
          $.prototype,
          'href',
          void 0,
        ),
        (0, l._)(
          [(0, A.r)(['service', 'web-scene'], 'href')],
          $.prototype,
          'readHref',
          null,
        ),
        (0, l._)(
          [
            (0, S.Cb)({
              type: T.z8,
              json: { write: { enabled: !0, isRequired: !0 } },
            }),
          ],
          $.prototype,
          'id',
          void 0,
        ),
        (0, l._)(
          [(0, S.Cb)({ type: String, json: { write: !0 } })],
          $.prototype,
          'label',
          void 0,
        ),
        (0, l._)(
          [
            (0, S.Cb)({
              type: [Number],
              json: { write: { enabled: !0, isRequired: !0 } },
            }),
          ],
          $.prototype,
          'normal',
          void 0,
        ),
        (0, l._)(
          [
            (0, S.Cb)({
              type: [Number],
              json: { write: { enabled: !0, isRequired: !0 } },
            }),
          ],
          $.prototype,
          'point',
          void 0,
        ),
        (0, l._)(
          [
            (0, S.Cb)({
              type: [T.z8],
              json: { write: { enabled: !0, isRequired: !0 } },
            }),
          ],
          $.prototype,
          'sizeInPixel',
          void 0,
        ),
        (0, l._)(
          [(0, S.Cb)({ type: [Y], json: { write: !0 } })],
          $.prototype,
          'slices',
          void 0,
        ),
        (0, l._)(
          [(0, S.Cb)({ type: T.z8, json: { default: 0, write: !0 } })],
          $.prototype,
          'timeId',
          void 0,
        ),
        (0, l._)(
          [
            (0, S.Cb)({
              type: T.z8,
              json: { write: { enabled: !0, isRequired: !0 } },
            }),
          ],
          $.prototype,
          'variableId',
          void 0,
        ),
        ($ = (0, l._)([(0, b.j)('esri.layers.support.VoxelSection')], $));
      const J = $;
      var Q = i(70921);
      let K = class extends q.wq {
        constructor() {
          super(...arguments),
            (this.diffuseFactor = 0.5),
            (this.specularFactor = 0.5);
        }
      };
      (0, l._)(
        [
          (0, S.Cb)({
            type: Number,
            range: { min: 0, max: 1 },
            json: { default: 0.5, write: !0 },
          }),
        ],
        K.prototype,
        'diffuseFactor',
        void 0,
      ),
        (0, l._)(
          [
            (0, S.Cb)({
              type: Number,
              range: { min: 0, max: 1 },
              json: { default: 0.5, write: !0 },
            }),
          ],
          K.prototype,
          'specularFactor',
          void 0,
        ),
        (K = (0, l._)([(0, b.j)('esri.layers.support.VoxelSimpleShading')], K));
      const ee = K;
      var te = i(22303);
      let ie = class extends q.wq {
        constructor() {
          super(...arguments),
            (this.color = null),
            (this.value = null),
            (this.enabled = !0),
            (this.label = null);
        }
      };
      (0, l._)(
        [
          (0, S.Cb)({
            type: te.Z,
            json: { type: [T.z8], write: { enabled: !0, isRequired: !0 } },
          }),
        ],
        ie.prototype,
        'color',
        void 0,
      ),
        (0, l._)(
          [
            (0, S.Cb)({
              type: Number,
              json: { write: { enabled: !0, isRequired: !0 } },
            }),
          ],
          ie.prototype,
          'value',
          void 0,
        ),
        (0, l._)(
          [(0, S.Cb)({ type: Boolean, json: { default: !0, write: !0 } })],
          ie.prototype,
          'enabled',
          void 0,
        ),
        (0, l._)(
          [(0, S.Cb)({ type: String, json: { write: !0 } })],
          ie.prototype,
          'label',
          void 0,
        ),
        (ie = (0, l._)([(0, b.j)('esri.layers.support.VoxelIsosurface')], ie));
      const re = ie;
      let se = class extends q.wq {
        constructor() {
          super(...arguments), (this.alpha = 0), (this.position = 0);
        }
      };
      (0, l._)(
        [
          (0, S.Cb)({
            type: Number,
            json: { write: { enabled: !0, isRequired: !0 } },
          }),
        ],
        se.prototype,
        'alpha',
        void 0,
      ),
        (0, l._)(
          [
            (0, S.Cb)({
              type: Number,
              json: { write: { enabled: !0, isRequired: !0 } },
            }),
          ],
          se.prototype,
          'position',
          void 0,
        ),
        (se = (0, l._)([(0, b.j)('esri.layers.support.VoxelAlphaStop')], se));
      const ne = se;
      let oe = class extends q.wq {
        constructor() {
          super(...arguments), (this.color = null), (this.position = 0);
        }
      };
      (0, l._)(
        [
          (0, S.Cb)({
            type: te.Z,
            json: { type: [T.z8], write: { enabled: !0, isRequired: !0 } },
          }),
        ],
        oe.prototype,
        'color',
        void 0,
      ),
        (0, l._)(
          [
            (0, S.Cb)({
              type: Number,
              json: { write: { enabled: !0, isRequired: !0 } },
            }),
          ],
          oe.prototype,
          'position',
          void 0,
        ),
        (oe = (0, l._)([(0, b.j)('esri.layers.support.VoxelColorStop')], oe));
      const ae = oe;
      let le = class extends q.wq {
        constructor() {
          super(...arguments), (this.enabled = !1), (this.range = null);
        }
      };
      (0, l._)(
        [(0, S.Cb)({ type: Boolean, json: { default: !1, write: !0 } })],
        le.prototype,
        'enabled',
        void 0,
      ),
        (0, l._)(
          [(0, S.Cb)({ type: [Number], json: { write: !0 } })],
          le.prototype,
          'range',
          void 0,
        ),
        (le = (0, l._)([(0, b.j)('esri.layers.support.VoxelRangeFilter')], le));
      const _e = le;
      let de = class extends q.wq {
        constructor(e) {
          super(e),
            (this.interpolation = null),
            (this.stretchRange = null),
            (this.rangeFilter = null),
            (this.colorStops = new _.Z()),
            (this.alphaStops = new _.Z());
        }
        set colorStops(e) {
          this._set(
            'colorStops',
            (0, Q.Z)(e, this._get('colorStops'), _.Z.ofType(ae)),
          );
        }
        set alphaStops(e) {
          this._set(
            'alphaStops',
            (0, Q.Z)(e, this._get('alphaStops'), _.Z.ofType(ne)),
          );
        }
      };
      (0, l._)(
        [(0, S.Cb)({ type: ['linear', 'nearest'], json: { write: !0 } })],
        de.prototype,
        'interpolation',
        void 0,
      ),
        (0, l._)(
          [
            (0, S.Cb)({
              type: [Number],
              json: { write: { enabled: !0, isRequired: !0 } },
            }),
          ],
          de.prototype,
          'stretchRange',
          void 0,
        ),
        (0, l._)(
          [
            (0, S.Cb)({
              type: _.Z.ofType(ae),
              json: {
                write: {
                  enabled: !0,
                  overridePolicy() {
                    return {
                      enabled: !!this.colorStops && this.colorStops.length > 0,
                    };
                  },
                },
              },
            }),
          ],
          de.prototype,
          'colorStops',
          null,
        ),
        (0, l._)(
          [
            (0, S.Cb)({
              type: _.Z.ofType(ne),
              json: {
                write: {
                  enabled: !0,
                  overridePolicy() {
                    return {
                      enabled: !!this.alphaStops && this.alphaStops.length > 0,
                    };
                  },
                },
              },
            }),
          ],
          de.prototype,
          'alphaStops',
          null,
        ),
        (0, l._)(
          [(0, S.Cb)({ type: _e, json: { write: !0 } })],
          de.prototype,
          'rangeFilter',
          void 0,
        ),
        (de = (0, l._)(
          [(0, b.j)('esri.layers.support.VoxelTransferFunctionStyle')],
          de,
        ));
      const ue = de;
      let pe = class extends q.wq {
        constructor() {
          super(...arguments),
            (this.color = null),
            (this.value = 0),
            (this.enabled = !0),
            (this.label = null);
        }
      };
      (0, l._)(
        [
          (0, S.Cb)({
            type: te.Z,
            json: { type: [T.z8], write: { enabled: !0, isRequired: !0 } },
          }),
        ],
        pe.prototype,
        'color',
        void 0,
      ),
        (0, l._)(
          [
            (0, S.Cb)({
              type: T.z8,
              json: { write: { enabled: !0, isRequired: !0 } },
            }),
          ],
          pe.prototype,
          'value',
          void 0,
        ),
        (0, l._)(
          [(0, S.Cb)({ type: Boolean, json: { default: !0, write: !0 } })],
          pe.prototype,
          'enabled',
          void 0,
        ),
        (0, l._)(
          [(0, S.Cb)({ type: String, json: { write: !0 } })],
          pe.prototype,
          'label',
          void 0,
        ),
        (pe = (0, l._)([(0, b.j)('esri.layers.support.VoxelUniqueValue')], pe));
      const ce = pe;
      let he = class extends q.wq {
        constructor(e) {
          super(e),
            (this.variableId = 0),
            (this.label = null),
            (this.transferFunction = null),
            (this.uniqueValues = new _.Z()),
            (this.isosurfaces = new _.Z());
        }
        set uniqueValues(e) {
          this._set(
            'uniqueValues',
            (0, Q.Z)(e, this._get('uniqueValues'), _.Z.ofType(ce)),
          );
        }
        set isosurfaces(e) {
          this._set(
            'isosurfaces',
            (0, Q.Z)(e, this._get('isosurfaces'), _.Z.ofType(re)),
          );
        }
      };
      (0, l._)(
        [
          (0, S.Cb)({
            type: T.z8,
            json: { write: { enabled: !0, isRequired: !0 } },
          }),
        ],
        he.prototype,
        'variableId',
        void 0,
      ),
        (0, l._)(
          [(0, S.Cb)({ type: String, json: { write: !0 } })],
          he.prototype,
          'label',
          void 0,
        ),
        (0, l._)(
          [
            (0, S.Cb)({
              type: ue,
              json: {
                write: {
                  enabled: !0,
                  overridePolicy() {
                    return {
                      enabled:
                        !this.uniqueValues || this.uniqueValues.length < 1,
                    };
                  },
                },
              },
            }),
          ],
          he.prototype,
          'transferFunction',
          void 0,
        ),
        (0, l._)(
          [
            (0, S.Cb)({
              type: _.Z.ofType(ce),
              json: {
                write: {
                  enabled: !0,
                  overridePolicy() {
                    return {
                      enabled:
                        !!this.uniqueValues && this.uniqueValues.length > 0,
                    };
                  },
                },
              },
            }),
          ],
          he.prototype,
          'uniqueValues',
          null,
        ),
        (0, l._)(
          [
            (0, S.Cb)({
              type: _.Z.ofType(re),
              json: {
                write: {
                  enabled: !0,
                  overridePolicy() {
                    const e =
                        !this.uniqueValues || this.uniqueValues.length < 1,
                      t = !!this.isosurfaces && this.isosurfaces.length > 0;
                    return { enabled: e && t };
                  },
                },
              },
            }),
          ],
          he.prototype,
          'isosurfaces',
          null,
        ),
        (he = (0, l._)(
          [(0, b.j)('esri.layers.support.VoxelVariableStyle')],
          he,
        ));
      const Ee = he;
      let ye = class extends q.wq {
        constructor(e) {
          super(e),
            (this.volumeId = 0),
            (this.verticalExaggeration = 1),
            (this.exaggerationMode = 'scale-height'),
            (this.verticalOffset = 0),
            (this.slices = new _.Z()),
            (this.dynamicSections = new _.Z());
        }
        set slices(e) {
          this._set('slices', (0, Q.Z)(e, this._get('slices'), _.Z.ofType(Y)));
        }
        set dynamicSections(e) {
          this._set(
            'dynamicSections',
            (0, Q.Z)(e, this._get('dynamicSections'), _.Z.ofType(Z)),
          );
        }
      };
      (0, l._)(
        [
          (0, S.Cb)({
            type: T.z8,
            json: { write: { enabled: !0, isRequired: !0 } },
          }),
        ],
        ye.prototype,
        'volumeId',
        void 0,
      ),
        (0, l._)(
          [(0, S.Cb)({ type: Number, json: { default: 1, write: !0 } })],
          ye.prototype,
          'verticalExaggeration',
          void 0,
        ),
        (0, l._)(
          [
            (0, S.Cb)({
              type: ['scale-position', 'scale-height'],
              json: { default: 'scale-height', write: !0 },
            }),
          ],
          ye.prototype,
          'exaggerationMode',
          void 0,
        ),
        (0, l._)(
          [(0, S.Cb)({ type: Number, json: { default: 0, write: !0 } })],
          ye.prototype,
          'verticalOffset',
          void 0,
        ),
        (0, l._)(
          [
            (0, S.Cb)({
              type: _.Z.ofType(Y),
              json: {
                write: {
                  enabled: !0,
                  overridePolicy() {
                    return { enabled: !!this.slices && this.slices.length > 0 };
                  },
                },
              },
            }),
          ],
          ye.prototype,
          'slices',
          null,
        ),
        (0, l._)(
          [
            (0, S.Cb)({
              type: _.Z.ofType(Z),
              json: {
                write: {
                  enabled: !0,
                  overridePolicy() {
                    return {
                      enabled:
                        !!this.dynamicSections &&
                        this.dynamicSections.length > 0,
                    };
                  },
                },
              },
            }),
          ],
          ye.prototype,
          'dynamicSections',
          null,
        ),
        (ye = (0, l._)([(0, b.j)('esri.layers.support.VoxelVolumeStyle')], ye));
      const Se = ye;
      let Re = class extends q.wq {
        constructor(e) {
          super(e),
            (this.currentVariableId = 0),
            (this.renderMode = 'volume'),
            (this.enableSlices = !0),
            (this.enableSections = !0),
            (this.enableDynamicSections = !0),
            (this.enableIsosurfaces = !0),
            (this.shading = new ee()),
            (this.volumeStyles = new _.Z()),
            (this.variableStyles = new _.Z());
        }
        set volumeStyles(e) {
          this._set(
            'volumeStyles',
            (0, Q.Z)(e, this._get('volumeStyles'), _.Z.ofType(Se)),
          );
        }
        set variableStyles(e) {
          this._set(
            'variableStyles',
            (0, Q.Z)(e, this._get('variableStyles'), _.Z.ofType(Ee)),
          );
        }
      };
      (0, l._)(
        [(0, S.Cb)({ type: _.Z.ofType(Se), json: { write: !0 } })],
        Re.prototype,
        'volumeStyles',
        null,
      ),
        (0, l._)(
          [
            (0, S.Cb)({
              type: T.z8,
              json: { write: { enabled: !0, isRequired: !0 } },
            }),
          ],
          Re.prototype,
          'currentVariableId',
          void 0,
        ),
        (0, l._)(
          [(0, S.Cb)({ type: ['volume', 'surfaces'], json: { write: !0 } })],
          Re.prototype,
          'renderMode',
          void 0,
        ),
        (0, l._)(
          [(0, S.Cb)({ type: _.Z.ofType(Ee), json: { write: !0 } })],
          Re.prototype,
          'variableStyles',
          null,
        ),
        (0, l._)(
          [(0, S.Cb)({ type: Boolean, json: { write: !0 } })],
          Re.prototype,
          'enableSlices',
          void 0,
        ),
        (0, l._)(
          [(0, S.Cb)({ type: Boolean, json: { write: !0 } })],
          Re.prototype,
          'enableSections',
          void 0,
        ),
        (0, l._)(
          [(0, S.Cb)({ type: Boolean, json: { write: !0 } })],
          Re.prototype,
          'enableDynamicSections',
          void 0,
        ),
        (0, l._)(
          [(0, S.Cb)({ type: Boolean, json: { write: !0 } })],
          Re.prototype,
          'enableIsosurfaces',
          void 0,
        ),
        (0, l._)(
          [(0, S.Cb)({ type: ee, json: { write: !0 } })],
          Re.prototype,
          'shading',
          void 0,
        ),
        (Re = (0, l._)([(0, b.j)('esri.layers.support.VoxelStyle')], Re));
      const Te = Re;
      let Ae = class extends q.wq {
        constructor() {
          super(...arguments),
            (this.continuity = null),
            (this.hasNoData = !1),
            (this.noData = 0),
            (this.offset = 0),
            (this.scale = 1),
            (this.type = null);
        }
      };
      (0, l._)(
        [(0, S.Cb)({ type: ['discrete', 'continuous'], json: { write: !0 } })],
        Ae.prototype,
        'continuity',
        void 0,
      ),
        (0, l._)(
          [(0, S.Cb)({ type: Boolean, json: { write: !0 } })],
          Ae.prototype,
          'hasNoData',
          void 0,
        ),
        (0, l._)(
          [(0, S.Cb)({ type: Number, json: { write: !0 } })],
          Ae.prototype,
          'noData',
          void 0,
        ),
        (0, l._)(
          [(0, S.Cb)({ type: Number, json: { write: !0 } })],
          Ae.prototype,
          'offset',
          void 0,
        ),
        (0, l._)(
          [(0, S.Cb)({ type: Number, json: { write: !0 } })],
          Ae.prototype,
          'scale',
          void 0,
        ),
        (0, l._)(
          [
            (0, S.Cb)({
              type: String,
              json: { write: { enabled: !0, isRequired: !0 } },
            }),
          ],
          Ae.prototype,
          'type',
          void 0,
        ),
        (Ae = (0, l._)([(0, b.j)('esri.layers.support.VoxelFormat')], Ae));
      const be = Ae;
      let Ce = class extends q.wq {
        constructor() {
          super(...arguments),
            (this.id = null),
            (this.description = ''),
            (this.name = null),
            (this.originalFormat = null),
            (this.renderingFormat = null),
            (this.unit = ''),
            (this.volumeId = 0),
            (this.type = null);
        }
      };
      (0, l._)(
        [
          (0, S.Cb)({
            type: Number,
            json: { write: { enabled: !0, isRequired: !0 } },
          }),
        ],
        Ce.prototype,
        'id',
        void 0,
      ),
        (0, l._)(
          [(0, S.Cb)({ type: String, json: { write: !0 } })],
          Ce.prototype,
          'description',
          void 0,
        ),
        (0, l._)(
          [
            (0, S.Cb)({
              type: String,
              json: { write: { enabled: !0, isRequired: !0 } },
            }),
          ],
          Ce.prototype,
          'name',
          void 0,
        ),
        (0, l._)(
          [(0, S.Cb)({ type: be, json: { write: !0 } })],
          Ce.prototype,
          'originalFormat',
          void 0,
        ),
        (0, l._)(
          [
            (0, S.Cb)({
              type: be,
              json: { write: { enabled: !0, isRequired: !0 } },
            }),
          ],
          Ce.prototype,
          'renderingFormat',
          void 0,
        ),
        (0, l._)(
          [(0, S.Cb)({ type: String, json: { write: !0 } })],
          Ce.prototype,
          'unit',
          void 0,
        ),
        (0, l._)(
          [(0, S.Cb)({ type: Number, json: { write: !0 } })],
          Ce.prototype,
          'volumeId',
          void 0,
        ),
        (0, l._)(
          [
            (0, S.Cb)({
              type: [
                'stc-hot-spot-results',
                'stc-cluster-outlier-results',
                'stc-estimated-bin',
                'generic-nearest-interpolated',
              ],
              json: { write: !0 },
            }),
          ],
          Ce.prototype,
          'type',
          void 0,
        ),
        (Ce = (0, l._)([(0, b.j)('esri.layers.support.VoxelVariable')], Ce));
      const ge = Ce;
      let ve = class extends q.wq {
        constructor() {
          super(...arguments), (this.values = null);
        }
      };
      (0, l._)(
        [(0, S.Cb)({ type: [Number], json: { write: !0 } })],
        ve.prototype,
        'values',
        void 0,
      ),
        (ve = (0, l._)(
          [(0, b.j)('esri.layers.support.VoxelIrregularSpacing')],
          ve,
        ));
      const Ne = ve;
      let me = class extends q.wq {
        constructor() {
          super(...arguments), (this.scale = 1), (this.offset = 0);
        }
      };
      (0, l._)(
        [(0, S.Cb)({ type: Number, json: { write: !0 } })],
        me.prototype,
        'scale',
        void 0,
      ),
        (0, l._)(
          [(0, S.Cb)({ type: Number, json: { write: !0 } })],
          me.prototype,
          'offset',
          void 0,
        ),
        (me = (0, l._)(
          [(0, b.j)('esri.layers.support.VoxelRegularSpacing')],
          me,
        ));
      const Ie = me;
      let Le = class extends q.wq {
        constructor() {
          super(...arguments),
            (this.irregularSpacing = null),
            (this.isPositiveUp = null),
            (this.isWrappedDateLine = null),
            (this.label = null),
            (this.name = null),
            (this.quantity = null),
            (this.regularSpacing = null),
            (this.size = 0),
            (this.unit = null);
        }
      };
      (0, l._)(
        [(0, S.Cb)({ type: Ne, json: { write: !0 } })],
        Le.prototype,
        'irregularSpacing',
        void 0,
      ),
        (0, l._)(
          [(0, S.Cb)({ type: Boolean, json: { write: !0 } })],
          Le.prototype,
          'isPositiveUp',
          void 0,
        ),
        (0, l._)(
          [(0, S.Cb)({ type: Boolean, json: { write: !0 } })],
          Le.prototype,
          'isWrappedDateLine',
          void 0,
        ),
        (0, l._)(
          [(0, S.Cb)({ type: String, json: { write: !0 } })],
          Le.prototype,
          'label',
          void 0,
        ),
        (0, l._)(
          [(0, S.Cb)({ type: String, json: { write: !0 } })],
          Le.prototype,
          'name',
          void 0,
        ),
        (0, l._)(
          [(0, S.Cb)({ type: String, json: { write: !0 } })],
          Le.prototype,
          'quantity',
          void 0,
        ),
        (0, l._)(
          [(0, S.Cb)({ type: Ie, json: { write: !0 } })],
          Le.prototype,
          'regularSpacing',
          void 0,
        ),
        (0, l._)(
          [(0, S.Cb)({ type: Number, json: { write: !0 } })],
          Le.prototype,
          'size',
          void 0,
        ),
        (0, l._)(
          [(0, S.Cb)({ type: String, json: { write: !0 } })],
          Le.prototype,
          'unit',
          void 0,
        ),
        (Le = (0, l._)([(0, b.j)('esri.layers.support.VoxelDimension')], Le));
      const fe = Le;
      let we = class extends q.wq {
        constructor() {
          super(...arguments), (this.id = 0), (this.dimensions = null);
        }
        getZDimension() {
          if (!this.dimensions) return -1;
          if (!Array.isArray(this.dimensions)) return -1;
          if (4 !== this.dimensions.length) return -1;
          for (let e = 2; e < 4; ++e) if (this.dimensions[e].size > 0) return e;
          return -1;
        }
        isVolumeValid() {
          return (
            !!this.dimensions &&
            !!Array.isArray(this.dimensions) &&
            4 === this.dimensions.length &&
            !(this.dimensions[0].size < 1 || this.dimensions[1].size < 1) &&
            -1 !== this.getZDimension()
          );
        }
      };
      (0, l._)(
        [
          (0, S.Cb)({
            type: Number,
            json: { write: { enabled: !0, isRequired: !0 } },
          }),
        ],
        we.prototype,
        'id',
        void 0,
      ),
        (0, l._)(
          [
            (0, S.Cb)({
              type: [fe],
              json: { write: { enabled: !0, isRequired: !0 } },
            }),
          ],
          we.prototype,
          'dimensions',
          void 0,
        ),
        (we = (0, l._)([(0, b.j)('esri.layers.support.VoxelVolume')], we));
      const Oe = we;
      var Me;
      let xe = (Me = class extends q.wq {
        constructor() {
          super(...arguments),
            (this.apronWidth = 1),
            (this.brickSize = [32, 32, 32]),
            (this.maxLodLevel = 0),
            (this.nodeSize = [4, 4, 4]);
        }
        isValid() {
          const e = new Me();
          return (
            e.apronWidth === this.apronWidth &&
            e.maxLodLevel === this.maxLodLevel &&
            !!this.brickSize &&
            !!this.nodeSize &&
            !(
              !Array.isArray(this.brickSize) || !Array.isArray(this.nodeSize)
            ) &&
            3 === this.brickSize.length &&
            3 === this.nodeSize.length &&
            32 === this.brickSize[0] &&
            32 === this.brickSize[1] &&
            32 === this.brickSize[2] &&
            4 === this.nodeSize[0] &&
            4 === this.nodeSize[1] &&
            4 === this.nodeSize[2]
          );
        }
      });
      (0, l._)(
        [
          (0, S.Cb)({
            type: Number,
            json: { write: { enabled: !0, isRequired: !0 } },
          }),
        ],
        xe.prototype,
        'apronWidth',
        void 0,
      ),
        (0, l._)(
          [
            (0, S.Cb)({
              type: [Number],
              json: { write: { enabled: !0, isRequired: !0 } },
            }),
          ],
          xe.prototype,
          'brickSize',
          void 0,
        ),
        (0, l._)(
          [
            (0, S.Cb)({
              type: Number,
              json: { write: { enabled: !0, isRequired: !0 } },
            }),
          ],
          xe.prototype,
          'maxLodLevel',
          void 0,
        ),
        (0, l._)(
          [
            (0, S.Cb)({
              type: [Number],
              json: { write: { enabled: !0, isRequired: !0 } },
            }),
          ],
          xe.prototype,
          'nodeSize',
          void 0,
        ),
        (xe = Me =
          (0, l._)([(0, b.j)('esri.layers.support.VoxelVolumeIndex')], xe));
      const Pe = xe,
        De = p.Z.getLogger(' esri.layers.VoxelLayer');
      var Ue;
      !(function (e) {
        (e[(e.API = 1)] = 'API'),
          (e[(e.VerboseAPI = 2)] = 'VerboseAPI'),
          (e[(e.Error = 3)] = 'Error');
      })(Ue || (Ue = {}));
      let Ge = class extends (0, H.Vt)(
        (0, G.Y)((0, B.q)((0, F.I)((0, V.M)((0, h.R)((0, U.V)(v.Z)))))),
      ) {
        constructor(e) {
          super(e),
            (this.serviceRoot = ''),
            (this.popupEnabled = !0),
            (this.operationalLayerType = 'Voxel'),
            (this.legendEnabled = !0),
            (this.title = null),
            (this.sections = new _.Z()),
            (this.style = null),
            (this.opacity = 1),
            (this.variables = new _.Z()),
            (this.volumes = new _.Z()),
            (this.index = null),
            (this.minScale = 0),
            (this.maxScale = 0),
            (this.type = 'voxel'),
            (this._dbgFlags = new Set()),
            (this._handles = new u.Z()),
            (this.version = {
              major: Number.NaN,
              minor: Number.NaN,
              versionString: '',
            });
        }
        set url(e) {
          this._set('url', (0, j.Nm)(e, De));
        }
        destroy() {
          this._handles = (0, c.SC)(this._handles);
        }
        _dbg(e, t) {
          this._dbgFlags.has(e) && (e === Ue.Error ? De.error(t) : De.warn(t));
        }
        load(e) {
          const t = (0, c.pC)(e) ? e.signal : null,
            i = this.loadFromPortal({ supportedTypes: ['Scene Service'] }, e)
              .catch(E.r9)
              .then(() => this._fetchService(t))
              .then(() => (this.serviceRoot = this.url));
          return this.addResolvingPromise(i), Promise.resolve(this);
        }
        getConfiguration() {
          this._handles.add([
            (0, y.YP)(
              () => this._getRenderMode(),
              (e) => this._pushRenderModeToWasm(e),
            ),
            (0, y.YP)(
              () => this._getCurrentVariableId(),
              (e) => this._pushCurrentVariableIdToWasm(e),
            ),
            (0, y.YP)(
              () => this._getDynamicSections(),
              (e) => this._pushDynamicSectionsToWasm(e),
            ),
            (0, y.YP)(
              () => this._getSlices(),
              (e) => this._pushSlicesToWasm(e),
            ),
            (0, y.YP)(
              () => this._getSections(),
              (e) => this._pushSectionsToWasm(e),
            ),
          ]);
          const e = {
            layerType: this.operationalLayerType,
            version: this.version.versionString,
            name: this.title,
            spatialReference: this.spatialReference,
            fullExtent: this.fullExtent,
            volumes: this.volumes.toJSON(),
            variables: this.variables.toJSON(),
            index: this.index.toJSON(),
            sections: this.sections.toJSON(),
            style: this.style,
          };
          return e.index && this.index.isValid() ? JSON.stringify(e) : '';
        }
        readVersion(e, t) {
          return super.parseVersionString(e);
        }
        _getSections() {
          const e = [];
          for (const t of this.sections)
            e.push(
              new J({
                enabled: t.enabled,
                href: t.href,
                id: t.id,
                label: t.label,
                normal: t.normal,
                point: t.point,
                sizeInPixel: t.sizeInPixel,
                slices: t.slices,
                timeId: t.timeId,
                variableId: t.variableId,
              }),
            );
          return e;
        }
        _pushSectionsToWasm(e) {
          this._dbg(Ue.VerboseAPI, 'VoxelLayer._pushSectionsToWasm() called'),
            D.getInstance().setLayerStaticSections(this, e) ||
              this._dbg(Ue.Error, 'VoxelLayer._pushSectionsToWasm() failed!');
        }
        _isPlaneValid(e, t, i) {
          if (!e.point) return !1;
          if (!Array.isArray(e.point) || 3 !== e.point.length) return !1;
          if (!e.normal) return !1;
          if (!Array.isArray(e.normal) || 3 !== e.normal.length) return !1;
          for (let r = 0; r < 3; ++r) {
            const s = e.point[r];
            if (s < 0 || s >= i[t[r]].size) return !1;
          }
          const r = (0, g.f)(e.normal[0], e.normal[1], e.normal[2]);
          return (
            (0, C.n)(r, r),
            !(
              Math.abs(r[0]) + Math.abs(r[1]) + Math.abs(r[2]) < 1e-6 ||
              ((e.normal[0] = r[0]),
              (e.normal[1] = r[1]),
              (e.normal[2] = r[2]),
              0)
            )
          );
        }
        getVariableStyle(e) {
          let t = -1;
          if (
            ((t = (0, c.pC)(e) ? e : this._getCurrentVariableId()),
            !(null == this ? void 0 : this.style.variableStyles) || -1 === t)
          )
            return null;
          const i = this.style.variableStyles.findIndex(
            (e) => e.variableId === t,
          );
          return i < 0 ? null : this.style.variableStyles.getItemAt(i);
        }
        getVariable(e) {
          let t = -1;
          if (
            ((t = (0, c.pC)(e) ? e : this._getCurrentVariableId()),
            !this.variables || -1 === t)
          )
            return null;
          const i = this.variables.findIndex((e) => e.id === t);
          return i < 0 ? null : this.variables.getItemAt(i);
        }
        getVolume(e) {
          const t = this.getVariable(e);
          return (0, c.pC)(t)
            ? this.volumes.find(({ id: e }) => e === t.volumeId)
            : null;
        }
        validateLayer(e) {
          if (e.layerType && e.layerType !== this.operationalLayerType)
            throw new d.Z(
              'voxel-layer:layer-type-not-supported',
              'VoxelLayer does not support this layer type',
              { layerType: e.layerType },
            );
          if (
            isNaN(this.version.major) ||
            isNaN(this.version.minor) ||
            this.version.major < 3
          )
            throw new d.Z(
              'layer:service-version-not-supported',
              'Service version is not supported.',
              {
                serviceVersion: this.version.versionString,
                supportedVersions: '3.x',
              },
            );
          if (this.version.major > 3)
            throw new d.Z(
              'layer:service-version-too-new',
              'Service version is too new.',
              {
                serviceVersion: this.version.versionString,
                supportedVersions: '3.x',
              },
            );
        }
        _getVolumeStyle(e) {
          const t = this.getVariable(e);
          return (0, c.pC)(t)
            ? this.style.volumeStyles.find(
                ({ volumeId: e }) => e === t.volumeId,
              )
            : null;
        }
        _getSlices() {
          const e = [],
            t = this.getVolume(null);
          if (!(0, c.pC)(t) || !t.isVolumeValid()) return e;
          const i = this._getVolumeStyle(null);
          if (!(0, c.pC)(i)) return e;
          for (const r of i.slices)
            this._isPlaneValid(r, [0, 1, t.getZDimension()], t.dimensions)
              ? e.push(
                  new Y({
                    enabled: r.enabled,
                    label: r.label,
                    point: r.point,
                    normal: r.normal,
                  }),
                )
              : e.push(
                  new Y({
                    enabled: !1,
                    label: 'invalid',
                    point: r.point,
                    normal: r.normal,
                  }),
                );
          return e;
        }
        _pushSlicesToWasm(e) {
          this._dbg(Ue.VerboseAPI, 'VoxelLayer._pushSlicesToWasm() called!'),
            D.getInstance().setLayerSlices(this, e) ||
              this._dbg(Ue.Error, 'VoxelLayer._pushSlicesToWasm() failed!');
        }
        _getDynamicSections() {
          const e = [],
            t = this.getVolume(null);
          if (!(0, c.pC)(t) || !t.isVolumeValid()) return e;
          const i = this._getVolumeStyle(null);
          if (!(0, c.pC)(i)) return e;
          for (const r of i.dynamicSections)
            this._isPlaneValid(r, [0, 1, t.getZDimension()], t.dimensions)
              ? e.push(
                  new Z({
                    enabled: r.enabled,
                    label: r.label,
                    point: r.point,
                    normal: r.normal,
                  }),
                )
              : e.push(
                  new Z({
                    enabled: !1,
                    label: 'invalid',
                    point: r.point,
                    normal: r.normal,
                  }),
                );
          return e;
        }
        _pushDynamicSectionsToWasm(e) {
          this._dbg(
            Ue.VerboseAPI,
            'VoxelLayer._pushDynamicSectionsToWasm() called!',
          ),
            D.getInstance().setLayerDynamicSections(this, e) ||
              this._dbg(
                Ue.Error,
                'VoxelLayer._updateDynamicSections() failed!',
              );
        }
        _getCurrentVariableId() {
          return this.style ? this.style.currentVariableId : -1;
        }
        _pushCurrentVariableIdToWasm(e) {
          this._dbg(
            Ue.VerboseAPI,
            'VoxelLayer._pushCurrentVariableIdToWasm() called!',
          ),
            D.getInstance().setLayerCurrentVariable(this, e) ||
              this._dbg(
                Ue.Error,
                'VoxelLayer._pushCurrentVariableIdToWasm() failed!',
              );
        }
        _getRenderMode() {
          return this.style ? this.style.renderMode : 'volume';
        }
        _pushRenderModeToWasm(e) {
          this._dbg(
            Ue.VerboseAPI,
            'VoxelLayer._pushRenderModeToWasm() called!',
          ),
            D.getInstance().setLayerRenderMode(this, e) ||
              this._dbg(Ue.Error, 'VoxelLayer.setLayerRenderMode() failed!');
        }
      };
      (0, l._)([(0, S.Cb)(W.C_)], Ge.prototype, 'popupEnabled', void 0),
        (0, l._)(
          [(0, S.Cb)({ type: ['Voxel'] })],
          Ge.prototype,
          'operationalLayerType',
          void 0,
        ),
        (0, l._)([(0, S.Cb)(W.rn)], Ge.prototype, 'legendEnabled', void 0),
        (0, l._)(
          [(0, S.Cb)({ json: { write: !0 } })],
          Ge.prototype,
          'title',
          void 0,
        ),
        (0, l._)([(0, S.Cb)(W.HQ)], Ge.prototype, 'url', null),
        (0, l._)(
          [
            (0, S.Cb)({
              type: _.Z.ofType(J),
              json: {
                write: !0,
                origins: {
                  'web-scene': { name: 'layerDefinition.sections', write: !0 },
                  service: { write: !1 },
                },
              },
            }),
          ],
          Ge.prototype,
          'sections',
          void 0,
        ),
        (0, l._)(
          [
            (0, S.Cb)({
              type: Te,
              json: {
                write: !0,
                origins: {
                  'web-scene': { name: 'layerDefinition.style', write: !0 },
                  service: { write: !1 },
                },
              },
            }),
          ],
          Ge.prototype,
          'style',
          void 0,
        ),
        (0, l._)(
          [(0, S.Cb)({ type: ['show', 'hide'] })],
          Ge.prototype,
          'listMode',
          void 0,
        ),
        (0, l._)(
          [
            (0, S.Cb)({
              type: Number,
              range: { min: 0, max: 1 },
              nonNullable: !0,
              json: {
                read: !1,
                write: !1,
                origins: {
                  'web-scene': { read: !1, write: !1 },
                  'portal-item': { read: !1, write: !1 },
                },
              },
            }),
          ],
          Ge.prototype,
          'opacity',
          void 0,
        ),
        (0, l._)(
          [(0, S.Cb)({ type: _.Z.ofType(ge) })],
          Ge.prototype,
          'variables',
          void 0,
        ),
        (0, l._)(
          [(0, S.Cb)({ type: _.Z.ofType(Oe) })],
          Ge.prototype,
          'volumes',
          void 0,
        ),
        (0, l._)([(0, S.Cb)({ type: Pe })], Ge.prototype, 'index', void 0),
        (0, l._)(
          [
            (0, S.Cb)({
              type: Number,
              json: {
                name: 'layerDefinition.minScale',
                read: !1,
                write: !1,
                origins: { service: { read: !1, write: !1 } },
              },
            }),
          ],
          Ge.prototype,
          'minScale',
          void 0,
        ),
        (0, l._)(
          [
            (0, S.Cb)({
              type: Number,
              json: {
                name: 'layerDefinition.maxScale',
                read: !1,
                write: !1,
                origins: { service: { read: !1, write: !1 } },
              },
            }),
          ],
          Ge.prototype,
          'maxScale',
          void 0,
        ),
        (0, l._)(
          [(0, S.Cb)({ json: { read: !1 }, readOnly: !0 })],
          Ge.prototype,
          'type',
          void 0,
        ),
        (0, l._)(
          [(0, S.Cb)({ readOnly: !0, json: { name: 'serviceVersion' } })],
          Ge.prototype,
          'version',
          void 0,
        ),
        (0, l._)(
          [(0, A.r)('service', 'version')],
          Ge.prototype,
          'readVersion',
          null,
        ),
        (Ge = (0, l._)([(0, b.j)('esri.layers.VoxelLayer')], Ge));
      const Be = Ge;
    },
    38009: (e, t, i) => {
      i.d(t, { q: () => c });
      var r = i(43697),
        s = i(20102),
        n = i(17452),
        o = i(5600),
        a = (i(67676), i(80442), i(75215), i(52011)),
        l = i(30556),
        _ = i(50549),
        d = i(76169);
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
      var p = i(21506);
      const c = (e) => {
        let t = class extends e {
          constructor() {
            super(...arguments), (this.title = null);
          }
          writeListMode(e, t, i, r) {
            ((r && 'ground' === r.layerContainerType) ||
              (e && (0, d.d)(this, i, {}, r))) &&
              (t[i] = e);
          }
          writeOperationalLayerType(e, t, i, r) {
            !e || (r && 'tables' === r.layerContainerType) || (t.layerType = e);
          }
          writeTitle(e, t) {
            t.title = e || 'Layer';
          }
          read(e, t) {
            t && (t.layer = this),
              (0, _.$)(this, e, (t) => super.read(e, t), t);
          }
          write(e, t) {
            if (null != t && t.origin) {
              const e = `${t.origin}/${
                  t.layerContainerType || 'operational-layers'
                }`,
                r = u[e];
              let n = r && r[this.operationalLayerType];
              var i;
              if (
                ('ArcGISTiledElevationServiceLayer' ===
                  this.operationalLayerType &&
                  'web-scene/operational-layers' === e &&
                  (n = !1),
                !n)
              )
                return (
                  null == (i = t.messages) ||
                    i.push(
                      new s.Z(
                        'layer:unsupported',
                        `Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${e}'`,
                        { layer: this },
                      ),
                    ),
                  null
                );
            }
            const r = super.write(e, { ...t, layer: this }),
              o =
                !!t &&
                !!t.messages &&
                !!t.messages.filter(
                  (e) =>
                    e instanceof s.Z &&
                    'web-document-write:property-required' === e.name,
                ).length;
            var a;
            return (0, n.jc)(null == r ? void 0 : r.url)
              ? (null == t ||
                  null == (a = t.messages) ||
                  a.push(
                    new s.Z(
                      'layer:invalid-url',
                      `Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' using a Blob URL cannot be written to web scenes and web maps`,
                      { layer: this },
                    ),
                  ),
                null)
              : !this.url && o
              ? null
              : r;
          }
          beforeSave() {}
        };
        return (
          (0, r._)(
            [
              (0, o.Cb)({
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
          (0, r._)(
            [
              (0, o.Cb)({
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
          (0, r._)([(0, l.c)('listMode')], t.prototype, 'writeListMode', null),
          (0, r._)(
            [
              (0, o.Cb)({
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
          (0, r._)(
            [(0, l.c)('operationalLayerType')],
            t.prototype,
            'writeOperationalLayerType',
            null,
          ),
          (0, r._)([(0, o.Cb)(p.Oh)], t.prototype, 'opacity', void 0),
          (0, r._)(
            [
              (0, o.Cb)({
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
          (0, r._)([(0, l.c)('title')], t.prototype, 'writeTitle', null),
          (0, r._)(
            [(0, o.Cb)({ type: Boolean, json: { name: 'visibility' } })],
            t.prototype,
            'visible',
            void 0,
          ),
          (t = (0, r._)([(0, a.j)('esri.layers.mixins.OperationalLayer')], t)),
          t
        );
      };
    },
    72965: (e, t, i) => {
      i.d(t, { M: () => o });
      var r = i(43697),
        s = i(5600),
        n = (i(67676), i(80442), i(75215), i(52011));
      const o = (e) => {
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
            const i = this._get('effectiveScaleRange');
            return i && i.minScale === e.minScale && i.maxScale === e.maxScale
              ? i
              : e;
          }
        };
        return (
          (0, r._)(
            [(0, s.Cb)({ type: Number, nonNullable: !0, json: { write: !0 } })],
            t.prototype,
            'minScale',
            void 0,
          ),
          (0, r._)(
            [(0, s.Cb)({ type: Number, nonNullable: !0, json: { write: !0 } })],
            t.prototype,
            'maxScale',
            void 0,
          ),
          (0, r._)(
            [(0, s.Cb)({ readOnly: !0 })],
            t.prototype,
            'effectiveScaleRange',
            null,
          ),
          (t = (0, r._)([(0, n.j)('esri.layers.mixins.ScaleRangeLayer')], t)),
          t
        );
      };
    },
    21506: (e, t, i) => {
      i.d(t, {
        qG: () => A,
        PV: () => y,
        id: () => C,
        iR: () => c,
        rn: () => E,
        u1: () => v,
        rO: () => g,
        Oh: () => R,
        bT: () => T,
        C_: () => p,
        Lx: () => S,
        vg: () => b,
        YI: () => u,
        HQ: () => h,
      });
      var r = i(92835),
        s = i(6570),
        n = i(82971),
        o = i(25929),
        a = i(70586),
        l = (i(95330), i(35463)),
        _ = i(20682),
        d = i(65242);
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
        p = {
          type: Boolean,
          value: !0,
          json: {
            name: 'disablePopup',
            read: { reader: (e, t) => !t.disablePopup },
            write: {
              enabled: !0,
              writer(e, t, i) {
                t[i] = !e;
              },
            },
          },
        },
        c = {
          type: Boolean,
          value: !0,
          json: { name: 'showLabels', write: !0 },
        },
        h = {
          type: String,
          json: {
            origins: { 'portal-item': { write: !1 } },
            write: { isRequired: !0, ignoreOrigin: !0, writer: o.w },
          },
        },
        E = {
          type: Boolean,
          value: !0,
          json: {
            origins: { service: { read: { enabled: !1 } } },
            name: 'showLegend',
            write: !0,
          },
        },
        y = {
          value: null,
          type: _.Z,
          json: {
            origins: { service: { name: 'elevationInfo', write: !0 } },
            name: 'layerDefinition.elevationInfo',
            write: !0,
          },
        };
      function S(e) {
        return {
          type: e,
          readOnly: !0,
          json: { origins: { service: { read: !0 } }, read: !1 },
        };
      }
      const R = {
          type: Number,
          json: {
            origins: {
              'web-document': { write: !0, read: !0 },
              'portal-item': { write: !0 },
            },
          },
        },
        T = {
          ...R,
          json: {
            ...R.json,
            origins: {
              'web-document': {
                ...R.json.origins['web-document'],
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
              reader: (e, t, i) =>
                (i && 'service' !== i.origin) ||
                !t.drawingInfo ||
                void 0 === t.drawingInfo.transparency
                  ? t.layerDefinition &&
                    t.layerDefinition.drawingInfo &&
                    void 0 !== t.layerDefinition.drawingInfo.transparency
                    ? (0, d.b)(t.layerDefinition.drawingInfo.transparency)
                    : void 0
                  : (0, d.b)(t.drawingInfo.transparency),
            },
          },
        },
        A = {
          type: r.Z,
          readOnly: !0,
          get() {
            var e, t;
            if (null == (e = this.layer) || !e.timeInfo) return null;
            const {
                datesInUnknownTimezone: i,
                timeOffset: s,
                useViewTime: n,
              } = this.layer,
              o = null == (t = this.view) ? void 0 : t.timeExtent;
            let _ = this.layer.timeExtent;
            i &&
              (_ = (function (e) {
                if (!e) return e;
                const { start: t, end: i } = e;
                return new r.Z({
                  start: (0, a.pC)(t)
                    ? (0, l.Nm)(t, t.getTimezoneOffset(), 'minutes')
                    : t,
                  end: (0, a.pC)(i)
                    ? (0, l.Nm)(i, i.getTimezoneOffset(), 'minutes')
                    : i,
                });
              })(_));
            let d = n ? (o && _ ? o.intersection(_) : o || _) : _;
            if (!d || d.isEmpty || d.isAllTime) return d;
            s && (d = d.offset(-s.value, s.unit)),
              i &&
                (d = (function (e) {
                  if (!e) return e;
                  const { start: t, end: i } = e;
                  return new r.Z({
                    start: (0, a.pC)(t)
                      ? (0, l.Nm)(t, -t.getTimezoneOffset(), 'minutes')
                      : t,
                    end: (0, a.pC)(i)
                      ? (0, l.Nm)(i, -i.getTimezoneOffset(), 'minutes')
                      : i,
                  });
                })(d));
            const u = this._get('timeExtent');
            return d.equals(u) ? u : d;
          },
        },
        b = {
          type: s.Z,
          readOnly: !0,
          json: {
            origins: {
              service: {
                read: {
                  source: ['fullExtent', 'spatialReference'],
                  reader: (e, t) => {
                    const i = s.Z.fromJSON(e);
                    return (
                      null != t.spatialReference &&
                        'object' == typeof t.spatialReference &&
                        (i.spatialReference = n.Z.fromJSON(t.spatialReference)),
                      i
                    );
                  },
                },
              },
            },
            read: !1,
          },
        },
        C = {
          type: String,
          json: {
            origins: { service: { read: !1 }, 'portal-item': { read: !1 } },
          },
        },
        g = {
          type: Number,
          json: {
            origins: { service: { write: { enabled: !1 } } },
            read: { source: 'layerDefinition.minScale' },
            write: { target: 'layerDefinition.minScale' },
          },
        },
        v = {
          type: Number,
          json: {
            origins: { service: { write: { enabled: !1 } } },
            read: { source: 'layerDefinition.maxScale' },
            write: { target: 'layerDefinition.maxScale' },
          },
        };
    },
    20682: (e, t, i) => {
      i.d(t, { Z: () => b });
      var r,
        s = i(43697),
        n = i(35454),
        o = i(96674),
        a = i(70586),
        l = i(5600),
        _ = (i(67676), i(80442), i(75215), i(71715)),
        d = i(52011),
        u = i(30556),
        p = i(35671);
      let c = (r = class extends o.wq {
        async collectRequiredFields(e, t) {
          return (0, p.io)(e, t, this.expression);
        }
        clone() {
          return new r({ expression: this.expression, title: this.title });
        }
      });
      (0, s._)(
        [(0, l.Cb)({ type: String, json: { write: !0 } })],
        c.prototype,
        'expression',
        void 0,
      ),
        (0, s._)(
          [(0, l.Cb)({ type: String, json: { write: !0 } })],
          c.prototype,
          'title',
          void 0,
        ),
        (c = r =
          (0, s._)([(0, d.j)('esri.layers.support.FeatureExpressionInfo')], c));
      const h = c;
      var E = i(99282);
      const y = (function () {
        const e = Object.keys(E.a);
        return e.sort(), e;
      })();
      var S;
      const R = (0, n.w)()({
          onTheGround: 'on-the-ground',
          relativeToGround: 'relative-to-ground',
          relativeToScene: 'relative-to-scene',
          absoluteHeight: 'absolute-height',
        }),
        T = new n.X({
          foot: 'feet',
          kilometer: 'kilometers',
          meter: 'meters',
          mile: 'miles',
          'us-foot': 'us-feet',
          yard: 'yards',
        });
      let A = (S = class extends o.wq {
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
        writeFeatureExpressionInfo(e, t, i, r) {
          (t[i] = e.write({}, r)),
            '0' === e.expression && (t.featureExpression = { value: 0 });
        }
        get mode() {
          const { offset: e, featureExpressionInfo: t } = this;
          return this._isOverridden('mode')
            ? this._get('mode')
            : (0, a.pC)(e) || t
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
          return new S({
            mode: this.mode,
            offset: this.offset,
            featureExpressionInfo: this.featureExpressionInfo
              ? this.featureExpressionInfo.clone()
              : void 0,
            unit: this.unit,
          });
        }
      });
      (0, s._)(
        [(0, l.Cb)({ type: h, json: { write: !0 } })],
        A.prototype,
        'featureExpressionInfo',
        void 0,
      ),
        (0, s._)(
          [
            (0, _.r)('featureExpressionInfo', [
              'featureExpressionInfo',
              'featureExpression',
            ]),
          ],
          A.prototype,
          'readFeatureExpressionInfo',
          null,
        ),
        (0, s._)(
          [
            (0, u.c)('featureExpressionInfo', {
              featureExpressionInfo: { type: h },
              'featureExpression.value': { type: [0] },
            }),
          ],
          A.prototype,
          'writeFeatureExpressionInfo',
          null,
        ),
        (0, s._)(
          [
            (0, l.Cb)({
              type: R.apiValues,
              nonNullable: !0,
              json: {
                type: R.jsonValues,
                read: R.read,
                write: { writer: R.write, isRequired: !0 },
              },
            }),
          ],
          A.prototype,
          'mode',
          null,
        ),
        (0, s._)(
          [(0, l.Cb)({ type: Number, json: { write: !0 } })],
          A.prototype,
          'offset',
          void 0,
        ),
        (0, s._)(
          [
            (0, l.Cb)({
              type: y,
              json: { type: String, read: T.read, write: T.write },
            }),
          ],
          A.prototype,
          'unit',
          null,
        ),
        (A = S = (0, s._)([(0, d.j)('esri.layers.support.ElevationInfo')], A));
      const b = A;
    },
    50173: (e, t, i) => {
      var r;
      i.d(t, { C: () => r }),
        (function (e) {
          (e[(e.MATERIAL = 0)] = 'MATERIAL'),
            (e[(e.MATERIAL_ALPHA = 1)] = 'MATERIAL_ALPHA'),
            (e[(e.MATERIAL_DEPTH = 2)] = 'MATERIAL_DEPTH'),
            (e[(e.MATERIAL_NORMAL = 3)] = 'MATERIAL_NORMAL'),
            (e[(e.MATERIAL_DEPTH_SHADOWMAP_ALL = 4)] =
              'MATERIAL_DEPTH_SHADOWMAP_ALL'),
            (e[(e.MATERIAL_HIGHLIGHT = 5)] = 'MATERIAL_HIGHLIGHT'),
            (e[(e.MATERIAL_DEPTH_SHADOWMAP_DEFAULT = 6)] =
              'MATERIAL_DEPTH_SHADOWMAP_DEFAULT'),
            (e[(e.MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT = 7)] =
              'MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT'),
            (e[(e.MAX_PASS = 8)] = 'MAX_PASS');
        })(r || (r = {}));
    },
    97995: (e, t, i) => {
      var r;
      i.d(t, { r: () => r }),
        (function (e) {
          (e[(e.INTEGRATED_MESH = 0)] = 'INTEGRATED_MESH'),
            (e[(e.OPAQUE_TERRAIN = 1)] = 'OPAQUE_TERRAIN'),
            (e[(e.OPAQUE_MATERIAL = 2)] = 'OPAQUE_MATERIAL'),
            (e[(e.OPAQUE_PLUGIN = 3)] = 'OPAQUE_PLUGIN'),
            (e[(e.TRANSPARENT_MATERIAL = 4)] = 'TRANSPARENT_MATERIAL'),
            (e[(e.TRANSPARENT_PLUGIN = 5)] = 'TRANSPARENT_PLUGIN'),
            (e[(e.TRANSPARENT_TERRAIN = 6)] = 'TRANSPARENT_TERRAIN'),
            (e[(e.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL = 7)] =
              'TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL'),
            (e[(e.OCCLUDED_TERRAIN = 8)] = 'OCCLUDED_TERRAIN'),
            (e[(e.OCCLUDER_MATERIAL = 9)] = 'OCCLUDER_MATERIAL'),
            (e[(e.TRANSPARENT_OCCLUDER_MATERIAL = 10)] =
              'TRANSPARENT_OCCLUDER_MATERIAL'),
            (e[(e.OCCLUSION_PIXELS = 11)] = 'OCCLUSION_PIXELS'),
            (e[(e.POSTPROCESSING_ENVIRONMENT_OPAQUE = 12)] =
              'POSTPROCESSING_ENVIRONMENT_OPAQUE'),
            (e[(e.POSTPROCESSING_ENVIRONMENT_TRANSPARENT = 13)] =
              'POSTPROCESSING_ENVIRONMENT_TRANSPARENT'),
            (e[(e.LASERLINES = 14)] = 'LASERLINES'),
            (e[(e.LASERLINES_CONTRAST_CONTROL = 15)] =
              'LASERLINES_CONTRAST_CONTROL'),
            (e[(e.HUD_MATERIAL = 16)] = 'HUD_MATERIAL'),
            (e[(e.LABEL_MATERIAL = 17)] = 'LABEL_MATERIAL'),
            (e[(e.LINE_CALLOUTS = 18)] = 'LINE_CALLOUTS'),
            (e[(e.LINE_CALLOUTS_HUD_DEPTH = 19)] = 'LINE_CALLOUTS_HUD_DEPTH'),
            (e[(e.DRAPED_MATERIAL = 20)] = 'DRAPED_MATERIAL'),
            (e[(e.DRAPED_WATER = 21)] = 'DRAPED_WATER'),
            (e[(e.VOXEL = 22)] = 'VOXEL'),
            (e[(e.MAX_SLOTS = 23)] = 'MAX_SLOTS');
        })(r || (r = {}));
    },
    54738: (e, t, i) => {
      var r, s;
      function n(e, t, i = {}) {
        const s =
          t === r.WEBGL1
            ? ['webgl', 'experimental-webgl', 'webkit-3d', 'moz-webgl']
            : ['webgl2'];
        let n = null;
        for (const t of s) {
          try {
            n = e.getContext(t, i);
          } catch (e) {}
          if (n) break;
        }
        return n;
      }
      i.d(t, { zO: () => r, kr: () => n }),
        i(80442),
        ((s = r || (r = {}))[(s.WEBGL1 = 1)] = 'WEBGL1'),
        (s[(s.WEBGL2 = 2)] = 'WEBGL2');
    },
    35371: (e, t, i) => {
      var r,
        s,
        n,
        o,
        a,
        l,
        _,
        d,
        u,
        p,
        c,
        h,
        E,
        y,
        S,
        R,
        T,
        A,
        b,
        C,
        g,
        v,
        N,
        m;
      i.d(t, {
        zi: () => n,
        db: () => o,
        w0: () => a,
        VY: () => m,
        wb: () => u,
        q_: () => L,
        Wf: () => _,
        g: () => d,
        Lu: () => I,
        OU: () => v,
        LR: () => l,
        qi: () => C,
        VI: () => y,
        Br: () => R,
        MX: () => s,
        Tg: () => T,
        _g: () => N,
        lP: () => S,
        xS: () => p,
        Lm: () => g,
        cw: () => c,
        No: () => E,
        e8: () => h,
        l1: () => A,
      }),
        (function (e) {
          (e[(e.DEPTH_BUFFER_BIT = 256)] = 'DEPTH_BUFFER_BIT'),
            (e[(e.STENCIL_BUFFER_BIT = 1024)] = 'STENCIL_BUFFER_BIT'),
            (e[(e.COLOR_BUFFER_BIT = 16384)] = 'COLOR_BUFFER_BIT');
        })(r || (r = {})),
        (function (e) {
          (e[(e.POINTS = 0)] = 'POINTS'),
            (e[(e.LINES = 1)] = 'LINES'),
            (e[(e.LINE_LOOP = 2)] = 'LINE_LOOP'),
            (e[(e.LINE_STRIP = 3)] = 'LINE_STRIP'),
            (e[(e.TRIANGLES = 4)] = 'TRIANGLES'),
            (e[(e.TRIANGLE_STRIP = 5)] = 'TRIANGLE_STRIP'),
            (e[(e.TRIANGLE_FAN = 6)] = 'TRIANGLE_FAN');
        })(s || (s = {})),
        (function (e) {
          (e[(e.ZERO = 0)] = 'ZERO'),
            (e[(e.ONE = 1)] = 'ONE'),
            (e[(e.SRC_COLOR = 768)] = 'SRC_COLOR'),
            (e[(e.ONE_MINUS_SRC_COLOR = 769)] = 'ONE_MINUS_SRC_COLOR'),
            (e[(e.SRC_ALPHA = 770)] = 'SRC_ALPHA'),
            (e[(e.ONE_MINUS_SRC_ALPHA = 771)] = 'ONE_MINUS_SRC_ALPHA'),
            (e[(e.DST_ALPHA = 772)] = 'DST_ALPHA'),
            (e[(e.ONE_MINUS_DST_ALPHA = 773)] = 'ONE_MINUS_DST_ALPHA'),
            (e[(e.DST_COLOR = 774)] = 'DST_COLOR'),
            (e[(e.ONE_MINUS_DST_COLOR = 775)] = 'ONE_MINUS_DST_COLOR'),
            (e[(e.SRC_ALPHA_SATURATE = 776)] = 'SRC_ALPHA_SATURATE'),
            (e[(e.CONSTANT_COLOR = 32769)] = 'CONSTANT_COLOR'),
            (e[(e.ONE_MINUS_CONSTANT_COLOR = 32770)] =
              'ONE_MINUS_CONSTANT_COLOR'),
            (e[(e.CONSTANT_ALPHA = 32771)] = 'CONSTANT_ALPHA'),
            (e[(e.ONE_MINUS_CONSTANT_ALPHA = 32772)] =
              'ONE_MINUS_CONSTANT_ALPHA');
        })(n || (n = {})),
        (function (e) {
          (e[(e.ADD = 32774)] = 'ADD'),
            (e[(e.SUBTRACT = 32778)] = 'SUBTRACT'),
            (e[(e.REVERSE_SUBTRACT = 32779)] = 'REVERSE_SUBTRACT');
        })(o || (o = {})),
        (function (e) {
          (e[(e.ARRAY_BUFFER = 34962)] = 'ARRAY_BUFFER'),
            (e[(e.ELEMENT_ARRAY_BUFFER = 34963)] = 'ELEMENT_ARRAY_BUFFER'),
            (e[(e.UNIFORM_BUFFER = 35345)] = 'UNIFORM_BUFFER'),
            (e[(e.PIXEL_PACK_BUFFER = 35051)] = 'PIXEL_PACK_BUFFER'),
            (e[(e.PIXEL_UNPACK_BUFFER = 35052)] = 'PIXEL_UNPACK_BUFFER'),
            (e[(e.COPY_READ_BUFFER = 36662)] = 'COPY_READ_BUFFER'),
            (e[(e.COPY_WRITE_BUFFER = 36663)] = 'COPY_WRITE_BUFFER');
        })(a || (a = {})),
        (function (e) {
          (e[(e.FRONT = 1028)] = 'FRONT'),
            (e[(e.BACK = 1029)] = 'BACK'),
            (e[(e.FRONT_AND_BACK = 1032)] = 'FRONT_AND_BACK');
        })(l || (l = {})),
        (function (e) {
          (e[(e.CW = 2304)] = 'CW'), (e[(e.CCW = 2305)] = 'CCW');
        })(_ || (_ = {})),
        (function (e) {
          (e[(e.BYTE = 5120)] = 'BYTE'),
            (e[(e.UNSIGNED_BYTE = 5121)] = 'UNSIGNED_BYTE'),
            (e[(e.SHORT = 5122)] = 'SHORT'),
            (e[(e.UNSIGNED_SHORT = 5123)] = 'UNSIGNED_SHORT'),
            (e[(e.INT = 5124)] = 'INT'),
            (e[(e.UNSIGNED_INT = 5125)] = 'UNSIGNED_INT'),
            (e[(e.FLOAT = 5126)] = 'FLOAT');
        })(d || (d = {})),
        (function (e) {
          (e[(e.NEVER = 512)] = 'NEVER'),
            (e[(e.LESS = 513)] = 'LESS'),
            (e[(e.EQUAL = 514)] = 'EQUAL'),
            (e[(e.LEQUAL = 515)] = 'LEQUAL'),
            (e[(e.GREATER = 516)] = 'GREATER'),
            (e[(e.NOTEQUAL = 517)] = 'NOTEQUAL'),
            (e[(e.GEQUAL = 518)] = 'GEQUAL'),
            (e[(e.ALWAYS = 519)] = 'ALWAYS');
        })(u || (u = {})),
        (function (e) {
          (e[(e.ZERO = 0)] = 'ZERO'),
            (e[(e.KEEP = 7680)] = 'KEEP'),
            (e[(e.REPLACE = 7681)] = 'REPLACE'),
            (e[(e.INCR = 7682)] = 'INCR'),
            (e[(e.DECR = 7683)] = 'DECR'),
            (e[(e.INVERT = 5386)] = 'INVERT'),
            (e[(e.INCR_WRAP = 34055)] = 'INCR_WRAP'),
            (e[(e.DECR_WRAP = 34056)] = 'DECR_WRAP');
        })(p || (p = {})),
        (function (e) {
          (e[(e.NEAREST = 9728)] = 'NEAREST'),
            (e[(e.LINEAR = 9729)] = 'LINEAR'),
            (e[(e.NEAREST_MIPMAP_NEAREST = 9984)] = 'NEAREST_MIPMAP_NEAREST'),
            (e[(e.LINEAR_MIPMAP_NEAREST = 9985)] = 'LINEAR_MIPMAP_NEAREST'),
            (e[(e.NEAREST_MIPMAP_LINEAR = 9986)] = 'NEAREST_MIPMAP_LINEAR'),
            (e[(e.LINEAR_MIPMAP_LINEAR = 9987)] = 'LINEAR_MIPMAP_LINEAR');
        })(c || (c = {})),
        (function (e) {
          (e[(e.CLAMP_TO_EDGE = 33071)] = 'CLAMP_TO_EDGE'),
            (e[(e.REPEAT = 10497)] = 'REPEAT'),
            (e[(e.MIRRORED_REPEAT = 33648)] = 'MIRRORED_REPEAT');
        })(h || (h = {})),
        (function (e) {
          (e[(e.TEXTURE_2D = 3553)] = 'TEXTURE_2D'),
            (e[(e.TEXTURE_CUBE_MAP = 34067)] = 'TEXTURE_CUBE_MAP'),
            (e[(e.TEXTURE_3D = 32879)] = 'TEXTURE_3D'),
            (e[(e.TEXTURE_CUBE_MAP_POSITIVE_X = 34069)] =
              'TEXTURE_CUBE_MAP_POSITIVE_X'),
            (e[(e.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070)] =
              'TEXTURE_CUBE_MAP_NEGATIVE_X'),
            (e[(e.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071)] =
              'TEXTURE_CUBE_MAP_POSITIVE_Y'),
            (e[(e.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072)] =
              'TEXTURE_CUBE_MAP_NEGATIVE_Y'),
            (e[(e.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073)] =
              'TEXTURE_CUBE_MAP_POSITIVE_Z'),
            (e[(e.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074)] =
              'TEXTURE_CUBE_MAP_NEGATIVE_Z'),
            (e[(e.TEXTURE_2D_ARRAY = 35866)] = 'TEXTURE_2D_ARRAY');
        })(E || (E = {})),
        (function (e) {
          (e[(e.DEPTH_COMPONENT = 6402)] = 'DEPTH_COMPONENT'),
            (e[(e.DEPTH_STENCIL = 34041)] = 'DEPTH_STENCIL'),
            (e[(e.ALPHA = 6406)] = 'ALPHA'),
            (e[(e.RGB = 6407)] = 'RGB'),
            (e[(e.RGBA = 6408)] = 'RGBA'),
            (e[(e.LUMINANCE = 6409)] = 'LUMINANCE'),
            (e[(e.LUMINANCE_ALPHA = 6410)] = 'LUMINANCE_ALPHA'),
            (e[(e.RED = 6403)] = 'RED'),
            (e[(e.RG = 33319)] = 'RG'),
            (e[(e.RED_INTEGER = 36244)] = 'RED_INTEGER'),
            (e[(e.RG_INTEGER = 33320)] = 'RG_INTEGER'),
            (e[(e.RGB_INTEGER = 36248)] = 'RGB_INTEGER'),
            (e[(e.RGBA_INTEGER = 36249)] = 'RGBA_INTEGER');
        })(y || (y = {})),
        (function (e) {
          (e[(e.RGBA4 = 32854)] = 'RGBA4'),
            (e[(e.R16F = 33325)] = 'R16F'),
            (e[(e.RG16F = 33327)] = 'RG16F'),
            (e[(e.RGB32F = 34837)] = 'RGB32F'),
            (e[(e.RGBA16F = 34842)] = 'RGBA16F'),
            (e[(e.R32F = 33326)] = 'R32F'),
            (e[(e.RG32F = 33328)] = 'RG32F'),
            (e[(e.RGBA32F = 34836)] = 'RGBA32F'),
            (e[(e.R11F_G11F_B10F = 35898)] = 'R11F_G11F_B10F'),
            (e[(e.RGB8 = 32849)] = 'RGB8'),
            (e[(e.RGBA8 = 32856)] = 'RGBA8'),
            (e[(e.RGB5_A1 = 32855)] = 'RGB5_A1'),
            (e[(e.R8 = 33321)] = 'R8'),
            (e[(e.RG8 = 33323)] = 'RG8'),
            (e[(e.R8I = 33329)] = 'R8I'),
            (e[(e.R8UI = 33330)] = 'R8UI'),
            (e[(e.R16I = 33331)] = 'R16I'),
            (e[(e.R16UI = 33332)] = 'R16UI'),
            (e[(e.R32I = 33333)] = 'R32I'),
            (e[(e.R32UI = 33334)] = 'R32UI'),
            (e[(e.RG8I = 33335)] = 'RG8I'),
            (e[(e.RG8UI = 33336)] = 'RG8UI'),
            (e[(e.RG16I = 33337)] = 'RG16I'),
            (e[(e.RG16UI = 33338)] = 'RG16UI'),
            (e[(e.RG32I = 33339)] = 'RG32I'),
            (e[(e.RG32UI = 33340)] = 'RG32UI'),
            (e[(e.RGB16F = 34843)] = 'RGB16F'),
            (e[(e.RGB9_E5 = 35901)] = 'RGB9_E5'),
            (e[(e.SRGB8 = 35905)] = 'SRGB8'),
            (e[(e.SRGB8_ALPHA8 = 35907)] = 'SRGB8_ALPHA8'),
            (e[(e.RGB565 = 36194)] = 'RGB565'),
            (e[(e.RGBA32UI = 36208)] = 'RGBA32UI'),
            (e[(e.RGB32UI = 36209)] = 'RGB32UI'),
            (e[(e.RGBA16UI = 36214)] = 'RGBA16UI'),
            (e[(e.RGB16UI = 36215)] = 'RGB16UI'),
            (e[(e.RGBA8UI = 36220)] = 'RGBA8UI'),
            (e[(e.RGB8UI = 36221)] = 'RGB8UI'),
            (e[(e.RGBA32I = 36226)] = 'RGBA32I'),
            (e[(e.RGB32I = 36227)] = 'RGB32I'),
            (e[(e.RGBA16I = 36232)] = 'RGBA16I'),
            (e[(e.RGB16I = 36233)] = 'RGB16I'),
            (e[(e.RGBA8I = 36238)] = 'RGBA8I'),
            (e[(e.RGB8I = 36239)] = 'RGB8I'),
            (e[(e.R8_SNORM = 36756)] = 'R8_SNORM'),
            (e[(e.RG8_SNORM = 36757)] = 'RG8_SNORM'),
            (e[(e.RGB8_SNORM = 36758)] = 'RGB8_SNORM'),
            (e[(e.RGBA8_SNORM = 36759)] = 'RGBA8_SNORM'),
            (e[(e.RGB10_A2 = 32857)] = 'RGB10_A2'),
            (e[(e.RGB10_A2UI = 36975)] = 'RGB10_A2UI');
        })(S || (S = {})),
        (function (e) {
          (e[(e.FLOAT = 5126)] = 'FLOAT'),
            (e[(e.UNSIGNED_BYTE = 5121)] = 'UNSIGNED_BYTE'),
            (e[(e.UNSIGNED_INT_24_8 = 34042)] = 'UNSIGNED_INT_24_8'),
            (e[(e.UNSIGNED_SHORT_4_4_4_4 = 32819)] = 'UNSIGNED_SHORT_4_4_4_4'),
            (e[(e.UNSIGNED_SHORT_5_5_5_1 = 32820)] = 'UNSIGNED_SHORT_5_5_5_1'),
            (e[(e.UNSIGNED_SHORT_5_6_5 = 33635)] = 'UNSIGNED_SHORT_5_6_5'),
            (e[(e.BYTE = 5120)] = 'BYTE'),
            (e[(e.UNSIGNED_SHORT = 5123)] = 'UNSIGNED_SHORT'),
            (e[(e.SHORT = 5122)] = 'SHORT'),
            (e[(e.UNSIGNED_INT = 5125)] = 'UNSIGNED_INT'),
            (e[(e.INT = 5124)] = 'INT'),
            (e[(e.HALF_FLOAT = 5131)] = 'HALF_FLOAT'),
            (e[(e.UNSIGNED_INT_2_10_10_10_REV = 33640)] =
              'UNSIGNED_INT_2_10_10_10_REV'),
            (e[(e.UNSIGNED_INT_10F_11F_11F_REV = 35899)] =
              'UNSIGNED_INT_10F_11F_11F_REV'),
            (e[(e.UNSIGNED_INT_5_9_9_9_REV = 35902)] =
              'UNSIGNED_INT_5_9_9_9_REV'),
            (e[(e.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269)] =
              'FLOAT_32_UNSIGNED_INT_24_8_REV');
        })(R || (R = {})),
        (function (e) {
          (e[(e.DEPTH_COMPONENT16 = 33189)] = 'DEPTH_COMPONENT16'),
            (e[(e.STENCIL_INDEX8 = 36168)] = 'STENCIL_INDEX8'),
            (e[(e.DEPTH_STENCIL = 34041)] = 'DEPTH_STENCIL'),
            (e[(e.DEPTH_COMPONENT24 = 33190)] = 'DEPTH_COMPONENT24'),
            (e[(e.DEPTH_COMPONENT32F = 36012)] = 'DEPTH_COMPONENT32F'),
            (e[(e.DEPTH24_STENCIL8 = 35056)] = 'DEPTH24_STENCIL8'),
            (e[(e.DEPTH32F_STENCIL8 = 36013)] = 'DEPTH32F_STENCIL8');
        })(T || (T = {})),
        (function (e) {
          (e[(e.STATIC_DRAW = 35044)] = 'STATIC_DRAW'),
            (e[(e.DYNAMIC_DRAW = 35048)] = 'DYNAMIC_DRAW'),
            (e[(e.STREAM_DRAW = 35040)] = 'STREAM_DRAW'),
            (e[(e.STATIC_READ = 35045)] = 'STATIC_READ'),
            (e[(e.DYNAMIC_READ = 35049)] = 'DYNAMIC_READ'),
            (e[(e.STREAM_READ = 35041)] = 'STREAM_READ'),
            (e[(e.STATIC_COPY = 35046)] = 'STATIC_COPY'),
            (e[(e.DYNAMIC_COPY = 35050)] = 'DYNAMIC_COPY'),
            (e[(e.STREAM_COPY = 35042)] = 'STREAM_COPY');
        })(A || (A = {})),
        (function (e) {
          (e[(e.FRAGMENT_SHADER = 35632)] = 'FRAGMENT_SHADER'),
            (e[(e.VERTEX_SHADER = 35633)] = 'VERTEX_SHADER');
        })(b || (b = {})),
        (function (e) {
          (e[(e.FRAMEBUFFER = 36160)] = 'FRAMEBUFFER'),
            (e[(e.READ_FRAMEBUFFER = 36008)] = 'READ_FRAMEBUFFER'),
            (e[(e.DRAW_FRAMEBUFFER = 36009)] = 'DRAW_FRAMEBUFFER');
        })(C || (C = {})),
        (function (e) {
          (e[(e.TEXTURE = 0)] = 'TEXTURE'),
            (e[(e.RENDER_BUFFER = 1)] = 'RENDER_BUFFER'),
            (e[(e.CUBEMAP = 2)] = 'CUBEMAP');
        })(g || (g = {})),
        (function (e) {
          (e[(e.NONE = 0)] = 'NONE'),
            (e[(e.DEPTH_RENDER_BUFFER = 1)] = 'DEPTH_RENDER_BUFFER'),
            (e[(e.STENCIL_RENDER_BUFFER = 2)] = 'STENCIL_RENDER_BUFFER'),
            (e[(e.DEPTH_STENCIL_RENDER_BUFFER = 3)] =
              'DEPTH_STENCIL_RENDER_BUFFER'),
            (e[(e.DEPTH_STENCIL_TEXTURE = 4)] = 'DEPTH_STENCIL_TEXTURE');
        })(v || (v = {})),
        (function (e) {
          (e[(e.Texture = 0)] = 'Texture'),
            (e[(e.Buffer = 1)] = 'Buffer'),
            (e[(e.VAO = 2)] = 'VAO'),
            (e[(e.Shader = 3)] = 'Shader'),
            (e[(e.Program = 4)] = 'Program'),
            (e[(e.Framebuffer = 5)] = 'Framebuffer'),
            (e[(e.Renderbuffer = 6)] = 'Renderbuffer'),
            (e[(e.Sync = 7)] = 'Sync'),
            (e[(e.COUNT = 8)] = 'COUNT');
        })(N || (N = {})),
        (function (e) {
          (e[(e.COLOR_ATTACHMENT0 = 36064)] = 'COLOR_ATTACHMENT0'),
            (e[(e.COLOR_ATTACHMENT1 = 36065)] = 'COLOR_ATTACHMENT1'),
            (e[(e.COLOR_ATTACHMENT2 = 36066)] = 'COLOR_ATTACHMENT2'),
            (e[(e.COLOR_ATTACHMENT3 = 36067)] = 'COLOR_ATTACHMENT3'),
            (e[(e.COLOR_ATTACHMENT4 = 36068)] = 'COLOR_ATTACHMENT4'),
            (e[(e.COLOR_ATTACHMENT5 = 36069)] = 'COLOR_ATTACHMENT5'),
            (e[(e.COLOR_ATTACHMENT6 = 36070)] = 'COLOR_ATTACHMENT6'),
            (e[(e.COLOR_ATTACHMENT7 = 36071)] = 'COLOR_ATTACHMENT7'),
            (e[(e.COLOR_ATTACHMENT8 = 36072)] = 'COLOR_ATTACHMENT8'),
            (e[(e.COLOR_ATTACHMENT9 = 36073)] = 'COLOR_ATTACHMENT9'),
            (e[(e.COLOR_ATTACHMENT10 = 36074)] = 'COLOR_ATTACHMENT10'),
            (e[(e.COLOR_ATTACHMENT11 = 36075)] = 'COLOR_ATTACHMENT11'),
            (e[(e.COLOR_ATTACHMENT12 = 36076)] = 'COLOR_ATTACHMENT12'),
            (e[(e.COLOR_ATTACHMENT13 = 36077)] = 'COLOR_ATTACHMENT13'),
            (e[(e.COLOR_ATTACHMENT14 = 36078)] = 'COLOR_ATTACHMENT14'),
            (e[(e.COLOR_ATTACHMENT15 = 36079)] = 'COLOR_ATTACHMENT15');
        })(m || (m = {}));
      const I = 33306;
      var L, f, w, O, M, x, P;
      !(function (e) {
        (e[(e.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776)] =
          'COMPRESSED_RGB_S3TC_DXT1_EXT'),
          (e[(e.COMPRESSED_RGBA_S3TC_DXT1_EXT = 33777)] =
            'COMPRESSED_RGBA_S3TC_DXT1_EXT'),
          (e[(e.COMPRESSED_RGBA_S3TC_DXT3_EXT = 33778)] =
            'COMPRESSED_RGBA_S3TC_DXT3_EXT'),
          (e[(e.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779)] =
            'COMPRESSED_RGBA_S3TC_DXT5_EXT'),
          (e[(e.COMPRESSED_R11_EAC = 37488)] = 'COMPRESSED_R11_EAC'),
          (e[(e.COMPRESSED_SIGNED_R11_EAC = 37489)] =
            'COMPRESSED_SIGNED_R11_EAC'),
          (e[(e.COMPRESSED_RG11_EAC = 37490)] = 'COMPRESSED_RG11_EAC'),
          (e[(e.COMPRESSED_SIGNED_RG11_EAC = 37491)] =
            'COMPRESSED_SIGNED_RG11_EAC'),
          (e[(e.COMPRESSED_RGB8_ETC2 = 37492)] = 'COMPRESSED_RGB8_ETC2'),
          (e[(e.COMPRESSED_SRGB8_ETC2 = 37493)] = 'COMPRESSED_SRGB8_ETC2'),
          (e[(e.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494)] =
            'COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2'),
          (e[(e.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495)] =
            'COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2'),
          (e[(e.COMPRESSED_RGBA8_ETC2_EAC = 37496)] =
            'COMPRESSED_RGBA8_ETC2_EAC'),
          (e[(e.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497)] =
            'COMPRESSED_SRGB8_ALPHA8_ETC2_EAC');
      })(L || (L = {})),
        (function (e) {
          (e[(e.FLOAT = 5126)] = 'FLOAT'),
            (e[(e.FLOAT_VEC2 = 35664)] = 'FLOAT_VEC2'),
            (e[(e.FLOAT_VEC3 = 35665)] = 'FLOAT_VEC3'),
            (e[(e.FLOAT_VEC4 = 35666)] = 'FLOAT_VEC4'),
            (e[(e.INT = 5124)] = 'INT'),
            (e[(e.INT_VEC2 = 35667)] = 'INT_VEC2'),
            (e[(e.INT_VEC3 = 35668)] = 'INT_VEC3'),
            (e[(e.INT_VEC4 = 35669)] = 'INT_VEC4'),
            (e[(e.BOOL = 35670)] = 'BOOL'),
            (e[(e.BOOL_VEC2 = 35671)] = 'BOOL_VEC2'),
            (e[(e.BOOL_VEC3 = 35672)] = 'BOOL_VEC3'),
            (e[(e.BOOL_VEC4 = 35673)] = 'BOOL_VEC4'),
            (e[(e.FLOAT_MAT2 = 35674)] = 'FLOAT_MAT2'),
            (e[(e.FLOAT_MAT3 = 35675)] = 'FLOAT_MAT3'),
            (e[(e.FLOAT_MAT4 = 35676)] = 'FLOAT_MAT4'),
            (e[(e.SAMPLER_2D = 35678)] = 'SAMPLER_2D'),
            (e[(e.SAMPLER_CUBE = 35680)] = 'SAMPLER_CUBE'),
            (e[(e.UNSIGNED_INT = 5125)] = 'UNSIGNED_INT'),
            (e[(e.UNSIGNED_INT_VEC2 = 36294)] = 'UNSIGNED_INT_VEC2'),
            (e[(e.UNSIGNED_INT_VEC3 = 36295)] = 'UNSIGNED_INT_VEC3'),
            (e[(e.UNSIGNED_INT_VEC4 = 36296)] = 'UNSIGNED_INT_VEC4'),
            (e[(e.FLOAT_MAT2x3 = 35685)] = 'FLOAT_MAT2x3'),
            (e[(e.FLOAT_MAT2x4 = 35686)] = 'FLOAT_MAT2x4'),
            (e[(e.FLOAT_MAT3x2 = 35687)] = 'FLOAT_MAT3x2'),
            (e[(e.FLOAT_MAT3x4 = 35688)] = 'FLOAT_MAT3x4'),
            (e[(e.FLOAT_MAT4x2 = 35689)] = 'FLOAT_MAT4x2'),
            (e[(e.FLOAT_MAT4x3 = 35690)] = 'FLOAT_MAT4x3'),
            (e[(e.SAMPLER_3D = 35679)] = 'SAMPLER_3D'),
            (e[(e.SAMPLER_2D_SHADOW = 35682)] = 'SAMPLER_2D_SHADOW'),
            (e[(e.SAMPLER_2D_ARRAY = 36289)] = 'SAMPLER_2D_ARRAY'),
            (e[(e.SAMPLER_2D_ARRAY_SHADOW = 36292)] =
              'SAMPLER_2D_ARRAY_SHADOW'),
            (e[(e.SAMPLER_CUBE_SHADOW = 36293)] = 'SAMPLER_CUBE_SHADOW'),
            (e[(e.INT_SAMPLER_2D = 36298)] = 'INT_SAMPLER_2D'),
            (e[(e.INT_SAMPLER_3D = 36299)] = 'INT_SAMPLER_3D'),
            (e[(e.INT_SAMPLER_CUBE = 36300)] = 'INT_SAMPLER_CUBE'),
            (e[(e.INT_SAMPLER_2D_ARRAY = 36303)] = 'INT_SAMPLER_2D_ARRAY'),
            (e[(e.UNSIGNED_INT_SAMPLER_2D = 36306)] =
              'UNSIGNED_INT_SAMPLER_2D'),
            (e[(e.UNSIGNED_INT_SAMPLER_3D = 36307)] =
              'UNSIGNED_INT_SAMPLER_3D'),
            (e[(e.UNSIGNED_INT_SAMPLER_CUBE = 36308)] =
              'UNSIGNED_INT_SAMPLER_CUBE'),
            (e[(e.UNSIGNED_INT_SAMPLER_2D_ARRAY = 36311)] =
              'UNSIGNED_INT_SAMPLER_2D_ARRAY');
        })(f || (f = {})),
        (function (e) {
          (e[(e.OBJECT_TYPE = 37138)] = 'OBJECT_TYPE'),
            (e[(e.SYNC_CONDITION = 37139)] = 'SYNC_CONDITION'),
            (e[(e.SYNC_STATUS = 37140)] = 'SYNC_STATUS'),
            (e[(e.SYNC_FLAGS = 37141)] = 'SYNC_FLAGS');
        })(w || (w = {})),
        (function (e) {
          (e[(e.UNSIGNALED = 37144)] = 'UNSIGNALED'),
            (e[(e.SIGNALED = 37145)] = 'SIGNALED');
        })(O || (O = {})),
        (function (e) {
          (e[(e.ALREADY_SIGNALED = 37146)] = 'ALREADY_SIGNALED'),
            (e[(e.TIMEOUT_EXPIRED = 37147)] = 'TIMEOUT_EXPIRED'),
            (e[(e.CONDITION_SATISFIED = 37148)] = 'CONDITION_SATISFIED'),
            (e[(e.WAIT_FAILED = 37149)] = 'WAIT_FAILED');
        })(M || (M = {})),
        (function (e) {
          e[(e.SYNC_GPU_COMMANDS_COMPLETE = 37143)] =
            'SYNC_GPU_COMMANDS_COMPLETE';
        })(x || (x = {})),
        (function (e) {
          e[(e.SYNC_FLUSH_COMMANDS_BIT = 1)] = 'SYNC_FLUSH_COMMANDS_BIT';
        })(P || (P = {}));
    },
    65242: (e, t, i) => {
      i.d(t, { a: () => s, b: () => n });
      var r = i(75215);
      function s(e) {
        const t = (0, r.vU)(100 * (1 - e));
        return Math.max(0, Math.min(t, 100));
      }
      function n(e) {
        const t = 1 - e / 100;
        return Math.max(0, Math.min(t, 1));
      }
    },
  },
]);
