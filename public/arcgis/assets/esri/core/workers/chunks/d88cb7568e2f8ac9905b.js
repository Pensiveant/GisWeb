'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [1785],
  {
    3892: (t, e, r) => {
      function n(t) {
        return 'h' in t && 's' in t && 'v' in t;
      }
      function i(t) {
        return 'l' in t && 'a' in t && 'b' in t;
      }
      function a(t) {
        return 'l' in t && 'c' in t && 'h' in t;
      }
      r.d(e, { _Y: () => f, Y3: () => g, sJ: () => m, xr: () => y });
      const s = [
          [0.4124, 0.3576, 0.1805],
          [0.2126, 0.7152, 0.0722],
          [0.0193, 0.1192, 0.9505],
        ],
        o = [
          [3.2406, -1.5372, -0.4986],
          [-0.9689, 1.8758, 0.0415],
          [0.0557, -0.204, 1.057],
        ];
      function l(t, e) {
        const r = [];
        let n, i;
        if (t[0].length !== e.length) throw 'dimensions do not match';
        const a = t.length,
          s = t[0].length;
        let o = 0;
        for (n = 0; n < a; n++) {
          for (o = 0, i = 0; i < s; i++) o += t[n][i] * e[i];
          r.push(o);
        }
        return r;
      }
      function u(t) {
        const e = [t.r / 255, t.g / 255, t.b / 255].map((t) =>
            t <= 0.04045 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4,
          ),
          r = l(s, e);
        return { x: 100 * r[0], y: 100 * r[1], z: 100 * r[2] };
      }
      function c(t) {
        const e = l(o, [t.x / 100, t.y / 100, t.z / 100]).map((t) => {
          const e = t <= 0.0031308 ? 12.92 * t : 1.055 * t ** (1 / 2.4) - 0.055;
          return Math.min(1, Math.max(e, 0));
        });
        return {
          r: Math.round(255 * e[0]),
          g: Math.round(255 * e[1]),
          b: Math.round(255 * e[2]),
        };
      }
      function h(t) {
        const e = [t.x / 95.047, t.y / 100, t.z / 108.883].map((t) =>
          t > (6 / 29) ** 3
            ? t ** (1 / 3)
            : (1 / 3) * (29 / 6) ** 2 * t + 4 / 29,
        );
        return {
          l: 116 * e[1] - 16,
          a: 500 * (e[0] - e[1]),
          b: 200 * (e[1] - e[2]),
        };
      }
      function p(t) {
        const e = t.l,
          r = [
            (e + 16) / 116 + t.a / 500,
            (e + 16) / 116,
            (e + 16) / 116 - t.b / 200,
          ].map((t) =>
            t > 6 / 29 ? t ** 3 : 3 * (6 / 29) ** 2 * (t - 4 / 29),
          );
        return { x: 95.047 * r[0], y: 100 * r[1], z: 108.883 * r[2] };
      }
      function y(t) {
        return 'r' in (e = t) && 'g' in e && 'b' in e
          ? t
          : a(t)
          ? (function (t) {
              return c(
                p(
                  (function (t) {
                    const e = t.l,
                      r = t.c,
                      n = t.h;
                    return { l: e, a: r * Math.cos(n), b: r * Math.sin(n) };
                  })(t),
                ),
              );
            })(t)
          : i(t)
          ? (function (t) {
              return c(p(t));
            })(t)
          : (function (t) {
              return 'x' in t && 'y' in t && 'z' in t;
            })(t)
          ? c(t)
          : n(t)
          ? (function (t) {
              const e = ((t.h + 360) % 360) / 60,
                r = t.s / 100,
                n = (t.v / 100) * 255,
                i = n * r,
                a = i * (1 - Math.abs((e % 2) - 1));
              let s;
              switch (Math.floor(e)) {
                case 0:
                  s = { r: i, g: a, b: 0 };
                  break;
                case 1:
                  s = { r: a, g: i, b: 0 };
                  break;
                case 2:
                  s = { r: 0, g: i, b: a };
                  break;
                case 3:
                  s = { r: 0, g: a, b: i };
                  break;
                case 4:
                  s = { r: a, g: 0, b: i };
                  break;
                case 5:
                case 6:
                  s = { r: i, g: 0, b: a };
                  break;
                default:
                  s = { r: 0, g: 0, b: 0 };
              }
              return (
                (s.r = Math.round(s.r + n - i)),
                (s.g = Math.round(s.g + n - i)),
                (s.b = Math.round(s.b + n - i)),
                s
              );
            })(t)
          : t;
        var e;
      }
      function f(t) {
        return n(t)
          ? t
          : (function (t) {
              const e = t.r,
                r = t.g,
                n = t.b,
                i = Math.max(e, r, n),
                a = i - Math.min(e, r, n);
              let s = i,
                o =
                  0 === a
                    ? 0
                    : i === e
                    ? ((r - n) / a) % 6
                    : i === r
                    ? (n - e) / a + 2
                    : (e - r) / a + 4,
                l = 0 === a ? 0 : a / s;
              return (
                o < 0 && (o += 6),
                (o *= 60),
                (l *= 100),
                (s *= 100 / 255),
                { h: o, s: l, v: s }
              );
            })(y(t));
      }
      function g(t) {
        return i(t)
          ? t
          : (function (t) {
              return h(u(t));
            })(y(t));
      }
      function m(t) {
        return a(t)
          ? t
          : (function (t) {
              return (function (t) {
                const e = t.l,
                  r = t.a,
                  n = t.b,
                  i = Math.sqrt(r * r + n * n);
                let a = Math.atan2(n, r);
                return (a = a > 0 ? a : a + 2 * Math.PI), { l: e, c: i, h: a };
              })(h(u(t)));
            })(y(t));
      }
    },
    31363: (t, e, r) => {
      r.d(e, {
        _U: () => a,
        DT: () => o,
        B1: () => n,
        JJ: () => i,
        sX: () => p,
        k3: () => h,
        DQ: () => u,
        Or: () => c,
      });
      const n = Number.POSITIVE_INFINITY,
        i = Math.PI,
        a = 2 * i,
        s = 128 / i,
        o = i / 180,
        l = 1 / Math.LN2;
      function u(t, e) {
        return (t %= e) >= 0 ? t : t + e;
      }
      function c(t) {
        return u(t * s, 256);
      }
      function h(t) {
        return Math.log(t) * l;
      }
      function p(t, e, r) {
        return t * (1 - r) + e * r;
      }
    },
    26084: (t, e, r) => {
      r.d(e, { Z: () => n });
      class n {
        constructor(t) {
          (this._array = []),
            t <= 0 && console.error('strideInBytes must be positive!'),
            (this._stride = t);
        }
        get array() {
          return this._array;
        }
        get index() {
          return (4 * this._array.length) / this._stride;
        }
        get itemSize() {
          return this._stride;
        }
        get sizeInBytes() {
          return 4 * this._array.length;
        }
        reset() {
          this.array.length = 0;
        }
        toBuffer() {
          return new Uint32Array(this._array).buffer;
        }
        static i1616to32(t, e) {
          return (65535 & t) | (e << 16);
        }
        static i8888to32(t, e, r, n) {
          return (255 & t) | ((255 & e) << 8) | ((255 & r) << 16) | (n << 24);
        }
        static i8816to32(t, e, r) {
          return (255 & t) | ((255 & e) << 8) | (r << 16);
        }
      }
    },
    4215: (t, e, r) => {
      var n, i, a, s, o;
      r.d(e, { al: () => i, _K: () => s, Fr: () => o }),
        (function (t) {
          (t[(t.UNKNOWN = 0)] = 'UNKNOWN'),
            (t[(t.FILL_VERTEX = 1)] = 'FILL_VERTEX'),
            (t[(t.FILL_DD_VERTEX = 2)] = 'FILL_DD_VERTEX'),
            (t[(t.FILL_INDEX = 3)] = 'FILL_INDEX'),
            (t[(t.OUTLINE_VERTEX = 4)] = 'OUTLINE_VERTEX'),
            (t[(t.OUTLINE_DD_VERTEX = 5)] = 'OUTLINE_DD_VERTEX'),
            (t[(t.OUTLINE_INDEX = 6)] = 'OUTLINE_INDEX'),
            (t[(t.LINE_VERTEX = 7)] = 'LINE_VERTEX'),
            (t[(t.LINE_DD_VERTEX = 8)] = 'LINE_DD_VERTEX'),
            (t[(t.LINE_INDEX = 9)] = 'LINE_INDEX'),
            (t[(t.ICON_VERTEX = 10)] = 'ICON_VERTEX'),
            (t[(t.ICON_DD_VERTEX = 11)] = 'ICON_DD_VERTEX'),
            (t[(t.ICON_INDEX = 12)] = 'ICON_INDEX'),
            (t[(t.TEXT_VERTEX = 13)] = 'TEXT_VERTEX'),
            (t[(t.TEXT_DD_VERTEX = 14)] = 'TEXT_DD_VERTEX'),
            (t[(t.TEXT_INDEX = 15)] = 'TEXT_INDEX'),
            (t[(t.CIRCLE_VERTEX = 16)] = 'CIRCLE_VERTEX'),
            (t[(t.CIRCLE_INDEX = 17)] = 'CIRCLE_INDEX');
        })(n || (n = {})),
        (function (t) {
          (t[(t.FILL = 1)] = 'FILL'),
            (t[(t.LINE = 2)] = 'LINE'),
            (t[(t.SYMBOL = 3)] = 'SYMBOL'),
            (t[(t.CIRCLE = 4)] = 'CIRCLE');
        })(i || (i = {})),
        (function (t) {
          (t[(t.BACKGROUND = 0)] = 'BACKGROUND'),
            (t[(t.OPAQUE = 1)] = 'OPAQUE'),
            (t[(t.TRANSLUCENT = 2)] = 'TRANSLUCENT'),
            (t[(t.SYMBOLS = 3)] = 'SYMBOLS'),
            (t[(t.HITTEST = 4)] = 'HITTEST');
        })(a || (a = {})),
        (function (t) {
          (t[(t.BACKGROUND = 0)] = 'BACKGROUND'),
            (t[(t.FILL = 1)] = 'FILL'),
            (t[(t.OUTLINE = 2)] = 'OUTLINE'),
            (t[(t.LINE = 3)] = 'LINE'),
            (t[(t.ICON = 4)] = 'ICON'),
            (t[(t.CIRCLE = 5)] = 'CIRCLE'),
            (t[(t.TEXT = 6)] = 'TEXT'),
            (t[(t.TILEINFO = 7)] = 'TILEINFO');
        })(s || (s = {})),
        (function (t) {
          (t[(t.PAINTER_CHANGED = 0)] = 'PAINTER_CHANGED'),
            (t[(t.LAYOUT_CHANGED = 1)] = 'LAYOUT_CHANGED'),
            (t[(t.LAYER_CHANGED = 2)] = 'LAYER_CHANGED'),
            (t[(t.LAYER_REMOVED = 3)] = 'LAYER_REMOVED'),
            (t[(t.SPRITES_CHANGED = 4)] = 'SPRITES_CHANGED');
        })(o || (o = {}));
    },
    21315: (t, e, r) => {
      r.d(e, {
        aF: () => s,
        f2: () => f,
        fR: () => n,
        nR: () => l,
        R: () => a,
        vL: () => o,
        _5: () => u,
        r1: () => h,
      });
      var n,
        i,
        a,
        s,
        o,
        l,
        u,
        c,
        h,
        p,
        y = r(95648);
      ((p = n || (n = {}))[(p.BACKGROUND = 0)] = 'BACKGROUND'),
        (p[(p.FILL = 1)] = 'FILL'),
        (p[(p.LINE = 2)] = 'LINE'),
        (p[(p.SYMBOL = 3)] = 'SYMBOL'),
        (p[(p.CIRCLE = 4)] = 'CIRCLE'),
        (function (t) {
          (t[(t.VISIBLE = 0)] = 'VISIBLE'), (t[(t.NONE = 1)] = 'NONE');
        })(i || (i = {})),
        (function (t) {
          (t[(t.POINT = 0)] = 'POINT'),
            (t[(t.LINE = 1)] = 'LINE'),
            (t[(t.LINE_CENTER = 2)] = 'LINE_CENTER');
        })(a || (a = {})),
        (function (t) {
          (t[(t.MAP = 0)] = 'MAP'),
            (t[(t.VIEWPORT = 1)] = 'VIEWPORT'),
            (t[(t.AUTO = 2)] = 'AUTO');
        })(s || (s = {})),
        (function (t) {
          (t[(t.AUTO = 0)] = 'AUTO'),
            (t[(t.LEFT = 1)] = 'LEFT'),
            (t[(t.CENTER = 2)] = 'CENTER'),
            (t[(t.RIGHT = 3)] = 'RIGHT');
        })(o || (o = {})),
        (function (t) {
          (t[(t.CENTER = 0)] = 'CENTER'),
            (t[(t.LEFT = 1)] = 'LEFT'),
            (t[(t.RIGHT = 2)] = 'RIGHT'),
            (t[(t.TOP = 3)] = 'TOP'),
            (t[(t.BOTTOM = 4)] = 'BOTTOM'),
            (t[(t.TOP_LEFT = 5)] = 'TOP_LEFT'),
            (t[(t.TOP_RIGHT = 6)] = 'TOP_RIGHT'),
            (t[(t.BOTTOM_LEFT = 7)] = 'BOTTOM_LEFT'),
            (t[(t.BOTTOM_RIGHT = 8)] = 'BOTTOM_RIGHT');
        })(l || (l = {})),
        (function (t) {
          (t[(t.NONE = 0)] = 'NONE'),
            (t[(t.UPPERCASE = 1)] = 'UPPERCASE'),
            (t[(t.LOWERCASE = 2)] = 'LOWERCASE');
        })(u || (u = {})),
        (function (t) {
          (t[(t.MAP = 0)] = 'MAP'), (t[(t.VIEWPORT = 1)] = 'VIEWPORT');
        })(c || (c = {})),
        (function (t) {
          (t[(t.HORIZONTAL = 0)] = 'HORIZONTAL'),
            (t[(t.VERTICAL = 1)] = 'VERTICAL');
        })(h || (h = {}));
      class f {}
      (f.backgroundLayoutDefinition = {
        visibility: {
          type: 'enum',
          values: ['visible', 'none'],
          default: i.VISIBLE,
        },
      }),
        (f.fillLayoutDefinition = {
          visibility: {
            type: 'enum',
            values: ['visible', 'none'],
            default: i.VISIBLE,
          },
        }),
        (f.lineLayoutDefinition = {
          visibility: {
            type: 'enum',
            values: ['visible', 'none'],
            default: i.VISIBLE,
          },
          'line-cap': {
            type: 'enum',
            values: ['butt', 'round', 'square'],
            default: y.RL.BUTT,
          },
          'line-join': {
            type: 'enum',
            values: ['bevel', 'round', 'miter'],
            default: y.AH.MITER,
          },
          'line-miter-limit': { type: 'number', default: 2 },
          'line-round-limit': { type: 'number', default: 1.05 },
        }),
        (f.symbolLayoutDefinition = {
          visibility: {
            type: 'enum',
            values: ['visible', 'none'],
            default: i.VISIBLE,
          },
          'symbol-avoid-edges': { type: 'boolean', default: !1 },
          'symbol-placement': {
            type: 'enum',
            values: ['point', 'line', 'line-center'],
            default: a.POINT,
          },
          'symbol-sort-key': { type: 'number', default: -1 },
          'symbol-spacing': { type: 'number', minimum: 1, default: 250 },
          'icon-allow-overlap': { type: 'boolean', default: !1 },
          'icon-anchor': {
            type: 'enum',
            values: [
              'center',
              'left',
              'right',
              'top',
              'bottom',
              'top-left',
              'top-right',
              'bottom-left',
              'bottom-right',
            ],
            default: l.CENTER,
          },
          'icon-ignore-placement': { type: 'boolean', default: !1 },
          'icon-image': { type: 'string' },
          'icon-keep-upright': { type: 'boolean', default: !1 },
          'icon-offset': {
            type: 'array',
            value: 'number',
            length: 2,
            default: [0, 0],
          },
          'icon-optional': { type: 'boolean', default: !1 },
          'icon-padding': { type: 'number', minimum: 0, default: 2 },
          'icon-rotate': { type: 'number', default: 0 },
          'icon-rotation-alignment': {
            type: 'enum',
            values: ['map', 'viewport', 'auto'],
            default: s.AUTO,
          },
          'icon-size': { type: 'number', minimum: 0, default: 1 },
          'text-allow-overlap': { type: 'boolean', default: !1 },
          'text-anchor': {
            type: 'enum',
            values: [
              'center',
              'left',
              'right',
              'top',
              'bottom',
              'top-left',
              'top-right',
              'bottom-left',
              'bottom-right',
            ],
            default: l.CENTER,
          },
          'text-field': { type: 'string' },
          'text-font': {
            type: 'array',
            value: 'string',
            default: ['Open Sans Regular', 'Arial Unicode MS Regular'],
          },
          'text-ignore-placement': { type: 'boolean', default: !1 },
          'text-justify': {
            type: 'enum',
            values: ['auto', 'left', 'center', 'right'],
            default: o.CENTER,
          },
          'text-keep-upright': { type: 'boolean', default: !0 },
          'text-letter-spacing': { type: 'number', default: 0 },
          'text-line-height': { type: 'number', default: 1.2 },
          'text-max-angle': { type: 'number', minimum: 0, default: 45 },
          'text-max-width': { type: 'number', minimum: 0, default: 10 },
          'text-offset': {
            type: 'array',
            value: 'number',
            length: 2,
            default: [0, 0],
          },
          'text-optional': { type: 'boolean', default: !1 },
          'text-padding': { type: 'number', minimum: 0, default: 2 },
          'text-rotate': { type: 'number', default: 0 },
          'text-rotation-alignment': {
            type: 'enum',
            values: ['map', 'viewport', 'auto'],
            default: s.AUTO,
          },
          'text-size': { type: 'number', minimum: 0, default: 16 },
          'text-transform': {
            type: 'enum',
            values: ['none', 'uppercase', 'lowercase'],
            default: u.NONE,
          },
          'text-writing-mode': {
            type: 'array',
            value: 'enum',
            values: ['horizontal', 'vertical'],
            default: [h.HORIZONTAL],
          },
        }),
        (f.circleLayoutDefinition = {
          visibility: {
            type: 'enum',
            values: ['visible', 'none'],
            default: i.VISIBLE,
          },
        }),
        (f.backgroundPaintDefinition = {
          'background-color': { type: 'color', default: [0, 0, 0, 1] },
          'background-opacity': {
            type: 'number',
            minimum: 0,
            maximum: 1,
            default: 1,
          },
          'background-pattern': { type: 'string' },
        }),
        (f.fillPaintDefinition = {
          'fill-antialias': { type: 'boolean', default: !0 },
          'fill-color': { type: 'color', default: [0, 0, 0, 1] },
          'fill-opacity': {
            type: 'number',
            minimum: 0,
            maximum: 1,
            default: 1,
          },
          'fill-outline-color': { type: 'color', default: [0, 0, 0, 0] },
          'fill-pattern': { type: 'string' },
          'fill-translate': {
            type: 'array',
            value: 'number',
            length: 2,
            default: [0, 0],
          },
          'fill-translate-anchor': {
            type: 'enum',
            values: ['map', 'viewport'],
            default: c.MAP,
          },
        }),
        (f.linePaintDefinition = {
          'line-blur': { type: 'number', minimum: 0, default: 0 },
          'line-color': { type: 'color', default: [0, 0, 0, 1] },
          'line-dasharray': { type: 'array', value: 'number', default: [] },
          'line-gap-width': { type: 'number', minimum: 0, default: 0 },
          'line-offset': { type: 'number', default: 0 },
          'line-opacity': {
            type: 'number',
            minimum: 0,
            maximum: 1,
            default: 1,
          },
          'line-pattern': { type: 'string' },
          'line-translate': {
            type: 'array',
            value: 'number',
            length: 2,
            default: [0, 0],
          },
          'line-translate-anchor': {
            type: 'enum',
            values: ['map', 'viewport'],
            default: c.MAP,
          },
          'line-width': { type: 'number', minimum: 0, default: 1 },
        }),
        (f.symbolPaintDefinition = {
          'icon-color': { type: 'color', default: [0, 0, 0, 1] },
          'icon-halo-blur': { type: 'number', minimum: 0, default: 0 },
          'icon-halo-color': { type: 'color', default: [0, 0, 0, 0] },
          'icon-halo-width': { type: 'number', minimum: 0, default: 0 },
          'icon-opacity': {
            type: 'number',
            minimum: 0,
            maximum: 1,
            default: 1,
          },
          'icon-translate': {
            type: 'array',
            value: 'number',
            length: 2,
            default: [0, 0],
          },
          'icon-translate-anchor': {
            type: 'enum',
            values: ['map', 'viewport'],
            default: c.MAP,
          },
          'text-color': { type: 'color', default: [0, 0, 0, 1] },
          'text-halo-blur': { type: 'number', minimum: 0, default: 0 },
          'text-halo-color': { type: 'color', default: [0, 0, 0, 0] },
          'text-halo-width': { type: 'number', minimum: 0, default: 0 },
          'text-opacity': {
            type: 'number',
            minimum: 0,
            maximum: 1,
            default: 1,
          },
          'text-translate': {
            type: 'array',
            value: 'number',
            length: 2,
            default: [0, 0],
          },
          'text-translate-anchor': {
            type: 'enum',
            values: ['map', 'viewport'],
            default: c.MAP,
          },
        }),
        (f.rasterPaintDefinition = {
          'raster-opacity': {
            type: 'number',
            minimum: 0,
            maximum: 1,
            default: 1,
          },
          'raster-hue-rotate': { type: 'number', default: 0 },
          'raster-brightness-min': {
            type: 'number',
            minimum: 0,
            maximum: 1,
            default: 0,
          },
          'raster-brightness-max': {
            type: 'number',
            minimum: 0,
            maximum: 1,
            default: 1,
          },
          'raster-saturation': {
            type: 'number',
            minimum: -1,
            maximum: 1,
            default: 0,
          },
          'raster-contrast': {
            type: 'number',
            minimum: -1,
            maximum: 1,
            default: 0,
          },
          'raster-fade-duration': { type: 'number', minimum: 0, default: 300 },
        }),
        (f.circlePaintDefinition = {
          'circle-blur': { type: 'number', minimum: 0, default: 0 },
          'circle-color': { type: 'color', default: [0, 0, 0, 1] },
          'circle-opacity': {
            type: 'number',
            minimum: 0,
            maximum: 1,
            default: 1,
          },
          'circle-radius': { type: 'number', minimum: 0, default: 5 },
          'circle-stroke-color': { type: 'color', default: [0, 0, 0, 1] },
          'circle-stroke-opacity': {
            type: 'number',
            minimum: 0,
            maximum: 1,
            default: 1,
          },
          'circle-stroke-width': { type: 'number', minimum: 0, default: 0 },
          'circle-translate': {
            type: 'array',
            value: 'number',
            length: 2,
            default: [0, 0],
          },
          'circle-translate-anchor': {
            type: 'enum',
            values: ['map', 'viewport'],
            default: c.MAP,
          },
        });
    },
    7333: (t, e, r) => {
      r.d(e, {
        Et: () => Pt,
        sj: () => Gt,
        Le: () => Ot,
        _L: () => Bt,
        gf: () => St,
        jG: () => Ut,
        nj: () => kt,
      });
      var n,
        i,
        a = r(95648),
        s = r(4215),
        o = r(70586),
        l = r(26084);
      !(function (t) {
        (t[(t.R8_SIGNED = 0)] = 'R8_SIGNED'),
          (t[(t.R8_UNSIGNED = 1)] = 'R8_UNSIGNED'),
          (t[(t.R16_SIGNED = 2)] = 'R16_SIGNED'),
          (t[(t.R16_UNSIGNED = 3)] = 'R16_UNSIGNED'),
          (t[(t.R8G8_SIGNED = 4)] = 'R8G8_SIGNED'),
          (t[(t.R8G8_UNSIGNED = 5)] = 'R8G8_UNSIGNED'),
          (t[(t.R16G16_SIGNED = 6)] = 'R16G16_SIGNED'),
          (t[(t.R16G16_UNSIGNED = 7)] = 'R16G16_UNSIGNED'),
          (t[(t.R8G8B8A8_SIGNED = 8)] = 'R8G8B8A8_SIGNED'),
          (t[(t.R8G8B8A8_UNSIGNED = 9)] = 'R8G8B8A8_UNSIGNED'),
          (t[(t.R8G8B8A8_COLOR = 10)] = 'R8G8B8A8_COLOR'),
          (t[(t.R16G16B16A16_DASHARRAY = 11)] = 'R16G16B16A16_DASHARRAY'),
          (t[(t.R16G16B16A16_PATTERN = 12)] = 'R16G16B16A16_PATTERN');
      })(n || (n = {})),
        (function (t) {
          (t[(t.UNIFORM = 0)] = 'UNIFORM'),
            (t[(t.DATA_DRIVEN = 1)] = 'DATA_DRIVEN'),
            (t[(t.INTERPOLATED_DATA_DRIVEN = 2)] = 'INTERPOLATED_DATA_DRIVEN'),
            (t[(t.UNUSED = 3)] = 'UNUSED');
        })(i || (i = {}));
      var u = r(35371),
        c = r(21968);
      class h {
        constructor(t) {
          (this._locations = new Map()), (this._key = t);
        }
        get key() {
          return this._key;
        }
        get type() {
          return 7 & this._key;
        }
        defines() {
          return [];
        }
        getStride() {
          return this._layoutInfo || this._buildAttributesInfo(), this._stride;
        }
        getAttributeLocations() {
          return (
            0 === this._locations.size && this._buildAttributesInfo(),
            this._locations
          );
        }
        getLayoutInfo() {
          return (
            this._layoutInfo || this._buildAttributesInfo(), this._layoutInfo
          );
        }
        getEncodingInfos() {
          return (
            this._propertyEncodingInfo || this._buildAttributesInfo(),
            this._propertyEncodingInfo
          );
        }
        getUniforms() {
          return this._uniforms || this._buildAttributesInfo(), this._uniforms;
        }
        getShaderHeader() {
          return (
            this._shaderHeader || this._buildAttributesInfo(),
            this._shaderHeader
          );
        }
        getShaderMain() {
          return (
            this._shaderMain || this._buildAttributesInfo(), this._shaderMain
          );
        }
        setDataUniforms(t, e, r, n, i) {
          const a = this.getUniforms();
          for (const s of a) {
            const { name: a, type: o, getValue: l } = s,
              u = l(r, e, n, i);
            if (null !== u)
              switch (o) {
                case 'float':
                  t.setUniform1f(a, u);
                  break;
                case 'vec2':
                  t.setUniform2fv(a, u);
                  break;
                case 'vec4':
                  t.setUniform4fv(a, u);
              }
          }
        }
        encodeAttributes(t, e, r, i) {
          const a = this.attributesInfo(),
            s = this.getEncodingInfos(),
            o = [];
          let l = 0,
            u = 0;
          for (const h of Object.keys(s)) {
            var c;
            const p = s[h],
              { type: y, precisionFactor: f, isLayout: g } = a[h],
              m = g ? r.getLayoutProperty(h) : r.getPaintProperty(h),
              d =
                null == (c = m.interpolator)
                  ? void 0
                  : c.getInterpolationRange(e);
            let _ = 0;
            for (const r of p) {
              const { offset: a, bufferElementsToAdd: s } = r;
              if (s > 0) {
                for (let t = 0; t < s; t++) o.push(0);
                (l += u), (u = r.bufferElementsToAdd);
              }
              const c = null != i ? i : m.getValue(d ? d[_] : e, t);
              switch (y) {
                case n.R8_SIGNED:
                case n.R8_UNSIGNED:
                  o[l] |= this._encodeByte(c * (f || 1), 8 * a);
                  break;
                case n.R16_SIGNED:
                case n.R16_UNSIGNED:
                  o[l] |= this._encodeShort(c * (f || 1), 8 * a);
                  break;
                case n.R8G8_SIGNED:
                case n.R8G8_UNSIGNED:
                  (o[l] |= this._encodeByte(c * (f || 1), 8 * a)),
                    (o[l] |= this._encodeByte(c * (f || 1), 8 * a + 8));
                  break;
                case n.R16G16_SIGNED:
                case n.R16G16_UNSIGNED:
                  (o[l] |= this._encodeShort(c * (f || 1), 8 * a)),
                    (o[l] |= this._encodeShort(c * (f || 1), 8 * a + 16));
                  break;
                case n.R8G8B8A8_SIGNED:
                case n.R8G8B8A8_UNSIGNED:
                  (o[l] |= this._encodeByte(c * (f || 1), 8 * a)),
                    (o[l] |= this._encodeByte(c * (f || 1), 8 * a + 8)),
                    (o[l] |= this._encodeByte(c * (f || 1), 8 * a + 16)),
                    (o[l] |= this._encodeByte(c * (f || 1), 8 * a + 24));
                  break;
                case n.R8G8B8A8_COLOR:
                  o[l] = this._encodeColor(c);
                  break;
                case n.R16G16B16A16_DASHARRAY:
                case n.R16G16B16A16_PATTERN:
                  this._encodePattern(l, o, c);
                  break;
                default:
                  throw new Error('Unsupported encoding type');
              }
              _++;
            }
          }
          return o;
        }
        getAtributeState(t) {
          let e = 0;
          const r = 3 + 2 * t;
          return (e |= this._bit(r)), (e |= this._bit(r + 1) << 1), e;
        }
        _buildAttributesInfo() {
          const t = [],
            e = {},
            r = {};
          let n = -1;
          const a = this.attributesInfo(),
            s = this.attributes();
          let o = -1;
          for (const l of s) {
            o++;
            const s = this.getAtributeState(o);
            if (s === i.UNIFORM || s === i.UNUSED) continue;
            const u = a[l],
              c = [];
            e[l] = c;
            const p = u.type;
            for (let e = 0; e < s; e++) {
              const {
                  dataType: e,
                  bytesPerElement: i,
                  count: a,
                  normalized: s,
                } = h._encodingInfo[p],
                o = i * a;
              let l = r[e],
                u = 0;
              if (!l || l.count + a > 4)
                n++,
                  (l = { dataIndex: n, count: 0, offset: 0 }),
                  4 !== a && (r[e] = l),
                  t.push({
                    location: -1,
                    name: 'a_data_' + n,
                    count: a,
                    type: e,
                    normalized: s,
                  }),
                  (u = Math.ceil(Math.max(o / 4, 1)));
              else {
                const e = t[l.dataIndex];
                (e.count += a),
                  (u =
                    Math.ceil(Math.max((e.count * i) / 4, 1)) -
                    Math.ceil(Math.max(l.offset / 4, 1)));
              }
              c.push({
                dataIndex: l.dataIndex,
                offset: l.offset,
                bufferElementsToAdd: u,
              }),
                (l.offset += o),
                (l.count += a);
            }
          }
          for (const e of t)
            switch (e.type) {
              case u.g.BYTE:
              case u.g.UNSIGNED_BYTE:
                e.count = 4;
              case u.g.SHORT:
              case u.g.UNSIGNED_SHORT:
                e.count += e.count % 2;
            }
          this._buildVertexBufferLayout(t);
          let l = 0;
          const c = this._layoutInfo.geometry;
          for (const t of c) this._locations.set(t.name, l++);
          const p = this._layoutInfo.opacity;
          if (p) for (const t of p) this._locations.set(t.name, l++);
          this._buildShaderInfo(t, e), (this._propertyEncodingInfo = e);
        }
        _buildVertexBufferLayout(t) {
          const e = {},
            r = this.geometryInfo();
          let n = r[0].stride;
          if (0 === t.length) e.geometry = r;
          else {
            const i = [];
            let a = n;
            for (const e of t) n += p(e.type) * e.count;
            for (const t of r) {
              const e = { ...t };
              (e.stride = n), i.push(e);
            }
            for (const e of t)
              i.push(new c.G(e.name, e.count, e.type, a, n)),
                (a += p(e.type) * e.count);
            e.geometry = i;
          }
          this.opacityInfo() && (e.opacity = this.opacityInfo()),
            (this._layoutInfo = e),
            (this._stride = n);
        }
        _buildShaderInfo(t, e) {
          let r = '\n',
            a = '\n';
          const s = [];
          for (const e of t)
            r += `attribute ${this._getType(e.count)} ${e.name};\n`;
          const l = this.attributes(),
            u = this.attributesInfo();
          let c = -1;
          for (const t of l) {
            c++;
            const { name: l, type: p, precisionFactor: f, isLayout: g } = u[t],
              m = f && 1 !== f ? ' * ' + 1 / f : '',
              { bytesPerElement: d, count: _ } = h._encodingInfo[p],
              E = (t) => `a_data_${t.dataIndex}${y(_, t.offset, d)}`;
            switch (this.getAtributeState(c)) {
              case i.UNIFORM:
                {
                  const e = this._getType(_),
                    i = `u_${l}`;
                  s.push({
                    name: i,
                    type: e,
                    getValue: (e, r, i, a) => {
                      const s = g
                        ? e.getLayoutValue(t, r)
                        : e.getPaintValue(t, r);
                      if (p === n.R16G16B16A16_DASHARRAY) {
                        const t = e.getDashKey(
                            s,
                            e.getLayoutValue('line-cap', r),
                          ),
                          n = a.getMosaicItemPosition(t, !1);
                        if ((0, o.Wi)(n)) return null;
                        const { tl: i, br: l } = n;
                        return [i[0], l[1], l[0], i[1]];
                      }
                      if (p === n.R16G16B16A16_PATTERN) {
                        const e = a.getMosaicItemPosition(
                          s,
                          -1 === t.indexOf('line-'),
                        );
                        if ((0, o.Wi)(e)) return null;
                        const { tl: r, br: n } = e;
                        return [r[0], n[1], n[0], r[1]];
                      }
                      if (p === n.R8G8B8A8_COLOR) {
                        const t = s[3];
                        return [t * s[0], t * s[1], t * s[2], t];
                      }
                      return s;
                    },
                  }),
                    (r += `uniform ${e} ${i};\n`),
                    (a += `${e} ${l} = ${i};\n`);
                }
                break;
              case i.DATA_DRIVEN:
                {
                  const r = E(e[t][0]);
                  a += `${this._getType(_)} ${l} = ${r}${m};\n`;
                }
                break;
              case i.INTERPOLATED_DATA_DRIVEN: {
                const n = `u_t_${l}`;
                s.push({
                  name: n,
                  type: 'float',
                  getValue: (e, r, n, i) =>
                    (g
                      ? e.getLayoutProperty(t)
                      : e.getPaintProperty(t)
                    ).interpolator.interpolationUniformValue(n, r),
                }),
                  (r += `uniform float ${n};\n`);
                const i = E(e[t][0]),
                  o = E(e[t][1]);
                a += `${this._getType(
                  _,
                )} ${l} = mix(${i}${m}, ${o}${m}, ${n});\n`;
              }
            }
          }
          (this._shaderHeader = r),
            (this._shaderMain = a),
            (this._uniforms = s);
        }
        _bit(t) {
          return (this._key & (1 << t)) >> t;
        }
        _getType(t) {
          switch (t) {
            case 1:
              return 'float';
            case 2:
              return 'vec2';
            case 3:
              return 'vec3';
            case 4:
              return 'vec4';
          }
          throw new Error('Invalid count');
        }
        _encodeColor(t) {
          const e = 255 * t[3];
          return l.Z.i8888to32(t[0] * e, t[1] * e, t[2] * e, e);
        }
        _encodePattern(t, e, r) {
          if (!r || !r.rect) return;
          const n = r.rect,
            i = r.width,
            a = r.height;
          (e[t] = this._encodeShort(n.x + 2, 0)),
            (e[t] |= this._encodeShort(n.y + 2 + a, 16)),
            (e[t + 1] = this._encodeShort(n.x + 2 + i, 0)),
            (e[t + 1] |= this._encodeShort(n.y + 2, 16));
        }
        _encodeByte(t, e) {
          return (255 & t) << e;
        }
        _encodeShort(t, e) {
          return (65535 & t) << e;
        }
      }
      h._encodingInfo = {
        [n.R8_SIGNED]: {
          dataType: u.g.BYTE,
          bytesPerElement: 1,
          count: 1,
          normalized: !1,
        },
        [n.R8_UNSIGNED]: {
          dataType: u.g.UNSIGNED_BYTE,
          bytesPerElement: 1,
          count: 1,
          normalized: !1,
        },
        [n.R16_SIGNED]: {
          dataType: u.g.SHORT,
          bytesPerElement: 2,
          count: 1,
          normalized: !1,
        },
        [n.R16_UNSIGNED]: {
          dataType: u.g.UNSIGNED_SHORT,
          bytesPerElement: 2,
          count: 1,
          normalized: !1,
        },
        [n.R8G8_SIGNED]: {
          dataType: u.g.BYTE,
          bytesPerElement: 1,
          count: 2,
          normalized: !1,
        },
        [n.R8G8_UNSIGNED]: {
          dataType: u.g.UNSIGNED_BYTE,
          bytesPerElement: 1,
          count: 2,
          normalized: !1,
        },
        [n.R16G16_SIGNED]: {
          dataType: u.g.SHORT,
          bytesPerElement: 2,
          count: 2,
          normalized: !1,
        },
        [n.R16G16_UNSIGNED]: {
          dataType: u.g.UNSIGNED_SHORT,
          bytesPerElement: 2,
          count: 2,
          normalized: !1,
        },
        [n.R8G8B8A8_SIGNED]: {
          dataType: u.g.BYTE,
          bytesPerElement: 1,
          count: 4,
          normalized: !1,
        },
        [n.R8G8B8A8_UNSIGNED]: {
          dataType: u.g.UNSIGNED_BYTE,
          bytesPerElement: 1,
          count: 4,
          normalized: !1,
        },
        [n.R8G8B8A8_COLOR]: {
          dataType: u.g.UNSIGNED_BYTE,
          bytesPerElement: 1,
          count: 4,
          normalized: !0,
        },
        [n.R16G16B16A16_DASHARRAY]: {
          dataType: u.g.UNSIGNED_SHORT,
          bytesPerElement: 2,
          count: 4,
          normalized: !1,
        },
        [n.R16G16B16A16_PATTERN]: {
          dataType: u.g.UNSIGNED_SHORT,
          bytesPerElement: 2,
          count: 4,
          normalized: !1,
        },
      };
      const p = (t) => {
          switch (t) {
            case u.g.FLOAT:
            case u.g.INT:
            case u.g.UNSIGNED_INT:
              return 4;
            case u.g.SHORT:
            case u.g.UNSIGNED_SHORT:
              return 2;
            case u.g.BYTE:
            case u.g.UNSIGNED_BYTE:
              return 1;
          }
        },
        y = (t, e, r) => {
          const n = e / r;
          if (1 === t)
            switch (n) {
              case 0:
                return '.x';
              case 1:
                return '.y';
              case 2:
                return '.z';
              case 3:
                return '.w';
            }
          else if (2 === t)
            switch (n) {
              case 0:
                return '.xy';
              case 1:
                return '.yz';
              case 2:
                return '.zw';
            }
          else if (3 === t)
            switch (n) {
              case 0:
                return '.xyz';
              case 1:
                return '.yzw';
            }
          return '';
        };
      class f extends h {
        constructor(t) {
          super(t);
        }
        geometryInfo() {
          return f.GEOMETRY_LAYOUT;
        }
        opacityInfo() {
          return null;
        }
        attributes() {
          return f.ATTRIBUTES;
        }
        attributesInfo() {
          return f.ATTRIBUTES_INFO;
        }
      }
      (f.ATTRIBUTES = []),
        (f.GEOMETRY_LAYOUT = [new c.G('a_pos', 2, u.g.BYTE, 0, 2)]),
        (f.ATTRIBUTES_INFO = {});
      class g extends h {
        constructor(t) {
          super(t);
        }
        geometryInfo() {
          return g.GEOMETRY_LAYOUT;
        }
        opacityInfo() {
          return null;
        }
        attributes() {
          return g.ATTRIBUTES;
        }
        attributesInfo() {
          return g.ATTRIBUTES_INFO;
        }
      }
      (g.ATTRIBUTES = [
        'circle-radius',
        'circle-color',
        'circle-opacity',
        'circle-stroke-width',
        'circle-stroke-color',
        'circle-stroke-opacity',
        'circle-blur',
      ]),
        (g.GEOMETRY_LAYOUT = [new c.G('a_pos', 2, u.g.SHORT, 0, 4)]),
        (g.ATTRIBUTES_INFO = {
          'circle-radius': { name: 'radius', type: n.R8_UNSIGNED },
          'circle-color': { name: 'color', type: n.R8G8B8A8_COLOR },
          'circle-opacity': {
            name: 'opacity',
            type: n.R8_UNSIGNED,
            precisionFactor: 100,
          },
          'circle-stroke-width': {
            name: 'stroke_width',
            type: n.R8_UNSIGNED,
            precisionFactor: 4,
          },
          'circle-stroke-color': {
            name: 'stroke_color',
            type: n.R8G8B8A8_COLOR,
          },
          'circle-stroke-opacity': {
            name: 'stroke_opacity',
            type: n.R8_UNSIGNED,
            precisionFactor: 100,
          },
          'circle-blur': {
            name: 'blur',
            type: n.R8_UNSIGNED,
            precisionFactor: 32,
          },
        });
      class m extends h {
        constructor(t) {
          super(t);
        }
        geometryInfo() {
          return m.GEOMETRY_LAYOUT;
        }
        opacityInfo() {
          return null;
        }
        attributes() {
          return m.ATTRIBUTES;
        }
        attributesInfo() {
          return m.ATTRIBUTES_INFO;
        }
      }
      (m.ATTRIBUTES = ['fill-color', 'fill-opacity', 'fill-pattern']),
        (m.GEOMETRY_LAYOUT = [new c.G('a_pos', 2, u.g.SHORT, 0, 4)]),
        (m.ATTRIBUTES_INFO = {
          'fill-color': { name: 'color', type: n.R8G8B8A8_COLOR },
          'fill-opacity': {
            name: 'opacity',
            type: n.R8_UNSIGNED,
            precisionFactor: 100,
          },
          'fill-pattern': {
            name: 'tlbr',
            type: n.R16G16B16A16_PATTERN,
            isOptional: !0,
          },
        });
      class d extends h {
        constructor(t, e) {
          super(t), (this.usefillColor = e);
        }
        geometryInfo() {
          return d.GEOMETRY_LAYOUT;
        }
        opacityInfo() {
          return null;
        }
        attributes() {
          return this.usefillColor ? d.ATTRIBUTES_FILL : d.ATTRIBUTES_OUTLINE;
        }
        attributesInfo() {
          return this.usefillColor
            ? d.ATTRIBUTES_INFO_FILL
            : d.ATTRIBUTES_INFO_OUTLINE;
        }
      }
      (d.ATTRIBUTES_OUTLINE = ['fill-outline-color', 'fill-opacity']),
        (d.ATTRIBUTES_FILL = ['fill-color', 'fill-opacity']),
        (d.GEOMETRY_LAYOUT = [
          new c.G('a_pos', 2, u.g.SHORT, 0, 8),
          new c.G('a_offset', 2, u.g.BYTE, 4, 8),
          new c.G('a_xnormal', 2, u.g.BYTE, 6, 8),
        ]),
        (d.ATTRIBUTES_INFO_OUTLINE = {
          'fill-outline-color': { name: 'color', type: n.R8G8B8A8_COLOR },
          'fill-opacity': {
            name: 'opacity',
            type: n.R8_UNSIGNED,
            precisionFactor: 100,
          },
        }),
        (d.ATTRIBUTES_INFO_FILL = {
          'fill-color': { name: 'color', type: n.R8G8B8A8_COLOR },
          'fill-opacity': {
            name: 'opacity',
            type: n.R8_UNSIGNED,
            precisionFactor: 100,
          },
        });
      class _ extends h {
        constructor(t) {
          super(t);
        }
        geometryInfo() {
          return _.GEOMETRY_LAYOUT;
        }
        opacityInfo() {
          return null;
        }
        attributes() {
          return _.ATTRIBUTES;
        }
        attributesInfo() {
          return _.ATTRIBUTES_INFO;
        }
      }
      (_.ATTRIBUTES = [
        'line-blur',
        'line-color',
        'line-gap-width',
        'line-offset',
        'line-opacity',
        'line-width',
        'line-pattern',
        'line-dasharray',
      ]),
        (_.GEOMETRY_LAYOUT = [
          new c.G('a_pos', 2, u.g.SHORT, 0, 16),
          new c.G('a_extrude_offset', 4, u.g.BYTE, 4, 16),
          new c.G('a_dir_normal', 4, u.g.BYTE, 8, 16),
          new c.G('a_accumulatedDistance', 2, u.g.UNSIGNED_SHORT, 12, 16),
        ]),
        (_.ATTRIBUTES_INFO = {
          'line-width': {
            name: 'width',
            type: n.R8_UNSIGNED,
            precisionFactor: 2,
          },
          'line-gap-width': {
            name: 'gap_width',
            type: n.R8_UNSIGNED,
            precisionFactor: 2,
          },
          'line-offset': {
            name: 'offset',
            type: n.R8_SIGNED,
            precisionFactor: 2,
          },
          'line-color': { name: 'color', type: n.R8G8B8A8_COLOR },
          'line-opacity': {
            name: 'opacity',
            type: n.R8_UNSIGNED,
            precisionFactor: 100,
          },
          'line-blur': {
            name: 'blur',
            type: n.R8_UNSIGNED,
            precisionFactor: 4,
          },
          'line-pattern': {
            name: 'tlbr',
            type: n.R16G16B16A16_PATTERN,
            isOptional: !0,
          },
          'line-dasharray': {
            name: 'tlbr',
            type: n.R16G16B16A16_DASHARRAY,
            isOptional: !0,
          },
        });
      const E = [
          new c.G('a_pos', 2, u.g.SHORT, 0, 16),
          new c.G('a_vertexOffset', 2, u.g.SHORT, 4, 16),
          new c.G('a_texAngleRange', 4, u.g.UNSIGNED_BYTE, 8, 16),
          new c.G('a_levelInfo', 4, u.g.UNSIGNED_BYTE, 12, 16),
        ],
        b = [new c.G('a_opacityInfo', 1, u.g.UNSIGNED_BYTE, 0, 1)];
      class T extends h {
        constructor(t) {
          super(t);
        }
        geometryInfo() {
          return E;
        }
        opacityInfo() {
          return b;
        }
        attributes() {
          return T.ATTRIBUTES;
        }
        attributesInfo() {
          return T.ATTRIBUTES_INFO;
        }
      }
      (T.ATTRIBUTES = [
        'icon-color',
        'icon-opacity',
        'icon-halo-blur',
        'icon-halo-color',
        'icon-halo-width',
        'icon-size',
      ]),
        (T.ATTRIBUTES_INFO = {
          'icon-color': { name: 'color', type: n.R8G8B8A8_COLOR },
          'icon-opacity': {
            name: 'opacity',
            type: n.R8_UNSIGNED,
            precisionFactor: 100,
          },
          'icon-halo-color': { name: 'halo_color', type: n.R8G8B8A8_COLOR },
          'icon-halo-width': {
            name: 'halo_width',
            type: n.R8_UNSIGNED,
            precisionFactor: 4,
          },
          'icon-halo-blur': {
            name: 'halo_blur',
            type: n.R8_UNSIGNED,
            precisionFactor: 4,
          },
          'icon-size': {
            name: 'size',
            type: n.R8_UNSIGNED,
            precisionFactor: 32,
            isLayout: !0,
          },
        });
      class I extends h {
        constructor(t) {
          super(t);
        }
        geometryInfo() {
          return E;
        }
        opacityInfo() {
          return b;
        }
        attributes() {
          return I.ATTRIBUTES;
        }
        attributesInfo() {
          return I.ATTRIBUTES_INFO;
        }
      }
      (I.ATTRIBUTES = [
        'text-color',
        'text-opacity',
        'text-halo-blur',
        'text-halo-color',
        'text-halo-width',
        'text-size',
      ]),
        (I.ATTRIBUTES_INFO = {
          'text-color': { name: 'color', type: n.R8G8B8A8_COLOR },
          'text-opacity': {
            name: 'opacity',
            type: n.R8_UNSIGNED,
            precisionFactor: 100,
          },
          'text-halo-color': { name: 'halo_color', type: n.R8G8B8A8_COLOR },
          'text-halo-width': {
            name: 'halo_width',
            type: n.R8_UNSIGNED,
            precisionFactor: 4,
          },
          'text-halo-blur': {
            name: 'halo_blur',
            type: n.R8_UNSIGNED,
            precisionFactor: 4,
          },
          'text-size': { name: 'size', type: n.R8_UNSIGNED, isLayout: !0 },
        });
      var v = r(22303),
        w = r(3892);
      function R(t, e, r, n) {
        const i = 3 * t,
          a = 3 * (r - t) - i,
          s = 1 - i - a,
          o = 3 * e,
          l = 3 * (n - e) - o,
          u = 1 - o - l;
        function c(t) {
          return ((s * t + a) * t + i) * t;
        }
        function h(t) {
          return (3 * s * t + 2 * a) * t + i;
        }
        return function (t, e = 1e-6) {
          return (function (t) {
            return ((u * t + l) * t + o) * t;
          })(
            (function (t, e) {
              let r, n, i, a, s, o;
              for (i = t, o = 0; o < 8; o++) {
                if (((a = c(i) - t), Math.abs(a) < e)) return i;
                if (((s = h(i)), Math.abs(s) < 1e-6)) break;
                i -= a / s;
              }
              if (((r = 0), (n = 1), (i = t), i < r)) return r;
              if (i > n) return n;
              for (; r < n; ) {
                if (((a = c(i)), Math.abs(a - t) < e)) return i;
                t > a ? (r = i) : (n = i), (i = 0.5 * (n - r) + r);
              }
              return i;
            })(t, e),
          );
        };
      }
      const N = {};
      (N.ease = R(0.25, 0.1, 0.25, 1)),
        (N.linear = R(0, 0, 1, 1)),
        (N.easeIn = N['ease-in'] = R(0.42, 0, 1, 1)),
        (N.easeOut = N['ease-out'] = R(0, 0, 0.58, 1)),
        (N.easeInOut = N['ease-in-out'] = R(0.42, 0, 0.58, 1));
      var D = r(31363);
      const L = { kind: 'null' },
        x = { kind: 'number' },
        A = { kind: 'string' },
        P = { kind: 'boolean' },
        O = { kind: 'color' },
        S = { kind: 'object' },
        U = { kind: 'value' };
      function G(t, e) {
        return { kind: 'array', itemType: t, n: e };
      }
      const B = [L, x, A, P, O, S, G(U)];
      function k(t) {
        if ('array' === t.kind) {
          const e = k(t.itemType);
          return 'number' == typeof t.n
            ? `array<${e}, ${t.n}>`
            : 'value' === t.itemType.kind
            ? 'array'
            : `array<${e}>`;
        }
        return t.kind;
      }
      function M(t) {
        if (null === t) return L;
        if ('string' == typeof t) return A;
        if ('boolean' == typeof t) return P;
        if ('number' == typeof t) return x;
        if (t instanceof v.Z) return O;
        if (Array.isArray(t)) {
          let e;
          for (const r of t) {
            const t = M(r);
            if (e) {
              if (e !== t) {
                e = U;
                break;
              }
            } else e = t;
          }
          return G(e || U, t.length);
        }
        return 'object' == typeof t ? S : U;
      }
      function C(t, e) {
        if ('array' === e.kind)
          return (
            'array' === t.kind &&
            ((0 === t.n && 'value' === t.itemType.kind) ||
              C(t.itemType, e.itemType)) &&
            ('number' != typeof e.n || e.n === t.n)
          );
        if ('value' === e.kind) for (const e of B) if (C(t, e)) return !0;
        return e.kind === t.kind;
      }
      function V(t) {
        if (null === t) return '';
        const e = typeof t;
        return 'string' === e
          ? t
          : 'number' === e || 'boolean' === e
          ? String(t)
          : t instanceof v.Z
          ? t.toString()
          : JSON.stringify(t);
      }
      var F = r(35362);
      class z {
        constructor(t) {
          (this.parent = t), (this.vars = {});
        }
        add(t, e) {
          this.vars[t] = e;
        }
        get(t) {
          return this.vars[t]
            ? this.vars[t]
            : this.parent
            ? this.parent.get(t)
            : null;
        }
      }
      class $ {
        constructor() {
          this.type = U;
        }
        static parse(t) {
          if (t.length > 1) throw new Error('"id" does not expect arguments');
          return new $();
        }
        evaluate(t, e) {
          return null == t ? void 0 : t.id;
        }
      }
      class Y {
        constructor() {
          this.type = A;
        }
        static parse(t) {
          if (t.length > 1)
            throw new Error('"geometry-type" does not expect arguments');
          return new Y();
        }
        evaluate(t, e) {
          if (!t) return null;
          switch (t.type) {
            case F.V.Point:
              return 'Point';
            case F.V.LineString:
              return 'LineString';
            case F.V.Polygon:
              return 'Polygon';
            default:
              return null;
          }
        }
      }
      class X {
        constructor() {
          this.type = S;
        }
        static parse(t) {
          if (t.length > 1)
            throw new Error('"properties" does not expect arguments');
          return new X();
        }
        evaluate(t, e) {
          return null == t ? void 0 : t.values;
        }
      }
      class H {
        constructor() {
          this.type = x;
        }
        static parse(t) {
          if (t.length > 1) throw new Error('"zoom" does not expect arguments');
          return new H();
        }
        evaluate(t, e) {
          return e;
        }
      }
      class Z {
        constructor(t, e, r) {
          (this.lhs = t), (this.rhs = e), (this.compare = r), (this.type = P);
        }
        static parse(t, e, r) {
          if (3 !== t.length && 4 !== t.length)
            throw new Error(`"${t[0]}" expects 2 or 3 arguments`);
          if (4 === t.length)
            throw new Error(`"${t[0]}" collator not supported`);
          return new Z(wt(t[1], e), wt(t[2], e), r);
        }
        evaluate(t, e) {
          return this.compare(this.lhs.evaluate(t, e), this.rhs.evaluate(t, e));
        }
      }
      class K {
        constructor(t) {
          (this.arg = t), (this.type = P);
        }
        static parse(t, e) {
          if (2 !== t.length) throw new Error('"!" expects 1 argument');
          return new K(wt(t[1], e));
        }
        evaluate(t, e) {
          return !this.arg.evaluate(t, e);
        }
      }
      class j {
        constructor(t) {
          (this.args = t), (this.type = P);
        }
        static parse(t, e) {
          const r = [];
          for (let n = 1; n < t.length; n++) r.push(wt(t[n], e));
          return new j(r);
        }
        evaluate(t, e) {
          for (const r of this.args) if (!r.evaluate(t, e)) return !1;
          return !0;
        }
      }
      class q {
        constructor(t) {
          (this.args = t), (this.type = P);
        }
        static parse(t, e) {
          const r = [];
          for (let n = 1; n < t.length; n++) r.push(wt(t[n], e));
          return new q(r);
        }
        evaluate(t, e) {
          for (const r of this.args) if (r.evaluate(t, e)) return !0;
          return !1;
        }
      }
      class W {
        constructor(t) {
          (this.args = t), (this.type = P);
        }
        static parse(t, e) {
          const r = [];
          for (let n = 1; n < t.length; n++) r.push(wt(t[n], e));
          return new W(r);
        }
        evaluate(t, e) {
          for (const r of this.args) if (r.evaluate(t, e)) return !1;
          return !0;
        }
      }
      class J {
        constructor(t, e, r) {
          (this.type = t), (this.args = e), (this.fallback = r);
        }
        static parse(t, e, r) {
          if (t.length < 4)
            throw new Error('"case" expects at least 3 arguments');
          if (t.length % 2 == 1)
            throw new Error('"case" expects an odd number of arguments');
          let n;
          const i = [];
          for (let a = 1; a < t.length - 1; a += 2) {
            const s = wt(t[a], e),
              o = wt(t[a + 1], e, r);
            n || (n = o.type), i.push({ condition: s, output: o });
          }
          const a = wt(t[t.length - 1], e, r);
          return n || (n = a.type), new J(n, i, a);
        }
        evaluate(t, e) {
          for (const r of this.args)
            if (r.condition.evaluate(t, e)) return r.output.evaluate(t, e);
          return this.fallback.evaluate(t, e);
        }
      }
      class Q {
        constructor(t, e) {
          (this.type = t), (this.args = e);
        }
        static parse(t, e) {
          if (t.length < 2)
            throw new Error('"coalesce" expects at least 1 argument');
          let r;
          const n = [];
          for (let i = 1; i < t.length; i++) {
            const a = wt(t[i], e);
            r || (r = a.type), n.push(a);
          }
          return new Q(r, n);
        }
        evaluate(t, e) {
          for (const r of this.args) {
            const n = r.evaluate(t, e);
            if (null !== n) return n;
          }
          return null;
        }
      }
      class tt {
        constructor(t, e, r, n, i) {
          (this.type = t),
            (this.input = e),
            (this.labels = r),
            (this.outputs = n),
            (this.fallback = i);
        }
        static parse(t, e) {
          if (t.length < 3)
            throw new Error('"match" expects at least 3 arguments');
          if (t.length % 2 == 0)
            throw new Error('"case" expects an even number of arguments');
          let r;
          const n = wt(t[1], e),
            i = [],
            a = {};
          let s;
          for (let n = 2; n < t.length - 1; n += 2) {
            let o = t[n];
            Array.isArray(o) || (o = [o]);
            for (const t of o) {
              const e = typeof t;
              if ('string' !== e && 'number' !== e)
                throw new Error(
                  '"match" requires string or number literal as labels',
                );
              if (s) {
                if (e !== s)
                  throw new Error(
                    '"match" requires labels to have the same type',
                  );
              } else s = e;
              a[t] = i.length;
            }
            const l = wt(t[n + 1], e);
            r || (r = l.type), i.push(l);
          }
          return new tt(r, n, a, i, wt(t[t.length - 1], e));
        }
        evaluate(t, e) {
          const r = this.input.evaluate(t, e);
          return (this.outputs[this.labels[r]] || this.fallback).evaluate(t, e);
        }
      }
      class et {
        constructor(t, e, r, n, i) {
          (this.operator = t),
            (this.type = e),
            (this.interpolation = r),
            (this.input = n),
            (this.stops = i);
        }
        static parse(t, e, r) {
          const n = t[0];
          if (t.length < 5)
            throw new Error(`"${n}" expects at least 4 arguments`);
          const i = t[1];
          if (!Array.isArray(i) || 0 === i.length)
            throw new Error(`"${i}" is not a valid interpolation`);
          switch (i[0]) {
            case 'linear':
              if (1 !== i.length)
                throw new Error('Linear interpolation cannot have parameters');
              break;
            case 'exponential':
              if (2 !== i.length || 'number' != typeof i[1])
                throw new Error(
                  'Exponential interpolation requires one numeric argument',
                );
              break;
            case 'cubic-bezier':
              if (5 !== i.length)
                throw new Error(
                  'Cubic bezier interpolation requires four numeric arguments with values between 0 and 1',
                );
              for (let t = 1; t < 5; t++) {
                const e = i[t];
                if ('number' != typeof e || e < 0 || e > 1)
                  throw new Error(
                    'Cubic bezier interpolation requires four numeric arguments with values between 0 and 1',
                  );
              }
              break;
            default:
              throw new Error(`"${t[0]}" unknown interpolation type "${i[0]}"`);
          }
          if (t.length % 2 != 1)
            throw new Error(`"${n}" expects an even number of arguments`);
          const a = wt(t[2], e, x);
          let s;
          'interpolate-hcl' === n || 'interpolate-lab' === n
            ? (s = O)
            : r && 'value' !== r.kind && (s = r);
          const o = [];
          for (let r = 3; r < t.length; r += 2) {
            const i = t[r];
            if ('number' != typeof i)
              throw new Error(`"${n}" requires stop inputs as literal numbers`);
            if (o.length && o[o.length - 1][0] >= i)
              throw new Error(`"${n}" requires strictly ascending stop inputs`);
            const a = wt(t[r + 1], e, s);
            s || (s = a.type), o.push([i, a]);
          }
          if (
            s &&
            s !== O &&
            s !== x &&
            ('array' !== s.kind || s.itemType !== x)
          )
            throw new Error(`"${n}" cannot interpolate type ${k(s)}`);
          return new et(n, s, i, a, o);
        }
        evaluate(t, e) {
          const r = this.stops;
          if (1 === r.length) return r[0][1].evaluate(t, e);
          const n = this.input.evaluate(t, e);
          if (n <= r[0][0]) return r[0][1].evaluate(t, e);
          if (n >= r[r.length - 1][0]) return r[r.length - 1][1].evaluate(t, e);
          let i = 0;
          for (; ++i < r.length && !(n < r[i][0]); );
          const a = r[i - 1][0],
            s = r[i][0],
            o = et.interpolationRatio(this.interpolation, n, a, s),
            l = r[i - 1][1].evaluate(t, e),
            u = r[i][1].evaluate(t, e);
          if ('interpolate' === this.operator) {
            if (
              'array' === this.type.kind &&
              Array.isArray(l) &&
              Array.isArray(u)
            )
              return l.map((t, e) => (0, D.sX)(t, u[e], o));
            if (
              'color' === this.type.kind &&
              l instanceof v.Z &&
              u instanceof v.Z
            ) {
              const t = new v.Z(l),
                e = new v.Z(u);
              return new v.Z([
                (0, D.sX)(t.r, e.r, o),
                (0, D.sX)(t.g, e.g, o),
                (0, D.sX)(t.b, e.b, o),
                (0, D.sX)(t.a, e.a, o),
              ]);
            }
            if (
              'number' === this.type.kind &&
              'number' == typeof l &&
              'number' == typeof u
            )
              return (0, D.sX)(l, u, o);
            throw new Error(
              `"${this.operator}" cannot interpolate type ${k(this.type)}`,
            );
          }
          if ('interpolate-hcl' === this.operator) {
            const t = (0, w.sJ)(l),
              e = (0, w.sJ)(u),
              r = e.h - t.h,
              n = (0, w.xr)({
                h:
                  t.h +
                  o * (r > 180 || r < -180 ? r - 360 * Math.round(r / 360) : r),
                c: (0, D.sX)(t.c, e.c, o),
                l: (0, D.sX)(t.l, e.l, o),
              });
            return new v.Z({ a: (0, D.sX)(l.a, u.a, o), ...n });
          }
          if ('interpolate-lab' === this.operator) {
            const t = (0, w.Y3)(l),
              e = (0, w.Y3)(u),
              r = (0, w.xr)({
                l: (0, D.sX)(t.l, e.l, o),
                a: (0, D.sX)(t.a, e.a, o),
                b: (0, D.sX)(t.b, e.b, o),
              });
            return new v.Z({ a: (0, D.sX)(l.a, u.a, o), ...r });
          }
          throw new Error(`Unexpected operator "${this.operator}"`);
        }
        interpolationUniformValue(t, e) {
          const r = this.stops;
          if (1 === r.length) return 0;
          if (t >= r[r.length - 1][0]) return 0;
          let n = 0;
          for (; ++n < r.length && !(t < r[n][0]); );
          const i = r[n - 1][0],
            a = r[n][0];
          return et.interpolationRatio(this.interpolation, e, i, a);
        }
        getInterpolationRange(t) {
          const e = this.stops;
          if (1 === e.length) {
            const t = e[0][0];
            return [t, t];
          }
          const r = e[e.length - 1][0];
          if (t >= r) return [r, r];
          let n = 0;
          for (; ++n < e.length && !(t < e[n][0]); );
          return [e[n - 1][0], e[n][0]];
        }
        static interpolationRatio(t, e, r, n) {
          let i = 0;
          return (
            'linear' === t[0]
              ? (i = et._exponentialInterpolationRatio(e, 1, r, n))
              : 'exponential' === t[0]
              ? (i = et._exponentialInterpolationRatio(e, t[1], r, n))
              : 'cubic-bezier' === t[0] &&
                (i = R(
                  t[1],
                  t[2],
                  t[3],
                  t[4],
                )(et._exponentialInterpolationRatio(e, 1, r, n), 1e-5)),
            i < 0 ? (i = 0) : i > 1 && (i = 1),
            i
          );
        }
        static _exponentialInterpolationRatio(t, e, r, n) {
          const i = n - r;
          if (0 === i) return 0;
          const a = t - r;
          return 1 === e ? a / i : (e ** a - 1) / (e ** i - 1);
        }
      }
      class rt {
        constructor(t, e, r) {
          (this.type = t), (this.input = e), (this.stops = r);
        }
        static parse(t, e) {
          if (t.length < 5)
            throw new Error('"step" expects at least 4 arguments');
          if (t.length % 2 != 1)
            throw new Error('"step" expects an even number of arguments');
          const r = wt(t[1], e, x);
          let n;
          const i = [];
          i.push([-1 / 0, wt(t[2], e)]);
          for (let r = 3; r < t.length; r += 2) {
            const a = t[r];
            if ('number' != typeof a)
              throw new Error('"step" requires stop inputs as literal numbers');
            if (i.length && i[i.length - 1][0] >= a)
              throw new Error('"step" requires strictly ascending stop inputs');
            const s = wt(t[r + 1], e);
            n || (n = s.type), i.push([a, s]);
          }
          return new rt(n, r, i);
        }
        evaluate(t, e) {
          const r = this.stops;
          if (1 === r.length) return r[0][1].evaluate(t, e);
          const n = this.input.evaluate(t, e);
          let i = 0;
          for (; ++i < r.length && !(n < r[i][0]); );
          return this.stops[i - 1][1].evaluate(t, e);
        }
      }
      class nt {
        constructor(t, e) {
          (this.type = t), (this.output = e);
        }
        static parse(t, e, r) {
          if (t.length < 4)
            throw new Error('"let" expects at least 3 arguments');
          if (t.length % 2 == 1)
            throw new Error('"let" expects an odd number of arguments');
          const n = new z(e);
          for (let r = 1; r < t.length - 1; r += 2) {
            const i = t[r];
            if ('string' != typeof i)
              throw new Error(
                `"let" requires a string to define variable names - found ${i}`,
              );
            n.add(i, wt(t[r + 1], e));
          }
          const i = wt(t[t.length - 1], n, r);
          return new nt(i.type, i);
        }
        evaluate(t, e) {
          return this.output.evaluate(t, e);
        }
      }
      class it {
        constructor(t, e) {
          (this.type = t), (this.output = e);
        }
        static parse(t, e, r) {
          if (2 !== t.length || 'string' != typeof t[1])
            throw new Error('"var" requires just one literal string argument');
          const n = e.get(t[1]);
          if (!n)
            throw new Error(
              `${t[1]} must be defined before being used in a "var" expression`,
            );
          return new it(r || U, n);
        }
        evaluate(t, e) {
          return this.output.evaluate(t, e);
        }
      }
      class at {
        constructor(t, e, r) {
          (this.type = t), (this.index = e), (this.array = r);
        }
        static parse(t, e) {
          if (3 !== t.length) throw new Error('"at" expects 2 arguments');
          const r = wt(t[1], e, x),
            n = wt(t[2], e);
          return new at(n.type.itemType, r, n);
        }
        evaluate(t, e) {
          const r = this.index.evaluate(t, e),
            n = this.array.evaluate(t, e);
          if (r < 0 || r >= n.length)
            throw new Error('"at" index out of bounds');
          if (r !== Math.floor(r))
            throw new Error('"at" index must be an integer');
          return n[r];
        }
      }
      class st {
        constructor(t, e) {
          (this.key = t), (this.obj = e), (this.type = U);
        }
        static parse(t, e) {
          let r, n;
          switch (t.length) {
            case 2:
              return (r = wt(t[1], e)), new st(r);
            case 3:
              return (r = wt(t[1], e)), (n = wt(t[2], e)), new st(r, n);
            default:
              throw new Error('"get" expects 1 or 2 arguments');
          }
        }
        evaluate(t, e) {
          const r = this.key.evaluate(t, e);
          return this.obj
            ? this.obj.evaluate(t, e)[r]
            : null == t
            ? void 0
            : t.values[r];
        }
      }
      class ot {
        constructor(t, e) {
          (this.key = t), (this.obj = e), (this.type = P);
        }
        static parse(t, e) {
          let r, n;
          switch (t.length) {
            case 2:
              return (r = wt(t[1], e)), new ot(r);
            case 3:
              return (r = wt(t[1], e)), (n = wt(t[2], e)), new ot(r, n);
            default:
              throw new Error('"has" expects 1 or 2 arguments');
          }
        }
        evaluate(t, e) {
          const r = this.key.evaluate(t, e);
          return this.obj
            ? r in this.obj.evaluate(t, e)
            : !(null == t || !t.values[r]);
        }
      }
      class lt {
        constructor(t, e) {
          (this.key = t), (this.vals = e), (this.type = P);
        }
        static parse(t, e) {
          if (3 !== t.length) throw new Error('"in" expects 2 arguments');
          return new lt(wt(t[1], e), wt(t[2], e));
        }
        evaluate(t, e) {
          const r = this.key.evaluate(t, e);
          return -1 !== this.vals.evaluate(t, e).indexOf(r);
        }
      }
      class ut {
        constructor(t, e, r) {
          (this.item = t), (this.array = e), (this.from = r), (this.type = x);
        }
        static parse(t, e) {
          if (t.length < 3 || t.length > 4)
            throw new Error('"index-of" expects 3 or 4 arguments');
          const r = wt(t[1], e),
            n = wt(t[2], e);
          if (4 === t.length) {
            const i = wt(t[3], e, x);
            return new ut(r, n, i);
          }
          return new ut(r, n);
        }
        evaluate(t, e) {
          const r = this.item.evaluate(t, e),
            n = this.array.evaluate(t, e);
          if (this.from) {
            const i = this.from.evaluate(t, e);
            if (i !== Math.floor(i))
              throw new Error('"index-of" index must be an integer');
            return n.indexOf(r, i);
          }
          return n.indexOf(r);
        }
      }
      class ct {
        constructor(t) {
          (this.arg = t), (this.type = x);
        }
        static parse(t, e) {
          if (2 !== t.length) throw new Error('"length" expects 2 arguments');
          const r = wt(t[1], e);
          return new ct(r);
        }
        evaluate(t, e) {
          const r = this.arg.evaluate(t, e);
          if ('string' == typeof r) return r.length;
          if (Array.isArray(r)) return r.length;
          throw new Error('"length" expects string or array');
        }
      }
      class ht {
        constructor(t, e, r, n) {
          (this.type = t), (this.array = e), (this.from = r), (this.to = n);
        }
        static parse(t, e) {
          if (t.length < 3 || t.length > 4)
            throw new Error('"slice" expects 2 or 3 arguments');
          const r = wt(t[1], e),
            n = wt(t[2], e, x);
          if (n.type !== x)
            throw new Error('"slice" index must return a number');
          if (4 === t.length) {
            const i = wt(t[3], e, x);
            if (i.type !== x)
              throw new Error('"slice" index must return a number');
            return new ht(r.type, r, n, i);
          }
          return new ht(r.type, r, n);
        }
        evaluate(t, e) {
          const r = this.array.evaluate(t, e);
          if (!Array.isArray(r) && 'string' != typeof r)
            throw new Error('"slice" input must be an array or a string');
          const n = this.from.evaluate(t, e);
          if (n < 0 || n >= r.length)
            throw new Error('"slice" index out of bounds');
          if (n !== Math.floor(n))
            throw new Error('"slice" index must be an integer');
          if (this.to) {
            const i = this.to.evaluate(t, e);
            if (i < 0 || i >= r.length)
              throw new Error('"slice" index out of bounds');
            if (i !== Math.floor(i))
              throw new Error('"slice" index must be an integer');
            return r.slice(n, i);
          }
          return r.slice(n);
        }
      }
      class pt {
        constructor() {
          this.type = P;
        }
        static parse(t) {
          if (1 !== t.length) throw new Error('"has-id" expects no arguments');
          return new pt();
        }
        evaluate(t, e) {
          return t && void 0 !== t.id;
        }
      }
      class yt {
        constructor(t, e) {
          (this.args = t), (this.calculate = e), (this.type = x);
        }
        static parse(t, e, r) {
          const n = t.slice(1).map((t) => wt(t, e));
          return new yt(n, r);
        }
        evaluate(t, e) {
          let r;
          return (
            this.args && (r = this.args.map((r) => r.evaluate(t, e))),
            this.calculate(r)
          );
        }
      }
      class ft {
        constructor(t, e) {
          (this.args = t), (this.calculate = e), (this.type = x);
        }
        static parse(t, e) {
          const r = t.slice(1).map((t) => wt(t, e));
          return new ft(r, ft.ops[t[0]]);
        }
        evaluate(t, e) {
          let r;
          return (
            this.args && (r = this.args.map((r) => r.evaluate(t, e))),
            this.calculate(r)
          );
        }
      }
      ft.ops = {
        abs: (t) => Math.abs(t[0]),
        acos: (t) => Math.acos(t[0]),
        asin: (t) => Math.asin(t[0]),
        atan: (t) => Math.atan(t[0]),
        ceil: (t) => Math.ceil(t[0]),
        cos: (t) => Math.cos(t[0]),
        e: () => Math.E,
        floor: (t) => Math.floor(t[0]),
        ln: (t) => Math.log(t[0]),
        ln2: () => Math.LN2,
        log10: (t) => Math.log(t[0]) / Math.LN10,
        log2: (t) => Math.log(t[0]) / Math.LN2,
        max: (t) => Math.max(...t),
        min: (t) => Math.min(...t),
        pi: () => Math.PI,
        round: (t) => Math.round(t[0]),
        sin: (t) => Math.sin(t[0]),
        sqrt: (t) => Math.sqrt(t[0]),
        tan: (t) => Math.tan(t[0]),
      };
      class gt {
        constructor(t) {
          (this.args = t), (this.type = A);
        }
        static parse(t, e) {
          return new gt(t.slice(1).map((t) => wt(t, e)));
        }
        evaluate(t, e) {
          return this.args.map((r) => r.evaluate(t, e)).join('');
        }
      }
      class mt {
        constructor(t, e) {
          (this.arg = t), (this.calculate = e), (this.type = A);
        }
        static parse(t, e) {
          if (2 !== t.length) throw new Error(`${t[0]} expects 1 argument`);
          const r = wt(t[1], e);
          return new mt(r, mt.ops[t[0]]);
        }
        evaluate(t, e) {
          return this.calculate(this.arg.evaluate(t, e));
        }
      }
      mt.ops = {
        downcase: (t) => t.toLowerCase(),
        upcase: (t) => t.toUpperCase(),
      };
      class dt {
        constructor(t) {
          (this.args = t), (this.type = O);
        }
        static parse(t, e) {
          if (4 !== t.length) throw new Error('"rgb" expects 3 arguments');
          const r = t.slice(1).map((t) => wt(t, e));
          return new dt(r);
        }
        evaluate(t, e) {
          const r = this._validate(this.args[0].evaluate(t, e)),
            n = this._validate(this.args[1].evaluate(t, e)),
            i = this._validate(this.args[2].evaluate(t, e));
          return new v.Z({ r, g: n, b: i });
        }
        _validate(t) {
          if ('number' != typeof t || t < 0 || t > 255)
            throw new Error(`${t}: invalid color component`);
          return Math.round(t);
        }
      }
      class _t {
        constructor(t) {
          (this.args = t), (this.type = O);
        }
        static parse(t, e) {
          if (5 !== t.length) throw new Error('"rgba" expects 4 arguments');
          const r = t.slice(1).map((t) => wt(t, e));
          return new _t(r);
        }
        evaluate(t, e) {
          const r = this._validate(this.args[0].evaluate(t, e)),
            n = this._validate(this.args[1].evaluate(t, e)),
            i = this._validate(this.args[2].evaluate(t, e)),
            a = this._validateAlpha(this.args[3].evaluate(t, e));
          return new v.Z({ r, g: n, b: i, a });
        }
        _validate(t) {
          if ('number' != typeof t || t < 0 || t > 255)
            throw new Error(`${t}: invalid color component`);
          return Math.round(t);
        }
        _validateAlpha(t) {
          if ('number' != typeof t || t < 0 || t > 1)
            throw new Error(`${t}: invalid alpha color component`);
          return t;
        }
      }
      class Et {
        constructor(t) {
          (this.color = t), (this.type = G(x, 4));
        }
        static parse(t, e) {
          if (2 !== t.length) throw new Error('"to-rgba" expects 1 argument');
          const r = wt(t[1], e);
          return new Et(r);
        }
        evaluate(t, e) {
          return new v.Z(this.color.evaluate(t, e)).toRgba();
        }
      }
      class bt {
        constructor(t, e) {
          (this.type = t), (this.args = e);
        }
        static parse(t, e) {
          const r = t[0];
          if (t.length < 2)
            throw new Error(`${r} expects at least one argument`);
          let n,
            i = 1;
          if ('array' === r) {
            if (t.length > 2) {
              switch (t[1]) {
                case 'string':
                  n = A;
                  break;
                case 'number':
                  n = x;
                  break;
                case 'boolean':
                  n = P;
                  break;
                default:
                  throw new Error(
                    '"array" type argument must be string, number or boolean',
                  );
              }
              i++;
            } else n = U;
            let e;
            if (t.length > 3) {
              if (
                ((e = t[2]),
                null !== e &&
                  ('number' != typeof e || e < 0 || e !== Math.floor(e)))
              )
                throw new Error(
                  '"array" length argument must be a positive integer literal',
                );
              i++;
            }
            n = G(n, e);
          } else
            switch (r) {
              case 'string':
                n = A;
                break;
              case 'number':
                n = x;
                break;
              case 'boolean':
                n = P;
                break;
              case 'object':
                n = S;
            }
          const a = [];
          for (; i < t.length; i++) {
            const r = wt(t[i], e);
            a.push(r);
          }
          return new bt(n, a);
        }
        evaluate(t, e) {
          let r;
          for (const n of this.args) {
            const i = n.evaluate(t, e);
            if (((r = M(i)), C(r, this.type))) return i;
          }
          throw new Error(`Expected ${k(this.type)} but got ${k(r)}`);
        }
      }
      class Tt {
        constructor(t, e) {
          (this.type = t), (this.args = e);
        }
        static parse(t, e) {
          const r = t[0],
            n = Tt.types[r];
          if (n === P || n === A) {
            if (2 !== t.length) throw new Error(`${r} expects one argument`);
          } else if (t.length < 2)
            throw new Error(`${r} expects at least one argument`);
          const i = [];
          for (let r = 1; r < t.length; r++) {
            const n = wt(t[r], e);
            i.push(n);
          }
          return new Tt(n, i);
        }
        evaluate(t, e) {
          if (this.type === P) return Boolean(this.args[0].evaluate(t, e));
          if (this.type === A) return V(this.args[0].evaluate(t, e));
          if (this.type === x) {
            for (const r of this.args) {
              const n = Number(r.evaluate(t, e));
              if (!isNaN(n)) return n;
            }
            return null;
          }
          if (this.type === O) {
            for (const r of this.args)
              try {
                const n = Tt.toColor(r.evaluate(t, e));
                if (n instanceof v.Z) return n;
              } catch {}
            return null;
          }
        }
        static toBoolean(t) {
          return Boolean(t);
        }
        static toString(t) {
          return V(t);
        }
        static toNumber(t) {
          const e = Number(t);
          if (isNaN(e)) throw new Error(`"${t}" is not a number`);
          return e;
        }
        static toColor(t) {
          if (t instanceof v.Z) return t;
          if ('string' == typeof t) {
            const e = v.Z.fromString(t);
            if (e) return e;
            throw new Error(`"${t}" is not a color`);
          }
          if (Array.isArray(t)) return v.Z.fromArray(t);
          throw new Error(`"${t}" is not a color`);
        }
      }
      Tt.types = {
        'to-boolean': P,
        'to-color': O,
        'to-number': x,
        'to-string': A,
      };
      class It {
        constructor(t) {
          (this.val = t), (this.type = M(t));
        }
        static parse(t) {
          if (2 !== t.length) throw new Error('"literal" expects 1 argument');
          return new It(t[1]);
        }
        evaluate(t, e) {
          return this.val;
        }
      }
      class vt {
        constructor(t) {
          (this.arg = t), (this.type = A);
        }
        static parse(t, e) {
          if (2 !== t.length) throw new Error('"typeof" expects 1 argument');
          return new vt(wt(t[1], e));
        }
        evaluate(t, e) {
          return k(M(this.arg.evaluate(t, e)));
        }
      }
      function wt(t, e, r) {
        const n = typeof t;
        if ('string' === n || 'boolean' === n || 'number' === n || null === t) {
          if (r)
            switch (r.kind) {
              case 'string':
                'string' !== n && (t = Tt.toString(t));
                break;
              case 'number':
                'number' !== n && (t = Tt.toNumber(t));
                break;
              case 'color':
                t = Tt.toColor(t);
            }
          t = ['literal', t];
        }
        if (!Array.isArray(t) || 0 === t.length)
          throw new Error('Expression must be a non empty array');
        const i = t[0];
        if ('string' != typeof i)
          throw new Error('First element of expression must be a string');
        const a = Rt[i];
        if (void 0 === a) throw new Error(`Invalid expression operator "${i}"`);
        if (!a) throw new Error(`Unimplemented expression operator "${i}"`);
        return a.parse(t, e, r);
      }
      const Rt = {
        array: bt,
        boolean: bt,
        collator: null,
        format: null,
        image: null,
        literal: It,
        number: bt,
        'number-format': null,
        object: bt,
        string: bt,
        'to-boolean': Tt,
        'to-color': Tt,
        'to-number': Tt,
        'to-string': Tt,
        typeof: vt,
        accumulated: null,
        'feature-state': null,
        'geometry-type': Y,
        id: $,
        'line-progress': null,
        properties: X,
        at,
        get: st,
        has: ot,
        in: lt,
        'index-of': ut,
        length: ct,
        slice: ht,
        '!': K,
        '!=': class extends Z {
          static parse(t, e) {
            return Z.parse(t, e, (t, e) => t !== e);
          }
        },
        '<': class extends Z {
          static parse(t, e) {
            return Z.parse(t, e, (t, e) => t < e);
          }
        },
        '<=': class extends Z {
          static parse(t, e) {
            return Z.parse(t, e, (t, e) => t <= e);
          }
        },
        '==': class extends Z {
          static parse(t, e) {
            return Z.parse(t, e, (t, e) => t === e);
          }
        },
        '>': class extends Z {
          static parse(t, e) {
            return Z.parse(t, e, (t, e) => t > e);
          }
        },
        '>=': class extends Z {
          static parse(t, e) {
            return Z.parse(t, e, (t, e) => t >= e);
          }
        },
        all: j,
        any: q,
        case: J,
        coalesce: Q,
        match: tt,
        within: null,
        interpolate: et,
        'interpolate-hcl': et,
        'interpolate-lab': et,
        step: rt,
        let: nt,
        var: it,
        concat: gt,
        downcase: mt,
        'is-supported-script': null,
        'resolved-locale': null,
        upcase: mt,
        rgb: dt,
        rgba: _t,
        'to-rgba': Et,
        '-': class extends yt {
          static parse(t, e) {
            switch (t.length) {
              case 2:
                return yt.parse(t, e, (t) => -t[0]);
              case 3:
                return yt.parse(t, e, (t) => t[0] - t[1]);
              default:
                throw new Error('"-" expects 1 or 2 arguments');
            }
          }
        },
        '*': class extends yt {
          static parse(t, e) {
            return yt.parse(t, e, (t) => {
              let e = 1;
              for (const r of t) e *= r;
              return e;
            });
          }
        },
        '/': class extends yt {
          static parse(t, e) {
            if (3 === t.length) return yt.parse(t, e, (t) => t[0] / t[1]);
            throw new Error('"/" expects 2 arguments');
          }
        },
        '%': class extends yt {
          static parse(t, e) {
            if (3 === t.length) return yt.parse(t, e, (t) => t[0] % t[1]);
            throw new Error('"%" expects 2 arguments');
          }
        },
        '^': class extends yt {
          static parse(t, e) {
            if (3 === t.length) return yt.parse(t, e, (t) => t[0] ** t[1]);
            throw new Error('"^" expects 1 or 2 arguments');
          }
        },
        '+': class extends yt {
          static parse(t, e) {
            return yt.parse(t, e, (t) => {
              let e = 0;
              for (const r of t) e += r;
              return e;
            });
          }
        },
        abs: ft,
        acos: ft,
        asin: ft,
        atan: ft,
        ceil: ft,
        cos: ft,
        e: ft,
        floor: ft,
        ln: ft,
        ln2: ft,
        log10: ft,
        log2: ft,
        max: ft,
        min: ft,
        pi: ft,
        round: ft,
        sin: ft,
        sqrt: ft,
        tan: ft,
        zoom: H,
        'heatmap-density': null,
        'has-id': pt,
        none: W,
      };
      class Nt {
        constructor(t) {
          this._expression = t;
        }
        filter(t, e) {
          if (!this._expression) return !0;
          try {
            return this._expression.evaluate(t, e);
          } catch (t) {
            return console.log(t.message), !0;
          }
        }
        static createFilter(t) {
          if (!t) return null;
          this.isLegacyFilter(t) && (t = this.convertLegacyFilter(t));
          try {
            const e = wt(t, null, P);
            return new Nt(e);
          } catch (t) {
            return console.log(t.message), null;
          }
        }
        static isLegacyFilter(t) {
          if (!Array.isArray(t)) return !0;
          if (0 === t.length) return !0;
          switch (t[0]) {
            case '==':
            case '!=':
            case '>':
            case '<':
            case '>=':
            case '<=':
              return (
                3 === t.length &&
                'string' == typeof t[1] &&
                !Array.isArray(t[2])
              );
            case 'in':
              return (
                t.length >= 3 && 'string' == typeof t[1] && !Array.isArray(t[2])
              );
            case '!in':
            case 'none':
            case '!has':
              return !0;
            case 'any':
            case 'all':
              for (let e = 1; e < t.length; e++)
                if (!this.isLegacyFilter(t[1])) return !1;
              return !0;
            case 'has':
              return 2 === t.length && ('$id' === t[1] || '$type' === t[1]);
            default:
              return !1;
          }
        }
        static convertLegacyFilter(t) {
          if (!Array.isArray(t) || 0 === t.length) return !0;
          const e = t[0];
          if (1 === t.length) return 'any' !== e;
          switch (e) {
            case '==':
              return Nt.convertComparison('==', t[1], t[2]);
            case '!=':
              return Nt.negate(Nt.convertComparison('==', t[1], t[2]));
            case '>':
            case '<':
            case '>=':
            case '<=':
              return Nt.convertComparison(e, t[1], t[2]);
            case 'in':
              return Nt.convertIn(t[1], t.slice(2));
            case '!in':
              return Nt.negate(Nt.convertIn(t[1], t.slice(2)));
            case 'any':
            case 'all':
            case 'none':
              return Nt.convertCombining(e, t.slice(1));
            case 'has':
              return Nt.convertHas(t[1]);
            case '!has':
              return Nt.negate(Nt.convertHas(t[1]));
            default:
              throw new Error('Unexpected legacy filter.');
          }
        }
        static convertComparison(t, e, r) {
          switch (e) {
            case '$type':
              return [t, ['geometry-type'], r];
            case '$id':
              return [t, ['id'], r];
            default:
              return [t, ['get', e], r];
          }
        }
        static convertIn(t, e) {
          switch (t) {
            case '$type':
              return ['in', ['geometry-type'], ['literal', e]];
            case '$id':
              return ['in', ['id'], ['literal', e]];
            default:
              return ['in', ['get', t], ['literal', e]];
          }
        }
        static convertHas(t) {
          switch (t) {
            case '$type':
              return !0;
            case '$id':
              return ['has-id'];
            default:
              return ['has', t];
          }
        }
        static convertCombining(t, e) {
          return [t].concat(e.map(this.convertLegacyFilter));
        }
        static negate(t) {
          return ['!', t];
        }
      }
      var Dt = r(21315);
      class Lt {
        constructor(t, e) {
          let r;
          switch (
            ((this.isDataDriven = !1), (this.interpolator = null), t.type)
          ) {
            case 'number':
            case 'color':
              r = !0;
              break;
            case 'array':
              r = 'number' === t.value;
              break;
            default:
              r = !1;
          }
          if (
            (null == e && (e = t.default),
            Array.isArray(e) && e.length > 0 && Rt[e[0]])
          ) {
            const r = { number: x, color: O, string: A, boolean: P, enum: A };
            try {
              const n = wt(
                e,
                null,
                'array' === t.type ? G(r[t.value] || U, t.length) : r[t.type],
              );
              (this.getValue = this._buildExpression(n, t)),
                (this.isDataDriven = !0),
                n instanceof et &&
                  n.input instanceof H &&
                  (this.interpolator = n);
            } catch (e) {
              console.log(e.message),
                (this.getValue = this._buildSimple(t.default));
            }
            return;
          }
          r && 'interval' === e.type && (r = !1);
          const n = e && e.stops && e.stops.length > 0;
          if (n) for (const r of e.stops) r[1] = this._validate(r[1], t);
          if (((this.isDataDriven = !!e && !!e.property), this.isDataDriven))
            if (
              (void 0 !== e.default &&
                (e.default = this._validate(e.default, t)),
              n)
            )
              switch (e.type) {
                case 'identity':
                  this.getValue = this._buildIdentity(e, t);
                  break;
                case 'categorical':
                  this.getValue = this._buildCategorical(e, t);
                  break;
                default:
                  this.getValue = r
                    ? this._buildInterpolate(e, t)
                    : this._buildInterval(e, t);
              }
            else this.getValue = this._buildIdentity(e, t);
          else
            n
              ? (this.getValue = r
                  ? this._buildZoomInterpolate(e)
                  : this._buildZoomInterval(e))
              : ((e = this._validate(e, t)),
                (this.getValue = this._buildSimple(e)));
        }
        _validate(t, e) {
          if ('number' === e.type) {
            if (t < e.minimum) return e.minimum;
            if (t > e.maximum) return e.maximum;
          } else
            'color' === e.type
              ? (t = Lt._parseColor(t))
              : 'enum' === e.type
              ? 'string' == typeof t && (t = e.values.indexOf(t))
              : 'array' === e.type && 'enum' === e.value
              ? (t = t.map((t) =>
                  'string' == typeof t ? e.values.indexOf(t) : t,
                ))
              : 'string' === e.type && (t = V(t));
          return t;
        }
        _buildSimple(t) {
          return () => t;
        }
        _buildExpression(t, e) {
          return (r, n) => {
            try {
              const i = t.evaluate(n, r);
              return void 0 === i ? e.default : this._validate(i, e);
            } catch (t) {
              return console.log(t.message), e.default;
            }
          };
        }
        _buildIdentity(t, e) {
          return (r, n) => {
            let i;
            return (
              n && (i = n.values[t.property]),
              void 0 !== i && (i = this._validate(i, e)),
              null != i ? i : void 0 !== t.default ? t.default : e.default
            );
          };
        }
        _buildCategorical(t, e) {
          return (r, n) => {
            let i;
            return (
              n && (i = n.values[t.property]),
              (i = this._categorical(i, t.stops)),
              void 0 !== i ? i : void 0 !== t.default ? t.default : e.default
            );
          };
        }
        _buildInterval(t, e) {
          return (r, n) => {
            let i;
            return (
              n && (i = n.values[t.property]),
              'number' == typeof i
                ? this._interval(i, t.stops)
                : void 0 !== t.default
                ? t.default
                : e.default
            );
          };
        }
        _buildInterpolate(t, e) {
          return (r, n) => {
            let i;
            return (
              n && (i = n.values[t.property]),
              'number' == typeof i
                ? this._interpolate(i, t.stops, t.base || 1)
                : void 0 !== t.default
                ? t.default
                : e.default
            );
          };
        }
        _buildZoomInterpolate(t) {
          return (e) => this._interpolate(e, t.stops, t.base || 1);
        }
        _buildZoomInterval(t) {
          return (e) => this._interval(e, t.stops);
        }
        _categorical(t, e) {
          const r = e.length;
          for (let n = 0; n < r; n++) if (e[n][0] === t) return e[n][1];
        }
        _interval(t, e) {
          const r = e.length;
          let n = 0;
          for (let i = 0; i < r && e[i][0] <= t; i++) n = i;
          return e[n][1];
        }
        _interpolate(t, e, r) {
          let n, i;
          const a = e.length;
          for (let r = 0; r < a; r++) {
            const a = e[r];
            if (!(a[0] <= t)) {
              i = a;
              break;
            }
            n = a;
          }
          if (n && i) {
            const e = i[0] - n[0],
              a = t - n[0],
              s = 1 === r ? a / e : (r ** a - 1) / (r ** e - 1);
            if (Array.isArray(n[1])) {
              const t = n[1],
                e = i[1],
                r = [];
              for (let n = 0; n < t.length; n++)
                r.push((0, D.sX)(t[n], e[n], s));
              return r;
            }
            return (0, D.sX)(n[1], i[1], s);
          }
          return n ? n[1] : i ? i[1] : void 0;
        }
        static _isEmpty(t) {
          for (const e in t) if (t.hasOwnProperty(e)) return !1;
          return !0;
        }
        static _parseColor(t) {
          return Array.isArray(t)
            ? t
            : ('string' == typeof t && (t = new v.Z(t)),
              t instanceof v.Z && !this._isEmpty(t)
                ? v.Z.toUnitRGBA(t)
                : void 0);
        }
      }
      var xt = r(16534);
      class At {
        constructor(t, e, r, n) {
          switch (
            ((this.type = t),
            (this.typeName = e.type),
            (this.id = e.id),
            (this.source = e.source),
            (this.sourceLayer = e['source-layer']),
            (this.minzoom = e.minzoom),
            (this.maxzoom = e.maxzoom),
            (this.filter = e.filter),
            (this.layout = e.layout),
            (this.paint = e.paint),
            (this.z = r),
            (this.uid = n),
            t)
          ) {
            case Dt.fR.BACKGROUND:
              (this._layoutDefinition = Dt.f2.backgroundLayoutDefinition),
                (this._paintDefinition = Dt.f2.backgroundPaintDefinition);
              break;
            case Dt.fR.FILL:
              (this._layoutDefinition = Dt.f2.fillLayoutDefinition),
                (this._paintDefinition = Dt.f2.fillPaintDefinition);
              break;
            case Dt.fR.LINE:
              (this._layoutDefinition = Dt.f2.lineLayoutDefinition),
                (this._paintDefinition = Dt.f2.linePaintDefinition);
              break;
            case Dt.fR.SYMBOL:
              (this._layoutDefinition = Dt.f2.symbolLayoutDefinition),
                (this._paintDefinition = Dt.f2.symbolPaintDefinition);
              break;
            case Dt.fR.CIRCLE:
              (this._layoutDefinition = Dt.f2.circleLayoutDefinition),
                (this._paintDefinition = Dt.f2.circlePaintDefinition);
          }
          (this._layoutProperties = this._parseLayout(this.layout)),
            (this._paintProperties = this._parsePaint(this.paint));
        }
        getFeatureFilter() {
          return void 0 !== this._featureFilter
            ? this._featureFilter
            : (this._featureFilter = Nt.createFilter(this.filter));
        }
        getLayoutProperty(t) {
          return this._layoutProperties[t];
        }
        getPaintProperty(t) {
          return this._paintProperties[t];
        }
        getLayoutValue(t, e, r) {
          let n;
          const i = this._layoutProperties[t];
          return (
            i && (n = i.getValue(e, r)),
            void 0 === n && (n = this._layoutDefinition[t].default),
            n
          );
        }
        getPaintValue(t, e, r) {
          let n;
          const i = this._paintProperties[t];
          return (
            i && (n = i.getValue(e, r)),
            void 0 === n && (n = this._paintDefinition[t].default),
            n
          );
        }
        isPainterDataDriven() {
          const t = this._paintProperties;
          if (t) for (const e in t) if (t[e].isDataDriven) return !0;
          return !1;
        }
        _parseLayout(t) {
          const e = {};
          for (const r in t) {
            const n = this._layoutDefinition[r];
            n && (e[r] = new Lt(n, t[r]));
          }
          return e;
        }
        _parsePaint(t) {
          const e = {};
          for (const r in t) {
            const n = this._paintDefinition[r];
            n && (e[r] = new Lt(n, t[r]));
          }
          return e;
        }
        computeAttributesKey(t, e, r, n) {
          let i = 0,
            a = 0;
          for (const t of e) {
            let e = 3;
            if (!t || t !== n) {
              const n = r[t],
                { isLayout: i, isOptional: a } = n,
                s = i ? this.getLayoutProperty(t) : this.getPaintProperty(t);
              e =
                null != s && s.interpolator
                  ? 2
                  : null != s && s.isDataDriven
                  ? 1
                  : a && !s
                  ? 3
                  : 0;
            }
            (a |= e << i), (i += 2);
          }
          return (a << 3) | t;
        }
      }
      class Pt extends At {
        constructor(t, e, r, n) {
          super(t, e, r, n),
            (this.backgroundMaterial = new f(
              this.computeAttributesKey(
                s._K.BACKGROUND,
                f.ATTRIBUTES,
                f.ATTRIBUTES_INFO,
              ),
            ));
        }
      }
      class Ot extends At {
        constructor(t, e, r, n) {
          super(t, e, r, n);
          const i = this.getPaintProperty('fill-color'),
            a = this.getPaintProperty('fill-opacity'),
            o = this.getPaintProperty('fill-pattern');
          (this.hasDataDrivenColor = null == i ? void 0 : i.isDataDriven),
            (this.hasDataDrivenOpacity = null == a ? void 0 : a.isDataDriven),
            (this.hasDataDrivenFill =
              this.hasDataDrivenColor ||
              this.hasDataDrivenOpacity ||
              (null == o ? void 0 : o.isDataDriven));
          const l = this.getPaintProperty('fill-outline-color');
          (this.outlineUsesFillColor = !l),
            (this.hasDataDrivenOutlineColor =
              null == l ? void 0 : l.isDataDriven),
            (this.hasDataDrivenOutline = l
              ? l.isDataDriven
              : !!i && i.isDataDriven),
            (this.hasDataDrivenOutline =
              (l ? this.hasDataDrivenOutlineColor : this.hasDataDrivenColor) ||
              this.hasDataDrivenOpacity),
            (this.fillMaterial = new m(
              this.computeAttributesKey(
                s._K.FILL,
                m.ATTRIBUTES,
                m.ATTRIBUTES_INFO,
              ),
            )),
            (this.outlineMaterial = new d(
              this.computeAttributesKey(
                s._K.OUTLINE,
                this.outlineUsesFillColor
                  ? d.ATTRIBUTES_FILL
                  : d.ATTRIBUTES_OUTLINE,
                this.outlineUsesFillColor
                  ? d.ATTRIBUTES_INFO_FILL
                  : d.ATTRIBUTES_INFO_OUTLINE,
              ),
              this.outlineUsesFillColor,
            ));
        }
      }
      class St extends At {
        constructor(t, e, r, n) {
          var i, a, o, l, u, c, h, p, y;
          super(t, e, r, n);
          const f = this.getPaintProperty('line-pattern');
          if (
            ((this.lineMaterial = new _(
              this.computeAttributesKey(
                s._K.LINE,
                _.ATTRIBUTES,
                _.ATTRIBUTES_INFO,
                f ? 'line-dasharray' : '',
              ),
            )),
            (this.hasDataDrivenLine =
              (null == (i = this.getPaintProperty('line-blur'))
                ? void 0
                : i.isDataDriven) ||
              (null == (a = this.getPaintProperty('line-color'))
                ? void 0
                : a.isDataDriven) ||
              (null == (o = this.getPaintProperty('line-gap-width'))
                ? void 0
                : o.isDataDriven) ||
              (null == (l = this.getPaintProperty('line-offset'))
                ? void 0
                : l.isDataDriven) ||
              (null == (u = this.getPaintProperty('line-opacity'))
                ? void 0
                : u.isDataDriven) ||
              (null == (c = this.getPaintProperty('line-pattern'))
                ? void 0
                : c.isDataDriven) ||
              (null == (h = this.getPaintProperty('line-dasharray'))
                ? void 0
                : h.isDataDriven) ||
              (null == (p = this.getLayoutProperty('line-cap'))
                ? void 0
                : p.isDataDriven) ||
              (null == (y = this.getPaintProperty('line-width'))
                ? void 0
                : y.isDataDriven)),
            (this.canUseThinTessellation = !1),
            !this.hasDataDrivenLine)
          ) {
            const t = this.getPaintProperty('line-width');
            if (!t || ('number' == typeof t && 0.5 * t < xt.tQ)) {
              const t = this.getPaintProperty('line-offset');
              (!t || ('number' == typeof t && 0 === t)) &&
                (this.canUseThinTessellation = !0);
            }
          }
        }
        getDashKey(t, e) {
          let r;
          switch (e) {
            case a.RL.BUTT:
              r = 'Butt';
              break;
            case a.RL.ROUND:
              r = 'Round';
              break;
            case a.RL.SQUARE:
              r = 'Square';
              break;
            default:
              r = 'Butt';
          }
          return `dasharray-[${t.toString()}]-${r}`;
        }
      }
      class Ut extends At {
        constructor(t, e, r, n) {
          var i, a, o, l, u, c, h, p, y, f, g, m;
          super(t, e, r, n),
            (this.iconMaterial = new T(
              this.computeAttributesKey(
                s._K.ICON,
                T.ATTRIBUTES,
                T.ATTRIBUTES_INFO,
              ),
            )),
            (this.textMaterial = new I(
              this.computeAttributesKey(
                s._K.TEXT,
                I.ATTRIBUTES,
                I.ATTRIBUTES_INFO,
              ),
            )),
            (this.hasDataDrivenIcon =
              (null == (i = this.getPaintProperty('icon-color'))
                ? void 0
                : i.isDataDriven) ||
              (null == (a = this.getPaintProperty('icon-halo-blur'))
                ? void 0
                : a.isDataDriven) ||
              (null == (o = this.getPaintProperty('icon-halo-color'))
                ? void 0
                : o.isDataDriven) ||
              (null == (l = this.getPaintProperty('icon-halo-width'))
                ? void 0
                : l.isDataDriven) ||
              (null == (u = this.getPaintProperty('icon-opacity'))
                ? void 0
                : u.isDataDriven) ||
              (null == (c = this.getLayoutProperty('icon-size'))
                ? void 0
                : c.isDataDriven)),
            (this.hasDataDrivenText =
              (null == (h = this.getPaintProperty('text-color'))
                ? void 0
                : h.isDataDriven) ||
              (null == (p = this.getPaintProperty('text-halo-blur'))
                ? void 0
                : p.isDataDriven) ||
              (null == (y = this.getPaintProperty('text-halo-color'))
                ? void 0
                : y.isDataDriven) ||
              (null == (f = this.getPaintProperty('text-halo-width'))
                ? void 0
                : f.isDataDriven) ||
              (null == (g = this.getPaintProperty('text-opacity'))
                ? void 0
                : g.isDataDriven) ||
              (null == (m = this.getLayoutProperty('text-size'))
                ? void 0
                : m.isDataDriven));
        }
      }
      class Gt extends At {
        constructor(t, e, r, n) {
          super(t, e, r, n),
            (this.circleMaterial = new g(
              this.computeAttributesKey(
                s._K.CIRCLE,
                g.ATTRIBUTES,
                g.ATTRIBUTES_INFO,
              ),
            ));
        }
      }
      class Bt {
        constructor(t, e, r) {
          var n, i, a, s, o;
          let l;
          (this.allowOverlap = t.getLayoutValue('icon-allow-overlap', e)),
            (this.ignorePlacement = t.getLayoutValue(
              'icon-ignore-placement',
              e,
            )),
            (this.keepUpright = t.getLayoutValue('icon-keep-upright', e)),
            (this.optional = t.getLayoutValue('icon-optional', e)),
            (this.rotationAlignment = t.getLayoutValue(
              'icon-rotation-alignment',
              e,
            )),
            this.rotationAlignment === Dt.aF.AUTO &&
              (this.rotationAlignment = r ? Dt.aF.MAP : Dt.aF.VIEWPORT),
            (l = t.getLayoutProperty('icon-anchor')),
            null != (n = l) && n.isDataDriven
              ? (this._anchorProp = l)
              : (this.anchor = t.getLayoutValue('icon-anchor', e)),
            (l = t.getLayoutProperty('icon-offset')),
            null != (i = l) && i.isDataDriven
              ? (this._offsetProp = l)
              : (this.offset = t.getLayoutValue('icon-offset', e)),
            (l = t.getLayoutProperty('icon-padding')),
            null != (a = l) && a.isDataDriven
              ? (this._paddingProp = l)
              : (this.padding = t.getLayoutValue('icon-padding', e)),
            (l = t.getLayoutProperty('icon-rotate')),
            null != (s = l) && s.isDataDriven
              ? (this._rotateProp = l)
              : (this.rotate = t.getLayoutValue('icon-rotate', e)),
            (l = t.getLayoutProperty('icon-size')),
            null != (o = l) && o.isDataDriven
              ? (this._sizeProp = l)
              : (this.size = t.getLayoutValue('icon-size', e));
        }
        update(t, e) {
          this._anchorProp && (this.anchor = this._anchorProp.getValue(t, e)),
            this._offsetProp && (this.offset = this._offsetProp.getValue(t, e)),
            this._paddingProp &&
              (this.padding = this._paddingProp.getValue(t, e)),
            this._rotateProp && (this.rotate = this._rotateProp.getValue(t, e)),
            this._sizeProp && (this.size = this._sizeProp.getValue(t, e));
        }
      }
      class kt {
        constructor(t, e, r) {
          var n, i, a, s, o, l, u, c, h, p, y;
          let f;
          (this.allowOverlap = t.getLayoutValue('text-allow-overlap', e)),
            (this.ignorePlacement = t.getLayoutValue(
              'text-ignore-placement',
              e,
            )),
            (this.keepUpright = t.getLayoutValue('text-keep-upright', e)),
            (this.optional = t.getLayoutValue('text-optional', e)),
            (this.rotationAlignment = t.getLayoutValue(
              'text-rotation-alignment',
              e,
            )),
            this.rotationAlignment === Dt.aF.AUTO &&
              (this.rotationAlignment = r ? Dt.aF.MAP : Dt.aF.VIEWPORT),
            (f = t.getLayoutProperty('text-anchor')),
            null != (n = f) && n.isDataDriven
              ? (this._anchorProp = f)
              : (this.anchor = t.getLayoutValue('text-anchor', e)),
            (f = t.getLayoutProperty('text-justify')),
            null != (i = f) && i.isDataDriven
              ? (this._justifyProp = f)
              : (this.justify = t.getLayoutValue('text-justify', e)),
            (f = t.getLayoutProperty('text-letter-spacing')),
            null != (a = f) && a.isDataDriven
              ? (this._letterSpacingProp = f)
              : (this.letterSpacing = t.getLayoutValue(
                  'text-letter-spacing',
                  e,
                )),
            (f = t.getLayoutProperty('text-line-height')),
            null != (s = f) && s.isDataDriven
              ? (this._lineHeightProp = f)
              : (this.lineHeight = t.getLayoutValue('text-line-height', e)),
            (f = t.getLayoutProperty('text-max-angle')),
            null != (o = f) && o.isDataDriven
              ? (this._maxAngleProp = f)
              : (this.maxAngle = t.getLayoutValue('text-max-angle', e)),
            (f = t.getLayoutProperty('text-max-width')),
            null != (l = f) && l.isDataDriven
              ? (this._maxWidthProp = f)
              : (this.maxWidth = t.getLayoutValue('text-max-width', e)),
            (f = t.getLayoutProperty('text-offset')),
            null != (u = f) && u.isDataDriven
              ? (this._offsetProp = f)
              : (this.offset = t.getLayoutValue('text-offset', e)),
            (f = t.getLayoutProperty('text-padding')),
            null != (c = f) && c.isDataDriven
              ? (this._paddingProp = f)
              : (this.padding = t.getLayoutValue('text-padding', e)),
            (f = t.getLayoutProperty('text-rotate')),
            null != (h = f) && h.isDataDriven
              ? (this._rotateProp = f)
              : (this.rotate = t.getLayoutValue('text-rotate', e)),
            (f = t.getLayoutProperty('text-size')),
            null != (p = f) && p.isDataDriven
              ? (this._sizeProp = f)
              : (this.size = t.getLayoutValue('text-size', e)),
            (f = t.getLayoutProperty('text-writing-mode')),
            null != (y = f) && y.isDataDriven
              ? (this._writingModeProp = f)
              : (this.writingMode = t.getLayoutValue('text-writing-mode', e));
        }
        update(t, e) {
          this._anchorProp && (this.anchor = this._anchorProp.getValue(t, e)),
            this._justifyProp &&
              (this.justify = this._justifyProp.getValue(t, e)),
            this._letterSpacingProp &&
              (this.letterSpacing = this._letterSpacingProp.getValue(t, e)),
            this._lineHeightProp &&
              (this.lineHeight = this._lineHeightProp.getValue(t, e)),
            this._maxAngleProp &&
              (this.maxAngle = this._maxAngleProp.getValue(t, e)),
            this._maxWidthProp &&
              (this.maxWidth = this._maxWidthProp.getValue(t, e)),
            this._offsetProp && (this.offset = this._offsetProp.getValue(t, e)),
            this._paddingProp &&
              (this.padding = this._paddingProp.getValue(t, e)),
            this._rotateProp && (this.rotate = this._rotateProp.getValue(t, e)),
            this._sizeProp && (this.size = this._sizeProp.getValue(t, e)),
            this._writingModeProp &&
              (this.writingMode = this._writingModeProp.getValue(t, e));
        }
      }
    },
    51785: (t, e, r) => {
      r.d(e, { Z: () => a });
      var n = r(21315),
        i = r(7333);
      class a {
        constructor(t) {
          if (
            ((this._style = t),
            (this.backgroundBucketIds = []),
            (this._uidToLayer = new Map()),
            (this._layerByName = {}),
            (this._runningId = 0),
            t.layers || (t.layers = []),
            (this.version = parseFloat(t.version)),
            (this.layers = t.layers.map((t, e, r) => this._create(t, e, r))),
            this.layers)
          ) {
            let t;
            for (let e = 0; e < this.layers.length; e++)
              (t = this.layers[e]),
                (this._layerByName[t.id] = t),
                this._uidToLayer.set(t.uid, t),
                t.type === n.fR.BACKGROUND &&
                  this.backgroundBucketIds.push(t.id);
          }
          this._identifyRefLayers();
        }
        isPainterDataDriven(t) {
          const e = this._layerByName[t];
          return !!e && e.isPainterDataDriven();
        }
        getStyleLayerId(t) {
          return t >= this.layers.length ? null : this.layers[t].id;
        }
        getStyleLayerByUID(t) {
          const e = this._uidToLayer.get(t);
          return null != e ? e : null;
        }
        getStyleLayerIndex(t) {
          const e = this._layerByName[t];
          return e ? this.layers.indexOf(e) : -1;
        }
        setStyleLayer(t, e) {
          if (!t || !t.id) return;
          const r = this._style;
          null != e && e >= this.layers.length && (e = this.layers.length - 1);
          let n,
            i = !0;
          const s = this._layerByName[t.id];
          if (s) {
            const o = this.layers.indexOf(s);
            e || (e = o),
              e === o
                ? ((i = !1),
                  (n = a._recreateLayer(t, s)),
                  (this.layers[e] = n),
                  (r.layers[e] = t))
                : (this.layers.splice(o, 1),
                  r.layers.splice(o, 1),
                  (n = this._create(t, e, this.layers)),
                  this.layers.splice(e, 0, n),
                  r.layers.splice(e, 0, t));
          } else
            (n = this._create(t, e, this.layers)),
              !e || e >= this.layers.length
                ? (this.layers.push(n), r.layers.push(t))
                : (this.layers.splice(e, 0, n), r.layers.splice(e, 0, t));
          (this._layerByName[t.id] = n),
            this._uidToLayer.set(n.uid, n),
            i && this._recomputeZValues(),
            this._identifyRefLayers();
        }
        getStyleLayer(t) {
          const e = this._layerByName[t];
          return e
            ? {
                type: e.typeName,
                id: e.id,
                source: e.source,
                'source-layer': e.sourceLayer,
                minzoom: e.minzoom,
                maxzoom: e.maxzoom,
                filter: e.filter,
                layout: e.layout,
                paint: e.paint,
              }
            : null;
        }
        deleteStyleLayer(t) {
          const e = this._layerByName[t];
          if (e) {
            delete this._layerByName[t], this._uidToLayer.delete(e.uid);
            const r = this.layers.indexOf(e);
            this.layers.splice(r, 1),
              this._style.layers.splice(r, 1),
              this._recomputeZValues(),
              this._identifyRefLayers();
          }
        }
        getLayerById(t) {
          return this._layerByName[t];
        }
        getLayoutProperties(t) {
          const e = this._layerByName[t];
          return e ? e.layout : null;
        }
        getPaintProperties(t) {
          const e = this._layerByName[t];
          return e ? e.paint : null;
        }
        setPaintProperties(t, e) {
          const r = this._layerByName[t];
          if (!r) return;
          const n = {
              type: r.typeName,
              id: r.id,
              source: r.source,
              'source-layer': r.sourceLayer,
              minzoom: r.minzoom,
              maxzoom: r.maxzoom,
              filter: r.filter,
              layout: r.layout,
              paint: e,
            },
            i = a._recreateLayer(n, r),
            s = this.layers.indexOf(r);
          (this.layers[s] = i),
            (this._style.layers[s].paint = e),
            (this._layerByName[r.id] = i),
            this._uidToLayer.set(r.uid, i);
        }
        setLayoutProperties(t, e) {
          const r = this._layerByName[t];
          if (!r) return;
          const n = {
              type: r.typeName,
              id: r.id,
              source: r.source,
              'source-layer': r.sourceLayer,
              minzoom: r.minzoom,
              maxzoom: r.maxzoom,
              filter: r.filter,
              layout: e,
              paint: r.paint,
            },
            i = a._recreateLayer(n, r),
            s = this.layers.indexOf(r);
          (this.layers[s] = i),
            (this._style.layers[s].layout = e),
            (this._layerByName[r.id] = i),
            this._uidToLayer.set(r.uid, i);
        }
        setStyleLayerVisibility(t, e) {
          const r = this._layerByName[t];
          if (!r) return;
          const n = r.layout || {};
          n.visibility = e;
          const i = {
              type: r.typeName,
              id: r.id,
              source: r.source,
              'source-layer': r.sourceLayer,
              minzoom: r.minzoom,
              maxzoom: r.maxzoom,
              filter: r.filter,
              layout: n,
              paint: r.paint,
            },
            s = a._recreateLayer(i, r),
            o = this.layers.indexOf(r);
          (this.layers[o] = s),
            (this._style.layers[o].layout = n),
            (this._layerByName[r.id] = s),
            this._uidToLayer.set(r.uid, s);
        }
        getStyleLayerVisibility(t) {
          var e;
          const r = this._layerByName[t];
          if (!r) return 'none';
          const n = r.layout;
          return null != (e = null == n ? void 0 : n.visibility)
            ? e
            : 'visible';
        }
        _recomputeZValues() {
          const t = this.layers,
            e = 1 / (t.length + 1);
          for (let r = 0; r < t.length; r++) t[r].z = 1 - (1 + r) * e;
        }
        _identifyRefLayers() {
          const t = [],
            e = [];
          let r = 0;
          for (const s of this.layers) {
            const o = s.layout;
            if (s.type === n.fR.FILL) {
              var i;
              const e = s;
              let n = s.source + '|' + s.sourceLayer;
              (n +=
                null != (i = '|' + (null == o ? void 0 : o.visibility))
                  ? i
                  : ''),
                (n += '|' + s.minzoom),
                (n += '|' + s.maxzoom),
                (n += '|' + JSON.stringify(s.filter)),
                (e.hasDataDrivenFill || e.hasDataDrivenOutline) &&
                  (n += '|' + r),
                t.push({ key: n, layer: s });
            } else if (s.type === n.fR.LINE) {
              var a;
              const t = s;
              let n = s.source + '|' + s.sourceLayer;
              (n +=
                null != (a = '|' + (null == o ? void 0 : o.visibility))
                  ? a
                  : ''),
                (n += '|' + s.minzoom),
                (n += '|' + s.maxzoom),
                (n += '|' + JSON.stringify(s.filter)),
                (n += '|' + (void 0 !== o ? o['line-cap'] : '')),
                (n += '|' + (void 0 !== o ? o['line-join'] : '')),
                t.hasDataDrivenLine && (n += '|' + r),
                e.push({ key: n, layer: s });
            }
            ++r;
          }
          this._assignRefLayers(t), this._assignRefLayers(e);
        }
        _assignRefLayers(t) {
          let e, r;
          t.sort((t, e) => (t.key < e.key ? -1 : t.key > e.key ? 1 : 0));
          const i = t.length;
          for (let a = 0; a < i; a++) {
            const s = t[a];
            if (s.key === e) s.layer.refLayerId = r;
            else if (
              ((e = s.key), (r = s.layer.id), s.layer.type === n.fR.FILL)
            ) {
              if (!s.layer.getPaintProperty('fill-outline-color'))
                for (let n = a + 1; n < i; n++) {
                  const i = t[n];
                  if (i.key !== e) break;
                  if (i.layer.getPaintProperty('fill-outline-color')) {
                    (t[a] = i), (t[n] = s), (r = i.layer.id);
                    break;
                  }
                }
            } else if (s.layer.type === n.fR.LINE) {
              let n = s.layer;
              for (let o = a + 1; o < i; o++) {
                const i = t[o];
                if (i.key !== e) break;
                const l = i.layer;
                ((n.canUseThinTessellation && !l.canUseThinTessellation) ||
                  (!n.canUseThinTessellation &&
                    (l.getPaintProperty('line-pattern') ||
                      l.getPaintProperty('line-dasharray')))) &&
                  ((n = l), (t[a] = i), (t[o] = s), (r = i.layer.id));
              }
            }
          }
        }
        _create(t, e, r) {
          const a = 1 - (1 + e) * (1 / (r.length + 1)),
            s = this._runningId++;
          switch (t.type) {
            case 'background':
              return new i.Et(n.fR.BACKGROUND, t, a, s);
            case 'fill':
              return new i.Le(n.fR.FILL, t, a, s);
            case 'line':
              return new i.gf(n.fR.LINE, t, a, s);
            case 'symbol':
              return new i.jG(n.fR.SYMBOL, t, a, s);
            case 'raster':
              throw new Error('Unsupported vector tile raster layer');
            case 'circle':
              return new i.sj(n.fR.CIRCLE, t, a, s);
          }
          throw new Error('Unknown vector tile layer');
        }
        static _recreateLayer(t, e) {
          switch (t.type) {
            case 'background':
              return new i.Et(n.fR.BACKGROUND, t, e.z, e.uid);
            case 'fill':
              return new i.Le(n.fR.FILL, t, e.z, e.uid);
            case 'line':
              return new i.gf(n.fR.LINE, t, e.z, e.uid);
            case 'symbol':
              return new i.jG(n.fR.SYMBOL, t, e.z, e.uid);
            case 'raster':
              throw new Error('Unsupported vector tile raster layer');
            case 'circle':
              return new i.sj(n.fR.CIRCLE, t, e.z, e.uid);
          }
        }
      }
    },
    35362: (t, e, r) => {
      r.d(e, { V: () => i, E: () => n });
      class n {
        constructor(t, e) {
          (this.x = t), (this.y = e);
        }
        clone() {
          return new n(this.x, this.y);
        }
        equals(t, e) {
          return t === this.x && e === this.y;
        }
        isEqual(t) {
          return t.x === this.x && t.y === this.y;
        }
        setCoords(t, e) {
          (this.x = t), (this.y = e);
        }
        normalize() {
          const t = this.x,
            e = this.y,
            r = Math.sqrt(t * t + e * e);
          (this.x /= r), (this.y /= r);
        }
        rightPerpendicular() {
          const t = this.x;
          (this.x = this.y), (this.y = -t);
        }
        move(t, e) {
          (this.x += t), (this.y += e);
        }
        assign(t) {
          (this.x = t.x), (this.y = t.y);
        }
        assignAdd(t, e) {
          (this.x = t.x + e.x), (this.y = t.y + e.y);
        }
        assignSub(t, e) {
          (this.x = t.x - e.x), (this.y = t.y - e.y);
        }
        rotate(t, e) {
          const r = this.x,
            n = this.y;
          (this.x = r * t - n * e), (this.y = r * e + n * t);
        }
        scale(t) {
          (this.x *= t), (this.y *= t);
        }
        length() {
          const t = this.x,
            e = this.y;
          return Math.sqrt(t * t + e * e);
        }
        static distance(t, e) {
          const r = e.x - t.x,
            n = e.y - t.y;
          return Math.sqrt(r * r + n * n);
        }
        static add(t, e) {
          return new n(t.x + e.x, t.y + e.y);
        }
        static sub(t, e) {
          return new n(t.x - e.x, t.y - e.y);
        }
      }
      var i;
      !(function (t) {
        (t[(t.Unknown = 0)] = 'Unknown'),
          (t[(t.Point = 1)] = 'Point'),
          (t[(t.LineString = 2)] = 'LineString'),
          (t[(t.Polygon = 3)] = 'Polygon');
      })(i || (i = {}));
    },
    21968: (t, e, r) => {
      r.d(e, { G: () => n });
      class n {
        constructor(t, e, r, n, i, a = !1, s = 0) {
          (this.name = t),
            (this.count = e),
            (this.type = r),
            (this.offset = n),
            (this.stride = i),
            (this.normalized = a),
            (this.divisor = s);
        }
      }
    },
  },
]);
