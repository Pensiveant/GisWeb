'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [5406],
  {
    22303: (e, t, n) => {
      n.d(t, { Z: () => m });
      var r,
        i,
        l = n(35270),
        a = n(22021),
        o = n(70586),
        s = n(75215);
      function u(e) {
        return (0, a.uZ)((0, s.vU)(e), 0, 255);
      }
      function c(e, t, n) {
        return (e = Number(e)), isNaN(e) ? n : e < t ? t : e > n ? n : e;
      }
      class d {
        constructor(e) {
          (this.r = 255),
            (this.g = 255),
            (this.b = 255),
            (this.a = 1),
            e && this.setColor(e);
        }
        static blendColors(e, t, n, r = new d()) {
          return (
            (r.r = Math.round(e.r + (t.r - e.r) * n)),
            (r.g = Math.round(e.g + (t.g - e.g) * n)),
            (r.b = Math.round(e.b + (t.b - e.b) * n)),
            (r.a = e.a + (t.a - e.a) * n),
            r._sanitize()
          );
        }
        static fromRgb(e, t) {
          const n = e.toLowerCase().match(/^(rgba?|hsla?)\(([\s\.\-,%0-9]+)\)/);
          if (n) {
            const e = n[2].split(/\s*,\s*/),
              r = n[1];
            if (
              ('rgb' === r && 3 === e.length) ||
              ('rgba' === r && 4 === e.length)
            ) {
              const n = e[0];
              if ('%' === n.charAt(n.length - 1)) {
                const n = e.map((e) => 2.56 * parseFloat(e));
                return (
                  4 === e.length && (n[3] = parseFloat(e[3])), d.fromArray(n, t)
                );
              }
              return d.fromArray(
                e.map((e) => parseFloat(e)),
                t,
              );
            }
            if (
              ('hsl' === r && 3 === e.length) ||
              ('hsla' === r && 4 === e.length)
            )
              return d.fromArray(
                (0, l.B7)(
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
          const n = 4 === e.length ? 4 : 8,
            r = (1 << n) - 1;
          let i = Number('0x' + e.substr(1));
          return isNaN(i)
            ? null
            : (['b', 'g', 'r'].forEach((e) => {
                const l = i & r;
                (i >>= n), (t[e] = 4 === n ? 17 * l : l);
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
          const n = (0, l.St)(e) ? (0, l.h$)(e) : null;
          return (n && d.fromArray(n, t)) || d.fromRgb(e, t) || d.fromHex(e, t);
        }
        static fromJSON(e) {
          return e && new d([e[0], e[1], e[2], e[3] / 255]);
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
          if ('string' == typeof e) d.fromString(e, this);
          else if (Array.isArray(e)) d.fromArray(e, this);
          else {
            var t, n, r, i;
            this._set(
              null != (t = e.r) ? t : 0,
              null != (n = e.g) ? n : 0,
              null != (r = e.b) ? r : 0,
              null != (i = e.a) ? i : 1,
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
            n = this.b.toString(16);
          return `#${e.length < 2 ? '0' + e : e}${t.length < 2 ? '0' + t : t}${
            n.length < 2 ? '0' + n : n
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
            n = u(this.g),
            r = u(this.b);
          return e === d.AlphaMode.ALWAYS || 1 !== this.a
            ? [t, n, r, u(255 * this.a)]
            : [t, n, r];
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
            (0, o.pC)(e) &&
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
        _set(e, t, n, r) {
          (this.r = e), (this.g = t), (this.b = n), (this.a = r);
        }
      }
      (d.prototype.declaredClass = 'esri.Color'),
        (r = d || (d = {})),
        ((i = r.AlphaMode || (r.AlphaMode = {}))[(i.ALWAYS = 0)] = 'ALWAYS'),
        (i[(i.UNLESS_OPAQUE = 1)] = 'UNLESS_OPAQUE');
      const m = d;
    },
    35270: (e, t, n) => {
      n.d(t, {
        h$: () => l,
        VL: () => a,
        rW: () => u,
        B7: () => s,
        St: () => i,
      });
      const r = {
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
      function i(e) {
        return r[e] || r[e.toLowerCase()];
      }
      function l(e) {
        var t;
        return null != (t = r[e]) ? t : r[e.toLowerCase()];
      }
      function a(e) {
        return [...l(e)];
      }
      function o(e, t, n) {
        n < 0 && ++n, n > 1 && --n;
        const r = 6 * n;
        return r < 1
          ? e + (t - e) * r
          : 2 * n < 1
          ? t
          : 3 * n < 2
          ? e + (t - e) * (2 / 3 - n) * 6
          : e;
      }
      function s(e, t, n, r = 1) {
        const i = (((e % 360) + 360) % 360) / 360,
          l = n <= 0.5 ? n * (t + 1) : n + t - n * t,
          a = 2 * n - l;
        return [
          Math.round(255 * o(a, l, i + 1 / 3)),
          Math.round(255 * o(a, l, i)),
          Math.round(255 * o(a, l, i - 1 / 3)),
          r,
        ];
      }
      function u(e) {
        const t = e.length > 5,
          n = t ? 8 : 4,
          r = (1 << n) - 1,
          i = t ? 1 : 17,
          l = t ? 9 === e.length : 5 === e.length;
        let a = Number('0x' + e.substr(1));
        if (isNaN(a)) return null;
        const o = [0, 0, 0, 1];
        let s;
        return (
          l && ((s = a & r), (a >>= n), (o[3] = (i * s) / 255)),
          (s = a & r),
          (a >>= n),
          (o[2] = i * s),
          (s = a & r),
          (a >>= n),
          (o[1] = i * s),
          (s = a & r),
          (a >>= n),
          (o[0] = i * s),
          o
        );
      }
    },
    36030: (e, t, n) => {
      n.d(t, { J: () => l });
      var r = n(35454),
        i = n(5600);
      function l(e, t = {}) {
        var n;
        const l = e instanceof r.X ? e : new r.X(e, t),
          a = {
            type:
              null == (n = null == t ? void 0 : t.ignoreUnknown) || n
                ? l.apiValues
                : String,
            json: {
              type: l.jsonValues,
              read: (null == t || !t.readOnly) && { reader: l.read },
              write: { writer: l.write },
            },
          };
        return (
          void 0 !== (null == t ? void 0 : t.readOnly) &&
            (a.readOnly = !!t.readOnly),
          void 0 !== (null == t ? void 0 : t.default) &&
            (a.json.default = t.default),
          void 0 !== (null == t ? void 0 : t.name) && (a.json.name = t.name),
          (0, i.Cb)(a)
        );
      }
    },
    66577: (e, t, n) => {
      n.d(t, { qM: () => c });
      var r = n(75215),
        i = n(6570),
        l = n(9361),
        a = n(65091),
        o = n(13473),
        s = n(38913),
        u = n(58901);
      n(82971), n(86973), n(33955);
      const c = {
        base: l.Z,
        key: 'type',
        typeMap: {
          extent: i.Z,
          multipoint: a.Z,
          point: o.Z,
          polyline: u.Z,
          polygon: s.Z,
        },
      };
      (0, r.N7)(c);
    },
    33955: (e, t, n) => {
      n.d(t, {
        im: () => h,
        q9: () => b,
        Ji: () => y,
        YX: () => c,
        aW: () => d,
        wp: () => m,
        oU: () => p,
        l9: () => f,
      });
      var r = n(70586),
        i = n(6570),
        l = n(9361),
        a = n(65091),
        o = n(13473),
        s = n(38913),
        u = n(58901);
      function c(e) {
        return (
          void 0 !== e.xmin &&
          void 0 !== e.ymin &&
          void 0 !== e.xmax &&
          void 0 !== e.ymax
        );
      }
      function d(e) {
        return void 0 !== e.points;
      }
      function m(e) {
        return void 0 !== e.x && void 0 !== e.y;
      }
      function f(e) {
        return void 0 !== e.paths;
      }
      function p(e) {
        return void 0 !== e.rings;
      }
      function h(e) {
        return (0, r.Wi)(e)
          ? null
          : e instanceof l.Z
          ? e
          : m(e)
          ? o.Z.fromJSON(e)
          : f(e)
          ? u.Z.fromJSON(e)
          : p(e)
          ? s.Z.fromJSON(e)
          : d(e)
          ? a.Z.fromJSON(e)
          : c(e)
          ? i.Z.fromJSON(e)
          : null;
      }
      function y(e) {
        return e
          ? m(e)
            ? 'esriGeometryPoint'
            : f(e)
            ? 'esriGeometryPolyline'
            : p(e)
            ? 'esriGeometryPolygon'
            : c(e)
            ? 'esriGeometryEnvelope'
            : d(e)
            ? 'esriGeometryMultipoint'
            : null
          : null;
      }
      const g = {
        esriGeometryPoint: o.Z,
        esriGeometryPolyline: u.Z,
        esriGeometryPolygon: s.Z,
        esriGeometryEnvelope: i.Z,
        esriGeometryMultipoint: a.Z,
      };
      function b(e) {
        return (e && g[e]) || null;
      }
    },
    86973: (e, t, n) => {
      n.d(t, { Mk: () => i, P$: () => l });
      var r = n(35454);
      const i = (0, r.w)()({
          esriGeometryPoint: 'point',
          esriGeometryMultipoint: 'multipoint',
          esriGeometryPolyline: 'polyline',
          esriGeometryPolygon: 'polygon',
        }),
        l = (0, r.w)()({
          esriGeometryPoint: 'point',
          esriGeometryMultipoint: 'multipoint',
          esriGeometryPolyline: 'polyline',
          esriGeometryPolygon: 'polygon',
          esriGeometryEnvelope: 'extent',
          mesh: 'mesh',
        });
    },
    35671: (e, t, n) => {
      n.d(t, {
        io: () => g,
        AB: () => y,
        gd: () => h,
        Mu: () => w,
        Q0: () => p,
        YN: () => c,
        UF: () => m,
        O5: () => b,
        os: () => F,
        H7: () => I,
        qN: () => A,
        Pz: () => O,
        Qc: () => E,
        vP: () => $,
      });
      var r,
        i,
        l = n(20102),
        a = n(78286);
      ((i = r || (r = {})).VALUE_OUT_OF_RANGE =
        'domain-validation-error::value-out-of-range'),
        (i.INVALID_CODED_VALUE =
          'domain-validation-error::invalid-coded-value');
      var o = n(59266);
      const s = [
          'field',
          'field2',
          'field3',
          'normalizationField',
          'rotationInfo.field',
          'proportionalSymbolInfo.field',
          'proportionalSymbolInfo.normalizationField',
          'colorInfo.field',
          'colorInfo.normalizationField',
        ],
        u = ['field', 'normalizationField'];
      function c(e, t) {
        if (null != e && null != t)
          for (const n of Array.isArray(e) ? e : [e])
            if ((d(s, n, t), 'visualVariables' in n && n.visualVariables))
              for (const e of n.visualVariables) d(u, e, t);
      }
      function d(e, t, n) {
        if (e)
          for (const r of e) {
            const e = (0, a.hS)(r, t),
              i = e && 'function' != typeof e && n.get(e);
            i && (0, a.RB)(r, i.name, t);
          }
      }
      function m(e, t) {
        if (null != e && null != t && t.fields.length)
          if ('startField' in e) {
            const n = t.get(e.startField),
              r = t.get(e.endField);
            (e.startField = (n && n.name) || null),
              (e.endField = (r && r.name) || null);
          } else {
            const n = t.get(e.startTimeField),
              r = t.get(e.endTimeField);
            (e.startTimeField = (n && n.name) || null),
              (e.endTimeField = (r && r.name) || null);
          }
      }
      const f = new Set();
      function p(e, t) {
        return e && t ? (f.clear(), h(f, e, t), Array.from(f).sort()) : [];
      }
      function h(e, t, n) {
        var r;
        if (n)
          if (null != t && null != (r = t.fields) && r.length)
            if (n.includes('*')) for (const { name: n } of t.fields) e.add(n);
            else for (const r of n) y(e, t, r);
          else {
            if (n.includes('*')) return e.clear(), void e.add('*');
            for (const t of n) e.add(t);
          }
      }
      function y(e, t, n) {
        if ('string' == typeof n)
          if (t) {
            const r = t.get(n);
            r && e.add(r.name);
          } else e.add(n);
      }
      async function g(e, t, n) {
        var r;
        if (!n) return;
        const { arcadeUtils: i } = await (0, o.LC)(),
          l = i.extractFieldNames(
            n,
            null == t || null == (r = t.fields) ? void 0 : r.map((e) => e.name),
          );
        for (const n of l) y(e, t, n);
      }
      function b({ displayField: e, fields: t }) {
        return (
          e ||
          (t && t.length
            ? v(t, 'name-or-title') ||
              v(t, 'unique-identifier') ||
              v(t, 'type-or-category') ||
              (function (e) {
                for (const t of e) {
                  if (!t || !t.name) continue;
                  const e = t.name.toLowerCase();
                  if (e.indexOf('name') > -1 || e.indexOf('title') > -1)
                    return t.name;
                }
                return null;
              })(t)
            : null)
        );
      }
      function v(e, t) {
        for (const n of e)
          if (n && n.valueType && n.valueType === t) return n.name;
        return null;
      }
      async function w(e, t) {
        const { labelingInfo: r, fieldsIndex: i } = t;
        r &&
          r.length &&
          (await Promise.all(
            r.map((t) =>
              (async function (e, t, r) {
                if (!r) return;
                const i = r.getLabelExpression(),
                  a = r.where;
                if ('arcade' === i.type) await g(e, t, i.expression);
                else {
                  const n = i.expression.match(/{[^}]*}/g);
                  n &&
                    n.forEach((n) => {
                      y(e, t, n.slice(1, -1));
                    });
                }
                await (async function (e, t, r) {
                  if (r && '1=1' !== r) {
                    const i = (
                      await n.e(1534).then(n.bind(n, 41534))
                    ).WhereClause.create(r, t);
                    if (!i.isStandardized)
                      throw new l.Z(
                        'fieldUtils:collectFilterFields',
                        'Where clause is not standardized',
                      );
                    h(e, t, i.fieldNames);
                  }
                })(e, t, a);
              })(e, i, t),
            ),
          ));
      }
      function F(e) {
        const t = e.defaultValue;
        return void 0 !== t && k(e, t) ? t : e.nullable ? null : void 0;
      }
      function S(e) {
        return 'number' == typeof e && !isNaN(e) && isFinite(e);
      }
      function V(e) {
        return null === e || S(e);
      }
      const _ =
        'isInteger' in Number
          ? Number.isInteger
          : (e) => 'number' == typeof e && isFinite(e) && Math.floor(e) === e;
      function x(e) {
        return null === e || _(e);
      }
      function N(e) {
        return null != e && 'string' == typeof e;
      }
      function C(e) {
        return null === e || N(e);
      }
      function T() {
        return !0;
      }
      function k(e, t) {
        let n;
        switch (e.type) {
          case 'date':
          case 'integer':
          case 'long':
          case 'small-integer':
          case 'esriFieldTypeDate':
          case 'esriFieldTypeInteger':
          case 'esriFieldTypeLong':
          case 'esriFieldTypeSmallInteger':
            n = e.nullable ? x : _;
            break;
          case 'double':
          case 'single':
          case 'esriFieldTypeSingle':
          case 'esriFieldTypeDouble':
            n = e.nullable ? V : S;
            break;
          case 'string':
          case 'esriFieldTypeString':
            n = e.nullable ? C : N;
            break;
          default:
            n = T;
        }
        return 1 === arguments.length ? n : n(t);
      }
      const M = new Set([
        'integer',
        'small-integer',
        'single',
        'double',
        'esriFieldTypeInteger',
        'esriFieldTypeSmallInteger',
        'esriFieldTypeSingle',
        'esriFieldTypeDouble',
      ]);
      function I(e) {
        return null != e && M.has(e.type);
      }
      function A(e) {
        return (
          null != e && ('string' === e.type || 'esriFieldTypeString' === e.type)
        );
      }
      var D, z;
      function O(e) {
        return null == e || ('number' == typeof e && isNaN(e)) ? null : e;
      }
      function E(e, t) {
        return e.nullable && null === t
          ? null
          : I(e) &&
            !(function (e, t) {
              const n = 'string' == typeof e ? L(e) : e;
              return (
                !!n &&
                (n.isInteger
                  ? _(t) && t >= n.min && t <= n.max
                  : t >= n.min && t <= n.max)
              );
            })(e.type, Number(t))
          ? D.OUT_OF_RANGE
          : k(e, t)
          ? e.domain
            ? (function (e, t) {
                switch (e.type) {
                  case 'range': {
                    const n = 'range' in e ? e.range[0] : e.minValue,
                      i = 'range' in e ? e.range[1] : e.maxValue;
                    if (+t < n || +t > i) return r.VALUE_OUT_OF_RANGE;
                    break;
                  }
                  case 'coded-value':
                  case 'codedValue':
                    if (
                      null == e.codedValues ||
                      e.codedValues.every((e) => null == e || e.code !== t)
                    )
                      return r.INVALID_CODED_VALUE;
                }
                return null;
              })(e.domain, t)
            : null
          : z.INVALID_TYPE;
      }
      function L(e) {
        switch (e) {
          case 'esriFieldTypeSmallInteger':
          case 'small-integer':
            return G;
          case 'esriFieldTypeInteger':
          case 'integer':
            return q;
          case 'esriFieldTypeSingle':
          case 'single':
            return Z;
          case 'esriFieldTypeDouble':
          case 'double':
            return U;
        }
      }
      !(function (e) {
        e.OUT_OF_RANGE = 'numeric-range-validation-error::out-of-range';
      })(D || (D = {})),
        (function (e) {
          e.INVALID_TYPE = 'type-validation-error::invalid-type';
        })(z || (z = {}));
      const G = { min: -32768, max: 32767, isInteger: !0 },
        q = { min: -2147483648, max: 2147483647, isInteger: !0 },
        Z = { min: -34e37, max: 12e37, isInteger: !1 },
        U = { min: -Number.MAX_VALUE, max: Number.MAX_VALUE, isInteger: !1 };
      function $(e, t, n) {
        switch (e) {
          case r.INVALID_CODED_VALUE:
            return `Value ${n} is not in the coded domain - field: ${
              t.name
            }, domain: ${JSON.stringify(t.domain)}`;
          case r.VALUE_OUT_OF_RANGE:
            return `Value ${n} is out of the range of valid values - field: ${
              t.name
            }, domain: ${JSON.stringify(t.domain)}`;
          case z.INVALID_TYPE:
            return `Value ${n} is not a valid value for the field type - field: ${t.name}, type: ${t.type}, nullable: ${t.nullable}`;
          case D.OUT_OF_RANGE: {
            const { min: e, max: r } = L(t.type);
            return `Value ${n} is out of range for the number type - field: ${t.name}, type: ${t.type}, value range is ${e} to ${r}`;
          }
        }
      }
    },
    98046: (e, t, n) => {
      n.d(t, { Z: () => f });
      var r,
        i = n(43697),
        l = n(22303),
        a = n(22974),
        o = n(5600),
        s = n(75215),
        u = n(36030),
        c = n(52011),
        d = n(899);
      let m = (r = class extends d.Z {
        constructor(e) {
          super(e),
            (this.algorithm = null),
            (this.fromColor = null),
            (this.toColor = null),
            (this.type = 'algorithmic');
        }
        clone() {
          return new r({
            fromColor: (0, a.d9)(this.fromColor),
            toColor: (0, a.d9)(this.toColor),
            algorithm: this.algorithm,
          });
        }
      });
      (0, i._)(
        [
          (0, u.J)({
            esriCIELabAlgorithm: 'cie-lab',
            esriHSVAlgorithm: 'hsv',
            esriLabLChAlgorithm: 'lab-lch',
          }),
        ],
        m.prototype,
        'algorithm',
        void 0,
      ),
        (0, i._)(
          [(0, o.Cb)({ type: l.Z, json: { type: [s.z8], write: !0 } })],
          m.prototype,
          'fromColor',
          void 0,
        ),
        (0, i._)(
          [(0, o.Cb)({ type: l.Z, json: { type: [s.z8], write: !0 } })],
          m.prototype,
          'toColor',
          void 0,
        ),
        (0, i._)(
          [(0, o.Cb)({ type: ['algorithmic'] })],
          m.prototype,
          'type',
          void 0,
        ),
        (m = r =
          (0, i._)([(0, c.j)('esri.rest.support.AlgorithmicColorRamp')], m));
      const f = m;
    },
    57316: (e, t, n) => {
      n.d(t, { Z: () => y });
      var r = n(43697),
        i = n(35454),
        l = n(5600),
        a = (n(67676), n(80442), n(75215), n(52011)),
        o = n(96674),
        s = n(94593),
        u = n(89164);
      const c = new i.X({
        classBreaksDef: 'class-breaks-definition',
        uniqueValueDef: 'unique-value-definition',
      });
      let d = class extends o.wq {
        constructor() {
          super(...arguments),
            (this.baseSymbol = null),
            (this.colorRamp = null),
            (this.type = null);
        }
      };
      (0, r._)(
        [(0, l.Cb)({ type: u.Z, json: { write: !0 } })],
        d.prototype,
        'baseSymbol',
        void 0,
      ),
        (0, r._)(
          [
            (0, l.Cb)({
              types: s.V,
              json: { read: { reader: s.i }, write: !0 },
            }),
          ],
          d.prototype,
          'colorRamp',
          void 0,
        ),
        (0, r._)(
          [(0, l.Cb)({ json: { read: c.read, write: c.write } })],
          d.prototype,
          'type',
          void 0,
        ),
        (d = (0, r._)(
          [(0, a.j)('esri.rest.support.ClassificationDefinition')],
          d,
        ));
      const m = d,
        f = new i.X({
          esriClassifyEqualInterval: 'equal-interval',
          esriClassifyManual: 'manual',
          esriClassifyNaturalBreaks: 'natural-breaks',
          esriClassifyQuantile: 'quantile',
          esriClassifyStandardDeviation: 'standard-deviation',
          esriClassifyDefinedInterval: 'defined-interval',
        }),
        p = new i.X({
          esriNormalizeByLog: 'log',
          esriNormalizeByPercentOfTotal: 'percent-of-total',
          esriNormalizeByField: 'field',
        });
      let h = class extends m {
        constructor() {
          super(...arguments),
            (this.breakCount = null),
            (this.classificationField = null),
            (this.classificationMethod = null),
            (this.normalizationField = null),
            (this.normalizationType = null),
            (this.type = 'class-breaks-definition');
        }
        set standardDeviationInterval(e) {
          'standard-deviation' === this.classificationMethod &&
            this._set('standardDeviationInterval', e);
        }
        set definedInterval(e) {
          'defined-interval' === this.classificationMethod &&
            this._set('definedInterval', e);
        }
      };
      (0, r._)(
        [(0, l.Cb)({ json: { write: !0 } })],
        h.prototype,
        'breakCount',
        void 0,
      ),
        (0, r._)(
          [(0, l.Cb)({ json: { write: !0 } })],
          h.prototype,
          'classificationField',
          void 0,
        ),
        (0, r._)(
          [(0, l.Cb)({ type: String, json: { read: f.read, write: f.write } })],
          h.prototype,
          'classificationMethod',
          void 0,
        ),
        (0, r._)(
          [(0, l.Cb)({ json: { write: !0 } })],
          h.prototype,
          'normalizationField',
          void 0,
        ),
        (0, r._)(
          [(0, l.Cb)({ json: { read: p.read, write: p.write } })],
          h.prototype,
          'normalizationType',
          void 0,
        ),
        (0, r._)(
          [(0, l.Cb)({ value: null, json: { write: !0 } })],
          h.prototype,
          'standardDeviationInterval',
          null,
        ),
        (0, r._)(
          [(0, l.Cb)({ value: null, json: { write: !0 } })],
          h.prototype,
          'definedInterval',
          null,
        ),
        (0, r._)([(0, l.Cb)()], h.prototype, 'type', void 0),
        (h = (0, r._)(
          [(0, a.j)('esri.rest.support.ClassBreaksDefinition')],
          h,
        ));
      const y = h;
    },
    899: (e, t, n) => {
      n.d(t, { Z: () => s });
      var r = n(43697),
        i = n(96674),
        l = n(5600),
        a = (n(67676), n(80442), n(75215), n(52011));
      let o = class extends i.wq {
        constructor(e) {
          super(e), (this.type = null);
        }
      };
      (0, r._)(
        [(0, l.Cb)({ readOnly: !0, json: { read: !1, write: !0 } })],
        o.prototype,
        'type',
        void 0,
      ),
        (o = (0, r._)([(0, a.j)('esri.rest.support.ColorRamp')], o));
      const s = o;
    },
    1515: (e, t, n) => {
      n.d(t, { Z: () => d });
      var r,
        i = n(43697),
        l = n(22974),
        a = n(5600),
        o = (n(75215), n(52011)),
        s = n(98046),
        u = n(899);
      let c = (r = class extends u.Z {
        constructor(e) {
          super(e), (this.colorRamps = null), (this.type = 'multipart');
        }
        clone() {
          return new r({ colorRamps: (0, l.d9)(this.colorRamps) });
        }
      });
      (0, i._)(
        [(0, a.Cb)({ type: [s.Z], json: { write: !0 } })],
        c.prototype,
        'colorRamps',
        void 0,
      ),
        (0, i._)(
          [(0, a.Cb)({ type: ['multipart'] })],
          c.prototype,
          'type',
          void 0,
        ),
        (c = r =
          (0, i._)([(0, o.j)('esri.rest.support.MultipartColorRamp')], c));
      const d = c;
    },
    94593: (e, t, n) => {
      n.d(t, { i: () => o, V: () => a });
      var r = n(98046),
        i = n(899),
        l = n(1515);
      const a = {
        key: 'type',
        base: i.Z,
        typeMap: { algorithmic: r.Z, multipart: l.Z },
      };
      function o(e) {
        return e && e.type
          ? 'algorithmic' === e.type
            ? r.Z.fromJSON(e)
            : 'multipart' === e.type
            ? l.Z.fromJSON(e)
            : null
          : null;
      }
    },
    8418: (e, t, n) => {
      n.d(t, {
        G2: () => x,
        oF: () => C,
        XL: () => g,
        i5: () => y,
        H0: () => h,
        eT: () => S,
        Qm: () => V,
        Lq: () => b,
        fk: () => _,
        S5: () => p,
        F_: () => F,
        DL: () => N,
      });
      var r = n(57316);
      function i(e, t) {
        return Number(e.toFixed(t));
      }
      function l(e) {
        const { normalizationTotal: t } = e;
        return { classBreaks: a(e), normalizationTotal: t };
      }
      function a(e) {
        const t = e.definition,
          {
            classificationMethod: n,
            breakCount: r,
            normalizationType: l,
            definedInterval: a,
          } = t,
          u = [];
        let c = e.values;
        if (0 === c.length) return [];
        c = c.sort((e, t) => e - t);
        const d = c[0],
          m = c[c.length - 1];
        if ('equal-interval' === n)
          if (c.length >= r) {
            const e = (m - d) / r;
            let t = d;
            for (let n = 1; n < r; n++) {
              const r = i(d + n * e, 6);
              u.push({ minValue: t, maxValue: r, label: o(t, r, l) }), (t = r);
            }
            u.push({ minValue: t, maxValue: m, label: o(t, m, l) });
          } else
            c.forEach((e) => {
              u.push({ minValue: e, maxValue: e, label: o(e, e, l) });
            });
        else if ('natural-breaks' === n) {
          const t = (function (e) {
              const t = [],
                n = [];
              let r = Number.MIN_VALUE,
                i = 1,
                l = -1;
              for (let a = 0; a < e.length; a++) {
                const o = e[a];
                o === r
                  ? (i++, (n[l] = i))
                  : null !== o && (t.push(o), (r = o), (i = 1), n.push(i), l++);
              }
              return { uniqueValues: t, valueFrequency: n };
            })(c),
            n = e.valueFrequency || t.valueFrequency,
            a = s(t.uniqueValues, n, r);
          let f = d;
          for (let e = 1; e < r; e++)
            if (t.uniqueValues.length > e) {
              const n = i(t.uniqueValues[a[e]], 6);
              u.push({ minValue: f, maxValue: n, label: o(f, n, l) }), (f = n);
            }
          u.push({ minValue: f, maxValue: m, label: o(f, m, l) });
        } else if ('quantile' === n)
          if (c.length >= r && d !== m) {
            let e = d,
              t = Math.ceil(c.length / r),
              n = 0;
            for (let i = 1; i < r; i++) {
              let a = t + n - 1;
              a > c.length && (a = c.length - 1),
                a < 0 && (a = 0),
                u.push({ minValue: e, maxValue: c[a], label: o(e, c[a], l) }),
                (e = c[a]),
                (n += t),
                (t = Math.ceil((c.length - n) / (r - i)));
            }
            u.push({ minValue: e, maxValue: m, label: o(e, m, l) });
          } else {
            let e = -1;
            for (let t = 0; t < c.length; t++) {
              const n = c[t];
              n !== e &&
                ((e = n),
                u.push({ minValue: e, maxValue: n, label: o(e, n, l) }),
                (e = n));
            }
          }
        else if ('standard-deviation' === n) {
          const e = (function (e) {
              let t = 0;
              for (let n = 0; n < e.length; n++) t += e[n];
              return (t /= e.length), t;
            })(c),
            t = (function (e, t) {
              let n = 0;
              for (let r = 0; r < e.length; r++) {
                const i = e[r];
                n += (i - t) * (i - t);
              }
              return (n /= e.length), Math.sqrt(n);
            })(c, e);
          if (0 === t)
            u.push({ minValue: c[0], maxValue: c[0], label: o(c[0], c[0], l) });
          else {
            const n =
              (function (e, t, n, r, i) {
                let l = Math.max(r - e, t - r) / i / n;
                return (l = l >= 1 ? 1 : l >= 0.5 ? 0.5 : 0.25), l;
              })(d, m, r, e, t) * t;
            let a = 0,
              s = d;
            for (let t = r; t >= 1; t--) {
              const r = i(e - (t - 0.5) * n, 6);
              u.push({ minValue: s, maxValue: r, label: o(s, r, l) }),
                (s = r),
                a++;
            }
            let c = i(e + 0.5 * n, 6);
            u.push({ minValue: s, maxValue: c, label: o(s, c, l) }),
              (s = c),
              a++;
            for (let t = 1; t <= r; t++)
              (c = a === 2 * r ? m : i(e + (t + 0.5) * n, 6)),
                u.push({ minValue: s, maxValue: c, label: o(s, c, l) }),
                (s = c),
                a++;
          }
        } else if ('defined-interval' === n) {
          if (!a) return u;
          const e = c[0],
            t = c[c.length - 1],
            n = Math.ceil((t - e) / a);
          let r = e;
          for (let t = 1; t < n; t++) {
            const n = i(e + t * a, 6);
            u.push({ minValue: r, maxValue: n, label: o(r, n, l) }), (r = n);
          }
          u.push({ minValue: r, maxValue: t, label: o(r, t, l) });
        }
        return u;
      }
      function o(e, t, n) {
        let r = null;
        return (
          (r =
            e === t
              ? n && 'percent-of-total' === n
                ? e + '%'
                : e.toString()
              : n && 'percent-of-total' === n
              ? e + '% - ' + t + '%'
              : e + ' - ' + t),
          r
        );
      }
      function s(e, t, n) {
        const r = e.length,
          i = [];
        n > r && (n = r);
        for (let e = 0; e < n; e++) i.push(Math.round((e * r) / n - 1));
        i.push(r - 1);
        let l = u(i, e, t, n);
        return (
          (function (e, t, n, r, i, l) {
            let a = 0,
              o = 0,
              s = 0,
              u = 0,
              d = !0;
            for (let m = 0; m < 2 && d; m++) {
              0 === m && (d = !1);
              for (let m = 0; m < l - 1; m++)
                for (; n[m + 1] + 1 !== n[m + 2]; ) {
                  n[m + 1] = n[m + 1] + 1;
                  const l = c(m, n, r, i);
                  (s = l.sbMean), (a = l.sbSdcm);
                  const f = c(m + 1, n, r, i);
                  if (
                    ((u = f.sbMean), (o = f.sbSdcm), !(a + o < t[m] + t[m + 1]))
                  ) {
                    n[m + 1] = n[m + 1] - 1;
                    break;
                  }
                  (t[m] = a),
                    (t[m + 1] = o),
                    (e[m] = s),
                    (e[m + 1] = u),
                    (d = !0);
                }
              for (let m = l - 1; m > 0; m--)
                for (; n[m] !== n[m - 1] + 1; ) {
                  n[m] = n[m] - 1;
                  const l = c(m - 1, n, r, i);
                  (s = l.sbMean), (a = l.sbSdcm);
                  const f = c(m, n, r, i);
                  if (
                    ((u = f.sbMean), (o = f.sbSdcm), !(a + o < t[m - 1] + t[m]))
                  ) {
                    n[m] = n[m] + 1;
                    break;
                  }
                  (t[m - 1] = a),
                    (t[m] = o),
                    (e[m - 1] = s),
                    (e[m] = u),
                    (d = !0);
                }
            }
            return d;
          })(l.mean, l.sdcm, i, e, t, n) && (l = u(i, e, t, n)),
          i
        );
      }
      function u(e, t, n, r) {
        let i = [],
          l = [],
          a = [],
          o = 0;
        const s = [],
          u = [];
        for (let i = 0; i < r; i++) {
          const r = c(i, e, t, n);
          s.push(r.sbMean), u.push(r.sbSdcm), (o += u[i]);
        }
        let d,
          m = o,
          f = !0;
        for (; f || o < m; ) {
          (f = !1), (i = []);
          for (let t = 0; t < r; t++) i.push(e[t]);
          for (let n = 0; n < r; n++)
            for (let i = e[n] + 1; i <= e[n + 1]; i++)
              if (
                ((d = t[i]),
                n > 0 &&
                  i !== e[n + 1] &&
                  Math.abs(d - s[n]) > Math.abs(d - s[n - 1]))
              )
                e[n] = i;
              else if (
                n < r - 1 &&
                e[n] !== i - 1 &&
                Math.abs(d - s[n]) > Math.abs(d - s[n + 1])
              ) {
                e[n + 1] = i - 1;
                break;
              }
          (m = o), (o = 0), (l = []), (a = []);
          for (let i = 0; i < r; i++) {
            l.push(s[i]), a.push(u[i]);
            const r = c(i, e, t, n);
            (s[i] = r.sbMean), (u[i] = r.sbSdcm), (o += u[i]);
          }
        }
        if (o > m) {
          for (let t = 0; t < r; t++)
            (e[t] = i[t]), (s[t] = l[t]), (u[t] = a[t]);
          o = m;
        }
        return { mean: s, sdcm: u };
      }
      function c(e, t, n, r) {
        let i = 0,
          l = 0;
        for (let a = t[e] + 1; a <= t[e + 1]; a++) {
          const e = r[a];
          (i += n[a] * e), (l += e);
        }
        l <= 0 && console.log('Exception in Natural Breaks calculation');
        const a = i / l;
        let o = 0;
        for (let i = t[e] + 1; i <= t[e + 1]; i++) o += r[i] * (n[i] - a) ** 2;
        return { sbMean: a, sbSdcm: o };
      }
      const d = /\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi,
        m = new Set([
          'esriFieldTypeInteger',
          'esriFieldTypeSmallInteger',
          'esriFieldTypeSingle',
          'esriFieldTypeDouble',
        ]),
        f = [
          'min',
          'max',
          'avg',
          'stddev',
          'count',
          'sum',
          'variance',
          'nullcount',
          'median',
        ];
      function p(e) {
        const t = null != e.normalizationField || null != e.normalizationType,
          n = null != e.minValue || null != e.maxValue,
          r = !!e.sqlExpression && e.supportsSQLExpression;
        return !t && !n && !r;
      }
      function h(e) {
        const t = e.returnDistinct ? [...new Set(e.values)] : e.values,
          n = t.filter((e) => null != e).length,
          r = { count: n };
        return (
          e.supportsNullCount && (r.nullcount = t.length - n),
          e.percentileParams && (r.median = g(t, e.percentileParams)),
          r
        );
      }
      function y(e) {
        const { values: t, useSampleStdDev: n, supportsNullCount: r } = e;
        let i = Number.POSITIVE_INFINITY,
          l = Number.NEGATIVE_INFINITY,
          a = null,
          o = null,
          s = null,
          u = null,
          c = 0;
        const d = null == e.minValue ? -1 / 0 : e.minValue,
          m = null == e.maxValue ? 1 / 0 : e.maxValue;
        for (const e of t)
          Number.isFinite(e)
            ? e >= d &&
              e <= m &&
              ((a += e), (i = Math.min(i, e)), (l = Math.max(l, e)), c++)
            : 'string' == typeof e && c++;
        if (c && null != a) {
          o = a / c;
          let e = 0;
          for (const n of t)
            Number.isFinite(n) && n >= d && n <= m && (e += (n - o) ** 2);
          (u = n ? (c > 1 ? e / (c - 1) : 0) : c > 0 ? e / c : 0),
            (s = Math.sqrt(u));
        } else (i = null), (l = null);
        const f = {
          avg: o,
          count: c,
          max: l,
          min: i,
          stddev: s,
          sum: a,
          variance: u,
        };
        return (
          r && (f.nullcount = t.length - c),
          e.percentileParams && (f.median = g(t, e.percentileParams)),
          f
        );
      }
      function g(e, t) {
        const { fieldType: n, value: r, orderBy: i, isDiscrete: l } = t,
          a = b(n, 'desc' === i);
        if (
          0 ===
          (e = [...e].filter((e) => null != e).sort((e, t) => a(e, t))).length
        )
          return null;
        if (r <= 0) return e[0];
        if (r >= 1) return e[e.length - 1];
        const o = (e.length - 1) * r,
          s = Math.floor(o),
          u = s + 1,
          c = o % 1,
          d = e[s],
          m = e[u];
        return u >= e.length ||
          l ||
          'string' == typeof d ||
          'string' == typeof m
          ? d
          : d * (1 - c) + m * c;
      }
      function b(e, t) {
        const n = t ? 1 : -1,
          r = (function (e) {
            return e ? (e, t) => t - e : (e, t) => e - t;
          })(t),
          i = v(t);
        if (
          !e ||
          ![
            'esriFieldTypeDate',
            'esriFieldTypeString',
            'esriFieldTypeGUID',
            'esriFieldTypeGlobalID',
            ...m,
          ].includes(e)
        )
          return (e, t) =>
            'number' == typeof e && 'number' == typeof t
              ? r(e, t)
              : 'string' == typeof e && 'string' == typeof t
              ? i(e, t)
              : n;
        if ('esriFieldTypeDate' === e)
          return (e, t) => {
            const i = new Date(e).getTime(),
              l = new Date(t).getTime();
            return isNaN(i) || isNaN(l) ? n : r(i, l);
          };
        if (m.has(e)) return (e, t) => r(e, t);
        if ('esriFieldTypeString' === e) return (e, t) => i(e, t);
        if ('esriFieldTypeGUID' === e || 'esriFieldTypeGlobalID' === e) {
          const e = v(t);
          return (t, n) => e(w(t), w(n));
        }
        return t ? (e, t) => 1 : (e, t) => -1;
      }
      function v(e) {
        return e
          ? (e, t) => {
              var n, r;
              return (e = null == (n = e) ? void 0 : n.toUpperCase()) >
                (t = null == (r = t) ? void 0 : r.toUpperCase())
                ? -1
                : e < t
                ? 1
                : 0;
            }
          : (e, t) => {
              var n, r;
              return (e = null == (n = e) ? void 0 : n.toUpperCase()) <
                (t = null == (r = t) ? void 0 : r.toUpperCase())
                ? -1
                : e > t
                ? 1
                : 0;
            };
      }
      function w(e) {
        return (
          e.substr(24, 12) +
          e.substr(19, 4) +
          e.substr(16, 2) +
          e.substr(14, 2) +
          e.substr(11, 2) +
          e.substr(9, 2) +
          e.substr(6, 2) +
          e.substr(4, 2) +
          e.substr(2, 2) +
          e.substr(0, 2)
        );
      }
      function F(e, t) {
        let n;
        for (n in e)
          f.indexOf(n) > -1 && (Number.isFinite(e[n]) || (e[n] = null));
        return t
          ? (['avg', 'stddev', 'variance'].forEach((t) => {
              null != e[t] && (e[t] = Math.ceil(e[t]));
            }),
            e)
          : e;
      }
      function S(e) {
        const t = {};
        for (let n of e)
          (null == n || ('string' == typeof n && '' === n.trim())) &&
            (n = null),
            null == t[n] ? (t[n] = { count: 1, data: n }) : t[n].count++;
        return { count: t };
      }
      function V(e, t, n) {
        const r = e.count,
          i = [];
        n &&
          t &&
          'coded-value' === t.type &&
          t.codedValues.forEach((e) => {
            const t = e.code;
            r.hasOwnProperty(t) || (r[t] = { data: t, count: 0 });
          });
        for (const e in r) {
          const t = r[e];
          i.push({ value: t.data, count: t.count, label: t.label });
        }
        return { uniqueValueInfos: i };
      }
      function _(e, t, n, r) {
        let i = null;
        switch (t) {
          case 'log':
            0 !== e && (i = Math.log(e) * Math.LOG10E);
            break;
          case 'percent-of-total':
            Number.isFinite(r) && 0 !== r && (i = (e / r) * 100);
            break;
          case 'field':
            Number.isFinite(n) && 0 !== n && (i = e / n);
            break;
          case 'natural-log':
            e > 0 && (i = Math.log(e));
            break;
          case 'square-root':
            e > 0 && (i = e ** 0.5);
        }
        return i;
      }
      function x(e, t) {
        const n = (function (e) {
          const t = e.field,
            n = e.classificationMethod || 'equal-interval',
            i = e.normalizationType,
            l = e.normalizationField,
            a = new r.Z();
          return (
            (a.classificationField = t),
            (a.breakCount = e.breakCount),
            (a.classificationMethod = n),
            (a.standardDeviationInterval =
              'standard-deviation' === n
                ? e.standardDeviationInterval || 1
                : void 0),
            (a.normalizationType = i),
            (a.normalizationField = 'field' === i ? l : void 0),
            a
          );
        })({
          field: t.field,
          normalizationType: t.normalizationType,
          normalizationField: t.normalizationField,
          classificationMethod: t.classificationMethod,
          standardDeviationInterval: t.standardDeviationInterval,
          breakCount: t.numClasses || 5,
        });
        return (
          (e = (function (e, t, n) {
            return (
              (t = null == t ? -1 / 0 : t),
              (n = null == n ? 1 / 0 : n),
              e.filter((e) => Number.isFinite(e) && e >= t && e <= n)
            );
          })(e, t.minValue, t.maxValue)),
          l({
            definition: n,
            values: e,
            normalizationTotal: t.normalizationTotal,
          })
        );
      }
      function N(e, t) {
        let n = e.classBreaks;
        const r = n.length,
          i = n[0].minValue,
          l = n[r - 1].maxValue,
          a = 'standard-deviation' === t,
          o = d;
        return (
          (n = n.map((e) => {
            const t = e.label,
              n = { minValue: e.minValue, maxValue: e.maxValue, label: t };
            if (a && t) {
              const e = t.match(o).map((e) => +e.trim());
              2 === e.length
                ? ((n.minStdDev = e[0]),
                  (n.maxStdDev = e[1]),
                  e[0] < 0 && e[1] > 0 && (n.hasAvg = !0))
                : 1 === e.length &&
                  (t.includes('<')
                    ? ((n.minStdDev = null), (n.maxStdDev = e[0]))
                    : t.includes('>') &&
                      ((n.minStdDev = e[0]), (n.maxStdDev = null)));
            }
            return n;
          })),
          {
            minValue: i,
            maxValue: l,
            classBreakInfos: n,
            normalizationTotal: e.normalizationTotal,
          }
        );
      }
      function C(e, t) {
        const {
            min: n,
            max: r,
            intervals: i,
          } = (function (e, t) {
            const {
                field: n,
                classificationMethod: r,
                standardDeviationInterval: i,
                normalizationType: l,
                normalizationField: a,
                normalizationTotal: o,
                minValue: s,
                maxValue: u,
              } = t,
              c = t.numBins || 10;
            let d = null,
              m = null,
              f = null;
            if ((r && 'equal-interval' !== r) || l) {
              const { classBreaks: t } = x(e, {
                field: n,
                normalizationType: l,
                normalizationField: a,
                normalizationTotal: o,
                classificationMethod: r,
                standardDeviationInterval: i,
                minValue: s,
                maxValue: u,
                numClasses: c,
              });
              (d = t[0].minValue),
                (m = t[t.length - 1].maxValue),
                (f = t.map((e) => [e.minValue, e.maxValue]));
            } else {
              if (null != s && null != u) (d = s), (m = u);
              else {
                const t = y({
                  values: e,
                  minValue: s,
                  maxValue: u,
                  useSampleStdDev: !l,
                  supportsNullCount: p({
                    normalizationType: l,
                    normalizationField: a,
                    minValue: s,
                    maxValue: u,
                  }),
                });
                (d = t.min), (m = t.max);
              }
              f = (function (e, t, n) {
                const r = (t - e) / n,
                  i = [];
                let l,
                  a = e;
                for (let e = 1; e <= n; e++)
                  (l = a + r),
                    (l = Number(l.toFixed(16))),
                    i.push([a, e === n ? t : l]),
                    (a = l);
                return i;
              })(d, m, c);
            }
            return { min: d, max: m, intervals: f };
          })(e, t),
          l = i.map((e, t) => ({
            minValue: i[t][0],
            maxValue: i[t][1],
            count: 0,
          }));
        for (const t of e)
          if (null != t && t >= n && t <= r) {
            const e = T(i, t);
            e > -1 && l[e].count++;
          }
        return {
          bins: l,
          minValue: n,
          maxValue: r,
          normalizationTotal: t.normalizationTotal,
        };
      }
      function T(e, t) {
        let n = -1;
        for (let r = e.length - 1; r >= 0; r--)
          if (t >= e[r][0]) {
            n = r;
            break;
          }
        return n;
      }
    },
    59266: (e, t, n) => {
      n.d(t, {
        mz: () => c,
        pp: () => u,
        WW: () => o,
        Yi: () => s,
        LC: () => a,
      }),
        n(66577);
      var r = n(70586),
        i = n(82971);
      let l;
      function a() {
        return (
          l ||
            (l = (async () => {
              const e = await Promise.all([
                n.e(9490),
                n.e(5886),
                n.e(6690),
              ]).then(n.bind(n, 96690));
              return {
                arcade: e.arcade,
                arcadeUtils: e,
                Dictionary: e.Dictionary,
                Feature: e.arcadeFeature,
              };
            })()),
          l
        );
      }
      const o = (e, t, n) => c.create(e, t, n, null, ['$feature']),
        s = (e, t, n) => c.create(e, t, n, null, ['$feature', '$view']),
        u = (e, t, n, r) => c.create(e, t, n, r, ['$feature', '$view']);
      class c {
        constructor(e, t, n, r, i, l, a, o) {
          (this.script = e), (this.evaluate = i);
          const s = Array.isArray(a) ? a : a.fields;
          (this.fields = s),
            (this._syntaxTree = r),
            (this._arcade = t),
            (this._arcadeDictionary = n),
            (this._arcadeFeature = l),
            (this._spatialReference = o),
            (this._referencesGeometry = t.scriptTouchesGeometry(
              this._syntaxTree,
            )),
            (this._referencesScale = this._arcade.referencesMember(
              this._syntaxTree,
              'scale',
            ));
        }
        static async create(e, t, n, l, o, s) {
          const { arcade: u, Feature: d, Dictionary: m } = await a(),
            f = i.Z.fromJSON(t),
            p = u.parseScript(e, s),
            h = o.reduce((e, t) => ({ ...e, [t]: null }), {});
          let y = null;
          (0, r.pC)(l) &&
            ((y = new m(l)), (y.immutable = !0), (h.$config = null));
          const g = u.scriptUsesGeometryEngine(p) && u.enableGeometrySupport(),
            b = u.scriptUsesFeatureSet(p) && u.enableFeatureSetSupport(),
            v = u.scriptIsAsync(p) && u.enableAsyncSupport(),
            w = { vars: h, spatialReference: f, useAsync: !!v },
            F = new m();
          (F.immutable = !1), F.setField('scale', 0);
          const S = u.compileScript(p, w);
          return (
            await Promise.all([g, b, v]),
            new c(
              e,
              u,
              m,
              p,
              (e) => (
                '$view' in e &&
                  e.$view &&
                  (F.setField('scale', e.$view.scale), (e.$view = F)),
                y && (e.$config = y),
                S({ vars: e, spatialReference: f })
              ),
              new d(),
              n,
              f,
            )
          );
        }
        repurposeFeature(e) {
          return (
            e.geometry &&
              !e.geometry.spatialReference &&
              (e.geometry.spatialReference = this._spatialReference),
            this._arcadeFeature.repurposeFromGraphicLikeObject(
              e.geometry,
              e.attributes,
              { fields: this.fields },
            ),
            this._arcadeFeature
          );
        }
        createDictionary() {
          return new this._arcadeDictionary();
        }
        referencesMember(e) {
          return this._arcade.referencesMember(this._syntaxTree, e);
        }
        referencesFunction(e) {
          return this._arcade.referencesFunction(this._syntaxTree, e);
        }
        referencesGeometry() {
          return this._referencesGeometry;
        }
        referencesScale() {
          return this._referencesScale;
        }
        extractFieldLiterals() {
          return this._arcade.extractExpectedFieldLiterals(this._syntaxTree);
        }
      }
    },
    89164: (e, t, n) => {
      n.d(t, { Z: () => f });
      var r = n(43697),
        i = n(22303),
        l = n(35454),
        a = n(96674),
        o = n(5600),
        s = (n(67676), n(80442), n(75215), n(71715)),
        u = n(52011);
      const c = new l.X({
        esriSMS: 'simple-marker',
        esriPMS: 'picture-marker',
        esriSLS: 'simple-line',
        esriSFS: 'simple-fill',
        esriPFS: 'picture-fill',
        esriTS: 'text',
        esriSHD: 'shield-label-symbol',
        PointSymbol3D: 'point-3d',
        LineSymbol3D: 'line-3d',
        PolygonSymbol3D: 'polygon-3d',
        WebStyleSymbol: 'web-style',
        MeshSymbol3D: 'mesh-3d',
        LabelSymbol3D: 'label-3d',
        CIMSymbolReference: 'cim',
      });
      let d = 0,
        m = class extends a.wq {
          constructor(e) {
            super(e),
              (this.id = 'sym' + d++),
              (this.type = null),
              (this.color = new i.Z([0, 0, 0, 1]));
          }
          readColor(e) {
            return e && null != e[0] ? [e[0], e[1], e[2], e[3] / 255] : e;
          }
          async collectRequiredFields(e, t) {}
          hash() {
            return JSON.stringify(this.toJSON());
          }
          clone() {}
        };
      (0, r._)(
        [
          (0, o.Cb)({
            type: c.apiValues,
            readOnly: !0,
            json: { read: !1, write: { ignoreOrigin: !0, writer: c.write } },
          }),
        ],
        m.prototype,
        'type',
        void 0,
      ),
        (0, r._)(
          [(0, o.Cb)({ type: i.Z, json: { write: { allowNull: !0 } } })],
          m.prototype,
          'color',
          void 0,
        ),
        (0, r._)([(0, s.r)('color')], m.prototype, 'readColor', null),
        (m = (0, r._)([(0, u.j)('esri.symbols.Symbol')], m));
      const f = m;
    },
  },
]);
