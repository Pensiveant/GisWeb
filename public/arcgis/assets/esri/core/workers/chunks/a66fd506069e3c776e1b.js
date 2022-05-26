'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [6233],
  {
    26233: (t, n, e) => {
      e.r(n), e.d(n, { l: () => a });
      var r,
        i,
        o,
        u = { exports: {} };
      (r = u),
        (i =
          'undefined' != typeof document && document.currentScript
            ? document.currentScript.src
            : void 0),
        'undefined' != typeof __filename && (i = i || __filename),
        (o = function (t) {
          var n, e;
          (t = void 0 !== (t = t || {}) ? t : {}).ready = new Promise(function (
            t,
            r,
          ) {
            (n = t), (e = r);
          });
          var r,
            o = {};
          for (r in t) t.hasOwnProperty(r) && (o[r] = t[r]);
          var u,
            s,
            a,
            f,
            c,
            l = 'object' == typeof window,
            p = 'function' == typeof importScripts,
            h =
              'object' == typeof process &&
              'object' == typeof process.versions &&
              'string' == typeof process.versions.node,
            d = '';
          h
            ? ((d = p ? require('path').dirname(d) + '/' : __dirname + '/'),
              (u = function (t, n) {
                return (
                  f || (f = require('fs')),
                  c || (c = require('path')),
                  (t = c.normalize(t)),
                  f.readFileSync(t, n ? null : 'utf8')
                );
              }),
              (a = function (t) {
                var n = u(t, !0);
                return (
                  n.buffer || (n = new Uint8Array(n)),
                  (function (t, n) {
                    t || k('Assertion failed: ' + void 0);
                  })(n.buffer),
                  n
                );
              }),
              (s = function (t, n, e) {
                f || (f = require('fs')),
                  c || (c = require('path')),
                  (t = c.normalize(t)),
                  f.readFile(t, function (t, r) {
                    t ? e(t) : n(r.buffer);
                  });
              }),
              process.argv.length > 1 && process.argv[1].replace(/\\/g, '/'),
              process.argv.slice(2),
              process.on('uncaughtException', function (t) {
                if (!(t instanceof N)) throw t;
              }),
              process.on('unhandledRejection', k),
              (t.inspect = function () {
                return '[Emscripten Module object]';
              }))
            : (l || p) &&
              (p
                ? (d = self.location.href)
                : 'undefined' != typeof document &&
                  document.currentScript &&
                  (d = document.currentScript.src),
              i && (d = i),
              (d =
                0 !== d.indexOf('blob:')
                  ? d.substr(0, d.lastIndexOf('/') + 1)
                  : ''),
              (u = function (t) {
                var n = new XMLHttpRequest();
                return n.open('GET', t, !1), n.send(null), n.responseText;
              }),
              p &&
                (a = function (t) {
                  var n = new XMLHttpRequest();
                  return (
                    n.open('GET', t, !1),
                    (n.responseType = 'arraybuffer'),
                    n.send(null),
                    new Uint8Array(n.response)
                  );
                }),
              (s = function (t, n, e) {
                var r = new XMLHttpRequest();
                r.open('GET', t, !0),
                  (r.responseType = 'arraybuffer'),
                  (r.onload = function () {
                    200 == r.status || (0 == r.status && r.response)
                      ? n(r.response)
                      : e();
                  }),
                  (r.onerror = e),
                  r.send(null);
              })),
            t.print || console.log.bind(console);
          var m,
            y,
            _ = t.printErr || console.warn.bind(console);
          for (r in o) o.hasOwnProperty(r) && (t[r] = o[r]);
          (o = null),
            t.arguments,
            t.thisProgram,
            t.quit,
            t.wasmBinary && (m = t.wasmBinary),
            t.noExitRuntime,
            'object' != typeof WebAssembly &&
              k('no native wasm support detected');
          var g,
            w,
            b,
            v,
            A,
            R = !1,
            E =
              'undefined' != typeof TextDecoder
                ? new TextDecoder('utf8')
                : void 0;
          function I(t, n) {
            return t
              ? (function (t, n, e) {
                  for (var r = n + e, i = n; t[i] && !(i >= r); ) ++i;
                  if (i - n > 16 && t.subarray && E)
                    return E.decode(t.subarray(n, i));
                  for (var o = ''; n < i; ) {
                    var u = t[n++];
                    if (128 & u) {
                      var s = 63 & t[n++];
                      if (192 != (224 & u)) {
                        var a = 63 & t[n++];
                        if (
                          (u =
                            224 == (240 & u)
                              ? ((15 & u) << 12) | (s << 6) | a
                              : ((7 & u) << 18) |
                                (s << 12) |
                                (a << 6) |
                                (63 & t[n++])) < 65536
                        )
                          o += String.fromCharCode(u);
                        else {
                          var f = u - 65536;
                          o += String.fromCharCode(
                            55296 | (f >> 10),
                            56320 | (1023 & f),
                          );
                        }
                      } else o += String.fromCharCode(((31 & u) << 6) | s);
                    } else o += String.fromCharCode(u);
                  }
                  return o;
                })(b, t, n)
              : '';
          }
          function S(t, n) {
            return t % n > 0 && (t += n - (t % n)), t;
          }
          function P(n) {
            (g = n),
              (t.HEAP8 = w = new Int8Array(n)),
              (t.HEAP16 = new Int16Array(n)),
              (t.HEAP32 = v = new Int32Array(n)),
              (t.HEAPU8 = b = new Uint8Array(n)),
              (t.HEAPU16 = new Uint16Array(n)),
              (t.HEAPU32 = new Uint32Array(n)),
              (t.HEAPF32 = new Float32Array(n)),
              (t.HEAPF64 = new Float64Array(n));
          }
          t.INITIAL_MEMORY;
          var x = [],
            C = [],
            T = [];
          function j(t) {
            x.unshift(t);
          }
          function D(t) {
            T.unshift(t);
          }
          var H,
            O = 0,
            W = null;
          function k(n) {
            t.onAbort && t.onAbort(n),
              _((n += '')),
              (R = !0),
              (n =
                'abort(' + n + '). Build with -s ASSERTIONS=1 for more info.');
            var r = new WebAssembly.RuntimeError(n);
            throw (e(r), r);
          }
          function M(t) {
            return t.startsWith('data:application/octet-stream;base64,');
          }
          function U(t) {
            return t.startsWith('file://');
          }
          function q(t) {
            try {
              if (t == H && m) return new Uint8Array(m);
              if (a) return a(t);
              throw 'both async and sync fetching of the wasm failed';
            } catch (t) {
              k(t);
            }
          }
          function F(n) {
            for (; n.length > 0; ) {
              var e = n.shift();
              if ('function' != typeof e) {
                var r = e.func;
                'number' == typeof r
                  ? void 0 === e.arg
                    ? A.get(r)()
                    : A.get(r)(e.arg)
                  : r(void 0 === e.arg ? null : e.arg);
              } else e(t);
            }
          }
          function B(t) {
            (this.excPtr = t),
              (this.ptr = t - 16),
              (this.set_type = function (t) {
                v[(this.ptr + 4) >> 2] = t;
              }),
              (this.get_type = function () {
                return v[(this.ptr + 4) >> 2];
              }),
              (this.set_destructor = function (t) {
                v[(this.ptr + 8) >> 2] = t;
              }),
              (this.get_destructor = function () {
                return v[(this.ptr + 8) >> 2];
              }),
              (this.set_refcount = function (t) {
                v[this.ptr >> 2] = t;
              }),
              (this.set_caught = function (t) {
                (t = t ? 1 : 0), (w[(this.ptr + 12) >> 0] = t);
              }),
              (this.get_caught = function () {
                return 0 != w[(this.ptr + 12) >> 0];
              }),
              (this.set_rethrown = function (t) {
                (t = t ? 1 : 0), (w[(this.ptr + 13) >> 0] = t);
              }),
              (this.get_rethrown = function () {
                return 0 != w[(this.ptr + 13) >> 0];
              }),
              (this.init = function (t, n) {
                this.set_type(t),
                  this.set_destructor(n),
                  this.set_refcount(0),
                  this.set_caught(!1),
                  this.set_rethrown(!1);
              }),
              (this.add_ref = function () {
                var t = v[this.ptr >> 2];
                v[this.ptr >> 2] = t + 1;
              }),
              (this.release_ref = function () {
                var t = v[this.ptr >> 2];
                return (v[this.ptr >> 2] = t - 1), 1 === t;
              });
          }
          function z(t) {
            try {
              return y.grow((t - g.byteLength + 65535) >>> 16), P(y.buffer), 1;
            } catch (t) {}
          }
          (t.preloadedImages = {}),
            (t.preloadedAudios = {}),
            M((H = 'lerc-wasm.wasm')) ||
              (H = (function (n) {
                return t.locateFile ? t.locateFile(n, d) : d + n;
              })(H));
          var L = {
            a: function (t, n, e, r) {
              k(
                'Assertion failed: ' +
                  I(t) +
                  ', at: ' +
                  [
                    n ? I(n) : 'unknown filename',
                    e,
                    r ? I(r) : 'unknown function',
                  ],
              );
            },
            c: function (t) {
              return X(t + 16) + 16;
            },
            b: function (t, n, e) {
              throw (new B(t).init(n, e), t);
            },
            f: function () {
              k();
            },
            d: function (t, n, e) {
              b.copyWithin(t, n, n + e);
            },
            e: function (t) {
              var n = b.length,
                e = 2147483648;
              if ((t >>>= 0) > e) return !1;
              for (var r = 1; r <= 4; r *= 2) {
                var i = n * (1 + 0.2 / r);
                if (
                  ((i = Math.min(i, t + 100663296)),
                  z(Math.min(e, S(Math.max(t, i), 65536))))
                )
                  return !0;
              }
              return !1;
            },
          };
          (function () {
            var n = { a: L };
            function r(n, e) {
              var r = n.exports;
              (t.asm = r),
                P((y = t.asm.g).buffer),
                (A = t.asm.m),
                (function (t) {
                  C.unshift(t);
                })(t.asm.h),
                (function (n) {
                  if (
                    (O--,
                    t.monitorRunDependencies && t.monitorRunDependencies(O),
                    0 == O && W)
                  ) {
                    var e = W;
                    (W = null), e();
                  }
                })();
            }
            function i(t) {
              r(t.instance);
            }
            function o(t) {
              return (function () {
                if (!m && (l || p)) {
                  if ('function' == typeof fetch && !U(H))
                    return fetch(H, { credentials: 'same-origin' })
                      .then(function (t) {
                        if (!t.ok)
                          throw (
                            "failed to load wasm binary file at '" + H + "'"
                          );
                        return t.arrayBuffer();
                      })
                      .catch(function () {
                        return q(H);
                      });
                  if (s)
                    return new Promise(function (t, n) {
                      s(
                        H,
                        function (n) {
                          t(new Uint8Array(n));
                        },
                        n,
                      );
                    });
                }
                return Promise.resolve().then(function () {
                  return q(H);
                });
              })()
                .then(function (t) {
                  return WebAssembly.instantiate(t, n);
                })
                .then(t, function (t) {
                  _('failed to asynchronously prepare wasm: ' + t), k(t);
                });
            }
            if (
              (O++,
              t.monitorRunDependencies && t.monitorRunDependencies(O),
              t.instantiateWasm)
            )
              try {
                return t.instantiateWasm(n, r);
              } catch (t) {
                return (
                  _('Module.instantiateWasm callback failed with error: ' + t),
                  !1
                );
              }
            (m ||
            'function' != typeof WebAssembly.instantiateStreaming ||
            M(H) ||
            U(H) ||
            'function' != typeof fetch
              ? o(i)
              : fetch(H, { credentials: 'same-origin' }).then(function (t) {
                  return WebAssembly.instantiateStreaming(t, n).then(
                    i,
                    function (t) {
                      return (
                        _('wasm streaming compile failed: ' + t),
                        _('falling back to ArrayBuffer instantiation'),
                        o(i)
                      );
                    },
                  );
                })
            ).catch(e);
          })(),
            (t.___wasm_call_ctors = function () {
              return (t.___wasm_call_ctors = t.asm.h).apply(null, arguments);
            }),
            (t._lerc_getBlobInfo = function () {
              return (t._lerc_getBlobInfo = t.asm.i).apply(null, arguments);
            }),
            (t._lerc_getDataRanges = function () {
              return (t._lerc_getDataRanges = t.asm.j).apply(null, arguments);
            }),
            (t._lerc_decode = function () {
              return (t._lerc_decode = t.asm.k).apply(null, arguments);
            }),
            (t._lerc_decode_4D = function () {
              return (t._lerc_decode_4D = t.asm.l).apply(null, arguments);
            });
          var G,
            X = (t._malloc = function () {
              return (X = t._malloc = t.asm.n).apply(null, arguments);
            });
          function N(t) {
            (this.name = 'ExitStatus'),
              (this.message = 'Program terminated with exit(' + t + ')'),
              (this.status = t);
          }
          function Y(e) {
            function r() {
              G ||
                ((G = !0),
                (t.calledRun = !0),
                R ||
                  (F(C),
                  n(t),
                  t.onRuntimeInitialized && t.onRuntimeInitialized(),
                  (function () {
                    if (t.postRun)
                      for (
                        'function' == typeof t.postRun &&
                        (t.postRun = [t.postRun]);
                        t.postRun.length;

                      )
                        D(t.postRun.shift());
                    F(T);
                  })()));
            }
            O > 0 ||
              ((function () {
                if (t.preRun)
                  for (
                    'function' == typeof t.preRun && (t.preRun = [t.preRun]);
                    t.preRun.length;

                  )
                    j(t.preRun.shift());
                F(x);
              })(),
              O > 0 ||
                (t.setStatus
                  ? (t.setStatus('Running...'),
                    setTimeout(function () {
                      setTimeout(function () {
                        t.setStatus('');
                      }, 1),
                        r();
                    }, 1))
                  : r()));
          }
          if (
            ((t._free = function () {
              return (t._free = t.asm.o).apply(null, arguments);
            }),
            (W = function t() {
              G || Y(), G || (W = t);
            }),
            (t.run = Y),
            t.preInit)
          )
            for (
              'function' == typeof t.preInit && (t.preInit = [t.preInit]);
              t.preInit.length > 0;

            )
              t.preInit.pop()();
          return Y(), t.ready;
        }),
        (r.exports = o);
      const s = u.exports,
        a = Object.freeze(
          (function (t, n) {
            for (var e = 0; e < n.length; e++) {
              const r = n[e];
              if ('string' != typeof r && !Array.isArray(r))
                for (const n in r)
                  if ('default' !== n && !(n in t)) {
                    const e = Object.getOwnPropertyDescriptor(r, n);
                    e &&
                      Object.defineProperty(
                        t,
                        n,
                        e.get ? e : { enumerable: !0, get: () => r[n] },
                      );
                  }
            }
            return Object.freeze(t);
          })({ __proto__: null, default: s }, [u.exports]),
        );
    },
  },
]);
