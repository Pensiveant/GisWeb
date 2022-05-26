'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [6810],
  {
    95401: (t, i, e) => {
      e.d(i, { e: () => x });
      var n,
        s,
        r,
        h = { exports: {} };
      (n = h),
        (s = function () {
          function t(t, e, s) {
            s = s || 2;
            var r,
              h,
              x,
              l,
              a,
              u,
              y,
              f = e && e.length,
              c = f ? e[0] * s : t.length,
              p = i(t, 0, c, s, !0),
              m = [];
            if (!p || p.next === p.prev) return m;
            if ((f && (p = o(t, e, p, s)), t.length > 80 * s)) {
              (r = x = t[0]), (h = l = t[1]);
              for (var v = s; v < c; v += s)
                (a = t[v]) < r && (r = a),
                  (u = t[v + 1]) < h && (h = u),
                  a > x && (x = a),
                  u > l && (l = u);
              y = 0 !== (y = Math.max(x - r, l - h)) ? 1 / y : 0;
            }
            return n(p, m, s, r, h, y), m;
          }
          function i(t, i, e, n, s) {
            var r, h;
            if (s === U(t, i, e, n) > 0)
              for (r = i; r < e; r += n) h = R(r, t[r], t[r + 1], h);
            else for (r = e - n; r >= i; r -= n) h = R(r, t[r], t[r + 1], h);
            if (h && g(h, h.next)) {
              var x = h.next;
              b(h), (h = x);
            }
            return h;
          }
          function e(t, i) {
            if (!t) return t;
            i || (i = t);
            var e,
              n = t;
            do {
              if (
                ((e = !1),
                n.steiner || (!g(n, n.next) && 0 !== d(n.prev, n, n.next)))
              )
                n = n.next;
              else {
                var s = n.prev;
                if ((b(n), (n = i = s) === n.next)) break;
                e = !0;
              }
            } while (e || n !== i);
            return i;
          }
          function n(t, i, o, l, a, u, y) {
            if (t) {
              !y && u && f(t, l, a, u);
              for (var c, p, m = t; t.prev !== t.next; )
                if (((c = t.prev), (p = t.next), u ? r(t, l, a, u) : s(t)))
                  i.push(c.i / o),
                    i.push(t.i / o),
                    i.push(p.i / o),
                    b(t),
                    (t = p.next),
                    (m = p.next);
                else if ((t = p) === m) {
                  y
                    ? 1 === y
                      ? n((t = h(e(t), i, o)), i, o, l, a, u, 2)
                      : 2 === y && x(t, i, o, l, a, u)
                    : n(e(t), i, o, l, a, u, 1);
                  break;
                }
            }
          }
          function s(t) {
            var i = t.prev,
              e = t,
              n = t.next;
            if (d(i, e, n) >= 0) return !1;
            for (var s = t.next.next; s !== t.prev; ) {
              if (
                m(i.x, i.y, e.x, e.y, n.x, n.y, s.x, s.y) &&
                d(s.prev, s, s.next) >= 0
              )
                return !1;
              s = s.next;
            }
            return !0;
          }
          function r(t, i, e, n) {
            var s = t.prev,
              r = t,
              h = t.next;
            if (d(s, r, h) >= 0) return !1;
            for (
              var x =
                  s.x < r.x ? (s.x < h.x ? s.x : h.x) : r.x < h.x ? r.x : h.x,
                o = s.y < r.y ? (s.y < h.y ? s.y : h.y) : r.y < h.y ? r.y : h.y,
                l = s.x > r.x ? (s.x > h.x ? s.x : h.x) : r.x > h.x ? r.x : h.x,
                a = s.y > r.y ? (s.y > h.y ? s.y : h.y) : r.y > h.y ? r.y : h.y,
                u = c(x, o, i, e, n),
                y = c(l, a, i, e, n),
                f = t.prevZ,
                p = t.nextZ;
              f && f.z >= u && p && p.z <= y;

            ) {
              if (
                f !== t.prev &&
                f !== t.next &&
                m(s.x, s.y, r.x, r.y, h.x, h.y, f.x, f.y) &&
                d(f.prev, f, f.next) >= 0
              )
                return !1;
              if (
                ((f = f.prevZ),
                p !== t.prev &&
                  p !== t.next &&
                  m(s.x, s.y, r.x, r.y, h.x, h.y, p.x, p.y) &&
                  d(p.prev, p, p.next) >= 0)
              )
                return !1;
              p = p.nextZ;
            }
            for (; f && f.z >= u; ) {
              if (
                f !== t.prev &&
                f !== t.next &&
                m(s.x, s.y, r.x, r.y, h.x, h.y, f.x, f.y) &&
                d(f.prev, f, f.next) >= 0
              )
                return !1;
              f = f.prevZ;
            }
            for (; p && p.z <= y; ) {
              if (
                p !== t.prev &&
                p !== t.next &&
                m(s.x, s.y, r.x, r.y, h.x, h.y, p.x, p.y) &&
                d(p.prev, p, p.next) >= 0
              )
                return !1;
              p = p.nextZ;
            }
            return !0;
          }
          function h(t, i, n) {
            var s = t;
            do {
              var r = s.prev,
                h = s.next.next;
              !g(r, h) &&
                T(r, s, s.next, h) &&
                L(r, h) &&
                L(h, r) &&
                (i.push(r.i / n),
                i.push(s.i / n),
                i.push(h.i / n),
                b(s),
                b(s.next),
                (s = t = h)),
                (s = s.next);
            } while (s !== t);
            return e(s);
          }
          function x(t, i, s, r, h, x) {
            var o = t;
            do {
              for (var l = o.next.next; l !== o.prev; ) {
                if (o.i !== l.i && v(o, l)) {
                  var a = A(o, l);
                  return (
                    (o = e(o, o.next)),
                    (a = e(a, a.next)),
                    n(o, i, s, r, h, x),
                    void n(a, i, s, r, h, x)
                  );
                }
                l = l.next;
              }
              o = o.next;
            } while (o !== t);
          }
          function o(t, n, s, r) {
            var h,
              x,
              o,
              a = [];
            for (h = 0, x = n.length; h < x; h++)
              (o = i(
                t,
                n[h] * r,
                h < x - 1 ? n[h + 1] * r : t.length,
                r,
                !1,
              )) === o.next && (o.steiner = !0),
                a.push(p(o));
            for (a.sort(l), h = 0; h < a.length; h++)
              s = e((s = u(a[h], s)), s.next);
            return s;
          }
          function l(t, i) {
            return t.x - i.x;
          }
          function a(t) {
            if (t.next.prev === t) return t;
            let i = t;
            for (;;) {
              const e = i.next;
              if (e.prev === i || e === i || e === t) break;
              i = e;
            }
            return i;
          }
          function u(t, i) {
            var n = (function (t, i) {
              var e,
                n = i,
                s = t.x,
                r = t.y,
                h = -1 / 0;
              do {
                if (r <= n.y && r >= n.next.y && n.next.y !== n.y) {
                  var x =
                    n.x + ((r - n.y) * (n.next.x - n.x)) / (n.next.y - n.y);
                  if (x <= s && x > h) {
                    if (((h = x), x === s)) {
                      if (r === n.y) return n;
                      if (r === n.next.y) return n.next;
                    }
                    e = n.x < n.next.x ? n : n.next;
                  }
                }
                n = n.next;
              } while (n !== i);
              if (!e) return null;
              if (s === h) return e;
              var o,
                l = e,
                a = e.x,
                u = e.y,
                f = 1 / 0;
              n = e;
              do {
                s >= n.x &&
                  n.x >= a &&
                  s !== n.x &&
                  m(r < u ? s : h, r, a, u, r < u ? h : s, r, n.x, n.y) &&
                  ((o = Math.abs(r - n.y) / (s - n.x)),
                  L(n, t) &&
                    (o < f ||
                      (o === f && (n.x > e.x || (n.x === e.x && y(e, n))))) &&
                    ((e = n), (f = o))),
                  (n = n.next);
              } while (n !== l);
              return e;
            })(t, i);
            if (!n) return i;
            var s = A(n, t),
              r = e(n, n.next);
            let h = a(s);
            return e(h, h.next), (r = a(r)), a(i === n ? r : i);
          }
          function y(t, i) {
            return d(t.prev, t, i.prev) < 0 && d(i.next, t, t.next) < 0;
          }
          function f(t, i, e, n) {
            var s = t;
            do {
              null === s.z && (s.z = c(s.x, s.y, i, e, n)),
                (s.prevZ = s.prev),
                (s.nextZ = s.next),
                (s = s.next);
            } while (s !== t);
            (s.prevZ.nextZ = null),
              (s.prevZ = null),
              (function (t) {
                var i,
                  e,
                  n,
                  s,
                  r,
                  h,
                  x,
                  o,
                  l = 1;
                do {
                  for (e = t, t = null, r = null, h = 0; e; ) {
                    for (
                      h++, n = e, x = 0, i = 0;
                      i < l && (x++, (n = n.nextZ));
                      i++
                    );
                    for (o = l; x > 0 || (o > 0 && n); )
                      0 !== x && (0 === o || !n || e.z <= n.z)
                        ? ((s = e), (e = e.nextZ), x--)
                        : ((s = n), (n = n.nextZ), o--),
                        r ? (r.nextZ = s) : (t = s),
                        (s.prevZ = r),
                        (r = s);
                    e = n;
                  }
                  (r.nextZ = null), (l *= 2);
                } while (h > 1);
              })(s);
          }
          function c(t, i, e, n, s) {
            return (
              (t =
                1431655765 &
                ((t =
                  858993459 &
                  ((t =
                    252645135 &
                    ((t = 16711935 & ((t = 32767 * (t - e) * s) | (t << 8))) |
                      (t << 4))) |
                    (t << 2))) |
                  (t << 1))) |
              ((i =
                1431655765 &
                ((i =
                  858993459 &
                  ((i =
                    252645135 &
                    ((i = 16711935 & ((i = 32767 * (i - n) * s) | (i << 8))) |
                      (i << 4))) |
                    (i << 2))) |
                  (i << 1))) <<
                1)
            );
          }
          function p(t) {
            var i = t,
              e = t;
            do {
              (i.x < e.x || (i.x === e.x && i.y < e.y)) && (e = i),
                (i = i.next);
            } while (i !== t);
            return e;
          }
          function m(t, i, e, n, s, r, h, x) {
            return (
              (s - h) * (i - x) - (t - h) * (r - x) >= 0 &&
              (t - h) * (n - x) - (e - h) * (i - x) >= 0 &&
              (e - h) * (r - x) - (s - h) * (n - x) >= 0
            );
          }
          function v(t, i) {
            return (
              t.next.i !== i.i &&
              t.prev.i !== i.i &&
              !(function (t, i) {
                var e = t;
                do {
                  if (
                    e.i !== t.i &&
                    e.next.i !== t.i &&
                    e.i !== i.i &&
                    e.next.i !== i.i &&
                    T(e, e.next, t, i)
                  )
                    return !0;
                  e = e.next;
                } while (e !== t);
                return !1;
              })(t, i) &&
              ((L(t, i) &&
                L(i, t) &&
                (function (t, i) {
                  var e = t,
                    n = !1,
                    s = (t.x + i.x) / 2,
                    r = (t.y + i.y) / 2;
                  do {
                    e.y > r != e.next.y > r &&
                      e.next.y !== e.y &&
                      s <
                        ((e.next.x - e.x) * (r - e.y)) / (e.next.y - e.y) +
                          e.x &&
                      (n = !n),
                      (e = e.next);
                  } while (e !== t);
                  return n;
                })(t, i) &&
                (d(t.prev, t, i.prev) || d(t, i.prev, i))) ||
                (g(t, i) &&
                  d(t.prev, t, t.next) > 0 &&
                  d(i.prev, i, i.next) > 0))
            );
          }
          function d(t, i, e) {
            return (i.y - t.y) * (e.x - i.x) - (i.x - t.x) * (e.y - i.y);
          }
          function g(t, i) {
            return t.x === i.x && t.y === i.y;
          }
          function T(t, i, e, n) {
            var s = w(d(t, i, e)),
              r = w(d(t, i, n)),
              h = w(d(e, n, t)),
              x = w(d(e, n, i));
            return (
              (s !== r && h !== x) ||
              !(0 !== s || !_(t, e, i)) ||
              !(0 !== r || !_(t, n, i)) ||
              !(0 !== h || !_(e, t, n)) ||
              !(0 !== x || !_(e, i, n))
            );
          }
          function _(t, i, e) {
            return (
              i.x <= Math.max(t.x, e.x) &&
              i.x >= Math.min(t.x, e.x) &&
              i.y <= Math.max(t.y, e.y) &&
              i.y >= Math.min(t.y, e.y)
            );
          }
          function w(t) {
            return t > 0 ? 1 : t < 0 ? -1 : 0;
          }
          function L(t, i) {
            return d(t.prev, t, t.next) < 0
              ? d(t, i, t.next) >= 0 && d(t, t.prev, i) >= 0
              : d(t, i, t.prev) < 0 || d(t, t.next, i) < 0;
          }
          function A(t, i) {
            var e = new B(t.i, t.x, t.y),
              n = new B(i.i, i.x, i.y),
              s = t.next,
              r = i.prev;
            return (
              (t.next = i),
              (i.prev = t),
              (e.next = s),
              (s.prev = e),
              (n.next = e),
              (e.prev = n),
              (r.next = n),
              (n.prev = r),
              n
            );
          }
          function R(t, i, e, n) {
            var s = new B(t, i, e);
            return (
              n
                ? ((s.next = n.next),
                  (s.prev = n),
                  (n.next.prev = s),
                  (n.next = s))
                : ((s.prev = s), (s.next = s)),
              s
            );
          }
          function b(t) {
            (t.next.prev = t.prev),
              (t.prev.next = t.next),
              t.prevZ && (t.prevZ.nextZ = t.nextZ),
              t.nextZ && (t.nextZ.prevZ = t.prevZ);
          }
          function B(t, i, e) {
            (this.i = t),
              (this.x = i),
              (this.y = e),
              (this.prev = null),
              (this.next = null),
              (this.z = null),
              (this.prevZ = null),
              (this.nextZ = null),
              (this.steiner = !1);
          }
          function U(t, i, e, n) {
            for (var s = 0, r = i, h = e - n; r < e; r += n)
              (s += (t[h] - t[r]) * (t[r + 1] + t[h + 1])), (h = r);
            return s;
          }
          return (
            (t.deviation = function (t, i, e, n) {
              var s = i && i.length,
                r = s ? i[0] * e : t.length,
                h = Math.abs(U(t, 0, r, e));
              if (s)
                for (var x = 0, o = i.length; x < o; x++) {
                  var l = i[x] * e,
                    a = x < o - 1 ? i[x + 1] * e : t.length;
                  h -= Math.abs(U(t, l, a, e));
                }
              var u = 0;
              for (x = 0; x < n.length; x += 3) {
                var y = n[x] * e,
                  f = n[x + 1] * e,
                  c = n[x + 2] * e;
                u += Math.abs(
                  (t[y] - t[c]) * (t[f + 1] - t[y + 1]) -
                    (t[y] - t[f]) * (t[c + 1] - t[y + 1]),
                );
              }
              return 0 === h && 0 === u ? 0 : Math.abs((u - h) / h);
            }),
            (t.flatten = function (t) {
              for (
                var i = t[0][0].length,
                  e = { vertices: [], holes: [], dimensions: i },
                  n = 0,
                  s = 0;
                s < t.length;
                s++
              ) {
                for (var r = 0; r < t[s].length; r++)
                  for (var h = 0; h < i; h++) e.vertices.push(t[s][r][h]);
                s > 0 && ((n += t[s - 1].length), e.holes.push(n));
              }
              return e;
            }),
            t
          );
        }),
        void 0 !== (r = s()) && (n.exports = r);
      const x = h.exports;
    },
    79087: (t, i, e) => {
      e.d(i, { Z: () => R });
      const n = [
          ['(', ')'],
          [')', '('],
          ['<', '>'],
          ['>', '<'],
          ['[', ']'],
          [']', '['],
          ['{', '}'],
          ['}', '{'],
          ['«', '»'],
          ['»', '«'],
          ['‹', '›'],
          ['›', '‹'],
          ['⁽', '⁾'],
          ['⁾', '⁽'],
          ['₍', '₎'],
          ['₎', '₍'],
          ['≤', '≥'],
          ['≥', '≤'],
          ['〈', '〉'],
          ['〉', '〈'],
          ['﹙', '﹚'],
          ['﹚', '﹙'],
          ['﹛', '﹜'],
          ['﹜', '﹛'],
          ['﹝', '﹞'],
          ['﹞', '﹝'],
          ['﹤', '﹥'],
          ['﹥', '﹤'],
        ],
        s = ['آ', 'أ', 'إ', 'ا'],
        r = ['ﻵ', 'ﻷ', 'ﻹ', 'ﻻ'],
        h = ['ﻶ', 'ﻸ', 'ﻺ', 'ﻼ'],
        x = [
          'ا',
          'ب',
          'ت',
          'ث',
          'ج',
          'ح',
          'خ',
          'د',
          'ذ',
          'ر',
          'ز',
          'س',
          'ش',
          'ص',
          'ض',
          'ط',
          'ظ',
          'ع',
          'غ',
          'ف',
          'ق',
          'ك',
          'ل',
          'م',
          'ن',
          'ه',
          'و',
          'ي',
          'إ',
          'أ',
          'آ',
          'ة',
          'ى',
          'ل',
          'م',
          'ن',
          'ه',
          'و',
          'ي',
          'إ',
          'أ',
          'آ',
          'ة',
          'ى',
          'ی',
          'ئ',
          'ؤ',
        ],
        o = [
          'ﺍ',
          'ﺏ',
          'ﺕ',
          'ﺙ',
          'ﺝ',
          'ﺡ',
          'ﺥ',
          'ﺩ',
          'ﺫ',
          'ﺭ',
          'ﺯ',
          'ﺱ',
          'ﺵ',
          'ﺹ',
          'ﺽ',
          'ﻁ',
          'ﻅ',
          'ﻉ',
          'ﻍ',
          'ﻑ',
          'ﻕ',
          'ﻙ',
          'ﻝ',
          'ﻡ',
          'ﻥ',
          'ﻩ',
          'ﻭ',
          'ﻱ',
          'ﺇ',
          'ﺃ',
          'ﺁ',
          'ﺓ',
          'ﻯ',
          'ﯼ',
          'ﺉ',
          'ﺅ',
          'ﹰ',
          'ﹲ',
          'ﹴ',
          'ﹶ',
          'ﹸ',
          'ﹺ',
          'ﹼ',
          'ﹾ',
          'ﺀ',
          'ﺉ',
          'ﺅ',
        ],
        l = [
          'ﺎ',
          'ﺐ',
          'ﺖ',
          'ﺚ',
          'ﺞ',
          'ﺢ',
          'ﺦ',
          'ﺪ',
          'ﺬ',
          'ﺮ',
          'ﺰ',
          'ﺲ',
          'ﺶ',
          'ﺺ',
          'ﺾ',
          'ﻂ',
          'ﻆ',
          'ﻊ',
          'ﻎ',
          'ﻒ',
          'ﻖ',
          'ﻚ',
          'ﻞ',
          'ﻢ',
          'ﻦ',
          'ﻪ',
          'ﻮ',
          'ﻲ',
          'ﺈ',
          'ﺄ',
          'ﺂ',
          'ﺔ',
          'ﻰ',
          'ﯽ',
          'ﺊ',
          'ﺆ',
          'ﹰ',
          'ﹲ',
          'ﹴ',
          'ﹶ',
          'ﹸ',
          'ﹺ',
          'ﹼ',
          'ﹾ',
          'ﺀ',
          'ﺊ',
          'ﺆ',
        ],
        a = [
          'ﺎ',
          'ﺒ',
          'ﺘ',
          'ﺜ',
          'ﺠ',
          'ﺤ',
          'ﺨ',
          'ﺪ',
          'ﺬ',
          'ﺮ',
          'ﺰ',
          'ﺴ',
          'ﺸ',
          'ﺼ',
          'ﻀ',
          'ﻄ',
          'ﻈ',
          'ﻌ',
          'ﻐ',
          'ﻔ',
          'ﻘ',
          'ﻜ',
          'ﻠ',
          'ﻤ',
          'ﻨ',
          'ﻬ',
          'ﻮ',
          'ﻴ',
          'ﺈ',
          'ﺄ',
          'ﺂ',
          'ﺔ',
          'ﻰ',
          'ﯿ',
          'ﺌ',
          'ﺆ',
          'ﹱ',
          'ﹲ',
          'ﹴ',
          'ﹷ',
          'ﹹ',
          'ﹻ',
          'ﹽ',
          'ﹿ',
          'ﺀ',
          'ﺌ',
          'ﺆ',
        ],
        u = [
          'ﺍ',
          'ﺑ',
          'ﺗ',
          'ﺛ',
          'ﺟ',
          'ﺣ',
          'ﺧ',
          'ﺩ',
          'ﺫ',
          'ﺭ',
          'ﺯ',
          'ﺳ',
          'ﺷ',
          'ﺻ',
          'ﺿ',
          'ﻃ',
          'ﻇ',
          'ﻋ',
          'ﻏ',
          'ﻓ',
          'ﻗ',
          'ﻛ',
          'ﻟ',
          'ﻣ',
          'ﻧ',
          'ﻫ',
          'ﻭ',
          'ﻳ',
          'ﺇ',
          'ﺃ',
          'ﺁ',
          'ﺓ',
          'ﻯ',
          'ﯾ',
          'ﺋ',
          'ﺅ',
          'ﹰ',
          'ﹲ',
          'ﹴ',
          'ﹶ',
          'ﹸ',
          'ﹺ',
          'ﹼ',
          'ﹾ',
          'ﺀ',
          'ﺋ',
          'ﺅ',
        ],
        y = ['ء', 'آ', 'أ', 'ؤ', 'إ', 'ا', 'ة', 'د', 'ذ', 'ر', 'ز', 'و', 'ى'],
        f = [
          'ً',
          'ً',
          'ٌ',
          '؟',
          'ٍ',
          '؟',
          'َ',
          'َ',
          'ُ',
          'ُ',
          'ِ',
          'ِ',
          'ّ',
          'ّ',
          'ْ',
          'ْ',
          'ء',
          'آ',
          'آ',
          'أ',
          'أ',
          'ؤ',
          'ؤ',
          'إ',
          'إ',
          'ئ',
          'ئ',
          'ئ',
          'ئ',
          'ا',
          'ا',
          'ب',
          'ب',
          'ب',
          'ب',
          'ة',
          'ة',
          'ت',
          'ت',
          'ت',
          'ت',
          'ث',
          'ث',
          'ث',
          'ث',
          'ج',
          'ج',
          'ج',
          'ج',
          'ح',
          'ح',
          'ح',
          'ح',
          'خ',
          'خ',
          'خ',
          'خ',
          'د',
          'د',
          'ذ',
          'ذ',
          'ر',
          'ر',
          'ز',
          'ز',
          'س',
          'س',
          'س',
          'س',
          'ش',
          'ش',
          'ش',
          'ش',
          'ص',
          'ص',
          'ص',
          'ص',
          'ض',
          'ض',
          'ض',
          'ض',
          'ط',
          'ط',
          'ط',
          'ط',
          'ظ',
          'ظ',
          'ظ',
          'ظ',
          'ع',
          'ع',
          'ع',
          'ع',
          'غ',
          'غ',
          'غ',
          'غ',
          'ف',
          'ف',
          'ف',
          'ف',
          'ق',
          'ق',
          'ق',
          'ق',
          'ك',
          'ك',
          'ك',
          'ك',
          'ل',
          'ل',
          'ل',
          'ل',
          'م',
          'م',
          'م',
          'م',
          'ن',
          'ن',
          'ن',
          'ن',
          'ه',
          'ه',
          'ه',
          'ه',
          'و',
          'و',
          'ى',
          'ى',
          'ي',
          'ي',
          'ي',
          'ي',
          'ﻵ',
          'ﻶ',
          'ﻷ',
          'ﻸ',
          'ﻹ',
          'ﻺ',
          'ﻻ',
          'ﻼ',
          '؟',
          '؟',
          '؟',
        ],
        c = ['ء', 'ف'],
        p = ['غ', 'ي'],
        m = [
          [0, 3, 0, 1, 0, 0, 0],
          [0, 3, 0, 1, 2, 2, 0],
          [0, 3, 0, 17, 2, 0, 1],
          [0, 3, 5, 5, 4, 1, 0],
          [0, 3, 21, 21, 4, 0, 1],
          [0, 3, 5, 5, 4, 2, 0],
        ],
        v = [
          [2, 0, 1, 1, 0, 1, 0],
          [2, 0, 1, 1, 0, 2, 0],
          [2, 0, 2, 1, 3, 2, 0],
          [2, 0, 2, 33, 3, 1, 1],
        ],
        d = 10,
        g = 11,
        T = 12,
        _ = 18,
        w = [
          'UBAT_L',
          'UBAT_R',
          'UBAT_EN',
          'UBAT_AN',
          'UBAT_ON',
          'UBAT_B',
          'UBAT_S',
          'UBAT_AL',
          'UBAT_WS',
          'UBAT_CS',
          'UBAT_ES',
          'UBAT_ET',
          'UBAT_NSM',
          'UBAT_LRE',
          'UBAT_RLE',
          'UBAT_PDF',
          'UBAT_LRO',
          'UBAT_RLO',
          'UBAT_BN',
        ],
        L = [
          100, 0, 0, 0, 0, 101, 102, 103, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 4, 4, 4, 0, 4, 0, 4, 0, 4, 4, 4,
          0, 0, 4, 4, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
          4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
          4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
          4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
          4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4,
          4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
          4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 4, 4, 0, 0, 4, 4, 0, 0, 4, 4, 4,
          4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0,
          105, 7, 7, 106, 107,
        ],
        A = [
          [
            _,
            _,
            _,
            _,
            _,
            _,
            _,
            _,
            _,
            6,
            5,
            6,
            8,
            5,
            _,
            _,
            _,
            _,
            _,
            _,
            _,
            _,
            _,
            _,
            _,
            _,
            _,
            _,
            5,
            5,
            5,
            6,
            8,
            4,
            4,
            g,
            g,
            g,
            4,
            4,
            4,
            4,
            4,
            d,
            9,
            d,
            9,
            9,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            9,
            4,
            4,
            4,
            4,
            4,
            4,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            4,
            4,
            4,
            4,
            4,
            4,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            4,
            4,
            4,
            4,
            _,
            _,
            _,
            _,
            _,
            _,
            5,
            _,
            _,
            _,
            _,
            _,
            _,
            _,
            _,
            _,
            _,
            _,
            _,
            _,
            _,
            _,
            _,
            _,
            _,
            _,
            _,
            _,
            _,
            _,
            _,
            _,
            _,
            9,
            4,
            g,
            g,
            g,
            g,
            4,
            4,
            4,
            4,
            0,
            4,
            4,
            _,
            4,
            4,
            g,
            g,
            2,
            2,
            4,
            0,
            4,
            4,
            4,
            2,
            0,
            4,
            4,
            4,
            4,
            4,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            4,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            4,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
          ],
          [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            4,
            4,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            4,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            4,
            0,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            1,
            T,
            1,
            T,
            T,
            1,
            T,
            T,
            1,
            T,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            4,
            4,
            4,
            4,
            4,
            1,
            1,
            1,
            1,
            1,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
          ],
          [
            3,
            3,
            3,
            3,
            4,
            4,
            4,
            4,
            7,
            g,
            g,
            7,
            9,
            7,
            4,
            4,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            7,
            4,
            4,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            g,
            3,
            3,
            7,
            7,
            7,
            T,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            3,
            4,
            T,
            T,
            T,
            T,
            T,
            T,
            7,
            7,
            T,
            T,
            4,
            T,
            T,
            T,
            T,
            7,
            7,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            7,
            7,
            7,
            7,
            7,
            7,
          ],
          [
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            4,
            7,
            7,
            T,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            4,
            4,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            7,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            1,
            1,
            4,
            4,
            4,
            4,
            1,
            4,
            4,
            4,
            4,
            4,
          ],
          [
            8,
            8,
            8,
            8,
            8,
            8,
            8,
            8,
            8,
            8,
            8,
            _,
            _,
            _,
            0,
            1,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            8,
            5,
            13,
            14,
            15,
            16,
            17,
            9,
            g,
            g,
            g,
            g,
            g,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            9,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            8,
            _,
            _,
            _,
            _,
            _,
            4,
            4,
            4,
            4,
            4,
            _,
            _,
            _,
            _,
            _,
            _,
            2,
            0,
            4,
            4,
            2,
            2,
            2,
            2,
            2,
            2,
            d,
            d,
            4,
            4,
            4,
            0,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            d,
            d,
            4,
            4,
            4,
            4,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            4,
            4,
            4,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            g,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
          ],
          [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            0,
            0,
            0,
            0,
            0,
            4,
            4,
            4,
            4,
            4,
            1,
            T,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            d,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            4,
            1,
            1,
            1,
            1,
            1,
            4,
            1,
            4,
            1,
            1,
            4,
            1,
            1,
            4,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
          ],
          [
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            T,
            T,
            T,
            T,
            T,
            T,
            T,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            9,
            4,
            9,
            4,
            4,
            9,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            g,
            4,
            4,
            d,
            d,
            4,
            4,
            4,
            4,
            4,
            g,
            g,
            4,
            4,
            4,
            4,
            4,
            7,
            7,
            7,
            7,
            7,
            4,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            4,
            4,
            _,
          ],
          [
            4,
            4,
            4,
            g,
            g,
            g,
            4,
            4,
            4,
            4,
            4,
            d,
            9,
            d,
            9,
            9,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            9,
            4,
            4,
            4,
            4,
            4,
            4,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            4,
            4,
            4,
            4,
            4,
            4,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            4,
            4,
            4,
            0,
            0,
            0,
            0,
            0,
            0,
            4,
            4,
            0,
            0,
            0,
            0,
            0,
            0,
            4,
            4,
            0,
            0,
            0,
            0,
            0,
            0,
            4,
            4,
            0,
            0,
            0,
            4,
            4,
            4,
            g,
            g,
            4,
            4,
            4,
            g,
            g,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
          ],
        ];
      class R {
        constructor() {
          (this.inputFormat = 'ILYNN'),
            (this.outputFormat = 'VLNNN'),
            (this.sourceToTarget = []),
            (this.targetToSource = []),
            (this.levels = []);
        }
        bidiTransform(t, i, e) {
          if (((this.sourceToTarget = []), (this.targetToSource = []), !t))
            return '';
          if (
            ((function (t, i, e) {
              (Y = []), (Q = []);
              for (let n = 0; n < e; n++) (t[n] = n), (i[n] = n), (Y[n] = n);
            })(this.sourceToTarget, this.targetToSource, t.length),
            !this.checkParameters(i, e))
          )
            return t;
          (i = this.inputFormat), (e = this.outputFormat);
          let n = t;
          const x = $,
            a = j(i.charAt(1)),
            y = j(e.charAt(1)),
            c = ('I' === i.charAt(0) ? 'L' : i.charAt(0)) + a,
            p = ('I' === e.charAt(0) ? 'L' : e.charAt(0)) + y,
            m = i.charAt(2) + e.charAt(2);
          (x.defInFormat = c), (x.defOutFormat = p), (x.defSwap = m);
          const v = b(t, c, p, m, x);
          let d = !1;
          return (
            'R' === e.charAt(1)
              ? (d = !0)
              : ('C' !== e.charAt(1) && 'D' !== e.charAt(1)) ||
                (d = 'rtl' === this.checkContextual(v)),
            (this.sourceToTarget = Y),
            (this.targetToSource = (function (t) {
              const i = new Array(t.length);
              for (let e = 0; e < t.length; e++) i[t[e]] = e;
              return i;
            })(this.sourceToTarget)),
            (q = this.targetToSource),
            (n =
              i.charAt(3) === e.charAt(3)
                ? v
                : 'S' === e.charAt(3)
                ? (function (t, i, e) {
                    if (0 === i.length) return '';
                    void 0 === t && (t = !0), void 0 === e && (e = !0);
                    const n = (i = String(i)).split('');
                    let s = 0,
                      x = 1,
                      a = n.length;
                    t || ((s = n.length - 1), (x = -1), (a = 1));
                    const y = (function (t, i, e, n, s) {
                      let x = 0;
                      const a = [];
                      let y = 0;
                      for (let f = i; f * e < n; f += e)
                        if (F(t[f]) || O(t[f])) {
                          if ('ل' === t[f] && I(t, f + e, e, n)) {
                            (t[f] = X(t[f + e], 0 === x ? r : h)),
                              (f += e),
                              H(t, f, e, n),
                              s && ((a[y] = f), y++),
                              (x = 0);
                            continue;
                          }
                          const i = t[f];
                          1 === x
                            ? (t[f] = S(t, f + e, e, n) ? D(t[f]) : z(t[f], l))
                            : !0 === S(t, f + e, e, n)
                            ? (t[f] = z(t[f], u))
                            : (t[f] = z(t[f], o)),
                            O(i) || (x = 1),
                            !0 === C(i) && (x = 0);
                        } else x = 0;
                      return a;
                    })(n, s, x, a, e);
                    let f = '';
                    for (let i = 0; i < n.length; i++)
                      e && M(y, y.length, i) > -1
                        ? (W(q, i, !t, -1), Y.splice(i, 1))
                        : (f += n[i]);
                    return f;
                  })(d, v, !0)
                : (function (t, i, e) {
                    if (0 === t.length) return '';
                    void 0 === e && (e = !0), void 0 === i && (i = !0);
                    let n = '';
                    const r = (t = String(t)).split('');
                    for (let h = 0; h < t.length; h++) {
                      let x = !1;
                      if (r[h] >= 'ﹰ' && r[h] < '\ufeff') {
                        const o = t.charCodeAt(h);
                        r[h] >= 'ﻵ' && r[h] <= 'ﻼ'
                          ? (i
                              ? (h > 0 && e && ' ' === r[h - 1]
                                  ? (n = n.substring(0, n.length - 1) + 'ل')
                                  : ((n += 'ل'), (x = !0)),
                                (n += s[(o - 65269) / 2]))
                              : ((n += s[(o - 65269) / 2]),
                                (n += 'ل'),
                                h + 1 < t.length && e && ' ' === r[h + 1]
                                  ? h++
                                  : (x = !0)),
                            x && (W(q, h, !0, 1), Y.splice(h, 0, Y[h])))
                          : (n += f[o - 65136]);
                      } else n += r[h];
                    }
                    return n;
                  })(v, d, !0)),
            (this.sourceToTarget = Y),
            (this.targetToSource = q),
            (this.levels = Q),
            n
          );
        }
        _inputFormatSetter(t) {
          if (!it.test(t))
            throw new Error(
              'dojox/string/BidiEngine: the bidi layout string is wrong!',
            );
          this.inputFormat = t;
        }
        _outputFormatSetter(t) {
          if (!it.test(t))
            throw new Error(
              'dojox/string/BidiEngine: the bidi layout string is wrong!',
            );
          this.outputFormat = t;
        }
        checkParameters(t, i) {
          return (
            t ? this._inputFormatSetter(t) : (t = this.inputFormat),
            i ? this._outputFormatSetter(i) : (i = this.outputFormat),
            t !== i
          );
        }
        checkContextual(t) {
          let i = B(t);
          if ('ltr' !== i && 'rtl' !== i) {
            try {
              i = document.dir.toLowerCase();
            } catch (t) {}
            'ltr' !== i && 'rtl' !== i && (i = 'ltr');
          }
          return i;
        }
        hasBidiChar(t) {
          return et.test(t);
        }
      }
      function b(t, i, e, n, s) {
        const r = (function (t, i, e) {
          if (
            (void 0 === i.inFormat && (i.inFormat = e.defInFormat),
            void 0 === i.outFormat && (i.outFormat = e.defOutFormat),
            void 0 === i.swap && (i.swap = e.defSwap),
            i.inFormat === i.outFormat)
          )
            return i;
          const n = i.inFormat.substring(0, 1),
            s = i.outFormat.substring(0, 1);
          let r,
            h = i.inFormat.substring(1, 4),
            x = i.outFormat.substring(1, 4);
          return (
            'C' === h.charAt(0) &&
              ((r = B(t)),
              (h =
                'ltr' === r || 'rtl' === r
                  ? r.toUpperCase()
                  : 'L' === i.inFormat.charAt(2)
                  ? 'LTR'
                  : 'RTL'),
              (i.inFormat = n + h)),
            'C' === x.charAt(0) &&
              ((r = B(t)),
              'rtl' === r
                ? (x = 'RTL')
                : 'ltr' === r
                ? ((r = (function (t) {
                    const i = t.split('');
                    return i.reverse(), B(i.join(''));
                  })(t)),
                  (x = r.toUpperCase()))
                : (x = 'L' === i.outFormat.charAt(2) ? 'LTR' : 'RTL'),
              (i.outFormat = s + x)),
            i
          );
        })(t, { inFormat: i, outFormat: e, swap: n }, s);
        if (r.inFormat === r.outFormat) return t;
        (i = r.inFormat), (e = r.outFormat), (n = r.swap);
        const h = i.substring(0, 1),
          x = i.substring(1, 4),
          o = e.substring(0, 1),
          l = e.substring(1, 4);
        if (
          ((s.inFormat = i),
          (s.outFormat = e),
          (s.swap = n),
          'L' === h && 'VLTR' === e)
        ) {
          if ('LTR' === x) return (s.dir = K), U(t, s);
          if ('RTL' === x) return (s.dir = tt), U(t, s);
        }
        if ('V' === h && 'V' === o)
          return (s.dir = 'RTL' === x ? tt : K), V(t, s);
        if ('L' === h && 'VRTL' === e)
          return (
            'LTR' === x
              ? ((s.dir = K), (t = U(t, s)))
              : ((s.dir = tt), (t = U(t, s))),
            V(t)
          );
        if ('VLTR' === i && 'LLTR' === e) return (s.dir = K), U(t, s);
        if ('V' === h && 'L' === o && x !== l)
          return (
            (t = V(t)),
            'RTL' === x
              ? b(t, 'LLTR', 'VLTR', n, s)
              : b(t, 'LRTL', 'VRTL', n, s)
          );
        if ('VRTL' === i && 'LRTL' === e) return b(t, 'LRTL', 'VRTL', n, s);
        if ('L' === h && 'L' === o) {
          const i = s.swap;
          return (
            (s.swap = i.substr(0, 1) + 'N'),
            'RTL' === x
              ? ((s.dir = tt),
                (t = U(t, s)),
                (s.swap = 'N' + i.substr(1, 2)),
                (s.dir = K),
                (t = U(t, s)))
              : ((s.dir = K),
                (t = U(t, s)),
                (s.swap = 'N' + i.substr(1, 2)),
                (t = b(t, 'VLTR', 'LRTL', s.swap, s))),
            t
          );
        }
        return t;
      }
      function B(t) {
        const i =
          /[A-Za-z\u05d0-\u065f\u066a-\u06ef\u06fa-\u07ff\ufb1d-\ufdff\ufe70-\ufefc]/.exec(
            t,
          );
        return i ? (i[0] <= 'z' ? 'ltr' : 'rtl') : '';
      }
      function U(t, i) {
        const e = t.split(''),
          n = [];
        return (
          E(e, n, i),
          (function (t, i, e) {
            if (0 !== e.hiLevel && e.swap.substr(0, 1) !== e.swap.substr(1, 2))
              for (let e = 0; e < t.length; e++) 1 === i[e] && (t[e] = k(t[e]));
          })(e, n, i),
          P(2, e, n, i),
          P(1, e, n, i),
          (Q = n),
          e.join('')
        );
      }
      function E(t, i, e) {
        const n = t.length,
          s = e.dir ? v : m;
        let r = 0,
          h = -1;
        const x = [],
          o = [];
        (e.hiLevel = e.dir),
          (e.lastArabic = !1),
          (e.hasUbatAl = !1),
          (e.hasUbatB = !1),
          (e.hasUbatS = !1);
        for (let i = 0; i < n; i++) x[i] = N(t[i]);
        for (let l = 0; l < n; l++) {
          const n = r,
            a = Z(t, x, o, l, e);
          (o[l] = a), (r = s[n][a]);
          const u = 240 & r;
          r &= 15;
          const y = s[r][G];
          if (((i[l] = y), u > 0))
            if (16 === u) {
              for (let t = h; t < l; t++) i[t] = 1;
              h = -1;
            } else h = -1;
          if (s[r][J]) -1 === h && (h = l);
          else if (h > -1) {
            for (let t = h; t < l; t++) i[t] = y;
            h = -1;
          }
          5 === x[l] && (i[l] = 0), (e.hiLevel |= y);
        }
        e.hasUbatS &&
          (function (t, i, e, n) {
            for (let s = 0; s < e; s++)
              if (6 === t[s]) {
                i[s] = n.dir;
                for (let e = s - 1; e >= 0 && 8 === t[e]; e--) i[e] = n.dir;
              }
          })(x, i, n, e);
      }
      function N(t) {
        const i = t.charCodeAt(0),
          e = L[i >> 8];
        return e < 100 ? e : A[e - 100][255 & i];
      }
      function V(t, i) {
        const e = t.split('');
        if (i) {
          const t = [];
          E(e, t, i), (Q = t);
        }
        return e.reverse(), Y.reverse(), e.join('');
      }
      function M(t, i, e) {
        for (let n = 0; n < i; n++) if (t[n] === e) return n;
        return -1;
      }
      function F(t) {
        for (let i = 0; i < c.length; i++)
          if (t >= c[i] && t <= p[i]) return !0;
        return !1;
      }
      function S(t, i, e, n) {
        for (; i * e < n && O(t[i]); ) i += e;
        return !!(i * e < n && F(t[i]));
      }
      function I(t, i, e, n) {
        for (; i * e < n && O(t[i]); ) i += e;
        let r = ' ';
        if (!(i * e < n)) return !1;
        r = t[i];
        for (let t = 0; t < s.length; t++) if (s[t] === r) return !0;
        return !1;
      }
      function P(t, i, e, n) {
        if (n.hiLevel < t) return;
        if (1 === t && n.dir === tt && !n.hasUbatB)
          return i.reverse(), void Y.reverse();
        const s = i.length;
        let r,
          h,
          x,
          o,
          l,
          a = 0;
        for (; a < s; ) {
          if (e[a] >= t) {
            for (r = a + 1; r < s && e[r] >= t; ) r++;
            for (h = a, x = r - 1; h < x; h++, x--)
              (o = i[h]),
                (i[h] = i[x]),
                (i[x] = o),
                (l = Y[h]),
                (Y[h] = Y[x]),
                (Y[x] = l);
            a = r;
          }
          a++;
        }
      }
      function Z(t, i, e, n, s) {
        const r = i[n];
        return {
          UBAT_L: () => ((s.lastArabic = !1), 0),
          UBAT_R: () => ((s.lastArabic = !1), 1),
          UBAT_ON: () => 4,
          UBAT_AN: () => 3,
          UBAT_EN: () => (s.lastArabic ? 3 : 2),
          UBAT_AL: () => ((s.lastArabic = !0), (s.hasUbatAl = !0), 1),
          UBAT_WS: () => 4,
          UBAT_CS: () => {
            let t, r;
            return n < 1 ||
              n + 1 >= i.length ||
              (2 !== (t = e[n - 1]) && 3 !== t) ||
              (2 !== (r = i[n + 1]) && 3 !== r)
              ? 4
              : (s.lastArabic && (r = 3), r === t ? r : 4);
          },
          UBAT_ES: () =>
            2 === (n > 0 ? e[n - 1] : 5) && n + 1 < i.length && 2 === i[n + 1]
              ? 2
              : 4,
          UBAT_ET: () => {
            if (n > 0 && 2 === e[n - 1]) return 2;
            if (s.lastArabic) return 4;
            let t = n + 1;
            const r = i.length;
            for (; t < r && i[t] === g; ) t++;
            return t < r && 2 === i[t] ? 2 : 4;
          },
          UBAT_NSM: () => {
            if ('VLTR' === s.inFormat) {
              const e = i.length;
              let s = n + 1;
              for (; s < e && i[s] === T; ) s++;
              if (s < e) {
                const e = t[n].charCodeAt[0],
                  r = (e >= 1425 && e <= 2303) || 64286 === e,
                  h = i[s];
                if (r && (1 === h || 7 === h)) return 1;
              }
            }
            return n < 1 || 5 === i[n - 1] ? 4 : e[n - 1];
          },
          UBAT_B: () => ((s.lastArabic = !0), (s.hasUbatB = !0), s.dir),
          UBAT_S: () => ((s.hasUbatS = !0), 4),
          UBAT_LRE: () => ((s.lastArabic = !1), 4),
          UBAT_RLE: () => ((s.lastArabic = !1), 4),
          UBAT_LRO: () => ((s.lastArabic = !1), 4),
          UBAT_RLO: () => ((s.lastArabic = !1), 4),
          UBAT_PDF: () => ((s.lastArabic = !1), 4),
          UBAT_BN: () => 4,
        }[w[r]]();
      }
      function k(t) {
        let i,
          e = 0,
          s = n.length - 1;
        for (; e <= s; )
          if (((i = Math.floor((e + s) / 2)), t < n[i][0])) s = i - 1;
          else {
            if (!(t > n[i][0])) return n[i][1];
            e = i + 1;
          }
        return t;
      }
      function C(t) {
        for (let i = 0; i < y.length; i++) if (y[i] === t) return !0;
        return !1;
      }
      function D(t) {
        for (let i = 0; i < x.length; i++) if (t === x[i]) return a[i];
        return t;
      }
      function z(t, i) {
        for (let e = 0; e < x.length; e++) if (t === x[e]) return i[e];
        return t;
      }
      function O(t) {
        return t >= 'ً' && t <= 'ٕ';
      }
      function j(t) {
        return 'L' === t
          ? 'LTR'
          : 'R' === t
          ? 'RTL'
          : 'C' === t
          ? 'CLR'
          : 'D' === t
          ? 'CRL'
          : '';
      }
      function H(t, i, e, n) {
        for (; i * e < n && O(t[i]); ) i += e;
        return i * e < n && ((t[i] = ' '), !0);
      }
      function X(t, i) {
        for (let e = 0; e < s.length; e++) if (t === s[e]) return i[e];
        return t;
      }
      function W(t, i, e, n) {
        for (let s = 0; s < t.length; s++)
          (t[s] > i || (!e && t[s] === i)) && (t[s] += n);
      }
      let Y = [],
        q = [],
        Q = [];
      const $ = {
          dir: 0,
          defInFormat: 'LLTR',
          defoutFormat: 'VLTR',
          defSwap: 'YN',
          inFormat: 'LLTR',
          outFormat: 'VLTR',
          swap: 'YN',
          hiLevel: 0,
          lastArabic: !1,
          hasUbatAl: !1,
          hasBlockSep: !1,
          hasSegSep: !1,
          defOutFormat: '',
        },
        G = 5,
        J = 6,
        K = 0,
        tt = 1,
        it = /^[(I|V)][(L|R|C|D)][(Y|N)][(S|N)][N]$/,
        et = /[\u0591-\u06ff\ufb1d-\ufefc]/;
    },
    65390: (t, i, e) => {
      e.d(i, { j: () => x, b: () => o });
      var n = e(99880),
        s = e(80442);
      let r = null,
        h = null;
      async function x() {
        return (
          r ||
            (r = (async function () {
              const t = (0, s.Z)('esri-csp-restrictions')
                ? await e
                    .e(3852)
                    .then(e.bind(e, 43852))
                    .then((t) => t.l)
                : await e
                    .e(4358)
                    .then(e.bind(e, 84358))
                    .then((t) => t.l);
              h = await t.load({
                locateFile: () =>
                  (0, n.V)('esri/core/libs/libtess/libtess.wasm'),
              });
            })()),
          r
        );
      }
      function o(t, i) {
        const e = Math.max(t.length, 128e3);
        return h.triangulate(t, i, e);
      }
    },
    55987: (t, i, e) => {
      e.d(i, { vX: () => x, s5: () => h, Or: () => r }),
        Number.POSITIVE_INFINITY;
      const n = 128 / Math.PI;
      function s(t, i) {
        return (t %= i) >= 0 ? t : t + i;
      }
      function r(t) {
        return s(t * n, 256);
      }
      function h(t) {
        return s(0.7111111111111111 * t, 256);
      }
      function x(t, i, e) {
        return (t >= i && t <= e) || (t >= e && t <= i);
      }
      Math.LN2;
    },
    87893: (t, i, e) => {
      e.d(i, { Z: () => n });
      class n {
        constructor(t = 0, i = 0, e = 0, n = 0) {
          (this.x = t), (this.y = i), (this.width = e), (this.height = n);
        }
        get isEmpty() {
          return this.width <= 0 || this.height <= 0;
        }
        union(t) {
          (this.x = Math.min(this.x, t.x)),
            (this.y = Math.min(this.y, t.y)),
            (this.width = Math.max(this.width, t.width)),
            (this.height = Math.max(this.height, t.height));
        }
      }
    },
    31294: (t, i, e) => {
      e.d(i, { I: () => a, b: () => l });
      var n,
        s,
        r = e(16534),
        h = e(35362),
        x = e(55987);
      class o {
        constructor(t, i, e) {
          (this.ratio = t), (this.x = i), (this.y = e);
        }
      }
      class l {
        constructor(t, i, e, n = 8, s = 8) {
          (this.lines = []),
            (this.starts = []),
            (this.validateTessellation = !0),
            (this.pixelRatio = n),
            (this.pixelMargin = s),
            (this.tileSize = r.I_ * n),
            (this.dz = t),
            (this.yPos = i),
            (this.xPos = e);
        }
        setPixelMargin(t) {
          t !== this.pixelMargin &&
            ((this.pixelMargin = t), this.setExtent(this._extent));
        }
        setExtent(t) {
          (this._extent = t),
            (this.finalRatio = (this.tileSize / t) * (1 << this.dz));
          let i = this.pixelRatio * this.pixelMargin;
          i /= this.finalRatio;
          const e = t >> this.dz;
          i > e && (i = e),
            (this.margin = i),
            (this.xmin = e * this.xPos - i),
            (this.ymin = e * this.yPos - i),
            (this.xmax = this.xmin + e + 2 * i),
            (this.ymax = this.ymin + e + 2 * i);
        }
        reset(t) {
          (this.type = t),
            (this.lines = []),
            (this.starts = []),
            (this.line = null),
            (this.start = 0);
        }
        moveTo(t, i) {
          this._pushLine(),
            (this._prevIsIn = this._isIn(t, i)),
            this._moveTo(t, i, this._prevIsIn),
            (this._prevPt = new h.E(t, i)),
            (this._firstPt = new h.E(t, i)),
            (this._dist = 0);
        }
        lineTo(t, i) {
          const e = this._isIn(t, i),
            n = new h.E(t, i),
            s = h.E.distance(this._prevPt, n);
          let r, x, l, a, u, y, f, c;
          if (e)
            this._prevIsIn
              ? this._lineTo(t, i, !0)
              : ((r = this._prevPt),
                (x = n),
                (l = this._intersect(x, r)),
                (this.start = this._dist + s * (1 - this._r)),
                this._lineTo(l.x, l.y, !0),
                this._lineTo(x.x, x.y, !0));
          else if (this._prevIsIn)
            (x = this._prevPt),
              (r = n),
              (l = this._intersect(x, r)),
              this._lineTo(l.x, l.y, !0),
              this._lineTo(r.x, r.y, !1);
          else {
            const t = this._prevPt,
              i = n;
            if (
              (t.x <= this.xmin && i.x <= this.xmin) ||
              (t.x >= this.xmax && i.x >= this.xmax) ||
              (t.y <= this.ymin && i.y <= this.ymin) ||
              (t.y >= this.ymax && i.y >= this.ymax)
            )
              this._lineTo(i.x, i.y, !1);
            else {
              const e = [];
              if (
                (((t.x < this.xmin && i.x > this.xmin) ||
                  (t.x > this.xmin && i.x < this.xmin)) &&
                  ((a = (this.xmin - t.x) / (i.x - t.x)),
                  (c = t.y + a * (i.y - t.y)),
                  c <= this.ymin
                    ? (y = !1)
                    : c >= this.ymax
                    ? (y = !0)
                    : e.push(new o(a, this.xmin, c))),
                ((t.x < this.xmax && i.x > this.xmax) ||
                  (t.x > this.xmax && i.x < this.xmax)) &&
                  ((a = (this.xmax - t.x) / (i.x - t.x)),
                  (c = t.y + a * (i.y - t.y)),
                  c <= this.ymin
                    ? (y = !1)
                    : c >= this.ymax
                    ? (y = !0)
                    : e.push(new o(a, this.xmax, c))),
                ((t.y < this.ymin && i.y > this.ymin) ||
                  (t.y > this.ymin && i.y < this.ymin)) &&
                  ((a = (this.ymin - t.y) / (i.y - t.y)),
                  (f = t.x + a * (i.x - t.x)),
                  f <= this.xmin
                    ? (u = !1)
                    : f >= this.xmax
                    ? (u = !0)
                    : e.push(new o(a, f, this.ymin))),
                ((t.y < this.ymax && i.y > this.ymax) ||
                  (t.y > this.ymax && i.y < this.ymax)) &&
                  ((a = (this.ymax - t.y) / (i.y - t.y)),
                  (f = t.x + a * (i.x - t.x)),
                  f <= this.xmin
                    ? (u = !1)
                    : f >= this.xmax
                    ? (u = !0)
                    : e.push(new o(a, f, this.ymax))),
                0 === e.length)
              )
                u
                  ? y
                    ? this._lineTo(this.xmax, this.ymax, !0)
                    : this._lineTo(this.xmax, this.ymin, !0)
                  : y
                  ? this._lineTo(this.xmin, this.ymax, !0)
                  : this._lineTo(this.xmin, this.ymin, !0);
              else if (e.length > 1 && e[0].ratio > e[1].ratio)
                (this.start = this._dist + s * e[1].ratio),
                  this._lineTo(e[1].x, e[1].y, !0),
                  this._lineTo(e[0].x, e[0].y, !0);
              else {
                this.start = this._dist + s * e[0].ratio;
                for (let t = 0; t < e.length; t++)
                  this._lineTo(e[t].x, e[t].y, !0);
              }
              this._lineTo(i.x, i.y, !1);
            }
          }
          (this._dist += s), (this._prevIsIn = e), (this._prevPt = n);
        }
        close() {
          if (this.line.length > 2) {
            const t = this._firstPt,
              i = this._prevPt;
            (t.x === i.x && t.y === i.y) || this.lineTo(t.x, t.y);
            const e = this.line;
            let n = e.length;
            for (
              ;
              n >= 4 &&
              ((e[0].x === e[1].x && e[0].x === e[n - 2].x) ||
                (e[0].y === e[1].y && e[0].y === e[n - 2].y));

            )
              e.pop(), (e[0].x = e[n - 2].x), (e[0].y = e[n - 2].y), --n;
          }
        }
        result(t = !0) {
          return (
            this._pushLine(),
            0 === this.lines.length
              ? null
              : (this.type === h.V.Polygon &&
                  t &&
                  u.simplify(
                    this.tileSize,
                    this.margin * this.finalRatio,
                    this.lines,
                  ),
                this.lines)
          );
        }
        resultWithStarts() {
          if (this.type !== h.V.LineString)
            throw new Error('Only valid for lines');
          this._pushLine();
          const t = this.lines,
            i = t.length;
          if (0 === i) return null;
          const e = [];
          for (let n = 0; n < i; n++)
            e.push({ line: t[n], start: this.starts[n] || 0 });
          return e;
        }
        _isIn(t, i) {
          return (
            t >= this.xmin && t <= this.xmax && i >= this.ymin && i <= this.ymax
          );
        }
        _intersect(t, i) {
          let e, n, s;
          if (i.x >= this.xmin && i.x <= this.xmax)
            (n = i.y <= this.ymin ? this.ymin : this.ymax),
              (s = (n - t.y) / (i.y - t.y)),
              (e = t.x + s * (i.x - t.x));
          else if (i.y >= this.ymin && i.y <= this.ymax)
            (e = i.x <= this.xmin ? this.xmin : this.xmax),
              (s = (e - t.x) / (i.x - t.x)),
              (n = t.y + s * (i.y - t.y));
          else {
            (n = i.y <= this.ymin ? this.ymin : this.ymax),
              (e = i.x <= this.xmin ? this.xmin : this.xmax);
            const r = (e - t.x) / (i.x - t.x),
              h = (n - t.y) / (i.y - t.y);
            r < h
              ? ((s = r), (n = t.y + r * (i.y - t.y)))
              : ((s = h), (e = t.x + h * (i.x - t.x)));
          }
          return (this._r = s), new h.E(e, n);
        }
        _pushLine() {
          this.line &&
            (this.type === h.V.Point
              ? this.line.length > 0 &&
                (this.lines.push(this.line), this.starts.push(this.start))
              : this.type === h.V.LineString
              ? this.line.length > 1 &&
                (this.lines.push(this.line), this.starts.push(this.start))
              : this.type === h.V.Polygon &&
                this.line.length > 3 &&
                (this.lines.push(this.line), this.starts.push(this.start))),
            (this.line = []),
            (this.start = 0);
        }
        _moveTo(t, i, e) {
          this.type !== h.V.Polygon
            ? e &&
              ((t = Math.round(
                (t - (this.xmin + this.margin)) * this.finalRatio,
              )),
              (i = Math.round(
                (i - (this.ymin + this.margin)) * this.finalRatio,
              )),
              this.line.push(new h.E(t, i)))
            : (e ||
                (t < this.xmin && (t = this.xmin),
                t > this.xmax && (t = this.xmax),
                i < this.ymin && (i = this.ymin),
                i > this.ymax && (i = this.ymax)),
              (t = Math.round(
                (t - (this.xmin + this.margin)) * this.finalRatio,
              )),
              (i = Math.round(
                (i - (this.ymin + this.margin)) * this.finalRatio,
              )),
              this.line.push(new h.E(t, i)),
              (this._is_h = !1),
              (this._is_v = !1));
        }
        _lineTo(t, i, e) {
          let n, s;
          if (this.type !== h.V.Polygon)
            if (e) {
              if (
                ((t = Math.round(
                  (t - (this.xmin + this.margin)) * this.finalRatio,
                )),
                (i = Math.round(
                  (i - (this.ymin + this.margin)) * this.finalRatio,
                )),
                this.line.length > 0 &&
                  ((n = this.line[this.line.length - 1]), n.equals(t, i)))
              )
                return;
              this.line.push(new h.E(t, i));
            } else this.line && this.line.length > 0 && this._pushLine();
          else if (
            (e ||
              (t < this.xmin && (t = this.xmin),
              t > this.xmax && (t = this.xmax),
              i < this.ymin && (i = this.ymin),
              i > this.ymax && (i = this.ymax)),
            (t = Math.round((t - (this.xmin + this.margin)) * this.finalRatio)),
            (i = Math.round((i - (this.ymin + this.margin)) * this.finalRatio)),
            this.line && this.line.length > 0)
          ) {
            n = this.line[this.line.length - 1];
            const e = n.x === t,
              r = n.y === i;
            if (e && r) return;
            (this._is_h && e) || (this._is_v && r)
              ? ((n.x = t),
                (n.y = i),
                (s = this.line[this.line.length - 2]),
                s.x === t && s.y === i
                  ? (this.line.pop(),
                    this.line.length <= 1
                      ? ((this._is_h = !1), (this._is_v = !1))
                      : ((s = this.line[this.line.length - 2]),
                        (this._is_h = s.x === t),
                        (this._is_v = s.y === i)))
                  : ((this._is_h = s.x === t), (this._is_v = s.y === i)))
              : (this.line.push(new h.E(t, i)),
                (this._is_h = e),
                (this._is_v = r));
          } else this.line.push(new h.E(t, i));
        }
      }
      class a {
        setExtent(t) {
          this._ratio = 4096 === t ? 1 : 4096 / t;
        }
        get validateTessellation() {
          return this._ratio < 1;
        }
        reset(t) {
          (this.lines = []), (this.line = null);
        }
        moveTo(t, i) {
          this.line && this.lines.push(this.line), (this.line = []);
          const e = this._ratio;
          this.line.push(new h.E(t * e, i * e));
        }
        lineTo(t, i) {
          const e = this._ratio;
          this.line.push(new h.E(t * e, i * e));
        }
        close() {
          const t = this.line;
          t && !t[0].isEqual(t[t.length - 1]) && t.push(t[0]);
        }
        result() {
          return (
            this.line && this.lines.push(this.line),
            0 === this.lines.length ? null : this.lines
          );
        }
      }
      ((s = n || (n = {}))[(s.sideLeft = 0)] = 'sideLeft'),
        (s[(s.sideRight = 1)] = 'sideRight'),
        (s[(s.sideTop = 2)] = 'sideTop'),
        (s[(s.sideBottom = 3)] = 'sideBottom');
      class u {
        static simplify(t, i, e) {
          if (!e) return;
          const s = -i,
            r = t + i,
            h = -i,
            x = t + i,
            o = [],
            l = [],
            a = e.length;
          for (let t = 0; t < a; ++t) {
            const i = e[t];
            if (!i || i.length < 2) continue;
            let a,
              u = i[0];
            const y = i.length;
            for (let e = 1; e < y; ++e)
              (a = i[e]),
                u.x === a.x &&
                  (u.x <= s &&
                    (u.y > a.y
                      ? (o.push(t), o.push(e), o.push(n.sideLeft), o.push(-1))
                      : (l.push(t), l.push(e), l.push(n.sideLeft), l.push(-1))),
                  u.x >= r &&
                    (u.y < a.y
                      ? (o.push(t), o.push(e), o.push(n.sideRight), o.push(-1))
                      : (l.push(t),
                        l.push(e),
                        l.push(n.sideRight),
                        l.push(-1)))),
                u.y === a.y &&
                  (u.y <= h &&
                    (u.x < a.x
                      ? (o.push(t), o.push(e), o.push(n.sideTop), o.push(-1))
                      : (l.push(t), l.push(e), l.push(n.sideTop), l.push(-1))),
                  u.y >= x &&
                    (u.x > a.x
                      ? (o.push(t), o.push(e), o.push(n.sideBottom), o.push(-1))
                      : (l.push(t),
                        l.push(e),
                        l.push(n.sideBottom),
                        l.push(-1)))),
                (u = a);
          }
          if (0 === o.length || 0 === l.length) return;
          u.fillParent(e, l, o), u.fillParent(e, o, l);
          const y = [];
          u.calcDeltas(y, l, o), u.calcDeltas(y, o, l), u.addDeltas(y, e);
        }
        static fillParent(t, i, e) {
          const s = e.length,
            r = i.length;
          for (let h = 0; h < r; h += 4) {
            const r = i[h],
              o = i[h + 1],
              l = i[h + 2],
              a = t[r][o - 1],
              u = t[r][o];
            let y = 8092,
              f = -1;
            for (let i = 0; i < s; i += 4) {
              if (e[i + 2] !== l) continue;
              const s = e[i],
                r = e[i + 1],
                h = t[s][r - 1],
                o = t[s][r];
              switch (l) {
                case n.sideLeft:
                case n.sideRight:
                  if ((0, x.vX)(a.y, h.y, o.y) && (0, x.vX)(u.y, h.y, o.y)) {
                    const t = Math.abs(o.y - h.y);
                    t < y && ((y = t), (f = i));
                  }
                  break;
                case n.sideTop:
                case n.sideBottom:
                  if ((0, x.vX)(a.x, h.x, o.x) && (0, x.vX)(u.x, h.x, o.x)) {
                    const t = Math.abs(o.x - h.x);
                    t < y && ((y = t), (f = i));
                  }
              }
            }
            i[h + 3] = f;
          }
        }
        static calcDeltas(t, i, e) {
          const n = i.length;
          for (let s = 0; s < n; s += 4) {
            const n = [],
              r = u.calcDelta(s, i, e, n);
            t.push(i[s]), t.push(i[s + 1]), t.push(i[s + 2]), t.push(r);
          }
        }
        static calcDelta(t, i, e, n) {
          const s = i[t + 3];
          if (-1 === s) return 0;
          const r = n.length;
          return r > 1 && n[r - 2] === s
            ? 0
            : (n.push(s), u.calcDelta(s, e, i, n) + 1);
        }
        static addDeltas(t, i) {
          const e = t.length;
          let s = 0;
          for (let i = 0; i < e; i += 4) {
            const e = t[i + 3];
            e > s && (s = e);
          }
          for (let r = 0; r < e; r += 4) {
            const e = i[t[r]],
              h = t[r + 1],
              x = s - t[r + 3];
            switch (t[r + 2]) {
              case n.sideLeft:
                (e[h - 1].x -= x),
                  (e[h].x -= x),
                  1 === h && (e[e.length - 1].x -= x),
                  h === e.length - 1 && (e[0].x -= x);
                break;
              case n.sideRight:
                (e[h - 1].x += x),
                  (e[h].x += x),
                  1 === h && (e[e.length - 1].x += x),
                  h === e.length - 1 && (e[0].x += x);
                break;
              case n.sideTop:
                (e[h - 1].y -= x),
                  (e[h].y -= x),
                  1 === h && (e[e.length - 1].y -= x),
                  h === e.length - 1 && (e[0].y -= x);
                break;
              case n.sideBottom:
                (e[h - 1].y += x),
                  (e[h].y += x),
                  1 === h && (e[e.length - 1].y += x),
                  h === e.length - 1 && (e[0].y += x);
            }
          }
        }
      }
    },
    67327: (t, i, e) => {
      e.d(i, { z: () => f });
      var n = e(95648),
        s = e(16534);
      function r(t, i) {
        return t.x === i.x && t.y === i.y;
      }
      function h(t, i) {
        return (t.x = i.y), (t.y = -i.x), t;
      }
      function x(t, i) {
        return (t.x = -i.y), (t.y = i.x), t;
      }
      function o(t, i) {
        return (t.x = i.x), (t.y = i.y), t;
      }
      function l(t, i) {
        return (t.x = -i.x), (t.y = -i.y), t;
      }
      function a(t) {
        return Math.sqrt(t.x * t.x + t.y * t.y);
      }
      function u(t, i) {
        return t.x * i.x + t.y * i.y;
      }
      function y(t, i, e, n) {
        return (t.x = i.x * e + i.y * n), (t.y = i.x * n - i.y * e), t;
      }
      class f {
        constructor(t, i, e) {
          (this.writeVertex = t),
            (this.writeTriangle = i),
            (this.canUseThinTessellation = e),
            (this.prevNormal = { x: void 0, y: void 0 }),
            (this.nextNormal = { x: void 0, y: void 0 }),
            (this.textureNormalLeft = { x: 0, y: 1 }),
            (this.textureNormalRight = { x: 0, y: -1 }),
            (this.textureNormal = { x: void 0, y: void 0 }),
            (this.joinNormal = { x: void 0, y: void 0 }),
            (this.inner = { x: void 0, y: void 0 }),
            (this.outer = { x: void 0, y: void 0 }),
            (this.roundStart = { x: void 0, y: void 0 }),
            (this.roundEnd = { x: void 0, y: void 0 }),
            (this.startBreak = { x: void 0, y: void 0 }),
            (this.endBreak = { x: void 0, y: void 0 }),
            (this.innerPrev = { x: void 0, y: void 0 }),
            (this.innerNext = { x: void 0, y: void 0 }),
            (this.bevelStart = { x: void 0, y: void 0 }),
            (this.bevelEnd = { x: void 0, y: void 0 }),
            (this.bevelMiddle = { x: void 0, y: void 0 });
        }
        tessellate(t, i) {
          (function (t) {
            if (!t) return;
            const i = t.length;
            if (i <= 1) return;
            let e = 0;
            for (let n = 1; n < i; n++)
              r(t[n], t[e]) || ++e === n || (t[e] = t[n]);
            t.length = e + 1;
          })(t),
            this.canUseThinTessellation && i.halfWidth < s.tQ && !i.offset
              ? this._tessellateThin(t, i)
              : this._tessellate(t, i);
        }
        _tessellateThin(t, i) {
          if (t.length < 2) return;
          const e = i.wrapDistance || 65535;
          let n = i.initialDistance || 0,
            s = !1,
            r = t[0].x,
            h = t[0].y;
          const x = t.length;
          for (let i = 1; i < x; ++i) {
            s && ((s = !1), (n = 0));
            let x = t[i].x,
              o = t[i].y,
              l = x - r,
              a = o - h,
              u = Math.sqrt(l * l + a * a);
            if (((l /= u), (a /= u), n + u > e)) {
              s = !0;
              const t = (e - n) / u;
              (u = e - n),
                (x = (1 - t) * r + t * x),
                (o = (1 - t) * h + t * o),
                --i;
            }
            const y = this.writeVertex(r, h, 0, 0, l, a, a, -l, 0, -1, n),
              f = this.writeVertex(r, h, 0, 0, l, a, -a, l, 0, 1, n);
            n += u;
            const c = this.writeVertex(x, o, 0, 0, l, a, a, -l, 0, -1, n),
              p = this.writeVertex(x, o, 0, 0, l, a, -a, l, 0, 1, n);
            this.writeTriangle(y, f, c),
              this.writeTriangle(f, c, p),
              (r = x),
              (h = o);
          }
        }
        _tessellate(t, i) {
          const e = t[0],
            s = t[t.length - 1],
            f = r(e, s),
            c = f ? 3 : 2;
          if (t.length < c) return;
          const p = i.pixelCoordRatio,
            m = null != i.capType ? i.capType : n.RL.BUTT,
            v = null != i.joinType ? i.joinType : n.AH.MITER,
            d = null != i.miterLimit ? Math.min(i.miterLimit, 4) : 2,
            g = null != i.roundLimit ? Math.min(i.roundLimit, 1.05) : 1.05,
            T = null != i.halfWidth ? i.halfWidth : 2,
            _ = !!i.textured;
          let w,
            L,
            A = null,
            R = null;
          const b = this.prevNormal,
            B = this.nextNormal;
          let U = -1,
            E = -1;
          const N = this.joinNormal;
          let V, M;
          const F = this.textureNormalLeft,
            S = this.textureNormalRight,
            I = this.textureNormal;
          let P = -1,
            Z = -1;
          const k = i.wrapDistance || 65535;
          let C = i.initialDistance || 0;
          const D = this.writeVertex,
            z = this.writeTriangle,
            O = function (t, i, e, n, s, r) {
              const h = D(w, L, V, M, e, n, t, i, s, r, C);
              return (
                P >= 0 && Z >= 0 && h >= 0 && z(P, Z, h), (P = Z), (Z = h), h
              );
            };
          f &&
            ((A = t[t.length - 2]),
            (B.x = s.x - A.x),
            (B.y = s.y - A.y),
            (E = a(B)),
            (B.x /= E),
            (B.y /= E));
          let j = !1;
          for (let i = 0; i < t.length; ++i) {
            if (
              (j && ((j = !1), (C = 0)),
              A && ((b.x = -B.x), (b.y = -B.y), (U = E), C + U > k && (j = !0)),
              j)
            ) {
              const e = (k - C) / U;
              (U = k - C),
                (A = {
                  x: (1 - e) * A.x + e * t[i].x,
                  y: (1 - e) * A.y + e * t[i].y,
                }),
                --i;
            } else A = t[i];
            (w = A.x), (L = A.y);
            const e = i <= 0 && !j,
              s = i === t.length - 1;
            if (
              (e || (C += U),
              (R = s ? (f ? t[1] : null) : t[i + 1]),
              R
                ? ((B.x = R.x - w),
                  (B.y = R.y - L),
                  (E = a(B)),
                  (B.x /= E),
                  (B.y /= E))
                : ((B.x = void 0), (B.y = void 0)),
              !f)
            ) {
              if (e) {
                x(N, B),
                  (V = N.x),
                  (M = N.y),
                  m === n.RL.SQUARE &&
                    (O(-B.y - B.x, B.x - B.y, B.x, B.y, 0, -1),
                    O(B.y - B.x, -B.x - B.y, B.x, B.y, 0, 1)),
                  m === n.RL.ROUND &&
                    (O(-B.y - B.x, B.x - B.y, B.x, B.y, -1, -1),
                    O(B.y - B.x, -B.x - B.y, B.x, B.y, -1, 1)),
                  (m !== n.RL.ROUND && m !== n.RL.BUTT) ||
                    (O(-B.y, B.x, B.x, B.y, 0, -1),
                    O(B.y, -B.x, B.x, B.y, 0, 1));
                continue;
              }
              if (s) {
                h(N, b),
                  (V = N.x),
                  (M = N.y),
                  (m !== n.RL.ROUND && m !== n.RL.BUTT) ||
                    (O(b.y, -b.x, -b.x, -b.y, 0, -1),
                    O(-b.y, b.x, -b.x, -b.y, 0, 1)),
                  m === n.RL.SQUARE &&
                    (O(b.y - b.x, -b.x - b.y, -b.x, -b.y, 0, -1),
                    O(-b.y - b.x, b.x - b.y, -b.x, -b.y, 0, 1)),
                  m === n.RL.ROUND &&
                    (O(b.y - b.x, -b.x - b.y, -b.x, -b.y, 1, -1),
                    O(-b.y - b.x, b.x - b.y, -b.x, -b.y, 1, 1));
                continue;
              }
            }
            let r,
              c,
              D = ((X = B), -((H = b).x * X.y - H.y * X.x));
            if (Math.abs(D) < 0.01)
              u(b, B) > 0
                ? ((N.x = b.x),
                  (N.y = b.y),
                  (D = 1),
                  (r = Number.MAX_VALUE),
                  (c = !0))
                : (x(N, B), (D = 1), (r = 1), (c = !1));
            else {
              (N.x = (b.x + B.x) / D), (N.y = (b.y + B.y) / D), (r = a(N));
              const t = (r - 1) * T * p;
              c = r > 4 || (t > U && t > E);
            }
            (V = N.x), (M = N.y);
            let z = v;
            switch (v) {
              case n.AH.BEVEL:
                r < 1.05 && (z = n.AH.MITER);
                break;
              case n.AH.ROUND:
                r < g && (z = n.AH.MITER);
                break;
              case n.AH.MITER:
                r > d && (z = n.AH.BEVEL);
            }
            switch (z) {
              case n.AH.MITER:
                if (
                  (O(N.x, N.y, -b.x, -b.y, 0, -1),
                  O(-N.x, -N.y, -b.x, -b.y, 0, 1),
                  s)
                )
                  break;
                if (_) {
                  const t = j ? 0 : C;
                  (P = this.writeVertex(
                    w,
                    L,
                    V,
                    M,
                    B.x,
                    B.y,
                    N.x,
                    N.y,
                    0,
                    -1,
                    t,
                  )),
                    (Z = this.writeVertex(
                      w,
                      L,
                      V,
                      M,
                      B.x,
                      B.y,
                      -N.x,
                      -N.y,
                      0,
                      1,
                      t,
                    ));
                }
                break;
              case n.AH.BEVEL: {
                const t = D < 0;
                let i, e, n, r;
                if (t) {
                  const t = P;
                  (P = Z), (Z = t), (i = F), (e = S);
                } else (i = S), (e = F);
                if (c)
                  (n = t ? x(this.innerPrev, b) : h(this.innerPrev, b)),
                    (r = t ? h(this.innerNext, B) : x(this.innerNext, B));
                else {
                  const i = t ? l(this.inner, N) : o(this.inner, N);
                  (n = i), (r = i);
                }
                const a = t ? h(this.bevelStart, b) : x(this.bevelStart, b);
                O(n.x, n.y, -b.x, -b.y, i.x, i.y);
                const u = O(a.x, a.y, -b.x, -b.y, e.x, e.y);
                if (s) break;
                const f = t ? x(this.bevelEnd, B) : h(this.bevelEnd, B);
                if (c) {
                  const t = this.writeVertex(
                    w,
                    L,
                    V,
                    M,
                    -b.x,
                    -b.y,
                    0,
                    0,
                    0,
                    0,
                    C,
                  );
                  (P = this.writeVertex(
                    w,
                    L,
                    V,
                    M,
                    B.x,
                    B.y,
                    r.x,
                    r.y,
                    i.x,
                    i.y,
                    C,
                  )),
                    (Z = this.writeVertex(
                      w,
                      L,
                      V,
                      M,
                      B.x,
                      B.y,
                      f.x,
                      f.y,
                      e.x,
                      e.y,
                      C,
                    )),
                    this.writeTriangle(u, t, Z);
                } else {
                  if (_) {
                    const t = this.bevelMiddle;
                    (t.x = (a.x + f.x) / 2),
                      (t.y = (a.y + f.y) / 2),
                      y(I, t, -b.x, -b.y),
                      O(t.x, t.y, -b.x, -b.y, I.x, I.y),
                      y(I, t, B.x, B.y),
                      (P = this.writeVertex(
                        w,
                        L,
                        V,
                        M,
                        B.x,
                        B.y,
                        t.x,
                        t.y,
                        I.x,
                        I.y,
                        C,
                      )),
                      (Z = this.writeVertex(
                        w,
                        L,
                        V,
                        M,
                        B.x,
                        B.y,
                        r.x,
                        r.y,
                        i.x,
                        i.y,
                        C,
                      ));
                  } else {
                    const t = P;
                    (P = Z), (Z = t);
                  }
                  O(f.x, f.y, B.x, B.y, e.x, e.y);
                }
                if (t) {
                  const t = P;
                  (P = Z), (Z = t);
                }
                break;
              }
              case n.AH.ROUND: {
                const t = D < 0;
                let i, e;
                if (t) {
                  const t = P;
                  (P = Z), (Z = t), (i = F), (e = S);
                } else (i = S), (e = F);
                const n = t ? l(this.inner, N) : o(this.inner, N);
                let a, f;
                c
                  ? ((a = t ? x(this.innerPrev, b) : h(this.innerPrev, b)),
                    (f = t ? h(this.innerNext, B) : x(this.innerNext, B)))
                  : ((a = n), (f = n));
                const p = t ? h(this.roundStart, b) : x(this.roundStart, b),
                  m = t ? x(this.roundEnd, B) : h(this.roundEnd, B),
                  v = O(a.x, a.y, -b.x, -b.y, i.x, i.y),
                  d = O(p.x, p.y, -b.x, -b.y, e.x, e.y);
                if (s) break;
                const g = this.writeVertex(
                  w,
                  L,
                  V,
                  M,
                  -b.x,
                  -b.y,
                  0,
                  0,
                  0,
                  0,
                  C,
                );
                c || this.writeTriangle(P, Z, g);
                const T = l(this.outer, n),
                  A = this.writeVertex(
                    w,
                    L,
                    V,
                    M,
                    B.x,
                    B.y,
                    m.x,
                    m.y,
                    e.x,
                    e.y,
                    C,
                  );
                let R, U;
                const E = r > 2;
                if (E) {
                  let i;
                  r !== Number.MAX_VALUE
                    ? ((T.x /= r),
                      (T.y /= r),
                      (i = u(b, T)),
                      (i = (r * (i * i - 1) + 1) / i))
                    : (i = -1),
                    (R = t ? h(this.startBreak, b) : x(this.startBreak, b)),
                    (R.x += b.x * i),
                    (R.y += b.y * i),
                    (U = t ? x(this.endBreak, B) : h(this.endBreak, B)),
                    (U.x += B.x * i),
                    (U.y += B.y * i);
                }
                y(I, T, -b.x, -b.y);
                const k = this.writeVertex(
                  w,
                  L,
                  V,
                  M,
                  -b.x,
                  -b.y,
                  T.x,
                  T.y,
                  I.x,
                  I.y,
                  C,
                );
                y(I, T, B.x, B.y);
                const z = _
                    ? this.writeVertex(
                        w,
                        L,
                        V,
                        M,
                        B.x,
                        B.y,
                        T.x,
                        T.y,
                        I.x,
                        I.y,
                        C,
                      )
                    : k,
                  j = g,
                  H = _
                    ? this.writeVertex(w, L, V, M, B.x, B.y, 0, 0, 0, 0, C)
                    : g;
                let X = -1,
                  W = -1;
                if (
                  (E &&
                    (y(I, R, -b.x, -b.y),
                    (X = this.writeVertex(
                      w,
                      L,
                      V,
                      M,
                      -b.x,
                      -b.y,
                      R.x,
                      R.y,
                      I.x,
                      I.y,
                      C,
                    )),
                    y(I, U, B.x, B.y),
                    (W = this.writeVertex(
                      w,
                      L,
                      V,
                      M,
                      B.x,
                      B.y,
                      U.x,
                      U.y,
                      I.x,
                      I.y,
                      C,
                    ))),
                  _
                    ? E
                      ? (this.writeTriangle(j, d, X),
                        this.writeTriangle(j, X, k),
                        this.writeTriangle(H, z, W),
                        this.writeTriangle(H, W, A))
                      : (this.writeTriangle(j, d, k),
                        this.writeTriangle(H, z, A))
                    : E
                    ? (this.writeTriangle(g, d, X),
                      this.writeTriangle(g, X, W),
                      this.writeTriangle(g, W, A))
                    : (this.writeTriangle(g, d, k),
                      this.writeTriangle(g, z, A)),
                  c
                    ? ((P = this.writeVertex(
                        w,
                        L,
                        V,
                        M,
                        B.x,
                        B.y,
                        f.x,
                        f.y,
                        i.x,
                        i.y,
                        C,
                      )),
                      (Z = A))
                    : ((P = _
                        ? this.writeVertex(
                            w,
                            L,
                            V,
                            M,
                            B.x,
                            B.y,
                            f.x,
                            f.y,
                            i.x,
                            i.y,
                            C,
                          )
                        : v),
                      this.writeTriangle(P, H, A),
                      (Z = A)),
                  t)
                ) {
                  const t = P;
                  (P = Z), (Z = t);
                }
                break;
              }
            }
          }
          var H, X;
        }
      }
    },
  },
]);
