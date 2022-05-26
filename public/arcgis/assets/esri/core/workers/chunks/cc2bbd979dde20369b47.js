'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [6347],
  {
    22303: (e, t, r) => {
      r.d(t, { Z: () => f });
      var n,
        o,
        i = r(35270),
        s = r(22021),
        a = r(70586),
        l = r(75215);
      function u(e) {
        return (0, s.uZ)((0, l.vU)(e), 0, 255);
      }
      function c(e, t, r) {
        return (e = Number(e)), isNaN(e) ? r : e < t ? t : e > r ? r : e;
      }
      class d {
        constructor(e) {
          (this.r = 255),
            (this.g = 255),
            (this.b = 255),
            (this.a = 1),
            e && this.setColor(e);
        }
        static blendColors(e, t, r, n = new d()) {
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
                  4 === e.length && (r[3] = parseFloat(e[3])), d.fromArray(r, t)
                );
              }
              return d.fromArray(
                e.map((e) => parseFloat(e)),
                t,
              );
            }
            if (
              ('hsl' === n && 3 === e.length) ||
              ('hsla' === n && 4 === e.length)
            )
              return d.fromArray(
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
        static fromHex(e, t = new d()) {
          if ((4 !== e.length && 7 !== e.length) || '#' !== e[0]) return null;
          const r = 4 === e.length ? 4 : 8,
            n = (1 << r) - 1;
          let o = Number('0x' + e.substr(1));
          return isNaN(o)
            ? null
            : (['b', 'g', 'r'].forEach((e) => {
                const i = o & n;
                (o >>= r), (t[e] = 4 === r ? 17 * i : i);
              }),
              (t.a = 1),
              t);
        }
        static fromArray(e, t = new d()) {
          return (
            t._set(Number(e[0]), Number(e[1]), Number(e[2]), Number(e[3])),
            isNaN(t.a) && (t.a = 1),
            t._sanitize()
          );
        }
        static fromString(e, t) {
          const r = (0, i.St)(e) ? (0, i.h$)(e) : null;
          return (r && d.fromArray(r, t)) || d.fromRgb(e, t) || d.fromHex(e, t);
        }
        static fromJSON(e) {
          return e && new d([e[0], e[1], e[2], e[3] / 255]);
        }
        static toUnitRGB(e) {
          return (0, a.pC)(e) ? [e.r / 255, e.g / 255, e.b / 255] : null;
        }
        static toUnitRGBA(e) {
          return (0, a.pC)(e)
            ? [e.r / 255, e.g / 255, e.b / 255, null != e.a ? e.a : 1]
            : null;
        }
        get isBright() {
          return 0.299 * this.r + 0.587 * this.g + 0.114 * this.b >= 127;
        }
        setColor(e) {
          if ('string' == typeof e) d.fromString(e, this);
          else if (Array.isArray(e)) d.fromArray(e, this);
          else {
            var t, r, n, o;
            this._set(
              null != (t = e.r) ? t : 0,
              null != (r = e.g) ? r : 0,
              null != (n = e.b) ? n : 0,
              null != (o = e.a) ? o : 1,
            ),
              e instanceof d || this._sanitize();
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
        toArray(e = d.AlphaMode.ALWAYS) {
          const t = u(this.r),
            r = u(this.g),
            n = u(this.b);
          return e === d.AlphaMode.ALWAYS || 1 !== this.a
            ? [t, r, n, u(255 * this.a)]
            : [t, r, n];
        }
        clone() {
          return new d(this.toRgba());
        }
        hash() {
          return (
            (this.r << 24) | (this.g << 16) | (this.b << 8) | (255 * this.a)
          );
        }
        equals(e) {
          return (
            (0, a.pC)(e) &&
            e.r === this.r &&
            e.g === this.g &&
            e.b === this.b &&
            e.a === this.a
          );
        }
        _sanitize() {
          return (
            (this.r = Math.round(c(this.r, 0, 255))),
            (this.g = Math.round(c(this.g, 0, 255))),
            (this.b = Math.round(c(this.b, 0, 255))),
            (this.a = c(this.a, 0, 1)),
            this
          );
        }
        _set(e, t, r, n) {
          (this.r = e), (this.g = t), (this.b = r), (this.a = n);
        }
      }
      (d.prototype.declaredClass = 'esri.Color'),
        (n = d || (d = {})),
        ((o = n.AlphaMode || (n.AlphaMode = {}))[(o.ALWAYS = 0)] = 'ALWAYS'),
        (o[(o.UNLESS_OPAQUE = 1)] = 'UNLESS_OPAQUE');
      const f = d;
    },
    46521: (e, t, r) => {
      function n() {
        return [1, 0, 0, 0, 1, 0, 0, 0, 1];
      }
      function o(e, t) {
        return new Float64Array(e, t, 9);
      }
      r.d(t, { a: () => o, c: () => n }),
        Object.freeze({
          __proto__: null,
          create: n,
          clone: function (e) {
            return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8]];
          },
          fromValues: function (e, t, r, n, o, i, s, a, l) {
            return [e, t, r, n, o, i, s, a, l];
          },
          createView: o,
        });
    },
    51305: (e, t, r) => {
      r.d(t, {
        c: () => p,
        g: () => c,
        j: () => M,
        k: () => b,
        m: () => d,
        s: () => u,
      });
      var n = r(46521),
        o = r(94961),
        i = r(65617),
        s = r(46851),
        a = r(17896),
        l = r(98766);
      function u(e, t, r) {
        r *= 0.5;
        const n = Math.sin(r);
        return (
          (e[0] = n * t[0]),
          (e[1] = n * t[1]),
          (e[2] = n * t[2]),
          (e[3] = Math.cos(r)),
          e
        );
      }
      function c(e, t) {
        const r = 2 * Math.acos(t[3]),
          n = Math.sin(r / 2);
        return (
          n > s.E
            ? ((e[0] = t[0] / n), (e[1] = t[1] / n), (e[2] = t[2] / n))
            : ((e[0] = 1), (e[1] = 0), (e[2] = 0)),
          r
        );
      }
      function d(e, t, r) {
        const n = t[0],
          o = t[1],
          i = t[2],
          s = t[3],
          a = r[0],
          l = r[1],
          u = r[2],
          c = r[3];
        return (
          (e[0] = n * c + s * a + o * u - i * l),
          (e[1] = o * c + s * l + i * a - n * u),
          (e[2] = i * c + s * u + n * l - o * a),
          (e[3] = s * c - n * a - o * l - i * u),
          e
        );
      }
      function f(e, t, r, n) {
        const o = t[0],
          i = t[1],
          a = t[2],
          l = t[3];
        let u,
          c,
          d,
          f,
          p,
          h = r[0],
          b = r[1],
          y = r[2],
          g = r[3];
        return (
          (c = o * h + i * b + a * y + l * g),
          c < 0 && ((c = -c), (h = -h), (b = -b), (y = -y), (g = -g)),
          1 - c > s.E
            ? ((u = Math.acos(c)),
              (d = Math.sin(u)),
              (f = Math.sin((1 - n) * u) / d),
              (p = Math.sin(n * u) / d))
            : ((f = 1 - n), (p = n)),
          (e[0] = f * o + p * h),
          (e[1] = f * i + p * b),
          (e[2] = f * a + p * y),
          (e[3] = f * l + p * g),
          e
        );
      }
      function p(e, t) {
        return (e[0] = -t[0]), (e[1] = -t[1]), (e[2] = -t[2]), (e[3] = t[3]), e;
      }
      function h(e, t) {
        const r = t[0] + t[4] + t[8];
        let n;
        if (r > 0)
          (n = Math.sqrt(r + 1)),
            (e[3] = 0.5 * n),
            (n = 0.5 / n),
            (e[0] = (t[5] - t[7]) * n),
            (e[1] = (t[6] - t[2]) * n),
            (e[2] = (t[1] - t[3]) * n);
        else {
          let r = 0;
          t[4] > t[0] && (r = 1), t[8] > t[3 * r + r] && (r = 2);
          const o = (r + 1) % 3,
            i = (r + 2) % 3;
          (n = Math.sqrt(t[3 * r + r] - t[3 * o + o] - t[3 * i + i] + 1)),
            (e[r] = 0.5 * n),
            (n = 0.5 / n),
            (e[3] = (t[3 * o + i] - t[3 * i + o]) * n),
            (e[o] = (t[3 * o + r] + t[3 * r + o]) * n),
            (e[i] = (t[3 * i + r] + t[3 * r + i]) * n);
        }
        return e;
      }
      function b(e, t, r, n) {
        const o = (0.5 * Math.PI) / 180;
        (t *= o), (r *= o), (n *= o);
        const i = Math.sin(t),
          s = Math.cos(t),
          a = Math.sin(r),
          l = Math.cos(r),
          u = Math.sin(n),
          c = Math.cos(n);
        return (
          (e[0] = i * l * c - s * a * u),
          (e[1] = s * a * c + i * l * u),
          (e[2] = s * l * u - i * a * c),
          (e[3] = s * l * c + i * a * u),
          e
        );
      }
      const y = l.c,
        g = l.s,
        m = l.a,
        w = d,
        C = l.b,
        v = l.d,
        A = l.l,
        T = l.e,
        U = T,
        S = l.f,
        I = S,
        O = l.n,
        M = l.g,
        _ = l.h,
        E = (0, i.c)(),
        R = (0, i.f)(1, 0, 0),
        N = (0, i.f)(0, 1, 0),
        B = (0, o.a)(),
        k = (0, o.a)(),
        Z = (0, n.c)();
      Object.freeze({
        __proto__: null,
        identity: function (e) {
          return (e[0] = 0), (e[1] = 0), (e[2] = 0), (e[3] = 1), e;
        },
        setAxisAngle: u,
        getAxisAngle: c,
        multiply: d,
        rotateX: function (e, t, r) {
          r *= 0.5;
          const n = t[0],
            o = t[1],
            i = t[2],
            s = t[3],
            a = Math.sin(r),
            l = Math.cos(r);
          return (
            (e[0] = n * l + s * a),
            (e[1] = o * l + i * a),
            (e[2] = i * l - o * a),
            (e[3] = s * l - n * a),
            e
          );
        },
        rotateY: function (e, t, r) {
          r *= 0.5;
          const n = t[0],
            o = t[1],
            i = t[2],
            s = t[3],
            a = Math.sin(r),
            l = Math.cos(r);
          return (
            (e[0] = n * l - i * a),
            (e[1] = o * l + s * a),
            (e[2] = i * l + n * a),
            (e[3] = s * l - o * a),
            e
          );
        },
        rotateZ: function (e, t, r) {
          r *= 0.5;
          const n = t[0],
            o = t[1],
            i = t[2],
            s = t[3],
            a = Math.sin(r),
            l = Math.cos(r);
          return (
            (e[0] = n * l + o * a),
            (e[1] = o * l - n * a),
            (e[2] = i * l + s * a),
            (e[3] = s * l - i * a),
            e
          );
        },
        calculateW: function (e, t) {
          const r = t[0],
            n = t[1],
            o = t[2];
          return (
            (e[0] = r),
            (e[1] = n),
            (e[2] = o),
            (e[3] = Math.sqrt(Math.abs(1 - r * r - n * n - o * o))),
            e
          );
        },
        slerp: f,
        random: function (e) {
          const t = (0, s.R)(),
            r = (0, s.R)(),
            n = (0, s.R)(),
            o = Math.sqrt(1 - t),
            i = Math.sqrt(t);
          return (
            (e[0] = o * Math.sin(2 * Math.PI * r)),
            (e[1] = o * Math.cos(2 * Math.PI * r)),
            (e[2] = i * Math.sin(2 * Math.PI * n)),
            (e[3] = i * Math.cos(2 * Math.PI * n)),
            e
          );
        },
        invert: function (e, t) {
          const r = t[0],
            n = t[1],
            o = t[2],
            i = t[3],
            s = r * r + n * n + o * o + i * i,
            a = s ? 1 / s : 0;
          return (
            (e[0] = -r * a), (e[1] = -n * a), (e[2] = -o * a), (e[3] = i * a), e
          );
        },
        conjugate: p,
        fromMat3: h,
        fromEuler: b,
        str: function (e) {
          return 'quat(' + e[0] + ', ' + e[1] + ', ' + e[2] + ', ' + e[3] + ')';
        },
        copy: y,
        set: g,
        add: m,
        mul: w,
        scale: C,
        dot: v,
        lerp: A,
        length: T,
        len: U,
        squaredLength: S,
        sqrLen: I,
        normalize: O,
        exactEquals: M,
        equals: _,
        rotationTo: function (e, t, r) {
          const n = (0, a.d)(t, r);
          return n < -0.999999
            ? ((0, a.c)(E, R, t),
              (0, a.u)(E) < 1e-6 && (0, a.c)(E, N, t),
              (0, a.n)(E, E),
              u(e, E, Math.PI),
              e)
            : n > 0.999999
            ? ((e[0] = 0), (e[1] = 0), (e[2] = 0), (e[3] = 1), e)
            : ((0, a.c)(E, t, r),
              (e[0] = E[0]),
              (e[1] = E[1]),
              (e[2] = E[2]),
              (e[3] = 1 + n),
              O(e, e));
        },
        sqlerp: function (e, t, r, n, o, i) {
          return f(B, t, o, i), f(k, r, n, i), f(e, B, k, 2 * i * (1 - i)), e;
        },
        setAxes: function (e, t, r, n) {
          const o = Z;
          return (
            (o[0] = r[0]),
            (o[3] = r[1]),
            (o[6] = r[2]),
            (o[1] = n[0]),
            (o[4] = n[1]),
            (o[7] = n[2]),
            (o[2] = -t[0]),
            (o[5] = -t[1]),
            (o[8] = -t[2]),
            O(e, h(e, o))
          );
        },
      });
    },
    94961: (e, t, r) => {
      function n() {
        return [0, 0, 0, 1];
      }
      function o(e) {
        return [e[0], e[1], e[2], e[3]];
      }
      function i(e, t) {
        return new Float64Array(e, t, 4);
      }
      r.d(t, { I: () => s, a: () => n, b: () => o, c: () => i });
      const s = [0, 0, 0, 1];
      Object.freeze({
        __proto__: null,
        create: n,
        clone: o,
        fromValues: function (e, t, r, n) {
          return [e, t, r, n];
        },
        createView: i,
        IDENTITY: s,
      });
    },
    72119: (e, t, r) => {
      function n() {
        return new Float32Array(3);
      }
      function o(e, t, r) {
        const n = new Float32Array(3);
        return (n[0] = e), (n[1] = t), (n[2] = r), n;
      }
      function i() {
        return n();
      }
      function s() {
        return o(1, 1, 1);
      }
      function a() {
        return o(1, 0, 0);
      }
      function l() {
        return o(0, 1, 0);
      }
      function u() {
        return o(0, 0, 1);
      }
      r.d(t, { c: () => n, f: () => o });
      const c = i(),
        d = s(),
        f = a(),
        p = l(),
        h = u();
      Object.freeze({
        __proto__: null,
        create: n,
        clone: function (e) {
          const t = new Float32Array(3);
          return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), t;
        },
        fromValues: o,
        createView: function (e, t) {
          return new Float32Array(e, t, 3);
        },
        zeros: i,
        ones: s,
        unitX: a,
        unitY: l,
        unitZ: u,
        ZEROS: c,
        ONES: d,
        UNIT_X: f,
        UNIT_Y: p,
        UNIT_Z: h,
      });
    },
    35270: (e, t, r) => {
      r.d(t, {
        h$: () => i,
        VL: () => s,
        rW: () => u,
        B7: () => l,
        St: () => o,
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
      function o(e) {
        return n[e] || n[e.toLowerCase()];
      }
      function i(e) {
        var t;
        return null != (t = n[e]) ? t : n[e.toLowerCase()];
      }
      function s(e) {
        return [...i(e)];
      }
      function a(e, t, r) {
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
        const o = (((e % 360) + 360) % 360) / 360,
          i = r <= 0.5 ? r * (t + 1) : r + t - r * t,
          s = 2 * r - i;
        return [
          Math.round(255 * a(s, i, o + 1 / 3)),
          Math.round(255 * a(s, i, o)),
          Math.round(255 * a(s, i, o - 1 / 3)),
          n,
        ];
      }
      function u(e) {
        const t = e.length > 5,
          r = t ? 8 : 4,
          n = (1 << r) - 1,
          o = t ? 1 : 17,
          i = t ? 9 === e.length : 5 === e.length;
        let s = Number('0x' + e.substr(1));
        if (isNaN(s)) return null;
        const a = [0, 0, 0, 1];
        let l;
        return (
          i && ((l = s & n), (s >>= r), (a[3] = (o * l) / 255)),
          (l = s & n),
          (s >>= r),
          (a[2] = o * l),
          (l = s & n),
          (s >>= r),
          (a[1] = o * l),
          (l = s & n),
          (s >>= r),
          (a[0] = o * l),
          a
        );
      }
    },
    36030: (e, t, r) => {
      r.d(t, { J: () => i });
      var n = r(35454),
        o = r(5600);
      function i(e, t = {}) {
        var r;
        const i = e instanceof n.X ? e : new n.X(e, t),
          s = {
            type:
              null == (r = null == t ? void 0 : t.ignoreUnknown) || r
                ? i.apiValues
                : String,
            json: {
              type: i.jsonValues,
              read: (null == t || !t.readOnly) && { reader: i.read },
              write: { writer: i.write },
            },
          };
        return (
          void 0 !== (null == t ? void 0 : t.readOnly) &&
            (s.readOnly = !!t.readOnly),
          void 0 !== (null == t ? void 0 : t.default) &&
            (s.json.default = t.default),
          void 0 !== (null == t ? void 0 : t.name) && (s.json.name = t.name),
          (0, o.Cb)(s)
        );
      }
    },
    67900: (e, t, r) => {
      r.d(t, {
        gV: () => F,
        En: () => T,
        Z7: () => _,
        c9: () => M,
        _R: () => I,
        qE: () => N,
        cM: () => O,
        hd: () => c,
        ty: () => U,
        Jo: () => P,
        $C: () => S,
      }),
        r(80442);
      var n = r(35454),
        o = r(70586),
        i = r(24678),
        s = r(82971),
        a = r(68441),
        l = r(8744),
        u = r(58116);
      const c = 39.37,
        d = (a.sv.radius * Math.PI) / 200,
        f = /UNIT\[([^\]]+)\]\]$/i,
        p = u.Z,
        h = /UNIT\[([^\]]+)\]/i,
        b = new Set([
          4261, 4305, 4807, 4810, 4811, 4812, 4816, 4819, 4821, 4901, 4902,
          37225, 104139, 104140,
        ]),
        y = (0, n.w)()({
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
        g = (e) => e * e,
        m = (e) => e * e * e,
        w = {
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
              'square-millimeters': { inBaseUnits: g(0.001) },
              'square-centimeters': { inBaseUnits: g(0.01) },
              'square-decimeters': { inBaseUnits: g(0.1) },
              'square-meters': { inBaseUnits: 1 },
              'square-kilometers': { inBaseUnits: g(1e3) },
              'square-inches': { inBaseUnits: g(0.0254) },
              'square-feet': { inBaseUnits: g(0.3048) },
              'square-yards': { inBaseUnits: g(0.9144) },
              'square-miles': { inBaseUnits: g(1609.344) },
              'square-us-feet': { inBaseUnits: g(1200 / 3937) },
              acres: { inBaseUnits: 0.0015625 * g(1609.344) },
              ares: { inBaseUnits: 100 },
              hectares: { inBaseUnits: 1e4 },
            },
          },
          volume: {
            baseUnit: 'liters',
            units: {
              liters: { inBaseUnits: 1 },
              'cubic-millimeters': { inBaseUnits: 1e3 * m(0.001) },
              'cubic-centimeters': { inBaseUnits: 1e3 * m(0.01) },
              'cubic-decimeters': { inBaseUnits: 1e3 * m(0.1) },
              'cubic-meters': { inBaseUnits: 1e3 },
              'cubic-kilometers': { inBaseUnits: 1e3 * m(1e3) },
              'cubic-inches': { inBaseUnits: 1e3 * m(0.0254) },
              'cubic-feet': { inBaseUnits: 1e3 * m(0.3048) },
              'cubic-yards': { inBaseUnits: 1e3 * m(0.9144) },
              'cubic-miles': { inBaseUnits: 1e3 * m(1609.344) },
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
        C = (function () {
          const e = {};
          for (const t in w) for (const r in w[t].units) e[r] = t;
          return e;
        })();
      function v(e) {
        const t = C[e];
        if (t) return t;
        throw new Error('unknown type');
      }
      function A(e, t = null) {
        return (t = t || v(e)), w[t].baseUnit === e;
      }
      function T(e, t, r) {
        if (t === r) return e;
        const n = v(t);
        if (n !== v(r)) throw new Error('incompatible units');
        const o = A(t, n)
          ? e
          : (function (e, t, r) {
              return e * w[r].units[t].inBaseUnits;
            })(e, t, n);
        return A(r, n)
          ? o
          : (function (e, t, r) {
              return e / w[r].units[t].inBaseUnits;
            })(o, r, n);
      }
      function U(e, t, r) {
        return T(e, t, 'meters') / ((r * Math.PI) / 180);
      }
      function S(e) {
        return y.fromJSON(e.toLowerCase()) || null;
      }
      function I(e) {
        if (e && 'object' == typeof e && !(0, l.N$)(e)) return 1;
        const t = M(e);
        return t > 1e5 ? 1 : t;
      }
      function O(e) {
        return M(e) >= (e instanceof s.Z ? (0, i.Iu)(e).metersPerDegree : 1e5)
          ? 'meters'
          : N(e);
      }
      function M(e, t = a.sv.metersPerDegree) {
        return _(e, !0) || t;
      }
      function _(e, t = !1) {
        let r,
          n,
          o = null;
        if (
          (null != e &&
            ('object' == typeof e
              ? ((r = e.wkid), (n = e.wkt))
              : 'number' == typeof e
              ? (r = e)
              : 'string' == typeof e && (n = e)),
          r)
        ) {
          if ((0, l.o$)(r)) return a.yr.metersPerDegree;
          if ((0, l.ME)(r)) return a.Z1.metersPerDegree;
          (o = p.values[p[r]]), !o && t && b.has(r) && (o = d);
        } else
          n && (k(n) ? (o = E(f.exec(n), o)) : B(n) && (o = E(h.exec(n), o)));
        return o;
      }
      function E(e, t) {
        return e && e[1] ? R(e[1]) : t;
      }
      function R(e) {
        return parseFloat(e.split(',')[1]);
      }
      function N(e) {
        let t,
          r,
          n = null;
        if (
          (null != e &&
            ('object' == typeof e
              ? ((t = e.wkid), (r = e.wkt))
              : 'number' == typeof e
              ? (t = e)
              : 'string' == typeof e && (r = e)),
          t)
        )
          n = p.units[p[t]];
        else if (r) {
          const e = k(r) ? f : B(r) ? h : null;
          if (e) {
            const t = e.exec(r);
            t &&
              t[1] &&
              (n = (function (e) {
                const t = /[\\"\\']{1}([^\\"\\']+)/.exec(e);
                let r = t && t[1];
                if (!r || -1 === p.units.indexOf(r)) {
                  const t = R(e);
                  r = null;
                  const n = p.values;
                  for (let e = 0; e < n.length; ++e)
                    if (Math.abs(t - n[e]) < 1e-7) {
                      r = p.units[e];
                      break;
                    }
                }
                return r;
              })(t[1]));
          }
        }
        return (0, o.pC)(n) ? S(n) : null;
      }
      function B(e) {
        return /^GEOCCS/i.test(e);
      }
      function k(e) {
        return /^PROJCS/i.test(e);
      }
      const Z = {
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
        V = {
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
        F = (0, n.w)()(Z),
        P = (0, n.w)()(V);
      (0, n.w)()({ ...Z, ...V });
    },
    24678: (e, t, r) => {
      r.d(t, {
        GG: () => a,
        HQ: () => l,
        VY: () => u,
        wY: () => c,
        Iu: () => f,
        e8: () => p,
        rS: () => d,
      });
      var n = r(82971),
        o = r(68441),
        i = r(8744);
      function s(e) {
        return new n.Z({
          wkt: `GEOCCS["Spherical geocentric",\n    DATUM["Not specified",\n      SPHEROID["Sphere",${e.radius},0]],\n    PRIMEM["Greenwich",0.0,\n      AUTHORITY["EPSG","8901"]],\n    UNIT["m",1.0],\n    AXIS["Geocentric X",OTHER],\n    AXIS["Geocentric Y",EAST],\n    AXIS["Geocentric Z",NORTH]\n  ]`,
        });
      }
      const a = s(o.sv),
        l = s(o.yr),
        u = s(o.Z1),
        c = new n.Z({
          wkt: `GEOCCS["WGS 84",\n  DATUM["WGS_1984",\n    SPHEROID["WGS 84",${o.sv.radius},298.257223563,\n      AUTHORITY["EPSG","7030"]],\n    AUTHORITY["EPSG","6326"]],\n  PRIMEM["Greenwich",0,\n    AUTHORITY["EPSG","8901"]],\n  UNIT["m",1.0,\n    AUTHORITY["EPSG","9001"]],\n  AXIS["Geocentric X",OTHER],\n  AXIS["Geocentric Y",OTHER],\n  AXIS["Geocentric Z",NORTH],\n  AUTHORITY["EPSG","4978"]\n]`,
        });
      function d(e) {
        return e && ((0, i.BZ)(e) || e === l)
          ? l
          : e && ((0, i.V2)(e) || e === u)
          ? u
          : a;
      }
      function f(e) {
        return e && ((0, i.BZ)(e) || e === l)
          ? o.yr
          : e && ((0, i.V2)(e) || e === u)
          ? o.Z1
          : o.sv;
      }
      function p(e) {
        return (0, i.o$)(e) ? o.yr : (0, i.ME)(e) ? o.Z1 : o.sv;
      }
    },
    23030: (e, t, r) => {
      r.d(t, { Z: () => m });
      var n,
        o = r(43697),
        i = r(22974),
        s = r(5600),
        a = r(75215),
        l = r(36030),
        u = r(52011),
        c = r(25848),
        d = r(66338),
        f = r(22303),
        p = r(96674);
      let h = (n = class extends p.wq {
        constructor() {
          super(...arguments),
            (this.description = null),
            (this.label = null),
            (this.minValue = 0),
            (this.maxValue = 0),
            (this.color = null);
        }
        clone() {
          return new n({
            description: this.description,
            label: this.label,
            minValue: this.minValue,
            maxValue: this.maxValue,
            color: (0, i.d9)(this.color),
          });
        }
      });
      (0, o._)(
        [(0, s.Cb)({ type: String, json: { write: !0 } })],
        h.prototype,
        'description',
        void 0,
      ),
        (0, o._)(
          [(0, s.Cb)({ type: String, json: { write: !0 } })],
          h.prototype,
          'label',
          void 0,
        ),
        (0, o._)(
          [
            (0, s.Cb)({
              type: Number,
              json: {
                read: { source: 'classMinValue' },
                write: { target: 'classMinValue' },
              },
            }),
          ],
          h.prototype,
          'minValue',
          void 0,
        ),
        (0, o._)(
          [
            (0, s.Cb)({
              type: Number,
              json: {
                read: { source: 'classMaxValue' },
                write: { target: 'classMaxValue' },
              },
            }),
          ],
          h.prototype,
          'maxValue',
          void 0,
        ),
        (0, o._)(
          [(0, s.Cb)({ type: f.Z, json: { type: [a.z8], write: !0 } })],
          h.prototype,
          'color',
          void 0,
        ),
        (h = n =
          (0, o._)(
            [(0, u.j)('esri.renderers.support.pointCloud.ColorClassBreakInfo')],
            h,
          ));
      const b = h;
      var y;
      let g = (y = class extends c.Z {
        constructor(e) {
          super(e),
            (this.type = 'point-cloud-class-breaks'),
            (this.field = null),
            (this.legendOptions = null),
            (this.fieldTransformType = null),
            (this.colorClassBreakInfos = null);
        }
        clone() {
          return new y({
            ...this.cloneProperties(),
            field: this.field,
            fieldTransformType: this.fieldTransformType,
            colorClassBreakInfos: (0, i.d9)(this.colorClassBreakInfos),
            legendOptions: (0, i.d9)(this.legendOptions),
          });
        }
      });
      (0, o._)(
        [
          (0, l.J)({
            pointCloudClassBreaksRenderer: 'point-cloud-class-breaks',
          }),
        ],
        g.prototype,
        'type',
        void 0,
      ),
        (0, o._)(
          [(0, s.Cb)({ json: { write: !0 }, type: String })],
          g.prototype,
          'field',
          void 0,
        ),
        (0, o._)(
          [(0, s.Cb)({ type: d.Z, json: { write: !0 } })],
          g.prototype,
          'legendOptions',
          void 0,
        ),
        (0, o._)(
          [
            (0, s.Cb)({
              type: c.Z.fieldTransformTypeKebabDict.apiValues,
              json: {
                type: c.Z.fieldTransformTypeKebabDict.jsonValues,
                read: c.Z.fieldTransformTypeKebabDict.read,
                write: c.Z.fieldTransformTypeKebabDict.write,
              },
            }),
          ],
          g.prototype,
          'fieldTransformType',
          void 0,
        ),
        (0, o._)(
          [(0, s.Cb)({ type: [b], json: { write: !0 } })],
          g.prototype,
          'colorClassBreakInfos',
          void 0,
        ),
        (g = y =
          (0, o._)(
            [(0, u.j)('esri.renderers.PointCloudClassBreaksRenderer')],
            g,
          ));
      const m = g;
    },
    25848: (e, t, r) => {
      r.d(t, { Z: () => U });
      var n,
        o = r(43697),
        i = r(35454),
        s = r(96674),
        a = r(22974),
        l = r(5600),
        u = (r(75215), r(52011));
      r(67676), r(80442);
      let c = (n = class extends s.wq {
        constructor() {
          super(...arguments),
            (this.field = null),
            (this.minValue = 0),
            (this.maxValue = 255);
        }
        clone() {
          return new n({
            field: this.field,
            minValue: this.minValue,
            maxValue: this.maxValue,
          });
        }
      });
      (0, o._)(
        [(0, l.Cb)({ type: String, json: { write: !0 } })],
        c.prototype,
        'field',
        void 0,
      ),
        (0, o._)(
          [(0, l.Cb)({ type: Number, nonNullable: !0, json: { write: !0 } })],
          c.prototype,
          'minValue',
          void 0,
        ),
        (0, o._)(
          [(0, l.Cb)({ type: Number, nonNullable: !0, json: { write: !0 } })],
          c.prototype,
          'maxValue',
          void 0,
        ),
        (c = n =
          (0, o._)(
            [(0, u.j)('esri.renderers.support.pointCloud.ColorModulation')],
            c,
          ));
      const d = c,
        f = new i.X({
          pointCloudFixedSizeAlgorithm: 'fixed-size',
          pointCloudSplatAlgorithm: 'splat',
        });
      let p = class extends s.wq {};
      (0, o._)(
        [
          (0, l.Cb)({
            type: f.apiValues,
            readOnly: !0,
            nonNullable: !0,
            json: { type: f.jsonValues, read: !1, write: f.write },
          }),
        ],
        p.prototype,
        'type',
        void 0,
      ),
        (p = (0, o._)(
          [(0, u.j)('esri.renderers.support.pointCloud.PointSizeAlgorithm')],
          p,
        ));
      const h = p;
      var b,
        y = r(36030);
      let g = (b = class extends h {
        constructor() {
          super(...arguments),
            (this.type = 'fixed-size'),
            (this.size = 0),
            (this.useRealWorldSymbolSizes = null);
        }
        clone() {
          return new b({
            size: this.size,
            useRealWorldSymbolSizes: this.useRealWorldSymbolSizes,
          });
        }
      });
      (0, o._)(
        [(0, y.J)({ pointCloudFixedSizeAlgorithm: 'fixed-size' })],
        g.prototype,
        'type',
        void 0,
      ),
        (0, o._)(
          [(0, l.Cb)({ type: Number, nonNullable: !0, json: { write: !0 } })],
          g.prototype,
          'size',
          void 0,
        ),
        (0, o._)(
          [(0, l.Cb)({ type: Boolean, json: { write: !0 } })],
          g.prototype,
          'useRealWorldSymbolSizes',
          void 0,
        ),
        (g = b =
          (0, o._)(
            [
              (0, u.j)(
                'esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm',
              ),
            ],
            g,
          ));
      const m = g;
      var w;
      let C = (w = class extends h {
        constructor() {
          super(...arguments), (this.type = 'splat'), (this.scaleFactor = 1);
        }
        clone() {
          return new w({ scaleFactor: this.scaleFactor });
        }
      });
      (0, o._)(
        [(0, y.J)({ pointCloudSplatAlgorithm: 'splat' })],
        C.prototype,
        'type',
        void 0,
      ),
        (0, o._)(
          [
            (0, l.Cb)({
              type: Number,
              value: 1,
              nonNullable: !0,
              json: { write: !0 },
            }),
          ],
          C.prototype,
          'scaleFactor',
          void 0,
        ),
        (C = w =
          (0, o._)(
            [
              (0, u.j)(
                'esri.renderers.support.pointCloud.PointSizeSplatAlgorithm',
              ),
            ],
            C,
          ));
      const v = {
          key: 'type',
          base: h,
          typeMap: { 'fixed-size': m, splat: C },
        },
        A = (0, i.w)()({
          pointCloudClassBreaksRenderer: 'point-cloud-class-breaks',
          pointCloudRGBRenderer: 'point-cloud-rgb',
          pointCloudStretchRenderer: 'point-cloud-stretch',
          pointCloudUniqueValueRenderer: 'point-cloud-unique-value',
        });
      let T = class extends s.wq {
        constructor(e) {
          super(e),
            (this.type = void 0),
            (this.pointSizeAlgorithm = null),
            (this.colorModulation = null),
            (this.pointsPerInch = 10);
        }
        clone() {
          return (
            console.warn(
              '.clone() is not implemented for ' + this.declaredClass,
            ),
            null
          );
        }
        cloneProperties() {
          return {
            pointSizeAlgorithm: (0, a.d9)(this.pointSizeAlgorithm),
            colorModulation: (0, a.d9)(this.colorModulation),
            pointsPerInch: (0, a.d9)(this.pointsPerInch),
          };
        }
      };
      (0, o._)(
        [
          (0, l.Cb)({
            type: A.apiValues,
            readOnly: !0,
            nonNullable: !0,
            json: { type: A.jsonValues, read: !1, write: A.write },
          }),
        ],
        T.prototype,
        'type',
        void 0,
      ),
        (0, o._)(
          [(0, l.Cb)({ types: v, json: { write: !0 } })],
          T.prototype,
          'pointSizeAlgorithm',
          void 0,
        ),
        (0, o._)(
          [(0, l.Cb)({ type: d, json: { write: !0 } })],
          T.prototype,
          'colorModulation',
          void 0,
        ),
        (0, o._)(
          [(0, l.Cb)({ json: { write: !0 }, nonNullable: !0, type: Number })],
          T.prototype,
          'pointsPerInch',
          void 0,
        ),
        (T = (0, o._)([(0, u.j)('esri.renderers.PointCloudRenderer')], T)),
        ((T || (T = {})).fieldTransformTypeKebabDict = new i.X({
          none: 'none',
          lowFourBit: 'low-four-bit',
          highFourBit: 'high-four-bit',
          absoluteValue: 'absolute-value',
          moduloTen: 'modulo-ten',
        }));
      const U = T;
    },
    14008: (e, t, r) => {
      r.d(t, { Z: () => p });
      var n,
        o = r(43697),
        i = r(22974),
        s = r(5600),
        a = (r(75215), r(36030)),
        l = r(52011),
        u = r(25848),
        c = r(66338),
        d = r(21849);
      let f = (n = class extends u.Z {
        constructor(e) {
          super(e),
            (this.type = 'point-cloud-stretch'),
            (this.field = null),
            (this.legendOptions = null),
            (this.fieldTransformType = null),
            (this.stops = null);
        }
        clone() {
          return new n({
            ...this.cloneProperties(),
            field: (0, i.d9)(this.field),
            fieldTransformType: (0, i.d9)(this.fieldTransformType),
            stops: (0, i.d9)(this.stops),
            legendOptions: (0, i.d9)(this.legendOptions),
          });
        }
      });
      (0, o._)(
        [(0, a.J)({ pointCloudStretchRenderer: 'point-cloud-stretch' })],
        f.prototype,
        'type',
        void 0,
      ),
        (0, o._)(
          [(0, s.Cb)({ json: { write: !0 }, type: String })],
          f.prototype,
          'field',
          void 0,
        ),
        (0, o._)(
          [(0, s.Cb)({ type: c.Z, json: { write: !0 } })],
          f.prototype,
          'legendOptions',
          void 0,
        ),
        (0, o._)(
          [
            (0, s.Cb)({
              type: u.Z.fieldTransformTypeKebabDict.apiValues,
              json: {
                type: u.Z.fieldTransformTypeKebabDict.jsonValues,
                read: u.Z.fieldTransformTypeKebabDict.read,
                write: u.Z.fieldTransformTypeKebabDict.write,
              },
            }),
          ],
          f.prototype,
          'fieldTransformType',
          void 0,
        ),
        (0, o._)(
          [(0, s.Cb)({ type: [d.Z], json: { write: !0 } })],
          f.prototype,
          'stops',
          void 0,
        ),
        (f = n =
          (0, o._)([(0, l.j)('esri.renderers.PointCloudStretchRenderer')], f));
      const p = f;
    },
    46329: (e, t, r) => {
      r.d(t, { Z: () => m });
      var n,
        o = r(43697),
        i = r(22974),
        s = r(5600),
        a = r(75215),
        l = r(36030),
        u = r(52011),
        c = r(25848),
        d = r(66338),
        f = r(22303),
        p = r(96674);
      let h = (n = class extends p.wq {
        constructor() {
          super(...arguments),
            (this.description = null),
            (this.label = null),
            (this.values = null),
            (this.color = null);
        }
        clone() {
          return new n({
            description: this.description,
            label: this.label,
            values: (0, i.d9)(this.values),
            color: (0, i.d9)(this.color),
          });
        }
      });
      (0, o._)(
        [(0, s.Cb)({ type: String, json: { write: !0 } })],
        h.prototype,
        'description',
        void 0,
      ),
        (0, o._)(
          [(0, s.Cb)({ type: String, json: { write: !0 } })],
          h.prototype,
          'label',
          void 0,
        ),
        (0, o._)(
          [(0, s.Cb)({ type: [String], json: { write: !0 } })],
          h.prototype,
          'values',
          void 0,
        ),
        (0, o._)(
          [(0, s.Cb)({ type: f.Z, json: { type: [a.z8], write: !0 } })],
          h.prototype,
          'color',
          void 0,
        ),
        (h = n =
          (0, o._)(
            [
              (0, u.j)(
                'esri.renderers.support.pointCloud.ColorUniqueValueInfo',
              ),
            ],
            h,
          ));
      const b = h;
      var y;
      let g = (y = class extends c.Z {
        constructor(e) {
          super(e),
            (this.type = 'point-cloud-unique-value'),
            (this.field = null),
            (this.fieldTransformType = null),
            (this.colorUniqueValueInfos = null),
            (this.legendOptions = null);
        }
        clone() {
          return new y({
            ...this.cloneProperties(),
            field: (0, i.d9)(this.field),
            fieldTransformType: (0, i.d9)(this.fieldTransformType),
            colorUniqueValueInfos: (0, i.d9)(this.colorUniqueValueInfos),
            legendOptions: (0, i.d9)(this.legendOptions),
          });
        }
      });
      (0, o._)(
        [
          (0, l.J)({
            pointCloudUniqueValueRenderer: 'point-cloud-unique-value',
          }),
        ],
        g.prototype,
        'type',
        void 0,
      ),
        (0, o._)(
          [(0, s.Cb)({ json: { write: !0 }, type: String })],
          g.prototype,
          'field',
          void 0,
        ),
        (0, o._)(
          [
            (0, s.Cb)({
              type: c.Z.fieldTransformTypeKebabDict.apiValues,
              json: {
                type: c.Z.fieldTransformTypeKebabDict.jsonValues,
                read: c.Z.fieldTransformTypeKebabDict.read,
                write: c.Z.fieldTransformTypeKebabDict.write,
              },
            }),
          ],
          g.prototype,
          'fieldTransformType',
          void 0,
        ),
        (0, o._)(
          [(0, s.Cb)({ type: [b], json: { write: !0 } })],
          g.prototype,
          'colorUniqueValueInfos',
          void 0,
        ),
        (0, o._)(
          [(0, s.Cb)({ type: d.Z, json: { write: !0 } })],
          g.prototype,
          'legendOptions',
          void 0,
        ),
        (g = y =
          (0, o._)(
            [(0, u.j)('esri.renderers.PointCloudUniqueValueRenderer')],
            g,
          ));
      const m = g;
    },
    66338: (e, t, r) => {
      r.d(t, { Z: () => u });
      var n,
        o = r(43697),
        i = r(96674),
        s = r(5600),
        a = (r(67676), r(80442), r(75215), r(52011));
      let l = (n = class extends i.wq {
        constructor() {
          super(...arguments), (this.title = null);
        }
        clone() {
          return new n({ title: this.title });
        }
      });
      (0, o._)(
        [(0, s.Cb)({ type: String, json: { write: !0 } })],
        l.prototype,
        'title',
        void 0,
      ),
        (l = n =
          (0, o._)([(0, a.j)('esri.renderers.support.LegendOptions')], l));
      const u = l;
    },
    21849: (e, t, r) => {
      r.d(t, { Z: () => f });
      var n,
        o = r(43697),
        i = r(22303),
        s = r(96674),
        a = r(5600),
        l = (r(67676), r(80442), r(75215)),
        u = r(52011),
        c = r(30556);
      let d = (n = class extends s.wq {
        constructor(e) {
          super(e),
            (this.color = null),
            (this.label = null),
            (this.value = null);
        }
        writeValue(e, t, r) {
          t[r] = null == e ? 0 : e;
        }
        clone() {
          return new n({
            color: this.color && this.color.clone(),
            label: this.label,
            value: this.value,
          });
        }
      });
      (0, o._)(
        [(0, a.Cb)({ type: i.Z, json: { type: [l.z8], write: !0 } })],
        d.prototype,
        'color',
        void 0,
      ),
        (0, o._)(
          [(0, a.Cb)({ type: String, json: { write: !0 } })],
          d.prototype,
          'label',
          void 0,
        ),
        (0, o._)(
          [
            (0, a.Cb)({
              type: Number,
              json: { write: { writerEnsuresNonNull: !0 } },
            }),
          ],
          d.prototype,
          'value',
          void 0,
        ),
        (0, o._)([(0, c.c)('value')], d.prototype, 'writeValue', null),
        (d = n =
          (0, o._)(
            [(0, u.j)('esri.renderers.visualVariables.support.ColorStop')],
            d,
          ));
      const f = d;
    },
    16583: (e, t, r) => {
      r.r(t), r.d(t, { default: () => q });
      var n = r(70586),
        o = r(1533),
        i = r(51305);
      function s() {
        const e = new Float32Array(4);
        return (e[3] = 1), e;
      }
      Object.freeze({
        __proto__: null,
        create: s,
        clone: function (e) {
          const t = new Float32Array(4);
          return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t;
        },
        fromValues: function (e, t, r, n) {
          const o = new Float32Array(4);
          return (o[0] = e), (o[1] = t), (o[2] = r), (o[3] = n), o;
        },
        createView: function (e, t) {
          return new Float32Array(e, t, 4);
        },
      });
      var a = r(17896),
        l = r(72119),
        u = r(44547),
        c = r(82971),
        d = r(23030),
        f = r(14008),
        p = r(46329),
        h = r(20102),
        b = r(22974),
        y = r(92604);
      const g = !0;
      function m(e, t, r) {
        return {
          identifier: String.fromCharCode.apply(
            null,
            new Uint8Array(e, r + 0, 10),
          ),
          version: t.getUint16(r + 10, g),
          checksum: t.getUint32(r + 12, g),
        };
      }
      function w(e, t, r) {
        const n = [];
        t = C(e, t, n);
        const o = [];
        for (let i = 0; i < n.length; i++) {
          (o.length = 0), (t = C(e, t, o));
          for (let e = 0; e < o.length; e++) r.push(o[e] + n[i]);
        }
        return t;
      }
      function C(e, t, r) {
        const n = new DataView(e, t),
          o = n.getUint8(0),
          i = 31 & o,
          s = !!(32 & o),
          a = (192 & o) >> 6;
        let l = 0;
        if (0 === a) (l = n.getUint32(1, g)), (t += 5);
        else if (1 === a) (l = n.getUint16(1, g)), (t += 3);
        else {
          if (2 !== a) throw new h.Z('lepcc-decode-error', 'Bad count type');
          (l = n.getUint8(1)), (t += 2);
        }
        if (s) throw new h.Z('lepcc-decode-error', 'LUT not implemented');
        const u = Math.ceil((l * i) / 8),
          c = new Uint8Array(e, t, u);
        let d = 0,
          f = 0,
          p = 0;
        const b = -1 >>> (32 - i);
        for (let e = 0; e < l; e++) {
          for (; f < i; ) (d |= c[p] << f), (f += 8), (p += 1);
          (r[e] = d & b),
            (d >>>= i),
            (f -= i),
            f + i > 32 && (d |= c[p - 1] >> (8 - f));
        }
        return t + p;
      }
      var v = r(35065);
      const A = y.Z.getLogger('esri.views.3d.layers.i3s.I3SBinaryReader');
      function T(e, t, r) {
        let n = '',
          o = 0;
        for (; o < r; ) {
          const i = e[t + o];
          if (i < 128) (n += String.fromCharCode(i)), o++;
          else if (i >= 192 && i < 224) {
            if (o + 1 >= r)
              throw new h.Z(
                'utf8-decode-error',
                'UTF-8 Decode failed. Two byte character was truncated.',
              );
            const s = ((31 & i) << 6) | (63 & e[t + o + 1]);
            (n += String.fromCharCode(s)), (o += 2);
          } else if (i >= 224 && i < 240) {
            if (o + 2 >= r)
              throw new h.Z(
                'utf8-decode-error',
                'UTF-8 Decode failed. Multi byte character was truncated.',
              );
            const s =
              ((15 & i) << 12) |
              ((63 & e[t + o + 1]) << 6) |
              (63 & e[t + o + 2]);
            (n += String.fromCharCode(s)), (o += 3);
          } else {
            if (!(i >= 240 && i < 248))
              throw new h.Z(
                'utf8-decode-error',
                'UTF-8 Decode failed. Invalid multi byte sequence.',
              );
            {
              if (o + 3 >= r)
                throw new h.Z(
                  'utf8-decode-error',
                  'UTF-8 Decode failed. Multi byte character was truncated.',
                );
              const s =
                ((7 & i) << 18) |
                ((63 & e[t + o + 1]) << 12) |
                ((63 & e[t + o + 2]) << 6) |
                (63 & e[t + o + 3]);
              if (s >= 65536) {
                const e = 55296 + ((s - 65536) >> 10),
                  t = 56320 + (1023 & s);
                n += String.fromCharCode(e, t);
              } else n += String.fromCharCode(s);
              o += 4;
            }
          }
        }
        return n;
      }
      function U(e, t) {
        const r = { byteOffset: 0, byteCount: 0, fields: Object.create(null) };
        let n = 0;
        for (let o = 0; o < t.length; o++) {
          const i = t[o],
            s = i.valueType || i.type,
            a = E[s];
          (r.fields[i.property] = a(e, n)), (n += _[s].BYTES_PER_ELEMENT);
        }
        return (r.byteCount = n), r;
      }
      function S(e, t) {
        return new (0, _[t.valueType])(
          e,
          t.byteOffset,
          t.count * t.valuesPerElement,
        );
      }
      function I(e, t, r) {
        if (
          (t !== e &&
            A.error(`Invalid ${r} buffer size\n expected: ${e}, actual: ${t})`),
          t < e)
        )
          throw new h.Z('buffer-too-small', 'Binary buffer is too small', {
            expectedSize: e,
            actualSize: t,
          });
      }
      const O = {
        position: v.T.POSITION,
        normal: v.T.NORMAL,
        color: v.T.COLOR,
        uv0: v.T.UV0,
        region: v.T.UVREGION,
      };
      function M(e, t, r) {
        if ('lepcc-rgb' === e.encoding)
          return (function (e) {
            const t = new DataView(e, 0);
            let r = 0;
            const { identifier: n, version: o } = m(e, t, r);
            if (((r += 16), 'ClusterRGB' !== n))
              throw new h.Z('lepcc-decode-error', 'Bad identifier');
            if (o > 1) throw new h.Z('lepcc-decode-error', 'Unknown version');
            const i =
              ((a = r),
              {
                sizeLo: (s = t).getUint32(a + 0, g),
                sizeHi: s.getUint32(a + 4, g),
                count: s.getUint32(a + 8, g),
                colorMapCount: s.getUint16(a + 12, g),
                lookupMethod: s.getUint8(a + 14),
                compressionMethod: s.getUint8(a + 15),
              });
            var s, a;
            if (((r += 16), i.sizeHi * 2 ** 32 + i.sizeLo !== e.byteLength))
              throw new h.Z('lepcc-decode-error', 'Bad size');
            if (
              (2 === i.lookupMethod || 1 === i.lookupMethod) &&
              0 === i.compressionMethod
            ) {
              if (
                3 * i.colorMapCount + i.count + r !== e.byteLength ||
                i.colorMapCount > 256
              )
                throw new h.Z('lepcc-decode-error', 'Bad count');
              const t = new Uint8Array(e, r, 3 * i.colorMapCount),
                n = new Uint8Array(e, r + 3 * i.colorMapCount, i.count),
                o = new Uint8Array(3 * i.count);
              for (let e = 0; e < i.count; e++) {
                const r = n[e];
                (o[3 * e] = t[3 * r]),
                  (o[3 * e + 1] = t[3 * r + 1]),
                  (o[3 * e + 2] = t[3 * r + 2]);
              }
              return o;
            }
            if (0 === i.lookupMethod && 0 === i.compressionMethod) {
              if (3 * i.count + r !== e.byteLength || 0 !== i.colorMapCount)
                throw new h.Z('lepcc-decode-error', 'Bad count');
              return new Uint8Array(e, r).slice();
            }
            if (i.lookupMethod <= 2 && 1 === i.compressionMethod) {
              if (r + 3 !== e.byteLength || 1 !== i.colorMapCount)
                throw new h.Z('lepcc-decode-error', 'Bad count');
              const n = t.getUint8(r),
                o = t.getUint8(r + 1),
                s = t.getUint8(r + 2),
                a = new Uint8Array(3 * i.count);
              for (let e = 0; e < i.count; e++)
                (a[3 * e] = n), (a[3 * e + 1] = o), (a[3 * e + 2] = s);
              return a;
            }
            throw new h.Z(
              'lepcc-decode-error',
              'Bad method ' + i.lookupMethod + ',' + i.compressionMethod,
            );
          })(t);
        if ('lepcc-intensity' === e.encoding)
          return (function (e) {
            const t = new DataView(e, 0);
            let r = 0;
            const { identifier: n, version: o } = m(e, t, r);
            if (((r += 16), 'Intensity ' !== n))
              throw new h.Z('lepcc-decode-error', 'Bad identifier');
            if (o > 1) throw new h.Z('lepcc-decode-error', 'Unknown version');
            const i =
              ((a = r),
              {
                sizeLo: (s = t).getUint32(a + 0, g),
                sizeHi: s.getUint32(a + 4, g),
                count: s.getUint32(a + 8, g),
                scaleFactor: s.getUint16(a + 12, g),
                bitsPerPoint: s.getUint8(a + 14),
                reserved: s.getUint8(a + 15),
              });
            var s, a;
            if (((r += 16), i.sizeHi * 2 ** 32 + i.sizeLo !== e.byteLength))
              throw new h.Z('lepcc-decode-error', 'Bad size');
            const l = new Uint16Array(i.count);
            if (8 === i.bitsPerPoint) {
              if (i.count + r !== e.byteLength)
                throw new h.Z('lepcc-decode-error', 'Bad size');
              const t = new Uint8Array(e, r, i.count);
              for (let e = 0; e < i.count; e++) l[e] = t[e] * i.scaleFactor;
            } else if (16 === i.bitsPerPoint) {
              if (2 * i.count + r !== e.byteLength)
                throw new h.Z('lepcc-decode-error', 'Bad size');
              const t = new Uint16Array(e, r, i.count);
              for (let e = 0; e < i.count; e++) l[e] = t[e] * i.scaleFactor;
            } else {
              const t = [];
              if (C(e, r, t) !== e.byteLength)
                throw new h.Z('lepcc-decode-error', 'Bad size');
              for (let e = 0; e < i.count; e++) l[e] = t[e] * i.scaleFactor;
            }
            return l;
          })(t);
        if (null != e.encoding && '' !== e.encoding)
          throw new h.Z(
            'unknown-attribute-storage-info-encoding',
            'Unknown Attribute Storage Info Encoding',
          );
        e['attributeByteCounts '] &&
          !e.attributeByteCounts &&
          (A.warn("Warning: Trailing space in 'attributeByteCounts '."),
          (e.attributeByteCounts = e['attributeByteCounts '])),
          'ObjectIds' === e.ordering[0] &&
            e.hasOwnProperty('objectIds') &&
            (A.warn('Warning: Case error in objectIds'),
            (e.ordering[0] = 'objectIds'));
        const n = (function (e, t, r) {
          const n =
              null != t.header
                ? U(e, t.header)
                : { byteOffset: 0, byteCount: 0, fields: { count: r } },
            o = {
              header: n,
              byteOffset: n.byteCount,
              byteCount: 0,
              entries: Object.create(null),
            };
          let i = n.byteCount;
          for (let e = 0; e < t.ordering.length; e++) {
            const r = t.ordering[e],
              s = (0, b.d9)(t[r]);
            if (((s.count = n.fields.count), 'String' === s.valueType)) {
              if (
                ((s.byteOffset = i),
                (s.byteCount = n.fields[r + 'ByteCount']),
                'UTF-8' !== s.encoding)
              )
                throw new h.Z(
                  'unsupported-encoding',
                  'Unsupported String encoding.',
                  { encoding: s.encoding },
                );
            } else {
              if (!R(s.valueType))
                throw new h.Z(
                  'unsupported-value-type',
                  'Unsupported binary valueType',
                  { valueType: s.valueType },
                );
              {
                const e = N(s.valueType);
                (i += i % e != 0 ? e - (i % e) : 0),
                  (s.byteOffset = i),
                  (s.byteCount = e * s.valuesPerElement * s.count);
              }
            }
            (i += s.byteCount), (o.entries[r] = s);
          }
          return (o.byteCount = i - o.byteOffset), o;
        })(t, e, r);
        I(n.byteOffset + n.byteCount, t.byteLength, 'attribute');
        const o = n.entries.attributeValues || n.entries.objectIds;
        if (o) {
          if ('String' === o.valueType) {
            const e = n.entries.attributeByteCounts,
              r = S(t, e),
              i = (function (e, t) {
                return new Uint8Array(e, t.byteOffset, t.byteCount);
              })(t, o);
            return (function (e, t, r) {
              const n = [];
              let o,
                i,
                s = 0;
              for (i = 0; i < e; i += 1) {
                if (((o = t[i]), o > 0)) {
                  if ((n.push(T(r, s, o - 1)), 0 !== r[s + o - 1]))
                    throw new h.Z(
                      'string-array-error',
                      'Invalid string array: missing null termination.',
                    );
                } else n.push(null);
                s += o;
              }
              return n;
            })(e.count, r, i);
          }
          return S(t, o);
        }
        throw new h.Z(
          'bad-attribute-storage-info',
          'Bad attributeStorageInfo specification.',
        );
      }
      const _ = {
          Float32: Float32Array,
          Float64: Float64Array,
          UInt8: Uint8Array,
          Int8: Int8Array,
          UInt16: Uint16Array,
          Int16: Int16Array,
          UInt32: Uint32Array,
          Int32: Int32Array,
        },
        E = {
          Float32: (e, t) => new DataView(e, 0).getFloat32(t, !0),
          Float64: (e, t) => new DataView(e, 0).getFloat64(t, !0),
          UInt8: (e, t) => new DataView(e, 0).getUint8(t),
          Int8: (e, t) => new DataView(e, 0).getInt8(t),
          UInt16: (e, t) => new DataView(e, 0).getUint16(t, !0),
          Int16: (e, t) => new DataView(e, 0).getInt16(t, !0),
          UInt32: (e, t) => new DataView(e, 0).getUint32(t, !0),
          Int32: (e, t) => new DataView(e, 0).getInt32(t, !0),
        };
      function R(e) {
        return _.hasOwnProperty(e);
      }
      function N(e) {
        return R(e) ? _[e].BYTES_PER_ELEMENT : 0;
      }
      function B(e, t) {
        if (null == e.encoding || '' === e.encoding) {
          const r = (function (e, t) {
            const r = U(e, t && t.header);
            let n = r.byteCount;
            const o = {
                isDraco: !1,
                header: r,
                byteOffset: r.byteCount,
                byteCount: 0,
                vertexAttributes: {},
              },
              i = r.fields,
              s = null != i.vertexCount ? i.vertexCount : i.count;
            for (const e of t.ordering) {
              if (!t.vertexAttributes[e]) continue;
              const r = { ...t.vertexAttributes[e], byteOffset: n, count: s },
                i = O[e] ? O[e] : '_' + e;
              (o.vertexAttributes[i] = r),
                (n += N(r.valueType) * r.valuesPerElement * s);
            }
            const a = i.faceCount;
            if (t.faces && a) {
              o.faces = {};
              for (const e of t.ordering) {
                if (!t.faces[e]) continue;
                const r = { ...t.faces[e], byteOffset: n, count: a };
                (o.faces[e] = r),
                  (n += N(r.valueType) * r.valuesPerElement * a);
              }
            }
            const l = i.featureCount;
            if (t.featureAttributes && t.featureAttributeOrder && l) {
              o.featureAttributes = {};
              for (const e of t.featureAttributeOrder) {
                if (!t.featureAttributes[e]) continue;
                const r = {
                  ...t.featureAttributes[e],
                  byteOffset: n,
                  count: l,
                };
                (o.featureAttributes[e] = r),
                  (n +=
                    ('UInt64' === r.valueType ? 8 : N(r.valueType)) *
                    r.valuesPerElement *
                    l);
              }
            }
            return (
              I(n, e.byteLength, 'geometry'),
              (o.byteCount = n - o.byteOffset),
              o
            );
          })(t, e);
          if ((0, n.Wi)(r.vertexAttributes.position)) return;
          const o = S(t, r.vertexAttributes.position),
            i = r.header.fields,
            s = [i.offsetX, i.offsetY, i.offsetZ],
            a = [i.scaleX, i.scaleY, i.scaleZ],
            l = o.length / 3,
            u = new Float64Array(3 * l);
          for (let e = 0; e < l; e++)
            (u[3 * e] = o[3 * e] * a[0] + s[0]),
              (u[3 * e + 1] = o[3 * e + 1] * a[1] + s[1]),
              (u[3 * e + 2] = o[3 * e + 2] * a[2] + s[2]);
          return u;
        }
        if ('lepcc-xyz' === e.encoding)
          return (function (e) {
            const t = new DataView(e, 0);
            let r = 0;
            const { identifier: n, version: o } = m(e, t, r);
            if (((r += 16), 'LEPCC     ' !== n))
              throw new h.Z('lepcc-decode-error', 'Bad identifier');
            if (o > 1) throw new h.Z('lepcc-decode-error', 'Unknown version');
            const i =
              ((a = r),
              {
                sizeLo: (s = t).getUint32(a + 0, g),
                sizeHi: s.getUint32(a + 4, g),
                minX: s.getFloat64(a + 8, g),
                minY: s.getFloat64(a + 16, g),
                minZ: s.getFloat64(a + 24, g),
                maxX: s.getFloat64(a + 32, g),
                maxY: s.getFloat64(a + 40, g),
                maxZ: s.getFloat64(a + 48, g),
                errorX: s.getFloat64(a + 56, g),
                errorY: s.getFloat64(a + 64, g),
                errorZ: s.getFloat64(a + 72, g),
                count: s.getUint32(a + 80, g),
                reserved: s.getUint32(a + 84, g),
              });
            var s, a;
            if (((r += 88), i.sizeHi * 2 ** 32 + i.sizeLo !== e.byteLength))
              throw new h.Z('lepcc-decode-error', 'Bad size');
            const l = new Float64Array(3 * i.count),
              u = [],
              c = [],
              d = [],
              f = [];
            if (
              ((r = w(e, r, u)),
              (r = w(e, r, c)),
              (r = w(e, r, d)),
              (r = w(e, r, f)),
              r !== e.byteLength)
            )
              throw new h.Z('lepcc-decode-error', 'Bad length');
            let p = 0,
              b = 0;
            for (let e = 0; e < u.length; e++) {
              b += u[e];
              let t = 0;
              for (let r = 0; r < c[e]; r++) {
                t += d[p];
                const e = f[p];
                (l[3 * p] = Math.min(i.maxX, i.minX + 2 * i.errorX * t)),
                  (l[3 * p + 1] = Math.min(i.maxY, i.minY + 2 * i.errorY * b)),
                  (l[3 * p + 2] = Math.min(i.maxZ, i.minZ + 2 * i.errorZ * e)),
                  p++;
              }
            }
            return {
              errorX: i.errorX,
              errorY: i.errorY,
              errorZ: i.errorZ,
              result: l,
            };
          })(t).result;
      }
      function k(e, t, r) {
        return (0, n.pC)(e) && e.attributeInfo.useElevation
          ? (function (e, t) {
              const r = new Float64Array(t);
              for (let n = 0; n < t; n++) r[n] = e[3 * n + 2];
              return r;
            })(t, r)
          : (0, n.pC)(e)
          ? M(e.attributeInfo.storageInfo, e.buffer, r)
          : null;
      }
      function Z(e) {
        return null == e || 'none' === e
          ? null
          : 'low-four-bit' === e
          ? (e) => 15 & e
          : 'high-four-bit' === e
          ? (e) => (240 & e) >> 4
          : 'absolute-value' === e
          ? (e) => Math.abs(e)
          : 'modulo-ten' === e
          ? (e) => e % 10
          : null;
      }
      function V(e) {
        let t = 0;
        for (const r of e || []) t |= 1 << r;
        return t;
      }
      class F {
        transform(e) {
          const t = this._transform(e),
            r = [t.points.buffer, t.rgb.buffer];
          (0, n.pC)(t.pointIdFilterMap) && r.push(t.pointIdFilterMap.buffer);
          for (const e of t.attributes)
            'buffer' in e.values &&
              (0, o.eP)(e.values.buffer) &&
              e.values.buffer !== t.rgb.buffer &&
              r.push(e.values.buffer);
          return Promise.resolve({ result: t, transferList: r });
        }
        _transform(e) {
          const t = B(e.schema, e.geometryBuffer);
          let r = t.length / 3,
            o = null;
          const i = [],
            s = k(e.primaryAttributeData, t, r);
          (0, n.pC)(e.primaryAttributeData) &&
            s &&
            i.push({
              attributeInfo: e.primaryAttributeData.attributeInfo,
              values: s,
            });
          const a = k(e.modulationAttributeData, t, r);
          (0, n.pC)(e.modulationAttributeData) &&
            a &&
            i.push({
              attributeInfo: e.modulationAttributeData.attributeInfo,
              values: a,
            });
          let l = (function (e, t, r, n) {
            const { rendererJSON: o, isRGBRenderer: i } = e;
            let s = null,
              a = null;
            if (t && i) s = t;
            else if (t && 'pointCloudUniqueValueRenderer' === o.type) {
              a = p.Z.fromJSON(o);
              const e = a.colorUniqueValueInfos;
              s = new Uint8Array(3 * n);
              const r = Z(a.fieldTransformType);
              for (let o = 0; o < n; o++) {
                const n = (r ? r(t[o]) : t[o]) + '';
                for (let t = 0; t < e.length; t++)
                  if (e[t].values.indexOf(n) >= 0) {
                    (s[3 * o] = e[t].color.r),
                      (s[3 * o + 1] = e[t].color.g),
                      (s[3 * o + 2] = e[t].color.b);
                    break;
                  }
              }
            } else if (t && 'pointCloudStretchRenderer' === o.type) {
              a = f.Z.fromJSON(o);
              const e = a.stops;
              s = new Uint8Array(3 * n);
              const r = Z(a.fieldTransformType);
              for (let o = 0; o < n; o++) {
                const n = r ? r(t[o]) : t[o],
                  i = e.length - 1;
                if (n < e[0].value)
                  (s[3 * o] = e[0].color.r),
                    (s[3 * o + 1] = e[0].color.g),
                    (s[3 * o + 2] = e[0].color.b);
                else if (n >= e[i].value)
                  (s[3 * o] = e[i].color.r),
                    (s[3 * o + 1] = e[i].color.g),
                    (s[3 * o + 2] = e[i].color.b);
                else
                  for (let t = 1; t < e.length; t++)
                    if (n < e[t].value) {
                      const r =
                        (n - e[t - 1].value) / (e[t].value - e[t - 1].value);
                      (s[3 * o] =
                        e[t].color.r * r + e[t - 1].color.r * (1 - r)),
                        (s[3 * o + 1] =
                          e[t].color.g * r + e[t - 1].color.g * (1 - r)),
                        (s[3 * o + 2] =
                          e[t].color.b * r + e[t - 1].color.b * (1 - r));
                      break;
                    }
              }
            } else if (t && 'pointCloudClassBreaksRenderer' === o.type) {
              a = d.Z.fromJSON(o);
              const e = a.colorClassBreakInfos;
              s = new Uint8Array(3 * n);
              const r = Z(a.fieldTransformType);
              for (let o = 0; o < n; o++) {
                const n = r ? r(t[o]) : t[o];
                for (let t = 0; t < e.length; t++)
                  if (n >= e[t].minValue && n <= e[t].maxValue) {
                    (s[3 * o] = e[t].color.r),
                      (s[3 * o + 1] = e[t].color.g),
                      (s[3 * o + 2] = e[t].color.b);
                    break;
                  }
              }
            } else {
              s = new Uint8Array(3 * n);
              for (let e = 0; e < s.length; e++) s[e] = 255;
            }
            if (r && a && a.colorModulation) {
              const e = a.colorModulation.minValue,
                t = a.colorModulation.maxValue,
                o = 0.3;
              for (let i = 0; i < n; i++) {
                const n = r[i],
                  a =
                    n >= t ? 1 : n <= e ? o : o + ((1 - o) * (n - e)) / (t - e);
                (s[3 * i] = a * s[3 * i]),
                  (s[3 * i + 1] = a * s[3 * i + 1]),
                  (s[3 * i + 2] = a * s[3 * i + 2]);
              }
            }
            return s;
          })(e.rendererInfo, s, a, r);
          if (
            e.filterInfo &&
            e.filterInfo.length > 0 &&
            (0, n.pC)(e.filterAttributesData)
          ) {
            const n = e.filterAttributesData.map((e) => {
              const n = k(e, t, r),
                o = { attributeInfo: e.attributeInfo, values: n };
              return i.push(o), o;
            });
            (o = new Uint32Array(r)),
              (r = (function (e, t, r, n, o) {
                const i = e.length / 3;
                let s = 0;
                for (let a = 0; a < i; a++) {
                  let i = !0;
                  for (let e = 0; e < n.length && i; e++) {
                    const { filterJSON: t } = n[e],
                      r = o[e].values[a];
                    switch (t.type) {
                      case 'pointCloudValueFilter': {
                        const e = 'exclude' === t.mode;
                        (-1 !== t.values.indexOf(r)) === e && (i = !1);
                        break;
                      }
                      case 'pointCloudBitfieldFilter': {
                        const e = V(t.requiredSetBits),
                          n = V(t.requiredClearBits);
                        ((r & e) === e && 0 == (r & n)) || (i = !1);
                        break;
                      }
                      case 'pointCloudReturnFilter': {
                        const e = 15 & r,
                          n = (r >>> 4) & 15,
                          o = n > 1,
                          s = 1 === e,
                          a = e === n;
                        let l = !1;
                        for (const e of t.includedReturns)
                          if (
                            ('last' === e && a) ||
                            ('firstOfMany' === e && s && o) ||
                            ('lastOfMany' === e && a && o) ||
                            ('single' === e && !o)
                          ) {
                            l = !0;
                            break;
                          }
                        l || (i = !1);
                        break;
                      }
                    }
                  }
                  i &&
                    ((r[s] = a),
                    (e[3 * s] = e[3 * a]),
                    (e[3 * s + 1] = e[3 * a + 1]),
                    (e[3 * s + 2] = e[3 * a + 2]),
                    (t[3 * s] = t[3 * a]),
                    (t[3 * s + 1] = t[3 * a + 1]),
                    (t[3 * s + 2] = t[3 * a + 2]),
                    s++);
                }
                return s;
              })(t, l, o, e.filterInfo, n));
          }
          for (const n of e.userAttributesData) {
            const e = k(n, t, r);
            i.push({ attributeInfo: n.attributeInfo, values: e });
          }
          3 * r < l.length && (l = new Uint8Array(l.buffer.slice(0, 3 * r))),
            this._applyElevationOffsetInPlace(t, r, e.elevationOffset);
          const u = this._transformCoordinates(
            t,
            r,
            e.obb,
            c.Z.fromJSON(e.inSR),
            c.Z.fromJSON(e.outSR),
          );
          return {
            obb: e.obb,
            points: u,
            rgb: l,
            attributes: i,
            pointIdFilterMap: o,
          };
        }
        _transformCoordinates(e, t, r, n, o) {
          if (!(0, u.CM)(e, n, 0, e, o, 0, t)) throw Error("Can't reproject");
          const s = (0, l.f)(r.center[0], r.center[1], r.center[2]),
            c = (0, l.c)(),
            d = (0, l.c)();
          (0, i.c)(P, r.quaternion);
          const f = new Float32Array(3 * t);
          for (let n = 0; n < t; n++)
            (c[0] = e[3 * n] - s[0]),
              (c[1] = e[3 * n + 1] - s[1]),
              (c[2] = e[3 * n + 2] - s[2]),
              (0, a.q)(d, c, P),
              (r.halfSize[0] = Math.max(r.halfSize[0], Math.abs(d[0]))),
              (r.halfSize[1] = Math.max(r.halfSize[1], Math.abs(d[1]))),
              (r.halfSize[2] = Math.max(r.halfSize[2], Math.abs(d[2]))),
              (f[3 * n] = c[0]),
              (f[3 * n + 1] = c[1]),
              (f[3 * n + 2] = c[2]);
          return f;
        }
        _applyElevationOffsetInPlace(e, t, r) {
          if (0 !== r) for (let n = 0; n < t; n++) e[3 * n + 2] += r;
        }
      }
      const P = s();
      function q() {
        return new F();
      }
    },
    35065: (e, t, r) => {
      var n;
      r.d(t, { T: () => n }),
        (function (e) {
          (e.POSITION = 'position'),
            (e.NORMAL = 'normal'),
            (e.UV0 = 'uv0'),
            (e.AUXPOS1 = 'auxpos1'),
            (e.AUXPOS2 = 'auxpos2'),
            (e.MAPPOS = 'mapPos'),
            (e.COLOR = 'color'),
            (e.SYMBOLCOLOR = 'symbolColor'),
            (e.SIZE = 'size'),
            (e.TANGENT = 'tangent'),
            (e.OFFSET = 'offset'),
            (e.SUBDIVISIONFACTOR = 'subdivisionFactor'),
            (e.COLORFEATUREATTRIBUTE = 'colorFeatureAttribute'),
            (e.SIZEFEATUREATTRIBUTE = 'sizeFeatureAttribute'),
            (e.OPACITYFEATUREATTRIBUTE = 'opacityFeatureAttribute'),
            (e.DISTANCETOSTART = 'distanceToStart'),
            (e.UVMAPSPACE = 'uvMapSpace'),
            (e.BOUNDINGRECT = 'boundingRect'),
            (e.UVREGION = 'uvRegion'),
            (e.NORMALCOMPRESSED = 'normalCompressed'),
            (e.PROFILERIGHT = 'profileRight'),
            (e.PROFILEUP = 'profileUp'),
            (e.PROFILEVERTEXANDNORMAL = 'profileVertexAndNormal'),
            (e.FEATUREVALUE = 'featureValue'),
            (e.MODELORIGINHI = 'modelOriginHi'),
            (e.MODELORIGINLO = 'modelOriginLo'),
            (e.MODEL = 'model'),
            (e.MODELNORMAL = 'modelNormal'),
            (e.INSTANCECOLOR = 'instanceColor'),
            (e.INSTANCEFEATUREATTRIBUTE = 'instanceFeatureAttribute'),
            (e.LOCALTRANSFORM = 'localTransform'),
            (e.GLOBALTRANSFORM = 'globalTransform'),
            (e.BOUNDINGSPHERE = 'boundingSphere'),
            (e.MODELORIGIN = 'modelOrigin'),
            (e.MODELSCALEFACTORS = 'modelScaleFactors'),
            (e.FEATUREATTRIBUTE = 'featureAttribute'),
            (e.STATE = 'state'),
            (e.LODLEVEL = 'lodLevel'),
            (e.POSITION0 = 'position0'),
            (e.POSITION1 = 'position1'),
            (e.NORMALA = 'normalA'),
            (e.NORMALB = 'normalB'),
            (e.COMPONENTINDEX = 'componentIndex'),
            (e.VARIANTOFFSET = 'variantOffset'),
            (e.VARIANTSTROKE = 'variantStroke'),
            (e.VARIANTEXTENSION = 'variantExtension'),
            (e.U8PADDING = 'u8padding'),
            (e.U16PADDING = 'u16padding'),
            (e.SIDENESS = 'sideness'),
            (e.START = 'start'),
            (e.END = 'end'),
            (e.UP = 'up'),
            (e.EXTRUDE = 'extrude');
        })(n || (n = {}));
    },
  },
]);
