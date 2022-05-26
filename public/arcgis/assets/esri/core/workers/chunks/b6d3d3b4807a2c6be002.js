'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [6619, 8739, 4889],
  {
    38171: (e, t, r) => {
      r.d(t, { Z: () => h });
      var i = r(43697),
        n = r(66577),
        a = r(51773),
        s = r(78223),
        o = r(2368),
        l = r(96674),
        u = r(70586),
        c = r(99001),
        p = r(5600),
        y = (r(67676), r(80442), r(75215), r(52011)),
        d = r(33955);
      function f(e) {
        if (!(0, u.pC)(e)) return null;
        const t = {};
        for (const r in e) {
          const i = e[r];
          i && (t[r] = i.toJSON());
        }
        return 0 !== Object.keys(t).length ? t : null;
      }
      let m = class extends (0, o.J)(l.wq) {
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
          const n = { graphic: this, property: e, oldValue: t, newValue: r };
          'attributes' === e && (n.attributeName = i),
            this.layer.graphicChanged(n);
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
                  const i = (0, d.im)(e[r]);
                  i && (t[r] = i);
                }
                return 0 !== Object.keys(t).length ? t : null;
              },
            },
          }),
        ],
        m.prototype,
        'aggregateGeometries',
        null,
      ),
        (0, i._)([(0, p.Cb)({ value: null })], m.prototype, 'attributes', null),
        (0, i._)(
          [(0, p.Cb)({ value: null, types: n.qM, json: { read: d.im } })],
          m.prototype,
          'geometry',
          null,
        ),
        (0, i._)(
          [(0, p.Cb)({ type: Boolean })],
          m.prototype,
          'isAggregate',
          void 0,
        ),
        (0, i._)(
          [(0, p.Cb)({ clonable: 'reference' })],
          m.prototype,
          'layer',
          void 0,
        ),
        (0, i._)(
          [(0, p.Cb)({ type: a.Z })],
          m.prototype,
          'popupTemplate',
          void 0,
        ),
        (0, i._)(
          [(0, p.Cb)({ clonable: 'reference' })],
          m.prototype,
          'sourceLayer',
          void 0,
        ),
        (0, i._)(
          [(0, p.Cb)({ value: null, types: s.LB })],
          m.prototype,
          'symbol',
          null,
        ),
        (0, i._)(
          [(0, p.Cb)({ type: Boolean, value: !0 })],
          m.prototype,
          'visible',
          null,
        ),
        (m = (0, i._)([(0, y.j)('esri.Graphic')], m)),
        ((m || (m = {})).generateUID = c.D);
      const h = m;
    },
    74085: (e, t, r) => {
      function i(e) {}
      r.d(t, { Bg: () => i }), r(80442);
    },
    91040: (e, t, r) => {
      r.d(t, { yZ: () => n });
      var i = r(67900);
      function n(e, t) {
        const r = t || e.extent,
          n = e.width,
          a = (0, i.c9)(r && r.spatialReference);
        return r && n ? (r.width / n) * a * i.hd * 96 : 0;
      }
    },
    99282: (e, t, r) => {
      r.d(t, { a: () => a });
      var i = r(67900),
        n = r(68441);
      const a = {
        inches: (0, i.En)(1, 'meters', 'inches'),
        feet: (0, i.En)(1, 'meters', 'feet'),
        'us-feet': (0, i.En)(1, 'meters', 'us-feet'),
        yards: (0, i.En)(1, 'meters', 'yards'),
        miles: (0, i.En)(1, 'meters', 'miles'),
        'nautical-miles': (0, i.En)(1, 'meters', 'nautical-miles'),
        millimeters: (0, i.En)(1, 'meters', 'millimeters'),
        centimeters: (0, i.En)(1, 'meters', 'centimeters'),
        decimeters: (0, i.En)(1, 'meters', 'decimeters'),
        meters: (0, i.En)(1, 'meters', 'meters'),
        kilometers: (0, i.En)(1, 'meters', 'kilometers'),
        'decimal-degrees': 1 / (0, i.ty)(1, 'meters', n.sv.radius),
      };
    },
    51706: (e, t, r) => {
      var i, n;
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
          ? i.Expression
          : e.field && 'string' == typeof e.field
          ? i.Field
          : i.Unknown;
      }
      function l(e, t) {
        const r = t || o(e),
          a = e.valueUnit || 'unknown';
        return r === i.Unknown
          ? n.Constant
          : e.stops
          ? n.Stops
          : null != e.minSize &&
            null != e.maxSize &&
            null != e.minDataValue &&
            null != e.maxDataValue
          ? n.ClampedLinear
          : 'unknown' === a
          ? null != e.minSize && null != e.minDataValue
            ? e.minSize && e.minDataValue
              ? n.Proportional
              : n.Additive
            : n.Identity
          : n.RealWorldSize;
      }
      r.d(t, {
        RY: () => i,
        hL: () => n,
        PS: () => o,
        QW: () => l,
        iY: () => a,
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
        })(n || (n = {}));
    },
    28101: (e, t, r) => {
      r.d(t, {
        PR: () => x,
        Lq: () => f,
        Km: () => m,
        cM: () => h,
        ap: () => b,
        V3: () => w,
        B3: () => d,
      });
      var i = r(22303),
        n = r(38171),
        a = r(74085),
        s = r(92604),
        o = r(70586),
        l = r(99282),
        u = r(51706);
      const c = s.Z.getLogger(
          'esri.renderers.visualVariables.support.visualVariableUtils',
        ),
        p = new n.Z(),
        y = Math.PI,
        d = /^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i;
      function f(e, t, r) {
        const n =
          'visualVariables' in e && e.visualVariables
            ? e.visualVariables.find((e) => 'color' === e.type)
            : e;
        if (!n) return;
        if ('esri.renderers.visualVariables.ColorVariable' !== n.declaredClass)
          return void c.warn(
            'The visualVariable should be an instance of esri.renderers.visualVariables.ColorVariable',
          );
        const a = 'number' == typeof t,
          s = a ? null : t,
          l = s && s.attributes;
        let u = a ? t : null;
        const p = n.field,
          { ipData: y, hasExpression: d } = n.cache;
        let f = n.cache.compiledFunc;
        if (!p && !d) {
          const e = n.stops;
          return e && e[0] && e[0].color;
        }
        if ('number' != typeof u)
          if (d) {
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
              a = t.createExecContext(s, i);
            if (!f) {
              const e = t.createSyntaxTree(n.valueExpression);
              (f = t.createFunction(e)), (n.cache.compiledFunc = f);
            }
            u = t.executeFunction(f, a);
          } else l && (u = l[p]);
        const m = n.normalizationField,
          h = l ? parseFloat(l[m]) : void 0;
        if (null != u && (!m || a || (!isNaN(h) && 0 !== h))) {
          isNaN(h) || a || (u /= h);
          const e = S(u, y);
          if (e) {
            const t = e[0],
              a = e[1],
              s =
                t === a
                  ? n.stops[t].color
                  : i.Z.blendColors(
                      n.stops[t].color,
                      n.stops[a].color,
                      e[2],
                      (0, o.pC)(r) ? r.color : void 0,
                    );
            return new i.Z(s);
          }
        }
      }
      function m(e, t, r) {
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
        const n = 'number' == typeof t,
          a = n ? null : t,
          s = a && a.attributes;
        let l = n ? t : null;
        const u = i.field,
          { ipData: p, hasExpression: y } = i.cache;
        let d = i.cache.compiledFunc;
        if (!u && !y) {
          const e = i.stops;
          return e && e[0] && e[0].opacity;
        }
        if ('number' != typeof l)
          if (y) {
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
              n = t.getViewInfo(e),
              s = t.createExecContext(a, n);
            if (!d) {
              const e = t.createSyntaxTree(i.valueExpression);
              (d = t.createFunction(e)), (i.cache.compiledFunc = d);
            }
            l = t.executeFunction(d, s);
          } else s && (l = s[u]);
        const f = i.normalizationField,
          m = s ? parseFloat(s[f]) : void 0;
        if (null != l && (!f || n || (!isNaN(m) && 0 !== m))) {
          isNaN(m) || n || (l /= m);
          const e = S(l, p);
          if (e) {
            const t = e[0],
              r = e[1];
            if (t === r) return i.stops[t].opacity;
            {
              const n = i.stops[t].opacity;
              return n + (i.stops[r].opacity - n) * e[2];
            }
          }
        }
      }
      function h(e, t, r) {
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
        const n = i.axis || 'heading',
          a = 'heading' === n && 'arithmetic' === i.rotationType ? 90 : 0,
          s = 'heading' === n && 'arithmetic' === i.rotationType ? -1 : 1,
          l = 'number' == typeof t ? null : t,
          u = l && l.attributes,
          p = i.field,
          { hasExpression: y } = i.cache;
        let d = i.cache.compiledFunc,
          f = 0;
        if (!p && !y) return f;
        if (y) {
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
            n = t.getViewInfo(e),
            a = t.createExecContext(l, n);
          if (!d) {
            const e = t.createSyntaxTree(i.valueExpression);
            (d = t.createFunction(e)), (i.cache.compiledFunc = d);
          }
          f = t.executeFunction(d, a);
        } else u && (f = u[p] || 0);
        return (f = 'number' != typeof f || isNaN(f) ? null : a + s * f), f;
      }
      function b(e, t, r) {
        const i =
          'visualVariables' in e && e.visualVariables
            ? e.visualVariables.find((e) => 'size' === e.type)
            : e;
        if (!i) return;
        if ('esri.renderers.visualVariables.SizeVariable' !== i.declaredClass)
          return void c.warn(
            'The visualVariable should be an instance of esri.renderers.visualVariables.SizeVariable',
          );
        const n = (function (e, t, r, i, n) {
          switch (t.transformationType) {
            case u.hL.Additive:
              return (function (e, t, r, i) {
                return e + (g(t.minSize, r, i) || t.minDataValue);
              })(e, t, r, i);
            case u.hL.Constant:
              return (function (e, t, r) {
                const i = e.stops;
                let n = i && i.length && i[0].size;
                return null == n && (n = e.minSize), g(n, t, r);
              })(t, r, i);
            case u.hL.ClampedLinear:
              return (function (e, t, r, i) {
                const n =
                    (e - t.minDataValue) / (t.maxDataValue - t.minDataValue),
                  a = g(t.minSize, r, i),
                  s = g(t.maxSize, r, i),
                  l = (0, o.pC)(i) ? i.shape : void 0;
                if (e <= t.minDataValue) return a;
                if (e >= t.maxDataValue) return s;
                if ('area' === t.scaleBy && l) {
                  const e = 'circle' === l,
                    t = e ? y * (a / 2) ** 2 : a * a,
                    r = t + n * ((e ? y * (s / 2) ** 2 : s * s) - t);
                  return e ? 2 * Math.sqrt(r / y) : Math.sqrt(r);
                }
                return a + n * (s - a);
              })(e, t, r, i);
            case u.hL.Proportional:
              return (function (e, t, r, i) {
                const n = (0, o.pC)(i) ? i.shape : void 0,
                  a = e / t.minDataValue,
                  s = g(t.minSize, r, i),
                  l = g(t.maxSize, r, i);
                let u = null;
                return (
                  (u =
                    'circle' === n
                      ? 2 * Math.sqrt(a * (s / 2) ** 2)
                      : 'square' === n || 'diamond' === n || 'image' === n
                      ? Math.sqrt(a * s ** 2)
                      : a * s),
                  v(u, s, l)
                );
              })(e, t, r, i);
            case u.hL.Stops:
              return (function (e, t, r, i, n) {
                const [a, s, o] = S(e, n);
                if (a === s) return g(t.stops[a].size, r, i);
                {
                  const e = g(t.stops[a].size, r, i);
                  return e + (g(t.stops[s].size, r, i) - e) * o;
                }
              })(e, t, r, i, n);
            case u.hL.RealWorldSize:
              return (function (e, t, r, i) {
                const n =
                    ((0, o.pC)(i) && i.resolution ? i.resolution : 1) *
                    l.a[t.valueUnit],
                  a = g(t.minSize, r, i),
                  s = g(t.maxSize, r, i),
                  { valueRepresentation: u } = t;
                let c = null;
                return (
                  (c =
                    'area' === u
                      ? (2 * Math.sqrt(e / y)) / n
                      : 'radius' === u || 'distance' === u
                      ? (2 * e) / n
                      : e / n),
                  v(c, a, s)
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
              n = i ? null : t,
              a = n && n.attributes;
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
                    a = i.getViewInfo(t),
                    l = i.createExecContext(n, a);
                  if (!p) {
                    const t = i.createSyntaxTree(e.valueExpression);
                    (p = i.createFunction(t)), (e.cache.compiledFunc = p);
                  }
                  s = i.executeFunction(p, l);
                  break;
                }
                case u.RY.Field:
                  a && (s = a[e.field]);
                  break;
                case u.RY.Unknown:
                  s = null;
              }
            if (!(0, u.qh)(s)) return null;
            if (i || !e.normalizationField) return s;
            const y = a ? parseFloat(a[e.normalizationField]) : null;
            return (0, u.qh)(y) && 0 !== y ? s / y : null;
          })(i, t, r),
          i,
          t,
          r,
          i.cache.ipData,
        );
        return null == n || isNaN(n) ? 0 : n;
      }
      function g(e, t, r) {
        return null == e
          ? null
          : (0, u.iY)(e)
          ? b(e, t, r)
          : (0, u.qh)(e)
          ? e
          : null;
      }
      function v(e, t, r) {
        return (0, u.qh)(r) && e > r ? r : (0, u.qh)(t) && e < t ? t : e;
      }
      function w(e, t, r) {
        const { isScaleDriven: i } = e.cache;
        if (!((i && '3d' === r) || t)) return null;
        const n = { scale: t, view: r };
        let a = g(e.minSize, p, n),
          s = g(e.maxSize, p, n);
        if (null != a || null != s) {
          if (a > s) {
            const e = s;
            (s = a), (a = e);
          }
          return { minSize: a, maxSize: s };
        }
      }
      function S(e, t) {
        if (!t) return;
        let r = 0,
          i = t.length - 1;
        return (
          t.some((t, n) => (e < t ? ((i = n), !0) : ((r = n), !1))),
          [r, i, (e - t[r]) / (t[i] - t[r])]
        );
      }
      function x(e, t, r) {
        const i = ['proportional', 'proportional', 'proportional'];
        for (const n of e) {
          const e = n.useSymbolValue ? 'symbol-value' : b(n, t, r);
          switch (n.axis) {
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
              (0, a.Bg)(n.axis);
          }
        }
        return i;
      }
    },
    74889: (e, t, r) => {
      r.r(t), r.d(t, { default: () => w });
      var i,
        n = r(43697),
        a = r(66577),
        s = r(38171),
        o = r(35454),
        l = r(96674),
        u = r(22974),
        c = r(70586),
        p = r(5600),
        y = (r(75215), r(71715)),
        d = r(52011),
        f = r(30556),
        m = r(82971),
        h = r(33955),
        b = r(1231);
      const g = new o.X({
        esriGeometryPoint: 'point',
        esriGeometryMultipoint: 'multipoint',
        esriGeometryPolyline: 'polyline',
        esriGeometryPolygon: 'polygon',
        esriGeometryEnvelope: 'extent',
        mesh: 'mesh',
        '': null,
      });
      let v = (i = class extends l.wq {
        constructor(e) {
          super(e),
            (this.displayFieldName = null),
            (this.exceededTransferLimit = !1),
            (this.features = []),
            (this.fields = null),
            (this.geometryType = null),
            (this.hasM = !1),
            (this.hasZ = !1),
            (this.queryGeometry = null),
            (this.spatialReference = null);
        }
        readFeatures(e, t) {
          const r = m.Z.fromJSON(t.spatialReference),
            i = [];
          for (let t = 0; t < e.length; t++) {
            const n = e[t],
              a = s.Z.fromJSON(n),
              o = n.geometry && n.geometry.spatialReference;
            (0, c.pC)(a.geometry) && !o && (a.geometry.spatialReference = r);
            const l = n.aggregateGeometries,
              u = a.aggregateGeometries;
            if (l && (0, c.pC)(u))
              for (const e in u) {
                const t = u[e],
                  i = l[e],
                  n = null == i ? void 0 : i.spatialReference;
                (0, c.pC)(t) && !n && (t.spatialReference = r);
              }
            i.push(a);
          }
          return i;
        }
        writeGeometryType(e, t, r, i) {
          if (e) return void g.write(e, t, r, i);
          const { features: n } = this;
          if (n)
            for (const e of n)
              if (e && (0, c.pC)(e.geometry))
                return void g.write(e.geometry.type, t, r, i);
        }
        readQueryGeometry(e, t) {
          if (!e) return null;
          const r = !!e.spatialReference,
            i = (0, h.im)(e);
          return (
            !r &&
              t.spatialReference &&
              (i.spatialReference = m.Z.fromJSON(t.spatialReference)),
            i
          );
        }
        writeSpatialReference(e, t) {
          if (e) return void (t.spatialReference = e.toJSON());
          const { features: r } = this;
          if (r)
            for (const e of r)
              if (e && (0, c.pC)(e.geometry) && e.geometry.spatialReference)
                return void (t.spatialReference =
                  e.geometry.spatialReference.toJSON());
        }
        clone() {
          return new i(this.cloneProperties());
        }
        cloneProperties() {
          return (0, u.d9)({
            displayFieldName: this.displayFieldName,
            exceededTransferLimit: this.exceededTransferLimit,
            features: this.features,
            fields: this.fields,
            geometryType: this.geometryType,
            hasM: this.hasM,
            hasZ: this.hasZ,
            queryGeometry: this.queryGeometry,
            spatialReference: this.spatialReference,
            transform: this.transform,
          });
        }
        toJSON(e) {
          const t = this.write();
          if (t.features && Array.isArray(e) && e.length > 0)
            for (let r = 0; r < t.features.length; r++) {
              const i = t.features[r];
              if (i.geometry) {
                const t = e && e[r];
                i.geometry = (t && t.toJSON()) || i.geometry;
              }
            }
          return t;
        }
        quantize(e) {
          const {
              scale: [t, r],
              translate: [i, n],
            } = e,
            a = this.features,
            s = this._getQuantizationFunction(
              this.geometryType,
              (e) => Math.round((e - i) / t),
              (e) => Math.round((n - e) / r),
            );
          for (let e = 0, t = a.length; e < t; e++)
            s((0, c.Wg)(a[e].geometry)) || (a.splice(e, 1), e--, t--);
          return (this.transform = e), this;
        }
        unquantize() {
          const { geometryType: e, features: t, transform: r } = this;
          if (!r) return this;
          const {
              translate: [i, n],
              scale: [a, s],
            } = r,
            o = this._getHydrationFunction(
              e,
              (e) => e * a + i,
              (e) => n - e * s,
            );
          for (const { geometry: e } of t) (0, c.pC)(e) && o(e);
          return (this.transform = null), this;
        }
        _quantizePoints(e, t, r) {
          let i, n;
          const a = [];
          for (let s = 0, o = e.length; s < o; s++) {
            const o = e[s];
            if (s > 0) {
              const e = t(o[0]),
                s = r(o[1]);
              (e === i && s === n) ||
                (a.push([e - i, s - n]), (i = e), (n = s));
            } else (i = t(o[0])), (n = r(o[1])), a.push([i, n]);
          }
          return a.length > 0 ? a : null;
        }
        _getQuantizationFunction(e, t, r) {
          return 'point' === e
            ? (e) => ((e.x = t(e.x)), (e.y = r(e.y)), e)
            : 'polyline' === e || 'polygon' === e
            ? (e) => {
                const i = (0, h.oU)(e) ? e.rings : e.paths,
                  n = [];
                for (let e = 0, a = i.length; e < a; e++) {
                  const a = i[e],
                    s = this._quantizePoints(a, t, r);
                  s && n.push(s);
                }
                return n.length > 0
                  ? ((0, h.oU)(e) ? (e.rings = n) : (e.paths = n), e)
                  : null;
              }
            : 'multipoint' === e
            ? (e) => {
                const i = this._quantizePoints(e.points, t, r);
                return i.length > 0 ? ((e.points = i), e) : null;
              }
            : 'extent' === e
            ? (e) => e
            : null;
        }
        _getHydrationFunction(e, t, r) {
          return 'point' === e
            ? (e) => {
                (e.x = t(e.x)), (e.y = r(e.y));
              }
            : 'polyline' === e || 'polygon' === e
            ? (e) => {
                const i = (0, h.oU)(e) ? e.rings : e.paths;
                let n, a;
                for (let e = 0, s = i.length; e < s; e++) {
                  const s = i[e];
                  for (let e = 0, i = s.length; e < i; e++) {
                    const i = s[e];
                    e > 0
                      ? ((n += i[0]), (a += i[1]))
                      : ((n = i[0]), (a = i[1])),
                      (i[0] = t(n)),
                      (i[1] = r(a));
                  }
                }
              }
            : 'extent' === e
            ? (e) => {
                (e.xmin = t(e.xmin)),
                  (e.ymin = r(e.ymin)),
                  (e.xmax = t(e.xmax)),
                  (e.ymax = r(e.ymax));
              }
            : 'multipoint' === e
            ? (e) => {
                const i = e.points;
                let n, a;
                for (let e = 0, s = i.length; e < s; e++) {
                  const s = i[e];
                  e > 0 ? ((n += s[0]), (a += s[1])) : ((n = s[0]), (a = s[1])),
                    (s[0] = t(n)),
                    (s[1] = r(a));
                }
              }
            : void 0;
        }
      });
      (0, n._)(
        [(0, p.Cb)({ type: String, json: { write: !0 } })],
        v.prototype,
        'displayFieldName',
        void 0,
      ),
        (0, n._)(
          [
            (0, p.Cb)({
              type: Boolean,
              json: { write: { overridePolicy: (e) => ({ enabled: e }) } },
            }),
          ],
          v.prototype,
          'exceededTransferLimit',
          void 0,
        ),
        (0, n._)(
          [(0, p.Cb)({ type: [s.Z], json: { write: !0 } })],
          v.prototype,
          'features',
          void 0,
        ),
        (0, n._)([(0, y.r)('features')], v.prototype, 'readFeatures', null),
        (0, n._)(
          [(0, p.Cb)({ type: [b.Z], json: { write: !0 } })],
          v.prototype,
          'fields',
          void 0,
        ),
        (0, n._)(
          [
            (0, p.Cb)({
              type: [
                'point',
                'multipoint',
                'polyline',
                'polygon',
                'extent',
                'mesh',
              ],
              json: { read: { reader: g.read } },
            }),
          ],
          v.prototype,
          'geometryType',
          void 0,
        ),
        (0, n._)(
          [(0, f.c)('geometryType')],
          v.prototype,
          'writeGeometryType',
          null,
        ),
        (0, n._)(
          [
            (0, p.Cb)({
              type: Boolean,
              json: { write: { overridePolicy: (e) => ({ enabled: e }) } },
            }),
          ],
          v.prototype,
          'hasM',
          void 0,
        ),
        (0, n._)(
          [
            (0, p.Cb)({
              type: Boolean,
              json: { write: { overridePolicy: (e) => ({ enabled: e }) } },
            }),
          ],
          v.prototype,
          'hasZ',
          void 0,
        ),
        (0, n._)(
          [(0, p.Cb)({ types: a.qM, json: { write: !0 } })],
          v.prototype,
          'queryGeometry',
          void 0,
        ),
        (0, n._)(
          [(0, y.r)('queryGeometry')],
          v.prototype,
          'readQueryGeometry',
          null,
        ),
        (0, n._)(
          [(0, p.Cb)({ type: m.Z, json: { write: !0 } })],
          v.prototype,
          'spatialReference',
          void 0,
        ),
        (0, n._)(
          [(0, f.c)('spatialReference')],
          v.prototype,
          'writeSpatialReference',
          null,
        ),
        (0, n._)(
          [(0, p.Cb)({ json: { write: !0 } })],
          v.prototype,
          'transform',
          void 0,
        ),
        (v = i = (0, n._)([(0, d.j)('esri.rest.support.FeatureSet')], v)),
        (v.prototype.toJSON.isDefaultToJSON = !0);
      const w = v;
    },
    51623: (e, t, r) => {
      r.d(t, { Z: () => c });
      var i = r(43697),
        n = r(35454),
        a = r(96674),
        s = r(5600),
        o = (r(67676), r(80442), r(75215), r(52011));
      const l = new n.X({
        esriJobMessageTypeInformative: 'informative',
        esriJobMessageTypeProcessDefinition: 'process-definition',
        esriJobMessageTypeProcessStart: 'process-start',
        esriJobMessageTypeProcessStop: 'process-stop',
        esriJobMessageTypeWarning: 'warning',
        esriJobMessageTypeError: 'error',
        esriJobMessageTypeEmpty: 'empty',
        esriJobMessageTypeAbort: 'abort',
      });
      let u = class extends a.wq {
        constructor(e) {
          super(e), (this.description = null), (this.type = null);
        }
      };
      (0, i._)(
        [(0, s.Cb)({ type: String, json: { write: !0 } })],
        u.prototype,
        'description',
        void 0,
      ),
        (0, i._)(
          [(0, s.Cb)({ type: String, json: { read: l.read, write: l.write } })],
          u.prototype,
          'type',
          void 0,
        ),
        (u = (0, i._)([(0, o.j)('esri.rest.support.GPMessage')], u));
      const c = u;
    },
    11282: (e, t, r) => {
      r.d(t, { lA: () => n, cv: () => s, en: () => a });
      var i = r(17452);
      function n(e, t) {
        return t ? { ...t, query: { ...e, ...t.query } } : { query: e };
      }
      function a(e) {
        return 'string' == typeof e ? (0, i.mN)(e) : e;
      }
      function s(e, t, r) {
        const i = {};
        for (const n in e) {
          if ('declaredClass' === n) continue;
          const a = e[n];
          if (null != a && 'function' != typeof a)
            if (Array.isArray(a)) {
              i[n] = [];
              for (let e = 0; e < a.length; e++) i[n][e] = s(a[e]);
            } else if ('object' == typeof a)
              if (a.toJSON) {
                const e = a.toJSON(r && r[n]);
                i[n] = t ? e : JSON.stringify(e);
              } else i[n] = t ? a : JSON.stringify(a);
            else i[n] = a;
        }
        return i;
      }
      r(91040);
    },
    16619: (e, t, r) => {
      r.r(t), r.d(t, { default: () => lt });
      var i = r(43697),
        n = r(35454),
        a = r(5600),
        s = (r(67676), r(80442), r(75215)),
        o = r(52011),
        l = r(68773),
        u = r(40330),
        c = r(3172),
        p = r(20102),
        y = r(70586),
        d = r(62357),
        f = r(17452),
        m = r(38913),
        h = r(35671),
        b = r(28101),
        g = r(15923),
        v = r(6570),
        w = r(82971);
      let S = class extends g.Z {
        constructor() {
          super(...arguments),
            (this.outSpatialReference = null),
            (this.processExtent = null),
            (this.processSpatialReference = null),
            (this.returnFeatureCollection = !1),
            (this.returnM = !1),
            (this.returnZ = !1);
        }
      };
      (0, i._)(
        [(0, a.Cb)({ type: w.Z })],
        S.prototype,
        'outSpatialReference',
        void 0,
      ),
        (0, i._)(
          [(0, a.Cb)({ type: v.Z })],
          S.prototype,
          'processExtent',
          void 0,
        ),
        (0, i._)(
          [(0, a.Cb)({ type: w.Z })],
          S.prototype,
          'processSpatialReference',
          void 0,
        ),
        (0, i._)(
          [(0, a.Cb)({ nonNullable: !0 })],
          S.prototype,
          'returnFeatureCollection',
          void 0,
        ),
        (0, i._)(
          [(0, a.Cb)({ nonNullable: !0 })],
          S.prototype,
          'returnM',
          void 0,
        ),
        (0, i._)(
          [(0, a.Cb)({ nonNullable: !0 })],
          S.prototype,
          'returnZ',
          void 0,
        ),
        (S = (0, i._)([(0, o.j)('esri.rest.geoprocessor.GPOptions')], S)),
        (S.from = (0, s.se)(S));
      const x = S;
      var P = r(82526),
        C = r(1231),
        V = r(96674);
      let _ = class extends V.wq {
        constructor() {
          super(...arguments),
            (this.extent = null),
            (this.height = null),
            (this.href = null),
            (this.opacity = 1),
            (this.rotation = 0),
            (this.scale = null),
            (this.visible = !0),
            (this.width = null);
        }
      };
      (0, i._)([(0, a.Cb)({ type: v.Z })], _.prototype, 'extent', void 0),
        (0, i._)([(0, a.Cb)()], _.prototype, 'height', void 0),
        (0, i._)([(0, a.Cb)()], _.prototype, 'href', void 0),
        (0, i._)([(0, a.Cb)()], _.prototype, 'opacity', void 0),
        (0, i._)([(0, a.Cb)()], _.prototype, 'rotation', void 0),
        (0, i._)([(0, a.Cb)()], _.prototype, 'scale', void 0),
        (0, i._)([(0, a.Cb)()], _.prototype, 'visible', void 0),
        (0, i._)([(0, a.Cb)()], _.prototype, 'width', void 0),
        (_ = (0, i._)([(0, o.j)('esri.layer.support.MapImage')], _));
      const D = _;
      var T = r(11282);
      let L = class extends V.wq {
        constructor(e) {
          super(e), (this.itemId = null), (this.url = null);
        }
      };
      (0, i._)(
        [
          (0, a.Cb)({
            type: String,
            json: { read: { source: 'itemID' }, write: { target: 'itemID' } },
          }),
        ],
        L.prototype,
        'itemId',
        void 0,
      ),
        (0, i._)(
          [(0, a.Cb)({ type: String, json: { write: !0 } })],
          L.prototype,
          'url',
          void 0,
        ),
        (L = (0, i._)([(0, o.j)('esri.rest.support.DataFile')], L));
      const M = L;
      var I = r(74889);
      const G = new n.X(
        {
          esriMeters: 'meters',
          esriFeet: 'feet',
          esriKilometers: 'kilometers',
          esriMiles: 'miles',
          esriNauticalMiles: 'nautical-miles',
          esriYards: 'yards',
        },
        { ignoreUnknown: !1 },
      );
      let O = class extends V.wq {
        constructor(e) {
          super(e), (this.distance = 0), (this.units = null);
        }
      };
      (0, i._)(
        [(0, a.Cb)({ json: { write: !0 } })],
        O.prototype,
        'distance',
        void 0,
      ),
        (0, i._)(
          [(0, a.Cb)({ json: { read: G.read, write: G.write } })],
          O.prototype,
          'units',
          void 0,
        ),
        (O = (0, i._)([(0, o.j)('esri.rest.support.LinearUnit')], O));
      const F = O,
        N = new n.X({
          GPBoolean: 'boolean',
          GPDataFile: 'data-file',
          GPDate: 'date',
          GPDouble: 'double',
          GPFeatureRecordSetLayer: 'feature-record-set-layer',
          GPField: 'field',
          GPLinearUnit: 'linear-unit',
          GPLong: 'long',
          GPRasterData: 'raster-data',
          GPRasterDataLayer: 'raster-data-layer',
          GPRecordSet: 'record-set',
          GPString: 'string',
          'GPMultiValue:GPBoolean': 'multi-value',
          'GPMultiValue:GPDataFile': 'multi-value',
          'GPMultiValue:GPDate': 'multi-value',
          'GPMultiValue:GPDouble': 'multi-value',
          'GPMultiValue:GPFeatureRecordSetLayer': 'multi-value',
          'GPMultiValue:GPField': 'multi-value',
          'GPMultiValue:GPLinearUnit': 'multi-value',
          'GPMultiValue:GPLong': 'multi-value',
          'GPMultiValue:GPRasterData': 'multi-value',
          'GPMultiValue:GPRasterDataLayer': 'multi-value',
          'GPMultiValue:GPRecordSet': 'multi-value',
          'GPMultiValue:GPString': 'multi-value',
        });
      let R = class extends V.wq {
        constructor(e) {
          super(e), (this.dataType = null), (this.value = null);
        }
      };
      (0, i._)(
        [(0, a.Cb)({ json: { read: N.read, write: N.write } })],
        R.prototype,
        'dataType',
        void 0,
      ),
        (0, i._)([(0, a.Cb)()], R.prototype, 'value', void 0),
        (R = (0, i._)([(0, o.j)('esri.rest.support.ParameterValue')], R));
      const J = R;
      let j = class extends V.wq {
        constructor(e) {
          super(e),
            (this.format = null),
            (this.itemId = null),
            (this.url = null);
        }
      };
      (0, i._)([(0, a.Cb)()], j.prototype, 'format', void 0),
        (0, i._)(
          [
            (0, a.Cb)({
              json: { read: { source: 'itemID' }, write: { target: 'itemID' } },
            }),
          ],
          j.prototype,
          'itemId',
          void 0,
        ),
        (0, i._)([(0, a.Cb)()], j.prototype, 'url', void 0),
        (j = (0, i._)([(0, o.j)('esri.rest.support.RasterData')], j));
      const E = j;
      async function k(e, t, r, i, n) {
        const a = {},
          s = {},
          o = [];
        return (
          (function (e, t, r) {
            for (const i in e) {
              const n = e[i];
              if (n && 'object' == typeof n && n instanceof I.default) {
                const { features: e } = n;
                (r[i] = [t.length, t.length + e.length]),
                  e.forEach((e) => {
                    t.push(e.geometry);
                  });
              }
            }
          })(i, o, a),
          (0, P.aX)(o).then((o) => {
            const {
                outSpatialReference: l,
                processExtent: u,
                processSpatialReference: p,
                returnFeatureCollection: y,
                returnM: d,
                returnZ: f,
              } = r,
              { path: m } = (0, T.en)(e);
            for (const e in a) {
              const t = a[e];
              s[e] = o.slice(t[0], t[1]);
            }
            const h = l ? l.wkid || l : null,
              b = p ? p.wkid || p : null,
              g =
                'execute' === t
                  ? {
                      returnFeatureCollection: y || void 0,
                      returnM: d || void 0,
                      returnZ: f || void 0,
                    }
                  : null,
              v = q(
                {
                  ...(u
                    ? { context: { extent: u, outSR: h, processSR: b } }
                    : { 'env:outSR': h, 'env:processSR': b }),
                  ...i,
                  ...g,
                  f: 'json',
                },
                null,
                s,
              ),
              w = { ...n, query: v };
            return (0, c.default)(`${m}/${t}`, w);
          })
        );
      }
      function z(e) {
        const t = e.dataType,
          r = J.fromJSON(e);
        switch (t) {
          case 'GPBoolean':
          case 'GPDouble':
          case 'GPLong':
          case 'GPString':
          case 'GPMultiValue:GPBoolean':
          case 'GPMultiValue:GPDouble':
          case 'GPMultiValue:GPLong':
          case 'GPMultiValue:GPString':
            return r;
          case 'GPDate':
            r.value = new Date(r.value);
            break;
          case 'GPDataFile':
            r.value = M.fromJSON(r.value);
            break;
          case 'GPLinearUnit':
            r.value = F.fromJSON(r.value);
            break;
          case 'GPFeatureRecordSetLayer':
          case 'GPRecordSet': {
            const t = e.value.url;
            r.value = t ? M.fromJSON(r.value) : I.default.fromJSON(r.value);
            break;
          }
          case 'GPRasterData':
          case 'GPRasterDataLayer': {
            const t = e.value.mapImage;
            r.value = t ? D.fromJSON(t) : E.fromJSON(r.value);
            break;
          }
          case 'GPField':
            r.value = C.Z.fromJSON(r.value);
            break;
          case 'GPMultiValue:GPDate': {
            const e = r.value;
            r.value = e.map((e) => new Date(e));
            break;
          }
          case 'GPMultiValue:GPDataFile':
            r.value = r.value.map((e) => M.fromJSON(e));
            break;
          case 'GPMultiValue:GPLinearUnit':
            r.value = r.value.map((e) => F.fromJSON(e));
            break;
          case 'GPMultiValue:GPFeatureRecordSetLayer':
          case 'GPMultiValue:GPRecordSet':
            r.value = r.value.map((e) => I.default.fromJSON(e));
            break;
          case 'GPMultiValue:GPRasterData':
          case 'GPMultiValue:GPRasterDataLayer':
            r.value = r.value.map((e) =>
              e ? D.fromJSON(e) : E.fromJSON(r.value),
            );
            break;
          case 'GPMultiValue:GPField':
            r.value = r.value.map((e) => C.Z.fromJSON(e));
        }
        return r;
      }
      function q(e, t, r) {
        for (const t in e) {
          const r = e[t];
          Array.isArray(r)
            ? (e[t] = JSON.stringify(r.map((e) => q({ item: e }, !0).item)))
            : r instanceof Date && (e[t] = r.getTime());
        }
        return (0, T.cv)(e, t, r);
      }
      var A,
        U = r(51623),
        Z = r(95330);
      const $ = new n.X({
        esriJobCancelled: 'job-cancelled',
        esriJobCancelling: 'job-cancelling',
        esriJobDeleted: 'job-deleted',
        esriJobDeleting: 'job-deleting',
        esriJobTimedOut: 'job-timed-out',
        esriJobExecuting: 'job-executing',
        esriJobFailed: 'job-failed',
        esriJobNew: 'job-new',
        esriJobSubmitted: 'job-submitted',
        esriJobSucceeded: 'job-succeeded',
        esriJobWaiting: 'job-waiting',
      });
      let W = (A = class extends V.wq {
        constructor(e) {
          super(e),
            (this.jobId = null),
            (this.jobStatus = null),
            (this.messages = null),
            (this.requestOptions = null),
            (this.sourceUrl = null),
            (this._timer = null);
        }
        cancelJob(e) {
          const { jobId: t, sourceUrl: r } = this,
            { path: i } = (0, T.en)(r),
            n = { ...this.requestOptions, ...e, query: { f: 'json' } };
          return (
            this._clearTimer(),
            (0, c.default)(`${i}/jobs/${t}/cancel`, n).then((e) => {
              const t = A.fromJSON(e.data);
              return (
                (this.messages = t.messages),
                (this.jobStatus = t.jobStatus),
                this
              );
            })
          );
        }
        destroy() {
          clearInterval(this._timer);
        }
        checkJobStatus(e) {
          const { path: t } = (0, T.en)(this.sourceUrl),
            r = { ...this.requestOptions, ...e, query: { f: 'json' } },
            i = `${t}/jobs/${this.jobId}`;
          return (0, c.default)(i, r).then(({ data: e }) => {
            const t = A.fromJSON(e);
            return (
              (this.messages = t.messages), (this.jobStatus = t.jobStatus), this
            );
          });
        }
        fetchResultData(e, t, r) {
          t = x.from(t || {});
          const {
              returnFeatureCollection: i,
              returnM: n,
              returnZ: a,
              outSpatialReference: s,
            } = t,
            { path: o } = (0, T.en)(this.sourceUrl),
            l = q(
              {
                returnFeatureCollection: i,
                returnM: n,
                returnZ: a,
                outSR: s,
                returnType: 'data',
                f: 'json',
              },
              null,
            ),
            u = { ...this.requestOptions, ...r, query: l },
            p = `${o}/jobs/${this.jobId}/results/${e}`;
          return (0, c.default)(p, u).then((e) => z(e.data));
        }
        fetchResultImage(e, t, r) {
          const { path: i } = (0, T.en)(this.sourceUrl),
            n = q({ ...t.toJSON(), f: 'json' }),
            a = { ...this.requestOptions, ...r, query: n },
            s = `${i}/jobs/${this.jobId}/results/${e}`;
          return (0, c.default)(s, a).then((e) => z(e.data));
        }
        async fetchResultMapImageLayer() {
          const { path: e } = (0, T.en)(this.sourceUrl),
            t = e.indexOf('/GPServer/'),
            i = `${e.substring(0, t)}/MapServer/jobs/${this.jobId}`;
          return new (0,
          (
            await Promise.all([
              r.e(6968),
              r.e(9989),
              r.e(7604),
              r.e(4369),
              r.e(5823),
              r.e(999),
            ]).then(r.bind(r, 75823))
          ).default)({ url: i });
        }
        async waitForJobCompletion(e = {}) {
          const { interval: t = 1e3, signal: r, statusCallback: i } = e;
          return new Promise((e, n) => {
            (0, Z.fu)(r, () => {
              this._clearTimer(), n((0, Z.zE)());
            }),
              this._clearTimer();
            const a = setInterval(() => {
              this._timer || n((0, Z.zE)()),
                this.checkJobStatus(this.requestOptions).then((t) => {
                  const { jobStatus: r } = t;
                  switch (((this.jobStatus = r), r)) {
                    case 'job-succeeded':
                      this._clearTimer(), e(this);
                      break;
                    case 'job-submitted':
                    case 'job-executing':
                    case 'job-waiting':
                    case 'job-new':
                      i && i(this);
                      break;
                    case 'job-cancelled':
                    case 'job-cancelling':
                    case 'job-deleted':
                    case 'job-deleting':
                    case 'job-timed-out':
                    case 'job-failed':
                      this._clearTimer(), n(this);
                  }
                });
            }, t);
            this._timer = a;
          });
        }
        _clearTimer() {
          this._timer && (clearInterval(this._timer), (this._timer = null));
        }
      });
      (0, i._)([(0, a.Cb)()], W.prototype, 'jobId', void 0),
        (0, i._)(
          [(0, a.Cb)({ json: { read: $.read } })],
          W.prototype,
          'jobStatus',
          void 0,
        ),
        (0, i._)([(0, a.Cb)({ type: [U.Z] })], W.prototype, 'messages', void 0),
        (0, i._)([(0, a.Cb)()], W.prototype, 'requestOptions', void 0),
        (0, i._)(
          [(0, a.Cb)({ json: { write: !0 } })],
          W.prototype,
          'sourceUrl',
          void 0,
        ),
        (W = A = (0, i._)([(0, o.j)('esri.rest.support.JobInfo')], W));
      const B = W,
        K = new n.X({
          PDF: 'pdf',
          PNG32: 'png32',
          PNG8: 'png8',
          JPG: 'jpg',
          GIF: 'gif',
          EPS: 'eps',
          SVG: 'svg',
          SVGZ: 'svgz',
        }),
        X = (K.fromJSON.bind(K), K.toJSON.bind(K)),
        Q = new n.X({
          MAP_ONLY: 'map-only',
          'A3 Landscape': 'a3-landscape',
          'A3 Portrait': 'a3-portrait',
          'A4 Landscape': 'a4-landscape',
          'A4 Portrait': 'a4-portrait',
          'Letter ANSI A Landscape': 'letter-ansi-a-landscape',
          'Letter ANSI A Portrait': 'letter-ansi-a-portrait',
          'Tabloid ANSI B Landscape': 'tabloid-ansi-b-landscape',
          'Tabloid ANSI B Portrait': 'tabloid-ansi-b-portrait',
        }),
        Y = (Q.fromJSON.bind(Q), Q.toJSON.bind(Q)),
        H = 'simple-marker',
        ee = 'simple-line';
      function te(e, t) {
        const { graphic: r, renderer: i, symbol: n } = t,
          a = n.type;
        if (
          'text' === a ||
          'shield-label-symbol' === a ||
          !('visualVariables' in i) ||
          !i.visualVariables
        )
          return;
        const s = i.getVisualVariablesForType('size'),
          o = i.getVisualVariablesForType('color'),
          l = i.getVisualVariablesForType('opacity'),
          u = i.getVisualVariablesForType('rotation'),
          c = s[0],
          p = o[0],
          y = l[0],
          f = u[0];
        if (c) {
          const t = a === H ? n.style : null,
            i = (0, b.ap)(c, r, { shape: t });
          null != i &&
            (a === H
              ? (e.size = (0, d.Wz)(i))
              : 'picture-marker' === a
              ? ((e.width = (0, d.Wz)(i)), (e.height = (0, d.Wz)(i)))
              : a === ee
              ? (e.width = (0, d.Wz)(i))
              : e.outline && (e.outline.width = (0, d.Wz)(i)));
        }
        if (p) {
          const t = (0, b.Lq)(p, r);
          ((t && a === H) || a === ee || 'simple-fill' === a) &&
            (e.color = t ? t.toJSON() : void 0);
        }
        if (y) {
          const t = (0, b.Km)(y, r);
          null != t && e.color && (e.color[3] = Math.round(255 * t));
        }
        f && (e.angle = -(0, b.cM)(i, r));
      }
      function re(e) {
        return e && 'bing-maps' === e.type;
      }
      function ie(e) {
        return e && 'blendMode' in e && 'effect' in e;
      }
      function ne(e) {
        return e && 'csv' === e.type;
      }
      function ae(e) {
        return e && 'feature' === e.type;
      }
      function se(e) {
        return e && 'geojson' === e.type;
      }
      function oe(e) {
        return e && 'graphics' === e.type;
      }
      function le(e) {
        return e && 'group' === e.type;
      }
      function ue(e) {
        return e && 'esri.views.2d.layers.GroupLayerView2D' === e.declaredClass;
      }
      function ce(e) {
        return e && 'imagery' === e.type;
      }
      function pe(e) {
        return e && 'imagery-tile' === e.type;
      }
      function ye(e) {
        return e && 'kml' === e.type;
      }
      function de(e) {
        return e && 'map-image' === e.type;
      }
      function fe(e) {
        return e && 'map-notes' === e.type;
      }
      function me(e) {
        return e && 'open-street-map' === e.type;
      }
      function he(e) {
        const t = e.layer;
        if (ie(t)) {
          const r = t.blendMode;
          if (
            (!r || 'normal' === r) &&
            (t.effect || ('featureEffect' in e && e.featureEffect))
          )
            return !0;
        }
        return !1;
      }
      function be(e) {
        return e && 'stream' === e.type;
      }
      function ge(e) {
        return e && 'tile' === e.type;
      }
      function ve(e) {
        return e && 'vector-tile' === e.type;
      }
      function we(e) {
        return e && 'web-tile' === e.type;
      }
      function Se(e) {
        return e && 'wms' === e.type;
      }
      function xe(e) {
        return e && 'wmts' === e.type;
      }
      let Pe = class extends g.Z {
        constructor(e) {
          super(e),
            (this.attributionVisible = !0),
            (this.exportOptions = { width: 800, height: 1100, dpi: 96 }),
            (this.forceFeatureAttributes = !1),
            (this.format = 'png32'),
            (this.label = null),
            (this.layout = 'map-only'),
            (this.layoutOptions = null),
            (this.outScale = 0),
            (this.scalePreserved = !0),
            (this.showLabels = !0);
        }
      };
      (0, i._)([(0, a.Cb)()], Pe.prototype, 'attributionVisible', void 0),
        (0, i._)([(0, a.Cb)()], Pe.prototype, 'exportOptions', void 0),
        (0, i._)([(0, a.Cb)()], Pe.prototype, 'forceFeatureAttributes', void 0),
        (0, i._)([(0, a.Cb)()], Pe.prototype, 'format', void 0),
        (0, i._)([(0, a.Cb)()], Pe.prototype, 'label', void 0),
        (0, i._)([(0, a.Cb)()], Pe.prototype, 'layout', void 0),
        (0, i._)([(0, a.Cb)()], Pe.prototype, 'layoutOptions', void 0),
        (0, i._)([(0, a.Cb)()], Pe.prototype, 'outScale', void 0),
        (0, i._)([(0, a.Cb)()], Pe.prototype, 'scalePreserved', void 0),
        (0, i._)([(0, a.Cb)()], Pe.prototype, 'showLabels', void 0),
        (Pe = (0, i._)([(0, o.j)('esri.rest.support.PrintTemplate')], Pe));
      const Ce = Pe;
      var Ve = r(71058),
        _e = r(410);
      const De = { Feet: 'ft', Kilometers: 'km', Meters: 'm', Miles: 'mi' },
        Te = new n.X({
          esriFeet: 'Feet',
          esriKilometers: 'Kilometers',
          esriMeters: 'Meters',
          esriMiles: 'Miles',
        }),
        Le = new n.X({
          esriExecutionTypeSynchronous: 'sync',
          esriExecutionTypeAsynchronous: 'async',
        }),
        Me = new Map();
      async function Ie(e, t, r) {
        const i = Oe(e);
        let n = Me.get(i);
        return Promise.resolve()
          .then(() =>
            n
              ? { data: n.gpMetadata }
              : ((n = {
                  gpServerUrl: i,
                  is11xService: !1,
                  legendLayerNameMap: {},
                  legendLayers: [],
                }),
                (0, c.default)(i, { query: { f: 'json' } })),
          )
          .then(
            (e) => (
              (n.gpMetadata = e.data),
              (n.cimVersion = n.gpMetadata.cimVersion),
              (n.is11xService = !!n.cimVersion),
              Me.set(i, n),
              Ge(t, n)
            ),
          )
          .then((i) => {
            const a = (function (e) {
              return e.gpMetadata && e.gpMetadata.executionType
                ? Le.fromJSON(e.gpMetadata.executionType)
                : 'sync';
            })(n);
            let s;
            const o = (e) =>
              'sync' === a
                ? e.results && e.results[0] && e.results[0].value
                : s
                    .fetchResultData('Output_File', null, r)
                    .then((e) => e.value);
            return 'async' === a
              ? (async function (e, t, r, i) {
                  return (
                    (r = x.from(r || {})),
                    k(e, 'submitJob', r, t, i).then((t) => {
                      const r = B.fromJSON(t.data);
                      return (r.sourceUrl = e), r;
                    })
                  );
                })(e, i, null, r).then(
                  (e) => (
                    (s = e),
                    e.waitForJobCompletion({ interval: t.updateDelay }).then(o)
                  ),
                )
              : (async function (e, t, r, i) {
                  return k(e, 'execute', (r = x.from(r || {})), t, i).then(
                    (e) => {
                      const t = e.data.results || [],
                        r = e.data.messages || [];
                      return {
                        results: t.map(z),
                        messages: r.map((e) => U.Z.fromJSON(e)),
                      };
                    },
                  );
                })(e, i, null, r).then(o);
          });
      }
      async function Ge(e, t) {
        t = t || { is11xService: !1, legendLayerNameMap: {}, legendLayers: [] };
        const r = e.template || new Ce();
        null == r.showLabels && (r.showLabels = !0);
        const i = r.exportOptions;
        let n;
        const a = Y(r.layout);
        if (
          i &&
          ((n = { dpi: i.dpi }), 'map_only' === a.toLowerCase() || '' === a)
        ) {
          const e = i.width,
            t = i.height;
          n.outputSize = [e, t];
        }
        const s = r.layoutOptions;
        let o;
        if (s) {
          let e, t;
          'Miles' === s.scalebarUnit || 'Kilometers' === s.scalebarUnit
            ? ((e = 'Kilometers'), (t = 'Miles'))
            : ('Meters' !== s.scalebarUnit && 'Feet' !== s.scalebarUnit) ||
              ((e = 'Meters'), (t = 'Feet')),
            (o = {
              titleText: s.titleText,
              authorText: s.authorText,
              copyrightText: s.copyrightText,
              customTextElements: s.customTextElements,
              scaleBarOptions: {
                metricUnit: Te.toJSON(e),
                metricLabel: De[e],
                nonMetricUnit: Te.toJSON(t),
                nonMetricLabel: De[t],
              },
            });
        }
        let l = null;
        null != s &&
          s.legendLayers &&
          (l = s.legendLayers.map((e) => {
            t.legendLayerNameMap[e.layerId] = e.title;
            const r = { id: e.layerId };
            return e.subLayerIds && (r.subLayerIds = e.subLayerIds), r;
          }));
        const u = await (async function (e, t, r) {
          const i = e.view;
          let n = i.spatialReference;
          const a = { operationalLayers: await Fe(i, t, r) };
          let s = r.ssExtent || e.extent || i.extent;
          if (
            (n &&
              n.isWrappable &&
              ((s = s.clone()._normalize(!0)), (n = s.spatialReference)),
            (a.mapOptions = {
              extent: s && s.toJSON(),
              spatialReference: n && n.toJSON(),
              showAttribution: t.attributionVisible,
            }),
            (r.ssExtent = null),
            i.background && (a.background = i.background.toJSON()),
            i.rotation && (a.mapOptions.rotation = -i.rotation),
            t.scalePreserved && (a.mapOptions.scale = t.outScale || i.scale),
            (0, y.pC)(i.timeExtent))
          ) {
            const e = (0, y.pC)(i.timeExtent.start)
                ? i.timeExtent.start.getTime()
                : null,
              t = (0, y.pC)(i.timeExtent.end)
                ? i.timeExtent.end.getTime()
                : null;
            a.mapOptions.time = [e, t];
          }
          return a;
        })(e, r, t);
        if (u.operationalLayers) {
          const e = new RegExp(
              '[\\u4E00-\\u9FFF\\u0E00-\\u0E7F\\u0900-\\u097F\\u3040-\\u309F\\u30A0-\\u30FF\\u31F0-\\u31FF]',
            ),
            r = /[\u0600-\u06FF]/,
            i = (t) => {
              const i = t.text,
                n = t.font,
                a = n && n.family && n.family.toLowerCase();
              i &&
                n &&
                ('arial' === a || 'arial unicode ms' === a) &&
                ((n.family = e.test(i) ? 'Arial Unicode MS' : 'Arial'),
                'normal' !== n.style &&
                  r.test(i) &&
                  (n.family = 'Arial Unicode MS'));
            },
            n = () => {
              throw new p.Z(
                'print:cim-symbol-unsupported',
                'CIMSymbol is not supported by a print service published from ArcMap',
              );
            };
          u.operationalLayers.forEach((e) => {
            var r, a, s;
            null != (r = e.featureCollection) && r.layers
              ? e.featureCollection.layers.forEach((e) => {
                  var r, a, s, o;
                  if (
                    null != (r = e.layerDefinition) &&
                    null != (a = r.drawingInfo) &&
                    null != (s = a.renderer) &&
                    s.symbol
                  ) {
                    const r = e.layerDefinition.drawingInfo.renderer;
                    'esriTS' === r.symbol.type
                      ? i(r.symbol)
                      : 'CIMSymbolReference' !== r.symbol.type ||
                        t.is11xService ||
                        n();
                  }
                  null != (o = e.featureSet) &&
                    o.features &&
                    e.featureSet.features.forEach((e) => {
                      e.symbol &&
                        ('esriTS' === e.symbol.type
                          ? i(e.symbol)
                          : 'CIMSymbolReference' !== e.symbol.type ||
                            t.is11xService ||
                            n());
                    });
                })
              : !t.is11xService &&
                null != (a = e.layerDefinition) &&
                null != (s = a.drawingInfo) &&
                s.renderer &&
                JSON.stringify(e.layerDefinition.drawingInfo.renderer).includes(
                  '"type":"CIMSymbolReference"',
                ) &&
                n();
          });
        }
        e.outSpatialReference &&
          (u.mapOptions.spatialReference = e.outSpatialReference.toJSON()),
          Object.assign(u, { exportOptions: n, layoutOptions: o || {} }),
          Object.assign(u.layoutOptions, {
            legendOptions: {
              operationalLayers: null != l ? l : t.legendLayers.slice(),
            },
          }),
          (t.legendLayers.length = 0),
          Me.set(t.gpServerUrl, t);
        const c = {
          Web_Map_as_JSON: JSON.stringify(u),
          Format: X(r.format),
          Layout_Template: a,
        };
        return e.extraParameters && Object.assign(c, e.extraParameters), c;
      }
      function Oe(e) {
        let t = e;
        const r = t.lastIndexOf('/GPServer/');
        return r > 0 && (t = t.slice(0, r + 9)), t;
      }
      async function Fe(e, t, r) {
        const i = [],
          n = { layerView: null, printTemplate: t, view: e };
        let a = 0;
        t.scalePreserved && (a = t.outScale || e.scale);
        const s = (function (e, t) {
          const r = e.allLayerViews.items;
          if (t === e.scale) return r.filter((e) => !e.suspended);
          const i = new Array();
          for (const e of r)
            (ue(e.parent) && !i.includes(e.parent)) ||
              !e.visible ||
              (t && 'isVisibleAtScale' in e && !e.isVisibleAtScale(t)) ||
              i.push(e);
          return i;
        })(e, a);
        for (const e of s) {
          const t = e.layer;
          if (!t.loaded || le(t)) continue;
          let a;
          (n.layerView = e),
            (a = he(e)
              ? await $e(t, n, r)
              : re(t)
              ? Ne(t)
              : ne(t)
              ? await Re(t, n, r)
              : ae(t)
              ? await je(t, n, r)
              : se(t)
              ? await Ee(t, n, r)
              : oe(t)
              ? await ke(t, n, r)
              : ce(t)
              ? ze(t, r)
              : pe(t)
              ? await qe(t, n, r)
              : ye(t)
              ? await Ae(t, n, r)
              : de(t)
              ? Ue(t, n, r)
              : fe(t)
              ? await Ze(n, r)
              : me(t)
              ? { type: 'OpenStreetMap' }
              : be(t)
              ? await We(t, n, r)
              : ge(t)
              ? Be(t, r)
              : ve(t)
              ? await Ke(t, n, r)
              : we(t)
              ? Xe(t)
              : Se(t)
              ? Qe(t)
              : xe(t)
              ? Ye(t)
              : await $e(t, n, r)),
            a &&
              (Array.isArray(a)
                ? i.push(...a)
                : ((a.id = t.id),
                  (a.title = r.legendLayerNameMap[t.id] || t.title),
                  (a.opacity = t.opacity),
                  (a.minScale = t.minScale || 0),
                  (a.maxScale = t.maxScale || 0),
                  ie(t) &&
                    t.blendMode &&
                    'normal' !== t.blendMode &&
                    (a.blendMode = t.blendMode),
                  i.push(a)));
        }
        if (
          (a &&
            i.forEach((e) => {
              (e.minScale = 0), (e.maxScale = 0);
            }),
          e.graphics && e.graphics.length)
        ) {
          const n = await Je(null, e.graphics, t, r);
          n && i.push(n);
        }
        return i;
      }
      function Ne(e) {
        return {
          culture: e.culture,
          key: e.key,
          type:
            'BingMaps' +
            ('aerial' === e.style
              ? 'Aerial'
              : 'hybrid' === e.style
              ? 'Hybrid'
              : 'Road'),
        };
      }
      async function Re(e, t, r) {
        e.legendEnabled && r.legendLayers.push({ id: e.id });
        const i = t.layerView,
          n = t.printTemplate;
        let a;
        return !r.is11xService || i.filter
          ? Je(e, await it(i), n, r)
          : ((a = { type: 'CSV' }),
            e.write(a, { origin: 'web-map' }),
            delete a.popupInfo,
            delete a.layerType,
            (a.showLabels = n.showLabels && e.labelsVisible),
            a);
      }
      async function Je(e, t, r, i) {
        let n;
        const a = {
            layerDefinition: {
              name: 'polygonLayer',
              geometryType: 'esriGeometryPolygon',
              drawingInfo: { renderer: null },
            },
            featureSet: { geometryType: 'esriGeometryPolygon', features: [] },
          },
          s = {
            layerDefinition: {
              name: 'polylineLayer',
              geometryType: 'esriGeometryPolyline',
              drawingInfo: { renderer: null },
            },
            featureSet: { geometryType: 'esriGeometryPolyline', features: [] },
          },
          o = {
            layerDefinition: {
              name: 'pointLayer',
              geometryType: 'esriGeometryPoint',
              drawingInfo: { renderer: null },
            },
            featureSet: { geometryType: 'esriGeometryPoint', features: [] },
          },
          l = {
            layerDefinition: {
              name: 'multipointLayer',
              geometryType: 'esriGeometryMultipoint',
              drawingInfo: { renderer: null },
            },
            featureSet: {
              geometryType: 'esriGeometryMultipoint',
              features: [],
            },
          },
          u = {
            layerDefinition: {
              name: 'pointLayer',
              geometryType: 'esriGeometryPoint',
              drawingInfo: { renderer: null },
            },
            featureSet: { geometryType: 'esriGeometryPoint', features: [] },
          };
        if (
          ((u.layerDefinition.name = 'textLayer'),
          delete u.layerDefinition.drawingInfo,
          e)
        ) {
          if (
            ('esri.layers.FeatureLayer' === e.declaredClass ||
            'esri.layers.StreamLayer' === e.declaredClass
              ? (a.layerDefinition.name =
                  s.layerDefinition.name =
                  o.layerDefinition.name =
                  l.layerDefinition.name =
                    i.legendLayerNameMap[e.id] ||
                    e.get('arcgisProps.title') ||
                    e.title)
              : 'esri.layers.GraphicsLayer' === e.declaredClass &&
                (t = e.graphics.items),
            e.renderer)
          ) {
            const t = e.renderer.toJSON();
            (a.layerDefinition.drawingInfo.renderer = t),
              (s.layerDefinition.drawingInfo.renderer = t),
              (o.layerDefinition.drawingInfo.renderer = t),
              (l.layerDefinition.drawingInfo.renderer = t);
          }
          if (r.showLabels && e.labelsVisible && 'function' == typeof e.write) {
            var c, p;
            const t =
              null ==
                (c = e.write({}, { origin: 'web-map' }).layerDefinition) ||
              null == (p = c.drawingInfo)
                ? void 0
                : p.labelingInfo;
            t &&
              ((n = !0),
              (a.layerDefinition.drawingInfo.labelingInfo = t),
              (s.layerDefinition.drawingInfo.labelingInfo = t),
              (o.layerDefinition.drawingInfo.labelingInfo = t),
              (l.layerDefinition.drawingInfo.labelingInfo = t));
          }
        }
        let y;
        (null != e && e.renderer) ||
          n ||
          (delete a.layerDefinition.drawingInfo,
          delete s.layerDefinition.drawingInfo,
          delete o.layerDefinition.drawingInfo,
          delete l.layerDefinition.drawingInfo);
        const d = null == e ? void 0 : e.fieldsIndex,
          f = null == e ? void 0 : e.renderer;
        if (d) {
          const t = new Set();
          n && (await (0, h.Mu)(t, e)),
            f &&
              'function' == typeof f.collectRequiredFields &&
              (await f.collectRequiredFields(t, d)),
            (y = Array.from(t));
          const r = d.fields.map((e) => e.toJSON());
          (a.layerDefinition.fields = r),
            (s.layerDefinition.fields = r),
            (o.layerDefinition.fields = r),
            (l.layerDefinition.fields = r);
        }
        const b = t && t.length;
        let g;
        for (let n = 0; n < b; n++) {
          var v;
          const c = t[n] || t.getItemAt(n);
          if (!1 === c.visible || !c.geometry) continue;
          if (
            ((g = c.toJSON()),
            g.hasOwnProperty('popupTemplate') && delete g.popupTemplate,
            g.geometry && g.geometry.z && delete g.geometry.z,
            g.symbol &&
              g.symbol.outline &&
              'esriCLS' === g.symbol.outline.type &&
              !i.is11xService)
          )
            continue;
          !i.is11xService &&
            g.symbol &&
            g.symbol.outline &&
            g.symbol.outline.color &&
            g.symbol.outline.color[3] &&
            (g.symbol.outline.color[3] = 255);
          const p =
            e &&
            e.renderer &&
            (('valueExpression' in e.renderer && e.renderer.valueExpression) ||
              ('hasVisualVariables' in e.renderer &&
                e.renderer.hasVisualVariables()));
          if (!g.symbol && e && e.renderer && p && !i.is11xService) {
            const t = e.renderer,
              r = await t.getSymbolAsync(c);
            if (!r) continue;
            (g.symbol = r.toJSON()),
              'hasVisualVariables' in t &&
                t.hasVisualVariables() &&
                te(g.symbol, { renderer: t, graphic: c, symbol: r });
          }
          if (
            (g.symbol &&
              (g.symbol.angle || delete g.symbol.angle,
              nt(g.symbol)
                ? (g.symbol = await tt(g.symbol, i))
                : g.symbol.text && delete g.attributes),
            (!r || !r.forceFeatureAttributes) && null != (v = y) && v.length)
          ) {
            const e = {};
            y.forEach((t) => {
              g.attributes &&
                g.attributes.hasOwnProperty(t) &&
                (e[t] = g.attributes[t]);
            }),
              (g.attributes = e);
          }
          'polygon' === c.geometry.type
            ? a.featureSet.features.push(g)
            : 'polyline' === c.geometry.type
            ? s.featureSet.features.push(g)
            : 'point' === c.geometry.type
            ? g.symbol && g.symbol.text
              ? u.featureSet.features.push(g)
              : o.featureSet.features.push(g)
            : 'multipoint' === c.geometry.type
            ? l.featureSet.features.push(g)
            : 'extent' === c.geometry.type &&
              ((g.geometry = m.Z.fromExtent(c.geometry).toJSON()),
              a.featureSet.features.push(g));
        }
        const w = [a, s, l, o, u].filter(
          (e) => e.featureSet.features.length > 0,
        );
        for (const e of w) {
          const t = e.featureSet.features.every((e) => e.symbol);
          !t ||
            (r && r.forceFeatureAttributes) ||
            e.featureSet.features.forEach((e) => {
              delete e.attributes;
            }),
            t && delete e.layerDefinition.drawingInfo,
            e.layerDefinition.drawingInfo &&
              e.layerDefinition.drawingInfo.renderer &&
              (await rt(e.layerDefinition.drawingInfo.renderer, i));
        }
        return w.length
          ? { featureCollection: { layers: w }, showLabels: n }
          : null;
      }
      async function je(e, t, r) {
        var i, n;
        let a;
        const s = e.renderer,
          o = parseFloat(r.cimVersion);
        if (
          (e.featureReduction && (!r.is11xService || o < 2.9)) ||
          ('dot-density' === (null == s ? void 0 : s.type) &&
            (!r.is11xService || o < 2.6))
        )
          return $e(e, t, r);
        e.legendEnabled && r.legendLayers.push({ id: e.id });
        const l = t.layerView,
          { printTemplate: u, view: c } = t,
          p =
            s &&
            (('valueExpression' in s && s.valueExpression) ||
              ('hasVisualVariables' in s && s.hasVisualVariables())),
          y =
            'feature-layer' !== (null == (i = e.source) ? void 0 : i.type) &&
            'ogc-feature' !== (null == (n = e.source) ? void 0 : n.type);
        if (
          (!r.is11xService && p) ||
          l.filter ||
          y ||
          !s ||
          ('field' in s &&
            null != s.field &&
            ('string' != typeof s.field || !e.getField(s.field)))
        ) {
          const t = await it(l);
          a = await Je(e, t, u, r);
        } else {
          var d, f;
          if (
            ((a = {
              id: (m = e.write()).id,
              title: m.title,
              opacity: m.opacity,
              minScale: m.minScale,
              maxScale: m.maxScale,
              url: m.url,
              layerType: m.layerType,
              customParameters: m.customParameters,
              layerDefinition: m.layerDefinition,
            }),
            (a.showLabels = u.showLabels && e.labelsVisible),
            He(a, e),
            null != (d = a.layerDefinition) &&
              null != (f = d.drawingInfo) &&
              f.renderer &&
              (delete a.layerDefinition.minScale,
              delete a.layerDefinition.maxScale,
              await rt(a.layerDefinition.drawingInfo.renderer, r),
              'visualVariables' in s &&
                s.visualVariables &&
                s.visualVariables[0]))
          ) {
            const e = s.visualVariables[0];
            if (
              'size' === e.type &&
              e.maxSize &&
              'number' != typeof e.maxSize &&
              e.minSize &&
              'number' != typeof e.minSize
            ) {
              const t = (0, b.V3)(e, c.scale);
              (a.layerDefinition.drawingInfo.renderer.visualVariables[0].minSize =
                t.minSize),
                (a.layerDefinition.drawingInfo.renderer.visualVariables[0].maxSize =
                  t.maxSize);
            }
          }
          const t = (0, _e.cx)(l);
          t &&
            (a.layerDefinition || (a.layerDefinition = {}),
            (a.layerDefinition.definitionExpression = a.layerDefinition
              .definitionExpression
              ? `(${a.layerDefinition.definitionExpression}) AND (${t})`
              : t));
        }
        var m;
        return a;
      }
      async function Ee(e, { layerView: t, printTemplate: r }, i) {
        return (
          e.legendEnabled && i.legendLayers.push({ id: e.id }),
          Je(e, await it(t), r, i)
        );
      }
      async function ke(e, { printTemplate: t }, r) {
        return Je(e, null, t, r);
      }
      function ze(e, t) {
        e.legendEnabled && t.legendLayers.push({ id: e.id });
        const r = {
          layerType: (i = e.write()).layerType,
          customParameters: i.customParameters,
        };
        var i;
        if (
          ((r.bandIds = e.bandIds),
          (r.compressionQuality = e.compressionQuality),
          (r.format = e.format),
          (r.interpolation = e.interpolation),
          (e.mosaicRule || e.definitionExpression) &&
            (r.mosaicRule = e.exportImageServiceParameters.mosaicRule.toJSON()),
          e.renderingRule || e.renderer)
        )
          if (t.is11xService)
            e.renderingRule && (r.renderingRule = e.renderingRule.toJSON()),
              e.renderer &&
                ((r.layerDefinition = r.layerDefinition || {}),
                (r.layerDefinition.drawingInfo =
                  r.layerDefinition.drawingInfo || {}),
                (r.layerDefinition.drawingInfo.renderer = e.renderer.toJSON()));
          else {
            const t =
              e.exportImageServiceParameters.combineRendererWithRenderingRule();
            t && (r.renderingRule = t.toJSON());
          }
        return He(r, e), r;
      }
      async function qe(e, t, r) {
        var i;
        if ('flow' === (null == (i = e.renderer) ? void 0 : i.type))
          return $e(e, t, r);
        e.legendEnabled && r.legendLayers.push({ id: e.id });
        const n = {
          bandIds: (a = e.write() || {}).bandIds,
          customParameters: a.customParameters,
          interpolation: a.interpolation,
          layerDefinition: a.layerDefinition,
        };
        var a;
        return (n.layerType = 'ArcGISImageServiceLayer'), He(n, e), n;
      }
      async function Ae(e, t, r) {
        const i = t.printTemplate;
        if (r.is11xService) {
          const t = { type: 'kml' };
          return (
            e.write(t, { origin: 'web-map' }),
            delete t.layerType,
            (t.url = (0, f.Fv)(e.url)),
            t
          );
        }
        {
          const n = [],
            a = t.layerView;
          a.allVisibleMapImages.forEach((t, r) => {
            const i = {
              id: `${e.id}_image${r}`,
              type: 'image',
              title: e.id,
              minScale: e.minScale || 0,
              maxScale: e.maxScale || 0,
              opacity: e.opacity,
              extent: t.extent,
            };
            'data:image/png;base64,' === t.href.substr(0, 22)
              ? (i.imageData = t.href.substr(22))
              : (i.url = t.href),
              n.push(i);
          });
          const s = [
              ...a.allVisiblePoints.items,
              ...a.allVisiblePolylines.items,
              ...a.allVisiblePolygons.items,
            ],
            o = { id: e.id, ...(await Je(null, s, i, r)) };
          return n.push(o), n;
        }
      }
      function Ue(e, { view: t }, r) {
        let i;
        const n = { id: e.id, subLayerIds: [] };
        let a = [];
        const s = t.scale,
          o = (e) => {
            const t = 0 === s,
              r = 0 === e.minScale || s <= e.minScale,
              i = 0 === e.maxScale || s >= e.maxScale;
            if (e.visible && (t || (r && i)))
              if (e.sublayers) e.sublayers.forEach(o);
              else {
                const t = e.toExportImageJSON(),
                  r = {
                    id: e.id,
                    name: e.title,
                    layerDefinition: {
                      drawingInfo: t.drawingInfo,
                      definitionExpression: t.definitionExpression,
                      source: t.source,
                    },
                  };
                a.unshift(r), n.subLayerIds.push(e.id);
              }
          };
        var l;
        return (
          e.sublayers && e.sublayers.forEach(o),
          a.length &&
            ((a = a.map(({ id: e, name: t, layerDefinition: r }) => ({
              id: e,
              name: t,
              layerDefinition: r,
            }))),
            (i = {
              layerType: (l = e.write()).layerType,
              customParameters: l.customParameters,
            }),
            (i.layers = a),
            (i.visibleLayers = e.capabilities.exportMap.supportsDynamicLayers
              ? void 0
              : n.subLayerIds),
            He(i, e),
            e.legendEnabled && r.legendLayers.push(n)),
          i
        );
      }
      async function Ze({ layerView: e, printTemplate: t }, r) {
        const i = [],
          n = e.layer;
        if ((0, y.pC)(n.featureCollections))
          for (const e of n.featureCollections) {
            const n = await Je(e, e.source, t, r);
            n && i.push(...n.featureCollection.layers);
          }
        else if ((0, y.pC)(n.sublayers))
          for (const e of n.sublayers) {
            const n = await Je(null, e.graphics, t, r);
            n && i.push(...n.featureCollection.layers);
          }
        return { featureCollection: { layers: i } };
      }
      async function $e(e, { printTemplate: t, view: r }, i) {
        const n = { type: 'image' },
          a = { format: 'png', ignoreBackground: !0, layers: [e], rotation: 0 },
          s = i.ssExtent || r.extent.clone();
        let o = 96,
          l = !0,
          u = !0;
        if (t.exportOptions) {
          const e = t.exportOptions;
          e.dpi > 0 && (o = e.dpi),
            e.width > 0 && (l = e.width % 2 == r.width % 2),
            e.height > 0 && (u = e.height % 2 == r.height % 2);
        }
        if (
          'map-only' === t.layout &&
          t.scalePreserved &&
          (!t.outScale || t.outScale === r.scale) &&
          96 === o &&
          (!l || !u) &&
          ((a.area = { x: 0, y: 0, width: r.width, height: r.height }),
          l || (a.area.width -= 1),
          u || (a.area.height -= 1),
          !i.ssExtent)
        ) {
          const e = r.toMap((0, d.vW)(a.area.width, a.area.height));
          (s.ymin = e.y), (s.xmax = e.x), (i.ssExtent = s);
        }
        n.extent = s.clone()._normalize(!0).toJSON();
        const c = await r.takeScreenshot(a),
          { data: p } = (0, f.sJ)(c.dataUrl);
        return (n.imageData = p), n;
      }
      async function We(e, { layerView: t, printTemplate: r }, i) {
        return (
          e.legendEnabled && i.legendLayers.push({ id: e.id }),
          Je(e, await it(t), r, i)
        );
      }
      function Be(e, t) {
        e.legendEnabled && t.legendLayers.push({ id: e.id });
        const r = {
          layerType: (i = e.write()).layerType,
          customParameters: i.customParameters,
        };
        var i;
        return He(r, e), r;
      }
      async function Ke(e, t, r) {
        if (r.is11xService && e.serviceUrl && e.styleUrl) {
          const t = et(e.styleUrl, e.apiKey),
            i = et(e.serviceUrl, e.apiKey);
          if ((!t && !i) || '2.1.0' !== r.cimVersion) {
            const r = { type: 'VectorTileLayer' };
            return (
              (r.styleUrl = (0, f.Fv)(e.styleUrl)),
              (r.token = t),
              i !== t &&
                (r.additionalTokens = [{ url: e.serviceUrl, token: i }]),
              r
            );
          }
        }
        return $e(e, t, r);
      }
      function Xe(e) {
        const t = {
          type: 'WebTiledLayer',
          urlTemplate: e.urlTemplate.replace(/\${/g, '{'),
          credits: e.copyright,
        };
        return (
          e.subDomains &&
            e.subDomains.length > 0 &&
            (t.subDomains = e.subDomains),
          t
        );
      }
      function Qe(e) {
        let t;
        const r = [],
          i = (e) => {
            e.visible &&
              (e.sublayers
                ? e.sublayers.forEach(i)
                : e.name && r.unshift(e.name));
          };
        return (
          e.sublayers && e.sublayers.forEach(i),
          r.length &&
            (t = {
              type: 'wms',
              customLayerParameters: e.customLayerParameters,
              customParameters: e.customParameters,
              transparentBackground: e.imageTransparency,
              visibleLayers: r,
              url: (0, f.Fv)(e.url),
              version: e.version,
            }),
          t
        );
      }
      function Ye(e) {
        const t = e.activeLayer;
        return {
          type: 'wmts',
          customLayerParameters: e.customLayerParameters,
          customParameters: e.customParameters,
          format: t.imageFormat,
          layer: t.id,
          style: t.styleId,
          tileMatrixSet: t.tileMatrixSetId,
          url: (0, f.Fv)(e.url),
        };
      }
      function He(e, t) {
        t.url &&
          ((e.url = (0, f.Fv)(e.url || t.url)),
          (e.token = et(e.url, t.apiKey)));
      }
      function et(e, t) {
        var r, i;
        return (0, Ve.r)(e) && (t || l.Z.apiKey)
          ? t || l.Z.apiKey
          : null == (r = u.id) || null == (i = r.findCredential(e))
          ? void 0
          : i.token;
      }
      async function tt(e, t) {
        t.canvas || (t.canvas = document.createElement('canvas'));
        const r = 1024;
        (t.canvas.width = r), (t.canvas.height = r);
        const i = t.canvas.getContext('2d');
        let n, a;
        if (e.path) {
          var s;
          const t = new Path2D(e.path);
          t.closePath(),
            (i.fillStyle = Array.isArray(e.color)
              ? `rgba(${e.color[0]},${e.color[1]},${e.color[2]},${
                  e.color[3] / 255
                })`
              : 'rgb(0,0,0)'),
            i.fill(t);
          const o = (function (e, t = 15) {
            const r = e.canvas.width,
              i = e.canvas.height,
              n = e.getImageData(0, 0, r, i).data;
            let a, s, o, l, u, c;
            e: for (s = i; s--; )
              for (a = r; a--; )
                if (n[4 * (r * s + a) + 3] > t) {
                  c = s;
                  break e;
                }
            if (!c) return null;
            e: for (a = r; a--; )
              for (s = c + 1; s--; )
                if (n[4 * (r * s + a) + 3] > t) {
                  u = a;
                  break e;
                }
            e: for (a = 0; a <= u; ++a)
              for (s = c + 1; s--; )
                if (n[4 * (r * s + a) + 3] > t) {
                  o = a;
                  break e;
                }
            e: for (s = 0; s <= c; ++s)
              for (a = o; a <= u; ++a)
                if (n[4 * (r * s + a) + 3] > t) {
                  l = s;
                  break e;
                }
            return { x: o, y: l, width: u - o, height: c - l };
          })(i);
          if (!o) return null;
          i.clearRect(0, 0, r, r);
          const l = (0, d.F2)(e.size) / Math.max(o.width, o.height);
          i.scale(l, l);
          const u = r / l,
            c = u / 2 - o.width / 2 - o.x,
            p = u / 2 - o.height / 2 - o.y;
          if (
            (i.translate(c, p),
            Array.isArray(e.color) && i.fill(t),
            null != (s = e.outline) &&
              s.width &&
              Array.isArray(e.outline.color))
          ) {
            const r = e.outline;
            (i.lineWidth = (0, d.F2)(r.width) / l),
              (i.lineJoin = 'round'),
              (i.strokeStyle = `rgba(${r.color[0]},${r.color[1]},${
                r.color[2]
              },${r.color[3] / 255})`),
              i.stroke(t),
              (o.width += i.lineWidth),
              (o.height += i.lineWidth);
          }
          (o.width *= l), (o.height *= l);
          const y = i.getImageData(
            512 - o.width / 2,
            512 - o.height / 2,
            Math.ceil(o.width),
            Math.ceil(o.height),
          );
          (n = y.width),
            (a = y.height),
            (i.canvas.width = n),
            (i.canvas.height = a),
            i.putImageData(y, 0, 0);
        } else {
          const t =
              'image/svg+xml' === e.contentType
                ? 'data:image/svg+xml;base64,' + e.imageData
                : e.url,
            r = (await (0, c.default)(t, { responseType: 'image' })).data;
          (n = (0, d.F2)(e.width)),
            (a = (0, d.F2)(e.height)),
            (i.canvas.width = n),
            (i.canvas.height = a),
            i.drawImage(r, 0, 0, i.canvas.width, i.canvas.height);
        }
        return {
          type: 'esriPMS',
          imageData: i.canvas.toDataURL('image/png').substr(22),
          angle: e.angle,
          contentType: 'image/png',
          height: (0, d.Wz)(a),
          width: (0, d.Wz)(n),
          xoffset: e.xoffset,
          yoffset: e.yoffset,
        };
      }
      async function rt(e, t) {
        const r = e.type;
        if ('simple' === r && nt(e.symbol)) e.symbol = await tt(e.symbol, t);
        else if ('uniqueValue' === r || 'classBreaks' === r) {
          nt(e.defaultSymbol) &&
            (e.defaultSymbol = await tt(e.defaultSymbol, t));
          const i =
            e['uniqueValue' === r ? 'uniqueValueInfos' : 'classBreakInfos'];
          if (i)
            for (const e of i)
              nt(e.symbol) && (e.symbol = await tt(e.symbol, t));
        }
      }
      async function it(e) {
        return e.queryFeatures(e.createQuery()).then((e) => e.features);
      }
      function nt(e) {
        return (
          e &&
          (e.path ||
            'image/svg+xml' === e.contentType ||
            (e.url && e.url.endsWith('.svg')))
        );
      }
      var at = r(59633);
      const st = new n.X({
        esriExecutionTypeSynchronous: 'sync',
        esriExecutionTypeAsynchronous: 'async',
      });
      let ot = class extends at.Z {
        constructor(...e) {
          super(...e), (this._gpMetadata = null), (this.updateDelay = 1e3);
        }
        get mode() {
          return this._gpMetadata && this._gpMetadata.executionType
            ? st.fromJSON(this._gpMetadata.executionType)
            : 'sync';
        }
        execute(e, t) {
          return (
            e && (e.updateDelay = this.updateDelay),
            Ie(this.url, e, { ...this.requestOptions, ...t })
          );
        }
        async _getGpPrintParams(e) {
          const t = Oe(this.url);
          return Ge(e, Me.get(t));
        }
      };
      (0, i._)([(0, a.Cb)()], ot.prototype, '_gpMetadata', void 0),
        (0, i._)([(0, a.Cb)({ readOnly: !0 })], ot.prototype, 'mode', null),
        (0, i._)([(0, a.Cb)()], ot.prototype, 'updateDelay', void 0),
        (ot = (0, i._)([(0, o.j)('esri.tasks.PrintTask')], ot));
      const lt = ot;
    },
    59633: (e, t, r) => {
      r.d(t, { Z: () => u });
      var i = r(43697),
        n = r(15923),
        a = r(17452),
        s = r(5600),
        o = (r(67676), r(80442), r(75215), r(52011));
      let l = class extends n.Z {
        constructor(...e) {
          super(...e), (this.requestOptions = null), (this.url = null);
        }
        normalizeCtorArgs(e, t) {
          return 'string' != typeof e ? e : { url: e, ...t };
        }
        get parsedUrl() {
          return this._parseUrl(this.url);
        }
        _parseUrl(e) {
          return e ? (0, a.mN)(e) : null;
        }
        _encode(e, t, r) {
          const i = {};
          for (const n in e) {
            if ('declaredClass' === n) continue;
            const a = e[n];
            if (null != a && 'function' != typeof a)
              if (Array.isArray(a)) {
                i[n] = [];
                for (let e = 0; e < a.length; e++) i[n][e] = this._encode(a[e]);
              } else if ('object' == typeof a)
                if (a.toJSON) {
                  const e = a.toJSON(r && r[n]);
                  i[n] = t ? e : JSON.stringify(e);
                } else i[n] = t ? a : JSON.stringify(a);
              else i[n] = a;
          }
          return i;
        }
      };
      (0, i._)([(0, s.Cb)({ readOnly: !0 })], l.prototype, 'parsedUrl', null),
        (0, i._)([(0, s.Cb)()], l.prototype, 'requestOptions', void 0),
        (0, i._)([(0, s.Cb)({ type: String })], l.prototype, 'url', void 0),
        (l = (0, i._)([(0, o.j)('esri.tasks.Task')], l));
      const u = l;
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
      function n(e, t) {
        var r;
        return 'floorInfo' in t && null != (r = t.floorInfo) && r.floorField
          ? s(e, t.floorInfo.floorField)
          : null;
      }
      function a(e, t) {
        const { definitionExpression: r } = t;
        return e ? (r ? `(${r}) AND (${e})` : e) : r;
      }
      function s(e, t) {
        if (null == e || !e.length) return null;
        const r = e.filter((e) => '' !== e).map((e) => `'${e}'`);
        return r.push("''"), `${t} IN (${r.join(',')}) OR ${t} IS NULL`;
      }
      r.d(t, { Hp: () => a, cx: () => i, ff: () => n });
    },
  },
]);
