'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [3852],
  {
    43852: (r, e, f) => {
      f.r(e), f.d(e, { l: () => b });
      var i,
        a,
        n,
        t = { exports: {} };
      (i = t),
        (a = function () {
          return {
            load: function (r) {
              const e = r.locateFile,
                f = {};
              var a = void 0 !== a ? a : {};
              const n = (() => {
                let r;
                return {
                  resolve: (e) => r(e),
                  promise: new Promise((e) => (r = e)),
                };
              })();
              (a.locateFile = e),
                (a.onRuntimeInitialized = () => {
                  n.resolve(f);
                }),
                (f.Module = a),
                (f.whenLoaded = () => n.promise);
              var t,
                o = {};
              for (t in a) a.hasOwnProperty(t) && (o[t] = a[t]);
              var b,
                k,
                u,
                c,
                s,
                A = 'object' == typeof window,
                l = 'function' == typeof importScripts,
                v =
                  'object' == typeof process &&
                  'object' == typeof process.versions &&
                  'string' == typeof process.versions.node,
                d = '';
              v
                ? ((d = l ? require('path').dirname(d) + '/' : __dirname + '/'),
                  (b = function (r, e) {
                    var f = J(r);
                    return f
                      ? e
                        ? f
                        : f.toString()
                      : (c || (c = require('fs')),
                        s || (s = require('path')),
                        (r = s.normalize(r)),
                        c.readFileSync(r, e ? null : 'utf8'));
                  }),
                  (u = function (r) {
                    var e = b(r, !0);
                    return (
                      e.buffer || (e = new Uint8Array(e)),
                      (function (r, e) {
                        r || H('Assertion failed: ' + void 0);
                      })(e.buffer),
                      e
                    );
                  }),
                  (k = function (r, e, f) {
                    var i = J(r);
                    i && e(i),
                      c || (c = require('fs')),
                      s || (s = require('path')),
                      (r = s.normalize(r)),
                      c.readFile(r, function (r, i) {
                        r ? f(r) : e(i.buffer);
                      });
                  }),
                  process.argv.length > 1 &&
                    process.argv[1].replace(/\\/g, '/'),
                  process.argv.slice(2),
                  (i.exports = a),
                  process.on('uncaughtException', function (r) {
                    if (!(r instanceof fr)) throw r;
                  }),
                  process.on('unhandledRejection', H),
                  (a.inspect = function () {
                    return '[Emscripten Module object]';
                  }))
                : (A || l) &&
                  (l
                    ? (d = self.location.href)
                    : 'undefined' != typeof document &&
                      document.currentScript &&
                      (d = document.currentScript.src),
                  (d =
                    0 !== d.indexOf('blob:')
                      ? d.substr(0, d.lastIndexOf('/') + 1)
                      : ''),
                  (b = function (r) {
                    try {
                      var e = new XMLHttpRequest();
                      return e.open('GET', r, !1), e.send(null), e.responseText;
                    } catch (e) {
                      var f = J(r);
                      if (f)
                        return (function (r) {
                          for (var e = [], f = 0; f < r.length; f++) {
                            var i = r[f];
                            i > 255 && (i &= 255),
                              e.push(String.fromCharCode(i));
                          }
                          return e.join('');
                        })(f);
                      throw e;
                    }
                  }),
                  l &&
                    (u = function (r) {
                      try {
                        var e = new XMLHttpRequest();
                        return (
                          e.open('GET', r, !1),
                          (e.responseType = 'arraybuffer'),
                          e.send(null),
                          new Uint8Array(e.response)
                        );
                      } catch (e) {
                        var f = J(r);
                        if (f) return f;
                        throw e;
                      }
                    }),
                  (k = function (r, e, f) {
                    var i = new XMLHttpRequest();
                    i.open('GET', r, !0),
                      (i.responseType = 'arraybuffer'),
                      (i.onload = function () {
                        if (200 == i.status || (0 == i.status && i.response))
                          e(i.response);
                        else {
                          var a = J(r);
                          a ? e(a.buffer) : f();
                        }
                      }),
                      (i.onerror = f),
                      i.send(null);
                  }));
              var h = a.print || console.log.bind(console),
                p = a.printErr || console.warn.bind(console);
              for (t in o) o.hasOwnProperty(t) && (a[t] = o[t]);
              (o = null), a.arguments, a.thisProgram, a.quit;
              var w,
                m = 0;
              a.wasmBinary && (w = a.wasmBinary), a.noExitRuntime;
              var y,
                g = {
                  Memory: function (r) {
                    this.buffer = new ArrayBuffer(65536 * r.initial);
                  },
                  Module: function (r) {},
                  Instance: function (r, e) {
                    this.exports = (function (r) {
                      for (var e, f = new Uint8Array(123), i = 25; i >= 0; --i)
                        (f[48 + i] = 52 + i),
                          (f[65 + i] = i),
                          (f[97 + i] = 26 + i);
                      function a(r, e, i) {
                        for (
                          var a,
                            n,
                            t = 0,
                            o = e,
                            b = i.length,
                            k =
                              e +
                              ((3 * b) >> 2) -
                              ('=' == i[b - 2]) -
                              ('=' == i[b - 1]);
                          t < b;
                          t += 4
                        )
                          (a = f[i.charCodeAt(t + 1)]),
                            (n = f[i.charCodeAt(t + 2)]),
                            (r[o++] = (f[i.charCodeAt(t)] << 2) | (a >> 4)),
                            o < k && (r[o++] = (a << 4) | (n >> 2)),
                            o < k &&
                              (r[o++] = (n << 6) | f[i.charCodeAt(t + 3)]);
                      }
                      function n(r) {
                        a(
                          e,
                          1024,
                          'LSsgICAwWDB4AC0wWCswWCAwWC0weCsweCAweABuYW4AaW5mAE5BTgBJTkYALgAobnVsbCkAR290IGVycm9yICVkCgAlZCAlZCAoJWYsJWYpLCglZiwlZiksKCVmLCVmKSAK',
                        ),
                          a(e, 1132, 'BwAAAAAAAD8AAAA/AAAAAAAAAAB4Bg=='),
                          a(
                            e,
                            1168,
                            'EQAKABEREQAAAAAFAAAAAAAACQAAAAALAAAAAAAAAAARAA8KERERAwoHAAEACQsLAAAJBgsAAAsABhEAAAARERE=',
                          ),
                          a(
                            e,
                            1249,
                            'CwAAAAAAAAAAEQAKChEREQAKAAACAAkLAAAACQALAAAL',
                          ),
                          a(e, 1307, 'DA=='),
                          a(e, 1319, 'DAAAAAAMAAAAAAkMAAAAAAAMAAAM'),
                          a(e, 1365, 'Dg=='),
                          a(e, 1377, 'DQAAAAQNAAAAAAkOAAAAAAAOAAAO'),
                          a(e, 1423, 'EA=='),
                          a(
                            e,
                            1435,
                            'DwAAAAAPAAAAAAkQAAAAAAAQAAAQAAASAAAAEhIS',
                          ),
                          a(e, 1490, 'EgAAABISEgAAAAAAAAk='),
                          a(e, 1539, 'Cw=='),
                          a(e, 1551, 'CgAAAAAKAAAAAAkLAAAAAAALAAAL'),
                          a(e, 1597, 'DA=='),
                          a(
                            e,
                            1609,
                            'DAAAAAAMAAAAAAkMAAAAAAAMAAAMAAAwMTIzNDU2Nzg5QUJDREVG',
                          ),
                          a(e, 1648, '4A9QAAAAAAAF'),
                          a(e, 1668, 'KA=='),
                          a(e, 1692, 'KQAAACoAAACYCwAAAAQ='),
                          a(e, 1716, 'AQ=='),
                          a(e, 1731, 'Cv////8='),
                          a(e, 1972, 'wA8=');
                      }
                      (f[43] = 62), (f[47] = 63);
                      var t = new ArrayBuffer(16),
                        o = new Int32Array(t),
                        b = new Float64Array(t);
                      function k(r) {
                        return o[r];
                      }
                      function u(r, e) {
                        o[r] = e;
                      }
                      function c() {
                        return b[0];
                      }
                      function s(r) {
                        b[0] = r;
                      }
                      return (function (r) {
                        var f = r.a,
                          i = f.buffer;
                        f.grow = function (r) {
                          r |= 0;
                          var n = 0 | Or(),
                            k = (n + r) | 0;
                          if (n < k && k < 65536) {
                            var u = new ArrayBuffer(h(k, 65536));
                            new Int8Array(u).set(a),
                              (a = new Int8Array(u)),
                              (t = new Int16Array(u)),
                              (o = new Int32Array(u)),
                              (b = new Uint8Array(u)),
                              (A = new Uint16Array(u)),
                              (l = new Uint32Array(u)),
                              (v = new Float32Array(u)),
                              (d = new Float64Array(u)),
                              (i = u),
                              (f.buffer = i),
                              (e = b);
                          }
                          return n;
                        };
                        var a = new Int8Array(i),
                          t = new Int16Array(i),
                          o = new Int32Array(i),
                          b = new Uint8Array(i),
                          A = new Uint16Array(i),
                          l = new Uint32Array(i),
                          v = new Float32Array(i),
                          d = new Float64Array(i),
                          h = Math.imul,
                          p = Math.fround,
                          w = Math.abs,
                          m = Math.clz32,
                          y = Math.max,
                          g = r.abort,
                          C = r.b,
                          E = r.c,
                          R = r.d,
                          I = r.e,
                          M = r.f,
                          _ = r.g,
                          S = r.h,
                          x = r.i,
                          P = r.j,
                          L = r.k,
                          B = r.l,
                          T = r.m,
                          U = 5246944,
                          j = 0;
                        function F(r) {
                          var e,
                            f = 0,
                            i = 0,
                            a = 0,
                            n = 0,
                            t = 0,
                            k = 0,
                            u = 0,
                            c = 0,
                            s = 0,
                            A = 0,
                            v = 0,
                            d = 0,
                            h = 0;
                          U = e = (U - 16) | 0;
                          r: {
                            e: {
                              f: {
                                i: {
                                  a: {
                                    n: {
                                      t: {
                                        o: {
                                          b: {
                                            k: {
                                              u: {
                                                c: {
                                                  if ((r |= 0) >>> 0 <= 244) {
                                                    if (
                                                      3 &
                                                      (f =
                                                        ((t = o[614]) >>>
                                                          (i =
                                                            ((c =
                                                              r >>> 0 < 11
                                                                ? 16
                                                                : (r + 11) &
                                                                  -8) >>>
                                                              3) |
                                                            0)) |
                                                        0)
                                                    ) {
                                                      (r =
                                                        ((n =
                                                          o[
                                                            (2504 +
                                                              (f =
                                                                (a =
                                                                  (i +
                                                                    (1 &
                                                                      (-1 ^
                                                                        f))) |
                                                                  0) << 3)) >>
                                                              2
                                                          ]) +
                                                          8) |
                                                        0),
                                                        (0 |
                                                          (i =
                                                            o[(n + 8) >> 2])) !=
                                                        (0 |
                                                          (f = (f + 2496) | 0))
                                                          ? ((o[(i + 12) >> 2] =
                                                              f),
                                                            (o[(f + 8) >> 2] =
                                                              i))
                                                          : ((d = 2456),
                                                            (h = Lr(a) & t),
                                                            (o[d >> 2] = h)),
                                                        (f = a << 3),
                                                        (o[(n + 4) >> 2] =
                                                          3 | f),
                                                        (o[
                                                          (4 +
                                                            (f =
                                                              (f + n) | 0)) >>
                                                            2
                                                        ] =
                                                          1 | o[(f + 4) >> 2]);
                                                      break r;
                                                    }
                                                    if (
                                                      (A = o[616]) >>> 0 >=
                                                      c >>> 0
                                                    )
                                                      break c;
                                                    if (f) {
                                                      (i = r =
                                                        ((f =
                                                          (((0 -
                                                            (r =
                                                              ((0 -
                                                                (r = 2 << i)) |
                                                                r) &
                                                              (f << i))) &
                                                            r) -
                                                            1) |
                                                          0) >>>
                                                          12) &
                                                        16),
                                                        (i |= r =
                                                          ((f =
                                                            (f >>> r) | 0) >>>
                                                            5) &
                                                          8),
                                                        (i |= r =
                                                          ((f =
                                                            (f >>> r) | 0) >>>
                                                            2) &
                                                          4),
                                                        (k =
                                                          o[
                                                            (2504 +
                                                              (r =
                                                                (i =
                                                                  (((i |= r =
                                                                    ((f =
                                                                      (f >>>
                                                                        r) |
                                                                      0) >>>
                                                                      1) &
                                                                    2) |
                                                                    (r =
                                                                      ((f =
                                                                        (f >>>
                                                                          r) |
                                                                        0) >>>
                                                                        1) &
                                                                      1)) +
                                                                    ((f >>> r) |
                                                                      0)) |
                                                                  0) << 3)) >>
                                                              2
                                                          ]),
                                                        (0 |
                                                          (f =
                                                            o[(k + 8) >> 2])) !=
                                                        (0 |
                                                          (r = (r + 2496) | 0))
                                                          ? ((o[(f + 12) >> 2] =
                                                              r),
                                                            (o[(r + 8) >> 2] =
                                                              f))
                                                          : ((t = Lr(i) & t),
                                                            (o[614] = t)),
                                                        (r = (k + 8) | 0),
                                                        (o[(k + 4) >> 2] =
                                                          3 | c),
                                                        (n =
                                                          ((f = i << 3) - c) |
                                                          0),
                                                        (o[
                                                          (4 +
                                                            (a =
                                                              (k + c) | 0)) >>
                                                            2
                                                        ] = 1 | n),
                                                        (o[(f + k) >> 2] = n),
                                                        A &&
                                                          ((i =
                                                            (2496 +
                                                              ((f =
                                                                (A >>> 3) |
                                                                0) <<
                                                                3)) |
                                                            0),
                                                          (k = o[619]),
                                                          (f = 1 << f) & t
                                                            ? (f =
                                                                o[(i + 8) >> 2])
                                                            : ((o[614] = f | t),
                                                              (f = i)),
                                                          (o[(i + 8) >> 2] = k),
                                                          (o[(f + 12) >> 2] =
                                                            k),
                                                          (o[(k + 12) >> 2] =
                                                            i),
                                                          (o[(k + 8) >> 2] =
                                                            f)),
                                                        (o[619] = a),
                                                        (o[616] = n);
                                                      break r;
                                                    }
                                                    if (!(u = o[615])) break c;
                                                    for (
                                                      i = r =
                                                        ((f =
                                                          ((u & (0 - u)) - 1) |
                                                          0) >>>
                                                          12) &
                                                        16,
                                                        i |= r =
                                                          ((f =
                                                            (f >>> r) | 0) >>>
                                                            5) &
                                                          8,
                                                        i |= r =
                                                          ((f =
                                                            (f >>> r) | 0) >>>
                                                            2) &
                                                          4,
                                                        f =
                                                          o[
                                                            (2760 +
                                                              ((((i |= r =
                                                                ((f =
                                                                  (f >>> r) |
                                                                  0) >>>
                                                                  1) &
                                                                2) |
                                                                (r =
                                                                  ((f =
                                                                    (f >>> r) |
                                                                    0) >>>
                                                                    1) &
                                                                  1)) +
                                                                ((f >>> r) |
                                                                  0)) <<
                                                                2)) >>
                                                              2
                                                          ],
                                                        a =
                                                          ((-8 &
                                                            o[(f + 4) >> 2]) -
                                                            c) |
                                                          0,
                                                        i = f;
                                                      (r = o[(i + 16) >> 2]) ||
                                                      (r = o[(i + 20) >> 2]);

                                                    )
                                                      (a = (n =
                                                        (i =
                                                          ((-8 &
                                                            o[(r + 4) >> 2]) -
                                                            c) |
                                                          0) >>>
                                                          0 <
                                                        a >>> 0)
                                                        ? i
                                                        : a),
                                                        (f = n ? r : f),
                                                        (i = r);
                                                    if (
                                                      (s = (f + c) | 0) >>> 0 <=
                                                      f >>> 0
                                                    )
                                                      break u;
                                                    if (
                                                      ((v = o[(f + 24) >> 2]),
                                                      (0 |
                                                        (n =
                                                          o[(f + 12) >> 2])) !=
                                                        (0 | f))
                                                    ) {
                                                      (r = o[(f + 8) >> 2]),
                                                        (o[(r + 12) >> 2] = n),
                                                        (o[(n + 8) >> 2] = r);
                                                      break e;
                                                    }
                                                    if (
                                                      !(r =
                                                        o[
                                                          (i = (f + 20) | 0) >>
                                                            2
                                                        ])
                                                    ) {
                                                      if (
                                                        !(r = o[(f + 16) >> 2])
                                                      )
                                                        break k;
                                                      i = (f + 16) | 0;
                                                    }
                                                    for (
                                                      ;
                                                      (k = i),
                                                        (n = r),
                                                        (r =
                                                          o[
                                                            (i =
                                                              (r + 20) | 0) >> 2
                                                          ]) ||
                                                          ((i = (n + 16) | 0),
                                                          (r =
                                                            o[(n + 16) >> 2]));

                                                    );
                                                    o[k >> 2] = 0;
                                                    break e;
                                                  }
                                                  if (
                                                    ((c = -1),
                                                    !(r >>> 0 > 4294967231) &&
                                                      ((c =
                                                        -8 &
                                                        (r = (r + 11) | 0)),
                                                      (s = o[615])))
                                                  ) {
                                                    (a = (0 - c) | 0),
                                                      (t = 0),
                                                      c >>> 0 < 256 ||
                                                        ((t = 31),
                                                        c >>> 0 > 16777215 ||
                                                          ((r = (r >>> 8) | 0),
                                                          (r <<= k =
                                                            ((r + 1048320) >>>
                                                              16) &
                                                            8),
                                                          (t =
                                                            (28 +
                                                              (((r =
                                                                (((((r <<= i =
                                                                  ((r +
                                                                    520192) >>>
                                                                    16) &
                                                                  4) <<
                                                                  (f =
                                                                    ((r +
                                                                      245760) >>>
                                                                      16) &
                                                                    2)) >>>
                                                                  15) |
                                                                  0) -
                                                                  (f | i | k)) |
                                                                0) <<
                                                                1) |
                                                                ((c >>>
                                                                  (r + 21)) &
                                                                  1))) |
                                                            0)));
                                                    s: {
                                                      A: {
                                                        if (
                                                          (i =
                                                            o[
                                                              (2760 +
                                                                (t << 2)) >>
                                                                2
                                                            ])
                                                        )
                                                          for (
                                                            r = 0,
                                                              f =
                                                                c <<
                                                                (31 == (0 | t)
                                                                  ? 0
                                                                  : (25 -
                                                                      ((t >>>
                                                                        1) |
                                                                        0)) |
                                                                    0);
                                                            ;

                                                          ) {
                                                            if (
                                                              !(
                                                                (k =
                                                                  ((-8 &
                                                                    o[
                                                                      (i + 4) >>
                                                                        2
                                                                    ]) -
                                                                    c) |
                                                                  0) >>>
                                                                  0 >=
                                                                  a >>> 0 ||
                                                                ((n = i),
                                                                (a = k))
                                                              )
                                                            ) {
                                                              (a = 0), (r = i);
                                                              break A;
                                                            }
                                                            if (
                                                              ((k =
                                                                o[
                                                                  (i + 20) >> 2
                                                                ]),
                                                              (i =
                                                                o[
                                                                  (16 +
                                                                    ((((f >>>
                                                                      29) &
                                                                      4) +
                                                                      i) |
                                                                      0)) >>
                                                                    2
                                                                ]),
                                                              (r = k
                                                                ? (0 | k) ==
                                                                  (0 | i)
                                                                  ? r
                                                                  : k
                                                                : r),
                                                              (f <<= 1),
                                                              !i)
                                                            )
                                                              break;
                                                          }
                                                        else r = 0;
                                                        if (!(r | n)) {
                                                          if (
                                                            ((n = 0),
                                                            !(r =
                                                              ((0 -
                                                                (r = 2 << t)) |
                                                                r) &
                                                              s))
                                                          )
                                                            break c;
                                                          (i = r =
                                                            ((f =
                                                              ((r & (0 - r)) -
                                                                1) |
                                                              0) >>>
                                                              12) &
                                                            16),
                                                            (i |= r =
                                                              ((f =
                                                                (f >>> r) |
                                                                0) >>>
                                                                5) &
                                                              8),
                                                            (i |= r =
                                                              ((f =
                                                                (f >>> r) |
                                                                0) >>>
                                                                2) &
                                                              4),
                                                            (r =
                                                              o[
                                                                (2760 +
                                                                  ((((i |= r =
                                                                    ((f =
                                                                      (f >>>
                                                                        r) |
                                                                      0) >>>
                                                                      1) &
                                                                    2) |
                                                                    (r =
                                                                      ((f =
                                                                        (f >>>
                                                                          r) |
                                                                        0) >>>
                                                                        1) &
                                                                      1)) +
                                                                    ((f >>> r) |
                                                                      0)) <<
                                                                    2)) >>
                                                                  2
                                                              ]);
                                                        }
                                                        if (!r) break s;
                                                      }
                                                      for (
                                                        ;
                                                        (a = (i =
                                                          (f =
                                                            ((-8 &
                                                              o[(r + 4) >> 2]) -
                                                              c) |
                                                            0) >>>
                                                            0 <
                                                          a >>> 0)
                                                          ? f
                                                          : a),
                                                          (n = i ? r : n),
                                                          (r =
                                                            (f =
                                                              o[
                                                                (r + 16) >> 2
                                                              ]) ||
                                                            o[(r + 20) >> 2]);

                                                      );
                                                    }
                                                    if (
                                                      !(
                                                        !n |
                                                        ((o[616] - c) >>> 0 <=
                                                          a >>> 0)
                                                      )
                                                    ) {
                                                      if (
                                                        (u = (n + c) | 0) >>>
                                                          0 <=
                                                        n >>> 0
                                                      )
                                                        break u;
                                                      if (
                                                        ((t = o[(n + 24) >> 2]),
                                                        (0 | n) !=
                                                          (0 |
                                                            (f =
                                                              o[
                                                                (n + 12) >> 2
                                                              ])))
                                                      ) {
                                                        (r = o[(n + 8) >> 2]),
                                                          (o[(r + 12) >> 2] =
                                                            f),
                                                          (o[(f + 8) >> 2] = r);
                                                        break f;
                                                      }
                                                      if (
                                                        !(r =
                                                          o[
                                                            (i =
                                                              (n + 20) | 0) >> 2
                                                          ])
                                                      ) {
                                                        if (
                                                          !(r =
                                                            o[(n + 16) >> 2])
                                                        )
                                                          break b;
                                                        i = (n + 16) | 0;
                                                      }
                                                      for (
                                                        ;
                                                        (k = i),
                                                          (f = r),
                                                          (r =
                                                            o[
                                                              (i =
                                                                (r + 20) | 0) >>
                                                                2
                                                            ]) ||
                                                            ((i = (f + 16) | 0),
                                                            (r =
                                                              o[
                                                                (f + 16) >> 2
                                                              ]));

                                                      );
                                                      o[k >> 2] = 0;
                                                      break f;
                                                    }
                                                  }
                                                }
                                                if (
                                                  (i = o[616]) >>> 0 >=
                                                  c >>> 0
                                                ) {
                                                  (a = o[619]),
                                                    (f = (i - c) | 0) >>> 0 >=
                                                    16
                                                      ? ((o[616] = f),
                                                        (r = (a + c) | 0),
                                                        (o[619] = r),
                                                        (o[(r + 4) >> 2] =
                                                          1 | f),
                                                        (o[(i + a) >> 2] = f),
                                                        (o[(a + 4) >> 2] =
                                                          3 | c))
                                                      : ((o[619] = 0),
                                                        (o[616] = 0),
                                                        (o[(a + 4) >> 2] =
                                                          3 | i),
                                                        (o[
                                                          (4 +
                                                            (r =
                                                              (i + a) | 0)) >>
                                                            2
                                                        ] =
                                                          1 | o[(r + 4) >> 2])),
                                                    (r = (a + 8) | 0);
                                                  break r;
                                                }
                                                if (
                                                  (u = o[617]) >>> 0 >
                                                  c >>> 0
                                                ) {
                                                  (f = (u - c) | 0),
                                                    (o[617] = f),
                                                    (r =
                                                      ((i = o[620]) + c) | 0),
                                                    (o[620] = r),
                                                    (o[(r + 4) >> 2] = 1 | f),
                                                    (o[(i + 4) >> 2] = 3 | c),
                                                    (r = (i + 8) | 0);
                                                  break r;
                                                }
                                                if (
                                                  ((r = 0),
                                                  (f = s = (c + 47) | 0),
                                                  o[732]
                                                    ? (i = o[734])
                                                    : ((o[735] = -1),
                                                      (o[736] = -1),
                                                      (o[733] = 4096),
                                                      (o[734] = 4096),
                                                      (o[732] =
                                                        ((e + 12) & -16) ^
                                                        1431655768),
                                                      (o[737] = 0),
                                                      (o[725] = 0),
                                                      (i = 4096)),
                                                  (i =
                                                    (k = (f + i) | 0) &
                                                    (n = (0 - i) | 0)) >>>
                                                    0 <=
                                                    c >>> 0)
                                                )
                                                  break r;
                                                if (
                                                  (a = o[724]) &&
                                                  (a >>> 0 <
                                                    (t =
                                                      ((f = o[722]) + i) |
                                                      0) >>>
                                                      0) |
                                                    (f >>> 0 >= t >>> 0)
                                                )
                                                  break r;
                                                if (4 & b[2900]) break n;
                                                c: {
                                                  s: {
                                                    if ((a = o[620]))
                                                      for (r = 2904; ; ) {
                                                        if (
                                                          a >>> 0 <
                                                            ((f = o[r >> 2]) +
                                                              o[
                                                                (r + 4) >> 2
                                                              ]) >>>
                                                              0 &&
                                                          f >>> 0 <= a >>> 0
                                                        )
                                                          break s;
                                                        if (
                                                          !(r = o[(r + 8) >> 2])
                                                        )
                                                          break;
                                                      }
                                                    if (-1 == (0 | (f = Mr(0))))
                                                      break t;
                                                    if (
                                                      ((t = i),
                                                      (r =
                                                        ((a = o[733]) - 1) |
                                                        0) & f &&
                                                        (t =
                                                          (((i - f) | 0) +
                                                            ((r + f) &
                                                              (0 - a))) |
                                                          0),
                                                      (t >>> 0 <= c >>> 0) |
                                                        (t >>> 0 > 2147483646))
                                                    )
                                                      break t;
                                                    if (
                                                      (a = o[724]) &&
                                                      (a >>> 0 <
                                                        (n =
                                                          ((r = o[722]) + t) |
                                                          0) >>>
                                                          0) |
                                                        (r >>> 0 >= n >>> 0)
                                                    )
                                                      break t;
                                                    if (
                                                      (0 | f) !=
                                                      (0 | (r = Mr(t)))
                                                    )
                                                      break c;
                                                    break a;
                                                  }
                                                  if (
                                                    (t = n & (k - u)) >>> 0 >
                                                    2147483646
                                                  )
                                                    break t;
                                                  if (
                                                    (0 | (f = Mr(t))) ==
                                                    ((o[r >> 2] +
                                                      o[(r + 4) >> 2]) |
                                                      0)
                                                  )
                                                    break o;
                                                  r = f;
                                                }
                                                if (
                                                  !(
                                                    (-1 == (0 | r)) |
                                                    ((c + 48) >>> 0 <= t >>> 0)
                                                  )
                                                ) {
                                                  if (
                                                    (f =
                                                      ((f = o[734]) +
                                                        ((s - t) | 0)) &
                                                      (0 - f)) >>>
                                                      0 >
                                                    2147483646
                                                  ) {
                                                    f = r;
                                                    break a;
                                                  }
                                                  if (-1 != (0 | Mr(f))) {
                                                    (t = (f + t) | 0), (f = r);
                                                    break a;
                                                  }
                                                  Mr((0 - t) | 0);
                                                  break t;
                                                }
                                                if (((f = r), -1 != (0 | r)))
                                                  break a;
                                                break t;
                                              }
                                              g();
                                            }
                                            n = 0;
                                            break e;
                                          }
                                          f = 0;
                                          break f;
                                        }
                                        if (-1 != (0 | f)) break a;
                                      }
                                      o[725] = 4 | o[725];
                                    }
                                    if (i >>> 0 > 2147483646) break i;
                                    if (
                                      (-1 == (0 | (f = Mr(i)))) |
                                      (-1 == (0 | (r = Mr(0)))) |
                                      (r >>> 0 <= f >>> 0)
                                    )
                                      break i;
                                    if (
                                      (t = (r - f) | 0) >>> 0 <=
                                      (c + 40) >>> 0
                                    )
                                      break i;
                                  }
                                  (r = (o[722] + t) | 0),
                                    (o[722] = r),
                                    r >>> 0 > l[723] && (o[723] = r);
                                  a: {
                                    n: {
                                      t: {
                                        if ((k = o[620])) {
                                          for (r = 2904; ; ) {
                                            if (
                                              (((a = o[r >> 2]) +
                                                (i = o[(r + 4) >> 2])) |
                                                0) ==
                                              (0 | f)
                                            )
                                              break t;
                                            if (!(r = o[(r + 8) >> 2])) break;
                                          }
                                          break n;
                                        }
                                        for (
                                          ((r = o[618]) >>> 0 <= f >>> 0 &&
                                            r) ||
                                            (o[618] = f),
                                            r = 0,
                                            o[727] = t,
                                            o[726] = f,
                                            o[622] = -1,
                                            o[623] = o[732],
                                            o[729] = 0;
                                          (i = (2496 + (a = r << 3)) | 0),
                                            (o[(a + 2504) >> 2] = i),
                                            (o[(a + 2508) >> 2] = i),
                                            32 != (0 | (r = (r + 1) | 0));

                                        );
                                        (i =
                                          ((a = (t - 40) | 0) -
                                            (r =
                                              (f + 8) & 7 ? (-8 - f) & 7 : 0)) |
                                          0),
                                          (o[617] = i),
                                          (r = (r + f) | 0),
                                          (o[620] = r),
                                          (o[(r + 4) >> 2] = 1 | i),
                                          (o[(4 + ((f + a) | 0)) >> 2] = 40),
                                          (o[621] = o[736]);
                                        break a;
                                      }
                                      if (
                                        !(
                                          (8 & b[(r + 12) | 0]) |
                                          (a >>> 0 > k >>> 0) |
                                          (f >>> 0 <= k >>> 0)
                                        )
                                      ) {
                                        (o[(r + 4) >> 2] = i + t),
                                          (i =
                                            ((r =
                                              (k + 8) & 7 ? (-8 - k) & 7 : 0) +
                                              k) |
                                            0),
                                          (o[620] = i),
                                          (r =
                                            ((f = (o[617] + t) | 0) - r) | 0),
                                          (o[617] = r),
                                          (o[(i + 4) >> 2] = 1 | r),
                                          (o[(4 + ((f + k) | 0)) >> 2] = 40),
                                          (o[621] = o[736]);
                                        break a;
                                      }
                                    }
                                    l[618] > f >>> 0 && (o[618] = f),
                                      (i = (f + t) | 0),
                                      (r = 2904);
                                    n: {
                                      t: {
                                        o: {
                                          b: {
                                            k: {
                                              u: {
                                                for (;;) {
                                                  if ((0 | i) != o[r >> 2]) {
                                                    if ((r = o[(r + 8) >> 2]))
                                                      continue;
                                                    break u;
                                                  }
                                                  break;
                                                }
                                                if (!(8 & b[(r + 12) | 0]))
                                                  break k;
                                              }
                                              for (r = 2904; ; ) {
                                                if (
                                                  (i = o[r >> 2]) >>> 0 <=
                                                    k >>> 0 &&
                                                  (n =
                                                    (i + o[(r + 4) >> 2]) |
                                                    0) >>>
                                                    0 >
                                                    k >>> 0
                                                )
                                                  break b;
                                                r = o[(r + 8) >> 2];
                                              }
                                            }
                                            if (
                                              ((o[r >> 2] = f),
                                              (o[(r + 4) >> 2] =
                                                o[(r + 4) >> 2] + t),
                                              (o[
                                                (4 +
                                                  (s =
                                                    (((f + 8) & 7
                                                      ? (-8 - f) & 7
                                                      : 0) +
                                                      f) |
                                                    0)) >>
                                                  2
                                              ] = 3 | c),
                                              (i =
                                                ((t =
                                                  (i +
                                                    ((i + 8) & 7
                                                      ? (-8 - i) & 7
                                                      : 0)) |
                                                  0) -
                                                  (u = (c + s) | 0)) |
                                                0),
                                              (0 | k) == (0 | t))
                                            ) {
                                              (o[620] = u),
                                                (r = (o[617] + i) | 0),
                                                (o[617] = r),
                                                (o[(u + 4) >> 2] = 1 | r);
                                              break t;
                                            }
                                            if (o[619] == (0 | t)) {
                                              (o[619] = u),
                                                (r = (o[616] + i) | 0),
                                                (o[616] = r),
                                                (o[(u + 4) >> 2] = 1 | r),
                                                (o[(r + u) >> 2] = r);
                                              break t;
                                            }
                                            if (
                                              1 ==
                                              (3 & (r = o[(t + 4) >> 2]))
                                            ) {
                                              k = -8 & r;
                                              k: if (r >>> 0 <= 255) {
                                                if (
                                                  ((a = o[(t + 8) >> 2]),
                                                  (r = (r >>> 3) | 0),
                                                  (0 |
                                                    (f = o[(t + 12) >> 2])) ==
                                                    (0 | a))
                                                ) {
                                                  (d = 2456),
                                                    (h = o[614] & Lr(r)),
                                                    (o[d >> 2] = h);
                                                  break k;
                                                }
                                                (o[(a + 12) >> 2] = f),
                                                  (o[(f + 8) >> 2] = a);
                                              } else {
                                                if (
                                                  ((c = o[(t + 24) >> 2]),
                                                  (0 | t) ==
                                                    (0 |
                                                      (f = o[(t + 12) >> 2])))
                                                )
                                                  if (
                                                    (a =
                                                      o[
                                                        (r = (t + 20) | 0) >> 2
                                                      ]) ||
                                                    (a =
                                                      o[
                                                        (r = (t + 16) | 0) >> 2
                                                      ])
                                                  ) {
                                                    for (
                                                      ;
                                                      (n = r),
                                                        (a =
                                                          o[
                                                            (r =
                                                              ((f = a) + 20) |
                                                              0) >> 2
                                                          ]) ||
                                                          ((r = (f + 16) | 0),
                                                          (a =
                                                            o[(f + 16) >> 2]));

                                                    );
                                                    o[n >> 2] = 0;
                                                  } else f = 0;
                                                else
                                                  (r = o[(t + 8) >> 2]),
                                                    (o[(r + 12) >> 2] = f),
                                                    (o[(f + 8) >> 2] = r);
                                                if (c) {
                                                  a = o[(t + 28) >> 2];
                                                  u: {
                                                    if (
                                                      o[
                                                        (r =
                                                          (2760 + (a << 2)) |
                                                          0) >> 2
                                                      ] ==
                                                      (0 | t)
                                                    ) {
                                                      if (((o[r >> 2] = f), f))
                                                        break u;
                                                      (d = 2460),
                                                        (h = o[615] & Lr(a)),
                                                        (o[d >> 2] = h);
                                                      break k;
                                                    }
                                                    if (
                                                      ((o[
                                                        (c +
                                                          (o[(c + 16) >> 2] ==
                                                          (0 | t)
                                                            ? 16
                                                            : 20)) >>
                                                          2
                                                      ] = f),
                                                      !f)
                                                    )
                                                      break k;
                                                  }
                                                  (o[(f + 24) >> 2] = c),
                                                    (r = o[(t + 16) >> 2]) &&
                                                      ((o[(f + 16) >> 2] = r),
                                                      (o[(r + 24) >> 2] = f)),
                                                    (r = o[(t + 20) >> 2]) &&
                                                      ((o[(f + 20) >> 2] = r),
                                                      (o[(r + 24) >> 2] = f));
                                                }
                                              }
                                              (t = (k + t) | 0),
                                                (i = (i + k) | 0);
                                            }
                                            if (
                                              ((o[(t + 4) >> 2] =
                                                -2 & o[(t + 4) >> 2]),
                                              (o[(u + 4) >> 2] = 1 | i),
                                              (o[(i + u) >> 2] = i),
                                              i >>> 0 <= 255)
                                            ) {
                                              (f =
                                                (2496 +
                                                  ((r = (i >>> 3) | 0) << 3)) |
                                                0),
                                                (i = o[614]) & (r = 1 << r)
                                                  ? (r = o[(f + 8) >> 2])
                                                  : ((o[614] = r | i), (r = f)),
                                                (o[(f + 8) >> 2] = u),
                                                (o[(r + 12) >> 2] = u),
                                                (o[(u + 12) >> 2] = f),
                                                (o[(u + 8) >> 2] = r);
                                              break t;
                                            }
                                            if (
                                              ((r = 31),
                                              i >>> 0 <= 16777215 &&
                                                ((r = (i >>> 8) | 0),
                                                (r <<= n =
                                                  ((r + 1048320) >>> 16) & 8),
                                                (r =
                                                  (28 +
                                                    (((r =
                                                      (((((r <<= a =
                                                        ((r + 520192) >>> 16) &
                                                        4) <<
                                                        (f =
                                                          ((r + 245760) >>>
                                                            16) &
                                                          2)) >>>
                                                        15) |
                                                        0) -
                                                        (f | a | n)) |
                                                      0) <<
                                                      1) |
                                                      ((i >>> (r + 21)) & 1))) |
                                                  0)),
                                              (o[(u + 28) >> 2] = r),
                                              (o[(u + 16) >> 2] = 0),
                                              (o[(u + 20) >> 2] = 0),
                                              (n = (2760 + (r << 2)) | 0),
                                              (a = o[615]) & (f = 1 << r))
                                            ) {
                                              for (
                                                r =
                                                  i <<
                                                  (31 == (0 | r)
                                                    ? 0
                                                    : (25 - ((r >>> 1) | 0)) |
                                                      0),
                                                  f = o[n >> 2];
                                                ;

                                              ) {
                                                if (
                                                  ((a = f),
                                                  (-8 & o[(f + 4) >> 2]) ==
                                                    (0 | i))
                                                )
                                                  break o;
                                                if (
                                                  ((f = (r >>> 29) | 0),
                                                  (r <<= 1),
                                                  !(f =
                                                    o[
                                                      (16 +
                                                        (n =
                                                          (a + (4 & f)) | 0)) >>
                                                        2
                                                    ]))
                                                )
                                                  break;
                                              }
                                              (o[(n + 16) >> 2] = u),
                                                (o[(u + 24) >> 2] = a);
                                            } else
                                              (o[615] = f | a),
                                                (o[n >> 2] = u),
                                                (o[(u + 24) >> 2] = n);
                                            (o[(u + 12) >> 2] = u),
                                              (o[(u + 8) >> 2] = u);
                                            break t;
                                          }
                                          for (
                                            i =
                                              ((a = (t - 40) | 0) -
                                                (r =
                                                  (f + 8) & 7
                                                    ? (-8 - f) & 7
                                                    : 0)) |
                                              0,
                                              o[617] = i,
                                              r = (r + f) | 0,
                                              o[620] = r,
                                              o[(r + 4) >> 2] = 1 | i,
                                              o[(4 + ((f + a) | 0)) >> 2] = 40,
                                              o[621] = o[736],
                                              o[
                                                ((i =
                                                  (r =
                                                    (((n +
                                                      ((n - 39) & 7
                                                        ? (39 - n) & 7
                                                        : 0)) |
                                                      0) -
                                                      47) |
                                                    0) >>>
                                                    0 <
                                                  (k + 16) >>> 0
                                                    ? k
                                                    : r) +
                                                  4) >>
                                                  2
                                              ] = 27,
                                              r = o[729],
                                              o[(i + 16) >> 2] = o[728],
                                              o[(i + 20) >> 2] = r,
                                              r = o[727],
                                              o[(i + 8) >> 2] = o[726],
                                              o[(i + 12) >> 2] = r,
                                              o[728] = i + 8,
                                              o[727] = t,
                                              o[726] = f,
                                              o[729] = 0,
                                              r = (i + 24) | 0;
                                            (o[(r + 4) >> 2] = 7),
                                              (f = (r + 8) | 0),
                                              (r = (r + 4) | 0),
                                              f >>> 0 < n >>> 0;

                                          );
                                          if ((0 | i) == (0 | k)) break a;
                                          if (
                                            ((o[(i + 4) >> 2] =
                                              -2 & o[(i + 4) >> 2]),
                                            (n = (i - k) | 0),
                                            (o[(k + 4) >> 2] = 1 | n),
                                            (o[i >> 2] = n),
                                            n >>> 0 <= 255)
                                          ) {
                                            (f =
                                              (2496 +
                                                ((r = (n >>> 3) | 0) << 3)) |
                                              0),
                                              (i = o[614]) & (r = 1 << r)
                                                ? (r = o[(f + 8) >> 2])
                                                : ((o[614] = r | i), (r = f)),
                                              (o[(f + 8) >> 2] = k),
                                              (o[(r + 12) >> 2] = k),
                                              (o[(k + 12) >> 2] = f),
                                              (o[(k + 8) >> 2] = r);
                                            break a;
                                          }
                                          if (
                                            ((r = 31),
                                            (o[(k + 16) >> 2] = 0),
                                            (o[(k + 20) >> 2] = 0),
                                            n >>> 0 <= 16777215 &&
                                              ((r = (n >>> 8) | 0),
                                              (r <<= a =
                                                ((r + 1048320) >>> 16) & 8),
                                              (r =
                                                (28 +
                                                  (((r =
                                                    (((((r <<= i =
                                                      ((r + 520192) >>> 16) &
                                                      4) <<
                                                      (f =
                                                        ((r + 245760) >>> 16) &
                                                        2)) >>>
                                                      15) |
                                                      0) -
                                                      (f | i | a)) |
                                                    0) <<
                                                    1) |
                                                    ((n >>> (r + 21)) & 1))) |
                                                0)),
                                            (o[(k + 28) >> 2] = r),
                                            (a = (2760 + (r << 2)) | 0),
                                            (i = o[615]) & (f = 1 << r))
                                          ) {
                                            for (
                                              r =
                                                n <<
                                                (31 == (0 | r)
                                                  ? 0
                                                  : (25 - ((r >>> 1) | 0)) | 0),
                                                f = o[a >> 2];
                                              ;

                                            ) {
                                              if (
                                                ((i = f),
                                                (0 | n) ==
                                                  (-8 & o[(f + 4) >> 2]))
                                              )
                                                break n;
                                              if (
                                                ((f = (r >>> 29) | 0),
                                                (r <<= 1),
                                                !(f =
                                                  o[
                                                    (16 +
                                                      (a =
                                                        (i + (4 & f)) | 0)) >>
                                                      2
                                                  ]))
                                              )
                                                break;
                                            }
                                            (o[(a + 16) >> 2] = k),
                                              (o[(k + 24) >> 2] = i);
                                          } else
                                            (o[615] = f | i),
                                              (o[a >> 2] = k),
                                              (o[(k + 24) >> 2] = a);
                                          (o[(k + 12) >> 2] = k),
                                            (o[(k + 8) >> 2] = k);
                                          break a;
                                        }
                                        (r = o[(a + 8) >> 2]),
                                          (o[(r + 12) >> 2] = u),
                                          (o[(a + 8) >> 2] = u),
                                          (o[(u + 24) >> 2] = 0),
                                          (o[(u + 12) >> 2] = a),
                                          (o[(u + 8) >> 2] = r);
                                      }
                                      r = (s + 8) | 0;
                                      break r;
                                    }
                                    (r = o[(i + 8) >> 2]),
                                      (o[(r + 12) >> 2] = k),
                                      (o[(i + 8) >> 2] = k),
                                      (o[(k + 24) >> 2] = 0),
                                      (o[(k + 12) >> 2] = i),
                                      (o[(k + 8) >> 2] = r);
                                  }
                                  if (!((r = o[617]) >>> 0 <= c >>> 0)) {
                                    (f = (r - c) | 0),
                                      (o[617] = f),
                                      (r = ((i = o[620]) + c) | 0),
                                      (o[620] = r),
                                      (o[(r + 4) >> 2] = 1 | f),
                                      (o[(i + 4) >> 2] = 3 | c),
                                      (r = (i + 8) | 0);
                                    break r;
                                  }
                                }
                                (o[613] = 48), (r = 0);
                                break r;
                              }
                              f: if (t) {
                                i = o[(n + 28) >> 2];
                                i: {
                                  if (
                                    o[(r = (2760 + (i << 2)) | 0) >> 2] ==
                                    (0 | n)
                                  ) {
                                    if (((o[r >> 2] = f), f)) break i;
                                    (s = Lr(i) & s), (o[615] = s);
                                    break f;
                                  }
                                  if (
                                    ((o[
                                      (t +
                                        (o[(t + 16) >> 2] == (0 | n)
                                          ? 16
                                          : 20)) >>
                                        2
                                    ] = f),
                                    !f)
                                  )
                                    break f;
                                }
                                (o[(f + 24) >> 2] = t),
                                  (r = o[(n + 16) >> 2]) &&
                                    ((o[(f + 16) >> 2] = r),
                                    (o[(r + 24) >> 2] = f)),
                                  (r = o[(n + 20) >> 2]) &&
                                    ((o[(f + 20) >> 2] = r),
                                    (o[(r + 24) >> 2] = f));
                              }
                              f: if (a >>> 0 <= 15)
                                (r = (a + c) | 0),
                                  (o[(n + 4) >> 2] = 3 | r),
                                  (o[(4 + (r = (r + n) | 0)) >> 2] =
                                    1 | o[(r + 4) >> 2]);
                              else if (
                                ((o[(n + 4) >> 2] = 3 | c),
                                (o[(u + 4) >> 2] = 1 | a),
                                (o[(a + u) >> 2] = a),
                                a >>> 0 <= 255)
                              )
                                (f = (2496 + ((r = (a >>> 3) | 0) << 3)) | 0),
                                  (i = o[614]) & (r = 1 << r)
                                    ? (r = o[(f + 8) >> 2])
                                    : ((o[614] = r | i), (r = f)),
                                  (o[(f + 8) >> 2] = u),
                                  (o[(r + 12) >> 2] = u),
                                  (o[(u + 12) >> 2] = f),
                                  (o[(u + 8) >> 2] = r);
                              else {
                                (r = 31),
                                  a >>> 0 <= 16777215 &&
                                    ((r = (a >>> 8) | 0),
                                    (r <<= k = ((r + 1048320) >>> 16) & 8),
                                    (r =
                                      (28 +
                                        (((r =
                                          (((((r <<= i =
                                            ((r + 520192) >>> 16) & 4) <<
                                            (f = ((r + 245760) >>> 16) & 2)) >>>
                                            15) |
                                            0) -
                                            (f | i | k)) |
                                          0) <<
                                          1) |
                                          ((a >>> (r + 21)) & 1))) |
                                      0)),
                                  (o[(u + 28) >> 2] = r),
                                  (o[(u + 16) >> 2] = 0),
                                  (o[(u + 20) >> 2] = 0),
                                  (i = (2760 + (r << 2)) | 0);
                                i: {
                                  if ((f = 1 << r) & s) {
                                    for (
                                      r =
                                        a <<
                                        (31 == (0 | r)
                                          ? 0
                                          : (25 - ((r >>> 1) | 0)) | 0),
                                        c = o[i >> 2];
                                      ;

                                    ) {
                                      if (
                                        (-8 & o[((f = c) + 4) >> 2]) ==
                                        (0 | a)
                                      )
                                        break i;
                                      if (
                                        ((i = (r >>> 29) | 0),
                                        (r <<= 1),
                                        !(c =
                                          o[
                                            (16 + (i = (f + (4 & i)) | 0)) >> 2
                                          ]))
                                      )
                                        break;
                                    }
                                    (o[(i + 16) >> 2] = u),
                                      (o[(u + 24) >> 2] = f);
                                  } else
                                    (o[615] = f | s),
                                      (o[i >> 2] = u),
                                      (o[(u + 24) >> 2] = i);
                                  (o[(u + 12) >> 2] = u), (o[(u + 8) >> 2] = u);
                                  break f;
                                }
                                (r = o[(f + 8) >> 2]),
                                  (o[(r + 12) >> 2] = u),
                                  (o[(f + 8) >> 2] = u),
                                  (o[(u + 24) >> 2] = 0),
                                  (o[(u + 12) >> 2] = f),
                                  (o[(u + 8) >> 2] = r);
                              }
                              r = (n + 8) | 0;
                              break r;
                            }
                            e: if (v) {
                              i = o[(f + 28) >> 2];
                              f: {
                                if (
                                  o[(r = (2760 + (i << 2)) | 0) >> 2] ==
                                  (0 | f)
                                ) {
                                  if (((o[r >> 2] = n), n)) break f;
                                  (d = 2460), (h = Lr(i) & u), (o[d >> 2] = h);
                                  break e;
                                }
                                if (
                                  ((o[
                                    ((o[(v + 16) >> 2] == (0 | f) ? 16 : 20) +
                                      v) >>
                                      2
                                  ] = n),
                                  !n)
                                )
                                  break e;
                              }
                              (o[(n + 24) >> 2] = v),
                                (r = o[(f + 16) >> 2]) &&
                                  ((o[(n + 16) >> 2] = r),
                                  (o[(r + 24) >> 2] = n)),
                                (r = o[(f + 20) >> 2]) &&
                                  ((o[(n + 20) >> 2] = r),
                                  (o[(r + 24) >> 2] = n));
                            }
                            a >>> 0 <= 15
                              ? ((r = (a + c) | 0),
                                (o[(f + 4) >> 2] = 3 | r),
                                (o[(4 + (r = (r + f) | 0)) >> 2] =
                                  1 | o[(r + 4) >> 2]))
                              : ((o[(f + 4) >> 2] = 3 | c),
                                (o[(s + 4) >> 2] = 1 | a),
                                (o[(a + s) >> 2] = a),
                                A &&
                                  ((i =
                                    (2496 + ((r = (A >>> 3) | 0) << 3)) | 0),
                                  (n = o[619]),
                                  (r = 1 << r) & t
                                    ? (r = o[(i + 8) >> 2])
                                    : ((o[614] = r | t), (r = i)),
                                  (o[(i + 8) >> 2] = n),
                                  (o[(r + 12) >> 2] = n),
                                  (o[(n + 12) >> 2] = i),
                                  (o[(n + 8) >> 2] = r)),
                                (o[619] = s),
                                (o[616] = a)),
                              (r = (f + 8) | 0);
                          }
                          return (U = (e + 16) | 0), 0 | r;
                        }
                        function O(r, e) {
                          var f,
                            i,
                            n,
                            t,
                            k,
                            u,
                            c,
                            s,
                            A = p(0),
                            l = p(0),
                            h = 0,
                            w = p(0),
                            m = p(0),
                            C = 0,
                            E = p(0),
                            R = 0,
                            I = 0,
                            M = 0,
                            _ = p(0),
                            S = p(0),
                            x = p(0),
                            P = 0,
                            L = 0,
                            B = p(0),
                            T = 0,
                            j = p(0);
                          (U = f = (U - 144) | 0),
                            (s = o[o[(o[(e + 4) >> 2] + 8) >> 2] >> 2]),
                            (c = o[s >> 2]),
                            (n = o[(c + 16) >> 2]),
                            (k = o[(o[(c + 4) >> 2] + 16) >> 2]),
                            (u = o[e >> 2]),
                            (t = o[(o[(u + 4) >> 2] + 16) >> 2]),
                            (i = o[(u + 16) >> 2]),
                            br(t, o[(r + 72) >> 2], i) > p(0) &&
                              ((A = v[(t + 28) >> 2]),
                              (l = v[(t + 32) >> 2]),
                              (h = o[(r + 72) >> 2]),
                              (w = v[(h + 28) >> 2]),
                              (m = v[(h + 32) >> 2]),
                              (E = v[(i + 28) >> 2]),
                              (d[(f + 40) >> 3] = v[(i + 32) >> 2]),
                              (d[(f + 32) >> 3] = E),
                              (d[(f + 24) >> 3] = m),
                              (d[(f + 16) >> 3] = w),
                              (d[(f + 8) >> 3] = l),
                              (d[f >> 3] = A),
                              Pr(1098, f));
                          r: {
                            e: {
                              f: if (
                                (0 | i) != (0 | n) &&
                                !(
                                  (S =
                                    (A = v[(i + 32) >> 2]) <=
                                    (l = v[(t + 32) >> 2])
                                      ? A
                                      : l) >
                                  ((l = v[(n + 32) >> 2]) >=
                                  (w = v[(k + 32) >> 2])
                                    ? l
                                    : w)
                                )
                              ) {
                                i: {
                                  if (
                                    !(
                                      !(A <= l) |
                                      ((w = v[(i + 28) >> 2]) !=
                                        (m = v[(n + 28) >> 2]))
                                    ) ||
                                    w < m
                                  ) {
                                    if (!(br(k, i, n) > p(0))) break i;
                                    break f;
                                  }
                                  if (br(t, n, i) < p(0)) break f;
                                }
                                (M = k),
                                  (h = n),
                                  (I = i),
                                  ((A = v[((R = t) + 28) >> 2]) <
                                    (l = v[(i + 28) >> 2])) |
                                  (v[(R + 32) >> 2] <= v[(I + 32) >> 2]
                                    ? A == l
                                    : 0)
                                    ? ((C = I), (I = R))
                                    : (C = R),
                                  ((A = v[(h + 28) >> 2]) >
                                    (l = v[(M + 28) >> 2])) |
                                  (v[(M + 32) >> 2] <= v[(h + 32) >> 2]
                                    ? A == l
                                    : 0)
                                    ? ((A = l), (R = h), (h = M))
                                    : (R = M),
                                  (A > (l = v[(I + 28) >> 2])) |
                                  (v[(I + 32) >> 2] <= v[(h + 32) >> 2]
                                    ? A == l
                                    : 0)
                                    ? ((l = A),
                                      (M = R),
                                      (P = h),
                                      (R = C),
                                      (h = I))
                                    : ((M = C), (P = I)),
                                  (C = f);
                                i: if (
                                  ((m = v[(R + 28) >> 2]) > l) |
                                  (v[(P + 32) >> 2] <= v[(R + 32) >> 2]
                                    ? l == m
                                    : 0)
                                )
                                  if (
                                    ((_ = v[(M + 28) >> 2]),
                                    !(v[(R + 32) >> 2] <= v[(M + 32) >> 2]) |
                                      (m != _) && !(_ > m))
                                  )
                                    if (
                                      ((l = br(h, P, R)),
                                      (A = br(h, M, R)),
                                      (I = p(l - A) < p(0)),
                                      (w = p(y(I ? p(-l) : l, p(0)))) <=
                                        (l = p(y(I ? A : p(-A), p(0)))))
                                    ) {
                                      if (
                                        ((m = v[(P + 28) >> 2]),
                                        (E = v[(M + 28) >> 2]),
                                        (A = p(p(m + E) * p(0.5))),
                                        l == p(0))
                                      )
                                        break i;
                                      A = p(m + p(p(w / p(w + l)) * p(E - m)));
                                    } else
                                      (A = v[(M + 28) >> 2]),
                                        (A = p(
                                          A +
                                            p(
                                              p(l / p(w + l)) *
                                                p(v[(P + 28) >> 2] - A),
                                            ),
                                        ));
                                  else {
                                    if (
                                      ((A = p(0)),
                                      (E = p(m - l)),
                                      (w = p(l - v[(h + 28) >> 2])),
                                      (S = p(E + w)) > p(0) &&
                                        ((A =
                                          v[(((I = w < E) ? h : R) + 32) >> 2]),
                                        (A = p(
                                          p(v[(P + 32) >> 2] - A) +
                                            p(
                                              p((I ? w : E) / S) *
                                                p(
                                                  A -
                                                    v[((I ? R : h) + 32) >> 2],
                                                ),
                                            ),
                                        ))),
                                      (B = p(-A)),
                                      (S = A),
                                      (_ = p(_ - m)),
                                      (w = p(E + _)) > p(0) &&
                                        ((x =
                                          v[(((I = E < _) ? P : M) + 32) >> 2]),
                                        (x = p(
                                          p(v[(R + 32) >> 2] - x) +
                                            p(
                                              p((I ? E : _) / w) *
                                                p(
                                                  x -
                                                    v[((I ? M : P) + 32) >> 2],
                                                ),
                                            ),
                                        ))),
                                      (I = p(A + x) < p(0)),
                                      (_ = p(y(I ? B : S, p(0)))) <=
                                        (w = p(y(I ? p(-x) : x, p(0)))))
                                    ) {
                                      if (
                                        ((A = p(p(l + m) * p(0.5))), w == p(0))
                                      )
                                        break i;
                                      A = p(l + p(E * p(_ / p(_ + w))));
                                      break i;
                                    }
                                    A = p(m + p(p(l - m) * p(w / p(_ + w))));
                                  }
                                else A = p(p(l + m) * p(0.5));
                                (v[(C + 84) >> 2] = A),
                                  ((A = v[(h + 32) >> 2]) <
                                    (l = v[(R + 32) >> 2])) |
                                  (v[(h + 28) >> 2] <= v[(R + 28) >> 2]
                                    ? A == l
                                    : 0)
                                    ? ((C = R), (R = h))
                                    : (C = h),
                                  ((l = v[(M + 32) >> 2]) >
                                    (A = v[(P + 32) >> 2])) |
                                  (v[(P + 28) >> 2] <= v[(M + 28) >> 2]
                                    ? A == l
                                    : 0)
                                    ? ((l = A), (h = M), (M = P))
                                    : (h = P),
                                  ((A = v[(R + 32) >> 2]) < l) |
                                  (v[(R + 28) >> 2] <= v[(M + 28) >> 2]
                                    ? A == l
                                    : 0)
                                    ? ((P = h), (I = M), (h = C), (M = R))
                                    : ((P = C), (I = R));
                                i: {
                                  a: if (
                                    ((m = v[(I + 32) >> 2]) <
                                      (E = v[(h + 32) >> 2])) |
                                    (v[(I + 28) >> 2] <= v[(h + 28) >> 2]
                                      ? m == E
                                      : 0)
                                  ) {
                                    if (
                                      ((x = v[(P + 32) >> 2]),
                                      !(
                                        !(
                                          v[(h + 28) >> 2] <= v[(P + 28) >> 2]
                                        ) |
                                        (E != x)
                                      ) || x > E)
                                    ) {
                                      if (
                                        ((A = p(0)),
                                        (l = p(0)),
                                        (_ = p(E - m)),
                                        (w = p(m - v[(M + 32) >> 2])),
                                        (S = p(_ + w)) > p(0) &&
                                          ((l =
                                            v[
                                              (((C = w < _) ? M : h) + 28) >> 2
                                            ]),
                                          (l = p(
                                            p(v[(I + 28) >> 2] - l) +
                                              p(
                                                p((C ? w : _) / S) *
                                                  p(
                                                    l -
                                                      v[
                                                        ((C ? h : M) + 28) >> 2
                                                      ],
                                                  ),
                                              ),
                                          ))),
                                        (j = p(-l)),
                                        (S = l),
                                        (x = p(x - E)),
                                        (w = p(_ + x)) > p(0) &&
                                          ((B = v[(h + 28) >> 2]),
                                          (A =
                                            v[
                                              (((h = _ < x) ? I : P) + 28) >> 2
                                            ]),
                                          (A = p(
                                            p(B - A) +
                                              p(
                                                p((h ? _ : x) / w) *
                                                  p(
                                                    A -
                                                      v[
                                                        ((h ? P : I) + 28) >> 2
                                                      ],
                                                  ),
                                              ),
                                          ))),
                                        (h = p(l + A) < p(0)),
                                        (l = p(y(h ? j : S, p(0)))) <=
                                          (A = p(y(h ? p(-A) : A, p(0)))))
                                      ) {
                                        if (A == p(0)) break a;
                                        v[(f + 88) >> 2] =
                                          m + p(_ * p(l / p(l + A)));
                                        break i;
                                      }
                                      v[(f + 88) >> 2] =
                                        E + p(p(m - E) * p(A / p(l + A)));
                                      break i;
                                    }
                                    if (
                                      ((A = p(0)),
                                      (l = p(0)),
                                      (w = p(E - m)),
                                      (_ = v[(M + 32) >> 2]),
                                      (S = p(m - _)),
                                      p(w + S) > p(0) &&
                                        ((l = v[(I + 28) >> 2]),
                                        (l = p(
                                          p(S * p(l - v[(h + 28) >> 2])) +
                                            p(w * p(l - v[(M + 28) >> 2])),
                                        ))),
                                      (S = p(-l)),
                                      (w = l),
                                      (E = p(E - x)),
                                      (_ = p(x - _)),
                                      p(E + _) > p(0) &&
                                        ((A = v[(P + 28) >> 2]),
                                        (A = p(
                                          p(_ * p(A - v[(h + 28) >> 2])) +
                                            p(E * p(A - v[(M + 28) >> 2])),
                                        ))),
                                      (h = p(l - A) < p(0)),
                                      (l = p(y(h ? S : w, p(0)))) <=
                                        (A = p(y(h ? A : p(-A), p(0)))))
                                    ) {
                                      if (A == p(0)) {
                                        v[(f + 88) >> 2] = p(m + x) * p(0.5);
                                        break i;
                                      }
                                      v[(f + 88) >> 2] =
                                        m + p(p(x - m) * p(l / p(l + A)));
                                      break i;
                                    }
                                    v[(f + 88) >> 2] =
                                      x + p(p(m - x) * p(A / p(l + A)));
                                    break i;
                                  }
                                  v[(f + 88) >> 2] = p(m + E) * p(0.5);
                                }
                                (A = v[(f + 84) >> 2]), (C = o[(r + 72) >> 2]);
                                i: {
                                  if (A < (w = v[(C + 28) >> 2]))
                                    l = v[(C + 32) >> 2];
                                  else {
                                    if (A != w) break i;
                                    if (
                                      !(
                                        (l = v[(C + 32) >> 2]) >=
                                        v[(f + 88) >> 2]
                                      )
                                    )
                                      break i;
                                  }
                                  (v[(f + 88) >> 2] = l),
                                    (v[(f + 84) >> 2] = w),
                                    (A = w);
                                }
                                (R = h = i),
                                  (l = w = v[(h + 28) >> 2]) <
                                    (m = v[(n + 28) >> 2]) ||
                                    (w == m &&
                                      ((l = w),
                                      (R = i),
                                      v[(h + 32) >> 2] <= v[(n + 32) >> 2])) ||
                                    ((l = m), (R = n)),
                                  (h = R);
                                i: {
                                  if (A > l) m = v[(h + 32) >> 2];
                                  else {
                                    if (A != l) break i;
                                    if (
                                      !(
                                        (m = v[(h + 32) >> 2]) <=
                                        v[(f + 88) >> 2]
                                      )
                                    )
                                      break i;
                                  }
                                  (v[(f + 88) >> 2] = m),
                                    (v[(f + 84) >> 2] = l),
                                    (w = v[(i + 28) >> 2]),
                                    (A = l);
                                }
                                if (
                                  (v[(n + 28) >> 2] != A) |
                                    (v[(f + 88) >> 2] != v[(n + 32) >> 2]) &&
                                  (v[(f + 88) >> 2] != v[(i + 32) >> 2] ||
                                    A != w)
                                ) {
                                  i: {
                                    A = v[(C + 28) >> 2];
                                    a: {
                                      if (
                                        v[(t + 32) >> 2] != v[(C + 32) >> 2] ||
                                        A != v[(t + 28) >> 2]
                                      ) {
                                        if (br(t, C, (f + 56) | 0) >= p(0))
                                          break a;
                                        (C = o[(r + 72) >> 2]),
                                          (A = v[(C + 28) >> 2]);
                                      }
                                      if (
                                        v[(k + 32) >> 2] == v[(C + 32) >> 2] &&
                                        A == v[(k + 28) >> 2]
                                      )
                                        break i;
                                      if (!(br(k, C, (f + 56) | 0) <= p(0)))
                                        break i;
                                    }
                                    if (
                                      (0 | (h = o[(r + 72) >> 2])) ==
                                      (0 | k)
                                    ) {
                                      if (!J(o[(u + 4) >> 2])) break r;
                                      if (!$(o[(c + 4) >> 2], u)) break r;
                                      for (
                                        h = o[(o[e >> 2] + 16) >> 2];
                                        (e =
                                          o[
                                            o[(o[(e + 4) >> 2] + 4) >> 2] >> 2
                                          ]),
                                          (R = o[e >> 2]),
                                          (0 | h) == o[(R + 16) >> 2];

                                      );
                                      if (
                                        ((C = e),
                                        b[(e + 15) | 0] &&
                                          ((C = 0),
                                          (h = V(
                                            o[
                                              (o[
                                                o[
                                                  o[
                                                    (o[(e + 4) >> 2] + 8) >> 2
                                                  ] >> 2
                                                ] >> 2
                                              ] +
                                                4) >>
                                                2
                                            ],
                                            o[(R + 12) >> 2],
                                          )) &&
                                            N(o[e >> 2]) &&
                                            ((o[e >> 2] = h),
                                            (a[(e + 15) | 0] = 0),
                                            (o[(h + 24) >> 2] = e),
                                            (C =
                                              o[
                                                o[(o[(e + 4) >> 2] + 4) >> 2] >>
                                                  2
                                              ]))),
                                        !C)
                                      )
                                        break r;
                                      (h =
                                        o[o[(o[(C + 4) >> 2] + 8) >> 2] >> 2]),
                                        (e = o[h >> 2]),
                                        kr(r, h, s),
                                        (T = 1),
                                        Z(
                                          r,
                                          C,
                                          o[(o[(e + 4) >> 2] + 12) >> 2],
                                          e,
                                          e,
                                          1,
                                        );
                                      break f;
                                    }
                                    if ((0 | h) == (0 | t)) {
                                      if (!J(o[(c + 4) >> 2])) break r;
                                      if (
                                        !$(
                                          o[(u + 12) >> 2],
                                          o[(o[(c + 4) >> 2] + 12) >> 2],
                                        )
                                      )
                                        break r;
                                      for (
                                        C =
                                          o[
                                            (o[(o[e >> 2] + 4) >> 2] + 16) >> 2
                                          ],
                                          h = e;
                                        (h =
                                          o[
                                            o[(o[(h + 4) >> 2] + 4) >> 2] >> 2
                                          ]),
                                          (0 | C) ==
                                            o[
                                              (o[(o[h >> 2] + 4) >> 2] + 16) >>
                                                2
                                            ];

                                      );
                                      (C =
                                        o[
                                          (o[
                                            (o[
                                              o[
                                                o[(o[(h + 4) >> 2] + 8) >> 2] >>
                                                  2
                                              ] >> 2
                                            ] +
                                              4) >>
                                              2
                                          ] +
                                            8) >>
                                            2
                                        ]),
                                        (o[e >> 2] =
                                          o[(o[(c + 4) >> 2] + 12) >> 2]),
                                        (T = 1),
                                        Z(
                                          r,
                                          h,
                                          o[(kr(r, e, 0) + 8) >> 2],
                                          o[(o[(u + 4) >> 2] + 8) >> 2],
                                          C,
                                          1,
                                        );
                                      break f;
                                    }
                                    if (br(t, h, (f + 56) | 0) >= p(0)) {
                                      if (
                                        ((a[(e + 14) | 0] = 1),
                                        (a[
                                          (o[
                                            o[(o[(e + 4) >> 2] + 4) >> 2] >> 2
                                          ] +
                                            14) |
                                            0
                                        ] = 1),
                                        !J(o[(u + 4) >> 2]))
                                      )
                                        break r;
                                      (C = o[(u + 16) >> 2]),
                                        (h = o[(r + 72) >> 2]),
                                        (v[(C + 28) >> 2] = v[(h + 28) >> 2]),
                                        (v[(C + 32) >> 2] = v[(h + 32) >> 2]);
                                    } else h = o[(r + 72) >> 2];
                                    if (!(br(k, h, (f + 56) | 0) <= p(0)))
                                      break f;
                                    if (
                                      ((a[(s + 14) | 0] = 1),
                                      (a[(e + 14) | 0] = 1),
                                      !J(o[(c + 4) >> 2]))
                                    )
                                      break r;
                                    (e = o[(c + 16) >> 2]),
                                      (r = o[(r + 72) >> 2]),
                                      (v[(e + 28) >> 2] = v[(r + 28) >> 2]),
                                      (v[(e + 32) >> 2] = v[(r + 32) >> 2]);
                                    break f;
                                  }
                                  if (!J(o[(u + 4) >> 2])) break r;
                                  if (!J(o[(c + 4) >> 2])) break r;
                                  if (!$(o[(o[(c + 4) >> 2] + 12) >> 2], u))
                                    break r;
                                  if (
                                    ((h = o[(u + 16) >> 2]),
                                    (v[(h + 28) >> 2] = v[(f + 84) >> 2]),
                                    (v[(h + 32) >> 2] = v[(f + 88) >> 2]),
                                    (C = rr(o[(r + 68) >> 2], h)),
                                    (h = o[(u + 16) >> 2]),
                                    (o[(h + 36) >> 2] = C),
                                    2147483647 == (0 | C))
                                  )
                                    break e;
                                  (o[(f + 112) >> 2] = o[(i + 12) >> 2]),
                                    (o[(f + 116) >> 2] = o[(t + 12) >> 2]),
                                    (o[(f + 120) >> 2] = o[(n + 12) >> 2]),
                                    (o[(f + 124) >> 2] = o[(k + 12) >> 2]),
                                    (o[(h + 24) >> 2] = 0),
                                    (o[(h + 16) >> 2] = 0),
                                    (o[(h + 20) >> 2] = 0),
                                    (A = v[(h + 28) >> 2]),
                                    (S =
                                      (l = p(v[(t + 28) >> 2] - A)) < p(0)
                                        ? p(-l)
                                        : l),
                                    (l = v[(h + 32) >> 2]),
                                    (w = p(v[(t + 32) >> 2] - l)),
                                    (m = p(S + (w < p(0) ? p(-w) : w))),
                                    (S =
                                      (w = p(v[(i + 28) >> 2] - A)) < p(0)
                                        ? p(-w)
                                        : w),
                                    (w = p(v[(i + 32) >> 2] - l)),
                                    (E = p(S + (w < p(0) ? p(-w) : w))),
                                    (L = +p(E + m)),
                                    (w = p((0.5 * +m) / L)),
                                    (v[(f + 96) >> 2] = w),
                                    (m = p((0.5 * +E) / L)),
                                    (v[(f + 100) >> 2] = m),
                                    (E = p(
                                      p(
                                        p(v[(i + 16) >> 2] * w) +
                                          p(v[(t + 16) >> 2] * m),
                                      ) + p(0),
                                    )),
                                    (v[(h + 16) >> 2] = E),
                                    (x = p(
                                      p(
                                        p(v[(i + 20) >> 2] * w) +
                                          p(v[(t + 20) >> 2] * m),
                                      ) + p(0),
                                    )),
                                    (v[(h + 20) >> 2] = x),
                                    (m = p(
                                      p(
                                        p(v[(i + 24) >> 2] * w) +
                                          p(v[(t + 24) >> 2] * m),
                                      ) + p(0),
                                    )),
                                    (v[(h + 24) >> 2] = m),
                                    (S =
                                      (w = p(v[(n + 28) >> 2] - A)) < p(0)
                                        ? p(-w)
                                        : w),
                                    (w = p(v[(n + 32) >> 2] - l)),
                                    (w = p(S + (w < p(0) ? p(-w) : w))),
                                    (S =
                                      (A = p(v[(k + 28) >> 2] - A)) < p(0)
                                        ? p(-A)
                                        : A),
                                    (A = p(v[(k + 32) >> 2] - l)),
                                    (A = p(S + (A < p(0) ? p(-A) : A))),
                                    (L = +p(w + A)),
                                    (A = p((0.5 * +A) / L)),
                                    (v[(f + 104) >> 2] = A),
                                    (l = p((0.5 * +w) / L)),
                                    (v[(f + 108) >> 2] = l),
                                    (w = p(
                                      E +
                                        p(
                                          p(v[(n + 16) >> 2] * A) +
                                            p(v[(k + 16) >> 2] * l),
                                        ),
                                    )),
                                    (v[(h + 16) >> 2] = w),
                                    (E = p(
                                      x +
                                        p(
                                          p(v[(n + 20) >> 2] * A) +
                                            p(v[(k + 20) >> 2] * l),
                                        ),
                                    )),
                                    (v[(h + 20) >> 2] = E),
                                    (A = p(
                                      m +
                                        p(
                                          p(v[(n + 24) >> 2] * A) +
                                            p(v[(k + 24) >> 2] * l),
                                        ),
                                    )),
                                    (v[(h + 24) >> 2] = A),
                                    (v[(f + 140) >> 2] = A),
                                    (v[(f + 136) >> 2] = E),
                                    (v[(f + 132) >> 2] = w),
                                    (o[(h + 12) >> 2] = 0),
                                    (h = (h + 12) | 0),
                                    8 == (0 | (C = o[(r + 1736) >> 2]))
                                      ? Fr[o[(r + 76) >> 2]](
                                          (f + 132) | 0,
                                          (f + 112) | 0,
                                          (f + 96) | 0,
                                          h,
                                        )
                                      : Fr[0 | C](
                                          (f + 132) | 0,
                                          (f + 112) | 0,
                                          (f + 96) | 0,
                                          h,
                                          o[(r + 1896) >> 2],
                                        ),
                                    o[h >> 2] | b[(r + 60) | 0] ||
                                      (11 == (0 | (h = o[(r + 1732) >> 2]))
                                        ? Fr[o[(r + 12) >> 2]](100156)
                                        : Fr[0 | h](100156, o[(r + 1896) >> 2]),
                                      (a[(r + 60) | 0] = 1)),
                                    (a[(s + 14) | 0] = 1),
                                    (a[(e + 14) | 0] = 1),
                                    (a[
                                      (o[o[(o[(e + 4) >> 2] + 4) >> 2] >> 2] +
                                        14) |
                                        0
                                    ] = 1);
                                } else z(r, e);
                              }
                              return (U = (f + 144) | 0), T;
                            }
                            Sr(o[(r + 68) >> 2]), (o[(r + 68) >> 2] = 0);
                          }
                          Br((r + 1740) | 0, 1), g();
                        }
                        function D(r, e, f, i, n, k) {
                          var u,
                            c,
                            s,
                            A = 0,
                            l = 0,
                            v = 0,
                            p = 0,
                            w = 0,
                            m = 0,
                            y = 0,
                            g = 0,
                            C = 0,
                            E = 0,
                            R = 0,
                            I = 0,
                            M = 0,
                            _ = 0;
                          (U = u = (U - 80) | 0),
                            (o[(u + 76) >> 2] = e),
                            (s = (u + 55) | 0),
                            (c = (u + 56) | 0),
                            (e = 0);
                          r: {
                            e: for (;;) {
                              (0 | g) < 0 ||
                                (((2147483647 - g) | 0) < (0 | e)
                                  ? ((o[613] = 61), (g = -1))
                                  : (g = (e + g) | 0));
                              f: {
                                i: {
                                  a: {
                                    if (
                                      ((p = o[(u + 76) >> 2]),
                                      (A = b[0 | (e = p)]))
                                    )
                                      for (;;) {
                                        n: {
                                          t: if ((A &= 255)) {
                                            if (37 != (0 | A)) break n;
                                            for (A = e; ; ) {
                                              if (37 != b[(e + 1) | 0]) break t;
                                              if (
                                                ((l = (e + 2) | 0),
                                                (o[(u + 76) >> 2] = l),
                                                (A = (A + 1) | 0),
                                                (w = b[(e + 2) | 0]),
                                                (e = l),
                                                37 != (0 | w))
                                              )
                                                break;
                                            }
                                          } else A = e;
                                          if (
                                            ((e = (A - p) | 0),
                                            r && cr(r, p, e),
                                            e)
                                          )
                                            continue e;
                                          (E = -1),
                                            (A = 1),
                                            (l = u),
                                            (e = o[(u + 76) >> 2]),
                                            (36 != b[(e + 2) | 0]) |
                                              ((a[(o[(u + 76) >> 2] + 1) | 0] -
                                                48) >>>
                                                0 >=
                                                10) ||
                                              ((E = (a[(e + 1) | 0] - 48) | 0),
                                              (I = 1),
                                              (A = 3)),
                                            (e = (A + e) | 0),
                                            (o[(l + 76) >> 2] = e),
                                            (C = 0);
                                          t: if (
                                            (l = ((v = a[0 | e]) - 32) | 0) >>>
                                              0 >
                                            31
                                          )
                                            A = e;
                                          else if (
                                            ((A = e), 75913 & (l = 1 << l))
                                          )
                                            for (;;) {
                                              if (
                                                ((A = (e + 1) | 0),
                                                (o[(u + 76) >> 2] = A),
                                                (C |= l),
                                                (l =
                                                  ((v = a[(e + 1) | 0]) - 32) |
                                                  0) >>>
                                                  0 >=
                                                  32)
                                              )
                                                break t;
                                              if (
                                                ((e = A),
                                                !(75913 & (l = 1 << l)))
                                              )
                                                break;
                                            }
                                          t: if (42 != (0 | v)) {
                                            if (
                                              (0 | (m = _r((u + 76) | 0))) <
                                              0
                                            )
                                              break a;
                                            e = o[(u + 76) >> 2];
                                          } else {
                                            if (
                                              ((l = u),
                                              (a[(A + 1) | 0] - 48) >>> 0 >=
                                                10 ||
                                                ((e = o[(u + 76) >> 2]),
                                                36 != b[(e + 2) | 0]))
                                            ) {
                                              if (I) break a;
                                              (I = 0),
                                                (m = 0),
                                                r &&
                                                  ((e = o[f >> 2]),
                                                  (o[f >> 2] = e + 4),
                                                  (m = o[e >> 2])),
                                                (e =
                                                  (o[(u + 76) >> 2] + 1) | 0);
                                            } else
                                              (o[
                                                ((((a[(e + 1) | 0] << 2) + n) |
                                                  0) -
                                                  192) >>
                                                  2
                                              ] = 10),
                                                (m =
                                                  o[
                                                    ((((a[(e + 1) | 0] << 3) +
                                                      i) |
                                                      0) -
                                                      384) >>
                                                      2
                                                  ]),
                                                (I = 1),
                                                (e = (e + 3) | 0);
                                            if (
                                              ((o[(l + 76) >> 2] = e),
                                              (0 | m) > -1)
                                            )
                                              break t;
                                            (m = (0 - m) | 0), (C |= 8192);
                                          }
                                          w = -1;
                                          t: if (46 == b[0 | e])
                                            if (42 != b[(e + 1) | 0])
                                              (o[(u + 76) >> 2] = e + 1),
                                                (w = _r((u + 76) | 0)),
                                                (e = o[(u + 76) >> 2]);
                                            else {
                                              if (
                                                !(
                                                  (a[(e + 2) | 0] - 48) >>> 0 >=
                                                  10
                                                ) &&
                                                ((e = o[(u + 76) >> 2]),
                                                36 == b[(e + 3) | 0])
                                              ) {
                                                (o[
                                                  ((((a[(e + 2) | 0] << 2) +
                                                    n) |
                                                    0) -
                                                    192) >>
                                                    2
                                                ] = 10),
                                                  (w =
                                                    o[
                                                      ((((a[(e + 2) | 0] << 3) +
                                                        i) |
                                                        0) -
                                                        384) >>
                                                        2
                                                    ]),
                                                  (e = (e + 4) | 0),
                                                  (o[(u + 76) >> 2] = e);
                                                break t;
                                              }
                                              if (I) break a;
                                              r
                                                ? ((e = o[f >> 2]),
                                                  (o[f >> 2] = e + 4),
                                                  (w = o[e >> 2]))
                                                : (w = 0),
                                                (e =
                                                  (o[(u + 76) >> 2] + 2) | 0),
                                                (o[(u + 76) >> 2] = e);
                                            }
                                          for (A = 0; ; ) {
                                            if (
                                              ((R = A),
                                              (y = -1),
                                              (a[0 | e] - 65) >>> 0 > 57)
                                            )
                                              break r;
                                            if (
                                              ((v = (e + 1) | 0),
                                              (o[(u + 76) >> 2] = v),
                                              (A = a[0 | e]),
                                              (e = v),
                                              !(
                                                ((A =
                                                  b[
                                                    (1103 +
                                                      ((A + h(R, 58)) | 0)) |
                                                      0
                                                  ]) -
                                                  1) >>>
                                                  0 <
                                                8
                                              ))
                                            )
                                              break;
                                          }
                                          t: {
                                            o: {
                                              if (19 != (0 | A)) {
                                                if (!A) break r;
                                                if ((0 | E) >= 0) {
                                                  (o[((E << 2) + n) >> 2] = A),
                                                    (A =
                                                      o[
                                                        (4 +
                                                          (e =
                                                            ((E << 3) + i) |
                                                            0)) >>
                                                          2
                                                      ]),
                                                    (o[(u + 64) >> 2] =
                                                      o[e >> 2]),
                                                    (o[(u + 68) >> 2] = A);
                                                  break o;
                                                }
                                                if (!r) break f;
                                                or((u - -64) | 0, A, f),
                                                  (v = o[(u + 76) >> 2]);
                                                break t;
                                              }
                                              if ((0 | E) > -1) break r;
                                            }
                                            if (((e = 0), !r)) continue e;
                                          }
                                          (l = -65537 & C),
                                            (A = 8192 & C ? l : C),
                                            (y = 0),
                                            (E = 1024),
                                            (C = c);
                                          t: {
                                            o: {
                                              b: {
                                                k: {
                                                  u: {
                                                    c: {
                                                      s: {
                                                        A: {
                                                          l: {
                                                            v: {
                                                              d: {
                                                                h: {
                                                                  p: {
                                                                    w: {
                                                                      m: {
                                                                        switch (
                                                                          ((e =
                                                                            a[
                                                                              (v -
                                                                                1) |
                                                                                0
                                                                            ]),
                                                                          ((e =
                                                                            R &&
                                                                            3 ==
                                                                              (15 &
                                                                                e)
                                                                              ? -33 &
                                                                                e
                                                                              : e) -
                                                                            88) |
                                                                            0)
                                                                        ) {
                                                                          case 11:
                                                                            break t;
                                                                          case 9:
                                                                          case 13:
                                                                          case 14:
                                                                          case 15:
                                                                            break o;
                                                                          case 27:
                                                                            break s;
                                                                          case 12:
                                                                          case 17:
                                                                            break v;
                                                                          case 23:
                                                                            break d;
                                                                          case 0:
                                                                          case 32:
                                                                            break h;
                                                                          case 24:
                                                                            break p;
                                                                          case 22:
                                                                            break w;
                                                                          case 29:
                                                                            break m;
                                                                          case 1:
                                                                          case 2:
                                                                          case 3:
                                                                          case 4:
                                                                          case 5:
                                                                          case 6:
                                                                          case 7:
                                                                          case 8:
                                                                          case 10:
                                                                          case 16:
                                                                          case 18:
                                                                          case 19:
                                                                          case 20:
                                                                          case 21:
                                                                          case 25:
                                                                          case 26:
                                                                          case 28:
                                                                          case 30:
                                                                          case 31:
                                                                            break i;
                                                                        }
                                                                        switch (
                                                                          (e -
                                                                            65) |
                                                                          0
                                                                        ) {
                                                                          case 0:
                                                                          case 4:
                                                                          case 5:
                                                                          case 6:
                                                                            break o;
                                                                          case 2:
                                                                            break u;
                                                                          case 1:
                                                                          case 3:
                                                                            break i;
                                                                        }
                                                                        if (
                                                                          83 ==
                                                                          (0 |
                                                                            e)
                                                                        )
                                                                          break c;
                                                                        break i;
                                                                      }
                                                                      (v =
                                                                        o[
                                                                          (u +
                                                                            64) >>
                                                                            2
                                                                        ]),
                                                                        (l =
                                                                          o[
                                                                            (u +
                                                                              68) >>
                                                                              2
                                                                          ]),
                                                                        (E = 1024);
                                                                      break l;
                                                                    }
                                                                    e = 0;
                                                                    w: switch (
                                                                      255 & R
                                                                    ) {
                                                                      case 0:
                                                                      case 1:
                                                                      case 6:
                                                                        o[
                                                                          o[
                                                                            (u +
                                                                              64) >>
                                                                              2
                                                                          ] >> 2
                                                                        ] = g;
                                                                        continue e;
                                                                      case 2:
                                                                        (A =
                                                                          o[
                                                                            (u +
                                                                              64) >>
                                                                              2
                                                                          ]),
                                                                          (o[
                                                                            A >>
                                                                              2
                                                                          ] = g),
                                                                          (o[
                                                                            (A +
                                                                              4) >>
                                                                              2
                                                                          ] =
                                                                            g >>
                                                                            31);
                                                                        continue e;
                                                                      case 3:
                                                                        t[
                                                                          o[
                                                                            (u +
                                                                              64) >>
                                                                              2
                                                                          ] >> 1
                                                                        ] = g;
                                                                        continue e;
                                                                      case 4:
                                                                        a[
                                                                          o[
                                                                            (u +
                                                                              64) >>
                                                                              2
                                                                          ]
                                                                        ] = g;
                                                                        continue e;
                                                                      case 7:
                                                                        break w;
                                                                      default:
                                                                        continue e;
                                                                    }
                                                                    (A =
                                                                      o[
                                                                        (u +
                                                                          64) >>
                                                                          2
                                                                      ]),
                                                                      (o[
                                                                        A >> 2
                                                                      ] = g),
                                                                      (o[
                                                                        (A +
                                                                          4) >>
                                                                          2
                                                                      ] =
                                                                        g >>
                                                                        31);
                                                                    continue e;
                                                                  }
                                                                  (w =
                                                                    w >>> 0 > 8
                                                                      ? w
                                                                      : 8),
                                                                    (A |= 8),
                                                                    (e = 120);
                                                                }
                                                                if (
                                                                  ((p = c),
                                                                  (M = 32 & e),
                                                                  (l = R =
                                                                    o[
                                                                      (u +
                                                                        68) >>
                                                                        2
                                                                    ]) |
                                                                    (v =
                                                                      o[
                                                                        (u +
                                                                          64) >>
                                                                          2
                                                                      ]))
                                                                )
                                                                  for (
                                                                    ;
                                                                    (a[
                                                                      0 |
                                                                        (p =
                                                                          (p -
                                                                            1) |
                                                                          0)
                                                                    ] =
                                                                      M |
                                                                      b[
                                                                        (1632 +
                                                                          (15 &
                                                                            v)) |
                                                                          0
                                                                      ]),
                                                                      (_ =
                                                                        (!l &
                                                                          (v >>>
                                                                            0 >
                                                                            15)) |
                                                                        (0 !=
                                                                          (0 |
                                                                            l))),
                                                                      (R = l),
                                                                      (l =
                                                                        (l >>>
                                                                          4) |
                                                                        0),
                                                                      (v =
                                                                        ((15 &
                                                                          R) <<
                                                                          28) |
                                                                        (v >>>
                                                                          4)),
                                                                      _;

                                                                  );
                                                                if (
                                                                  !(
                                                                    o[
                                                                      (u +
                                                                        64) >>
                                                                        2
                                                                    ] |
                                                                    o[
                                                                      (u +
                                                                        68) >>
                                                                        2
                                                                    ]
                                                                  ) | !(8 & A)
                                                                )
                                                                  break A;
                                                                (E =
                                                                  (1024 +
                                                                    ((e >>> 4) |
                                                                      0)) |
                                                                  0),
                                                                  (y = 2);
                                                                break A;
                                                              }
                                                              if (
                                                                ((e = c),
                                                                (l = p =
                                                                  o[
                                                                    (u + 68) >>
                                                                      2
                                                                  ]) |
                                                                  (v =
                                                                    o[
                                                                      (u +
                                                                        64) >>
                                                                        2
                                                                    ]))
                                                              )
                                                                for (
                                                                  ;
                                                                  (a[
                                                                    0 |
                                                                      (e =
                                                                        (e -
                                                                          1) |
                                                                        0)
                                                                  ] =
                                                                    (7 & v) |
                                                                    48),
                                                                    (R =
                                                                      (!l &
                                                                        (v >>>
                                                                          0 >
                                                                          7)) |
                                                                      (0 !=
                                                                        (0 |
                                                                          l))),
                                                                    (p = l),
                                                                    (l =
                                                                      (l >>>
                                                                        3) |
                                                                      0),
                                                                    (v =
                                                                      ((7 &
                                                                        p) <<
                                                                        29) |
                                                                      (v >>>
                                                                        3)),
                                                                    R;

                                                                );
                                                              if (
                                                                ((p = e),
                                                                !(8 & A))
                                                              )
                                                                break A;
                                                              w =
                                                                (0 |
                                                                  (e =
                                                                    (c - p) |
                                                                    0)) <
                                                                (0 | w)
                                                                  ? w
                                                                  : (e + 1) | 0;
                                                              break A;
                                                            }
                                                            (l = e =
                                                              o[(u + 68) >> 2]),
                                                              (v =
                                                                o[
                                                                  (u + 64) >> 2
                                                                ]),
                                                              (0 | e) < -1 ||
                                                              (0 | e) <= -1
                                                                ? ((l =
                                                                    (0 -
                                                                      ((l +
                                                                        (0 !=
                                                                          (0 |
                                                                            v))) |
                                                                        0)) |
                                                                    0),
                                                                  (v =
                                                                    (0 - v) |
                                                                    0),
                                                                  (o[
                                                                    (u + 64) >>
                                                                      2
                                                                  ] = v),
                                                                  (o[
                                                                    (u + 68) >>
                                                                      2
                                                                  ] = l),
                                                                  (y = 1),
                                                                  (E = 1024))
                                                                : 2048 & A
                                                                ? ((y = 1),
                                                                  (E = 1025))
                                                                : (E = (y =
                                                                    1 & A)
                                                                    ? 1026
                                                                    : 1024);
                                                          }
                                                          p = wr(v, l, c);
                                                        }
                                                        if (
                                                          ((A =
                                                            (0 | w) > -1
                                                              ? -65537 & A
                                                              : A),
                                                          (l = e =
                                                            o[(u + 68) >> 2]),
                                                          !(
                                                            w |
                                                            (0 !=
                                                              (0 |
                                                                (v =
                                                                  o[
                                                                    (u + 64) >>
                                                                      2
                                                                  ]))) |
                                                            (0 != (0 | e))
                                                          ))
                                                        ) {
                                                          (w = 0), (p = c);
                                                          break i;
                                                        }
                                                        w =
                                                          (0 |
                                                            (e =
                                                              (!(l | v) +
                                                                ((c - p) | 0)) |
                                                              0)) <
                                                          (0 | w)
                                                            ? w
                                                            : e;
                                                        break i;
                                                      }
                                                      C = 0 != (0 | (e = w));
                                                      s: {
                                                        A: {
                                                          l: {
                                                            v: if (
                                                              !(
                                                                !(
                                                                  3 &
                                                                  (A = p =
                                                                    (A =
                                                                      o[
                                                                        (u +
                                                                          64) >>
                                                                          2
                                                                      ]) ||
                                                                    1071)
                                                                ) | !e
                                                              )
                                                            )
                                                              for (;;) {
                                                                if (!b[0 | A])
                                                                  break l;
                                                                if (
                                                                  ((C =
                                                                    0 !=
                                                                    (0 |
                                                                      (e =
                                                                        (e -
                                                                          1) |
                                                                        0))),
                                                                  !(
                                                                    3 &
                                                                    (A =
                                                                      (A + 1) |
                                                                      0)
                                                                  ))
                                                                )
                                                                  break v;
                                                                if (!e) break;
                                                              }
                                                            if (!C) break A;
                                                          }
                                                          l: if (
                                                            !(
                                                              !b[0 | A] |
                                                              (e >>> 0 < 4)
                                                            )
                                                          )
                                                            for (;;) {
                                                              if (
                                                                (-1 ^
                                                                  (v =
                                                                    o[
                                                                      A >> 2
                                                                    ])) &
                                                                (v - 16843009) &
                                                                -2139062144
                                                              )
                                                                break l;
                                                              if (
                                                                ((A =
                                                                  (A + 4) | 0),
                                                                !(
                                                                  (e =
                                                                    (e - 4) |
                                                                    0) >>>
                                                                    0 >
                                                                  3
                                                                ))
                                                              )
                                                                break;
                                                            }
                                                          if (e)
                                                            for (;;) {
                                                              if (
                                                                ((v = A),
                                                                !b[0 | A])
                                                              )
                                                                break s;
                                                              if (
                                                                ((A =
                                                                  (A + 1) | 0),
                                                                !(e =
                                                                  (e - 1) | 0))
                                                              )
                                                                break;
                                                            }
                                                        }
                                                        v = 0;
                                                      }
                                                      (C = v || (w + p) | 0),
                                                        (A = l),
                                                        (w = v
                                                          ? (v - p) | 0
                                                          : w);
                                                      break i;
                                                    }
                                                    if (
                                                      ((l = o[(u + 64) >> 2]),
                                                      w)
                                                    )
                                                      break k;
                                                    (e = 0), Rr(r, 32, m, 0, A);
                                                    break b;
                                                  }
                                                  (o[(u + 12) >> 2] = 0),
                                                    (o[(u + 8) >> 2] =
                                                      o[(u + 64) >> 2]),
                                                    (o[(u + 64) >> 2] = u + 8),
                                                    (w = -1),
                                                    (l = (u + 8) | 0);
                                                }
                                                e = 0;
                                                k: {
                                                  for (;;) {
                                                    if (!(p = o[l >> 2]))
                                                      break k;
                                                    if (
                                                      !(
                                                        (v =
                                                          (0 |
                                                            (p = Ar(
                                                              (u + 4) | 0,
                                                              p,
                                                            ))) <
                                                          0) |
                                                        (p >>> 0 >
                                                          (w - e) >>> 0)
                                                      )
                                                    ) {
                                                      if (
                                                        ((l = (l + 4) | 0),
                                                        w >>> 0 >
                                                          (e = (e + p) | 0) >>>
                                                            0)
                                                      )
                                                        continue;
                                                      break k;
                                                    }
                                                    break;
                                                  }
                                                  if (((y = -1), v)) break r;
                                                }
                                                if ((Rr(r, 32, m, e, A), e))
                                                  for (
                                                    l = 0, v = o[(u + 64) >> 2];
                                                    ;

                                                  ) {
                                                    if (!(p = o[v >> 2]))
                                                      break b;
                                                    if (
                                                      (0 |
                                                        (l =
                                                          ((p = Ar(
                                                            (u + 4) | 0,
                                                            p,
                                                          )) +
                                                            l) |
                                                          0)) >
                                                      (0 | e)
                                                    )
                                                      break b;
                                                    if (
                                                      (cr(r, (u + 4) | 0, p),
                                                      (v = (v + 4) | 0),
                                                      !(e >>> 0 > l >>> 0))
                                                    )
                                                      break;
                                                  }
                                                else e = 0;
                                              }
                                              Rr(r, 32, m, e, 8192 ^ A),
                                                (e = (0 | e) < (0 | m) ? m : e);
                                              continue e;
                                            }
                                            e =
                                              0 |
                                              Fr[0 | k](
                                                r,
                                                d[(u + 64) >> 3],
                                                m,
                                                w,
                                                A,
                                                e,
                                              );
                                            continue e;
                                          }
                                          (a[(u + 55) | 0] = o[(u + 64) >> 2]),
                                            (w = 1),
                                            (p = s),
                                            (A = l);
                                          break i;
                                        }
                                        (l = (e + 1) | 0),
                                          (o[(u + 76) >> 2] = l),
                                          (A = b[(e + 1) | 0]),
                                          (e = l);
                                      }
                                    if (((y = g), r)) break r;
                                    if (!I) break f;
                                    for (e = 1; ; ) {
                                      if ((r = o[((e << 2) + n) >> 2])) {
                                        if (
                                          (or(((e << 3) + i) | 0, r, f),
                                          (y = 1),
                                          10 != (0 | (e = (e + 1) | 0)))
                                        )
                                          continue;
                                        break r;
                                      }
                                      break;
                                    }
                                    if (((y = 1), e >>> 0 >= 10)) break r;
                                    for (;;) {
                                      if (o[((e << 2) + n) >> 2]) break a;
                                      if (10 == (0 | (e = (e + 1) | 0))) break;
                                    }
                                    break r;
                                  }
                                  y = -1;
                                  break r;
                                }
                                Rr(
                                  r,
                                  32,
                                  (e =
                                    (0 |
                                      (l =
                                        ((w =
                                          (0 | (v = (C - p) | 0)) > (0 | w)
                                            ? v
                                            : w) +
                                          y) |
                                        0)) >
                                    (0 | m)
                                      ? l
                                      : m),
                                  l,
                                  A,
                                ),
                                  cr(r, E, y),
                                  Rr(r, 48, e, l, 65536 ^ A),
                                  Rr(r, 48, w, v, 0),
                                  cr(r, p, v),
                                  Rr(r, 32, e, l, 8192 ^ A);
                                continue;
                              }
                              break;
                            }
                            y = 0;
                          }
                          return (U = (u + 80) | 0), y;
                        }
                        function H(r, e) {
                          var f,
                            i = 0,
                            n = 0,
                            t = 0,
                            k = 0,
                            u = p(0),
                            c = 0,
                            s = p(0),
                            A = 0,
                            l = 0,
                            d = 0;
                          (U = f = (U + -64) | 0),
                            (o[(r + 72) >> 2] = e),
                            (i = t = o[(e + 8) >> 2]);
                          r: {
                            e: {
                              f: {
                                for (;;) {
                                  if ((n = o[(i + 24) >> 2])) break f;
                                  if ((0 | t) == (0 | (i = o[(i + 8) >> 2])))
                                    break;
                                }
                                for (
                                  o[f >> 2] = o[(t + 4) >> 2],
                                    t = i = o[(r - -64) >> 2];
                                  (t = o[(t + 4) >> 2]),
                                    (n = o[t >> 2]) &&
                                      !(
                                        0 |
                                        Fr[o[(i + 16) >> 2]](
                                          o[(i + 12) >> 2],
                                          f,
                                          n,
                                        )
                                      );

                                );
                                if (
                                  ((n = o[t >> 2]),
                                  (t = o[o[(o[(n + 4) >> 2] + 8) >> 2] >> 2]),
                                  (c = o[t >> 2]),
                                  (k = o[n >> 2]),
                                  br(
                                    o[(o[(k + 4) >> 2] + 16) >> 2],
                                    e,
                                    o[(k + 16) >> 2],
                                  ) == p(0))
                                ) {
                                  if (
                                    ((u = v[(e + 28) >> 2]),
                                    (t = o[n >> 2]),
                                    (i = o[(t + 16) >> 2]),
                                    !(
                                      (u != v[(i + 28) >> 2]) |
                                      (v[(i + 32) >> 2] != v[(e + 32) >> 2])
                                    ))
                                  ) {
                                    if (
                                      ((n = o[(e + 8) >> 2]),
                                      (o[(f + 40) >> 2] = 0),
                                      (o[(f + 44) >> 2] = 0),
                                      (o[(f + 32) >> 2] = 0),
                                      (o[(f + 36) >> 2] = 0),
                                      (e = o[287]),
                                      (o[(f + 24) >> 2] = o[286]),
                                      (o[(f + 28) >> 2] = e),
                                      (e = o[285]),
                                      (o[(f + 16) >> 2] = o[284]),
                                      (o[(f + 20) >> 2] = e),
                                      (o[(f + 32) >> 2] = o[(i + 12) >> 2]),
                                      (o[(f + 36) >> 2] =
                                        o[(o[(n + 16) >> 2] + 12) >> 2]),
                                      (v[(f + 52) >> 2] = v[(i + 16) >> 2]),
                                      (v[(f + 56) >> 2] = v[(i + 20) >> 2]),
                                      (v[(f + 60) >> 2] = v[(i + 24) >> 2]),
                                      (o[(i + 12) >> 2] = 0),
                                      (e = (i + 12) | 0),
                                      8 == (0 | (i = o[(r + 1736) >> 2]))
                                        ? Fr[o[(r + 76) >> 2]](
                                            (f + 52) | 0,
                                            (f + 32) | 0,
                                            (f + 16) | 0,
                                            e,
                                          )
                                        : Fr[0 | i](
                                            (f + 52) | 0,
                                            (f + 32) | 0,
                                            (f + 16) | 0,
                                            e,
                                            o[(r + 1896) >> 2],
                                          ),
                                      o[e >> 2] ||
                                        (o[e >> 2] = o[(f + 32) >> 2]),
                                      $(t, n))
                                    )
                                      break e;
                                    break r;
                                  }
                                  if (
                                    ((k = o[(t + 4) >> 2]),
                                    (i = o[(k + 16) >> 2]),
                                    v[(i + 32) >> 2] != v[(e + 32) >> 2] ||
                                      u != v[(i + 28) >> 2])
                                  ) {
                                    if (!J(k)) break r;
                                    if (b[(n + 15) | 0]) {
                                      if (!N(o[(t + 8) >> 2])) break r;
                                      a[(n + 15) | 0] = 0;
                                    }
                                    if (!$(o[(e + 8) >> 2], t)) break r;
                                    H(r, e);
                                    break e;
                                  }
                                  for (
                                    ;
                                    (n = o[o[(o[(n + 4) >> 2] + 4) >> 2] >> 2]),
                                      (0 | i) ==
                                        o[(o[(o[n >> 2] + 4) >> 2] + 16) >> 2];

                                  );
                                  if (
                                    ((t =
                                      o[o[(o[(n + 4) >> 2] + 8) >> 2] >> 2]),
                                    (c = o[t >> 2]),
                                    (k = o[(c + 4) >> 2]),
                                    (i = o[(k + 8) >> 2]),
                                    b[(t + 15) | 0])
                                  ) {
                                    if (
                                      ((o[(c + 24) >> 2] = 0),
                                      xr(o[(t + 4) >> 2]),
                                      W(t),
                                      !N(k))
                                    )
                                      break r;
                                    k = o[(o[(i + 4) >> 2] + 12) >> 2];
                                  }
                                  if (!$(o[(e + 8) >> 2], k)) break r;
                                  (A = o[(k + 8) >> 2]),
                                    (k = i),
                                    (e = i),
                                    (t = o[(o[(i + 4) >> 2] + 16) >> 2]),
                                    (u = v[(t + 28) >> 2]),
                                    (c = o[(i + 16) >> 2]),
                                    (u < (s = v[(c + 28) >> 2])) |
                                      (v[(t + 32) >> 2] <= v[(c + 32) >> 2]
                                        ? u == s
                                        : 0) || (e = 0),
                                    Z(r, n, A, k, e, 1);
                                  break e;
                                }
                                if (
                                  ((l = b[(n + 12) | 0]),
                                  (c = o[(c + 4) >> 2]),
                                  (A = o[(c + 16) >> 2]),
                                  (u = v[(A + 28) >> 2]),
                                  (d = o[(o[(k + 4) >> 2] + 16) >> 2]),
                                  (i = n),
                                  u < (s = v[(d + 28) >> 2]) ||
                                    (u == s &&
                                      ((i = n),
                                      v[(A + 32) >> 2] <= v[(d + 32) >> 2])) ||
                                    (i = t),
                                  b[(i + 15) | 0] || l)
                                ) {
                                  i: {
                                    if ((0 | i) == (0 | n)) {
                                      if (
                                        (t = V(
                                          o[(o[(e + 8) >> 2] + 4) >> 2],
                                          o[(k + 12) >> 2],
                                        ))
                                      )
                                        break i;
                                      break r;
                                    }
                                    if (
                                      !(t = V(
                                        o[(o[(c + 8) >> 2] + 4) >> 2],
                                        o[(e + 8) >> 2],
                                      ))
                                    )
                                      break r;
                                    t = o[(t + 4) >> 2];
                                  }
                                  if (b[(i + 15) | 0]) {
                                    if (N(o[i >> 2])) {
                                      (o[i >> 2] = t),
                                        (a[(i + 15) | 0] = 0),
                                        (o[(t + 24) >> 2] = i),
                                        H(r, e);
                                      break e;
                                    }
                                    break r;
                                  }
                                  if (!(i = F(16))) break r;
                                  if (
                                    ((o[i >> 2] = t),
                                    (n = Cr(
                                      o[(r - -64) >> 2],
                                      o[(n + 4) >> 2],
                                      i,
                                    )),
                                    (o[(i + 4) >> 2] = n),
                                    !n)
                                  )
                                    break r;
                                  (a[(i + 13) | 0] = 0),
                                    (a[(i + 14) | 0] = 0),
                                    (a[(i + 15) | 0] = 0),
                                    (o[(t + 24) >> 2] = i),
                                    (k = o[(r + 56) >> 2]),
                                    (t =
                                      (o[(o[i >> 2] + 28) >> 2] +
                                        o[(o[o[(n + 4) >> 2] >> 2] + 8) >> 2]) |
                                      0),
                                    (o[(i + 8) >> 2] = t);
                                  i: {
                                    a: switch ((k - 100130) | 0) {
                                      case 0:
                                        n = 1 & t;
                                        break i;
                                      case 1:
                                        n = 0 != (0 | t);
                                        break i;
                                      case 2:
                                        n = (0 | t) > 0;
                                        break i;
                                      case 3:
                                        n = (t >>> 31) | 0;
                                        break i;
                                      case 4:
                                        break a;
                                      default:
                                        break i;
                                    }
                                    n = (t + 1) >>> 0 > 2;
                                  }
                                  (a[(i + 12) | 0] = n), H(r, e);
                                  break e;
                                }
                                Z((i = r), n, (r = o[(e + 8) >> 2]), r, 0, 1);
                                break e;
                              }
                              for (
                                e = o[(o[n >> 2] + 16) >> 2];
                                (n = o[o[(o[(n + 4) >> 2] + 4) >> 2] >> 2]),
                                  (i = o[n >> 2]),
                                  (0 | e) == o[(i + 16) >> 2];

                              );
                              if (b[(n + 15) | 0]) {
                                if (
                                  !(e = V(
                                    o[
                                      (o[
                                        o[o[(o[(n + 4) >> 2] + 8) >> 2] >> 2] >>
                                          2
                                      ] +
                                        4) >>
                                        2
                                    ],
                                    o[(i + 12) >> 2],
                                  ))
                                )
                                  break r;
                                if (!N(o[n >> 2])) break r;
                                if (
                                  ((o[n >> 2] = e),
                                  (a[(n + 15) | 0] = 0),
                                  (o[(e + 24) >> 2] = n),
                                  !(n = o[o[(o[(n + 4) >> 2] + 4) >> 2] >> 2]))
                                )
                                  break r;
                              }
                              if (
                                ((e = o[o[(o[(n + 4) >> 2] + 8) >> 2] >> 2]),
                                (i = o[e >> 2]),
                                (e = kr(r, e, 0)),
                                (0 | i) != (0 | (t = o[(e + 8) >> 2])))
                              )
                                Z(r, n, t, i, i, 1);
                              else {
                                if (
                                  ((t = o[n >> 2]),
                                  (A = o[o[(o[(n + 4) >> 2] + 8) >> 2] >> 2]),
                                  (c = o[A >> 2]),
                                  o[(o[(t + 4) >> 2] + 16) >> 2] !=
                                    o[(o[(c + 4) >> 2] + 16) >> 2] && O(r, n),
                                  (d = 1),
                                  (k = o[(r + 72) >> 2]),
                                  (u = v[(k + 28) >> 2]),
                                  (l = o[(t + 16) >> 2]),
                                  !(
                                    (u != v[(l + 28) >> 2]) |
                                    (v[(l + 32) >> 2] != v[(k + 32) >> 2])
                                  ))
                                ) {
                                  if (!$(o[(o[(i + 4) >> 2] + 12) >> 2], t))
                                    break r;
                                  for (
                                    i = o[(o[n >> 2] + 16) >> 2];
                                    (n = o[o[(o[(n + 4) >> 2] + 4) >> 2] >> 2]),
                                      (k = o[n >> 2]),
                                      (0 | i) == o[(k + 16) >> 2];

                                  );
                                  if (b[(n + 15) | 0]) {
                                    if (
                                      !(i = V(
                                        o[
                                          (o[
                                            o[
                                              o[(o[(n + 4) >> 2] + 8) >> 2] >> 2
                                            ] >> 2
                                          ] +
                                            4) >>
                                            2
                                        ],
                                        o[(k + 12) >> 2],
                                      ))
                                    )
                                      break r;
                                    if (!N(o[n >> 2])) break r;
                                    if (
                                      ((o[n >> 2] = i),
                                      (a[(n + 15) | 0] = 0),
                                      (o[(i + 24) >> 2] = n),
                                      !(n =
                                        o[o[(o[(n + 4) >> 2] + 4) >> 2] >> 2]))
                                    )
                                      break r;
                                  }
                                  (k = o[o[(o[(n + 4) >> 2] + 8) >> 2] >> 2]),
                                    (i = o[k >> 2]),
                                    kr(r, k, A),
                                    (k = o[(r + 72) >> 2]),
                                    (u = v[(k + 28) >> 2]),
                                    (d = 0);
                                }
                                f: {
                                  if (
                                    ((s = u),
                                    (l = o[(c + 16) >> 2]),
                                    (s != (u = v[(l + 28) >> 2])) |
                                      (v[(l + 32) >> 2] != v[(k + 32) >> 2]))
                                  ) {
                                    if (d) break f;
                                  } else {
                                    if (!$(e, o[(o[(c + 4) >> 2] + 12) >> 2]))
                                      break r;
                                    e = kr(r, A, 0);
                                  }
                                  Z(r, n, o[(e + 8) >> 2], i, i, 1);
                                  break e;
                                }
                                if (
                                  ((i = o[(t + 16) >> 2]),
                                  (s = v[(i + 28) >> 2]),
                                  (!(v[(l + 32) >> 2] <= v[(i + 32) >> 2]) |
                                    (u != s) &&
                                    !(s > u)) ||
                                    (t = o[(o[(c + 4) >> 2] + 12) >> 2]),
                                  !(e = V(o[(o[(e + 8) >> 2] + 4) >> 2], t)))
                                )
                                  break r;
                                Z(r, n, e, (i = o[(e + 8) >> 2]), i, 0),
                                  (a[
                                    (o[(o[(e + 4) >> 2] + 24) >> 2] + 15) | 0
                                  ] = 1),
                                  Y(r, n);
                              }
                            }
                            return void (U = (f - -64) | 0);
                          }
                          Br((r + 1740) | 0, 1), g();
                        }
                        function Q(r) {
                          r |= 0;
                          var e,
                            f = 0,
                            i = 0,
                            a = 0,
                            n = p(0),
                            t = p(0),
                            b = 0,
                            k = 0,
                            u = p(0),
                            c = p(0),
                            s = p(0),
                            A = p(0),
                            l = 0,
                            d = p(0),
                            h = p(0),
                            w = p(0),
                            m = p(0),
                            y = p(0),
                            g = p(0),
                            C = p(0),
                            E = p(0),
                            R = 0,
                            I = 0,
                            M = p(0),
                            _ = p(0),
                            S = 0,
                            x = 0,
                            P = 0,
                            L = 0,
                            B = 0,
                            T = 0,
                            j = 0,
                            F = 0;
                          (e = o[(r + 8) >> 2]),
                            (f = (U - 80) | 0),
                            (t = v[(r + 16) >> 2]),
                            (v[(f + 8) >> 2] = t),
                            (w = v[(r + 20) >> 2]),
                            (v[(f + 12) >> 2] = w),
                            (m = v[(r + 24) >> 2]),
                            (v[(f + 16) >> 2] = m);
                          r: if (
                            (S = (t == p(0)) & (w == p(0)) & (m == p(0)))
                          ) {
                            if (
                              ((o[(f + 76) >> 2] = -42943038),
                              (o[(f + 68) >> 2] = -42943038),
                              (o[(f + 72) >> 2] = -42943038),
                              (o[(f + 64) >> 2] = 2104540610),
                              (o[(f + 56) >> 2] = 2104540610),
                              (o[(f + 60) >> 2] = 2104540610),
                              (x = (0 | (l = o[e >> 2])) == (0 | e)))
                            )
                              (h = p(-19999999867631625e21)),
                                (u = p(19999999867631625e21)),
                                (c = p(19999999867631625e21)),
                                (d = p(-19999999867631625e21)),
                                (s = p(19999999867631625e21)),
                                (A = p(-19999999867631625e21));
                            else {
                              for (
                                y = p(19999999867631625e21),
                                  g = p(-19999999867631625e21),
                                  C = p(-19999999867631625e21),
                                  E = p(19999999867631625e21),
                                  M = p(-19999999867631625e21),
                                  _ = p(19999999867631625e21),
                                  h = p(-19999999867631625e21),
                                  u = p(19999999867631625e21),
                                  A = p(-19999999867631625e21),
                                  s = p(19999999867631625e21),
                                  d = p(-19999999867631625e21),
                                  c = p(19999999867631625e21),
                                  i = l;
                                (h = (a = (n = v[(i + 24) >> 2]) > h) ? n : h),
                                  (g = a ? n : g),
                                  (u = (R = n < u) ? n : u),
                                  (y = R ? n : y),
                                  (A = (b = (n = v[(i + 20) >> 2]) > A)
                                    ? n
                                    : A),
                                  (C = b ? n : C),
                                  (s = (I = n < s) ? n : s),
                                  (E = I ? n : E),
                                  (d = (k = (n = v[(i + 16) >> 2]) > d)
                                    ? n
                                    : d),
                                  (M = k ? n : M),
                                  (P = k ? i : P),
                                  (c = (k = n < c) ? n : c),
                                  (_ = k ? n : _),
                                  (L = k ? i : L),
                                  (B = a ? i : B),
                                  (T = R ? i : T),
                                  (j = b ? i : j),
                                  (F = I ? i : F),
                                  (0 | e) != (0 | (i = o[i >> 2]));

                              );
                              (o[(f + 20) >> 2] = L),
                                (v[(f + 56) >> 2] = _),
                                (v[(f + 68) >> 2] = M),
                                (o[(f + 32) >> 2] = P),
                                (v[(f + 60) >> 2] = E),
                                (o[(f + 24) >> 2] = F),
                                (v[(f + 72) >> 2] = C),
                                (o[(f + 36) >> 2] = j),
                                (v[(f + 64) >> 2] = y),
                                (o[(f + 28) >> 2] = T),
                                (v[(f + 76) >> 2] = g),
                                (o[(f + 40) >> 2] = B);
                            }
                            if (
                              ((i = 2),
                              (a = (b = p(A - s) > p(d - c)) << 2),
                              (a =
                                p(h - u) >
                                p(
                                  v[(a + ((f + 68) | 0)) >> 2] -
                                    v[(a + ((f + 56) | 0)) >> 2],
                                )
                                  ? 2
                                  : b),
                              v[((b = a << 2) + ((f + 56) | 0)) >> 2] >=
                                v[(b + ((f + 68) | 0)) >> 2])
                            )
                              (o[(f + 8) >> 2] = 0), (o[(f + 12) >> 2] = 0);
                            else {
                              if (
                                ((i = o[((a <<= 2) + ((f + 20) | 0)) >> 2]),
                                (a = o[(a + ((f + 32) | 0)) >> 2]),
                                (g = v[(a + 16) >> 2]),
                                (s = p(v[(i + 16) >> 2] - g)),
                                (v[(f + 44) >> 2] = s),
                                (C = v[(a + 20) >> 2]),
                                (A = p(v[(i + 20) >> 2] - C)),
                                (v[(f + 48) >> 2] = A),
                                (E = v[(a + 24) >> 2]),
                                (n = p(v[(i + 24) >> 2] - E)),
                                (v[(f + 52) >> 2] = n),
                                !x)
                              ) {
                                for (
                                  y = p(0), i = l;
                                  (u = p(v[(i + 20) >> 2] - C)),
                                    (c = p(v[(i + 16) >> 2] - g)),
                                    (h = p(p(s * u) - p(A * c))),
                                    (d = p(v[(i + 24) >> 2] - E)),
                                    (u = p(p(A * d) - p(n * u))),
                                    (c = p(p(n * c) - p(s * d))),
                                    (d = p(p(h * h) + p(p(u * u) + p(c * c)))) >
                                      y && ((m = h), (w = c), (y = d), (t = u)),
                                    (0 | e) != (0 | (i = o[i >> 2]));

                                );
                                if (
                                  ((v[(f + 16) >> 2] = m),
                                  (v[(f + 12) >> 2] = w),
                                  (v[(f + 8) >> 2] = t),
                                  !(y <= p(0)))
                                )
                                  break r;
                              }
                              (o[(f + 16) >> 2] = 0),
                                (o[(f + 8) >> 2] = 0),
                                (o[(f + 12) >> 2] = 0),
                                (i =
                                  (A < p(0) ? p(-A) : A) >
                                  (s < p(0) ? p(-s) : s)),
                                (t = v[(((f + 44) | 0) + (i << 2)) >> 2]),
                                (i =
                                  (n < p(0) ? p(-n) : n) >
                                  (t < p(0) ? p(-t) : t)
                                    ? 2
                                    : i);
                            }
                            (o[(((f + 8) | 0) + (i << 2)) >> 2] = 1065353216),
                              (m = v[(f + 16) >> 2]),
                              (t = v[(f + 8) >> 2]),
                              (w = v[(f + 12) >> 2]);
                          } else l = o[e >> 2];
                          if (
                            ((a =
                              (w < p(0) ? p(-w) : w) > (t < p(0) ? p(-t) : t)),
                            (t = v[(((f + 8) | 0) + (a << 2)) >> 2]),
                            (i = (r + 28) | 0),
                            (a =
                              (m < p(0) ? p(-m) : m) > (t < p(0) ? p(-t) : t)
                                ? 2
                                : a),
                            (o[(i + (b = a << 2)) >> 2] = 0),
                            (o[
                              ((k = ((a + 1) >>> 0) % 3 << 2) + i) >> 2
                            ] = 1065353216),
                            (o[((a = ((a + 2) >>> 0) % 3 << 2) + i) >> 2] = 0),
                            (o[((i = (r + 40) | 0) + b) >> 2] = 0),
                            (f = v[(b + ((f + 8) | 0)) >> 2] > p(0)),
                            (v[(i + k) >> 2] = p(f ? -0 : 0)),
                            (v[(i + a) >> 2] = p(f ? 1 : -1)),
                            !(a = (0 | e) == (0 | l)))
                          )
                            for (
                              i = l;
                              (f = o[(i + 20) >> 2]),
                                (o[(i + 28) >> 2] = o[(i + 16) >> 2]),
                                (o[(i + 32) >> 2] = f),
                                (0 | e) != (0 | (i = o[i >> 2]));

                            );
                          if (
                            S &&
                            (0 | (f = o[(e + 40) >> 2])) !=
                              (0 | (b = (e + 40) | 0))
                          ) {
                            for (t = p(0); ; ) {
                              if (
                                ((k = o[(f + 8) >> 2]),
                                o[((i = k) + 28) >> 2] >= 1)
                              )
                                for (
                                  ;
                                  (R = o[(i + 16) >> 2]),
                                    (I = o[(o[(i + 4) >> 2] + 16) >> 2]),
                                    (t = p(
                                      t +
                                        p(
                                          p(
                                            v[(R + 28) >> 2] - v[(I + 28) >> 2],
                                          ) *
                                            p(
                                              v[(R + 32) >> 2] +
                                                v[(I + 32) >> 2],
                                            ),
                                        ),
                                    )),
                                    (0 | k) != (0 | (i = o[(i + 12) >> 2]));

                                );
                              if ((0 | b) == (0 | (f = o[f >> 2]))) break;
                            }
                            if (t < p(0)) {
                              if (!a)
                                for (
                                  ;
                                  (v[(l + 32) >> 2] = -v[(l + 32) >> 2]),
                                    (0 | (l = o[l >> 2])) != (0 | e);

                                );
                              (v[(r + 40) >> 2] = -v[(r + 40) >> 2]),
                                (v[(r + 44) >> 2] = -v[(r + 44) >> 2]),
                                (v[(r + 48) >> 2] = -v[(r + 48) >> 2]);
                            }
                          }
                        }
                        function W(r) {
                          var e = 0,
                            f = 0,
                            i = 0,
                            a = 0,
                            n = 0,
                            t = 0,
                            b = 0,
                            k = 0,
                            u = 0;
                          r: if ((r |= 0)) {
                            n =
                              ((i = (r - 8) | 0) +
                                (r = -8 & (e = o[(r - 4) >> 2]))) |
                              0;
                            e: if (!(1 & e)) {
                              if (!(3 & e)) break r;
                              if (
                                (i = (i - (e = o[i >> 2])) | 0) >>> 0 <
                                l[618]
                              )
                                break r;
                              if (((r = (r + e) | 0), o[619] == (0 | i))) {
                                if (3 == (3 & (e = o[(n + 4) >> 2])))
                                  return (
                                    (o[616] = r),
                                    (o[(n + 4) >> 2] = -2 & e),
                                    (o[(i + 4) >> 2] = 1 | r),
                                    void (o[(r + i) >> 2] = r)
                                  );
                              } else {
                                if (e >>> 0 <= 255) {
                                  if (
                                    ((a = o[(i + 8) >> 2]),
                                    (e = (e >>> 3) | 0),
                                    (0 | (f = o[(i + 12) >> 2])) == (0 | a))
                                  ) {
                                    (k = 2456),
                                      (u = o[614] & Lr(e)),
                                      (o[k >> 2] = u);
                                    break e;
                                  }
                                  (o[(a + 12) >> 2] = f), (o[(f + 8) >> 2] = a);
                                  break e;
                                }
                                if (
                                  ((b = o[(i + 24) >> 2]),
                                  (0 | i) == (0 | (e = o[(i + 12) >> 2])))
                                )
                                  if (
                                    (f = o[(a = (i + 20) | 0) >> 2]) ||
                                    (f = o[(a = (i + 16) | 0) >> 2])
                                  ) {
                                    for (
                                      ;
                                      (t = a),
                                        (f =
                                          o[(a = ((e = f) + 20) | 0) >> 2]) ||
                                          ((a = (e + 16) | 0),
                                          (f = o[(e + 16) >> 2]));

                                    );
                                    o[t >> 2] = 0;
                                  } else e = 0;
                                else
                                  (f = o[(i + 8) >> 2]),
                                    (o[(f + 12) >> 2] = e),
                                    (o[(e + 8) >> 2] = f);
                                if (!b) break e;
                                a = o[(i + 28) >> 2];
                                f: {
                                  if (
                                    o[(f = (2760 + (a << 2)) | 0) >> 2] ==
                                    (0 | i)
                                  ) {
                                    if (((o[f >> 2] = e), e)) break f;
                                    (k = 2460),
                                      (u = o[615] & Lr(a)),
                                      (o[k >> 2] = u);
                                    break e;
                                  }
                                  if (
                                    ((o[
                                      (b +
                                        (o[(b + 16) >> 2] == (0 | i)
                                          ? 16
                                          : 20)) >>
                                        2
                                    ] = e),
                                    !e)
                                  )
                                    break e;
                                }
                                if (
                                  ((o[(e + 24) >> 2] = b),
                                  (f = o[(i + 16) >> 2]) &&
                                    ((o[(e + 16) >> 2] = f),
                                    (o[(f + 24) >> 2] = e)),
                                  !(f = o[(i + 20) >> 2]))
                                )
                                  break e;
                                (o[(e + 20) >> 2] = f), (o[(f + 24) >> 2] = e);
                              }
                            }
                            if (
                              !(i >>> 0 >= n >>> 0) &&
                              1 & (e = o[(n + 4) >> 2])
                            ) {
                              e: {
                                if (!(2 & e)) {
                                  if (o[620] == (0 | n)) {
                                    if (
                                      ((o[620] = i),
                                      (r = (o[617] + r) | 0),
                                      (o[617] = r),
                                      (o[(i + 4) >> 2] = 1 | r),
                                      o[619] != (0 | i))
                                    )
                                      break r;
                                    return (o[616] = 0), void (o[619] = 0);
                                  }
                                  if (o[619] == (0 | n))
                                    return (
                                      (o[619] = i),
                                      (r = (o[616] + r) | 0),
                                      (o[616] = r),
                                      (o[(i + 4) >> 2] = 1 | r),
                                      void (o[(r + i) >> 2] = r)
                                    );
                                  r = ((-8 & e) + r) | 0;
                                  f: if (e >>> 0 <= 255) {
                                    if (
                                      ((a = o[(n + 8) >> 2]),
                                      (e = (e >>> 3) | 0),
                                      (0 | (f = o[(n + 12) >> 2])) == (0 | a))
                                    ) {
                                      (k = 2456),
                                        (u = o[614] & Lr(e)),
                                        (o[k >> 2] = u);
                                      break f;
                                    }
                                    (o[(a + 12) >> 2] = f),
                                      (o[(f + 8) >> 2] = a);
                                  } else {
                                    if (
                                      ((b = o[(n + 24) >> 2]),
                                      (0 | n) == (0 | (e = o[(n + 12) >> 2])))
                                    )
                                      if (
                                        (f = o[(a = (n + 20) | 0) >> 2]) ||
                                        (f = o[(a = (n + 16) | 0) >> 2])
                                      ) {
                                        for (
                                          ;
                                          (t = a),
                                            (f =
                                              o[
                                                (a = ((e = f) + 20) | 0) >> 2
                                              ]) ||
                                              ((a = (e + 16) | 0),
                                              (f = o[(e + 16) >> 2]));

                                        );
                                        o[t >> 2] = 0;
                                      } else e = 0;
                                    else
                                      (f = o[(n + 8) >> 2]),
                                        (o[(f + 12) >> 2] = e),
                                        (o[(e + 8) >> 2] = f);
                                    if (b) {
                                      a = o[(n + 28) >> 2];
                                      i: {
                                        if (
                                          o[(f = (2760 + (a << 2)) | 0) >> 2] ==
                                          (0 | n)
                                        ) {
                                          if (((o[f >> 2] = e), e)) break i;
                                          (k = 2460),
                                            (u = o[615] & Lr(a)),
                                            (o[k >> 2] = u);
                                          break f;
                                        }
                                        if (
                                          ((o[
                                            (b +
                                              (o[(b + 16) >> 2] == (0 | n)
                                                ? 16
                                                : 20)) >>
                                              2
                                          ] = e),
                                          !e)
                                        )
                                          break f;
                                      }
                                      (o[(e + 24) >> 2] = b),
                                        (f = o[(n + 16) >> 2]) &&
                                          ((o[(e + 16) >> 2] = f),
                                          (o[(f + 24) >> 2] = e)),
                                        (f = o[(n + 20) >> 2]) &&
                                          ((o[(e + 20) >> 2] = f),
                                          (o[(f + 24) >> 2] = e));
                                    }
                                  }
                                  if (
                                    ((o[(i + 4) >> 2] = 1 | r),
                                    (o[(r + i) >> 2] = r),
                                    o[619] != (0 | i))
                                  )
                                    break e;
                                  return void (o[616] = r);
                                }
                                (o[(n + 4) >> 2] = -2 & e),
                                  (o[(i + 4) >> 2] = 1 | r),
                                  (o[(r + i) >> 2] = r);
                              }
                              if (r >>> 0 <= 255)
                                return (
                                  (e = (2496 + ((r = (r >>> 3) | 0) << 3)) | 0),
                                  (f = o[614]) & (r = 1 << r)
                                    ? (r = o[(e + 8) >> 2])
                                    : ((o[614] = r | f), (r = e)),
                                  (o[(e + 8) >> 2] = i),
                                  (o[(r + 12) >> 2] = i),
                                  (o[(i + 12) >> 2] = e),
                                  void (o[(i + 8) >> 2] = r)
                                );
                              (a = 31),
                                (o[(i + 16) >> 2] = 0),
                                (o[(i + 20) >> 2] = 0),
                                r >>> 0 <= 16777215 &&
                                  ((e = (r >>> 8) | 0),
                                  (e <<= t = ((e + 1048320) >>> 16) & 8),
                                  (a =
                                    (28 +
                                      (((e =
                                        (((((e <<= a =
                                          ((e + 520192) >>> 16) & 4) <<
                                          (f = ((e + 245760) >>> 16) & 2)) >>>
                                          15) |
                                          0) -
                                          (f | a | t)) |
                                        0) <<
                                        1) |
                                        ((r >>> (e + 21)) & 1))) |
                                    0)),
                                (o[(i + 28) >> 2] = a),
                                (t = (2760 + (a << 2)) | 0);
                              e: {
                                f: {
                                  if ((f = o[615]) & (e = 1 << a)) {
                                    for (
                                      a =
                                        r <<
                                        (31 == (0 | a)
                                          ? 0
                                          : (25 - ((a >>> 1) | 0)) | 0),
                                        e = o[t >> 2];
                                      ;

                                    ) {
                                      if (
                                        ((f = e),
                                        (-8 & o[(e + 4) >> 2]) == (0 | r))
                                      )
                                        break f;
                                      if (
                                        ((e = (a >>> 29) | 0),
                                        (a <<= 1),
                                        !(e =
                                          o[
                                            (16 + (t = (f + (4 & e)) | 0)) >> 2
                                          ]))
                                      )
                                        break;
                                    }
                                    (o[(t + 16) >> 2] = i),
                                      (o[(i + 24) >> 2] = f);
                                  } else
                                    (o[615] = e | f),
                                      (o[t >> 2] = i),
                                      (o[(i + 24) >> 2] = t);
                                  (o[(i + 12) >> 2] = i), (o[(i + 8) >> 2] = i);
                                  break e;
                                }
                                (r = o[(f + 8) >> 2]),
                                  (o[(r + 12) >> 2] = i),
                                  (o[(f + 8) >> 2] = i),
                                  (o[(i + 24) >> 2] = 0),
                                  (o[(i + 12) >> 2] = f),
                                  (o[(i + 8) >> 2] = r);
                              }
                              (r = (o[622] - 1) | 0), (o[622] = r || -1);
                            }
                          }
                        }
                        function q(r, e) {
                          var f,
                            i = 0,
                            a = 0,
                            n = 0,
                            t = 0,
                            b = 0,
                            k = 0,
                            u = 0;
                          f = (r + e) | 0;
                          r: {
                            e: if (!(1 & (i = o[(r + 4) >> 2]))) {
                              if (!(3 & i)) break r;
                              e = ((i = o[r >> 2]) + e) | 0;
                              f: {
                                if ((0 | (r = (r - i) | 0)) != o[619]) {
                                  if (i >>> 0 <= 255) {
                                    if (
                                      ((n = o[(r + 8) >> 2]),
                                      (i = (i >>> 3) | 0),
                                      (0 | (a = o[(r + 12) >> 2])) != (0 | n))
                                    )
                                      break f;
                                    (k = 2456),
                                      (u = o[614] & Lr(i)),
                                      (o[k >> 2] = u);
                                    break e;
                                  }
                                  if (
                                    ((b = o[(r + 24) >> 2]),
                                    (0 | (i = o[(r + 12) >> 2])) == (0 | r))
                                  )
                                    if (
                                      (a = o[(n = (r + 20) | 0) >> 2]) ||
                                      (a = o[(n = (r + 16) | 0) >> 2])
                                    ) {
                                      for (
                                        ;
                                        (t = n),
                                          (a =
                                            o[(n = ((i = a) + 20) | 0) >> 2]) ||
                                            ((n = (i + 16) | 0),
                                            (a = o[(i + 16) >> 2]));

                                      );
                                      o[t >> 2] = 0;
                                    } else i = 0;
                                  else
                                    (a = o[(r + 8) >> 2]),
                                      (o[(a + 12) >> 2] = i),
                                      (o[(i + 8) >> 2] = a);
                                  if (!b) break e;
                                  n = o[(r + 28) >> 2];
                                  i: {
                                    if (
                                      o[(a = (2760 + (n << 2)) | 0) >> 2] ==
                                      (0 | r)
                                    ) {
                                      if (((o[a >> 2] = i), i)) break i;
                                      (k = 2460),
                                        (u = o[615] & Lr(n)),
                                        (o[k >> 2] = u);
                                      break e;
                                    }
                                    if (
                                      ((o[
                                        (b +
                                          (o[(b + 16) >> 2] == (0 | r)
                                            ? 16
                                            : 20)) >>
                                          2
                                      ] = i),
                                      !i)
                                    )
                                      break e;
                                  }
                                  if (
                                    ((o[(i + 24) >> 2] = b),
                                    (a = o[(r + 16) >> 2]) &&
                                      ((o[(i + 16) >> 2] = a),
                                      (o[(a + 24) >> 2] = i)),
                                    !(a = o[(r + 20) >> 2]))
                                  )
                                    break e;
                                  (o[(i + 20) >> 2] = a),
                                    (o[(a + 24) >> 2] = i);
                                  break e;
                                }
                                if (3 != (3 & (i = o[(f + 4) >> 2]))) break e;
                                return (
                                  (o[616] = e),
                                  (o[(f + 4) >> 2] = -2 & i),
                                  (o[(r + 4) >> 2] = 1 | e),
                                  void (o[f >> 2] = e)
                                );
                              }
                              (o[(n + 12) >> 2] = a), (o[(a + 8) >> 2] = n);
                            }
                            e: {
                              if (!(2 & (i = o[(f + 4) >> 2]))) {
                                if (o[620] == (0 | f)) {
                                  if (
                                    ((o[620] = r),
                                    (e = (o[617] + e) | 0),
                                    (o[617] = e),
                                    (o[(r + 4) >> 2] = 1 | e),
                                    o[619] != (0 | r))
                                  )
                                    break r;
                                  return (o[616] = 0), void (o[619] = 0);
                                }
                                if (o[619] == (0 | f))
                                  return (
                                    (o[619] = r),
                                    (e = (o[616] + e) | 0),
                                    (o[616] = e),
                                    (o[(r + 4) >> 2] = 1 | e),
                                    void (o[(r + e) >> 2] = e)
                                  );
                                e = ((-8 & i) + e) | 0;
                                f: if (i >>> 0 <= 255) {
                                  if (
                                    ((n = o[(f + 8) >> 2]),
                                    (i = (i >>> 3) | 0),
                                    (0 | (a = o[(f + 12) >> 2])) == (0 | n))
                                  ) {
                                    (k = 2456),
                                      (u = o[614] & Lr(i)),
                                      (o[k >> 2] = u);
                                    break f;
                                  }
                                  (o[(n + 12) >> 2] = a), (o[(a + 8) >> 2] = n);
                                } else {
                                  if (
                                    ((b = o[(f + 24) >> 2]),
                                    (0 | f) == (0 | (i = o[(f + 12) >> 2])))
                                  )
                                    if (
                                      (n = o[(a = (f + 20) | 0) >> 2]) ||
                                      (n = o[(a = (f + 16) | 0) >> 2])
                                    ) {
                                      for (
                                        ;
                                        (t = a),
                                          (n =
                                            o[(a = ((i = n) + 20) | 0) >> 2]) ||
                                            ((a = (i + 16) | 0),
                                            (n = o[(i + 16) >> 2]));

                                      );
                                      o[t >> 2] = 0;
                                    } else i = 0;
                                  else
                                    (a = o[(f + 8) >> 2]),
                                      (o[(a + 12) >> 2] = i),
                                      (o[(i + 8) >> 2] = a);
                                  if (b) {
                                    n = o[(f + 28) >> 2];
                                    i: {
                                      if (
                                        o[(a = (2760 + (n << 2)) | 0) >> 2] ==
                                        (0 | f)
                                      ) {
                                        if (((o[a >> 2] = i), i)) break i;
                                        (k = 2460),
                                          (u = o[615] & Lr(n)),
                                          (o[k >> 2] = u);
                                        break f;
                                      }
                                      if (
                                        ((o[
                                          (b +
                                            (o[(b + 16) >> 2] == (0 | f)
                                              ? 16
                                              : 20)) >>
                                            2
                                        ] = i),
                                        !i)
                                      )
                                        break f;
                                    }
                                    (o[(i + 24) >> 2] = b),
                                      (a = o[(f + 16) >> 2]) &&
                                        ((o[(i + 16) >> 2] = a),
                                        (o[(a + 24) >> 2] = i)),
                                      (a = o[(f + 20) >> 2]) &&
                                        ((o[(i + 20) >> 2] = a),
                                        (o[(a + 24) >> 2] = i));
                                  }
                                }
                                if (
                                  ((o[(r + 4) >> 2] = 1 | e),
                                  (o[(r + e) >> 2] = e),
                                  o[619] != (0 | r))
                                )
                                  break e;
                                return void (o[616] = e);
                              }
                              (o[(f + 4) >> 2] = -2 & i),
                                (o[(r + 4) >> 2] = 1 | e),
                                (o[(r + e) >> 2] = e);
                            }
                            if (e >>> 0 <= 255)
                              return (
                                (i = (2496 + ((e = (e >>> 3) | 0) << 3)) | 0),
                                (a = o[614]) & (e = 1 << e)
                                  ? (e = o[(i + 8) >> 2])
                                  : ((o[614] = e | a), (e = i)),
                                (o[(i + 8) >> 2] = r),
                                (o[(e + 12) >> 2] = r),
                                (o[(r + 12) >> 2] = i),
                                void (o[(r + 8) >> 2] = e)
                              );
                            (n = 31),
                              (o[(r + 16) >> 2] = 0),
                              (o[(r + 20) >> 2] = 0),
                              e >>> 0 <= 16777215 &&
                                ((i = (e >>> 8) | 0),
                                (i <<= t = ((i + 1048320) >>> 16) & 8),
                                (n =
                                  (28 +
                                    (((i =
                                      (((((i <<= n =
                                        ((i + 520192) >>> 16) & 4) <<
                                        (a = ((i + 245760) >>> 16) & 2)) >>>
                                        15) |
                                        0) -
                                        (a | n | t)) |
                                      0) <<
                                      1) |
                                      ((e >>> (i + 21)) & 1))) |
                                  0)),
                              (o[(r + 28) >> 2] = n),
                              (t = (2760 + (n << 2)) | 0);
                            e: {
                              if ((a = o[615]) & (i = 1 << n)) {
                                for (
                                  n =
                                    e <<
                                    (31 == (0 | n)
                                      ? 0
                                      : (25 - ((n >>> 1) | 0)) | 0),
                                    i = o[t >> 2];
                                  ;

                                ) {
                                  if (
                                    ((a = i), (-8 & o[(i + 4) >> 2]) == (0 | e))
                                  )
                                    break e;
                                  if (
                                    ((i = (n >>> 29) | 0),
                                    (n <<= 1),
                                    !(i =
                                      o[(16 + (t = (a + (4 & i)) | 0)) >> 2]))
                                  )
                                    break;
                                }
                                (o[(t + 16) >> 2] = r), (o[(r + 24) >> 2] = a);
                              } else
                                (o[615] = i | a),
                                  (o[t >> 2] = r),
                                  (o[(r + 24) >> 2] = t);
                              return (
                                (o[(r + 12) >> 2] = r),
                                void (o[(r + 8) >> 2] = r)
                              );
                            }
                            (e = o[(a + 8) >> 2]),
                              (o[(e + 12) >> 2] = r),
                              (o[(a + 8) >> 2] = r),
                              (o[(r + 24) >> 2] = 0),
                              (o[(r + 12) >> 2] = a),
                              (o[(r + 8) >> 2] = e);
                          }
                        }
                        function z(r, e) {
                          var f,
                            i = 0,
                            n = 0,
                            t = p(0),
                            b = 0,
                            k = 0,
                            u = p(0),
                            c = 0,
                            s = 0,
                            A = 0,
                            l = 0,
                            d = 0,
                            h = 0,
                            w = 0,
                            m = 0,
                            y = 0,
                            C = 0,
                            E = 0,
                            R = 0,
                            I = 0,
                            M = 0;
                          U = f = (U - 48) | 0;
                          r: {
                            (A = o[e >> 2]),
                              (k = o[(A + 16) >> 2]),
                              (u = v[(k + 28) >> 2]),
                              (i = o[o[(o[(e + 4) >> 2] + 8) >> 2] >> 2]),
                              (d = o[i >> 2]),
                              (n = o[(d + 16) >> 2]),
                              (t = v[(n + 28) >> 2]);
                            e: {
                              if (
                                !(
                                  !(v[(k + 32) >> 2] <= v[(n + 32) >> 2]) |
                                  (u != t)
                                ) ||
                                u < t
                              ) {
                                if (
                                  br(o[(o[(d + 4) >> 2] + 16) >> 2], k, n) >
                                  p(0)
                                )
                                  break e;
                                if (
                                  ((k = o[(A + 16) >> 2]),
                                  (n = o[(d + 16) >> 2]),
                                  v[(k + 32) >> 2] != v[(n + 32) >> 2] ||
                                    v[(k + 28) >> 2] != v[(n + 28) >> 2])
                                ) {
                                  if (!J(o[(d + 4) >> 2])) break r;
                                  if (!$(A, o[(o[(d + 4) >> 2] + 12) >> 2]))
                                    break r;
                                  (C = 1),
                                    (a[(i + 14) | 0] = 1),
                                    (a[(e + 14) | 0] = 1);
                                  break e;
                                }
                                if (((C = 1), (0 | n) == (0 | k))) break e;
                                if (
                                  ((b = o[(r + 68) >> 2]),
                                  (0 | (e = o[(k + 36) >> 2])) >= 0)
                                ) {
                                  if (
                                    ((h = o[b >> 2]),
                                    (c = o[h >> 2]),
                                    (k = e),
                                    (s = o[(h + 4) >> 2]),
                                    (e =
                                      o[(4 + (E = (s + (e << 3)) | 0)) >> 2]),
                                    (y = o[(h + 8) >> 2]),
                                    (m = o[(c + (y << 2)) >> 2]),
                                    (o[(c + (e << 2)) >> 2] = m),
                                    (o[(4 + (R = ((m << 3) + s) | 0)) >> 2] =
                                      e),
                                    (I = (y - 1) | 0),
                                    (o[(h + 8) >> 2] = I),
                                    (0 | e) < (0 | y))
                                  ) {
                                    f: {
                                      if (
                                        (0 | e) < 2 ||
                                        ((i =
                                          o[
                                            ((o[(c + ((e << 1) & -4)) >> 2] <<
                                              3) +
                                              s) >>
                                              2
                                          ]),
                                        (t = v[(i + 28) >> 2]),
                                        (w = o[((m << 3) + s) >> 2]),
                                        t < (u = v[(w + 28) >> 2]) ||
                                          !(
                                            !(
                                              v[(i + 32) >> 2] <=
                                              v[(w + 32) >> 2]
                                            ) |
                                            (u != t)
                                          ))
                                      )
                                        for (M = ((m << 3) + s) | 0; ; ) {
                                          if (
                                            ((0 | I) <= (0 | (i = e << 1)) ||
                                              ((l =
                                                o[
                                                  ((o[
                                                    (c + ((n = 1 | i) << 2)) >>
                                                      2
                                                  ] <<
                                                    3) +
                                                    s) >>
                                                    2
                                                ]),
                                              (u = v[(l + 28) >> 2]),
                                              (b =
                                                o[
                                                  ((o[(c + (i << 2)) >> 2] <<
                                                    3) +
                                                    s) >>
                                                    2
                                                ]),
                                              (t = v[(b + 28) >> 2]),
                                              (!(
                                                v[(l + 32) >> 2] <=
                                                v[(b + 32) >> 2]
                                              ) |
                                                (u != t) &&
                                                !(u < t)) ||
                                                (i = n)),
                                            (0 | i) >= (0 | y))
                                          ) {
                                            i = e;
                                            break f;
                                          }
                                          if (
                                            ((w = o[M >> 2]),
                                            (u = v[(w + 28) >> 2]),
                                            (l = o[(c + (i << 2)) >> 2]),
                                            (n =
                                              o[(b = ((l << 3) + s) | 0) >> 2]),
                                            u < (t = v[(n + 28) >> 2]))
                                          ) {
                                            i = e;
                                            break f;
                                          }
                                          if (
                                            !(
                                              !(
                                                v[(w + 32) >> 2] <=
                                                v[(n + 32) >> 2]
                                              ) |
                                              (u != t)
                                            )
                                          ) {
                                            i = e;
                                            break f;
                                          }
                                          (o[(c + (e << 2)) >> 2] = l),
                                            (o[(b + 4) >> 2] = e),
                                            (e = i);
                                        }
                                      for (;;) {
                                        if (
                                          ((l =
                                            o[(c + ((i = e >> 1) << 2)) >> 2]),
                                          (n =
                                            o[(b = ((l << 3) + s) | 0) >> 2]),
                                          (t = v[(n + 28) >> 2]) < u)
                                        ) {
                                          i = e;
                                          break f;
                                        }
                                        if (
                                          !(
                                            !(
                                              v[(n + 32) >> 2] <=
                                              v[(w + 32) >> 2]
                                            ) |
                                            (u != t)
                                          )
                                        ) {
                                          i = e;
                                          break f;
                                        }
                                        if (
                                          ((o[(c + (e << 2)) >> 2] = l),
                                          (o[(b + 4) >> 2] = e),
                                          !((e = i) >>> 0 > 1))
                                        )
                                          break;
                                      }
                                    }
                                    (o[(c + (i << 2)) >> 2] = m),
                                      (o[(R + 4) >> 2] = i);
                                  }
                                  (o[E >> 2] = 0),
                                    (o[(E + 4) >> 2] = o[(h + 16) >> 2]),
                                    (o[(h + 16) >> 2] = k);
                                } else {
                                  o[
                                    (o[(b + 4) >> 2] + ((-1 ^ e) << 2)) >> 2
                                  ] = 0;
                                  f: if (!((0 | (e = o[(b + 12) >> 2])) < 1))
                                    for (k = o[(b + 8) >> 2]; ; ) {
                                      if (
                                        o[
                                          o[
                                            (k + ((i = (e - 1) | 0) << 2)) >> 2
                                          ] >> 2
                                        ]
                                      )
                                        break f;
                                      if (
                                        ((o[(b + 12) >> 2] = i),
                                        (n = (0 | e) > 1),
                                        (e = i),
                                        !n)
                                      )
                                        break;
                                    }
                                }
                                if (
                                  ((i = o[(o[(d + 4) >> 2] + 12) >> 2]),
                                  (o[(f + 24) >> 2] = 0),
                                  (o[(f + 28) >> 2] = 0),
                                  (o[(f + 16) >> 2] = 0),
                                  (o[(f + 20) >> 2] = 0),
                                  (e = o[287]),
                                  (o[(f + 8) >> 2] = o[286]),
                                  (o[(f + 12) >> 2] = e),
                                  (e = o[285]),
                                  (o[f >> 2] = o[284]),
                                  (o[(f + 4) >> 2] = e),
                                  (e = o[(i + 16) >> 2]),
                                  (o[(f + 16) >> 2] = o[(e + 12) >> 2]),
                                  (o[(f + 20) >> 2] =
                                    o[(o[(A + 16) >> 2] + 12) >> 2]),
                                  (v[(f + 36) >> 2] = v[(e + 16) >> 2]),
                                  (v[(f + 40) >> 2] = v[(e + 20) >> 2]),
                                  (v[(f + 44) >> 2] = v[(e + 24) >> 2]),
                                  (o[(e + 12) >> 2] = 0),
                                  (n = (e + 12) | 0),
                                  8 == (0 | (e = o[(r + 1736) >> 2]))
                                    ? Fr[o[(r + 76) >> 2]](
                                        (f + 36) | 0,
                                        (f + 16) | 0,
                                        f,
                                        n,
                                      )
                                    : Fr[0 | e](
                                        (f + 36) | 0,
                                        (f + 16) | 0,
                                        f,
                                        n,
                                        o[(r + 1896) >> 2],
                                      ),
                                  o[n >> 2] || (o[n >> 2] = o[(f + 16) >> 2]),
                                  $(i, A))
                                )
                                  break e;
                                break r;
                              }
                              if (
                                !(
                                  br(o[(o[(A + 4) >> 2] + 16) >> 2], n, k) <
                                  p(0)
                                )
                              ) {
                                if (
                                  ((C = 1),
                                  (a[(e + 14) | 0] = 1),
                                  (a[
                                    (o[o[(o[(e + 4) >> 2] + 4) >> 2] >> 2] +
                                      14) |
                                      0
                                  ] = 1),
                                  !J(o[(A + 4) >> 2]))
                                )
                                  break r;
                                if (!$(o[(o[(d + 4) >> 2] + 12) >> 2], A))
                                  break r;
                              }
                            }
                            return (U = (f + 48) | 0), C;
                          }
                          Br((r + 1740) | 0, 1), g();
                        }
                        function K(r, e) {
                          var f,
                            i,
                            a = 0,
                            n = 0,
                            t = 0,
                            b = 0,
                            k = 0,
                            u = 0,
                            c = 0,
                            s = 0,
                            A = 0,
                            l = 0,
                            v = 0;
                          if (!r) return F(e);
                          if (e >>> 0 >= 4294967232) return (o[613] = 48), 0;
                          (f = e >>> 0 < 11 ? 16 : (e + 11) & -8),
                            (t = -8 & (i = o[(4 + (b = (r - 8) | 0)) >> 2]));
                          r: if (3 & i) {
                            k = (t + b) | 0;
                            e: if (t >>> 0 >= f >>> 0) {
                              if ((n = (t - f) | 0) >>> 0 < 16) break e;
                              (o[(b + 4) >> 2] = (1 & i) | f | 2),
                                (o[(4 + (a = (b + f) | 0)) >> 2] = 3 | n),
                                (o[(k + 4) >> 2] = 1 | o[(k + 4) >> 2]),
                                q(a, n);
                            } else if (o[620] != (0 | k))
                              if (o[619] != (0 | k)) {
                                if (2 & (n = o[(k + 4) >> 2])) break r;
                                if ((c = (t + (-8 & n)) | 0) >>> 0 < f >>> 0)
                                  break r;
                                A = (c - f) | 0;
                                f: if (n >>> 0 <= 255) {
                                  if (
                                    ((t = o[(k + 8) >> 2]),
                                    (a = (n >>> 3) | 0),
                                    (0 | (n = o[(k + 12) >> 2])) == (0 | t))
                                  ) {
                                    (l = 2456),
                                      (v = o[614] & Lr(a)),
                                      (o[l >> 2] = v);
                                    break f;
                                  }
                                  (o[(t + 12) >> 2] = n), (o[(n + 8) >> 2] = t);
                                } else {
                                  if (
                                    ((s = o[(k + 24) >> 2]),
                                    (0 | (u = o[(k + 12) >> 2])) == (0 | k))
                                  )
                                    if (
                                      (a = o[(t = (k + 20) | 0) >> 2]) ||
                                      (a = o[(t = (k + 16) | 0) >> 2])
                                    ) {
                                      for (
                                        ;
                                        (n = t),
                                          (u = a),
                                          (a = o[(t = (a + 20) | 0) >> 2]) ||
                                            ((t = (u + 16) | 0),
                                            (a = o[(u + 16) >> 2]));

                                      );
                                      o[n >> 2] = 0;
                                    } else u = 0;
                                  else
                                    (a = o[(k + 8) >> 2]),
                                      (o[(a + 12) >> 2] = u),
                                      (o[(u + 8) >> 2] = a);
                                  if (s) {
                                    n = o[(k + 28) >> 2];
                                    i: {
                                      if (
                                        o[(a = (2760 + (n << 2)) | 0) >> 2] ==
                                        (0 | k)
                                      ) {
                                        if (((o[a >> 2] = u), u)) break i;
                                        (l = 2460),
                                          (v = o[615] & Lr(n)),
                                          (o[l >> 2] = v);
                                        break f;
                                      }
                                      if (
                                        ((o[
                                          ((o[(s + 16) >> 2] == (0 | k)
                                            ? 16
                                            : 20) +
                                            s) >>
                                            2
                                        ] = u),
                                        !u)
                                      )
                                        break f;
                                    }
                                    (o[(u + 24) >> 2] = s),
                                      (a = o[(k + 16) >> 2]) &&
                                        ((o[(u + 16) >> 2] = a),
                                        (o[(a + 24) >> 2] = u)),
                                      (a = o[(k + 20) >> 2]) &&
                                        ((o[(u + 20) >> 2] = a),
                                        (o[(a + 24) >> 2] = u));
                                  }
                                }
                                A >>> 0 <= 15
                                  ? ((o[(b + 4) >> 2] = (1 & i) | c | 2),
                                    (o[(4 + (a = (b + c) | 0)) >> 2] =
                                      1 | o[(a + 4) >> 2]))
                                  : ((o[(b + 4) >> 2] = (1 & i) | f | 2),
                                    (o[(4 + (n = (b + f) | 0)) >> 2] = 3 | A),
                                    (o[(4 + (a = (b + c) | 0)) >> 2] =
                                      1 | o[(a + 4) >> 2]),
                                    q(n, A));
                              } else {
                                if ((n = (t + o[616]) | 0) >>> 0 < f >>> 0)
                                  break r;
                                (a = (n - f) | 0) >>> 0 >= 16
                                  ? ((o[(b + 4) >> 2] = (1 & i) | f | 2),
                                    (o[(4 + (t = (b + f) | 0)) >> 2] = 1 | a),
                                    (o[(n = (n + b) | 0) >> 2] = a),
                                    (o[(n + 4) >> 2] = -2 & o[(n + 4) >> 2]))
                                  : ((o[(b + 4) >> 2] = n | (1 & i) | 2),
                                    (o[(4 + (a = (n + b) | 0)) >> 2] =
                                      1 | o[(a + 4) >> 2]),
                                    (a = 0),
                                    (t = 0)),
                                  (o[619] = t),
                                  (o[616] = a);
                              }
                            else {
                              if ((t = (t + o[617]) | 0) >>> 0 <= f >>> 0)
                                break r;
                              (o[(b + 4) >> 2] = (1 & i) | f | 2),
                                (a = (t - f) | 0),
                                (o[(4 + (n = (b + f) | 0)) >> 2] = 1 | a),
                                (o[617] = a),
                                (o[620] = n);
                            }
                            a = b;
                          } else {
                            if (f >>> 0 < 256) break r;
                            if (
                              t >>> 0 >= (f + 4) >>> 0 &&
                              ((a = b), (t - f) >>> 0 <= (o[734] << 1) >>> 0)
                            )
                              break r;
                            a = 0;
                          }
                          return a
                            ? (a + 8) | 0
                            : (b = F(e))
                            ? (G(
                                b,
                                r,
                                e >>> 0 >
                                  (a =
                                    ((3 & (a = o[(r - 4) >> 2]) ? -4 : -8) +
                                      (-8 & a)) |
                                    0) >>>
                                    0
                                  ? a
                                  : e,
                              ),
                              W(r),
                              b)
                            : 0;
                        }
                        function Y(r, e) {
                          var f = 0,
                            i = 0,
                            n = 0,
                            t = 0,
                            k = 0,
                            u = 0,
                            c = p(0),
                            s = 0,
                            A = p(0);
                          for (i = o[o[(o[(e + 4) >> 2] + 8) >> 2] >> 2]; ; ) {
                            r: {
                              if (b[(i + 14) | 0])
                                for (
                                  ;
                                  (i =
                                    o[
                                      o[(o[((e = i) + 4) >> 2] + 8) >> 2] >> 2
                                    ]),
                                    b[(i + 14) | 0];

                                );
                              e: {
                                f: {
                                  i: {
                                    a: {
                                      if (b[(e + 14) | 0]) f = e;
                                      else {
                                        if (
                                          !(f =
                                            o[
                                              o[(o[(e + 4) >> 2] + 4) >> 2] >> 2
                                            ])
                                        )
                                          break a;
                                        if (((i = e), !b[(f + 14) | 0]))
                                          break a;
                                      }
                                      (a[(f + 14) | 0] = 0),
                                        (n = o[f >> 2]),
                                        (e = o[(o[(n + 4) >> 2] + 16) >> 2]),
                                        (k = o[i >> 2]);
                                      n: if (
                                        (0 | e) !=
                                        o[(o[(k + 4) >> 2] + 16) >> 2]
                                      ) {
                                        (c = v[(e + 28) >> 2]),
                                          (s =
                                            o[
                                              o[(o[(f + 4) >> 2] + 8) >> 2] >> 2
                                            ]),
                                          (t = o[s >> 2]),
                                          (u = o[(o[(t + 4) >> 2] + 16) >> 2]),
                                          (A = v[(u + 28) >> 2]);
                                        t: {
                                          if (
                                            !(
                                              !(
                                                v[(e + 32) >> 2] <=
                                                v[(u + 32) >> 2]
                                              ) |
                                              (c != A)
                                            ) ||
                                            c < A
                                          ) {
                                            if (
                                              br(e, u, o[(n + 16) >> 2]) < p(0)
                                            ) {
                                              e = f;
                                              break n;
                                            }
                                            if (
                                              ((a[(f + 14) | 0] = 1),
                                              (a[
                                                (o[
                                                  o[
                                                    (o[(f + 4) >> 2] + 4) >> 2
                                                  ] >> 2
                                                ] +
                                                  14) |
                                                  0
                                              ] = 1),
                                              !(e = J(n)))
                                            )
                                              break e;
                                            if ($(o[(t + 4) >> 2], e)) break t;
                                            break r;
                                          }
                                          if (
                                            br(u, e, o[(t + 16) >> 2]) > p(0)
                                          ) {
                                            e = f;
                                            break n;
                                          }
                                          if (
                                            ((a[(s + 14) | 0] = 1),
                                            (a[(f + 14) | 0] = 1),
                                            !(e = J(t)))
                                          )
                                            break r;
                                          if (
                                            !$(
                                              o[(n + 12) >> 2],
                                              o[(t + 4) >> 2],
                                            )
                                          )
                                            break r;
                                          e = o[(e + 4) >> 2];
                                        }
                                        if (
                                          ((a[(o[(e + 20) >> 2] + 21) | 0] =
                                            b[(f + 12) | 0]),
                                          b[(i + 15) | 0])
                                        ) {
                                          if (
                                            ((o[(o[i >> 2] + 24) >> 2] = 0),
                                            xr(o[(i + 4) >> 2]),
                                            W(i),
                                            !N(k))
                                          )
                                            break r;
                                          (i =
                                            o[
                                              o[(o[(f + 4) >> 2] + 8) >> 2] >> 2
                                            ]),
                                            (k = o[i >> 2]),
                                            (e = f);
                                        } else if (b[(f + 15) | 0]) {
                                          if (
                                            ((o[(o[f >> 2] + 24) >> 2] = 0),
                                            xr(o[(f + 4) >> 2]),
                                            W(f),
                                            !N(n))
                                          )
                                            break r;
                                          (e =
                                            o[
                                              o[(o[(i + 4) >> 2] + 4) >> 2] >> 2
                                            ]),
                                            (n = o[e >> 2]);
                                        } else e = f;
                                      } else e = f;
                                      if (o[(n + 16) >> 2] == o[(k + 16) >> 2])
                                        break f;
                                      if (
                                        ((f = o[(o[(n + 4) >> 2] + 16) >> 2]),
                                        (t = o[(o[(k + 4) >> 2] + 16) >> 2]),
                                        b[(i + 15) | 0] |
                                          b[(e + 15) | 0] |
                                          ((0 | f) == (0 | t)))
                                      )
                                        break i;
                                      if (
                                        ((u = f),
                                        (0 | (f = o[(r + 72) >> 2])) !=
                                          (0 | t) && (0 | u) != (0 | f))
                                      )
                                        break i;
                                      if (!O(r, e)) break f;
                                    }
                                    return;
                                  }
                                  z(r, e);
                                }
                                if (o[(n + 16) >> 2] != o[(k + 16) >> 2])
                                  continue;
                                if (
                                  ((t = o[(n + 4) >> 2]),
                                  (f = o[(k + 4) >> 2]),
                                  o[(t + 16) >> 2] != o[(f + 16) >> 2])
                                )
                                  continue;
                                if (
                                  ((o[(k + 28) >> 2] =
                                    o[(k + 28) >> 2] + o[(n + 28) >> 2]),
                                  (o[(f + 28) >> 2] =
                                    o[(f + 28) >> 2] + o[(t + 28) >> 2]),
                                  (o[(o[e >> 2] + 24) >> 2] = 0),
                                  xr(o[(e + 4) >> 2]),
                                  W(e),
                                  !N(n))
                                )
                                  break r;
                                e = o[o[(o[(i + 4) >> 2] + 4) >> 2] >> 2];
                                continue;
                              }
                            }
                            break;
                          }
                          Br((r + 1740) | 0, 1), g();
                        }
                        function N(r) {
                          var e,
                            f = 0,
                            i = 0,
                            n = 0,
                            t = 0,
                            k = 0;
                          if (
                            ((t = o[(r + 4) >> 2]),
                            (0 | (e = o[(t + 20) >> 2])) !=
                              (0 | (i = o[(r + 20) >> 2])))
                          ) {
                            for (
                              f = n = o[(i + 8) >> 2];
                              (o[(f + 20) >> 2] = e),
                                (0 | n) != (0 | (f = o[(f + 12) >> 2]));

                            );
                            (f = o[i >> 2]),
                              (n = o[(i + 4) >> 2]),
                              (o[(f + 4) >> 2] = n),
                              (o[n >> 2] = f),
                              W(i);
                          }
                          if ((0 | (n = o[(r + 8) >> 2])) != (0 | r)) {
                            if (
                              ((k = o[(r + 4) >> 2]),
                              (f = o[(k + 12) >> 2]),
                              (o[(o[(k + 20) >> 2] + 8) >> 2] = f),
                              (o[(o[(r + 16) >> 2] + 8) >> 2] = n),
                              (k = o[(f + 8) >> 2]),
                              (o[(o[(n + 4) >> 2] + 12) >> 2] = f),
                              (o[(o[(k + 4) >> 2] + 12) >> 2] = r),
                              (o[(r + 8) >> 2] = k),
                              (o[(f + 8) >> 2] = n),
                              (0 | i) == (0 | e))
                            ) {
                              if (!(i = F(24))) return 0;
                              for (
                                f = o[(r + 20) >> 2],
                                  n = o[(f + 4) >> 2],
                                  o[(i + 4) >> 2] = n,
                                  o[n >> 2] = i,
                                  o[i >> 2] = f,
                                  o[(f + 4) >> 2] = i,
                                  o[(i + 12) >> 2] = 0,
                                  o[(i + 16) >> 2] = 0,
                                  o[(i + 8) >> 2] = r,
                                  a[(i + 20) | 0] = 0,
                                  a[(i + 21) | 0] = b[(f + 21) | 0],
                                  f = r;
                                (o[(f + 20) >> 2] = i),
                                  (0 | (f = o[(f + 12) >> 2])) != (0 | r);

                              );
                            }
                          } else {
                            for (
                              i = o[(r + 16) >> 2], f = n = o[(i + 8) >> 2];
                              (o[(f + 16) >> 2] = 0),
                                (0 | n) != (0 | (f = o[(f + 8) >> 2]));

                            );
                            (f = o[i >> 2]),
                              (n = o[(i + 4) >> 2]),
                              (o[(f + 4) >> 2] = n),
                              (o[n >> 2] = f),
                              W(i);
                          }
                          if ((0 | (f = o[(t + 8) >> 2])) != (0 | t))
                            (i = o[(o[(t + 4) >> 2] + 12) >> 2]),
                              (o[(o[(r + 20) >> 2] + 8) >> 2] = i),
                              (o[(o[(t + 16) >> 2] + 8) >> 2] = f),
                              (n = o[(i + 8) >> 2]),
                              (o[(o[(f + 4) >> 2] + 12) >> 2] = i),
                              (o[(o[(n + 4) >> 2] + 12) >> 2] = t),
                              (o[(t + 8) >> 2] = n),
                              (o[(i + 8) >> 2] = f);
                          else {
                            for (
                              i = o[(t + 16) >> 2], f = n = o[(i + 8) >> 2];
                              (o[(f + 16) >> 2] = 0),
                                (0 | n) != (0 | (f = o[(f + 8) >> 2]));

                            );
                            for (
                              f = o[i >> 2],
                                n = o[(i + 4) >> 2],
                                o[(f + 4) >> 2] = n,
                                o[n >> 2] = f,
                                W(i),
                                i = o[(t + 20) >> 2],
                                f = t = o[(i + 8) >> 2];
                              (o[(f + 20) >> 2] = 0),
                                (0 | t) != (0 | (f = o[(f + 12) >> 2]));

                            );
                            (f = o[i >> 2]),
                              (t = o[(i + 4) >> 2]),
                              (o[(f + 4) >> 2] = t),
                              (o[t >> 2] = f),
                              W(i);
                          }
                          return (
                            (f = o[(r + 4) >> 2]),
                            (f = o[(r = r >>> 0 > f >>> 0 ? f : r) >> 2]),
                            (i = o[o[(r + 4) >> 2] >> 2]),
                            (o[o[(f + 4) >> 2] >> 2] = i),
                            (o[o[(i + 4) >> 2] >> 2] = f),
                            W(r),
                            1
                          );
                        }
                        function V(r, e) {
                          var f,
                            i = 0,
                            n = 0,
                            t = 0,
                            k = 0,
                            u = 0,
                            c = 0,
                            s = 0;
                          if (((i = 0), (f = F(64)))) {
                            if (
                              ((u = o[(r + 4) >> 2]),
                              (t =
                                o[((i = r >>> 0 > u >>> 0 ? u : r) + 4) >> 2]),
                              (n = o[t >> 2]),
                              (o[(f + 32) >> 2] = n),
                              (o[o[(n + 4) >> 2] >> 2] = f),
                              (o[f >> 2] = i),
                              (k = (f + 32) | 0),
                              (o[t >> 2] = k),
                              (o[(f + 16) >> 2] = 0),
                              (o[(f + 20) >> 2] = 0),
                              (o[(f + 12) >> 2] = k),
                              (o[(f + 4) >> 2] = k),
                              (o[(f + 24) >> 2] = 0),
                              (o[(f + 28) >> 2] = 0),
                              (o[(f + 48) >> 2] = 0),
                              (o[(f + 52) >> 2] = 0),
                              (o[(f + 44) >> 2] = f),
                              (o[(f + 40) >> 2] = k),
                              (o[(f + 36) >> 2] = f),
                              (o[(f + 56) >> 2] = 0),
                              (o[(f + 60) >> 2] = 0),
                              (o[(f + 8) >> 2] = f),
                              (0 | (c = o[(r + 20) >> 2])) !=
                                (0 | (t = o[(e + 20) >> 2])))
                            ) {
                              for (
                                i = n = o[(t + 8) >> 2];
                                (o[(i + 20) >> 2] = c),
                                  (0 | n) != (0 | (i = o[(i + 12) >> 2]));

                              );
                              (i = o[t >> 2]),
                                (n = o[(t + 4) >> 2]),
                                (o[(i + 4) >> 2] = n),
                                (o[n >> 2] = i),
                                W(t),
                                (u = o[(r + 4) >> 2]),
                                (n = o[(f + 8) >> 2]),
                                (i = o[(r + 20) >> 2]);
                            } else (n = f), (i = t);
                            if (
                              ((r = o[(r + 12) >> 2]),
                              (s = o[(r + 8) >> 2]),
                              (o[(o[(n + 4) >> 2] + 12) >> 2] = r),
                              (o[(o[(s + 4) >> 2] + 12) >> 2] = f),
                              (o[(f + 8) >> 2] = s),
                              (o[(r + 8) >> 2] = n),
                              (r = o[(e + 8) >> 2]),
                              (n = o[(f + 40) >> 2]),
                              (o[(o[(n + 4) >> 2] + 12) >> 2] = e),
                              (o[(o[(r + 4) >> 2] + 12) >> 2] = k),
                              (o[(f + 40) >> 2] = r),
                              (o[(e + 8) >> 2] = n),
                              (o[(f + 16) >> 2] = o[(u + 16) >> 2]),
                              (e = o[(e + 16) >> 2]),
                              (r = i),
                              (o[(f + 52) >> 2] = r),
                              (o[(f + 48) >> 2] = e),
                              (o[(f + 20) >> 2] = r),
                              (o[(r + 8) >> 2] = k),
                              (i = f),
                              (0 | t) == (0 | c) && ((i = 0), (e = F(24))))
                            ) {
                              for (
                                i = o[(r + 4) >> 2],
                                  o[(e + 4) >> 2] = i,
                                  o[i >> 2] = e,
                                  o[e >> 2] = r,
                                  o[(r + 4) >> 2] = e,
                                  o[(e + 12) >> 2] = 0,
                                  o[(e + 16) >> 2] = 0,
                                  o[(e + 8) >> 2] = f,
                                  a[(e + 20) | 0] = 0,
                                  a[(e + 21) | 0] = b[(r + 21) | 0],
                                  i = f;
                                (o[(i + 20) >> 2] = e),
                                  (0 | (i = o[(i + 12) >> 2])) != (0 | f);

                              );
                              i = f;
                            }
                          }
                          return i;
                        }
                        function G(r, e, f) {
                          var i = 0,
                            n = 0;
                          if (f >>> 0 >= 512) T(0 | r, 0 | e, 0 | f);
                          else {
                            i = (r + f) | 0;
                            r: if (3 & (r ^ e))
                              if (i >>> 0 < 4) f = r;
                              else if ((n = (i - 4) | 0) >>> 0 < r >>> 0) f = r;
                              else
                                for (
                                  f = r;
                                  (a[0 | f] = b[0 | e]),
                                    (a[(f + 1) | 0] = b[(e + 1) | 0]),
                                    (a[(f + 2) | 0] = b[(e + 2) | 0]),
                                    (a[(f + 3) | 0] = b[(e + 3) | 0]),
                                    (e = (e + 4) | 0),
                                    n >>> 0 >= (f = (f + 4) | 0) >>> 0;

                                );
                            else {
                              e: if (3 & r)
                                if ((0 | f) < 1) f = r;
                                else
                                  for (f = r; ; ) {
                                    if (
                                      ((a[0 | f] = b[0 | e]),
                                      (e = (e + 1) | 0),
                                      !(3 & (f = (f + 1) | 0)))
                                    )
                                      break e;
                                    if (!(f >>> 0 < i >>> 0)) break;
                                  }
                              else f = r;
                              if (
                                !(
                                  (r = -4 & i) >>> 0 < 64 ||
                                  (n = (r + -64) | 0) >>> 0 < f >>> 0
                                )
                              )
                                for (
                                  ;
                                  (o[f >> 2] = o[e >> 2]),
                                    (o[(f + 4) >> 2] = o[(e + 4) >> 2]),
                                    (o[(f + 8) >> 2] = o[(e + 8) >> 2]),
                                    (o[(f + 12) >> 2] = o[(e + 12) >> 2]),
                                    (o[(f + 16) >> 2] = o[(e + 16) >> 2]),
                                    (o[(f + 20) >> 2] = o[(e + 20) >> 2]),
                                    (o[(f + 24) >> 2] = o[(e + 24) >> 2]),
                                    (o[(f + 28) >> 2] = o[(e + 28) >> 2]),
                                    (o[(f + 32) >> 2] = o[(e + 32) >> 2]),
                                    (o[(f + 36) >> 2] = o[(e + 36) >> 2]),
                                    (o[(f + 40) >> 2] = o[(e + 40) >> 2]),
                                    (o[(f + 44) >> 2] = o[(e + 44) >> 2]),
                                    (o[(f + 48) >> 2] = o[(e + 48) >> 2]),
                                    (o[(f + 52) >> 2] = o[(e + 52) >> 2]),
                                    (o[(f + 56) >> 2] = o[(e + 56) >> 2]),
                                    (o[(f + 60) >> 2] = o[(e + 60) >> 2]),
                                    (e = (e - -64) | 0),
                                    n >>> 0 >= (f = (f - -64) | 0) >>> 0;

                                );
                              if (r >>> 0 <= f >>> 0) break r;
                              for (
                                ;
                                (o[f >> 2] = o[e >> 2]),
                                  (e = (e + 4) | 0),
                                  r >>> 0 > (f = (f + 4) | 0) >>> 0;

                              );
                            }
                            if (f >>> 0 < i >>> 0)
                              for (
                                ;
                                (a[0 | f] = b[0 | e]),
                                  (e = (e + 1) | 0),
                                  (0 | i) != (0 | (f = (f + 1) | 0));

                              );
                          }
                        }
                        function J(r) {
                          var e,
                            f = 0,
                            i = 0,
                            a = 0,
                            n = 0,
                            t = 0;
                          if (
                            ((e = r |= 0),
                            (r = 0),
                            (f = F(64)) &&
                              ((a = o[(e + 4) >> 2]),
                              (n =
                                o[((i = a >>> 0 < e >>> 0 ? a : e) + 4) >> 2]),
                              (t = o[n >> 2]),
                              (o[(f + 32) >> 2] = t),
                              (o[o[(t + 4) >> 2] >> 2] = f),
                              (o[f >> 2] = i),
                              (i = (f + 32) | 0),
                              (o[n >> 2] = i),
                              (o[(f + 16) >> 2] = 0),
                              (o[(f + 20) >> 2] = 0),
                              (o[(f + 12) >> 2] = i),
                              (o[(f + 4) >> 2] = i),
                              (o[(f + 24) >> 2] = 0),
                              (o[(f + 28) >> 2] = 0),
                              (o[(f + 48) >> 2] = 0),
                              (o[(f + 52) >> 2] = 0),
                              (o[(f + 40) >> 2] = i),
                              (o[(f + 36) >> 2] = f),
                              (o[(f + 56) >> 2] = 0),
                              (o[(f + 60) >> 2] = 0),
                              (o[(f + 8) >> 2] = f),
                              (n = o[(e + 12) >> 2]),
                              (t = o[(n + 8) >> 2]),
                              (o[(f + 44) >> 2] = n),
                              (o[(o[(t + 4) >> 2] + 12) >> 2] = f),
                              (o[(f + 8) >> 2] = t),
                              (o[(n + 8) >> 2] = f),
                              (n = o[(a + 16) >> 2]),
                              (o[(f + 16) >> 2] = n),
                              (a = F(40))))
                          ) {
                            for (
                              r = o[(n + 4) >> 2],
                                o[(a + 4) >> 2] = r,
                                o[r >> 2] = a,
                                o[a >> 2] = n,
                                o[(n + 4) >> 2] = a,
                                o[(a + 12) >> 2] = 0,
                                o[(a + 8) >> 2] = i,
                                r = i;
                              (o[(r + 16) >> 2] = a),
                                (0 | i) != (0 | (r = o[(r + 8) >> 2]));

                            );
                            (r = o[(e + 20) >> 2]),
                              (o[(f + 20) >> 2] = r),
                              (o[(f + 52) >> 2] = r),
                              (r = f);
                          }
                          return r
                            ? ((f = o[(r + 4) >> 2]),
                              (r = o[(e + 4) >> 2]),
                              (i = o[(o[(r + 4) >> 2] + 12) >> 2]),
                              (a = o[(i + 8) >> 2]),
                              (n = o[(r + 8) >> 2]),
                              (o[(o[(n + 4) >> 2] + 12) >> 2] = i),
                              (o[(o[(a + 4) >> 2] + 12) >> 2] = r),
                              (o[(r + 8) >> 2] = a),
                              (o[(i + 8) >> 2] = n),
                              (i = o[(f + 8) >> 2]),
                              (a = o[(r + 8) >> 2]),
                              (o[(o[(a + 4) >> 2] + 12) >> 2] = f),
                              (o[(o[(i + 4) >> 2] + 12) >> 2] = r),
                              (o[(r + 8) >> 2] = i),
                              (o[(f + 8) >> 2] = a),
                              (o[(r + 16) >> 2] = o[(f + 16) >> 2]),
                              (i = o[(f + 4) >> 2]),
                              (o[(o[(i + 16) >> 2] + 8) >> 2] = i),
                              (o[(i + 20) >> 2] = o[(r + 20) >> 2]),
                              (o[(f + 28) >> 2] = o[(e + 28) >> 2]),
                              (o[(i + 28) >> 2] = o[(r + 28) >> 2]),
                              0 | f)
                            : 0;
                        }
                        function Z(r, e, f, i, n, t) {
                          var b = 0,
                            k = 0,
                            u = 0,
                            c = 0,
                            s = 0;
                          (c = (e + 4) | 0), (u = (r - -64) | 0);
                          r: {
                            for (;;) {
                              if (((k = o[(f + 4) >> 2]), !(b = F(16))))
                                break r;
                              if (
                                ((o[b >> 2] = k),
                                (s = Cr(o[u >> 2], o[(e + 4) >> 2], b)),
                                (o[(b + 4) >> 2] = s),
                                !s)
                              )
                                break r;
                              if (
                                ((a[(b + 13) | 0] = 0),
                                (a[(b + 14) | 0] = 0),
                                (a[(b + 15) | 0] = 0),
                                (o[(k + 24) >> 2] = b),
                                (0 | i) == (0 | (f = o[(f + 8) >> 2])))
                              )
                                break;
                            }
                            if (
                              ((b = o[o[(o[(e + 4) >> 2] + 8) >> 2] >> 2]),
                              (f = o[(o[b >> 2] + 4) >> 2]),
                              (n = n || o[(f + 8) >> 2]),
                              o[(f + 16) >> 2] == o[(n + 16) >> 2])
                            )
                              for (u = 0; ; ) {
                                if (
                                  ((i = e),
                                  (e = b),
                                  (0 | (b = n)) != o[((n = f) + 8) >> 2])
                                ) {
                                  if (!$(o[(o[(n + 4) >> 2] + 12) >> 2], n))
                                    break r;
                                  if (!$(o[(o[(b + 4) >> 2] + 12) >> 2], n))
                                    break r;
                                }
                                (k = (o[(i + 8) >> 2] - o[(n + 28) >> 2]) | 0),
                                  (o[(e + 8) >> 2] = k);
                                e: {
                                  f: switch ((o[(r + 56) >> 2] - 100130) | 0) {
                                    case 0:
                                      f = 1 & k;
                                      break e;
                                    case 1:
                                      f = 0 != (0 | k);
                                      break e;
                                    case 2:
                                      f = (0 | k) > 0;
                                      break e;
                                    case 3:
                                      f = (k >>> 31) | 0;
                                      break e;
                                    case 4:
                                      break f;
                                    default:
                                      break e;
                                  }
                                  f = (k + 1) >>> 0 > 2;
                                }
                                if (
                                  ((a[(e + 12) | 0] = f),
                                  (a[(i + 14) | 0] = 1),
                                  u &&
                                    z(r, i) &&
                                    ((o[(n + 28) >> 2] =
                                      o[(n + 28) >> 2] + o[(b + 28) >> 2]),
                                    (f = o[(n + 4) >> 2]),
                                    (o[(f + 28) >> 2] =
                                      o[(f + 28) >> 2] +
                                      o[(o[(b + 4) >> 2] + 28) >> 2]),
                                    (o[(o[i >> 2] + 24) >> 2] = 0),
                                    xr(o[c >> 2]),
                                    W(i),
                                    !N(b)))
                                )
                                  break r;
                                if (
                                  ((c = (e + 4) | 0),
                                  (u = 1),
                                  (b = o[o[(o[(e + 4) >> 2] + 8) >> 2] >> 2]),
                                  (f = o[(o[b >> 2] + 4) >> 2]),
                                  o[(f + 16) >> 2] != o[(n + 16) >> 2])
                                )
                                  break;
                              }
                            return (a[(e + 14) | 0] = 1), void (t && Y(r, e));
                          }
                          Br((r + 1740) | 0, 1), g();
                        }
                        function X(r) {
                          var e,
                            f = 0,
                            i = 0,
                            a = 0,
                            n = 0,
                            t = 0,
                            k = 0,
                            u = 0,
                            c = 0;
                          if (
                            (0 | (n = o[(40 + (r |= 0)) >> 2])) !=
                            (0 | (e = (r + 40) | 0))
                          )
                            for (;;) {
                              if (((c = o[n >> 2]), !b[(n + 21) | 0])) {
                                for (
                                  u = o[(n + 8) >> 2], r = o[(u + 12) >> 2];
                                  ;

                                ) {
                                  if (
                                    ((o[(r + 20) >> 2] = 0),
                                    (k = o[(r + 12) >> 2]),
                                    (f = o[(r + 4) >> 2]),
                                    !o[(f + 20) >> 2])
                                  ) {
                                    if (
                                      ((a = o[(r + 16) >> 2]),
                                      (0 | (i = o[(r + 8) >> 2])) != (0 | r))
                                    )
                                      (o[(a + 8) >> 2] = i),
                                        (a = o[(f + 12) >> 2]),
                                        (t = o[(a + 8) >> 2]),
                                        (o[(o[(i + 4) >> 2] + 12) >> 2] = a),
                                        (o[(o[(t + 4) >> 2] + 12) >> 2] = r),
                                        (o[(r + 8) >> 2] = t),
                                        (o[(a + 8) >> 2] = i);
                                    else {
                                      for (
                                        f = i = o[(a + 8) >> 2];
                                        (o[(f + 16) >> 2] = 0),
                                          (0 | i) !=
                                            (0 | (f = o[(f + 8) >> 2]));

                                      );
                                      (f = o[a >> 2]),
                                        (i = o[(a + 4) >> 2]),
                                        (o[(f + 4) >> 2] = i),
                                        (o[i >> 2] = f),
                                        W(a),
                                        (f = o[(r + 4) >> 2]);
                                    }
                                    if (
                                      ((a = o[(f + 16) >> 2]),
                                      (0 | (i = o[(f + 8) >> 2])) != (0 | f))
                                    )
                                      (o[(a + 8) >> 2] = i),
                                        (a = o[(o[(f + 4) >> 2] + 12) >> 2]),
                                        (t = o[(a + 8) >> 2]),
                                        (o[(o[(i + 4) >> 2] + 12) >> 2] = a),
                                        (o[(o[(t + 4) >> 2] + 12) >> 2] = f),
                                        (o[(f + 8) >> 2] = t),
                                        (o[(a + 8) >> 2] = i);
                                    else {
                                      for (
                                        f = i = o[(a + 8) >> 2];
                                        (o[(f + 16) >> 2] = 0),
                                          (0 | i) !=
                                            (0 | (f = o[(f + 8) >> 2]));

                                      );
                                      (f = o[a >> 2]),
                                        (i = o[(a + 4) >> 2]),
                                        (o[(f + 4) >> 2] = i),
                                        (o[i >> 2] = f),
                                        W(a),
                                        (f = o[(r + 4) >> 2]);
                                    }
                                    (a =
                                      o[(f = r >>> 0 > f >>> 0 ? f : r) >> 2]),
                                      (i = o[o[(f + 4) >> 2] >> 2]),
                                      (o[o[(a + 4) >> 2] >> 2] = i),
                                      (o[o[(i + 4) >> 2] >> 2] = a),
                                      W(f);
                                  }
                                  if (((f = (0 | r) != (0 | u)), (r = k), !f))
                                    break;
                                }
                                (r = o[n >> 2]),
                                  (k = o[(n + 4) >> 2]),
                                  (o[(r + 4) >> 2] = k),
                                  (o[k >> 2] = r),
                                  W(n);
                              }
                              if ((0 | e) == (0 | (n = c))) break;
                            }
                        }
                        function $(r, e) {
                          var f = 0,
                            i = 0,
                            n = 0,
                            t = 0,
                            k = 0,
                            u = 0;
                          if ((0 | (r |= 0)) != (0 | (e |= 0))) {
                            if (
                              (0 | (i = o[(e + 16) >> 2])) !=
                              (0 | (k = o[(r + 16) >> 2]))
                            ) {
                              for (
                                f = n = o[(i + 8) >> 2];
                                (o[(f + 16) >> 2] = k),
                                  (0 | n) != (0 | (f = o[(f + 8) >> 2]));

                              );
                              (f = o[i >> 2]),
                                (n = o[(i + 4) >> 2]),
                                (o[(f + 4) >> 2] = n),
                                (o[n >> 2] = f),
                                W(i);
                            }
                            if (
                              (0 | (u = o[(r + 20) >> 2])) !=
                              (0 | (n = o[(e + 20) >> 2]))
                            ) {
                              for (
                                f = t = o[(n + 8) >> 2];
                                (o[(f + 20) >> 2] = u),
                                  (0 | t) != (0 | (f = o[(f + 12) >> 2]));

                              );
                              (f = o[n >> 2]),
                                (t = o[(n + 4) >> 2]),
                                (o[(f + 4) >> 2] = t),
                                (o[t >> 2] = f),
                                W(n);
                            }
                            if (
                              ((f = o[(r + 8) >> 2]),
                              (t = o[(e + 8) >> 2]),
                              (o[(o[(t + 4) >> 2] + 12) >> 2] = r),
                              (o[(o[(f + 4) >> 2] + 12) >> 2] = e),
                              (o[(e + 8) >> 2] = f),
                              (o[(r + 8) >> 2] = t),
                              (0 | i) == (0 | k))
                            ) {
                              if (!(i = F(40))) return 0;
                              for (
                                f = o[(r + 16) >> 2],
                                  k = o[(f + 4) >> 2],
                                  o[(i + 4) >> 2] = k,
                                  o[k >> 2] = i,
                                  o[i >> 2] = f,
                                  o[(f + 4) >> 2] = i,
                                  o[(i + 12) >> 2] = 0,
                                  o[(i + 8) >> 2] = e,
                                  f = e;
                                (o[(f + 16) >> 2] = i),
                                  (0 | (f = o[(f + 8) >> 2])) != (0 | e);

                              );
                              o[(o[(r + 16) >> 2] + 8) >> 2] = r;
                            }
                            if ((0 | n) == (0 | u)) {
                              if (!(i = F(24))) return 0;
                              for (
                                f = o[(r + 20) >> 2],
                                  n = o[(f + 4) >> 2],
                                  o[(i + 4) >> 2] = n,
                                  o[n >> 2] = i,
                                  o[i >> 2] = f,
                                  o[(f + 4) >> 2] = i,
                                  o[(i + 12) >> 2] = 0,
                                  o[(i + 16) >> 2] = 0,
                                  o[(i + 8) >> 2] = e,
                                  a[(i + 20) | 0] = 0,
                                  a[(i + 21) | 0] = b[(f + 21) | 0],
                                  f = e;
                                (o[(f + 20) >> 2] = i),
                                  (0 | (f = o[(f + 12) >> 2])) != (0 | e);

                              );
                              o[(o[(r + 20) >> 2] + 8) >> 2] = r;
                            }
                          }
                          return 1;
                        }
                        function rr(r, e) {
                          var f = 0,
                            i = 0,
                            a = 0,
                            n = 0,
                            t = 0,
                            b = 0,
                            k = p(0),
                            u = 0,
                            c = 0,
                            s = p(0);
                          if (o[(r + 20) >> 2]) {
                            (i = e),
                              (f = o[r >> 2]),
                              (r = (o[(f + 8) >> 2] + 1) | 0),
                              (o[(f + 8) >> 2] = r);
                            r: {
                              if (!((0 | (e = o[(f + 12) >> 2])) >= r << 1)) {
                                if (
                                  ((o[(f + 12) >> 2] = e << 1),
                                  (a = o[(f + 4) >> 2]),
                                  (e = K((n = o[f >> 2]), (e << 3) | 4)),
                                  (o[f >> 2] = e),
                                  !e)
                                ) {
                                  (o[f >> 2] = n), (a = 2147483647);
                                  break r;
                                }
                                if (
                                  ((e = K(
                                    o[(f + 4) >> 2],
                                    (8 + (o[(f + 12) >> 2] << 3)) | 0,
                                  )),
                                  (o[(f + 4) >> 2] = e),
                                  !e)
                                ) {
                                  (o[(f + 4) >> 2] = a), (a = 2147483647);
                                  break r;
                                }
                              }
                              if (
                                ((n = o[(f + 4) >> 2]),
                                (a = r),
                                (e = o[(f + 16) >> 2]) &&
                                  ((o[(f + 16) >> 2] =
                                    o[(4 + ((n + (e << 3)) | 0)) >> 2]),
                                  (a = e)),
                                (t = o[f >> 2]),
                                (o[(t + (r << 2)) >> 2] = a),
                                (o[(b = (n + (a << 3)) | 0) >> 2] = i),
                                (o[(b + 4) >> 2] = r),
                                o[(f + 20) >> 2])
                              ) {
                                e: if (r >>> 0 < 2) e = r;
                                else
                                  for (k = v[(i + 28) >> 2]; ; ) {
                                    if (
                                      ((f = o[(((e = r >> 1) << 2) + t) >> 2]),
                                      (c = o[(u = (n + (f << 3)) | 0) >> 2]),
                                      (s = v[(c + 28) >> 2]) < k)
                                    ) {
                                      e = r;
                                      break e;
                                    }
                                    if (
                                      !(
                                        !(
                                          v[(c + 32) >> 2] <= v[(i + 32) >> 2]
                                        ) |
                                        (k != s)
                                      )
                                    ) {
                                      e = r;
                                      break e;
                                    }
                                    if (
                                      ((o[((r << 2) + t) >> 2] = f),
                                      (o[(u + 4) >> 2] = r),
                                      !((r = e) >>> 0 > 1))
                                    )
                                      break;
                                  }
                                (o[((e << 2) + t) >> 2] = a),
                                  (o[(b + 4) >> 2] = e);
                              }
                            }
                            return a;
                          }
                          if (
                            ((i = ((f = o[(r + 12) >> 2]) + 1) | 0),
                            (o[(r + 12) >> 2] = i),
                            (a = o[(r + 4) >> 2]),
                            (0 | (n = i)) < (0 | (i = o[(r + 16) >> 2])))
                          )
                            i = a;
                          else if (
                            ((o[(r + 16) >> 2] = i << 1),
                            (i = K(a, i << 3)),
                            (o[(r + 4) >> 2] = i),
                            !i)
                          )
                            return (o[(r + 4) >> 2] = a), 2147483647;
                          return (o[((f << 2) + i) >> 2] = e), -1 ^ f;
                        }
                        function er(r) {
                          r |= 0;
                          var e,
                            f,
                            i = 0,
                            n = 0,
                            t = 0,
                            k = 0,
                            u = 0;
                          (e = F(40)), (f = F(40));
                          r: {
                            if (!(t = F(24)) || !e | !f) {
                              if ((e && W(e), f && W(f), !t)) break r;
                              return W(t), 0;
                            }
                            if (!(i = F(64))) return 0;
                            for (
                              n = o[(r + 68) >> 2],
                                k =
                                  o[
                                    ((n =
                                      n >>> 0 < (k = (r - -64) | 0) >>> 0
                                        ? n
                                        : k) +
                                      4) >>
                                      2
                                  ],
                                u = o[k >> 2],
                                o[(i + 32) >> 2] = u,
                                o[o[(u + 4) >> 2] >> 2] = i,
                                o[i >> 2] = n,
                                n = k,
                                k = (i + 32) | 0,
                                o[n >> 2] = k,
                                o[(i + 16) >> 2] = 0,
                                o[(i + 20) >> 2] = 0,
                                o[(i + 12) >> 2] = k,
                                o[(i + 4) >> 2] = k,
                                o[(i + 24) >> 2] = 0,
                                o[(i + 28) >> 2] = 0,
                                o[(i + 48) >> 2] = 0,
                                o[(i + 52) >> 2] = 0,
                                o[(i + 44) >> 2] = i,
                                o[(i + 40) >> 2] = k,
                                o[(i + 36) >> 2] = i,
                                o[(i + 56) >> 2] = 0,
                                o[(i + 60) >> 2] = 0,
                                o[(i + 8) >> 2] = i,
                                n = o[(r + 4) >> 2],
                                o[(e + 4) >> 2] = n,
                                o[n >> 2] = e,
                                o[(e + 12) >> 2] = 0,
                                o[(e + 8) >> 2] = i,
                                n = i;
                              (o[(n + 16) >> 2] = e),
                                (0 | (n = o[(n + 8) >> 2])) != (0 | i);

                            );
                            for (
                              o[(f + 4) >> 2] = e,
                                o[e >> 2] = f,
                                o[f >> 2] = r,
                                o[(r + 4) >> 2] = f,
                                o[(f + 12) >> 2] = 0,
                                o[(f + 8) >> 2] = k,
                                n = k;
                              (o[(n + 16) >> 2] = f),
                                (0 | k) != (0 | (n = o[(n + 8) >> 2]));

                            );
                            for (
                              n = o[(r + 44) >> 2],
                                o[(t + 4) >> 2] = n,
                                o[n >> 2] = t,
                                o[t >> 2] = r + 40,
                                o[(r + 44) >> 2] = t,
                                o[(t + 12) >> 2] = 0,
                                o[(t + 16) >> 2] = 0,
                                o[(t + 8) >> 2] = i,
                                a[(t + 20) | 0] = 0,
                                a[(t + 21) | 0] = b[(r + 61) | 0],
                                n = i;
                              (o[(n + 20) >> 2] = t),
                                (0 | (n = o[(n + 12) >> 2])) != (0 | i);

                            );
                          }
                          return 0 | i;
                        }
                        function fr(r, e) {
                          var f = 0,
                            i = 0,
                            n = 0,
                            t = 0,
                            k = 0,
                            u = 0;
                          (o[(r + 8) >> 2] = o[283]),
                            (f = o[282]),
                            (o[r >> 2] = o[281]),
                            (o[(r + 4) >> 2] = f),
                            (f = o[(e + 20) >> 2]);
                          r: if (b[(f + 21) | 0]) {
                            n = e;
                            e: {
                              f: {
                                for (;;) {
                                  if (b[(f + 20) | 0]) break r;
                                  if (
                                    ((a[(f + 20) | 0] = 1),
                                    (o[(f + 16) >> 2] = i),
                                    (n = o[(o[(n + 12) >> 2] + 4) >> 2]),
                                    (i = o[(n + 20) >> 2]),
                                    b[(i + 21) | 0])
                                  ) {
                                    if (b[(i + 20) | 0]) break f;
                                    if (
                                      ((a[(i + 20) | 0] = 1),
                                      (o[(i + 16) >> 2] = f),
                                      (t = (t + 2) | 0),
                                      (n = o[(n + 8) >> 2]),
                                      (f = o[(n + 20) >> 2]),
                                      b[(f + 21) | 0])
                                    )
                                      continue;
                                    break r;
                                  }
                                  break;
                                }
                                t |= 1;
                                break e;
                              }
                              t |= 1;
                            }
                            i = f;
                          } else n = e;
                          (k = o[(e + 4) >> 2]), (f = o[(k + 20) >> 2]);
                          r: if (!(!b[(f + 21) | 0] | b[(f + 20) | 0])) {
                            e: {
                              f: {
                                for (;;) {
                                  if (
                                    ((a[(f + 20) | 0] = 1),
                                    (o[(f + 16) >> 2] = i),
                                    (e = o[(k + 12) >> 2]),
                                    (k = o[(e + 4) >> 2]),
                                    (i = o[(k + 20) >> 2]),
                                    b[(i + 21) | 0])
                                  ) {
                                    if (b[(i + 20) | 0]) break f;
                                    if (
                                      ((a[(i + 20) | 0] = 1),
                                      (o[(i + 16) >> 2] = f),
                                      (u = (u + 2) | 0),
                                      (e = o[(o[(k + 8) >> 2] + 4) >> 2]),
                                      (k = o[(e + 4) >> 2]),
                                      (f = o[(k + 20) >> 2]),
                                      !b[(f + 21) | 0])
                                    )
                                      break r;
                                    if (!b[(f + 20) | 0]) continue;
                                    break r;
                                  }
                                  break;
                                }
                                u |= 1;
                                break e;
                              }
                              u |= 1;
                            }
                            i = f;
                          }
                          (f = (t + u) | 0), (o[r >> 2] = f);
                          r: {
                            if (1 & t) {
                              if (!(1 & u)) break r;
                              (o[r >> 2] = f - 1), (e = (e + 8) | 0);
                            } else e = (n + 4) | 0;
                            e = o[e >> 2];
                          }
                          if (((o[(r + 4) >> 2] = e), i))
                            for (
                              ;
                              (a[(i + 20) | 0] = 0), (i = o[(i + 16) >> 2]);

                            );
                        }
                        function ir(r, e) {
                          e |= 0;
                          var f = 0;
                          if ((0 | (f = o[(r |= 0) >> 2])) != (0 | e))
                            for (;;) {
                              r: if (e >>> 0 > f >>> 0) {
                                e: switch (0 | f) {
                                  case 0:
                                    11 == (0 | (f = o[(r + 1732) >> 2]))
                                      ? Fr[o[(r + 12) >> 2]](100151)
                                      : Fr[0 | f](100151, o[(r + 1896) >> 2]),
                                      o[r >> 2] && ir(r, 0),
                                      (o[(r + 112) >> 2] = 0),
                                      (f = 1),
                                      (o[r >> 2] = 1),
                                      (a[(r + 108) | 0] = 0),
                                      (o[(r + 1896) >> 2] = 0),
                                      (o[(r + 8) >> 2] = 0);
                                    break r;
                                  case 1:
                                    break e;
                                  default:
                                    break r;
                                }
                                if (
                                  (11 == (0 | (f = o[(r + 1732) >> 2]))
                                    ? Fr[o[(r + 12) >> 2]](100152)
                                    : Fr[0 | f](100152, o[(r + 1896) >> 2]),
                                  1 != o[r >> 2] && ir(r, 1),
                                  (o[r >> 2] = 2),
                                  (o[(r + 4) >> 2] = 0),
                                  (f = 2),
                                  o[(r + 112) >> 2] < 1)
                                )
                                  break r;
                                a[(r + 108) | 0] = 1;
                              } else {
                                e: switch ((f - 1) | 0) {
                                  case 1:
                                    11 == (0 | (f = o[(r + 1732) >> 2]))
                                      ? Fr[o[(r + 12) >> 2]](100154)
                                      : Fr[0 | f](100154, o[(r + 1896) >> 2]),
                                      2 != o[r >> 2] && ir(r, 2),
                                      (f = 1),
                                      (o[r >> 2] = 1);
                                    break r;
                                  case 0:
                                    break e;
                                  default:
                                    break r;
                                }
                                11 == (0 | (f = o[(r + 1732) >> 2]))
                                  ? Fr[o[(r + 12) >> 2]](100153)
                                  : Fr[0 | f](100153, o[(r + 1896) >> 2]),
                                  (f = o[(r + 8) >> 2]) && hr(f),
                                  (f = 0),
                                  (o[(r + 8) >> 2] = 0),
                                  (o[r >> 2] = 0),
                                  (o[(r + 4) >> 2] = 0);
                              }
                              if ((0 | e) == (0 | f)) break;
                            }
                        }
                        function ar(r, e, f) {
                          var i = 0,
                            a = 0,
                            n = 0,
                            t = 0,
                            o = 0,
                            b = 0,
                            k = 0,
                            u = 0,
                            c = 0;
                          r: {
                            e: {
                              f: {
                                i: {
                                  a: {
                                    n: {
                                      t: {
                                        o: {
                                          b: {
                                            k: {
                                              if (((a = e), e)) {
                                                if (!(i = f)) break k;
                                                break b;
                                              }
                                              (r = ((r >>> 0) / (f >>> 0)) | 0),
                                                (j = 0);
                                              break r;
                                            }
                                            if (!r) break o;
                                            break t;
                                          }
                                          if (!((i - 1) & i)) break n;
                                          b =
                                            (0 -
                                              (o =
                                                (((m(i) + 33) | 0) - m(a)) |
                                                0)) |
                                            0;
                                          break i;
                                        }
                                        (r = ((a >>> 0) / 0) | 0), (j = 0);
                                        break r;
                                      }
                                      if ((i = (32 - m(a)) | 0) >>> 0 < 31)
                                        break a;
                                      break f;
                                    }
                                    if (1 == (0 | i)) break e;
                                    (f =
                                      31 &
                                      (i = i ? (31 - m((i - 1) ^ i)) | 0 : 32)),
                                      (63 & i) >>> 0 >= 32
                                        ? ((a = 0), (r = (e >>> f) | 0))
                                        : ((a = (e >>> f) | 0),
                                          (r =
                                            ((((1 << f) - 1) & e) << (32 - f)) |
                                            (r >>> f))),
                                      (j = a);
                                    break r;
                                  }
                                  (o = (i + 1) | 0), (b = (63 - i) | 0);
                                }
                                if (
                                  ((i = e),
                                  (n = 31 & (a = 63 & o)),
                                  a >>> 0 >= 32
                                    ? ((a = 0), (n = (i >>> n) | 0))
                                    : ((a = (i >>> n) | 0),
                                      (n =
                                        ((((1 << n) - 1) & i) << (32 - n)) |
                                        (r >>> n))),
                                  (i = 31 & (b &= 63)),
                                  b >>> 0 >= 32
                                    ? ((e = r << i), (r = 0))
                                    : ((e =
                                        (((1 << i) - 1) & (r >>> (32 - i))) |
                                        (e << i)),
                                      (r <<= i)),
                                  o)
                                )
                                  for (
                                    b = -1 != (0 | (i = (f - 1) | 0)) ? 0 : -1;
                                    (n =
                                      ((k = t = (n << 1) | (e >>> 31)) -
                                        (u =
                                          f &
                                          (t =
                                            (b -
                                              (((a = (a << 1) | (n >>> 31)) +
                                                (i >>> 0 < t >>> 0)) |
                                                0)) >>
                                            31))) |
                                      0),
                                      (a = (a - (k >>> 0 < u >>> 0)) | 0),
                                      (e = (e << 1) | (r >>> 31)),
                                      (r = c | (r << 1)),
                                      (c = t &= 1),
                                      (o = (o - 1) | 0);

                                  );
                                (j = (e << 1) | (r >>> 31)), (r = t | (r << 1));
                                break r;
                              }
                              (r = 0), (e = 0);
                            }
                            j = e;
                          }
                          return r;
                        }
                        function nr(r) {
                          var e,
                            f,
                            i,
                            a,
                            n = 0,
                            t = 0,
                            b = 0,
                            k = p(0),
                            u = 0,
                            c = p(0),
                            s = 0,
                            A = 0,
                            l = 0,
                            d = 0,
                            h = 0;
                          if (
                            ((f = o[(r + 4) >> 2]),
                            (e = o[r >> 2]),
                            (t = o[(e + 4) >> 2]),
                            (a = o[(n = (f + (t << 3)) | 0) >> 2]),
                            !((0 | (i = o[(r + 8) >> 2])) < 1) &&
                              ((s = o[((i << 2) + e) >> 2]),
                              (o[(e + 4) >> 2] = s),
                              (o[(4 + (A = ((s << 3) + f) | 0)) >> 2] = 1),
                              (o[n >> 2] = 0),
                              (o[(n + 4) >> 2] = o[(r + 16) >> 2]),
                              (l = (i - 1) | 0),
                              (o[(r + 8) >> 2] = l),
                              (o[(r + 16) >> 2] = t),
                              1 != (0 | i)))
                          ) {
                            for (
                              h = ((s << 3) + f) | 0, n = 1;
                              (0 | l) <= (0 | (r = n << 1)) ||
                                ((b =
                                  o[
                                    ((o[(((t = 1 | r) << 2) + e) >> 2] << 3) +
                                      f) >>
                                      2
                                  ]),
                                (k = v[(b + 28) >> 2]),
                                (u =
                                  o[((o[((r << 2) + e) >> 2] << 3) + f) >> 2]),
                                (c = v[(u + 28) >> 2]),
                                (!(v[(b + 32) >> 2] <= v[(u + 32) >> 2]) |
                                  (k != c) &&
                                  !(k < c)) ||
                                  (r = t)),
                                !(
                                  (0 | r) >= (0 | i) ||
                                  ((t = o[h >> 2]),
                                  (k = v[(t + 28) >> 2]),
                                  (b = o[((r << 2) + e) >> 2]),
                                  (d = o[(u = ((b << 3) + f) | 0) >> 2]),
                                  (k < (c = v[(d + 28) >> 2])) |
                                    (v[(t + 32) >> 2] <= v[(d + 32) >> 2]
                                      ? k == c
                                      : 0))
                                );

                            )
                              (o[((n << 2) + e) >> 2] = b),
                                (o[(u + 4) >> 2] = n),
                                (n = r);
                            (o[((n << 2) + e) >> 2] = s), (o[(A + 4) >> 2] = n);
                          }
                          return a;
                        }
                        function tr(r, e, f) {
                          var i = 0,
                            n = 0;
                          if (
                            f &&
                            ((a[((i = (r + f) | 0) - 1) | 0] = e),
                            (a[0 | r] = e),
                            !(
                              f >>> 0 < 3 ||
                              ((a[(i - 2) | 0] = e),
                              (a[(r + 1) | 0] = e),
                              (a[(i - 3) | 0] = e),
                              (a[(r + 2) | 0] = e),
                              f >>> 0 < 7 ||
                                ((a[(i - 4) | 0] = e),
                                (a[(r + 3) | 0] = e),
                                f >>> 0 < 9 ||
                                  ((i = ((i = r) + (r = (0 - r) & 3)) | 0),
                                  (n = h(255 & e, 16843009)),
                                  (o[i >> 2] = n),
                                  (o[
                                    ((e = ((r = (f - r) & -4) + i) | 0) - 4) >>
                                      2
                                  ] = n),
                                  r >>> 0 < 9 ||
                                    ((o[(i + 8) >> 2] = n),
                                    (o[(i + 4) >> 2] = n),
                                    (o[(e - 8) >> 2] = n),
                                    (o[(e - 12) >> 2] = n),
                                    r >>> 0 < 25 ||
                                      ((o[(i + 24) >> 2] = n),
                                      (o[(i + 20) >> 2] = n),
                                      (o[(i + 16) >> 2] = n),
                                      (o[(i + 12) >> 2] = n),
                                      (o[(e - 16) >> 2] = n),
                                      (o[(e - 20) >> 2] = n),
                                      (o[(e - 24) >> 2] = n),
                                      (o[(e - 28) >> 2] = n),
                                      (f = (r - (e = (4 & i) | 24)) | 0) >>> 0 <
                                        32)))))
                            ))
                          )
                            for (
                              n = Er(n, 0, 1, 1), r = j, e = (e + i) | 0;
                              (o[(e + 24) >> 2] = n),
                                (i = r),
                                (o[(e + 28) >> 2] = i),
                                (o[(e + 16) >> 2] = n),
                                (o[(e + 20) >> 2] = i),
                                (o[(e + 8) >> 2] = n),
                                (o[(e + 12) >> 2] = i),
                                (o[e >> 2] = n),
                                (o[(e + 4) >> 2] = i),
                                (e = (e + 32) | 0),
                                (f = (f - 32) | 0) >>> 0 > 31;

                            );
                        }
                        function or(r, e, f) {
                          r: if (!(e >>> 0 > 20)) {
                            e: switch ((e - 9) | 0) {
                              case 0:
                                return (
                                  (e = o[f >> 2]),
                                  (o[f >> 2] = e + 4),
                                  void (o[r >> 2] = o[e >> 2])
                                );
                              case 1:
                                return (
                                  (e = o[f >> 2]),
                                  (o[f >> 2] = e + 4),
                                  (e = o[e >> 2]),
                                  (o[r >> 2] = e),
                                  void (o[(r + 4) >> 2] = e >> 31)
                                );
                              case 2:
                                return (
                                  (e = o[f >> 2]),
                                  (o[f >> 2] = e + 4),
                                  (o[r >> 2] = o[e >> 2]),
                                  void (o[(r + 4) >> 2] = 0)
                                );
                              case 3:
                                return (
                                  (e = (o[f >> 2] + 7) & -8),
                                  (o[f >> 2] = e + 8),
                                  (f = o[(e + 4) >> 2]),
                                  (o[r >> 2] = o[e >> 2]),
                                  void (o[(r + 4) >> 2] = f)
                                );
                              case 4:
                                return (
                                  (e = o[f >> 2]),
                                  (o[f >> 2] = e + 4),
                                  (e = t[e >> 1]),
                                  (o[r >> 2] = e),
                                  void (o[(r + 4) >> 2] = e >> 31)
                                );
                              case 5:
                                return (
                                  (e = o[f >> 2]),
                                  (o[f >> 2] = e + 4),
                                  (o[r >> 2] = A[e >> 1]),
                                  void (o[(r + 4) >> 2] = 0)
                                );
                              case 6:
                                return (
                                  (e = o[f >> 2]),
                                  (o[f >> 2] = e + 4),
                                  (e = a[0 | e]),
                                  (o[r >> 2] = e),
                                  void (o[(r + 4) >> 2] = e >> 31)
                                );
                              case 7:
                                return (
                                  (e = o[f >> 2]),
                                  (o[f >> 2] = e + 4),
                                  (o[r >> 2] = b[0 | e]),
                                  void (o[(r + 4) >> 2] = 0)
                                );
                              case 8:
                                return (
                                  (e = (o[f >> 2] + 7) & -8),
                                  (o[f >> 2] = e + 8),
                                  void (d[r >> 3] = d[e >> 3])
                                );
                              case 9:
                                break e;
                              default:
                                break r;
                            }
                            Fr[0](r, f);
                          }
                        }
                        function br(r, e, f) {
                          var i,
                            a = p(0),
                            n = p(0),
                            t = 0,
                            b = p(0),
                            k = p(0),
                            u = 0,
                            c = p(0),
                            s = p(0);
                          (U = i = (U + -64) | 0),
                            (u =
                              (a = v[(e + 28) >> 2]) > (n = v[(r + 28) >> 2]));
                          r: {
                            e: {
                              if (
                                !(
                                  !(v[(r + 32) >> 2] <= v[(e + 32) >> 2]) |
                                  (a != n)
                                ) ||
                                u
                              ) {
                                if (
                                  ((b = v[(f + 28) >> 2]) > a) |
                                  (v[(e + 32) >> 2] <= v[(f + 32) >> 2]
                                    ? a == b
                                    : 0)
                                )
                                  break r;
                                if (((t = 1), u)) break e;
                              }
                              (t = 0),
                                a == n &&
                                  (t = v[(r + 32) >> 2] <= v[(e + 32) >> 2]);
                            }
                            (u = t),
                              (t = 1),
                              (b = v[(f + 28) >> 2]) > a ||
                                ((t = 0),
                                a == b &&
                                  (t = v[(e + 32) >> 2] <= v[(f + 32) >> 2])),
                              (k = v[(r + 32) >> 2]),
                              (c = v[(e + 32) >> 2]),
                              (s = v[(f + 32) >> 2]),
                              (d[(i + 40) >> 3] = b),
                              (d[(i + 24) >> 3] = a),
                              (d[(i + 48) >> 3] = s),
                              (d[(i + 32) >> 3] = c),
                              (d[(i + 16) >> 3] = k),
                              (d[(i + 8) >> 3] = n),
                              (o[(i + 4) >> 2] = t),
                              (o[i >> 2] = u),
                              Pr(1092, i),
                              (b = v[(f + 28) >> 2]),
                              (n = v[(r + 28) >> 2]),
                              (a = v[(e + 28) >> 2]);
                          }
                          return (
                            (k = p(0)),
                            (U = (i - -64) | 0),
                            (n = p(a - n)),
                            (a = p(b - a)),
                            p(n + a) > p(0) &&
                              ((k = n),
                              (n = v[(e + 32) >> 2]),
                              (k = p(
                                p(k * p(n - v[(f + 32) >> 2])) +
                                  p(a * p(n - v[(r + 32) >> 2])),
                              ))),
                            k
                          );
                        }
                        function kr(r, e, f) {
                          var i = 0,
                            n = 0,
                            t = 0,
                            k = 0;
                          i = o[e >> 2];
                          r: {
                            if ((0 | e) != (0 | f))
                              for (;;) {
                                if (
                                  ((a[(e + 15) | 0] = 0),
                                  (k = o[(e + 4) >> 2]),
                                  (t = o[o[(k + 8) >> 2] >> 2]),
                                  (n = o[t >> 2]),
                                  o[(n + 16) >> 2] != o[(i + 16) >> 2])
                                ) {
                                  if (!b[(t + 15) | 0])
                                    return (
                                      (r = b[(e + 12) | 0]),
                                      (f = o[(i + 20) >> 2]),
                                      (o[(f + 8) >> 2] = i),
                                      (a[(f + 21) | 0] = r),
                                      (o[(i + 24) >> 2] = 0),
                                      xr(k),
                                      W(e),
                                      i
                                    );
                                  if (
                                    !(n = V(
                                      o[(o[(i + 8) >> 2] + 4) >> 2],
                                      o[(n + 4) >> 2],
                                    ))
                                  )
                                    break r;
                                  if (!N(o[t >> 2])) break r;
                                  (o[t >> 2] = n),
                                    (a[(t + 15) | 0] = 0),
                                    (o[(n + 24) >> 2] = t);
                                }
                                if (o[(i + 8) >> 2] != (0 | n)) {
                                  if (!$(o[(o[(n + 4) >> 2] + 12) >> 2], n))
                                    break r;
                                  if (!$(i, n)) break r;
                                }
                                if (
                                  ((n = b[(e + 12) | 0]),
                                  (i = o[e >> 2]),
                                  (k = o[(i + 20) >> 2]),
                                  (o[(k + 8) >> 2] = i),
                                  (a[(k + 21) | 0] = n),
                                  (o[(i + 24) >> 2] = 0),
                                  xr(o[(e + 4) >> 2]),
                                  W(e),
                                  (i = o[t >> 2]),
                                  (0 | f) == (0 | (e = t)))
                                )
                                  break;
                              }
                            return i;
                          }
                          Br((r + 1740) | 0, 1), g();
                        }
                        function ur(r, e, f) {
                          switch ((e - 100100) | 0) {
                            case 0:
                              return void (o[(r + 88) >> 2] = f || 15);
                            case 6:
                              return void (o[(r + 1716) >> 2] = f || 3);
                            case 4:
                              return (
                                (a[(r + 80) | 0] = 0 != (0 | f)),
                                void (o[(r + 92) >> 2] = f || 14)
                              );
                            case 10:
                              return (
                                (a[(r + 80) | 0] = 0 != (0 | f)),
                                void (o[(r + 1720) >> 2] = f || 4)
                              );
                            case 1:
                              return void (o[(r + 96) >> 2] = f || 13);
                            case 7:
                              return void (o[(r + 1724) >> 2] = f || 5);
                            case 2:
                              return void (o[(r + 100) >> 2] = f || 12);
                            case 8:
                              return void (o[(r + 1728) >> 2] = f || 6);
                            case 3:
                              return void (o[(r + 12) >> 2] = f || 18);
                            case 9:
                              return void (o[(r + 1732) >> 2] = f || 11);
                            case 5:
                              return void (o[(r + 76) >> 2] = f || 17);
                            case 11:
                              return void (o[(r + 1736) >> 2] = f || 8);
                            case 12:
                              return void (o[(r + 104) >> 2] = f || 16);
                          }
                          11 == (0 | (e = o[(r + 1732) >> 2]))
                            ? Fr[o[(r + 12) >> 2]](100900)
                            : Fr[0 | e](100900, o[(r + 1896) >> 2]);
                        }
                        function cr(r, e, f) {
                          var i = 0,
                            n = 0,
                            t = 0;
                          if (!(32 & b[0 | r]))
                            r: {
                              (n = e), (i = f);
                              e: {
                                if (!(r = o[((e = r) + 16) >> 2])) {
                                  if (
                                    ((r = b[(e + 74) | 0]),
                                    (a[(e + 74) | 0] = (r - 1) | r),
                                    8 & (r = o[e >> 2])
                                      ? ((o[e >> 2] = 32 | r), (r = -1))
                                      : ((o[(e + 4) >> 2] = 0),
                                        (o[(e + 8) >> 2] = 0),
                                        (r = o[(e + 44) >> 2]),
                                        (o[(e + 28) >> 2] = r),
                                        (o[(e + 20) >> 2] = r),
                                        (o[(e + 16) >> 2] =
                                          r + o[(e + 48) >> 2]),
                                        (r = 0)),
                                    r)
                                  )
                                    break e;
                                  r = o[(e + 16) >> 2];
                                }
                                if (
                                  (r - (t = o[(e + 20) >> 2])) >>> 0 <
                                  i >>> 0
                                ) {
                                  Fr[o[(e + 36) >> 2]](e, n, f);
                                  break r;
                                }
                                f: if (!(a[(e + 75) | 0] < 0)) {
                                  for (r = f; ; ) {
                                    if (((i = r), !r)) break f;
                                    if (10 == b[(n + (r = (i - 1) | 0)) | 0])
                                      break;
                                  }
                                  if (
                                    Fr[o[(e + 36) >> 2]](e, n, i) >>> 0 <
                                    i >>> 0
                                  )
                                    break e;
                                  (n = (i + n) | 0),
                                    (f = (f - i) | 0),
                                    (t = o[(e + 20) >> 2]);
                                }
                                G(t, n, f),
                                  (o[(e + 20) >> 2] = o[(e + 20) >> 2] + f);
                              }
                            }
                        }
                        function sr(r, e, f, i) {
                          var n,
                            t = 0;
                          (U = n = (U - 208) | 0),
                            (o[(n + 204) >> 2] = f),
                            tr((n + 160) | 0, 0, 40),
                            (o[(n + 200) >> 2] = o[(n + 204) >> 2]),
                            (0 |
                              D(
                                0,
                                e,
                                (n + 200) | 0,
                                (n + 80) | 0,
                                (n + 160) | 0,
                                i,
                              )) <
                              0 ||
                              (o[(r + 76) >> 2],
                              (f = o[r >> 2]),
                              a[(r + 74) | 0] <= 0 && (o[r >> 2] = -33 & f),
                              (t = 32 & f),
                              o[(r + 48) >> 2]
                                ? D(
                                    r,
                                    e,
                                    (n + 200) | 0,
                                    (n + 80) | 0,
                                    (n + 160) | 0,
                                    i,
                                  )
                                : ((o[(r + 48) >> 2] = 80),
                                  (o[(r + 16) >> 2] = n + 80),
                                  (o[(r + 28) >> 2] = n),
                                  (o[(r + 20) >> 2] = n),
                                  (f = o[(r + 44) >> 2]),
                                  (o[(r + 44) >> 2] = n),
                                  D(
                                    r,
                                    e,
                                    (n + 200) | 0,
                                    (n + 80) | 0,
                                    (n + 160) | 0,
                                    i,
                                  ),
                                  f &&
                                    (Fr[o[(r + 36) >> 2]](r, 0, 0),
                                    (o[(r + 48) >> 2] = 0),
                                    (o[(r + 44) >> 2] = f),
                                    (o[(r + 28) >> 2] = 0),
                                    (o[(r + 16) >> 2] = 0),
                                    (o[(r + 20) >> 2] = 0))),
                              (o[r >> 2] = o[r >> 2] | t)),
                            (U = (n + 208) | 0);
                        }
                        function Ar(r, e) {
                          if (!r) return 0;
                          r: {
                            e: {
                              if (r) {
                                if (e >>> 0 <= 127) break e;
                                if (o[o[493] >> 2]) {
                                  if (e >>> 0 <= 2047) {
                                    (a[(r + 1) | 0] = (63 & e) | 128),
                                      (a[0 | r] = (e >>> 6) | 192),
                                      (r = 2);
                                    break r;
                                  }
                                  if (
                                    !(57344 != (-8192 & e) && e >>> 0 >= 55296)
                                  ) {
                                    (a[(r + 2) | 0] = (63 & e) | 128),
                                      (a[0 | r] = (e >>> 12) | 224),
                                      (a[(r + 1) | 0] = ((e >>> 6) & 63) | 128),
                                      (r = 3);
                                    break r;
                                  }
                                  if ((e - 65536) >>> 0 <= 1048575) {
                                    (a[(r + 3) | 0] = (63 & e) | 128),
                                      (a[0 | r] = (e >>> 18) | 240),
                                      (a[(r + 2) | 0] = ((e >>> 6) & 63) | 128),
                                      (a[(r + 1) | 0] =
                                        ((e >>> 12) & 63) | 128),
                                      (r = 4);
                                    break r;
                                  }
                                } else if (57216 == (-128 & e)) break e;
                                (o[613] = 25), (r = -1);
                              } else r = 1;
                              break r;
                            }
                            (a[0 | r] = e), (r = 1);
                          }
                          return r;
                        }
                        function lr() {
                          var r,
                            e = 0,
                            f = 0;
                          return (r = F(128))
                            ? ((o[(r + 8) >> 2] = 0),
                              (o[(r + 12) >> 2] = 0),
                              (e = (r + 40) | 0),
                              (o[(r + 44) >> 2] = e),
                              (o[(r + 48) >> 2] = 0),
                              (o[(r + 52) >> 2] = 0),
                              (o[(r + 40) >> 2] = e),
                              (t[(r + 54) >> 1] = 0),
                              (t[(r + 56) >> 1] = 0),
                              (t[(r + 58) >> 1] = 0),
                              (t[(r + 60) >> 1] = 0),
                              (o[(r + 72) >> 2] = 0),
                              (o[(r + 76) >> 2] = 0),
                              (e = (r + 96) | 0),
                              (o[(r + 68) >> 2] = e),
                              (f = (r - -64) | 0),
                              (o[(r + 64) >> 2] = f),
                              (o[(r + 80) >> 2] = 0),
                              (o[(r + 84) >> 2] = 0),
                              (o[(r + 88) >> 2] = 0),
                              (o[(r + 92) >> 2] = 0),
                              (o[(r + 104) >> 2] = 0),
                              (o[(r + 108) >> 2] = 0),
                              (o[(r + 100) >> 2] = f),
                              (o[(r + 96) >> 2] = e),
                              (o[(r + 112) >> 2] = 0),
                              (o[(r + 116) >> 2] = 0),
                              (o[(r + 120) >> 2] = 0),
                              (o[(r + 124) >> 2] = 0),
                              (o[r >> 2] = r),
                              (o[(r + 4) >> 2] = r),
                              0 | r)
                            : 0;
                        }
                        function vr(r) {
                          var e,
                            f,
                            i = 0,
                            a = 0,
                            n = 0,
                            t = p(0),
                            b = p(0),
                            k = 0;
                          if (!(i = o[(r + 12) >> 2])) return nr(o[r >> 2]);
                          if (
                            ((f = o[(r + 8) >> 2]),
                            (e = o[o[(((f + (i << 2)) | 0) - 4) >> 2] >> 2]),
                            (a = o[r >> 2]),
                            o[(a + 8) >> 2] &&
                              ((n =
                                o[
                                  (o[(a + 4) >> 2] +
                                    (o[(o[a >> 2] + 4) >> 2] << 3)) >>
                                    2
                                ]),
                              (t = v[(n + 28) >> 2]),
                              (b = v[(e + 28) >> 2]),
                              !(
                                !(v[(n + 32) >> 2] <= v[(e + 32) >> 2]) |
                                (t != b)
                              ) || t < b))
                          )
                            return nr(a);
                          for (a = (((0 | i) < 1 ? i : 1) - 1) | 0; ; ) {
                            if ((0 | i) < 2) return (o[(r + 12) >> 2] = a), e;
                            if (
                              ((n = i << 2),
                              (i = k = (i - 1) | 0),
                              o[o[(((n + f) | 0) - 8) >> 2] >> 2])
                            )
                              break;
                          }
                          return (o[(r + 12) >> 2] = k), e;
                        }
                        function dr(r, e) {
                          var f = 0,
                            i = 0,
                            n = 0;
                          ((f = F(16)) &&
                            (n = er(o[(r + 8) >> 2])) &&
                            ((i = o[(n + 16) >> 2]),
                            (v[(i + 32) >> 2] = e),
                            (o[(i + 28) >> 2] = 2112929218),
                            (i = o[(o[(n + 4) >> 2] + 16) >> 2]),
                            (v[(i + 32) >> 2] = e),
                            (o[(i + 28) >> 2] = -34554430),
                            (o[(r + 72) >> 2] = i),
                            (a[(f + 15) | 0] = 0),
                            (a[(f + 12) | 0] = 0),
                            (o[(f + 8) >> 2] = 0),
                            (o[f >> 2] = n),
                            (a[(f + 13) | 0] = 1),
                            (a[(f + 14) | 0] = 0),
                            (i = f),
                            (f = Cr((n = o[(r + 64) >> 2]), n, f)),
                            (o[(i + 4) >> 2] = f),
                            f)) ||
                            (Br((r + 1740) | 0, 1), g());
                        }
                        function hr(r) {
                          var e = 0,
                            f = 0,
                            i = 0;
                          if (
                            (0 | (e = o[(40 + (r |= 0)) >> 2])) !=
                            (0 | (f = (r + 40) | 0))
                          )
                            for (
                              ;
                              (i = o[e >> 2]), W(e), (0 | f) != (0 | (e = i));

                            );
                          if ((0 | (e = o[r >> 2])) != (0 | r))
                            for (
                              ;
                              (i = o[e >> 2]), W(e), (0 | (e = i)) != (0 | r);

                            );
                          if (
                            (0 | (e = o[(r + 64) >> 2])) !=
                            (0 | (f = (r - -64) | 0))
                          )
                            for (
                              ;
                              (i = o[e >> 2]), W(e), (0 | f) != (0 | (e = i));

                            );
                          W(r);
                        }
                        function pr(r) {
                          var e = 0,
                            f = p(0),
                            i = p(0);
                          if (!(e = o[(r + 12) >> 2]))
                            return (
                              (r = o[r >> 2]),
                              o[
                                (o[(r + 4) >> 2] +
                                  (o[(o[r >> 2] + 4) >> 2] << 3)) >>
                                  2
                              ]
                            );
                          (e =
                            o[
                              o[
                                (((o[(r + 8) >> 2] + (e << 2)) | 0) - 4) >> 2
                              ] >> 2
                            ]),
                            (r = o[r >> 2]);
                          r: {
                            if (o[(r + 8) >> 2]) {
                              if (
                                ((r =
                                  o[
                                    (o[(r + 4) >> 2] +
                                      (o[(o[r >> 2] + 4) >> 2] << 3)) >>
                                      2
                                  ]),
                                (f = v[(r + 28) >> 2]) < (i = v[(e + 28) >> 2]))
                              )
                                break r;
                              if (
                                f == i &&
                                v[(r + 32) >> 2] <= v[(e + 32) >> 2]
                              )
                                break r;
                            }
                            r = e;
                          }
                          return r;
                        }
                        function wr(r, e, f) {
                          var i = 0,
                            n = 0,
                            t = 0;
                          if (e >>> 0 < 1) i = r;
                          else
                            for (
                              ;
                              (i = ar(r, e, 10)),
                                (t = n = j),
                                (n = Er(i, n, 10, 0)),
                                (a[0 | (f = (f - 1) | 0)] = (r - n) | 48),
                                (n = e >>> 0 > 9),
                                (r = i),
                                (e = t),
                                n;

                            );
                          if (i)
                            for (
                              ;
                              (r = ((i >>> 0) / 10) | 0),
                                (a[0 | (f = (f - 1) | 0)] =
                                  (i - h(r, 10)) | 48),
                                (e = i >>> 0 > 9),
                                (i = r),
                                e;

                            );
                          return f;
                        }
                        function mr(r, e, f, i) {
                          var a,
                            n = 0,
                            t = 0;
                          if (
                            ((a = (o[610] + 1) | 0),
                            (o[610] = a),
                            (o[r >> 2] = a),
                            i)
                          )
                            for (;;) {
                              if (!o[(t = ((n << 3) + f) | 0) >> 2])
                                return (
                                  (o[t >> 2] = a),
                                  (o[(4 + (r = ((n << 3) + f) | 0)) >> 2] = e),
                                  (o[(r + 8) >> 2] = 0),
                                  C(0 | i),
                                  f
                                );
                              if ((0 | (n = (n + 1) | 0)) == (0 | i)) break;
                            }
                          return (
                            (n = r),
                            (r = i << 1),
                            (e = mr(n, e, K(f, (i << 4) | 8), r)),
                            C(0 | r),
                            e
                          );
                        }
                        function yr(r, e) {
                          var f,
                            i,
                            a = 0;
                          if (
                            (s(+r),
                            (a = 0 | k(1)),
                            (f = 0 | k(0)),
                            (i = a),
                            2047 != (0 | (a = (a >>> 20) & 2047)))
                          ) {
                            if (!a)
                              return (
                                (a = e),
                                0 == r
                                  ? (e = 0)
                                  : ((r = yr(0x10000000000000000 * r, e)),
                                    (e = (o[e >> 2] + -64) | 0)),
                                (o[a >> 2] = e),
                                r
                              );
                            (o[e >> 2] = a - 1022),
                              u(0, 0 | f),
                              u(1, (-2146435073 & i) | 1071644672),
                              (r = +c());
                          }
                          return r;
                        }
                        function gr(r, e, f) {
                          var i = p(0),
                            a = p(0),
                            n = p(0),
                            t = p(0),
                            o = p(0);
                          return (
                            (i = v[(e + 28) >> 2]),
                            (a = p(i - v[(r + 28) >> 2])),
                            (i = p(v[(f + 28) >> 2] - i)),
                            (n = p(a + i)) > p(0)
                              ? ((o = v[(e + 32) >> 2]),
                                (t = v[(((e = i > a) ? r : f) + 32) >> 2]),
                                (i = p(
                                  p(o - t) +
                                    p(
                                      p((e ? a : i) / n) *
                                        p(t - v[((e ? f : r) + 32) >> 2]),
                                    ),
                                )))
                              : (i = p(0)),
                            i
                          );
                        }
                        function Cr(r, e, f) {
                          for (
                            var i = 0;
                            (e = o[(e + 8) >> 2]),
                              (i = o[e >> 2]) &&
                                !(
                                  0 |
                                  Fr[o[(r + 16) >> 2]](o[(r + 12) >> 2], i, f)
                                );

                          );
                          return (r = F(12))
                            ? ((o[r >> 2] = f),
                              (o[(r + 4) >> 2] = o[(e + 4) >> 2]),
                              (o[(o[(e + 4) >> 2] + 8) >> 2] = r),
                              (o[(r + 8) >> 2] = e),
                              (o[(e + 4) >> 2] = r),
                              r)
                            : 0;
                        }
                        function Er(r, e, f, i) {
                          var a,
                            n,
                            t,
                            o,
                            b = 0,
                            k = 0;
                          return (
                            (o = h((b = (f >>> 16) | 0), (k = (r >>> 16) | 0))),
                            (b =
                              ((65535 &
                                (k =
                                  ((((t = h(
                                    (a = 65535 & f),
                                    (n = 65535 & r),
                                  )) >>>
                                    16) |
                                    0) +
                                    h(k, a)) |
                                  0)) +
                                h(b, n)) |
                              0),
                            (j =
                              (((h(e, f) + o) | 0) +
                                h(r, i) +
                                (k >>> 16) +
                                (b >>> 16)) |
                              0),
                            (65535 & t) | (b << 16)
                          );
                        }
                        function Rr(r, e, f, i, a) {
                          var n;
                          if (
                            ((U = n = (U - 256) | 0),
                            !((73728 & a) | ((0 | f) <= (0 | i))))
                          ) {
                            if (
                              (tr(
                                n,
                                255 & e,
                                (i = (f = (f - i) | 0) >>> 0 < 256) ? f : 256,
                              ),
                              !i)
                            )
                              for (
                                ;
                                cr(r, n, 256), (f = (f - 256) | 0) >>> 0 > 255;

                              );
                            cr(r, n, f);
                          }
                          U = (n + 256) | 0;
                        }
                        function Ir(r, e, f) {
                          var i = 0,
                            a = 0;
                          r: if (f)
                            for (;;) {
                              if (!(a = o[((i << 3) + e) >> 2])) break r;
                              if ((0 | r) == (0 | a))
                                return o[(4 + (((i << 3) + e) | 0)) >> 2];
                              if ((0 | (i = (i + 1) | 0)) == (0 | f)) break;
                            }
                          return 0;
                        }
                        function Mr(r) {
                          var e, f;
                          return ((r =
                            ((e = o[412]) + (f = (r + 3) & -4)) | 0) >>>
                            0 <=
                            e >>> 0 &&
                            f) ||
                            (r >>> 0 > (Or() << 16) >>> 0 && !(0 | S(0 | r)))
                            ? ((o[613] = 48), -1)
                            : ((o[412] = r), e);
                        }
                        function _r(r) {
                          var e = 0,
                            f = 0,
                            i = 0;
                          if ((a[o[r >> 2]] - 48) >>> 0 < 10)
                            for (
                              ;
                              (e = o[r >> 2]),
                                (i = a[0 | e]),
                                (o[r >> 2] = e + 1),
                                (f = (((h(f, 10) + i) | 0) - 48) | 0),
                                (a[(e + 1) | 0] - 48) >>> 0 < 10;

                            );
                          return f;
                        }
                        function Sr(r) {
                          var e = 0;
                          (e = o[r >> 2]) &&
                            (W(o[(e + 4) >> 2]), W(o[e >> 2]), W(e)),
                            (e = o[(r + 8) >> 2]) && W(e),
                            (e = o[(r + 4) >> 2]) && W(e),
                            W(r);
                        }
                        function xr(r) {
                          var e;
                          (e = o[(r + 4) >> 2]),
                            (o[(e + 8) >> 2] = o[(r + 8) >> 2]),
                            (o[(o[(r + 8) >> 2] + 4) >> 2] = e),
                            W(r);
                        }
                        function Pr(r, e) {
                          var f;
                          (U = f = (U - 16) | 0),
                            (o[(f + 12) >> 2] = e),
                            sr(o[288], r, e, 43),
                            (U = (f + 16) | 0);
                        }
                        function Lr(r) {
                          var e;
                          return (
                            (((-1 >>> (e = 31 & r)) & -2) << e) |
                            (((-1 << (r = (0 - r) & 31)) & -2) >>> r)
                          );
                        }
                        function Br(r, e) {
                          (r |= 0),
                            (e |= 0),
                            o[611] || ((o[612] = e), (o[611] = r)),
                            x();
                        }
                        function Tr(r, e) {}
                        function Ur(r) {}
                        function jr() {}
                        (e = b), n();
                        var Fr = (function (r) {
                          return (
                            (r.set = function (r, e) {
                              this[r] = e;
                            }),
                            (r.get = function (r) {
                              return this[r];
                            }),
                            r
                          );
                        })([
                          null,
                          function (r, e, f) {
                            (r |= 0),
                              (e = o[(20 + (e |= 0)) >> 2]),
                              (o[(e + 16) >> 2] = o[(r + 84) >> 2]),
                              (o[(r + 84) >> 2] = e),
                              (a[(e + 20) | 0] = 1);
                          },
                          function (r, e, f) {
                            (e |= 0),
                              (f |= 0),
                              3 == (0 | (f = o[(1716 + (r |= 0)) >> 2]))
                                ? Fr[o[(r + 88) >> 2]](6)
                                : Fr[0 | f](6, o[(r + 1896) >> 2]),
                              5 == (0 | (f = o[(r + 1724) >> 2]))
                                ? Fr[o[(r + 96) >> 2]](
                                    o[(o[(e + 16) >> 2] + 12) >> 2],
                                  )
                                : Fr[0 | f](
                                    o[(o[(e + 16) >> 2] + 12) >> 2],
                                    o[(r + 1896) >> 2],
                                  ),
                              5 == (0 | (f = o[(r + 1724) >> 2]))
                                ? Fr[o[(r + 96) >> 2]](
                                    o[
                                      (o[(o[(e + 4) >> 2] + 16) >> 2] + 12) >> 2
                                    ],
                                  )
                                : Fr[0 | f](
                                    o[
                                      (o[(o[(e + 4) >> 2] + 16) >> 2] + 12) >> 2
                                    ],
                                    o[(r + 1896) >> 2],
                                  ),
                              (f = o[(e + 20) >> 2]);
                            r: if (b[(f + 21) | 0])
                              for (;;) {
                                if (b[(f + 20) | 0]) break r;
                                if (
                                  ((a[(f + 20) | 0] = 1),
                                  (e = o[(e + 8) >> 2]),
                                  5 == (0 | (f = o[(r + 1724) >> 2]))
                                    ? Fr[o[(r + 96) >> 2]](
                                        o[
                                          (o[(o[(e + 4) >> 2] + 16) >> 2] +
                                            12) >>
                                            2
                                        ],
                                      )
                                    : Fr[0 | f](
                                        o[
                                          (o[(o[(e + 4) >> 2] + 16) >> 2] +
                                            12) >>
                                            2
                                        ],
                                        o[(r + 1896) >> 2],
                                      ),
                                  (f = o[(e + 20) >> 2]),
                                  !b[(f + 21) | 0])
                                )
                                  break;
                              }
                            6 == (0 | (e = o[(r + 1728) >> 2]))
                              ? Fr[o[(r + 100) >> 2]]()
                              : Fr[0 | e](o[(r + 1896) >> 2]);
                          },
                          Tr,
                          Tr,
                          Tr,
                          Ur,
                          function (r, e, f) {
                            (e |= 0),
                              (f |= 0),
                              3 == (0 | (f = o[(1716 + (r |= 0)) >> 2]))
                                ? Fr[o[(r + 88) >> 2]](5)
                                : Fr[0 | f](5, o[(r + 1896) >> 2]),
                              5 == (0 | (f = o[(r + 1724) >> 2]))
                                ? Fr[o[(r + 96) >> 2]](
                                    o[(o[(e + 16) >> 2] + 12) >> 2],
                                  )
                                : Fr[0 | f](
                                    o[(o[(e + 16) >> 2] + 12) >> 2],
                                    o[(r + 1896) >> 2],
                                  ),
                              5 == (0 | (f = o[(r + 1724) >> 2]))
                                ? Fr[o[(r + 96) >> 2]](
                                    o[
                                      (o[(o[(e + 4) >> 2] + 16) >> 2] + 12) >> 2
                                    ],
                                  )
                                : Fr[0 | f](
                                    o[
                                      (o[(o[(e + 4) >> 2] + 16) >> 2] + 12) >> 2
                                    ],
                                    o[(r + 1896) >> 2],
                                  ),
                              (f = o[(e + 20) >> 2]);
                            r: if (b[(f + 21) | 0])
                              for (;;) {
                                if (b[(f + 20) | 0]) break r;
                                if (
                                  ((a[(f + 20) | 0] = 1),
                                  (e = o[(o[(e + 12) >> 2] + 4) >> 2]),
                                  5 == (0 | (f = o[(r + 1724) >> 2]))
                                    ? Fr[o[(r + 96) >> 2]](
                                        o[(o[(e + 16) >> 2] + 12) >> 2],
                                      )
                                    : Fr[0 | f](
                                        o[(o[(e + 16) >> 2] + 12) >> 2],
                                        o[(r + 1896) >> 2],
                                      ),
                                  (f = o[(e + 20) >> 2]),
                                  !b[(f + 21) | 0] | b[(f + 20) | 0])
                                )
                                  break r;
                                if (
                                  ((a[(f + 20) | 0] = 1),
                                  (e = o[(e + 8) >> 2]),
                                  5 == (0 | (f = o[(r + 1724) >> 2]))
                                    ? Fr[o[(r + 96) >> 2]](
                                        o[
                                          (o[(o[(e + 4) >> 2] + 16) >> 2] +
                                            12) >>
                                            2
                                        ],
                                      )
                                    : Fr[0 | f](
                                        o[
                                          (o[(o[(e + 4) >> 2] + 16) >> 2] +
                                            12) >>
                                            2
                                        ],
                                        o[(r + 1896) >> 2],
                                      ),
                                  (f = o[(e + 20) >> 2]),
                                  !b[(f + 21) | 0])
                                )
                                  break;
                              }
                            6 == (0 | (e = o[(r + 1728) >> 2]))
                              ? Fr[o[(r + 100) >> 2]]()
                              : Fr[0 | e](o[(r + 1896) >> 2]);
                          },
                          function (r, e, f, i, a) {},
                          function (r, e) {
                            (r |= 0), (e |= 0);
                            var f = p(0),
                              i = p(0);
                            if ((f = v[(r + 28) >> 2]) < (i = v[(e + 28) >> 2]))
                              r = 1;
                            else {
                              if (f != i) return 0;
                              r = v[(r + 32) >> 2] <= v[(e + 32) >> 2];
                            }
                            return 0 | r;
                          },
                          function (r, e, f) {
                            (r |= 0), (e |= 0), (f |= 0);
                            var i,
                              a,
                              n = p(0),
                              t = p(0);
                            return (
                              (f = o[f >> 2]),
                              (i = o[(o[(f + 4) >> 2] + 16) >> 2]),
                              (e = o[e >> 2]),
                              (0 | (a = o[(o[(e + 4) >> 2] + 16) >> 2])) ==
                              (0 | (r = o[(r + 72) >> 2]))
                                ? (0 | r) == (0 | i)
                                  ? ((e = o[(e + 16) >> 2]),
                                    (n = v[(e + 28) >> 2]),
                                    (f = o[(f + 16) >> 2]),
                                    (t = v[(f + 28) >> 2]),
                                    !(
                                      !(v[(e + 32) >> 2] <= v[(f + 32) >> 2]) |
                                      (n != t)
                                    ) || n < t
                                      ? (br(r, e, f) <= p(0)) | 0
                                      : (br(r, f, e) >= p(0)) | 0)
                                  : (br(i, r, o[(f + 16) >> 2]) <= p(0)) | 0
                                : ((e = o[(e + 16) >> 2]),
                                  (0 | r) == (0 | i)
                                    ? (br(a, r, e) >= p(0)) | 0
                                    : (gr(a, r, e) >=
                                        gr(
                                          o[(o[(f + 4) >> 2] + 16) >> 2],
                                          r,
                                          o[(f + 16) >> 2],
                                        )) |
                                      0)
                            );
                          },
                          Tr,
                          jr,
                          Ur,
                          Ur,
                          Ur,
                          Ur,
                          function (r, e, f, i) {},
                          Ur,
                          ir,
                          function (r) {
                            r |= 0;
                            var e = 0,
                              f = 0,
                              i = p(0),
                              a = p(0),
                              n = p(0),
                              t = p(0),
                              k = p(0),
                              u = p(0),
                              c = 0,
                              s = 0,
                              A = 0,
                              l = p(0),
                              d = p(0),
                              h = 0,
                              w = p(0),
                              m = p(0),
                              y = p(0),
                              g = p(0),
                              C = p(0),
                              E = 0,
                              R = 0,
                              I = p(0),
                              M = p(0),
                              _ = p(0);
                            r: {
                              e: if (!((0 | (A = o[(r + 112) >> 2])) < 3)) {
                                if (
                                  ((c = ((R = (r + 116) | 0) + (A << 4)) | 0),
                                  (t = v[(r + 24) >> 2]),
                                  (k = v[(r + 16) >> 2]),
                                  (u = v[(r + 20) >> 2]),
                                  t != p(0) || (k != p(0)) | (u != p(0)))
                                )
                                  (w = v[(r + 124) >> 2]),
                                    (n = p(v[(r + 140) >> 2] - w)),
                                    (m = v[(r + 120) >> 2]),
                                    (l = p(v[(r + 136) >> 2] - m)),
                                    (y = v[(r + 116) >> 2]),
                                    (d = p(v[(r + 132) >> 2] - y));
                                else {
                                  for (
                                    f = (r + 148) | 0,
                                      t = p(0),
                                      u = p(0),
                                      k = p(0),
                                      e = (r + 132) | 0,
                                      y = v[(r + 116) >> 2],
                                      i = d = p(v[e >> 2] - y),
                                      m = v[(r + 120) >> 2],
                                      a = l = p(v[(r + 136) >> 2] - m),
                                      w = v[(r + 124) >> 2],
                                      g = n = p(v[(r + 140) >> 2] - w);
                                    (C = p(v[(e + 20) >> 2] - m)),
                                      (I = p(v[f >> 2] - y)),
                                      (M = p(p(i * C) - p(a * I))),
                                      (_ = p(v[(e + 24) >> 2] - w)),
                                      (a = p(p(a * _) - p(g * C))),
                                      (i = p(p(g * I) - p(i * _))),
                                      p(p(t * M) + p(p(k * a) + p(u * i))) >=
                                      p(0)
                                        ? ((u = p(u + i)),
                                          (k = p(k + a)),
                                          (t = p(t + M)))
                                        : ((u = p(u - i)),
                                          (k = p(k - a)),
                                          (t = p(t - M))),
                                      (i = I),
                                      (a = C),
                                      (g = _),
                                      c >>> 0 > (f = ((e = f) + 16) | 0) >>> 0;

                                  );
                                  if ((0 | A) < 3) break e;
                                }
                                for (
                                  f = (r + 148) | 0, e = h = (r + 132) | 0;
                                  ;

                                ) {
                                  (i = n),
                                    (n = l),
                                    (E = e),
                                    (a = d),
                                    (l = p(v[(e + 20) >> 2] - m)),
                                    (d = p(v[(e = f) >> 2] - y)),
                                    (C = p(t * p(p(a * l) - p(n * d)))),
                                    (g = n),
                                    (n = p(v[(E + 24) >> 2] - w));
                                  f: if (
                                    (i = p(
                                      C +
                                        p(
                                          p(k * p(p(g * n) - p(i * l))) +
                                            p(u * p(p(i * d) - p(a * n))),
                                        ),
                                    )) != p(0)
                                  ) {
                                    if (i > p(0)) {
                                      if (
                                        ((f = 0),
                                        (E = (0 | s) < 0),
                                        (s = 1),
                                        !E)
                                      )
                                        break f;
                                      break r;
                                    }
                                    if (
                                      ((f = 0), (E = (0 | s) > 0), (s = -1), E)
                                    )
                                      break r;
                                  }
                                  if (!(c >>> 0 > (f = (e + 16) | 0) >>> 0))
                                    break;
                                }
                                switch (((f = 0), 0 | s)) {
                                  case 2:
                                    break r;
                                  case 0:
                                    break e;
                                }
                                f = 1;
                                f: {
                                  i: switch ((o[(r + 56) >> 2] - 100132) | 0) {
                                    case 0:
                                      if ((0 | s) >= 0) break f;
                                      break e;
                                    case 2:
                                      break r;
                                    case 1:
                                      break i;
                                    default:
                                      break f;
                                  }
                                  if ((0 | s) > 0) break e;
                                }
                                3 == (0 | (e = o[(r + 1716) >> 2]))
                                  ? Fr[o[(r + 88) >> 2]](
                                      b[(r + 81) | 0] ? 2 : (0 | A) < 4 ? 4 : 6,
                                    )
                                  : Fr[0 | e](
                                      b[(r + 81) | 0] ? 2 : (0 | A) < 4 ? 4 : 6,
                                      o[(r + 1896) >> 2],
                                    ),
                                  5 == (0 | (e = o[(r + 1724) >> 2]))
                                    ? Fr[o[(r + 96) >> 2]](o[(r + 128) >> 2])
                                    : Fr[0 | e](
                                        o[(r + 128) >> 2],
                                        o[(r + 1896) >> 2],
                                      );
                                f: if ((0 | s) <= 0) {
                                  if (R >>> 0 >= (e = (c - 16) | 0) >>> 0)
                                    break f;
                                  for (
                                    ;
                                    5 == (0 | (f = o[(r + 1724) >> 2]))
                                      ? Fr[o[(r + 96) >> 2]](o[(c - 4) >> 2])
                                      : Fr[0 | f](
                                          o[(c - 4) >> 2],
                                          o[(r + 1896) >> 2],
                                        ),
                                      (c = e),
                                      R >>> 0 < (e = (e - 16) | 0) >>> 0;

                                  );
                                } else if (!((0 | A) < 2))
                                  for (
                                    ;
                                    5 == (0 | (e = o[(r + 1724) >> 2]))
                                      ? Fr[o[(r + 96) >> 2]](o[(h + 12) >> 2])
                                      : Fr[0 | e](
                                          o[(h + 12) >> 2],
                                          o[(r + 1896) >> 2],
                                        ),
                                      (h = (h + 16) | 0) >>> 0 < c >>> 0;

                                  );
                                6 == (0 | (e = o[(r + 1728) >> 2]))
                                  ? Fr[o[(r + 100) >> 2]]()
                                  : Fr[0 | e](o[(r + 1896) >> 2]);
                              }
                              f = 1;
                            }
                            return 0 | f;
                          },
                          lr,
                          er,
                          J,
                          $,
                          Q,
                          Br,
                          function (r) {
                            r |= 0;
                            var e,
                              f = 0,
                              i = 0,
                              n = 0,
                              t = 0,
                              b = 0,
                              k = 0,
                              u = 0,
                              c = p(0),
                              s = p(0),
                              A = 0,
                              l = 0,
                              d = 0,
                              w = 0,
                              m = 0,
                              y = 0,
                              C = 0,
                              E = 0,
                              R = 0,
                              I = 0;
                            (U = e = (U - 48) | 0), (a[(r + 60) | 0] = 0);
                            r: {
                              if (
                                ((i = o[(r + 8) >> 2]),
                                (0 | (f = o[(i + 64) >> 2])) !=
                                  (0 | (k = (i - -64) | 0)))
                              )
                                for (;;) {
                                  (i = o[(f + 12) >> 2]),
                                    (t = o[f >> 2]),
                                    (b = o[(f + 16) >> 2]),
                                    (n = o[(o[(f + 4) >> 2] + 16) >> 2]);
                                  e: {
                                    if (
                                      !(
                                        (v[(b + 28) >> 2] != v[(n + 28) >> 2]) |
                                        (v[(b + 32) >> 2] != v[(n + 32) >> 2]) |
                                        (o[(i + 12) >> 2] == (0 | f))
                                      )
                                    ) {
                                      (o[(e + 24) >> 2] = 0),
                                        (o[(e + 28) >> 2] = 0),
                                        (o[(e + 16) >> 2] = 0),
                                        (o[(e + 20) >> 2] = 0),
                                        (n = o[287]),
                                        (o[(e + 8) >> 2] = o[286]),
                                        (o[(e + 12) >> 2] = n),
                                        (n = o[285]),
                                        (o[e >> 2] = o[284]),
                                        (o[(e + 4) >> 2] = n),
                                        (n = o[(i + 16) >> 2]),
                                        (o[(e + 16) >> 2] = o[(n + 12) >> 2]),
                                        (o[(e + 20) >> 2] = o[(b + 12) >> 2]),
                                        (v[(e + 36) >> 2] = v[(n + 16) >> 2]),
                                        (v[(e + 40) >> 2] = v[(n + 20) >> 2]),
                                        (v[(e + 44) >> 2] = v[(n + 24) >> 2]),
                                        (o[(n + 12) >> 2] = 0),
                                        (n = (n + 12) | 0),
                                        8 == (0 | (b = o[(r + 1736) >> 2]))
                                          ? Fr[o[(r + 76) >> 2]](
                                              (e + 36) | 0,
                                              (e + 16) | 0,
                                              e,
                                              n,
                                            )
                                          : Fr[0 | b](
                                              (e + 36) | 0,
                                              (e + 16) | 0,
                                              e,
                                              n,
                                              o[(r + 1896) >> 2],
                                            ),
                                        o[n >> 2] ||
                                          (o[n >> 2] = o[(e + 16) >> 2]);
                                      f: {
                                        if ($(i, f)) {
                                          if (!N(f)) break f;
                                          n = o[(i + 12) >> 2];
                                          break e;
                                        }
                                        break r;
                                      }
                                      break r;
                                    }
                                    (n = i), (i = f);
                                  }
                                  if (o[(n + 12) >> 2] == (0 | i)) {
                                    if (
                                      (0 | i) != (0 | n) &&
                                      ((t =
                                        o[(t + 4) >> 2] != (0 | n) &&
                                        (0 | n) != (0 | t)
                                          ? t
                                          : o[t >> 2]),
                                      !N(n))
                                    )
                                      break r;
                                    if (
                                      ((f =
                                        ((0 | i) == (0 | t)) |
                                        (o[(t + 4) >> 2] == (0 | i))
                                          ? o[t >> 2]
                                          : t),
                                      !N(i))
                                    )
                                      break r;
                                  } else f = t;
                                  if ((0 | f) == (0 | k)) break;
                                }
                              (t = r),
                                (f = F(28))
                                  ? ((n = f),
                                    (i = F(28))
                                      ? ((o[(i + 8) >> 2] = 0),
                                        (o[(i + 12) >> 2] = 32),
                                        (b = F(132)),
                                        (o[i >> 2] = b),
                                        b
                                          ? ((k = F(264)),
                                            (o[(i + 4) >> 2] = k),
                                            k
                                              ? ((o[(i + 24) >> 2] = 9),
                                                (o[(i + 16) >> 2] = 0),
                                                (o[(i + 20) >> 2] = 0),
                                                (o[(b + 4) >> 2] = 1),
                                                (o[(k + 8) >> 2] = 0))
                                              : (W(b), W(i), (i = 0)))
                                          : (W(i), (i = 0)))
                                      : (i = 0),
                                    (o[n >> 2] = i),
                                    i
                                      ? ((n = F(128)),
                                        (o[(f + 4) >> 2] = n),
                                        n
                                          ? ((o[(f + 24) >> 2] = 9),
                                            (o[(f + 20) >> 2] = 0),
                                            (o[(f + 12) >> 2] = 0),
                                            (o[(f + 16) >> 2] = 32))
                                          : (W(o[(i + 4) >> 2]),
                                            W(o[i >> 2]),
                                            W(i),
                                            W(f),
                                            (f = 0)))
                                      : (W(f), (f = 0)))
                                  : (f = 0),
                                (d = f),
                                (o[(t + 68) >> 2] = f);
                              e: if (f) {
                                f: {
                                  i = o[(r + 8) >> 2];
                                  i: {
                                    if ((0 | (f = o[i >> 2])) != (0 | i))
                                      for (;;) {
                                        if (
                                          ((t = rr(d, f)),
                                          (o[(f + 36) >> 2] = t),
                                          2147483647 == (0 | t))
                                        )
                                          break i;
                                        if ((0 | i) == (0 | (f = o[f >> 2])))
                                          break;
                                      }
                                    if (
                                      ((U = y = (U - 400) | 0),
                                      (t = F(
                                        (4 +
                                          (f = (m = o[(d + 12) >> 2]) << 2)) |
                                          0,
                                      )),
                                      (o[(d + 8) >> 2] = t),
                                      (U = (y + 400) | 0),
                                      t)
                                    ) {
                                      if (
                                        !(
                                          (b = (((f + t) | 0) - 4) | 0) >>> 0 <
                                          t >>> 0
                                        )
                                      ) {
                                        if (
                                          ((i = o[(d + 4) >> 2]),
                                          (n =
                                            (1 +
                                              (((k = ((m << 2) - 4) | 0) >>>
                                                2) |
                                                0)) &
                                            7))
                                        )
                                          for (
                                            f = t;
                                            (o[f >> 2] = i),
                                              (f = (f + 4) | 0),
                                              (i = (i + 4) | 0),
                                              (n = (n - 1) | 0);

                                          );
                                        else f = t;
                                        if (!(k >>> 0 < 28))
                                          for (
                                            ;
                                            (o[f >> 2] = i),
                                              (o[(f + 28) >> 2] = i + 28),
                                              (o[(f + 24) >> 2] = i + 24),
                                              (o[(f + 20) >> 2] = i + 20),
                                              (o[(f + 16) >> 2] = i + 16),
                                              (o[(f + 12) >> 2] = i + 12),
                                              (o[(f + 8) >> 2] = i + 8),
                                              (o[(f + 4) >> 2] = i + 4),
                                              (i = (i + 32) | 0),
                                              b >>> 0 >=
                                                (f = (f + 32) | 0) >>> 0;

                                          );
                                      }
                                      for (
                                        o[(y + 4) >> 2] = b,
                                          o[y >> 2] = t,
                                          C = 2016473283,
                                          u = 1;
                                        ;

                                      ) {
                                        if (
                                          (A =
                                            o[
                                              ((((u << 3) + y) | 0) - 4) >> 2
                                            ]) >>>
                                            0 >
                                          ((k = o[((w << 3) + y) >> 2]) +
                                            40) >>>
                                            0
                                        )
                                          for (;;) {
                                            for (
                                              C = (h(C, 1539415821) + 1) | 0,
                                                R =
                                                  o[
                                                    (f =
                                                      (((C >>> 0) %
                                                        ((1 +
                                                          ((A - k) >> 2)) >>>
                                                          0) <<
                                                        2) +
                                                        k) |
                                                      0) >> 2
                                                  ],
                                                o[f >> 2] = o[k >> 2],
                                                o[k >> 2] = R,
                                                n = (A + 4) | 0,
                                                i = (k - 4) | 0;
                                              ;

                                            ) {
                                              (t = n),
                                                (l = o[(i + 4) >> 2]),
                                                (b = i),
                                                (f = (i + 4) | 0),
                                                (n = o[l >> 2]),
                                                (c = v[(n + 28) >> 2]),
                                                (E = o[R >> 2]),
                                                (u = f);
                                              a: if (
                                                !(c < (s = v[(E + 28) >> 2]))
                                              ) {
                                                for (;;) {
                                                  if (
                                                    ((i = f),
                                                    (u = f),
                                                    v[(n + 32) >> 2] <=
                                                      v[(E + 32) >> 2] &&
                                                      c == s)
                                                  )
                                                    break a;
                                                  if (
                                                    ((f = (i + 4) | 0),
                                                    (b = i),
                                                    (l = o[(i + 4) >> 2]),
                                                    (n = o[l >> 2]),
                                                    s > (c = v[(n + 28) >> 2]))
                                                  )
                                                    break;
                                                }
                                                u = f;
                                              }
                                              (i = u),
                                                (u = o[(n = (t - 4) | 0) >> 2]),
                                                (f = o[u >> 2]);
                                              a: if (
                                                !(s < (c = v[(f + 28) >> 2]))
                                              )
                                                for (;;) {
                                                  if (
                                                    !(
                                                      !(
                                                        v[(E + 32) >> 2] <=
                                                        v[(f + 32) >> 2]
                                                      ) |
                                                      (c != s)
                                                    )
                                                  )
                                                    break a;
                                                  if (
                                                    ((t = n),
                                                    (u =
                                                      o[
                                                        (n = (n - 4) | 0) >> 2
                                                      ]),
                                                    (f = o[u >> 2]),
                                                    s < (c = v[(f + 28) >> 2]))
                                                  )
                                                    break;
                                                }
                                              if (
                                                ((o[i >> 2] = u),
                                                (o[n >> 2] = l),
                                                !(i >>> 0 < n >>> 0))
                                              )
                                                break;
                                            }
                                            if (
                                              ((f = o[i >> 2]),
                                              (o[i >> 2] = l),
                                              (o[n >> 2] = f),
                                              ((i - k) | 0) < ((A - n) | 0)
                                                ? ((f = t), (n = A), (A = b))
                                                : ((f = k), (n = b), (k = t)),
                                              (o[
                                                (4 +
                                                  (i = ((w << 3) + y) | 0)) >>
                                                  2
                                              ] = n),
                                              (o[i >> 2] = f),
                                              (w = (w + 1) | 0),
                                              !((k + 40) >>> 0 < A >>> 0))
                                            )
                                              break;
                                          }
                                        if (
                                          ((u = w),
                                          A >>> 0 >= (t = (k + 4) | 0) >>> 0)
                                        )
                                          for (;;) {
                                            (n = o[t >> 2]), (i = f = t);
                                            a: if (!(k >>> 0 >= f >>> 0))
                                              for (;;) {
                                                if (
                                                  ((b = o[n >> 2]),
                                                  (c = v[(b + 28) >> 2]),
                                                  (w =
                                                    o[(i = (f - 4) | 0) >> 2]),
                                                  (l = o[w >> 2]),
                                                  c < (s = v[(l + 28) >> 2]))
                                                ) {
                                                  i = f;
                                                  break a;
                                                }
                                                if (
                                                  !(
                                                    !(
                                                      v[(b + 32) >> 2] <=
                                                      v[(l + 32) >> 2]
                                                    ) |
                                                    (c != s)
                                                  )
                                                ) {
                                                  i = f;
                                                  break a;
                                                }
                                                if (
                                                  ((o[f >> 2] = w),
                                                  !(k >>> 0 < (f = i) >>> 0))
                                                )
                                                  break;
                                              }
                                            if (
                                              ((o[i >> 2] = n),
                                              !(
                                                A >>> 0 >=
                                                (t = (t + 4) | 0) >>> 0
                                              ))
                                            )
                                              break;
                                          }
                                        if (
                                          ((w = (u - 1) | 0), !((0 | u) >= 1))
                                        )
                                          break;
                                      }
                                      if (
                                        ((o[(d + 20) >> 2] = 1),
                                        (o[(d + 16) >> 2] = m),
                                        (d = o[d >> 2]),
                                        (0 | (t = o[(d + 8) >> 2])) >= 1)
                                      )
                                        for (
                                          A = o[(d + 4) >> 2],
                                            k = o[d >> 2],
                                            i = t;
                                          ;

                                        ) {
                                          for (
                                            n = i,
                                              u =
                                                (A +
                                                  ((w =
                                                    o[(k + (i << 2)) >> 2]) <<
                                                    3)) |
                                                0,
                                              f = i;
                                            (0 | t) <= (0 | (i = f << 1)) ||
                                              ((l =
                                                o[
                                                  (A +
                                                    (o[
                                                      (k +
                                                        ((b = 1 | i) << 2)) >>
                                                        2
                                                    ] <<
                                                      3)) >>
                                                    2
                                                ]),
                                              (c = v[(l + 28) >> 2]),
                                              (m =
                                                o[
                                                  (A +
                                                    (o[(k + (i << 2)) >> 2] <<
                                                      3)) >>
                                                    2
                                                ]),
                                              (s = v[(m + 28) >> 2]),
                                              (!(
                                                v[(l + 32) >> 2] <=
                                                v[(m + 32) >> 2]
                                              ) |
                                                (c != s) &&
                                                !(c < s)) ||
                                                (i = b)),
                                              !(
                                                (0 | i) > (0 | t) ||
                                                ((b = o[u >> 2]),
                                                (c = v[(b + 28) >> 2]),
                                                (l = o[(k + (i << 2)) >> 2]),
                                                (C =
                                                  o[
                                                    (m = (A + (l << 3)) | 0) >>
                                                      2
                                                  ]),
                                                (c < (s = v[(C + 28) >> 2])) |
                                                  (v[(b + 32) >> 2] <=
                                                  v[(C + 32) >> 2]
                                                    ? c == s
                                                    : 0))
                                              );

                                          )
                                            (o[(k + (f << 2)) >> 2] = l),
                                              (o[(m + 4) >> 2] = f),
                                              (f = i);
                                          if (
                                            ((o[(k + (f << 2)) >> 2] = w),
                                            (o[(u + 4) >> 2] = f),
                                            (i = (n - 1) | 0),
                                            !((0 | n) > 1))
                                          )
                                            break;
                                        }
                                      (o[(d + 20) >> 2] = 1), (f = 1);
                                    } else f = 0;
                                    if (f) break f;
                                  }
                                  Sr(o[(r + 68) >> 2]), (o[(r + 68) >> 2] = 0);
                                  break e;
                                }
                                if (
                                  ((i = (r - -64) | 0),
                                  (f = F(20))
                                    ? ((o[(f + 16) >> 2] = 10),
                                      (o[(f + 12) >> 2] = r),
                                      (o[f >> 2] = 0),
                                      (o[(f + 8) >> 2] = f),
                                      (o[(f + 4) >> 2] = f))
                                    : (f = 0),
                                  (o[i >> 2] = f),
                                  !f)
                                )
                                  break r;
                                if (
                                  (dr(r, p(-3999999973526325e22)),
                                  dr(r, p(3999999973526325e22)),
                                  (i = vr(o[(r + 68) >> 2])))
                                )
                                  for (;;) {
                                    f: if ((f = pr(o[(r + 68) >> 2])))
                                      for (;;) {
                                        if (
                                          (v[(f + 28) >> 2] !=
                                            v[(i + 28) >> 2]) |
                                          (v[(f + 32) >> 2] != v[(i + 32) >> 2])
                                        )
                                          break f;
                                        if (
                                          ((t =
                                            o[(vr(o[(r + 68) >> 2]) + 8) >> 2]),
                                          (n = o[(i + 8) >> 2]),
                                          (o[(e + 24) >> 2] = 0),
                                          (o[(e + 28) >> 2] = 0),
                                          (o[(e + 16) >> 2] = 0),
                                          (o[(e + 20) >> 2] = 0),
                                          (f = o[287]),
                                          (o[(e + 8) >> 2] = o[286]),
                                          (o[(e + 12) >> 2] = f),
                                          (f = o[285]),
                                          (o[e >> 2] = o[284]),
                                          (o[(e + 4) >> 2] = f),
                                          (f = o[(n + 16) >> 2]),
                                          (o[(e + 16) >> 2] = o[(f + 12) >> 2]),
                                          (o[(e + 20) >> 2] =
                                            o[(o[(t + 16) >> 2] + 12) >> 2]),
                                          (v[(e + 36) >> 2] = v[(f + 16) >> 2]),
                                          (v[(e + 40) >> 2] = v[(f + 20) >> 2]),
                                          (v[(e + 44) >> 2] = v[(f + 24) >> 2]),
                                          (o[(f + 12) >> 2] = 0),
                                          (f = (f + 12) | 0),
                                          8 == (0 | (b = o[(r + 1736) >> 2]))
                                            ? Fr[o[(r + 76) >> 2]](
                                                (e + 36) | 0,
                                                (e + 16) | 0,
                                                e,
                                                f,
                                              )
                                            : Fr[0 | b](
                                                (e + 36) | 0,
                                                (e + 16) | 0,
                                                e,
                                                f,
                                                o[(r + 1896) >> 2],
                                              ),
                                          o[f >> 2] ||
                                            (o[f >> 2] = o[(e + 16) >> 2]),
                                          !$(n, t))
                                        )
                                          break r;
                                        if (!(f = pr(o[(r + 68) >> 2]))) break;
                                      }
                                    if ((H(r, i), !(i = vr(o[(r + 68) >> 2]))))
                                      break;
                                  }
                                if (
                                  ((f =
                                    o[
                                      o[
                                        (o[(t = (r - -64) | 0) >> 2] + 4) >> 2
                                      ] >> 2
                                    ]),
                                  (i = o[f >> 2]),
                                  (o[(r + 72) >> 2] = o[(i + 16) >> 2]),
                                  (o[(i + 24) >> 2] = 0),
                                  xr(o[(f + 4) >> 2]),
                                  W(f),
                                  (i = o[t >> 2]),
                                  (f = o[o[(i + 4) >> 2] >> 2]))
                                )
                                  for (
                                    ;
                                    (o[(o[f >> 2] + 24) >> 2] = 0),
                                      xr(o[(f + 4) >> 2]),
                                      W(f),
                                      (i = o[t >> 2]),
                                      (f = o[o[(i + 4) >> 2] >> 2]);

                                  );
                                if ((0 | i) != (0 | (f = o[(i + 4) >> 2])))
                                  for (
                                    ;
                                    W(f),
                                      (0 | i) != (0 | (f = o[(f + 4) >> 2]));

                                  );
                                if (
                                  (W(i),
                                  Sr(o[(r + 68) >> 2]),
                                  (I = 1),
                                  (r = o[(r + 8) >> 2]),
                                  (0 | (i = o[(r + 40) >> 2])) !=
                                    (0 | (t = (r + 40) | 0)))
                                )
                                  for (;;) {
                                    if (
                                      ((r = o[(i + 8) >> 2]),
                                      (i = o[i >> 2]),
                                      (0 | r) ==
                                        o[(o[(r + 12) >> 2] + 12) >> 2] &&
                                        ((f = o[(r + 8) >> 2]),
                                        (o[(f + 28) >> 2] =
                                          o[(f + 28) >> 2] + o[(r + 28) >> 2]),
                                        (f = o[(f + 4) >> 2]),
                                        (o[(f + 28) >> 2] =
                                          o[(f + 28) >> 2] +
                                          o[(o[(r + 4) >> 2] + 28) >> 2]),
                                        !N(r)))
                                    ) {
                                      I = 0;
                                      break e;
                                    }
                                    if ((0 | i) == (0 | t)) break;
                                  }
                              }
                              return (U = (e + 48) | 0), 0 | I;
                            }
                            Br((r + 1740) | 0, 1), g();
                          },
                          function (r, e, f) {
                            (e |= 0), (f |= 0);
                            var i = 0,
                              a = 0,
                              n = 0,
                              t = 0;
                            n = 1;
                            r: if (
                              (0 | (i = o[(64 + (r |= 0)) >> 2])) !=
                              (0 | (a = (r - -64) | 0))
                            ) {
                              if (((t = (0 - e) | 0), !f))
                                for (;;)
                                  if (
                                    ((r = b[(o[(i + 20) >> 2] + 21) | 0]),
                                    (o[(i + 28) >> 2] =
                                      (0 | r) ==
                                      b[
                                        (o[(o[(i + 4) >> 2] + 20) >> 2] + 21) |
                                          0
                                      ]
                                        ? 0
                                        : r
                                        ? e
                                        : t),
                                    (0 | a) == (0 | (i = o[i >> 2])))
                                  )
                                    break r;
                              for (;;) {
                                if (
                                  ((r = o[i >> 2]),
                                  (0 | (f = b[(o[(i + 20) >> 2] + 21) | 0])) ==
                                    b[
                                      (o[(o[(i + 4) >> 2] + 20) >> 2] + 21) | 0
                                    ])
                                ) {
                                  if (!N(i)) {
                                    n = 0;
                                    break r;
                                  }
                                } else o[(i + 28) >> 2] = f ? e : t;
                                if ((0 | a) == (0 | (i = r))) break;
                              }
                            }
                            return 0 | n;
                          },
                          function (r) {
                            r |= 0;
                            var e,
                              f = 0,
                              i = 0,
                              a = 0,
                              n = p(0),
                              t = p(0),
                              k = 0,
                              u = 0,
                              c = 0;
                            if (
                              (0 | (f = o[(r + 40) >> 2])) !=
                              (0 | (e = (r + 40) | 0))
                            )
                              for (;;) {
                                if (((r = o[f >> 2]), b[(f + 21) | 0])) {
                                  for (
                                    f = (f + 8) | 0;
                                    (f = o[f >> 2]),
                                      (i = o[(o[(f + 4) >> 2] + 16) >> 2]),
                                      (n = v[(i + 28) >> 2]),
                                      (a = o[(f + 16) >> 2]),
                                      (t = v[(a + 28) >> 2]),
                                      !(
                                        !(
                                          v[(i + 32) >> 2] <= v[(a + 32) >> 2]
                                        ) |
                                        (n != t)
                                      ) || n < t;

                                  )
                                    f = (o[(f + 8) >> 2] + 4) | 0;
                                  for (
                                    ;
                                    !(
                                      !(v[(a + 32) >> 2] <= v[(i + 32) >> 2]) |
                                      (n != t)
                                    ) || n > t;

                                  )
                                    (f = o[(f + 12) >> 2]),
                                      (a = o[(f + 16) >> 2]),
                                      (t = v[(a + 28) >> 2]),
                                      (i = o[(o[(f + 4) >> 2] + 16) >> 2]),
                                      (n = v[(i + 28) >> 2]);
                                  r: {
                                    e: if (
                                      (0 |
                                        (a = o[(o[(f + 8) >> 2] + 4) >> 2])) !=
                                      o[(f + 12) >> 2]
                                    )
                                      for (;;) {
                                        if (
                                          ((k = o[(a + 16) >> 2]),
                                          (t = v[(k + 28) >> 2]),
                                          !(
                                            v[(i + 32) >> 2] <= v[(k + 32) >> 2]
                                          ) |
                                            (n != t) && !(t > n))
                                        ) {
                                          f: if (o[(a + 12) >> 2] != (0 | f))
                                            for (;;) {
                                              if (
                                                ((i =
                                                  o[
                                                    (o[(f + 8) >> 2] + 4) >> 2
                                                  ]),
                                                (k = o[(i + 16) >> 2]),
                                                (n = v[(k + 28) >> 2]),
                                                (u =
                                                  o[
                                                    (o[(i + 4) >> 2] + 16) >> 2
                                                  ]),
                                                !(
                                                  (n < (t = v[(u + 28) >> 2])) |
                                                  (v[(k + 32) >> 2] <=
                                                  v[(u + 32) >> 2]
                                                    ? n == t
                                                    : 0)
                                                ))
                                              ) {
                                                if (
                                                  !(
                                                    br(
                                                      o[
                                                        (o[(f + 4) >> 2] +
                                                          16) >>
                                                          2
                                                      ],
                                                      o[(f + 16) >> 2],
                                                      k,
                                                    ) >= p(0)
                                                  )
                                                )
                                                  break f;
                                                i =
                                                  o[(o[(f + 8) >> 2] + 4) >> 2];
                                              }
                                              if (((f = V(f, i)), (i = 0), !f))
                                                break r;
                                              if (
                                                (0 | (f = o[(f + 4) >> 2])) ==
                                                o[(a + 12) >> 2]
                                              )
                                                break;
                                            }
                                          f = o[(f + 12) >> 2];
                                        } else {
                                          f: if (
                                            (0 | (i = o[(a + 12) >> 2])) !=
                                            (0 | f)
                                          )
                                            for (k = (a + 12) | 0; ; ) {
                                              if (
                                                ((u =
                                                  o[
                                                    (o[(i + 4) >> 2] + 16) >> 2
                                                  ]),
                                                (n = v[(u + 28) >> 2]),
                                                (c = o[(i + 16) >> 2]),
                                                !(
                                                  (n < (t = v[(c + 28) >> 2])) |
                                                  (v[(u + 32) >> 2] <=
                                                  v[(c + 32) >> 2]
                                                    ? n == t
                                                    : 0)
                                                ))
                                              ) {
                                                if (
                                                  !(
                                                    br(
                                                      o[(a + 16) >> 2],
                                                      o[
                                                        (o[(a + 4) >> 2] +
                                                          16) >>
                                                          2
                                                      ],
                                                      u,
                                                    ) <= p(0)
                                                  )
                                                )
                                                  break f;
                                                i = o[k >> 2];
                                              }
                                              if (((a = V(i, a)), (i = 0), !a))
                                                break r;
                                              if (
                                                ((k =
                                                  ((a = o[(a + 4) >> 2]) + 12) |
                                                  0),
                                                (0 | (i = o[(a + 12) >> 2])) ==
                                                  (0 | f))
                                              )
                                                break;
                                            }
                                          a = o[(o[(a + 8) >> 2] + 4) >> 2];
                                        }
                                        if (o[(f + 12) >> 2] == (0 | a))
                                          break e;
                                        (i = o[(o[(f + 4) >> 2] + 16) >> 2]),
                                          (n = v[(i + 28) >> 2]);
                                      }
                                    if (
                                      ((i = o[(a + 12) >> 2]),
                                      o[(i + 12) >> 2] != (0 | f))
                                    )
                                      for (;;) {
                                        if (((a = V(i, a)), (i = 0), !a))
                                          break r;
                                        if (
                                          ((a = o[(a + 4) >> 2]),
                                          (i = o[(a + 12) >> 2]),
                                          o[(i + 12) >> 2] == (0 | f))
                                        )
                                          break;
                                      }
                                    i = 1;
                                  }
                                  if (!i) return 0;
                                }
                                if ((0 | e) == (0 | (f = r))) break;
                              }
                            return 1;
                          },
                          function (r, e) {
                            r |= 0;
                            var f,
                              i = 0,
                              a = 0;
                            if (
                              (0 | (i = o[(40 + (e |= 0)) >> 2])) !=
                              (0 | (f = (e + 40) | 0))
                            )
                              for (;;) {
                                if (b[(i + 21) | 0]) {
                                  for (
                                    3 == (0 | (e = o[(r + 1716) >> 2]))
                                      ? Fr[o[(r + 88) >> 2]](2)
                                      : Fr[0 | e](2, o[(r + 1896) >> 2]),
                                      e = o[(i + 8) >> 2];
                                    5 == (0 | (a = o[(r + 1724) >> 2]))
                                      ? Fr[o[(r + 96) >> 2]](
                                          o[(o[(e + 16) >> 2] + 12) >> 2],
                                        )
                                      : Fr[0 | a](
                                          o[(o[(e + 16) >> 2] + 12) >> 2],
                                          o[(r + 1896) >> 2],
                                        ),
                                      (0 | (e = o[(e + 12) >> 2])) !=
                                        o[(i + 8) >> 2];

                                  );
                                  6 == (0 | (e = o[(r + 1728) >> 2]))
                                    ? Fr[o[(r + 100) >> 2]]()
                                    : Fr[0 | e](o[(r + 1896) >> 2]);
                                }
                                if ((0 | f) == (0 | (i = o[i >> 2]))) break;
                              }
                          },
                          function (r, e) {
                            e |= 0;
                            var f,
                              i,
                              n = 0,
                              t = 0,
                              k = 0,
                              u = 0,
                              c = 0,
                              s = 0,
                              A = 0,
                              l = 0,
                              v = 0,
                              d = 0,
                              h = 0,
                              p = 0,
                              w = 0,
                              m = 0,
                              y = 0;
                            if (
                              ((U = f = (U - 16) | 0),
                              (o[(84 + (r |= 0)) >> 2] = 0),
                              (0 | (A = o[(e + 40) >> 2])) !=
                                (0 | (i = (e + 40) | 0)))
                            )
                              for (
                                e = A;
                                (a[(e + 20) | 0] = 0),
                                  (0 | i) != (0 | (e = o[e >> 2]));

                              );
                            if ((0 | A) != (0 | i)) {
                              for (;;) {
                                if (!(b[(A + 20) | 0] | !b[(A + 21) | 0])) {
                                  if (((c = o[(A + 8) >> 2]), b[(r + 80) | 0]))
                                    (e = 1), (n = 1);
                                  else {
                                    (k = 0),
                                      (t = 0),
                                      (e = 0),
                                      (u = o[((n = c) + 20) >> 2]);
                                    r: if (b[(u + 21) | 0])
                                      for (;;) {
                                        if (b[((e = u) + 20) | 0]) {
                                          e = t;
                                          break r;
                                        }
                                        if (
                                          ((a[(e + 20) | 0] = 1),
                                          (o[(e + 16) >> 2] = t),
                                          (k = (k + 1) | 0),
                                          (t = e),
                                          (n = o[(n + 8) >> 2]),
                                          (u = o[(n + 20) >> 2]),
                                          !b[(u + 21) | 0])
                                        )
                                          break;
                                      }
                                    (t = o[(c + 4) >> 2]),
                                      (u = o[(t + 20) >> 2]);
                                    r: {
                                      e: if (
                                        !b[(u + 21) | 0] | b[(u + 20) | 0]
                                      ) {
                                        if (((w = c), !e)) break r;
                                      } else
                                        for (n = e; ; ) {
                                          if (
                                            ((a[((e = u) + 20) | 0] = 1),
                                            (o[(e + 16) >> 2] = n),
                                            (k = (k + 1) | 0),
                                            (w = o[(t + 12) >> 2]),
                                            (t = o[(w + 4) >> 2]),
                                            (u = o[(t + 20) >> 2]),
                                            !b[(u + 21) | 0])
                                          )
                                            break e;
                                          if (((n = e), b[(u + 20) | 0])) break;
                                        }
                                      for (
                                        ;
                                        (a[(e + 20) | 0] = 0),
                                          (e = o[(e + 16) >> 2]);

                                      );
                                    }
                                    (m = (0 | k) > 1),
                                      (u = 0),
                                      (n = 0),
                                      (e = 0),
                                      (d = o[(c + 12) >> 2]),
                                      (t = o[((s = d) + 20) >> 2]);
                                    r: if (b[(t + 21) | 0])
                                      for (;;) {
                                        if (b[((e = t) + 20) | 0]) {
                                          e = n;
                                          break r;
                                        }
                                        if (
                                          ((a[(e + 20) | 0] = 1),
                                          (o[(e + 16) >> 2] = n),
                                          (u = (u + 1) | 0),
                                          (n = e),
                                          (s = o[(s + 8) >> 2]),
                                          (t = o[(s + 20) >> 2]),
                                          !b[(t + 21) | 0])
                                        )
                                          break;
                                      }
                                    (p = m ? k : 1),
                                      (t = o[(d + 4) >> 2]),
                                      (k = o[(t + 20) >> 2]);
                                    r: {
                                      e: if (
                                        !b[(k + 21) | 0] | b[(k + 20) | 0]
                                      ) {
                                        if (!e) break r;
                                      } else
                                        for (n = e; ; ) {
                                          if (
                                            ((a[((e = k) + 20) | 0] = 1),
                                            (o[(e + 16) >> 2] = n),
                                            (u = (u + 1) | 0),
                                            (d = o[(t + 12) >> 2]),
                                            (t = o[(d + 4) >> 2]),
                                            (k = o[(t + 20) >> 2]),
                                            !b[(k + 21) | 0])
                                          )
                                            break e;
                                          if (((n = e), b[(k + 20) | 0])) break;
                                        }
                                      for (
                                        ;
                                        (a[(e + 20) | 0] = 0),
                                          (e = o[(e + 16) >> 2]);

                                      );
                                    }
                                    (y = (0 | u) > (0 | p)),
                                      (k = 0),
                                      (n = 0),
                                      (e = 0),
                                      (h = o[(o[(c + 8) >> 2] + 4) >> 2]),
                                      (t = o[((s = h) + 20) >> 2]);
                                    r: if (b[(t + 21) | 0])
                                      for (;;) {
                                        if (b[((e = t) + 20) | 0]) {
                                          e = n;
                                          break r;
                                        }
                                        if (
                                          ((a[(e + 20) | 0] = 1),
                                          (o[(e + 16) >> 2] = n),
                                          (k = (k + 1) | 0),
                                          (n = e),
                                          (s = o[(s + 8) >> 2]),
                                          (t = o[(s + 20) >> 2]),
                                          !b[(t + 21) | 0])
                                        )
                                          break;
                                      }
                                    (l = y ? u : p),
                                      (t = o[(h + 4) >> 2]),
                                      (u = o[(t + 20) >> 2]);
                                    r: {
                                      e: if (
                                        !b[(u + 21) | 0] | b[(u + 20) | 0]
                                      ) {
                                        if (!e) break r;
                                      } else
                                        for (n = e; ; ) {
                                          if (
                                            ((a[((e = u) + 20) | 0] = 1),
                                            (o[(e + 16) >> 2] = n),
                                            (k = (k + 1) | 0),
                                            (h = o[(t + 12) >> 2]),
                                            (t = o[(h + 4) >> 2]),
                                            (u = o[(t + 20) >> 2]),
                                            !b[(u + 21) | 0])
                                          )
                                            break e;
                                          if (((n = e), b[(u + 20) | 0])) break;
                                        }
                                      for (
                                        ;
                                        (a[(e + 20) | 0] = 0),
                                          (e = o[(e + 16) >> 2]);

                                      );
                                    }
                                    fr(f, c),
                                      (s = o[(f + 8) >> 2]),
                                      (p = o[(f + 4) >> 2]),
                                      (v = o[f >> 2]),
                                      fr(f, o[(c + 12) >> 2]),
                                      (u = o[(f + 8) >> 2]),
                                      (t = o[(f + 4) >> 2]),
                                      (n = o[f >> 2]),
                                      fr(f, o[(o[(c + 8) >> 2] + 4) >> 2]),
                                      (e = k),
                                      (0 |
                                        (e = (v =
                                          (0 |
                                            (e = (l =
                                              (0 |
                                                (e = (k = (0 | k) > (0 | l))
                                                  ? e
                                                  : l)) <
                                              (0 | v))
                                              ? v
                                              : e)) <
                                          (0 | n))
                                          ? n
                                          : e)) >=
                                      (0 | (n = o[f >> 2]))
                                        ? ((c = v
                                            ? t
                                            : l
                                            ? p
                                            : k
                                            ? h
                                            : y
                                            ? d
                                            : m
                                            ? w
                                            : c),
                                          (n = v
                                            ? u
                                            : l
                                            ? s
                                            : k || m | y
                                            ? 2
                                            : 1))
                                        : ((c = o[(f + 4) >> 2]),
                                          (e = n),
                                          (n = o[(f + 8) >> 2]));
                                  }
                                  Fr[0 | n](r, c, e);
                                }
                                if ((0 | i) == (0 | (A = o[A >> 2]))) break;
                              }
                              if ((k = o[(r + 84) >> 2])) {
                                for (
                                  3 == (0 | (e = o[(r + 1716) >> 2]))
                                    ? Fr[o[(r + 88) >> 2]](4)
                                    : Fr[0 | e](4, o[(r + 1896) >> 2]),
                                    u = -1;
                                  ;

                                ) {
                                  for (
                                    e = o[(k + 8) >> 2];
                                    b[(r + 80) | 0] &&
                                      (0 |
                                        (n = !(c =
                                          b[
                                            (o[(o[(e + 4) >> 2] + 20) >> 2] +
                                              21) |
                                              0
                                          ]))) !=
                                        (0 | u) &&
                                      (4 == (0 | (t = o[(r + 1720) >> 2]))
                                        ? Fr[o[(r + 92) >> 2]](!c)
                                        : Fr[0 | t](!c, o[(r + 1896) >> 2]),
                                      (u = n)),
                                      5 == (0 | (n = o[(r + 1724) >> 2]))
                                        ? Fr[o[(r + 96) >> 2]](
                                            o[(o[(e + 16) >> 2] + 12) >> 2],
                                          )
                                        : Fr[0 | n](
                                            o[(o[(e + 16) >> 2] + 12) >> 2],
                                            o[(r + 1896) >> 2],
                                          ),
                                      (0 | (e = o[(e + 12) >> 2])) !=
                                        o[(k + 8) >> 2];

                                  );
                                  if (!(k = o[(k + 16) >> 2])) break;
                                }
                                6 == (0 | (e = o[(r + 1728) >> 2]))
                                  ? Fr[o[(r + 100) >> 2]]()
                                  : Fr[0 | e](o[(r + 1896) >> 2]),
                                  (o[(r + 84) >> 2] = 0);
                              }
                            }
                            U = (f + 16) | 0;
                          },
                          X,
                          hr,
                          function (r, e) {
                            r |= 0;
                            var f,
                              i = 0;
                            (0 | (f = o[(4 + (e |= 0)) >> 2])) <= 99998 &&
                              ((i =
                                (o[e >> 2] + (h(o[(e + 8) >> 2], f) << 2)) | 0),
                              (v[i >> 2] = v[r >> 2]),
                              (v[(i + 4) >> 2] = v[(r + 4) >> 2]),
                              (o[(e + 4) >> 2] = f + 1));
                          },
                          Ur,
                          jr,
                          function (r, e, f, i) {
                            (r |= 0), (e |= 0), (f |= 0), (i |= 0), (f = 0);
                            r: {
                              if ((e = o[520])) {
                                if (!((f = o[e >> 2]) >>> 0 < 100001)) {
                                  e = F(12);
                                  break r;
                                }
                              } else
                                (e = F(1200008)),
                                  (o[(e + 4) >> 2] = 12),
                                  (o[e >> 2] = 0),
                                  (o[520] = e);
                              (o[e >> 2] = f + 1),
                                (e = (8 + ((h(f, 12) + e) | 0)) | 0);
                            }
                            (v[e >> 2] = v[r >> 2]),
                              (v[(e + 4) >> 2] = v[(r + 4) >> 2]),
                              (v[(e + 8) >> 2] = v[(r + 8) >> 2]),
                              (o[i >> 2] = e);
                          },
                          function (r) {
                            var e;
                            (r |= 0),
                              (U = e = (U - 16) | 0),
                              (o[e >> 2] = r),
                              (U = r = (U - 16) | 0),
                              (o[(r + 12) >> 2] = e),
                              sr(o[288], 1078, e, 0),
                              (U = (r + 16) | 0),
                              (U = (e + 16) | 0);
                          },
                          Ur,
                          function (r) {
                            return 0;
                          },
                          function (r, e, f) {
                            (e |= 0), (f |= 0);
                            var i,
                              a = 0,
                              n = 0,
                              t = 0,
                              b = 0,
                              k = 0,
                              u = 0;
                            (U = i = (U - 32) | 0),
                              (n = o[(28 + (r |= 0)) >> 2]),
                              (o[(i + 16) >> 2] = n),
                              (a = o[(r + 20) >> 2]),
                              (o[(i + 28) >> 2] = f),
                              (o[(i + 24) >> 2] = e),
                              (e = (a - n) | 0),
                              (o[(i + 20) >> 2] = e),
                              (n = (e + f) | 0),
                              (u = 2),
                              (e = (i + 16) | 0);
                            r: {
                              e: {
                                (a =
                                  0 |
                                  _(
                                    o[(r + 60) >> 2],
                                    (i + 16) | 0,
                                    2,
                                    (i + 12) | 0,
                                  ))
                                  ? ((o[613] = a), (a = -1))
                                  : (a = 0);
                                f: {
                                  if (!a)
                                    for (;;) {
                                      if (
                                        (0 | (a = o[(i + 12) >> 2])) ==
                                        (0 | n)
                                      )
                                        break f;
                                      if ((0 | a) <= -1) break e;
                                      if (
                                        ((t =
                                          (a -
                                            ((b =
                                              (t = o[(e + 4) >> 2]) >>> 0 <
                                              a >>> 0)
                                              ? t
                                              : 0)) |
                                          0),
                                        (o[(k = ((b << 3) + e) | 0) >> 2] =
                                          t + o[k >> 2]),
                                        (o[(k = ((b ? 12 : 4) + e) | 0) >> 2] =
                                          o[k >> 2] - t),
                                        (n = (n - a) | 0),
                                        (e = b ? (e + 8) | 0 : e),
                                        (u = (u - b) | 0),
                                        (a =
                                          0 |
                                          _(
                                            o[(r + 60) >> 2],
                                            0 | e,
                                            0 | u,
                                            (i + 12) | 0,
                                          ))
                                          ? ((o[613] = a), (a = -1))
                                          : (a = 0),
                                        a)
                                      )
                                        break;
                                    }
                                  if (-1 != (0 | n)) break e;
                                }
                                (e = o[(r + 44) >> 2]),
                                  (o[(r + 28) >> 2] = e),
                                  (o[(r + 20) >> 2] = e),
                                  (o[(r + 16) >> 2] = e + o[(r + 48) >> 2]),
                                  (r = f);
                                break r;
                              }
                              (o[(r + 28) >> 2] = 0),
                                (o[(r + 16) >> 2] = 0),
                                (o[(r + 20) >> 2] = 0),
                                (o[r >> 2] = 32 | o[r >> 2]),
                                (r = 0),
                                2 != (0 | u) && (r = (f - o[(e + 4) >> 2]) | 0);
                            }
                            return (U = (i + 32) | 0), 0 | r;
                          },
                          function (r, e, f, i) {
                            return (j = 0), 0;
                          },
                          function (r, e, f, i, n, t) {
                            (r |= 0),
                              (e = +e),
                              (f |= 0),
                              (i |= 0),
                              (n |= 0),
                              (t |= 0);
                            var u,
                              c = 0,
                              A = 0,
                              l = 0,
                              v = 0,
                              d = 0,
                              p = 0,
                              m = 0,
                              y = 0,
                              g = 0,
                              C = 0,
                              E = 0,
                              R = 0,
                              I = 0,
                              M = 0,
                              _ = 0,
                              S = 0,
                              x = 0,
                              P = 0,
                              L = 0,
                              B = 0;
                            (U = u = (U - 560) | 0),
                              (o[(u + 44) >> 2] = 0),
                              s(+e),
                              (c = 0 | k(1)),
                              k(0),
                              (0 | c) < -1 || (0 | c) <= -1
                                ? ((M = 1),
                                  (_ = 1034),
                                  s(+(e = -e)),
                                  (c = 0 | k(1)),
                                  k(0))
                                : 2048 & n
                                ? ((M = 1), (_ = 1037))
                                : ((_ = (M = 1 & n) ? 1040 : 1035), (B = !M));
                            r: if (2146435072 != (2146435072 & c)) {
                              R = (u + 16) | 0;
                              e: {
                                f: {
                                  i: {
                                    if (
                                      ((e = yr(e, (u + 44) | 0)), 0 != (e += e))
                                    ) {
                                      if (
                                        ((c = o[(u + 44) >> 2]),
                                        (o[(u + 44) >> 2] = c - 1),
                                        97 != (0 | (S = 32 | t)))
                                      )
                                        break i;
                                      break e;
                                    }
                                    if (97 == (0 | (S = 32 | t))) break e;
                                    (v = o[(u + 44) >> 2]),
                                      (p = (0 | i) < 0 ? 6 : i);
                                    break f;
                                  }
                                  (v = (c - 29) | 0),
                                    (o[(u + 44) >> 2] = v),
                                    (e *= 268435456),
                                    (p = (0 | i) < 0 ? 6 : i);
                                }
                                for (
                                  A = C =
                                    (0 | v) < 0 ? (u + 48) | 0 : (u + 336) | 0;
                                  (c =
                                    (e < 4294967296) & (e >= 0)
                                      ? ~~e >>> 0
                                      : 0),
                                    (o[(i = A) >> 2] = c),
                                    (A = (A + 4) | 0),
                                    0 != (e = 1e9 * (e - +(c >>> 0)));

                                );
                                if ((0 | v) < 1) (i = v), (c = A), (l = C);
                                else
                                  for (l = C, i = v; ; ) {
                                    if (
                                      ((E = (0 | i) < 29 ? i : 29),
                                      !(l >>> 0 > (c = (A - 4) | 0) >>> 0))
                                    ) {
                                      for (
                                        i = E, y = 0;
                                        (g = c),
                                          (m = 0),
                                          (P = y),
                                          (y = o[c >> 2]),
                                          (d = 31 & i),
                                          (63 & i) >>> 0 >= 32
                                            ? ((L = y << d), (d = 0))
                                            : ((L =
                                                ((1 << d) - 1) &
                                                (y >>> (32 - d))),
                                              (d = y << d)),
                                          (m = (m + L) | 0),
                                          (m =
                                            d >>> 0 > (y = (P + d) | 0) >>> 0
                                              ? (m + 1) | 0
                                              : m),
                                          (P = g),
                                          (g = Er(
                                            (y = ar((d = y), m, 1e9)),
                                            j,
                                            1e9,
                                            0,
                                          )),
                                          (o[P >> 2] = d - g),
                                          l >>> 0 <= (c = (c - 4) | 0) >>> 0;

                                      );
                                      (i = y) &&
                                        (o[(l = (l - 4) | 0) >> 2] = i);
                                    }
                                    for (
                                      ;
                                      l >>> 0 < (c = A) >>> 0 &&
                                      !o[(A = (c - 4) | 0) >> 2];

                                    );
                                    if (
                                      ((i = (o[(u + 44) >> 2] - E) | 0),
                                      (o[(u + 44) >> 2] = i),
                                      (A = c),
                                      !((0 | i) > 0))
                                    )
                                      break;
                                  }
                                if (
                                  ((A = (((p + 25) | 0) / 9) | 0),
                                  (0 | i) <= -1)
                                )
                                  for (
                                    E = (A + 1) | 0, x = 102 == (0 | S);
                                    ;

                                  ) {
                                    y = (0 | i) < -9 ? 9 : (0 - i) | 0;
                                    f: if (c >>> 0 > l >>> 0) {
                                      for (
                                        g = (1e9 >>> y) | 0,
                                          d = (-1 << y) ^ -1,
                                          i = 0,
                                          A = l;
                                        (P = i),
                                          (i = o[A >> 2]),
                                          (o[A >> 2] = P + ((i >>> y) | 0)),
                                          (i = h(g, i & d)),
                                          (A = (A + 4) | 0) >>> 0 < c >>> 0;

                                      );
                                      if (
                                        ((l = o[l >> 2] ? l : (l + 4) | 0), !i)
                                      )
                                        break f;
                                      (o[c >> 2] = i), (c = (c + 4) | 0);
                                    } else l = o[l >> 2] ? l : (l + 4) | 0;
                                    if (
                                      ((i = (o[(u + 44) >> 2] + y) | 0),
                                      (o[(u + 44) >> 2] = i),
                                      (c =
                                        (0 | E) < (c - (A = x ? C : l)) >> 2
                                          ? (A + (E << 2)) | 0
                                          : c),
                                      !((0 | i) < 0))
                                    )
                                      break;
                                  }
                                if (
                                  ((A = 0),
                                  !(
                                    c >>> 0 <= l >>> 0 ||
                                    ((A = h((C - l) >> 2, 9)),
                                    (i = 10),
                                    (d = o[l >> 2]) >>> 0 < 10)
                                  ))
                                )
                                  for (
                                    ;
                                    (A = (A + 1) | 0),
                                      d >>> 0 >= (i = h(i, 10)) >>> 0;

                                  );
                                if (
                                  (0 |
                                    (i =
                                      (((p - (102 == (0 | S) ? 0 : A)) | 0) -
                                        ((103 == (0 | S)) & (0 != (0 | p)))) |
                                      0)) <
                                  ((h((c - C) >> 2, 9) - 9) | 0)
                                ) {
                                  if (
                                    ((m =
                                      (((((d =
                                        ((0 | (g = (i + 9216) | 0)) / 9) | 0) <<
                                        2) +
                                        ((0 | v) < 0
                                          ? (u + 48) | 4
                                          : (u + 340) | 0)) |
                                        0) -
                                        4096) |
                                      0),
                                    (i = 10),
                                    (0 | (g = (g - h(d, 9)) | 0)) <= 7)
                                  )
                                    for (
                                      ;
                                      (i = h(i, 10)),
                                        8 != (0 | (g = (g + 1) | 0));

                                    );
                                  if (
                                    ((E =
                                      ((g = o[m >> 2]) -
                                        h(
                                          i,
                                          (d = ((g >>> 0) / (i >>> 0)) | 0),
                                        )) |
                                      0),
                                    ((0 | (v = (m + 4) | 0)) != (0 | c) || E) &&
                                      ((e = (0 | c) == (0 | v) ? 1 : 1.5),
                                      (I =
                                        (v = (i >>> 1) | 0) >>> 0 > E >>> 0
                                          ? 0.5
                                          : (0 | v) == (0 | E)
                                          ? e
                                          : 1.5),
                                      (e =
                                        1 & d
                                          ? 9007199254740994
                                          : 9007199254740992),
                                      (45 != b[0 | _]) | B ||
                                        ((I = -I), (e = -e)),
                                      (v = (g - E) | 0),
                                      (o[m >> 2] = v),
                                      e + I != e))
                                  ) {
                                    if (
                                      ((i = (i + v) | 0),
                                      (o[m >> 2] = i),
                                      i >>> 0 >= 1e9)
                                    )
                                      for (
                                        ;
                                        (o[m >> 2] = 0),
                                          (m = (m - 4) | 0) >>> 0 < l >>> 0 &&
                                            (o[(l = (l - 4) | 0) >> 2] = 0),
                                          (i = (o[m >> 2] + 1) | 0),
                                          (o[m >> 2] = i),
                                          i >>> 0 > 999999999;

                                      );
                                    if (
                                      ((A = h((C - l) >> 2, 9)),
                                      (i = 10),
                                      !((v = o[l >> 2]) >>> 0 < 10))
                                    )
                                      for (
                                        ;
                                        (A = (A + 1) | 0),
                                          v >>> 0 >= (i = h(i, 10)) >>> 0;

                                      );
                                  }
                                  c = (i = (m + 4) | 0) >>> 0 < c >>> 0 ? i : c;
                                }
                                for (
                                  ;
                                  (d = c),
                                    !(v = c >>> 0 <= l >>> 0) &&
                                      !o[(c = (d - 4) | 0) >> 2];

                                );
                                if (103 == (0 | S)) {
                                  if (
                                    ((p =
                                      (((i =
                                        ((0 | (c = p || 1)) > (0 | A)) &
                                        ((0 | A) > -5))
                                        ? -1 ^ A
                                        : -1) +
                                        c) |
                                      0),
                                    (t = ((i ? -1 : -2) + t) | 0),
                                    !(y = 8 & n))
                                  ) {
                                    if (
                                      ((c = -9),
                                      !v &&
                                        (v = o[(d - 4) >> 2]) &&
                                        ((g = 10),
                                        (c = 0),
                                        !((v >>> 0) % 10 | 0)))
                                    ) {
                                      for (
                                        ;
                                        (i = c),
                                          (c = (c + 1) | 0),
                                          !(
                                            (v >>> 0) % ((g = h(g, 10)) >>> 0) |
                                            0
                                          );

                                      );
                                      c = -1 ^ i;
                                    }
                                    (i = h((d - C) >> 2, 9)),
                                      70 != (-33 & t)
                                        ? ((y = 0),
                                          (p =
                                            (0 |
                                              (i =
                                                (0 |
                                                  (i =
                                                    (((((i + A) | 0) + c) | 0) -
                                                      9) |
                                                    0)) >
                                                0
                                                  ? i
                                                  : 0)) >
                                            (0 | p)
                                              ? p
                                              : i))
                                        : ((y = 0),
                                          (p =
                                            (0 |
                                              (i =
                                                (0 |
                                                  (i =
                                                    (((i + c) | 0) - 9) | 0)) >
                                                0
                                                  ? i
                                                  : 0)) >
                                            (0 | p)
                                              ? p
                                              : i));
                                  }
                                } else y = 8 & n;
                                if (
                                  ((E = 0 != (p | y)),
                                  (i = r),
                                  (v = f),
                                  70 == (0 | (g = -33 & t)))
                                )
                                  t = (0 | A) > 0 ? A : 0;
                                else {
                                  if (
                                    ((R -
                                      (c = wr(((c = A >> 31) + A) ^ c, 0, R))) |
                                      0) <=
                                    1
                                  )
                                    for (
                                      ;
                                      (a[0 | (c = (c - 1) | 0)] = 48),
                                        ((R - c) | 0) < 2;

                                    );
                                  (a[0 | (x = (c - 2) | 0)] = t),
                                    (a[(c - 1) | 0] = (0 | A) < 0 ? 45 : 43),
                                    (t = (R - x) | 0);
                                }
                                Rr(
                                  i,
                                  32,
                                  v,
                                  (m =
                                    (1 +
                                      ((t + ((E + ((p + M) | 0)) | 0)) | 0)) |
                                    0),
                                  n,
                                ),
                                  cr(r, _, M),
                                  Rr(r, 48, f, m, 65536 ^ n);
                                f: {
                                  i: {
                                    a: {
                                      if (70 == (0 | g)) {
                                        for (
                                          i = (u + 16) | 8,
                                            A = (u + 16) | 9,
                                            l = t = l >>> 0 > C >>> 0 ? C : l;
                                          ;

                                        ) {
                                          c = wr(o[l >> 2], 0, A);
                                          n: if ((0 | t) == (0 | l))
                                            (0 | c) == (0 | A) &&
                                              ((a[(u + 24) | 0] = 48), (c = i));
                                          else {
                                            if ((u + 16) >>> 0 >= c >>> 0)
                                              break n;
                                            for (
                                              ;
                                              (a[0 | (c = (c - 1) | 0)] = 48),
                                                (u + 16) >>> 0 < c >>> 0;

                                            );
                                          }
                                          if (
                                            (cr(r, c, (A - c) | 0),
                                            !(
                                              C >>> 0 >=
                                              (l = (l + 4) | 0) >>> 0
                                            ))
                                          )
                                            break;
                                        }
                                        if (((c = 0), !E)) break i;
                                        if (
                                          (cr(r, 1069, 1),
                                          ((0 | p) < 1) | (l >>> 0 >= d >>> 0))
                                        )
                                          break a;
                                        for (;;) {
                                          if (
                                            (c = wr(o[l >> 2], 0, A)) >>> 0 >
                                            (u + 16) >>> 0
                                          )
                                            for (
                                              ;
                                              (a[0 | (c = (c - 1) | 0)] = 48),
                                                (u + 16) >>> 0 < c >>> 0;

                                            );
                                          if (
                                            (cr(r, c, (0 | p) < 9 ? p : 9),
                                            (c = (p - 9) | 0),
                                            d >>> 0 <= (l = (l + 4) | 0) >>> 0)
                                          )
                                            break i;
                                          if (((i = (0 | p) > 9), (p = c), !i))
                                            break;
                                        }
                                        break i;
                                      }
                                      n: if (!((0 | p) < 0))
                                        for (
                                          t =
                                            l >>> 0 < d >>> 0 ? d : (l + 4) | 0,
                                            v = (u + 16) | 9,
                                            i = (u + 16) | 8,
                                            A = l;
                                          ;

                                        ) {
                                          (0 | v) ==
                                            (0 | (c = wr(o[A >> 2], 0, v))) &&
                                            ((a[(u + 24) | 0] = 48), (c = i));
                                          t: if ((0 | A) == (0 | l))
                                            cr(r, c, 1),
                                              (c = (c + 1) | 0),
                                              (!y && (0 | p) <= 0) ||
                                                cr(r, 1069, 1);
                                          else {
                                            if ((u + 16) >>> 0 >= c >>> 0)
                                              break t;
                                            for (
                                              ;
                                              (a[0 | (c = (c - 1) | 0)] = 48),
                                                (u + 16) >>> 0 < c >>> 0;

                                            );
                                          }
                                          if (
                                            (cr(
                                              r,
                                              (d = c),
                                              (0 | (c = (v - c) | 0)) < (0 | p)
                                                ? c
                                                : p,
                                            ),
                                            (p = (p - c) | 0),
                                            t >>> 0 <= (A = (A + 4) | 0) >>> 0)
                                          )
                                            break n;
                                          if (!((0 | p) > -1)) break;
                                        }
                                      Rr(r, 48, (p + 18) | 0, 18, 0),
                                        cr(r, x, (R - x) | 0);
                                      break f;
                                    }
                                    c = p;
                                  }
                                  Rr(r, 48, (c + 9) | 0, 9, 0);
                                }
                                break r;
                              }
                              if (
                                ((C = (v = 32 & t) ? (_ + 9) | 0 : _),
                                !(i >>> 0 > 11) && (c = (12 - i) | 0))
                              ) {
                                for (I = 8; (I *= 16), (c = (c - 1) | 0); );
                                e =
                                  45 != b[0 | C] ? e + I - I : -(I + (-e - I));
                              }
                              for (
                                (0 | R) ==
                                  (0 |
                                    (c = wr(
                                      (A = (c = o[(u + 44) >> 2]) >> 31) ^
                                        (c + A),
                                      0,
                                      R,
                                    ))) &&
                                  ((a[(u + 15) | 0] = 48), (c = (u + 15) | 0)),
                                  p = 2 | M,
                                  A = o[(u + 44) >> 2],
                                  a[0 | (d = (c - 2) | 0)] = t + 15,
                                  a[(c - 1) | 0] = (0 | A) < 0 ? 45 : 43,
                                  c = 8 & n,
                                  l = (u + 16) | 0;
                                (t = l),
                                  (y = v),
                                  (A = w(e) < 2147483648 ? ~~e : -2147483648),
                                  (a[0 | l] = y | b[(A + 1632) | 0]),
                                  (e = 16 * (e - +(0 | A))),
                                  !(c || ((0 | i) > 0) | (0 != e)) |
                                    (1 !=
                                      (((l = (t + 1) | 0) - ((u + 16) | 0)) |
                                        0)) ||
                                    ((a[(t + 1) | 0] = 46), (l = (t + 2) | 0)),
                                  0 != e;

                              );
                              Rr(
                                (t = r),
                                32,
                                (c = f),
                                (m =
                                  ((v =
                                    !i | (((((l - u) | 0) - 18) | 0) >= (0 | i))
                                      ? (((R - ((d + ((u + 16) | 0)) | 0)) |
                                          0) +
                                          l) |
                                        0
                                      : (2 + ((((i + R) | 0) - d) | 0)) | 0) +
                                    p) |
                                  0),
                                n,
                              ),
                                cr(r, C, p),
                                Rr(r, 48, f, m, 65536 ^ n),
                                cr(
                                  r,
                                  (u + 16) | 0,
                                  (i = (l - ((u + 16) | 0)) | 0),
                                ),
                                Rr(
                                  r,
                                  48,
                                  (v - (((t = i) + (i = (R - d) | 0)) | 0)) | 0,
                                  0,
                                  0,
                                ),
                                cr(r, d, i);
                            } else
                              Rr(r, 32, f, (m = (M + 3) | 0), -65537 & n),
                                cr(r, _, M),
                                (i = 32 & t),
                                cr(
                                  r,
                                  e != e ? (i ? 1053 : 1061) : i ? 1057 : 1065,
                                  3,
                                );
                            return (
                              Rr(r, 32, f, m, 8192 ^ n),
                              (U = (u + 560) | 0),
                              0 | ((0 | f) > (0 | m) ? f : m)
                            );
                          },
                        ]);
                        function Or() {
                          return (i.byteLength / 65536) | 0;
                        }
                        return {
                          n: jr,
                          o: F,
                          p: W,
                          q: Fr,
                          r: function (r, e, f, i, n) {
                            (r |= 0), (e |= 0), (f |= 0), (i |= 0), (n |= 0);
                            for (
                              var k = 0,
                                u = 0,
                                c = 0,
                                s = 0,
                                A = 0,
                                l = 0,
                                d = p(0),
                                w = p(0),
                                m = p(0),
                                y = 0,
                                _ = 0,
                                S = 0,
                                x = 0,
                                T = 0,
                                U = 0,
                                j = 0,
                                O = 0,
                                D = 0;
                              (u = o[(2032 + (k = c << 2)) >> 2]) &&
                                (o[u >> 2] = 0),
                                (u = o[(2032 + (4 | k)) >> 2]) &&
                                  (o[u >> 2] = 0),
                                (u = o[(2032 + (8 | k)) >> 2]) &&
                                  (o[u >> 2] = 0),
                                (k = o[(2032 + (12 | k)) >> 2]) &&
                                  (o[k >> 2] = 0),
                                100 != (0 | (c = (c + 4) | 0));

                            );
                            if (
                              ((c = o[608]) || ((c = F(12)), (o[608] = c)),
                              (o[(c + 4) >> 2] = 0),
                              (o[(c + 8) >> 2] = i),
                              (o[c >> 2] = n),
                              (c = o[609]) ||
                                ((n = F(1900))
                                  ? ((o[(n + 100) >> 2] = 12),
                                    (o[(n + 96) >> 2] = 13),
                                    (o[(n + 92) >> 2] = 14),
                                    (o[(n + 88) >> 2] = 15),
                                    (t[(n + 80) >> 1] = 0),
                                    (o[(n + 52) >> 2] = 0),
                                    (o[(n + 56) >> 2] = 100130),
                                    (o[(n + 16) >> 2] = 0),
                                    (o[(n + 20) >> 2] = 0),
                                    (o[n >> 2] = 0),
                                    (o[(n + 1896) >> 2] = 0),
                                    (o[(n + 1736) >> 2] = 8),
                                    (o[(n + 1732) >> 2] = 11),
                                    (o[(n + 1728) >> 2] = 6),
                                    (o[(n + 1724) >> 2] = 5),
                                    (o[(n + 1720) >> 2] = 4),
                                    (o[(n + 1716) >> 2] = 3),
                                    (o[(n + 104) >> 2] = 16),
                                    (o[(n + 76) >> 2] = 17),
                                    (o[(n + 12) >> 2] = 18),
                                    (o[(n + 24) >> 2] = 0))
                                  : (n = 0),
                                (o[609] = n),
                                ur(n, 100107, 34),
                                ur(o[609], 100100, 35),
                                ur(o[609], 100102, 36),
                                ur(o[609], 100105, 37),
                                ur(o[609], 100103, 38),
                                ur(o[609], 100104, 39),
                                (o[(o[609] + 56) >> 2] = 100130),
                                (n = o[609]),
                                (v[(n + 16) >> 2] = 0),
                                (v[(n + 24) >> 2] = 1),
                                (v[(n + 20) >> 2] = 0),
                                (c = o[609])),
                              (n = 0),
                              (k = o[608]),
                              o[c >> 2] && ir(c, 0),
                              (o[(c + 112) >> 2] = 0),
                              (o[c >> 2] = 1),
                              (a[(c + 108) | 0] = 0),
                              (o[(c + 1896) >> 2] = k),
                              (o[(c + 8) >> 2] = 0),
                              (0 | f) > 0)
                            )
                              for (;;) {
                                if (
                                  ((y = o[((_ << 2) + e) >> 2]),
                                  (k = o[609]),
                                  1 != o[k >> 2] && ir(k, 1),
                                  (o[k >> 2] = 2),
                                  (o[(k + 4) >> 2] = 0),
                                  o[(k + 112) >> 2] >= 1 &&
                                    (a[(k + 108) | 0] = 1),
                                  (c = 0),
                                  (0 | y) > 0)
                                )
                                  for (;;) {
                                    (A = S =
                                      ((h((n + c) | 0, i) << 2) + r) | 0),
                                      (u = o[609]),
                                      2 != o[u >> 2] && ir(u, 2);
                                    r: {
                                      e: {
                                        f: {
                                          if (b[(u + 108) | 0]) {
                                            if (
                                              ((k = lr()),
                                              (o[(u + 8) >> 2] = k),
                                              !k)
                                            )
                                              break f;
                                            if (
                                              (0 | (k = o[(u + 112) >> 2])) >=
                                              1
                                            )
                                              for (
                                                x =
                                                  (116 + ((u + (k << 4)) | 0)) |
                                                  0,
                                                  s = (u + 116) | 0,
                                                  k = o[(u + 4) >> 2];
                                                ;

                                              ) {
                                                D = o[(s + 12) >> 2];
                                                i: {
                                                  if (!k) {
                                                    if (
                                                      !(k = er(o[(u + 8) >> 2]))
                                                    )
                                                      break f;
                                                    if ($(k, o[(k + 4) >> 2]))
                                                      break i;
                                                    break f;
                                                  }
                                                  if (!J(k)) break f;
                                                  k = o[(k + 12) >> 2];
                                                }
                                                if (
                                                  ((l = o[(k + 16) >> 2]),
                                                  (o[(l + 12) >> 2] = D),
                                                  (v[(l + 16) >> 2] =
                                                    v[s >> 2]),
                                                  (d = v[(s + 4) >> 2]),
                                                  (o[(l + 24) >> 2] = 0),
                                                  (v[(l + 20) >> 2] = d),
                                                  (o[(k + 28) >> 2] = 1),
                                                  (o[
                                                    (o[(k + 4) >> 2] + 28) >> 2
                                                  ] = -1),
                                                  (o[(u + 4) >> 2] = k),
                                                  !(
                                                    x >>> 0 >
                                                    (s = (s + 16) | 0) >>> 0
                                                  ))
                                                )
                                                  break;
                                              }
                                            (a[(u + 108) | 0] = 0),
                                              (o[(u + 112) >> 2] = 0),
                                              (o[(u + 4) >> 2] = 0);
                                          }
                                          (s =
                                            (U = +(d =
                                              (T = +(d = v[(A + 4) >> 2])) <
                                              -1e37
                                                ? p(-9999999933815813e21)
                                                : d)) > 1e37),
                                            (l =
                                              (O = +(w =
                                                (j = +(w = v[A >> 2])) < -1e37
                                                  ? p(-9999999933815813e21)
                                                  : w)) > 1e37),
                                            ((k =
                                              +(m = v[(A + 8) >> 2]) < -1e37) |
                                              (A =
                                                +(m = k
                                                  ? p(-9999999933815813e21)
                                                  : m) > 1e37) |
                                              (T < -1e37) |
                                              (U > 1e37) ||
                                              O > 1e37 ||
                                              j < -1e37) &&
                                              (11 ==
                                              (0 | (k = o[(u + 1732) >> 2]))
                                                ? Fr[o[(u + 12) >> 2]](100155)
                                                : Fr[0 | k](
                                                    100155,
                                                    o[(u + 1896) >> 2],
                                                  )),
                                            (d = s
                                              ? p(9999999933815813e21)
                                              : d),
                                            (w = l
                                              ? p(9999999933815813e21)
                                              : w);
                                          i: {
                                            if (!o[(u + 8) >> 2]) {
                                              if (
                                                (0 | (s = o[(u + 112) >> 2])) <=
                                                99
                                              ) {
                                                (v[
                                                  (124 +
                                                    (k = (u + (s << 4)) | 0)) >>
                                                    2
                                                ] = A
                                                  ? p(9999999933815813e21)
                                                  : m),
                                                  (v[(k + 120) >> 2] = d),
                                                  (v[(k + 116) >> 2] = w),
                                                  (o[(k + 128) >> 2] = S),
                                                  (o[(u + 112) >> 2] = s + 1);
                                                break r;
                                              }
                                              if (
                                                ((k = lr()),
                                                (o[(u + 8) >> 2] = k),
                                                !k)
                                              )
                                                break i;
                                              if (
                                                (0 | (k = o[(u + 112) >> 2])) >=
                                                1
                                              )
                                                for (
                                                  l =
                                                    (116 +
                                                      ((u + (k << 4)) | 0)) |
                                                    0,
                                                    s = (u + 116) | 0,
                                                    k = o[(u + 4) >> 2];
                                                  ;

                                                ) {
                                                  x = o[(s + 12) >> 2];
                                                  a: {
                                                    if (!k) {
                                                      if (
                                                        !(k = er(
                                                          o[(u + 8) >> 2],
                                                        ))
                                                      )
                                                        break i;
                                                      if ($(k, o[(k + 4) >> 2]))
                                                        break a;
                                                      break i;
                                                    }
                                                    if (!J(k)) break i;
                                                    k = o[(k + 12) >> 2];
                                                  }
                                                  if (
                                                    ((A = o[(k + 16) >> 2]),
                                                    (o[(A + 12) >> 2] = x),
                                                    (v[(A + 16) >> 2] =
                                                      v[s >> 2]),
                                                    (m = v[(s + 4) >> 2]),
                                                    (o[(A + 24) >> 2] = 0),
                                                    (v[(A + 20) >> 2] = m),
                                                    (o[(k + 28) >> 2] = 1),
                                                    (o[
                                                      (o[(k + 4) >> 2] + 28) >>
                                                        2
                                                    ] = -1),
                                                    (o[(u + 4) >> 2] = k),
                                                    !(
                                                      l >>> 0 >
                                                      (s = (s + 16) | 0) >>> 0
                                                    ))
                                                  )
                                                    break;
                                                }
                                              (a[(u + 108) | 0] = 0),
                                                (o[(u + 112) >> 2] = 0);
                                            }
                                            a: {
                                              n: {
                                                if (!(k = o[(u + 4) >> 2])) {
                                                  if (
                                                    !(k = er(o[(u + 8) >> 2]))
                                                  )
                                                    break a;
                                                  if ($(k, o[(k + 4) >> 2]))
                                                    break n;
                                                  break a;
                                                }
                                                if (!J(k)) break a;
                                                k = o[(k + 12) >> 2];
                                              }
                                              (s = o[(k + 16) >> 2]),
                                                (v[(s + 16) >> 2] = w),
                                                (o[(s + 12) >> 2] = S),
                                                (o[(s + 24) >> 2] = 0),
                                                (v[(s + 20) >> 2] = d),
                                                (o[(k + 28) >> 2] = 1),
                                                (o[
                                                  (o[(k + 4) >> 2] + 28) >> 2
                                                ] = -1),
                                                (o[(u + 4) >> 2] = k);
                                              break r;
                                            }
                                            if (
                                              11 !=
                                              (0 | (k = o[(u + 1732) >> 2]))
                                            )
                                              break e;
                                            Fr[o[(u + 12) >> 2]](100902);
                                            break r;
                                          }
                                          if (
                                            11 !=
                                            (0 | (k = o[(u + 1732) >> 2]))
                                          )
                                            break e;
                                          Fr[o[(u + 12) >> 2]](100902);
                                          break r;
                                        }
                                        if (
                                          11 ==
                                          (0 | (k = o[(u + 1732) >> 2]))
                                        ) {
                                          Fr[o[(u + 12) >> 2]](100902);
                                          break r;
                                        }
                                      }
                                      Fr[0 | k](100902, o[(u + 1896) >> 2]);
                                    }
                                    if ((0 | y) == (0 | (c = (c + 1) | 0)))
                                      break;
                                  }
                                if (
                                  ((k = o[609]),
                                  2 != o[k >> 2] && ir(k, 2),
                                  (o[k >> 2] = 1),
                                  (n = (n + y) | 0),
                                  (0 | (_ = (_ + 1) | 0)) == (0 | f))
                                )
                                  break;
                              }
                            (f = o[609]),
                              (r = 0),
                              (e = F(40)),
                              (o[e >> 2] = 0),
                              (n = mr((s = (f + 1740) | 0), 1, e, 4)),
                              (u = 0 | E());
                            r: {
                              e: {
                                f: {
                                  i: {
                                    a: {
                                      n: for (;;) {
                                        t: {
                                          o: {
                                            b: {
                                              k: {
                                                u: {
                                                  c: {
                                                    s: {
                                                      if (r) {
                                                        if (
                                                          11 !=
                                                          (0 |
                                                            (r =
                                                              o[
                                                                (f + 1732) >> 2
                                                              ]))
                                                        ) {
                                                          if (
                                                            ((e =
                                                              o[
                                                                (f + 1896) >> 2
                                                              ]),
                                                            (o[611] = 0),
                                                            R(
                                                              0 | r,
                                                              100902,
                                                              0 | e,
                                                            ),
                                                            (r = o[611]),
                                                            (o[611] = 0),
                                                            (e = -1),
                                                            !r)
                                                          )
                                                            break c;
                                                          if (!(i = o[612]))
                                                            break c;
                                                          if (
                                                            (e = Ir(
                                                              o[r >> 2],
                                                              n,
                                                              u,
                                                            ))
                                                          )
                                                            break s;
                                                          break a;
                                                        }
                                                        if (
                                                          ((r =
                                                            o[(f + 12) >> 2]),
                                                          (o[611] = 0),
                                                          M(0 | r, 100902),
                                                          (r = o[611]),
                                                          (o[611] = 0),
                                                          (e = -1),
                                                          !r)
                                                        )
                                                          break k;
                                                        if (!(i = o[612]))
                                                          break k;
                                                        if (
                                                          (e = Ir(
                                                            o[r >> 2],
                                                            n,
                                                            u,
                                                          ))
                                                        )
                                                          break u;
                                                        break a;
                                                      }
                                                      if (1 == o[f >> 2])
                                                        break t;
                                                      if (
                                                        ((o[611] = 0),
                                                        R(19, 0 | f, 1),
                                                        (r = o[611]),
                                                        (o[611] = 0),
                                                        (e = -1),
                                                        !r)
                                                      )
                                                        break o;
                                                      if (!(i = o[612]))
                                                        break o;
                                                      if (
                                                        (e = Ir(
                                                          o[r >> 2],
                                                          n,
                                                          u,
                                                        ))
                                                      )
                                                        break b;
                                                      break a;
                                                    }
                                                    C(0 | i);
                                                  }
                                                  if (
                                                    ((r = 0 | E()),
                                                    1 == (0 | e))
                                                  )
                                                    continue;
                                                  break r;
                                                }
                                                C(0 | i);
                                              }
                                              if (((r = 0 | E()), 1 == (0 | e)))
                                                continue;
                                              break r;
                                            }
                                            C(0 | i);
                                          }
                                          if (((r = 0 | E()), 1 == (0 | e)))
                                            continue;
                                        }
                                        o[f >> 2] = 0;
                                        t: {
                                          o: {
                                            b: {
                                              if (!o[(f + 8) >> 2]) {
                                                if (
                                                  !(
                                                    b[(f + 80) | 0] |
                                                    (16 != o[(f + 104) >> 2])
                                                  )
                                                ) {
                                                  if (
                                                    ((o[611] = 0),
                                                    (k = 0 | I(20, 0 | f)),
                                                    (r = o[611]),
                                                    (o[611] = 0),
                                                    (e = -1),
                                                    r && (i = o[612]))
                                                  ) {
                                                    if (
                                                      !(e = Ir(o[r >> 2], n, u))
                                                    )
                                                      break a;
                                                    C(0 | i);
                                                  }
                                                  if (
                                                    ((r = 0 | E()),
                                                    1 == (0 | e))
                                                  )
                                                    continue;
                                                  if (k) {
                                                    o[(f + 1896) >> 2] = 0;
                                                    break r;
                                                  }
                                                }
                                                if (
                                                  ((o[611] = 0),
                                                  (i = 0 | B(21)),
                                                  (r = o[611]),
                                                  (o[611] = 0),
                                                  (e = -1),
                                                  r && (k = o[612]))
                                                ) {
                                                  if (
                                                    !(e = Ir(o[r >> 2], n, u))
                                                  )
                                                    break i;
                                                  C(0 | k);
                                                }
                                                if (
                                                  ((r = 0 | E()), 1 == (0 | e))
                                                )
                                                  continue;
                                                if (((o[(f + 8) >> 2] = i), !i))
                                                  break b;
                                                if (
                                                  (0 |
                                                    (r = o[(f + 112) >> 2])) >=
                                                  1
                                                )
                                                  for (
                                                    y =
                                                      (116 +
                                                        ((f + (r << 4)) | 0)) |
                                                      0,
                                                      i = (f + 116) | 0,
                                                      e = o[(f + 4) >> 2];
                                                    ;

                                                  ) {
                                                    A = o[(i + 12) >> 2];
                                                    k: {
                                                      u: {
                                                        c: {
                                                          s: {
                                                            A: {
                                                              l: {
                                                                if (!e) {
                                                                  if (
                                                                    ((r =
                                                                      o[
                                                                        (f +
                                                                          8) >>
                                                                          2
                                                                      ]),
                                                                    (o[611] = 0),
                                                                    (e =
                                                                      0 |
                                                                      I(
                                                                        22,
                                                                        0 | r,
                                                                      )),
                                                                    (r =
                                                                      o[611]),
                                                                    (o[611] = 0),
                                                                    (k = -1),
                                                                    !r)
                                                                  )
                                                                    break A;
                                                                  if (
                                                                    !(c =
                                                                      o[612])
                                                                  )
                                                                    break A;
                                                                  if (
                                                                    (k = Ir(
                                                                      o[r >> 2],
                                                                      n,
                                                                      u,
                                                                    ))
                                                                  )
                                                                    break l;
                                                                  break f;
                                                                }
                                                                if (
                                                                  ((o[611] = 0),
                                                                  (l =
                                                                    0 |
                                                                    I(
                                                                      23,
                                                                      0 | e,
                                                                    )),
                                                                  (r = o[611]),
                                                                  (o[611] = 0),
                                                                  (k = -1),
                                                                  !r)
                                                                )
                                                                  break c;
                                                                if (
                                                                  !(c = o[612])
                                                                )
                                                                  break c;
                                                                if (
                                                                  (k = Ir(
                                                                    o[r >> 2],
                                                                    n,
                                                                    u,
                                                                  ))
                                                                )
                                                                  break s;
                                                                break f;
                                                              }
                                                              C(0 | c);
                                                            }
                                                            if (
                                                              ((r = 0 | E()),
                                                              1 != (0 | k))
                                                            )
                                                              break u;
                                                            continue n;
                                                          }
                                                          C(0 | c);
                                                        }
                                                        if (
                                                          ((r = 0 | E()),
                                                          1 == (0 | k))
                                                        )
                                                          continue n;
                                                        if (!l) break b;
                                                        e = o[(e + 12) >> 2];
                                                        break k;
                                                      }
                                                      if (!e) break b;
                                                      if (
                                                        ((r = o[(e + 4) >> 2]),
                                                        (o[611] = 0),
                                                        (l =
                                                          0 |
                                                          L(24, 0 | e, 0 | r)),
                                                        (r = o[611]),
                                                        (o[611] = 0),
                                                        (k = -1),
                                                        r && (c = o[612]))
                                                      ) {
                                                        if (
                                                          !(k = Ir(
                                                            o[r >> 2],
                                                            n,
                                                            u,
                                                          ))
                                                        )
                                                          break f;
                                                        C(0 | c);
                                                      }
                                                      if (
                                                        ((r = 0 | E()),
                                                        1 == (0 | k))
                                                      )
                                                        continue n;
                                                      if (!l) break b;
                                                    }
                                                    if (
                                                      ((r = o[(e + 16) >> 2]),
                                                      (o[(r + 12) >> 2] = A),
                                                      (v[(r + 16) >> 2] =
                                                        v[i >> 2]),
                                                      (d = v[(i + 4) >> 2]),
                                                      (o[(r + 24) >> 2] = 0),
                                                      (v[(r + 20) >> 2] = d),
                                                      (o[(e + 28) >> 2] = 1),
                                                      (o[
                                                        (o[(e + 4) >> 2] +
                                                          28) >>
                                                          2
                                                      ] = -1),
                                                      (o[(f + 4) >> 2] = e),
                                                      !(
                                                        y >>> 0 >
                                                        (i = (i + 16) | 0) >>> 0
                                                      ))
                                                    )
                                                      break;
                                                  }
                                                (a[(f + 108) | 0] = 0),
                                                  (o[(f + 112) >> 2] = 0);
                                              }
                                              if (
                                                ((o[611] = 0),
                                                Q(f),
                                                (r = o[611]),
                                                (o[611] = 0),
                                                (e = -1),
                                                !r)
                                              )
                                                break t;
                                              if (!(i = o[612])) break t;
                                              if ((e = Ir(o[r >> 2], n, u)))
                                                break o;
                                              break a;
                                            }
                                            if (
                                              ((o[611] = 0),
                                              R(26, 0 | s, 1),
                                              (e = o[611]),
                                              (o[611] = 0),
                                              e && (r = o[612]))
                                            ) {
                                              if (!Ir(o[e >> 2], n, u)) break e;
                                              C(0 | r);
                                            }
                                            r = 0 | E();
                                            continue;
                                          }
                                          C(0 | i);
                                        }
                                        if (((r = 0 | E()), 1 != (0 | e))) {
                                          if (
                                            ((o[611] = 0),
                                            (k = 0 | I(27, 0 | f)),
                                            (r = o[611]),
                                            (o[611] = 0),
                                            (e = -1),
                                            r && (i = o[612]))
                                          ) {
                                            if (!(e = Ir(o[r >> 2], n, u)))
                                              break a;
                                            C(0 | i);
                                          }
                                          if (((r = 0 | E()), 1 != (0 | e))) {
                                            t: {
                                              o: {
                                                b: {
                                                  k: {
                                                    u: {
                                                      c: {
                                                        s: {
                                                          A: {
                                                            l: {
                                                              v: {
                                                                d: {
                                                                  if (!k) {
                                                                    if (
                                                                      ((o[611] = 0),
                                                                      R(
                                                                        26,
                                                                        0 | s,
                                                                        1,
                                                                      ),
                                                                      (e =
                                                                        o[611]),
                                                                      (o[611] = 0),
                                                                      !e)
                                                                    )
                                                                      break v;
                                                                    if (
                                                                      !(r =
                                                                        o[612])
                                                                    )
                                                                      break v;
                                                                    if (
                                                                      Ir(
                                                                        o[
                                                                          e >> 2
                                                                        ],
                                                                        n,
                                                                        u,
                                                                      )
                                                                    )
                                                                      break d;
                                                                    break e;
                                                                  }
                                                                  if (
                                                                    ((e =
                                                                      o[
                                                                        (f +
                                                                          8) >>
                                                                          2
                                                                      ]),
                                                                    b[
                                                                      (f + 60) |
                                                                        0
                                                                    ])
                                                                  )
                                                                    break c;
                                                                  if (
                                                                    b[
                                                                      (f + 81) |
                                                                        0
                                                                    ]
                                                                  ) {
                                                                    if (
                                                                      ((o[611] = 0),
                                                                      (k =
                                                                        0 |
                                                                        P(
                                                                          28,
                                                                          0 | e,
                                                                          1,
                                                                          1,
                                                                        )),
                                                                      (r =
                                                                        o[611]),
                                                                      (o[611] = 0),
                                                                      (i = -1),
                                                                      !r)
                                                                    )
                                                                      break s;
                                                                    if (
                                                                      !(c =
                                                                        o[612])
                                                                    )
                                                                      break s;
                                                                    if (
                                                                      (i = Ir(
                                                                        o[
                                                                          r >> 2
                                                                        ],
                                                                        n,
                                                                        u,
                                                                      ))
                                                                    )
                                                                      break l;
                                                                    break f;
                                                                  }
                                                                  if (
                                                                    ((o[611] = 0),
                                                                    (k =
                                                                      0 |
                                                                      I(
                                                                        29,
                                                                        0 | e,
                                                                      )),
                                                                    (r =
                                                                      o[611]),
                                                                    (o[611] = 0),
                                                                    (i = -1),
                                                                    !r)
                                                                  )
                                                                    break s;
                                                                  if (
                                                                    !(c =
                                                                      o[612])
                                                                  )
                                                                    break s;
                                                                  if (
                                                                    (i = Ir(
                                                                      o[r >> 2],
                                                                      n,
                                                                      u,
                                                                    ))
                                                                  )
                                                                    break A;
                                                                  break f;
                                                                }
                                                                C(0 | r);
                                                              }
                                                              r = 0 | E();
                                                              continue;
                                                            }
                                                            C(0 | c);
                                                            break s;
                                                          }
                                                          C(0 | c);
                                                        }
                                                        if (
                                                          ((r = 0 | E()),
                                                          1 == (0 | i))
                                                        )
                                                          continue;
                                                        s: {
                                                          A: {
                                                            l: {
                                                              v: {
                                                                d: {
                                                                  h: {
                                                                    p: {
                                                                      if (!k) {
                                                                        if (
                                                                          ((o[611] = 0),
                                                                          R(
                                                                            26,
                                                                            0 |
                                                                              s,
                                                                            1,
                                                                          ),
                                                                          (e =
                                                                            o[611]),
                                                                          (o[611] = 0),
                                                                          !e)
                                                                        )
                                                                          break h;
                                                                        if (
                                                                          !(r =
                                                                            o[612])
                                                                        )
                                                                          break h;
                                                                        if (
                                                                          Ir(
                                                                            o[
                                                                              e >>
                                                                                2
                                                                            ],
                                                                            n,
                                                                            u,
                                                                          )
                                                                        )
                                                                          break p;
                                                                        break e;
                                                                      }
                                                                      if (
                                                                        !(
                                                                          (15 !=
                                                                            o[
                                                                              (f +
                                                                                88) >>
                                                                                2
                                                                            ]) |
                                                                            (12 !=
                                                                              o[
                                                                                (f +
                                                                                  100) >>
                                                                                  2
                                                                              ]) |
                                                                            (13 !=
                                                                              o[
                                                                                (f +
                                                                                  96) >>
                                                                                  2
                                                                              ]) |
                                                                            (14 !=
                                                                              o[
                                                                                (f +
                                                                                  92) >>
                                                                                  2
                                                                              ]) ||
                                                                          (3 !=
                                                                            o[
                                                                              (f +
                                                                                1716) >>
                                                                                2
                                                                            ]) |
                                                                            (6 !=
                                                                              o[
                                                                                (f +
                                                                                  1728) >>
                                                                                  2
                                                                              ]) |
                                                                            (5 !=
                                                                              o[
                                                                                (f +
                                                                                  1724) >>
                                                                                  2
                                                                              ]) ||
                                                                          4 !=
                                                                            o[
                                                                              (f +
                                                                                1720) >>
                                                                                2
                                                                            ]
                                                                        )
                                                                      )
                                                                        break s;
                                                                      if (
                                                                        b[
                                                                          (f +
                                                                            81) |
                                                                            0
                                                                        ]
                                                                      ) {
                                                                        if (
                                                                          ((o[611] = 0),
                                                                          R(
                                                                            30,
                                                                            0 |
                                                                              f,
                                                                            0 |
                                                                              e,
                                                                          ),
                                                                          (r =
                                                                            o[611]),
                                                                          (o[611] = 0),
                                                                          (i =
                                                                            -1),
                                                                          !r)
                                                                        )
                                                                          break v;
                                                                        if (
                                                                          !(k =
                                                                            o[612])
                                                                        )
                                                                          break v;
                                                                        if (
                                                                          (i =
                                                                            Ir(
                                                                              o[
                                                                                r >>
                                                                                  2
                                                                              ],
                                                                              n,
                                                                              u,
                                                                            ))
                                                                        )
                                                                          break d;
                                                                        break i;
                                                                      }
                                                                      if (
                                                                        ((o[611] = 0),
                                                                        R(
                                                                          31,
                                                                          0 | f,
                                                                          0 | e,
                                                                        ),
                                                                        (r =
                                                                          o[611]),
                                                                        (o[611] = 0),
                                                                        (i =
                                                                          -1),
                                                                        !r)
                                                                      )
                                                                        break A;
                                                                      if (
                                                                        !(k =
                                                                          o[612])
                                                                      )
                                                                        break A;
                                                                      if (
                                                                        (i = Ir(
                                                                          o[
                                                                            r >>
                                                                              2
                                                                          ],
                                                                          n,
                                                                          u,
                                                                        ))
                                                                      )
                                                                        break l;
                                                                      break i;
                                                                    }
                                                                    C(0 | r);
                                                                  }
                                                                  r = 0 | E();
                                                                  continue;
                                                                }
                                                                C(0 | k);
                                                              }
                                                              if (
                                                                ((r = 0 | E()),
                                                                1 == (0 | i))
                                                              )
                                                                continue;
                                                              break s;
                                                            }
                                                            C(0 | k);
                                                          }
                                                          if (
                                                            ((r = 0 | E()),
                                                            1 == (0 | i))
                                                          )
                                                            continue;
                                                        }
                                                        if (
                                                          16 !=
                                                          o[(f + 104) >> 2]
                                                        ) {
                                                          if (
                                                            ((o[611] = 0),
                                                            X(e),
                                                            (r = o[611]),
                                                            (o[611] = 0),
                                                            (i = -1),
                                                            !r)
                                                          )
                                                            break k;
                                                          if (!(k = o[612]))
                                                            break k;
                                                          if (
                                                            (i = Ir(
                                                              o[r >> 2],
                                                              n,
                                                              u,
                                                            ))
                                                          )
                                                            break u;
                                                          break i;
                                                        }
                                                      }
                                                      if (
                                                        ((o[611] = 0),
                                                        hr(e),
                                                        (r = o[611]),
                                                        (o[611] = 0),
                                                        (e = -1),
                                                        !r)
                                                      )
                                                        break o;
                                                      if (!(i = o[612]))
                                                        break o;
                                                      if (
                                                        (e = Ir(
                                                          o[r >> 2],
                                                          n,
                                                          u,
                                                        ))
                                                      )
                                                        break b;
                                                      break a;
                                                    }
                                                    C(0 | k);
                                                  }
                                                  if (
                                                    ((r = 0 | E()),
                                                    1 != (0 | i))
                                                  )
                                                    break t;
                                                  continue;
                                                }
                                                C(0 | i);
                                              }
                                              if (((r = 0 | E()), 1 == (0 | e)))
                                                continue;
                                              (o[(f + 8) >> 2] = 0),
                                                (o[(f + 1896) >> 2] = 0);
                                              break r;
                                            }
                                            if (
                                              ((r = o[(f + 104) >> 2]),
                                              (o[611] = 0),
                                              M(0 | r, 0 | e),
                                              (r = o[611]),
                                              (o[611] = 0),
                                              (e = -1),
                                              r && (i = o[612]))
                                            ) {
                                              if (!(e = Ir(o[r >> 2], n, u)))
                                                break a;
                                              C(0 | i);
                                            }
                                            if (((r = 0 | E()), 1 != (0 | e)))
                                              break;
                                          }
                                        }
                                      }
                                      (o[(f + 1896) >> 2] = 0),
                                        (o[(f + 8) >> 2] = 0);
                                      break r;
                                    }
                                    Br(r, i), g();
                                  }
                                  Br(r, k), g();
                                }
                                Br(r, c), g();
                              }
                              Br(e, r), g();
                            }
                            return W(n), o[(o[608] + 4) >> 2];
                          },
                          s: function () {
                            return 0 | U;
                          },
                          t: function (r) {
                            U = r |= 0;
                          },
                          u: function (r, e) {
                            (r |= 0),
                              (e |= 0),
                              o[611] || ((o[612] = e), (o[611] = r));
                          },
                        };
                      })(r);
                    })(Z);
                  },
                  instantiate: function (r, e) {
                    return {
                      then: function (e) {
                        var f = new g.Module(r);
                        e({ instance: new g.Instance(f) });
                      },
                    };
                  },
                  RuntimeError: Error,
                };
              (w = []),
                'object' != typeof g && H('no native wasm support detected');
              var C,
                E,
                R,
                I = !1,
                M =
                  'undefined' != typeof TextDecoder
                    ? new TextDecoder('utf8')
                    : void 0;
              function _(r, e, f) {
                for (var i = e + f, a = e; r[a] && !(a >= i); ) ++a;
                if (a - e > 16 && r.subarray && M)
                  return M.decode(r.subarray(e, a));
                for (var n = ''; e < a; ) {
                  var t = r[e++];
                  if (128 & t) {
                    var o = 63 & r[e++];
                    if (192 != (224 & t)) {
                      var b = 63 & r[e++];
                      if (
                        (t =
                          224 == (240 & t)
                            ? ((15 & t) << 12) | (o << 6) | b
                            : ((7 & t) << 18) |
                              (o << 12) |
                              (b << 6) |
                              (63 & r[e++])) < 65536
                      )
                        n += String.fromCharCode(t);
                      else {
                        var k = t - 65536;
                        n += String.fromCharCode(
                          55296 | (k >> 10),
                          56320 | (1023 & k),
                        );
                      }
                    } else n += String.fromCharCode(((31 & t) << 6) | o);
                  } else n += String.fromCharCode(t);
                }
                return n;
              }
              function S(r, e) {
                return r % e > 0 && (r += e - (r % e)), r;
              }
              function x(r) {
                (C = r),
                  (a.HEAP8 = new Int8Array(r)),
                  (a.HEAP16 = new Int16Array(r)),
                  (a.HEAP32 = R = new Int32Array(r)),
                  (a.HEAPU8 = E = new Uint8Array(r)),
                  (a.HEAPU16 = new Uint16Array(r)),
                  (a.HEAPU32 = new Uint32Array(r)),
                  (a.HEAPF32 = new Float32Array(r)),
                  (a.HEAPF64 = new Float64Array(r));
              }
              var P,
                L = a.INITIAL_MEMORY || 16777216;
              (y = a.wasmMemory
                ? a.wasmMemory
                : new g.Memory({ initial: L / 65536, maximum: 32768 })) &&
                (C = y.buffer),
                (L = C.byteLength),
                x(C);
              var B = [],
                T = [],
                U = [];
              function j(r) {
                B.unshift(r);
              }
              function F(r) {
                U.unshift(r);
              }
              var O = 0,
                D = null;
              function H(r) {
                throw (
                  (a.onAbort && a.onAbort(r),
                  p((r += '')),
                  (I = !0),
                  (r =
                    'abort(' +
                    r +
                    '). Build with -s ASSERTIONS=1 for more info.'),
                  new g.RuntimeError(r))
                );
              }
              (a.preloadedImages = {}), (a.preloadedAudios = {});
              var Q,
                W = 'data:application/octet-stream;base64,';
              function q(r) {
                return r.startsWith(W);
              }
              function z(r) {
                return r.startsWith('file://');
              }
              function K(r) {
                try {
                  if (r == Q && w) return new Uint8Array(w);
                  var e = J(r);
                  if (e) return e;
                  if (u) return u(r);
                  throw 'both async and sync fetching of the wasm failed';
                } catch (r) {
                  H(r);
                }
              }
              function Y(r) {
                for (; r.length > 0; ) {
                  var e = r.shift();
                  if ('function' != typeof e) {
                    var f = e.func;
                    'number' == typeof f
                      ? void 0 === e.arg
                        ? P.get(f)()
                        : P.get(f)(e.arg)
                      : f(void 0 === e.arg ? null : e.arg);
                  } else e(a);
                }
              }
              function N(r) {
                try {
                  return (
                    y.grow((r - C.byteLength + 65535) >>> 16), x(y.buffer), 1
                  );
                } catch (r) {}
              }
              q((Q = 'libtess-asm.wasm')) ||
                (Q = (function (r) {
                  return a.locateFile ? a.locateFile(r, d) : d + r;
                })(Q));
              var V = {
                  mappings: {},
                  buffers: [null, [], []],
                  printChar: function (r, e) {
                    var f = V.buffers[r];
                    0 === e || 10 === e
                      ? ((1 === r ? h : p)(_(f, 0)), (f.length = 0))
                      : f.push(e);
                  },
                  varargs: void 0,
                  get: function () {
                    return (V.varargs += 4), R[(V.varargs - 4) >> 2];
                  },
                  getStr: function (r) {
                    return (function (r, e) {
                      return r ? _(E, r, void 0) : '';
                    })(r);
                  },
                  get64: function (r, e) {
                    return r;
                  },
                },
                G =
                  'function' == typeof atob
                    ? atob
                    : function (r) {
                        var e,
                          f,
                          i,
                          a,
                          n,
                          t,
                          o =
                            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
                          b = '',
                          k = 0;
                        r = r.replace(/[^A-Za-z0-9\+\/\=]/g, '');
                        do {
                          (e =
                            (o.indexOf(r.charAt(k++)) << 2) |
                            ((a = o.indexOf(r.charAt(k++))) >> 4)),
                            (f =
                              ((15 & a) << 4) |
                              ((n = o.indexOf(r.charAt(k++))) >> 2)),
                            (i =
                              ((3 & n) << 6) | (t = o.indexOf(r.charAt(k++)))),
                            (b += String.fromCharCode(e)),
                            64 !== n && (b += String.fromCharCode(f)),
                            64 !== t && (b += String.fromCharCode(i));
                        } while (k < r.length);
                        return b;
                      };
              function J(r) {
                if (q(r))
                  return (function (r) {
                    if ('boolean' == typeof v && v) {
                      var e = Buffer.from(r, 'base64');
                      return new Uint8Array(
                        e.buffer,
                        e.byteOffset,
                        e.byteLength,
                      );
                    }
                    try {
                      for (
                        var f = G(r), i = new Uint8Array(f.length), a = 0;
                        a < f.length;
                        ++a
                      )
                        i[a] = f.charCodeAt(a);
                      return i;
                    } catch (r) {
                      throw new Error(
                        'Converting base64 string to bytes failed.',
                      );
                    }
                  })(r.slice(W.length));
              }
              var Z = {
                i: function () {
                  throw 'longjmp';
                },
                m: function (r, e, f) {
                  E.copyWithin(r, e, e + f);
                },
                h: function (r) {
                  var e = E.length,
                    f = 2147483648;
                  if ((r >>>= 0) > f) return !1;
                  for (var i = 1; i <= 4; i *= 2) {
                    var a = e * (1 + 0.2 / i);
                    if (
                      ((a = Math.min(a, r + 100663296)),
                      N(Math.min(f, S(Math.max(r, a), 65536))))
                    )
                      return !0;
                  }
                  return !1;
                },
                g: function (r, e, f, i) {
                  for (var a = 0, n = 0; n < f; n++) {
                    for (
                      var t = R[(e + 8 * n) >> 2],
                        o = R[(e + (8 * n + 4)) >> 2],
                        b = 0;
                      b < o;
                      b++
                    )
                      V.printChar(r, E[t + b]);
                    a += o;
                  }
                  return (R[i >> 2] = a), 0;
                },
                c: function () {
                  return m;
                },
                l: function (r) {
                  var e = $();
                  try {
                    return P.get(r)();
                  } catch (r) {
                    if ((rr(e), r !== r + 0 && 'longjmp' !== r)) throw r;
                    er(1, 0);
                  }
                },
                e: function (r, e) {
                  var f = $();
                  try {
                    return P.get(r)(e);
                  } catch (r) {
                    if ((rr(f), r !== r + 0 && 'longjmp' !== r)) throw r;
                    er(1, 0);
                  }
                },
                k: function (r, e, f) {
                  var i = $();
                  try {
                    return P.get(r)(e, f);
                  } catch (r) {
                    if ((rr(i), r !== r + 0 && 'longjmp' !== r)) throw r;
                    er(1, 0);
                  }
                },
                j: function (r, e, f, i) {
                  var a = $();
                  try {
                    return P.get(r)(e, f, i);
                  } catch (r) {
                    if ((rr(a), r !== r + 0 && 'longjmp' !== r)) throw r;
                    er(1, 0);
                  }
                },
                f: function (r, e) {
                  var f = $();
                  try {
                    P.get(r)(e);
                  } catch (r) {
                    if ((rr(f), r !== r + 0 && 'longjmp' !== r)) throw r;
                    er(1, 0);
                  }
                },
                d: function (r, e, f) {
                  var i = $();
                  try {
                    P.get(r)(e, f);
                  } catch (r) {
                    if ((rr(i), r !== r + 0 && 'longjmp' !== r)) throw r;
                    er(1, 0);
                  }
                },
                a: y,
                b: function (r) {
                  m = r;
                },
              };
              (function () {
                var r = { a: Z };
                function e(r, e) {
                  var f = r.exports;
                  (a.asm = f),
                    (P = a.asm.q),
                    (function (r) {
                      T.unshift(r);
                    })(a.asm.n),
                    (function (r) {
                      if (
                        (O--,
                        a.monitorRunDependencies && a.monitorRunDependencies(O),
                        0 == O && D)
                      ) {
                        var e = D;
                        (D = null), e();
                      }
                    })();
                }
                function f(r) {
                  e(r.instance);
                }
                function i(e) {
                  return (function () {
                    if (!w && (A || l)) {
                      if ('function' == typeof fetch && !z(Q))
                        return fetch(Q, { credentials: 'same-origin' })
                          .then(function (r) {
                            if (!r.ok)
                              throw (
                                "failed to load wasm binary file at '" + Q + "'"
                              );
                            return r.arrayBuffer();
                          })
                          .catch(function () {
                            return K(Q);
                          });
                      if (k)
                        return new Promise(function (r, e) {
                          k(
                            Q,
                            function (e) {
                              r(new Uint8Array(e));
                            },
                            e,
                          );
                        });
                    }
                    return Promise.resolve().then(function () {
                      return K(Q);
                    });
                  })()
                    .then(function (e) {
                      return g.instantiate(e, r);
                    })
                    .then(e, function (r) {
                      p('failed to asynchronously prepare wasm: ' + r), H(r);
                    });
                }
                if (
                  (O++,
                  a.monitorRunDependencies && a.monitorRunDependencies(O),
                  a.instantiateWasm)
                )
                  try {
                    return a.instantiateWasm(r, e);
                  } catch (r) {
                    return (
                      p(
                        'Module.instantiateWasm callback failed with error: ' +
                          r,
                      ),
                      !1
                    );
                  }
                w ||
                'function' != typeof g.instantiateStreaming ||
                q(Q) ||
                z(Q) ||
                'function' != typeof fetch
                  ? i(f)
                  : fetch(Q, { credentials: 'same-origin' }).then(function (e) {
                      return g.instantiateStreaming(e, r).then(f, function (r) {
                        return (
                          p('wasm streaming compile failed: ' + r),
                          p('falling back to ArrayBuffer instantiation'),
                          i(f)
                        );
                      });
                    });
              })(),
                (a.___wasm_call_ctors = function () {
                  return (a.___wasm_call_ctors = a.asm.n).apply(
                    null,
                    arguments,
                  );
                }),
                (a._malloc = function () {
                  return (a._malloc = a.asm.o).apply(null, arguments);
                }),
                (a._free = function () {
                  return (a._free = a.asm.p).apply(null, arguments);
                }),
                (a._triangulate = function () {
                  return (a._triangulate = a.asm.r).apply(null, arguments);
                });
              var X,
                $ = (a.stackSave = function () {
                  return ($ = a.stackSave = a.asm.s).apply(null, arguments);
                }),
                rr = (a.stackRestore = function () {
                  return (rr = a.stackRestore = a.asm.t).apply(null, arguments);
                }),
                er = (a._setThrew = function () {
                  return (er = a._setThrew = a.asm.u).apply(null, arguments);
                });
              function fr(r) {
                (this.name = 'ExitStatus'),
                  (this.message = 'Program terminated with exit(' + r + ')'),
                  (this.status = r);
              }
              function ir(r) {
                function e() {
                  X ||
                    ((X = !0),
                    (a.calledRun = !0),
                    I ||
                      (Y(T),
                      a.onRuntimeInitialized && a.onRuntimeInitialized(),
                      (function () {
                        if (a.postRun)
                          for (
                            'function' == typeof a.postRun &&
                            (a.postRun = [a.postRun]);
                            a.postRun.length;

                          )
                            F(a.postRun.shift());
                        Y(U);
                      })()));
                }
                O > 0 ||
                  ((function () {
                    if (a.preRun)
                      for (
                        'function' == typeof a.preRun &&
                        (a.preRun = [a.preRun]);
                        a.preRun.length;

                      )
                        j(a.preRun.shift());
                    Y(B);
                  })(),
                  O > 0 ||
                    (a.setStatus
                      ? (a.setStatus('Running...'),
                        setTimeout(function () {
                          setTimeout(function () {
                            a.setStatus('');
                          }, 1),
                            e();
                        }, 1))
                      : e()));
              }
              if (
                ((D = function r() {
                  X || ir(), X || (D = r);
                }),
                (a.run = ir),
                a.preInit)
              )
                for (
                  'function' == typeof a.preInit && (a.preInit = [a.preInit]);
                  a.preInit.length > 0;

                )
                  a.preInit.pop()();
              ir();
              let ar = null,
                nr = null,
                tr = null,
                or = null;
              const br = f.Module;
              let kr = 0;
              return (
                (f.triangulate = (r, e, f) => {
                  ar || (ar = br._triangulate);
                  let i = br.HEAPF32;
                  const a = br.HEAP32.BYTES_PER_ELEMENT,
                    n = i.BYTES_PER_ELEMENT;
                  f > kr &&
                    ((kr = f),
                    tr && (br._free(tr), (tr = 0)),
                    nr && (br._free(nr), (nr = 0))),
                    tr || (tr = br._malloc(f * n)),
                    or || (or = br._malloc(1e3 * a)),
                    nr || (nr = br._malloc(f * n)),
                    (i = br.HEAPF32),
                    i.set(r, tr / n),
                    br.HEAP32.set(e, or / a);
                  const t = ar(tr, or, e.length, 2, nr),
                    o = 2 * t;
                  i = br.HEAPF32;
                  const b = i.slice(nr / n, nr / n + o),
                    k = {};
                  return (k.buffer = b), (k.vertexCount = t), k;
                }),
                f.whenLoaded()
              );
            },
          };
        }),
        void 0 !== (n = a()) && (i.exports = n);
      const o = t.exports,
        b = Object.freeze(
          (function (r, e) {
            for (var f = 0; f < e.length; f++) {
              const i = e[f];
              if ('string' != typeof i && !Array.isArray(i))
                for (const e in i)
                  if ('default' !== e && !(e in r)) {
                    const f = Object.getOwnPropertyDescriptor(i, e);
                    f &&
                      Object.defineProperty(
                        r,
                        e,
                        f.get ? f : { enumerable: !0, get: () => i[e] },
                      );
                  }
            }
            return Object.freeze(r);
          })({ __proto__: null, default: o }, [t.exports]),
        );
    },
  },
]);
