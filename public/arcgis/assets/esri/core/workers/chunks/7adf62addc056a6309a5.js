'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [7054],
  {
    88764: (e, t, s) => {
      s.d(t, { q: () => o });
      var i,
        r,
        n,
        a = { exports: {} };
      (i = a),
        (r = function () {
          function e(s, i, r, n, a) {
            for (; n > r; ) {
              if (n - r > 600) {
                var o = n - r + 1,
                  u = i - r + 1,
                  l = Math.log(o),
                  c = 0.5 * Math.exp((2 * l) / 3),
                  h =
                    0.5 *
                    Math.sqrt((l * c * (o - c)) / o) *
                    (u - o / 2 < 0 ? -1 : 1);
                e(
                  s,
                  i,
                  Math.max(r, Math.floor(i - (u * c) / o + h)),
                  Math.min(n, Math.floor(i + ((o - u) * c) / o + h)),
                  a,
                );
              }
              var d = s[i],
                f = r,
                p = n;
              for (t(s, r, i), a(s[n], d) > 0 && t(s, r, n); f < p; ) {
                for (t(s, f, p), f++, p--; a(s[f], d) < 0; ) f++;
                for (; a(s[p], d) > 0; ) p--;
              }
              0 === a(s[r], d) ? t(s, r, p) : t(s, ++p, n),
                p <= i && (r = p + 1),
                i <= p && (n = p - 1);
            }
          }
          function t(e, t, s) {
            var i = e[t];
            (e[t] = e[s]), (e[s] = i);
          }
          function s(e, t) {
            return e < t ? -1 : e > t ? 1 : 0;
          }
          return function (t, i, r, n, a) {
            e(t, i, r || 0, n || t.length - 1, a || s);
          };
        }),
        void 0 !== (n = r()) && (i.exports = n);
      const o = a.exports;
    },
    74669: (e, t, s) => {
      s.d(t, { Z: () => r });
      var i = s(69801);
      class r {
        constructor(e, t) {
          (this._storage = new i.WJ()),
            (this._storage.maxSize = e),
            t && this._storage.registerRemoveFunc('', t);
        }
        put(e, t) {
          this._storage.put(e, t, 1, 1);
        }
        pop(e) {
          return this._storage.pop(e);
        }
        get(e) {
          return this._storage.get(e);
        }
        clear() {
          this._storage.clearAll();
        }
        destroy() {
          this._storage.destroy();
        }
      }
    },
    37455: (e, t, s) => {
      s.d(t, { N: () => i });
      const i = {
        convertToGEGeometry: function (e, t) {
          return null == t ? null : e.convertJSONToGeometry(t);
        },
        exportPoint: function (e, t, s) {
          const i = new r(e.getPointX(t), e.getPointY(t), s),
            n = e.hasZ(t),
            a = e.hasM(t);
          return n && (i.z = e.getPointZ(t)), a && (i.m = e.getPointM(t)), i;
        },
        exportPolygon: function (e, t, s) {
          return new n(e.exportPaths(t), s, e.hasZ(t), e.hasM(t));
        },
        exportPolyline: function (e, t, s) {
          return new a(e.exportPaths(t), s, e.hasZ(t), e.hasM(t));
        },
        exportMultipoint: function (e, t, s) {
          return new o(e.exportPoints(t), s, e.hasZ(t), e.hasM(t));
        },
        exportExtent: function (e, t, s) {
          const i = e.hasZ(t),
            r = e.hasM(t),
            n = new u(
              e.getXMin(t),
              e.getYMin(t),
              e.getXMax(t),
              e.getYMax(t),
              s,
            );
          if (i) {
            const s = e.getZExtent(t);
            (n.zmin = s.vmin), (n.zmax = s.vmax);
          }
          if (r) {
            const s = e.getMExtent(t);
            (n.mmin = s.vmin), (n.mmax = s.vmax);
          }
          return n;
        },
      };
      class r {
        constructor(e, t, s) {
          (this.x = e),
            (this.y = t),
            (this.spatialReference = s),
            (this.z = void 0),
            (this.m = void 0);
        }
      }
      class n {
        constructor(e, t, s, i) {
          (this.rings = e),
            (this.spatialReference = t),
            (this.hasZ = void 0),
            (this.hasM = void 0),
            s && (this.hasZ = s),
            i && (this.hasM = i);
        }
      }
      class a {
        constructor(e, t, s, i) {
          (this.paths = e),
            (this.spatialReference = t),
            (this.hasZ = void 0),
            (this.hasM = void 0),
            s && (this.hasZ = s),
            i && (this.hasM = i);
        }
      }
      class o {
        constructor(e, t, s, i) {
          (this.points = e),
            (this.spatialReference = t),
            (this.hasZ = void 0),
            (this.hasM = void 0),
            s && (this.hasZ = s),
            i && (this.hasM = i);
        }
      }
      class u {
        constructor(e, t, s, i, r) {
          (this.xmin = e),
            (this.ymin = t),
            (this.xmax = s),
            (this.ymax = i),
            (this.spatialReference = r),
            (this.zmin = void 0),
            (this.zmax = void 0),
            (this.mmin = void 0),
            (this.mmax = void 0);
        }
      }
    },
    82397: (e, t, s) => {
      s.d(t, {
        vY: () => o,
        J9: () => d,
        U1: () => f,
        Ie: () => p,
        G6: () => m,
      });
      var i = s(70586);
      s(33955);
      const r = (e, t, s) => [t, s],
        n = (e, t, s) => [t, s, e[2]],
        a = (e, t, s) => [t, s, e[2], e[3]];
      function o(e) {
        return e
          ? {
              originPosition:
                'upper-left' === e.originPosition
                  ? 'upperLeft'
                  : 'lower-left' === e.originPosition
                  ? 'lowerLeft'
                  : e.originPosition,
              scale: e.tolerance ? [e.tolerance, e.tolerance] : [1, 1],
              translate: (0, i.pC)(e.extent)
                ? [e.extent.xmin, e.extent.ymax]
                : [0, 0],
            }
          : null;
      }
      function u({ scale: e, translate: t }, s) {
        return s * e[0] + t[0];
      }
      function l({ scale: e, translate: t }, s) {
        return t[1] - s * e[1];
      }
      function c(e, t, s) {
        const i = new Array(s.length);
        if (!s.length) return i;
        const [r, n] = e.scale;
        let a = u(e, s[0][0]),
          o = l(e, s[0][1]);
        i[0] = t(s[0], a, o);
        for (let e = 1; e < s.length; e++) {
          const u = s[e];
          (a += u[0] * r), (o -= u[1] * n), (i[e] = t(u, a, o));
        }
        return i;
      }
      function h(e, t, s) {
        const i = new Array(s.length);
        for (let r = 0; r < s.length; r++) i[r] = c(e, t, s[r]);
        return i;
      }
      function d(e, t, s, o, u) {
        return (
          (0, i.pC)(s) &&
            (t.points = (function (e, t, s, i) {
              return c(e, s ? (i ? a : n) : i ? n : r, t);
            })(e, s.points, o, u)),
          t
        );
      }
      function f(e, t, s, r, n) {
        return (
          (0, i.Wi)(s) ||
            ((t.x = u(e, s.x)),
            (t.y = l(e, s.y)),
            t !== s && (r && (t.z = s.z), n && (t.m = s.m))),
          t
        );
      }
      function p(e, t, s, o, u) {
        return (
          (0, i.pC)(s) &&
            (t.rings = (function (e, t, s, i) {
              return h(e, s ? (i ? a : n) : i ? n : r, t);
            })(e, s.rings, o, u)),
          t
        );
      }
      function m(e, t, s, o, u) {
        return (
          (0, i.pC)(s) &&
            (t.paths = (function (e, t, s, i) {
              return h(e, s ? (i ? a : n) : i ? n : r, t);
            })(e, s.paths, o, u)),
          t
        );
      }
    },
    29730: (e, t, s) => {
      s.d(t, { Y: () => n });
      var i = s(70586);
      function r(e, t) {
        return e ? (t ? 4 : 3) : t ? 3 : 2;
      }
      function n(e, t, s, n, u) {
        if ((0, i.Wi)(t) || !t.lengths.length) return null;
        const l =
          'upperLeft' === (null == u ? void 0 : u.originPosition) ? -1 : 1;
        e.lengths.length && (e.lengths.length = 0),
          e.coords.length && (e.coords.length = 0);
        const c = e.coords,
          h = [],
          d = s
            ? [
                Number.POSITIVE_INFINITY,
                Number.NEGATIVE_INFINITY,
                Number.POSITIVE_INFINITY,
                Number.NEGATIVE_INFINITY,
                Number.POSITIVE_INFINITY,
                Number.NEGATIVE_INFINITY,
              ]
            : [
                Number.POSITIVE_INFINITY,
                Number.NEGATIVE_INFINITY,
                Number.POSITIVE_INFINITY,
                Number.NEGATIVE_INFINITY,
              ],
          { lengths: f, coords: p } = t,
          m = r(s, n);
        let g = 0;
        for (const e of f) {
          const t = a(d, p, g, e, s, n, l);
          t && h.push(t), (g += e * m);
        }
        if (
          (h.sort((e, t) => {
            let i = l * e[2] - l * t[2];
            return 0 === i && s && (i = e[4] - t[4]), i;
          }),
          h.length)
        ) {
          let e = 6 * h[0][2];
          (c[0] = h[0][0] / e),
            (c[1] = h[0][1] / e),
            s && ((e = 6 * h[0][4]), (c[2] = 0 !== e ? h[0][3] / e : 0)),
            (c[0] < d[0] ||
              c[0] > d[1] ||
              c[1] < d[2] ||
              c[1] > d[3] ||
              (s && (c[2] < d[4] || c[2] > d[5]))) &&
              (c.length = 0);
        }
        if (!c.length) {
          const e = t.lengths[0] ? o(p, 0, f[0], s, n) : null;
          if (!e) return null;
          (c[0] = e[0]), (c[1] = e[1]), s && e.length > 2 && (c[2] = e[2]);
        }
        return e;
      }
      function a(e, t, s, i, n, a, o = 1) {
        const u = r(n, a);
        let l = s,
          c = s + u,
          h = 0,
          d = 0,
          f = 0,
          p = 0,
          m = 0;
        for (let s = 0, r = i - 1; s < r; s++, l += u, c += u) {
          const s = t[l],
            i = t[l + 1],
            r = t[l + 2],
            a = t[c],
            o = t[c + 1],
            u = t[c + 2];
          let g = s * o - a * i;
          (p += g),
            (h += (s + a) * g),
            (d += (i + o) * g),
            n && ((g = s * u - a * r), (f += (r + u) * g), (m += g)),
            s < e[0] && (e[0] = s),
            s > e[1] && (e[1] = s),
            i < e[2] && (e[2] = i),
            i > e[3] && (e[3] = i),
            n && (r < e[4] && (e[4] = r), r > e[5] && (e[5] = r));
        }
        if ((p * o > 0 && (p *= -1), m * o > 0 && (m *= -1), !p)) return null;
        const g = [h, d, 0.5 * p];
        return n && ((g[3] = f), (g[4] = 0.5 * m)), g;
      }
      function o(e, t, s, i, n) {
        const a = r(i, n);
        let o = t,
          d = t + a,
          f = 0,
          p = 0,
          m = 0,
          g = 0;
        for (let t = 0, r = s - 1; t < r; t++, o += a, d += a) {
          const t = e[o],
            s = e[o + 1],
            r = e[o + 2],
            n = e[d],
            a = e[d + 1],
            _ = e[d + 2],
            y = i ? l(t, s, r, n, a, _) : u(t, s, n, a);
          if (y)
            if (((f += y), i)) {
              const e = h(t, s, r, n, a, _);
              (p += y * e[0]), (m += y * e[1]), (g += y * e[2]);
            } else {
              const e = c(t, s, n, a);
              (p += y * e[0]), (m += y * e[1]);
            }
        }
        return f > 0
          ? i
            ? [p / f, m / f, g / f]
            : [p / f, m / f]
          : s > 0
          ? i
            ? [e[t], e[t + 1], e[t + 2]]
            : [e[t], e[t + 1]]
          : null;
      }
      function u(e, t, s, i) {
        const r = s - e,
          n = i - t;
        return Math.sqrt(r * r + n * n);
      }
      function l(e, t, s, i, r, n) {
        const a = i - e,
          o = r - t,
          u = n - s;
        return Math.sqrt(a * a + o * o + u * u);
      }
      function c(e, t, s, i) {
        return [e + 0.5 * (s - e), t + 0.5 * (i - t)];
      }
      function h(e, t, s, i, r, n) {
        return [e + 0.5 * (i - e), t + 0.5 * (r - t), s + 0.5 * (n - s)];
      }
    },
    7673: (e, t, s) => {
      s.d(t, { Z: () => we });
      var i = s(20102),
        r = s(22974),
        n = s(70586),
        a = s(69801),
        o = s(67900),
        u = s(60437),
        l = s(24470),
        c = s(20322),
        h = s(33955),
        d = s(82526),
        f = s(8744),
        p = s(74669),
        m = s(41534);
      const g = new (class {
          constructor(e, t) {
            (this._cache = new p.Z(e)), (this._invalidCache = new p.Z(t));
          }
          get(e, t) {
            const s = `${t.uid}:${e}`,
              i = this._cache.get(s);
            if (i) return i;
            if (void 0 !== this._invalidCache.get(s)) return null;
            try {
              const i = m.WhereClause.create(e, t);
              return this._cache.put(s, i), i;
            } catch {
              return this._invalidCache.put(s, null), null;
            }
          }
        })(50, 500),
        _ = 'feature-store:unsupported-query',
        y = ' as ',
        I = new Set([
          'esriFieldTypeOID',
          'esriFieldTypeSmallInteger',
          'esriFieldTypeInteger',
          'esriFieldTypeSingle',
          'esriFieldTypeDouble',
          'esriFieldTypeLong',
          'esriFieldTypeDate',
        ]);
      function E(e, t) {
        if (!t) return !0;
        const s = g.get(t, e);
        if (!s) throw new i.Z(_, 'invalid SQL expression', { where: t });
        if (!s.isStandardized)
          throw new i.Z(_, 'where clause is not standard', { where: t });
        return T(e, s.fieldNames, 'where clause contains missing fields'), !0;
      }
      function S(e, t, s) {
        if (!t) return !0;
        const r = g.get(t, e);
        if (!r) throw new i.Z(_, 'invalid SQL expression', { having: t });
        if (!r.isAggregate)
          throw new i.Z(
            _,
            'having does not contain a valid aggregate function',
            { having: t },
          );
        const n = r.fieldNames;
        if (
          (T(e, n, 'having contains missing fields'),
          !r.getExpressions().every((t) => {
            const { aggregateType: i, field: r } = t,
              n = e.has(r) && e.get(r).name;
            return s.some((t) => {
              const { onStatisticField: s, statisticType: r } = t;
              return (
                (e.has(s) && e.get(s).name) === n &&
                r.toLowerCase().trim() === i
              );
            });
          }))
        )
          throw new i.Z(
            _,
            'expressions in having should also exist in outStatistics',
            { having: t },
          );
        return !0;
      }
      function x(e, t) {
        return e ? g.get(e, t) : null;
      }
      function T(e, t, s, r = !0) {
        const n = [];
        for (const s of t)
          if ('*' !== s && !e.has(s))
            if (r) {
              const t = R(s);
              try {
                const s = x(t, e);
                if (!s)
                  throw new i.Z(_, 'invalid SQL expression', { where: t });
                if (!s.isStandardized)
                  throw new i.Z(_, 'expression is not standard', { clause: s });
                T(e, s.fieldNames, 'expression contains missing fields');
              } catch (e) {
                const t = e && e.details;
                if (t && (t.clause || t.where)) throw e;
                t && t.missingFields ? n.push(...t.missingFields) : n.push(s);
              }
            } else n.push(s);
        if (n.length) throw new i.Z(_, s, { missingFields: n });
      }
      function R(e) {
        return e.split(y)[0];
      }
      function w(e) {
        return e.split(y)[1];
      }
      function F(e, t) {
        const s = t.get(e);
        return !!s && !I.has(s.type);
      }
      var A = s(37427),
        b = s(61159),
        v = s(35308),
        N = s(49600),
        C = s(82397),
        P = s(98732),
        O = s(8418);
      class G {
        constructor(e, t, s) {
          (this._fieldDataCache = new Map()),
            (this._returnDistinctMap = new Map()),
            (this.returnDistinctValues = e.returnDistinctValues),
            (this.fieldsIndex = s),
            (this.featureAdapter = t);
          const i = e.outFields;
          if (i && -1 === i.indexOf('*')) {
            this.outFields = i;
            let e = 0;
            for (const t of i) {
              const i = R(t),
                r = this.fieldsIndex.get(i),
                n = r ? null : x(i, s),
                a = r ? r.name : w(t) || 'FIELD_EXP_' + e++;
              this._fieldDataCache.set(t, { alias: a, clause: n });
            }
          }
        }
        countDistinctValues(e) {
          return this.returnDistinctValues
            ? (e.forEach((e) => this.getAttributes(e)),
              this._returnDistinctMap.size)
            : e.length;
        }
        getAttributes(e) {
          const t = this._processAttributesForOutFields(e);
          return this._processAttributesForDistinctValues(t);
        }
        getFieldValue(e, t, s) {
          const i = s ? s.name : t;
          let r = null;
          return (
            this._fieldDataCache.has(i)
              ? (r = this._fieldDataCache.get(i).clause)
              : s ||
                ((r = x(t, this.fieldsIndex)),
                this._fieldDataCache.set(i, { alias: i, clause: r })),
            s
              ? this.featureAdapter.getAttribute(e, i)
              : r.calculateValue(e, this.featureAdapter)
          );
        }
        getNormalizedValue(e, t) {
          const s = t.normalizationType,
            i = t.normalizationTotal;
          let r = this.getFieldValue(e, t.field, t.fieldInfo);
          if (s && Number.isFinite(r)) {
            const n = this.getFieldValue(
              e,
              t.normalizationField,
              t.normalizationFieldInfo,
            );
            r = (0, O.fk)(r, s, n, i);
          }
          return r;
        }
        getExpressionValue(e, t, s) {
          const i = { attributes: this.featureAdapter.getAttributes(e) },
            r = s.createExecContext(i, t.viewInfo);
          return s.executeFunction(t.compiledFunc, r);
        }
        validateItem(e, t) {
          return (
            this._fieldDataCache.has(t) ||
              this._fieldDataCache.set(t, {
                alias: t,
                clause: x(t, this.fieldsIndex),
              }),
            this._fieldDataCache
              .get(t)
              .clause.testFeature(e, this.featureAdapter)
          );
        }
        validateItems(e, t) {
          return (
            this._fieldDataCache.has(t) ||
              this._fieldDataCache.set(t, {
                alias: t,
                clause: x(t, this.fieldsIndex),
              }),
            this._fieldDataCache.get(t).clause.testSet(e, this.featureAdapter)
          );
        }
        _processAttributesForOutFields(e) {
          const t = this.outFields;
          if (!t || !t.length) return this.featureAdapter.getAttributes(e);
          const s = {};
          for (const i of t) {
            const { alias: t, clause: r } = this._fieldDataCache.get(i);
            s[t] = r
              ? r.calculateValue(e, this.featureAdapter)
              : this.featureAdapter.getAttribute(e, t);
          }
          return s;
        }
        _processAttributesForDistinctValues(e) {
          if ((0, n.Wi)(e) || !this.returnDistinctValues) return e;
          const t = this.outFields,
            s = [];
          if (t)
            for (const i of t) {
              const { alias: t } = this._fieldDataCache.get(i);
              s.push(e[t]);
            }
          else for (const t in e) s.push(e[t]);
          const i = `${(t || ['*']).join(',')}=${s.join(',')}`;
          let r = this._returnDistinctMap.get(i) || 0;
          return this._returnDistinctMap.set(i, ++r), r > 1 ? null : e;
        }
      }
      var Q,
        k,
        M = s(17590),
        V = s(11490),
        L = s(35671),
        z = s(59266);
      class D {
        constructor(e, t, s) {
          (this.items = e),
            (this.queryGeometry = t),
            (this.definitionExpression = s.definitionExpression),
            (this.geometryType = s.geometryType),
            (this.hasM = s.hasM),
            (this.hasZ = s.hasZ),
            (this.objectIdField = s.objectIdField),
            (this.spatialReference = s.spatialReference),
            (this.fieldsIndex = s.fieldsIndex),
            (this.timeInfo = s.timeInfo),
            (this.featureAdapter = s.featureAdapter),
            (this.aggregateAdapter = s.aggregateAdapter);
        }
        get size() {
          return this.items.length;
        }
        createQueryResponseForCount(e) {
          const t = new G(e, this.featureAdapter, this.fieldsIndex);
          if (!e.outStatistics) return t.countDistinctValues(this.items);
          const { groupByFieldsForStatistics: s, having: i } = e;
          if (!(null == s ? void 0 : s.length)) return 1;
          const r = new Map(),
            n = new Map(),
            a = new Set(),
            o = e.outStatistics;
          for (const e of o) {
            const { statisticType: o } = e,
              u = 'exceedslimit' !== o ? e.onStatisticField : void 0;
            if (!n.has(u)) {
              const e = [];
              for (const i of s) {
                const s = this._getAttributeValues(t, i, r);
                e.push(s);
              }
              n.set(u, this._calculateUniqueValues(e, t.returnDistinctValues));
            }
            const l = n.get(u);
            for (const e in l) {
              const { data: s, items: r } = l[e],
                n = s.join(',');
              (i && !t.validateItems(r, i)) || a.add(n);
            }
          }
          return a.size;
        }
        async createQueryResponse(e) {
          let t;
          return (
            (t = e.outStatistics
              ? e.outStatistics.some((e) => 'exceedslimit' === e.statisticType)
                ? this._createExceedsLimitQueryResponse(e)
                : await this._createStatisticsQueryResponse(e)
              : this._createFeatureQueryResponse(e)),
            e.returnQueryGeometry &&
              ((0, f.JY)(e.outSR) &&
              !(0, f.fS)(this.queryGeometry.spatialReference, e.outSR)
                ? (t.queryGeometry = (0, V.S2)({
                    spatialReference: e.outSR,
                    ...(0, A.iV)(
                      this.queryGeometry,
                      this.queryGeometry.spatialReference,
                      e.outSR,
                    ),
                  }))
                : (t.queryGeometry = (0, V.S2)({
                    spatialReference: e.outSR,
                    ...this.queryGeometry,
                  }))),
            t
          );
        }
        createSnappingResponse(e, t) {
          const s = this.featureAdapter,
            i = (function (e, t) {
              return e ? (t ? 4 : 3) : t ? 3 : 2;
            })(this.hasZ, this.hasM),
            { x: r, y: a } = e.point,
            o = 'number' == typeof e.distance ? e.distance : e.distance.x,
            u = 'number' == typeof e.distance ? e.distance : e.distance.y,
            l = { candidates: [] },
            c = 'esriGeometryPolygon' === this.geometryType,
            h = this._getPointCreator(e.point, this.spatialReference, t);
          for (const t of this.items) {
            const d = s.getGeometry(t);
            if ((0, n.Wi)(d)) continue;
            const { coords: f, lengths: p } = d;
            if (e.types & Q.EDGE) {
              let e = 0;
              for (let n = 0; n < p.length; n++) {
                const c = p[n];
                for (let n = 0; n < c; n++, e += i) {
                  const d = f[e],
                    p = f[e + 1];
                  if (n !== c - 1) {
                    const n = f[e + i],
                      c = f[e + i + 1],
                      { x: m, y: g } = U(r, a, d, p, n, c),
                      _ = (r - m) / o,
                      y = (a - g) / u,
                      I = _ * _ + y * y;
                    I <= 1 &&
                      l.candidates.push({
                        type: 'edge',
                        objectId: s.getObjectId(t),
                        distance: Math.sqrt(I),
                        target: h(m, g),
                        start: h(d, p),
                        end: h(n, c),
                      });
                  }
                }
              }
            }
            if (e.types & Q.VERTEX) {
              const e = c ? f.length - i : f.length;
              for (let n = 0; n < e; n += i) {
                const e = f[n],
                  i = f[n + 1],
                  c = (r - e) / o,
                  d = (a - i) / u,
                  p = c * c + d * d;
                p <= 1 &&
                  l.candidates.push({
                    type: 'vertex',
                    objectId: s.getObjectId(t),
                    distance: Math.sqrt(p),
                    target: h(e, i),
                  });
              }
            }
          }
          return l.candidates.sort((e, t) => e.distance - t.distance), l;
        }
        _getPointCreator(e, t, s) {
          const i =
            (0, n.pC)(s) && !(0, f.fS)(t, s)
              ? (e) => (0, A.iV)(e, t, s)
              : (e) => e;
          return null != e.z && null != e.m
            ? (t, s) => i({ x: t, y: s, z: e.z, m: e.m })
            : null != e.z
            ? (t, s) => i({ x: t, y: s, z: e.z })
            : null != e.m
            ? (t, s) => i({ x: t, y: s, m: e.m })
            : (e, t) => i({ x: e, y: t });
        }
        executeAttributesQuery(e) {
          const t = x(e.where, this.fieldsIndex);
          if (!t) return Promise.resolve(this);
          if (t.isStandardized) {
            let s = 0;
            const i = [];
            for (const e of this.items)
              t.testFeature(e, this.featureAdapter) && (i[s++] = e);
            const r = new D(i, this.queryGeometry, this);
            return (r.definitionExpression = e.where), Promise.resolve(r);
          }
          return Promise.reject(
            new TypeError('Where clause is not standardized'),
          );
        }
        executeAggregateIdsQuery(e) {
          if (
            !e.aggregateIds ||
            !e.aggregateIds.length ||
            (0, n.Wi)(this.aggregateAdapter)
          )
            return Promise.resolve(this);
          const t = new Set();
          for (const s of e.aggregateIds)
            this.aggregateAdapter
              .getFeatureObjectIds(s)
              .forEach((e) => t.add(e));
          const s = this.featureAdapter.getObjectId;
          return Promise.resolve(
            new D(
              this.items.filter((e) => t.has(s(e))),
              this.queryGeometry,
              this,
            ),
          );
        }
        executeObjectIdsQuery(e) {
          if (!e.objectIds || !e.objectIds.length) return Promise.resolve(this);
          const t = new Set(e.objectIds),
            s = this.featureAdapter.getObjectId;
          return Promise.resolve(
            new D(
              this.items.filter((e) => t.has(s(e))),
              this.queryGeometry,
              this,
            ),
          );
        }
        executeTimeQuery(e) {
          const t = (0, M.y)(this.timeInfo, e.timeExtent, this.featureAdapter);
          if (!(0, n.pC)(t)) return Promise.resolve(this);
          const s = this.items.filter(t);
          return Promise.resolve(new D(s, this.queryGeometry, this));
        }
        filterLatest() {
          const {
              trackIdField: e,
              startTimeField: t,
              endTimeField: s,
            } = this.timeInfo,
            i = s || t,
            r = new Map(),
            n = this.featureAdapter.getAttribute;
          for (const t of this.items) {
            const s = n(t, e),
              a = n(t, i),
              o = r.get(s);
            (!o || a > n(o, i)) && r.set(s, t);
          }
          const a = Array.from(r.values());
          return Promise.resolve(new D(a, this.queryGeometry, this));
        }
        async project(e) {
          if (!e || (0, f.fS)(this.spatialReference, e)) return this;
          const t = this.featureAdapter,
            s = (
              await (0, A.oj)(
                this.items.map((e) =>
                  (0, V.Op)(
                    this.geometryType,
                    this.hasZ,
                    this.hasM,
                    t.getGeometry(e),
                  ),
                ),
                this.spatialReference,
                e,
              )
            ).map((e, s) =>
              t.cloneWithGeometry(
                this.items[s],
                (0, P.GH)(e, this.hasZ, this.hasM),
              ),
            );
          return new D(s, this.queryGeometry, {
            definitionExpression: this.definitionExpression,
            geometryType: this.geometryType,
            hasM: this.hasM,
            hasZ: this.hasZ,
            objectIdField: this.objectIdField,
            spatialReference: e,
            fieldsIndex: this.fieldsIndex,
            timeInfo: this.timeInfo,
            featureAdapter: this.featureAdapter,
          });
        }
        async createSummaryStatisticsResponse(e, t) {
          const {
              field: s,
              valueExpression: i,
              normalizationField: r,
              normalizationType: n,
              normalizationTotal: a,
              minValue: o,
              maxValue: u,
              scale: l,
            } = t,
            c = this.fieldsIndex.isDateField(s),
            h = await this._getDataValues(e, {
              field: s,
              valueExpression: i,
              normalizationField: r,
              normalizationType: n,
              normalizationTotal: a,
              scale: l,
            }),
            d = (0, O.S5)({
              normalizationType: n,
              normalizationField: r,
              minValue: o,
              maxValue: u,
            }),
            f = this.fieldsIndex.get(s),
            p = { value: 0.5, fieldType: null == f ? void 0 : f.type },
            m = (0, L.qN)(f)
              ? (0, O.H0)({
                  values: h,
                  supportsNullCount: d,
                  percentileParams: p,
                })
              : (0, O.i5)({
                  values: h,
                  minValue: o,
                  maxValue: u,
                  useSampleStdDev: !n,
                  supportsNullCount: d,
                  percentileParams: p,
                });
          return (0, O.F_)(m, c);
        }
        async createUniqueValuesResponse(e, t) {
          const {
              field: s,
              valueExpression: i,
              domain: r,
              returnAllCodedValues: n,
              scale: a,
            } = t,
            o = await this._getDataValues(e, {
              field: s,
              valueExpression: i,
              scale: a,
            }),
            u = (0, O.eT)(o);
          return (0, O.Qm)(u, r, n);
        }
        async createClassBreaksResponse(e, t) {
          const {
              field: s,
              valueExpression: i,
              normalizationField: r,
              normalizationType: n,
              normalizationTotal: a,
              classificationMethod: o,
              standardDeviationInterval: u,
              minValue: l,
              maxValue: c,
              numClasses: h,
              scale: d,
            } = t,
            f = await this._getDataValues(e, {
              field: s,
              valueExpression: i,
              normalizationField: r,
              normalizationType: n,
              normalizationTotal: a,
              scale: d,
            }),
            p = (0, O.G2)(f, {
              field: s,
              normalizationField: r,
              normalizationType: n,
              normalizationTotal: a,
              classificationMethod: o,
              standardDeviationInterval: u,
              minValue: l,
              maxValue: c,
              numClasses: h,
            });
          return (0, O.DL)(p, o);
        }
        async createHistogramResponse(e, t) {
          const {
              field: s,
              valueExpression: i,
              normalizationField: r,
              normalizationType: n,
              normalizationTotal: a,
              classificationMethod: o,
              standardDeviationInterval: u,
              minValue: l,
              maxValue: c,
              numBins: h,
              scale: d,
            } = t,
            f = await this._getDataValues(e, {
              field: s,
              valueExpression: i,
              normalizationField: r,
              normalizationType: n,
              normalizationTotal: a,
              scale: d,
            });
          return (0, O.oF)(f, {
            field: s,
            normalizationField: r,
            normalizationType: n,
            normalizationTotal: a,
            classificationMethod: o,
            standardDeviationInterval: u,
            minValue: l,
            maxValue: c,
            numBins: h,
          });
        }
        _sortFeatures(e, t, s) {
          if (e.length > 1 && t && t.length)
            for (const i of t.reverse()) {
              const t = i.split(' '),
                r = t[0],
                n = this.fieldsIndex.get(r),
                a = t[1] && 'desc' === t[1].toLowerCase(),
                o = (0, O.Lq)(null == n ? void 0 : n.type, a);
              e.sort((e, t) => {
                const i = s(e, r, n),
                  a = s(t, r, n);
                return o(i, a);
              });
            }
        }
        _createFeatureQueryResponse(e) {
          const t = this.items,
            {
              geometryType: s,
              hasM: i,
              hasZ: r,
              objectIdField: n,
              spatialReference: a,
            } = this,
            {
              outFields: o,
              outSR: u,
              quantizationParameters: l,
              resultRecordCount: c,
              resultOffset: h,
              returnZ: d,
              returnM: f,
            } = e,
            p = null != c && t.length > (h || 0) + c,
            m =
              o &&
              (o.includes('*')
                ? [...this.fieldsIndex.fields]
                : o.map((e) => this.fieldsIndex.get(e)));
          return {
            exceededTransferLimit: p,
            features: this._createFeatures(e, t),
            fields: m,
            geometryType: s,
            hasM: i && f,
            hasZ: r && d,
            objectIdFieldName: n,
            spatialReference: (0, V.S2)(u || a),
            transform: (l && (0, C.vY)(l)) || null,
          };
        }
        _createFeatures(e, t) {
          const s = new G(e, this.featureAdapter, this.fieldsIndex),
            { hasM: i, hasZ: r } = this,
            {
              orderByFields: n,
              quantizationParameters: a,
              returnGeometry: o,
              returnCentroid: u,
              maxAllowableOffset: l,
              resultOffset: c,
              resultRecordCount: h,
              returnZ: d = !1,
              returnM: f = !1,
            } = e,
            p = r && d,
            m = i && f;
          let g = [],
            _ = 0;
          const y = [...t];
          if (
            (this._sortFeatures(y, n, (e, t, i) => s.getFieldValue(e, t, i)),
            o || u)
          ) {
            const e = (0, C.vY)(a);
            if (o && !u)
              for (const t of y)
                g[_++] = {
                  attributes: s.getAttributes(t),
                  geometry: (0, V.Op)(
                    this.geometryType,
                    this.hasZ,
                    this.hasM,
                    this.featureAdapter.getGeometry(t),
                    l,
                    e,
                    p,
                    m,
                  ),
                };
            else if (!o && u)
              for (const t of y)
                g[_++] = {
                  attributes: s.getAttributes(t),
                  centroid: (0, V.EG)(
                    this,
                    this.featureAdapter.getCentroid(t, this),
                    e,
                  ),
                };
            else
              for (const t of y)
                g[_++] = {
                  attributes: s.getAttributes(t),
                  centroid: (0, V.EG)(
                    this,
                    this.featureAdapter.getCentroid(t, this),
                    e,
                  ),
                  geometry: (0, V.Op)(
                    this.geometryType,
                    this.hasZ,
                    this.hasM,
                    this.featureAdapter.getGeometry(t),
                    l,
                    e,
                    p,
                    m,
                  ),
                };
          } else
            for (const e of y) {
              const t = s.getAttributes(e);
              t && (g[_++] = { attributes: t });
            }
          const I = c || 0;
          if (null != h) {
            const e = I + h;
            g = g.slice(I, Math.min(g.length, e));
          }
          return g;
        }
        _createExceedsLimitQueryResponse(e) {
          let t = !1,
            s = Number.POSITIVE_INFINITY,
            i = Number.POSITIVE_INFINITY,
            r = Number.POSITIVE_INFINITY;
          for (const t of e.outStatistics)
            if ('exceedslimit' === t.statisticType) {
              (s =
                null != t.maxPointCount
                  ? t.maxPointCount
                  : Number.POSITIVE_INFINITY),
                (i =
                  null != t.maxRecordCount
                    ? t.maxRecordCount
                    : Number.POSITIVE_INFINITY),
                (r =
                  null != t.maxVertexCount
                    ? t.maxVertexCount
                    : Number.POSITIVE_INFINITY);
              break;
            }
          if ('esriGeometryPoint' === this.geometryType)
            t = this.items.length > s;
          else if (this.items.length > i) t = !0;
          else {
            const e = this.hasZ ? (this.hasM ? 4 : 3) : this.hasM ? 3 : 2,
              s = this.featureAdapter;
            t =
              this.items.reduce((e, t) => {
                const i = s.getGeometry(t);
                return e + (((0, n.pC)(i) && i.coords.length) || 0);
              }, 0) /
                e >
              r;
          }
          return {
            fields: [
              {
                name: 'exceedslimit',
                type: 'esriFieldTypeInteger',
                alias: 'exceedslimit',
                sqlType: 'sqlTypeInteger',
                domain: null,
                defaultValue: null,
              },
            ],
            features: [{ attributes: { exceedslimit: Number(t) } }],
          };
        }
        async _createStatisticsQueryResponse(e) {
          const t = { attributes: {} },
            s = [],
            i = new Map(),
            r = new Map(),
            n = new Map(),
            a = new Map(),
            o = new G(e, this.featureAdapter, this.fieldsIndex),
            u = e.outStatistics,
            { groupByFieldsForStatistics: l, having: c, orderByFields: h } = e,
            d = l && l.length,
            f = !!d,
            p = f && l[0],
            m = f && !this.fieldsIndex.get(p);
          for (const e of u) {
            const { outStatisticFieldName: u, statisticType: h } = e,
              g = e,
              _ = 'exceedslimit' !== h ? e.onStatisticField : void 0,
              y = 'percentile_disc' === h || 'percentile_cont' === h,
              I =
                'EnvelopeAggregate' === h ||
                'CentroidAggregate' === h ||
                'ConvexHullAggregate' === h,
              E = f && 1 === d && (_ === p || m) && 'count' === h;
            if (f) {
              if (!n.has(_)) {
                const e = [];
                for (const t of l) {
                  const s = this._getAttributeValues(o, t, i);
                  e.push(s);
                }
                n.set(
                  _,
                  this._calculateUniqueValues(e, o.returnDistinctValues),
                );
              }
              const e = n.get(_);
              for (const t in e) {
                const { count: s, data: r, items: n, itemPositions: h } = e[t],
                  d = r.join(',');
                if (!c || o.validateItems(n, c)) {
                  const e = a.get(d) || { attributes: {} };
                  if (I) {
                    e.aggregateGeometries || (e.aggregateGeometries = {});
                    const { aggregateGeometries: t, outStatisticFieldName: s } =
                      await this._getAggregateGeometry(g, n);
                    e.aggregateGeometries[s] = t;
                  } else {
                    let t = null;
                    if (E) t = s;
                    else {
                      const e = this._getAttributeValues(o, _, i),
                        s = h.map((t) => e[t]);
                      t =
                        y && 'statisticParameters' in g
                          ? this._getPercentileValue(g, s)
                          : this._getStatisticValue(
                              g,
                              s,
                              null,
                              o.returnDistinctValues,
                            );
                    }
                    e.attributes[u] = t;
                  }
                  l.forEach(
                    (t, s) =>
                      (e.attributes[
                        this.fieldsIndex.get(t) ? t : `EXPR_${s + 1}`
                      ] = r[s]),
                  ),
                    a.set(d, e);
                }
              }
            } else if (I) {
              t.aggregateGeometries || (t.aggregateGeometries = {});
              const { aggregateGeometries: e, outStatisticFieldName: s } =
                await this._getAggregateGeometry(g, this.items);
              t.aggregateGeometries[s] = e;
            } else {
              const e = this._getAttributeValues(o, _, i);
              t.attributes[u] =
                y && 'statisticParameters' in g
                  ? this._getPercentileValue(g, e)
                  : this._getStatisticValue(g, e, r, o.returnDistinctValues);
            }
            s.push({ name: u, alias: u, type: 'esriFieldTypeDouble' });
          }
          const g = f ? Array.from(a.values()) : [t];
          return (
            this._sortFeatures(g, h, (e, t) => e.attributes[t]),
            { fields: s, features: g }
          );
        }
        async _getAggregateGeometry(e, t) {
          const i = await Promise.all([s.e(5837), s.e(247)]).then(
              s.bind(s, 30247),
            ),
            { statisticType: r, outStatisticFieldName: n } = e,
            {
              featureAdapter: a,
              spatialReference: o,
              geometryType: u,
              hasZ: l,
              hasM: c,
            } = this,
            h = t.map((e) => (0, V.Op)(u, l, c, a.getGeometry(e))),
            d = i.convexHull(o, h, !0)[0],
            f = { aggregateGeometries: null, outStatisticFieldName: null };
          if ('EnvelopeAggregate' === r) {
            const e = d ? (0, N._w)(d) : (0, N.aO)(i.union(o, h));
            (f.aggregateGeometries = { ...e, spatialReference: o }),
              (f.outStatisticFieldName = n || 'extent');
          } else if ('CentroidAggregate' === r) {
            const e = d ? (0, v.tO)(d) : (0, v.$G)((0, N.aO)(i.union(o, h)));
            (f.aggregateGeometries = { x: e[0], y: e[1], spatialReference: o }),
              (f.outStatisticFieldName = n || 'centroid');
          } else
            'ConvexHullAggregate' === r &&
              ((f.aggregateGeometries = d),
              (f.outStatisticFieldName = n || 'convexHull'));
          return f;
        }
        _getStatisticValue(e, t, s, i) {
          const { onStatisticField: r, statisticType: n } = e;
          let a = null;
          return (
            (a =
              null != s && s.has(r)
                ? s.get(r)
                : (0, L.qN)(this.fieldsIndex.get(r))
                ? (0, O.H0)({ values: t, returnDistinct: i })
                : (0, O.i5)({
                    values: t,
                    minValue: null,
                    maxValue: null,
                    useSampleStdDev: !0,
                  })),
            s && s.set(r, a),
            a['var' === n ? 'variance' : n]
          );
        }
        _getPercentileValue(e, t) {
          const {
              onStatisticField: s,
              statisticParameters: i,
              statisticType: r,
            } = e,
            { value: n, orderBy: a } = i,
            o = this.fieldsIndex.get(s),
            u = {
              value: n,
              orderBy: a,
              fieldType: null == o ? void 0 : o.type,
              isDiscrete: 'percentile_disc' === r,
            };
          return (0, O.XL)(t, u);
        }
        _getAttributeValues(e, t, s) {
          if (s.has(t)) return s.get(t);
          const i = this.fieldsIndex.get(t),
            r = this.items.map((s) => e.getFieldValue(s, t, i));
          return s.set(t, r), r;
        }
        _getAttributeNormalizedValues(e, t) {
          return this.items.map((s) =>
            e.getNormalizedValue(s, {
              field: t.field,
              fieldInfo: this.fieldsIndex.get(t.field),
              normalizationField: t.normalizationField,
              normalizationFieldInfo: this.fieldsIndex.get(
                t.normalizationField,
              ),
              normalizationType: t.normalizationType,
              normalizationTotal: t.normalizationTotal,
            }),
          );
        }
        async _getAttributeExpressionValues(e, t, s) {
          const { arcadeUtils: i } = await (0, z.LC)(),
            r = i.createFunction(t),
            n = s && i.getViewInfo(s);
          return this.items.map((t) =>
            e.getExpressionValue(t, { compiledFunc: r, viewInfo: n }, i),
          );
        }
        _calculateUniqueValues(e, t) {
          const s = {},
            i = this.items,
            r = i.length;
          for (let n = 0; n < r; n++) {
            const r = i[n],
              a = [];
            for (const t of e) a.push(t[n]);
            const o = a.join(',');
            t
              ? null == s[o] &&
                (s[o] = { count: 1, data: a, items: [r], itemPositions: [n] })
              : null == s[o]
              ? (s[o] = { count: 1, data: a, items: [r], itemPositions: [n] })
              : (s[o].count++, s[o].items.push(r), s[o].itemPositions.push(n));
          }
          return s;
        }
        async _getDataValues(e, t) {
          const s = new G(e, this.featureAdapter, this.fieldsIndex),
            {
              valueExpression: i,
              field: r,
              normalizationField: n,
              normalizationType: a,
              normalizationTotal: o,
              scale: u,
            } = t,
            l = i
              ? {
                  viewingMode: 'map',
                  scale: u,
                  spatialReference: e.outSR || this.spatialReference,
                }
              : null;
          return i
            ? this._getAttributeExpressionValues(s, i, l)
            : this._getAttributeNormalizedValues(s, {
                field: r,
                normalizationField: n,
                normalizationType: a,
                normalizationTotal: o,
              });
        }
      }
      function U(e, t, s, i, r, n) {
        const a = r - s,
          o = n - i,
          u = a * a + o * o,
          l = (e - s) * a + (t - i) * o,
          c = Math.min(1, Math.max(0, l / u));
        return { x: s + a * c, y: i + o * c };
      }
      ((k = Q || (Q = {}))[(k.NONE = 0)] = 'NONE'),
        (k[(k.EDGE = 1)] = 'EDGE'),
        (k[(k.VERTEX = 2)] = 'VERTEX');
      var Z = s(10402),
        j = s(99514),
        q = s(43697),
        B = s(15923),
        Y = s(61247),
        H = s(92604),
        W = s(54790),
        X = s(44553),
        J = s(95330),
        $ = s(17445),
        K = s(76882),
        ee = s(5600),
        te = (s(67676), s(80442), s(75215), s(52011));
      let se = class extends B.Z {
        constructor() {
          super(...arguments), (this._tasks = new Array()), (this.running = !1);
        }
        get length() {
          return this._tasks.length;
        }
        destroy() {
          this.cancelAll();
        }
        runTask(e) {
          for (; !e.done && this._process(e); ) e.madeProgress();
        }
        push(e, t, s) {
          return (
            (this.running = !0),
            new Promise((i, r) => this._tasks.push(new ie(i, r, e, t, s)))
          );
        }
        unshift(e, t, s) {
          return (
            (this.running = !0),
            new Promise((i, r) => this._tasks.unshift(new ie(i, r, e, t, s)))
          );
        }
        _process(e) {
          if (0 === this._tasks.length) return !1;
          const t = this._tasks.shift();
          try {
            const s = (0, J.Hc)(t.signal);
            if (s && !t.abortCallback) t.reject((0, J.zE)());
            else {
              const i = s ? t.abortCallback((0, J.zE)()) : t.callback(e);
              (0, J.y8)(i) ? i.then(t.resolve, t.reject) : t.resolve(i);
            }
          } catch (e) {
            t.reject(e);
          }
          return (this.running = this._tasks.length > 0), !0;
        }
        cancelAll() {
          const e = (0, J.zE)();
          for (const t of this._tasks)
            if (t.abortCallback) {
              const s = t.abortCallback(e);
              t.resolve(s);
            } else t.reject(e);
          (this._tasks.length = 0), (this.running = !1);
        }
      };
      (0, q._)([(0, ee.Cb)()], se.prototype, 'running', void 0),
        (se = (0, q._)([(0, te.j)('esri.layers.support.PromiseQueue')], se));
      class ie {
        constructor(e, t, s, i, r) {
          (this.resolve = e),
            (this.reject = t),
            (this.callback = s),
            (this.signal = i),
            (this.abortCallback = r);
        }
      }
      let re = class extends B.Z {
        constructor() {
          super(...arguments),
            (this.SCHEDULER_LOG_SLOW_TASKS = !1),
            (this.FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES = !1);
        }
      };
      (0, q._)(
        [(0, ee.Cb)()],
        re.prototype,
        'SCHEDULER_LOG_SLOW_TASKS',
        void 0,
      ),
        (0, q._)(
          [(0, ee.Cb)()],
          re.prototype,
          'FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES',
          void 0,
        ),
        (re = (0, q._)([(0, te.j)('esri.views.support.DebugFlags')], re));
      const ne = new re(),
        ae = H.Z.getLogger('esri.views.support.Scheduler');
      var oe;
      !(function (e) {
        (e.RESOURCE_CONTROLLER = 'schedule'),
          (e.SLIDE = 'slide'),
          (e.STREAM_DATA_LOADER = 'stream loader'),
          (e.ELEVATION_QUERY = 'elevation query'),
          (e.TERRAIN_SURFACE = 'terrain'),
          (e.SURFACE_GEOMETRY_UPDATES = 'surface geometry updates'),
          (e.GRAPHICS_CORE = 'Graphics3D'),
          (e.I3S_CONTROLLER = 'I3S'),
          (e.POINT_CLOUD_LAYER = 'point cloud'),
          (e.FEATURE_TILE_FETCHER = 'feature fetcher'),
          (e.OVERLAY = 'overlay'),
          (e.STAGE = 'stage'),
          (e.GRAPHICS_DECONFLICTOR = 'graphics deconflictor'),
          (e.FILTER_VISIBILITY = 'Graphics3D filter visibility'),
          (e.SCALE_VISIBILITY = 'Graphics3D scale visibility'),
          (e.FRUSTUM_VISIBILITY = 'Graphics3D frustum visibility'),
          (e.POINT_OF_INTEREST_FREQUENT = 'POI frequent'),
          (e.POINT_OF_INTEREST_INFREQUENT = 'POI infrequent'),
          (e.LABELER = 'labeler'),
          (e.FEATURE_QUERY_ENGINE = 'feature query'),
          (e.FEATURE_TILE_TREE = 'feature tile tree'),
          (e.FEATURE_TILE_TREE_ACTIVE = 'fast feature tile tree'),
          (e.ELEVATION_ALIGNMENT = 'elevation alignment'),
          (e.TEXT_TEXTURE_ATLAS = 'text texture atlas'),
          (e.TEXTURE_UNLOAD = 'texture unload'),
          (e.LINE_OF_SIGHT_TOOL = 'line of sight tool'),
          (e.LINE_OF_SIGHT_TOOL_INTERACTIVE = 'interactive line of sight tool'),
          (e.ELEVATION_PROFILE = 'elevation profile'),
          (e.SNAPPING = 'snapping'),
          (e.SHADOW_ACCUMULATOR = 'shadow accumulator'),
          (e.CLOUDS_GENERATOR = 'cloud generator'),
          (e[(e.TEST_PRIO = 1)] = 'TEST_PRIO');
      })(oe || (oe = {}));
      const ue = new Map([
        [oe.RESOURCE_CONTROLLER, 0],
        [oe.SLIDE, 0],
        [oe.STREAM_DATA_LOADER, 0],
        [oe.ELEVATION_QUERY, 0],
        [oe.TERRAIN_SURFACE, 1],
        [oe.SURFACE_GEOMETRY_UPDATES, 1],
        [oe.GRAPHICS_CORE, 2],
        [oe.I3S_CONTROLLER, 2],
        [oe.POINT_CLOUD_LAYER, 2],
        [oe.FEATURE_TILE_FETCHER, 2],
        [oe.OVERLAY, 4],
        [oe.STAGE, 4],
        [oe.GRAPHICS_DECONFLICTOR, 4],
        [oe.FILTER_VISIBILITY, 4],
        [oe.SCALE_VISIBILITY, 4],
        [oe.FRUSTUM_VISIBILITY, 4],
        [oe.POINT_OF_INTEREST_FREQUENT, 6],
        [oe.POINT_OF_INTEREST_INFREQUENT, 30],
        [oe.LABELER, 8],
        [oe.FEATURE_QUERY_ENGINE, 8],
        [oe.FEATURE_TILE_TREE, 16],
        [oe.FEATURE_TILE_TREE_ACTIVE, 0],
        [oe.ELEVATION_ALIGNMENT, 12],
        [oe.TEXT_TEXTURE_ATLAS, 12],
        [oe.CLOUDS_GENERATOR, 12],
        [oe.TEXTURE_UNLOAD, 12],
        [oe.LINE_OF_SIGHT_TOOL, 16],
        [oe.LINE_OF_SIGHT_TOOL_INTERACTIVE, 0],
        [oe.SNAPPING, 0],
        [oe.SHADOW_ACCUMULATOR, 30],
      ]);
      function le(e) {
        return ue.has(e) ? ue.get(e) : 'number' == typeof e ? e : 1;
      }
      var ce;
      !(function (e) {
        (e[(e.ANIMATING = 0)] = 'ANIMATING'),
          (e[(e.INTERACTING = 1)] = 'INTERACTING'),
          (e[(e.IDLE = 2)] = 'IDLE');
      })(ce || (ce = {}));
      const he = (0, K.HA)(6.5),
        de = (0, K.HA)(1),
        fe = (0, K.HA)(30),
        pe = (0, K.HA)(1e3 / 30),
        me = (0, K.HA)(100);
      var ge, _e;
      !(function (e) {
        let t = class extends B.Z {
          constructor(e) {
            super(e),
              (this.updating = !0),
              (this._microTaskQueued = !1),
              (this.performanceInfo = {
                total: new W.Z('total'),
                tasks: new Map(),
              }),
              (this._frameTaskTimes = new Map()),
              (this._budget = null),
              (this._state = ce.INTERACTING),
              (this._tasks = new X.Z()),
              (this._runQueue = new X.Z()),
              (this._load = 0),
              (this._idleStateCallbacks = new X.Z()),
              (this._idleUpdatesStartFired = !1),
              (this._maxReschedule = Ee),
              (this._forceTask = !1),
              (this._debug = !1),
              (this._debugHandle = (0, $.YP)(
                () => ne.SCHEDULER_LOG_SLOW_TASKS,
                (e) => (this._debug = e),
                $.nn,
              )),
              (this._budget = new i(e.nowFunc));
            for (const e of Object.keys(oe))
              this.performanceInfo.tasks.set(oe[e], new W.Z(oe[e]));
            let t;
            const s = this;
            this._test = {
              get state() {
                return (0, n.Pt)(t, s._state);
              },
              set state(e) {
                t = e;
              },
              FRAME_SAFETY_BUDGET: he,
              INTERACTING_BUDGET: pe,
              IDLE_BUDGET: me,
              get budget() {
                return s._budget.budget;
              },
              usedBudget: 0,
              setBudget: (e) => (s._budget = e),
              updateTask: (e) => this._updateTask(e),
              getState: (e) => this._getState(e),
              getRuntime: (e) => this._getRuntime(e),
              frameTaskTimes: this._frameTaskTimes,
              resetRuntimes: () => this._resetRuntimes(),
              getRunning: () => this._getRunning(),
            };
          }
          destroy() {
            this._tasks.toArray().forEach((e) => e.remove()),
              this._tasks.clear(),
              (0, n.hw)(this._debugHandle),
              (this._microTaskQueued = !1),
              (this.updating = !1);
          }
          activate() {
            this._budget.done ||
              this._microTaskQueued ||
              ((this._microTaskQueued = !0),
              queueMicrotask(() => {
                this._microTaskQueued &&
                  ((this._microTaskQueued = !1),
                  this._budget.done ||
                    ((this._maxReschedule = Ee),
                    this._schedule(),
                    this.frame()));
              }));
          }
          registerTask(e, t) {
            const i = le(e),
              r = new s(this, e, t, i);
            return (
              this._tasks.push(r),
              this.performanceInfo.tasks.has(e) ||
                this.performanceInfo.tasks.set(e, new W.Z(e)),
              r
            );
          }
          registerIdleStateCallbacks(e, t) {
            const s = { idleBegin: e, idleEnd: t };
            this._idleStateCallbacks.push(s),
              this.state === ce.IDLE &&
                this._idleUpdatesStartFired &&
                s.idleBegin();
            const i = this;
            return {
              remove: () => this._removeIdleStateCallbacks(s),
              set idleBegin(e) {
                i._idleUpdatesStartFired &&
                  (s.idleEnd(), i._state === ce.IDLE && e()),
                  (s.idleBegin = e);
              },
              set idleEnd(e) {
                s.idleEnd = e;
              },
            };
          }
          get now() {
            return this.nowFunc();
          }
          get load() {
            return this._load;
          }
          set state(e) {
            this._state !== e &&
              ((this._state = e),
              this.state !== ce.IDLE &&
                this._idleUpdatesStartFired &&
                ((this._idleUpdatesStartFired = !1),
                this._idleStateCallbacks.forAll((e) => e.idleEnd())));
          }
          get state() {
            return (0, n.Wi)(this._test.state) ? this._state : this._test.state;
          }
          updateBudget(e) {
            this._test.usedBudget = 0;
            let t = he,
              s = e.frameDuration,
              i = de;
            switch (this.state) {
              case ce.IDLE:
                (t = (0, K.HA)(0)),
                  (s = (0, K.HA)(Math.max(me, e.frameDuration))),
                  (i = fe);
                break;
              case ce.INTERACTING:
                s = (0, K.HA)(Math.max(pe, e.frameDuration));
              case ce.ANIMATING:
            }
            return (
              (s = (0, K.HA)(s - e.elapsedFrameTime - t)),
              this.state !== ce.IDLE && s < de && !this._forceTask
                ? ((this._forceTask = !0), !1)
                : ((s = (0, K.HA)(Math.max(s, i))),
                  this._budget.reset(s, this.state),
                  (this._maxReschedule = Ee),
                  this._updateLoad(),
                  this._schedule())
            );
          }
          frame() {
            switch (
              ((this._forceTask = !1), (this._microTaskQueued = !1), this.state)
            ) {
              case ce.IDLE:
                this._idleUpdatesStartFired ||
                  ((this._idleUpdatesStartFired = !0),
                  this._idleStateCallbacks.forAll((e) => e.idleBegin())),
                  this._runIdle();
                break;
              case ce.INTERACTING:
                this._runInteracting();
                break;
              default:
                this._runAnimating();
            }
            this._test.usedBudget = this._budget.elapsed;
          }
          stopFrame() {
            this._budget.reset((0, K.HA)(0), this._state),
              this._budget.madeProgress();
          }
          _removeIdleStateCallbacks(e) {
            this._idleUpdatesStartFired && e.idleEnd(),
              this._idleStateCallbacks.removeUnordered(e);
          }
          removeTask(e) {
            this._tasks.removeUnordered(e), this._runQueue.removeUnordered(e);
          }
          _updateTask(e) {
            this._tasks.forAll((t) => {
              t.name === e && t.setPriority(e);
            });
          }
          _getState(e) {
            if (this._runQueue.some((t) => t.name === e)) return _e.SCHEDULED;
            let t = _e.IDLE;
            return (
              this._tasks.forAll((s) => {
                s.name === e &&
                  s.needsUpdate &&
                  (s.schedulePriority <= 1
                    ? (t = _e.READY)
                    : t !== _e.READY && (t = _e.WAITING));
              }),
              t
            );
          }
          _getRuntime(e) {
            let t = 0;
            return (
              this._tasks.forAll((s) => {
                s.name === e && (t += s.runtime);
              }),
              t
            );
          }
          _resetRuntimes() {
            this._tasks.forAll((e) => (e.runtime = 0));
          }
          _getRunning() {
            const e = new Map();
            if (
              (this._tasks.forAll((t) => {
                t.needsUpdate && e.set(t.name, (e.get(t.name) || 0) + 1);
              }),
              0 === e.size)
            )
              return null;
            let t = '';
            return (
              e.forEach((e, s) => {
                t += e > 1 ? ` ${e}x ${s}` : ` ${s}`;
              }),
              t
            );
          }
          _runIdle() {
            this._run();
          }
          _runInteracting() {
            this._run();
          }
          _runAnimating() {
            this._run();
          }
          _updateLoad() {
            const e = this._tasks.reduce(
              (e, t) => (t.needsUpdate ? ++e : e),
              0,
            );
            this._load = 0.9 * this._load + e * (1 - 0.9);
          }
          _schedule() {
            if (this._maxReschedule <= 0) return !1;
            for (
              this._runQueue.filterInPlace(
                (e) =>
                  !!e.needsUpdate ||
                  ((e.schedulePriority = e.basePriority), !1),
              ),
                this._tasks.forAll((e) => {
                  0 === e.basePriority &&
                    e.needsUpdate &&
                    !this._runQueue.some((t) => t === e) &&
                    this._runQueue.unshift(e);
                });
              0 === this._runQueue.length;

            ) {
              let e = !1,
                t = 0;
              if (
                (this._tasks.forAll((s) => {
                  s.needsUpdate &&
                    0 !== s.schedulePriority &&
                    0 !== s.basePriority &&
                    ((e = !0),
                    (t = Math.max(t, s.basePriority)),
                    1 === s.schedulePriority
                      ? ((s.schedulePriority = 0), this._runQueue.push(s))
                      : --s.schedulePriority);
                }),
                !e)
              )
                return (this.updating = !1), !1;
              this._maxReschedule === Ee && (this._maxReschedule = t),
                --this._maxReschedule;
            }
            return (this.updating = !0), !0;
          }
          _run() {
            const e = this._budget.now();
            this._startFrameTaskTimes();
            do {
              for (; this._runQueue.length > 0; ) {
                const t = this._budget.now(),
                  s = this._runQueue.pop();
                this._budget.resetProgress();
                try {
                  s.task.runTask(this._budget);
                } catch (e) {
                  ae.error(`Exception in task "${s.name}"`, e);
                }
                s.schedulePriority = s.basePriority;
                const i = this._budget.now() - t;
                if (
                  ((s.runtime += i),
                  this._frameTaskTimes.set(
                    s.priority,
                    this._frameTaskTimes.get(s.priority) + i,
                  ),
                  this._debug &&
                    this._budget.elapsed > 2 * this._budget.budget &&
                    console.log(
                      'Task',
                      s.name,
                      'used',
                      this._budget.elapsed,
                      'of max',
                      this._budget.budget,
                      'ms',
                    ),
                  this._budget.remaining <= 0)
                )
                  return (
                    (this.updating = this._tasks.some((e) => e.needsUpdate)),
                    void this._recordFrameTaskTimes(this._budget.now() - e)
                  );
              }
            } while (this._schedule());
            (this.updating = this._tasks.some((e) => e.needsUpdate)),
              this._recordFrameTaskTimes(this._budget.now() - e);
          }
          _startFrameTaskTimes() {
            for (const e of Object.keys(oe)) this._frameTaskTimes.set(oe[e], 0);
          }
          _recordFrameTaskTimes(e) {
            this._frameTaskTimes.forEach((e, t) =>
              this.performanceInfo.tasks.get(t).record(e),
            ),
              this.performanceInfo.total.record(e);
          }
          get test() {
            return this._test;
          }
        };
        (0, q._)([(0, ee.Cb)()], t.prototype, 'updating', void 0),
          (0, q._)([(0, ee.Cb)()], t.prototype, 'nowFunc', void 0),
          (t = (0, q._)([(0, te.j)('esri.views.support.Scheduler')], t)),
          (e.Scheduler = t);
        let s = class extends B.Z {
          constructor(e, t, s, i) {
            super({}),
              (this._scheduler = e),
              (this.name = t),
              (this._basePriority = i),
              (this.runtime = 0),
              (this._queue = new se()),
              (this._handles = new Y.Z()),
              (this.schedulePriority = this._basePriority),
              (this.task = (0, n.pC)(s) ? s : this._queue),
              this._handles.add(
                (0, $.gx)(
                  () => this.task.running,
                  () => e.activate(),
                ),
              );
          }
          get updating() {
            return this._queue.running;
          }
          normalizeCtorArgs() {
            return {};
          }
          remove() {
            this.processQueue(ye),
              this._scheduler.removeTask(this),
              (this.schedule = Ie.schedule),
              (this.reschedule = Ie.reschedule),
              this._handles.destroy();
          }
          get basePriority() {
            return this._basePriority;
          }
          setPriority(e) {
            this.name = e;
            const t = le(e);
            (0 !== this._basePriority && 0 === this.schedulePriority) ||
              (this.schedulePriority = t),
              (this._basePriority = t);
          }
          get priority() {
            return this.name;
          }
          set priority(e) {
            this.setPriority(e);
          }
          get needsUpdate() {
            return this.updating || this.task.running;
          }
          schedule(e, t, s) {
            return this._queue.push(e, t, s);
          }
          reschedule(e, t, s) {
            return this._queue.unshift(e, t, s);
          }
          processQueue(e) {
            this._queue.runTask(e);
          }
        };
        (0, q._)(
          [(0, ee.Cb)({ constructOnly: !0 })],
          s.prototype,
          'task',
          void 0,
        ),
          (0, q._)(
            [(0, ee.Cb)({ readOnly: !0 })],
            s.prototype,
            'updating',
            null,
          ),
          (s = (0, q._)([(0, te.j)('esri.views.support.SchedulerTask')], s));
        class i {
          constructor(e) {
            (this.now = e),
              (this._begin = 0),
              (this._budget = 0),
              (this._state = ce.IDLE),
              (this._didWork = !1),
              (this._enabled = !0);
          }
          run(e) {
            return !this.done && (!0 === e() && (this._didWork = !0), !0);
          }
          get done() {
            return (
              this._didWork && this.elapsed >= this._budget && this._enabled
            );
          }
          get budget() {
            return this._budget;
          }
          madeProgress() {
            this._didWork = !0;
          }
          get state() {
            return this._state;
          }
          get enabled() {
            return this._enabled;
          }
          set enabled(e) {
            this._enabled = e;
          }
          reset(e, t) {
            (this._begin = this.now()),
              (this._budget = e),
              (this._state = t),
              (this._didWork = !1);
          }
          get remaining() {
            return Math.max(this._budget - this.elapsed, 0);
          }
          get elapsed() {
            return this.now() - this._begin;
          }
          resetProgress() {
            this._didWork = !1;
          }
          get hasProgressed() {
            return this._didWork;
          }
        }
        e.Budget = i;
      })(ge || (ge = {})),
        (function (e) {
          (e.SCHEDULED = 's'),
            (e.READY = 'r'),
            (e.WAITING = 'w'),
            (e.IDLE = 'i');
        })(_e || (_e = {}));
      const ye = (() => {
          const e = new ge.Budget(() => performance.now());
          return (e.enabled = !1), e;
        })(),
        Ie = new (class {
          remove() {}
          processQueue() {}
          schedule(e, t, s) {
            try {
              if ((0, J.Hc)(t)) {
                const e = (0, J.zE)();
                return s ? Promise.resolve(s(e)) : Promise.reject(e);
              }
              return (0, J.gx)(e(ye));
            } catch (e) {
              return Promise.reject(e);
            }
          }
          reschedule(e, t, s) {
            return this.schedule(e, t, s);
          }
        })(),
        Ee = Number.MAX_SAFE_INTEGER,
        Se = 'feature-store:unsupported-query',
        xe = new Set(),
        Te = new a.WJ(2e6);
      let Re = 0;
      class we {
        constructor(e) {
          (this.capabilities = { query: b.g }),
            (this.geometryType = e.geometryType),
            (this.hasM = e.hasM),
            (this.hasZ = e.hasZ),
            (this.objectIdField = e.objectIdField),
            (this.spatialReference = e.spatialReference),
            (this.definitionExpression = e.definitionExpression),
            (this.featureStore = e.featureStore),
            (this.aggregateAdapter = e.aggregateAdapter),
            (this._changeHandle = this.featureStore.events.on('changed', () =>
              this.clearCache(),
            )),
            (this.timeInfo = e.timeInfo),
            e.cacheSpatialQueries &&
              (this._geometryQueryCache = new a.Xq(Re++ + '$$', Te)),
            (this.fieldsIndex = new j.Z(e.fields)),
            e.scheduler &&
              e.priority &&
              (this._frameTask = e.scheduler.registerTask(e.priority));
        }
        destroy() {
          (this._frameTask = (0, n.hw)(this._frameTask)),
            this.clearCache(),
            (0, n.SC)(this._geometryQueryCache),
            (this._changeHandle = (0, n.hw)(this._changeHandle)),
            (0, n.SC)(this.fieldsIndex);
        }
        get featureAdapter() {
          return this.featureStore.featureAdapter;
        }
        get fullExtent() {
          const e = this.featureStore.fullBounds;
          return e
            ? {
                xmin: e[0],
                ymin: e[1],
                xmax: e[2],
                ymax: e[3],
                spatialReference: (0, V.S2)(this.spatialReference),
              }
            : null;
        }
        get timeExtent() {
          return this.timeInfo
            ? (this._timeExtent ||
                (this._timeExtent = (0, M.R)(this.timeInfo, this.featureStore)),
              this._timeExtent)
            : null;
        }
        clearCache() {
          this._geometryQueryCache && this._geometryQueryCache.clear(),
            (this._allItems = null),
            (this._timeExtent = null);
        }
        async executeQuery(e = {}, t) {
          let s,
            i = (0, r.d9)(e);
          try {
            (i = await this._schedule(
              () =>
                (0, V.Up)(i, this.definitionExpression, this.spatialReference),
              t,
            )),
              (i = await this._reschedule(() => this._checkQuerySupport(i), t)),
              (s = await this._reschedule(
                () => this._executeGeometryQuery(i, t),
                t,
              )),
              (s = await this._reschedule(
                () => s.executeAggregateIdsQuery(i),
                t,
              )),
              (s = await this._reschedule(() => s.executeObjectIdsQuery(i), t)),
              (s = await this._reschedule(() => s.executeTimeQuery(i), t)),
              (s = await this._reschedule(
                () => s.executeAttributesQuery(i),
                t,
              ));
          } catch (e) {
            if (e !== V.vF) throw e;
            s = new D([], null, this);
          }
          return s.createQueryResponse(i);
        }
        async executeQueryForCount(e = {}, t) {
          let s = (0, r.d9)(e);
          (s.returnGeometry = !1), (s.returnCentroid = !1), (s.outSR = null);
          try {
            (s = await this._schedule(
              () =>
                (0, V.Up)(s, this.definitionExpression, this.spatialReference),
              t,
            )),
              (s = await this._reschedule(() => this._checkQuerySupport(s), t));
            let e = await this._reschedule(
              () => this._executeGeometryQuery(s, t),
              t,
            );
            return (
              (e = await this._reschedule(
                () => e.executeAggregateIdsQuery(s),
                t,
              )),
              (e = await this._reschedule(() => e.executeObjectIdsQuery(s), t)),
              (e = await this._reschedule(() => e.executeTimeQuery(s), t)),
              (e = await this._reschedule(
                () => e.executeAttributesQuery(s),
                t,
              )),
              e.createQueryResponseForCount(s)
            );
          } catch (e) {
            if (e !== V.vF) throw e;
            return 0;
          }
        }
        async executeQueryForExtent(e = {}, t) {
          let s,
            i = (0, r.d9)(e);
          const n = i.outSR;
          try {
            (i = await this._schedule(
              () =>
                (0, V.Up)(i, this.definitionExpression, this.spatialReference),
              t,
            )),
              (i = await this._reschedule(() => this._checkQuerySupport(i), t)),
              (i.returnGeometry = !0),
              (i.returnCentroid = !1),
              (i.outSR = null),
              (s = await this._reschedule(
                () => this._executeGeometryQuery(i, t),
                t,
              )),
              (s = await this._reschedule(
                () => s.executeAggregateIdsQuery(i),
                t,
              )),
              (s = await this._reschedule(() => s.executeObjectIdsQuery(i), t)),
              (s = await this._reschedule(() => s.executeTimeQuery(i), t)),
              (s = await this._reschedule(
                () => s.executeAttributesQuery(i),
                t,
              ));
            const e = s.size;
            if (!e) return { count: e, extent: null };
            (0, u.t8)(Ae, u.Gv),
              this.featureStore.forEachBounds(
                s.items,
                (e) => (0, u.TC)(Ae, e),
                Fe,
              );
            const r = {
              xmin: Ae[0],
              ymin: Ae[1],
              xmax: Ae[3],
              ymax: Ae[4],
              spatialReference: (0, V.S2)(this.spatialReference),
            };
            this.hasZ &&
              isFinite(Ae[2]) &&
              isFinite(Ae[5]) &&
              ((r.zmin = Ae[2]), (r.zmax = Ae[5]));
            const a = (0, A.iV)(r, s.spatialReference, n);
            if (
              ((a.spatialReference = (0, V.S2)(n || this.spatialReference)),
              a.xmax - a.xmin == 0)
            ) {
              const e = (0, o.c9)(a.spatialReference);
              (a.xmin -= e), (a.xmax += e);
            }
            if (a.ymax - a.ymin == 0) {
              const e = (0, o.c9)(a.spatialReference);
              (a.ymin -= e), (a.ymax += e);
            }
            if (
              this.hasZ &&
              null != a.zmin &&
              null != a.zmax &&
              a.zmax - a.zmin == 0
            ) {
              const e = (0, o.c9)(a.spatialReference);
              (a.zmin -= e), (a.zmax += e);
            }
            return { count: e, extent: a };
          } catch (e) {
            if (e === V.vF) return { count: 0, extent: null };
            throw e;
          }
        }
        async executeQueryForIds(e = {}, t) {
          return this.executeQueryForIdSet(e, t).then((e) => Array.from(e));
        }
        async executeQueryForIdSet(e = {}, t) {
          let s,
            i = (0, r.d9)(e);
          (i.returnGeometry = !1), (i.returnCentroid = !1), (i.outSR = null);
          try {
            (i = await this._schedule(
              () =>
                (0, V.Up)(i, this.definitionExpression, this.spatialReference),
              t,
            )),
              (i = await this._reschedule(() => this._checkQuerySupport(i), t)),
              (s = await this._reschedule(
                () => this._executeGeometryQuery(i, t),
                t,
              )),
              (s = await this._reschedule(
                () => s.executeAggregateIdsQuery(i),
                t,
              )),
              (s = await this._reschedule(() => s.executeObjectIdsQuery(i), t)),
              (s = await this._reschedule(() => s.executeTimeQuery(i), t)),
              (s = await this._reschedule(
                () => s.executeAttributesQuery(i),
                t,
              ));
            const e = s.items,
              r = new Set();
            return (
              await this._reschedule(() => {
                for (const t of e) r.add(s.featureAdapter.getObjectId(t));
              }, t),
              r
            );
          } catch (e) {
            if (e === V.vF) return new Set();
            throw e;
          }
        }
        async executeQueryForSnapping(e, t) {
          const { point: s, distance: i, types: r } = e;
          if (r === Q.NONE) return { candidates: [] };
          const a = await this._reschedule(
              () => this._checkQuerySupport(e.query),
              t,
            ),
            o = !(0, f.fS)(s.spatialReference, this.spatialReference);
          o && (await (0, A._W)(s.spatialReference, this.spatialReference));
          const u = 'number' == typeof i ? i : i.x,
            l = 'number' == typeof i ? i : i.y,
            c = {
              xmin: s.x - u,
              xmax: s.x + u,
              ymin: s.y - l,
              ymax: s.y + l,
              spatialReference: s.spatialReference,
            },
            p = o ? (0, A.iV)(c, this.spatialReference) : c;
          if (!p) return { candidates: [] };
          const m = (await (0, d.aX)((0, h.im)(s), null, { signal: t }))[0],
            g = (await (0, d.aX)((0, h.im)(p), null, { signal: t }))[0];
          if ((0, n.Wi)(m) || (0, n.Wi)(g)) return { candidates: [] };
          let _ = new D(
            this._searchFeatures(this._getQueryBBoxes(g.toJSON())),
            null,
            this,
          );
          (_ = await this._reschedule(() => _.executeObjectIdsQuery(a), t)),
            (_ = await this._reschedule(() => _.executeTimeQuery(a), t)),
            (_ = await this._reschedule(() => _.executeAttributesQuery(a), t));
          const y = m.toJSON(),
            I = o ? (0, A.iV)(y, this.spatialReference) : y,
            E = o ? Math.max(p.xmax - p.xmin, p.ymax - p.ymin) / 2 : i;
          return _.createSnappingResponse(
            { ...e, point: I, distance: E },
            s.spatialReference,
          );
        }
        async executeQueryForLatestObservations(e = {}, t) {
          if (!this.timeInfo || !this.timeInfo.trackIdField)
            throw new i.Z(Se, 'Missing timeInfo or timeInfo.trackIdField', {
              query: e,
              timeInfo: this.timeInfo,
            });
          let s,
            n = (0, r.d9)(e);
          try {
            (n = await this._schedule(
              () =>
                (0, V.Up)(n, this.definitionExpression, this.spatialReference),
              t,
            )),
              (n = await this._reschedule(() => this._checkQuerySupport(n), t)),
              (s = await this._reschedule(
                () => this._executeGeometryQuery(n, t),
                t,
              )),
              (s = await this._reschedule(
                () => s.executeAggregateIdsQuery(n),
                t,
              )),
              (s = await this._reschedule(() => s.executeObjectIdsQuery(n), t)),
              (s = await this._reschedule(() => s.executeTimeQuery(n), t)),
              (s = await this._reschedule(
                () => s.executeAttributesQuery(n),
                t,
              )),
              (s = await this._reschedule(() => s.filterLatest(), t));
          } catch (e) {
            if (e !== V.vF) throw e;
            s = new D([], null, this);
          }
          return s.createQueryResponse(n);
        }
        async executeQueryForSummaryStatistics(e = {}, t, s) {
          const { field: i, normalizationField: r, valueExpression: n } = t;
          return (
            await this._getQueryEngineResultForStats(
              e,
              { field: i, normalizationField: r, valueExpression: n },
              s,
            )
          ).createSummaryStatisticsResponse(e, t);
        }
        async executeQueryForUniqueValues(e = {}, t, s) {
          const { field: i, valueExpression: r } = t;
          return (
            await this._getQueryEngineResultForStats(
              e,
              { field: i, valueExpression: r },
              s,
            )
          ).createUniqueValuesResponse(e, t);
        }
        async executeQueryForClassBreaks(e = {}, t, s) {
          const { field: i, normalizationField: r, valueExpression: n } = t;
          return (
            await this._getQueryEngineResultForStats(
              e,
              { field: i, normalizationField: r, valueExpression: n },
              s,
            )
          ).createClassBreaksResponse(e, t);
        }
        async executeQueryForHistogram(e = {}, t, s) {
          const { field: i, normalizationField: r, valueExpression: n } = t;
          return (
            await this._getQueryEngineResultForStats(
              e,
              { field: i, normalizationField: r, valueExpression: n },
              s,
            )
          ).createHistogramResponse(e, t);
        }
        async _schedule(e, t) {
          return (0, n.pC)(this._frameTask)
            ? this._frameTask.schedule(e, t)
            : e(ye);
        }
        async _reschedule(e, t) {
          return (0, n.pC)(this._frameTask)
            ? this._frameTask.reschedule(e, t)
            : e(ye);
        }
        _getAll() {
          if (!this._allItems) {
            const e = [];
            this.featureStore.forEach((t) => e.push(t)),
              (this._allItems = new D(e, null, this));
          }
          return this._allItems;
        }
        async _executeGeometryQuery(e, t) {
          const {
              geometry: s,
              outSR: i,
              spatialRel: r,
              returnGeometry: a,
              returnCentroid: o,
            } = e,
            u = this.featureStore.featureSpatialReference,
            l = s && u && u !== s.spatialReference ? (0, A.iV)(s, u) : s,
            c = a || o,
            h = (0, f.JY)(i) && !(0, f.fS)(this.spatialReference, i),
            d = this._geometryQueryCache
              ? h && c
                ? JSON.stringify({
                    originalFilterGeometry: s,
                    spatialRelationship: r,
                    outSpatialReference: i,
                  })
                : JSON.stringify({
                    originalFilterGeometry: s,
                    spatialRelationship: r,
                  })
              : null;
          if (d) {
            const e = this._geometryQueryCache.get(d);
            if (!(0, n.o8)(e)) return e;
          }
          const p = async (e) => {
            if (h && c) {
              const t = await e.project(i);
              return d && this._geometryQueryCache.put(d, t, t.size || 1), t;
            }
            return d && this._geometryQueryCache.put(d, e, e.size || 1), e;
          };
          if (!l) return p(this._getAll());
          const m = this.featureAdapter;
          if ('esriSpatialRelDisjoint' === r) {
            const e = this._searchFeatures(this._getQueryBBoxes(s));
            if (!e.length) return p(this._getAll());
            let i, n;
            const a = new Set();
            for (const t of e) a.add(m.getObjectId(t));
            await this._reschedule(() => {
              let e = 0;
              (i = new Array(a.size)),
                this.featureStore.forEach((t) => (i[e++] = t)),
                (n = a);
            }, t);
            const o = await this._reschedule(async () => {
              const e = await (0, Z.cW)(
                r,
                l,
                this.geometryType,
                this.hasZ,
                this.hasM,
              );
              return new D(
                await this._runSpatialFilter(
                  i,
                  (t) => !n.has(m.getObjectId(t)) || e(m.getGeometry(t)),
                  t,
                ),
                s,
                this,
              );
            }, t);
            return p(o);
          }
          const g = this._searchFeatures(this._getQueryBBoxes(s));
          if (!g.length) {
            const e = new D([], s, this);
            return d && this._geometryQueryCache.put(d, e, e.size || 1), e;
          }
          if (this._canExecuteSoloPass(l, e)) return p(new D(g, s, this));
          const _ = await (0, Z.cW)(
              r,
              l,
              this.geometryType,
              this.hasZ,
              this.hasM,
            ),
            y = await this._runSpatialFilter(g, (e) => _(m.getGeometry(e)), t);
          return p(new D(y, s, this));
        }
        async _runSpatialFilter(e, t, s) {
          if (!t) return e;
          if ((0, n.Wi)(this._frameTask)) return e.filter((e) => t(e));
          let i = 0;
          const r = new Array(),
            a = async (n) => {
              for (; i < e.length; ) {
                const o = e[i++];
                t(o) && (r.push(o), n.madeProgress()),
                  n.done && (await this._reschedule((e) => a(e), s));
              }
            };
          return this._reschedule((e) => a(e), s).then(() => r);
        }
        _canExecuteSoloPass(e, t) {
          const { geometryType: s } = this,
            { spatialRel: i } = t;
          return (
            (0, Z.hN)(e) &&
            ('esriSpatialRelEnvelopeIntersects' === i ||
              ('esriGeometryPoint' === s &&
                ('esriSpatialRelIntersects' === i ||
                  'esriSpatialRelContains' === i ||
                  'esriSpatialRelWithin' === i)))
          );
        }
        _getQueryBBoxes(e) {
          if ((0, Z.hN)(e)) {
            if ((0, h.YX)(e))
              return [(0, l.al)(e.xmin, e.ymin, e.xmax, e.ymax)];
            if ((0, h.oU)(e))
              return e.rings.map((e) =>
                (0, l.al)(
                  Math.min(e[0][0], e[2][0]),
                  Math.min(e[0][1], e[2][1]),
                  Math.max(e[0][0], e[2][0]),
                  Math.max(e[0][1], e[2][1]),
                ),
              );
          }
          return [(0, c.$P)((0, l.Ue)(), e)];
        }
        _searchFeatures(e) {
          for (const t of e)
            this.featureStore.forEachInBounds(t, (e) => {
              xe.add(e);
            });
          const t = new Array(xe.size);
          let s = 0;
          return xe.forEach((e) => (t[s++] = e)), xe.clear(), t;
        }
        async _checkStatisticsSupport(e, t) {
          if (
            e.distance < 0 ||
            null != e.geometryPrecision ||
            e.multipatchOption ||
            e.pixelSize ||
            e.relationParam ||
            e.text ||
            e.outStatistics ||
            e.groupByFieldsForStatistics ||
            e.having ||
            e.orderByFields
          )
            throw new i.Z(Se, 'Unsupported query options', { query: e });
          return Promise.all([
            this._checkAttributesQuerySupport(e),
            this._checkStatisticsParamsSupport(t),
            (0, Z.P0)(e, this.geometryType, this.spatialReference),
            (0, A._W)(this.spatialReference, e.outSR),
          ]).then(() => e);
        }
        async _checkStatisticsParamsSupport(e) {
          let t = [];
          if (e.valueExpression) {
            const { arcadeUtils: s } = await (0, z.LC)();
            t = s.extractFieldNames(e.valueExpression);
          }
          if (
            (e.field && t.push(e.field),
            e.normalizationField && t.push(e.normalizationField),
            !t.length)
          )
            throw new i.Z(
              Se,
              'params should have at least a field or valueExpression',
              { params: e },
            );
          T(this.fieldsIndex, t, 'params contains missing fields');
        }
        async _checkQuerySupport(e) {
          if (
            e.distance < 0 ||
            null != e.geometryPrecision ||
            e.multipatchOption ||
            e.pixelSize ||
            e.relationParam ||
            e.text
          )
            throw new i.Z(Se, 'Unsupported query options', { query: e });
          return Promise.all([
            this._checkAttributesQuerySupport(e),
            this._checkStatisticsQuerySupport(e),
            (0, Z.P0)(e, this.geometryType, this.spatialReference),
            (0, A._W)(this.spatialReference, e.outSR),
          ]).then(() => e);
        }
        _checkAttributesQuerySupport(e) {
          const {
              outFields: t,
              orderByFields: s,
              returnDistinctValues: r,
              outStatistics: n,
            } = e,
            a = n
              ? n
                  .map(
                    (e) =>
                      e.outStatisticFieldName &&
                      e.outStatisticFieldName.toLowerCase(),
                  )
                  .filter(Boolean)
              : [];
          if (s && s.length > 0) {
            const e = ' asc',
              t = ' desc',
              i = s
                .map((s) => {
                  const i = s.toLowerCase();
                  return i.indexOf(e) > -1
                    ? i.split(e)[0]
                    : i.indexOf(t) > -1
                    ? i.split(t)[0]
                    : s;
                })
                .filter((e) => -1 === a.indexOf(e));
            T(this.fieldsIndex, i, 'orderByFields contains missing fields');
          }
          if (t && t.length > 0)
            T(this.fieldsIndex, t, 'outFields contains missing fields');
          else if (r)
            throw new i.Z(
              Se,
              'outFields should be specified for returnDistinctValues',
              { query: e },
            );
          E(this.fieldsIndex, e.where);
        }
        async _checkStatisticsQuerySupport(e) {
          const {
              outStatistics: t,
              groupByFieldsForStatistics: s,
              having: r,
            } = e,
            n = s && s.length,
            a = t && t.length;
          if (r) {
            if (!n || !a)
              throw new i.Z(
                Se,
                'outStatistics and groupByFieldsForStatistics should be specified with having',
                { query: e },
              );
            S(this.fieldsIndex, r, t);
          }
          if (a) {
            if (
              !(function (e) {
                return e.every((e) => 'exceedslimit' !== e.statisticType);
              })(t)
            )
              return;
            const r = t.map((e) => e.onStatisticField).filter(Boolean);
            T(this.fieldsIndex, r, 'onStatisticFields contains missing fields'),
              n &&
                T(
                  this.fieldsIndex,
                  s,
                  'groupByFieldsForStatistics contains missing fields',
                );
            for (const s of t) {
              const { onStatisticField: t, statisticType: r } = s;
              if (
                ('percentile_disc' !== r && 'percentile_cont' !== r) ||
                !('statisticParameters' in s)
              ) {
                if ('count' !== r && t && F(t, this.fieldsIndex))
                  throw new i.Z(
                    Se,
                    'outStatistics contains non-numeric fields',
                    { definition: s, query: e },
                  );
              } else {
                const { statisticParameters: t } = s;
                if (!t)
                  throw new i.Z(
                    Se,
                    'statisticParamters should be set for percentile type',
                    { definition: s, query: e },
                  );
              }
            }
          }
        }
        async _getQueryEngineResultForStats(e = {}, t, s) {
          let i;
          e = (0, r.d9)(e);
          try {
            (e = await this._schedule(
              () =>
                (0, V.Up)(e, this.definitionExpression, this.spatialReference),
              s,
            )),
              (e = await this._reschedule(
                () => this._checkStatisticsSupport(e, t),
                s,
              )),
              (i = await this._reschedule(
                () => this._executeGeometryQuery(e, s),
                s,
              )),
              (i = await this._reschedule(
                () => i.executeAggregateIdsQuery(e),
                s,
              )),
              (i = await this._reschedule(() => i.executeObjectIdsQuery(e), s)),
              (i = await this._reschedule(() => i.executeTimeQuery(e), s)),
              (i = await this._reschedule(
                () => i.executeAttributesQuery(e),
                s,
              ));
          } catch (e) {
            if (e !== V.vF) throw e;
            i = new D([], null, this);
          }
          return i;
        }
      }
      const Fe = (0, u.Ue)(),
        Ae = (0, u.Ue)();
    },
    61159: (e, t, s) => {
      s.d(t, { g: () => i });
      const i = {
        supportsStatistics: !0,
        supportsPercentileStatistics: !0,
        supportsSpatialAggregationStatistics: !1,
        supportedSpatialAggregationStatistics: {
          envelope: !1,
          centroid: !1,
          convexHull: !1,
        },
        supportsCentroid: !0,
        supportsCacheHint: !1,
        supportsDistance: !0,
        supportsDistinct: !0,
        supportsExtent: !0,
        supportsGeometryProperties: !1,
        supportsHavingClause: !0,
        supportsOrderBy: !0,
        supportsPagination: !0,
        supportsQuantization: !0,
        supportsQuantizationEditMode: !1,
        supportsQueryGeometry: !0,
        supportsResultType: !1,
        supportsSqlExpression: !0,
        supportsMaxRecordCountFactor: !1,
        supportsStandardizedQueriesOnly: !0,
        supportsTopFeaturesQuery: !1,
        supportsQueryByOthers: !0,
        supportsHistoricMoment: !1,
        supportsFormatPBF: !1,
        supportsDisjointSpatialRelationship: !0,
        supportsDefaultSpatialReference: !1,
        supportsCompactGeometry: !1,
        maxRecordCountFactor: void 0,
        maxRecordCount: void 0,
        standardMaxRecordCount: void 0,
        tileMaxRecordCount: void 0,
      };
    },
    37427: (e, t, s) => {
      s.d(t, { _W: () => d, iV: () => m, oj: () => _ });
      var i = s(70586),
        r = s(44547),
        n = s(37455),
        a = s(8744),
        o = s(40488);
      const u = [0, 0];
      function l(e, t) {
        if (!t) return null;
        if ('x' in t) {
          const s = { x: 0, y: 0 };
          return (
            ([s.x, s.y] = e(t.x, t.y, u)),
            null != t.z && (s.z = t.z),
            null != t.m && (s.m = t.m),
            s
          );
        }
        if ('xmin' in t) {
          const s = { xmin: 0, ymin: 0, xmax: 0, ymax: 0 };
          return (
            ([s.xmin, s.ymin] = e(t.xmin, t.ymin, u)),
            ([s.xmax, s.ymax] = e(t.xmax, t.ymax, u)),
            t.hasZ && ((s.zmin = t.zmin), (s.zmax = t.zmax), (s.hasZ = !0)),
            t.hasM && ((s.mmin = t.mmin), (s.mmax = t.mmax), (s.hasM = !0)),
            s
          );
        }
        return 'rings' in t
          ? { rings: c(t.rings, e), hasM: t.hasM, hasZ: t.hasZ }
          : 'paths' in t
          ? { paths: c(t.paths, e), hasM: t.hasM, hasZ: t.hasZ }
          : 'points' in t
          ? { points: h(t.points, e), hasM: t.hasM, hasZ: t.hasZ }
          : void 0;
      }
      function c(e, t) {
        const s = [];
        for (const i of e) s.push(h(i, t));
        return s;
      }
      function h(e, t) {
        const s = [];
        for (const i of e) {
          const e = t(i[0], i[1], [0, 0]);
          s.push(e), i.length > 2 && e.push(i[2]), i.length > 3 && e.push(i[3]);
        }
        return s;
      }
      async function d(e, t) {
        if (!t) return;
        const s = Array.isArray(e)
          ? e.map((e) => (0, i.pC)(e.geometry) && e.geometry.spatialReference)
          : [e];
        await (0, r.iQ)(s.map((e) => ({ source: e, dest: t })));
      }
      const f = l.bind(null, o.hG),
        p = l.bind(null, o.R6);
      function m(e, t, s) {
        if (!e) return e;
        if (
          (s || ((s = t), (t = e.spatialReference)),
          !(0, a.JY)(t) || !(0, a.JY)(s) || (0, a.fS)(t, s))
        )
          return e;
        if ((0, o.Q8)(t, s)) {
          const t = (0, a.sS)(s) ? f(e) : p(e);
          return (t.spatialReference = s), t;
        }
        return (0, r.oj)(n.N, [e], t, s, null)[0];
      }
      const g = new (class {
        constructor() {
          (this._jobs = []),
            (this._timer = null),
            (this._process = this._process.bind(this));
        }
        async push(e, t, s) {
          if (!e || !e.length || !t || !s || (0, a.fS)(t, s)) return e;
          const i = {
            geometries: e,
            inSpatialReference: t,
            outSpatialReference: s,
            resolve: null,
          };
          return (
            this._jobs.push(i),
            new Promise((e) => {
              (i.resolve = e),
                null === this._timer &&
                  (this._timer = setTimeout(this._process, 10));
            })
          );
        }
        _process() {
          this._timer = null;
          const e = this._jobs.shift();
          if (!e) return;
          const {
            geometries: t,
            inSpatialReference: s,
            outSpatialReference: i,
            resolve: u,
          } = e;
          (0, o.Q8)(s, i)
            ? (0, a.sS)(i)
              ? u(t.map(f))
              : u(t.map(p))
            : u((0, r.oj)(n.N, t, s, i, null)),
            this._jobs.length > 0 &&
              (this._timer = setTimeout(this._process, 10));
        }
      })();
      function _(e, t, s) {
        return g.push(e, t, s);
      }
    },
    10402: (e, t, s) => {
      s.d(t, { hN: () => T, P0: () => x, cW: () => S });
      var i = s(20102),
        r = s(54102),
        n = s(87416),
        a = s(33955),
        o = s(8744);
      function u(e, t) {
        return e ? (t ? 4 : 3) : t ? 3 : 2;
      }
      function l(e, t, s, i, r, n) {
        const a = u(r, n),
          { coords: o, lengths: l } = i;
        if (!l) return !1;
        for (let i = 0, r = 0; i < l.length; i++, r += a)
          if (!c(e, t, s, o[r], o[r + 1])) return !1;
        return !0;
      }
      function c(e, t, s, i, r) {
        if (!e) return !1;
        const n = u(t, s),
          { coords: a, lengths: o } = e;
        let l = !1,
          c = 0;
        for (const e of o) (l = h(l, a, n, c, e, i, r)), (c += e * n);
        return l;
      }
      function h(e, t, s, i, r, n, a) {
        let o = e,
          u = i;
        for (let e = i, l = i + r * s; e < l; e += s) {
          (u = e + s), u === l && (u = i);
          const r = t[e],
            c = t[e + 1],
            h = t[u],
            d = t[u + 1];
          ((c < a && d >= a) || (d < a && c >= a)) &&
            r + ((a - c) / (d - c)) * (h - r) < n &&
            (o = !o);
        }
        return o;
      }
      var d = s(98732),
        f = s(5428),
        p = s(37427),
        m = s(11490);
      const g = 'feature-store:unsupported-query',
        _ = {
          esriSpatialRelIntersects: 'intersects',
          esriSpatialRelContains: 'contains',
          esriSpatialRelCrosses: 'crosses',
          esriSpatialRelDisjoint: 'disjoint',
          esriSpatialRelEnvelopeIntersects: 'intersects',
          esriSpatialRelIndexIntersects: null,
          esriSpatialRelOverlaps: 'overlaps',
          esriSpatialRelTouches: 'touches',
          esriSpatialRelWithin: 'within',
          esriSpatialRelRelation: null,
        },
        y = {
          esriSpatialRelIntersects: !0,
          esriSpatialRelContains: !0,
          esriSpatialRelWithin: !0,
          esriSpatialRelCrosses: !0,
          esriSpatialRelDisjoint: !0,
          esriSpatialRelTouches: !0,
          esriSpatialRelOverlaps: !0,
          esriSpatialRelEnvelopeIntersects: !0,
          esriSpatialRelIndexIntersects: !1,
          esriSpatialRelRelation: !1,
        },
        I = {
          esriGeometryPoint: !0,
          esriGeometryMultipoint: !0,
          esriGeometryPolyline: !0,
          esriGeometryPolygon: !0,
          esriGeometryEnvelope: !0,
        },
        E = {
          esriGeometryPoint: !0,
          esriGeometryMultipoint: !0,
          esriGeometryPolyline: !0,
          esriGeometryPolygon: !0,
          esriGeometryEnvelope: !1,
        };
      function S(e, t, i, o, u) {
        if (
          (0, a.oU)(t) &&
          'esriGeometryPoint' === i &&
          ('esriSpatialRelIntersects' === e || 'esriSpatialRelContains' === e)
        ) {
          const e = (0, d.Uy)(new f.Z(), t, !1, !1);
          return Promise.resolve((t) =>
            (function (e, t, s, i) {
              return c(e, !1, !1, i.coords[0], i.coords[1]);
            })(e, 0, 0, t),
          );
        }
        if ((0, a.oU)(t) && 'esriGeometryMultipoint' === i) {
          const s = (0, d.Uy)(new f.Z(), t, !1, !1);
          if ('esriSpatialRelContains' === e)
            return Promise.resolve((e) => l(s, !1, !1, e, o, u));
        }
        if (
          (0, a.YX)(t) &&
          'esriGeometryPoint' === i &&
          ('esriSpatialRelIntersects' === e || 'esriSpatialRelContains' === e)
        )
          return Promise.resolve((e) => (0, r.aV)(t, (0, m.Op)(i, o, u, e)));
        if (
          (0, a.YX)(t) &&
          'esriGeometryMultipoint' === i &&
          'esriSpatialRelContains' === e
        )
          return Promise.resolve((e) => (0, r.lQ)(t, (0, m.Op)(i, o, u, e)));
        if ((0, a.YX)(t) && 'esriSpatialRelIntersects' === e) {
          const e = (function (e) {
            return 'mesh' === e ? n.h_ : (0, n.IY)(e);
          })(i);
          return Promise.resolve((s) => e(t, (0, m.Op)(i, o, u, s)));
        }
        return Promise.all([s.e(5837), s.e(247)])
          .then(s.bind(s, 30247))
          .then((s) => {
            const r = s[_[e]].bind(null, t.spatialReference, t);
            return (e) => r((0, m.Op)(i, o, u, e));
          });
      }
      async function x(e, t, s) {
        const { spatialRel: r, geometry: n } = e;
        if (n) {
          if (
            !(function (e) {
              return !0 === y[e];
            })(r)
          )
            throw new i.Z(g, 'Unsupported query spatial relationship', {
              query: e,
            });
          if ((0, o.JY)(n.spatialReference) && (0, o.JY)(s)) {
            if (
              !(function (e) {
                return !0 === I[(0, a.Ji)(e)];
              })(n)
            )
              throw new i.Z(g, 'Unsupported query geometry type', { query: e });
            if (
              !(function (e) {
                return !0 === E[e];
              })(t)
            )
              throw new i.Z(g, 'Unsupported layer geometry type', { query: e });
            if (e.outSR)
              return (0, p._W)(
                e.geometry && e.geometry.spatialReference,
                e.outSR,
              );
          }
        }
      }
      function T(e) {
        if ((0, a.YX)(e)) return !0;
        if ((0, a.oU)(e)) {
          for (const t of e.rings) {
            if (5 !== t.length) return !1;
            if (
              t[0][0] !== t[1][0] ||
              t[0][0] !== t[4][0] ||
              t[2][0] !== t[3][0] ||
              t[0][1] !== t[3][1] ||
              t[0][1] !== t[4][1] ||
              t[1][1] !== t[2][1]
            )
              return !1;
          }
          return !0;
        }
        return !1;
      }
    },
    17590: (e, t, s) => {
      function i(e, t) {
        if (!e) return null;
        const s = t.featureAdapter,
          { startTimeField: i, endTimeField: r } = e;
        let n = Number.POSITIVE_INFINITY,
          a = Number.NEGATIVE_INFINITY;
        if (i && r)
          t.forEach((e) => {
            const t = s.getAttribute(e, i),
              o = s.getAttribute(e, r);
            null == t || isNaN(t) || (n = Math.min(n, t)),
              null == o || isNaN(o) || (a = Math.max(a, o));
          });
        else {
          const e = i || r;
          t.forEach((t) => {
            const i = s.getAttribute(t, e);
            null == i ||
              isNaN(i) ||
              ((n = Math.min(n, i)), (a = Math.max(a, i)));
          });
        }
        return { start: n, end: a };
      }
      function r(e, t, s) {
        if (!t || !e) return null;
        const { startTimeField: i, endTimeField: r } = e;
        if (!i && !r) return null;
        const { start: n, end: a } = t;
        return null === n && null === a
          ? null
          : void 0 === n && void 0 === a
          ? () => !1
          : i && r
          ? (function (e, t, s, i, r) {
              return null != i && null != r
                ? (n) => {
                    const a = e.getAttribute(n, t),
                      o = e.getAttribute(n, s);
                    return (null == a || a <= r) && (null == o || o >= i);
                  }
                : null != i
                ? (t) => {
                    const r = e.getAttribute(t, s);
                    return null == r || r >= i;
                  }
                : null != r
                ? (s) => {
                    const i = e.getAttribute(s, t);
                    return null == i || i <= r;
                  }
                : void 0;
            })(s, i, r, n, a)
          : (function (e, t, s, i) {
              return null != s && null != i && s === i
                ? (i) => e.getAttribute(i, t) === s
                : null != s && null != i
                ? (r) => {
                    const n = e.getAttribute(r, t);
                    return n >= s && n <= i;
                  }
                : null != s
                ? (i) => e.getAttribute(i, t) >= s
                : null != i
                ? (s) => e.getAttribute(s, t) <= i
                : void 0;
            })(s, i || r, n, a);
      }
      s.d(t, { R: () => i, y: () => r });
    },
    11490: (e, t, s) => {
      s.d(t, {
        vF: () => p,
        S2: () => T,
        Op: () => E,
        Up: () => S,
        j6: () => x,
        EG: () => I,
      });
      var i = s(35454),
        r = s(70586),
        n = s(67900),
        a = s(49600),
        o = s(33955),
        u = s(82526),
        l = s(8744),
        c = s(98732),
        h = s(5428),
        d = s(37427);
      const f = new i.X({
          esriSRUnit_Meter: 'meters',
          esriSRUnit_Kilometer: 'kilometers',
          esriSRUnit_Foot: 'feet',
          esriSRUnit_StatuteMile: 'miles',
          esriSRUnit_NauticalMile: 'nautical-miles',
          esriSRUnit_USNauticalMile: 'us-nautical-miles',
        }),
        p = Object.freeze({}),
        m = new h.Z(),
        g = new h.Z(),
        _ = new h.Z(),
        y = {
          esriGeometryPoint: c.fQ,
          esriGeometryPolyline: c.J6,
          esriGeometryPolygon: c.eG,
          esriGeometryMultipoint: c.Iv,
        };
      function I(e, t, s, i = e.hasZ, n = e.hasM) {
        if ((0, r.Wi)(t)) return null;
        const a = e.hasZ && i,
          o = e.hasM && n;
        if (s) {
          const r = (0, c.Nh)(
            _,
            t,
            e.hasZ,
            e.hasM,
            'esriGeometryPoint',
            s,
            i,
            n,
          );
          return (0, c.fQ)(r, a, o);
        }
        return (0, c.fQ)(t, a, o);
      }
      function E(e, t, s, i, n, a, o = t, u = s) {
        const l = t && o,
          h = s && u,
          d = (0, r.pC)(i) ? ('coords' in i ? i : i.geometry) : null;
        if ((0, r.Wi)(d)) return null;
        if (n) {
          let i = (0, c.zj)(g, d, t, s, e, n, o, u);
          return a && (i = (0, c.Nh)(_, i, l, h, e, a)), y[e](i, l, h);
        }
        if (a) {
          const i = (0, c.Nh)(_, d, t, s, e, a, o, u);
          return y[e](i, l, h);
        }
        return (0, c.hY)(m, d, t, s, o, u), y[e](m, l, h);
      }
      async function S(e, t, s) {
        const {
          outFields: i,
          orderByFields: r,
          groupByFieldsForStatistics: n,
          outStatistics: a,
        } = e;
        if (i) for (let e = 0; e < i.length; e++) i[e] = i[e].trim();
        if (r) for (let e = 0; e < r.length; e++) r[e] = r[e].trim();
        if (n) for (let e = 0; e < n.length; e++) n[e] = n[e].trim();
        if (a)
          for (let e = 0; e < a.length; e++)
            a[e].onStatisticField &&
              (a[e].onStatisticField = a[e].onStatisticField.trim());
        return (
          e.geometry && !e.outSR && (e.outSR = e.geometry.spatialReference),
          x(e, t, s)
        );
      }
      async function x(e, t, i) {
        if (!e) return null;
        let { where: c } = e;
        if (
          ((e.where = c = c && c.trim()),
          (!c || /^1 *= *1$/.test(c) || (t && t === c)) && (e.where = null),
          !e.geometry)
        )
          return e;
        let h = await (async function (e) {
          const { geometry: t, distance: i, units: r } = e;
          if (null == i || 'vertexAttributes' in t) return t;
          const a = t.spatialReference,
            o = r ? f.fromJSON(r) : (0, n.qE)(a),
            u =
              a && ((0, l.sT)(a) || (0, l.sS)(a))
                ? t
                : await (0, d._W)(a, l.Zn).then(() => (0, d.iV)(t, l.Zn));
          return (
            await (async function () {
              return (
                await Promise.all([s.e(5837), s.e(247)]).then(s.bind(s, 30247))
              ).geodesicBuffer;
            })()
          )(u.spatialReference, u, i, o);
        })(e);
        if (
          ((e.distance = 0),
          (e.units = null),
          'esriSpatialRelEnvelopeIntersects' === e.spatialRel)
        ) {
          const { spatialReference: t } = e.geometry;
          (h = (0, a.aO)(h)), (h.spatialReference = t);
        }
        (e.geometry = h), await (0, d._W)(h.spatialReference, i);
        const m = (await (0, u.aX)((0, o.im)(h)))[0];
        if ((0, r.Wi)(m)) throw p;
        const g = m.toJSON(),
          _ = await (0, d.iV)(g, g.spatialReference, i);
        if (!_) throw p;
        return (_.spatialReference = i), (e.geometry = _), e;
      }
      function T(e) {
        return e && R in e ? JSON.parse(JSON.stringify(e, w)) : e;
      }
      const R = '_geVersion',
        w = (e, t) => (e !== R ? t : void 0);
    },
  },
]);
