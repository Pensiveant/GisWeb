'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [4358],
  {
    84358: (n, t, e) => {
      e.r(t), e.d(t, { l: () => s });
      var r,
        o,
        i,
        a = { exports: {} };
      (r = a),
        (o = function () {
          return {
            load: function (n) {
              const t = n.locateFile,
                e = {};
              var o = void 0 !== o ? o : {};
              const i = (() => {
                let n;
                return {
                  resolve: (t) => n(t),
                  promise: new Promise((t) => (n = t)),
                };
              })();
              (o.locateFile = t),
                (o.onRuntimeInitialized = () => {
                  i.resolve(e);
                }),
                (e.Module = o),
                (e.whenLoaded = () => i.promise);
              var a,
                u = {};
              for (a in o) o.hasOwnProperty(a) && (u[a] = o[a]);
              var s,
                f,
                c,
                l,
                p,
                m = 'object' == typeof window,
                h = 'function' == typeof importScripts,
                d =
                  'object' == typeof process &&
                  'object' == typeof process.versions &&
                  'string' == typeof process.versions.node,
                y = '';
              d
                ? ((y = h ? require('path').dirname(y) + '/' : __dirname + '/'),
                  (s = function (n, t) {
                    return (
                      l || (l = require('fs')),
                      p || (p = require('path')),
                      (n = p.normalize(n)),
                      l.readFileSync(n, t ? null : 'utf8')
                    );
                  }),
                  (c = function (n) {
                    var t = s(n, !0);
                    return (
                      t.buffer || (t = new Uint8Array(t)),
                      (function (n, t) {
                        n || U('Assertion failed: ' + void 0);
                      })(t.buffer),
                      t
                    );
                  }),
                  (f = function (n, t, e) {
                    l || (l = require('fs')),
                      p || (p = require('path')),
                      (n = p.normalize(n)),
                      l.readFile(n, function (n, r) {
                        n ? e(n) : t(r.buffer);
                      });
                  }),
                  process.argv.length > 1 &&
                    process.argv[1].replace(/\\/g, '/'),
                  process.argv.slice(2),
                  (r.exports = o),
                  process.on('uncaughtException', function (n) {
                    if (!(n instanceof V)) throw n;
                  }),
                  process.on('unhandledRejection', U),
                  (o.inspect = function () {
                    return '[Emscripten Module object]';
                  }))
                : (m || h) &&
                  (h
                    ? (y = self.location.href)
                    : 'undefined' != typeof document &&
                      document.currentScript &&
                      (y = document.currentScript.src),
                  (y =
                    0 !== y.indexOf('blob:')
                      ? y.substr(0, y.lastIndexOf('/') + 1)
                      : ''),
                  (s = function (n) {
                    var t = new XMLHttpRequest();
                    return t.open('GET', n, !1), t.send(null), t.responseText;
                  }),
                  h &&
                    (c = function (n) {
                      var t = new XMLHttpRequest();
                      return (
                        t.open('GET', n, !1),
                        (t.responseType = 'arraybuffer'),
                        t.send(null),
                        new Uint8Array(t.response)
                      );
                    }),
                  (f = function (n, t, e) {
                    var r = new XMLHttpRequest();
                    r.open('GET', n, !0),
                      (r.responseType = 'arraybuffer'),
                      (r.onload = function () {
                        200 == r.status || (0 == r.status && r.response)
                          ? t(r.response)
                          : e();
                      }),
                      (r.onerror = e),
                      r.send(null);
                  }));
              var g = o.print || console.log.bind(console),
                v = o.printErr || console.warn.bind(console);
              for (a in u) u.hasOwnProperty(a) && (o[a] = u[a]);
              (u = null), o.arguments, o.thisProgram, o.quit;
              var w,
                b,
                A = 0;
              o.wasmBinary && (w = o.wasmBinary),
                o.noExitRuntime,
                'object' != typeof WebAssembly &&
                  U('no native wasm support detected');
              var R,
                _,
                E,
                P,
                S = !1,
                j =
                  'undefined' != typeof TextDecoder
                    ? new TextDecoder('utf8')
                    : void 0;
              function I(n, t, e) {
                for (var r = t + e, o = t; n[o] && !(o >= r); ) ++o;
                if (o - t > 16 && n.subarray && j)
                  return j.decode(n.subarray(t, o));
                for (var i = ''; t < o; ) {
                  var a = n[t++];
                  if (128 & a) {
                    var u = 63 & n[t++];
                    if (192 != (224 & a)) {
                      var s = 63 & n[t++];
                      if (
                        (a =
                          224 == (240 & a)
                            ? ((15 & a) << 12) | (u << 6) | s
                            : ((7 & a) << 18) |
                              (u << 12) |
                              (s << 6) |
                              (63 & n[t++])) < 65536
                      )
                        i += String.fromCharCode(a);
                      else {
                        var f = a - 65536;
                        i += String.fromCharCode(
                          55296 | (f >> 10),
                          56320 | (1023 & f),
                        );
                      }
                    } else i += String.fromCharCode(((31 & a) << 6) | u);
                  } else i += String.fromCharCode(a);
                }
                return i;
              }
              function T(n, t) {
                return n % t > 0 && (n += t - (n % t)), n;
              }
              function x(n) {
                (R = n),
                  (o.HEAP8 = new Int8Array(n)),
                  (o.HEAP16 = new Int16Array(n)),
                  (o.HEAP32 = E = new Int32Array(n)),
                  (o.HEAPU8 = _ = new Uint8Array(n)),
                  (o.HEAPU16 = new Uint16Array(n)),
                  (o.HEAPU32 = new Uint32Array(n)),
                  (o.HEAPF32 = new Float32Array(n)),
                  (o.HEAPF64 = new Float64Array(n));
              }
              o.INITIAL_MEMORY;
              var H = [],
                C = [],
                M = [];
              function F(n) {
                H.unshift(n);
              }
              function k(n) {
                M.unshift(n);
              }
              var O,
                W = 0,
                q = null;
              function U(n) {
                throw (
                  (o.onAbort && o.onAbort(n),
                  v((n += '')),
                  (S = !0),
                  (n =
                    'abort(' +
                    n +
                    '). Build with -s ASSERTIONS=1 for more info.'),
                  new WebAssembly.RuntimeError(n))
                );
              }
              function L(n) {
                return n.startsWith('data:application/octet-stream;base64,');
              }
              function z(n) {
                return n.startsWith('file://');
              }
              function B(n) {
                try {
                  if (n == O && w) return new Uint8Array(w);
                  if (c) return c(n);
                  throw 'both async and sync fetching of the wasm failed';
                } catch (n) {
                  U(n);
                }
              }
              function D(n) {
                for (; n.length > 0; ) {
                  var t = n.shift();
                  if ('function' != typeof t) {
                    var e = t.func;
                    'number' == typeof e
                      ? void 0 === t.arg
                        ? P.get(e)()
                        : P.get(e)(t.arg)
                      : e(void 0 === t.arg ? null : t.arg);
                  } else t(o);
                }
              }
              function N(n) {
                try {
                  return (
                    b.grow((n - R.byteLength + 65535) >>> 16), x(b.buffer), 1
                  );
                } catch (n) {}
              }
              (o.preloadedImages = {}),
                (o.preloadedAudios = {}),
                L((O = 'libtess.wasm')) ||
                  (O = (function (n) {
                    return o.locateFile ? o.locateFile(n, y) : y + n;
                  })(O));
              var G = {
                  mappings: {},
                  buffers: [null, [], []],
                  printChar: function (n, t) {
                    var e = G.buffers[n];
                    0 === t || 10 === t
                      ? ((1 === n ? g : v)(I(e, 0)), (e.length = 0))
                      : e.push(t);
                  },
                  varargs: void 0,
                  get: function () {
                    return (G.varargs += 4), E[(G.varargs - 4) >> 2];
                  },
                  getStr: function (n) {
                    return (function (n, t) {
                      return n ? I(_, n, void 0) : '';
                    })(n);
                  },
                  get64: function (n, t) {
                    return n;
                  },
                },
                X = {
                  h: function () {
                    throw 'longjmp';
                  },
                  l: function (n, t, e) {
                    _.copyWithin(n, t, t + e);
                  },
                  g: function (n) {
                    var t = _.length,
                      e = 2147483648;
                    if ((n >>>= 0) > e) return !1;
                    for (var r = 1; r <= 4; r *= 2) {
                      var o = t * (1 + 0.2 / r);
                      if (
                        ((o = Math.min(o, n + 100663296)),
                        N(Math.min(e, T(Math.max(n, o), 65536))))
                      )
                        return !0;
                    }
                    return !1;
                  },
                  f: function (n, t, e, r) {
                    for (var o = 0, i = 0; i < e; i++) {
                      for (
                        var a = E[(t + 8 * i) >> 2],
                          u = E[(t + (8 * i + 4)) >> 2],
                          s = 0;
                        s < u;
                        s++
                      )
                        G.printChar(n, _[a + s]);
                      o += u;
                    }
                    return (E[r >> 2] = o), 0;
                  },
                  b: function () {
                    return A;
                  },
                  k: function (n) {
                    var t = J();
                    try {
                      return P.get(n)();
                    } catch (n) {
                      if ((K(t), n !== n + 0 && 'longjmp' !== n)) throw n;
                      Q(1, 0);
                    }
                  },
                  d: function (n, t) {
                    var e = J();
                    try {
                      return P.get(n)(t);
                    } catch (n) {
                      if ((K(e), n !== n + 0 && 'longjmp' !== n)) throw n;
                      Q(1, 0);
                    }
                  },
                  j: function (n, t, e) {
                    var r = J();
                    try {
                      return P.get(n)(t, e);
                    } catch (n) {
                      if ((K(r), n !== n + 0 && 'longjmp' !== n)) throw n;
                      Q(1, 0);
                    }
                  },
                  i: function (n, t, e, r) {
                    var o = J();
                    try {
                      return P.get(n)(t, e, r);
                    } catch (n) {
                      if ((K(o), n !== n + 0 && 'longjmp' !== n)) throw n;
                      Q(1, 0);
                    }
                  },
                  e: function (n, t) {
                    var e = J();
                    try {
                      P.get(n)(t);
                    } catch (n) {
                      if ((K(e), n !== n + 0 && 'longjmp' !== n)) throw n;
                      Q(1, 0);
                    }
                  },
                  c: function (n, t, e) {
                    var r = J();
                    try {
                      P.get(n)(t, e);
                    } catch (n) {
                      if ((K(r), n !== n + 0 && 'longjmp' !== n)) throw n;
                      Q(1, 0);
                    }
                  },
                  a: function (n) {
                    !(function (n) {
                      A = n;
                    })(n);
                  },
                };
              (function () {
                var n = { a: X };
                function t(n, t) {
                  var e = n.exports;
                  (o.asm = e),
                    x((b = o.asm.m).buffer),
                    (P = o.asm.q),
                    (function (n) {
                      C.unshift(n);
                    })(o.asm.n),
                    (function (n) {
                      if (
                        (W--,
                        o.monitorRunDependencies && o.monitorRunDependencies(W),
                        0 == W && q)
                      ) {
                        var t = q;
                        (q = null), t();
                      }
                    })();
                }
                function e(n) {
                  t(n.instance);
                }
                function r(t) {
                  return (function () {
                    if (!w && (m || h)) {
                      if ('function' == typeof fetch && !z(O))
                        return fetch(O, { credentials: 'same-origin' })
                          .then(function (n) {
                            if (!n.ok)
                              throw (
                                "failed to load wasm binary file at '" + O + "'"
                              );
                            return n.arrayBuffer();
                          })
                          .catch(function () {
                            return B(O);
                          });
                      if (f)
                        return new Promise(function (n, t) {
                          f(
                            O,
                            function (t) {
                              n(new Uint8Array(t));
                            },
                            t,
                          );
                        });
                    }
                    return Promise.resolve().then(function () {
                      return B(O);
                    });
                  })()
                    .then(function (t) {
                      return WebAssembly.instantiate(t, n);
                    })
                    .then(t, function (n) {
                      v('failed to asynchronously prepare wasm: ' + n), U(n);
                    });
                }
                if (
                  (W++,
                  o.monitorRunDependencies && o.monitorRunDependencies(W),
                  o.instantiateWasm)
                )
                  try {
                    return o.instantiateWasm(n, t);
                  } catch (n) {
                    return (
                      v(
                        'Module.instantiateWasm callback failed with error: ' +
                          n,
                      ),
                      !1
                    );
                  }
                w ||
                'function' != typeof WebAssembly.instantiateStreaming ||
                L(O) ||
                z(O) ||
                'function' != typeof fetch
                  ? r(e)
                  : fetch(O, { credentials: 'same-origin' }).then(function (t) {
                      return WebAssembly.instantiateStreaming(t, n).then(
                        e,
                        function (n) {
                          return (
                            v('wasm streaming compile failed: ' + n),
                            v('falling back to ArrayBuffer instantiation'),
                            r(e)
                          );
                        },
                      );
                    });
              })(),
                (o.___wasm_call_ctors = function () {
                  return (o.___wasm_call_ctors = o.asm.n).apply(
                    null,
                    arguments,
                  );
                }),
                (o._malloc = function () {
                  return (o._malloc = o.asm.o).apply(null, arguments);
                }),
                (o._free = function () {
                  return (o._free = o.asm.p).apply(null, arguments);
                }),
                (o._triangulate = function () {
                  return (o._triangulate = o.asm.r).apply(null, arguments);
                });
              var Y,
                J = (o.stackSave = function () {
                  return (J = o.stackSave = o.asm.s).apply(null, arguments);
                }),
                K = (o.stackRestore = function () {
                  return (K = o.stackRestore = o.asm.t).apply(null, arguments);
                }),
                Q = (o._setThrew = function () {
                  return (Q = o._setThrew = o.asm.u).apply(null, arguments);
                });
              function V(n) {
                (this.name = 'ExitStatus'),
                  (this.message = 'Program terminated with exit(' + n + ')'),
                  (this.status = n);
              }
              function Z(n) {
                function t() {
                  Y ||
                    ((Y = !0),
                    (o.calledRun = !0),
                    S ||
                      (D(C),
                      o.onRuntimeInitialized && o.onRuntimeInitialized(),
                      (function () {
                        if (o.postRun)
                          for (
                            'function' == typeof o.postRun &&
                            (o.postRun = [o.postRun]);
                            o.postRun.length;

                          )
                            k(o.postRun.shift());
                        D(M);
                      })()));
                }
                W > 0 ||
                  ((function () {
                    if (o.preRun)
                      for (
                        'function' == typeof o.preRun &&
                        (o.preRun = [o.preRun]);
                        o.preRun.length;

                      )
                        F(o.preRun.shift());
                    D(H);
                  })(),
                  W > 0 ||
                    (o.setStatus
                      ? (o.setStatus('Running...'),
                        setTimeout(function () {
                          setTimeout(function () {
                            o.setStatus('');
                          }, 1),
                            t();
                        }, 1))
                      : t()));
              }
              if (
                ((q = function n() {
                  Y || Z(), Y || (q = n);
                }),
                (o.run = Z),
                o.preInit)
              )
                for (
                  'function' == typeof o.preInit && (o.preInit = [o.preInit]);
                  o.preInit.length > 0;

                )
                  o.preInit.pop()();
              Z();
              let $ = null,
                nn = null,
                tn = null,
                en = null;
              const rn = e.Module;
              let on = 0;
              return (
                (e.triangulate = (n, t, e) => {
                  $ || ($ = rn._triangulate);
                  let r = rn.HEAPF32;
                  const o = rn.HEAP32.BYTES_PER_ELEMENT,
                    i = r.BYTES_PER_ELEMENT;
                  e > on &&
                    ((on = e),
                    tn && (rn._free(tn), (tn = 0)),
                    nn && (rn._free(nn), (nn = 0))),
                    tn || (tn = rn._malloc(e * i)),
                    en || (en = rn._malloc(1e3 * o)),
                    nn || (nn = rn._malloc(e * i)),
                    (r = rn.HEAPF32),
                    r.set(n, tn / i),
                    rn.HEAP32.set(t, en / o);
                  const a = $(tn, en, t.length, 2, nn),
                    u = 2 * a;
                  r = rn.HEAPF32;
                  const s = r.slice(nn / i, nn / i + u),
                    f = {};
                  return (f.buffer = s), (f.vertexCount = a), f;
                }),
                e.whenLoaded()
              );
            },
          };
        }),
        void 0 !== (i = o()) && (r.exports = i);
      const u = a.exports,
        s = Object.freeze(
          (function (n, t) {
            for (var e = 0; e < t.length; e++) {
              const r = t[e];
              if ('string' != typeof r && !Array.isArray(r))
                for (const t in r)
                  if ('default' !== t && !(t in n)) {
                    const e = Object.getOwnPropertyDescriptor(r, t);
                    e &&
                      Object.defineProperty(
                        n,
                        t,
                        e.get ? e : { enumerable: !0, get: () => r[t] },
                      );
                  }
            }
            return Object.freeze(n);
          })({ __proto__: null, default: u }, [a.exports]),
        );
    },
  },
]);
