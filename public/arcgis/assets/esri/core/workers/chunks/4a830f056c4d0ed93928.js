'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [6774],
  {
    66774: (t, e, n) => {
      n.r(e), n.d(e, { p: () => c });
      var _,
        r,
        o,
        p = { exports: {} };
      (_ = p),
        (r =
          'undefined' != typeof document && document.currentScript
            ? document.currentScript.src
            : void 0),
        'undefined' != typeof __filename && (r = r || __filename),
        (o = function (t) {
          var e, n;
          (t = void 0 !== (t = t || {}) ? t : {}).ready = new Promise(function (
            t,
            _,
          ) {
            (e = t), (n = _);
          });
          var _,
            o = {};
          for (_ in t) t.hasOwnProperty(_) && (o[_] = t[_]);
          var p,
            i,
            c,
            a,
            s,
            u = './this.program',
            P = 'object' == typeof window,
            y = 'function' == typeof importScripts,
            g =
              'object' == typeof process &&
              'object' == typeof process.versions &&
              'string' == typeof process.versions.node,
            f = '';
          g
            ? ((f = y ? require('path').dirname(f) + '/' : __dirname + '/'),
              (p = function (t, e) {
                return (
                  a || (a = require('fs')),
                  s || (s = require('path')),
                  (t = s.normalize(t)),
                  a.readFileSync(t, e ? null : 'utf8')
                );
              }),
              (c = function (t) {
                var e = p(t, !0);
                return e.buffer || (e = new Uint8Array(e)), O(e.buffer), e;
              }),
              (i = function (t, e, n) {
                a || (a = require('fs')),
                  s || (s = require('path')),
                  (t = s.normalize(t)),
                  a.readFile(t, function (t, _) {
                    t ? n(t) : e(_.buffer);
                  });
              }),
              process.argv.length > 1 &&
                (u = process.argv[1].replace(/\\/g, '/')),
              process.argv.slice(2),
              process.on('uncaughtException', function (t) {
                if (!(t instanceof Yn)) throw t;
              }),
              process.on('unhandledRejection', function (t) {
                throw t;
              }),
              (t.inspect = function () {
                return '[Emscripten Module object]';
              }))
            : (P || y) &&
              (y
                ? (f = self.location.href)
                : 'undefined' != typeof document &&
                  document.currentScript &&
                  (f = document.currentScript.src),
              r && (f = r),
              (f =
                0 !== f.indexOf('blob:')
                  ? f.substr(0, f.replace(/[?#].*/, '').lastIndexOf('/') + 1)
                  : ''),
              (p = function (t) {
                var e = new XMLHttpRequest();
                return e.open('GET', t, !1), e.send(null), e.responseText;
              }),
              y &&
                (c = function (t) {
                  var e = new XMLHttpRequest();
                  return (
                    e.open('GET', t, !1),
                    (e.responseType = 'arraybuffer'),
                    e.send(null),
                    new Uint8Array(e.response)
                  );
                }),
              (i = function (t, e, n) {
                var _ = new XMLHttpRequest();
                _.open('GET', t, !0),
                  (_.responseType = 'arraybuffer'),
                  (_.onload = function () {
                    200 == _.status || (0 == _.status && _.response)
                      ? e(_.response)
                      : n();
                  }),
                  (_.onerror = n),
                  _.send(null);
              }));
          var l,
            m,
            d = t.print || console.log.bind(console),
            E = t.printErr || console.warn.bind(console);
          for (_ in o) o.hasOwnProperty(_) && (t[_] = o[_]);
          (o = null),
            t.arguments,
            t.thisProgram && (u = t.thisProgram),
            t.quit,
            t.wasmBinary && (l = t.wasmBinary),
            t.noExitRuntime,
            'object' != typeof WebAssembly &&
              W('no native wasm support detected');
          var b = !1;
          function O(t, e) {
            t || W('Assertion failed: ' + e);
          }
          var T,
            S,
            N,
            h,
            M,
            v,
            D,
            R,
            A =
              'undefined' != typeof TextDecoder
                ? new TextDecoder('utf8')
                : void 0;
          function G(t, e, n) {
            for (var _ = e + n, r = e; t[r] && !(r >= _); ) ++r;
            if (r - e > 16 && t.subarray && A)
              return A.decode(t.subarray(e, r));
            for (var o = ''; e < r; ) {
              var p = t[e++];
              if (128 & p) {
                var i = 63 & t[e++];
                if (192 != (224 & p)) {
                  var c = 63 & t[e++];
                  if (
                    (p =
                      224 == (240 & p)
                        ? ((15 & p) << 12) | (i << 6) | c
                        : ((7 & p) << 18) |
                          (i << 12) |
                          (c << 6) |
                          (63 & t[e++])) < 65536
                  )
                    o += String.fromCharCode(p);
                  else {
                    var a = p - 65536;
                    o += String.fromCharCode(
                      55296 | (a >> 10),
                      56320 | (1023 & a),
                    );
                  }
                } else o += String.fromCharCode(((31 & p) << 6) | i);
              } else o += String.fromCharCode(p);
            }
            return o;
          }
          function C(t, e) {
            return t ? G(N, t, e) : '';
          }
          function I(t, e, n, _) {
            if (!(_ > 0)) return 0;
            for (var r = n, o = n + _ - 1, p = 0; p < t.length; ++p) {
              var i = t.charCodeAt(p);
              if (
                (i >= 55296 &&
                  i <= 57343 &&
                  (i =
                    (65536 + ((1023 & i) << 10)) | (1023 & t.charCodeAt(++p))),
                i <= 127)
              ) {
                if (n >= o) break;
                e[n++] = i;
              } else if (i <= 2047) {
                if (n + 1 >= o) break;
                (e[n++] = 192 | (i >> 6)), (e[n++] = 128 | (63 & i));
              } else if (i <= 65535) {
                if (n + 2 >= o) break;
                (e[n++] = 224 | (i >> 12)),
                  (e[n++] = 128 | ((i >> 6) & 63)),
                  (e[n++] = 128 | (63 & i));
              } else {
                if (n + 3 >= o) break;
                (e[n++] = 240 | (i >> 18)),
                  (e[n++] = 128 | ((i >> 12) & 63)),
                  (e[n++] = 128 | ((i >> 6) & 63)),
                  (e[n++] = 128 | (63 & i));
              }
            }
            return (e[n] = 0), n - r;
          }
          function j(t) {
            for (var e = 0, n = 0; n < t.length; ++n) {
              var _ = t.charCodeAt(n);
              _ >= 55296 &&
                _ <= 57343 &&
                (_ = (65536 + ((1023 & _) << 10)) | (1023 & t.charCodeAt(++n))),
                _ <= 127 ? ++e : (e += _ <= 2047 ? 2 : _ <= 65535 ? 3 : 4);
            }
            return e;
          }
          function L(t) {
            var e = j(t) + 1,
              n = Cn(e);
            return n && I(t, S, n, e), n;
          }
          function U(t, e) {
            return t % e > 0 && (t += e - (t % e)), t;
          }
          function Y(e) {
            (T = e),
              (t.HEAP8 = S = new Int8Array(e)),
              (t.HEAP16 = h = new Int16Array(e)),
              (t.HEAP32 = M = new Int32Array(e)),
              (t.HEAPU8 = N = new Uint8Array(e)),
              (t.HEAPU16 = new Uint16Array(e)),
              (t.HEAPU32 = new Uint32Array(e)),
              (t.HEAPF32 = v = new Float32Array(e)),
              (t.HEAPF64 = D = new Float64Array(e));
          }
          t.INITIAL_MEMORY;
          var F = [],
            w = [],
            x = [];
          function H(t) {
            F.unshift(t);
          }
          function X(t) {
            x.unshift(t);
          }
          var z,
            Z = 0,
            B = null;
          function W(e) {
            t.onAbort && t.onAbort(e),
              E((e = 'Aborted(' + e + ')')),
              (b = !0),
              (e += '. Build with -s ASSERTIONS=1 for more info.');
            var _ = new WebAssembly.RuntimeError(e);
            throw (n(_), _);
          }
          function k(t) {
            return t.startsWith('data:application/octet-stream;base64,');
          }
          function q(t) {
            return t.startsWith('file://');
          }
          function V(t) {
            try {
              if (t == z && l) return new Uint8Array(l);
              if (c) return c(t);
              throw 'both async and sync fetching of the wasm failed';
            } catch (t) {
              W(t);
            }
          }
          function J(e) {
            for (; e.length > 0; ) {
              var n = e.shift();
              if ('function' != typeof n) {
                var _ = n.func;
                'number' == typeof _
                  ? void 0 === n.arg
                    ? $(_)()
                    : $(_)(n.arg)
                  : _(void 0 === n.arg ? null : n.arg);
              } else n(t);
            }
          }
          (t.preloadedImages = {}),
            (t.preloadedAudios = {}),
            k((z = 'pe-wasm.wasm')) ||
              (z = (function (e) {
                return t.locateFile ? t.locateFile(e, f) : f + e;
              })(z));
          var K = [];
          function $(t) {
            var e = K[t];
            return (
              e || (t >= K.length && (K.length = t + 1), (K[t] = e = R.get(t))),
              e
            );
          }
          function Q() {
            Q.called ||
              ((Q.called = !0),
              (function () {
                var t = new Date().getFullYear(),
                  e = new Date(t, 0, 1),
                  n = new Date(t, 6, 1),
                  _ = e.getTimezoneOffset(),
                  r = n.getTimezoneOffset(),
                  o = Math.max(_, r);
                function p(t) {
                  var e = t.toTimeString().match(/\(([A-Za-z ]+)\)$/);
                  return e ? e[1] : 'GMT';
                }
                (M[Un() >> 2] = 60 * o), (M[Ln() >> 2] = Number(_ != r));
                var i = p(e),
                  c = p(n),
                  a = L(i),
                  s = L(c);
                r < _
                  ? ((M[jn() >> 2] = a), (M[(jn() + 4) >> 2] = s))
                  : ((M[jn() >> 2] = s), (M[(jn() + 4) >> 2] = a));
              })());
          }
          var tt = {
            mappings: {},
            buffers: [null, [], []],
            printChar: function (t, e) {
              var n = tt.buffers[t];
              0 === e || 10 === e
                ? ((1 === t ? d : E)(G(n, 0)), (n.length = 0))
                : n.push(e);
            },
            varargs: void 0,
            get: function () {
              return (tt.varargs += 4), M[(tt.varargs - 4) >> 2];
            },
            getStr: function (t) {
              return C(t);
            },
            get64: function (t, e) {
              return t;
            },
          };
          function et(t) {
            try {
              return m.grow((t - T.byteLength + 65535) >>> 16), Y(m.buffer), 1;
            } catch (t) {}
          }
          var nt = {};
          function _t() {
            if (!_t.strings) {
              var t = {
                USER: 'web_user',
                LOGNAME: 'web_user',
                PATH: '/',
                PWD: '/',
                HOME: '/home/web_user',
                LANG:
                  (
                    ('object' == typeof navigator &&
                      navigator.languages &&
                      navigator.languages[0]) ||
                    'C'
                  ).replace('-', '_') + '.UTF-8',
                _: u || './this.program',
              };
              for (var e in nt) void 0 === nt[e] ? delete t[e] : (t[e] = nt[e]);
              var n = [];
              for (var e in t) n.push(e + '=' + t[e]);
              _t.strings = n;
            }
            return _t.strings;
          }
          var rt = {
            o: function (t, e) {
              return (function (t, e) {
                Q();
                var n = new Date(1e3 * M[t >> 2]);
                (M[e >> 2] = n.getSeconds()),
                  (M[(e + 4) >> 2] = n.getMinutes()),
                  (M[(e + 8) >> 2] = n.getHours()),
                  (M[(e + 12) >> 2] = n.getDate()),
                  (M[(e + 16) >> 2] = n.getMonth()),
                  (M[(e + 20) >> 2] = n.getFullYear() - 1900),
                  (M[(e + 24) >> 2] = n.getDay());
                var _ = new Date(n.getFullYear(), 0, 1),
                  r = ((n.getTime() - _.getTime()) / 864e5) | 0;
                (M[(e + 28) >> 2] = r),
                  (M[(e + 36) >> 2] = -60 * n.getTimezoneOffset());
                var o = new Date(n.getFullYear(), 6, 1).getTimezoneOffset(),
                  p = _.getTimezoneOffset(),
                  i = 0 | (o != p && n.getTimezoneOffset() == Math.min(p, o));
                M[(e + 32) >> 2] = i;
                var c = M[(jn() + (i ? 4 : 0)) >> 2];
                return (M[(e + 40) >> 2] = c), e;
              })(t, e);
            },
            b: function (t, e, n) {
              return (tt.varargs = n), 0;
            },
            q: function (t, e, n) {},
            h: function (t, e, n) {
              return (tt.varargs = n), 0;
            },
            d: function (t, e, n) {
              tt.varargs = n;
            },
            e: function (t) {},
            p: function (t, e) {},
            f: function (t) {},
            l: function () {
              W('');
            },
            j: function (t, e, n) {
              N.copyWithin(t, e, e + n);
            },
            k: function (t) {
              var e = N.length,
                n = 2147483648;
              if ((t >>>= 0) > n) return !1;
              for (var _ = 1; _ <= 4; _ *= 2) {
                var r = e * (1 + 0.2 / _);
                if (
                  ((r = Math.min(r, t + 100663296)),
                  et(Math.min(n, U(Math.max(t, r), 65536))))
                )
                  return !0;
              }
              return !1;
            },
            m: function (t, e) {
              var n = 0;
              return (
                _t().forEach(function (_, r) {
                  var o = e + n;
                  (M[(t + 4 * r) >> 2] = o),
                    (function (t, e, n) {
                      for (var _ = 0; _ < t.length; ++_)
                        S[e++ >> 0] = t.charCodeAt(_);
                      S[e >> 0] = 0;
                    })(_, o),
                    (n += _.length + 1);
                }),
                0
              );
            },
            n: function (t, e) {
              var n = _t();
              M[t >> 2] = n.length;
              var _ = 0;
              return (
                n.forEach(function (t) {
                  _ += t.length + 1;
                }),
                (M[e >> 2] = _),
                0
              );
            },
            a: function (t) {
              return 0;
            },
            g: function (t, e, n, _) {
              var r = tt.getStreamFromFD(t),
                o = tt.doReadv(r, e, n);
              return (M[_ >> 2] = o), 0;
            },
            i: function (t, e, n, _, r) {},
            c: function (t, e, n, _) {
              for (var r = 0, o = 0; o < n; o++) {
                var p = M[e >> 2],
                  i = M[(e + 4) >> 2];
                e += 8;
                for (var c = 0; c < i; c++) tt.printChar(t, N[p + c]);
                r += i;
              }
              return (M[_ >> 2] = r), 0;
            },
            r: function (t) {
              var e = (Date.now() / 1e3) | 0;
              return t && (M[t >> 2] = e), e;
            },
          };
          (function () {
            var e = { a: rt };
            function _(e, n) {
              var _ = e.exports;
              (t.asm = _),
                Y((m = t.asm.s).buffer),
                (R = t.asm.Xb),
                (function (t) {
                  w.unshift(t);
                })(t.asm.t),
                (function (e) {
                  if (
                    (Z--,
                    t.monitorRunDependencies && t.monitorRunDependencies(Z),
                    0 == Z && B)
                  ) {
                    var n = B;
                    (B = null), n();
                  }
                })();
            }
            function r(t) {
              _(t.instance);
            }
            function o(t) {
              return (function () {
                if (!l && (P || y)) {
                  if ('function' == typeof fetch && !q(z))
                    return fetch(z, { credentials: 'same-origin' })
                      .then(function (t) {
                        if (!t.ok)
                          throw (
                            "failed to load wasm binary file at '" + z + "'"
                          );
                        return t.arrayBuffer();
                      })
                      .catch(function () {
                        return V(z);
                      });
                  if (i)
                    return new Promise(function (t, e) {
                      i(
                        z,
                        function (e) {
                          t(new Uint8Array(e));
                        },
                        e,
                      );
                    });
                }
                return Promise.resolve().then(function () {
                  return V(z);
                });
              })()
                .then(function (t) {
                  return WebAssembly.instantiate(t, e);
                })
                .then(function (t) {
                  return t;
                })
                .then(t, function (t) {
                  E('failed to asynchronously prepare wasm: ' + t), W(t);
                });
            }
            if (
              (Z++,
              t.monitorRunDependencies && t.monitorRunDependencies(Z),
              t.instantiateWasm)
            )
              try {
                return t.instantiateWasm(e, _);
              } catch (t) {
                return (
                  E('Module.instantiateWasm callback failed with error: ' + t),
                  !1
                );
              }
            (l ||
            'function' != typeof WebAssembly.instantiateStreaming ||
            k(z) ||
            q(z) ||
            'function' != typeof fetch
              ? o(r)
              : fetch(z, { credentials: 'same-origin' }).then(function (t) {
                  return WebAssembly.instantiateStreaming(t, e).then(
                    r,
                    function (t) {
                      return (
                        E('wasm streaming compile failed: ' + t),
                        E('falling back to ArrayBuffer instantiation'),
                        o(r)
                      );
                    },
                  );
                })
            ).catch(n);
          })(),
            (t.___wasm_call_ctors = function () {
              return (t.___wasm_call_ctors = t.asm.t).apply(null, arguments);
            });
          var ot = (t._emscripten_bind_PeObject_getCode_0 = function () {
              return (ot = t._emscripten_bind_PeObject_getCode_0 =
                t.asm.u).apply(null, arguments);
            }),
            pt = (t._emscripten_bind_PeObject_getName_1 = function () {
              return (pt = t._emscripten_bind_PeObject_getName_1 =
                t.asm.v).apply(null, arguments);
            }),
            it = (t._emscripten_bind_PeObject_getType_0 = function () {
              return (it = t._emscripten_bind_PeObject_getType_0 =
                t.asm.w).apply(null, arguments);
            }),
            ct = (t._emscripten_bind_PeCoordsys_getCode_0 = function () {
              return (ct = t._emscripten_bind_PeCoordsys_getCode_0 =
                t.asm.x).apply(null, arguments);
            }),
            at = (t._emscripten_bind_PeCoordsys_getName_1 = function () {
              return (at = t._emscripten_bind_PeCoordsys_getName_1 =
                t.asm.y).apply(null, arguments);
            }),
            st = (t._emscripten_bind_PeCoordsys_getType_0 = function () {
              return (st = t._emscripten_bind_PeCoordsys_getType_0 =
                t.asm.z).apply(null, arguments);
            }),
            ut = (t._emscripten_bind_VoidPtr___destroy___0 = function () {
              return (ut = t._emscripten_bind_VoidPtr___destroy___0 =
                t.asm.A).apply(null, arguments);
            }),
            Pt = (t._emscripten_bind_PeDatum_getSpheroid_0 = function () {
              return (Pt = t._emscripten_bind_PeDatum_getSpheroid_0 =
                t.asm.B).apply(null, arguments);
            }),
            yt = (t._emscripten_bind_PeDatum_getCode_0 = function () {
              return (yt = t._emscripten_bind_PeDatum_getCode_0 =
                t.asm.C).apply(null, arguments);
            }),
            gt = (t._emscripten_bind_PeDatum_getName_1 = function () {
              return (gt = t._emscripten_bind_PeDatum_getName_1 =
                t.asm.D).apply(null, arguments);
            }),
            ft = (t._emscripten_bind_PeDatum_getType_0 = function () {
              return (ft = t._emscripten_bind_PeDatum_getType_0 =
                t.asm.E).apply(null, arguments);
            }),
            lt = (t._emscripten_bind_PeDefs_get_PE_BUFFER_MAX_0 = function () {
              return (lt = t._emscripten_bind_PeDefs_get_PE_BUFFER_MAX_0 =
                t.asm.F).apply(null, arguments);
            }),
            mt = (t._emscripten_bind_PeDefs_get_PE_NAME_MAX_0 = function () {
              return (mt = t._emscripten_bind_PeDefs_get_PE_NAME_MAX_0 =
                t.asm.G).apply(null, arguments);
            }),
            dt = (t._emscripten_bind_PeDefs_get_PE_MGRS_MAX_0 = function () {
              return (dt = t._emscripten_bind_PeDefs_get_PE_MGRS_MAX_0 =
                t.asm.H).apply(null, arguments);
            }),
            Et = (t._emscripten_bind_PeDefs_get_PE_USNG_MAX_0 = function () {
              return (Et = t._emscripten_bind_PeDefs_get_PE_USNG_MAX_0 =
                t.asm.I).apply(null, arguments);
            }),
            bt = (t._emscripten_bind_PeDefs_get_PE_DD_MAX_0 = function () {
              return (bt = t._emscripten_bind_PeDefs_get_PE_DD_MAX_0 =
                t.asm.J).apply(null, arguments);
            }),
            Ot = (t._emscripten_bind_PeDefs_get_PE_DMS_MAX_0 = function () {
              return (Ot = t._emscripten_bind_PeDefs_get_PE_DMS_MAX_0 =
                t.asm.K).apply(null, arguments);
            }),
            Tt = (t._emscripten_bind_PeDefs_get_PE_DDM_MAX_0 = function () {
              return (Tt = t._emscripten_bind_PeDefs_get_PE_DDM_MAX_0 =
                t.asm.L).apply(null, arguments);
            }),
            St = (t._emscripten_bind_PeDefs_get_PE_UTM_MAX_0 = function () {
              return (St = t._emscripten_bind_PeDefs_get_PE_UTM_MAX_0 =
                t.asm.M).apply(null, arguments);
            }),
            Nt = (t._emscripten_bind_PeDefs_get_PE_PARM_MAX_0 = function () {
              return (Nt = t._emscripten_bind_PeDefs_get_PE_PARM_MAX_0 =
                t.asm.N).apply(null, arguments);
            }),
            ht = (t._emscripten_bind_PeDefs_get_PE_TYPE_NONE_0 = function () {
              return (ht = t._emscripten_bind_PeDefs_get_PE_TYPE_NONE_0 =
                t.asm.O).apply(null, arguments);
            }),
            Mt = (t._emscripten_bind_PeDefs_get_PE_TYPE_GEOGCS_0 = function () {
              return (Mt = t._emscripten_bind_PeDefs_get_PE_TYPE_GEOGCS_0 =
                t.asm.P).apply(null, arguments);
            }),
            vt = (t._emscripten_bind_PeDefs_get_PE_TYPE_PROJCS_0 = function () {
              return (vt = t._emscripten_bind_PeDefs_get_PE_TYPE_PROJCS_0 =
                t.asm.Q).apply(null, arguments);
            }),
            Dt = (t._emscripten_bind_PeDefs_get_PE_TYPE_GEOGTRAN_0 =
              function () {
                return (Dt = t._emscripten_bind_PeDefs_get_PE_TYPE_GEOGTRAN_0 =
                  t.asm.R).apply(null, arguments);
              }),
            Rt = (t._emscripten_bind_PeDefs_get_PE_TYPE_COORDSYS_0 =
              function () {
                return (Rt = t._emscripten_bind_PeDefs_get_PE_TYPE_COORDSYS_0 =
                  t.asm.S).apply(null, arguments);
              }),
            At = (t._emscripten_bind_PeDefs_get_PE_TYPE_UNIT_0 = function () {
              return (At = t._emscripten_bind_PeDefs_get_PE_TYPE_UNIT_0 =
                t.asm.T).apply(null, arguments);
            }),
            Gt = (t._emscripten_bind_PeDefs_get_PE_TYPE_LINUNIT_0 =
              function () {
                return (Gt = t._emscripten_bind_PeDefs_get_PE_TYPE_LINUNIT_0 =
                  t.asm.U).apply(null, arguments);
              }),
            Ct = (t._emscripten_bind_PeDefs_get_PE_STR_OPTS_NONE_0 =
              function () {
                return (Ct = t._emscripten_bind_PeDefs_get_PE_STR_OPTS_NONE_0 =
                  t.asm.V).apply(null, arguments);
              }),
            It = (t._emscripten_bind_PeDefs_get_PE_STR_AUTH_NONE_0 =
              function () {
                return (It = t._emscripten_bind_PeDefs_get_PE_STR_AUTH_NONE_0 =
                  t.asm.W).apply(null, arguments);
              }),
            jt = (t._emscripten_bind_PeDefs_get_PE_STR_AUTH_TOP_0 =
              function () {
                return (jt = t._emscripten_bind_PeDefs_get_PE_STR_AUTH_TOP_0 =
                  t.asm.X).apply(null, arguments);
              }),
            Lt = (t._emscripten_bind_PeDefs_get_PE_STR_NAME_CANON_0 =
              function () {
                return (Lt = t._emscripten_bind_PeDefs_get_PE_STR_NAME_CANON_0 =
                  t.asm.Y).apply(null, arguments);
              }),
            Ut = (t._emscripten_bind_PeDefs_get_PE_PARM_X0_0 = function () {
              return (Ut = t._emscripten_bind_PeDefs_get_PE_PARM_X0_0 =
                t.asm.Z).apply(null, arguments);
            }),
            Yt = (t._emscripten_bind_PeDefs_get_PE_PARM_ND_0 = function () {
              return (Yt = t._emscripten_bind_PeDefs_get_PE_PARM_ND_0 =
                t.asm._).apply(null, arguments);
            }),
            Ft = (t._emscripten_bind_PeDefs_get_PE_TRANSFORM_1_TO_2_0 =
              function () {
                return (Ft =
                  t._emscripten_bind_PeDefs_get_PE_TRANSFORM_1_TO_2_0 =
                    t.asm.$).apply(null, arguments);
              }),
            wt = (t._emscripten_bind_PeDefs_get_PE_TRANSFORM_2_TO_1_0 =
              function () {
                return (wt =
                  t._emscripten_bind_PeDefs_get_PE_TRANSFORM_2_TO_1_0 =
                    t.asm.aa).apply(null, arguments);
              }),
            xt = (t._emscripten_bind_PeDefs_get_PE_TRANSFORM_P_TO_G_0 =
              function () {
                return (xt =
                  t._emscripten_bind_PeDefs_get_PE_TRANSFORM_P_TO_G_0 =
                    t.asm.ba).apply(null, arguments);
              }),
            Ht = (t._emscripten_bind_PeDefs_get_PE_TRANSFORM_G_TO_P_0 =
              function () {
                return (Ht =
                  t._emscripten_bind_PeDefs_get_PE_TRANSFORM_G_TO_P_0 =
                    t.asm.ca).apply(null, arguments);
              }),
            Xt = (t._emscripten_bind_PeDefs_get_PE_HORIZON_RECT_0 =
              function () {
                return (Xt = t._emscripten_bind_PeDefs_get_PE_HORIZON_RECT_0 =
                  t.asm.da).apply(null, arguments);
              }),
            zt = (t._emscripten_bind_PeDefs_get_PE_HORIZON_POLY_0 =
              function () {
                return (zt = t._emscripten_bind_PeDefs_get_PE_HORIZON_POLY_0 =
                  t.asm.ea).apply(null, arguments);
              }),
            Zt = (t._emscripten_bind_PeDefs_get_PE_HORIZON_LINE_0 =
              function () {
                return (Zt = t._emscripten_bind_PeDefs_get_PE_HORIZON_LINE_0 =
                  t.asm.fa).apply(null, arguments);
              }),
            Bt = (t._emscripten_bind_PeDefs_get_PE_HORIZON_DELTA_0 =
              function () {
                return (Bt = t._emscripten_bind_PeDefs_get_PE_HORIZON_DELTA_0 =
                  t.asm.ga).apply(null, arguments);
              }),
            Wt = (t._emscripten_bind_PeFactory_initialize_1 = function () {
              return (Wt = t._emscripten_bind_PeFactory_initialize_1 =
                t.asm.ha).apply(null, arguments);
            }),
            kt = (t._emscripten_bind_PeFactory_factoryByType_2 = function () {
              return (kt = t._emscripten_bind_PeFactory_factoryByType_2 =
                t.asm.ia).apply(null, arguments);
            }),
            qt = (t._emscripten_bind_PeFactory_fromString_2 = function () {
              return (qt = t._emscripten_bind_PeFactory_fromString_2 =
                t.asm.ja).apply(null, arguments);
            }),
            Vt = (t._emscripten_bind_PeFactory_getCode_1 = function () {
              return (Vt = t._emscripten_bind_PeFactory_getCode_1 =
                t.asm.ka).apply(null, arguments);
            }),
            Jt = (t._emscripten_bind_PeGCSExtent_PeGCSExtent_6 = function () {
              return (Jt = t._emscripten_bind_PeGCSExtent_PeGCSExtent_6 =
                t.asm.la).apply(null, arguments);
            }),
            Kt = (t._emscripten_bind_PeGCSExtent_getLLon_0 = function () {
              return (Kt = t._emscripten_bind_PeGCSExtent_getLLon_0 =
                t.asm.ma).apply(null, arguments);
            }),
            $t = (t._emscripten_bind_PeGCSExtent_getSLat_0 = function () {
              return ($t = t._emscripten_bind_PeGCSExtent_getSLat_0 =
                t.asm.na).apply(null, arguments);
            }),
            Qt = (t._emscripten_bind_PeGCSExtent_getRLon_0 = function () {
              return (Qt = t._emscripten_bind_PeGCSExtent_getRLon_0 =
                t.asm.oa).apply(null, arguments);
            }),
            te = (t._emscripten_bind_PeGCSExtent_getNLat_0 = function () {
              return (te = t._emscripten_bind_PeGCSExtent_getNLat_0 =
                t.asm.pa).apply(null, arguments);
            }),
            ee = (t._emscripten_bind_PeGCSExtent___destroy___0 = function () {
              return (ee = t._emscripten_bind_PeGCSExtent___destroy___0 =
                t.asm.qa).apply(null, arguments);
            }),
            ne = (t._emscripten_bind_PeGeogcs_getDatum_0 = function () {
              return (ne = t._emscripten_bind_PeGeogcs_getDatum_0 =
                t.asm.ra).apply(null, arguments);
            }),
            _e = (t._emscripten_bind_PeGeogcs_getPrimem_0 = function () {
              return (_e = t._emscripten_bind_PeGeogcs_getPrimem_0 =
                t.asm.sa).apply(null, arguments);
            }),
            re = (t._emscripten_bind_PeGeogcs_getUnit_0 = function () {
              return (re = t._emscripten_bind_PeGeogcs_getUnit_0 =
                t.asm.ta).apply(null, arguments);
            }),
            oe = (t._emscripten_bind_PeGeogcs_getCode_0 = function () {
              return (oe = t._emscripten_bind_PeGeogcs_getCode_0 =
                t.asm.ua).apply(null, arguments);
            }),
            pe = (t._emscripten_bind_PeGeogcs_getName_1 = function () {
              return (pe = t._emscripten_bind_PeGeogcs_getName_1 =
                t.asm.va).apply(null, arguments);
            }),
            ie = (t._emscripten_bind_PeGeogcs_getType_0 = function () {
              return (ie = t._emscripten_bind_PeGeogcs_getType_0 =
                t.asm.wa).apply(null, arguments);
            }),
            ce = (t._emscripten_bind_PeGeogtran_isEqual_1 = function () {
              return (ce = t._emscripten_bind_PeGeogtran_isEqual_1 =
                t.asm.xa).apply(null, arguments);
            }),
            ae = (t._emscripten_bind_PeGeogtran_getGeogcs1_0 = function () {
              return (ae = t._emscripten_bind_PeGeogtran_getGeogcs1_0 =
                t.asm.ya).apply(null, arguments);
            }),
            se = (t._emscripten_bind_PeGeogtran_getGeogcs2_0 = function () {
              return (se = t._emscripten_bind_PeGeogtran_getGeogcs2_0 =
                t.asm.za).apply(null, arguments);
            }),
            ue = (t._emscripten_bind_PeGeogtran_getParameters_0 = function () {
              return (ue = t._emscripten_bind_PeGeogtran_getParameters_0 =
                t.asm.Aa).apply(null, arguments);
            }),
            Pe = (t._emscripten_bind_PeGeogtran_loadConstants_0 = function () {
              return (Pe = t._emscripten_bind_PeGeogtran_loadConstants_0 =
                t.asm.Ba).apply(null, arguments);
            }),
            ye = (t._emscripten_bind_PeGeogtran_getCode_0 = function () {
              return (ye = t._emscripten_bind_PeGeogtran_getCode_0 =
                t.asm.Ca).apply(null, arguments);
            }),
            ge = (t._emscripten_bind_PeGeogtran_getName_1 = function () {
              return (ge = t._emscripten_bind_PeGeogtran_getName_1 =
                t.asm.Da).apply(null, arguments);
            }),
            fe = (t._emscripten_bind_PeGeogtran_getType_0 = function () {
              return (fe = t._emscripten_bind_PeGeogtran_getType_0 =
                t.asm.Ea).apply(null, arguments);
            }),
            le = (t._emscripten_bind_PeGTlistExtended_getGTlist_6 =
              function () {
                return (le = t._emscripten_bind_PeGTlistExtended_getGTlist_6 =
                  t.asm.Fa).apply(null, arguments);
              }),
            me =
              (t._emscripten_bind_PeGTlistExtended_get_PE_GTLIST_OPTS_COMMON_0 =
                function () {
                  return (me =
                    t._emscripten_bind_PeGTlistExtended_get_PE_GTLIST_OPTS_COMMON_0 =
                      t.asm.Ga).apply(null, arguments);
                }),
            de = (t._emscripten_bind_PeGTlistExtendedEntry_getEntries_0 =
              function () {
                return (de =
                  t._emscripten_bind_PeGTlistExtendedEntry_getEntries_0 =
                    t.asm.Ha).apply(null, arguments);
              }),
            Ee = (t._emscripten_bind_PeGTlistExtendedEntry_getSteps_0 =
              function () {
                return (Ee =
                  t._emscripten_bind_PeGTlistExtendedEntry_getSteps_0 =
                    t.asm.Ia).apply(null, arguments);
              }),
            be = (t._emscripten_bind_PeGTlistExtendedEntry_Delete_1 =
              function () {
                return (be = t._emscripten_bind_PeGTlistExtendedEntry_Delete_1 =
                  t.asm.Ja).apply(null, arguments);
              }),
            Oe = (t._emscripten_bind_PeGTlistExtendedGTs_getDirection_0 =
              function () {
                return (Oe =
                  t._emscripten_bind_PeGTlistExtendedGTs_getDirection_0 =
                    t.asm.Ka).apply(null, arguments);
              }),
            Te = (t._emscripten_bind_PeGTlistExtendedGTs_getGeogtran_0 =
              function () {
                return (Te =
                  t._emscripten_bind_PeGTlistExtendedGTs_getGeogtran_0 =
                    t.asm.La).apply(null, arguments);
              }),
            Se = (t._emscripten_bind_PeHorizon_getNump_0 = function () {
              return (Se = t._emscripten_bind_PeHorizon_getNump_0 =
                t.asm.Ma).apply(null, arguments);
            }),
            Ne = (t._emscripten_bind_PeHorizon_getKind_0 = function () {
              return (Ne = t._emscripten_bind_PeHorizon_getKind_0 =
                t.asm.Na).apply(null, arguments);
            }),
            he = (t._emscripten_bind_PeHorizon_getInclusive_0 = function () {
              return (he = t._emscripten_bind_PeHorizon_getInclusive_0 =
                t.asm.Oa).apply(null, arguments);
            }),
            Me = (t._emscripten_bind_PeHorizon_getSize_0 = function () {
              return (Me = t._emscripten_bind_PeHorizon_getSize_0 =
                t.asm.Pa).apply(null, arguments);
            }),
            ve = (t._emscripten_bind_PeHorizon_getCoord_0 = function () {
              return (ve = t._emscripten_bind_PeHorizon_getCoord_0 =
                t.asm.Qa).apply(null, arguments);
            }),
            De = (t._emscripten_bind_PeInteger_PeInteger_1 = function () {
              return (De = t._emscripten_bind_PeInteger_PeInteger_1 =
                t.asm.Ra).apply(null, arguments);
            }),
            Re = (t._emscripten_bind_PeInteger_get_val_0 = function () {
              return (Re = t._emscripten_bind_PeInteger_get_val_0 =
                t.asm.Sa).apply(null, arguments);
            }),
            Ae = (t._emscripten_bind_PeInteger_set_val_1 = function () {
              return (Ae = t._emscripten_bind_PeInteger_set_val_1 =
                t.asm.Ta).apply(null, arguments);
            }),
            Ge = (t._emscripten_bind_PeInteger___destroy___0 = function () {
              return (Ge = t._emscripten_bind_PeInteger___destroy___0 =
                t.asm.Ua).apply(null, arguments);
            }),
            Ce = (t._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_NEW_0 =
              function () {
                return (Ce =
                  t._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_NEW_0 =
                    t.asm.Va).apply(null, arguments);
              }),
            Ie = (t._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_OLD_0 =
              function () {
                return (Ie =
                  t._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_OLD_0 =
                    t.asm.Wa).apply(null, arguments);
              }),
            je = (t._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_AUTO_0 =
              function () {
                return (je =
                  t._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_AUTO_0 =
                    t.asm.Xa).apply(null, arguments);
              }),
            Le =
              (t._emscripten_bind_PeNotationMgrs_get_PE_MGRS_180_ZONE_1_PLUS_0 =
                function () {
                  return (Le =
                    t._emscripten_bind_PeNotationMgrs_get_PE_MGRS_180_ZONE_1_PLUS_0 =
                      t.asm.Ya).apply(null, arguments);
                }),
            Ue = (t._emscripten_bind_PeNotationMgrs_get_PE_MGRS_ADD_SPACES_0 =
              function () {
                return (Ue =
                  t._emscripten_bind_PeNotationMgrs_get_PE_MGRS_ADD_SPACES_0 =
                    t.asm.Za).apply(null, arguments);
              }),
            Ye = (t._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NONE_0 =
              function () {
                return (Ye =
                  t._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NONE_0 =
                    t.asm._a).apply(null, arguments);
              }),
            Fe = (t._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NS_0 =
              function () {
                return (Fe =
                  t._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NS_0 =
                    t.asm.$a).apply(null, arguments);
              }),
            we = (t._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NS_STRICT_0 =
              function () {
                return (we =
                  t._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NS_STRICT_0 =
                    t.asm.ab).apply(null, arguments);
              }),
            xe =
              (t._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_ADD_SPACES_0 =
                function () {
                  return (xe =
                    t._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_ADD_SPACES_0 =
                      t.asm.bb).apply(null, arguments);
                }),
            He = (t._emscripten_bind_PeParameter_getValue_0 = function () {
              return (He = t._emscripten_bind_PeParameter_getValue_0 =
                t.asm.cb).apply(null, arguments);
            }),
            Xe = (t._emscripten_bind_PeParameter_getCode_0 = function () {
              return (Xe = t._emscripten_bind_PeParameter_getCode_0 =
                t.asm.db).apply(null, arguments);
            }),
            ze = (t._emscripten_bind_PeParameter_getName_1 = function () {
              return (ze = t._emscripten_bind_PeParameter_getName_1 =
                t.asm.eb).apply(null, arguments);
            }),
            Ze = (t._emscripten_bind_PeParameter_getType_0 = function () {
              return (Ze = t._emscripten_bind_PeParameter_getType_0 =
                t.asm.fb).apply(null, arguments);
            }),
            Be = (t._emscripten_bind_PePCSInfo_getCentralMeridian_0 =
              function () {
                return (Be = t._emscripten_bind_PePCSInfo_getCentralMeridian_0 =
                  t.asm.gb).apply(null, arguments);
              }),
            We = (t._emscripten_bind_PePCSInfo_getDomainMinx_0 = function () {
              return (We = t._emscripten_bind_PePCSInfo_getDomainMinx_0 =
                t.asm.hb).apply(null, arguments);
            }),
            ke = (t._emscripten_bind_PePCSInfo_getDomainMiny_0 = function () {
              return (ke = t._emscripten_bind_PePCSInfo_getDomainMiny_0 =
                t.asm.ib).apply(null, arguments);
            }),
            qe = (t._emscripten_bind_PePCSInfo_getDomainMaxx_0 = function () {
              return (qe = t._emscripten_bind_PePCSInfo_getDomainMaxx_0 =
                t.asm.jb).apply(null, arguments);
            }),
            Ve = (t._emscripten_bind_PePCSInfo_getDomainMaxy_0 = function () {
              return (Ve = t._emscripten_bind_PePCSInfo_getDomainMaxy_0 =
                t.asm.kb).apply(null, arguments);
            }),
            Je = (t._emscripten_bind_PePCSInfo_getNorthPoleLocation_0 =
              function () {
                return (Je =
                  t._emscripten_bind_PePCSInfo_getNorthPoleLocation_0 =
                    t.asm.lb).apply(null, arguments);
              }),
            Ke = (t._emscripten_bind_PePCSInfo_getNorthPoleGeometry_0 =
              function () {
                return (Ke =
                  t._emscripten_bind_PePCSInfo_getNorthPoleGeometry_0 =
                    t.asm.mb).apply(null, arguments);
              }),
            $e = (t._emscripten_bind_PePCSInfo_getSouthPoleLocation_0 =
              function () {
                return ($e =
                  t._emscripten_bind_PePCSInfo_getSouthPoleLocation_0 =
                    t.asm.nb).apply(null, arguments);
              }),
            Qe = (t._emscripten_bind_PePCSInfo_getSouthPoleGeometry_0 =
              function () {
                return (Qe =
                  t._emscripten_bind_PePCSInfo_getSouthPoleGeometry_0 =
                    t.asm.ob).apply(null, arguments);
              }),
            tn = (t._emscripten_bind_PePCSInfo_isDensificationNeeded_0 =
              function () {
                return (tn =
                  t._emscripten_bind_PePCSInfo_isDensificationNeeded_0 =
                    t.asm.pb).apply(null, arguments);
              }),
            en = (t._emscripten_bind_PePCSInfo_isGcsHorizonMultiOverlap_0 =
              function () {
                return (en =
                  t._emscripten_bind_PePCSInfo_isGcsHorizonMultiOverlap_0 =
                    t.asm.qb).apply(null, arguments);
              }),
            nn = (t._emscripten_bind_PePCSInfo_isPannableRectangle_0 =
              function () {
                return (nn =
                  t._emscripten_bind_PePCSInfo_isPannableRectangle_0 =
                    t.asm.rb).apply(null, arguments);
              }),
            _n = (t._emscripten_bind_PePCSInfo_generate_2 = function () {
              return (_n = t._emscripten_bind_PePCSInfo_generate_2 =
                t.asm.sb).apply(null, arguments);
            }),
            rn = (t._emscripten_bind_PePCSInfo_get_PE_PCSINFO_OPTION_NONE_0 =
              function () {
                return (rn =
                  t._emscripten_bind_PePCSInfo_get_PE_PCSINFO_OPTION_NONE_0 =
                    t.asm.tb).apply(null, arguments);
              }),
            on = (t._emscripten_bind_PePCSInfo_get_PE_PCSINFO_OPTION_DOMAIN_0 =
              function () {
                return (on =
                  t._emscripten_bind_PePCSInfo_get_PE_PCSINFO_OPTION_DOMAIN_0 =
                    t.asm.ub).apply(null, arguments);
              }),
            pn = (t._emscripten_bind_PePCSInfo_get_PE_POLE_OUTSIDE_BOUNDARY_0 =
              function () {
                return (pn =
                  t._emscripten_bind_PePCSInfo_get_PE_POLE_OUTSIDE_BOUNDARY_0 =
                    t.asm.vb).apply(null, arguments);
              }),
            cn = (t._emscripten_bind_PePCSInfo_get_PE_POLE_POINT_0 =
              function () {
                return (cn = t._emscripten_bind_PePCSInfo_get_PE_POLE_POINT_0 =
                  t.asm.wb).apply(null, arguments);
              }),
            an = (t._emscripten_bind_PePrimem_getLongitude_0 = function () {
              return (an = t._emscripten_bind_PePrimem_getLongitude_0 =
                t.asm.xb).apply(null, arguments);
            }),
            sn = (t._emscripten_bind_PePrimem_getCode_0 = function () {
              return (sn = t._emscripten_bind_PePrimem_getCode_0 =
                t.asm.yb).apply(null, arguments);
            }),
            un = (t._emscripten_bind_PePrimem_getName_1 = function () {
              return (un = t._emscripten_bind_PePrimem_getName_1 =
                t.asm.zb).apply(null, arguments);
            }),
            Pn = (t._emscripten_bind_PePrimem_getType_0 = function () {
              return (Pn = t._emscripten_bind_PePrimem_getType_0 =
                t.asm.Ab).apply(null, arguments);
            }),
            yn = (t._emscripten_bind_PeProjcs_getGeogcs_0 = function () {
              return (yn = t._emscripten_bind_PeProjcs_getGeogcs_0 =
                t.asm.Bb).apply(null, arguments);
            }),
            gn = (t._emscripten_bind_PeProjcs_getParameters_0 = function () {
              return (gn = t._emscripten_bind_PeProjcs_getParameters_0 =
                t.asm.Cb).apply(null, arguments);
            }),
            fn = (t._emscripten_bind_PeProjcs_getUnit_0 = function () {
              return (fn = t._emscripten_bind_PeProjcs_getUnit_0 =
                t.asm.Db).apply(null, arguments);
            }),
            ln = (t._emscripten_bind_PeProjcs_loadConstants_0 = function () {
              return (ln = t._emscripten_bind_PeProjcs_loadConstants_0 =
                t.asm.Eb).apply(null, arguments);
            }),
            mn = (t._emscripten_bind_PeProjcs_horizonGcsGenerate_0 =
              function () {
                return (mn = t._emscripten_bind_PeProjcs_horizonGcsGenerate_0 =
                  t.asm.Fb).apply(null, arguments);
              }),
            dn = (t._emscripten_bind_PeProjcs_horizonPcsGenerate_0 =
              function () {
                return (dn = t._emscripten_bind_PeProjcs_horizonPcsGenerate_0 =
                  t.asm.Gb).apply(null, arguments);
              }),
            En = (t._emscripten_bind_PeProjcs_getCode_0 = function () {
              return (En = t._emscripten_bind_PeProjcs_getCode_0 =
                t.asm.Hb).apply(null, arguments);
            }),
            bn = (t._emscripten_bind_PeProjcs_getName_1 = function () {
              return (bn = t._emscripten_bind_PeProjcs_getName_1 =
                t.asm.Ib).apply(null, arguments);
            }),
            On = (t._emscripten_bind_PeProjcs_getType_0 = function () {
              return (On = t._emscripten_bind_PeProjcs_getType_0 =
                t.asm.Jb).apply(null, arguments);
            }),
            Tn = (t._emscripten_bind_PeSpheroid_getAxis_0 = function () {
              return (Tn = t._emscripten_bind_PeSpheroid_getAxis_0 =
                t.asm.Kb).apply(null, arguments);
            }),
            Sn = (t._emscripten_bind_PeSpheroid_getFlattening_0 = function () {
              return (Sn = t._emscripten_bind_PeSpheroid_getFlattening_0 =
                t.asm.Lb).apply(null, arguments);
            }),
            Nn = (t._emscripten_bind_PeSpheroid_getCode_0 = function () {
              return (Nn = t._emscripten_bind_PeSpheroid_getCode_0 =
                t.asm.Mb).apply(null, arguments);
            }),
            hn = (t._emscripten_bind_PeSpheroid_getName_1 = function () {
              return (hn = t._emscripten_bind_PeSpheroid_getName_1 =
                t.asm.Nb).apply(null, arguments);
            }),
            Mn = (t._emscripten_bind_PeSpheroid_getType_0 = function () {
              return (Mn = t._emscripten_bind_PeSpheroid_getType_0 =
                t.asm.Ob).apply(null, arguments);
            }),
            vn = (t._emscripten_bind_PeUnit_getUnitFactor_0 = function () {
              return (vn = t._emscripten_bind_PeUnit_getUnitFactor_0 =
                t.asm.Pb).apply(null, arguments);
            }),
            Dn = (t._emscripten_bind_PeUnit_getCode_0 = function () {
              return (Dn = t._emscripten_bind_PeUnit_getCode_0 =
                t.asm.Qb).apply(null, arguments);
            }),
            Rn = (t._emscripten_bind_PeUnit_getName_1 = function () {
              return (Rn = t._emscripten_bind_PeUnit_getName_1 =
                t.asm.Rb).apply(null, arguments);
            }),
            An = (t._emscripten_bind_PeUnit_getType_0 = function () {
              return (An = t._emscripten_bind_PeUnit_getType_0 =
                t.asm.Sb).apply(null, arguments);
            }),
            Gn = (t._emscripten_bind_PeVersion_version_string_0 = function () {
              return (Gn = t._emscripten_bind_PeVersion_version_string_0 =
                t.asm.Tb).apply(null, arguments);
            });
          (t._pe_getPeGTlistExtendedEntrySize = function () {
            return (t._pe_getPeGTlistExtendedEntrySize = t.asm.Ub).apply(
              null,
              arguments,
            );
          }),
            (t._pe_getPeGTlistExtendedGTsSize = function () {
              return (t._pe_getPeGTlistExtendedGTsSize = t.asm.Vb).apply(
                null,
                arguments,
              );
            }),
            (t._pe_getPeHorizonSize = function () {
              return (t._pe_getPeHorizonSize = t.asm.Wb).apply(null, arguments);
            }),
            (t._pe_geog_to_geog = function () {
              return (t._pe_geog_to_geog = t.asm.Yb).apply(null, arguments);
            }),
            (t._pe_geog_to_proj = function () {
              return (t._pe_geog_to_proj = t.asm.Zb).apply(null, arguments);
            }),
            (t._pe_geog_to_dd = function () {
              return (t._pe_geog_to_dd = t.asm._b).apply(null, arguments);
            }),
            (t._pe_dd_to_geog = function () {
              return (t._pe_dd_to_geog = t.asm.$b).apply(null, arguments);
            }),
            (t._pe_geog_to_ddm = function () {
              return (t._pe_geog_to_ddm = t.asm.ac).apply(null, arguments);
            }),
            (t._pe_ddm_to_geog = function () {
              return (t._pe_ddm_to_geog = t.asm.bc).apply(null, arguments);
            }),
            (t._pe_geog_to_dms = function () {
              return (t._pe_geog_to_dms = t.asm.cc).apply(null, arguments);
            }),
            (t._pe_dms_to_geog = function () {
              return (t._pe_dms_to_geog = t.asm.dc).apply(null, arguments);
            }),
            (t._pe_geog_to_mgrs_extended = function () {
              return (t._pe_geog_to_mgrs_extended = t.asm.ec).apply(
                null,
                arguments,
              );
            }),
            (t._pe_mgrs_to_geog_extended = function () {
              return (t._pe_mgrs_to_geog_extended = t.asm.fc).apply(
                null,
                arguments,
              );
            }),
            (t._pe_geog_to_usng = function () {
              return (t._pe_geog_to_usng = t.asm.gc).apply(null, arguments);
            }),
            (t._pe_usng_to_geog = function () {
              return (t._pe_usng_to_geog = t.asm.hc).apply(null, arguments);
            }),
            (t._pe_geog_to_utm = function () {
              return (t._pe_geog_to_utm = t.asm.ic).apply(null, arguments);
            }),
            (t._pe_utm_to_geog = function () {
              return (t._pe_utm_to_geog = t.asm.jc).apply(null, arguments);
            }),
            (t._pe_object_to_string_ext = function () {
              return (t._pe_object_to_string_ext = t.asm.kc).apply(
                null,
                arguments,
              );
            }),
            (t._pe_proj_to_geog_center = function () {
              return (t._pe_proj_to_geog_center = t.asm.lc).apply(
                null,
                arguments,
              );
            });
          var Cn = (t._malloc = function () {
            return (Cn = t._malloc = t.asm.mc).apply(null, arguments);
          });
          t._free = function () {
            return (t._free = t.asm.nc).apply(null, arguments);
          };
          var In,
            jn = (t.__get_tzname = function () {
              return (jn = t.__get_tzname = t.asm.oc).apply(null, arguments);
            }),
            Ln = (t.__get_daylight = function () {
              return (Ln = t.__get_daylight = t.asm.pc).apply(null, arguments);
            }),
            Un = (t.__get_timezone = function () {
              return (Un = t.__get_timezone = t.asm.qc).apply(null, arguments);
            });
          function Yn(t) {
            (this.name = 'ExitStatus'),
              (this.message = 'Program terminated with exit(' + t + ')'),
              (this.status = t);
          }
          function Fn(n) {
            function _() {
              In ||
                ((In = !0),
                (t.calledRun = !0),
                b ||
                  (J(w),
                  e(t),
                  t.onRuntimeInitialized && t.onRuntimeInitialized(),
                  (function () {
                    if (t.postRun)
                      for (
                        'function' == typeof t.postRun &&
                        (t.postRun = [t.postRun]);
                        t.postRun.length;

                      )
                        X(t.postRun.shift());
                    J(x);
                  })()));
            }
            Z > 0 ||
              ((function () {
                if (t.preRun)
                  for (
                    'function' == typeof t.preRun && (t.preRun = [t.preRun]);
                    t.preRun.length;

                  )
                    H(t.preRun.shift());
                J(F);
              })(),
              Z > 0 ||
                (t.setStatus
                  ? (t.setStatus('Running...'),
                    setTimeout(function () {
                      setTimeout(function () {
                        t.setStatus('');
                      }, 1),
                        _();
                    }, 1))
                  : _()));
          }
          if (
            ((t.getValue = function (t, e, n) {
              switch (
                ('*' === (e = e || 'i8').charAt(e.length - 1) && (e = 'i32'), e)
              ) {
                case 'i1':
                case 'i8':
                  return S[t >> 0];
                case 'i16':
                  return h[t >> 1];
                case 'i32':
                case 'i64':
                  return M[t >> 2];
                case 'float':
                  return v[t >> 2];
                case 'double':
                  return Number(D[t >> 3]);
                default:
                  W('invalid type for getValue: ' + e);
              }
              return null;
            }),
            (t.UTF8ToString = C),
            (B = function t() {
              In || Fn(), In || (B = t);
            }),
            (t.run = Fn),
            t.preInit)
          )
            for (
              'function' == typeof t.preInit && (t.preInit = [t.preInit]);
              t.preInit.length > 0;

            )
              t.preInit.pop()();
          function wn() {}
          function xn(t) {
            return (t || wn).__cache__;
          }
          function Hn(t, e) {
            var n = xn(e),
              _ = n[t];
            return (
              _ ||
              (((_ = Object.create((e || wn).prototype)).ptr = t), (n[t] = _))
            );
          }
          Fn(),
            (wn.prototype = Object.create(wn.prototype)),
            (wn.prototype.constructor = wn),
            (wn.prototype.__class__ = wn),
            (wn.__cache__ = {}),
            (t.WrapperObject = wn),
            (t.getCache = xn),
            (t.wrapPointer = Hn),
            (t.castObject = function (t, e) {
              return Hn(t.ptr, e);
            }),
            (t.NULL = Hn(0)),
            (t.destroy = function (t) {
              if (!t.__destroy__)
                throw 'Error: Cannot destroy object. (Did you create it yourself?)';
              t.__destroy__(), delete xn(t.__class__)[t.ptr];
            }),
            (t.compare = function (t, e) {
              return t.ptr === e.ptr;
            }),
            (t.getPointer = function (t) {
              return t.ptr;
            }),
            (t.getClass = function (t) {
              return t.__class__;
            });
          var Xn = {
            buffer: 0,
            size: 0,
            pos: 0,
            temps: [],
            needed: 0,
            prepare: function () {
              if (Xn.needed) {
                for (var e = 0; e < Xn.temps.length; e++) t._free(Xn.temps[e]);
                (Xn.temps.length = 0),
                  t._free(Xn.buffer),
                  (Xn.buffer = 0),
                  (Xn.size += Xn.needed),
                  (Xn.needed = 0);
              }
              Xn.buffer ||
                ((Xn.size += 128),
                (Xn.buffer = t._malloc(Xn.size)),
                O(Xn.buffer)),
                (Xn.pos = 0);
            },
            alloc: function (e, n) {
              O(Xn.buffer);
              var _,
                r = n.BYTES_PER_ELEMENT,
                o = e.length * r;
              return (
                (o = (o + 7) & -8),
                Xn.pos + o >= Xn.size
                  ? (O(o > 0),
                    (Xn.needed += o),
                    (_ = t._malloc(o)),
                    Xn.temps.push(_))
                  : ((_ = Xn.buffer + Xn.pos), (Xn.pos += o)),
                _
              );
            },
            copy: function (t, e, n) {
              switch (((n >>>= 0), e.BYTES_PER_ELEMENT)) {
                case 2:
                  n >>>= 1;
                  break;
                case 4:
                  n >>>= 2;
                  break;
                case 8:
                  n >>>= 3;
              }
              for (var _ = 0; _ < t.length; _++) e[n + _] = t[_];
            },
          };
          function zn(t) {
            if ('string' == typeof t) {
              var e = (function (t, e, n) {
                  var _ = j(t) + 1,
                    r = new Array(_);
                  I(t, r, 0, r.length);
                  return r;
                })(t),
                n = Xn.alloc(e, S);
              return Xn.copy(e, S, n), n;
            }
            return t;
          }
          function Zn(t) {
            if ('object' == typeof t) {
              var e = Xn.alloc(t, S);
              return Xn.copy(t, S, e), e;
            }
            return t;
          }
          function Bn() {
            throw 'cannot construct a PeObject, no constructor in IDL';
          }
          function Wn() {
            throw 'cannot construct a PeCoordsys, no constructor in IDL';
          }
          function kn() {
            throw 'cannot construct a VoidPtr, no constructor in IDL';
          }
          function qn() {
            throw 'cannot construct a PeDatum, no constructor in IDL';
          }
          function Vn() {
            throw 'cannot construct a PeDefs, no constructor in IDL';
          }
          function Jn() {
            throw 'cannot construct a PeFactory, no constructor in IDL';
          }
          function Kn(t, e, n, _, r, o) {
            t && 'object' == typeof t && (t = t.ptr),
              e && 'object' == typeof e && (e = e.ptr),
              n && 'object' == typeof n && (n = n.ptr),
              _ && 'object' == typeof _ && (_ = _.ptr),
              r && 'object' == typeof r && (r = r.ptr),
              o && 'object' == typeof o && (o = o.ptr),
              (this.ptr = Jt(t, e, n, _, r, o)),
              (xn(Kn)[this.ptr] = this);
          }
          function $n() {
            throw 'cannot construct a PeGeogcs, no constructor in IDL';
          }
          function Qn() {
            throw 'cannot construct a PeGeogtran, no constructor in IDL';
          }
          function t_() {
            throw 'cannot construct a PeGTlistExtended, no constructor in IDL';
          }
          function e_() {
            throw 'cannot construct a PeGTlistExtendedEntry, no constructor in IDL';
          }
          function n_() {
            throw 'cannot construct a PeGTlistExtendedGTs, no constructor in IDL';
          }
          function __() {
            throw 'cannot construct a PeHorizon, no constructor in IDL';
          }
          function r_(t) {
            t && 'object' == typeof t && (t = t.ptr),
              (this.ptr = De(t)),
              (xn(r_)[this.ptr] = this);
          }
          function o_() {
            throw 'cannot construct a PeNotationMgrs, no constructor in IDL';
          }
          function p_() {
            throw 'cannot construct a PeNotationUtm, no constructor in IDL';
          }
          function i_() {
            throw 'cannot construct a PeParameter, no constructor in IDL';
          }
          function c_() {
            throw 'cannot construct a PePCSInfo, no constructor in IDL';
          }
          function a_() {
            throw 'cannot construct a PePrimem, no constructor in IDL';
          }
          function s_() {
            throw 'cannot construct a PeProjcs, no constructor in IDL';
          }
          function u_() {
            throw 'cannot construct a PeSpheroid, no constructor in IDL';
          }
          function P_() {
            throw 'cannot construct a PeUnit, no constructor in IDL';
          }
          function y_() {
            throw 'cannot construct a PeVersion, no constructor in IDL';
          }
          return (
            (Bn.prototype = Object.create(wn.prototype)),
            (Bn.prototype.constructor = Bn),
            (Bn.prototype.__class__ = Bn),
            (Bn.__cache__ = {}),
            (t.PeObject = Bn),
            (Bn.prototype.getCode = Bn.prototype.getCode =
              function () {
                var t = this.ptr;
                return ot(t);
              }),
            (Bn.prototype.getName = Bn.prototype.getName =
              function (t) {
                var e = this.ptr;
                return (
                  Xn.prepare(), 'object' == typeof t && (t = Zn(t)), C(pt(e, t))
                );
              }),
            (Bn.prototype.getType = Bn.prototype.getType =
              function () {
                var t = this.ptr;
                return it(t);
              }),
            (Wn.prototype = Object.create(Bn.prototype)),
            (Wn.prototype.constructor = Wn),
            (Wn.prototype.__class__ = Wn),
            (Wn.__cache__ = {}),
            (t.PeCoordsys = Wn),
            (Wn.prototype.getCode = Wn.prototype.getCode =
              function () {
                var t = this.ptr;
                return ct(t);
              }),
            (Wn.prototype.getName = Wn.prototype.getName =
              function (t) {
                var e = this.ptr;
                return (
                  Xn.prepare(), 'object' == typeof t && (t = Zn(t)), C(at(e, t))
                );
              }),
            (Wn.prototype.getType = Wn.prototype.getType =
              function () {
                var t = this.ptr;
                return st(t);
              }),
            (kn.prototype = Object.create(wn.prototype)),
            (kn.prototype.constructor = kn),
            (kn.prototype.__class__ = kn),
            (kn.__cache__ = {}),
            (t.VoidPtr = kn),
            (kn.prototype.__destroy__ = kn.prototype.__destroy__ =
              function () {
                var t = this.ptr;
                ut(t);
              }),
            (qn.prototype = Object.create(Bn.prototype)),
            (qn.prototype.constructor = qn),
            (qn.prototype.__class__ = qn),
            (qn.__cache__ = {}),
            (t.PeDatum = qn),
            (qn.prototype.getSpheroid = qn.prototype.getSpheroid =
              function () {
                var t = this.ptr;
                return Hn(Pt(t), u_);
              }),
            (qn.prototype.getCode = qn.prototype.getCode =
              function () {
                var t = this.ptr;
                return yt(t);
              }),
            (qn.prototype.getName = qn.prototype.getName =
              function (t) {
                var e = this.ptr;
                return (
                  Xn.prepare(), 'object' == typeof t && (t = Zn(t)), C(gt(e, t))
                );
              }),
            (qn.prototype.getType = qn.prototype.getType =
              function () {
                var t = this.ptr;
                return ft(t);
              }),
            (Vn.prototype = Object.create(wn.prototype)),
            (Vn.prototype.constructor = Vn),
            (Vn.prototype.__class__ = Vn),
            (Vn.__cache__ = {}),
            (t.PeDefs = Vn),
            (Vn.prototype.get_PE_BUFFER_MAX = Vn.prototype.get_PE_BUFFER_MAX =
              function () {
                var t = this.ptr;
                return lt(t);
              }),
            Object.defineProperty(Vn.prototype, 'PE_BUFFER_MAX', {
              get: Vn.prototype.get_PE_BUFFER_MAX,
            }),
            (Vn.prototype.get_PE_NAME_MAX = Vn.prototype.get_PE_NAME_MAX =
              function () {
                var t = this.ptr;
                return mt(t);
              }),
            Object.defineProperty(Vn.prototype, 'PE_NAME_MAX', {
              get: Vn.prototype.get_PE_NAME_MAX,
            }),
            (Vn.prototype.get_PE_MGRS_MAX = Vn.prototype.get_PE_MGRS_MAX =
              function () {
                var t = this.ptr;
                return dt(t);
              }),
            Object.defineProperty(Vn.prototype, 'PE_MGRS_MAX', {
              get: Vn.prototype.get_PE_MGRS_MAX,
            }),
            (Vn.prototype.get_PE_USNG_MAX = Vn.prototype.get_PE_USNG_MAX =
              function () {
                var t = this.ptr;
                return Et(t);
              }),
            Object.defineProperty(Vn.prototype, 'PE_USNG_MAX', {
              get: Vn.prototype.get_PE_USNG_MAX,
            }),
            (Vn.prototype.get_PE_DD_MAX = Vn.prototype.get_PE_DD_MAX =
              function () {
                var t = this.ptr;
                return bt(t);
              }),
            Object.defineProperty(Vn.prototype, 'PE_DD_MAX', {
              get: Vn.prototype.get_PE_DD_MAX,
            }),
            (Vn.prototype.get_PE_DMS_MAX = Vn.prototype.get_PE_DMS_MAX =
              function () {
                var t = this.ptr;
                return Ot(t);
              }),
            Object.defineProperty(Vn.prototype, 'PE_DMS_MAX', {
              get: Vn.prototype.get_PE_DMS_MAX,
            }),
            (Vn.prototype.get_PE_DDM_MAX = Vn.prototype.get_PE_DDM_MAX =
              function () {
                var t = this.ptr;
                return Tt(t);
              }),
            Object.defineProperty(Vn.prototype, 'PE_DDM_MAX', {
              get: Vn.prototype.get_PE_DDM_MAX,
            }),
            (Vn.prototype.get_PE_UTM_MAX = Vn.prototype.get_PE_UTM_MAX =
              function () {
                var t = this.ptr;
                return St(t);
              }),
            Object.defineProperty(Vn.prototype, 'PE_UTM_MAX', {
              get: Vn.prototype.get_PE_UTM_MAX,
            }),
            (Vn.prototype.get_PE_PARM_MAX = Vn.prototype.get_PE_PARM_MAX =
              function () {
                var t = this.ptr;
                return Nt(t);
              }),
            Object.defineProperty(Vn.prototype, 'PE_PARM_MAX', {
              get: Vn.prototype.get_PE_PARM_MAX,
            }),
            (Vn.prototype.get_PE_TYPE_NONE = Vn.prototype.get_PE_TYPE_NONE =
              function () {
                var t = this.ptr;
                return ht(t);
              }),
            Object.defineProperty(Vn.prototype, 'PE_TYPE_NONE', {
              get: Vn.prototype.get_PE_TYPE_NONE,
            }),
            (Vn.prototype.get_PE_TYPE_GEOGCS = Vn.prototype.get_PE_TYPE_GEOGCS =
              function () {
                var t = this.ptr;
                return Mt(t);
              }),
            Object.defineProperty(Vn.prototype, 'PE_TYPE_GEOGCS', {
              get: Vn.prototype.get_PE_TYPE_GEOGCS,
            }),
            (Vn.prototype.get_PE_TYPE_PROJCS = Vn.prototype.get_PE_TYPE_PROJCS =
              function () {
                var t = this.ptr;
                return vt(t);
              }),
            Object.defineProperty(Vn.prototype, 'PE_TYPE_PROJCS', {
              get: Vn.prototype.get_PE_TYPE_PROJCS,
            }),
            (Vn.prototype.get_PE_TYPE_GEOGTRAN =
              Vn.prototype.get_PE_TYPE_GEOGTRAN =
                function () {
                  var t = this.ptr;
                  return Dt(t);
                }),
            Object.defineProperty(Vn.prototype, 'PE_TYPE_GEOGTRAN', {
              get: Vn.prototype.get_PE_TYPE_GEOGTRAN,
            }),
            (Vn.prototype.get_PE_TYPE_COORDSYS =
              Vn.prototype.get_PE_TYPE_COORDSYS =
                function () {
                  var t = this.ptr;
                  return Rt(t);
                }),
            Object.defineProperty(Vn.prototype, 'PE_TYPE_COORDSYS', {
              get: Vn.prototype.get_PE_TYPE_COORDSYS,
            }),
            (Vn.prototype.get_PE_TYPE_UNIT = Vn.prototype.get_PE_TYPE_UNIT =
              function () {
                var t = this.ptr;
                return At(t);
              }),
            Object.defineProperty(Vn.prototype, 'PE_TYPE_UNIT', {
              get: Vn.prototype.get_PE_TYPE_UNIT,
            }),
            (Vn.prototype.get_PE_TYPE_LINUNIT =
              Vn.prototype.get_PE_TYPE_LINUNIT =
                function () {
                  var t = this.ptr;
                  return Gt(t);
                }),
            Object.defineProperty(Vn.prototype, 'PE_TYPE_LINUNIT', {
              get: Vn.prototype.get_PE_TYPE_LINUNIT,
            }),
            (Vn.prototype.get_PE_STR_OPTS_NONE =
              Vn.prototype.get_PE_STR_OPTS_NONE =
                function () {
                  var t = this.ptr;
                  return Ct(t);
                }),
            Object.defineProperty(Vn.prototype, 'PE_STR_OPTS_NONE', {
              get: Vn.prototype.get_PE_STR_OPTS_NONE,
            }),
            (Vn.prototype.get_PE_STR_AUTH_NONE =
              Vn.prototype.get_PE_STR_AUTH_NONE =
                function () {
                  var t = this.ptr;
                  return It(t);
                }),
            Object.defineProperty(Vn.prototype, 'PE_STR_AUTH_NONE', {
              get: Vn.prototype.get_PE_STR_AUTH_NONE,
            }),
            (Vn.prototype.get_PE_STR_AUTH_TOP =
              Vn.prototype.get_PE_STR_AUTH_TOP =
                function () {
                  var t = this.ptr;
                  return jt(t);
                }),
            Object.defineProperty(Vn.prototype, 'PE_STR_AUTH_TOP', {
              get: Vn.prototype.get_PE_STR_AUTH_TOP,
            }),
            (Vn.prototype.get_PE_STR_NAME_CANON =
              Vn.prototype.get_PE_STR_NAME_CANON =
                function () {
                  var t = this.ptr;
                  return Lt(t);
                }),
            Object.defineProperty(Vn.prototype, 'PE_STR_NAME_CANON', {
              get: Vn.prototype.get_PE_STR_NAME_CANON,
            }),
            (Vn.prototype.get_PE_PARM_X0 = Vn.prototype.get_PE_PARM_X0 =
              function () {
                var t = this.ptr;
                return Ut(t);
              }),
            Object.defineProperty(Vn.prototype, 'PE_PARM_X0', {
              get: Vn.prototype.get_PE_PARM_X0,
            }),
            (Vn.prototype.get_PE_PARM_ND = Vn.prototype.get_PE_PARM_ND =
              function () {
                var t = this.ptr;
                return Yt(t);
              }),
            Object.defineProperty(Vn.prototype, 'PE_PARM_ND', {
              get: Vn.prototype.get_PE_PARM_ND,
            }),
            (Vn.prototype.get_PE_TRANSFORM_1_TO_2 =
              Vn.prototype.get_PE_TRANSFORM_1_TO_2 =
                function () {
                  var t = this.ptr;
                  return Ft(t);
                }),
            Object.defineProperty(Vn.prototype, 'PE_TRANSFORM_1_TO_2', {
              get: Vn.prototype.get_PE_TRANSFORM_1_TO_2,
            }),
            (Vn.prototype.get_PE_TRANSFORM_2_TO_1 =
              Vn.prototype.get_PE_TRANSFORM_2_TO_1 =
                function () {
                  var t = this.ptr;
                  return wt(t);
                }),
            Object.defineProperty(Vn.prototype, 'PE_TRANSFORM_2_TO_1', {
              get: Vn.prototype.get_PE_TRANSFORM_2_TO_1,
            }),
            (Vn.prototype.get_PE_TRANSFORM_P_TO_G =
              Vn.prototype.get_PE_TRANSFORM_P_TO_G =
                function () {
                  var t = this.ptr;
                  return xt(t);
                }),
            Object.defineProperty(Vn.prototype, 'PE_TRANSFORM_P_TO_G', {
              get: Vn.prototype.get_PE_TRANSFORM_P_TO_G,
            }),
            (Vn.prototype.get_PE_TRANSFORM_G_TO_P =
              Vn.prototype.get_PE_TRANSFORM_G_TO_P =
                function () {
                  var t = this.ptr;
                  return Ht(t);
                }),
            Object.defineProperty(Vn.prototype, 'PE_TRANSFORM_G_TO_P', {
              get: Vn.prototype.get_PE_TRANSFORM_G_TO_P,
            }),
            (Vn.prototype.get_PE_HORIZON_RECT =
              Vn.prototype.get_PE_HORIZON_RECT =
                function () {
                  var t = this.ptr;
                  return Xt(t);
                }),
            Object.defineProperty(Vn.prototype, 'PE_HORIZON_RECT', {
              get: Vn.prototype.get_PE_HORIZON_RECT,
            }),
            (Vn.prototype.get_PE_HORIZON_POLY =
              Vn.prototype.get_PE_HORIZON_POLY =
                function () {
                  var t = this.ptr;
                  return zt(t);
                }),
            Object.defineProperty(Vn.prototype, 'PE_HORIZON_POLY', {
              get: Vn.prototype.get_PE_HORIZON_POLY,
            }),
            (Vn.prototype.get_PE_HORIZON_LINE =
              Vn.prototype.get_PE_HORIZON_LINE =
                function () {
                  var t = this.ptr;
                  return Zt(t);
                }),
            Object.defineProperty(Vn.prototype, 'PE_HORIZON_LINE', {
              get: Vn.prototype.get_PE_HORIZON_LINE,
            }),
            (Vn.prototype.get_PE_HORIZON_DELTA =
              Vn.prototype.get_PE_HORIZON_DELTA =
                function () {
                  var t = this.ptr;
                  return Bt(t);
                }),
            Object.defineProperty(Vn.prototype, 'PE_HORIZON_DELTA', {
              get: Vn.prototype.get_PE_HORIZON_DELTA,
            }),
            (Jn.prototype = Object.create(wn.prototype)),
            (Jn.prototype.constructor = Jn),
            (Jn.prototype.__class__ = Jn),
            (Jn.__cache__ = {}),
            (t.PeFactory = Jn),
            (Jn.prototype.initialize = Jn.prototype.initialize =
              function (t) {
                var e = this.ptr;
                Xn.prepare(),
                  (t = t && 'object' == typeof t ? t.ptr : zn(t)),
                  Wt(e, t);
              }),
            (Jn.prototype.factoryByType = Jn.prototype.factoryByType =
              function (t, e) {
                var n = this.ptr;
                return (
                  t && 'object' == typeof t && (t = t.ptr),
                  e && 'object' == typeof e && (e = e.ptr),
                  Hn(kt(n, t, e), Bn)
                );
              }),
            (Jn.prototype.fromString = Jn.prototype.fromString =
              function (t, e) {
                var n = this.ptr;
                return (
                  Xn.prepare(),
                  t && 'object' == typeof t && (t = t.ptr),
                  (e = e && 'object' == typeof e ? e.ptr : zn(e)),
                  Hn(qt(n, t, e), Bn)
                );
              }),
            (Jn.prototype.getCode = Jn.prototype.getCode =
              function (t) {
                var e = this.ptr;
                return t && 'object' == typeof t && (t = t.ptr), Vt(e, t);
              }),
            (Kn.prototype = Object.create(wn.prototype)),
            (Kn.prototype.constructor = Kn),
            (Kn.prototype.__class__ = Kn),
            (Kn.__cache__ = {}),
            (t.PeGCSExtent = Kn),
            (Kn.prototype.getLLon = Kn.prototype.getLLon =
              function () {
                var t = this.ptr;
                return Kt(t);
              }),
            (Kn.prototype.getSLat = Kn.prototype.getSLat =
              function () {
                var t = this.ptr;
                return $t(t);
              }),
            (Kn.prototype.getRLon = Kn.prototype.getRLon =
              function () {
                var t = this.ptr;
                return Qt(t);
              }),
            (Kn.prototype.getNLat = Kn.prototype.getNLat =
              function () {
                var t = this.ptr;
                return te(t);
              }),
            (Kn.prototype.__destroy__ = Kn.prototype.__destroy__ =
              function () {
                var t = this.ptr;
                ee(t);
              }),
            ($n.prototype = Object.create(Wn.prototype)),
            ($n.prototype.constructor = $n),
            ($n.prototype.__class__ = $n),
            ($n.__cache__ = {}),
            (t.PeGeogcs = $n),
            ($n.prototype.getDatum = $n.prototype.getDatum =
              function () {
                var t = this.ptr;
                return Hn(ne(t), qn);
              }),
            ($n.prototype.getPrimem = $n.prototype.getPrimem =
              function () {
                var t = this.ptr;
                return Hn(_e(t), a_);
              }),
            ($n.prototype.getUnit = $n.prototype.getUnit =
              function () {
                var t = this.ptr;
                return Hn(re(t), P_);
              }),
            ($n.prototype.getCode = $n.prototype.getCode =
              function () {
                var t = this.ptr;
                return oe(t);
              }),
            ($n.prototype.getName = $n.prototype.getName =
              function (t) {
                var e = this.ptr;
                return (
                  Xn.prepare(), 'object' == typeof t && (t = Zn(t)), C(pe(e, t))
                );
              }),
            ($n.prototype.getType = $n.prototype.getType =
              function () {
                var t = this.ptr;
                return ie(t);
              }),
            (Qn.prototype = Object.create(Bn.prototype)),
            (Qn.prototype.constructor = Qn),
            (Qn.prototype.__class__ = Qn),
            (Qn.__cache__ = {}),
            (t.PeGeogtran = Qn),
            (Qn.prototype.isEqual = Qn.prototype.isEqual =
              function (t) {
                var e = this.ptr;
                return t && 'object' == typeof t && (t = t.ptr), !!ce(e, t);
              }),
            (Qn.prototype.getGeogcs1 = Qn.prototype.getGeogcs1 =
              function () {
                var t = this.ptr;
                return Hn(ae(t), $n);
              }),
            (Qn.prototype.getGeogcs2 = Qn.prototype.getGeogcs2 =
              function () {
                var t = this.ptr;
                return Hn(se(t), $n);
              }),
            (Qn.prototype.getParameters = Qn.prototype.getParameters =
              function () {
                var t = this.ptr;
                return ue(t);
              }),
            (Qn.prototype.loadConstants = Qn.prototype.loadConstants =
              function () {
                var t = this.ptr;
                return !!Pe(t);
              }),
            (Qn.prototype.getCode = Qn.prototype.getCode =
              function () {
                var t = this.ptr;
                return ye(t);
              }),
            (Qn.prototype.getName = Qn.prototype.getName =
              function (t) {
                var e = this.ptr;
                return (
                  Xn.prepare(), 'object' == typeof t && (t = Zn(t)), C(ge(e, t))
                );
              }),
            (Qn.prototype.getType = Qn.prototype.getType =
              function () {
                var t = this.ptr;
                return fe(t);
              }),
            (t_.prototype = Object.create(wn.prototype)),
            (t_.prototype.constructor = t_),
            (t_.prototype.__class__ = t_),
            (t_.__cache__ = {}),
            (t.PeGTlistExtended = t_),
            (t_.prototype.getGTlist = t_.prototype.getGTlist =
              function (t, e, n, _, r, o) {
                var p = this.ptr;
                return (
                  t && 'object' == typeof t && (t = t.ptr),
                  e && 'object' == typeof e && (e = e.ptr),
                  n && 'object' == typeof n && (n = n.ptr),
                  _ && 'object' == typeof _ && (_ = _.ptr),
                  r && 'object' == typeof r && (r = r.ptr),
                  o && 'object' == typeof o && (o = o.ptr),
                  Hn(le(p, t, e, n, _, r, o), e_)
                );
              }),
            (t_.prototype.get_PE_GTLIST_OPTS_COMMON =
              t_.prototype.get_PE_GTLIST_OPTS_COMMON =
                function () {
                  var t = this.ptr;
                  return me(t);
                }),
            Object.defineProperty(t_.prototype, 'PE_GTLIST_OPTS_COMMON', {
              get: t_.prototype.get_PE_GTLIST_OPTS_COMMON,
            }),
            (e_.prototype = Object.create(wn.prototype)),
            (e_.prototype.constructor = e_),
            (e_.prototype.__class__ = e_),
            (e_.__cache__ = {}),
            (t.PeGTlistExtendedEntry = e_),
            (e_.prototype.getEntries = e_.prototype.getEntries =
              function () {
                var t = this.ptr;
                return Hn(de(t), n_);
              }),
            (e_.prototype.getSteps = e_.prototype.getSteps =
              function () {
                var t = this.ptr;
                return Ee(t);
              }),
            (e_.prototype.Delete = e_.prototype.Delete =
              function (t) {
                var e = this.ptr;
                t && 'object' == typeof t && (t = t.ptr), be(e, t);
              }),
            (n_.prototype = Object.create(wn.prototype)),
            (n_.prototype.constructor = n_),
            (n_.prototype.__class__ = n_),
            (n_.__cache__ = {}),
            (t.PeGTlistExtendedGTs = n_),
            (n_.prototype.getDirection = n_.prototype.getDirection =
              function () {
                var t = this.ptr;
                return Oe(t);
              }),
            (n_.prototype.getGeogtran = n_.prototype.getGeogtran =
              function () {
                var t = this.ptr;
                return Hn(Te(t), Qn);
              }),
            (__.prototype = Object.create(wn.prototype)),
            (__.prototype.constructor = __),
            (__.prototype.__class__ = __),
            (__.__cache__ = {}),
            (t.PeHorizon = __),
            (__.prototype.getNump = __.prototype.getNump =
              function () {
                var t = this.ptr;
                return Se(t);
              }),
            (__.prototype.getKind = __.prototype.getKind =
              function () {
                var t = this.ptr;
                return Ne(t);
              }),
            (__.prototype.getInclusive = __.prototype.getInclusive =
              function () {
                var t = this.ptr;
                return he(t);
              }),
            (__.prototype.getSize = __.prototype.getSize =
              function () {
                var t = this.ptr;
                return Me(t);
              }),
            (__.prototype.getCoord = __.prototype.getCoord =
              function () {
                var t = this.ptr;
                return ve(t);
              }),
            (r_.prototype = Object.create(wn.prototype)),
            (r_.prototype.constructor = r_),
            (r_.prototype.__class__ = r_),
            (r_.__cache__ = {}),
            (t.PeInteger = r_),
            (r_.prototype.get_val = r_.prototype.get_val =
              function () {
                var t = this.ptr;
                return Re(t);
              }),
            (r_.prototype.set_val = r_.prototype.set_val =
              function (t) {
                var e = this.ptr;
                t && 'object' == typeof t && (t = t.ptr), Ae(e, t);
              }),
            Object.defineProperty(r_.prototype, 'val', {
              get: r_.prototype.get_val,
              set: r_.prototype.set_val,
            }),
            (r_.prototype.__destroy__ = r_.prototype.__destroy__ =
              function () {
                var t = this.ptr;
                Ge(t);
              }),
            (o_.prototype = Object.create(wn.prototype)),
            (o_.prototype.constructor = o_),
            (o_.prototype.__class__ = o_),
            (o_.__cache__ = {}),
            (t.PeNotationMgrs = o_),
            (o_.prototype.get_PE_MGRS_STYLE_NEW =
              o_.prototype.get_PE_MGRS_STYLE_NEW =
                function () {
                  var t = this.ptr;
                  return Ce(t);
                }),
            Object.defineProperty(o_.prototype, 'PE_MGRS_STYLE_NEW', {
              get: o_.prototype.get_PE_MGRS_STYLE_NEW,
            }),
            (o_.prototype.get_PE_MGRS_STYLE_OLD =
              o_.prototype.get_PE_MGRS_STYLE_OLD =
                function () {
                  var t = this.ptr;
                  return Ie(t);
                }),
            Object.defineProperty(o_.prototype, 'PE_MGRS_STYLE_OLD', {
              get: o_.prototype.get_PE_MGRS_STYLE_OLD,
            }),
            (o_.prototype.get_PE_MGRS_STYLE_AUTO =
              o_.prototype.get_PE_MGRS_STYLE_AUTO =
                function () {
                  var t = this.ptr;
                  return je(t);
                }),
            Object.defineProperty(o_.prototype, 'PE_MGRS_STYLE_AUTO', {
              get: o_.prototype.get_PE_MGRS_STYLE_AUTO,
            }),
            (o_.prototype.get_PE_MGRS_180_ZONE_1_PLUS =
              o_.prototype.get_PE_MGRS_180_ZONE_1_PLUS =
                function () {
                  var t = this.ptr;
                  return Le(t);
                }),
            Object.defineProperty(o_.prototype, 'PE_MGRS_180_ZONE_1_PLUS', {
              get: o_.prototype.get_PE_MGRS_180_ZONE_1_PLUS,
            }),
            (o_.prototype.get_PE_MGRS_ADD_SPACES =
              o_.prototype.get_PE_MGRS_ADD_SPACES =
                function () {
                  var t = this.ptr;
                  return Ue(t);
                }),
            Object.defineProperty(o_.prototype, 'PE_MGRS_ADD_SPACES', {
              get: o_.prototype.get_PE_MGRS_ADD_SPACES,
            }),
            (p_.prototype = Object.create(wn.prototype)),
            (p_.prototype.constructor = p_),
            (p_.prototype.__class__ = p_),
            (p_.__cache__ = {}),
            (t.PeNotationUtm = p_),
            (p_.prototype.get_PE_UTM_OPTS_NONE =
              p_.prototype.get_PE_UTM_OPTS_NONE =
                function () {
                  var t = this.ptr;
                  return Ye(t);
                }),
            Object.defineProperty(p_.prototype, 'PE_UTM_OPTS_NONE', {
              get: p_.prototype.get_PE_UTM_OPTS_NONE,
            }),
            (p_.prototype.get_PE_UTM_OPTS_NS = p_.prototype.get_PE_UTM_OPTS_NS =
              function () {
                var t = this.ptr;
                return Fe(t);
              }),
            Object.defineProperty(p_.prototype, 'PE_UTM_OPTS_NS', {
              get: p_.prototype.get_PE_UTM_OPTS_NS,
            }),
            (p_.prototype.get_PE_UTM_OPTS_NS_STRICT =
              p_.prototype.get_PE_UTM_OPTS_NS_STRICT =
                function () {
                  var t = this.ptr;
                  return we(t);
                }),
            Object.defineProperty(p_.prototype, 'PE_UTM_OPTS_NS_STRICT', {
              get: p_.prototype.get_PE_UTM_OPTS_NS_STRICT,
            }),
            (p_.prototype.get_PE_UTM_OPTS_ADD_SPACES =
              p_.prototype.get_PE_UTM_OPTS_ADD_SPACES =
                function () {
                  var t = this.ptr;
                  return xe(t);
                }),
            Object.defineProperty(p_.prototype, 'PE_UTM_OPTS_ADD_SPACES', {
              get: p_.prototype.get_PE_UTM_OPTS_ADD_SPACES,
            }),
            (i_.prototype = Object.create(Bn.prototype)),
            (i_.prototype.constructor = i_),
            (i_.prototype.__class__ = i_),
            (i_.__cache__ = {}),
            (t.PeParameter = i_),
            (i_.prototype.getValue = i_.prototype.getValue =
              function () {
                var t = this.ptr;
                return He(t);
              }),
            (i_.prototype.getCode = i_.prototype.getCode =
              function () {
                var t = this.ptr;
                return Xe(t);
              }),
            (i_.prototype.getName = i_.prototype.getName =
              function (t) {
                var e = this.ptr;
                return (
                  Xn.prepare(), 'object' == typeof t && (t = Zn(t)), C(ze(e, t))
                );
              }),
            (i_.prototype.getType = i_.prototype.getType =
              function () {
                var t = this.ptr;
                return Ze(t);
              }),
            (c_.prototype = Object.create(wn.prototype)),
            (c_.prototype.constructor = c_),
            (c_.prototype.__class__ = c_),
            (c_.__cache__ = {}),
            (t.PePCSInfo = c_),
            (c_.prototype.getCentralMeridian = c_.prototype.getCentralMeridian =
              function () {
                var t = this.ptr;
                return Be(t);
              }),
            (c_.prototype.getDomainMinx = c_.prototype.getDomainMinx =
              function () {
                var t = this.ptr;
                return We(t);
              }),
            (c_.prototype.getDomainMiny = c_.prototype.getDomainMiny =
              function () {
                var t = this.ptr;
                return ke(t);
              }),
            (c_.prototype.getDomainMaxx = c_.prototype.getDomainMaxx =
              function () {
                var t = this.ptr;
                return qe(t);
              }),
            (c_.prototype.getDomainMaxy = c_.prototype.getDomainMaxy =
              function () {
                var t = this.ptr;
                return Ve(t);
              }),
            (c_.prototype.getNorthPoleLocation =
              c_.prototype.getNorthPoleLocation =
                function () {
                  var t = this.ptr;
                  return Je(t);
                }),
            (c_.prototype.getNorthPoleGeometry =
              c_.prototype.getNorthPoleGeometry =
                function () {
                  var t = this.ptr;
                  return Ke(t);
                }),
            (c_.prototype.getSouthPoleLocation =
              c_.prototype.getSouthPoleLocation =
                function () {
                  var t = this.ptr;
                  return $e(t);
                }),
            (c_.prototype.getSouthPoleGeometry =
              c_.prototype.getSouthPoleGeometry =
                function () {
                  var t = this.ptr;
                  return Qe(t);
                }),
            (c_.prototype.isDensificationNeeded =
              c_.prototype.isDensificationNeeded =
                function () {
                  var t = this.ptr;
                  return !!tn(t);
                }),
            (c_.prototype.isGcsHorizonMultiOverlap =
              c_.prototype.isGcsHorizonMultiOverlap =
                function () {
                  var t = this.ptr;
                  return !!en(t);
                }),
            (c_.prototype.isPannableRectangle =
              c_.prototype.isPannableRectangle =
                function () {
                  var t = this.ptr;
                  return !!nn(t);
                }),
            (c_.prototype.generate = c_.prototype.generate =
              function (t, e) {
                var n = this.ptr;
                return (
                  t && 'object' == typeof t && (t = t.ptr),
                  e && 'object' == typeof e && (e = e.ptr),
                  Hn(_n(n, t, e), c_)
                );
              }),
            (c_.prototype.get_PE_PCSINFO_OPTION_NONE =
              c_.prototype.get_PE_PCSINFO_OPTION_NONE =
                function () {
                  var t = this.ptr;
                  return rn(t);
                }),
            Object.defineProperty(c_.prototype, 'PE_PCSINFO_OPTION_NONE', {
              get: c_.prototype.get_PE_PCSINFO_OPTION_NONE,
            }),
            (c_.prototype.get_PE_PCSINFO_OPTION_DOMAIN =
              c_.prototype.get_PE_PCSINFO_OPTION_DOMAIN =
                function () {
                  var t = this.ptr;
                  return on(t);
                }),
            Object.defineProperty(c_.prototype, 'PE_PCSINFO_OPTION_DOMAIN', {
              get: c_.prototype.get_PE_PCSINFO_OPTION_DOMAIN,
            }),
            (c_.prototype.get_PE_POLE_OUTSIDE_BOUNDARY =
              c_.prototype.get_PE_POLE_OUTSIDE_BOUNDARY =
                function () {
                  var t = this.ptr;
                  return pn(t);
                }),
            Object.defineProperty(c_.prototype, 'PE_POLE_OUTSIDE_BOUNDARY', {
              get: c_.prototype.get_PE_POLE_OUTSIDE_BOUNDARY,
            }),
            (c_.prototype.get_PE_POLE_POINT = c_.prototype.get_PE_POLE_POINT =
              function () {
                var t = this.ptr;
                return cn(t);
              }),
            Object.defineProperty(c_.prototype, 'PE_POLE_POINT', {
              get: c_.prototype.get_PE_POLE_POINT,
            }),
            (a_.prototype = Object.create(Bn.prototype)),
            (a_.prototype.constructor = a_),
            (a_.prototype.__class__ = a_),
            (a_.__cache__ = {}),
            (t.PePrimem = a_),
            (a_.prototype.getLongitude = a_.prototype.getLongitude =
              function () {
                var t = this.ptr;
                return an(t);
              }),
            (a_.prototype.getCode = a_.prototype.getCode =
              function () {
                var t = this.ptr;
                return sn(t);
              }),
            (a_.prototype.getName = a_.prototype.getName =
              function (t) {
                var e = this.ptr;
                return (
                  Xn.prepare(), 'object' == typeof t && (t = Zn(t)), C(un(e, t))
                );
              }),
            (a_.prototype.getType = a_.prototype.getType =
              function () {
                var t = this.ptr;
                return Pn(t);
              }),
            (s_.prototype = Object.create(Wn.prototype)),
            (s_.prototype.constructor = s_),
            (s_.prototype.__class__ = s_),
            (s_.__cache__ = {}),
            (t.PeProjcs = s_),
            (s_.prototype.getGeogcs = s_.prototype.getGeogcs =
              function () {
                var t = this.ptr;
                return Hn(yn(t), $n);
              }),
            (s_.prototype.getParameters = s_.prototype.getParameters =
              function () {
                var t = this.ptr;
                return gn(t);
              }),
            (s_.prototype.getUnit = s_.prototype.getUnit =
              function () {
                var t = this.ptr;
                return Hn(fn(t), P_);
              }),
            (s_.prototype.loadConstants = s_.prototype.loadConstants =
              function () {
                var t = this.ptr;
                return !!ln(t);
              }),
            (s_.prototype.horizonGcsGenerate = s_.prototype.horizonGcsGenerate =
              function () {
                var t = this.ptr;
                return Hn(mn(t), __);
              }),
            (s_.prototype.horizonPcsGenerate = s_.prototype.horizonPcsGenerate =
              function () {
                var t = this.ptr;
                return Hn(dn(t), __);
              }),
            (s_.prototype.getCode = s_.prototype.getCode =
              function () {
                var t = this.ptr;
                return En(t);
              }),
            (s_.prototype.getName = s_.prototype.getName =
              function (t) {
                var e = this.ptr;
                return (
                  Xn.prepare(), 'object' == typeof t && (t = Zn(t)), C(bn(e, t))
                );
              }),
            (s_.prototype.getType = s_.prototype.getType =
              function () {
                var t = this.ptr;
                return On(t);
              }),
            (u_.prototype = Object.create(Bn.prototype)),
            (u_.prototype.constructor = u_),
            (u_.prototype.__class__ = u_),
            (u_.__cache__ = {}),
            (t.PeSpheroid = u_),
            (u_.prototype.getAxis = u_.prototype.getAxis =
              function () {
                var t = this.ptr;
                return Tn(t);
              }),
            (u_.prototype.getFlattening = u_.prototype.getFlattening =
              function () {
                var t = this.ptr;
                return Sn(t);
              }),
            (u_.prototype.getCode = u_.prototype.getCode =
              function () {
                var t = this.ptr;
                return Nn(t);
              }),
            (u_.prototype.getName = u_.prototype.getName =
              function (t) {
                var e = this.ptr;
                return (
                  Xn.prepare(), 'object' == typeof t && (t = Zn(t)), C(hn(e, t))
                );
              }),
            (u_.prototype.getType = u_.prototype.getType =
              function () {
                var t = this.ptr;
                return Mn(t);
              }),
            (P_.prototype = Object.create(Bn.prototype)),
            (P_.prototype.constructor = P_),
            (P_.prototype.__class__ = P_),
            (P_.__cache__ = {}),
            (t.PeUnit = P_),
            (P_.prototype.getUnitFactor = P_.prototype.getUnitFactor =
              function () {
                var t = this.ptr;
                return vn(t);
              }),
            (P_.prototype.getCode = P_.prototype.getCode =
              function () {
                var t = this.ptr;
                return Dn(t);
              }),
            (P_.prototype.getName = P_.prototype.getName =
              function (t) {
                var e = this.ptr;
                return (
                  Xn.prepare(), 'object' == typeof t && (t = Zn(t)), C(Rn(e, t))
                );
              }),
            (P_.prototype.getType = P_.prototype.getType =
              function () {
                var t = this.ptr;
                return An(t);
              }),
            (y_.prototype = Object.create(wn.prototype)),
            (y_.prototype.constructor = y_),
            (y_.prototype.__class__ = y_),
            (y_.__cache__ = {}),
            (t.PeVersion = y_),
            (y_.prototype.version_string = y_.prototype.version_string =
              function () {
                var t = this.ptr;
                return C(Gn(t));
              }),
            (t.ensureCache = Xn),
            (t.ensureString = zn),
            (t.ensureInt8 = Zn),
            (t.ensureInt16 = function (t) {
              if ('object' == typeof t) {
                var e = Xn.alloc(t, h);
                return Xn.copy(t, h, e), e;
              }
              return t;
            }),
            (t.ensureInt32 = function (t) {
              if ('object' == typeof t) {
                var e = Xn.alloc(t, M);
                return Xn.copy(t, M, e), e;
              }
              return t;
            }),
            (t.ensureFloat32 = function (t) {
              if ('object' == typeof t) {
                var e = Xn.alloc(t, v);
                return Xn.copy(t, v, e), e;
              }
              return t;
            }),
            (t.ensureFloat64 = function (t) {
              if ('object' == typeof t) {
                var e = Xn.alloc(t, D);
                return Xn.copy(t, D, e), e;
              }
              return t;
            }),
            t.ready
          );
        }),
        (_.exports = o);
      const i = p.exports,
        c = Object.freeze(
          (function (t, e) {
            for (var n = 0; n < e.length; n++) {
              const _ = e[n];
              if ('string' != typeof _ && !Array.isArray(_))
                for (const e in _)
                  if ('default' !== e && !(e in t)) {
                    const n = Object.getOwnPropertyDescriptor(_, e);
                    n &&
                      Object.defineProperty(
                        t,
                        e,
                        n.get ? n : { enumerable: !0, get: () => _[e] },
                      );
                  }
            }
            return Object.freeze(t);
          })({ __proto__: null, default: i }, [p.exports]),
        );
    },
  },
]);
