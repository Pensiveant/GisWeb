'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [7996],
  {
    88764: (e, t, n) => {
      n.d(t, { q: () => o });
      var i,
        s,
        r,
        a = { exports: {} };
      (i = a),
        (s = function () {
          function e(n, i, s, r, a) {
            for (; r > s; ) {
              if (r - s > 600) {
                var o = r - s + 1,
                  c = i - s + 1,
                  l = Math.log(o),
                  h = 0.5 * Math.exp((2 * l) / 3),
                  u =
                    0.5 *
                    Math.sqrt((l * h * (o - h)) / o) *
                    (c - o / 2 < 0 ? -1 : 1);
                e(
                  n,
                  i,
                  Math.max(s, Math.floor(i - (c * h) / o + u)),
                  Math.min(r, Math.floor(i + ((o - c) * h) / o + u)),
                  a,
                );
              }
              var m = n[i],
                f = s,
                d = r;
              for (t(n, s, i), a(n[r], m) > 0 && t(n, s, r); f < d; ) {
                for (t(n, f, d), f++, d--; a(n[f], m) < 0; ) f++;
                for (; a(n[d], m) > 0; ) d--;
              }
              0 === a(n[s], m) ? t(n, s, d) : t(n, ++d, r),
                d <= i && (s = d + 1),
                i <= d && (r = d - 1);
            }
          }
          function t(e, t, n) {
            var i = e[t];
            (e[t] = e[n]), (e[n] = i);
          }
          function n(e, t) {
            return e < t ? -1 : e > t ? 1 : 0;
          }
          return function (t, i, s, r, a) {
            e(t, i, s || 0, r || t.length - 1, a || n);
          };
        }),
        void 0 !== (r = s()) && (i.exports = r);
      const o = a.exports;
    },
    24133: (e, t, n) => {
      n.d(t, { Q: () => o });
      var i = n(67676),
        s = n(70586),
        r = n(44553),
        a = n(88764);
      class o {
        constructor(e = 9, t) {
          (this.compareMinX = u),
            (this.compareMinY = m),
            (this._toBBox = function (e) {
              return e;
            }),
            (this._maxEntries = Math.max(4, e || 9)),
            (this._minEntries = Math.max(2, Math.ceil(0.4 * this._maxEntries))),
            t &&
              ('function' == typeof t
                ? (this._toBBox = t)
                : this._initFormat(t)),
            this.clear();
        }
        destroy() {
          this.clear(), g.prune(), U.prune(), Y.prune(), X.prune();
        }
        all(e) {
          this._all(this.data, e);
        }
        search(e, t) {
          let n = this.data;
          const i = this._toBBox;
          if (B(e, n))
            for (g.clear(); n; ) {
              for (let s = 0, r = n.children.length; s < r; s++) {
                const r = n.children[s],
                  a = n.leaf ? i(r) : r;
                B(e, a) &&
                  (n.leaf ? t(r) : _(e, a) ? this._all(r, t) : g.push(r));
              }
              n = g.pop();
            }
        }
        collides(e) {
          let t = this.data;
          const n = this._toBBox;
          if (!B(e, t)) return !1;
          for (g.clear(); t; ) {
            for (let i = 0, s = t.children.length; i < s; i++) {
              const s = t.children[i],
                r = t.leaf ? n(s) : s;
              if (B(e, r)) {
                if (t.leaf || _(e, r)) return !0;
                g.push(s);
              }
            }
            t = g.pop();
          }
          return !1;
        }
        load(e) {
          if (!e.length) return this;
          if (e.length < this._minEntries) {
            for (let t = 0, n = e.length; t < n; t++) this.insert(e[t]);
            return this;
          }
          let t = this._build(e.slice(0, e.length), 0, e.length - 1, 0);
          if (this.data.children.length)
            if (this.data.height === t.height) this._splitRoot(this.data, t);
            else {
              if (this.data.height < t.height) {
                const e = this.data;
                (this.data = t), (t = e);
              }
              this._insert(t, this.data.height - t.height - 1, !0);
            }
          else this.data = t;
          return this;
        }
        insert(e) {
          return e && this._insert(e, this.data.height - 1), this;
        }
        clear() {
          return (this.data = new w([])), this;
        }
        remove(e) {
          if (!e) return this;
          let t,
            n = this.data,
            r = null,
            a = 0,
            o = !1;
          const c = this._toBBox(e);
          for (Y.clear(), X.clear(); n || Y.length > 0; ) {
            var l;
            if (
              (n ||
                ((n = (0, s.j0)(Y.pop())),
                (r = Y.data[Y.length - 1]),
                (a = null != (l = X.pop()) ? l : 0),
                (o = !0)),
              n.leaf &&
                ((t = (0, i.cq)(n.children, e, n.children.length, n.indexHint)),
                -1 !== t))
            )
              return (
                n.children.splice(t, 1), Y.push(n), this._condense(Y), this
              );
            o || n.leaf || !_(n, c)
              ? r
                ? (a++, (n = r.children[a]), (o = !1))
                : (n = null)
              : (Y.push(n), X.push(a), (a = 0), (r = n), (n = n.children[0]));
          }
          return this;
        }
        toJSON() {
          return this.data;
        }
        fromJSON(e) {
          return (this.data = e), this;
        }
        _all(e, t) {
          let n = e;
          for (U.clear(); n; ) {
            var i;
            if (!0 === n.leaf) for (const e of n.children) t(e);
            else U.pushArray(n.children);
            n = null != (i = U.pop()) ? i : null;
          }
        }
        _build(e, t, n, i) {
          const s = n - t + 1;
          let r = this._maxEntries;
          if (s <= r) {
            const i = new w(e.slice(t, n + 1));
            return c(i, this._toBBox), i;
          }
          i ||
            ((i = Math.ceil(Math.log(s) / Math.log(r))),
            (r = Math.ceil(s / r ** (i - 1))));
          const a = new b([]);
          a.height = i;
          const o = Math.ceil(s / r),
            l = o * Math.ceil(Math.sqrt(r));
          M(e, t, n, l, this.compareMinX);
          for (let s = t; s <= n; s += l) {
            const t = Math.min(s + l - 1, n);
            M(e, s, t, o, this.compareMinY);
            for (let n = s; n <= t; n += o) {
              const s = Math.min(n + o - 1, t);
              a.children.push(this._build(e, n, s, i - 1));
            }
          }
          return c(a, this._toBBox), a;
        }
        _chooseSubtree(e, t, n, i) {
          for (; i.push(t), !0 !== t.leaf && i.length - 1 !== n; ) {
            let n,
              i = 1 / 0,
              s = 1 / 0;
            for (let r = 0, a = t.children.length; r < a; r++) {
              const a = t.children[r],
                o = f(a),
                c = x(e, a) - o;
              c < s
                ? ((s = c), (i = o < i ? o : i), (n = a))
                : c === s && o < i && ((i = o), (n = a));
            }
            t = n || t.children[0];
          }
          return t;
        }
        _insert(e, t, n) {
          const i = this._toBBox,
            s = n ? e : i(e);
          Y.clear();
          const r = this._chooseSubtree(s, this.data, t, Y);
          for (
            r.children.push(e), h(r, s);
            t >= 0 && Y.data[t].children.length > this._maxEntries;

          )
            this._split(Y, t), t--;
          this._adjustParentBBoxes(s, Y, t);
        }
        _split(e, t) {
          const n = e.data[t],
            i = n.children.length,
            s = this._minEntries;
          this._chooseSplitAxis(n, s, i);
          const r = this._chooseSplitIndex(n, s, i);
          if (!r)
            return void console.log(
              '  Error: assertion failed at PooledRBush._split: no valid split index',
            );
          const a = n.children.splice(r, n.children.length - r),
            o = n.leaf ? new w(a) : new b(a);
          (o.height = n.height),
            c(n, this._toBBox),
            c(o, this._toBBox),
            t ? e.data[t - 1].children.push(o) : this._splitRoot(n, o);
        }
        _splitRoot(e, t) {
          (this.data = new b([e, t])),
            (this.data.height = e.height + 1),
            c(this.data, this._toBBox);
        }
        _chooseSplitIndex(e, t, n) {
          let i, s, r;
          i = s = 1 / 0;
          for (let a = t; a <= n - t; a++) {
            const t = l(e, 0, a, this._toBBox),
              o = l(e, a, n, this._toBBox),
              c = p(t, o),
              h = f(t) + f(o);
            c < i
              ? ((i = c), (r = a), (s = h < s ? h : s))
              : c === i && h < s && ((s = h), (r = a));
          }
          return r;
        }
        _chooseSplitAxis(e, t, n) {
          const i = e.leaf ? this.compareMinX : u,
            s = e.leaf ? this.compareMinY : m;
          this._allDistMargin(e, t, n, i) < this._allDistMargin(e, t, n, s) &&
            e.children.sort(i);
        }
        _allDistMargin(e, t, n, i) {
          e.children.sort(i);
          const s = this._toBBox,
            r = l(e, 0, t, s),
            a = l(e, n - t, n, s);
          let o = d(r) + d(a);
          for (let i = t; i < n - t; i++) {
            const t = e.children[i];
            h(r, e.leaf ? s(t) : t), (o += d(r));
          }
          for (let i = n - t - 1; i >= t; i--) {
            const t = e.children[i];
            h(a, e.leaf ? s(t) : t), (o += d(a));
          }
          return o;
        }
        _adjustParentBBoxes(e, t, n) {
          for (let i = n; i >= 0; i--) h(t.data[i], e);
        }
        _condense(e) {
          for (let t = e.length - 1; t >= 0; t--) {
            const n = e.data[t];
            if (0 === n.children.length)
              if (t > 0) {
                const s = e.data[t - 1],
                  r = s.children;
                r.splice((0, i.cq)(r, n, r.length, s.indexHint), 1);
              } else this.clear();
            else c(n, this._toBBox);
          }
        }
        _initFormat(e) {
          const t = ['return a', ' - b', ';'];
          (this.compareMinX = new Function('a', 'b', t.join(e[0]))),
            (this.compareMinY = new Function('a', 'b', t.join(e[1]))),
            (this._toBBox = new Function(
              'a',
              'return {minX: a' +
                e[0] +
                ', minY: a' +
                e[1] +
                ', maxX: a' +
                e[2] +
                ', maxY: a' +
                e[3] +
                '};',
            ));
        }
      }
      function c(e, t) {
        l(e, 0, e.children.length, t, e);
      }
      function l(e, t, n, i, s) {
        s || (s = new w([])),
          (s.minX = 1 / 0),
          (s.minY = 1 / 0),
          (s.maxX = -1 / 0),
          (s.maxY = -1 / 0);
        for (let r, a = t; a < n; a++)
          (r = e.children[a]), h(s, e.leaf ? i(r) : r);
        return s;
      }
      function h(e, t) {
        (e.minX = Math.min(e.minX, t.minX)),
          (e.minY = Math.min(e.minY, t.minY)),
          (e.maxX = Math.max(e.maxX, t.maxX)),
          (e.maxY = Math.max(e.maxY, t.maxY));
      }
      function u(e, t) {
        return e.minX - t.minX;
      }
      function m(e, t) {
        return e.minY - t.minY;
      }
      function f(e) {
        return (e.maxX - e.minX) * (e.maxY - e.minY);
      }
      function d(e) {
        return e.maxX - e.minX + (e.maxY - e.minY);
      }
      function x(e, t) {
        return (
          (Math.max(t.maxX, e.maxX) - Math.min(t.minX, e.minX)) *
          (Math.max(t.maxY, e.maxY) - Math.min(t.minY, e.minY))
        );
      }
      function p(e, t) {
        const n = Math.max(e.minX, t.minX),
          i = Math.max(e.minY, t.minY),
          s = Math.min(e.maxX, t.maxX),
          r = Math.min(e.maxY, t.maxY);
        return Math.max(0, s - n) * Math.max(0, r - i);
      }
      function _(e, t) {
        return (
          e.minX <= t.minX &&
          e.minY <= t.minY &&
          t.maxX <= e.maxX &&
          t.maxY <= e.maxY
        );
      }
      function B(e, t) {
        return (
          t.minX <= e.maxX &&
          t.minY <= e.maxY &&
          t.maxX >= e.minX &&
          t.maxY >= e.minY
        );
      }
      function M(e, t, n, i, r) {
        const o = [t, n];
        for (; o.length; ) {
          const t = (0, s.j0)(o.pop()),
            n = (0, s.j0)(o.pop());
          if (t - n <= i) continue;
          const c = n + Math.ceil((t - n) / i / 2) * i;
          (0, a.q)(e, c, n, t, r), o.push(n, c, c, t);
        }
      }
      const g = new r.Z(),
        U = new r.Z(),
        Y = new r.Z(),
        X = new r.Z({ deallocator: void 0 });
      class S extends class {
        constructor() {
          (this.minX = 1 / 0),
            (this.minY = 1 / 0),
            (this.maxX = -1 / 0),
            (this.maxY = -1 / 0);
        }
      } {
        constructor() {
          super(...arguments), (this.height = 1), (this.indexHint = new i.SO());
        }
      }
      class w extends S {
        constructor(e) {
          super(), (this.children = e), (this.leaf = !0);
        }
      }
      class b extends S {
        constructor(e) {
          super(), (this.children = e), (this.leaf = !1);
        }
      }
    },
    67900: (e, t, n) => {
      n.d(t, {
        gV: () => P,
        En: () => X,
        Z7: () => y,
        c9: () => I,
        _R: () => b,
        qE: () => T,
        cM: () => q,
        hd: () => h,
        ty: () => S,
        Jo: () => G,
        $C: () => w,
      }),
        n(80442);
      var i = n(35454),
        s = n(70586),
        r = n(24678),
        a = n(82971),
        o = n(68441),
        c = n(8744),
        l = n(58116);
      const h = 39.37,
        u = (o.sv.radius * Math.PI) / 200,
        m = /UNIT\[([^\]]+)\]\]$/i,
        f = l.Z,
        d = /UNIT\[([^\]]+)\]/i,
        x = new Set([
          4261, 4305, 4807, 4810, 4811, 4812, 4816, 4819, 4821, 4901, 4902,
          37225, 104139, 104140,
        ]),
        p = (0, i.w)()({
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
        _ = (e) => e * e,
        B = (e) => e * e * e,
        M = {
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
              'square-millimeters': { inBaseUnits: _(0.001) },
              'square-centimeters': { inBaseUnits: _(0.01) },
              'square-decimeters': { inBaseUnits: _(0.1) },
              'square-meters': { inBaseUnits: 1 },
              'square-kilometers': { inBaseUnits: _(1e3) },
              'square-inches': { inBaseUnits: _(0.0254) },
              'square-feet': { inBaseUnits: _(0.3048) },
              'square-yards': { inBaseUnits: _(0.9144) },
              'square-miles': { inBaseUnits: _(1609.344) },
              'square-us-feet': { inBaseUnits: _(1200 / 3937) },
              acres: { inBaseUnits: 0.0015625 * _(1609.344) },
              ares: { inBaseUnits: 100 },
              hectares: { inBaseUnits: 1e4 },
            },
          },
          volume: {
            baseUnit: 'liters',
            units: {
              liters: { inBaseUnits: 1 },
              'cubic-millimeters': { inBaseUnits: 1e3 * B(0.001) },
              'cubic-centimeters': { inBaseUnits: 1e3 * B(0.01) },
              'cubic-decimeters': { inBaseUnits: 1e3 * B(0.1) },
              'cubic-meters': { inBaseUnits: 1e3 },
              'cubic-kilometers': { inBaseUnits: 1e3 * B(1e3) },
              'cubic-inches': { inBaseUnits: 1e3 * B(0.0254) },
              'cubic-feet': { inBaseUnits: 1e3 * B(0.3048) },
              'cubic-yards': { inBaseUnits: 1e3 * B(0.9144) },
              'cubic-miles': { inBaseUnits: 1e3 * B(1609.344) },
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
        g = (function () {
          const e = {};
          for (const t in M) for (const n in M[t].units) e[n] = t;
          return e;
        })();
      function U(e) {
        const t = g[e];
        if (t) return t;
        throw new Error('unknown type');
      }
      function Y(e, t = null) {
        return (t = t || U(e)), M[t].baseUnit === e;
      }
      function X(e, t, n) {
        if (t === n) return e;
        const i = U(t);
        if (i !== U(n)) throw new Error('incompatible units');
        const s = Y(t, i)
          ? e
          : (function (e, t, n) {
              return e * M[n].units[t].inBaseUnits;
            })(e, t, i);
        return Y(n, i)
          ? s
          : (function (e, t, n) {
              return e / M[n].units[t].inBaseUnits;
            })(s, n, i);
      }
      function S(e, t, n) {
        return X(e, t, 'meters') / ((n * Math.PI) / 180);
      }
      function w(e) {
        return p.fromJSON(e.toLowerCase()) || null;
      }
      function b(e) {
        if (e && 'object' == typeof e && !(0, c.N$)(e)) return 1;
        const t = I(e);
        return t > 1e5 ? 1 : t;
      }
      function q(e) {
        return I(e) >= (e instanceof a.Z ? (0, r.Iu)(e).metersPerDegree : 1e5)
          ? 'meters'
          : T(e);
      }
      function I(e, t = o.sv.metersPerDegree) {
        return y(e, !0) || t;
      }
      function y(e, t = !1) {
        let n,
          i,
          s = null;
        if (
          (null != e &&
            ('object' == typeof e
              ? ((n = e.wkid), (i = e.wkt))
              : 'number' == typeof e
              ? (n = e)
              : 'string' == typeof e && (i = e)),
          n)
        ) {
          if ((0, c.o$)(n)) return o.yr.metersPerDegree;
          if ((0, c.ME)(n)) return o.Z1.metersPerDegree;
          (s = f.values[f[n]]), !s && t && x.has(n) && (s = u);
        } else
          i && (v(i) ? (s = A(m.exec(i), s)) : k(i) && (s = A(d.exec(i), s)));
        return s;
      }
      function A(e, t) {
        return e && e[1] ? E(e[1]) : t;
      }
      function E(e) {
        return parseFloat(e.split(',')[1]);
      }
      function T(e) {
        let t,
          n,
          i = null;
        if (
          (null != e &&
            ('object' == typeof e
              ? ((t = e.wkid), (n = e.wkt))
              : 'number' == typeof e
              ? (t = e)
              : 'string' == typeof e && (n = e)),
          t)
        )
          i = f.units[f[t]];
        else if (n) {
          const e = v(n) ? m : k(n) ? d : null;
          if (e) {
            const t = e.exec(n);
            t &&
              t[1] &&
              (i = (function (e) {
                const t = /[\\"\\']{1}([^\\"\\']+)/.exec(e);
                let n = t && t[1];
                if (!n || -1 === f.units.indexOf(n)) {
                  const t = E(e);
                  n = null;
                  const i = f.values;
                  for (let e = 0; e < i.length; ++e)
                    if (Math.abs(t - i[e]) < 1e-7) {
                      n = f.units[e];
                      break;
                    }
                }
                return n;
              })(t[1]));
          }
        }
        return (0, s.pC)(i) ? w(i) : null;
      }
      function k(e) {
        return /^GEOCCS/i.test(e);
      }
      function v(e) {
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
        O = {
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
        P = (0, i.w)()(R),
        G = (0, i.w)()(O);
      (0, i.w)()({ ...R, ...O });
    },
    24678: (e, t, n) => {
      n.d(t, {
        GG: () => o,
        HQ: () => c,
        VY: () => l,
        wY: () => h,
        Iu: () => m,
        e8: () => f,
        rS: () => u,
      });
      var i = n(82971),
        s = n(68441),
        r = n(8744);
      function a(e) {
        return new i.Z({
          wkt: `GEOCCS["Spherical geocentric",\n    DATUM["Not specified",\n      SPHEROID["Sphere",${e.radius},0]],\n    PRIMEM["Greenwich",0.0,\n      AUTHORITY["EPSG","8901"]],\n    UNIT["m",1.0],\n    AXIS["Geocentric X",OTHER],\n    AXIS["Geocentric Y",EAST],\n    AXIS["Geocentric Z",NORTH]\n  ]`,
        });
      }
      const o = a(s.sv),
        c = a(s.yr),
        l = a(s.Z1),
        h = new i.Z({
          wkt: `GEOCCS["WGS 84",\n  DATUM["WGS_1984",\n    SPHEROID["WGS 84",${s.sv.radius},298.257223563,\n      AUTHORITY["EPSG","7030"]],\n    AUTHORITY["EPSG","6326"]],\n  PRIMEM["Greenwich",0,\n    AUTHORITY["EPSG","8901"]],\n  UNIT["m",1.0,\n    AUTHORITY["EPSG","9001"]],\n  AXIS["Geocentric X",OTHER],\n  AXIS["Geocentric Y",OTHER],\n  AXIS["Geocentric Z",NORTH],\n  AUTHORITY["EPSG","4978"]\n]`,
        });
      function u(e) {
        return e && ((0, r.BZ)(e) || e === c)
          ? c
          : e && ((0, r.V2)(e) || e === l)
          ? l
          : o;
      }
      function m(e) {
        return e && ((0, r.BZ)(e) || e === c)
          ? s.yr
          : e && ((0, r.V2)(e) || e === l)
          ? s.Z1
          : s.sv;
      }
      function f(e) {
        return (0, r.o$)(e) ? s.yr : (0, r.ME)(e) ? s.Z1 : s.sv;
      }
    },
    61787: (e, t, n) => {
      n.r(t), n.d(t, { default: () => o });
      var i = n(80442),
        s = n(70586),
        r = n(24133),
        a = n(66459);
      class o {
        async createIndex(e, t) {
          const n = new Array();
          if (!e.vertexAttributes || !e.vertexAttributes.position)
            return new r.Q();
          const i = this._createMeshData(e),
            a = (0, s.pC)(t)
              ? await t.invoke('createIndexThread', i, { transferList: n })
              : this.createIndexThread(i).result;
          return this._createPooledRBush().fromJSON(a);
        }
        createIndexThread(e) {
          const t = new Float64Array(e.position),
            n = this._createPooledRBush();
          return e.components
            ? this._createIndexComponentsThread(
                n,
                t,
                e.components.map((e) => new Uint32Array(e)),
              )
            : this._createIndexAllThread(n, t);
        }
        _createIndexAllThread(e, t) {
          const n = new Array(t.length / 9);
          let i = 0;
          for (let e = 0; e < t.length; e += 9)
            n[i++] = c(t, e + 0, e + 3, e + 6);
          return e.load(n), { result: e.toJSON() };
        }
        _createIndexComponentsThread(e, t, n) {
          let i = 0;
          for (const e of n) i += e.length / 3;
          const s = new Array(i);
          let r = 0;
          for (const e of n)
            for (let n = 0; n < e.length; n += 3)
              s[r++] = c(t, 3 * e[n + 0], 3 * e[n + 1], 3 * e[n + 2]);
          return e.load(s), { result: e.toJSON() };
        }
        _createMeshData(e) {
          const t = (
            e.transform
              ? (0, a.I5)(
                  {
                    position: e.vertexAttributes.position,
                    normal: null,
                    tangent: null,
                  },
                  e.transform,
                  e.spatialReference,
                ).position
              : e.vertexAttributes.position
          ).buffer;
          return !e.components || e.components.some((e) => !e.faces)
            ? { position: t }
            : { position: t, components: e.components.map((e) => e.faces) };
        }
        _createPooledRBush() {
          return new r.Q(
            9,
            (0, i.Z)('esri-csp-restrictions')
              ? (e) => e
              : ['.minX', '.minY', '.maxX', '.maxY'],
          );
        }
      }
      function c(e, t, n, i) {
        return {
          minX: Math.min(e[t + 0], e[n + 0], e[i + 0]),
          maxX: Math.max(e[t + 0], e[n + 0], e[i + 0]),
          minY: Math.min(e[t + 1], e[n + 1], e[i + 1]),
          maxY: Math.max(e[t + 1], e[n + 1], e[i + 1]),
          p0: [e[t + 0], e[t + 1], e[t + 2]],
          p1: [e[n + 0], e[n + 1], e[n + 2]],
          p2: [e[i + 0], e[i + 1], e[i + 2]],
        };
      }
    },
  },
]);
