'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [5358],
  {
    38171: (e, t, r) => {
      r.d(t, { Z: () => m });
      var i = r(43697),
        a = r(66577),
        n = r(51773),
        s = r(78223),
        o = r(2368),
        l = r(96674),
        u = r(70586),
        c = r(99001),
        p = r(5600),
        d = (r(67676), r(80442), r(75215), r(52011)),
        h = r(33955);
      function f(e) {
        if (!(0, u.pC)(e)) return null;
        const t = {};
        for (const r in e) {
          const i = e[r];
          i && (t[r] = i.toJSON());
        }
        return 0 !== Object.keys(t).length ? t : null;
      }
      let y = class extends (0, o.J)(l.wq) {
        constructor(...e) {
          super(...e),
            (this.isAggregate = !1),
            (this.layer = null),
            (this.popupTemplate = null),
            (this.sourceLayer = null),
            Object.defineProperty(this, 'uid', {
              value: (0, c.D)(),
              configurable: !0,
            });
        }
        normalizeCtorArgs(e, t, r, i) {
          return e && !e.declaredClass
            ? e
            : { geometry: e, symbol: t, attributes: r, popupTemplate: i };
        }
        set aggregateGeometries(e) {
          const t = this._get('aggregateGeometries');
          JSON.stringify(t) !== JSON.stringify(e) &&
            this._set('aggregateGeometries', e);
        }
        set attributes(e) {
          const t = this._get('attributes');
          t !== e &&
            (this._set('attributes', e), this._notifyLayer('attributes', t, e));
        }
        set geometry(e) {
          const t = this._get('geometry');
          t !== e &&
            (this._set('geometry', e), this._notifyLayer('geometry', t, e));
        }
        set symbol(e) {
          const t = this._get('symbol');
          t !== e &&
            (this._set('symbol', e), this._notifyLayer('symbol', t, e));
        }
        set visible(e) {
          const t = this._get('visible');
          t !== e &&
            (this._set('visible', e), this._notifyLayer('visible', t, e));
        }
        getEffectivePopupTemplate(e = !1) {
          if (this.popupTemplate) return this.popupTemplate;
          for (const t of [this.sourceLayer, this.layer])
            if (t) {
              if ('popupTemplate' in t && t.popupTemplate)
                return t.popupTemplate;
              if (
                e &&
                'defaultPopupTemplate' in t &&
                (0, u.pC)(t.defaultPopupTemplate)
              )
                return t.defaultPopupTemplate;
            }
          return null;
        }
        getAttribute(e) {
          return this.attributes && this.attributes[e];
        }
        setAttribute(e, t) {
          if (this.attributes) {
            const r = this.getAttribute(e);
            (this.attributes[e] = t), this._notifyLayer('attributes', r, t, e);
          } else
            (this.attributes = { [e]: t }),
              this._notifyLayer('attributes', void 0, t, e);
        }
        getObjectId() {
          return this.sourceLayer &&
            'objectIdField' in this.sourceLayer &&
            this.sourceLayer.objectIdField
            ? this.getAttribute(this.sourceLayer.objectIdField)
            : null;
        }
        toJSON() {
          return {
            aggregateGeometries: f(this.aggregateGeometries),
            geometry: (0, u.pC)(this.geometry) ? this.geometry.toJSON() : null,
            symbol: (0, u.pC)(this.symbol) ? this.symbol.toJSON() : null,
            attributes: { ...this.attributes },
            popupTemplate: this.popupTemplate && this.popupTemplate.toJSON(),
          };
        }
        notifyGeometryChanged() {
          this._notifyLayer('geometry', this.geometry, this.geometry);
        }
        notifyMeshTransformChanged() {
          (0, u.pC)(this.geometry) &&
            'mesh' === this.geometry.type &&
            this._notifyLayer(
              'transform',
              this.geometry.transform,
              this.geometry.transform,
            );
        }
        _notifyLayer(e, t, r, i) {
          if (!this.layer || !('graphicChanged' in this.layer)) return;
          const a = { graphic: this, property: e, oldValue: t, newValue: r };
          'attributes' === e && (a.attributeName = i),
            this.layer.graphicChanged(a);
        }
      };
      (0, i._)(
        [
          (0, p.Cb)({
            value: null,
            json: {
              read: function (e) {
                if (!e) return null;
                const t = {};
                for (const r in e) {
                  const i = (0, h.im)(e[r]);
                  i && (t[r] = i);
                }
                return 0 !== Object.keys(t).length ? t : null;
              },
            },
          }),
        ],
        y.prototype,
        'aggregateGeometries',
        null,
      ),
        (0, i._)([(0, p.Cb)({ value: null })], y.prototype, 'attributes', null),
        (0, i._)(
          [(0, p.Cb)({ value: null, types: a.qM, json: { read: h.im } })],
          y.prototype,
          'geometry',
          null,
        ),
        (0, i._)(
          [(0, p.Cb)({ type: Boolean })],
          y.prototype,
          'isAggregate',
          void 0,
        ),
        (0, i._)(
          [(0, p.Cb)({ clonable: 'reference' })],
          y.prototype,
          'layer',
          void 0,
        ),
        (0, i._)(
          [(0, p.Cb)({ type: n.Z })],
          y.prototype,
          'popupTemplate',
          void 0,
        ),
        (0, i._)(
          [(0, p.Cb)({ clonable: 'reference' })],
          y.prototype,
          'sourceLayer',
          void 0,
        ),
        (0, i._)(
          [(0, p.Cb)({ value: null, types: s.LB })],
          y.prototype,
          'symbol',
          null,
        ),
        (0, i._)(
          [(0, p.Cb)({ type: Boolean, value: !0 })],
          y.prototype,
          'visible',
          null,
        ),
        (y = (0, i._)([(0, d.j)('esri.Graphic')], y)),
        ((y || (y = {})).generateUID = c.D);
      const m = y;
    },
    74085: (e, t, r) => {
      function i(e) {}
      r.d(t, { Bg: () => i }), r(80442);
    },
    98636: (e, t, r) => {
      r.r(t), r.d(t, { default: () => k });
      var i = r(43697),
        a = r(3172),
        n = r(20102),
        s = r(3920),
        o = r(70586),
        l = r(16453),
        u = r(95330),
        c = r(17452),
        p = r(5600),
        d = (r(67676), r(80442), r(90578)),
        h = r(71715),
        f = r(52011),
        y = r(30556),
        m = r(82971),
        v = r(29600),
        b = r(54295),
        g = r(46486),
        _ = r(7944),
        C = r(17287),
        S = r(71612),
        x = r(17017),
        w = r(38009),
        V = r(16859),
        T = r(34760),
        L = r(72965),
        O = r(10343),
        R = r(66677),
        D = r(21506),
        F = r(49867);
      const N = [
        'Canvas/World_Dark_Gray_Base',
        'Canvas/World_Dark_Gray_Reference',
        'Canvas/World_Light_Gray_Base',
        'Canvas/World_Light_Gray_Reference',
        'Elevation/World_Hillshade',
        'Elevation/World_Hillshade_Dark',
        'Ocean/World_Ocean_Base',
        'Ocean/World_Ocean_Reference',
        'Ocean_Basemap',
        'Reference/World_Boundaries_and_Places',
        'Reference/World_Boundaries_and_Places_Alternate',
        'Reference/World_Transportation',
        'World_Imagery',
        'World_Street_Map',
        'World_Topo_Map',
      ];
      let z = class extends (0, S.h)(
        (0, O.x)(
          (0, L.M)(
            (0, w.q)(
              (0, V.I)(
                (0, g.Z)(
                  (0, _.O)(
                    (0, C.Y)(
                      (0, l.R)((0, s.p)((0, T.Q)((0, b.V)((0, x.N)(v.Z))))),
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
      ) {
        constructor(...e) {
          super(...e),
            (this.listMode = 'show'),
            (this.isReference = null),
            (this.operationalLayerType = 'ArcGISTiledMapServiceLayer'),
            (this.resampling = !0),
            (this.sourceJSON = null),
            (this.spatialReference = null),
            (this.path = null),
            (this.sublayers = null),
            (this.type = 'tile'),
            (this.url = null);
        }
        normalizeCtorArgs(e, t) {
          return 'string' == typeof e ? { url: e, ...t } : e;
        }
        load(e) {
          const t = (0, o.pC)(e) ? e.signal : null;
          return (
            this.addResolvingPromise(
              this.loadFromPortal({ supportedTypes: ['Map Service'] }, e)
                .catch(u.r9)
                .then(() => this._fetchService(t)),
            ),
            Promise.resolve(this)
          );
        }
        get attributionDataUrl() {
          var e;
          const t =
            null == (e = this.parsedUrl) ? void 0 : e.path.toLowerCase();
          return t && this._getDefaultAttribution(this._getMapName(t));
        }
        readSpatialReference(e, t) {
          return (
            (e = e || (t.tileInfo && t.tileInfo.spatialReference)) &&
            m.Z.fromJSON(e)
          );
        }
        writeSublayers(e, t, r, i) {
          if (!this.loaded || !e) return;
          const a = e
              .slice()
              .reverse()
              .flatten(({ sublayers: e }) => e && e.toArray().reverse())
              .toArray(),
            n = [],
            s = { writeSublayerStructure: !1, ...i };
          a.forEach((e) => {
            const t = e.write({}, s);
            n.push(t);
          }),
            n.some((e) => Object.keys(e).length > 1) && (t.layers = n);
        }
        get tileServers() {
          return this._getDefaultTileServers(this.parsedUrl.path);
        }
        castTileServers(e) {
          return Array.isArray(e) ? e.map((e) => (0, c.mN)(e).path) : null;
        }
        fetchTile(e, t, r, i = {}) {
          const { signal: n } = i,
            s = this.getTileUrl(e, t, r),
            o = {
              responseType: 'image',
              signal: n,
              query: { ...this.refreshParameters },
            };
          return (0, a.default)(s, o).then((e) => e.data);
        }
        getTileUrl(e, t, r) {
          const i = !this.tilemapCache && this.supportsBlankTile,
            a = (0, c.B7)({
              ...this.parsedUrl.query,
              blankTile: !i && null,
              ...this.customParameters,
              token: this.apiKey,
            }),
            n = this.tileServers;
          return `${
            n && n.length ? n[t % n.length] : this.parsedUrl.path
          }/tile/${e}/${t}/${r}${a ? '?' + a : ''}`;
        }
        _fetchService(e) {
          return new Promise((t, r) => {
            if (this.sourceJSON) {
              if (
                null != this.sourceJSON.bandCount &&
                null != this.sourceJSON.pixelSizeX
              )
                throw new n.Z(
                  'tile-layer:unsupported-url',
                  'use ImageryTileLayer to open a tiled image service',
                );
              return void t({ data: this.sourceJSON });
            }
            if (!this.parsedUrl)
              throw new n.Z(
                'tile-layer:undefined-url',
                "layer's url is not defined",
              );
            const i = (0, R.Qc)(this.parsedUrl.path);
            if ((0, o.pC)(i) && 'ImageServer' === i.serverType)
              throw new n.Z(
                'tile-layer:unsupported-url',
                'use ImageryTileLayer to open a tiled image service',
              );
            (0, a.default)(this.parsedUrl.path, {
              query: {
                f: 'json',
                ...this.parsedUrl.query,
                ...this.customParameters,
                token: this.apiKey,
              },
              responseType: 'json',
              signal: e,
            }).then(t, r);
          }).then((t) => {
            if (
              (t.ssl && (this.url = this.url.replace(/^http:/i, 'https:')),
              (this.sourceJSON = t.data),
              this.read(t.data, { origin: 'service', url: this.parsedUrl }),
              10.1 === this.version && !(0, R.M8)(this.url))
            )
              return this._fetchServerVersion(this.url, e)
                .then((e) => {
                  this.read({ currentVersion: e });
                })
                .catch(() => {});
          });
        }
        _fetchServerVersion(e, t) {
          if (!(0, R.B5)(e)) return Promise.reject();
          const r = e.replace(/(.*\/rest)\/.*/i, '$1') + '/info';
          return (0, a.default)(r, {
            query: { f: 'json', ...this.customParameters, token: this.apiKey },
            responseType: 'json',
            signal: t,
          }).then((e) => {
            if (e.data && e.data.currentVersion) return e.data.currentVersion;
            throw new n.Z('tile-layer:version-not-available');
          });
        }
        _getMapName(e) {
          const t = e.match(
            /^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i,
          );
          return t && t[2];
        }
        _getDefaultAttribution(e) {
          if (!e) return;
          let t;
          e = e.toLowerCase();
          for (let r = 0, i = N.length; r < i; r++)
            if (((t = N[r]), t.toLowerCase().indexOf(e) > -1))
              return (0, c.hF)('//static.arcgis.com/attribution/' + t);
        }
        _getDefaultTileServers(e) {
          const t =
              -1 !== e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),
            r =
              -1 !== e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);
          return t || r
            ? [
                e,
                e.replace(
                  t ? /server\.arcgisonline/i : /services\.arcgisonline/i,
                  t ? 'services.arcgisonline' : 'server.arcgisonline',
                ),
              ]
            : [];
        }
        get hasOverriddenFetchTile() {
          return !this.fetchTile.__isDefault__;
        }
      };
      (0, i._)(
        [(0, p.Cb)({ readOnly: !0 })],
        z.prototype,
        'attributionDataUrl',
        null,
      ),
        (0, i._)(
          [(0, p.Cb)({ type: ['show', 'hide', 'hide-children'] })],
          z.prototype,
          'listMode',
          void 0,
        ),
        (0, i._)(
          [
            (0, p.Cb)({
              type: Boolean,
              json: {
                read: !1,
                write: { enabled: !0, overridePolicy: () => ({ enabled: !1 }) },
              },
            }),
          ],
          z.prototype,
          'isReference',
          void 0,
        ),
        (0, i._)(
          [(0, p.Cb)({ readOnly: !0, type: ['ArcGISTiledMapServiceLayer'] })],
          z.prototype,
          'operationalLayerType',
          void 0,
        ),
        (0, i._)(
          [(0, p.Cb)({ type: Boolean })],
          z.prototype,
          'resampling',
          void 0,
        ),
        (0, i._)([(0, p.Cb)()], z.prototype, 'sourceJSON', void 0),
        (0, i._)(
          [(0, p.Cb)({ type: m.Z })],
          z.prototype,
          'spatialReference',
          void 0,
        ),
        (0, i._)(
          [(0, h.r)('spatialReference', ['spatialReference', 'tileInfo'])],
          z.prototype,
          'readSpatialReference',
          null,
        ),
        (0, i._)(
          [
            (0, p.Cb)({
              type: String,
              json: {
                origins: { 'web-scene': { read: !0, write: !0 } },
                read: !1,
              },
            }),
          ],
          z.prototype,
          'path',
          void 0,
        ),
        (0, i._)(
          [(0, p.Cb)({ readOnly: !0 })],
          z.prototype,
          'sublayers',
          void 0,
        ),
        (0, i._)(
          [(0, y.c)('sublayers', { layers: { type: [F.Z] } })],
          z.prototype,
          'writeSublayers',
          null,
        ),
        (0, i._)(
          [(0, p.Cb)({ json: { read: !1, write: !1 } })],
          z.prototype,
          'popupEnabled',
          void 0,
        ),
        (0, i._)([(0, p.Cb)()], z.prototype, 'tileServers', null),
        (0, i._)(
          [(0, d.p)('tileServers')],
          z.prototype,
          'castTileServers',
          null,
        ),
        (0, i._)(
          [(0, p.Cb)({ readOnly: !0, json: { read: !1 } })],
          z.prototype,
          'type',
          void 0,
        ),
        (0, i._)([(0, p.Cb)(D.HQ)], z.prototype, 'url', void 0),
        (z = (0, i._)([(0, f.j)('esri.layers.TileLayer')], z)),
        (z.prototype.fetchTile.__isDefault__ = !0);
      const k = z;
    },
    46486: (e, t, r) => {
      r.d(t, { Z: () => c });
      var i = r(43697),
        a = (r(66577), r(5600)),
        n = (r(67676), r(80442), r(75215), r(71715)),
        s = r(52011),
        o = r(45322),
        l = r(56608),
        u = r(82971);
      const c = (e) => {
        let t = class extends e {
          constructor() {
            super(...arguments),
              (this.copyright = null),
              (this.minScale = 0),
              (this.maxScale = 0),
              (this.spatialReference = null),
              (this.tileInfo = null),
              (this.tilemapCache = null);
          }
          readMinScale(e, t) {
            return null != t.minLOD && null != t.maxLOD ? e : 0;
          }
          readMaxScale(e, t) {
            return null != t.minLOD && null != t.maxLOD ? e : 0;
          }
          get supportsBlankTile() {
            return this.version >= 10.2;
          }
          readTilemapCache(e, t) {
            return t.capabilities && t.capabilities.indexOf('Tilemap') > -1
              ? new l.y({ layer: this })
              : null;
          }
        };
        return (
          (0, i._)(
            [(0, a.Cb)({ json: { read: { source: 'copyrightText' } } })],
            t.prototype,
            'copyright',
            void 0,
          ),
          (0, i._)([(0, a.Cb)()], t.prototype, 'minScale', void 0),
          (0, i._)(
            [(0, n.r)('service', 'minScale')],
            t.prototype,
            'readMinScale',
            null,
          ),
          (0, i._)([(0, a.Cb)()], t.prototype, 'maxScale', void 0),
          (0, i._)(
            [(0, n.r)('service', 'maxScale')],
            t.prototype,
            'readMaxScale',
            null,
          ),
          (0, i._)(
            [(0, a.Cb)({ type: u.Z })],
            t.prototype,
            'spatialReference',
            void 0,
          ),
          (0, i._)(
            [(0, a.Cb)({ readOnly: !0 })],
            t.prototype,
            'supportsBlankTile',
            null,
          ),
          (0, i._)([(0, a.Cb)(o.h)], t.prototype, 'tileInfo', void 0),
          (0, i._)([(0, a.Cb)()], t.prototype, 'tilemapCache', void 0),
          (0, i._)(
            [(0, n.r)('service', 'tilemapCache', ['capabilities'])],
            t.prototype,
            'readTilemapCache',
            null,
          ),
          (0, i._)([(0, a.Cb)()], t.prototype, 'version', void 0),
          (t = (0, i._)(
            [(0, s.j)('esri.layers.mixins.ArcGISCachedService')],
            t,
          )),
          t
        );
      };
    },
    51706: (e, t, r) => {
      var i, a;
      function n(e) {
        return (
          e && 'esri.renderers.visualVariables.SizeVariable' === e.declaredClass
        );
      }
      function s(e) {
        return null != e && !isNaN(e) && isFinite(e);
      }
      function o(e) {
        return e.valueExpression
          ? i.Expression
          : e.field && 'string' == typeof e.field
          ? i.Field
          : i.Unknown;
      }
      function l(e, t) {
        const r = t || o(e),
          n = e.valueUnit || 'unknown';
        return r === i.Unknown
          ? a.Constant
          : e.stops
          ? a.Stops
          : null != e.minSize &&
            null != e.maxSize &&
            null != e.minDataValue &&
            null != e.maxDataValue
          ? a.ClampedLinear
          : 'unknown' === n
          ? null != e.minSize && null != e.minDataValue
            ? e.minSize && e.minDataValue
              ? a.Proportional
              : a.Additive
            : a.Identity
          : a.RealWorldSize;
      }
      r.d(t, {
        RY: () => i,
        hL: () => a,
        PS: () => o,
        QW: () => l,
        iY: () => n,
        qh: () => s,
      }),
        (function (e) {
          (e.Unknown = 'unknown'),
            (e.Expression = 'expression'),
            (e.Field = 'field');
        })(i || (i = {})),
        (function (e) {
          (e.Unknown = 'unknown'),
            (e.Stops = 'stops'),
            (e.ClampedLinear = 'clamped-linear'),
            (e.Proportional = 'proportional'),
            (e.Additive = 'additive'),
            (e.Constant = 'constant'),
            (e.Identity = 'identity'),
            (e.RealWorldSize = 'real-world-size');
        })(a || (a = {}));
    },
    28101: (e, t, r) => {
      r.d(t, {
        PR: () => S,
        Lq: () => f,
        Km: () => y,
        cM: () => m,
        ap: () => v,
        V3: () => _,
        B3: () => h,
      });
      var i = r(22303),
        a = r(38171),
        n = r(74085),
        s = r(92604),
        o = r(70586),
        l = r(99282),
        u = r(51706);
      const c = s.Z.getLogger(
          'esri.renderers.visualVariables.support.visualVariableUtils',
        ),
        p = new a.Z(),
        d = Math.PI,
        h = /^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i;
      function f(e, t, r) {
        const a =
          'visualVariables' in e && e.visualVariables
            ? e.visualVariables.find((e) => 'color' === e.type)
            : e;
        if (!a) return;
        if ('esri.renderers.visualVariables.ColorVariable' !== a.declaredClass)
          return void c.warn(
            'The visualVariable should be an instance of esri.renderers.visualVariables.ColorVariable',
          );
        const n = 'number' == typeof t,
          s = n ? null : t,
          l = s && s.attributes;
        let u = n ? t : null;
        const p = a.field,
          { ipData: d, hasExpression: h } = a.cache;
        let f = a.cache.compiledFunc;
        if (!p && !h) {
          const e = a.stops;
          return e && e[0] && e[0].color;
        }
        if ('number' != typeof u)
          if (h) {
            if (!(0, o.pC)(r) || !(0, o.pC)(r.arcade))
              return void c.error(
                'Use of arcade expressions requires an arcade context',
              );
            const e = {
                viewingMode: r.viewingMode,
                scale: r.scale,
                spatialReference: r.spatialReference,
              },
              t = r.arcade.arcadeUtils,
              i = t.getViewInfo(e),
              n = t.createExecContext(s, i);
            if (!f) {
              const e = t.createSyntaxTree(a.valueExpression);
              (f = t.createFunction(e)), (a.cache.compiledFunc = f);
            }
            u = t.executeFunction(f, n);
          } else l && (u = l[p]);
        const y = a.normalizationField,
          m = l ? parseFloat(l[y]) : void 0;
        if (null != u && (!y || n || (!isNaN(m) && 0 !== m))) {
          isNaN(m) || n || (u /= m);
          const e = C(u, d);
          if (e) {
            const t = e[0],
              n = e[1],
              s =
                t === n
                  ? a.stops[t].color
                  : i.Z.blendColors(
                      a.stops[t].color,
                      a.stops[n].color,
                      e[2],
                      (0, o.pC)(r) ? r.color : void 0,
                    );
            return new i.Z(s);
          }
        }
      }
      function y(e, t, r) {
        const i =
          'visualVariables' in e && e.visualVariables
            ? e.visualVariables.find((e) => 'opacity' === e.type)
            : e;
        if (!i) return;
        if (
          'esri.renderers.visualVariables.OpacityVariable' !== i.declaredClass
        )
          return void c.warn(
            'The visualVariable should be an instance of esri.renderers.visualVariables.OpacityVariable',
          );
        const a = 'number' == typeof t,
          n = a ? null : t,
          s = n && n.attributes;
        let l = a ? t : null;
        const u = i.field,
          { ipData: p, hasExpression: d } = i.cache;
        let h = i.cache.compiledFunc;
        if (!u && !d) {
          const e = i.stops;
          return e && e[0] && e[0].opacity;
        }
        if ('number' != typeof l)
          if (d) {
            if ((0, o.Wi)(r) || (0, o.Wi)(r.arcade))
              return void c.error(
                'Use of arcade expressions requires an arcade context',
              );
            const e = {
                viewingMode: r.viewingMode,
                scale: r.scale,
                spatialReference: r.spatialReference,
              },
              t = r.arcade.arcadeUtils,
              a = t.getViewInfo(e),
              s = t.createExecContext(n, a);
            if (!h) {
              const e = t.createSyntaxTree(i.valueExpression);
              (h = t.createFunction(e)), (i.cache.compiledFunc = h);
            }
            l = t.executeFunction(h, s);
          } else s && (l = s[u]);
        const f = i.normalizationField,
          y = s ? parseFloat(s[f]) : void 0;
        if (null != l && (!f || a || (!isNaN(y) && 0 !== y))) {
          isNaN(y) || a || (l /= y);
          const e = C(l, p);
          if (e) {
            const t = e[0],
              r = e[1];
            if (t === r) return i.stops[t].opacity;
            {
              const a = i.stops[t].opacity;
              return a + (i.stops[r].opacity - a) * e[2];
            }
          }
        }
      }
      function m(e, t, r) {
        const i =
          'visualVariables' in e && e.visualVariables
            ? e.visualVariables.find((e) => 'rotation' === e.type)
            : e;
        if (!i) return;
        if (
          'esri.renderers.visualVariables.RotationVariable' !== i.declaredClass
        )
          return void c.warn(
            'The visualVariable should be an instance of esri.renderers.visualVariables.RotationVariable',
          );
        const a = i.axis || 'heading',
          n = 'heading' === a && 'arithmetic' === i.rotationType ? 90 : 0,
          s = 'heading' === a && 'arithmetic' === i.rotationType ? -1 : 1,
          l = 'number' == typeof t ? null : t,
          u = l && l.attributes,
          p = i.field,
          { hasExpression: d } = i.cache;
        let h = i.cache.compiledFunc,
          f = 0;
        if (!p && !d) return f;
        if (d) {
          if ((0, o.Wi)(r) || (0, o.Wi)(r.arcade))
            return void c.error(
              'Use of arcade expressions requires an arcade context',
            );
          const e = {
              viewingMode: r.viewingMode,
              scale: r.scale,
              spatialReference: r.spatialReference,
            },
            t = r.arcade.arcadeUtils,
            a = t.getViewInfo(e),
            n = t.createExecContext(l, a);
          if (!h) {
            const e = t.createSyntaxTree(i.valueExpression);
            (h = t.createFunction(e)), (i.cache.compiledFunc = h);
          }
          f = t.executeFunction(h, n);
        } else u && (f = u[p] || 0);
        return (f = 'number' != typeof f || isNaN(f) ? null : n + s * f), f;
      }
      function v(e, t, r) {
        const i =
          'visualVariables' in e && e.visualVariables
            ? e.visualVariables.find((e) => 'size' === e.type)
            : e;
        if (!i) return;
        if ('esri.renderers.visualVariables.SizeVariable' !== i.declaredClass)
          return void c.warn(
            'The visualVariable should be an instance of esri.renderers.visualVariables.SizeVariable',
          );
        const a = (function (e, t, r, i, a) {
          switch (t.transformationType) {
            case u.hL.Additive:
              return (function (e, t, r, i) {
                return e + (b(t.minSize, r, i) || t.minDataValue);
              })(e, t, r, i);
            case u.hL.Constant:
              return (function (e, t, r) {
                const i = e.stops;
                let a = i && i.length && i[0].size;
                return null == a && (a = e.minSize), b(a, t, r);
              })(t, r, i);
            case u.hL.ClampedLinear:
              return (function (e, t, r, i) {
                const a =
                    (e - t.minDataValue) / (t.maxDataValue - t.minDataValue),
                  n = b(t.minSize, r, i),
                  s = b(t.maxSize, r, i),
                  l = (0, o.pC)(i) ? i.shape : void 0;
                if (e <= t.minDataValue) return n;
                if (e >= t.maxDataValue) return s;
                if ('area' === t.scaleBy && l) {
                  const e = 'circle' === l,
                    t = e ? d * (n / 2) ** 2 : n * n,
                    r = t + a * ((e ? d * (s / 2) ** 2 : s * s) - t);
                  return e ? 2 * Math.sqrt(r / d) : Math.sqrt(r);
                }
                return n + a * (s - n);
              })(e, t, r, i);
            case u.hL.Proportional:
              return (function (e, t, r, i) {
                const a = (0, o.pC)(i) ? i.shape : void 0,
                  n = e / t.minDataValue,
                  s = b(t.minSize, r, i),
                  l = b(t.maxSize, r, i);
                let u = null;
                return (
                  (u =
                    'circle' === a
                      ? 2 * Math.sqrt(n * (s / 2) ** 2)
                      : 'square' === a || 'diamond' === a || 'image' === a
                      ? Math.sqrt(n * s ** 2)
                      : n * s),
                  g(u, s, l)
                );
              })(e, t, r, i);
            case u.hL.Stops:
              return (function (e, t, r, i, a) {
                const [n, s, o] = C(e, a);
                if (n === s) return b(t.stops[n].size, r, i);
                {
                  const e = b(t.stops[n].size, r, i);
                  return e + (b(t.stops[s].size, r, i) - e) * o;
                }
              })(e, t, r, i, a);
            case u.hL.RealWorldSize:
              return (function (e, t, r, i) {
                const a =
                    ((0, o.pC)(i) && i.resolution ? i.resolution : 1) *
                    l.a[t.valueUnit],
                  n = b(t.minSize, r, i),
                  s = b(t.maxSize, r, i),
                  { valueRepresentation: u } = t;
                let c = null;
                return (
                  (c =
                    'area' === u
                      ? (2 * Math.sqrt(e / d)) / a
                      : 'radius' === u || 'distance' === u
                      ? (2 * e) / a
                      : e / a),
                  g(c, n, s)
                );
              })(e, t, r, i);
            case u.hL.Identity:
              return e;
            case u.hL.Unknown:
              return null;
          }
        })(
          (function (e, t, r) {
            const i = 'number' == typeof t,
              a = i ? null : t,
              n = a && a.attributes;
            let s = i ? t : null;
            const { isScaleDriven: l } = e.cache;
            let p = e.cache.compiledFunc;
            if (l) {
              const t = (0, o.pC)(r) ? r.scale : void 0,
                i = (0, o.pC)(r) ? r.view : void 0;
              s =
                null == t || '3d' === i
                  ? (function (e) {
                      let t = null,
                        r = null;
                      const i = e.stops;
                      return (
                        i
                          ? ((t = i[0].value), (r = i[i.length - 1].value))
                          : ((t = e.minDataValue || 0),
                            (r = e.maxDataValue || 0)),
                        (t + r) / 2
                      );
                    })(e)
                  : t;
            } else if (!i)
              switch (e.inputValueType) {
                case u.RY.Expression: {
                  if ((0, o.Wi)(r) || (0, o.Wi)(r.arcade))
                    return void c.error(
                      'Use of arcade expressions requires an arcade context',
                    );
                  const t = {
                      viewingMode: r.viewingMode,
                      scale: r.scale,
                      spatialReference: r.spatialReference,
                    },
                    i = r.arcade.arcadeUtils,
                    n = i.getViewInfo(t),
                    l = i.createExecContext(a, n);
                  if (!p) {
                    const t = i.createSyntaxTree(e.valueExpression);
                    (p = i.createFunction(t)), (e.cache.compiledFunc = p);
                  }
                  s = i.executeFunction(p, l);
                  break;
                }
                case u.RY.Field:
                  n && (s = n[e.field]);
                  break;
                case u.RY.Unknown:
                  s = null;
              }
            if (!(0, u.qh)(s)) return null;
            if (i || !e.normalizationField) return s;
            const d = n ? parseFloat(n[e.normalizationField]) : null;
            return (0, u.qh)(d) && 0 !== d ? s / d : null;
          })(i, t, r),
          i,
          t,
          r,
          i.cache.ipData,
        );
        return null == a || isNaN(a) ? 0 : a;
      }
      function b(e, t, r) {
        return null == e
          ? null
          : (0, u.iY)(e)
          ? v(e, t, r)
          : (0, u.qh)(e)
          ? e
          : null;
      }
      function g(e, t, r) {
        return (0, u.qh)(r) && e > r ? r : (0, u.qh)(t) && e < t ? t : e;
      }
      function _(e, t, r) {
        const { isScaleDriven: i } = e.cache;
        if (!((i && '3d' === r) || t)) return null;
        const a = { scale: t, view: r };
        let n = b(e.minSize, p, a),
          s = b(e.maxSize, p, a);
        if (null != n || null != s) {
          if (n > s) {
            const e = s;
            (s = n), (n = e);
          }
          return { minSize: n, maxSize: s };
        }
      }
      function C(e, t) {
        if (!t) return;
        let r = 0,
          i = t.length - 1;
        return (
          t.some((t, a) => (e < t ? ((i = a), !0) : ((r = a), !1))),
          [r, i, (e - t[r]) / (t[i] - t[r])]
        );
      }
      function S(e, t, r) {
        const i = ['proportional', 'proportional', 'proportional'];
        for (const a of e) {
          const e = a.useSymbolValue ? 'symbol-value' : v(a, t, r);
          switch (a.axis) {
            case 'width':
              i[0] = e;
              break;
            case 'depth':
              i[1] = e;
              break;
            case 'height':
              i[2] = e;
              break;
            case 'width-and-depth':
              (i[0] = e), (i[1] = e);
              break;
            case 'all':
            case void 0:
            case null:
              (i[0] = e), (i[1] = e), (i[2] = e);
              break;
            default:
              (0, n.Bg)(a.axis);
          }
        }
        return i;
      }
    },
    410: (e, t, r) => {
      function i(e) {
        var t;
        const r = e.layer;
        return 'floorInfo' in r &&
          null != (t = r.floorInfo) &&
          t.floorField &&
          'floors' in e.view
          ? s(e.view.floors, r.floorInfo.floorField)
          : null;
      }
      function a(e, t) {
        var r;
        return 'floorInfo' in t && null != (r = t.floorInfo) && r.floorField
          ? s(e, t.floorInfo.floorField)
          : null;
      }
      function n(e, t) {
        const { definitionExpression: r } = t;
        return e ? (r ? `(${r}) AND (${e})` : e) : r;
      }
      function s(e, t) {
        if (null == e || !e.length) return null;
        const r = e.filter((e) => '' !== e).map((e) => `'${e}'`);
        return r.push("''"), `${t} IN (${r.join(',')}) OR ${t} IS NULL`;
      }
      r.d(t, { Hp: () => n, cx: () => i, ff: () => a });
    },
  },
]);
