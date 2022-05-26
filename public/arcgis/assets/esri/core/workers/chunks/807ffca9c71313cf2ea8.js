'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [9989],
  {
    16453: (e, t, i) => {
      i.d(t, { R: () => g, w: () => w });
      var s = i(43697),
        r = i(15923),
        l = i(70586),
        o = i(41103),
        n = i(22974),
        a = i(31263);
      class u {
        constructor() {
          (this._propertyOriginMap = new Map()),
            (this._originStores = new Array(a.kk)),
            (this._values = new Map()),
            (this.multipleOriginsSupported = !0);
        }
        clone(e) {
          const t = new u(),
            i = this._originStores[a.s3.DEFAULTS];
          i &&
            i.forEach((e, i) => {
              t.set(i, (0, n.d9)(e), a.s3.DEFAULTS);
            });
          for (let i = a.s3.SERVICE; i < a.kk; i++) {
            const s = this._originStores[i];
            s &&
              s.forEach((s, r) => {
                (e && e.has(r)) || t.set(r, (0, n.d9)(s), i);
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
        set(e, t, i = a.s3.USER) {
          let s = this._originStores[i];
          if (
            (s || ((s = new Map()), (this._originStores[i] = s)),
            s.set(e, t),
            !this._values.has(e) ||
              (0, l.j0)(this._propertyOriginMap.get(e)) <= i)
          ) {
            const s = this._values.get(e);
            return (
              this._values.set(e, t), this._propertyOriginMap.set(e, i), s !== t
            );
          }
          return !1;
        }
        delete(e, t = a.s3.USER) {
          const i = this._originStores[t];
          if (!i) return;
          const s = i.get(e);
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
          return s;
        }
        has(e, t) {
          const i = void 0 === t ? this._values : this._originStores[t];
          return !!i && i.has(e);
        }
        revert(e, t) {
          for (; t > 0 && !this.has(e, t); ) --t;
          const i = this._originStores[t],
            s = i && i.get(e),
            r = this._values.get(e);
          return (
            this._values.set(e, s), this._propertyOriginMap.set(e, t), r !== s
          );
        }
        originOf(e) {
          return this._propertyOriginMap.get(e) || a.s3.DEFAULTS;
        }
        forEach(e) {
          this._values.forEach(e);
        }
      }
      var p = i(50549),
        d = i(1153),
        h = i(52011);
      const c = (e) => {
        let t = class extends e {
          constructor(...e) {
            super(...e);
            const t = (0, l.j0)((0, d.vw)(this)),
              i = t.store,
              s = new u();
            (t.store = s), (0, o.M)(t, i, s);
          }
          read(e, t) {
            (0, p.i)(this, e, t);
          }
          getAtOrigin(e, t) {
            const i = y(this),
              s = (0, a.M9)(t);
            if ('string' == typeof e) return i.get(e, s);
            const r = {};
            return (
              e.forEach((e) => {
                r[e] = i.get(e, s);
              }),
              r
            );
          }
          originOf(e) {
            return (0, a.x3)(this.originIdOf(e));
          }
          originIdOf(e) {
            return y(this).originOf(e);
          }
          revert(e, t) {
            const i = y(this),
              s = (0, a.M9)(t),
              r = (0, d.vw)(this);
            let l;
            (l = 'string' == typeof e ? ('*' === e ? i.keys(s) : [e]) : e),
              l.forEach((e) => {
                r.invalidate(e), i.revert(e, s), r.commit(e);
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
        return (0, d.vw)(e).store;
      }
      let b = class extends c(r.Z) {};
      b = (0, s._)([(0, h.j)('esri.core.ReadOnlyMultiOriginJSONSupport')], b);
      var m = i(76169);
      const f = (e) => {
        let t = class extends e {
          constructor(...e) {
            super(...e);
          }
          clear(e, t = 'user') {
            return v(this).delete(e, (0, a.M9)(t));
          }
          write(e = {}, t) {
            return (0, m.c)(this, (e = e || {}), t), e;
          }
          setAtOrigin(e, t, i) {
            (0, d.vw)(this).setAtOrigin(e, t, (0, a.M9)(i));
          }
          removeOrigin(e) {
            const t = v(this),
              i = (0, a.M9)(e),
              s = t.keys(i);
            for (const e of s)
              t.originOf(e) === i && t.set(e, t.get(e, i), a.s3.USER);
          }
          updateOrigin(e, t) {
            const i = v(this),
              s = (0, a.M9)(t),
              r = this.get(e);
            for (let t = s + 1; t < a.kk; ++t) i.delete(e, t);
            i.set(e, r, s);
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
      function v(e) {
        return (0, d.vw)(e).store;
      }
      const g = (e) => {
        let t = class extends f(c(e)) {
          constructor(...e) {
            super(...e);
          }
        };
        return (
          (t = (0, s._)([(0, h.j)('esri.core.MultiOriginJSONSupport')], t)), t
        );
      };
      let w = class extends g(r.Z) {};
      w = (0, s._)([(0, h.j)('esri.core.MultiOriginJSONSupport')], w);
    },
    44422: (e, t, i) => {
      i.d(t, { B: () => r });
      var s = i(5600);
      function r(e, t) {
        const i = t ? { ...t, source: e } : e;
        return (0, s.Cb)({ aliasOf: i });
      }
    },
    29600: (e, t, i) => {
      i.d(t, { Z: () => w });
      var s = i(43697),
        r = i(68773),
        l = (i(66577), i(3172)),
        o = i(20102),
        n = i(32448),
        a = i(10699),
        u = i(83379),
        p = i(92604),
        d = i(95330),
        h = i(17452),
        c = i(5600),
        y = (i(67676), i(80442), i(75215), i(52011)),
        b = i(6570),
        m = i(82971);
      let f = 0;
      const v = p.Z.getLogger('esri.layers.Layer');
      let g = class extends n.Z.EventedMixin((0, a.I)(u.Z)) {
        constructor() {
          super(...arguments),
            (this.attributionDataUrl = null),
            (this.fullExtent = new b.Z(-180, -90, 180, 90, m.Z.WGS84)),
            (this.id = Date.now().toString(16) + '-layer-' + f++),
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
            s = await i.e(3529).then(i.bind(i, 63529));
          try {
            return await s.fromUrl(t);
          } catch (e) {
            throw (
              (v.error(
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
            s = await i.e(4579).then(i.bind(i, 44579));
          try {
            return await s.fromItem(t);
          } catch (e) {
            const i = t && t.portalItem,
              s = (i && i.id) || 'unset',
              l = (i && i.portal && i.portal.url) || r.Z.portalUrl;
            throw (
              (v.error(
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
            var t, i;
            (0, d.D_)(e) ||
              p.Z.getLogger(this.declaredClass).error(
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
        [(0, c.Cb)({ type: String })],
        g.prototype,
        'attributionDataUrl',
        void 0,
      ),
        (0, s._)([(0, c.Cb)({ type: b.Z })], g.prototype, 'fullExtent', void 0),
        (0, s._)(
          [(0, c.Cb)({ readOnly: !0 })],
          g.prototype,
          'hasAttributionData',
          null,
        ),
        (0, s._)(
          [(0, c.Cb)({ type: String, clonable: !1 })],
          g.prototype,
          'id',
          void 0,
        ),
        (0, s._)(
          [(0, c.Cb)({ type: Boolean, nonNullable: !0 })],
          g.prototype,
          'legendEnabled',
          void 0,
        ),
        (0, s._)(
          [(0, c.Cb)({ type: ['show', 'hide', 'hide-children'] })],
          g.prototype,
          'listMode',
          void 0,
        ),
        (0, s._)(
          [
            (0, c.Cb)({
              type: Number,
              range: { min: 0, max: 1 },
              nonNullable: !0,
            }),
          ],
          g.prototype,
          'opacity',
          void 0,
        ),
        (0, s._)([(0, c.Cb)({ clonable: !1 })], g.prototype, 'parent', void 0),
        (0, s._)([(0, c.Cb)({ readOnly: !0 })], g.prototype, 'parsedUrl', null),
        (0, s._)(
          [(0, c.Cb)({ type: Boolean })],
          g.prototype,
          'popupEnabled',
          void 0,
        ),
        (0, s._)(
          [(0, c.Cb)({ type: Boolean })],
          g.prototype,
          'attributionVisible',
          void 0,
        ),
        (0, s._)(
          [(0, c.Cb)({ type: m.Z })],
          g.prototype,
          'spatialReference',
          void 0,
        ),
        (0, s._)([(0, c.Cb)({ type: String })], g.prototype, 'title', void 0),
        (0, s._)(
          [(0, c.Cb)({ type: String, readOnly: !0, json: { read: !1 } })],
          g.prototype,
          'type',
          void 0,
        ),
        (0, s._)([(0, c.Cb)()], g.prototype, 'url', void 0),
        (0, s._)(
          [(0, c.Cb)({ type: Boolean, nonNullable: !0 })],
          g.prototype,
          'visible',
          void 0,
        ),
        (g = (0, s._)([(0, y.j)('esri.layers.Layer')], g));
      const w = g;
    },
    16050: (e, t, i) => {
      i.d(t, { Z: () => O });
      var s,
        r = i(43697),
        l = i(78223),
        o = i(35454),
        n = i(22974),
        a = i(92604),
        u = i(70586),
        p = i(5600),
        d = i(90578),
        h = i(36030),
        c = i(71715),
        y = i(52011),
        b = i(30556),
        m = i(75215),
        f = i(35671),
        v = i(5499),
        g = i(12571),
        w = i(32984),
        _ = i(9833),
        V = i(66338),
        S = i(59266);
      const x = a.Z.getLogger('esri.renderers.ClassBreaksRenderer'),
        C = 'percent-of-total',
        I = 'field',
        j = new o.X({
          esriNormalizeByLog: 'log',
          esriNormalizeByPercentOfTotal: C,
          esriNormalizeByField: I,
        }),
        z = (0, m.se)(w.Z);
      let E = (s = class extends (0, g.W)(v.Z) {
        constructor(e) {
          super(e),
            (this._compiledValueExpression = {
              valueExpression: null,
              compiledFunction: null,
            }),
            (this.backgroundFillSymbol = null),
            (this.classBreakInfos = null),
            (this.defaultLabel = null),
            (this.defaultSymbol = null),
            (this.field = null),
            (this.isMaxInclusive = !0),
            (this.legendOptions = null),
            (this.normalizationField = null),
            (this.normalizationTotal = null),
            (this.type = 'class-breaks'),
            (this.valueExpression = null),
            (this.valueExpressionTitle = null),
            this._set('classBreakInfos', []);
        }
        readClassBreakInfos(e, t, i) {
          if (!Array.isArray(e)) return;
          let s = t.minValue;
          return e.map((e) => {
            const t = new w.Z();
            return (
              t.read(e, i),
              null == t.minValue && (t.minValue = s),
              null == t.maxValue && (t.maxValue = t.minValue),
              (s = t.maxValue),
              t
            );
          });
        }
        writeClassBreakInfos(e, t, i, s) {
          const r = e.map((e) => e.write({}, s));
          this._areClassBreaksConsecutive() &&
            r.forEach((e) => delete e.classMinValue),
            (t[i] = r);
        }
        castField(e) {
          return null == e
            ? e
            : 'function' == typeof e
            ? (x.error('.field: field must be a string value'), null)
            : (0, m.Zs)(e);
        }
        get minValue() {
          return (
            (this.classBreakInfos &&
              this.classBreakInfos[0] &&
              this.classBreakInfos[0].minValue) ||
            0
          );
        }
        get normalizationType() {
          let e = this._get('normalizationType');
          const t = !!this.normalizationField,
            i = null != this.normalizationTotal;
          return (
            t || i
              ? ((e = (t ? I : i && C) || null),
                t &&
                  i &&
                  x.warn(
                    'warning: both normalizationField and normalizationTotal are set!',
                  ))
              : (e !== I && e !== C) || (e = null),
            e
          );
        }
        set normalizationType(e) {
          this._set('normalizationType', e);
        }
        addClassBreakInfo(e, t, i) {
          let s = null;
          (s =
            'number' == typeof e
              ? new w.Z({ minValue: e, maxValue: t, symbol: (0, l.se)(i) })
              : z((0, n.d9)(e))),
            this.classBreakInfos.push(s),
            1 === this.classBreakInfos.length && this.notifyChange('minValue');
        }
        removeClassBreakInfo(e, t) {
          const i = this.classBreakInfos.length;
          for (let s = 0; s < i; s++) {
            const i = [
              this.classBreakInfos[s].minValue,
              this.classBreakInfos[s].maxValue,
            ];
            if (i[0] === e && i[1] === t) {
              this.classBreakInfos.splice(s, 1);
              break;
            }
          }
        }
        getBreakIndex(e, t) {
          return (
            this.valueExpression &&
              ((0, u.Wi)(t) || (0, u.Wi)(t.arcade)) &&
              x.warn(''),
            this.valueExpression
              ? this._getBreakIndexForExpression(e, t)
              : this._getBreakIndexForField(e)
          );
        }
        async getClassBreakInfo(e, t) {
          let i = t;
          this.valueExpression &&
            ((0, u.Wi)(t) || (0, u.Wi)(t.arcade)) &&
            (i = { ...i, arcade: await (0, S.LC)() });
          const s = this.getBreakIndex(e, i);
          return -1 !== s ? this.classBreakInfos[s] : null;
        }
        getSymbol(e, t) {
          if (this.valueExpression && ((0, u.Wi)(t) || (0, u.Wi)(t.arcade)))
            return void x.error(
              '#getSymbol()',
              'Please use getSymbolAsync if valueExpression is used',
            );
          const i = this.getBreakIndex(e, t);
          return i > -1 ? this.classBreakInfos[i].symbol : this.defaultSymbol;
        }
        async getSymbolAsync(e, t) {
          let i = t;
          if (this.valueExpression && ((0, u.Wi)(t) || (0, u.Wi)(t.arcade))) {
            const e = await (0, S.LC)(),
              { arcadeUtils: t } = e;
            t.hasGeometryOperations(this.valueExpression) &&
              (await t.enableGeometryOperations()),
              (i = { ...i, arcade: e });
          }
          const s = this.getBreakIndex(e, i);
          return s > -1 ? this.classBreakInfos[s].symbol : this.defaultSymbol;
        }
        getSymbols() {
          const e = [];
          return (
            this.classBreakInfos.forEach((t) => {
              t.symbol && e.push(t.symbol);
            }),
            this.defaultSymbol && e.push(this.defaultSymbol),
            e
          );
        }
        getAttributeHash() {
          return (
            this.visualVariables &&
            this.visualVariables.reduce((e, t) => e + t.getAttributeHash(), '')
          );
        }
        getMeshHash() {
          const e = JSON.stringify(this.backgroundFillSymbol),
            t = JSON.stringify(this.defaultSymbol),
            i = `${this.normalizationField}.${this.normalizationType}.${this.normalizationTotal}`;
          return `${e}.${t}.${this.classBreakInfos.reduce(
            (e, t) => e + t.getMeshHash(),
            '',
          )}.${i}.${this.field}.${this.valueExpression}`;
        }
        get arcadeRequired() {
          return (
            this.arcadeRequiredForVisualVariables || !!this.valueExpression
          );
        }
        clone() {
          return new s({
            field: this.field,
            backgroundFillSymbol:
              this.backgroundFillSymbol && this.backgroundFillSymbol.clone(),
            defaultLabel: this.defaultLabel,
            defaultSymbol: this.defaultSymbol && this.defaultSymbol.clone(),
            valueExpression: this.valueExpression,
            valueExpressionTitle: this.valueExpressionTitle,
            classBreakInfos: (0, n.d9)(this.classBreakInfos),
            isMaxInclusive: this.isMaxInclusive,
            normalizationField: this.normalizationField,
            normalizationTotal: this.normalizationTotal,
            normalizationType: this.normalizationType,
            visualVariables: (0, n.d9)(this.visualVariables),
            legendOptions: (0, n.d9)(this.legendOptions),
            authoringInfo: this.authoringInfo && this.authoringInfo.clone(),
          });
        }
        async collectRequiredFields(e, t) {
          const i = [
            this.collectVVRequiredFields(e, t),
            this.collectSymbolFields(e, t),
          ];
          await Promise.all(i);
        }
        async collectSymbolFields(e, t) {
          const i = [
            ...this.getSymbols().map((i) => i.collectRequiredFields(e, t)),
            (0, f.io)(e, t, this.valueExpression),
          ];
          (0, f.AB)(e, t, this.field),
            (0, f.AB)(e, t, this.normalizationField),
            await Promise.all(i);
        }
        _getBreakIndexForExpression(e, t) {
          const {
            viewingMode: i,
            scale: s,
            spatialReference: r,
            arcade: l,
          } = (0, u.Pt)(t, {});
          let o =
            this._compiledValueExpression.valueExpression ===
            this.valueExpression
              ? this._compiledValueExpression.compiledFunction
              : null;
          const n = (0, u.Wg)(l).arcadeUtils;
          if (!o) {
            const e = n.createSyntaxTree(this.valueExpression);
            (o = n.createFunction(e)),
              (this._compiledValueExpression.compiledFunction = o);
          }
          this._compiledValueExpression.valueExpression = this.valueExpression;
          const a = n.executeFunction(
            o,
            n.createExecContext(
              e,
              n.getViewInfo({ viewingMode: i, scale: s, spatialReference: r }),
            ),
          );
          return this._getBreakIndexfromInfos(a);
        }
        _getBreakIndexForField(e) {
          const t = this.field,
            i = e.attributes,
            s = this.normalizationType;
          let r = parseFloat(i[t]);
          if (s) {
            const e = this.normalizationTotal,
              t = parseFloat(i[this.normalizationField]);
            if ('log' === s) r = Math.log(r) * Math.LOG10E;
            else if (s !== C || isNaN(e)) {
              if (s === I && !isNaN(t)) {
                if (isNaN(r) || isNaN(t)) return -1;
                r /= t;
              }
            } else r = (r / e) * 100;
          }
          return this._getBreakIndexfromInfos(r);
        }
        _getBreakIndexfromInfos(e) {
          const t = this.isMaxInclusive;
          if (null != e && 'number' == typeof e && !isNaN(e))
            for (let i = 0; i < this.classBreakInfos.length; i++) {
              const s = [
                this.classBreakInfos[i].minValue,
                this.classBreakInfos[i].maxValue,
              ];
              if (s[0] <= e && (t ? e <= s[1] : e < s[1])) return i;
            }
          return -1;
        }
        _areClassBreaksConsecutive() {
          const e = this.classBreakInfos,
            t = e.length;
          for (let i = 1; i < t; i++)
            if (e[i - 1].maxValue !== e[i].minValue) return !1;
          return !0;
        }
      });
      (0, r._)([(0, p.Cb)(_.K)], E.prototype, 'backgroundFillSymbol', void 0),
        (0, r._)(
          [(0, p.Cb)({ type: [w.Z] })],
          E.prototype,
          'classBreakInfos',
          void 0,
        ),
        (0, r._)(
          [(0, c.r)('classBreakInfos')],
          E.prototype,
          'readClassBreakInfos',
          null,
        ),
        (0, r._)(
          [(0, b.c)('classBreakInfos')],
          E.prototype,
          'writeClassBreakInfos',
          null,
        ),
        (0, r._)(
          [(0, p.Cb)({ type: String, json: { write: !0 } })],
          E.prototype,
          'defaultLabel',
          void 0,
        ),
        (0, r._)([(0, p.Cb)(_.G)], E.prototype, 'defaultSymbol', void 0),
        (0, r._)(
          [(0, p.Cb)({ type: String, json: { write: !0 } })],
          E.prototype,
          'field',
          void 0,
        ),
        (0, r._)([(0, d.p)('field')], E.prototype, 'castField', null),
        (0, r._)(
          [(0, p.Cb)({ type: Boolean })],
          E.prototype,
          'isMaxInclusive',
          void 0,
        ),
        (0, r._)(
          [(0, p.Cb)({ type: V.Z, json: { write: !0 } })],
          E.prototype,
          'legendOptions',
          void 0,
        ),
        (0, r._)(
          [
            (0, p.Cb)({
              type: Number,
              readOnly: !0,
              value: null,
              json: {
                read: !1,
                write: {
                  overridePolicy() {
                    return 0 !== this.classBreakInfos.length &&
                      this._areClassBreaksConsecutive()
                      ? { enabled: !0 }
                      : { enabled: !1 };
                  },
                },
              },
            }),
          ],
          E.prototype,
          'minValue',
          null,
        ),
        (0, r._)(
          [(0, p.Cb)({ type: String, json: { write: !0 } })],
          E.prototype,
          'normalizationField',
          void 0,
        ),
        (0, r._)(
          [
            (0, p.Cb)({
              type: Number,
              cast: (e) => (0, m.q9)(e),
              json: { write: !0 },
            }),
          ],
          E.prototype,
          'normalizationTotal',
          void 0,
        ),
        (0, r._)(
          [
            (0, p.Cb)({
              type: j.apiValues,
              value: null,
              json: { type: j.jsonValues, read: j.read, write: j.write },
            }),
          ],
          E.prototype,
          'normalizationType',
          null,
        ),
        (0, r._)(
          [(0, h.J)({ classBreaks: 'class-breaks' })],
          E.prototype,
          'type',
          void 0,
        ),
        (0, r._)(
          [(0, p.Cb)({ type: String, json: { write: !0 } })],
          E.prototype,
          'valueExpression',
          void 0,
        ),
        (0, r._)(
          [(0, p.Cb)({ type: String, json: { write: !0 } })],
          E.prototype,
          'valueExpressionTitle',
          void 0,
        ),
        (E = s = (0, r._)([(0, y.j)('esri.renderers.ClassBreaksRenderer')], E));
      const O = E;
    },
    5499: (e, t, i) => {
      i.d(t, { Z: () => d });
      var s = i(43697),
        r = i(35454),
        l = i(96674),
        o = i(5600),
        n = (i(67676), i(80442), i(75215), i(52011)),
        a = i(69237);
      const u = new r.X(
        {
          simple: 'simple',
          uniqueValue: 'unique-value',
          classBreaks: 'class-breaks',
          heatmap: 'heatmap',
          dotDensity: 'dot-density',
          dictionary: 'dictionary',
        },
        { ignoreUnknown: !0 },
      );
      let p = class extends l.wq {
        constructor(e) {
          super(e), (this.authoringInfo = null), (this.type = null);
        }
        async getRequiredFields(e) {
          if (!this.collectRequiredFields) return [];
          const t = new Set();
          return await this.collectRequiredFields(t, e), Array.from(t).sort();
        }
        getSymbol(e, t) {}
        async getSymbolAsync(e, t) {}
        getSymbols() {
          return [];
        }
        getAttributeHash() {
          return JSON.stringify(this);
        }
        getMeshHash() {
          return JSON.stringify(this);
        }
      };
      (0, s._)(
        [(0, o.Cb)({ type: a.Z, json: { write: !0 } })],
        p.prototype,
        'authoringInfo',
        void 0,
      ),
        (0, s._)(
          [
            (0, o.Cb)({
              type: u.apiValues,
              readOnly: !0,
              json: {
                type: u.jsonValues,
                read: !1,
                write: { writer: u.write, ignoreOrigin: !0 },
              },
            }),
          ],
          p.prototype,
          'type',
          void 0,
        ),
        (p = (0, s._)([(0, n.j)('esri.renderers.Renderer')], p));
      const d = p;
    },
    30687: (e, t, i) => {
      i.d(t, { Z: () => T });
      var s,
        r = i(43697),
        l = i(78223),
        o = i(20102),
        n = i(22974),
        a = i(92604),
        u = i(70586),
        p = i(78286),
        d = i(5600),
        h = i(90578),
        c = i(36030),
        y = i(71715),
        b = i(52011),
        m = i(30556),
        f = i(22862),
        v = i(75215),
        g = i(35671),
        w = i(65587),
        _ = i(5499),
        V = i(12571),
        S = i(9833),
        x = i(66338),
        C = i(44262),
        I = i(59266),
        j = i(25929),
        z = i(27391),
        E = i(59390);
      const O = a.Z.getLogger('esri.renderers.UniqueValueRenderer'),
        F = (0, v.se)(C.Z);
      let k = (s = class extends (0, V.W)(_.Z) {
        constructor(e) {
          super(e),
            (this._valueInfoMap = {}),
            (this._isDefaultSymbolDerived = !1),
            (this.type = 'unique-value'),
            (this.backgroundFillSymbol = null),
            (this.field = null),
            (this.field2 = null),
            (this.field3 = null),
            (this.valueExpression = null),
            (this.valueExpressionTitle = null),
            (this.legendOptions = null),
            (this.defaultLabel = null),
            (this.fieldDelimiter = null),
            (this.portal = null),
            (this.styleOrigin = null),
            (this.diff = {
              uniqueValueInfos(e, t) {
                if (!e && !t) return;
                if (!e || !t)
                  return { type: 'complete', oldValue: e, newValue: t };
                let i = !1;
                const s = {
                  type: 'collection',
                  added: [],
                  removed: [],
                  changed: [],
                  unchanged: [],
                };
                for (let r = 0; r < t.length; r++) {
                  const l = e.find((e) => e.value === t[r].value);
                  l
                    ? (0, f.Hg)(l, t[r])
                      ? (s.changed.push({
                          type: 'complete',
                          oldValue: l,
                          newValue: t[r],
                        }),
                        (i = !0))
                      : s.unchanged.push({ oldValue: l, newValue: t[r] })
                    : (s.added.push(t[r]), (i = !0));
                }
                for (let r = 0; r < e.length; r++)
                  t.find((t) => t.value === e[r].value) ||
                    (s.removed.push(e[r]), (i = !0));
                return i ? s : void 0;
              },
            }),
            this._set('uniqueValueInfos', []);
        }
        get _cache() {
          return { compiledFunc: null };
        }
        castField(e) {
          return null == e || 'function' == typeof e ? e : (0, v.Zs)(e);
        }
        writeField(e, t, i, s) {
          'string' == typeof e
            ? (t[i] = e)
            : s && s.messages
            ? s.messages.push(
                new o.Z(
                  'property:unsupported',
                  'UniqueValueRenderer.field set to a function cannot be written to JSON',
                ),
              )
            : O.error(
                ".field: cannot write field to JSON since it's not a string value",
              );
        }
        set defaultSymbol(e) {
          (this._isDefaultSymbolDerived = !1), this._set('defaultSymbol', e);
        }
        readPortal(e, t, i) {
          return i.portal || w.Z.getDefault();
        }
        readStyleOrigin(e, t, i) {
          if (t.styleName) return Object.freeze({ styleName: t.styleName });
          if (t.styleUrl) {
            const e = (0, j.f)(t.styleUrl, i);
            return Object.freeze({ styleUrl: e });
          }
        }
        writeStyleOrigin(e, t, i, s) {
          e.styleName
            ? (t.styleName = e.styleName)
            : e.styleUrl && (t.styleUrl = (0, j.t)(e.styleUrl, s));
        }
        set uniqueValueInfos(e) {
          this.styleOrigin
            ? O.error(
                '#uniqueValueInfos=',
                'Cannot modify unique value infos of a UniqueValueRenderer created from a web style',
              )
            : (this._set('uniqueValueInfos', e), this._updateValueInfoMap());
        }
        addUniqueValueInfo(e, t) {
          if (this.styleOrigin)
            return void O.error(
              '#addUniqueValueInfo()',
              'Cannot modify unique value infos of a UniqueValueRenderer created from a web style',
            );
          let i;
          (i =
            'object' == typeof e
              ? F(e)
              : new C.Z({ value: e, symbol: (0, l.se)(t) })),
            this.uniqueValueInfos.push(i),
            (this._valueInfoMap[i.value] = i);
        }
        removeUniqueValueInfo(e) {
          if (this.styleOrigin)
            O.error(
              '#removeUniqueValueInfo()',
              'Cannot modify unique value infos of a UniqueValueRenderer created from a web style',
            );
          else
            for (let t = 0; t < this.uniqueValueInfos.length; t++)
              if (this.uniqueValueInfos[t].value === e + '') {
                delete this._valueInfoMap[e],
                  this.uniqueValueInfos.splice(t, 1);
                break;
              }
        }
        async getUniqueValueInfo(e, t) {
          let i = t;
          return (
            this.valueExpression &&
              ((0, u.Wi)(t) || (0, u.Wi)(t.arcade)) &&
              (i = { ...i, arcade: await (0, I.LC)() }),
            this._getUniqueValueInfo(e, i)
          );
        }
        getSymbol(e, t) {
          if (this.valueExpression && ((0, u.Wi)(t) || (0, u.Wi)(t.arcade)))
            return void O.error(
              '#getSymbol()',
              'Please use getSymbolAsync if valueExpression is used',
            );
          const i = this._getUniqueValueInfo(e, t);
          return (i && i.symbol) || this.defaultSymbol;
        }
        async getSymbolAsync(e, t) {
          let i = t;
          if (this.valueExpression && ((0, u.Wi)(i) || (0, u.Wi)(i.arcade))) {
            const e = await (0, I.LC)(),
              { arcadeUtils: t } = e;
            t.hasGeometryOperations(this.valueExpression) &&
              (await t.enableGeometryOperations()),
              (i = { ...i, arcade: e });
          }
          const s = this._getUniqueValueInfo(e, i);
          return (s && s.symbol) || this.defaultSymbol;
        }
        getSymbols() {
          const e = [];
          for (const t of this.uniqueValueInfos) t.symbol && e.push(t.symbol);
          return this.defaultSymbol && e.push(this.defaultSymbol), e;
        }
        getAttributeHash() {
          return (
            this.visualVariables &&
            this.visualVariables.reduce((e, t) => e + t.getAttributeHash(), '')
          );
        }
        getMeshHash() {
          return `${JSON.stringify(this.backgroundFillSymbol)}.${JSON.stringify(
            this.defaultSymbol,
          )}.${this.uniqueValueInfos.reduce(
            (e, t) => e + t.getMeshHash(),
            '',
          )}.${this.field}.${this.field2}.${this.field3}.${
            this.fieldDelimiter
          }.${this.valueExpression}`;
        }
        clone() {
          const e = new s({
            field: this.field,
            field2: this.field2,
            field3: this.field3,
            defaultLabel: this.defaultLabel,
            defaultSymbol: (0, n.d9)(this.defaultSymbol),
            valueExpression: this.valueExpression,
            valueExpressionTitle: this.valueExpressionTitle,
            fieldDelimiter: this.fieldDelimiter,
            visualVariables: (0, n.d9)(this.visualVariables),
            legendOptions: (0, n.d9)(this.legendOptions),
            authoringInfo: this.authoringInfo && this.authoringInfo.clone(),
            backgroundFillSymbol: (0, n.d9)(this.backgroundFillSymbol),
          });
          this._isDefaultSymbolDerived && (e._isDefaultSymbolDerived = !0),
            e._set('portal', this.portal);
          const t = (0, n.d9)(this.uniqueValueInfos);
          return (
            this.styleOrigin &&
              (e._set(
                'styleOrigin',
                Object.freeze((0, n.d9)(this.styleOrigin)),
              ),
              Object.freeze(t)),
            e._set('uniqueValueInfos', t),
            e._updateValueInfoMap(),
            e
          );
        }
        get arcadeRequired() {
          return (
            this.arcadeRequiredForVisualVariables || !!this.valueExpression
          );
        }
        async collectRequiredFields(e, t) {
          const i = [
            this.collectVVRequiredFields(e, t),
            this.collectSymbolFields(e, t),
          ];
          await Promise.all(i);
        }
        async collectSymbolFields(e, t) {
          const i = [
            ...this.getSymbols().map((i) => i.collectRequiredFields(e, t)),
            (0, g.io)(e, t, this.valueExpression),
          ];
          (0, g.AB)(e, t, this.field),
            (0, g.AB)(e, t, this.field2),
            (0, g.AB)(e, t, this.field3),
            await Promise.all(i);
        }
        populateFromStyle() {
          return (0, z.n2)(this.styleOrigin, { portal: this.portal }).then(
            (e) => {
              const t = [];
              return (
                (this._valueInfoMap = {}),
                e &&
                  e.data &&
                  Array.isArray(e.data.items) &&
                  e.data.items.forEach((i) => {
                    const s = new E.Z({
                      styleUrl: e.styleUrl,
                      styleName: e.styleName,
                      portal: this.portal,
                      name: i.name,
                    });
                    this.defaultSymbol ||
                      i.name !== e.data.defaultItem ||
                      ((this.defaultSymbol = s),
                      (this._isDefaultSymbolDerived = !0));
                    const r = new C.Z({ value: i.name, symbol: s });
                    t.push(r), (this._valueInfoMap[i.name] = r);
                  }),
                this._set('uniqueValueInfos', Object.freeze(t)),
                !this.defaultSymbol &&
                  this.uniqueValueInfos.length &&
                  ((this.defaultSymbol = this.uniqueValueInfos[0].symbol),
                  (this._isDefaultSymbolDerived = !0)),
                this
              );
            },
          );
        }
        _updateValueInfoMap() {
          (this._valueInfoMap = {}),
            this.uniqueValueInfos.forEach(
              (e) => (this._valueInfoMap[e.value + ''] = e),
            );
        }
        _getUniqueValueInfo(e, t) {
          return this.valueExpression
            ? this._getUnqiueValueInfoForExpression(e, t)
            : this._getUnqiueValueInfoForFields(e);
        }
        _getUnqiueValueInfoForExpression(e, t) {
          const {
            viewingMode: i,
            scale: s,
            spatialReference: r,
            arcade: l,
          } = (0, u.Pt)(t, {});
          let o = this._cache.compiledFunc;
          const n = (0, u.Wg)(l).arcadeUtils;
          if (!o) {
            const e = n.createSyntaxTree(this.valueExpression);
            (o = n.createFunction(e)), (this._cache.compiledFunc = o);
          }
          const a = n.executeFunction(
            o,
            n.createExecContext(
              e,
              n.getViewInfo({ viewingMode: i, scale: s, spatialReference: r }),
            ),
          );
          return this._valueInfoMap[a + ''];
        }
        _getUnqiueValueInfoForFields(e) {
          const t = this.field,
            i = e.attributes;
          let s;
          if ('function' != typeof t && this.field2) {
            const e = this.field2,
              r = this.field3,
              l = [];
            t && l.push(i[t]),
              e && l.push(i[e]),
              r && l.push(i[r]),
              (s = l.join(this.fieldDelimiter || ''));
          } else 'function' == typeof t ? (s = t(e)) : t && (s = i[t]);
          return this._valueInfoMap[s + ''];
        }
        static fromPortalStyle(e, t) {
          const i = new s(t && t.properties);
          i._set('styleOrigin', Object.freeze({ styleName: e })),
            i._set('portal', (t && t.portal) || w.Z.getDefault());
          const r = i.populateFromStyle();
          return (
            r.catch((t) => {
              O.error(
                `#fromPortalStyle('${e}'[, ...])`,
                'Failed to create unique value renderer from style name',
                t,
              );
            }),
            r
          );
        }
        static fromStyleUrl(e, t) {
          const i = new s(t && t.properties);
          i._set('styleOrigin', Object.freeze({ styleUrl: e }));
          const r = i.populateFromStyle();
          return (
            r.catch((t) => {
              O.error(
                `#fromStyleUrl('${e}'[, ...])`,
                'Failed to create unique value renderer from style URL',
                t,
              );
            }),
            r
          );
        }
      });
      (0, r._)([(0, d.Cb)({ readOnly: !0 })], k.prototype, '_cache', null),
        (0, r._)(
          [(0, c.J)({ uniqueValue: 'unique-value' })],
          k.prototype,
          'type',
          void 0,
        ),
        (0, r._)([(0, d.Cb)(S.K)], k.prototype, 'backgroundFillSymbol', void 0),
        (0, r._)(
          [
            (0, d.Cb)({
              json: {
                type: String,
                read: { source: 'field1' },
                write: { target: 'field1' },
              },
            }),
          ],
          k.prototype,
          'field',
          void 0,
        ),
        (0, r._)([(0, h.p)('field')], k.prototype, 'castField', null),
        (0, r._)([(0, m.c)('field')], k.prototype, 'writeField', null),
        (0, r._)(
          [(0, d.Cb)({ type: String, json: { write: !0 } })],
          k.prototype,
          'field2',
          void 0,
        ),
        (0, r._)(
          [(0, d.Cb)({ type: String, json: { write: !0 } })],
          k.prototype,
          'field3',
          void 0,
        ),
        (0, r._)(
          [(0, d.Cb)({ type: String, json: { write: !0 } })],
          k.prototype,
          'valueExpression',
          void 0,
        ),
        (0, r._)(
          [(0, d.Cb)({ type: String, json: { write: !0 } })],
          k.prototype,
          'valueExpressionTitle',
          void 0,
        ),
        (0, r._)(
          [(0, d.Cb)({ type: x.Z, json: { write: !0 } })],
          k.prototype,
          'legendOptions',
          void 0,
        ),
        (0, r._)(
          [(0, d.Cb)({ type: String, json: { write: !0 } })],
          k.prototype,
          'defaultLabel',
          void 0,
        ),
        (0, r._)(
          [
            (0, d.Cb)(
              (0, p.RH)(
                { ...S.G },
                {
                  json: {
                    write: {
                      overridePolicy() {
                        return { enabled: !this._isDefaultSymbolDerived };
                      },
                    },
                    origins: {
                      'web-scene': {
                        write: {
                          overridePolicy() {
                            return { enabled: !this._isDefaultSymbolDerived };
                          },
                        },
                      },
                    },
                  },
                },
              ),
            ),
          ],
          k.prototype,
          'defaultSymbol',
          null,
        ),
        (0, r._)(
          [(0, d.Cb)({ type: String, json: { write: !0 } })],
          k.prototype,
          'fieldDelimiter',
          void 0,
        ),
        (0, r._)(
          [(0, d.Cb)({ type: w.Z, readOnly: !0 })],
          k.prototype,
          'portal',
          void 0,
        ),
        (0, r._)(
          [(0, y.r)('portal', ['styleName'])],
          k.prototype,
          'readPortal',
          null,
        ),
        (0, r._)(
          [
            (0, d.Cb)({
              readOnly: !0,
              json: {
                write: { enabled: !1, overridePolicy: () => ({ enabled: !0 }) },
              },
            }),
          ],
          k.prototype,
          'styleOrigin',
          void 0,
        ),
        (0, r._)(
          [(0, y.r)('styleOrigin', ['styleName', 'styleUrl'])],
          k.prototype,
          'readStyleOrigin',
          null,
        ),
        (0, r._)(
          [
            (0, m.c)('styleOrigin', {
              styleName: { type: String },
              styleUrl: { type: String },
            }),
          ],
          k.prototype,
          'writeStyleOrigin',
          null,
        ),
        (0, r._)(
          [
            (0, d.Cb)({
              type: [C.Z],
              json: {
                write: {
                  overridePolicy() {
                    return this.styleOrigin ? { enabled: !1 } : { enabled: !0 };
                  },
                },
              },
            }),
          ],
          k.prototype,
          'uniqueValueInfos',
          null,
        ),
        (k = s = (0, r._)([(0, b.j)('esri.renderers.UniqueValueRenderer')], k));
      const T = k;
    },
    12571: (e, t, i) => {
      i.d(t, { W: () => q });
      var s,
        r = i(43697),
        l = i(5600),
        o = (i(67676), i(80442), i(75215)),
        n = i(71715),
        a = i(52011),
        u = i(30556),
        p = i(35671),
        d = i(77997),
        h = i(21849);
      let c = (s = class extends d.Z {
        constructor(e) {
          super(e), (this.type = 'color'), (this.normalizationField = null);
        }
        get cache() {
          return {
            ipData: this._interpolateData(),
            hasExpression: !!this.valueExpression,
            compiledFunc: null,
          };
        }
        set stops(e) {
          e &&
            Array.isArray(e) &&
            (e = e.filter((e) => !!e)).sort((e, t) => e.value - t.value),
            this._set('stops', e);
        }
        clone() {
          return new s({
            field: this.field,
            normalizationField: this.normalizationField,
            valueExpression: this.valueExpression,
            valueExpressionTitle: this.valueExpressionTitle,
            stops: this.stops && this.stops.map((e) => e.clone()),
            legendOptions: this.legendOptions && this.legendOptions.clone(),
          });
        }
        getAttributeHash() {
          return `${super.getAttributeHash()}-${this.normalizationField}`;
        }
        _interpolateData() {
          return this.stops && this.stops.map((e) => e.value || 0);
        }
      });
      (0, r._)([(0, l.Cb)({ readOnly: !0 })], c.prototype, 'cache', null),
        (0, r._)(
          [(0, l.Cb)({ type: ['color'], json: { type: ['colorInfo'] } })],
          c.prototype,
          'type',
          void 0,
        ),
        (0, r._)(
          [(0, l.Cb)({ type: String, json: { write: !0 } })],
          c.prototype,
          'normalizationField',
          void 0,
        ),
        (0, r._)(
          [(0, l.Cb)({ type: [h.Z], json: { write: !0 } })],
          c.prototype,
          'stops',
          null,
        ),
        (c = s =
          (0, r._)(
            [(0, a.j)('esri.renderers.visualVariables.ColorVariable')],
            c,
          ));
      const y = c;
      var b,
        m = i(96674),
        f = i(65242);
      let v = (b = class extends m.wq {
        constructor(e) {
          super(e),
            (this.label = null),
            (this.opacity = null),
            (this.value = null);
        }
        readOpacity(e, t) {
          return (0, f.b)(t.transparency);
        }
        writeOpacity(e, t, i) {
          t[i] = (0, f.a)(e);
        }
        clone() {
          return new b({
            label: this.label,
            opacity: this.opacity,
            value: this.value,
          });
        }
      });
      (0, r._)(
        [(0, l.Cb)({ type: String, json: { write: !0 } })],
        v.prototype,
        'label',
        void 0,
      ),
        (0, r._)(
          [
            (0, l.Cb)({
              type: Number,
              json: { type: o.z8, write: { target: 'transparency' } },
            }),
          ],
          v.prototype,
          'opacity',
          void 0,
        ),
        (0, r._)(
          [(0, n.r)('opacity', ['transparency'])],
          v.prototype,
          'readOpacity',
          null,
        ),
        (0, r._)([(0, u.c)('opacity')], v.prototype, 'writeOpacity', null),
        (0, r._)(
          [(0, l.Cb)({ type: Number, json: { write: !0 } })],
          v.prototype,
          'value',
          void 0,
        ),
        (v = b =
          (0, r._)(
            [(0, a.j)('esri.renderers.visualVariables.support.OpacityStop')],
            v,
          ));
      const g = v;
      var w;
      let _ = (w = class extends d.Z {
        constructor(e) {
          super(e), (this.type = 'opacity'), (this.normalizationField = null);
        }
        get cache() {
          return {
            ipData: this._interpolateData(),
            hasExpression: !!this.valueExpression,
            compiledFunc: null,
          };
        }
        set stops(e) {
          e &&
            Array.isArray(e) &&
            (e = e.filter((e) => !!e)).sort((e, t) => e.value - t.value),
            this._set('stops', e);
        }
        clone() {
          return new w({
            field: this.field,
            normalizationField: this.normalizationField,
            valueExpression: this.valueExpression,
            valueExpressionTitle: this.valueExpressionTitle,
            stops: this.stops && this.stops.map((e) => e.clone()),
            legendOptions: this.legendOptions && this.legendOptions.clone(),
          });
        }
        getAttributeHash() {
          return `${super.getAttributeHash()}-${this.normalizationField}`;
        }
        _interpolateData() {
          return this.stops && this.stops.map((e) => e.value || 0);
        }
      });
      (0, r._)([(0, l.Cb)({ readOnly: !0 })], _.prototype, 'cache', null),
        (0, r._)(
          [
            (0, l.Cb)({
              type: ['opacity'],
              json: { type: ['transparencyInfo'] },
            }),
          ],
          _.prototype,
          'type',
          void 0,
        ),
        (0, r._)(
          [(0, l.Cb)({ type: String, json: { write: !0 } })],
          _.prototype,
          'normalizationField',
          void 0,
        ),
        (0, r._)(
          [(0, l.Cb)({ type: [g], json: { write: !0 } })],
          _.prototype,
          'stops',
          null,
        ),
        (_ = w =
          (0, r._)(
            [(0, a.j)('esri.renderers.visualVariables.OpacityVariable')],
            _,
          ));
      const V = _;
      var S = i(89513),
        x = i(27922),
        C = i(15923),
        I = i(35454),
        j = i(92604),
        z = i(20941);
      const E = j.Z.getLogger(
          'esri.renderers.visualVariables.VisualVariableFactory',
        ),
        O = { color: y, size: x.Z, opacity: V, rotation: S.Z },
        F = new I.X({
          colorInfo: 'color',
          transparencyInfo: 'opacity',
          rotationInfo: 'rotation',
          sizeInfo: 'size',
        }),
        k = /^\[([^\]]+)\]$/i;
      let T = class extends C.Z {
        constructor() {
          super(...arguments),
            (this.colorVariables = null),
            (this.opacityVariables = null),
            (this.rotationVariables = null),
            (this.sizeVariables = null);
        }
        set visualVariables(e) {
          if (
            (this._resetVariables(),
            (e = e && e.filter((e) => !!e)) && e.length)
          ) {
            for (const t of e)
              switch (t.type) {
                case 'color':
                  this.colorVariables.push(t);
                  break;
                case 'opacity':
                  this.opacityVariables.push(t);
                  break;
                case 'rotation':
                  this.rotationVariables.push(t);
                  break;
                case 'size':
                  this.sizeVariables.push(t);
              }
            this.sizeVariables.length &&
              this.sizeVariables.some((e) => !!e.target) &&
              e.sort((e, t) => {
                let i = null;
                return (i = e.target === t.target ? 0 : e.target ? 1 : -1), i;
              });
            for (let t = 0; t < e.length; t++) e[t].index = t;
            this._set('visualVariables', e);
          } else this._set('visualVariables', e);
        }
        readVariables(e, t, i) {
          const { rotationExpression: s, rotationType: r } = t,
            l = s && s.match(k),
            o = l && l[1];
          if (
            (o &&
              (e || (e = []),
              e.push({ type: 'rotationInfo', rotationType: r, field: o })),
            e)
          )
            return e.map((e) => {
              const t = F.read(e.type),
                s = O[t];
              s ||
                (E.warn(`Unknown variable type: ${t}`),
                i &&
                  i.messages &&
                  i.messages.push(
                    new z.Z(
                      'visual-variable:unsupported',
                      `visualVariable of type '${t}' is not supported`,
                      { definition: e, context: i },
                    ),
                  ));
              const r = new s();
              return r.read(e, i), r;
            });
        }
        writeVariables(e, t) {
          const i = [];
          for (const s of e) {
            const e = s.toJSON(t);
            e && i.push(e);
          }
          return i;
        }
        _resetVariables() {
          (this.colorVariables = []),
            (this.opacityVariables = []),
            (this.rotationVariables = []),
            (this.sizeVariables = []);
        }
      };
      (0, r._)([(0, l.Cb)()], T.prototype, 'visualVariables', null),
        (T = (0, r._)(
          [(0, a.j)('esri.renderers.visualVariables.VisualVariableFactory')],
          T,
        ));
      const M = T,
        Z = {
          base: d.Z,
          key: 'type',
          typeMap: { opacity: V, color: y, rotation: S.Z, size: x.Z },
        },
        q = (e) => {
          let t = class extends e {
            constructor() {
              super(...arguments), (this._vvFactory = new M());
            }
            set visualVariables(e) {
              (this._vvFactory.visualVariables = e),
                this._set('visualVariables', this._vvFactory.visualVariables);
            }
            readVisualVariables(e, t, i) {
              return this._vvFactory.readVariables(e, t, i);
            }
            writeVisualVariables(e, t, i, s) {
              t[i] = this._vvFactory.writeVariables(e, s);
            }
            get arcadeRequiredForVisualVariables() {
              if (!this.visualVariables) return !1;
              for (const e of this.visualVariables)
                if (e.arcadeRequired) return !0;
              return !1;
            }
            hasVisualVariables(e, t) {
              return e
                ? this.getVisualVariablesForType(e, t).length > 0
                : this.getVisualVariablesForType('size', t).length > 0 ||
                    this.getVisualVariablesForType('color', t).length > 0 ||
                    this.getVisualVariablesForType('opacity', t).length > 0 ||
                    this.getVisualVariablesForType('rotation', t).length > 0;
            }
            getVisualVariablesForType(e, t) {
              const i = this.visualVariables;
              return i
                ? i.filter(
                    (i) =>
                      i.type === e &&
                      ('string' == typeof t
                        ? i.target === t
                        : !1 !== t || !i.target),
                  )
                : [];
            }
            async collectVVRequiredFields(e, t) {
              let i = [];
              this.visualVariables && (i = i.concat(this.visualVariables));
              for (const s of i)
                s &&
                  (s.field && (0, p.AB)(e, t, s.field),
                  s.normalizationField && (0, p.AB)(e, t, s.normalizationField),
                  s.valueExpression &&
                    (await (0, p.io)(e, t, s.valueExpression)));
            }
          };
          return (
            (0, r._)(
              [(0, l.Cb)({ types: [Z], value: null, json: { write: !0 } })],
              t.prototype,
              'visualVariables',
              null,
            ),
            (0, r._)(
              [
                (0, n.r)('visualVariables', [
                  'visualVariables',
                  'rotationType',
                  'rotationExpression',
                ]),
              ],
              t.prototype,
              'readVisualVariables',
              null,
            ),
            (0, r._)(
              [(0, u.c)('visualVariables')],
              t.prototype,
              'writeVisualVariables',
              null,
            ),
            (t = (0, r._)(
              [(0, a.j)('esri.renderers.mixins.VisualVariablesMixin')],
              t,
            )),
            t
          );
        };
    },
    69237: (e, t, i) => {
      i.d(t, { Z: () => M });
      var s,
        r = i(43697),
        l = i(35454),
        o = i(96674),
        n = i(22974),
        a = i(5600),
        u = i(75215),
        p = i(71715),
        d = i(52011);
      i(67676), i(80442);
      let h = (s = class extends o.wq {
        constructor(e) {
          super(e), (this.minValue = 0), (this.maxValue = 0);
        }
        clone() {
          return new s({ minValue: this.minValue, maxValue: this.maxValue });
        }
      });
      (0, r._)(
        [(0, a.Cb)({ type: Number, json: { write: !0 } })],
        h.prototype,
        'minValue',
        void 0,
      ),
        (0, r._)(
          [(0, a.Cb)({ type: Number, json: { write: !0 } })],
          h.prototype,
          'maxValue',
          void 0,
        ),
        (h = s =
          (0, r._)(
            [(0, d.j)('esri.renderer.support.AuthoringInfoClassBreakInfo')],
            h,
          ));
      const c = h;
      var y;
      let b = (y = class extends o.wq {
        constructor(e) {
          super(e),
            (this.field = ''),
            (this.normalizationField = ''),
            (this.label = ''),
            (this.classBreakInfos = []);
        }
        clone() {
          return new y({
            field: this.field,
            normalizationField: this.normalizationField,
            label: this.label,
            classBreakInfos: (0, n.d9)(this.classBreakInfos),
          });
        }
      });
      (0, r._)(
        [(0, a.Cb)({ type: String, json: { write: !0 } })],
        b.prototype,
        'field',
        void 0,
      ),
        (0, r._)(
          [(0, a.Cb)({ type: String, json: { write: !0 } })],
          b.prototype,
          'normalizationField',
          void 0,
        ),
        (0, r._)(
          [(0, a.Cb)({ type: String, json: { write: !0 } })],
          b.prototype,
          'label',
          void 0,
        ),
        (0, r._)(
          [(0, a.Cb)({ type: [c], json: { write: !0 } })],
          b.prototype,
          'classBreakInfos',
          void 0,
        ),
        (b = y =
          (0, r._)(
            [(0, d.j)('esri.renderers.support.AuthoringInfoFieldInfo')],
            b,
          ));
      const m = b;
      var f,
        v = i(90578);
      const g = new l.X({
          percentTotal: 'percent-of-total',
          ratio: 'ratio',
          percent: 'percent',
        }),
        w = new l.X({
          sizeInfo: 'size',
          colorInfo: 'color',
          transparencyInfo: 'opacity',
          rotationInfo: 'rotation',
        }),
        _ = {
          key: (e) => ('number' == typeof e ? 'number' : 'string'),
          typeMap: { number: Number, string: String },
          base: null,
        },
        V = ['high-to-low', 'above-and-below', 'centered-on', 'extremes'],
        S = [
          ...new Set([
            'high-to-low',
            'above-and-below',
            'centered-on',
            'extremes',
            '90-10',
            'above',
            'below',
            'high-to-low',
            'above-and-below',
            '90-10',
            'above',
            'below',
          ]),
        ],
        x = ['seconds', 'minutes', 'hours', 'days', 'months', 'years'];
      let C = (f = class extends o.wq {
        constructor(e) {
          super(e),
            (this.endTime = null),
            (this.field = null),
            (this.maxSliderValue = null),
            (this.minSliderValue = null),
            (this.startTime = null),
            (this.type = null),
            (this.units = null);
        }
        castEndTime(e) {
          return 'string' == typeof e || 'number' == typeof e ? e : null;
        }
        castStartTime(e) {
          return 'string' == typeof e || 'number' == typeof e ? e : null;
        }
        get style() {
          return 'color' === this.type ? this._get('style') : null;
        }
        set style(e) {
          this._set('style', e);
        }
        get theme() {
          return 'color' === this.type || 'size' === this.type
            ? this._get('theme') || 'high-to-low'
            : null;
        }
        set theme(e) {
          this._set('theme', e);
        }
        clone() {
          return new f({
            endTime: this.endTime,
            field: this.field,
            maxSliderValue: this.maxSliderValue,
            minSliderValue: this.minSliderValue,
            startTime: this.startTime,
            style: this.style,
            theme: this.theme,
            type: this.type,
            units: this.units,
          });
        }
      });
      (0, r._)(
        [(0, a.Cb)({ types: _, json: { write: !0 } })],
        C.prototype,
        'endTime',
        void 0,
      ),
        (0, r._)([(0, v.p)('endTime')], C.prototype, 'castEndTime', null),
        (0, r._)(
          [(0, a.Cb)({ type: String, json: { write: !0 } })],
          C.prototype,
          'field',
          void 0,
        ),
        (0, r._)(
          [(0, a.Cb)({ type: Number, json: { write: !0 } })],
          C.prototype,
          'maxSliderValue',
          void 0,
        ),
        (0, r._)(
          [(0, a.Cb)({ type: Number, json: { write: !0 } })],
          C.prototype,
          'minSliderValue',
          void 0,
        ),
        (0, r._)(
          [(0, a.Cb)({ types: _, json: { write: !0 } })],
          C.prototype,
          'startTime',
          void 0,
        ),
        (0, r._)([(0, v.p)('startTime')], C.prototype, 'castStartTime', null),
        (0, r._)(
          [
            (0, a.Cb)({
              type: g.apiValues,
              value: null,
              json: { type: g.jsonValues, read: g.read, write: g.write },
            }),
          ],
          C.prototype,
          'style',
          null,
        ),
        (0, r._)(
          [
            (0, a.Cb)({
              type: S,
              value: null,
              json: {
                type: S,
                origins: {
                  'web-scene': {
                    type: V,
                    write: {
                      writer: (e, t) => {
                        V.indexOf(e) > -1 && (t.theme = e);
                      },
                    },
                  },
                },
                write: !0,
              },
            }),
          ],
          C.prototype,
          'theme',
          null,
        ),
        (0, r._)(
          [
            (0, a.Cb)({
              type: w.apiValues,
              json: { type: w.jsonValues, read: w.read, write: w.write },
            }),
          ],
          C.prototype,
          'type',
          void 0,
        ),
        (0, r._)(
          [(0, a.Cb)({ type: x, json: { type: x, write: !0 } })],
          C.prototype,
          'units',
          void 0,
        ),
        (C = f =
          (0, r._)(
            [(0, d.j)('esri.renderers.support.AuthoringInfoVisualVariable')],
            C,
          ));
      const I = C;
      var j,
        z = i(94593);
      const E = new l.X({
          esriClassifyDefinedInterval: 'defined-interval',
          esriClassifyEqualInterval: 'equal-interval',
          esriClassifyManual: 'manual',
          esriClassifyNaturalBreaks: 'natural-breaks',
          esriClassifyQuantile: 'quantile',
          esriClassifyStandardDeviation: 'standard-deviation',
        }),
        O = new l.X({
          classedSize: 'class-breaks-size',
          classedColor: 'class-breaks-color',
          univariateColorSize: 'univariate-color-size',
          relationship: 'relationship',
          predominance: 'predominance',
          dotDensity: 'dot-density',
          flow: 'flow',
        }),
        F = new l.X({
          classedSize: 'class-breaks-size',
          classedColor: 'class-breaks-color',
          univariateColorSize: 'univariate-color-size',
          relationship: 'relationship',
          predominance: 'predominance',
          dotDensity: 'dot-density',
        }),
        k = [
          'inches',
          'feet',
          'yards',
          'miles',
          'nautical-miles',
          'millimeters',
          'centimeters',
          'decimeters',
          'meters',
          'kilometers',
          'decimal-degrees',
        ];
      let T = (j = class extends o.wq {
        constructor(e) {
          super(e),
            (this.colorRamp = null),
            (this.lengthUnit = null),
            (this.maxSliderValue = null),
            (this.minSliderValue = null),
            (this.visualVariables = null);
        }
        get classificationMethod() {
          const e = this._get('classificationMethod'),
            t = this.type;
          return t && 'relationship' !== t
            ? 'class-breaks-size' === t || 'class-breaks-color' === t
              ? e || 'manual'
              : null
            : e;
        }
        set classificationMethod(e) {
          this._set('classificationMethod', e);
        }
        readColorRamp(e) {
          if (e) return (0, z.i)(e);
        }
        get fields() {
          return this.type && 'predominance' !== this.type
            ? null
            : this._get('fields');
        }
        set fields(e) {
          this._set('fields', e);
        }
        get field1() {
          return this.type && 'relationship' !== this.type
            ? null
            : this._get('field1');
        }
        set field1(e) {
          this._set('field1', e);
        }
        get field2() {
          return this.type && 'relationship' !== this.type
            ? null
            : this._get('field2');
        }
        set field2(e) {
          this._set('field2', e);
        }
        get flowTheme() {
          return 'flow' === this.type ? this._get('flowTheme') : null;
        }
        set flowTheme(e) {
          this._set('flowTheme', e);
        }
        get focus() {
          return this.type && 'relationship' !== this.type
            ? null
            : this._get('focus');
        }
        set focus(e) {
          this._set('focus', e);
        }
        get numClasses() {
          return this.type && 'relationship' !== this.type
            ? null
            : this._get('numClasses');
        }
        set numClasses(e) {
          this._set('numClasses', e);
        }
        get statistics() {
          return 'univariate-color-size' === this.type &&
            'above-and-below' === this.univariateTheme
            ? this._get('statistics')
            : null;
        }
        set statistics(e) {
          this._set('statistics', e);
        }
        get standardDeviationInterval() {
          const e = this.type;
          return (e &&
            'relationship' !== e &&
            'class-breaks-size' !== e &&
            'class-breaks-color' !== e) ||
            (this.classificationMethod &&
              'standard-deviation' !== this.classificationMethod)
            ? null
            : this._get('standardDeviationInterval');
        }
        set standardDeviationInterval(e) {
          this._set('standardDeviationInterval', e);
        }
        get type() {
          return this._get('type');
        }
        set type(e) {
          let t = e;
          'classed-size' === e
            ? (t = 'class-breaks-size')
            : 'classed-color' === e && (t = 'class-breaks-color'),
            this._set('type', t);
        }
        get univariateSymbolStyle() {
          return 'univariate-color-size' === this.type &&
            'above-and-below' === this.univariateTheme
            ? this._get('univariateSymbolStyle')
            : null;
        }
        set univariateSymbolStyle(e) {
          this._set('univariateSymbolStyle', e);
        }
        get univariateTheme() {
          return 'univariate-color-size' === this.type
            ? this._get('univariateTheme')
            : null;
        }
        set univariateTheme(e) {
          this._set('univariateTheme', e);
        }
        clone() {
          return new j({
            classificationMethod: this.classificationMethod,
            colorRamp: (0, n.d9)(this.colorRamp),
            fields: this.fields && this.fields.slice(0),
            field1: (0, n.d9)(this.field1),
            field2: (0, n.d9)(this.field2),
            focus: this.focus,
            numClasses: this.numClasses,
            maxSliderValue: this.maxSliderValue,
            minSliderValue: this.minSliderValue,
            lengthUnit: this.lengthUnit,
            statistics: this.statistics,
            standardDeviationInterval: this.standardDeviationInterval,
            type: this.type,
            visualVariables:
              this.visualVariables &&
              this.visualVariables.map((e) => e.clone()),
            univariateSymbolStyle: this.univariateSymbolStyle,
            univariateTheme: this.univariateTheme,
            flowTheme: this.flowTheme,
          });
        }
      });
      (0, r._)(
        [
          (0, a.Cb)({
            type: E.apiValues,
            value: null,
            json: {
              type: E.jsonValues,
              read: E.read,
              write: E.write,
              origins: {
                'web-document': {
                  default: 'manual',
                  type: E.jsonValues,
                  read: E.read,
                  write: E.write,
                },
              },
            },
          }),
        ],
        T.prototype,
        'classificationMethod',
        null,
      ),
        (0, r._)(
          [(0, a.Cb)({ types: z.V, json: { write: !0 } })],
          T.prototype,
          'colorRamp',
          void 0,
        ),
        (0, r._)([(0, p.r)('colorRamp')], T.prototype, 'readColorRamp', null),
        (0, r._)(
          [(0, a.Cb)({ type: [String], value: null, json: { write: !0 } })],
          T.prototype,
          'fields',
          null,
        ),
        (0, r._)(
          [(0, a.Cb)({ type: m, value: null, json: { write: !0 } })],
          T.prototype,
          'field1',
          null,
        ),
        (0, r._)(
          [(0, a.Cb)({ type: m, value: null, json: { write: !0 } })],
          T.prototype,
          'field2',
          null,
        ),
        (0, r._)(
          [
            (0, a.Cb)({
              type: ['flow-line', 'wave-front'],
              value: null,
              json: { write: !0, origins: { 'web-scene': { write: !1 } } },
            }),
          ],
          T.prototype,
          'flowTheme',
          null,
        ),
        (0, r._)(
          [
            (0, a.Cb)({
              type: ['HH', 'HL', 'LH', 'LL'],
              value: null,
              json: { write: !0 },
            }),
          ],
          T.prototype,
          'focus',
          null,
        ),
        (0, r._)(
          [
            (0, a.Cb)({
              type: Number,
              value: null,
              json: { type: u.z8, write: !0 },
            }),
          ],
          T.prototype,
          'numClasses',
          null,
        ),
        (0, r._)(
          [
            (0, a.Cb)({
              type: k,
              json: {
                type: k,
                read: !1,
                write: !1,
                origins: { 'web-scene': { read: !0, write: !0 } },
              },
            }),
          ],
          T.prototype,
          'lengthUnit',
          void 0,
        ),
        (0, r._)(
          [
            (0, a.Cb)({
              type: Number,
              json: {
                write: !0,
                origins: { 'web-scene': { write: !1, read: !1 } },
              },
            }),
          ],
          T.prototype,
          'maxSliderValue',
          void 0,
        ),
        (0, r._)(
          [
            (0, a.Cb)({
              type: Number,
              json: {
                write: !0,
                origins: { 'web-scene': { write: !1, read: !1 } },
              },
            }),
          ],
          T.prototype,
          'minSliderValue',
          void 0,
        ),
        (0, r._)(
          [
            (0, a.Cb)({
              type: Object,
              value: null,
              json: {
                write: !0,
                origins: { 'web-scene': { write: !1, read: !1 } },
              },
            }),
          ],
          T.prototype,
          'statistics',
          null,
        ),
        (0, r._)(
          [
            (0, a.Cb)({
              type: [0.25, 0.33, 0.5, 1],
              value: null,
              json: { type: [0.25, 0.33, 0.5, 1], write: !0 },
            }),
          ],
          T.prototype,
          'standardDeviationInterval',
          null,
        ),
        (0, r._)(
          [
            (0, a.Cb)({
              type: O.apiValues,
              value: null,
              json: {
                type: O.jsonValues,
                read: O.read,
                write: O.write,
                origins: {
                  'web-scene': {
                    type: F.jsonValues,
                    write: {
                      writer: F.write,
                      overridePolicy: (e) => ({ enabled: 'flow' !== e }),
                    },
                  },
                },
              },
            }),
          ],
          T.prototype,
          'type',
          null,
        ),
        (0, r._)(
          [(0, a.Cb)({ type: [I], json: { write: !0 } })],
          T.prototype,
          'visualVariables',
          void 0,
        ),
        (0, r._)(
          [
            (0, a.Cb)({
              type: [
                'caret',
                'circle-caret',
                'arrow',
                'circle-arrow',
                'plus-minus',
                'circle-plus-minus',
                'square',
                'circle',
                'triangle',
                'happy-sad',
                'thumb',
                'custom',
              ],
              value: null,
              json: { write: !0, origins: { 'web-scene': { write: !1 } } },
            }),
          ],
          T.prototype,
          'univariateSymbolStyle',
          null,
        ),
        (0, r._)(
          [
            (0, a.Cb)({
              type: [
                'high-to-low',
                'above-and-below',
                'above',
                'below',
                '90-10',
              ],
              value: null,
              json: { write: !0, origins: { 'web-scene': { write: !1 } } },
            }),
          ],
          T.prototype,
          'univariateTheme',
          null,
        ),
        (T = j =
          (0, r._)([(0, d.j)('esri.renderers.support.AuthoringInfo')], T));
      const M = T;
    },
    32984: (e, t, i) => {
      i.d(t, { Z: () => p });
      var s,
        r = i(43697),
        l = i(96674),
        o = i(5600),
        n = (i(67676), i(80442), i(75215), i(52011)),
        a = i(9833);
      let u = (s = class extends l.wq {
        constructor(e) {
          super(e),
            (this.description = null),
            (this.label = null),
            (this.minValue = null),
            (this.maxValue = 0),
            (this.symbol = null);
        }
        clone() {
          return new s({
            description: this.description,
            label: this.label,
            minValue: this.minValue,
            maxValue: this.maxValue,
            symbol: this.symbol ? this.symbol.clone() : null,
          });
        }
        getMeshHash() {
          const e = JSON.stringify(this.symbol);
          return `${this.minValue}.${this.maxValue}.${e}`;
        }
      });
      (0, r._)(
        [(0, o.Cb)({ type: String, json: { write: !0 } })],
        u.prototype,
        'description',
        void 0,
      ),
        (0, r._)(
          [(0, o.Cb)({ type: String, json: { write: !0 } })],
          u.prototype,
          'label',
          void 0,
        ),
        (0, r._)(
          [
            (0, o.Cb)({
              type: Number,
              json: {
                read: { source: 'classMinValue' },
                write: { target: 'classMinValue' },
              },
            }),
          ],
          u.prototype,
          'minValue',
          void 0,
        ),
        (0, r._)(
          [
            (0, o.Cb)({
              type: Number,
              json: {
                read: { source: 'classMaxValue' },
                write: { target: 'classMaxValue' },
              },
            }),
          ],
          u.prototype,
          'maxValue',
          void 0,
        ),
        (0, r._)([(0, o.Cb)(a.G)], u.prototype, 'symbol', void 0),
        (u = s =
          (0, r._)([(0, n.j)('esri.renderers.support.ClassBreakInfo')], u));
      const p = u;
    },
    66338: (e, t, i) => {
      i.d(t, { Z: () => u });
      var s,
        r = i(43697),
        l = i(96674),
        o = i(5600),
        n = (i(67676), i(80442), i(75215), i(52011));
      let a = (s = class extends l.wq {
        constructor() {
          super(...arguments), (this.title = null);
        }
        clone() {
          return new s({ title: this.title });
        }
      });
      (0, r._)(
        [(0, o.Cb)({ type: String, json: { write: !0 } })],
        a.prototype,
        'title',
        void 0,
      ),
        (a = s =
          (0, r._)([(0, n.j)('esri.renderers.support.LegendOptions')], a));
      const u = a;
    },
    44262: (e, t, i) => {
      i.d(t, { Z: () => d });
      var s,
        r = i(43697),
        l = i(96674),
        o = i(5600),
        n = (i(67676), i(80442), i(90578)),
        a = i(52011),
        u = i(9833);
      let p = (s = class extends l.wq {
        constructor(e) {
          super(e),
            (this.description = null),
            (this.label = null),
            (this.symbol = null),
            (this.value = null);
        }
        castValue(e) {
          return null == e || 'string' == typeof e || 'number' == typeof e
            ? e
            : `${e}`;
        }
        clone() {
          return new s({
            value: this.value,
            description: this.description,
            label: this.label,
            symbol: this.symbol ? this.symbol.clone() : null,
          });
        }
        getMeshHash() {
          const e = JSON.stringify(this.symbol && this.symbol.toJSON());
          return `${this.value}.${e}`;
        }
      });
      (0, r._)(
        [(0, o.Cb)({ type: String, json: { write: !0 } })],
        p.prototype,
        'description',
        void 0,
      ),
        (0, r._)(
          [(0, o.Cb)({ type: String, json: { write: !0 } })],
          p.prototype,
          'label',
          void 0,
        ),
        (0, r._)([(0, o.Cb)(u.G)], p.prototype, 'symbol', void 0),
        (0, r._)(
          [
            (0, o.Cb)({
              json: {
                type: String,
                write: {
                  writer: (e, t) => {
                    t.value = null == e ? void 0 : e.toString();
                  },
                },
              },
            }),
          ],
          p.prototype,
          'value',
          void 0,
        ),
        (0, r._)([(0, n.p)('value')], p.prototype, 'castValue', null),
        (p = s =
          (0, r._)([(0, a.j)('esri.renderers.support.UniqueValueInfo')], p));
      const d = p;
    },
    9833: (e, t, i) => {
      i.d(t, { K: () => u, G: () => a });
      var s = i(78223),
        r = i(63213),
        l = i(21878),
        o = i(89164),
        n = i(86114);
      const a = {
          types: s.QT,
          json: {
            write: { writer: l.cW },
            origins: {
              'web-scene': {
                types: s.f_,
                write: { writer: l.cW },
                read: { reader: (0, r.d)({ types: s.f_ }) },
              },
            },
          },
        },
        u = {
          types: {
            base: o.Z,
            key: 'type',
            typeMap: {
              'simple-fill': s.LB.typeMap['simple-fill'],
              'picture-fill': s.LB.typeMap['picture-fill'],
              'polygon-3d': s.LB.typeMap['polygon-3d'],
            },
          },
          json: {
            write: { writer: l.cW },
            origins: { 'web-scene': { type: n.Z, write: { writer: l.cW } } },
          },
        };
    },
    89513: (e, t, i) => {
      i.d(t, { Z: () => d });
      var s,
        r = i(43697),
        l = i(20102),
        o = i(5600),
        n = (i(67676), i(80442), i(75215), i(52011)),
        a = i(30556),
        u = i(77997);
      let p = (s = class extends u.Z {
        constructor(e) {
          super(e),
            (this.axis = null),
            (this.type = 'rotation'),
            (this.rotationType = 'geographic'),
            (this.valueExpressionTitle = null);
        }
        get cache() {
          return { hasExpression: !!this.valueExpression, compiledFunc: null };
        }
        writeValueExpressionTitleWebScene(e, t, i, s) {
          if (s && s.messages) {
            const e = `visualVariables[${this.index}]`;
            s.messages.push(
              new l.Z(
                'property:unsupported',
                this.type +
                  'VisualVariable.valueExpressionTitle is not supported in Web Scene. Please remove this property to save the Web Scene.',
                {
                  instance: this,
                  propertyName: e + '.valueExpressionTitle',
                  context: s,
                },
              ),
            );
          }
        }
        clone() {
          return new s({
            axis: this.axis,
            rotationType: this.rotationType,
            field: this.field,
            valueExpression: this.valueExpression,
            valueExpressionTitle: this.valueExpressionTitle,
            legendOptions: this.legendOptions && this.legendOptions.clone(),
          });
        }
      });
      (0, r._)([(0, o.Cb)({ readOnly: !0 })], p.prototype, 'cache', null),
        (0, r._)(
          [
            (0, o.Cb)({
              type: ['heading', 'tilt', 'roll'],
              json: {
                origins: { 'web-scene': { default: 'heading', write: !0 } },
              },
            }),
          ],
          p.prototype,
          'axis',
          void 0,
        ),
        (0, r._)(
          [(0, o.Cb)({ type: ['rotation'], json: { type: ['rotationInfo'] } })],
          p.prototype,
          'type',
          void 0,
        ),
        (0, r._)(
          [
            (0, o.Cb)({
              type: ['geographic', 'arithmetic'],
              json: {
                write: !0,
                origins: {
                  'web-document': { write: !0, default: 'geographic' },
                },
              },
            }),
          ],
          p.prototype,
          'rotationType',
          void 0,
        ),
        (0, r._)(
          [(0, o.Cb)({ type: String, json: { write: !0 } })],
          p.prototype,
          'valueExpressionTitle',
          void 0,
        ),
        (0, r._)(
          [(0, a.c)('web-scene', 'valueExpressionTitle')],
          p.prototype,
          'writeValueExpressionTitleWebScene',
          null,
        ),
        (p = s =
          (0, r._)(
            [(0, n.j)('esri.renderers.visualVariables.RotationVariable')],
            p,
          ));
      const d = p;
    },
    27922: (e, t, i) => {
      i.d(t, { Z: () => F });
      var s,
        r = i(43697),
        l = i(20102),
        o = i(35454),
        n = i(92604),
        a = i(62357),
        u = i(5600),
        p = (i(67676), i(80442), i(90578)),
        d = i(71715),
        h = i(52011),
        c = i(30556),
        y = i(77997),
        b = i(96674);
      i(75215);
      let m = (s = class extends b.wq {
        constructor(e) {
          super(e),
            (this.label = null),
            (this.size = null),
            (this.value = null);
        }
        clone() {
          return new s({
            label: this.label,
            size: this.size,
            value: this.value,
          });
        }
      });
      (0, r._)(
        [(0, u.Cb)({ type: String, json: { write: !0 } })],
        m.prototype,
        'label',
        void 0,
      ),
        (0, r._)(
          [(0, u.Cb)({ type: Number, cast: a.t_, json: { write: !0 } })],
          m.prototype,
          'size',
          void 0,
        ),
        (0, r._)(
          [(0, u.Cb)({ type: Number, json: { write: !0 } })],
          m.prototype,
          'value',
          void 0,
        ),
        (m = s =
          (0, r._)(
            [(0, h.j)('esri.renderers.visualVariables.support.SizeStop')],
            m,
          ));
      const f = m;
      var v,
        g = i(58439);
      let w = (v = class extends g.Z {
        constructor() {
          super(...arguments), (this.customValues = null);
        }
        clone() {
          return new v({
            title: this.title,
            showLegend: this.showLegend,
            customValues: this.customValues && this.customValues.slice(0),
          });
        }
      });
      (0, r._)(
        [(0, u.Cb)({ type: [Number], json: { write: !0 } })],
        w.prototype,
        'customValues',
        void 0,
      ),
        (w = v =
          (0, r._)(
            [
              (0, h.j)(
                'esri.renderers.visualVariables.support.SizeVariableLegendOptions',
              ),
            ],
            w,
          ));
      const _ = w;
      var V,
        S = i(51706),
        x = i(28101);
      const C = n.Z.getLogger('esri.renderers.visualVariables.SizeVariable'),
        I = new o.X({
          width: 'width',
          depth: 'depth',
          height: 'height',
          widthAndDepth: 'width-and-depth',
          all: 'all',
        }),
        j = new o.X({
          unknown: 'unknown',
          inch: 'inches',
          foot: 'feet',
          yard: 'yards',
          mile: 'miles',
          'nautical-mile': 'nautical-miles',
          millimeter: 'millimeters',
          centimeter: 'centimeters',
          decimeter: 'decimeters',
          meter: 'meters',
          kilometer: 'kilometers',
          'decimal-degree': 'decimal-degrees',
        });
      function z(e) {
        if (null != e)
          return 'string' == typeof e || 'number' == typeof e
            ? (0, a.t_)(e)
            : 'size' === e.type
            ? (0, S.iY)(e)
              ? e
              : (delete (e = { ...e }).type, new O(e))
            : void 0;
      }
      function E(e, t, i) {
        if ('object' != typeof e) return e;
        const s = new O();
        return s.read(e, i), s;
      }
      let O = (V = class extends y.Z {
        constructor(e) {
          super(e),
            (this.axis = null),
            (this.legendOptions = null),
            (this.normalizationField = null),
            (this.scaleBy = null),
            (this.target = null),
            (this.type = 'size'),
            (this.useSymbolValue = null),
            (this.valueExpression = null),
            (this.valueRepresentation = null),
            (this.valueUnit = null);
        }
        get cache() {
          return {
            ipData: this._interpolateData(),
            hasExpression: !!this.valueExpression,
            compiledFunc: null,
            isScaleDriven: x.B3.test(this.valueExpression),
          };
        }
        set expression(e) {
          C.warn(
            "'expression' is deprecated since version 4.2. Use 'valueExpression' instead. The only supported expression is 'view.scale'.",
          ),
            'view.scale' === e
              ? ((this.valueExpression = '$view.scale'),
                this._set('expression', e))
              : this._set('expression', null);
        }
        set index(e) {
          (0, S.iY)(this.maxSize) &&
            (this.maxSize.index = `visualVariables[${e}].maxSize`),
            (0, S.iY)(this.minSize) &&
              (this.minSize.index = `visualVariables[${e}].minSize`),
            this._set('index', e);
        }
        get inputValueType() {
          return (0, S.PS)(this);
        }
        set maxDataValue(e) {
          e &&
            this.stops &&
            (C.warn('cannot set maxDataValue when stops is not null.'),
            (e = null)),
            this._set('maxDataValue', e);
        }
        set maxSize(e) {
          e &&
            this.stops &&
            (C.warn('cannot set maxSize when stops is not null.'), (e = null)),
            this._set('maxSize', e);
        }
        castMaxSize(e) {
          return z(e);
        }
        readMaxSize(e, t, i) {
          return E(e, 0, i);
        }
        set minDataValue(e) {
          e &&
            this.stops &&
            (C.warn('cannot set minDataValue when stops is not null.'),
            (e = null)),
            this._set('minDataValue', e);
        }
        set minSize(e) {
          e &&
            this.stops &&
            (C.warn('cannot set minSize when stops is not null.'), (e = null)),
            this._set('minSize', e);
        }
        castMinSize(e) {
          return z(e);
        }
        readMinSize(e, t, i) {
          return E(e, 0, i);
        }
        get arcadeRequired() {
          return (
            !!this.valueExpression ||
            (this.minSize &&
              'object' == typeof this.minSize &&
              this.minSize.arcadeRequired) ||
            (this.maxSize &&
              'object' == typeof this.maxSize &&
              this.maxSize.arcadeRequired)
          );
        }
        set stops(e) {
          null == this.minDataValue &&
          null == this.maxDataValue &&
          null == this.minSize &&
          null == this.maxSize
            ? e &&
              Array.isArray(e) &&
              (e = e.filter((e) => !!e)).sort((e, t) => e.value - t.value)
            : e &&
              (C.warn(
                'cannot set stops when one of minDataValue, maxDataValue, minSize or maxSize is not null.',
              ),
              (e = null)),
            this._set('stops', e);
        }
        get transformationType() {
          return (0, S.QW)(this, this.inputValueType);
        }
        readValueExpression(e, t) {
          return e || (t.expression && '$view.scale');
        }
        writeValueExpressionWebScene(e, t, i, s) {
          if ('$view.scale' === e) {
            if (s && s.messages) {
              const e = this.index,
                t = 'string' == typeof e ? e : `visualVariables[${e}]`;
              s.messages.push(
                new l.Z(
                  'property:unsupported',
                  this.type +
                    "VisualVariable.valueExpression = '$view.scale' is not supported in Web Scene. Please remove this property to save the Web Scene.",
                  {
                    instance: this,
                    propertyName: t + '.valueExpression',
                    context: s,
                  },
                ),
              );
            }
          } else t[i] = e;
        }
        readValueUnit(e) {
          return e ? j.read(e) : null;
        }
        clone() {
          return new V({
            axis: this.axis,
            field: this.field,
            valueExpression: this.valueExpression,
            valueExpressionTitle: this.valueExpressionTitle,
            maxDataValue: this.maxDataValue,
            maxSize: (0, S.iY)(this.maxSize)
              ? this.maxSize.clone()
              : this.maxSize,
            minDataValue: this.minDataValue,
            minSize: (0, S.iY)(this.minSize)
              ? this.minSize.clone()
              : this.minSize,
            normalizationField: this.normalizationField,
            stops: this.stops && this.stops.map((e) => e.clone()),
            target: this.target,
            useSymbolValue: this.useSymbolValue,
            valueRepresentation: this.valueRepresentation,
            valueUnit: this.valueUnit,
            legendOptions: this.legendOptions && this.legendOptions.clone(),
          });
        }
        flipSizes() {
          if (this.transformationType === S.hL.ClampedLinear) {
            const { minSize: e, maxSize: t } = this;
            return (this.minSize = t), (this.maxSize = e), this;
          }
          if (this.transformationType === S.hL.Stops) {
            const e = this.stops,
              t = e.map((e) => e.size).reverse(),
              i = e.length;
            for (let s = 0; s < i; s++) e[s].size = t[s];
            return this;
          }
          return this;
        }
        getAttributeHash() {
          return `${super.getAttributeHash()}-${this.target}-${
            this.normalizationField
          }`;
        }
        _interpolateData() {
          return this.stops && this.stops.map((e) => e.value || 0);
        }
      });
      (0, r._)([(0, u.Cb)({ readOnly: !0 })], O.prototype, 'cache', null),
        (0, r._)(
          [
            (0, u.Cb)({
              type: I.apiValues,
              json: {
                type: I.jsonValues,
                origins: { 'web-map': { read: !1 } },
                read: I.read,
                write: I.write,
              },
            }),
          ],
          O.prototype,
          'axis',
          void 0,
        ),
        (0, r._)(
          [(0, u.Cb)({ type: String, value: null, json: { read: !1 } })],
          O.prototype,
          'expression',
          null,
        ),
        (0, r._)([(0, u.Cb)()], O.prototype, 'index', null),
        (0, r._)(
          [(0, u.Cb)({ type: String, readOnly: !0 })],
          O.prototype,
          'inputValueType',
          null,
        ),
        (0, r._)(
          [(0, u.Cb)({ type: _, json: { write: !0 } })],
          O.prototype,
          'legendOptions',
          void 0,
        ),
        (0, r._)(
          [(0, u.Cb)({ type: Number, value: null, json: { write: !0 } })],
          O.prototype,
          'maxDataValue',
          null,
        ),
        (0, r._)(
          [(0, u.Cb)({ type: Number, value: null, json: { write: !0 } })],
          O.prototype,
          'maxSize',
          null,
        ),
        (0, r._)([(0, p.p)('maxSize')], O.prototype, 'castMaxSize', null),
        (0, r._)([(0, d.r)('maxSize')], O.prototype, 'readMaxSize', null),
        (0, r._)(
          [(0, u.Cb)({ type: Number, value: null, json: { write: !0 } })],
          O.prototype,
          'minDataValue',
          null,
        ),
        (0, r._)(
          [(0, u.Cb)({ type: Number, value: null, json: { write: !0 } })],
          O.prototype,
          'minSize',
          null,
        ),
        (0, r._)([(0, p.p)('minSize')], O.prototype, 'castMinSize', null),
        (0, r._)([(0, d.r)('minSize')], O.prototype, 'readMinSize', null),
        (0, r._)(
          [(0, u.Cb)({ type: String, json: { write: !0 } })],
          O.prototype,
          'normalizationField',
          void 0,
        ),
        (0, r._)(
          [(0, u.Cb)({ readOnly: !0 })],
          O.prototype,
          'arcadeRequired',
          null,
        ),
        (0, r._)([(0, u.Cb)({ type: String })], O.prototype, 'scaleBy', void 0),
        (0, r._)(
          [(0, u.Cb)({ type: [f], value: null, json: { write: !0 } })],
          O.prototype,
          'stops',
          null,
        ),
        (0, r._)(
          [(0, u.Cb)({ type: ['outline'], json: { write: !0 } })],
          O.prototype,
          'target',
          void 0,
        ),
        (0, r._)(
          [(0, u.Cb)({ type: String, readOnly: !0 })],
          O.prototype,
          'transformationType',
          null,
        ),
        (0, r._)(
          [(0, u.Cb)({ type: ['size'], json: { type: ['sizeInfo'] } })],
          O.prototype,
          'type',
          void 0,
        ),
        (0, r._)(
          [
            (0, u.Cb)({
              type: Boolean,
              json: { write: !0, origins: { 'web-map': { read: !1 } } },
            }),
          ],
          O.prototype,
          'useSymbolValue',
          void 0,
        ),
        (0, r._)(
          [(0, u.Cb)({ type: String, json: { write: !0 } })],
          O.prototype,
          'valueExpression',
          void 0,
        ),
        (0, r._)(
          [(0, d.r)('valueExpression', ['valueExpression', 'expression'])],
          O.prototype,
          'readValueExpression',
          null,
        ),
        (0, r._)(
          [(0, c.c)('web-scene', 'valueExpression')],
          O.prototype,
          'writeValueExpressionWebScene',
          null,
        ),
        (0, r._)(
          [
            (0, u.Cb)({
              type: ['radius', 'diameter', 'area', 'width', 'distance'],
              json: { write: !0 },
            }),
          ],
          O.prototype,
          'valueRepresentation',
          void 0,
        ),
        (0, r._)(
          [
            (0, u.Cb)({
              type: j.apiValues,
              json: {
                write: j.write,
                origins: {
                  'web-map': { read: !1 },
                  'web-scene': { write: !0 },
                },
              },
            }),
          ],
          O.prototype,
          'valueUnit',
          void 0,
        ),
        (0, r._)([(0, d.r)('valueUnit')], O.prototype, 'readValueUnit', null),
        (O = V =
          (0, r._)(
            [(0, h.j)('esri.renderers.visualVariables.SizeVariable')],
            O,
          ));
      const F = O;
    },
    77997: (e, t, i) => {
      i.d(t, { Z: () => b });
      var s = i(43697),
        r = i(35454),
        l = i(96674),
        o = i(92604),
        n = i(5600),
        a = (i(67676), i(80442), i(90578)),
        u = i(52011),
        p = i(75215),
        d = i(58439);
      const h = o.Z.getLogger('esri.renderers.visualVariables.VisualVariable'),
        c = new r.X({
          colorInfo: 'color',
          transparencyInfo: 'opacity',
          rotationInfo: 'rotation',
          sizeInfo: 'size',
        });
      let y = class extends l.wq {
        constructor(e) {
          super(e),
            (this.index = null),
            (this.type = null),
            (this.field = null),
            (this.valueExpression = null),
            (this.valueExpressionTitle = null),
            (this.legendOptions = null);
        }
        castField(e) {
          return null == e
            ? e
            : 'function' == typeof e
            ? (h.error('.field: field must be a string value'), null)
            : (0, p.Zs)(e);
        }
        get arcadeRequired() {
          return !!this.valueExpression;
        }
        clone() {}
        getAttributeHash() {
          return `${this.type}-${this.field}-${this.valueExpression}`;
        }
      };
      (0, s._)([(0, n.Cb)()], y.prototype, 'index', void 0),
        (0, s._)(
          [
            (0, n.Cb)({
              type: c.apiValues,
              readOnly: !0,
              json: { read: c.read, write: c.write },
            }),
          ],
          y.prototype,
          'type',
          void 0,
        ),
        (0, s._)(
          [(0, n.Cb)({ type: String, json: { write: !0 } })],
          y.prototype,
          'field',
          void 0,
        ),
        (0, s._)([(0, a.p)('field')], y.prototype, 'castField', null),
        (0, s._)(
          [(0, n.Cb)({ type: String, json: { write: !0 } })],
          y.prototype,
          'valueExpression',
          void 0,
        ),
        (0, s._)(
          [(0, n.Cb)({ type: String, json: { write: !0 } })],
          y.prototype,
          'valueExpressionTitle',
          void 0,
        ),
        (0, s._)(
          [(0, n.Cb)({ readOnly: !0 })],
          y.prototype,
          'arcadeRequired',
          null,
        ),
        (0, s._)(
          [(0, n.Cb)({ type: d.Z, json: { write: !0 } })],
          y.prototype,
          'legendOptions',
          void 0,
        ),
        (y = (0, s._)(
          [(0, u.j)('esri.renderers.visualVariables.VisualVariable')],
          y,
        ));
      const b = y;
    },
    21849: (e, t, i) => {
      i.d(t, { Z: () => h });
      var s,
        r = i(43697),
        l = i(22303),
        o = i(96674),
        n = i(5600),
        a = (i(67676), i(80442), i(75215)),
        u = i(52011),
        p = i(30556);
      let d = (s = class extends o.wq {
        constructor(e) {
          super(e),
            (this.color = null),
            (this.label = null),
            (this.value = null);
        }
        writeValue(e, t, i) {
          t[i] = null == e ? 0 : e;
        }
        clone() {
          return new s({
            color: this.color && this.color.clone(),
            label: this.label,
            value: this.value,
          });
        }
      });
      (0, r._)(
        [(0, n.Cb)({ type: l.Z, json: { type: [a.z8], write: !0 } })],
        d.prototype,
        'color',
        void 0,
      ),
        (0, r._)(
          [(0, n.Cb)({ type: String, json: { write: !0 } })],
          d.prototype,
          'label',
          void 0,
        ),
        (0, r._)(
          [
            (0, n.Cb)({
              type: Number,
              json: { write: { writerEnsuresNonNull: !0 } },
            }),
          ],
          d.prototype,
          'value',
          void 0,
        ),
        (0, r._)([(0, p.c)('value')], d.prototype, 'writeValue', null),
        (d = s =
          (0, r._)(
            [(0, u.j)('esri.renderers.visualVariables.support.ColorStop')],
            d,
          ));
      const h = d;
    },
    58439: (e, t, i) => {
      i.d(t, { Z: () => u });
      var s,
        r = i(43697),
        l = i(5600),
        o = (i(67676), i(80442), i(75215), i(52011)),
        n = i(66338);
      let a = (s = class extends n.Z {
        constructor() {
          super(...arguments), (this.showLegend = null);
        }
        clone() {
          return new s({ title: this.title, showLegend: this.showLegend });
        }
      });
      (0, r._)(
        [(0, l.Cb)({ type: Boolean, json: { write: !0 } })],
        a.prototype,
        'showLegend',
        void 0,
      ),
        (a = s =
          (0, r._)(
            [
              (0, o.j)(
                'esri.renderers.visualVariables.support.VisualVariableLegendOptions',
              ),
            ],
            a,
          ));
      const u = a;
    },
    21878: (e, t, i) => {
      i.d(t, { im: () => _, cW: () => v, vX: () => g });
      var s = i(78223),
        r = i(20102),
        l = i(70586),
        o = i(87223),
        n = i(59390),
        a = i(42143),
        u = i(4095),
        p = i(98587),
        d = i(77987),
        h = i(37898),
        c = i(20256),
        y = i(86114),
        b = i(78724),
        m = i(20825);
      const f = { retainId: !1, ignoreDrivers: !1, hasLabelingContext: !0 };
      function v(e, t, i, s) {
        const r = w(e, {}, { context: s, isLabelSymbol: !1 });
        (0, l.pC)(r) && (t[i] = r);
      }
      function g(e, t, i, s) {
        const r = w(e, {}, { context: s, isLabelSymbol: !0 });
        (0, l.pC)(r) && (t[i] = r);
      }
      function w(e, t, i) {
        if ((0, l.Wi)(e)) return null;
        const { context: v, isLabelSymbol: g } = i;
        if (
          v &&
          'web-scene' === v.origin &&
          !(e instanceof o.Z) &&
          !(e instanceof n.Z)
        ) {
          const i = (function (e, t = f) {
            if (!e) return { symbol: null };
            const {
              retainId: i = f.retainId,
              ignoreDrivers: l = f.ignoreDrivers,
              hasLabelingContext: o = f.hasLabelingContext,
              retainCIM: v = f.retainCIM,
            } = t;
            let g;
            if ((0, s.dU)(e) || e instanceof n.Z) g = e.clone();
            else if ('cim' === e.type) {
              var w, _;
              const t =
                null == (w = e.data) || null == (_ = w.symbol)
                  ? void 0
                  : _.type;
              if ('CIMPointSymbol' !== t)
                return {
                  error: new r.Z(
                    'symbol-conversion:unsupported-cim-symbol',
                    `CIM symbol of type '${
                      t || 'unknown'
                    }' is unsupported in 3D`,
                    { symbol: e },
                  ),
                };
              g = v ? e.clone() : a.Z.fromCIMSymbol(e);
            } else if (e instanceof u.Z) g = p.Z.fromSimpleLineSymbol(e);
            else if (e instanceof d.Z) g = a.Z.fromSimpleMarkerSymbol(e);
            else if (e instanceof h.Z) g = a.Z.fromPictureMarkerSymbol(e);
            else if (e instanceof c.Z) g = y.Z.fromSimpleFillSymbol(e);
            else {
              if (!(e instanceof b.Z))
                return {
                  error: new r.Z(
                    'symbol-conversion:unsupported-2d-symbol',
                    `2D symbol of type '${
                      e.type || e.declaredClass
                    }' is unsupported in 3D`,
                    { symbol: e },
                  ),
                };
              g = o ? m.Z.fromTextSymbol(e) : a.Z.fromTextSymbol(e);
            }
            if ((i && 'cim' !== g.type && (g.id = e.id), l && (0, s.dU)(g)))
              for (let e = 0; e < g.symbolLayers.length; ++e)
                g.symbolLayers.getItemAt(e)._ignoreDrivers = !0;
            return { symbol: g };
          })(e, { retainCIM: !0, hasLabelingContext: g });
          return (0, l.pC)(i.symbol)
            ? i.symbol.write(t, v)
            : (v.messages &&
                v.messages.push(
                  new r.Z(
                    'symbol:unsupported',
                    `Symbols of type '${e.declaredClass}' are not supported in scenes. Use 3D symbology instead when working with WebScene and SceneView`,
                    { symbol: e, context: v, error: i.error },
                  ),
                ),
              null);
        }
        return v && 'web-map' === v.origin && 'web-style' === e.type
          ? (v.messages &&
              v.messages.push(
                new r.Z(
                  'symbol:unsupported',
                  `Symbols of type '${e.declaredClass}' are not supported in webmaps. Use CIMSymbol instead when working with WebMap in MapView.`,
                  { symbol: e, context: v },
                ),
              ),
            null)
          : e.write(t, v);
      }
      function _(e, t) {
        return (0, s.S9)(e, null, t);
      }
    },
  },
]);
