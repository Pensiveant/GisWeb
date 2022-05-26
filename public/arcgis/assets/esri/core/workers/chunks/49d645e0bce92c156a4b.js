'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [5257, 3172],
  {
    99880: (e, t, r) => {
      r.d(t, { V: () => u });
      var n = r(68773),
        a = (r(3172), r(20102)),
        s = r(92604),
        o = r(17452);
      const i = s.Z.getLogger('esri.assets');
      function u(e) {
        if (!n.Z.assetsPath)
          throw (
            (i.errorOnce(
              'The API assets location needs to be set using config.assetsPath. More information: https://arcg.is/1OzLe50',
            ),
            new a.Z('assets:path-not-set', 'config.assetsPath is not set'))
          );
        return (0, o.v_)(n.Z.assetsPath, e);
      }
    },
    52138: (e, t, r) => {
      r.d(t, {
        a: () => u,
        d: () => p,
        e: () => d,
        f: () => f,
        h: () => h,
        i: () => o,
        j: () => l,
        m: () => c,
        p: () => x,
        s: () => s,
        t: () => i,
        u: () => m,
        v: () => q,
        w: () => w,
        y: () => b,
      });
      var n = r(65617),
        a = r(46851);
      function s(e, t, r, n, a, s, o, i, u, c, l, h, d, f, m, p, b) {
        return (
          (e[0] = t),
          (e[1] = r),
          (e[2] = n),
          (e[3] = a),
          (e[4] = s),
          (e[5] = o),
          (e[6] = i),
          (e[7] = u),
          (e[8] = c),
          (e[9] = l),
          (e[10] = h),
          (e[11] = d),
          (e[12] = f),
          (e[13] = m),
          (e[14] = p),
          (e[15] = b),
          e
        );
      }
      function o(e) {
        return (
          (e[0] = 1),
          (e[1] = 0),
          (e[2] = 0),
          (e[3] = 0),
          (e[4] = 0),
          (e[5] = 1),
          (e[6] = 0),
          (e[7] = 0),
          (e[8] = 0),
          (e[9] = 0),
          (e[10] = 1),
          (e[11] = 0),
          (e[12] = 0),
          (e[13] = 0),
          (e[14] = 0),
          (e[15] = 1),
          e
        );
      }
      function i(e, t) {
        if (e === t) {
          const r = t[1],
            n = t[2],
            a = t[3],
            s = t[6],
            o = t[7],
            i = t[11];
          (e[1] = t[4]),
            (e[2] = t[8]),
            (e[3] = t[12]),
            (e[4] = r),
            (e[6] = t[9]),
            (e[7] = t[13]),
            (e[8] = n),
            (e[9] = s),
            (e[11] = t[14]),
            (e[12] = a),
            (e[13] = o),
            (e[14] = i);
        } else
          (e[0] = t[0]),
            (e[1] = t[4]),
            (e[2] = t[8]),
            (e[3] = t[12]),
            (e[4] = t[1]),
            (e[5] = t[5]),
            (e[6] = t[9]),
            (e[7] = t[13]),
            (e[8] = t[2]),
            (e[9] = t[6]),
            (e[10] = t[10]),
            (e[11] = t[14]),
            (e[12] = t[3]),
            (e[13] = t[7]),
            (e[14] = t[11]),
            (e[15] = t[15]);
        return e;
      }
      function u(e, t) {
        const r = t[0],
          n = t[1],
          a = t[2],
          s = t[3],
          o = t[4],
          i = t[5],
          u = t[6],
          c = t[7],
          l = t[8],
          h = t[9],
          d = t[10],
          f = t[11],
          m = t[12],
          p = t[13],
          b = t[14],
          M = t[15],
          y = r * i - n * o,
          g = r * u - a * o,
          w = r * c - s * o,
          q = n * u - a * i,
          x = n * c - s * i,
          E = a * c - s * u,
          T = l * p - h * m,
          v = l * b - d * m,
          k = l * M - f * m,
          O = h * b - d * p,
          S = h * M - f * p,
          C = d * M - f * b;
        let L = y * C - g * S + w * O + q * k - x * v + E * T;
        return L
          ? ((L = 1 / L),
            (e[0] = (i * C - u * S + c * O) * L),
            (e[1] = (a * S - n * C - s * O) * L),
            (e[2] = (p * E - b * x + M * q) * L),
            (e[3] = (d * x - h * E - f * q) * L),
            (e[4] = (u * k - o * C - c * v) * L),
            (e[5] = (r * C - a * k + s * v) * L),
            (e[6] = (b * w - m * E - M * g) * L),
            (e[7] = (l * E - d * w + f * g) * L),
            (e[8] = (o * S - i * k + c * T) * L),
            (e[9] = (n * k - r * S - s * T) * L),
            (e[10] = (m * x - p * w + M * y) * L),
            (e[11] = (h * w - l * x - f * y) * L),
            (e[12] = (i * v - o * O - u * T) * L),
            (e[13] = (r * O - n * v + a * T) * L),
            (e[14] = (p * g - m * q - b * y) * L),
            (e[15] = (l * q - h * g + d * y) * L),
            e)
          : null;
      }
      function c(e, t, r) {
        const n = t[0],
          a = t[1],
          s = t[2],
          o = t[3],
          i = t[4],
          u = t[5],
          c = t[6],
          l = t[7],
          h = t[8],
          d = t[9],
          f = t[10],
          m = t[11],
          p = t[12],
          b = t[13],
          M = t[14],
          y = t[15];
        let g = r[0],
          w = r[1],
          q = r[2],
          x = r[3];
        return (
          (e[0] = g * n + w * i + q * h + x * p),
          (e[1] = g * a + w * u + q * d + x * b),
          (e[2] = g * s + w * c + q * f + x * M),
          (e[3] = g * o + w * l + q * m + x * y),
          (g = r[4]),
          (w = r[5]),
          (q = r[6]),
          (x = r[7]),
          (e[4] = g * n + w * i + q * h + x * p),
          (e[5] = g * a + w * u + q * d + x * b),
          (e[6] = g * s + w * c + q * f + x * M),
          (e[7] = g * o + w * l + q * m + x * y),
          (g = r[8]),
          (w = r[9]),
          (q = r[10]),
          (x = r[11]),
          (e[8] = g * n + w * i + q * h + x * p),
          (e[9] = g * a + w * u + q * d + x * b),
          (e[10] = g * s + w * c + q * f + x * M),
          (e[11] = g * o + w * l + q * m + x * y),
          (g = r[12]),
          (w = r[13]),
          (q = r[14]),
          (x = r[15]),
          (e[12] = g * n + w * i + q * h + x * p),
          (e[13] = g * a + w * u + q * d + x * b),
          (e[14] = g * s + w * c + q * f + x * M),
          (e[15] = g * o + w * l + q * m + x * y),
          e
        );
      }
      function l(e, t, r) {
        const n = r[0],
          a = r[1],
          s = r[2];
        let o, i, u, c, l, h, d, f, m, p, b, M;
        return (
          t === e
            ? ((e[12] = t[0] * n + t[4] * a + t[8] * s + t[12]),
              (e[13] = t[1] * n + t[5] * a + t[9] * s + t[13]),
              (e[14] = t[2] * n + t[6] * a + t[10] * s + t[14]),
              (e[15] = t[3] * n + t[7] * a + t[11] * s + t[15]))
            : ((o = t[0]),
              (i = t[1]),
              (u = t[2]),
              (c = t[3]),
              (l = t[4]),
              (h = t[5]),
              (d = t[6]),
              (f = t[7]),
              (m = t[8]),
              (p = t[9]),
              (b = t[10]),
              (M = t[11]),
              (e[0] = o),
              (e[1] = i),
              (e[2] = u),
              (e[3] = c),
              (e[4] = l),
              (e[5] = h),
              (e[6] = d),
              (e[7] = f),
              (e[8] = m),
              (e[9] = p),
              (e[10] = b),
              (e[11] = M),
              (e[12] = o * n + l * a + m * s + t[12]),
              (e[13] = i * n + h * a + p * s + t[13]),
              (e[14] = u * n + d * a + b * s + t[14]),
              (e[15] = c * n + f * a + M * s + t[15])),
          e
        );
      }
      function h(e, t, r) {
        const n = r[0],
          a = r[1],
          s = r[2];
        return (
          (e[0] = t[0] * n),
          (e[1] = t[1] * n),
          (e[2] = t[2] * n),
          (e[3] = t[3] * n),
          (e[4] = t[4] * a),
          (e[5] = t[5] * a),
          (e[6] = t[6] * a),
          (e[7] = t[7] * a),
          (e[8] = t[8] * s),
          (e[9] = t[9] * s),
          (e[10] = t[10] * s),
          (e[11] = t[11] * s),
          (e[12] = t[12]),
          (e[13] = t[13]),
          (e[14] = t[14]),
          (e[15] = t[15]),
          e
        );
      }
      function d(e, t, r, n) {
        let s,
          o,
          i,
          u,
          c,
          l,
          h,
          d,
          f,
          m,
          p,
          b,
          M,
          y,
          g,
          w,
          q,
          x,
          E,
          T,
          v,
          k,
          O,
          S,
          C = n[0],
          L = n[1],
          P = n[2],
          R = Math.sqrt(C * C + L * L + P * P);
        return R < a.E
          ? null
          : ((R = 1 / R),
            (C *= R),
            (L *= R),
            (P *= R),
            (s = Math.sin(r)),
            (o = Math.cos(r)),
            (i = 1 - o),
            (u = t[0]),
            (c = t[1]),
            (l = t[2]),
            (h = t[3]),
            (d = t[4]),
            (f = t[5]),
            (m = t[6]),
            (p = t[7]),
            (b = t[8]),
            (M = t[9]),
            (y = t[10]),
            (g = t[11]),
            (w = C * C * i + o),
            (q = L * C * i + P * s),
            (x = P * C * i - L * s),
            (E = C * L * i - P * s),
            (T = L * L * i + o),
            (v = P * L * i + C * s),
            (k = C * P * i + L * s),
            (O = L * P * i - C * s),
            (S = P * P * i + o),
            (e[0] = u * w + d * q + b * x),
            (e[1] = c * w + f * q + M * x),
            (e[2] = l * w + m * q + y * x),
            (e[3] = h * w + p * q + g * x),
            (e[4] = u * E + d * T + b * v),
            (e[5] = c * E + f * T + M * v),
            (e[6] = l * E + m * T + y * v),
            (e[7] = h * E + p * T + g * v),
            (e[8] = u * k + d * O + b * S),
            (e[9] = c * k + f * O + M * S),
            (e[10] = l * k + m * O + y * S),
            (e[11] = h * k + p * O + g * S),
            t !== e &&
              ((e[12] = t[12]),
              (e[13] = t[13]),
              (e[14] = t[14]),
              (e[15] = t[15])),
            e);
      }
      function f(e, t) {
        return (
          (e[0] = 1),
          (e[1] = 0),
          (e[2] = 0),
          (e[3] = 0),
          (e[4] = 0),
          (e[5] = 1),
          (e[6] = 0),
          (e[7] = 0),
          (e[8] = 0),
          (e[9] = 0),
          (e[10] = 1),
          (e[11] = 0),
          (e[12] = t[0]),
          (e[13] = t[1]),
          (e[14] = t[2]),
          (e[15] = 1),
          e
        );
      }
      function m(e, t) {
        return (
          (e[0] = t[0]),
          (e[1] = 0),
          (e[2] = 0),
          (e[3] = 0),
          (e[4] = 0),
          (e[5] = t[1]),
          (e[6] = 0),
          (e[7] = 0),
          (e[8] = 0),
          (e[9] = 0),
          (e[10] = t[2]),
          (e[11] = 0),
          (e[12] = 0),
          (e[13] = 0),
          (e[14] = 0),
          (e[15] = 1),
          e
        );
      }
      function p(e, t, r) {
        let n,
          s,
          o,
          i = r[0],
          u = r[1],
          c = r[2],
          l = Math.sqrt(i * i + u * u + c * c);
        return l < a.E
          ? null
          : ((l = 1 / l),
            (i *= l),
            (u *= l),
            (c *= l),
            (n = Math.sin(t)),
            (s = Math.cos(t)),
            (o = 1 - s),
            (e[0] = i * i * o + s),
            (e[1] = u * i * o + c * n),
            (e[2] = c * i * o - u * n),
            (e[3] = 0),
            (e[4] = i * u * o - c * n),
            (e[5] = u * u * o + s),
            (e[6] = c * u * o + i * n),
            (e[7] = 0),
            (e[8] = i * c * o + u * n),
            (e[9] = u * c * o - i * n),
            (e[10] = c * c * o + s),
            (e[11] = 0),
            (e[12] = 0),
            (e[13] = 0),
            (e[14] = 0),
            (e[15] = 1),
            e);
      }
      function b(e, t) {
        const r = Math.sin(t),
          n = Math.cos(t);
        return (
          (e[0] = 1),
          (e[1] = 0),
          (e[2] = 0),
          (e[3] = 0),
          (e[4] = 0),
          (e[5] = n),
          (e[6] = r),
          (e[7] = 0),
          (e[8] = 0),
          (e[9] = -r),
          (e[10] = n),
          (e[11] = 0),
          (e[12] = 0),
          (e[13] = 0),
          (e[14] = 0),
          (e[15] = 1),
          e
        );
      }
      function M(e, t, r) {
        const n = t[0],
          a = t[1],
          s = t[2],
          o = t[3],
          i = n + n,
          u = a + a,
          c = s + s,
          l = n * i,
          h = n * u,
          d = n * c,
          f = a * u,
          m = a * c,
          p = s * c,
          b = o * i,
          M = o * u,
          y = o * c;
        return (
          (e[0] = 1 - (f + p)),
          (e[1] = h + y),
          (e[2] = d - M),
          (e[3] = 0),
          (e[4] = h - y),
          (e[5] = 1 - (l + p)),
          (e[6] = m + b),
          (e[7] = 0),
          (e[8] = d + M),
          (e[9] = m - b),
          (e[10] = 1 - (l + f)),
          (e[11] = 0),
          (e[12] = r[0]),
          (e[13] = r[1]),
          (e[14] = r[2]),
          (e[15] = 1),
          e
        );
      }
      const y = (0, n.c)();
      function g(e, t, r) {
        return (
          (e[0] = t[0] - r[0]),
          (e[1] = t[1] - r[1]),
          (e[2] = t[2] - r[2]),
          (e[3] = t[3] - r[3]),
          (e[4] = t[4] - r[4]),
          (e[5] = t[5] - r[5]),
          (e[6] = t[6] - r[6]),
          (e[7] = t[7] - r[7]),
          (e[8] = t[8] - r[8]),
          (e[9] = t[9] - r[9]),
          (e[10] = t[10] - r[10]),
          (e[11] = t[11] - r[11]),
          (e[12] = t[12] - r[12]),
          (e[13] = t[13] - r[13]),
          (e[14] = t[14] - r[14]),
          (e[15] = t[15] - r[15]),
          e
        );
      }
      function w(e, t) {
        return (
          e[0] === t[0] &&
          e[1] === t[1] &&
          e[2] === t[2] &&
          e[3] === t[3] &&
          e[4] === t[4] &&
          e[5] === t[5] &&
          e[6] === t[6] &&
          e[7] === t[7] &&
          e[8] === t[8] &&
          e[9] === t[9] &&
          e[10] === t[10] &&
          e[11] === t[11] &&
          e[12] === t[12] &&
          e[13] === t[13] &&
          e[14] === t[14] &&
          e[15] === t[15]
        );
      }
      function q(e, t) {
        if (e === t) return !0;
        const r = e[0],
          n = e[1],
          s = e[2],
          o = e[3],
          i = e[4],
          u = e[5],
          c = e[6],
          l = e[7],
          h = e[8],
          d = e[9],
          f = e[10],
          m = e[11],
          p = e[12],
          b = e[13],
          M = e[14],
          y = e[15],
          g = t[0],
          w = t[1],
          q = t[2],
          x = t[3],
          E = t[4],
          T = t[5],
          v = t[6],
          k = t[7],
          O = t[8],
          S = t[9],
          C = t[10],
          L = t[11],
          P = t[12],
          R = t[13],
          D = t[14],
          _ = t[15];
        return (
          Math.abs(r - g) <= a.E * Math.max(1, Math.abs(r), Math.abs(g)) &&
          Math.abs(n - w) <= a.E * Math.max(1, Math.abs(n), Math.abs(w)) &&
          Math.abs(s - q) <= a.E * Math.max(1, Math.abs(s), Math.abs(q)) &&
          Math.abs(o - x) <= a.E * Math.max(1, Math.abs(o), Math.abs(x)) &&
          Math.abs(i - E) <= a.E * Math.max(1, Math.abs(i), Math.abs(E)) &&
          Math.abs(u - T) <= a.E * Math.max(1, Math.abs(u), Math.abs(T)) &&
          Math.abs(c - v) <= a.E * Math.max(1, Math.abs(c), Math.abs(v)) &&
          Math.abs(l - k) <= a.E * Math.max(1, Math.abs(l), Math.abs(k)) &&
          Math.abs(h - O) <= a.E * Math.max(1, Math.abs(h), Math.abs(O)) &&
          Math.abs(d - S) <= a.E * Math.max(1, Math.abs(d), Math.abs(S)) &&
          Math.abs(f - C) <= a.E * Math.max(1, Math.abs(f), Math.abs(C)) &&
          Math.abs(m - L) <= a.E * Math.max(1, Math.abs(m), Math.abs(L)) &&
          Math.abs(p - P) <= a.E * Math.max(1, Math.abs(p), Math.abs(P)) &&
          Math.abs(b - R) <= a.E * Math.max(1, Math.abs(b), Math.abs(R)) &&
          Math.abs(M - D) <= a.E * Math.max(1, Math.abs(M), Math.abs(D)) &&
          Math.abs(y - _) <= a.E * Math.max(1, Math.abs(y), Math.abs(_))
        );
      }
      function x(e) {
        const t = a.E,
          r = e[0],
          n = e[1],
          s = e[2],
          o = e[4],
          i = e[5],
          u = e[6],
          c = e[8],
          l = e[9],
          h = e[10];
        return (
          Math.abs(1 - (r * r + o * o + c * c)) <= t &&
          Math.abs(1 - (n * n + i * i + l * l)) <= t &&
          Math.abs(1 - (s * s + u * u + h * h)) <= t
        );
      }
      const E = c,
        T = g;
      Object.freeze({
        __proto__: null,
        copy: function (e, t) {
          return (
            (e[0] = t[0]),
            (e[1] = t[1]),
            (e[2] = t[2]),
            (e[3] = t[3]),
            (e[4] = t[4]),
            (e[5] = t[5]),
            (e[6] = t[6]),
            (e[7] = t[7]),
            (e[8] = t[8]),
            (e[9] = t[9]),
            (e[10] = t[10]),
            (e[11] = t[11]),
            (e[12] = t[12]),
            (e[13] = t[13]),
            (e[14] = t[14]),
            (e[15] = t[15]),
            e
          );
        },
        set: s,
        identity: o,
        transpose: i,
        invert: u,
        adjoint: function (e, t) {
          const r = t[0],
            n = t[1],
            a = t[2],
            s = t[3],
            o = t[4],
            i = t[5],
            u = t[6],
            c = t[7],
            l = t[8],
            h = t[9],
            d = t[10],
            f = t[11],
            m = t[12],
            p = t[13],
            b = t[14],
            M = t[15];
          return (
            (e[0] =
              i * (d * M - f * b) - h * (u * M - c * b) + p * (u * f - c * d)),
            (e[1] = -(
              n * (d * M - f * b) -
              h * (a * M - s * b) +
              p * (a * f - s * d)
            )),
            (e[2] =
              n * (u * M - c * b) - i * (a * M - s * b) + p * (a * c - s * u)),
            (e[3] = -(
              n * (u * f - c * d) -
              i * (a * f - s * d) +
              h * (a * c - s * u)
            )),
            (e[4] = -(
              o * (d * M - f * b) -
              l * (u * M - c * b) +
              m * (u * f - c * d)
            )),
            (e[5] =
              r * (d * M - f * b) - l * (a * M - s * b) + m * (a * f - s * d)),
            (e[6] = -(
              r * (u * M - c * b) -
              o * (a * M - s * b) +
              m * (a * c - s * u)
            )),
            (e[7] =
              r * (u * f - c * d) - o * (a * f - s * d) + l * (a * c - s * u)),
            (e[8] =
              o * (h * M - f * p) - l * (i * M - c * p) + m * (i * f - c * h)),
            (e[9] = -(
              r * (h * M - f * p) -
              l * (n * M - s * p) +
              m * (n * f - s * h)
            )),
            (e[10] =
              r * (i * M - c * p) - o * (n * M - s * p) + m * (n * c - s * i)),
            (e[11] = -(
              r * (i * f - c * h) -
              o * (n * f - s * h) +
              l * (n * c - s * i)
            )),
            (e[12] = -(
              o * (h * b - d * p) -
              l * (i * b - u * p) +
              m * (i * d - u * h)
            )),
            (e[13] =
              r * (h * b - d * p) - l * (n * b - a * p) + m * (n * d - a * h)),
            (e[14] = -(
              r * (i * b - u * p) -
              o * (n * b - a * p) +
              m * (n * u - a * i)
            )),
            (e[15] =
              r * (i * d - u * h) - o * (n * d - a * h) + l * (n * u - a * i)),
            e
          );
        },
        determinant: function (e) {
          const t = e[0],
            r = e[1],
            n = e[2],
            a = e[3],
            s = e[4],
            o = e[5],
            i = e[6],
            u = e[7],
            c = e[8],
            l = e[9],
            h = e[10],
            d = e[11],
            f = e[12],
            m = e[13],
            p = e[14],
            b = e[15];
          return (
            (t * o - r * s) * (h * b - d * p) -
            (t * i - n * s) * (l * b - d * m) +
            (t * u - a * s) * (l * p - h * m) +
            (r * i - n * o) * (c * b - d * f) -
            (r * u - a * o) * (c * p - h * f) +
            (n * u - a * i) * (c * m - l * f)
          );
        },
        multiply: c,
        translate: l,
        scale: h,
        rotate: d,
        rotateX: function (e, t, r) {
          const n = Math.sin(r),
            a = Math.cos(r),
            s = t[4],
            o = t[5],
            i = t[6],
            u = t[7],
            c = t[8],
            l = t[9],
            h = t[10],
            d = t[11];
          return (
            t !== e &&
              ((e[0] = t[0]),
              (e[1] = t[1]),
              (e[2] = t[2]),
              (e[3] = t[3]),
              (e[12] = t[12]),
              (e[13] = t[13]),
              (e[14] = t[14]),
              (e[15] = t[15])),
            (e[4] = s * a + c * n),
            (e[5] = o * a + l * n),
            (e[6] = i * a + h * n),
            (e[7] = u * a + d * n),
            (e[8] = c * a - s * n),
            (e[9] = l * a - o * n),
            (e[10] = h * a - i * n),
            (e[11] = d * a - u * n),
            e
          );
        },
        rotateY: function (e, t, r) {
          const n = Math.sin(r),
            a = Math.cos(r),
            s = t[0],
            o = t[1],
            i = t[2],
            u = t[3],
            c = t[8],
            l = t[9],
            h = t[10],
            d = t[11];
          return (
            t !== e &&
              ((e[4] = t[4]),
              (e[5] = t[5]),
              (e[6] = t[6]),
              (e[7] = t[7]),
              (e[12] = t[12]),
              (e[13] = t[13]),
              (e[14] = t[14]),
              (e[15] = t[15])),
            (e[0] = s * a - c * n),
            (e[1] = o * a - l * n),
            (e[2] = i * a - h * n),
            (e[3] = u * a - d * n),
            (e[8] = s * n + c * a),
            (e[9] = o * n + l * a),
            (e[10] = i * n + h * a),
            (e[11] = u * n + d * a),
            e
          );
        },
        rotateZ: function (e, t, r) {
          const n = Math.sin(r),
            a = Math.cos(r),
            s = t[0],
            o = t[1],
            i = t[2],
            u = t[3],
            c = t[4],
            l = t[5],
            h = t[6],
            d = t[7];
          return (
            t !== e &&
              ((e[8] = t[8]),
              (e[9] = t[9]),
              (e[10] = t[10]),
              (e[11] = t[11]),
              (e[12] = t[12]),
              (e[13] = t[13]),
              (e[14] = t[14]),
              (e[15] = t[15])),
            (e[0] = s * a + c * n),
            (e[1] = o * a + l * n),
            (e[2] = i * a + h * n),
            (e[3] = u * a + d * n),
            (e[4] = c * a - s * n),
            (e[5] = l * a - o * n),
            (e[6] = h * a - i * n),
            (e[7] = d * a - u * n),
            e
          );
        },
        fromTranslation: f,
        fromScaling: m,
        fromRotation: p,
        fromXRotation: b,
        fromYRotation: function (e, t) {
          const r = Math.sin(t),
            n = Math.cos(t);
          return (
            (e[0] = n),
            (e[1] = 0),
            (e[2] = -r),
            (e[3] = 0),
            (e[4] = 0),
            (e[5] = 1),
            (e[6] = 0),
            (e[7] = 0),
            (e[8] = r),
            (e[9] = 0),
            (e[10] = n),
            (e[11] = 0),
            (e[12] = 0),
            (e[13] = 0),
            (e[14] = 0),
            (e[15] = 1),
            e
          );
        },
        fromZRotation: function (e, t) {
          const r = Math.sin(t),
            n = Math.cos(t);
          return (
            (e[0] = n),
            (e[1] = r),
            (e[2] = 0),
            (e[3] = 0),
            (e[4] = -r),
            (e[5] = n),
            (e[6] = 0),
            (e[7] = 0),
            (e[8] = 0),
            (e[9] = 0),
            (e[10] = 1),
            (e[11] = 0),
            (e[12] = 0),
            (e[13] = 0),
            (e[14] = 0),
            (e[15] = 1),
            e
          );
        },
        fromRotationTranslation: M,
        fromQuat2: function (e, t) {
          const r = y,
            n = -t[0],
            a = -t[1],
            s = -t[2],
            o = t[3],
            i = t[4],
            u = t[5],
            c = t[6],
            l = t[7],
            h = n * n + a * a + s * s + o * o;
          return (
            h > 0
              ? ((r[0] = (2 * (i * o + l * n + u * s - c * a)) / h),
                (r[1] = (2 * (u * o + l * a + c * n - i * s)) / h),
                (r[2] = (2 * (c * o + l * s + i * a - u * n)) / h))
              : ((r[0] = 2 * (i * o + l * n + u * s - c * a)),
                (r[1] = 2 * (u * o + l * a + c * n - i * s)),
                (r[2] = 2 * (c * o + l * s + i * a - u * n))),
            M(e, t, r),
            e
          );
        },
        getTranslation: function (e, t) {
          return (e[0] = t[12]), (e[1] = t[13]), (e[2] = t[14]), e;
        },
        getScaling: function (e, t) {
          const r = t[0],
            n = t[1],
            a = t[2],
            s = t[4],
            o = t[5],
            i = t[6],
            u = t[8],
            c = t[9],
            l = t[10];
          return (
            (e[0] = Math.sqrt(r * r + n * n + a * a)),
            (e[1] = Math.sqrt(s * s + o * o + i * i)),
            (e[2] = Math.sqrt(u * u + c * c + l * l)),
            e
          );
        },
        getRotation: function (e, t) {
          const r = t[0] + t[5] + t[10];
          let n = 0;
          return (
            r > 0
              ? ((n = 2 * Math.sqrt(r + 1)),
                (e[3] = 0.25 * n),
                (e[0] = (t[6] - t[9]) / n),
                (e[1] = (t[8] - t[2]) / n),
                (e[2] = (t[1] - t[4]) / n))
              : t[0] > t[5] && t[0] > t[10]
              ? ((n = 2 * Math.sqrt(1 + t[0] - t[5] - t[10])),
                (e[3] = (t[6] - t[9]) / n),
                (e[0] = 0.25 * n),
                (e[1] = (t[1] + t[4]) / n),
                (e[2] = (t[8] + t[2]) / n))
              : t[5] > t[10]
              ? ((n = 2 * Math.sqrt(1 + t[5] - t[0] - t[10])),
                (e[3] = (t[8] - t[2]) / n),
                (e[0] = (t[1] + t[4]) / n),
                (e[1] = 0.25 * n),
                (e[2] = (t[6] + t[9]) / n))
              : ((n = 2 * Math.sqrt(1 + t[10] - t[0] - t[5])),
                (e[3] = (t[1] - t[4]) / n),
                (e[0] = (t[8] + t[2]) / n),
                (e[1] = (t[6] + t[9]) / n),
                (e[2] = 0.25 * n)),
            e
          );
        },
        fromRotationTranslationScale: function (e, t, r, n) {
          const a = t[0],
            s = t[1],
            o = t[2],
            i = t[3],
            u = a + a,
            c = s + s,
            l = o + o,
            h = a * u,
            d = a * c,
            f = a * l,
            m = s * c,
            p = s * l,
            b = o * l,
            M = i * u,
            y = i * c,
            g = i * l,
            w = n[0],
            q = n[1],
            x = n[2];
          return (
            (e[0] = (1 - (m + b)) * w),
            (e[1] = (d + g) * w),
            (e[2] = (f - y) * w),
            (e[3] = 0),
            (e[4] = (d - g) * q),
            (e[5] = (1 - (h + b)) * q),
            (e[6] = (p + M) * q),
            (e[7] = 0),
            (e[8] = (f + y) * x),
            (e[9] = (p - M) * x),
            (e[10] = (1 - (h + m)) * x),
            (e[11] = 0),
            (e[12] = r[0]),
            (e[13] = r[1]),
            (e[14] = r[2]),
            (e[15] = 1),
            e
          );
        },
        fromRotationTranslationScaleOrigin: function (e, t, r, n, a) {
          const s = t[0],
            o = t[1],
            i = t[2],
            u = t[3],
            c = s + s,
            l = o + o,
            h = i + i,
            d = s * c,
            f = s * l,
            m = s * h,
            p = o * l,
            b = o * h,
            M = i * h,
            y = u * c,
            g = u * l,
            w = u * h,
            q = n[0],
            x = n[1],
            E = n[2],
            T = a[0],
            v = a[1],
            k = a[2],
            O = (1 - (p + M)) * q,
            S = (f + w) * q,
            C = (m - g) * q,
            L = (f - w) * x,
            P = (1 - (d + M)) * x,
            R = (b + y) * x,
            D = (m + g) * E,
            _ = (b - y) * E,
            U = (1 - (d + p)) * E;
          return (
            (e[0] = O),
            (e[1] = S),
            (e[2] = C),
            (e[3] = 0),
            (e[4] = L),
            (e[5] = P),
            (e[6] = R),
            (e[7] = 0),
            (e[8] = D),
            (e[9] = _),
            (e[10] = U),
            (e[11] = 0),
            (e[12] = r[0] + T - (O * T + L * v + D * k)),
            (e[13] = r[1] + v - (S * T + P * v + _ * k)),
            (e[14] = r[2] + k - (C * T + R * v + U * k)),
            (e[15] = 1),
            e
          );
        },
        fromQuat: function (e, t) {
          const r = t[0],
            n = t[1],
            a = t[2],
            s = t[3],
            o = r + r,
            i = n + n,
            u = a + a,
            c = r * o,
            l = n * o,
            h = n * i,
            d = a * o,
            f = a * i,
            m = a * u,
            p = s * o,
            b = s * i,
            M = s * u;
          return (
            (e[0] = 1 - h - m),
            (e[1] = l + M),
            (e[2] = d - b),
            (e[3] = 0),
            (e[4] = l - M),
            (e[5] = 1 - c - m),
            (e[6] = f + p),
            (e[7] = 0),
            (e[8] = d + b),
            (e[9] = f - p),
            (e[10] = 1 - c - h),
            (e[11] = 0),
            (e[12] = 0),
            (e[13] = 0),
            (e[14] = 0),
            (e[15] = 1),
            e
          );
        },
        frustum: function (e, t, r, n, a, s, o) {
          const i = 1 / (r - t),
            u = 1 / (a - n),
            c = 1 / (s - o);
          return (
            (e[0] = 2 * s * i),
            (e[1] = 0),
            (e[2] = 0),
            (e[3] = 0),
            (e[4] = 0),
            (e[5] = 2 * s * u),
            (e[6] = 0),
            (e[7] = 0),
            (e[8] = (r + t) * i),
            (e[9] = (a + n) * u),
            (e[10] = (o + s) * c),
            (e[11] = -1),
            (e[12] = 0),
            (e[13] = 0),
            (e[14] = o * s * 2 * c),
            (e[15] = 0),
            e
          );
        },
        perspective: function (e, t, r, n, a) {
          const s = 1 / Math.tan(t / 2);
          let o;
          return (
            (e[0] = s / r),
            (e[1] = 0),
            (e[2] = 0),
            (e[3] = 0),
            (e[4] = 0),
            (e[5] = s),
            (e[6] = 0),
            (e[7] = 0),
            (e[8] = 0),
            (e[9] = 0),
            (e[11] = -1),
            (e[12] = 0),
            (e[13] = 0),
            (e[15] = 0),
            null != a && a !== 1 / 0
              ? ((o = 1 / (n - a)),
                (e[10] = (a + n) * o),
                (e[14] = 2 * a * n * o))
              : ((e[10] = -1), (e[14] = -2 * n)),
            e
          );
        },
        perspectiveFromFieldOfView: function (e, t, r, n) {
          const a = Math.tan((t.upDegrees * Math.PI) / 180),
            s = Math.tan((t.downDegrees * Math.PI) / 180),
            o = Math.tan((t.leftDegrees * Math.PI) / 180),
            i = Math.tan((t.rightDegrees * Math.PI) / 180),
            u = 2 / (o + i),
            c = 2 / (a + s);
          return (
            (e[0] = u),
            (e[1] = 0),
            (e[2] = 0),
            (e[3] = 0),
            (e[4] = 0),
            (e[5] = c),
            (e[6] = 0),
            (e[7] = 0),
            (e[8] = -(o - i) * u * 0.5),
            (e[9] = (a - s) * c * 0.5),
            (e[10] = n / (r - n)),
            (e[11] = -1),
            (e[12] = 0),
            (e[13] = 0),
            (e[14] = (n * r) / (r - n)),
            (e[15] = 0),
            e
          );
        },
        ortho: function (e, t, r, n, a, s, o) {
          const i = 1 / (t - r),
            u = 1 / (n - a),
            c = 1 / (s - o);
          return (
            (e[0] = -2 * i),
            (e[1] = 0),
            (e[2] = 0),
            (e[3] = 0),
            (e[4] = 0),
            (e[5] = -2 * u),
            (e[6] = 0),
            (e[7] = 0),
            (e[8] = 0),
            (e[9] = 0),
            (e[10] = 2 * c),
            (e[11] = 0),
            (e[12] = (t + r) * i),
            (e[13] = (a + n) * u),
            (e[14] = (o + s) * c),
            (e[15] = 1),
            e
          );
        },
        lookAt: function (e, t, r, n) {
          let s, i, u, c, l, h, d, f, m, p;
          const b = t[0],
            M = t[1],
            y = t[2],
            g = n[0],
            w = n[1],
            q = n[2],
            x = r[0],
            E = r[1],
            T = r[2];
          return Math.abs(b - x) < a.E &&
            Math.abs(M - E) < a.E &&
            Math.abs(y - T) < a.E
            ? o(e)
            : ((d = b - x),
              (f = M - E),
              (m = y - T),
              (p = 1 / Math.sqrt(d * d + f * f + m * m)),
              (d *= p),
              (f *= p),
              (m *= p),
              (s = w * m - q * f),
              (i = q * d - g * m),
              (u = g * f - w * d),
              (p = Math.sqrt(s * s + i * i + u * u)),
              p
                ? ((p = 1 / p), (s *= p), (i *= p), (u *= p))
                : ((s = 0), (i = 0), (u = 0)),
              (c = f * u - m * i),
              (l = m * s - d * u),
              (h = d * i - f * s),
              (p = Math.sqrt(c * c + l * l + h * h)),
              p
                ? ((p = 1 / p), (c *= p), (l *= p), (h *= p))
                : ((c = 0), (l = 0), (h = 0)),
              (e[0] = s),
              (e[1] = c),
              (e[2] = d),
              (e[3] = 0),
              (e[4] = i),
              (e[5] = l),
              (e[6] = f),
              (e[7] = 0),
              (e[8] = u),
              (e[9] = h),
              (e[10] = m),
              (e[11] = 0),
              (e[12] = -(s * b + i * M + u * y)),
              (e[13] = -(c * b + l * M + h * y)),
              (e[14] = -(d * b + f * M + m * y)),
              (e[15] = 1),
              e);
        },
        targetTo: function (e, t, r, n) {
          const a = t[0],
            s = t[1],
            o = t[2],
            i = n[0],
            u = n[1],
            c = n[2];
          let l = a - r[0],
            h = s - r[1],
            d = o - r[2],
            f = l * l + h * h + d * d;
          f > 0 && ((f = 1 / Math.sqrt(f)), (l *= f), (h *= f), (d *= f));
          let m = u * d - c * h,
            p = c * l - i * d,
            b = i * h - u * l;
          return (
            (f = m * m + p * p + b * b),
            f > 0 && ((f = 1 / Math.sqrt(f)), (m *= f), (p *= f), (b *= f)),
            (e[0] = m),
            (e[1] = p),
            (e[2] = b),
            (e[3] = 0),
            (e[4] = h * b - d * p),
            (e[5] = d * m - l * b),
            (e[6] = l * p - h * m),
            (e[7] = 0),
            (e[8] = l),
            (e[9] = h),
            (e[10] = d),
            (e[11] = 0),
            (e[12] = a),
            (e[13] = s),
            (e[14] = o),
            (e[15] = 1),
            e
          );
        },
        str: function (e) {
          return (
            'mat4(' +
            e[0] +
            ', ' +
            e[1] +
            ', ' +
            e[2] +
            ', ' +
            e[3] +
            ', ' +
            e[4] +
            ', ' +
            e[5] +
            ', ' +
            e[6] +
            ', ' +
            e[7] +
            ', ' +
            e[8] +
            ', ' +
            e[9] +
            ', ' +
            e[10] +
            ', ' +
            e[11] +
            ', ' +
            e[12] +
            ', ' +
            e[13] +
            ', ' +
            e[14] +
            ', ' +
            e[15] +
            ')'
          );
        },
        frob: function (e) {
          return Math.sqrt(
            e[0] ** 2 +
              e[1] ** 2 +
              e[2] ** 2 +
              e[3] ** 2 +
              e[4] ** 2 +
              e[5] ** 2 +
              e[6] ** 2 +
              e[7] ** 2 +
              e[8] ** 2 +
              e[9] ** 2 +
              e[10] ** 2 +
              e[11] ** 2 +
              e[12] ** 2 +
              e[13] ** 2 +
              e[14] ** 2 +
              e[15] ** 2,
          );
        },
        add: function (e, t, r) {
          return (
            (e[0] = t[0] + r[0]),
            (e[1] = t[1] + r[1]),
            (e[2] = t[2] + r[2]),
            (e[3] = t[3] + r[3]),
            (e[4] = t[4] + r[4]),
            (e[5] = t[5] + r[5]),
            (e[6] = t[6] + r[6]),
            (e[7] = t[7] + r[7]),
            (e[8] = t[8] + r[8]),
            (e[9] = t[9] + r[9]),
            (e[10] = t[10] + r[10]),
            (e[11] = t[11] + r[11]),
            (e[12] = t[12] + r[12]),
            (e[13] = t[13] + r[13]),
            (e[14] = t[14] + r[14]),
            (e[15] = t[15] + r[15]),
            e
          );
        },
        subtract: g,
        multiplyScalar: function (e, t, r) {
          return (
            (e[0] = t[0] * r),
            (e[1] = t[1] * r),
            (e[2] = t[2] * r),
            (e[3] = t[3] * r),
            (e[4] = t[4] * r),
            (e[5] = t[5] * r),
            (e[6] = t[6] * r),
            (e[7] = t[7] * r),
            (e[8] = t[8] * r),
            (e[9] = t[9] * r),
            (e[10] = t[10] * r),
            (e[11] = t[11] * r),
            (e[12] = t[12] * r),
            (e[13] = t[13] * r),
            (e[14] = t[14] * r),
            (e[15] = t[15] * r),
            e
          );
        },
        multiplyScalarAndAdd: function (e, t, r, n) {
          return (
            (e[0] = t[0] + r[0] * n),
            (e[1] = t[1] + r[1] * n),
            (e[2] = t[2] + r[2] * n),
            (e[3] = t[3] + r[3] * n),
            (e[4] = t[4] + r[4] * n),
            (e[5] = t[5] + r[5] * n),
            (e[6] = t[6] + r[6] * n),
            (e[7] = t[7] + r[7] * n),
            (e[8] = t[8] + r[8] * n),
            (e[9] = t[9] + r[9] * n),
            (e[10] = t[10] + r[10] * n),
            (e[11] = t[11] + r[11] * n),
            (e[12] = t[12] + r[12] * n),
            (e[13] = t[13] + r[13] * n),
            (e[14] = t[14] + r[14] * n),
            (e[15] = t[15] + r[15] * n),
            e
          );
        },
        exactEquals: w,
        equals: q,
        isOrthoNormal: x,
        mul: E,
        sub: T,
      });
    },
    24470: (e, t, r) => {
      r.d(t, {
        Gv: () => d,
        SO: () => c,
        r3: () => h,
        Ue: () => s,
        oJ: () => i,
        al: () => o,
        kK: () => l,
        HH: () => u,
      }),
        r(80442),
        r(22021);
      var n = r(70586),
        a = r(6570);
      function s(e = f) {
        return [e[0], e[1], e[2], e[3]];
      }
      function o(e, t, r, n, a = s()) {
        return (a[0] = e), (a[1] = t), (a[2] = r), (a[3] = n), a;
      }
      function i(e, t = s()) {
        return (
          (t[0] = e.xmin), (t[1] = e.ymin), (t[2] = e.xmax), (t[3] = e.ymax), t
        );
      }
      function u(e, t) {
        return new a.Z({
          xmin: e[0],
          ymin: e[1],
          xmax: e[2],
          ymax: e[3],
          spatialReference: t,
        });
      }
      function c(e) {
        return (
          (function (e) {
            return (0, n.Wi)(e) || e[0] >= e[2] ? 0 : e[2] - e[0];
          })(e) *
          (function (e) {
            return e[1] >= e[3] ? 0 : e[3] - e[1];
          })(e)
        );
      }
      function l(e, t) {
        return (
          Math.max(t[0], e[0]) <= Math.min(t[2], e[2]) &&
          Math.max(t[1], e[1]) <= Math.min(t[3], e[3])
        );
      }
      function h(e, t) {
        return t[0] >= e[0] && t[2] <= e[2] && t[1] >= e[1] && t[3] <= e[3];
      }
      const d = [1 / 0, 1 / 0, -1 / 0, -1 / 0],
        f = [0, 0, 0, 0];
    },
    69285: (e, t, r) => {
      r.d(t, { k: () => o });
      var n = r(70586),
        a = r(67900),
        s = r(8744);
      function o(e, t, r) {
        if ((0, n.Wi)(t) || (0, n.Wi)(r) || r.vcsWkid || (0, s.fS)(t, r))
          return null;
        const o = (0, a._R)(t) / (0, a._R)(r);
        if (1 === o) return null;
        switch (e) {
          case 'point':
          case 'esriGeometryPoint':
            return (e) =>
              (function (e, t) {
                e && null != e.z && (e.z *= t);
              })(e, o);
          case 'polyline':
          case 'esriGeometryPolyline':
            return (e) =>
              (function (e, t) {
                if (e)
                  for (const r of e.paths)
                    for (const e of r) e.length > 2 && (e[2] *= t);
              })(e, o);
          case 'polygon':
          case 'esriGeometryPolygon':
            return (e) =>
              (function (e, t) {
                if (e)
                  for (const r of e.rings)
                    for (const e of r) e.length > 2 && (e[2] *= t);
              })(e, o);
          case 'multipoint':
          case 'esriGeometryMultipoint':
            return (e) =>
              (function (e, t) {
                if (e) for (const r of e.points) r.length > 2 && (r[2] *= t);
              })(e, o);
          case 'extent':
          case 'esriGeometryExtent':
            return (e) =>
              (function (e, t) {
                e &&
                  null != e.zmin &&
                  null != e.zmax &&
                  ((e.zmin *= t), (e.zmax *= t));
              })(e, o);
          default:
            return null;
        }
      }
    },
    3172: (e, t, r) => {
      r.r(t), r.d(t, { default: () => f });
      var n = r(68773),
        a = r(40330),
        s = r(20102),
        o = r(80442),
        i = r(22974),
        u = r(70586),
        c = r(95330),
        l = r(17452),
        h = r(71058),
        d = r(85958);
      async function f(e, t) {
        var i;
        const d = (0, l.HK)(e),
          M = (0, l.jc)(e);
        M || d || (e = (0, l.Fv)(e));
        const y = { url: e, requestOptions: { ...(0, u.Wg)(t) } };
        let g = (0, l.oh)(e);
        if (g) {
          const e = await (async function (e, t) {
            if (null != e.responseData) return e.responseData;
            if (
              (e.headers &&
                (t.requestOptions.headers = {
                  ...t.requestOptions.headers,
                  ...e.headers,
                }),
              e.query &&
                (t.requestOptions.query = {
                  ...t.requestOptions.query,
                  ...e.query,
                }),
              e.before)
            ) {
              let r, n;
              try {
                n = await e.before(t);
              } catch (e) {
                r = E('request:interceptor', e, t);
              }
              if (
                ((n instanceof Error || n instanceof s.Z) &&
                  (r = E('request:interceptor', n, t)),
                r)
              )
                throw (e.error && e.error(r), r);
              return n;
            }
          })(g, y);
          if (null != e)
            return {
              data: e,
              getHeader: w,
              requestOptions: y.requestOptions,
              url: y.url,
            };
          g.after || g.error || (g = null);
        }
        if (((e = y.url), 'image' === (t = y.requestOptions).responseType)) {
          if ((0, o.Z)('host-webworker') || (0, o.Z)('host-node'))
            throw E(
              'request:invalid-parameters',
              new Error(
                "responseType 'image' is not supported in Web Workers or Node environment",
              ),
              y,
            );
        } else if (d)
          throw E(
            'request:invalid-parameters',
            new Error(
              'Data URLs are not supported for responseType = ' +
                t.responseType,
            ),
            y,
          );
        if ('head' === t.method) {
          if (t.body)
            throw E(
              'request:invalid-parameters',
              new Error("body parameter cannot be set when method is 'head'"),
              y,
            );
          if (d || M)
            throw E(
              'request:invalid-parameters',
              new Error(
                "data and blob URLs are not supported for method 'head'",
              ),
              y,
            );
        }
        if (
          (await (async function () {
            (0, o.Z)('host-webworker')
              ? m || (m = await r.e(9884).then(r.bind(r, 29884)))
              : f._abortableFetch ||
                (f._abortableFetch = globalThis.fetch.bind(globalThis));
          })(),
          m)
        )
          return m.execute(e, t);
        const q = new AbortController();
        (0, c.fu)(t, () => q.abort());
        const x = {
            controller: q,
            credential: null,
            credentialToken: null,
            fetchOptions: null,
            hasToken: !1,
            interceptor: g,
            params: y,
            redoRequest: !1,
            useIdentity: p.useIdentity,
            useProxy: !1,
            useSSL: !1,
            withCredentials: !1,
          },
          O = await (async function (e) {
            var t, r;
            let s, o;
            await (async function (e) {
              const t = e.params.url,
                r = e.params.requestOptions,
                s = e.controller.signal,
                o = r.body;
              let i = null,
                u = null,
                l = null;
              if (
                (b &&
                  'HTMLFormElement' in globalThis &&
                  (o instanceof FormData
                    ? (i = o)
                    : o instanceof HTMLFormElement &&
                      ((u = o), (i = new FormData(u)))),
                'string' == typeof o && (l = o),
                (e.fetchOptions = {
                  cache:
                    r.cacheBust && !f._abortableFetch.polyfill
                      ? 'no-cache'
                      : 'default',
                  credentials: 'same-origin',
                  headers: r.headers || {},
                  method: 'head' === r.method ? 'HEAD' : 'GET',
                  mode: 'cors',
                  redirect: 'follow',
                  signal: s,
                }),
                (i || l) && (e.fetchOptions.body = i || l),
                'anonymous' === r.authMode && (e.useIdentity = !1),
                (e.hasToken = !!(
                  /token=/i.test(t) ||
                  (r.query && r.query.token) ||
                  (i && i.get && i.get('token')) ||
                  (u && u.elements.token)
                )),
                !e.hasToken &&
                  n.Z.apiKey &&
                  (0, h.r)(t) &&
                  (r.query || (r.query = {}),
                  (r.query.token = n.Z.apiKey),
                  (e.hasToken = !0)),
                e.useIdentity &&
                  !e.hasToken &&
                  !e.credentialToken &&
                  !v(t) &&
                  !(0, c.Hc)(s))
              ) {
                let n;
                'immediate' === r.authMode
                  ? (await T(),
                    (n = await a.id.getCredential(t, { signal: s })),
                    (e.credential = n))
                  : 'no-prompt' === r.authMode
                  ? (await T(),
                    (n = await a.id
                      .getCredential(t, { prompt: !1, signal: s })
                      .catch(() => {})),
                    (e.credential = n))
                  : a.id && (n = a.id.findCredential(t)),
                  n && ((e.credentialToken = n.token), (e.useSSL = !!n.ssl));
              }
            })(e);
            try {
              do {
                [s, o] = await k(e);
              } while (!(await S(e, s, o)));
            } catch (t) {
              const r = E('request:server', t, e.params, s);
              throw (
                ((r.details.ssl = e.useSSL),
                e.interceptor && e.interceptor.error && e.interceptor.error(r),
                r)
              );
            }
            const i = e.params.url;
            if (
              /\/sharing\/rest\/(accounts|portals)\/self/i.test(i) &&
              !e.hasToken &&
              !e.credentialToken &&
              null != (t = o) &&
              null != (r = t.user) &&
              r.username &&
              !(0, l.kl)(i)
            ) {
              const e = (0, l.P$)(i, !0);
              e && p.trustedServers.push(e);
            }
            const u = e.credential;
            if (u && a.id) {
              const e = a.id.findServerInfo(u.server);
              let t = e && e.owningSystemUrl;
              if (t) {
                t = t.replace(/\/?$/, '/sharing');
                const e = a.id.findCredential(t, u.userId);
                e &&
                  -1 === a.id._getIdenticalSvcIdx(t, e) &&
                  e.resources.unshift(t);
              }
            }
            return {
              data: o,
              getHeader: s ? (e) => s.headers.get(e) : w,
              requestOptions: e.params.requestOptions,
              ssl: e.useSSL,
              url: e.params.url,
            };
          })(x);
        return null == (i = g) || null == i.after || i.after(O), O;
      }
      let m;
      const p = n.Z.request,
        b = 'FormData' in globalThis,
        M = [499, 498, 403, 401],
        y = ['COM_0056', 'COM_0057', 'SB_0008'],
        g = [
          /\/arcgis\/tokens/i,
          /\/sharing(\/rest)?\/generatetoken/i,
          /\/rest\/info/i,
        ],
        w = () => null,
        q = Symbol();
      function x(e) {
        const t = (0, l.P$)(e);
        return (
          !t ||
          t.endsWith('.arcgis.com') ||
          f._corsServers.includes(t) ||
          (0, l.kl)(t)
        );
      }
      function E(e, t, r, n) {
        let a = 'Error';
        const o = {
          url: r.url,
          requestOptions: r.requestOptions,
          getHeader: w,
          ssl: !1,
        };
        if (t instanceof s.Z)
          return (
            t.details
              ? ((t.details = (0, i.d9)(t.details)),
                (t.details.url = r.url),
                (t.details.requestOptions = r.requestOptions))
              : (t.details = o),
            t
          );
        if (t) {
          const e = n && ((e) => n.headers.get(e)),
            r = n && n.status,
            s = t.message;
          s && (a = s),
            e && (o.getHeader = e),
            (o.httpStatus =
              (null != t.httpCode ? t.httpCode : t.code) || r || 0),
            (o.subCode = t.subcode),
            (o.messageCode = t.messageCode),
            'string' == typeof t.details
              ? (o.messages = [t.details])
              : (o.messages = t.details),
            (o.raw = q in t ? t[q] : t);
        }
        return (0, c.D_)(t) ? (0, c.zE)() : new s.Z(e, a, o);
      }
      async function T() {
        a.id ||
          (await Promise.all([r.e(280), r.e(1400), r.e(7913)]).then(
            r.bind(r, 33107),
          ));
      }
      function v(e) {
        return g.some((t) => t.test(e));
      }
      async function k(e) {
        let t = e.params.url;
        const r = e.params.requestOptions,
          n = e.fetchOptions,
          s = (0, l.jc)(t) || (0, l.HK)(t),
          i = r.responseType || 'json',
          u = s ? 0 : null != r.timeout ? r.timeout : p.timeout;
        let h = !1;
        if (!s) {
          e.useSSL && (t = (0, l.hO)(t)),
            r.cacheBust &&
              'default' === n.cache &&
              (t = (0, l.ZN)(t, 'request.preventCache', Date.now()));
          let s = { ...r.query };
          e.credentialToken && (s.token = e.credentialToken);
          let i = (0, l.B7)(s);
          (0, o.Z)('esri-url-encodes-apostrophe') &&
            (i = i.replace(/'/g, '%27'));
          const u = t.length + 1 + i.length;
          let c;
          h =
            'delete' === r.method ||
            'post' === r.method ||
            'put' === r.method ||
            !!r.body ||
            u > p.maxUrlLength;
          const d = r.useProxy || !!(0, l.ed)(t);
          if (d) {
            const e = (0, l.b7)(t);
            (c = e.path),
              !h && c.length + 1 + u > p.maxUrlLength && (h = !0),
              e.query && (s = { ...e.query, ...s });
          }
          if ('HEAD' === n.method && (h || d)) {
            if (h) {
              if (u > p.maxUrlLength)
                throw E(
                  'request:invalid-parameters',
                  new Error('URL exceeds maximum length'),
                  e.params,
                );
              throw E(
                'request:invalid-parameters',
                new Error("cannot use POST request when method is 'head'"),
                e.params,
              );
            }
            if (d)
              throw E(
                'request:invalid-parameters',
                new Error("cannot use proxy when method is 'head'"),
                e.params,
              );
          }
          if (
            (h
              ? ((n.method =
                  'delete' === r.method
                    ? 'DELETE'
                    : 'put' === r.method
                    ? 'PUT'
                    : 'POST'),
                r.body
                  ? (t = (0, l.fl)(t, s))
                  : ((n.body = (0, l.B7)(s)),
                    (n.headers['Content-Type'] =
                      'application/x-www-form-urlencoded')))
              : (t = (0, l.fl)(t, s)),
            d && ((e.useProxy = !0), (t = `${c}?${t}`)),
            s.token && b && n.body instanceof FormData)
          ) {
            const e = n.body;
            e.set ? e.set('token', s.token) : e.append('token', s.token);
          }
          if (r.hasOwnProperty('withCredentials'))
            e.withCredentials = r.withCredentials;
          else if (!(0, l.D6)(t, (0, l.TI)()))
            if ((0, l.kl)(t)) e.withCredentials = !0;
            else if (a.id) {
              const r = a.id.findServerInfo(t);
              r && r.webTierAuth && (e.withCredentials = !0);
            }
          e.withCredentials && (n.credentials = 'include');
        }
        let d,
          m,
          M = 0,
          y = !1;
        u > 0 &&
          (M = setTimeout(() => {
            (y = !0), e.controller.abort();
          }, u));
        try {
          if ('native-request-init' === r.responseType) (m = n), (m.url = t);
          else if (
            'image' !== r.responseType ||
            'default' !== n.cache ||
            'GET' !== n.method ||
            h ||
            (function (e) {
              if (e)
                for (const t of Object.getOwnPropertyNames(e))
                  if (e[t]) return !0;
              return !1;
            })(r.headers) ||
            (!s && !e.useProxy && p.proxyUrl && !x(t))
          ) {
            if (
              ((d = await f._abortableFetch(t, n)),
              e.useProxy ||
                (function (e) {
                  const t = (0, l.P$)(e);
                  t && !f._corsServers.includes(t) && f._corsServers.push(t);
                })(t),
              'native' === r.responseType)
            )
              m = d;
            else if ('HEAD' !== n.method)
              if (d.ok) {
                switch (i) {
                  case 'array-buffer':
                    m = await d.arrayBuffer();
                    break;
                  case 'blob':
                  case 'image':
                    m = await d.blob();
                    break;
                  default:
                    m = await d.text();
                }
                if (
                  (M && (clearTimeout(M), (M = 0)),
                  'json' === i || 'xml' === i || 'document' === i)
                )
                  if (m)
                    switch (i) {
                      case 'json':
                        m = JSON.parse(m);
                        break;
                      case 'xml':
                        m = O(m, 'application/xml');
                        break;
                      case 'document':
                        m = O(m, 'text/html');
                    }
                  else m = null;
                if (m) {
                  if ('array-buffer' === i || 'blob' === i) {
                    const e = d.headers.get('Content-Type');
                    if (
                      /application\/json|text\/plain/i.test(e) &&
                      m['blob' === i ? 'size' : 'byteLength'] <= 750
                    )
                      try {
                        const e = await new Response(m).json();
                        e.error && (m = e);
                      } catch {}
                  }
                  'image' === i &&
                    m instanceof Blob &&
                    (m = await C(URL.createObjectURL(m), e, !0));
                }
              } else m = await d.text();
          } else m = await C(t, e);
        } catch (n) {
          if ('AbortError' === n.name) {
            if (y) throw new Error('Timeout exceeded');
            throw (0, c.zE)('Request canceled');
          }
          if (
            !(!d && n instanceof TypeError && p.proxyUrl) ||
            r.body ||
            'delete' === r.method ||
            'head' === r.method ||
            'post' === r.method ||
            'put' === r.method ||
            e.useProxy ||
            x(t)
          )
            throw n;
          (e.redoRequest = !0),
            (0, l.tD)({ proxyUrl: p.proxyUrl, urlPrefix: (0, l.P$)(t) });
        } finally {
          M && clearTimeout(M);
        }
        return [d, m];
      }
      function O(e, t) {
        let r;
        try {
          r = new DOMParser().parseFromString(e, t);
        } catch {}
        if (!r || r.getElementsByTagName('parsererror').length)
          throw new SyntaxError('XML Parse error');
        return r;
      }
      async function S(e, t, r) {
        if (e.redoRequest) return (e.redoRequest = !1), !1;
        const n = e.params.requestOptions;
        if (
          !t ||
          'native' === n.responseType ||
          'native-request-init' === n.responseType
        )
          return !0;
        let s, o, i, u;
        if (!t.ok)
          throw (
            ((s = new Error(`Unable to load ${t.url} status: ${t.status}`)),
            (s[q] = r),
            s)
          );
        null != r && r.error && (s = r.error),
          s &&
            ((o = Number(s.code)),
            (i = s.hasOwnProperty('subcode') ? Number(s.subcode) : null),
            (u = s.messageCode),
            (u = u && u.toUpperCase()));
        const c = n.authMode;
        if (
          403 === o &&
          (4 === i ||
            (s.message &&
              s.message.toLowerCase().indexOf('ssl') > -1 &&
              -1 === s.message.toLowerCase().indexOf('permission')))
        ) {
          if (!e.useSSL) return (e.useSSL = !0), !1;
        } else if (
          !e.hasToken &&
          e.useIdentity &&
          ('no-prompt' !== c || 498 === o) &&
          -1 !== M.indexOf(o) &&
          !v(e.params.url) &&
          (403 !== o ||
            (-1 === y.indexOf(u) &&
              (null == i || (2 === i && e.credentialToken))))
        ) {
          await T();
          try {
            const t = await a.id.getCredential(e.params.url, {
              error: E('request:server', s, e.params),
              prompt: 'no-prompt' !== c,
              signal: e.controller.signal,
              token: e.credentialToken,
            });
            return (
              (e.credential = t),
              (e.credentialToken = t.token),
              (e.useSSL = e.useSSL || t.ssl),
              !1
            );
          } catch (t) {
            if ('no-prompt' === c)
              return (e.credential = null), (e.credentialToken = null), !1;
            s = t;
          }
        }
        if (s) throw s;
        return !0;
      }
      function C(e, t, r = !1) {
        const n = t.controller.signal,
          a = new Image();
        return (
          t.withCredentials
            ? (a.crossOrigin = 'use-credentials')
            : (a.crossOrigin = 'anonymous'),
          (a.alt = ''),
          (a.src = e),
          (0, d.f)(a, e, r, n)
        );
      }
      (f._abortableFetch = null),
        (f._corsServers = [
          'https://server.arcgisonline.com',
          'https://services.arcgisonline.com',
        ]);
    },
    71058: (e, t, r) => {
      r.d(t, { r: () => s });
      var n = r(17452);
      const a = [
        'elevation3d.arcgis.com',
        'js.arcgis.com',
        'jsdev.arcgis.com',
        'jsqa.arcgis.com',
        'static.arcgis.com',
      ];
      function s(e) {
        const t = (0, n.P$)(e, !0);
        return (
          t &&
          t.endsWith('.arcgis.com') &&
          !a.includes(t) &&
          !e.endsWith('/sharing/rest/generateToken')
        );
      }
    },
    85958: (e, t, r) => {
      r.d(t, { f: () => o });
      var n = r(80442),
        a = r(70586),
        s = r(95330);
      function o(e, t, r = !1, o) {
        return new Promise((u, c) => {
          if ((0, s.Hc)(o)) return void c(i());
          let l = () => {
              f(), c(new Error(`Unable to load ${t}`));
            },
            h = () => {
              const t = e;
              f(), u(t);
            },
            d = () => {
              if (!e) return;
              const t = e;
              f(), (t.src = ''), c(i());
            };
          const f = () => {
            (0, n.Z)('esri-image-decode') ||
              (e.removeEventListener('error', l),
              e.removeEventListener('load', h)),
              (l = null),
              (h = null),
              (e = null),
              (0, a.pC)(o) && o.removeEventListener('abort', d),
              (d = null),
              r && URL.revokeObjectURL(t);
          };
          (0, a.pC)(o) && o.addEventListener('abort', d),
            (0, n.Z)('esri-image-decode')
              ? e.decode().then(h, l)
              : (e.addEventListener('error', l), e.addEventListener('load', h));
        });
      }
      function i() {
        try {
          return new DOMException('Aborted', 'AbortError');
        } catch {
          const e = new Error();
          return (e.name = 'AbortError'), e;
        }
      }
    },
  },
]);
