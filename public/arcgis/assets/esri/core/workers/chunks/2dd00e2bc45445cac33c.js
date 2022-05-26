'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [5886],
  {
    67900: (e, t, n) => {
      n.d(t, {
        gV: () => x,
        En: () => T,
        Z7: () => B,
        c9: () => S,
        _R: () => q,
        qE: () => _,
        cM: () => N,
        hd: () => a,
        ty: () => M,
        Jo: () => O,
        $C: () => Z,
      }),
        n(80442);
      var r = n(35454),
        s = n(70586),
        o = n(24678),
        i = n(82971),
        c = n(68441),
        u = n(8744),
        l = n(58116);
      const a = 39.37,
        h = (c.sv.radius * Math.PI) / 200,
        f = /UNIT\[([^\]]+)\]\]$/i,
        d = l.Z,
        m = /UNIT\[([^\]]+)\]/i,
        g = new Set([
          4261, 4305, 4807, 4810, 4811, 4812, 4816, 4819, 4821, 4901, 4902,
          37225, 104139, 104140,
        ]),
        y = (0, r.w)()({
          meter: 'meters',
          foot: 'feet',
          foot_us: 'us-feet',
          foot_clarke: 'clarke-feet',
          yard_clarke: 'clarke-yards',
          link_clarke: 'clarke-links',
          yard_sears: 'sears-yards',
          foot_sears: 'sears-feet',
          chain_sears: 'sears-chains',
          chain_benoit_1895_b: 'benoit-1895-b-chains',
          yard_indian: 'indian-yards',
          yard_indian_1937: 'indian-1937-yards',
          foot_gold_coast: 'gold-coast-feet',
          chain_sears_1922_truncated: 'sears-1922-truncated-chains',
          '50_kilometers': '50-kilometers',
          '150_kilometers': '150-kilometers',
        }),
        p = (e) => e * e,
        I = (e) => e * e * e,
        b = {
          length: {
            baseUnit: 'meters',
            units: {
              millimeters: { inBaseUnits: 0.001 },
              centimeters: { inBaseUnits: 0.01 },
              decimeters: { inBaseUnits: 0.1 },
              meters: { inBaseUnits: 1 },
              kilometers: { inBaseUnits: 1e3 },
              inches: { inBaseUnits: 0.0254 },
              feet: { inBaseUnits: 0.3048 },
              yards: { inBaseUnits: 0.9144 },
              miles: { inBaseUnits: 1609.344 },
              'nautical-miles': { inBaseUnits: 1852 },
              'us-feet': { inBaseUnits: 1200 / 3937 },
            },
          },
          area: {
            baseUnit: 'square-meters',
            units: {
              'square-millimeters': { inBaseUnits: p(0.001) },
              'square-centimeters': { inBaseUnits: p(0.01) },
              'square-decimeters': { inBaseUnits: p(0.1) },
              'square-meters': { inBaseUnits: 1 },
              'square-kilometers': { inBaseUnits: p(1e3) },
              'square-inches': { inBaseUnits: p(0.0254) },
              'square-feet': { inBaseUnits: p(0.3048) },
              'square-yards': { inBaseUnits: p(0.9144) },
              'square-miles': { inBaseUnits: p(1609.344) },
              'square-us-feet': { inBaseUnits: p(1200 / 3937) },
              acres: { inBaseUnits: 0.0015625 * p(1609.344) },
              ares: { inBaseUnits: 100 },
              hectares: { inBaseUnits: 1e4 },
            },
          },
          volume: {
            baseUnit: 'liters',
            units: {
              liters: { inBaseUnits: 1 },
              'cubic-millimeters': { inBaseUnits: 1e3 * I(0.001) },
              'cubic-centimeters': { inBaseUnits: 1e3 * I(0.01) },
              'cubic-decimeters': { inBaseUnits: 1e3 * I(0.1) },
              'cubic-meters': { inBaseUnits: 1e3 },
              'cubic-kilometers': { inBaseUnits: 1e3 * I(1e3) },
              'cubic-inches': { inBaseUnits: 1e3 * I(0.0254) },
              'cubic-feet': { inBaseUnits: 1e3 * I(0.3048) },
              'cubic-yards': { inBaseUnits: 1e3 * I(0.9144) },
              'cubic-miles': { inBaseUnits: 1e3 * I(1609.344) },
            },
          },
          angle: {
            baseUnit: 'radians',
            units: {
              radians: { inBaseUnits: 1 },
              degrees: { inBaseUnits: Math.PI / 180 },
            },
          },
        },
        w = (function () {
          const e = {};
          for (const t in b) for (const n in b[t].units) e[n] = t;
          return e;
        })();
      function U(e) {
        const t = w[e];
        if (t) return t;
        throw new Error('unknown type');
      }
      function G(e, t = null) {
        return (t = t || U(e)), b[t].baseUnit === e;
      }
      function T(e, t, n) {
        if (t === n) return e;
        const r = U(t);
        if (r !== U(n)) throw new Error('incompatible units');
        const s = G(t, r)
          ? e
          : (function (e, t, n) {
              return e * b[n].units[t].inBaseUnits;
            })(e, t, r);
        return G(n, r)
          ? s
          : (function (e, t, n) {
              return e / b[n].units[t].inBaseUnits;
            })(s, n, r);
      }
      function M(e, t, n) {
        return T(e, t, 'meters') / ((n * Math.PI) / 180);
      }
      function Z(e) {
        return y.fromJSON(e.toLowerCase()) || null;
      }
      function q(e) {
        if (e && 'object' == typeof e && !(0, u.N$)(e)) return 1;
        const t = S(e);
        return t > 1e5 ? 1 : t;
      }
      function N(e) {
        return S(e) >= (e instanceof i.Z ? (0, o.Iu)(e).metersPerDegree : 1e5)
          ? 'meters'
          : _(e);
      }
      function S(e, t = c.sv.metersPerDegree) {
        return B(e, !0) || t;
      }
      function B(e, t = !1) {
        let n,
          r,
          s = null;
        if (
          (null != e &&
            ('object' == typeof e
              ? ((n = e.wkid), (r = e.wkt))
              : 'number' == typeof e
              ? (n = e)
              : 'string' == typeof e && (r = e)),
          n)
        ) {
          if ((0, u.o$)(n)) return c.yr.metersPerDegree;
          if ((0, u.ME)(n)) return c.Z1.metersPerDegree;
          (s = d.values[d[n]]), !s && t && g.has(n) && (s = h);
        } else
          r && (E(r) ? (s = k(f.exec(r), s)) : F(r) && (s = k(m.exec(r), s)));
        return s;
      }
      function k(e, t) {
        return e && e[1] ? P(e[1]) : t;
      }
      function P(e) {
        return parseFloat(e.split(',')[1]);
      }
      function _(e) {
        let t,
          n,
          r = null;
        if (
          (null != e &&
            ('object' == typeof e
              ? ((t = e.wkid), (n = e.wkt))
              : 'number' == typeof e
              ? (t = e)
              : 'string' == typeof e && (n = e)),
          t)
        )
          r = d.units[d[t]];
        else if (n) {
          const e = E(n) ? f : F(n) ? m : null;
          if (e) {
            const t = e.exec(n);
            t &&
              t[1] &&
              (r = (function (e) {
                const t = /[\\"\\']{1}([^\\"\\']+)/.exec(e);
                let n = t && t[1];
                if (!n || -1 === d.units.indexOf(n)) {
                  const t = P(e);
                  n = null;
                  const r = d.values;
                  for (let e = 0; e < r.length; ++e)
                    if (Math.abs(t - r[e]) < 1e-7) {
                      n = d.units[e];
                      break;
                    }
                }
                return n;
              })(t[1]));
          }
        }
        return (0, s.pC)(r) ? Z(r) : null;
      }
      function F(e) {
        return /^GEOCCS/i.test(e);
      }
      function E(e) {
        return /^PROJCS/i.test(e);
      }
      const R = {
          esriAcres: 'acres',
          esriAres: 'ares',
          esriHectares: 'hectares',
          esriSquareCentimeters: 'square-centimeters',
          esriSquareDecimeters: 'square-decimeters',
          esriSquareFeet: 'square-feet',
          esriSquareInches: 'square-inches',
          esriSquareKilometers: 'square-kilometers',
          esriSquareMeters: 'square-meters',
          esriSquareMiles: 'square-miles',
          esriSquareMillimeters: 'square-millimeters',
          esriSquareUsFeet: 'square-us-feet',
          esriSquareYards: 'square-yards',
        },
        C = {
          esriCentimeters: 'centimeters',
          esriDecimeters: 'decimeters',
          esriFeet: 'feet',
          esriInches: 'inches',
          esriKilometers: 'kilometers',
          esriMeters: 'meters',
          esriMiles: 'miles',
          esriMillimeters: 'millimeters',
          esriNauticalMiles: 'nautical-miles',
          esriYards: 'yards',
        },
        x = (0, r.w)()(R),
        O = (0, r.w)()(C);
      (0, r.w)()({ ...R, ...C });
    },
    24678: (e, t, n) => {
      n.d(t, {
        GG: () => c,
        HQ: () => u,
        VY: () => l,
        wY: () => a,
        Iu: () => f,
        e8: () => d,
        rS: () => h,
      });
      var r = n(82971),
        s = n(68441),
        o = n(8744);
      function i(e) {
        return new r.Z({
          wkt: `GEOCCS["Spherical geocentric",\n    DATUM["Not specified",\n      SPHEROID["Sphere",${e.radius},0]],\n    PRIMEM["Greenwich",0.0,\n      AUTHORITY["EPSG","8901"]],\n    UNIT["m",1.0],\n    AXIS["Geocentric X",OTHER],\n    AXIS["Geocentric Y",EAST],\n    AXIS["Geocentric Z",NORTH]\n  ]`,
        });
      }
      const c = i(s.sv),
        u = i(s.yr),
        l = i(s.Z1),
        a = new r.Z({
          wkt: `GEOCCS["WGS 84",\n  DATUM["WGS_1984",\n    SPHEROID["WGS 84",${s.sv.radius},298.257223563,\n      AUTHORITY["EPSG","7030"]],\n    AUTHORITY["EPSG","6326"]],\n  PRIMEM["Greenwich",0,\n    AUTHORITY["EPSG","8901"]],\n  UNIT["m",1.0,\n    AUTHORITY["EPSG","9001"]],\n  AXIS["Geocentric X",OTHER],\n  AXIS["Geocentric Y",OTHER],\n  AXIS["Geocentric Z",NORTH],\n  AUTHORITY["EPSG","4978"]\n]`,
        });
      function h(e) {
        return e && ((0, o.BZ)(e) || e === u)
          ? u
          : e && ((0, o.V2)(e) || e === l)
          ? l
          : c;
      }
      function f(e) {
        return e && ((0, o.BZ)(e) || e === u)
          ? s.yr
          : e && ((0, o.V2)(e) || e === l)
          ? s.Z1
          : s.sv;
      }
      function d(e) {
        return (0, o.o$)(e) ? s.yr : (0, o.ME)(e) ? s.Z1 : s.sv;
      }
    },
    70272: (e, t, n) => {
      n.d(t, { u_: () => s, nd: () => i, S6: () => o });
      var r = n(70586);
      class s {
        constructor(e = null, t = {}, n, r) {
          (this.geometry = e),
            (this.attributes = t),
            (this.centroid = n),
            (this.objectId = r),
            (this.displayId = 0),
            (this.geohashX = 0),
            (this.geohashY = 0);
        }
        weakClone() {
          const e = new s(
            this.geometry,
            this.attributes,
            this.centroid,
            this.objectId,
          );
          return (
            (e.displayId = this.displayId),
            (e.geohashX = this.geohashX),
            (e.geohashY = this.geohashY),
            e
          );
        }
      }
      function o(e) {
        return !(
          (0, r.Wi)(e.geometry) ||
          !e.geometry.coords ||
          !e.geometry.coords.length
        );
      }
      class i extends s {}
    },
    44876: (e, t, n) => {
      n.d(t, { Z: () => r });
      class r {
        constructor() {
          (this.objectIdFieldName = null),
            (this.globalIdFieldName = null),
            (this.geohashFieldName = null),
            (this.geometryProperties = null),
            (this.geometryType = null),
            (this.spatialReference = null),
            (this.hasZ = !1),
            (this.hasM = !1),
            (this.features = []),
            (this.fields = []),
            (this.transform = null),
            (this.exceededTransferLimit = !1),
            (this.uniqueIdField = null),
            (this.queryGeometryType = null),
            (this.queryGeometry = null);
        }
        weakClone() {
          const e = new r();
          return (
            (e.objectIdFieldName = this.objectIdFieldName),
            (e.globalIdFieldName = this.globalIdFieldName),
            (e.geohashFieldName = this.geohashFieldName),
            (e.geometryProperties = this.geometryProperties),
            (e.geometryType = this.geometryType),
            (e.spatialReference = this.spatialReference),
            (e.hasZ = this.hasZ),
            (e.hasM = this.hasM),
            (e.features = this.features),
            (e.fields = this.fields),
            (e.transform = this.transform),
            (e.exceededTransferLimit = this.exceededTransferLimit),
            (e.uniqueIdField = this.uniqueIdField),
            (e.queryGeometry = this.queryGeometry),
            (e.queryGeometryType = this.queryGeometryType),
            e
          );
        }
      }
    },
    5428: (e, t, n) => {
      n.d(t, { Z: () => r });
      class r {
        constructor(e = [], t = [], n = !1) {
          (this.lengths = null != e ? e : []),
            (this.coords = null != t ? t : []),
            (this.hasIndeterminateRingOrder = n);
        }
        get isPoint() {
          return 0 === this.lengths.length;
        }
        get maxLength() {
          return Math.max(...this.lengths);
        }
        get size() {
          return this.lengths.reduce((e, t) => e + t);
        }
        forEachVertex(e) {
          let t = 0;
          this.lengths.length || e(this.coords[0], this.coords[1]);
          for (let n = 0; n < this.lengths.length; n++) {
            const r = this.lengths[n];
            for (let n = 0; n < r; n++)
              e(this.coords[2 * (n + t)], this.coords[2 * (n + t) + 1]);
            t += r;
          }
        }
        clone(e) {
          return e
            ? (e.set(this.coords),
              new r(this.lengths.slice(), e, this.hasIndeterminateRingOrder))
            : new r(
                this.lengths.slice(),
                this.coords.slice(),
                this.hasIndeterminateRingOrder,
              );
        }
      }
    },
    98732: (e, t, n) => {
      n.d(t, {
        XA: () => Y,
        h_: () => D,
        Yn: () => A,
        GH: () => H,
        Uy: () => x,
        EI: () => j,
        cn: () => X,
        di: () => $,
        Iv: () => _,
        fQ: () => G,
        eG: () => C,
        J6: () => E,
        oB: () => oe,
        zj: () => J,
        $: () => ee,
        lz: () => se,
        RZ: () => z,
        Nh: () => V,
        Jd: () => I,
        IN: () => b,
        hY: () => ne,
        lM: () => L,
        $g: () => te,
      });
      var r = n(20102),
        s = n(92604),
        o = n(70586),
        i = n(33955),
        c = n(70272),
        u = n(44876),
        l = n(5428);
      function a(e, t) {
        return e ? (t ? 4 : 3) : t ? 3 : 2;
      }
      const h = s.Z.getLogger('esri.layers.graphics.featureConversionUtils'),
        f = {
          esriGeometryPoint: 0,
          esriGeometryPolyline: 2,
          esriGeometryPolygon: 3,
          esriGeometryMultipoint: 0,
        },
        d = (e, t, n, r, s, o) => {
          (e[n] = s), (e[n + 1] = o);
        },
        m = (e, t, n, r, s, o) => {
          (e[n] = s), (e[n + 1] = o), (e[n + 2] = t[r + 2]);
        },
        g = (e, t, n, r, s, o) => {
          (e[n] = s), (e[n + 1] = o), (e[n + 2] = t[r + 3]);
        },
        y = (e, t, n, r, s, o) => {
          (e[n] = s),
            (e[n + 1] = o),
            (e[n + 2] = t[r + 2]),
            (e[n + 3] = t[r + 3]);
        };
      function p(e, t, n, r) {
        if (e) {
          if (n) return t && r ? y : m;
          if (t && r) return g;
        } else if (t && r) return m;
        return d;
      }
      function I({ scale: e, translate: t }, n) {
        return Math.round((n - t[0]) / e[0]);
      }
      function b({ scale: e, translate: t }, n) {
        return Math.round((t[1] - n) / e[1]);
      }
      function w({ scale: e, translate: t }, n) {
        return n * e[0] + t[0];
      }
      function U({ scale: e, translate: t }, n) {
        return t[1] - n * e[1];
      }
      function G(e, t, n) {
        return e ? (t ? (n ? B(e) : Z(e)) : n ? N(e) : T(e)) : null;
      }
      function T(e) {
        const t = e.coords;
        return { x: t[0], y: t[1] };
      }
      function M(e, t) {
        return (e.coords[0] = t.x), (e.coords[1] = t.y), e;
      }
      function Z(e) {
        const t = e.coords;
        return { x: t[0], y: t[1], z: t[2] };
      }
      function q(e, t) {
        return (e.coords[0] = t.x), (e.coords[1] = t.y), (e.coords[2] = t.z), e;
      }
      function N(e) {
        const t = e.coords;
        return { x: t[0], y: t[1], m: t[2] };
      }
      function S(e, t) {
        return (e.coords[0] = t.x), (e.coords[1] = t.y), (e.coords[2] = t.m), e;
      }
      function B(e) {
        const t = e.coords;
        return { x: t[0], y: t[1], z: t[2], m: t[3] };
      }
      function k(e, t) {
        return (
          (e.coords[0] = t.x),
          (e.coords[1] = t.y),
          (e.coords[2] = t.z),
          (e.coords[3] = t.m),
          e
        );
      }
      function P(e, t) {
        return e && t ? k : e ? q : t ? S : M;
      }
      function _(e, t, n) {
        if ((0, o.Wi)(e)) return null;
        const r = a(t, n),
          s = [];
        for (let t = 0; t < e.coords.length; t += r) {
          const n = [];
          for (let s = 0; s < r; s++) n.push(e.coords[t + s]);
          s.push(n);
        }
        return t
          ? n
            ? { points: s, hasZ: t, hasM: n }
            : { points: s, hasZ: t }
          : n
          ? { points: s, hasM: n }
          : { points: s };
      }
      function F(e, t, n = a(t.hasZ, t.hasM)) {
        e.lengths[0] = t.points.length;
        const r = e.coords;
        let s = 0;
        for (const e of t.points) for (let t = 0; t < n; t++) r[s++] = e[t];
        return e;
      }
      function E(e, t, n) {
        if (!e) return null;
        const r = a(t, n),
          { coords: s, lengths: o } = e,
          i = [];
        let c = 0;
        for (const e of o) {
          const t = [];
          for (let n = 0; n < e; n++) {
            const e = [];
            for (let t = 0; t < r; t++) e.push(s[c++]);
            t.push(e);
          }
          i.push(t);
        }
        return t
          ? n
            ? { paths: i, hasZ: t, hasM: n }
            : { paths: i, hasZ: t }
          : n
          ? { paths: i, hasM: n }
          : { paths: i };
      }
      function R(e, t, n = a(t.hasZ, t.hasM)) {
        const { lengths: r, coords: s } = e;
        let o = 0;
        for (const e of t.paths) {
          for (const t of e) for (let e = 0; e < n; e++) s[o++] = t[e];
          r.push(e.length);
        }
        return e;
      }
      function C(e, t, n) {
        if (!e) return null;
        const r = a(t, n),
          { coords: s, lengths: o } = e,
          i = [];
        let c = 0;
        for (const e of o) {
          const t = [];
          for (let n = 0; n < e; n++) {
            const e = [];
            for (let t = 0; t < r; t++) e.push(s[c++]);
            t.push(e);
          }
          i.push(t);
        }
        return t
          ? n
            ? { rings: i, hasZ: t, hasM: n }
            : { rings: i, hasZ: t }
          : n
          ? { rings: i, hasM: n }
          : { rings: i };
      }
      function x(e, t, n = t.hasZ, r = t.hasM) {
        return (
          (function (e, t, n, r) {
            const s = a(n, r),
              { lengths: o, coords: i } = e;
            let c = 0;
            o.length = i.length = 0;
            for (const e of t) {
              for (const t of e) for (let e = 0; e < s; e++) i[c++] = t[e];
              o.push(e.length);
            }
          })(e, t.rings, n, r),
          e
        );
      }
      const O = [],
        v = [];
      function Y(e, t, n, r, s) {
        O[0] = e;
        const [o] = A(v, O, t, n, r, s);
        return (O.length = v.length = 0), o;
      }
      function A(e, t, n, s, i, u) {
        if (((e.length = 0), !n)) {
          for (const n of t) {
            const t = n.attributes[u];
            e.push(new c.u_(null, n.attributes, null, t));
          }
          return e;
        }
        switch (n) {
          case 'esriGeometryPoint':
            return (function (e, t, n, r, s) {
              const o = P(n, r);
              for (const n of t) {
                const { geometry: t, attributes: r } = n;
                let i;
                t && (i = o(new l.Z(), t)), e.push(new c.u_(i, r, null, r[s]));
              }
              return e;
            })(e, t, s, i, u);
          case 'esriGeometryMultipoint':
            return (function (e, t, n, r, s) {
              const o = a(n, r);
              for (const n of t) {
                const t = n.geometry,
                  r = n.attributes;
                let i;
                t && (i = F(new l.Z(), t, o)),
                  e.push(new c.u_(i, r, null, r[s]));
              }
              return e;
            })(e, t, s, i, u);
          case 'esriGeometryPolyline':
            return (function (e, t, n, r, s) {
              const o = a(n, r);
              for (const n of t) {
                const t = n.geometry,
                  r = n.attributes;
                let i;
                t && (i = R(new l.Z(), t, o)),
                  e.push(new c.u_(i, r, null, r[s]));
              }
              return e;
            })(e, t, s, i, u);
          case 'esriGeometryPolygon':
            return (function (e, t, n, r, s) {
              for (const i of t) {
                const t = i.geometry,
                  u = i.centroid,
                  a = i.attributes;
                let h;
                t && (h = x(new l.Z(), t, n, r)),
                  (0, o.pC)(u)
                    ? e.push(new c.u_(h, a, M(new l.Z(), u), a[s]))
                    : e.push(new c.u_(h, a, null, a[s]));
              }
              return e;
            })(e, t, s, i, u);
          default:
            h.error(
              'convertToFeatureSet:unknown-geometry',
              new r.Z(`Unable to parse unknown geometry type '${n}'`),
            ),
              (e.length = 0);
        }
        return e;
      }
      function j(e, t, n, r) {
        (v[0] = e), W(O, v, t, n, r);
        const s = O[0];
        return (O.length = v.length = 0), s;
      }
      function H(e, t, n) {
        if ((0, o.Wi)(e)) return null;
        const s = new l.Z();
        return (
          'hasZ' in e && null == t && (t = e.hasZ),
          'hasM' in e && null == n && (n = e.hasM),
          (0, i.wp)(e)
            ? P(null != t ? t : null != e.z, null != n ? n : null != e.m)(s, e)
            : (0, i.oU)(e)
            ? x(s, e, t, n)
            : (0, i.l9)(e)
            ? R(s, e, a(t, n))
            : (0, i.aW)(e)
            ? F(s, e, a(t, n))
            : void h.error(
                'convertFromGeometry:unknown-geometry',
                new r.Z(`Unable to parse unknown geometry type '${e}'`),
              )
        );
      }
      function $(e, t, n, s) {
        const i = e && ('coords' in e ? e : e.geometry);
        if ((0, o.Wi)(i)) return null;
        switch (t) {
          case 'esriGeometryPoint': {
            let e = T;
            return n && s ? (e = B) : n ? (e = Z) : s && (e = N), e(i);
          }
          case 'esriGeometryMultipoint':
            return _(i, n, s);
          case 'esriGeometryPolyline':
            return E(i, n, s);
          case 'esriGeometryPolygon':
            return C(i, n, s);
          default:
            return void h.error(
              'convertToGeometry:unknown-geometry',
              new r.Z(`Unable to parse unknown geometry type '${t}'`),
            );
        }
      }
      function W(e, t, n, s, i) {
        if (((e.length = 0), (0, o.Wi)(n)))
          return (function (e, t) {
            for (const n of t) e.push({ attributes: n.attributes });
            return e;
          })(e, t);
        switch (n) {
          case 'esriGeometryPoint':
            return (function (e, t, n, r) {
              let s = T;
              n && r ? (s = B) : n ? (s = Z) : r && (s = N);
              for (const n of t) {
                const { geometry: t, attributes: r } = n,
                  i = (0, o.pC)(t) ? s(t) : null;
                e.push({ attributes: r, geometry: i });
              }
              return e;
            })(e, t, s, i);
          case 'esriGeometryMultipoint':
            return (function (e, t, n, r) {
              for (const s of t) {
                const { geometry: t, attributes: o } = s;
                let i;
                t && (i = _(t, n, r)), e.push({ attributes: o, geometry: i });
              }
              return e;
            })(e, t, s, i);
          case 'esriGeometryPolyline':
            return (function (e, t, n, r) {
              for (const s of t) {
                const { geometry: t, attributes: i } = s;
                let c;
                (0, o.pC)(t) && (c = E(t, n, r)),
                  e.push({ attributes: i, geometry: c });
              }
              return e;
            })(e, t, s, i);
          case 'esriGeometryPolygon':
            return (function (e, t, n, r) {
              for (const s of t) {
                const { geometry: t, attributes: i, centroid: c } = s;
                let u;
                if (((0, o.pC)(t) && (u = C(t, n, r)), (0, o.pC)(c))) {
                  const t = T(c);
                  e.push({ attributes: i, centroid: t, geometry: u });
                } else e.push({ attributes: i, geometry: u });
              }
              return e;
            })(e, t, s, i);
          default:
            h.error(
              'convertToFeatureSet:unknown-geometry',
              new r.Z(`Unable to parse unknown geometry type '${n}'`),
            );
        }
        return e;
      }
      function X(e) {
        const {
            objectIdFieldName: t,
            spatialReference: n,
            transform: r,
            fields: s,
            hasM: o,
            hasZ: i,
            features: c,
            geometryType: u,
            exceededTransferLimit: l,
            uniqueIdField: a,
            queryGeometry: h,
            queryGeometryType: f,
          } = e,
          d = {
            features: W([], c, u, i, o),
            fields: s,
            geometryType: u,
            objectIdFieldName: t,
            spatialReference: n,
            uniqueIdField: a,
            queryGeometry: $(h, f, !1, !1),
          };
        return (
          r && (d.transform = r),
          l && (d.exceededTransferLimit = l),
          o && (d.hasM = o),
          i && (d.hasZ = i),
          d
        );
      }
      function D(e, t) {
        const n = new u.Z(),
          {
            hasM: s,
            hasZ: o,
            features: i,
            objectIdFieldName: c,
            spatialReference: l,
            geometryType: a,
            exceededTransferLimit: f,
            transform: d,
            fields: m,
          } = e;
        return (
          m && (n.fields = m),
          (n.geometryType = a),
          (n.objectIdFieldName = c || t),
          (n.spatialReference = l),
          n.objectIdFieldName
            ? (i && A(n.features, i, a, o, s, n.objectIdFieldName),
              f && (n.exceededTransferLimit = f),
              s && (n.hasM = s),
              o && (n.hasZ = o),
              d && (n.transform = d),
              n)
            : (h.error(
                new r.Z(
                  'optimized-features:invalid-objectIdFieldName',
                  'objectIdFieldName is missing',
                ),
              ),
              n)
        );
      }
      function L(e) {
        const { transform: t, features: n, hasM: r, hasZ: s } = e;
        if (!t) return e;
        for (const e of n)
          (0, o.pC)(e.geometry) && te(e.geometry, e.geometry, r, s, t),
            (0, o.pC)(e.centroid) && te(e.centroid, e.centroid, r, s, t);
        return (e.transform = null), e;
      }
      function z(e, t) {
        const { geometryType: n, features: r, hasM: s, hasZ: o } = t;
        if (!e) return t;
        for (let t = 0; t < r.length; t++) {
          const i = r[t],
            c = i.weakClone();
          (c.geometry = new l.Z()),
            V(c.geometry, i.geometry, s, o, n, e),
            i.centroid &&
              ((c.centroid = new l.Z()),
              V(c.centroid, i.centroid, s, o, 'esriGeometryPoint', e)),
            (r[t] = c);
        }
        return (t.transform = e), t;
      }
      function V(e, t, n, r, s, i, c = n, u = r) {
        if (
          (e.lengths.length && (e.lengths.length = 0),
          e.coords.length && (e.coords.length = 0),
          (0, o.Wi)(t) || !t.coords.length)
        )
          return null;
        const l = f[s],
          { coords: h, lengths: d } = t,
          m = a(n, r),
          g = a(n && c, r && u),
          y = p(n, r, c, u);
        if (!d.length)
          return (
            y(e.coords, h, 0, 0, I(i, h[0]), b(i, h[1])),
            e.lengths.length && (e.lengths.length = 0),
            (e.coords.length = m),
            e
          );
        let w,
          U,
          G,
          T,
          M = 0,
          Z = 0,
          q = Z;
        for (const t of d) {
          if (t < l) continue;
          let n = 0;
          (Z = q),
            (G = w = I(i, h[M])),
            (T = U = b(i, h[M + 1])),
            y(e.coords, h, Z, M, G, T),
            n++,
            (M += m),
            (Z += g);
          for (let r = 1; r < t; r++, M += m)
            (G = I(i, h[M])),
              (T = b(i, h[M + 1])),
              (G === w && T === U) ||
                (y(e.coords, h, Z, M, G - w, T - U),
                (Z += g),
                n++,
                (w = G),
                (U = T));
          n >= l && (e.lengths.push(n), (q = Z));
        }
        return (e.coords.length = q), e.coords.length ? e : null;
      }
      function J(e, t, n, r, s, o, i = n, c = r) {
        if (
          (e.lengths.length && (e.lengths.length = 0),
          e.coords.length && (e.coords.length = 0),
          !t || !t.coords.length)
        )
          return null;
        const u = f[s],
          { coords: l, lengths: h } = t,
          d = a(n, r),
          m = a(n && i, r && c),
          g = p(n, r, i, c);
        if (!h.length)
          return (
            g(e.coords, l, 0, 0, l[0], l[1]),
            e.lengths.length && (e.lengths.length = 0),
            (e.coords.length = d),
            e
          );
        let y = 0;
        const I = o * o;
        for (const t of h) {
          if (t < u) {
            y += t * d;
            continue;
          }
          const n = e.coords.length / m,
            r = y,
            s = y + (t - 1) * d;
          g(e.coords, l, e.coords.length, r, l[r], l[r + 1]),
            Q(e.coords, l, d, I, g, r, s),
            g(e.coords, l, e.coords.length, s, l[s], l[s + 1]);
          const o = e.coords.length / m - n;
          o >= u ? e.lengths.push(o) : (e.coords.length = n * m), (y += t * d);
        }
        return e.coords.length ? e : null;
      }
      function K(e, t, n, r) {
        const s = e[t],
          o = e[t + 1],
          i = e[n],
          c = e[n + 1],
          u = e[r],
          l = e[r + 1];
        let a = i,
          h = c,
          f = u - a,
          d = l - h;
        if (0 !== f || 0 !== d) {
          const e = ((s - a) * f + (o - h) * d) / (f * f + d * d);
          e > 1 ? ((a = u), (h = l)) : e > 0 && ((a += f * e), (h += d * e));
        }
        return (f = s - a), (d = o - h), f * f + d * d;
      }
      function Q(e, t, n, r, s, o, i) {
        let c,
          u = r,
          l = 0;
        for (let e = o + n; e < i; e += n)
          (c = K(t, e, o, i)), c > u && ((l = e), (u = c));
        u > r &&
          (l - o > n && Q(e, t, n, r, s, o, l),
          s(e, t, e.length, l, t[l], t[l + 1]),
          i - l > n && Q(e, t, n, r, s, l, i));
      }
      function ee(e, t, n, r) {
        if ((0, o.Wi)(t) || !t.coords || !t.coords.length) return null;
        const s = a(n, r);
        let i = Number.POSITIVE_INFINITY,
          c = Number.POSITIVE_INFINITY,
          u = Number.NEGATIVE_INFINITY,
          l = Number.NEGATIVE_INFINITY;
        if (t && t.coords) {
          const e = t.coords;
          for (let t = 0; t < e.length; t += s) {
            const n = e[t],
              r = e[t + 1];
            (i = Math.min(i, n)),
              (u = Math.max(u, n)),
              (c = Math.min(c, r)),
              (l = Math.max(l, r));
          }
        }
        return (e[0] = i), (e[1] = c), (e[2] = u), (e[3] = l), e;
      }
      function te(e, t, n, r, s) {
        const { coords: o, lengths: i } = t,
          c = n ? (r ? y : m) : r ? m : d,
          u = a(n, r);
        if (!o.length)
          return e !== t && ((e.lengths.length = 0), (e.coords.length = 0)), e;
        if (!i.length)
          return (
            c(e.coords, o, 0, 0, w(s, o[0]), U(s, o[1])),
            e !== t && ((e.lengths.length = 0), (e.coords.length = u)),
            e
          );
        const [l, h] = s.scale;
        let f = 0;
        for (let t = 0; t < i.length; t++) {
          const n = i[t];
          e.lengths[t] = n;
          let r = w(s, o[f]),
            a = U(s, o[f + 1]);
          c(e.coords, o, f, f, r, a), (f += u);
          for (let t = 1; t < n; t++, f += u)
            (r += o[f] * l), (a -= o[f + 1] * h), c(e.coords, o, f, f, r, a);
        }
        return (
          e !== t &&
            ((e.lengths.length = i.length), (e.coords.length = o.length)),
          e
        );
      }
      function ne(e, t, n, r, s, o) {
        const i = a(n, r),
          c = p(n, r, s, o),
          u = t.coords;
        (e.coords.length = 0),
          (e.lengths.length = 0),
          e.lengths.push(...t.lengths);
        for (let t = 0; t < u.length; t += i)
          c(e.coords, u, e.coords.length, t, u[t], u[t + 1]);
        return e;
      }
      function re(e, t, n, r) {
        let s = 0,
          o = e[r * t],
          i = e[r * (t + 1)];
        for (let c = 1; c < n; c++) {
          const n = o + e[r * (t + c)],
            u = i + e[r * (t + c) + 1],
            l = (n - o) * (u + i);
          (o = n), (i = u), (s += l);
        }
        return 0.5 * s;
      }
      function se(e, t) {
        const { coords: n, lengths: r } = e;
        let s = 0,
          o = 0;
        for (let e = 0; e < r.length; e++) (o += re(n, s, r[e], t)), (s += e);
        return Math.abs(o);
      }
      function oe(e, t) {
        if ((0, o.Wi)(e)) return null;
        const n = e.clone(),
          r = e.coords,
          s = e.lengths;
        let i = 0;
        for (let e = 0; e < s.length; e++) {
          const o = s[e];
          let c = r[t * i],
            u = r[t * i + 1];
          for (let e = 1; e < o; e++) {
            const s = c + r[t * (i + e)],
              o = u + r[t * (i + e) + 1];
            (n.coords[t * (i + e)] = s),
              (n.coords[t * (i + e) + 1] = o),
              (c = s),
              (u = o);
          }
          i += o;
        }
        return n;
      }
    },
  },
]);
