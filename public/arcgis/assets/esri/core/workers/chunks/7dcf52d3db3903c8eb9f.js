'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [6459],
  {
    21787: (t, n, r) => {
      r.d(n, { a: () => c, f: () => o, i: () => s, t: () => a });
      var e = r(46851);
      function o(t, n) {
        return (
          (t[0] = n[0]),
          (t[1] = n[1]),
          (t[2] = n[2]),
          (t[3] = n[4]),
          (t[4] = n[5]),
          (t[5] = n[6]),
          (t[6] = n[8]),
          (t[7] = n[9]),
          (t[8] = n[10]),
          t
        );
      }
      function a(t, n) {
        if (t === n) {
          const r = n[1],
            e = n[2],
            o = n[5];
          (t[1] = n[3]),
            (t[2] = n[6]),
            (t[3] = r),
            (t[5] = n[7]),
            (t[6] = e),
            (t[7] = o);
        } else
          (t[0] = n[0]),
            (t[1] = n[3]),
            (t[2] = n[6]),
            (t[3] = n[1]),
            (t[4] = n[4]),
            (t[5] = n[7]),
            (t[6] = n[2]),
            (t[7] = n[5]),
            (t[8] = n[8]);
        return t;
      }
      function i(t, n, r) {
        const e = n[0],
          o = n[1],
          a = n[2],
          i = n[3],
          c = n[4],
          u = n[5],
          s = n[6],
          f = n[7],
          l = n[8],
          h = r[0],
          p = r[1],
          y = r[2],
          d = r[3],
          M = r[4],
          m = r[5],
          g = r[6],
          b = r[7],
          A = r[8];
        return (
          (t[0] = h * e + p * i + y * s),
          (t[1] = h * o + p * c + y * f),
          (t[2] = h * a + p * u + y * l),
          (t[3] = d * e + M * i + m * s),
          (t[4] = d * o + M * c + m * f),
          (t[5] = d * a + M * u + m * l),
          (t[6] = g * e + b * i + A * s),
          (t[7] = g * o + b * c + A * f),
          (t[8] = g * a + b * u + A * l),
          t
        );
      }
      function c(t, n) {
        const r = n[0],
          e = n[1],
          o = n[2],
          a = n[3],
          i = n[4],
          c = n[5],
          u = n[6],
          s = n[7],
          f = n[8],
          l = n[9],
          h = n[10],
          p = n[11],
          y = n[12],
          d = n[13],
          M = n[14],
          m = n[15],
          g = r * c - e * i,
          b = r * u - o * i,
          A = r * s - a * i,
          T = e * u - o * c,
          P = e * s - a * c,
          _ = o * s - a * u,
          E = f * d - l * y,
          F = f * M - h * y,
          v = f * m - p * y,
          B = l * M - h * d,
          x = l * m - p * d,
          w = h * m - p * M;
        let C = g * w - b * x + A * B + T * v - P * F + _ * E;
        return C
          ? ((C = 1 / C),
            (t[0] = (c * w - u * x + s * B) * C),
            (t[1] = (u * v - i * w - s * F) * C),
            (t[2] = (i * x - c * v + s * E) * C),
            (t[3] = (o * x - e * w - a * B) * C),
            (t[4] = (r * w - o * v + a * F) * C),
            (t[5] = (e * v - r * x - a * E) * C),
            (t[6] = (d * _ - M * P + m * T) * C),
            (t[7] = (M * A - y * _ - m * b) * C),
            (t[8] = (y * P - d * A + m * g) * C),
            t)
          : null;
      }
      function u(t, n, r) {
        return (
          (t[0] = n[0] - r[0]),
          (t[1] = n[1] - r[1]),
          (t[2] = n[2] - r[2]),
          (t[3] = n[3] - r[3]),
          (t[4] = n[4] - r[4]),
          (t[5] = n[5] - r[5]),
          (t[6] = n[6] - r[6]),
          (t[7] = n[7] - r[7]),
          (t[8] = n[8] - r[8]),
          t
        );
      }
      function s(t) {
        const n = e.E,
          r = t[0],
          o = t[1],
          a = t[2],
          i = t[3],
          c = t[4],
          u = t[5],
          s = t[6],
          f = t[7],
          l = t[8];
        return (
          Math.abs(1 - (r * r + i * i + s * s)) <= n &&
          Math.abs(1 - (o * o + c * c + f * f)) <= n &&
          Math.abs(1 - (a * a + u * u + l * l)) <= n
        );
      }
      const f = i,
        l = u;
      Object.freeze({
        __proto__: null,
        fromMat4: o,
        copy: function (t, n) {
          return (
            (t[0] = n[0]),
            (t[1] = n[1]),
            (t[2] = n[2]),
            (t[3] = n[3]),
            (t[4] = n[4]),
            (t[5] = n[5]),
            (t[6] = n[6]),
            (t[7] = n[7]),
            (t[8] = n[8]),
            t
          );
        },
        set: function (t, n, r, e, o, a, i, c, u, s) {
          return (
            (t[0] = n),
            (t[1] = r),
            (t[2] = e),
            (t[3] = o),
            (t[4] = a),
            (t[5] = i),
            (t[6] = c),
            (t[7] = u),
            (t[8] = s),
            t
          );
        },
        identity: function (t) {
          return (
            (t[0] = 1),
            (t[1] = 0),
            (t[2] = 0),
            (t[3] = 0),
            (t[4] = 1),
            (t[5] = 0),
            (t[6] = 0),
            (t[7] = 0),
            (t[8] = 1),
            t
          );
        },
        transpose: a,
        invert: function (t, n) {
          const r = n[0],
            e = n[1],
            o = n[2],
            a = n[3],
            i = n[4],
            c = n[5],
            u = n[6],
            s = n[7],
            f = n[8],
            l = f * i - c * s,
            h = -f * a + c * u,
            p = s * a - i * u;
          let y = r * l + e * h + o * p;
          return y
            ? ((y = 1 / y),
              (t[0] = l * y),
              (t[1] = (-f * e + o * s) * y),
              (t[2] = (c * e - o * i) * y),
              (t[3] = h * y),
              (t[4] = (f * r - o * u) * y),
              (t[5] = (-c * r + o * a) * y),
              (t[6] = p * y),
              (t[7] = (-s * r + e * u) * y),
              (t[8] = (i * r - e * a) * y),
              t)
            : null;
        },
        adjoint: function (t, n) {
          const r = n[0],
            e = n[1],
            o = n[2],
            a = n[3],
            i = n[4],
            c = n[5],
            u = n[6],
            s = n[7],
            f = n[8];
          return (
            (t[0] = i * f - c * s),
            (t[1] = o * s - e * f),
            (t[2] = e * c - o * i),
            (t[3] = c * u - a * f),
            (t[4] = r * f - o * u),
            (t[5] = o * a - r * c),
            (t[6] = a * s - i * u),
            (t[7] = e * u - r * s),
            (t[8] = r * i - e * a),
            t
          );
        },
        determinant: function (t) {
          const n = t[0],
            r = t[1],
            e = t[2],
            o = t[3],
            a = t[4],
            i = t[5],
            c = t[6],
            u = t[7],
            s = t[8];
          return (
            n * (s * a - i * u) + r * (-s * o + i * c) + e * (u * o - a * c)
          );
        },
        multiply: i,
        translate: function (t, n, r) {
          const e = n[0],
            o = n[1],
            a = n[2],
            i = n[3],
            c = n[4],
            u = n[5],
            s = n[6],
            f = n[7],
            l = n[8],
            h = r[0],
            p = r[1];
          return (
            (t[0] = e),
            (t[1] = o),
            (t[2] = a),
            (t[3] = i),
            (t[4] = c),
            (t[5] = u),
            (t[6] = h * e + p * i + s),
            (t[7] = h * o + p * c + f),
            (t[8] = h * a + p * u + l),
            t
          );
        },
        rotate: function (t, n, r) {
          const e = n[0],
            o = n[1],
            a = n[2],
            i = n[3],
            c = n[4],
            u = n[5],
            s = n[6],
            f = n[7],
            l = n[8],
            h = Math.sin(r),
            p = Math.cos(r);
          return (
            (t[0] = p * e + h * i),
            (t[1] = p * o + h * c),
            (t[2] = p * a + h * u),
            (t[3] = p * i - h * e),
            (t[4] = p * c - h * o),
            (t[5] = p * u - h * a),
            (t[6] = s),
            (t[7] = f),
            (t[8] = l),
            t
          );
        },
        scale: function (t, n, r) {
          const e = r[0],
            o = r[1],
            a = r[2];
          return (
            (t[0] = e * n[0]),
            (t[1] = e * n[1]),
            (t[2] = e * n[2]),
            (t[3] = o * n[3]),
            (t[4] = o * n[4]),
            (t[5] = o * n[5]),
            (t[6] = a * n[6]),
            (t[7] = a * n[7]),
            (t[8] = a * n[8]),
            t
          );
        },
        scaleByVec2: function (t, n, r) {
          const e = r[0],
            o = r[1];
          return (
            (t[0] = e * n[0]),
            (t[1] = e * n[1]),
            (t[2] = e * n[2]),
            (t[3] = o * n[3]),
            (t[4] = o * n[4]),
            (t[5] = o * n[5]),
            t
          );
        },
        fromTranslation: function (t, n) {
          return (
            (t[0] = 1),
            (t[1] = 0),
            (t[2] = 0),
            (t[3] = 0),
            (t[4] = 1),
            (t[5] = 0),
            (t[6] = n[0]),
            (t[7] = n[1]),
            (t[8] = 1),
            t
          );
        },
        fromRotation: function (t, n) {
          const r = Math.sin(n),
            e = Math.cos(n);
          return (
            (t[0] = e),
            (t[1] = r),
            (t[2] = 0),
            (t[3] = -r),
            (t[4] = e),
            (t[5] = 0),
            (t[6] = 0),
            (t[7] = 0),
            (t[8] = 1),
            t
          );
        },
        fromScaling: function (t, n) {
          return (
            (t[0] = n[0]),
            (t[1] = 0),
            (t[2] = 0),
            (t[3] = 0),
            (t[4] = n[1]),
            (t[5] = 0),
            (t[6] = 0),
            (t[7] = 0),
            (t[8] = 1),
            t
          );
        },
        fromMat2d: function (t, n) {
          return (
            (t[0] = n[0]),
            (t[1] = n[1]),
            (t[2] = 0),
            (t[3] = n[2]),
            (t[4] = n[3]),
            (t[5] = 0),
            (t[6] = n[4]),
            (t[7] = n[5]),
            (t[8] = 1),
            t
          );
        },
        fromQuat: function (t, n) {
          const r = n[0],
            e = n[1],
            o = n[2],
            a = n[3],
            i = r + r,
            c = e + e,
            u = o + o,
            s = r * i,
            f = e * i,
            l = e * c,
            h = o * i,
            p = o * c,
            y = o * u,
            d = a * i,
            M = a * c,
            m = a * u;
          return (
            (t[0] = 1 - l - y),
            (t[3] = f - m),
            (t[6] = h + M),
            (t[1] = f + m),
            (t[4] = 1 - s - y),
            (t[7] = p - d),
            (t[2] = h - M),
            (t[5] = p + d),
            (t[8] = 1 - s - l),
            t
          );
        },
        normalFromMat4Legacy: function (t, n) {
          const r = n[0],
            e = n[1],
            o = n[2],
            a = n[4],
            i = n[5],
            c = n[6],
            u = n[8],
            s = n[9],
            f = n[10],
            l = f * i - c * s,
            h = -f * a + c * u,
            p = s * a - i * u,
            y = r * l + e * h + o * p;
          if (!y) return null;
          const d = 1 / y;
          return (
            (t[0] = l * d),
            (t[1] = (-f * e + o * s) * d),
            (t[2] = (c * e - o * i) * d),
            (t[3] = h * d),
            (t[4] = (f * r - o * u) * d),
            (t[5] = (-c * r + o * a) * d),
            (t[6] = p * d),
            (t[7] = (-s * r + e * u) * d),
            (t[8] = (i * r - e * a) * d),
            t
          );
        },
        normalFromMat4: c,
        projection: function (t, n, r) {
          return (
            (t[0] = 2 / n),
            (t[1] = 0),
            (t[2] = 0),
            (t[3] = 0),
            (t[4] = -2 / r),
            (t[5] = 0),
            (t[6] = -1),
            (t[7] = 1),
            (t[8] = 1),
            t
          );
        },
        str: function (t) {
          return (
            'mat3(' +
            t[0] +
            ', ' +
            t[1] +
            ', ' +
            t[2] +
            ', ' +
            t[3] +
            ', ' +
            t[4] +
            ', ' +
            t[5] +
            ', ' +
            t[6] +
            ', ' +
            t[7] +
            ', ' +
            t[8] +
            ')'
          );
        },
        frob: function (t) {
          return Math.sqrt(
            t[0] ** 2 +
              t[1] ** 2 +
              t[2] ** 2 +
              t[3] ** 2 +
              t[4] ** 2 +
              t[5] ** 2 +
              t[6] ** 2 +
              t[7] ** 2 +
              t[8] ** 2,
          );
        },
        add: function (t, n, r) {
          return (
            (t[0] = n[0] + r[0]),
            (t[1] = n[1] + r[1]),
            (t[2] = n[2] + r[2]),
            (t[3] = n[3] + r[3]),
            (t[4] = n[4] + r[4]),
            (t[5] = n[5] + r[5]),
            (t[6] = n[6] + r[6]),
            (t[7] = n[7] + r[7]),
            (t[8] = n[8] + r[8]),
            t
          );
        },
        subtract: u,
        multiplyScalar: function (t, n, r) {
          return (
            (t[0] = n[0] * r),
            (t[1] = n[1] * r),
            (t[2] = n[2] * r),
            (t[3] = n[3] * r),
            (t[4] = n[4] * r),
            (t[5] = n[5] * r),
            (t[6] = n[6] * r),
            (t[7] = n[7] * r),
            (t[8] = n[8] * r),
            t
          );
        },
        multiplyScalarAndAdd: function (t, n, r, e) {
          return (
            (t[0] = n[0] + r[0] * e),
            (t[1] = n[1] + r[1] * e),
            (t[2] = n[2] + r[2] * e),
            (t[3] = n[3] + r[3] * e),
            (t[4] = n[4] + r[4] * e),
            (t[5] = n[5] + r[5] * e),
            (t[6] = n[6] + r[6] * e),
            (t[7] = n[7] + r[7] * e),
            (t[8] = n[8] + r[8] * e),
            t
          );
        },
        exactEquals: function (t, n) {
          return (
            t[0] === n[0] &&
            t[1] === n[1] &&
            t[2] === n[2] &&
            t[3] === n[3] &&
            t[4] === n[4] &&
            t[5] === n[5] &&
            t[6] === n[6] &&
            t[7] === n[7] &&
            t[8] === n[8]
          );
        },
        equals: function (t, n) {
          const r = t[0],
            o = t[1],
            a = t[2],
            i = t[3],
            c = t[4],
            u = t[5],
            s = t[6],
            f = t[7],
            l = t[8],
            h = n[0],
            p = n[1],
            y = n[2],
            d = n[3],
            M = n[4],
            m = n[5],
            g = n[6],
            b = n[7],
            A = n[8];
          return (
            Math.abs(r - h) <= e.E * Math.max(1, Math.abs(r), Math.abs(h)) &&
            Math.abs(o - p) <= e.E * Math.max(1, Math.abs(o), Math.abs(p)) &&
            Math.abs(a - y) <= e.E * Math.max(1, Math.abs(a), Math.abs(y)) &&
            Math.abs(i - d) <= e.E * Math.max(1, Math.abs(i), Math.abs(d)) &&
            Math.abs(c - M) <= e.E * Math.max(1, Math.abs(c), Math.abs(M)) &&
            Math.abs(u - m) <= e.E * Math.max(1, Math.abs(u), Math.abs(m)) &&
            Math.abs(s - g) <= e.E * Math.max(1, Math.abs(s), Math.abs(g)) &&
            Math.abs(f - b) <= e.E * Math.max(1, Math.abs(f), Math.abs(b)) &&
            Math.abs(l - A) <= e.E * Math.max(1, Math.abs(l), Math.abs(A))
          );
        },
        isOrthoNormal: s,
        mul: f,
        sub: l,
      });
    },
    46521: (t, n, r) => {
      function e() {
        return [1, 0, 0, 0, 1, 0, 0, 0, 1];
      }
      function o(t, n) {
        return new Float64Array(t, n, 9);
      }
      r.d(n, { a: () => o, c: () => e }),
        Object.freeze({
          __proto__: null,
          create: e,
          clone: function (t) {
            return [t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8]];
          },
          fromValues: function (t, n, r, e, o, a, i, c, u) {
            return [t, n, r, e, o, a, i, c, u];
          },
          createView: o,
        });
    },
    13598: (t, n, r) => {
      function e() {
        return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
      }
      function o(t) {
        return [
          t[0],
          t[1],
          t[2],
          t[3],
          t[4],
          t[5],
          t[6],
          t[7],
          t[8],
          t[9],
          t[10],
          t[11],
          t[12],
          t[13],
          t[14],
          t[15],
        ];
      }
      function a(t, n) {
        return new Float64Array(t, n, 16);
      }
      r.d(n, { I: () => i, a: () => a, b: () => o, c: () => e });
      const i = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
      Object.freeze({
        __proto__: null,
        create: e,
        clone: o,
        fromValues: function (t, n, r, e, o, a, i, c, u, s, f, l, h, p, y, d) {
          return [t, n, r, e, o, a, i, c, u, s, f, l, h, p, y, d];
        },
        createView: a,
        IDENTITY: i,
      });
    },
    51305: (t, n, r) => {
      r.d(n, {
        c: () => p,
        g: () => f,
        j: () => x,
        k: () => d,
        m: () => l,
        s: () => s,
      });
      var e = r(46521),
        o = r(94961),
        a = r(65617),
        i = r(46851),
        c = r(17896),
        u = r(98766);
      function s(t, n, r) {
        r *= 0.5;
        const e = Math.sin(r);
        return (
          (t[0] = e * n[0]),
          (t[1] = e * n[1]),
          (t[2] = e * n[2]),
          (t[3] = Math.cos(r)),
          t
        );
      }
      function f(t, n) {
        const r = 2 * Math.acos(n[3]),
          e = Math.sin(r / 2);
        return (
          e > i.E
            ? ((t[0] = n[0] / e), (t[1] = n[1] / e), (t[2] = n[2] / e))
            : ((t[0] = 1), (t[1] = 0), (t[2] = 0)),
          r
        );
      }
      function l(t, n, r) {
        const e = n[0],
          o = n[1],
          a = n[2],
          i = n[3],
          c = r[0],
          u = r[1],
          s = r[2],
          f = r[3];
        return (
          (t[0] = e * f + i * c + o * s - a * u),
          (t[1] = o * f + i * u + a * c - e * s),
          (t[2] = a * f + i * s + e * u - o * c),
          (t[3] = i * f - e * c - o * u - a * s),
          t
        );
      }
      function h(t, n, r, e) {
        const o = n[0],
          a = n[1],
          c = n[2],
          u = n[3];
        let s,
          f,
          l,
          h,
          p,
          y = r[0],
          d = r[1],
          M = r[2],
          m = r[3];
        return (
          (f = o * y + a * d + c * M + u * m),
          f < 0 && ((f = -f), (y = -y), (d = -d), (M = -M), (m = -m)),
          1 - f > i.E
            ? ((s = Math.acos(f)),
              (l = Math.sin(s)),
              (h = Math.sin((1 - e) * s) / l),
              (p = Math.sin(e * s) / l))
            : ((h = 1 - e), (p = e)),
          (t[0] = h * o + p * y),
          (t[1] = h * a + p * d),
          (t[2] = h * c + p * M),
          (t[3] = h * u + p * m),
          t
        );
      }
      function p(t, n) {
        return (t[0] = -n[0]), (t[1] = -n[1]), (t[2] = -n[2]), (t[3] = n[3]), t;
      }
      function y(t, n) {
        const r = n[0] + n[4] + n[8];
        let e;
        if (r > 0)
          (e = Math.sqrt(r + 1)),
            (t[3] = 0.5 * e),
            (e = 0.5 / e),
            (t[0] = (n[5] - n[7]) * e),
            (t[1] = (n[6] - n[2]) * e),
            (t[2] = (n[1] - n[3]) * e);
        else {
          let r = 0;
          n[4] > n[0] && (r = 1), n[8] > n[3 * r + r] && (r = 2);
          const o = (r + 1) % 3,
            a = (r + 2) % 3;
          (e = Math.sqrt(n[3 * r + r] - n[3 * o + o] - n[3 * a + a] + 1)),
            (t[r] = 0.5 * e),
            (e = 0.5 / e),
            (t[3] = (n[3 * o + a] - n[3 * a + o]) * e),
            (t[o] = (n[3 * o + r] + n[3 * r + o]) * e),
            (t[a] = (n[3 * a + r] + n[3 * r + a]) * e);
        }
        return t;
      }
      function d(t, n, r, e) {
        const o = (0.5 * Math.PI) / 180;
        (n *= o), (r *= o), (e *= o);
        const a = Math.sin(n),
          i = Math.cos(n),
          c = Math.sin(r),
          u = Math.cos(r),
          s = Math.sin(e),
          f = Math.cos(e);
        return (
          (t[0] = a * u * f - i * c * s),
          (t[1] = i * c * f + a * u * s),
          (t[2] = i * u * s - a * c * f),
          (t[3] = i * u * f + a * c * s),
          t
        );
      }
      const M = u.c,
        m = u.s,
        g = u.a,
        b = l,
        A = u.b,
        T = u.d,
        P = u.l,
        _ = u.e,
        E = _,
        F = u.f,
        v = F,
        B = u.n,
        x = u.g,
        w = u.h,
        C = (0, a.c)(),
        R = (0, a.f)(1, 0, 0),
        S = (0, a.f)(0, 1, 0),
        I = (0, o.a)(),
        O = (0, o.a)(),
        z = (0, e.c)();
      Object.freeze({
        __proto__: null,
        identity: function (t) {
          return (t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 1), t;
        },
        setAxisAngle: s,
        getAxisAngle: f,
        multiply: l,
        rotateX: function (t, n, r) {
          r *= 0.5;
          const e = n[0],
            o = n[1],
            a = n[2],
            i = n[3],
            c = Math.sin(r),
            u = Math.cos(r);
          return (
            (t[0] = e * u + i * c),
            (t[1] = o * u + a * c),
            (t[2] = a * u - o * c),
            (t[3] = i * u - e * c),
            t
          );
        },
        rotateY: function (t, n, r) {
          r *= 0.5;
          const e = n[0],
            o = n[1],
            a = n[2],
            i = n[3],
            c = Math.sin(r),
            u = Math.cos(r);
          return (
            (t[0] = e * u - a * c),
            (t[1] = o * u + i * c),
            (t[2] = a * u + e * c),
            (t[3] = i * u - o * c),
            t
          );
        },
        rotateZ: function (t, n, r) {
          r *= 0.5;
          const e = n[0],
            o = n[1],
            a = n[2],
            i = n[3],
            c = Math.sin(r),
            u = Math.cos(r);
          return (
            (t[0] = e * u + o * c),
            (t[1] = o * u - e * c),
            (t[2] = a * u + i * c),
            (t[3] = i * u - a * c),
            t
          );
        },
        calculateW: function (t, n) {
          const r = n[0],
            e = n[1],
            o = n[2];
          return (
            (t[0] = r),
            (t[1] = e),
            (t[2] = o),
            (t[3] = Math.sqrt(Math.abs(1 - r * r - e * e - o * o))),
            t
          );
        },
        slerp: h,
        random: function (t) {
          const n = (0, i.R)(),
            r = (0, i.R)(),
            e = (0, i.R)(),
            o = Math.sqrt(1 - n),
            a = Math.sqrt(n);
          return (
            (t[0] = o * Math.sin(2 * Math.PI * r)),
            (t[1] = o * Math.cos(2 * Math.PI * r)),
            (t[2] = a * Math.sin(2 * Math.PI * e)),
            (t[3] = a * Math.cos(2 * Math.PI * e)),
            t
          );
        },
        invert: function (t, n) {
          const r = n[0],
            e = n[1],
            o = n[2],
            a = n[3],
            i = r * r + e * e + o * o + a * a,
            c = i ? 1 / i : 0;
          return (
            (t[0] = -r * c), (t[1] = -e * c), (t[2] = -o * c), (t[3] = a * c), t
          );
        },
        conjugate: p,
        fromMat3: y,
        fromEuler: d,
        str: function (t) {
          return 'quat(' + t[0] + ', ' + t[1] + ', ' + t[2] + ', ' + t[3] + ')';
        },
        copy: M,
        set: m,
        add: g,
        mul: b,
        scale: A,
        dot: T,
        lerp: P,
        length: _,
        len: E,
        squaredLength: F,
        sqrLen: v,
        normalize: B,
        exactEquals: x,
        equals: w,
        rotationTo: function (t, n, r) {
          const e = (0, c.d)(n, r);
          return e < -0.999999
            ? ((0, c.c)(C, R, n),
              (0, c.u)(C) < 1e-6 && (0, c.c)(C, S, n),
              (0, c.n)(C, C),
              s(t, C, Math.PI),
              t)
            : e > 0.999999
            ? ((t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 1), t)
            : ((0, c.c)(C, n, r),
              (t[0] = C[0]),
              (t[1] = C[1]),
              (t[2] = C[2]),
              (t[3] = 1 + e),
              B(t, t));
        },
        sqlerp: function (t, n, r, e, o, a) {
          return h(I, n, o, a), h(O, r, e, a), h(t, I, O, 2 * a * (1 - a)), t;
        },
        setAxes: function (t, n, r, e) {
          const o = z;
          return (
            (o[0] = r[0]),
            (o[3] = r[1]),
            (o[6] = r[2]),
            (o[1] = e[0]),
            (o[4] = e[1]),
            (o[7] = e[2]),
            (o[2] = -n[0]),
            (o[5] = -n[1]),
            (o[8] = -n[2]),
            B(t, y(t, o))
          );
        },
      });
    },
    94961: (t, n, r) => {
      function e() {
        return [0, 0, 0, 1];
      }
      function o(t) {
        return [t[0], t[1], t[2], t[3]];
      }
      function a(t, n) {
        return new Float64Array(t, n, 4);
      }
      r.d(n, { I: () => i, a: () => e, b: () => o, c: () => a });
      const i = [0, 0, 0, 1];
      Object.freeze({
        __proto__: null,
        create: e,
        clone: o,
        fromValues: function (t, n, r, e) {
          return [t, n, r, e];
        },
        createView: a,
        IDENTITY: i,
      });
    },
    20773: (t, n, r) => {
      r.d(n, { a: () => a, b: () => u, n: () => c, s: () => i, t: () => o });
      var e = r(72220);
      function o(t, n, r) {
        if (t.count !== n.count)
          return void e.c.error(
            'source and destination buffers need to have the same number of elements',
          );
        const o = t.count,
          a = r[0],
          i = r[1],
          c = r[2],
          u = r[4],
          s = r[5],
          f = r[6],
          l = r[8],
          h = r[9],
          p = r[10],
          y = r[12],
          d = r[13],
          M = r[14],
          m = t.typedBuffer,
          g = t.typedBufferStride,
          b = n.typedBuffer,
          A = n.typedBufferStride;
        for (let t = 0; t < o; t++) {
          const n = t * g,
            r = t * A,
            e = b[r],
            o = b[r + 1],
            T = b[r + 2];
          (m[n] = a * e + u * o + l * T + y),
            (m[n + 1] = i * e + s * o + h * T + d),
            (m[n + 2] = c * e + f * o + p * T + M);
        }
      }
      function a(t, n, r) {
        if (t.count !== n.count)
          return void e.c.error(
            'source and destination buffers need to have the same number of elements',
          );
        const o = t.count,
          a = r[0],
          i = r[1],
          c = r[2],
          u = r[3],
          s = r[4],
          f = r[5],
          l = r[6],
          h = r[7],
          p = r[8],
          y = t.typedBuffer,
          d = t.typedBufferStride,
          M = n.typedBuffer,
          m = n.typedBufferStride;
        for (let t = 0; t < o; t++) {
          const n = t * d,
            r = t * m,
            e = M[r],
            o = M[r + 1],
            g = M[r + 2];
          (y[n] = a * e + u * o + l * g),
            (y[n + 1] = i * e + s * o + h * g),
            (y[n + 2] = c * e + f * o + p * g);
        }
      }
      function i(t, n, r) {
        const e = Math.min(t.count, n.count),
          o = t.typedBuffer,
          a = t.typedBufferStride,
          i = n.typedBuffer,
          c = n.typedBufferStride;
        for (let t = 0; t < e; t++) {
          const n = t * a,
            e = t * c;
          (o[n] = r * i[e]),
            (o[n + 1] = r * i[e + 1]),
            (o[n + 2] = r * i[e + 2]);
        }
      }
      function c(t, n) {
        const r = Math.min(t.count, n.count),
          e = t.typedBuffer,
          o = t.typedBufferStride,
          a = n.typedBuffer,
          i = n.typedBufferStride;
        for (let t = 0; t < r; t++) {
          const n = t * o,
            r = t * i,
            c = a[r],
            u = a[r + 1],
            s = a[r + 2],
            f = Math.sqrt(c * c + u * u + s * s);
          if (f > 0) {
            const t = 1 / f;
            (e[n] = t * c), (e[n + 1] = t * u), (e[n + 2] = t * s);
          }
        }
      }
      function u(t, n, r) {
        const e = Math.min(t.count, n.count),
          o = t.typedBuffer,
          a = t.typedBufferStride,
          i = n.typedBuffer,
          c = n.typedBufferStride;
        for (let t = 0; t < e; t++) {
          const n = t * a,
            e = t * c;
          (o[n] = i[e] >> r),
            (o[n + 1] = i[e + 1] >> r),
            (o[n + 2] = i[e + 2] >> r);
        }
      }
      Object.freeze({
        __proto__: null,
        transformMat4: o,
        transformMat3: a,
        scale: i,
        normalize: c,
        shiftRight: u,
      });
    },
    56067: (t, n, r) => {
      function e(t, n, r) {
        const e = t.typedBuffer,
          o = t.typedBufferStride,
          a = n.typedBuffer,
          i = n.typedBufferStride,
          c = r ? r.count : n.count;
        let u = (r && r.dstIndex ? r.dstIndex : 0) * o,
          s = (r && r.srcIndex ? r.srcIndex : 0) * i;
        for (let t = 0; t < c; ++t)
          (e[u] = a[s]),
            (e[u + 1] = a[s + 1]),
            (e[u + 2] = a[s + 2]),
            (u += o),
            (s += i);
      }
      function o(t, n, r, e, o) {
        var a, i;
        const c = t.typedBuffer,
          u = t.typedBufferStride,
          s = null != (a = null == o ? void 0 : o.count) ? a : t.count;
        let f = (null != (i = null == o ? void 0 : o.dstIndex) ? i : 0) * u;
        for (let t = 0; t < s; ++t)
          (c[f] = n), (c[f + 1] = r), (c[f + 2] = e), (f += u);
      }
      r.d(n, { c: () => e, f: () => o }),
        Object.freeze({ __proto__: null, copy: e, fill: o });
    },
    2674: (t, n, r) => {
      r.d(n, { Z: () => T });
      var e,
        o = r(43697),
        a = r(96674),
        i = r(70586),
        c = r(5600),
        u = (r(67676), r(80442), r(75215), r(52011)),
        s = r(52138),
        f = r(13598),
        l = r(17896),
        h = r(65617),
        p = r(13473),
        y = r(44547),
        d = r(24678),
        M = r(3709),
        m = r(56481),
        g = r(20773),
        b = r(56067);
      let A = (e = class extends a.wq {
        constructor(t) {
          super(t),
            (this.origin = (0, h.c)()),
            (this.translation = (0, h.c)()),
            (this.rotation = (0, M.Ue)()),
            (this.scale = (0, h.f)(1, 1, 1)),
            (this.geographic = !0);
        }
        get localMatrix() {
          const t = (0, f.c)();
          return (
            (0, s.u)(t, this.scale),
            (0, s.e)(t, t, (0, M.WH)(this.rotation), (0, M.ZZ)(this.rotation)),
            (0, s.j)(t, t, this.translation),
            t
          );
        }
        get localMatrixInverse() {
          return (0, s.a)((0, f.c)(), this.localMatrix);
        }
        applyLocal(t, n) {
          return (0, l.m)(n, t, this.localMatrix);
        }
        applyLocalInverse(t, n) {
          return (0, l.m)(n, t, this.localMatrixInverse);
        }
        project(t, n) {
          const r = new Float64Array(t.length),
            e = m.fP.fromTypedArray(r),
            o = m.fP.fromTypedArray(t);
          if (this.geographic) {
            const t = (0, d.rS)(n),
              a = (0, f.c)();
            return (
              (0, y.Bm)(n, this.origin, a, t),
              (0, s.m)(a, a, this.localMatrix),
              (0, g.t)(e, o, a),
              (0, y.CM)(r, t, 0, r, n, 0, r.length / 3),
              r
            );
          }
          const { localMatrix: a, origin: i } = this;
          (0, s.v)(a, f.I) ? (0, b.c)(e, o) : (0, g.t)(e, o, a);
          for (let t = 0; t < r.length; t += 3)
            (r[t + 0] += i[0]), (r[t + 1] += i[1]), (r[t + 2] += i[2]);
          return r;
        }
        getOriginPoint(t) {
          const [n, r, e] = this.origin;
          return new p.Z({ x: n, y: r, z: e, spatialReference: t });
        }
        equals(t) {
          return (
            (0, i.pC)(t) &&
            this.geographic === t.geographic &&
            (0, l.k)(this.origin, t.origin) &&
            (0, s.w)(this.localMatrix, t.localMatrix)
          );
        }
        clone() {
          const t = {
            origin: (0, h.a)(this.origin),
            translation: (0, h.a)(this.translation),
            rotation: (0, M.Ue)(this.rotation),
            scale: (0, h.a)(this.scale),
            geographic: this.geographic,
          };
          return new e(t);
        }
      });
      (0, o._)(
        [(0, c.Cb)({ type: [Number], nonNullable: !0, json: { write: !0 } })],
        A.prototype,
        'origin',
        void 0,
      ),
        (0, o._)(
          [(0, c.Cb)({ type: [Number], nonNullable: !0, json: { write: !0 } })],
          A.prototype,
          'translation',
          void 0,
        ),
        (0, o._)(
          [(0, c.Cb)({ type: [Number], nonNullable: !0, json: { write: !0 } })],
          A.prototype,
          'rotation',
          void 0,
        ),
        (0, o._)(
          [(0, c.Cb)({ type: [Number], nonNullable: !0, json: { write: !0 } })],
          A.prototype,
          'scale',
          void 0,
        ),
        (0, o._)(
          [(0, c.Cb)({ type: Boolean, nonNullable: !0, json: { write: !0 } })],
          A.prototype,
          'geographic',
          void 0,
        ),
        (0, o._)([(0, c.Cb)()], A.prototype, 'localMatrix', null),
        (0, o._)([(0, c.Cb)()], A.prototype, 'localMatrixInverse', null),
        (A = e =
          (0, o._)([(0, u.j)('esri.geometry.support.MeshTransform')], A));
      const T = A;
    },
    3709: (t, n, r) => {
      r.d(n, {
        WH: () => l,
        ZZ: () => f,
        qC: () => s,
        Ue: () => c,
        uT: () => u,
      });
      var e = r(22021),
        o = r(51305),
        a = r(94961),
        i = r(17896);
      function c(t = h) {
        return [t[0], t[1], t[2], t[3]];
      }
      function u(t, n, r = c()) {
        return (0, i.g)(r, t), (r[3] = n), r;
      }
      function s(t, n, r = c()) {
        return (
          (0, o.s)(p, t, l(t)),
          (0, o.s)(y, n, l(n)),
          (0, o.m)(p, y, p),
          (function (t, n) {
            return (t[3] = n), t;
          })(r, (0, e.BV)((0, o.g)(r, p)))
        );
      }
      function f(t) {
        return t;
      }
      function l(t) {
        return (0, e.Vl)(t[3]);
      }
      const h = [0, 0, 1, 0],
        p = (0, a.a)(),
        y = (0, a.a)();
      c();
    },
    72220: (t, n, r) => {
      r.d(n, { c: () => e });
      const e = r(92604).Z.getLogger('esri.views.3d.support.buffer.math');
    },
    13442: (t, n, r) => {
      function e(t, n) {
        var r;
        return (
          t.isGeographic ||
          (t.isWebMercator &&
            (null == (r = null == n ? void 0 : n.geographic) || r))
        );
      }
      r.d(n, { h: () => e });
    },
    66459: (t, n, r) => {
      r.d(n, {
        iv: () => M,
        I5: () => m,
        w1: () => g,
        FF: () => b,
        Yq: () => A,
      });
      var e = r(70586),
        o = r(67900),
        a = r(46521),
        i = r(52138),
        c = r(13598),
        u = r(21787),
        s = r(44547),
        f = r(24678),
        l = r(2674),
        h = r(56481),
        p = r(20773),
        y = r(13442),
        d = r(56493);
      function M(t, n, r) {
        return (0, y.h)(n.spatialReference, r)
          ? (function (t, n, r) {
              const e = n.spatialReference,
                o = F(n, r, w),
                a = new Float64Array(t.position.length),
                i = (function (t, n, r, e) {
                  (0, p.t)(h.fP.fromTypedArray(e), h.fP.fromTypedArray(t), n);
                  const o = new Float64Array(t.length);
                  return (0, d.To)(e, o, r);
                })(t.position, o, e, a),
                c = (0, u.a)(R, o);
              return {
                position: i,
                normal: T(i, a, t.normal, c, e),
                tangent: P(i, a, t.tangent, c, e),
              };
            })(t, n, r)
          : (function (t, n, r) {
              const e = new Float64Array(t.position.length),
                o = t.position,
                a = n.x,
                i = n.y,
                c = n.z || 0,
                { horizontal: u, vertical: s } = x(
                  r ? r.unit : null,
                  n.spatialReference,
                );
              for (let t = 0; t < o.length; t += 3)
                (e[t + 0] = o[t + 0] * u + a),
                  (e[t + 1] = o[t + 1] * u + i),
                  (e[t + 2] = o[t + 2] * s + c);
              return { position: e, normal: t.normal, tangent: t.tangent };
            })(t, n, r);
      }
      function m(t, n, r) {
        const { position: o, normal: a, tangent: i } = t;
        if ((0, e.Wi)(n)) return { position: o, normal: a, tangent: i };
        const c = n.localMatrix;
        return M(
          {
            position: (0, d.zZ)(o, new Float64Array(o.length), c),
            normal: (0, e.pC)(a)
              ? (0, d.w9)(a, new Float32Array(a.length), c)
              : null,
            tangent: (0, e.pC)(i)
              ? (0, d.VS)(i, new Float32Array(i.length), c)
              : null,
          },
          n.getOriginPoint(r),
          { geographic: n.geographic },
        );
      }
      function g(t, n, r) {
        if (null != r && r.useTransform) {
          var e;
          const { position: o, normal: a, tangent: i } = t;
          return {
            vertexAttributes: { position: o, normal: a, tangent: i },
            transform: new l.Z({
              origin: [n.x, n.y, null != (e = n.z) ? e : 0],
              geographic: (0, y.h)(n.spatialReference, r),
            }),
          };
        }
        return { vertexAttributes: M(t, n, r), transform: null };
      }
      function b(t, n, r) {
        return (0, y.h)(n.spatialReference, r) ? E(t, n, r) : _(t, n, r);
      }
      function A(t, n, r, o) {
        if ((0, e.Wi)(n)) return b(t, r, o);
        const a = m(t, n, r.spatialReference);
        return r.equals(n.getOriginPoint(r.spatialReference))
          ? _(a, r, o)
          : (0, y.h)(r.spatialReference, o)
          ? E(a, r, o)
          : _(a, r, o);
      }
      function T(t, n, r, o, a) {
        if ((0, e.Wi)(r)) return null;
        const i = new Float32Array(r.length);
        return (
          (0, p.a)(h.ct.fromTypedArray(i), h.ct.fromTypedArray(r), o),
          (0, d.Yk)(i, t, n, a, i),
          i
        );
      }
      function P(t, n, r, o, a) {
        if ((0, e.Wi)(r)) return null;
        const i = new Float32Array(r.length);
        (0, p.a)(
          h.ct.fromTypedArray(i, 4 * Float32Array.BYTES_PER_ELEMENT),
          h.ct.fromTypedArray(r, 4 * Float32Array.BYTES_PER_ELEMENT),
          o,
        );
        for (let t = 3; t < i.length; t += 4) i[t] = r[t];
        return (0, d.M2)(i, t, n, a, i), i;
      }
      function _(t, n, r) {
        const e = new Float64Array(t.position.length),
          o = t.position,
          a = n.x,
          i = n.y,
          c = n.z || 0,
          { horizontal: u, vertical: s } = x(
            r ? r.unit : null,
            n.spatialReference,
          );
        for (let t = 0; t < o.length; t += 3)
          (e[t + 0] = (o[t + 0] - a) / u),
            (e[t + 1] = (o[t + 1] - i) / u),
            (e[t + 2] = (o[t + 2] - c) / s);
        return { position: e, normal: t.normal, tangent: t.tangent };
      }
      function E(t, n, r) {
        const e = n.spatialReference;
        F(n, r, w);
        const o = (0, i.a)(C, w),
          a = new Float64Array(t.position.length),
          c = (function (t, n, r, e) {
            const o = (0, d.XO)(t, n, e),
              a = h.fP.fromTypedArray(o),
              i = new Float64Array(o.length),
              c = h.fP.fromTypedArray(i);
            return (0, p.t)(c, a, r), i;
          })(t.position, e, o, a),
          s = (0, u.a)(R, o);
        return {
          position: c,
          normal: v(t.normal, t.position, a, e, s),
          tangent: B(t.tangent, t.position, a, e, s),
        };
      }
      function F(t, n, r) {
        (0, s.Bm)(
          t.spatialReference,
          [t.x, t.y, t.z || 0],
          r,
          (0, f.rS)(t.spatialReference),
        );
        const { horizontal: e, vertical: o } = x(
          n ? n.unit : null,
          t.spatialReference,
        );
        return (0, i.h)(r, r, [e, e, o]), r;
      }
      function v(t, n, r, o, a) {
        if ((0, e.Wi)(t)) return null;
        const i = (0, d.Iz)(t, n, r, o, new Float32Array(t.length)),
          c = h.ct.fromTypedArray(i);
        return (0, p.a)(c, c, a), i;
      }
      function B(t, n, r, o, a) {
        if ((0, e.Wi)(t)) return null;
        const i = (0, d.wi)(t, n, r, o, new Float32Array(t.length)),
          c = h.ct.fromTypedArray(i, 4 * Float32Array.BYTES_PER_ELEMENT);
        return (0, p.a)(c, c, a), i;
      }
      function x(t, n) {
        if ((0, e.Wi)(t)) return S;
        const r = n.isGeographic ? 1 : (0, o.Z7)(n),
          a = n.isGeographic ? 1 : (0, o._R)(n),
          i = (0, o.En)(1, t, 'meters');
        return { horizontal: i * r, vertical: i * a };
      }
      const w = (0, c.c)(),
        C = (0, c.c)(),
        R = (0, a.c)(),
        S = { horizontal: 1, vertical: 1 };
    },
    56493: (t, n, r) => {
      r.d(n, {
        To: () => A,
        Yk: () => g,
        Iz: () => m,
        M2: () => F,
        wi: () => E,
        XO: () => b,
        w9: () => P,
        zZ: () => T,
        VS: () => _,
      });
      var e = r(92604),
        o = r(70586),
        a = r(21787),
        i = r(46521),
        c = r(13598),
        u = r(17896),
        s = r(65617),
        f = r(44547),
        l = r(24678),
        h = r(8744),
        p = r(40488),
        y = r(56481),
        d = r(20773);
      const M = e.Z.getLogger(
        'esri.geometry.support.meshUtils.normalProjection',
      );
      function m(t, n, r, e, o) {
        return B(e)
          ? (v(
              w.TO_PCPF,
              y.ct.fromTypedArray(t),
              y.fP.fromTypedArray(n),
              y.fP.fromTypedArray(r),
              e,
              y.ct.fromTypedArray(o),
            ),
            o)
          : (M.error('Cannot convert spatial reference to PCPF'), o);
      }
      function g(t, n, r, e, o) {
        return B(e)
          ? (v(
              w.FROM_PCPF,
              y.ct.fromTypedArray(t),
              y.fP.fromTypedArray(n),
              y.fP.fromTypedArray(r),
              e,
              y.ct.fromTypedArray(o),
            ),
            o)
          : (M.error('Cannot convert to spatial reference from PCPF'), o);
      }
      function b(t, n, r) {
        return (0, f.CM)(t, n, 0, r, (0, l.rS)(n), 0, t.length / 3), r;
      }
      function A(t, n, r) {
        return (0, f.CM)(t, (0, l.rS)(r), 0, n, r, 0, t.length / 3), n;
      }
      function T(t, n, r) {
        if ((0, o.Wi)(t)) return n;
        const e = y.fP.fromTypedArray(t),
          a = y.fP.fromTypedArray(n);
        return (0, d.t)(a, e, r), n;
      }
      function P(t, n, r) {
        if ((0, o.Wi)(t)) return n;
        (0, a.a)(O, r);
        const e = y.ct.fromTypedArray(t),
          i = y.ct.fromTypedArray(n);
        return (0, d.a)(i, e, O), (0, a.i)(O) || (0, d.n)(i, i), n;
      }
      function _(t, n, r) {
        if ((0, o.Wi)(t)) return n;
        (0, a.a)(O, r);
        const e = y.ct.fromTypedArray(t, 4 * Float32Array.BYTES_PER_ELEMENT),
          i = y.ct.fromTypedArray(n, 4 * Float32Array.BYTES_PER_ELEMENT);
        if (((0, d.a)(i, e, O), (0, a.i)(O) || (0, d.n)(i, i), t !== n))
          for (let r = 3; r < t.length; r += 4) n[r] = t[r];
        return n;
      }
      function E(t, n, r, e, o) {
        if (!B(e))
          return M.error('Cannot convert spatial reference to PCPF'), o;
        v(
          w.TO_PCPF,
          y.ct.fromTypedArray(t, 4 * Float32Array.BYTES_PER_ELEMENT),
          y.fP.fromTypedArray(n),
          y.fP.fromTypedArray(r),
          e,
          y.ct.fromTypedArray(o, 4 * Float32Array.BYTES_PER_ELEMENT),
        );
        for (let n = 3; n < t.length; n += 4) o[n] = t[n];
        return o;
      }
      function F(t, n, r, e, o) {
        if (!B(e))
          return M.error('Cannot convert to spatial reference from PCPF'), o;
        v(
          w.FROM_PCPF,
          y.ct.fromTypedArray(t, 16),
          y.fP.fromTypedArray(n),
          y.fP.fromTypedArray(r),
          e,
          y.ct.fromTypedArray(o, 16),
        );
        for (let n = 3; n < t.length; n += 4) o[n] = t[n];
        return o;
      }
      function v(t, n, r, e, o, i) {
        if (!n) return;
        const c = r.count,
          s = (0, l.rS)(o);
        if (x(o))
          for (let r = 0; r < c; r++)
            e.getVec(r, R),
              n.getVec(r, S),
              (0, f.Bm)(s, R, I, s),
              (0, a.f)(O, I),
              t === w.FROM_PCPF && (0, a.t)(O, O),
              (0, u.t)(S, S, O),
              i.setVec(r, S);
        else
          for (let o = 0; o < c; o++) {
            e.getVec(o, R),
              n.getVec(o, S),
              (0, f.Bm)(s, R, I, s),
              (0, a.f)(O, I);
            const c = (0, p.mZ)(r.get(o, 1));
            let l = Math.cos(c);
            t === w.TO_PCPF && (l = 1 / l),
              (O[0] *= l),
              (O[1] *= l),
              (O[2] *= l),
              (O[3] *= l),
              (O[4] *= l),
              (O[5] *= l),
              t === w.FROM_PCPF && (0, a.t)(O, O),
              (0, u.t)(S, S, O),
              (0, u.n)(S, S),
              i.setVec(o, S);
          }
        return i;
      }
      function B(t) {
        return (
          x(t) ||
          (function (t) {
            return t.isWebMercator;
          })(t)
        );
      }
      function x(t) {
        return t.isWGS84 || (0, h.yW)(t) || (0, h.BZ)(t) || (0, h.V2)(t);
      }
      var w, C;
      ((C = w || (w = {}))[(C.TO_PCPF = 0)] = 'TO_PCPF'),
        (C[(C.FROM_PCPF = 1)] = 'FROM_PCPF');
      const R = (0, s.c)(),
        S = (0, s.c)(),
        I = (0, c.c)(),
        O = (0, i.c)();
    },
  },
]);
