'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [8163],
  {
    95401: (t, e, n) => {
      n.d(e, { e: () => a });
      var r,
        o,
        i,
        s = { exports: {} };
      (r = s),
        (o = function () {
          function t(t, n, o) {
            o = o || 2;
            var i,
              s,
              a,
              c,
              u,
              p,
              h,
              f = n && n.length,
              g = f ? n[0] * o : t.length,
              d = e(t, 0, g, o, !0),
              x = [];
            if (!d || d.next === d.prev) return x;
            if ((f && (d = l(t, n, d, o)), t.length > 80 * o)) {
              (i = a = t[0]), (s = c = t[1]);
              for (var m = o; m < g; m += o)
                (u = t[m]) < i && (i = u),
                  (p = t[m + 1]) < s && (s = p),
                  u > a && (a = u),
                  p > c && (c = p);
              h = 0 !== (h = Math.max(a - i, c - s)) ? 1 / h : 0;
            }
            return r(d, x, o, i, s, h), x;
          }
          function e(t, e, n, r, o) {
            var i, s;
            if (o === F(t, e, n, r) > 0)
              for (i = e; i < n; i += r) s = Z(i, t[i], t[i + 1], s);
            else for (i = n - r; i >= e; i -= r) s = Z(i, t[i], t[i + 1], s);
            if (s && v(s, s.next)) {
              var a = s.next;
              _(s), (s = a);
            }
            return s;
          }
          function n(t, e) {
            if (!t) return t;
            e || (e = t);
            var n,
              r = t;
            do {
              if (
                ((n = !1),
                r.steiner || (!v(r, r.next) && 0 !== y(r.prev, r, r.next)))
              )
                r = r.next;
              else {
                var o = r.prev;
                if ((_(r), (r = e = o) === r.next)) break;
                n = !0;
              }
            } while (n || r !== e);
            return e;
          }
          function r(t, e, l, c, u, p, h) {
            if (t) {
              !h && p && f(t, c, u, p);
              for (var g, d, x = t; t.prev !== t.next; )
                if (((g = t.prev), (d = t.next), p ? i(t, c, u, p) : o(t)))
                  e.push(g.i / l),
                    e.push(t.i / l),
                    e.push(d.i / l),
                    _(t),
                    (t = d.next),
                    (x = d.next);
                else if ((t = d) === x) {
                  h
                    ? 1 === h
                      ? r((t = s(n(t), e, l)), e, l, c, u, p, 2)
                      : 2 === h && a(t, e, l, c, u, p)
                    : r(n(t), e, l, c, u, p, 1);
                  break;
                }
            }
          }
          function o(t) {
            var e = t.prev,
              n = t,
              r = t.next;
            if (y(e, n, r) >= 0) return !1;
            for (var o = t.next.next; o !== t.prev; ) {
              if (
                x(e.x, e.y, n.x, n.y, r.x, r.y, o.x, o.y) &&
                y(o.prev, o, o.next) >= 0
              )
                return !1;
              o = o.next;
            }
            return !0;
          }
          function i(t, e, n, r) {
            var o = t.prev,
              i = t,
              s = t.next;
            if (y(o, i, s) >= 0) return !1;
            for (
              var a =
                  o.x < i.x ? (o.x < s.x ? o.x : s.x) : i.x < s.x ? i.x : s.x,
                l = o.y < i.y ? (o.y < s.y ? o.y : s.y) : i.y < s.y ? i.y : s.y,
                c = o.x > i.x ? (o.x > s.x ? o.x : s.x) : i.x > s.x ? i.x : s.x,
                u = o.y > i.y ? (o.y > s.y ? o.y : s.y) : i.y > s.y ? i.y : s.y,
                p = g(a, l, e, n, r),
                h = g(c, u, e, n, r),
                f = t.prevZ,
                d = t.nextZ;
              f && f.z >= p && d && d.z <= h;

            ) {
              if (
                f !== t.prev &&
                f !== t.next &&
                x(o.x, o.y, i.x, i.y, s.x, s.y, f.x, f.y) &&
                y(f.prev, f, f.next) >= 0
              )
                return !1;
              if (
                ((f = f.prevZ),
                d !== t.prev &&
                  d !== t.next &&
                  x(o.x, o.y, i.x, i.y, s.x, s.y, d.x, d.y) &&
                  y(d.prev, d, d.next) >= 0)
              )
                return !1;
              d = d.nextZ;
            }
            for (; f && f.z >= p; ) {
              if (
                f !== t.prev &&
                f !== t.next &&
                x(o.x, o.y, i.x, i.y, s.x, s.y, f.x, f.y) &&
                y(f.prev, f, f.next) >= 0
              )
                return !1;
              f = f.prevZ;
            }
            for (; d && d.z <= h; ) {
              if (
                d !== t.prev &&
                d !== t.next &&
                x(o.x, o.y, i.x, i.y, s.x, s.y, d.x, d.y) &&
                y(d.prev, d, d.next) >= 0
              )
                return !1;
              d = d.nextZ;
            }
            return !0;
          }
          function s(t, e, r) {
            var o = t;
            do {
              var i = o.prev,
                s = o.next.next;
              !v(i, s) &&
                w(i, o, o.next, s) &&
                A(i, s) &&
                A(s, i) &&
                (e.push(i.i / r),
                e.push(o.i / r),
                e.push(s.i / r),
                _(o),
                _(o.next),
                (o = t = s)),
                (o = o.next);
            } while (o !== t);
            return n(o);
          }
          function a(t, e, o, i, s, a) {
            var l = t;
            do {
              for (var c = l.next.next; c !== l.prev; ) {
                if (l.i !== c.i && m(l, c)) {
                  var u = M(l, c);
                  return (
                    (l = n(l, l.next)),
                    (u = n(u, u.next)),
                    r(l, e, o, i, s, a),
                    void r(u, e, o, i, s, a)
                  );
                }
                c = c.next;
              }
              l = l.next;
            } while (l !== t);
          }
          function l(t, r, o, i) {
            var s,
              a,
              l,
              u = [];
            for (s = 0, a = r.length; s < a; s++)
              (l = e(
                t,
                r[s] * i,
                s < a - 1 ? r[s + 1] * i : t.length,
                i,
                !1,
              )) === l.next && (l.steiner = !0),
                u.push(d(l));
            for (u.sort(c), s = 0; s < u.length; s++)
              o = n((o = p(u[s], o)), o.next);
            return o;
          }
          function c(t, e) {
            return t.x - e.x;
          }
          function u(t) {
            if (t.next.prev === t) return t;
            let e = t;
            for (;;) {
              const n = e.next;
              if (n.prev === e || n === e || n === t) break;
              e = n;
            }
            return e;
          }
          function p(t, e) {
            var r = (function (t, e) {
              var n,
                r = e,
                o = t.x,
                i = t.y,
                s = -1 / 0;
              do {
                if (i <= r.y && i >= r.next.y && r.next.y !== r.y) {
                  var a =
                    r.x + ((i - r.y) * (r.next.x - r.x)) / (r.next.y - r.y);
                  if (a <= o && a > s) {
                    if (((s = a), a === o)) {
                      if (i === r.y) return r;
                      if (i === r.next.y) return r.next;
                    }
                    n = r.x < r.next.x ? r : r.next;
                  }
                }
                r = r.next;
              } while (r !== e);
              if (!n) return null;
              if (o === s) return n;
              var l,
                c = n,
                u = n.x,
                p = n.y,
                f = 1 / 0;
              r = n;
              do {
                o >= r.x &&
                  r.x >= u &&
                  o !== r.x &&
                  x(i < p ? o : s, i, u, p, i < p ? s : o, i, r.x, r.y) &&
                  ((l = Math.abs(i - r.y) / (o - r.x)),
                  A(r, t) &&
                    (l < f ||
                      (l === f && (r.x > n.x || (r.x === n.x && h(n, r))))) &&
                    ((n = r), (f = l))),
                  (r = r.next);
              } while (r !== c);
              return n;
            })(t, e);
            if (!r) return e;
            var o = M(r, t),
              i = n(r, r.next);
            let s = u(o);
            return n(s, s.next), (i = u(i)), u(e === r ? i : e);
          }
          function h(t, e) {
            return y(t.prev, t, e.prev) < 0 && y(e.next, t, t.next) < 0;
          }
          function f(t, e, n, r) {
            var o = t;
            do {
              null === o.z && (o.z = g(o.x, o.y, e, n, r)),
                (o.prevZ = o.prev),
                (o.nextZ = o.next),
                (o = o.next);
            } while (o !== t);
            (o.prevZ.nextZ = null),
              (o.prevZ = null),
              (function (t) {
                var e,
                  n,
                  r,
                  o,
                  i,
                  s,
                  a,
                  l,
                  c = 1;
                do {
                  for (n = t, t = null, i = null, s = 0; n; ) {
                    for (
                      s++, r = n, a = 0, e = 0;
                      e < c && (a++, (r = r.nextZ));
                      e++
                    );
                    for (l = c; a > 0 || (l > 0 && r); )
                      0 !== a && (0 === l || !r || n.z <= r.z)
                        ? ((o = n), (n = n.nextZ), a--)
                        : ((o = r), (r = r.nextZ), l--),
                        i ? (i.nextZ = o) : (t = o),
                        (o.prevZ = i),
                        (i = o);
                    n = r;
                  }
                  (i.nextZ = null), (c *= 2);
                } while (s > 1);
              })(o);
          }
          function g(t, e, n, r, o) {
            return (
              (t =
                1431655765 &
                ((t =
                  858993459 &
                  ((t =
                    252645135 &
                    ((t = 16711935 & ((t = 32767 * (t - n) * o) | (t << 8))) |
                      (t << 4))) |
                    (t << 2))) |
                  (t << 1))) |
              ((e =
                1431655765 &
                ((e =
                  858993459 &
                  ((e =
                    252645135 &
                    ((e = 16711935 & ((e = 32767 * (e - r) * o) | (e << 8))) |
                      (e << 4))) |
                    (e << 2))) |
                  (e << 1))) <<
                1)
            );
          }
          function d(t) {
            var e = t,
              n = t;
            do {
              (e.x < n.x || (e.x === n.x && e.y < n.y)) && (n = e),
                (e = e.next);
            } while (e !== t);
            return n;
          }
          function x(t, e, n, r, o, i, s, a) {
            return (
              (o - s) * (e - a) - (t - s) * (i - a) >= 0 &&
              (t - s) * (r - a) - (n - s) * (e - a) >= 0 &&
              (n - s) * (i - a) - (o - s) * (r - a) >= 0
            );
          }
          function m(t, e) {
            return (
              t.next.i !== e.i &&
              t.prev.i !== e.i &&
              !(function (t, e) {
                var n = t;
                do {
                  if (
                    n.i !== t.i &&
                    n.next.i !== t.i &&
                    n.i !== e.i &&
                    n.next.i !== e.i &&
                    w(n, n.next, t, e)
                  )
                    return !0;
                  n = n.next;
                } while (n !== t);
                return !1;
              })(t, e) &&
              ((A(t, e) &&
                A(e, t) &&
                (function (t, e) {
                  var n = t,
                    r = !1,
                    o = (t.x + e.x) / 2,
                    i = (t.y + e.y) / 2;
                  do {
                    n.y > i != n.next.y > i &&
                      n.next.y !== n.y &&
                      o <
                        ((n.next.x - n.x) * (i - n.y)) / (n.next.y - n.y) +
                          n.x &&
                      (r = !r),
                      (n = n.next);
                  } while (n !== t);
                  return r;
                })(t, e) &&
                (y(t.prev, t, e.prev) || y(t, e.prev, e))) ||
                (v(t, e) &&
                  y(t.prev, t, t.next) > 0 &&
                  y(e.prev, e, e.next) > 0))
            );
          }
          function y(t, e, n) {
            return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y);
          }
          function v(t, e) {
            return t.x === e.x && t.y === e.y;
          }
          function w(t, e, n, r) {
            var o = C(y(t, e, n)),
              i = C(y(t, e, r)),
              s = C(y(n, r, t)),
              a = C(y(n, r, e));
            return (
              (o !== i && s !== a) ||
              !(0 !== o || !b(t, n, e)) ||
              !(0 !== i || !b(t, r, e)) ||
              !(0 !== s || !b(n, t, r)) ||
              !(0 !== a || !b(n, e, r))
            );
          }
          function b(t, e, n) {
            return (
              e.x <= Math.max(t.x, n.x) &&
              e.x >= Math.min(t.x, n.x) &&
              e.y <= Math.max(t.y, n.y) &&
              e.y >= Math.min(t.y, n.y)
            );
          }
          function C(t) {
            return t > 0 ? 1 : t < 0 ? -1 : 0;
          }
          function A(t, e) {
            return y(t.prev, t, t.next) < 0
              ? y(t, e, t.next) >= 0 && y(t, t.prev, e) >= 0
              : y(t, e, t.prev) < 0 || y(t, t.next, e) < 0;
          }
          function M(t, e) {
            var n = new T(t.i, t.x, t.y),
              r = new T(e.i, e.x, e.y),
              o = t.next,
              i = e.prev;
            return (
              (t.next = e),
              (e.prev = t),
              (n.next = o),
              (o.prev = n),
              (r.next = n),
              (n.prev = r),
              (i.next = r),
              (r.prev = i),
              r
            );
          }
          function Z(t, e, n, r) {
            var o = new T(t, e, n);
            return (
              r
                ? ((o.next = r.next),
                  (o.prev = r),
                  (r.next.prev = o),
                  (r.next = o))
                : ((o.prev = o), (o.next = o)),
              o
            );
          }
          function _(t) {
            (t.next.prev = t.prev),
              (t.prev.next = t.next),
              t.prevZ && (t.prevZ.nextZ = t.nextZ),
              t.nextZ && (t.nextZ.prevZ = t.prevZ);
          }
          function T(t, e, n) {
            (this.i = t),
              (this.x = e),
              (this.y = n),
              (this.prev = null),
              (this.next = null),
              (this.z = null),
              (this.prevZ = null),
              (this.nextZ = null),
              (this.steiner = !1);
          }
          function F(t, e, n, r) {
            for (var o = 0, i = e, s = n - r; i < n; i += r)
              (o += (t[s] - t[i]) * (t[i + 1] + t[s + 1])), (s = i);
            return o;
          }
          return (
            (t.deviation = function (t, e, n, r) {
              var o = e && e.length,
                i = o ? e[0] * n : t.length,
                s = Math.abs(F(t, 0, i, n));
              if (o)
                for (var a = 0, l = e.length; a < l; a++) {
                  var c = e[a] * n,
                    u = a < l - 1 ? e[a + 1] * n : t.length;
                  s -= Math.abs(F(t, c, u, n));
                }
              var p = 0;
              for (a = 0; a < r.length; a += 3) {
                var h = r[a] * n,
                  f = r[a + 1] * n,
                  g = r[a + 2] * n;
                p += Math.abs(
                  (t[h] - t[g]) * (t[f + 1] - t[h + 1]) -
                    (t[h] - t[f]) * (t[g + 1] - t[h + 1]),
                );
              }
              return 0 === s && 0 === p ? 0 : Math.abs((p - s) / s);
            }),
            (t.flatten = function (t) {
              for (
                var e = t[0][0].length,
                  n = { vertices: [], holes: [], dimensions: e },
                  r = 0,
                  o = 0;
                o < t.length;
                o++
              ) {
                for (var i = 0; i < t[o].length; i++)
                  for (var s = 0; s < e; s++) n.vertices.push(t[o][i][s]);
                o > 0 && ((r += t[o - 1].length), n.holes.push(r));
              }
              return n;
            }),
            t
          );
        }),
        void 0 !== (i = o()) && (r.exports = i);
      const a = s.exports;
    },
    62540: (t, e, n) => {
      n.d(e, { Z: () => m });
      var r,
        o = n(43697),
        i = n(96674),
        s = n(22974),
        a = n(92604),
        l = n(5600),
        c = n(90578),
        u = n(52011),
        p = n(75215),
        h = n(65542),
        f = n(60746),
        g = n(71630);
      const d = a.Z.getLogger('esri.geometry.support.MeshComponent');
      let x = (r = class extends i.wq {
        constructor(t) {
          super(t),
            (this.faces = null),
            (this.material = null),
            (this.shading = 'source'),
            (this.trustSourceNormals = !1);
        }
        static from(t) {
          return (0, p.TJ)(r, t);
        }
        castFaces(t) {
          return (0, g.X)(
            t,
            Uint32Array,
            [Uint16Array],
            { loggerTag: '.faces=', stride: 3 },
            d,
          );
        }
        castMaterial(t) {
          return (0, p.TJ)(
            t &&
              'object' == typeof t &&
              ('metallic' in t ||
                'roughness' in t ||
                'metallicRoughnessTexture' in t)
              ? f.Z
              : h.Z,
            t,
          );
        }
        clone() {
          return new r({
            faces: (0, s.d9)(this.faces),
            shading: this.shading,
            material: (0, s.d9)(this.material),
            trustSourceNormals: this.trustSourceNormals,
          });
        }
        cloneWithDeduplication(t, e) {
          const n = {
            faces: (0, s.d9)(this.faces),
            shading: this.shading,
            material: this.material
              ? this.material.cloneWithDeduplication(t, e)
              : null,
            trustSourceNormals: this.trustSourceNormals,
          };
          return new r(n);
        }
      });
      (0, o._)(
        [(0, l.Cb)({ json: { write: !0 } })],
        x.prototype,
        'faces',
        void 0,
      ),
        (0, o._)([(0, c.p)('faces')], x.prototype, 'castFaces', null),
        (0, o._)(
          [(0, l.Cb)({ type: h.Z, json: { write: !0 } })],
          x.prototype,
          'material',
          void 0,
        ),
        (0, o._)([(0, c.p)('material')], x.prototype, 'castMaterial', null),
        (0, o._)(
          [(0, l.Cb)({ type: String, json: { write: !0 } })],
          x.prototype,
          'shading',
          void 0,
        ),
        (0, o._)(
          [(0, l.Cb)({ type: Boolean })],
          x.prototype,
          'trustSourceNormals',
          void 0,
        ),
        (x = r =
          (0, o._)([(0, u.j)('esri.geometry.support.MeshComponent')], x));
      const m = x;
    },
    65542: (t, e, n) => {
      n.d(e, { Z: () => h });
      var r,
        o = n(43697),
        i = n(22303),
        s = n(96674),
        a = n(70586),
        l = n(5600),
        c = (n(67676), n(80442), n(75215), n(52011)),
        u = n(81118);
      let p = (r = class extends s.wq {
        constructor(t) {
          super(t),
            (this.color = null),
            (this.colorTexture = null),
            (this.normalTexture = null),
            (this.alphaMode = 'auto'),
            (this.alphaCutoff = 0.5),
            (this.doubleSided = !0);
        }
        clone() {
          return this.cloneWithDeduplication(null, new Map());
        }
        cloneWithDeduplication(t, e) {
          const n = (0, a.pC)(t) ? t.get(this) : null;
          if (n) return n;
          const o = new r(this.clonePropertiesWithDeduplication(e));
          return (0, a.pC)(t) && t.set(this, o), o;
        }
        clonePropertiesWithDeduplication(t) {
          return {
            color: (0, a.pC)(this.color) ? this.color.clone() : null,
            colorTexture: (0, a.pC)(this.colorTexture)
              ? this.colorTexture.cloneWithDeduplication(t)
              : null,
            normalTexture: (0, a.pC)(this.normalTexture)
              ? this.normalTexture.cloneWithDeduplication(t)
              : null,
            alphaMode: this.alphaMode,
            alphaCutoff: this.alphaCutoff,
            doubleSided: this.doubleSided,
          };
        }
      });
      (0, o._)(
        [(0, l.Cb)({ type: i.Z, json: { write: !0 } })],
        p.prototype,
        'color',
        void 0,
      ),
        (0, o._)(
          [(0, l.Cb)({ type: u.Z, json: { write: !0 } })],
          p.prototype,
          'colorTexture',
          void 0,
        ),
        (0, o._)(
          [(0, l.Cb)({ type: u.Z, json: { write: !0 } })],
          p.prototype,
          'normalTexture',
          void 0,
        ),
        (0, o._)(
          [(0, l.Cb)({ nonNullable: !0, json: { write: !0 } })],
          p.prototype,
          'alphaMode',
          void 0,
        ),
        (0, o._)(
          [(0, l.Cb)({ nonNullable: !0, json: { write: !0 } })],
          p.prototype,
          'alphaCutoff',
          void 0,
        ),
        (0, o._)(
          [(0, l.Cb)({ nonNullable: !0, json: { write: !0 } })],
          p.prototype,
          'doubleSided',
          void 0,
        ),
        (p = r = (0, o._)([(0, c.j)('esri.geometry.support.MeshMaterial')], p));
      const h = p;
    },
    60746: (t, e, n) => {
      n.d(e, { Z: () => h });
      var r,
        o = n(43697),
        i = n(22303),
        s = n(70586),
        a = n(5600),
        l = (n(67676), n(80442), n(75215), n(52011)),
        c = n(65542),
        u = n(81118);
      let p = (r = class extends c.Z {
        constructor(t) {
          super(t),
            (this.emissiveColor = null),
            (this.emissiveTexture = null),
            (this.occlusionTexture = null),
            (this.metallic = 1),
            (this.roughness = 1),
            (this.metallicRoughnessTexture = null);
        }
        clone() {
          return this.cloneWithDeduplication(null, new Map());
        }
        cloneWithDeduplication(t, e) {
          const n = (0, s.pC)(t) ? t.get(this) : null;
          if (n) return n;
          const o = new r(this.clonePropertiesWithDeduplication(e));
          return (0, s.pC)(t) && t.set(this, o), o;
        }
        clonePropertiesWithDeduplication(t) {
          return {
            ...super.clonePropertiesWithDeduplication(t),
            emissiveColor: (0, s.pC)(this.emissiveColor)
              ? this.emissiveColor.clone()
              : null,
            emissiveTexture: (0, s.pC)(this.emissiveTexture)
              ? this.emissiveTexture.cloneWithDeduplication(t)
              : null,
            occlusionTexture: (0, s.pC)(this.occlusionTexture)
              ? this.occlusionTexture.cloneWithDeduplication(t)
              : null,
            metallic: this.metallic,
            roughness: this.roughness,
            metallicRoughnessTexture: (0, s.pC)(this.metallicRoughnessTexture)
              ? this.metallicRoughnessTexture.cloneWithDeduplication(t)
              : null,
          };
        }
      });
      (0, o._)(
        [(0, a.Cb)({ type: i.Z, json: { write: !0 } })],
        p.prototype,
        'emissiveColor',
        void 0,
      ),
        (0, o._)(
          [(0, a.Cb)({ type: u.Z, json: { write: !0 } })],
          p.prototype,
          'emissiveTexture',
          void 0,
        ),
        (0, o._)(
          [(0, a.Cb)({ type: u.Z, json: { write: !0 } })],
          p.prototype,
          'occlusionTexture',
          void 0,
        ),
        (0, o._)(
          [
            (0, a.Cb)({
              type: Number,
              nonNullable: !0,
              json: { write: !0 },
              range: { min: 0, max: 1 },
            }),
          ],
          p.prototype,
          'metallic',
          void 0,
        ),
        (0, o._)(
          [
            (0, a.Cb)({
              type: Number,
              nonNullable: !0,
              json: { write: !0 },
              range: { min: 0, max: 1 },
            }),
          ],
          p.prototype,
          'roughness',
          void 0,
        ),
        (0, o._)(
          [(0, a.Cb)({ type: u.Z, json: { write: !0 } })],
          p.prototype,
          'metallicRoughnessTexture',
          void 0,
        ),
        (p = r =
          (0, o._)(
            [(0, l.j)('esri.geometry.support.MeshMaterialMetallicRoughness')],
            p,
          ));
      const h = p;
    },
    81118: (t, e, n) => {
      n.d(e, { Z: () => m });
      var r = n(43697),
        o = (n(80442), n(96674)),
        i = n(5600),
        s = (n(67676), n(75215)),
        a = n(71715),
        l = n(52011),
        c = n(30556),
        u = n(25929);
      n(22021);
      let p = null,
        h = !0;
      var f;
      const g = new WeakMap();
      let d = 0,
        x = (f = class extends o.wq {
          constructor(t) {
            super(t), (this.wrap = 'repeat');
          }
          get url() {
            return this._get('url') || null;
          }
          set url(t) {
            this._set('url', t), t && this._set('data', null);
          }
          get data() {
            return this._get('data') || null;
          }
          set data(t) {
            this._set('data', t), t && this._set('url', null);
          }
          writeData(t, e, n, r) {
            if (t instanceof HTMLImageElement) {
              const o = {
                type: 'image-element',
                src: (0, u.t)(t.src, r),
                crossOrigin: t.crossOrigin,
              };
              e[n] = o;
            } else if (t instanceof HTMLCanvasElement) {
              const r = t
                  .getContext('2d')
                  .getImageData(0, 0, t.width, t.height),
                o = {
                  type: 'canvas-element',
                  imageData: this._encodeImageData(r),
                };
              e[n] = o;
            } else if (t instanceof HTMLVideoElement) {
              const o = {
                type: 'video-element',
                src: (0, u.t)(t.src, r),
                autoplay: t.autoplay,
                loop: t.loop,
                muted: t.muted,
                crossOrigin: t.crossOrigin,
                preload: t.preload,
              };
              e[n] = o;
            } else {
              const r = {
                type: 'image-data',
                imageData: this._encodeImageData(t),
              };
              e[n] = r;
            }
          }
          readData(t) {
            switch (t.type) {
              case 'image-element': {
                const e = new Image();
                return (e.src = t.src), (e.crossOrigin = t.crossOrigin), e;
              }
              case 'canvas-element': {
                const e = this._decodeImageData(t.imageData),
                  n = document.createElement('canvas');
                return (
                  (n.width = e.width),
                  (n.height = e.height),
                  n.getContext('2d').putImageData(e, 0, 0),
                  n
                );
              }
              case 'image-data':
                return this._decodeImageData(t.imageData);
              case 'video-element': {
                const e = document.createElement('video');
                return (
                  (e.src = t.src),
                  (e.crossOrigin = t.crossOrigin),
                  (e.autoplay = t.autoplay),
                  (e.loop = t.loop),
                  (e.muted = t.muted),
                  (e.preload = t.preload),
                  e
                );
              }
              default:
                return;
            }
          }
          get transparent() {
            const t = this.data,
              e = this.url;
            if (t instanceof HTMLCanvasElement)
              return this._imageDataContainsTransparent(
                t.getContext('2d').getImageData(0, 0, t.width, t.height),
              );
            if (t instanceof ImageData)
              return this._imageDataContainsTransparent(t);
            if (e) {
              const t = e.substr(e.length - 4, 4).toLowerCase(),
                n = e.substr(0, 15).toLocaleLowerCase();
              if ('.png' === t || 'data:image/png;' === n) return !0;
            }
            return !1;
          }
          set transparent(t) {
            null != t
              ? this._override('transparent', t)
              : this._clearOverride('transparent');
          }
          get contentHash() {
            const t =
                'string' == typeof this.wrap
                  ? this.wrap
                  : 'object' == typeof this.wrap
                  ? `${this.wrap.horizontal}/${this.wrap.vertical}`
                  : '',
              e = (e = '') => `d:${e},t:${this.transparent},w:${t}`;
            return null != this.url
              ? e(this.url)
              : null != this.data
              ? this.data instanceof HTMLImageElement ||
                this.data instanceof HTMLVideoElement
                ? e(this.data.src)
                : (g.has(this.data) || g.set(this.data, ++d),
                  e(g.get(this.data)))
              : e();
          }
          clone() {
            const t = {
              url: this.url,
              data: this.data,
              wrap: this._cloneWrap(),
            };
            return new f(t);
          }
          cloneWithDeduplication(t) {
            const e = t.get(this);
            if (e) return e;
            const n = this.clone();
            return t.set(this, n), n;
          }
          _cloneWrap() {
            return 'string' == typeof this.wrap
              ? this.wrap
              : {
                  horizontal: this.wrap.horizontal,
                  vertical: this.wrap.vertical,
                };
          }
          _encodeImageData(t) {
            let e = '';
            for (let n = 0; n < t.data.length; n++)
              e += String.fromCharCode(t.data[n]);
            return { data: btoa(e), width: t.width, height: t.height };
          }
          _decodeImageData(t) {
            const e = atob(t.data),
              n = new Uint8ClampedArray(e.length);
            for (let t = 0; t < e.length; t++) n[t] = e.charCodeAt(t);
            return (function (t, e, n, r) {
              if (!e || !n)
                throw new Error(
                  'Cannot construct image data without dimensions',
                );
              if (h)
                try {
                  return new ImageData(t, e, n);
                } catch (t) {
                  h = !1;
                }
              const o = (function (t, e, n) {
                return (
                  n ||
                    (p ||
                      ((p = document.createElement('canvas')),
                      (p.width = 1),
                      (p.height = 1)),
                    (n = p)),
                  n.getContext('2d').createImageData(t, e)
                );
              })(e, n, void 0);
              return o.data.set(t, 0), o;
            })(n, t.width, t.height);
          }
          _imageDataContainsTransparent(t) {
            for (let e = 3; e < t.data.length; e += 4)
              if (255 !== t.data[e]) return !0;
            return !1;
          }
          static from(t) {
            return 'string' == typeof t
              ? new f({ url: t })
              : t instanceof HTMLImageElement ||
                t instanceof HTMLCanvasElement ||
                t instanceof ImageData ||
                t instanceof HTMLVideoElement
              ? new f({ data: t })
              : (0, s.TJ)(f, t);
          }
        });
      (0, r._)(
        [(0, i.Cb)({ type: String, json: { write: u.w } })],
        x.prototype,
        'url',
        null,
      ),
        (0, r._)(
          [
            (0, i.Cb)({
              json: {
                write: {
                  overridePolicy() {
                    return { enabled: !this.url };
                  },
                },
              },
            }),
            (0, i.Cb)(),
          ],
          x.prototype,
          'data',
          null,
        ),
        (0, r._)([(0, c.c)('data')], x.prototype, 'writeData', null),
        (0, r._)([(0, a.r)('data')], x.prototype, 'readData', null),
        (0, r._)(
          [
            (0, i.Cb)({
              type: Boolean,
              json: {
                write: {
                  overridePolicy() {
                    return { enabled: this._isOverridden('transparent') };
                  },
                },
              },
            }),
          ],
          x.prototype,
          'transparent',
          null,
        ),
        (0, r._)(
          [(0, i.Cb)({ json: { write: !0 } })],
          x.prototype,
          'wrap',
          void 0,
        ),
        (0, r._)(
          [(0, i.Cb)({ readOnly: !0 })],
          x.prototype,
          'contentHash',
          null,
        ),
        (x = f = (0, r._)([(0, l.j)('esri.geometry.support.MeshTexture')], x));
      const m = x;
    },
    71630: (t, e, n) => {
      n.d(e, { Q: () => h, X: () => g });
      var r,
        o = n(43697),
        i = n(96674),
        s = n(22974),
        a = n(92604),
        l = n(5600),
        c = n(90578),
        u = n(52011);
      const p = a.Z.getLogger('esri.geometry.support.MeshVertexAttributes');
      let h = (r = class extends i.wq {
        constructor(t) {
          super(t),
            (this.color = null),
            (this.position = new Float64Array(0)),
            (this.uv = null),
            (this.normal = null),
            (this.tangent = null);
        }
        castColor(t) {
          return g(
            t,
            Uint8Array,
            [Uint8ClampedArray],
            { loggerTag: '.color=', stride: 4 },
            p,
          );
        }
        castPosition(t) {
          return (
            t &&
              t instanceof Float32Array &&
              p.warn(
                '.position=',
                'Setting position attribute from a Float32Array may cause precision problems. Consider storing data in a Float64Array or a regular number array',
              ),
            g(
              t,
              Float64Array,
              [Float32Array],
              { loggerTag: '.position=', stride: 3 },
              p,
            )
          );
        }
        castUv(t) {
          return g(
            t,
            Float32Array,
            [Float64Array],
            { loggerTag: '.uv=', stride: 2 },
            p,
          );
        }
        castNormal(t) {
          return g(
            t,
            Float32Array,
            [Float64Array],
            { loggerTag: '.normal=', stride: 3 },
            p,
          );
        }
        castTangent(t) {
          return g(
            t,
            Float32Array,
            [Float64Array],
            { loggerTag: '.tangent=', stride: 4 },
            p,
          );
        }
        clone() {
          const t = {
            position: (0, s.d9)(this.position),
            uv: (0, s.d9)(this.uv),
            normal: (0, s.d9)(this.normal),
            tangent: (0, s.d9)(this.tangent),
            color: (0, s.d9)(this.color),
          };
          return new r(t);
        }
        clonePositional() {
          const t = {
            position: (0, s.d9)(this.position),
            normal: (0, s.d9)(this.normal),
            tangent: (0, s.d9)(this.tangent),
            uv: this.uv,
            color: this.color,
          };
          return new r(t);
        }
      });
      function f(t, e, n, r) {
        const { loggerTag: o, stride: i } = e;
        return t.length % i != 0
          ? (r.error(o, `Invalid array length, expected a multiple of ${i}`),
            new n([]))
          : t;
      }
      function g(t, e, n, r, o) {
        if (!t) return t;
        if (t instanceof e) return f(t, r, e, o);
        for (const i of n) if (t instanceof i) return f(new e(t), r, e, o);
        if (Array.isArray(t)) return f(new e(t), r, e, o);
        {
          const r = n.map((t) => `'${t.name}'`);
          return (
            o.error(
              `Failed to set property, expected one of ${r}, but got ${t.constructor.name}`,
            ),
            new e([])
          );
        }
      }
      function d(t, e, n) {
        e[n] = (function (t) {
          const e = new Array(t.length);
          for (let n = 0; n < t.length; n++) e[n] = t[n];
          return e;
        })(t);
      }
      (0, o._)(
        [(0, l.Cb)({ json: { write: d } })],
        h.prototype,
        'color',
        void 0,
      ),
        (0, o._)([(0, c.p)('color')], h.prototype, 'castColor', null),
        (0, o._)(
          [(0, l.Cb)({ nonNullable: !0, json: { write: d } })],
          h.prototype,
          'position',
          void 0,
        ),
        (0, o._)([(0, c.p)('position')], h.prototype, 'castPosition', null),
        (0, o._)(
          [(0, l.Cb)({ json: { write: d } })],
          h.prototype,
          'uv',
          void 0,
        ),
        (0, o._)([(0, c.p)('uv')], h.prototype, 'castUv', null),
        (0, o._)(
          [(0, l.Cb)({ json: { write: d } })],
          h.prototype,
          'normal',
          void 0,
        ),
        (0, o._)([(0, c.p)('normal')], h.prototype, 'castNormal', null),
        (0, o._)(
          [(0, l.Cb)({ json: { write: d } })],
          h.prototype,
          'tangent',
          void 0,
        ),
        (0, o._)([(0, c.p)('tangent')], h.prototype, 'castTangent', null),
        (h = r =
          (0, o._)(
            [(0, u.j)('esri.geometry.support.MeshVertexAttributes')],
            h,
          ));
    },
    47545: (t, e, n) => {
      n.d(e, { d: () => o });
      var r = n(22021);
      function o(t, e, n) {
        var o;
        const c = t.byteLength / (4 * e),
          u = new Uint32Array(t, 0, c * e);
        let p = new Uint32Array(c);
        const h = null != (o = null == n ? void 0 : n.minReduction) ? o : 0,
          f = (null == n ? void 0 : n.originalIndices) || null,
          g = f ? f.length : 0,
          d = (null == n ? void 0 : n.componentOffsets) || null;
        let x = 0;
        if (d)
          for (let t = 0; t < d.length - 1; t++) {
            const e = d[t + 1] - d[t];
            e > x && (x = e);
          }
        else x = c;
        const m = Math.floor(1.1 * x) + 1;
        (null == l || l.length < 2 * m) &&
          (l = new Uint32Array((0, r.Sf)(2 * m)));
        for (let t = 0; t < 2 * m; t++) l[t] = 0;
        let y = 0;
        const v = !!d && !!f,
          w = v ? g : c,
          b = v ? new Uint32Array(g) : null,
          C = 1.96;
        let A = 0 !== h ? Math.ceil(((4 * C * C) / (h * h)) * h * (1 - h)) : w,
          M = 1,
          Z = d ? d[1] : w;
        for (let t = 0; t < w; t++) {
          if (t === A) {
            const e = 1 - y / t;
            if (e + C * Math.sqrt((e * (1 - e)) / t) < h) return null;
            A *= 2;
          }
          if (t === Z) {
            for (let t = 0; t < 2 * m; t++) l[t] = 0;
            if (f) for (let t = d[M - 1]; t < d[M]; t++) b[t] = p[f[t]];
            Z = d[++M];
          }
          const n = v ? f[t] : t,
            r = n * e,
            o = a(u, r, e);
          let s = o % m,
            c = y;
          for (; 0 !== l[2 * s + 1]; ) {
            if (l[2 * s] === o) {
              const t = l[2 * s + 1] - 1;
              if (i(u, r, t * e, e)) {
                c = p[t];
                break;
              }
            }
            s++, s >= m && (s -= m);
          }
          c === y && ((l[2 * s] = o), (l[2 * s + 1] = n + 1), y++), (p[n] = c);
        }
        if (0 !== h && 1 - y / c < h) return null;
        if (v) {
          for (let t = d[M - 1]; t < b.length; t++) b[t] = p[f[t]];
          p = b;
        }
        const _ = new Uint32Array(e * y);
        y = 0;
        for (let t = 0; t < w; t++)
          p[t] === y && (s(u, (v ? f[t] : t) * e, _, y * e, e), y++);
        if (f && !v) {
          const t = new Uint32Array(g);
          for (let e = 0; e < t.length; e++) t[e] = p[f[e]];
          p = t;
        }
        return { buffer: _.buffer, indices: p, uniqueCount: y };
      }
      function i(t, e, n, r) {
        for (let o = 0; o < r; o++) if (t[e + o] !== t[n + o]) return !1;
        return !0;
      }
      function s(t, e, n, r, o) {
        for (let i = 0; i < o; i++) n[r + i] = t[e + i];
      }
      function a(t, e, n) {
        let r = 0;
        for (let o = 0; o < n; o++)
          (r = (t[e + o] + r) | 0), (r = (r + (r << 11) + (r >>> 2)) | 0);
        return r >>> 0;
      }
      let l = null;
    },
    38163: (t, e, n) => {
      n.r(e), n.d(e, { meshFeatureSetFromJSON: () => Lt });
      var r,
        o,
        i = n(38171),
        s = n(70586),
        a = n(6570),
        l = n(43697),
        c = n(20102),
        u = n(3920),
        p = n(83379),
        h = n(92604),
        f = n(609),
        g = n(95330),
        d = n(17445),
        x = n(5600),
        m = (n(67676), n(80442), n(75215), n(52011)),
        y = n(65617),
        v = n(9361),
        w = n(13473),
        b = n(38913),
        C = n(3709),
        A = n(62540),
        M = n(2674),
        Z = n(71630),
        _ = n(95401),
        T = n(86662),
        F = n(47545);
      function R(t, e, n) {
        const o = t.length,
          i = new Array(o),
          s = new Array(o),
          a = new Array(o);
        let l = 0,
          c = 0,
          u = 0,
          p = 0;
        for (let e = 0; e < o; ++e) p += t[e].length;
        const h = new Float64Array(3 * p);
        let f = 0;
        for (let p = o - 1; p >= 0; p--) {
          const g = t[p],
            d = n === r.CCW_IS_HOLE && I(g);
          if (d && 1 !== o) i[l++] = g;
          else {
            let t = g.length;
            for (let e = 0; e < l; ++e) t += i[e].length;
            const n = {
              index: f,
              pathLengths: new Array(l + 1),
              count: t,
              holeIndices: new Array(l),
            };
            (n.pathLengths[0] = g.length),
              g.length > 0 && (a[u++] = { index: f, count: g.length }),
              (f = d
                ? D(g, g.length - 1, -1, h, f, g.length, e)
                : D(g, 0, 1, h, f, g.length, e));
            for (let t = 0; t < l; ++t) {
              const r = i[t];
              (n.holeIndices[t] = f),
                (n.pathLengths[t + 1] = r.length),
                r.length > 0 && (a[u++] = { index: f, count: r.length }),
                (f = D(r, 0, 1, h, f, r.length, e));
            }
            (l = 0), n.count > 0 && (s[c++] = n);
          }
        }
        for (let t = 0; t < l; ++t) {
          const n = i[t];
          n.length > 0 && (a[u++] = { index: f, count: n.length }),
            (f = D(n, 0, 1, h, f, n.length, e));
        }
        return (
          c < o && (s.length = c),
          u < o && (a.length = u),
          { position: h, polygons: s, outlines: a }
        );
      }
      function D(t, e, n, r, o, i, s) {
        o *= 3;
        for (let a = 0; a < i; ++a) {
          const i = t[e];
          (r[o++] = i[0]), (r[o++] = i[1]), (r[o++] = s ? i[2] : 0), (e += n);
        }
        return o / 3;
      }
      function I(t) {
        return !(0, T.bu)(t, !1, !1);
      }
      ((o = r || (r = {}))[(o.NONE = 0)] = 'NONE'),
        (o[(o.CCW_IS_HOLE = 1)] = 'CCW_IS_HOLE');
      var E = n(44547),
        L = n(13442),
        O = n(66459);
      const P = h.Z.getLogger('esri.geometry.support.meshUtils.centerAt');
      const S = (0, y.c)(),
        j = (0, y.c)();
      var z = n(17452);
      function N(t) {
        const e = (0, z.Yd)(t.url);
        return (n) => {
          var r;
          const o = (0, z.PF)(n, e, e),
            i = o ? o.replace(/^ *\.\//, '') : null;
          return null != (r = t.files.get(i)) ? r : n;
        };
      }
      async function U(t, e) {
        return t instanceof Blob
          ? W.fromBlob(t)
          : 'string' == typeof t
          ? new W(t)
          : Array.isArray(t)
          ? (async function (t, e) {
              const n = new Map();
              let r = null;
              const o = await (0, g.WW)(
                  t.map(async (t) => ({
                    name: t.name,
                    source: await U(t instanceof Blob ? t : t.source, e),
                  })),
                ),
                i = [];
              for (const t of o)
                t && ((0, g.Hc)(e) ? t.source.dispose() : i.push(t));
              (0, g.k_)(e);
              for (const { name: t, source: e } of i)
                ((0, s.Wi)(r) || /\.(gltf|glb)/i.test(t)) && (r = e.url),
                  n.set(t, e.url),
                  e.files && e.files.forEach((t, e) => n.set(e, t));
              if ((0, s.Wi)(r))
                throw new c.Z(
                  'mesh-load-external:missing-files',
                  'Missing files to load external mesh source',
                );
              return new W(
                r,
                () => i.forEach(({ source: t }) => t.dispose()),
                n,
              );
            })(t, e)
          : (async function (t, e) {
              const { default: r } = await (0, g.Hl)(
                  Promise.resolve().then(n.bind(n, 3172)),
                  e,
                ),
                o =
                  'string' == typeof t.multipart[0]
                    ? await Promise.all(
                        t.multipart.map(
                          async (t) =>
                            (
                              await r(t, { responseType: 'array-buffer' })
                            ).data,
                        ),
                      )
                    : t.multipart;
              return W.fromBlob(new Blob(o));
            })(t, e);
      }
      class W {
        constructor(t, e = () => {}, n = new Map()) {
          (this.url = t), (this.dispose = e), (this.files = n);
        }
        static fromBlob(t) {
          const e = URL.createObjectURL(t);
          return new W(e, () => URL.revokeObjectURL(e));
        }
      }
      var k = n(21787),
        $ = n(46521),
        H = n(13598),
        B = n(17896),
        G = n(24678),
        q = n(56493);
      const Y = h.Z.getLogger('esri.geometry.support.meshUtils.offset');
      function X(t, e) {
        if (t)
          for (let n = 0; n < t.length; n += 3)
            for (let r = 0; r < 3; r++) t[n + r] += e[r];
      }
      const K = (0, y.c)(),
        V = (0, H.c)(),
        J = (0, $.c)(),
        Q = {
          position: [-0.5, -0.5, 0, 0.5, -0.5, 0, 0.5, 0.5, 0, -0.5, 0.5, 0],
          normal: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
          uv: [0, 1, 1, 1, 1, 0, 0, 0],
          faces: [0, 1, 2, 0, 2, 3],
          facingAxisOrderSwap: {
            east: [3, 1, 2],
            west: [-3, -1, 2],
            north: [-1, 3, 2],
            south: [1, -3, 2],
            up: [1, 2, 3],
            down: [1, -2, -3],
          },
        };
      function tt(t, e, n) {
        (function (t) {
          for (let e = 0; e < t.position.length; e += 3)
            t.position[e + 2] += 0.5;
        })(t),
          (function (t, e) {
            if (null == e) return;
            const n =
              'number' == typeof e
                ? [e, e, e]
                : [
                    null != e.width ? e.width : 1,
                    null != e.depth ? e.depth : 1,
                    null != e.height ? e.height : 1,
                  ];
            (ot[0] = n[0]), (ot[4] = n[1]), (ot[8] = n[2]);
            for (let e = 0; e < t.position.length; e += 3) {
              for (let n = 0; n < 3; n++) rt[n] = t.position[e + n];
              (0, B.t)(rt, rt, ot);
              for (let n = 0; n < 3; n++) t.position[e + n] = rt[n];
            }
            if (n[0] !== n[1] || n[1] !== n[2]) {
              (ot[0] = 1 / n[0]), (ot[4] = 1 / n[1]), (ot[8] = 1 / n[2]);
              for (let e = 0; e < t.normal.length; e += 3) {
                for (let n = 0; n < 3; n++) rt[n] = t.normal[e + n];
                (0, B.t)(rt, rt, ot), (0, B.n)(rt, rt);
                for (let n = 0; n < 3; n++) t.normal[e + n] = rt[n];
              }
            }
          })(t, n && n.size);
        const { vertexAttributes: r, transform: o } = (0, O.w1)(t, e, n);
        return {
          vertexAttributes: new Z.Q({ ...r, uv: t.uv }),
          transform: o,
          components: [
            new A.Z({ faces: t.faces, material: (n && n.material) || null }),
          ],
          spatialReference: e.spatialReference,
        };
      }
      const et = {
          faceDescriptions: [
            {
              axis: [0, -1, 0],
              uvOrigin: [0, 0.625],
              corners: [
                [-1, -1],
                [1, -1],
                [1, 1],
                [-1, 1],
              ],
            },
            {
              axis: [1, 0, 0],
              uvOrigin: [0.25, 0.625],
              corners: [
                [-1, -1],
                [1, -1],
                [1, 1],
                [-1, 1],
              ],
            },
            {
              axis: [0, 1, 0],
              uvOrigin: [0.5, 0.625],
              corners: [
                [1, -1],
                [-1, -1],
                [-1, 1],
                [1, 1],
              ],
            },
            {
              axis: [-1, 0, 0],
              uvOrigin: [0.75, 0.625],
              corners: [
                [1, -1],
                [-1, -1],
                [-1, 1],
                [1, 1],
              ],
            },
            {
              axis: [0, 0, 1],
              uvOrigin: [0, 0.375],
              corners: [
                [-1, -1],
                [1, -1],
                [1, 1],
                [-1, 1],
              ],
            },
            {
              axis: [0, 0, -1],
              uvOrigin: [0, 0.875],
              corners: [
                [-1, 1],
                [1, 1],
                [1, -1],
                [-1, -1],
              ],
            },
          ],
          uvScales: [
            [0, 0],
            [1, 0],
            [1, 1],
            [0, 1],
          ],
          faceVertexOffsets: [0, 1, 2, 0, 2, 3],
        },
        nt = { south: 0, east: 1, north: 2, west: 3, up: 4, down: 5 },
        rt = (0, y.c)(),
        ot = (0, $.c)();
      var it = n(52138);
      const st = h.Z.getLogger('esri.geometry.support.meshUtils.rotate');
      function at(t, e, n, r = y.Z) {
        if (!(0, s.Wi)(t)) {
          (0, it.d)(pt, (0, C.WH)(e), (0, C.ZZ)(e));
          for (let e = 0; e < t.length; e += n) {
            for (let n = 0; n < 3; n++) lt[n] = t[e + n] - r[n];
            (0, B.m)(lt, lt, pt);
            for (let n = 0; n < 3; n++) t[e + n] = lt[n] + r[n];
          }
        }
      }
      const lt = (0, y.c)(),
        ct = (0, y.c)(),
        ut = (0, C.Ue)(),
        pt = (0, H.c)(),
        ht = (0, $.c)(),
        ft = (0, y.c)(),
        gt = h.Z.getLogger('esri.geometry.support.meshUtils.scale');
      function dt(t, e, n = y.Z) {
        if (t)
          for (let r = 0; r < t.length; r += 3) {
            for (let e = 0; e < 3; e++) xt[e] = t[r + e] - n[e];
            (0, B.a)(xt, xt, e);
            for (let e = 0; e < 3; e++) t[r + e] = xt[e] + n[e];
          }
      }
      const xt = (0, y.c)(),
        mt = (0, y.c)(),
        yt = (0, y.c)();
      var vt;
      const wt = h.Z.getLogger('esri.geometry.Mesh');
      let bt = (vt = class extends (0, u.p)(p.Z.LoadableMixin((0, f.v)(v.Z))) {
        constructor(t) {
          super(t),
            (this.components = null),
            (this.transform = null),
            (this.external = null),
            (this.hasZ = !0),
            (this.hasM = !1),
            (this.vertexAttributes = new Z.Q()),
            (this.type = 'mesh');
        }
        initialize() {
          ((0, s.Wi)(this.external) || this.vertexAttributes.position.length) &&
            (this.loadStatus = 'loaded'),
            this.when(() => {
              this.handles.add(
                (0, d.YP)(
                  () => {
                    var t;
                    return {
                      vertexAttributes: this.vertexAttributes,
                      components:
                        null == (t = this.components)
                          ? void 0
                          : t.map((t) => t.clone()),
                      transform: (0, s.pC)(this.transform)
                        ? this.transform.clone()
                        : null,
                    };
                  },
                  () => this._set('external', null),
                  { once: !0, sync: !0 },
                ),
              );
            });
        }
        get hasExtent() {
          return (
            (!this.loaded &&
              (0, s.pC)(this.external) &&
              (0, s.pC)(this.external.extent)) ||
            (this.loaded &&
              this.vertexAttributes.position.length > 0 &&
              (!this.components || this.components.length > 0))
          );
        }
        get boundingInfo() {
          const t = this.vertexAttributes.position,
            e = this.spatialReference;
          if (
            0 === t.length ||
            (this.components && 0 === this.components.length)
          )
            return {
              extent: new a.Z({
                xmin: 0,
                ymin: 0,
                zmin: 0,
                xmax: 0,
                ymax: 0,
                zmax: 0,
                spatialReference: e,
              }),
              center: new w.Z({ x: 0, y: 0, z: 0, spatialReference: e }),
            };
          const n = (0, s.pC)(this.transform)
            ? this.transform.project(t, e)
            : t;
          let r = 1 / 0,
            o = 1 / 0,
            i = 1 / 0,
            l = -1 / 0,
            c = -1 / 0,
            u = -1 / 0,
            p = 0,
            h = 0,
            f = 0;
          const g = n.length,
            d = 1 / (g / 3);
          let x = 0;
          for (; x < g; ) {
            const t = n[x++],
              e = n[x++],
              s = n[x++];
            (r = Math.min(r, t)),
              (o = Math.min(o, e)),
              (i = Math.min(i, s)),
              (l = Math.max(l, t)),
              (c = Math.max(c, e)),
              (u = Math.max(u, s)),
              (p += d * t),
              (h += d * e),
              (f += d * s);
          }
          return {
            extent: new a.Z({
              xmin: r,
              ymin: o,
              zmin: i,
              xmax: l,
              ymax: c,
              zmax: u,
              spatialReference: e,
            }),
            center: new w.Z({ x: p, y: h, z: f, spatialReference: e }),
          };
        }
        get anchor() {
          if ((0, s.pC)(this.transform))
            return this.transform.getOriginPoint(this.spatialReference);
          const t = this.boundingInfo;
          return new w.Z({
            x: t.center.x,
            y: t.center.y,
            z: t.extent.zmin,
            spatialReference: this.spatialReference,
          });
        }
        get origin() {
          return (0, s.pC)(this.transform)
            ? this.transform.getOriginPoint(this.spatialReference)
            : this.boundingInfo.center;
        }
        get extent() {
          return !this.loaded &&
            (0, s.pC)(this.external) &&
            (0, s.pC)(this.external.extent)
            ? this.external.extent.clone()
            : this.boundingInfo.extent;
        }
        addComponent(t) {
          this.loaded
            ? (this.components || (this.components = []),
              this.components.push(A.Z.from(t)),
              this.notifyChange('components'))
            : wt.error(
                'addComponent()',
                'Mesh must be loaded before applying operations',
              );
        }
        removeComponent(t) {
          if (this.loaded) {
            if (this.components) {
              const e = this.components.indexOf(t);
              if (-1 !== e)
                return (
                  this.components.splice(e, 1),
                  void this.notifyChange('components')
                );
            }
            wt.error(
              'removeComponent()',
              'Provided component is not part of the list of components',
            );
          } else
            wt.error(
              'removeComponent()',
              'Mesh must be loaded before applying operations',
            );
        }
        rotate(t, e, n, r) {
          return (
            (0, C.uT)(Ct.x, t, At),
            (0, C.uT)(Ct.y, e, Mt),
            (0, C.uT)(Ct.z, n, Zt),
            (0, C.qC)(At, Mt, At),
            (0, C.qC)(At, Zt, At),
            (function (t, e, n) {
              if (
                !t.vertexAttributes ||
                !t.vertexAttributes.position ||
                0 === e[3]
              )
                return;
              const r = t.spatialReference;
              if ((0, s.pC)(t.transform)) {
                var o;
                null != (null == n ? void 0 : n.geographic) &&
                  n.geographic !== t.transform.geographic &&
                  st.warn(
                    `Specifying the 'geographic' parameter (${n.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`,
                  );
                const i =
                  null != (o = null == n ? void 0 : n.origin)
                    ? o
                    : t.transform.getOriginPoint(r);
                !(function (t, e, n) {
                  const r = (0, B.s)(lt, n.x, n.y, n.z),
                    o = (0, B.f)(lt, r, t.origin);
                  t.applyLocalInverse(o, ct),
                    (t.rotation = (0, C.qC)(t.rotation, e, (0, C.Ue)())),
                    t.applyLocalInverse(o, o),
                    (0, B.f)(o, o, ct),
                    (t.translation = (0, B.b)((0, y.c)(), t.translation, o));
                })(t.transform, e, i);
              } else {
                var i;
                const r =
                  null != (i = null == n ? void 0 : n.origin) ? i : t.origin;
                (0, L.h)(t.spatialReference, n)
                  ? (function (t, e, n) {
                      const r = t.spatialReference,
                        o = (0, G.rS)(r),
                        i = ft;
                      (0, E.KC)(n, i, o) || (0, E.KC)(t.origin, i, o);
                      const a = t.vertexAttributes.position,
                        l = t.vertexAttributes.normal,
                        c = t.vertexAttributes.tangent,
                        u = new Float64Array(a.length),
                        p = (0, s.pC)(l) ? new Float32Array(l.length) : null,
                        h = (0, s.pC)(c) ? new Float32Array(c.length) : null;
                      (0, E.Bm)(o, i, pt, o), (0, k.f)(ht, pt);
                      const f = ut;
                      (0, B.t)((0, C.ZZ)(ut), (0, C.ZZ)(e), ht),
                        (f[3] = e[3]),
                        (0, q.XO)(a, r, u),
                        (0, s.pC)(l) && (0, q.Iz)(l, a, u, r, p),
                        (0, s.pC)(c) && (0, q.wi)(c, a, u, r, h),
                        at(u, f, 3, i),
                        (0, q.To)(u, a, r),
                        (0, s.pC)(l) && (at(p, f, 3), (0, q.Yk)(p, a, u, r, l)),
                        (0, s.pC)(c) && (at(h, f, 4), (0, q.M2)(h, a, u, r, c)),
                        t.vertexAttributesChanged();
                    })(t, e, r)
                  : (function (t, e, n) {
                      const r = ft;
                      if (!(0, E.KC)(n, r, t.spatialReference)) {
                        const e = t.origin;
                        (r[0] = e.x),
                          (r[1] = e.y),
                          (r[2] = e.z),
                          st.error(
                            `Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid}).`,
                          );
                      }
                      at(t.vertexAttributes.position, e, 3, r),
                        at(t.vertexAttributes.normal, e, 3),
                        at(t.vertexAttributes.tangent, e, 4),
                        t.vertexAttributesChanged();
                    })(t, e, r);
              }
            })(this, At, r),
            this
          );
        }
        offset(t, e, n, r) {
          return this.loaded
            ? ((_t[0] = t),
              (_t[1] = e),
              (_t[2] = n),
              (function (t, e, n) {
                t.vertexAttributes &&
                  t.vertexAttributes.position &&
                  ((0, s.pC)(t.transform)
                    ? (null != (null == n ? void 0 : n.geographic) &&
                        n.geographic !== t.transform.geographic &&
                        Y.warn(
                          `Specifying the 'geographic' parameter (${n.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`,
                        ),
                      (function (t, e) {
                        const n = t.origin;
                        t.origin = (0, B.b)((0, y.c)(), n, e);
                      })(t.transform, e))
                    : (0, L.h)(t.spatialReference, n)
                    ? (function (t, e) {
                        const n = t.spatialReference,
                          r = t.vertexAttributes.position,
                          o = t.vertexAttributes.normal,
                          i = t.vertexAttributes.tangent,
                          a = new Float64Array(r.length),
                          l = (0, s.pC)(o) ? new Float32Array(o.length) : null,
                          c = (0, s.pC)(i) ? new Float32Array(i.length) : null,
                          u = t.extent.center,
                          p = K;
                        (0, E.Bm)(n, [u.x, u.y, u.z], V, (0, G.rS)(n)),
                          (0, k.f)(J, V),
                          (0, B.t)(p, e, J),
                          (0, q.XO)(r, n, a),
                          (0, s.pC)(o) && (0, q.Iz)(o, r, a, n, l),
                          (0, s.pC)(i) && (0, q.wi)(i, r, a, n, c),
                          X(a, p),
                          (0, q.To)(a, r, n),
                          (0, s.pC)(o) && (0, q.Yk)(l, r, a, n, o),
                          (0, s.pC)(i) && (0, q.M2)(c, r, a, n, i),
                          t.vertexAttributesChanged();
                      })(t, e)
                    : (function (t, e) {
                        X(t.vertexAttributes.position, e),
                          t.vertexAttributesChanged();
                      })(t, e));
              })(this, _t, r),
              this)
            : (wt.error(
                'offset()',
                'Mesh must be loaded before applying operations',
              ),
              this);
        }
        scale(t, e) {
          return this.loaded
            ? ((function (t, e, n) {
                if (!t.vertexAttributes || !t.vertexAttributes.position) return;
                const r = t.spatialReference;
                if ((0, s.pC)(t.transform)) {
                  var o;
                  null != (null == n ? void 0 : n.geographic) &&
                    n.geographic !== t.transform.geographic &&
                    gt.warn(
                      `Specifying the 'geographic' parameter (${n.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`,
                    );
                  const i =
                    null != (o = null == n ? void 0 : n.origin)
                      ? o
                      : t.transform.getOriginPoint(r);
                  !(function (t, e, n) {
                    const r = (0, B.s)(xt, n.x, n.y, n.z),
                      o = (0, B.f)(xt, r, t.origin);
                    t.applyLocalInverse(o, mt);
                    const i = (0, B.a)((0, y.c)(), t.scale, e);
                    (t.scale = i),
                      t.applyLocalInverse(o, o),
                      (0, B.f)(o, o, mt),
                      (t.translation = (0, B.b)((0, y.c)(), t.translation, o));
                  })(t.transform, e, i);
                } else {
                  const r = (0, L.h)(t.spatialReference, n),
                    o = (n && n.origin) || t.origin;
                  r
                    ? (function (t, e, n) {
                        const r = t.spatialReference,
                          o = (0, G.rS)(r),
                          i = yt;
                        (0, E.KC)(n, i, o) || (0, E.KC)(t.origin, i, o);
                        const a = t.vertexAttributes.position,
                          l = t.vertexAttributes.normal,
                          c = t.vertexAttributes.tangent,
                          u = new Float64Array(a.length),
                          p = (0, s.pC)(l) ? new Float32Array(l.length) : null,
                          h = (0, s.pC)(c) ? new Float32Array(c.length) : null;
                        (0, q.XO)(a, r, u),
                          (0, s.pC)(l) && (0, q.Iz)(l, a, u, r, p),
                          (0, s.pC)(c) && (0, q.wi)(c, a, u, r, h),
                          dt(u, e, i),
                          (0, q.To)(u, a, r),
                          (0, s.pC)(l) && (0, q.Yk)(p, a, u, r, l),
                          (0, s.pC)(c) && (0, q.M2)(h, a, u, r, c),
                          t.vertexAttributesChanged();
                      })(t, e, o)
                    : (function (t, e, n) {
                        const r = yt;
                        if (!(0, E.KC)(n, r, t.spatialReference)) {
                          const e = t.origin;
                          (r[0] = e.x),
                            (r[1] = e.y),
                            (r[2] = e.z),
                            gt.error(
                              `Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid}).`,
                            );
                        }
                        dt(t.vertexAttributes.position, e, r),
                          t.vertexAttributesChanged();
                      })(t, e, o);
                }
              })(this, t, e),
              this)
            : (wt.error(
                'scale()',
                'Mesh must be loaded before applying operations',
              ),
              this);
        }
        centerAt(t, e) {
          return this.loaded
            ? ((function (t, e, n) {
                var r;
                if (!t.vertexAttributes || !t.vertexAttributes.position) return;
                const o =
                  null != (r = null == n ? void 0 : n.origin) ? r : t.origin;
                (0, s.pC)(t.transform)
                  ? (null != (null == n ? void 0 : n.geographic) &&
                      n.geographic !== t.transform.geographic &&
                      P.warn(
                        `Specifying the 'geographic' parameter (${n.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`,
                      ),
                    (function (t, e, n) {
                      const r = e.x - n.x,
                        o = e.y - n.y,
                        i = e.hasZ && n.hasZ ? e.z - n.z : 0,
                        s = t.origin;
                      t.origin = [s[0] + r, s[1] + o, s[2] + i];
                    })(t.transform, e, o))
                  : (0, L.h)(t.spatialReference, n)
                  ? (function (t, e, n) {
                      const r = (0, O.FF)(t.vertexAttributes, n, {
                          geographic: !0,
                        }),
                        {
                          position: o,
                          normal: i,
                          tangent: s,
                        } = (0, O.iv)(r, e, { geographic: !0 });
                      (t.vertexAttributes.position = o),
                        (t.vertexAttributes.normal = i),
                        (t.vertexAttributes.tangent = s),
                        t.vertexAttributesChanged();
                    })(t, e, o)
                  : (function (t, e, n) {
                      const r = j,
                        o = S;
                      if ((0, E.KC)(e, o, t.spatialReference)) {
                        if (!(0, E.KC)(n, r, t.spatialReference)) {
                          const e = t.origin;
                          (r[0] = e.x),
                            (r[1] = e.y),
                            (r[2] = e.z),
                            P.error(
                              `Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid}).`,
                            );
                        }
                        (function (t, e, n) {
                          if (t)
                            for (let r = 0; r < t.length; r += 3)
                              for (let o = 0; o < 3; o++)
                                t[r + o] += e[o] - n[o];
                        })(t.vertexAttributes.position, o, r),
                          t.vertexAttributesChanged();
                      } else
                        P.error(
                          `Failed to project centerAt location (wkid:${e.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid})`,
                        );
                    })(t, e, o);
              })(this, t, e),
              this)
            : (wt.error(
                'centerAt()',
                'Mesh must be loaded before applying operations',
              ),
              this);
        }
        load(t) {
          return (
            (0, s.pC)(this.external) &&
              this.addResolvingPromise(
                (async function (t, e, r) {
                  const { loadGLTFMesh: o } = await (0, g.Hl)(
                      Promise.all([n.e(2133), n.e(9070)]).then(
                        n.bind(n, 99070),
                      ),
                      r,
                    ),
                    i = await U(e, r),
                    a = o(
                      new w.Z({
                        x: 0,
                        y: 0,
                        z: 0,
                        spatialReference: t.spatialReference,
                      }),
                      i.url,
                      {
                        resolveFile: N(i),
                        useTransform: !0,
                        signal: (0, s.pC)(r) ? r.signal : null,
                      },
                    );
                  a.then(
                    () => i.dispose(),
                    () => i.dispose(),
                  );
                  const { vertexAttributes: l, components: c } = await a;
                  (t.vertexAttributes = l), (t.components = c);
                })(this, this.external.source, t),
              ),
            Promise.resolve(this)
          );
        }
        clone() {
          const t = this.components ? new Map() : null,
            e = this.components ? new Map() : null,
            n = {
              components: this.components
                ? this.components.map((n) => n.cloneWithDeduplication(t, e))
                : null,
              spatialReference: this.spatialReference,
              vertexAttributes: this.vertexAttributes.clone(),
              transform: (0, s.pC)(this.transform)
                ? this.transform.clone()
                : null,
              external: (0, s.pC)(this.external)
                ? {
                    source: this.external.source,
                    extent: (0, s.pC)(this.external.extent)
                      ? this.external.extent.clone()
                      : null,
                  }
                : null,
            };
          return new vt(n);
        }
        vertexAttributesChanged() {
          this.notifyChange('vertexAttributes');
        }
        async toBinaryGLTF(t) {
          const { toBinaryGLTF: e } = await n.e(7277).then(n.bind(n, 7277));
          return e(this, t);
        }
        static createBox(t, e) {
          if (!(t instanceof w.Z))
            return (
              wt.error(
                '.createBox()',
                'expected location to be a Point instance',
              ),
              null
            );
          const n = new vt(
            tt(
              (function () {
                const {
                    faceDescriptions: t,
                    faceVertexOffsets: e,
                    uvScales: n,
                  } = et,
                  r = 4 * t.length,
                  o = new Float64Array(3 * r),
                  i = new Float32Array(3 * r),
                  s = new Float32Array(2 * r),
                  a = new Uint32Array(2 * t.length * 3);
                let l = 0,
                  c = 0,
                  u = 0,
                  p = 0;
                for (let r = 0; r < t.length; r++) {
                  const h = t[r],
                    f = l / 3;
                  for (const t of e) a[p++] = f + t;
                  const g = h.corners;
                  for (let t = 0; t < 4; t++) {
                    const e = g[t];
                    let r = 0;
                    (s[u++] = 0.25 * n[t][0] + h.uvOrigin[0]),
                      (s[u++] = h.uvOrigin[1] - 0.25 * n[t][1]);
                    for (let t = 0; t < 3; t++)
                      0 !== h.axis[t]
                        ? ((o[l++] = 0.5 * h.axis[t]), (i[c++] = h.axis[t]))
                        : ((o[l++] = 0.5 * e[r++]), (i[c++] = 0));
                  }
                }
                return { position: o, normal: i, uv: s, faces: a };
              })(),
              t,
              e,
            ),
          );
          return e && e.imageFace && 'all' !== e.imageFace
            ? (function (t, e) {
                const n = t.components[0],
                  r = n.faces,
                  o = nt[e],
                  i = 6 * o,
                  a = new Uint32Array(6),
                  l = new Uint32Array(r.length - 6);
                let c = 0,
                  u = 0;
                for (let t = 0; t < r.length; t++)
                  t >= i && t < i + 6 ? (a[c++] = r[t]) : (l[u++] = r[t]);
                if ((0, s.pC)(t.vertexAttributes.uv)) {
                  const e = new Float32Array(t.vertexAttributes.uv),
                    n = 4 * o * 2,
                    r = [0, 1, 1, 1, 1, 0, 0, 0];
                  for (let t = 0; t < r.length; t++) e[n + t] = r[t];
                  t.vertexAttributes.uv = e;
                }
                return (
                  (t.components = [
                    new A.Z({ faces: a, material: n.material }),
                    new A.Z({ faces: l }),
                  ]),
                  t
                );
              })(n, e.imageFace)
            : n;
        }
        static createSphere(t, e) {
          return t instanceof w.Z
            ? new vt(
                tt(
                  (function (t = 0) {
                    const e = Math.round(8 * 2 ** t),
                      n = 2 * e,
                      r = (e - 1) * (n + 1) + 2 * n,
                      o = new Float64Array(3 * r),
                      i = new Float32Array(3 * r),
                      s = new Float32Array(2 * r),
                      a = new Uint32Array((e - 1) * n * 2 * 3);
                    let l = 0,
                      c = 0,
                      u = 0,
                      p = 0;
                    for (let t = 0; t <= e; t++) {
                      const r = (t / e) * Math.PI + 0.5 * Math.PI,
                        h = Math.cos(r),
                        f = Math.sin(r);
                      rt[2] = f;
                      const g = 0 === t || t === e,
                        d = g ? n - 1 : n;
                      for (let r = 0; r <= d; r++) {
                        const f = (r / d) * 2 * Math.PI;
                        (rt[0] = -Math.sin(f) * h), (rt[1] = Math.cos(f) * h);
                        for (let t = 0; t < 3; t++)
                          (o[l] = 0.5 * rt[t]), (i[l] = rt[t]), ++l;
                        (s[c++] = (r + (g ? 0.5 : 0)) / n),
                          (s[c++] = t / e),
                          0 !== t &&
                            r !== n &&
                            (t !== e &&
                              ((a[u++] = p),
                              (a[u++] = p + 1),
                              (a[u++] = p - n)),
                            1 !== t &&
                              ((a[u++] = p),
                              (a[u++] = p - n),
                              (a[u++] = p - n - 1))),
                          p++;
                      }
                    }
                    return { position: o, normal: i, uv: s, faces: a };
                  })((e && e.densificationFactor) || 0),
                  t,
                  e,
                ),
              )
            : (wt.error(
                '.createSphere()',
                'expected location to be a Point instance',
              ),
              null);
        }
        static createCylinder(t, e) {
          return t instanceof w.Z
            ? new vt(
                tt(
                  (function (t = 0) {
                    const e = Math.round(16 * 2 ** t),
                      n = 4 * (e + 1) + 2 * e,
                      r = new Float64Array(3 * n),
                      o = new Float32Array(3 * n),
                      i = new Float32Array(2 * n),
                      s = new Uint32Array(4 * e * 3);
                    let a = 0,
                      l = 0,
                      c = 0,
                      u = 0,
                      p = 0;
                    for (let t = 0; t <= 5; t++) {
                      const n = 0 === t || 5 === t,
                        h = t <= 1 || t >= 4,
                        f = 2 === t || 4 === t,
                        g = n ? e - 1 : e;
                      for (let d = 0; d <= g; d++) {
                        const x = (d / g) * 2 * Math.PI,
                          m = n ? 0 : 0.5;
                        (rt[0] = m * Math.sin(x)),
                          (rt[1] = m * -Math.cos(x)),
                          (rt[2] = t <= 2 ? 0.5 : -0.5);
                        for (let e = 0; e < 3; e++)
                          (r[a++] = rt[e]),
                            (o[l++] = h
                              ? 2 === e
                                ? t <= 1
                                  ? 1
                                  : -1
                                : 0
                              : 2 === e
                              ? 0
                              : rt[e] / m);
                        (i[c++] = (d + (n ? 0.5 : 0)) / e),
                          (i[c++] =
                            t <= 1
                              ? (1 * t) / 3
                              : t <= 3
                              ? (1 * (t - 2)) / 3 + 1 / 3
                              : (1 * (t - 4)) / 3 + 2 / 3),
                          f ||
                            0 === t ||
                            d === e ||
                            (5 !== t &&
                              ((s[u++] = p),
                              (s[u++] = p + 1),
                              (s[u++] = p - e)),
                            1 !== t &&
                              ((s[u++] = p),
                              (s[u++] = p - e),
                              (s[u++] = p - e - 1))),
                          p++;
                      }
                    }
                    return { position: r, normal: o, uv: i, faces: s };
                  })((e && e.densificationFactor) || 0),
                  t,
                  e,
                ),
              )
            : (wt.error(
                '.createCylinder()',
                'expected location to be a Point instance',
              ),
              null);
        }
        static createPlane(t, e) {
          var n;
          if (!(t instanceof w.Z))
            return (
              wt.error(
                '.createPlane()',
                'expected location to be a Point instance',
              ),
              null
            );
          const r = null != (n = null == e ? void 0 : e.facing) ? n : 'up',
            o = (function (t, e) {
              const n = 'number' == typeof e ? e : null != e ? e.width : 1,
                r = 'number' == typeof e ? e : null != e ? e.height : 1;
              switch (t) {
                case 'up':
                case 'down':
                  return { width: n, depth: r };
                case 'north':
                case 'south':
                  return { width: n, height: r };
                case 'east':
                case 'west':
                  return { depth: n, height: r };
              }
            })(r, null == e ? void 0 : e.size);
          return new vt(
            tt(
              (function (t) {
                const e = Q.facingAxisOrderSwap[t],
                  n = Q.position,
                  r = Q.normal,
                  o = new Float64Array(n.length),
                  i = new Float32Array(r.length);
                let s = 0;
                for (let t = 0; t < 4; t++) {
                  const t = s;
                  for (let a = 0; a < 3; a++) {
                    const l = e[a],
                      c = Math.abs(l) - 1,
                      u = l >= 0 ? 1 : -1;
                    (o[s] = n[t + c] * u), (i[s] = r[t + c] * u), s++;
                  }
                }
                return {
                  position: o,
                  normal: i,
                  uv: new Float32Array(Q.uv),
                  faces: new Uint32Array(Q.faces),
                };
              })(r),
              t,
              { ...e, size: o },
            ),
          );
        }
        static createFromPolygon(t, e) {
          if (!(t instanceof b.Z))
            return (
              wt.error(
                '.createFromPolygon()',
                'expected polygon to be a Polygon instance',
              ),
              null
            );
          const n = (function (t) {
            const e = R(t.rings, t.hasZ, r.CCW_IS_HOLE),
              n = [];
            let o = 0,
              i = 0;
            for (const t of e.polygons) {
              const r = t.count,
                s = t.index,
                a = new Float64Array(
                  e.position.buffer,
                  3 * s * e.position.BYTES_PER_ELEMENT,
                  3 * r,
                ),
                l = t.holeIndices.map((t) => t - s),
                c = new Uint32Array((0, _.e)(a, l, 3));
              n.push({ position: a, faces: c }),
                (o += a.length),
                (i += c.length);
            }
            const s = (function (t, e, n) {
                if (1 === t.length) return t[0];
                const r = new Float64Array(e),
                  o = new Uint32Array(n);
                let i = 0,
                  s = 0,
                  a = 0;
                for (const e of t) {
                  for (let t = 0; t < e.position.length; t++)
                    r[i++] = e.position[t];
                  for (let t = 0; t < e.faces.length; t++)
                    o[s++] = e.faces[t] + a;
                  a = i / 3;
                }
                return { position: r, faces: o };
              })(n, o, i),
              a = (0, F.d)(s.position.buffer, 6, { originalIndices: s.faces });
            return (
              (s.position = new Float64Array(a.buffer)),
              (s.faces = a.indices),
              s
            );
          })(t);
          return new vt({
            vertexAttributes: new Z.Q({ position: n.position }),
            components: [
              new A.Z({
                faces: n.faces,
                shading: 'flat',
                material: (e && e.material) || null,
              }),
            ],
            spatialReference: t.spatialReference,
          });
        }
        static async createFromGLTF(t, e, r) {
          if (!(t instanceof w.Z))
            throw (
              (wt.error(
                '.createfromGLTF()',
                'expected location to be a Point instance',
              ),
              new c.Z(
                'invalid-input',
                'Expected location to be a Point instance',
              ))
            );
          const { loadGLTFMesh: o } = await (0, g.Hl)(
            Promise.all([n.e(2133), n.e(9070)]).then(n.bind(n, 99070)),
            r,
          );
          return new vt(await o(t, e, r));
        }
        static createWithExternalSource(t, e, n) {
          var r, o, i;
          const s = null != (r = null == n ? void 0 : n.extent) ? r : null,
            a =
              null != (o = null == n ? void 0 : n.transform.clone())
                ? o
                : new M.Z();
          a.origin = [t.x, t.y, null != (i = t.z) ? i : 0];
          const l = t.spatialReference;
          return new vt({
            external: { source: e, extent: s },
            transform: a,
            spatialReference: l,
          });
        }
        static createIncomplete(t, e) {
          var n, r;
          const o =
            null != (n = null == e ? void 0 : e.transform.clone())
              ? n
              : new M.Z();
          o.origin = [t.x, t.y, null != (r = t.z) ? r : 0];
          const i = t.spatialReference,
            s = new vt({ transform: o, spatialReference: i });
          return (
            s.addResolvingPromise(
              Promise.reject(
                new c.Z('mesh-incomplete', 'Mesh resources are not complete'),
              ),
            ),
            s
          );
        }
      });
      (0, l._)(
        [(0, x.Cb)({ type: [A.Z], json: { write: !0 } })],
        bt.prototype,
        'components',
        void 0,
      ),
        (0, l._)(
          [(0, x.Cb)({ type: M.Z, json: { write: !0 } })],
          bt.prototype,
          'transform',
          void 0,
        ),
        (0, l._)(
          [(0, x.Cb)({ constructOnly: !0 })],
          bt.prototype,
          'external',
          void 0,
        ),
        (0, l._)(
          [(0, x.Cb)({ readOnly: !0 })],
          bt.prototype,
          'hasExtent',
          null,
        ),
        (0, l._)(
          [(0, x.Cb)({ readOnly: !0 })],
          bt.prototype,
          'boundingInfo',
          null,
        ),
        (0, l._)([(0, x.Cb)({ readOnly: !0 })], bt.prototype, 'anchor', null),
        (0, l._)([(0, x.Cb)({ readOnly: !0 })], bt.prototype, 'origin', null),
        (0, l._)(
          [(0, x.Cb)({ readOnly: !0, json: { read: !1 } })],
          bt.prototype,
          'extent',
          null,
        ),
        (0, l._)(
          [
            (0, x.Cb)({
              readOnly: !0,
              json: { read: !1, write: !0, default: !0 },
            }),
          ],
          bt.prototype,
          'hasZ',
          void 0,
        ),
        (0, l._)(
          [
            (0, x.Cb)({
              readOnly: !0,
              json: { read: !1, write: !0, default: !1 },
            }),
          ],
          bt.prototype,
          'hasM',
          void 0,
        ),
        (0, l._)(
          [(0, x.Cb)({ type: Z.Q, nonNullable: !0, json: { write: !0 } })],
          bt.prototype,
          'vertexAttributes',
          void 0,
        ),
        (bt = vt = (0, l._)([(0, m.j)('esri.geometry.Mesh')], bt));
      const Ct = {
          x: (0, y.f)(1, 0, 0),
          y: (0, y.f)(0, 1, 0),
          z: (0, y.f)(0, 0, 1),
        },
        At = (0, C.Ue)(),
        Mt = (0, C.Ue)(),
        Zt = (0, C.Ue)(),
        _t = (0, y.c)(),
        Tt = bt;
      var Ft, Rt;
      !(function (t) {
        (t.featureGUID = 'featureGUID'),
          (t.assetName = 'assetName'),
          (t.hash = 'hash'),
          (t.type = 'type'),
          (t.conversionStatus = 'conversionStatus'),
          (t.flags = 'flags'),
          (t.complexity = 'complexity'),
          (t.size = 'size'),
          (t.seqNo = 'seqNo'),
          (t.sourceHash = 'sourceHash'),
          (t.assetURL = 'assetURL');
      })(Ft || (Ft = {})),
        (function (t) {
          (t.SUBMITTED = 'SUBMITTED'),
            (t.INPROGRESS = 'INPROGRESS'),
            (t.FAILED = 'FAILED'),
            (t.COMPLETED = 'COMPLETED');
        })(Rt || (Rt = {}));
      var Dt,
        It,
        Et = n(74889);
      function Lt(t, e, n) {
        const r = n.features;
        (n.features = []), delete n.geometryType;
        const o = Et.default.fromJSON(n);
        o.geometryType = 'mesh';
        const a = o.spatialReference,
          l =
            (0, s.Wi)(t.outFields) || !t.outFields.length
              ? () => ({})
              : ((c = t.outFields.includes('*') ? null : new Set(t.outFields)),
                ({ attributes: t }) => {
                  if (!t) return {};
                  if (!c) return t;
                  for (const e in t) c.has(e) || delete t[e];
                  return t;
                });
        var c;
        for (const t of r) {
          const n = Ot(t, a, e);
          (0, s.pC)(n) &&
            o.features.push(new i.Z({ geometry: n, attributes: l(t) }));
        }
        return o;
      }
      function Ot(t, e, n) {
        const { status: r, source: o } = (function (t) {
          if (!t.assetMappings) return { status: Dt.FAILED };
          const e = [],
            n = new Map();
          for (const r of t.assetMappings) {
            const t = r[Ft.seqNo],
              o = r[Ft.assetName],
              i = r[Ft.assetURL],
              s = r[Ft.conversionStatus];
            if (s === Rt.FAILED) return { status: Dt.FAILED };
            if (s !== Rt.COMPLETED) return { status: Dt.PENDING };
            if (null == t) e.push({ name: o, source: i });
            else {
              const r = n.get(o);
              let s;
              r
                ? (s = r.multipart)
                : ((s = []),
                  e.push({ name: o, source: { multipart: s } }),
                  n.set(o, { multipart: s })),
                (s[t] = i);
            }
          }
          return { status: Dt.COMPLETED, source: e };
        })(t);
        if (r === Dt.FAILED) return null;
        const i = (function ({ attributes: t }, e, { transformFieldRoles: n }) {
            return new w.Z({
              x: t[n.originX],
              y: t[n.originY],
              z: t[n.originZ],
              spatialReference: e,
            });
          })(t, e, n),
          s = a.Z.fromJSON(t.geometry);
        s.spatialReference = e;
        const l = (function (
          { attributes: t, assetMappings: e },
          { transformFieldRoles: n },
        ) {
          var r;
          return new M.Z({
            translation: [
              t[n.translationX],
              t[n.translationY],
              t[n.translationZ],
            ],
            rotation: (0, C.uT)(
              [t[n.rotationX], t[n.rotationY], t[n.rotationZ]],
              t[n.rotationDeg],
            ),
            scale: [t[n.scaleX], t[n.scaleY], t[n.scaleZ]],
            geographic: !(
              null != (r = e[Ft.flags]) && r.includes('PROJECT_VERTICES')
            ),
          });
        })(t, n);
        return r === Dt.PENDING
          ? Tt.createIncomplete(i, { extent: s, transform: l })
          : Tt.createWithExternalSource(i, o, { extent: s, transform: l });
      }
      ((It = Dt || (Dt = {}))[(It.FAILED = 0)] = 'FAILED'),
        (It[(It.PENDING = 1)] = 'PENDING'),
        (It[(It.COMPLETED = 2)] = 'COMPLETED');
    },
  },
]);
