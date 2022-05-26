'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [2133],
  {
    93860: (e, t, r) => {
      function n(e, t) {
        const r = e.count;
        t || (t = new e.TypedArrayConstructor(r));
        for (let n = 0; n < r; n++) t[n] = e.get(n);
        return t;
      }
      r.d(t, { m: () => n }),
        Object.freeze({
          __proto__: null,
          copy: function (e, t, r) {
            const n = e.typedBuffer,
              o = e.typedBufferStride,
              s = t.typedBuffer,
              i = t.typedBufferStride,
              a = r ? r.count : t.count;
            let _ = (r && r.dstIndex ? r.dstIndex : 0) * o,
              u = (r && r.srcIndex ? r.srcIndex : 0) * i;
            for (let e = 0; e < a; ++e) (n[_] = s[u]), (_ += o), (u += i);
          },
          makeDense: n,
        });
    },
    10816: (e, t, r) => {
      r.d(t, { f: () => i, n: () => s });
      var n = r(79583);
      function o(e, t, r) {
        const n = e.typedBuffer,
          o = e.typedBufferStride,
          s = t.typedBuffer,
          i = t.typedBufferStride,
          a = r ? r.count : t.count;
        let _ = (r && r.dstIndex ? r.dstIndex : 0) * o,
          u = (r && r.srcIndex ? r.srcIndex : 0) * i;
        for (let e = 0; e < a; ++e)
          (n[_] = s[u]), (n[_ + 1] = s[u + 1]), (_ += o), (u += i);
      }
      function s(e, t, r) {
        const s = e.typedBuffer,
          i = e.typedBufferStride,
          a = t.typedBuffer,
          _ = t.typedBufferStride,
          u = r ? r.count : t.count;
        let E = (r && r.dstIndex ? r.dstIndex : 0) * i,
          c = (r && r.srcIndex ? r.srcIndex : 0) * _;
        if ((0, n.U)(t.elementType)) {
          const e = (0, n.Op)(t.elementType);
          if ((0, n.B3)(t.elementType))
            for (let t = 0; t < u; ++t)
              (s[E] = Math.max(a[c] / e, -1)),
                (s[E + 1] = Math.max(a[c + 1] / e, -1)),
                (E += i),
                (c += _);
          else
            for (let t = 0; t < u; ++t)
              (s[E] = a[c] / e), (s[E + 1] = a[c + 1] / e), (E += i), (c += _);
        } else o(e, t, r);
        return e;
      }
      function i(e, t, r, n) {
        var o, s;
        const i = e.typedBuffer,
          a = e.typedBufferStride,
          _ = null != (o = null == n ? void 0 : n.count) ? o : e.count;
        let u = (null != (s = null == n ? void 0 : n.dstIndex) ? s : 0) * a;
        for (let e = 0; e < _; ++e) (i[u] = t), (i[u + 1] = r), (u += a);
      }
      Object.freeze({
        __proto__: null,
        copy: o,
        normalizeIntegerBuffer: s,
        fill: i,
      });
    },
    97323: (e, t, r) => {
      function n(e, t) {
        return [e, t];
      }
      function o(e, t) {
        return new Float64Array(e, t, 2);
      }
      function s() {
        return n(1, 1);
      }
      function i() {
        return n(1, 0);
      }
      function a() {
        return n(0, 1);
      }
      r.d(t, { c: () => o });
      const _ = s(),
        u = i(),
        E = a();
      Object.freeze({
        __proto__: null,
        create: function () {
          return [0, 0];
        },
        clone: function (e) {
          return [e[0], e[1]];
        },
        fromValues: n,
        fromArray: function (e) {
          const t = [0, 0],
            r = Math.min(2, e.length);
          for (let n = 0; n < r; ++n) t[n] = e[n];
          return t;
        },
        createView: o,
        zeros: function () {
          return [0, 0];
        },
        ones: s,
        unitX: i,
        unitY: a,
        ZEROS: [0, 0],
        ONES: _,
        UNIT_X: u,
        UNIT_Y: E,
      });
    },
    11077: (e, t, r) => {
      r.d(t, { a: () => i, s: () => s, t: () => o });
      var n = r(72220);
      function o(e, t, r) {
        if (e.count !== t.count)
          return void n.c.error(
            'source and destination buffers need to have the same number of elements',
          );
        const o = e.count,
          s = r[0],
          i = r[1],
          a = r[2],
          _ = r[3],
          u = r[4],
          E = r[5],
          c = r[6],
          T = r[7],
          R = r[8],
          A = e.typedBuffer,
          f = e.typedBufferStride,
          N = t.typedBuffer,
          l = t.typedBufferStride;
        for (let e = 0; e < o; e++) {
          const t = e * f,
            r = e * l,
            n = N[r],
            o = N[r + 1],
            S = N[r + 2],
            d = N[r + 3];
          (A[t] = s * n + _ * o + c * S),
            (A[t + 1] = i * n + u * o + T * S),
            (A[t + 2] = a * n + E * o + R * S),
            (A[t + 3] = d);
        }
      }
      function s(e, t, r) {
        const n = Math.min(e.count, t.count),
          o = e.typedBuffer,
          s = e.typedBufferStride,
          i = t.typedBuffer,
          a = t.typedBufferStride;
        for (let e = 0; e < n; e++) {
          const t = e * s,
            n = e * a;
          (o[t] = r * i[n]),
            (o[t + 1] = r * i[n + 1]),
            (o[t + 2] = r * i[n + 2]),
            (o[t + 3] = r * i[n + 3]);
        }
      }
      function i(e, t, r) {
        const n = Math.min(e.count, t.count),
          o = e.typedBuffer,
          s = e.typedBufferStride,
          i = t.typedBuffer,
          a = t.typedBufferStride;
        for (let e = 0; e < n; e++) {
          const t = e * s,
            n = e * a;
          (o[t] = i[n] >> r),
            (o[t + 1] = i[n + 1] >> r),
            (o[t + 2] = i[n + 2] >> r),
            (o[t + 3] = i[n + 3] >> r);
        }
      }
      Object.freeze({
        __proto__: null,
        transformMat4: function (e, t, r) {
          if (e.count !== t.count)
            return void n.c.error(
              'source and destination buffers need to have the same number of elements',
            );
          const o = e.count,
            s = r[0],
            i = r[1],
            a = r[2],
            _ = r[3],
            u = r[4],
            E = r[5],
            c = r[6],
            T = r[7],
            R = r[8],
            A = r[9],
            f = r[10],
            N = r[11],
            l = r[12],
            S = r[13],
            d = r[14],
            I = r[15],
            O = e.typedBuffer,
            C = e.typedBufferStride,
            p = t.typedBuffer,
            h = t.typedBufferStride;
          for (let e = 0; e < o; e++) {
            const t = e * C,
              r = e * h,
              n = p[r],
              o = p[r + 1],
              U = p[r + 2],
              L = p[r + 3];
            (O[t] = s * n + u * o + R * U + l * L),
              (O[t + 1] = i * n + E * o + A * U + S * L),
              (O[t + 2] = a * n + c * o + f * U + d * L),
              (O[t + 3] = _ * n + T * o + N * U + I * L);
          }
        },
        transformMat3: o,
        scale: s,
        shiftRight: i,
      });
    },
    75488: (e, t, r) => {
      function n(e, t, r) {
        const n = e.typedBuffer,
          o = e.typedBufferStride,
          s = t.typedBuffer,
          i = t.typedBufferStride,
          a = r ? r.count : t.count;
        let _ = (r && r.dstIndex ? r.dstIndex : 0) * o,
          u = (r && r.srcIndex ? r.srcIndex : 0) * i;
        for (let e = 0; e < a; ++e)
          (n[_] = s[u]),
            (n[_ + 1] = s[u + 1]),
            (n[_ + 2] = s[u + 2]),
            (n[_ + 3] = s[u + 3]),
            (_ += o),
            (u += i);
      }
      function o(e, t, r, n, o, s) {
        var i, a;
        const _ = e.typedBuffer,
          u = e.typedBufferStride,
          E = null != (i = null == s ? void 0 : s.count) ? i : e.count;
        let c = (null != (a = null == s ? void 0 : s.dstIndex) ? a : 0) * u;
        for (let e = 0; e < E; ++e)
          (_[c] = t), (_[c + 1] = r), (_[c + 2] = n), (_[c + 3] = o), (c += u);
      }
      r.d(t, { c: () => n, f: () => o }),
        Object.freeze({ __proto__: null, copy: n, fill: o });
    },
    88669: (e, t, r) => {
      function n() {
        return [0, 0, 0, 0];
      }
      function o(e, t, r, n) {
        return [e, t, r, n];
      }
      function s(e, t) {
        return new Float64Array(e, t, 4);
      }
      function i() {
        return o(1, 1, 1, 1);
      }
      function a() {
        return o(1, 0, 0, 0);
      }
      function _() {
        return o(0, 1, 0, 0);
      }
      function u() {
        return o(0, 0, 1, 0);
      }
      function E() {
        return o(0, 0, 0, 1);
      }
      r.d(t, { a: () => s, c: () => n, f: () => o });
      const c = i(),
        T = a(),
        R = _(),
        A = u(),
        f = E();
      Object.freeze({
        __proto__: null,
        create: n,
        clone: function (e) {
          return [e[0], e[1], e[2], e[3]];
        },
        fromValues: o,
        fromArray: function (e) {
          const t = [0, 0, 0, 0],
            r = Math.min(4, e.length);
          for (let n = 0; n < r; ++n) t[n] = e[n];
          return t;
        },
        createView: s,
        zeros: function () {
          return [0, 0, 0, 0];
        },
        ones: i,
        unitX: a,
        unitY: _,
        unitZ: u,
        unitW: E,
        ZEROS: [0, 0, 0, 0],
        ONES: c,
        UNIT_X: T,
        UNIT_Y: R,
        UNIT_Z: A,
        UNIT_W: f,
      });
    },
    22807: (e, t, r) => {
      r.d(t, { x: () => o });
      var n = r(41213);
      class o {
        constructor(e) {
          (this.allocator = e),
            (this._items = []),
            (this._itemsPtr = 0),
            this._grow();
        }
        get() {
          return (
            0 === this._itemsPtr && (0, n.Y)(() => this._reset()),
            this._itemsPtr === this._items.length && this._grow(),
            this._items[this._itemsPtr++]
          );
        }
        _reset() {
          const e = Math.min(
            3 * Math.max(8, this._itemsPtr),
            this._itemsPtr + 3 * s,
          );
          (this._items.length = Math.min(e, this._items.length)),
            (this._itemsPtr = 0);
        }
        _grow() {
          for (let e = 0; e < Math.max(8, Math.min(this._items.length, s)); e++)
            this._items.push(this.allocator());
        }
      }
      const s = 1024;
    },
    23670: (e, t, r) => {
      r.d(t, { G: () => o });
      var n = r(20102);
      class o {
        constructor(e, t, r = '') {
          (this.major = e), (this.minor = t), (this._context = r);
        }
        lessThan(e, t) {
          return this.major < e || (e === this.major && this.minor < t);
        }
        since(e, t) {
          return !this.lessThan(e, t);
        }
        validate(e) {
          if (this.major !== e.major) {
            const t = this._context && this._context + ':',
              r = this._context && this._context + ' ';
            throw new n.Z(
              t + 'unsupported-version',
              `Required major ${r}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,
              { version: e },
            );
          }
        }
        clone() {
          return new o(this.major, this.minor, this._context);
        }
        static parse(e, t = '') {
          const [r, s] = e.split('.'),
            i = /^\s*\d+\s*$/;
          if (!r || !r.match || !r.match(i))
            throw new n.Z(
              (t && t + ':') + 'invalid-version',
              "Expected major version to be a number, but got '${version}'",
              { version: e },
            );
          if (!s || !s.match || !s.match(i))
            throw new n.Z(
              (t && t + ':') + 'invalid-version',
              "Expected minor version to be a number, but got '${version}'",
              { version: e },
            );
          const a = parseInt(r, 10),
            _ = parseInt(s, 10);
          return new o(a, _, t);
        }
      }
    },
    43090: (e, t, r) => {
      function n(e) {
        return 32 + e.length;
      }
      function o(e) {
        if (!e) return 0;
        let t = 32;
        for (const r in e)
          if (e.hasOwnProperty(r)) {
            const o = e[r];
            switch (typeof o) {
              case 'string':
                t += n(o);
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
      var i;
      r.d(t, { Y8: () => i, f2: () => o, do: () => s }),
        (function (e) {
          (e[(e.KILOBYTES = 1024)] = 'KILOBYTES'),
            (e[(e.MEGABYTES = 1048576)] = 'MEGABYTES'),
            (e[(e.GIGABYTES = 1073741824)] = 'GIGABYTES');
        })(i || (i = {}));
    },
    79583: (e, t, r) => {
      function n(e) {
        switch (e) {
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
      function o(e) {
        switch (e) {
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
      function s(e) {
        switch (e) {
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
      function i(e) {
        switch (e) {
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
      r.d(t, { n1: () => n, U: () => s, B3: () => o, Op: () => i }), r(80442);
    },
    8323: (e, t, r) => {
      r.d(t, { gS: () => o });
      var n = r(79583);
      function o(e, t) {
        return new e(
          new ArrayBuffer(t * e.ElementCount * (0, n.n1)(e.ElementType)),
        );
      }
      Object.freeze({
        __proto__: null,
        copy: function (e, t, r) {
          const n = e.typedBuffer,
            o = e.typedBufferStride,
            s = t.typedBuffer,
            i = t.typedBufferStride,
            a = r ? r.count : t.count;
          let _ = (r && r.dstIndex ? r.dstIndex : 0) * o,
            u = (r && r.srcIndex ? r.srcIndex : 0) * i;
          for (let e = 0; e < a; ++e) {
            for (let e = 0; e < 9; ++e) n[_ + e] = s[u + e];
            (_ += o), (u += i);
          }
        },
      }),
        Object.freeze({
          __proto__: null,
          copy: function (e, t, r) {
            const n = e.typedBuffer,
              o = e.typedBufferStride,
              s = t.typedBuffer,
              i = t.typedBufferStride,
              a = r ? r.count : t.count;
            let _ = (r && r.dstIndex ? r.dstIndex : 0) * o,
              u = (r && r.srcIndex ? r.srcIndex : 0) * i;
            for (let e = 0; e < a; ++e) {
              for (let e = 0; e < 16; ++e) n[_ + e] = s[u + e];
              (_ += o), (u += i);
            }
          },
        }),
        r(93860),
        r(10816),
        r(56067),
        r(75488);
    },
    12981: (e, t, r) => {
      r.d(t, { MP: () => A, WM: () => R });
      var n = r(43090),
        o = r(41213),
        s = r(46521),
        i = r(13598),
        a = r(94961),
        _ = r(97323),
        u = r(65617),
        E = r(88669);
      class c {
        constructor(e, t, r) {
          (this.itemByteSize = e),
            (this.itemCreate = t),
            (this._buffers = new Array()),
            (this._items = new Array()),
            (this._itemsPtr = 0),
            (this._itemsPerBuffer = Math.ceil(r / this.itemByteSize));
        }
        get() {
          0 === this._itemsPtr && (0, o.Y)(() => this._reset());
          const e = Math.floor(this._itemsPtr / this._itemsPerBuffer);
          for (; this._buffers.length <= e; ) {
            const e = new ArrayBuffer(this._itemsPerBuffer * this.itemByteSize);
            for (let t = 0; t < this._itemsPerBuffer; ++t)
              this._items.push(this.itemCreate(e, t * this.itemByteSize));
            this._buffers.push(e);
          }
          return this._items[this._itemsPtr++];
        }
        _reset() {
          const e = 2 * (Math.floor(this._itemsPtr / this._itemsPerBuffer) + 1);
          for (; this._buffers.length > e; )
            this._buffers.pop(),
              (this._items.length =
                this._buffers.length * this._itemsPerBuffer);
          this._itemsPtr = 0;
        }
        static createVec2f64(e = T) {
          return new c(16, _.c, e);
        }
        static createVec3f64(e = T) {
          return new c(24, u.b, e);
        }
        static createVec4f64(e = T) {
          return new c(32, E.a, e);
        }
        static createMat3f64(e = T) {
          return new c(72, s.a, e);
        }
        static createMat4f64(e = T) {
          return new c(128, i.a, e);
        }
        static createQuatf64(e = T) {
          return new c(32, a.c, e);
        }
        get test() {
          return {
            size:
              this._buffers.length * this._itemsPerBuffer * this.itemByteSize,
          };
        }
      }
      const T = 4 * n.Y8.KILOBYTES,
        R = (c.createVec2f64(), c.createVec3f64()),
        A = (c.createVec4f64(), c.createMat3f64(), c.createMat4f64());
      c.createQuatf64();
    },
    40270: (e, t, r) => {
      r.d(t, { C: () => u });
      var n = r(3172),
        o = r(66643),
        s = r(20102),
        i = r(70586),
        a = r(95330),
        _ = r(17452);
      class u {
        constructor(e) {
          this.streamDataRequester = e;
        }
        async loadJSON(e, t) {
          return this._load('json', e, t);
        }
        async loadBinary(e, t) {
          return (0, _.HK)(e)
            ? ((0, a.k_)(t), (0, _.AH)(e))
            : this._load('binary', e, t);
        }
        async loadImage(e, t) {
          return this._load('image', e, t);
        }
        async _load(e, t, r) {
          if ((0, i.Wi)(this.streamDataRequester))
            return (await (0, n.default)(t, { responseType: E[e] })).data;
          const _ = await (0, o.q6)(this.streamDataRequester.request(t, e, r));
          if (!0 === _.ok) return _.value;
          throw (
            ((0, a.r9)(_.error),
            new s.Z('', `Request for resource failed: ${_.error}`))
          );
        }
      }
      const E = { image: 'image', binary: 'array-buffer', json: 'json' };
    },
    91911: (e, t, r) => {
      r.d(t, { jX: () => a, DA: () => i, nh: () => s });
      var n = r(1533),
        o = r(64291);
      function s(e, t = o.p) {
        return 'number' == typeof e
          ? t(e)
          : (0, n.Uc)(e) || (0, n.lq)(e)
          ? new Uint32Array(e)
          : e;
      }
      function i(e) {
        const t = 'number' == typeof e ? e : e.length;
        if (t < 3) return new Uint16Array(0);
        const r = t - 2,
          n = r <= 65536 ? new Uint16Array(3 * r) : new Uint32Array(3 * r);
        if ('number' == typeof e) {
          let e = 0;
          for (let t = 0; t < r; t += 1)
            t % 2 == 0
              ? ((n[e++] = t), (n[e++] = t + 1), (n[e++] = t + 2))
              : ((n[e++] = t + 1), (n[e++] = t), (n[e++] = t + 2));
        } else {
          let t = 0;
          for (let o = 0; o < r; o += 1)
            if (o % 2 == 0) {
              const r = e[o],
                s = e[o + 1],
                i = e[o + 2];
              (n[t++] = r), (n[t++] = s), (n[t++] = i);
            } else {
              const r = e[o + 1],
                s = e[o],
                i = e[o + 2];
              (n[t++] = r), (n[t++] = s), (n[t++] = i);
            }
        }
        return n;
      }
      function a(e) {
        const t = 'number' == typeof e ? e : e.length;
        if (t < 3) return new Uint16Array(0);
        const r = t - 2,
          n = r <= 65536 ? new Uint16Array(3 * r) : new Uint32Array(3 * r);
        if ('number' == typeof e) {
          let e = 0;
          for (let t = 0; t < r; ++t)
            (n[e++] = 0), (n[e++] = t + 1), (n[e++] = t + 2);
          return n;
        }
        {
          const t = e[0];
          let o = e[1],
            s = 0;
          for (let i = 0; i < r; ++i) {
            const r = e[i + 2];
            (n[s++] = t), (n[s++] = o), (n[s++] = r), (o = r);
          }
          return n;
        }
      }
    },
    88246: (e, t, r) => {
      r.d(t, { z: () => b });
      var n = r(70586),
        o = r(13598),
        s = r(20102);
      const i = r(92604).Z.getLogger('esri.views.3d.glTF');
      var a,
        _,
        u = r(35371),
        E = r(74085),
        c = r(30175),
        T = r(17452),
        R = r(23670),
        A = r(52138),
        f = r(51305),
        N = r(94961),
        l = r(56481),
        S = r(93860);
      class d {
        constructor(e) {
          (this.data = e),
            (this.offset4 = 0),
            (this.dataUint32 = new Uint32Array(
              this.data,
              0,
              Math.floor(this.data.byteLength / 4),
            ));
        }
        readUint32() {
          const e = this.offset4;
          return (this.offset4 += 1), this.dataUint32[e];
        }
        readUint8Array(e) {
          const t = 4 * this.offset4;
          return (this.offset4 += e / 4), new Uint8Array(this.data, t, e);
        }
        remainingBytes() {
          return this.data.byteLength - 4 * this.offset4;
        }
      }
      !(function (e) {
        (e.SCALAR = 'SCALAR'),
          (e.VEC2 = 'VEC2'),
          (e.VEC3 = 'VEC3'),
          (e.VEC4 = 'VEC4'),
          (e.MAT2 = 'MAT2'),
          (e.MAT3 = 'MAT3'),
          (e.MAT4 = 'MAT4');
      })(a || (a = {})),
        (function (e) {
          (e[(e.ARRAY_BUFFER = 34962)] = 'ARRAY_BUFFER'),
            (e[(e.ELEMENT_ARRAY_BUFFER = 34963)] = 'ELEMENT_ARRAY_BUFFER');
        })(_ || (_ = {}));
      const I = {
          baseColorFactor: [1, 1, 1, 1],
          metallicFactor: 1,
          roughnessFactor: 1,
        },
        O = {
          pbrMetallicRoughness: I,
          emissiveFactor: [0, 0, 0],
          alphaMode: 'OPAQUE',
          alphaCutoff: 0.5,
          doubleSided: !1,
        },
        C = { ESRI_externalColorMixMode: 'tint' },
        p = (e = {}) => {
          const t = { ...I, ...e.pbrMetallicRoughness },
            r = (function (e) {
              switch (e.ESRI_externalColorMixMode) {
                case 'multiply':
                case 'tint':
                case 'ignore':
                case 'replace':
                  break;
                default:
                  (0, E.Bg)(e.ESRI_externalColorMixMode),
                    (e.ESRI_externalColorMixMode = 'tint');
              }
              return e;
            })({ ...C, ...e.extras });
          return { ...O, ...e, pbrMetallicRoughness: t, extras: r };
        },
        h = {
          magFilter: u.cw.LINEAR,
          minFilter: u.cw.LINEAR_MIPMAP_LINEAR,
          wrapS: u.e8.REPEAT,
          wrapT: u.e8.REPEAT,
        },
        U = (e) => ({ ...h, ...e }),
        L = 1179937895;
      class m {
        constructor(e, t, r, n, o) {
          (this.context = e),
            (this.errorContext = t),
            (this.uri = r),
            (this.json = n),
            (this.glbBuffer = o),
            (this.bufferLoaders = new Map()),
            (this.textureLoaders = new Map()),
            (this.textureCache = new Map()),
            (this.materialCache = new Map()),
            (this.nodeParentMap = new Map()),
            (this.nodeTransformCache = new Map()),
            (this.baseUri = (function (e) {
              let t, r;
              return (
                e.replace(
                  /^(.*\/)?([^/]*)$/,
                  (e, n, o) => ((t = n || ''), (r = o || ''), ''),
                ),
                { dirPart: t, filePart: r }
              );
            })(this.uri).dirPart),
            this._checkVersionSupported(),
            this._checkRequiredExtensionsSupported(),
            t.errorUnsupportedIf(null == n.scenes, 'Scenes must be defined.'),
            t.errorUnsupportedIf(null == n.meshes, 'Meshes must be defined'),
            t.errorUnsupportedIf(null == n.nodes, 'Nodes must be defined.'),
            this._computeNodeParents();
        }
        static async load(e, t, r, n) {
          if ((0, T.HK)(r)) {
            const n = (0, T.sJ)(r);
            if ('model/gltf-binary' !== n.mediaType)
              try {
                const o = JSON.parse(n.isBase64 ? atob(n.data) : n.data);
                return new m(e, t, r, o);
              } catch {}
            const o = (0, T.AH)(r);
            if (m._isGLBData(o)) return this._fromGLBData(e, t, r, o);
          }
          if (r.endsWith('.gltf')) {
            const o = await e.loadJSON(r, n);
            return new m(e, t, r, o);
          }
          const o = await e.loadBinary(r, n);
          if (m._isGLBData(o)) return this._fromGLBData(e, t, r, o);
          const s = await e.loadJSON(r, n);
          return new m(e, t, r, s);
        }
        static _isGLBData(e) {
          const t = new d(e);
          return t.remainingBytes() >= 4 && t.readUint32() === L;
        }
        static async _fromGLBData(e, t, r, n) {
          const o = await m._parseGLBData(t, n);
          return new m(e, t, r, o.json, o.binaryData);
        }
        static async _parseGLBData(e, t) {
          const r = new d(t);
          e.assert(
            r.remainingBytes() >= 12,
            'GLB binary data is insufficiently large.',
          );
          const n = r.readUint32(),
            o = r.readUint32(),
            s = r.readUint32();
          e.assert(
            n === L,
            'Magic first 4 bytes do not fit to expected GLB value.',
          ),
            e.assert(
              t.byteLength >= s,
              'GLB binary data is smaller than header specifies.',
            ),
            e.errorUnsupportedIf(
              2 !== o,
              'An unsupported GLB container version was detected. Only version 2 is supported.',
            );
          let i,
            a,
            _ = 0;
          for (; r.remainingBytes() >= 8; ) {
            const t = r.readUint32(),
              n = r.readUint32();
            0 === _
              ? (e.assert(1313821514 === n, 'First GLB chunk must be JSON.'),
                e.assert(t >= 0, 'No JSON data found.'),
                (i = await G(r.readUint8Array(t))))
              : 1 === _
              ? (e.errorUnsupportedIf(
                  5130562 !== n,
                  'Second GLB chunk expected to be BIN.',
                ),
                (a = r.readUint8Array(t)))
              : e.warnUnsupported('More than 2 GLB chunks detected. Skipping.'),
              (_ += 1);
          }
          return (
            i || e.error('No GLB JSON chunk detected.'),
            { json: i, binaryData: a }
          );
        }
        async getBuffer(e, t) {
          const r = this.json.buffers[e],
            n = this.errorContext;
          if (null == r.uri)
            return (
              n.assert(null != this.glbBuffer, 'GLB buffer not present'),
              this.glbBuffer
            );
          const o = await this._getBufferLoader(e, t);
          return (
            n.assert(
              o.byteLength === r.byteLength,
              'Buffer byte lengths should match.',
            ),
            o
          );
        }
        async _getBufferLoader(e, t) {
          const r = this.bufferLoaders.get(e);
          if (r) return r;
          const n = this.json.buffers[e],
            o = this.context
              .loadBinary(this._resolveUri(n.uri), t)
              .then((e) => new Uint8Array(e));
          return this.bufferLoaders.set(e, o), o;
        }
        async getAccessor(e, t) {
          const r = this.errorContext;
          r.errorUnsupportedIf(!this.json.accessors, 'Accessors missing.');
          const n = this.json.accessors[e];
          r.errorUnsupportedIf(
            null == (null == n ? void 0 : n.bufferView),
            'Some accessor does not specify a bufferView.',
          ),
            r.errorUnsupportedIf(
              n.type in [a.MAT2, a.MAT3, a.MAT4],
              `AttributeType ${n.type} is not supported`,
            );
          const o = this.json.bufferViews[n.bufferView],
            s = await this.getBuffer(o.buffer, t),
            i = P[n.type],
            _ = y[n.componentType],
            u = i * _,
            E = o.byteStride || u;
          return {
            raw: s.buffer,
            byteStride: E,
            byteOffset:
              s.byteOffset + (o.byteOffset || 0) + (n.byteOffset || 0),
            entryCount: n.count,
            isDenselyPacked: E === u,
            componentCount: i,
            componentByteSize: _,
            componentType: n.componentType,
            min: n.min,
            max: n.max,
            normalized: !!n.normalized,
          };
        }
        async getIndexData(e, t) {
          if (null == e.indices) return null;
          const r = await this.getAccessor(e.indices, t);
          if (r.isDenselyPacked)
            switch (r.componentType) {
              case u.g.UNSIGNED_BYTE:
                return new Uint8Array(r.raw, r.byteOffset, r.entryCount);
              case u.g.UNSIGNED_SHORT:
                return new Uint16Array(r.raw, r.byteOffset, r.entryCount);
              case u.g.UNSIGNED_INT:
                return new Uint32Array(r.raw, r.byteOffset, r.entryCount);
            }
          else
            switch (r.componentType) {
              case u.g.UNSIGNED_BYTE:
                return (0, S.m)(this._wrapAccessor(l.D_, r));
              case u.g.UNSIGNED_SHORT:
                return (0, S.m)(this._wrapAccessor(l.av, r));
              case u.g.UNSIGNED_INT:
                return (0, S.m)(this._wrapAccessor(l.Nu, r));
            }
        }
        async getPositionData(e, t) {
          const r = this.errorContext;
          r.errorUnsupportedIf(
            null == e.attributes.POSITION,
            'No POSITION vertex data found.',
          );
          const n = await this.getAccessor(e.attributes.POSITION, t);
          return (
            r.errorUnsupportedIf(
              n.componentType !== u.g.FLOAT,
              'Expected type FLOAT for POSITION vertex attribute, but found ' +
                F[n.componentType],
            ),
            r.errorUnsupportedIf(
              3 !== n.componentCount,
              'POSITION vertex attribute must have 3 components, but found ' +
                n.componentCount.toFixed(),
            ),
            this._wrapAccessor(l.ct, n)
          );
        }
        async getNormalData(e, t) {
          const r = this.errorContext;
          r.assert(null != e.attributes.NORMAL, 'No NORMAL vertex data found.');
          const n = await this.getAccessor(e.attributes.NORMAL, t);
          return (
            r.errorUnsupportedIf(
              n.componentType !== u.g.FLOAT,
              'Expected type FLOAT for NORMAL vertex attribute, but found ' +
                F[n.componentType],
            ),
            r.errorUnsupportedIf(
              3 !== n.componentCount,
              'NORMAL vertex attribute must have 3 components, but found ' +
                n.componentCount.toFixed(),
            ),
            this._wrapAccessor(l.ct, n)
          );
        }
        async getTangentData(e, t) {
          const r = this.errorContext;
          r.assert(
            null != e.attributes.TANGENT,
            'No TANGENT vertex data found.',
          );
          const n = await this.getAccessor(e.attributes.TANGENT, t);
          return (
            r.errorUnsupportedIf(
              n.componentType !== u.g.FLOAT,
              'Expected type FLOAT for TANGENT vertex attribute, but found ' +
                F[n.componentType],
            ),
            r.errorUnsupportedIf(
              4 !== n.componentCount,
              'TANGENT vertex attribute must have 4 components, but found ' +
                n.componentCount.toFixed(),
            ),
            new l.ek(
              n.raw,
              n.byteOffset,
              n.byteStride,
              n.byteOffset + n.byteStride * n.entryCount,
            )
          );
        }
        async getTextureCoordinates(e, t) {
          const r = this.errorContext;
          r.assert(
            null != e.attributes.TEXCOORD_0,
            'No TEXCOORD_0 vertex data found.',
          );
          const n = await this.getAccessor(e.attributes.TEXCOORD_0, t);
          return (
            r.errorUnsupportedIf(
              2 !== n.componentCount,
              'TEXCOORD_0 vertex attribute must have 2 components, but found ' +
                n.componentCount.toFixed(),
            ),
            n.componentType === u.g.FLOAT
              ? this._wrapAccessor(l.Eu, n)
              : (r.errorUnsupportedIf(
                  !n.normalized,
                  'Integer component types are only supported for a normalized accessor for TEXCOORD_0.',
                ),
                (function (e) {
                  switch (e.componentType) {
                    case u.g.BYTE:
                      return new l.Vs(
                        e.raw,
                        e.byteOffset,
                        e.byteStride,
                        e.byteOffset + e.byteStride * e.entryCount,
                      );
                    case u.g.UNSIGNED_BYTE:
                      return new l.xA(
                        e.raw,
                        e.byteOffset,
                        e.byteStride,
                        e.byteOffset + e.byteStride * e.entryCount,
                      );
                    case u.g.SHORT:
                      return new l.or(
                        e.raw,
                        e.byteOffset,
                        e.byteStride,
                        e.byteOffset + e.byteStride * e.entryCount,
                      );
                    case u.g.UNSIGNED_SHORT:
                      return new l.TS(
                        e.raw,
                        e.byteOffset,
                        e.byteStride,
                        e.byteOffset + e.byteStride * e.entryCount,
                      );
                    case u.g.UNSIGNED_INT:
                      return new l.qt(
                        e.raw,
                        e.byteOffset,
                        e.byteStride,
                        e.byteOffset + e.byteStride * e.entryCount,
                      );
                    case u.g.FLOAT:
                      return new l.Eu(
                        e.raw,
                        e.byteOffset,
                        e.byteStride,
                        e.byteOffset + e.byteStride * e.entryCount,
                      );
                    default:
                      return void (0, E.Bg)(e.componentType);
                  }
                })(n))
          );
        }
        async getVertexColors(e, t) {
          const r = this.errorContext;
          r.assert(
            null != e.attributes.COLOR_0,
            'No COLOR_0 vertex data found.',
          );
          const n = await this.getAccessor(e.attributes.COLOR_0, t);
          if (
            (r.errorUnsupportedIf(
              4 !== n.componentCount && 3 !== n.componentCount,
              'COLOR_0 attribute must have 3 or 4 components, but found ' +
                n.componentCount.toFixed(),
            ),
            4 === n.componentCount)
          ) {
            if (n.componentType === u.g.FLOAT)
              return this._wrapAccessor(l.ek, n);
            if (n.componentType === u.g.UNSIGNED_BYTE)
              return this._wrapAccessor(l.mc, n);
            if (n.componentType === u.g.UNSIGNED_SHORT)
              return this._wrapAccessor(l.v6, n);
          } else if (3 === n.componentCount) {
            if (n.componentType === u.g.FLOAT)
              return this._wrapAccessor(l.ct, n);
            if (n.componentType === u.g.UNSIGNED_BYTE)
              return this._wrapAccessor(l.ne, n);
            if (n.componentType === u.g.UNSIGNED_SHORT)
              return this._wrapAccessor(l.mw, n);
          }
          r.errorUnsupported(
            'Unsupported component type for COLOR_0 attribute: ' +
              F[n.componentType],
          );
        }
        hasPositions(e) {
          return void 0 !== e.attributes.POSITION;
        }
        hasNormals(e) {
          return void 0 !== e.attributes.NORMAL;
        }
        hasVertexColors(e) {
          return void 0 !== e.attributes.COLOR_0;
        }
        hasTextureCoordinates(e) {
          return void 0 !== e.attributes.TEXCOORD_0;
        }
        hasTangents(e) {
          return void 0 !== e.attributes.TANGENT;
        }
        async getMaterial(e, t, r) {
          let n = this.materialCache.get(e.material);
          if (!n) {
            const o =
                null != e.material ? p(this.json.materials[e.material]) : p(),
              s = o.pbrMetallicRoughness,
              i = this.hasVertexColors(e),
              a = this.getTexture(s.baseColorTexture, t),
              _ = this.getTexture(o.normalTexture, t),
              u = r ? this.getTexture(o.occlusionTexture, t) : null,
              E = r ? this.getTexture(o.emissiveTexture, t) : null,
              c = r ? this.getTexture(s.metallicRoughnessTexture, t) : null,
              T = null != e.material ? e.material : -1;
            n = {
              alphaMode: o.alphaMode,
              alphaCutoff: o.alphaCutoff,
              color: s.baseColorFactor,
              doubleSided: !!o.doubleSided,
              colorTexture: await a,
              normalTexture: await _,
              name: o.name,
              id: T,
              occlusionTexture: await u,
              emissiveTexture: await E,
              emissiveFactor: o.emissiveFactor,
              metallicFactor: s.metallicFactor,
              roughnessFactor: s.roughnessFactor,
              metallicRoughnessTexture: await c,
              vertexColors: i,
              ESRI_externalColorMixMode: o.extras.ESRI_externalColorMixMode,
            };
          }
          return n;
        }
        async getTexture(e, t) {
          if (!e) return null;
          this.errorContext.errorUnsupportedIf(
            0 !== (e.texCoord || 0),
            'Only TEXCOORD with index 0 is supported.',
          );
          const r = e.index,
            n = this.errorContext,
            o = this.json.textures[r],
            s = U(null != o.sampler ? this.json.samplers[o.sampler] : {});
          n.errorUnsupportedIf(
            null == o.source,
            'Source is expected to be defined for a texture.',
          );
          const i = this.json.images[o.source],
            a = await this._loadTextureImageData(r, o, t);
          return (0, c.s1)(this.textureCache, r, () => {
            const e = (e) => 33071 === e || 33648 === e || 10497 === e,
              t = (e) => (
                n.error(
                  `Unexpected TextureSampler WrapMode: ${e}. Using default REPEAT(10497).`,
                ),
                10497
              );
            return {
              data: a,
              wrapS: e(s.wrapS) ? s.wrapS : t(s.wrapS),
              wrapT: e(s.wrapT) ? s.wrapT : t(s.wrapT),
              minFilter: s.minFilter,
              name: i.name,
              id: r,
            };
          });
        }
        getNodeTransform(e) {
          if (void 0 === e) return B;
          let t = this.nodeTransformCache.get(e);
          if (!t) {
            const r = this.getNodeTransform(this._getNodeParent(e)),
              n = this.json.nodes[e];
            n.matrix
              ? (t = (0, A.m)((0, o.c)(), r, n.matrix))
              : n.translation || n.rotation || n.scale
              ? ((t = (0, o.b)(r)),
                n.translation && (0, A.j)(t, t, n.translation),
                n.rotation &&
                  ((D[3] = (0, f.g)(D, n.rotation)), (0, A.e)(t, t, D[3], D)),
                n.scale && (0, A.h)(t, t, n.scale))
              : (t = r),
              this.nodeTransformCache.set(e, t);
          }
          return t;
        }
        _wrapAccessor(e, t) {
          return new e(
            t.raw,
            t.byteOffset,
            t.byteStride,
            t.byteOffset +
              t.byteStride * (t.entryCount - 1) +
              t.componentByteSize * t.componentCount,
          );
        }
        _resolveUri(e) {
          return (0, T.hF)(e, this.baseUri);
        }
        _getNodeParent(e) {
          return this.nodeParentMap.get(e);
        }
        _checkVersionSupported() {
          const e = R.G.parse(this.json.asset.version, 'glTF');
          M.validate(e);
        }
        _checkRequiredExtensionsSupported() {
          const e = this.json,
            t = this.errorContext;
          e.extensionsRequired &&
            0 !== e.extensionsRequired.length &&
            t.errorUnsupported(
              'gltf loader was not able to load unsupported feature. Required extensions: ' +
                e.extensionsRequired.join(', '),
            );
        }
        _computeNodeParents() {
          this.json.nodes.forEach((e, t) => {
            e.children &&
              e.children.forEach((e) => {
                this.nodeParentMap.set(e, t);
              });
          });
        }
        async _loadTextureImageData(e, t, r) {
          const n = this.textureLoaders.get(e);
          if (n) return n;
          const o = this._createTextureLoader(t, r);
          return this.textureLoaders.set(e, o), o;
        }
        async _createTextureLoader(e, t) {
          const r = this.json.images[e.source];
          if (r.uri) return this.context.loadImage(this._resolveUri(r.uri), t);
          const n = this.errorContext;
          n.errorUnsupportedIf(
            null == r.bufferView,
            'Image bufferView must be defined.',
          ),
            n.errorUnsupportedIf(
              null == r.mimeType,
              'Image mimeType must be defined.',
            );
          const o = this.json.bufferViews[r.bufferView],
            s = await this.getBuffer(o.buffer, t);
          return (
            n.errorUnsupportedIf(
              null != o.byteStride,
              'byteStride not supported for image buffer',
            ),
            (async function (e, t) {
              return new Promise((r, n) => {
                const o = new Blob([e], { type: t }),
                  s = URL.createObjectURL(o),
                  i = new Image();
                i.addEventListener('load', () => {
                  URL.revokeObjectURL(s),
                    'decode' in i
                      ? i.decode().then(
                          () => r(i),
                          () => r(i),
                        )
                      : r(i);
                }),
                  i.addEventListener('error', (e) => {
                    URL.revokeObjectURL(s), n(e);
                  }),
                  (i.src = s);
              });
            })(
              new Uint8Array(
                s.buffer,
                s.byteOffset + (o.byteOffset || 0),
                o.byteLength,
              ),
              r.mimeType,
            )
          );
        }
      }
      const M = new R.G(2, 0, 'glTF'),
        B = (0, A.y)((0, o.c)(), Math.PI / 2),
        D = (0, N.a)(),
        P = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4 },
        y = {
          [u.g.BYTE]: 1,
          [u.g.UNSIGNED_BYTE]: 1,
          [u.g.SHORT]: 2,
          [u.g.UNSIGNED_SHORT]: 2,
          [u.g.FLOAT]: 4,
          [u.g.UNSIGNED_INT]: 4,
        };
      async function G(e) {
        return new Promise((t, r) => {
          const n = new Blob([e]),
            o = new FileReader();
          (o.onload = () => {
            const e = o.result;
            t(JSON.parse(e));
          }),
            (o.onerror = (e) => {
              r(e);
            }),
            o.readAsText(n);
        });
      }
      const F = {
        5120: 'BYTE',
        5121: 'UNSIGNED_BYTE',
        5122: 'SHORT',
        5123: 'UNSIGNED_SHORT',
        5125: 'UNSIGNED_INT',
        5126: 'FLOAT',
      };
      let w = 0;
      async function b(e, t, r = {}, s = !0) {
        const i = await m.load(e, V, t, r),
          a = 'gltf_' + w++,
          _ = {
            lods: [],
            materials: new Map(),
            textures: new Map(),
            meta: x(i),
          },
          E = !(
            !i.json.asset.extras ||
            'symbolResource' !== i.json.asset.extras.ESRI_type
          ),
          c = new Map();
        await g(i, async (e, t, E, T) => {
          var R;
          const A = null != (R = c.get(E)) ? R : 0;
          c.set(E, A + 1);
          const f = void 0 !== e.mode ? e.mode : u.MX.TRIANGLES,
            N =
              f === u.MX.TRIANGLES ||
              f === u.MX.TRIANGLE_STRIP ||
              f === u.MX.TRIANGLE_FAN
                ? f
                : null;
          if ((0, n.Wi)(N))
            return void V.warnUnsupported(
              'Unsupported primitive mode (' + X[f] + '). Skipping primitive.',
            );
          if (!i.hasPositions(e))
            return void V.warn(
              'Skipping primitive without POSITION vertex attribute.',
            );
          const l = i.getPositionData(e, r),
            S = i.getMaterial(e, r, s),
            d = i.hasNormals(e) ? i.getNormalData(e, r) : null,
            I = i.hasTangents(e) ? i.getTangentData(e, r) : null,
            O = i.hasTextureCoordinates(e)
              ? i.getTextureCoordinates(e, r)
              : null,
            C = i.hasVertexColors(e) ? i.getVertexColors(e, r) : null,
            p = i.getIndexData(e, r),
            h = {
              transform: (0, o.b)(t),
              attributes: {
                position: await l,
                normal: d ? await d : null,
                texCoord0: O ? await O : null,
                color: C ? await C : null,
                tangent: I ? await I : null,
              },
              indices: await p,
              primitiveType: N,
              material: v(_, await S, a),
            };
          let U = null;
          (0, n.pC)(_.meta) &&
            (0, n.pC)(_.meta.ESRI_lod) &&
            'screenSpaceRadius' === _.meta.ESRI_lod.metric &&
            (U = _.meta.ESRI_lod.thresholds[E]),
            (_.lods[E] = _.lods[E] || { parts: [], name: T, lodThreshold: U }),
            (_.lods[E].parts[A] = h);
        });
        for (const e of _.lods) e.parts = e.parts.filter((e) => !!e);
        return {
          model: _,
          meta: { isEsriSymbolResource: E, uri: i.uri },
          customMeta: {},
        };
      }
      function x(e) {
        const t = e.json;
        let r = null;
        return (
          t.nodes.forEach((e) => {
            const t = e.extras;
            (0, n.pC)(t) && (t.ESRI_proxyEllipsoid || t.ESRI_lod) && (r = t);
          }),
          r
        );
      }
      async function g(e, t) {
        const r = e.json,
          n = r.scenes[r.scene || 0].nodes,
          o = n.length > 1,
          s = [];
        for (const e of n) {
          const t = r.nodes[e];
          s.push(i(e, 0)),
            H(t) &&
              !o &&
              t.extensions.MSFT_lod.ids.forEach((e, t) => i(e, t + 1));
        }
        async function i(n, o) {
          const a = r.nodes[n],
            _ = e.getNodeTransform(n);
          if (
            (V.warnUnsupportedIf(
              null != a.weights,
              'Morph targets are not supported.',
            ),
            null != a.mesh)
          ) {
            const e = r.meshes[a.mesh];
            for (const r of e.primitives) s.push(t(r, _, o, e.name));
          }
          for (const e of a.children || []) s.push(i(e, o));
        }
        await Promise.all(s);
      }
      function H(e) {
        return (
          e.extensions &&
          e.extensions.MSFT_lod &&
          Array.isArray(e.extensions.MSFT_lod.ids)
        );
      }
      function v(e, t, r) {
        const n = (t) => {
            const n = `${r}_tex_${t && t.id}${t && t.name ? '_' + t.name : ''}`;
            if (t && !e.textures.has(n)) {
              const r = (function (e, t = {}) {
                return {
                  data: e,
                  parameters: {
                    wrap: { s: u.e8.REPEAT, t: u.e8.REPEAT, ...t.wrap },
                    noUnpackFlip: !0,
                    mipmap: !1,
                    ...t,
                  },
                };
              })(t.data, {
                wrap: { s: t.wrapS, t: t.wrapT },
                mipmap: Y.some((e) => e === t.minFilter),
                noUnpackFlip: !0,
              });
              e.textures.set(n, r);
            }
            return n;
          },
          o = `${r}_mat_${t.id}_${t.name}`;
        if (!e.materials.has(o)) {
          const r = (function (e = {}) {
            return {
              color: [1, 1, 1],
              opacity: 1,
              alphaMode: 'OPAQUE',
              alphaCutoff: 0.5,
              doubleSided: !1,
              castShadows: !0,
              receiveShadows: !0,
              receiveAmbientOcclustion: !0,
              textureColor: null,
              textureNormal: null,
              textureOcclusion: null,
              textureEmissive: null,
              textureMetallicRoughness: null,
              emissiveFactor: [0, 0, 0],
              metallicFactor: 1,
              roughnessFactor: 1,
              colorMixMode: 'multiply',
              ...e,
            };
          })({
            color: [t.color[0], t.color[1], t.color[2]],
            opacity: t.color[3],
            alphaMode: t.alphaMode,
            alphaCutoff: t.alphaCutoff,
            doubleSided: t.doubleSided,
            colorMixMode: t.ESRI_externalColorMixMode,
            textureColor: t.colorTexture ? n(t.colorTexture) : void 0,
            textureNormal: t.normalTexture ? n(t.normalTexture) : void 0,
            textureOcclusion: t.occlusionTexture
              ? n(t.occlusionTexture)
              : void 0,
            textureEmissive: t.emissiveTexture ? n(t.emissiveTexture) : void 0,
            textureMetallicRoughness: t.metallicRoughnessTexture
              ? n(t.metallicRoughnessTexture)
              : void 0,
            emissiveFactor: [
              t.emissiveFactor[0],
              t.emissiveFactor[1],
              t.emissiveFactor[2],
            ],
            metallicFactor: t.metallicFactor,
            roughnessFactor: t.roughnessFactor,
          });
          e.materials.set(o, r);
        }
        return o;
      }
      const V = new (class {
          error(e) {
            throw new s.Z('gltf-loader-error', e);
          }
          errorUnsupported(e) {
            throw new s.Z('gltf-loader-unsupported-feature', e);
          }
          errorUnsupportedIf(e, t) {
            e && this.errorUnsupported(t);
          }
          assert(e, t) {
            e || this.error(t);
          }
          warn(e) {
            i.warn(e);
          }
          warnUnsupported(e) {
            this.warn('[Unsupported Feature] ' + e);
          }
          warnUnsupportedIf(e, t) {
            e && this.warnUnsupported(t);
          }
        })(),
        Y = [u.cw.LINEAR_MIPMAP_LINEAR, u.cw.LINEAR_MIPMAP_NEAREST],
        X = [
          'POINTS',
          'LINES',
          'LINE_LOOP',
          'LINE_STRIP',
          'TRIANGLES',
          'TRIANGLE_STRIP',
          'TRIANGLE_FAN',
        ];
    },
    64291: (e, t, r) => {
      r.d(t, { NO: () => A, cM: () => R, p: () => c, DX: () => T });
      var n = r(17896),
        o = r(65617),
        s = r(22807);
      r(4307),
        r(22021),
        r(12981),
        (0, o.c)(),
        (0, o.c)(),
        new s.x(() => ({ origin: null, vector: null })),
        new s.x(function (e) {
          return e
            ? { origin: (0, o.a)(e.origin), vector: (0, o.a)(e.vector) }
            : { origin: (0, o.c)(), vector: (0, o.c)() };
        }),
        new s.x(() => ({ p0: null, p1: null, p2: null }));
      const i = (0, o.c)(),
        a = (0, o.c)();
      let _ = (() => {
        const e = new Uint32Array(131072);
        for (let t = 0; t < e.length; ++t) e[t] = t;
        return e;
      })();
      const u = new Uint16Array([0]),
        E = (() => {
          const e = new Uint16Array(65536);
          for (let t = 0; t < e.length; ++t) e[t] = t;
          return e;
        })();
      function c(e) {
        if (1 === e) return u;
        if (e < E.length) return new Uint16Array(E.buffer, 0, e);
        if (e > _.length) {
          const t = Math.max(2 * _.length, e);
          _ = new Uint32Array(t);
          for (let e = 0; e < _.length; e++) _[e] = e;
        }
        return new Uint32Array(_.buffer, 0, e);
      }
      function T(e) {
        if (1 === e) return new Uint16Array(u);
        if (e < E.length) return new Uint16Array(E.slice(0, e));
        if (e > _.length) {
          const t = new Uint32Array(e);
          for (let e = 0; e < t.length; e++) t[e] = e;
          return t;
        }
        return new Uint32Array(_.slice(0, e));
      }
      function R(e, t, r) {
        if (!e) return !1;
        const { size: o, data: s } = e;
        (0, n.s)(r, 0, 0, 0), (0, n.s)(S, 0, 0, 0);
        let _ = 0,
          u = 0;
        for (let e = 0; e < t.length - 2; e += 3) {
          const R = t[e + 0] * o,
            A = t[e + 1] * o,
            d = t[e + 2] * o;
          (0, n.s)(f, s[R + 0], s[R + 1], s[R + 2]),
            (0, n.s)(N, s[A + 0], s[A + 1], s[A + 2]),
            (0, n.s)(l, s[d + 0], s[d + 1], s[d + 2]);
          const I =
            ((E = f),
            (c = N),
            (T = l),
            (0, n.f)(i, c, E),
            (0, n.f)(a, T, E),
            (0, n.l)((0, n.c)(i, i, a)) / 2);
          I
            ? ((0, n.b)(f, f, N),
              (0, n.b)(f, f, l),
              (0, n.a)(f, f, (1 / 3) * I),
              (0, n.b)(r, r, f),
              (_ += I))
            : ((0, n.b)(S, S, f),
              (0, n.b)(S, S, N),
              (0, n.b)(S, S, l),
              (u += 3));
        }
        var E, c, T;
        return !(
          (0 === u && 0 === _) ||
          (0 !== _
            ? ((0, n.a)(r, r, 1 / _), 0)
            : 0 === u || ((0, n.a)(r, S, 1 / u), 0))
        );
      }
      function A(e, t, r) {
        if (!e || !t) return !1;
        const { size: o, data: s } = e;
        (0, n.s)(r, 0, 0, 0);
        let i = -1,
          a = 0;
        for (let e = 0; e < t.length; e++) {
          const n = t[e] * o;
          i !== n &&
            ((r[0] += s[n + 0]), (r[1] += s[n + 1]), (r[2] += s[n + 2]), a++),
            (i = n);
        }
        return a > 1 && (0, n.a)(r, r, 1 / a), a > 0;
      }
      const f = (0, o.c)(),
        N = (0, o.c)(),
        l = (0, o.c)(),
        S = (0, o.c)();
    },
    57758: (e, t, r) => {
      r.d(t, { K: () => n });
      const n = 2.1;
    },
    35371: (e, t, r) => {
      var n,
        o,
        s,
        i,
        a,
        _,
        u,
        E,
        c,
        T,
        R,
        A,
        f,
        N,
        l,
        S,
        d,
        I,
        O,
        C,
        p,
        h,
        U,
        L;
      r.d(t, {
        zi: () => s,
        db: () => i,
        w0: () => a,
        VY: () => L,
        wb: () => c,
        q_: () => M,
        Wf: () => u,
        g: () => E,
        Lu: () => m,
        OU: () => h,
        LR: () => _,
        qi: () => C,
        VI: () => N,
        Br: () => S,
        MX: () => o,
        Tg: () => d,
        _g: () => U,
        lP: () => l,
        xS: () => T,
        Lm: () => p,
        cw: () => R,
        No: () => f,
        e8: () => A,
        l1: () => I,
      }),
        (function (e) {
          (e[(e.DEPTH_BUFFER_BIT = 256)] = 'DEPTH_BUFFER_BIT'),
            (e[(e.STENCIL_BUFFER_BIT = 1024)] = 'STENCIL_BUFFER_BIT'),
            (e[(e.COLOR_BUFFER_BIT = 16384)] = 'COLOR_BUFFER_BIT');
        })(n || (n = {})),
        (function (e) {
          (e[(e.POINTS = 0)] = 'POINTS'),
            (e[(e.LINES = 1)] = 'LINES'),
            (e[(e.LINE_LOOP = 2)] = 'LINE_LOOP'),
            (e[(e.LINE_STRIP = 3)] = 'LINE_STRIP'),
            (e[(e.TRIANGLES = 4)] = 'TRIANGLES'),
            (e[(e.TRIANGLE_STRIP = 5)] = 'TRIANGLE_STRIP'),
            (e[(e.TRIANGLE_FAN = 6)] = 'TRIANGLE_FAN');
        })(o || (o = {})),
        (function (e) {
          (e[(e.ZERO = 0)] = 'ZERO'),
            (e[(e.ONE = 1)] = 'ONE'),
            (e[(e.SRC_COLOR = 768)] = 'SRC_COLOR'),
            (e[(e.ONE_MINUS_SRC_COLOR = 769)] = 'ONE_MINUS_SRC_COLOR'),
            (e[(e.SRC_ALPHA = 770)] = 'SRC_ALPHA'),
            (e[(e.ONE_MINUS_SRC_ALPHA = 771)] = 'ONE_MINUS_SRC_ALPHA'),
            (e[(e.DST_ALPHA = 772)] = 'DST_ALPHA'),
            (e[(e.ONE_MINUS_DST_ALPHA = 773)] = 'ONE_MINUS_DST_ALPHA'),
            (e[(e.DST_COLOR = 774)] = 'DST_COLOR'),
            (e[(e.ONE_MINUS_DST_COLOR = 775)] = 'ONE_MINUS_DST_COLOR'),
            (e[(e.SRC_ALPHA_SATURATE = 776)] = 'SRC_ALPHA_SATURATE'),
            (e[(e.CONSTANT_COLOR = 32769)] = 'CONSTANT_COLOR'),
            (e[(e.ONE_MINUS_CONSTANT_COLOR = 32770)] =
              'ONE_MINUS_CONSTANT_COLOR'),
            (e[(e.CONSTANT_ALPHA = 32771)] = 'CONSTANT_ALPHA'),
            (e[(e.ONE_MINUS_CONSTANT_ALPHA = 32772)] =
              'ONE_MINUS_CONSTANT_ALPHA');
        })(s || (s = {})),
        (function (e) {
          (e[(e.ADD = 32774)] = 'ADD'),
            (e[(e.SUBTRACT = 32778)] = 'SUBTRACT'),
            (e[(e.REVERSE_SUBTRACT = 32779)] = 'REVERSE_SUBTRACT');
        })(i || (i = {})),
        (function (e) {
          (e[(e.ARRAY_BUFFER = 34962)] = 'ARRAY_BUFFER'),
            (e[(e.ELEMENT_ARRAY_BUFFER = 34963)] = 'ELEMENT_ARRAY_BUFFER'),
            (e[(e.UNIFORM_BUFFER = 35345)] = 'UNIFORM_BUFFER'),
            (e[(e.PIXEL_PACK_BUFFER = 35051)] = 'PIXEL_PACK_BUFFER'),
            (e[(e.PIXEL_UNPACK_BUFFER = 35052)] = 'PIXEL_UNPACK_BUFFER'),
            (e[(e.COPY_READ_BUFFER = 36662)] = 'COPY_READ_BUFFER'),
            (e[(e.COPY_WRITE_BUFFER = 36663)] = 'COPY_WRITE_BUFFER');
        })(a || (a = {})),
        (function (e) {
          (e[(e.FRONT = 1028)] = 'FRONT'),
            (e[(e.BACK = 1029)] = 'BACK'),
            (e[(e.FRONT_AND_BACK = 1032)] = 'FRONT_AND_BACK');
        })(_ || (_ = {})),
        (function (e) {
          (e[(e.CW = 2304)] = 'CW'), (e[(e.CCW = 2305)] = 'CCW');
        })(u || (u = {})),
        (function (e) {
          (e[(e.BYTE = 5120)] = 'BYTE'),
            (e[(e.UNSIGNED_BYTE = 5121)] = 'UNSIGNED_BYTE'),
            (e[(e.SHORT = 5122)] = 'SHORT'),
            (e[(e.UNSIGNED_SHORT = 5123)] = 'UNSIGNED_SHORT'),
            (e[(e.INT = 5124)] = 'INT'),
            (e[(e.UNSIGNED_INT = 5125)] = 'UNSIGNED_INT'),
            (e[(e.FLOAT = 5126)] = 'FLOAT');
        })(E || (E = {})),
        (function (e) {
          (e[(e.NEVER = 512)] = 'NEVER'),
            (e[(e.LESS = 513)] = 'LESS'),
            (e[(e.EQUAL = 514)] = 'EQUAL'),
            (e[(e.LEQUAL = 515)] = 'LEQUAL'),
            (e[(e.GREATER = 516)] = 'GREATER'),
            (e[(e.NOTEQUAL = 517)] = 'NOTEQUAL'),
            (e[(e.GEQUAL = 518)] = 'GEQUAL'),
            (e[(e.ALWAYS = 519)] = 'ALWAYS');
        })(c || (c = {})),
        (function (e) {
          (e[(e.ZERO = 0)] = 'ZERO'),
            (e[(e.KEEP = 7680)] = 'KEEP'),
            (e[(e.REPLACE = 7681)] = 'REPLACE'),
            (e[(e.INCR = 7682)] = 'INCR'),
            (e[(e.DECR = 7683)] = 'DECR'),
            (e[(e.INVERT = 5386)] = 'INVERT'),
            (e[(e.INCR_WRAP = 34055)] = 'INCR_WRAP'),
            (e[(e.DECR_WRAP = 34056)] = 'DECR_WRAP');
        })(T || (T = {})),
        (function (e) {
          (e[(e.NEAREST = 9728)] = 'NEAREST'),
            (e[(e.LINEAR = 9729)] = 'LINEAR'),
            (e[(e.NEAREST_MIPMAP_NEAREST = 9984)] = 'NEAREST_MIPMAP_NEAREST'),
            (e[(e.LINEAR_MIPMAP_NEAREST = 9985)] = 'LINEAR_MIPMAP_NEAREST'),
            (e[(e.NEAREST_MIPMAP_LINEAR = 9986)] = 'NEAREST_MIPMAP_LINEAR'),
            (e[(e.LINEAR_MIPMAP_LINEAR = 9987)] = 'LINEAR_MIPMAP_LINEAR');
        })(R || (R = {})),
        (function (e) {
          (e[(e.CLAMP_TO_EDGE = 33071)] = 'CLAMP_TO_EDGE'),
            (e[(e.REPEAT = 10497)] = 'REPEAT'),
            (e[(e.MIRRORED_REPEAT = 33648)] = 'MIRRORED_REPEAT');
        })(A || (A = {})),
        (function (e) {
          (e[(e.TEXTURE_2D = 3553)] = 'TEXTURE_2D'),
            (e[(e.TEXTURE_CUBE_MAP = 34067)] = 'TEXTURE_CUBE_MAP'),
            (e[(e.TEXTURE_3D = 32879)] = 'TEXTURE_3D'),
            (e[(e.TEXTURE_CUBE_MAP_POSITIVE_X = 34069)] =
              'TEXTURE_CUBE_MAP_POSITIVE_X'),
            (e[(e.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070)] =
              'TEXTURE_CUBE_MAP_NEGATIVE_X'),
            (e[(e.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071)] =
              'TEXTURE_CUBE_MAP_POSITIVE_Y'),
            (e[(e.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072)] =
              'TEXTURE_CUBE_MAP_NEGATIVE_Y'),
            (e[(e.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073)] =
              'TEXTURE_CUBE_MAP_POSITIVE_Z'),
            (e[(e.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074)] =
              'TEXTURE_CUBE_MAP_NEGATIVE_Z'),
            (e[(e.TEXTURE_2D_ARRAY = 35866)] = 'TEXTURE_2D_ARRAY');
        })(f || (f = {})),
        (function (e) {
          (e[(e.DEPTH_COMPONENT = 6402)] = 'DEPTH_COMPONENT'),
            (e[(e.DEPTH_STENCIL = 34041)] = 'DEPTH_STENCIL'),
            (e[(e.ALPHA = 6406)] = 'ALPHA'),
            (e[(e.RGB = 6407)] = 'RGB'),
            (e[(e.RGBA = 6408)] = 'RGBA'),
            (e[(e.LUMINANCE = 6409)] = 'LUMINANCE'),
            (e[(e.LUMINANCE_ALPHA = 6410)] = 'LUMINANCE_ALPHA'),
            (e[(e.RED = 6403)] = 'RED'),
            (e[(e.RG = 33319)] = 'RG'),
            (e[(e.RED_INTEGER = 36244)] = 'RED_INTEGER'),
            (e[(e.RG_INTEGER = 33320)] = 'RG_INTEGER'),
            (e[(e.RGB_INTEGER = 36248)] = 'RGB_INTEGER'),
            (e[(e.RGBA_INTEGER = 36249)] = 'RGBA_INTEGER');
        })(N || (N = {})),
        (function (e) {
          (e[(e.RGBA4 = 32854)] = 'RGBA4'),
            (e[(e.R16F = 33325)] = 'R16F'),
            (e[(e.RG16F = 33327)] = 'RG16F'),
            (e[(e.RGB32F = 34837)] = 'RGB32F'),
            (e[(e.RGBA16F = 34842)] = 'RGBA16F'),
            (e[(e.R32F = 33326)] = 'R32F'),
            (e[(e.RG32F = 33328)] = 'RG32F'),
            (e[(e.RGBA32F = 34836)] = 'RGBA32F'),
            (e[(e.R11F_G11F_B10F = 35898)] = 'R11F_G11F_B10F'),
            (e[(e.RGB8 = 32849)] = 'RGB8'),
            (e[(e.RGBA8 = 32856)] = 'RGBA8'),
            (e[(e.RGB5_A1 = 32855)] = 'RGB5_A1'),
            (e[(e.R8 = 33321)] = 'R8'),
            (e[(e.RG8 = 33323)] = 'RG8'),
            (e[(e.R8I = 33329)] = 'R8I'),
            (e[(e.R8UI = 33330)] = 'R8UI'),
            (e[(e.R16I = 33331)] = 'R16I'),
            (e[(e.R16UI = 33332)] = 'R16UI'),
            (e[(e.R32I = 33333)] = 'R32I'),
            (e[(e.R32UI = 33334)] = 'R32UI'),
            (e[(e.RG8I = 33335)] = 'RG8I'),
            (e[(e.RG8UI = 33336)] = 'RG8UI'),
            (e[(e.RG16I = 33337)] = 'RG16I'),
            (e[(e.RG16UI = 33338)] = 'RG16UI'),
            (e[(e.RG32I = 33339)] = 'RG32I'),
            (e[(e.RG32UI = 33340)] = 'RG32UI'),
            (e[(e.RGB16F = 34843)] = 'RGB16F'),
            (e[(e.RGB9_E5 = 35901)] = 'RGB9_E5'),
            (e[(e.SRGB8 = 35905)] = 'SRGB8'),
            (e[(e.SRGB8_ALPHA8 = 35907)] = 'SRGB8_ALPHA8'),
            (e[(e.RGB565 = 36194)] = 'RGB565'),
            (e[(e.RGBA32UI = 36208)] = 'RGBA32UI'),
            (e[(e.RGB32UI = 36209)] = 'RGB32UI'),
            (e[(e.RGBA16UI = 36214)] = 'RGBA16UI'),
            (e[(e.RGB16UI = 36215)] = 'RGB16UI'),
            (e[(e.RGBA8UI = 36220)] = 'RGBA8UI'),
            (e[(e.RGB8UI = 36221)] = 'RGB8UI'),
            (e[(e.RGBA32I = 36226)] = 'RGBA32I'),
            (e[(e.RGB32I = 36227)] = 'RGB32I'),
            (e[(e.RGBA16I = 36232)] = 'RGBA16I'),
            (e[(e.RGB16I = 36233)] = 'RGB16I'),
            (e[(e.RGBA8I = 36238)] = 'RGBA8I'),
            (e[(e.RGB8I = 36239)] = 'RGB8I'),
            (e[(e.R8_SNORM = 36756)] = 'R8_SNORM'),
            (e[(e.RG8_SNORM = 36757)] = 'RG8_SNORM'),
            (e[(e.RGB8_SNORM = 36758)] = 'RGB8_SNORM'),
            (e[(e.RGBA8_SNORM = 36759)] = 'RGBA8_SNORM'),
            (e[(e.RGB10_A2 = 32857)] = 'RGB10_A2'),
            (e[(e.RGB10_A2UI = 36975)] = 'RGB10_A2UI');
        })(l || (l = {})),
        (function (e) {
          (e[(e.FLOAT = 5126)] = 'FLOAT'),
            (e[(e.UNSIGNED_BYTE = 5121)] = 'UNSIGNED_BYTE'),
            (e[(e.UNSIGNED_INT_24_8 = 34042)] = 'UNSIGNED_INT_24_8'),
            (e[(e.UNSIGNED_SHORT_4_4_4_4 = 32819)] = 'UNSIGNED_SHORT_4_4_4_4'),
            (e[(e.UNSIGNED_SHORT_5_5_5_1 = 32820)] = 'UNSIGNED_SHORT_5_5_5_1'),
            (e[(e.UNSIGNED_SHORT_5_6_5 = 33635)] = 'UNSIGNED_SHORT_5_6_5'),
            (e[(e.BYTE = 5120)] = 'BYTE'),
            (e[(e.UNSIGNED_SHORT = 5123)] = 'UNSIGNED_SHORT'),
            (e[(e.SHORT = 5122)] = 'SHORT'),
            (e[(e.UNSIGNED_INT = 5125)] = 'UNSIGNED_INT'),
            (e[(e.INT = 5124)] = 'INT'),
            (e[(e.HALF_FLOAT = 5131)] = 'HALF_FLOAT'),
            (e[(e.UNSIGNED_INT_2_10_10_10_REV = 33640)] =
              'UNSIGNED_INT_2_10_10_10_REV'),
            (e[(e.UNSIGNED_INT_10F_11F_11F_REV = 35899)] =
              'UNSIGNED_INT_10F_11F_11F_REV'),
            (e[(e.UNSIGNED_INT_5_9_9_9_REV = 35902)] =
              'UNSIGNED_INT_5_9_9_9_REV'),
            (e[(e.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269)] =
              'FLOAT_32_UNSIGNED_INT_24_8_REV');
        })(S || (S = {})),
        (function (e) {
          (e[(e.DEPTH_COMPONENT16 = 33189)] = 'DEPTH_COMPONENT16'),
            (e[(e.STENCIL_INDEX8 = 36168)] = 'STENCIL_INDEX8'),
            (e[(e.DEPTH_STENCIL = 34041)] = 'DEPTH_STENCIL'),
            (e[(e.DEPTH_COMPONENT24 = 33190)] = 'DEPTH_COMPONENT24'),
            (e[(e.DEPTH_COMPONENT32F = 36012)] = 'DEPTH_COMPONENT32F'),
            (e[(e.DEPTH24_STENCIL8 = 35056)] = 'DEPTH24_STENCIL8'),
            (e[(e.DEPTH32F_STENCIL8 = 36013)] = 'DEPTH32F_STENCIL8');
        })(d || (d = {})),
        (function (e) {
          (e[(e.STATIC_DRAW = 35044)] = 'STATIC_DRAW'),
            (e[(e.DYNAMIC_DRAW = 35048)] = 'DYNAMIC_DRAW'),
            (e[(e.STREAM_DRAW = 35040)] = 'STREAM_DRAW'),
            (e[(e.STATIC_READ = 35045)] = 'STATIC_READ'),
            (e[(e.DYNAMIC_READ = 35049)] = 'DYNAMIC_READ'),
            (e[(e.STREAM_READ = 35041)] = 'STREAM_READ'),
            (e[(e.STATIC_COPY = 35046)] = 'STATIC_COPY'),
            (e[(e.DYNAMIC_COPY = 35050)] = 'DYNAMIC_COPY'),
            (e[(e.STREAM_COPY = 35042)] = 'STREAM_COPY');
        })(I || (I = {})),
        (function (e) {
          (e[(e.FRAGMENT_SHADER = 35632)] = 'FRAGMENT_SHADER'),
            (e[(e.VERTEX_SHADER = 35633)] = 'VERTEX_SHADER');
        })(O || (O = {})),
        (function (e) {
          (e[(e.FRAMEBUFFER = 36160)] = 'FRAMEBUFFER'),
            (e[(e.READ_FRAMEBUFFER = 36008)] = 'READ_FRAMEBUFFER'),
            (e[(e.DRAW_FRAMEBUFFER = 36009)] = 'DRAW_FRAMEBUFFER');
        })(C || (C = {})),
        (function (e) {
          (e[(e.TEXTURE = 0)] = 'TEXTURE'),
            (e[(e.RENDER_BUFFER = 1)] = 'RENDER_BUFFER'),
            (e[(e.CUBEMAP = 2)] = 'CUBEMAP');
        })(p || (p = {})),
        (function (e) {
          (e[(e.NONE = 0)] = 'NONE'),
            (e[(e.DEPTH_RENDER_BUFFER = 1)] = 'DEPTH_RENDER_BUFFER'),
            (e[(e.STENCIL_RENDER_BUFFER = 2)] = 'STENCIL_RENDER_BUFFER'),
            (e[(e.DEPTH_STENCIL_RENDER_BUFFER = 3)] =
              'DEPTH_STENCIL_RENDER_BUFFER'),
            (e[(e.DEPTH_STENCIL_TEXTURE = 4)] = 'DEPTH_STENCIL_TEXTURE');
        })(h || (h = {})),
        (function (e) {
          (e[(e.Texture = 0)] = 'Texture'),
            (e[(e.Buffer = 1)] = 'Buffer'),
            (e[(e.VAO = 2)] = 'VAO'),
            (e[(e.Shader = 3)] = 'Shader'),
            (e[(e.Program = 4)] = 'Program'),
            (e[(e.Framebuffer = 5)] = 'Framebuffer'),
            (e[(e.Renderbuffer = 6)] = 'Renderbuffer'),
            (e[(e.Sync = 7)] = 'Sync'),
            (e[(e.COUNT = 8)] = 'COUNT');
        })(U || (U = {})),
        (function (e) {
          (e[(e.COLOR_ATTACHMENT0 = 36064)] = 'COLOR_ATTACHMENT0'),
            (e[(e.COLOR_ATTACHMENT1 = 36065)] = 'COLOR_ATTACHMENT1'),
            (e[(e.COLOR_ATTACHMENT2 = 36066)] = 'COLOR_ATTACHMENT2'),
            (e[(e.COLOR_ATTACHMENT3 = 36067)] = 'COLOR_ATTACHMENT3'),
            (e[(e.COLOR_ATTACHMENT4 = 36068)] = 'COLOR_ATTACHMENT4'),
            (e[(e.COLOR_ATTACHMENT5 = 36069)] = 'COLOR_ATTACHMENT5'),
            (e[(e.COLOR_ATTACHMENT6 = 36070)] = 'COLOR_ATTACHMENT6'),
            (e[(e.COLOR_ATTACHMENT7 = 36071)] = 'COLOR_ATTACHMENT7'),
            (e[(e.COLOR_ATTACHMENT8 = 36072)] = 'COLOR_ATTACHMENT8'),
            (e[(e.COLOR_ATTACHMENT9 = 36073)] = 'COLOR_ATTACHMENT9'),
            (e[(e.COLOR_ATTACHMENT10 = 36074)] = 'COLOR_ATTACHMENT10'),
            (e[(e.COLOR_ATTACHMENT11 = 36075)] = 'COLOR_ATTACHMENT11'),
            (e[(e.COLOR_ATTACHMENT12 = 36076)] = 'COLOR_ATTACHMENT12'),
            (e[(e.COLOR_ATTACHMENT13 = 36077)] = 'COLOR_ATTACHMENT13'),
            (e[(e.COLOR_ATTACHMENT14 = 36078)] = 'COLOR_ATTACHMENT14'),
            (e[(e.COLOR_ATTACHMENT15 = 36079)] = 'COLOR_ATTACHMENT15');
        })(L || (L = {}));
      const m = 33306;
      var M, B, D, P, y, G, F;
      !(function (e) {
        (e[(e.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776)] =
          'COMPRESSED_RGB_S3TC_DXT1_EXT'),
          (e[(e.COMPRESSED_RGBA_S3TC_DXT1_EXT = 33777)] =
            'COMPRESSED_RGBA_S3TC_DXT1_EXT'),
          (e[(e.COMPRESSED_RGBA_S3TC_DXT3_EXT = 33778)] =
            'COMPRESSED_RGBA_S3TC_DXT3_EXT'),
          (e[(e.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779)] =
            'COMPRESSED_RGBA_S3TC_DXT5_EXT'),
          (e[(e.COMPRESSED_R11_EAC = 37488)] = 'COMPRESSED_R11_EAC'),
          (e[(e.COMPRESSED_SIGNED_R11_EAC = 37489)] =
            'COMPRESSED_SIGNED_R11_EAC'),
          (e[(e.COMPRESSED_RG11_EAC = 37490)] = 'COMPRESSED_RG11_EAC'),
          (e[(e.COMPRESSED_SIGNED_RG11_EAC = 37491)] =
            'COMPRESSED_SIGNED_RG11_EAC'),
          (e[(e.COMPRESSED_RGB8_ETC2 = 37492)] = 'COMPRESSED_RGB8_ETC2'),
          (e[(e.COMPRESSED_SRGB8_ETC2 = 37493)] = 'COMPRESSED_SRGB8_ETC2'),
          (e[(e.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494)] =
            'COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2'),
          (e[(e.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495)] =
            'COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2'),
          (e[(e.COMPRESSED_RGBA8_ETC2_EAC = 37496)] =
            'COMPRESSED_RGBA8_ETC2_EAC'),
          (e[(e.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497)] =
            'COMPRESSED_SRGB8_ALPHA8_ETC2_EAC');
      })(M || (M = {})),
        (function (e) {
          (e[(e.FLOAT = 5126)] = 'FLOAT'),
            (e[(e.FLOAT_VEC2 = 35664)] = 'FLOAT_VEC2'),
            (e[(e.FLOAT_VEC3 = 35665)] = 'FLOAT_VEC3'),
            (e[(e.FLOAT_VEC4 = 35666)] = 'FLOAT_VEC4'),
            (e[(e.INT = 5124)] = 'INT'),
            (e[(e.INT_VEC2 = 35667)] = 'INT_VEC2'),
            (e[(e.INT_VEC3 = 35668)] = 'INT_VEC3'),
            (e[(e.INT_VEC4 = 35669)] = 'INT_VEC4'),
            (e[(e.BOOL = 35670)] = 'BOOL'),
            (e[(e.BOOL_VEC2 = 35671)] = 'BOOL_VEC2'),
            (e[(e.BOOL_VEC3 = 35672)] = 'BOOL_VEC3'),
            (e[(e.BOOL_VEC4 = 35673)] = 'BOOL_VEC4'),
            (e[(e.FLOAT_MAT2 = 35674)] = 'FLOAT_MAT2'),
            (e[(e.FLOAT_MAT3 = 35675)] = 'FLOAT_MAT3'),
            (e[(e.FLOAT_MAT4 = 35676)] = 'FLOAT_MAT4'),
            (e[(e.SAMPLER_2D = 35678)] = 'SAMPLER_2D'),
            (e[(e.SAMPLER_CUBE = 35680)] = 'SAMPLER_CUBE'),
            (e[(e.UNSIGNED_INT = 5125)] = 'UNSIGNED_INT'),
            (e[(e.UNSIGNED_INT_VEC2 = 36294)] = 'UNSIGNED_INT_VEC2'),
            (e[(e.UNSIGNED_INT_VEC3 = 36295)] = 'UNSIGNED_INT_VEC3'),
            (e[(e.UNSIGNED_INT_VEC4 = 36296)] = 'UNSIGNED_INT_VEC4'),
            (e[(e.FLOAT_MAT2x3 = 35685)] = 'FLOAT_MAT2x3'),
            (e[(e.FLOAT_MAT2x4 = 35686)] = 'FLOAT_MAT2x4'),
            (e[(e.FLOAT_MAT3x2 = 35687)] = 'FLOAT_MAT3x2'),
            (e[(e.FLOAT_MAT3x4 = 35688)] = 'FLOAT_MAT3x4'),
            (e[(e.FLOAT_MAT4x2 = 35689)] = 'FLOAT_MAT4x2'),
            (e[(e.FLOAT_MAT4x3 = 35690)] = 'FLOAT_MAT4x3'),
            (e[(e.SAMPLER_3D = 35679)] = 'SAMPLER_3D'),
            (e[(e.SAMPLER_2D_SHADOW = 35682)] = 'SAMPLER_2D_SHADOW'),
            (e[(e.SAMPLER_2D_ARRAY = 36289)] = 'SAMPLER_2D_ARRAY'),
            (e[(e.SAMPLER_2D_ARRAY_SHADOW = 36292)] =
              'SAMPLER_2D_ARRAY_SHADOW'),
            (e[(e.SAMPLER_CUBE_SHADOW = 36293)] = 'SAMPLER_CUBE_SHADOW'),
            (e[(e.INT_SAMPLER_2D = 36298)] = 'INT_SAMPLER_2D'),
            (e[(e.INT_SAMPLER_3D = 36299)] = 'INT_SAMPLER_3D'),
            (e[(e.INT_SAMPLER_CUBE = 36300)] = 'INT_SAMPLER_CUBE'),
            (e[(e.INT_SAMPLER_2D_ARRAY = 36303)] = 'INT_SAMPLER_2D_ARRAY'),
            (e[(e.UNSIGNED_INT_SAMPLER_2D = 36306)] =
              'UNSIGNED_INT_SAMPLER_2D'),
            (e[(e.UNSIGNED_INT_SAMPLER_3D = 36307)] =
              'UNSIGNED_INT_SAMPLER_3D'),
            (e[(e.UNSIGNED_INT_SAMPLER_CUBE = 36308)] =
              'UNSIGNED_INT_SAMPLER_CUBE'),
            (e[(e.UNSIGNED_INT_SAMPLER_2D_ARRAY = 36311)] =
              'UNSIGNED_INT_SAMPLER_2D_ARRAY');
        })(B || (B = {})),
        (function (e) {
          (e[(e.OBJECT_TYPE = 37138)] = 'OBJECT_TYPE'),
            (e[(e.SYNC_CONDITION = 37139)] = 'SYNC_CONDITION'),
            (e[(e.SYNC_STATUS = 37140)] = 'SYNC_STATUS'),
            (e[(e.SYNC_FLAGS = 37141)] = 'SYNC_FLAGS');
        })(D || (D = {})),
        (function (e) {
          (e[(e.UNSIGNALED = 37144)] = 'UNSIGNALED'),
            (e[(e.SIGNALED = 37145)] = 'SIGNALED');
        })(P || (P = {})),
        (function (e) {
          (e[(e.ALREADY_SIGNALED = 37146)] = 'ALREADY_SIGNALED'),
            (e[(e.TIMEOUT_EXPIRED = 37147)] = 'TIMEOUT_EXPIRED'),
            (e[(e.CONDITION_SATISFIED = 37148)] = 'CONDITION_SATISFIED'),
            (e[(e.WAIT_FAILED = 37149)] = 'WAIT_FAILED');
        })(y || (y = {})),
        (function (e) {
          e[(e.SYNC_GPU_COMMANDS_COMPLETE = 37143)] =
            'SYNC_GPU_COMMANDS_COMPLETE';
        })(G || (G = {})),
        (function (e) {
          e[(e.SYNC_FLUSH_COMMANDS_BIT = 1)] = 'SYNC_FLUSH_COMMANDS_BIT';
        })(F || (F = {}));
    },
  },
]);
