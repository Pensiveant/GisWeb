'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [9662],
  {
    92835: (e, t, r) => {
      r.d(t, { Z: () => g });
      var s,
        i = r(43697),
        n = r(96674),
        o = r(70586),
        a = r(35463),
        l = r(5600),
        u = (r(67676), r(80442), r(75215), r(71715)),
        p = r(52011),
        d = r(30556);
      let c = (s = class extends n.wq {
        constructor(e) {
          super(e), (this.end = null), (this.start = null);
        }
        static get allTime() {
          return h;
        }
        static get empty() {
          return y;
        }
        readEnd(e, t) {
          return null != t.end ? new Date(t.end) : null;
        }
        writeEnd(e, t) {
          t.end = e ? e.getTime() : null;
        }
        get isAllTime() {
          return this.equals(s.allTime);
        }
        get isEmpty() {
          return this.equals(s.empty);
        }
        readStart(e, t) {
          return null != t.start ? new Date(t.start) : null;
        }
        writeStart(e, t) {
          t.start = e ? e.getTime() : null;
        }
        clone() {
          return new s({ end: this.end, start: this.start });
        }
        equals(e) {
          if (!e) return !1;
          const t = (0, o.pC)(this.start) ? this.start.getTime() : this.start,
            r = (0, o.pC)(this.end) ? this.end.getTime() : this.end,
            s = (0, o.pC)(e.start) ? e.start.getTime() : e.start,
            i = (0, o.pC)(e.end) ? e.end.getTime() : e.end;
          return t === s && r === i;
        }
        expandTo(e) {
          if (this.isEmpty || this.isAllTime) return this.clone();
          const t = (0, o.yw)(this.start, (t) => (0, a.JE)(t, e)),
            r = (0, o.yw)(this.end, (t) => (0, a.Nm)((0, a.JE)(t, e), 1, e));
          return new s({ start: t, end: r });
        }
        intersection(e) {
          if (!e) return this.clone();
          if (this.isEmpty || e.isEmpty) return s.empty;
          if (this.isAllTime) return e.clone();
          if (e.isAllTime) return this.clone();
          const t = (0, o.R2)(this.start, -1 / 0, (e) => e.getTime()),
            r = (0, o.R2)(this.end, 1 / 0, (e) => e.getTime()),
            i = (0, o.R2)(e.start, -1 / 0, (e) => e.getTime()),
            n = (0, o.R2)(e.end, 1 / 0, (e) => e.getTime());
          let a, l;
          if (
            (i >= t && i <= r ? (a = i) : t >= i && t <= n && (a = t),
            r >= i && r <= n ? (l = r) : n >= t && n <= r && (l = n),
            !isNaN(a) && !isNaN(l))
          ) {
            const e = new s();
            return (
              (e.start = a === -1 / 0 ? null : new Date(a)),
              (e.end = l === 1 / 0 ? null : new Date(l)),
              e
            );
          }
          return s.empty;
        }
        offset(e, t) {
          if (this.isEmpty || this.isAllTime) return this.clone();
          const r = new s(),
            { start: i, end: n } = this;
          return (
            (0, o.pC)(i) && (r.start = (0, a.Nm)(i, e, t)),
            (0, o.pC)(n) && (r.end = (0, a.Nm)(n, e, t)),
            r
          );
        }
        union(e) {
          if (!e || e.isEmpty) return this.clone();
          if (this.isEmpty) return e.clone();
          if (this.isAllTime || e.isAllTime) return h.clone();
          const t =
              (0, o.pC)(this.start) && (0, o.pC)(e.start)
                ? new Date(Math.min(this.start.getTime(), e.start.getTime()))
                : null,
            r =
              (0, o.pC)(this.end) && (0, o.pC)(e.end)
                ? new Date(Math.max(this.end.getTime(), e.end.getTime()))
                : null;
          return new s({ start: t, end: r });
        }
      });
      (0, i._)(
        [(0, l.Cb)({ type: Date, json: { write: { allowNull: !0 } } })],
        c.prototype,
        'end',
        void 0,
      ),
        (0, i._)([(0, u.r)('end')], c.prototype, 'readEnd', null),
        (0, i._)([(0, d.c)('end')], c.prototype, 'writeEnd', null),
        (0, i._)(
          [(0, l.Cb)({ readOnly: !0, json: { read: !1 } })],
          c.prototype,
          'isAllTime',
          null,
        ),
        (0, i._)(
          [(0, l.Cb)({ readOnly: !0, json: { read: !1 } })],
          c.prototype,
          'isEmpty',
          null,
        ),
        (0, i._)(
          [(0, l.Cb)({ type: Date, json: { write: { allowNull: !0 } } })],
          c.prototype,
          'start',
          void 0,
        ),
        (0, i._)([(0, u.r)('start')], c.prototype, 'readStart', null),
        (0, i._)([(0, d.c)('start')], c.prototype, 'writeStart', null),
        (c = s = (0, i._)([(0, p.j)('esri.TimeExtent')], c));
      const h = new c(),
        y = new c({ start: void 0, end: void 0 }),
        g = c;
    },
    3920: (e, t, r) => {
      r.d(t, { r: () => p, p: () => u });
      var s = r(43697),
        i = r(15923),
        n = r(61247),
        o = r(5600),
        a = r(52011),
        l = r(89749);
      const u = (e) => {
        let t = class extends e {
          destroy() {
            var e, t;
            this.destroyed ||
              (null == (e = this._get('handles')) || e.destroy(),
              null == (t = this._get('updatingHandles')) || t.destroy());
          }
          get handles() {
            return this._get('handles') || new n.Z();
          }
          get updatingHandles() {
            return this._get('updatingHandles') || new l.t();
          }
        };
        return (
          (0, s._)([(0, o.Cb)({ readOnly: !0 })], t.prototype, 'handles', null),
          (0, s._)(
            [(0, o.Cb)({ readOnly: !0 })],
            t.prototype,
            'updatingHandles',
            null,
          ),
          (t = (0, s._)([(0, a.j)('esri.core.HandleOwner')], t)),
          t
        );
      };
      let p = class extends u(i.Z) {};
      p = (0, s._)([(0, a.j)('esri.core.HandleOwner')], p);
    },
    45091: (e, t, r) => {
      r.d(t, { Z: () => p });
      var s,
        i,
        n = r(80442),
        o = r(71143);
      ((i = s || (s = {}))[(i.varint = 0)] = 'varint'),
        (i[(i.fixed64 = 1)] = 'fixed64'),
        (i[(i.delimited = 2)] = 'delimited'),
        (i[(i.fixed32 = 5)] = 'fixed32'),
        (i[(i.unknown = 99)] = 'unknown');
      const a = 4294967296,
        l = new TextDecoder('utf-8'),
        u =
          (0, n.Z)('safari') || (0, n.Z)('ios') ? 6 : (0, n.Z)('ff') ? 12 : 32;
      class p {
        constructor(e, t, r = 0, i = e ? e.byteLength : 0) {
          (this._tag = 0), (this._dataType = s.unknown), this._init(e, t, r, i);
        }
        _init(e, t, r, s) {
          (this._data = e),
            (this._dataView = t),
            (this._pos = r),
            (this._end = s);
        }
        clone() {
          return new p(this._data, this._dataView, this._pos, this._end);
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
        processMessageWithArgs(e, t, r, s) {
          const i = this.getMessage(),
            n = e(i, t, r, s);
          return i.release(), n;
        }
        processMessage(e) {
          const t = this.getMessage(),
            r = e(t);
          return t.release(), r;
        }
        getMessage() {
          const e = this._getLength(),
            t = p.pool.acquire();
          return (
            t._init(this._data, this._dataView, this._pos, this._pos + e),
            this._skip(e),
            t
          );
        }
        release() {
          p.pool.release(this);
        }
        dataType() {
          return this._dataType;
        }
        skip() {
          switch (this._dataType) {
            case s.varint:
              this._decodeVarint();
              break;
            case s.fixed64:
              this._skip(8);
              break;
            case s.delimited:
              this._skip(this._getLength());
              break;
            case s.fixed32:
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
            s = 0;
          if (this._end - r >= 10)
            do {
              if (((t = e[r++]), (s |= 127 & t), 0 == (128 & t))) break;
              if (((t = e[r++]), (s |= (127 & t) << 7), 0 == (128 & t))) break;
              if (((t = e[r++]), (s |= (127 & t) << 14), 0 == (128 & t))) break;
              if (((t = e[r++]), (s |= (127 & t) << 21), 0 == (128 & t))) break;
              if (((t = e[r++]), (s += 268435456 * (127 & t)), 0 == (128 & t)))
                break;
              if (
                ((t = e[r++]), (s += 34359738368 * (127 & t)), 0 == (128 & t))
              )
                break;
              if (
                ((t = e[r++]), (s += 4398046511104 * (127 & t)), 0 == (128 & t))
              )
                break;
              if (
                ((t = e[r++]),
                (s += 562949953421312 * (127 & t)),
                0 == (128 & t))
              )
                break;
              if (
                ((t = e[r++]),
                (s += 72057594037927940 * (127 & t)),
                0 == (128 & t))
              )
                break;
              if (
                ((t = e[r++]),
                (s += 0x8000000000000000 * (127 & t)),
                0 == (128 & t))
              )
                break;
              throw new Error('Varint too long!');
            } while (0);
          else {
            let i = 1;
            for (; r !== this._end && ((t = e[r]), 0 != (128 & t)); )
              ++r, (s += (127 & t) * i), (i *= 128);
            if (r === this._end) throw new Error('Varint overrun!');
            ++r, (s += t * i);
          }
          return (this._pos = r), s;
        }
        _decodeSVarint() {
          const e = this._decodeVarint();
          return e % 2 ? -(e + 1) / 2 : e / 2;
        }
        _getLength() {
          if (this._dataType !== s.delimited)
            throw new Error('Not a delimited data type!');
          return this._decodeVarint();
        }
        _getLengthUnsafe() {
          return this.getUInt32();
        }
        _toString(e, t, r) {
          if ((r = Math.min(this._end, r)) - t > u) {
            const s = e.subarray(t, r);
            return l.decode(s);
          }
          let s = '',
            i = '';
          for (let n = t; n < r; ++n) {
            const t = e[n];
            128 & t
              ? (i += '%' + t.toString(16))
              : ((s += decodeURIComponent(i) + String.fromCharCode(t)),
                (i = ''));
          }
          return i.length && (s += decodeURIComponent(i)), s;
        }
        _toBytes(e, t, r) {
          return (
            (r = Math.min(this._end, r)), new Uint8Array(e.buffer, t, r - t)
          );
        }
      }
      p.pool = new o.Z(p, null, (e) => {
        (e._data = null), (e._dataView = null);
      });
    },
    35463: (e, t, r) => {
      r.d(t, { rJ: () => a, Nm: () => n, JE: () => o }), r(80442);
      const s = {
          milliseconds: 1,
          seconds: 1e3,
          minutes: 6e4,
          hours: 36e5,
          days: 864e5,
          weeks: 6048e5,
          months: 26784e5,
          years: 31536e6,
          decades: 31536e7,
          centuries: 31536e8,
        },
        i = {
          milliseconds: {
            getter: 'getMilliseconds',
            setter: 'setMilliseconds',
            multiplier: 1,
          },
          seconds: {
            getter: 'getSeconds',
            setter: 'setSeconds',
            multiplier: 1,
          },
          minutes: {
            getter: 'getMinutes',
            setter: 'setMinutes',
            multiplier: 1,
          },
          hours: { getter: 'getHours', setter: 'setHours', multiplier: 1 },
          days: { getter: 'getDate', setter: 'setDate', multiplier: 1 },
          weeks: { getter: 'getDate', setter: 'setDate', multiplier: 7 },
          months: { getter: 'getMonth', setter: 'setMonth', multiplier: 1 },
          years: {
            getter: 'getFullYear',
            setter: 'setFullYear',
            multiplier: 1,
          },
          decades: {
            getter: 'getFullYear',
            setter: 'setFullYear',
            multiplier: 10,
          },
          centuries: {
            getter: 'getFullYear',
            setter: 'setFullYear',
            multiplier: 100,
          },
        };
      function n(e, t, r) {
        const s = new Date(e.getTime());
        if (t && r) {
          const e = i[r],
            { getter: n, setter: o, multiplier: a } = e;
          if ('months' === r) {
            const e = (function (e, t) {
              const r = new Date(e, t + 1, 1);
              return r.setDate(0), r.getDate();
            })(s.getFullYear(), s.getMonth() + t);
            s.getDate() > e && s.setDate(e);
          }
          s[o](s[n]() + t * a);
        }
        return s;
      }
      function o(e, t) {
        switch (t) {
          case 'milliseconds':
            return new Date(e.getTime());
          case 'seconds':
            return new Date(
              e.getFullYear(),
              e.getMonth(),
              e.getDate(),
              e.getHours(),
              e.getMinutes(),
              e.getSeconds(),
            );
          case 'minutes':
            return new Date(
              e.getFullYear(),
              e.getMonth(),
              e.getDate(),
              e.getHours(),
              e.getMinutes(),
            );
          case 'hours':
            return new Date(
              e.getFullYear(),
              e.getMonth(),
              e.getDate(),
              e.getHours(),
            );
          case 'days':
            return new Date(e.getFullYear(), e.getMonth(), e.getDate());
          case 'weeks':
            return new Date(
              e.getFullYear(),
              e.getMonth(),
              e.getDate() - e.getDay(),
            );
          case 'months':
            return new Date(e.getFullYear(), e.getMonth(), 1);
          case 'years':
            return new Date(e.getFullYear(), 0, 1);
          case 'decades':
            return new Date(e.getFullYear() - (e.getFullYear() % 10), 0, 1);
          case 'centuries':
            return new Date(e.getFullYear() - (e.getFullYear() % 100), 0, 1);
          default:
            return new Date();
        }
      }
      function a(e, t, r) {
        return 0 === e ? 0 : (e * s[t]) / s[r];
      }
    },
    10158: (e, t, r) => {
      r.d(t, { n: () => q });
      var s,
        i = r(43697),
        n = r(35454),
        o = r(96674),
        a = r(5600),
        l = (r(67676), r(80442), r(90578)),
        u = r(36030),
        p = r(71715),
        d = r(52011),
        c = r(75215),
        h = r(63213),
        y = r(1231),
        g = r(42843),
        m = (r(66577), r(82971)),
        f = r(86973);
      let _ = (s = class extends o.wq {
        constructor(e) {
          super(e), (this.type = 'query-table');
        }
        clone() {
          var e;
          const {
              workspaceId: t,
              query: r,
              oidFields: i,
              spatialReference: n,
              geometryType: o,
            } = this,
            a = {
              workspaceId: t,
              query: r,
              oidFields: i,
              spatialReference:
                null != (e = null == n ? void 0 : n.clone()) ? e : void 0,
              geometryType: o,
            };
          return new s(a);
        }
      });
      var b;
      (0, i._)(
        [(0, u.J)({ queryTable: 'query-table' })],
        _.prototype,
        'type',
        void 0,
      ),
        (0, i._)(
          [(0, a.Cb)({ type: String, json: { write: !0 } })],
          _.prototype,
          'workspaceId',
          void 0,
        ),
        (0, i._)(
          [(0, a.Cb)({ type: String, json: { write: !0 } })],
          _.prototype,
          'query',
          void 0,
        ),
        (0, i._)(
          [(0, a.Cb)({ type: String, json: { write: !0 } })],
          _.prototype,
          'oidFields',
          void 0,
        ),
        (0, i._)(
          [(0, a.Cb)({ type: m.Z, json: { write: !0 } })],
          _.prototype,
          'spatialReference',
          void 0,
        ),
        (0, i._)([(0, u.J)(f.Mk)], _.prototype, 'geometryType', void 0),
        (_ = s =
          (0, i._)(
            [(0, d.j)('esri.layers.support.source.QueryTableDataSource')],
            _,
          ));
      let w = (b = class extends o.wq {
        constructor(e) {
          super(e), (this.type = 'raster');
        }
        clone() {
          const { workspaceId: e, dataSourceName: t } = this;
          return new b({ workspaceId: e, dataSourceName: t });
        }
      });
      var S;
      (0, i._)([(0, u.J)({ raster: 'raster' })], w.prototype, 'type', void 0),
        (0, i._)(
          [(0, a.Cb)({ type: String, json: { write: !0 } })],
          w.prototype,
          'dataSourceName',
          void 0,
        ),
        (0, i._)(
          [(0, a.Cb)({ type: String, json: { write: !0 } })],
          w.prototype,
          'workspaceId',
          void 0,
        ),
        (w = b =
          (0, i._)(
            [(0, d.j)('esri.layers.support.source.RasterDataSource')],
            w,
          ));
      let v = (S = class extends o.wq {
        constructor(e) {
          super(e), (this.type = 'table');
        }
        clone() {
          const { workspaceId: e, gdbVersion: t, dataSourceName: r } = this;
          return new S({ workspaceId: e, gdbVersion: t, dataSourceName: r });
        }
      });
      var C, T;
      (0, i._)([(0, u.J)({ table: 'table' })], v.prototype, 'type', void 0),
        (0, i._)(
          [(0, a.Cb)({ type: String, json: { write: !0 } })],
          v.prototype,
          'workspaceId',
          void 0,
        ),
        (0, i._)(
          [(0, a.Cb)({ type: String, json: { write: !0 } })],
          v.prototype,
          'gdbVersion',
          void 0,
        ),
        (0, i._)(
          [(0, a.Cb)({ type: String, json: { write: !0 } })],
          v.prototype,
          'dataSourceName',
          void 0,
        ),
        (v = S =
          (0, i._)(
            [(0, d.j)('esri.layers.support.source.TableDataSource')],
            v,
          ));
      const x = (0, n.w)()({
        esriLeftInnerJoin: 'left-inner-join',
        esriLeftOuterJoin: 'left-outer-join',
      });
      let k = (C = class extends o.wq {
        constructor(e) {
          super(e), (this.type = 'join-table');
        }
        readLeftTableSource(e, t, r) {
          return j()(e, t, r);
        }
        castLeftTableSource(e) {
          return (0, c.N7)(I(), e);
        }
        readRightTableSource(e, t, r) {
          return j()(e, t, r);
        }
        castRightTableSource(e) {
          return (0, c.N7)(I(), e);
        }
        clone() {
          var e, t;
          const {
              leftTableKey: r,
              rightTableKey: s,
              leftTableSource: i,
              rightTableSource: n,
              joinType: o,
            } = this,
            a = {
              leftTableKey: r,
              rightTableKey: s,
              leftTableSource:
                null != (e = null == i ? void 0 : i.clone()) ? e : void 0,
              rightTableSource:
                null != (t = null == n ? void 0 : n.clone()) ? t : void 0,
              joinType: o,
            };
          return new C(a);
        }
      });
      (0, i._)(
        [(0, u.J)({ joinTable: 'join-table' })],
        k.prototype,
        'type',
        void 0,
      ),
        (0, i._)(
          [(0, a.Cb)({ type: String, json: { write: !0 } })],
          k.prototype,
          'leftTableKey',
          void 0,
        ),
        (0, i._)(
          [(0, a.Cb)({ type: String, json: { write: !0 } })],
          k.prototype,
          'rightTableKey',
          void 0,
        ),
        (0, i._)(
          [(0, a.Cb)({ json: { write: !0 } })],
          k.prototype,
          'leftTableSource',
          void 0,
        ),
        (0, i._)(
          [(0, p.r)('leftTableSource')],
          k.prototype,
          'readLeftTableSource',
          null,
        ),
        (0, i._)(
          [(0, l.p)('leftTableSource')],
          k.prototype,
          'castLeftTableSource',
          null,
        ),
        (0, i._)(
          [(0, a.Cb)({ json: { write: !0 } })],
          k.prototype,
          'rightTableSource',
          void 0,
        ),
        (0, i._)(
          [(0, p.r)('rightTableSource')],
          k.prototype,
          'readRightTableSource',
          null,
        ),
        (0, i._)(
          [(0, l.p)('rightTableSource')],
          k.prototype,
          'castRightTableSource',
          null,
        ),
        (0, i._)([(0, u.J)(x)], k.prototype, 'joinType', void 0),
        (k = C =
          (0, i._)(
            [(0, d.j)('esri.layers.support.source.JoinTableDataSource')],
            k,
          ));
      let F = null;
      function j() {
        return F || (F = (0, h.d)({ types: I() })), F;
      }
      let R = null;
      function I() {
        return (
          R ||
            (R = {
              key: 'type',
              base: null,
              typeMap: { 'data-layer': q, 'map-layer': g.R },
            }),
          R
        );
      }
      const D = {
        key: 'type',
        base: null,
        typeMap: { 'join-table': k, 'query-table': _, raster: w, table: v },
      };
      let q = (T = class extends o.wq {
        constructor(e) {
          super(e), (this.type = 'data-layer');
        }
        clone() {
          const { fields: e, dataSource: t } = this;
          return new T({ fields: e, dataSource: t });
        }
      });
      (0, i._)(
        [(0, u.J)({ dataLayer: 'data-layer' })],
        q.prototype,
        'type',
        void 0,
      ),
        (0, i._)(
          [(0, a.Cb)({ type: [y.Z], json: { write: !0 } })],
          q.prototype,
          'fields',
          void 0,
        ),
        (0, i._)(
          [(0, a.Cb)({ types: D, json: { write: !0 } })],
          q.prototype,
          'dataSource',
          void 0,
        ),
        (q = T =
          (0, i._)(
            [(0, d.j)('esri.layers.support.source.DataLayerSource')],
            q,
          )),
        (q.from = (0, c.se)(q));
    },
    42843: (e, t, r) => {
      r.d(t, { R: () => p });
      var s,
        i = r(43697),
        n = r(96674),
        o = r(5600),
        a = (r(67676), r(80442), r(75215)),
        l = r(36030),
        u = r(52011);
      let p = (s = class extends n.wq {
        constructor(e) {
          super(e), (this.type = 'map-layer');
        }
        clone() {
          const { mapLayerId: e, gdbVersion: t } = this;
          return new s({ mapLayerId: e, gdbVersion: t });
        }
      });
      (0, i._)(
        [(0, l.J)({ mapLayer: 'map-layer' })],
        p.prototype,
        'type',
        void 0,
      ),
        (0, i._)(
          [(0, o.Cb)({ type: a.z8, json: { write: !0 } })],
          p.prototype,
          'mapLayerId',
          void 0,
        ),
        (0, i._)(
          [(0, o.Cb)({ type: String, json: { write: !0 } })],
          p.prototype,
          'gdbVersion',
          void 0,
        ),
        (p = s =
          (0, i._)([(0, u.j)('esri.layers.support.source.MapLayerSource')], p));
    },
    76497: (e, t, r) => {
      function s(e) {
        const t = {};
        for (const r in e) {
          if ('declaredClass' === r) continue;
          const i = e[r];
          if (null != i && 'function' != typeof i)
            if (Array.isArray(i)) {
              t[r] = [];
              for (let e = 0; e < i.length; e++) t[r][e] = s(i[e]);
            } else
              'object' == typeof i
                ? i.toJSON && (t[r] = JSON.stringify(i))
                : (t[r] = i);
        }
        return t;
      }
      r.d(t, { A: () => s });
    },
    77863: (e, t, r) => {
      r.d(t, { K9: () => R, O7: () => d, G$: () => T });
      var s = r(20102),
        i = r(70586),
        n = r(45091),
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
        p = ['upperLeft', 'lowerLeft'];
      function d(e) {
        return e >= l.length ? null : l[e];
      }
      function c(e) {
        return e >= u.length ? null : u[e];
      }
      function h(e) {
        return e >= p.length ? null : p[e];
      }
      function y(e, t) {
        return t >= e.geometryTypes.length ? null : e.geometryTypes[t];
      }
      function g(e, t, r) {
        const s = t.createPointGeometry(r);
        for (; e.next(); )
          switch (e.tag()) {
            case 3: {
              const r = e.getUInt32(),
                i = e.pos() + r;
              let n = 0;
              for (; e.pos() < i; ) t.addCoordinatePoint(s, e.getSInt64(), n++);
              break;
            }
            default:
              e.skip();
          }
        return s;
      }
      function m(e, t, r) {
        const s = t.createGeometry(r),
          i = 2 + (r.hasZ ? 1 : 0) + (r.hasM ? 1 : 0);
        for (; e.next(); )
          switch (e.tag()) {
            case 2: {
              const r = e.getUInt32(),
                i = e.pos() + r;
              let n = 0;
              for (; e.pos() < i; ) t.addLength(s, e.getUInt32(), n++);
              break;
            }
            case 3: {
              const r = e.getUInt32(),
                n = e.pos() + r;
              let o = 0;
              for (t.allocateCoordinates(s); e.pos() < n; )
                t.addCoordinate(s, e.getSInt64(), o), o++, o === i && (o = 0);
              break;
            }
            default:
              e.skip();
          }
        return s;
      }
      function f(e) {
        const t = new o.Z();
        let r = 'esriGeometryPoint';
        for (; e.next(); )
          switch (e.tag()) {
            case 2: {
              const r = e.getUInt32(),
                s = e.pos() + r;
              for (; e.pos() < s; ) t.lengths.push(e.getUInt32());
              break;
            }
            case 3: {
              const r = e.getUInt32(),
                s = e.pos() + r;
              for (; e.pos() < s; ) t.coords.push(e.getSInt64());
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
              t.sqlType = c(e.getEnum());
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
      function w(e) {
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
      function S(e, t, r, s) {
        const i = t.createFeature(r);
        let n = 0;
        for (; e.next(); )
          switch (e.tag()) {
            case 1: {
              const t = s[n++].name;
              i.attributes[t] = e.processMessage(_);
              break;
            }
            case 2:
              i.geometry = e.processMessageWithArgs(m, t, r);
              break;
            case 4:
              i.centroid = e.processMessageWithArgs(g, t, r);
              break;
            default:
              e.skip();
          }
        return i;
      }
      function v(e) {
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
      function C(e) {
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
      function T(e) {
        const t = { originPosition: h(0) };
        for (; e.next(); )
          switch (e.tag()) {
            case 1:
              t.originPosition = h(e.getEnum());
              break;
            case 2:
              t.scale = e.processMessage(v);
              break;
            case 3:
              t.translate = e.processMessage(C);
              break;
            default:
              e.skip();
          }
        return t;
      }
      function x(e) {
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
      function k(e, t) {
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
      function F(e, t) {
        const r = t.createFeatureResult();
        r.geometryType = y(t, 0);
        let s = !1;
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
              r.geometryProperties = e.processMessage(x);
              break;
            case 7:
              r.geometryType = y(t, e.getEnum());
              break;
            case 8:
              r.spatialReference = e.processMessageWithArgs(k, t);
              break;
            case 10:
              r.hasZ = e.getBool();
              break;
            case 11:
              r.hasM = e.getBool();
              break;
            case 12:
              r.transform = e.processMessage(T);
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
              s || (t.prepareFeatures(r), (s = !0)),
                t.addFeature(r, e.processMessageWithArgs(S, t, r, r.fields));
              break;
            case 2:
              r.uniqueIdField = e.processMessage(w);
              break;
            default:
              e.skip();
          }
        return t.finishFeatureResult(r), r;
      }
      function j(e, t) {
        const r = {};
        let s = null;
        for (; e.next(); )
          switch (e.tag()) {
            case 4:
              s = e.processMessageWithArgs(f);
              break;
            case 1:
              r.featureResult = e.processMessageWithArgs(F, t);
              break;
            default:
              e.skip();
          }
        return (0, i.pC)(s) && r.featureResult && t.addQueryGeometry(r, s), r;
      }
      function R(e, t) {
        try {
          const r = 2,
            s = new n.Z(new Uint8Array(e), new DataView(e)),
            i = {};
          for (; s.next(); )
            s.tag() === r
              ? (i.queryResult = s.processMessageWithArgs(j, t))
              : s.skip();
          return i;
        } catch (e) {
          throw new s.Z(
            'query:parsing-pbf',
            'Error while parsing FeatureSet PBF payload',
            { error: e },
          );
        }
      }
    },
    78760: (e, t, r) => {
      r.d(t, { A: () => l, J: () => u });
      var s = r(67900),
        i = r(8744),
        n = r(70272),
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
            (0, s._R)(this.options.sourceSpatialReference) /
            (0, s._R)(e.spatialReference);
          if (1 !== t)
            for (const r of e.features) {
              if (!(0, n.S6)(r)) continue;
              const e = r.geometry.coords;
              for (let r = 2; r < e.length; r += 3) e[r] *= t;
            }
        }
        addFeature(e, t) {
          e.features.push(t);
        }
        createFeature() {
          return new n.u_();
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
      var s = r(77863);
      function i(e, t) {
        const r = (0, s.K9)(e, t),
          i = r.queryResult.featureResult,
          n = r.queryResult.queryGeometry,
          o = r.queryResult.queryGeometryType;
        if (i && i.features && i.features.length && i.objectIdFieldName) {
          const e = i.objectIdFieldName;
          for (const t of i.features)
            t.attributes && (t.objectId = t.attributes[e]);
        }
        return i && ((i.queryGeometry = n), (i.queryGeometryType = o)), i;
      }
    },
    34599: (e, t, r) => {
      r.r(t),
        r.d(t, {
          encodeGeometry: () => c,
          executeQuery: () => y,
          executeQueryForCount: () => _,
          executeQueryForExtent: () => b,
          executeQueryForIds: () => f,
          executeQueryPBF: () => g,
          executeQueryPBFBuffer: () => m,
          queryToQueryStringParameters: () => h,
          runQuery: () => w,
        });
      var s = r(3172),
        i = r(70586),
        n = r(17452),
        o = r(33955),
        a = r(82526),
        l = r(76497),
        u = r(45178),
        p = r(28694);
      const d = 'Layer does not support extent calculation.';
      function c(e, t) {
        if (t && 'extent' === e.type)
          return `${e.xmin},${e.ymin},${e.xmax},${e.ymax}`;
        if (t && 'point' === e.type) return `${e.x},${e.y}`;
        const r = e.toJSON();
        return delete r.spatialReference, JSON.stringify(r);
      }
      function h(e, t) {
        const r = e.geometry,
          s = e.toJSON();
        delete s.compactGeometryEnabled,
          delete s.defaultSpatialReferenceEnabled;
        const n = s,
          a = e.outSpatialReference;
        let l, u;
        if (
          ((0, i.pC)(r) &&
            ((l = r.spatialReference),
            (u = r.spatialReference.wkid || JSON.stringify(r.spatialReference)),
            (n.geometryType = (0, o.Ji)(r)),
            (n.geometry = c(r, e.compactGeometryEnabled)),
            (n.inSR = u)),
          s.groupByFieldsForStatistics &&
            (n.groupByFieldsForStatistics =
              s.groupByFieldsForStatistics.join(',')),
          s.objectIds && (n.objectIds = s.objectIds.join(',')),
          s.orderByFields && (n.orderByFields = s.orderByFields.join(',')),
          !s.outFields ||
          (!s.returnDistinctValues &&
            ((null != t && t.returnCountOnly) ||
              (null != t && t.returnExtentOnly) ||
              (null != t && t.returnIdsOnly)))
            ? delete n.outFields
            : -1 !== s.outFields.indexOf('*')
            ? (n.outFields = '*')
            : (n.outFields = s.outFields.join(',')),
          s.outSR
            ? (n.outSR = s.outSR.wkid || JSON.stringify(s.outSR))
            : r && (s.returnGeometry || s.returnCentroid) && (n.outSR = n.inSR),
          s.returnGeometry && delete s.returnGeometry,
          s.outStatistics &&
            (n.outStatistics = JSON.stringify(s.outStatistics)),
          s.pixelSize && (n.pixelSize = JSON.stringify(s.pixelSize)),
          s.quantizationParameters &&
            (e.defaultSpatialReferenceEnabled &&
              (0, i.pC)(l) &&
              (0, i.pC)(e.quantizationParameters) &&
              (0, i.pC)(e.quantizationParameters.extent) &&
              l.equals(e.quantizationParameters.extent.spatialReference) &&
              delete s.quantizationParameters.extent.spatialReference,
            (n.quantizationParameters = JSON.stringify(
              s.quantizationParameters,
            ))),
          s.parameterValues &&
            (n.parameterValues = JSON.stringify(s.parameterValues)),
          s.rangeValues && (n.rangeValues = JSON.stringify(s.rangeValues)),
          s.dynamicDataSource &&
            ((n.layer = JSON.stringify({ source: s.dynamicDataSource })),
            delete s.dynamicDataSource),
          s.timeExtent)
        ) {
          const e = s.timeExtent,
            { start: t, end: r } = e;
          (null == t && null == r) ||
            (n.time =
              t === r
                ? t
                : `${null == t ? 'null' : t},${null == r ? 'null' : r}`),
            delete s.timeExtent;
        }
        return (
          e.defaultSpatialReferenceEnabled &&
            (0, i.pC)(l) &&
            (0, i.pC)(a) &&
            l.equals(a) &&
            ((n.defaultSR = n.inSR), delete n.inSR, delete n.outSR),
          n
        );
      }
      async function y(e, t, r, s) {
        const n =
          (0, i.pC)(t.timeExtent) && t.timeExtent.isEmpty
            ? { data: { features: [] } }
            : await w(e, t, 'json', s);
        return (0, p.p)(t, r, n.data), n;
      }
      async function g(e, t, r, s) {
        if ((0, i.pC)(t.timeExtent) && t.timeExtent.isEmpty)
          return Promise.resolve({ data: r.createFeatureResult() });
        const n = await m(e, t, s),
          o = n;
        return (o.data = (0, u.C)(n.data, r)), o;
      }
      function m(e, t, r) {
        return w(e, t, 'pbf', r);
      }
      function f(e, t, r) {
        return (0, i.pC)(t.timeExtent) && t.timeExtent.isEmpty
          ? Promise.resolve({ data: { objectIds: [] } })
          : w(e, t, 'json', r, { returnIdsOnly: !0 });
      }
      function _(e, t, r) {
        return (0, i.pC)(t.timeExtent) && t.timeExtent.isEmpty
          ? Promise.resolve({ data: { count: 0 } })
          : w(e, t, 'json', r, { returnIdsOnly: !0, returnCountOnly: !0 });
      }
      function b(e, t, r) {
        return (0, i.pC)(t.timeExtent) && t.timeExtent.isEmpty
          ? Promise.resolve({ data: { count: 0, extent: null } })
          : w(e, t, 'json', r, {
              returnExtentOnly: !0,
              returnCountOnly: !0,
            }).then((e) => {
              const t = e.data;
              if (t.hasOwnProperty('extent')) return e;
              if (t.features) throw new Error(d);
              if (t.hasOwnProperty('count')) throw new Error(d);
              return e;
            });
      }
      function w(e, t, r, o = {}, u = {}) {
        const p = 'string' == typeof e ? (0, n.mN)(e) : e,
          d = t.geometry ? [t.geometry] : [];
        return (
          (o.responseType = 'pbf' === r ? 'array-buffer' : 'json'),
          (0, a.aX)(d, null, o).then((e) => {
            const a = e && e[0];
            (0, i.pC)(a) && ((t = t.clone()).geometry = a);
            const d = (0, l.A)({ ...p.query, f: r, ...u, ...h(t, u) });
            return (0, s.default)((0, n.v_)(p.path, 'query'), {
              ...o,
              query: { ...d, ...o.query },
            });
          })
        );
      }
    },
    28694: (e, t, r) => {
      r.d(t, { p: () => n });
      var s = r(70586),
        i = r(69285);
      function n(e, t, r) {
        if (!r || !r.features || !r.hasZ) return;
        const n = (0, i.k)(r.geometryType, t, e.outSpatialReference);
        if (!(0, s.Wi)(n)) for (const e of r.features) n(e.geometry);
      }
    },
    6388: (e, t, r) => {
      r.d(t, { Z: () => h });
      var s,
        i = r(43697),
        n = (r(66577), r(35454)),
        o = r(96674),
        a = r(22974),
        l = r(5600),
        u = (r(75215), r(52011)),
        p = r(6570);
      const d = new n.X({ upperLeft: 'upper-left', lowerLeft: 'lower-left' });
      let c = (s = class extends o.wq {
        constructor(e) {
          super(e),
            (this.extent = null),
            (this.mode = 'view'),
            (this.originPosition = 'upper-left'),
            (this.tolerance = 1);
        }
        clone() {
          return new s(
            (0, a.d9)({
              extent: this.extent,
              mode: this.mode,
              originPosition: this.originPosition,
              tolerance: this.tolerance,
            }),
          );
        }
      });
      (0, i._)(
        [
          (0, l.Cb)({
            type: p.Z,
            json: {
              write: {
                overridePolicy() {
                  return { enabled: 'view' === this.mode };
                },
              },
            },
          }),
        ],
        c.prototype,
        'extent',
        void 0,
      ),
        (0, i._)(
          [(0, l.Cb)({ type: ['view', 'edit'], json: { write: !0 } })],
          c.prototype,
          'mode',
          void 0,
        ),
        (0, i._)(
          [(0, l.Cb)({ type: String, json: { read: d.read, write: d.write } })],
          c.prototype,
          'originPosition',
          void 0,
        ),
        (0, i._)(
          [
            (0, l.Cb)({
              type: Number,
              json: {
                write: {
                  overridePolicy() {
                    return { enabled: 'view' === this.mode };
                  },
                },
              },
            }),
          ],
          c.prototype,
          'tolerance',
          void 0,
        ),
        (c = s =
          (0, i._)([(0, u.j)('esri.rest.support.QuantizationParameters')], c));
      const h = c;
    },
    57444: (e, t, r) => {
      r.d(t, { Z: () => k });
      var s,
        i = r(43697),
        n = r(66577),
        o = r(92835),
        a = r(35454),
        l = r(96674),
        u = r(22974),
        p = r(70586),
        d = r(5600),
        c = r(90578),
        h = r(36030),
        y = r(52011),
        g = r(30556),
        m = r(75215),
        f = r(33955),
        _ = r(10158),
        b = r(6388),
        w = r(58539),
        S = r(82971),
        v = r(13473);
      const C = new a.X({
          esriSpatialRelIntersects: 'intersects',
          esriSpatialRelContains: 'contains',
          esriSpatialRelCrosses: 'crosses',
          esriSpatialRelDisjoint: 'disjoint',
          esriSpatialRelEnvelopeIntersects: 'envelope-intersects',
          esriSpatialRelIndexIntersects: 'index-intersects',
          esriSpatialRelOverlaps: 'overlaps',
          esriSpatialRelTouches: 'touches',
          esriSpatialRelWithin: 'within',
          esriSpatialRelRelation: 'relation',
        }),
        T = new a.X({
          esriSRUnit_Meter: 'meters',
          esriSRUnit_Kilometer: 'kilometers',
          esriSRUnit_Foot: 'feet',
          esriSRUnit_StatuteMile: 'miles',
          esriSRUnit_NauticalMile: 'nautical-miles',
          esriSRUnit_USNauticalMile: 'us-nautical-miles',
        });
      let x = (s = class extends l.wq {
        constructor(e) {
          super(e),
            (this.aggregateIds = null),
            (this.cacheHint = void 0),
            (this.compactGeometryEnabled = !1),
            (this.datumTransformation = null),
            (this.defaultSpatialReferenceEnabled = !1),
            (this.distance = void 0),
            (this.dynamicDataSource = void 0),
            (this.formatOf3DObjects = null),
            (this.gdbVersion = null),
            (this.geometry = null),
            (this.geometryPrecision = void 0),
            (this.groupByFieldsForStatistics = null),
            (this.having = null),
            (this.historicMoment = null),
            (this.maxAllowableOffset = void 0),
            (this.maxRecordCountFactor = 1),
            (this.multipatchOption = null),
            (this.num = void 0),
            (this.objectIds = null),
            (this.orderByFields = null),
            (this.outFields = null),
            (this.outSpatialReference = null),
            (this.outStatistics = null),
            (this.parameterValues = null),
            (this.pixelSize = null),
            (this.quantizationParameters = null),
            (this.rangeValues = null),
            (this.relationParameter = null),
            (this.resultType = null),
            (this.returnCentroid = !1),
            (this.returnDistinctValues = !1),
            (this.returnExceededLimitFeatures = !0),
            (this.returnGeometry = !1),
            (this.returnQueryGeometry = !1),
            (this.returnM = void 0),
            (this.returnZ = void 0),
            (this.sourceSpatialReference = null),
            (this.spatialRelationship = 'intersects'),
            (this.start = void 0),
            (this.sqlFormat = null),
            (this.text = null),
            (this.timeExtent = null),
            (this.timeReferenceUnknownClient = !1),
            (this.units = null),
            (this.where = null);
        }
        static from(e) {
          return (0, m.TJ)(s, e);
        }
        castDatumTransformation(e) {
          return 'number' == typeof e || 'object' == typeof e ? e : null;
        }
        writeHistoricMoment(e, t) {
          t.historicMoment = e && e.getTime();
        }
        writeParameterValues(e, t) {
          if (e) {
            const r = {};
            for (const t in e) {
              const s = e[t];
              Array.isArray(s)
                ? (r[t] = s.map((e) => (e instanceof Date ? e.getTime() : e)))
                : s instanceof Date
                ? (r[t] = s.getTime())
                : (r[t] = s);
            }
            t.parameterValues = r;
          }
        }
        writeStart(e, t) {
          (t.resultOffset = this.start),
            (t.resultRecordCount = this.num || 10),
            (t.where = '1=1');
        }
        writeWhere(e, t) {
          t.where = e || '1=1';
        }
        clone() {
          return new s(
            (0, u.d9)({
              aggregateIds: this.aggregateIds,
              cacheHint: this.cacheHint,
              compactGeometryEnabled: this.compactGeometryEnabled,
              datumTransformation: this.datumTransformation,
              defaultSpatialReferenceEnabled:
                this.defaultSpatialReferenceEnabled,
              distance: this.distance,
              gdbVersion: this.gdbVersion,
              geometry: this.geometry,
              geometryPrecision: this.geometryPrecision,
              groupByFieldsForStatistics: this.groupByFieldsForStatistics,
              having: this.having,
              historicMoment: (0, p.pC)(this.historicMoment)
                ? new Date(this.historicMoment.getTime())
                : null,
              maxAllowableOffset: this.maxAllowableOffset,
              maxRecordCountFactor: this.maxRecordCountFactor,
              multipatchOption: this.multipatchOption,
              num: this.num,
              objectIds: this.objectIds,
              orderByFields: this.orderByFields,
              outFields: this.outFields,
              outSpatialReference: this.outSpatialReference,
              outStatistics: this.outStatistics,
              parameterValues: this.parameterValues,
              pixelSize: this.pixelSize,
              quantizationParameters: this.quantizationParameters,
              rangeValues: this.rangeValues,
              relationParameter: this.relationParameter,
              resultType: this.resultType,
              returnDistinctValues: this.returnDistinctValues,
              returnGeometry: this.returnGeometry,
              returnCentroid: this.returnCentroid,
              returnExceededLimitFeatures: this.returnExceededLimitFeatures,
              returnQueryGeometry: this.returnQueryGeometry,
              returnM: this.returnM,
              returnZ: this.returnZ,
              dynamicDataSource: this.dynamicDataSource,
              sourceSpatialReference: this.sourceSpatialReference,
              spatialRelationship: this.spatialRelationship,
              start: this.start,
              sqlFormat: this.sqlFormat,
              text: this.text,
              timeExtent: this.timeExtent,
              timeReferenceUnknownClient: this.timeReferenceUnknownClient,
              units: this.units,
              where: this.where,
            }),
          );
        }
      });
      (x.MAX_MAX_RECORD_COUNT_FACTOR = 5),
        (0, i._)(
          [(0, d.Cb)({ json: { write: !0 } })],
          x.prototype,
          'aggregateIds',
          void 0,
        ),
        (0, i._)(
          [(0, d.Cb)({ type: Boolean, json: { write: !0 } })],
          x.prototype,
          'cacheHint',
          void 0,
        ),
        (0, i._)(
          [(0, d.Cb)({ type: Boolean, json: { default: !1, write: !0 } })],
          x.prototype,
          'compactGeometryEnabled',
          void 0,
        ),
        (0, i._)(
          [(0, d.Cb)({ json: { write: !0 } })],
          x.prototype,
          'datumTransformation',
          void 0,
        ),
        (0, i._)(
          [(0, c.p)('datumTransformation')],
          x.prototype,
          'castDatumTransformation',
          null,
        ),
        (0, i._)(
          [(0, d.Cb)({ type: Boolean, json: { default: !1, write: !0 } })],
          x.prototype,
          'defaultSpatialReferenceEnabled',
          void 0,
        ),
        (0, i._)(
          [
            (0, d.Cb)({
              type: Number,
              json: { write: { overridePolicy: (e) => ({ enabled: e > 0 }) } },
            }),
          ],
          x.prototype,
          'distance',
          void 0,
        ),
        (0, i._)(
          [(0, d.Cb)({ type: _.n, json: { write: !0 } })],
          x.prototype,
          'dynamicDataSource',
          void 0,
        ),
        (0, i._)(
          [(0, d.Cb)({ type: String, json: { write: !0 } })],
          x.prototype,
          'formatOf3DObjects',
          void 0,
        ),
        (0, i._)(
          [(0, d.Cb)({ type: String, json: { write: !0 } })],
          x.prototype,
          'gdbVersion',
          void 0,
        ),
        (0, i._)(
          [(0, d.Cb)({ types: n.qM, json: { read: f.im, write: !0 } })],
          x.prototype,
          'geometry',
          void 0,
        ),
        (0, i._)(
          [(0, d.Cb)({ type: Number, json: { write: !0 } })],
          x.prototype,
          'geometryPrecision',
          void 0,
        ),
        (0, i._)(
          [(0, d.Cb)({ type: [String], json: { write: !0 } })],
          x.prototype,
          'groupByFieldsForStatistics',
          void 0,
        ),
        (0, i._)(
          [(0, d.Cb)({ type: String, json: { write: !0 } })],
          x.prototype,
          'having',
          void 0,
        ),
        (0, i._)(
          [(0, d.Cb)({ type: Date })],
          x.prototype,
          'historicMoment',
          void 0,
        ),
        (0, i._)(
          [(0, g.c)('historicMoment')],
          x.prototype,
          'writeHistoricMoment',
          null,
        ),
        (0, i._)(
          [(0, d.Cb)({ type: Number, json: { write: !0 } })],
          x.prototype,
          'maxAllowableOffset',
          void 0,
        ),
        (0, i._)(
          [
            (0, d.Cb)({
              type: Number,
              cast: (e) =>
                e < 1
                  ? 1
                  : e > s.MAX_MAX_RECORD_COUNT_FACTOR
                  ? s.MAX_MAX_RECORD_COUNT_FACTOR
                  : e,
              json: { write: { overridePolicy: (e) => ({ enabled: e > 1 }) } },
            }),
          ],
          x.prototype,
          'maxRecordCountFactor',
          void 0,
        ),
        (0, i._)(
          [(0, d.Cb)({ type: ['xyFootprint'], json: { write: !0 } })],
          x.prototype,
          'multipatchOption',
          void 0,
        ),
        (0, i._)(
          [
            (0, d.Cb)({
              type: Number,
              json: { read: { source: 'resultRecordCount' } },
            }),
          ],
          x.prototype,
          'num',
          void 0,
        ),
        (0, i._)(
          [(0, d.Cb)({ json: { write: !0 } })],
          x.prototype,
          'objectIds',
          void 0,
        ),
        (0, i._)(
          [(0, d.Cb)({ type: [String], json: { write: !0 } })],
          x.prototype,
          'orderByFields',
          void 0,
        ),
        (0, i._)(
          [(0, d.Cb)({ type: [String], json: { write: !0 } })],
          x.prototype,
          'outFields',
          void 0,
        ),
        (0, i._)(
          [(0, d.Cb)({ type: S.Z, json: { name: 'outSR', write: !0 } })],
          x.prototype,
          'outSpatialReference',
          void 0,
        ),
        (0, i._)(
          [
            (0, d.Cb)({
              type: [w.Z],
              json: {
                write: {
                  enabled: !0,
                  overridePolicy() {
                    return {
                      enabled:
                        (0, p.pC)(this.outStatistics) &&
                        this.outStatistics.length > 0,
                    };
                  },
                },
              },
            }),
          ],
          x.prototype,
          'outStatistics',
          void 0,
        ),
        (0, i._)(
          [(0, d.Cb)({ json: { write: !0 } })],
          x.prototype,
          'parameterValues',
          void 0,
        ),
        (0, i._)(
          [(0, g.c)('parameterValues')],
          x.prototype,
          'writeParameterValues',
          null,
        ),
        (0, i._)(
          [(0, d.Cb)({ type: v.Z, json: { write: !0 } })],
          x.prototype,
          'pixelSize',
          void 0,
        ),
        (0, i._)(
          [(0, d.Cb)({ type: b.Z, json: { write: !0 } })],
          x.prototype,
          'quantizationParameters',
          void 0,
        ),
        (0, i._)(
          [(0, d.Cb)({ type: [Object], json: { write: !0 } })],
          x.prototype,
          'rangeValues',
          void 0,
        ),
        (0, i._)(
          [
            (0, d.Cb)({
              type: String,
              json: {
                read: { source: 'relationParam' },
                write: {
                  target: 'relationParam',
                  overridePolicy() {
                    return { enabled: 'relation' === this.spatialRelationship };
                  },
                },
              },
            }),
          ],
          x.prototype,
          'relationParameter',
          void 0,
        ),
        (0, i._)(
          [(0, d.Cb)({ type: String, json: { write: !0 } })],
          x.prototype,
          'resultType',
          void 0,
        ),
        (0, i._)(
          [(0, d.Cb)({ type: Boolean, json: { default: !1, write: !0 } })],
          x.prototype,
          'returnCentroid',
          void 0,
        ),
        (0, i._)(
          [(0, d.Cb)({ type: Boolean, json: { default: !1, write: !0 } })],
          x.prototype,
          'returnDistinctValues',
          void 0,
        ),
        (0, i._)(
          [(0, d.Cb)({ type: Boolean, json: { default: !0, write: !0 } })],
          x.prototype,
          'returnExceededLimitFeatures',
          void 0,
        ),
        (0, i._)(
          [(0, d.Cb)({ type: Boolean, json: { write: !0 } })],
          x.prototype,
          'returnGeometry',
          void 0,
        ),
        (0, i._)(
          [(0, d.Cb)({ type: Boolean, json: { default: !1, write: !0 } })],
          x.prototype,
          'returnQueryGeometry',
          void 0,
        ),
        (0, i._)(
          [(0, d.Cb)({ type: Boolean, json: { default: !1, write: !0 } })],
          x.prototype,
          'returnM',
          void 0,
        ),
        (0, i._)(
          [
            (0, d.Cb)({
              type: Boolean,
              json: { write: { overridePolicy: (e) => ({ enabled: e }) } },
            }),
          ],
          x.prototype,
          'returnZ',
          void 0,
        ),
        (0, i._)(
          [(0, d.Cb)({ type: S.Z, json: { write: !0 } })],
          x.prototype,
          'sourceSpatialReference',
          void 0,
        ),
        (0, i._)(
          [(0, h.J)(C, { ignoreUnknown: !1, name: 'spatialRel' })],
          x.prototype,
          'spatialRelationship',
          void 0,
        ),
        (0, i._)(
          [
            (0, d.Cb)({
              type: Number,
              json: { read: { source: 'resultOffset' } },
            }),
          ],
          x.prototype,
          'start',
          void 0,
        ),
        (0, i._)(
          [(0, g.c)('start'), (0, g.c)('num')],
          x.prototype,
          'writeStart',
          null,
        ),
        (0, i._)(
          [(0, d.Cb)({ type: String, json: { write: !0 } })],
          x.prototype,
          'sqlFormat',
          void 0,
        ),
        (0, i._)(
          [(0, d.Cb)({ type: String, json: { write: !0 } })],
          x.prototype,
          'text',
          void 0,
        ),
        (0, i._)(
          [(0, d.Cb)({ type: o.Z, json: { write: !0 } })],
          x.prototype,
          'timeExtent',
          void 0,
        ),
        (0, i._)(
          [(0, d.Cb)({ type: Boolean, json: { default: !1, write: !0 } })],
          x.prototype,
          'timeReferenceUnknownClient',
          void 0,
        ),
        (0, i._)(
          [
            (0, h.J)(T, { ignoreUnknown: !1 }),
            (0, d.Cb)({
              json: {
                write: {
                  overridePolicy(e) {
                    return { enabled: e && this.distance > 0 };
                  },
                },
              },
            }),
          ],
          x.prototype,
          'units',
          void 0,
        ),
        (0, i._)(
          [
            (0, d.Cb)({
              type: String,
              json: {
                write: {
                  overridePolicy(e) {
                    return { enabled: null != e || this.start > 0 };
                  },
                },
              },
            }),
          ],
          x.prototype,
          'where',
          void 0,
        ),
        (0, i._)([(0, g.c)('where')], x.prototype, 'writeWhere', null),
        (x = s = (0, i._)([(0, y.j)('esri.rest.support.Query')], x));
      const k = x;
    },
    58539: (e, t, r) => {
      r.d(t, { Z: () => h });
      var s,
        i = r(43697),
        n = r(35454),
        o = r(96674),
        a = r(22974),
        l = r(5600),
        u = (r(75215), r(52011)),
        p = r(30556);
      const d = new n.X({
        count: 'count',
        sum: 'sum',
        min: 'min',
        max: 'max',
        avg: 'avg',
        stddev: 'stddev',
        var: 'var',
        exceedslimit: 'exceedslimit',
        percentile_cont: 'percentile-continuous',
        percentile_disc: 'percentile-discrete',
        EnvelopeAggregate: 'envelope-aggregate',
        CentroidAggregate: 'centroid-aggregate',
        ConvexHullAggregate: 'convex-hull-aggregate',
      });
      let c = (s = class extends o.wq {
        constructor(e) {
          super(e),
            (this.maxPointCount = void 0),
            (this.maxRecordCount = void 0),
            (this.maxVertexCount = void 0),
            (this.onStatisticField = null),
            (this.outStatisticFieldName = null),
            (this.statisticType = null),
            (this.statisticParameters = null);
        }
        writeStatisticParameters(e, t) {
          ('percentile-continuous' !== this.statisticType &&
            'percentile-discrete' !== this.statisticType) ||
            (t.statisticParameters = (0, a.d9)(e));
        }
        clone() {
          return new s({
            maxPointCount: this.maxPointCount,
            maxRecordCount: this.maxRecordCount,
            maxVertexCount: this.maxVertexCount,
            onStatisticField: this.onStatisticField,
            outStatisticFieldName: this.outStatisticFieldName,
            statisticType: this.statisticType,
            statisticParameters: (0, a.d9)(this.statisticParameters),
          });
        }
      });
      (0, i._)(
        [(0, l.Cb)({ type: Number, json: { write: !0 } })],
        c.prototype,
        'maxPointCount',
        void 0,
      ),
        (0, i._)(
          [(0, l.Cb)({ type: Number, json: { write: !0 } })],
          c.prototype,
          'maxRecordCount',
          void 0,
        ),
        (0, i._)(
          [(0, l.Cb)({ type: Number, json: { write: !0 } })],
          c.prototype,
          'maxVertexCount',
          void 0,
        ),
        (0, i._)(
          [(0, l.Cb)({ type: String, json: { write: !0 } })],
          c.prototype,
          'onStatisticField',
          void 0,
        ),
        (0, i._)(
          [(0, l.Cb)({ type: String, json: { write: !0 } })],
          c.prototype,
          'outStatisticFieldName',
          void 0,
        ),
        (0, i._)(
          [
            (0, l.Cb)({
              type: String,
              json: {
                read: { source: 'statisticType', reader: d.read },
                write: { target: 'statisticType', writer: d.write },
              },
            }),
          ],
          c.prototype,
          'statisticType',
          void 0,
        ),
        (0, i._)(
          [(0, l.Cb)({ type: Object })],
          c.prototype,
          'statisticParameters',
          void 0,
        ),
        (0, i._)(
          [(0, p.c)('statisticParameters')],
          c.prototype,
          'writeStatisticParameters',
          null,
        ),
        (c = s =
          (0, i._)([(0, u.j)('esri.rest.support.StatisticDefinition')], c));
      const h = c;
    },
    89749: (e, t, r) => {
      r.d(t, { t: () => d });
      var s = r(43697),
        i = r(15923),
        n = r(61247),
        o = r(70586),
        a = r(17445),
        l = r(1654),
        u = r(5600),
        p = r(52011);
      let d = class extends i.Z {
        constructor() {
          super(...arguments),
            (this.updating = !1),
            (this.handleId = 0),
            (this.handles = new n.Z()),
            (this.scheduleHandleId = 0),
            (this.pendingPromises = new Set());
        }
        destroy() {
          this.removeAll(), this.handles.destroy();
        }
        add(e, t, r = {}) {
          return this._installWatch(e, t, r, a.YP);
        }
        addWhen(e, t, r = {}) {
          return this._installWatch(e, t, r, a.gx);
        }
        addOnCollectionChange(e, t, { initial: r = !1 } = {}) {
          const s = ++this.handleId;
          return (
            this.handles.add(
              [
                (0, a.on)(
                  e,
                  'after-changes',
                  this._createSyncUpdatingCallback(),
                  a.Z_,
                ),
                (0, a.on)(e, 'change', t, {
                  onListenerAdd: r
                    ? (e) => t({ added: e.toArray(), removed: [] })
                    : void 0,
                }),
              ],
              s,
            ),
            { remove: () => this.handles.remove(s) }
          );
        }
        addPromise(e) {
          if ((0, o.Wi)(e)) return e;
          const t = ++this.handleId;
          this.handles.add(
            {
              remove: () => {
                this.pendingPromises.delete(e) &&
                  (0 !== this.pendingPromises.size ||
                    this.handles.has(c) ||
                    this._set('updating', !1));
              },
            },
            t,
          ),
            this.pendingPromises.add(e),
            this._set('updating', !0);
          const r = () => this.handles.remove(t);
          return e.then(r, r), e;
        }
        removeAll() {
          this.pendingPromises.clear(),
            this.handles.removeAll(),
            this._set('updating', !1);
        }
        _installWatch(e, t, r = {}, s) {
          const i = ++this.handleId;
          r.sync || this._installSyncUpdatingWatch(e, i);
          const n = s(e, t, r);
          return (
            this.handles.add(n, i), { remove: () => this.handles.remove(i) }
          );
        }
        _installSyncUpdatingWatch(e, t) {
          const r = this._createSyncUpdatingCallback(),
            s = (0, a.YP)(e, r, { sync: !0, equals: () => !1 });
          return this.handles.add(s, t), s;
        }
        _createSyncUpdatingCallback() {
          return () => {
            this.handles.remove(c), ++this.scheduleHandleId;
            const e = this.scheduleHandleId;
            this._get('updating') || this._set('updating', !0),
              this.handles.add(
                (0, l.Os)(() => {
                  e === this.scheduleHandleId &&
                    (this._set('updating', this.pendingPromises.size > 0),
                    this.handles.remove(c));
                }),
                c,
              );
          };
        }
      };
      (0, s._)([(0, u.Cb)({ readOnly: !0 })], d.prototype, 'updating', void 0),
        (d = (0, s._)(
          [(0, p.j)('esri.views.support.WatchUpdatingTracking')],
          d,
        ));
      const c = -42;
      var h, y;
      ((y = h || (h = {}))[(y.NONE = 0)] = 'NONE'),
        (y[(y.SYNC = 1)] = 'SYNC'),
        (y[(y.INIT = 2)] = 'INIT');
    },
  },
]);
