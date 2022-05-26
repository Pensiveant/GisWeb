'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [8739],
  {
    38171: (e, t, i) => {
      i.d(t, { Z: () => y });
      var n = i(43697),
        r = i(66577),
        a = i(51773),
        s = i(78223),
        o = i(2368),
        l = i(96674),
        u = i(70586),
        c = i(99001),
        p = i(5600),
        f = (i(67676), i(80442), i(75215), i(52011)),
        d = i(33955);
      function m(e) {
        if (!(0, u.pC)(e)) return null;
        const t = {};
        for (const i in e) {
          const n = e[i];
          n && (t[i] = n.toJSON());
        }
        return 0 !== Object.keys(t).length ? t : null;
      }
      let h = class extends (0, o.J)(l.wq) {
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
        normalizeCtorArgs(e, t, i, n) {
          return e && !e.declaredClass
            ? e
            : { geometry: e, symbol: t, attributes: i, popupTemplate: n };
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
            const i = this.getAttribute(e);
            (this.attributes[e] = t), this._notifyLayer('attributes', i, t, e);
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
            aggregateGeometries: m(this.aggregateGeometries),
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
        _notifyLayer(e, t, i, n) {
          if (!this.layer || !('graphicChanged' in this.layer)) return;
          const r = { graphic: this, property: e, oldValue: t, newValue: i };
          'attributes' === e && (r.attributeName = n),
            this.layer.graphicChanged(r);
        }
      };
      (0, n._)(
        [
          (0, p.Cb)({
            value: null,
            json: {
              read: function (e) {
                if (!e) return null;
                const t = {};
                for (const i in e) {
                  const n = (0, d.im)(e[i]);
                  n && (t[i] = n);
                }
                return 0 !== Object.keys(t).length ? t : null;
              },
            },
          }),
        ],
        h.prototype,
        'aggregateGeometries',
        null,
      ),
        (0, n._)([(0, p.Cb)({ value: null })], h.prototype, 'attributes', null),
        (0, n._)(
          [(0, p.Cb)({ value: null, types: r.qM, json: { read: d.im } })],
          h.prototype,
          'geometry',
          null,
        ),
        (0, n._)(
          [(0, p.Cb)({ type: Boolean })],
          h.prototype,
          'isAggregate',
          void 0,
        ),
        (0, n._)(
          [(0, p.Cb)({ clonable: 'reference' })],
          h.prototype,
          'layer',
          void 0,
        ),
        (0, n._)(
          [(0, p.Cb)({ type: a.Z })],
          h.prototype,
          'popupTemplate',
          void 0,
        ),
        (0, n._)(
          [(0, p.Cb)({ clonable: 'reference' })],
          h.prototype,
          'sourceLayer',
          void 0,
        ),
        (0, n._)(
          [(0, p.Cb)({ value: null, types: s.LB })],
          h.prototype,
          'symbol',
          null,
        ),
        (0, n._)(
          [(0, p.Cb)({ type: Boolean, value: !0 })],
          h.prototype,
          'visible',
          null,
        ),
        (h = (0, n._)([(0, f.j)('esri.Graphic')], h)),
        ((h || (h = {})).generateUID = c.D);
      const y = h;
    },
    74085: (e, t, i) => {
      function n(e) {}
      i.d(t, { Bg: () => n }), i(80442);
    },
    91040: (e, t, i) => {
      i.d(t, { yZ: () => r });
      var n = i(67900);
      function r(e, t) {
        const i = t || e.extent,
          r = e.width,
          a = (0, n.c9)(i && i.spatialReference);
        return i && r ? (i.width / r) * a * n.hd * 96 : 0;
      }
    },
    99282: (e, t, i) => {
      i.d(t, { a: () => a });
      var n = i(67900),
        r = i(68441);
      const a = {
        inches: (0, n.En)(1, 'meters', 'inches'),
        feet: (0, n.En)(1, 'meters', 'feet'),
        'us-feet': (0, n.En)(1, 'meters', 'us-feet'),
        yards: (0, n.En)(1, 'meters', 'yards'),
        miles: (0, n.En)(1, 'meters', 'miles'),
        'nautical-miles': (0, n.En)(1, 'meters', 'nautical-miles'),
        millimeters: (0, n.En)(1, 'meters', 'millimeters'),
        centimeters: (0, n.En)(1, 'meters', 'centimeters'),
        decimeters: (0, n.En)(1, 'meters', 'decimeters'),
        meters: (0, n.En)(1, 'meters', 'meters'),
        kilometers: (0, n.En)(1, 'meters', 'kilometers'),
        'decimal-degrees': 1 / (0, n.ty)(1, 'meters', r.sv.radius),
      };
    },
    51706: (e, t, i) => {
      var n, r;
      function a(e) {
        return (
          e && 'esri.renderers.visualVariables.SizeVariable' === e.declaredClass
        );
      }
      function s(e) {
        return null != e && !isNaN(e) && isFinite(e);
      }
      function o(e) {
        return e.valueExpression
          ? n.Expression
          : e.field && 'string' == typeof e.field
          ? n.Field
          : n.Unknown;
      }
      function l(e, t) {
        const i = t || o(e),
          a = e.valueUnit || 'unknown';
        return i === n.Unknown
          ? r.Constant
          : e.stops
          ? r.Stops
          : null != e.minSize &&
            null != e.maxSize &&
            null != e.minDataValue &&
            null != e.maxDataValue
          ? r.ClampedLinear
          : 'unknown' === a
          ? null != e.minSize && null != e.minDataValue
            ? e.minSize && e.minDataValue
              ? r.Proportional
              : r.Additive
            : r.Identity
          : r.RealWorldSize;
      }
      i.d(t, {
        RY: () => n,
        hL: () => r,
        PS: () => o,
        QW: () => l,
        iY: () => a,
        qh: () => s,
      }),
        (function (e) {
          (e.Unknown = 'unknown'),
            (e.Expression = 'expression'),
            (e.Field = 'field');
        })(n || (n = {})),
        (function (e) {
          (e.Unknown = 'unknown'),
            (e.Stops = 'stops'),
            (e.ClampedLinear = 'clamped-linear'),
            (e.Proportional = 'proportional'),
            (e.Additive = 'additive'),
            (e.Constant = 'constant'),
            (e.Identity = 'identity'),
            (e.RealWorldSize = 'real-world-size');
        })(r || (r = {}));
    },
    28101: (e, t, i) => {
      i.d(t, {
        PR: () => C,
        Lq: () => m,
        Km: () => h,
        cM: () => y,
        ap: () => b,
        V3: () => V,
        B3: () => d,
      });
      var n = i(22303),
        r = i(38171),
        a = i(74085),
        s = i(92604),
        o = i(70586),
        l = i(99282),
        u = i(51706);
      const c = s.Z.getLogger(
          'esri.renderers.visualVariables.support.visualVariableUtils',
        ),
        p = new r.Z(),
        f = Math.PI,
        d = /^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i;
      function m(e, t, i) {
        const r =
          'visualVariables' in e && e.visualVariables
            ? e.visualVariables.find((e) => 'color' === e.type)
            : e;
        if (!r) return;
        if ('esri.renderers.visualVariables.ColorVariable' !== r.declaredClass)
          return void c.warn(
            'The visualVariable should be an instance of esri.renderers.visualVariables.ColorVariable',
          );
        const a = 'number' == typeof t,
          s = a ? null : t,
          l = s && s.attributes;
        let u = a ? t : null;
        const p = r.field,
          { ipData: f, hasExpression: d } = r.cache;
        let m = r.cache.compiledFunc;
        if (!p && !d) {
          const e = r.stops;
          return e && e[0] && e[0].color;
        }
        if ('number' != typeof u)
          if (d) {
            if (!(0, o.pC)(i) || !(0, o.pC)(i.arcade))
              return void c.error(
                'Use of arcade expressions requires an arcade context',
              );
            const e = {
                viewingMode: i.viewingMode,
                scale: i.scale,
                spatialReference: i.spatialReference,
              },
              t = i.arcade.arcadeUtils,
              n = t.getViewInfo(e),
              a = t.createExecContext(s, n);
            if (!m) {
              const e = t.createSyntaxTree(r.valueExpression);
              (m = t.createFunction(e)), (r.cache.compiledFunc = m);
            }
            u = t.executeFunction(m, a);
          } else l && (u = l[p]);
        const h = r.normalizationField,
          y = l ? parseFloat(l[h]) : void 0;
        if (null != u && (!h || a || (!isNaN(y) && 0 !== y))) {
          isNaN(y) || a || (u /= y);
          const e = x(u, f);
          if (e) {
            const t = e[0],
              a = e[1],
              s =
                t === a
                  ? r.stops[t].color
                  : n.Z.blendColors(
                      r.stops[t].color,
                      r.stops[a].color,
                      e[2],
                      (0, o.pC)(i) ? i.color : void 0,
                    );
            return new n.Z(s);
          }
        }
      }
      function h(e, t, i) {
        const n =
          'visualVariables' in e && e.visualVariables
            ? e.visualVariables.find((e) => 'opacity' === e.type)
            : e;
        if (!n) return;
        if (
          'esri.renderers.visualVariables.OpacityVariable' !== n.declaredClass
        )
          return void c.warn(
            'The visualVariable should be an instance of esri.renderers.visualVariables.OpacityVariable',
          );
        const r = 'number' == typeof t,
          a = r ? null : t,
          s = a && a.attributes;
        let l = r ? t : null;
        const u = n.field,
          { ipData: p, hasExpression: f } = n.cache;
        let d = n.cache.compiledFunc;
        if (!u && !f) {
          const e = n.stops;
          return e && e[0] && e[0].opacity;
        }
        if ('number' != typeof l)
          if (f) {
            if ((0, o.Wi)(i) || (0, o.Wi)(i.arcade))
              return void c.error(
                'Use of arcade expressions requires an arcade context',
              );
            const e = {
                viewingMode: i.viewingMode,
                scale: i.scale,
                spatialReference: i.spatialReference,
              },
              t = i.arcade.arcadeUtils,
              r = t.getViewInfo(e),
              s = t.createExecContext(a, r);
            if (!d) {
              const e = t.createSyntaxTree(n.valueExpression);
              (d = t.createFunction(e)), (n.cache.compiledFunc = d);
            }
            l = t.executeFunction(d, s);
          } else s && (l = s[u]);
        const m = n.normalizationField,
          h = s ? parseFloat(s[m]) : void 0;
        if (null != l && (!m || r || (!isNaN(h) && 0 !== h))) {
          isNaN(h) || r || (l /= h);
          const e = x(l, p);
          if (e) {
            const t = e[0],
              i = e[1];
            if (t === i) return n.stops[t].opacity;
            {
              const r = n.stops[t].opacity;
              return r + (n.stops[i].opacity - r) * e[2];
            }
          }
        }
      }
      function y(e, t, i) {
        const n =
          'visualVariables' in e && e.visualVariables
            ? e.visualVariables.find((e) => 'rotation' === e.type)
            : e;
        if (!n) return;
        if (
          'esri.renderers.visualVariables.RotationVariable' !== n.declaredClass
        )
          return void c.warn(
            'The visualVariable should be an instance of esri.renderers.visualVariables.RotationVariable',
          );
        const r = n.axis || 'heading',
          a = 'heading' === r && 'arithmetic' === n.rotationType ? 90 : 0,
          s = 'heading' === r && 'arithmetic' === n.rotationType ? -1 : 1,
          l = 'number' == typeof t ? null : t,
          u = l && l.attributes,
          p = n.field,
          { hasExpression: f } = n.cache;
        let d = n.cache.compiledFunc,
          m = 0;
        if (!p && !f) return m;
        if (f) {
          if ((0, o.Wi)(i) || (0, o.Wi)(i.arcade))
            return void c.error(
              'Use of arcade expressions requires an arcade context',
            );
          const e = {
              viewingMode: i.viewingMode,
              scale: i.scale,
              spatialReference: i.spatialReference,
            },
            t = i.arcade.arcadeUtils,
            r = t.getViewInfo(e),
            a = t.createExecContext(l, r);
          if (!d) {
            const e = t.createSyntaxTree(n.valueExpression);
            (d = t.createFunction(e)), (n.cache.compiledFunc = d);
          }
          m = t.executeFunction(d, a);
        } else u && (m = u[p] || 0);
        return (m = 'number' != typeof m || isNaN(m) ? null : a + s * m), m;
      }
      function b(e, t, i) {
        const n =
          'visualVariables' in e && e.visualVariables
            ? e.visualVariables.find((e) => 'size' === e.type)
            : e;
        if (!n) return;
        if ('esri.renderers.visualVariables.SizeVariable' !== n.declaredClass)
          return void c.warn(
            'The visualVariable should be an instance of esri.renderers.visualVariables.SizeVariable',
          );
        const r = (function (e, t, i, n, r) {
          switch (t.transformationType) {
            case u.hL.Additive:
              return (function (e, t, i, n) {
                return e + (v(t.minSize, i, n) || t.minDataValue);
              })(e, t, i, n);
            case u.hL.Constant:
              return (function (e, t, i) {
                const n = e.stops;
                let r = n && n.length && n[0].size;
                return null == r && (r = e.minSize), v(r, t, i);
              })(t, i, n);
            case u.hL.ClampedLinear:
              return (function (e, t, i, n) {
                const r =
                    (e - t.minDataValue) / (t.maxDataValue - t.minDataValue),
                  a = v(t.minSize, i, n),
                  s = v(t.maxSize, i, n),
                  l = (0, o.pC)(n) ? n.shape : void 0;
                if (e <= t.minDataValue) return a;
                if (e >= t.maxDataValue) return s;
                if ('area' === t.scaleBy && l) {
                  const e = 'circle' === l,
                    t = e ? f * (a / 2) ** 2 : a * a,
                    i = t + r * ((e ? f * (s / 2) ** 2 : s * s) - t);
                  return e ? 2 * Math.sqrt(i / f) : Math.sqrt(i);
                }
                return a + r * (s - a);
              })(e, t, i, n);
            case u.hL.Proportional:
              return (function (e, t, i, n) {
                const r = (0, o.pC)(n) ? n.shape : void 0,
                  a = e / t.minDataValue,
                  s = v(t.minSize, i, n),
                  l = v(t.maxSize, i, n);
                let u = null;
                return (
                  (u =
                    'circle' === r
                      ? 2 * Math.sqrt(a * (s / 2) ** 2)
                      : 'square' === r || 'diamond' === r || 'image' === r
                      ? Math.sqrt(a * s ** 2)
                      : a * s),
                  g(u, s, l)
                );
              })(e, t, i, n);
            case u.hL.Stops:
              return (function (e, t, i, n, r) {
                const [a, s, o] = x(e, r);
                if (a === s) return v(t.stops[a].size, i, n);
                {
                  const e = v(t.stops[a].size, i, n);
                  return e + (v(t.stops[s].size, i, n) - e) * o;
                }
              })(e, t, i, n, r);
            case u.hL.RealWorldSize:
              return (function (e, t, i, n) {
                const r =
                    ((0, o.pC)(n) && n.resolution ? n.resolution : 1) *
                    l.a[t.valueUnit],
                  a = v(t.minSize, i, n),
                  s = v(t.maxSize, i, n),
                  { valueRepresentation: u } = t;
                let c = null;
                return (
                  (c =
                    'area' === u
                      ? (2 * Math.sqrt(e / f)) / r
                      : 'radius' === u || 'distance' === u
                      ? (2 * e) / r
                      : e / r),
                  g(c, a, s)
                );
              })(e, t, i, n);
            case u.hL.Identity:
              return e;
            case u.hL.Unknown:
              return null;
          }
        })(
          (function (e, t, i) {
            const n = 'number' == typeof t,
              r = n ? null : t,
              a = r && r.attributes;
            let s = n ? t : null;
            const { isScaleDriven: l } = e.cache;
            let p = e.cache.compiledFunc;
            if (l) {
              const t = (0, o.pC)(i) ? i.scale : void 0,
                n = (0, o.pC)(i) ? i.view : void 0;
              s =
                null == t || '3d' === n
                  ? (function (e) {
                      let t = null,
                        i = null;
                      const n = e.stops;
                      return (
                        n
                          ? ((t = n[0].value), (i = n[n.length - 1].value))
                          : ((t = e.minDataValue || 0),
                            (i = e.maxDataValue || 0)),
                        (t + i) / 2
                      );
                    })(e)
                  : t;
            } else if (!n)
              switch (e.inputValueType) {
                case u.RY.Expression: {
                  if ((0, o.Wi)(i) || (0, o.Wi)(i.arcade))
                    return void c.error(
                      'Use of arcade expressions requires an arcade context',
                    );
                  const t = {
                      viewingMode: i.viewingMode,
                      scale: i.scale,
                      spatialReference: i.spatialReference,
                    },
                    n = i.arcade.arcadeUtils,
                    a = n.getViewInfo(t),
                    l = n.createExecContext(r, a);
                  if (!p) {
                    const t = n.createSyntaxTree(e.valueExpression);
                    (p = n.createFunction(t)), (e.cache.compiledFunc = p);
                  }
                  s = n.executeFunction(p, l);
                  break;
                }
                case u.RY.Field:
                  a && (s = a[e.field]);
                  break;
                case u.RY.Unknown:
                  s = null;
              }
            if (!(0, u.qh)(s)) return null;
            if (n || !e.normalizationField) return s;
            const f = a ? parseFloat(a[e.normalizationField]) : null;
            return (0, u.qh)(f) && 0 !== f ? s / f : null;
          })(n, t, i),
          n,
          t,
          i,
          n.cache.ipData,
        );
        return null == r || isNaN(r) ? 0 : r;
      }
      function v(e, t, i) {
        return null == e
          ? null
          : (0, u.iY)(e)
          ? b(e, t, i)
          : (0, u.qh)(e)
          ? e
          : null;
      }
      function g(e, t, i) {
        return (0, u.qh)(i) && e > i ? i : (0, u.qh)(t) && e < t ? t : e;
      }
      function V(e, t, i) {
        const { isScaleDriven: n } = e.cache;
        if (!((n && '3d' === i) || t)) return null;
        const r = { scale: t, view: i };
        let a = v(e.minSize, p, r),
          s = v(e.maxSize, p, r);
        if (null != a || null != s) {
          if (a > s) {
            const e = s;
            (s = a), (a = e);
          }
          return { minSize: a, maxSize: s };
        }
      }
      function x(e, t) {
        if (!t) return;
        let i = 0,
          n = t.length - 1;
        return (
          t.some((t, r) => (e < t ? ((n = r), !0) : ((i = r), !1))),
          [i, n, (e - t[i]) / (t[n] - t[i])]
        );
      }
      function C(e, t, i) {
        const n = ['proportional', 'proportional', 'proportional'];
        for (const r of e) {
          const e = r.useSymbolValue ? 'symbol-value' : b(r, t, i);
          switch (r.axis) {
            case 'width':
              n[0] = e;
              break;
            case 'depth':
              n[1] = e;
              break;
            case 'height':
              n[2] = e;
              break;
            case 'width-and-depth':
              (n[0] = e), (n[1] = e);
              break;
            case 'all':
            case void 0:
            case null:
              (n[0] = e), (n[1] = e), (n[2] = e);
              break;
            default:
              (0, a.Bg)(r.axis);
          }
        }
        return n;
      }
    },
    410: (e, t, i) => {
      function n(e) {
        var t;
        const i = e.layer;
        return 'floorInfo' in i &&
          null != (t = i.floorInfo) &&
          t.floorField &&
          'floors' in e.view
          ? s(e.view.floors, i.floorInfo.floorField)
          : null;
      }
      function r(e, t) {
        var i;
        return 'floorInfo' in t && null != (i = t.floorInfo) && i.floorField
          ? s(e, t.floorInfo.floorField)
          : null;
      }
      function a(e, t) {
        const { definitionExpression: i } = t;
        return e ? (i ? `(${i}) AND (${e})` : e) : i;
      }
      function s(e, t) {
        if (null == e || !e.length) return null;
        const i = e.filter((e) => '' !== e).map((e) => `'${e}'`);
        return i.push("''"), `${t} IN (${i.join(',')}) OR ${t} IS NULL`;
      }
      i.d(t, { Hp: () => a, cx: () => n, ff: () => r });
    },
  },
]);
