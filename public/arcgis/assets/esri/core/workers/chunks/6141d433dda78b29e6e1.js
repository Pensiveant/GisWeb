'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [1562],
  {
    46851: (t, e, r) => {
      r.d(e, { E: () => n, R: () => i });
      const n = 1e-6,
        i = Math.random,
        o = Math.PI / 180,
        s = 180 / Math.PI;
      Object.freeze({
        __proto__: null,
        EPSILON: n,
        RANDOM: i,
        toRadian: function (t) {
          return t * o;
        },
        toDegree: function (t) {
          return t * s;
        },
        equals: function (t, e) {
          return Math.abs(t - e) <= n * Math.max(1, Math.abs(t), Math.abs(e));
        },
      });
    },
    17896: (t, e, r) => {
      r.d(e, {
        E: () => u,
        a: () => c,
        b: () => l,
        c: () => M,
        d: () => x,
        e: () => g,
        f: () => h,
        g: () => s,
        h: () => p,
        i: () => m,
        k: () => b,
        l: () => o,
        m: () => _,
        n: () => y,
        p: () => d,
        q: () => R,
        r: () => v,
        s: () => a,
        t: () => w,
        u: () => G,
      });
      var n = r(65617),
        i = r(46851);
      function o(t) {
        const e = t[0],
          r = t[1],
          n = t[2];
        return Math.sqrt(e * e + r * r + n * n);
      }
      function s(t, e) {
        return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), t;
      }
      function a(t, e, r, n) {
        return (t[0] = e), (t[1] = r), (t[2] = n), t;
      }
      function l(t, e, r) {
        return (
          (t[0] = e[0] + r[0]), (t[1] = e[1] + r[1]), (t[2] = e[2] + r[2]), t
        );
      }
      function h(t, e, r) {
        return (
          (t[0] = e[0] - r[0]), (t[1] = e[1] - r[1]), (t[2] = e[2] - r[2]), t
        );
      }
      function f(t, e, r) {
        return (
          (t[0] = e[0] * r[0]), (t[1] = e[1] * r[1]), (t[2] = e[2] * r[2]), t
        );
      }
      function u(t, e, r) {
        return (
          (t[0] = e[0] / r[0]), (t[1] = e[1] / r[1]), (t[2] = e[2] / r[2]), t
        );
      }
      function c(t, e, r) {
        return (t[0] = e[0] * r), (t[1] = e[1] * r), (t[2] = e[2] * r), t;
      }
      function m(t, e) {
        const r = e[0] - t[0],
          n = e[1] - t[1],
          i = e[2] - t[2];
        return Math.sqrt(r * r + n * n + i * i);
      }
      function p(t, e) {
        const r = e[0] - t[0],
          n = e[1] - t[1],
          i = e[2] - t[2];
        return r * r + n * n + i * i;
      }
      function d(t) {
        const e = t[0],
          r = t[1],
          n = t[2];
        return e * e + r * r + n * n;
      }
      function y(t, e) {
        const r = e[0],
          n = e[1],
          i = e[2];
        let o = r * r + n * n + i * i;
        return (
          o > 0 &&
            ((o = 1 / Math.sqrt(o)),
            (t[0] = e[0] * o),
            (t[1] = e[1] * o),
            (t[2] = e[2] * o)),
          t
        );
      }
      function x(t, e) {
        return t[0] * e[0] + t[1] * e[1] + t[2] * e[2];
      }
      function M(t, e, r) {
        const n = e[0],
          i = e[1],
          o = e[2],
          s = r[0],
          a = r[1],
          l = r[2];
        return (
          (t[0] = i * l - o * a),
          (t[1] = o * s - n * l),
          (t[2] = n * a - i * s),
          t
        );
      }
      function g(t, e, r, n) {
        const i = e[0],
          o = e[1],
          s = e[2];
        return (
          (t[0] = i + n * (r[0] - i)),
          (t[1] = o + n * (r[1] - o)),
          (t[2] = s + n * (r[2] - s)),
          t
        );
      }
      function _(t, e, r) {
        const n = e[0],
          i = e[1],
          o = e[2];
        return (
          (t[0] = r[0] * n + r[4] * i + r[8] * o + r[12]),
          (t[1] = r[1] * n + r[5] * i + r[9] * o + r[13]),
          (t[2] = r[2] * n + r[6] * i + r[10] * o + r[14]),
          t
        );
      }
      function w(t, e, r) {
        const n = e[0],
          i = e[1],
          o = e[2];
        return (
          (t[0] = n * r[0] + i * r[3] + o * r[6]),
          (t[1] = n * r[1] + i * r[4] + o * r[7]),
          (t[2] = n * r[2] + i * r[5] + o * r[8]),
          t
        );
      }
      function R(t, e, r) {
        const n = r[0],
          i = r[1],
          o = r[2],
          s = r[3],
          a = e[0],
          l = e[1],
          h = e[2];
        let f = i * h - o * l,
          u = o * a - n * h,
          c = n * l - i * a,
          m = i * c - o * u,
          p = o * f - n * c,
          d = n * u - i * f;
        const y = 2 * s;
        return (
          (f *= y),
          (u *= y),
          (c *= y),
          (m *= 2),
          (p *= 2),
          (d *= 2),
          (t[0] = a + f + m),
          (t[1] = l + u + p),
          (t[2] = h + c + d),
          t
        );
      }
      const C = (0, n.c)(),
        S = (0, n.c)();
      function b(t, e) {
        return t[0] === e[0] && t[1] === e[1] && t[2] === e[2];
      }
      function v(t, e, r) {
        const n = r[0] - e[0],
          i = r[1] - e[1],
          o = r[2] - e[2];
        let s = n * n + i * i + o * o;
        return s > 0
          ? ((s = 1 / Math.sqrt(s)),
            (t[0] = n * s),
            (t[1] = i * s),
            (t[2] = o * s),
            t)
          : ((t[0] = 0), (t[1] = 0), (t[2] = 0), t);
      }
      const z = h,
        A = f,
        P = u,
        Z = m,
        k = p,
        G = o,
        W = d;
      Object.freeze({
        __proto__: null,
        length: o,
        copy: s,
        set: a,
        add: l,
        subtract: h,
        multiply: f,
        divide: u,
        ceil: function (t, e) {
          return (
            (t[0] = Math.ceil(e[0])),
            (t[1] = Math.ceil(e[1])),
            (t[2] = Math.ceil(e[2])),
            t
          );
        },
        floor: function (t, e) {
          return (
            (t[0] = Math.floor(e[0])),
            (t[1] = Math.floor(e[1])),
            (t[2] = Math.floor(e[2])),
            t
          );
        },
        min: function (t, e, r) {
          return (
            (t[0] = Math.min(e[0], r[0])),
            (t[1] = Math.min(e[1], r[1])),
            (t[2] = Math.min(e[2], r[2])),
            t
          );
        },
        max: function (t, e, r) {
          return (
            (t[0] = Math.max(e[0], r[0])),
            (t[1] = Math.max(e[1], r[1])),
            (t[2] = Math.max(e[2], r[2])),
            t
          );
        },
        round: function (t, e) {
          return (
            (t[0] = Math.round(e[0])),
            (t[1] = Math.round(e[1])),
            (t[2] = Math.round(e[2])),
            t
          );
        },
        scale: c,
        scaleAndAdd: function (t, e, r, n) {
          return (
            (t[0] = e[0] + r[0] * n),
            (t[1] = e[1] + r[1] * n),
            (t[2] = e[2] + r[2] * n),
            t
          );
        },
        distance: m,
        squaredDistance: p,
        squaredLength: d,
        negate: function (t, e) {
          return (t[0] = -e[0]), (t[1] = -e[1]), (t[2] = -e[2]), t;
        },
        inverse: function (t, e) {
          return (t[0] = 1 / e[0]), (t[1] = 1 / e[1]), (t[2] = 1 / e[2]), t;
        },
        normalize: y,
        dot: x,
        cross: M,
        lerp: g,
        hermite: function (t, e, r, n, i, o) {
          const s = o * o,
            a = s * (2 * o - 3) + 1,
            l = s * (o - 2) + o,
            h = s * (o - 1),
            f = s * (3 - 2 * o);
          return (
            (t[0] = e[0] * a + r[0] * l + n[0] * h + i[0] * f),
            (t[1] = e[1] * a + r[1] * l + n[1] * h + i[1] * f),
            (t[2] = e[2] * a + r[2] * l + n[2] * h + i[2] * f),
            t
          );
        },
        bezier: function (t, e, r, n, i, o) {
          const s = 1 - o,
            a = s * s,
            l = o * o,
            h = a * s,
            f = 3 * o * a,
            u = 3 * l * s,
            c = l * o;
          return (
            (t[0] = e[0] * h + r[0] * f + n[0] * u + i[0] * c),
            (t[1] = e[1] * h + r[1] * f + n[1] * u + i[1] * c),
            (t[2] = e[2] * h + r[2] * f + n[2] * u + i[2] * c),
            t
          );
        },
        random: function (t, e) {
          e = e || 1;
          const r = 2 * (0, i.R)() * Math.PI,
            n = 2 * (0, i.R)() - 1,
            o = Math.sqrt(1 - n * n) * e;
          return (
            (t[0] = Math.cos(r) * o),
            (t[1] = Math.sin(r) * o),
            (t[2] = n * e),
            t
          );
        },
        transformMat4: _,
        transformMat3: w,
        transformQuat: R,
        rotateX: function (t, e, r, n) {
          const i = [],
            o = [];
          return (
            (i[0] = e[0] - r[0]),
            (i[1] = e[1] - r[1]),
            (i[2] = e[2] - r[2]),
            (o[0] = i[0]),
            (o[1] = i[1] * Math.cos(n) - i[2] * Math.sin(n)),
            (o[2] = i[1] * Math.sin(n) + i[2] * Math.cos(n)),
            (t[0] = o[0] + r[0]),
            (t[1] = o[1] + r[1]),
            (t[2] = o[2] + r[2]),
            t
          );
        },
        rotateY: function (t, e, r, n) {
          const i = [],
            o = [];
          return (
            (i[0] = e[0] - r[0]),
            (i[1] = e[1] - r[1]),
            (i[2] = e[2] - r[2]),
            (o[0] = i[2] * Math.sin(n) + i[0] * Math.cos(n)),
            (o[1] = i[1]),
            (o[2] = i[2] * Math.cos(n) - i[0] * Math.sin(n)),
            (t[0] = o[0] + r[0]),
            (t[1] = o[1] + r[1]),
            (t[2] = o[2] + r[2]),
            t
          );
        },
        rotateZ: function (t, e, r, n) {
          const i = [],
            o = [];
          return (
            (i[0] = e[0] - r[0]),
            (i[1] = e[1] - r[1]),
            (i[2] = e[2] - r[2]),
            (o[0] = i[0] * Math.cos(n) - i[1] * Math.sin(n)),
            (o[1] = i[0] * Math.sin(n) + i[1] * Math.cos(n)),
            (o[2] = i[2]),
            (t[0] = o[0] + r[0]),
            (t[1] = o[1] + r[1]),
            (t[2] = o[2] + r[2]),
            t
          );
        },
        angle: function (t, e) {
          s(C, t), s(S, e), y(C, C), y(S, S);
          const r = x(C, S);
          return r > 1 ? 0 : r < -1 ? Math.PI : Math.acos(r);
        },
        str: function (t) {
          return 'vec3(' + t[0] + ', ' + t[1] + ', ' + t[2] + ')';
        },
        exactEquals: b,
        equals: function (t, e) {
          if (t === e) return !0;
          const r = t[0],
            n = t[1],
            o = t[2],
            s = e[0],
            a = e[1],
            l = e[2];
          return (
            Math.abs(r - s) <= i.E * Math.max(1, Math.abs(r), Math.abs(s)) &&
            Math.abs(n - a) <= i.E * Math.max(1, Math.abs(n), Math.abs(a)) &&
            Math.abs(o - l) <= i.E * Math.max(1, Math.abs(o), Math.abs(l))
          );
        },
        direction: v,
        sub: z,
        mul: A,
        div: P,
        dist: Z,
        sqrDist: k,
        len: G,
        sqrLen: W,
      });
    },
    65617: (t, e, r) => {
      function n() {
        return [0, 0, 0];
      }
      function i(t) {
        return [t[0], t[1], t[2]];
      }
      function o(t, e, r) {
        return [t, e, r];
      }
      function s(t) {
        const e = [0, 0, 0],
          r = Math.min(3, t.length);
        for (let n = 0; n < r; ++n) e[n] = t[n];
        return e;
      }
      function a(t, e) {
        return new Float64Array(t, e, 3);
      }
      function l() {
        return o(1, 1, 1);
      }
      function h() {
        return o(1, 0, 0);
      }
      function f() {
        return o(0, 1, 0);
      }
      function u() {
        return o(0, 0, 1);
      }
      r.d(e, {
        O: () => m,
        Z: () => c,
        a: () => i,
        b: () => a,
        c: () => n,
        d: () => s,
        f: () => o,
      });
      const c = [0, 0, 0],
        m = l(),
        p = h(),
        d = f(),
        y = u();
      Object.freeze({
        __proto__: null,
        create: n,
        clone: i,
        fromValues: o,
        fromArray: s,
        createView: a,
        zeros: function () {
          return [0, 0, 0];
        },
        ones: l,
        unitX: h,
        unitY: f,
        unitZ: u,
        ZEROS: c,
        ONES: m,
        UNIT_X: p,
        UNIT_Y: d,
        UNIT_Z: y,
      });
    },
    98766: (t, e, r) => {
      r.d(e, {
        a: () => s,
        b: () => f,
        c: () => i,
        d: () => y,
        e: () => m,
        f: () => p,
        g: () => M,
        h: () => g,
        l: () => x,
        n: () => d,
        s: () => o,
      });
      var n = r(46851);
      function i(t, e) {
        return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t;
      }
      function o(t, e, r, n, i) {
        return (t[0] = e), (t[1] = r), (t[2] = n), (t[3] = i), t;
      }
      function s(t, e, r) {
        return (
          (t[0] = e[0] + r[0]),
          (t[1] = e[1] + r[1]),
          (t[2] = e[2] + r[2]),
          (t[3] = e[3] + r[3]),
          t
        );
      }
      function a(t, e, r) {
        return (
          (t[0] = e[0] - r[0]),
          (t[1] = e[1] - r[1]),
          (t[2] = e[2] - r[2]),
          (t[3] = e[3] - r[3]),
          t
        );
      }
      function l(t, e, r) {
        return (
          (t[0] = e[0] * r[0]),
          (t[1] = e[1] * r[1]),
          (t[2] = e[2] * r[2]),
          (t[3] = e[3] * r[3]),
          t
        );
      }
      function h(t, e, r) {
        return (
          (t[0] = e[0] / r[0]),
          (t[1] = e[1] / r[1]),
          (t[2] = e[2] / r[2]),
          (t[3] = e[3] / r[3]),
          t
        );
      }
      function f(t, e, r) {
        return (
          (t[0] = e[0] * r),
          (t[1] = e[1] * r),
          (t[2] = e[2] * r),
          (t[3] = e[3] * r),
          t
        );
      }
      function u(t, e) {
        const r = e[0] - t[0],
          n = e[1] - t[1],
          i = e[2] - t[2],
          o = e[3] - t[3];
        return Math.sqrt(r * r + n * n + i * i + o * o);
      }
      function c(t, e) {
        const r = e[0] - t[0],
          n = e[1] - t[1],
          i = e[2] - t[2],
          o = e[3] - t[3];
        return r * r + n * n + i * i + o * o;
      }
      function m(t) {
        const e = t[0],
          r = t[1],
          n = t[2],
          i = t[3];
        return Math.sqrt(e * e + r * r + n * n + i * i);
      }
      function p(t) {
        const e = t[0],
          r = t[1],
          n = t[2],
          i = t[3];
        return e * e + r * r + n * n + i * i;
      }
      function d(t, e) {
        const r = e[0],
          n = e[1],
          i = e[2],
          o = e[3];
        let s = r * r + n * n + i * i + o * o;
        return (
          s > 0 &&
            ((s = 1 / Math.sqrt(s)),
            (t[0] = r * s),
            (t[1] = n * s),
            (t[2] = i * s),
            (t[3] = o * s)),
          t
        );
      }
      function y(t, e) {
        return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3];
      }
      function x(t, e, r, n) {
        const i = e[0],
          o = e[1],
          s = e[2],
          a = e[3];
        return (
          (t[0] = i + n * (r[0] - i)),
          (t[1] = o + n * (r[1] - o)),
          (t[2] = s + n * (r[2] - s)),
          (t[3] = a + n * (r[3] - a)),
          t
        );
      }
      function M(t, e) {
        return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3];
      }
      function g(t, e) {
        const r = t[0],
          i = t[1],
          o = t[2],
          s = t[3],
          a = e[0],
          l = e[1],
          h = e[2],
          f = e[3];
        return (
          Math.abs(r - a) <= n.E * Math.max(1, Math.abs(r), Math.abs(a)) &&
          Math.abs(i - l) <= n.E * Math.max(1, Math.abs(i), Math.abs(l)) &&
          Math.abs(o - h) <= n.E * Math.max(1, Math.abs(o), Math.abs(h)) &&
          Math.abs(s - f) <= n.E * Math.max(1, Math.abs(s), Math.abs(f))
        );
      }
      const _ = a,
        w = l,
        R = h,
        C = u,
        S = c,
        b = m,
        v = p;
      Object.freeze({
        __proto__: null,
        copy: i,
        set: o,
        add: s,
        subtract: a,
        multiply: l,
        divide: h,
        ceil: function (t, e) {
          return (
            (t[0] = Math.ceil(e[0])),
            (t[1] = Math.ceil(e[1])),
            (t[2] = Math.ceil(e[2])),
            (t[3] = Math.ceil(e[3])),
            t
          );
        },
        floor: function (t, e) {
          return (
            (t[0] = Math.floor(e[0])),
            (t[1] = Math.floor(e[1])),
            (t[2] = Math.floor(e[2])),
            (t[3] = Math.floor(e[3])),
            t
          );
        },
        min: function (t, e, r) {
          return (
            (t[0] = Math.min(e[0], r[0])),
            (t[1] = Math.min(e[1], r[1])),
            (t[2] = Math.min(e[2], r[2])),
            (t[3] = Math.min(e[3], r[3])),
            t
          );
        },
        max: function (t, e, r) {
          return (
            (t[0] = Math.max(e[0], r[0])),
            (t[1] = Math.max(e[1], r[1])),
            (t[2] = Math.max(e[2], r[2])),
            (t[3] = Math.max(e[3], r[3])),
            t
          );
        },
        round: function (t, e) {
          return (
            (t[0] = Math.round(e[0])),
            (t[1] = Math.round(e[1])),
            (t[2] = Math.round(e[2])),
            (t[3] = Math.round(e[3])),
            t
          );
        },
        scale: f,
        scaleAndAdd: function (t, e, r, n) {
          return (
            (t[0] = e[0] + r[0] * n),
            (t[1] = e[1] + r[1] * n),
            (t[2] = e[2] + r[2] * n),
            (t[3] = e[3] + r[3] * n),
            t
          );
        },
        distance: u,
        squaredDistance: c,
        length: m,
        squaredLength: p,
        negate: function (t, e) {
          return (
            (t[0] = -e[0]), (t[1] = -e[1]), (t[2] = -e[2]), (t[3] = -e[3]), t
          );
        },
        inverse: function (t, e) {
          return (
            (t[0] = 1 / e[0]),
            (t[1] = 1 / e[1]),
            (t[2] = 1 / e[2]),
            (t[3] = 1 / e[3]),
            t
          );
        },
        normalize: d,
        dot: y,
        lerp: x,
        random: function (t, e) {
          let r, i, o, s, a, l;
          e = e || 1;
          do {
            (r = 2 * (0, n.R)() - 1),
              (i = 2 * (0, n.R)() - 1),
              (a = r * r + i * i);
          } while (a >= 1);
          do {
            (o = 2 * (0, n.R)() - 1),
              (s = 2 * (0, n.R)() - 1),
              (l = o * o + s * s);
          } while (l >= 1);
          const h = Math.sqrt((1 - a) / l);
          return (
            (t[0] = e * r),
            (t[1] = e * i),
            (t[2] = e * o * h),
            (t[3] = e * s * h),
            t
          );
        },
        transformMat4: function (t, e, r) {
          const n = e[0],
            i = e[1],
            o = e[2],
            s = e[3];
          return (
            (t[0] = r[0] * n + r[4] * i + r[8] * o + r[12] * s),
            (t[1] = r[1] * n + r[5] * i + r[9] * o + r[13] * s),
            (t[2] = r[2] * n + r[6] * i + r[10] * o + r[14] * s),
            (t[3] = r[3] * n + r[7] * i + r[11] * o + r[15] * s),
            t
          );
        },
        transformQuat: function (t, e, r) {
          const n = e[0],
            i = e[1],
            o = e[2],
            s = r[0],
            a = r[1],
            l = r[2],
            h = r[3],
            f = h * n + a * o - l * i,
            u = h * i + l * n - s * o,
            c = h * o + s * i - a * n,
            m = -s * n - a * i - l * o;
          return (
            (t[0] = f * h + m * -s + u * -l - c * -a),
            (t[1] = u * h + m * -a + c * -s - f * -l),
            (t[2] = c * h + m * -l + f * -a - u * -s),
            (t[3] = e[3]),
            t
          );
        },
        str: function (t) {
          return 'vec4(' + t[0] + ', ' + t[1] + ', ' + t[2] + ', ' + t[3] + ')';
        },
        exactEquals: M,
        equals: g,
        sub: _,
        mul: w,
        div: R,
        dist: C,
        sqrDist: S,
        len: b,
        sqrLen: v,
      });
    },
    71715: (t, e, r) => {
      r.d(e, { r: () => i });
      var n = r(5600);
      function i(t, e, r) {
        let i, o;
        return (
          void 0 === e || Array.isArray(e)
            ? ((o = t), (r = e), (i = [void 0]))
            : ((o = e), (i = Array.isArray(t) ? t : [t])),
          (t, e) => {
            const s = t.constructor.prototype;
            i.forEach((i) => {
              const a = (0, n.CJ)(t, i, o);
              (a.read && 'object' == typeof a.read) || (a.read = {}),
                (a.read.reader = s[e]),
                r && (a.read.source = (a.read.source || []).concat(r));
            });
          }
        );
      }
    },
    30556: (t, e, r) => {
      r.d(e, { c: () => i });
      var n = r(5600);
      function i(t, e, r) {
        let i, o;
        return (
          void 0 === e
            ? ((o = t), (i = [void 0]))
            : 'string' != typeof e
            ? ((o = t), (i = [void 0]), (r = e))
            : ((o = e), (i = Array.isArray(t) ? t : [t])),
          (t, e) => {
            const s = t.constructor.prototype;
            for (const a of i) {
              const i = (0, n.CJ)(t, a, o);
              (i.write && 'object' == typeof i.write) || (i.write = {}),
                r && (i.write.target = r),
                (i.write.writer = s[e]);
            }
          }
        );
      }
    },
    22021: (t, e, r) => {
      r.d(e, {
        ZF: () => c,
        Kt: () => m,
        jE: () => y,
        uZ: () => s,
        oK: () => p,
        Vl: () => f,
        wt: () => a,
        t7: () => h,
        Sf: () => o,
        fp: () => l,
        BV: () => u,
      });
      var n = r(17896);
      r(98766);
      const i = new Float32Array(1);
      function o(t) {
        --t;
        for (let e = 1; e < 32; e <<= 1) t |= t >> e;
        return t + 1;
      }
      function s(t, e, r) {
        return Math.min(Math.max(t, e), r);
      }
      function a(t) {
        return 0 == (t & (t - 1));
      }
      function l(t) {
        return (
          t--,
          (t |= t >> 1),
          (t |= t >> 2),
          (t |= t >> 4),
          (t |= t >> 8),
          (t |= t >> 16),
          ++t
        );
      }
      function h(t, e, r) {
        return t + (e - t) * r;
      }
      function f(t) {
        return (t * Math.PI) / 180;
      }
      function u(t) {
        return (180 * t) / Math.PI;
      }
      function c(t) {
        return Math.acos(s(t, -1, 1));
      }
      function m(t) {
        return Math.asin(s(t, -1, 1));
      }
      function p(t) {
        return d(Math.max(-x, Math.min(t, x)));
      }
      function d(t) {
        return (i[0] = t), i[0];
      }
      function y(t, e) {
        const r = (0, n.l)(t),
          i = m(t[2] / r),
          o = Math.atan2(t[1] / r, t[0] / r);
        return (0, n.s)(e, r, i, o), e;
      }
      const x = d(34028234663852886e22);
    },
    6570: (t, e, r) => {
      r.d(e, { Z: () => M });
      var n,
        i = r(43697),
        o = r(70586),
        s = r(19153),
        a = r(5600),
        l = (r(67676), r(80442), r(75215), r(52011)),
        h = r(9361),
        f = r(13473),
        u = r(82971),
        c = r(54102),
        m = r(87416),
        p = r(8744),
        d = r(40488);
      function y(t, e, r) {
        return null == e ? r : null == r ? e : t(e, r);
      }
      let x = (n = class extends h.Z {
        constructor(...t) {
          super(...t),
            (this.type = 'extent'),
            (this.xmin = 0),
            (this.ymin = 0),
            (this.mmin = void 0),
            (this.zmin = void 0),
            (this.xmax = 0),
            (this.ymax = 0),
            (this.mmax = void 0),
            (this.zmax = void 0);
        }
        normalizeCtorArgs(t, e, r, n, i) {
          return (function (t) {
            return (
              t &&
              ('esri.geometry.SpatialReference' === t.declaredClass ||
                null != t.wkid)
            );
          })(t)
            ? { spatialReference: t, xmin: 0, ymin: 0, xmax: 0, ymax: 0 }
            : 'object' == typeof t
            ? ((t.spatialReference =
                null == t.spatialReference ? u.Z.WGS84 : t.spatialReference),
              t)
            : {
                xmin: t,
                ymin: e,
                xmax: r,
                ymax: n,
                spatialReference: null == i ? u.Z.WGS84 : i,
              };
        }
        static fromBounds(t, e) {
          return new n({
            xmin: t[0],
            ymin: t[1],
            xmax: t[2],
            ymax: t[3],
            spatialReference: e,
          });
        }
        static fromPoint(t) {
          return new n({
            xmin: t.x,
            ymin: t.y,
            zmin: t.z,
            xmax: t.x,
            ymax: t.y,
            zmax: t.z,
            spatialReference: t.spatialReference,
          });
        }
        get cache() {
          return (
            this.commitProperty('xmin'),
            this.commitProperty('ymin'),
            this.commitProperty('zmin'),
            this.commitProperty('mmin'),
            this.commitProperty('xmax'),
            this.commitProperty('ymax'),
            this.commitProperty('zmax'),
            this.commitProperty('mmax'),
            this.commitProperty('spatialReference'),
            {}
          );
        }
        get center() {
          const t = new f.Z({
            x: 0.5 * (this.xmin + this.xmax),
            y: 0.5 * (this.ymin + this.ymax),
            spatialReference: this.spatialReference,
          });
          return (
            this.hasZ && (t.z = 0.5 * (this.zmin + this.zmax)),
            this.hasM && (t.m = 0.5 * (this.mmin + this.mmax)),
            t
          );
        }
        get extent() {
          return this.clone();
        }
        get hasM() {
          return null != this.mmin && null != this.mmax;
        }
        get hasZ() {
          return null != this.zmin && null != this.zmax;
        }
        get height() {
          return Math.abs(this.ymax - this.ymin);
        }
        get width() {
          return Math.abs(this.xmax - this.xmin);
        }
        centerAt(t) {
          const e = this.center;
          return null != t.z && this.hasZ
            ? this.offset(t.x - e.x, t.y - e.y, t.z - e.z)
            : this.offset(t.x - e.x, t.y - e.y);
        }
        clone() {
          const t = new n();
          return (
            (t.xmin = this.xmin),
            (t.ymin = this.ymin),
            (t.xmax = this.xmax),
            (t.ymax = this.ymax),
            (t.spatialReference = this.spatialReference),
            null != this.zmin && ((t.zmin = this.zmin), (t.zmax = this.zmax)),
            null != this.mmin && ((t.mmin = this.mmin), (t.mmax = this.mmax)),
            t
          );
        }
        contains(t) {
          if (!t) return !1;
          const e = this.spatialReference,
            r = t.spatialReference;
          return (
            e &&
              r &&
              !e.equals(r) &&
              (0, d.Q8)(e, r) &&
              (t = e.isWebMercator ? (0, d.$)(t) : (0, d.Sx)(t, !0)),
            'point' === t.type
              ? (0, c.aV)(this, t)
              : 'extent' === t.type && (0, c.uP)(this, t)
          );
        }
        equals(t) {
          if (this === t) return !0;
          if ((0, o.Wi)(t)) return !1;
          const e = this.spatialReference,
            r = t.spatialReference;
          return (
            e &&
              r &&
              !e.equals(r) &&
              (0, d.Q8)(e, r) &&
              (t = e.isWebMercator ? (0, d.$)(t) : (0, d.Sx)(t, !0)),
            this.xmin === t.xmin &&
              this.ymin === t.ymin &&
              this.zmin === t.zmin &&
              this.mmin === t.mmin &&
              this.xmax === t.xmax &&
              this.ymax === t.ymax &&
              this.zmax === t.zmax &&
              this.mmax === t.mmax
          );
        }
        expand(t) {
          const e = 0.5 * (1 - t),
            r = this.width * e,
            n = this.height * e;
          if (
            ((this.xmin += r),
            (this.ymin += n),
            (this.xmax -= r),
            (this.ymax -= n),
            this.hasZ)
          ) {
            const t = (this.zmax - this.zmin) * e;
            (this.zmin += t), (this.zmax -= t);
          }
          if (this.hasM) {
            const t = (this.mmax - this.mmin) * e;
            (this.mmin += t), (this.mmax -= t);
          }
          return this;
        }
        intersects(t) {
          if ((0, o.Wi)(t)) return !1;
          'mesh' === t.type && (t = t.extent);
          const e = this.spatialReference,
            r = t.spatialReference;
          return (
            e &&
              r &&
              !e.equals(r) &&
              (0, d.Q8)(e, r) &&
              (t = e.isWebMercator ? (0, d.$)(t) : (0, d.Sx)(t, !0)),
            (0, m.IY)(t.type)(this, t)
          );
        }
        normalize() {
          const t = this._normalize(!1, !0);
          return Array.isArray(t) ? t : [t];
        }
        offset(t, e, r) {
          return (
            (this.xmin += t),
            (this.ymin += e),
            (this.xmax += t),
            (this.ymax += e),
            null != r && ((this.zmin += r), (this.zmax += r)),
            this
          );
        }
        shiftCentralMeridian() {
          return this._normalize(!0);
        }
        union(t) {
          return (
            this === t ||
              ((this.xmin = Math.min(this.xmin, t.xmin)),
              (this.ymin = Math.min(this.ymin, t.ymin)),
              (this.xmax = Math.max(this.xmax, t.xmax)),
              (this.ymax = Math.max(this.ymax, t.ymax)),
              (this.hasZ || t.hasZ) &&
                ((this.zmin = y(Math.min, this.zmin, t.zmin)),
                (this.zmax = y(Math.max, this.zmax, t.zmax))),
              (this.hasM || t.hasM) &&
                ((this.mmin = y(Math.min, this.mmin, t.mmin)),
                (this.mmax = y(Math.max, this.mmax, t.mmax)))),
            this
          );
        }
        intersection(t) {
          return this === t
            ? this
            : (0, o.Wi)(t) || !this.intersects(t)
            ? null
            : ((this.xmin = Math.max(this.xmin, t.xmin)),
              (this.ymin = Math.max(this.ymin, t.ymin)),
              (this.xmax = Math.min(this.xmax, t.xmax)),
              (this.ymax = Math.min(this.ymax, t.ymax)),
              (this.hasZ || t.hasZ) &&
                ((this.zmin = y(Math.max, this.zmin, t.zmin)),
                (this.zmax = y(Math.min, this.zmax, t.zmax))),
              (this.hasM || t.hasM) &&
                ((this.mmin = y(Math.max, this.mmin, t.mmin)),
                (this.mmax = y(Math.min, this.mmax, t.mmax))),
              this);
        }
        toJSON(t) {
          return this.write({}, t);
        }
        _shiftCM(t = (0, p.C5)(this.spatialReference)) {
          if (!t || !this.spatialReference) return this;
          const e = this.spatialReference,
            r = this._getCM(t);
          if (r) {
            const n = e.isWebMercator ? (0, d.Sx)(r) : r;
            (this.xmin -= r.x),
              (this.xmax -= r.x),
              e.isWebMercator || (n.x = this._normalizeX(n.x, t).x),
              (this.spatialReference = new u.Z(
                (0, s.gx)(e.isWGS84 ? t.altTemplate : t.wkTemplate, {
                  Central_Meridian: n.x,
                }),
              ));
          }
          return this;
        }
        _getCM(t) {
          let e = null;
          const [r, n] = t.valid,
            i = this.xmin,
            o = this.xmax;
          return (i >= r && i <= n && o >= r && o <= n) || (e = this.center), e;
        }
        _normalize(t, e, r) {
          const n = this.spatialReference;
          if (!n) return this;
          if (!(r = r || (0, p.C5)(n))) return this;
          const i = this._getParts(r).map((t) => t.extent);
          if (i.length < 2) return i[0] || this;
          if (i.length > 2)
            return t
              ? this._shiftCM(r)
              : this.set({ xmin: r.valid[0], xmax: r.valid[1] });
          if (t) return this._shiftCM(r);
          if (e) return i;
          let o = !0,
            s = !0;
          return (
            i.forEach((t) => {
              t.hasZ || (o = !1), t.hasM || (s = !1);
            }),
            {
              rings: i.map((t) => {
                const e = [
                  [t.xmin, t.ymin],
                  [t.xmin, t.ymax],
                  [t.xmax, t.ymax],
                  [t.xmax, t.ymin],
                  [t.xmin, t.ymin],
                ];
                if (o) {
                  const r = (t.zmax - t.zmin) / 2;
                  for (let t = 0; t < e.length; t++) e[t].push(r);
                }
                if (s) {
                  const r = (t.mmax - t.mmin) / 2;
                  for (let t = 0; t < e.length; t++) e[t].push(r);
                }
                return e;
              }),
              hasZ: o,
              hasM: s,
              spatialReference: n,
            }
          );
        }
        _getParts(t) {
          let e = this.cache._parts;
          if (!e) {
            e = [];
            const { ymin: r, ymax: i, spatialReference: o } = this,
              s = this.width,
              a = this.xmin,
              l = this.xmax;
            let h;
            t = t || (0, p.C5)(o);
            const [f, u] = t.valid;
            h = this._normalizeX(this.xmin, t);
            const c = h.x,
              m = h.frameId;
            h = this._normalizeX(this.xmax, t);
            const d = h.x,
              y = h.frameId,
              x = c === d && s > 0;
            if (s > 2 * u) {
              const t = new n(a < l ? c : d, r, u, i, o),
                s = new n(f, r, a < l ? d : c, i, o),
                h = new n(0, r, u, i, o),
                p = new n(f, r, 0, i, o),
                x = [],
                M = [];
              t.contains(h) && x.push(m),
                t.contains(p) && M.push(m),
                s.contains(h) && x.push(y),
                s.contains(p) && M.push(y);
              for (let t = m + 1; t < y; t++) x.push(t), M.push(t);
              e.push(
                { extent: t, frameIds: [m] },
                { extent: s, frameIds: [y] },
                { extent: h, frameIds: x },
                { extent: p, frameIds: M },
              );
            } else
              c > d || x
                ? e.push(
                    { extent: new n(c, r, u, i, o), frameIds: [m] },
                    { extent: new n(f, r, d, i, o), frameIds: [y] },
                  )
                : e.push({ extent: new n(c, r, d, i, o), frameIds: [m] });
            this.cache._parts = e;
          }
          const r = this.hasZ,
            i = this.hasM;
          if (r || i) {
            const t = {};
            r && ((t.zmin = this.zmin), (t.zmax = this.zmax)),
              i && ((t.mmin = this.mmin), (t.mmax = this.mmax));
            for (let r = 0; r < e.length; r++) e[r].extent.set(t);
          }
          return e;
        }
        _normalizeX(t, e) {
          const [r, n] = e.valid,
            i = 2 * n;
          let o,
            s = 0;
          return (
            t > n
              ? ((o = Math.ceil(Math.abs(t - n) / i)), (t -= o * i), (s = o))
              : t < r &&
                ((o = Math.ceil(Math.abs(t - r) / i)), (t += o * i), (s = -o)),
            { x: t, frameId: s }
          );
        }
      });
      (0, i._)([(0, a.Cb)({ readOnly: !0 })], x.prototype, 'cache', null),
        (0, i._)([(0, a.Cb)({ readOnly: !0 })], x.prototype, 'center', null),
        (0, i._)([(0, a.Cb)({ readOnly: !0 })], x.prototype, 'extent', null),
        (0, i._)(
          [
            (0, a.Cb)({
              readOnly: !0,
              json: { write: { enabled: !1, overridePolicy: null } },
            }),
          ],
          x.prototype,
          'hasM',
          null,
        ),
        (0, i._)(
          [
            (0, a.Cb)({
              readOnly: !0,
              json: { write: { enabled: !1, overridePolicy: null } },
            }),
          ],
          x.prototype,
          'hasZ',
          null,
        ),
        (0, i._)([(0, a.Cb)({ readOnly: !0 })], x.prototype, 'height', null),
        (0, i._)([(0, a.Cb)({ readOnly: !0 })], x.prototype, 'width', null),
        (0, i._)(
          [
            (0, a.Cb)({
              type: Number,
              json: {
                type: [Number, String],
                write: { enabled: !0, allowNull: !0 },
              },
            }),
          ],
          x.prototype,
          'xmin',
          void 0,
        ),
        (0, i._)(
          [(0, a.Cb)({ type: Number, json: { write: !0 } })],
          x.prototype,
          'ymin',
          void 0,
        ),
        (0, i._)(
          [
            (0, a.Cb)({
              type: Number,
              json: {
                origins: { 'web-scene': { write: !1 } },
                write: {
                  overridePolicy() {
                    return { enabled: this.hasM };
                  },
                },
              },
            }),
          ],
          x.prototype,
          'mmin',
          void 0,
        ),
        (0, i._)(
          [
            (0, a.Cb)({
              type: Number,
              json: {
                origins: { 'web-scene': { write: !1 } },
                write: {
                  overridePolicy() {
                    return { enabled: this.hasZ };
                  },
                },
              },
            }),
          ],
          x.prototype,
          'zmin',
          void 0,
        ),
        (0, i._)(
          [(0, a.Cb)({ type: Number, json: { write: !0 } })],
          x.prototype,
          'xmax',
          void 0,
        ),
        (0, i._)(
          [(0, a.Cb)({ type: Number, json: { write: !0 } })],
          x.prototype,
          'ymax',
          void 0,
        ),
        (0, i._)(
          [
            (0, a.Cb)({
              type: Number,
              json: {
                origins: { 'web-scene': { write: !1 } },
                write: {
                  overridePolicy() {
                    return { enabled: this.hasM };
                  },
                },
              },
            }),
          ],
          x.prototype,
          'mmax',
          void 0,
        ),
        (0, i._)(
          [
            (0, a.Cb)({
              type: Number,
              json: {
                origins: { 'web-scene': { write: !1 } },
                write: {
                  overridePolicy() {
                    return { enabled: this.hasZ };
                  },
                },
              },
            }),
          ],
          x.prototype,
          'zmax',
          void 0,
        ),
        (x = n = (0, i._)([(0, l.j)('esri.geometry.Extent')], x)),
        (x.prototype.toJSON.isDefaultToJSON = !0);
      const M = x;
    },
    9361: (t, e, r) => {
      r.d(e, { Z: () => f });
      var n = r(43697),
        i = r(96674),
        o = r(5600),
        s = (r(67676), r(80442), r(75215), r(71715)),
        a = r(52011),
        l = r(82971);
      let h = class extends i.wq {
        constructor(...t) {
          super(...t),
            (this.type = null),
            (this.hasM = !1),
            (this.hasZ = !1),
            (this.spatialReference = l.Z.WGS84);
        }
        get cache() {
          return this.commitProperty('spatialReference'), {};
        }
        get extent() {
          return null;
        }
        readSpatialReference(t, e) {
          if (t instanceof l.Z) return t;
          if (null != t) {
            const r = new l.Z();
            return r.read(t, e), r;
          }
          return t;
        }
        clone() {
          return (
            console.warn(
              '.clone() is not implemented for ' + this.declaredClass,
            ),
            null
          );
        }
        clearCache() {
          this.notifyChange('cache');
        }
        getCacheValue(t) {
          return this.cache[t];
        }
        setCacheValue(t, e) {
          this.cache[t] = e;
        }
      };
      (0, n._)([(0, o.Cb)()], h.prototype, 'type', void 0),
        (0, n._)([(0, o.Cb)({ readOnly: !0 })], h.prototype, 'cache', null),
        (0, n._)([(0, o.Cb)({ readOnly: !0 })], h.prototype, 'extent', null),
        (0, n._)(
          [
            (0, o.Cb)({
              type: Boolean,
              json: { write: { overridePolicy: (t) => ({ enabled: t }) } },
            }),
          ],
          h.prototype,
          'hasM',
          void 0,
        ),
        (0, n._)(
          [
            (0, o.Cb)({
              type: Boolean,
              json: { write: { overridePolicy: (t) => ({ enabled: t }) } },
            }),
          ],
          h.prototype,
          'hasZ',
          void 0,
        ),
        (0, n._)(
          [(0, o.Cb)({ type: l.Z, json: { write: !0 } })],
          h.prototype,
          'spatialReference',
          void 0,
        ),
        (0, n._)(
          [(0, s.r)('spatialReference')],
          h.prototype,
          'readSpatialReference',
          null,
        ),
        (h = (0, n._)([(0, a.j)('esri.geometry.Geometry')], h));
      const f = h;
    },
    65091: (t, e, r) => {
      r.d(e, { Z: () => d });
      var n,
        i = r(43697),
        o = r(22974),
        s = r(5600),
        a = (r(75215), r(52011)),
        l = r(30556),
        h = r(6570),
        f = r(9361),
        u = r(13473),
        c = r(16238);
      function m(t) {
        return (e, r) => (null == e ? r : null == r ? e : t(e, r));
      }
      let p = (n = class extends f.Z {
        constructor(...t) {
          super(...t), (this.points = []), (this.type = 'multipoint');
        }
        normalizeCtorArgs(t, e) {
          if (!t && !e) return null;
          const r = {};
          Array.isArray(t)
            ? ((r.points = t), (r.spatialReference = e))
            : (function (t) {
                return (
                  t &&
                  ('esri.geometry.SpatialReference' === t.declaredClass ||
                    null != t.wkid)
                );
              })(t)
            ? (r.spatialReference = t)
            : (t.points && (r.points = t.points),
              t.spatialReference && (r.spatialReference = t.spatialReference),
              t.hasZ && (r.hasZ = t.hasZ),
              t.hasM && (r.hasM = t.hasM));
          const n = r.points && r.points[0];
          return (
            n &&
              (void 0 === r.hasZ && void 0 === r.hasM
                ? ((r.hasZ = n.length > 2), (r.hasM = !1))
                : void 0 === r.hasZ
                ? (r.hasZ = n.length > 3)
                : void 0 === r.hasM && (r.hasM = n.length > 3)),
            r
          );
        }
        get cache() {
          return (
            this.commitProperty('points'),
            this.commitProperty('hasZ'),
            this.commitProperty('hasM'),
            this.commitProperty('spatialReference'),
            {}
          );
        }
        get extent() {
          const t = this.points;
          if (!t.length) return null;
          const e = new h.Z(),
            r = this.hasZ,
            n = this.hasM,
            i = r ? 3 : 2,
            o = t[0],
            s = m(Math.min),
            a = m(Math.max);
          let l,
            f,
            u,
            c,
            [p, d] = o,
            [y, x] = o;
          for (let e = 0, o = t.length; e < o; e++) {
            const o = t[e],
              [h, m] = o;
            if (
              ((p = s(p, h)),
              (d = s(d, m)),
              (y = a(y, h)),
              (x = a(x, m)),
              r && o.length > 2)
            ) {
              const t = o[2];
              (l = s(l, t)), (u = a(u, t));
            }
            if (n && o.length > i) {
              const t = o[i];
              (f = s(f, t)), (c = a(c, t));
            }
          }
          return (
            (e.xmin = p),
            (e.ymin = d),
            (e.xmax = y),
            (e.ymax = x),
            (e.spatialReference = this.spatialReference),
            r
              ? ((e.zmin = l), (e.zmax = u))
              : ((e.zmin = null), (e.zmax = null)),
            n
              ? ((e.mmin = f), (e.mmax = c))
              : ((e.mmin = null), (e.mmax = null)),
            e
          );
        }
        writePoints(t, e) {
          e.points = (0, o.d9)(this.points);
        }
        addPoint(t) {
          return (
            (0, c.l)(this, t),
            Array.isArray(t)
              ? this.points.push(t)
              : this.points.push(t.toArray()),
            this.notifyChange('points'),
            this
          );
        }
        clone() {
          const t = {
            points: (0, o.d9)(this.points),
            spatialReference: this.spatialReference,
          };
          return (
            this.hasZ && (t.hasZ = !0), this.hasM && (t.hasM = !0), new n(t)
          );
        }
        getPoint(t) {
          if (!this._validateInputs(t)) return null;
          const e = this.points[t],
            r = { x: e[0], y: e[1], spatialReference: this.spatialReference };
          let n = 2;
          return (
            this.hasZ && ((r.z = e[2]), (n = 3)),
            this.hasM && (r.m = e[n]),
            new u.Z(r)
          );
        }
        removePoint(t) {
          if (!this._validateInputs(t)) return null;
          const e = new u.Z(this.points.splice(t, 1)[0], this.spatialReference);
          return this.notifyChange('points'), e;
        }
        setPoint(t, e) {
          return this._validateInputs(t)
            ? ((0, c.l)(this, e),
              Array.isArray(e) || (e = e.toArray()),
              (this.points[t] = e),
              this.notifyChange('points'),
              this)
            : this;
        }
        toJSON(t) {
          return this.write({}, t);
        }
        _validateInputs(t) {
          return null != t && t >= 0 && t < this.points.length;
        }
      });
      (0, i._)([(0, s.Cb)({ readOnly: !0 })], p.prototype, 'cache', null),
        (0, i._)([(0, s.Cb)()], p.prototype, 'extent', null),
        (0, i._)(
          [
            (0, s.Cb)({
              type: [[Number]],
              json: { write: { isRequired: !0 } },
            }),
          ],
          p.prototype,
          'points',
          void 0,
        ),
        (0, i._)([(0, l.c)('points')], p.prototype, 'writePoints', null),
        (p = n = (0, i._)([(0, a.j)('esri.geometry.Multipoint')], p)),
        (p.prototype.toJSON.isDefaultToJSON = !0);
      const d = p;
    },
    13473: (t, e, r) => {
      r.d(e, { Z: () => w });
      var n,
        i = r(43697),
        o = r(92604),
        s = r(70586),
        a = r(5600),
        l = (r(67676), r(80442), r(90578)),
        h = r(71715),
        f = r(52011),
        u = r(30556),
        c = r(75215),
        m = r(9361),
        p = r(82971),
        d = r(8744),
        y = r(40488);
      const x = [0, 0];
      function M(t) {
        return (
          t &&
          ('esri.geometry.SpatialReference' === t.declaredClass ||
            null != t.wkid)
        );
      }
      const g = o.Z.getLogger('esri.geometry.Point');
      let _ = (n = class extends m.Z {
        constructor(...t) {
          super(...t),
            (this.x = 0),
            (this.y = 0),
            (this.z = void 0),
            (this.m = void 0),
            (this.type = 'point');
        }
        static copy(t, e) {
          e._set('x', t._get('x')),
            e._set('y', t._get('y')),
            e._set('z', t._get('z')),
            e._set('m', t._get('m'));
          const r = t._get('spatialReference');
          e._set('spatialReference', Object.isFrozen(r) ? r : r.clone());
        }
        normalizeCtorArgs(t, e, r, n, i) {
          let o;
          if (Array.isArray(t))
            (o = t), (i = e), (t = o[0]), (e = o[1]), (r = o[2]), (n = o[3]);
          else if (t && 'object' == typeof t) {
            if (
              ((o = t),
              (t = null != o.x ? o.x : o.longitude),
              (e = null != o.y ? o.y : o.latitude),
              (r = o.z),
              (n = o.m),
              (i = o.spatialReference) &&
                'esri.geometry.SpatialReference' !== i.declaredClass &&
                (i = new p.Z(i)),
              null != o.longitude || null != o.latitude)
            )
              if (null == o.longitude)
                g.warn('.longitude=', 'Latitude was defined without longitude');
              else if (null == o.latitude)
                g.warn('.latitude=', 'Longitude was defined without latitude');
              else if (!o.declaredClass && i && i.isWebMercator) {
                const r = (0, y.hG)(o.longitude, o.latitude, x);
                (t = r[0]), (e = r[1]);
              }
          } else M(r) ? ((i = r), (r = null)) : M(n) && ((i = n), (n = null));
          const s = { x: t, y: e };
          return (
            null == s.x && null != s.y
              ? g.warn(
                  '.y=',
                  'Y coordinate was defined without an X coordinate',
                )
              : null == s.y &&
                null != s.x &&
                g.warn(
                  '.x=',
                  'X coordinate was defined without a Y coordinate',
                ),
            null != i && (s.spatialReference = i),
            null != r && (s.z = r),
            null != n && (s.m = n),
            s
          );
        }
        get cache() {
          return (
            this.commitProperty('x'),
            this.commitProperty('y'),
            this.commitProperty('z'),
            this.commitProperty('m'),
            this.commitProperty('spatialReference'),
            {}
          );
        }
        get hasM() {
          return void 0 !== this.m;
        }
        set hasM(t) {
          t !== (void 0 !== this._get('m')) &&
            (this._set('m', t ? 0 : void 0), this._set('hasM', t));
        }
        get hasZ() {
          return void 0 !== this.z;
        }
        set hasZ(t) {
          t !== (void 0 !== this._get('z')) &&
            (this._set('z', t ? 0 : void 0), this._set('hasZ', t));
        }
        get latitude() {
          const { spatialReference: t, x: e, y: r } = this;
          if (t) {
            if (t.isWebMercator) return (0, y.R6)(e, r, x)[1];
            if (t.isGeographic) return r;
          }
          return null;
        }
        set latitude(t) {
          const { spatialReference: e, x: r } = this;
          e &&
            (e.isWebMercator
              ? this._set('y', (0, y.hG)(r, t, x)[1])
              : e.isGeographic && this._set('y', t),
            this._set('latitude', t));
        }
        get longitude() {
          const { x: t, y: e, spatialReference: r } = this;
          if (r) {
            if (r.isWebMercator) return (0, y.R6)(t, e, x)[0];
            if (r.isGeographic) return t;
          }
          return null;
        }
        set longitude(t) {
          const { y: e, spatialReference: r } = this;
          r &&
            (r.isWebMercator
              ? this._set('x', (0, y.hG)(t, e, x)[0])
              : r.isGeographic && this._set('x', t),
            this._set('longitude', t));
        }
        writeX(t, e, r) {
          e[r] = isNaN(t) ? 'NaN' : t;
        }
        readX(t) {
          return 'string' == typeof t ? NaN : t;
        }
        clone() {
          const t = new n();
          return (
            (t.x = this.x),
            (t.y = this.y),
            (t.z = this.z),
            (t.m = this.m),
            (t.spatialReference = this.spatialReference),
            t
          );
        }
        copy(t) {
          return n.copy(t, this), this;
        }
        equals(t) {
          if ((0, s.Wi)(t)) return !1;
          const { x: e, y: r, z: n, m: i, spatialReference: o } = this,
            { z: a, m: l } = t;
          let { x: h, y: f, spatialReference: u } = t;
          if (!o.equals(u))
            if (o.isWebMercator && u.isWGS84)
              ([h, f] = (0, y.hG)(h, f)), (u = o);
            else {
              if (!o.isWGS84 || !u.isWebMercator) return !1;
              ([h, f] = (0, y.R6)(h, f)), (u = o);
            }
          return e === h && r === f && n === a && i === l && o.wkid === u.wkid;
        }
        offset(t, e, r) {
          return (function (t, e, r, n) {
            var i;
            return (
              (t.x = t.x + e),
              (t.y = t.y + r),
              null != n && (t.z = (null != (i = t.z) ? i : 0) + n),
              t
            );
          })(this, t, e, r);
        }
        normalize() {
          if (!this.spatialReference) return this;
          const t = (0, d.C5)(this.spatialReference);
          if (!t) return this;
          let e = this.x;
          const [r, n] = t.valid,
            i = 2 * n;
          let o;
          return (
            e > n
              ? ((o = Math.ceil(Math.abs(e - n) / i)), (e -= o * i))
              : e < r && ((o = Math.ceil(Math.abs(e - r) / i)), (e += o * i)),
            this._set('x', e),
            this
          );
        }
        distance(t) {
          return (function (t, e) {
            const r = t.x - e.x,
              n = t.y - e.y,
              i = t.hasZ && e.hasZ ? t.z - e.z : 0;
            return Math.sqrt(r * r + n * n + i * i);
          })(this, t);
        }
        toArray() {
          const t = this.hasZ,
            e = this.hasM;
          return t && e
            ? [this.x, this.y, this.z, this.m]
            : t
            ? [this.x, this.y, this.z]
            : e
            ? [this.x, this.y, this.m]
            : [this.x, this.y];
        }
        toJSON(t) {
          return this.write({}, t);
        }
      });
      (0, i._)([(0, a.Cb)({ readOnly: !0 })], _.prototype, 'cache', null),
        (0, i._)(
          [
            (0, a.Cb)({
              type: Boolean,
              json: { read: !1, write: { enabled: !1, overridePolicy: null } },
            }),
          ],
          _.prototype,
          'hasM',
          null,
        ),
        (0, i._)(
          [
            (0, a.Cb)({
              type: Boolean,
              json: { read: !1, write: { enabled: !1, overridePolicy: null } },
            }),
          ],
          _.prototype,
          'hasZ',
          null,
        ),
        (0, i._)([(0, a.Cb)({ type: Number })], _.prototype, 'latitude', null),
        (0, i._)([(0, a.Cb)({ type: Number })], _.prototype, 'longitude', null),
        (0, i._)(
          [
            (0, a.Cb)({
              type: Number,
              json: {
                type: [Number, String],
                write: { isRequired: !0, allowNull: !0 },
              },
            }),
            (0, l.p)((t) => (isNaN(t) ? t : (0, c.q9)(t))),
          ],
          _.prototype,
          'x',
          void 0,
        ),
        (0, i._)([(0, u.c)('x')], _.prototype, 'writeX', null),
        (0, i._)([(0, h.r)('x')], _.prototype, 'readX', null),
        (0, i._)(
          [(0, a.Cb)({ type: Number, json: { write: !0 } })],
          _.prototype,
          'y',
          void 0,
        ),
        (0, i._)(
          [
            (0, a.Cb)({
              type: Number,
              json: {
                write: {
                  overridePolicy() {
                    return { enabled: this.hasZ };
                  },
                },
              },
            }),
          ],
          _.prototype,
          'z',
          void 0,
        ),
        (0, i._)(
          [
            (0, a.Cb)({
              type: Number,
              json: {
                write: {
                  overridePolicy() {
                    return { enabled: this.hasM };
                  },
                },
              },
            }),
          ],
          _.prototype,
          'm',
          void 0,
        ),
        (_ = n = (0, i._)([(0, f.j)('esri.geometry.Point')], _)),
        (_.prototype.toJSON.isDefaultToJSON = !0);
      const w = _;
    },
    38913: (t, e, r) => {
      r.d(e, { Z: () => S });
      var n,
        i = r(43697),
        o = r(67676),
        s = r(22974),
        a = r(70586),
        l = r(5600),
        h = (r(75215), r(52011)),
        f = r(30556),
        u = r(6570),
        c = r(9361),
        m = r(13473),
        p = r(82971),
        d = r(35308),
        y = r(54102),
        x = r(86662),
        M = r(49600),
        g = r(87416),
        _ = r(40488),
        w = r(16238);
      function R(t) {
        return !Array.isArray(t[0]);
      }
      let C = (n = class extends c.Z {
        constructor(...t) {
          super(...t), (this.rings = []), (this.type = 'polygon');
        }
        static fromExtent(t) {
          const e = t.clone().normalize(),
            r = t.spatialReference;
          let i = !1,
            o = !1;
          for (const t of e) t.hasZ && (i = !0), t.hasM && (o = !0);
          const s = {
            rings: e.map(function (t) {
              const e = [
                [t.xmin, t.ymin],
                [t.xmin, t.ymax],
                [t.xmax, t.ymax],
                [t.xmax, t.ymin],
                [t.xmin, t.ymin],
              ];
              if (i && t.hasZ) {
                const r = t.zmin + 0.5 * (t.zmax - t.zmin);
                for (let t = 0; t < e.length; t++) e[t].push(r);
              }
              if (o && t.hasM) {
                const r = t.mmin + 0.5 * (t.mmax - t.mmin);
                for (let t = 0; t < e.length; t++) e[t].push(r);
              }
              return e;
            }),
            spatialReference: r,
          };
          return i && (s.hasZ = !0), o && (s.hasM = !0), new n(s);
        }
        normalizeCtorArgs(t, e) {
          let r,
            n,
            i = null,
            o = null;
          return (
            t && !Array.isArray(t)
              ? ((i = t.rings ? t.rings : null),
                e ||
                  (t.spatialReference
                    ? (e = t.spatialReference)
                    : t.rings || (e = t)),
                (r = t.hasZ),
                (n = t.hasM))
              : (i = t),
            (i = i || []),
            (e = e || p.Z.WGS84),
            i.length &&
              i[0] &&
              null != i[0][0] &&
              'number' == typeof i[0][0] &&
              (i = [i]),
            (o = i[0] && i[0][0]),
            o &&
              (void 0 === r && void 0 === n
                ? ((r = o.length > 2), (n = o.length > 3))
                : void 0 === r
                ? (r = n ? o.length > 3 : o.length > 2)
                : void 0 === n && (n = r ? o.length > 3 : o.length > 2)),
            { rings: i, spatialReference: e, hasZ: r, hasM: n }
          );
        }
        get cache() {
          return (
            this.commitProperty('rings'),
            this.commitProperty('hasZ'),
            this.commitProperty('hasM'),
            this.commitProperty('spatialReference'),
            {}
          );
        }
        get centroid() {
          const t = (0, d.tO)(this);
          if (!t || isNaN(t[0]) || isNaN(t[1]) || (this.hasZ && isNaN(t[2])))
            return null;
          const e = new m.Z();
          return (
            (e.x = t[0]),
            (e.y = t[1]),
            (e.spatialReference = this.spatialReference),
            this.hasZ && (e.z = t[2]),
            e
          );
        }
        get extent() {
          const { spatialReference: t } = this,
            e = (0, M._w)(this);
          if (!e) return null;
          const r = new u.Z(e);
          return (r.spatialReference = t), r;
        }
        get isSelfIntersecting() {
          return (0, g.Ff)(this.rings);
        }
        writeRings(t, e) {
          e.rings = (0, s.d9)(this.rings);
        }
        addRing(t) {
          if (!t) return;
          const e = this.rings,
            r = e.length;
          if (R(t)) {
            const n = [];
            for (let e = 0, r = t.length; e < r; e++) n[e] = t[e].toArray();
            e[r] = n;
          } else e[r] = t.concat();
          return this.notifyChange('rings'), this;
        }
        clone() {
          const t = new n();
          return (
            (t.spatialReference = this.spatialReference),
            (t.rings = (0, s.d9)(this.rings)),
            (t.hasZ = this.hasZ),
            (t.hasM = this.hasM),
            t
          );
        }
        equals(t) {
          if (this === t) return !0;
          if ((0, a.Wi)(t)) return !1;
          const e = this.spatialReference,
            r = t.spatialReference;
          if ((0, a.pC)(e) !== (0, a.pC)(r)) return !1;
          if ((0, a.pC)(e) && (0, a.pC)(r) && !e.equals(r)) return !1;
          if (this.rings.length !== t.rings.length) return !1;
          const n = ([t, e, r, n], [i, o, s, a]) =>
            t === i &&
            e === o &&
            ((null == r && null == s) || r === s) &&
            ((null == n && null == a) || n === a);
          for (let e = 0; e < this.rings.length; e++) {
            const r = this.rings[e],
              i = t.rings[e];
            if (!(0, o.fS)(r, i, n)) return !1;
          }
          return !0;
        }
        contains(t) {
          if (!t) return !1;
          const e = (0, _.iV)(t, this.spatialReference);
          return (0, y.CI)(this, (0, a.pC)(e) ? e : t);
        }
        isClockwise(t) {
          let e;
          return (
            (e = R(t)
              ? t.map((t) =>
                  this.hasZ
                    ? this.hasM
                      ? [t.x, t.y, t.z, t.m]
                      : [t.x, t.y, t.z]
                    : [t.x, t.y],
                )
              : t),
            (0, x.bu)(e, this.hasM, this.hasZ)
          );
        }
        getPoint(t, e) {
          if (!this._validateInputs(t, e)) return null;
          const r = this.rings[t][e],
            n = this.hasZ,
            i = this.hasM;
          return n && !i
            ? new m.Z(r[0], r[1], r[2], void 0, this.spatialReference)
            : i && !n
            ? new m.Z(r[0], r[1], void 0, r[2], this.spatialReference)
            : n && i
            ? new m.Z(r[0], r[1], r[2], r[3], this.spatialReference)
            : new m.Z(r[0], r[1], this.spatialReference);
        }
        insertPoint(t, e, r) {
          return this._validateInputs(t, e, !0)
            ? ((0, w.l)(this, r),
              Array.isArray(r) || (r = r.toArray()),
              this.rings[t].splice(e, 0, r),
              this.notifyChange('rings'),
              this)
            : this;
        }
        removePoint(t, e) {
          if (!this._validateInputs(t, e)) return null;
          const r = new m.Z(
            this.rings[t].splice(e, 1)[0],
            this.spatialReference,
          );
          return this.notifyChange('rings'), r;
        }
        removeRing(t) {
          if (!this._validateInputs(t, null)) return null;
          const e = this.rings.splice(t, 1)[0],
            r = this.spatialReference,
            n = e.map((t) => new m.Z(t, r));
          return this.notifyChange('rings'), n;
        }
        setPoint(t, e, r) {
          return this._validateInputs(t, e)
            ? ((0, w.l)(this, r),
              Array.isArray(r) || (r = r.toArray()),
              (this.rings[t][e] = r),
              this.notifyChange('rings'),
              this)
            : this;
        }
        _validateInputs(t, e, r = !1) {
          if (null == t || t < 0 || t >= this.rings.length) return !1;
          if (null != e) {
            const n = this.rings[t];
            if (r && (e < 0 || e > n.length)) return !1;
            if (!r && (e < 0 || e >= n.length)) return !1;
          }
          return !0;
        }
        toJSON(t) {
          return this.write({}, t);
        }
      });
      (0, i._)([(0, l.Cb)({ readOnly: !0 })], C.prototype, 'cache', null),
        (0, i._)([(0, l.Cb)({ readOnly: !0 })], C.prototype, 'centroid', null),
        (0, i._)([(0, l.Cb)({ readOnly: !0 })], C.prototype, 'extent', null),
        (0, i._)(
          [(0, l.Cb)({ readOnly: !0 })],
          C.prototype,
          'isSelfIntersecting',
          null,
        ),
        (0, i._)(
          [
            (0, l.Cb)({
              type: [[[Number]]],
              json: { write: { isRequired: !0 } },
            }),
          ],
          C.prototype,
          'rings',
          void 0,
        ),
        (0, i._)([(0, f.c)('rings')], C.prototype, 'writeRings', null),
        (C = n = (0, i._)([(0, h.j)('esri.geometry.Polygon')], C)),
        (C.prototype.toJSON.isDefaultToJSON = !0);
      const S = C;
    },
    58901: (t, e, r) => {
      r.d(e, { Z: () => y });
      var n,
        i = r(43697),
        o = r(22974),
        s = r(5600),
        a = (r(75215), r(52011)),
        l = r(30556),
        h = r(6570),
        f = r(9361),
        u = r(13473),
        c = r(82971),
        m = r(49600),
        p = r(16238);
      let d = (n = class extends f.Z {
        constructor(...t) {
          super(...t), (this.paths = []), (this.type = 'polyline');
        }
        normalizeCtorArgs(t, e) {
          let r,
            n,
            i = null,
            o = null;
          return (
            t && !Array.isArray(t)
              ? ((i = t.paths ? t.paths : null),
                e ||
                  (t.spatialReference
                    ? (e = t.spatialReference)
                    : t.paths || (e = t)),
                (r = t.hasZ),
                (n = t.hasM))
              : (i = t),
            (i = i || []),
            (e = e || c.Z.WGS84),
            i.length &&
              i[0] &&
              null != i[0][0] &&
              'number' == typeof i[0][0] &&
              (i = [i]),
            (o = i[0] && i[0][0]),
            o &&
              (void 0 === r && void 0 === n
                ? ((r = o.length > 2), (n = !1))
                : void 0 === r
                ? (r = !n && o.length > 3)
                : void 0 === n && (n = !r && o.length > 3)),
            { paths: i, spatialReference: e, hasZ: r, hasM: n }
          );
        }
        get cache() {
          return (
            this.commitProperty('paths'),
            this.commitProperty('hasZ'),
            this.commitProperty('hasM'),
            this.commitProperty('spatialReference'),
            {}
          );
        }
        get extent() {
          const { spatialReference: t } = this,
            e = (0, m.Wn)(this);
          if (!e) return null;
          const r = new h.Z(e);
          return (r.spatialReference = t), r;
        }
        writePaths(t, e) {
          e.paths = (0, o.d9)(this.paths);
        }
        addPath(t) {
          if (!t) return;
          const e = this.paths,
            r = e.length;
          if (
            (function (t) {
              return !Array.isArray(t[0]);
            })(t)
          ) {
            const n = [];
            for (let e = 0, r = t.length; e < r; e++) n[e] = t[e].toArray();
            e[r] = n;
          } else e[r] = t.concat();
          return this.notifyChange('paths'), this;
        }
        clone() {
          const t = new n();
          return (
            (t.spatialReference = this.spatialReference),
            (t.paths = (0, o.d9)(this.paths)),
            (t.hasZ = this.hasZ),
            (t.hasM = this.hasM),
            t
          );
        }
        getPoint(t, e) {
          if (!this._validateInputs(t, e)) return null;
          const r = this.paths[t][e],
            n = this.hasZ,
            i = this.hasM;
          return n && !i
            ? new u.Z(r[0], r[1], r[2], void 0, this.spatialReference)
            : i && !n
            ? new u.Z(r[0], r[1], void 0, r[2], this.spatialReference)
            : n && i
            ? new u.Z(r[0], r[1], r[2], r[3], this.spatialReference)
            : new u.Z(r[0], r[1], this.spatialReference);
        }
        insertPoint(t, e, r) {
          return this._validateInputs(t, e, !0)
            ? ((0, p.l)(this, r),
              Array.isArray(r) || (r = r.toArray()),
              this.paths[t].splice(e, 0, r),
              this.notifyChange('paths'),
              this)
            : this;
        }
        removePath(t) {
          if (!this._validateInputs(t, null)) return null;
          const e = this.paths.splice(t, 1)[0],
            r = this.spatialReference,
            n = e.map((t) => new u.Z(t, r));
          return this.notifyChange('paths'), n;
        }
        removePoint(t, e) {
          if (!this._validateInputs(t, e)) return null;
          const r = new u.Z(
            this.paths[t].splice(e, 1)[0],
            this.spatialReference,
          );
          return this.notifyChange('paths'), r;
        }
        setPoint(t, e, r) {
          return this._validateInputs(t, e)
            ? ((0, p.l)(this, r),
              Array.isArray(r) || (r = r.toArray()),
              (this.paths[t][e] = r),
              this.notifyChange('paths'),
              this)
            : this;
        }
        _validateInputs(t, e, r = !1) {
          if (null == t || t < 0 || t >= this.paths.length) return !1;
          if (null != e) {
            const n = this.paths[t];
            if (r && (e < 0 || e > n.length)) return !1;
            if (!r && (e < 0 || e >= n.length)) return !1;
          }
          return !0;
        }
        toJSON(t) {
          return this.write({}, t);
        }
      });
      (0, i._)([(0, s.Cb)({ readOnly: !0 })], d.prototype, 'cache', null),
        (0, i._)([(0, s.Cb)({ readOnly: !0 })], d.prototype, 'extent', null),
        (0, i._)(
          [
            (0, s.Cb)({
              type: [[[Number]]],
              json: { write: { isRequired: !0 } },
            }),
          ],
          d.prototype,
          'paths',
          void 0,
        ),
        (0, i._)([(0, l.c)('paths')], d.prototype, 'writePaths', null),
        (d = n = (0, i._)([(0, a.j)('esri.geometry.Polyline')], d)),
        (d.prototype.toJSON.isDefaultToJSON = !0);
      const y = d;
    },
    82971: (t, e, r) => {
      r.d(e, { Z: () => m });
      var n,
        i = r(43697),
        o = r(96674),
        s = r(22974),
        a = r(75215),
        l = r(5600),
        h = r(52011),
        f = r(30556),
        u = r(8744);
      let c = (n = class extends o.wq {
        constructor(t) {
          super(t),
            (this.latestWkid = null),
            (this.wkid = null),
            (this.wkt = null),
            (this.vcsWkid = null),
            (this.latestVcsWkid = null),
            (this.imageCoordinateSystem = null);
        }
        static fromJSON(t) {
          if (!t) return null;
          if (t.wkid) {
            if (102100 === t.wkid) return n.WebMercator;
            if (4326 === t.wkid) return n.WGS84;
          }
          const e = new n();
          return e.read(t), e;
        }
        normalizeCtorArgs(t) {
          return t && 'object' == typeof t
            ? t
            : { ['string' == typeof t ? 'wkt' : 'wkid']: t };
        }
        get isWGS84() {
          return (0, u.oR)(this);
        }
        get isWebMercator() {
          return (0, u.sS)(this);
        }
        get isGeographic() {
          return (0, u.sT)(this);
        }
        get isWrappable() {
          return (0, u.MP)(this);
        }
        writeWkt(t, e) {
          this.wkid || (e.wkt = t);
        }
        clone() {
          if (this === n.WGS84) return n.WGS84;
          if (this === n.WebMercator) return n.WebMercator;
          const t = new n();
          return (
            null != this.wkid
              ? ((t.wkid = this.wkid),
                null != this.latestWkid && (t.latestWkid = this.latestWkid),
                null != this.vcsWkid && (t.vcsWkid = this.vcsWkid),
                null != this.latestVcsWkid &&
                  (t.latestVcsWkid = this.latestVcsWkid))
              : null != this.wkt && (t.wkt = this.wkt),
            this.imageCoordinateSystem &&
              (t.imageCoordinateSystem = (0, s.d9)(this.imageCoordinateSystem)),
            t
          );
        }
        equals(t) {
          if (null == t) return !1;
          if (this.imageCoordinateSystem || t.imageCoordinateSystem) {
            if (
              null == this.imageCoordinateSystem ||
              null == t.imageCoordinateSystem
            )
              return !1;
            const { id: e, referenceServiceName: r } = t.imageCoordinateSystem,
              { geodataXform: n } = t.imageCoordinateSystem,
              i = this.imageCoordinateSystem;
            return null == e || n
              ? JSON.stringify(i) === JSON.stringify(t.imageCoordinateSystem)
              : r
              ? i.id === e && i.referenceServiceName === r
              : i.id === e;
          }
          return (0, u.fS)(this, t);
        }
        toJSON(t) {
          return this.write(void 0, t);
        }
      });
      (c.GCS_NAD_1927 = null),
        (c.WGS84 = null),
        (c.WebMercator = null),
        (c.PlateCarree = null),
        (0, i._)([(0, l.Cb)({ readOnly: !0 })], c.prototype, 'isWGS84', null),
        (0, i._)(
          [(0, l.Cb)({ readOnly: !0 })],
          c.prototype,
          'isWebMercator',
          null,
        ),
        (0, i._)(
          [(0, l.Cb)({ readOnly: !0 })],
          c.prototype,
          'isGeographic',
          null,
        ),
        (0, i._)(
          [(0, l.Cb)({ readOnly: !0 })],
          c.prototype,
          'isWrappable',
          null,
        ),
        (0, i._)(
          [(0, l.Cb)({ type: a.z8, json: { write: !0 } })],
          c.prototype,
          'latestWkid',
          void 0,
        ),
        (0, i._)(
          [
            (0, l.Cb)({
              type: a.z8,
              json: {
                write: !0,
                origins: {
                  'web-scene': {
                    write: {
                      overridePolicy() {
                        return { isRequired: null === this.wkt };
                      },
                    },
                  },
                },
              },
            }),
          ],
          c.prototype,
          'wkid',
          void 0,
        ),
        (0, i._)(
          [
            (0, l.Cb)({
              type: String,
              json: {
                origins: {
                  'web-scene': {
                    write: {
                      overridePolicy() {
                        return { isRequired: null === this.wkid };
                      },
                    },
                  },
                },
              },
            }),
          ],
          c.prototype,
          'wkt',
          void 0,
        ),
        (0, i._)(
          [(0, f.c)('wkt'), (0, f.c)('web-scene', 'wkt')],
          c.prototype,
          'writeWkt',
          null,
        ),
        (0, i._)(
          [(0, l.Cb)({ type: a.z8, json: { write: !0 } })],
          c.prototype,
          'vcsWkid',
          void 0,
        ),
        (0, i._)(
          [(0, l.Cb)({ type: a.z8, json: { write: !0 } })],
          c.prototype,
          'latestVcsWkid',
          void 0,
        ),
        (0, i._)([(0, l.Cb)()], c.prototype, 'imageCoordinateSystem', void 0),
        (c = n = (0, i._)([(0, h.j)('esri.geometry.SpatialReference')], c)),
        (c.prototype.toJSON.isDefaultToJSON = !0),
        (c.GCS_NAD_1927 = new c({
          wkid: 4267,
          wkt: 'GEOGCS["GCS_North_American_1927",DATUM["D_North_American_1927",SPHEROID["Clarke_1866",6378206.4,294.9786982]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]]',
        })),
        (c.WGS84 = new c(u.Zn)),
        (c.WebMercator = new c(u.R_)),
        (c.PlateCarree = new c(u.WR)),
        Object.freeze &&
          (Object.freeze(c.GCS_NAD_1927),
          Object.freeze(c.WGS84),
          Object.freeze(c.WebMercator));
      const m = c;
    },
    68441: (t, e, r) => {
      r.d(e, { sv: () => i, yr: () => o, Z1: () => s });
      class n {
        constructor(t, e, r, n) {
          (this.semiMajorAxis = t),
            (this.flattening = e),
            (this.outerAtmosphereRimWidth = r);
          const i = 1 - this.flattening;
          (this.semiMinorAxis = this.semiMajorAxis * i),
            (this.halfSemiMajorAxis = this.semiMajorAxis / 2),
            (this.halfCircumference = Math.PI * this.semiMajorAxis),
            (this.metersPerDegree = this.halfCircumference / 180),
            (this.inverseFlattening = 1 / (1 - this.flattening) - 1),
            (this.eccentricitySquared =
              n || 2 * this.flattening - this.flattening * this.flattening),
            (this.meanRadiusSemiAxes =
              (2 * this.semiMajorAxis + this.semiMinorAxis) / 3);
        }
        get radius() {
          return this.semiMajorAxis;
        }
      }
      const i = new n(6378137, 1 / 298.257223563, 3e5, 0.006694379990137799),
        o = new n(3396190, 1 / 169.8944472236118, 23e4),
        s = new n(1737400, 0, 0);
    },
    56726: (t, e, r) => {
      var n;
      r.d(e, { W: () => n }),
        (function (t) {
          (t[(t.CGCS2000 = 4490)] = 'CGCS2000'),
            (t[(t.GCSMARS2000 = 104971)] = 'GCSMARS2000'),
            (t[(t.GCSMARS2000_SPHERE = 104905)] = 'GCSMARS2000_SPHERE'),
            (t[(t.GCSMOON2000 = 104903)] = 'GCSMOON2000');
        })(n || (n = {}));
    },
    58116: (t, e, r) => {
      let n;
      r.d(e, { Z: () => i });
      const i = {
        values: [
          1, 0.3048, 0.3048006096012192, 0.3047972654, 0.9143917962,
          0.201166195164, 0.9143984146160287, 0.3047994715386762,
          20.11676512155263, 20.11678249437587, 0.9143985307444408, 0.91439523,
          0.3047997101815088, 20.1168, 20.116756, 5e4, 15e4,
        ],
        units: [
          'Meter',
          'Foot',
          'Foot_US',
          'Foot_Clarke',
          'Yard_Clarke',
          'Link_Clarke',
          'Yard_Sears',
          'Foot_Sears',
          'Chain_Sears',
          'Chain_Benoit_1895_B',
          'Yard_Indian',
          'Yard_Indian_1937',
          'Foot_Gold_Coast',
          'Chain',
          'Chain_Sears_1922_Truncated',
          '50_Kilometers',
          '150_Kilometers',
        ],
        2066: 5,
        2136: 12,
        2155: 2,
        2157: 0,
        2158: 0,
        2159: 12,
        2160: 12,
        2204: 2,
        2219: 0,
        2220: 0,
        2254: 2,
        2255: 2,
        2256: 1,
        2265: 1,
        2266: 1,
        2267: 2,
        2268: 2,
        2269: 1,
        2270: 1,
        2271: 2,
        2272: 2,
        2273: 1,
        2294: 0,
        2295: 0,
        2314: 3,
        2899: 2,
        2900: 2,
        2901: 1,
        2909: 1,
        2910: 1,
        2911: 2,
        2912: 2,
        2913: 1,
        2914: 1,
        2992: 1,
        2993: 0,
        2994: 1,
        3080: 1,
        3089: 2,
        3090: 0,
        3091: 2,
        3102: 2,
        3141: 0,
        3142: 0,
        3167: 14,
        3359: 2,
        3360: 0,
        3361: 1,
        3362: 0,
        3363: 2,
        3364: 0,
        3365: 2,
        3366: 3,
        3404: 2,
        3405: 0,
        3406: 0,
        3407: 3,
        3439: 0,
        3440: 0,
        3479: 1,
        3480: 0,
        3481: 1,
        3482: 0,
        3483: 1,
        3484: 0,
        3485: 2,
        3486: 0,
        3487: 2,
        3488: 0,
        3489: 0,
        3490: 2,
        3491: 0,
        3492: 2,
        3493: 0,
        3494: 2,
        3495: 0,
        3496: 2,
        3497: 0,
        3498: 2,
        3499: 0,
        3500: 2,
        3501: 0,
        3502: 2,
        3503: 0,
        3504: 2,
        3505: 0,
        3506: 2,
        3507: 0,
        3508: 2,
        3509: 0,
        3510: 2,
        3511: 0,
        3512: 2,
        3513: 0,
        3514: 0,
        3515: 2,
        3516: 0,
        3517: 2,
        3518: 0,
        3519: 2,
        3520: 0,
        3521: 2,
        3522: 0,
        3523: 2,
        3524: 0,
        3525: 2,
        3526: 0,
        3527: 2,
        3528: 0,
        3529: 2,
        3530: 0,
        3531: 2,
        3532: 0,
        3533: 2,
        3534: 0,
        3535: 2,
        3536: 0,
        3537: 2,
        3538: 0,
        3539: 2,
        3540: 0,
        3541: 2,
        3542: 0,
        3543: 2,
        3544: 0,
        3545: 2,
        3546: 0,
        3547: 2,
        3548: 0,
        3549: 2,
        3550: 0,
        3551: 2,
        3552: 0,
        3553: 2,
        3582: 2,
        3583: 0,
        3584: 2,
        3585: 0,
        3586: 2,
        3587: 0,
        3588: 1,
        3589: 0,
        3590: 1,
        3591: 0,
        3592: 0,
        3593: 1,
        3598: 2,
        3599: 0,
        3600: 2,
        3605: 1,
        3606: 0,
        3607: 0,
        3608: 2,
        3609: 0,
        3610: 2,
        3611: 0,
        3612: 2,
        3613: 0,
        3614: 2,
        3615: 0,
        3616: 2,
        3617: 0,
        3618: 2,
        3619: 0,
        3620: 2,
        3621: 0,
        3622: 2,
        3623: 0,
        3624: 2,
        3625: 0,
        3626: 2,
        3627: 0,
        3628: 2,
        3629: 0,
        3630: 2,
        3631: 0,
        3632: 2,
        3633: 0,
        3634: 1,
        3635: 0,
        3636: 1,
        3640: 2,
        3641: 0,
        3642: 2,
        3643: 0,
        3644: 1,
        3645: 0,
        3646: 1,
        3647: 0,
        3648: 1,
        3649: 0,
        3650: 2,
        3651: 0,
        3652: 2,
        3653: 0,
        3654: 2,
        3655: 0,
        3656: 1,
        3657: 0,
        3658: 2,
        3659: 0,
        3660: 2,
        3661: 0,
        3662: 2,
        3663: 0,
        3664: 2,
        3668: 2,
        3669: 0,
        3670: 2,
        3671: 0,
        3672: 2,
        3673: 0,
        3674: 2,
        3675: 0,
        3676: 1,
        3677: 2,
        3678: 0,
        3679: 1,
        3680: 2,
        3681: 0,
        3682: 1,
        3683: 2,
        3684: 0,
        3685: 0,
        3686: 2,
        3687: 0,
        3688: 2,
        3689: 0,
        3690: 2,
        3691: 0,
        3692: 2,
        3696: 2,
        3697: 0,
        3698: 2,
        3699: 0,
        3700: 2,
        3793: 0,
        3794: 0,
        3812: 0,
        3854: 0,
        3857: 0,
        3920: 0,
        3978: 0,
        3979: 0,
        3991: 2,
        3992: 2,
        4026: 0,
        4037: 0,
        4038: 0,
        4071: 0,
        4082: 0,
        4083: 0,
        4087: 0,
        4088: 0,
        4217: 2,
        4414: 0,
        4415: 0,
        4417: 0,
        4434: 0,
        4437: 0,
        4438: 2,
        4439: 2,
        4462: 0,
        4467: 0,
        4471: 0,
        4474: 0,
        4559: 0,
        4647: 0,
        4822: 0,
        4826: 0,
        4839: 0,
        5018: 0,
        5048: 0,
        5167: 0,
        5168: 0,
        5221: 0,
        5223: 0,
        5234: 0,
        5235: 0,
        5243: 0,
        5247: 0,
        5266: 0,
        5316: 0,
        5320: 0,
        5321: 0,
        5325: 0,
        5337: 0,
        5361: 0,
        5362: 0,
        5367: 0,
        5382: 0,
        5383: 0,
        5396: 0,
        5456: 0,
        5457: 0,
        5469: 0,
        5472: 4,
        5490: 0,
        5513: 0,
        5514: 0,
        5523: 0,
        5559: 0,
        5588: 1,
        5589: 3,
        5596: 0,
        5627: 0,
        5629: 0,
        5641: 0,
        5643: 0,
        5644: 0,
        5646: 2,
        5654: 2,
        5655: 2,
        5659: 0,
        5700: 0,
        5825: 0,
        5836: 0,
        5837: 0,
        5839: 0,
        5842: 0,
        5844: 0,
        5858: 0,
        5879: 0,
        5880: 0,
        5887: 0,
        5890: 0,
        6128: 1,
        6129: 1,
        6141: 1,
        6204: 0,
        6210: 0,
        6211: 0,
        6307: 0,
        6312: 0,
        6316: 0,
        6362: 0,
        6391: 1,
        6405: 1,
        6406: 0,
        6407: 1,
        6408: 0,
        6409: 1,
        6410: 0,
        6411: 2,
        6412: 0,
        6413: 2,
        6414: 0,
        6415: 0,
        6416: 2,
        6417: 0,
        6418: 2,
        6419: 0,
        6420: 2,
        6421: 0,
        6422: 2,
        6423: 0,
        6424: 2,
        6425: 0,
        6426: 2,
        6427: 0,
        6428: 2,
        6429: 0,
        6430: 2,
        6431: 0,
        6432: 2,
        6433: 0,
        6434: 2,
        6435: 0,
        6436: 2,
        6437: 0,
        6438: 2,
        6439: 0,
        6440: 0,
        6441: 2,
        6442: 0,
        6443: 2,
        6444: 0,
        6445: 2,
        6446: 0,
        6447: 2,
        6448: 0,
        6449: 2,
        6450: 0,
        6451: 2,
        6452: 0,
        6453: 2,
        6454: 0,
        6455: 2,
        6456: 0,
        6457: 2,
        6458: 0,
        6459: 2,
        6460: 0,
        6461: 2,
        6462: 0,
        6463: 2,
        6464: 0,
        6465: 2,
        6466: 0,
        6467: 2,
        6468: 0,
        6469: 2,
        6470: 0,
        6471: 2,
        6472: 0,
        6473: 2,
        6474: 0,
        6475: 2,
        6476: 0,
        6477: 2,
        6478: 0,
        6479: 2,
        6484: 2,
        6485: 0,
        6486: 2,
        6487: 0,
        6488: 2,
        6489: 0,
        6490: 2,
        6491: 0,
        6492: 2,
        6493: 0,
        6494: 1,
        6495: 0,
        6496: 1,
        6497: 0,
        6498: 0,
        6499: 1,
        6500: 0,
        6501: 2,
        6502: 0,
        6503: 2,
        6504: 0,
        6505: 2,
        6506: 0,
        6507: 2,
        6508: 0,
        6509: 0,
        6510: 2,
        6515: 1,
        6516: 0,
        6518: 0,
        6519: 2,
        6520: 0,
        6521: 2,
        6522: 0,
        6523: 2,
        6524: 0,
        6525: 2,
        6526: 0,
        6527: 2,
        6528: 0,
        6529: 2,
        6530: 0,
        6531: 2,
        6532: 0,
        6533: 2,
        6534: 0,
        6535: 2,
        6536: 0,
        6537: 2,
        6538: 0,
        6539: 2,
        6540: 0,
        6541: 2,
        6542: 0,
        6543: 2,
        6544: 0,
        6545: 1,
        6546: 0,
        6547: 1,
        6548: 0,
        6549: 2,
        6550: 0,
        6551: 2,
        6552: 0,
        6553: 2,
        6554: 0,
        6555: 2,
        6556: 0,
        6557: 1,
        6558: 0,
        6559: 1,
        6560: 0,
        6561: 1,
        6562: 0,
        6563: 2,
        6564: 0,
        6565: 2,
        6566: 0,
        6567: 0,
        6568: 2,
        6569: 0,
        6570: 1,
        6571: 0,
        6572: 2,
        6573: 0,
        6574: 2,
        6575: 0,
        6576: 2,
        6577: 0,
        6578: 2,
        6582: 2,
        6583: 0,
        6584: 2,
        6585: 0,
        6586: 2,
        6587: 0,
        6588: 2,
        6589: 0,
        6590: 2,
        6591: 0,
        6592: 0,
        6593: 2,
        6594: 0,
        6595: 2,
        6596: 0,
        6597: 2,
        6598: 0,
        6599: 2,
        6600: 0,
        6601: 2,
        6602: 0,
        6603: 2,
        6605: 2,
        6606: 0,
        6607: 2,
        6608: 0,
        6609: 2,
        6610: 0,
        6611: 0,
        6612: 2,
        6613: 0,
        6614: 2,
        6615: 0,
        6616: 2,
        6617: 0,
        6618: 2,
        6633: 2,
        6646: 0,
        6703: 0,
        6784: 0,
        6785: 1,
        6786: 0,
        6787: 1,
        6788: 0,
        6789: 1,
        6790: 0,
        6791: 1,
        6792: 0,
        6793: 1,
        6794: 0,
        6795: 1,
        6796: 0,
        6797: 1,
        6798: 0,
        6799: 1,
        6800: 0,
        6801: 1,
        6802: 0,
        6803: 1,
        6804: 0,
        6805: 1,
        6806: 0,
        6807: 1,
        6808: 0,
        6809: 1,
        6810: 0,
        6811: 1,
        6812: 0,
        6813: 1,
        6814: 0,
        6815: 1,
        6816: 0,
        6817: 1,
        6818: 0,
        6819: 1,
        6820: 0,
        6821: 1,
        6822: 0,
        6823: 1,
        6824: 0,
        6825: 1,
        6826: 0,
        6827: 1,
        6828: 0,
        6829: 1,
        6830: 0,
        6831: 1,
        6832: 0,
        6833: 1,
        6834: 0,
        6835: 1,
        6836: 0,
        6837: 1,
        6838: 0,
        6839: 1,
        6840: 0,
        6841: 1,
        6842: 0,
        6843: 1,
        6844: 0,
        6845: 1,
        6846: 0,
        6847: 1,
        6848: 0,
        6849: 1,
        6850: 0,
        6851: 1,
        6852: 0,
        6853: 1,
        6854: 0,
        6855: 1,
        6856: 0,
        6857: 1,
        6858: 0,
        6859: 1,
        6860: 0,
        6861: 1,
        6862: 0,
        6863: 1,
        6867: 0,
        6868: 1,
        6870: 0,
        6875: 0,
        6876: 0,
        6879: 0,
        6880: 2,
        6884: 0,
        6885: 1,
        6886: 0,
        6887: 1,
        6915: 0,
        6922: 0,
        6923: 2,
        6924: 0,
        6925: 2,
        6962: 0,
        6984: 0,
        6991: 0,
        7128: 2,
        7131: 0,
        7132: 2,
        7142: 0,
        7257: 0,
        7258: 2,
        7259: 0,
        7260: 2,
        7261: 0,
        7262: 2,
        7263: 0,
        7264: 2,
        7265: 0,
        7266: 2,
        7267: 0,
        7268: 2,
        7269: 0,
        7270: 2,
        7271: 0,
        7272: 2,
        7273: 0,
        7274: 2,
        7275: 0,
        7276: 2,
        7277: 0,
        7278: 2,
        7279: 0,
        7280: 2,
        7281: 0,
        7282: 2,
        7283: 0,
        7284: 2,
        7285: 0,
        7286: 2,
        7287: 0,
        7288: 2,
        7289: 0,
        7290: 2,
        7291: 0,
        7292: 2,
        7293: 0,
        7294: 2,
        7295: 0,
        7296: 2,
        7297: 0,
        7298: 2,
        7299: 0,
        7300: 2,
        7301: 0,
        7302: 2,
        7303: 0,
        7304: 2,
        7305: 0,
        7306: 2,
        7307: 0,
        7308: 2,
        7309: 0,
        7310: 2,
        7311: 0,
        7312: 2,
        7313: 0,
        7314: 2,
        7315: 0,
        7316: 2,
        7317: 0,
        7318: 2,
        7319: 0,
        7320: 2,
        7321: 0,
        7322: 2,
        7323: 0,
        7324: 2,
        7325: 0,
        7326: 2,
        7327: 0,
        7328: 2,
        7329: 0,
        7330: 2,
        7331: 0,
        7332: 2,
        7333: 0,
        7334: 2,
        7335: 0,
        7336: 2,
        7337: 0,
        7338: 2,
        7339: 0,
        7340: 2,
        7341: 0,
        7342: 2,
        7343: 0,
        7344: 2,
        7345: 0,
        7346: 2,
        7347: 0,
        7348: 2,
        7349: 0,
        7350: 2,
        7351: 0,
        7352: 2,
        7353: 0,
        7354: 2,
        7355: 0,
        7356: 2,
        7357: 0,
        7358: 2,
        7359: 0,
        7360: 2,
        7361: 0,
        7362: 2,
        7363: 0,
        7364: 2,
        7365: 0,
        7366: 2,
        7367: 0,
        7368: 2,
        7369: 0,
        7370: 2,
        7877: 0,
        7878: 0,
        7882: 0,
        7883: 0,
        7887: 0,
        7899: 0,
        7991: 0,
        7992: 0,
        8035: 2,
        8036: 2,
        8058: 0,
        8059: 0,
        8082: 0,
        8083: 0,
        8088: 0,
        8090: 0,
        8091: 2,
        8092: 0,
        8093: 2,
        8095: 0,
        8096: 2,
        8097: 0,
        8098: 2,
        8099: 0,
        8100: 2,
        8101: 0,
        8102: 2,
        8103: 0,
        8104: 2,
        8105: 0,
        8106: 2,
        8107: 0,
        8108: 2,
        8109: 0,
        8110: 2,
        8111: 0,
        8112: 2,
        8113: 0,
        8114: 2,
        8115: 0,
        8116: 2,
        8117: 0,
        8118: 2,
        8119: 0,
        8120: 2,
        8121: 0,
        8122: 2,
        8123: 0,
        8124: 2,
        8125: 0,
        8126: 2,
        8127: 0,
        8128: 2,
        8129: 0,
        8130: 2,
        8131: 0,
        8132: 2,
        8133: 0,
        8134: 2,
        8135: 0,
        8136: 2,
        8137: 0,
        8138: 2,
        8139: 0,
        8140: 2,
        8141: 0,
        8142: 2,
        8143: 0,
        8144: 2,
        8145: 0,
        8146: 2,
        8147: 0,
        8148: 2,
        8149: 0,
        8150: 2,
        8151: 0,
        8152: 2,
        8153: 0,
        8154: 2,
        8155: 0,
        8156: 2,
        8157: 0,
        8158: 2,
        8159: 0,
        8160: 2,
        8161: 0,
        8162: 2,
        8163: 0,
        8164: 2,
        8165: 0,
        8166: 2,
        8167: 0,
        8168: 2,
        8169: 0,
        8170: 2,
        8171: 0,
        8172: 2,
        8173: 0,
        8177: 2,
        8179: 0,
        8180: 2,
        8181: 0,
        8182: 2,
        8184: 0,
        8185: 2,
        8187: 0,
        8189: 2,
        8191: 0,
        8193: 2,
        8196: 0,
        8197: 2,
        8198: 0,
        8200: 2,
        8201: 0,
        8202: 2,
        8203: 0,
        8204: 2,
        8205: 0,
        8206: 2,
        8207: 0,
        8208: 2,
        8209: 0,
        8210: 2,
        8212: 0,
        8213: 2,
        8214: 0,
        8216: 2,
        8218: 0,
        8220: 2,
        8222: 0,
        8224: 2,
        8225: 0,
        8226: 2,
        8311: 0,
        8312: 1,
        8313: 0,
        8314: 1,
        8315: 0,
        8316: 1,
        8317: 0,
        8318: 1,
        8319: 0,
        8320: 1,
        8321: 0,
        8322: 1,
        8323: 0,
        8324: 1,
        8325: 0,
        8326: 1,
        8327: 0,
        8328: 1,
        8329: 0,
        8330: 1,
        8331: 0,
        8332: 1,
        8333: 0,
        8334: 1,
        8335: 0,
        8336: 1,
        8337: 0,
        8338: 1,
        8339: 0,
        8340: 1,
        8341: 0,
        8342: 1,
        8343: 0,
        8344: 1,
        8345: 0,
        8346: 1,
        8347: 0,
        8348: 1,
        8352: 0,
        8353: 0,
        8379: 0,
        8380: 2,
        8381: 0,
        8382: 2,
        8383: 0,
        8384: 2,
        8385: 0,
        8387: 2,
        8391: 0,
        8395: 0,
        8433: 0,
        8441: 0,
        8455: 0,
        8456: 0,
        8531: 2,
        8682: 0,
        8686: 0,
        8687: 0,
        8692: 0,
        8693: 0,
        8826: 0,
        8903: 0,
        8950: 0,
        8951: 0,
        9039: 0,
        9040: 0,
        9141: 0,
        9149: 0,
        9150: 0,
        9191: 0,
        9221: 0,
        9222: 0,
        9249: 0,
        9250: 0,
        9252: 0,
        9254: 0,
        9265: 0,
        9284: 0,
        9285: 0,
        9300: 0,
        9354: 0,
        9367: 0,
        9373: 0,
        9377: 0,
        9387: 0,
        9391: 0,
        9456: 0,
        9473: 0,
        9498: 0,
        9674: 0,
        9678: 0,
        9680: 0,
        9709: 0,
        9712: 0,
        9713: 0,
        9716: 0,
        9741: 0,
        9748: 2,
        9749: 2,
        9761: 0,
        9766: 0,
        20499: 0,
        20538: 0,
        20539: 0,
        20790: 0,
        20791: 0,
        21291: 0,
        21292: 0,
        21500: 0,
        21817: 0,
        21818: 0,
        22032: 0,
        22033: 0,
        22091: 0,
        22092: 0,
        22332: 0,
        22391: 0,
        22392: 0,
        22700: 0,
        22770: 0,
        22780: 0,
        22832: 0,
        23090: 0,
        23095: 0,
        23239: 0,
        23240: 0,
        23433: 0,
        23700: 0,
        24047: 0,
        24048: 0,
        24100: 3,
        24200: 0,
        24305: 0,
        24306: 0,
        24382: 10,
        24383: 0,
        24500: 0,
        24547: 0,
        24548: 0,
        24571: 9,
        24600: 0,
        25e3: 0,
        25231: 0,
        25884: 0,
        25932: 0,
        26237: 0,
        26331: 0,
        26332: 0,
        26432: 0,
        26591: 0,
        26592: 0,
        26632: 0,
        26692: 0,
        27120: 0,
        27200: 0,
        27291: 6,
        27292: 6,
        27429: 0,
        27492: 0,
        27493: 0,
        27500: 0,
        27700: 0,
        28232: 0,
        28600: 0,
        28991: 0,
        28992: 0,
        29100: 0,
        29101: 0,
        29220: 0,
        29221: 0,
        29333: 0,
        29635: 0,
        29636: 0,
        29701: 0,
        29738: 0,
        29739: 0,
        29849: 0,
        29850: 0,
        29871: 8,
        29872: 7,
        29873: 0,
        29874: 0,
        30200: 5,
        30339: 0,
        30340: 0,
        30591: 0,
        30592: 0,
        30791: 0,
        30792: 0,
        30800: 0,
        31028: 0,
        31121: 0,
        31154: 0,
        31170: 0,
        31171: 0,
        31370: 0,
        31528: 0,
        31529: 0,
        31600: 0,
        31700: 0,
        31838: 0,
        31839: 0,
        31900: 0,
        31901: 0,
        32061: 0,
        32062: 0,
        32098: 0,
        32099: 2,
        32100: 0,
        32104: 0,
        32161: 0,
        32766: 0,
        53048: 0,
        53049: 0,
        54090: 0,
        54091: 0,
        65061: 2,
        65062: 2,
        65161: 0,
        65163: 0,
        102041: 2,
        102064: 11,
        102068: 15,
        102069: 16,
        102118: 2,
        102119: 1,
        102120: 2,
        102121: 2,
        102217: 2,
        102218: 0,
        102219: 2,
        102220: 2,
        102378: 1,
        102379: 1,
        102380: 0,
        102381: 1,
        102589: 2,
        102599: 2,
        102600: 2,
        102604: 2,
        102647: 0,
        102704: 2,
        102705: 2,
        102706: 0,
        102759: 1,
        102760: 1,
        102761: 2,
        102762: 0,
        102763: 2,
        102764: 0,
        102765: 0,
        102766: 2,
        102962: 0,
        102963: 0,
        102970: 1,
        102974: 2,
        102993: 0,
        102994: 0,
        102995: 2,
        102996: 2,
        103015: 0,
        103016: 2,
        103017: 0,
        103018: 2,
        103025: 0,
        103026: 0,
        103027: 2,
        103028: 2,
        103035: 0,
        103036: 0,
        103037: 2,
        103038: 2,
        103039: 0,
        103040: 0,
        103041: 2,
        103042: 2,
        103043: 0,
        103044: 0,
        103045: 2,
        103046: 2,
        103047: 0,
        103048: 0,
        103049: 2,
        103050: 2,
        103051: 0,
        103052: 2,
        103053: 0,
        103054: 2,
        103055: 0,
        103056: 2,
        103057: 0,
        103058: 0,
        103059: 2,
        103060: 2,
        103061: 0,
        103062: 0,
        103063: 2,
        103064: 2,
        103069: 2,
        103070: 0,
        103071: 0,
        103072: 2,
        103073: 2,
        103086: 0,
        103087: 0,
        103088: 2,
        103089: 2,
        103094: 1,
        103095: 0,
        103096: 2,
        103103: 0,
        103104: 2,
        103105: 0,
        103106: 2,
        103121: 0,
        103122: 2,
        103123: 0,
        103124: 0,
        103125: 1,
        103126: 1,
        103127: 0,
        103128: 0,
        103129: 2,
        103130: 2,
        103131: 0,
        103132: 0,
        103133: 2,
        103134: 2,
        103135: 0,
        103136: 0,
        103137: 1,
        103138: 1,
        103139: 0,
        103140: 2,
        103141: 0,
        103142: 2,
        103143: 0,
        103144: 2,
        103145: 0,
        103146: 1,
        103147: 0,
        103148: 0,
        103149: 2,
        103150: 2,
        103151: 0,
        103152: 2,
        103172: 0,
        103173: 2,
        103174: 0,
        103175: 0,
        103176: 2,
        103177: 2,
        103178: 0,
        103179: 0,
        103180: 2,
        103181: 2,
        103182: 0,
        103183: 0,
        103184: 2,
        103185: 2,
        103228: 0,
        103229: 0,
        103230: 2,
        103231: 2,
        103250: 0,
        103251: 2,
        103252: 0,
        103253: 2,
        103260: 0,
        103261: 0,
        103262: 2,
        103263: 2,
        103270: 0,
        103271: 0,
        103272: 2,
        103273: 2,
        103274: 0,
        103275: 0,
        103276: 2,
        103277: 2,
        103278: 0,
        103279: 0,
        103280: 2,
        103281: 2,
        103282: 0,
        103283: 0,
        103284: 2,
        103285: 2,
        103286: 0,
        103287: 2,
        103288: 0,
        103289: 2,
        103290: 0,
        103291: 2,
        103292: 0,
        103293: 0,
        103294: 2,
        103295: 2,
        103296: 0,
        103297: 0,
        103298: 2,
        103299: 2,
        103376: 2,
        103377: 0,
        103378: 0,
        103379: 2,
        103380: 2,
        103393: 0,
        103394: 0,
        103395: 2,
        103396: 2,
        103472: 0,
        103473: 1,
        103474: 0,
        103475: 2,
        103482: 0,
        103483: 2,
        103484: 0,
        103485: 2,
        103500: 0,
        103501: 2,
        103502: 0,
        103503: 0,
        103504: 1,
        103505: 1,
        103506: 0,
        103507: 0,
        103508: 2,
        103509: 2,
        103510: 0,
        103511: 0,
        103512: 2,
        103513: 2,
        103514: 0,
        103515: 2,
        103516: 0,
        103517: 2,
        103518: 0,
        103519: 2,
        103520: 0,
        103521: 1,
        103522: 0,
        103523: 0,
        103524: 2,
        103525: 2,
        103526: 0,
        103527: 2,
        103561: 2,
        103562: 2,
        103563: 0,
        103564: 0,
        103565: 2,
        103566: 2,
        103567: 0,
        103568: 0,
        103569: 2,
        103570: 2,
        103584: 0,
        103585: 2,
        103586: 0,
        103587: 2,
        103588: 1,
        103589: 0,
        103590: 2,
        103591: 1,
        103592: 0,
        103593: 2,
        103594: 1,
        103695: 2,
      };
      for (n = 2e3; n <= 2045; n++) i[n] = 0;
      for (n = 2056; n <= 2065; n++) i[n] = 0;
      for (n = 2067; n <= 2135; n++) i[n] = 0;
      for (n = 2137; n <= 2154; n++) i[n] = 0;
      for (n = 2161; n <= 2170; n++) i[n] = 0;
      for (n = 2172; n <= 2193; n++) i[n] = 0;
      for (n = 2195; n <= 2198; n++) i[n] = 0;
      for (n = 2200; n <= 2203; n++) i[n] = 0;
      for (n = 2205; n <= 2217; n++) i[n] = 0;
      for (n = 2222; n <= 2224; n++) i[n] = 1;
      for (n = 2225; n <= 2250; n++) i[n] = 2;
      for (n = 2251; n <= 2253; n++) i[n] = 1;
      for (n = 2257; n <= 2264; n++) i[n] = 2;
      for (n = 2274; n <= 2279; n++) i[n] = 2;
      for (n = 2280; n <= 2282; n++) i[n] = 1;
      for (n = 2283; n <= 2289; n++) i[n] = 2;
      for (n = 2290; n <= 2292; n++) i[n] = 0;
      for (n = 2308; n <= 2313; n++) i[n] = 0;
      for (n = 2315; n <= 2491; n++) i[n] = 0;
      for (n = 2494; n <= 2866; n++) i[n] = 0;
      for (n = 2867; n <= 2869; n++) i[n] = 1;
      for (n = 2870; n <= 2888; n++) i[n] = 2;
      for (n = 2891; n <= 2895; n++) i[n] = 2;
      for (n = 2896; n <= 2898; n++) i[n] = 1;
      for (n = 2902; n <= 2908; n++) i[n] = 2;
      for (n = 2915; n <= 2920; n++) i[n] = 2;
      for (n = 2921; n <= 2923; n++) i[n] = 1;
      for (n = 2924; n <= 2930; n++) i[n] = 2;
      for (n = 2931; n <= 2962; n++) i[n] = 0;
      for (n = 2964; n <= 2968; n++) i[n] = 2;
      for (n = 2969; n <= 2973; n++) i[n] = 0;
      for (n = 2975; n <= 2991; n++) i[n] = 0;
      for (n = 2995; n <= 3051; n++) i[n] = 0;
      for (n = 3054; n <= 3079; n++) i[n] = 0;
      for (n = 3081; n <= 3088; n++) i[n] = 0;
      for (n = 3092; n <= 3101; n++) i[n] = 0;
      for (n = 3106; n <= 3138; n++) i[n] = 0;
      for (n = 3146; n <= 3151; n++) i[n] = 0;
      for (n = 3153; n <= 3166; n++) i[n] = 0;
      for (n = 3168; n <= 3172; n++) i[n] = 0;
      for (n = 3174; n <= 3203; n++) i[n] = 0;
      for (n = 3294; n <= 3358; n++) i[n] = 0;
      for (n = 3367; n <= 3403; n++) i[n] = 0;
      for (n = 3408; n <= 3416; n++) i[n] = 0;
      for (n = 3417; n <= 3438; n++) i[n] = 2;
      for (n = 3441; n <= 3446; n++) i[n] = 2;
      for (n = 3447; n <= 3450; n++) i[n] = 0;
      for (n = 3451; n <= 3459; n++) i[n] = 2;
      for (n = 3460; n <= 3478; n++) i[n] = 0;
      for (n = 3554; n <= 3559; n++) i[n] = 0;
      for (n = 3560; n <= 3570; n++) i[n] = 2;
      for (n = 3571; n <= 3581; n++) i[n] = 0;
      for (n = 3594; n <= 3597; n++) i[n] = 0;
      for (n = 3601; n <= 3604; n++) i[n] = 0;
      for (n = 3637; n <= 3639; n++) i[n] = 0;
      for (n = 3665; n <= 3667; n++) i[n] = 0;
      for (n = 3693; n <= 3695; n++) i[n] = 0;
      for (n = 3701; n <= 3727; n++) i[n] = 0;
      for (n = 3728; n <= 3739; n++) i[n] = 2;
      for (n = 3740; n <= 3751; n++) i[n] = 0;
      for (n = 3753; n <= 3760; n++) i[n] = 2;
      for (n = 3761; n <= 3773; n++) i[n] = 0;
      for (n = 3775; n <= 3777; n++) i[n] = 0;
      for (n = 3779; n <= 3781; n++) i[n] = 0;
      for (n = 3783; n <= 3785; n++) i[n] = 0;
      for (n = 3788; n <= 3791; n++) i[n] = 0;
      for (n = 3797; n <= 3802; n++) i[n] = 0;
      for (n = 3814; n <= 3816; n++) i[n] = 0;
      for (n = 3825; n <= 3829; n++) i[n] = 0;
      for (n = 3832; n <= 3841; n++) i[n] = 0;
      for (n = 3844; n <= 3852; n++) i[n] = 0;
      for (n = 3873; n <= 3885; n++) i[n] = 0;
      for (n = 3890; n <= 3893; n++) i[n] = 0;
      for (n = 3907; n <= 3912; n++) i[n] = 0;
      for (n = 3942; n <= 3950; n++) i[n] = 0;
      for (n = 3968; n <= 3970; n++) i[n] = 0;
      for (n = 3973; n <= 3976; n++) i[n] = 0;
      for (n = 3986; n <= 3989; n++) i[n] = 0;
      for (n = 3994; n <= 3997; n++) i[n] = 0;
      for (n = 4048; n <= 4051; n++) i[n] = 0;
      for (n = 4056; n <= 4063; n++) i[n] = 0;
      for (n = 4093; n <= 4096; n++) i[n] = 0;
      for (n = 4390; n <= 4398; n++) i[n] = 0;
      for (n = 4399; n <= 4413; n++) i[n] = 2;
      for (n = 4418; n <= 4433; n++) i[n] = 2;
      for (n = 4455; n <= 4457; n++) i[n] = 2;
      for (n = 4484; n <= 4489; n++) i[n] = 0;
      for (n = 4491; n <= 4554; n++) i[n] = 0;
      for (n = 4568; n <= 4589; n++) i[n] = 0;
      for (n = 4652; n <= 4656; n++) i[n] = 0;
      for (n = 4766; n <= 4800; n++) i[n] = 0;
      for (n = 5014; n <= 5016; n++) i[n] = 0;
      for (n = 5069; n <= 5072; n++) i[n] = 0;
      for (n = 5105; n <= 5130; n++) i[n] = 0;
      for (n = 5173; n <= 5188; n++) i[n] = 0;
      for (n = 5253; n <= 5259; n++) i[n] = 0;
      for (n = 5269; n <= 5275; n++) i[n] = 0;
      for (n = 5292; n <= 5311; n++) i[n] = 0;
      for (n = 5329; n <= 5331; n++) i[n] = 0;
      for (n = 5343; n <= 5349; n++) i[n] = 0;
      for (n = 5355; n <= 5357; n++) i[n] = 0;
      for (n = 5387; n <= 5389; n++) i[n] = 0;
      for (n = 5459; n <= 5463; n++) i[n] = 0;
      for (n = 5479; n <= 5482; n++) i[n] = 0;
      for (n = 5518; n <= 5520; n++) i[n] = 0;
      for (n = 5530; n <= 5539; n++) i[n] = 0;
      for (n = 5550; n <= 5552; n++) i[n] = 0;
      for (n = 5562; n <= 5583; n++) i[n] = 0;
      for (n = 5623; n <= 5625; n++) i[n] = 2;
      for (n = 5631; n <= 5639; n++) i[n] = 0;
      for (n = 5649; n <= 5653; n++) i[n] = 0;
      for (n = 5663; n <= 5680; n++) i[n] = 0;
      for (n = 5682; n <= 5685; n++) i[n] = 0;
      for (n = 5875; n <= 5877; n++) i[n] = 0;
      for (n = 5896; n <= 5899; n++) i[n] = 0;
      for (n = 5921; n <= 5940; n++) i[n] = 0;
      for (n = 6050; n <= 6125; n++) i[n] = 0;
      for (n = 6244; n <= 6275; n++) i[n] = 0;
      for (n = 6328; n <= 6348; n++) i[n] = 0;
      for (n = 6350; n <= 6356; n++) i[n] = 0;
      for (n = 6366; n <= 6372; n++) i[n] = 0;
      for (n = 6381; n <= 6387; n++) i[n] = 0;
      for (n = 6393; n <= 6404; n++) i[n] = 0;
      for (n = 6480; n <= 6483; n++) i[n] = 0;
      for (n = 6511; n <= 6514; n++) i[n] = 0;
      for (n = 6579; n <= 6581; n++) i[n] = 0;
      for (n = 6619; n <= 6624; n++) i[n] = 0;
      for (n = 6625; n <= 6627; n++) i[n] = 2;
      for (n = 6628; n <= 6632; n++) i[n] = 0;
      for (n = 6634; n <= 6637; n++) i[n] = 0;
      for (n = 6669; n <= 6692; n++) i[n] = 0;
      for (n = 6707; n <= 6709; n++) i[n] = 0;
      for (n = 6720; n <= 6723; n++) i[n] = 0;
      for (n = 6732; n <= 6738; n++) i[n] = 0;
      for (n = 6931; n <= 6933; n++) i[n] = 0;
      for (n = 6956; n <= 6959; n++) i[n] = 0;
      for (n = 7005; n <= 7007; n++) i[n] = 0;
      for (n = 7057; n <= 7070; n++) i[n] = 2;
      for (n = 7074; n <= 7082; n++) i[n] = 0;
      for (n = 7109; n <= 7118; n++) i[n] = 0;
      for (n = 7119; n <= 7127; n++) i[n] = 1;
      for (n = 7374; n <= 7376; n++) i[n] = 0;
      for (n = 7528; n <= 7586; n++) i[n] = 0;
      for (n = 7587; n <= 7645; n++) i[n] = 2;
      for (n = 7692; n <= 7696; n++) i[n] = 0;
      for (n = 7755; n <= 7787; n++) i[n] = 0;
      for (n = 7791; n <= 7795; n++) i[n] = 0;
      for (n = 7799; n <= 7801; n++) i[n] = 0;
      for (n = 7803; n <= 7805; n++) i[n] = 0;
      for (n = 7825; n <= 7831; n++) i[n] = 0;
      for (n = 7845; n <= 7859; n++) i[n] = 0;
      for (n = 8013; n <= 8032; n++) i[n] = 0;
      for (n = 8065; n <= 8068; n++) i[n] = 1;
      for (n = 8518; n <= 8529; n++) i[n] = 2;
      for (n = 8533; n <= 8536; n++) i[n] = 2;
      for (n = 8538; n <= 8540; n++) i[n] = 2;
      for (n = 8677; n <= 8679; n++) i[n] = 0;
      for (n = 8836; n <= 8840; n++) i[n] = 0;
      for (n = 8857; n <= 8859; n++) i[n] = 0;
      for (n = 8908; n <= 8910; n++) i[n] = 0;
      for (n = 9154; n <= 9159; n++) i[n] = 0;
      for (n = 9205; n <= 9218; n++) i[n] = 0;
      for (n = 9271; n <= 9273; n++) i[n] = 0;
      for (n = 9295; n <= 9297; n++) i[n] = 0;
      for (n = 9356; n <= 9360; n++) i[n] = 0;
      for (n = 9404; n <= 9407; n++) i[n] = 0;
      for (n = 9476; n <= 9482; n++) i[n] = 0;
      for (n = 9487; n <= 9494; n++) i[n] = 0;
      for (n = 9697; n <= 9699; n++) i[n] = 0;
      for (n = 20002; n <= 20032; n++) i[n] = 0;
      for (n = 20062; n <= 20092; n++) i[n] = 0;
      for (n = 20135; n <= 20138; n++) i[n] = 0;
      for (n = 20248; n <= 20258; n++) i[n] = 0;
      for (n = 20348; n <= 20358; n++) i[n] = 0;
      for (n = 20436; n <= 20440; n++) i[n] = 0;
      for (n = 20822; n <= 20824; n++) i[n] = 0;
      for (n = 20904; n <= 20932; n++) i[n] = 0;
      for (n = 20934; n <= 20936; n++) i[n] = 0;
      for (n = 21004; n <= 21032; n++) i[n] = 0;
      for (n = 21035; n <= 21037; n++) i[n] = 0;
      for (n = 21095; n <= 21097; n++) i[n] = 0;
      for (n = 21148; n <= 21150; n++) i[n] = 0;
      for (n = 21207; n <= 21264; n++) i[n] = 0;
      for (n = 21307; n <= 21364; n++) i[n] = 0;
      for (n = 21413; n <= 21423; n++) i[n] = 0;
      for (n = 21453; n <= 21463; n++) i[n] = 0;
      for (n = 21473; n <= 21483; n++) i[n] = 0;
      for (n = 21780; n <= 21782; n++) i[n] = 0;
      for (n = 21891; n <= 21894; n++) i[n] = 0;
      for (n = 21896; n <= 21899; n++) i[n] = 0;
      for (n = 22171; n <= 22177; n++) i[n] = 0;
      for (n = 22181; n <= 22187; n++) i[n] = 0;
      for (n = 22191; n <= 22197; n++) i[n] = 0;
      for (n = 22234; n <= 22236; n++) i[n] = 0;
      for (n = 22521; n <= 22525; n++) i[n] = 0;
      for (n = 22991; n <= 22994; n++) i[n] = 0;
      for (n = 23028; n <= 23038; n++) i[n] = 0;
      for (n = 23830; n <= 23853; n++) i[n] = 0;
      for (n = 23866; n <= 23872; n++) i[n] = 0;
      for (n = 23877; n <= 23884; n++) i[n] = 0;
      for (n = 23886; n <= 23894; n++) i[n] = 0;
      for (n = 23946; n <= 23948; n++) i[n] = 0;
      for (n = 24311; n <= 24313; n++) i[n] = 0;
      for (n = 24342; n <= 24347; n++) i[n] = 0;
      for (n = 24370; n <= 24374; n++) i[n] = 10;
      for (n = 24375; n <= 24381; n++) i[n] = 0;
      for (n = 24718; n <= 24721; n++) i[n] = 0;
      for (n = 24817; n <= 24821; n++) i[n] = 0;
      for (n = 24877; n <= 24882; n++) i[n] = 0;
      for (n = 24891; n <= 24893; n++) i[n] = 0;
      for (n = 25391; n <= 25395; n++) i[n] = 0;
      for (n = 25828; n <= 25838; n++) i[n] = 0;
      for (n = 26191; n <= 26195; n++) i[n] = 0;
      for (n = 26391; n <= 26393; n++) i[n] = 0;
      for (n = 26701; n <= 26722; n++) i[n] = 0;
      for (n = 26729; n <= 26799; n++) i[n] = 2;
      for (n = 26801; n <= 26803; n++) i[n] = 2;
      for (n = 26811; n <= 26813; n++) i[n] = 2;
      for (n = 26847; n <= 26870; n++) i[n] = 2;
      for (n = 26891; n <= 26899; n++) i[n] = 0;
      for (n = 26901; n <= 26923; n++) i[n] = 0;
      for (n = 26929; n <= 26946; n++) i[n] = 0;
      for (n = 26948; n <= 26998; n++) i[n] = 0;
      for (n = 27037; n <= 27040; n++) i[n] = 0;
      for (n = 27205; n <= 27232; n++) i[n] = 0;
      for (n = 27258; n <= 27260; n++) i[n] = 0;
      for (n = 27391; n <= 27398; n++) i[n] = 0;
      for (n = 27561; n <= 27564; n++) i[n] = 0;
      for (n = 27571; n <= 27574; n++) i[n] = 0;
      for (n = 27581; n <= 27584; n++) i[n] = 0;
      for (n = 27591; n <= 27594; n++) i[n] = 0;
      for (n = 28191; n <= 28193; n++) i[n] = 0;
      for (n = 28348; n <= 28358; n++) i[n] = 0;
      for (n = 28402; n <= 28432; n++) i[n] = 0;
      for (n = 28462; n <= 28492; n++) i[n] = 0;
      for (n = 29118; n <= 29122; n++) i[n] = 0;
      for (n = 29168; n <= 29172; n++) i[n] = 0;
      for (n = 29177; n <= 29185; n++) i[n] = 0;
      for (n = 29187; n <= 29195; n++) i[n] = 0;
      for (n = 29900; n <= 29903; n++) i[n] = 0;
      for (n = 30161; n <= 30179; n++) i[n] = 0;
      for (n = 30491; n <= 30494; n++) i[n] = 0;
      for (n = 30729; n <= 30732; n++) i[n] = 0;
      for (n = 31251; n <= 31259; n++) i[n] = 0;
      for (n = 31265; n <= 31268; n++) i[n] = 0;
      for (n = 31275; n <= 31279; n++) i[n] = 0;
      for (n = 31281; n <= 31297; n++) i[n] = 0;
      for (n = 31461; n <= 31469; n++) i[n] = 0;
      for (n = 31491; n <= 31495; n++) i[n] = 0;
      for (n = 31917; n <= 31922; n++) i[n] = 0;
      for (n = 31965; n <= 32e3; n++) i[n] = 0;
      for (n = 32001; n <= 32003; n++) i[n] = 2;
      for (n = 32005; n <= 32031; n++) i[n] = 2;
      for (n = 32033; n <= 32060; n++) i[n] = 2;
      for (n = 32064; n <= 32067; n++) i[n] = 2;
      for (n = 32074; n <= 32077; n++) i[n] = 2;
      for (n = 32081; n <= 32086; n++) i[n] = 0;
      for (n = 32107; n <= 32130; n++) i[n] = 0;
      for (n = 32133; n <= 32158; n++) i[n] = 0;
      for (n = 32164; n <= 32167; n++) i[n] = 2;
      for (n = 32180; n <= 32199; n++) i[n] = 0;
      for (n = 32201; n <= 32260; n++) i[n] = 0;
      for (n = 32301; n <= 32360; n++) i[n] = 0;
      for (n = 32601; n <= 32662; n++) i[n] = 0;
      for (n = 32664; n <= 32667; n++) i[n] = 2;
      for (n = 32701; n <= 32761; n++) i[n] = 0;
      for (n = 53001; n <= 53004; n++) i[n] = 0;
      for (n = 53008; n <= 53019; n++) i[n] = 0;
      for (n = 53021; n <= 53032; n++) i[n] = 0;
      for (n = 53034; n <= 53037; n++) i[n] = 0;
      for (n = 53042; n <= 53046; n++) i[n] = 0;
      for (n = 53074; n <= 53080; n++) i[n] = 0;
      for (n = 54001; n <= 54004; n++) i[n] = 0;
      for (n = 54008; n <= 54019; n++) i[n] = 0;
      for (n = 54021; n <= 54032; n++) i[n] = 0;
      for (n = 54034; n <= 54037; n++) i[n] = 0;
      for (n = 54042; n <= 54046; n++) i[n] = 0;
      for (n = 54048; n <= 54053; n++) i[n] = 0;
      for (n = 54074; n <= 54080; n++) i[n] = 0;
      for (n = 54098; n <= 54101; n++) i[n] = 0;
      for (n = 102001; n <= 102040; n++) i[n] = 0;
      for (n = 102042; n <= 102063; n++) i[n] = 0;
      for (n = 102065; n <= 102067; n++) i[n] = 0;
      for (n = 102070; n <= 102117; n++) i[n] = 0;
      for (n = 102122; n <= 102216; n++) i[n] = 0;
      for (n = 102221; n <= 102377; n++) i[n] = 0;
      for (n = 102382; n <= 102388; n++) i[n] = 0;
      for (n = 102389; n <= 102398; n++) i[n] = 2;
      for (n = 102399; n <= 102444; n++) i[n] = 0;
      for (n = 102445; n <= 102447; n++) i[n] = 2;
      for (n = 102448; n <= 102458; n++) i[n] = 0;
      for (n = 102459; n <= 102468; n++) i[n] = 2;
      for (n = 102469; n <= 102499; n++) i[n] = 0;
      for (n = 102500; n <= 102519; n++) i[n] = 1;
      for (n = 102520; n <= 102524; n++) i[n] = 0;
      for (n = 102525; n <= 102529; n++) i[n] = 2;
      for (n = 102530; n <= 102588; n++) i[n] = 0;
      for (n = 102590; n <= 102598; n++) i[n] = 0;
      for (n = 102601; n <= 102603; n++) i[n] = 0;
      for (n = 102605; n <= 102628; n++) i[n] = 0;
      for (n = 102629; n <= 102646; n++) i[n] = 2;
      for (n = 102648; n <= 102700; n++) i[n] = 2;
      for (n = 102701; n <= 102703; n++) i[n] = 0;
      for (n = 102707; n <= 102730; n++) i[n] = 2;
      for (n = 102733; n <= 102758; n++) i[n] = 2;
      for (n = 102767; n <= 102900; n++) i[n] = 0;
      for (n = 102901; n <= 102933; n++) i[n] = 2;
      for (n = 102934; n <= 102950; n++) i[n] = 13;
      for (n = 102951; n <= 102960; n++) i[n] = 0;
      for (n = 102965; n <= 102969; n++) i[n] = 0;
      for (n = 102971; n <= 102973; n++) i[n] = 0;
      for (n = 102975; n <= 102989; n++) i[n] = 0;
      for (n = 102990; n <= 102992; n++) i[n] = 1;
      for (n = 102997; n <= 103002; n++) i[n] = 0;
      for (n = 103003; n <= 103008; n++) i[n] = 2;
      for (n = 103009; n <= 103011; n++) i[n] = 0;
      for (n = 103012; n <= 103014; n++) i[n] = 2;
      for (n = 103019; n <= 103021; n++) i[n] = 0;
      for (n = 103022; n <= 103024; n++) i[n] = 2;
      for (n = 103029; n <= 103031; n++) i[n] = 0;
      for (n = 103032; n <= 103034; n++) i[n] = 2;
      for (n = 103065; n <= 103068; n++) i[n] = 0;
      for (n = 103074; n <= 103076; n++) i[n] = 0;
      for (n = 103077; n <= 103079; n++) i[n] = 1;
      for (n = 103080; n <= 103082; n++) i[n] = 0;
      for (n = 103083; n <= 103085; n++) i[n] = 2;
      for (n = 103090; n <= 103093; n++) i[n] = 0;
      for (n = 103097; n <= 103099; n++) i[n] = 0;
      for (n = 103100; n <= 103102; n++) i[n] = 2;
      for (n = 103107; n <= 103109; n++) i[n] = 0;
      for (n = 103110; n <= 103112; n++) i[n] = 2;
      for (n = 103113; n <= 103116; n++) i[n] = 0;
      for (n = 103117; n <= 103120; n++) i[n] = 2;
      for (n = 103153; n <= 103157; n++) i[n] = 0;
      for (n = 103158; n <= 103162; n++) i[n] = 2;
      for (n = 103163; n <= 103165; n++) i[n] = 0;
      for (n = 103166; n <= 103168; n++) i[n] = 1;
      for (n = 103169; n <= 103171; n++) i[n] = 2;
      for (n = 103186; n <= 103188; n++) i[n] = 0;
      for (n = 103189; n <= 103191; n++) i[n] = 2;
      for (n = 103192; n <= 103195; n++) i[n] = 0;
      for (n = 103196; n <= 103199; n++) i[n] = 2;
      for (n = 103200; n <= 103224; n++) i[n] = 0;
      for (n = 103225; n <= 103227; n++) i[n] = 1;
      for (n = 103232; n <= 103237; n++) i[n] = 0;
      for (n = 103238; n <= 103243; n++) i[n] = 2;
      for (n = 103244; n <= 103246; n++) i[n] = 0;
      for (n = 103247; n <= 103249; n++) i[n] = 2;
      for (n = 103254; n <= 103256; n++) i[n] = 0;
      for (n = 103257; n <= 103259; n++) i[n] = 2;
      for (n = 103264; n <= 103266; n++) i[n] = 0;
      for (n = 103267; n <= 103269; n++) i[n] = 2;
      for (n = 103300; n <= 103375; n++) i[n] = 0;
      for (n = 103381; n <= 103383; n++) i[n] = 0;
      for (n = 103384; n <= 103386; n++) i[n] = 1;
      for (n = 103387; n <= 103389; n++) i[n] = 0;
      for (n = 103390; n <= 103392; n++) i[n] = 2;
      for (n = 103397; n <= 103399; n++) i[n] = 0;
      for (n = 103400; n <= 103471; n++) i[n] = 2;
      for (n = 103476; n <= 103478; n++) i[n] = 0;
      for (n = 103479; n <= 103481; n++) i[n] = 2;
      for (n = 103486; n <= 103488; n++) i[n] = 0;
      for (n = 103489; n <= 103491; n++) i[n] = 2;
      for (n = 103492; n <= 103495; n++) i[n] = 0;
      for (n = 103496; n <= 103499; n++) i[n] = 2;
      for (n = 103528; n <= 103543; n++) i[n] = 0;
      for (n = 103544; n <= 103548; n++) i[n] = 2;
      for (n = 103549; n <= 103551; n++) i[n] = 0;
      for (n = 103552; n <= 103554; n++) i[n] = 1;
      for (n = 103555; n <= 103557; n++) i[n] = 2;
      for (n = 103558; n <= 103560; n++) i[n] = 0;
      for (n = 103571; n <= 103573; n++) i[n] = 0;
      for (n = 103574; n <= 103576; n++) i[n] = 2;
      for (n = 103577; n <= 103580; n++) i[n] = 0;
      for (n = 103581; n <= 103583; n++) i[n] = 2;
      for (n = 103595; n <= 103694; n++) i[n] = 0;
      for (n = 103696; n <= 103699; n++) i[n] = 0;
      for (n = 103700; n <= 103793; n++) i[n] = 2;
      for (n = 103794; n <= 103872; n++) i[n] = 0;
      for (n = 103900; n <= 103971; n++) i[n] = 2;
    },
    20322: (t, e, r) => {
      function n(t) {
        return (
          void 0 !== t.xmin &&
          void 0 !== t.ymin &&
          void 0 !== t.xmax &&
          void 0 !== t.ymax
        );
      }
      function i(t) {
        return void 0 !== t.points;
      }
      function o(t) {
        return void 0 !== t.x && void 0 !== t.y;
      }
      function s(t) {
        return void 0 !== t.paths;
      }
      function a(t) {
        return void 0 !== t.rings;
      }
      function l(t) {
        return (e, r) => (null == e ? r : null == r ? e : t(e, r));
      }
      r.d(e, { $P: () => u, Yg: () => c, lC: () => d, C6: () => m });
      const h = l(Math.min),
        f = l(Math.max);
      function u(t, e) {
        return s(e)
          ? m(t, e.paths, !1, !1)
          : a(e)
          ? m(t, e.rings, !1, !1)
          : i(e)
          ? d(t, e.points, !1, !1, !1, !1)
          : n(e)
          ? p(t, e)
          : (o(e) && ((t[0] = e.x), (t[1] = e.y), (t[2] = e.x), (t[3] = e.y)),
            t);
      }
      function c(t, e) {
        return s(e)
          ? m(t, e.paths, !0, !1)
          : a(e)
          ? m(t, e.rings, !0, !1)
          : i(e)
          ? d(t, e.points, !0, !1, !0, !1)
          : n(e)
          ? p(t, e, 0, 0, !0, !1)
          : (o(e) &&
              ((t[0] = e.x),
              (t[1] = e.y),
              (t[2] = e.z),
              (t[3] = e.x),
              (t[4] = e.y),
              (t[5] = e.z)),
            t);
      }
      function m(t, e, r, n) {
        const i = r ? 3 : 2;
        if (!e.length || !e[0].length) return null;
        let o,
          s,
          a,
          l,
          [u, c] = e[0][0],
          [m, p] = e[0][0];
        for (let t = 0; t < e.length; t++) {
          const d = e[t];
          for (let t = 0; t < d.length; t++) {
            const e = d[t],
              [y, x] = e;
            if (
              ((u = h(u, y)),
              (c = h(c, x)),
              (m = f(m, y)),
              (p = f(p, x)),
              r && e.length > 2)
            ) {
              const t = e[2];
              (o = h(o, t)), (s = f(s, t));
            }
            if (n && e.length > i) {
              const t = e[i];
              (a = h(o, t)), (l = f(s, t));
            }
          }
        }
        return r
          ? n
            ? ((t[0] = u),
              (t[1] = c),
              (t[2] = o),
              (t[3] = a),
              (t[4] = m),
              (t[5] = p),
              (t[6] = s),
              (t[7] = l),
              (t.length = 8),
              t)
            : ((t[0] = u),
              (t[1] = c),
              (t[2] = o),
              (t[3] = m),
              (t[4] = p),
              (t[5] = s),
              (t.length = 6),
              t)
          : n
          ? ((t[0] = u),
            (t[1] = c),
            (t[2] = a),
            (t[3] = m),
            (t[4] = p),
            (t[5] = l),
            (t.length = 6),
            t)
          : ((t[0] = u), (t[1] = c), (t[2] = m), (t[3] = p), (t.length = 4), t);
      }
      function p(t, e, r, n, i, o) {
        const s = e.xmin,
          a = e.xmax,
          l = e.ymin,
          h = e.ymax;
        let f = e.zmin,
          u = e.zmax,
          c = e.mmin,
          m = e.mmax;
        return i
          ? ((f = f || 0),
            (u = u || 0),
            o
              ? ((c = c || 0),
                (m = m || 0),
                (t[0] = s),
                (t[1] = l),
                (t[2] = f),
                (t[3] = c),
                (t[4] = a),
                (t[5] = h),
                (t[6] = u),
                (t[7] = m),
                t)
              : ((t[0] = s),
                (t[1] = l),
                (t[2] = f),
                (t[3] = a),
                (t[4] = h),
                (t[5] = u),
                t))
          : o
          ? ((c = c || 0),
            (m = m || 0),
            (t[0] = s),
            (t[1] = l),
            (t[2] = c),
            (t[3] = a),
            (t[4] = h),
            (t[5] = m),
            t)
          : ((t[0] = s), (t[1] = l), (t[2] = a), (t[3] = h), t);
      }
      function d(t, e, r, n, i, o) {
        const s = r ? 3 : 2,
          a = n && o,
          l = r && i;
        if (!e.length || !e[0].length) return null;
        let u,
          c,
          m,
          p,
          [d, y] = e[0],
          [x, M] = e[0];
        for (let t = 0; t < e.length; t++) {
          const r = e[t],
            [n, i] = r;
          if (
            ((d = h(d, n)),
            (y = h(y, i)),
            (x = f(x, n)),
            (M = f(M, i)),
            l && r.length > 2)
          ) {
            const t = r[2];
            (u = h(u, t)), (c = f(c, t));
          }
          if (a && r.length > s) {
            const t = r[s];
            (m = h(u, t)), (p = f(c, t));
          }
        }
        return i
          ? ((u = u || 0),
            (c = c || 0),
            o
              ? ((m = m || 0),
                (p = p || 0),
                (t[0] = d),
                (t[1] = y),
                (t[2] = u),
                (t[3] = m),
                (t[4] = x),
                (t[5] = M),
                (t[6] = c),
                (t[7] = p),
                t)
              : ((t[0] = d),
                (t[1] = y),
                (t[2] = u),
                (t[3] = x),
                (t[4] = M),
                (t[5] = c),
                t))
          : o
          ? ((m = m || 0),
            (p = p || 0),
            (t[0] = d),
            (t[1] = y),
            (t[2] = m),
            (t[3] = x),
            (t[4] = M),
            (t[5] = p),
            t)
          : ((t[0] = d), (t[1] = y), (t[2] = x), (t[3] = M), t);
      }
    },
    35308: (t, e, r) => {
      r.d(e, { $G: () => i, tO: () => o });
      var n = r(86662);
      function i(t) {
        return t
          ? t.hasZ
            ? [t.xmax - t.xmin / 2, t.ymax - t.ymin / 2, t.zmax - t.zmin / 2]
            : [t.xmax - t.xmin / 2, t.ymax - t.ymin / 2]
          : null;
      }
      function o(t) {
        return t
          ? (function (t, e) {
              if (!t || !t.length) return null;
              const r = [],
                i = [],
                o = e
                  ? [1 / 0, -1 / 0, 1 / 0, -1 / 0, 1 / 0, -1 / 0]
                  : [1 / 0, -1 / 0, 1 / 0, -1 / 0];
              for (let r = 0, n = t.length; r < n; r++) {
                const n = s(t[r], e, o);
                n && i.push(n);
              }
              if (
                (i.sort((t, r) => {
                  let n = t[2] - r[2];
                  return 0 === n && e && (n = t[4] - r[4]), n;
                }),
                i.length &&
                  ((r[0] = i[0][0]),
                  (r[1] = i[0][1]),
                  e && (r[2] = i[0][3]),
                  (r[0] < o[0] ||
                    r[0] > o[1] ||
                    r[1] < o[2] ||
                    r[1] > o[3] ||
                    (e && (r[2] < o[4] || r[2] > o[5]))) &&
                    (r.length = 0)),
                !r.length)
              ) {
                const i =
                  t[0] && t[0].length
                    ? (function (t, e) {
                        const r = e ? [0, 0, 0] : [0, 0],
                          i = e ? [0, 0, 0] : [0, 0];
                        let o = 0,
                          s = 0,
                          a = 0,
                          l = 0;
                        for (let h = 0, f = t.length; h < f - 1; h++) {
                          const f = t[h],
                            u = t[h + 1];
                          if (f && u) {
                            (r[0] = f[0]),
                              (r[1] = f[1]),
                              (i[0] = u[0]),
                              (i[1] = u[1]),
                              e &&
                                f.length > 2 &&
                                u.length > 2 &&
                                ((r[2] = f[2]), (i[2] = u[2]));
                            const t = (0, n.xA)(r, i);
                            if (t) {
                              o += t;
                              const r = (0, n.Gi)(f, u);
                              (s += t * r[0]),
                                (a += t * r[1]),
                                e && r.length > 2 && (l += t * r[2]);
                            }
                          }
                        }
                        return o > 0
                          ? e
                            ? [s / o, a / o, l / o]
                            : [s / o, a / o]
                          : t.length
                          ? t[0]
                          : null;
                      })(t[0], e)
                    : null;
                if (!i) return null;
                (r[0] = i[0]),
                  (r[1] = i[1]),
                  e && i.length > 2 && (r[2] = i[2]);
              }
              return r;
            })(t.rings, t.hasZ)
          : null;
      }
      function s(t, e, r) {
        let n = 0,
          i = 0,
          o = 0,
          s = 0,
          a = 0;
        const l = t.length ? t[0][0] : 0,
          h = t.length ? t[0][1] : 0,
          f = t.length && e ? t[0][2] : 0;
        for (let u = 0; u < t.length; u++) {
          const c = t[u],
            m = t[(u + 1) % t.length],
            [p, d, y] = c,
            x = p - l,
            M = d - h,
            g = e ? y - f : void 0,
            [_, w, R] = m,
            C = _ - l,
            S = w - h,
            b = e ? R - f : void 0,
            v = x * S - C * M;
          if (
            ((s += v),
            (n += (x + C) * v),
            (i += (M + S) * v),
            e && c.length > 2 && m.length > 2)
          ) {
            const t = x * b - C * g;
            (o += (g + b) * t), (a += t);
          }
          p < r[0] && (r[0] = p),
            p > r[1] && (r[1] = p),
            d < r[2] && (r[2] = d),
            d > r[3] && (r[3] = d),
            e && (y < r[4] && (r[4] = y), y > r[5] && (r[5] = y));
        }
        if ((s > 0 && (s *= -1), a > 0 && (a *= -1), !s)) return null;
        (s *= 0.5), (a *= 0.5);
        const u = [n / (6 * s) + l, i / (6 * s) + h, s];
        return (
          e &&
            (r[4] === r[5] || 0 === a
              ? ((u[3] = (r[4] + r[5]) / 2), (u[4] = 0))
              : ((u[3] = o / (6 * a) + f), (u[4] = a))),
          u
        );
      }
    },
    54102: (t, e, r) => {
      r.d(e, {
        OQ: () => l,
        Qg: () => h,
        uP: () => a,
        lQ: () => s,
        aV: () => o,
        rM: () => c,
        CI: () => u,
      });
      var n = r(70586);
      const i = [0, 0];
      function o(t, e) {
        return !!(0, n.pC)(e) && f(t, e.x, e.y, e.z);
      }
      function s(t, e) {
        if (!e.points || e.points.length) return !1;
        for (const r of e.points) if (!l(t, r)) return !1;
        return !0;
      }
      function a(t, e) {
        const { xmin: r, ymin: n, zmin: i, xmax: o, ymax: s, zmax: a } = e;
        return t.hasZ && e.hasZ
          ? f(t, r, n, i) &&
              f(t, r, s, i) &&
              f(t, o, s, i) &&
              f(t, o, n, i) &&
              f(t, r, n, a) &&
              f(t, r, s, a) &&
              f(t, o, s, a) &&
              f(t, o, n, a)
          : f(t, r, n) && f(t, r, s) && f(t, o, s) && f(t, o, n);
      }
      function l(t, e) {
        return f(t, e[0], e[1]);
      }
      function h(t, e) {
        return f(t, e[0], e[1], e[2]);
      }
      function f(t, e, r, n) {
        return (
          e >= t.xmin &&
          e <= t.xmax &&
          r >= t.ymin &&
          r <= t.ymax &&
          (null == n || !t.hasZ || (n >= t.zmin && n <= t.zmax))
        );
      }
      function u(t, e) {
        return (i[1] = e.y), (i[0] = e.x), c(t, i);
      }
      function c(t, e) {
        return (function (t, e) {
          if (!t) return !1;
          if (
            (function (t) {
              return !Array.isArray(t[0][0]);
            })(t)
          )
            return m(!1, t, e);
          let r = !1;
          for (let n = 0, i = t.length; n < i; n++) r = m(r, t[n], e);
          return r;
        })(t.rings, e);
      }
      function m(t, e, r) {
        const [n, i] = r;
        let o = t,
          s = 0;
        for (let t = 0, r = e.length; t < r; t++) {
          s++, s === r && (s = 0);
          const [a, l] = e[t],
            [h, f] = e[s];
          ((l < i && f >= i) || (f < i && l >= i)) &&
            a + ((i - l) / (f - l)) * (h - a) < n &&
            (o = !o);
        }
        return o;
      }
    },
    86662: (t, e, r) => {
      function n(t, e) {
        const r = e[0] - t[0],
          n = e[1] - t[1];
        if (t.length > 2 && e.length > 2) {
          const i = t[2] - e[2];
          return Math.sqrt(r * r + n * n + i * i);
        }
        return Math.sqrt(r * r + n * n);
      }
      function i(t, e) {
        return (function (t, e, r) {
          const n = t[0] + r * (e[0] - t[0]),
            i = t[1] + r * (e[1] - t[1]);
          return t.length > 2 && e.length > 2
            ? [n, i, t[2] + r * (e[2] - t[2])]
            : [n, i];
        })(t, e, 0.5);
      }
      function o(t, e, r) {
        const n = t.length;
        let i = 0,
          o = 0,
          s = 0;
        for (let a = 0; a < n; a++) {
          const l = t[a],
            h = t[(a + 1) % n];
          let f = 2;
          (i += l[0] * h[1] - h[0] * l[1]),
            l.length > 2 &&
              h.length > 2 &&
              r &&
              ((o += l[0] * h[2] - h[0] * l[2]), (f = 3)),
            l.length > f &&
              h.length > f &&
              e &&
              (s += l[0] * h[f] - h[0] * l[f]);
        }
        return i <= 0 && o <= 0 && s <= 0;
      }
      r.d(e, { xA: () => n, Gi: () => i, bu: () => o }), r(8744);
    },
    49600: (t, e, r) => {
      r.d(e, { aO: () => f, _w: () => u, Wn: () => c });
      var n = r(20322);
      const i = [];
      function o(t, e, r, n) {
        return { xmin: t, ymin: e, xmax: r, ymax: n };
      }
      function s(t, e, r, n, i, o) {
        return { xmin: t, ymin: e, zmin: r, xmax: n, ymax: i, zmax: o };
      }
      function a(t, e, r, n, i, o) {
        return { xmin: t, ymin: e, mmin: r, xmax: n, ymax: i, mmax: o };
      }
      function l(t, e, r, n, i, o, s, a) {
        return {
          xmin: t,
          ymin: e,
          zmin: r,
          mmin: n,
          xmax: i,
          ymax: o,
          zmax: s,
          mmax: a,
        };
      }
      function h(t, e = !1, r = !1) {
        return e
          ? r
            ? l(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7])
            : s(t[0], t[1], t[2], t[3], t[4], t[5])
          : r
          ? a(t[0], t[1], t[2], t[3], t[4], t[5])
          : o(t[0], t[1], t[2], t[3]);
      }
      function f(t) {
        return t
          ? (function (t) {
              return (
                void 0 !== t.xmin &&
                void 0 !== t.ymin &&
                void 0 !== t.xmax &&
                void 0 !== t.ymax
              );
            })(t)
            ? t
            : (function (t) {
                return void 0 !== t.x && void 0 !== t.y;
              })(t)
            ? (function (t) {
                const { x: e, y: r, z: n, m: i } = t,
                  h = null != i;
                return null != n
                  ? h
                    ? l(e, r, n, i, e, r, n, i)
                    : s(e, r, n, e, r, n)
                  : h
                  ? a(e, r, i, e, r, i)
                  : o(e, r, e, r);
              })(t)
            : (function (t) {
                return void 0 !== t.rings;
              })(t)
            ? u(t)
            : (function (t) {
                return void 0 !== t.paths;
              })(t)
            ? c(t)
            : (function (t) {
                return void 0 !== t.points;
              })(t)
            ? (function (t) {
                const { hasZ: e, hasM: r, points: o } = t;
                return h((0, n.lC)(i, o, e, r), e, r);
              })(t)
            : null
          : null;
      }
      function u(t) {
        const { hasZ: e, hasM: r, rings: o } = t,
          s = (0, n.C6)(i, o, e, r);
        return s ? h(s, e, r) : null;
      }
      function c(t) {
        const { hasZ: e, hasM: r, paths: o } = t,
          s = (0, n.C6)(i, o, e, r);
        return s ? h(s, e, r) : null;
      }
    },
    87416: (t, e, r) => {
      r.d(e, { h_: () => o, IY: () => g, Ff: () => y, UT: () => M });
      var n = r(54102);
      function i(t, e) {
        return (0, n.aV)(t, e);
      }
      function o(t, e) {
        const r = t.hasZ && e.hasZ;
        let n, i, o;
        if (t.xmin <= e.xmin) {
          if (((n = e.xmin), t.xmax < n)) return !1;
        } else if (((n = t.xmin), e.xmax < n)) return !1;
        if (t.ymin <= e.ymin) {
          if (((i = e.ymin), t.ymax < i)) return !1;
        } else if (((i = t.ymin), e.ymax < i)) return !1;
        if (r && e.hasZ)
          if (t.zmin <= e.zmin) {
            if (((o = e.zmin), t.zmax < o)) return !1;
          } else if (((o = t.zmin), e.zmax < o)) return !1;
        return !0;
      }
      function s(t, e) {
        const { points: r, hasZ: i } = e,
          o = i ? n.Qg : n.OQ;
        for (const e of r) if (o(t, e)) return !0;
        return !1;
      }
      const a = [0, 0],
        l = [0, 0],
        h = [0, 0],
        f = [0, 0],
        u = [a, l, h, f],
        c = [
          [h, a],
          [a, l],
          [l, f],
          [f, h],
        ];
      function m(t, e) {
        (a[0] = t.xmin),
          (a[1] = t.ymax),
          (l[0] = t.xmax),
          (l[1] = t.ymax),
          (h[0] = t.xmin),
          (h[1] = t.ymin),
          (f[0] = t.xmax),
          (f[1] = t.ymin);
        for (const t of u) if ((0, n.rM)(e, t)) return !0;
        for (const r of e.rings) {
          if (!r.length) continue;
          let e = r[0];
          if ((0, n.OQ)(t, e)) return !0;
          for (let i = 1; i < r.length; i++) {
            const o = r[i];
            if ((0, n.OQ)(t, o) || x(e, o, c)) return !0;
            e = o;
          }
        }
        return !1;
      }
      function p(t, e) {
        (a[0] = t.xmin),
          (a[1] = t.ymax),
          (l[0] = t.xmax),
          (l[1] = t.ymax),
          (h[0] = t.xmin),
          (h[1] = t.ymin),
          (f[0] = t.xmax),
          (f[1] = t.ymin);
        const r = e.paths;
        for (const e of r) {
          if (!r.length) continue;
          let i = e[0];
          if ((0, n.OQ)(t, i)) return !0;
          for (let r = 1; r < e.length; r++) {
            const o = e[r];
            if ((0, n.OQ)(t, o) || x(i, o, c)) return !0;
            i = o;
          }
        }
        return !1;
      }
      const d = [0, 0];
      function y(t) {
        for (let e = 0; e < t.length; e++) {
          const r = t[e];
          for (let n = 0; n < r.length - 1; n++) {
            const i = r[n],
              o = r[n + 1];
            for (let r = e + 1; r < t.length; r++)
              for (let e = 0; e < t[r].length - 1; e++) {
                const n = t[r][e],
                  s = t[r][e + 1];
                if (
                  M(i, o, n, s, d) &&
                  !(
                    (d[0] === i[0] && d[1] === i[1]) ||
                    (d[0] === n[0] && d[1] === n[1]) ||
                    (d[0] === o[0] && d[1] === o[1]) ||
                    (d[0] === s[0] && d[1] === s[1])
                  )
                )
                  return !0;
              }
          }
          const n = r.length;
          if (!(n <= 4))
            for (let t = 0; t < n - 3; t++) {
              let e = n - 1;
              0 === t && (e = n - 2);
              const i = r[t],
                o = r[t + 1];
              for (let n = t + 2; n < e; n++) {
                const t = r[n],
                  e = r[n + 1];
                if (
                  M(i, o, t, e, d) &&
                  !(
                    (d[0] === i[0] && d[1] === i[1]) ||
                    (d[0] === t[0] && d[1] === t[1]) ||
                    (d[0] === o[0] && d[1] === o[1]) ||
                    (d[0] === e[0] && d[1] === e[1])
                  )
                )
                  return !0;
              }
            }
        }
        return !1;
      }
      function x(t, e, r) {
        for (let n = 0; n < r.length; n++)
          if (M(t, e, r[n][0], r[n][1])) return !0;
        return !1;
      }
      function M(t, e, r, n, i) {
        const [o, s] = t,
          [a, l] = e,
          [h, f] = r,
          [u, c] = n,
          m = u - h,
          p = o - h,
          d = a - o,
          y = c - f,
          x = s - f,
          M = l - s,
          g = y * d - m * M;
        if (0 === g) return !1;
        const _ = (m * x - y * p) / g,
          w = (d * x - M * p) / g;
        return (
          _ >= 0 &&
          _ <= 1 &&
          w >= 0 &&
          w <= 1 &&
          (i && ((i[0] = o + _ * (a - o)), (i[1] = s + _ * (l - s))), !0)
        );
      }
      function g(t) {
        switch (t) {
          case 'esriGeometryEnvelope':
          case 'extent':
            return o;
          case 'esriGeometryMultipoint':
          case 'multipoint':
            return s;
          case 'esriGeometryPoint':
          case 'point':
            return i;
          case 'esriGeometryPolygon':
          case 'polygon':
            return m;
          case 'esriGeometryPolyline':
          case 'polyline':
            return p;
        }
      }
    },
    8744: (t, e, r) => {
      r.d(e, {
        WR: () => P,
        Zn: () => z,
        R_: () => A,
        fS: () => m,
        C5: () => p,
        yW: () => M,
        N$: () => y,
        sT: () => d,
        BZ: () => R,
        V2: () => S,
        QM: () => _,
        JY: () => v,
        oR: () => x,
        o$: () => w,
        ME: () => C,
        sS: () => g,
        MP: () => b,
      });
      var n = r(70586),
        i = r(19153),
        o = r(56726),
        s = r(58116);
      const a = { 102113: !0, 102100: !0, 3857: !0, 3785: !0 },
        l = { 102113: !0, 102100: !0, 3857: !0, 3785: !0, 4326: !0 },
        h =
          'PROJCS["WGS_1984_Web_Mercator_Auxiliary_Sphere",GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Mercator_Auxiliary_Sphere"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],PARAMETER["Standard_Parallel_1",0.0],PARAMETER["Auxiliary_Sphere_Type",0.0],UNIT["Meter",1.0]]',
        f = [-20037508.342788905, 20037508.342788905],
        u = [-20037508.342787, 20037508.342787],
        c = {
          102113: {
            wkTemplate:
              'PROJCS["WGS_1984_Web_Mercator",GEOGCS["GCS_WGS_1984_Major_Auxiliary_Sphere",DATUM["D_WGS_1984_Major_Auxiliary_Sphere",SPHEROID["WGS_1984_Major_Auxiliary_Sphere",6378137.0,0.0]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Mercator"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],PARAMETER["Standard_Parallel_1",0.0],UNIT["Meter",1.0]]',
            valid: f,
            origin: u,
            dx: 1e-5,
          },
          102100: { wkTemplate: h, valid: f, origin: u, dx: 1e-5 },
          3785: {
            wkTemplate:
              'PROJCS["WGS_1984_Web_Mercator",GEOGCS["GCS_WGS_1984_Major_Auxiliary_Sphere",DATUM["D_WGS_1984_Major_Auxiliary_Sphere",SPHEROID["WGS_1984_Major_Auxiliary_Sphere",6378137.0,0.0]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Mercator"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],PARAMETER["Standard_Parallel_1",0.0],UNIT["Meter",1.0]]',
            valid: f,
            origin: u,
            dx: 1e-5,
          },
          3857: { wkTemplate: h, valid: f, origin: u, dx: 1e-5 },
          4326: {
            wkTemplate:
              'GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",{Central_Meridian}],UNIT["Degree",0.0174532925199433]]',
            altTemplate:
              'PROJCS["WGS_1984_Plate_Carree",GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Plate_Carree"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],UNIT["Degrees",111319.491]]',
            valid: [-180, 180],
            origin: [-180, 90],
            dx: 1e-5,
          },
          104971: {
            wkTemplate:
              'GEOGCS["Mars_2000_(Sphere)",DATUM["Mars_2000_(Sphere)",SPHEROID["Mars_2000_(Sphere)",3396190.0,0.0]],PRIMEM["Reference_Meridian",0.0],UNIT["Degree",0.0174532925199433]]',
            valid: [-180, 180],
            origin: [-180, 90],
            dx: 1e-5,
          },
          104905: {
            wkTemplate:
              'GEOGCS["GCS_Mars_2000",DATUM["D_Mars_2000",SPHEROID["Mars_2000_IAU_IAG",3396190.0,169.8944472236118]],PRIMEM["Reference_Meridian",0.0],UNIT["Degree",0.0174532925199433]]',
            valid: [-180, 180],
            origin: [-180, 90],
            dx: 1e-5,
          },
        };
      function m(t, e) {
        return (
          !(0, n.Wi)(t) &&
          !(0, n.Wi)(e) &&
          (t === e ||
            (null != t.wkid || null != e.wkid
              ? t.wkid === e.wkid ||
                (g(t) && g(e)) ||
                (null != e.latestWkid && t.wkid === e.latestWkid) ||
                (null != t.latestWkid && e.wkid === t.latestWkid)
              : !(!t.wkt || !e.wkt) &&
                t.wkt.toUpperCase() === e.wkt.toUpperCase()))
        );
      }
      function p(t) {
        return v(t) && t.wkid ? c[t.wkid] : null;
      }
      function d(t) {
        return (
          !!v(t) &&
          (t.wkid
            ? null == s.Z[t.wkid]
            : !!t.wkt && !!/^\s*GEOGCS/i.test(t.wkt))
        );
      }
      function y(t) {
        return !(R(t) || S(t));
      }
      function x(t) {
        return v(t) && 4326 === t.wkid;
      }
      function M(t) {
        return v(t) && t.wkid === o.W.CGCS2000;
      }
      function g(t) {
        return v(t) && null != t.wkid && !0 === a[t.wkid];
      }
      function _(t) {
        return v(t) && 32662 === t.wkid;
      }
      function w(t) {
        return t === o.W.GCSMARS2000 || t === o.W.GCSMARS2000_SPHERE;
      }
      function R(t) {
        return v(t) && null != t.wkid && w(t.wkid);
      }
      function C(t) {
        return t === o.W.GCSMOON2000;
      }
      function S(t) {
        return v(t) && null != t.wkid && C(t.wkid);
      }
      function b(t) {
        return v(t) && null != t.wkid && !0 === l[t.wkid];
      }
      function v(t) {
        return (
          (0, n.pC)(t) && ((null != t.wkid && t.wkid >= 2e3) || null != t.wkt)
        );
      }
      const z = {
          wkid: 4326,
          wkt: (0, i.gx)(c[4326].wkTemplate, { Central_Meridian: '0.0' }),
        },
        A = { wkid: 102100, latestWkid: 3857 },
        P = { wkid: 32662 };
    },
    40488: (t, e, r) => {
      r.d(e, {
        Q8: () => p,
        $: () => M,
        hG: () => y,
        iV: () => d,
        Sx: () => g,
        R6: () => x,
        mZ: () => f,
      });
      var n = r(22974),
        i = r(70586),
        o = r(82971),
        s = r(68441),
        a = r(8744);
      function l(t) {
        return 57.29577951308232 * t;
      }
      function h(t) {
        return 0.017453292519943 * t;
      }
      function f(t) {
        return Math.PI / 2 - 2 * Math.atan(Math.exp(-t / s.sv.radius));
      }
      function u(t) {
        return null != t.wkid || null != t.wkt;
      }
      const c = [0, 0];
      function m(t, e, r, n, i) {
        const o = t,
          s = i;
        if (((s.spatialReference = r), 'x' in o && 'x' in s))
          [s.x, s.y] = e(o.x, o.y, c, n);
        else if ('xmin' in o && 'xmin' in s)
          ([s.xmin, s.ymin] = e(o.xmin, o.ymin, c, n)),
            ([s.xmax, s.ymax] = e(o.xmax, o.ymax, c, n));
        else if (
          ('paths' in o && 'paths' in s) ||
          ('rings' in o && 'rings' in s)
        ) {
          const t = 'paths' in o ? o.paths : o.rings,
            r = [];
          let i;
          for (let o = 0; o < t.length; o++) {
            const s = t[o];
            (i = []), r.push(i);
            for (let t = 0; t < s.length; t++)
              i.push(e(s[t][0], s[t][1], [0, 0], n)),
                s[t].length > 2 && i[t].push(s[t][2]),
                s[t].length > 3 && i[t].push(s[t][3]);
          }
          'paths' in s ? (s.paths = r) : (s.rings = r);
        } else if ('points' in o && 'points' in s) {
          const t = o.points,
            r = [];
          for (let i = 0; i < t.length; i++)
            (r[i] = e(t[i][0], t[i][1], [0, 0], n)),
              t[i].length > 2 && r[i].push(t[i][2]),
              t[i].length > 3 && r[i].push(t[i][3]);
          s.points = r;
        }
        return i;
      }
      function p(t, e) {
        const r = t && (u(t) ? t : t.spatialReference),
          n = e && (u(e) ? e : e.spatialReference);
        return (
          !(
            (t && 'type' in t && 'mesh' === t.type) ||
            (e && 'type' in e && 'mesh' === e.type) ||
            !r ||
            !n
          ) &&
          (!!(0, a.fS)(n, r) ||
            ((0, a.sS)(n) && (0, a.oR)(r)) ||
            ((0, a.sS)(r) && (0, a.oR)(n)))
        );
      }
      function d(t, e) {
        if ((0, i.Wi)(t)) return null;
        const r = t.spatialReference,
          s = e && (u(e) ? e : e.spatialReference);
        return p(r, s)
          ? (0, a.fS)(r, s)
            ? (0, n.d9)(t)
            : (0, a.sS)(s)
            ? m(t, y, o.Z.WebMercator, !1, (0, n.d9)(t))
            : (0, a.oR)(s)
            ? m(t, x, o.Z.WGS84, !1, (0, n.d9)(t))
            : null
          : null;
      }
      function y(t, e, r = [0, 0]) {
        e > 89.99999 ? (e = 89.99999) : e < -89.99999 && (e = -89.99999);
        const n = h(e);
        return (
          (r[0] = h(t) * s.sv.radius),
          (r[1] =
            s.sv.halfSemiMajorAxis *
            Math.log((1 + Math.sin(n)) / (1 - Math.sin(n)))),
          r
        );
      }
      function x(t, e, r = [0, 0], n = !1) {
        const i = l(t / s.sv.radius);
        return (
          (r[0] = n ? i : i - 360 * Math.floor((i + 180) / 360)),
          (r[1] = l(Math.PI / 2 - 2 * Math.atan(Math.exp(-e / s.sv.radius)))),
          r
        );
      }
      function M(t, e = !1, r = (0, n.d9)(t)) {
        return m(t, y, o.Z.WebMercator, e, r);
      }
      function g(t, e = !1, r = (0, n.d9)(t)) {
        return m(t, x, o.Z.WGS84, e, r);
      }
    },
    16238: (t, e, r) => {
      function n(t, e, r = !1) {
        let { hasM: n, hasZ: i } = t;
        Array.isArray(e)
          ? 4 !== e.length || n || i
            ? 3 === e.length && r && !n
              ? ((i = !0), (n = !1))
              : 3 === e.length && n && i && ((n = !1), (i = !1))
            : ((n = !0), (i = !0))
          : ((i = !i && e.hasZ && (!n || e.hasM)),
            (n = !n && e.hasM && (!i || e.hasZ))),
          (t.hasZ = i),
          (t.hasM = n);
      }
      r.d(e, { l: () => n });
    },
  },
]);
