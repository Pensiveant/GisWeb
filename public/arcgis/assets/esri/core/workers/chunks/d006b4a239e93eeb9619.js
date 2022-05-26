'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [2304],
  {
    4307: (t, e, s) => {
      s.d(e, { b: () => h, s: () => r, t: () => f });
      var i = s(46851);
      function r(t, e, s) {
        return (t[0] = e), (t[1] = s), t;
      }
      function n(t, e, s) {
        return (t[0] = e[0] - s[0]), (t[1] = e[1] - s[1]), t;
      }
      function o(t, e, s) {
        return (t[0] = e[0] * s[0]), (t[1] = e[1] * s[1]), t;
      }
      function a(t, e, s) {
        return (t[0] = e[0] / s[0]), (t[1] = e[1] / s[1]), t;
      }
      function h(t, e) {
        const s = e[0] - t[0],
          i = e[1] - t[1];
        return Math.sqrt(s * s + i * i);
      }
      function l(t, e) {
        const s = e[0] - t[0],
          i = e[1] - t[1];
        return s * s + i * i;
      }
      function c(t) {
        const e = t[0],
          s = t[1];
        return Math.sqrt(e * e + s * s);
      }
      function u(t) {
        const e = t[0],
          s = t[1];
        return e * e + s * s;
      }
      function f(t, e, s) {
        const i = e[0],
          r = e[1];
        return (
          (t[0] = s[0] * i + s[2] * r + s[4]),
          (t[1] = s[1] * i + s[3] * r + s[5]),
          t
        );
      }
      const _ = c,
        d = n,
        m = o,
        p = a,
        g = h,
        y = l,
        x = u;
      Object.freeze({
        __proto__: null,
        copy: function (t, e) {
          return (t[0] = e[0]), (t[1] = e[1]), t;
        },
        set: r,
        add: function (t, e, s) {
          return (t[0] = e[0] + s[0]), (t[1] = e[1] + s[1]), t;
        },
        subtract: n,
        multiply: o,
        divide: a,
        ceil: function (t, e) {
          return (t[0] = Math.ceil(e[0])), (t[1] = Math.ceil(e[1])), t;
        },
        floor: function (t, e) {
          return (t[0] = Math.floor(e[0])), (t[1] = Math.floor(e[1])), t;
        },
        min: function (t, e, s) {
          return (
            (t[0] = Math.min(e[0], s[0])), (t[1] = Math.min(e[1], s[1])), t
          );
        },
        max: function (t, e, s) {
          return (
            (t[0] = Math.max(e[0], s[0])), (t[1] = Math.max(e[1], s[1])), t
          );
        },
        round: function (t, e) {
          return (t[0] = Math.round(e[0])), (t[1] = Math.round(e[1])), t;
        },
        scale: function (t, e, s) {
          return (t[0] = e[0] * s), (t[1] = e[1] * s), t;
        },
        scaleAndAdd: function (t, e, s, i) {
          return (t[0] = e[0] + s[0] * i), (t[1] = e[1] + s[1] * i), t;
        },
        distance: h,
        squaredDistance: l,
        length: c,
        squaredLength: u,
        negate: function (t, e) {
          return (t[0] = -e[0]), (t[1] = -e[1]), t;
        },
        inverse: function (t, e) {
          return (t[0] = 1 / e[0]), (t[1] = 1 / e[1]), t;
        },
        normalize: function (t, e) {
          const s = e[0],
            i = e[1];
          let r = s * s + i * i;
          return (
            r > 0 &&
              ((r = 1 / Math.sqrt(r)), (t[0] = e[0] * r), (t[1] = e[1] * r)),
            t
          );
        },
        dot: function (t, e) {
          return t[0] * e[0] + t[1] * e[1];
        },
        cross: function (t, e, s) {
          const i = e[0] * s[1] - e[1] * s[0];
          return (t[0] = t[1] = 0), (t[2] = i), t;
        },
        lerp: function (t, e, s, i) {
          const r = e[0],
            n = e[1];
          return (t[0] = r + i * (s[0] - r)), (t[1] = n + i * (s[1] - n)), t;
        },
        random: function (t, e) {
          e = e || 1;
          const s = 2 * (0, i.R)() * Math.PI;
          return (t[0] = Math.cos(s) * e), (t[1] = Math.sin(s) * e), t;
        },
        transformMat2: function (t, e, s) {
          const i = e[0],
            r = e[1];
          return (t[0] = s[0] * i + s[2] * r), (t[1] = s[1] * i + s[3] * r), t;
        },
        transformMat2d: f,
        transformMat3: function (t, e, s) {
          const i = e[0],
            r = e[1];
          return (
            (t[0] = s[0] * i + s[3] * r + s[6]),
            (t[1] = s[1] * i + s[4] * r + s[7]),
            t
          );
        },
        transformMat4: function (t, e, s) {
          const i = e[0],
            r = e[1];
          return (
            (t[0] = s[0] * i + s[4] * r + s[12]),
            (t[1] = s[1] * i + s[5] * r + s[13]),
            t
          );
        },
        rotate: function (t, e, s, i) {
          const r = e[0] - s[0],
            n = e[1] - s[1],
            o = Math.sin(i),
            a = Math.cos(i);
          return (
            (t[0] = r * a - n * o + s[0]), (t[1] = r * o + n * a + s[1]), t
          );
        },
        angle: function (t, e) {
          const s = t[0],
            i = t[1],
            r = e[0],
            n = e[1];
          let o = s * s + i * i;
          o > 0 && (o = 1 / Math.sqrt(o));
          let a = r * r + n * n;
          a > 0 && (a = 1 / Math.sqrt(a));
          const h = (s * r + i * n) * o * a;
          return h > 1 ? 0 : h < -1 ? Math.PI : Math.acos(h);
        },
        str: function (t) {
          return 'vec2(' + t[0] + ', ' + t[1] + ')';
        },
        exactEquals: function (t, e) {
          return t[0] === e[0] && t[1] === e[1];
        },
        equals: function (t, e) {
          const s = t[0],
            r = t[1],
            n = e[0],
            o = e[1];
          return (
            Math.abs(s - n) <= i.E * Math.max(1, Math.abs(s), Math.abs(n)) &&
            Math.abs(r - o) <= i.E * Math.max(1, Math.abs(r), Math.abs(o))
          );
        },
        projectAndScale: function (t, e, s, i, r) {
          let n = e[0] - s[0],
            o = e[1] - s[1];
          const a = (i[0] * n + i[1] * o) * (r - 1);
          return (
            (n = i[0] * a),
            (o = i[1] * a),
            (t[0] = e[0] + n),
            (t[1] = e[1] + o),
            t
          );
        },
        len: _,
        sub: d,
        mul: m,
        div: p,
        dist: g,
        sqrDist: y,
        sqrLen: x,
      });
    },
    32243: (t, e, s) => {
      function i(t) {
        return (
          (t = t || globalThis.location.hostname),
          l.some((e) => {
            var s;
            return null != (null == (s = t) ? void 0 : s.match(e));
          })
        );
      }
      function r(t, e) {
        return t && (e = e || globalThis.location.hostname)
          ? null != e.match(n) || null != e.match(a)
            ? t.replace('static.arcgis.com', 'staticdev.arcgis.com')
            : null != e.match(o) || null != e.match(h)
            ? t.replace('static.arcgis.com', 'staticqa.arcgis.com')
            : t
          : t;
      }
      s.d(e, { pJ: () => r, XO: () => i });
      const n = /^devext.arcgis.com$/,
        o = /^qaext.arcgis.com$/,
        a = /^[\w-]*\.mapsdevext.arcgis.com$/,
        h = /^[\w-]*\.mapsqa.arcgis.com$/,
        l = [
          /^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,
          n,
          o,
          /^jsapps.esri.com$/,
          a,
          h,
        ];
    },
    70171: (t, e, s) => {
      var i, r, n;
      let o;
      s.d(e, { Ze: () => _, Kd: () => l, qe: () => u });
      const a =
        null != (i = null == (r = globalThis.esriConfig) ? void 0 : r.locale)
          ? i
          : null == (n = globalThis.dojoConfig)
          ? void 0
          : n.locale;
      function h() {
        var t, e;
        return null !=
          (t =
            null != a
              ? a
              : null == (e = globalThis.navigator)
              ? void 0
              : e.language)
          ? t
          : 'en';
      }
      function l() {
        return void 0 === o && (o = h()), o;
      }
      const c = [];
      function u(t) {
        return (
          c.push(t),
          {
            remove() {
              c.splice(c.indexOf(t), 1);
            },
          }
        );
      }
      const f = [];
      function _(t) {
        return (
          f.push(t),
          {
            remove() {
              c.splice(f.indexOf(t), 1);
            },
          }
        );
      }
      null == globalThis.addEventListener ||
        globalThis.addEventListener('languagechange', function () {
          const t = null != undefined ? undefined : h();
          o !== t &&
            ((o = t),
            [...f].forEach((e) => {
              e.call(null, t);
            }),
            [...c].forEach((e) => {
              e.call(null, t);
            }));
        });
    },
    31363: (t, e, s) => {
      s.d(e, {
        _U: () => n,
        DT: () => a,
        B1: () => i,
        JJ: () => r,
        sX: () => f,
        k3: () => u,
        DQ: () => l,
        Or: () => c,
      });
      const i = Number.POSITIVE_INFINITY,
        r = Math.PI,
        n = 2 * r,
        o = 128 / r,
        a = r / 180,
        h = 1 / Math.LN2;
      function l(t, e) {
        return (t %= e) >= 0 ? t : t + e;
      }
      function c(t) {
        return l(t * o, 256);
      }
      function u(t) {
        return Math.log(t) * h;
      }
      function f(t, e, s) {
        return t * (1 - s) + e * s;
      }
    },
    35362: (t, e, s) => {
      s.d(e, { V: () => r, E: () => i });
      class i {
        constructor(t, e) {
          (this.x = t), (this.y = e);
        }
        clone() {
          return new i(this.x, this.y);
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
            s = Math.sqrt(t * t + e * e);
          (this.x /= s), (this.y /= s);
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
          const s = this.x,
            i = this.y;
          (this.x = s * t - i * e), (this.y = s * e + i * t);
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
          const s = e.x - t.x,
            i = e.y - t.y;
          return Math.sqrt(s * s + i * i);
        }
        static add(t, e) {
          return new i(t.x + e.x, t.y + e.y);
        }
        static sub(t, e) {
          return new i(t.x - e.x, t.y - e.y);
        }
      }
      var r;
      !(function (t) {
        (t[(t.Unknown = 0)] = 'Unknown'),
          (t[(t.Point = 1)] = 'Point'),
          (t[(t.LineString = 2)] = 'LineString'),
          (t[(t.Polygon = 3)] = 'Polygon');
      })(r || (r = {}));
    },
    30729: (t, e, s) => {
      var i, r;
      function n(t) {
        switch (t) {
          case 'left':
            return i.Left;
          case 'right':
            return i.Right;
          case 'center':
          case 'justify':
            return i.Center;
        }
      }
      function o(t) {
        switch (t) {
          case 'top':
            return r.Top;
          case 'middle':
            return r.Center;
          case 'baseline':
            return r.Baseline;
          case 'bottom':
            return r.Bottom;
        }
      }
      function a(t) {
        switch (t) {
          case 'above-left':
          case 'esriServerPointLabelPlacementAboveLeft':
            return [i.Right, r.Bottom];
          case 'above-center':
          case 'above-along':
          case 'esriServerPointLabelPlacementAboveCenter':
          case 'esriServerLinePlacementAboveAlong':
            return [i.Center, r.Bottom];
          case 'above-right':
          case 'esriServerPointLabelPlacementAboveRight':
            return [i.Left, r.Bottom];
          case 'center-left':
          case 'esriServerPointLabelPlacementCenterLeft':
            return [i.Right, r.Center];
          case 'center-center':
          case 'center-along':
          case 'esriServerPointLabelPlacementCenterCenter':
          case 'esriServerLinePlacementCenterAlong':
          case 'always-horizontal':
          case 'esriServerPolygonPlacementAlwaysHorizontal':
            return [i.Center, r.Center];
          case 'center-right':
          case 'esriServerPointLabelPlacementCenterRight':
            return [i.Left, r.Center];
          case 'below-left':
          case 'esriServerPointLabelPlacementBelowLeft':
            return [i.Right, r.Top];
          case 'below-center':
          case 'below-along':
          case 'esriServerPointLabelPlacementBelowCenter':
          case 'esriServerLinePlacementBelowAlong':
            return [i.Center, r.Top];
          case 'below-right':
          case 'esriServerPointLabelPlacementBelowRight':
            return [i.Left, r.Top];
          default:
            return (
              console.debug(`Found invalid placement type ${t}`),
              [i.Center, r.Center]
            );
        }
      }
      function h(t) {
        switch (t) {
          case i.Right:
            return -1;
          case i.Center:
            return 0;
          case i.Left:
            return 1;
          default:
            return console.debug(`Found invalid horizontal alignment ${t}`), 0;
        }
      }
      function l(t) {
        switch (t) {
          case r.Top:
            return 1;
          case r.Center:
            return 0;
          case r.Bottom:
          case r.Baseline:
            return -1;
          default:
            return console.debug(`Found invalid vertical alignment ${t}`), 0;
        }
      }
      function c(t) {
        switch (t) {
          case 'left':
            return i.Left;
          case 'right':
            return i.Right;
          case 'center':
          case 'justify':
            return i.Center;
        }
      }
      function u(t) {
        switch (t) {
          case 'above-along':
          case 'below-along':
          case 'center-along':
          case 'esriServerLinePlacementAboveAlong':
          case 'esriServerLinePlacementBelowAlong':
          case 'esriServerLinePlacementCenterAlong':
            return !0;
          default:
            return !1;
        }
      }
      s.d(e, {
        TR: () => r,
        qv: () => a,
        Hd: () => c,
        kH: () => n,
        g: () => h,
        b7: () => o,
        tf: () => l,
        NS: () => u,
      }),
        (function (t) {
          (t[(t.Left = -1)] = 'Left'),
            (t[(t.Center = 0)] = 'Center'),
            (t[(t.Right = 1)] = 'Right');
        })(i || (i = {})),
        (function (t) {
          (t[(t.Top = 1)] = 'Top'),
            (t[(t.Center = 0)] = 'Center'),
            (t[(t.Bottom = -1)] = 'Bottom'),
            (t[(t.Baseline = 2)] = 'Baseline');
        })(r || (r = {}));
    },
    63523: (t, e, s) => {
      s.d(e, {
        dk: () => f,
        Gq: () => p,
        a: () => d,
        mE: () => _,
        m2: () => a,
        qr: () => m,
        jj: () => o,
      });
      var i = s(20102),
        r = s(30729),
        n = s(66039);
      function o(t, e) {
        switch (t) {
          case n.LW.FILL:
            return f.from(e);
          case n.LW.LINE:
            return d.from(e);
          case n.LW.MARKER:
            return _.from(e);
          case n.LW.TEXT:
            return m.from(e);
          case n.LW.LABEL:
            return p.from(e);
          default:
            throw new Error(
              `Unable to createMaterialKey for unknown geometryType ${t}`,
            );
        }
      }
      class a {
        constructor(t) {
          (this._data = 0), (this._data = t);
        }
        static load(t) {
          const e = this.shared;
          return (e.data = t), e;
        }
        set data(t) {
          this._data = t;
        }
        get data() {
          return this._data;
        }
        get geometryType() {
          return this.bits(8, 11);
        }
        set geometryType(t) {
          this.setBits(t, 8, 11);
        }
        get mapAligned() {
          return !!this.bit(20);
        }
        set mapAligned(t) {
          this.setBit(20, t);
        }
        get sdf() {
          return !!this.bit(11);
        }
        set sdf(t) {
          this.setBit(11, t);
        }
        get pattern() {
          return !!this.bit(12);
        }
        set pattern(t) {
          this.setBit(12, t);
        }
        get textureBinding() {
          return this.bits(0, 8);
        }
        set textureBinding(t) {
          this.setBits(t, 0, 8);
        }
        get geometryTypeString() {
          switch (this.geometryType) {
            case n.LW.FILL:
              return 'fill';
            case n.LW.MARKER:
              return 'marker';
            case n.LW.LINE:
              return 'line';
            case n.LW.TEXT:
              return 'text';
            case n.LW.LABEL:
              return 'label';
            default:
              throw new i.Z(
                `Unable to handle unknown geometryType: ${this.geometryType}`,
              );
          }
        }
        setBit(t, e) {
          const s = 1 << t;
          e ? (this._data |= s) : (this._data &= ~s);
        }
        bit(t) {
          return (this._data & (1 << t)) >> t;
        }
        setBits(t, e, s) {
          for (let i = e, r = 0; i < s; i++, r++)
            this.setBit(i, 0 != (t & (1 << r)));
        }
        bits(t, e) {
          let s = 0;
          for (let i = t, r = 0; i < e; i++, r++) s |= this.bit(i) << r;
          return s;
        }
        hasVV() {
          return !1;
        }
        setVV(t, e) {}
        getVariation() {
          return {
            mapAligned: this.mapAligned,
            pattern: this.pattern,
            sdf: this.sdf,
          };
        }
        getVariationHash() {
          return this._data & ~(7 & this.textureBinding);
        }
      }
      a.shared = new a(0);
      const h = (t) =>
          class extends t {
            get vvSizeMinMaxValue() {
              return 0 !== this.bit(16);
            }
            set vvSizeMinMaxValue(t) {
              this.setBit(16, t);
            }
            get vvSizeScaleStops() {
              return 0 !== this.bit(17);
            }
            set vvSizeScaleStops(t) {
              this.setBit(17, t);
            }
            get vvSizeFieldStops() {
              return 0 !== this.bit(18);
            }
            set vvSizeFieldStops(t) {
              this.setBit(18, t);
            }
            get vvSizeUnitValue() {
              return 0 !== this.bit(19);
            }
            set vvSizeUnitValue(t) {
              this.setBit(19, t);
            }
            hasVV() {
              return (
                super.hasVV() ||
                this.vvSizeMinMaxValue ||
                this.vvSizeScaleStops ||
                this.vvSizeFieldStops ||
                this.vvSizeUnitValue
              );
            }
            setVV(t, e) {
              super.setVV(t, e);
              const s =
                (function (t, e) {
                  const s =
                      n.X.SIZE_FIELD_STOPS |
                      n.X.SIZE_MINMAX_VALUE |
                      n.X.SIZE_SCALE_STOPS |
                      n.X.SIZE_UNIT_VALUE,
                    i =
                      (t &
                        (n.mf.FIELD_TARGETS_OUTLINE |
                          n.mf.MINMAX_TARGETS_OUTLINE |
                          n.mf.SCALE_TARGETS_OUTLINE |
                          n.mf.UNIT_TARGETS_OUTLINE)) >>>
                      4;
                  return e.isOutline || e.isOutlinedFill ? s & i : s & ~i;
                })(t, e) & t;
              (this.vvSizeMinMaxValue = !!(s & n.X.SIZE_MINMAX_VALUE)),
                (this.vvSizeFieldStops = !!(s & n.X.SIZE_FIELD_STOPS)),
                (this.vvSizeUnitValue = !!(s & n.X.SIZE_UNIT_VALUE)),
                (this.vvSizeScaleStops = !!(s & n.X.SIZE_SCALE_STOPS));
            }
          },
        l = (t) =>
          class extends t {
            get vvRotation() {
              return 0 !== this.bit(15);
            }
            set vvRotation(t) {
              this.setBit(15, t);
            }
            hasVV() {
              return super.hasVV() || this.vvRotation;
            }
            setVV(t, e) {
              super.setVV(t, e),
                (this.vvRotation = !e.isOutline && !!(t & n.X.ROTATION));
            }
          },
        c = (t) =>
          class extends t {
            get vvColor() {
              return 0 !== this.bit(13);
            }
            set vvColor(t) {
              this.setBit(13, t);
            }
            hasVV() {
              return super.hasVV() || this.vvColor;
            }
            setVV(t, e) {
              super.setVV(t, e),
                (this.vvColor = !e.isOutline && !!(t & n.X.COLOR));
            }
          },
        u = (t) =>
          class extends t {
            get vvOpacity() {
              return 0 !== this.bit(14);
            }
            set vvOpacity(t) {
              this.setBit(14, t);
            }
            hasVV() {
              return super.hasVV() || this.vvOpacity;
            }
            setVV(t, e) {
              super.setVV(t, e),
                (this.vvOpacity = !e.isOutline && !!(t & n.X.OPACITY));
            }
          };
      class f extends c(u(h(a))) {
        static load(t) {
          const e = this.shared;
          return (e.data = t), e;
        }
        static from(t) {
          const e = this.load(0);
          return (
            (e.geometryType = n.LW.FILL),
            (e.dotDensity = 'dot-density' === t.stride.fill),
            (e.simple = 'simple' === t.stride.fill),
            (e.outlinedFill = t.isOutlinedFill),
            e.dotDensity || e.setVV(t.vvFlags, t),
            e.data
          );
        }
        getVariation() {
          return {
            ...super.getVariation(),
            dotDensity: this.dotDensity,
            outlinedFill: this.outlinedFill,
            simple: this.simple,
            vvColor: this.vvColor,
            vvOpacity: this.vvOpacity,
            vvSizeFieldStops: this.vvSizeFieldStops,
            vvSizeMinMaxValue: this.vvSizeMinMaxValue,
            vvSizeScaleStops: this.vvSizeScaleStops,
            vvSizeUnitValue: this.vvSizeUnitValue,
          };
        }
        get dotDensity() {
          return !!this.bit(15);
        }
        set dotDensity(t) {
          this.setBit(15, t);
        }
        get simple() {
          return !!this.bit(22);
        }
        set simple(t) {
          this.setBit(22, t);
        }
        get outlinedFill() {
          return !!this.bit(21);
        }
        set outlinedFill(t) {
          this.setBit(21, t);
        }
      }
      f.shared = new f(0);
      class _ extends c(u(l(h(a)))) {
        static load(t) {
          const e = this.shared;
          return (e.data = t), e;
        }
        static from(t) {
          const e = this.load(0);
          return (e.geometryType = n.LW.MARKER), e.setVV(t.vvFlags, t), e.data;
        }
        getVariation() {
          return {
            ...super.getVariation(),
            vvColor: this.vvColor,
            vvRotation: this.vvRotation,
            vvOpacity: this.vvOpacity,
            vvSizeFieldStops: this.vvSizeFieldStops,
            vvSizeMinMaxValue: this.vvSizeMinMaxValue,
            vvSizeScaleStops: this.vvSizeScaleStops,
            vvSizeUnitValue: this.vvSizeUnitValue,
          };
        }
      }
      _.shared = new _(0);
      class d extends c(u(h(a))) {
        static load(t) {
          const e = this.shared;
          return (e.data = t), e;
        }
        static from(t) {
          const e = this.load(0);
          return (e.geometryType = n.LW.LINE), e.setVV(t.vvFlags, t), e.data;
        }
        getVariation() {
          return {
            ...super.getVariation(),
            vvColor: this.vvColor,
            vvOpacity: this.vvOpacity,
            vvSizeFieldStops: this.vvSizeFieldStops,
            vvSizeMinMaxValue: this.vvSizeMinMaxValue,
            vvSizeScaleStops: this.vvSizeScaleStops,
            vvSizeUnitValue: this.vvSizeUnitValue,
          };
        }
      }
      d.shared = new d(0);
      class m extends c(u(l(h(a)))) {
        static load(t) {
          const e = this.shared;
          return (e.data = t), e;
        }
        static from(t) {
          const e = this.load(0);
          return (e.geometryType = n.LW.TEXT), e.setVV(t.vvFlags, t), e.data;
        }
        getVariation() {
          return {
            ...super.getVariation(),
            vvColor: this.vvColor,
            vvOpacity: this.vvOpacity,
            vvRotation: this.vvRotation,
            vvSizeFieldStops: this.vvSizeFieldStops,
            vvSizeMinMaxValue: this.vvSizeMinMaxValue,
            vvSizeScaleStops: this.vvSizeScaleStops,
            vvSizeUnitValue: this.vvSizeUnitValue,
          };
        }
      }
      m.shared = new m(0);
      class p extends h(a) {
        static load(t) {
          const e = this.shared;
          return (e.data = t), e;
        }
        static from(t) {
          const e = this.load(0);
          return (
            (e.geometryType = n.LW.LABEL),
            e.setVV(t.vvFlags, t),
            (e.mapAligned = (0, r.NS)(t.placement)),
            e.data
          );
        }
        getVariation() {
          return {
            ...super.getVariation(),
            vvSizeFieldStops: this.vvSizeFieldStops,
            vvSizeMinMaxValue: this.vvSizeMinMaxValue,
            vvSizeScaleStops: this.vvSizeScaleStops,
            vvSizeUnitValue: this.vvSizeUnitValue,
          };
        }
      }
      p.shared = new p(0);
    },
    47988: (t, e, s) => {
      s.d(e, { Z: () => h });
      var i = s(43697),
        r = s(3920),
        n = s(5600),
        o = (s(67676), s(80442), s(75215), s(52011));
      let a = class extends r.r {
        initialize() {}
        destroy() {}
        get supportsTileUpdates() {
          return !1;
        }
        get spatialReference() {
          const t = this.get('tileStore.tileScheme.spatialReference');
          return (t && t.toJSON()) || null;
        }
      };
      (0, i._)(
        [(0, n.Cb)({ readOnly: !0 })],
        a.prototype,
        'supportsTileUpdates',
        null,
      ),
        (0, i._)(
          [(0, n.Cb)({ constructOnly: !0 })],
          a.prototype,
          'remoteClient',
          void 0,
        ),
        (0, i._)(
          [(0, n.Cb)({ constructOnly: !0 })],
          a.prototype,
          'service',
          void 0,
        ),
        (0, i._)([(0, n.Cb)()], a.prototype, 'spatialReference', null),
        (0, i._)(
          [(0, n.Cb)({ constructOnly: !0 })],
          a.prototype,
          'tileInfo',
          void 0,
        ),
        (0, i._)(
          [(0, n.Cb)({ constructOnly: !0 })],
          a.prototype,
          'tileStore',
          void 0,
        ),
        (a = (0, i._)(
          [(0, o.j)('esri.views.2d.layers.features.processors.BaseProcessor')],
          a,
        ));
      const h = a;
    },
    13922: (t, e, s) => {
      s.r(e), s.d(e, { default: () => Fn });
      var i = s(43697);
      const r = new (s(79087).Z)();
      function n(t) {
        if (!r.hasBidiChar(t)) return [t, !1];
        let e;
        return (
          (e = 'rtl' === r.checkContextual(t) ? 'IDNNN' : 'ICNNN'),
          [r.bidiTransform(t, e, 'VLYSN'), !0]
        );
      }
      var o = s(20102),
        a = s(80442),
        h = s(92604),
        l = s(70586),
        c = s(95330),
        u = (s(75215), s(67676), s(37697), s(52011)),
        f = s(22862),
        _ = s(82971),
        d = s(61027),
        m = s(15923),
        p = s(5600),
        g = s(4307),
        y = s(34084);
      const x = new Set(),
        v = [],
        M = new Map(),
        b = [0, 0];
      let S = class extends m.Z {
        constructor(t) {
          super(t),
            (this._keyToItem = new Map()),
            (this.concurrency = 6),
            (this.strategy = 'scale-first'),
            (this.tileInfoView = null);
        }
        initialize() {
          const { concurrency: t, process: e } = this;
          this._queue = new y.e({
            concurrency: t,
            process: (t, s) => {
              const i = this._keyToItem.get(t);
              return e(i, { signal: s });
            },
            peeker: (t) => t.values().next().value,
          });
        }
        destroy() {
          this.clear(), this._queue.destroy(), (this._queue = null);
        }
        get length() {
          return this._queue ? this._queue.length : 0;
        }
        get onGoingCount() {
          return this._keyToItem.size;
        }
        get updating() {
          return this.length > 0 || this.onGoingCount > 0;
        }
        abort(t) {
          const e = 'string' == typeof t ? t : t.id;
          this._queue.abort(e);
        }
        clear() {
          this._queue.clear(),
            this._keyToItem.clear(),
            this.notifyChange('updating');
        }
        has(t) {
          return 'string' == typeof t
            ? this._keyToItem.has(t)
            : this._keyToItem.has(t.id);
        }
        isOngoing(t) {
          const e = 'string' == typeof t ? t : t.id;
          return this.has(e) && this._queue.isOngoing(e);
        }
        pause() {
          this._queue.pause();
        }
        push(t, e) {
          const s = t.key.id + '-' + e;
          if (this.has(s)) return this.get(s);
          const i = this._queue.push(s),
            r = () => {
              this._keyToItem.delete(s), this.notifyChange('updating');
            };
          return (
            this._keyToItem.set(s, t),
            i.then(r, r),
            this.notifyChange('updating'),
            i
          );
        }
        reset() {
          this._queue.reset(), this.notifyChange('updating');
        }
        resume() {
          this._queue.resume();
        }
        _peekByScaleFirst(t) {
          if (!this.state) return t.values().next().value;
          const e = this.tileInfoView;
          let s = Number.NEGATIVE_INFINITY,
            i = Number.POSITIVE_INFINITY;
          t.forEach((t) => {
            const e = this._keyToItem.get(t),
              r = this.tileInfoView.getTileScale(e.key);
            M.has(r) ||
              (M.set(r, []), (s = Math.max(r, s)), (i = Math.min(r, i))),
              M.get(r).push(e.key),
              x.add(r);
          });
          let r = this.state.scale;
          M.has(r) ||
            ((function (t, e) {
              (t.length = 0), e.forEach((e) => t.push(e));
            })(v, x),
            v.sort((t, e) => t - e),
            (r = v.reduce(
              (t, e) => (Math.abs(e - r) < Math.abs(t - r) ? e : t),
              v[0],
            ))),
            (r = Math.min(r, s)),
            (r = Math.max(r, i));
          const n = M.get(r),
            o = e.getClosestInfoForScale(r),
            a = o.getColumnForX(this.state.center[0]),
            h = o.getRowForY(this.state.center[1]);
          return (
            n.sort((t, e) => {
              const s = o.denormalizeCol(t.col, t.world),
                i = o.denormalizeCol(e.col, e.world);
              return (
                Math.sqrt((a - s) * (a - s) + (h - t.row) * (h - t.row)) -
                Math.sqrt((a - i) * (a - i) + (h - e.row) * (h - e.row))
              );
            }),
            x.clear(),
            M.clear(),
            n[0].id
          );
        }
        _peekByCenterFirst(t) {
          if (!this.state) return t.values().next().value;
          const e = this.tileInfoView,
            s = this.state.center;
          let i = Number.POSITIVE_INFINITY,
            r = null;
          return (
            t.forEach((t) => {
              const n = this._keyToItem.get(t);
              e.getTileCoords(b, n.key);
              const o = (0, g.b)(b, s);
              o < i && ((i = o), (r = n.key));
            }),
            r.id
          );
        }
      };
      (0, i._)(
        [(0, p.Cb)({ constructOnly: !0 })],
        S.prototype,
        'concurrency',
        void 0,
      ),
        (0, i._)(
          [(0, p.Cb)({ constructOnly: !0 })],
          S.prototype,
          'process',
          void 0,
        ),
        (0, i._)([(0, p.Cb)()], S.prototype, 'state', void 0),
        (0, i._)(
          [(0, p.Cb)({ constructOnly: !0 })],
          S.prototype,
          'strategy',
          void 0,
        ),
        (0, i._)(
          [(0, p.Cb)({ constructOnly: !0 })],
          S.prototype,
          'tileInfoView',
          void 0,
        ),
        (0, i._)([(0, p.Cb)({ readOnly: !0 })], S.prototype, 'updating', null),
        (S = (0, i._)([(0, u.j)('esri.views.2d.tiling.PagedTileQueue')], S)),
        s(83068);
      var P = s(55415);
      const w = new Set(),
        C = [],
        L = new Map(),
        I = [0, 0];
      let k = class extends m.Z {
        constructor(t) {
          super(t),
            (this._keyToItem = new Map()),
            (this.concurrency = 6),
            (this.strategy = 'scale-first'),
            (this.tileInfoView = null);
        }
        initialize() {
          const { concurrency: t, process: e, strategy: s } = this;
          this._queue = new y.e({
            concurrency: t,
            process: (t, s) => {
              const i = this._keyToItem.get(t);
              return e(i, { signal: s });
            },
            peeker:
              'scale-first' === s
                ? (t) => this._peekByScaleFirst(t)
                : (t) => this._peekByCenterFirst(t),
          });
        }
        destroy() {
          this.clear(), this._queue.destroy(), (this._queue = null);
        }
        get length() {
          return this._queue ? this._queue.length : 0;
        }
        get onGoingCount() {
          return this._keyToItem.size;
        }
        get updating() {
          return this.length > 0 || this.onGoingCount > 0;
        }
        abort(t) {
          const e = 'string' == typeof t ? t : t.id;
          this._queue.abort(e);
        }
        clear() {
          this._queue.clear(),
            this._keyToItem.clear(),
            this.notifyChange('updating');
        }
        has(t) {
          return 'string' == typeof t
            ? this._keyToItem.has(t)
            : this._keyToItem.has(t.id);
        }
        isOngoing(t) {
          const e = 'string' == typeof t ? t : t.id;
          return this.has(e) && this._queue.isOngoing(e);
        }
        pause() {
          this._queue.pause();
        }
        push(t) {
          const e = t.key.id;
          if (this._queue.has(e)) return this._queue.get(e);
          const s = this._queue.push(e),
            i = () => {
              this._keyToItem.delete(e), this.notifyChange('updating');
            };
          return (
            this._keyToItem.set(e, t),
            s.then(i, i),
            this.notifyChange('updating'),
            s
          );
        }
        reset() {
          this._queue.reset();
        }
        resume() {
          this._queue.resume();
        }
        _peekByScaleFirst(t) {
          if (!this.state) return t.values().next().value;
          const e = this.tileInfoView;
          let s = Number.NEGATIVE_INFINITY,
            i = Number.POSITIVE_INFINITY;
          t.forEach((t) => {
            const e = this._keyToItem.get(t),
              r = this.tileInfoView.getTileScale(e.key);
            L.has(r) ||
              (L.set(r, []), (s = Math.max(r, s)), (i = Math.min(r, i))),
              L.get(r).push(e.key),
              w.add(r);
          });
          let r = this.state.scale;
          L.has(r) ||
            ((function (t, e) {
              (t.length = 0), e.forEach((e) => t.push(e));
            })(C, w),
            C.sort((t, e) => t - e),
            (r = C.reduce(
              (t, e) => (Math.abs(e - r) < Math.abs(t - r) ? e : t),
              C[0],
            ))),
            (r = Math.min(r, s)),
            (r = Math.max(r, i));
          const n = L.get(r),
            o = e.getClosestInfoForScale(r),
            a = o.getColumnForX(this.state.center[0]),
            h = o.getRowForY(this.state.center[1]);
          return (
            n.sort((t, e) => {
              const s = o.denormalizeCol(t.col, t.world),
                i = o.denormalizeCol(e.col, e.world);
              return (
                Math.sqrt((a - s) * (a - s) + (h - t.row) * (h - t.row)) -
                Math.sqrt((a - i) * (a - i) + (h - e.row) * (h - e.row))
              );
            }),
            w.clear(),
            L.clear(),
            n[0].id
          );
        }
        _peekByCenterFirst(t) {
          if (!this.state) return t.values().next().value;
          const e = this.tileInfoView,
            s = this.state.center;
          let i = Number.POSITIVE_INFINITY,
            r = null;
          return (
            t.forEach((t) => {
              const n = this._keyToItem.get(t);
              e.getTileCoords(I, n.key);
              const o = (0, g.b)(I, s);
              o < i && ((i = o), (r = n.key));
            }),
            r.id
          );
        }
      };
      (0, i._)(
        [(0, p.Cb)({ constructOnly: !0 })],
        k.prototype,
        'concurrency',
        void 0,
      ),
        (0, i._)(
          [(0, p.Cb)({ constructOnly: !0 })],
          k.prototype,
          'process',
          void 0,
        ),
        (0, i._)([(0, p.Cb)()], k.prototype, 'state', void 0),
        (0, i._)(
          [(0, p.Cb)({ constructOnly: !0 })],
          k.prototype,
          'strategy',
          void 0,
        ),
        (0, i._)(
          [(0, p.Cb)({ constructOnly: !0 })],
          k.prototype,
          'tileInfoView',
          void 0,
        ),
        (0, i._)([(0, p.Cb)({ readOnly: !0 })], k.prototype, 'updating', null),
        (k = (0, i._)([(0, u.j)('esri.views.2d.tiling.TileQueue')], k));
      var T = s(24470);
      s(67524), new P.Z(0, 0, 0, 0), new Map();
      var z = s(16534),
        E = s(66039),
        F = s(29996);
      const A = new Map();
      A.set(E.LW.MARKER, {
        multiplier: 1,
        indicesPerRecord: 6,
        verticesPerRecord: 4,
      }),
        A.set(E.LW.LINE, {
          multiplier: 1,
          indicesPerRecord: 24,
          verticesPerRecord: 8,
        }),
        A.set(E.LW.FILL, {
          multiplier: 1,
          indicesPerRecord: 10,
          verticesPerRecord: 10,
        }),
        A.set(E.LW.TEXT, {
          multiplier: 8,
          indicesPerRecord: 6,
          verticesPerRecord: 4,
        }),
        A.set(E.LW.LABEL, {
          multiplier: 8,
          indicesPerRecord: 6,
          verticesPerRecord: 4,
        });
      class R {
        constructor(t, e) {
          this._pos = 0;
          const s = e ? this._roundToNearest(e, t.BYTES_PER_ELEMENT) : 40;
          (this._array = new ArrayBuffer(s)),
            (this._buffer = new t(this._array)),
            (this._ctor = t),
            (this._i16View = new Int16Array(this._array));
        }
        get length() {
          return this._pos;
        }
        _roundToNearest(t, e) {
          const s = Math.round(t);
          return s + (e - (s % e));
        }
        _ensureSize(t) {
          if (this._pos + t >= this._buffer.length) {
            const e = this._roundToNearest(
                1.25 *
                  (this._array.byteLength + t * this._buffer.BYTES_PER_ELEMENT),
                this._buffer.BYTES_PER_ELEMENT,
              ),
              s = new ArrayBuffer(e),
              i = new this._ctor(s);
            i.set(this._buffer, 0),
              (this._array = s),
              (this._buffer = i),
              (this._i16View = new Int16Array(this._array));
          }
        }
        ensureSize(t) {
          this._ensureSize(t);
        }
        writeF32(t) {
          this._ensureSize(1);
          const e = this._pos;
          return (
            (new Float32Array(this._array, 4 * this._pos, 1)[0] = t),
            this._pos++,
            e
          );
        }
        push(t) {
          this._ensureSize(1);
          const e = this._pos;
          return (this._buffer[this._pos++] = t), e;
        }
        writeFixed(t) {
          this._buffer[this._pos++] = t;
        }
        setValue(t, e) {
          this._buffer[t] = e;
        }
        i1616Add(t, e, s) {
          (this._i16View[2 * t] += e), (this._i16View[2 * t + 1] += s);
        }
        getValue(t) {
          return this._buffer[t];
        }
        incr(t) {
          if (this._buffer.length < t)
            throw new Error('Increment index overflows the target buffer');
          this._buffer[t]++;
        }
        decr(t) {
          this._buffer[t]--;
        }
        writeRegion(t) {
          this._ensureSize(t.length);
          const e = this._pos;
          return this._buffer.set(t, this._pos), (this._pos += t.length), e;
        }
        writeManyFrom(t, e, s) {
          this._ensureSize(s - e);
          for (let i = e; i !== s; i++) this.writeFixed(t._buffer[i]);
        }
        buffer() {
          const t = this._array.slice(0, 4 * this._pos);
          return this.destroy(), t;
        }
        toArray() {
          const t = this._array,
            e = [];
          for (let s = 0; s < t.byteLength / 4; s++) e.push(t[s]);
          return e;
        }
        seek(t) {
          this._pos = t;
        }
        destroy() {
          (this._array = null), (this._buffer = null);
        }
      }
      class O {
        constructor(t, e, s) {
          this._start = { index: 0, vertex: 0 };
          const i = (function (t, e, s) {
              const {
                indicesPerRecord: i,
                multiplier: r,
                verticesPerRecord: n,
              } = A.get(t);
              return {
                recordBytes: s * z.XJ * Uint32Array.BYTES_PER_ELEMENT,
                indexBytes: r * i * s * Uint32Array.BYTES_PER_ELEMENT,
                vertexBytes: r * n * s * e,
              };
            })(t, e, s),
            r = e / 4;
          (this.geometryType = t),
            (this._records = new R(Int32Array, i.recordBytes)),
            (this._indices = new R(Uint32Array, i.indexBytes)),
            (this._vertices = new R(Uint32Array, i.vertexBytes)),
            (this._metrics = new R(Float32Array, 0)),
            (this._strideInt = r);
        }
        serialize(t) {
          const e = this._records.buffer(),
            s = this._indices.buffer(),
            i = this._vertices.buffer(),
            r = this._metrics.length ? this._metrics.buffer() : null,
            n = 4 * this._strideInt;
          return (
            t.push(e, s, i),
            { stride: n, records: e, indices: s, vertices: i, metrics: r }
          );
        }
        get strideInt() {
          return this._strideInt;
        }
        get recordCount() {
          return this._records.length / z.XJ;
        }
        get vertexCount() {
          return this._vertices.length / this._strideInt;
        }
        get indexCount() {
          return this._indices.length;
        }
        get indexWriter() {
          return this._indices;
        }
        get vertexWriter() {
          return this._vertices;
        }
        get metricWriter() {
          return this._metrics;
        }
        vertexEnsureSize(t) {
          this._vertices.ensureSize(t);
        }
        indexEnsureSize(t) {
          this._indices.ensureSize(t);
        }
        recordStart() {
          (this._start.index = this._indices.length),
            (this._start.vertex = this._vertices.length);
        }
        recordEnd(t, e, s, i, r, n, o, a) {
          this._records.push(t),
            this._records.push(e),
            this._records.push(s),
            this._records.push(i),
            this._records.push(r),
            this._records.push(n),
            this._records.push(o),
            this._records.writeF32(a);
        }
        writeIndex(t) {
          this._indices.push(t);
        }
        writeVertex(t) {
          this._vertices.push(t);
        }
        writeVertexF32(t) {
          this._vertices.writeF32(t);
        }
        copyLastFrom(t, e, s) {
          const i = t._records.length - z.XJ,
            r = t._records.getValue(i),
            n = t._records.getValue(i + 1),
            o = t._records.getValue(i + 2),
            a = t._records.getValue(i + 4),
            h = t._records.getValue(i + 6),
            l = t._records.getValue(i + 7),
            c = this._vertices.length,
            u = (t._start.vertex - this._vertices.length) / this._strideInt,
            f = this._indices.length,
            _ = this.vertexCount;
          for (let e = t._start.index; e !== t._indices.length; e++) {
            const s = t._indices.getValue(e);
            this._indices.push(s - u);
          }
          for (let e = t._start.vertex; e !== t._vertices.length; e++) {
            const s = t._vertices.getValue(e);
            this._vertices.push(s);
          }
          for (let t = c; t <= this._vertices.length; t += this._strideInt)
            this._vertices.i1616Add(t, e, s);
          this._records.push(r),
            this._records.push(n),
            this._records.push(o),
            this._records.push(f),
            this._records.push(a),
            this._records.push(_),
            this._records.push(h),
            this._records.push(l);
        }
      }
      var W = s(14867);
      function V(t) {
        switch (t) {
          case 1:
          case 8:
          case 32:
            return -1;
          case 2:
          case 64:
            return 0;
          case 4:
          case 16:
          case 128:
            return 1;
        }
      }
      function N(t) {
        switch (t) {
          case 1:
          case 2:
          case 4:
            return -1;
          case 8:
          case 16:
            return 0;
          case 32:
          case 64:
          case 128:
            return 1;
        }
      }
      class G {
        constructor(t, e, s, i, r) {
          (this._hasAggregate = !1),
            (this.hasRecords = !1),
            (this._data = { self: new Map(), neighbors: new Array() }),
            (this._current = {
              geometryType: 0,
              writer: null,
              overlaps: 0,
              start: 0,
              insertAfter: 0,
              sortKey: 0,
              id: 0,
              materialKey: 0,
              indexStart: 0,
              vertStart: 0,
              isDotDensity: !1,
              bufferingEnabled: !1,
              metricBoxLenPointer: 0,
            }),
            (this.hint = e),
            (this.tileKey = t),
            (this._hasAggregate = i),
            (this._pixelBufferEnabled = r),
            (this._strideOptions = s);
        }
        get hasAggregates() {
          return this._hasAggregate;
        }
        get hasPixelBufferEnabled() {
          return this._pixelBufferEnabled;
        }
        serialize(t) {
          const e = [];
          return (
            e.push(
              this._serializeTileVertexData(
                this.tileKey,
                this.tileKey,
                this._data.self,
              ),
            ),
            this._data.neighbors.forEach((s, i) => {
              const r = 1 << i,
                n = V(r),
                o = N(r),
                a = (0, W.M)(new P.Z(this.tileKey), n, o, t),
                h = this._serializeTileVertexData(
                  this.tileKey,
                  a.id,
                  s.vertexData,
                );
              (h.message.bufferIds = s.displayIds), e.push(h);
            }),
            e
          );
        }
        _serializeTileVertexData(t, e, s) {
          var i, r, n, o, a;
          const h = new Array();
          return {
            message: {
              tileKeyOrigin: t,
              tileKey: e,
              data: {
                [E.LW.MARKER]:
                  null == (i = s.get(E.LW.MARKER)) ? void 0 : i.serialize(h),
                [E.LW.FILL]:
                  null == (r = s.get(E.LW.FILL)) ? void 0 : r.serialize(h),
                [E.LW.LINE]:
                  null == (n = s.get(E.LW.LINE)) ? void 0 : n.serialize(h),
                [E.LW.TEXT]:
                  null == (o = s.get(E.LW.TEXT)) ? void 0 : o.serialize(h),
                [E.LW.LABEL]:
                  null == (a = s.get(E.LW.LABEL)) ? void 0 : a.serialize(h),
              },
            },
            transferList: h,
          };
        }
        featureStart(t, e) {
          (this._current.insertAfter = t), (this._current.sortKey = e);
        }
        featureEnd() {}
        recordStart(t, e, s, i) {
          (this._current.writer = this._getVertexWriter(s)),
            (this._current.overlaps = 0),
            (this._current.indexStart = this._current.writer.indexCount),
            (this._current.vertStart = this._current.writer.vertexCount),
            (this._current.bufferingEnabled = i),
            (this._current.id = t),
            (this._current.materialKey = e),
            (this._current.geometryType = s),
            (this._current.isDotDensity = !1),
            this._current.writer.recordStart();
        }
        recordCount() {
          return this._current.writer.recordCount;
        }
        vertexCount() {
          return this._current.writer.vertexCount;
        }
        indexCount() {
          return this._current.writer.indexCount;
        }
        vertexEnsureSize(t) {
          this._current.writer.vertexEnsureSize(t);
        }
        indexEnsureSize(t) {
          this._current.writer.indexEnsureSize(t);
        }
        vertexBounds(t, e, s, i) {
          this._current.bufferingEnabled && this._addOverlap(t, e, s, i);
        }
        vertexWrite(t) {
          this._current.writer.writeVertex(t);
        }
        vertexWriteF32(t) {
          this._current.writer.writeVertexF32(t);
        }
        vertexEnd() {}
        vertexWriter() {
          return this._current.writer.vertexWriter;
        }
        indexWrite(t) {
          this._current.writer.writeIndex(t);
        }
        indexWriter() {
          return this._current.writer.indexWriter;
        }
        metricWriter() {
          return this._current.writer.metricWriter;
        }
        metricStart(t, e, s, i, r, n, o, a) {
          this._current.writer = this._getVertexWriter(E.LW.LABEL);
          const h = this._current.writer.metricWriter;
          h.push((0, d.jL)(t)),
            h.push(e),
            h.push(s),
            h.push(i),
            h.push(r),
            h.push(n),
            h.push(o),
            h.push(a),
            h.push(255),
            (this._current.metricBoxLenPointer = h.push(0));
        }
        metricEnd() {
          const t = this._current.writer.metricWriter;
          0 === t.getValue(this._current.metricBoxLenPointer) &&
            t.seek(t.length - 10);
        }
        metricBoxWrite(t, e, s, i) {
          const r = this._current.writer.metricWriter;
          r.incr(this._current.metricBoxLenPointer),
            r.push(0),
            r.push(0),
            r.push(t),
            r.push(e),
            r.push(s),
            r.push(i);
        }
        recordEnd() {
          const t = this._current.vertStart,
            e = this._current.writer.vertexCount - t;
          if (!e) return !1;
          this.hasRecords = !0;
          const s = this._current.indexStart,
            i = this._current.writer.indexCount - s;
          if (
            (this._current.writer.recordEnd(
              this._current.id,
              this._current.materialKey,
              this._current.insertAfter,
              s,
              i,
              t,
              e,
              this._current.sortKey,
            ),
            !this._pixelBufferEnabled ||
              this._hasAggregate ||
              0 === this._current.overlaps ||
              this._current.geometryType === E.LW.LABEL)
          )
            return !0;
          const r = this._current.writer;
          for (let t = 0; t < 8; t++) {
            const e = 1 << t;
            if (this._current.overlaps & e) {
              this._data.neighbors[t] ||
                (this._data.neighbors[t] = {
                  vertexData: new Map(),
                  displayIds: new Set(),
                });
              const s = this._data.neighbors[t],
                i = this._current.geometryType;
              if (!s.vertexData.has(i)) {
                const t = (0, F.$_)(i, this._strideOptions).geometry,
                  e = new O(i, t, z.Ip);
                s.vertexData.set(i, e);
              }
              const n = s.vertexData.get(this._current.geometryType),
                o = 8,
                a = 512 * -V(e) * o,
                h = 512 * -N(e) * o;
              n.copyLastFrom(r, a, h), s.displayIds.add(this._current.id);
            }
          }
          return !0;
        }
        _addOverlap(t, e, s, i) {
          const r =
            255 ^
            ((t < 0 + s ? 148 : t >= z.I_ - s ? 41 : 189) |
              (e < 0 + i ? 224 : e >= z.I_ - i ? 7 : 231));
          this._current.overlaps |= r;
        }
        _getVertexWriter(t) {
          if (!this._data.self.has(t)) {
            const e = this._data.self,
              s = (0, F.$_)(t, this._strideOptions).geometry;
            e.set(t, new O(t, s, this.hint.records));
          }
          return this._data.self.get(t);
        }
      }
      var D = s(65390),
        B = s(22021),
        X = s(62357),
        U = s(95648),
        H = s(30729),
        Y = s(37720),
        J = s(12142),
        Z = s(63523);
      const q = 100;
      function K(t, e, s) {
        return (t[0] = e[0] - s[0]), (t[1] = e[1] - s[1]), t;
      }
      function j(t, e) {
        return Math.sqrt(t * t + e * e);
      }
      function $(t) {
        const e = j(t[0], t[1]);
        (t[0] /= e), (t[1] /= e);
      }
      function Q(t, e) {
        return j(t[0] - e[0], t[1] - e[1]);
      }
      function tt(t) {
        return 'function' == typeof t;
      }
      function et(t = 2) {
        return 1 / Math.max(t, 1);
      }
      function st(t, e) {
        return [
          (!!t.minScale && e.scaleToZoom(t.minScale)) || 0,
          (!!t.maxScale && e.scaleToZoom(t.maxScale)) || q,
        ];
      }
      function it(t) {
        return t.length - 1;
      }
      function rt(t, e, s = 1) {
        const [i, r] = (function (t, e) {
          return t[e + 1];
        })(t, e);
        return Math.sqrt(i * i + r * r) * s;
      }
      class nt {
        constructor(t, e, s, i, r) {
          (this._segments = t),
            (this._index = e),
            (this._distance = s),
            (this._xStart = i),
            (this._yStart = r),
            (this._done = !1);
        }
        static create(t) {
          return new nt(t, 0, 0, t[0][0], t[0][1]);
        }
        clone() {
          return new nt(
            this._segments,
            this._index,
            this._distance,
            this.xStart,
            this.yStart,
          );
        }
        equals(t) {
          return (
            this._index === t._index ||
            (t._index === this._index - 1 &&
              (0 === this._distance || 1 === t._distance)) ||
            (t._index === this._index + 1 &&
              (1 === this._distance || 0 === t._distance))
          );
        }
        leq(t) {
          return (
            this._index < t._index ||
            (this._index === t._index && this._distance <= t._distance)
          );
        }
        geq(t) {
          return (
            this._index > t._index ||
            (this._index === t._index && this._distance >= t._distance)
          );
        }
        get _segment() {
          return this._segments[this._index + 1];
        }
        get angle() {
          const t = this.dy,
            e = (0 * t + -1 * -this.dx) / (1 * this.length);
          let s = Math.acos(e);
          return t > 0 && (s = 2 * Math.PI - s), s;
        }
        get xStart() {
          return this._xStart;
        }
        get yStart() {
          return this._yStart;
        }
        get x() {
          return this.xStart + this.distance * this.dx;
        }
        get y() {
          return this.yStart + this.distance * this.dy;
        }
        get dx() {
          return this._segment[0];
        }
        get dy() {
          return this._segment[1];
        }
        get xMidpoint() {
          return this.xStart + 0.5 * this.dx;
        }
        get yMidpoint() {
          return this.yStart + 0.5 * this.dy;
        }
        get xEnd() {
          return this.xStart + this.dx;
        }
        get yEnd() {
          return this.yStart + this.dy;
        }
        get length() {
          const { dx: t, dy: e } = this;
          return Math.sqrt(t * t + e * e);
        }
        get remainingLength() {
          return this.length * (1 - this._distance);
        }
        get backwardLength() {
          return this.length * this._distance;
        }
        get distance() {
          return this._distance;
        }
        get done() {
          return this._done;
        }
        hasPrev() {
          return this._index - 1 >= 0;
        }
        hasNext() {
          return this._index + 1 < it(this._segments);
        }
        next() {
          return this.hasNext()
            ? ((this._xStart += this.dx),
              (this._yStart += this.dy),
              (this._distance = 0),
              (this._index += 1),
              this)
            : null;
        }
        prev() {
          return this.hasPrev()
            ? ((this._index -= 1),
              (this._xStart -= this.dx),
              (this._yStart -= this.dy),
              (this._distance = 1),
              this)
            : ((this._done = !0), null);
        }
        _seekBackwards(t, e) {
          const s = this.backwardLength;
          if (t <= s) return (this._distance = (s - t) / this.length), this;
          let i = this.backwardLength;
          for (; this.prev(); ) {
            if (i + this.length > t) return this._seekBackwards(t - i);
            i += this.length;
          }
          return (this._distance = 0), e ? this : null;
        }
        seek(t, e = !1) {
          if (t < 0) return this._seekBackwards(Math.abs(t), e);
          if (t <= this.remainingLength)
            return (
              (this._distance = (this.backwardLength + t) / this.length), this
            );
          let s = this.remainingLength;
          for (; this.next(); ) {
            if (s + this.length > t) return this.seek(t - s, e);
            s += this.length;
          }
          return (this._distance = 1), e ? this : null;
        }
      }
      function ot(t, e, s, i = !0) {
        const r = (function (t) {
            let e = 0;
            for (let s = 0; s < it(t); s++) e += rt(t, s);
            return e;
          })(t),
          n = nt.create(t),
          o = r / 2;
        if (!i) return n.seek(o), void s(n.clone(), 0, o + 0 * e, r);
        const a = Math.max((r - e) / 2, 0),
          h = Math.floor(a / e),
          l = o - h * e;
        n.seek(l);
        for (let t = -h; t <= h; t++)
          n.x < 512 &&
            n.x >= 0 &&
            n.y < 512 &&
            n.y >= 0 &&
            s(n.clone(), t, o + t * e, r),
            n.seek(e);
      }
      function at(t, e) {
        const s = 1e-6;
        if (e <= 0) return;
        const i = t.length;
        if (i < 3) return;
        const r = [];
        let n = 0;
        r.push(0);
        for (let e = 1; e < i; e++) (n += Q(t[e], t[e - 1])), r.push(n);
        e = Math.min(e, 0.2 * n);
        const o = [];
        o.push(t[0][0]), o.push(t[0][1]);
        const a = t[i - 1][0],
          h = t[i - 1][1],
          l = K([0, 0], t[0], t[1]);
        $(l),
          (t[0][0] += e * l[0]),
          (t[0][1] += e * l[1]),
          K(l, t[i - 1], t[i - 2]),
          $(l),
          (t[i - 1][0] += e * l[0]),
          (t[i - 1][1] += e * l[1]);
        for (let t = 1; t < i; t++) r[t] += e;
        r[i - 1] += e;
        const c = 0.5 * e;
        for (let n = 1; n < i - 1; n++) {
          let a = 0,
            h = 0,
            l = 0;
          for (let i = n - 1; i >= 0 && !(r[i + 1] < r[n] - c); i--) {
            const o = c + r[i + 1] - r[n],
              u = r[i + 1] - r[i],
              f = r[n] - r[i] < c ? 1 : o / u;
            if (Math.abs(f) < s) break;
            const _ = f * f,
              d = f * o - 0.5 * _ * u,
              m = (f * u) / e,
              p = t[i + 1],
              g = t[i][0] - p[0],
              y = t[i][1] - p[1];
            (a +=
              (m / d) *
              (p[0] * f * o +
                0.5 * _ * (o * g - u * p[0]) -
                (_ * f * u * g) / 3)),
              (h +=
                (m / d) *
                (p[1] * f * o +
                  0.5 * _ * (o * y - u * p[1]) -
                  (_ * f * u * y) / 3)),
              (l += m);
          }
          for (let o = n + 1; o < i && !(r[o - 1] > r[n] + c); o++) {
            const i = c - r[o - 1] + r[n],
              u = r[o] - r[o - 1],
              f = r[o] - r[n] < c ? 1 : i / u;
            if (Math.abs(f) < s) break;
            const _ = f * f,
              d = f * i - 0.5 * _ * u,
              m = (f * u) / e,
              p = t[o - 1],
              g = t[o][0] - p[0],
              y = t[o][1] - p[1];
            (a +=
              (m / d) *
              (p[0] * f * i +
                0.5 * _ * (i * g - u * p[0]) -
                (_ * f * u * g) / 3)),
              (h +=
                (m / d) *
                (p[1] * f * i +
                  0.5 * _ * (i * y - u * p[1]) -
                  (_ * f * u * y) / 3)),
              (l += m);
          }
          o.push(a / l), o.push(h / l);
        }
        o.push(a), o.push(h);
        for (let e = 0, s = 0; e < i; e++)
          (t[e][0] = o[s++]), (t[e][1] = o[s++]);
      }
      var ht = s(98732),
        lt = s(22974),
        ct = s(33955);
      class ut {
        constructor() {
          this.setIdentity();
        }
        getAngle() {
          return (
            (null == this.rz ||
              (0 === this.rz && 1 !== this.rz_c && 0 !== this.rz_s)) &&
              (this.rz = Math.atan2(this.rz_s, this.rz_c)),
            this.rz
          );
        }
        setIdentity() {
          (this.tx = 0),
            (this.ty = 0),
            (this.tz = 0),
            (this.s = 1),
            (this.rx = 0),
            (this.ry = 0),
            (this.rz = 0),
            (this.rz_c = 1),
            (this.rz_s = 0);
        }
        setTranslate(t, e) {
          (this.tx = t), (this.ty = e);
        }
        setTranslateZ(t) {
          this.tz = t;
        }
        setRotateCS(t, e) {
          (this.rz = void 0), (this.rz_c = t), (this.rz_s = e);
        }
        setRotate(t) {
          (this.rz = t), (this.rz_c = void 0), (this.rz_s = void 0);
        }
        setRotateY(t) {
          this.ry = t;
        }
        setScale(t) {
          this.s = t;
        }
        setMeasure(t) {
          this.m = t;
        }
      }
      function ft(t) {
        const e = (0, lt.d9)(t);
        return (
          (s = e) &&
            ((0, ct.oU)(s)
              ? xt(s.rings)
              : (0, ct.l9)(s)
              ? xt(s.paths)
              : (0, ct.aW)(s) && yt(s.points),
            _t(s)),
          e
        );
        var s;
      }
      function _t(t) {
        if (!t) return null;
        (0, ct.wp)(t)
          ? (t.y = -t.y)
          : (0, ct.oU)(t)
          ? mt(t.rings)
          : (0, ct.l9)(t)
          ? mt(t.paths)
          : (0, ct.aW)(t) && dt(t.points);
      }
      function dt(t) {
        if (t) {
          const e = t.length;
          for (let s = 0; s < e; s++) t[s][1] = -t[s][1];
        }
      }
      function mt(t) {
        if (t) for (const e of t) dt(e);
      }
      function pt(t) {
        if (t)
          for (let e = t.length - 1; e > 0; --e)
            (t[e][0] -= t[e - 1][0]), (t[e][1] -= t[e - 1][1]);
      }
      function gt(t) {
        if (t) for (const e of t) pt(e);
      }
      function yt(t) {
        if (t) {
          const e = t.length;
          for (let s = 1; s < e; ++s)
            (t[s][0] += t[s - 1][0]), (t[s][1] += t[s - 1][1]);
        }
      }
      function xt(t) {
        if (t) for (const e of t) yt(e);
      }
      function vt(t) {
        if (t) for (const e of t) Mt(e);
      }
      function Mt(t) {
        t && t.reverse();
      }
      function bt(t, e, s) {
        return [t[0] + (e[0] - t[0]) * s, t[1] + (e[1] - t[1]) * s];
      }
      function St(t) {
        return t[4];
      }
      function Pt(t, e) {
        t[4] = e;
      }
      class wt {
        constructor(t, e, s, i) {
          (this.acceptPolygon = e),
            (this.acceptPolyline = s),
            (this.geomUnitsPerPoint = i),
            (this.pathCount = -1),
            (this.pathIndex = -1),
            (this.iteratePath = !1),
            t &&
              ((0, ct.oU)(t)
                ? e && ((this.multiPath = t.rings), (this.isClosed = !0))
                : (0, ct.l9)(t)
                ? s && ((this.multiPath = t.paths), (this.isClosed = !1))
                : (0, ct.YX)(t) &&
                  e &&
                  ((this.multiPath = Lt(t).rings), (this.isClosed = !0)),
              this.multiPath && (this.pathCount = this.multiPath.length)),
            (this.internalPlacement = new ut());
        }
        next() {
          if (!this.multiPath) return null;
          for (; this.iteratePath || this.pathIndex < this.pathCount - 1; ) {
            this.iteratePath || this.pathIndex++;
            const t = this.processPath(this.multiPath[this.pathIndex]);
            if (t) return t;
          }
          return (
            (this.pathCount = -1),
            (this.pathIndex = -1),
            (this.multiPath = null),
            null
          );
        }
      }
      class Ct {
        constructor(t, e, s, i) {
          (this.inputGeometries = t),
            (this.acceptPolygon = e),
            (this.acceptPolyline = s),
            (this.geomUnitsPerPoint = i),
            (this.pathCount = -1),
            (this.pathIndex = -1),
            (this.iteratePath = !1);
        }
        next() {
          for (;;) {
            if (!this.multiPath) {
              let t = this.inputGeometries.next();
              for (; t; ) {
                if (
                  ((0, ct.oU)(t)
                    ? this.acceptPolygon &&
                      ((this.multiPath = t.rings), (this.isClosed = !0))
                    : (0, ct.l9)(t)
                    ? this.acceptPolyline &&
                      ((this.multiPath = t.paths), (this.isClosed = !1))
                    : (0, ct.YX)(t) &&
                      this.acceptPolygon &&
                      ((this.multiPath = Lt(t).rings), (this.isClosed = !0)),
                  this.multiPath)
                ) {
                  (this.pathCount = this.multiPath.length),
                    (this.pathIndex = -1);
                  break;
                }
                t = this.inputGeometries.next();
              }
              if (!this.multiPath) return null;
            }
            for (; this.iteratePath || this.pathIndex < this.pathCount - 1; ) {
              this.iteratePath || this.pathIndex++;
              const t = this.processPath(this.multiPath[this.pathIndex]);
              if (t) return t;
            }
            (this.pathCount = -1),
              (this.pathIndex = -1),
              (this.multiPath = null);
          }
        }
      }
      function Lt(t) {
        return {
          rings: [
            [
              [t.xmin, t.ymin],
              [t.xmin, t.ymax],
              [t.xmax, t.ymax],
              [t.xmax, t.ymin],
              [t.xmin, t.ymin],
            ],
          ],
        };
      }
      class It {
        static local() {
          return null === It.instance && (It.instance = new It()), It.instance;
        }
        execute(t, e, s, i) {
          return new kt(t, e, s);
        }
      }
      It.instance = null;
      class kt {
        constructor(t, e, s) {
          (this._inputGeometries = t),
            (this._angleTolerance =
              void 0 !== e.angleTolerance ? e.angleTolerance : 120),
            (this._maxCosAngle = Math.cos(
              (1 - Math.abs(this._angleTolerance) / 180) * Math.PI,
            ));
        }
        next() {
          let t = this._inputGeometries.next();
          for (; t; ) {
            if ((0, ct.oU)(t)) {
              this._isClosed = !0;
              const e = (0, lt.d9)(t);
              return this._processMultipath(e.rings), e;
            }
            if ((0, ct.l9)(t)) {
              this._isClosed = !1;
              const e = (0, lt.d9)(t);
              return this._processMultipath(e.paths), e;
            }
            if ((0, ct.YX)(t)) {
              if (this._maxCosAngle) return t;
              this._isClosed = !0;
              const e = [
                [t.xmin, t.ymin],
                [t.xmin, t.ymax],
                [t.xmax, t.ymax],
                [t.xmax, t.ymin],
                [t.xmin, t.ymin],
              ];
              return this._processPath(e), { rings: [e] };
            }
            t = this._inputGeometries.next();
          }
          return null;
        }
        _processMultipath(t) {
          if (t) for (const e of t) this._processPath(e);
        }
        _processPath(t) {
          if (t) {
            let e,
              s,
              i,
              r,
              n,
              o,
              a = t.length,
              h = t[0];
            this._isClosed && ++a;
            for (let l = 1; l < a; ++l) {
              let c;
              c = this._isClosed && l === a - 1 ? t[0] : t[l];
              const u = c[0] - h[0],
                f = c[1] - h[1],
                _ = Math.sqrt(u * u + f * f);
              l > 1 &&
                _ > 0 &&
                i > 0 &&
                (e * u + s * f) / _ / i <= this._maxCosAngle &&
                Pt(h, 1),
                1 === l && ((r = u), (n = f), (o = _)),
                _ > 0 && ((h = c), (e = u), (s = f), (i = _));
            }
            this._isClosed &&
              i > 0 &&
              o > 0 &&
              (e * r + s * n) / o / i <= this._maxCosAngle &&
              Pt(t[0], 1);
          }
        }
      }
      const Tt = 0.03;
      class zt {
        constructor() {
          this._path = [];
        }
        path() {
          return this._path;
        }
        addPath(t, e) {
          e || t.reverse(),
            Array.prototype.push.apply(this._path, t),
            e || t.reverse();
        }
        static mergePath(t, e) {
          e && Array.prototype.push.apply(t, e);
        }
        startPath(t) {
          this._path.push(t);
        }
        lineTo(t) {
          this._path.push(t);
        }
        close() {
          const t = this._path;
          t.length > 1 &&
            ((t[0][0] === t[t.length - 1][0] &&
              t[0][1] === t[t.length - 1][1]) ||
              t.push([t[0][0], t[0][1]]));
        }
      }
      class Et {
        constructor(t = 0, e = !1) {}
        normalize(t) {
          const e = Math.sqrt(t[0] * t[0] + t[1] * t[1]);
          (t[0] /= e), (t[1] /= e);
        }
        calculateLength(t, e) {
          const s = e[0] - t[0],
            i = e[1] - t[1];
          return Math.sqrt(s * s + i * i);
        }
        calculateSegLength(t, e) {
          return this.calculateLength(t[e], t[e + 1]);
        }
        calculatePathLength(t) {
          let e = 0;
          const s = t ? t.length : 0;
          for (let i = 0; i < s - 1; ++i) e += this.calculateSegLength(t, i);
          return e;
        }
        calculatePathArea(t) {
          let e = 0;
          const s = t ? t.length : 0;
          for (let i = 0; i < s - 1; ++i)
            e += (t[i + 1][0] - t[i][0]) * (t[i + 1][1] + t[i][1]);
          return e / 2;
        }
        getCoord2D(t, e, s) {
          return [t[0] + (e[0] - t[0]) * s, t[1] + (e[1] - t[1]) * s];
        }
        getSegCoord2D(t, e, s) {
          return this.getCoord2D(t[e], t[e + 1], s);
        }
        getAngle(t, e, s) {
          const i = e[0] - t[0],
            r = e[1] - t[1];
          return Math.atan2(r, i);
        }
        getSegAngle(t, e, s) {
          return this.getAngle(t[e], t[e + 1], s);
        }
        getAngleCS(t, e, s) {
          const i = e[0] - t[0],
            r = e[1] - t[1],
            n = Math.sqrt(i * i + r * r);
          return n > 0 ? [i / n, r / n] : [1, 0];
        }
        getSegAngleCS(t, e, s) {
          return this.getAngleCS(t[e], t[e + 1], s);
        }
        cut(t, e, s, i) {
          return [
            s <= 0 ? t[e] : this.getSegCoord2D(t, e, s),
            i >= 1 ? t[e + 1] : this.getSegCoord2D(t, e, i),
          ];
        }
        addSegment(t, e, s) {
          s && t.push(e[0]), t.push(e[1]);
        }
        getSubCurve(t, e, s) {
          const i = [];
          return this.appendSubCurve(i, t, e, s) ? i : null;
        }
        appendSubCurve(t, e, s, i) {
          const r = e ? e.length - 1 : 0;
          let n = 0,
            o = !0,
            a = 0;
          for (; a < r; ) {
            const r = this.calculateSegLength(e, a);
            if (0 !== r) {
              if (o) {
                if (n + r > s) {
                  const h = (s - n) / r;
                  let l = 1,
                    c = !1;
                  n + r >= i && ((l = (i - n) / r), (c = !0));
                  const u = this.cut(e, a, h, l);
                  if ((u && this.addSegment(t, u, o), c)) break;
                  o = !1;
                }
              } else {
                if (n + r > i) {
                  const s = this.cut(e, a, 0, (i - n) / r);
                  s && this.addSegment(t, s, o);
                  break;
                }
                this.addSegment(t, [e[a], e[a + 1]], o);
              }
              (n += r), ++a;
            } else ++a;
          }
          return !0;
        }
        getCIMPointAlong(t, e) {
          const s = t ? t.length - 1 : 0;
          let i = 0,
            r = -1;
          for (; r < s; ) {
            ++r;
            const s = this.calculateSegLength(t, r);
            if (0 !== s) {
              if (i + s > e) {
                const n = (e - i) / s;
                return this.getCoord2D(t[r], t[r + 1], n);
              }
              i += s;
            }
          }
          return null;
        }
        isEmpty(t, e) {
          if (!t || t.length <= 1) return !0;
          const s = t ? t.length - 1 : 0;
          let i = -1;
          for (; i < s; ) {
            if ((++i, t[i + 1][0] !== t[i][0] || t[i + 1][1] !== t[i][1]))
              return !1;
            if (e && t[i + 1][2] !== t[i][2]) return !1;
          }
          return !0;
        }
        offset(t, e, s, i, r) {
          if (!t || t.length < 2) return null;
          let n = 0,
            o = t[n++],
            a = n;
          for (; n < t.length; ) {
            const e = t[n];
            (e[0] === o[0] && e[1] === o[1]) ||
              (n !== a && (t[a] = t[n]), (o = t[a++])),
              n++;
          }
          const h = t[0][0] === t[a - 1][0] && t[0][1] === t[a - 1][1];
          if ((h && --a, a < (h ? 3 : 2))) return null;
          const l = [];
          o = h ? t[a - 1] : null;
          let c = t[0];
          for (let r = 0; r < a; r++) {
            const n = r === a - 1 ? (h ? t[0] : null) : t[r + 1];
            if (o)
              if (n) {
                const t = [n[0] - c[0], n[1] - c[1]];
                this.normalize(t);
                const r = [c[0] - o[0], c[1] - o[1]];
                this.normalize(r);
                const a = r[0] * t[1] - r[1] * t[0],
                  h = r[0] * t[0] + r[1] * t[1];
                if (a >= 0 == e <= 0) {
                  if (h < 1) {
                    const s = [t[0] - r[0], t[1] - r[1]];
                    this.normalize(s);
                    const n = Math.sqrt((1 + h) / 2);
                    if (n > 1 / i) {
                      const t = -Math.abs(e) / n;
                      l.push([c[0] - s[0] * t, c[1] - s[1] * t]);
                    }
                  }
                } else
                  switch (s) {
                    case U.id.Mitered: {
                      const s = Math.sqrt((1 + h) / 2);
                      if (s > 0 && 1 / s < i) {
                        const i = [t[0] - r[0], t[1] - r[1]];
                        this.normalize(i);
                        const n = Math.abs(e) / s;
                        l.push([c[0] - i[0] * n, c[1] - i[1] * n]);
                        break;
                      }
                    }
                    case U.id.Bevelled:
                      l.push([c[0] + r[1] * e, c[1] - r[0] * e]),
                        l.push([c[0] + t[1] * e, c[1] - t[0] * e]);
                      break;
                    case U.id.Rounded:
                      if (h < 1) {
                        l.push([c[0] + r[1] * e, c[1] - r[0] * e]);
                        const s = Math.floor(2.5 * (1 - h));
                        if (s > 0) {
                          const i = 1 / s;
                          let n = i;
                          for (let o = 1; o < s; o++, n += i) {
                            const s = [
                              r[1] * (1 - n) + t[1] * n,
                              -r[0] * (1 - n) - t[0] * n,
                            ];
                            this.normalize(s),
                              l.push([c[0] + s[0] * e, c[1] + s[1] * e]);
                          }
                        }
                        l.push([c[0] + t[1] * e, c[1] - t[0] * e]);
                      }
                      break;
                    case U.id.Square:
                    default:
                      if (a < 0)
                        l.push([
                          c[0] + (r[1] + r[0]) * e,
                          c[1] + (r[1] - r[0]) * e,
                        ]),
                          l.push([
                            c[0] + (t[1] - t[0]) * e,
                            c[1] - (t[0] + t[1]) * e,
                          ]);
                      else {
                        const s = Math.sqrt((1 + Math.abs(h)) / 2),
                          i = [t[0] - r[0], t[1] - r[1]];
                        this.normalize(i);
                        const n = e / s;
                        l.push([c[0] - i[0] * n, c[1] - i[1] * n]);
                      }
                  }
              } else {
                const t = [c[0] - o[0], c[1] - o[1]];
                this.normalize(t), l.push([c[0] + t[1] * e, c[1] - t[0] * e]);
              }
            else {
              const t = [n[0] - c[0], n[1] - c[1]];
              this.normalize(t), l.push([c[0] + t[1] * e, c[1] - t[0] * e]);
            }
            (o = c), (c = n);
          }
          return l.length < (h ? 3 : 2)
            ? null
            : (h && l.push([l[0][0], l[0][1]]), l);
        }
      }
      const Ft = U.TF.OpenEnded;
      class At {
        static local() {
          return null === At.instance && (At.instance = new At()), At.instance;
        }
        execute(t, e, s, i) {
          return new Rt(t, e, s);
        }
      }
      At.instance = null;
      class Rt extends Ct {
        constructor(t, e, s) {
          super(t, !1, !0),
            (this._curveHelper = new Et()),
            (this._width = (void 0 !== e.width ? e.width : 5) * s),
            (this._arrowType =
              void 0 !== e.geometricEffectArrowType
                ? e.geometricEffectArrowType
                : void 0 !== e.arrowType
                ? e.arrowType
                : Ft),
            (this._offsetFlattenError = Tt * s);
        }
        processPath(t) {
          switch (this._arrowType) {
            case U.TF.OpenEnded:
            default:
              return this._constructSimpleArrow(t, !0);
            case U.TF.Block:
              return this._constructSimpleArrow(t, !1);
            case U.TF.Crossed:
              return this._constructCrossedArrow(t);
          }
        }
        _constructSimpleArrow(t, e) {
          const s = this._curveHelper.calculatePathLength(t);
          let i = this._width;
          s < 2 * i && (i = s / 2);
          const r = this._curveHelper.getSubCurve(t, 0, s - i);
          if (!r) return null;
          const n = i / 2;
          if (this._curveHelper.isEmpty(r, !1)) return null;
          const o = this._constructOffset(r, -n);
          if (!o) return null;
          const a = this._constructOffset(r, n);
          if (!a) return null;
          const h = this._constructArrowBasePoint(o, -n / 2);
          if (!h) return null;
          const l = this._constructArrowBasePoint(a, n / 2);
          if (!l) return null;
          const c = t[t.length - 1];
          e || (this._makeControlPoint(a, !0), this._makeControlPoint(o, !0));
          const u = new zt();
          return (
            u.addPath(a, !0),
            u.lineTo(l),
            this._makeControlPoint(u.path()),
            u.lineTo(c),
            this._makeControlPoint(u.path()),
            u.lineTo(h),
            this._makeControlPoint(u.path()),
            u.addPath(o, !1),
            e ? { paths: [u.path()] } : (u.close(), { rings: [u.path()] })
          );
        }
        _constructCrossedArrow(t) {
          const e = this._curveHelper.calculatePathLength(t);
          let s = this._width;
          e < 3.732050807568877 * s && (s = e / 3.732050807568877);
          const i = this._curveHelper.getSubCurve(
            t,
            0,
            e - 2.732050807568877 * s,
          );
          if (!i) return null;
          const r = s / 2;
          if (this._curveHelper.isEmpty(i, !1)) return null;
          const n = this._constructOffset(i, r);
          if (!n) return null;
          const o = this._constructOffset(i, -r);
          if (!o) return null;
          const a = this._curveHelper.getSubCurve(t, 0, e - s);
          if (!a) return null;
          if (this._curveHelper.isEmpty(a, !1)) return null;
          const h = this._constructOffset(a, r);
          if (!h) return null;
          const l = this._constructOffset(a, -r);
          if (!l) return null;
          const c = h[h.length - 1],
            u = this._constructArrowBasePoint(h, r / 2);
          if (!u) return null;
          const f = l[l.length - 1],
            _ = this._constructArrowBasePoint(l, -r / 2);
          if (!_) return null;
          const d = t[t.length - 1];
          this._makeControlPoint(n, !1), this._makeControlPoint(o, !1);
          const m = new zt();
          return (
            m.addPath(n, !0),
            this._makeControlPoint(m.path()),
            m.lineTo(f),
            m.lineTo(_),
            this._makeControlPoint(m.path()),
            m.lineTo(d),
            this._makeControlPoint(m.path()),
            m.lineTo(u),
            this._makeControlPoint(m.path()),
            m.lineTo(c),
            this._makeControlPoint(m.path()),
            m.addPath(o, !1),
            { paths: [m.path()] }
          );
        }
        _constructOffset(t, e) {
          return this._curveHelper.offset(
            t,
            e,
            U.id.Rounded,
            4,
            this._offsetFlattenError,
          );
        }
        _constructArrowBasePoint(t, e) {
          if (!t || t.length < 2) return null;
          const s = t[t.length - 2],
            i = t[t.length - 1],
            r = [i[0] - s[0], i[1] - s[1]];
          return (
            this._curveHelper.normalize(r), [i[0] + r[1] * e, i[1] - r[0] * e]
          );
        }
        _makeControlPoint(t, e = !1) {
          Pt(e ? t[0] : t[t.length - 1], 1);
        }
      }
      class Ot {
        static local() {
          return null === Ot.instance && (Ot.instance = new Ot()), Ot.instance;
        }
        execute(t, e, s, i) {
          return new Wt(t, e, s, i);
        }
      }
      Ot.instance = null;
      class Wt {
        constructor(t, e, s, i) {
          (this._inputGeometries = t),
            (this._curveHelper = new Et()),
            (this._size = (void 0 !== e.size ? e.size : 1) * s),
            (this._offsetFlattenError = Tt * s);
        }
        next() {
          let t = this._inputGeometries.next();
          for (; t; ) {
            if ((0, ct.YX)(t))
              if (this._size > 0) {
                const e = [
                    [t.xmin, t.ymin],
                    [t.xmin, t.ymax],
                    [t.xmax, t.ymax],
                    [t.xmax, t.ymin],
                    [t.xmin, t.ymin],
                  ],
                  s = this._curveHelper.offset(
                    e,
                    this._size,
                    U.id.Rounded,
                    4,
                    this._offsetFlattenError,
                  );
                if (s) return { rings: [s] };
              } else {
                if (!(this._size < 0)) return t;
                if (
                  Math.min(t.xmax - t.xmin, t.ymax - t.ymin) + 2 * this._size >
                  0
                )
                  return {
                    xmin: t.xmin - this._size,
                    xmax: t.xmax + this._size,
                    ymin: t.ymin - this._size,
                    ymax: t.ymax + this._size,
                  };
              }
            if ((0, ct.oU)(t)) {
              if (0 === this._size) return t;
              const e = [];
              for (const s of t.rings) {
                const t = this._curveHelper.offset(
                  s,
                  this._size,
                  U.id.Rounded,
                  4,
                  this._offsetFlattenError,
                );
                t && e.push(t);
              }
              if (e.length) return { rings: e };
            }
            if ((0, ct.l9)(t) && this._size > 0) {
              const e = [];
              for (const s of t.paths)
                if (s && s.length > 1) {
                  const t = this._curveHelper.offset(
                      s,
                      this._size,
                      U.id.Rounded,
                      4,
                      this._offsetFlattenError,
                    ),
                    i = this._curveHelper.offset(
                      s,
                      -this._size,
                      U.id.Rounded,
                      4,
                      this._offsetFlattenError,
                    );
                  if (t && i) {
                    for (let e = i.length - 1; e >= 0; e--) t.push(i[e]);
                    t.push([t[0][0], t[0][1]]), e.push(t);
                  }
                }
              if (e.length) return { rings: e };
            }
            (0, ct.wp)(t) && this._size, (t = this._inputGeometries.next());
          }
          return null;
        }
      }
      class Vt {
        static local() {
          return null === Vt.instance && (Vt.instance = new Vt()), Vt.instance;
        }
        execute(t, e, s, i) {
          return new Nt(t, e, s);
        }
      }
      Vt.instance = null;
      class Nt {
        constructor(t, e, s) {
          var i;
          (this._default_point_size = 20),
            (this._inputGeometries = t),
            (this._geomUnitsPerPoint = s),
            (this._rule = null != (i = e.rule) ? i : U.Em.FullGeometry),
            (this._default_size = this._default_point_size * s);
        }
        next() {
          let t;
          for (; (t = this._inputGeometries.next()); ) {
            let e;
            if (
              ((0, ct.wp)(t)
                ? (e = this._processGeom([[[t.x, t.y]]]))
                : (0, ct.aW)(t)
                ? (e = this._processGeom([t.points]))
                : (0, ct.l9)(t)
                ? (e = this._processGeom(t.paths))
                : (0, ct.oU)(t) && (e = this._processGeom(t.rings)),
              e && e.length)
            )
              return { paths: e };
          }
          return null;
        }
        _clone(t) {
          return [t[0], t[1]];
        }
        _mid(t, e) {
          return [(t[0] + e[0]) / 2, (t[1] + e[1]) / 2];
        }
        _mix(t, e, s, i) {
          return [t[0] * e + s[0] * i, t[1] * e + s[1] * i];
        }
        _add(t, e) {
          return [t[0] + e[0], t[1] + e[1]];
        }
        _add2(t, e, s) {
          return [t[0] + e, t[1] + s];
        }
        _sub(t, e) {
          return [t[0] - e[0], t[1] - e[1]];
        }
        _dist(t, e) {
          return Math.sqrt(
            (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]),
          );
        }
        _norm(t) {
          return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
        }
        _normalize(t, e = 1) {
          const s = e / this._norm(t);
          (t[0] *= s), (t[1] *= s);
        }
        _leftPerpendicular(t) {
          const e = -t[1],
            s = t[0];
          (t[0] = e), (t[1] = s);
        }
        _leftPerp(t) {
          return [-t[1], t[0]];
        }
        _rightPerpendicular(t) {
          const e = t[1],
            s = -t[0];
          (t[0] = e), (t[1] = s);
        }
        _rightPerp(t) {
          return [t[1], -t[0]];
        }
        _dotProduct(t, e) {
          return t[0] * e[0] + t[1] * e[1];
        }
        _crossProduct(t, e) {
          return t[0] * e[1] - t[1] * e[0];
        }
        _rotateDirect(t, e, s) {
          const i = t[0] * e - t[1] * s,
            r = t[0] * s + t[1] * e;
          (t[0] = i), (t[1] = r);
        }
        _makeCtrlPt(t) {
          const e = [t[0], t[1]];
          return Pt(e, 1), e;
        }
        _addAngledTicks(t, e, s, i) {
          const r = this._sub(s, e);
          this._normalize(r);
          const n = this._crossProduct(r, this._sub(i, e));
          let o;
          o = n > 0 ? this._rightPerp(r) : this._leftPerp(r);
          const a = Math.abs(n) / 2,
            h = [];
          h.push([e[0] + (o[0] - r[0]) * a, e[1] + (o[1] - r[1]) * a]),
            h.push(e),
            h.push(s),
            h.push([s[0] + (o[0] + r[0]) * a, s[1] + (o[1] + r[1]) * a]),
            t.push(h);
        }
        _addBezier2(t, e, s, i, r) {
          if (0 == r--) return void t.push(i);
          const n = this._mid(e, s),
            o = this._mid(s, i),
            a = this._mid(n, o);
          this._addBezier2(t, e, n, a, r), this._addBezier2(t, a, o, i, r);
        }
        _addBezier3(t, e, s, i, r, n) {
          if (0 == n--) return void t.push(r);
          const o = this._mid(e, s),
            a = this._mid(s, i),
            h = this._mid(i, r),
            l = this._mid(o, a),
            c = this._mid(a, h),
            u = this._mid(l, c);
          this._addBezier3(t, e, o, l, u, n),
            this._addBezier3(t, u, c, h, r, n);
        }
        _add90DegArc(t, e, s, i, r) {
          const n =
              null != r
                ? r
                : this._crossProduct(this._sub(s, e), this._sub(i, e)) > 0,
            o = this._mid(e, s),
            a = this._sub(o, e);
          n ? this._leftPerpendicular(a) : this._rightPerpendicular(a),
            (o[0] += a[0]),
            (o[1] += a[1]),
            this._addBezier3(
              t,
              e,
              this._mix(e, 0.33333, o, 0.66667),
              this._mix(s, 0.33333, o, 0.66667),
              s,
              4,
            );
        }
        _addArrow(t, e, s) {
          const i = e[0],
            r = e[1],
            n = e[e.length - 1],
            o = this._sub(i, r);
          this._normalize(o);
          const a = this._crossProduct(o, this._sub(n, r)),
            h = 0.5 * a,
            l = this._leftPerp(o),
            c = [n[0] - l[0] * a, n[1] - l[1] * a],
            u = e.length - 1,
            f = [];
          f.push(s ? [-l[0], -l[1]] : l);
          let _ = [-o[0], -o[1]];
          for (let t = 1; t < u - 1; t++) {
            const s = this._sub(e[t + 1], e[t]);
            this._normalize(s);
            const i = this._dotProduct(s, _),
              r = this._crossProduct(s, _),
              n = Math.sqrt((1 + i) / 2),
              o = this._sub(s, _);
            this._normalize(o),
              (o[0] /= n),
              (o[1] /= n),
              f.push(r < 0 ? [-o[0], -o[1]] : o),
              (_ = s);
          }
          f.push(this._rightPerp(_));
          for (let s = f.length - 1; s > 0; s--)
            t.push([e[s][0] + f[s][0] * h, e[s][1] + f[s][1] * h]);
          t.push([c[0] + f[0][0] * h, c[1] + f[0][1] * h]),
            t.push([c[0] + f[0][0] * a, c[1] + f[0][1] * a]),
            t.push(i),
            t.push([c[0] - f[0][0] * a, c[1] - f[0][1] * a]),
            t.push([c[0] - f[0][0] * h, c[1] - f[0][1] * h]);
          for (let s = 1; s < f.length; s++)
            t.push([e[s][0] - f[s][0] * h, e[s][1] - f[s][1] * h]);
        }
        _cp2(t, e, s) {
          return t.length >= 2
            ? t[1]
            : this._add2(t[0], e * this._default_size, s * this._default_size);
        }
        _cp3(t, e, s, i) {
          if (t.length >= 3) return t[2];
          const r = this._mix(t[0], 1 - s, e, s),
            n = this._sub(e, t[0]);
          return (
            this._normalize(n),
            this._rightPerpendicular(n),
            [
              r[0] + n[0] * i * this._default_size,
              r[1] + n[1] * i * this._default_size,
            ]
          );
        }
        _arrowPath(t) {
          if (t.length > 2) return t;
          const e = t[0],
            s = this._cp2(t, -4, 0),
            i = this._sub(e, s);
          this._normalize(i);
          const r = this._rightPerp(i);
          return [
            e,
            s,
            [
              e[0] + (r[0] - i[0]) * this._default_size,
              e[1] + (r[1] - i[1]) * this._default_size,
            ],
          ];
        }
        _arrowLastSeg(t) {
          const e = t[0],
            s = this._cp2(t, -4, 0);
          let i;
          if (t.length >= 3) i = t[t.length - 1];
          else {
            const t = this._sub(e, s);
            this._normalize(t);
            const r = this._rightPerp(t);
            i = [
              e[0] + (r[0] - t[0]) * this._default_size,
              e[1] + (r[1] - t[1]) * this._default_size,
            ];
          }
          return [s, i];
        }
        _processGeom(t) {
          if (!t) return null;
          const e = [];
          for (const s of t) {
            if (!s || 0 === s.length) continue;
            const t = s.length;
            let i = s[0];
            switch (this._rule) {
              case U.Em.PerpendicularFromFirstSegment: {
                const t = this._cp2(s, 0, -1),
                  r = this._cp3(s, t, 0.5, 4),
                  n = [];
                n.push(r), n.push(this._mid(i, t)), e.push(n);
                break;
              }
              case U.Em.ReversedFirstSegment: {
                const t = this._cp2(s, 0, -1);
                e.push([t, i]);
                break;
              }
              case U.Em.PerpendicularToSecondSegment: {
                const t = this._cp2(s, -4, 1),
                  r = this._cp3(s, t, 0.882353, -1.94),
                  n = [];
                n.push(this._mid(t, r)), n.push(i), e.push(n);
                break;
              }
              case U.Em.SecondSegmentWithTicks: {
                const t = this._cp2(s, -4, 1),
                  r = this._cp3(s, t, 0.882353, -1.94),
                  n = this._sub(r, t);
                let o;
                o =
                  this._crossProduct(n, this._sub(i, t)) > 0
                    ? this._rightPerp(o)
                    : this._leftPerp(n);
                const a = [];
                a.push([t[0] + (o[0] - n[0]) / 3, t[1] + (o[1] - n[1]) / 3]),
                  a.push(t),
                  a.push(r),
                  a.push([r[0] + (o[0] + n[0]) / 3, r[1] + (o[1] + n[1]) / 3]),
                  e.push(a);
                break;
              }
              case U.Em.DoublePerpendicular: {
                const t = this._cp2(s, 0, -1),
                  r = this._cp3(s, t, 0.5, 3),
                  n = this._mid(i, t),
                  o = this._sub(n, r);
                this._normalize(o);
                const a = this._crossProduct(o, this._sub(i, r));
                this._leftPerpendicular(o);
                const h = [];
                h.push(i),
                  h.push([r[0] + o[0] * a, r[1] + o[1] * a]),
                  e.push(h);
                const l = [];
                l.push([r[0] - o[0] * a, r[1] - o[1] * a]),
                  l.push(t),
                  e.push(l);
                break;
              }
              case U.Em.OppositeToFirstSegment: {
                const t = this._cp2(s, 0, -1),
                  r = this._cp3(s, t, 0.5, 3),
                  n = this._mid(i, t),
                  o = this._sub(n, r);
                this._normalize(o);
                const a = this._crossProduct(o, this._sub(i, r));
                this._leftPerpendicular(o);
                const h = [];
                h.push([r[0] + o[0] * a, r[1] + o[1] * a]),
                  h.push([r[0] - o[0] * a, r[1] - o[1] * a]),
                  e.push(h);
                break;
              }
              case U.Em.TriplePerpendicular: {
                const t = this._cp2(s, 0, -1),
                  r = this._cp3(s, t, 0.5, 4),
                  n = this._mid(i, t),
                  o = this._sub(n, r);
                this._normalize(o);
                const a = this._crossProduct(o, this._sub(i, r));
                this._leftPerpendicular(o);
                const h = [];
                h.push([r[0] + o[0] * a * 0.8, r[1] + o[1] * a * 0.8]),
                  h.push([
                    n[0] + 0.8 * (i[0] - n[0]),
                    n[1] + 0.8 * (i[1] - n[1]),
                  ]),
                  e.push(h),
                  e.push([r, n]);
                const l = [];
                l.push([r[0] - o[0] * a * 0.8, r[1] - o[1] * a * 0.8]),
                  l.push([
                    n[0] + 0.8 * (t[0] - n[0]),
                    n[1] + 0.8 * (t[1] - n[1]),
                  ]),
                  e.push(l);
                break;
              }
              case U.Em.HalfCircleFirstSegment: {
                const t = this._cp2(s, 0, -1),
                  r = this._cp3(s, t, 0.5, 4),
                  n = this._mid(i, t);
                let o = this._sub(t, i);
                const a = Math.cos(Math.PI / 18),
                  h = Math.sin(Math.PI / 18),
                  l = Math.sqrt((1 + a) / 2),
                  c = Math.sqrt((1 - a) / 2),
                  u = [];
                let f;
                this._crossProduct(o, this._sub(r, i)) > 0
                  ? (u.push(i), (o = this._sub(i, n)), (f = t))
                  : (u.push(t), (o = this._sub(t, n)), (f = i)),
                  this._rotateDirect(o, l, c),
                  (o[0] /= l),
                  (o[1] /= l);
                for (let t = 1; t <= 18; t++)
                  u.push(this._add(n, o)), this._rotateDirect(o, a, h);
                u.push(f), e.push(u);
                break;
              }
              case U.Em.HalfCircleSecondSegment: {
                const t = this._cp2(s, 0, -1),
                  r = this._cp3(s, t, 1, -1);
                let n = this._sub(i, t);
                this._normalize(n);
                const o = this._crossProduct(n, this._sub(r, t)) / 2;
                this._leftPerpendicular(n);
                const a = [t[0] + n[0] * o, t[1] + n[1] * o];
                n = this._sub(t, a);
                const h = Math.cos(Math.PI / 18);
                let l = Math.sin(Math.PI / 18);
                o > 0 && (l = -l);
                const c = [t];
                for (let t = 1; t <= 18; t++)
                  this._rotateDirect(n, h, l), c.push(this._add(a, n));
                e.push(c);
                break;
              }
              case U.Em.HalfCircleExtended: {
                const r = this._cp2(s, 0, -2),
                  n = this._cp3(s, r, 1, -1);
                let o;
                if (t >= 4) o = s[3];
                else {
                  const t = this._sub(i, r);
                  o = this._add(n, t);
                }
                const a = this._dist(r, n) / 2 / 0.75,
                  h = this._sub(r, i);
                this._normalize(h, a);
                const l = this._sub(n, o);
                this._normalize(l, a);
                const c = [o, n];
                e.push(c);
                const u = [this._clone(n)];
                this._addBezier3(u, n, this._add(n, l), this._add(r, h), r, 4),
                  u.push(i),
                  e.push(u);
                break;
              }
              case U.Em.OpenCircle: {
                const t = this._cp2(s, -2, 0),
                  r = this._sub(t, i),
                  n = Math.cos(Math.PI / 18),
                  o = -Math.sin(Math.PI / 18),
                  a = [t];
                for (let t = 1; t <= 33; t++)
                  this._rotateDirect(r, n, o), a.push(this._add(i, r));
                e.push(a);
                break;
              }
              case U.Em.CoverageEdgesWithTicks: {
                const r = this._cp2(s, 0, -1);
                let n, o;
                if (t >= 3) n = s[2];
                else {
                  const t = this._sub(r, i),
                    e = this._leftPerp(t);
                  n = [i[0] + e[0] - 0.25 * t[0], i[1] + e[1] - 0.25 * t[1]];
                }
                if (t >= 4) o = s[3];
                else {
                  const t = this._mid(i, r),
                    e = this._sub(i, r);
                  this._normalize(e), this._leftPerpendicular(e);
                  const s = this._crossProduct(e, this._sub(n, t));
                  this._rightPerpendicular(e),
                    (o = [n[0] + e[0] * s * 2, n[1] + e[1] * s * 2]);
                }
                const a = this._sub(r, i);
                let h, l;
                (h =
                  this._crossProduct(a, this._sub(n, i)) > 0
                    ? this._rightPerp(a)
                    : this._leftPerp(a)),
                  (l = []),
                  l.push(n),
                  l.push(i),
                  l.push([i[0] + (h[0] - a[0]) / 3, i[1] + (h[1] - a[1]) / 3]),
                  e.push(l),
                  (h =
                    this._crossProduct(a, this._sub(o, r)) > 0
                      ? this._rightPerp(h)
                      : this._leftPerp(a)),
                  (l = []),
                  l.push([r[0] + (h[0] + a[0]) / 3, r[1] + (h[1] + a[1]) / 3]),
                  l.push(r),
                  l.push(o),
                  e.push(l);
                break;
              }
              case U.Em.GapExtentWithDoubleTicks: {
                const r = this._cp2(s, 0, 2),
                  n = this._cp3(s, r, 0, 1);
                let o;
                if (t >= 4) o = s[3];
                else {
                  const t = this._sub(r, i);
                  o = this._add(n, t);
                }
                this._addAngledTicks(e, i, r, this._mid(n, o)),
                  this._addAngledTicks(e, n, o, this._mid(i, r));
                break;
              }
              case U.Em.GapExtentMidline: {
                const r = this._cp2(s, 2, 0),
                  n = this._cp3(s, r, 0, 1);
                let o;
                if (t >= 4) o = s[3];
                else {
                  const t = this._sub(r, i);
                  o = this._add(n, t);
                }
                const a = [];
                a.push(this._mid(i, n)), a.push(this._mid(r, o)), e.push(a);
                break;
              }
              case U.Em.Chevron: {
                const r = this._cp2(s, -1, -1);
                let n;
                if (t >= 3) n = s[2];
                else {
                  const t = this._sub(r, i);
                  this._leftPerpendicular(t), (n = this._add(i, t));
                }
                e.push([r, this._makeCtrlPt(i), n]);
                break;
              }
              case U.Em.PerpendicularWithArc: {
                const t = this._cp2(s, 0, -2),
                  r = this._cp3(s, t, 0.5, -1);
                let n = this._sub(t, i);
                const o = this._norm(n);
                (n[0] /= o), (n[1] /= o);
                const a = this._crossProduct(n, this._sub(r, i));
                let h = this._dotProduct(n, this._sub(r, i));
                h < 0.05 * o ? (h = 0.05 * o) : h > 0.95 * o && (h = 0.95 * o);
                const l = [i[0] + n[0] * h, i[1] + n[1] * h];
                this._leftPerpendicular(n);
                let c = [];
                c.push([l[0] - n[0] * a, l[1] - n[1] * a]),
                  c.push([l[0] + n[0] * a, l[1] + n[1] * a]),
                  e.push(c);
                const u = [t[0] + n[0] * a, t[1] + n[1] * a];
                n = this._sub(t, u);
                const f = Math.cos(Math.PI / 18);
                let _ = Math.sin(Math.PI / 18);
                a < 0 && (_ = -_), (c = [i, t]);
                for (let t = 1; t <= 9; t++)
                  this._rotateDirect(n, f, _), c.push(this._add(u, n));
                e.push(c);
                break;
              }
              case U.Em.ClosedHalfCircle: {
                const t = this._cp2(s, 2, 0),
                  r = this._mid(i, t),
                  n = this._sub(t, r),
                  o = Math.cos(Math.PI / 18),
                  a = Math.sin(Math.PI / 18),
                  h = [i, t];
                for (let t = 1; t <= 18; t++)
                  this._rotateDirect(n, o, a), h.push(this._add(r, n));
                e.push(h);
                break;
              }
              case U.Em.TripleParallelExtended: {
                const t = this._cp2(s, 0, -2),
                  r = this._cp3(s, t, 1, -2),
                  n = this._mid(i, t),
                  o = this._sub(r, t);
                this._normalize(o);
                const a = Math.abs(this._crossProduct(o, this._sub(n, t))) / 2,
                  h = this._dist(t, r),
                  l = [t, i];
                l.push([i[0] + o[0] * h * 0.5, i[1] + o[1] * h * 0.5]),
                  e.push(l);
                const c = [];
                c.push([n[0] - o[0] * a, n[1] - o[1] * a]),
                  c.push([n[0] + o[0] * h * 0.375, n[1] + o[1] * h * 0.375]),
                  Pt(c[c.length - 1], 1),
                  c.push([n[0] + o[0] * h * 0.75, n[1] + o[1] * h * 0.75]),
                  e.push(c);
                const u = [t, r];
                e.push(u);
                break;
              }
              case U.Em.ParallelWithTicks: {
                const t = this._cp2(s, 3, 0),
                  r = this._cp3(s, t, 0.5, -1),
                  n = this._sub(r, t);
                this._normalize(n);
                const o = this._crossProduct(n, this._sub(r, i));
                this._leftPerpendicular(n),
                  this._addAngledTicks(e, i, t, r),
                  this._addAngledTicks(
                    e,
                    this._mix(i, 1, n, o),
                    this._mix(t, 1, n, o),
                    this._mid(i, t),
                  );
                break;
              }
              case U.Em.Parallel: {
                const t = this._cp2(s, 3, 0),
                  r = this._cp3(s, t, 0.5, -1),
                  n = this._sub(t, i);
                this._normalize(n);
                const o = this._leftPerp(n),
                  a = this._crossProduct(n, this._sub(r, i));
                let h = [i, t];
                e.push(h),
                  (h = []),
                  h.push([i[0] + o[0] * a, i[1] + o[1] * a]),
                  h.push([t[0] + o[0] * a, t[1] + o[1] * a]),
                  e.push(h);
                break;
              }
              case U.Em.PerpendicularToFirstSegment: {
                const t = this._cp2(s, 3, 0),
                  r = this._cp3(s, t, 0.5, -1),
                  n = this._mid(i, t),
                  o = this._sub(t, i);
                this._normalize(o);
                const a = this._crossProduct(o, this._sub(r, i));
                this._leftPerpendicular(o);
                const h = [];
                h.push([n[0] - o[0] * a * 0.25, n[1] - o[1] * a * 0.25]),
                  h.push([n[0] + o[0] * a * 1.25, n[1] + o[1] * a * 1.25]),
                  e.push(h);
                break;
              }
              case U.Em.ParallelOffset: {
                const t = this._cp2(s, 3, 0),
                  r = this._cp3(s, t, 0.5, -1),
                  n = this._sub(t, i);
                this._normalize(n);
                const o = this._crossProduct(n, this._sub(r, i));
                this._leftPerpendicular(n);
                const a = [];
                a.push([i[0] - n[0] * o, i[1] - n[1] * o]),
                  a.push([t[0] - n[0] * o, t[1] - n[1] * o]),
                  e.push(a);
                const h = [];
                h.push([i[0] + n[0] * o, i[1] + n[1] * o]),
                  h.push([t[0] + n[0] * o, t[1] + n[1] * o]),
                  e.push(h);
                break;
              }
              case U.Em.OffsetOpposite: {
                const t = this._cp2(s, 3, 0),
                  r = this._cp3(s, t, 0.5, -1),
                  n = this._sub(t, i);
                this._normalize(n);
                const o = this._crossProduct(n, this._sub(r, i));
                this._leftPerpendicular(n);
                const a = [];
                a.push([i[0] - n[0] * o, i[1] - n[1] * o]),
                  a.push([t[0] - n[0] * o, t[1] - n[1] * o]),
                  e.push(a);
                break;
              }
              case U.Em.OffsetSame: {
                const t = this._cp2(s, 3, 0),
                  r = this._cp3(s, t, 0.5, -1),
                  n = this._sub(t, i);
                this._normalize(n);
                const o = this._crossProduct(n, this._sub(r, i));
                this._leftPerpendicular(n);
                const a = [];
                a.push([i[0] + n[0] * o, i[1] + n[1] * o]),
                  a.push([t[0] + n[0] * o, t[1] + n[1] * o]),
                  e.push(a);
                break;
              }
              case U.Em.CircleWithArc: {
                let r = this._cp2(s, 3, 0);
                const n = this._cp3(s, r, 0.5, -1);
                let o, a;
                if (t >= 4)
                  (o = s[3]),
                    (a =
                      this._crossProduct(this._sub(o, r), this._sub(n, r)) > 0);
                else {
                  (o = r),
                    (a =
                      this._crossProduct(this._sub(o, i), this._sub(n, i)) > 0);
                  const t = 24 * this._geomUnitsPerPoint,
                    e = this._sub(o, i);
                  this._normalize(e, t);
                  const s = Math.sqrt(2) / 2;
                  this._rotateDirect(e, s, a ? s : -s), (r = this._add(i, e));
                }
                const h = this._sub(r, i),
                  l = Math.cos(Math.PI / 18),
                  c = Math.sin(Math.PI / 18),
                  u = [r];
                for (let t = 1; t <= 36; t++)
                  this._rotateDirect(h, l, c), u.push(this._add(i, h));
                this._add90DegArc(u, r, o, n, a),
                  Pt(u[u.length - 8], 1),
                  e.push(u);
                break;
              }
              case U.Em.DoubleJog: {
                let r,
                  n,
                  o = this._cp2(s, -3, 1);
                if (
                  ((r = t >= 3 ? s[2] : this._add(i, this._sub(i, o))), t >= 4)
                )
                  n = s[3];
                else {
                  const t = i;
                  (i = o), (n = r);
                  const e = this._dist(i, t),
                    s = this._dist(n, t);
                  let a = 30 * this._geomUnitsPerPoint;
                  0.5 * e < a && (a = 0.5 * e),
                    0.5 * s < a && (a = 0.5 * s),
                    (o = this._mix(i, a / e, t, (e - a) / e)),
                    (r = this._mix(n, a / s, t, (s - a) / s));
                }
                const a = this._mid(i, o),
                  h = this._mid(n, r),
                  l = this._dist(i, o),
                  c = this._dist(r, n);
                let u = Math.min(l, c) / 8;
                u = Math.min(u, 24 * this._geomUnitsPerPoint);
                const f = Math.cos(Math.PI / 4);
                let _ = this._sub(i, o);
                this._normalize(_, u),
                  this._crossProduct(_, this._sub(n, o)) > 0
                    ? this._rotateDirect(_, f, -f)
                    : this._rotateDirect(_, f, f);
                let d = [];
                d.push(o),
                  d.push(this._add(a, _)),
                  d.push(this._sub(a, _)),
                  d.push(i),
                  e.push(d),
                  (_ = this._sub(n, r)),
                  this._normalize(_, u),
                  this._crossProduct(_, this._sub(i, r)) < 0
                    ? this._rotateDirect(_, f, f)
                    : this._rotateDirect(_, f, -f),
                  (d = []),
                  d.push(r),
                  d.push(this._add(h, _)),
                  d.push(this._sub(h, _)),
                  d.push(n),
                  e.push(d);
                break;
              }
              case U.Em.PerpendicularOffset: {
                const t = this._cp2(s, -4, 1),
                  r = this._cp3(s, t, 0.882353, -1.94),
                  n = this._sub(r, t);
                this._crossProduct(n, this._sub(i, t)) > 0
                  ? this._rightPerpendicular(n)
                  : this._leftPerpendicular(n);
                const o = [n[0] / 8, n[1] / 8],
                  a = this._sub(this._mid(t, r), o);
                e.push([a, i]);
                break;
              }
              case U.Em.LineExcludingLastSegment: {
                const t = this._arrowPath(s),
                  i = [];
                let r = t.length - 2;
                for (; r--; ) i.push(t[r]);
                e.push(i);
                break;
              }
              case U.Em.MultivertexArrow: {
                const t = this._arrowPath(s),
                  i = [];
                this._addArrow(i, t, !1), e.push(i);
                break;
              }
              case U.Em.CrossedArrow: {
                const t = this._arrowPath(s),
                  i = [];
                this._addArrow(i, t, !0), e.push(i);
                break;
              }
              case U.Em.ChevronArrow: {
                const [t, r] = this._arrowLastSeg(s),
                  n = 10 * this._geomUnitsPerPoint,
                  o = this._sub(i, t);
                this._normalize(o);
                const a = this._crossProduct(o, this._sub(r, t)),
                  h = this._leftPerp(o),
                  l = [r[0] - h[0] * a * 2, r[1] - h[1] * a * 2],
                  c = [];
                c.push([r[0] + o[0] * n, r[1] + o[1] * n]),
                  c.push(i),
                  c.push([l[0] + o[0] * n, l[1] + o[1] * n]),
                  e.push(c);
                break;
              }
              case U.Em.ChevronArrowOffset: {
                const [t, r] = this._arrowLastSeg(s),
                  n = this._sub(i, t);
                this._normalize(n);
                const o = this._crossProduct(n, this._sub(r, t));
                this._leftPerpendicular(n);
                const a = [r[0] - n[0] * o, r[1] - n[1] * o],
                  h = [];
                h.push([a[0] + n[0] * o * 0.5, a[1] + n[1] * o * 0.5]),
                  h.push(this._mid(a, i)),
                  h.push([a[0] - n[0] * o * 0.5, a[1] - n[1] * o * 0.5]),
                  e.push(h);
                break;
              }
              case U.Em.PartialFirstSegment: {
                const [t, r] = this._arrowLastSeg(s),
                  n = this._sub(i, t);
                this._normalize(n);
                const o = this._crossProduct(n, this._sub(r, t));
                this._leftPerpendicular(n);
                const a = [r[0] - n[0] * o, r[1] - n[1] * o];
                e.push([t, a]);
                break;
              }
              case U.Em.Arch: {
                const t = this._cp2(s, 0, -1),
                  r = this._cp3(s, t, 0.5, 1),
                  n = this._sub(i, t),
                  o = this._mix(r, 1, n, 0.55),
                  a = this._mix(r, 1, n, -0.55),
                  h = [i];
                this._addBezier2(h, i, o, r, 4),
                  this._addBezier2(h, r, a, t, 4),
                  e.push(h);
                break;
              }
              case U.Em.CurvedParallelTicks: {
                const t = this._cp2(s, -4, 1),
                  r = this._cp3(s, t, 0.882353, -1.94),
                  n = this._sub(r, t);
                this._crossProduct(n, this._sub(i, t)) > 0
                  ? this._rightPerpendicular(n)
                  : this._leftPerpendicular(n);
                const o = [n[0] / 8, n[1] / 8],
                  a = this._sub(this._mid(t, r), o),
                  h = this._sub(this._mix(t, 0.75, r, 0.25), o),
                  l = this._sub(this._mix(t, 0.25, r, 0.75), o),
                  c = [t];
                this._addBezier2(c, t, h, a, 3),
                  this._addBezier2(c, a, l, r, 3),
                  e.push(c);
                for (let t = 0; t < 8; t++) {
                  const s = c[2 * t + 1],
                    i = [this._clone(s)];
                  i.push(this._add(s, [n[0] / 4, n[1] / 4])), e.push(i);
                }
                break;
              }
              case U.Em.Arc90Degrees: {
                const t = this._cp2(s, 0, -1),
                  r = this._cp3(s, t, 0.5, 1),
                  n = [t];
                this._add90DegArc(n, t, i, r), e.push(n);
                break;
              }
              case U.Em.FullGeometry:
              default:
                e.push(s);
            }
          }
          return e;
        }
      }
      class Gt {
        static local() {
          return null === Gt.instance && (Gt.instance = new Gt()), Gt.instance;
        }
        execute(t, e, s, i) {
          return new Dt(t, e, s);
        }
      }
      Gt.instance = null;
      class Dt extends Ct {
        constructor(t, e, s) {
          super(t, !0, !0),
            (this._curveHelper = new Et()),
            (this._beginCut = (void 0 !== e.beginCut ? e.beginCut : 1) * s),
            (this._endCut = (void 0 !== e.endCut ? e.endCut : 1) * s),
            (this._middleCut = (void 0 !== e.middleCut ? e.middleCut : 0) * s),
            (this._invert = void 0 !== e.invert && e.invert),
            this._beginCut < 0 && (this._beginCut = 0),
            this._endCut < 0 && (this._endCut = 0),
            this._middleCut < 0 && (this._middleCut = 0);
        }
        processPath(t) {
          const e = this._beginCut,
            s = this._endCut,
            i = this._middleCut,
            r = this._curveHelper.calculatePathLength(t),
            n = [];
          if (this._invert)
            if (0 === e && 0 === s && 0 === i);
            else if (e + s + i >= r) n.push(t);
            else {
              let o = this._curveHelper.getSubCurve(t, 0, e);
              o && n.push(o),
                (o = this._curveHelper.getSubCurve(
                  t,
                  0.5 * (r - i),
                  0.5 * (r + i),
                )),
                o && n.push(o),
                (o = this._curveHelper.getSubCurve(t, r - s, s)),
                o && n.push(o);
            }
          else if (0 === e && 0 === s && 0 === i) n.push(t);
          else if (e + s + i >= r);
          else if (0 === i) {
            const i = this._curveHelper.getSubCurve(t, e, r - s);
            i && n.push(i);
          } else {
            let o = this._curveHelper.getSubCurve(t, e, 0.5 * (r - i));
            o && n.push(o),
              (o = this._curveHelper.getSubCurve(t, 0.5 * (r + i), r - s)),
              o && n.push(o);
          }
          return 0 === n.length ? null : { paths: n };
        }
      }
      class Bt {
        constructor() {
          (this._values = []),
            (this.extPtGap = 0),
            (this.ctrlPtGap = 0),
            (this._length = 0),
            (this._currentValue = 0);
        }
        isEmpty() {
          return 0 === this._values.length;
        }
        size() {
          return this._values.length;
        }
        init(t, e, s = !0) {
          if ((this._setEmpty(), !t || 0 === t.length)) return !1;
          for (let e = 0; e < t.length; e++) {
            let i = Math.abs(t[e]);
            s && i < 1e-7 && (i = 1e-7),
              this._values.push(i),
              (this._length += i);
          }
          return (
            e && 1 & t.length && (this._length *= 2),
            0 !== this._length &&
              ((this.ctrlPtGap = this.extPtGap = 0),
              (this._currentValue = -1),
              !0)
          );
        }
        scale(t) {
          const e = this._values ? this._values.length : 0;
          for (let s = 0; s < e; ++s) this._values[s] *= t;
          (this._length *= t), (this.extPtGap *= t), (this.ctrlPtGap *= t);
        }
        addValue(t) {
          (this._length += t), this._values.push(t);
        }
        firstValue() {
          return this._values[0];
        }
        lastValue() {
          return this._values[this._values.length - 1];
        }
        nextValue() {
          return (
            this._currentValue++,
            this._currentValue === this._values.length &&
              (this._currentValue = 0),
            this._values[this._currentValue]
          );
        }
        reset() {
          this._currentValue = -1;
        }
        length() {
          return this._length;
        }
        _setEmpty() {
          (this.extPtGap = this.ctrlPtGap = this._length = 0),
            (this._currentValue = -1),
            (this._values.length = 0);
        }
      }
      var Xt, Ut;
      ((Ut = Xt || (Xt = {}))[(Ut.FAIL = 0)] = 'FAIL'),
        (Ut[(Ut.END = 1)] = 'END'),
        (Ut[(Ut.CONTINUE = 2)] = 'CONTINUE');
      class Ht {
        constructor() {
          this.reset();
        }
        reset() {
          (this.segment = -1),
            (this.segmentLength = 0),
            (this.abscissa = 0),
            (this.isPathEnd = !1),
            (this.isPartEnd = !1);
        }
        isValid() {
          return -1 !== this.segment;
        }
        copyTo(t) {
          (t.segment = this.segment),
            (t.segmentLength = this.segmentLength),
            (t.abscissa = this.abscissa),
            (t.isPathEnd = this.isPathEnd),
            (t.isPartEnd = this.isPartEnd);
        }
      }
      class Yt extends Et {
        constructor(t = 0, e = !1) {
          super(t, e),
            (this._tolerance = Tt),
            (this._currentPosition = new Ht());
        }
        updateTolerance(t) {
          this._tolerance = Tt * t;
        }
        init(t, e, s = !0) {
          return (
            s
              ? ((this._patternLength = e.length()),
                (this._partExtPtGap = e.extPtGap),
                (this._partCtrlPtGap = e.ctrlPtGap))
              : ((this._patternLength = 0),
                (this._partExtPtGap = 0),
                (this._partCtrlPtGap = 0)),
            this._currentPosition.reset(),
            (this._partSegCount = 0),
            (this._path = t),
            (this._seg = -1),
            this._setPosAtNextPart()
          );
        }
        curPositionIsValid() {
          return this._currentPosition.isValid();
        }
        nextPosition(t, e = Xt.FAIL) {
          const s = new Ht();
          return (
            !!this._nextPosition(t, s, null, e) &&
            (s.copyTo(this._currentPosition), !0)
          );
        }
        curPointAndAngle(t) {
          t.pt = this._getPoint(this._currentPosition);
          const [e, s] = this._getAngle(this._currentPosition);
          (t.ca = e), (t.sa = s);
        }
        nextPointAndAngle(t, e, s = Xt.FAIL) {
          const i = new Ht();
          if (!this._nextPosition(t, i, null, s)) return !1;
          i.copyTo(this._currentPosition), (e.pt = this._getPoint(i));
          const [r, n] = this._getAngle(i);
          return (e.ca = r), (e.sa = n), !0;
        }
        nextCurve(t) {
          if (0 === t) return null;
          const e = [],
            s = new Ht();
          return this._nextPosition(t, s, e, Xt.END)
            ? (s.copyTo(this._currentPosition), e)
            : null;
        }
        isPathEnd() {
          return this._currentPosition.isPathEnd;
        }
        getPathEnd() {
          if (-1 === this._currentPosition.segment)
            throw new Error('missing segment');
          return this._path[this._currentPosition.segment + 1];
        }
        _nextPosition(t, e, s, i) {
          if (this._currentPosition.isPathEnd) return !1;
          let r = this._currentPosition.abscissa;
          for (
            this._currentPosition.segmentLength > 0 &&
              (r /= this._currentPosition.segmentLength),
              this._currentPosition.copyTo(e);
            e.abscissa + t * this._partLengthRatio >
            e.segmentLength + this._tolerance;

          ) {
            if (s) {
              if (0 === s.length)
                if (0 === r) {
                  const t = this._path[e.segment];
                  s.push([t[0], t[1]]);
                } else s.push(this.getSegCoord2D(this._path, e.segment, r));
              const t = this._path[e.segment + 1];
              s.push([t[0], t[1]]);
            }
            if (
              ((r = 0),
              (t -= (e.segmentLength - e.abscissa) / this._partLengthRatio),
              this._partSegCount)
            )
              (e.segment = this._nextSegment()),
                (e.segmentLength = this.calculateSegLength(
                  this._path,
                  e.segment,
                )),
                (e.abscissa = 0),
                this._partSegCount--;
            else {
              if (!this._setPosAtNextPart())
                return (
                  i !== Xt.FAIL &&
                  ((e.segmentLength = this.calculateSegLength(
                    this._path,
                    e.segment,
                  )),
                  (e.isPartEnd = !0),
                  i === Xt.END
                    ? ((e.abscissa = e.segmentLength), (e.isPathEnd = !0))
                    : (e.abscissa = e.segmentLength + t),
                  !0)
                );
              this._currentPosition.copyTo(e);
            }
          }
          if (((e.abscissa += t * this._partLengthRatio), s)) {
            if (0 === s.length)
              if (0 === r) {
                const t = this._path[e.segment];
                s.push([t[0], t[1]]);
              } else s.push(this.getSegCoord2D(this._path, e.segment, r));
            const t = e.abscissa / e.segmentLength;
            if (1 === t) {
              const t = this._path[e.segment + 1];
              s.push([t[0], t[1]]);
            } else s.push(this.getSegCoord2D(this._path, e.segment, t));
          }
          return (
            this._partSegCount ||
              (Math.abs(e.abscissa - e.segmentLength) < this._tolerance &&
                ((e.isPathEnd = this._partIsLast), (e.isPartEnd = !0))),
            !0
          );
        }
        _getPoint(t) {
          if (-1 === t.segment) throw new Error('missing segment');
          const e = t.segmentLength <= 0 ? 0 : t.abscissa / t.segmentLength;
          return this.getSegCoord2D(this._path, t.segment, e);
        }
        _getAngle(t) {
          if (-1 === t.segment) throw new Error('missing segment');
          const e = t.segmentLength <= 0 ? 0 : t.abscissa / t.segmentLength;
          return this.getSegAngleCS(this._path, t.segment, e);
        }
        _setPosAtNextPart() {
          for (; this._partSegCount; )
            this._hasNextSegment() && this._nextSegment(), this._partSegCount--;
          if (!this._hasNextSegment()) return !1;
          for (
            this._partLength = 0, this._partIsLast = !0, this._partSegCount = 0;
            this._hasNextSegment();

          )
            if (
              ((this._partLength += this.calculateSegLength(
                this._path,
                this._nextSegment(),
              )),
              this._partSegCount++,
              1 === St(this._path[this._getEndPointIndex()]))
            ) {
              this._partIsLast = !this._hasNextSegment();
              break;
            }
          let t = this._partSegCount;
          for (; t; ) this._previousSegment(), --t;
          (this._currentPosition.segment = this._nextSegment()),
            (this._currentPosition.segmentLength = this.calculateSegLength(
              this._path,
              this._currentPosition.segment,
            )),
            (this._currentPosition.abscissa = 0),
            (this._currentPosition.isPathEnd = this._currentPosition.isPartEnd =
              !1),
            --this._partSegCount;
          const e = this._getStartPointIndex();
          this._ctrlPtBegin = 1 === St(this._path[e]);
          let s = e + this._partSegCount + 1;
          if (
            (s >= this._path.length && (s = 0),
            (this._ctrlPtEnd = 1 === St(this._path[s])),
            this._patternLength > 0)
          ) {
            const t = this._ctrlPtBegin
                ? this._partCtrlPtGap
                : this._partExtPtGap,
              e = this._ctrlPtEnd ? this._partCtrlPtGap : this._partExtPtGap;
            let s = Math.round(
              (this._partLength - (t + e)) / this._patternLength,
            );
            s <= 0 && (s = t + e > 0 ? 0 : 1),
              (this._partLengthRatio =
                this._partLength / (t + e + s * this._patternLength)),
              this._partLengthRatio < 0.01 && (this._partLengthRatio = 1);
          } else this._partLengthRatio = 1;
          return !0;
        }
        _hasNextSegment() {
          return this._seg < this._path.length - 2;
        }
        _previousSegment() {
          return --this._seg;
        }
        _nextSegment() {
          return ++this._seg;
        }
        _getStartPointIndex() {
          return this._seg;
        }
        _getEndPointIndex() {
          return this._seg + 1;
        }
      }
      class Jt {
        static local() {
          return null === Jt.instance && (Jt.instance = new Jt()), Jt.instance;
        }
        execute(t, e, s, i) {
          return new Zt(t, e, s);
        }
      }
      Jt.instance = null;
      class Zt extends Ct {
        constructor(t, e, s) {
          var i, r;
          super(t, !0, !0),
            (this._walker = new Yt()),
            this._walker.updateTolerance(s),
            (this._endings = e.lineDashEnding),
            (this._customDashPos =
              -(null != (i = e.offsetAlongLine) ? i : 0) * s),
            (this._offsetAtEnd =
              (null != (r = e.customEndingOffset) ? r : 0) * s),
            (this._pattern = new Bt()),
            this._pattern.init(e.dashTemplate, !0),
            this._pattern.scale(s);
        }
        processPath(t) {
          if (0 === this._pattern.length())
            return (this.iteratePath = !1), { paths: [t] };
          if (!this.iteratePath) {
            let e = !0;
            switch (this._endings) {
              case U.sj.HalfPattern:
              case U.sj.HalfGap:
              default:
                this._pattern.extPtGap = 0;
                break;
              case U.sj.FullPattern:
                this.isClosed ||
                  (this._pattern.extPtGap = 0.5 * this._pattern.firstValue());
                break;
              case U.sj.FullGap:
                this.isClosed ||
                  (this._pattern.extPtGap = 0.5 * this._pattern.lastValue());
                break;
              case U.sj.NoConstraint:
                this.isClosed || (e = !1);
                break;
              case U.sj.Custom:
                this.isClosed ||
                  (this._pattern.extPtGap = 0.5 * this._offsetAtEnd);
            }
            const s = this._walker.calculatePathLength(t);
            if (this._pattern.isEmpty() || s < 0.1 * this._pattern.length())
              return { paths: [t] };
            if (!this._walker.init(t, this._pattern, e)) return { paths: [t] };
          }
          let e;
          if (this.iteratePath) e = this._pattern.nextValue();
          else {
            let t;
            switch (this._endings) {
              case U.sj.HalfPattern:
              default:
                t = 0.5 * this._pattern.firstValue();
                break;
              case U.sj.HalfGap:
                t = 0.5 * -this._pattern.lastValue();
                break;
              case U.sj.FullGap:
                t = -this._pattern.lastValue();
                break;
              case U.sj.FullPattern:
                t = 0;
                break;
              case U.sj.NoConstraint:
              case U.sj.Custom:
                t = -this._customDashPos;
            }
            let s = t / this._pattern.length();
            (s -= Math.floor(s)),
              (t = s * this._pattern.length()),
              this._pattern.reset(),
              (e = this._pattern.nextValue());
            let i = !1;
            for (; t >= e; )
              (t -= e), (e = this._pattern.nextValue()), (i = !i);
            (e -= t),
              i
                ? (this._walker.nextPosition(e),
                  (e = this._pattern.nextValue()))
                : this.isClosed &&
                  ((this._firstCurve = this._walker.nextCurve(e)),
                  (e = this._pattern.nextValue()),
                  this._walker.nextPosition(e),
                  (e = this._pattern.nextValue()));
          }
          let s = this._walker.nextCurve(e);
          return (
            s
              ? this._walker.isPathEnd()
                ? ((this.iteratePath = !1),
                  this._firstCurve &&
                    (this._firstCurve.splice(0, 1),
                    zt.mergePath(s, this._firstCurve),
                    (this._firstCurve = null)))
                : ((e = this._pattern.nextValue()),
                  !this._walker.nextPosition(e) || this._walker.isPathEnd()
                    ? ((this.iteratePath = !1),
                      this._firstCurve &&
                        ((s = this._firstCurve), (this._firstCurve = null)))
                    : (this.iteratePath = !0))
              : ((this.iteratePath = !1),
                (s = this._firstCurve),
                (this._firstCurve = null)),
            { paths: [s] }
          );
        }
      }
      class qt {
        static local() {
          return null === qt.instance && (qt.instance = new qt()), qt.instance;
        }
        execute(t, e, s, i) {
          return new Kt(t, e, s);
        }
      }
      qt.instance = null;
      class Kt {
        constructor(t, e, s) {
          switch (
            ((this._inputGeometries = t),
            (this._curveHelper = new Et()),
            (this._width = (void 0 !== e.width ? e.width : 2) * s),
            e.method)
          ) {
            case U.$y.Mitered:
            default:
              this._method = U.id.Mitered;
              break;
            case U.$y.Bevelled:
              this._method = U.id.Bevelled;
              break;
            case U.$y.Rounded:
            case U.$y.TrueBuffer:
              this._method = U.id.Rounded;
              break;
            case U.$y.Square:
              this._method = U.id.Square;
          }
          (this._option = e.option), (this._offsetFlattenError = Tt * s);
        }
        next() {
          let t = this._inputGeometries.next();
          for (; t; ) {
            if ((0, ct.YX)(t) && this._width > 0) {
              if (
                Math.min(t.xmax - t.xmin, t.ymax - t.ymin) - 2 * this._width <
                0
              )
                return t;
              const e = [];
              return (
                e.push([
                  [t.xmin, t.ymin],
                  [t.xmin, t.ymax],
                  [t.xmax, t.ymax],
                  [t.xmax, t.ymin],
                  [t.xmin, t.ymin],
                ]),
                e.push([
                  [t.xmin + this._width, t.ymin + this._width],
                  [t.xmax - this._width, t.ymin + this._width],
                  [t.xmax - this._width, t.ymax - this._width],
                  [t.xmin + this._width, t.ymax - this._width],
                  [t.xmin + this._width, t.ymin + this._width],
                ]),
                { rings: e }
              );
            }
            if ((0, ct.oU)(t) && this._width > 0) {
              const e = [];
              for (const s of t.rings) {
                const t = this._curveHelper.calculatePathLength(s),
                  i = this._curveHelper.offset(
                    s,
                    this._width,
                    this._method,
                    4,
                    this._offsetFlattenError,
                  );
                i && (t < 0 && i.reverse(), e.push(i));
              }
              if (e.length) return { rings: e };
            }
            t = this._inputGeometries.next();
          }
          return null;
        }
      }
      class jt {
        static local() {
          return null === jt.instance && (jt.instance = new jt()), jt.instance;
        }
        execute(t, e, s, i) {
          return new $t(t, e, s);
        }
      }
      jt.instance = null;
      class $t extends Ct {
        constructor(t, e, s) {
          super(t, !1, !0),
            (this._curveHelper = new Et()),
            (this._length = (void 0 !== e.length ? e.length : 20) * s),
            (this._angle = void 0 !== e.angle ? e.angle : 225),
            (this._position = void 0 !== e.position ? e.position : 50),
            this._length < 0 && (this._length = -this._length),
            this._position < 20 && (this._position = 20),
            this._position > 80 && (this._position = 80),
            (this._mirror = !1);
        }
        processPath(t) {
          if (this._curveHelper.isEmpty(t, !1)) return null;
          const e = t[0],
            s = t[t.length - 1],
            i = [s[0] - e[0], s[1] - e[1]];
          this._curveHelper.normalize(i);
          const r = [
              e[0] + ((s[0] - e[0]) * this._position) / 100,
              e[1] + ((s[1] - e[1]) * this._position) / 100,
            ],
            n = Math.cos(((90 - this._angle) / 180) * Math.PI);
          let o = Math.sin(((90 - this._angle) / 180) * Math.PI);
          return (
            this._mirror && (o = -o),
            (this._mirror = !this._mirror),
            {
              paths: [
                [
                  e,
                  [
                    r[0] - (this._length / 2) * n,
                    r[1] - (this._length / 2) * o,
                  ],
                  [
                    r[0] + (this._length / 2) * n,
                    r[1] + (this._length / 2) * o,
                  ],
                  s,
                ],
              ],
            }
          );
        }
      }
      class Qt {
        static local() {
          return null === Qt.instance && (Qt.instance = new Qt()), Qt.instance;
        }
        execute(t, e, s, i) {
          return new te(t, e, s);
        }
      }
      Qt.instance = null;
      class te {
        constructor(t, e, s) {
          (this._inputGeometries = t),
            (this._offsetX = void 0 !== e.offsetX ? e.offsetX * s : 0),
            (this._offsetY = void 0 !== e.offsetY ? -e.offsetY * s : 0);
        }
        next() {
          let t = this._inputGeometries.next();
          for (; t; ) {
            if ((0, ct.YX)(t))
              return {
                xmin: t.xmin + this._offsetX,
                xmax: t.xmax + this._offsetX,
                ymin: t.ymin + this._offsetY,
                ymax: t.ymax + this._offsetY,
              };
            if ((0, ct.oU)(t)) {
              const e = (0, lt.d9)(t);
              return (
                this._moveMultipath(e.rings, this._offsetX, this._offsetY), e
              );
            }
            if ((0, ct.l9)(t)) {
              const e = (0, lt.d9)(t);
              return (
                this._moveMultipath(e.paths, this._offsetX, this._offsetY), e
              );
            }
            if ((0, ct.aW)(t)) {
              const e = (0, lt.d9)(t);
              return this._movePath(e.points, this._offsetX, this._offsetY), e;
            }
            if ((0, ct.wp)(t))
              return { x: t.x + this._offsetX, y: t.y + this._offsetY };
            t = this._inputGeometries.next();
          }
          return null;
        }
        _moveMultipath(t, e, s) {
          if (t) for (const i of t) this._movePath(i, e, s);
        }
        _movePath(t, e, s) {
          if (t) for (const i of t) (i[0] += e), (i[1] += s);
        }
      }
      class ee {
        static local() {
          return null === ee.instance && (ee.instance = new ee()), ee.instance;
        }
        execute(t, e, s, i) {
          return new se(t, e, s);
        }
      }
      ee.instance = null;
      class se {
        constructor(t, e, s) {
          var i;
          (this._inputGeometries = t),
            (this._curveHelper = new Et()),
            (this._offset = (null != (i = e.offset) ? i : 1) * s),
            (this._method = e.method),
            (this._option = e.option),
            (this._offsetFlattenError = Tt * s);
        }
        next() {
          let t = this._inputGeometries.next();
          for (; t; ) {
            if (0 === this._offset) return t;
            if ((0, ct.YX)(t)) {
              if (this._method === U.id.Rounded && this._offset > 0) {
                const e = [
                    [t.xmin, t.ymin],
                    [t.xmin, t.ymax],
                    [t.xmax, t.ymax],
                    [t.xmax, t.ymin],
                    [t.xmin, t.ymin],
                  ],
                  s = this._curveHelper.offset(
                    e,
                    -this._offset,
                    this._method,
                    4,
                    this._offsetFlattenError,
                  );
                return s ? { rings: [s] } : null;
              }
              if (
                Math.min(t.xmax - t.xmin, t.ymax - t.ymin) + 2 * this._offset >
                0
              )
                return {
                  xmin: t.xmin - this._offset,
                  xmax: t.xmax + this._offset,
                  ymin: t.ymin - this._offset,
                  ymax: t.ymax + this._offset,
                };
            }
            if ((0, ct.oU)(t)) {
              const e = [];
              for (const s of t.rings) {
                const t = this._curveHelper.offset(
                  s,
                  -this._offset,
                  this._method,
                  4,
                  this._offsetFlattenError,
                );
                t && e.push(t);
              }
              if (e.length) return { rings: e };
            }
            if ((0, ct.l9)(t)) {
              const e = [];
              for (const s of t.paths) {
                const t = this._curveHelper.offset(
                  s,
                  -this._offset,
                  this._method,
                  4,
                  this._offsetFlattenError,
                );
                t && e.push(t);
              }
              if (e.length) return { paths: e };
            }
            t = this._inputGeometries.next();
          }
          return null;
        }
      }
      class ie {
        static local() {
          return null === ie.instance && (ie.instance = new ie()), ie.instance;
        }
        execute(t, e, s, i) {
          return new re(t, e, s);
        }
      }
      ie.instance = null;
      class re {
        constructor(t, e, s) {
          (this._inputGeometries = t),
            (this._reverse = void 0 === e.reverse || e.reverse);
        }
        next() {
          let t = this._inputGeometries.next();
          for (; t; ) {
            if (!this._reverse) return t;
            if ((0, ct.l9)(t)) {
              const e = (0, lt.d9)(t);
              return vt(e.paths), e;
            }
            t = this._inputGeometries.next();
          }
          return null;
        }
      }
      var ne = s(20322);
      class oe {
        static local() {
          return null === oe.instance && (oe.instance = new oe()), oe.instance;
        }
        execute(t, e, s, i) {
          return new ae(t, e, s);
        }
      }
      oe.instance = null;
      class ae {
        constructor(t, e, s) {
          (this._inputGeometries = t),
            (this._rotateAngle =
              void 0 !== e.angle ? (e.angle * Math.PI) / 180 : 0);
        }
        next() {
          let t = this._inputGeometries.next();
          for (; t; ) {
            if (0 === this._rotateAngle) return t;
            const e = (0, T.Ue)();
            (0, ne.$P)(e, t);
            const s = (e[2] + e[0]) / 2,
              i = (e[3] + e[1]) / 2;
            if ((0, ct.YX)(t)) {
              const e = {
                rings: [
                  [
                    [t.xmin, t.ymin],
                    [t.xmin, t.ymax],
                    [t.xmax, t.ymax],
                    [t.xmax, t.ymin],
                    [t.xmin, t.ymin],
                  ],
                ],
              };
              return this._rotateMultipath(e.rings, s, i), e;
            }
            if ((0, ct.oU)(t)) {
              const e = (0, lt.d9)(t);
              return this._rotateMultipath(e.rings, s, i), e;
            }
            if ((0, ct.l9)(t)) {
              const e = (0, lt.d9)(t);
              return this._rotateMultipath(e.paths, s, i), e;
            }
            if ((0, ct.aW)(t)) {
              const e = (0, lt.d9)(t);
              return this._rotatePath(e.points, s, i), e;
            }
            if ((0, ct.wp)(t)) return t;
            t = this._inputGeometries.next();
          }
          return null;
        }
        _rotateMultipath(t, e, s) {
          if (t) for (const i of t) this._rotatePath(i, e, s);
        }
        _rotatePath(t, e, s) {
          if (t) {
            const i = Math.cos(this._rotateAngle),
              r = Math.sin(this._rotateAngle);
            for (const n of t) {
              const t = n[0] - e,
                o = n[1] - s;
              (n[0] = e + t * i - o * r), (n[1] = s + t * r + o * i);
            }
          }
        }
      }
      class he {
        static local() {
          return null === he.instance && (he.instance = new he()), he.instance;
        }
        execute(t, e, s, i) {
          return new le(t, e, s);
        }
      }
      he.instance = null;
      class le {
        constructor(t, e, s) {
          (this._inputGeometries = t),
            (this._xFactor = void 0 !== e.xScaleFactor ? e.xScaleFactor : 1.15),
            (this._yFactor = void 0 !== e.yScaleFactor ? e.yScaleFactor : 1.15);
        }
        next() {
          let t = this._inputGeometries.next();
          for (; t; ) {
            if (1 === this._xFactor && 1 === this._yFactor) return t;
            const e = (0, T.Ue)();
            (0, ne.$P)(e, t);
            const s = (e[2] + e[0]) / 2,
              i = (e[3] + e[1]) / 2;
            if ((0, ct.YX)(t)) {
              const e = {
                rings: [
                  [
                    [t.xmin, t.ymin],
                    [t.xmin, t.ymax],
                    [t.xmax, t.ymax],
                    [t.xmax, t.ymin],
                    [t.xmin, t.ymin],
                  ],
                ],
              };
              return this._scaleMultipath(e.rings, s, i), e;
            }
            if ((0, ct.oU)(t)) {
              const e = (0, lt.d9)(t);
              return this._scaleMultipath(e.rings, s, i), e;
            }
            if ((0, ct.l9)(t)) {
              const e = (0, lt.d9)(t);
              return this._scaleMultipath(e.paths, s, i), e;
            }
            if ((0, ct.aW)(t)) {
              const e = (0, lt.d9)(t);
              return this._scalePath(e.points, s, i), e;
            }
            if ((0, ct.wp)(t)) return t;
            t = this._inputGeometries.next();
          }
          return null;
        }
        _scaleMultipath(t, e, s) {
          if (t) for (const i of t) this._scalePath(i, e, s);
        }
        _scalePath(t, e, s) {
          if (t)
            for (const i of t) {
              const t = (i[0] - e) * this._xFactor,
                r = (i[1] - s) * this._yFactor;
              (i[0] = e + t), (i[1] = s + r);
            }
        }
      }
      class ce {
        static local() {
          return null === ce.instance && (ce.instance = new ce()), ce.instance;
        }
        execute(t, e, s, i) {
          return new ue(t, e, s);
        }
      }
      ce.instance = null;
      class ue {
        constructor(t, e, s) {
          (this._inputGeometries = t),
            (this._height = (void 0 !== e.amplitude ? e.amplitude : 2) * s),
            (this._period = (void 0 !== e.period ? e.period : 3) * s),
            (this._style = e.waveform),
            this._height <= 0 && (this._height = Math.abs(this._height)),
            this._period <= 0 && (this._period = Math.abs(this._period)),
            (this._pattern = new Bt()),
            this._pattern.addValue(this._period),
            this._pattern.addValue(this._period),
            (this._walker = new Yt()),
            this._walker.updateTolerance(s);
        }
        next() {
          let t = this._inputGeometries.next();
          for (; t; ) {
            if (0 === this._height || 0 === this._period) return t;
            if ((0, ct.l9)(t)) {
              const e = this._processGeom(t.paths);
              if (e.length) return { paths: e };
            }
            if ((0, ct.oU)(t)) {
              const e = this._processGeom(t.rings);
              if (e.length) return { rings: e };
            }
            t = this._inputGeometries.next();
          }
          return null;
        }
        _processGeom(t) {
          const e = [];
          for (const s of t)
            if (this._walker.init(s, this._pattern))
              switch (this._style) {
                case U.zQ.Sinus:
                default:
                  e.push(this._constructCurve(s, !1));
                  break;
                case U.zQ.Square:
                  e.push(this._constructSquare(s));
                  break;
                case U.zQ.Triangle:
                  e.push(this._constructTriangle(s));
                  break;
                case U.zQ.Random:
                  e.push(this._constructCurve(s, !0));
              }
            else e.push(s);
          return e;
        }
        _constructCurve(t, e) {
          const s = new zt(),
            i = this._walker.calculatePathLength(t);
          let r = Math.round(i / this._period);
          0 === r && (r = 1);
          const n = 16 * r + 1,
            o = i / r,
            a = this._period / 16,
            h = 1 / n,
            l = (2 * Math.PI * i) / o,
            c = 2 * Math.PI * Math.random(),
            u = 2 * Math.PI * Math.random(),
            f = 2 * Math.PI * Math.random(),
            _ = 0.75 - Math.random() / 2,
            d = 0.75 - Math.random() / 2,
            m = {};
          this._walker.curPointAndAngle(m), s.startPath(m.pt);
          let p = 0;
          for (;;) {
            if (!this._walker.nextPointAndAngle(a, m)) {
              s.lineTo(t[t.length - 1]);
              break;
            }
            {
              const t = p;
              let i;
              if (((p += h), e)) {
                const e =
                  (this._height / 2) * (1 + 0.3 * Math.sin(_ * l * t + c));
                (i = e * Math.sin(l * t + u)),
                  (i += e * Math.sin(d * l * t + f)),
                  (i /= 2);
              } else i = 0.5 * this._height * Math.sin(0.5 * l * t);
              s.lineTo([m.pt[0] - i * m.sa, m.pt[1] + i * m.ca]);
            }
          }
          return s.path();
        }
        _constructSquare(t) {
          const e = new zt(),
            s = this._walker.calculatePathLength(t);
          Math.round(s / this._period);
          let i = !0;
          for (;;) {
            let t = !1;
            if (this._walker.curPositionIsValid()) {
              const s = {};
              this._walker.curPointAndAngle(s);
              const r = {};
              if (this._walker.nextPointAndAngle(this._period, r)) {
                const n = {};
                this._walker.nextPointAndAngle(this._period, n) &&
                  (i ? (e.startPath(s.pt), (i = !1)) : e.lineTo(s.pt),
                  e.lineTo([
                    s.pt[0] - (this._height / 2) * s.sa,
                    s.pt[1] + (this._height / 2) * s.ca,
                  ]),
                  e.lineTo([
                    r.pt[0] - (this._height / 2) * r.sa,
                    r.pt[1] + (this._height / 2) * r.ca,
                  ]),
                  e.lineTo([
                    r.pt[0] + (this._height / 2) * r.sa,
                    r.pt[1] - (this._height / 2) * r.ca,
                  ]),
                  e.lineTo([
                    n.pt[0] + (this._height / 2) * n.sa,
                    n.pt[1] - (this._height / 2) * n.ca,
                  ]),
                  (t = !0));
              }
            }
            if (!t) {
              e.lineTo(this._walker.getPathEnd());
              break;
            }
          }
          return e.path();
        }
        _constructTriangle(t) {
          const e = new zt(),
            s = this._walker.calculatePathLength(t);
          Math.round(s / this._period);
          let i = !0;
          for (;;) {
            let t = !1;
            if (this._walker.curPositionIsValid()) {
              const s = {};
              this._walker.curPointAndAngle(s);
              const r = {};
              if (this._walker.nextPointAndAngle(this._period / 2, r)) {
                const n = {};
                this._walker.nextPointAndAngle(this._period, n) &&
                  (this._walker.nextPosition(this._period / 2) &&
                    (i ? (e.startPath(s.pt), (i = !1)) : e.lineTo(s.pt),
                    e.lineTo([
                      r.pt[0] - (this._height / 2) * r.sa,
                      r.pt[1] + (this._height / 2) * r.ca,
                    ]),
                    e.lineTo([
                      n.pt[0] + (this._height / 2) * n.sa,
                      n.pt[1] - (this._height / 2) * n.ca,
                    ])),
                  (t = !0));
              }
            }
            if (!t) {
              e.lineTo(this._walker.getPathEnd());
              break;
            }
          }
          return e.path();
        }
      }
      class fe {
        static local() {
          return null === fe.instance && (fe.instance = new fe()), fe.instance;
        }
        execute(t, e, s, i) {
          return new _e(t, e, s);
        }
      }
      fe.instance = null;
      class _e extends wt {
        constructor(t, e, s) {
          var i;
          super(t, !0, !0),
            (this._geometryWalker = new Yt()),
            this._geometryWalker.updateTolerance(s),
            (this._angleToLine = null == (i = e.angleToLine) || i),
            (this._offset = (e.offset ? e.offset : 0) * s),
            (this._originalEndings = e.endings),
            (this._offsetAtEnd =
              (e.customEndingOffset ? e.customEndingOffset : 0) * s),
            (this._position = -(e.offsetAlongLine ? e.offsetAlongLine : 0) * s),
            (this._pattern = new Bt()),
            this._pattern.init(e.placementTemplate, !1),
            this._pattern.scale(s),
            (this._endings = this._originalEndings);
        }
        processPath(t) {
          if (this._pattern.isEmpty()) return null;
          let e;
          if (this.iteratePath) e = this._pattern.nextValue();
          else {
            this._originalEndings === U.JS.WithFullGap && this.isClosed
              ? (this._endings = U.JS.WithMarkers)
              : (this._endings = this._originalEndings),
              (this._pattern.extPtGap = 0);
            let s,
              i = !0;
            switch (this._endings) {
              case U.JS.NoConstraint:
                (s = -this._position), (s = this._adjustPosition(s)), (i = !1);
                break;
              case U.JS.WithHalfGap:
              default:
                s = -this._pattern.lastValue() / 2;
                break;
              case U.JS.WithFullGap:
                (s = -this._pattern.lastValue()),
                  (this._pattern.extPtGap = this._pattern.lastValue());
                break;
              case U.JS.WithMarkers:
                s = 0;
                break;
              case U.JS.Custom:
                (s = -this._position),
                  (s = this._adjustPosition(s)),
                  (this._pattern.extPtGap = 0.5 * this._offsetAtEnd);
            }
            if (!this._geometryWalker.init(t, this._pattern, i)) return null;
            this._pattern.reset();
            let r = 0;
            for (; s > r; ) (s -= r), (r = this._pattern.nextValue());
            (r -= s), (e = r), (this.iteratePath = !0);
          }
          const s = {};
          return this._geometryWalker.nextPointAndAngle(e, s)
            ? this._endings === U.JS.WithFullGap &&
              this._geometryWalker.isPathEnd()
              ? ((this.iteratePath = !1), null)
              : this._endings === U.JS.WithMarkers &&
                this._geometryWalker.isPathEnd() &&
                ((this.iteratePath = !1), this.isClosed)
              ? null
              : (this.internalPlacement.setTranslate(
                  s.pt[0] - this._offset * s.sa,
                  s.pt[1] + this._offset * s.ca,
                ),
                this._angleToLine &&
                  this.internalPlacement.setRotateCS(s.ca, s.sa),
                this.internalPlacement)
            : ((this.iteratePath = !1), null);
        }
        _adjustPosition(t) {
          let e = t / this._pattern.length();
          return (e -= Math.floor(e)), e * this._pattern.length();
        }
      }
      class de {
        static local() {
          return null === de.instance && (de.instance = new de()), de.instance;
        }
        execute(t, e, s, i) {
          return new me(t, e, s);
        }
      }
      de.instance = null;
      class me extends wt {
        constructor(t, e, s) {
          super(t, !1, !0),
            (this._curveHelper = new Et()),
            (this._angleToLine = void 0 === e.angleToLine || e.angleToLine),
            (this._offset = void 0 !== e.offset ? e.offset * s : 0),
            (this._type = e.extremityPlacement),
            (this._position =
              void 0 !== e.offsetAlongLine ? e.offsetAlongLine * s : 0),
            (this._beginProcessed = !1);
        }
        processPath(t) {
          let e;
          switch (this._type) {
            case U.Tx.Both:
            default:
              this._beginProcessed
                ? ((e = this._atExtremities(t, this._position, !1)),
                  (this._beginProcessed = !1),
                  (this.iteratePath = !1))
                : ((e = this._atExtremities(t, this._position, !0)),
                  (this._beginProcessed = !0),
                  (this.iteratePath = !0));
              break;
            case U.Tx.JustBegin:
              e = this._atExtremities(t, this._position, !0);
              break;
            case U.Tx.JustEnd:
              e = this._atExtremities(t, this._position, !1);
            case U.Tx.None:
          }
          return e;
        }
        _atExtremities(t, e, s) {
          const i = t.length;
          if (i < 2) return null;
          const r = s ? 1 : i - 2,
            n = s ? i : -1,
            o = s ? 1 : -1;
          let a,
            h = 0,
            l = s ? t[0] : t[i - 1];
          for (let s = r; s !== n; s += o) {
            (a = l), (l = t[s]);
            const i = this._curveHelper.calculateLength(a, l);
            if (h + i > e) {
              const t = (e - h) / i,
                [s, r] = this._curveHelper.getAngleCS(a, l, t),
                n = bt(a, l, t);
              return (
                this.internalPlacement.setTranslate(
                  n[0] - this._offset * r,
                  n[1] + this._offset * s,
                ),
                this._angleToLine && this.internalPlacement.setRotateCS(-s, -r),
                this.internalPlacement
              );
            }
            h += i;
          }
          return null;
        }
      }
      class pe {
        static local() {
          return null === pe.instance && (pe.instance = new pe()), pe.instance;
        }
        execute(t, e, s, i) {
          return new ge(t, e, s);
        }
      }
      pe.instance = null;
      class ge extends wt {
        constructor(t, e, s) {
          super(t, !0, !0),
            (this._walker = new Yt()),
            this._walker.updateTolerance(s),
            (this._angleToLine = void 0 === e.angleToLine || e.angleToLine),
            (this._offset = void 0 !== e.offset ? e.offset * s : 0),
            (this._beginGap =
              void 0 !== e.beginPosition ? e.beginPosition * s : 0),
            (this._endGap = void 0 !== e.endPosition ? e.endPosition * s : 0),
            (this._flipFirst = void 0 === e.flipFirst || e.flipFirst),
            (this._pattern = new Bt()),
            this._pattern.init(e.positionArray, !1, !1),
            (this._subPathLen = 0),
            (this._posCount = this._pattern.size()),
            (this._isFirst = !0),
            (this._prevPos = 0);
        }
        processPath(t) {
          if (this._pattern.isEmpty()) return null;
          let e;
          if (this.iteratePath) {
            const t = this._pattern.nextValue() * this._subPathLen,
              s = this._beginGap + t;
            (e = s - this._prevPos), (this._prevPos = s);
          } else {
            if (
              ((this._posCount = this._pattern.size()),
              (this._isFirst = !0),
              (this._prevPos = 0),
              (this._subPathLen =
                this._walker.calculatePathLength(t) -
                this._beginGap -
                this._endGap),
              this._subPathLen < 0)
            )
              return (this.iteratePath = !1), null;
            if (!this._walker.init(t, this._pattern, !1)) return null;
            this._pattern.reset();
            const s = this._pattern.nextValue() * this._subPathLen,
              i = this._beginGap + s;
            (e = i - this._prevPos),
              (this._prevPos = i),
              (this.iteratePath = !0);
          }
          const s = {};
          if (!this._walker.nextPointAndAngle(e, s, Xt.END))
            return (this.iteratePath = !1), null;
          this.internalPlacement.setTranslate(
            s.pt[0] - this._offset * s.sa,
            s.pt[1] + this._offset * s.ca,
          );
          const i = this._isFirst && this._flipFirst;
          let r, n;
          return (
            this._angleToLine ? ((r = s.ca), (n = s.sa)) : ((r = 1), (n = 0)),
            i && ((r = -r), (n = -n)),
            this.internalPlacement.setRotateCS(r, n),
            (this._isFirst = !1),
            this._posCount--,
            0 === this._posCount && (this.iteratePath = !1),
            this.internalPlacement
          );
        }
      }
      class ye {
        static local() {
          return null === ye.instance && (ye.instance = new ye()), ye.instance;
        }
        execute(t, e, s, i) {
          return new xe(t, e, s, i);
        }
      }
      ye.instance = null;
      class xe {
        constructor(t, e, s, i) {
          if (
            ((this._xMin = 0),
            (this._xMax = 0),
            (this._yMin = 0),
            (this._yMax = 0),
            (this._currentX = 0),
            (this._currentY = 0),
            (this._stepX = (void 0 !== e.stepX ? Math.abs(e.stepX) : 16) * s),
            (this._stepY = (void 0 !== e.stepY ? Math.abs(e.stepY) : 16) * s),
            0 !== this._stepX &&
              0 !== this._stepY &&
              t &&
              (function (t) {
                return void 0 !== t.rings;
              })(t) &&
              t.rings)
          ) {
            if (
              ((this._gridType =
                void 0 !== e.gridType ? e.gridType : U.bj.Fixed),
              this._gridType === U.bj.Random)
            )
              (this._randomness =
                void 0 !== e.randomness ? e.randomness / 100 : 1),
                (this._gridAngle = 0),
                (this._shiftOddRows = !1),
                (this._cosAngle = 1),
                (this._sinAngle = 0),
                (this._offsetX = 0),
                (this._offsetY = 0);
            else {
              if (
                ((this._randomness = 0),
                (this._gridAngle = void 0 !== e.gridAngle ? e.gridAngle : 0),
                (this._shiftOddRows =
                  void 0 !== e.shiftOddRows && e.shiftOddRows),
                (this._offsetX = void 0 !== e.offsetX ? e.offsetX * s : 0),
                (this._offsetY = void 0 !== e.offsetY ? e.offsetY * s : 0),
                (this._cosAngle = Math.cos((this._gridAngle / 180) * Math.PI)),
                (this._sinAngle = -Math.sin((this._gridAngle / 180) * Math.PI)),
                this._stepX)
              )
                if (this._offsetX < 0)
                  for (; this._offsetX < -0.5 * this._stepX; )
                    this._offsetX += this._stepX;
                else
                  for (; this._offsetX >= 0.5 * this._stepX; )
                    this._offsetX -= this._stepX;
              if (this._stepY)
                if (this._offsetY < 0)
                  for (; this._offsetY < -0.5 * this._stepY; )
                    this._offsetY += this._stepY;
                else
                  for (; this._offsetY >= 0.5 * this._stepY; )
                    this._offsetY -= this._stepY;
            }
            (this._graphicOriginX = 0),
              (this._graphicOriginY = 0),
              (this._internalPlacement = new ut()),
              this._calculateMinMax(t),
              (this._geometry = t);
          }
        }
        next() {
          return this._geometry ? this._nextInside() : null;
        }
        _calculateMinMax(t) {
          let e, s, i, r, n, o, a, h;
          (this._xMin = 0),
            (this._xMax = 0),
            (this._yMin = 0),
            (this._yMax = 0),
            (n = o = Number.MAX_VALUE),
            (a = h = -Number.MAX_VALUE);
          for (const l of t.rings) {
            const t = l ? l.length : 0;
            for (let c = 0; c < t; ++c)
              (e = l[c][0] - this._graphicOriginX - this._offsetX),
                (s = l[c][1] - this._graphicOriginY - this._offsetY),
                (i = this._cosAngle * e - this._sinAngle * s),
                (r = this._sinAngle * e + this._cosAngle * s),
                (n = Math.min(n, i)),
                (a = Math.max(a, i)),
                (o = Math.min(o, r)),
                (h = Math.max(h, r));
          }
          (n += this._graphicOriginX),
            (a += this._graphicOriginX),
            (o += this._graphicOriginY),
            (h += this._graphicOriginY),
            (this._xMin = Math.round(n / this._stepX)),
            (this._xMax = Math.round(a / this._stepX)),
            (this._yMin = Math.round(o / this._stepY)),
            (this._yMax = Math.round(h / this._stepY)),
            (this._currentX = this._xMax + 1),
            (this._currentY = this._yMin - 1);
        }
        _nextInside() {
          for (;;) {
            if (this._currentX > this._xMax) {
              if ((this._currentY++, this._currentY > this._yMax)) return null;
              (this._currentX = this._xMin),
                this._shiftOddRows && this._currentY % 2 && this._currentX--;
            }
            let t = this._currentX * this._stepX + this._offsetX;
            this._shiftOddRows &&
              this._currentY % 2 &&
              (t += 0.5 * this._stepX);
            const e = this._currentY * this._stepY + this._offsetY;
            let s, i;
            return (
              this._currentX++,
              this._gridType === U.bj.Random
                ? ((s =
                    this._graphicOriginX +
                    t +
                    (this._stepX *
                      this._randomness *
                      (0.5 - Math.random()) *
                      2) /
                      3),
                  (i =
                    this._graphicOriginY +
                    e +
                    (this._stepY *
                      this._randomness *
                      (0.5 - Math.random()) *
                      2) /
                      3))
                : ((s =
                    this._graphicOriginX +
                    this._cosAngle * t +
                    this._sinAngle * e),
                  (i =
                    this._graphicOriginY -
                    this._sinAngle * t +
                    this._cosAngle * e)),
              this._internalPlacement.setTranslate(s, i),
              this._internalPlacement
            );
          }
        }
      }
      class ve {
        static local() {
          return null === ve.instance && (ve.instance = new ve()), ve.instance;
        }
        execute(t, e, s, i) {
          return new Me(t, e, s);
        }
      }
      ve.instance = null;
      class Me extends wt {
        constructor(t, e, s) {
          super(t, !0, !0),
            (this._curveHelper = new Et()),
            (this._angleToLine = void 0 === e.angleToLine || e.angleToLine),
            (this._offset = void 0 !== e.offset ? e.offset * s : 0),
            (this._relativeTo = e.relativeTo),
            (this._position =
              void 0 !== e.startPointOffset ? e.startPointOffset * s : 0),
            (this._epsilon = 0.001 * s);
        }
        processPath(t) {
          const e = this._position;
          if (this._relativeTo === U.CS.SegmentMidpoint) {
            for (
              this.iteratePath ||
              ((this._segmentCount = t.length),
              (this._curSegment = 1),
              (this.iteratePath = !0));
              this._curSegment < this._segmentCount;

            ) {
              const e = this._curSegment;
              this._curSegment++;
              const s = t[e - 1],
                i = t[e],
                r = this._curveHelper.calculateLength(s, i);
              if (r < this._epsilon) continue;
              const n = 0.5 + this._position / r,
                [o, a] = this._curveHelper.getAngleCS(s, i, n),
                h = bt(s, i, n);
              return (
                this.internalPlacement.setTranslate(
                  h[0] - this._offset * a,
                  h[1] + this._offset * o,
                ),
                this._angleToLine && this.internalPlacement.setRotateCS(o, a),
                this.internalPlacement
              );
            }
            return (this.iteratePath = !1), null;
          }
          this._relativeTo === U.CS.LineEnd && Mt(t);
          const s = this.onLine(t, e);
          return this._relativeTo === U.CS.LineEnd && Mt(t), s;
        }
        onLine(t, e) {
          let s,
            i = !1;
          switch (this._relativeTo) {
            case U.CS.LineMiddle:
            default:
              s = this._curveHelper.calculatePathLength(t) / 2 + e;
              break;
            case U.CS.LineBeginning:
              s = e;
              break;
            case U.CS.LineEnd:
              (s = e), (i = !0);
          }
          const r = t.length;
          let n,
            o = 0,
            a = t[0];
          for (let e = 1; e < r; ++e) {
            (n = a), (a = t[e]);
            const r = this._curveHelper.calculateLength(n, a);
            if (o + r > s) {
              const t = (s - o) / r,
                [e, h] = this._curveHelper.getAngleCS(n, a, t),
                l = bt(n, a, t),
                c = i ? -this._offset : this._offset;
              return (
                this.internalPlacement.setTranslate(l[0] - c * h, l[1] + c * e),
                this._angleToLine &&
                  (i
                    ? this.internalPlacement.setRotateCS(-e, -h)
                    : this.internalPlacement.setRotateCS(e, h)),
                this.internalPlacement
              );
            }
            o += r;
          }
          return null;
        }
      }
      class be {
        static local() {
          return null === be.instance && (be.instance = new be()), be.instance;
        }
        execute(t, e, s, i) {
          return new Se(t, e, s);
        }
      }
      be.instance = null;
      class Se extends wt {
        constructor(t, e, s) {
          super(t, !0, !0),
            (this._curveHelper = new Et()),
            (this._angleToLine = void 0 === e.angleToLine || e.angleToLine),
            (this._offset = void 0 !== e.offset ? e.offset * s : 0),
            (this._endPoints =
              void 0 === e.placeOnEndPoints || e.placeOnEndPoints),
            (this._controlPoints =
              void 0 === e.placeOnControlPoints || e.placeOnControlPoints),
            (this._regularVertices =
              void 0 === e.placeOnRegularVertices || e.placeOnRegularVertices),
            (this._tags = []),
            (this._tagIterator = 0);
        }
        processPath(t) {
          if (
            (this.iteratePath ||
              (this._preparePath(t), (this.iteratePath = !0)),
            this._tagIterator >= this._tags.length)
          )
            return (
              (this._tags.length = 0),
              (this._tagIterator = 0),
              (this.iteratePath = !1),
              null
            );
          const e = this._tags[this._tagIterator];
          this._angleToLine && this.internalPlacement.setRotate(e[2]);
          let s = e[0],
            i = e[1];
          if (0 !== this._offset) {
            const t = Math.cos(e[2]),
              r = Math.sin(e[2]);
            (s -= this._offset * r), (i += this._offset * t);
          }
          return (
            this.internalPlacement.setTranslate(s, i),
            this._tagIterator++,
            this.internalPlacement
          );
        }
        _preparePath(t) {
          (this._tags.length = 0), (this._tagIterator = 0);
          const e = (function (t) {
              return (
                !(!t || 0 === t.length) &&
                t[0][0] === t[t.length - 1][0] &&
                t[0][1] === t[t.length - 1][1]
              );
            })(t),
            s = t.length - 1;
          let i,
            r,
            n = 0,
            o = 0,
            a = 0,
            h = 0,
            l = 0;
          for (; n < s; ) {
            n++, (i = t[n - 1]), (r = t[n]);
            const c = St(i),
              u = St(r);
            (this._angleToLine || 0 !== this._offset) &&
              (h = this._curveHelper.getAngle(i, r, 0)),
              1 === n
                ? e
                  ? ((o = h), (a = c))
                  : (this._endPoints || (this._controlPoints && 1 === c)) &&
                    this._tags.push([i[0], i[1], h])
                : 1 === c
                ? this._controlPoints && this._tags.push([i[0], i[1], Pe(l, h)])
                : this._regularVertices &&
                  this._tags.push([i[0], i[1], Pe(l, h)]),
              (this._angleToLine || 0 !== this._offset) &&
                (l = this._curveHelper.getAngle(i, r, 1)),
              n === s &&
                (e
                  ? 1 === u || 1 === a
                    ? this._controlPoints &&
                      this._tags.push([r[0], r[1], Pe(l, o)])
                    : this._regularVertices &&
                      this._tags.push([r[0], r[1], Pe(l, o)])
                  : (this._endPoints || (this._controlPoints && 1 === u)) &&
                    this._tags.push([r[0], r[1], l]));
          }
          this._tagIterator = 0;
        }
      }
      function Pe(t, e) {
        const s = Math.PI;
        for (; Math.abs(e - t) > s + 2e-15; )
          e - t > s ? (e -= 2 * s) : (e += 2 * s);
        return (t + e) / 2;
      }
      class we {
        static local() {
          return null === we.instance && (we.instance = new we()), we.instance;
        }
        execute(t, e, s, i) {
          return new Ce(t, e, s);
        }
      }
      we.instance = null;
      class Ce {
        constructor(t, e, s) {
          (this._geometry = t),
            (this._offsetX = void 0 !== e.offsetX ? e.offsetX * s : 0),
            (this._offsetY = void 0 !== e.offsetY ? e.offsetY * s : 0),
            (this._method = void 0 !== e.method ? e.method : U.Lh.OnPolygon),
            (this._internalPlacement = new ut());
        }
        next() {
          const t = this._geometry;
          return (
            (this._geometry = null),
            t &&
            (function (t) {
              return void 0 !== t.rings;
            })(t)
              ? this._polygonCenter(t)
              : null
          );
        }
        _polygonCenter(t) {
          let e = !1;
          switch (this._method) {
            case U.Lh.OnPolygon:
            default:
            case U.Lh.CenterOfMass:
            case U.Lh.BoundingBoxCenter: {
              const s = (0, T.Ue)();
              (0, ne.$P)(s, t),
                this._internalPlacement.setTranslate(
                  (s[2] + s[0]) / 2 + this._offsetX,
                  (s[3] + s[1]) / 2 + this._offsetY,
                ),
                (e = !0);
              break;
            }
          }
          return e ? this._internalPlacement : null;
        }
      }
      function Le(t) {
        if (!t) return null;
        switch (t.type) {
          case 'CIMGeometricEffectAddControlPoints':
            return It.local();
          case 'CIMGeometricEffectArrow':
            return At.local();
          case 'CIMGeometricEffectBuffer':
            return Ot.local();
          case 'CIMGeometricEffectControlMeasureLine':
            return Vt.local();
          case 'CIMGeometricEffectCut':
            return Gt.local();
          case 'CIMGeometricEffectDashes':
            return Jt.local();
          case 'CIMGeometricEffectDonut':
            return qt.local();
          case 'CIMGeometricEffectJog':
            return jt.local();
          case 'CIMGeometricEffectMove':
            return Qt.local();
          case 'CIMGeometricEffectOffset':
            return ee.local();
          case 'CIMGeometricEffectReverse':
            return ie.local();
          case 'CIMGeometricEffectRotate':
            return oe.local();
          case 'CIMGeometricEffectScale':
            return he.local();
          case 'CIMGeometricEffectWave':
            return ce.local();
        }
        return null;
      }
      function Ie(t) {
        if (!t) return null;
        switch (t.type) {
          case 'CIMMarkerPlacementAlongLineSameSize':
            return fe.local();
          case 'CIMMarkerPlacementAtExtremities':
            return de.local();
          case 'CIMMarkerPlacementAtRatioPositions':
            return pe.local();
          case 'CIMMarkerPlacementInsidePolygon':
            return ye.local();
          case 'CIMMarkerPlacementOnLine':
            return ve.local();
          case 'CIMMarkerPlacementOnVertices':
            return be.local();
          case 'CIMMarkerPlacementPolygonCenter':
            return we.local();
        }
        return null;
      }
      class ke {
        static getPlacement(t, e, s, i) {
          const r = Ie(e);
          if (!r) return null;
          const n = ft(t);
          return r.execute(n, e, s, i);
        }
      }
      var Te = s(46851);
      function ze(t, e, s) {
        const i = e[0],
          r = e[1],
          n = e[2],
          o = e[3],
          a = e[4],
          h = e[5],
          l = s[0],
          c = s[1],
          u = s[2],
          f = s[3],
          _ = s[4],
          d = s[5];
        return (
          (t[0] = i * l + n * c),
          (t[1] = r * l + o * c),
          (t[2] = i * u + n * f),
          (t[3] = r * u + o * f),
          (t[4] = i * _ + n * d + a),
          (t[5] = r * _ + o * d + h),
          t
        );
      }
      function Ee(t, e, s) {
        const i = e[0],
          r = e[1],
          n = e[2],
          o = e[3],
          a = e[4],
          h = e[5],
          l = Math.sin(s),
          c = Math.cos(s);
        return (
          (t[0] = i * c + n * l),
          (t[1] = r * c + o * l),
          (t[2] = i * -l + n * c),
          (t[3] = r * -l + o * c),
          (t[4] = a),
          (t[5] = h),
          t
        );
      }
      function Fe(t, e, s) {
        const i = e[0],
          r = e[1],
          n = e[2],
          o = e[3],
          a = e[4],
          h = e[5],
          l = s[0],
          c = s[1];
        return (
          (t[0] = i),
          (t[1] = r),
          (t[2] = n),
          (t[3] = o),
          (t[4] = i * l + n * c + a),
          (t[5] = r * l + o * c + h),
          t
        );
      }
      function Ae(t, e) {
        const s = Math.sin(e),
          i = Math.cos(e);
        return (
          (t[0] = i),
          (t[1] = s),
          (t[2] = -s),
          (t[3] = i),
          (t[4] = 0),
          (t[5] = 0),
          t
        );
      }
      function Re(t, e) {
        return (
          (t[0] = 1),
          (t[1] = 0),
          (t[2] = 0),
          (t[3] = 1),
          (t[4] = e[0]),
          (t[5] = e[1]),
          t
        );
      }
      function Oe(t, e, s) {
        return (
          (t[0] = e[0] - s[0]),
          (t[1] = e[1] - s[1]),
          (t[2] = e[2] - s[2]),
          (t[3] = e[3] - s[3]),
          (t[4] = e[4] - s[4]),
          (t[5] = e[5] - s[5]),
          t
        );
      }
      const We = ze,
        Ve = Oe;
      function Ne() {
        const t = new Float32Array(6);
        return (t[0] = 1), (t[3] = 1), t;
      }
      function Ge(t, e, s, i) {
        const r = e[i],
          n = e[i + 1];
        (t[i] = s[0] * r + s[2] * n + s[4]),
          (t[i + 1] = s[1] * r + s[3] * n + s[5]);
      }
      function De(t, e, s, i = 0, r = 0, n = 2) {
        const o = r || e.length / n;
        for (let r = i; r < o; r++) Ge(t, e, s, r * n);
      }
      function Be() {
        return new Float32Array(2);
      }
      function Xe(t, e) {
        const s = new Float32Array(2);
        return (s[0] = t), (s[1] = e), s;
      }
      function Ue() {
        return Be();
      }
      function He() {
        return Xe(1, 1);
      }
      function Ye() {
        return Xe(1, 0);
      }
      function Je() {
        return Xe(0, 1);
      }
      Object.freeze({
        __proto__: null,
        copy: function (t, e) {
          return (
            (t[0] = e[0]),
            (t[1] = e[1]),
            (t[2] = e[2]),
            (t[3] = e[3]),
            (t[4] = e[4]),
            (t[5] = e[5]),
            t
          );
        },
        identity: function (t) {
          return (
            (t[0] = 1),
            (t[1] = 0),
            (t[2] = 0),
            (t[3] = 1),
            (t[4] = 0),
            (t[5] = 0),
            t
          );
        },
        set: function (t, e, s, i, r, n, o) {
          return (
            (t[0] = e),
            (t[1] = s),
            (t[2] = i),
            (t[3] = r),
            (t[4] = n),
            (t[5] = o),
            t
          );
        },
        invert: function (t, e) {
          const s = e[0],
            i = e[1],
            r = e[2],
            n = e[3],
            o = e[4],
            a = e[5];
          let h = s * n - i * r;
          return h
            ? ((h = 1 / h),
              (t[0] = n * h),
              (t[1] = -i * h),
              (t[2] = -r * h),
              (t[3] = s * h),
              (t[4] = (r * a - n * o) * h),
              (t[5] = (i * o - s * a) * h),
              t)
            : null;
        },
        determinant: function (t) {
          return t[0] * t[3] - t[1] * t[2];
        },
        multiply: ze,
        rotate: Ee,
        scale: function (t, e, s) {
          const i = e[0],
            r = e[1],
            n = e[2],
            o = e[3],
            a = e[4],
            h = e[5],
            l = s[0],
            c = s[1];
          return (
            (t[0] = i * l),
            (t[1] = r * l),
            (t[2] = n * c),
            (t[3] = o * c),
            (t[4] = a),
            (t[5] = h),
            t
          );
        },
        translate: Fe,
        fromRotation: Ae,
        fromScaling: function (t, e) {
          return (
            (t[0] = e[0]),
            (t[1] = 0),
            (t[2] = 0),
            (t[3] = e[1]),
            (t[4] = 0),
            (t[5] = 0),
            t
          );
        },
        fromTranslation: Re,
        str: function (t) {
          return (
            'mat2d(' +
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
              1,
          );
        },
        add: function (t, e, s) {
          return (
            (t[0] = e[0] + s[0]),
            (t[1] = e[1] + s[1]),
            (t[2] = e[2] + s[2]),
            (t[3] = e[3] + s[3]),
            (t[4] = e[4] + s[4]),
            (t[5] = e[5] + s[5]),
            t
          );
        },
        subtract: Oe,
        multiplyScalar: function (t, e, s) {
          return (
            (t[0] = e[0] * s),
            (t[1] = e[1] * s),
            (t[2] = e[2] * s),
            (t[3] = e[3] * s),
            (t[4] = e[4] * s),
            (t[5] = e[5] * s),
            t
          );
        },
        multiplyScalarAndAdd: function (t, e, s, i) {
          return (
            (t[0] = e[0] + s[0] * i),
            (t[1] = e[1] + s[1] * i),
            (t[2] = e[2] + s[2] * i),
            (t[3] = e[3] + s[3] * i),
            (t[4] = e[4] + s[4] * i),
            (t[5] = e[5] + s[5] * i),
            t
          );
        },
        exactEquals: function (t, e) {
          return (
            t[0] === e[0] &&
            t[1] === e[1] &&
            t[2] === e[2] &&
            t[3] === e[3] &&
            t[4] === e[4] &&
            t[5] === e[5]
          );
        },
        equals: function (t, e) {
          const s = t[0],
            i = t[1],
            r = t[2],
            n = t[3],
            o = t[4],
            a = t[5],
            h = e[0],
            l = e[1],
            c = e[2],
            u = e[3],
            f = e[4],
            _ = e[5];
          return (
            Math.abs(s - h) <= Te.E * Math.max(1, Math.abs(s), Math.abs(h)) &&
            Math.abs(i - l) <= Te.E * Math.max(1, Math.abs(i), Math.abs(l)) &&
            Math.abs(r - c) <= Te.E * Math.max(1, Math.abs(r), Math.abs(c)) &&
            Math.abs(n - u) <= Te.E * Math.max(1, Math.abs(n), Math.abs(u)) &&
            Math.abs(o - f) <= Te.E * Math.max(1, Math.abs(o), Math.abs(f)) &&
            Math.abs(a - _) <= Te.E * Math.max(1, Math.abs(a), Math.abs(_))
          );
        },
        mul: We,
        sub: Ve,
      }),
        Object.freeze({
          __proto__: null,
          create: Ne,
          clone: function (t) {
            const e = new Float32Array(6);
            return (
              (e[0] = t[0]),
              (e[1] = t[1]),
              (e[2] = t[2]),
              (e[3] = t[3]),
              (e[4] = t[4]),
              (e[5] = t[5]),
              e
            );
          },
          fromValues: function (t, e, s, i, r, n) {
            const o = new Float32Array(6);
            return (
              (o[0] = t),
              (o[1] = e),
              (o[2] = s),
              (o[3] = i),
              (o[4] = r),
              (o[5] = n),
              o
            );
          },
          createView: function (t, e) {
            return new Float32Array(t, e, 6);
          },
          transform: Ge,
          transformMany: De,
        });
      const Ze = Ue(),
        qe = He(),
        Ke = Ye(),
        je = Je();
      Object.freeze({
        __proto__: null,
        create: Be,
        clone: function (t) {
          const e = new Float32Array(2);
          return (e[0] = t[0]), (e[1] = t[1]), e;
        },
        fromValues: Xe,
        createView: function (t, e) {
          return new Float32Array(t, e, 2);
        },
        zeros: Ue,
        ones: He,
        unitX: Ye,
        unitY: Je,
        ZEROS: Ze,
        ONES: qe,
        UNIT_X: Ke,
        UNIT_Y: je,
      });
      var $e = s(87893);
      class Qe {
        constructor(t, e, s, i) {
          (this.center = Xe(t, e)),
            (this.centerT = Be()),
            (this.halfWidth = s / 2),
            (this.halfHeight = i / 2),
            (this.width = s),
            (this.height = i);
        }
        get x() {
          return this.center[0];
        }
        get y() {
          return this.center[1];
        }
        get blX() {
          return this.center[0] + this.halfWidth;
        }
        get blY() {
          return this.center[1] + this.halfHeight;
        }
        get trX() {
          return this.center[0] - this.halfWidth;
        }
        get trY() {
          return this.center[1] - this.halfHeight;
        }
        get xmin() {
          return this.x - this.halfWidth;
        }
        get xmax() {
          return this.x + this.halfWidth;
        }
        get ymin() {
          return this.y - this.halfHeight;
        }
        get ymax() {
          return this.y + this.halfHeight;
        }
        set x(t) {
          this.center[0] = t;
        }
        set y(t) {
          this.center[1] = t;
        }
        clone() {
          return new Qe(this.x, this.y, this.width, this.height);
        }
        serialize(t) {
          return (
            t.writeF32(this.center[0]),
            t.writeF32(this.center[1]),
            t.push(this.width),
            t.push(this.height),
            t
          );
        }
        findCollisionDelta(t, e = 4) {
          const s = Math.abs(t.centerT[0] - this.centerT[0]),
            i = Math.abs(t.centerT[1] - this.centerT[1]),
            r = (t.halfWidth + this.halfWidth + e) / s,
            n = (t.halfHeight + this.halfHeight + e) / i,
            o = Math.min(r, n);
          return Math.log2(o);
        }
        extend(t) {
          const e = Math.min(this.xmin, t.xmin),
            s = Math.min(this.ymin, t.ymin),
            i = Math.max(this.xmax, t.xmax) - e,
            r = Math.max(this.ymax, t.ymax) - s,
            n = e + i / 2,
            o = s + r / 2;
          (this.width = i),
            (this.height = r),
            (this.halfWidth = i / 2),
            (this.halfHeight = r / 2),
            (this.x = n),
            (this.y = o);
        }
        static deserialize(t) {
          const e = t.readF32(),
            s = t.readF32(),
            i = t.readInt32(),
            r = t.readInt32();
          return new Qe(e, s, i, r);
        }
      }
      const ts = Math.PI / 180;
      class es {
        constructor(t, e, s, i) {
          (this._rotationT = Ne()),
            (this._xBounds = 0),
            (this._yBounds = 0),
            (this.minZoom = 0),
            (this.maxZoom = 255),
            (this._bounds = null);
          const r = s.rect,
            n = new Float32Array(8);
          (t *= i), (e *= i);
          const o = s.code ? r.width * i : s.metrics.width,
            a = s.code ? r.height * i : s.metrics.height;
          (n[0] = t),
            (n[1] = e),
            (n[2] = t + o),
            (n[3] = e),
            (n[4] = t),
            (n[5] = e + a),
            (n[6] = t + o),
            (n[7] = e + a),
            (this._data = n),
            this._setTextureCoords(r),
            (this._scale = i),
            (this._mosaic = s),
            (this.x = t),
            (this.y = e),
            (this.maxOffset = Math.max(t + o, e + a));
        }
        get width() {
          return this._mosaic.metrics.width * this._scale;
        }
        get mosaic() {
          return this._mosaic;
        }
        set angle(t) {
          (this._angle = t),
            Ae(this._rotationT, -t),
            this._setOffsets(this._data);
        }
        get angle() {
          return this._angle;
        }
        get xTopLeft() {
          return this._data[0];
        }
        get yTopLeft() {
          return this._data[1];
        }
        get xBottomRight() {
          return this._data[6];
        }
        get yBottomRight() {
          return this._data[7];
        }
        get texcoords() {
          return this._texcoords;
        }
        get textureBinding() {
          return this._mosaic.textureBinding;
        }
        get offsets() {
          return this._offsets || this._setOffsets(this._data), this._offsets;
        }
        get char() {
          return String.fromCharCode(this._mosaic.code);
        }
        get code() {
          return this._mosaic.code;
        }
        get bounds() {
          if (!this._bounds) {
            const { height: t, width: e } = this._mosaic.metrics,
              s = e * this._scale,
              i = Math.abs(t) * this._scale,
              r = new Float32Array(8);
            (r[0] = this.x),
              (r[1] = this.y),
              (r[2] = this.x + s),
              (r[3] = this.y),
              (r[4] = this.x),
              (r[5] = this.y + i),
              (r[6] = this.x + s),
              (r[7] = this.y + i),
              De(r, r, ze(Ne(), this._rotationT, this._T));
            let n = 1 / 0,
              o = 1 / 0,
              a = 0,
              h = 0;
            for (let t = 0; t < 4; t++) {
              const e = r[2 * t],
                s = r[2 * t + 1];
              (n = Math.min(n, e)),
                (o = Math.min(o, s)),
                (a = Math.max(a, e)),
                (h = Math.max(h, s));
            }
            const l = a - n,
              c = h - o,
              u = n + l / 2,
              f = o + c / 2;
            this._bounds = new Qe(u, f, l, c);
          }
          return this._bounds;
        }
        setTransform(t) {
          (this._T = t), (this._offsets = null);
        }
        _setOffsets(t) {
          this._offsets ||
            (this._offsets = {
              upperLeft: 0,
              upperRight: 0,
              lowerLeft: 0,
              lowerRight: 0,
            });
          const e = this._offsets,
            s = new Float32Array(8);
          De(s, t, ze(Ne(), this._rotationT, this._T)),
            (e.upperLeft = (0, J.UJ)(8 * s[0], 8 * s[1])),
            (e.upperRight = (0, J.UJ)(8 * s[2], 8 * s[3])),
            (e.lowerLeft = (0, J.UJ)(8 * s[4], 8 * s[5])),
            (e.lowerRight = (0, J.UJ)(8 * s[6], 8 * s[7]));
        }
        _setTextureCoords({ x: t, y: e, width: s, height: i }) {
          this._texcoords = {
            upperLeft: (0, J.UJ)(t, e),
            upperRight: (0, J.UJ)(t + s, e),
            lowerLeft: (0, J.UJ)(t, e + i),
            lowerRight: (0, J.UJ)(t + s, e + i),
          };
        }
      }
      const ss = (t, e) => ({
        code: 0,
        page: 0,
        sdf: !0,
        rect: new $e.Z(0, 0, 11, 8),
        textureBinding: e,
        metrics: { advance: 0, height: 4, width: t, left: 0, top: 0 },
      });
      class is {
        constructor(t, e, s) {
          (this._rotation = 0),
            this._decorate(t, e, s),
            (this.glyphs = t),
            (this.bounds = this._createBounds(t)),
            (this.isMultiline = e.length > 1),
            (this._hasRotation = 0 !== s.angle),
            (this._T = this._createGlyphTransform(this.bounds, s));
          for (const e of t) e.setTransform(this._T);
        }
        setRotation(t) {
          if (0 === t && 0 === this._rotation) return;
          this._rotation = t;
          const e = this._T;
          ze(e, Ae(Ne(), t), e);
          for (const t of this.glyphs) t.setTransform(this._T);
        }
        _decorate(t, e, s) {
          if (!s.decoration || 'none' === s.decoration || !t.length) return;
          const i = s.scale,
            r = 'underline' === s.decoration ? 30 : 20,
            n = t[0].textureBinding;
          for (const s of e) {
            const e = s.startX * i,
              o = s.startY * i,
              a = (s.width + s.glyphWidthEnd) * i;
            t.push(new es(e, o + r * i, ss(a, n), 1));
          }
        }
        get boundsT() {
          const t = this.bounds,
            e = (0, g.s)(Be(), t.x, t.y);
          if (((0, g.t)(e, e, this._T), this._hasRotation)) {
            const s = Math.max(t.width, t.height);
            return new Qe(e[0], e[1], s, s);
          }
          return new Qe(e[0], e[1], t.width, t.height);
        }
        _createBounds(t) {
          let e = 1 / 0,
            s = 1 / 0,
            i = 0,
            r = 0;
          for (const n of t)
            (e = Math.min(e, n.xTopLeft)),
              (s = Math.min(s, n.yTopLeft)),
              (i = Math.max(i, n.xTopLeft + n.width)),
              (r = Math.max(r, n.yBottomRight));
          const n = i - e,
            o = r - s;
          return new Qe(e + n / 2, s + o / 2, n, o);
        }
        _createGlyphTransform(t, e) {
          const s = ts * e.angle,
            i = Ne(),
            r = Be();
          return (
            Fe(i, i, (0, g.s)(r, e.xOffset, -e.yOffset)),
            e.isCIM
              ? Ee(i, i, s)
              : (Fe(i, i, (0, g.s)(r, t.x, t.y)),
                Ee(i, i, s),
                Fe(i, i, (0, g.s)(r, -t.x, -t.y))),
            i
          );
        }
      }
      class rs {
        constructor(t, e, s, i, r, n) {
          (this.glyphWidthEnd = 0),
            (this.startX = 0),
            (this.startY = 0),
            (this.start = Math.max(0, Math.min(e, s))),
            (this.end = Math.max(0, Math.max(e, s))),
            this.end < t.length &&
              (this.glyphWidthEnd = t[this.end].metrics.width),
            (this.width = i),
            (this.yMin = r),
            (this.yMax = n);
        }
      }
      const ns = (t) => 10 === t,
        os = (t) => 32 === t;
      const as = (t) =>
        class extends t {
          constructor(...t) {
            super(...t),
              (this._isCIM = !1),
              (this._vertexBoundsScale = 1),
              (this.geometryType = E.LW.TEXT),
              (this._aux = (0, J.Jz)(0, 0, this._referenceSize, this._bitset));
          }
          bindTextInfo(t, e) {
            t && t.length
              ? (this._shapingInfo = (0, l.yw)(t, (t) =>
                  (function (t, e, s) {
                    const i = s.scale,
                      r = new Array(),
                      n = (function (t, e, s) {
                        const i = new Array(),
                          r = 1 / s.scale,
                          n = s.maxLineWidth * r,
                          o = e ? t.length - 1 : 0,
                          a = e ? -1 : t.length,
                          h = e ? -1 : 1;
                        let l = o,
                          c = 0,
                          u = 0,
                          f = l,
                          _ = f,
                          d = 0,
                          m = 1 / 0,
                          p = 0;
                        for (; l !== a; ) {
                          const { code: e, metrics: s } = t[l],
                            r = Math.abs(s.top);
                          if (
                            (ns(e) ||
                              os(e) ||
                              ((m = Math.min(m, r)),
                              (p = Math.max(p, r + s.height))),
                            ns(e))
                          )
                            l !== o &&
                              (i.push(new rs(t, f, l - h, c, m, p)),
                              (m = 1 / 0),
                              (p = 0)),
                              (c = 0),
                              (f = l + h),
                              (_ = l + h),
                              (u = 0);
                          else if (os(e))
                            (_ = l + h),
                              (u = 0),
                              (d = s.advance),
                              (c += s.advance);
                          else if (c > n) {
                            if (_ !== f) {
                              const e = _ - 2 * h;
                              (c -= d),
                                i.push(new rs(t, f, e, c - u, m, p)),
                                (m = 1 / 0),
                                (p = 0),
                                (f = _),
                                (c = u);
                            } else
                              i.push(new rs(t, f, l - h, c, m, p)),
                                (m = 1 / 0),
                                (p = 0),
                                (f = l),
                                (_ = l),
                                (c = 0);
                            (c += s.advance), (u += s.advance);
                          } else (c += s.advance), (u += s.advance);
                          l += h;
                        }
                        const g = new rs(t, f, l - h, c, m, p);
                        return g.start >= 0 && g.end < t.length && i.push(g), i;
                      })(t, e, s),
                      o = (function (t, e) {
                        let s = 0;
                        for (let e = 0; e < t.length; e++) {
                          const { width: i } = t[e];
                          s = Math.max(i, s);
                        }
                        const i = 'underline' === e.decoration ? 4 : 0,
                          r = t[0].yMin;
                        return {
                          x: 0,
                          y: r,
                          height:
                            t[t.length - 1].yMax +
                            e.lineHeight * (t.length - 1) +
                            i -
                            r,
                          width: s,
                        };
                      })(n, s),
                      { vAlign: a, hAlign: h } = s,
                      l = a === H.TR.Baseline ? 1 : 0,
                      c = l ? 0 : a - 1,
                      u =
                        (1 - l) * -o.y + c * (o.height / 2) + -26 * (l ? 1 : 0);
                    for (let e = 0; e < n.length; e++) {
                      const { start: o, end: a, width: l } = n[e];
                      let c = -1 * (h + 1) * (l / 2) - 3;
                      const f = e * s.lineHeight + u - 3;
                      (n[e].startX = c), (n[e].startY = f);
                      for (let e = o; e <= a; e++) {
                        const s = t[e];
                        if (ns(s.code)) continue;
                        const n = new es(
                          c + s.metrics.left,
                          f - s.metrics.top,
                          s,
                          i,
                        );
                        (c += s.metrics.advance), r.push(n);
                      }
                    }
                    return new is(r, n, s);
                  })(t, e, {
                    scale: this._scale,
                    angle: this._angle,
                    xOffset: this._xOffset,
                    yOffset: this._yOffset,
                    hAlign: this._xAlignD,
                    vAlign: this._yAlignD,
                    maxLineWidth: Math.max(32, Math.min(this._lineWidth, 512)),
                    lineHeight:
                      z.xm * Math.max(0.25, Math.min(this._lineHeight, 4)),
                    decoration: this._decoration,
                    isCIM: this._isCIM,
                  }),
                ))
              : (this._shapingInfo = null);
          }
          _write(t, e, s, i) {
            const r = e.getDisplayId();
            this._writeGeometry(t, e, r, s, i);
          }
          _writeGeometry(t, e, s, i, r) {
            const n = this._shapingInfo;
            if ((0, l.Wi)(n)) return;
            if ((0, l.pC)(this._textPlacement)) {
              const o = null != r ? r : e.readLegacyGeometryForDisplay();
              return this._writePlacedText(t, s, o, n, i);
            }
            const o = r
              ? (0, ht.oB)((0, ht.GH)(r), 2)
              : 'esriGeometryPolygon' === e.geometryType
              ? e.readCentroid()
              : e.readGeometryForDisplay();
            if (!(0, l.Wi)(o)) {
              if (o.isPoint) {
                const [e, i] = o.coords;
                if (
                  !t.hasAggregates &&
                  t.hasPixelBufferEnabled &&
                  (e < 0 || e >= 512 || i < 0 || i >= 512)
                )
                  return;
                return this._writeGlyphs(t, s, { x: e, y: i }, n);
              }
              o.forEachVertex((e, i) =>
                this._writeGlyphs(t, s, { x: e, y: i }, n),
              );
            }
          }
          _writePlacedText(t, e, s, i, r) {
            const n = (0, l.Wg)(this._textPlacement),
              o = ke.getPlacement(s, n, (0, X.F2)(1), r.geometryEngine);
            if (!o) return;
            let a = o.next();
            for (; null != a; ) {
              const s = -a.getAngle();
              i.setRotation(s);
              const r = a.tx,
                n = -a.ty;
              r < 0 ||
                r >= 512 ||
                n < 0 ||
                n >= 512 ||
                (this._writeGlyphs(t, e, { x: r, y: n }, i), i.setRotation(-s)),
                (a = o.next());
            }
          }
          _writeGlyphs(t, e, s, i) {
            const r = Z.m2.load(this._materialKey),
              n = (0, J.UJ)(Math.round(8 * s.x), Math.round(8 * s.y)),
              o = this._vertexBoundsScale,
              a = i.bounds,
              h = 2 * Math.max(a.width, a.height);
            for (const l of i.glyphs)
              (r.textureBinding = l.textureBinding),
                t.recordStart(e, r.data, this.geometryType, !0),
                t.vertexBounds(
                  s.x + a.x + this._xOffset,
                  s.y + a.y - this._yOffset,
                  h * o,
                  h * o,
                ),
                this._writeVertices(t, e, n, l),
                t.recordEnd();
          }
          _writeGlyph(t, e, s, i, r) {
            const n = Z.m2.load(this._materialKey),
              o = (0, J.UJ)(Math.round(8 * s), Math.round(8 * i));
            (n.textureBinding = r.textureBinding),
              t.recordStart(e, n.data, this.geometryType, !0);
            const a = r.bounds,
              h = this._vertexBoundsScale;
            t.vertexBounds(s + a.x * h, i + a.y * h, a.width * h, a.height * h),
              this._writeVertices(t, e, o, r),
              t.recordEnd();
          }
          _writeVertices(t, e, s, i) {
            const r = t.vertexCount();
            this._writeVertexCommon(t, e, s, i),
              t.vertexWrite(i.offsets.upperLeft),
              t.vertexWrite(i.texcoords.upperLeft),
              t.vertexEnd(),
              this._writeVertexCommon(t, e, s, i),
              t.vertexWrite(i.offsets.upperRight),
              t.vertexWrite(i.texcoords.upperRight),
              t.vertexEnd(),
              this._writeVertexCommon(t, e, s, i),
              t.vertexWrite(i.offsets.lowerLeft),
              t.vertexWrite(i.texcoords.lowerLeft),
              t.vertexEnd(),
              this._writeVertexCommon(t, e, s, i),
              t.vertexWrite(i.offsets.lowerRight),
              t.vertexWrite(i.texcoords.lowerRight),
              t.vertexEnd(),
              t.indexWrite(r + 0),
              t.indexWrite(r + 1),
              t.indexWrite(r + 2),
              t.indexWrite(r + 1),
              t.indexWrite(r + 3),
              t.indexWrite(r + 2);
          }
          _writeVertexCommon(t, e, s, i) {
            const r = this._color,
              n = this._haloColor,
              o = (0, J.Jz)(0, 0, this._referenceSize, this._bitset),
              a = (0, J.Jz)(0, 0, this._size, this._haloSize);
            t.vertexWrite(s),
              t.vertexWrite(e),
              t.vertexWrite(r),
              t.vertexWrite(n),
              t.vertexWrite(a),
              t.vertexWrite(o),
              t.vertexWrite(this._minMaxZoom);
          }
        };
      class hs {
        constructor(t) {
          this._geometry = t;
        }
        next() {
          const t = this._geometry;
          return (this._geometry = null), t;
        }
      }
      class ls {
        static executeEffects(t, e, s) {
          const i = ft(e);
          let r = new hs(i);
          for (const e of t) {
            const t = Le(e);
            t && (r = t.execute(r, e, 1.3333333333333333, s));
          }
          return r;
        }
        static next(t) {
          const e = t.next();
          return (
            (function (t) {
              t &&
                (_t(t),
                (0, ct.oU)(t)
                  ? gt(t.rings)
                  : (0, ct.l9)(t)
                  ? gt(t.paths)
                  : (0, ct.aW)(t) && pt(t.points));
            })(e),
            e
          );
        }
        static applyEffects(t, e, s) {
          if (!t) return e;
          let i = new hs(e);
          for (const e of t) {
            const t = Le(e);
            t && (i = t.execute(i, e, 1, s));
          }
          let r,
            n = null;
          for (; (r = i.next()); )
            n
              ? (0, ct.l9)(n)
                ? (0, ct.l9)(r) && n.paths.push(...r.paths)
                : (0, ct.oU)(n) && (0, ct.oU)(r) && n.rings.push(...r.rings)
              : (n = r);
          return n;
        }
      }
      class cs {
        bindFeature(t, e, s) {}
        write(t, e, s, i) {
          var r;
          if (
            (0, l.Wi)(this._effects) ||
            0 === (null == (r = this._effects) ? void 0 : r.length)
          )
            return this._write(t, e, i);
          const n = ls.executeEffects(
            this._effects,
            e.readLegacyGeometryForDisplay(),
            i.geometryEngine,
          );
          let o = ls.next(n);
          for (; o; ) this._write(t, e, i, o), (o = ls.next(n));
        }
        _write(t, e, s, i) {}
      }
      class us extends as(cs) {
        constructor(
          t,
          e,
          s,
          i,
          r,
          n,
          o,
          a,
          h,
          l,
          c,
          u,
          f,
          _,
          d,
          m,
          p,
          g,
          y = !1,
          x,
          v,
        ) {
          super(),
            (this._xOffset = (0, X.F2)(f)),
            (this._yOffset = (0, X.F2)(_)),
            (this._decoration = l || 'none'),
            (this._color = r),
            (this._haloColor = n),
            (this._haloSize = Math.min(
              Math.floor(5 * (0, X.F2)((0, X.t_)(s))),
              127,
            )),
            (this._size = Math.min(Math.round((0, X.F2)(e)), 127));
          const M = Math.min(Math.round((0, X.F2)(i || e)), 127);
          (this._referenceSize = Math.round(Math.sqrt(256 * M))),
            (this._scale = this._size / z.Ex),
            (this._angle = u),
            (this._justify = (0, H.Hd)(o || 'center')),
            (this._xAlignD = (0, H.kH)(o || 'center')),
            (this._yAlignD = (0, H.b7)(a || 'baseline')),
            (this._baseline = 'baseline' === (a || 'baseline')),
            (this._bitset = (h === U.v2.MAP ? 1 : 0) | ((c ? 1 : 0) << 1));
          const b = Z.m2.load(t);
          (b.sdf = !0),
            (this._materialKey = b.data),
            (this._lineWidth = (0, X.F2)(d) || 512),
            (this._lineHeight = m || 1),
            (this._textPlacement = p),
            (this._effects = g),
            (this._isCIM = y),
            (this._minMaxZoom = (0, J.UJ)(
              Math.round(x * z.MI),
              Math.round(v * z.MI),
            ));
        }
        static fromText(t, e) {
          const s = new us(
              t.materialKey,
              t.font.size,
              t.haloSize || 0,
              t.font.size,
              (t.color && (0, Y.aH)(t.color)) || 0,
              (t.haloColor && (0, Y.aH)(t.haloColor)) || 0,
              t.horizontalAlignment,
              t.verticalAlignment,
              U.v2.SCREEN,
              t.font.decoration,
              !1,
              t.angle || 0,
              t.xoffset,
              t.yoffset,
              t.lineWidth,
              t.lineHeight,
              null,
              null,
              !1,
              0,
              q,
            ),
            [, i] = n(t.text);
          return (
            s.bindTextInfo(e, i),
            (s._vertexBoundsScale = t.maxVVSize
              ? t.maxVVSize / t.font.size
              : 1),
            s
          );
        }
        static fromCIMText(t, e, s) {
          const i = t.scaleFactor || 1,
            r = t.size * t.sizeRatio * i,
            [o, a] = st(t.scaleInfo, s),
            h = new us(
              t.materialKey,
              r,
              t.outlineSize * t.sizeRatio,
              t.referenceSize,
              (0, Y.t2)(t.color),
              (0, Y.t2)(t.outlineColor),
              t.horizontalAlignment,
              t.verticalAlignment,
              t.alignment,
              t.decoration,
              t.colorLocked,
              t.angle,
              t.offsetX * t.sizeRatio * i,
              t.offsetY * t.sizeRatio * i,
              512,
              1,
              t.markerPlacement,
              t.effects,
              !0,
              o,
              a,
            ),
            [, l] = n(t.text);
          return (
            h.bindTextInfo(e, l),
            (h._vertexBoundsScale = t.maxVVSize ? t.maxVVSize / r : 1),
            h
          );
        }
      }
      const fs = h.Z.getLogger('esri.views.2d.engine.webgl.WGLLabelTemplate'),
        _s = (function (t) {
          const e = new Map();
          return (t) => (
            e.has(t) ||
              e.set(
                t,
                ((t) => {
                  let e = 0;
                  if (0 === t) return 1 / 0;
                  for (; !(t % 2); ) e++, (t /= 2);
                  return e;
                })(t),
              ),
            e.get(t)
          );
        })(),
        ds = (t) => Math.floor(127 * t + 127),
        ms = (t) => Math.floor(10 * t),
        ps = (t) => Math.round(t * (254 / 360));
      class gs extends us {
        constructor(t, e, s, i) {
          var r, n, o;
          super(
            t,
            s.font.size,
            s.haloSize || 0,
            s.font.size,
            (s.color && (0, Y.aH)(s.color)) || 0,
            (s.haloColor && (0, Y.aH)(s.haloColor)) || 0,
            s.horizontalAlignment,
            s.verticalAlignment,
            (0, H.NS)(e.labelPlacement) ? U.v2.MAP : U.v2.SCREEN,
            s.font.decoration,
            !1,
            s.angle || 0,
            s.xoffset,
            s.yoffset,
            s.lineWidth,
            s.lineHeight,
            null,
            null,
            null,
            null,
            null,
          ),
            (this._outLineLabelAngle = 0),
            (this._refPlacementPadding = 0),
            (this._refPlacementDirX = 0),
            (this._refPlacementDirY = 0),
            (this._refOffsetX = 0),
            (this._refOffsetY = 0),
            (this._zoomLevel = 0),
            (this.geometryType = E.LW.LABEL),
            (this._allowOverrun = null != (r = e.allowOverrun) && r),
            (this._repeatLabel = null == (n = e.repeatLabel) || n),
            (this._labelPosition =
              null != (o = e.labelPosition) ? o : 'curved');
          const a = (function (t, e) {
              const s = (!!t.minScale && e.scaleToZoom(t.minScale)) || 0;
              return (0, B.uZ)(s, 0, 25.5);
            })(e, i),
            h = (function (t, e) {
              const s = (!!t.maxScale && e.scaleToZoom(t.maxScale)) || 255;
              return (0, B.uZ)(s, 0, 25.5);
            })(e, i),
            l = e.labelPlacement,
            [c, u] = (0, H.qv)(l);
          (this._xAlignD = c),
            (this._yAlignD = u),
            (this._minZoom = a),
            (this._maxZoom = h),
            (this._refPlacementPadding = (0, X.F2)(s.haloSize) + z.Iw),
            (this._repeatLabelDistance = e.repeatLabelDistance
              ? (0, X.F2)(e.repeatLabelDistance)
              : 128);
          const f = Z.Gq.load(t);
          (f.sdf = !0), (this._materialKey = f.data);
        }
        static fromLabelClass(t, e) {
          if ('esriServerLinePlacementCenterAlong' === t.labelPlacement) {
            const e = t.symbol;
            (e.xoffset = 0),
              (e.yoffset = 0),
              (e.angle = 0),
              (e.font.decoration = 'none');
          }
          return new gs(t.materialKey, t, t.symbol, e);
        }
        get _shapedBox() {
          return (0, l.Wg)(this._shapingInfo).bounds;
        }
        setZoomLevel(t) {
          this._zoomLevel = t;
        }
        bindReferenceTemplate(t) {
          let e = (0, H.g)(this._xAlignD),
            s = (0, H.tf)(this._yAlignD);
          if (((this._refOffsetX = 0), (this._refOffsetY = 0), (0, l.Wi)(t)))
            return void (this._refSymbolAndPlacementOffset = (0, J.Jz)(
              0,
              0,
              ds(e),
              ds(s),
            ));
          if ('circle' === t.boundsType && (e || s)) {
            const t = Math.sqrt(e * e + s * s);
            (e /= t), (s /= t);
          }
          const i = Math.max(t.height, t.width),
            r = 4 * this._refPlacementPadding;
          (this._refSymbolAndPlacementOffset = (0, J.Jz)(r, i, ds(e), ds(s))),
            (this._referenceSize = i),
            (this._refPlacementDirX = e),
            (this._refPlacementDirY = s),
            (this._refOffsetX = t.xOffset),
            (this._refOffsetY = t.yOffset);
        }
        _write(t, e) {
          if ((0, l.Wi)(this._shapingInfo)) return;
          const s = this._shapingInfo,
            i = e.getDisplayId(),
            r =
              'esriGeometryPolygon' === e.geometryType
                ? e.readLegacyCentroid()
                : e.readLegacyGeometry();
          if (r)
            switch (
              ((this.current = {
                out: t,
                inId: i,
                inShaping: s,
                zoomLevel: this._zoomLevel,
              }),
              e.geometryType)
            ) {
              case 'esriGeometryPolyline':
                this._placeLineLabels(r);
                break;
              case 'esriGeometryPoint':
              case 'esriGeometryPolygon':
                this._placePointLabels(r);
                break;
              default:
                ((t, e = 'mapview-labeling') => {
                  fs.error(new o.Z(e, t));
                })(
                  'mapview-labeling',
                  `Geometry of type ${e.geometryType} is not supported`,
                );
            }
        }
        _isVisible(t, e) {
          const s = ms(this.current.zoomLevel);
          return ms(t) <= s && s <= ms(e);
        }
        _placePointLabels(t) {
          const { out: e, inId: s, inShaping: i } = this.current;
          this._writeGlyphs(e, s, t, i);
        }
        _placeLineLabels(t) {
          const e = (function (t, e) {
              const s = e;
              for (let e = 0; e < t.length; e++) {
                let i = t[e];
                const r = [];
                r.push(i[0]);
                for (let t = 1; t < i.length; t++) {
                  let [e, s] = r[t - 1];
                  (e += i[t][0]), (s += i[t][1]), r.push([e, s]);
                }
                at(r, s);
                const n = [];
                n.push(r[0]);
                for (let t = 1; t < r.length; t++) {
                  const [e, s] = r[t - 1],
                    [i, o] = r[t],
                    a = Math.round(i - e),
                    h = Math.round(o - s);
                  n.push([a, h]);
                }
                (t[e] = n), (i = n);
              }
              return t;
            })(t.paths, this.current.inShaping.bounds.width),
            s = this._placeSubdivGlyphs.bind(this),
            i = (this._shapedBox.width + this._repeatLabelDistance) / 2;
          for (const t of e) ot(t, i, s, this._repeatLabel);
        }
        _placeSubdivGlyphs(t, e, s, i) {
          const r = _s(e),
            n = this._shapedBox.width / 2,
            o = Math.sqrt(this._repeatLabelDistance) / 2,
            a = Math.min(s, i - s),
            h = Math.log2(a / (o + n / 2)),
            l = 0 === e ? h : Math.min(r, h),
            c = Math.max(this._minZoom, this.current.zoomLevel + 1 - l),
            u = this.current.zoomLevel - c,
            f = (this._shapedBox.width / 2) * 2 ** u;
          this.current.inShaping.isMultiline
            ? 0 === e && this._placeStraight(t, c)
            : this._allowOverrun && u < 0
            ? this._placeStraightAlong(t, this._minZoom)
            : 'parallel' === this._labelPosition
            ? this._placeStraightAlong(t, c)
            : 'curved' === this._labelPosition && this._placeCurved(t, c, f);
        }
        _placeStraight(t, e) {
          const { out: s, inId: i, inShaping: r } = this.current;
          this._writeGlyphs(s, i, t, r, e);
        }
        _placeCurved(t, e, s) {
          const { out: i, inId: r } = this.current;
          i.metricStart(r, e, t.x, t.y, 0, 0, 0, 0);
          const n = t.clone(),
            o = (t.angle * (180 / Math.PI)) % 360,
            a = (t.angle * (180 / Math.PI) + 180) % 360;
          (this._outLineLabelAngle = ps(o)),
            this._placeFirst(n, e, 1),
            this._placeBack(t, n, e, s, 1),
            this._placeForward(t, n, e, s, 1),
            (this._outLineLabelAngle = ps(a)),
            this._placeFirst(n, e, 0),
            this._placeBack(t, n, e, s, 0),
            this._placeForward(t, n, e, s, 0),
            i.metricEnd();
        }
        _placeStraightAlong(t, e) {
          const { out: s, inId: i } = this.current;
          s.metricStart(i, e, t.x, t.y, 0, 0, 0, 0);
          const r = t.clone(),
            n = (t.angle * (180 / Math.PI)) % 360,
            o = (t.angle * (180 / Math.PI) + 180) % 360;
          (this._outLineLabelAngle = ps(n)),
            this._placeFirst(r, e, 1, !0),
            (this._outLineLabelAngle = ps(o)),
            this._placeFirst(r, e, 0, !0),
            s.metricEnd();
        }
        _placeBack(t, e, s, i, r) {
          const n = t.clone();
          let o = t.backwardLength + 0;
          for (; n.prev() && !(o >= i); )
            this._placeOnSegment(n, e, o, s, -1, r), (o += n.length + 0);
        }
        _placeForward(t, e, s, i, r) {
          const n = t.clone();
          let o = t.remainingLength + 0;
          for (; n.next() && !(o >= i); )
            this._placeOnSegment(n, e, o, s, 1, r), (o += n.length + 0);
        }
        _placeFirst(t, e, s, i = !1) {
          const r = t,
            n = this.current.inShaping,
            o = n.glyphs,
            a = this.current.zoomLevel,
            { out: h, inId: l } = this.current;
          for (const c of o) {
            const o = c.x > n.bounds.x ? s : 1 - s,
              u = o * t.remainingLength + (1 - o) * t.backwardLength,
              f = Math.abs(c.x + c.width / 2 - n.bounds.x),
              _ = Math.max(0, a + Math.log2(f / (u + 0))),
              d = Math.max(e, i ? 0 : _);
            if (
              ((c.maxZoom = 25),
              (c.angle = t.angle + (1 - s) * Math.PI),
              (c.minZoom = d),
              this._writeGlyph(h, l, r.x, r.y, c),
              s && this._isVisible(c.minZoom, c.maxZoom))
            ) {
              const t = c.bounds;
              h.metricBoxWrite(t.center[0], t.center[1], t.width, t.height);
            }
          }
        }
        _placeOnSegment(t, e, s, i, r, n) {
          const o = this.current.inShaping.glyphs,
            { out: a, inId: h } = this.current,
            l = this.current.inShaping,
            c = this.current.zoomLevel,
            u = t.dx / t.length,
            f = t.dy / t.length,
            _ = { x: t.x + s * -r * u, y: t.y + s * -r * f };
          for (const u of o) {
            const o = u.x > l.bounds.x ? n : 1 - n;
            if (!((o && 1 === r) || (!o && -1 === r))) continue;
            const f = Math.abs(u.x + u.width / 2 - l.bounds.x),
              d = Math.max(0, c + Math.log2(f / s) - 0.1),
              m = Math.max(i, c + Math.log2(f / (s + t.length + 0)));
            if (
              0 !== d &&
              ((u.angle = t.angle + (1 - n) * Math.PI),
              (u.minZoom = m),
              (u.maxZoom = d),
              this._writeGlyph(a, h, _.x, _.y, u),
              n && this._isVisible(u.minZoom, u.maxZoom))
            ) {
              const s = u.bounds,
                i = t.x - e.x,
                r = t.y - e.y;
              a.metricBoxWrite(
                s.center[0] + i,
                s.center[1] + r,
                s.width,
                s.height,
              );
            }
          }
        }
        _writeGlyphs(t, e, s, i, r = this._minZoom) {
          if (s.x < 0 || s.x >= 512 || s.y < 0 || s.y >= 512) return;
          const n = s.x + this._refOffsetX,
            o = s.y - this._refOffsetY;
          for (const s of i.glyphs)
            (s.minZoom = r),
              (s.maxZoom = this._maxZoom),
              this._writeGlyph(t, e, n, o, s);
          const a = this._refPlacementDirX,
            h = this._refPlacementDirY,
            l = i.boundsT;
          t.metricStart(
            e,
            r,
            n,
            o,
            a,
            h,
            this._referenceSize,
            this._materialKey,
          ),
            t.metricBoxWrite(l.center[0], l.center[1], l.width, l.height),
            t.metricEnd();
        }
        _writeVertexCommon(t, e, s, i) {
          const r = this._color,
            n = this._haloColor,
            o = (0, J.Jz)(0, 0, this._size, this._haloSize),
            a = Math.max(i.minZoom, this._minZoom),
            h = Math.min(i.maxZoom, this._maxZoom),
            l = (0, J.Jz)(ms(a), ms(h), this._outLineLabelAngle, 0);
          t.vertexWrite(s),
            t.vertexWrite(e),
            t.vertexWrite(r),
            t.vertexWrite(n),
            t.vertexWrite(o),
            t.vertexWrite(this._refSymbolAndPlacementOffset),
            t.vertexWrite(l);
        }
      }
      const ys = 3.14159265359 / 180,
        xs = (t) =>
          class extends t {
            constructor(...t) {
              super(...t),
                (this.angle = 0),
                (this.xOffset = 0),
                (this.yOffset = 0),
                (this.width = 0),
                (this.height = 0),
                (this.boundsType = 'square'),
                (this._anchorX = 0),
                (this._anchorY = 0),
                (this._computedWidth = 0),
                (this._computedHeight = 0),
                (this._vertexBoundsScaleX = 1),
                (this._vertexBoundsScaleY = 1),
                (this._offsets = {
                  xUpperLeft: 0,
                  yUpperLeft: 0,
                  xUpperRight: 0,
                  yUpperRight: 0,
                  xBottomLeft: 0,
                  yBottomLeft: 0,
                  xBottomRight: 0,
                  yBottomRight: 0,
                }),
                (this.geometryType = E.LW.MARKER);
            }
            _write(t, e, s, i) {
              const r = e.getDisplayId();
              t.recordStart(r, this._materialKey, this.geometryType, !0),
                this._writeGeometry(t, e, r, s, i),
                t.recordEnd();
            }
            _writeGeometry(t, e, s, i, r) {
              if ((0, l.pC)(this._markerPlacement))
                return this._writePlacedMarkers(t, e, i, r);
              if (!r && 'esriGeometryPoint' === e.geometryType) {
                const i = e.getX(),
                  r = e.getY();
                if (
                  !t.hasAggregates &&
                  t.hasPixelBufferEnabled &&
                  (i < 0 || i >= 513 || r < 0 || r >= 513)
                )
                  return;
                return this._writeVertices(t, s, this._getPos(i, r), i, r);
              }
              const n = r
                ? (0, ht.oB)((0, ht.GH)(r), 2)
                : 'esriGeometryPolygon' === e.geometryType
                ? e.readCentroid()
                : e.readGeometryForDisplay();
              if (!(0, l.Wi)(n)) {
                if (n.isPoint) {
                  const [e, i] = n.coords;
                  if (
                    !t.hasAggregates &&
                    t.hasPixelBufferEnabled &&
                    (e < 0 || e >= 512 || i < 0 || i >= 512)
                  )
                    return;
                  return this._writeVertices(t, s, this._getPos(e, i), e, i);
                }
                n.forEachVertex((e, i) =>
                  this._writeVertices(t, s, this._getPos(e, i), e, i),
                );
              }
            }
            _writePlacedMarkers(t, e, s, i) {
              const r = null != i ? i : e.readLegacyGeometryForDisplay(),
                n = ke.getPlacement(
                  r,
                  (0, l.Wg)(this._markerPlacement),
                  (0, X.F2)(1),
                  s.geometryEngine,
                );
              if (!n) return;
              const o = e.getDisplayId(),
                a = Be(),
                h = Ne();
              let c = n.next();
              for (; null != c; ) {
                const e = c.tx,
                  s = -c.ty;
                e >= -128 &&
                  e <= 640 &&
                  s >= -128 &&
                  s <= 640 &&
                  (this._applyTransformation(h, a, -c.getAngle() / ys),
                  this._writeVertices(t, o, this._getPos(e, s), e, s)),
                  (c = n.next());
              }
            }
            _writeVertices(t, e, s, i, r) {
              const n = t.vertexCount();
              if (this.angle) {
                const e = Math.max(
                  this._computedWidth * this._vertexBoundsScaleX,
                  this._computedHeight * this._vertexBoundsScaleY,
                );
                t.vertexBounds(i + this.xOffset, r - this.yOffset, e, e);
              } else
                t.vertexBounds(
                  i + this.xOffset,
                  r - this.yOffset,
                  this._computedWidth * this._vertexBoundsScaleX,
                  this._computedHeight * this._vertexBoundsScaleY,
                );
              t.vertexWrite(s),
                t.vertexWrite(this._offsetUpperLeft),
                t.vertexWrite(this._texUpperLeft),
                t.vertexWrite(this._bitestAndDistRatio),
                t.vertexWrite(e),
                t.vertexWrite(this._fillColor),
                t.vertexWrite(this._outlineColor),
                t.vertexWrite(this._sizeOutlineWidth),
                t.vertexWrite(this._minMaxZoom),
                t.vertexEnd(),
                t.vertexWrite(s),
                t.vertexWrite(this._offsetUpperRight),
                t.vertexWrite(this._texUpperRight),
                t.vertexWrite(this._bitestAndDistRatio),
                t.vertexWrite(e),
                t.vertexWrite(this._fillColor),
                t.vertexWrite(this._outlineColor),
                t.vertexWrite(this._sizeOutlineWidth),
                t.vertexWrite(this._minMaxZoom),
                t.vertexEnd(),
                t.vertexWrite(s),
                t.vertexWrite(this._offsetBottomLeft),
                t.vertexWrite(this._texBottomLeft),
                t.vertexWrite(this._bitestAndDistRatio),
                t.vertexWrite(e),
                t.vertexWrite(this._fillColor),
                t.vertexWrite(this._outlineColor),
                t.vertexWrite(this._sizeOutlineWidth),
                t.vertexWrite(this._minMaxZoom),
                t.vertexEnd(),
                t.vertexWrite(s),
                t.vertexWrite(this._offsetBottomRight),
                t.vertexWrite(this._texBottomRight),
                t.vertexWrite(this._bitestAndDistRatio),
                t.vertexWrite(e),
                t.vertexWrite(this._fillColor),
                t.vertexWrite(this._outlineColor),
                t.vertexWrite(this._sizeOutlineWidth),
                t.vertexWrite(this._minMaxZoom),
                t.vertexEnd(),
                t.indexWrite(n + 0),
                t.indexWrite(n + 1),
                t.indexWrite(n + 2),
                t.indexWrite(n + 1),
                t.indexWrite(n + 3),
                t.indexWrite(n + 2);
            }
            _applyTransformation(t, e, s = 0) {
              Re(t, Xe(this.xOffset, -this.yOffset)),
                this.angle + s !== 0 && Ee(t, t, ys * (this.angle + s));
              const i = this._computedWidth,
                r = this._computedHeight,
                n = (this._anchorX - 0.5) * i,
                o = (this._anchorY - 0.5) * r;
              (0, g.s)(e, n, o),
                (0, g.t)(e, e, t),
                (this._offsetUpperLeft = (0, J.UJ)(16 * e[0], 16 * e[1])),
                (this._offsets.xUpperLeft = e[0]),
                (this._offsets.yUpperLeft = e[1]),
                (0, g.s)(e, n + i, o),
                (0, g.t)(e, e, t),
                (this._offsetUpperRight = (0, J.UJ)(16 * e[0], 16 * e[1])),
                (this._offsets.xUpperRight = e[0]),
                (this._offsets.yUpperRight = e[1]),
                (0, g.s)(e, n, o + r),
                (0, g.t)(e, e, t),
                (this._offsetBottomLeft = (0, J.UJ)(16 * e[0], 16 * e[1])),
                (this._offsets.xBottomLeft = e[0]),
                (this._offsets.yBottomLeft = e[1]),
                (0, g.s)(e, n + i, o + r),
                (0, g.t)(e, e, t),
                (this._offsetBottomRight = (0, J.UJ)(16 * e[0], 16 * e[1])),
                (this._offsets.xBottomRight = e[0]),
                (this._offsets.yBottomRight = e[1]);
            }
            _getPos(t, e) {
              return (0, J.UJ)(Math.round(8 * t), Math.round(8 * e));
            }
          };
      class vs extends xs(cs) {
        constructor(
          t,
          e,
          s,
          i,
          r,
          n,
          o,
          a,
          h,
          l,
          c,
          u,
          f,
          _,
          d,
          m,
          p,
          g,
          y,
          x,
          v,
          M,
          b,
        ) {
          super(),
            (this.angle = i),
            (this.height = o),
            (this.width = n),
            (this.xOffset = e * y),
            (this.yOffset = s * y),
            (this._markerPlacement = x),
            (this._effects = v),
            (this._anchorX = 0.5 - ((0.5 + m) * d.width) / d.width),
            (this._anchorY = 0.5 - ((0.5 + p) * d.height) / d.height),
            (this._minMaxZoom = (0, J.UJ)(
              Math.round(M * z.MI),
              Math.round(b * z.MI),
            ));
          const S =
              (_ === U.v2.MAP ? z.Tz : z.CQ) |
              (c ? z.Uh : 0) |
              (f ? z.oK : 0) |
              (u ? z.e0 : 0),
            P = d && d.sdf,
            w = Z.mE.load(t);
          (w.sdf = P),
            (w.pattern = !0),
            (w.textureBinding = d.textureBinding),
            (this._materialKey = w.data),
            (this._fillColor = r),
            (this._outlineColor = h),
            (this._sizeOutlineWidth = (0, J.Jz)(
              Math.round(Math.min(Math.sqrt(128 * n), 255)),
              Math.round(Math.min(Math.sqrt(128 * o), 255)),
              Math.round(Math.min(Math.sqrt(128 * l), 255)),
              Math.round(Math.min(Math.sqrt(128 * a), 255)),
            ));
          const C = d.rect.x + z.fL,
            L = d.rect.y + z.fL,
            I = C + d.width,
            k = L + d.height;
          (this._offsets.xUpperLeft = C),
            (this._offsets.yUpperLeft = L),
            (this._offsets.xUpperRight = I),
            (this._offsets.yUpperRight = L),
            (this._offsets.xBottomLeft = C),
            (this._offsets.yBottomLeft = k),
            (this._offsets.xBottomRight = I),
            (this._offsets.yBottomRight = k),
            (this._texUpperLeft = (0, J.UJ)(C, L)),
            (this._texUpperRight = (0, J.UJ)(I, L)),
            (this._texBottomLeft = (0, J.UJ)(C, k)),
            (this._texBottomRight = (0, J.UJ)(I, k)),
            (n *= g),
            (o *= g),
            (n *= y),
            (o *= y);
          const T = Math.round(64 * g);
          (this._bitestAndDistRatio = (0, J.UJ)(S, T)),
            (this._computedWidth = n),
            (this._computedHeight = o);
          const E = Be(),
            F = Ne();
          this._applyTransformation(F, E);
        }
        static fromCIMMarker(t, e, s) {
          const i = (e && e.width) || 1,
            r = (e && e.height) || 1,
            n = t.size,
            o = (i / r) * t.scaleX,
            a =
              t.scaleSymbolsProportionally && t.frameHeight
                ? n / t.frameHeight
                : 1;
          let h = (0, Y.t2)(t.color);
          const c = (0, Y.t2)(t.outlineColor),
            u = (0, X.F2)(n),
            f = u * o,
            _ = (0, X.F2)(t.offsetX || 0),
            d = (0, X.F2)(t.offsetY || 0),
            m = (0, X.F2)(t.outlineWidth || 0) * a,
            p = t.alignment || U.v2.SCREEN,
            g = (0, X.F2)(t.referenceSize),
            [y, x] = st(t.scaleInfo, s);
          e.sdf || 0 !== h || (h = -1);
          let v = t.rotation || 0;
          t.rotateClockwise || (v = -v);
          let M = 0,
            b = 0;
          const S = t.anchorPoint;
          S &&
            (t.isAbsoluteAnchorPoint
              ? n && ((M = -S.x / (n * o)), (b = S.y / n))
              : ((M = S.x), (b = S.y)));
          const P = new vs(
            t.materialKey,
            _,
            d,
            v,
            h,
            f,
            u,
            g,
            c,
            m,
            t.colorLocked,
            t.scaleSymbolsProportionally,
            !1,
            p,
            e,
            M,
            b,
            t.sizeRatio,
            (0, l.Pt)(t.scaleFactor, 1),
            t.markerPlacement,
            t.effects,
            y,
            x,
          );
          return (
            (P._vertexBoundsScaleX = t.maxVVSize ? t.maxVVSize / f : 1),
            (P._vertexBoundsScaleY = t.maxVVSize ? t.maxVVSize / u : 1),
            P
          );
        }
        static fromPictureMarker(t, e) {
          const s = Math.round((0, X.F2)(t.width)),
            i = Math.round((0, X.F2)(t.height)),
            r = z.ru,
            n = Math.round((0, X.F2)(t.xoffset || 0)),
            o = Math.round((0, X.F2)(t.yoffset || 0)),
            a = new vs(
              t.materialKey,
              n,
              o,
              t.angle,
              r,
              s,
              i,
              i,
              0,
              0,
              !1,
              !1,
              !1,
              U.v2.SCREEN,
              e,
              0,
              0,
              1,
              1,
              null,
              null,
              0,
              q,
            );
          return (
            (a._vertexBoundsScaleX = t.maxVVSize ? t.maxVVSize / t.width : 1),
            (a._vertexBoundsScaleY = t.maxVVSize ? t.maxVVSize / t.height : 1),
            a
          );
        }
        static fromSimpleMarker(t, e) {
          const s = (0, Y.aH)(t.color),
            i = Math.round((0, X.F2)(t.size)),
            r = i,
            n = Math.round((0, X.F2)(t.xoffset || 0)),
            o = Math.round((0, X.F2)(t.yoffset || 0)),
            a = t.style,
            h = t.outline,
            l = 0 | (h && h.color && (0, Y.aH)(h.color)),
            c = 0 | (h && h.width && Math.round((0, X.F2)(h.width))),
            u = new vs(
              t.materialKey,
              n,
              o,
              t.angle,
              s,
              i,
              r,
              r,
              l,
              c,
              !1,
              !1,
              'esriSMSCross' === a || 'esriSMSX' === a,
              U.v2.SCREEN,
              e,
              0,
              0,
              126 / 64,
              1,
              null,
              null,
              0,
              q,
            );
          return (
            (u.boundsType = 'esriSMSCircle' === a ? 'circle' : 'square'),
            (u._vertexBoundsScaleX = t.maxVVSize ? t.maxVVSize / t.size : 1),
            (u._vertexBoundsScaleY = t.maxVVSize ? t.maxVVSize / t.size : 1),
            u
          );
        }
        static fromLineSymbolMarker(t, e) {
          const s = (0, Y.aH)(t.color),
            i = Math.round((0, X.F2)(6 * t.lineWidth)),
            r = i,
            n = 'cross' === t.style || 'x' === t.style;
          let o;
          switch (t.placement) {
            case 'begin-end':
              o = U.Tx.Both;
              break;
            case 'begin':
              o = U.Tx.JustBegin;
              break;
            case 'end':
              o = U.Tx.JustEnd;
              break;
            default:
              o = U.Tx.None;
          }
          const a = {
              type: 'CIMMarkerPlacementAtExtremities',
              angleToLine: !0,
              offset: 0,
              extremityPlacement: o,
              offsetAlongLine: 0,
            },
            h = new vs(
              t.materialKey,
              0,
              0,
              0,
              s,
              i,
              r,
              r / 6,
              s,
              n ? Math.round((0, X.F2)(t.lineWidth)) : 0,
              !1,
              !1,
              n,
              U.v2.MAP,
              e,
              0,
              0,
              126 / 64,
              1,
              a,
              null,
              0,
              q,
            );
          return (h.boundsType = 'circle' === t.style ? 'circle' : 'square'), h;
        }
      }
      var Ms = s(58333),
        bs = s(55987),
        Ss = (s(95401), s(5428)),
        Ps = s(35362),
        ws = s(31294);
      function Cs(t, e, s, i, r, n, o) {
        Ks = 0;
        const a = (i - s) * n,
          h = r && r.length,
          l = h ? (r[0] - s) * n : a;
        let c,
          u,
          f,
          _,
          d,
          m = Ls(e, s, 0, 0, l, n, !0);
        if (m && m.next !== m.prev) {
          if (
            (h &&
              (m = (function (t, e, s, i, r, n) {
                const o = new Array();
                for (let r = 0, a = i.length; r < a; r++) {
                  const h = Ls(
                    t,
                    e,
                    0,
                    i[r] * n,
                    r < a - 1 ? i[r + 1] * n : s * n,
                    n,
                    !1,
                  );
                  h === h.next && (h.steiner = !0), o.push(As(h));
                }
                o.sort(Xs);
                for (const t of o) Rs(t, r), (r = Is(r, r.next));
                return r;
              })(e, s, i, r, m, n)),
            a > 80 * n)
          ) {
            (c = f = e[0 + s * n]), (u = _ = e[1 + s * n]);
            for (let t = n; t < l; t += n) {
              const i = e[t + s * n],
                r = e[t + 1 + s * n];
              (c = Math.min(c, i)),
                (u = Math.min(u, r)),
                (f = Math.max(f, i)),
                (_ = Math.max(_, r));
            }
            (d = Math.max(f - c, _ - u)), (d = 0 !== d ? 1 / d : 0);
          }
          ks(m, t, n, c, u, d, o, 0);
        }
      }
      function Ls(t, e, s, i, r, n, o) {
        let a;
        if (
          o ===
          (function (t, e, s, i, r, n) {
            let o = 0;
            for (let s = i, a = r - n; s < r; s += n)
              (o +=
                (t[a + e * n] - t[s + e * n]) *
                (t[s + 1 + e * n] + t[a + 1 + e * n])),
                (a = s);
            return o;
          })(t, e, 0, i, r, n) >
            0
        )
          for (let s = i; s < r; s += n)
            a = Es(s + e * n, t[s + e * n], t[s + 1 + e * n], a);
        else
          for (let s = r - n; s >= i; s -= n)
            a = Es(s + e * n, t[s + e * n], t[s + 1 + e * n], a);
        return a && Bs(a, a.next) && (Fs(a), (a = a.next)), a;
      }
      function Is(t, e = t) {
        if (!t) return t;
        let s,
          i = t;
        do {
          if (
            ((s = !1),
            i.steiner || (!Bs(i, i.next) && 0 !== Ws(i.prev, i, i.next)))
          )
            i = i.next;
          else {
            if ((Fs(i), (i = e = i.prev), i === i.next)) break;
            s = !0;
          }
        } while (s || i !== e);
        return e;
      }
      function ks(t, e, s, i, r, n, o, a) {
        if (!t) return;
        !a && n && (t = Os(t, i, r, n));
        let h = t;
        for (; t.prev !== t.next; ) {
          const l = t.prev,
            c = t.next;
          if (n ? zs(t, i, r, n) : Ts(t))
            e.push(l.index / s + o),
              e.push(t.index / s + o),
              e.push(c.index / s + o),
              Fs(t),
              (t = c.next),
              (h = c.next);
          else if ((t = c) === h) {
            a
              ? 1 === a
                ? ks((t = Us(t, e, s, o)), e, s, i, r, n, o, 2)
                : 2 === a && Hs(t, e, s, i, r, n, o)
              : ks(Is(t), e, s, i, r, n, o, 1);
            break;
          }
        }
      }
      function Ts(t) {
        const e = t.prev,
          s = t,
          i = t.next;
        if (Ws(e, s, i) >= 0) return !1;
        let r = t.next.next;
        const n = r;
        let o = 0;
        for (; r !== t.prev && (0 === o || r !== n); ) {
          if (
            (o++,
            Ns(e.x, e.y, s.x, s.y, i.x, i.y, r.x, r.y) &&
              Ws(r.prev, r, r.next) >= 0)
          )
            return !1;
          r = r.next;
        }
        return !0;
      }
      function zs(t, e, s, i) {
        const r = t.prev,
          n = t,
          o = t.next;
        if (Ws(r, n, o) >= 0) return !1;
        const a = r.x < n.x ? (r.x < o.x ? r.x : o.x) : n.x < o.x ? n.x : o.x,
          h = r.y < n.y ? (r.y < o.y ? r.y : o.y) : n.y < o.y ? n.y : o.y,
          l = r.x > n.x ? (r.x > o.x ? r.x : o.x) : n.x > o.x ? n.x : o.x,
          c = r.y > n.y ? (r.y > o.y ? r.y : o.y) : n.y > o.y ? n.y : o.y,
          u = Ds(a, h, e, s, i),
          f = Ds(l, c, e, s, i);
        let _ = t.prevZ,
          d = t.nextZ;
        for (; _ && _.z >= u && d && d.z <= f; ) {
          if (
            _ !== t.prev &&
            _ !== t.next &&
            Ns(r.x, r.y, n.x, n.y, o.x, o.y, _.x, _.y) &&
            Ws(_.prev, _, _.next) >= 0
          )
            return !1;
          if (
            ((_ = _.prevZ),
            d !== t.prev &&
              d !== t.next &&
              Ns(r.x, r.y, n.x, n.y, o.x, o.y, d.x, d.y) &&
              Ws(d.prev, d, d.next) >= 0)
          )
            return !1;
          d = d.nextZ;
        }
        for (; _ && _.z >= u; ) {
          if (
            _ !== t.prev &&
            _ !== t.next &&
            Ns(r.x, r.y, n.x, n.y, o.x, o.y, _.x, _.y) &&
            Ws(_.prev, _, _.next) >= 0
          )
            return !1;
          _ = _.prevZ;
        }
        for (; d && d.z <= f; ) {
          if (
            d !== t.prev &&
            d !== t.next &&
            Ns(r.x, r.y, n.x, n.y, o.x, o.y, d.x, d.y) &&
            Ws(d.prev, d, d.next) >= 0
          )
            return !1;
          d = d.nextZ;
        }
        return !0;
      }
      function Es(t, e, s, i) {
        const r = Zs.create(t, e, s);
        return (
          i
            ? ((r.next = i.next), (r.prev = i), (i.next.prev = r), (i.next = r))
            : ((r.prev = r), (r.next = r)),
          r
        );
      }
      function Fs(t) {
        (t.next.prev = t.prev),
          (t.prev.next = t.next),
          t.prevZ && (t.prevZ.nextZ = t.nextZ),
          t.nextZ && (t.nextZ.prevZ = t.prevZ);
      }
      function As(t) {
        let e = t,
          s = t;
        do {
          (e.x < s.x || (e.x === s.x && e.y < s.y)) && (s = e), (e = e.next);
        } while (e !== t);
        return s;
      }
      function Rs(t, e) {
        if (
          (e = (function (t, e) {
            let s = e;
            const i = t.x,
              r = t.y;
            let n,
              o = -1 / 0;
            do {
              if (r <= s.y && r >= s.next.y && s.next.y !== s.y) {
                const t =
                  s.x + ((r - s.y) * (s.next.x - s.x)) / (s.next.y - s.y);
                if (t <= i && t > o) {
                  if (((o = t), t === i)) {
                    if (r === s.y) return s;
                    if (r === s.next.y) return s.next;
                  }
                  n = s.x < s.next.x ? s : s.next;
                }
              }
              s = s.next;
            } while (s !== e);
            if (!n) return null;
            if (i === o) return n.prev;
            const a = n,
              h = n.x,
              l = n.y;
            let c,
              u = 1 / 0;
            for (s = n.next; s !== a; )
              i >= s.x &&
                s.x >= h &&
                i !== s.x &&
                Ns(r < l ? i : o, r, h, l, r < l ? o : i, r, s.x, s.y) &&
                ((c = Math.abs(r - s.y) / (i - s.x)),
                (c < u || (c === u && s.x > n.x)) &&
                  Gs(s, t) &&
                  ((n = s), (u = c))),
                (s = s.next);
            return n;
          })(t, e))
        ) {
          const s = Js(e, t);
          Is(s, s.next);
        }
      }
      function Os(t, e, s, i) {
        for (let r; r !== t; r = r.next) {
          if (
            ((r = r || t),
            null === r.z && (r.z = Ds(r.x, r.y, e, s, i)),
            r.prev.next !== r || r.next.prev !== r)
          )
            return (r.prev.next = r), (r.next.prev = r), Os(t, e, s, i);
          (r.prevZ = r.prev), (r.nextZ = r.next);
        }
        return (
          (t.prevZ.nextZ = null),
          (t.prevZ = null),
          (function (t) {
            let e,
              s = 1;
            for (;;) {
              let i,
                r = t;
              (t = null), (e = null);
              let n = 0;
              for (; r; ) {
                n++, (i = r);
                let o = 0;
                for (; o < s && i; o++) i = i.nextZ;
                let a = s;
                for (; o > 0 || (a > 0 && i); ) {
                  let s;
                  0 === o
                    ? ((s = i), (i = i.nextZ), a--)
                    : 0 !== a && i
                    ? r.z <= i.z
                      ? ((s = r), (r = r.nextZ), o--)
                      : ((s = i), (i = i.nextZ), a--)
                    : ((s = r), (r = r.nextZ), o--),
                    e ? (e.nextZ = s) : (t = s),
                    (s.prevZ = e),
                    (e = s);
                }
                r = i;
              }
              if (((e.nextZ = null), (s *= 2), n < 2)) return t;
            }
          })(t)
        );
      }
      function Ws(t, e, s) {
        return (e.y - t.y) * (s.x - e.x) - (e.x - t.x) * (s.y - e.y);
      }
      function Vs(t, e, s, i) {
        return (
          !!((Bs(t, e) && Bs(s, i)) || (Bs(t, i) && Bs(s, e))) ||
          (Ws(t, e, s) > 0 != Ws(t, e, i) > 0 &&
            Ws(s, i, t) > 0 != Ws(s, i, e) > 0)
        );
      }
      function Ns(t, e, s, i, r, n, o, a) {
        return (
          (r - o) * (e - a) - (t - o) * (n - a) >= 0 &&
          (t - o) * (i - a) - (s - o) * (e - a) >= 0 &&
          (s - o) * (n - a) - (r - o) * (i - a) >= 0
        );
      }
      function Gs(t, e) {
        return Ws(t.prev, t, t.next) < 0
          ? Ws(t, e, t.next) >= 0 && Ws(t, t.prev, e) >= 0
          : Ws(t, e, t.prev) < 0 || Ws(t, t.next, e) < 0;
      }
      function Ds(t, e, s, i, r) {
        return (
          (t =
            1431655765 &
            ((t =
              858993459 &
              ((t =
                252645135 &
                ((t = 16711935 & ((t = 32767 * (t - s) * r) | (t << 8))) |
                  (t << 4))) |
                (t << 2))) |
              (t << 1))) |
          ((e =
            1431655765 &
            ((e =
              858993459 &
              ((e =
                252645135 &
                ((e = 16711935 & ((e = 32767 * (e - i) * r) | (e << 8))) |
                  (e << 4))) |
                (e << 2))) |
              (e << 1))) <<
            1)
        );
      }
      function Bs(t, e) {
        return t.x === e.x && t.y === e.y;
      }
      function Xs(t, e) {
        return t.x - e.x;
      }
      function Us(t, e, s, i) {
        let r = t;
        do {
          const n = r.prev,
            o = r.next.next;
          !Bs(n, o) &&
            Vs(n, r, r.next, o) &&
            Gs(n, o) &&
            Gs(o, n) &&
            (e.push(n.index / s + i),
            e.push(r.index / s + i),
            e.push(o.index / s + i),
            Fs(r),
            Fs(r.next),
            (r = t = o)),
            (r = r.next);
        } while (r !== t);
        return r;
      }
      function Hs(t, e, s, i, r, n, o) {
        let a = t;
        do {
          let t = a.next.next;
          for (; t !== a.prev; ) {
            if (a.index !== t.index && Ys(a, t)) {
              let h = Js(a, t);
              return (
                (a = Is(a, a.next)),
                (h = Is(h, h.next)),
                ks(a, e, s, i, r, n, o, 0),
                void ks(h, e, s, i, r, n, o, 0)
              );
            }
            t = t.next;
          }
          a = a.next;
        } while (a !== t);
      }
      function Ys(t, e) {
        return (
          t.next.index !== e.index &&
          t.prev.index !== e.index &&
          !(function (t, e) {
            let s = t;
            do {
              if (
                s.index !== t.index &&
                s.next.index !== t.index &&
                s.index !== e.index &&
                s.next.index !== e.index &&
                Vs(s, s.next, t, e)
              )
                return !0;
              s = s.next;
            } while (s !== t);
            return !1;
          })(t, e) &&
          Gs(t, e) &&
          Gs(e, t) &&
          (function (t, e) {
            let s = t,
              i = !1;
            const r = (t.x + e.x) / 2,
              n = (t.y + e.y) / 2;
            do {
              s.y > n != s.next.y > n &&
                s.next.y !== s.y &&
                r < ((s.next.x - s.x) * (n - s.y)) / (s.next.y - s.y) + s.x &&
                (i = !i),
                (s = s.next);
            } while (s !== t);
            return i;
          })(t, e)
        );
      }
      function Js(t, e) {
        const s = Zs.create(t.index, t.x, t.y),
          i = Zs.create(e.index, e.x, e.y),
          r = t.next,
          n = e.prev;
        return (
          (t.next = e),
          (e.prev = t),
          (s.next = r),
          (r.prev = s),
          (i.next = s),
          (s.prev = i),
          (n.next = i),
          (i.prev = n),
          i
        );
      }
      class Zs {
        constructor() {
          (this.index = 0),
            (this.x = 0),
            (this.y = 0),
            (this.prev = null),
            (this.next = null),
            (this.z = null),
            (this.prevZ = null),
            (this.nextZ = null),
            (this.steiner = !1);
        }
        static create(t, e, s) {
          const i = Ks < qs.length ? qs[Ks++] : new Zs();
          return (
            (i.index = t),
            (i.x = e),
            (i.y = s),
            (i.prev = null),
            (i.next = null),
            (i.z = null),
            (i.prevZ = null),
            (i.nextZ = null),
            (i.steiner = !1),
            i
          );
        }
      }
      const qs = new Array();
      let Ks = 0;
      for (let t = 0; t < 8096; t++) qs.push(new Zs());
      const js = new ws.b(0, 0, 0, 1, 0),
        $s = new ws.b(0, 0, 0, 1, 0);
      function Qs(t, e, s) {
        let i = 0;
        for (let r = 1; r < s; r++) {
          const s = t[2 * (e + r - 1)],
            n = t[2 * (e + r - 1) + 1];
          i += (t[2 * (e + r)] - s) * (t[2 * (e + r) + 1] + n);
        }
        return i;
      }
      function ti(t, e, s, i, r) {
        let n = 0;
        for (let o = s; o < i; o += 3) {
          const s = 2 * (t[o] - r),
            i = 2 * (t[o + 1] - r),
            a = 2 * (t[o + 2] - r);
          n += Math.abs(
            (e[s] - e[a]) * (e[i + 1] - e[s + 1]) -
              (e[s] - e[i]) * (e[a + 1] - e[s + 1]),
          );
        }
        return n;
      }
      js.setExtent(z.I_), $s.setExtent(z.I_);
      var ei = s(67327);
      const si = 16,
        ii = (t) =>
          class extends t {
            constructor(...t) {
              super(...t),
                (this.tessellationProperties = {}),
                (this._tessellationOptions = {
                  halfWidth: 0,
                  pixelCoordRatio: 1,
                  offset: 0,
                }),
                (this.geometryType = E.LW.LINE);
            }
            writeGeometry(t, e, s, i) {
              this._writeGeometry(t, e, s, i);
            }
            _initializeTessellator(t) {
              const e = Z.a.load(this._materialKey),
                s = Z.dk.load(this._materialKey),
                i = this._tessellationOptions,
                r =
                  e.vvSizeFieldStops ||
                  e.vvSizeMinMaxValue ||
                  e.vvSizeScaleStops ||
                  e.vvSizeUnitValue,
                n = this.tessellationProperties._halfWidth < z.tQ && !t && !r;
              (this.tessellationProperties.minMaxZoom = this._minMaxZoom),
                (i.wrapDistance = 65535),
                (i.textured = this._isDashed || this._hasPattern),
                (i.offset = this.tessellationProperties.offset),
                (i.halfWidth = this.tessellationProperties._halfWidth);
              const o = n ? 0 : 1,
                a = s.outlinedFill ? ni : ri;
              this._lineTessellator = new ei.z(
                a(this.tessellationProperties, o, o),
                oi(this.tessellationProperties),
                n,
              );
            }
            _write(t, e, s, i) {
              const r = 'esriGeometryPoint' === e.geometryType;
              t.recordStart(
                e.getDisplayId(),
                this._materialKey,
                this.geometryType,
                r,
              ),
                this._writeGeometry(t, e, i, r),
                t.recordEnd();
            }
            _writeGeometry(t, e, s, i) {
              const r = null != s ? s : e.readLegacyGeometryForDisplay(),
                n = this._getLines(r, i);
              (0, l.Wi)(n) || this._writeVertices(t, e, n);
            }
            _getLines(t, e) {
              if ((0, l.Wi)(t)) return null;
              const s = t.paths || t.rings;
              return (0, l.Wi)(s)
                ? null
                : (function (t, e) {
                    $s.setPixelMargin(e);
                    const s = $s,
                      i = -e,
                      r = z.I_ + e;
                    let n = [],
                      o = !1,
                      a = 0;
                    for (; a < t.length; ) {
                      const e = [],
                        h = t[a];
                      if (!h) return null;
                      s.reset(Ps.V.LineString);
                      let [l, c] = h[0];
                      if (o) s.moveTo(l, c);
                      else {
                        if (l < i || l > r || c < i || c > r) {
                          o = !0;
                          continue;
                        }
                        e.push({ x: l, y: c });
                      }
                      let u = !1;
                      const f = h.length;
                      for (let t = 1; t < f; ++t)
                        if (((l += h[t][0]), (c += h[t][1]), o)) s.lineTo(l, c);
                        else {
                          if (l < i || l > r || c < i || c > r) {
                            u = !0;
                            break;
                          }
                          e.push({ x: l, y: c });
                        }
                      if (u) o = !0;
                      else {
                        if (o) {
                          const t = s.resultWithStarts();
                          if (t) for (const e of t) n.push(e);
                        } else n.push({ line: e, start: 0 });
                        a++, (o = !1);
                      }
                    }
                    return (
                      (n = n.filter((t) => t.line.length > 1)),
                      0 === n.length ? null : n
                    );
                  })(s, e ? 256 : 16);
            }
            _writeVertices(t, e, s) {
              const i = e.getDisplayId(),
                r = t.vertexCount(),
                n = this.tessellationProperties,
                o = this._tessellationOptions;
              (n.out = t),
                (n.id = i),
                (n.indexCount = 0),
                (n.vertexCount = 0),
                (n.offset = r),
                (o.capType = this._capType),
                (o.joinType = this._joinType);
              const a = Z.dk.load(this._materialKey);
              this.tessellationProperties.key = a.outlinedFill
                ? a
                : Z.a.load(this._materialKey);
              for (const { line: t, start: e } of s)
                (o.initialDistance = e % 65535),
                  this._lineTessellator.tessellate(t, o);
            }
          },
        ri = (t, e, s) => (i, r, n, o, a, h, l, c, u, f, _) => {
          const d = (0, J.UJ)(_, Math.ceil(si * t._halfWidth)),
            m = (0, J.Jz)(
              Math.round(si * l),
              Math.round(si * c),
              Math.round(si * u),
              Math.round(si * f),
            ),
            p = (0, J.Jz)(si * a, si * h, 0, t._bitset),
            g = t.out;
          return (
            g.vertexBounds(i, r, e, s),
            g.vertexWrite((0, J.UJ)(8 * i, 8 * r)),
            g.vertexWrite(t.id),
            g.vertexWrite(t._fillColor),
            g.vertexWrite(m),
            g.vertexWrite(d),
            g.vertexWrite(t._tl),
            g.vertexWrite(t._br),
            g.vertexWrite(p),
            g.vertexWrite((0, J.UJ)(Math.ceil(si * t._halfReferenceWidth), 0)),
            g.vertexWrite(t.minMaxZoom),
            g.vertexEnd(),
            t.offset + t.vertexCount++
          );
        },
        ni = (t, e, s) => (i, r, n, o, a, h, l, c, u, f, _) => {
          const d = (0, J.Jz)(
              0,
              0,
              si * t._halfWidth,
              si * t._halfReferenceWidth,
            ),
            m = (0, J.Jz)(
              si * l + 128,
              si * c + 128,
              si * u + 128,
              si * f + 128,
            ),
            p = t.out,
            g = (t._bitset << 24) | t.id;
          return (
            p.vertexBounds(i, r, e, s),
            p.vertexWrite((0, J.UJ)(8 * i, 8 * r)),
            p.vertexWrite(g),
            p.vertexWrite(t._fillColor),
            t.key.simple || (p.vertexWrite(0), p.vertexWrite(0)),
            p.vertexWrite(d),
            p.vertexWrite(m),
            t.key.simple || p.vertexWrite(t.minMaxZoom),
            p.vertexEnd(),
            t.offset + t.vertexCount++
          );
        },
        oi = (t) => (e, s, i) => {
          const r = t.out;
          r.indexWrite(e),
            r.indexWrite(s),
            r.indexWrite(i),
            (t.indexCount += 3);
        },
        ai = h.Z.getLogger('esri.views.2d.engine.webgl.WGLLineTemplate');
      class hi extends ii(cs) {
        constructor(t, e, s, i, r, n, o, a, h, l, c, u, f, _, d, m, p, g, y) {
          super();
          const x = Z.a.load(t);
          e &&
            ((x.sdf = e.sdf),
            (x.pattern = !0),
            (x.textureBinding = e.textureBinding)),
            (this._capType = i),
            (this._joinType = r),
            (this._miterLimitCosine = et(n)),
            (this.tessellationProperties._fillColor = o),
            (this.tessellationProperties._tl = a),
            (this.tessellationProperties._br = h),
            (this._hasPattern = l),
            (this._isDashed = c),
            (this._zOrder = m),
            (this._effects = p),
            (this._minMaxZoom = (0, J.UJ)(
              Math.round(g * z.MI),
              Math.round(y * z.MI),
            )),
            (this._materialKey = x.data);
          const v = (f ? z.Uh : 0) | (_ ? z.SD : 0) | (u ? z._6 : 0);
          (this.tessellationProperties._bitset = v),
            (this.tessellationProperties._halfWidth = 0.5 * s),
            (this.tessellationProperties._halfReferenceWidth = 0.5 * d),
            (this.tessellationProperties.offset = 0),
            this._initializeTessellator(!1);
        }
        static fromCIMLine(t, e, s) {
          const i = t.color,
            r = t.scaleFactor || 1,
            n = !!t.dashTemplate;
          let o = t.cap;
          n && o === U.RL.ROUND && (o = U.RL.SQUARE);
          const a = t.join,
            h = (0, X.F2)(t.width) * r,
            l = (0, X.F2)(t.referenceWidth),
            c = (0, X.F2)(t.miterLimit),
            u = (i && (0, Y.t2)(i)) || 0,
            [f, _] = st(t.scaleInfo, s);
          if (!e)
            return new hi(
              t.materialKey,
              e,
              h,
              o,
              a,
              c,
              u,
              0,
              0,
              !1,
              n,
              t.scaleDash,
              t.colorLocked,
              !1,
              l,
              t.zOrder,
              t.effects,
              f,
              _,
            );
          const { rect: d, width: m, height: p } = e,
            g = d.x + z.fL,
            y = d.y + z.fL,
            x = g + m,
            v = y + p,
            M = (0, J.UJ)(g, y),
            b = (0, J.UJ)(x, v);
          return new hi(
            t.materialKey,
            e,
            h,
            o,
            a,
            c,
            u,
            M,
            b,
            !0,
            n,
            t.scaleDash,
            t.colorLocked,
            !1,
            l,
            t.zOrder,
            t.effects,
            f,
            _,
          );
        }
        static fromFillOutline(t) {
          var e;
          return t.isOutlinedFill &&
            t.outline &&
            'esriSLSSolid' === (null == (e = t.outline) ? void 0 : e.style)
            ? hi.fromSimpleLine(
                { hash: '', materialKey: t.materialKey, ...t.outline },
                null,
                !0,
              )
            : null;
        }
        static fromSimpleLine(t, e, s = !1) {
          const { color: i } = t,
            r = 'esriSLSSolid' !== t.style && 'esriSLSNull' !== t.style,
            n = (0, F.ws)(t.cap || 'round'),
            o = (0, F.xV)(t.join || 'round');
          let a = (i && 'esriSLSNull' !== t.style && (0, Y.aH)(i)) || 0;
          'esriSLSNull' === t.style && (a = 0);
          const h = (0, X.F2)(t.width),
            l = t.miterLimit;
          if (!e)
            return new hi(
              t.materialKey,
              e,
              h,
              n,
              o,
              l,
              a,
              0,
              0,
              !1,
              r,
              !0,
              !1,
              s,
              h,
              0,
              null,
              0,
              q,
            );
          const { rect: c, width: u, height: f } = e,
            _ = c.x + z.fL,
            d = c.y + z.fL,
            m = _ + u,
            p = d + f,
            g = (0, J.UJ)(_, d),
            y = (0, J.UJ)(m, p);
          return new hi(
            t.materialKey,
            e,
            h,
            n,
            o,
            l,
            a,
            g,
            y,
            !0,
            r,
            !0,
            !1,
            s,
            h,
            0,
            null,
            0,
            q,
          );
        }
        static fromPictureLineSymbol(t, e, s, i) {
          return ai.error('PictureLineSymbol support does not exist!'), null;
        }
      }
      const li = (t) =>
        class extends t {
          constructor(...t) {
            super(...t),
              (this.forceLibtess = !1),
              (this._bitset = 0),
              (this._lineTemplate = null),
              (this.geometryType = E.LW.FILL);
          }
          _maybeAddLineTemplate(t) {
            this._lineTemplate = hi.fromFillOutline(t);
          }
          _write(t, e, s, i) {
            const r = 'esriGeometryPoint' === e.geometryType,
              n = Z.dk.load(this._materialKey);
            t.recordStart(
              e.getDisplayId(),
              this._materialKey,
              this.geometryType,
              r,
            ),
              this._writeGeometry(t, e, n, i, r),
              n.outlinedFill &&
                (0, l.pC)(this._lineTemplate) &&
                this._lineTemplate.writeGeometry(t, e, i, r),
              t.recordEnd();
          }
          _writeGeometry(t, e, s, i, r) {
            const n = this._getGeometry(e, i, r);
            if ((0, l.Wi)(n)) return;
            const o = [];
            if (
              !(n.maxLength > 100) &&
              !this.forceLibtess &&
              (function (t, e) {
                const {
                    coords: s,
                    lengths: i,
                    hasIndeterminateRingOrder: r,
                  } = e,
                  n = t;
                if (r) return !1;
                let o = 0;
                for (let t = 0; t < i.length; ) {
                  let e = t,
                    r = i[t],
                    a = Qs(s, o, r);
                  const h = [];
                  for (; ++e < i.length; ) {
                    const t = i[e],
                      n = Qs(s, o + r, t);
                    if (!(n > 0)) break;
                    (a += n), h.push(o + r), (r += t);
                  }
                  const l = n.length;
                  Cs(n, s, o, o + r, h, 2, 0);
                  const c = ti(n, s, l, n.length, 0),
                    u = Math.abs(a);
                  if (Math.abs((c - u) / Math.max(1e-7, u)) > 1e-5)
                    return (n.length = 0), !1;
                  (t = e), (o += r);
                }
                return !0;
              })(o, n)
            )
              return void (
                o.length && this._writeVertices(t, e, n.coords, n.lengths, s, o)
              );
            const a = (function (t) {
              const { coords: e, lengths: s } = t,
                { buffer: i } = (0, D.b)(e, s);
              return i;
            })(n);
            this._writeVertices(t, e, a, [a.length / 2], s);
          }
          _writeVertex(t, e, s, i, r, n) {
            const o = (0, J.UJ)(1 * i, 1 * r);
            t.vertexBounds(i, r, 0, 0),
              t.vertexWrite(o),
              t.vertexWrite(e),
              s.dotDensity
                ? t.vertexWriteF32(1 / Math.abs(n.readGeometryArea()))
                : (t.vertexWrite(this.fillColor),
                  s.simple || (t.vertexWrite(this.tl), t.vertexWrite(this.br)),
                  t.vertexWrite(this.aux2),
                  t.vertexWrite(this.aux3),
                  s.simple || t.vertexWrite(this._minMaxZoom));
          }
          _writeVertices(t, e, s, i, r, n) {
            const o = e.getDisplayId(),
              a = (this._bitset << 24) | o,
              h = i.reduce((t, e) => t + e),
              l = r.dotDensity ? 4 : 10,
              c = t.vertexCount();
            t.vertexEnsureSize(l * h);
            let u = 0;
            if (n)
              for (const i of n) {
                const n = s[2 * i],
                  o = s[2 * i + 1];
                this._writeVertex(t, a, r, n, o, e), u++;
              }
            else
              for (let i = 0; i < s.length; i += 2) {
                const n = Math.round(s[i]),
                  o = Math.round(s[i + 1]);
                this._writeVertex(t, a, r, n, o, e), u++;
              }
            t.indexEnsureSize(u);
            for (let e = 0; e < u; e++) t.indexWrite(e + c);
          }
          _getGeometry(t, e, s) {
            const i = e
              ? (0, ht.oB)((0, ht.GH)(e), 2)
              : t.readGeometryForDisplay();
            return i
              ? (function (t, e) {
                  if ((0, l.Wi)(t)) return null;
                  if (
                    !(function (t, e, s) {
                      let i = 0;
                      for (let e = 0; e < t.lengths.length; e++) {
                        const r = t.lengths[e];
                        for (let e = 0; e < r; e++) {
                          const r = t.coords[2 * (e + i)],
                            n = t.coords[2 * (e + i) + 1];
                          if (r < -128 || r > s || n < -128 || n > s) return !0;
                        }
                        i += r;
                      }
                      return !1;
                    })(t, 0, z.I_ + 128)
                  )
                    return t;
                  js.setPixelMargin(e), js.reset(Ps.V.Polygon);
                  let s = 0;
                  for (let e = 0; e < t.lengths.length; e++) {
                    const i = t.lengths[e];
                    let r = t.coords[2 * (0 + s)],
                      n = t.coords[2 * (0 + s) + 1];
                    js.moveTo(r, n);
                    for (let e = 1; e < i; e++)
                      (r = t.coords[2 * (e + s)]),
                        (n = t.coords[2 * (e + s) + 1]),
                        js.lineTo(r, n);
                    js.close(), (s += i);
                  }
                  const i = js.result(!1);
                  if (!i) return null;
                  const r = [],
                    n = [];
                  for (const t of i) {
                    let e = 0;
                    for (const s of t) n.push(s.x), n.push(s.y), e++;
                    r.push(e);
                  }
                  return new Ss.Z(r, n);
                })(i, s ? 256 : 8)
              : null;
          }
        };
      var ci = s(22303),
        ui = s(19153),
        fi = s(59266);
      const _i = [1 / 256, 1 / 65536, 1 / 16777216, 1 / 4294967296];
      !(function (t, e = 0) {
        let s = 0;
        for (let i = 0; i < 4; i++) s += t[e + i] * _i[i];
      })(new Uint8ClampedArray([255, 255, 255, 255]));
      var di = s(71143),
        mi = s(35308),
        pi = s(3172);
      class gi {
        constructor() {
          (this._resourceMap = new Map()),
            (this._inFlightResourceMap = new Map()),
            (this.geometryEngine = null);
        }
        destroy() {
          this._inFlightResourceMap.clear(), this._resourceMap.clear();
        }
        getResource(t) {
          var e;
          return null != (e = this._resourceMap.get(t)) ? e : null;
        }
        async fetchResource(t, e) {
          const s = { width: 0, height: 0 },
            i = this._resourceMap,
            r = i.get(t);
          if (r) return (s.width = r.width), (s.height = r.height), s;
          let n = this._inFlightResourceMap.get(t);
          return (
            n ||
            ((n = (function (t, e) {
              if (t.includes(';base64,')) {
                const e = new Image();
                return (
                  (e.src = t),
                  e
                    .decode()
                    .then(() => ({ ok: !0, value: e }))
                    .catch((e) =>
                      (0, c.D_)(e)
                        ? { ok: !1, error: e }
                        : {
                            ok: !1,
                            error: new o.Z(
                              'invalid-resource',
                              `Could not fetch requested resource at ${t}`,
                            ),
                          },
                    )
                );
              }
              return (0, pi.default)(t, { responseType: 'image', ...e })
                .then((t) => ({ ok: !0, value: t.data }))
                .catch((e) =>
                  (0, c.D_)(e)
                    ? { ok: !1, error: e }
                    : {
                        ok: !1,
                        error: new o.Z(
                          'invalid-resource',
                          `Could not fetch requested resource at ${t}`,
                        ),
                      },
                );
            })(t, e)),
            this._inFlightResourceMap.set(t, n),
            (n = n.then((e) => {
              if ((this._inFlightResourceMap.delete(t), e.ok)) {
                i.set(t, e.value);
                const r = e.value;
                return (s.width = r.width), (s.height = r.height), s;
              }
              return s;
            })),
            n)
          );
        }
        deleteResource(t) {
          this._inFlightResourceMap.delete(t), this._resourceMap.delete(t);
        }
      }
      class yi {
        constructor(t = 0, e = 0, s = 0, i = 0) {
          (this.x = t), (this.y = e), (this.width = s), (this.height = i);
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
      class xi {
        constructor() {}
        rasterizeText(t, e) {
          this._textRasterizationCanvas ||
            (this._textRasterizationCanvas = document.createElement('canvas'));
          const s = this._textRasterizationCanvas,
            i = s.getContext('2d');
          this._setFontProperties(i, e),
            (this.parameters = e),
            (this.textLines = t.split(/\r?\n/)),
            (this.lineHeight = this._computeLineHeight());
          const r = this._computeTextWidth(i, e),
            { decoration: n, weight: o } = e.font;
          this.lineThroughWidthOffset =
            n && 'line-through' === n ? 0.1 * this.lineHeight : 0;
          const a = this.lineHeight * this.textLines.length;
          (s.width = r + 2 * this.lineThroughWidthOffset),
            (s.height = a),
            (this.renderedLineHeight = Math.round(
              this.lineHeight * e.pixelRatio,
            )),
            (this.renderedHaloSize = e.halo.size * e.pixelRatio),
            (this.renderedWidth = r * e.pixelRatio),
            (this.renderedHeight = a * e.pixelRatio),
            (this.lineThroughWidthOffset *= e.pixelRatio),
            (this.fillStyle = (function (t) {
              return `rgba(${t.slice(0, 3).toString()},${t[3]})`;
            })(e.color)),
            (this.haloStyle = (function (t) {
              return `rgb(${t.slice(0, 3).toString()})`;
            })(e.halo.color));
          const h = this.renderedLineHeight,
            l = this.renderedHaloSize;
          this._setFontProperties(i, e);
          const c =
              (function (t, e) {
                return 'center' === t ? 0.5 * e : 'right' === t ? e : 0;
              })(i.textAlign, this.renderedWidth) + l,
            u = l,
            f = l > 0;
          let _ = this.lineThroughWidthOffset,
            d = 0;
          f && this._renderHalo(i, c, u, _, d, e), (d += u), (_ += c);
          for (const t of this.textLines)
            (i.globalCompositeOperation = 'destination-out'),
              (i.fillStyle = 'rgb(0, 0, 0)'),
              i.fillText(t, _, d),
              (i.globalCompositeOperation = 'source-over'),
              (i.fillStyle = this.fillStyle),
              i.fillText(t, _, d),
              n && 'none' !== n && this._renderDecoration(i, _, d, n, o),
              (d += h);
          const m = this.renderedWidth + 2 * this.lineThroughWidthOffset,
            p = this.renderedHeight,
            g = i.getImageData(0, 0, m, p),
            y = new Uint8Array(g.data);
          if (e.premultiplyColors) {
            let t;
            for (let e = 0; e < y.length; e += 4)
              (t = y[e + 3] / 255),
                (y[e] = y[e] * t),
                (y[e + 1] = y[e + 1] * t),
                (y[e + 2] = y[e + 2] * t);
          }
          return {
            size: [m, p],
            image: new Uint32Array(y.buffer),
            sdf: !1,
            simplePattern: !1,
            anchorX: 0,
            anchorY: 0,
          };
        }
        _renderHalo(t, e, s, i, r, n) {
          const o = this.renderedWidth,
            a = this.renderedHeight;
          this._haloRasterizationCanvas ||
            (this._haloRasterizationCanvas = document.createElement('canvas')),
            (this._haloRasterizationCanvas.width = o),
            (this._haloRasterizationCanvas.height = a);
          const h = this._haloRasterizationCanvas,
            l = h.getContext('2d');
          l.clearRect(0, 0, o, a), this._setFontProperties(l, n);
          const { decoration: c, weight: u } = n.font;
          (l.fillStyle = this.haloStyle), (l.strokeStyle = this.haloStyle);
          const f = this.renderedHaloSize < 3;
          (l.lineJoin = f ? 'miter' : 'round'),
            f
              ? this._renderHaloEmulated(l, e, s, c, u)
              : this._renderHaloNative(l, e, s, c, u),
            (t.globalAlpha = this.parameters.halo.color[3]),
            t.drawImage(h, 0, 0, o, a, i, r, o, a),
            (t.globalAlpha = 1);
        }
        _renderHaloEmulated(t, e, s, i, r) {
          const n = this.renderedLineHeight,
            o = this.renderedHaloSize;
          for (const a of this.textLines) {
            for (const [i, r] of vi) t.fillText(a, e + o * i, s + o * r);
            i && 'none' !== i && this._renderDecoration(t, e, s, i, r),
              (s += n);
          }
        }
        _renderHaloNative(t, e, s, i, r) {
          const n = this.renderedLineHeight,
            o = this.renderedHaloSize;
          for (const a of this.textLines) {
            const h = 2 * o,
              l = 5,
              c = 0.1;
            for (let n = 0; n < l; n++) {
              const o = 1 - (l - 1) * c + n * c;
              (t.lineWidth = o * h),
                t.strokeText(a, e, s),
                i && 'none' !== i && this._renderDecoration(t, e, s, i, r);
            }
            s += n;
          }
        }
        _setFontProperties(t, e) {
          const s = e.font,
            i = `${s.style} ${s.weight} ${(0, X.F2)(e.size * e.pixelRatio)}px ${
              s.family
            }, sans-serif`;
          let r;
          switch (
            ((t.font = i), (t.textBaseline = 'top'), e.horizontalAlignment)
          ) {
            case 'left':
            default:
              r = 'left';
              break;
            case 'right':
              r = 'right';
              break;
            case 'center':
              r = 'center';
          }
          t.textAlign = r;
        }
        computeTextSize(t, e) {
          this._textRasterizationCanvas ||
            (this._textRasterizationCanvas = document.createElement('canvas'));
          const s = this._textRasterizationCanvas,
            i = s.getContext('2d');
          this._setFontProperties(i, e),
            (this.parameters = e),
            (this.textLines = t.split(/\r?\n/)),
            (this.lineHeight = this._computeLineHeight());
          const r = this._computeTextWidth(i, e),
            n = this.lineHeight * this.textLines.length;
          return (
            (s.width = r), (s.height = n), [r * e.pixelRatio, n * e.pixelRatio]
          );
        }
        _computeTextWidth(t, e) {
          let s = 0;
          for (const e of this.textLines)
            s = Math.max(s, t.measureText(e).width);
          const i = e.font;
          return (
            ('italic' === i.style ||
              'oblique' === i.style ||
              ('string' == typeof i.weight &&
                ('bold' === i.weight || 'bolder' === i.weight)) ||
              ('number' == typeof i.weight && i.weight > 600)) &&
              (s += 0.3 * t.measureText('w').width),
            (s += 2 * this.parameters.halo.size),
            Math.round(s)
          );
        }
        _computeLineHeight() {
          let t = 1.275 * this.parameters.size;
          const e = this.parameters.font.decoration;
          return (
            e && 'underline' === e && (t *= 1.3),
            Math.round(t + 2 * this.parameters.halo.size)
          );
        }
        _renderDecoration(t, e, s, i, r) {
          const n = 0.9 * this.lineHeight,
            o = 'bold' === r ? 0.06 : 'bolder' === r ? 0.09 : 0.04;
          switch (t.textAlign) {
            case 'center':
              e -= this.renderedWidth / 2;
              break;
            case 'right':
              e -= this.renderedWidth;
          }
          const a = t.textBaseline;
          if ('underline' === i)
            switch (a) {
              case 'top':
                s += n;
                break;
              case 'middle':
                s += n / 2;
            }
          else if ('line-through' === i)
            switch (a) {
              case 'top':
                s += n / 1.5;
                break;
              case 'middle':
                s += n / 3;
            }
          t.save(),
            t.beginPath(),
            (t.strokeStyle = t.fillStyle),
            (t.lineWidth = Math.ceil(n * o)),
            t.moveTo(e - this.lineThroughWidthOffset, s),
            t.lineTo(
              e + this.renderedWidth + 2 * this.lineThroughWidthOffset,
              s,
            ),
            t.stroke(),
            t.restore();
        }
      }
      const vi = [];
      {
        const t = 16;
        for (let e = 0; e < 360; e += 360 / t)
          vi.push([
            Math.cos((Math.PI * e) / 180),
            Math.sin((Math.PI * e) / 180),
          ]);
      }
      const Mi = Math.PI / 180,
        bi = h.Z.getLogger('esri.symbols.cim.CIMSymbolDrawHelper');
      class Si {
        constructor(t) {
          this._t = t;
        }
        static createIdentity() {
          return new Si([1, 0, 0, 0, 1, 0]);
        }
        clone() {
          const t = this._t;
          return new Si(t.slice());
        }
        transform(t) {
          const e = this._t;
          return [
            e[0] * t[0] + e[1] * t[1] + e[2],
            e[3] * t[0] + e[4] * t[1] + e[5],
          ];
        }
        static createScale(t, e) {
          return new Si([t, 0, 0, 0, e, 0]);
        }
        scale(t, e) {
          const s = this._t;
          return (
            (s[0] *= t),
            (s[1] *= t),
            (s[2] *= t),
            (s[3] *= e),
            (s[4] *= e),
            (s[5] *= e),
            this
          );
        }
        scaleRatio() {
          return Math.sqrt(this._t[0] * this._t[0] + this._t[1] * this._t[1]);
        }
        static createTranslate(t, e) {
          return new Si([0, 0, t, 0, 0, e]);
        }
        translate(t, e) {
          const s = this._t;
          return (s[2] += t), (s[5] += e), this;
        }
        static createRotate(t) {
          const e = Math.cos(t),
            s = Math.sin(t);
          return new Si([e, -s, 0, s, e, 0]);
        }
        rotate(t) {
          return Si.multiply(this, Si.createRotate(t), this);
        }
        static multiply(t, e, s) {
          const i = t._t,
            r = e._t,
            n = i[0] * r[0] + i[3] * r[1],
            o = i[1] * r[0] + i[4] * r[1],
            a = i[2] * r[0] + i[5] * r[1] + r[2],
            h = i[0] * r[3] + i[3] * r[4],
            l = i[1] * r[3] + i[4] * r[4],
            c = i[2] * r[3] + i[5] * r[4] + r[5],
            u = s._t;
          return (
            (u[0] = n),
            (u[1] = o),
            (u[2] = a),
            (u[3] = h),
            (u[4] = l),
            (u[5] = c),
            s
          );
        }
        invert() {
          const t = this._t;
          let e = t[0] * t[4] - t[1] * t[3];
          if (0 === e) return new Si([0, 0, 0, 0, 0, 0]);
          e = 1 / e;
          const s = (t[1] * t[5] - t[2] * t[4]) * e,
            i = (t[2] * t[3] - t[0] * t[5]) * e,
            r = t[4] * e,
            n = -t[1] * e,
            o = -t[3] * e,
            a = t[0] * e;
          return new Si([r, n, s, o, a, i]);
        }
      }
      class Pi {
        constructor(t, e) {
          (this._transfos = []),
            (this._sizeTransfos = []),
            (this._geomUnitsPerPoint = 1),
            (this._placementPool = new di.Z(ut, null, null, 100)),
            (this._earlyReturn = !1),
            (this._mapRotation = 0),
            (this._resourceManager = t || new gi()),
            this._transfos.push(e || Si.createIdentity()),
            this._sizeTransfos.push(e ? e.scaleRatio() : 1);
        }
        setTransform(t, e) {
          (this._transfos = [t || Si.createIdentity()]),
            (this._sizeTransfos = [e || (t ? t.scaleRatio() : 1)]);
        }
        setGeomUnitsPerPoint(t) {
          this._geomUnitsPerPoint = t;
        }
        transformPt(t) {
          return this._transfos[this._transfos.length - 1].transform(t);
        }
        transformSize(t) {
          return t * this._sizeTransfos[this._sizeTransfos.length - 1];
        }
        reverseTransformPt(t) {
          return this._transfos[this._transfos.length - 1]
            .invert()
            .transform(t);
        }
        reverseTransformSize(t) {
          return t / this._sizeTransfos[this._sizeTransfos.length - 1];
        }
        geomUnitsPerPoint() {
          return this.isEmbedded() ? 1 : this._geomUnitsPerPoint;
        }
        isEmbedded() {
          return this._transfos.length > 1;
        }
        back() {
          return this._transfos[this._transfos.length - 1];
        }
        push(t, e) {
          const s = e ? t.scaleRatio() : 1;
          Si.multiply(t, this.back(), t),
            this._transfos.push(t),
            this._sizeTransfos.push(
              this._sizeTransfos[this._sizeTransfos.length - 1] * s,
            );
        }
        pop() {
          this._transfos.splice(-1, 1), this._sizeTransfos.splice(-1, 1);
        }
        drawSymbol(t, e) {
          if (t)
            switch (t.type) {
              case 'CIMPointSymbol':
              case 'CIMLineSymbol':
              case 'CIMPolygonSymbol':
                this.drawMultiLayerSymbol(t, e);
                break;
              case 'CIMTextSymbol':
                this.drawTextSymbol(t, e);
            }
        }
        drawMultiLayerSymbol(t, e) {
          if (!t) return;
          const s = t.symbolLayers;
          if (!s) return;
          const i = t.effects;
          if (i && i.length > 0) {
            const t = this.executeEffects(i, e);
            if (t) {
              let e = t.next();
              for (; e; ) this.drawSymbolLayers(s, e), (e = t.next());
            }
          } else this.drawSymbolLayers(s, e);
        }
        executeEffects(t, e) {
          const s = this._resourceManager.geometryEngine;
          let i = new hs(e);
          for (const e of t) {
            const t = Le(e);
            t && (i = t.execute(i, e, this.geomUnitsPerPoint(), s));
          }
          return i;
        }
        drawSymbolLayers(t, e) {
          let s = t.length;
          for (; s--; ) {
            const i = t[s];
            if (!i || !1 === i.enable) continue;
            const r = i.effects;
            if (r && r.length > 0) {
              const t = this.executeEffects(r, e);
              if (t) {
                let e = null;
                for (
                  ;
                  (e = t.next()) &&
                  (this.drawSymbolLayer(i, e), !this._earlyReturn);

                );
              }
            } else this.drawSymbolLayer(i, e);
            if (this._earlyReturn) return;
          }
        }
        drawSymbolLayer(t, e) {
          switch (t.type) {
            case 'CIMSolidFill':
              this.drawSolidFill(e, t.color);
              break;
            case 'CIMHatchFill':
              this.drawHatchFill(e, t);
              break;
            case 'CIMPictureFill':
              this.drawPictureFill(e, t);
              break;
            case 'CIMGradientFill':
              this.drawGradientFill(e, t);
              break;
            case 'CIMSolidStroke':
              this.drawSolidStroke(
                e,
                t.color,
                t.width,
                t.capStyle,
                t.joinStyle,
                t.miterLimit,
              );
              break;
            case 'CIMPictureStroke':
              this.drawPictureStroke(e, t);
              break;
            case 'CIMGradientStroke':
              this.drawGradientStroke(e, t);
              break;
            case 'CIMCharacterMarker':
            case 'CIMPictureMarker':
            case 'CIMVectorMarker':
              this.drawMarkerLayer(t, e);
          }
        }
        drawHatchFill(t, e) {
          const s = this._buildHatchPolyline(e, t, this.geomUnitsPerPoint());
          s &&
            (this.pushClipPath(t),
            this.drawMultiLayerSymbol(e.lineSymbol, s),
            this.popClipPath());
        }
        drawPictureFill(t, e) {}
        drawGradientFill(t, e) {}
        drawPictureStroke(t, e) {}
        drawGradientStroke(t, e) {}
        drawMarkerLayer(t, e) {
          const s = t.markerPlacement;
          if (s) {
            const i = Ie(s);
            if (i) {
              const r = 'CIMMarkerPlacementInsidePolygon' === s.type;
              r && this.pushClipPath(e);
              const n = i.execute(
                e,
                s,
                this.geomUnitsPerPoint(),
                this._resourceManager.geometryEngine,
              );
              if (n) {
                let e = null;
                for (
                  ;
                  (e = n.next()) && (this.drawMarker(t, e), !this._earlyReturn);

                );
              }
              r && this.popClipPath();
            }
          } else {
            const s = this._placementPool.acquire();
            if ((0, ct.wp)(e))
              (s.tx = e.x), (s.ty = e.y), this.drawMarker(t, s);
            else if ((0, ct.oU)(e))
              ([s.tx, s.ty] = (0, mi.tO)(e)), this.drawMarker(t, s);
            else
              for (const i of e.points)
                if (
                  ((s.tx = i[0]),
                  (s.ty = i[1]),
                  this.drawMarker(t, s),
                  this._earlyReturn)
                )
                  break;
            this._placementPool.release(s);
          }
        }
        drawMarker(t, e) {
          switch (t.type) {
            case 'CIMCharacterMarker':
            case 'CIMPictureMarker':
              this.drawPictureMarker(t, e);
              break;
            case 'CIMVectorMarker':
              this.drawVectorMarker(t, e);
          }
        }
        drawPictureMarker(t, e) {
          var s, i, r, n, o;
          if (!t) return;
          const a = this._resourceManager.getResource(t.url),
            h = null != (s = t.size) ? s : 10;
          if ((0, l.Wi)(a) || h <= 0) return;
          const c = a.width,
            u = a.height;
          if (!c || !u) return;
          const f = c / u,
            _ = null != (i = t.scaleX) ? i : 1,
            d = Si.createIdentity(),
            m = t.anchorPoint;
          if (m) {
            let e = m.x,
              s = m.y;
            'Absolute' !== t.anchorPointUnits && ((e *= h * f * _), (s *= h)),
              d.translate(-e, -s);
          }
          let p = null != (r = t.rotation) ? r : 0;
          t.rotateClockwise && (p = -p),
            this._mapRotation && (p += this._mapRotation),
            p && d.rotate(p * Mi);
          let g = null != (n = t.offsetX) ? n : 0,
            y = null != (o = t.offsetY) ? o : 0;
          if (g || y) {
            if (this._mapRotation) {
              const t = Mi * this._mapRotation,
                e = Math.cos(t),
                s = Math.sin(t),
                i = g * s + y * e;
              (g = g * e - y * s), (y = i);
            }
            d.translate(g, y);
          }
          const x = this.geomUnitsPerPoint();
          1 !== x && d.scale(x, x);
          const v = e.getAngle();
          v && d.rotate(v),
            d.translate(e.tx, e.ty),
            this.push(d, !1),
            this.drawImage(t.url, h, t.scaleX),
            this.pop();
        }
        drawVectorMarker(t, e) {
          var s, i, r, n;
          if (!t) return;
          const o = t.markerGraphics;
          if (!o) return;
          const a = null != (s = t.size) ? s : 10,
            h = t.frame,
            l = h ? h.ymax - h.ymin : 0,
            c = a && l ? a / l : 1,
            u = Si.createIdentity();
          h && u.translate(0.5 * -(h.xmax + h.xmin), 0.5 * -(h.ymax + h.ymin));
          const f = t.anchorPoint;
          if (f) {
            let e = f.x,
              s = f.y;
            'Absolute' !== t.anchorPointUnits
              ? h && ((e *= h.xmax - h.xmin), (s *= h.ymax - h.ymin))
              : ((e /= c), (s /= c)),
              u.translate(-e, -s);
          }
          1 !== c && u.scale(c, c);
          let _ = null != (i = t.rotation) ? i : 0;
          t.rotateClockwise && (_ = -_),
            this._mapRotation && (_ += this._mapRotation),
            _ && u.rotate(_ * Mi);
          let d = null != (r = t.offsetX) ? r : 0,
            m = null != (n = t.offsetY) ? n : 0;
          if (d || m) {
            if (this._mapRotation) {
              const t = Mi * this._mapRotation,
                e = Math.cos(t),
                s = Math.sin(t),
                i = d * s + m * e;
              (d = d * e - m * s), (m = i);
            }
            u.translate(d, m);
          }
          const p = this.geomUnitsPerPoint();
          1 !== p && u.scale(p, p);
          const g = e.getAngle();
          g && u.rotate(g),
            u.translate(e.tx, e.ty),
            this.push(u, t.scaleSymbolsProportionally);
          for (const t of o)
            if (
              ((t && t.symbol && t.geometry) ||
                bi.error('Invalid marker graphic', t),
              this.drawSymbol(t.symbol, t.geometry),
              this._earlyReturn)
            )
              break;
          this.pop();
        }
        drawTextSymbol(t, e) {
          var s, i, r, n;
          if (!t) return;
          if (!(0, ct.wp)(e)) return;
          if ((null != (s = t.height) ? s : 10) <= 0) return;
          const o = Si.createIdentity();
          let a = null != (i = t.angle) ? i : 0;
          (a = -a), a && o.rotate(a * Mi);
          const h = null != (r = t.offsetX) ? r : 0,
            l = null != (n = t.offsetY) ? n : 0;
          (h || l) && o.translate(h, l);
          const c = this.geomUnitsPerPoint();
          1 !== c && o.scale(c, c),
            o.translate(e.x, e.y),
            this.push(o, !1),
            this.drawText(t),
            this.pop();
        }
        _buildHatchPolyline(t, e, s) {
          let i = (void 0 !== t.separation ? t.separation : 4) * s,
            r = void 0 !== t.rotation ? t.rotation : 0;
          if (0 === i) return null;
          i < 0 && (i = -i);
          let n = 0;
          const o = 0.5 * i;
          for (; n > o; ) n -= i;
          for (; n < -o; ) n += i;
          const a = (0, T.Ue)();
          (0, ne.$P)(a, e), (a[0] -= o), (a[1] -= o), (a[2] += o), (a[3] += o);
          const h = [
            [a[0], a[1]],
            [a[0], a[3]],
            [a[2], a[3]],
            [a[2], a[1]],
          ];
          for (; r > 180; ) r -= 180;
          for (; r < 0; ) r += 180;
          const l = Math.cos(r * Mi),
            c = Math.sin(r * Mi),
            u = -i * c,
            f = i * l;
          let _, d, m, p;
          (n =
            (void 0 !== t.offsetX ? t.offsetX * s : 0) * c -
            (void 0 !== t.offsetY ? t.offsetY * s : 0) * l),
            (_ = m = Number.MAX_VALUE),
            (d = p = -Number.MAX_VALUE);
          for (const t of h) {
            const e = t[0],
              s = t[1],
              i = l * e + c * s,
              r = -c * e + l * s;
            (_ = Math.min(_, i)),
              (m = Math.min(m, r)),
              (d = Math.max(d, i)),
              (p = Math.max(p, r));
          }
          m = Math.floor(m / i) * i;
          let g = l * _ - c * m - (u * n) / i,
            y = c * _ + l * m - (f * n) / i,
            x = l * d - c * m - (u * n) / i,
            v = c * d + l * m - (f * n) / i;
          const M = 1 + Math.round((p - m) / i),
            b = [];
          for (let t = 0; t < M; t++)
            (g += u),
              (y += f),
              (x += u),
              (v += f),
              b.push([
                [g, y],
                [x, v],
              ]);
          return { paths: b };
        }
      }
      class wi extends Pi {
        constructor(t, e) {
          super(t, e), this.reset();
        }
        reset() {
          (this._xmin = this._ymin = 1 / 0),
            (this._xmax = this._ymax = -1 / 0),
            (this._clipCount = 0);
        }
        envelope() {
          return new yi(
            this._xmin,
            this._ymin,
            this._xmax - this._xmin,
            this._ymax - this._ymin,
          );
        }
        bounds() {
          return (0, T.al)(this._xmin, this._ymin, this._xmax, this._ymax);
        }
        drawSolidFill(t) {
          if (t && !(this._clipCount > 0))
            if ((0, ct.oU)(t)) this._processPath(t.rings, 0);
            else if ((0, ct.l9)(t)) this._processPath(t.paths, 0);
            else if ((0, ct.YX)(t)) {
              const e = Li(t);
              e && this._processPath(e.rings, 0);
            } else console.error('drawSolidFill Unexpected geometry type!');
        }
        drawSolidStroke(t, e, s) {
          if (!t || this._clipCount > 0) return;
          const i = 0.5 * this.transformSize(s);
          if ((0, ct.oU)(t)) this._processPath(t.rings, i);
          else if ((0, ct.l9)(t)) this._processPath(t.paths, i);
          else if ((0, ct.YX)(t)) {
            const e = Li(t);
            e && this._processPath(e.rings, i);
          } else console.error('drawSolidStroke unexpected geometry type!');
        }
        pushClipPath(t) {
          this.drawSolidFill(t), ++this._clipCount;
        }
        popClipPath() {
          --this._clipCount;
        }
        drawImage(t, e, s) {
          let i = s * e,
            r = e;
          const n = this._resourceManager.getResource(t);
          !e && (0, l.pC)(n) && ((i = s * n.width), (r = n.height)),
            this._merge(this.transformPt([-i / 2, -r / 2]), 0),
            this._merge(this.transformPt([-i / 2, r / 2]), 0),
            this._merge(this.transformPt([i / 2, -r / 2]), 0),
            this._merge(this.transformPt([i / 2, r / 2]), 0);
        }
        drawText(t) {
          this._textRasterizer || (this._textRasterizer = new xi());
        }
        _processPath(t, e) {
          if (t)
            for (const s of t) {
              const t = s ? s.length : 0;
              if (t > 1) {
                this._merge(this.transformPt(s[0]), e);
                for (let i = 1; i < t; ++i)
                  this._merge(this.transformPt(s[i]), e);
              }
            }
        }
        _merge(t, e) {
          t[0] - e < this._xmin && (this._xmin = t[0] - e),
            t[0] + e > this._xmax && (this._xmax = t[0] + e),
            t[1] - e < this._ymin && (this._ymin = t[1] - e),
            t[1] + e > this._ymax && (this._ymax = t[1] + e);
        }
      }
      class Ci extends Pi {
        constructor(t, e, s) {
          super(e, s), (this._ctx = t);
        }
        drawSolidFill(t, e) {
          if (!t) return;
          if ((0, ct.oU)(t)) this._buildPath(t.rings, !0);
          else if ((0, ct.l9)(t)) this._buildPath(t.paths, !0);
          else if ((0, ct.YX)(t)) this._buildPath(Li(t).rings, !0);
          else {
            if (!(0, ct.aW)(t)) return;
            console.log('CanvasDrawHelper.drawSolidFill - No implementation!');
          }
          const s = this._ctx;
          (s.fillStyle =
            'string' == typeof e
              ? e
              : 'rgba(' +
                Math.round(e[0]) +
                ',' +
                Math.round(e[1]) +
                ',' +
                Math.round(e[2]) +
                ',' +
                e[3] / 255 +
                ')'),
            s.fill('evenodd');
        }
        drawSolidStroke(t, e, s, i, r, n) {
          if (!t || !e || 0 === s) return;
          if ((0, ct.oU)(t)) this._buildPath(t.rings, !0);
          else if ((0, ct.l9)(t)) this._buildPath(t.paths, !1);
          else {
            if (!(0, ct.YX)(t))
              return void console.log(
                "CanvasDrawHelper.drawSolidStroke isn't implemented!",
              );
            this._buildPath(Li(t).rings, !0);
          }
          const o = this._ctx;
          (o.strokeStyle =
            'string' == typeof e
              ? e
              : 'rgba(' +
                Math.round(e[0]) +
                ',' +
                Math.round(e[1]) +
                ',' +
                Math.round(e[2]) +
                ',' +
                e[3] / 255 +
                ')'),
            (o.lineWidth = this.transformSize(s) + 0.5),
            this._setCapStyle(i),
            this._setJoinStyle(r),
            (o.miterLimit = n),
            o.stroke();
        }
        pushClipPath(t) {
          if ((this._ctx.save(), (0, ct.oU)(t))) this._buildPath(t.rings, !0);
          else if ((0, ct.l9)(t)) this._buildPath(t.paths, !0);
          else {
            if (!(0, ct.YX)(t)) return;
            this._buildPath(Li(t).rings, !0);
          }
          this._ctx.clip('evenodd');
        }
        popClipPath() {
          this._ctx.restore();
        }
        drawImage(t, e, s) {
          const i = this._resourceManager.getResource(t);
          if ((0, l.Wi)(i)) return;
          const r = this._ctx,
            n = r.canvas.width,
            o = r.canvas.height;
          let a = e * s * (i.width / i.height),
            h = s * e;
          e || ((a = s * i.width), (h = s * i.height)),
            this._ctx.drawImage(
              i,
              0,
              0,
              i.width,
              i.height,
              0,
              0,
              Math.min(this.transformSize(a), n),
              Math.min(this.transformSize(h), o),
            );
        }
        drawText(t) {
          this._textRasterizer || (this._textRasterizer = new xi());
        }
        _buildPath(t, e) {
          const s = this._ctx;
          if ((s.beginPath(), t))
            for (const i of t) {
              const t = i ? i.length : 0;
              if (t > 1) {
                let r = this.transformPt(i[0]);
                s.moveTo(r[0], r[1]);
                for (let e = 1; e < t; ++e)
                  (r = this.transformPt(i[e])), s.lineTo(r[0], r[1]);
                e && s.closePath();
              }
            }
        }
        _setCapStyle(t) {
          switch (t) {
            case U.kP.Butt:
              this._ctx.lineCap = 'butt';
              break;
            case U.kP.Round:
              this._ctx.lineCap = 'round';
              break;
            case U.kP.Square:
              this._ctx.lineCap = 'square';
          }
        }
        _setJoinStyle(t) {
          switch (t) {
            case U.r4.Bevel:
              this._ctx.lineJoin = 'bevel';
              break;
            case U.r4.Round:
              this._ctx.lineJoin = 'round';
              break;
            case U.r4.Miter:
              this._ctx.lineJoin = 'miter';
          }
        }
      }
      const Li = (t) =>
        t
          ? {
              spatialReference: t.spatialReference,
              rings: [
                [
                  [t.xmin, t.ymin],
                  [t.xmin, t.ymax],
                  [t.xmax, t.ymax],
                  [t.xmax, t.ymin],
                  [t.xmin, t.ymin],
                ],
              ],
            }
          : null;
      function Ii(t, e, s, i) {
        return (function (t) {
          return 'function' == typeof t;
        })(t)
          ? t(e, s, i)
          : t;
      }
      function ki(t, e) {
        switch (('string' != typeof t && (t = String(t)), e)) {
          case 'LowerCase':
            return t.toLowerCase();
          case 'Allcaps':
            return t.toUpperCase();
          default:
            return t;
        }
      }
      function Ti(t) {
        return t
          ? { r: t[0], g: t[1], b: t[2], a: t[3] / 255 }
          : { r: 0, g: 0, b: 0, a: 0 };
      }
      const zi = (t) => (isNaN(t) || !t ? 0 : t);
      s(31363);
      const Ei = Math.PI,
        Fi = Ei / 2,
        Ai = 96 / 72,
        Ri = (Math.PI, h.Z.getLogger('esri.symbols.cim.CIMSymbolHelper'));
      function Oi(t, e) {
        switch (e.type) {
          case 'CIMSymbolReference':
            return Oi(t, e.symbol);
          case 'CIMPointSymbol': {
            const s = { x: 0, y: 0 };
            t.drawSymbol(e, s);
            break;
          }
          case 'CIMLineSymbol': {
            const s = {
              paths: [
                [
                  [0, 0],
                  [0, 1],
                ],
              ],
            };
            t.drawSymbol(e, s);
            break;
          }
          case 'CIMPolygonSymbol': {
            const s = {
              rings: [
                [
                  [0, 0],
                  [0, 1],
                  [0, 0],
                ],
              ],
            };
            t.drawSymbol(e, s);
            break;
          }
          case 'CIMTextSymbol': {
            const s = { x: 0, y: 0 };
            t.drawSymbol(e, s);
            break;
          }
          case 'CIMVectorMarker': {
            const s = new ut();
            t.drawMarker(e, s);
            break;
          }
        }
        return t.envelope();
      }
      class Wi {
        static getEnvelope(t, e) {
          const s = new wi(e);
          if (Array.isArray(t)) {
            let e;
            for (const i of t) e ? e.union(Oi(s, i)) : (e = Oi(s, i));
            return e;
          }
          return Oi(s, t);
        }
        static getTextureAnchor(t, e) {
          const s = this.getEnvelope(t, e);
          if (!s) return [0, 0, 0];
          const i = (s.x + 0.5 * s.width) * Ai,
            r = -(s.y + 0.5 * s.height) * Ai,
            n = s.width * Ai + 2,
            o = s.height * Ai + 2;
          return [i / n, r / o, o];
        }
        static rasterize(t, e, s, i, r = !0) {
          const n = s || this.getEnvelope(e, i);
          if (!n) return [null, 0, 0, 0, 0];
          const o = (n.x + 0.5 * n.width) * Ai,
            a = (n.y + 0.5 * n.height) * Ai;
          (t.width = n.width * Ai),
            (t.height = n.height * Ai),
            s || ((t.width += 2), (t.height += 2));
          const h = t.getContext('2d'),
            l = Si.createScale(Ai, -Ai);
          l.translate(0.5 * t.width - o, 0.5 * t.height + a);
          const c = new Ci(h, i, l);
          switch (e.type) {
            case 'CIMPointSymbol': {
              const t = { type: 'point', x: 0, y: 0 };
              c.drawSymbol(e, t);
              break;
            }
            case 'CIMVectorMarker': {
              const t = new ut();
              c.drawMarker(e, t);
              break;
            }
          }
          const u = h.getImageData(0, 0, t.width, t.height),
            f = new Uint8Array(u.data);
          if (r) {
            let t;
            for (let e = 0; e < f.length; e += 4)
              (t = f[e + 3] / 255),
                (f[e] = f[e] * t),
                (f[e + 1] = f[e + 1] * t),
                (f[e + 2] = f[e + 2] * t);
          }
          return [f, t.width, t.height, -o / t.width, -a / t.height];
        }
        static fromTextSymbol(t) {
          const {
            angle: e,
            color: s,
            font: i,
            haloColor: r,
            haloSize: o,
            horizontalAlignment: a,
            kerning: h,
            text: l,
            verticalAlignment: c,
            xoffset: u,
            yoffset: f,
          } = t;
          let _, d, m, p, g;
          i &&
            ((_ = i.family),
            (d = i.style),
            (m = i.weight),
            (p = i.size),
            (g = i.decoration));
          let y = !1;
          return (
            l && (y = n(l)[1]),
            {
              type: 'CIMPointSymbol',
              symbolLayers: [
                {
                  type: 'CIMVectorMarker',
                  enable: !0,
                  anchorPointUnits: 'Relative',
                  dominantSizeAxis3D: 'Y',
                  size: 10,
                  billboardMode3D: 'FaceNearPlane',
                  frame: { xmin: -5, ymin: -5, xmax: 5, ymax: 5 },
                  markerGraphics: [
                    {
                      type: 'CIMMarkerGraphic',
                      geometry: { x: 0, y: 0 },
                      symbol: {
                        type: 'CIMTextSymbol',
                        angle: e,
                        blockProgression: U.zV.BTT,
                        depth3D: 1,
                        extrapolateBaselines: !0,
                        fontEffects: U.eZ.Normal,
                        fontEncoding: U.DD.Unicode,
                        fontFamilyName: _ || 'Arial',
                        fontStyleName: Ui(d, m),
                        fontType: U.Ky.Unspecified,
                        haloSize: o,
                        height: p,
                        hinting: U.Dd.Default,
                        horizontalAlignment: Di(null != a ? a : 'center'),
                        kerning: h,
                        letterWidth: 100,
                        ligatures: !0,
                        lineGapType: 'Multiple',
                        offsetX: zi(u),
                        offsetY: zi(f),
                        strikethrough: 'line-through' === g,
                        underline: 'underline' === g,
                        symbol: {
                          type: 'CIMPolygonSymbol',
                          symbolLayers: [
                            { type: 'CIMSolidFill', enable: !0, color: Xi(s) },
                          ],
                        },
                        haloSymbol: {
                          type: 'CIMPolygonSymbol',
                          symbolLayers: [
                            { type: 'CIMSolidFill', enable: !0, color: Xi(r) },
                          ],
                        },
                        shadowColor: [0, 0, 0, 255],
                        shadowOffsetX: 1,
                        shadowOffsetY: 1,
                        textCase: 'Normal',
                        textDirection: y ? U.UX.RTL : U.UX.LTR,
                        verticalAlignment: Bi(null != c ? c : 'baseline'),
                        verticalGlyphOrientation: U.RS.Right,
                        wordSpacing: 100,
                        billboardMode3D: U.UR.FaceNearPlane,
                      },
                      textString: l,
                    },
                  ],
                  scaleSymbolsProportionally: !0,
                  respectFrame: !0,
                },
              ],
              scaleX: 1,
              angleAlignment: 'Display',
            }
          );
        }
        static fromPictureFillSymbol(t) {
          const {
              height: e,
              outline: s,
              width: i,
              xoffset: r,
              xscale: n,
              yoffset: o,
              yscale: a,
            } = t,
            h = [],
            l = { type: 'CIMPolygonSymbol', symbolLayers: h };
          if (s) {
            const { cap: t, join: e, miterLimit: i, width: r } = s;
            h.push({
              type: 'CIMSolidStroke',
              color: Xi(s.color),
              capStyle: Ni(t),
              joinStyle: Gi(e),
              miterLimit: i,
              width: r,
            });
          }
          let c = t.url;
          'esriPFS' === t.type && t.imageData && (c = t.imageData);
          const u = 'angle' in t ? t.angle : 0,
            f = i * (n || 1),
            _ = e * (a || 1);
          return (
            h.push({
              type: 'CIMPictureFill',
              invertBackfaceTexture: !1,
              scaleX: 1,
              textureFilter: U.Qb.Picture,
              tintColor: null,
              url: c,
              height: _,
              width: f,
              offsetX: zi(r),
              offsetY: zi(o),
              rotation: zi(-u),
              colorSubstitutions: null,
            }),
            l
          );
        }
        static fromSimpleFillSymbol(t) {
          const { color: e, style: s, outline: i } = t,
            r = [],
            n = { type: 'CIMPolygonSymbol', symbolLayers: r };
          let o = null;
          if (i) {
            const { cap: t, join: e, style: s } = i;
            'solid' !== s &&
              'none' !== s &&
              'esriSLSSolid' !== s &&
              'esriSLSNull' !== s &&
              (o = [
                {
                  type: 'CIMGeometricEffectDashes',
                  dashTemplate: Ji(s, t),
                  lineDashEnding: 'NoConstraint',
                  scaleDash: !0,
                  offsetAlongLine: null,
                },
              ]),
              r.push({
                type: 'CIMSolidStroke',
                color: Xi(i.color),
                capStyle: Ni(t),
                joinStyle: Gi(e),
                miterLimit: i.miterLimit,
                width: i.width,
                effects: o,
              });
          }
          if (
            s &&
            'solid' !== s &&
            'none' !== s &&
            'esriSFSSolid' !== s &&
            'esriSFSNull' !== s
          ) {
            const t = {
              type: 'CIMLineSymbol',
              symbolLayers: [
                {
                  type: 'CIMSolidStroke',
                  color: Xi(e),
                  capStyle: U.kP.Butt,
                  joinStyle: U.r4.Miter,
                  width: 0.75,
                },
              ],
            };
            let i = 0;
            const n = (0, B.fp)(Math.ceil(window.devicePixelRatio)),
              o = qi(s) ? 8 * n : 10 * n;
            switch (s) {
              case 'vertical':
              case 'esriSFSVertical':
                i = 90;
                break;
              case 'forward-diagonal':
              case 'esriSFSForwardDiagonal':
              case 'diagonal-cross':
              case 'esriSFSDiagonalCross':
                i = -45;
                break;
              case 'backward-diagonal':
              case 'esriSFSBackwardDiagonal':
                i = 45;
                break;
              case 'cross':
              case 'esriSFSCross':
                i = 0;
            }
            r.push({
              type: 'CIMHatchFill',
              lineSymbol: t,
              offsetX: 0,
              offsetY: 0,
              rotation: i,
              separation: o,
            }),
              'cross' === s || 'esriSFSCross' === s
                ? r.push({
                    type: 'CIMHatchFill',
                    lineSymbol: (0, lt.d9)(t),
                    offsetX: 0,
                    offsetY: 0,
                    rotation: 90,
                    separation: o,
                  })
                : ('diagonal-cross' !== s && 'esriSFSDiagonalCross' !== s) ||
                  r.push({
                    type: 'CIMHatchFill',
                    lineSymbol: (0, lt.d9)(t),
                    offsetX: 0,
                    offsetY: 0,
                    rotation: 45,
                    separation: o,
                  });
          } else
            !s ||
              ('solid' !== s && 'esriSFSSolid' !== s) ||
              r.push({ type: 'CIMSolidFill', enable: !0, color: Xi(e) });
          return n;
        }
        static fromSimpleLineSymbol(t) {
          const {
            cap: e,
            color: s,
            join: i,
            marker: r,
            miterLimit: n,
            style: o,
            width: a,
          } = t;
          let h = null;
          'solid' !== o &&
            'none' !== o &&
            'esriSLSSolid' !== o &&
            'esriSLSNull' !== o &&
            (h = [
              {
                type: 'CIMGeometricEffectDashes',
                dashTemplate: Ji(o, e),
                lineDashEnding: 'NoConstraint',
                scaleDash: !0,
                offsetAlongLine: null,
              },
            ]);
          const l = [];
          if (r) {
            let t;
            switch (r.placement) {
              case 'begin-end':
                t = U.Tx.Both;
                break;
              case 'begin':
                t = U.Tx.JustBegin;
                break;
              case 'end':
                t = U.Tx.JustEnd;
                break;
              default:
                t = U.Tx.None;
            }
            const e = Wi.fromSimpleMarker(r, a, s).symbolLayers[0];
            (e.markerPlacement = {
              type: 'CIMMarkerPlacementAtExtremities',
              angleToLine: !0,
              offset: 0,
              extremityPlacement: t,
              offsetAlongLine: 0,
            }),
              l.push(e);
          }
          return (
            'none' !== o &&
              'esriSLSNull' !== o &&
              l.push({
                type: 'CIMSolidStroke',
                color: Xi(s),
                capStyle: Ni(e),
                joinStyle: Gi(i),
                miterLimit: n,
                width: a,
                effects: h,
              }),
            { type: 'CIMLineSymbol', symbolLayers: l }
          );
        }
        static fromPictureMarker(t) {
          const { angle: e, height: s, width: i, xoffset: r, yoffset: n } = t;
          let o = t.url;
          return (
            'esriPMS' === t.type && t.imageData && (o = t.imageData),
            {
              type: 'CIMPointSymbol',
              symbolLayers: [
                {
                  type: 'CIMPictureMarker',
                  invertBackfaceTexture: !1,
                  scaleX: 1,
                  textureFilter: U.Qb.Picture,
                  tintColor: null,
                  url: o,
                  size: s,
                  width: i,
                  offsetX: zi(r),
                  offsetY: zi(n),
                  rotation: zi(-e),
                },
              ],
            }
          );
        }
        static fromSimpleMarker(t, e, s) {
          var i;
          const { style: r } = t,
            n = null != (i = t.color) ? i : s;
          if ('path' === r) {
            const e = [];
            if ('outline' in t && t.outline) {
              const s = t.outline;
              e.push({
                type: 'CIMSolidStroke',
                enable: !0,
                width: (0, X.F2)(Math.round((0, X.Wz)(s.width))),
                color: Xi(s.color),
              });
            }
            e.push({
              type: 'CIMSolidFill',
              enable: !0,
              color: Xi(n),
              path: t.path,
            });
            const [s, i] = Zi('square');
            return {
              type: 'CIMPointSymbol',
              symbolLayers: [
                {
                  type: 'CIMVectorMarker',
                  enable: !0,
                  rotation: zi(-t.angle),
                  size: zi(t.size || 6),
                  offsetX: zi(t.xoffset),
                  offsetY: zi(t.yoffset),
                  frame: s,
                  markerGraphics: [
                    {
                      type: 'CIMMarkerGraphic',
                      geometry: i,
                      symbol: { type: 'CIMPolygonSymbol', symbolLayers: e },
                    },
                  ],
                },
              ],
            };
          }
          const [o, a] = Zi(r);
          let h;
          if (a && o) {
            const s = [];
            if ('outline' in t && t.outline) {
              const e = t.outline;
              s.push({
                type: 'CIMSolidStroke',
                enable: !0,
                width:
                  e.width > 0.667
                    ? (0, X.F2)(Math.round((0, X.Wz)(e.width)))
                    : e.width,
                color: Xi(e.color),
              });
            } else
              !e ||
                'line-marker' !== t.type ||
                ('cross' !== t.style && 'x' !== t.style) ||
                s.push({
                  type: 'CIMSolidStroke',
                  enable: !0,
                  width: e,
                  color: Xi(n),
                });
            s.push({ type: 'CIMSolidFill', enable: !0, color: Xi(n) });
            const i = { type: 'CIMPolygonSymbol', symbolLayers: s };
            h = {
              type: 'CIMPointSymbol',
              symbolLayers: [
                {
                  type: 'CIMVectorMarker',
                  enable: !0,
                  rotation: zi(-t.angle),
                  size: zi(t.size || 6 * e),
                  offsetX: zi(t.xoffset),
                  offsetY: zi(t.yoffset),
                  frame: o,
                  markerGraphics: [
                    { type: 'CIMMarkerGraphic', geometry: a, symbol: i },
                  ],
                },
              ],
            };
          }
          return h;
        }
        static fromCIMHatchFill(t) {
          var e;
          const s = null != (e = t.separation) ? e : 4,
            i = s / 2;
          let r = this._getLineSymbolPeriod(t.lineSymbol) || 4;
          for (; r < 4; ) r *= 2;
          const n = r / 2;
          return {
            type: 'CIMVectorMarker',
            frame: { xmin: -n, xmax: n, ymin: -i, ymax: i },
            markerGraphics: [
              {
                type: 'CIMMarkerGraphic',
                geometry: {
                  paths: [
                    [
                      [-n, 0],
                      [n, 0],
                    ],
                  ],
                },
                symbol: t.lineSymbol,
              },
            ],
            size: s,
          };
        }
        static _getLineSymbolPeriod(t) {
          if (t) {
            const e = this._getEffectsRepeat(t.effects);
            if (e) return e;
            if (t.symbolLayers)
              for (const e of t.symbolLayers) {
                const t = this._getEffectsRepeat(e.effects);
                if (t) return t;
                if (e) {
                  const t = this._getPlacementRepeat(e.markerPlacement);
                  if (t) return t;
                }
              }
          }
          return 0;
        }
        static _getEffectsRepeat(t) {
          if (t)
            for (const e of t)
              if (e)
                switch (e.type) {
                  case 'CIMGeometricEffectDashes': {
                    const t = e.dashTemplate;
                    if (t && t.length) {
                      let e = 0;
                      for (const s of t) e += s;
                      return 1 & t.length && (e *= 2), e;
                    }
                    break;
                  }
                  case 'CIMGeometricEffectWave':
                    return e.period;
                  default:
                    Ri.error(`unsupported geometric effect type ${e.type}`);
                }
          return 0;
        }
        static _getPlacementRepeat(t) {
          if (t)
            switch (t.type) {
              case 'CIMMarkerPlacementAlongLineSameSize':
              case 'CIMMarkerPlacementAlongLineRandomSize':
              case 'CIMMarkerPlacementAlongLineVariableSize': {
                const e = t.placementTemplate;
                if (e && e.length) {
                  let t = 0;
                  for (const s of e) t += s;
                  return 1 & e.length && (t *= 2), t;
                }
                break;
              }
            }
          return 0;
        }
        static fromCIMInsidePolygon(t) {
          const e = t.markerPlacement,
            s = { type: t.type, ...t };
          let i, r, n, o;
          return (
            (s.markerPlacement = null),
            (s.anchorPoint = null),
            !0 === e.shiftOddRows
              ? ((r = e.stepX / 2),
                (n = e.stepY),
                (o = 2 * e.stepY),
                (i = [
                  { x: -r, y: 0 },
                  { x: r, y: 0 },
                  { x: 0, y: n },
                  { x: 0, y: -n },
                ].map((t) => ({
                  type: 'CIMMarkerGraphic',
                  geometry: t,
                  symbol: { type: 'CIMPointSymbol', symbolLayers: [s] },
                }))))
              : ((r = e.stepX / 2),
                (n = e.stepY / 2),
                (o = e.stepY),
                (i = [
                  {
                    type: 'CIMMarkerGraphic',
                    geometry: { x: 0, y: 0 },
                    symbol: { type: 'CIMPointSymbol', symbolLayers: [s] },
                  },
                ])),
            {
              type: 'CIMVectorMarker',
              frame: { xmin: -r, xmax: r, ymin: -n, ymax: n },
              markerGraphics: i,
              size: o,
            }
          );
        }
        static getFillColor(t) {
          if (!t) return null;
          switch (t.type) {
            case 'CIMPolygonSymbol':
              if (t.symbolLayers)
                for (const e of t.symbolLayers) {
                  const t = Wi.getFillColor(e);
                  if (null != t) return t;
                }
              break;
            case 'CIMTextSymbol':
              return Wi.getFillColor(t.symbol);
            case 'CIMSolidFill':
              return t.color;
          }
        }
        static getStrokeColor(t) {
          if (t)
            switch (t.type) {
              case 'CIMPolygonSymbol':
              case 'CIMLineSymbol':
                if (t.symbolLayers)
                  for (const e of t.symbolLayers) {
                    const t = Wi.getStrokeColor(e);
                    if (void 0 !== t) return t;
                  }
                break;
              case 'CIMTextSymbol':
                return Wi.getStrokeColor(t.symbol);
              case 'CIMSolidStroke':
                return t.color;
            }
        }
        static getStrokeWidth(t) {
          if (t)
            switch (t.type) {
              case 'CIMPolygonSymbol':
              case 'CIMLineSymbol':
                if (t.symbolLayers)
                  for (const e of t.symbolLayers) {
                    const t = Wi.getStrokeWidth(e);
                    if (void 0 !== t) return t;
                  }
                break;
              case 'CIMTextSymbol':
                return Wi.getStrokeWidth(t.symbol);
              case 'CIMSolidStroke':
              case 'CIMGradientStroke':
              case 'CIMPictureStroke':
                return t.width;
            }
        }
        static getSize(t) {
          if (t)
            switch (t.type) {
              case 'CIMPointSymbol':
              case 'CIMLineSymbol':
              case 'CIMPolygonSymbol': {
                let e = 0;
                if (t.symbolLayers)
                  for (const s of t.symbolLayers) {
                    const t = Wi.getSize(s);
                    t > e && (e = t);
                  }
                return e;
              }
              case 'CIMSolidStroke':
              case 'CIMPictureStroke':
              case 'CIMGradientStroke':
                return t.width;
              case 'CIMCharacterMarker':
              case 'CIMPictureMarker':
              case 'CIMVectorMarker':
                return t.size;
            }
        }
        static getMarkerScaleRatio(t) {
          if (
            t &&
            'CIMVectorMarker' === t.type &&
            !1 !== t.scaleSymbolsProportionally &&
            t.frame
          ) {
            const e = t.frame.ymax - t.frame.ymin;
            return t.size / e;
          }
          return 1;
        }
      }
      class Vi {
        static findApplicableOverrides(t, e, s) {
          if (t && e) {
            if (t.primitiveName) {
              let i = !1;
              for (const e of s)
                if (e.primitiveName === t.primitiveName) {
                  i = !0;
                  break;
                }
              if (!i)
                for (const i of e)
                  i.primitiveName === t.primitiveName && s.push(i);
            }
            switch (t.type) {
              case 'CIMPointSymbol':
              case 'CIMLineSymbol':
              case 'CIMPolygonSymbol':
                if (t.effects)
                  for (const i of t.effects)
                    Vi.findApplicableOverrides(i, e, s);
                if (t.symbolLayers)
                  for (const i of t.symbolLayers)
                    Vi.findApplicableOverrides(i, e, s);
                break;
              case 'CIMTextSymbol':
                break;
              case 'CIMSolidStroke':
              case 'CIMPictureStroke':
              case 'CIMGradientStroke':
              case 'CIMSolidFill':
              case 'CIMPictureFill':
              case 'CIMHatchFill':
              case 'CIMGradientFill':
              case 'CIMVectorMarker':
              case 'CIMCharacterMarker':
              case 'CIMPictureMarker':
                if (t.effects)
                  for (const i of t.effects)
                    Vi.findApplicableOverrides(i, e, s);
                if (
                  (t.markerPlacement &&
                    Vi.findApplicableOverrides(t.markerPlacement, e, s),
                  'CIMVectorMarker' === t.type)
                ) {
                  if (t.markerGraphics)
                    for (const i of t.markerGraphics)
                      Vi.findApplicableOverrides(i, e, s),
                        Vi.findApplicableOverrides(i.symbol, e, s);
                } else
                  'CIMCharacterMarker' === t.type
                    ? Vi.findApplicableOverrides(t.symbol, e, s)
                    : 'CIMHatchFill' === t.type &&
                      Vi.findApplicableOverrides(t.lineSymbol, e, s);
            }
          }
        }
        static findEffectOverrides(t, e, s) {
          if (!e || !t) return;
          const i = t.length;
          for (let r = 0; r < i; r++) {
            const i = t[r],
              n = null == i ? void 0 : i.primitiveName;
            if (n) {
              let t = !1;
              for (const e of s)
                if (e.primitiveName === n) {
                  t = !0;
                  break;
                }
              if (!t) for (const t of e) t.primitiveName === n && s.push(t);
            }
          }
        }
        static applyOverrides(t, e, s, i) {
          if (!e) return;
          const r = (t) => (t ? t.charAt(0).toLowerCase() + t.substr(1) : t);
          if (t.primitiveName)
            for (const n of e)
              if (n.primitiveName === t.primitiveName) {
                const e = r(n.propertyName);
                if (
                  (i && i.push({ cim: t, nocapPropertyName: e, value: t[e] }),
                  n.expression &&
                    (n.value = Vi.toValue(n.propertyName, n.expression)),
                  s)
                ) {
                  let e = !1;
                  for (const i of s)
                    i.primitiveName === t.primitiveName && (e = !0);
                  e || s.push(n);
                }
                t[e] = n.value;
              }
          switch (t.type) {
            case 'CIMPointSymbol':
            case 'CIMLineSymbol':
            case 'CIMPolygonSymbol':
              if (t.effects)
                for (const r of t.effects) Vi.applyOverrides(r, e, s, i);
              if (t.symbolLayers)
                for (const r of t.symbolLayers) Vi.applyOverrides(r, e, s, i);
              break;
            case 'CIMTextSymbol':
              break;
            case 'CIMSolidStroke':
            case 'CIMSolidFill':
            case 'CIMVectorMarker':
              if (t.effects)
                for (const r of t.effects) Vi.applyOverrides(r, e, s, i);
              if ('CIMVectorMarker' === t.type && t.markerGraphics)
                for (const r of t.markerGraphics)
                  Vi.applyOverrides(r, e, s, i),
                    Vi.applyOverrides(r.symbol, e, s, i);
          }
        }
        static restoreOverrides(t) {
          for (const e of t) e.cim[e.nocapPropertyName] = e.value;
        }
        static buildOverrideKey(t) {
          let e = '';
          for (const s of t)
            void 0 !== s.value &&
              (e += `${s.primitiveName}${s.propertyName}${JSON.stringify(
                s.value,
              )}`);
          return e;
        }
        static toValue(t, e) {
          if ('DashTemplate' === t) return e.split(' ').map((t) => Number(t));
          if ('Color' === t) {
            const t = new ci.Z(e).toRgba();
            return (t[3] *= 255), t;
          }
          return e;
        }
      }
      const Ni = (t) => {
          if (!t) return U.kP.Butt;
          switch (t) {
            case 'butt':
              return U.kP.Butt;
            case 'square':
              return U.kP.Square;
            case 'round':
              return U.kP.Round;
          }
        },
        Gi = (t) => {
          if (!t) return U.r4.Miter;
          switch (t) {
            case 'miter':
              return U.r4.Miter;
            case 'round':
              return U.r4.Round;
            case 'bevel':
              return U.r4.Bevel;
          }
        },
        Di = (t) => {
          if (!t) return 'Center';
          switch (t) {
            case 'left':
              return 'Left';
            case 'right':
              return 'Right';
            case 'center':
              return 'Center';
            case 'justify':
              return 'Justify';
          }
        },
        Bi = (t) => {
          if (!t) return 'Center';
          switch (t) {
            case 'baseline':
              return 'Baseline';
            case 'top':
              return 'Top';
            case 'middle':
              return 'Center';
            case 'bottom':
              return 'Bottom';
          }
        },
        Xi = (t) => {
          if (!t) return [0, 0, 0, 0];
          const { r: e, g: s, b: i, a: r } = t;
          return [e, s, i, 255 * r];
        },
        Ui = (t, e) => {
          const s = Hi(e),
            i = Yi(t);
          return s && i ? `${s}-${i}` : `${s}${i}`;
        },
        Hi = (t) => {
          if (!t) return '';
          switch (t.toLowerCase()) {
            case 'bold':
            case 'bolder':
              return 'bold';
          }
          return '';
        },
        Yi = (t) => {
          if (!t) return '';
          switch (t.toLowerCase()) {
            case 'italic':
            case 'oblique':
              return 'italic';
          }
          return '';
        },
        Ji = (t, e) => {
          const s = 'butt' === e;
          switch (t) {
            case 'dash':
            case 'esriSLSDash':
              return s ? [4, 3] : [3, 4];
            case 'dash-dot':
            case 'esriSLSDashDot':
              return s ? [4, 3, 1, 3] : [3, 4, 0, 4];
            case 'dot':
            case 'esriSLSDot':
              return s ? [1, 3] : [0, 4];
            case 'long-dash':
            case 'esriSLSLongDash':
              return s ? [8, 3] : [7, 4];
            case 'long-dash-dot':
            case 'esriSLSLongDashDot':
              return s ? [8, 3, 1, 3] : [7, 4, 0, 4];
            case 'long-dash-dot-dot':
            case 'esriSLSDashDotDot':
              return s ? [8, 3, 1, 3, 1, 3] : [7, 4, 0, 4, 0, 4];
            case 'short-dash':
            case 'esriSLSShortDash':
              return s ? [4, 1] : [3, 2];
            case 'short-dash-dot':
            case 'esriSLSShortDashDot':
              return s ? [4, 1, 1, 1] : [3, 2, 0, 2];
            case 'short-dash-dot-dot':
            case 'esriSLSShortDashDotDot':
              return s ? [4, 1, 1, 1, 1, 1] : [3, 2, 0, 2, 0, 2];
            case 'short-dot':
            case 'esriSLSShortDot':
              return s ? [1, 1] : [0, 2];
            case 'solid':
            case 'esriSLSSolid':
            case 'none':
              return (
                Ri.error('Unexpected: style does not require rasterization'),
                [0, 0]
              );
            default:
              return (
                Ri.error(
                  `Tried to rasterize SLS, but found an unexpected style: ${t}!`,
                ),
                [0, 0]
              );
          }
        },
        Zi = (t) => {
          const e = 50;
          let s, i;
          const r = t;
          if ('circle' === r || 'esriSMSCircle' === r) {
            const t = 0.25;
            let r = Math.acos(1 - t / e),
              n = Math.ceil(Ei / r / 4);
            0 === n && (n = 1), (r = Fi / n), (n *= 4);
            const o = [];
            o.push([e, 0]);
            for (let t = 1; t < n; t++)
              o.push([e * Math.cos(t * r), -e * Math.sin(t * r)]);
            o.push([e, 0]),
              (s = { rings: [o] }),
              (i = { xmin: -e, ymin: -e, xmax: e, ymax: e });
          } else if ('cross' === r || 'esriSMSCross' === r) {
            const t = 0;
            (s = {
              rings: [
                [
                  [t, e],
                  [t, t],
                  [e, t],
                  [e, -t],
                  [t, -t],
                  [t, -e],
                  [-t, -e],
                  [-t, -t],
                  [-e, -t],
                  [-e, t],
                  [-t, t],
                  [-t, e],
                  [t, e],
                ],
              ],
            }),
              (i = { xmin: -e, ymin: -e, xmax: e, ymax: e });
          } else if ('diamond' === r || 'esriSMSDiamond' === r)
            (s = {
              rings: [
                [
                  [-e, 0],
                  [0, e],
                  [e, 0],
                  [0, -e],
                  [-e, 0],
                ],
              ],
            }),
              (i = { xmin: -e, ymin: -e, xmax: e, ymax: e });
          else if ('square' === r || 'esriSMSSquare' === r)
            (s = {
              rings: [
                [
                  [-e, -e],
                  [-e, e],
                  [e, e],
                  [e, -e],
                  [-e, -e],
                ],
              ],
            }),
              (i = { xmin: -e, ymin: -e, xmax: e, ymax: e });
          else if ('x' === r || 'esriSMSX' === r) {
            const t = 0;
            (s = {
              rings: [
                [
                  [0, t],
                  [e - t, e],
                  [e, e - t],
                  [t, 0],
                  [e, t - e],
                  [e - t, -e],
                  [0, -t],
                  [t - e, -e],
                  [-e, t - e],
                  [-t, 0],
                  [-e, e - t],
                  [t - e, e],
                  [0, t],
                ],
              ],
            }),
              (i = { xmin: -e, ymin: -e, xmax: e, ymax: e });
          } else if ('triangle' === r || 'esriSMSTriangle' === r) {
            const t = 57.735026918962575,
              e = -t,
              r = (2 / 3) * 100,
              n = r - 100;
            (s = {
              rings: [
                [
                  [e, n],
                  [0, r],
                  [t, n],
                  [e, n],
                ],
              ],
            }),
              (i = { xmin: e, ymin: n, xmax: t, ymax: r });
          } else
            'arrow' === r &&
              ((s = {
                rings: [
                  [
                    [-50, 50],
                    [50, 0],
                    [-50, -50],
                    [-33, -20],
                    [-33, 20],
                    [-50, 50],
                  ],
                ],
              }),
              (i = { xmin: -e, ymin: -e, xmax: e, ymax: e }));
          return [i, s];
        },
        qi = (t) =>
          'vertical' === t ||
          'horizontal' === t ||
          'cross' === t ||
          'esriSFSCross' === t ||
          'esriSFSVertical' === t ||
          'esriSFSHorizontal' === t;
      function Ki(t) {
        let e = 1 / 0,
          s = -1 / 0,
          i = 1 / 0,
          r = -1 / 0;
        for (const n of t)
          for (const t of n)
            t[0] < e && (e = t[0]),
              t[0] > s && (s = t[0]),
              t[1] < i && (i = t[1]),
              t[1] > r && (r = t[1]);
        return [e, i, s, r];
      }
      function ji(t) {
        return t
          ? t.rings
            ? Ki(t.rings)
            : t.paths
            ? Ki(t.paths)
            : (0, ct.YX)(t)
            ? [t.xmin, t.ymin, t.xmax, t.ymax]
            : null
          : null;
      }
      function $i(t, e, s, i, r) {
        const [n, o, a, h] = t;
        if (a < n || h < o) return [0, 0, 0];
        const l = a - n,
          c = h - o,
          u = Math.floor(31.5),
          f = (128 - 2 * (u + 1)) / Math.max(l, c),
          _ = Math.round(l * f) + 2 * u,
          d = Math.round(c * f) + 2 * u;
        let m = 1;
        e && (m = d / f / (e.ymax - e.ymin));
        let p = 0,
          g = 0;
        if (i)
          if (r) {
            if (e && s && e.ymax - e.ymin > 0) {
              const t = (e.xmax - e.xmin) / (e.ymax - e.ymin);
              (p = i.x / (s * t)), (g = i.y / s);
            }
          } else (p = i.x), (g = i.y);
        return (
          (p = 0.5 * (e.xmax + e.xmin) + p * (e.xmax - e.xmin)),
          (g = 0.5 * (e.ymax + e.ymin) + g * (e.ymax - e.ymin)),
          (p -= n),
          (g -= o),
          (p *= f),
          (g *= f),
          (p += u),
          (g += u),
          [m, p / _ - 0.5, -(g / d - 0.5)]
        );
      }
      var Qi = s(82397);
      function tr(t, e, s, i, r) {
        const n =
            t.referencesGeometry() && r
              ? (function (t, e, s) {
                  const { transform: i, hasZ: r, hasM: n } = s;
                  er.has(e) ||
                    er.set(
                      e,
                      (function (t) {
                        const e = {};
                        switch (t) {
                          case 'esriGeometryPoint':
                            return (t, s, i, r) => (0, Qi.U1)(s, e, t, i, r);
                          case 'esriGeometryPolygon':
                            return (t, s, i, r) => (0, Qi.Ie)(s, e, t, i, r);
                          case 'esriGeometryPolyline':
                            return (t, s, i, r) => (0, Qi.G6)(s, e, t, i, r);
                          case 'esriGeometryMultipoint':
                            return (t, s, i, r) => (0, Qi.J9)(s, e, t, i, r);
                          default:
                            return (
                              h.Z.getLogger(
                                'esri.views.2d.support.arcadeOnDemand',
                              ).error(
                                new o.Z(
                                  'mapview-arcade',
                                  `Unable to handle geometryType: ${t}`,
                                ),
                              ),
                              (t) => t
                            );
                        }
                      })(e),
                    );
                  const a = er.get(e)(t.geometry, i, r, n);
                  return { ...t, geometry: a };
                })(e, i, r)
              : e,
          a = t.repurposeFeature(n);
        try {
          return t.evaluate({ ...s, $feature: a });
        } catch (t) {
          return (
            h.Z.getLogger('esri.views.2d.support.arcadeOnDemand').warn(
              'Feature arcade evaluation failed:',
              t,
            ),
            null
          );
        }
      }
      const er = new Map();
      const sr = h.Z.getLogger('esri.symbols.cim.cimAnalyzer');
      function ir(t) {
        switch (t) {
          case 'Butt':
            return U.RL.BUTT;
          case 'Square':
            return U.RL.SQUARE;
          default:
            return U.RL.ROUND;
        }
      }
      function rr(t) {
        switch (t) {
          case 'Bevel':
            return U.AH.BEVEL;
          case 'Miter':
            return U.AH.MITER;
          default:
            return U.AH.ROUND;
        }
      }
      function nr(t) {
        switch (t) {
          case 'Left':
          default:
            return 'left';
          case 'Right':
            return 'right';
          case 'Center':
            return 'center';
          case 'Justify':
            return 'justify';
        }
      }
      function or(t) {
        switch (t) {
          case 'Top':
          default:
            return 'top';
          case 'Center':
            return 'middle';
          case 'Baseline':
            return 'baseline';
          case 'Bottom':
            return 'bottom';
        }
      }
      function ar(t, e, s, i) {
        let r;
        t[e] ? (r = t[e]) : ((r = {}), (t[e] = r)), (r[s] = i);
      }
      function hr(t) {
        const e = t.markerPlacement;
        return e && e.angleToLine ? U.v2.MAP : U.v2.SCREEN;
      }
      async function lr(t, e, s, i, r) {
        const n = null != i ? i : [];
        if (!t) return n;
        let o, a;
        const h = {};
        if ('CIMSymbolReference' !== t.type)
          return sr.error("Expect cim type to be 'CIMSymbolReference'"), n;
        if (((o = t.symbol), (a = t.primitiveOverrides), a)) {
          const t = [];
          for (const s of a) {
            const i = s.valueExpressionInfo;
            if (i && e) {
              const r = i.expression,
                n = (0, fi.Yi)(r, e.spatialReference, e.fields).then((t) => {
                  t && ar(h, s.primitiveName, s.propertyName, t);
                });
              t.push(n);
            } else
              null != s.value &&
                ar(h, s.primitiveName, s.propertyName, s.value);
          }
          t.length > 0 && (await Promise.all(t));
        }
        const l = [];
        switch ((Tr(o, s, l), l.length > 0 && (await Promise.all(l)), o.type)) {
          case 'CIMPointSymbol':
          case 'CIMLineSymbol':
          case 'CIMPolygonSymbol':
            !(function (t, e, s, i, r, n, o) {
              if (!t) return;
              const a = t.symbolLayers;
              if (!a) return;
              const h = t.effects;
              let l;
              const c = Wi.getSize(t);
              'CIMPointSymbol' === t.type &&
                'Map' === t.angleAlignment &&
                (l = U.v2.MAP);
              let u = a.length;
              for (; u--; ) {
                const f = a[u];
                if (!f || !1 === f.enable) continue;
                let _;
                h && h.length && (_ = [...h]);
                const d = f.effects;
                d && d.length && (h ? _.push(...d) : (_ = [...d]));
                const m = [];
                let p;
                Vi.findEffectOverrides(_, e, m),
                  (p = m.length > 0 ? Cr(_, m, s, i) : _);
                const g = [];
                switch ((Vi.findApplicableOverrides(f, e, g), f.type)) {
                  case 'CIMSolidFill':
                    cr(f, p, s, g, i, r);
                    break;
                  case 'CIMPictureFill':
                    ur(f, p, s, g, i, n, r);
                    break;
                  case 'CIMHatchFill':
                    fr(f, p, s, g, i, r);
                    break;
                  case 'CIMGradientFill':
                    _r(f, p, s, g, i, r);
                    break;
                  case 'CIMSolidStroke':
                    dr(f, p, s, g, i, r, 'CIMPolygonSymbol' === t.type, c);
                    break;
                  case 'CIMPictureStroke':
                    mr(f, p, s, g, i, r, 'CIMPolygonSymbol' === t.type, c);
                    break;
                  case 'CIMGradientStroke':
                    pr(f, p, s, g, i, r, 'CIMPolygonSymbol' === t.type, c);
                    break;
                  case 'CIMCharacterMarker':
                    if (gr(f, p, s, g, i, r)) break;
                    break;
                  case 'CIMPictureMarker':
                    if (gr(f, p, s, g, i, r)) break;
                    'CIMLineSymbol' === t.type && (l = hr(f)),
                      yr(f, p, s, g, i, n, r, l, c);
                    break;
                  case 'CIMVectorMarker':
                    if (gr(f, p, s, g, i, r)) break;
                    'CIMLineSymbol' === t.type && (l = hr(f)),
                      xr(f, p, s, g, i, r, n, l, c, o);
                    break;
                  default:
                    sr.error('Cannot analyze CIM layer', f.type);
                }
              }
            })(o, a, h, e, n, s, r);
        }
        return n;
      }
      function cr(t, e, s, i, r, n) {
        const o = t.primitiveName,
          a = Ti(t.color),
          [h, l] = kr(i, o, e, null),
          c = (0, ui.hP)(JSON.stringify(t) + l).toString();
        n.push({
          type: 'fill',
          templateHash: c,
          materialHash: h ? () => c : c,
          cim: t,
          materialOverrides: null,
          colorLocked: t.colorLocked,
          color: wr(o, s, 'Color', r, a, Pr),
          height: 0,
          angle: 0,
          offsetX: 0,
          offsetY: 0,
          scaleX: 1,
          effects: e,
        });
      }
      function ur(t, e, s, i, r, n, o) {
        const a = t.primitiveName,
          h = t.tintColor ? Ti(t.tintColor) : { r: 255, g: 255, b: 255, a: 1 },
          [c, u] = kr(i, a, e, null),
          f = (0, ui.hP)(JSON.stringify(t) + u).toString(),
          _ = (0, ui.hP)(
            `${t.url}${JSON.stringify(t.colorSubstitutions)}`,
          ).toString();
        let d = zi(t.scaleX);
        if ('width' in t) {
          const e = t.width;
          let s = 1;
          const i = n.getResource(t.url);
          (0, l.pC)(i) && (s = i.width / i.height), (d /= s * (t.height / e));
        }
        o.push({
          type: 'fill',
          templateHash: f,
          materialHash: c ? () => _ : _,
          cim: t,
          materialOverrides: null,
          colorLocked: t.colorLocked,
          effects: e,
          color: wr(a, s, 'TintColor', r, h, Pr),
          height: wr(a, s, 'Height', r, t.height),
          scaleX: wr(a, s, 'ScaleX', r, d),
          angle: wr(a, s, 'Rotation', r, zi(t.rotation)),
          offsetX: wr(a, s, 'OffsetX', r, zi(t.offsetX)),
          offsetY: wr(a, s, 'OffsetY', r, zi(t.offsetY)),
          url: t.url,
        });
      }
      function fr(t, e, s, i, r, n) {
        const o = ['Rotation', 'OffsetX', 'OffsetY'],
          a = i.filter(
            (e) =>
              e.primitiveName !== t.primitiveName &&
              -1 === o.indexOf(e.propertyName),
          ),
          h = t.primitiveName,
          [l, c] = kr(i, h, e, null),
          u = (0, ui.hP)(JSON.stringify(t) + c).toString(),
          f = (0, ui.hP)(
            `${t.separation}${JSON.stringify(t.lineSymbol)}`,
          ).toString();
        n.push({
          type: 'fill',
          templateHash: u,
          materialHash: l ? Ir(f, s, a, r) : f,
          cim: t,
          materialOverrides: a,
          colorLocked: t.colorLocked,
          effects: e,
          color: { r: 255, g: 255, b: 255, a: 1 },
          height: wr(h, s, 'Separation', r, t.separation),
          scaleX: 1,
          angle: wr(h, s, 'Rotation', r, zi(t.rotation)),
          offsetX: wr(h, s, 'OffsetX', r, zi(t.offsetX)),
          offsetY: wr(h, s, 'OffsetY', r, zi(t.offsetY)),
        });
      }
      function _r(t, e, s, i, r, n) {
        const o = t.primitiveName,
          [a, h] = kr(i, o, e, null),
          l = (0, ui.hP)(JSON.stringify(t) + h).toString();
        n.push({
          type: 'fill',
          templateHash: l,
          materialHash: a ? Ir(l, s, i, r) : l,
          cim: t,
          materialOverrides: null,
          colorLocked: t.colorLocked,
          effects: e,
          color: { r: 128, g: 128, b: 128, a: 1 },
          height: 0,
          angle: 0,
          offsetX: 0,
          offsetY: 0,
          scaleX: 1,
        });
      }
      function dr(t, e, s, i, r, n, o, a) {
        const h = t.primitiveName,
          l = Ti(t.color),
          c = void 0 !== t.width ? t.width : 4,
          u = ir(t.capStyle),
          f = rr(t.joinStyle),
          _ = t.miterLimit,
          [d, m] = kr(i, h, e, null),
          p = (0, ui.hP)(JSON.stringify(t) + m).toString();
        let g, y;
        if (e && e instanceof Array && e.length > 0) {
          const t = e[e.length - 1];
          if (
            'CIMGeometricEffectDashes' === t.type &&
            'NoConstraint' === t.lineDashEnding &&
            null === t.offsetAlongLine
          ) {
            const t = (e = [...e]).pop();
            (g = t.dashTemplate), (y = t.scaleDash);
          }
        }
        n.push({
          type: 'line',
          templateHash: p,
          materialHash: d ? () => p : p,
          cim: t,
          materialOverrides: null,
          isOutline: o,
          colorLocked: t.colorLocked,
          effects: e,
          color: wr(h, s, 'Color', r, l, Pr),
          width: wr(h, s, 'Width', r, c),
          cap: wr(h, s, 'CapStyle', r, u),
          join: wr(h, s, 'JoinStyle', r, f),
          miterLimit: wr(h, s, 'MiterLimit', r, _),
          referenceWidth: a,
          zOrder: Sr(t.name),
          dashTemplate: g,
          scaleDash: y,
        });
      }
      function mr(t, e, s, i, r, n, o, a) {
        const h = (0, ui.hP)(
            `${t.url}${JSON.stringify(t.colorSubstitutions)}`,
          ).toString(),
          l = t.primitiveName,
          c = Ti(t.tintColor),
          u = void 0 !== t.width ? t.width : 4,
          f = ir(t.capStyle),
          _ = rr(t.joinStyle),
          d = t.miterLimit,
          [m, p] = kr(i, l, e, null),
          g = (0, ui.hP)(JSON.stringify(t) + p).toString();
        n.push({
          type: 'line',
          templateHash: g,
          materialHash: m ? () => h : h,
          cim: t,
          materialOverrides: null,
          isOutline: o,
          colorLocked: t.colorLocked,
          effects: e,
          color: wr(l, s, 'TintColor', r, c, Pr),
          width: wr(l, s, 'Width', r, u),
          cap: wr(l, s, 'CapStyle', r, f),
          join: wr(l, s, 'JoinStyle', r, _),
          miterLimit: wr(l, s, 'MiterLimit', r, d),
          referenceWidth: a,
          zOrder: Sr(t.name),
          dashTemplate: null,
          scaleDash: !1,
          url: t.url,
        });
      }
      function pr(t, e, s, i, r, n, o, a) {
        const h = t.primitiveName,
          l = void 0 !== t.width ? t.width : 4,
          c = ir(t.capStyle),
          u = rr(t.joinStyle),
          f = t.miterLimit,
          [_, d] = kr(i, h, e, null),
          m = (0, ui.hP)(JSON.stringify(t) + d).toString();
        n.push({
          type: 'line',
          templateHash: m,
          materialHash: _ ? Ir(m, s, i, r) : m,
          cim: t,
          materialOverrides: null,
          isOutline: o,
          colorLocked: t.colorLocked,
          effects: e,
          color: { r: 128, g: 128, b: 128, a: 1 },
          width: wr(h, s, 'Width', r, l),
          cap: wr(h, s, 'CapStyle', r, c),
          join: wr(h, s, 'JoinStyle', r, u),
          miterLimit: wr(h, s, 'MiterLimit', r, f),
          referenceWidth: a,
          zOrder: Sr(t.name),
          dashTemplate: null,
          scaleDash: !1,
        });
      }
      function gr(t, e, s, i, r, n) {
        const o = t.markerPlacement;
        if (!o || 'CIMMarkerPlacementInsidePolygon' !== o.type) return !1;
        const a = o,
          h = ['Rotation', 'OffsetX', 'OffsetY'],
          l = i.filter(
            (e) =>
              e.primitiveName !== t.primitiveName &&
              -1 === h.indexOf(e.propertyName),
          ),
          c = 'url' in t ? t.url : null,
          [u, f] = kr(i, a.primitiveName, e, null),
          _ = (0, ui.hP)(JSON.stringify(t) + f).toString();
        let d = a.stepY,
          m = null,
          p = 1;
        return (
          o.shiftOddRows &&
            ((d *= 2),
            (m = function (t) {
              return t ? 2 * t : 0;
            }),
            (p = 0.5)),
          n.push({
            type: 'fill',
            templateHash: _,
            materialHash: u ? Ir(_, s, l, r) : _,
            cim: t,
            materialOverrides: l,
            colorLocked: t.colorLocked,
            effects: e,
            color: { r: 255, g: 255, b: 255, a: 1 },
            height: wr(a.primitiveName, s, 'StepY', r, d, m),
            scaleX: p,
            angle: wr(a.primitiveName, s, 'GridAngle', r, a.gridAngle),
            offsetX: wr(a.primitiveName, s, 'OffsetX', r, zi(a.offsetX)),
            offsetY: wr(a.primitiveName, s, 'OffsetY', r, zi(a.offsetY)),
            url: c,
          }),
          !0
        );
      }
      function yr(t, e, s, i, r, n, o, a, h) {
        var c;
        const u = t.primitiveName,
          f = zi(t.size);
        let _ = zi(t.scaleX);
        const d = zi(t.rotation),
          m = zi(t.offsetX),
          p = zi(t.offsetY),
          g = t.tintColor ? Ti(t.tintColor) : { r: 255, g: 255, b: 255, a: 1 },
          y = (0, ui.hP)(
            `${t.url}${JSON.stringify(t.colorSubstitutions)}`,
          ).toString(),
          x = Lr(t.markerPlacement, i, s, r),
          [v, M] = kr(i, u, e, x),
          b = (0, ui.hP)(JSON.stringify(t) + M).toString(),
          S = null != (c = t.anchorPoint) ? c : { x: 0, y: 0 };
        if ('width' in t) {
          const e = t.width;
          let s = 1;
          const i = n.getResource(t.url);
          (0, l.pC)(i) && (s = i.width / i.height), (_ /= s * (f / e));
        }
        o.push({
          type: 'marker',
          templateHash: b,
          materialHash: v ? () => y : y,
          cim: t,
          materialOverrides: null,
          colorLocked: t.colorLocked,
          effects: e,
          scaleSymbolsProportionally: !1,
          alignment: a,
          size: wr(u, s, 'Size', r, f),
          scaleX: wr(u, s, 'ScaleX', r, _),
          rotation: wr(u, s, 'Rotation', r, d),
          offsetX: wr(u, s, 'OffsetX', r, m),
          offsetY: wr(u, s, 'OffsetY', r, p),
          color: wr(u, s, 'TintColor', r, g, Pr),
          anchorPoint: { x: S.x, y: -S.y },
          isAbsoluteAnchorPoint: 'Relative' !== t.anchorPointUnits,
          outlineColor: { r: 0, g: 0, b: 0, a: 0 },
          outlineWidth: 0,
          frameHeight: 0,
          rotateClockwise: t.rotateClockwise,
          referenceSize: h,
          sizeRatio: 1,
          markerPlacement: t.markerPlacement,
          url: t.url,
        });
      }
      function xr(t, e, s, i, r, n, o, a, h, l) {
        const c = t.markerGraphics;
        if (!c) return;
        let u = 0;
        if (t.scaleSymbolsProportionally) {
          const e = t.frame;
          e && (u = e.ymax - e.ymin);
        }
        const f = Lr(t.markerPlacement, i, s, r);
        for (const _ of c)
          if (_) {
            const c = _.symbol;
            if (!c) continue;
            switch (c.type) {
              case 'CIMPointSymbol':
              case 'CIMLineSymbol':
              case 'CIMPolygonSymbol':
                Mr(t, e, f, _, i, s, r, n, o, a, h, u, l);
                break;
              case 'CIMTextSymbol':
                vr(t, e, f, _, s, i, r, n, a, h, u);
            }
          }
      }
      function vr(t, e, s, i, r, n, o, a, h, l, c) {
        Vi.findApplicableOverrides(i, n, []);
        const u = i.geometry;
        if (!('x' in u) || !('y' in u)) return;
        const f = i.symbol,
          _ = (function (t) {
            return t.underline
              ? 'underline'
              : t.strikethrough
              ? 'line-through'
              : 'none';
          })(f),
          d = (function (t) {
            let e = '',
              s = '';
            if (t) {
              const i = t.toLowerCase();
              -1 !== i.indexOf('italic')
                ? (e = 'italic')
                : -1 !== i.indexOf('oblique') && (e = 'oblique'),
                -1 !== i.indexOf('bold')
                  ? (s = 'bold')
                  : -1 !== i.indexOf('light') && (s = 'lighter');
            }
            return { style: e, weight: s };
          })(f.fontStyleName),
          m = (function (t) {
            const e = t.toLowerCase().split(' ').join('-');
            switch (e) {
              case 'serif':
                return 'noto-serif';
              case 'sans-serif':
                return 'arial-unicode-ms';
              case 'monospace':
                return 'ubuntu-mono';
              case 'fantasy':
                return 'cabin-sketch';
              case 'cursive':
                return 'redressed';
              default:
                return e;
            }
          })(f.fontFamilyName);
        f.font = { family: m, decoration: _, ...d };
        const p = t.frame,
          g = u.x - 0.5 * (p.xmin + p.xmax),
          y = u.y - 0.5 * (p.ymin + p.ymax),
          x = t.size / c,
          v = t.primitiveName,
          M = zi(f.height) * x,
          b = zi(f.angle),
          S = zi(t.offsetX) + (zi(f.offsetX) + g) * x,
          P = zi(t.offsetY) + (zi(f.offsetY) + y) * x,
          w = Ti(Wi.getFillColor(f));
        let C = Ti(Wi.getStrokeColor(f)),
          L = Wi.getStrokeWidth(f);
        L || ((C = Ti(Wi.getFillColor(f.haloSymbol))), (L = f.haloSize * x));
        const [I, k] = kr(n, v, e, s),
          T =
            JSON.stringify(t.effects) +
            Number(t.colorLocked) +
            JSON.stringify(t.anchorPoint) +
            t.anchorPointUnits +
            JSON.stringify(t.markerPlacement),
          z = (0, ui.hP)(JSON.stringify(i) + T + k).toString();
        let E = wr(
          i.primitiveName,
          r,
          'TextString',
          o,
          i.textString,
          ki,
          f.textCase,
        );
        if (null == E) return;
        const { fontStyleName: F } = f,
          A = m + (F ? '-' + F.toLowerCase() : '-regular'),
          R = A;
        'string' == typeof E &&
          E.indexOf('[') > -1 &&
          f.fieldMap &&
          (E = (function (t, e, s) {
            const i = (t) => {
                let e = t.length;
                for (; e--; )
                  if (-1 === ' /-,\n'.indexOf(t.charAt(e))) return !1;
                return !0;
              },
              r = [];
            let n = 0,
              o = -1;
            do {
              if (((o = e.indexOf('[', n)), o >= n)) {
                if (o > n) {
                  const t = e.substr(n, o - n);
                  r.push([t, null, i(t)]);
                }
                if (((n = o + 1), (o = e.indexOf(']', n)), o >= n)) {
                  if (o > n) {
                    const s = t[e.substr(n, o - n)];
                    s && r.push([null, s, !1]);
                  }
                  n = o + 1;
                }
              }
            } while (-1 !== o);
            if (n < e.length - 1) {
              const t = e.substr(n);
              r.push([t, null, i(t)]);
            }
            return (t) => {
              let e = '',
                i = null;
              for (const s of r) {
                const [r, n, o] = s;
                if (r) o ? (i = r) : (i && ((e += i), (i = null)), (e += r));
                else {
                  const s = t.attributes[n];
                  s && (i && ((e += i), (i = null)), (e += s));
                }
              }
              return ki(e, s);
            };
          })(f.fieldMap, E, f.textCase)),
          a.push({
            type: 'text',
            templateHash: z,
            materialHash:
              I || 'function' == typeof E || E.match(/\[(.*?)\]/)
                ? (t, e, s) => R + '-' + Ii(E, t, e, s)
                : R + '-' + (0, ui.hP)(E),
            cim: f,
            materialOverrides: null,
            colorLocked: t.colorLocked,
            effects: e,
            alignment: h,
            anchorPoint: {
              x: t.anchorPoint ? t.anchorPoint.x : 0,
              y: t.anchorPoint ? t.anchorPoint.y : 0,
            },
            isAbsoluteAnchorPoint: 'Relative' !== t.anchorPointUnits,
            fontName: A,
            decoration: _,
            weight: wr(v, r, 'Weight', o, d.weight),
            style: wr(v, r, 'Size', o, d.style),
            size: wr(v, r, 'Size', o, M),
            angle: wr(v, r, 'Rotation', o, b),
            offsetX: wr(v, r, 'OffsetX', o, S),
            offsetY: wr(v, r, 'OffsetY', o, P),
            horizontalAlignment: nr(f.horizontalAlignment),
            verticalAlignment: or(f.verticalAlignment),
            text: E,
            color: w,
            outlineColor: C,
            outlineSize: L,
            referenceSize: l,
            sizeRatio: 1,
            markerPlacement: s,
          });
      }
      function Mr(t, e, s, i, r, n, o, a, h, c, u, f, _) {
        const d = i.symbol,
          m = d.symbolLayers;
        if (!m) return;
        if (_) return void br(t, e, s, i, n, r, o, a, h, c, u, f);
        let p = m.length;
        if (zr(m))
          return void (function (t, e, s, i, r, n, o, a, h, l, c, u) {
            const f = i.geometry,
              _ = r[0],
              d = r[1],
              m = ji(f);
            if (!m) return;
            const [p, g, y] = $i(
                m,
                t.frame,
                t.size,
                t.anchorPoint,
                'Relative' !== t.anchorPointUnits,
              ),
              x = { type: 'sdf', geom: f, asFill: !0 },
              v = t.primitiveName,
              M = zi(t.size),
              b = zi(t.rotation),
              S = zi(t.offsetX),
              P = zi(t.offsetY),
              w = d.path,
              C = d.primitiveName,
              L = _.primitiveName,
              I = Ti(Wi.getFillColor(d)),
              k = Ti(Wi.getStrokeColor(_)),
              T = Wi.getStrokeWidth(_);
            let z = !1,
              E = '';
            for (const t of n)
              (t.primitiveName !== C &&
                t.primitiveName !== L &&
                t.primitiveName !== v) ||
                (void 0 !== t.value
                  ? (E += `-${t.primitiveName}-${
                      t.propertyName
                    }-${JSON.stringify(t.value)}`)
                  : t.valueExpressionInfo && (z = !0));
            const F = JSON.stringify({ ...t, markerGraphics: null }),
              A = (0, ui.hP)(JSON.stringify(x) + w).toString(),
              R = {
                type: 'marker',
                templateHash: (0, ui.hP)(
                  JSON.stringify(i) +
                    JSON.stringify(d) +
                    JSON.stringify(_) +
                    F +
                    E,
                ).toString(),
                materialHash: z ? () => A : A,
                cim: x,
                materialOverrides: null,
                colorLocked: t.colorLocked,
                effects: e,
                scaleSymbolsProportionally: t.scaleSymbolsProportionally,
                alignment: l,
                anchorPoint: { x: g, y },
                isAbsoluteAnchorPoint: !1,
                size: wr(t.primitiveName, o, 'Size', a, M),
                rotation: wr(t.primitiveName, o, 'Rotation', a, b),
                offsetX: wr(t.primitiveName, o, 'OffsetX', a, S),
                offsetY: wr(t.primitiveName, o, 'OffsetY', a, P),
                scaleX: 1,
                frameHeight: u,
                rotateClockwise: t.rotateClockwise,
                referenceSize: c,
                sizeRatio: p,
                color: wr(C, o, 'Color', a, I, Pr),
                outlineColor: wr(L, o, 'Color', a, k, Pr),
                outlineWidth: wr(L, o, 'Width', a, T),
                markerPlacement: s,
                path: w,
              };
            h.push(R);
          })(t, e, s, i, m, r, n, o, a, c, u, f);
        const g = ls.applyEffects(d.effects, i.geometry, h.geometryEngine);
        if (g)
          for (; p--; ) {
            const _ = m[p];
            if (_ && !1 !== _.enable)
              switch (_.type) {
                case 'CIMSolidFill':
                case 'CIMSolidStroke': {
                  var y;
                  const d = ls.applyEffects(_.effects, g, h.geometryEngine),
                    m = ji(d);
                  if (!m) continue;
                  const [p, x, v] = $i(
                      m,
                      t.frame,
                      t.size,
                      t.anchorPoint,
                      'Relative' !== t.anchorPointUnits,
                    ),
                    M = 'CIMSolidFill' === _.type,
                    b = { type: 'sdf', geom: d, asFill: M },
                    S = t.primitiveName,
                    P = null != (y = zi(t.size)) ? y : 10,
                    w = zi(t.rotation),
                    C = zi(t.offsetX),
                    L = zi(t.offsetY),
                    I = _.path,
                    k = _.primitiveName,
                    T = Ti(M ? Wi.getFillColor(_) : Wi.getStrokeColor(_)),
                    z = M
                      ? { r: 0, g: 0, b: 0, a: 0 }
                      : Ti(Wi.getStrokeColor(_)),
                    E = Wi.getStrokeWidth(_);
                  if (!M && !E) break;
                  let F = !1,
                    A = '';
                  for (const t of r)
                    (t.primitiveName !== k && t.primitiveName !== S) ||
                      (void 0 !== t.value
                        ? (A += `-${t.primitiveName}-${
                            t.propertyName
                          }-${JSON.stringify(t.value)}`)
                        : t.valueExpressionInfo && (F = !0));
                  (0, l.pC)(e) && 'function' == typeof e && (F = !0);
                  const R = JSON.stringify({ ...t, markerGraphics: null }),
                    O = (0, ui.hP)(JSON.stringify(b) + I).toString(),
                    W = {
                      type: 'marker',
                      templateHash: (0, ui.hP)(
                        JSON.stringify(i) + JSON.stringify(_) + R + A,
                      ).toString(),
                      materialHash: F ? () => O : O,
                      cim: b,
                      materialOverrides: null,
                      colorLocked: t.colorLocked,
                      effects: e,
                      scaleSymbolsProportionally: t.scaleSymbolsProportionally,
                      alignment: c,
                      anchorPoint: { x, y: v },
                      isAbsoluteAnchorPoint: !1,
                      size: wr(t.primitiveName, n, 'Size', o, P),
                      rotation: wr(t.primitiveName, n, 'Rotation', o, w),
                      offsetX: wr(t.primitiveName, n, 'OffsetX', o, C),
                      offsetY: wr(t.primitiveName, n, 'OffsetY', o, L),
                      scaleX: 1,
                      frameHeight: f,
                      rotateClockwise: t.rotateClockwise,
                      referenceSize: u,
                      sizeRatio: p,
                      color: wr(k, n, 'Color', o, T, Pr),
                      outlineColor: wr(k, n, 'Color', o, z, Pr),
                      outlineWidth: wr(k, n, 'Width', o, E),
                      markerPlacement: s,
                      path: I,
                    };
                  a.push(W);
                  break;
                }
                default:
                  br(t, e, s, i, n, r, o, a, h, c, u, f);
              }
          }
      }
      function br(t, e, s, i, r, n, o, a, h, c, u, f) {
        const _ = (function (t, e) {
          return {
            type: t.type,
            enable: !0,
            name: t.name,
            colorLocked: t.colorLocked,
            primitiveName: t.primitiveName,
            anchorPoint: t.anchorPoint,
            anchorPointUnits: t.anchorPointUnits,
            offsetX: 0,
            offsetY: 0,
            rotateClockwise: t.rotateClockwise,
            rotation: 0,
            size: t.size,
            billboardMode3D: t.billboardMode3D,
            depth3D: t.depth3D,
            frame: t.frame,
            markerGraphics: [e],
            scaleSymbolsProportionally: t.scaleSymbolsProportionally,
            respectFrame: t.respectFrame,
            clippingPath: t.clippingPath,
          };
        })(t, i);
        let d = [];
        const m = ['Rotation', 'OffsetX', 'OffsetY'];
        d = n.filter(
          (e) =>
            e.primitiveName !== t.primitiveName ||
            -1 === m.indexOf(e.propertyName),
        );
        let p = '';
        for (const t of n)
          void 0 !== t.value &&
            (p += `-${t.primitiveName}-${t.propertyName}-${JSON.stringify(
              t.value,
            )}`);
        const [g, y, x] = Wi.getTextureAnchor(_, h),
          v = t.primitiveName,
          M = zi(t.rotation),
          b = zi(t.offsetX),
          S = zi(t.offsetY),
          P = (0, ui.hP)(JSON.stringify(_) + p).toString(),
          w = {
            type: 'marker',
            templateHash: P,
            materialHash:
              d.length > 0 || ((0, l.pC)(e) && 'function' == typeof e)
                ? Ir(P, r, d, o)
                : P,
            cim: _,
            materialOverrides: d,
            colorLocked: t.colorLocked,
            effects: e,
            scaleSymbolsProportionally: t.scaleSymbolsProportionally,
            alignment: c,
            anchorPoint: { x: g, y },
            isAbsoluteAnchorPoint: !1,
            size: t.size,
            rotation: wr(v, r, 'Rotation', o, M),
            offsetX: wr(v, r, 'OffsetX', o, b),
            offsetY: wr(v, r, 'OffsetY', o, S),
            color: { r: 255, g: 255, b: 255, a: 1 },
            outlineColor: { r: 0, g: 0, b: 0, a: 0 },
            outlineWidth: 0,
            scaleX: 1,
            frameHeight: f,
            rotateClockwise: t.rotateClockwise,
            referenceSize: u,
            sizeRatio: x / (0, X.F2)(t.size),
            markerPlacement: s,
          };
        a.push(w);
      }
      function Sr(t) {
        if (t && 0 === t.indexOf('Level_')) {
          const e = parseInt(t.substr(6), 10);
          if (!isNaN(e)) return e;
        }
        return 0;
      }
      function Pr(t) {
        if (!t || 0 === t.length) return null;
        const e = new ci.Z(t).toRgba();
        return { r: e[0], g: e[1], b: e[2], a: e[3] };
      }
      function wr(t, e, s, i, r, n, o) {
        const a = e[t];
        if (a) {
          const t = a[s];
          if (
            'string' == typeof t ||
            'number' == typeof t ||
            t instanceof Array
          )
            return n ? n.call(null, t, o) : t;
          if (null != t && t instanceof fi.mz)
            return (e, s, a) => {
              let h = tr(t, e, { $view: a }, i.geometryType, s);
              return (
                null !== h && n && (h = n.call(null, h, o)), null !== h ? h : r
              );
            };
        }
        return r;
      }
      function Cr(t, e, s, i) {
        for (const t of e)
          if (t.valueExpressionInfo) {
            const e = s[t.primitiveName] && s[t.primitiveName][t.propertyName];
            e instanceof fi.mz &&
              (t.fn = (t, s, r) => tr(e, t, { $view: r }, i.geometryType, s));
          }
        const r = (t) => (t ? t.charAt(0).toLowerCase() + t.substr(1) : t);
        return (s, i, n) => {
          for (const t of e) t.fn && (t.value = t.fn(s, i, n));
          const o = [];
          for (let s of t) {
            var a;
            const t = null == (a = s) ? void 0 : a.primitiveName;
            if (t) {
              let i = !1;
              for (const n of e)
                if (n.primitiveName === t) {
                  const t = r(n.propertyName);
                  null != n.value &&
                    n.value !== s[t] &&
                    (i || ((s = (0, lt.d9)(s)), (i = !0)), (s[t] = n.value));
                }
            }
            o.push(s);
          }
          return o;
        };
      }
      function Lr(t, e, s, i) {
        const r = [];
        if ((Vi.findApplicableOverrides(t, e, r), 0 === r.length)) return t;
        for (const t of r)
          if (t.valueExpressionInfo) {
            const e = s[t.primitiveName] && s[t.primitiveName][t.propertyName];
            e instanceof fi.mz &&
              (t.fn = (t, s, r) => tr(e, t, { $view: r }, i.geometryType, s));
          }
        const n = (t) => (t ? t.charAt(0).toLowerCase() + t.substr(1) : t);
        return (e, s, i) => {
          for (const t of r) t.fn && (t.value = t.fn(e, s, i));
          const o = (0, lt.d9)(t),
            a = t.primitiveName;
          for (const t of r)
            if (t.primitiveName === a) {
              const e = n(t.propertyName);
              null != t.value && t.value !== o[e] && (o[e] = t.value);
            }
          return o;
        };
      }
      function Ir(t, e, s, i) {
        for (const t of s)
          if (t.valueExpressionInfo) {
            const s = e[t.primitiveName] && e[t.primitiveName][t.propertyName];
            s instanceof fi.mz &&
              (t.fn = (t, e, r) => tr(s, t, { $view: r }, i.geometryType, e));
          }
        return (e, i, r) => {
          for (const t of s) t.fn && (t.value = t.fn(e, i, r));
          return (0, ui.hP)(t + Vi.buildOverrideKey(s)).toString();
        };
      }
      function kr(t, e, s, i) {
        let r = !1,
          n = '';
        for (const s of t)
          s.primitiveName === e &&
            (void 0 !== s.value
              ? (n += `-${s.primitiveName}-${s.propertyName}-${JSON.stringify(
                  s.value,
                )}`)
              : s.valueExpressionInfo && (r = !0));
        return (
          (0, l.pC)(s) && 'function' == typeof s && (r = !0),
          (0, l.pC)(i) && 'function' == typeof i && (r = !0),
          [r, n]
        );
      }
      function Tr(t, e, s) {
        if (t && e)
          switch (t.type) {
            case 'CIMPointSymbol':
            case 'CIMLineSymbol':
            case 'CIMPolygonSymbol': {
              const i = t.symbolLayers;
              if (!i) return;
              for (const t of i)
                switch ((Fr(t, e, s), t.type)) {
                  case 'CIMPictureFill':
                  case 'CIMHatchFill':
                  case 'CIMGradientFill':
                  case 'CIMPictureStroke':
                  case 'CIMGradientStroke':
                  case 'CIMCharacterMarker':
                  case 'CIMPictureMarker':
                    'url' in t && t.url && s.push(e.fetchResource(t.url, null));
                    break;
                  case 'CIMVectorMarker': {
                    const i = t.markerGraphics;
                    if (!i) continue;
                    for (const t of i)
                      if (t) {
                        const i = t.symbol;
                        i && Tr(i, e, s);
                      }
                  }
                }
            }
          }
      }
      const zr = (t) =>
        t &&
        2 === t.length &&
        t[0].enable &&
        t[1].enable &&
        'CIMSolidStroke' === t[0].type &&
        'CIMSolidFill' === t[1].type &&
        !t[0].effects &&
        !t[1].effects;
      let Er;
      function Fr(t, e, i) {
        t.effects &&
          !(0, l.pC)(e.geometryEngine) &&
          (Er
            ? i.push(Er)
            : ((t) => {
                if (!t) return !1;
                for (const e of t)
                  switch (e.type) {
                    case 'CIMGeometricEffectBuffer':
                    case 'CIMGeometricEffectOffset':
                      return !0;
                  }
                return !1;
              })(t.effects) &&
              ((Er = Promise.all([s.e(5837), s.e(247)]).then(s.bind(s, 30247))),
              i.push(Er),
              Er.then((t) => (e.geometryEngine = t))));
      }
      const Ar = h.Z.getLogger(
        'esri.views.2d.engine.webgl.WGLDynamicMeshTemplate',
      );
      class Rr extends cs {
        constructor(t) {
          super(),
            (this._ongoingMaterialRequestMap = new Map()),
            (this._materialCache = new Map()),
            (this._dynamicPropertyMap = new Map()),
            (this._cimLayer = t);
        }
        analyze(t, e, s, i, r) {
          if (r && 0 === r.length) return null;
          const n = r && r.length > 0,
            o = e.readLegacyFeature(),
            a = this._materialCache,
            h = this._cimLayer.materialHash;
          if (!h)
            return (
              Ar.error(
                'A Dynamic mesh template must have a material hash value or function!',
              ),
              Promise.reject(null)
            );
          const l = 'function' == typeof h ? h(o, s, i) : h;
          if (a.has(l)) {
            const t = a.get(l);
            return Promise.resolve(t);
          }
          const c = this._ongoingMaterialRequestMap.get(l);
          if (c) return c;
          const u = this._cimLayer,
            f = (function (t, e) {
              if (!e || 0 === e.length) return t;
              const s = JSON.parse(JSON.stringify(t));
              return Vi.applyOverrides(s, e), s;
            })(u.cim, this._cimLayer.materialOverrides);
          f.mosaicHash = l;
          const { type: _, url: d } = u,
            m = {
              cim: f,
              type: _,
              mosaicHash: l,
              url: d,
              size: null,
              dashTemplate: null,
              text: null,
              fontName: null,
            };
          switch (_) {
            case 'marker':
              m.size = Ii(u.size, o, s, i);
              break;
            case 'line':
              m.dashTemplate = u.dashTemplate;
              break;
            case 'text':
              (m.text = Ii(u.text, o, s, i)),
                (m.fontName = Ii(u.fontName, o, s, i));
          }
          const p = t
            .getMosaicItem(m, r)
            .then(
              (t) => (
                n || (this._ongoingMaterialRequestMap.delete(l), a.set(l, t)), t
              ),
            )
            .catch(
              (t) => (
                this._ongoingMaterialRequestMap.delete(l),
                Ar.error('.analyze()', t.message),
                null
              ),
            );
          return n || this._ongoingMaterialRequestMap.set(l, p), p;
        }
      }
      function Or(t, e) {
        if (t && 'name' in t) {
          const s = t;
          return e && e.error(new o.Z(s.name, s.message, s.details)), !1;
        }
        return !0;
      }
      const Wr = 128;
      class Vr extends li(Rr) {
        constructor(t, e, s) {
          var i;
          if (
            (super(t),
            (this._minMaxZoom = (0, J.UJ)(
              Math.round(e * z.MI),
              Math.round(s * z.MI),
            )),
            tt(t.color))
          ) {
            const e = (e, s, i) => {
              const r = t.color(e, s, i);
              return (r && (0, Y.t2)(r)) || 0;
            };
            this._dynamicPropertyMap.set('fillColor', e);
          } else {
            const e = t.color;
            this.fillColor = (e && (0, Y.t2)(e)) || 0;
          }
          const r =
              'CIMMarkerPlacementInsidePolygon' ===
                (null == (i = t.cim.placement) ? void 0 : i.type) &&
              t.cim.placement.shiftOddRows
                ? 2
                : 1,
            n = t.height;
          if (tt(n)) {
            const t = (t, e, s) => n(t, e, s) * r;
            this._dynamicPropertyMap.set('_height', t);
          } else this._height = (n || 0) * r;
          const o = t.offsetX;
          if (tt(o)) {
            const t = (t, e, s) => {
              let i = (0, X.F2)(o(t, e, s)) + Wr;
              return i > 255 ? (i = 255) : i < 0 && (i = 0), i;
            };
            this._dynamicPropertyMap.set('_offsetX', t);
          } else {
            let t = (0, X.F2)(o || 0) + Wr;
            t > 255 ? (t = 255) : t < 0 && (t = 0), (this._offsetX = t);
          }
          const a = t.offsetY;
          if (tt(a)) {
            const t = (t, e, s) => {
              let i = (0, X.F2)(-a(t, e, s)) + Wr;
              return i > 255 ? (i = 255) : i < 0 && (i = 0), i;
            };
            this._dynamicPropertyMap.set('_offsetY', t);
          } else {
            let t = (0, X.F2)(-a || 0) + Wr;
            t > 255 ? (t = 255) : t < 0 && (t = 0), (this._offsetY = t);
          }
          const h = t.scaleX;
          tt(h)
            ? this._dynamicPropertyMap.set('_scaleX', h)
            : (this._scaleX = h || 1);
          const c = t.angle;
          if (tt(c)) {
            const t = (t, e, s) => (0, bs.Or)(c(t, e, s));
            this._dynamicPropertyMap.set('_angle', t);
          } else this._angle = (0, bs.Or)(c) || 0;
          if ((0, l.pC)(t.effects)) {
            const e = t.effects;
            tt(e)
              ? this._dynamicPropertyMap.set('_effects', e)
              : (this._effects = e);
          }
          (this._cimFillLayer = t),
            (this._fillMaterialKey = Z.dk.load(t.materialKey));
        }
        static fromCIMFill(t, e) {
          const [s, i] = st(t.scaleInfo, e);
          return new Vr(t, s, i);
        }
        bindFeature(t, e, s) {
          const i = t.readLegacyFeature();
          this._dynamicPropertyMap.forEach((t, r) => {
            this[r] = t(i, e, s);
          });
          const r = this._fillMaterialKey,
            n = this._materialCache,
            o = (0, this._cimFillLayer.materialHash)(i, e, s),
            a = n.get(o);
          let h = null;
          if ((a && Or(a.spriteMosaicItem) && (h = a.spriteMosaicItem), h)) {
            const { rect: t, width: e, height: s } = h,
              i = t.x + z.fL,
              n = t.y + z.fL,
              o = i + e,
              a = n + s;
            let l = Math.round((0, X.F2)(this._height));
            l > 255 ? (l = 255) : l <= 0 && (l = a - n);
            let c = Math.round((0, X.F2)((this._height / s) * e || 0));
            c > 255 ? (c = 255) : c <= 0 && (c = o - i);
            const u = this._scaleX,
              f = 1;
            (this.tl = (0, J.UJ)(i, n)),
              (this.br = (0, J.UJ)(o, a)),
              (this.aux2 = (0, J.Jz)(c, l, this._offsetX, this._offsetY)),
              (this.aux3 = (0, J.Jz)(u, f, this._angle, 0)),
              (r.sdf = h.sdf),
              (r.pattern = !0),
              (r.textureBinding = h.textureBinding);
          } else
            (this.tl = 0),
              (this.br = 0),
              (this.aux2 = 0),
              (this.aux3 = 0),
              (r.sdf = !1),
              (r.pattern = !1),
              (r.textureBinding = 0);
          this._materialKey = r.data;
        }
      }
      class Nr extends ii(Rr) {
        constructor(t, e, s) {
          super(t),
            (this._minMaxZoom = (0, J.UJ)(
              Math.round(e * z.MI),
              Math.round(s * z.MI),
            )),
            (this._cimLineLayer = t);
          let i = 0;
          tt(t.width) || (i = 0.5 * (0, X.F2)(t.width)),
            this._dynamicPropertyMap.set('_halfWidth', (e, s, r) =>
              tt(t.width) ? 0.5 * (0, X.F2)(t.width(e, s, r)) : i,
            ),
            tt(t.cap)
              ? this._dynamicPropertyMap.set('_capType', t.cap)
              : (this._capType = t.cap),
            tt(t.join)
              ? this._dynamicPropertyMap.set('_joinType', t.join)
              : (this._joinType = t.join);
          const r = t.color;
          if (tt(r)) {
            const t = (t, e, s) => (0, Y.t2)(r(t, e, s));
            this._dynamicPropertyMap.set('_fillColor', t);
          } else this._fillColor = (r && (0, Y.t2)(r)) || 0;
          const n = t.miterLimit;
          if (tt(n)) {
            const t = (t, e, s) => et(n(t, e, s));
            this._dynamicPropertyMap.set('_miterLimitCosine', t);
          } else this._miterLimitCosine = et(n);
          if ((0, l.pC)(t.effects)) {
            const e = t.effects;
            tt(e)
              ? this._dynamicPropertyMap.set('_effects', e)
              : (this._effects = e);
          }
          (this._scaleFactor = t.scaleFactor || 1),
            (this._isDashed = null != t.dashTemplate),
            (this.tessellationProperties._bitset =
              (t.colorLocked ? 1 : 0) | ((t.scaleDash ? 1 : 0) << 1)),
            (this._materialKey = t.materialKey),
            this._initializeTessellator(!0);
        }
        static fromCIMLine(t, e) {
          const [s, i] = st(t.scaleInfo, e);
          return new Nr(t, s, i);
        }
        bindFeature(t, e, s) {
          const i = t.readLegacyFeature();
          this._dynamicPropertyMap.forEach((t, r) => {
            this[r] = t(i, e, s);
          }),
            (this._halfWidth *= this._scaleFactor);
          const r = this._materialCache,
            n = (0, this._cimLineLayer.materialHash)(i, e, s),
            o = r.get(n);
          let a = null;
          if ((o && Or(o.spriteMosaicItem) && (a = o.spriteMosaicItem), a)) {
            this._hasPattern = !0;
            const { rect: t, width: e, height: s } = a,
              i = t.x + z.fL,
              r = t.y + z.fL,
              n = i + e,
              o = r + s;
            (this.tessellationProperties._tl = (0, J.UJ)(i, r)),
              (this.tessellationProperties._br = (0, J.UJ)(n, o));
          } else
            (this._hasPattern = !1),
              (this.tessellationProperties._tl = 0),
              (this.tessellationProperties._br = 0);
          (this.tessellationProperties._fillColor = this._fillColor),
            (this.tessellationProperties._halfWidth = this._halfWidth),
            (this.tessellationProperties.offset = 0),
            (this.tessellationProperties._halfReferenceWidth =
              this.tessellationProperties._halfWidth);
          const h = Z.a.load(this._materialKey);
          a &&
            ((h.sdf = a.sdf),
            (h.pattern = !0),
            (h.textureBinding = a.textureBinding)),
            (this._materialKey = h.data);
        }
      }
      const Gr = Be(),
        Dr = Ne(),
        Br = h.Z.getLogger(
          'esri.views.2d.engine.webgl.WGLDynamicMarkerTemplate',
        );
      class Xr extends xs(Rr) {
        constructor(t, e, s) {
          super(t),
            (this._cimMarkerLayer = t),
            (this._minMaxZoom = (0, J.UJ)(
              Math.round(e * z.MI),
              Math.round(s * z.MI),
            ));
          const i = t.color;
          if (tt(i)) {
            const t = (t, e, s) => (0, Y.t2)(i(t, e, s));
            this._dynamicPropertyMap.set('_fillColor', t);
          } else this._fillColor = (0, Y.t2)(i);
          const r = t.outlineColor;
          if (tt(r)) {
            const t = (t, e, s) => (0, Y.t2)(r(t, e, s));
            this._dynamicPropertyMap.set('_outlineColor', t);
          } else this._outlineColor = (0, Y.t2)(r);
          const n = t.size;
          if (tt(n)) {
            const t = (t, e, s) => (0, X.F2)(n(t, e, s));
            this._dynamicPropertyMap.set('_size', t);
          } else this._size = (0, X.F2)(n) || 0;
          const o = t.scaleX;
          tt(o)
            ? this._dynamicPropertyMap.set('_scaleX', o)
            : (this._scaleX = o || 1);
          const a = t.offsetX;
          if (tt(a)) {
            const t = (t, e, s) => (0, X.F2)(a(t, e, s));
            this._dynamicPropertyMap.set('xOffset', t);
          } else this.xOffset = (0, X.F2)(a) || 0;
          const h = t.offsetY;
          if (tt(h)) {
            const t = (t, e, s) => (0, X.F2)(h(t, e, s));
            this._dynamicPropertyMap.set('yOffset', t);
          } else this.yOffset = (0, X.F2)(h) || 0;
          const c = t.outlineWidth;
          if (tt(c)) {
            const t = (t, e, s) => (0, X.F2)(c(t, e, s));
            this._dynamicPropertyMap.set('_outlineWidth', t);
          } else this._outlineWidth = (0, X.F2)(c) || 0;
          const u = t.rotation;
          if (
            (tt(u)
              ? this._dynamicPropertyMap.set('_angle', u)
              : (this._angle = u || 0),
            (0, l.pC)(t.effects))
          ) {
            const e = t.effects;
            tt(e)
              ? this._dynamicPropertyMap.set('_effects', e)
              : (this._effects = e);
          }
          if ((0, l.pC)(t.markerPlacement)) {
            const e = t.markerPlacement;
            tt(e)
              ? this._dynamicPropertyMap.set('_markerPlacement', e)
              : (this._markerPlacement = e);
          }
          (this._scaleFactor = (0, l.Pt)(t.scaleFactor, 1)),
            (this._bitSet =
              (t.alignment === U.v2.MAP ? 1 : 0) |
              ((t.colorLocked ? 1 : 0) << 1) |
              ((t.scaleSymbolsProportionally ? 1 : 0) << 3)),
            (this._materialKey = t.materialKey);
        }
        static fromCIMMarker(t, e) {
          const [s, i] = st(t.scaleInfo, e);
          return new Xr(t, s, i);
        }
        bindFeature(t, e, s) {
          const i = t.readLegacyFeature();
          this._dynamicPropertyMap.forEach((t, r) => {
            this[r] = t(i, e, s);
          });
          const r = this._cimMarkerLayer.materialHash,
            n = 'function' == typeof r ? r(i, e, s) : r,
            a = this._materialCache.get(n);
          if (!a || !Or(a.spriteMosaicItem) || !a.spriteMosaicItem)
            return void Br.error(
              new o.Z(
                'mapview-cim',
                'Encountered an error when binding feature',
              ),
            );
          const h = a.spriteMosaicItem,
            l = this._cimMarkerLayer.sizeRatio,
            c = (h.width / h.height) * this._scaleX,
            u = this._cimMarkerLayer.rotateClockwise
              ? this._angle
              : -this._angle;
          let f = this._size,
            _ = f * c;
          const d = this.xOffset,
            m = this.yOffset;
          (this.xOffset *= this._scaleFactor),
            (this.yOffset *= this._scaleFactor);
          const p =
              this._cimMarkerLayer.scaleSymbolsProportionally &&
              this._cimMarkerLayer.frameHeight
                ? this._size / (0, X.F2)(this._cimMarkerLayer.frameHeight)
                : 1,
            g = this._outlineWidth * p,
            y = (0, X.F2)(this._cimMarkerLayer.referenceSize);
          let x = 0,
            v = 0;
          const M = this._cimMarkerLayer.anchorPoint;
          M &&
            (this._cimMarkerLayer.isAbsoluteAnchorPoint
              ? this._size &&
                ((x = -M.x / (this._size * c)), (v = M.y / this._size))
              : ((x = M.x), (v = M.y))),
            (this._sizeOutlineWidth = (0, J.Jz)(
              Math.round(Math.min(Math.sqrt(128 * _), 255)),
              Math.round(Math.min(Math.sqrt(128 * f), 255)),
              Math.round(Math.min(Math.sqrt(128 * g), 255)),
              Math.round(Math.min(Math.sqrt(128 * y), 255)),
            )),
            (this.angle = u);
          const b = Math.round(64 * l);
          this._bitestAndDistRatio = (0, J.UJ)(this._bitSet, b);
          const S = h.rect.x + z.fL,
            P = h.rect.y + z.fL,
            w = S + h.width,
            C = P + h.height;
          (this._texUpperLeft = (0, J.UJ)(S, P)),
            (this._texUpperRight = (0, J.UJ)(w, P)),
            (this._texBottomLeft = (0, J.UJ)(S, C)),
            (this._texBottomRight = (0, J.UJ)(w, C));
          const L = Z.mE.load(this._materialKey);
          (L.sdf = h.sdf),
            (L.pattern = !0),
            (L.textureBinding = h.textureBinding),
            (this._materialKey = L.data),
            (this._anchorX = 0.5 - ((0.5 + x) * h.width) / h.width),
            (this._anchorY = 0.5 - ((0.5 + v) * h.height) / h.height),
            (_ *= l),
            (f *= l),
            (_ *= this._scaleFactor),
            (f *= this._scaleFactor),
            (_ *= h.rect.width / h.width),
            (f *= h.rect.height / h.height),
            (this._computedWidth = _),
            (this._computedHeight = f),
            this._applyTransformation(Dr, Gr),
            (this.xOffset = d),
            (this.yOffset = m);
        }
      }
      function Ur(t) {
        const e = new Array(t.length);
        for (let s = 0; s < t.length; s++) e[s] = t.charCodeAt(s);
        return e;
      }
      class Hr extends as(Rr) {
        constructor(t, e, s) {
          super(t),
            (this._horizontalAlignment = 'center'),
            (this._verticalAlignment = 'middle'),
            (this._textToGlyphs = new Map()),
            (this._minMaxZoom = (0, J.UJ)(
              Math.round(e * z.MI),
              Math.round(s * z.MI),
            ));
          const i = t.scaleFactor || 1;
          this._cimTextLayer = t;
          const r = t.color;
          if (tt(r)) {
            const t = (t, e, s) => (0, Y.t2)(r(t, e, s));
            this._dynamicPropertyMap.set('_color', t);
          } else this._color = (0, Y.t2)(r);
          const n = t.outlineColor;
          if (tt(n)) {
            const t = (t, e, s) => (0, Y.t2)(n(t, e, s));
            this._dynamicPropertyMap.set('_haloColor', t);
          } else this._haloColor = (0, Y.t2)(n);
          let o, a, h;
          if (
            (tt(t.size) ||
              (o = Math.min(Math.round((0, X.F2)(t.size * t.sizeRatio)), 127)),
            this._dynamicPropertyMap.set('_size', (e, s, i) =>
              tt(t.size)
                ? Math.min(
                    Math.round((0, X.F2)(t.size(e, s, i) * t.sizeRatio)),
                    127,
                  )
                : o,
            ),
            tt(t.outlineSize))
          ) {
            const e = (e, s, i) =>
              Math.min(
                Math.floor(5 * (0, X.F2)(t.outlineSize(e, s, i) * t.sizeRatio)),
                127,
              );
            this._dynamicPropertyMap.set('_haloSize', e);
          } else
            this._haloSize = Math.min(
              Math.floor(5 * (0, X.F2)(t.outlineSize * t.sizeRatio)),
              127,
            );
          if (
            (tt(t.offsetX) ||
              (a = Math.round((0, X.F2)(t.offsetX * t.sizeRatio))),
            this._dynamicPropertyMap.set('_xOffset', (e, s, i) =>
              tt(t.offsetX)
                ? Math.round((0, X.F2)(t.offsetX(e, s, i) * t.sizeRatio))
                : a,
            ),
            tt(t.offsetY) ||
              (h = Math.round((0, X.F2)(t.offsetY * t.sizeRatio))),
            this._dynamicPropertyMap.set('_yOffset', (e, s, i) =>
              tt(t.offsetY)
                ? Math.round((0, X.F2)(t.offsetY(e, s, i) * t.sizeRatio))
                : h,
            ),
            tt(t.angle)
              ? this._dynamicPropertyMap.set('_angle', t.angle)
              : (this._angle = t.angle),
            tt(t.horizontalAlignment)
              ? this._dynamicPropertyMap.set(
                  '_horizontalAlignment',
                  t.horizontalAlignment,
                )
              : (this._horizontalAlignment = t.horizontalAlignment),
            tt(t.verticalAlignment)
              ? this._dynamicPropertyMap.set(
                  '_verticalAlignment',
                  t.verticalAlignment,
                )
              : (this._verticalAlignment = t.verticalAlignment),
            (0, l.pC)(t.effects))
          ) {
            const e = t.effects;
            tt(e)
              ? this._dynamicPropertyMap.set('_effects', e)
              : (this._effects = e);
          }
          if ((0, l.pC)(t.markerPlacement)) {
            const e = t.markerPlacement;
            tt(e)
              ? this._dynamicPropertyMap.set('_markerPlacement', e)
              : (this._textPlacement = e);
          }
          tt(t.text)
            ? this._dynamicPropertyMap.set('_text', t.text)
            : (this._text = t.text),
            (this._scaleFactor = i);
          const c = Math.min(
            Math.round((0, X.F2)(t.referenceSize * t.sizeRatio)),
            127,
          );
          (this._referenceSize = Math.round(Math.sqrt(256 * c))),
            (this._materialKey = t.materialKey);
          const u = Z.qr.load(this._materialKey);
          (u.sdf = !0),
            (this._bitset =
              (t.alignment === U.v2.MAP ? 1 : 0) |
              ((t.colorLocked ? 1 : 0) << 1)),
            (this._materialKey = u.data),
            (this._decoration = 'none'),
            (this._lineHeight = 1),
            (this._lineWidth = 512),
            (this._isCIM = !0);
        }
        static fromCIMText(t, e) {
          const [s, i] = st(t.scaleInfo, e);
          return new Hr(t, s, i);
        }
        async analyze(t, e, s, i) {
          const r = e.readLegacyFeature(),
            n = (function (t, e, s, i) {
              return 'string' == typeof t.text
                ? t.text
                : 'function' == typeof t.text
                ? t.text(e, s, i)
                : '';
            })(this._cimTextLayer, r, s, i),
            o = await super.analyze(t, e, s, i, Ur(n));
          return (
            o &&
              o.glyphMosaicItems &&
              this._textToGlyphs.set(n, o.glyphMosaicItems),
            o
          );
        }
        bindFeature(t, e, s) {
          const i = t.readLegacyFeature();
          if (
            (this._dynamicPropertyMap.forEach((t, r) => {
              this[r] = t(i, e, s);
            }),
            !this._text || 0 === this._text.length)
          )
            return void (this._shapingInfo = null);
          (this._size *= this._scaleFactor),
            (this._scale = this._size / z.Ex),
            (this._xOffset *= this._scaleFactor),
            (this._yOffset *= this._scaleFactor),
            (this._xAlignD = (0, H.kH)(this._horizontalAlignment || 'center')),
            (this._yAlignD = (0, H.b7)(this._verticalAlignment || 'baseline'));
          const r = this._textToGlyphs.get(this._text);
          this.bindTextInfo(r, !1);
        }
      }
      const Yr = 128;
      class Jr extends li(cs) {
        constructor(t, e, s, i, r, n, o, a, h, l, c, u, f, _, d, m) {
          super(), (this._effects = _);
          const p = Z.dk.load(t);
          e &&
            ((p.sdf = e.sdf),
            (p.pattern = !0),
            (p.textureBinding = e.textureBinding)),
            (this.fillColor = s),
            (this.tl = i),
            (this.br = r),
            (this.aux2 = (0, J.Jz)(n, o, a, h)),
            (this.aux3 = (0, J.Jz)(l, c, u, 0)),
            (this._bitset = f),
            (this._minMaxZoom = (0, J.UJ)(
              Math.round(d * z.MI),
              Math.round(m * z.MI),
            )),
            (this._materialKey = p.data);
        }
        static fromCIMFill(t, e, s) {
          const i = t.color,
            r = (i && (0, Y.t2)(i)) || 0,
            n = t.materialKey,
            [o, a] = st(t.scaleInfo, s);
          if (!e)
            return new Jr(
              n,
              null,
              r,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              t.colorLocked ? z.Uh : 0,
              t.effects,
              o,
              a,
            );
          const { rect: h, width: l, height: c } = e,
            u = t.scaleX || 1,
            f = h.x + z.fL,
            _ = h.y + z.fL,
            d = f + l,
            m = _ + c,
            p = t.height,
            g = u * p;
          let y = Math.round(p);
          y > 255 ? (y = 255) : y <= 0 && (y = m - _);
          let x = Math.round(g);
          x > 255 ? (x = 255) : x <= 0 && (x = d - f);
          let v = (0, X.F2)(t.offsetX || 0) + Yr;
          v > 255 && (v = 255);
          let M = (0, X.F2)(-t.offsetY || 0) + Yr;
          M > 255 && (M = 255);
          const b = (0, J.UJ)(f, _),
            S = (0, J.UJ)(d, m);
          return new Jr(
            n,
            e,
            r,
            b,
            S,
            x,
            y,
            v,
            M,
            Yr,
            Yr,
            (0, bs.s5)(t.angle),
            t.colorLocked ? z.Uh : 0,
            t.effects,
            o,
            a,
          );
        }
        static fromSimpleFill(t, e, s = !1) {
          const { color: i } = t,
            r = (i && 'esriSFSNull' !== t.style && (0, Y.aH)(i)) || 0,
            n = s ? z.Uh : 0,
            o = t.materialKey;
          let a;
          if (e) {
            const { rect: t, width: s, height: i } = e,
              h = t.x + z.fL,
              l = t.y + z.fL,
              c = h + s,
              u = l + i,
              f = (0, J.UJ)(h, l),
              _ = (0, J.UJ)(c, u);
            a = new Jr(o, e, r, f, _, s, i, 0, 0, Yr, Yr, 0, n, null, 0, q);
          } else
            a = new Jr(o, null, r, 0, 0, 0, 0, 0, 0, 0, 0, 0, n, null, 0, q);
          return a._maybeAddLineTemplate(t), a;
        }
        static fromPictureFill(t, e, s = !1) {
          const i = z.ru,
            { rect: r, width: n, height: o } = e,
            a = r.x + z.fL,
            h = r.y + z.fL,
            l = a + n,
            c = h + o,
            u = (0, J.UJ)(a, h),
            f = (0, J.UJ)(l, c);
          let _ = Math.round((0, X.F2)(t.width));
          _ > 255 && (_ = 255);
          let d = Math.round((0, X.F2)(t.height));
          d > 255 && (d = 255);
          let m = (0, X.F2)(t.xoffset) + Yr;
          m > 255 && (m = 255);
          let p = (0, X.F2)(-t.yoffset) + Yr;
          p > 255 && (p = 255);
          const g = t.materialKey,
            y = s ? z.Uh : 0,
            x = new Jr(
              g,
              e,
              i,
              u,
              f,
              _,
              d,
              m,
              p,
              Yr * t.xscale,
              Yr * t.yscale,
              0,
              y,
              null,
              0,
              q,
            );
          return x._maybeAddLineTemplate(t), x;
        }
      }
      class Zr {
        constructor() {
          this._resolver = null;
        }
        isHeld() {
          return !!this._resolver;
        }
        async acquire() {
          if (!this._resolver)
            return (this._resolver = (0, c.hh)()), Promise.resolve();
          await this._resolver.promise, await this.acquire();
        }
        release() {
          const t = this._resolver;
          (this._resolver = null), t.resolve();
        }
      }
      const qr = {
        marker: E.LW.MARKER,
        fill: E.LW.FILL,
        line: E.LW.LINE,
        text: E.LW.TEXT,
      };
      class Kr {
        constructor(t, e, s, i) {
          const r = {
              minScale: null == e ? void 0 : e.minScale,
              maxScale: null == e ? void 0 : e.maxScale,
            },
            n = (function (t) {
              return t.minScale || t.maxScale
                ? t.minScale + '-' + t.maxScale
                : '';
            })(r);
          (this.layers = t),
            (this.data = e),
            (this.hash = this._createHash() + n),
            (this.rendererKey = s);
          const o = {
            isOutline: !1,
            isOutlinedFill: !1,
            placement: null,
            stride: { fill: 'default' },
            vvFlags: s,
          };
          for (const e of t) {
            const t = qr[e.type];
            (e.materialKey = (0, Z.jj)(t, o)),
              (e.maxVVSize = i),
              (e.scaleInfo = r),
              (e.templateHash += n);
          }
        }
        get type() {
          return 'expanded-cim';
        }
        _createHash() {
          let t = '';
          for (const e of this.layers) t += e.templateHash;
          return t;
        }
      }
      var jr = s(32243),
        $r = s(17452),
        Qr = s(65587),
        tn = s(25929),
        en = s(27391);
      async function sn(t, e, s) {
        if (!t.name)
          return Promise.reject(
            new o.Z(
              'style-symbol-reference-name-missing',
              'Missing name in style symbol reference',
            ),
          );
        if (t.styleName && 'Esri2DPointSymbolsStyle' === t.styleName)
          return (async function (t, e) {
            const s = en.wm.replace(/\{SymbolName\}/gi, t.name);
            try {
              const t = await (0, en.EJ)(s, e);
              return (0, en.KV)(t.data);
            } catch (t) {
              return (0, c.k_)(t), null;
            }
          })(t, s);
        try {
          return (async function (t, e, s, i) {
            const r = t.data,
              n = {
                portal: (s && s.portal) || Qr.Z.getDefault(),
                url: (0, $r.mN)(t.baseUrl),
                origin: 'portal-item',
              },
              a = r.items.find((t) => t.name === e);
            if (!a)
              throw new o.Z(
                'symbolstyleutils:symbol-name-not-found',
                `The symbol name '${e}' could not be found`,
                { symbolName: e },
              );
            let h = (0, tn.f)((0, en.v9)(a, 'cimRef'), n);
            (0, jr.XO)() && (h = (0, jr.pJ)(h));
            try {
              const t = await (0, en.EJ)(h, i);
              return (0, en.KV)(t.data);
            } catch (t) {
              return (0, c.k_)(t), null;
            }
          })(await (0, en.n2)(t, e, s), t.name, e, s);
        } catch (t) {
          return (0, c.k_)(t), null;
        }
      }
      const rn = async (t, e, s) =>
          new Kr(await lr(t.data, e, s), t.data, t.rendererKey, t.maxVVSize),
        nn = async (t, e, s, i) => {
          if (!t) return null;
          if ('cim' === t.type) return rn(t, e, s);
          if ('web-style' === t.type) {
            const r = {
              type: 'cim',
              data: await sn(t, null, i),
              rendererKey: t.rendererKey,
              maxVVSize: t.maxVVSize,
            };
            return rn(r, e, s);
          }
          return t;
        };
      function on(t) {
        if (!t) return null;
        const { type: e, cim: s, url: i, materialHash: r } = t,
          n = {
            cim: s,
            type: e,
            mosaicHash: r,
            url: i,
            size: null,
            dashTemplate: null,
            path: null,
            text: null,
            fontName: null,
          };
        switch (e) {
          case 'marker':
            (n.size = t.size), (n.path = t.path);
            break;
          case 'line':
            n.dashTemplate = t.dashTemplate;
            break;
          case 'text':
            (n.text = t.text), (n.fontName = t.fontName);
        }
        return n;
      }
      const an = h.Z.getLogger(
          'esri.views.2d.engine.webgl.mesh.templates.WGLTemplateStore',
        ),
        hn = new Array(),
        ln = {
          isOutline: !1,
          isOutlinedFill: !1,
          placement: null,
          stride: { fill: 'default' },
          vvFlags: 0,
        },
        cn = {
          ...Ms.eG,
          hash: JSON.stringify(Ms.eG),
          materialKey: (0, Z.jj)(E.LW.MARKER, ln),
        },
        un = {
          ...Ms.wW,
          hash: JSON.stringify(Ms.wW),
          materialKey: (0, Z.jj)(E.LW.LINE, ln),
        },
        fn = {
          ...Ms.lj,
          hash: JSON.stringify(Ms.lj),
          materialKey: (0, Z.jj)(E.LW.FILL, ln),
        };
      function _n(t, e) {
        const s = t.length;
        return t.push(null), e.then((e) => (t[s] = e)), t;
      }
      function dn(t) {
        return !!(1 & t);
      }
      class mn {
        constructor(t, e) {
          (this._idCounter = 1),
            (this._templateIdCounter = 1),
            (this._idToTemplateGroup = new Map()),
            (this._symbolToTemplate = new Map()),
            (this._fetchQueue = []),
            (this._idToResolver = new Map()),
            (this._cimTemplateCache = new Map()),
            (this._cimAnalyses = []),
            (this._lock = new Zr()),
            (this._fetchResource = t),
            (this._tileInfo = e);
        }
        get _markerError() {
          return this._errorTemplates.marker[0];
        }
        get _fillError() {
          return this._errorTemplates.fill[0];
        }
        get _lineError() {
          return this._errorTemplates.line[0];
        }
        get _textError() {
          return this._errorTemplates.line[0];
        }
        createTemplateGroup(t, e) {
          this._initErrorTemplates();
          const s = t.hash;
          if (this._symbolToTemplate.has(s))
            return this._symbolToTemplate.get(s);
          const i = new Array();
          e && this._createMeshTemplates(i, e, !0),
            this._createMeshTemplates(i, t, !1);
          const r = this._createGroupId('expanded-cim' === t.type && pn(t));
          return (
            this._idToTemplateGroup.set(r, i),
            this._symbolToTemplate.set(s, r),
            r
          );
        }
        getTemplateGroup(t) {
          return this._idToTemplateGroup.has(t)
            ? this._idToTemplateGroup.get(t)
            : hn;
        }
        getDynamicTemplateGroup(t) {
          return this._idToTemplateGroup.has(t)
            ? (dn(t) ||
                an.error(
                  'mapview-template-store',
                  `Id ${t} does not refer to a dynamic template`,
                ),
              this._idToTemplateGroup.get(t))
            : hn;
        }
        getMosaicItem(t, e) {
          const s = this._createTemplateId(),
            i = new Promise((t) => this._idToResolver.set(s, t));
          return this._fetchQueue.push({ symbol: t, id: s, glyphIds: e }), i;
        }
        finalize(t) {
          return this._fetchQueue.length || this._lock.isHeld()
            ? (async function (t, e, s) {
                try {
                  await t.acquire(), await e(s), t.release();
                } catch (e) {
                  throw (t.release(), e);
                }
              })(this._lock, this._fetchAllQueuedResources.bind(this), t)
            : Promise.resolve();
        }
        _initErrorTemplates() {
          this._errorTemplates ||
            (this._errorTemplates = {
              fill: this._createMeshTemplates([], fn, !1),
              marker: this._createMeshTemplates([], cn, !1),
              line: this._createMeshTemplates([], un, !1),
            });
        }
        _fetchAllQueuedResources(t) {
          if (!this._fetchQueue.length) return Promise.resolve();
          const e = this._fetchQueue,
            s = this._cimAnalyses;
          return (
            (this._fetchQueue = []),
            (this._cimAnalyses = []),
            Promise.all(s)
              .then(() =>
                this._fetchResource(e, t).then((t) => {
                  for (const { id: e, mosaicItem: s } of t)
                    this._idToResolver.get(e)(s), this._idToResolver.delete(e);
                }),
              )
              .catch((t) => {
                (0, c.D_)(t)
                  ? (this._fetchQueue = this._fetchQueue.concat(e))
                  : 'worker:port-closed' === t.name ||
                    an.error(
                      new o.Z(
                        'mapview-template-store',
                        'Unable to fetch requested texture resources',
                        t,
                      ),
                    );
              })
          );
        }
        _createGroupId(t) {
          return (this._idCounter++ << 1) | (t ? 1 : 0);
        }
        _createTemplateId() {
          return this._templateIdCounter++;
        }
        async _createSMS(t) {
          const { spriteMosaicItem: e } = await this.getMosaicItem(t);
          return Or(e, an) ? vs.fromSimpleMarker(t, e) : this._markerError;
        }
        async _createPMS(t) {
          const { spriteMosaicItem: e } = await this.getMosaicItem(t);
          return Or(e, an) ? vs.fromPictureMarker(t, e) : this._markerError;
        }
        async _createSFS(t, e) {
          const { spriteMosaicItem: s } = await this.getMosaicItem(t);
          return Or(s, an) ? Jr.fromSimpleFill(t, s, e) : this._fillError;
        }
        async _createPFS(t, e) {
          const { spriteMosaicItem: s } = await this.getMosaicItem(t);
          return Or(s, an) ? Jr.fromPictureFill(t, s, e) : this._fillError;
        }
        async _createSLS(t, e) {
          const { spriteMosaicItem: s } = await this.getMosaicItem(t);
          return Or(s, an) ? hi.fromSimpleLine(t, s) : this._lineError;
        }
        async _createLMS(t) {
          const { spriteMosaicItem: e } = await this.getMosaicItem(t);
          return Or(e, an) ? vs.fromLineSymbolMarker(t, e) : this._markerError;
        }
        async _createTS(t) {
          const { glyphMosaicItems: e } = await this.getMosaicItem(t);
          return us.fromText(t, e);
        }
        async _createCIMText(t) {
          const { glyphMosaicItems: e } = await this.getMosaicItem(
            on(t),
            Ur(t.text),
          );
          return Or(e, an)
            ? us.fromCIMText(t, e, this._tileInfo)
            : this._textError;
        }
        async _createCIMFill(t) {
          const { spriteMosaicItem: e } = await this.getMosaicItem(on(t));
          return Or(e, an)
            ? Jr.fromCIMFill(t, e, this._tileInfo)
            : this._fillError;
        }
        async _createCIMLine(t) {
          const { spriteMosaicItem: e } = await this.getMosaicItem(on(t));
          return Or(e, an)
            ? hi.fromCIMLine(t, e, this._tileInfo)
            : this._lineError;
        }
        async _createCIMMarker(t) {
          const { spriteMosaicItem: e } = await this.getMosaicItem(on(t));
          return Or(e, an)
            ? vs.fromCIMMarker(t, e, this._tileInfo)
            : this._markerError;
        }
        async _createCIM(t) {
          const e = t.templateHash;
          if (this._cimTemplateCache.has(e))
            return this._cimTemplateCache.get(e);
          let s;
          switch (t.type) {
            case 'marker':
              s = await this._createCIMMarker(t);
              break;
            case 'line':
              s = await this._createCIMLine(t);
              break;
            case 'fill':
              s = await this._createCIMFill(t);
              break;
            case 'text':
              s = await this._createCIMText(t);
          }
          return this._cimTemplateCache.set(e, s), s;
        }
        async _createDynamicCIM(t) {
          const e = t.templateHash;
          if (this._cimTemplateCache.has(e))
            return this._cimTemplateCache.get(e);
          let s;
          switch (t.type) {
            case 'marker':
              s = Xr.fromCIMMarker(t, this._tileInfo);
              break;
            case 'line':
              s = Nr.fromCIMLine(t, this._tileInfo);
              break;
            case 'fill':
              s = Vr.fromCIMFill(t, this._tileInfo);
              break;
            case 'text':
              s = Hr.fromCIMText(t, this._tileInfo);
          }
          return this._cimTemplateCache.set(e, s), s;
        }
        _createPrimitiveMeshTemplates(t, e, s) {
          switch (e.type) {
            case 'esriSMS':
              return _n(t, this._createSMS(e));
            case 'esriPMS':
              return _n(t, this._createPMS(e));
            case 'esriSFS':
              return _n(t, this._createSFS(e, s));
            case 'line-marker':
              return _n(t, this._createLMS(e));
            case 'esriPFS':
              return _n(t, this._createPFS(e, s));
            case 'esriSLS':
              return _n(t, this._createSLS(e, !1));
            case 'esriTS':
              return _n(t, this._createTS(e));
            default:
              return (
                an.error(
                  'Unable to create mesh template for unknown symbol type {: $ }{symbol.type}',
                ),
                t
              );
          }
        }
        _createMeshTemplates(t, e, s) {
          if (-1 !== e.type.indexOf('3d'))
            return an.error('3D symbols are not supported with MapView'), t;
          if ('expanded-cim' === e.type) {
            for (const s of e.layers)
              'function' == typeof s.materialHash
                ? _n(t, this._createDynamicCIM(s))
                : _n(t, this._createCIM(s));
            return t;
          }
          if ('composite-symbol' === e.type) {
            for (const i of e.layers)
              this._createPrimitiveMeshTemplates(t, i, s);
            return t;
          }
          return 'cim' === e.type ||
            'label' === e.type ||
            'web-style' === e.type
            ? t
            : this._createPrimitiveMeshTemplates(t, e, s);
        }
      }
      const pn = (t) => {
        if (!t.layers) return !1;
        for (const e of t.layers)
          if ('function' == typeof e.materialHash) return !0;
        return !1;
      };
      class gn {
        constructor(t, e, s) {
          (this._loadPromise = (0, D.j)()),
            (this._geometryType = t),
            (this._idField = e),
            (this._templateStore = s);
        }
        update(t, e) {
          (0, l.pC)(t.mesh.labels) &&
            (this._labelTemplates = this._createLabelTemplates(
              t.mesh.labels,
              e,
            )),
            (this._schema = t);
        }
        _createLabelTemplates(t, e) {
          const s = new Map();
          if ('simple' === t.type) {
            for (const i of t.classes) {
              const t = gs.fromLabelClass(i, e);
              s.set(i.index, t);
            }
            return s;
          }
          for (const i in t.classes) {
            const r = t.classes[i];
            for (const t of r) {
              const i = gs.fromLabelClass(t, e);
              s.set(t.index, i);
            }
          }
          return s;
        }
        get templates() {
          return this._templateStore;
        }
        async analyze(t, e, s, i, r, n, o) {
          if ((0, c.Hc)(o)) return;
          let a;
          'dictionary' === s.type &&
            (a = await s.analyze(this._idField, t.copy(), e, r, n, o));
          let h = 0;
          for (; t.next(); ) {
            let e;
            if (
              ((e = a
                ? a[h++]
                : (0, l.pC)(i) &&
                  (0, d.nE)(t.getDisplayId()) &&
                  1 !== t.readAttribute('cluster_count')
                ? i.match(this._idField, t, this._geometryType, r, n)
                : s.match(this._idField, t, this._geometryType, r, n)),
              t.setGroupId(e),
              dn(e))
            ) {
              const s = this._templateStore.getDynamicTemplateGroup(e);
              for (const e of s)
                e && e.analyze && e.analyze(this._templateStore, t, r, n);
            }
          }
          return await this._loadPromise, this._templateStore.finalize(o);
        }
        async analyzeGraphics(t, e, s, i, r, n) {
          if ((0, c.Hc)(n)) return;
          const o = t.getCursor();
          for (
            s && (await s.analyze(this._idField, o.copy(), e, i, r, n));
            o.next();

          ) {
            let t = o.getGroupId();
            if (
              ((null != t && -1 !== t) ||
                ((t = s.match(this._idField, o, o.geometryType, i, r)),
                o.setGroupId(t)),
              dn(t))
            ) {
              const e = this._templateStore.getDynamicTemplateGroup(t);
              for (const t of e)
                t && t.analyze && t.analyze(this._templateStore, o, i, r);
            }
            o.setGroupId(t);
          }
          return await this._loadPromise, this._templateStore.finalize(n);
        }
        writeGraphic(t, e, s, i) {
          const r = e.getGroupId(),
            n = e.getDisplayId(),
            o = this._templateStore.getTemplateGroup(r);
          if ((t.featureStart(e.insertAfter, 0), null != n)) {
            if (dn(r)) for (const t of o) t && t.bindFeature(e, null, null);
            if (o) {
              for (const r of o) r && r.write(t, e, s, i);
              t.featureEnd();
            }
          }
        }
        writeCursor(t, e, s, i, r, n, o) {
          const a = e.getGroupId(),
            h = e.getDisplayId(),
            c = this._templateStore.getTemplateGroup(a),
            u = this._schema.mesh.sortKey;
          let f = 0;
          if (
            ((0, l.pC)(u) &&
              ((f =
                null != u.fieldIndex
                  ? e.getComputedNumericAtIndex(u.fieldIndex)
                  : null != u.field
                  ? e.readAttribute(u.field)
                  : e.readAttribute(this._idField)),
              (f *= 'asc' === u.order ? 1 : -1)),
            t.featureStart(0, null == f || isNaN(f) ? 0 : f),
            null != h && c)
          ) {
            if (dn(a)) for (const t of c) t.bindFeature(e, s, i);
            for (const s of c) s.write(t, e, r, o);
            if ((0, l.pC)(n) && t.hasRecords) {
              const s = n && this._findLabelRef(c);
              this._writeLabels(t, e, n, s, r, o);
            }
            t.featureEnd();
          }
        }
        _findLabelRef(t) {
          for (const e of t) if (e instanceof vs) return e;
          return null;
        }
        _writeLabels(t, e, s, i, r, n) {
          for (const o of s)
            if ((0, l.pC)(o) && o) {
              const { glyphs: s, rtl: a, index: h } = o,
                l = this._labelTemplates.get(h);
              l.setZoomLevel(r),
                l.bindReferenceTemplate(i),
                l.bindTextInfo(s, a),
                l.write(t, e, null, n);
            }
        }
      }
      var yn = s(13867);
      const xn = h.Z.getLogger('esri/views/2d/engine/webgl/util/Matcher');
      async function vn(t, e, s, i) {
        switch (t.type) {
          case 'simple':
            return Mn.fromBasicRenderer(t, e, s, i);
          case 'map':
            return Pn.fromUVRenderer(t, e, s, i);
          case 'interval':
            return Sn.fromCBRenderer(t, e, s, i);
          case 'dictionary':
            return Ln.fromDictionaryRenderer(t, e, s, i);
          case 'subtype':
            return bn.fromSubtypes(t, e, s, i);
        }
      }
      class Mn {
        constructor() {
          (this.type = 'feature'), (this._defaultResult = null);
        }
        static async fromBasicRenderer(t, e, s, i) {
          const r = new Mn();
          if (t.symbol) {
            const n = await nn(t.symbol, s, i),
              o = e.createTemplateGroup(n, null);
            r.setDefault(o);
          }
          return r;
        }
        size() {
          return 1;
        }
        getDefault() {
          return this._defaultResult;
        }
        setDefault(t) {
          this._defaultResult = t;
        }
        match(t, e, s, i, r) {
          return this.getDefault();
        }
        async analyze(t, e, s, i, r, n) {
          return null;
        }
      }
      class bn extends Mn {
        constructor(t, e) {
          super(), (this._subMatchers = t), (this._subtypeField = e);
        }
        static async fromSubtypes(t, e, s, i) {
          const r = new Map(),
            n = [];
          for (const o in t.renderers) {
            const a = parseInt(o, 10),
              h = vn(t.renderers[o], e, s, i).then((t) => r.set(a, t));
            n.push(h);
          }
          return await Promise.all(n), new bn(r, t.subtypeField);
        }
        match(t, e, s, i, r) {
          const n = e.readAttribute(this._subtypeField),
            o = this._subMatchers.get(n);
          return o ? o.match(t, e, s, i, r) : null;
        }
      }
      class Sn extends Mn {
        constructor(t, e, s, i) {
          super(),
            (this.type = 'interval'),
            (this._intervals = []),
            (this._isMaxInclusive = e),
            (this._fieldIndex = i),
            (this._field = t),
            (this._normalizationInfo = s);
        }
        static async fromCBRenderer(t, e, s, i) {
          const {
              isMaxInclusive: r,
              normalizationField: n,
              normalizationTotal: o,
              normalizationType: a,
            } = t,
            h = t.field,
            l = new Sn(
              h,
              r,
              {
                normalizationField: n,
                normalizationTotal: o,
                normalizationType: a,
              },
              t.fieldIndex,
            ),
            c = await nn(t.backgroundFillSymbol, s, i);
          await Promise.all(
            t.intervals.map(async (t) => {
              const r = await nn(t.symbol, s, i),
                n = await e.createTemplateGroup(r, c),
                o = { min: t.min, max: t.max };
              l.add(o, n);
            }),
          );
          const u = await nn(t.defaultSymbol, s, i);
          if (u) {
            const t = await e.createTemplateGroup(u, c);
            l.setDefault(t);
          }
          return l;
        }
        add(t, e) {
          this._intervals.push({ interval: t, result: e }),
            this._intervals.sort((t, e) => t.interval.min - e.interval.min);
        }
        size() {
          return super.size() + this._intervals.length;
        }
        match(t, e, s, i, r) {
          if (null == this._fieldIndex && !this._field)
            return this.getDefault();
          const n =
            null != this._fieldIndex
              ? e.getComputedNumericAtIndex(this._fieldIndex)
              : this._getValueFromField(e);
          if (!n && (null == n || isNaN(n))) return this.getDefault();
          for (let t = 0; t < this._intervals.length; t++) {
            const { interval: e, result: s } = this._intervals[t],
              i = n >= e.min,
              r = this._isMaxInclusive ? n <= e.max : n < e.max;
            if (i && r) return s;
          }
          return this.getDefault();
        }
        _needsNormalization() {
          const t = this._normalizationInfo;
          return (
            t &&
            (t.normalizationField ||
              t.normalizationTotal ||
              t.normalizationType)
          );
        }
        _getValueFromField(t) {
          const e = t.readAttribute(this._field);
          if (!this._needsNormalization() || null == e) return e;
          const {
              normalizationField: s,
              normalizationTotal: i,
              normalizationType: r,
            } = this._normalizationInfo,
            n = !!s && t.readAttribute(s);
          if (r)
            switch (r) {
              case 'esriNormalizeByField':
                return n ? e / n : void 0;
              case 'esriNormalizeByLog':
                return Math.log(e) * Math.LOG10E;
              case 'esriNormalizeByPercentOfTotal':
                return (e / i) * 100;
              default:
                return void xn.error(`Found unknown normalization type: ${r}`);
            }
          else xn.error('Normalization is required, but no type was set!');
        }
      }
      class Pn extends Mn {
        constructor(t, e, s) {
          super(),
            (this.type = 'map'),
            (this._nullResult = null),
            (this._resultsMap = new Map()),
            (this._fieldsIndex = s),
            (this._fields = t),
            (this._seperator = e || '');
        }
        static async fromUVRenderer(t, e, s, i) {
          const r = t.fieldDelimiter,
            n = [t.field];
          t.field2 && n.push(t.field2), t.field3 && n.push(t.field3);
          const o = await nn(t.backgroundFillSymbol, s, i),
            a = new Pn(n, r, t.fieldIndex);
          await Promise.all(
            t.map.map(async (t) => {
              const r = await nn(t.symbol, s, i),
                n = await e.createTemplateGroup(r, o);
              '<Null>' === t.value ? a.setNullResult(n) : a.add(t.value, n);
            }),
          );
          const h = await nn(t.defaultSymbol, s, i);
          if (h) {
            const t = await e.createTemplateGroup(h, o);
            a.setDefault(t);
          }
          return a;
        }
        setNullResult(t) {
          this._nullResult = t;
        }
        add(t, e) {
          this._resultsMap.set(t.toString(), e);
        }
        size() {
          return super.size() + this._resultsMap.size;
        }
        match(t, e, s, i, r) {
          if (null == this._fieldsIndex && !this._fields)
            return this.getDefault();
          const n =
            null != this._fieldsIndex
              ? e.getComputedStringAtIndex(this._fieldsIndex)
              : this._getValueFromFields(e);
          if (
            null !== this._nullResult &&
            (null == n || '' === n || '<Null>' === n)
          )
            return this._nullResult;
          if (!n && null == n) return this.getDefault();
          const o = n.toString();
          return this._resultsMap.has(o)
            ? this._resultsMap.get(o)
            : this.getDefault();
        }
        _getValueFromFields(t) {
          const e = [];
          for (const s of this._fields) {
            const i = t.readAttribute(s);
            null == i || '' === i ? e.push('<Null>') : e.push(i);
          }
          return e.join(this._seperator);
        }
      }
      let wn;
      async function Cn() {
        return wn || (wn = s.e(5329).then(s.bind(s, 25329))), wn;
      }
      class Ln extends Mn {
        constructor(t, e, s, i, r, n) {
          super(),
            (this.type = 'dictionary'),
            (this._groupIdCache = new yn.Z(100)),
            (this._loader = t),
            (this._fieldMap = t.fieldMap),
            (this._symbolFields = t.getSymbolFields()),
            (this._templates = e),
            (this._info = s),
            (this._scaleFn = i),
            (this._schemaUtilsModule = r),
            (this._symbolOptions = n);
        }
        static async fromDictionaryRenderer(t, e, i, r) {
          const [{ DictionaryLoader: n }, o] = await Promise.all([
              s.e(6903).then(s.bind(s, 84475)),
              Cn(),
            ]),
            a = new n(t.url, t.config, t.fieldMap);
          await a.fetchResources({
            spatialReference: i.spatialReference,
            fields: i.fields,
          });
          const h = await (async function (t, e) {
            const s = t || 1;
            if ('number' == typeof s) return (t, e, i) => s;
            const i = await (0, fi.Yi)(s, e.spatialReference, e.fields);
            return (t, s, r) => tr(i, t, { $view: r }, e.geometryType, s) || 1;
          })(t.scaleExpression, i);
          return new Ln(a, e, i, h, o, t.symbolOptions);
        }
        async _analyzeFeature(t, e, s, i, r) {
          const n = t.readLegacyFeature(),
            a = this._scaleFn(n, s, i),
            h = this._attributeHash(n) + '-' + a,
            l = this._groupIdCache.get(h);
          if (l) return l;
          const c = {
              ...i,
              spatialReference: this._info.spatialReference,
              abortOptions: r,
              fields: this._info.fields,
            },
            u = await this._loader.getSymbolAsync(n, c),
            f = this._schemaUtilsModule.createSymbolSchema(
              u,
              this._symbolOptions,
            ),
            _ = nn(f, this._info, e, r).then((t) => {
              if ('expanded-cim' !== t.type)
                return (
                  xn.error(
                    new o.Z(
                      'mapview-bad-type',
                      `Found unexpected type ${t.type} in dictionary response`,
                    ),
                  ),
                  null
                );
              t.hash += '-' + a;
              for (const e of t.layers)
                (e.scaleFactor = a), (e.templateHash += '-' + a);
              return this._templates.createTemplateGroup(t, null);
            });
          return this._groupIdCache.put(h, _, 1), _;
        }
        async analyze(t, e, s, i, r, n) {
          const o = e.getCursor(),
            a = [];
          for (; o.next(); ) a.push(this._analyzeFeature(o, s, i, r, n));
          return Promise.all(a);
        }
        match(t, e, s, i, r) {
          return null;
        }
        _attributeHash(t) {
          let e = '';
          for (const s of this._symbolFields) {
            const i = this._fieldMap[s];
            i && (e += t.attributes[i] + '-');
          }
          return e;
        }
      }
      var In = s(47988);
      class kn {
        constructor(t) {
          (this._remoteClient = t),
            (this._resourceMap = new Map()),
            (this._inFlightResourceMap = new Map()),
            (this.geometryEngine = null);
        }
        destroy() {}
        async fetchResource(t, e) {
          const s = this._resourceMap,
            i = s.get(t);
          if (i) return i;
          let r = this._inFlightResourceMap.get(t);
          if (r) return r;
          try {
            (r = this._remoteClient.invoke(
              'tileRenderer.fetchResource',
              { url: t },
              { ...e },
            )),
              this._inFlightResourceMap.set(t, r),
              r.then(
                (e) => (this._inFlightResourceMap.delete(t), s.set(t, e), e),
              );
          } catch (t) {
            return (0, c.D_)(t) ? null : { width: 0, height: 0 };
          }
          return r;
        }
        getResource(t) {
          var e;
          return null != (e = this._resourceMap.get(t)) ? e : null;
        }
      }
      function Tn(t, e) {
        return (
          (!t.minScale || t.minScale >= e) && (!t.maxScale || t.maxScale <= e)
        );
      }
      function zn(t) {
        const e = t.message,
          s = {
            message: {
              data: {},
              tileKey: e.tileKey,
              tileKeyOrigin: e.tileKeyOrigin,
            },
            transferList: new Array(),
          };
        for (const t in e.data) {
          const i = e.data[t];
          if (((s.message.data[t] = null), (0, l.pC)(i))) {
            const e = i.stride,
              r = i.indices.slice(0),
              n = i.vertices.slice(0),
              o = i.records.slice(0),
              a = {
                stride: e,
                indices: r,
                vertices: n,
                records: o,
                metrics: (0, l.yw)(i.metrics, (t) => t.slice(0)),
              };
            s.transferList.push(r, n, o), (s.message.data[t] = a);
          }
        }
        return s;
      }
      h.Z.getLogger('esri.views.2d.layers.features.processors.SymbolProcessor');
      let En = class extends In.Z {
        constructor() {
          super(...arguments),
            (this.type = 'symbol'),
            (this._matchers = { feature: null, aggregate: null }),
            (this._bufferData = new Map()),
            (this._bufferIds = new Map());
        }
        initialize() {
          this.handles.add([
            this.tileStore.on('update', this.onTileUpdate.bind(this)),
          ]),
            (this._resourceManagerProxy = new kn(this.remoteClient));
        }
        destroy() {
          this._resourceManagerProxy.destroy();
        }
        get supportsTileUpdates() {
          return !0;
        }
        forEachBufferId(t) {
          this._bufferIds.forEach((e) => {
            e.forEach(t);
          });
        }
        async update(t, e) {
          const s = e.schema.processors[0];
          if ('symbol' !== s.type) return;
          const i = (0, f.Hg)(this._schema, s);
          (0, f.uD)(i, 'mesh') &&
            ((0, a.Z)('esri-2d-update-debug') &&
              console.debug('Applying Update - Processor:', i),
            (t.mesh = !0),
            t.why.mesh.push('Symbology changed'),
            (this._schema = s),
            (this._factory = this._createFactory(s)),
            this._factory.update(s, this.tileStore.tileScheme.tileInfo));
        }
        onTileMessage(t, e, s, i) {
          return (0, c.k_)(i), this._onTileData(t, e, s, i);
        }
        onTileClear(t) {
          return (
            this._bufferData.delete(t.key.id),
            this._bufferIds.delete(t.key.id),
            this.remoteClient.invoke('tileRenderer.onTileData', {
              tileKey: t.id,
              data: { clear: !0 },
            })
          );
        }
        onTileError(t, e, s) {
          const i = s.signal,
            r = { tileKey: t.id, error: e };
          return this.remoteClient.invoke('tileRenderer.onTileError', r, {
            signal: i,
          });
        }
        onTileUpdate(t) {
          for (const e of t.removed)
            this._bufferData.has(e.key.id) && this._bufferData.delete(e.key.id),
              this._bufferIds.has(e.key.id) && this._bufferIds.delete(e.key.id);
          for (const e of t.added)
            this._bufferData.forEach((t) => {
              for (const s of t)
                s.message.tileKey === e.id &&
                  this._updateTileMesh('append', e, zn(s), [], !1, !1, null);
            });
        }
        _addBufferData(t, e) {
          this._bufferData.has(t) || this._bufferData.set(t, []),
            this._bufferData.get(t).push(zn(e));
        }
        _createFactory(t) {
          const { geometryType: e, objectIdField: s, fields: i } = this.service,
            r = {
              geometryType: e,
              fields: i,
              spatialReference: _.Z.fromJSON(this.spatialReference),
            },
            n = new mn(
              (t, e) =>
                this.remoteClient.invoke('tileRenderer.getMaterialItems', t, e),
              this.tileStore.tileScheme.tileInfo,
            ),
            { matcher: o, aggregateMatcher: a } = t.mesh;
          return (
            (this._store = n),
            (this._matchers.feature = vn(o, n, r, this._resourceManagerProxy)),
            (this._matchers.aggregate = (0, l.yw)(a, (t) =>
              vn(t, n, r, this._resourceManagerProxy),
            )),
            new gn(e, s, n)
          );
        }
        async _onTileData(t, e, s, i) {
          (0, c.k_)(i);
          const { type: r, addOrUpdate: n, remove: o } = e,
            a = e.end,
            h = !!this._schema.mesh.sortKey;
          if (!n) {
            const e = {
              type: r,
              addOrUpdate: null,
              remove: o,
              clear: !1,
              end: a,
              sort: h,
            };
            return this.remoteClient.invoke(
              'tileRenderer.onTileData',
              { tileKey: t.id, data: e },
              i,
            );
          }
          const u = this._processFeatures(t, n, s, i);
          try {
            const s = await u;
            if ((0, l.Wi)(s)) {
              const e = {
                type: r,
                addOrUpdate: null,
                remove: o,
                clear: !1,
                end: a,
                sort: h,
              };
              return this.remoteClient.invoke(
                'tileRenderer.onTileData',
                { tileKey: t.id, data: e },
                i,
              );
            }
            const n = [];
            for (const e of s) {
              let s = !1;
              const i = e.message.bufferIds,
                r = t.key.id,
                o = e.message.tileKey;
              if (r !== o && (0, l.pC)(i)) {
                if (!this.tileStore.get(o)) {
                  this._addBufferData(r, e), n.push(e);
                  continue;
                }
                let t = this._bufferIds.get(o);
                t || ((t = new Set()), this._bufferIds.set(o, t));
                const a = Array.from(i);
                for (const e of a) {
                  if (t.has(e)) {
                    s = !0;
                    break;
                  }
                  t.add(e);
                }
              }
              s || (this._addBufferData(r, e), n.push(e));
            }
            await (0, c.$6)(
              n.map((s) => {
                const n = t.key.id === s.message.tileKey,
                  o = n ? e.remove : [],
                  a = n && e.end;
                return this._updateTileMesh(r, t, s, o, a, e.clear, i.signal);
              }),
            );
          } catch (e) {
            this._handleError(t, e, i);
          }
        }
        async _updateTileMesh(t, e, s, i, r, n, o) {
          const a = t,
            h = s.message.tileKey,
            u = !!this._schema.mesh.sortKey;
          h !== e.key.id && (r = !1);
          const f = (0, l.yw)(s, (t) => t.message),
            _ = (0, l.yw)(s, (t) => t.transferList) || [],
            d = {
              type: a,
              addOrUpdate: f,
              remove: i,
              clear: !1,
              end: r,
              sort: u,
            },
            m = { transferList: (0, l.Wg)(_) || [], signal: o };
          return (
            (0, c.k_)(m),
            this.remoteClient.invoke(
              'tileRenderer.onTileData',
              { tileKey: h, data: d },
              m,
            )
          );
        }
        async _processFeatures(t, e, s, i) {
          if ((0, l.Wi)(e) || !e.hasFeatures) return null;
          const r = { transform: t.transform, hasZ: !1, hasM: !1 },
            n = this._factory,
            o = { viewingMode: '', scale: t.scale },
            a = await this._matchers.feature,
            h = await this._matchers.aggregate;
          (0, c.k_)(i);
          const u = this._getLabelInfos(t, e);
          return (
            await n.analyze(
              e.getCursor(),
              this._resourceManagerProxy,
              a,
              h,
              r,
              o,
            ),
            (0, c.k_)(i),
            this._writeFeatureSet(t, e, r, u, n, s)
          );
        }
        _writeFeatureSet(t, e, s, i, r, n) {
          const o = e.getSize(),
            a = new G(
              t.key.id,
              { features: o, records: o, metrics: 0 },
              this._schema.mesh.matcher.stride,
              n,
              !0,
            ),
            h = { viewingMode: '', scale: t.scale },
            c = e.getCursor();
          for (; c.next(); )
            try {
              const e = c.getDisplayId(),
                n = (0, l.pC)(i) ? i.get(e) : null;
              r.writeCursor(a, c, s, h, t.level, n, this._resourceManagerProxy);
            } catch (t) {}
          const u = t.tileInfoView.tileInfo.isWrappable;
          return a.serialize(u);
        }
        _handleError(t, e, s) {
          if (!(0, c.D_)(e)) {
            const i = { tileKey: t.id, error: e.message };
            return this.remoteClient.invoke('tileRenderer.onTileError', i, {
              signal: s.signal,
            });
          }
        }
        _getLabelingSchemaForScale(t) {
          const e = this._schema.mesh.labels;
          if ((0, l.Wi)(e)) return null;
          if ('subtype' === e.type) {
            const s = { type: 'subtype', classes: {} };
            let i = !1;
            for (const r in e.classes) {
              const n = e.classes[r].filter((e) => Tn(e, t.scale));
              (i = i || !!n.length), (s.classes[r] = n);
            }
            return i ? s : null;
          }
          const s = e.classes.filter((e) => Tn(e, t.scale));
          return s.length ? { type: 'simple', classes: s } : null;
        }
        _getLabels(t, e) {
          if ('subtype' === e.type) {
            var s;
            const i = this.service.subtypeField,
              r = (0, l.s3)(i, 'Expected to find subtype Field'),
              n = t.readAttribute(r);
            return null == n ? [] : null != (s = e.classes[n]) ? s : [];
          }
          return e.classes;
        }
        _getLabelInfos(t, e) {
          const s = this._getLabelingSchemaForScale(t);
          if ((0, l.Wi)(s)) return null;
          const i = new Map(),
            r = e.getCursor();
          for (; r.next(); ) {
            const t = r.getDisplayId(),
              e = [],
              o = (0, d.nE)(t),
              a =
                o && 1 !== r.readAttribute('cluster_count')
                  ? 'aggregate'
                  : 'feature',
              h = this._getLabels(r, s);
            for (const s of h) {
              if (s.target !== a) continue;
              const i = r.getStorage(),
                h =
                  o && 'feature' === a
                    ? i.getComputedStringAtIndex(
                        r.readAttribute('referenceId'),
                        s.fieldIndex,
                      )
                    : i.getComputedStringAtIndex(t, s.fieldIndex);
              if (!h) continue;
              const l = n(h.toString()),
                c = l[0],
                u = l[1];
              this._store.getMosaicItem(s.symbol, Ur(c)).then((t) => {
                e[s.index] = {
                  glyphs: t.glyphMosaicItems,
                  rtl: u,
                  index: s.index,
                };
              });
            }
            i.set(t, e);
          }
          return i;
        }
      };
      En = (0, i._)(
        [(0, u.j)('esri.views.2d.layers.features.processors.SymbolProcessor')],
        En,
      );
      const Fn = En;
    },
    14867: (t, e, s) => {
      function i(t, e, s, i) {
        const r = t.clone(),
          n = 1 << r.level,
          o = r.col + e,
          a = r.row + s;
        return (
          i && o < 0
            ? ((r.col = o + n), (r.world -= 1))
            : o >= n
            ? ((r.col = o - n), (r.world += 1))
            : (r.col = o),
          (r.row = a),
          r
        );
      }
      s.d(e, { M: () => i }), s(3651);
    },
  },
]);
