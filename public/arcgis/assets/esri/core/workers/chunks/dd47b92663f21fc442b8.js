'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [3388, 3172],
  {
    22303: (e, t, r) => {
      r.d(t, { Z: () => f });
      var n,
        s,
        i = r(35270),
        a = r(22021),
        o = r(70586),
        l = r(75215);
      function c(e) {
        return (0, a.uZ)((0, l.vU)(e), 0, 255);
      }
      function h(e, t, r) {
        return (e = Number(e)), isNaN(e) ? r : e < t ? t : e > r ? r : e;
      }
      class u {
        constructor(e) {
          (this.r = 255),
            (this.g = 255),
            (this.b = 255),
            (this.a = 1),
            e && this.setColor(e);
        }
        static blendColors(e, t, r, n = new u()) {
          return (
            (n.r = Math.round(e.r + (t.r - e.r) * r)),
            (n.g = Math.round(e.g + (t.g - e.g) * r)),
            (n.b = Math.round(e.b + (t.b - e.b) * r)),
            (n.a = e.a + (t.a - e.a) * r),
            n._sanitize()
          );
        }
        static fromRgb(e, t) {
          const r = e.toLowerCase().match(/^(rgba?|hsla?)\(([\s\.\-,%0-9]+)\)/);
          if (r) {
            const e = r[2].split(/\s*,\s*/),
              n = r[1];
            if (
              ('rgb' === n && 3 === e.length) ||
              ('rgba' === n && 4 === e.length)
            ) {
              const r = e[0];
              if ('%' === r.charAt(r.length - 1)) {
                const r = e.map((e) => 2.56 * parseFloat(e));
                return (
                  4 === e.length && (r[3] = parseFloat(e[3])), u.fromArray(r, t)
                );
              }
              return u.fromArray(
                e.map((e) => parseFloat(e)),
                t,
              );
            }
            if (
              ('hsl' === n && 3 === e.length) ||
              ('hsla' === n && 4 === e.length)
            )
              return u.fromArray(
                (0, i.B7)(
                  parseFloat(e[0]),
                  parseFloat(e[1]) / 100,
                  parseFloat(e[2]) / 100,
                  parseFloat(e[3]),
                ),
                t,
              );
          }
          return null;
        }
        static fromHex(e, t = new u()) {
          if ((4 !== e.length && 7 !== e.length) || '#' !== e[0]) return null;
          const r = 4 === e.length ? 4 : 8,
            n = (1 << r) - 1;
          let s = Number('0x' + e.substr(1));
          return isNaN(s)
            ? null
            : (['b', 'g', 'r'].forEach((e) => {
                const i = s & n;
                (s >>= r), (t[e] = 4 === r ? 17 * i : i);
              }),
              (t.a = 1),
              t);
        }
        static fromArray(e, t = new u()) {
          return (
            t._set(Number(e[0]), Number(e[1]), Number(e[2]), Number(e[3])),
            isNaN(t.a) && (t.a = 1),
            t._sanitize()
          );
        }
        static fromString(e, t) {
          const r = (0, i.St)(e) ? (0, i.h$)(e) : null;
          return (r && u.fromArray(r, t)) || u.fromRgb(e, t) || u.fromHex(e, t);
        }
        static fromJSON(e) {
          return e && new u([e[0], e[1], e[2], e[3] / 255]);
        }
        static toUnitRGB(e) {
          return (0, o.pC)(e) ? [e.r / 255, e.g / 255, e.b / 255] : null;
        }
        static toUnitRGBA(e) {
          return (0, o.pC)(e)
            ? [e.r / 255, e.g / 255, e.b / 255, null != e.a ? e.a : 1]
            : null;
        }
        get isBright() {
          return 0.299 * this.r + 0.587 * this.g + 0.114 * this.b >= 127;
        }
        setColor(e) {
          if ('string' == typeof e) u.fromString(e, this);
          else if (Array.isArray(e)) u.fromArray(e, this);
          else {
            var t, r, n, s;
            this._set(
              null != (t = e.r) ? t : 0,
              null != (r = e.g) ? r : 0,
              null != (n = e.b) ? n : 0,
              null != (s = e.a) ? s : 1,
            ),
              e instanceof u || this._sanitize();
          }
          return this;
        }
        toRgb() {
          return [this.r, this.g, this.b];
        }
        toRgba() {
          return [this.r, this.g, this.b, this.a];
        }
        toHex() {
          const e = this.r.toString(16),
            t = this.g.toString(16),
            r = this.b.toString(16);
          return `#${e.length < 2 ? '0' + e : e}${t.length < 2 ? '0' + t : t}${
            r.length < 2 ? '0' + r : r
          }`;
        }
        toCss(e = !1) {
          const t = this.r + ', ' + this.g + ', ' + this.b;
          return e ? `rgba(${t}, ${this.a})` : `rgb(${t})`;
        }
        toString() {
          return this.toCss(!0);
        }
        toJSON() {
          return this.toArray();
        }
        toArray(e = u.AlphaMode.ALWAYS) {
          const t = c(this.r),
            r = c(this.g),
            n = c(this.b);
          return e === u.AlphaMode.ALWAYS || 1 !== this.a
            ? [t, r, n, c(255 * this.a)]
            : [t, r, n];
        }
        clone() {
          return new u(this.toRgba());
        }
        hash() {
          return (
            (this.r << 24) | (this.g << 16) | (this.b << 8) | (255 * this.a)
          );
        }
        equals(e) {
          return (
            (0, o.pC)(e) &&
            e.r === this.r &&
            e.g === this.g &&
            e.b === this.b &&
            e.a === this.a
          );
        }
        _sanitize() {
          return (
            (this.r = Math.round(h(this.r, 0, 255))),
            (this.g = Math.round(h(this.g, 0, 255))),
            (this.b = Math.round(h(this.b, 0, 255))),
            (this.a = h(this.a, 0, 1)),
            this
          );
        }
        _set(e, t, r, n) {
          (this.r = e), (this.g = t), (this.b = r), (this.a = n);
        }
      }
      (u.prototype.declaredClass = 'esri.Color'),
        (n = u || (u = {})),
        ((s = n.AlphaMode || (n.AlphaMode = {}))[(s.ALWAYS = 0)] = 'ALWAYS'),
        (s[(s.UNLESS_OPAQUE = 1)] = 'UNLESS_OPAQUE');
      const f = u;
    },
    99880: (e, t, r) => {
      r.d(t, { V: () => l });
      var n = r(68773),
        s = (r(3172), r(20102)),
        i = r(92604),
        a = r(17452);
      const o = i.Z.getLogger('esri.assets');
      function l(e) {
        if (!n.Z.assetsPath)
          throw (
            (o.errorOnce(
              'The API assets location needs to be set using config.assetsPath. More information: https://arcg.is/1OzLe50',
            ),
            new s.Z('assets:path-not-set', 'config.assetsPath is not set'))
          );
        return (0, a.v_)(n.Z.assetsPath, e);
      }
    },
    46851: (e, t, r) => {
      r.d(t, { E: () => n, R: () => s });
      const n = 1e-6,
        s = Math.random,
        i = Math.PI / 180,
        a = 180 / Math.PI;
      Object.freeze({
        __proto__: null,
        EPSILON: n,
        RANDOM: s,
        toRadian: function (e) {
          return e * i;
        },
        toDegree: function (e) {
          return e * a;
        },
        equals: function (e, t) {
          return Math.abs(e - t) <= n * Math.max(1, Math.abs(e), Math.abs(t));
        },
      });
    },
    17896: (e, t, r) => {
      r.d(t, {
        E: () => u,
        a: () => f,
        b: () => l,
        c: () => x,
        d: () => m,
        e: () => _,
        f: () => c,
        g: () => a,
        h: () => p,
        i: () => d,
        k: () => v,
        l: () => i,
        m: () => b,
        n: () => y,
        p: () => g,
        q: () => I,
        r: () => T,
        s: () => o,
        t: () => w,
        u: () => D,
      });
      var n = r(65617),
        s = r(46851);
      function i(e) {
        const t = e[0],
          r = e[1],
          n = e[2];
        return Math.sqrt(t * t + r * r + n * n);
      }
      function a(e, t) {
        return (e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), e;
      }
      function o(e, t, r, n) {
        return (e[0] = t), (e[1] = r), (e[2] = n), e;
      }
      function l(e, t, r) {
        return (
          (e[0] = t[0] + r[0]), (e[1] = t[1] + r[1]), (e[2] = t[2] + r[2]), e
        );
      }
      function c(e, t, r) {
        return (
          (e[0] = t[0] - r[0]), (e[1] = t[1] - r[1]), (e[2] = t[2] - r[2]), e
        );
      }
      function h(e, t, r) {
        return (
          (e[0] = t[0] * r[0]), (e[1] = t[1] * r[1]), (e[2] = t[2] * r[2]), e
        );
      }
      function u(e, t, r) {
        return (
          (e[0] = t[0] / r[0]), (e[1] = t[1] / r[1]), (e[2] = t[2] / r[2]), e
        );
      }
      function f(e, t, r) {
        return (e[0] = t[0] * r), (e[1] = t[1] * r), (e[2] = t[2] * r), e;
      }
      function d(e, t) {
        const r = t[0] - e[0],
          n = t[1] - e[1],
          s = t[2] - e[2];
        return Math.sqrt(r * r + n * n + s * s);
      }
      function p(e, t) {
        const r = t[0] - e[0],
          n = t[1] - e[1],
          s = t[2] - e[2];
        return r * r + n * n + s * s;
      }
      function g(e) {
        const t = e[0],
          r = e[1],
          n = e[2];
        return t * t + r * r + n * n;
      }
      function y(e, t) {
        const r = t[0],
          n = t[1],
          s = t[2];
        let i = r * r + n * n + s * s;
        return (
          i > 0 &&
            ((i = 1 / Math.sqrt(i)),
            (e[0] = t[0] * i),
            (e[1] = t[1] * i),
            (e[2] = t[2] * i)),
          e
        );
      }
      function m(e, t) {
        return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
      }
      function x(e, t, r) {
        const n = t[0],
          s = t[1],
          i = t[2],
          a = r[0],
          o = r[1],
          l = r[2];
        return (
          (e[0] = s * l - i * o),
          (e[1] = i * a - n * l),
          (e[2] = n * o - s * a),
          e
        );
      }
      function _(e, t, r, n) {
        const s = t[0],
          i = t[1],
          a = t[2];
        return (
          (e[0] = s + n * (r[0] - s)),
          (e[1] = i + n * (r[1] - i)),
          (e[2] = a + n * (r[2] - a)),
          e
        );
      }
      function b(e, t, r) {
        const n = t[0],
          s = t[1],
          i = t[2];
        return (
          (e[0] = r[0] * n + r[4] * s + r[8] * i + r[12]),
          (e[1] = r[1] * n + r[5] * s + r[9] * i + r[13]),
          (e[2] = r[2] * n + r[6] * s + r[10] * i + r[14]),
          e
        );
      }
      function w(e, t, r) {
        const n = t[0],
          s = t[1],
          i = t[2];
        return (
          (e[0] = n * r[0] + s * r[3] + i * r[6]),
          (e[1] = n * r[1] + s * r[4] + i * r[7]),
          (e[2] = n * r[2] + s * r[5] + i * r[8]),
          e
        );
      }
      function I(e, t, r) {
        const n = r[0],
          s = r[1],
          i = r[2],
          a = r[3],
          o = t[0],
          l = t[1],
          c = t[2];
        let h = s * c - i * l,
          u = i * o - n * c,
          f = n * l - s * o,
          d = s * f - i * u,
          p = i * h - n * f,
          g = n * u - s * h;
        const y = 2 * a;
        return (
          (h *= y),
          (u *= y),
          (f *= y),
          (d *= 2),
          (p *= 2),
          (g *= 2),
          (e[0] = o + h + d),
          (e[1] = l + u + p),
          (e[2] = c + f + g),
          e
        );
      }
      const M = (0, n.c)(),
        k = (0, n.c)();
      function v(e, t) {
        return e[0] === t[0] && e[1] === t[1] && e[2] === t[2];
      }
      function T(e, t, r) {
        const n = r[0] - t[0],
          s = r[1] - t[1],
          i = r[2] - t[2];
        let a = n * n + s * s + i * i;
        return a > 0
          ? ((a = 1 / Math.sqrt(a)),
            (e[0] = n * a),
            (e[1] = s * a),
            (e[2] = i * a),
            e)
          : ((e[0] = 0), (e[1] = 0), (e[2] = 0), e);
      }
      const P = c,
        L = h,
        A = u,
        E = d,
        S = p,
        D = i,
        B = g;
      Object.freeze({
        __proto__: null,
        length: i,
        copy: a,
        set: o,
        add: l,
        subtract: c,
        multiply: h,
        divide: u,
        ceil: function (e, t) {
          return (
            (e[0] = Math.ceil(t[0])),
            (e[1] = Math.ceil(t[1])),
            (e[2] = Math.ceil(t[2])),
            e
          );
        },
        floor: function (e, t) {
          return (
            (e[0] = Math.floor(t[0])),
            (e[1] = Math.floor(t[1])),
            (e[2] = Math.floor(t[2])),
            e
          );
        },
        min: function (e, t, r) {
          return (
            (e[0] = Math.min(t[0], r[0])),
            (e[1] = Math.min(t[1], r[1])),
            (e[2] = Math.min(t[2], r[2])),
            e
          );
        },
        max: function (e, t, r) {
          return (
            (e[0] = Math.max(t[0], r[0])),
            (e[1] = Math.max(t[1], r[1])),
            (e[2] = Math.max(t[2], r[2])),
            e
          );
        },
        round: function (e, t) {
          return (
            (e[0] = Math.round(t[0])),
            (e[1] = Math.round(t[1])),
            (e[2] = Math.round(t[2])),
            e
          );
        },
        scale: f,
        scaleAndAdd: function (e, t, r, n) {
          return (
            (e[0] = t[0] + r[0] * n),
            (e[1] = t[1] + r[1] * n),
            (e[2] = t[2] + r[2] * n),
            e
          );
        },
        distance: d,
        squaredDistance: p,
        squaredLength: g,
        negate: function (e, t) {
          return (e[0] = -t[0]), (e[1] = -t[1]), (e[2] = -t[2]), e;
        },
        inverse: function (e, t) {
          return (e[0] = 1 / t[0]), (e[1] = 1 / t[1]), (e[2] = 1 / t[2]), e;
        },
        normalize: y,
        dot: m,
        cross: x,
        lerp: _,
        hermite: function (e, t, r, n, s, i) {
          const a = i * i,
            o = a * (2 * i - 3) + 1,
            l = a * (i - 2) + i,
            c = a * (i - 1),
            h = a * (3 - 2 * i);
          return (
            (e[0] = t[0] * o + r[0] * l + n[0] * c + s[0] * h),
            (e[1] = t[1] * o + r[1] * l + n[1] * c + s[1] * h),
            (e[2] = t[2] * o + r[2] * l + n[2] * c + s[2] * h),
            e
          );
        },
        bezier: function (e, t, r, n, s, i) {
          const a = 1 - i,
            o = a * a,
            l = i * i,
            c = o * a,
            h = 3 * i * o,
            u = 3 * l * a,
            f = l * i;
          return (
            (e[0] = t[0] * c + r[0] * h + n[0] * u + s[0] * f),
            (e[1] = t[1] * c + r[1] * h + n[1] * u + s[1] * f),
            (e[2] = t[2] * c + r[2] * h + n[2] * u + s[2] * f),
            e
          );
        },
        random: function (e, t) {
          t = t || 1;
          const r = 2 * (0, s.R)() * Math.PI,
            n = 2 * (0, s.R)() - 1,
            i = Math.sqrt(1 - n * n) * t;
          return (
            (e[0] = Math.cos(r) * i),
            (e[1] = Math.sin(r) * i),
            (e[2] = n * t),
            e
          );
        },
        transformMat4: b,
        transformMat3: w,
        transformQuat: I,
        rotateX: function (e, t, r, n) {
          const s = [],
            i = [];
          return (
            (s[0] = t[0] - r[0]),
            (s[1] = t[1] - r[1]),
            (s[2] = t[2] - r[2]),
            (i[0] = s[0]),
            (i[1] = s[1] * Math.cos(n) - s[2] * Math.sin(n)),
            (i[2] = s[1] * Math.sin(n) + s[2] * Math.cos(n)),
            (e[0] = i[0] + r[0]),
            (e[1] = i[1] + r[1]),
            (e[2] = i[2] + r[2]),
            e
          );
        },
        rotateY: function (e, t, r, n) {
          const s = [],
            i = [];
          return (
            (s[0] = t[0] - r[0]),
            (s[1] = t[1] - r[1]),
            (s[2] = t[2] - r[2]),
            (i[0] = s[2] * Math.sin(n) + s[0] * Math.cos(n)),
            (i[1] = s[1]),
            (i[2] = s[2] * Math.cos(n) - s[0] * Math.sin(n)),
            (e[0] = i[0] + r[0]),
            (e[1] = i[1] + r[1]),
            (e[2] = i[2] + r[2]),
            e
          );
        },
        rotateZ: function (e, t, r, n) {
          const s = [],
            i = [];
          return (
            (s[0] = t[0] - r[0]),
            (s[1] = t[1] - r[1]),
            (s[2] = t[2] - r[2]),
            (i[0] = s[0] * Math.cos(n) - s[1] * Math.sin(n)),
            (i[1] = s[0] * Math.sin(n) + s[1] * Math.cos(n)),
            (i[2] = s[2]),
            (e[0] = i[0] + r[0]),
            (e[1] = i[1] + r[1]),
            (e[2] = i[2] + r[2]),
            e
          );
        },
        angle: function (e, t) {
          a(M, e), a(k, t), y(M, M), y(k, k);
          const r = m(M, k);
          return r > 1 ? 0 : r < -1 ? Math.PI : Math.acos(r);
        },
        str: function (e) {
          return 'vec3(' + e[0] + ', ' + e[1] + ', ' + e[2] + ')';
        },
        exactEquals: v,
        equals: function (e, t) {
          if (e === t) return !0;
          const r = e[0],
            n = e[1],
            i = e[2],
            a = t[0],
            o = t[1],
            l = t[2];
          return (
            Math.abs(r - a) <= s.E * Math.max(1, Math.abs(r), Math.abs(a)) &&
            Math.abs(n - o) <= s.E * Math.max(1, Math.abs(n), Math.abs(o)) &&
            Math.abs(i - l) <= s.E * Math.max(1, Math.abs(i), Math.abs(l))
          );
        },
        direction: T,
        sub: P,
        mul: L,
        div: A,
        dist: E,
        sqrDist: S,
        len: D,
        sqrLen: B,
      });
    },
    65617: (e, t, r) => {
      function n() {
        return [0, 0, 0];
      }
      function s(e) {
        return [e[0], e[1], e[2]];
      }
      function i(e, t, r) {
        return [e, t, r];
      }
      function a(e) {
        const t = [0, 0, 0],
          r = Math.min(3, e.length);
        for (let n = 0; n < r; ++n) t[n] = e[n];
        return t;
      }
      function o(e, t) {
        return new Float64Array(e, t, 3);
      }
      function l() {
        return i(1, 1, 1);
      }
      function c() {
        return i(1, 0, 0);
      }
      function h() {
        return i(0, 1, 0);
      }
      function u() {
        return i(0, 0, 1);
      }
      r.d(t, {
        O: () => d,
        Z: () => f,
        a: () => s,
        b: () => o,
        c: () => n,
        d: () => a,
        f: () => i,
      });
      const f = [0, 0, 0],
        d = l(),
        p = c(),
        g = h(),
        y = u();
      Object.freeze({
        __proto__: null,
        create: n,
        clone: s,
        fromValues: i,
        fromArray: a,
        createView: o,
        zeros: function () {
          return [0, 0, 0];
        },
        ones: l,
        unitX: c,
        unitY: h,
        unitZ: u,
        ZEROS: f,
        ONES: d,
        UNIT_X: p,
        UNIT_Y: g,
        UNIT_Z: y,
      });
    },
    98766: (e, t, r) => {
      r.d(t, {
        a: () => a,
        b: () => h,
        c: () => s,
        d: () => y,
        e: () => d,
        f: () => p,
        g: () => x,
        h: () => _,
        l: () => m,
        n: () => g,
        s: () => i,
      });
      var n = r(46851);
      function s(e, t) {
        return (e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), (e[3] = t[3]), e;
      }
      function i(e, t, r, n, s) {
        return (e[0] = t), (e[1] = r), (e[2] = n), (e[3] = s), e;
      }
      function a(e, t, r) {
        return (
          (e[0] = t[0] + r[0]),
          (e[1] = t[1] + r[1]),
          (e[2] = t[2] + r[2]),
          (e[3] = t[3] + r[3]),
          e
        );
      }
      function o(e, t, r) {
        return (
          (e[0] = t[0] - r[0]),
          (e[1] = t[1] - r[1]),
          (e[2] = t[2] - r[2]),
          (e[3] = t[3] - r[3]),
          e
        );
      }
      function l(e, t, r) {
        return (
          (e[0] = t[0] * r[0]),
          (e[1] = t[1] * r[1]),
          (e[2] = t[2] * r[2]),
          (e[3] = t[3] * r[3]),
          e
        );
      }
      function c(e, t, r) {
        return (
          (e[0] = t[0] / r[0]),
          (e[1] = t[1] / r[1]),
          (e[2] = t[2] / r[2]),
          (e[3] = t[3] / r[3]),
          e
        );
      }
      function h(e, t, r) {
        return (
          (e[0] = t[0] * r),
          (e[1] = t[1] * r),
          (e[2] = t[2] * r),
          (e[3] = t[3] * r),
          e
        );
      }
      function u(e, t) {
        const r = t[0] - e[0],
          n = t[1] - e[1],
          s = t[2] - e[2],
          i = t[3] - e[3];
        return Math.sqrt(r * r + n * n + s * s + i * i);
      }
      function f(e, t) {
        const r = t[0] - e[0],
          n = t[1] - e[1],
          s = t[2] - e[2],
          i = t[3] - e[3];
        return r * r + n * n + s * s + i * i;
      }
      function d(e) {
        const t = e[0],
          r = e[1],
          n = e[2],
          s = e[3];
        return Math.sqrt(t * t + r * r + n * n + s * s);
      }
      function p(e) {
        const t = e[0],
          r = e[1],
          n = e[2],
          s = e[3];
        return t * t + r * r + n * n + s * s;
      }
      function g(e, t) {
        const r = t[0],
          n = t[1],
          s = t[2],
          i = t[3];
        let a = r * r + n * n + s * s + i * i;
        return (
          a > 0 &&
            ((a = 1 / Math.sqrt(a)),
            (e[0] = r * a),
            (e[1] = n * a),
            (e[2] = s * a),
            (e[3] = i * a)),
          e
        );
      }
      function y(e, t) {
        return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
      }
      function m(e, t, r, n) {
        const s = t[0],
          i = t[1],
          a = t[2],
          o = t[3];
        return (
          (e[0] = s + n * (r[0] - s)),
          (e[1] = i + n * (r[1] - i)),
          (e[2] = a + n * (r[2] - a)),
          (e[3] = o + n * (r[3] - o)),
          e
        );
      }
      function x(e, t) {
        return e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3];
      }
      function _(e, t) {
        const r = e[0],
          s = e[1],
          i = e[2],
          a = e[3],
          o = t[0],
          l = t[1],
          c = t[2],
          h = t[3];
        return (
          Math.abs(r - o) <= n.E * Math.max(1, Math.abs(r), Math.abs(o)) &&
          Math.abs(s - l) <= n.E * Math.max(1, Math.abs(s), Math.abs(l)) &&
          Math.abs(i - c) <= n.E * Math.max(1, Math.abs(i), Math.abs(c)) &&
          Math.abs(a - h) <= n.E * Math.max(1, Math.abs(a), Math.abs(h))
        );
      }
      const b = o,
        w = l,
        I = c,
        M = u,
        k = f,
        v = d,
        T = p;
      Object.freeze({
        __proto__: null,
        copy: s,
        set: i,
        add: a,
        subtract: o,
        multiply: l,
        divide: c,
        ceil: function (e, t) {
          return (
            (e[0] = Math.ceil(t[0])),
            (e[1] = Math.ceil(t[1])),
            (e[2] = Math.ceil(t[2])),
            (e[3] = Math.ceil(t[3])),
            e
          );
        },
        floor: function (e, t) {
          return (
            (e[0] = Math.floor(t[0])),
            (e[1] = Math.floor(t[1])),
            (e[2] = Math.floor(t[2])),
            (e[3] = Math.floor(t[3])),
            e
          );
        },
        min: function (e, t, r) {
          return (
            (e[0] = Math.min(t[0], r[0])),
            (e[1] = Math.min(t[1], r[1])),
            (e[2] = Math.min(t[2], r[2])),
            (e[3] = Math.min(t[3], r[3])),
            e
          );
        },
        max: function (e, t, r) {
          return (
            (e[0] = Math.max(t[0], r[0])),
            (e[1] = Math.max(t[1], r[1])),
            (e[2] = Math.max(t[2], r[2])),
            (e[3] = Math.max(t[3], r[3])),
            e
          );
        },
        round: function (e, t) {
          return (
            (e[0] = Math.round(t[0])),
            (e[1] = Math.round(t[1])),
            (e[2] = Math.round(t[2])),
            (e[3] = Math.round(t[3])),
            e
          );
        },
        scale: h,
        scaleAndAdd: function (e, t, r, n) {
          return (
            (e[0] = t[0] + r[0] * n),
            (e[1] = t[1] + r[1] * n),
            (e[2] = t[2] + r[2] * n),
            (e[3] = t[3] + r[3] * n),
            e
          );
        },
        distance: u,
        squaredDistance: f,
        length: d,
        squaredLength: p,
        negate: function (e, t) {
          return (
            (e[0] = -t[0]), (e[1] = -t[1]), (e[2] = -t[2]), (e[3] = -t[3]), e
          );
        },
        inverse: function (e, t) {
          return (
            (e[0] = 1 / t[0]),
            (e[1] = 1 / t[1]),
            (e[2] = 1 / t[2]),
            (e[3] = 1 / t[3]),
            e
          );
        },
        normalize: g,
        dot: y,
        lerp: m,
        random: function (e, t) {
          let r, s, i, a, o, l;
          t = t || 1;
          do {
            (r = 2 * (0, n.R)() - 1),
              (s = 2 * (0, n.R)() - 1),
              (o = r * r + s * s);
          } while (o >= 1);
          do {
            (i = 2 * (0, n.R)() - 1),
              (a = 2 * (0, n.R)() - 1),
              (l = i * i + a * a);
          } while (l >= 1);
          const c = Math.sqrt((1 - o) / l);
          return (
            (e[0] = t * r),
            (e[1] = t * s),
            (e[2] = t * i * c),
            (e[3] = t * a * c),
            e
          );
        },
        transformMat4: function (e, t, r) {
          const n = t[0],
            s = t[1],
            i = t[2],
            a = t[3];
          return (
            (e[0] = r[0] * n + r[4] * s + r[8] * i + r[12] * a),
            (e[1] = r[1] * n + r[5] * s + r[9] * i + r[13] * a),
            (e[2] = r[2] * n + r[6] * s + r[10] * i + r[14] * a),
            (e[3] = r[3] * n + r[7] * s + r[11] * i + r[15] * a),
            e
          );
        },
        transformQuat: function (e, t, r) {
          const n = t[0],
            s = t[1],
            i = t[2],
            a = r[0],
            o = r[1],
            l = r[2],
            c = r[3],
            h = c * n + o * i - l * s,
            u = c * s + l * n - a * i,
            f = c * i + a * s - o * n,
            d = -a * n - o * s - l * i;
          return (
            (e[0] = h * c + d * -a + u * -l - f * -o),
            (e[1] = u * c + d * -o + f * -a - h * -l),
            (e[2] = f * c + d * -l + h * -o - u * -a),
            (e[3] = t[3]),
            e
          );
        },
        str: function (e) {
          return 'vec4(' + e[0] + ', ' + e[1] + ', ' + e[2] + ', ' + e[3] + ')';
        },
        exactEquals: x,
        equals: _,
        sub: b,
        mul: w,
        div: I,
        dist: M,
        sqrDist: k,
        len: v,
        sqrLen: T,
      });
    },
    35270: (e, t, r) => {
      r.d(t, {
        h$: () => i,
        VL: () => a,
        rW: () => c,
        B7: () => l,
        St: () => s,
      });
      const n = {
        transparent: [0, 0, 0, 0],
        black: [0, 0, 0, 1],
        silver: [192, 192, 192, 1],
        gray: [128, 128, 128, 1],
        white: [255, 255, 255, 1],
        maroon: [128, 0, 0, 1],
        red: [255, 0, 0, 1],
        purple: [128, 0, 128, 1],
        fuchsia: [255, 0, 255, 1],
        green: [0, 128, 0, 1],
        lime: [0, 255, 0, 1],
        olive: [128, 128, 0, 1],
        yellow: [255, 255, 0, 1],
        navy: [0, 0, 128, 1],
        blue: [0, 0, 255, 1],
        teal: [0, 128, 128, 1],
        aqua: [0, 255, 255, 1],
        aliceblue: [240, 248, 255, 1],
        antiquewhite: [250, 235, 215, 1],
        aquamarine: [127, 255, 212, 1],
        azure: [240, 255, 255, 1],
        beige: [245, 245, 220, 1],
        bisque: [255, 228, 196, 1],
        blanchedalmond: [255, 235, 205, 1],
        blueviolet: [138, 43, 226, 1],
        brown: [165, 42, 42, 1],
        burlywood: [222, 184, 135, 1],
        cadetblue: [95, 158, 160, 1],
        chartreuse: [127, 255, 0, 1],
        chocolate: [210, 105, 30, 1],
        coral: [255, 127, 80, 1],
        cornflowerblue: [100, 149, 237, 1],
        cornsilk: [255, 248, 220, 1],
        crimson: [220, 20, 60, 1],
        cyan: [0, 255, 255, 1],
        darkblue: [0, 0, 139, 1],
        darkcyan: [0, 139, 139, 1],
        darkgoldenrod: [184, 134, 11, 1],
        darkgray: [169, 169, 169, 1],
        darkgreen: [0, 100, 0, 1],
        darkgrey: [169, 169, 169, 1],
        darkkhaki: [189, 183, 107, 1],
        darkmagenta: [139, 0, 139, 1],
        darkolivegreen: [85, 107, 47, 1],
        darkorange: [255, 140, 0, 1],
        darkorchid: [153, 50, 204, 1],
        darkred: [139, 0, 0, 1],
        darksalmon: [233, 150, 122, 1],
        darkseagreen: [143, 188, 143, 1],
        darkslateblue: [72, 61, 139, 1],
        darkslategray: [47, 79, 79, 1],
        darkslategrey: [47, 79, 79, 1],
        darkturquoise: [0, 206, 209, 1],
        darkviolet: [148, 0, 211, 1],
        deeppink: [255, 20, 147, 1],
        deepskyblue: [0, 191, 255, 1],
        dimgray: [105, 105, 105, 1],
        dimgrey: [105, 105, 105, 1],
        dodgerblue: [30, 144, 255, 1],
        firebrick: [178, 34, 34, 1],
        floralwhite: [255, 250, 240, 1],
        forestgreen: [34, 139, 34, 1],
        gainsboro: [220, 220, 220, 1],
        ghostwhite: [248, 248, 255, 1],
        gold: [255, 215, 0, 1],
        goldenrod: [218, 165, 32, 1],
        greenyellow: [173, 255, 47, 1],
        grey: [128, 128, 128, 1],
        honeydew: [240, 255, 240, 1],
        hotpink: [255, 105, 180, 1],
        indianred: [205, 92, 92, 1],
        indigo: [75, 0, 130, 1],
        ivory: [255, 255, 240, 1],
        khaki: [240, 230, 140, 1],
        lavender: [230, 230, 250, 1],
        lavenderblush: [255, 240, 245, 1],
        lawngreen: [124, 252, 0, 1],
        lemonchiffon: [255, 250, 205, 1],
        lightblue: [173, 216, 230, 1],
        lightcoral: [240, 128, 128, 1],
        lightcyan: [224, 255, 255, 1],
        lightgoldenrodyellow: [250, 250, 210, 1],
        lightgray: [211, 211, 211, 1],
        lightgreen: [144, 238, 144, 1],
        lightgrey: [211, 211, 211, 1],
        lightpink: [255, 182, 193, 1],
        lightsalmon: [255, 160, 122, 1],
        lightseagreen: [32, 178, 170, 1],
        lightskyblue: [135, 206, 250, 1],
        lightslategray: [119, 136, 153, 1],
        lightslategrey: [119, 136, 153, 1],
        lightsteelblue: [176, 196, 222, 1],
        lightyellow: [255, 255, 224, 1],
        limegreen: [50, 205, 50, 1],
        linen: [250, 240, 230, 1],
        magenta: [255, 0, 255, 1],
        mediumaquamarine: [102, 205, 170, 1],
        mediumblue: [0, 0, 205, 1],
        mediumorchid: [186, 85, 211, 1],
        mediumpurple: [147, 112, 219, 1],
        mediumseagreen: [60, 179, 113, 1],
        mediumslateblue: [123, 104, 238, 1],
        mediumspringgreen: [0, 250, 154, 1],
        mediumturquoise: [72, 209, 204, 1],
        mediumvioletred: [199, 21, 133, 1],
        midnightblue: [25, 25, 112, 1],
        mintcream: [245, 255, 250, 1],
        mistyrose: [255, 228, 225, 1],
        moccasin: [255, 228, 181, 1],
        navajowhite: [255, 222, 173, 1],
        oldlace: [253, 245, 230, 1],
        olivedrab: [107, 142, 35, 1],
        orange: [255, 165, 0, 1],
        orangered: [255, 69, 0, 1],
        orchid: [218, 112, 214, 1],
        palegoldenrod: [238, 232, 170, 1],
        palegreen: [152, 251, 152, 1],
        paleturquoise: [175, 238, 238, 1],
        palevioletred: [219, 112, 147, 1],
        papayawhip: [255, 239, 213, 1],
        peachpuff: [255, 218, 185, 1],
        peru: [205, 133, 63, 1],
        pink: [255, 192, 203, 1],
        plum: [221, 160, 221, 1],
        powderblue: [176, 224, 230, 1],
        rebeccapurple: [102, 51, 153, 1],
        rosybrown: [188, 143, 143, 1],
        royalblue: [65, 105, 225, 1],
        saddlebrown: [139, 69, 19, 1],
        salmon: [250, 128, 114, 1],
        sandybrown: [244, 164, 96, 1],
        seagreen: [46, 139, 87, 1],
        seashell: [255, 245, 238, 1],
        sienna: [160, 82, 45, 1],
        skyblue: [135, 206, 235, 1],
        slateblue: [106, 90, 205, 1],
        slategray: [112, 128, 144, 1],
        slategrey: [112, 128, 144, 1],
        snow: [255, 250, 250, 1],
        springgreen: [0, 255, 127, 1],
        steelblue: [70, 130, 180, 1],
        tan: [210, 180, 140, 1],
        thistle: [216, 191, 216, 1],
        tomato: [255, 99, 71, 1],
        turquoise: [64, 224, 208, 1],
        violet: [238, 130, 238, 1],
        wheat: [245, 222, 179, 1],
        whitesmoke: [245, 245, 245, 1],
        yellowgreen: [154, 205, 50, 1],
      };
      function s(e) {
        return n[e] || n[e.toLowerCase()];
      }
      function i(e) {
        var t;
        return null != (t = n[e]) ? t : n[e.toLowerCase()];
      }
      function a(e) {
        return [...i(e)];
      }
      function o(e, t, r) {
        r < 0 && ++r, r > 1 && --r;
        const n = 6 * r;
        return n < 1
          ? e + (t - e) * n
          : 2 * r < 1
          ? t
          : 3 * r < 2
          ? e + (t - e) * (2 / 3 - r) * 6
          : e;
      }
      function l(e, t, r, n = 1) {
        const s = (((e % 360) + 360) % 360) / 360,
          i = r <= 0.5 ? r * (t + 1) : r + t - r * t,
          a = 2 * r - i;
        return [
          Math.round(255 * o(a, i, s + 1 / 3)),
          Math.round(255 * o(a, i, s)),
          Math.round(255 * o(a, i, s - 1 / 3)),
          n,
        ];
      }
      function c(e) {
        const t = e.length > 5,
          r = t ? 8 : 4,
          n = (1 << r) - 1,
          s = t ? 1 : 17,
          i = t ? 9 === e.length : 5 === e.length;
        let a = Number('0x' + e.substr(1));
        if (isNaN(a)) return null;
        const o = [0, 0, 0, 1];
        let l;
        return (
          i && ((l = a & n), (a >>= r), (o[3] = (s * l) / 255)),
          (l = a & n),
          (a >>= r),
          (o[2] = s * l),
          (l = a & n),
          (a >>= r),
          (o[1] = s * l),
          (l = a & n),
          (a >>= r),
          (o[0] = s * l),
          o
        );
      }
    },
    3894: (e, t, r) => {
      r.d(t, { Z: () => i });
      var n = r(71143);
      function s(e) {
        e.length = 0;
      }
      class i {
        constructor(e = 50, t = 50) {
          this._pool = new n.Z(Array, void 0, s, t, e);
        }
        acquire() {
          return this._pool.acquire();
        }
        release(e) {
          this._pool.release(e);
        }
        prune() {
          this._pool.prune(0);
        }
        static acquire() {
          return a.acquire();
        }
        static release(e) {
          return a.release(e);
        }
        static prune() {
          a.prune();
        }
      }
      const a = new i(100);
    },
    30175: (e, t, r) => {
      function n(e, t, r) {
        const n = e.get(t);
        if (void 0 !== n) return n;
        const s = r();
        return e.set(t, s), s;
      }
      r.d(t, { s1: () => n });
    },
    71143: (e, t, r) => {
      r.d(t, { Z: () => n });
      class n {
        constructor(e, t, r, n = 1, s = 0) {
          if (
            ((this.ctor = e),
            (this.acquireFunction = t),
            (this.releaseFunction = r),
            (this.allocationSize = n),
            (this._pool = new Array(s)),
            (this._initialSize = s),
            this.ctor)
          )
            for (let e = 0; e < s; e++) this._pool[e] = new this.ctor();
          this.allocationSize = Math.max(n, 1);
        }
        destroy() {
          this.prune(0);
        }
        acquire(...e) {
          let t;
          if (n.test.disabled) t = new this.ctor();
          else {
            if (0 === this._pool.length) {
              const e = this.allocationSize;
              for (let t = 0; t < e; t++) this._pool[t] = new this.ctor();
            }
            t = this._pool.pop();
          }
          return (
            this.acquireFunction
              ? this.acquireFunction(t, ...e)
              : (function (e) {
                  return e && e.acquire && 'function' == typeof e.acquire;
                })(t) && t.acquire(...e),
            t
          );
        }
        release(e) {
          var t;
          e &&
            !n.test.disabled &&
            (this.releaseFunction
              ? this.releaseFunction(e)
              : (t = e) &&
                t.release &&
                'function' == typeof t.release &&
                e.release(),
            this._pool.push(e));
        }
        prune(e = this._initialSize) {
          if (!(e >= this._pool.length)) {
            for (let t = e; t < this._pool.length; ++t) {
              const e = this._pool[t];
              this._dispose(e);
            }
            this._pool.length = e;
          }
        }
        _dispose(e) {
          e.dispose && 'function' == typeof e.dispose && e.dispose();
        }
      }
      n.test = { disabled: !1 };
    },
    75215: (e, t, r) => {
      r.d(t, {
        z8: () => A,
        rY: () => I,
        Ls: () => w,
        TJ: () => y,
        vU: () => h,
        sY: () => D,
        di: () => v,
        Iu: () => k,
        q9: () => c,
        i$: () => P,
        N7: () => L,
        Zs: () => l,
        se: () => b,
        AY: () => S,
        gB: () => T,
        V5: () => E,
      }),
        r(80442);
      var n = r(92604),
        s = r(30175);
      const i = n.Z.getLogger('esri.core.Accessor');
      function a(e) {
        return null == e ? e : new Date(e);
      }
      function o(e) {
        return null == e ? e : !!e;
      }
      function l(e) {
        return null == e ? e : e.toString();
      }
      function c(e) {
        return null == e ? e : ((e = parseFloat(e)), isNaN(e) ? 0 : e);
      }
      function h(e) {
        return null == e ? e : Math.round(parseFloat(e));
      }
      function u(e) {
        return (
          e && e.constructor && void 0 !== e.constructor.__accessorMetadata__
        );
      }
      function f(e, t) {
        return null != t && e && !(t instanceof e);
      }
      function d(e) {
        return e && 'isCollection' in e;
      }
      function p(e) {
        return e && e.Type
          ? 'function' == typeof e.Type
            ? e.Type
            : e.Type.base
          : null;
      }
      function g(e, t) {
        return (
          !!u(t) &&
          (i.error(
            'Accessor#set',
            "Assigning an instance of '" +
              (t.declaredClass || 'unknown') +
              "' which is not a subclass of '" +
              m(e) +
              "'",
          ),
          !0)
        );
      }
      function y(e, t) {
        return null == t
          ? t
          : d(e)
          ? (function (e, t) {
              if (!t || !t.constructor || !d(t.constructor))
                return g(e, t) ? t : new e(t);
              const r = p(e.prototype.itemType),
                n = p(t.constructor.prototype.itemType);
              return r
                ? n
                  ? r === n
                    ? t
                    : r.prototype.isPrototypeOf(n.prototype)
                    ? new e(t)
                    : (g(e, t), t)
                  : new e(t)
                : t;
            })(e, t)
          : f(e, t)
          ? g(e, t)
            ? t
            : new e(t)
          : t;
      }
      function m(e) {
        return (e && e.prototype && e.prototype.declaredClass) || 'unknown';
      }
      const x = new WeakMap();
      function _(e) {
        switch (e) {
          case Number:
            return c;
          case A:
            return h;
          case Boolean:
            return o;
          case String:
            return l;
          case Date:
            return a;
          default:
            return (0, s.s1)(x, e, () => y.bind(null, e));
        }
      }
      function b(e, t) {
        const r = _(e);
        return 1 === arguments.length ? r : r(t);
      }
      function w(e, t, r) {
        return 1 === arguments.length
          ? w.bind(null, e)
          : t
          ? Array.isArray(t)
            ? t.map((t) => e(t, r))
            : [e(t, r)]
          : t;
      }
      function I(e, t) {
        return 1 === arguments.length
          ? w(b.bind(null, e))
          : w(b.bind(null, e), t);
      }
      function M(e, t, r) {
        return 0 !== t && Array.isArray(r)
          ? r.map((r) => M(e, t - 1, r))
          : e(r);
      }
      function k(e, t, r) {
        if (2 === arguments.length) return k.bind(null, e, t);
        if (!r) return r;
        let n = t,
          s = (r = M(e, t, r));
        for (; n > 0 && Array.isArray(s); ) n--, (s = s[0]);
        if (void 0 !== s) for (let e = 0; e < n; e++) r = [r];
        return r;
      }
      function v(e, t, r) {
        return 2 === arguments.length
          ? k(b.bind(null, e), t)
          : k(b.bind(null, e), t, r);
      }
      function T(e) {
        return (
          !!Array.isArray(e) &&
          !e.some((t) => {
            const r = typeof t;
            return !(
              'string' === r ||
              'number' === r ||
              ('function' === r && e.length > 1)
            );
          })
        );
      }
      function P(e, t) {
        if (2 === arguments.length) return P(e).call(null, t);
        const r = new Set(),
          n = e.filter((e) => 'function' != typeof e),
          s = e.filter((e) => 'function' == typeof e);
        for (const t of e)
          ('string' != typeof t && 'number' != typeof t) || r.add(t);
        let a = null,
          o = null;
        return (e, t) => {
          if (null == e) return e;
          const l = typeof e,
            c = 'string' === l || 'number' === l;
          return (c &&
            (r.has(e) ||
              s.some(
                (e) =>
                  ('string' === l && e === String) ||
                  ('number' === l && e === Number),
              ))) ||
            ('object' === l && s.some((t) => !f(e, t)))
            ? e
            : (c && n.length
                ? (a ||
                    (a = n
                      .map((e) => ('string' == typeof e ? `'${e}'` : `${e}`))
                      .join(', ')),
                  i.error(
                    'Accessor#set',
                    `'${e}' is not a valid value for this property, only the following values are valid: ${a}`,
                  ))
                : 'object' == typeof e && s.length
                ? (o || (o = s.map((e) => m(e)).join(', ')),
                  i.error(
                    'Accessor#set',
                    `'${e}' is not a valid value for this property, value must be one of ${o}`,
                  ))
                : i.error(
                    'Accessor#set',
                    `'${e}' is not a valid value for this property`,
                  ),
              t && (t.valid = !1),
              null);
        };
      }
      function L(e, t) {
        if (2 === arguments.length) return L(e).call(null, t);
        const r = {},
          n = [],
          s = [];
        for (const t in e.typeMap) {
          const i = e.typeMap[t];
          (r[t] = b(i)), n.push(m(i)), s.push(t);
        }
        const a = () => `'${n.join("', '")}'`,
          o = () => `'${s.join("', '")}'`,
          l = 'string' == typeof e.key ? (t) => t[e.key] : e.key;
        return (t) => {
          if (e.base && !f(e.base, t)) return t;
          if (null == t) return t;
          const n = l(t) || e.defaultKeyValue,
            s = r[n];
          if (!s)
            return (
              i.error(
                'Accessor#set',
                `Invalid property value, value needs to be one of ${a()}, or a plain object that can autocast (having .type = ${o()})`,
              ),
              null
            );
          if (!f(e.typeMap[n], t)) return t;
          if ('string' == typeof e.key && !u(t)) {
            const r = {};
            for (const n in t) n !== e.key && (r[n] = t[n]);
            return s(r);
          }
          return s(t);
        };
      }
      class A {}
      const E = {
        native: (e) => ({ type: 'native', value: e }),
        array: (e) => ({ type: 'array', value: e }),
        oneOf: (e) => ({ type: 'one-of', values: e }),
      };
      function S(e) {
        if (!e || !('type' in e)) return !1;
        switch (e.type) {
          case 'native':
          case 'array':
          case 'one-of':
            return !0;
        }
        return !1;
      }
      function D(e) {
        switch (e.type) {
          case 'native':
            return b(e.value);
          case 'array':
            return w(D(e.value));
          case 'one-of':
            return (function (e) {
              let t = null;
              return (r, n) =>
                V(r, e)
                  ? r
                  : (null == t && (t = B(e)),
                    i.error(
                      'Accessor#set',
                      `Invalid property value, value needs to be of type ${t}`,
                    ),
                    n && (n.valid = !1),
                    null);
            })(e);
          default:
            return null;
        }
      }
      function B(e) {
        switch (e.type) {
          case 'native':
            switch (e.value) {
              case Number:
                return 'number';
              case String:
                return 'string';
              case Boolean:
                return 'boolean';
              case A:
                return 'integer';
              case Date:
                return 'date';
              default:
                return m(e.value);
            }
          case 'array':
            return `array of ${B(e.value)}`;
          case 'one-of': {
            const t = e.values.map((e) => B(e));
            return `one of ${t.slice(0, t.length - 1)} or ${t[t.length - 1]}`;
          }
        }
        return 'unknown';
      }
      function V(e, t) {
        if (null == e) return !0;
        switch (t.type) {
          case 'native':
            switch (t.value) {
              case Number:
              case A:
                return 'number' == typeof e;
              case Boolean:
                return 'boolean' == typeof e;
              case String:
                return 'string' == typeof e;
            }
            return e instanceof t.value;
          case 'array':
            return !!Array.isArray(e) && !e.some((e) => !V(e, t.value));
          case 'one-of':
            return t.values.some((t) => V(e, t));
        }
      }
    },
    22021: (e, t, r) => {
      r.d(t, {
        ZF: () => f,
        Kt: () => d,
        jE: () => y,
        uZ: () => a,
        oK: () => p,
        Vl: () => h,
        wt: () => o,
        t7: () => c,
        Sf: () => i,
        fp: () => l,
        BV: () => u,
      });
      var n = r(17896);
      r(98766);
      const s = new Float32Array(1);
      function i(e) {
        --e;
        for (let t = 1; t < 32; t <<= 1) e |= e >> t;
        return e + 1;
      }
      function a(e, t, r) {
        return Math.min(Math.max(e, t), r);
      }
      function o(e) {
        return 0 == (e & (e - 1));
      }
      function l(e) {
        return (
          e--,
          (e |= e >> 1),
          (e |= e >> 2),
          (e |= e >> 4),
          (e |= e >> 8),
          (e |= e >> 16),
          ++e
        );
      }
      function c(e, t, r) {
        return e + (t - e) * r;
      }
      function h(e) {
        return (e * Math.PI) / 180;
      }
      function u(e) {
        return (180 * e) / Math.PI;
      }
      function f(e) {
        return Math.acos(a(e, -1, 1));
      }
      function d(e) {
        return Math.asin(a(e, -1, 1));
      }
      function p(e) {
        return g(Math.max(-m, Math.min(e, m)));
      }
      function g(e) {
        return (s[0] = e), s[0];
      }
      function y(e, t) {
        const r = (0, n.l)(e),
          s = d(e[2] / r),
          i = Math.atan2(e[1] / r, e[0] / r);
        return (0, n.s)(t, r, s, i), t;
      }
      const m = g(34028234663852886e22);
    },
    45091: (e, t, r) => {
      r.d(t, { Z: () => h });
      var n,
        s,
        i = r(80442),
        a = r(71143);
      ((s = n || (n = {}))[(s.varint = 0)] = 'varint'),
        (s[(s.fixed64 = 1)] = 'fixed64'),
        (s[(s.delimited = 2)] = 'delimited'),
        (s[(s.fixed32 = 5)] = 'fixed32'),
        (s[(s.unknown = 99)] = 'unknown');
      const o = 4294967296,
        l = new TextDecoder('utf-8'),
        c =
          (0, i.Z)('safari') || (0, i.Z)('ios') ? 6 : (0, i.Z)('ff') ? 12 : 32;
      class h {
        constructor(e, t, r = 0, s = e ? e.byteLength : 0) {
          (this._tag = 0), (this._dataType = n.unknown), this._init(e, t, r, s);
        }
        _init(e, t, r, n) {
          (this._data = e),
            (this._dataView = t),
            (this._pos = r),
            (this._end = n);
        }
        clone() {
          return new h(this._data, this._dataView, this._pos, this._end);
        }
        pos() {
          return this._pos;
        }
        move(e) {
          this._pos = e;
        }
        nextTag(e) {
          for (;;) {
            if (this._pos === this._end) return !1;
            const t = this._decodeVarint();
            if (
              ((this._tag = t >> 3),
              (this._dataType = 7 & t),
              !e || e === this._tag)
            )
              break;
            this.skip();
          }
          return !0;
        }
        next() {
          if (this._pos === this._end) return !1;
          const e = this._decodeVarint();
          return (this._tag = e >> 3), (this._dataType = 7 & e), !0;
        }
        empty() {
          return this._pos >= this._end;
        }
        tag() {
          return this._tag;
        }
        getInt32() {
          return this._decodeVarint();
        }
        getInt64() {
          return this._decodeVarint();
        }
        getUInt32() {
          let e = 4294967295;
          return (
            (e = (127 & this._data[this._pos]) >>> 0),
            this._data[this._pos++] < 128
              ? e
              : ((e = (e | ((127 & this._data[this._pos]) << 7)) >>> 0),
                this._data[this._pos++] < 128
                  ? e
                  : ((e = (e | ((127 & this._data[this._pos]) << 14)) >>> 0),
                    this._data[this._pos++] < 128
                      ? e
                      : ((e =
                          (e | ((127 & this._data[this._pos]) << 21)) >>> 0),
                        this._data[this._pos++] < 128
                          ? e
                          : ((e =
                              (e | ((15 & this._data[this._pos]) << 28)) >>> 0),
                            this._data[this._pos++] < 128 ? e : void 0))))
          );
        }
        getUInt64() {
          return this._decodeVarint();
        }
        getSInt32() {
          const e = this.getUInt32();
          return ((e >>> 1) ^ -(1 & e)) | 0;
        }
        getSInt64() {
          return this._decodeSVarint();
        }
        getBool() {
          const e = 0 !== this._data[this._pos];
          return this._skip(1), e;
        }
        getEnum() {
          return this._decodeVarint();
        }
        getFixed64() {
          const e = this._dataView,
            t = this._pos,
            r = e.getUint32(t, !0) + e.getUint32(t + 4, !0) * o;
          return this._skip(8), r;
        }
        getSFixed64() {
          const e = this._dataView,
            t = this._pos,
            r = e.getUint32(t, !0) + e.getInt32(t + 4, !0) * o;
          return this._skip(8), r;
        }
        getDouble() {
          const e = this._dataView.getFloat64(this._pos, !0);
          return this._skip(8), e;
        }
        getFixed32() {
          const e = this._dataView.getUint32(this._pos, !0);
          return this._skip(4), e;
        }
        getSFixed32() {
          const e = this._dataView.getInt32(this._pos, !0);
          return this._skip(4), e;
        }
        getFloat() {
          const e = this._dataView.getFloat32(this._pos, !0);
          return this._skip(4), e;
        }
        getString() {
          const e = this._getLength(),
            t = this._pos,
            r = this._toString(this._data, t, t + e);
          return this._skip(e), r;
        }
        getBytes() {
          const e = this._getLength(),
            t = this._pos,
            r = this._toBytes(this._data, t, t + e);
          return this._skip(e), r;
        }
        getLength() {
          return this._getLengthUnsafe();
        }
        processMessageWithArgs(e, t, r, n) {
          const s = this.getMessage(),
            i = e(s, t, r, n);
          return s.release(), i;
        }
        processMessage(e) {
          const t = this.getMessage(),
            r = e(t);
          return t.release(), r;
        }
        getMessage() {
          const e = this._getLength(),
            t = h.pool.acquire();
          return (
            t._init(this._data, this._dataView, this._pos, this._pos + e),
            this._skip(e),
            t
          );
        }
        release() {
          h.pool.release(this);
        }
        dataType() {
          return this._dataType;
        }
        skip() {
          switch (this._dataType) {
            case n.varint:
              this._decodeVarint();
              break;
            case n.fixed64:
              this._skip(8);
              break;
            case n.delimited:
              this._skip(this._getLength());
              break;
            case n.fixed32:
              this._skip(4);
              break;
            default:
              throw new Error('Invalid data type!');
          }
        }
        skipLen(e) {
          this._skip(e);
        }
        _skip(e) {
          if (this._pos + e > this._end)
            throw new Error('Attempt to skip past the end of buffer!');
          this._pos += e;
        }
        _decodeVarint() {
          const e = this._data;
          let t,
            r = this._pos,
            n = 0;
          if (this._end - r >= 10)
            do {
              if (((t = e[r++]), (n |= 127 & t), 0 == (128 & t))) break;
              if (((t = e[r++]), (n |= (127 & t) << 7), 0 == (128 & t))) break;
              if (((t = e[r++]), (n |= (127 & t) << 14), 0 == (128 & t))) break;
              if (((t = e[r++]), (n |= (127 & t) << 21), 0 == (128 & t))) break;
              if (((t = e[r++]), (n += 268435456 * (127 & t)), 0 == (128 & t)))
                break;
              if (
                ((t = e[r++]), (n += 34359738368 * (127 & t)), 0 == (128 & t))
              )
                break;
              if (
                ((t = e[r++]), (n += 4398046511104 * (127 & t)), 0 == (128 & t))
              )
                break;
              if (
                ((t = e[r++]),
                (n += 562949953421312 * (127 & t)),
                0 == (128 & t))
              )
                break;
              if (
                ((t = e[r++]),
                (n += 72057594037927940 * (127 & t)),
                0 == (128 & t))
              )
                break;
              if (
                ((t = e[r++]),
                (n += 0x8000000000000000 * (127 & t)),
                0 == (128 & t))
              )
                break;
              throw new Error('Varint too long!');
            } while (0);
          else {
            let s = 1;
            for (; r !== this._end && ((t = e[r]), 0 != (128 & t)); )
              ++r, (n += (127 & t) * s), (s *= 128);
            if (r === this._end) throw new Error('Varint overrun!');
            ++r, (n += t * s);
          }
          return (this._pos = r), n;
        }
        _decodeSVarint() {
          const e = this._decodeVarint();
          return e % 2 ? -(e + 1) / 2 : e / 2;
        }
        _getLength() {
          if (this._dataType !== n.delimited)
            throw new Error('Not a delimited data type!');
          return this._decodeVarint();
        }
        _getLengthUnsafe() {
          return this.getUInt32();
        }
        _toString(e, t, r) {
          if ((r = Math.min(this._end, r)) - t > c) {
            const n = e.subarray(t, r);
            return l.decode(n);
          }
          let n = '',
            s = '';
          for (let i = t; i < r; ++i) {
            const t = e[i];
            128 & t
              ? (s += '%' + t.toString(16))
              : ((n += decodeURIComponent(s) + String.fromCharCode(t)),
                (s = ''));
          }
          return s.length && (n += decodeURIComponent(s)), n;
        }
        _toBytes(e, t, r) {
          return (
            (r = Math.min(this._end, r)), new Uint8Array(e.buffer, t, r - t)
          );
        }
      }
      h.pool = new a.Z(h, null, (e) => {
        (e._data = null), (e._dataView = null);
      });
    },
    3172: (e, t, r) => {
      r.r(t), r.d(t, { default: () => d });
      var n = r(68773),
        s = r(40330),
        i = r(20102),
        a = r(80442),
        o = r(22974),
        l = r(70586),
        c = r(95330),
        h = r(17452),
        u = r(71058),
        f = r(85958);
      async function d(e, t) {
        var o;
        const f = (0, h.HK)(e),
          m = (0, h.jc)(e);
        m || f || (e = (0, h.Fv)(e));
        const x = { url: e, requestOptions: { ...(0, l.Wg)(t) } };
        let _ = (0, h.oh)(e);
        if (_) {
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
                r = M('request:interceptor', e, t);
              }
              if (
                ((n instanceof Error || n instanceof i.Z) &&
                  (r = M('request:interceptor', n, t)),
                r)
              )
                throw (e.error && e.error(r), r);
              return n;
            }
          })(_, x);
          if (null != e)
            return {
              data: e,
              getHeader: b,
              requestOptions: x.requestOptions,
              url: x.url,
            };
          _.after || _.error || (_ = null);
        }
        if (((e = x.url), 'image' === (t = x.requestOptions).responseType)) {
          if ((0, a.Z)('host-webworker') || (0, a.Z)('host-node'))
            throw M(
              'request:invalid-parameters',
              new Error(
                "responseType 'image' is not supported in Web Workers or Node environment",
              ),
              x,
            );
        } else if (f)
          throw M(
            'request:invalid-parameters',
            new Error(
              'Data URLs are not supported for responseType = ' +
                t.responseType,
            ),
            x,
          );
        if ('head' === t.method) {
          if (t.body)
            throw M(
              'request:invalid-parameters',
              new Error("body parameter cannot be set when method is 'head'"),
              x,
            );
          if (f || m)
            throw M(
              'request:invalid-parameters',
              new Error(
                "data and blob URLs are not supported for method 'head'",
              ),
              x,
            );
        }
        if (
          (await (async function () {
            (0, a.Z)('host-webworker')
              ? p || (p = await r.e(9884).then(r.bind(r, 29884)))
              : d._abortableFetch ||
                (d._abortableFetch = globalThis.fetch.bind(globalThis));
          })(),
          p)
        )
          return p.execute(e, t);
        const w = new AbortController();
        (0, c.fu)(t, () => w.abort());
        const I = {
            controller: w,
            credential: null,
            credentialToken: null,
            fetchOptions: null,
            hasToken: !1,
            interceptor: _,
            params: x,
            redoRequest: !1,
            useIdentity: g.useIdentity,
            useProxy: !1,
            useSSL: !1,
            withCredentials: !1,
          },
          P = await (async function (e) {
            var t, r;
            let i, a;
            await (async function (e) {
              const t = e.params.url,
                r = e.params.requestOptions,
                i = e.controller.signal,
                a = r.body;
              let o = null,
                l = null,
                h = null;
              if (
                (y &&
                  'HTMLFormElement' in globalThis &&
                  (a instanceof FormData
                    ? (o = a)
                    : a instanceof HTMLFormElement &&
                      ((l = a), (o = new FormData(l)))),
                'string' == typeof a && (h = a),
                (e.fetchOptions = {
                  cache:
                    r.cacheBust && !d._abortableFetch.polyfill
                      ? 'no-cache'
                      : 'default',
                  credentials: 'same-origin',
                  headers: r.headers || {},
                  method: 'head' === r.method ? 'HEAD' : 'GET',
                  mode: 'cors',
                  redirect: 'follow',
                  signal: i,
                }),
                (o || h) && (e.fetchOptions.body = o || h),
                'anonymous' === r.authMode && (e.useIdentity = !1),
                (e.hasToken = !!(
                  /token=/i.test(t) ||
                  (r.query && r.query.token) ||
                  (o && o.get && o.get('token')) ||
                  (l && l.elements.token)
                )),
                !e.hasToken &&
                  n.Z.apiKey &&
                  (0, u.r)(t) &&
                  (r.query || (r.query = {}),
                  (r.query.token = n.Z.apiKey),
                  (e.hasToken = !0)),
                e.useIdentity &&
                  !e.hasToken &&
                  !e.credentialToken &&
                  !v(t) &&
                  !(0, c.Hc)(i))
              ) {
                let n;
                'immediate' === r.authMode
                  ? (await k(),
                    (n = await s.id.getCredential(t, { signal: i })),
                    (e.credential = n))
                  : 'no-prompt' === r.authMode
                  ? (await k(),
                    (n = await s.id
                      .getCredential(t, { prompt: !1, signal: i })
                      .catch(() => {})),
                    (e.credential = n))
                  : s.id && (n = s.id.findCredential(t)),
                  n && ((e.credentialToken = n.token), (e.useSSL = !!n.ssl));
              }
            })(e);
            try {
              do {
                [i, a] = await T(e);
              } while (!(await L(e, i, a)));
            } catch (t) {
              const r = M('request:server', t, e.params, i);
              throw (
                ((r.details.ssl = e.useSSL),
                e.interceptor && e.interceptor.error && e.interceptor.error(r),
                r)
              );
            }
            const o = e.params.url;
            if (
              /\/sharing\/rest\/(accounts|portals)\/self/i.test(o) &&
              !e.hasToken &&
              !e.credentialToken &&
              null != (t = a) &&
              null != (r = t.user) &&
              r.username &&
              !(0, h.kl)(o)
            ) {
              const e = (0, h.P$)(o, !0);
              e && g.trustedServers.push(e);
            }
            const l = e.credential;
            if (l && s.id) {
              const e = s.id.findServerInfo(l.server);
              let t = e && e.owningSystemUrl;
              if (t) {
                t = t.replace(/\/?$/, '/sharing');
                const e = s.id.findCredential(t, l.userId);
                e &&
                  -1 === s.id._getIdenticalSvcIdx(t, e) &&
                  e.resources.unshift(t);
              }
            }
            return {
              data: a,
              getHeader: i ? (e) => i.headers.get(e) : b,
              requestOptions: e.params.requestOptions,
              ssl: e.useSSL,
              url: e.params.url,
            };
          })(I);
        return null == (o = _) || null == o.after || o.after(P), P;
      }
      let p;
      const g = n.Z.request,
        y = 'FormData' in globalThis,
        m = [499, 498, 403, 401],
        x = ['COM_0056', 'COM_0057', 'SB_0008'],
        _ = [
          /\/arcgis\/tokens/i,
          /\/sharing(\/rest)?\/generatetoken/i,
          /\/rest\/info/i,
        ],
        b = () => null,
        w = Symbol();
      function I(e) {
        const t = (0, h.P$)(e);
        return (
          !t ||
          t.endsWith('.arcgis.com') ||
          d._corsServers.includes(t) ||
          (0, h.kl)(t)
        );
      }
      function M(e, t, r, n) {
        let s = 'Error';
        const a = {
          url: r.url,
          requestOptions: r.requestOptions,
          getHeader: b,
          ssl: !1,
        };
        if (t instanceof i.Z)
          return (
            t.details
              ? ((t.details = (0, o.d9)(t.details)),
                (t.details.url = r.url),
                (t.details.requestOptions = r.requestOptions))
              : (t.details = a),
            t
          );
        if (t) {
          const e = n && ((e) => n.headers.get(e)),
            r = n && n.status,
            i = t.message;
          i && (s = i),
            e && (a.getHeader = e),
            (a.httpStatus =
              (null != t.httpCode ? t.httpCode : t.code) || r || 0),
            (a.subCode = t.subcode),
            (a.messageCode = t.messageCode),
            'string' == typeof t.details
              ? (a.messages = [t.details])
              : (a.messages = t.details),
            (a.raw = w in t ? t[w] : t);
        }
        return (0, c.D_)(t) ? (0, c.zE)() : new i.Z(e, s, a);
      }
      async function k() {
        s.id ||
          (await Promise.all([r.e(280), r.e(1400), r.e(7913)]).then(
            r.bind(r, 33107),
          ));
      }
      function v(e) {
        return _.some((t) => t.test(e));
      }
      async function T(e) {
        let t = e.params.url;
        const r = e.params.requestOptions,
          n = e.fetchOptions,
          i = (0, h.jc)(t) || (0, h.HK)(t),
          o = r.responseType || 'json',
          l = i ? 0 : null != r.timeout ? r.timeout : g.timeout;
        let u = !1;
        if (!i) {
          e.useSSL && (t = (0, h.hO)(t)),
            r.cacheBust &&
              'default' === n.cache &&
              (t = (0, h.ZN)(t, 'request.preventCache', Date.now()));
          let i = { ...r.query };
          e.credentialToken && (i.token = e.credentialToken);
          let o = (0, h.B7)(i);
          (0, a.Z)('esri-url-encodes-apostrophe') &&
            (o = o.replace(/'/g, '%27'));
          const l = t.length + 1 + o.length;
          let c;
          u =
            'delete' === r.method ||
            'post' === r.method ||
            'put' === r.method ||
            !!r.body ||
            l > g.maxUrlLength;
          const f = r.useProxy || !!(0, h.ed)(t);
          if (f) {
            const e = (0, h.b7)(t);
            (c = e.path),
              !u && c.length + 1 + l > g.maxUrlLength && (u = !0),
              e.query && (i = { ...e.query, ...i });
          }
          if ('HEAD' === n.method && (u || f)) {
            if (u) {
              if (l > g.maxUrlLength)
                throw M(
                  'request:invalid-parameters',
                  new Error('URL exceeds maximum length'),
                  e.params,
                );
              throw M(
                'request:invalid-parameters',
                new Error("cannot use POST request when method is 'head'"),
                e.params,
              );
            }
            if (f)
              throw M(
                'request:invalid-parameters',
                new Error("cannot use proxy when method is 'head'"),
                e.params,
              );
          }
          if (
            (u
              ? ((n.method =
                  'delete' === r.method
                    ? 'DELETE'
                    : 'put' === r.method
                    ? 'PUT'
                    : 'POST'),
                r.body
                  ? (t = (0, h.fl)(t, i))
                  : ((n.body = (0, h.B7)(i)),
                    (n.headers['Content-Type'] =
                      'application/x-www-form-urlencoded')))
              : (t = (0, h.fl)(t, i)),
            f && ((e.useProxy = !0), (t = `${c}?${t}`)),
            i.token && y && n.body instanceof FormData)
          ) {
            const e = n.body;
            e.set ? e.set('token', i.token) : e.append('token', i.token);
          }
          if (r.hasOwnProperty('withCredentials'))
            e.withCredentials = r.withCredentials;
          else if (!(0, h.D6)(t, (0, h.TI)()))
            if ((0, h.kl)(t)) e.withCredentials = !0;
            else if (s.id) {
              const r = s.id.findServerInfo(t);
              r && r.webTierAuth && (e.withCredentials = !0);
            }
          e.withCredentials && (n.credentials = 'include');
        }
        let f,
          p,
          m = 0,
          x = !1;
        l > 0 &&
          (m = setTimeout(() => {
            (x = !0), e.controller.abort();
          }, l));
        try {
          if ('native-request-init' === r.responseType) (p = n), (p.url = t);
          else if (
            'image' !== r.responseType ||
            'default' !== n.cache ||
            'GET' !== n.method ||
            u ||
            (function (e) {
              if (e)
                for (const t of Object.getOwnPropertyNames(e))
                  if (e[t]) return !0;
              return !1;
            })(r.headers) ||
            (!i && !e.useProxy && g.proxyUrl && !I(t))
          ) {
            if (
              ((f = await d._abortableFetch(t, n)),
              e.useProxy ||
                (function (e) {
                  const t = (0, h.P$)(e);
                  t && !d._corsServers.includes(t) && d._corsServers.push(t);
                })(t),
              'native' === r.responseType)
            )
              p = f;
            else if ('HEAD' !== n.method)
              if (f.ok) {
                switch (o) {
                  case 'array-buffer':
                    p = await f.arrayBuffer();
                    break;
                  case 'blob':
                  case 'image':
                    p = await f.blob();
                    break;
                  default:
                    p = await f.text();
                }
                if (
                  (m && (clearTimeout(m), (m = 0)),
                  'json' === o || 'xml' === o || 'document' === o)
                )
                  if (p)
                    switch (o) {
                      case 'json':
                        p = JSON.parse(p);
                        break;
                      case 'xml':
                        p = P(p, 'application/xml');
                        break;
                      case 'document':
                        p = P(p, 'text/html');
                    }
                  else p = null;
                if (p) {
                  if ('array-buffer' === o || 'blob' === o) {
                    const e = f.headers.get('Content-Type');
                    if (
                      /application\/json|text\/plain/i.test(e) &&
                      p['blob' === o ? 'size' : 'byteLength'] <= 750
                    )
                      try {
                        const e = await new Response(p).json();
                        e.error && (p = e);
                      } catch {}
                  }
                  'image' === o &&
                    p instanceof Blob &&
                    (p = await A(URL.createObjectURL(p), e, !0));
                }
              } else p = await f.text();
          } else p = await A(t, e);
        } catch (n) {
          if ('AbortError' === n.name) {
            if (x) throw new Error('Timeout exceeded');
            throw (0, c.zE)('Request canceled');
          }
          if (
            !(!f && n instanceof TypeError && g.proxyUrl) ||
            r.body ||
            'delete' === r.method ||
            'head' === r.method ||
            'post' === r.method ||
            'put' === r.method ||
            e.useProxy ||
            I(t)
          )
            throw n;
          (e.redoRequest = !0),
            (0, h.tD)({ proxyUrl: g.proxyUrl, urlPrefix: (0, h.P$)(t) });
        } finally {
          m && clearTimeout(m);
        }
        return [f, p];
      }
      function P(e, t) {
        let r;
        try {
          r = new DOMParser().parseFromString(e, t);
        } catch {}
        if (!r || r.getElementsByTagName('parsererror').length)
          throw new SyntaxError('XML Parse error');
        return r;
      }
      async function L(e, t, r) {
        if (e.redoRequest) return (e.redoRequest = !1), !1;
        const n = e.params.requestOptions;
        if (
          !t ||
          'native' === n.responseType ||
          'native-request-init' === n.responseType
        )
          return !0;
        let i, a, o, l;
        if (!t.ok)
          throw (
            ((i = new Error(`Unable to load ${t.url} status: ${t.status}`)),
            (i[w] = r),
            i)
          );
        null != r && r.error && (i = r.error),
          i &&
            ((a = Number(i.code)),
            (o = i.hasOwnProperty('subcode') ? Number(i.subcode) : null),
            (l = i.messageCode),
            (l = l && l.toUpperCase()));
        const c = n.authMode;
        if (
          403 === a &&
          (4 === o ||
            (i.message &&
              i.message.toLowerCase().indexOf('ssl') > -1 &&
              -1 === i.message.toLowerCase().indexOf('permission')))
        ) {
          if (!e.useSSL) return (e.useSSL = !0), !1;
        } else if (
          !e.hasToken &&
          e.useIdentity &&
          ('no-prompt' !== c || 498 === a) &&
          -1 !== m.indexOf(a) &&
          !v(e.params.url) &&
          (403 !== a ||
            (-1 === x.indexOf(l) &&
              (null == o || (2 === o && e.credentialToken))))
        ) {
          await k();
          try {
            const t = await s.id.getCredential(e.params.url, {
              error: M('request:server', i, e.params),
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
            i = t;
          }
        }
        if (i) throw i;
        return !0;
      }
      function A(e, t, r = !1) {
        const n = t.controller.signal,
          s = new Image();
        return (
          t.withCredentials
            ? (s.crossOrigin = 'use-credentials')
            : (s.crossOrigin = 'anonymous'),
          (s.alt = ''),
          (s.src = e),
          (0, f.f)(s, e, r, n)
        );
      }
      (d._abortableFetch = null),
        (d._corsServers = [
          'https://server.arcgisonline.com',
          'https://services.arcgisonline.com',
        ]);
    },
    71058: (e, t, r) => {
      r.d(t, { r: () => i });
      var n = r(17452);
      const s = [
        'elevation3d.arcgis.com',
        'js.arcgis.com',
        'jsdev.arcgis.com',
        'jsqa.arcgis.com',
        'static.arcgis.com',
      ];
      function i(e) {
        const t = (0, n.P$)(e, !0);
        return (
          t &&
          t.endsWith('.arcgis.com') &&
          !s.includes(t) &&
          !e.endsWith('/sharing/rest/generateToken')
        );
      }
    },
    85958: (e, t, r) => {
      r.d(t, { f: () => a });
      var n = r(80442),
        s = r(70586),
        i = r(95330);
      function a(e, t, r = !1, a) {
        return new Promise((l, c) => {
          if ((0, i.Hc)(a)) return void c(o());
          let h = () => {
              d(), c(new Error(`Unable to load ${t}`));
            },
            u = () => {
              const t = e;
              d(), l(t);
            },
            f = () => {
              if (!e) return;
              const t = e;
              d(), (t.src = ''), c(o());
            };
          const d = () => {
            (0, n.Z)('esri-image-decode') ||
              (e.removeEventListener('error', h),
              e.removeEventListener('load', u)),
              (h = null),
              (u = null),
              (e = null),
              (0, s.pC)(a) && a.removeEventListener('abort', f),
              (f = null),
              r && URL.revokeObjectURL(t);
          };
          (0, s.pC)(a) && a.addEventListener('abort', f),
            (0, n.Z)('esri-image-decode')
              ? e.decode().then(u, h)
              : (e.addEventListener('error', h), e.addEventListener('load', u));
        });
      }
      function o() {
        try {
          return new DOMException('Aborted', 'AbortError');
        } catch {
          const e = new Error();
          return (e.name = 'AbortError'), e;
        }
      }
    },
    56456: (e, t, r) => {
      r.r(t), r.d(t, { default: () => ee });
      var n = r(95330),
        s = r(4215),
        i = r(70586),
        a = r(31363);
      function o(e) {
        return (
          746 === e ||
          747 === e ||
          (!(e < 4352) &&
            ((e >= 12704 && e <= 12735) ||
              (e >= 12544 && e <= 12591) ||
              (e >= 65072 && e <= 65103 && !(e >= 65097 && e <= 65103)) ||
              (e >= 63744 && e <= 64255) ||
              (e >= 13056 && e <= 13311) ||
              (e >= 11904 && e <= 12031) ||
              (e >= 12736 && e <= 12783) ||
              (e >= 12288 &&
                e <= 12351 &&
                !(
                  (e >= 12296 && e <= 12305) ||
                  (e >= 12308 && e <= 12319) ||
                  12336 === e
                )) ||
              (e >= 13312 && e <= 19903) ||
              (e >= 19968 && e <= 40959) ||
              (e >= 12800 && e <= 13055) ||
              (e >= 12592 && e <= 12687) ||
              (e >= 43360 && e <= 43391) ||
              (e >= 55216 && e <= 55295) ||
              (e >= 4352 && e <= 4607) ||
              (e >= 44032 && e <= 55215) ||
              (e >= 12352 && e <= 12447) ||
              (e >= 12272 && e <= 12287) ||
              (e >= 12688 && e <= 12703) ||
              (e >= 12032 && e <= 12255) ||
              (e >= 12784 && e <= 12799) ||
              (e >= 12448 && e <= 12543 && 12540 !== e) ||
              (e >= 65280 &&
                e <= 65519 &&
                !(
                  65288 === e ||
                  65289 === e ||
                  65293 === e ||
                  (e >= 65306 && e <= 65310) ||
                  65339 === e ||
                  65341 === e ||
                  65343 === e ||
                  (e >= 65371 && e <= 65503) ||
                  65507 === e ||
                  (e >= 65512 && e <= 65519)
                )) ||
              (e >= 65104 &&
                e <= 65135 &&
                !((e >= 65112 && e <= 65118) || (e >= 65123 && e <= 65126))) ||
              (e >= 5120 && e <= 5759) ||
              (e >= 6320 && e <= 6399) ||
              (e >= 65040 && e <= 65055) ||
              (e >= 19904 && e <= 19967) ||
              (e >= 40960 && e <= 42127) ||
              (e >= 42128 && e <= 42191)))
        );
      }
      function l(e) {
        return (
          !(e < 11904) &&
          ((e >= 12704 && e <= 12735) ||
            (e >= 12544 && e <= 12591) ||
            (e >= 65072 && e <= 65103) ||
            (e >= 63744 && e <= 64255) ||
            (e >= 13056 && e <= 13311) ||
            (e >= 11904 && e <= 12031) ||
            (e >= 12736 && e <= 12783) ||
            (e >= 12288 && e <= 12351) ||
            (e >= 13312 && e <= 19903) ||
            (e >= 19968 && e <= 40959) ||
            (e >= 12800 && e <= 13055) ||
            (e >= 65280 && e <= 65519) ||
            (e >= 12352 && e <= 12447) ||
            (e >= 12272 && e <= 12287) ||
            (e >= 12032 && e <= 12255) ||
            (e >= 12784 && e <= 12799) ||
            (e >= 12448 && e <= 12543) ||
            (e >= 65040 && e <= 65055) ||
            (e >= 42128 && e <= 42191) ||
            (e >= 40960 && e <= 42127))
        );
      }
      function c(e) {
        switch (e) {
          case 10:
          case 32:
          case 38:
          case 40:
          case 41:
          case 43:
          case 45:
          case 47:
          case 173:
          case 183:
          case 8203:
          case 8208:
          case 8211:
          case 8231:
            return !0;
        }
        return !1;
      }
      function h(e) {
        switch (e) {
          case 9:
          case 10:
          case 11:
          case 12:
          case 13:
          case 32:
            return !0;
        }
        return !1;
      }
      var u = r(87893);
      const f = 24;
      class d {
        constructor(e, t, r, n, s, i, a) {
          (this._glyphItems = e),
            (this._maxWidth = t),
            (this._lineHeight = r),
            (this._letterSpacing = n),
            (this._hAnchor = s),
            (this._vAnchor = i),
            (this._justify = a);
        }
        getShaping(e, t, r) {
          const n = this._letterSpacing,
            s = this._lineHeight,
            i = this._justify,
            a = this._maxWidth,
            u = [];
          let f = 0,
            d = 0;
          const p = e.length;
          for (let t = 0; t < p; t++) {
            const s = e.charCodeAt(t),
              i = r && o(s);
            let a;
            for (const e of this._glyphItems) if (((a = e[s]), a)) break;
            u.push({
              codePoint: s,
              x: f,
              y: d,
              vertical: i,
              glyphMosaicItem: a,
            }),
              a && (f += a.metrics.advance + n);
          }
          let g = f;
          a > 0 && (g = f / Math.max(1, Math.ceil(f / a)));
          const y = e.indexOf('​') >= 0,
            m = [];
          for (let e = 0; e < p - 1; e++) {
            const t = u[e].codePoint,
              r = l(t);
            if (c(t) || r) {
              let n = 0;
              if (10 === t) n -= 1e4;
              else if (r && y) n += 150;
              else {
                (40 !== t && 65288 !== t) || (n += 50);
                const r = u[e + 1].codePoint;
                (41 !== r && 65289 !== r) || (n += 50);
              }
              m.push(this._buildBreak(e + 1, u[e].x, g, m, n, !1));
            }
          }
          const x = this._optimalBreaks(this._buildBreak(p, f, g, m, 0, !0));
          let _ = 0;
          const b = t ? -s : s;
          let w = 0;
          for (let e = 0; e < x.length; e++) {
            const t = x[e];
            let r = w;
            for (; r < t && h(u[r].codePoint); )
              (u[r].glyphMosaicItem = null), ++r;
            let n = t - 1;
            for (; n > r && h(u[n].codePoint); )
              (u[n].glyphMosaicItem = null), --n;
            if (r <= n) {
              const e = u[r].x;
              for (let t = r; t <= n; t++) (u[t].x -= e), (u[t].y = d);
              let t = u[n].x;
              u[n].glyphMosaicItem &&
                (t += u[n].glyphMosaicItem.metrics.advance),
                (_ = Math.max(t, _)),
                i && this._applyJustification(u, r, n);
            }
            (w = t), (d += b);
          }
          if (u.length > 0) {
            const e = x.length - 1,
              r = (i - this._hAnchor) * _;
            let n = (-this._vAnchor * (e + 1) + 0.5) * s;
            t && e && (n += e * s);
            for (const e of u) (e.x += r), (e.y += n);
          }
          return u.filter((e) => e.glyphMosaicItem);
        }
        static getTextBox(e, t) {
          if (!e.length) return null;
          let r = 1 / 0,
            n = 1 / 0,
            s = 0,
            i = 0;
          for (const a of e) {
            const e = a.glyphMosaicItem.metrics.advance,
              o = a.x,
              l = a.y - 17,
              c = o + e,
              h = l + t;
            (r = Math.min(r, o)),
              (s = Math.max(s, c)),
              (n = Math.min(n, l)),
              (i = Math.max(i, h));
          }
          return { x: r, y: n, width: s - r, height: i - n };
        }
        static getBox(e) {
          if (!e.length) return null;
          let t = 1 / 0,
            r = 1 / 0,
            n = 0,
            s = 0;
          for (const i of e) {
            const {
                height: e,
                left: a,
                top: o,
                width: l,
              } = i.glyphMosaicItem.metrics,
              c = i.x,
              h = i.y - (e - Math.abs(o)),
              u = c + l + a,
              f = h + e;
            (t = Math.min(t, c)),
              (n = Math.max(n, u)),
              (r = Math.min(r, h)),
              (s = Math.max(s, f));
          }
          return { x: t, y: r, width: n - t, height: s - r };
        }
        static addDecoration(e, t) {
          const r = e.length;
          if (0 === r) return;
          let n = e[0].x + e[0].glyphMosaicItem.metrics.left,
            s = e[0].y;
          for (let i = 1; i < r; i++) {
            const r = e[i];
            if (r.y !== s) {
              const a =
                e[i - 1].x +
                e[i - 1].glyphMosaicItem.metrics.left +
                e[i - 1].glyphMosaicItem.metrics.width;
              e.push({
                codePoint: 0,
                x: n,
                y: s + t - 3,
                vertical: !1,
                glyphMosaicItem: {
                  sdf: !0,
                  rect: new u.Z(4, 0, 4, 8),
                  metrics: {
                    width: a - n,
                    height: 8,
                    left: 0,
                    top: 0,
                    advance: 0,
                  },
                  page: 0,
                  code: 0,
                },
              }),
                (s = r.y),
                (n = r.x + r.glyphMosaicItem.metrics.left);
            }
          }
          const i =
            e[r - 1].x +
            e[r - 1].glyphMosaicItem.metrics.left +
            e[r - 1].glyphMosaicItem.metrics.width;
          e.push({
            codePoint: 0,
            x: n,
            y: s + t - 3,
            vertical: !1,
            glyphMosaicItem: {
              sdf: !0,
              rect: new u.Z(4, 0, 4, 8),
              metrics: { width: i - n, height: 8, left: 0, top: 0, advance: 0 },
              page: 0,
              code: 0,
            },
          });
        }
        _breakScore(e, t, r, n) {
          const s = (e - t) * (e - t);
          return n ? (e < t ? s / 2 : 2 * s) : s + Math.abs(r) * r;
        }
        _buildBreak(e, t, r, n, s, i) {
          let a = null,
            o = this._breakScore(t, r, s, i);
          for (const e of n) {
            const n = t - e.x,
              l = this._breakScore(n, r, s, i) + e.score;
            l <= o && ((a = e), (o = l));
          }
          return { index: e, x: t, score: o, previousBreak: a };
        }
        _optimalBreaks(e) {
          return e ? this._optimalBreaks(e.previousBreak).concat(e.index) : [];
        }
        _applyJustification(e, t, r) {
          const n = e[r],
            s = n.vertical
              ? f
              : n.glyphMosaicItem
              ? n.glyphMosaicItem.metrics.advance
              : 0,
            i = (n.x + s) * this._justify;
          for (let n = t; n <= r; n++) e[n].x -= i;
        }
      }
      var p = r(21315),
        g = r(35362);
      const y = 0.5;
      class m {
        constructor(e, t, r = 0, n = -1, s = y) {
          (this.x = e),
            (this.y = t),
            (this.angle = r),
            (this.segment = n),
            (this.minzoom = s);
        }
      }
      class x {
        constructor(e, t, r, n, s, i = y, o = a.B1) {
          (this.anchor = e),
            (this.labelAngle = t),
            (this.glyphAngle = r),
            (this.page = n),
            (this.alternateVerticalGlyph = s),
            (this.minzoom = i),
            (this.maxzoom = o);
        }
      }
      class _ {
        constructor(e, t, r, n, s, i, a, o, l, c, h, u) {
          (this.tl = e),
            (this.tr = t),
            (this.bl = r),
            (this.br = n),
            (this.mosaicRect = s),
            (this.labelAngle = i),
            (this.minAngle = a),
            (this.maxAngle = o),
            (this.anchor = l),
            (this.minzoom = c),
            (this.maxzoom = h),
            (this.page = u);
        }
      }
      class b {
        constructor(e) {
          this.shapes = e;
        }
      }
      class w {
        getIconPlacement(e, t, r) {
          const n = new g.E(e.x, e.y),
            s = r.rotationAlignment === p.aF.MAP,
            i = r.keepUpright;
          let o = r.rotate * a.DT;
          s && (o += e.angle);
          const l = new b([]);
          return (
            (r.allowOverlap && r.ignorePlacement) || (l.iconColliders = []),
            this._addIconPlacement(l, n, t, r, o),
            s && i && this._addIconPlacement(l, n, t, r, o + a.JJ),
            l
          );
        }
        _addIconPlacement(e, t, r, n, s) {
          const i = r.pixelRatio,
            o = r.width / i,
            l = r.height / i,
            c = n.offset;
          let h = c[0],
            u = c[1];
          switch (n.anchor) {
            case p.nR.CENTER:
              (h -= o / 2), (u -= l / 2);
              break;
            case p.nR.LEFT:
              u -= l / 2;
              break;
            case p.nR.RIGHT:
              (h -= o), (u -= l / 2);
              break;
            case p.nR.TOP:
              h -= o / 2;
              break;
            case p.nR.BOTTOM:
              (h -= o / 2), (u -= l);
              break;
            case p.nR.TOP_LEFT:
              break;
            case p.nR.BOTTOM_LEFT:
              u -= l;
              break;
            case p.nR.TOP_RIGHT:
              h -= o;
              break;
            case p.nR.BOTTOM_RIGHT:
              (h -= o), (u -= l);
          }
          const f = r.rect,
            d = 2 / i,
            m = h - d,
            x = u - d,
            b = m + f.width / i,
            w = x + f.height / i,
            I = new g.E(m, x),
            M = new g.E(b, w),
            k = new g.E(m, w),
            v = new g.E(b, x);
          if (0 !== s) {
            const e = Math.cos(s),
              t = Math.sin(s);
            I.rotate(e, t), M.rotate(e, t), k.rotate(e, t), v.rotate(e, t);
          }
          const T = new _(I, v, k, M, f, s, 0, 256, t, y, a.B1, 0);
          if ((e.shapes.push(T), !n.allowOverlap || !n.ignorePlacement)) {
            const r = n.size,
              i = n.padding,
              c = {
                xTile: t.x,
                yTile: t.y,
                dxPixels: h * r - i,
                dyPixels: u * r - i,
                hard: !n.optional,
                partIndex: 0,
                width: o * r + 2 * i,
                height: l * r + 2 * i,
                angle: s,
                minLod: y,
                maxLod: a.B1,
              };
            e.iconColliders.push(c);
          }
        }
        getTextPlacement(e, t, r, n) {
          const s = new g.E(e.x, e.y),
            i = n.rotate * a.DT,
            o = n.rotationAlignment === p.aF.MAP,
            l = n.keepUpright,
            c = n.padding;
          let h = y;
          const u = o ? e.angle : 0,
            m = e.segment >= 0 && o,
            w = n.allowOverlap && n.ignorePlacement ? null : [],
            I = [],
            M = !m;
          let k = Number.POSITIVE_INFINITY,
            v = Number.NEGATIVE_INFINITY,
            T = k,
            P = v;
          const L = (m || o) && l,
            A = n.size / f;
          let E = !1;
          for (const e of t)
            if (e.vertical) {
              E = !0;
              break;
            }
          let S,
            D = 0,
            B = 0;
          if (!m && E) {
            const e = d.getTextBox(t, n.lineHeight * f);
            switch (n.anchor) {
              case p.nR.LEFT:
                (D = e.height / 2), (B = -e.width / 2);
                break;
              case p.nR.RIGHT:
                (D = -e.height / 2), (B = e.width / 2);
                break;
              case p.nR.TOP:
                (D = e.height / 2), (B = e.width / 2);
                break;
              case p.nR.BOTTOM:
                (D = -e.height / 2), (B = -e.width / 2);
                break;
              case p.nR.TOP_LEFT:
                D = e.height;
                break;
              case p.nR.BOTTOM_LEFT:
                B = -e.width;
                break;
              case p.nR.TOP_RIGHT:
                B = e.width;
                break;
              case p.nR.BOTTOM_RIGHT:
                D = -e.height;
            }
          }
          (D += n.offset[0] * f), (B += n.offset[1] * f);
          for (const f of t) {
            const t = f.glyphMosaicItem;
            if (!t || t.rect.isEmpty) continue;
            const d = t.rect,
              p = t.metrics,
              b = t.page;
            if (w && M) {
              if (void 0 !== S && S !== f.y) {
                let t, r, s, o;
                E
                  ? ((t = -P + D), (r = k + B), (s = P - T), (o = v - k))
                  : ((t = k + D), (r = T + B), (s = v - k), (o = P - T));
                const l = {
                  xTile: e.x,
                  yTile: e.y,
                  dxPixels: t * A - c,
                  dyPixels: r * A - c,
                  hard: !n.optional,
                  partIndex: 1,
                  width: s * A + 2 * c,
                  height: o * A + 2 * c,
                  angle: i,
                  minLod: y,
                  maxLod: a.B1,
                };
                w.push(l),
                  (k = Number.POSITIVE_INFINITY),
                  (v = Number.NEGATIVE_INFINITY),
                  (T = k),
                  (P = v);
              }
              S = f.y;
            }
            const V = [];
            if (m) {
              const n = 0.5 * t.metrics.width,
                s = (f.x + p.left - 4 + n) * A * 8;
              if (
                ((h = this._placeGlyph(
                  e,
                  h,
                  s,
                  r,
                  e.segment,
                  1,
                  f.vertical,
                  b,
                  V,
                )),
                l &&
                  (h = this._placeGlyph(
                    e,
                    h,
                    s,
                    r,
                    e.segment,
                    -1,
                    f.vertical,
                    b,
                    V,
                  )),
                h >= 2)
              )
                break;
            } else
              V.push(new x(s, u, u, b, !1)),
                o && l && V.push(new x(s, u + a.JJ, u + a.JJ, b, !1));
            const C = f.x + p.left,
              R = f.y - 17 - p.top,
              O = C + p.width,
              F = R + p.height;
            let q, N, U, z, Z, G, H, j;
            if (!m && E)
              if (f.vertical) {
                const e = (C + O) / 2 - p.height / 2,
                  t = (R + F) / 2 + p.width / 2;
                (q = new g.E(-t - 4 + D, e - 4 + B)),
                  (N = new g.E(q.x + d.width, q.y + d.height)),
                  (U = new g.E(q.x, N.y)),
                  (z = new g.E(N.x, q.y));
              } else
                (q = new g.E(4 - R + D, C - 4 + B)),
                  (N = new g.E(q.x - d.height, q.y + d.width)),
                  (U = new g.E(N.x, q.y)),
                  (z = new g.E(q.x, N.y));
            else
              (q = new g.E(C - 4 + D, R - 4 + B)),
                (N = new g.E(q.x + d.width, q.y + d.height)),
                (U = new g.E(q.x, N.y)),
                (z = new g.E(N.x, q.y));
            for (const t of V) {
              let r, s, a, o;
              if (t.alternateVerticalGlyph) {
                if (!Z) {
                  const e = (R + F) / 2 + B;
                  (Z = new g.E(
                    (C + O) / 2 + D - p.height / 2 - 4,
                    e + p.width / 2 + 4,
                  )),
                    (G = new g.E(Z.x + d.height, Z.y - d.width)),
                    (H = new g.E(G.x, Z.y)),
                    (j = new g.E(Z.x, G.y));
                }
                (r = Z), (s = H), (a = j), (o = G);
              } else (r = q), (s = U), (a = z), (o = N);
              const l = R,
                h = F,
                u = t.glyphAngle + i;
              if (0 !== u) {
                const e = Math.cos(u),
                  t = Math.sin(u);
                (r = r.clone()),
                  (s = s.clone()),
                  (a = a.clone()),
                  (o = o.clone()),
                  r.rotate(e, t),
                  o.rotate(e, t),
                  s.rotate(e, t),
                  a.rotate(e, t);
              }
              let y = 0,
                x = 256;
              if (
                (m && E
                  ? f.vertical
                    ? t.alternateVerticalGlyph
                      ? ((y = 32), (x = 96))
                      : ((y = 224), (x = 32))
                    : ((y = 224), (x = 96))
                  : ((y = 192), (x = 64)),
                I.push(
                  new _(
                    r,
                    a,
                    s,
                    o,
                    d,
                    t.labelAngle,
                    y,
                    x,
                    t.anchor,
                    t.minzoom,
                    t.maxzoom,
                    t.page,
                  ),
                ),
                w && (!L || this._legible(t.labelAngle)))
              )
                if (M)
                  C < k && (k = C),
                    l < T && (T = l),
                    O > v && (v = O),
                    h > P && (P = h);
                else if (t.minzoom < 2) {
                  const r = {
                    xTile: e.x,
                    yTile: e.y,
                    dxPixels: (C + D) * A - c,
                    dyPixels: (l + D) * A - c,
                    hard: !n.optional,
                    partIndex: 1,
                    width: (O - C) * A + 2 * c,
                    height: (h - l) * A + 2 * c,
                    angle: u,
                    minLod: t.minzoom,
                    maxLod: t.maxzoom,
                  };
                  w.push(r);
                }
            }
          }
          if (h >= 2) return null;
          if (w && M) {
            let t, r, s, o;
            E
              ? ((t = -P + D), (r = k + B), (s = P - T), (o = v - k))
              : ((t = k + D), (r = T + B), (s = v - k), (o = P - T));
            const l = {
              xTile: e.x,
              yTile: e.y,
              dxPixels: t * A - c,
              dyPixels: r * A - c,
              hard: !n.optional,
              partIndex: 1,
              width: s * A + 2 * c,
              height: o * A + 2 * c,
              angle: i,
              minLod: y,
              maxLod: a.B1,
            };
            w.push(l);
          }
          const V = new b(I);
          return w && w.length > 0 && (V.textColliders = w), V;
        }
        _legible(e) {
          const t = (0, a.Or)(e);
          return t < 65 || t >= 193;
        }
        _placeGlyph(e, t, r, n, s, i, o, l, c) {
          let h = i;
          const u = h < 0 ? (0, a.DQ)(e.angle + a.JJ, a._U) : e.angle;
          let f = 0;
          r < 0 && ((h *= -1), (r *= -1), (f = a.JJ)), h > 0 && ++s;
          let d = new g.E(e.x, e.y),
            p = n[s],
            y = a.B1;
          if (n.length <= s) return y;
          for (;;) {
            const e = p.x - d.x,
              i = p.y - d.y,
              g = Math.sqrt(e * e + i * i),
              m = Math.max(r / g, t),
              _ = e / g,
              b = i / g,
              w = (0, a.DQ)(Math.atan2(b, _) + f, a._U);
            if (
              (c.push(new x(d, u, w, l, !1, m, y)),
              o && c.push(new x(d, u, w, l, !0, m, y)),
              m <= t)
            )
              return m;
            d = p.clone();
            do {
              if (((s += h), n.length <= s || s < 0)) return m;
              p = n[s];
            } while (d.isEqual(p));
            let I = p.x - d.x,
              M = p.y - d.y;
            const k = Math.sqrt(I * I + M * M);
            (I *= g / k), (M *= g / k), (d.x -= I), (d.y -= M), (y = m);
          }
        }
      }
      var I,
        M,
        k = r(45091),
        v = r(65390);
      ((M = I || (I = {}))[(M.moveTo = 1)] = 'moveTo'),
        (M[(M.lineTo = 2)] = 'lineTo'),
        (M[(M.close = 7)] = 'close');
      class T {
        constructor(e, t) {
          this.values = {};
          const r = t.keys,
            n = t.values;
          for (; e.next(); )
            switch (e.tag()) {
              case 1:
                this.id = e.getUInt64();
                break;
              case 2: {
                const t = e.getMessage(),
                  s = this.values;
                for (; !t.empty(); ) {
                  const e = t.getUInt32(),
                    i = t.getUInt32();
                  s[r[e]] = n[i];
                }
                t.release();
                break;
              }
              case 3:
                this.type = e.getUInt32();
                break;
              case 4:
                this._pbfGeometry = e.getMessage();
                break;
              default:
                e.skip();
            }
        }
        getGeometry(e) {
          if (void 0 !== this._geometry) return this._geometry;
          if (!this._pbfGeometry) return null;
          const t = this._pbfGeometry;
          let r, n;
          (this._pbfGeometry = null), e ? e.reset(this.type) : (r = []);
          let s,
            i = I.moveTo,
            a = 0,
            o = 0,
            l = 0;
          for (; !t.empty(); ) {
            if (0 === a) {
              const e = t.getUInt32();
              (i = 7 & e), (a = e >> 3);
            }
            switch ((a--, i)) {
              case I.moveTo:
                (o += t.getSInt32()),
                  (l += t.getSInt32()),
                  e
                    ? e.moveTo(o, l)
                    : (n && r.push(n), (n = []), n.push(new g.E(o, l)));
                break;
              case I.lineTo:
                (o += t.getSInt32()),
                  (l += t.getSInt32()),
                  e ? e.lineTo(o, l) : n.push(new g.E(o, l));
                break;
              case I.close:
                e ? e.close() : n && !n[0].equals(o, l) && n.push(n[0].clone());
                break;
              default:
                throw (t.release(), new Error('Invalid path operation'));
            }
          }
          return (
            e ? (s = e.result()) : (n && r.push(n), (s = r)),
            t.release(),
            (this._geometry = s),
            s
          );
        }
      }
      var P = r(26084);
      class L extends P.Z {
        constructor() {
          super(12);
        }
        add(e, t, r) {
          const n = this.array;
          n.push(e), n.push(t), n.push(r);
        }
      }
      class A {
        constructor(e) {
          for (
            this.extent = 4096,
              this.keys = [],
              this.values = [],
              this._pbfLayer = e.clone();
            e.next();

          )
            switch (e.tag()) {
              case 1:
                this.name = e.getString();
                break;
              case 3:
                this.keys.push(e.getString());
                break;
              case 4:
                this.values.push(e.processMessage(A._parseValue));
                break;
              case 5:
                this.extent = e.getUInt32();
                break;
              default:
                e.skip();
            }
        }
        getData() {
          return this._pbfLayer;
        }
        static _parseValue(e) {
          for (; e.next(); )
            switch (e.tag()) {
              case 1:
                return e.getString();
              case 2:
                return e.getFloat();
              case 3:
                return e.getDouble();
              case 4:
                return e.getInt64();
              case 5:
                return e.getUInt64();
              case 6:
                return e.getSInt64();
              case 7:
                return e.getBool();
              default:
                e.skip();
            }
          return null;
        }
      }
      class E extends P.Z {
        constructor(e) {
          super(e);
        }
        add(e, t, r, n, s, i, a, o, l, c, h, u) {
          const f = this.array;
          let d = P.Z.i1616to32(e, t);
          f.push(d);
          const p = 31;
          (d = P.Z.i8888to32(
            Math.round(p * r),
            Math.round(p * n),
            Math.round(p * s),
            Math.round(p * i),
          )),
            f.push(d),
            (d = P.Z.i8888to32(
              Math.round(p * a),
              Math.round(p * o),
              Math.round(p * l),
              Math.round(p * c),
            )),
            f.push(d),
            (d = P.Z.i1616to32(h, 0)),
            f.push(d),
            u && f.push(...u);
        }
      }
      class S extends P.Z {
        constructor(e) {
          super(e);
        }
        add(e, t, r) {
          const n = this.array;
          n.push(P.Z.i1616to32(e, t)), r && n.push(...r);
        }
      }
      class D extends P.Z {
        constructor(e) {
          super(e);
        }
        add(e, t, r, n, s, i, a) {
          const o = this.array,
            l = this.index;
          let c = P.Z.i1616to32(e, t);
          return (
            o.push(c),
            (c = P.Z.i8888to32(Math.round(15 * r), Math.round(15 * n), s, i)),
            o.push(c),
            a && o.push(...a),
            l
          );
        }
      }
      class B extends P.Z {
        constructor(e) {
          super(e);
        }
        add(e, t, r, n, s, i, o, l, c, h, u, f) {
          const d = this.array;
          let p = P.Z.i1616to32(e, t);
          d.push(p),
            (p = P.Z.i1616to32(Math.round(8 * r), Math.round(8 * n))),
            d.push(p),
            (p = P.Z.i8888to32(s / 4, i / 4, l, c)),
            d.push(p),
            (p = P.Z.i8888to32(0, (0, a.Or)(o), 10 * h, Math.min(10 * u, 255))),
            d.push(p),
            f && d.push(...f);
        }
      }
      class V extends P.Z {
        constructor(e) {
          super(e);
        }
        add(e, t, r, n, s) {
          const i = this.array,
            a = P.Z.i1616to32(2 * e + r, 2 * t + n);
          i.push(a), s && i.push(...s);
        }
      }
      class C {
        constructor(e, t, r) {
          (this.layerExtent = 4096),
            (this._features = []),
            (this.layer = e),
            (this.zoom = t),
            (this._spriteInfo = r),
            (this._filter = e.getFeatureFilter());
        }
        pushFeature(e) {
          (this._filter && !this._filter.filter(e, this.zoom)) ||
            this._features.push(e);
        }
        hasFeatures() {
          return this._features.length > 0;
        }
        getResources(e, t, r) {}
      }
      class R extends C {
        constructor(e, t, r, n, i) {
          super(e, t, r),
            (this.type = s.al.CIRCLE),
            (this._circleVertexBuffer = n),
            (this._circleIndexBuffer = i);
        }
        get circleIndexStart() {
          return this._circleIndexStart;
        }
        get circleIndexCount() {
          return this._circleIndexCount;
        }
        processFeatures(e) {
          const t = this._circleVertexBuffer,
            r = this._circleIndexBuffer;
          (this._circleIndexStart = 3 * r.index), (this._circleIndexCount = 0);
          const n = this.layer,
            s = this.zoom;
          e && e.setExtent(this.layerExtent);
          for (const i of this._features) {
            const a = i.getGeometry(e);
            if (!a) continue;
            const o = n.circleMaterial.encodeAttributes(i, s, n);
            for (const e of a)
              if (e)
                for (const n of e) {
                  const e = t.index;
                  t.add(n.x, n.y, 0, 0, o),
                    t.add(n.x, n.y, 0, 1, o),
                    t.add(n.x, n.y, 1, 0, o),
                    t.add(n.x, n.y, 1, 1, o),
                    r.add(e + 0, e + 1, e + 2),
                    r.add(e + 1, e + 2, e + 3),
                    (this._circleIndexCount += 6);
                }
          }
        }
        serialize() {
          let e = 6;
          (e += this.layerUIDs.length),
            (e += this._circleVertexBuffer.array.length),
            (e += this._circleIndexBuffer.array.length);
          const t = new Uint32Array(e),
            r = new Int32Array(t.buffer);
          let n = 0;
          (t[n++] = this.type), (t[n++] = this.layerUIDs.length);
          for (let e = 0; e < this.layerUIDs.length; e++)
            t[n++] = this.layerUIDs[e];
          (t[n++] = this._circleIndexStart),
            (t[n++] = this._circleIndexCount),
            (t[n++] = this._circleVertexBuffer.array.length);
          for (let e = 0; e < this._circleVertexBuffer.array.length; e++)
            r[n++] = this._circleVertexBuffer.array[e];
          t[n++] = this._circleIndexBuffer.array.length;
          for (let e = 0; e < this._circleIndexBuffer.array.length; e++)
            t[n++] = this._circleIndexBuffer.array[e];
          return t.buffer;
        }
      }
      var O = r(3894),
        F = r(95401);
      class q extends C {
        constructor(e, t, r, n, i, a, o) {
          super(e, t, r),
            (this.type = s.al.FILL),
            (this._patternMap = new Map()),
            (this._fillVertexBuffer = n),
            (this._fillIndexBuffer = i),
            (this._outlineVertexBuffer = a),
            (this._outlineIndexBuffer = o);
        }
        get fillIndexStart() {
          return this._fillIndexStart;
        }
        get fillIndexCount() {
          return this._fillIndexCount;
        }
        get outlineIndexStart() {
          return this._outlineIndexStart;
        }
        get outlineIndexCount() {
          return this._outlineIndexCount;
        }
        getResources(e, t, r) {
          const n = this.layer,
            s = this.zoom,
            i = n.getPaintProperty('fill-pattern');
          if (i)
            if (i.isDataDriven)
              for (const e of this._features) t(i.getValue(s, e), !0);
            else t(i.getValue(s), !0);
        }
        processFeatures(e) {
          (this._fillIndexStart = 3 * this._fillIndexBuffer.index),
            (this._fillIndexCount = 0),
            (this._outlineIndexStart = 3 * this._outlineIndexBuffer.index),
            (this._outlineIndexCount = 0);
          const t = this.layer,
            r = this.zoom,
            {
              fillMaterial: n,
              outlineMaterial: s,
              hasDataDrivenFill: i,
              hasDataDrivenOutline: a,
            } = t;
          e && e.setExtent(this.layerExtent);
          const o = t.getPaintProperty('fill-pattern'),
            l = null == o ? void 0 : o.isDataDriven;
          let c = !o && t.getPaintValue('fill-antialias', r);
          if (t.outlineUsesFillColor) {
            if (c && !t.hasDataDrivenOpacity) {
              const e = t.getPaintValue('fill-opacity', r),
                n = t.getPaintValue('fill-opacity', r + 1);
              e < 1 && n < 1 && (c = !1);
            }
            if (c && !t.hasDataDrivenColor) {
              const e = t.getPaintValue('fill-color', r),
                n = t.getPaintValue('fill-color', r + 1);
              e[3] < 1 && n[3] < 1 && (c = !1);
            }
          }
          const h = this._features,
            u = null == e ? void 0 : e.validateTessellation;
          if (l) {
            const i = [];
            for (const l of h) {
              const h = o.getValue(r, l),
                f = this._spriteInfo[h];
              if (!f || !f.rect) continue;
              const d = n.encodeAttributes(l, r, t, f),
                p = c && a ? s.encodeAttributes(l, r, t) : [],
                g = l.getGeometry(e);
              i.push({
                ddFillAttributes: d,
                ddOutlineAttributes: p,
                page: f.page,
                geometry: g,
              }),
                i.sort((e, t) => e.page - t.page);
              for (const {
                ddFillAttributes: e,
                ddOutlineAttributes: r,
                page: n,
                geometry: s,
              } of i)
                this._processFeature(s, c, t.outlineUsesFillColor, e, r, u, n);
            }
          } else
            for (const o of h) {
              const l = i ? n.encodeAttributes(o, r, t) : null,
                h = c && a ? s.encodeAttributes(o, r, t) : null,
                f = o.getGeometry(e);
              this._processFeature(f, c, t.outlineUsesFillColor, l, h, u);
            }
        }
        serialize() {
          let e = 10;
          (e += this.layerUIDs.length),
            (e += this._fillVertexBuffer.array.length),
            (e += this._fillIndexBuffer.array.length),
            (e += this._outlineVertexBuffer.array.length),
            (e += this._outlineIndexBuffer.array.length),
            (e += 3 * this._patternMap.size + 1);
          const t = new Uint32Array(e),
            r = new Int32Array(t.buffer);
          let n = 0;
          (t[n++] = this.type), (t[n++] = this.layerUIDs.length);
          for (let e = 0; e < this.layerUIDs.length; e++)
            t[n++] = this.layerUIDs[e];
          (t[n++] = this._fillIndexStart),
            (t[n++] = this._fillIndexCount),
            (t[n++] = this._outlineIndexStart),
            (t[n++] = this._outlineIndexCount);
          const s = this._patternMap,
            i = s.size;
          if (((t[n++] = i), i > 0))
            for (const [e, [r, i]] of s)
              (t[n++] = e), (t[n++] = r), (t[n++] = i);
          t[n++] = this._fillVertexBuffer.array.length;
          for (let e = 0; e < this._fillVertexBuffer.array.length; e++)
            r[n++] = this._fillVertexBuffer.array[e];
          t[n++] = this._fillIndexBuffer.array.length;
          for (let e = 0; e < this._fillIndexBuffer.array.length; e++)
            t[n++] = this._fillIndexBuffer.array[e];
          t[n++] = this._outlineVertexBuffer.array.length;
          for (let e = 0; e < this._outlineVertexBuffer.array.length; e++)
            r[n++] = this._outlineVertexBuffer.array[e];
          t[n++] = this._outlineIndexBuffer.array.length;
          for (let e = 0; e < this._outlineIndexBuffer.array.length; e++)
            t[n++] = this._outlineIndexBuffer.array[e];
          return t.buffer;
        }
        _processFeature(e, t, r, n, s, i, a) {
          if (!e) return;
          const o = e.length,
            l = !s || 0 === s.length;
          if (t && (!r || l))
            for (let t = 0; t < o; t++) this._processOutline(e[t], s);
          let c;
          for (let t = 0; t < o; t++) {
            const r = q._area(e[t]);
            r > 32
              ? (void 0 !== c && this._processFill(e, c, n, i, a), (c = [t]))
              : r < -32 && void 0 !== c && c.push(t);
          }
          void 0 !== c && this._processFill(e, c, n, i, a);
        }
        _processOutline(e, t) {
          const r = this._outlineVertexBuffer,
            n = this._outlineIndexBuffer,
            s = n.index;
          let i, a, o;
          const l = new g.E(0, 0),
            c = new g.E(0, 0),
            h = new g.E(0, 0);
          let u = -1,
            f = -1,
            d = -1,
            p = -1,
            y = -1,
            m = !1,
            x = e.length;
          if (x < 2) return;
          const _ = e[0];
          let b = e[x - 1];
          for (; x && b.isEqual(_); ) --x, (b = e[x - 1]);
          if (!(x - 0 < 2)) {
            for (let s = 0; s < x; ++s) {
              0 === s
                ? ((i = e[x - 1]),
                  (a = e[0]),
                  (o = e[1]),
                  l.assignSub(a, i),
                  l.normalize(),
                  l.rightPerpendicular())
                : ((i = a),
                  (a = o),
                  (o = s !== x - 1 ? e[s + 1] : e[0]),
                  l.assign(c));
              const g = this._isClipEdge(i, a);
              -1 === p && (m = g),
                c.assignSub(o, a),
                c.normalize(),
                c.rightPerpendicular();
              const _ = l.x * c.y - l.y * c.x;
              h.assignAdd(l, c), h.normalize();
              const b = -h.x * -l.x + -h.y * -l.y;
              let w = Math.abs(0 !== b ? 1 / b : 1);
              w > 8 && (w = 8),
                _ >= 0
                  ? ((d = r.add(a.x, a.y, l.x, l.y, 0, 1, t)),
                    -1 === p && (p = d),
                    u >= 0 && f >= 0 && d >= 0 && !g && n.add(u, f, d),
                    (f = r.add(a.x, a.y, w * -h.x, w * -h.y, 0, -1, t)),
                    -1 === y && (y = f),
                    u >= 0 && f >= 0 && d >= 0 && !g && n.add(u, f, d),
                    (u = f),
                    (f = d),
                    (d = r.add(a.x, a.y, h.x, h.y, 0, 1, t)),
                    u >= 0 && f >= 0 && d >= 0 && !g && n.add(u, f, d),
                    (f = r.add(a.x, a.y, c.x, c.y, 0, 1, t)),
                    u >= 0 && f >= 0 && d >= 0 && !g && n.add(u, f, d))
                  : ((d = r.add(a.x, a.y, w * h.x, w * h.y, 0, 1, t)),
                    -1 === p && (p = d),
                    u >= 0 && f >= 0 && d >= 0 && !g && n.add(u, f, d),
                    (f = r.add(a.x, a.y, -l.x, -l.y, 0, -1, t)),
                    -1 === y && (y = f),
                    u >= 0 && f >= 0 && d >= 0 && !g && n.add(u, f, d),
                    (u = f),
                    (f = d),
                    (d = r.add(a.x, a.y, -h.x, -h.y, 0, -1, t)),
                    u >= 0 && f >= 0 && d >= 0 && !g && n.add(u, f, d),
                    (u = r.add(a.x, a.y, -c.x, -c.y, 0, -1, t)),
                    u >= 0 && f >= 0 && d >= 0 && !g && n.add(u, f, d));
            }
            u >= 0 && f >= 0 && p >= 0 && !m && n.add(u, f, p),
              u >= 0 && p >= 0 && y >= 0 && !m && n.add(u, y, p),
              (this._outlineIndexCount += 3 * (n.index - s));
          }
        }
        _processFill(e, t, r, n, s) {
          let i;
          t.length > 1 && (i = []);
          let a = 0;
          for (const r of t) 0 !== a && i.push(a), (a += e[r].length);
          const o = 2 * a,
            l = O.Z.acquire();
          for (const r of t) {
            const t = e[r],
              n = t.length;
            for (let e = 0; e < n; ++e) l.push(t[e].x, t[e].y);
          }
          const c = (0, F.e)(l, i, 2);
          if (F.e.deviation(l, i, 2, c) > 0) {
            const n = t.map((t) => e[t].length),
              { buffer: i, vertexCount: a } = (0, v.b)(l, n);
            if (a > 0) {
              const e = this._fillVertexBuffer.index;
              for (let e = 0; e < a; e++)
                this._fillVertexBuffer.add(i[2 * e], i[2 * e + 1], r);
              for (let t = 0; t < a; t += 3) {
                const r = e + t;
                this._fillIndexBuffer.add(r, r + 1, r + 2);
              }
              if (void 0 !== s) {
                const e = this._patternMap,
                  t = e.get(s);
                t
                  ? (t[1] += a)
                  : e.set(s, [this._fillIndexStart + this._fillIndexCount, a]);
              }
              this._fillIndexCount += a;
            }
          } else {
            const e = c.length;
            if (e > 0) {
              const t = this._fillVertexBuffer.index;
              let n = 0;
              for (; n < o; ) this._fillVertexBuffer.add(l[n++], l[n++], r);
              let i = 0;
              for (; i < e; )
                this._fillIndexBuffer.add(t + c[i++], t + c[i++], t + c[i++]);
              if (void 0 !== s) {
                const t = this._patternMap,
                  r = t.get(s);
                r
                  ? (r[1] += e)
                  : t.set(s, [this._fillIndexStart + this._fillIndexCount, e]);
              }
              this._fillIndexCount += e;
            }
          }
          O.Z.release(l);
        }
        _isClipEdge(e, t) {
          return e.x === t.x
            ? e.x <= -64 || e.x >= 4160
            : e.y === t.y && (e.y <= -64 || e.y >= 4160);
        }
        static _area(e) {
          let t = 0;
          const r = e.length - 1;
          for (let n = 0; n < r; n++)
            t += (e[n].x - e[n + 1].x) * (e[n].y + e[n + 1].y);
          return (t += (e[r].x - e[0].x) * (e[r].y + e[0].y)), 0.5 * t;
        }
      }
      var N = r(67327);
      class U extends C {
        constructor(e, t, r, n, i) {
          super(e, t, r),
            (this.type = s.al.LINE),
            (this._tessellationOptions = {
              pixelCoordRatio: 8,
              halfWidth: 0,
              offset: 0,
            }),
            (this._patternMap = new Map()),
            (this.tessellationProperties = {
              _lineVertexBuffer: null,
              _lineIndexBuffer: null,
              _ddValues: null,
            }),
            (this.tessellationProperties._lineVertexBuffer = n),
            (this.tessellationProperties._lineIndexBuffer = i),
            (this._lineTessellator = new N.z(
              z(this.tessellationProperties),
              Z(this.tessellationProperties),
              e.canUseThinTessellation,
            ));
        }
        get lineIndexStart() {
          return this._lineIndexStart;
        }
        get lineIndexCount() {
          return this._lineIndexCount;
        }
        getResources(e, t, r) {
          const n = this.layer,
            s = this.zoom,
            i = n.hasDataDrivenLine,
            a = n.getPaintProperty('line-pattern'),
            o = n.getPaintProperty('line-dasharray'),
            l = n.getLayoutProperty('line-cap');
          if (!a && !o) return;
          const c = (null == l ? void 0 : l.getValue(s)) || 0,
            h = null == l ? void 0 : l.isDataDriven;
          if (i) {
            const e = null == a ? void 0 : a.isDataDriven,
              r = null == o ? void 0 : o.isDataDriven;
            if (!e && !r) return;
            for (const r of this._features)
              t(
                e
                  ? a.getValue(s, r)
                  : this._getDashArrayKey(r, s, n, o, h, l, c),
              );
          } else if (a) t(a.getValue(s));
          else if (o) {
            const e = o.getValue(s);
            t(n.getDashKey(e, c));
          }
        }
        processFeatures(e) {
          var t, r, n, s, i, a;
          (this._lineIndexStart =
            3 * this.tessellationProperties._lineIndexBuffer.index),
            (this._lineIndexCount = 0);
          const o = this.layer,
            l = this.zoom,
            c = this._features,
            h = this._tessellationOptions,
            { hasDataDrivenLine: u, lineMaterial: f } = o;
          e && e.setExtent(this.layerExtent);
          const d = o.getPaintProperty('line-pattern'),
            p = o.getPaintProperty('line-dasharray'),
            g = null == d ? void 0 : d.isDataDriven,
            y = null == p ? void 0 : p.isDataDriven;
          let m;
          m = o.getLayoutProperty('line-cap');
          const x = null != (t = m) && t.isDataDriven ? m : null,
            _ = x ? null : o.getLayoutValue('line-cap', l),
            b = _ || 0,
            w = !!x;
          m = o.getLayoutProperty('line-join');
          const I = null != (r = m) && r.isDataDriven ? m : null,
            M = I ? null : o.getLayoutValue('line-join', l);
          m = o.getLayoutProperty('line-miter-limit');
          const k = null != (n = m) && n.isDataDriven ? m : null,
            v = k ? null : o.getLayoutValue('line-miter-limit', l);
          m = o.getLayoutProperty('line-round-limit');
          const T = null != (s = m) && s.isDataDriven ? m : null,
            P = T ? null : o.getLayoutValue('line-round-limit', l);
          m = o.getPaintProperty('line-width');
          const L = null != (i = m) && i.isDataDriven ? m : null,
            A = L ? null : o.getPaintValue('line-width', l);
          m = o.getPaintProperty('line-offset');
          const E = null != (a = m) && a.isDataDriven ? m : null,
            S = E ? null : o.getPaintValue('line-offset', l);
          if (g || y) {
            const t = [];
            for (const r of c) {
              const n = g
                  ? d.getValue(l, r)
                  : this._getDashArrayKey(r, l, o, p, w, x, b),
                s = this._spriteInfo[n];
              if (!s || !s.rect) continue;
              const i = f.encodeAttributes(r, l, o, s),
                a = r.getGeometry(e);
              t.push({
                ddAttributes: i,
                page: s.page,
                cap: x ? x.getValue(l, r) : _,
                join: I ? I.getValue(l, r) : M,
                miterLimit: k ? k.getValue(l, r) : v,
                roundLimit: T ? T.getValue(l, r) : P,
                halfWidth: 0.5 * (L ? L.getValue(l, r) : A),
                offset: E ? E.getValue(l, r) : S,
                geometry: a,
              });
            }
            t.sort((e, t) => e.page - t.page), (h.textured = !0);
            for (const {
              ddAttributes: e,
              page: r,
              cap: n,
              join: s,
              miterLimit: i,
              roundLimit: a,
              halfWidth: o,
              offset: l,
              geometry: c,
            } of t)
              (h.capType = n),
                (h.joinType = s),
                (h.miterLimit = i),
                (h.roundLimit = a),
                (h.halfWidth = o),
                (h.offset = l),
                this._processFeature(c, e, r);
          } else {
            (h.textured = !(!d && !p)),
              (h.capType = _),
              (h.joinType = M),
              (h.miterLimit = v),
              (h.roundLimit = P),
              (h.halfWidth = 0.5 * A),
              (h.offset = S);
            for (const t of c) {
              const r = u ? f.encodeAttributes(t, l, o) : null;
              x && (h.capType = x.getValue(l, t)),
                I && (h.joinType = I.getValue(l, t)),
                k && (h.miterLimit = k.getValue(l, t)),
                T && (h.roundLimit = T.getValue(l, t)),
                L && (h.halfWidth = 0.5 * L.getValue(l, t)),
                E && (h.offset = E.getValue(l, t));
              const n = t.getGeometry(e);
              this._processFeature(n, r);
            }
          }
        }
        serialize() {
          let e = 6;
          (e += this.layerUIDs.length),
            (e += this.tessellationProperties._lineVertexBuffer.array.length),
            (e += this.tessellationProperties._lineIndexBuffer.array.length),
            (e += 3 * this._patternMap.size + 1);
          const t = new Uint32Array(e),
            r = new Int32Array(t.buffer);
          let n = 0;
          (t[n++] = this.type), (t[n++] = this.layerUIDs.length);
          for (let e = 0; e < this.layerUIDs.length; e++)
            t[n++] = this.layerUIDs[e];
          (t[n++] = this._lineIndexStart), (t[n++] = this._lineIndexCount);
          const s = this._patternMap,
            i = s.size;
          if (((t[n++] = i), i > 0))
            for (const [e, [r, i]] of s)
              (t[n++] = e), (t[n++] = r), (t[n++] = i);
          t[n++] = this.tessellationProperties._lineVertexBuffer.array.length;
          for (
            let e = 0;
            e < this.tessellationProperties._lineVertexBuffer.array.length;
            e++
          )
            r[n++] = this.tessellationProperties._lineVertexBuffer.array[e];
          t[n++] = this.tessellationProperties._lineIndexBuffer.array.length;
          for (
            let e = 0;
            e < this.tessellationProperties._lineIndexBuffer.array.length;
            e++
          )
            t[n++] = this.tessellationProperties._lineIndexBuffer.array[e];
          return t.buffer;
        }
        _processFeature(e, t, r) {
          if (!e) return;
          const n = e.length;
          for (let s = 0; s < n; s++) this._processGeometry(e[s], t, r);
        }
        _processGeometry(e, t, r) {
          if (e.length < 2) return;
          let n,
            s,
            i = e[0],
            a = 1;
          for (; a < e.length; )
            (n = e[a].x - i.x),
              (s = e[a].y - i.y),
              n * n + s * s < 1e-6 ? e.splice(a, 1) : ((i = e[a]), ++a);
          if (e.length < 2) return;
          const o = this.tessellationProperties._lineIndexBuffer,
            l = 3 * o.index;
          (this._tessellationOptions.initialDistance = 0),
            (this._tessellationOptions.wrapDistance = 65535),
            (this.tessellationProperties._ddValues = t),
            this._lineTessellator.tessellate(e, this._tessellationOptions);
          const c = 3 * o.index - l;
          if (void 0 !== r) {
            const e = this._patternMap,
              t = e.get(r);
            t ? (t[1] += c) : e.set(r, [l + this._lineIndexCount, c]);
          }
          this._lineIndexCount += c;
        }
        _getDashArrayKey(e, t, r, n, s, i, a) {
          const o = s ? i.getValue(t, e) : a,
            l = n.getValue(t, e);
          return r.getDashKey(l, o);
        }
      }
      const z = (e) => (t, r, n, s, i, a, o, l, c, h, u) => (
          e._lineVertexBuffer.add(t, r, o, l, n, s, i, a, c, h, u, e._ddValues),
          e._lineVertexBuffer.index - 1
        ),
        Z = (e) => (t, r, n) => {
          e._lineIndexBuffer.add(t, r, n);
        };
      var G = r(79087),
        H = r(19153),
        j = r(7333);
      function $(e, t) {
        return e.iconMosaicItem && t.iconMosaicItem
          ? e.iconMosaicItem.page === t.iconMosaicItem.page
            ? 0
            : e.iconMosaicItem.page - t.iconMosaicItem.page
          : e.iconMosaicItem && !t.iconMosaicItem
          ? 1
          : !e.iconMosaicItem && t.iconMosaicItem
          ? -1
          : 0;
      }
      class W extends C {
        constructor(e, t, r, n, i, a, o, l) {
          super(e, t, l.getSpriteItems()),
            (this.type = s.al.SYMBOL),
            (this._markerMap = new Map()),
            (this._glyphMap = new Map()),
            (this._glyphBufferDataStorage = new Map()),
            (this._isIconSDF = !1),
            (this._iconVertexBuffer = r),
            (this._iconIndexBuffer = n),
            (this._textVertexBuffer = i),
            (this._textIndexBuffer = a),
            (this._placementEngine = o),
            (this._workerTileHandler = l);
        }
        get markerPageMap() {
          return this._markerMap;
        }
        get glyphsPageMap() {
          return this._glyphMap;
        }
        get symbolInstances() {
          return this._symbolInstances;
        }
        getResources(e, t, r) {
          const n = this.layer,
            s = this.zoom;
          e && e.setExtent(this.layerExtent);
          const i = n.getLayoutProperty('icon-image'),
            a = n.getLayoutProperty('text-field');
          let o = n.getLayoutProperty('text-transform'),
            l = n.getLayoutProperty('text-font');
          const c = [];
          let h, u, f, d;
          i && !i.isDataDriven && (h = i.getValue(s)),
            a && !a.isDataDriven && (u = a.getValue(s)),
            (o && o.isDataDriven) ||
              ((f = n.getLayoutValue('text-transform', s)), (o = null)),
            (l && l.isDataDriven) ||
              ((d = n.getLayoutValue('text-font', s)), (l = null));
          for (const g of this._features) {
            const y = g.getGeometry(e);
            if (!y || 0 === y.length) continue;
            let m, x;
            i &&
              ((m = i.isDataDriven
                ? i.getValue(s, g)
                : this._replaceKeys(h, g.values)),
              m && t(m));
            let _ = !1;
            if (
              a &&
              ((x = a.isDataDriven
                ? a.getValue(s, g)
                : this._replaceKeys(u, g.values)),
              x)
            ) {
              switch (
                ((x = x.replace(/\\n/g, '\n')), o && (f = o.getValue(s, g)), f)
              ) {
                case p._5.LOWERCASE:
                  x = x.toLowerCase();
                  break;
                case p._5.UPPERCASE:
                  x = x.toUpperCase();
              }
              if (W._bidiEngine.hasBidiChar(x)) {
                let e;
                (e =
                  'rtl' === W._bidiEngine.checkContextual(x)
                    ? 'IDNNN'
                    : 'ICNNN'),
                  (x = W._bidiEngine.bidiTransform(x, e, 'VLYSN')),
                  (_ = !0);
              }
              const e = x.length;
              if (e > 0) {
                l && (d = l.getValue(s, g));
                for (const t of d) {
                  let n = r[t];
                  n || (n = r[t] = new Set());
                  for (let t = 0; t < e; t++) {
                    const e = x.charCodeAt(t);
                    n.add(e);
                  }
                }
              }
            }
            if (!m && !x) continue;
            const b = n.getLayoutValue('symbol-sort-key', s, g),
              w = {
                feature: g,
                sprite: m,
                label: x,
                rtl: _,
                geometry: y,
                hash: (x ? (0, H.hP)(x) : 0) ^ (m ? (0, H.hP)(m) : 0),
                priority: b,
                textFont: d,
              };
            c.push(w);
          }
          this._symbolFeatures = c;
        }
        processFeatures(e) {
          e && e.setExtent(this.layerExtent);
          const t = this.layer,
            r = this.zoom,
            n = t.getLayoutValue('symbol-placement', r),
            s = n !== p.R.POINT,
            i = 8 * t.getLayoutValue('symbol-spacing', r),
            o = t.getLayoutProperty('icon-image'),
            l = t.getLayoutProperty('text-field'),
            c = o ? new j._L(t, r, s) : null,
            h = l ? new j.nj(t, r, s) : null,
            u = this._workerTileHandler;
          let y;
          o && (y = u.getSpriteItems()),
            (this._iconIndexStart = 3 * this._iconIndexBuffer.index),
            (this._textIndexStart = 3 * this._textIndexBuffer.index),
            (this._iconIndexCount = 0),
            (this._textIndexCount = 0),
            this._markerMap.clear(),
            this._glyphMap.clear();
          const x = [];
          let _ = 1;
          h && h.size && (_ = h.size / f);
          const b = h ? h.maxAngle * a.DT : 0,
            w = h ? 8 * h.size : 0;
          for (const e of this._symbolFeatures) {
            let t, a;
            c &&
              y &&
              e.sprite &&
              ((t = y[e.sprite]), t && t.sdf && (this._isIconSDF = !0)),
              t && c.update(r, e.feature);
            let o = 0;
            const l = e.label;
            if (l) {
              h.update(r, e.feature);
              const t = s
                ? h.keepUpright
                : h.writingMode && h.writingMode.indexOf(p.r1.VERTICAL) >= 0;
              let n = 0.5;
              switch (h.anchor) {
                case p.nR.TOP_LEFT:
                case p.nR.LEFT:
                case p.nR.BOTTOM_LEFT:
                  n = 0;
                  break;
                case p.nR.TOP_RIGHT:
                case p.nR.RIGHT:
                case p.nR.BOTTOM_RIGHT:
                  n = 1;
              }
              let i = 0.5;
              switch (h.anchor) {
                case p.nR.TOP_LEFT:
                case p.nR.TOP:
                case p.nR.TOP_RIGHT:
                  i = 0;
                  break;
                case p.nR.BOTTOM_LEFT:
                case p.nR.BOTTOM:
                case p.nR.BOTTOM_RIGHT:
                  i = 1;
              }
              let c = 0.5;
              switch (h.justify) {
                case p.vL.AUTO:
                  c = n;
                  break;
                case p.vL.LEFT:
                  c = 0;
                  break;
                case p.vL.RIGHT:
                  c = 1;
              }
              const g = h.letterSpacing * f,
                y = s ? 0 : h.maxWidth * f,
                m = h.lineHeight * f,
                x = e.textFont.map((e) => u.getGlyphItems(e));
              if (
                ((a = new d(x, y, m, g, n, i, c).getShaping(l, e.rtl, t)),
                a && a.length > 0)
              ) {
                let e = 1e30,
                  t = -1e30;
                for (const r of a)
                  (e = Math.min(e, r.x)), (t = Math.max(t, r.x));
                o = (t - e + 48) * _ * 8;
              }
            }
            for (let r of e.geometry) {
              const l = [];
              if (n === p.R.LINE) {
                if (a && a.length > 0 && h && h.size) {
                  const e =
                    8 * h.size * (2 + Math.min(2, 4 * Math.abs(h.offset[1])));
                  r = W._smoothVertices(r, e);
                }
                W._pushAnchors(l, r, i, o);
              } else
                n === p.R.LINE_CENTER
                  ? W._pushCenterAnchor(l, r)
                  : e.feature.type === g.V.Polygon
                  ? W._pushCentroid(l, r)
                  : l.push(new m(r[0].x, r[0].y));
              for (const n of l) {
                if (n.x < 0 || n.x > 4096 || n.y < 0 || n.y > 4096) continue;
                if (
                  s &&
                  o > 0 &&
                  h.rotationAlignment === p.aF.MAP &&
                  !W._honorsTextMaxAngle(r, n, o, b, w)
                )
                  continue;
                const i = {
                  shaping: a,
                  line: r,
                  iconMosaicItem: t,
                  anchor: n,
                  symbolFeature: e,
                  textColliders: [],
                  iconColliders: [],
                  textVertexRanges: [],
                  iconVertexRanges: [],
                };
                x.push(i), this._processFeature(i, c, h);
              }
            }
          }
          x.sort($), this._addPlacedGlyphs(), (this._symbolInstances = x);
        }
        serialize() {
          let e = 11;
          (e += this.layerUIDs.length),
            (e += 3 * this.markerPageMap.size),
            (e += 3 * this.glyphsPageMap.size),
            (e += W._symbolsSerializationLength(this._symbolInstances)),
            (e += this._iconVertexBuffer.array.length),
            (e += this._iconIndexBuffer.array.length),
            (e += this._textVertexBuffer.array.length),
            (e += this._textIndexBuffer.array.length);
          const t = new Uint32Array(e),
            r = new Int32Array(t.buffer),
            n = new Float32Array(t.buffer);
          let s = 0;
          (t[s++] = this.type), (t[s++] = this.layerUIDs.length);
          for (let e = 0; e < this.layerUIDs.length; e++)
            t[s++] = this.layerUIDs[e];
          (t[s++] = this._isIconSDF ? 1 : 0),
            (t[s++] = this.markerPageMap.size);
          for (const [e, [r, n]] of this.markerPageMap)
            (t[s++] = e), (t[s++] = r), (t[s++] = n);
          t[s++] = this.glyphsPageMap.size;
          for (const [e, [r, n]] of this.glyphsPageMap)
            (t[s++] = e), (t[s++] = r), (t[s++] = n);
          (t[s++] = this._iconVertexBuffer.index / 4),
            (t[s++] = this._textVertexBuffer.index / 4),
            (s = W.serializeSymbols(t, r, n, s, this._symbolInstances)),
            (t[s++] = this._iconVertexBuffer.array.length);
          for (let e = 0; e < this._iconVertexBuffer.array.length; e++)
            r[s++] = this._iconVertexBuffer.array[e];
          t[s++] = this._iconIndexBuffer.array.length;
          for (let e = 0; e < this._iconIndexBuffer.array.length; e++)
            t[s++] = this._iconIndexBuffer.array[e];
          t[s++] = this._textVertexBuffer.array.length;
          for (let e = 0; e < this._textVertexBuffer.array.length; e++)
            r[s++] = this._textVertexBuffer.array[e];
          t[s++] = this._textIndexBuffer.array.length;
          for (let e = 0; e < this._textIndexBuffer.array.length; e++)
            t[s++] = this._textIndexBuffer.array[e];
          return t.buffer;
        }
        static _symbolsSerializationLength(e) {
          let t = 0;
          t += 1;
          for (const r of e || []) {
            (t += 4), (t += 1);
            for (const e of r.textColliders) t += 10;
            for (const e of r.iconColliders) t += 10;
            (t += 1),
              (t += 2 * r.textVertexRanges.length),
              (t += 1),
              (t += 2 * r.iconVertexRanges.length);
          }
          return t;
        }
        static serializeSymbols(e, t, r, n, s) {
          (s = s || []), (t[n++] = s.length);
          for (const e of s) {
            (t[n++] = e.anchor.x),
              (t[n++] = e.anchor.y),
              (t[n++] = e.symbolFeature.hash),
              (t[n++] = e.symbolFeature.priority),
              (t[n++] = e.textColliders.length + e.iconColliders.length);
            for (const s of e.textColliders)
              (t[n++] = s.xTile),
                (t[n++] = s.yTile),
                (t[n++] = s.dxPixels),
                (t[n++] = s.dyPixels),
                (t[n++] = s.hard ? 1 : 0),
                (t[n++] = s.partIndex),
                (r[n++] = s.minLod),
                (r[n++] = s.maxLod),
                (t[n++] = s.width),
                (t[n++] = s.height);
            for (const s of e.iconColliders)
              (t[n++] = s.xTile),
                (t[n++] = s.yTile),
                (t[n++] = s.dxPixels),
                (t[n++] = s.dyPixels),
                (t[n++] = s.hard ? 1 : 0),
                (t[n++] = s.partIndex),
                (r[n++] = s.minLod),
                (r[n++] = s.maxLod),
                (t[n++] = s.width),
                (t[n++] = s.height);
            t[n++] = e.textVertexRanges.length;
            for (const [r, s] of e.textVertexRanges) (t[n++] = r), (t[n++] = s);
            t[n++] = e.iconVertexRanges.length;
            for (const [r, s] of e.iconVertexRanges) (t[n++] = r), (t[n++] = s);
          }
          return n;
        }
        _replaceKeys(e, t) {
          return e.replace(/{([^{}]+)}/g, function (e, r) {
            return r in t ? t[r] : '';
          });
        }
        _processFeature(e, t, r) {
          const { line: n, iconMosaicItem: s, shaping: i, anchor: o } = e,
            l = this.zoom,
            c = this.layer,
            h = !!s;
          let u = !0;
          h && (u = t.optional || !s);
          const f = i && i.length > 0;
          let d,
            g,
            y = !0;
          if (
            (f && (y = r.optional),
            h && (d = this._placementEngine.getIconPlacement(o, s, t)),
            (d || u) &&
              (f && (g = this._placementEngine.getTextPlacement(o, i, n, r)),
              g || y))
          ) {
            if (
              ((d && g) ||
                (y || u
                  ? y || g
                    ? u || d || (g = null)
                    : (d = null)
                  : ((d = null), (g = null))),
              g)
            ) {
              const t = c.hasDataDrivenText
                ? c.textMaterial.encodeAttributes(e.symbolFeature.feature, l, c)
                : null;
              if (
                (this._storePlacedGlyphs(
                  e,
                  g.shapes,
                  l,
                  r.rotationAlignment,
                  t,
                ),
                g.textColliders)
              ) {
                e.textColliders = g.textColliders;
                for (const e of g.textColliders) {
                  (e.minLod = Math.max(l + (0, a.k3)(e.minLod), 0)),
                    (e.maxLod = Math.min(l + (0, a.k3)(e.maxLod), 25));
                  const t = e.angle;
                  if (t) {
                    const r = Math.cos(t),
                      n = Math.sin(t),
                      s = e.dxPixels * r - e.dyPixels * n,
                      i = e.dxPixels * n + e.dyPixels * r,
                      a = (e.dxPixels + e.width) * r - e.dyPixels * n,
                      o = (e.dxPixels + e.width) * n + e.dyPixels * r,
                      l = e.dxPixels * r - (e.dyPixels + e.height) * n,
                      c = e.dxPixels * n + (e.dyPixels + e.height) * r,
                      h =
                        (e.dxPixels + e.width) * r -
                        (e.dyPixels + e.height) * n,
                      u =
                        (e.dxPixels + e.width) * n +
                        (e.dyPixels + e.height) * r,
                      f = Math.min(s, a, l, h),
                      d = Math.max(s, a, l, h),
                      p = Math.min(i, o, c, u),
                      g = Math.max(i, o, c, u);
                    (e.dxPixels = f),
                      (e.dyPixels = p),
                      (e.width = d - f),
                      (e.height = g - p);
                  }
                }
              }
            }
            if (d) {
              const r = c.hasDataDrivenIcon
                ? c.iconMaterial.encodeAttributes(e.symbolFeature.feature, l, c)
                : null;
              if (
                (this._addPlacedIcons(
                  e,
                  d.shapes,
                  l,
                  s.page,
                  t.rotationAlignment === p.aF.VIEWPORT,
                  r,
                ),
                d.iconColliders)
              ) {
                e.iconColliders = d.iconColliders;
                for (const e of d.iconColliders) {
                  (e.minLod = Math.max(l + (0, a.k3)(e.minLod), 0)),
                    (e.maxLod = Math.min(l + (0, a.k3)(e.maxLod), 25));
                  const t = e.angle;
                  if (t) {
                    const r = Math.cos(t),
                      n = Math.sin(t),
                      s = e.dxPixels * r - e.dyPixels * n,
                      i = e.dxPixels * n + e.dyPixels * r,
                      a = (e.dxPixels + e.width) * r - e.dyPixels * n,
                      o = (e.dxPixels + e.width) * n + e.dyPixels * r,
                      l = e.dxPixels * r - (e.dyPixels + e.height) * n,
                      c = e.dxPixels * n + (e.dyPixels + e.height) * r,
                      h =
                        (e.dxPixels + e.width) * r -
                        (e.dyPixels + e.height) * n,
                      u =
                        (e.dxPixels + e.width) * n +
                        (e.dyPixels + e.height) * r,
                      f = Math.min(s, a, l, h),
                      d = Math.max(s, a, l, h),
                      p = Math.min(i, o, c, u),
                      g = Math.max(i, o, c, u);
                    (e.dxPixels = f),
                      (e.dyPixels = p),
                      (e.width = d - f),
                      (e.height = g - p);
                  }
                }
              }
            }
          }
        }
        _addPlacedIcons(e, t, r, n, s, i) {
          const o = Math.max(r - 1, 0),
            l = this._iconVertexBuffer,
            c = this._iconIndexBuffer,
            h = this._markerMap;
          for (const u of t) {
            const t = s ? 0 : Math.max(r + (0, a.k3)(u.minzoom), o),
              f = s ? 25 : Math.min(r + (0, a.k3)(u.maxzoom), 25);
            if (f <= t) continue;
            const d = u.tl,
              p = u.tr,
              g = u.bl,
              y = u.br,
              m = u.mosaicRect,
              x = u.labelAngle,
              _ = u.minAngle,
              b = u.maxAngle,
              w = u.anchor,
              I = l.index,
              M = m.x,
              k = m.y,
              v = M + m.width,
              T = k + m.height,
              P = l.index;
            l.add(w.x, w.y, d.x, d.y, M, k, x, _, b, t, f, i),
              l.add(w.x, w.y, p.x, p.y, v, k, x, _, b, t, f, i),
              l.add(w.x, w.y, g.x, g.y, M, T, x, _, b, t, f, i),
              l.add(w.x, w.y, y.x, y.y, v, T, x, _, b, t, f, i),
              e.iconVertexRanges.length > 0 &&
              e.iconVertexRanges[0][0] + e.iconVertexRanges[0][1] === P
                ? (e.iconVertexRanges[0][1] += 4)
                : e.iconVertexRanges.push([P, 4]),
              c.add(I + 0, I + 1, I + 2),
              c.add(I + 1, I + 2, I + 3),
              h.has(n)
                ? (h.get(n)[1] += 6)
                : h.set(n, [this._iconIndexStart + this._iconIndexCount, 6]),
              (this._iconIndexCount += 6);
          }
        }
        _addPlacedGlyphs() {
          const e = this._textVertexBuffer,
            t = this._textIndexBuffer,
            r = this._glyphMap;
          for (const [n, s] of this._glyphBufferDataStorage)
            for (const i of s) {
              const s = e.index,
                a = i.symbolInstance,
                o = i.ddAttributes,
                l = e.index;
              e.add(
                i.glyphAnchor[0],
                i.glyphAnchor[1],
                i.tl[0],
                i.tl[1],
                i.xmin,
                i.ymin,
                i.labelAngle,
                i.minAngle,
                i.maxAngle,
                i.minLod,
                i.maxLod,
                o,
              ),
                e.add(
                  i.glyphAnchor[0],
                  i.glyphAnchor[1],
                  i.tr[0],
                  i.tr[1],
                  i.xmax,
                  i.ymin,
                  i.labelAngle,
                  i.minAngle,
                  i.maxAngle,
                  i.minLod,
                  i.maxLod,
                  o,
                ),
                e.add(
                  i.glyphAnchor[0],
                  i.glyphAnchor[1],
                  i.bl[0],
                  i.bl[1],
                  i.xmin,
                  i.ymax,
                  i.labelAngle,
                  i.minAngle,
                  i.maxAngle,
                  i.minLod,
                  i.maxLod,
                  o,
                ),
                e.add(
                  i.glyphAnchor[0],
                  i.glyphAnchor[1],
                  i.br[0],
                  i.br[1],
                  i.xmax,
                  i.ymax,
                  i.labelAngle,
                  i.minAngle,
                  i.maxAngle,
                  i.minLod,
                  i.maxLod,
                  o,
                ),
                a.textVertexRanges.length > 0 &&
                a.textVertexRanges[0][0] + a.textVertexRanges[0][1] === l
                  ? (a.textVertexRanges[0][1] += 4)
                  : a.textVertexRanges.push([l, 4]),
                t.add(s + 0, s + 1, s + 2),
                t.add(s + 1, s + 2, s + 3),
                r.has(n)
                  ? (r.get(n)[1] += 6)
                  : r.set(n, [this._textIndexStart + this._textIndexCount, 6]),
                (this._textIndexCount += 6);
            }
          this._glyphBufferDataStorage.clear();
        }
        _storePlacedGlyphs(e, t, r, n, s) {
          const i = Math.max(r - 1, 0),
            o = n === p.aF.VIEWPORT;
          let l, c, h, u, f, d, g, y, m, x, _;
          for (const n of t)
            (l = o ? 0 : Math.max(r + (0, a.k3)(n.minzoom), i)),
              (c = o ? 25 : Math.min(r + (0, a.k3)(n.maxzoom), 25)),
              c <= l ||
                ((h = n.tl),
                (u = n.tr),
                (f = n.bl),
                (d = n.br),
                (g = n.labelAngle),
                (y = n.minAngle),
                (m = n.maxAngle),
                (x = n.anchor),
                (_ = n.mosaicRect),
                this._glyphBufferDataStorage.has(n.page) ||
                  this._glyphBufferDataStorage.set(n.page, []),
                this._glyphBufferDataStorage
                  .get(n.page)
                  .push({
                    glyphAnchor: [x.x, x.y],
                    tl: [h.x, h.y],
                    tr: [u.x, u.y],
                    bl: [f.x, f.y],
                    br: [d.x, d.y],
                    xmin: _.x,
                    ymin: _.y,
                    xmax: _.x + _.width,
                    ymax: _.y + _.height,
                    labelAngle: g,
                    minAngle: y,
                    maxAngle: m,
                    minLod: l,
                    maxLod: c,
                    placementLod: i,
                    symbolInstance: e,
                    ddAttributes: s,
                  }));
        }
        static _pushAnchors(e, t, r, n) {
          r += n;
          let s = 0;
          const i = t.length - 1;
          for (let e = 0; e < i; e++) s += g.E.distance(t[e], t[e + 1]);
          let o = n || r;
          if (((o *= 0.5), s <= o)) return;
          const l = o / s;
          let c = 0,
            h = -(r = s / Math.max(Math.round(s / r), 1)) / 2;
          const u = t.length - 1;
          for (let n = 0; n < u; n++) {
            const s = t[n],
              i = t[n + 1],
              o = i.x - s.x,
              u = i.y - s.y,
              f = Math.sqrt(o * o + u * u);
            let d;
            for (; h + r < c + f; ) {
              h += r;
              const t = (h - c) / f,
                p = (0, a.sX)(s.x, i.x, t),
                g = (0, a.sX)(s.y, i.y, t);
              void 0 === d && (d = Math.atan2(u, o)),
                e.push(new m(p, g, d, n, l));
            }
            c += f;
          }
        }
        static _pushCenterAnchor(e, t) {
          let r = 0;
          const n = t.length - 1;
          for (let e = 0; e < n; e++) r += g.E.distance(t[e], t[e + 1]);
          const s = r / 2;
          let i = 0;
          const o = t.length - 1;
          for (let r = 0; r < o; r++) {
            const n = t[r],
              o = t[r + 1],
              l = o.x - n.x,
              c = o.y - n.y,
              h = Math.sqrt(l * l + c * c);
            if (s < i + h) {
              const t = (s - i) / h,
                u = (0, a.sX)(n.x, o.x, t),
                f = (0, a.sX)(n.y, o.y, t),
                d = Math.atan2(c, l);
              return void e.push(new m(u, f, d, r, 0));
            }
            i += h;
          }
        }
        static _deviation(e, t, r) {
          const n = (t.x - e.x) * (r.x - t.x) + (t.y - e.y) * (r.y - t.y),
            s = (t.x - e.x) * (r.y - t.y) - (t.y - e.y) * (r.x - t.x);
          return Math.atan2(s, n);
        }
        static _honorsTextMaxAngle(e, t, r, n, s) {
          let i = 0;
          const a = r / 2;
          let o = new g.E(t.x, t.y),
            l = t.segment + 1;
          for (; i > -a; ) {
            if ((--l, l < 0)) return !1;
            (i -= g.E.distance(e[l], o)), (o = e[l]);
          }
          i += g.E.distance(e[l], e[l + 1]);
          const c = [];
          let h = 0;
          const u = e.length;
          for (; i < a; ) {
            const t = e[l];
            let r,
              a = l;
            do {
              if ((++a, a === u)) return !1;
              r = e[a];
            } while (r.isEqual(t));
            let o,
              f = a;
            do {
              if ((++f, f === u)) return !1;
              o = e[f];
            } while (o.isEqual(r));
            const d = this._deviation(t, r, o);
            for (
              c.push({ deviation: d, distToAnchor: i }), h += d;
              i - c[0].distToAnchor > s;

            )
              h -= c.shift().deviation;
            if (Math.abs(h) > n) return !1;
            (i += g.E.distance(r, o)), (l = a);
          }
          return !0;
        }
        static _smoothVertices(e, t) {
          if (t <= 0) return e;
          let r = e.length;
          if (r < 3) return e;
          const n = [];
          let s = 0,
            i = 0;
          n.push(0);
          for (let t = 1; t < r; t++) {
            const r = g.E.distance(e[t], e[t - 1]);
            r > 0 && ((s += r), n.push(s), i++, i !== t && (e[i] = e[t]));
          }
          if (((r = i + 1), r < 3)) return e;
          t = Math.min(t, 0.2 * s);
          const a = e[0].x,
            o = e[0].y,
            l = e[r - 1].x,
            c = e[r - 1].y,
            h = g.E.sub(e[0], e[1]);
          h.normalize(),
            (e[0].x += t * h.x),
            (e[0].y += t * h.y),
            h.assignSub(e[r - 1], e[r - 2]),
            h.normalize(),
            (e[r - 1].x += t * h.x),
            (e[r - 1].y += t * h.y),
            (n[0] -= t),
            (n[r - 1] += t);
          const u = [];
          u.push(new g.E(a, o));
          const f = 1e-6,
            d = 0.5 * t;
          for (let s = 1; s < r - 1; s++) {
            let i = 0,
              a = 0,
              o = 0;
            for (let r = s - 1; r >= 0; r--) {
              const l = d + n[r + 1] - n[s];
              if (l < 0) break;
              const c = n[r + 1] - n[r],
                h = n[s] - n[r] < d ? 1 : l / c;
              if (h < f) break;
              const u = h * h,
                p = h * l - 0.5 * u * c,
                g = (h * c) / t,
                y = e[r + 1],
                m = e[r].x - y.x,
                x = e[r].y - y.y;
              (i +=
                (g / p) *
                (y.x * h * l +
                  0.5 * u * (l * m - c * y.x) -
                  (u * h * c * m) / 3)),
                (a +=
                  (g / p) *
                  (y.y * h * l +
                    0.5 * u * (l * x - c * y.y) -
                    (u * h * c * x) / 3)),
                (o += g);
            }
            for (let l = s + 1; l < r; l++) {
              const r = d - n[l - 1] + n[s];
              if (r < 0) break;
              const c = n[l] - n[l - 1],
                h = n[l] - n[s] < d ? 1 : r / c;
              if (h < f) break;
              const u = h * h,
                p = h * r - 0.5 * u * c,
                g = (h * c) / t,
                y = e[l - 1],
                m = e[l].x - y.x,
                x = e[l].y - y.y;
              (i +=
                (g / p) *
                (y.x * h * r +
                  0.5 * u * (r * m - c * y.x) -
                  (u * h * c * m) / 3)),
                (a +=
                  (g / p) *
                  (y.y * h * r +
                    0.5 * u * (r * x - c * y.y) -
                    (u * h * c * x) / 3)),
                (o += g);
            }
            u.push(new g.E(i / o, a / o));
          }
          return (
            u.push(new g.E(l, c)),
            (e[0].x = a),
            (e[0].y = o),
            (e[r - 1].x = l),
            (e[r - 1].y = c),
            u
          );
        }
        static _pushCentroid(e, t) {
          const r = 4096,
            n = 4096,
            s = t.length - 1;
          let i = 0,
            a = 0,
            o = 0,
            l = t[0].x,
            c = t[0].y;
          l > r && (l = r),
            l < 0 && (l = 0),
            c > n && (c = n),
            c < 0 && (c = 0);
          for (let e = 1; e < s; e++) {
            let s = t[e].x,
              h = t[e].y,
              u = t[e + 1].x,
              f = t[e + 1].y;
            s > r && (s = r),
              s < 0 && (s = 0),
              h > n && (h = n),
              h < 0 && (h = 0),
              u > r && (u = r),
              u < 0 && (u = 0),
              f > n && (f = n),
              f < 0 && (f = 0);
            const d = (s - l) * (f - c) - (u - l) * (h - c);
            (i += d * (l + s + u)), (a += d * (c + h + f)), (o += d);
          }
          (i /= 3 * o),
            (a /= 3 * o),
            isNaN(i) || isNaN(a) || e.push(new m(i, a));
        }
      }
      W._bidiEngine = new G.Z();
      var K,
        Y = r(31294);
      !(function (e) {
        (e[(e.INITIALIZED = 0)] = 'INITIALIZED'),
          (e[(e.NO_DATA = 1)] = 'NO_DATA'),
          (e[(e.READY = 2)] = 'READY'),
          (e[(e.MODIFIED = 3)] = 'MODIFIED'),
          (e[(e.INVALID = 4)] = 'INVALID');
      })(K || (K = {}));
      class J {
        constructor(e, t, r, n, s) {
          if (
            ((this._pbfTiles = {}),
            (this._tileClippers = {}),
            (this._client = r),
            (this._tile = t),
            s)
          ) {
            this._styleLayerUIDs = new Set();
            for (const e of s) this._styleLayerUIDs.add(e);
          }
          (this._styleRepository = n),
            (this._layers = this._styleRepository.layers);
          const [i, a, o] = t.tileKey.split('/').map(parseFloat);
          this._level = i;
          const l = 8 + Math.max(5 * (this._level - 14), 0);
          for (const t of Object.keys(e)) {
            const r = e[t];
            if (
              ((this._pbfTiles[t] = new k.Z(
                new Uint8Array(r.protobuff),
                new DataView(r.protobuff),
              )),
              r.refKey)
            ) {
              const [e] = r.refKey.split('/').map(parseFloat),
                n = i - e;
              if (n > 0) {
                const e = (1 << n) - 1,
                  r = a & e,
                  s = o & e;
                this._tileClippers[t] = new Y.b(n, r, s, 8, l);
              }
            }
            this._tileClippers[t] || (this._tileClippers[t] = new Y.I());
          }
        }
        _canParseStyleLayer(e) {
          return !this._styleLayerUIDs || this._styleLayerUIDs.has(e);
        }
        async parse(e) {
          const t = (0, v.j)(),
            r = this._initialize(e),
            { returnedBuckets: n } = r;
          this._processLayers(r),
            this._linkReferences(r),
            this._filterFeatures(r);
          const s = [],
            i = new Set(),
            a = (e, t) => {
              i.has(e) || (s.push({ name: e, repeat: t }), i.add(e));
            },
            o = {};
          for (const e of n) e.getResources(e.tileClipper, a, o);
          if (this._tile.status === K.INVALID) return Promise.resolve([]);
          const l = this._fetchResources(s, o, e);
          return Promise.all([...l, t]).then(() =>
            this._processFeatures(r.returnedBuckets),
          );
        }
        _initialize(e) {
          return {
            signal: e && e.signal,
            sourceNameToTileData: this._parseTileData(this._pbfTiles),
            layers: this._layers,
            zoom: this._level,
            sourceNameToTileClipper: this._tileClippers,
            sourceNameToUniqueSourceLayerBuckets: {},
            sourceNameToUniqueSourceLayers: {},
            returnedBuckets: [],
            layerIdToBucket: {},
            referencerUIDToReferencedId: new Map(),
          };
        }
        _processLayers(e) {
          const {
            sourceNameToTileData: t,
            layers: r,
            zoom: n,
            sourceNameToTileClipper: s,
            sourceNameToUniqueSourceLayerBuckets: i,
            sourceNameToUniqueSourceLayers: a,
            returnedBuckets: o,
            layerIdToBucket: l,
            referencerUIDToReferencedId: c,
          } = e;
          for (let e = r.length - 1; e >= 0; e--) {
            const h = r[e];
            if (
              !this._canParseStyleLayer(h.uid) ||
              (h.minzoom && n < Math.floor(h.minzoom)) ||
              (h.maxzoom && n >= h.maxzoom) ||
              h.type === p.fR.BACKGROUND
            )
              continue;
            if (!t[h.source] || !s[h.source]) continue;
            const u = t[h.source],
              f = s[h.source],
              d = h.sourceLayer,
              g = u[d];
            if (g) {
              let e = a[h.source];
              if (
                (e || (e = a[h.source] = new Set()),
                e.add(h.sourceLayer),
                h.refLayerId)
              )
                c.set(h.uid, h.refLayerId);
              else {
                const e = this._createBucket(h);
                if (e) {
                  (e.layerUIDs = [h.uid]),
                    (e.layerExtent = g.extent),
                    (e.tileClipper = f);
                  let t = i[h.source];
                  t || (t = i[h.source] = {});
                  let r = t[d];
                  r || (r = t[d] = []), r.push(e), o.push(e), (l[h.id] = e);
                }
              }
            }
          }
        }
        _linkReferences(e) {
          const { layerIdToBucket: t, referencerUIDToReferencedId: r } = e;
          r.forEach((e, r) => {
            t[(e = e)] && t[e].layerUIDs.push(r);
          });
        }
        _filterFeatures(e) {
          const {
              signal: t,
              sourceNameToTileData: r,
              sourceNameToUniqueSourceLayerBuckets: s,
              sourceNameToUniqueSourceLayers: i,
            } = e,
            a = 10 * this._level,
            o = 10 * (this._level + 1),
            l = [],
            c = [];
          for (const e of Object.keys(i))
            i[e].forEach((t) => {
              l.push(t), c.push(e);
            });
          for (let e = 0; e < l.length; e++) {
            const i = c[e],
              h = l[e];
            if (!r[i] || !s[i]) continue;
            const u = r[i][h],
              f = s[i][h];
            if (!f || 0 === f.length) continue;
            if ((0, n.Hc)(t)) return;
            const d = u.getData();
            for (; d.nextTag(2); ) {
              const e = d.getMessage(),
                t = new T(e, u);
              e.release();
              const r = t.values;
              if (r) {
                const e = r._minzoom;
                if (e && e >= o) continue;
                const t = r._maxzoom;
                if (t && t <= a) continue;
              }
              for (const e of f) e.pushFeature(t);
            }
          }
        }
        _fetchResources(e, t, r) {
          const n = [],
            s = this._tile.getWorkerTileHandler();
          let i, a;
          e.length > 0 && ((i = s.fetchSprites(e, this._client, r)), n.push(i));
          for (const e in t) {
            const i = t[e];
            i.size > 0 &&
              ((a = s.fetchGlyphs(this._tile.tileKey, e, i, this._client, r)),
              n.push(a));
          }
          return n;
        }
        _processFeatures(e) {
          const t = e.filter(
            (e) => e.hasFeatures() || this._canParseStyleLayer(e.layer.uid),
          );
          for (const e of t) e.processFeatures(e.tileClipper);
          return t;
        }
        _parseTileData(e) {
          const t = {};
          for (const r of Object.keys(e)) {
            const n = e[r],
              s = {};
            for (; n.next(); )
              switch (n.tag()) {
                case 3: {
                  const e = n.getMessage(),
                    t = new A(e);
                  e.release(), (s[t.name] = t);
                  break;
                }
                default:
                  n.skip();
              }
            t[r] = s;
          }
          return t;
        }
        _createBucket(e) {
          switch (e.type) {
            case p.fR.BACKGROUND:
              return null;
            case p.fR.FILL:
              return this._createFillBucket(e);
            case p.fR.LINE:
              return this._createLineBucket(e);
            case p.fR.CIRCLE:
              return this._createCircleBucket(e);
            case p.fR.SYMBOL:
              return this._createSymbolBucket(e);
          }
        }
        _createFillBucket(e) {
          return new q(
            e,
            this._level,
            this._tile.getWorkerTileHandler().getSpriteItems(),
            new S(e.fillMaterial.getStride()),
            new L(),
            new D(e.outlineMaterial.getStride()),
            new L(),
          );
        }
        _createLineBucket(e) {
          return new U(
            e,
            this._level,
            this._tile.getWorkerTileHandler().getSpriteItems(),
            new E(e.lineMaterial.getStride()),
            new L(),
          );
        }
        _createCircleBucket(e) {
          return new R(
            e,
            this._level,
            this._tile.getWorkerTileHandler().getSpriteItems(),
            new V(e.circleMaterial.getStride()),
            new L(),
          );
        }
        _createSymbolBucket(e) {
          const t = this._tile;
          return new W(
            e,
            this._level,
            new B(e.iconMaterial.getStride()),
            new L(),
            new B(e.textMaterial.getStride()),
            new L(),
            t.placementEngine,
            t.getWorkerTileHandler(),
          );
        }
      }
      class X {
        constructor(e, t, r, n) {
          (this.status = K.INITIALIZED),
            (this.placementEngine = new w()),
            (this.tileKey = e),
            (this.refKeys = t),
            (this._workerTileHandler = r),
            (this._styleRepository = n);
        }
        release() {
          (this.tileKey = ''),
            (this.refKeys = null),
            (this.status = K.INITIALIZED),
            (this._workerTileHandler = null);
        }
        async parse(e, t) {
          const r = t && t.signal;
          if ((0, i.pC)(r)) {
            const e = () => {
              r.removeEventListener('abort', e), (this.status = K.INVALID);
            };
            r.addEventListener('abort', e);
          }
          let s;
          const a = { bucketsWithData: [], emptyBuckets: null };
          try {
            s = await this._parse(e, t);
          } catch (e) {
            if ((0, n.D_)(e)) throw e;
            return { result: a, transferList: [] };
          }
          this.status = K.READY;
          const o = a.bucketsWithData,
            l = [];
          for (const e of s)
            if (e.hasFeatures()) {
              const t = e.serialize();
              o.push(t);
            } else l.push(e.layer.uid);
          const c = [...o];
          let h = null;
          return (
            l.length > 0 && ((h = Uint32Array.from(l)), c.push(h.buffer)),
            (a.emptyBuckets = h),
            { result: a, transferList: c }
          );
        }
        setObsolete() {
          this.status = K.INVALID;
        }
        getLayers() {
          return this._workerTileHandler.getLayers();
        }
        getWorkerTileHandler() {
          return this._workerTileHandler;
        }
        async _parse(e, t) {
          const r = e.sourceName2DataAndRefKey;
          return 0 === Object.keys(r).length
            ? []
            : ((this.status = K.MODIFIED),
              new J(
                r,
                this,
                t.client,
                this._styleRepository,
                e.styleLayerUIDs,
              ).parse(t));
        }
      }
      var Q = r(51785);
      class ee {
        constructor() {
          (this._spriteInfo = {}), (this._glyphInfo = {});
        }
        reset() {
          return (
            (this._spriteInfo = {}), (this._glyphInfo = {}), Promise.resolve()
          );
        }
        getLayers() {
          var e;
          return null == (e = this._styleRepository) ? void 0 : e.layers;
        }
        async createTileAndParse(e, t) {
          const { key: r } = e,
            s = {};
          for (const t of Object.keys(e.sourceName2DataAndRefKey)) {
            const r = e.sourceName2DataAndRefKey[t];
            s[t] = r.refKey;
          }
          const i = new X(r, s, this, this._styleRepository);
          try {
            return await i.parse(e, t);
          } catch (e) {
            if ((i.setObsolete(), i.release(), !(0, n.D_)(e))) throw e;
            return null;
          }
        }
        updateStyle(e) {
          if (!e || 0 === e.length || !this._styleRepository) return;
          const t = this._styleRepository;
          for (const r of e) {
            const e = r.type,
              n = r.data;
            switch (e) {
              case s.Fr.PAINTER_CHANGED:
                t.setPaintProperties(n.layer, n.paint);
                break;
              case s.Fr.LAYOUT_CHANGED:
                t.setLayoutProperties(n.layer, n.layout);
                break;
              case s.Fr.LAYER_REMOVED:
                t.deleteStyleLayer(n.layer);
                break;
              case s.Fr.LAYER_CHANGED:
                t.setStyleLayer(n.layer, n.index);
                break;
              case s.Fr.SPRITES_CHANGED:
                this._spriteInfo = {};
            }
          }
        }
        setStyle(e) {
          (this._styleRepository = new Q.Z(e)),
            (this._spriteInfo = {}),
            (this._glyphInfo = {});
        }
        fetchSprites(e, t, r) {
          const n = [],
            s = this._spriteInfo;
          for (const t of e) void 0 === s[t.name] && n.push(t);
          return 0 === n.length
            ? Promise.resolve()
            : t.invoke('getSprites', n, { signal: r && r.signal }).then((e) => {
                for (const t in e) {
                  const r = e[t];
                  s[t] = r;
                }
              });
        }
        getSpriteItems() {
          return this._spriteInfo;
        }
        fetchGlyphs(e, t, r, n, s) {
          const i = [];
          let a = this._glyphInfo[t];
          return (
            a
              ? r.forEach((e) => {
                  a[e] || i.push(e);
                })
              : ((a = this._glyphInfo[t] = []), r.forEach((e) => i.push(e))),
            0 === i.length
              ? Promise.resolve()
              : n
                  .invoke('getGlyphs', { tileID: e, font: t, codePoints: i }, s)
                  .then((e) => {
                    for (let t = 0; t < e.length; t++) e[t] && (a[t] = e[t]);
                  })
          );
        }
        getGlyphItems(e) {
          return this._glyphInfo[e];
        }
      }
    },
  },
]);
