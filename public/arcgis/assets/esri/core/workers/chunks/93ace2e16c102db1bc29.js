'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [176],
  {
    97575: (e, t, r) => {
      r.d(t, { J: () => s });
      var o,
        n,
        i,
        a = { exports: {} };
      (o = a),
        (n = function () {
          var e = (function () {
            function e(e) {
              this.message = 'JPEG error: ' + e;
            }
            return (
              (e.prototype = new Error()),
              (e.prototype.name = 'JpegError'),
              (e.constructor = e),
              e
            );
          })();
          return (function () {
            if (!self || !self.Uint8ClampedArray) return null;
            var t = new Uint8Array([
                0, 1, 8, 16, 9, 2, 3, 10, 17, 24, 32, 25, 18, 11, 4, 5, 12, 19,
                26, 33, 40, 48, 41, 34, 27, 20, 13, 6, 7, 14, 21, 28, 35, 42,
                49, 56, 57, 50, 43, 36, 29, 22, 15, 23, 30, 37, 44, 51, 58, 59,
                52, 45, 38, 31, 39, 46, 53, 60, 61, 54, 47, 55, 62, 63,
              ]),
              r = 4017,
              o = 799,
              n = 3406,
              i = 2276,
              a = 1567,
              s = 3784,
              l = 5793,
              h = 2896;
            function u() {
              (this.decodeTransform = null), (this.colorTransform = -1);
            }
            function c(e, t) {
              for (var r, o, n = 0, i = [], a = 16; a > 0 && !e[a - 1]; ) a--;
              i.push({ children: [], index: 0 });
              var s,
                l = i[0];
              for (r = 0; r < a; r++) {
                for (o = 0; o < e[r]; o++) {
                  for ((l = i.pop()).children[l.index] = t[n]; l.index > 0; )
                    l = i.pop();
                  for (l.index++, i.push(l); i.length <= r; )
                    i.push((s = { children: [], index: 0 })),
                      (l.children[l.index] = s.children),
                      (l = s);
                  n++;
                }
                r + 1 < a &&
                  (i.push((s = { children: [], index: 0 })),
                  (l.children[l.index] = s.children),
                  (l = s));
              }
              return i[0].children;
            }
            function f(e, t, r) {
              return 64 * ((e.blocksPerLine + 1) * t + r);
            }
            function p(r, o, n, i, a, s, l, h, u) {
              var c = n.mcusPerLine,
                p = n.progressive,
                d = o,
                m = 0,
                y = 0;
              function C() {
                if (y > 0) return y--, (m >> y) & 1;
                if (255 === (m = r[o++])) {
                  var t = r[o++];
                  if (t)
                    throw new e(
                      'unexpected marker ' + ((m << 8) | t).toString(16),
                    );
                }
                return (y = 7), m >>> 7;
              }
              function w(t) {
                for (var r = t; ; ) {
                  if ('number' == typeof (r = r[C()])) return r;
                  if ('object' != typeof r)
                    throw new e('invalid huffman sequence');
                }
              }
              function b(e) {
                for (var t = 0; e > 0; ) (t = (t << 1) | C()), e--;
                return t;
              }
              function x(e) {
                if (1 === e) return 1 === C() ? 1 : -1;
                var t = b(e);
                return t >= 1 << (e - 1) ? t : t + (-1 << e) + 1;
              }
              var v,
                T = 0,
                k = 0;
              function S(e, t, r, o, n) {
                var i = r % c;
                t(e, f(e, ((r / c) | 0) * e.v + o, i * e.h + n));
              }
              function A(e, t, r) {
                t(e, f(e, (r / e.blocksPerLine) | 0, r % e.blocksPerLine));
              }
              var I,
                P,
                M,
                R,
                D,
                E,
                _ = i.length;
              E = p
                ? 0 === s
                  ? 0 === h
                    ? function (e, t) {
                        var r = w(e.huffmanTableDC),
                          o = 0 === r ? 0 : x(r) << u;
                        e.blockData[t] = e.pred += o;
                      }
                    : function (e, t) {
                        e.blockData[t] |= C() << u;
                      }
                  : 0 === h
                  ? function (e, r) {
                      if (T > 0) T--;
                      else
                        for (var o = s, n = l; o <= n; ) {
                          var i = w(e.huffmanTableAC),
                            a = 15 & i,
                            h = i >> 4;
                          if (0 !== a) {
                            var c = t[(o += h)];
                            (e.blockData[r + c] = x(a) * (1 << u)), o++;
                          } else {
                            if (h < 15) {
                              T = b(h) + (1 << h) - 1;
                              break;
                            }
                            o += 16;
                          }
                        }
                    }
                  : function (r, o) {
                      for (var n, i, a = s, h = l, c = 0; a <= h; ) {
                        var f = t[a];
                        switch (k) {
                          case 0:
                            if (
                              ((c = (i = w(r.huffmanTableAC)) >> 4),
                              0 == (n = 15 & i))
                            )
                              c < 15
                                ? ((T = b(c) + (1 << c)), (k = 4))
                                : ((c = 16), (k = 1));
                            else {
                              if (1 !== n) throw new e('invalid ACn encoding');
                              (v = x(n)), (k = c ? 2 : 3);
                            }
                            continue;
                          case 1:
                          case 2:
                            r.blockData[o + f]
                              ? (r.blockData[o + f] += C() << u)
                              : 0 == --c && (k = 2 === k ? 3 : 0);
                            break;
                          case 3:
                            r.blockData[o + f]
                              ? (r.blockData[o + f] += C() << u)
                              : ((r.blockData[o + f] = v << u), (k = 0));
                            break;
                          case 4:
                            r.blockData[o + f] &&
                              (r.blockData[o + f] += C() << u);
                        }
                        a++;
                      }
                      4 === k && 0 == --T && (k = 0);
                    }
                : function (e, r) {
                    var o = w(e.huffmanTableDC),
                      n = 0 === o ? 0 : x(o);
                    e.blockData[r] = e.pred += n;
                    for (var i = 1; i < 64; ) {
                      var a = w(e.huffmanTableAC),
                        s = 15 & a,
                        l = a >> 4;
                      if (0 !== s) {
                        var h = t[(i += l)];
                        (e.blockData[r + h] = x(s)), i++;
                      } else {
                        if (l < 15) break;
                        i += 16;
                      }
                    }
                  };
              var L,
                U,
                G,
                O,
                B = 0;
              for (
                U =
                  1 === _
                    ? i[0].blocksPerLine * i[0].blocksPerColumn
                    : c * n.mcusPerColumn;
                B < U;

              ) {
                var N = a ? Math.min(U - B, a) : U;
                for (P = 0; P < _; P++) i[P].pred = 0;
                if (((T = 0), 1 === _))
                  for (I = i[0], D = 0; D < N; D++) A(I, E, B), B++;
                else
                  for (D = 0; D < N; D++) {
                    for (P = 0; P < _; P++)
                      for (G = (I = i[P]).h, O = I.v, M = 0; M < O; M++)
                        for (R = 0; R < G; R++) S(I, E, B, M, R);
                    B++;
                  }
                (y = 0),
                  (L = g(r, o)) &&
                    L.invalid &&
                    (console.log(
                      'decodeScan - unexpected MCU data, next marker is: ' +
                        L.invalid,
                    ),
                    (o = L.offset));
                var F = L && L.marker;
                if (!F || F <= 65280) throw new e('marker was not found');
                if (!(F >= 65488 && F <= 65495)) break;
                o += 2;
              }
              return (
                (L = g(r, o)) &&
                  L.invalid &&
                  (console.log(
                    'decodeScan - unexpected Scan data, next marker is: ' +
                      L.invalid,
                  ),
                  (o = L.offset)),
                o - d
              );
            }
            function d(t, u, c) {
              var f,
                p,
                d,
                m,
                g,
                y,
                C,
                w,
                b,
                x,
                v,
                T,
                k,
                S,
                A,
                I,
                P,
                M = t.quantizationTable,
                R = t.blockData;
              if (!M) throw new e('missing required Quantization Table.');
              for (var D = 0; D < 64; D += 8)
                (b = R[u + D]),
                  (x = R[u + D + 1]),
                  (v = R[u + D + 2]),
                  (T = R[u + D + 3]),
                  (k = R[u + D + 4]),
                  (S = R[u + D + 5]),
                  (A = R[u + D + 6]),
                  (I = R[u + D + 7]),
                  (b *= M[D]),
                  0 != (x | v | T | k | S | A | I)
                    ? ((x *= M[D + 1]),
                      (v *= M[D + 2]),
                      (T *= M[D + 3]),
                      (k *= M[D + 4]),
                      (S *= M[D + 5]),
                      (A *= M[D + 6]),
                      (I *= M[D + 7]),
                      (p =
                        (f =
                          ((f = (l * b + 128) >> 8) +
                            (p = (l * k + 128) >> 8) +
                            1) >>
                          1) - p),
                      (P = ((d = v) * s + (m = A) * a + 128) >> 8),
                      (d = (d * a - m * s + 128) >> 8),
                      (C =
                        (g =
                          ((g = (h * (x - I) + 128) >> 8) + (C = S << 4) + 1) >>
                          1) - C),
                      (y =
                        (w =
                          ((w = (h * (x + I) + 128) >> 8) + (y = T << 4) + 1) >>
                          1) - y),
                      (m = (f = (f + (m = P) + 1) >> 1) - m),
                      (d = (p = (p + d + 1) >> 1) - d),
                      (P = (g * i + w * n + 2048) >> 12),
                      (g = (g * n - w * i + 2048) >> 12),
                      (w = P),
                      (P = (y * o + C * r + 2048) >> 12),
                      (y = (y * r - C * o + 2048) >> 12),
                      (C = P),
                      (c[D] = f + w),
                      (c[D + 7] = f - w),
                      (c[D + 1] = p + C),
                      (c[D + 6] = p - C),
                      (c[D + 2] = d + y),
                      (c[D + 5] = d - y),
                      (c[D + 3] = m + g),
                      (c[D + 4] = m - g))
                    : ((P = (l * b + 512) >> 10),
                      (c[D] = P),
                      (c[D + 1] = P),
                      (c[D + 2] = P),
                      (c[D + 3] = P),
                      (c[D + 4] = P),
                      (c[D + 5] = P),
                      (c[D + 6] = P),
                      (c[D + 7] = P));
              for (var E = 0; E < 8; ++E)
                (b = c[E]),
                  0 !=
                  ((x = c[E + 8]) |
                    (v = c[E + 16]) |
                    (T = c[E + 24]) |
                    (k = c[E + 32]) |
                    (S = c[E + 40]) |
                    (A = c[E + 48]) |
                    (I = c[E + 56]))
                    ? ((p =
                        (f =
                          4112 +
                          (((f = (l * b + 2048) >> 12) +
                            (p = (l * k + 2048) >> 12) +
                            1) >>
                            1)) - p),
                      (P = ((d = v) * s + (m = A) * a + 2048) >> 12),
                      (d = (d * a - m * s + 2048) >> 12),
                      (m = P),
                      (C =
                        (g =
                          ((g = (h * (x - I) + 2048) >> 12) + (C = S) + 1) >>
                          1) - C),
                      (y =
                        (w =
                          ((w = (h * (x + I) + 2048) >> 12) + (y = T) + 1) >>
                          1) - y),
                      (P = (g * i + w * n + 2048) >> 12),
                      (g = (g * n - w * i + 2048) >> 12),
                      (w = P),
                      (P = (y * o + C * r + 2048) >> 12),
                      (y = (y * r - C * o + 2048) >> 12),
                      (b =
                        (b = (f = (f + m + 1) >> 1) + w) < 16
                          ? 0
                          : b >= 4080
                          ? 255
                          : b >> 4),
                      (x =
                        (x = (p = (p + d + 1) >> 1) + (C = P)) < 16
                          ? 0
                          : x >= 4080
                          ? 255
                          : x >> 4),
                      (v =
                        (v = (d = p - d) + y) < 16
                          ? 0
                          : v >= 4080
                          ? 255
                          : v >> 4),
                      (T =
                        (T = (m = f - m) + g) < 16
                          ? 0
                          : T >= 4080
                          ? 255
                          : T >> 4),
                      (k = (k = m - g) < 16 ? 0 : k >= 4080 ? 255 : k >> 4),
                      (S = (S = d - y) < 16 ? 0 : S >= 4080 ? 255 : S >> 4),
                      (A = (A = p - C) < 16 ? 0 : A >= 4080 ? 255 : A >> 4),
                      (I = (I = f - w) < 16 ? 0 : I >= 4080 ? 255 : I >> 4),
                      (R[u + E] = b),
                      (R[u + E + 8] = x),
                      (R[u + E + 16] = v),
                      (R[u + E + 24] = T),
                      (R[u + E + 32] = k),
                      (R[u + E + 40] = S),
                      (R[u + E + 48] = A),
                      (R[u + E + 56] = I))
                    : ((P =
                        (P = (l * b + 8192) >> 14) < -2040
                          ? 0
                          : P >= 2024
                          ? 255
                          : (P + 2056) >> 4),
                      (R[u + E] = P),
                      (R[u + E + 8] = P),
                      (R[u + E + 16] = P),
                      (R[u + E + 24] = P),
                      (R[u + E + 32] = P),
                      (R[u + E + 40] = P),
                      (R[u + E + 48] = P),
                      (R[u + E + 56] = P));
            }
            function m(e, t) {
              for (
                var r = t.blocksPerLine,
                  o = t.blocksPerColumn,
                  n = new Int16Array(64),
                  i = 0;
                i < o;
                i++
              )
                for (var a = 0; a < r; a++) d(t, f(t, i, a), n);
              return t.blockData;
            }
            function g(e, t, r) {
              function o(t) {
                return (e[t] << 8) | e[t + 1];
              }
              var n = e.length - 1,
                i = r < t ? r : t;
              if (t >= n) return null;
              var a = o(t);
              if (a >= 65472 && a <= 65534)
                return { invalid: null, marker: a, offset: t };
              for (var s = o(i); !(s >= 65472 && s <= 65534); ) {
                if (++i >= n) return null;
                s = o(i);
              }
              return { invalid: a.toString(16), marker: s, offset: i };
            }
            return (
              (u.prototype = {
                parse: function (r) {
                  function o() {
                    var e = (r[l] << 8) | r[l + 1];
                    return (l += 2), e;
                  }
                  function n() {
                    var e = o(),
                      t = l + e - 2,
                      n = g(r, t, l);
                    n &&
                      n.invalid &&
                      (console.log(
                        'readDataBlock - incorrect length, next marker is: ' +
                          n.invalid,
                      ),
                      (t = n.offset));
                    var i = r.subarray(l, t);
                    return (l += i.length), i;
                  }
                  function i(e) {
                    for (
                      var t = Math.ceil(e.samplesPerLine / 8 / e.maxH),
                        r = Math.ceil(e.scanLines / 8 / e.maxV),
                        o = 0;
                      o < e.components.length;
                      o++
                    ) {
                      B = e.components[o];
                      var n = Math.ceil(
                          (Math.ceil(e.samplesPerLine / 8) * B.h) / e.maxH,
                        ),
                        i = Math.ceil(
                          (Math.ceil(e.scanLines / 8) * B.v) / e.maxV,
                        ),
                        a = t * B.h,
                        s = r * B.v * 64 * (a + 1);
                      (B.blockData = new Int16Array(s)),
                        (B.blocksPerLine = n),
                        (B.blocksPerColumn = i);
                    }
                    (e.mcusPerLine = t), (e.mcusPerColumn = r);
                  }
                  var a,
                    s,
                    l = 0,
                    h = null,
                    u = null,
                    f = [],
                    d = [],
                    y = [],
                    C = o();
                  if (65496 !== C) throw new e('SOI not found');
                  for (C = o(); 65497 !== C; ) {
                    var w, b, x;
                    switch (C) {
                      case 65504:
                      case 65505:
                      case 65506:
                      case 65507:
                      case 65508:
                      case 65509:
                      case 65510:
                      case 65511:
                      case 65512:
                      case 65513:
                      case 65514:
                      case 65515:
                      case 65516:
                      case 65517:
                      case 65518:
                      case 65519:
                      case 65534:
                        var v = n();
                        65504 === C &&
                          74 === v[0] &&
                          70 === v[1] &&
                          73 === v[2] &&
                          70 === v[3] &&
                          0 === v[4] &&
                          (h = {
                            version: { major: v[5], minor: v[6] },
                            densityUnits: v[7],
                            xDensity: (v[8] << 8) | v[9],
                            yDensity: (v[10] << 8) | v[11],
                            thumbWidth: v[12],
                            thumbHeight: v[13],
                            thumbData: v.subarray(14, 14 + 3 * v[12] * v[13]),
                          }),
                          65518 === C &&
                            65 === v[0] &&
                            100 === v[1] &&
                            111 === v[2] &&
                            98 === v[3] &&
                            101 === v[4] &&
                            (u = {
                              version: (v[5] << 8) | v[6],
                              flags0: (v[7] << 8) | v[8],
                              flags1: (v[9] << 8) | v[10],
                              transformCode: v[11],
                            });
                        break;
                      case 65499:
                        for (var T = o() + l - 2; l < T; ) {
                          var k = r[l++],
                            S = new Uint16Array(64);
                          if (k >> 4 == 0)
                            for (b = 0; b < 64; b++) S[t[b]] = r[l++];
                          else {
                            if (k >> 4 != 1)
                              throw new e('DQT - invalid table spec');
                            for (b = 0; b < 64; b++) S[t[b]] = o();
                          }
                          f[15 & k] = S;
                        }
                        break;
                      case 65472:
                      case 65473:
                      case 65474:
                        if (a) throw new e('Only single frame JPEGs supported');
                        o(),
                          ((a = {}).extended = 65473 === C),
                          (a.progressive = 65474 === C),
                          (a.precision = r[l++]),
                          (a.scanLines = o()),
                          (a.samplesPerLine = o()),
                          (a.components = []),
                          (a.componentIds = {});
                        var A,
                          I = r[l++],
                          P = 0,
                          M = 0;
                        for (w = 0; w < I; w++) {
                          A = r[l];
                          var R = r[l + 1] >> 4,
                            D = 15 & r[l + 1];
                          P < R && (P = R), M < D && (M = D);
                          var E = r[l + 2];
                          (x = a.components.push({
                            h: R,
                            v: D,
                            quantizationId: E,
                            quantizationTable: null,
                          })),
                            (a.componentIds[A] = x - 1),
                            (l += 3);
                        }
                        (a.maxH = P), (a.maxV = M), i(a);
                        break;
                      case 65476:
                        var _ = o();
                        for (w = 2; w < _; ) {
                          var L = r[l++],
                            U = new Uint8Array(16),
                            G = 0;
                          for (b = 0; b < 16; b++, l++) G += U[b] = r[l];
                          var O = new Uint8Array(G);
                          for (b = 0; b < G; b++, l++) O[b] = r[l];
                          (w += 17 + G),
                            ((L >> 4 == 0 ? y : d)[15 & L] = c(U, O));
                        }
                        break;
                      case 65501:
                        o(), (s = o());
                        break;
                      case 65498:
                        o();
                        var B,
                          N = r[l++],
                          F = [];
                        for (w = 0; w < N; w++) {
                          var V = a.componentIds[r[l++]];
                          B = a.components[V];
                          var z = r[l++];
                          (B.huffmanTableDC = y[z >> 4]),
                            (B.huffmanTableAC = d[15 & z]),
                            F.push(B);
                        }
                        var j = r[l++],
                          Z = r[l++],
                          W = r[l++],
                          J = p(r, l, a, F, s, j, Z, W >> 4, 15 & W);
                        l += J;
                        break;
                      case 65535:
                        255 !== r[l] && l--;
                        break;
                      default:
                        if (
                          255 === r[l - 3] &&
                          r[l - 2] >= 192 &&
                          r[l - 2] <= 254
                        ) {
                          l -= 3;
                          break;
                        }
                        throw new e('unknown marker ' + C.toString(16));
                    }
                    C = o();
                  }
                  for (
                    this.width = a.samplesPerLine,
                      this.height = a.scanLines,
                      this.jfif = h,
                      this.eof = l,
                      this.adobe = u,
                      this.components = [],
                      w = 0;
                    w < a.components.length;
                    w++
                  ) {
                    var H = f[(B = a.components[w]).quantizationId];
                    H && (B.quantizationTable = H),
                      this.components.push({
                        output: m(0, B),
                        scaleX: B.h / a.maxH,
                        scaleY: B.v / a.maxV,
                        blocksPerLine: B.blocksPerLine,
                        blocksPerColumn: B.blocksPerColumn,
                      });
                  }
                  this.numComponents = this.components.length;
                },
                _getLinearizedBlockData: function (e, t) {
                  var r,
                    o,
                    n,
                    i,
                    a,
                    s,
                    l,
                    h,
                    u,
                    c,
                    f,
                    p = this.width / e,
                    d = this.height / t,
                    m = 0,
                    g = this.components.length,
                    y = e * t * g,
                    C = new Uint8ClampedArray(y),
                    w = new Uint32Array(e),
                    b = 4294967288;
                  for (l = 0; l < g; l++) {
                    for (
                      o = (r = this.components[l]).scaleX * p,
                        n = r.scaleY * d,
                        m = l,
                        f = r.output,
                        i = (r.blocksPerLine + 1) << 3,
                        a = 0;
                      a < e;
                      a++
                    )
                      (h = 0 | (a * o)), (w[a] = ((h & b) << 3) | (7 & h));
                    for (s = 0; s < t; s++)
                      for (
                        c = (i * ((h = 0 | (s * n)) & b)) | ((7 & h) << 3),
                          a = 0;
                        a < e;
                        a++
                      )
                        (C[m] = f[c + w[a]]), (m += g);
                  }
                  var x = this.decodeTransform;
                  if (x)
                    for (l = 0; l < y; )
                      for (h = 0, u = 0; h < g; h++, l++, u += 2)
                        C[l] = ((C[l] * x[u]) >> 8) + x[u + 1];
                  return C;
                },
                _isColorConversionNeeded: function () {
                  return this.adobe
                    ? !!this.adobe.transformCode
                    : 3 === this.numComponents
                    ? 0 !== this.colorTransform
                    : 1 === this.colorTransform;
                },
                _convertYccToRgb: function (e) {
                  for (var t, r, o, n = 0, i = e.length; n < i; n += 3)
                    (t = e[n]),
                      (r = e[n + 1]),
                      (o = e[n + 2]),
                      (e[n] = t - 179.456 + 1.402 * o),
                      (e[n + 1] = t + 135.459 - 0.344 * r - 0.714 * o),
                      (e[n + 2] = t - 226.816 + 1.772 * r);
                  return e;
                },
                _convertYcckToRgb: function (e) {
                  for (
                    var t, r, o, n, i = 0, a = 0, s = e.length;
                    a < s;
                    a += 4
                  )
                    (t = e[a]),
                      (r = e[a + 1]),
                      (o = e[a + 2]),
                      (n = e[a + 3]),
                      (e[i++] =
                        r *
                          (-660635669420364e-19 * r +
                            0.000437130475926232 * o -
                            54080610064599e-18 * t +
                            0.00048449797120281 * n -
                            0.154362151871126) -
                        122.67195406894 +
                        o *
                          (-0.000957964378445773 * o +
                            0.000817076911346625 * t -
                            0.00477271405408747 * n +
                            1.53380253221734) +
                        t *
                          (0.000961250184130688 * t -
                            0.00266257332283933 * n +
                            0.48357088451265) +
                        n * (-0.000336197177618394 * n + 0.484791561490776)),
                      (e[i++] =
                        107.268039397724 +
                        r *
                          (219927104525741e-19 * r -
                            0.000640992018297945 * o +
                            0.000659397001245577 * t +
                            0.000426105652938837 * n -
                            0.176491792462875) +
                        o *
                          (-0.000778269941513683 * o +
                            0.00130872261408275 * t +
                            0.000770482631801132 * n -
                            0.151051492775562) +
                        t *
                          (0.00126935368114843 * t -
                            0.00265090189010898 * n +
                            0.25802910206845) +
                        n * (-0.000318913117588328 * n - 0.213742400323665)),
                      (e[i++] =
                        r *
                          (-0.000570115196973677 * r -
                            263409051004589e-19 * o +
                            0.0020741088115012 * t -
                            0.00288260236853442 * n +
                            0.814272968359295) -
                        20.810012546947 +
                        o *
                          (-153496057440975e-19 * o -
                            0.000132689043961446 * t +
                            0.000560833691242812 * n -
                            0.195152027534049) +
                        t *
                          (0.00174418132927582 * t -
                            0.00255243321439347 * n +
                            0.116935020465145) +
                        n * (-0.000343531996510555 * n + 0.24165260232407));
                  return e;
                },
                _convertYcckToCmyk: function (e) {
                  for (var t, r, o, n = 0, i = e.length; n < i; n += 4)
                    (t = e[n]),
                      (r = e[n + 1]),
                      (o = e[n + 2]),
                      (e[n] = 434.456 - t - 1.402 * o),
                      (e[n + 1] = 119.541 - t + 0.344 * r + 0.714 * o),
                      (e[n + 2] = 481.816 - t - 1.772 * r);
                  return e;
                },
                _convertCmykToRgb: function (e) {
                  for (
                    var t, r, o, n, i = 0, a = 1 / 255, s = 0, l = e.length;
                    s < l;
                    s += 4
                  )
                    (t = e[s] * a),
                      (r = e[s + 1] * a),
                      (o = e[s + 2] * a),
                      (n = e[s + 3] * a),
                      (e[i++] =
                        255 +
                        t *
                          (-4.387332384609988 * t +
                            54.48615194189176 * r +
                            18.82290502165302 * o +
                            212.25662451639585 * n -
                            285.2331026137004) +
                        r *
                          (1.7149763477362134 * r -
                            5.6096736904047315 * o -
                            17.873870861415444 * n -
                            5.497006427196366) +
                        o *
                          (-2.5217340131683033 * o -
                            21.248923337353073 * n +
                            17.5119270841813) -
                        n * (21.86122147463605 * n + 189.48180835922747)),
                      (e[i++] =
                        255 +
                        t *
                          (8.841041422036149 * t +
                            60.118027045597366 * r +
                            6.871425592049007 * o +
                            31.159100130055922 * n -
                            79.2970844816548) +
                        r *
                          (-15.310361306967817 * r +
                            17.575251261109482 * o +
                            131.35250912493976 * n -
                            190.9453302588951) +
                        o *
                          (4.444339102852739 * o +
                            9.8632861493405 * n -
                            24.86741582555878) -
                        n * (20.737325471181034 * n + 187.80453709719578)),
                      (e[i++] =
                        255 +
                        t *
                          (0.8842522430003296 * t +
                            8.078677503112928 * r +
                            30.89978309703729 * o -
                            0.23883238689178934 * n -
                            14.183576799673286) +
                        r *
                          (10.49593273432072 * r +
                            63.02378494754052 * o +
                            50.606957656360734 * n -
                            112.23884253719248) +
                        o *
                          (0.03296041114873217 * o +
                            115.60384449646641 * n -
                            193.58209356861505) -
                        n * (22.33816807309886 * n + 180.12613974708367));
                  return e;
                },
                getData: function (t, r, o) {
                  if (this.numComponents > 4)
                    throw new e('Unsupported color mode');
                  var n = this._getLinearizedBlockData(t, r);
                  if (1 === this.numComponents && o) {
                    for (
                      var i = n.length,
                        a = new Uint8ClampedArray(3 * i),
                        s = 0,
                        l = 0;
                      l < i;
                      l++
                    ) {
                      var h = n[l];
                      (a[s++] = h), (a[s++] = h), (a[s++] = h);
                    }
                    return a;
                  }
                  if (
                    3 === this.numComponents &&
                    this._isColorConversionNeeded()
                  )
                    return this._convertYccToRgb(n);
                  if (4 === this.numComponents) {
                    if (this._isColorConversionNeeded())
                      return o
                        ? this._convertYcckToRgb(n)
                        : this._convertYcckToCmyk(n);
                    if (o) return this._convertCmykToRgb(n);
                  }
                  return n;
                },
              }),
              u
            );
          })();
        }),
        void 0 !== (i = n()) && (o.exports = i);
      const s = a.exports;
    },
    80899: (e, t, r) => {
      r.d(t, { Z: () => s });
      var o,
        n,
        i,
        a = { exports: {} };
      (n = a),
        void 0 !==
          ((o = (function () {
            function e() {
              (this.pos = 0),
                (this.bufferLength = 0),
                (this.eof = !1),
                (this.buffer = null);
            }
            return (
              (e.prototype = {
                ensureBuffer: function (e) {
                  var t = this.buffer,
                    r = t ? t.byteLength : 0;
                  if (e < r) return t;
                  for (var o = 512; o < e; ) o <<= 1;
                  for (var n = new Uint8Array(o), i = 0; i < r; ++i)
                    n[i] = t[i];
                  return (this.buffer = n);
                },
                getByte: function () {
                  for (var e = this.pos; this.bufferLength <= e; ) {
                    if (this.eof) return null;
                    this.readBlock();
                  }
                  return this.buffer[this.pos++];
                },
                getBytes: function (e) {
                  var t = this.pos;
                  if (e) {
                    this.ensureBuffer(t + e);
                    for (var r = t + e; !this.eof && this.bufferLength < r; )
                      this.readBlock();
                    var o = this.bufferLength;
                    r > o && (r = o);
                  } else {
                    for (; !this.eof; ) this.readBlock();
                    r = this.bufferLength;
                  }
                  return (this.pos = r), this.buffer.subarray(t, r);
                },
                lookChar: function () {
                  for (var e = this.pos; this.bufferLength <= e; ) {
                    if (this.eof) return null;
                    this.readBlock();
                  }
                  return String.fromCharCode(this.buffer[this.pos]);
                },
                getChar: function () {
                  for (var e = this.pos; this.bufferLength <= e; ) {
                    if (this.eof) return null;
                    this.readBlock();
                  }
                  return String.fromCharCode(this.buffer[this.pos++]);
                },
                makeSubStream: function (e, t, r) {
                  for (var o = e + t; this.bufferLength <= o && !this.eof; )
                    this.readBlock();
                  return new Stream(this.buffer, e, t, r);
                },
                skip: function (e) {
                  e || (e = 1), (this.pos += e);
                },
                reset: function () {
                  this.pos = 0;
                },
              }),
              e
            );
          })()),
          (i = (function () {
            if (!self || !self.Uint32Array) return null;
            var e = new Uint32Array([
                16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1,
                15,
              ]),
              t = new Uint32Array([
                3, 4, 5, 6, 7, 8, 9, 10, 65547, 65549, 65551, 65553, 131091,
                131095, 131099, 131103, 196643, 196651, 196659, 196667, 262211,
                262227, 262243, 262259, 327811, 327843, 327875, 327907, 258,
                258, 258,
              ]),
              r = new Uint32Array([
                1, 2, 3, 4, 65541, 65543, 131081, 131085, 196625, 196633,
                262177, 262193, 327745, 327777, 393345, 393409, 459009, 459137,
                524801, 525057, 590849, 591361, 657409, 658433, 724993, 727041,
                794625, 798721, 868353, 876545,
              ]),
              n = [
                new Uint32Array([
                  459008, 524368, 524304, 524568, 459024, 524400, 524336,
                  590016, 459016, 524384, 524320, 589984, 524288, 524416,
                  524352, 590048, 459012, 524376, 524312, 589968, 459028,
                  524408, 524344, 590032, 459020, 524392, 524328, 59e4, 524296,
                  524424, 524360, 590064, 459010, 524372, 524308, 524572,
                  459026, 524404, 524340, 590024, 459018, 524388, 524324,
                  589992, 524292, 524420, 524356, 590056, 459014, 524380,
                  524316, 589976, 459030, 524412, 524348, 590040, 459022,
                  524396, 524332, 590008, 524300, 524428, 524364, 590072,
                  459009, 524370, 524306, 524570, 459025, 524402, 524338,
                  590020, 459017, 524386, 524322, 589988, 524290, 524418,
                  524354, 590052, 459013, 524378, 524314, 589972, 459029,
                  524410, 524346, 590036, 459021, 524394, 524330, 590004,
                  524298, 524426, 524362, 590068, 459011, 524374, 524310,
                  524574, 459027, 524406, 524342, 590028, 459019, 524390,
                  524326, 589996, 524294, 524422, 524358, 590060, 459015,
                  524382, 524318, 589980, 459031, 524414, 524350, 590044,
                  459023, 524398, 524334, 590012, 524302, 524430, 524366,
                  590076, 459008, 524369, 524305, 524569, 459024, 524401,
                  524337, 590018, 459016, 524385, 524321, 589986, 524289,
                  524417, 524353, 590050, 459012, 524377, 524313, 589970,
                  459028, 524409, 524345, 590034, 459020, 524393, 524329,
                  590002, 524297, 524425, 524361, 590066, 459010, 524373,
                  524309, 524573, 459026, 524405, 524341, 590026, 459018,
                  524389, 524325, 589994, 524293, 524421, 524357, 590058,
                  459014, 524381, 524317, 589978, 459030, 524413, 524349,
                  590042, 459022, 524397, 524333, 590010, 524301, 524429,
                  524365, 590074, 459009, 524371, 524307, 524571, 459025,
                  524403, 524339, 590022, 459017, 524387, 524323, 589990,
                  524291, 524419, 524355, 590054, 459013, 524379, 524315,
                  589974, 459029, 524411, 524347, 590038, 459021, 524395,
                  524331, 590006, 524299, 524427, 524363, 590070, 459011,
                  524375, 524311, 524575, 459027, 524407, 524343, 590030,
                  459019, 524391, 524327, 589998, 524295, 524423, 524359,
                  590062, 459015, 524383, 524319, 589982, 459031, 524415,
                  524351, 590046, 459023, 524399, 524335, 590014, 524303,
                  524431, 524367, 590078, 459008, 524368, 524304, 524568,
                  459024, 524400, 524336, 590017, 459016, 524384, 524320,
                  589985, 524288, 524416, 524352, 590049, 459012, 524376,
                  524312, 589969, 459028, 524408, 524344, 590033, 459020,
                  524392, 524328, 590001, 524296, 524424, 524360, 590065,
                  459010, 524372, 524308, 524572, 459026, 524404, 524340,
                  590025, 459018, 524388, 524324, 589993, 524292, 524420,
                  524356, 590057, 459014, 524380, 524316, 589977, 459030,
                  524412, 524348, 590041, 459022, 524396, 524332, 590009,
                  524300, 524428, 524364, 590073, 459009, 524370, 524306,
                  524570, 459025, 524402, 524338, 590021, 459017, 524386,
                  524322, 589989, 524290, 524418, 524354, 590053, 459013,
                  524378, 524314, 589973, 459029, 524410, 524346, 590037,
                  459021, 524394, 524330, 590005, 524298, 524426, 524362,
                  590069, 459011, 524374, 524310, 524574, 459027, 524406,
                  524342, 590029, 459019, 524390, 524326, 589997, 524294,
                  524422, 524358, 590061, 459015, 524382, 524318, 589981,
                  459031, 524414, 524350, 590045, 459023, 524398, 524334,
                  590013, 524302, 524430, 524366, 590077, 459008, 524369,
                  524305, 524569, 459024, 524401, 524337, 590019, 459016,
                  524385, 524321, 589987, 524289, 524417, 524353, 590051,
                  459012, 524377, 524313, 589971, 459028, 524409, 524345,
                  590035, 459020, 524393, 524329, 590003, 524297, 524425,
                  524361, 590067, 459010, 524373, 524309, 524573, 459026,
                  524405, 524341, 590027, 459018, 524389, 524325, 589995,
                  524293, 524421, 524357, 590059, 459014, 524381, 524317,
                  589979, 459030, 524413, 524349, 590043, 459022, 524397,
                  524333, 590011, 524301, 524429, 524365, 590075, 459009,
                  524371, 524307, 524571, 459025, 524403, 524339, 590023,
                  459017, 524387, 524323, 589991, 524291, 524419, 524355,
                  590055, 459013, 524379, 524315, 589975, 459029, 524411,
                  524347, 590039, 459021, 524395, 524331, 590007, 524299,
                  524427, 524363, 590071, 459011, 524375, 524311, 524575,
                  459027, 524407, 524343, 590031, 459019, 524391, 524327,
                  589999, 524295, 524423, 524359, 590063, 459015, 524383,
                  524319, 589983, 459031, 524415, 524351, 590047, 459023,
                  524399, 524335, 590015, 524303, 524431, 524367, 590079,
                ]),
                9,
              ],
              i = [
                new Uint32Array([
                  327680, 327696, 327688, 327704, 327684, 327700, 327692,
                  327708, 327682, 327698, 327690, 327706, 327686, 327702,
                  327694, 0, 327681, 327697, 327689, 327705, 327685, 327701,
                  327693, 327709, 327683, 327699, 327691, 327707, 327687,
                  327703, 327695, 0,
                ]),
                5,
              ];
            function a(e) {
              throw new Error(e);
            }
            function s(e) {
              var t = 0,
                r = e[t++],
                n = e[t++];
              (-1 != r && -1 != n) || a('Invalid header in flate stream'),
                8 != (15 & r) &&
                  a('Unknown compression method in flate stream'),
                ((r << 8) + n) % 31 != 0 && a('Bad FCHECK in flate stream'),
                32 & n && a('FDICT bit set in flate stream'),
                (this.bytes = e),
                (this.bytesPos = 2),
                (this.codeSize = 0),
                (this.codeBuf = 0),
                o.call(this);
            }
            return (
              (s.prototype = Object.create(o.prototype)),
              (s.prototype.getBits = function (e) {
                for (
                  var t,
                    r = this.codeSize,
                    o = this.codeBuf,
                    n = this.bytes,
                    i = this.bytesPos;
                  r < e;

                )
                  void 0 === (t = n[i++]) && a('Bad encoding in flate stream'),
                    (o |= t << r),
                    (r += 8);
                return (
                  (t = o & ((1 << e) - 1)),
                  (this.codeBuf = o >> e),
                  (this.codeSize = r -= e),
                  (this.bytesPos = i),
                  t
                );
              }),
              (s.prototype.getCode = function (e) {
                for (
                  var t = e[0],
                    r = e[1],
                    o = this.codeSize,
                    n = this.codeBuf,
                    i = this.bytes,
                    s = this.bytesPos;
                  o < r;

                ) {
                  var l;
                  void 0 === (l = i[s++]) && a('Bad encoding in flate stream'),
                    (n |= l << o),
                    (o += 8);
                }
                var h = t[n & ((1 << r) - 1)],
                  u = h >> 16,
                  c = 65535 & h;
                return (
                  (0 == o || o < u || 0 == u) &&
                    a('Bad encoding in flate stream'),
                  (this.codeBuf = n >> u),
                  (this.codeSize = o - u),
                  (this.bytesPos = s),
                  c
                );
              }),
              (s.prototype.generateHuffmanTable = function (e) {
                for (var t = e.length, r = 0, o = 0; o < t; ++o)
                  e[o] > r && (r = e[o]);
                for (
                  var n = 1 << r, i = new Uint32Array(n), a = 1, s = 0, l = 2;
                  a <= r;
                  ++a, s <<= 1, l <<= 1
                )
                  for (var h = 0; h < t; ++h)
                    if (e[h] == a) {
                      var u = 0,
                        c = s;
                      for (o = 0; o < a; ++o)
                        (u = (u << 1) | (1 & c)), (c >>= 1);
                      for (o = u; o < n; o += l) i[o] = (a << 16) | h;
                      ++s;
                    }
                return [i, r];
              }),
              (s.prototype.readBlock = function () {
                function o(e, t, r, o, n) {
                  for (var i = e.getBits(r) + o; i-- > 0; ) t[d++] = n;
                }
                var s = this.getBits(3);
                if ((1 & s && (this.eof = !0), 0 != (s >>= 1))) {
                  var l, h;
                  if (1 == s) (l = n), (h = i);
                  else if (2 == s) {
                    for (
                      var u = this.getBits(5) + 257,
                        c = this.getBits(5) + 1,
                        f = this.getBits(4) + 4,
                        p = Array(e.length),
                        d = 0;
                      d < f;

                    )
                      p[e[d++]] = this.getBits(3);
                    for (
                      var m = this.generateHuffmanTable(p),
                        g = 0,
                        y = ((d = 0), u + c),
                        C = new Array(y);
                      d < y;

                    ) {
                      var w = this.getCode(m);
                      16 == w
                        ? o(this, C, 2, 3, g)
                        : 17 == w
                        ? o(this, C, 3, 3, (g = 0))
                        : 18 == w
                        ? o(this, C, 7, 11, (g = 0))
                        : (C[d++] = g = w);
                    }
                    (l = this.generateHuffmanTable(C.slice(0, u))),
                      (h = this.generateHuffmanTable(C.slice(u, y)));
                  } else a('Unknown block type in flate stream');
                  for (
                    var b = (E = this.buffer) ? E.length : 0,
                      x = this.bufferLength;
                    ;

                  ) {
                    var v = this.getCode(l);
                    if (v < 256)
                      x + 1 >= b && (b = (E = this.ensureBuffer(x + 1)).length),
                        (E[x++] = v);
                    else {
                      if (256 == v) return void (this.bufferLength = x);
                      var T = (v = t[(v -= 257)]) >> 16;
                      T > 0 && (T = this.getBits(T)),
                        (g = (65535 & v) + T),
                        (v = this.getCode(h)),
                        (T = (v = r[v]) >> 16) > 0 && (T = this.getBits(T));
                      var k = (65535 & v) + T;
                      x + g >= b && (b = (E = this.ensureBuffer(x + g)).length);
                      for (var S = 0; S < g; ++S, ++x) E[x] = E[x - k];
                    }
                  }
                } else {
                  var A,
                    I = this.bytes,
                    P = this.bytesPos;
                  void 0 === (A = I[P++]) &&
                    a('Bad block header in flate stream');
                  var M = A;
                  void 0 === (A = I[P++]) &&
                    a('Bad block header in flate stream'),
                    (M |= A << 8),
                    void 0 === (A = I[P++]) &&
                      a('Bad block header in flate stream');
                  var R = A;
                  void 0 === (A = I[P++]) &&
                    a('Bad block header in flate stream'),
                    (R |= A << 8) != (65535 & ~M) &&
                      a('Bad uncompressed block length in flate stream'),
                    (this.codeBuf = 0),
                    (this.codeSize = 0);
                  var D = this.bufferLength,
                    E = this.ensureBuffer(D + M),
                    _ = D + M;
                  this.bufferLength = _;
                  for (var L = D; L < _; ++L) {
                    if (void 0 === (A = I[P++])) {
                      this.eof = !0;
                      break;
                    }
                    E[L] = A;
                  }
                  this.bytesPos = P;
                }
              }),
              s
            );
          })())) && (n.exports = i);
      const s = a.exports;
    },
    3892: (e, t, r) => {
      function o(e) {
        return 'h' in e && 's' in e && 'v' in e;
      }
      function n(e) {
        return 'l' in e && 'a' in e && 'b' in e;
      }
      function i(e) {
        return 'l' in e && 'c' in e && 'h' in e;
      }
      r.d(t, { _Y: () => d, Y3: () => m, sJ: () => g, xr: () => p });
      const a = [
          [0.4124, 0.3576, 0.1805],
          [0.2126, 0.7152, 0.0722],
          [0.0193, 0.1192, 0.9505],
        ],
        s = [
          [3.2406, -1.5372, -0.4986],
          [-0.9689, 1.8758, 0.0415],
          [0.0557, -0.204, 1.057],
        ];
      function l(e, t) {
        const r = [];
        let o, n;
        if (e[0].length !== t.length) throw 'dimensions do not match';
        const i = e.length,
          a = e[0].length;
        let s = 0;
        for (o = 0; o < i; o++) {
          for (s = 0, n = 0; n < a; n++) s += e[o][n] * t[n];
          r.push(s);
        }
        return r;
      }
      function h(e) {
        const t = [e.r / 255, e.g / 255, e.b / 255].map((e) =>
            e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4,
          ),
          r = l(a, t);
        return { x: 100 * r[0], y: 100 * r[1], z: 100 * r[2] };
      }
      function u(e) {
        const t = l(s, [e.x / 100, e.y / 100, e.z / 100]).map((e) => {
          const t = e <= 0.0031308 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - 0.055;
          return Math.min(1, Math.max(t, 0));
        });
        return {
          r: Math.round(255 * t[0]),
          g: Math.round(255 * t[1]),
          b: Math.round(255 * t[2]),
        };
      }
      function c(e) {
        const t = [e.x / 95.047, e.y / 100, e.z / 108.883].map((e) =>
          e > (6 / 29) ** 3
            ? e ** (1 / 3)
            : (1 / 3) * (29 / 6) ** 2 * e + 4 / 29,
        );
        return {
          l: 116 * t[1] - 16,
          a: 500 * (t[0] - t[1]),
          b: 200 * (t[1] - t[2]),
        };
      }
      function f(e) {
        const t = e.l,
          r = [
            (t + 16) / 116 + e.a / 500,
            (t + 16) / 116,
            (t + 16) / 116 - e.b / 200,
          ].map((e) =>
            e > 6 / 29 ? e ** 3 : 3 * (6 / 29) ** 2 * (e - 4 / 29),
          );
        return { x: 95.047 * r[0], y: 100 * r[1], z: 108.883 * r[2] };
      }
      function p(e) {
        return 'r' in (t = e) && 'g' in t && 'b' in t
          ? e
          : i(e)
          ? (function (e) {
              return u(
                f(
                  (function (e) {
                    const t = e.l,
                      r = e.c,
                      o = e.h;
                    return { l: t, a: r * Math.cos(o), b: r * Math.sin(o) };
                  })(e),
                ),
              );
            })(e)
          : n(e)
          ? (function (e) {
              return u(f(e));
            })(e)
          : (function (e) {
              return 'x' in e && 'y' in e && 'z' in e;
            })(e)
          ? u(e)
          : o(e)
          ? (function (e) {
              const t = ((e.h + 360) % 360) / 60,
                r = e.s / 100,
                o = (e.v / 100) * 255,
                n = o * r,
                i = n * (1 - Math.abs((t % 2) - 1));
              let a;
              switch (Math.floor(t)) {
                case 0:
                  a = { r: n, g: i, b: 0 };
                  break;
                case 1:
                  a = { r: i, g: n, b: 0 };
                  break;
                case 2:
                  a = { r: 0, g: n, b: i };
                  break;
                case 3:
                  a = { r: 0, g: i, b: n };
                  break;
                case 4:
                  a = { r: i, g: 0, b: n };
                  break;
                case 5:
                case 6:
                  a = { r: n, g: 0, b: i };
                  break;
                default:
                  a = { r: 0, g: 0, b: 0 };
              }
              return (
                (a.r = Math.round(a.r + o - n)),
                (a.g = Math.round(a.g + o - n)),
                (a.b = Math.round(a.b + o - n)),
                a
              );
            })(e)
          : e;
        var t;
      }
      function d(e) {
        return o(e)
          ? e
          : (function (e) {
              const t = e.r,
                r = e.g,
                o = e.b,
                n = Math.max(t, r, o),
                i = n - Math.min(t, r, o);
              let a = n,
                s =
                  0 === i
                    ? 0
                    : n === t
                    ? ((r - o) / i) % 6
                    : n === r
                    ? (o - t) / i + 2
                    : (t - r) / i + 4,
                l = 0 === i ? 0 : i / a;
              return (
                s < 0 && (s += 6),
                (s *= 60),
                (l *= 100),
                (a *= 100 / 255),
                { h: s, s: l, v: a }
              );
            })(p(e));
      }
      function m(e) {
        return n(e)
          ? e
          : (function (e) {
              return c(h(e));
            })(p(e));
      }
      function g(e) {
        return i(e)
          ? e
          : (function (e) {
              return (function (e) {
                const t = e.l,
                  r = e.a,
                  o = e.b,
                  n = Math.sqrt(r * r + o * o);
                let i = Math.atan2(o, r);
                return (i = i > 0 ? i : i + 2 * Math.PI), { l: t, c: n, h: i };
              })(c(h(e)));
            })(p(e));
      }
    },
    54163: (e, t, r) => {
      r.d(t, { Z: () => m });
      var o,
        n = r(43697),
        i = (r(80442), r(20102)),
        a = r(96674),
        s = r(22974),
        l = r(92604),
        h = r(70586),
        u = r(5600),
        c = r(90578),
        f = r(52011);
      const p = l.Z.getLogger('esri.layers.support.PixelBlock');
      let d = (o = class extends a.wq {
        constructor(e) {
          super(e),
            (this.width = null),
            (this.height = null),
            (this.pixelType = 'f32'),
            (this.validPixelCount = null),
            (this.mask = null),
            (this.maskIsAlpha = !1),
            (this.pixels = null),
            (this.statistics = null);
        }
        static createEmptyBand(e, t) {
          return new (o.getPixelArrayConstructor(e))(t);
        }
        static getPixelArrayConstructor(e) {
          let t;
          switch (e) {
            case 'u1':
            case 'u2':
            case 'u4':
            case 'u8':
              t = Uint8Array;
              break;
            case 'u16':
              t = Uint16Array;
              break;
            case 'u32':
              t = Uint32Array;
              break;
            case 's8':
              t = Int8Array;
              break;
            case 's16':
              t = Int16Array;
              break;
            case 's32':
              t = Int32Array;
              break;
            case 'f32':
            case 'c64':
            case 'c128':
            case 'unknown':
              t = Float32Array;
              break;
            case 'f64':
              t = Float64Array;
          }
          return t;
        }
        castPixelType(e) {
          if (!e) return 'f32';
          let t = e.toLowerCase();
          return (
            ['u1', 'u2', 'u4'].indexOf(t) > -1
              ? (t = 'u8')
              : -1 ===
                  [
                    'unknown',
                    'u8',
                    's8',
                    'u16',
                    's16',
                    'u32',
                    's32',
                    'f32',
                    'f64',
                  ].indexOf(t) && (t = 'f32'),
            t
          );
        }
        getPlaneCount() {
          return this.pixels && this.pixels.length;
        }
        addData(e) {
          if (!e.pixels || e.pixels.length !== this.width * this.height)
            throw new i.Z(
              'pixelblock:invalid-or-missing-pixels',
              'add data requires valid pixels array that has same length defined by pixel block width * height',
            );
          this.pixels || (this.pixels = []),
            this.statistics || (this.statistics = []),
            this.pixels.push(e.pixels),
            this.statistics.push(
              e.statistics || { minValue: null, maxValue: null },
            );
        }
        getAsRGBA() {
          const e = new ArrayBuffer(this.width * this.height * 4);
          switch (this.pixelType) {
            case 's8':
            case 's16':
            case 'u16':
            case 's32':
            case 'u32':
            case 'f32':
            case 'f64':
              this._fillFromNon8Bit(e);
              break;
            default:
              this._fillFrom8Bit(e);
          }
          return new Uint8ClampedArray(e);
        }
        getAsRGBAFloat() {
          const e = new Float32Array(this.width * this.height * 4);
          return this._fillFrom32Bit(e), e;
        }
        updateStatistics() {
          this.statistics = this.pixels.map((e) =>
            this._calculateBandStatistics(e, this.mask),
          );
          const e = this.mask;
          let t = 0;
          if (e) for (let r = 0; r < e.length; r++) e[r] && t++;
          else t = this.width * this.height;
          this.validPixelCount = t;
        }
        clamp(e) {
          if (!e || 'f64' === e || 'f32' === e) return;
          let t;
          switch (e) {
            case 'u8':
              t = [0, 255];
              break;
            case 'u16':
              t = [0, 65535];
              break;
            case 'u32':
              t = [0, 4294967295];
              break;
            case 's8':
              t = [-128, 127];
              break;
            case 's16':
              t = [-32768, 32767];
              break;
            case 's32':
              t = [-2147483648, 2147483647];
              break;
            default:
              t = [-34e38, 34e38];
          }
          const [r, n] = t,
            i = this.pixels,
            a = this.width * this.height,
            s = i.length;
          let l, h, u;
          const c = [];
          for (let t = 0; t < s; t++) {
            (u = o.createEmptyBand(e, a)), (l = i[t]);
            for (let e = 0; e < a; e++)
              (h = l[e]), (u[e] = h > n ? n : h < r ? r : h);
            c.push(u);
          }
          (this.pixels = c), (this.pixelType = e);
        }
        extractBands(e) {
          if (
            (0, h.Wi)(e) ||
            0 === e.length ||
            null == this.pixels ||
            0 === this.pixels.length
          )
            return this;
          const t = this.pixels.length,
            r = e.some((e) => e >= this.pixels.length),
            n = t === e.length && !e.some((e, t) => e !== t);
          return r || n
            ? this
            : new o({
                pixelType: this.pixelType,
                width: this.width,
                height: this.height,
                mask: this.mask,
                validPixelCount: this.validPixelCount,
                maskIsAlpha: this.maskIsAlpha,
                pixels: e.map((e) => this.pixels[e]),
                statistics: this.statistics && e.map((e) => this.statistics[e]),
              });
        }
        clone() {
          const e = new o({
            width: this.width,
            height: this.height,
            pixelType: this.pixelType,
            maskIsAlpha: this.maskIsAlpha,
            validPixelCount: this.validPixelCount,
          });
          let t;
          this.mask &&
            (this.mask instanceof Uint8Array
              ? (e.mask = new Uint8Array(this.mask))
              : (e.mask = this.mask.slice(0)));
          const r = o.getPixelArrayConstructor(this.pixelType);
          if (this.pixels && this.pixels.length > 0) {
            e.pixels = [];
            const o = this.pixels[0].slice;
            for (t = 0; t < this.pixels.length; t++)
              e.pixels[t] = o
                ? this.pixels[t].slice(0, this.pixels[t].length)
                : new r(this.pixels[t]);
          }
          if (this.statistics)
            for (e.statistics = [], t = 0; t < this.statistics.length; t++)
              e.statistics[t] = (0, s.d9)(this.statistics[t]);
          return e;
        }
        _fillFrom8Bit(e) {
          const { mask: t, maskIsAlpha: r, pixels: o } = this;
          if (!e || !o || !o.length)
            return void p.error(
              'getAsRGBA()',
              'Unable to convert to RGBA. The input pixel block is empty.',
            );
          let n, i, a, s;
          (n = i = a = o[0]),
            o.length >= 3
              ? ((i = o[1]), (a = o[2]))
              : 2 === o.length && (i = o[1]);
          const l = new Uint32Array(e),
            h = this.width * this.height;
          if (n.length === h)
            if (t && t.length === h)
              if (r)
                for (s = 0; s < h; s++)
                  t[s] &&
                    (l[s] = (t[s] << 24) | (a[s] << 16) | (i[s] << 8) | n[s]);
              else
                for (s = 0; s < h; s++)
                  t[s] &&
                    (l[s] = (255 << 24) | (a[s] << 16) | (i[s] << 8) | n[s]);
            else
              for (s = 0; s < h; s++)
                l[s] = (255 << 24) | (a[s] << 16) | (i[s] << 8) | n[s];
          else
            p.error(
              'getAsRGBA()',
              'Unable to convert to RGBA. The pixelblock is invalid.',
            );
        }
        _fillFromNon8Bit(e) {
          const { pixels: t, mask: r, statistics: o } = this;
          if (!e || !t || !t.length)
            return void p.error(
              'getAsRGBA()',
              'Unable to convert to RGBA. The input pixel block is empty.',
            );
          const n = this.pixelType;
          let i = 1,
            a = 0,
            s = 1;
          if (o && o.length > 0)
            (a = o.map((e) => e.minValue).reduce((e, t) => Math.min(e, t))),
              (s = o
                .map((e) => e.maxValue - e.minValue)
                .reduce((e, t) => Math.max(e, t))),
              (i = 255 / s);
          else {
            let e = 255;
            's8' === n
              ? ((a = -128), (e = 127))
              : 'u16' === n
              ? (e = 65535)
              : 's16' === n
              ? ((a = -32768), (e = 32767))
              : 'u32' === n
              ? (e = 4294967295)
              : 's32' === n
              ? ((a = -2147483648), (e = 2147483647))
              : 'f32' === n
              ? ((a = -34e38), (e = 34e38))
              : 'f64' === n &&
                ((a = -Number.MAX_VALUE), (e = Number.MAX_VALUE)),
              (i = 255 / (e - a));
          }
          const l = new Uint32Array(e),
            h = this.width * this.height;
          let u, c, f, d, m;
          if (((u = c = f = t[0]), u.length !== h))
            return p.error(
              'getAsRGBA()',
              'Unable to convert to RGBA. The pixelblock is invalid.',
            );
          if (t.length >= 2)
            if (((c = t[1]), t.length >= 3 && (f = t[2]), r && r.length === h))
              for (d = 0; d < h; d++)
                r[d] &&
                  (l[d] =
                    (255 << 24) |
                    (((f[d] - a) * i) << 16) |
                    (((c[d] - a) * i) << 8) |
                    ((u[d] - a) * i));
            else
              for (d = 0; d < h; d++)
                l[d] =
                  (255 << 24) |
                  (((f[d] - a) * i) << 16) |
                  (((c[d] - a) * i) << 8) |
                  ((u[d] - a) * i);
          else if (r && r.length === h)
            for (d = 0; d < h; d++)
              (m = (u[d] - a) * i),
                r[d] && (l[d] = (255 << 24) | (m << 16) | (m << 8) | m);
          else
            for (d = 0; d < h; d++)
              (m = (u[d] - a) * i),
                (l[d] = (255 << 24) | (m << 16) | (m << 8) | m);
        }
        _fillFrom32Bit(e) {
          const { pixels: t, mask: r } = this;
          if (!e || !t || !t.length)
            return p.error(
              'getAsRGBAFloat()',
              'Unable to convert to RGBA. The input pixel block is empty.',
            );
          let o, n, i, a;
          (o = n = i = t[0]),
            t.length >= 3
              ? ((n = t[1]), (i = t[2]))
              : 2 === t.length && (n = t[1]);
          const s = this.width * this.height;
          if (o.length !== s)
            return p.error(
              'getAsRGBAFloat()',
              'Unable to convert to RGBA. The pixelblock is invalid.',
            );
          let l = 0;
          if (r && r.length === s)
            for (a = 0; a < s; a++)
              (e[l++] = o[a]),
                (e[l++] = n[a]),
                (e[l++] = i[a]),
                (e[l++] = 1 & r[a]);
          else
            for (a = 0; a < s; a++)
              (e[l++] = o[a]), (e[l++] = n[a]), (e[l++] = i[a]), (e[l++] = 1);
        }
        _calculateBandStatistics(e, t) {
          let r = 1 / 0,
            o = -1 / 0;
          const n = e.length;
          let i,
            a = 0;
          if (t)
            for (i = 0; i < n; i++)
              t[i] && ((a = e[i]), (r = a < r ? a : r), (o = a > o ? a : o));
          else
            for (i = 0; i < n; i++)
              (a = e[i]), (r = a < r ? a : r), (o = a > o ? a : o);
          return { minValue: r, maxValue: o };
        }
      });
      (0, n._)(
        [(0, u.Cb)({ json: { write: !0 } })],
        d.prototype,
        'width',
        void 0,
      ),
        (0, n._)(
          [(0, u.Cb)({ json: { write: !0 } })],
          d.prototype,
          'height',
          void 0,
        ),
        (0, n._)(
          [(0, u.Cb)({ json: { write: !0 } })],
          d.prototype,
          'pixelType',
          void 0,
        ),
        (0, n._)([(0, c.p)('pixelType')], d.prototype, 'castPixelType', null),
        (0, n._)(
          [(0, u.Cb)({ json: { write: !0 } })],
          d.prototype,
          'validPixelCount',
          void 0,
        ),
        (0, n._)(
          [(0, u.Cb)({ json: { write: !0 } })],
          d.prototype,
          'mask',
          void 0,
        ),
        (0, n._)(
          [(0, u.Cb)({ json: { write: !0 } })],
          d.prototype,
          'maskIsAlpha',
          void 0,
        ),
        (0, n._)(
          [(0, u.Cb)({ json: { write: !0 } })],
          d.prototype,
          'pixels',
          void 0,
        ),
        (0, n._)(
          [(0, u.Cb)({ json: { write: !0 } })],
          d.prototype,
          'statistics',
          void 0,
        ),
        (d = o = (0, n._)([(0, f.j)('esri.layers.support.PixelBlock')], d));
      const m = d;
    },
    48526: (e, t, r) => {
      r.d(t, { Z: () => f });
      var o = r(43697),
        n = r(96674),
        i = r(70586),
        a = r(5600),
        s = (r(67676), r(80442), r(75215), r(52011)),
        l = r(6570),
        h = r(82971),
        u = r(36679);
      let c = class extends n.wq {
        constructor(e) {
          super(e),
            (this.attributeTable = null),
            (this.bandCount = null),
            (this.colormap = null),
            (this.extent = null),
            (this.format = void 0),
            (this.height = null),
            (this.width = null),
            (this.histograms = null),
            (this.keyProperties = {}),
            (this.multidimensionalInfo = null),
            (this.noDataValue = null),
            (this.pixelSize = null),
            (this.pixelType = null),
            (this.isPseudoSpatialReference = !1),
            (this.spatialReference = null),
            (this.statistics = null),
            (this.storageInfo = null),
            (this.transform = null);
        }
        get dataType() {
          var e, t, r;
          const o =
            null !=
            (e =
              null == (t = this.keyProperties) || null == (r = t.DataType)
                ? void 0
                : r.toLowerCase())
              ? e
              : 'generic';
          return 'stdtime' === o ? 'standard-time' : o;
        }
        get nativeExtent() {
          return this._get('nativeExtent') || this.extent;
        }
        set nativeExtent(e) {
          e && this._set('nativeExtent', e);
        }
        get nativePixelSize() {
          if (!(0, i.pC)(this.transform) || !this.transform.affectsPixelSize)
            return this.pixelSize;
          const e = this.nativeExtent;
          return { x: e.width / this.width, y: e.height / this.height };
        }
      };
      (0, o._)(
        [(0, a.Cb)({ json: { write: !0 } })],
        c.prototype,
        'attributeTable',
        void 0,
      ),
        (0, o._)(
          [(0, a.Cb)({ json: { write: !0 } })],
          c.prototype,
          'bandCount',
          void 0,
        ),
        (0, o._)(
          [(0, a.Cb)({ json: { write: !0 } })],
          c.prototype,
          'colormap',
          void 0,
        ),
        (0, o._)(
          [(0, a.Cb)({ type: String, readOnly: !0 })],
          c.prototype,
          'dataType',
          null,
        ),
        (0, o._)(
          [(0, a.Cb)({ type: l.Z, json: { write: !0 } })],
          c.prototype,
          'extent',
          void 0,
        ),
        (0, o._)(
          [(0, a.Cb)({ type: l.Z, json: { write: !0 } })],
          c.prototype,
          'nativeExtent',
          null,
        ),
        (0, o._)(
          [(0, a.Cb)({ json: { write: !0 } })],
          c.prototype,
          'nativePixelSize',
          null,
        ),
        (0, o._)(
          [(0, a.Cb)({ json: { write: !0 } })],
          c.prototype,
          'format',
          void 0,
        ),
        (0, o._)(
          [(0, a.Cb)({ json: { write: !0 } })],
          c.prototype,
          'height',
          void 0,
        ),
        (0, o._)(
          [(0, a.Cb)({ json: { write: !0 } })],
          c.prototype,
          'width',
          void 0,
        ),
        (0, o._)(
          [(0, a.Cb)({ json: { write: !0 } })],
          c.prototype,
          'histograms',
          void 0,
        ),
        (0, o._)(
          [(0, a.Cb)({ json: { write: !0 } })],
          c.prototype,
          'keyProperties',
          void 0,
        ),
        (0, o._)(
          [(0, a.Cb)({ json: { write: !0 } })],
          c.prototype,
          'multidimensionalInfo',
          void 0,
        ),
        (0, o._)([(0, a.Cb)()], c.prototype, 'noDataValue', void 0),
        (0, o._)(
          [(0, a.Cb)({ json: { write: !0 } })],
          c.prototype,
          'pixelSize',
          void 0,
        ),
        (0, o._)(
          [(0, a.Cb)({ json: { write: !0 } })],
          c.prototype,
          'pixelType',
          void 0,
        ),
        (0, o._)(
          [(0, a.Cb)()],
          c.prototype,
          'isPseudoSpatialReference',
          void 0,
        ),
        (0, o._)(
          [(0, a.Cb)({ type: h.Z, json: { write: !0 } })],
          c.prototype,
          'spatialReference',
          void 0,
        ),
        (0, o._)(
          [(0, a.Cb)({ json: { write: !0 } })],
          c.prototype,
          'statistics',
          void 0,
        ),
        (0, o._)(
          [(0, a.Cb)({ type: u.Z, json: { write: !0 } })],
          c.prototype,
          'storageInfo',
          void 0,
        ),
        (0, o._)(
          [(0, a.Cb)({ json: { write: !0 } })],
          c.prototype,
          'transform',
          void 0,
        ),
        (c = (0, o._)([(0, s.j)('esri.layers.support.RasterInfo')], c));
      const f = c;
    },
    36679: (e, t, r) => {
      r.d(t, { Z: () => h });
      var o = r(43697),
        n = r(96674),
        i = r(5600),
        a = (r(67676), r(80442), r(75215), r(52011)),
        s = r(13473);
      let l = class extends n.wq {
        constructor() {
          super(...arguments),
            (this.blockWidth = void 0),
            (this.blockHeight = void 0),
            (this.compression = null),
            (this.origin = null),
            (this.firstPyramidLevel = null),
            (this.maximumPyramidLevel = null),
            (this.pyramidScalingFactor = 2),
            (this.pyramidBlockWidth = null),
            (this.pyramidBlockHeight = null),
            (this.isVirtualTileInfo = !1),
            (this.tileInfo = null),
            (this.blockBoundary = null);
        }
      };
      (0, o._)(
        [(0, i.Cb)({ type: Number, json: { write: !0 } })],
        l.prototype,
        'blockWidth',
        void 0,
      ),
        (0, o._)(
          [(0, i.Cb)({ type: Number, json: { write: !0 } })],
          l.prototype,
          'blockHeight',
          void 0,
        ),
        (0, o._)(
          [(0, i.Cb)({ type: String, json: { write: !0 } })],
          l.prototype,
          'compression',
          void 0,
        ),
        (0, o._)(
          [(0, i.Cb)({ type: s.Z, json: { write: !0 } })],
          l.prototype,
          'origin',
          void 0,
        ),
        (0, o._)(
          [(0, i.Cb)({ type: Number, json: { write: !0 } })],
          l.prototype,
          'firstPyramidLevel',
          void 0,
        ),
        (0, o._)(
          [(0, i.Cb)({ type: Number, json: { write: !0 } })],
          l.prototype,
          'maximumPyramidLevel',
          void 0,
        ),
        (0, o._)(
          [(0, i.Cb)({ json: { write: !0 } })],
          l.prototype,
          'pyramidResolutions',
          void 0,
        ),
        (0, o._)(
          [(0, i.Cb)({ type: Number, json: { write: !0 } })],
          l.prototype,
          'pyramidScalingFactor',
          void 0,
        ),
        (0, o._)(
          [(0, i.Cb)({ type: Number, json: { write: !0 } })],
          l.prototype,
          'pyramidBlockWidth',
          void 0,
        ),
        (0, o._)(
          [(0, i.Cb)({ type: Number, json: { write: !0 } })],
          l.prototype,
          'pyramidBlockHeight',
          void 0,
        ),
        (0, o._)(
          [(0, i.Cb)({ type: Boolean, json: { write: !0 } })],
          l.prototype,
          'isVirtualTileInfo',
          void 0,
        ),
        (0, o._)(
          [(0, i.Cb)({ json: { write: !0 } })],
          l.prototype,
          'tileInfo',
          void 0,
        ),
        (0, o._)([(0, i.Cb)()], l.prototype, 'blockBoundary', void 0),
        (l = (0, o._)([(0, a.j)('esri.layers.support.RasterStorageInfo')], l));
      const h = l;
    },
    20095: (e, t, r) => {
      function o(e, t) {
        let r = 0,
          o = '',
          n = 0,
          i = 0;
        const a = e.length;
        for (; r < a; )
          (i = e[r++]),
            (n = i >> 4),
            n < 8
              ? (n = 1)
              : 15 === n
              ? ((n = 4),
                (i =
                  ((7 & i) << 18) |
                  ((63 & e[r++]) << 12) |
                  ((63 & e[r++]) << 6) |
                  (63 & e[r++])))
              : 14 === n
              ? ((n = 3),
                (i = ((15 & i) << 12) | ((63 & e[r++]) << 6) | (63 & e[r++])))
              : ((n = 2), (i = ((31 & i) << 6) | (63 & e[r++]))),
            (0 !== i || t) && (o += String.fromCharCode(i));
        return o;
      }
      r.d(t, { f: () => o });
    },
    72955: (e, t, r) => {
      r.d(t, { Jx: () => u, zD: () => s });
      var o = r(99880);
      const n = [
        { pixelType: 'S8', size: 1, ctor: Int8Array, range: [-128, 128] },
        { pixelType: 'U8', size: 1, ctor: Uint8Array, range: [0, 255] },
        { pixelType: 'S16', size: 2, ctor: Int16Array, range: [-32768, 32767] },
        { pixelType: 'U16', size: 2, ctor: Uint16Array, range: [0, 65536] },
        {
          pixelType: 'S32',
          size: 4,
          ctor: Int32Array,
          range: [-2147483648, 2147483647],
        },
        {
          pixelType: 'U32',
          size: 4,
          ctor: Uint32Array,
          range: [0, 4294967296],
        },
        {
          pixelType: 'F32',
          size: 4,
          ctor: Float32Array,
          range: [-34027999387901484e22, 34027999387901484e22],
        },
        {
          pixelType: 'F64',
          size: 8,
          ctor: Float64Array,
          range: [-17976931348623157e292, 17976931348623157e292],
        },
      ];
      let i = null,
        a = null;
      function s() {
        return (
          i ||
          ((i = r
            .e(6233)
            .then(r.bind(r, 26233))
            .then((e) => e.l)
            .then(({ default: e }) =>
              e({
                locateFile: (e) =>
                  (0, o.V)(`esri/layers/support/rasterFormats/${e}`),
              }),
            )
            .then((e) => {
              (function (e) {
                const {
                  _malloc: t,
                  _free: r,
                  _lerc_getBlobInfo: o,
                  _lerc_getDataRanges: i,
                  _lerc_decode_4D: a,
                  asm: s,
                } = e;
                let h;
                const u = Object.values(s).find(
                    (t) => t && 'buffer' in t && t.buffer === e.HEAPU8.buffer,
                  ),
                  c = (e) => {
                    const r = e.map((e) =>
                        (function (e) {
                          return 16 + ((e >> 3) << 3);
                        })(e),
                      ),
                      o = r.reduce((e, t) => e + t),
                      n = t(o);
                    h = new Uint8Array(u.buffer);
                    let i = r[0];
                    r[0] = n;
                    for (let e = 1; e < r.length; e++) {
                      const t = r[e];
                      (r[e] = r[e - 1] + i), (i = t);
                    }
                    return r;
                  };
                (l.getBlobInfo = (e) => {
                  const t = new Uint8Array(48),
                    n = new Uint8Array(24),
                    [a, s, l] = c([e.length, t.length, n.length]);
                  h.set(e, a), h.set(t, s), h.set(n, l);
                  let f = o(a, e.length, s, l, 12, 3);
                  if (f) throw (r(a), `lerc-getBlobInfo: error code is ${f}`);
                  (h = new Uint8Array(u.buffer)),
                    t.set(h.slice(s, s + t.length)),
                    n.set(h.slice(l, l + n.length));
                  const p = new Uint32Array(t.buffer),
                    d = new Float64Array(n.buffer),
                    [m, g, y, C, w, b, x, v, T, , k] = p,
                    S = {
                      version: m,
                      dimCount: y,
                      width: C,
                      height: w,
                      validPixelCount: x,
                      bandCount: b,
                      blobSize: v,
                      maskCount: T,
                      dataType: g,
                      minValue: d[0],
                      maxValue: d[1],
                      maxZerror: d[2],
                      statistics: [],
                      bandCountWithNoData: k,
                    };
                  if (k) return S;
                  if (1 === y && 1 === b)
                    return (
                      r(a),
                      S.statistics.push({ minValue: d[0], maxValue: d[1] }),
                      S
                    );
                  const A = y * b * 8,
                    I = new Uint8Array(A),
                    P = new Uint8Array(A);
                  let M,
                    R = a,
                    D = 0,
                    E = !1;
                  if (
                    (h.byteLength < a + 2 * A
                      ? (r(a),
                        (E = !0),
                        ([R, D, M] = c([e.length, A, A])),
                        h.set(e, R))
                      : ([D, M] = c([A, A])),
                    h.set(I, D),
                    h.set(P, M),
                    (f = i(a, e.length, y, b, D, M)),
                    f)
                  )
                    throw (
                      (r(R),
                      E || r(D),
                      `lerc-getDataRanges: error code is ${f}`)
                    );
                  (h = new Uint8Array(u.buffer)),
                    I.set(h.slice(D, D + A)),
                    P.set(h.slice(M, M + A));
                  const _ = new Float64Array(I.buffer),
                    L = new Float64Array(P.buffer),
                    U = S.statistics;
                  for (let e = 0; e < b; e++)
                    if (y > 1) {
                      const t = _.slice(e * y, (e + 1) * y),
                        r = L.slice(e * y, (e + 1) * y),
                        o = Math.min.apply(null, t),
                        n = Math.max.apply(null, r);
                      U.push({
                        minValue: o,
                        maxValue: n,
                        dimStats: { minValues: t, maxValues: r },
                      });
                    } else U.push({ minValue: _[e], maxValue: L[e] });
                  return r(R), E || r(D), S;
                }),
                  (l.decode = (e, t) => {
                    const {
                        maskCount: o,
                        dimCount: i,
                        bandCount: s,
                        width: l,
                        height: f,
                        dataType: p,
                        bandCountWithNoData: d,
                      } = t,
                      m = n[p],
                      g = l * f,
                      y = new Uint8Array(g * s),
                      C = g * i * s * m.size,
                      w = new Uint8Array(C),
                      b = new Uint8Array(s),
                      x = 8 * s,
                      v = new Uint8Array(x),
                      [T, k, S, A, I] = c([
                        e.length,
                        y.length,
                        w.length,
                        b.length,
                        v.length,
                      ]);
                    h.set(e, T),
                      h.set(y, k),
                      h.set(w, S),
                      h.set(b, A),
                      h.set(v, I);
                    const P = a(T, e.length, o, k, i, l, f, s, p, S, A, I);
                    if (P) throw (r(T), `lerc-decode: error code is ${P}`);
                    (h = new Uint8Array(u.buffer)),
                      w.set(h.slice(S, S + C)),
                      y.set(h.slice(k, k + g));
                    let M = null;
                    if (d) {
                      b.set(h.slice(A, A + s)),
                        v.set(h.slice(I, I + x)),
                        (M = []);
                      for (let e = 0; e < b.length; e++)
                        M.push(b[e] ? v[e] : null);
                    }
                    return r(T), { data: w, maskData: y, noDataValues: M };
                  });
              })(e),
                (a = !0);
            })),
          i)
        );
      }
      const l = { getBlobInfo: null, decode: null };
      function h(e, t, r, o, n) {
        if (r < 2) return e;
        const i = new o(t * r);
        if (n)
          for (let o = 0, n = 0; o < t; o++)
            for (let a = 0, s = o; a < r; a++, s += t) i[s] = e[n++];
        else
          for (let o = 0, n = 0; o < t; o++)
            for (let a = 0, s = o; a < r; a++, s += t) i[n++] = e[s];
        return i;
      }
      function u(e, t = {}) {
        var r;
        const o = null != (r = t.inputOffset) ? r : 0,
          i = e instanceof Uint8Array ? e.subarray(o) : new Uint8Array(e, o),
          a = l.getBlobInfo(i),
          { data: s, maskData: u } = l.decode(i, a),
          {
            width: c,
            height: f,
            bandCount: p,
            dimCount: d,
            dataType: m,
            maskCount: g,
            statistics: y,
          } = a,
          C = n[m],
          w = new C.ctor(s.buffer),
          b = [],
          x = [],
          v = c * f,
          T = v * d;
        for (let e = 0; e < p; e++) {
          const r = w.subarray(e * T, (e + 1) * T);
          if (t.returnPixelInterleavedDims) b.push(r);
          else {
            const e = h(r, v, d, C.ctor, !0);
            b.push(e);
          }
          x.push(u.subarray(e * T, (e + 1) * T));
        }
        const k = 0 === g ? null : 1 === g ? x[0] : new Uint8Array(v);
        if (g > 1) {
          k.set(x[0]);
          for (let e = 1; e < x.length; e++) {
            const t = x[e];
            for (let e = 0; e < v; e++) k[e] = k[e] & t[e];
          }
        }
        const { noDataValue: S } = t,
          A = null != S && C.range[0] <= S && C.range[1] >= S;
        if (g > 0 && A) {
          const { noDataValue: e } = t;
          for (let t = 0; t < p; t++) {
            const r = b[t],
              o = x[t] || k;
            for (let t = 0; t < v; t++) 0 === o[t] && (r[t] = e);
          }
        }
        const I = g === p && p > 1 ? x : null;
        return {
          width: c,
          height: f,
          bandCount: p,
          pixelType: t.pixelType && 0 === a.version ? t.pixelType : C.pixelType,
          dimCount: d,
          statistics: y,
          pixels: b,
          mask: k,
          bandMasks: I,
        };
      }
    },
    88781: (e, t, r) => {
      function o() {
        const e = [];
        for (let t = 0; t <= 257; t++) e[t] = [t];
        return e;
      }
      function n(e, t) {
        for (let r = 0; r < t.length; r++) e.push(t[r]);
      }
      r.d(t, { J: () => a });
      const i = new Set();
      function a(e, t, r, a = !0) {
        const s = (function (e, t, r, o = !0) {
          if (t % 4 != 0 || r % 4 != 0) {
            const n = new ArrayBuffer(4 * Math.ceil(r / 4)),
              i = new Uint8Array(n),
              a = new Uint8Array(e, t, r);
            if (o)
              for (let e = 0; e < i.length; e += 4)
                (i[e] = a[e + 3]),
                  (i[e + 1] = a[e + 2]),
                  (i[e + 2] = a[e + 1]),
                  (i[e + 3] = a[e]);
            else i.set(a);
            return new Uint32Array(i.buffer);
          }
          if (o) {
            const o = new Uint8Array(e, t, r),
              n = new Uint8Array(o.length);
            for (let e = 0; e < n.length; e += 4)
              (n[e] = o[e + 3]),
                (n[e + 1] = o[e + 2]),
                (n[e + 2] = o[e + 1]),
                (n[e + 3] = o[e]);
            return new Uint32Array(n.buffer);
          }
          return new Uint32Array(e, t, r / 4);
        })(e, t, r, a);
        let l = 9,
          h = o(),
          u = 32,
          c = h.length,
          f = [],
          p = 1,
          d = s[0],
          m = 0;
        const g = s.length,
          y = 8 * (4 * g - r),
          C = [];
        for (; null != d; ) {
          if (u >= l) (u -= l), (m = d >>> (32 - l)), (d <<= l);
          else {
            (m = d >>> (32 - u)), (d = s[p++]);
            const e = l - u;
            (u = 32 - e), (m = (m << e) + (d >>> u)), (d <<= e);
          }
          if (257 === m) break;
          if (256 === m) {
            (l = 9), (h = o()), (c = h.length), (f = []);
            continue;
          }
          const e = h[m];
          if (null == e) {
            if (m > h.length)
              throw 'data integrity issue: code does not exist on code page';
            f.push(f[0]), (h[c++] = f.slice()), n(C, f);
          } else
            n(C, e),
              f.push(e[0]),
              f.length > 1 && (h[c++] = f.slice()),
              (f = e.slice());
          if (
            (i.has(c) && l++,
            0 === u && ((d = s[p++]), (u = 32)),
            p > g || (p === g && u <= y))
          )
            break;
        }
        return new Uint8Array(C);
      }
      i.add(511), i.add(1023), i.add(2047), i.add(4095), i.add(8191);
    },
    75993: (e, t, r) => {
      r.d(t, { J: () => M, y: () => P });
      var o = r(20102),
        n = r(54163),
        i = r(95330),
        a = r(80899);
      class s {
        constructor(e) {
          e &&
            ((this.canvas = e.canvas),
            (this.ctx = e.ctx || (e.canvas && e.canvas.getContext('2d'))));
        }
        decode(e, t, r) {
          if (!e || e.byteLength < 10)
            throw new o.Z(
              'imagecanvasdecoder: decode',
              'required a valid encoded data as input.',
            );
          let { width: n, height: a, format: l } = t;
          const { applyJpegMask: h } = t;
          if (h && (!n || !a))
            throw new o.Z(
              'imagecanvasdecoder: decode',
              'image width and height are needed to apply jpeg mask directly to canvas',
            );
          return new Promise((o, u) => {
            let c = null;
            'jpg' === l && h && (c = s._getMask(e, { width: n, height: a }));
            const f = new Blob([new Uint8Array(e)], {
                type: 'image/' + l == 'jpg' ? 'jpeg' : l,
              }),
              p = URL.createObjectURL(f),
              d = new Image();
            let m;
            (d.src = p),
              (d.onload = () => {
                if ((URL.revokeObjectURL(p), (0, i.Hc)(r)))
                  return void u((0, i.zE)());
                (n = d.width),
                  (a = d.height),
                  this.canvas
                    ? ((this.canvas.width === n && this.canvas.height === a) ||
                        ((this.canvas.width = n), (this.canvas.height = a)),
                      this.ctx.clearRect(0, 0, n, a))
                    : ((this.canvas = document.createElement('canvas')),
                      (this.canvas.width = n),
                      (this.canvas.height = a),
                      (this.ctx = this.canvas.getContext('2d'))),
                  this.ctx.drawImage(d, 0, 0);
                const e = this.ctx.getImageData(0, 0, n, a);
                let s;
                if (((m = e.data), t.renderOnCanvas)) {
                  if (c)
                    for (s = 0; s < c.length; s++)
                      c[s] ? (m[4 * s + 3] = 255) : (m[4 * s + 3] = 0);
                  return this.ctx.putImageData(e, 0, 0), void o(null);
                }
                const l = n * a,
                  h = new Uint8Array(l),
                  f = new Uint8Array(l),
                  g = new Uint8Array(l);
                if (c)
                  for (s = 0; s < l; s++)
                    (h[s] = m[4 * s]),
                      (f[s] = m[4 * s + 1]),
                      (g[s] = m[4 * s + 2]);
                else
                  for (c = new Uint8Array(l), s = 0; s < l; s++)
                    (h[s] = m[4 * s]),
                      (f[s] = m[4 * s + 1]),
                      (g[s] = m[4 * s + 2]),
                      (c[s] = m[4 * s + 3]);
                o({
                  width: n,
                  height: a,
                  pixels: [h, f, g],
                  mask: c,
                  pixelType: 'u8',
                });
              }),
              (d.onerror = () => {
                URL.revokeObjectURL(p), u('cannot load image');
              });
          });
        }
        static _getMask(e, t) {
          let r = null;
          try {
            const o = new Uint8Array(e),
              n = Math.ceil(o.length / 2);
            let i = 0;
            const s = o.length - 2;
            for (i = n; i < s && (255 !== o[i] || 217 !== o[i + 1]); i++);
            if (((i += 2), i < o.length - 1)) {
              const e = new a.Z(o.subarray(i)).getBytes();
              r = new Uint8Array(t.width * t.height);
              let n = 0;
              for (let t = 0; t < e.length; t++)
                for (let o = 7; o >= 0; o--) r[n++] = (e[t] >> o) & 1;
            }
          } catch (e) {}
          return r;
        }
      }
      var l = r(97575),
        h = r(72955),
        u = r(88781);
      const c = function (e, t) {
          const r = t.width * t.height,
            o = t.pixelType;
          return Math.floor(e.byteLength / (r * f(o)));
        },
        f = function (e) {
          let t = 1;
          switch (e) {
            case Uint8Array:
            case Int8Array:
              t = 1;
              break;
            case Uint16Array:
            case Int16Array:
              t = 2;
              break;
            case Uint32Array:
            case Int32Array:
            case Float32Array:
              t = 4;
              break;
            case Float64Array:
              t = 8;
          }
          return t;
        };
      class p {
        static decode(e, t) {
          const r = t.pixelType,
            o = [],
            n = t.width * t.height,
            i = c(e, t),
            { bandIds: a, format: s } = t,
            l = (a && a.length) || c(e, t),
            h = e.byteLength - (e.byteLength % (n * f(r))),
            u = new r(e, 0, n * i);
          let p, d, m, g, y;
          if ('bip' === s)
            for (p = 0; p < l; p++) {
              for (g = new r(n), y = a ? a[p] : p, d = 0; d < n; d++)
                g[d] = u[d * i + y];
              o.push(g);
            }
          else if ('bsq' === s)
            for (p = 0; p < l; p++)
              (y = a ? a[p] : p), o.push(u.subarray(y * n, (y + 1) * n));
          return (
            h < e.byteLength - 1 &&
              (m = (function (e, t) {
                if (8 * e.byteLength < t) return null;
                const r = new Uint8Array(e, 0, Math.ceil(t / 8)),
                  o = new Uint8Array(t);
                let n = 0,
                  i = 0,
                  a = 0,
                  s = 0;
                for (a = 0; a < r.length - 1; a++)
                  for (i = r[a], s = 7; s >= 0; s--) o[n++] = (i >> s) & 1;
                for (s = 7; n < t - 1; )
                  (i = r[r.length - 1]), (o[n++] = (i >> s) & 1), s--;
                return o;
              })(e.slice(h), n)),
            { pixels: o, mask: m }
          );
        }
      }
      var d = r(94793),
        m = r(48279),
        g = (function (e) {
          var t, r, o;
          function n(e) {
            var t, r, o, n, i, a, s, l, h, u, c, f, p;
            for (
              this.data = e,
                this.pos = 8,
                this.palette = [],
                this.imgData = [],
                this.transparency = {},
                this.animation = null,
                this.text = {},
                i = null;
              ;

            ) {
              switch (
                ((t = this.readUInt32()),
                (l = function () {
                  var e, t;
                  for (t = [], e = 0; e < 4; ++e)
                    t.push(String.fromCharCode(this.data[this.pos++]));
                  return t;
                }
                  .call(this)
                  .join('')),
                l)
              ) {
                case 'IHDR':
                  (this.width = this.readUInt32()),
                    (this.height = this.readUInt32()),
                    (this.bits = this.data[this.pos++]),
                    (this.colorType = this.data[this.pos++]),
                    (this.compressionMethod = this.data[this.pos++]),
                    (this.filterMethod = this.data[this.pos++]),
                    (this.interlaceMethod = this.data[this.pos++]);
                  break;
                case 'acTL':
                  this.animation = {
                    numFrames: this.readUInt32(),
                    numPlays: this.readUInt32() || 1 / 0,
                    frames: [],
                  };
                  break;
                case 'PLTE':
                  this.palette = this.read(t);
                  break;
                case 'fcTL':
                  i && this.animation.frames.push(i),
                    (this.pos += 4),
                    (i = {
                      width: this.readUInt32(),
                      height: this.readUInt32(),
                      xOffset: this.readUInt32(),
                      yOffset: this.readUInt32(),
                    }),
                    (n = this.readUInt16()),
                    (o = this.readUInt16() || 100),
                    (i.delay = (1e3 * n) / o),
                    (i.disposeOp = this.data[this.pos++]),
                    (i.blendOp = this.data[this.pos++]),
                    (i.data = []);
                  break;
                case 'IDAT':
                case 'fdAT':
                  for (
                    'fdAT' === l && ((this.pos += 4), (t -= 4)),
                      e = (null != i ? i.data : void 0) || this.imgData,
                      c = 0;
                    0 <= t ? c < t : c > t;
                    0 <= t ? ++c : --c
                  )
                    e.push(this.data[this.pos++]);
                  break;
                case 'tRNS':
                  switch (((this.transparency = {}), this.colorType)) {
                    case 3:
                      if (
                        ((this.transparency.indexed = this.read(t)),
                        (h = 255 - this.transparency.indexed.length) > 0)
                      )
                        for (f = 0; 0 <= h ? f < h : f > h; 0 <= h ? ++f : --f)
                          this.transparency.indexed.push(255);
                      break;
                    case 0:
                      this.transparency.grayscale = this.read(t)[0];
                      break;
                    case 2:
                      this.transparency.rgb = this.read(t);
                  }
                  break;
                case 'tEXt':
                  (a = (u = this.read(t)).indexOf(0)),
                    (s = String.fromCharCode.apply(String, u.slice(0, a))),
                    (this.text[s] = String.fromCharCode.apply(
                      String,
                      u.slice(a + 1),
                    ));
                  break;
                case 'IEND':
                  return (
                    i && this.animation.frames.push(i),
                    (this.colors = function () {
                      switch (this.colorType) {
                        case 0:
                        case 3:
                        case 4:
                          return 1;
                        case 2:
                        case 6:
                          return 3;
                      }
                    }.call(this)),
                    (this.hasAlphaChannel =
                      4 === (p = this.colorType) || 6 === p),
                    (r = this.colors + (this.hasAlphaChannel ? 1 : 0)),
                    (this.pixelBitlength = this.bits * r),
                    (this.colorSpace = function () {
                      switch (this.colors) {
                        case 1:
                          return 'DeviceGray';
                        case 3:
                          return 'DeviceRGB';
                      }
                    }.call(this)),
                    void (this.imgData = new Uint8Array(this.imgData))
                  );
                default:
                  this.pos += t;
              }
              if (((this.pos += 4), this.pos > this.data.length))
                throw new Error('Incomplete or corrupt PNG file');
            }
          }
          return (
            (n.load = function (e, t, r) {
              var o;
              return (
                'function' == typeof t && (r = t),
                (o = new XMLHttpRequest()).open('GET', e, !0),
                (o.responseType = 'arraybuffer'),
                (o.onload = function () {
                  var e;
                  return (
                    (e = new n(
                      new Uint8Array(o.response || o.mozResponseArrayBuffer),
                    )),
                    'function' == typeof (null != t ? t.getContext : void 0) &&
                      e.render(t),
                    'function' == typeof r ? r(e) : void 0
                  );
                }),
                o.send(null)
              );
            }),
            (n.prototype.read = function (e) {
              var t, r;
              for (r = [], t = 0; 0 <= e ? t < e : t > e; 0 <= e ? ++t : --t)
                r.push(this.data[this.pos++]);
              return r;
            }),
            (n.prototype.readUInt32 = function () {
              return (
                (this.data[this.pos++] << 24) |
                (this.data[this.pos++] << 16) |
                (this.data[this.pos++] << 8) |
                this.data[this.pos++]
              );
            }),
            (n.prototype.readUInt16 = function () {
              return (this.data[this.pos++] << 8) | this.data[this.pos++];
            }),
            (n.prototype.decodePixels = function (e) {
              var t,
                r,
                o,
                n,
                i,
                s,
                l,
                h,
                u,
                c,
                f,
                p,
                d,
                m,
                g,
                y,
                C,
                w,
                b,
                x,
                v,
                T,
                k;
              if ((null == e && (e = this.imgData), 0 === e.length))
                return new Uint8Array(0);
              for (
                e = (e = new a.Z(e)).getBytes(),
                  y = (p = this.pixelBitlength / 8) * this.width,
                  d = new Uint8Array(y * this.height),
                  s = e.length,
                  g = 0,
                  m = 0,
                  r = 0;
                m < s;

              ) {
                switch (e[m++]) {
                  case 0:
                    for (n = b = 0; b < y; n = b += 1) d[r++] = e[m++];
                    break;
                  case 1:
                    for (n = x = 0; x < y; n = x += 1)
                      (t = e[m++]),
                        (i = n < p ? 0 : d[r - p]),
                        (d[r++] = (t + i) % 256);
                    break;
                  case 2:
                    for (n = v = 0; v < y; n = v += 1)
                      (t = e[m++]),
                        (o = (n - (n % p)) / p),
                        (C = g && d[(g - 1) * y + o * p + (n % p)]),
                        (d[r++] = (C + t) % 256);
                    break;
                  case 3:
                    for (n = T = 0; T < y; n = T += 1)
                      (t = e[m++]),
                        (o = (n - (n % p)) / p),
                        (i = n < p ? 0 : d[r - p]),
                        (C = g && d[(g - 1) * y + o * p + (n % p)]),
                        (d[r++] = (t + Math.floor((i + C) / 2)) % 256);
                    break;
                  case 4:
                    for (n = k = 0; k < y; n = k += 1)
                      (t = e[m++]),
                        (o = (n - (n % p)) / p),
                        (i = n < p ? 0 : d[r - p]),
                        0 === g
                          ? (C = w = 0)
                          : ((C = d[(g - 1) * y + o * p + (n % p)]),
                            (w = o && d[(g - 1) * y + (o - 1) * p + (n % p)])),
                        (l = i + C - w),
                        (h = Math.abs(l - i)),
                        (c = Math.abs(l - C)),
                        (f = Math.abs(l - w)),
                        (u = h <= c && h <= f ? i : c <= f ? C : w),
                        (d[r++] = (t + u) % 256);
                    break;
                  default:
                    throw new Error('Invalid filter algorithm: ' + e[m - 1]);
                }
                g++;
              }
              return d;
            }),
            (n.prototype.decodePalette = function () {
              var e, t, r, o, n, i, a, s, l;
              for (
                r = this.palette,
                  i = this.transparency.indexed || [],
                  n = new Uint8Array((i.length || 0) + r.length),
                  o = 0,
                  e = 0,
                  t = a = 0,
                  s = r.length;
                a < s;
                t = a += 3
              )
                (n[o++] = r[t]),
                  (n[o++] = r[t + 1]),
                  (n[o++] = r[t + 2]),
                  (n[o++] = null != (l = i[e++]) ? l : 255);
              return n;
            }),
            (n.prototype.copyToImageData = function (e, t) {
              var r, o, n, i, a, s, l, h, u, c, f;
              if (
                ((o = this.colors),
                (u = null),
                (r = this.hasAlphaChannel),
                this.palette.length &&
                  ((u =
                    null != (f = this._decodedPalette)
                      ? f
                      : (this._decodedPalette = this.decodePalette())),
                  (o = 4),
                  (r = !0)),
                (h = (n = e.data || e).length),
                (a = u || t),
                (i = s = 0),
                1 === o)
              )
                for (; i < h; )
                  (l = u ? 4 * t[i / 4] : s),
                    (c = a[l++]),
                    (n[i++] = c),
                    (n[i++] = c),
                    (n[i++] = c),
                    (n[i++] = r
                      ? a[l++]
                      : this.transparency.grayscale &&
                        this.transparency.grayscale === c
                      ? 0
                      : 255),
                    (s = l);
              else
                for (; i < h; )
                  (l = u ? 4 * t[i / 4] : s),
                    (n[i++] = a[l++]),
                    (n[i++] = a[l++]),
                    (n[i++] = a[l++]),
                    (n[i++] = r
                      ? a[l++]
                      : this.transparency.rgb &&
                        this.transparency.rgb[1] === a[l - 3] &&
                        this.transparency.rgb[3] === a[l - 2] &&
                        this.transparency.rgb[5] === a[l - 1]
                      ? 0
                      : 255),
                    (s = l);
            }),
            (n.prototype.decode = function () {
              var e;
              return (
                (e = new Uint8Array(this.width * this.height * 4)),
                this.copyToImageData(e, this.decodePixels()),
                e
              );
            }),
            (r = e.document && e.document.createElement('canvas')),
            (o = r && r.getContext('2d')),
            (t = function (e) {
              var t;
              return (
                (o.width = e.width),
                (o.height = e.height),
                o.clearRect(0, 0, e.width, e.height),
                o.putImageData(e, 0, 0),
                ((t = new Image()).src = r.toDataURL()),
                t
              );
            }),
            (n.prototype.decodeFrames = function (e) {
              var r, o, n, i, a, s, l, h;
              if (this.animation) {
                for (
                  h = [], o = a = 0, s = (l = this.animation.frames).length;
                  a < s;
                  o = ++a
                )
                  (r = l[o]),
                    (n = e.createImageData(r.width, r.height)),
                    (i = this.decodePixels(new Uint8Array(r.data))),
                    this.copyToImageData(n, i),
                    (r.imageData = n),
                    h.push((r.image = t(n)));
                return h;
              }
            }),
            (n.prototype.renderFrame = function (e, t) {
              var r, o, n;
              return (
                (r = (o = this.animation.frames)[t]),
                (n = o[t - 1]),
                0 === t && e.clearRect(0, 0, this.width, this.height),
                1 === (null != n ? n.disposeOp : void 0)
                  ? e.clearRect(n.xOffset, n.yOffset, n.width, n.height)
                  : 2 === (null != n ? n.disposeOp : void 0) &&
                    e.putImageData(n.imageData, n.xOffset, n.yOffset),
                0 === r.blendOp &&
                  e.clearRect(r.xOffset, r.yOffset, r.width, r.height),
                e.drawImage(r.image, r.xOffset, r.yOffset)
              );
            }),
            (n.prototype.animate = function (e) {
              var t,
                r,
                o,
                n,
                i,
                a,
                s = this;
              return (
                (r = 0),
                (a = this.animation),
                (n = a.numFrames),
                (o = a.frames),
                (i = a.numPlays),
                (t = function () {
                  var a, l;
                  if (
                    ((a = r++ % n),
                    (l = o[a]),
                    s.renderFrame(e, a),
                    n > 1 && r / n < i)
                  )
                    return (s.animation._timeout = setTimeout(t, l.delay));
                })()
              );
            }),
            (n.prototype.stopAnimation = function () {
              var e;
              return clearTimeout(
                null != (e = this.animation) ? e._timeout : void 0,
              );
            }),
            (n.prototype.render = function (e) {
              var t, r;
              return (
                e._png && e._png.stopAnimation(),
                (e._png = this),
                (e.width = this.width),
                (e.height = this.height),
                (t = e.getContext('2d')),
                this.animation
                  ? (this.decodeFrames(t), this.animate(t))
                  : ((r = t.createImageData(this.width, this.height)),
                    this.copyToImageData(r, this.decodePixels()),
                    t.putImageData(r, 0, 0))
              );
            }),
            n
          );
        })(self);
      const y = new Set(['jpg', 'png', 'bmp', 'gif']),
        C = new Set(['S8', 'U8', 'S16', 'U16', 'S32', 'U32', 'F32', 'F64']);
      async function w(e, t) {
        var r;
        if (!m.f)
          throw new o.Z(
            'rasterCoded:decode',
            'lerc decoder is not supported on big endian platform',
          );
        await (0, h.zD)();
        const { offset: i, noDataValue: a } = t;
        let s = null == (r = t.pixelType) ? void 0 : r.toUpperCase();
        s && !C.has(s) && (s = null);
        const {
          width: l,
          height: u,
          pixelType: c,
          statistics: f,
          pixels: p,
          mask: d,
        } = (0, h.Jx)(e, { inputOffset: i, noDataValue: a, pixelType: s });
        return new n.Z({
          width: l,
          height: u,
          pixelType: c.toLowerCase(),
          pixels: p,
          mask: d,
          statistics: f,
        });
      }
      async function b(e, t) {
        const r = await (0, d.Jx)(e, t.pyramidLevel || 0),
          o = new n.Z({
            width: r.width,
            height: r.height,
            pixels: r.pixels,
            pixelType: r.pixelType.toLowerCase(),
            mask: r.mask,
            statistics: null,
          });
        return o.updateStatistics(), o;
      }
      function x(e, t) {
        const r = t.pixelType || 'u8',
          o = n.Z.getPixelArrayConstructor(r),
          i = 'u8' === r ? e : new o(e.buffer),
          a = [],
          s = t.planes || 1;
        if (1 === s) a.push(i);
        else
          for (let r = 0; r < s; r++) {
            const n = (t.width || 1) * (t.height || e.length),
              l = new o(n);
            for (let e = 0; e < n; e++) l[e] = i[e * s + r];
            a.push(l);
          }
        const l = new n.Z({
          width: t.width || 1,
          height: t.height || e.length,
          pixels: a,
          pixelType: r,
          statistics: null,
        });
        return l.updateStatistics(), l;
      }
      function v(e, t) {
        return x(new a.Z(new Uint8Array(e)).getBytes(), t);
      }
      function T(e, t) {
        return x((0, u.J)(e, t.offset, t.eof, !t.isInputBigEndian), t);
      }
      function k(e) {
        const t = class {
            static decode(e) {
              const t = new Uint8Array(e),
                r = new l.J();
              r.parse(t);
              const { width: o, height: n, numComponents: i, eof: s } = r,
                h = r.getData(o, n, !0);
              let u;
              const c = o * n;
              let f = 0,
                p = 0,
                d = 0;
              if (s < t.length - 1) {
                const e = new a.Z(t.subarray(s)).getBytes();
                u = new Uint8Array(c);
                let r = 0;
                for (f = 0; f < e.length; f++)
                  for (d = 7; d >= 0; d--) u[r++] = (e[f] >> d) & 1;
              }
              let m,
                g = null;
              if (1 === i) g = [h, h, h];
              else {
                for (g = [], f = 0; f < 3; f++)
                  (m = new Uint8Array(c)), g.push(m);
                for (d = 0, p = 0; p < c; p++)
                  for (f = 0; f < 3; f++) g[f][p] = h[d++];
              }
              return { width: o, height: n, pixels: g, mask: u };
            }
          }.decode(e),
          r = new n.Z({
            width: t.width,
            height: t.height,
            pixels: t.pixels,
            pixelType: 'U8',
            mask: t.mask,
            statistics: null,
          });
        return r.updateStatistics(), r;
      }
      function S(e, t) {
        const r = new Uint8Array(e),
          o = new g(r),
          { width: i, height: a } = t,
          s = i * a,
          l = o.decode();
        let h,
          u = 0,
          c = 0;
        const f = new Uint8Array(s);
        for (u = 0; u < s; u++) f[u] = l[4 * u + 3];
        const p = new n.Z({
          width: i,
          height: a,
          pixels: [],
          pixelType: 'U8',
          mask: f,
          statistics: [],
        });
        for (u = 0; u < 3; u++) {
          for (h = new Uint8Array(s), c = 0; c < s; c++) h[c] = l[4 * c + u];
          p.addData({ pixels: h });
        }
        return p.updateStatistics(), p;
      }
      async function A(e, t, r, o) {
        const i = new s(),
          a = { applyJpegMask: !1, format: t, ...r },
          l = await i.decode(e, a, o),
          h = new n.Z(l);
        return h.updateStatistics(), h;
      }
      function I(e) {
        if (null == e)
          throw new o.Z(
            'rasterCodec:decode',
            'parameter encodeddata is required.',
          );
        const t = new Uint8Array(e, 0, 10);
        let r = '';
        return (
          255 === t[0] && 216 === t[1]
            ? (r = 'jpg')
            : 137 === t[0] && 80 === t[1] && 78 === t[2] && 71 === t[3]
            ? (r = 'png')
            : 67 === t[0] &&
              110 === t[1] &&
              116 === t[2] &&
              90 === t[3] &&
              73 === t[4] &&
              109 === t[5] &&
              97 === t[6] &&
              103 === t[7] &&
              101 === t[8] &&
              32 === t[9]
            ? (r = 'lerc')
            : 76 === t[0] &&
              101 === t[1] &&
              114 === t[2] &&
              99 === t[3] &&
              50 === t[4] &&
              32 === t[5]
            ? (r = 'lerc2')
            : (73 === t[0] && 73 === t[1] && 42 === t[2] && 0 === t[3]) ||
              (77 === t[0] && 77 === t[1] && 0 === t[2] && 42 === t[3]) ||
              (73 === t[0] && 73 === t[1] && 43 === t[2] && 0 === t[3]) ||
              (77 === t[0] && 77 === t[1] && 0 === t[2] && 43 === t[3])
            ? (r = 'tiff')
            : 71 === t[0] && 73 === t[1] && 70 === t[2]
            ? (r = 'gif')
            : 66 === t[0] && 77 === t[1]
            ? (r = 'bmp')
            : String.fromCharCode
                .apply(null, t)
                .toLowerCase()
                .indexOf('error') > -1 && (r = 'error'),
          r
        );
      }
      function P(e) {
        let t = I(e);
        return 'lerc2' === t ? (t = 'lerc') : 'error' === t && (t = ''), t;
      }
      async function M(e, t = {}, r) {
        if (null == e)
          throw new o.Z('rasterCodec:decode', 'missing encodeddata parameter.');
        let i,
          a,
          s = t.format && t.format.toLowerCase();
        if (
          !(
            ('bsq' !== s && 'bip' !== s) ||
            (null != t.width && null != t.height)
          )
        )
          throw new o.Z(
            'rasterCodec:decode',
            'requires width and height in options parameter.',
          );
        return 'tiff' === s && t.customOptions
          ? (async function (e, t) {
              const r = await (0, d.Uw)(e, t.customOptions),
                o = new n.Z({
                  width: r.width,
                  height: r.height,
                  pixels: r.pixels,
                  pixelType: r.pixelType.toLowerCase(),
                  mask: r.mask,
                  statistics: null,
                });
              return o.updateStatistics(), o;
            })(e, t)
          : ((!s ||
              ('bsq' !== s && 'bip' !== s && 'deflate' !== s && 'lzw' !== s)) &&
              (s = I(e)),
            t.useCanvas && y.has(s)
              ? (a = await A(e, s, t, r))
              : ((i = (function (e) {
                  let t = null;
                  switch (e) {
                    case 'lerc':
                    case 'lerc2':
                      t = w;
                      break;
                    case 'jpg':
                      t = k;
                      break;
                    case 'png':
                      t = S;
                      break;
                    case 'bsq':
                    case 'bip':
                      t = (t, r) =>
                        (function (e, t, r) {
                          const { pixelTypeCtor: o } = (function (e) {
                              let t = null,
                                r = null;
                              switch (e ? e.toLowerCase() : 'f32') {
                                case 'u1':
                                case 'u2':
                                case 'u4':
                                case 'u8':
                                  (r = 255), (t = Uint8Array);
                                  break;
                                case 'u16':
                                  (r = r || 65535), (t = Uint16Array);
                                  break;
                                case 'u32':
                                  (r = r || 2 ** 32 - 1), (t = Uint32Array);
                                  break;
                                case 's8':
                                  (r = r || -128), (t = Int8Array);
                                  break;
                                case 's16':
                                  (r = r || -32768), (t = Int16Array);
                                  break;
                                case 's32':
                                  (r = r || 0 - 2 ** 31), (t = Int32Array);
                                  break;
                                default:
                                  t = Float32Array;
                              }
                              return { pixelTypeCtor: t, noDataValue: r };
                            })(t.pixelType),
                            i = (0, p.decode)(e, {
                              width: t.width,
                              height: t.height,
                              pixelType: o,
                              format: r,
                            }),
                            a = new n.Z({
                              width: t.width,
                              height: t.height,
                              pixels: i.pixels,
                              pixelType: t.pixelType,
                              mask: i.mask,
                              statistics: null,
                            });
                          return a.updateStatistics(), a;
                        })(t, r, e);
                      break;
                    case 'tiff':
                      t = b;
                      break;
                    case 'deflate':
                      t = v;
                      break;
                    case 'lzw':
                      t = T;
                      break;
                    case 'error':
                      t = () => {
                        throw new o.Z(
                          'rasterCodec:decode',
                          'input data contains error',
                        );
                      };
                      break;
                    default:
                      t = () => {
                        throw new o.Z(
                          'rasterCodec:decode',
                          'unsupported raster format',
                        );
                      };
                  }
                  return t;
                })(s)),
                t.isPoint && ((t = { ...t }).width++, t.height++),
                (a = await i(e, t)),
                t.isPoint &&
                  (function (e, t = 1) {
                    if (!e) return;
                    const { pixels: r, width: o, height: i, mask: a } = e;
                    if (!r || 0 === r.length) return;
                    const s = r.length,
                      l = o - 1,
                      h = i - 1,
                      u = [];
                    let c, f, p, d, m, g, y;
                    const C = n.Z.getPixelArrayConstructor(e.pixelType);
                    if (0 === t) {
                      for (c = 0; c < s; c++) {
                        for (m = r[c], g = new C(l * h), f = 0; f < h; f++)
                          for (d = f * o, p = 0; p < l; p++)
                            g[f * l + p] = m[d + p];
                        u.push(g);
                      }
                      if (a)
                        for (y = new Uint8Array(l * h), f = 0; f < h; f++)
                          for (d = f * o, p = 0; p < l; p++)
                            y[f * l + p] = a[d + p];
                    } else {
                      for (c = 0; c < s; c++) {
                        for (m = r[c], g = new C(l * h), f = 0; f < h; f++)
                          for (d = f * o, p = 0; p < l; p++)
                            g[f * l + p] =
                              (m[d + p] +
                                m[d + p + 1] +
                                m[d + o + p] +
                                m[d + o + p + 1]) /
                              4;
                        u.push(g);
                      }
                      if (a)
                        for (y = new Uint8Array(l * h), f = 0; f < h; f++)
                          for (d = f * o, p = 0; p < l; p++)
                            y[f * l + p] = Math.min.apply(null, [
                              a[d + p],
                              a[d + p + 1],
                              a[d + o + p],
                              a[d + o + p + 1],
                            ]);
                    }
                    (e.width = l), (e.height = h), (e.mask = y), (e.pixels = u);
                  })(a)),
            a);
      }
    },
    94793: (e, t, r) => {
      r.d(t, {
        Jx: () => E,
        Uw: () => D,
        FI: () => T,
        If: () => k,
        Dq: () => v,
        vr: () => M,
        cK: () => P,
      });
      var o = r(20095),
        n = r(97575),
        i = r(72955),
        a = r(88781),
        s = r(9832),
        l = r(48279),
        h = r(80899);
      const u = [0, 1, 1, 2, 4, 8, 1, 1, 2, 4, 8, 4, 8, -1, -1, -1, 8, 8, 8],
        c = 4294967296,
        f = new Set([1, 5, 6, 7, 8, 34712, 34887]);
      function p(e, t) {
        let r = 'unknown';
        return (
          3 === e
            ? (r = 'f32')
            : 1 === e
            ? 1 === t
              ? (r = 'u1')
              : 2 === t
              ? (r = 'u2')
              : 4 === t
              ? (r = 'u4')
              : t <= 8
              ? (r = 'u8')
              : t <= 16
              ? (r = 'u16')
              : t <= 32 && (r = 'u32')
            : 2 === e &&
              (t <= 8
                ? (r = 's8')
                : t <= 16
                ? (r = 's16')
                : t <= 32 && (r = 's32')),
          r
        );
      }
      function d(e) {
        let t = null;
        switch (e ? e.toLowerCase() : 'f32') {
          case 'u1':
          case 'u2':
          case 'u4':
          case 'u8':
            t = Uint8Array;
            break;
          case 'u16':
            t = Uint16Array;
            break;
          case 'u32':
            t = Uint32Array;
            break;
          case 's8':
            t = Int8Array;
            break;
          case 's16':
            t = Int16Array;
            break;
          case 's32':
            t = Int32Array;
            break;
          default:
            t = Float32Array;
        }
        return t;
      }
      function m(e, t) {
        return {
          x: t[0] * e.x + t[1] * e.y + t[2],
          y: t[3] * e.x + t[4] * e.y + t[5],
        };
      }
      function g(e, t) {
        var r;
        return null == (r = e.get(t)) ? void 0 : r.values;
      }
      function y(e, t) {
        var r;
        return null == (r = e.get(t)) ? void 0 : r.values;
      }
      function C(e, t) {
        var r;
        return null == (r = e.get(t)) ? void 0 : r.values[0];
      }
      function w(e, t) {
        var r;
        return null == (r = e.get(t)) ? void 0 : r.values[0];
      }
      function b(e, t, r, o = 0, n = s.Z.TIFF_TAGS, i = 4) {
        const a = 8 === i,
          l = a
            ? S(new DataView(e, r, 8), 0, t)
            : new DataView(e, r, 2).getUint16(0, t),
          h = 4 + 2 * i,
          u = a ? 8 : 2,
          c = u + l * h;
        if (r + c > e.byteLength)
          return {
            success: !1,
            ifd: null,
            nextIFD: null,
            requiredBufferSize: c,
          };
        const f =
            r + c + 4 <= e.byteLength
              ? I(new DataView(e, r + c, 8 === i ? 8 : 4), 0, t, 8 === i)
              : null,
          p = r + u,
          d = new Map();
        let m, g, y, C, w, b, x;
        for (let r = 0; r < l; r++) {
          (g = new DataView(e, p + h * r, h)),
            (y = g.getUint16(0, t)),
            (w = g.getUint16(2, t)),
            (C = s.Z.getTagName(y, n));
          const a = [];
          2 === i
            ? ((b = g.getUint16(4, t)), (x = g.getUint16(6, t)))
            : 4 === i
            ? ((b = g.getUint32(4, t)), (x = g.getUint32(8, t)))
            : 8 === i &&
              ((b = I(g, 4, t, !0)),
              (x = I(g, 12, t, !0)),
              a.push(g.getUint32(12, t)),
              a.push(g.getUint32(16, t))),
            (m = {
              id: y,
              type: w,
              valueCount: b,
              valueOffset: x,
              valueOffsets: a,
              values: null,
            }),
            v(e, t, m, o, !1, i),
            d.set(C, m);
        }
        return { success: !0, ifd: d, nextIFD: f, requiredBufferSize: c };
      }
      async function x(e, t, r, o, s) {
        var u, c;
        const f = l.f === t,
          m = w(r, 'BITSPERSAMPLE'),
          g = p(null != (u = w(r, 'SAMPLEFORMAT')) ? u : 1, m),
          y = null != (c = w(r, 'COMPRESSION')) ? c : 1,
          C = d(g);
        let b, x, v, T, k, S, A;
        if (34887 === y)
          return (
            await (0, i.zD)(),
            (function (e, t) {
              return (0, i.Jx)(e, { inputOffset: t }).pixels[0];
            })(e, o)
          );
        if (1 === y) (v = e.slice(o, o + s)), (T = new Uint8Array(v));
        else if (8 === y || 32946 === y)
          (T = new Uint8Array(e, o, s)),
            (S = new h.Z(T)),
            (A = S.getBytes()),
            (v = new ArrayBuffer(A.length)),
            (T = new Uint8Array(v)),
            T.set(A);
        else if (6 === y) {
          T = new Uint8Array(e, o, s);
          const t = new n.J();
          t.parse(T);
          const r = t.getData(t.width, t.height, !0);
          (v = new ArrayBuffer(r.length)), (T = new Uint8Array(v)), T.set(r);
        } else if (7 === y) {
          const t = r.get('JPEGTABLES').values,
            i = t.length - 2;
          T = new Uint8Array(i + s - 2);
          for (let e = 0; e < i; e++) T[e] = t[e];
          const a = new Uint8Array(e, o + 2, s - 2);
          for (let e = 0; e < a.length; e++) T[i + e] = a[e];
          const l = new n.J();
          l.parse(T);
          const h = l.getData(l.width, l.height, !0);
          (v = new ArrayBuffer(h.length)), (T = new Uint8Array(v)), T.set(h);
        } else 5 === y && ((T = (0, a.J)(e, o, s, t)), (v = T.buffer));
        if ('u8' === g || 's8' === g || f) x = new C(v);
        else {
          switch (
            ((v = new ArrayBuffer(T.length)), (k = new Uint8Array(v)), g)
          ) {
            case 'u16':
            case 's16':
              for (b = 0; b < T.length; b += 2)
                (k[b] = T[b + 1]), (k[b + 1] = T[b]);
              break;
            case 'u32':
            case 's32':
            case 'f32':
              for (b = 0; b < T.length; b += 4)
                (k[b] = T[b + 3]),
                  (k[b + 1] = T[b + 2]),
                  (k[b + 2] = T[b + 1]),
                  (k[b + 3] = T[b]);
          }
          x = new C(v);
        }
        return x;
      }
      function v(e, t, r, o = 0, n = !1, i = 4) {
        if (r.values) return !0;
        const a = r.type,
          s = r.valueCount;
        let l = r.valueOffset,
          h = [];
        const f = u[a],
          p = 8 * f,
          d = s * f,
          m = s * u[a] * 8;
        let g, y;
        const C = 8 === i ? 64 : 32,
          w = r.valueOffsets;
        if (m > C && d > (n ? e.byteLength : e ? e.byteLength - l + o : 0))
          return (r.offlineOffsetSize = [l, d]), (r.values = null), !1;
        if (m <= C) {
          if (!t)
            if (C <= 32) l >>>= 32 - m;
            else {
              const e = null != w && w.length ? w[0] : l >>> 0,
                t = null != w && w.length ? w[1] : Math.round((l - e) / c);
              m <= 32
                ? ((l = e >>> (32 - m)), (w[0] = l))
                : ((l = e * 2 ** (32 - m) + (t >>> (32 - m))),
                  (w[0] = e),
                  (w[1] = t >>> (32 - m)));
            }
          if (1 === s && p === C) h = [l];
          else if (64 === C) {
            const e = null != w && w.length ? w[0] : l >>> 0,
              t = null != w && w.length ? w[1] : Math.round((l - e) / c);
            let r = e,
              o = 32;
            for (y = 1; y <= s; y++) {
              const e = 32 - ((p * y) % 32);
              if (o < p) {
                const n = (r << e) >>> (32 - o),
                  i = (t << (32 - o)) >>> (32 - o);
                (r = t), h.push(n + i * 2 ** (p - o)), (o -= 32 - (p - o));
              } else h.push((r << e) >>> (32 - p)), (o -= p);
              0 === o && ((o = 32), (r = t));
            }
          } else
            for (y = 1; y <= s; y++) {
              const e = 32 - p * y;
              h.push((l << e) >>> (32 - p));
            }
        } else {
          (l -= o), n && (l = 0);
          for (let r = l; r < l + d; r += f) {
            switch (a) {
              case 1:
              case 2:
              case 7:
                g = new DataView(e, r, 1).getUint8(0);
                break;
              case 3:
                g = new DataView(e, r, 2).getUint16(0, t);
                break;
              case 4:
              case 13:
                g = new DataView(e, r, 4).getUint32(0, t);
                break;
              case 5:
                g =
                  new DataView(e, r, 4).getUint32(0, t) /
                  new DataView(e, r + 4, 4).getUint32(0, t);
                break;
              case 6:
                g = new DataView(e, r, 1).getInt8(0);
                break;
              case 8:
                g = new DataView(e, r, 2).getInt16(0, t);
                break;
              case 9:
                g = new DataView(e, r, 4).getInt32(0, t);
                break;
              case 10:
                g =
                  new DataView(e, r, 4).getInt32(0, t) /
                  new DataView(e, r + 4, 4).getInt32(0, t);
                break;
              case 11:
                g = new DataView(e, r, 4).getFloat32(0, t);
                break;
              case 12:
                g = new DataView(e, r, 8).getFloat64(0, t);
                break;
              case 16:
              case 18:
                g = S(new DataView(e, r, 8), 0, t);
                break;
              case 17:
                g = A(new DataView(e, r, 8), 0, t);
                break;
              default:
                g = null;
            }
            h.push(g);
          }
        }
        if (2 === a) {
          let e = '';
          const t = h;
          for (h = [], y = 0; y < t.length; y++)
            0 === t[y] && '' !== e
              ? (h.push(e), (e = ''))
              : (e += String.fromCharCode(t[y]));
          ('' === e && 0 !== h.length) || h.push(e);
        }
        return (r.values = h), !0;
      }
      function T(e) {
        var t, r;
        const o = e[0],
          n = w(o, 'TILEWIDTH'),
          i = w(o, 'TILELENGTH'),
          a = w(o, 'IMAGEWIDTH'),
          s = w(o, 'IMAGELENGTH'),
          l = w(o, 'BITSPERSAMPLE'),
          h = w(o, 'SAMPLESPERPIXEL'),
          u = null != (t = w(o, 'SAMPLEFORMAT')) ? t : 1,
          c = p(u, l),
          d = k(o),
          b = g(o, 'GDAL_NODATA');
        let x;
        null != b &&
          b.length &&
          ((x = b.map((e) => parseFloat(e))),
          x.some((e) => isNaN(e)) && (x = null));
        const v = null != (r = w(o, 'COMPRESSION')) ? r : 1;
        let T;
        switch (v) {
          case 1:
            T = 'NONE';
            break;
          case 2:
          case 3:
          case 4:
          case 32771:
            T = 'CCITT';
            break;
          case 5:
            T = 'LZW';
            break;
          case 6:
          case 7:
            T = 'JPEG';
            break;
          case 32773:
            T = 'PACKBITS';
            break;
          case 8:
          case 32946:
            T = 'DEFLATE';
            break;
          case 34712:
            T = 'JPEG2000';
            break;
          case 34887:
            T = 'LERC';
            break;
          default:
            T = String(v);
        }
        let S = !0,
          A = '';
        f.has(v) || ((S = !1), (A += 'unsupported tag compression ' + v)),
          u > 3 && ((S = !1), (A += 'unsupported tag sampleFormat ' + u)),
          l % 8 != 0 && ((S = !1), (A += 'unsupported tag bitsPerSample ' + l));
        const I = C(o, 'GEOASCIIPARAMS');
        let P;
        if (I) {
          const e = I.split('|').find(
              (e) => e.indexOf('ESRI PE String = ') > -1,
            ),
            t = e ? e.replace('ESRI PE String = ', '') : '';
          P =
            t.startsWith('COMPD_CS') ||
            t.startsWith('PROJCS') ||
            t.startsWith('GEOGCS')
              ? { wkid: null, wkt: t }
              : null;
        }
        const M = y(o, 'GEOTIEPOINTS'),
          D = y(o, 'GEOPIXELSCALE'),
          E = y(o, 'GEOTRANSMATRIX'),
          _ = o.has('GEOKEYDIRECTORY') ? o.get('GEOKEYDIRECTORY').data : null;
        let L,
          U,
          G = !1;
        if (_) {
          G = 2 === w(_, 'GTRasterTypeGeoKey');
          const e = w(_, 'GTModelTypeGeoKey');
          if (2 === e) {
            const e = w(_, 'GeographicTypeGeoKey');
            e >= 1024 && e <= 32766 && (P = { wkid: e });
          } else if (1 === e) {
            const e = w(_, 'ProjectedCSTypeGeoKey');
            e >= 1024 && e <= 32766 && (P = { wkid: e });
          }
        }
        if (
          (D && M && M.length >= 6
            ? ((L = [
                D[0],
                0,
                M[3] - M[0] * D[0],
                0,
                -Math.abs(D[1]),
                M[4] - M[1] * D[1],
              ]),
              G &&
                ((L[2] -= 0.5 * L[0] + 0.5 * L[1]),
                (L[5] -= 0.5 * L[3] + 0.5 * L[4])))
            : E &&
              16 === E.length &&
              (L = G
                ? [E[0], E[1], E[3] - 0.5 * E[0], E[4], E[5], E[7] - 0.5 * E[5]]
                : [E[0], E[1], E[3], E[4], E[5], E[7]]),
          L)
        ) {
          const e = [
            { x: 0, y: s },
            { x: 0, y: 0 },
            { x: a, y: s },
            { x: a, y: 0 },
          ];
          let t,
            r = Number.POSITIVE_INFINITY,
            o = Number.POSITIVE_INFINITY,
            n = Number.NEGATIVE_INFINITY,
            i = Number.NEGATIVE_INFINITY;
          for (let a = 0; a < e.length; a++)
            (t = m(e[a], L)),
              (r = t.x > r ? r : t.x),
              (n = t.x < n ? n : t.x),
              (o = t.y > o ? o : t.y),
              (i = t.y < i ? i : t.y);
          U = { xmin: r, xmax: n, ymin: o, ymax: i, spatialReference: P };
        } else
          U = {
            xmin: -0.5,
            ymin: 0.5 - s,
            xmax: a - 0.5,
            ymax: 0.5,
            spatialReference: P,
          };
        const O = e.filter((e) => 1 === C(e, 'NEWSUBFILETYPE'));
        let B, N, F, V, z;
        if (O.length > 0) {
          B = Math.round(Math.log(a / w(O[0], 'IMAGEWIDTH')) / Math.LN2);
          const e = O[O.length - 1];
          (N = Math.round(Math.log(a / w(e, 'IMAGEWIDTH')) / Math.LN2)),
            (F = w(e, 'TILEWIDTH')),
            (V = w(e, 'TILELENGTH'));
        }
        (F = N > 0 ? F || n : null),
          (V = N > 0 ? V || i : null),
          n &&
            ((z = [
              {
                maxCol: Math.ceil(a / n) - 1,
                maxRow: Math.ceil(s / i) - 1,
                minRow: 0,
                minCol: 0,
              },
            ]),
            O.forEach((e) => {
              z.push({
                maxCol: Math.ceil(w(e, 'IMAGEWIDTH') / w(e, 'TILEWIDTH')) - 1,
                maxRow: Math.ceil(w(e, 'IMAGELENGTH') / w(e, 'TILELENGTH')) - 1,
                minRow: 0,
                minCol: 0,
              });
            }));
        const j = (function (e) {
          if (!e) return null;
          const t = e.match(/<Item(.*?)Item>/gi);
          if (!t || 0 === t.length) return null;
          const r = new Map();
          let o, n, i, a, s;
          for (let e = 0; e < t.length; e++)
            (o = t[e]),
              (n = o.slice('<Item '.length, o.indexOf('>'))),
              (a = o.indexOf('sample=')),
              a > -1 &&
                (s = o.slice(
                  a + 'sample="'.length,
                  o.indexOf('"', a + 'sample="'.length),
                )),
              (a = o.indexOf('name=')),
              a > -1 &&
                (n = o.slice(
                  a + 'name="'.length,
                  o.indexOf('"', a + 'name="'.length),
                )),
              n &&
                ((i = o.slice(o.indexOf('>') + 1, o.indexOf('</Item>')).trim()),
                null != s
                  ? r.has(n)
                    ? (r.get(n)[s] = i)
                    : r.set(n, [i])
                  : r.set(n, i)),
              (s = null);
          const l = r.get('STATISTICS_MINIMUM'),
            h = r.get('STATISTICS_MAXIMUM'),
            u = r.get('STATISTICS_MEAN'),
            c = r.get('STATISTICS_STDDEV');
          let f = null;
          if (l && h) {
            f = [];
            for (let e = 0; e < l.length; e++)
              f.push({
                min: parseFloat(l[e]),
                max: parseFloat(h[e]),
                avg: u && parseFloat(u[e]),
                stddev: c && parseFloat(c[e]),
              });
          }
          const p = r.get('BandName'),
            d = r.get('WavelengthMin'),
            m = r.get('WavelengthMax');
          let g = null;
          if (p) {
            g = [];
            for (let e = 0; e < p.length; e++)
              g.push({
                BandName: p[e],
                WavelengthMin: d && parseFloat(d[e]),
                WavelengthMax: m && parseFloat(m[e]),
              });
          }
          return {
            statistics: f,
            bandProperties: g,
            dataType: r.get('DataType'),
            rawMetadata: r,
          };
        })(C(e[0], 'GDAL_METADATA'));
        return (
          (A +=
            ' ' +
            R({
              width: a,
              height: s,
              tileWidth: n,
              tileHeight: i,
              planes: h,
              ifds: e,
            })),
          {
            width: a,
            height: s,
            tileWidth: n,
            tileHeight: i,
            planes: h,
            isBSQ: d,
            pixelType: c,
            compression: T,
            noData: x,
            isSupported: S,
            message: A,
            extent: U,
            affine: D ? null : L,
            firstPyramidLevel: B,
            maximumPyramidLevel: N,
            pyramidBlockWidth: F,
            pyramidBlockHeight: V,
            tileBoundary: z,
            metadata: j,
          }
        );
      }
      function k(e, t) {
        const r = g(e, 'PLANARCONFIGURATION');
        return r ? 2 === r[0] : !!t && t.isBSQ;
      }
      function S(e, t, r) {
        const o = e.getUint32(t, r),
          n = e.getUint32(t + 4, r);
        return r ? n * c + o : o * c + n;
      }
      function A(e, t, r) {
        let o = r ? e.getInt32(t, r) : e.getUint32(t, r),
          n = r ? e.getUint32(t + 4, r) : e.getInt32(t + 4, r);
        const i = (r ? o : n) >= 0 ? 1 : -1;
        return r ? (o *= i) : (n *= i), i * (r ? n * c + o : o * c + n);
      }
      function I(e, t, r, o) {
        return o ? S(e, t, r) : e.getUint32(t, r);
      }
      function P(e) {
        const t = new DataView(e, 0, 16),
          r = t.getUint16(0, !1);
        let o = null;
        if (18761 === r) o = !0;
        else {
          if (19789 !== r) throw 'unexpected endianess byte';
          o = !1;
        }
        const n = t.getUint16(2, o);
        if (42 !== n && 43 !== n) throw 'unexpected tiff identifier';
        let i = 4;
        const a = 43 === n;
        if (a) {
          const e = t.getUint16(i, o);
          if (((i += 2), 8 !== e)) throw 'unsupported bigtiff version';
          if (0 !== t.getUint16(i, o)) throw 'unsupported bigtiff version';
          i += 2;
        }
        return { littleEndian: o, isBigTiff: a, firstIFD: I(t, i, o, a) };
      }
      function M(e, t, r, n = 0, i = s.Z.TIFF_TAGS, a = 4) {
        const l = b(e, t, r, n, i, a);
        let h;
        const u = l.ifd;
        if (u) {
          if (
            (s.Z.ifdTags.forEach((r, o) => {
              u.has(o) &&
                ((h = u.get(o)),
                (h.data = b(e, t, h.valueOffset - n, n, r).ifd));
            }),
            u.has('GEOKEYDIRECTORY'))
          ) {
            h = u.get('GEOKEYDIRECTORY');
            const r = h.values;
            if (r && r.length > 4) {
              const o = r[0] + '.' + r[1] + '.' + r[2];
              (h.data = b(e, t, h.valueOffset + 6 - n, n, s.Z.GEO_KEYS, 2).ifd),
                h.data &&
                  h.data.set('GEOTIFFVersion', {
                    id: 0,
                    type: 2,
                    valueCount: 1,
                    valueOffset: null,
                    values: [o],
                  });
            }
          }
          if (u.has('XMP')) {
            h = u.get('XMP');
            const e = h.values;
            'number' == typeof e[0] &&
              7 === h.type &&
              (h.values = [(0, o.f)(new Uint8Array(e))]);
          }
        }
        return l;
      }
      function R(e) {
        const { width: t, height: r, tileHeight: o, tileWidth: n } = e,
          i = e.planes,
          a = n ? n * o : t * r,
          s = w(e.ifds[0], 'BITSPERSAMPLE');
        let l = '';
        return (
          a * i > 2 ** 30 / (s > 8 ? s / 8 : 1) &&
            (l = n
              ? 'tiled tiff exceeding 1 gigabits per tile is not supported'
              : 'scanline tiff exceeding 1 gigabits is not supported'),
          l
        );
      }
      async function D(e, t) {
        var r;
        const { headerInfo: o, ifd: n, offsets: i, sizes: a } = t,
          s = [];
        for (let t = 0; t < i.length; t++) {
          const r = await x(e, o.littleEndian, n, i[t], a[t] || e.byteLength);
          s.push(r);
        }
        const l = k(n, o),
          { pixelType: h, planes: u } = o,
          c = d(h),
          f = w(n, 'TILEWIDTH'),
          p = w(n, 'TILELENGTH'),
          m = null != (r = w(n, 'COMPRESSION')) ? r : 1,
          g = f * p;
        let y;
        const C = [];
        let b = s[0];
        const v = 34887 === m;
        for (let e = 0; e < u; e++) {
          if (((y = new c(g)), l && v)) {
            b = s[e];
            for (let t = 0; t < g; t++) y[t] = b[e][t + e];
          } else if (l || (v && !l)) y = b.slice(g * e, g * (e + 1));
          else for (let t = 0; t < g; t++) y[t] = b[t * u + e];
          C.push(y);
        }
        const T = o.noData ? o.noData[0] : null,
          S = o.metadata ? o.metadata.statistics : null,
          A = S ? S.map((e) => e.min) : null,
          I = S ? S.map((e) => e.max) : null;
        let P, M;
        if (null != T)
          if (((P = new Uint8Array(g)), Math.abs(T) > 1e24))
            for (M = 0; M < g; M++)
              Math.abs((C[0][M] - T) / T) < 1e-6 ? (P[M] = 0) : (P[M] = 1);
          else for (M = 0; M < g; M++) C[0][M] === T ? (P[M] = 0) : (P[M] = 1);
        else
          A &&
            I &&
            t.applyMinMaxConstraint &&
            (P = (function (e, t, r) {
              if (!(e && e.length > 0 && t && r)) return null;
              let o, n, i;
              const a = e[0].length,
                s = e.length,
                l = new Uint8Array(a);
              for (let h = 0; h < s; h++)
                if (((o = e[h]), (n = t[h]), (i = r[h]), 0 === h))
                  for (let e = 0; e < a; e++)
                    l[e] = o[e] < n || o[e] > i ? 0 : 1;
                else
                  for (let e = 0; e < a; e++)
                    l[e] && (l[e] = o[e] < n || o[e] > i ? 0 : 1);
              return l;
            })(C, A, I));
        return {
          pixelType: h,
          width: f,
          height: p,
          pixels: C,
          mask: P,
          noDataValue: T,
        };
      }
      async function E(e, t = 0, r) {
        r =
          r ||
          (function (e) {
            const { littleEndian: t, isBigTiff: r, firstIFD: o } = P(e);
            let n = o;
            const i = [];
            do {
              const o = M(e, t, n, 0, s.Z.TIFF_TAGS, r ? 8 : 4);
              if (!o.success) break;
              i.push(o.ifd), (n = o.nextIFD);
            } while (n > 0);
            return { ...T(i), littleEndian: t, isBigTiff: r, ifds: i };
          })(e);
        const { ifds: o, noData: i } = r;
        if (0 === o.length) throw 'no valid image file directory';
        const u = R(r);
        if (u) throw u;
        let c, f;
        const p = -1 === t ? o[o.length - 1] : o[t],
          m = i ? i[0] : null;
        if (
          ((f = r.tileWidth
            ? await (async function (e, t, r) {
                var o;
                const n = y(r, 'TILEOFFSETS');
                if (void 0 === n) return null;
                const i = y(r, 'TILEBYTECOUNTS'),
                  {
                    width: a,
                    height: s,
                    pixelType: l,
                    tileWidth: h,
                    tileHeight: u,
                  } = T([r]),
                  c = k(r, t),
                  f = t.planes,
                  p = a * s,
                  m = w(r, 'BITSPERSAMPLE'),
                  g = 34887 === (null != (o = w(r, 'COMPRESSION')) ? o : 1),
                  C = d(l),
                  b = [];
                for (let e = 0; e < f; e++) b.push(new C(p));
                let v, S, A, I, P, M, R, D, E, _, L, U, G;
                const O = Math.ceil(a / h);
                if (m % 8 == 0)
                  if (g && c && f > 1) {
                    const o = Math.round(n.length / f);
                    for (v = 0; v < o; v++) {
                      (M = Math.floor(v / O) * u),
                        (R = (v % O) * h),
                        (D = M * a + R);
                      for (let o = 0; o < f; o++) {
                        const l = v * f + o;
                        for (
                          A = await x(e, t.littleEndian, r, n[l], i[l]),
                            _ = 0,
                            E = D,
                            U = Math.min(h, a - R),
                            L = Math.min(u, s - M),
                            G = b[o],
                            I = 0;
                          I < L;
                          I++
                        )
                          for (
                            E = D + I * a, _ = I * h, P = 0;
                            P < U;
                            P++, E++, _++
                          )
                            G[E] = A[_];
                      }
                    }
                  } else
                    for (v = 0; v < n.length; v++)
                      for (
                        M = Math.floor(v / O) * u,
                          R = (v % O) * h,
                          D = M * a + R,
                          A = await x(e, t.littleEndian, r, n[v], i[v]),
                          _ = 0,
                          E = D,
                          U = Math.min(h, a - R),
                          L = Math.min(u, s - M),
                          S = 0;
                        S < f;
                        S++
                      )
                        if (((G = b[S]), c || g))
                          for (I = 0; I < L; I++)
                            for (
                              E = D + I * a, _ = h * u * S + I * h, P = 0;
                              P < U;
                              P++, E++, _++
                            )
                              G[E] = A[_];
                        else
                          for (I = 0; I < L; I++)
                            for (
                              E = D + I * a, _ = I * h * f + S, P = 0;
                              P < U;
                              P++, E++, _ += f
                            )
                              G[E] = A[_];
                return { width: a, height: s, pixelType: l, pixels: b };
              })(e, r, p)
            : await (function (e, t, r) {
                var o;
                const i = l.f === t.littleEndian,
                  s = y(r, 'STRIPOFFSETS');
                if (void 0 === s) return null;
                const { width: u, height: c, pixelType: f } = T([r]),
                  p = t.planes,
                  m = u * c,
                  g = w(r, 'BITSPERSAMPLE'),
                  C = d(f),
                  b = new C(m * p),
                  x = y(r, 'STRIPBYTECOUNTS'),
                  v = w(r, 'ROWSPERSTRIP'),
                  k = null != (o = w(r, 'COMPRESSION')) ? o : 1;
                let S,
                  A,
                  I,
                  P,
                  M,
                  R,
                  D,
                  E,
                  _,
                  L,
                  U,
                  G = v;
                if (g % 8 == 0)
                  for (S = 0; S < s.length; S++) {
                    if (
                      ((M = S * (v * u) * p),
                      (G = (S + 1) * v > c ? c - S * v : v),
                      'u8' === f || 's8' === f || i)
                    ) {
                      if (8 === k || 32946 === k)
                        (D = new Uint8Array(e, s[S], x[S])),
                          (L = new h.Z(D)),
                          (U = L.getBytes()),
                          (R = new ArrayBuffer(U.length)),
                          (D = new Uint8Array(R)),
                          D.set(U),
                          D.length !== (G * u * p * g) / 8 &&
                            console.log(
                              'strip byte counts is different than expected',
                            );
                      else if (6 === k) {
                        D = new Uint8Array(e, s[S], x[S]);
                        const t = new n.J();
                        t.parse(D);
                        const r = t.getData(t.width, t.height, !0);
                        (R = new ArrayBuffer(r.length)),
                          (D = new Uint8Array(R)),
                          D.set(r);
                      } else
                        5 === k
                          ? ((D = (0, a.J)(e, s[S], x[S], t.littleEndian)),
                            (R = D.buffer))
                          : 1 === k &&
                            (x[S] !== (G * u * p * g) / 8 &&
                              console.log(
                                'strip byte counts is different than expected',
                              ),
                            (R = e.slice(s[S], s[S] + x[S])));
                      P = new C(R);
                    } else {
                      switch (
                        (6 === k || 8 === k || 32946 === k
                          ? ((D = new Uint8Array(e, s[S], x[S])),
                            (L = new h.Z(D)),
                            (D = L.getBytes()),
                            (R = new ArrayBuffer(D.length)),
                            (E = new Uint8Array(R)),
                            D.length !== (G * u * p * g) / 8 &&
                              console.log(
                                'strip byte counts is different than expected',
                              ))
                          : 1 === k &&
                            (x[S] !== (G * u * p * g) / 8 &&
                              console.log(
                                'strip byte counts is different than expected',
                              ),
                            (R = new ArrayBuffer(x[S])),
                            (D = new Uint8Array(e, s[S], x[S])),
                            (E = new Uint8Array(R))),
                        f)
                      ) {
                        case 'u16':
                        case 's16':
                          for (I = 0; I < D.length; I += 2)
                            (E[I] = D[I + 1]), (E[I + 1] = D[I]);
                          break;
                        case 'u32':
                        case 's32':
                        case 'f32':
                          for (I = 0; I < D.length; I += 4)
                            (E[I] = D[I + 3]),
                              (E[I + 1] = D[I + 2]),
                              (E[I + 2] = D[I + 1]),
                              (E[I + 3] = D[I]);
                      }
                      P = new C(R);
                    }
                    b.set(P, M);
                  }
                const O = [];
                if (1 === p) O.push(b);
                else
                  for (S = 0; S < p; S++) {
                    for (_ = new C(m), A = 0; A < m; A++) _[A] = b[A * p + S];
                    O.push(_);
                  }
                return { width: u, height: c, pixelType: f, pixels: O };
              })(e, r, p)),
          null !== m)
        ) {
          if (
            ((f.mask = new Uint8Array(f.width * f.height)), Math.abs(m) > 1e24)
          )
            for (c = 0; c < f.width * f.height; c++)
              Math.abs((f.pixels[0][c] - m) / m) < 1e-6
                ? (f.mask[c] = 0)
                : (f.mask[c] = 1);
          else
            for (c = 0; c < f.width * f.height; c++)
              f.pixels[0][c] === m ? (f.mask[c] = 0) : (f.mask[c] = 1);
          f.noDataValue = m;
        }
        return f;
      }
    },
    9832: (e, t, r) => {
      r.d(t, { Z: () => s });
      const o = (() => {
          const e = [];
          return (
            (e[254] = 'NEWSUBFILETYPE'),
            (e[255] = 'SUBFILETYPE'),
            (e[256] = 'IMAGEWIDTH'),
            (e[257] = 'IMAGELENGTH'),
            (e[258] = 'BITSPERSAMPLE'),
            (e[259] = 'COMPRESSION'),
            (e[262] = 'PHOTOMETRICINTERPRETATION'),
            (e[263] = 'THRESHHOLDING'),
            (e[264] = 'CELLWIDTH'),
            (e[265] = 'CELLLENGTH'),
            (e[266] = 'FILLORDER'),
            (e[269] = 'DOCUMENTNAME'),
            (e[270] = 'IMAGEDESCRIPTION'),
            (e[271] = 'MAKE'),
            (e[272] = 'MODEL'),
            (e[273] = 'STRIPOFFSETS'),
            (e[274] = 'ORIENTATION'),
            (e[277] = 'SAMPLESPERPIXEL'),
            (e[278] = 'ROWSPERSTRIP'),
            (e[279] = 'STRIPBYTECOUNTS'),
            (e[280] = 'MINSAMPLEVALUE'),
            (e[281] = 'MAXSAMPLEVALUE'),
            (e[282] = 'XRESOLUTION'),
            (e[283] = 'YRESOLUTION'),
            (e[284] = 'PLANARCONFIGURATION'),
            (e[285] = 'PAGENAME'),
            (e[286] = 'XPOSITION'),
            (e[287] = 'YPOSITION'),
            (e[288] = 'FREEOFFSETS'),
            (e[289] = 'FREEBYTECOUNTS'),
            (e[290] = 'GRAYRESPONSEUNIT'),
            (e[291] = 'GRAYRESPONSECURVE'),
            (e[292] = 'T4OPTIONS'),
            (e[293] = 'T6OPTIONS'),
            (e[296] = 'RESOLUTIONUNIT'),
            (e[297] = 'PAGENUMBER'),
            (e[300] = 'COLORRESPONSEUNIT'),
            (e[301] = 'TRANSFERFUNCTION'),
            (e[305] = 'SOFTWARE'),
            (e[306] = 'DATETIME'),
            (e[315] = 'ARTIST'),
            (e[316] = 'HOSTCOMPUTER'),
            (e[317] = 'PREDICTOR'),
            (e[318] = 'WHITEPOINT'),
            (e[319] = 'PRIMARYCHROMATICITIES'),
            (e[320] = 'COLORMAP'),
            (e[321] = 'HALFTONEHINTS'),
            (e[322] = 'TILEWIDTH'),
            (e[323] = 'TILELENGTH'),
            (e[324] = 'TILEOFFSETS'),
            (e[325] = 'TILEBYTECOUNTS'),
            (e[326] = 'BADFAXLINES'),
            (e[327] = 'CLEANFAXDATA'),
            (e[328] = 'CONSECUTIVEBADFAXLINES'),
            (e[330] = 'SUBIFD'),
            (e[332] = 'INKSET'),
            (e[333] = 'INKNAMES'),
            (e[334] = 'NUMBEROFINKS'),
            (e[336] = 'DOTRANGE'),
            (e[337] = 'TARGETPRINTER'),
            (e[338] = 'EXTRASAMPLES'),
            (e[339] = 'SAMPLEFORMAT'),
            (e[340] = 'SMINSAMPLEVALUE'),
            (e[341] = 'SMAXSAMPLEVALUE'),
            (e[342] = 'TRANSFERRANGE'),
            (e[347] = 'JPEGTABLES'),
            (e[512] = 'JPEGPROC'),
            (e[513] = 'JPEGIFOFFSET'),
            (e[514] = 'JPEGIFBYTECOUNT'),
            (e[515] = 'JPEGRESTARTINTERVAL'),
            (e[517] = 'JPEGLOSSLESSPREDICTORS'),
            (e[518] = 'JPEGPOINTTRANSFORM'),
            (e[519] = 'JPEGQTABLES'),
            (e[520] = 'JPEGDCTABLES'),
            (e[521] = 'JPEGACTABLES'),
            (e[529] = 'YCBCRCOEFFICIENTS'),
            (e[530] = 'YCBCRSUBSAMPLING'),
            (e[531] = 'YCBCRPOSITIONING'),
            (e[532] = 'REFERENCEBLACKWHITE'),
            (e[700] = 'XMP'),
            (e[33550] = 'GEOPIXELSCALE'),
            (e[33922] = 'GEOTIEPOINTS'),
            (e[33432] = 'COPYRIGHT'),
            (e[42112] = 'GDAL_METADATA'),
            (e[42113] = 'GDAL_NODATA'),
            (e[50844] = 'RPCCOEFFICIENT'),
            (e[34264] = 'GEOTRANSMATRIX'),
            (e[34735] = 'GEOKEYDIRECTORY'),
            (e[34736] = 'GEODOUBLEPARAMS'),
            (e[34737] = 'GEOASCIIPARAMS'),
            (e[34665] = 'EXIFIFD'),
            (e[34853] = 'GPSIFD'),
            (e[40965] = 'INTEROPERABILITYIFD'),
            e
          );
        })(),
        n = (() => {
          const e = [].concat(o);
          return (
            (e[36864] = 'ExifVersion'),
            (e[40960] = 'FlashpixVersion'),
            (e[40961] = 'ColorSpace'),
            (e[42240] = 'Gamma'),
            (e[37121] = 'ComponentsConfiguration'),
            (e[37122] = 'CompressedBitsPerPixel'),
            (e[40962] = 'PixelXDimension'),
            (e[40963] = 'PixelYDimension'),
            (e[37500] = 'MakerNote'),
            (e[37510] = 'UserComment'),
            (e[40964] = 'RelatedSoundFile'),
            (e[36867] = 'DateTimeOriginal'),
            (e[36868] = 'DateTimeDigitized'),
            (e[36880] = 'OffsetTime'),
            (e[36881] = 'OffsetTimeOriginal'),
            (e[36882] = 'OffsetTimeDigitized'),
            (e[37520] = 'SubSecTime'),
            (e[37521] = 'SubSecTimeOriginal'),
            (e[37522] = 'SubSecTimeDigitized'),
            (e[37888] = 'Temperature'),
            (e[37889] = 'Humidity'),
            (e[37890] = 'Pressure'),
            (e[37891] = 'WaterDepth'),
            (e[37892] = 'Acceleration'),
            (e[37893] = 'CameraElevationAngle'),
            (e[42016] = 'ImageUniqueID'),
            (e[42032] = 'CameraOwnerName'),
            (e[42033] = 'BodySerialNumber'),
            (e[42034] = 'LensSpecification'),
            (e[42035] = 'LensMake'),
            (e[42036] = 'LensModel'),
            (e[42037] = 'LensSerialNumber'),
            (e[33434] = 'ExposureTime'),
            (e[33437] = 'FNumber'),
            (e[34850] = 'ExposureProgram'),
            (e[34852] = 'SpectralSensitivity'),
            (e[34855] = 'PhotographicSensitivity'),
            (e[34856] = 'OECF'),
            (e[34864] = 'SensitivityType'),
            (e[34865] = 'StandardOutputSensitivity'),
            (e[34866] = 'RecommendedExposureIndex'),
            (e[34867] = 'ISOSpeed'),
            (e[34868] = 'ISOSpeedLatitudeyyy'),
            (e[34869] = 'ISOSpeedLatitudezzz'),
            (e[37377] = 'ShutterSpeedValue'),
            (e[37378] = 'ApertureValue'),
            (e[37379] = 'BrightnessValue'),
            (e[37380] = 'ExposureBiasValue'),
            (e[37381] = 'MaxApertureValue'),
            (e[37382] = 'SubjectDistance'),
            (e[37383] = 'MeteringMode'),
            (e[37384] = 'LightSource'),
            (e[37385] = 'Flash'),
            (e[37386] = 'FocalLength'),
            (e[37396] = 'SubjectArea'),
            (e[41483] = 'FlashEnergy'),
            (e[41484] = 'SpatialFrequencyResponse'),
            (e[41486] = 'FocalPlaneXResolution'),
            (e[41487] = 'FocalPlaneYResolution'),
            (e[41488] = 'FocalPlaneResolutionUnit'),
            (e[41492] = 'SubjectLocation'),
            (e[41493] = 'ExposureIndex'),
            (e[41495] = 'SensingMethod'),
            (e[41728] = 'FileSource'),
            (e[41729] = 'SceneType'),
            (e[41730] = 'CFAPattern'),
            (e[41985] = 'CustomRendered'),
            (e[41986] = 'ExposureMode'),
            (e[41987] = 'WhiteBalance'),
            (e[41988] = 'DigitalZoomRatio'),
            (e[41989] = 'FocalLengthIn35mmFilm'),
            (e[41990] = 'SceneCaptureType'),
            (e[41991] = 'GainControl'),
            (e[41992] = 'Contrast'),
            (e[41993] = 'Saturation'),
            (e[41994] = 'Sharpness'),
            (e[41995] = 'DeviceSettingDescription'),
            (e[41996] = 'SubjectDistanceRange'),
            e
          );
        })(),
        i = (() => {
          const e = [];
          return (
            (e[1024] = 'GTModelTypeGeoKey'),
            (e[1025] = 'GTRasterTypeGeoKey'),
            (e[1026] = 'GTCitationGeoKey'),
            (e[2048] = 'GeographicTypeGeoKey'),
            (e[2049] = 'GeogCitationGeoKey'),
            (e[2050] = 'GeogGeodeticDatumGeoKey'),
            (e[2051] = 'GeogPrimeMeridianGeoKey'),
            (e[2052] = 'GeogLinearUnitsGeoKey'),
            (e[2053] = 'GeogLinearUnitSizeGeoKey'),
            (e[2054] = 'GeogAngularUnitsGeoKey'),
            (e[2055] = 'GeogAngularUnitSizeGeoKey'),
            (e[2056] = 'GeogEllipsoidGeoKey'),
            (e[2057] = 'GeogSemiMajorAxisGeoKey'),
            (e[2058] = 'GeogSemiMinorAxisGeoKey'),
            (e[2059] = 'GeogInvFlatteningGeoKey'),
            (e[2061] = 'GeogPrimeMeridianLongGeoKey'),
            (e[2060] = 'GeogAzimuthUnitsGeoKey'),
            (e[3072] = 'ProjectedCSTypeGeoKey'),
            (e[3073] = 'PCSCitationGeoKey'),
            (e[3074] = 'ProjectionGeoKey'),
            (e[3075] = 'ProjCoordTransGeoKey'),
            (e[3076] = 'ProjLinearUnitsGeoKey'),
            (e[3077] = 'ProjLinearUnitSizeGeoKey'),
            (e[3078] = 'ProjStdParallel1GeoKey'),
            (e[3079] = 'ProjStdParallel2GeoKey'),
            (e[3080] = 'ProjNatOriginLongGeoKey'),
            (e[3081] = 'ProjNatOriginLatGeoKey'),
            (e[3082] = 'ProjFalseEastingGeoKey'),
            (e[3083] = 'ProjFalseNorthingGeoKey'),
            (e[3084] = 'ProjFalseOriginLongGeoKey'),
            (e[3085] = 'ProjFalseOriginLatGeoKey'),
            (e[3086] = 'ProjFalseOriginEastingGeoKey'),
            (e[3087] = 'ProjFalseOriginNorthingGeoKey'),
            (e[3088] = 'ProjCenterLongGeoKey'),
            (e[3090] = 'ProjCenterEastingGeoKey'),
            (e[3091] = 'ProjCenterNorthingGeoKey'),
            (e[3092] = 'ProjScaleAtNatOriginGeoKey'),
            (e[3093] = 'ProjScaleAtCenterGeoKey'),
            (e[3094] = 'ProjAzimuthAngleGeoKey'),
            (e[3095] = 'ProjStraightVertPoleLongGeoKey'),
            (e[4096] = 'VerticalCSTypeGeoKey'),
            (e[4097] = 'VerticalCitationGeoKey'),
            (e[4098] = 'VerticalDatumGeoKey'),
            (e[4099] = 'VerticalUnitsGeoKey'),
            e
          );
        })(),
        a = new Map();
      a.set('EXIFIFD', n),
        a.set('GPSIFD', [
          'GPSVersionID',
          'GPSLatitudeRef',
          'GPSLatitude',
          'GPSLongitudeRef',
          'GPSLongitude',
          'GPSAltitudeRef',
          'GPSAltitude',
          'GPSTimeStamp',
          'GPSSatellites',
          'GPSStatus',
          'GPSMeasureMode',
          'GPSDOP',
          'GPSSpeedRef',
          'GPSSpeed',
          'GPSTrackRef',
          'GPSTrack',
          'GPSImgDirectionRef',
          'GPSImgDirection',
          'GPSMapDatum',
          'GPSDestLatitudeRef',
          'GPSDestLatitude',
          'GPSDestLongitudeRef',
          'GPSDestLongitude',
          'GPSDestBearingRef',
          'GPSDestBearing',
          'GPSDestDistanceRef',
          'GPSDestDistance',
          'GPSProcessingMethod',
          'GPSAreaInformation',
          'GPSDateStamp',
          'GPSDifferential',
          'GPSHPositioningError',
        ]);
      const s = {
        TIFF_TAGS: o,
        ifdTags: a,
        GEO_KEYS: i,
        getTagName: function (e, t) {
          let r = (t || o)[e];
          return void 0 === r && (r = 'unknown' + String(e)), r;
        },
      };
    },
    48279: (e, t, r) => {
      r.d(t, { f: () => o });
      const o = (() => {
        const e = new ArrayBuffer(4),
          t = new Uint8Array(e);
        return (new Uint32Array(e)[0] = 1), 1 === t[0];
      })();
    },
    55914: (e, t, r) => {
      r.d(t, {
        Uk: () => P,
        SJ: () => l,
        Pz: () => s,
        oc: () => f,
        hE: () => c,
        Oh: () => u,
        Hv: () => h,
        qF: () => a,
        Qh: () => I,
        nk: () => i,
        XV: () => d,
        us: () => y,
        zp: () => m,
        pW: () => C,
        Vl: () => S,
        dy: () => p,
      });
      var o = r(70586),
        n = r(54163);
      function i(e) {
        return (
          (0, o.pC)(e) &&
          'esri.layers.support.PixelBlock' === e.declaredClass &&
          e.pixels &&
          e.pixels.length > 0
        );
      }
      function a(e, t) {
        if (null == t || !t.length || !i(e)) return e;
        const r = e.pixels.length;
        return (t && t.some((e) => e >= r)) ||
          (1 === r && 1 === t.length && 0 === t[0])
          ? e
          : r !== t.length || t.some((e, t) => e !== t)
          ? new n.Z({
              pixelType: e.pixelType,
              width: e.width,
              height: e.height,
              mask: e.mask,
              validPixelCount: e.validPixelCount,
              maskIsAlpha: e.maskIsAlpha,
              pixels: t.map((t) => e.pixels[t]),
              statistics: e.statistics && t.map((t) => e.statistics[t]),
            })
          : e;
      }
      function s(e) {
        if (!e) return;
        const t = e.colormap;
        if (!t || 0 === t.length) return;
        const r = t.sort((e, t) => e[0] - t[0]);
        let o = 0;
        r[0][0] < 0 && (o = r[0][0]);
        const n = Math.max(256, r[r.length - 1][0] - o + 1),
          i = new Uint8Array(4 * n),
          a = [];
        let s,
          l = 0,
          h = 0;
        const u = 5 === r[0].length;
        if (n > 65536)
          return (
            r.forEach((e) => {
              a[e[0] - o] = u ? e.slice(1) : e.slice(1).concat([255]);
            }),
            { indexed2DColormap: a, offset: o, alphaSpecified: u }
          );
        if (e.fillUnspecified)
          for (s = r[h], l = s[0] - o; l < n; l++)
            (i[4 * l] = s[1]),
              (i[4 * l + 1] = s[2]),
              (i[4 * l + 2] = s[3]),
              (i[4 * l + 3] = u ? s[4] : 255),
              l === s[0] - o && (s = h === r.length - 1 ? s : r[++h]);
        else
          for (l = 0; l < r.length; l++)
            (s = r[l]),
              (h = 4 * (s[0] - o)),
              (i[h] = s[1]),
              (i[h + 1] = s[2]),
              (i[h + 2] = s[3]),
              (i[h + 3] = u ? s[4] : 255);
        return { indexedColormap: i, offset: o, alphaSpecified: u };
      }
      function l(e, t) {
        if (!i(e)) return e;
        if (!t && (t.indexedColormap || t.indexed2DColormap)) return e;
        const r = e.clone(),
          o = r.pixels;
        let n = r.mask;
        const a = r.width * r.height;
        if (1 !== o.length) return e;
        const {
            indexedColormap: s,
            indexed2DColormap: l,
            offset: h,
            alphaSpecified: u,
          } = t,
          c = s.length - 1;
        let f = 0;
        const p = o[0],
          d = new Uint8Array(p.length),
          m = new Uint8Array(p.length),
          g = new Uint8Array(p.length);
        let y,
          C = 0;
        if (s)
          if (n)
            for (f = 0; f < a; f++)
              n[f] &&
                ((C = 4 * (p[f] - h)),
                C < h || C > c
                  ? (n[f] = 0)
                  : ((d[f] = s[C]),
                    (m[f] = s[C + 1]),
                    (g[f] = s[C + 2]),
                    (n[f] = s[C + 3])));
          else {
            for (n = new Uint8Array(a), f = 0; f < a; f++)
              (C = 4 * (p[f] - h)),
                C < h || C > c
                  ? (n[f] = 0)
                  : ((d[f] = s[C]),
                    (m[f] = s[C + 1]),
                    (g[f] = s[C + 2]),
                    (n[f] = s[C + 3]));
            r.mask = n;
          }
        else if (n)
          for (f = 0; f < a; f++)
            n[f] &&
              ((y = l[p[f]]),
              (d[f] = y[0]),
              (m[f] = y[1]),
              (g[f] = y[2]),
              (n[f] = y[3]));
        else {
          for (n = new Uint8Array(a), f = 0; f < a; f++)
            (y = l[p[f]]),
              (d[f] = y[0]),
              (m[f] = y[1]),
              (g[f] = y[2]),
              (n[f] = y[3]);
          r.mask = n;
        }
        return (
          (r.pixels = [d, m, g]),
          (r.statistics = null),
          (r.pixelType = 'u8'),
          (r.maskIsAlpha = u),
          r
        );
      }
      function h(e) {
        if (!i(e)) return null;
        e.statistics || e.updateStatistics();
        const { pixels: t, mask: r, pixelType: o, statistics: n } = e,
          a = e.width * e.height,
          s = t.length;
        let l, h, u, c, f;
        const p = [],
          d = [];
        let m, g, y, C, w, b, x, v, T, k;
        const S = 256;
        for (c = 0; c < s; c++) {
          if (((m = new Uint32Array(S)), (y = t[c]), 'u8' === o))
            if (((l = -0.5), (h = 255.5), r))
              for (f = 0; f < a; f++) r[f] && m[y[f]]++;
            else for (f = 0; f < a; f++) m[y[f]]++;
          else {
            if (
              ((l = n[c].minValue),
              (h = n[c].maxValue),
              (u = (h - l) / S),
              (g = new Uint32Array(257)),
              r)
            )
              for (f = 0; f < a; f++) r[f] && g[Math.floor((y[f] - l) / u)]++;
            else for (f = 0; f < a; f++) g[Math.floor((y[f] - l) / u)]++;
            for (f = 0; f < 255; f++) m[f] = g[f];
            m[255] = g[255] + g[256];
          }
          for (
            p.push({ min: l, max: h, size: S, counts: m }),
              C = 0,
              w = 0,
              v = 0,
              f = 0;
            f < S;
            f++
          )
            (C += m[f]), (w += f * m[f]);
          for (T = w / C, f = 0; f < S; f++) v += m[f] * (f - T) ** 2;
          (k = Math.sqrt(v / (C - 1))),
            (u = (h - l) / S),
            (b = (T + 0.5) * u + l),
            (x = k * u),
            d.push({ min: l, max: h, avg: b, stddev: x });
        }
        return { statistics: d, histograms: p };
      }
      function u(e) {
        const t = [];
        for (let r = 0; r < e.length; r++) {
          const { min: o, max: n, size: i, counts: a } = e[r];
          let s = 0,
            l = 0;
          for (let e = 0; e < i; e++) (s += a[e]), (l += e * a[e]);
          const h = l / s;
          let u = 0;
          for (let e = 0; e < i; e++) u += a[e] * (e - h) ** 2;
          const c = (n - o) / i,
            f = (h + 0.5) * c + o,
            p = Math.sqrt(u / (s - 1)) * c;
          t.push({ min: o, max: n, avg: f, stddev: p });
        }
        return t;
      }
      function c(e) {
        const { minCutOff: t, maxCutOff: r, gamma: o, pixelType: n } = e,
          i = e.outMin || 0,
          a = e.outMax || 255;
        if (-1 === ['u8', 'u16', 's8', 's16'].indexOf(n)) return null;
        const s = t.length;
        let l,
          h,
          u = 0;
        's8' === n ? (u = -127) : 's16' === n && (u = -32767);
        let c = 256;
        ['u16', 's16'].indexOf(n) > -1 && (c = 65536);
        const f = [],
          p = [],
          d = a - i;
        for (l = 0; l < s; l++)
          (p[l] = r[l] - t[l]), (f[l] = d / (r[l] - t[l]));
        const m = o && o.length >= s,
          g = [];
        if (m)
          for (l = 0; l < s; l++)
            o[l] > 1
              ? o[l] > 2
                ? (g[l] = 6.5 + (o[l] - 2) ** 2.5)
                : (g[l] = 6.5 + 100 * (2 - o[l]) ** 4)
              : (g[l] = 1);
        let y;
        const C = [];
        let w, b, x;
        if (m)
          for (l = 0; l < s; l++) {
            for (x = [], h = 0; h < c; h++)
              (w = h + u),
                (y = (w - t[l]) / p[l]),
                (b = 1),
                o[l] > 1 && (b -= (1 / d) ** (y * g[l])),
                w < r[l] && w > t[l]
                  ? (x[h] = Math.floor(b * d * y ** (1 / o[l])) + i)
                  : w >= r[l]
                  ? (x[h] = a)
                  : (x[h] = i);
            C[l] = x;
          }
        else
          for (l = 0; l < s; l++) {
            for (x = [], h = 0; h < c; h++)
              (w = h + u),
                w <= t[l]
                  ? (x[h] = i)
                  : w >= r[l]
                  ? (x[h] = a)
                  : (x[h] = Math.floor(((w - t[l]) / p[l]) * d) + i);
            C[l] = x;
          }
        if (null != e.contrastOffset) {
          const t = (function (e, t) {
            const r = Math.min(Math.max(e, -100), 100),
              o = Math.min(Math.max(t, -100), 100),
              n = 255;
            let i, a;
            const s = new Uint8Array(256);
            for (i = 0; i < 256; i++)
              r > 0 && r < 100
                ? (a = (200 * i - 25500 + 510 * o) / (2 * (100 - r)) + 128)
                : r <= 0 && r > -100
                ? (a = ((200 * i - 25500 + 510 * o) * (100 + r)) / 2e4 + 128)
                : 100 === r
                ? ((a = 200 * i - 25500 + 256 * (100 - r) + 510 * o),
                  (a = a > 0 ? n : 0))
                : -100 === r && (a = 128),
                (s[i] = a > n ? n : a < 0 ? 0 : a);
            return s;
          })(e.contrastOffset, e.brightnessOffset);
          for (l = 0; l < s; l++)
            for (x = C[l], h = 0; h < c; h++) x[h] = t[x[h]];
        }
        return { lut: C, offset: u };
      }
      function f(e, t = 256) {
        t = Math.min(t, 256);
        const { size: r, counts: o } = e,
          n = new Uint8Array(r),
          i = o.reduce((e, r) => e + r / t, 0);
        let a = 0,
          s = 0,
          l = 0,
          h = i;
        for (let e = 0; e < r; e++)
          if (((l += o[e]), !(e < r - 1 && l + o[e + 1] < h))) {
            for (; a < t - 1 && h < l; ) a++, (h += i);
            for (let t = s; t <= e; t++) n[t] = a;
            s = e + 1;
          }
        for (let e = s; e < r; e++) n[e] = t - 1;
        return n;
      }
      function p(e, t) {
        if (!i(e)) return null;
        const r = e.clone(),
          { pixels: o, mask: n } = r,
          { minCutOff: a, maxCutOff: s, gamma: l } = t,
          h = t.outMin || 0,
          u = t.outMax || 255,
          c = r.width * r.height,
          f = o.length;
        let p, d, m, g, y;
        const C = u - h,
          w = [],
          b = [];
        for (p = 0; p < f; p++)
          (b[p] = s[p] - a[p]), (w[p] = C / (s[p] - a[p]));
        const x = l && l.length >= f,
          v = [];
        if (x)
          for (p = 0; p < f; p++)
            l[p] > 1
              ? l[p] > 2
                ? (v[p] = 6.5 + (l[p] - 2) ** 2.5)
                : (v[p] = 6.5 + 100 * (2 - l[p]) ** 4)
              : (v[p] = 1);
        if (x)
          if (null != n) {
            for (d = 0; d < c; d++)
              if (n[d])
                for (p = 0; p < f; p++)
                  (m = o[p][d]),
                    (y = (m - a[p]) / b[p]),
                    (g = 1),
                    l[p] > 1 && (g -= (1 / C) ** (y * v[p])),
                    m < s[p] && m > a[p]
                      ? (o[p][d] = Math.floor(g * C * y ** (1 / l[p])) + h)
                      : m >= s[p]
                      ? (o[p][d] = u)
                      : (o[p][d] = h);
          } else
            for (d = 0; d < c; d++)
              for (p = 0; p < f; p++)
                (m = o[p][d]),
                  (y = (m - a[p]) / b[p]),
                  (g = 1),
                  l[p] > 1 && (g -= (1 / C) ** (y * v[p])),
                  m < s[p] && m > a[p]
                    ? (o[p][d] = Math.floor(g * C * y ** (1 / l[p])) + h)
                    : m >= s[p]
                    ? (o[p][d] = u)
                    : (o[p][d] = h);
        else if (null != n) {
          for (d = 0; d < c; d++)
            if (n[d])
              for (p = 0; p < f; p++)
                (m = o[p][d]),
                  m < s[p] && m > a[p]
                    ? (o[p][d] = Math.floor(((m - a[p]) / b[p]) * C) + h)
                    : m >= s[p]
                    ? (o[p][d] = u)
                    : (o[p][d] = h);
        } else
          for (d = 0; d < c; d++)
            for (p = 0; p < f; p++)
              (m = o[p][d]),
                m < s[p] && m > a[p]
                  ? (o[p][d] = Math.floor(((m - a[p]) / b[p]) * C) + h)
                  : m >= s[p]
                  ? (o[p][d] = u)
                  : (o[p][d] = h);
        return (r.pixelType = 'u8'), r.updateStatistics(), r;
      }
      function d(e, t) {
        if (!i(e)) return null;
        const { pixels: r, mask: o } = e,
          a = e.width * e.height,
          s = r.length;
        let l = t.lut;
        const { offset: h } = t;
        let u, c;
        l && 1 === l[0].length && (l = r.map(() => l));
        const f = [];
        let p, d, m;
        if (h)
          if (null == o)
            for (u = 0; u < s; u++) {
              for (p = r[u], d = l[u], m = new Uint8Array(a), c = 0; c < a; c++)
                m[c] = d[p[c] - h];
              f.push(m);
            }
          else
            for (u = 0; u < s; u++) {
              for (p = r[u], d = l[u], m = new Uint8Array(a), c = 0; c < a; c++)
                o[c] && (m[c] = d[p[c] - h]);
              f.push(m);
            }
        else if (null == o)
          for (u = 0; u < s; u++) {
            for (p = r[u], d = l[u], m = new Uint8Array(a), c = 0; c < a; c++)
              m[c] = d[p[c]];
            f.push(m);
          }
        else
          for (u = 0; u < s; u++) {
            for (p = r[u], d = l[u], m = new Uint8Array(a), c = 0; c < a; c++)
              o[c] && (m[c] = d[p[c]]);
            f.push(m);
          }
        const g = new n.Z({
          width: e.width,
          height: e.height,
          pixels: f,
          mask: o,
          pixelType: 'u8',
        });
        return g.updateStatistics(), g;
      }
      function m(e, t) {
        if (!i(e)) return null;
        const r = e.clone(),
          { pixels: o } = r,
          n = r.width * r.height,
          a = t.length,
          s = Math.floor(a / 2),
          l = t[Math.floor(s)],
          h = o[0];
        let u,
          c,
          f,
          p,
          d,
          m,
          g = !1;
        const y = new Uint8Array(n),
          C = new Uint8Array(n),
          w = new Uint8Array(n);
        let b = r.mask;
        const x = 4 === t[0].mappedColor.length;
        for (
          b || ((b = new Uint8Array(n)), b.fill(x ? 255 : 1), (r.mask = b)),
            d = 0;
          d < n;
          d++
        )
          if (b[d]) {
            for (
              u = h[d], g = !1, m = s, c = l, f = 0, p = a - 1;
              p - f > 1;

            ) {
              if (u === c.value) {
                g = !0;
                break;
              }
              u > c.value ? (f = m) : (p = m),
                (m = Math.floor((f + p) / 2)),
                (c = t[Math.floor(m)]);
            }
            g ||
              (u === t[f].value
                ? ((c = t[f]), (g = !0))
                : u === t[p].value
                ? ((c = t[p]), (g = !0))
                : u < t[f].value
                ? ((g = !1), (c = null))
                : u > t[f].value &&
                  (u < t[p].value
                    ? ((c = t[f]), (g = !0))
                    : p === a - 1
                    ? ((g = !1), (c = null))
                    : ((c = t[p]), (g = !0)))),
              g
                ? ((y[d] = c.mappedColor[0]),
                  (C[d] = c.mappedColor[1]),
                  (w[d] = c.mappedColor[2]),
                  (b[d] = c.mappedColor[3]))
                : (y[d] = C[d] = w[d] = b[d] = 0);
          }
        return (
          (r.pixels = [y, C, w]),
          (r.mask = b),
          (r.pixelType = 'u8'),
          (r.maskIsAlpha = x),
          r
        );
      }
      function g(e, t, r, o, n, i) {
        const { width: a, height: s } = r.block,
          { x: l, y: h } = r.offset,
          { width: u, height: c } = r.mosaic,
          f = (function (e, t, r, o, n, i, a, s) {
            return {
              xmin: n <= r * e ? 0 : n < r * e + e ? n - r * e : e,
              ymin: i <= o * t ? 0 : i < o * t + t ? i - o * t : t,
              xmax: n + a <= r * e ? 0 : n + a < r * e + e ? n + a - r * e : e,
              ymax: i + s <= o * t ? 0 : i + s < o * t + t ? i + s - o * t : t,
            };
          })(a, s, o, n, l, h, u, c);
        let p = 0,
          d = 0;
        if (i) {
          const e = i.hasGCSSShiftTransform ? 360 : i.halfWorldWidth,
            t = a * i.resolutionX,
            r = i.startX + o * t,
            n = r + t;
          r < e && n > e
            ? (d = i.rightPadding)
            : r >= e && ((p = i.leftMargin - i.rightPadding), (d = 0));
        }
        if (((f.xmax -= d), 'number' != typeof t))
          for (let r = f.ymin; r < f.ymax; r++) {
            const i = (n * s + r - h) * u + (o * a - l) + p,
              c = r * a;
            for (let r = f.xmin; r < f.xmax; r++) e[i + r] = t[c + r];
          }
        else
          for (let r = f.ymin; r < f.ymax; r++) {
            const i = (n * s + r - h) * u + (o * a - l) + p;
            for (let r = f.xmin; r < f.xmax; r++) e[i + r] = t;
          }
      }
      function y(e, t, r = {}) {
        const {
          clipOffset: a,
          clipSize: s,
          alignmentInfo: l,
          blockWidths: h,
        } = r;
        if (h)
          return (function (e, t, r) {
            const a = e.find((e) => (0, o.pC)(e));
            if (!(0, o.pC)(a)) return null;
            const s = e.some((e) => !(0, o.pC)(e) || !!e.mask),
              { width: l, height: h } = t,
              u = s ? new Uint8Array(l * h) : null,
              { blockWidths: c } = r,
              f = [],
              p = a.getPlaneCount(),
              d = n.Z.getPixelArrayConstructor(a.pixelType);
            if (s)
              for (let t = 0, r = 0; t < e.length; r += c[t], t++) {
                const o = e[t];
                if (!i(o)) continue;
                const n = o.mask;
                for (let e = 0; e < h; e++)
                  for (let i = 0; i < c[t]; i++)
                    u[e * l + i + r] = null == n ? 255 : n[e * o.width + i];
              }
            for (let t = 0; t < p; t++) {
              const r = new d(l * h);
              for (let o = 0, n = 0; o < e.length; n += c[o], o++) {
                const a = e[o];
                if (!i(a)) continue;
                const s = a.pixels[t];
                if (null != s)
                  for (let e = 0; e < h; e++)
                    for (let t = 0; t < c[o]; t++)
                      r[e * l + t + n] = s[e * a.width + t];
              }
              f.push(r);
            }
            const m = new n.Z({
              width: l,
              height: h,
              mask: u,
              pixels: f,
              pixelType: a.pixelType,
            });
            return m.updateStatistics(), m;
          })(e, t, { blockWidths: h });
        const u = e.find((e) => i(e));
        if ((0, o.Wi)(u)) return null;
        const c = s ? s.width : t.width,
          f = s ? s.height : t.height,
          p = u.width,
          d = u.height,
          m = t.width / p,
          y = t.height / d,
          C = {
            offset: a || { x: 0, y: 0 },
            mosaic: s || t,
            block: { width: p, height: d },
          },
          w = u.pixelType,
          b = n.Z.getPixelArrayConstructor(w),
          x = u.pixels.length,
          v = [];
        let T, k, S;
        for (let t = 0; t < x; t++) {
          k = new b(c * f);
          for (let r = 0; r < y; r++)
            for (let o = 0; o < m; o++) {
              const n = e[r * m + o];
              i(n) && ((T = n.pixels[t]), g(k, T, C, o, r, l));
            }
          v.push(k);
        }
        if (e.some((e) => (0, o.Wi)(e) || (e.mask && e.mask.length > 0))) {
          S = new Uint8Array(c * f);
          for (let t = 0; t < y; t++)
            for (let r = 0; r < m; r++) {
              const n = e[t * m + r];
              g(S, ((0, o.pC)(n) ? n.mask : null) || (n ? 1 : 0), C, r, t, l);
            }
        }
        const A = new n.Z({
          width: c,
          height: f,
          pixels: v,
          pixelType: w,
          mask: S,
        });
        return A.updateStatistics(), A;
      }
      function C(e, t, r) {
        if (!i(e)) return null;
        const { width: o, height: n } = e,
          a = t.x,
          s = t.y,
          l = r.width + a,
          h = r.height + s;
        if (a < 0 || s < 0 || l > o || h > n) return e;
        if (0 === a && 0 === s && l === o && h === n) return e;
        e.mask || (e.mask = new Uint8Array(o * n));
        const u = e.mask;
        for (let e = 0; e < n; e++) {
          const t = e * o;
          for (let r = 0; r < o; r++)
            u[t + r] = e < s || e >= h || r < a || r >= l ? 0 : 1;
        }
        return e.updateStatistics(), e;
      }
      function w(e) {
        if (!i(e)) return null;
        const t = e.clone(),
          { width: r, height: o, pixels: n, mask: a } = e,
          s = n[0],
          l = t.pixels[0];
        for (let e = 2; e < o - 1; e++) {
          const t = new Map();
          for (let o = e - 2; o < e + 2; o++)
            for (let e = 0; e < 4; e++) {
              const n = o * r + e;
              v(t, s[n], a ? a[n] : 1);
            }
          (l[e * r] = b(t)), (l[e * r + 1] = l[e * r + 2] = l[e * r]);
          let o = 3;
          for (; o < r - 1; o++) {
            let n = (e - 2) * r + o + 1;
            v(t, s[n], a ? a[n] : 1),
              (n = (e - 1) * r + o + 1),
              v(t, s[n], a ? a[n] : 1),
              (n = e * r + o + 1),
              v(t, s[n], a ? a[n] : 1),
              (n = (e + 1) * r + o + 1),
              v(t, s[n], a ? a[n] : 1),
              (n = (e - 2) * r + o - 3),
              x(t, s[n], a ? a[n] : 1),
              (n = (e - 1) * r + o - 3),
              x(t, s[n], a ? a[n] : 1),
              (n = e * r + o - 3),
              x(t, s[n], a ? a[n] : 1),
              (n = (e + 1) * r + o - 3),
              x(t, s[n], a ? a[n] : 1),
              (l[e * r + o] = b(t));
          }
          l[e * r + o + 1] = l[e * r + o];
        }
        for (let e = 0; e < r; e++)
          (l[e] = l[r + e] = l[2 * r + e]),
            (l[(o - 1) * r + e] = l[(o - 2) * r + e]);
        return t.updateStatistics(), t;
      }
      function b(e) {
        if (0 === e.size) return 0;
        let t = 0,
          r = -1,
          o = 0;
        const n = e.keys();
        let i = n.next();
        for (; !i.done; )
          (o = e.get(i.value)),
            o > t && ((r = i.value), (t = o)),
            (i = n.next());
        return r;
      }
      function x(e, t, r) {
        if (0 === r) return;
        const o = e.get(t);
        1 === o ? e.delete(t) : e.set(t, o - 1);
      }
      function v(e, t, r) {
        0 !== r && e.set(t, e.has(t) ? e.get(t) + 1 : 1);
      }
      function T(e, t, r) {
        let { x: o, y: a } = t;
        const { width: s, height: l } = r;
        if (0 === o && 0 === a && l === e.height && s === e.width) return e;
        const { width: h, height: u } = e,
          c = Math.max(0, a),
          f = Math.max(0, o),
          p = Math.min(o + s, h),
          d = Math.min(a + l, u);
        if (p < 0 || d < 0 || !i(e)) return null;
        (o = Math.max(0, -o)), (a = Math.max(0, -a));
        const { pixels: m, mask: g } = e,
          y = s * l,
          C = m.length,
          w = [];
        for (let t = 0; t < C; t++) {
          const r = m[t],
            i = n.Z.createEmptyBand(e.pixelType, y);
          for (let e = c; e < d; e++) {
            const t = e * h;
            let n = (e + a - c) * s + o;
            for (let e = f; e < p; e++) i[n++] = r[t + e];
          }
          w.push(i);
        }
        const b = new Uint8Array(y);
        for (let e = c; e < d; e++) {
          const t = e * h;
          let r = (e + a - c) * s + o;
          for (let e = f; e < p; e++) b[r++] = g ? g[t + e] : 1;
        }
        const x = new n.Z({
          width: r.width,
          height: r.height,
          pixelType: e.pixelType,
          pixels: w,
          mask: b,
        });
        return x.updateStatistics(), x;
      }
      function k(e, t = !0) {
        if (!i(e)) return null;
        const { pixels: r, width: o, height: a, mask: s, pixelType: l } = e,
          h = [],
          u = Math.round(o / 2),
          c = Math.round(a / 2),
          f = a - 1,
          p = o - 1;
        for (let e = 0; e < r.length; e++) {
          const i = r[e],
            s = n.Z.createEmptyBand(l, u * c);
          let d = 0;
          for (let e = 0; e < a; e += 2)
            for (let r = 0; r < o; r += 2) {
              const n = i[e * o + r];
              if (t) {
                const t = r === p ? n : i[e * o + r + 1],
                  a = e === f ? n : i[e * o + r + o],
                  l = r === p ? a : e === f ? t : i[e * o + r + o + 1];
                s[d++] = (n + t + a + l) / 4;
              } else s[d++] = n;
            }
          h.push(s);
        }
        let d = null;
        if (s) {
          d = new Uint8Array(u * c);
          let e = 0;
          for (let r = 0; r < a; r += 2)
            for (let n = 0; n < o; n += 2) {
              const i = s[r * o + n];
              if (t) {
                const t = n === p ? i : s[r * o + n + 1],
                  a = r === f ? i : s[r * o + n + o],
                  l = n === p ? a : r === f ? t : s[r * o + n + o + 1];
                d[e++] = i * t * a * l ? 1 : 0;
              } else d[e++] = i;
            }
        }
        return new n.Z({
          width: u,
          height: c,
          pixelType: l,
          pixels: h,
          mask: d,
        });
      }
      function S(e, t, r) {
        if (!i(e)) return null;
        const { width: o, height: n } = t;
        let { width: a, height: s } = e;
        const l = new Map(),
          h = { x: 0, y: 0 },
          u = null == r ? 1 : 1 + r;
        let c = e;
        for (let e = 0; e < u; e++) {
          const r = Math.ceil(a / o),
            i = Math.ceil(s / n);
          for (let a = 0; a < i; a++) {
            h.y = a * n;
            for (let n = 0; n < r; n++) {
              h.x = n * o;
              const r = T(c, h, t);
              l.set(`${e}/${a}/${n}`, r);
            }
          }
          e < u - 1 && (c = k(c)),
            (a = Math.round(a / 2)),
            (s = Math.round(s / 2));
        }
        return l;
      }
      function A(e, t, r, o, n = 0.5) {
        const { width: i, height: a } = e,
          { width: s, height: l } = t,
          h = o.cols,
          u = o.rows,
          c = Math.ceil(s / h - 0.1 / h),
          f = Math.ceil(l / u - 0.1 / u);
        let p, d, m, g, y, C, w;
        const b = c * h,
          x = b * f * u,
          v = new Float32Array(x),
          T = new Float32Array(x),
          k = new Uint32Array(x),
          S = new Uint32Array(x);
        let A,
          I,
          P = 0;
        for (let e = 0; e < f; e++)
          for (let t = 0; t < c; t++) {
            (p = 12 * (e * c + t)),
              (d = r[p]),
              (m = r[p + 1]),
              (g = r[p + 2]),
              (y = r[p + 3]),
              (C = r[p + 4]),
              (w = r[p + 5]);
            for (let r = 0; r < u; r++) {
              (P = (e * u + r) * b + t * h), (I = (r + 0.5) / u);
              for (let e = 0; e < r; e++)
                (A = (e + 0.5) / h),
                  (v[P + e] = (d * A + m * I + g) * i - n),
                  (T[P + e] = (y * A + C * I + w) * a - n),
                  (k[P + e] = Math.round(v[P + e])),
                  (S[P + e] = Math.round(T[P + e]));
            }
            (p += 6),
              (d = r[p]),
              (m = r[p + 1]),
              (g = r[p + 2]),
              (y = r[p + 3]),
              (C = r[p + 4]),
              (w = r[p + 5]);
            for (let r = 0; r < u; r++) {
              (P = (e * u + r) * b + t * h), (I = (r + 0.5) / u);
              for (let e = r; e < h; e++)
                (A = (e + 0.5) / h),
                  (v[P + e] = (d * A + m * I + g) * i - n),
                  (T[P + e] = (y * A + C * I + w) * a - n),
                  (k[P + e] = Math.round(v[P + e])),
                  (S[P + e] = Math.round(T[P + e]));
            }
          }
        return {
          offsets_x: v,
          offsets_y: T,
          offsets_xi: k,
          offsets_yi: S,
          gridWidth: b,
        };
      }
      function I(e, t) {
        const { coefficients: r, spacing: o } = t,
          {
            offsets_x: n,
            offsets_y: i,
            gridWidth: a,
          } = A(e, e, r, { rows: o[0], cols: o[1] }, 0.5),
          { width: s, height: l } = e,
          h = new Float32Array(s * l),
          u = 180 / Math.PI;
        for (let e = 0; e < l; e++)
          for (let t = 0; t < s; t++) {
            const r = e * a + t,
              o = 0 === e ? r : r - a,
              c = e === l - 1 ? r : r + a,
              f = n[o] - n[c],
              p = i[c] - i[o];
            if (isNaN(f) || isNaN(p)) h[e * s + t] = 90;
            else {
              let r = Math.atan2(p, f) * u;
              (r = (360 + r) % 360), (h[e * s + t] = r);
            }
          }
        return h;
      }
      function P(e, t, r, o, a = 'nearest') {
        if (!i(e)) return null;
        'majority' === a && (e = w(e));
        const { pixels: s, mask: l, pixelType: h } = e,
          u = e.width,
          c = e.height,
          f = n.Z.getPixelArrayConstructor(h),
          p = s.length,
          { width: d, height: m } = t;
        let g = !1;
        for (let e = 0; e < r.length; e += 3)
          -1 === r[e] && -1 === r[e + 1] && -1 === r[e + 2] && (g = !0);
        const {
          offsets_x: y,
          offsets_y: C,
          offsets_xi: b,
          offsets_yi: x,
          gridWidth: v,
        } = A({ width: u, height: c }, t, r, o, 'majority' === a ? 0 : 0.5);
        let T;
        const k = (e, t, r) => {
            const o =
              e instanceof Float32Array || e instanceof Float64Array ? 0 : 0.5;
            for (let n = 0; n < m; n++) {
              T = n * v;
              for (let i = 0; i < d; i++) {
                if (y[T] < 0 || C[T] < 0) e[n * d + i] = 0;
                else if (r) e[n * d + i] = t[b[T] + x[T] * u];
                else {
                  const r = Math.floor(y[T]),
                    a = Math.floor(C[T]),
                    s = Math.ceil(y[T]),
                    h = Math.ceil(C[T]),
                    c = y[T] - r,
                    f = C[T] - a;
                  if (
                    !l ||
                    (l[r + a * u] &&
                      l[r + a * u] &&
                      l[r + h * u] &&
                      l[s + h * u])
                  ) {
                    const l = (1 - c) * t[r + a * u] + c * t[s + a * u],
                      p = (1 - c) * t[r + h * u] + c * t[s + h * u];
                    e[n * d + i] = (1 - f) * l + f * p + o;
                  } else e[n * d + i] = t[b[T] + x[T] * u];
                }
                T++;
              }
            }
          },
          S = [];
        let I;
        for (let e = 0; e < p; e++)
          (I = new f(d * m)),
            k(I, s[e], 'nearest' === a || 'majority' === a),
            S.push(I);
        const P = new n.Z({ width: d, height: m, pixelType: h, pixels: S });
        if (l) (P.mask = new Uint8Array(d * m)), k(P.mask, l, !0);
        else if (g) {
          P.mask = new Uint8Array(d * m);
          for (let e = 0; e < d * m; e++)
            P.mask[e] = y[e] < 0 || C[e] < 0 ? 0 : 1;
        }
        return P.updateStatistics(), P;
      }
    },
    80676: (e, t, r) => {
      r.d(t, {
        xQ: () => d,
        KC: () => m,
        QI: () => g,
        Yx: () => u,
        NL: () => h,
        Tg: () => f,
      });
      var o = r(35454),
        n = r(70586),
        i = r(54163),
        a = r(55914);
      const s = new Map();
      s.set('meter-per-second', 1),
        s.set('kilometer-per-hour', 0.277778),
        s.set('knots', 0.514444),
        s.set('feet-per-second', 0.3048),
        s.set('mile-per-hour', 0.44704);
      const l = 180 / Math.PI,
        h = new o.X({
          esriMetersPerSecond: 'meter-per-second',
          esriKilometersPerHour: 'kilometer-per-hour',
          esriKnots: 'knots',
          esriFeetPerSecond: 'feet-per-second',
          esriMilesPerHour: 'mile-per-hour',
        });
      function u(e, t) {
        return s.get(e) / s.get(t) || 1;
      }
      function c(e) {
        return (450 - e) % 360;
      }
      function f(e, t = 'geographic') {
        const [r, o] = e,
          n = Math.sqrt(r * r + o * o);
        let i = Math.atan2(o, r) * l;
        return (i = (360 + i) % 360), 'geographic' === t && (i = c(i)), [n, i];
      }
      function p(e, t = 'geographic') {
        let r = e[1];
        'geographic' === t && (r = c(r)), (r %= 360);
        const o = e[0];
        return [o * Math.cos(r / l), o * Math.sin(r / l)];
      }
      function d(e, t, r, o = 'geographic') {
        if (!(0, a.nk)(e) || (0, n.Wi)(r)) return e;
        const i = 'vector-magdir' === t ? e.clone() : (0, n.Wg)(m(e, t)),
          s = i.pixels[1];
        for (let e = 0; e < s.length; e++)
          s[e] =
            'geographic' === o
              ? (s[e] + r[e] + 270) % 360
              : (s[e] + 360 - r[e]) % 360;
        return 'vector-magdir' === t ? i : m(i, 'vector-magdir');
      }
      function m(e, t, r = 'geographic', o = 1) {
        if (!(0, a.nk)(e)) return e;
        const { pixels: n, width: s, height: l } = e,
          h = s * l,
          u = n[0],
          c = n[1],
          d = e.pixelType.startsWith('f') ? e.pixelType : 'f32',
          m = i.Z.createEmptyBand(d, h),
          g = i.Z.createEmptyBand(d, h);
        let y = 0;
        for (let e = 0; e < l; e++)
          for (let e = 0; e < s; e++)
            'vector-uv' === t
              ? (([m[y], g[y]] = f([u[y], c[y]], r)), (m[y] *= o))
              : (([m[y], g[y]] = p([u[y], c[y]], r)), (m[y] *= o), (g[y] *= o)),
              y++;
        const C = new i.Z({
          pixelType: d,
          width: e.width,
          height: e.height,
          mask: e.mask,
          validPixelCount: e.validPixelCount,
          maskIsAlpha: e.maskIsAlpha,
          pixels: [m, g],
        });
        return C.updateStatistics(), C;
      }
      function g(e, t, r = 1) {
        if (1 === r || !(0, a.nk)(e)) return e;
        const o = e.clone(),
          { pixels: n, width: i, height: s } = o,
          l = n[0],
          h = n[1];
        let u = 0;
        for (let e = 0; e < s; e++)
          for (let e = 0; e < i; e++)
            'vector-uv' === t ? ((l[u] *= r), (h[u] *= r)) : (l[u] *= r), u++;
        return o.updateStatistics(), o;
      }
      function y(e, t, r, o = 1) {
        const n = Math.sqrt(e * e + t * t) / o,
          i = (2 * Math.PI + Math.atan2(t, e)) % (2 * Math.PI);
        return [n, (2 * Math.PI + i - r) % (2 * Math.PI)];
      }
      !(function (e = 0, t = 0, r = Math.PI, o = !0) {
        o && (r = (2 * Math.PI - r) % (2 * Math.PI));
        const n = o ? -1 : 1,
          i = 13 * n,
          a = -7 * n,
          s = -2 * n,
          l = -16 * n,
          h = 21.75,
          [u, c] = y(0, t + i, r, h),
          [f, p] = y(e - 5.5, t + a, r, h),
          [d, m] = y(e + 5.5, t + a, r, h),
          [g, C] = y(e - 1.5, t + s, r, h),
          [w, b] = y(e + 1.5, t + s, r, h),
          [x, v] = y(e - 1.5, t + l, r, h),
          [T, k] = y(e + 1.5, t + l, r, h);
      })(0, 0, 0);
    },
    91219: (e, t, r) => {
      r.d(t, { Z: () => w });
      var o = r(43697),
        n = r(3892),
        i = r(96674),
        a = r(92604),
        s = r(70586),
        l = r(5600),
        h = (r(67676), r(80442), r(75215), r(52011)),
        u = r(48526),
        c = r(55914),
        f = r(54163);
      function p(e) {
        let { altitude: t, azimuth: r } = e;
        const {
            hillshadeType: o,
            pixelSizePower: n,
            pixelSizeFactor: i,
            scalingType: a,
            isGCS: s,
            resolution: l,
          } = e,
          h = 'multi-directional' === o ? 2 * e.zFactor : e.zFactor,
          { x: u, y: c } = l;
        let f = h / (8 * u),
          p = h / (8 * c);
        if ((s && h > 0.001 && ((f /= 111e3), (p /= 111e3)), 'adjusted' === a))
          if (s) {
            const e = 111e3 * u,
              t = 111e3 * c;
            (f = (h + e ** n * i) / (8 * e)), (p = (h + t ** n * i) / (8 * t));
          } else
            (f = (h + u ** n * i) / (8 * u)), (p = (h + c ** n * i) / (8 * c));
        let d = ((90 - t) * Math.PI) / 180,
          m = Math.cos(d),
          g = ((360 - r + 90) * Math.PI) / 180,
          y = Math.sin(d) * Math.cos(g),
          C = Math.sin(d) * Math.sin(g);
        const w = [315, 270, 225, 360, 180, 0],
          b = [60, 60, 60, 60, 60, 90],
          x = new Float32Array([3, 5, 3, 2, 1, 4]),
          v = x.reduce((e, t) => e + t),
          T = x.map((e) => e / v),
          k = 'multi-directional' === o ? w.length : 1,
          S = new Float32Array(6),
          A = new Float32Array(6),
          I = new Float32Array(6);
        if ('multi-directional' === o)
          for (let e = 0; e < k; e++)
            (t = b[e]),
              (r = w[e]),
              (d = ((90 - t) * Math.PI) / 180),
              (m = Math.cos(d)),
              (g = ((360 - r + 90) * Math.PI) / 180),
              (y = Math.sin(d) * Math.cos(g)),
              (C = Math.sin(d) * Math.sin(g)),
              (S[e] = m),
              (A[e] = y),
              (I[e] = C);
        else S.fill(m), A.fill(y), I.fill(C);
        return {
          resolution: l,
          factor: [f, p],
          sinZcosA: y,
          sinZsinA: C,
          cosZ: m,
          sinZcosAs: A,
          sinZsinAs: I,
          cosZs: S,
          weights: T,
          hillshadeType: ['traditional', 'multi-directional'].indexOf(o),
        };
      }
      var d = r(93010);
      const m = a.Z.getLogger('esri.renderers.support.RasterSymbolizer'),
        g = {
          u1: [0, 1],
          u2: [0, 3],
          u4: [0, 15],
          u8: [0, 255],
          s8: [-128, 127],
          u16: [0, 65535],
          s16: [-32768, 32767],
          u32: [0, 4294967295],
          s32: [-2147483648, 2147483647],
          f32: [-34e38, 34e38],
          f64: [-Number.MAX_VALUE, Number.MAX_VALUE],
        };
      let y = class extends i.wq {
        constructor(e) {
          super(e);
        }
        bind() {
          const { rendererJSON: e } = this;
          if (!e) return { success: !1 };
          let t;
          switch (((this.lookup = { rendererJSON: {} }), e.type)) {
            case 'uniqueValue':
              t = this._updateUVRenderer(e);
              break;
            case 'rasterColormap':
              t = this._updateColormapRenderer(e);
              break;
            case 'rasterStretch':
              t = this._updateStretchRenderer(e);
              break;
            case 'classBreaks':
              t = this._updateClassBreaksRenderer(e);
              break;
            case 'rasterShadedRelief':
              t = this._updateShadedReliefRenderer(e);
              break;
            case 'vectorField':
              t = this._updateVectorFieldRenderer();
              break;
            case 'flowRenderer':
              t = this._updateFlowRenderer();
          }
          return t;
        }
        symbolize(e) {
          let t = e && e.pixelBlock;
          if (!C(t)) return t;
          if (
            e.simpleStretchParams &&
            'rasterStretch' === this.rendererJSON.type
          )
            return this.simpleStretch(t, e.simpleStretchParams);
          try {
            let r;
            switch (
              (t.pixels.length > 3 && (t = (0, c.qF)(t, [0, 1, 2])),
              this.rendererJSON.type)
            ) {
              case 'uniqueValue':
              case 'rasterColormap':
                r = this._symbolizeColormap(t);
                break;
              case 'classBreaks':
                r = this._symbolizeClassBreaks(t);
                break;
              case 'rasterStretch':
                r = this._symbolizeStretch(t, e.bandIds);
                break;
              case 'rasterShadedRelief': {
                const { extent: o } = e,
                  n = o.spatialReference.isGeographic,
                  i = {
                    x: (o.xmax - o.xmin) / t.width,
                    y: (o.ymax - o.ymin) / t.height,
                  };
                r = this._symbolizeShadedRelief(t, { isGCS: n, resolution: i });
                break;
              }
            }
            return r;
          } catch (e) {
            return m.error('symbolize', e.message), t;
          }
        }
        simpleStretch(e, t) {
          if (!C(e)) return e;
          try {
            return (
              e.pixels.length > 3 && (e = (0, c.qF)(e, [0, 1, 2])),
              (0, c.dy)(e, t)
            );
          } catch (t) {
            return m.error('symbolize', t.message), e;
          }
        }
        generateWebGLParameters(e) {
          if (
            ['uniqueValue', 'rasterColormap', 'classBreaks'].indexOf(
              this.rendererJSON.type,
            ) > -1
          ) {
            var t;
            const { indexedColormap: e, offset: r } =
              (null == (t = this.lookup) ? void 0 : t.colormapLut) || {};
            return { colormap: e, colormapOffset: r, type: 'lut' };
          }
          const { pixelBlock: r, isGCS: o, resolution: n, bandIds: i } = e,
            { rendererJSON: a } = this;
          return 'rasterStretch' === a.type
            ? this._generateStretchWebGLParams(r, a, i)
            : 'rasterShadedRelief' === a.type
            ? this._generateShadedReliefWebGLParams(a, o, n)
            : 'vectorField' === a.type
            ? this._generateVectorFieldWebGLParams(a)
            : null;
        }
        _isLUTChanged(e) {
          if (!this.lookup || !this.lookup.rendererJSON) return !0;
          if ('colorRamp' in this.rendererJSON) {
            const t = this.rendererJSON.colorRamp;
            return e
              ? JSON.stringify(t) !==
                  JSON.stringify(this.lookup.rendererJSON.colorRamp)
              : (this.rendererJSON,
                this.lookup.rendererJSON,
                JSON.stringify(this.rendererJSON) !==
                  JSON.stringify(this.lookup.rendererJSON));
          }
          return (
            JSON.stringify(this.rendererJSON) !==
            JSON.stringify(this.lookup.rendererJSON)
          );
        }
        _symbolizeColormap(e) {
          return this._isLUTChanged() && !this.bind().success
            ? e
            : (0, c.SJ)(e, this.lookup.colormapLut);
        }
        _symbolizeClassBreaks(e) {
          const t = this.rasterInfo.pixelType,
            r = ['u8', 'u16', 's8', 's16'].indexOf(t) > -1;
          return this._isLUTChanged() && !this.bind().success
            ? e
            : r
            ? (0, c.SJ)(e, this.lookup.colormapLut)
            : (0, c.zp)(e, this.lookup.remapLut);
        }
        _symbolizeStretch(e, t) {
          const { pixelType: r, bandCount: o } = this.rasterInfo,
            n = this.rendererJSON,
            i = ['u8', 'u16', 's8', 's16'].indexOf(r) > -1;
          let a, l;
          const { dra: h } = n,
            u = n.useGamma ? n.gamma : null;
          if ('histogramEqualization' === n.stretchType) {
            const r = h ? null : this.lookup.histogramLut,
              o = this._getStretchCutoff(n, e, t, !r),
              i = (0, c.dy)(e, { ...o, gamma: u });
            l = (0, c.XV)(i, { lut: h ? o.histogramLut : r, offset: 0 });
          } else if (i) {
            var f, p;
            if (h) {
              const o = this._getStretchCutoff(n, e, t);
              a = (0, c.hE)({ pixelType: r, ...o, gamma: u });
            } else if (this._isLUTChanged()) {
              if (!this.bind().success) return e;
              a = this.lookup ? this.lookup.stretchLut : null;
            } else a = this.lookup ? this.lookup.stretchLut : null;
            if (!a) return e;
            o > 1 &&
              (null == t ? void 0 : t.length) ===
                (null == (f = (0, s.Wg)(e)) ? void 0 : f.pixels.length) &&
              (null == (p = a) ? void 0 : p.lut.length) === o &&
              (a = { lut: t.map((e) => a.lut[e]), offset: a.offset }),
              (l = (0, c.XV)(e, a));
          } else {
            const r = this._getStretchCutoff(n, e, t);
            l = (0, c.dy)(e, { ...r, gamma: u });
          }
          if (n.colorRamp) {
            if (this._isLUTChanged(!0) && !this.bind().success) return e;
            l = (0, c.SJ)(l, this.lookup.colormapLut);
          }
          return l;
        }
        _symbolizeShadedRelief(e, t) {
          var r, o;
          const n = this.rendererJSON,
            i = (function (e, t) {
              if (!(0, c.nk)(e)) return e;
              const { width: r, height: o, mask: n } = e,
                i = new Uint8Array(r * o);
              n && i.set(n);
              const {
                  factor: a,
                  sinZcosA: s,
                  sinZsinA: l,
                  cosZ: h,
                  sinZcosAs: u,
                  sinZsinAs: d,
                  cosZs: m,
                  weights: g,
                } = p(t),
                [y, C] = a,
                { hillshadeType: w } = t,
                b = e.pixels[0],
                x = new Uint8Array(r * o);
              let v, T, k, S, A, I, P, M;
              for (let e = 1; e < o - 1; e++) {
                const t = e * r;
                for (let e = 1; e < r - 1; e++) {
                  if (n && !n[t + e]) {
                    x[t + e] = 0;
                    continue;
                  }
                  let o = 8;
                  if (
                    n &&
                    ((o =
                      n[t - r + e - 1] +
                      n[t - r + e] +
                      n[t - r + e + 1] +
                      n[t + e - 1] +
                      n[t + e + 1] +
                      n[t + r + e - 1] +
                      n[t + r + e] +
                      n[t + r + e + 1]),
                    o < 7)
                  ) {
                    (x[t + e] = 0), (i[t + e] = 0);
                    continue;
                  }
                  7 === o
                    ? ((v = n[t - r + e - 1] ? b[t - r + e - 1] : b[t + e]),
                      (T = n[t - r + e] ? b[t - r + e] : b[t + e]),
                      (k = n[t - r + e + 1] ? b[t - r + e + 1] : b[t + e]),
                      (S = n[t + e - 1] ? b[t + e - 1] : b[t + e]),
                      (A = n[t + e + 1] ? b[t + e + 1] : b[t + e]),
                      (I = n[t + r + e - 1] ? b[t + r + e - 1] : b[t + e]),
                      (P = n[t + r + e] ? b[t + r + e] : b[t + e]),
                      (M = n[t + r + e + 1] ? b[t + r + e + 1] : b[t + e]))
                    : ((v = b[t - r + e - 1]),
                      (T = b[t - r + e]),
                      (k = b[t - r + e + 1]),
                      (S = b[t + e - 1]),
                      (A = b[t + e + 1]),
                      (I = b[t + r + e - 1]),
                      (P = b[t + r + e]),
                      (M = b[t + r + e + 1]));
                  const a = (k + A + A + M - (v + S + S + I)) * y,
                    c = (I + P + P + M - (v + T + T + k)) * C,
                    f = Math.sqrt(1 + a * a + c * c);
                  let p = 0;
                  if ('traditional' === w) {
                    let e = (255 * (h + l * c - s * a)) / f;
                    e < 0 && (e = 0), (p = e);
                  } else {
                    const e = d.length;
                    for (let t = 0; t < e; t++) {
                      let e = (255 * (m[t] + d[t] * c - u[t] * a)) / f;
                      e < 0 && (e = 0), (p += e * g[t]);
                    }
                  }
                  x[t + e] = 255 & p;
                }
              }
              for (let e = 0; e < o; e++)
                (x[e * r] = x[e * r + 1]),
                  (x[(e + 1) * r - 1] = x[(e + 1) * r - 2]);
              for (let e = 1; e < r - 1; e++)
                (x[e] = x[e + r]), (x[e + (o - 1) * r] = x[e + (o - 2) * r]);
              return new f.Z({
                width: r,
                height: o,
                pixels: [x],
                mask: n ? i : null,
                pixelType: 'u8',
                validPixelCount: e.validPixelCount,
                statistics: [{ minValue: 0, maxValue: 255 }],
              });
            })(e, { ...n, ...t });
          if (!n.colorRamp) return i;
          let a;
          if (this._isLUTChanged(!0)) {
            if (!this.bind().success) return i;
            a = this.lookup ? this.lookup.hsvMap : null;
          } else a = this.lookup ? this.lookup.hsvMap : null;
          return a
            ? ((function (e, t, r, o) {
                if (!(0, c.nk)(e) || !(0, c.nk)(t)) return;
                const { min: n, max: i } = o,
                  a = e.pixels[0],
                  { pixels: s, mask: l } = t,
                  h = s[0],
                  u = 255.00001 / (i - n),
                  f = new Uint8ClampedArray(h.length),
                  p = new Uint8ClampedArray(h.length),
                  d = new Uint8ClampedArray(h.length),
                  m = r.length - 1;
                for (let e = 0; e < h.length; e++) {
                  if (l && 0 === l[e]) continue;
                  const t = Math.floor((h[e] - n) * u),
                    [o, i] = r[t < 0 ? 0 : t > m ? m : t],
                    s = a[e],
                    c = s * i,
                    g = c * (1 - Math.abs((o % 2) - 1)),
                    y = s - c;
                  switch (Math.floor(o)) {
                    case 0:
                      (f[e] = c + y), (p[e] = g + y), (d[e] = y);
                      break;
                    case 1:
                      (f[e] = g + y), (p[e] = c + y), (d[e] = y);
                      break;
                    case 2:
                      (f[e] = y), (p[e] = c + y), (d[e] = g + y);
                      break;
                    case 3:
                      (f[e] = y), (p[e] = g + y), (d[e] = c + y);
                      break;
                    case 4:
                      (f[e] = g + y), (p[e] = y), (d[e] = c + y);
                      break;
                    case 5:
                    case 6:
                      (f[e] = c + y), (p[e] = y), (d[e] = g + y);
                  }
                }
                (e.pixels = [f, p, d]), e.updateStatistics();
              })(
                i,
                e,
                a,
                null !=
                  (r =
                    null == (o = (0, s.Wg)(this.rasterInfo.statistics))
                      ? void 0
                      : o[0])
                  ? r
                  : { min: 0, max: 8e3 },
              ),
              i)
            : i;
        }
        _isVectorFieldData() {
          const { bandCount: e, dataType: t } = this.rasterInfo;
          return 2 === e && ('vector-magdir' === t || 'vector-uv' === t);
        }
        _updateVectorFieldRenderer() {
          return this._isVectorFieldData()
            ? { success: !0 }
            : {
                success: !1,
                error: `Unsupported data type "${this.rasterInfo.dataType}"; VectorFieldRenderer only supports "vector-magdir" and "vector-uv".`,
              };
        }
        _updateFlowRenderer() {
          return this._isVectorFieldData()
            ? { success: !0 }
            : {
                success: !1,
                error: `Unsupported data type "${this.rasterInfo.dataType}"; FlowRenderer only supports "vector-magdir" and "vector-uv".`,
              };
        }
        _updateUVRenderer(e) {
          const {
              bandCount: t,
              attributeTable: r,
              pixelType: o,
            } = this.rasterInfo,
            n = e.field1;
          if (!n)
            return {
              success: !1,
              error: 'Unsupported renderer; missing UniqueValueRenderer.field.',
            };
          const i = e.defaultSymbol,
            a = 1 === t && ['u8', 's8'].includes(o);
          if (
            !(function (e, t) {
              const { attributeTable: r, bandCount: o } = e;
              return !(
                !(0, s.pC)(r) ||
                o > 1 ||
                (t &&
                  null ==
                    r.fields.find(
                      (e) => e.name.toLowerCase() === t.toLowerCase(),
                    ))
              );
            })(this.rasterInfo, n) &&
            !a
          )
            return {
              success: !1,
              error:
                'Unsupported data; UniqueValueRenderer is only supported on single band data with a valid raster attribute table.',
            };
          const l = [];
          if (r) {
            const t = r.fields.find((e) => 'value' === e.name.toLowerCase());
            if (!t)
              return {
                success: !1,
                error:
                  "Unsupported data; the data's raster attribute table does not have a value field.",
              };
            r.features.forEach((r) => {
              var o;
              const a = e.uniqueValueInfos.find(
                  (e) => String(e.value) === String(r.attributes[n]),
                ),
                s = null == a || null == (o = a.symbol) ? void 0 : o.color;
              s
                ? l.push([r.attributes[t.name]].concat(s))
                : i && l.push([r.attributes[t.name]].concat(i.color));
            });
          } else {
            if ('value' !== n.toLowerCase())
              return {
                success: !1,
                error:
                  'Unsupported renderer; UniqueValueRenderer.field must be "Value" when raster attribute table is not availalbe.',
              };
            e.uniqueValueInfos.forEach((e) => {
              var t;
              const r = null == e || null == (t = e.symbol) ? void 0 : t.color;
              r
                ? l.push([parseInt('' + e.value, 10)].concat(r))
                : i && l.push([parseInt('' + e.value, 10)].concat(i.color));
            });
          }
          if (0 === l.length)
            return {
              success: !1,
              error:
                'Invalid UniqueValueRenderer. Cannot find matching records in the raster attribute table.',
            };
          const h = (0, c.Pz)({ colormap: l });
          return (
            (this.lookup = { rendererJSON: e, colormapLut: h }),
            (this.canRenderInWebGL = !0),
            { success: !0 }
          );
        }
        _updateColormapRenderer(e) {
          if (
            !(function (e) {
              const { bandCount: t, colormap: r } = e;
              return (0, s.pC)(r) && r.length && 1 === t;
            })(this.rasterInfo)
          )
            return {
              success: !1,
              error:
                'Unsupported data; the data source does not have a colormap.',
            };
          const t = e.colormapInfos
            .map((e) => [e.value].concat(e.color))
            .sort((e, t) => e[0] - t[0]);
          if (!t || 0 === t.length)
            return {
              success: !1,
              error:
                'Unsupported renderer; ColormapRenderer must have meaningful colormapInfos.',
            };
          const r = (0, c.Pz)({ colormap: t });
          return (
            (this.lookup = { rendererJSON: e, colormapLut: r }),
            (this.canRenderInWebGL = !0),
            { success: !0 }
          );
        }
        _updateShadedReliefRenderer(e) {
          if (
            !(function (e) {
              return 'elevation' === e.dataType;
            })(this.rasterInfo)
          )
            return {
              success: !1,
              error: `Unsupported data type "${this.rasterInfo.dataType}"; ShadedReliefRenderer only supports "elevation".`,
            };
          if (e.colorRamp) {
            const t = (0, d.Jw)(e.colorRamp, 256, !0),
              r = (0, c.Pz)({ colormap: t }),
              o = [],
              i = r.indexedColormap;
            for (let e = 0; e < i.length; e += 4) {
              const t = (0, n._Y)({ r: i[e], g: i[e + 1], b: i[e + 2] });
              o.push([t.h / 60, t.s / 100, (255 * t.v) / 100]);
            }
            this.lookup = { rendererJSON: e, colormapLut: r, hsvMap: o };
          } else this.lookup = null;
          return (this.canRenderInWebGL = !0), { success: !0 };
        }
        _updateClassBreaksRenderer(e) {
          const t = this.rasterInfo.pixelType,
            r = ['u8', 'u16', 's8', 's16'].indexOf(t) > -1,
            o = e.classBreakInfos;
          if (null == o || !o.length)
            return {
              success: !1,
              error:
                'Unsupported renderer; missing or invalid ClassBreaksRenderer.classBreakInfos.',
            };
          const n = o.sort((e, t) => e.classMaxValue - t.classMaxValue),
            i = n[n.length - 1];
          let a = e.minValue;
          if (!r) {
            const t = [];
            for (let e = 0; e < n.length; e++) {
              var s;
              t.push({
                value: null != (s = n[e].classMinValue) ? s : a,
                mappedColor: n[e].symbol.color,
              }),
                (a = n[e].classMaxValue);
            }
            return (
              t.push({ value: i.classMaxValue, mappedColor: i.symbol.color }),
              (this.lookup = { rendererJSON: e, remapLut: t }),
              (this.canRenderInWebGL = !1),
              { success: !0 }
            );
          }
          const l = [];
          a = Math.floor(e.minValue);
          for (let e = 0; e < n.length; e++) {
            const t = n[e];
            for (let e = a; e < t.classMaxValue; e++)
              l.push([e].concat(t.symbol.color));
            a = Math.ceil(t.classMaxValue);
          }
          i.classMaxValue === a &&
            l.push([i.classMaxValue].concat(i.symbol.color));
          const h = (0, c.Pz)({ colormap: l, fillUnspecified: !1 });
          return (
            (this.lookup = { rendererJSON: e, colormapLut: h }),
            (this.canRenderInWebGL = !0),
            { success: !0 }
          );
        }
        _isHistogramRequired(e) {
          return 'percentClip' === e || 'histogramEqualization' === e;
        }
        _isValidRasterStatistics(e) {
          return (
            (0, s.pC)(e) && e.length > 0 && null != e[0].min && null != e[0].max
          );
        }
        _updateStretchRenderer(e) {
          var t;
          let { stretchType: r, dra: o } = e;
          if (
            !(
              'none' === r ||
              (null != (t = e.statistics) && t.length) ||
              this._isValidRasterStatistics(this.rasterInfo.statistics) ||
              o
            )
          )
            return {
              success: !1,
              error:
                'Unsupported renderer; StretchRenderer.statistics is required when dynamic range adjustment is not used.',
            };
          const n = (0, s.Wg)(e.histograms || this.rasterInfo.histograms);
          !this._isHistogramRequired(e.stretchType) ||
            (null != n && n.length) ||
            o ||
            (r = 'minMax');
          const { gamma: i, useGamma: a, colorRamp: l } = e,
            h = this.rasterInfo.pixelType,
            u = !o && ['u8', 'u16', 's8', 's16'].indexOf(h) > -1;
          if ('histogramEqualization' === r) {
            const t = n.map((e) => (0, c.oc)(e));
            this.lookup = { rendererJSON: e, histogramLut: t };
          } else if (u) {
            const t = this._getStretchCutoff(e),
              r = (0, c.hE)({ pixelType: h, ...t, gamma: a ? i : null });
            this.lookup = { rendererJSON: e, stretchLut: r };
          }
          if (l) {
            const t = (0, d.Jw)(l, 256, !0);
            this.lookup || (this.lookup = { rendererJSON: e }),
              (this.lookup.colormapLut = (0, c.Pz)({ colormap: t })),
              (this.lookup.rendererJSON = e);
          }
          return (this.canRenderInWebGL = !0), { success: !0 };
        }
        _getStretchCutoff(e, t = null, r, o) {
          var n, i, a;
          let l,
            h,
            u = e.stretchType;
          var f;
          if (e.dra)
            if ('minMax' === u && (0, s.pC)(t) && t.statistics)
              l = t.statistics.map((e) => [e.minValue, e.maxValue, 0, 0]);
            else {
              const e = (0, c.Hv)(t);
              (l = (0, s.pC)(e) ? e.statistics : null),
                (h = (0, s.pC)(e) ? e.histograms : null);
            }
          else
            (l =
              (null == (f = e.statistics) ? void 0 : f.length) > 0
                ? e.statistics
                : (0, s.Wg)(this.rasterInfo.statistics)),
              (h = e.histograms || (0, s.Wg)(this.rasterInfo.histograms));
          !this._isHistogramRequired(u) ||
            (null != (n = h) && n.length) ||
            (u = 'minMax');
          const p =
              (null == (i = l) ? void 0 : i.length) ||
              (null == (a = h) ? void 0 : a.length) ||
              this.rasterInfo.bandCount,
            d = [],
            m = [];
          let y, C, w, b, x, v, T, k, S, A, I, P;
          switch (
            (l &&
              !Array.isArray(l[0]) &&
              (l = l.map((e) => [e.min, e.max, e.avg, e.stddev])),
            u)
          ) {
            case 'none':
              {
                const e = g[this.rasterInfo.pixelType] || g.f32;
                for (k = 0; k < p; k++) (d[k] = e[0]), (m[k] = e[1]);
              }
              break;
            case 'minMax':
              for (k = 0; k < p; k++) (d[k] = l[k][0]), (m[k] = l[k][1]);
              break;
            case 'standardDeviation':
              for (k = 0; k < p; k++)
                (d[k] = l[k][2] - e.numberOfStandardDeviations * l[k][3]),
                  (m[k] = l[k][2] + e.numberOfStandardDeviations * l[k][3]),
                  d[k] < l[k][0] && (d[k] = l[k][0]),
                  m[k] > l[k][1] && (m[k] = l[k][1]);
              break;
            case 'histogramEqualization':
              for (k = 0; k < p; k++) (d[k] = h[k].min), (m[k] = h[k].max);
              break;
            case 'percentClip':
              for (k = 0; k < h.length; k++) {
                for (
                  y = h[k],
                    x = new Uint32Array(y.size),
                    b = [...y.counts],
                    b.length >= 20 &&
                      (b[0] =
                        b[1] =
                        b[2] =
                        b[b.length - 1] =
                        b[b.length - 2] =
                          0),
                    w = 0,
                    C = (y.max - y.min) / y.size,
                    T = -0.5 === y.min && 1 === C ? 0.5 : 0,
                    S = 0;
                  S < y.size;
                  S++
                )
                  (w += b[S]), (x[S] = w);
                for (
                  v = ((e.minPercent || 0) * w) / 100, S = 0;
                  S < y.size;
                  S++
                )
                  if (x[S] > v) {
                    d[k] = y.min + C * (S + T);
                    break;
                  }
                for (
                  v = (1 - (e.maxPercent || 0) / 100) * w, S = y.size - 2;
                  S >= 0;
                  S--
                )
                  if (x[S] < v) {
                    m[k] = y.min + C * (S + 2 - T);
                    break;
                  }
              }
              break;
            default:
              for (k = 0; k < p; k++) (d[k] = l[k][0]), (m[k] = l[k][1]);
          }
          'histogramEqualization' === u
            ? ((I = h[0].size || 256),
              (A = 0),
              o && (P = h.map((e) => (0, c.oc)(e))))
            : ((I = e.max || 255), (A = e.min || 0));
          const M = {
            minCutOff: d,
            maxCutOff: m,
            outMax: I,
            outMin: A,
            histogramLut: P,
          };
          return this._getSelectedBandCutoffs(M, r);
        }
        _getSelectedBandCutoffs(e, t) {
          if (null == t || 0 === t.length) return e;
          const r = Math.max.apply(null, t),
            {
              minCutOff: o,
              maxCutOff: n,
              outMin: i,
              outMax: a,
              histogramLut: s,
            } = e;
          return o.length === t.length || o.length <= r
            ? e
            : {
                minCutOff: t.map((e) => o[e]),
                maxCutOff: t.map((e) => n[e]),
                histogramLut: s ? t.map((e) => s[e]) : null,
                outMin: i,
                outMax: a,
              };
        }
        _generateStretchWebGLParams(e, t, r) {
          let o = null,
            n = null;
          const i = this.lookup && this.lookup.colormapLut;
          t.colorRamp && i && ((o = i.indexedColormap), (n = i.offset)),
            'histogramEqualization' === t.stretchType &&
              (t = { ...t, stretchType: 'minMax' });
          const { gamma: a } = t,
            l = !!(t.useGamma && a && a.some((e) => 1 !== e)),
            {
              minCutOff: h,
              maxCutOff: u,
              outMin: c,
              outMax: f,
            } = this._getStretchCutoff(t, e, r);
          let p = 0;
          (0, s.pC)(e) &&
            ((p = e.getPlaneCount()),
            2 === p &&
              (((e = e.clone()).statistics = [e.statistics[0]]),
              (e.pixels = [e.pixels[0]])));
          const d = Math.min(
              3,
              (null == r ? void 0 : r.length) || p || this.rasterInfo.bandCount,
            ),
            m = new Float32Array(d),
            g = o || l ? 1 : 255;
          let y;
          for (y = 0; y < d; y++) m[y] = (f - c) / (u[y] - h[y]) / g;
          const C = new Float32Array(d);
          if (l)
            for (y = 0; y < d; y++)
              a[y] > 1
                ? a[y] > 2
                  ? (C[y] = 6.5 + (a[y] - 2) ** 2.5)
                  : (C[y] = 6.5 + 100 * (2 - a[y]) ** 4)
                : (C[y] = 1);
          return {
            bandCount: d,
            outMin: c / g,
            outMax: f / g,
            minCutOff: h,
            maxCutOff: u,
            factor: m,
            useGamma: l,
            gamma: l ? a : [1, 1, 1],
            gammaCorrection: l ? C : [1, 1, 1],
            colormap: o,
            colormapOffset: n,
            stretchType: t.stretchType,
            type: 'stretch',
          };
        }
        _generateShadedReliefWebGLParams(e, t, r) {
          var o, n, i;
          let a = null,
            l = null;
          const h = this.lookup && this.lookup.colormapLut;
          e.colorRamp && h && ((a = h.indexedColormap), (l = h.offset));
          const u = p({ ...e, isGCS: t, resolution: r }),
            c =
              null == (o = (0, s.Wg)(this.rasterInfo.statistics))
                ? void 0
                : o[0];
          return {
            ...u,
            minValue: null != (n = null == c ? void 0 : c.min) ? n : 0,
            maxValue: null != (i = null == c ? void 0 : c.max) ? i : 8e3,
            hillshadeType: 'traditional' === e.hillshadeType ? 0 : 1,
            type: 'hillshade',
            colormap: a,
            colormapOffset: l,
          };
        }
        _generateVectorFieldWebGLParams(e) {
          var t, r, o, n, i, a, l, h;
          const {
            style: u,
            inputUnit: c,
            outputUnit: f,
            visualVariables: p,
            symbolTileSize: d,
            flowRepresentation: m,
          } = e;
          let g;
          const y =
              null !=
              (t = null == (r = this.rasterInfo.statistics) ? void 0 : r[0].min)
                ? t
                : 0,
            C =
              null !=
              (o = null == (n = this.rasterInfo.statistics) ? void 0 : n[0].max)
                ? o
                : 50,
            w =
              null !=
              (i = null == p ? void 0 : p.find((e) => 'sizeInfo' === e.type))
                ? i
                : {
                    type: 'sizeInfo',
                    field: 'Magnitude',
                    maxDataValue: C,
                    maxSize: 0.8 * d,
                    minDataValue: y,
                    minSize: 0.2 * d,
                  },
            b = null != (a = w.minDataValue) ? a : y,
            x = null != (l = w.maxDataValue) ? l : C,
            v =
              (0, s.pC)(w.maxSize) && (0, s.pC)(w.minSize)
                ? [w.minSize / d, w.maxSize / d]
                : [0.2, 0.8];
          if ('wind_speed' === u) {
            const e = (v[0] + v[1]) / 2;
            v[0] = v[1] = e;
          }
          const T = (0, s.pC)(b) && (0, s.pC)(x) ? [b, x] : null;
          if ('classified_arrow' === u)
            if ((0, s.pC)(b) && (0, s.pC)(x) && (0, s.pC)(w)) {
              g = [];
              const e = (w.maxDataValue - w.minDataValue) / 5;
              for (let t = 0; t < 6; t++) g.push(w.minDataValue + e * t);
            } else g = [0, 1e-6, 3.5, 7, 10.5, 14];
          const k =
              ('flow_to' === m) ==
              ('ocean_current_kn' === u || 'ocean_current_m' === u)
                ? 0
                : Math.PI,
            S = null == p ? void 0 : p.find((e) => 'rotationInfo' === e.type);
          return {
            breakValues: g,
            dataRange: T,
            inputUnit: c,
            outputUnit: f,
            symbolTileSize: d,
            symbolPercentRange: v,
            style: u || 'single_arrow',
            rotation: k,
            rotationType:
              (null == (h = this.rasterInfo.storageInfo)
                ? void 0
                : h.tileInfo) && 'vector-uv' === this.rasterInfo.dataType
                ? 'geographic'
                : (null == S ? void 0 : S.rotationType) || e.rotationType,
            type: 'vectorField',
          };
        }
      };
      function C(e) {
        return (0, c.nk)(e) && 0 !== e.validPixelCount;
      }
      (0, o._)(
        [(0, l.Cb)({ json: { write: !0 } })],
        y.prototype,
        'rendererJSON',
        void 0,
      ),
        (0, o._)(
          [(0, l.Cb)({ type: u.Z, json: { write: !0 } })],
          y.prototype,
          'rasterInfo',
          void 0,
        ),
        (0, o._)(
          [(0, l.Cb)({ json: { write: !0 } })],
          y.prototype,
          'lookup',
          void 0,
        ),
        (0, o._)([(0, l.Cb)()], y.prototype, 'canRenderInWebGL', void 0),
        (y = (0, o._)(
          [(0, h.j)('esri.renderers.support.RasterSymbolizer')],
          y,
        ));
      const w = y;
    },
    93010: (e, t, r) => {
      r.d(t, {
        Ms: () => i,
        Jw: () => u,
        Uh: () => h,
        pM: () => c,
        io: () => d,
      });
      var o = r(22303),
        n = r(3892);
      const i = [
          {
            id: 'aspect_predefined',
            type: 'multipart',
            colorRamps: [
              { fromColor: [190, 190, 190], toColor: [255, 45, 8] },
              { fromColor: [255, 45, 8], toColor: [255, 181, 61] },
              { fromColor: [255, 181, 61], toColor: [255, 254, 52] },
              { fromColor: [255, 254, 52], toColor: [0, 251, 50] },
              { fromColor: [0, 251, 50], toColor: [255, 254, 52] },
              { fromColor: [0, 253, 255], toColor: [0, 181, 255] },
              { fromColor: [0, 181, 255], toColor: [26, 35, 253] },
              { fromColor: [26, 35, 253], toColor: [255, 57, 251] },
              { fromColor: [255, 57, 251], toColor: [255, 45, 8] },
            ],
          },
          {
            id: 'blackToWhite_predefined',
            fromColor: [0, 0, 0],
            toColor: [255, 255, 255],
          },
          {
            id: 'blueBright_predefined',
            fromColor: [204, 204, 255],
            toColor: [0, 0, 224],
          },
          {
            id: 'blueLightToDark_predefined',
            fromColor: [211, 229, 232],
            toColor: [46, 100, 140],
          },
          {
            id: 'blueGreenBright_predefined',
            fromColor: [203, 245, 234],
            toColor: [48, 207, 146],
          },
          {
            id: 'blueGreenLightToDark_predefined',
            fromColor: [216, 242, 237],
            toColor: [21, 79, 74],
          },
          {
            id: 'brownLightToDark_predefined',
            fromColor: [240, 236, 170],
            toColor: [102, 72, 48],
          },
          {
            id: 'brownToBlueGreenDivergingBright_predefined',
            type: 'multipart',
            colorRamps: [
              { fromColor: [156, 85, 31], toColor: [255, 255, 191] },
              { fromColor: [255, 255, 191], toColor: [33, 130, 145] },
            ],
          },
          {
            id: 'brownToBlueGreenDivergingDark_predefined',
            type: 'multipart',
            colorRamps: [
              { fromColor: [110, 70, 45], toColor: [204, 204, 102] },
              { fromColor: [204, 204, 102], toColor: [48, 100, 102] },
            ],
          },
          {
            id: 'coefficientBias_predefined',
            fromColor: [214, 214, 255],
            toColor: [0, 57, 148],
          },
          {
            id: 'coldToHotDiverging_predefined',
            type: 'multipart',
            colorRamps: [
              { fromColor: [69, 117, 181], toColor: [255, 255, 191] },
              { fromColor: [255, 255, 191], toColor: [214, 47, 39] },
            ],
          },
          {
            id: 'conditionNumber_predefined',
            type: 'multipart',
            colorRamps: [
              { fromColor: [0, 97, 0], toColor: [255, 255, 0] },
              { fromColor: [255, 255, 0], toColor: [255, 34, 0] },
            ],
          },
          {
            id: 'cyanToPurple_predefined',
            type: 'multipart',
            colorRamps: [
              { fromColor: [0, 245, 245], toColor: [0, 0, 245] },
              { fromColor: [0, 0, 245], toColor: [245, 0, 245] },
            ],
          },
          {
            id: 'cyanLightToBlueDark_predefined',
            type: 'multipart',
            colorRamps: [
              { fromColor: [182, 237, 240], toColor: [31, 131, 224] },
              { fromColor: [31, 131, 224], toColor: [9, 9, 145] },
            ],
          },
          {
            id: 'distance_predefined',
            fromColor: [255, 200, 0],
            toColor: [0, 0, 255],
          },
          {
            id: 'elevation1_predefined',
            type: 'multipart',
            colorRamps: [
              { fromColor: [175, 240, 233], toColor: [255, 255, 179] },
              { fromColor: [255, 255, 179], toColor: [0, 128, 64] },
              { fromColor: [0, 128, 64], toColor: [252, 186, 3] },
              { fromColor: [252, 186, 3], toColor: [128, 0, 0] },
              { fromColor: [120, 0, 0], toColor: [105, 48, 13] },
              { fromColor: [105, 48, 13], toColor: [171, 171, 171] },
              { fromColor: [171, 171, 171], toColor: [255, 252, 255] },
            ],
          },
          {
            id: 'elevation2_predefined',
            type: 'multipart',
            colorRamps: [
              { fromColor: [118, 219, 211], toColor: [255, 255, 199] },
              { fromColor: [255, 255, 199], toColor: [255, 255, 128] },
              { fromColor: [255, 255, 128], toColor: [217, 194, 121] },
              { fromColor: [217, 194, 121], toColor: [135, 96, 38] },
              { fromColor: [135, 96, 38], toColor: [150, 150, 181] },
              { fromColor: [150, 150, 181], toColor: [181, 150, 181] },
              { fromColor: [181, 150, 181], toColor: [255, 252, 255] },
            ],
          },
          {
            id: 'errors_predefined',
            fromColor: [255, 235, 214],
            toColor: [196, 10, 10],
          },
          {
            id: 'grayLightToDark_predefined',
            fromColor: [219, 219, 219],
            toColor: [69, 69, 69],
          },
          {
            id: 'greenBright_predefined',
            fromColor: [204, 255, 204],
            toColor: [14, 204, 14],
          },
          {
            id: 'greenLightToDark_predefined',
            fromColor: [220, 245, 233],
            toColor: [34, 102, 51],
          },
          {
            id: 'greenToBlue_predefined',
            type: 'multipart',
            colorRamps: [
              { fromColor: [32, 204, 16], toColor: [0, 242, 242] },
              { fromColor: [0, 242, 242], toColor: [2, 33, 227] },
            ],
          },
          {
            id: 'orangeBright_predefined',
            fromColor: [255, 235, 204],
            toColor: [240, 118, 5],
          },
          {
            id: 'orangeLightToDark_predefined',
            fromColor: [250, 233, 212],
            toColor: [171, 65, 36],
          },
          {
            id: 'partialSpectrum_predefined',
            type: 'multipart',
            colorRamps: [
              { fromColor: [242, 241, 162], toColor: [255, 255, 0] },
              { fromColor: [255, 255, 0], toColor: [255, 0, 0] },
              { fromColor: [252, 3, 69], toColor: [176, 7, 237] },
              { fromColor: [176, 7, 237], toColor: [2, 29, 173] },
            ],
          },
          {
            id: 'partialSpectrum1Diverging_predefined',
            type: 'multipart',
            colorRamps: [
              { fromColor: [135, 38, 38], toColor: [240, 149, 12] },
              { fromColor: [240, 149, 12], toColor: [255, 255, 191] },
              { fromColor: [255, 255, 191], toColor: [74, 80, 181] },
              { fromColor: [74, 80, 181], toColor: [39, 32, 122] },
            ],
          },
          {
            id: 'partialSpectrum2Diverging_predefined',
            type: 'multipart',
            colorRamps: [
              { fromColor: [115, 77, 42], toColor: [201, 137, 52] },
              { fromColor: [201, 137, 52], toColor: [255, 255, 191] },
              { fromColor: [255, 255, 191], toColor: [91, 63, 176] },
              { fromColor: [91, 63, 176], toColor: [81, 13, 97] },
            ],
          },
          {
            id: 'pinkToYellowGreenDivergingBright_predefined',
            type: 'multipart',
            colorRamps: [
              { fromColor: [158, 30, 113], toColor: [255, 255, 191] },
              { fromColor: [255, 255, 191], toColor: [99, 110, 45] },
            ],
          },
          {
            id: 'pinkToYellowGreenDivergingDark_predefined',
            type: 'multipart',
            colorRamps: [
              { fromColor: [97, 47, 73], toColor: [204, 204, 102] },
              { fromColor: [204, 204, 102], toColor: [22, 59, 15] },
            ],
          },
          {
            id: 'precipitation_predefined',
            type: 'multipart',
            colorRamps: [
              { fromColor: [194, 82, 60], toColor: [237, 161, 19] },
              { fromColor: [237, 161, 19], toColor: [255, 255, 0] },
              { fromColor: [255, 255, 0], toColor: [0, 219, 0] },
              { fromColor: [0, 219, 0], toColor: [32, 153, 143] },
              { fromColor: [32, 153, 143], toColor: [11, 44, 122] },
            ],
          },
          {
            id: 'prediction_predefined',
            type: 'multipart',
            colorRamps: [
              { fromColor: [40, 146, 199], toColor: [250, 250, 100] },
              { fromColor: [250, 250, 100], toColor: [232, 16, 20] },
            ],
          },
          {
            id: 'purpleBright_predefined',
            fromColor: [255, 204, 255],
            toColor: [199, 0, 199],
          },
          {
            id: 'purpleToGreenDivergingBright_predefined',
            type: 'multipart',
            colorRamps: [
              { fromColor: [77, 32, 150], toColor: [255, 255, 191] },
              { fromColor: [255, 255, 191], toColor: [20, 122, 11] },
            ],
          },
          {
            id: 'purpleToGreenDivergingDark_predefined',
            type: 'multipart',
            colorRamps: [
              { fromColor: [67, 14, 89], toColor: [204, 204, 102] },
              { fromColor: [204, 204, 102], toColor: [24, 79, 15] },
            ],
          },
          {
            id: 'purpleBlueBright_predefined',
            fromColor: [223, 184, 230],
            toColor: [112, 12, 242],
          },
          {
            id: 'purpleBlueLightToDark_predefined',
            fromColor: [229, 213, 242],
            toColor: [93, 44, 112],
          },
          {
            id: 'purpleRedBright_predefined',
            fromColor: [255, 204, 225],
            toColor: [199, 0, 99],
          },
          {
            id: 'purpleRedLightToDark_predefined',
            fromColor: [250, 215, 246],
            toColor: [143, 17, 57],
          },
          {
            id: 'redBright_predefined',
            fromColor: [255, 204, 204],
            toColor: [219, 0, 0],
          },
          {
            id: 'redLightToDark_predefined',
            fromColor: [255, 224, 224],
            toColor: [143, 10, 10],
          },
          {
            id: 'redToBlueDivergingBright_predefined',
            type: 'multipart',
            colorRamps: [
              { fromColor: [196, 69, 57], toColor: [255, 255, 191] },
              { fromColor: [255, 255, 191], toColor: [48, 95, 207] },
            ],
          },
          {
            id: 'redToBlueDivergingDark_predefined',
            type: 'multipart',
            colorRamps: [
              { fromColor: [107, 13, 13], toColor: [204, 204, 102] },
              { fromColor: [204, 204, 102], toColor: [13, 53, 97] },
            ],
          },
          {
            id: 'redToGreen_predefined',
            type: 'multipart',
            colorRamps: [
              { fromColor: [245, 0, 0], toColor: [245, 245, 0] },
              { fromColor: [245, 245, 0], toColor: [0, 245, 0] },
            ],
          },
          {
            id: 'redToGreenDivergingBright_predefined',
            type: 'multipart',
            colorRamps: [
              { fromColor: [186, 20, 20], toColor: [255, 255, 191] },
              { fromColor: [255, 255, 191], toColor: [54, 145, 33] },
            ],
          },
          {
            id: 'redToGreenDivergingDark_predefined',
            type: 'multipart',
            colorRamps: [
              { fromColor: [97, 21, 13], toColor: [204, 204, 102] },
              { fromColor: [204, 204, 102], toColor: [16, 69, 16] },
            ],
          },
          {
            id: 'slope_predefined',
            type: 'multipart',
            colorRamps: [
              { fromColor: [56, 168, 0], toColor: [255, 255, 0] },
              { fromColor: [255, 255, 0], toColor: [255, 0, 0] },
            ],
          },
          {
            id: 'spectrumFullBright_predefined',
            type: 'multipart',
            colorRamps: [
              { fromColor: [255, 0, 0], toColor: [255, 255, 0] },
              { fromColor: [255, 255, 0], toColor: [0, 255, 255] },
              { fromColor: [0, 255, 255], toColor: [0, 0, 255] },
            ],
          },
          {
            id: 'spectrumFullDark_predefined',
            type: 'multipart',
            colorRamps: [
              { fromColor: [153, 0, 0], toColor: [153, 153, 0] },
              { fromColor: [153, 153, 0], toColor: [0, 153, 153] },
              { fromColor: [0, 153, 153], toColor: [0, 0, 153] },
            ],
          },
          {
            id: 'spectrumFullLight_predefined',
            type: 'multipart',
            colorRamps: [
              { fromColor: [255, 153, 153], toColor: [255, 255, 153] },
              { fromColor: [255, 255, 153], toColor: [153, 255, 255] },
              { fromColor: [153, 255, 255], toColor: [153, 153, 255] },
            ],
          },
          {
            id: 'surface_predefined',
            type: 'multipart',
            colorRamps: [
              { fromColor: [112, 153, 89], toColor: [242, 238, 162] },
              { fromColor: [242, 238, 162], toColor: [242, 206, 133] },
              { fromColor: [242, 206, 133], toColor: [194, 140, 124] },
              { fromColor: [194, 140, 124], toColor: [255, 242, 255] },
            ],
          },
          {
            id: 'temperature_predefined',
            type: 'multipart',
            colorRamps: [
              { fromColor: [255, 252, 255], toColor: [255, 0, 255] },
              { fromColor: [255, 0, 255], toColor: [0, 0, 255] },
              { fromColor: [0, 0, 255], toColor: [0, 255, 255] },
              { fromColor: [0, 255, 255], toColor: [0, 255, 0] },
              { fromColor: [0, 255, 0], toColor: [255, 255, 0] },
              { fromColor: [255, 255, 0], toColor: [255, 128, 0] },
              { fromColor: [255, 128, 0], toColor: [128, 0, 0] },
            ],
          },
          {
            id: 'whiteToBlack_predefined',
            fromColor: [255, 255, 255],
            toColor: [0, 0, 0],
          },
          {
            id: 'yellowToDarkRed_predefined',
            type: 'multipart',
            colorRamps: [
              { fromColor: [255, 255, 128], toColor: [242, 167, 46] },
              { fromColor: [242, 167, 46], toColor: [107, 0, 0] },
            ],
          },
          {
            id: 'yellowToGreenToDarkBlue_predefined',
            type: 'multipart',
            colorRamps: [
              { fromColor: [255, 255, 128], toColor: [56, 224, 9] },
              { fromColor: [56, 224, 9], toColor: [26, 147, 171] },
              { fromColor: [26, 147, 171], toColor: [12, 16, 120] },
            ],
          },
          {
            id: 'yellowToRed_predefined',
            fromColor: [245, 245, 0],
            toColor: [255, 0, 0],
          },
          {
            id: 'yellowGreenBright_predefined',
            fromColor: [236, 252, 204],
            toColor: [157, 204, 16],
          },
          {
            id: 'yellowGreenLightToDark_predefined',
            fromColor: [215, 240, 175],
            toColor: [96, 107, 45],
          },
        ],
        a = {
          aspect_predefined: 'Aspect',
          blackToWhite_predefined: 'Black to White',
          blueBright_predefined: 'Blue Bright',
          blueLightToDark_predefined: 'Blue Light to Dark',
          blueGreenBright_predefined: 'Blue-Green Bright',
          blueGreenLightToDark_predefined: 'Blue-Green Light to Dark',
          brownLightToDark_predefined: 'Brown Light to Dark',
          brownToBlueGreenDivergingBright_predefined:
            'Brown to Blue Green Diverging, Bright',
          brownToBlueGreenDivergingDark_predefined:
            'Brown to Blue Green Diverging, Dark',
          coefficientBias_predefined: 'Coefficient Bias',
          coldToHotDiverging_predefined: 'Cold to Hot Diverging',
          conditionNumber_predefined: 'Condition Number',
          cyanToPurple_predefined: 'Cyan to Purple',
          cyanLightToBlueDark_predefined: 'Cyan-Light to Blue-Dark',
          distance_predefined: 'Distance',
          elevation1_predefined: 'Elevation #1',
          elevation2_predefined: 'Elevation #2',
          errors_predefined: 'Errors',
          grayLightToDark_predefined: 'Gray Light to Dark',
          greenBright_predefined: 'Green Bright',
          greenLightToDark_predefined: 'Green Light to Dark',
          greenToBlue_predefined: 'Green to Blue',
          orangeBright_predefined: 'Orange Bright',
          orangeLightToDark_predefined: 'Orange Light to Dark',
          partialSpectrum_predefined: 'Partial Spectrum',
          partialSpectrum1Diverging_predefined: 'Partial Spectrum 1 Diverging',
          partialSpectrum2Diverging_predefined: 'Partial Spectrum 2 Diverging',
          pinkToYellowGreenDivergingBright_predefined:
            'Pink to YellowGreen Diverging, Bright',
          pinkToYellowGreenDivergingDark_predefined:
            'Pink to YellowGreen Diverging, Dark',
          precipitation_predefined: 'Precipitation',
          prediction_predefined: 'Prediction',
          purpleBright_predefined: 'Purple Bright',
          purpleToGreenDivergingBright_predefined:
            'Purple to Green Diverging, Bright',
          purpleToGreenDivergingDark_predefined:
            'Purple to Green Diverging, Dark',
          purpleBlueBright_predefined: 'Purple-Blue Bright',
          purpleBlueLightToDark_predefined: 'Purple-Blue Light to Dark',
          purpleRedBright_predefined: 'Purple-Red Bright',
          purpleRedLightToDark_predefined: 'Purple-Red Light to Dark',
          redBright_predefined: 'Red Bright',
          redLightToDark_predefined: 'Red Light to Dark',
          redToBlueDivergingBright_predefined: 'Red to Blue Diverging, Bright',
          redToBlueDivergingDark_predefined: 'Red to Blue Diverging, Dark',
          redToGreen_predefined: 'Red to Green',
          redToGreenDivergingBright_predefined:
            'Red to Green Diverging, Bright',
          redToGreenDivergingDark_predefined: 'Red to Green Diverging, Dark',
          slope_predefined: 'Slope',
          spectrumFullBright_predefined: 'Spectrum-Full Bright',
          spectrumFullDark_predefined: 'Spectrum-Full Dark',
          spectrumFullLight_predefined: 'Spectrum-Full Light',
          surface_predefined: 'Surface',
          temperature_predefined: 'Temperature',
          whiteToBlack_predefined: 'White to Black',
          yellowToDarkRed_predefined: 'Yellow to Dark Red',
          yellowToGreenToDarkBlue_predefined: 'Yellow to Green to Dark Blue',
          yellowToRed_predefined: 'Yellow to Red',
          yellowGreenBright_predefined: 'Yellow-Green Bright',
          yellowGreenLightToDark_predefined: 'Yellow-Green Light to Dark',
        };
      function s(e, t) {
        if (!e || !t || e.length !== t.length) return !1;
        for (let r = 0; r < e.length; r++)
          if (e[r] > t[r] + 2 || e[r] < t[r] - 2) return !1;
        return !0;
      }
      function l(e, t, r) {
        const o = (0, n.Y3)(e),
          i = (0, n.Y3)(t),
          a = {
            l: o.l * (1 - r) + r * i.l,
            a: o.a * (1 - r) + r * i.a,
            b: o.b * (1 - r) + r * i.b,
          };
        return (0, n.xr)(a);
      }
      function h(e) {
        const t = (function (e, t) {
          if (!e) return;
          const r = i;
          let n,
            a = null;
          return (
            'algorithmic' === e.type
              ? r.some((t) => {
                  if (
                    s(e.fromColor.toRgb(), t.fromColor) &&
                    s(e.toColor.toRgb(), t.toColor)
                  )
                    return (a = t.id), !0;
                })
              : 'multipart' === e.type &&
                r.some((t) => {
                  if (
                    e.colorRamps &&
                    t.colorRamps &&
                    e.colorRamps.length === t.colorRamps.length &&
                    ((n = e.colorRamps),
                    !t.colorRamps.some((e, t) => {
                      if (
                        !s(
                          n[t].fromColor.toRgb(),
                          new o.Z(e.fromColor).toRgb(),
                        ) ||
                        !s(n[t].toColor.toRgb(), new o.Z(e.toColor).toRgb())
                      )
                        return !0;
                    }))
                  ) {
                    if (a) return !0;
                    a = t.id;
                  }
                }),
            a
          );
        })(e);
        return t ? a[t] : null;
      }
      function u(e, t, r = !1) {
        if (!e || !t || t < 1) return;
        const o = 'toJSON' in e ? e.toJSON() : e,
          n = 'multipart' === o.type ? o.colorRamps.length : 1,
          i = [],
          a = [];
        let s,
          h,
          u,
          c,
          f,
          p = 0;
        if (1 === t)
          return (
            (s =
              'multipart' === o.type ? o.colorRamps[0].fromColor : o.fromColor),
            a.push([0].concat(s)),
            a
          );
        for (let e = 0; e < n; e++)
          (i[e] = { start: null, end: null }),
            (i[e].start = p),
            (i[e].end = p + 1 / n),
            (p = i[e].end);
        for (let e = 0; e < t; e++)
          (c = e / (t - 1)),
            i.forEach((i, p) => {
              if (c >= i.start && (c < i.end || (e === t - 1 && p === n - 1))) {
                (f = (c - i.start) / (i.end - i.start)),
                  'multipart' === o.type
                    ? ((s = o.colorRamps[p].fromColor),
                      (h = o.colorRamps[p].toColor))
                    : ((s = o.fromColor), (h = o.toColor)),
                  0 === e
                    ? a.push([e].concat(s.slice(0, 3)))
                    : e === t - 1
                    ? a.push([e].concat(h.slice(0, 3)))
                    : ((u = l(
                        { r: s[0], g: s[1], b: s[2] },
                        { r: h[0], g: h[1], b: h[2] },
                        f,
                      )),
                      a.push([e, u.r, u.g, u.b]));
                const n = null != s[3] ? (s[3] > 1 ? s[3] / 255 : s[3]) : 1,
                  d = null != h[3] ? (h[3] > 1 ? h[3] / 255 : h[3]) : 1;
                r &&
                  a[e].push(
                    Math.min(255, Math.round(255 * (n * (1 - f) + d * f))),
                  );
              }
            });
        return a;
      }
      function c(e) {
        const t = h(e);
        if (e) {
          if ('algorithmic' === e.type) return { ...f(e), Name: t };
          if (e.colorRamps) {
            const r = e.colorRamps.map(f);
            return {
              type: 'MultiPartColorRamp',
              NumColorRamps: r.length,
              ArrayOfColorRamp: r,
              Name: t,
            };
          }
        }
      }
      function f(e) {
        if (!e) return;
        const t = e.toJSON();
        return {
          Algorithm: (null == t ? void 0 : t.Algorithm) || 'esriHSVAlgorithm',
          type: 'AlgorithmicColorRamp',
          FromColor: p(e.fromColor),
          ToColor: p(e.toColor),
        };
      }
      function p(e) {
        const t = (0, n._Y)(e);
        return {
          type: 'HsvColor',
          Hue: t.h,
          Saturation: t.s,
          Value: t.v,
          AlphaValue: 255,
        };
      }
      function d(e) {
        const t = e.reverse().map((e) => {
          const t = e.toString(16);
          return t.length < 2 ? '0' + t : t;
        });
        return 4294967295 & Number.parseInt(t.join(''), 16);
      }
    },
    23808: (e, t, r) => {
      r.d(t, { z_: () => s }), r(66577);
      var o = r(92604),
        n = (r(22021), r(95330)),
        i = r(77734);
      r(8744), r(6570);
      const a = o.Z.getLogger('esri.views.2d.engine.flow.dataUtils');
      async function s(e, t, r) {
        const o = performance.now(),
          s = (function (e, t) {
            const r = (function (e, t, r, o) {
              if (0 === o) return e;
              const n = Math.round(3 * o),
                i = new Array(2 * n + 1);
              let a = 0;
              for (let e = -n; e <= n; e++) {
                const t = Math.exp((-e * e) / (o * o));
                (i[e + n] = t), (a += t);
              }
              for (let e = -n; e <= n; e++) i[e + n] /= a;
              const s = new Float32Array(e.length);
              for (let o = 0; o < r; o++)
                for (let r = 0; r < t; r++) {
                  let a = 0,
                    l = 0;
                  for (let s = -n; s <= n; s++) {
                    if (r + s < 0 || r + s >= t) continue;
                    const h = i[s + n];
                    (a += h * e[2 * (o * t + (r + s)) + 0]),
                      (l += h * e[2 * (o * t + (r + s)) + 1]);
                  }
                  (s[2 * (o * t + r) + 0] = a), (s[2 * (o * t + r) + 1] = l);
                }
              const l = new Float32Array(e.length);
              for (let e = 0; e < t; e++)
                for (let o = 0; o < r; o++) {
                  let a = 0,
                    h = 0;
                  for (let l = -n; l <= n; l++) {
                    if (o + l < 0 || o + l >= r) continue;
                    const u = i[l + n];
                    (a += u * s[2 * ((o + l) * t + e) + 0]),
                      (h += u * s[2 * ((o + l) * t + e) + 1]);
                  }
                  (l[2 * (o * t + e) + 0] = a), (l[2 * (o * t + e) + 1] = h);
                }
              return l;
            })(t.data, t.width, t.height, e.smoothing);
            return e.interpolate
              ? (e, o) => {
                  const n = Math.floor(e),
                    i = Math.floor(o);
                  if (n < 0 || n >= t.width) return [0, 0];
                  if (i < 0 || i >= t.height) return [0, 0];
                  const a = e - n,
                    s = o - i,
                    l = n,
                    h = i,
                    u = n < t.width - 1 ? n + 1 : n,
                    c = i < t.height - 1 ? i + 1 : i,
                    f = r[2 * (h * t.width + l)],
                    p = r[2 * (h * t.width + u)],
                    d = r[2 * (c * t.width + l)],
                    m = r[2 * (c * t.width + u)],
                    g = r[2 * (h * t.width + l) + 1],
                    y = r[2 * (h * t.width + u) + 1];
                  return [
                    (f * (1 - s) + d * s) * (1 - a) + (p * (1 - s) + m * s) * a,
                    (g * (1 - s) + r[2 * (c * t.width + l) + 1] * s) * (1 - a) +
                      (y * (1 - s) + r[2 * (c * t.width + u) + 1] * s) * a,
                  ];
                }
              : (e, o) => {
                  const n = Math.round(e),
                    i = Math.round(o);
                  return n < 0 || n >= t.width || i < 0 || i >= t.height
                    ? [0, 0]
                    : [
                        r[2 * (i * t.width + n) + 0],
                        r[2 * (i * t.width + n) + 1],
                      ];
                };
          })(e, t),
          l = performance.now(),
          u = h(e, s, t.width, t.height),
          c = performance.now(),
          f = (function (e, t) {
            const r = new i.Z(),
              o = e.reduce((e, t) => e + t.length, 0),
              n = new Float32Array(4 * o),
              a = new Array(e.length);
            let s = 0,
              l = 0;
            for (const t of e) {
              const e = s;
              for (const e of t)
                (n[4 * s + 0] = e.x),
                  (n[4 * s + 1] = e.y),
                  (n[4 * s + 2] = e.t),
                  (n[4 * s + 3] = e.speed),
                  s++;
              a[l++] = {
                startVertex: e,
                numberOfVertices: t.length,
                totalTime: t[t.length - 1].t,
                timeSeed: r.getFloat(),
              };
            }
            return { lineVertices: n, lineDescriptors: a };
          })(u),
          p = performance.now(),
          d = (function (e, t = 10) {
            const { lineVertices: r, lineDescriptors: o } = e;
            let n = 0,
              i = 0;
            for (const e of o)
              (n += 2 * e.numberOfVertices),
                (i += 6 * (e.numberOfVertices - 1));
            const a = new Float32Array(9 * n),
              s = new Uint32Array(i);
            let l = 0,
              h = 0;
            function u() {
              (s[h++] = l - 2),
                (s[h++] = l),
                (s[h++] = l - 1),
                (s[h++] = l),
                (s[h++] = l + 1),
                (s[h++] = l - 1);
            }
            function c(e, t, r, o, n, i, s, h) {
              const u = 9 * l;
              let c = 0;
              (a[u + c++] = e),
                (a[u + c++] = t),
                (a[u + c++] = 1),
                (a[u + c++] = r),
                (a[u + c++] = i),
                (a[u + c++] = s),
                (a[u + c++] = o / 2),
                (a[u + c++] = n / 2),
                (a[u + c++] = h),
                l++,
                (a[u + c++] = e),
                (a[u + c++] = t),
                (a[u + c++] = -1),
                (a[u + c++] = r),
                (a[u + c++] = i),
                (a[u + c++] = s),
                (a[u + c++] = -o / 2),
                (a[u + c++] = -n / 2),
                (a[u + c++] = h),
                l++;
            }
            for (const e of o) {
              const { totalTime: o, timeSeed: n } = e;
              let i = null,
                a = null,
                s = null,
                l = null,
                h = null,
                f = null;
              for (let p = 0; p < e.numberOfVertices; p++) {
                const d = r[4 * (e.startVertex + p) + 0],
                  m = r[4 * (e.startVertex + p) + 1],
                  g = r[4 * (e.startVertex + p) + 2],
                  y = r[4 * (e.startVertex + p) + 3];
                let C = null,
                  w = null,
                  b = null,
                  x = null;
                if (p > 0) {
                  (C = d - i), (w = m - a);
                  const e = Math.sqrt(C * C + w * w);
                  if (((C /= e), (w /= e), p > 1)) {
                    let e = C + h,
                      r = w + f;
                    const o = Math.sqrt(e * e + r * r);
                    (e /= o), (r /= o);
                    const n = Math.min(1 / (e * C + r * w), t);
                    (e *= n), (r *= n), (b = -r), (x = e);
                  } else (b = -w), (x = C);
                  null !== b && null !== x && (c(i, a, s, b, x, o, n, y), u());
                }
                (i = d), (a = m), (s = g), (h = C), (f = w), (l = y);
              }
              c(i, a, s, -f, h, o, n, l);
            }
            return { vertexData: a, indexData: s };
          })(f),
          m = performance.now();
        if (e.profile) {
          const e = {
            '_createFlowFieldFromData()': Math.round(l - o),
            '_getStreamlines()': Math.round(c - l),
            'createAnimatedLinesData()': Math.round(p - c),
            'createLinesMesh()': Math.round(m - p),
            'Total elapsed time': Math.round(m - o),
          };
          a.info('createStreamlinesMesh profile', e);
        }
        return await Promise.resolve(), (0, n.k_)(r), d;
      }
      function l(e, t, r, o, n, i, a, s, l) {
        const h = [];
        let u = r,
          c = o,
          f = 0,
          [p, d] = t(u, c);
        (p *= e.velocityScale), (d *= e.velocityScale);
        const m = Math.sqrt(p * p + d * d);
        let g, y;
        h.push({ x: u, y: c, t: f, speed: m });
        for (let r = 0; r < e.verticesPerLine; r++) {
          let [r, o] = t(u, c);
          (r *= e.velocityScale), (o *= e.velocityScale);
          const p = Math.sqrt(r * r + o * o);
          if (p < e.minSpeedThreshold) return h;
          const d = r / p,
            m = o / p;
          if (
            ((u += d * e.segmentLength),
            (c += m * e.segmentLength),
            (f += e.segmentLength / p),
            Math.acos(d * g + m * y) > e.maxTurnAngle)
          )
            return h;
          if (e.mergeLines) {
            const e = Math.round(u * l),
              t = Math.round(c * l);
            if (e < 0 || e > a - 1 || t < 0 || t > s - 1) return h;
            const r = i[t * a + e];
            if (-1 !== r && r !== n) return h;
            i[t * a + e] = n;
          }
          h.push({ x: u, y: c, t: f, speed: p }), (g = d), (y = m);
        }
        return h;
      }
      function h(e, t, r, o) {
        const n = [],
          a = new i.Z(),
          s = 1 / Math.max(e.lineCollisionWidth, 1),
          h = Math.round(r * s),
          u = Math.round(o * s),
          c = new Int32Array(h * u);
        for (let e = 0; e < c.length; e++) c[e] = -1;
        const f = [];
        for (let t = 0; t < o; t += e.lineSpacing)
          for (let o = 0; o < r; o += e.lineSpacing)
            f.push({ x: o, y: t, sort: a.getFloat() });
        f.sort((e, t) => e.sort - t.sort);
        for (const { x: r, y: o } of f)
          if (a.getFloat() < e.density) {
            const i = l(e, t, r, o, n.length, c, h, u, s);
            if (i.length < 2) continue;
            n.push(i);
          }
        return n;
      }
    },
  },
]);
