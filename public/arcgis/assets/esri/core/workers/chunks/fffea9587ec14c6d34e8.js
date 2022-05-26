'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [8936],
  {
    46851: (t, n, e) => {
      e.d(n, { E: () => r, R: () => E });
      const r = 1e-6,
        E = Math.random,
        _ = Math.PI / 180,
        i = 180 / Math.PI;
      Object.freeze({
        __proto__: null,
        EPSILON: r,
        RANDOM: E,
        toRadian: function (t) {
          return t * _;
        },
        toDegree: function (t) {
          return t * i;
        },
        equals: function (t, n) {
          return Math.abs(t - n) <= r * Math.max(1, Math.abs(t), Math.abs(n));
        },
      });
    },
    17896: (t, n, e) => {
      e.d(n, {
        E: () => s,
        a: () => u,
        b: () => T,
        c: () => S,
        d: () => I,
        e: () => O,
        f: () => R,
        g: () => i,
        h: () => c,
        i: () => a,
        k: () => D,
        l: () => _,
        m: () => M,
        n: () => f,
        p: () => N,
        q: () => C,
        r: () => U,
        s: () => o,
        t: () => l,
        u: () => p,
      });
      var r = e(65617),
        E = e(46851);
      function _(t) {
        const n = t[0],
          e = t[1],
          r = t[2];
        return Math.sqrt(n * n + e * e + r * r);
      }
      function i(t, n) {
        return (t[0] = n[0]), (t[1] = n[1]), (t[2] = n[2]), t;
      }
      function o(t, n, e, r) {
        return (t[0] = n), (t[1] = e), (t[2] = r), t;
      }
      function T(t, n, e) {
        return (
          (t[0] = n[0] + e[0]), (t[1] = n[1] + e[1]), (t[2] = n[2] + e[2]), t
        );
      }
      function R(t, n, e) {
        return (
          (t[0] = n[0] - e[0]), (t[1] = n[1] - e[1]), (t[2] = n[2] - e[2]), t
        );
      }
      function A(t, n, e) {
        return (
          (t[0] = n[0] * e[0]), (t[1] = n[1] * e[1]), (t[2] = n[2] * e[2]), t
        );
      }
      function s(t, n, e) {
        return (
          (t[0] = n[0] / e[0]), (t[1] = n[1] / e[1]), (t[2] = n[2] / e[2]), t
        );
      }
      function u(t, n, e) {
        return (t[0] = n[0] * e), (t[1] = n[1] * e), (t[2] = n[2] * e), t;
      }
      function a(t, n) {
        const e = n[0] - t[0],
          r = n[1] - t[1],
          E = n[2] - t[2];
        return Math.sqrt(e * e + r * r + E * E);
      }
      function c(t, n) {
        const e = n[0] - t[0],
          r = n[1] - t[1],
          E = n[2] - t[2];
        return e * e + r * r + E * E;
      }
      function N(t) {
        const n = t[0],
          e = t[1],
          r = t[2];
        return n * n + e * e + r * r;
      }
      function f(t, n) {
        const e = n[0],
          r = n[1],
          E = n[2];
        let _ = e * e + r * r + E * E;
        return (
          _ > 0 &&
            ((_ = 1 / Math.sqrt(_)),
            (t[0] = n[0] * _),
            (t[1] = n[1] * _),
            (t[2] = n[2] * _)),
          t
        );
      }
      function I(t, n) {
        return t[0] * n[0] + t[1] * n[1] + t[2] * n[2];
      }
      function S(t, n, e) {
        const r = n[0],
          E = n[1],
          _ = n[2],
          i = e[0],
          o = e[1],
          T = e[2];
        return (
          (t[0] = E * T - _ * o),
          (t[1] = _ * i - r * T),
          (t[2] = r * o - E * i),
          t
        );
      }
      function O(t, n, e, r) {
        const E = n[0],
          _ = n[1],
          i = n[2];
        return (
          (t[0] = E + r * (e[0] - E)),
          (t[1] = _ + r * (e[1] - _)),
          (t[2] = i + r * (e[2] - i)),
          t
        );
      }
      function M(t, n, e) {
        const r = n[0],
          E = n[1],
          _ = n[2];
        return (
          (t[0] = e[0] * r + e[4] * E + e[8] * _ + e[12]),
          (t[1] = e[1] * r + e[5] * E + e[9] * _ + e[13]),
          (t[2] = e[2] * r + e[6] * E + e[10] * _ + e[14]),
          t
        );
      }
      function l(t, n, e) {
        const r = n[0],
          E = n[1],
          _ = n[2];
        return (
          (t[0] = r * e[0] + E * e[3] + _ * e[6]),
          (t[1] = r * e[1] + E * e[4] + _ * e[7]),
          (t[2] = r * e[2] + E * e[5] + _ * e[8]),
          t
        );
      }
      function C(t, n, e) {
        const r = e[0],
          E = e[1],
          _ = e[2],
          i = e[3],
          o = n[0],
          T = n[1],
          R = n[2];
        let A = E * R - _ * T,
          s = _ * o - r * R,
          u = r * T - E * o,
          a = E * u - _ * s,
          c = _ * A - r * u,
          N = r * s - E * A;
        const f = 2 * i;
        return (
          (A *= f),
          (s *= f),
          (u *= f),
          (a *= 2),
          (c *= 2),
          (N *= 2),
          (t[0] = o + A + a),
          (t[1] = T + s + c),
          (t[2] = R + u + N),
          t
        );
      }
      const L = (0, r.c)(),
        h = (0, r.c)();
      function D(t, n) {
        return t[0] === n[0] && t[1] === n[1] && t[2] === n[2];
      }
      function U(t, n, e) {
        const r = e[0] - n[0],
          E = e[1] - n[1],
          _ = e[2] - n[2];
        let i = r * r + E * E + _ * _;
        return i > 0
          ? ((i = 1 / Math.sqrt(i)),
            (t[0] = r * i),
            (t[1] = E * i),
            (t[2] = _ * i),
            t)
          : ((t[0] = 0), (t[1] = 0), (t[2] = 0), t);
      }
      const P = R,
        d = A,
        F = s,
        G = a,
        B = c,
        p = _,
        m = N;
      Object.freeze({
        __proto__: null,
        length: _,
        copy: i,
        set: o,
        add: T,
        subtract: R,
        multiply: A,
        divide: s,
        ceil: function (t, n) {
          return (
            (t[0] = Math.ceil(n[0])),
            (t[1] = Math.ceil(n[1])),
            (t[2] = Math.ceil(n[2])),
            t
          );
        },
        floor: function (t, n) {
          return (
            (t[0] = Math.floor(n[0])),
            (t[1] = Math.floor(n[1])),
            (t[2] = Math.floor(n[2])),
            t
          );
        },
        min: function (t, n, e) {
          return (
            (t[0] = Math.min(n[0], e[0])),
            (t[1] = Math.min(n[1], e[1])),
            (t[2] = Math.min(n[2], e[2])),
            t
          );
        },
        max: function (t, n, e) {
          return (
            (t[0] = Math.max(n[0], e[0])),
            (t[1] = Math.max(n[1], e[1])),
            (t[2] = Math.max(n[2], e[2])),
            t
          );
        },
        round: function (t, n) {
          return (
            (t[0] = Math.round(n[0])),
            (t[1] = Math.round(n[1])),
            (t[2] = Math.round(n[2])),
            t
          );
        },
        scale: u,
        scaleAndAdd: function (t, n, e, r) {
          return (
            (t[0] = n[0] + e[0] * r),
            (t[1] = n[1] + e[1] * r),
            (t[2] = n[2] + e[2] * r),
            t
          );
        },
        distance: a,
        squaredDistance: c,
        squaredLength: N,
        negate: function (t, n) {
          return (t[0] = -n[0]), (t[1] = -n[1]), (t[2] = -n[2]), t;
        },
        inverse: function (t, n) {
          return (t[0] = 1 / n[0]), (t[1] = 1 / n[1]), (t[2] = 1 / n[2]), t;
        },
        normalize: f,
        dot: I,
        cross: S,
        lerp: O,
        hermite: function (t, n, e, r, E, _) {
          const i = _ * _,
            o = i * (2 * _ - 3) + 1,
            T = i * (_ - 2) + _,
            R = i * (_ - 1),
            A = i * (3 - 2 * _);
          return (
            (t[0] = n[0] * o + e[0] * T + r[0] * R + E[0] * A),
            (t[1] = n[1] * o + e[1] * T + r[1] * R + E[1] * A),
            (t[2] = n[2] * o + e[2] * T + r[2] * R + E[2] * A),
            t
          );
        },
        bezier: function (t, n, e, r, E, _) {
          const i = 1 - _,
            o = i * i,
            T = _ * _,
            R = o * i,
            A = 3 * _ * o,
            s = 3 * T * i,
            u = T * _;
          return (
            (t[0] = n[0] * R + e[0] * A + r[0] * s + E[0] * u),
            (t[1] = n[1] * R + e[1] * A + r[1] * s + E[1] * u),
            (t[2] = n[2] * R + e[2] * A + r[2] * s + E[2] * u),
            t
          );
        },
        random: function (t, n) {
          n = n || 1;
          const e = 2 * (0, E.R)() * Math.PI,
            r = 2 * (0, E.R)() - 1,
            _ = Math.sqrt(1 - r * r) * n;
          return (
            (t[0] = Math.cos(e) * _),
            (t[1] = Math.sin(e) * _),
            (t[2] = r * n),
            t
          );
        },
        transformMat4: M,
        transformMat3: l,
        transformQuat: C,
        rotateX: function (t, n, e, r) {
          const E = [],
            _ = [];
          return (
            (E[0] = n[0] - e[0]),
            (E[1] = n[1] - e[1]),
            (E[2] = n[2] - e[2]),
            (_[0] = E[0]),
            (_[1] = E[1] * Math.cos(r) - E[2] * Math.sin(r)),
            (_[2] = E[1] * Math.sin(r) + E[2] * Math.cos(r)),
            (t[0] = _[0] + e[0]),
            (t[1] = _[1] + e[1]),
            (t[2] = _[2] + e[2]),
            t
          );
        },
        rotateY: function (t, n, e, r) {
          const E = [],
            _ = [];
          return (
            (E[0] = n[0] - e[0]),
            (E[1] = n[1] - e[1]),
            (E[2] = n[2] - e[2]),
            (_[0] = E[2] * Math.sin(r) + E[0] * Math.cos(r)),
            (_[1] = E[1]),
            (_[2] = E[2] * Math.cos(r) - E[0] * Math.sin(r)),
            (t[0] = _[0] + e[0]),
            (t[1] = _[1] + e[1]),
            (t[2] = _[2] + e[2]),
            t
          );
        },
        rotateZ: function (t, n, e, r) {
          const E = [],
            _ = [];
          return (
            (E[0] = n[0] - e[0]),
            (E[1] = n[1] - e[1]),
            (E[2] = n[2] - e[2]),
            (_[0] = E[0] * Math.cos(r) - E[1] * Math.sin(r)),
            (_[1] = E[0] * Math.sin(r) + E[1] * Math.cos(r)),
            (_[2] = E[2]),
            (t[0] = _[0] + e[0]),
            (t[1] = _[1] + e[1]),
            (t[2] = _[2] + e[2]),
            t
          );
        },
        angle: function (t, n) {
          i(L, t), i(h, n), f(L, L), f(h, h);
          const e = I(L, h);
          return e > 1 ? 0 : e < -1 ? Math.PI : Math.acos(e);
        },
        str: function (t) {
          return 'vec3(' + t[0] + ', ' + t[1] + ', ' + t[2] + ')';
        },
        exactEquals: D,
        equals: function (t, n) {
          if (t === n) return !0;
          const e = t[0],
            r = t[1],
            _ = t[2],
            i = n[0],
            o = n[1],
            T = n[2];
          return (
            Math.abs(e - i) <= E.E * Math.max(1, Math.abs(e), Math.abs(i)) &&
            Math.abs(r - o) <= E.E * Math.max(1, Math.abs(r), Math.abs(o)) &&
            Math.abs(_ - T) <= E.E * Math.max(1, Math.abs(_), Math.abs(T))
          );
        },
        direction: U,
        sub: P,
        mul: d,
        div: F,
        dist: G,
        sqrDist: B,
        len: p,
        sqrLen: m,
      });
    },
    65617: (t, n, e) => {
      function r() {
        return [0, 0, 0];
      }
      function E(t) {
        return [t[0], t[1], t[2]];
      }
      function _(t, n, e) {
        return [t, n, e];
      }
      function i(t) {
        const n = [0, 0, 0],
          e = Math.min(3, t.length);
        for (let r = 0; r < e; ++r) n[r] = t[r];
        return n;
      }
      function o(t, n) {
        return new Float64Array(t, n, 3);
      }
      function T() {
        return _(1, 1, 1);
      }
      function R() {
        return _(1, 0, 0);
      }
      function A() {
        return _(0, 1, 0);
      }
      function s() {
        return _(0, 0, 1);
      }
      e.d(n, {
        O: () => a,
        Z: () => u,
        a: () => E,
        b: () => o,
        c: () => r,
        d: () => i,
        f: () => _,
      });
      const u = [0, 0, 0],
        a = T(),
        c = R(),
        N = A(),
        f = s();
      Object.freeze({
        __proto__: null,
        create: r,
        clone: E,
        fromValues: _,
        fromArray: i,
        createView: o,
        zeros: function () {
          return [0, 0, 0];
        },
        ones: T,
        unitX: R,
        unitY: A,
        unitZ: s,
        ZEROS: u,
        ONES: a,
        UNIT_X: c,
        UNIT_Y: N,
        UNIT_Z: f,
      });
    },
    98766: (t, n, e) => {
      e.d(n, {
        a: () => i,
        b: () => A,
        c: () => E,
        d: () => f,
        e: () => a,
        f: () => c,
        g: () => S,
        h: () => O,
        l: () => I,
        n: () => N,
        s: () => _,
      });
      var r = e(46851);
      function E(t, n) {
        return (t[0] = n[0]), (t[1] = n[1]), (t[2] = n[2]), (t[3] = n[3]), t;
      }
      function _(t, n, e, r, E) {
        return (t[0] = n), (t[1] = e), (t[2] = r), (t[3] = E), t;
      }
      function i(t, n, e) {
        return (
          (t[0] = n[0] + e[0]),
          (t[1] = n[1] + e[1]),
          (t[2] = n[2] + e[2]),
          (t[3] = n[3] + e[3]),
          t
        );
      }
      function o(t, n, e) {
        return (
          (t[0] = n[0] - e[0]),
          (t[1] = n[1] - e[1]),
          (t[2] = n[2] - e[2]),
          (t[3] = n[3] - e[3]),
          t
        );
      }
      function T(t, n, e) {
        return (
          (t[0] = n[0] * e[0]),
          (t[1] = n[1] * e[1]),
          (t[2] = n[2] * e[2]),
          (t[3] = n[3] * e[3]),
          t
        );
      }
      function R(t, n, e) {
        return (
          (t[0] = n[0] / e[0]),
          (t[1] = n[1] / e[1]),
          (t[2] = n[2] / e[2]),
          (t[3] = n[3] / e[3]),
          t
        );
      }
      function A(t, n, e) {
        return (
          (t[0] = n[0] * e),
          (t[1] = n[1] * e),
          (t[2] = n[2] * e),
          (t[3] = n[3] * e),
          t
        );
      }
      function s(t, n) {
        const e = n[0] - t[0],
          r = n[1] - t[1],
          E = n[2] - t[2],
          _ = n[3] - t[3];
        return Math.sqrt(e * e + r * r + E * E + _ * _);
      }
      function u(t, n) {
        const e = n[0] - t[0],
          r = n[1] - t[1],
          E = n[2] - t[2],
          _ = n[3] - t[3];
        return e * e + r * r + E * E + _ * _;
      }
      function a(t) {
        const n = t[0],
          e = t[1],
          r = t[2],
          E = t[3];
        return Math.sqrt(n * n + e * e + r * r + E * E);
      }
      function c(t) {
        const n = t[0],
          e = t[1],
          r = t[2],
          E = t[3];
        return n * n + e * e + r * r + E * E;
      }
      function N(t, n) {
        const e = n[0],
          r = n[1],
          E = n[2],
          _ = n[3];
        let i = e * e + r * r + E * E + _ * _;
        return (
          i > 0 &&
            ((i = 1 / Math.sqrt(i)),
            (t[0] = e * i),
            (t[1] = r * i),
            (t[2] = E * i),
            (t[3] = _ * i)),
          t
        );
      }
      function f(t, n) {
        return t[0] * n[0] + t[1] * n[1] + t[2] * n[2] + t[3] * n[3];
      }
      function I(t, n, e, r) {
        const E = n[0],
          _ = n[1],
          i = n[2],
          o = n[3];
        return (
          (t[0] = E + r * (e[0] - E)),
          (t[1] = _ + r * (e[1] - _)),
          (t[2] = i + r * (e[2] - i)),
          (t[3] = o + r * (e[3] - o)),
          t
        );
      }
      function S(t, n) {
        return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3];
      }
      function O(t, n) {
        const e = t[0],
          E = t[1],
          _ = t[2],
          i = t[3],
          o = n[0],
          T = n[1],
          R = n[2],
          A = n[3];
        return (
          Math.abs(e - o) <= r.E * Math.max(1, Math.abs(e), Math.abs(o)) &&
          Math.abs(E - T) <= r.E * Math.max(1, Math.abs(E), Math.abs(T)) &&
          Math.abs(_ - R) <= r.E * Math.max(1, Math.abs(_), Math.abs(R)) &&
          Math.abs(i - A) <= r.E * Math.max(1, Math.abs(i), Math.abs(A))
        );
      }
      const M = o,
        l = T,
        C = R,
        L = s,
        h = u,
        D = a,
        U = c;
      Object.freeze({
        __proto__: null,
        copy: E,
        set: _,
        add: i,
        subtract: o,
        multiply: T,
        divide: R,
        ceil: function (t, n) {
          return (
            (t[0] = Math.ceil(n[0])),
            (t[1] = Math.ceil(n[1])),
            (t[2] = Math.ceil(n[2])),
            (t[3] = Math.ceil(n[3])),
            t
          );
        },
        floor: function (t, n) {
          return (
            (t[0] = Math.floor(n[0])),
            (t[1] = Math.floor(n[1])),
            (t[2] = Math.floor(n[2])),
            (t[3] = Math.floor(n[3])),
            t
          );
        },
        min: function (t, n, e) {
          return (
            (t[0] = Math.min(n[0], e[0])),
            (t[1] = Math.min(n[1], e[1])),
            (t[2] = Math.min(n[2], e[2])),
            (t[3] = Math.min(n[3], e[3])),
            t
          );
        },
        max: function (t, n, e) {
          return (
            (t[0] = Math.max(n[0], e[0])),
            (t[1] = Math.max(n[1], e[1])),
            (t[2] = Math.max(n[2], e[2])),
            (t[3] = Math.max(n[3], e[3])),
            t
          );
        },
        round: function (t, n) {
          return (
            (t[0] = Math.round(n[0])),
            (t[1] = Math.round(n[1])),
            (t[2] = Math.round(n[2])),
            (t[3] = Math.round(n[3])),
            t
          );
        },
        scale: A,
        scaleAndAdd: function (t, n, e, r) {
          return (
            (t[0] = n[0] + e[0] * r),
            (t[1] = n[1] + e[1] * r),
            (t[2] = n[2] + e[2] * r),
            (t[3] = n[3] + e[3] * r),
            t
          );
        },
        distance: s,
        squaredDistance: u,
        length: a,
        squaredLength: c,
        negate: function (t, n) {
          return (
            (t[0] = -n[0]), (t[1] = -n[1]), (t[2] = -n[2]), (t[3] = -n[3]), t
          );
        },
        inverse: function (t, n) {
          return (
            (t[0] = 1 / n[0]),
            (t[1] = 1 / n[1]),
            (t[2] = 1 / n[2]),
            (t[3] = 1 / n[3]),
            t
          );
        },
        normalize: N,
        dot: f,
        lerp: I,
        random: function (t, n) {
          let e, E, _, i, o, T;
          n = n || 1;
          do {
            (e = 2 * (0, r.R)() - 1),
              (E = 2 * (0, r.R)() - 1),
              (o = e * e + E * E);
          } while (o >= 1);
          do {
            (_ = 2 * (0, r.R)() - 1),
              (i = 2 * (0, r.R)() - 1),
              (T = _ * _ + i * i);
          } while (T >= 1);
          const R = Math.sqrt((1 - o) / T);
          return (
            (t[0] = n * e),
            (t[1] = n * E),
            (t[2] = n * _ * R),
            (t[3] = n * i * R),
            t
          );
        },
        transformMat4: function (t, n, e) {
          const r = n[0],
            E = n[1],
            _ = n[2],
            i = n[3];
          return (
            (t[0] = e[0] * r + e[4] * E + e[8] * _ + e[12] * i),
            (t[1] = e[1] * r + e[5] * E + e[9] * _ + e[13] * i),
            (t[2] = e[2] * r + e[6] * E + e[10] * _ + e[14] * i),
            (t[3] = e[3] * r + e[7] * E + e[11] * _ + e[15] * i),
            t
          );
        },
        transformQuat: function (t, n, e) {
          const r = n[0],
            E = n[1],
            _ = n[2],
            i = e[0],
            o = e[1],
            T = e[2],
            R = e[3],
            A = R * r + o * _ - T * E,
            s = R * E + T * r - i * _,
            u = R * _ + i * E - o * r,
            a = -i * r - o * E - T * _;
          return (
            (t[0] = A * R + a * -i + s * -T - u * -o),
            (t[1] = s * R + a * -o + u * -i - A * -T),
            (t[2] = u * R + a * -T + A * -o - s * -i),
            (t[3] = n[3]),
            t
          );
        },
        str: function (t) {
          return 'vec4(' + t[0] + ', ' + t[1] + ', ' + t[2] + ', ' + t[3] + ')';
        },
        exactEquals: S,
        equals: O,
        sub: M,
        mul: l,
        div: C,
        dist: L,
        sqrDist: h,
        len: D,
        sqrLen: U,
      });
    },
    22021: (t, n, e) => {
      e.d(n, {
        ZF: () => u,
        Kt: () => a,
        jE: () => f,
        uZ: () => i,
        oK: () => c,
        Vl: () => A,
        wt: () => o,
        t7: () => R,
        Sf: () => _,
        fp: () => T,
        BV: () => s,
      });
      var r = e(17896);
      e(98766);
      const E = new Float32Array(1);
      function _(t) {
        --t;
        for (let n = 1; n < 32; n <<= 1) t |= t >> n;
        return t + 1;
      }
      function i(t, n, e) {
        return Math.min(Math.max(t, n), e);
      }
      function o(t) {
        return 0 == (t & (t - 1));
      }
      function T(t) {
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
      function R(t, n, e) {
        return t + (n - t) * e;
      }
      function A(t) {
        return (t * Math.PI) / 180;
      }
      function s(t) {
        return (180 * t) / Math.PI;
      }
      function u(t) {
        return Math.acos(i(t, -1, 1));
      }
      function a(t) {
        return Math.asin(i(t, -1, 1));
      }
      function c(t) {
        return N(Math.max(-I, Math.min(t, I)));
      }
      function N(t) {
        return (E[0] = t), E[0];
      }
      function f(t, n) {
        const e = (0, r.l)(t),
          E = a(t[2] / e),
          _ = Math.atan2(t[1] / e, t[0] / e);
        return (0, r.s)(n, e, E, _), n;
      }
      const I = N(34028234663852886e22);
    },
    79583: (t, n, e) => {
      function r(t) {
        switch (t) {
          case 'u8':
          case 'i8':
            return 1;
          case 'u16':
          case 'i16':
            return 2;
          case 'u32':
          case 'i32':
          case 'f32':
            return 4;
          case 'f64':
            return 8;
          default:
            return;
        }
      }
      function E(t) {
        switch (t) {
          case 'u8':
          case 'u16':
          case 'u32':
            return !1;
          case 'i8':
          case 'i16':
          case 'i32':
          case 'f32':
          case 'f64':
            return !0;
          default:
            return;
        }
      }
      function _(t) {
        switch (t) {
          case 'u8':
          case 'u16':
          case 'u32':
          case 'i8':
          case 'i16':
          case 'i32':
            return !0;
          case 'f32':
          case 'f64':
            return !1;
          default:
            return;
        }
      }
      function i(t) {
        switch (t) {
          case 'u8':
            return 255;
          case 'u16':
            return 65535;
          case 'u32':
            return 4294967295;
          case 'i8':
            return 127;
          case 'i16':
            return 32767;
          case 'i32':
            return 2147483647;
          case 'f32':
            return 3402823e32;
          case 'f64':
            return 179769e303;
          default:
            return;
        }
      }
      e.d(n, { n1: () => r, U: () => _, B3: () => E, Op: () => i }), e(80442);
    },
    47545: (t, n, e) => {
      e.d(n, { d: () => E });
      var r = e(22021);
      function E(t, n, e) {
        var E;
        const R = t.byteLength / (4 * n),
          A = new Uint32Array(t, 0, R * n);
        let s = new Uint32Array(R);
        const u = null != (E = null == e ? void 0 : e.minReduction) ? E : 0,
          a = (null == e ? void 0 : e.originalIndices) || null,
          c = a ? a.length : 0,
          N = (null == e ? void 0 : e.componentOffsets) || null;
        let f = 0;
        if (N)
          for (let t = 0; t < N.length - 1; t++) {
            const n = N[t + 1] - N[t];
            n > f && (f = n);
          }
        else f = R;
        const I = Math.floor(1.1 * f) + 1;
        (null == T || T.length < 2 * I) &&
          (T = new Uint32Array((0, r.Sf)(2 * I)));
        for (let t = 0; t < 2 * I; t++) T[t] = 0;
        let S = 0;
        const O = !!N && !!a,
          M = O ? c : R,
          l = O ? new Uint32Array(c) : null,
          C = 1.96;
        let L = 0 !== u ? Math.ceil(((4 * C * C) / (u * u)) * u * (1 - u)) : M,
          h = 1,
          D = N ? N[1] : M;
        for (let t = 0; t < M; t++) {
          if (t === L) {
            const n = 1 - S / t;
            if (n + C * Math.sqrt((n * (1 - n)) / t) < u) return null;
            L *= 2;
          }
          if (t === D) {
            for (let t = 0; t < 2 * I; t++) T[t] = 0;
            if (a) for (let t = N[h - 1]; t < N[h]; t++) l[t] = s[a[t]];
            D = N[++h];
          }
          const e = O ? a[t] : t,
            r = e * n,
            E = o(A, r, n);
          let i = E % I,
            R = S;
          for (; 0 !== T[2 * i + 1]; ) {
            if (T[2 * i] === E) {
              const t = T[2 * i + 1] - 1;
              if (_(A, r, t * n, n)) {
                R = s[t];
                break;
              }
            }
            i++, i >= I && (i -= I);
          }
          R === S && ((T[2 * i] = E), (T[2 * i + 1] = e + 1), S++), (s[e] = R);
        }
        if (0 !== u && 1 - S / R < u) return null;
        if (O) {
          for (let t = N[h - 1]; t < l.length; t++) l[t] = s[a[t]];
          s = l;
        }
        const U = new Uint32Array(n * S);
        S = 0;
        for (let t = 0; t < M; t++)
          s[t] === S && (i(A, (O ? a[t] : t) * n, U, S * n, n), S++);
        if (a && !O) {
          const t = new Uint32Array(c);
          for (let n = 0; n < t.length; n++) t[n] = s[a[n]];
          s = t;
        }
        return { buffer: U.buffer, indices: s, uniqueCount: S };
      }
      function _(t, n, e, r) {
        for (let E = 0; E < r; E++) if (t[n + E] !== t[e + E]) return !1;
        return !0;
      }
      function i(t, n, e, r, E) {
        for (let _ = 0; _ < E; _++) e[r + _] = t[n + _];
      }
      function o(t, n, e) {
        let r = 0;
        for (let E = 0; E < e; E++)
          (r = (t[n + E] + r) | 0), (r = (r + (r << 11) + (r >>> 2)) | 0);
        return r >>> 0;
      }
      let T = null;
    },
    65576: (t, n, e) => {
      e.d(n, { U$: () => o });
      var r = e(56481),
        E = e(79583);
      class _ {
        constructor(t, n) {
          (this.layout = t),
            (this.buffer =
              'number' == typeof n ? new ArrayBuffer(n * t.stride) : n);
          for (const n of t.fieldNames) {
            const e = t.fields.get(n);
            this[n] = new e.constructor(this.buffer, e.offset, this.stride);
          }
        }
        get stride() {
          return this.layout.stride;
        }
        get count() {
          return this.buffer.byteLength / this.stride;
        }
        get byteLength() {
          return this.buffer.byteLength;
        }
        getField(t, n) {
          const e = this[t];
          return e &&
            e.elementCount === n.ElementCount &&
            e.elementType === n.ElementType
            ? e
            : null;
        }
        slice(t, n) {
          return new _(
            this.layout,
            this.buffer.slice(t * this.stride, n * this.stride),
          );
        }
        copyFrom(t, n, e, r) {
          const E = this.stride;
          if (E % 4 == 0) {
            const _ = new Uint32Array(t.buffer, n * E, (r * E) / 4);
            new Uint32Array(this.buffer, e * E, (r * E) / 4).set(_);
          } else {
            const _ = new Uint8Array(t.buffer, n * E, r * E);
            new Uint8Array(this.buffer, e * E, r * E).set(_);
          }
        }
      }
      class i {
        constructor() {
          (this.stride = 0), (this.fields = new Map()), (this.fieldNames = []);
        }
        vec2f(t, n) {
          return this._appendField(t, r.Eu, n), this;
        }
        vec2f64(t, n) {
          return this._appendField(t, r.q6, n), this;
        }
        vec3f(t, n) {
          return this._appendField(t, r.ct, n), this;
        }
        vec3f64(t, n) {
          return this._appendField(t, r.fP, n), this;
        }
        vec4f(t, n) {
          return this._appendField(t, r.ek, n), this;
        }
        vec4f64(t, n) {
          return this._appendField(t, r.Cd, n), this;
        }
        mat3f(t, n) {
          return this._appendField(t, r.gK, n), this;
        }
        mat3f64(t, n) {
          return this._appendField(t, r.ey, n), this;
        }
        mat4f(t, n) {
          return this._appendField(t, r.bj, n), this;
        }
        mat4f64(t, n) {
          return this._appendField(t, r.O1, n), this;
        }
        vec4u8(t, n) {
          return this._appendField(t, r.mc, n), this;
        }
        f32(t, n) {
          return this._appendField(t, r.ly, n), this;
        }
        f64(t, n) {
          return this._appendField(t, r.oS, n), this;
        }
        u8(t, n) {
          return this._appendField(t, r.D_, n), this;
        }
        u16(t, n) {
          return this._appendField(t, r.av, n), this;
        }
        i8(t, n) {
          return this._appendField(t, r.Hz, n), this;
        }
        vec2i8(t, n) {
          return this._appendField(t, r.Vs, n), this;
        }
        vec2i16(t, n) {
          return this._appendField(t, r.or, n), this;
        }
        vec2u8(t, n) {
          return this._appendField(t, r.xA, n), this;
        }
        vec4u16(t, n) {
          return this._appendField(t, r.v6, n), this;
        }
        u32(t, n) {
          return this._appendField(t, r.Nu, n), this;
        }
        _appendField(t, n, e) {
          const r = n.ElementCount * (0, E.n1)(n.ElementType),
            _ = this.stride;
          this.fields.set(t, {
            size: r,
            constructor: n,
            offset: _,
            optional: e,
          }),
            (this.stride += r),
            this.fieldNames.push(t);
        }
        alignTo(t) {
          return (
            (this.stride = Math.floor((this.stride + t - 1) / t) * t), this
          );
        }
        hasField(t) {
          return this.fieldNames.indexOf(t) >= 0;
        }
        createBuffer(t) {
          return new _(this, t);
        }
        createView(t) {
          return new _(this, t);
        }
        clone() {
          const t = new i();
          return (
            (t.stride = this.stride),
            (t.fields = new Map()),
            this.fields.forEach((n, e) => t.fields.set(e, n)),
            (t.fieldNames = this.fieldNames.slice()),
            (t.BufferType = this.BufferType),
            t
          );
        }
      }
      function o() {
        return new i();
      }
    },
    35065: (t, n, e) => {
      var r;
      e.d(n, { T: () => r }),
        (function (t) {
          (t.POSITION = 'position'),
            (t.NORMAL = 'normal'),
            (t.UV0 = 'uv0'),
            (t.AUXPOS1 = 'auxpos1'),
            (t.AUXPOS2 = 'auxpos2'),
            (t.MAPPOS = 'mapPos'),
            (t.COLOR = 'color'),
            (t.SYMBOLCOLOR = 'symbolColor'),
            (t.SIZE = 'size'),
            (t.TANGENT = 'tangent'),
            (t.OFFSET = 'offset'),
            (t.SUBDIVISIONFACTOR = 'subdivisionFactor'),
            (t.COLORFEATUREATTRIBUTE = 'colorFeatureAttribute'),
            (t.SIZEFEATUREATTRIBUTE = 'sizeFeatureAttribute'),
            (t.OPACITYFEATUREATTRIBUTE = 'opacityFeatureAttribute'),
            (t.DISTANCETOSTART = 'distanceToStart'),
            (t.UVMAPSPACE = 'uvMapSpace'),
            (t.BOUNDINGRECT = 'boundingRect'),
            (t.UVREGION = 'uvRegion'),
            (t.NORMALCOMPRESSED = 'normalCompressed'),
            (t.PROFILERIGHT = 'profileRight'),
            (t.PROFILEUP = 'profileUp'),
            (t.PROFILEVERTEXANDNORMAL = 'profileVertexAndNormal'),
            (t.FEATUREVALUE = 'featureValue'),
            (t.MODELORIGINHI = 'modelOriginHi'),
            (t.MODELORIGINLO = 'modelOriginLo'),
            (t.MODEL = 'model'),
            (t.MODELNORMAL = 'modelNormal'),
            (t.INSTANCECOLOR = 'instanceColor'),
            (t.INSTANCEFEATUREATTRIBUTE = 'instanceFeatureAttribute'),
            (t.LOCALTRANSFORM = 'localTransform'),
            (t.GLOBALTRANSFORM = 'globalTransform'),
            (t.BOUNDINGSPHERE = 'boundingSphere'),
            (t.MODELORIGIN = 'modelOrigin'),
            (t.MODELSCALEFACTORS = 'modelScaleFactors'),
            (t.FEATUREATTRIBUTE = 'featureAttribute'),
            (t.STATE = 'state'),
            (t.LODLEVEL = 'lodLevel'),
            (t.POSITION0 = 'position0'),
            (t.POSITION1 = 'position1'),
            (t.NORMALA = 'normalA'),
            (t.NORMALB = 'normalB'),
            (t.COMPONENTINDEX = 'componentIndex'),
            (t.VARIANTOFFSET = 'variantOffset'),
            (t.VARIANTSTROKE = 'variantStroke'),
            (t.VARIANTEXTENSION = 'variantExtension'),
            (t.U8PADDING = 'u8padding'),
            (t.U16PADDING = 'u16padding'),
            (t.SIDENESS = 'sideness'),
            (t.START = 'start'),
            (t.END = 'end'),
            (t.UP = 'up'),
            (t.EXTRUDE = 'extrude');
        })(r || (r = {}));
    },
    18936: (t, n, e) => {
      e.r(n), e.d(n, { work: () => Q, wrappedWork: () => k });
      var r = e(47545);
      function E(t, n, e) {
        const r = n / 3,
          E = new Uint32Array(e + 1),
          _ = new Uint32Array(e + 1),
          i = (t, n) => {
            t < n ? E[t + 1]++ : _[n + 1]++;
          };
        for (let n = 0; n < r; n++) {
          const e = t[3 * n],
            r = t[3 * n + 1],
            E = t[3 * n + 2];
          i(e, r), i(r, E), i(E, e);
        }
        let o = 0,
          T = 0;
        for (let t = 0; t < e; t++) {
          const n = E[t + 1],
            e = _[t + 1];
          (E[t + 1] = o), (_[t + 1] = T), (o += n), (T += e);
        }
        const R = new Uint32Array(6 * r),
          A = E[e],
          s = (t, n, e) => {
            if (t < n) {
              const r = E[t + 1]++;
              (R[2 * r] = n), (R[2 * r + 1] = e);
            } else {
              const r = _[n + 1]++;
              (R[2 * A + 2 * r] = t), (R[2 * A + 2 * r + 1] = e);
            }
          };
        for (let n = 0; n < r; n++) {
          const e = t[3 * n],
            r = t[3 * n + 1],
            E = t[3 * n + 2];
          s(e, r, n), s(r, E, n), s(E, e, n);
        }
        const u = (t, n) => {
          const e = 2 * t,
            r = n - t;
          for (let t = 1; t < r; t++) {
            const n = R[e + 2 * t],
              r = R[e + 2 * t + 1];
            let E = t - 1;
            for (; E >= 0 && R[e + 2 * E] > n; E--)
              (R[e + 2 * E + 2] = R[e + 2 * E]),
                (R[e + 2 * E + 3] = R[e + 2 * E + 1]);
            (R[e + 2 * E + 2] = n), (R[e + 2 * E + 3] = r);
          }
        };
        for (let t = 0; t < e; t++)
          u(E[t], E[t + 1]), u(A + _[t], A + _[t + 1]);
        const a = new Int32Array(3 * r),
          c = (n, e) =>
            n === t[3 * e]
              ? 0
              : n === t[3 * e + 1]
              ? 1
              : n === t[3 * e + 2]
              ? 2
              : -1,
          N = (t, n) => {
            const e = c(t, n);
            a[3 * n + e] = -1;
          },
          f = (t, n, e, r) => {
            const E = c(t, n);
            a[3 * n + E] = r;
            const _ = c(e, r);
            a[3 * r + _] = n;
          };
        for (let t = 0; t < e; t++) {
          let n = E[t];
          const e = E[t + 1];
          let r = _[t];
          const i = _[t + 1];
          for (; n < e && r < i; ) {
            const e = R[2 * n],
              E = R[2 * A + 2 * r];
            e === E
              ? (f(t, R[2 * n + 1], E, R[2 * A + 2 * r + 1]), n++, r++)
              : e < E
              ? (N(t, R[2 * n + 1]), n++)
              : (N(E, R[2 * A + 2 * r + 1]), r++);
          }
          for (; n < e; ) N(t, R[2 * n + 1]), n++;
          for (; r < i; ) N(R[2 * A + 2 * r], R[2 * A + 2 * r + 1]), r++;
        }
        return a;
      }
      var _ = e(56481),
        i = e(65576);
      function o(t, n) {
        return n.push(t.buffer), { buffer: t.buffer, layout: T(t.layout) };
      }
      function T(t) {
        const n = new Array();
        return (
          t.fields.forEach((t, e) => {
            const r = { ...t, constructor: A(t.constructor) };
            n.push([e, r]);
          }),
          { stride: t.stride, fields: n, fieldNames: t.fieldNames }
        );
      }
      const R = [
        _.ly,
        _.Eu,
        _.ct,
        _.ek,
        _.gK,
        _.bj,
        _.oS,
        _.q6,
        _.fP,
        _.Cd,
        _.ey,
        _.O1,
        _.D_,
        _.xA,
        _.ne,
        _.mc,
        _.av,
        _.TS,
        _.mw,
        _.v6,
        _.Nu,
        _.qt,
        _.G5,
        _.hu,
        _.Hz,
        _.Vs,
        _.P_,
        _.ir,
        _.o7,
        _.or,
        _.n1,
        _.zO,
        _.Jj,
        _.wA,
        _.PP,
        _.TN,
      ];
      function A(t) {
        return `${t.ElementType}_${t.ElementCount}`;
      }
      const s = new Map();
      R.forEach((t) => s.set(A(t), t));
      var u = e(35371),
        a = e(21968);
      function c(t, n = 0) {
        const e = t.stride;
        return t.fieldNames
          .filter((n) => {
            const e = t.fields.get(n).optional;
            return !(e && e.glPadding);
          })
          .map((r) => {
            const E = t.fields.get(r),
              _ = E.constructor.ElementCount,
              i = N(E.constructor.ElementType),
              o = E.offset,
              T = !(!E.optional || !E.optional.glNormalized);
            return new a.G(r, _, i, o, e, T, n);
          });
      }
      function N(t) {
        const n = f[t];
        if (n) return n;
        throw new Error('BufferType not supported in WebGL');
      }
      const f = {
        u8: u.g.UNSIGNED_BYTE,
        u16: u.g.UNSIGNED_SHORT,
        u32: u.g.UNSIGNED_INT,
        i8: u.g.BYTE,
        i16: u.g.SHORT,
        i32: u.g.INT,
        f32: u.g.FLOAT,
      };
      var I = e(35065);
      const S = (0, i.U$)()
          .vec3f(I.T.POSITION)
          .u16(I.T.COMPONENTINDEX)
          .u16(I.T.U16PADDING),
        O =
          (c((0, i.U$)().vec2u8(I.T.SIDENESS)),
          (0, i.U$)()
            .vec3f(I.T.POSITION0)
            .vec3f(I.T.POSITION1)
            .u16(I.T.COMPONENTINDEX)
            .u8(I.T.VARIANTOFFSET, { glNormalized: !0 })
            .u8(I.T.VARIANTSTROKE)
            .u8(I.T.VARIANTEXTENSION, { glNormalized: !0 })
            .u8(I.T.U8PADDING, { glPadding: !0 })
            .u16(I.T.U16PADDING, { glPadding: !0 })),
        M = O.clone().vec3f(I.T.NORMAL),
        l = O.clone().vec3f(I.T.NORMALA).vec3f(I.T.NORMALB);
      new Map([
        [I.T.POSITION0, 0],
        [I.T.POSITION1, 1],
        [I.T.COMPONENTINDEX, 2],
        [I.T.VARIANTOFFSET, 3],
        [I.T.VARIANTSTROKE, 4],
        [I.T.VARIANTEXTENSION, 5],
        [I.T.NORMAL, 6],
        [I.T.NORMALA, 6],
        [I.T.NORMALB, 7],
        [I.T.SIDENESS, 8],
      ]);
      var C = e(77734),
        L = e(17896),
        h = e(65617);
      class D {
        updateSettings(t) {
          (this.settings = t),
            (this.edgeHashFunction = t.reducedPrecision ? G : F);
        }
        write(t, n, e) {
          const r = this.edgeHashFunction(e);
          H.seed = r;
          const E = H.getIntRange(0, 255),
            _ = H.getIntRange(0, this.settings.variants - 1),
            i = H.getFloat(),
            o =
              255 *
              (0.5 *
                (function (t, n) {
                  const e = t < 0 ? -1 : 1;
                  return Math.abs(t) ** 1.2 * e;
                })(
                  -(1 - Math.min(i / 0.7, 1)) +
                    Math.max(0, i - 0.7) / (1 - 0.7),
                ) +
                0.5);
          t.position0.setVec(n, e.position0),
            t.position1.setVec(n, e.position1),
            t.componentIndex.set(n, e.componentIndex),
            t.variantOffset.set(n, E),
            t.variantStroke.set(n, _),
            t.variantExtension.set(n, o);
        }
        trim(t, n) {
          return t.slice(0, n);
        }
      }
      const U = new Float32Array(6),
        P = new Uint32Array(U.buffer),
        d = new Uint32Array(1);
      function F(t) {
        const n = U;
        (n[0] = t.position0[0]),
          (n[1] = t.position0[1]),
          (n[2] = t.position0[2]),
          (n[3] = t.position1[0]),
          (n[4] = t.position1[1]),
          (n[5] = t.position1[2]),
          (d[0] = 5381);
        for (let t = 0; t < P.length; t++) d[0] = 31 * d[0] + P[t];
        return d[0];
      }
      function G(t) {
        const n = U;
        (n[0] = B(t.position0[0])),
          (n[1] = B(t.position0[1])),
          (n[2] = B(t.position0[2])),
          (n[3] = B(t.position1[0])),
          (n[4] = B(t.position1[1])),
          (n[5] = B(t.position1[2])),
          (d[0] = 5381);
        for (let t = 0; t < P.length; t++) d[0] = 31 * d[0] + P[t];
        return d[0];
      }
      function B(t) {
        return Math.round(1e4 * t) / 1e4;
      }
      class p {
        constructor() {
          this.commonWriter = new D();
        }
        updateSettings(t) {
          this.commonWriter.updateSettings(t);
        }
        allocate(t) {
          return M.createBuffer(t);
        }
        write(t, n, e) {
          this.commonWriter.write(t, n, e),
            (0, L.b)(g, e.faceNormal0, e.faceNormal1),
            (0, L.n)(g, g),
            t.normal.setVec(n, g);
        }
        trim(t, n) {
          return this.commonWriter.trim(t, n);
        }
      }
      (p.Layout = M), (p.glLayout = c(M, 1));
      class m {
        constructor() {
          this.commonWriter = new D();
        }
        updateSettings(t) {
          this.commonWriter.updateSettings(t);
        }
        allocate(t) {
          return l.createBuffer(t);
        }
        write(t, n, e) {
          this.commonWriter.write(t, n, e),
            t.normalA.setVec(n, e.faceNormal0),
            t.normalB.setVec(n, e.faceNormal1);
        }
        trim(t, n) {
          return this.commonWriter.trim(t, n);
        }
      }
      (m.Layout = l), (m.glLayout = c(l, 1));
      const g = (0, h.c)(),
        H = new C.Z();
      var V = e(67676),
        b = e(22021),
        w = e(1533);
      const v = -1;
      var y, X;
      function Y(t, n) {
        return t.cosAngle < n;
      }
      function x(t, n) {
        return t.cosAngle > n;
      }
      function W(t, n) {
        const e = (0, b.ZF)(t.cosAngle),
          r = z.fwd,
          E = z.ortho;
        return (
          (0, L.r)(r, t.position1, t.position0),
          e *
            ((0, L.d)((0, L.c)(E, t.faceNormal0, t.faceNormal1), r) > 0
              ? -1
              : 1) >
            n
        );
      }
      function q(t) {
        const n = t.faces.length / 3,
          e = t.vertices.position,
          r = t.faces,
          E = K.v0,
          _ = K.v1,
          i = K.v2,
          o = new Float32Array(3 * n);
        for (let t = 0; t < n; t++) {
          const n = r[3 * t + 0],
            T = r[3 * t + 1],
            R = r[3 * t + 2];
          e.getVec(n, E),
            e.getVec(T, _),
            e.getVec(R, i),
            (0, L.f)(_, _, E),
            (0, L.f)(i, i, E),
            (0, L.c)(E, _, i),
            (0, L.n)(E, E),
            (o[3 * t + 0] = E[0]),
            (o[3 * t + 1] = E[1]),
            (o[3 * t + 2] = E[2]);
        }
        return o;
      }
      ((X = y || (y = {}))[(X.SOLID = 0)] = 'SOLID'),
        (X[(X.SKETCH = 1)] = 'SKETCH');
      const z = {
          edge: {
            position0: (0, h.c)(),
            position1: (0, h.c)(),
            faceNormal0: (0, h.c)(),
            faceNormal1: (0, h.c)(),
            componentIndex: 0,
            cosAngle: 0,
          },
          ortho: (0, h.c)(),
          fwd: (0, h.c)(),
        },
        K = { v0: (0, h.c)(), v1: (0, h.c)(), v2: (0, h.c)() },
        Z = { anglePlanar: 4, angleSignificantEdge: 35 };
      async function k(t) {
        const n = (function (t) {
            return {
              data: S.createView(t.dataBuffer),
              indices:
                'Uint32Array' === t.indicesType
                  ? new Uint32Array(t.indicesBuffer)
                  : 'Uint16Array' === t.indicesType
                  ? new Uint16Array(t.indicesBuffer)
                  : void 0,
              indicesLength: t.indicesLength,
              writerSettings: t.writerSettings,
              skipDeduplicate: t.skipDeduplicate,
            };
          })(t),
          e = Q(n),
          r = [n.data.buffer];
        return { result: j(e, r), transferList: r };
      }
      function Q(t) {
        const n = $(t.data, t.skipDeduplicate, t.indices, t.indicesLength);
        return (
          J.updateSettings(t.writerSettings),
          tt.updateSettings(t.writerSettings),
          (function (t, n, e, r = Z) {
            const E = t.vertices.position,
              _ = t.vertices.componentIndex,
              i = (0, b.Vl)(r.anglePlanar),
              o = (0, b.Vl)(r.angleSignificantEdge),
              T = Math.cos(o),
              R = Math.cos(i),
              A = z.edge,
              s = A.position0,
              u = A.position1,
              a = A.faceNormal0,
              c = A.faceNormal1,
              N = q(t),
              f = (function (t) {
                const n = t.faces.length / 3,
                  e = t.faces,
                  r = t.neighbors;
                let E = 0;
                for (let t = 0; t < n; t++) {
                  const n = r[3 * t + 0],
                    _ = r[3 * t + 1],
                    i = r[3 * t + 2],
                    o = e[3 * t + 0],
                    T = e[3 * t + 1],
                    R = e[3 * t + 2];
                  (E += n === v || o < T ? 1 : 0),
                    (E += _ === v || T < R ? 1 : 0),
                    (E += i === v || R < o ? 1 : 0);
                }
                const _ = new Int32Array(4 * E);
                let i = 0;
                for (let t = 0; t < n; t++) {
                  const n = r[3 * t + 0],
                    E = r[3 * t + 1],
                    o = r[3 * t + 2],
                    T = e[3 * t + 0],
                    R = e[3 * t + 1],
                    A = e[3 * t + 2];
                  (n === v || T < R) &&
                    ((_[i++] = T), (_[i++] = R), (_[i++] = t), (_[i++] = n)),
                    (E === v || R < A) &&
                      ((_[i++] = R), (_[i++] = A), (_[i++] = t), (_[i++] = E)),
                    (o === v || A < T) &&
                      ((_[i++] = A), (_[i++] = T), (_[i++] = t), (_[i++] = o));
                }
                return _;
              })(t),
              I = f.length / 4,
              S = n.allocate(I);
            let O = 0;
            const M = I,
              l = e.allocate(M);
            let C = 0,
              h = 0,
              D = 0;
            const U = (0, V.w6)(0, I),
              P = new Float32Array(I);
            (0, w.Ed)(P, (t, n, e) => {
              E.getVec(f[4 * n + 0], s),
                E.getVec(f[4 * n + 1], u),
                (e[n] = (0, L.i)(s, u));
            }),
              U.sort((t, n) => P[n] - P[t]);
            const d = new Array(),
              F = new Array();
            for (let t = 0; t < I; t++) {
              const r = U[t],
                o = P[r],
                I = f[4 * r + 0],
                M = f[4 * r + 1],
                G = f[4 * r + 2],
                B = f[4 * r + 3],
                p = B === v;
              if ((E.getVec(I, s), E.getVec(M, u), p))
                (0, L.s)(a, N[3 * G + 0], N[3 * G + 1], N[3 * G + 2]),
                  (0, L.g)(c, a),
                  (A.componentIndex = _.get(I)),
                  (A.cosAngle = (0, L.d)(a, c));
              else {
                if (
                  ((0, L.s)(a, N[3 * G + 0], N[3 * G + 1], N[3 * G + 2]),
                  (0, L.s)(c, N[3 * B + 0], N[3 * B + 1], N[3 * B + 2]),
                  (A.componentIndex = _.get(I)),
                  (A.cosAngle = (0, L.d)(a, c)),
                  x(A, R))
                )
                  continue;
                A.cosAngle < -0.9999 && (0, L.g)(c, a);
              }
              (h += o),
                D++,
                p || Y(A, T)
                  ? (n.write(S, O++, A), d.push(o))
                  : W(A, i) && (e.write(l, C++, A), F.push(o));
            }
            const G = new Float32Array(d.reverse()),
              B = new Float32Array(F.reverse());
            return {
              regular: { instancesData: n.trim(S, O), lodInfo: { lengths: G } },
              silhouette: {
                instancesData: e.trim(l, C),
                lodInfo: { lengths: B },
              },
              averageEdgeLength: h / D,
            };
          })(n, J, tt)
        );
      }
      function j(t, n) {
        return (
          n.push(t.regular.lodInfo.lengths.buffer),
          n.push(t.silhouette.lodInfo.lengths.buffer),
          {
            regular: {
              instancesData: o(t.regular.instancesData, n),
              lodInfo: { lengths: t.regular.lodInfo.lengths.buffer },
            },
            silhouette: {
              instancesData: o(t.silhouette.instancesData, n),
              lodInfo: { lengths: t.silhouette.lodInfo.lengths.buffer },
            },
            averageEdgeLength: t.averageEdgeLength,
          }
        );
      }
      function $(t, n, e, _) {
        if (n)
          return {
            faces: e,
            facesLength: _,
            neighbors: E(e, _, t.count),
            vertices: t,
          };
        const i = (0, r.d)(t.buffer, t.stride / 4, {
            originalIndices: e,
            originalIndicesLength: _,
          }),
          o = E(i.indices, _, i.uniqueCount);
        return {
          faces: i.indices,
          facesLength: i.indices.length,
          neighbors: o,
          vertices: S.createView(i.buffer),
        };
      }
      const J = new p(),
        tt = new m();
    },
    21968: (t, n, e) => {
      e.d(n, { G: () => r });
      class r {
        constructor(t, n, e, r, E, _ = !1, i = 0) {
          (this.name = t),
            (this.count = n),
            (this.type = e),
            (this.offset = r),
            (this.stride = E),
            (this.normalized = _),
            (this.divisor = i);
        }
      }
    },
    35371: (t, n, e) => {
      var r,
        E,
        _,
        i,
        o,
        T,
        R,
        A,
        s,
        u,
        a,
        c,
        N,
        f,
        I,
        S,
        O,
        M,
        l,
        C,
        L,
        h,
        D,
        U;
      e.d(n, {
        zi: () => _,
        db: () => i,
        w0: () => o,
        VY: () => U,
        wb: () => s,
        q_: () => d,
        Wf: () => R,
        g: () => A,
        Lu: () => P,
        OU: () => h,
        LR: () => T,
        qi: () => C,
        VI: () => f,
        Br: () => S,
        MX: () => E,
        Tg: () => O,
        _g: () => D,
        lP: () => I,
        xS: () => u,
        Lm: () => L,
        cw: () => a,
        No: () => N,
        e8: () => c,
        l1: () => M,
      }),
        (function (t) {
          (t[(t.DEPTH_BUFFER_BIT = 256)] = 'DEPTH_BUFFER_BIT'),
            (t[(t.STENCIL_BUFFER_BIT = 1024)] = 'STENCIL_BUFFER_BIT'),
            (t[(t.COLOR_BUFFER_BIT = 16384)] = 'COLOR_BUFFER_BIT');
        })(r || (r = {})),
        (function (t) {
          (t[(t.POINTS = 0)] = 'POINTS'),
            (t[(t.LINES = 1)] = 'LINES'),
            (t[(t.LINE_LOOP = 2)] = 'LINE_LOOP'),
            (t[(t.LINE_STRIP = 3)] = 'LINE_STRIP'),
            (t[(t.TRIANGLES = 4)] = 'TRIANGLES'),
            (t[(t.TRIANGLE_STRIP = 5)] = 'TRIANGLE_STRIP'),
            (t[(t.TRIANGLE_FAN = 6)] = 'TRIANGLE_FAN');
        })(E || (E = {})),
        (function (t) {
          (t[(t.ZERO = 0)] = 'ZERO'),
            (t[(t.ONE = 1)] = 'ONE'),
            (t[(t.SRC_COLOR = 768)] = 'SRC_COLOR'),
            (t[(t.ONE_MINUS_SRC_COLOR = 769)] = 'ONE_MINUS_SRC_COLOR'),
            (t[(t.SRC_ALPHA = 770)] = 'SRC_ALPHA'),
            (t[(t.ONE_MINUS_SRC_ALPHA = 771)] = 'ONE_MINUS_SRC_ALPHA'),
            (t[(t.DST_ALPHA = 772)] = 'DST_ALPHA'),
            (t[(t.ONE_MINUS_DST_ALPHA = 773)] = 'ONE_MINUS_DST_ALPHA'),
            (t[(t.DST_COLOR = 774)] = 'DST_COLOR'),
            (t[(t.ONE_MINUS_DST_COLOR = 775)] = 'ONE_MINUS_DST_COLOR'),
            (t[(t.SRC_ALPHA_SATURATE = 776)] = 'SRC_ALPHA_SATURATE'),
            (t[(t.CONSTANT_COLOR = 32769)] = 'CONSTANT_COLOR'),
            (t[(t.ONE_MINUS_CONSTANT_COLOR = 32770)] =
              'ONE_MINUS_CONSTANT_COLOR'),
            (t[(t.CONSTANT_ALPHA = 32771)] = 'CONSTANT_ALPHA'),
            (t[(t.ONE_MINUS_CONSTANT_ALPHA = 32772)] =
              'ONE_MINUS_CONSTANT_ALPHA');
        })(_ || (_ = {})),
        (function (t) {
          (t[(t.ADD = 32774)] = 'ADD'),
            (t[(t.SUBTRACT = 32778)] = 'SUBTRACT'),
            (t[(t.REVERSE_SUBTRACT = 32779)] = 'REVERSE_SUBTRACT');
        })(i || (i = {})),
        (function (t) {
          (t[(t.ARRAY_BUFFER = 34962)] = 'ARRAY_BUFFER'),
            (t[(t.ELEMENT_ARRAY_BUFFER = 34963)] = 'ELEMENT_ARRAY_BUFFER'),
            (t[(t.UNIFORM_BUFFER = 35345)] = 'UNIFORM_BUFFER'),
            (t[(t.PIXEL_PACK_BUFFER = 35051)] = 'PIXEL_PACK_BUFFER'),
            (t[(t.PIXEL_UNPACK_BUFFER = 35052)] = 'PIXEL_UNPACK_BUFFER'),
            (t[(t.COPY_READ_BUFFER = 36662)] = 'COPY_READ_BUFFER'),
            (t[(t.COPY_WRITE_BUFFER = 36663)] = 'COPY_WRITE_BUFFER');
        })(o || (o = {})),
        (function (t) {
          (t[(t.FRONT = 1028)] = 'FRONT'),
            (t[(t.BACK = 1029)] = 'BACK'),
            (t[(t.FRONT_AND_BACK = 1032)] = 'FRONT_AND_BACK');
        })(T || (T = {})),
        (function (t) {
          (t[(t.CW = 2304)] = 'CW'), (t[(t.CCW = 2305)] = 'CCW');
        })(R || (R = {})),
        (function (t) {
          (t[(t.BYTE = 5120)] = 'BYTE'),
            (t[(t.UNSIGNED_BYTE = 5121)] = 'UNSIGNED_BYTE'),
            (t[(t.SHORT = 5122)] = 'SHORT'),
            (t[(t.UNSIGNED_SHORT = 5123)] = 'UNSIGNED_SHORT'),
            (t[(t.INT = 5124)] = 'INT'),
            (t[(t.UNSIGNED_INT = 5125)] = 'UNSIGNED_INT'),
            (t[(t.FLOAT = 5126)] = 'FLOAT');
        })(A || (A = {})),
        (function (t) {
          (t[(t.NEVER = 512)] = 'NEVER'),
            (t[(t.LESS = 513)] = 'LESS'),
            (t[(t.EQUAL = 514)] = 'EQUAL'),
            (t[(t.LEQUAL = 515)] = 'LEQUAL'),
            (t[(t.GREATER = 516)] = 'GREATER'),
            (t[(t.NOTEQUAL = 517)] = 'NOTEQUAL'),
            (t[(t.GEQUAL = 518)] = 'GEQUAL'),
            (t[(t.ALWAYS = 519)] = 'ALWAYS');
        })(s || (s = {})),
        (function (t) {
          (t[(t.ZERO = 0)] = 'ZERO'),
            (t[(t.KEEP = 7680)] = 'KEEP'),
            (t[(t.REPLACE = 7681)] = 'REPLACE'),
            (t[(t.INCR = 7682)] = 'INCR'),
            (t[(t.DECR = 7683)] = 'DECR'),
            (t[(t.INVERT = 5386)] = 'INVERT'),
            (t[(t.INCR_WRAP = 34055)] = 'INCR_WRAP'),
            (t[(t.DECR_WRAP = 34056)] = 'DECR_WRAP');
        })(u || (u = {})),
        (function (t) {
          (t[(t.NEAREST = 9728)] = 'NEAREST'),
            (t[(t.LINEAR = 9729)] = 'LINEAR'),
            (t[(t.NEAREST_MIPMAP_NEAREST = 9984)] = 'NEAREST_MIPMAP_NEAREST'),
            (t[(t.LINEAR_MIPMAP_NEAREST = 9985)] = 'LINEAR_MIPMAP_NEAREST'),
            (t[(t.NEAREST_MIPMAP_LINEAR = 9986)] = 'NEAREST_MIPMAP_LINEAR'),
            (t[(t.LINEAR_MIPMAP_LINEAR = 9987)] = 'LINEAR_MIPMAP_LINEAR');
        })(a || (a = {})),
        (function (t) {
          (t[(t.CLAMP_TO_EDGE = 33071)] = 'CLAMP_TO_EDGE'),
            (t[(t.REPEAT = 10497)] = 'REPEAT'),
            (t[(t.MIRRORED_REPEAT = 33648)] = 'MIRRORED_REPEAT');
        })(c || (c = {})),
        (function (t) {
          (t[(t.TEXTURE_2D = 3553)] = 'TEXTURE_2D'),
            (t[(t.TEXTURE_CUBE_MAP = 34067)] = 'TEXTURE_CUBE_MAP'),
            (t[(t.TEXTURE_3D = 32879)] = 'TEXTURE_3D'),
            (t[(t.TEXTURE_CUBE_MAP_POSITIVE_X = 34069)] =
              'TEXTURE_CUBE_MAP_POSITIVE_X'),
            (t[(t.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070)] =
              'TEXTURE_CUBE_MAP_NEGATIVE_X'),
            (t[(t.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071)] =
              'TEXTURE_CUBE_MAP_POSITIVE_Y'),
            (t[(t.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072)] =
              'TEXTURE_CUBE_MAP_NEGATIVE_Y'),
            (t[(t.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073)] =
              'TEXTURE_CUBE_MAP_POSITIVE_Z'),
            (t[(t.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074)] =
              'TEXTURE_CUBE_MAP_NEGATIVE_Z'),
            (t[(t.TEXTURE_2D_ARRAY = 35866)] = 'TEXTURE_2D_ARRAY');
        })(N || (N = {})),
        (function (t) {
          (t[(t.DEPTH_COMPONENT = 6402)] = 'DEPTH_COMPONENT'),
            (t[(t.DEPTH_STENCIL = 34041)] = 'DEPTH_STENCIL'),
            (t[(t.ALPHA = 6406)] = 'ALPHA'),
            (t[(t.RGB = 6407)] = 'RGB'),
            (t[(t.RGBA = 6408)] = 'RGBA'),
            (t[(t.LUMINANCE = 6409)] = 'LUMINANCE'),
            (t[(t.LUMINANCE_ALPHA = 6410)] = 'LUMINANCE_ALPHA'),
            (t[(t.RED = 6403)] = 'RED'),
            (t[(t.RG = 33319)] = 'RG'),
            (t[(t.RED_INTEGER = 36244)] = 'RED_INTEGER'),
            (t[(t.RG_INTEGER = 33320)] = 'RG_INTEGER'),
            (t[(t.RGB_INTEGER = 36248)] = 'RGB_INTEGER'),
            (t[(t.RGBA_INTEGER = 36249)] = 'RGBA_INTEGER');
        })(f || (f = {})),
        (function (t) {
          (t[(t.RGBA4 = 32854)] = 'RGBA4'),
            (t[(t.R16F = 33325)] = 'R16F'),
            (t[(t.RG16F = 33327)] = 'RG16F'),
            (t[(t.RGB32F = 34837)] = 'RGB32F'),
            (t[(t.RGBA16F = 34842)] = 'RGBA16F'),
            (t[(t.R32F = 33326)] = 'R32F'),
            (t[(t.RG32F = 33328)] = 'RG32F'),
            (t[(t.RGBA32F = 34836)] = 'RGBA32F'),
            (t[(t.R11F_G11F_B10F = 35898)] = 'R11F_G11F_B10F'),
            (t[(t.RGB8 = 32849)] = 'RGB8'),
            (t[(t.RGBA8 = 32856)] = 'RGBA8'),
            (t[(t.RGB5_A1 = 32855)] = 'RGB5_A1'),
            (t[(t.R8 = 33321)] = 'R8'),
            (t[(t.RG8 = 33323)] = 'RG8'),
            (t[(t.R8I = 33329)] = 'R8I'),
            (t[(t.R8UI = 33330)] = 'R8UI'),
            (t[(t.R16I = 33331)] = 'R16I'),
            (t[(t.R16UI = 33332)] = 'R16UI'),
            (t[(t.R32I = 33333)] = 'R32I'),
            (t[(t.R32UI = 33334)] = 'R32UI'),
            (t[(t.RG8I = 33335)] = 'RG8I'),
            (t[(t.RG8UI = 33336)] = 'RG8UI'),
            (t[(t.RG16I = 33337)] = 'RG16I'),
            (t[(t.RG16UI = 33338)] = 'RG16UI'),
            (t[(t.RG32I = 33339)] = 'RG32I'),
            (t[(t.RG32UI = 33340)] = 'RG32UI'),
            (t[(t.RGB16F = 34843)] = 'RGB16F'),
            (t[(t.RGB9_E5 = 35901)] = 'RGB9_E5'),
            (t[(t.SRGB8 = 35905)] = 'SRGB8'),
            (t[(t.SRGB8_ALPHA8 = 35907)] = 'SRGB8_ALPHA8'),
            (t[(t.RGB565 = 36194)] = 'RGB565'),
            (t[(t.RGBA32UI = 36208)] = 'RGBA32UI'),
            (t[(t.RGB32UI = 36209)] = 'RGB32UI'),
            (t[(t.RGBA16UI = 36214)] = 'RGBA16UI'),
            (t[(t.RGB16UI = 36215)] = 'RGB16UI'),
            (t[(t.RGBA8UI = 36220)] = 'RGBA8UI'),
            (t[(t.RGB8UI = 36221)] = 'RGB8UI'),
            (t[(t.RGBA32I = 36226)] = 'RGBA32I'),
            (t[(t.RGB32I = 36227)] = 'RGB32I'),
            (t[(t.RGBA16I = 36232)] = 'RGBA16I'),
            (t[(t.RGB16I = 36233)] = 'RGB16I'),
            (t[(t.RGBA8I = 36238)] = 'RGBA8I'),
            (t[(t.RGB8I = 36239)] = 'RGB8I'),
            (t[(t.R8_SNORM = 36756)] = 'R8_SNORM'),
            (t[(t.RG8_SNORM = 36757)] = 'RG8_SNORM'),
            (t[(t.RGB8_SNORM = 36758)] = 'RGB8_SNORM'),
            (t[(t.RGBA8_SNORM = 36759)] = 'RGBA8_SNORM'),
            (t[(t.RGB10_A2 = 32857)] = 'RGB10_A2'),
            (t[(t.RGB10_A2UI = 36975)] = 'RGB10_A2UI');
        })(I || (I = {})),
        (function (t) {
          (t[(t.FLOAT = 5126)] = 'FLOAT'),
            (t[(t.UNSIGNED_BYTE = 5121)] = 'UNSIGNED_BYTE'),
            (t[(t.UNSIGNED_INT_24_8 = 34042)] = 'UNSIGNED_INT_24_8'),
            (t[(t.UNSIGNED_SHORT_4_4_4_4 = 32819)] = 'UNSIGNED_SHORT_4_4_4_4'),
            (t[(t.UNSIGNED_SHORT_5_5_5_1 = 32820)] = 'UNSIGNED_SHORT_5_5_5_1'),
            (t[(t.UNSIGNED_SHORT_5_6_5 = 33635)] = 'UNSIGNED_SHORT_5_6_5'),
            (t[(t.BYTE = 5120)] = 'BYTE'),
            (t[(t.UNSIGNED_SHORT = 5123)] = 'UNSIGNED_SHORT'),
            (t[(t.SHORT = 5122)] = 'SHORT'),
            (t[(t.UNSIGNED_INT = 5125)] = 'UNSIGNED_INT'),
            (t[(t.INT = 5124)] = 'INT'),
            (t[(t.HALF_FLOAT = 5131)] = 'HALF_FLOAT'),
            (t[(t.UNSIGNED_INT_2_10_10_10_REV = 33640)] =
              'UNSIGNED_INT_2_10_10_10_REV'),
            (t[(t.UNSIGNED_INT_10F_11F_11F_REV = 35899)] =
              'UNSIGNED_INT_10F_11F_11F_REV'),
            (t[(t.UNSIGNED_INT_5_9_9_9_REV = 35902)] =
              'UNSIGNED_INT_5_9_9_9_REV'),
            (t[(t.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269)] =
              'FLOAT_32_UNSIGNED_INT_24_8_REV');
        })(S || (S = {})),
        (function (t) {
          (t[(t.DEPTH_COMPONENT16 = 33189)] = 'DEPTH_COMPONENT16'),
            (t[(t.STENCIL_INDEX8 = 36168)] = 'STENCIL_INDEX8'),
            (t[(t.DEPTH_STENCIL = 34041)] = 'DEPTH_STENCIL'),
            (t[(t.DEPTH_COMPONENT24 = 33190)] = 'DEPTH_COMPONENT24'),
            (t[(t.DEPTH_COMPONENT32F = 36012)] = 'DEPTH_COMPONENT32F'),
            (t[(t.DEPTH24_STENCIL8 = 35056)] = 'DEPTH24_STENCIL8'),
            (t[(t.DEPTH32F_STENCIL8 = 36013)] = 'DEPTH32F_STENCIL8');
        })(O || (O = {})),
        (function (t) {
          (t[(t.STATIC_DRAW = 35044)] = 'STATIC_DRAW'),
            (t[(t.DYNAMIC_DRAW = 35048)] = 'DYNAMIC_DRAW'),
            (t[(t.STREAM_DRAW = 35040)] = 'STREAM_DRAW'),
            (t[(t.STATIC_READ = 35045)] = 'STATIC_READ'),
            (t[(t.DYNAMIC_READ = 35049)] = 'DYNAMIC_READ'),
            (t[(t.STREAM_READ = 35041)] = 'STREAM_READ'),
            (t[(t.STATIC_COPY = 35046)] = 'STATIC_COPY'),
            (t[(t.DYNAMIC_COPY = 35050)] = 'DYNAMIC_COPY'),
            (t[(t.STREAM_COPY = 35042)] = 'STREAM_COPY');
        })(M || (M = {})),
        (function (t) {
          (t[(t.FRAGMENT_SHADER = 35632)] = 'FRAGMENT_SHADER'),
            (t[(t.VERTEX_SHADER = 35633)] = 'VERTEX_SHADER');
        })(l || (l = {})),
        (function (t) {
          (t[(t.FRAMEBUFFER = 36160)] = 'FRAMEBUFFER'),
            (t[(t.READ_FRAMEBUFFER = 36008)] = 'READ_FRAMEBUFFER'),
            (t[(t.DRAW_FRAMEBUFFER = 36009)] = 'DRAW_FRAMEBUFFER');
        })(C || (C = {})),
        (function (t) {
          (t[(t.TEXTURE = 0)] = 'TEXTURE'),
            (t[(t.RENDER_BUFFER = 1)] = 'RENDER_BUFFER'),
            (t[(t.CUBEMAP = 2)] = 'CUBEMAP');
        })(L || (L = {})),
        (function (t) {
          (t[(t.NONE = 0)] = 'NONE'),
            (t[(t.DEPTH_RENDER_BUFFER = 1)] = 'DEPTH_RENDER_BUFFER'),
            (t[(t.STENCIL_RENDER_BUFFER = 2)] = 'STENCIL_RENDER_BUFFER'),
            (t[(t.DEPTH_STENCIL_RENDER_BUFFER = 3)] =
              'DEPTH_STENCIL_RENDER_BUFFER'),
            (t[(t.DEPTH_STENCIL_TEXTURE = 4)] = 'DEPTH_STENCIL_TEXTURE');
        })(h || (h = {})),
        (function (t) {
          (t[(t.Texture = 0)] = 'Texture'),
            (t[(t.Buffer = 1)] = 'Buffer'),
            (t[(t.VAO = 2)] = 'VAO'),
            (t[(t.Shader = 3)] = 'Shader'),
            (t[(t.Program = 4)] = 'Program'),
            (t[(t.Framebuffer = 5)] = 'Framebuffer'),
            (t[(t.Renderbuffer = 6)] = 'Renderbuffer'),
            (t[(t.Sync = 7)] = 'Sync'),
            (t[(t.COUNT = 8)] = 'COUNT');
        })(D || (D = {})),
        (function (t) {
          (t[(t.COLOR_ATTACHMENT0 = 36064)] = 'COLOR_ATTACHMENT0'),
            (t[(t.COLOR_ATTACHMENT1 = 36065)] = 'COLOR_ATTACHMENT1'),
            (t[(t.COLOR_ATTACHMENT2 = 36066)] = 'COLOR_ATTACHMENT2'),
            (t[(t.COLOR_ATTACHMENT3 = 36067)] = 'COLOR_ATTACHMENT3'),
            (t[(t.COLOR_ATTACHMENT4 = 36068)] = 'COLOR_ATTACHMENT4'),
            (t[(t.COLOR_ATTACHMENT5 = 36069)] = 'COLOR_ATTACHMENT5'),
            (t[(t.COLOR_ATTACHMENT6 = 36070)] = 'COLOR_ATTACHMENT6'),
            (t[(t.COLOR_ATTACHMENT7 = 36071)] = 'COLOR_ATTACHMENT7'),
            (t[(t.COLOR_ATTACHMENT8 = 36072)] = 'COLOR_ATTACHMENT8'),
            (t[(t.COLOR_ATTACHMENT9 = 36073)] = 'COLOR_ATTACHMENT9'),
            (t[(t.COLOR_ATTACHMENT10 = 36074)] = 'COLOR_ATTACHMENT10'),
            (t[(t.COLOR_ATTACHMENT11 = 36075)] = 'COLOR_ATTACHMENT11'),
            (t[(t.COLOR_ATTACHMENT12 = 36076)] = 'COLOR_ATTACHMENT12'),
            (t[(t.COLOR_ATTACHMENT13 = 36077)] = 'COLOR_ATTACHMENT13'),
            (t[(t.COLOR_ATTACHMENT14 = 36078)] = 'COLOR_ATTACHMENT14'),
            (t[(t.COLOR_ATTACHMENT15 = 36079)] = 'COLOR_ATTACHMENT15');
        })(U || (U = {}));
      const P = 33306;
      var d, F, G, B, p, m, g;
      !(function (t) {
        (t[(t.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776)] =
          'COMPRESSED_RGB_S3TC_DXT1_EXT'),
          (t[(t.COMPRESSED_RGBA_S3TC_DXT1_EXT = 33777)] =
            'COMPRESSED_RGBA_S3TC_DXT1_EXT'),
          (t[(t.COMPRESSED_RGBA_S3TC_DXT3_EXT = 33778)] =
            'COMPRESSED_RGBA_S3TC_DXT3_EXT'),
          (t[(t.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779)] =
            'COMPRESSED_RGBA_S3TC_DXT5_EXT'),
          (t[(t.COMPRESSED_R11_EAC = 37488)] = 'COMPRESSED_R11_EAC'),
          (t[(t.COMPRESSED_SIGNED_R11_EAC = 37489)] =
            'COMPRESSED_SIGNED_R11_EAC'),
          (t[(t.COMPRESSED_RG11_EAC = 37490)] = 'COMPRESSED_RG11_EAC'),
          (t[(t.COMPRESSED_SIGNED_RG11_EAC = 37491)] =
            'COMPRESSED_SIGNED_RG11_EAC'),
          (t[(t.COMPRESSED_RGB8_ETC2 = 37492)] = 'COMPRESSED_RGB8_ETC2'),
          (t[(t.COMPRESSED_SRGB8_ETC2 = 37493)] = 'COMPRESSED_SRGB8_ETC2'),
          (t[(t.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494)] =
            'COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2'),
          (t[(t.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495)] =
            'COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2'),
          (t[(t.COMPRESSED_RGBA8_ETC2_EAC = 37496)] =
            'COMPRESSED_RGBA8_ETC2_EAC'),
          (t[(t.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497)] =
            'COMPRESSED_SRGB8_ALPHA8_ETC2_EAC');
      })(d || (d = {})),
        (function (t) {
          (t[(t.FLOAT = 5126)] = 'FLOAT'),
            (t[(t.FLOAT_VEC2 = 35664)] = 'FLOAT_VEC2'),
            (t[(t.FLOAT_VEC3 = 35665)] = 'FLOAT_VEC3'),
            (t[(t.FLOAT_VEC4 = 35666)] = 'FLOAT_VEC4'),
            (t[(t.INT = 5124)] = 'INT'),
            (t[(t.INT_VEC2 = 35667)] = 'INT_VEC2'),
            (t[(t.INT_VEC3 = 35668)] = 'INT_VEC3'),
            (t[(t.INT_VEC4 = 35669)] = 'INT_VEC4'),
            (t[(t.BOOL = 35670)] = 'BOOL'),
            (t[(t.BOOL_VEC2 = 35671)] = 'BOOL_VEC2'),
            (t[(t.BOOL_VEC3 = 35672)] = 'BOOL_VEC3'),
            (t[(t.BOOL_VEC4 = 35673)] = 'BOOL_VEC4'),
            (t[(t.FLOAT_MAT2 = 35674)] = 'FLOAT_MAT2'),
            (t[(t.FLOAT_MAT3 = 35675)] = 'FLOAT_MAT3'),
            (t[(t.FLOAT_MAT4 = 35676)] = 'FLOAT_MAT4'),
            (t[(t.SAMPLER_2D = 35678)] = 'SAMPLER_2D'),
            (t[(t.SAMPLER_CUBE = 35680)] = 'SAMPLER_CUBE'),
            (t[(t.UNSIGNED_INT = 5125)] = 'UNSIGNED_INT'),
            (t[(t.UNSIGNED_INT_VEC2 = 36294)] = 'UNSIGNED_INT_VEC2'),
            (t[(t.UNSIGNED_INT_VEC3 = 36295)] = 'UNSIGNED_INT_VEC3'),
            (t[(t.UNSIGNED_INT_VEC4 = 36296)] = 'UNSIGNED_INT_VEC4'),
            (t[(t.FLOAT_MAT2x3 = 35685)] = 'FLOAT_MAT2x3'),
            (t[(t.FLOAT_MAT2x4 = 35686)] = 'FLOAT_MAT2x4'),
            (t[(t.FLOAT_MAT3x2 = 35687)] = 'FLOAT_MAT3x2'),
            (t[(t.FLOAT_MAT3x4 = 35688)] = 'FLOAT_MAT3x4'),
            (t[(t.FLOAT_MAT4x2 = 35689)] = 'FLOAT_MAT4x2'),
            (t[(t.FLOAT_MAT4x3 = 35690)] = 'FLOAT_MAT4x3'),
            (t[(t.SAMPLER_3D = 35679)] = 'SAMPLER_3D'),
            (t[(t.SAMPLER_2D_SHADOW = 35682)] = 'SAMPLER_2D_SHADOW'),
            (t[(t.SAMPLER_2D_ARRAY = 36289)] = 'SAMPLER_2D_ARRAY'),
            (t[(t.SAMPLER_2D_ARRAY_SHADOW = 36292)] =
              'SAMPLER_2D_ARRAY_SHADOW'),
            (t[(t.SAMPLER_CUBE_SHADOW = 36293)] = 'SAMPLER_CUBE_SHADOW'),
            (t[(t.INT_SAMPLER_2D = 36298)] = 'INT_SAMPLER_2D'),
            (t[(t.INT_SAMPLER_3D = 36299)] = 'INT_SAMPLER_3D'),
            (t[(t.INT_SAMPLER_CUBE = 36300)] = 'INT_SAMPLER_CUBE'),
            (t[(t.INT_SAMPLER_2D_ARRAY = 36303)] = 'INT_SAMPLER_2D_ARRAY'),
            (t[(t.UNSIGNED_INT_SAMPLER_2D = 36306)] =
              'UNSIGNED_INT_SAMPLER_2D'),
            (t[(t.UNSIGNED_INT_SAMPLER_3D = 36307)] =
              'UNSIGNED_INT_SAMPLER_3D'),
            (t[(t.UNSIGNED_INT_SAMPLER_CUBE = 36308)] =
              'UNSIGNED_INT_SAMPLER_CUBE'),
            (t[(t.UNSIGNED_INT_SAMPLER_2D_ARRAY = 36311)] =
              'UNSIGNED_INT_SAMPLER_2D_ARRAY');
        })(F || (F = {})),
        (function (t) {
          (t[(t.OBJECT_TYPE = 37138)] = 'OBJECT_TYPE'),
            (t[(t.SYNC_CONDITION = 37139)] = 'SYNC_CONDITION'),
            (t[(t.SYNC_STATUS = 37140)] = 'SYNC_STATUS'),
            (t[(t.SYNC_FLAGS = 37141)] = 'SYNC_FLAGS');
        })(G || (G = {})),
        (function (t) {
          (t[(t.UNSIGNALED = 37144)] = 'UNSIGNALED'),
            (t[(t.SIGNALED = 37145)] = 'SIGNALED');
        })(B || (B = {})),
        (function (t) {
          (t[(t.ALREADY_SIGNALED = 37146)] = 'ALREADY_SIGNALED'),
            (t[(t.TIMEOUT_EXPIRED = 37147)] = 'TIMEOUT_EXPIRED'),
            (t[(t.CONDITION_SATISFIED = 37148)] = 'CONDITION_SATISFIED'),
            (t[(t.WAIT_FAILED = 37149)] = 'WAIT_FAILED');
        })(p || (p = {})),
        (function (t) {
          t[(t.SYNC_GPU_COMMANDS_COMPLETE = 37143)] =
            'SYNC_GPU_COMMANDS_COMPLETE';
        })(m || (m = {})),
        (function (t) {
          t[(t.SYNC_FLUSH_COMMANDS_BIT = 1)] = 'SYNC_FLUSH_COMMANDS_BIT';
        })(g || (g = {}));
    },
  },
]);
