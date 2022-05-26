'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [1916],
  {
    36030: (e, t, r) => {
      r.d(t, { J: () => s });
      var n = r(35454),
        i = r(5600);
      function s(e, t = {}) {
        var r;
        const s = e instanceof n.X ? e : new n.X(e, t),
          o = {
            type:
              null == (r = null == t ? void 0 : t.ignoreUnknown) || r
                ? s.apiValues
                : String,
            json: {
              type: s.jsonValues,
              read: (null == t || !t.readOnly) && { reader: s.read },
              write: { writer: s.write },
            },
          };
        return (
          void 0 !== (null == t ? void 0 : t.readOnly) &&
            (o.readOnly = !!t.readOnly),
          void 0 !== (null == t ? void 0 : t.default) &&
            (o.json.default = t.default),
          void 0 !== (null == t ? void 0 : t.name) && (o.json.name = t.name),
          (0, i.Cb)(o)
        );
      }
    },
    43090: (e, t, r) => {
      function n(e) {
        return 32 + e.length;
      }
      function i(e) {
        if (!e) return 0;
        let t = 32;
        for (const r in e)
          if (e.hasOwnProperty(r)) {
            const i = e[r];
            switch (typeof i) {
              case 'string':
                t += n(i);
                break;
              case 'number':
                t += 16;
                break;
              case 'boolean':
                t += 4;
            }
          }
        return t;
      }
      function s(e, t) {
        return 32 + e.length * t;
      }
      var o;
      r.d(t, { Y8: () => o, f2: () => i, do: () => s }),
        (function (e) {
          (e[(e.KILOBYTES = 1024)] = 'KILOBYTES'),
            (e[(e.MEGABYTES = 1048576)] = 'MEGABYTES'),
            (e[(e.GIGABYTES = 1073741824)] = 'GIGABYTES');
        })(o || (o = {}));
    },
    74085: (e, t, r) => {
      function n(e) {}
      r.d(t, { Bg: () => n }), r(80442);
    },
    45091: (e, t, r) => {
      r.d(t, { Z: () => c });
      var n,
        i,
        s = r(80442),
        o = r(71143);
      ((i = n || (n = {}))[(i.varint = 0)] = 'varint'),
        (i[(i.fixed64 = 1)] = 'fixed64'),
        (i[(i.delimited = 2)] = 'delimited'),
        (i[(i.fixed32 = 5)] = 'fixed32'),
        (i[(i.unknown = 99)] = 'unknown');
      const a = 4294967296,
        l = new TextDecoder('utf-8'),
        u =
          (0, s.Z)('safari') || (0, s.Z)('ios') ? 6 : (0, s.Z)('ff') ? 12 : 32;
      class c {
        constructor(e, t, r = 0, i = e ? e.byteLength : 0) {
          (this._tag = 0), (this._dataType = n.unknown), this._init(e, t, r, i);
        }
        _init(e, t, r, n) {
          (this._data = e),
            (this._dataView = t),
            (this._pos = r),
            (this._end = n);
        }
        clone() {
          return new c(this._data, this._dataView, this._pos, this._end);
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
            r = e.getUint32(t, !0) + e.getUint32(t + 4, !0) * a;
          return this._skip(8), r;
        }
        getSFixed64() {
          const e = this._dataView,
            t = this._pos,
            r = e.getUint32(t, !0) + e.getInt32(t + 4, !0) * a;
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
          const i = this.getMessage(),
            s = e(i, t, r, n);
          return i.release(), s;
        }
        processMessage(e) {
          const t = this.getMessage(),
            r = e(t);
          return t.release(), r;
        }
        getMessage() {
          const e = this._getLength(),
            t = c.pool.acquire();
          return (
            t._init(this._data, this._dataView, this._pos, this._pos + e),
            this._skip(e),
            t
          );
        }
        release() {
          c.pool.release(this);
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
            let i = 1;
            for (; r !== this._end && ((t = e[r]), 0 != (128 & t)); )
              ++r, (n += (127 & t) * i), (i *= 128);
            if (r === this._end) throw new Error('Varint overrun!');
            ++r, (n += t * i);
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
          if ((r = Math.min(this._end, r)) - t > u) {
            const n = e.subarray(t, r);
            return l.decode(n);
          }
          let n = '',
            i = '';
          for (let s = t; s < r; ++s) {
            const t = e[s];
            128 & t
              ? (i += '%' + t.toString(16))
              : ((n += decodeURIComponent(i) + String.fromCharCode(t)),
                (i = ''));
          }
          return i.length && (n += decodeURIComponent(i)), n;
        }
        _toBytes(e, t, r) {
          return (
            (r = Math.min(this._end, r)), new Uint8Array(e.buffer, t, r - t)
          );
        }
      }
      c.pool = new o.Z(c, null, (e) => {
        (e._data = null), (e._dataView = null);
      });
    },
    60437: (e, t, r) => {
      r.d(t, {
        Gv: () => g,
        Ue: () => i,
        cS: () => h,
        fS: () => f,
        TC: () => o,
        pp: () => a,
        JR: () => p,
        al: () => s,
        t8: () => d,
        Tn: () => c,
        op: () => u,
        dp: () => l,
      });
      var n = r(70586);
      function i(e = m) {
        return [e[0], e[1], e[2], e[3], e[4], e[5]];
      }
      function s(e, t, r, n, s, o, a = i()) {
        return (
          (a[0] = e),
          (a[1] = t),
          (a[2] = r),
          (a[3] = n),
          (a[4] = s),
          (a[5] = o),
          a
        );
      }
      function o(e, t) {
        (e[0] = Math.min(e[0], t[0])),
          (e[1] = Math.min(e[1], t[1])),
          (e[2] = Math.min(e[2], t[2])),
          (e[3] = Math.max(e[3], t[3])),
          (e[4] = Math.max(e[4], t[4])),
          (e[5] = Math.max(e[5], t[5]));
      }
      function a(e, t) {
        (e[0] = Math.min(e[0], t[0])),
          (e[1] = Math.min(e[1], t[1])),
          (e[2] = Math.min(e[2], t[2])),
          (e[3] = Math.max(e[3], t[0])),
          (e[4] = Math.max(e[4], t[1])),
          (e[5] = Math.max(e[5], t[2]));
      }
      function l(e, t = [0, 0, 0]) {
        return (
          (t[0] = (function (e) {
            return e[0] >= e[3] ? 0 : e[3] - e[0];
          })(e)),
          (t[1] = (function (e) {
            return e[1] >= e[4] ? 0 : e[4] - e[1];
          })(e)),
          (t[2] = (function (e) {
            return e[2] >= e[5] ? 0 : e[5] - e[2];
          })(e)),
          t
        );
      }
      function u(e, t, r = e) {
        return (
          (r[0] = t[0]),
          (r[1] = t[1]),
          (r[2] = t[2]),
          r !== e && ((r[3] = e[3]), (r[4] = e[4]), (r[5] = e[5])),
          r
        );
      }
      function c(e, t, r = e) {
        return (
          (r[3] = t[0]),
          (r[4] = t[1]),
          (r[5] = t[2]),
          r !== e && ((r[0] = e[0]), (r[1] = e[1]), (r[2] = e[2])),
          e
        );
      }
      function d(e, t) {
        return (
          (e[0] = t[0]),
          (e[1] = t[1]),
          (e[2] = t[2]),
          (e[3] = t[3]),
          (e[4] = t[4]),
          (e[5] = t[5]),
          e
        );
      }
      function h(e) {
        return e ? d(e, g) : i(g);
      }
      function p(e, t) {
        return (
          (e[0] = t[0]),
          (e[1] = t[1]),
          (e[2] = Number.NEGATIVE_INFINITY),
          (e[3] = t[2]),
          (e[4] = t[3]),
          (e[5] = Number.POSITIVE_INFINITY),
          e
        );
      }
      function y(e) {
        return 6 === e.length;
      }
      function f(e, t, r) {
        if ((0, n.Wi)(e) || (0, n.Wi)(t)) return e === t;
        if (!y(e) || !y(t)) return !1;
        if (r) {
          for (let n = 0; n < e.length; n++) if (!r(e[n], t[n])) return !1;
        } else for (let r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
        return !0;
      }
      r(6570), r(24470);
      const g = [1 / 0, 1 / 0, 1 / 0, -1 / 0, -1 / 0, -1 / 0],
        m = [0, 0, 0, 0, 0, 0];
      i();
    },
    24470: (e, t, r) => {
      r.d(t, {
        Gv: () => h,
        SO: () => u,
        r3: () => d,
        Ue: () => s,
        oJ: () => a,
        al: () => o,
        kK: () => c,
        HH: () => l,
      }),
        r(80442),
        r(22021);
      var n = r(70586),
        i = r(6570);
      function s(e = p) {
        return [e[0], e[1], e[2], e[3]];
      }
      function o(e, t, r, n, i = s()) {
        return (i[0] = e), (i[1] = t), (i[2] = r), (i[3] = n), i;
      }
      function a(e, t = s()) {
        return (
          (t[0] = e.xmin), (t[1] = e.ymin), (t[2] = e.xmax), (t[3] = e.ymax), t
        );
      }
      function l(e, t) {
        return new i.Z({
          xmin: e[0],
          ymin: e[1],
          xmax: e[2],
          ymax: e[3],
          spatialReference: t,
        });
      }
      function u(e) {
        return (
          (function (e) {
            return (0, n.Wi)(e) || e[0] >= e[2] ? 0 : e[2] - e[0];
          })(e) *
          (function (e) {
            return e[1] >= e[3] ? 0 : e[3] - e[1];
          })(e)
        );
      }
      function c(e, t) {
        return (
          Math.max(t[0], e[0]) <= Math.min(t[2], e[2]) &&
          Math.max(t[1], e[1]) <= Math.min(t[3], e[3])
        );
      }
      function d(e, t) {
        return t[0] >= e[0] && t[2] <= e[2] && t[1] >= e[1] && t[3] <= e[3];
      }
      const h = [1 / 0, 1 / 0, -1 / 0, -1 / 0],
        p = [0, 0, 0, 0];
    },
    33955: (e, t, r) => {
      r.d(t, {
        im: () => f,
        q9: () => _,
        Ji: () => g,
        YX: () => c,
        aW: () => d,
        wp: () => h,
        oU: () => y,
        l9: () => p,
      });
      var n = r(70586),
        i = r(6570),
        s = r(9361),
        o = r(65091),
        a = r(13473),
        l = r(38913),
        u = r(58901);
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
      function h(e) {
        return void 0 !== e.x && void 0 !== e.y;
      }
      function p(e) {
        return void 0 !== e.paths;
      }
      function y(e) {
        return void 0 !== e.rings;
      }
      function f(e) {
        return (0, n.Wi)(e)
          ? null
          : e instanceof s.Z
          ? e
          : h(e)
          ? a.Z.fromJSON(e)
          : p(e)
          ? u.Z.fromJSON(e)
          : y(e)
          ? l.Z.fromJSON(e)
          : d(e)
          ? o.Z.fromJSON(e)
          : c(e)
          ? i.Z.fromJSON(e)
          : null;
      }
      function g(e) {
        return e
          ? h(e)
            ? 'esriGeometryPoint'
            : p(e)
            ? 'esriGeometryPolyline'
            : y(e)
            ? 'esriGeometryPolygon'
            : c(e)
            ? 'esriGeometryEnvelope'
            : d(e)
            ? 'esriGeometryMultipoint'
            : null
          : null;
      }
      const m = {
        esriGeometryPoint: a.Z,
        esriGeometryPolyline: u.Z,
        esriGeometryPolygon: l.Z,
        esriGeometryEnvelope: i.Z,
        esriGeometryMultipoint: o.Z,
      };
      function _(e) {
        return (e && m[e]) || null;
      }
    },
    82397: (e, t, r) => {
      r.d(t, {
        vY: () => a,
        J9: () => h,
        U1: () => p,
        Ie: () => y,
        G6: () => f,
      });
      var n = r(70586);
      r(33955);
      const i = (e, t, r) => [t, r],
        s = (e, t, r) => [t, r, e[2]],
        o = (e, t, r) => [t, r, e[2], e[3]];
      function a(e) {
        return e
          ? {
              originPosition:
                'upper-left' === e.originPosition
                  ? 'upperLeft'
                  : 'lower-left' === e.originPosition
                  ? 'lowerLeft'
                  : e.originPosition,
              scale: e.tolerance ? [e.tolerance, e.tolerance] : [1, 1],
              translate: (0, n.pC)(e.extent)
                ? [e.extent.xmin, e.extent.ymax]
                : [0, 0],
            }
          : null;
      }
      function l({ scale: e, translate: t }, r) {
        return r * e[0] + t[0];
      }
      function u({ scale: e, translate: t }, r) {
        return t[1] - r * e[1];
      }
      function c(e, t, r) {
        const n = new Array(r.length);
        if (!r.length) return n;
        const [i, s] = e.scale;
        let o = l(e, r[0][0]),
          a = u(e, r[0][1]);
        n[0] = t(r[0], o, a);
        for (let e = 1; e < r.length; e++) {
          const l = r[e];
          (o += l[0] * i), (a -= l[1] * s), (n[e] = t(l, o, a));
        }
        return n;
      }
      function d(e, t, r) {
        const n = new Array(r.length);
        for (let i = 0; i < r.length; i++) n[i] = c(e, t, r[i]);
        return n;
      }
      function h(e, t, r, a, l) {
        return (
          (0, n.pC)(r) &&
            (t.points = (function (e, t, r, n) {
              return c(e, r ? (n ? o : s) : n ? s : i, t);
            })(e, r.points, a, l)),
          t
        );
      }
      function p(e, t, r, i, s) {
        return (
          (0, n.Wi)(r) ||
            ((t.x = l(e, r.x)),
            (t.y = u(e, r.y)),
            t !== r && (i && (t.z = r.z), s && (t.m = r.m))),
          t
        );
      }
      function y(e, t, r, a, l) {
        return (
          (0, n.pC)(r) &&
            (t.rings = (function (e, t, r, n) {
              return d(e, r ? (n ? o : s) : n ? s : i, t);
            })(e, r.rings, a, l)),
          t
        );
      }
      function f(e, t, r, a, l) {
        return (
          (0, n.pC)(r) &&
            (t.paths = (function (e, t, r, n) {
              return d(e, r ? (n ? o : s) : n ? s : i, t);
            })(e, r.paths, a, l)),
          t
        );
      }
    },
    86973: (e, t, r) => {
      r.d(t, { Mk: () => i, P$: () => s });
      var n = r(35454);
      const i = (0, n.w)()({
          esriGeometryPoint: 'point',
          esriGeometryMultipoint: 'multipoint',
          esriGeometryPolyline: 'polyline',
          esriGeometryPolygon: 'polygon',
        }),
        s = (0, n.w)()({
          esriGeometryPoint: 'point',
          esriGeometryMultipoint: 'multipoint',
          esriGeometryPolyline: 'polyline',
          esriGeometryPolygon: 'polygon',
          esriGeometryEnvelope: 'extent',
          mesh: 'mesh',
        });
    },
    69285: (e, t, r) => {
      r.d(t, { k: () => o });
      var n = r(70586),
        i = r(67900),
        s = r(8744);
      function o(e, t, r) {
        if ((0, n.Wi)(t) || (0, n.Wi)(r) || r.vcsWkid || (0, s.fS)(t, r))
          return null;
        const o = (0, i._R)(t) / (0, i._R)(r);
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
    1231: (e, t, r) => {
      r.d(t, { Z: () => g });
      var n,
        i = r(43697),
        s = r(35454),
        o = r(96674),
        a = r(5600),
        l = (r(67676), r(80442), r(75215)),
        u = r(36030),
        c = r(71715),
        d = r(52011),
        h = r(72729),
        p = r(86719);
      const y = new s.X({
        binary: 'binary',
        coordinate: 'coordinate',
        countOrAmount: 'count-or-amount',
        dateAndTime: 'date-and-time',
        description: 'description',
        locationOrPlaceName: 'location-or-place-name',
        measurement: 'measurement',
        nameOrTitle: 'name-or-title',
        none: 'none',
        orderedOrRanked: 'ordered-or-ranked',
        percentageOrRatio: 'percentage-or-ratio',
        typeOrCategory: 'type-or-category',
        uniqueIdentifier: 'unique-identifier',
      });
      let f = (n = class extends o.wq {
        constructor(e) {
          super(e),
            (this.alias = null),
            (this.defaultValue = void 0),
            (this.description = null),
            (this.domain = null),
            (this.editable = !0),
            (this.length = -1),
            (this.name = null),
            (this.nullable = !0),
            (this.type = null),
            (this.valueType = null);
        }
        readDescription(e, { description: t }) {
          let r;
          try {
            r = JSON.parse(t);
          } catch (e) {}
          return r ? r.value : null;
        }
        readValueType(e, { description: t }) {
          let r;
          try {
            r = JSON.parse(t);
          } catch (e) {}
          return r ? y.fromJSON(r.fieldValueType) : null;
        }
        clone() {
          return new n({
            alias: this.alias,
            defaultValue: this.defaultValue,
            description: this.description,
            domain: (this.domain && this.domain.clone()) || null,
            editable: this.editable,
            length: this.length,
            name: this.name,
            nullable: this.nullable,
            type: this.type,
            valueType: this.valueType,
          });
        }
      });
      (0, i._)(
        [(0, a.Cb)({ type: String, json: { write: !0 } })],
        f.prototype,
        'alias',
        void 0,
      ),
        (0, i._)(
          [
            (0, a.Cb)({
              type: [String, Number],
              json: { write: { allowNull: !0 } },
            }),
          ],
          f.prototype,
          'defaultValue',
          void 0,
        ),
        (0, i._)([(0, a.Cb)()], f.prototype, 'description', void 0),
        (0, i._)(
          [(0, c.r)('description')],
          f.prototype,
          'readDescription',
          null,
        ),
        (0, i._)(
          [
            (0, a.Cb)({
              types: h.V5,
              json: { read: { reader: h.im }, write: !0 },
            }),
          ],
          f.prototype,
          'domain',
          void 0,
        ),
        (0, i._)(
          [(0, a.Cb)({ type: Boolean, json: { write: !0 } })],
          f.prototype,
          'editable',
          void 0,
        ),
        (0, i._)(
          [(0, a.Cb)({ type: l.z8, json: { write: !0 } })],
          f.prototype,
          'length',
          void 0,
        ),
        (0, i._)(
          [(0, a.Cb)({ type: String, json: { write: !0 } })],
          f.prototype,
          'name',
          void 0,
        ),
        (0, i._)(
          [(0, a.Cb)({ type: Boolean, json: { write: !0 } })],
          f.prototype,
          'nullable',
          void 0,
        ),
        (0, i._)([(0, u.J)(p.v)], f.prototype, 'type', void 0),
        (0, i._)([(0, a.Cb)()], f.prototype, 'valueType', void 0),
        (0, i._)(
          [(0, c.r)('valueType', ['description'])],
          f.prototype,
          'readValueType',
          null,
        ),
        (f = n = (0, i._)([(0, d.j)('esri.layers.support.Field')], f));
      const g = f;
    },
    72729: (e, t, r) => {
      r.d(t, { im: () => G, V5: () => x }), r(80442);
      var n,
        i = r(43697),
        s = r(22974),
        o = r(5600),
        a = (r(75215), r(36030)),
        l = r(52011),
        u = r(96674);
      r(67676);
      let c = (n = class extends u.wq {
        constructor(e) {
          super(e), (this.name = null), (this.code = null);
        }
        clone() {
          return new n({ name: this.name, code: this.code });
        }
      });
      (0, i._)(
        [(0, o.Cb)({ type: String, json: { write: !0 } })],
        c.prototype,
        'name',
        void 0,
      ),
        (0, i._)(
          [(0, o.Cb)({ type: [String, Number], json: { write: !0 } })],
          c.prototype,
          'code',
          void 0,
        ),
        (c = n = (0, i._)([(0, l.j)('esri.layers.support.CodedValue')], c));
      const d = c,
        h = new (r(35454).X)({
          inherited: 'inherited',
          codedValue: 'coded-value',
          range: 'range',
        });
      let p = class extends u.wq {
        constructor(e) {
          super(e), (this.name = null), (this.type = null);
        }
      };
      (0, i._)(
        [(0, o.Cb)({ type: String, json: { write: !0 } })],
        p.prototype,
        'name',
        void 0,
      ),
        (0, i._)([(0, a.J)(h)], p.prototype, 'type', void 0),
        (p = (0, i._)([(0, l.j)('esri.layers.support.Domain')], p));
      const y = p;
      var f;
      let g = (f = class extends y {
        constructor(e) {
          super(e), (this.codedValues = null), (this.type = 'coded-value');
        }
        getName(e) {
          let t = null;
          if (this.codedValues) {
            const r = String(e);
            this.codedValues.some(
              (e) => (String(e.code) === r && (t = e.name), !!t),
            );
          }
          return t;
        }
        clone() {
          return new f({
            codedValues: (0, s.d9)(this.codedValues),
            name: this.name,
          });
        }
      });
      (0, i._)(
        [(0, o.Cb)({ type: [d], json: { write: !0 } })],
        g.prototype,
        'codedValues',
        void 0,
      ),
        (0, i._)(
          [(0, a.J)({ codedValue: 'coded-value' })],
          g.prototype,
          'type',
          void 0,
        ),
        (g = f =
          (0, i._)([(0, l.j)('esri.layers.support.CodedValueDomain')], g));
      const m = g;
      var _;
      r(92604), r(37697);
      let b = (_ = class extends y {
        constructor(e) {
          super(e), (this.type = 'inherited');
        }
        clone() {
          return new _();
        }
      });
      (0, i._)(
        [(0, a.J)({ inherited: 'inherited' })],
        b.prototype,
        'type',
        void 0,
      ),
        (b = _ =
          (0, i._)([(0, l.j)('esri.layers.support.InheritedDomain')], b));
      const k = b;
      var w;
      let T = (w = class extends y {
        constructor(e) {
          super(e),
            (this.maxValue = null),
            (this.minValue = null),
            (this.type = 'range');
        }
        clone() {
          return new w({
            maxValue: this.maxValue,
            minValue: this.minValue,
            name: this.name,
          });
        }
      });
      (0, i._)(
        [
          (0, o.Cb)({
            type: Number,
            json: {
              type: [Number],
              read: {
                source: 'range',
                reader: (e, t) => t.range && t.range[1],
              },
              write: {
                enabled: !1,
                overridePolicy() {
                  return {
                    enabled: null != this.maxValue && null == this.minValue,
                  };
                },
                target: 'range',
                writer(e, t, r) {
                  t[r] = [this.minValue || 0, e];
                },
              },
            },
          }),
        ],
        T.prototype,
        'maxValue',
        void 0,
      ),
        (0, i._)(
          [
            (0, o.Cb)({
              type: Number,
              json: {
                type: [Number],
                read: {
                  source: 'range',
                  reader: (e, t) => t.range && t.range[0],
                },
                write: {
                  target: 'range',
                  writer(e, t, r) {
                    t[r] = [e, this.maxValue || 0];
                  },
                },
              },
            }),
          ],
          T.prototype,
          'minValue',
          void 0,
        ),
        (0, i._)([(0, a.J)({ range: 'range' })], T.prototype, 'type', void 0),
        (T = w = (0, i._)([(0, l.j)('esri.layers.support.RangeDomain')], T));
      const v = T,
        x = {
          key: 'type',
          base: y,
          typeMap: { range: T, 'coded-value': m, inherited: k },
        };
      function G(e) {
        if (!e || !e.type) return null;
        switch (e.type) {
          case 'range':
            return v.fromJSON(e);
          case 'codedValue':
            return m.fromJSON(e);
          case 'inherited':
            return k.fromJSON(e);
        }
        return null;
      }
    },
    86719: (e, t, r) => {
      r.d(t, { v: () => n });
      const n = new (r(35454).X)({
        esriFieldTypeSmallInteger: 'small-integer',
        esriFieldTypeInteger: 'integer',
        esriFieldTypeSingle: 'single',
        esriFieldTypeDouble: 'double',
        esriFieldTypeLong: 'long',
        esriFieldTypeString: 'string',
        esriFieldTypeDate: 'date',
        esriFieldTypeOID: 'oid',
        esriFieldTypeGeometry: 'geometry',
        esriFieldTypeBlob: 'blob',
        esriFieldTypeRaster: 'raster',
        esriFieldTypeGUID: 'guid',
        esriFieldTypeGlobalID: 'global-id',
        esriFieldTypeXML: 'xml',
      });
    },
    77863: (e, t, r) => {
      r.d(t, { K9: () => F, O7: () => d, G$: () => x });
      var n = r(20102),
        i = r(70586),
        s = r(45091),
        o = r(5428),
        a = r(78760);
      const l = [
          'esriFieldTypeSmallInteger',
          'esriFieldTypeInteger',
          'esriFieldTypeSingle',
          'esriFieldTypeDouble',
          'esriFieldTypeString',
          'esriFieldTypeDate',
          'esriFieldTypeOID',
          'esriFieldTypeGeometry',
          'esriFieldTypeBlob',
          'esriFieldTypeRaster',
          'esriFieldTypeGUID',
          'esriFieldTypeGlobalID',
          'esriFieldTypeXML',
        ],
        u = [
          'sqlTypeBigInt',
          'sqlTypeBinary',
          'sqlTypeBit',
          'sqlTypeChar',
          'sqlTypeDate',
          'sqlTypeDecimal',
          'sqlTypeDouble',
          'sqlTypeFloat',
          'sqlTypeGeometry',
          'sqlTypeGUID',
          'sqlTypeInteger',
          'sqlTypeLongNVarchar',
          'sqlTypeLongVarbinary',
          'sqlTypeLongVarchar',
          'sqlTypeNChar',
          'sqlTypeNVarchar',
          'sqlTypeOther',
          'sqlTypeReal',
          'sqlTypeSmallInt',
          'sqlTypeSqlXml',
          'sqlTypeTime',
          'sqlTypeTimestamp',
          'sqlTypeTimestamp2',
          'sqlTypeTinyInt',
          'sqlTypeVarbinary',
          'sqlTypeVarchar',
        ],
        c = ['upperLeft', 'lowerLeft'];
      function d(e) {
        return e >= l.length ? null : l[e];
      }
      function h(e) {
        return e >= u.length ? null : u[e];
      }
      function p(e) {
        return e >= c.length ? null : c[e];
      }
      function y(e, t) {
        return t >= e.geometryTypes.length ? null : e.geometryTypes[t];
      }
      function f(e, t, r) {
        const n = t.createPointGeometry(r);
        for (; e.next(); )
          switch (e.tag()) {
            case 3: {
              const r = e.getUInt32(),
                i = e.pos() + r;
              let s = 0;
              for (; e.pos() < i; ) t.addCoordinatePoint(n, e.getSInt64(), s++);
              break;
            }
            default:
              e.skip();
          }
        return n;
      }
      function g(e, t, r) {
        const n = t.createGeometry(r),
          i = 2 + (r.hasZ ? 1 : 0) + (r.hasM ? 1 : 0);
        for (; e.next(); )
          switch (e.tag()) {
            case 2: {
              const r = e.getUInt32(),
                i = e.pos() + r;
              let s = 0;
              for (; e.pos() < i; ) t.addLength(n, e.getUInt32(), s++);
              break;
            }
            case 3: {
              const r = e.getUInt32(),
                s = e.pos() + r;
              let o = 0;
              for (t.allocateCoordinates(n); e.pos() < s; )
                t.addCoordinate(n, e.getSInt64(), o), o++, o === i && (o = 0);
              break;
            }
            default:
              e.skip();
          }
        return n;
      }
      function m(e) {
        const t = new o.Z();
        let r = 'esriGeometryPoint';
        for (; e.next(); )
          switch (e.tag()) {
            case 2: {
              const r = e.getUInt32(),
                n = e.pos() + r;
              for (; e.pos() < n; ) t.lengths.push(e.getUInt32());
              break;
            }
            case 3: {
              const r = e.getUInt32(),
                n = e.pos() + r;
              for (; e.pos() < n; ) t.coords.push(e.getSInt64());
              break;
            }
            case 1:
              r = a.A[e.getEnum()];
              break;
            default:
              e.skip();
          }
        return { queryGeometry: t, queryGeometryType: r };
      }
      function _(e) {
        for (; e.next(); )
          switch (e.tag()) {
            case 1:
              return e.getString();
            case 2:
              return e.getFloat();
            case 3:
              return e.getDouble();
            case 4:
              return e.getSInt32();
            case 5:
              return e.getUInt32();
            case 6:
              return e.getInt64();
            case 7:
              return e.getUInt64();
            case 8:
              return e.getSInt64();
            case 9:
              return e.getBool();
            default:
              return e.skip(), null;
          }
        return null;
      }
      function b(e) {
        const t = { type: d(0) };
        for (; e.next(); )
          switch (e.tag()) {
            case 1:
              t.name = e.getString();
              break;
            case 2:
              t.type = d(e.getEnum());
              break;
            case 3:
              t.alias = e.getString();
              break;
            case 4:
              t.sqlType = h(e.getEnum());
              break;
            case 5:
            default:
              e.skip();
              break;
            case 6:
              t.defaultValue = e.getString();
          }
        return t;
      }
      function k(e) {
        const t = {};
        for (; e.next(); )
          switch (e.tag()) {
            case 1:
              t.name = e.getString();
              break;
            case 2:
              t.isSystemMaintained = e.getBool();
              break;
            default:
              e.skip();
          }
        return t;
      }
      function w(e, t, r, n) {
        const i = t.createFeature(r);
        let s = 0;
        for (; e.next(); )
          switch (e.tag()) {
            case 1: {
              const t = n[s++].name;
              i.attributes[t] = e.processMessage(_);
              break;
            }
            case 2:
              i.geometry = e.processMessageWithArgs(g, t, r);
              break;
            case 4:
              i.centroid = e.processMessageWithArgs(f, t, r);
              break;
            default:
              e.skip();
          }
        return i;
      }
      function T(e) {
        const t = [1, 1, 1, 1];
        for (; e.next(); )
          switch (e.tag()) {
            case 1:
              t[0] = e.getDouble();
              break;
            case 2:
              t[1] = e.getDouble();
              break;
            case 4:
              t[2] = e.getDouble();
              break;
            case 3:
              t[3] = e.getDouble();
              break;
            default:
              e.skip();
          }
        return t;
      }
      function v(e) {
        const t = [0, 0, 0, 0];
        for (; e.next(); )
          switch (e.tag()) {
            case 1:
              t[0] = e.getDouble();
              break;
            case 2:
              t[1] = e.getDouble();
              break;
            case 4:
              t[2] = e.getDouble();
              break;
            case 3:
              t[3] = e.getDouble();
              break;
            default:
              e.skip();
          }
        return t;
      }
      function x(e) {
        const t = { originPosition: p(0) };
        for (; e.next(); )
          switch (e.tag()) {
            case 1:
              t.originPosition = p(e.getEnum());
              break;
            case 2:
              t.scale = e.processMessage(T);
              break;
            case 3:
              t.translate = e.processMessage(v);
              break;
            default:
              e.skip();
          }
        return t;
      }
      function G(e) {
        const t = {};
        for (; e.next(); )
          switch (e.tag()) {
            case 1:
              t.shapeAreaFieldName = e.getString();
              break;
            case 2:
              t.shapeLengthFieldName = e.getString();
              break;
            case 3:
              t.units = e.getString();
              break;
            default:
              e.skip();
          }
        return t;
      }
      function S(e, t) {
        const r = t.createSpatialReference();
        for (; e.next(); )
          switch (e.tag()) {
            case 1:
              r.wkid = e.getUInt32();
              break;
            case 5:
              r.wkt = e.getString();
              break;
            case 2:
              r.latestWkid = e.getUInt32();
              break;
            case 3:
              r.vcsWkid = e.getUInt32();
              break;
            case 4:
              r.latestVcsWkid = e.getUInt32();
              break;
            default:
              e.skip();
          }
        return r;
      }
      function I(e, t) {
        const r = t.createFeatureResult();
        r.geometryType = y(t, 0);
        let n = !1;
        for (; e.next(); )
          switch (e.tag()) {
            case 1:
              r.objectIdFieldName = e.getString();
              break;
            case 3:
              r.globalIdFieldName = e.getString();
              break;
            case 4:
              r.geohashFieldName = e.getString();
              break;
            case 5:
              r.geometryProperties = e.processMessage(G);
              break;
            case 7:
              r.geometryType = y(t, e.getEnum());
              break;
            case 8:
              r.spatialReference = e.processMessageWithArgs(S, t);
              break;
            case 10:
              r.hasZ = e.getBool();
              break;
            case 11:
              r.hasM = e.getBool();
              break;
            case 12:
              r.transform = e.processMessage(x);
              break;
            case 9: {
              const t = e.getBool();
              r.exceededTransferLimit = t;
              break;
            }
            case 13:
              t.addField(r, e.processMessage(b));
              break;
            case 15:
              n || (t.prepareFeatures(r), (n = !0)),
                t.addFeature(r, e.processMessageWithArgs(w, t, r, r.fields));
              break;
            case 2:
              r.uniqueIdField = e.processMessage(k);
              break;
            default:
              e.skip();
          }
        return t.finishFeatureResult(r), r;
      }
      function C(e, t) {
        const r = {};
        let n = null;
        for (; e.next(); )
          switch (e.tag()) {
            case 4:
              n = e.processMessageWithArgs(m);
              break;
            case 1:
              r.featureResult = e.processMessageWithArgs(I, t);
              break;
            default:
              e.skip();
          }
        return (0, i.pC)(n) && r.featureResult && t.addQueryGeometry(r, n), r;
      }
      function F(e, t) {
        try {
          const r = 2,
            n = new s.Z(new Uint8Array(e), new DataView(e)),
            i = {};
          for (; n.next(); )
            n.tag() === r
              ? (i.queryResult = n.processMessageWithArgs(C, t))
              : n.skip();
          return i;
        } catch (e) {
          throw new n.Z(
            'query:parsing-pbf',
            'Error while parsing FeatureSet PBF payload',
            { error: e },
          );
        }
      }
    },
    78760: (e, t, r) => {
      r.d(t, { A: () => l, J: () => u });
      var n = r(67900),
        i = r(8744),
        s = r(70272),
        o = r(44876),
        a = r(5428);
      const l = [
        'esriGeometryPoint',
        'esriGeometryMultipoint',
        'esriGeometryPolyline',
        'esriGeometryPolygon',
      ];
      class u {
        constructor(e) {
          (this.options = e),
            (this.geometryTypes = l),
            (this._coordinatePtr = 0),
            (this._vertexDimension = 0);
        }
        createFeatureResult() {
          return new o.Z();
        }
        prepareFeatures(e) {
          (this._vertexDimension = 2),
            e.hasZ && this._vertexDimension++,
            e.hasM && this._vertexDimension++;
        }
        finishFeatureResult(e) {
          if (
            !e ||
            !e.features ||
            !e.hasZ ||
            !this.options.sourceSpatialReference ||
            !e.spatialReference ||
            (0, i.fS)(
              e.spatialReference,
              this.options.sourceSpatialReference,
            ) ||
            e.spatialReference.vcsWkid
          )
            return;
          const t =
            (0, n._R)(this.options.sourceSpatialReference) /
            (0, n._R)(e.spatialReference);
          if (1 !== t)
            for (const r of e.features) {
              if (!(0, s.S6)(r)) continue;
              const e = r.geometry.coords;
              for (let r = 2; r < e.length; r += 3) e[r] *= t;
            }
        }
        addFeature(e, t) {
          e.features.push(t);
        }
        createFeature() {
          return new s.u_();
        }
        createSpatialReference() {
          return { wkid: 0 };
        }
        createGeometry() {
          return new a.Z();
        }
        addField(e, t) {
          e.fields.push(t);
        }
        allocateCoordinates(e) {
          (e.coords.length =
            e.lengths.reduce((e, t) => e + t, 0) * this._vertexDimension),
            (this._coordinatePtr = 0);
        }
        addCoordinate(e, t) {
          e.coords[this._coordinatePtr++] = t;
        }
        addCoordinatePoint(e, t) {
          e.coords.push(t);
        }
        addLength(e, t) {
          e.lengths.push(t);
        }
        addQueryGeometry(e, t) {
          (e.queryGeometry = t.queryGeometry),
            (e.queryGeometryType = t.queryGeometryType);
        }
        createPointGeometry() {
          return new a.Z();
        }
      }
    },
    45178: (e, t, r) => {
      r.d(t, { C: () => i });
      var n = r(77863);
      function i(e, t) {
        const r = (0, n.K9)(e, t),
          i = r.queryResult.featureResult,
          s = r.queryResult.queryGeometry,
          o = r.queryResult.queryGeometryType;
        if (i && i.features && i.features.length && i.objectIdFieldName) {
          const e = i.objectIdFieldName;
          for (const t of i.features)
            t.attributes && (t.objectId = t.attributes[e]);
        }
        return i && ((i.queryGeometry = s), (i.queryGeometryType = o)), i;
      }
    },
    61916: (e, t, r) => {
      r.r(t), r.d(t, { default: () => v });
      var n = r(74085),
        i = r(70586),
        s = r(99001),
        o = r(82971),
        a = r(69285),
        l = (r(43090), r(80442), r(60437)),
        u = r(24470),
        c = (r(82397), r(86973), r(1231));
      class d {
        constructor(e, t, r) {
          (this.uid = e),
            (this.geometry = t),
            (this.attributes = r),
            (this.visible = !0),
            (this.objectId = null),
            (this.centroid = null);
        }
      }
      class h {
        constructor() {
          (this.exceededTransferLimit = !1),
            (this.features = []),
            (this.fields = []),
            (this.hasM = !1),
            (this.hasZ = !1),
            (this.geometryType = null),
            (this.objectIdFieldName = null),
            (this.globalIdFieldName = null),
            (this.geometryProperties = null),
            (this.geohashFieldName = null),
            (this.spatialReference = null),
            (this.transform = null);
        }
      }
      (0, l.Ue)(), (0, u.Ue)();
      var p = r(98732);
      function y(e, t) {
        return t;
      }
      function f(e, t, r, n) {
        switch (r) {
          case 0:
            return b(e, t + n, 0);
          case 1:
            return 'lowerLeft' === e.originPosition
              ? b(e, t + n, 1)
              : (function ({ translate: e, scale: t }, r, n) {
                  return e[n] - r * t[n];
                })(e, t + n, 1);
        }
      }
      function g(e, t, r, n) {
        return 2 === r ? b(e, t, 2) : f(e, t, r, n);
      }
      function m(e, t, r, n) {
        return 2 === r ? b(e, t, 3) : f(e, t, r, n);
      }
      function _(e, t, r, n) {
        return 3 === r ? b(e, t, 3) : g(e, t, r, n);
      }
      function b({ translate: e, scale: t }, r, n) {
        return e[n] + r * t[n];
      }
      class k {
        constructor(e) {
          (this.options = e),
            (this.geometryTypes = [
              'point',
              'multipoint',
              'polyline',
              'polygon',
            ]),
            (this.previousCoordinate = [0, 0]),
            (this.transform = null),
            (this.applyTransform = y),
            (this.lengths = []),
            (this.currentLengthIndex = 0),
            (this.toAddInCurrentPath = 0),
            (this.vertexDimension = 0),
            (this.coordinateBuffer = null),
            (this.coordinateBufferPtr = 0),
            (this._attributesConstructor = function () {});
        }
        createFeatureResult() {
          return new h();
        }
        finishFeatureResult(e) {
          if (
            (this.options.applyTransform && (e.transform = null),
            (this._attributesConstructor = function () {}),
            (this.coordinateBuffer = null),
            (this.lengths.length = 0),
            !e.hasZ)
          )
            return;
          const t = (0, a.k)(
            e.geometryType,
            this.options.sourceSpatialReference,
            e.spatialReference,
          );
          if (!(0, i.Wi)(t)) for (const r of e.features) t(r.geometry);
        }
        createSpatialReference() {
          return new o.Z();
        }
        addField(e, t) {
          e.fields.push(c.Z.fromJSON(t));
          const r = e.fields.map((e) => e.name);
          this._attributesConstructor = function () {
            for (const e of r) this[e] = null;
          };
        }
        addFeature(e, t) {
          const r = this.options.maxStringAttributeLength
            ? this.options.maxStringAttributeLength
            : 0;
          if (r > 0)
            for (const e in t.attributes) {
              const n = t.attributes[e];
              'string' == typeof n && n.length > r && (t.attributes[e] = '');
            }
          e.features.push(t);
        }
        addQueryGeometry(e, t) {
          const { queryGeometry: r, queryGeometryType: n } = t,
            i = (0, p.$g)(r.clone(), r, !1, !1, this.transform),
            s = (0, p.di)(i, n, !1, !1);
          let o = null;
          switch (n) {
            case 'esriGeometryPoint':
              o = 'point';
              break;
            case 'esriGeometryPolygon':
              o = 'polygon';
              break;
            case 'esriGeometryPolyline':
              o = 'polyline';
              break;
            case 'esriGeometryMultipoint':
              o = 'multipoint';
          }
          (s.type = o), (e.queryGeometryType = n), (e.queryGeometry = s);
        }
        prepareFeatures(e) {
          switch (
            ((this.transform = e.transform),
            this.options.applyTransform &&
              e.transform &&
              (this.applyTransform = this._deriveApplyTransform(e)),
            (this.vertexDimension = 2),
            e.hasZ && this.vertexDimension++,
            e.hasM && this.vertexDimension++,
            e.geometryType)
          ) {
            case 'point':
              (this.addCoordinate = (e, t, r) =>
                this.addCoordinatePoint(e, t, r)),
                (this.createGeometry = (e) => this.createPointGeometry(e));
              break;
            case 'polygon':
              (this.addCoordinate = (e, t, r) =>
                this._addCoordinatePolygon(e, t, r)),
                (this.createGeometry = (e) => this._createPolygonGeometry(e));
              break;
            case 'polyline':
              (this.addCoordinate = (e, t, r) =>
                this._addCoordinatePolyline(e, t, r)),
                (this.createGeometry = (e) => this._createPolylineGeometry(e));
              break;
            case 'multipoint':
              (this.addCoordinate = (e, t, r) =>
                this._addCoordinateMultipoint(e, t, r)),
                (this.createGeometry = (e) =>
                  this._createMultipointGeometry(e));
              break;
            case 'mesh':
            case 'extent':
              break;
            default:
              (0, n.Bg)(e.geometryType);
          }
        }
        createFeature() {
          return (
            (this.lengths.length = 0),
            (this.currentLengthIndex = 0),
            (this.previousCoordinate[0] = 0),
            (this.previousCoordinate[1] = 0),
            new d((0, s.D)(), null, new this._attributesConstructor())
          );
        }
        allocateCoordinates() {
          const e = this.lengths.reduce((e, t) => e + t, 0);
          (this.coordinateBuffer = new Float64Array(e * this.vertexDimension)),
            (this.coordinateBufferPtr = 0);
        }
        addLength(e, t, r) {
          0 === this.lengths.length && (this.toAddInCurrentPath = t),
            this.lengths.push(t);
        }
        createPointGeometry(e) {
          const t = {
            type: 'point',
            x: 0,
            y: 0,
            spatialReference: e.spatialReference,
            hasZ: !!e.hasZ,
            hasM: !!e.hasM,
          };
          return t.hasZ && (t.z = 0), t.hasM && (t.m = 0), t;
        }
        addCoordinatePoint(e, t, r) {
          switch (((t = this.applyTransform(this.transform, t, r, 0)), r)) {
            case 0:
              e.x = t;
              break;
            case 1:
              e.y = t;
              break;
            case 2:
              e.hasZ ? (e.z = t) : (e.m = t);
              break;
            case 3:
              e.m = t;
          }
        }
        _transformPathLikeValue(e, t) {
          let r = 0;
          return (
            t <= 1 &&
              ((r = this.previousCoordinate[t]),
              (this.previousCoordinate[t] += e)),
            this.applyTransform(this.transform, e, t, r)
          );
        }
        _addCoordinatePolyline(e, t, r) {
          this._dehydratedAddPointsCoordinate(e.paths, t, r);
        }
        _addCoordinatePolygon(e, t, r) {
          this._dehydratedAddPointsCoordinate(e.rings, t, r);
        }
        _addCoordinateMultipoint(e, t, r) {
          0 === r && e.points.push([]);
          const n = this._transformPathLikeValue(t, r);
          e.points[e.points.length - 1].push(n);
        }
        _createPolygonGeometry(e) {
          return {
            type: 'polygon',
            rings: [[]],
            spatialReference: e.spatialReference,
            hasZ: !!e.hasZ,
            hasM: !!e.hasM,
          };
        }
        _createPolylineGeometry(e) {
          return {
            type: 'polyline',
            paths: [[]],
            spatialReference: e.spatialReference,
            hasZ: !!e.hasZ,
            hasM: !!e.hasM,
          };
        }
        _createMultipointGeometry(e) {
          return {
            type: 'multipoint',
            points: [],
            spatialReference: e.spatialReference,
            hasZ: !!e.hasZ,
            hasM: !!e.hasM,
          };
        }
        _dehydratedAddPointsCoordinate(e, t, r) {
          0 === r &&
            0 == this.toAddInCurrentPath-- &&
            (e.push([]),
            (this.toAddInCurrentPath =
              this.lengths[++this.currentLengthIndex] - 1),
            (this.previousCoordinate[0] = 0),
            (this.previousCoordinate[1] = 0));
          const n = this._transformPathLikeValue(t, r),
            i = e[e.length - 1];
          0 === r &&
            i.push(
              new Float64Array(
                this.coordinateBuffer.buffer,
                this.coordinateBufferPtr * Float64Array.BYTES_PER_ELEMENT,
                this.vertexDimension,
              ),
            ),
            (this.coordinateBuffer[this.coordinateBufferPtr++] = n);
        }
        _deriveApplyTransform(e) {
          const { hasZ: t, hasM: r } = e;
          return t && r ? _ : t ? g : r ? m : f;
        }
      }
      var w = r(45178);
      class T {
        _parseFeatureQuery(e) {
          const t = (0, w.C)(e.buffer, new k(e.options)),
            r = {
              ...t,
              spatialReference: t.spatialReference.toJSON(),
              fields: t.fields ? t.fields.map((e) => e.toJSON()) : void 0,
            };
          return Promise.resolve(r);
        }
      }
      function v() {
        return new T();
      }
    },
  },
]);
