'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [7604],
  {
    17017: (e, t, r) => {
      r.d(t, { N: () => o });
      var i = r(43697),
        s = r(5600),
        n = (r(67676), r(80442), r(75215), r(52011));
      const o = (e) => {
        let t = class extends e {
          constructor() {
            super(...arguments), (this.customParameters = null);
          }
        };
        return (
          (0, i._)(
            [
              (0, s.Cb)({
                type: Object,
                json: {
                  write: {
                    overridePolicy: (e) => ({
                      enabled: !!(e && Object.keys(e).length > 0),
                    }),
                  },
                },
              }),
            ],
            t.prototype,
            'customParameters',
            void 0,
          ),
          (t = (0, i._)(
            [(0, n.j)('esri.layers.mixins.CustomParametersMixin')],
            t,
          )),
          t
        );
      };
    },
    34760: (e, t, r) => {
      r.d(t, { Q: () => m });
      var i = r(43697),
        s = r(92604),
        n = r(95330),
        o = r(5600),
        l = (r(67676), r(80442), r(75215), r(52011)),
        a = r(80539),
        c = (r(20102), r(26258), r(87538));
      const u = new a.Z(),
        p = new WeakMap();
      function d(e) {
        return (
          e && 'object' == typeof e && 'refreshInterval' in e && 'refresh' in e
        );
      }
      function h(e, t) {
        return Number.isFinite(e) && Number.isFinite(t)
          ? t <= 0
            ? e
            : h(t, e % t)
          : 0;
      }
      let b = 0,
        y = 0;
      function f() {
        const e = Date.now();
        for (const r of u)
          if (r.refreshInterval) {
            var t;
            e - (null != (t = p.get(r)) ? t : 0) + 5 >=
              6e4 * r.refreshInterval && (p.set(r, e), r.refresh(e));
          }
      }
      (0, c.EH)(() => {
        const e = Date.now();
        let t = 0;
        for (const r of u)
          (t = h(Math.round(6e4 * r.refreshInterval), t)),
            r.refreshInterval ? p.get(r) || p.set(r, e) : p.delete(r);
        if (t !== y) {
          if (((y = t), clearInterval(b), 0 === y)) return void (b = 0);
          b = setInterval(f, y);
        }
      });
      const m = (e) => {
        let t = class extends e {
          constructor(...e) {
            super(...e),
              (this.refreshInterval = 0),
              (this.refreshTimestamp = 0),
              (this._debounceHasDataChanged = (0, n.Ds)(() =>
                this.hasDataChanged(),
              )),
              this.when().then(
                () => {
                  !(function (e) {
                    d(e) && u.push(e);
                  })(this);
                },
                () => {},
              );
          }
          destroy() {
            d(this) && u.includes(this) && u.remove(this);
          }
          get refreshParameters() {
            return { _ts: this.refreshTimestamp || null };
          }
          refresh(e = Date.now()) {
            (0, n.R8)(this._debounceHasDataChanged()).then(
              (t) => {
                t && this._set('refreshTimestamp', e),
                  this.emit('refresh', { dataChanged: t });
              },
              (e) => {
                s.Z.getLogger(this.declaredClass).error(e),
                  this.emit('refresh', { dataChanged: !1, error: e });
              },
            );
          }
          async hasDataChanged() {
            return !0;
          }
        };
        return (
          (0, i._)(
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
          (0, i._)(
            [(0, o.Cb)({ readOnly: !0 })],
            t.prototype,
            'refreshTimestamp',
            void 0,
          ),
          (0, i._)([(0, o.Cb)()], t.prototype, 'refreshParameters', null),
          (t = (0, i._)([(0, l.j)('esri.layers.mixins.RefreshableLayer')], t)),
          t
        );
      };
    },
    2319: (e, t, r) => {
      r.d(t, { Z: () => Z });
      var i,
        s = r(43697),
        n = r(78223),
        o = r(35454),
        l = r(96674),
        a = r(22974),
        c = r(62357),
        u = r(5600),
        p = (r(75215), r(71715)),
        d = r(52011),
        h = r(30556),
        b = (r(67676), r(80442), r(8813));
      let y = (i = class extends l.wq {
        constructor() {
          super(...arguments),
            (this.expression = null),
            (this.title = null),
            (this.value = null);
        }
        readExpression(e, t) {
          return t.value ? (0, b.dI)(t.value) : e;
        }
        writeExpression(e, t, r) {
          null != this.value && (e = (0, b.dI)(this.value)),
            null != e && (t[r] = e);
        }
        clone() {
          return new i({
            expression: this.expression,
            title: this.title,
            value: this.value,
          });
        }
      });
      (0, s._)(
        [
          (0, u.Cb)({
            type: String,
            json: { write: { writerEnsuresNonNull: !0 } },
          }),
        ],
        y.prototype,
        'expression',
        void 0,
      ),
        (0, s._)(
          [(0, p.r)('expression', ['expression', 'value'])],
          y.prototype,
          'readExpression',
          null,
        ),
        (0, s._)(
          [(0, h.c)('expression')],
          y.prototype,
          'writeExpression',
          null,
        ),
        (0, s._)(
          [
            (0, u.Cb)({
              type: String,
              json: { write: !0, origins: { 'web-scene': { write: !1 } } },
            }),
          ],
          y.prototype,
          'title',
          void 0,
        ),
        (0, s._)(
          [(0, u.Cb)({ json: { read: !1, write: !1 } })],
          y.prototype,
          'value',
          void 0,
        ),
        (y = i =
          (0, s._)([(0, d.j)('esri.layers.support.LabelExpressionInfo')], y));
      const f = y;
      var m = r(20256),
        g = r(4095),
        v = r(77987),
        w = r(78724),
        x = r(58333);
      v.Z.fromJSON(x.I4), g.Z.fromJSON(x.ET), m.Z.fromJSON(x.lF);
      const S = w.Z.fromJSON(x.qP);
      v.Z.fromJSON(x.eG), g.Z.fromJSON(x.wW), m.Z.fromJSON(x.lj);
      var _,
        C = r(21878);
      const E = new o.X(
        {
          esriServerPointLabelPlacementAboveCenter: 'above-center',
          esriServerPointLabelPlacementAboveLeft: 'above-left',
          esriServerPointLabelPlacementAboveRight: 'above-right',
          esriServerPointLabelPlacementBelowCenter: 'below-center',
          esriServerPointLabelPlacementBelowLeft: 'below-left',
          esriServerPointLabelPlacementBelowRight: 'below-right',
          esriServerPointLabelPlacementCenterCenter: 'center-center',
          esriServerPointLabelPlacementCenterLeft: 'center-left',
          esriServerPointLabelPlacementCenterRight: 'center-right',
          esriServerLinePlacementAboveAfter: 'above-after',
          esriServerLinePlacementAboveAlong: 'above-along',
          esriServerLinePlacementAboveBefore: 'above-before',
          esriServerLinePlacementAboveStart: 'above-start',
          esriServerLinePlacementAboveEnd: 'above-end',
          esriServerLinePlacementBelowAfter: 'below-after',
          esriServerLinePlacementBelowAlong: 'below-along',
          esriServerLinePlacementBelowBefore: 'below-before',
          esriServerLinePlacementBelowStart: 'below-start',
          esriServerLinePlacementBelowEnd: 'below-end',
          esriServerLinePlacementCenterAfter: 'center-after',
          esriServerLinePlacementCenterAlong: 'center-along',
          esriServerLinePlacementCenterBefore: 'center-before',
          esriServerLinePlacementCenterStart: 'center-start',
          esriServerLinePlacementCenterEnd: 'center-end',
          esriServerPolygonPlacementAlwaysHorizontal: 'always-horizontal',
        },
        { ignoreUnknown: !0 },
      );
      function P(e) {
        return !e || ('service' !== e.origin && !j(e.layer));
      }
      function j(e) {
        return 'map-image' === (null == e ? void 0 : e.type);
      }
      function I(e) {
        var t, r;
        return (
          !!j(e) &&
          !(
            null == (t = e.capabilities) ||
            null == (r = t.exportMap) ||
            !r.supportsArcadeExpressionForLabeling
          )
        );
      }
      let L = (_ = class extends l.wq {
        constructor(e) {
          super(e),
            (this.type = 'label'),
            (this.name = null),
            (this.allowOverrun = !1),
            (this.deconflictionStrategy = 'static'),
            (this.labelExpression = null),
            (this.labelExpressionInfo = null),
            (this.labelPlacement = null),
            (this.labelPosition = 'curved'),
            (this.maxScale = 0),
            (this.minScale = 0),
            (this.repeatLabel = !0),
            (this.repeatLabelDistance = null),
            (this.symbol = S),
            (this.useCodedValues = void 0),
            (this.where = null);
        }
        static evaluateWhere(e, t) {
          const r = function (e, t, r) {
            switch (t) {
              case '=':
                return e == r;
              case '<>':
                return e != r;
              case '>':
                return e > r;
              case '>=':
                return e >= r;
              case '<':
                return e < r;
              case '<=':
                return e <= r;
            }
            return !1;
          };
          try {
            if (null == e) return !0;
            const i = e.split(' ');
            if (3 === i.length) return r(t[i[0]], i[1], i[2]);
            if (7 === i.length) {
              const e = r(t[i[0]], i[1], i[2]),
                s = i[3],
                n = r(t[i[4]], i[5], i[6]);
              switch (s) {
                case 'AND':
                  return e && n;
                case 'OR':
                  return e || n;
              }
            }
            return !1;
          } catch (t) {
            console.log("Error.: can't parse = " + e);
          }
        }
        readLabelExpression(e, t) {
          const r = t.labelExpressionInfo;
          if (!r || (!r.value && !r.expression)) return e;
        }
        writeLabelExpression(e, t, r) {
          if (this.labelExpressionInfo)
            if (null != this.labelExpressionInfo.value)
              e = (0, b.z7)(this.labelExpressionInfo.value);
            else if (null != this.labelExpressionInfo.expression) {
              const t = (0, b.el)(this.labelExpressionInfo.expression);
              t && (e = '[' + t + ']');
            }
          null != e && (t[r] = e);
        }
        writeLabelExpressionInfo(e, t, r, i) {
          if (null == e && null != this.labelExpression && P(i))
            e = new f({ expression: this.getLabelExpressionArcade() });
          else if (!e) return;
          const s = e.toJSON(i);
          s.expression && (t[r] = s);
        }
        writeMaxScale(e, t) {
          (e || this.minScale) && (t.maxScale = e);
        }
        writeMinScale(e, t) {
          (e || this.maxScale) && (t.minScale = e);
        }
        getLabelExpression() {
          return (0, b.hV)(this);
        }
        getLabelExpressionArcade() {
          return (0, b.YI)(this);
        }
        getLabelExpressionSingleField() {
          return (0, b.UO)(this);
        }
        hash() {
          return JSON.stringify(this);
        }
        clone() {
          return new _({
            allowOverrun: this.allowOverrun,
            deconflictionStrategy: this.deconflictionStrategy,
            labelExpression: this.labelExpression,
            labelExpressionInfo: (0, a.d9)(this.labelExpressionInfo),
            labelPosition: this.labelPosition,
            labelPlacement: this.labelPlacement,
            maxScale: this.maxScale,
            minScale: this.minScale,
            name: this.name,
            repeatLabel: this.repeatLabel,
            repeatLabelDistance: this.repeatLabelDistance,
            symbol: (0, a.d9)(this.symbol),
            where: this.where,
            useCodedValues: this.useCodedValues,
          });
        }
      });
      (0, s._)(
        [(0, u.Cb)({ type: String, json: { write: !0 } })],
        L.prototype,
        'name',
        void 0,
      ),
        (0, s._)(
          [
            (0, u.Cb)({
              type: Boolean,
              json: {
                write: !0,
                default: !1,
                origins: { 'web-scene': { write: !1 } },
              },
            }),
          ],
          L.prototype,
          'allowOverrun',
          void 0,
        ),
        (0, s._)(
          [
            (0, u.Cb)({
              type: String,
              json: {
                write: !0,
                default: 'static',
                origins: { 'web-scene': { write: !1 } },
              },
            }),
          ],
          L.prototype,
          'deconflictionStrategy',
          void 0,
        ),
        (0, s._)(
          [
            (0, u.Cb)({
              type: String,
              json: {
                write: {
                  overridePolicy(e, t, r) {
                    return this.labelExpressionInfo &&
                      'service' === (null == r ? void 0 : r.origin) &&
                      I(r.layer)
                      ? { enabled: !1 }
                      : { allowNull: !0 };
                  },
                },
              },
            }),
          ],
          L.prototype,
          'labelExpression',
          void 0,
        ),
        (0, s._)(
          [(0, p.r)('labelExpression')],
          L.prototype,
          'readLabelExpression',
          null,
        ),
        (0, s._)(
          [(0, h.c)('labelExpression')],
          L.prototype,
          'writeLabelExpression',
          null,
        ),
        (0, s._)(
          [
            (0, u.Cb)({
              type: f,
              json: {
                write: {
                  overridePolicy: (e, t, r) =>
                    (function (e) {
                      return P(e) || I(e.layer);
                    })(r)
                      ? { allowNull: !0 }
                      : { enabled: !1 },
                },
              },
            }),
          ],
          L.prototype,
          'labelExpressionInfo',
          void 0,
        ),
        (0, s._)(
          [(0, h.c)('labelExpressionInfo')],
          L.prototype,
          'writeLabelExpressionInfo',
          null,
        ),
        (0, s._)(
          [
            (0, u.Cb)({
              type: E.apiValues,
              json: { type: E.jsonValues, read: E.read, write: E.write },
            }),
          ],
          L.prototype,
          'labelPlacement',
          void 0,
        ),
        (0, s._)(
          [
            (0, u.Cb)({
              type: ['curved', 'parallel'],
              json: {
                write: !0,
                origins: {
                  'web-map': { write: !1 },
                  'web-scene': { write: !1 },
                  'portal-item': { write: !1 },
                },
              },
            }),
          ],
          L.prototype,
          'labelPosition',
          void 0,
        ),
        (0, s._)(
          [(0, u.Cb)({ type: Number })],
          L.prototype,
          'maxScale',
          void 0,
        ),
        (0, s._)([(0, h.c)('maxScale')], L.prototype, 'writeMaxScale', null),
        (0, s._)(
          [(0, u.Cb)({ type: Number })],
          L.prototype,
          'minScale',
          void 0,
        ),
        (0, s._)([(0, h.c)('minScale')], L.prototype, 'writeMinScale', null),
        (0, s._)(
          [
            (0, u.Cb)({
              type: Boolean,
              json: {
                write: !0,
                origins: {
                  'web-scene': { write: !1 },
                  'portal-item': { write: !1 },
                },
              },
            }),
          ],
          L.prototype,
          'repeatLabel',
          void 0,
        ),
        (0, s._)(
          [
            (0, u.Cb)({
              type: Number,
              cast: c.t_,
              json: { write: !0, origins: { 'web-scene': { write: !1 } } },
            }),
          ],
          L.prototype,
          'repeatLabelDistance',
          void 0,
        ),
        (0, s._)(
          [
            (0, u.Cb)({
              types: n.yK,
              json: {
                origins: {
                  'web-scene': { types: n.S6, write: C.vX, default: null },
                },
                write: C.vX,
                default: null,
              },
            }),
          ],
          L.prototype,
          'symbol',
          void 0,
        ),
        (0, s._)(
          [(0, u.Cb)({ type: Boolean, json: { write: !0 } })],
          L.prototype,
          'useCodedValues',
          void 0,
        ),
        (0, s._)(
          [(0, u.Cb)({ type: String, json: { write: !0 } })],
          L.prototype,
          'where',
          void 0,
        ),
        (L = _ = (0, s._)([(0, d.j)('esri.layers.support.LabelClass')], L));
      const Z = L;
    },
    8813: (e, t, r) => {
      r.d(t, {
        dI: () => b,
        hV: () => p,
        YI: () => d,
        UO: () => h,
        el: () => v,
        z7: () => u,
      });
      var i = r(19153);
      const s = '__begin__',
        n = '__end__',
        o = new RegExp(s, 'ig'),
        l = new RegExp(n, 'ig'),
        a = new RegExp('^' + s, 'i'),
        c = new RegExp(n + '$', 'i');
      function u(e) {
        return e
          .replace(new RegExp('\\{', 'g'), '[')
          .replace(new RegExp('\\}', 'g'), ']');
      }
      function p(e) {
        const t = { expression: '', type: 'none' };
        return (
          e.labelExpressionInfo
            ? e.labelExpressionInfo.value
              ? ((t.expression = e.labelExpressionInfo.value),
                (t.type = 'conventional'))
              : e.labelExpressionInfo.expression &&
                ((t.expression = e.labelExpressionInfo.expression),
                (t.type = 'arcade'))
            : null != e.labelExpression &&
              ((t.expression = (function (e) {
                return e
                  .replace(new RegExp('\\[', 'g'), '{')
                  .replace(new RegExp('\\]', 'g'), '}');
              })(e.labelExpression)),
              (t.type = 'conventional')),
          t
        );
      }
      function d(e) {
        const t = p(e);
        if (!t) return null;
        switch (t.type) {
          case 'conventional':
            return b(t.expression);
          case 'arcade':
            return t.expression;
        }
        return null;
      }
      function h(e) {
        const t = p(e);
        if (!t) return null;
        switch (t.type) {
          case 'conventional':
            return (function (e) {
              const t = e.match(y);
              return (t && t[1].trim()) || null;
            })(t.expression);
          case 'arcade':
            return v(t.expression);
        }
        return null;
      }
      function b(e) {
        let t;
        return (
          e
            ? ((t = (0, i.gx)(e, (e) => s + '$feature["' + e + '"]' + n)),
              (t = a.test(t) ? t.replace(a, '') : '"' + t),
              (t = c.test(t) ? t.replace(c, '') : t + '"'),
              (t = t.replace(o, '" + ').replace(l, ' + "')))
            : (t = '""'),
          t
        );
      }
      const y = /^\s*\{([^}]+)\}\s*$/i,
        f =
          /^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*$/i,
        m =
          /^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(\1|\3)(\5)\s*\));?\s*$/i,
        g =
          /^\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])([\w\s]+)(\1)\s*\));?\s*$/i;
      function v(e) {
        if (!e) return null;
        let t = f.exec(e) || m.exec(e);
        return t ? t[1] || t[3] : ((t = g.exec(e)), t ? t[2] : null);
      }
    },
    12501: (e, t, r) => {
      r.d(t, { Z: () => b });
      var i,
        s = r(43697),
        n = r(22974),
        o = r(5600),
        l = (r(75215), r(52011)),
        a = r(30556),
        c = r(35671),
        u = r(5499),
        p = r(12571),
        d = r(84475);
      let h = (i = class extends (0, p.W)(u.Z) {
        constructor(e) {
          super(e),
            (this.config = null),
            (this.fieldMap = null),
            (this.scaleExpression = null),
            (this.scaleExpressionTitle = null),
            (this.url = null),
            (this.type = 'dictionary');
        }
        get _loader() {
          return new d.DictionaryLoader(this.url, this.config, this.fieldMap);
        }
        writeData(e, t) {
          e &&
            (t.scalingExpressionInfo = { expression: e, returnType: 'number' });
        }
        writeVisualVariables(e, t, r, i) {
          (null != i && i.origin) || super.writeVisualVariables(e, t, r, i);
        }
        clone() {
          return new i({
            config: (0, n.d9)(this.config),
            scaleExpression: this.scaleExpression,
            scaleExpressionTitle: this.scaleExpressionTitle,
            fieldMap: (0, n.d9)(this.fieldMap),
            url: (0, n.d9)(this.url),
            visualVariables: (0, n.d9)(this.visualVariables),
          });
        }
        async getSymbolAsync(e, t) {
          return this._loader.getSymbolAsync(e, t);
        }
        async collectRequiredFields(e, t) {
          await this.collectVVRequiredFields(e, t),
            this.scaleExpression &&
              (await (0, c.io)(e, t, this.scaleExpression));
          for (const r in this.fieldMap) {
            const i = this.fieldMap[r];
            t.has(i) && e.add(i);
          }
        }
        get arcadeRequired() {
          return !0;
        }
        getSymbol() {
          return null;
        }
        getSymbols() {
          return [];
        }
        getAttributeHash() {
          return (
            this.visualVariables &&
            this.visualVariables.reduce((e, t) => e + t.getAttributeHash(), '')
          );
        }
        getMeshHash() {
          return `${this.url}-${JSON.stringify(this.fieldMap)}`;
        }
        getSymbolFields() {
          return this._loader.getSymbolFields();
        }
      });
      (0, s._)(
        [(0, o.Cb)({ type: d.DictionaryLoader })],
        h.prototype,
        '_loader',
        null,
      ),
        (0, s._)(
          [
            (0, o.Cb)({
              type: Object,
              json: {
                read: { source: 'configuration' },
                write: { target: 'configuration' },
              },
            }),
          ],
          h.prototype,
          'config',
          void 0,
        ),
        (0, s._)(
          [(0, o.Cb)({ type: Object, json: { write: !0 } })],
          h.prototype,
          'fieldMap',
          void 0,
        ),
        (0, s._)(
          [
            (0, o.Cb)({
              type: String,
              json: {
                read: { source: 'scalingExpressionInfo.expression' },
                write: !0,
              },
            }),
          ],
          h.prototype,
          'scaleExpression',
          void 0,
        ),
        (0, s._)([(0, a.c)('scaleExpression')], h.prototype, 'writeData', null),
        (0, s._)(
          [
            (0, o.Cb)({
              type: String,
              json: {
                read: { source: 'scalingExpressionInfo.title' },
                write: {
                  target: 'scalingExpressionInfo.title',
                  overridePolicy(e) {
                    return { enabled: !!e && !!this.scaleExpression };
                  },
                },
              },
            }),
          ],
          h.prototype,
          'scaleExpressionTitle',
          void 0,
        ),
        (0, s._)(
          [(0, o.Cb)({ type: String, json: { write: !0 } })],
          h.prototype,
          'url',
          void 0,
        ),
        (0, s._)(
          [(0, a.c)('visualVariables')],
          h.prototype,
          'writeVisualVariables',
          null,
        ),
        (h = i = (0, s._)([(0, l.j)('esri.renderers.DictionaryRenderer')], h));
      const b = h;
    },
    95088: (e, t, r) => {
      r.d(t, { Z: () => I });
      var i,
        s = r(43697),
        n = r(22303),
        o = r(22974),
        l = r(44422),
        a = r(75215),
        c = r(36030),
        u = r(5600),
        p = r(52011),
        d = r(35671),
        h = r(5499),
        b = r(12571),
        y = r(96674),
        f = r(92604),
        m = (r(67676), r(80442), r(90578));
      const g = f.Z.getLogger('esri.renderers.support.AttributeColorInfo');
      let v = (i = class extends y.wq {
        constructor(e) {
          super(e),
            (this.color = null),
            (this.field = null),
            (this.label = null),
            (this.valueExpression = null),
            (this.valueExpressionTitle = null);
        }
        castField(e) {
          return null == e
            ? e
            : 'function' == typeof e
            ? (g.error('.field: field must be a string value'), null)
            : (0, a.Zs)(e);
        }
        getAttributeHash() {
          return `${this.field}-${this.valueExpression}`;
        }
        clone() {
          return new i({
            color: this.color && this.color.clone(),
            field: this.field,
            label: this.label,
            valueExpression: this.valueExpression,
            valueExpressionTitle: this.valueExpressionTitle,
          });
        }
      });
      (0, s._)(
        [(0, u.Cb)({ type: n.Z, json: { type: [Number], write: !0 } })],
        v.prototype,
        'color',
        void 0,
      ),
        (0, s._)(
          [(0, u.Cb)({ type: String, json: { write: !0 } })],
          v.prototype,
          'field',
          void 0,
        ),
        (0, s._)([(0, m.p)('field')], v.prototype, 'castField', null),
        (0, s._)(
          [(0, u.Cb)({ type: String, json: { write: !0 } })],
          v.prototype,
          'label',
          void 0,
        ),
        (0, s._)(
          [(0, u.Cb)({ type: String, json: { write: !0 } })],
          v.prototype,
          'valueExpression',
          void 0,
        ),
        (0, s._)(
          [(0, u.Cb)({ type: String, json: { write: !0 } })],
          v.prototype,
          'valueExpressionTitle',
          void 0,
        ),
        (v = i =
          (0, s._)([(0, p.j)('esri.renderers.support.AttributeColorInfo')], v));
      const w = v;
      var x;
      let S = (x = class extends y.wq {
        constructor() {
          super(...arguments), (this.unit = null);
        }
        clone() {
          return new x({ unit: this.unit });
        }
      });
      (0, s._)(
        [(0, u.Cb)({ type: String, json: { write: !0 } })],
        S.prototype,
        'unit',
        void 0,
      ),
        (S = x =
          (0, s._)(
            [(0, p.j)('esri.renderers.support.DotDensityLegendOptions')],
            S,
          ));
      const _ = S;
      var C,
        E = r(20256),
        P = r(4095);
      let j = (C = class extends (0, b.W)(h.Z) {
        constructor(e) {
          super(e),
            (this.attributes = null),
            (this.backgroundColor = new n.Z([0, 0, 0, 0])),
            (this.blendDots = !0),
            (this.dotBlendingEnabled = !0),
            (this.dotShape = 'square'),
            (this.dotSize = 1),
            (this.legendOptions = null),
            (this.outline = new P.Z()),
            (this.dotValue = null),
            (this.referenceDotValue = null),
            (this.referenceScale = null),
            (this.seed = 1),
            (this.type = 'dot-density');
        }
        calculateDotValue(e) {
          if (null == this.referenceScale) return this.dotValue;
          const t = (e / this.referenceScale) * this.dotValue;
          return t < 1 ? 1 : t;
        }
        getSymbol() {
          return new E.Z({ outline: this.outline });
        }
        async getSymbolAsync() {
          return this.getSymbol();
        }
        getSymbols() {
          return [this.getSymbol()];
        }
        getAttributeHash() {
          return (
            this.attributes &&
            this.attributes.reduce((e, t) => e + t.getAttributeHash(), '')
          );
        }
        getMeshHash() {
          return JSON.stringify(this.outline);
        }
        clone() {
          return new C({
            attributes: (0, o.d9)(this.attributes),
            backgroundColor: (0, o.d9)(this.backgroundColor),
            dotBlendingEnabled: (0, o.d9)(this.dotBlendingEnabled),
            dotShape: (0, o.d9)(this.dotShape),
            dotSize: (0, o.d9)(this.dotSize),
            dotValue: (0, o.d9)(this.dotValue),
            legendOptions: (0, o.d9)(this.legendOptions),
            outline: (0, o.d9)(this.outline),
            referenceScale: (0, o.d9)(this.referenceScale),
            visualVariables: (0, o.d9)(this.visualVariables),
            authoringInfo: this.authoringInfo && this.authoringInfo.clone(),
          });
        }
        getControllerHash() {
          return `${this.attributes.map(
            (e) => e.field || e.valueExpression || '',
          )}-${(this.outline && JSON.stringify(this.outline.toJSON())) || ''}`;
        }
        async collectRequiredFields(e, t) {
          await this.collectVVRequiredFields(e, t);
          for (const r of this.attributes)
            r.valueExpression && (await (0, d.io)(e, t, r.valueExpression)),
              r.field && e.add(r.field);
        }
      });
      (0, s._)(
        [(0, u.Cb)({ type: [w], json: { write: !0 } })],
        j.prototype,
        'attributes',
        void 0,
      ),
        (0, s._)(
          [(0, u.Cb)({ type: n.Z, json: { write: !0 } })],
          j.prototype,
          'backgroundColor',
          void 0,
        ),
        (0, s._)(
          [(0, u.Cb)({ type: Boolean }), (0, l.B)('dotBlendingEnabled')],
          j.prototype,
          'blendDots',
          void 0,
        ),
        (0, s._)(
          [(0, u.Cb)({ type: Boolean, json: { write: !0 } })],
          j.prototype,
          'dotBlendingEnabled',
          void 0,
        ),
        (0, s._)(
          [(0, u.Cb)({ type: String, json: { write: !1 } })],
          j.prototype,
          'dotShape',
          void 0,
        ),
        (0, s._)(
          [
            (0, u.Cb)({
              type: Number,
              json: {
                write: !0,
                origins: {
                  'web-map': { write: !1 },
                  'web-scene': { write: !1 },
                },
              },
            }),
          ],
          j.prototype,
          'dotSize',
          void 0,
        ),
        (0, s._)(
          [(0, u.Cb)({ type: _, json: { write: !0 } })],
          j.prototype,
          'legendOptions',
          void 0,
        ),
        (0, s._)(
          [(0, u.Cb)({ type: P.Z, json: { default: null, write: !0 } })],
          j.prototype,
          'outline',
          void 0,
        ),
        (0, s._)(
          [(0, u.Cb)({ type: Number, json: { write: !0 } })],
          j.prototype,
          'dotValue',
          void 0,
        ),
        (0, s._)(
          [(0, u.Cb)({ type: Number }), (0, l.B)('dotValue')],
          j.prototype,
          'referenceDotValue',
          void 0,
        ),
        (0, s._)(
          [(0, u.Cb)({ type: Number, json: { write: !0 } })],
          j.prototype,
          'referenceScale',
          void 0,
        ),
        (0, s._)(
          [(0, u.Cb)({ type: Number, json: { write: !0 } })],
          j.prototype,
          'seed',
          void 0,
        ),
        (0, s._)(
          [(0, c.J)({ dotDensity: 'dot-density' })],
          j.prototype,
          'type',
          void 0,
        ),
        (j = C = (0, s._)([(0, p.j)('esri.renderers.DotDensityRenderer')], j));
      const I = j;
    },
    79056: (e, t, r) => {
      r.d(t, { Z: () => m });
      var i,
        s = r(43697),
        n = r(22303),
        o = r(22974),
        l = r(5600),
        a = (r(75215), r(36030)),
        c = r(52011),
        u = r(35671),
        p = r(5499),
        d = r(96674);
      r(67676), r(80442);
      let h = (i = class extends d.wq {
        constructor(e) {
          super(e), (this.color = null), (this.ratio = null);
        }
        clone() {
          return new i({ color: this.color, ratio: this.ratio });
        }
      });
      (0, s._)(
        [(0, l.Cb)({ type: n.Z, json: { write: !0 } })],
        h.prototype,
        'color',
        void 0,
      ),
        (0, s._)(
          [(0, l.Cb)({ type: Number, json: { write: !0 } })],
          h.prototype,
          'ratio',
          void 0,
        ),
        (h = i =
          (0, s._)([(0, c.j)('esri.renderers.support.HeatmapColorStop')], h));
      const b = h;
      var y;
      let f = (y = class extends p.Z {
        constructor(e) {
          super(e),
            (this.blurRadius = 10),
            (this.referenceScale = 0),
            (this.colorStops = [
              new b({ ratio: 0, color: new n.Z('rgba(255, 140, 0, 0)') }),
              new b({ ratio: 0.75, color: new n.Z('rgba(255, 140, 0, 1)') }),
              new b({ ratio: 0.9, color: new n.Z('rgba(255, 0,   0, 1)') }),
            ]),
            (this.field = null),
            (this.fieldOffset = 0),
            (this.maxPixelIntensity = 100),
            (this.minPixelIntensity = 0),
            (this.type = 'heatmap');
        }
        async collectRequiredFields(e, t) {
          const r = this.field;
          r && 'string' == typeof r && (0, u.AB)(e, t, r);
        }
        getAttributeHash() {
          return null;
        }
        getMeshHash() {
          return `${JSON.stringify(this.colorStops)}.${this.blurRadius}.${
            this.field
          }`;
        }
        clone() {
          return new y({
            blurRadius: this.blurRadius,
            referenceScale: this.referenceScale,
            colorStops: (0, o.d9)(this.colorStops),
            field: this.field,
            maxPixelIntensity: this.maxPixelIntensity,
            minPixelIntensity: this.minPixelIntensity,
          });
        }
      });
      (0, s._)(
        [(0, l.Cb)({ type: Number, json: { write: !0 } })],
        f.prototype,
        'blurRadius',
        void 0,
      ),
        (0, s._)(
          [(0, l.Cb)({ type: Number })],
          f.prototype,
          'referenceScale',
          void 0,
        ),
        (0, s._)(
          [(0, l.Cb)({ type: [b], json: { write: !0 } })],
          f.prototype,
          'colorStops',
          void 0,
        ),
        (0, s._)(
          [(0, l.Cb)({ type: String, json: { write: !0 } })],
          f.prototype,
          'field',
          void 0,
        ),
        (0, s._)(
          [
            (0, l.Cb)({
              type: Number,
              json: {
                write: {
                  overridePolicy: (e, t, r) => ({ enabled: null == r }),
                },
              },
            }),
          ],
          f.prototype,
          'fieldOffset',
          void 0,
        ),
        (0, s._)(
          [(0, l.Cb)({ type: Number, json: { write: !0 } })],
          f.prototype,
          'maxPixelIntensity',
          void 0,
        ),
        (0, s._)(
          [(0, l.Cb)({ type: Number, json: { write: !0 } })],
          f.prototype,
          'minPixelIntensity',
          void 0,
        ),
        (0, s._)(
          [(0, a.J)({ heatmap: 'heatmap' })],
          f.prototype,
          'type',
          void 0,
        ),
        (f = y = (0, s._)([(0, c.j)('esri.renderers.HeatmapRenderer')], f));
      const m = f;
    },
    84382: (e, t, r) => {
      r.d(t, { Z: () => h });
      var i,
        s = r(43697),
        n = r(22974),
        o = r(5600),
        l = (r(75215), r(36030)),
        a = r(52011),
        c = r(5499),
        u = r(12571),
        p = r(9833);
      let d = (i = class extends (0, u.W)(c.Z) {
        constructor(e) {
          super(e),
            (this.description = null),
            (this.label = null),
            (this.symbol = null),
            (this.type = 'simple');
        }
        async collectRequiredFields(e, t) {
          await Promise.all([
            this.collectSymbolFields(e, t),
            this.collectVVRequiredFields(e, t),
          ]);
        }
        async collectSymbolFields(e, t) {
          await Promise.all(
            this.getSymbols().map((r) => r.collectRequiredFields(e, t)),
          );
        }
        getSymbol(e, t) {
          return this.symbol;
        }
        async getSymbolAsync(e, t) {
          return this.symbol;
        }
        getSymbols() {
          return this.symbol ? [this.symbol] : [];
        }
        getAttributeHash() {
          return (
            this.visualVariables &&
            this.visualVariables.reduce((e, t) => e + t.getAttributeHash(), '')
          );
        }
        getMeshHash() {
          return this.getSymbols().reduce((e, t) => e + JSON.stringify(t), '');
        }
        get arcadeRequired() {
          return this.arcadeRequiredForVisualVariables;
        }
        clone() {
          return new i({
            description: this.description,
            label: this.label,
            symbol: this.symbol && this.symbol.clone(),
            visualVariables: (0, n.d9)(this.visualVariables),
            authoringInfo: this.authoringInfo && this.authoringInfo.clone(),
          });
        }
      });
      (0, s._)(
        [(0, o.Cb)({ type: String, json: { write: !0 } })],
        d.prototype,
        'description',
        void 0,
      ),
        (0, s._)(
          [(0, o.Cb)({ type: String, json: { write: !0 } })],
          d.prototype,
          'label',
          void 0,
        ),
        (0, s._)([(0, o.Cb)(p.G)], d.prototype, 'symbol', void 0),
        (0, s._)([(0, l.J)({ simple: 'simple' })], d.prototype, 'type', void 0),
        (d = i = (0, s._)([(0, a.j)('esri.renderers.SimpleRenderer')], d));
      const h = d;
    },
    84475: (e, t, r) => {
      r.r(t), r.d(t, { DictionaryLoader: () => y });
      var i = r(22303),
        s = r(3172),
        n = r(20102),
        o = r(92604),
        l = r(13867),
        a = r(70586),
        c = r(95330),
        u = r(19153),
        p = r(59266),
        d = r(17386);
      const h = o.Z.getLogger('esri.renderers.support.DictionaryLoader'),
        b = {
          type: 'CIMSimpleLineCallout',
          lineSymbol: {
            type: 'CIMLineSymbol',
            symbolLayers: [
              { type: 'CIMSolidStroke', width: 0.5, color: [0, 0, 0, 255] },
            ],
          },
        };
      class y {
        constructor(e, t, r) {
          (this.config = null),
            (this.fieldMap = null),
            (this.url = null),
            (this._ongoingRequests = new Map()),
            (this._symbolCache = new l.Z(100)),
            (this.url = e),
            (this.config = t),
            (this.fieldMap = r);
        }
        getSymbolFields() {
          return this._symbolFields;
        }
        async getSymbolAsync(e, t) {
          let r;
          this._dictionaryPromise ||
            (this._dictionaryPromise = this.fetchResources(t));
          try {
            r = await this._dictionaryPromise;
          } catch (e) {
            if ((0, c.D_)(e)) return (this._dictionaryPromise = null), null;
          }
          const s = {};
          if (this.fieldMap)
            for (const t of this._symbolFields) {
              const r = this.fieldMap[t];
              if (r && null != e.attributes[r]) {
                const i = '' + e.attributes[r];
                s[t] = i;
              } else s[t] = '';
            }
          const n = r(s, t);
          if (!n || 'string' != typeof n) return null;
          const o = (0, u.hP)(n).toString(),
            l = this._symbolCache.get(o);
          if (l)
            return (
              l.catch(() => {
                this._symbolCache.pop(o);
              }),
              l
            );
          const p = n.split(';'),
            d = [],
            h = [];
          for (const e of p)
            if (e)
              if (e.includes('po:')) {
                const t = e.substr(3).split('|');
                if (3 === t.length) {
                  const e = t[0],
                    r = t[1];
                  let s = t[2];
                  if ('DashTemplate' === r)
                    s = s.split(' ').map((e) => Number(e));
                  else if ('Color' === r) {
                    const e = new i.Z(s).toRgba();
                    s = [e[0], e[1], e[2], 255 * e[3]];
                  } else s = Number(s);
                  h.push({ primitiveName: e, propertyName: r, value: s });
                }
              } else if (e.includes('|')) {
                for (const t of e.split('|'))
                  if (this._itemNames.has(t)) {
                    d.push(t);
                    break;
                  }
              } else this._itemNames.has(e) && d.push(e);
          const b =
              !(0, a.pC)(e.geometry) ||
              (!e.geometry.hasZ && 'point' === e.geometry.type),
            y = this._cimPartsToCIMSymbol(d, h, b, t);
          return this._symbolCache.put(o, y, 1), y;
        }
        async fetchResources(e) {
          if (this._dictionaryPromise) return this._dictionaryPromise;
          if (!this.url) return void h.error('no valid URL!');
          const t = (0, a.pC)(e) ? e.abortOptions : null,
            r = (0, s.default)(
              this.url + '/resources/styles/dictionary-info.json',
              { responseType: 'json', query: { f: 'json' }, ...t },
            ),
            [{ data: i }] = await Promise.all([r, (0, p.LC)()]);
          if (!i)
            throw (
              ((this._dictionaryPromise = null),
              new n.Z(
                'esri.renderers.DictionaryRenderer',
                'Bad dictionary data!',
              ))
            );
          const o = i.expression,
            l = i.authoringInfo;
          (this._refSymbolUrlTemplate = this.url + '/' + i.cimRefTemplateUrl),
            (this._itemNames = new Set(i.itemsNames)),
            (this._symbolFields = l.symbol);
          const c = {};
          if (this.config) {
            const e = this.config;
            for (const t in e) c[t] = e[t];
          }
          if (l.configuration)
            for (const e of l.configuration)
              c.hasOwnProperty(e.name) || (c[e.name] = e.value);
          const u = [];
          if ((0, a.pC)(e) && e.fields && this.fieldMap)
            for (const t of this._symbolFields) {
              const r = this.fieldMap[t],
                i = e.fields.filter((e) => e.name === r);
              i.length > 0 && u.push({ ...i[0], name: t });
            }
          return (
            (this._dictionaryPromise = (0, p.pp)(
              o,
              (0, a.pC)(e) ? e.spatialReference : null,
              u,
              c,
            )
              .then((e) => {
                const t = { scale: 0 };
                return (r, i) => {
                  const s = e.repurposeFeature({
                    geometry: null,
                    attributes: r,
                  });
                  return (
                    (t.scale = (0, a.pC)(i) ? i.scale : void 0),
                    e.evaluate({ $feature: s, $view: t })
                  );
                };
              })
              .catch(
                (e) => (
                  h.error('Creating dictinoary expression failed:', e), null
                ),
              )),
            this._dictionaryPromise
          );
        }
        async _cimPartsToCIMSymbol(e, t, r, i) {
          const s = new Array(e.length);
          for (let t = 0; t < e.length; t++)
            s[t] = this._getSymbolPart(e[t], i);
          const n = await Promise.all(s),
            o = this.fieldMap;
          for (const e of n) f(e, o);
          return new d.Z({ data: this._combineSymbolParts(n, t, r) });
        }
        async _getSymbolPart(e, t) {
          if (this._ongoingRequests.has(e))
            return this._ongoingRequests.get(e).then((e) => e.data);
          const r = this._refSymbolUrlTemplate.replace(/\{itemName\}/gi, e),
            i = (0, s.default)(r, {
              responseType: 'json',
              query: { f: 'json' },
              ...t,
            });
          this._ongoingRequests.set(e, i);
          try {
            return (await i).data;
          } catch (t) {
            return this._ongoingRequests.delete(e), Promise.reject(t);
          }
        }
        _combineSymbolParts(e, t, r) {
          if (!e || 0 === e.length) return null;
          const i = { ...e[0] };
          if (e.length > 1) {
            i.symbolLayers = [];
            for (const t of e) {
              const e = t;
              i.symbolLayers.unshift(...e.symbolLayers);
            }
          }
          return (
            r && (i.callout = b),
            { type: 'CIMSymbolReference', symbol: i, primitiveOverrides: t }
          );
        }
      }
      function f(e, t) {
        if (!e) return;
        const r = e.symbolLayers;
        if (!r) return;
        let i = r.length;
        for (; i--; ) {
          const e = r[i];
          e && !1 !== e.enable && 'CIMVectorMarker' === e.type && m(e, t);
        }
      }
      function m(e, t) {
        const r = e.markerGraphics;
        if (r)
          for (const e of r) {
            if (!e) continue;
            const r = e.symbol;
            if (r)
              switch (r.type) {
                case 'CIMPointSymbol':
                case 'CIMLineSymbol':
                case 'CIMPolygonSymbol':
                  f(r, t);
                  break;
                case 'CIMTextSymbol':
                  r.fieldMap = t;
              }
          }
      }
    },
    91423: (e, t, r) => {
      r.d(t, { a: () => l });
      var i = r(20941),
        s = r(63213),
        n = r(32400);
      const o = (0, s.d)({ types: n.A });
      function l(e, t, r) {
        return e
          ? e && (e.styleName || e.styleUrl) && 'uniqueValue' !== e.type
            ? (r &&
                r.messages &&
                r.messages.push(
                  new i.Z(
                    'renderer:unsupported',
                    "Only UniqueValueRenderer can be referenced from a web style, but found '" +
                      e.type +
                      "'",
                    { definition: e, context: r },
                  ),
                ),
              null)
            : o(e, t, r)
          : null;
      }
    },
    32400: (e, t, r) => {
      r.d(t, { A: () => u, o: () => p });
      var i = r(16050),
        s = r(12501),
        n = r(95088),
        o = r(79056),
        l = r(5499),
        a = r(84382),
        c = r(30687);
      const u = {
          key: 'type',
          base: l.Z,
          typeMap: {
            heatmap: o.Z,
            simple: a.Z,
            'unique-value': c.Z,
            'class-breaks': i.Z,
            'dot-density': n.Z,
            dictionary: s.Z,
          },
          errorContext: 'renderer',
        },
        p = {
          key: 'type',
          base: l.Z,
          typeMap: { simple: a.Z, 'unique-value': c.Z, 'class-breaks': i.Z },
          errorContext: 'renderer',
        };
    },
    32163: (e, t, r) => {
      r.d(t, { eZ: () => p });
      var i = r(51773),
        s = r(35671),
        n = r(84649),
        o = (r(63801), r(48074), r(38745), r(9190)),
        l = (r(10214), r(44951), r(422)),
        a = r(63061);
      const c = ['oid', 'global-id'],
        u = ['oid', 'global-id', 'guid'];
      function p(
        {
          displayField: e,
          editFieldsInfo: t,
          fields: r,
          objectIdField: a,
          title: c,
        },
        u,
      ) {
        if (!r) return null;
        const p = (function (
          { editFieldsInfo: e, fields: t, objectIdField: r },
          i,
        ) {
          return (function (e, t) {
            const r = e;
            return (
              t && (e = e.filter((e) => -1 === t.indexOf(e.type))),
              e === r && (e = e.slice()),
              e.sort(b),
              e
            );
          })(t, (null == i ? void 0 : i.ignoreFieldTypes) || v).map(
            (t) =>
              new l.Z({
                fieldName: t.name,
                isEditable: f(t, e),
                label: t.alias,
                format: m(t),
                visible: h(t, {
                  editFieldsInfo: e,
                  objectIdField: r,
                  visibleFieldNames: null == i ? void 0 : i.visibleFieldNames,
                }),
              }),
          );
        })({ editFieldsInfo: t, fields: r, objectIdField: a }, u);
        if (!p.length) return null;
        const d = (function (e) {
            const t = (0, s.O5)(e),
              { titleBase: r } = e;
            return t ? `${r}: {${t.trim()}}` : r;
          })({ titleBase: c, fields: r, displayField: e }),
          y = [new o.Z(), new n.Z()];
        return new i.Z({ title: d, content: y, fieldInfos: p });
      }
      const d = [
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
        h = (
          e,
          { editFieldsInfo: t, objectIdField: r, visibleFieldNames: i },
        ) =>
          i
            ? i.has(e.name)
            : !(
                y(e.name, t) ||
                (r && e.name === r) ||
                c.indexOf(e.type) > -1 ||
                d.some((t) => t.test(e.name))
              );
      function b(e, t) {
        return 'oid' === e.type
          ? -1
          : 'oid' === t.type
          ? 1
          : g(e)
          ? -1
          : g(t)
          ? 1
          : (e.alias || e.name)
              .toLocaleLowerCase()
              .localeCompare((t.alias || t.name).toLocaleLowerCase());
      }
      function y(e, t) {
        if (!e || !t) return !1;
        const {
          creationDateField: r,
          creatorField: i,
          editDateField: s,
          editorField: n,
        } = t;
        return (
          -1 !==
          [
            r && r.toLowerCase(),
            i && i.toLowerCase(),
            s && s.toLowerCase(),
            n && n.toLowerCase(),
          ].indexOf(e.toLowerCase())
        );
      }
      function f(e, t) {
        return e.editable && -1 === u.indexOf(e.type) && !y(e.name, t);
      }
      function m(e) {
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
      function g(e) {
        return (
          'name' === (e.name && e.name.toLowerCase()) ||
          'name' === (e.alias && e.alias.toLowerCase()) ||
          void 0
        );
      }
      const v = ['geometry', 'blob', 'raster', 'guid', 'xml'];
    },
  },
]);
