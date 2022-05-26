'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [8927, 3172],
  {
    7301: (e, t, r) => {
      r.r(t), r.d(t, { registerFunctions: () => h });
      var n = r(77286),
        o = r(61363),
        s = r(53073),
        a = r(75148),
        i = r(95330),
        l = r(9361),
        c = r(8667);
      function u(e) {
        return e instanceof l.Z;
      }
      function d(e, t, r, d, h) {
        return h(e, t, function (e, t, h) {
          if (h.length < 2) return d(new Error('Missing Parameters'));
          if (null === (h = (0, o.H)(h))[0] && null === h[1])
            return (0, i.DB)(!1);
          if ((0, o.q)(h[0]))
            return h[1] instanceof l.Z
              ? (0, i.DB)(
                  new s.Z({
                    parentfeatureset: h[0],
                    relation: r,
                    relationGeom: h[1],
                  }),
                )
              : null === h[1]
              ? (0, i.DB)(new a.Z({ parentfeatureset: h[0] }))
              : d('Spatial Relation cannot accept this parameter type');
          if (u(h[0])) {
            if (u(h[1])) {
              let e = null;
              switch (r) {
                case 'esriSpatialRelEnvelopeIntersects':
                  e = (0, c.kK)((0, n.SV)(h[0]), (0, n.SV)(h[1]));
                  break;
                case 'esriSpatialRelIntersects':
                  e = (0, c.kK)(h[0], h[1]);
                  break;
                case 'esriSpatialRelContains':
                  e = (0, c.r3)(h[0], h[1]);
                  break;
                case 'esriSpatialRelOverlaps':
                  e = (0, c.Nm)(h[0], h[1]);
                  break;
                case 'esriSpatialRelWithin':
                  e = (0, c.uh)(h[0], h[1]);
                  break;
                case 'esriSpatialRelTouches':
                  e = (0, c.W4)(h[0], h[1]);
                  break;
                case 'esriSpatialRelCrosses':
                  e = (0, c.jU)(h[0], h[1]);
              }
              return null !== e
                ? e
                : (0, i.d1)(new Error('Unrecognised Relationship'));
            }
            return (0, o.q)(h[1])
              ? (0, i.DB)(
                  new s.Z({
                    parentfeatureset: h[1],
                    relation: r,
                    relationGeom: h[0],
                  }),
                )
              : null === h[1]
              ? (0, i.DB)(!1)
              : d('Spatial Relation cannot accept this parameter type');
          }
          return null !== h[0]
            ? d('Spatial Relation cannot accept this parameter type')
            : (0, o.q)(h[1])
            ? (0, i.DB)(new a.Z({ parentfeatureset: h[1] }))
            : h[1] instanceof l.Z || null === h[1]
            ? (0, i.DB)(!1)
            : void 0;
        });
      }
      function h(e) {
        'async' === e.mode &&
          ((e.functions.intersects = function (t, r) {
            return d(
              t,
              r,
              'esriSpatialRelIntersects',
              e.failDefferred,
              e.standardFunctionAsync,
            );
          }),
          (e.functions.envelopeintersects = function (t, r) {
            return d(
              t,
              r,
              'esriSpatialRelEnvelopeIntersects',
              e.failDefferred,
              e.standardFunctionAsync,
            );
          }),
          e.signatures.push({ name: 'envelopeintersects', min: '2', max: '2' }),
          (e.functions.contains = function (t, r) {
            return d(
              t,
              r,
              'esriSpatialRelContains',
              e.failDefferred,
              e.standardFunctionAsync,
            );
          }),
          (e.functions.overlaps = function (t, r) {
            return d(
              t,
              r,
              'esriSpatialRelOverlaps',
              e.failDefferred,
              e.standardFunctionAsync,
            );
          }),
          (e.functions.within = function (t, r) {
            return d(
              t,
              r,
              'esriSpatialRelWithin',
              e.failDefferred,
              e.standardFunctionAsync,
            );
          }),
          (e.functions.touches = function (t, r) {
            return d(
              t,
              r,
              'esriSpatialRelTouches',
              e.failDefferred,
              e.standardFunctionAsync,
            );
          }),
          (e.functions.crosses = function (t, r) {
            return d(
              t,
              r,
              'esriSpatialRelCrosses',
              e.failDefferred,
              e.standardFunctionAsync,
            );
          }),
          (e.functions.relate = function (t, r) {
            return e.standardFunctionAsync(t, r, function (e, t, r) {
              if (((r = (0, o.H)(r)), (0, o.p)(r, 3, 3), u(r[0]) && u(r[1])))
                return (0, c.LV)(r[0], r[1], (0, o.d)(r[2]));
              if (r[0] instanceof l.Z && null === r[1]) return !1;
              if (r[1] instanceof l.Z && null === r[0]) return !1;
              if ((0, o.q)(r[0]) && null === r[1])
                return new a.Z({ parentfeatureset: r[0] });
              if ((0, o.q)(r[1]) && null === r[0])
                return new a.Z({ parentfeatureset: r[1] });
              if ((0, o.q)(r[0]) && r[1] instanceof l.Z)
                return r[0].relate(r[1], (0, o.d)(r[2]));
              if ((0, o.q)(r[1]) && r[0] instanceof l.Z)
                return r[1].relate(r[0], (0, o.d)(r[2]));
              if (null === r[0] && null === r[1]) return !1;
              throw new Error('Illegal Argument');
            });
          }));
      }
    },
    99880: (e, t, r) => {
      r.d(t, { V: () => l });
      var n = r(68773),
        o = (r(3172), r(20102)),
        s = r(92604),
        a = r(17452);
      const i = s.Z.getLogger('esri.assets');
      function l(e) {
        if (!n.Z.assetsPath)
          throw (
            (i.errorOnce(
              'The API assets location needs to be set using config.assetsPath. More information: https://arcg.is/1OzLe50',
            ),
            new o.Z('assets:path-not-set', 'config.assetsPath is not set'))
          );
        return (0, a.v_)(n.Z.assetsPath, e);
      }
    },
    78346: (e, t, r) => {
      r.d(t, { bA: () => N });
      var n = r(20102),
        o = r(80442),
        s = r(95330),
        a = r(80903),
        i = r(25045),
        l = r(40330),
        c = r(92604),
        u = r(94362),
        d = r(99880),
        h = r(68773),
        f = (r(2587), r(17452));
      const m = {};
      function p(e) {
        var t;
        const r = {
          async: e.async,
          isDebug: e.isDebug,
          locale: e.locale,
          baseUrl: e.baseUrl,
          has: { ...e.has },
          map: { ...e.map },
          packages: (e.packages && e.packages.concat()) || [],
          paths: { ...e.paths },
        };
        return (
          e.hasOwnProperty('async') || (r.async = !0),
          e.hasOwnProperty('isDebug') || (r.isDebug = !1),
          e.baseUrl || (r.baseUrl = m.baseUrl),
          null == (t = m.packages) ||
            t.forEach((e) => {
              !(function (e, t) {
                for (const r of e) if (r.name === t.name) return;
                e.push(t);
              })(r.packages, e);
            }),
          r
        );
      }
      var g = r(41213);
      class y {
        constructor() {
          const e = document.createDocumentFragment();
          ['addEventListener', 'dispatchEvent', 'removeEventListener'].forEach(
            (t) => {
              this[t] = (...r) => e[t](...r);
            },
          );
        }
      }
      class w {
        constructor() {
          (this._dispatcher = new y()),
            this._workerPostMessage({ type: u.Cs.HANDSHAKE });
        }
        terminate() {}
        get onmessage() {
          return this._onmessageHandler;
        }
        set onmessage(e) {
          this._onmessageHandler &&
            this.removeEventListener('message', this._onmessageHandler),
            (this._onmessageHandler = e),
            e && this.addEventListener('message', e);
        }
        get onmessageerror() {
          return this._onmessageerrorHandler;
        }
        set onmessageerror(e) {
          this._onmessageerrorHandler &&
            this.removeEventListener(
              'messageerror',
              this._onmessageerrorHandler,
            ),
            (this._onmessageerrorHandler = e),
            e && this.addEventListener('messageerror', e);
        }
        get onerror() {
          return this._onerrorHandler;
        }
        set onerror(e) {
          this._onerrorHandler &&
            this.removeEventListener('error', this._onerrorHandler),
            (this._onerrorHandler = e),
            e && this.addEventListener('error', e);
        }
        postMessage(e) {
          (0, g.Y)(() => {
            this._workerMessageHandler(
              new MessageEvent('message', { data: e }),
            );
          });
        }
        dispatchEvent(e) {
          return this._dispatcher.dispatchEvent(e);
        }
        addEventListener(e, t, r) {
          this._dispatcher.addEventListener(e, t, r);
        }
        removeEventListener(e, t, r) {
          this._dispatcher.removeEventListener(e, t, r);
        }
        _workerPostMessage(e) {
          (0, g.Y)(() => {
            this.dispatchEvent(new MessageEvent('message', { data: e }));
          });
        }
        async _workerMessageHandler(e) {
          const t = (0, u.QM)(e);
          if (t && t.type === u.Cs.OPEN) {
            const { modulePath: e, jobId: r } = t;
            let n = await i.default.loadWorker(e);
            n || (n = await import(e));
            const o = i.default.connect(n);
            this._workerPostMessage({ type: u.Cs.OPENED, jobId: r, data: o });
          }
        }
      }
      var b = r(70171),
        k = r(17202);
      const v = c.Z.getLogger('esri.core.workers'),
        { HANDSHAKE: S } = u.Cs;
      let E, _;
      const L =
        'Failed to create Worker. Fallback to execute module in main thread';
      async function T(e) {
        return new Promise((t) => {
          function r(o) {
            const s = (0, u.QM)(o);
            s &&
              s.type === S &&
              (e.removeEventListener('message', r),
              e.removeEventListener('error', n),
              t(e));
          }
          function n(t) {
            t.preventDefault(),
              e.removeEventListener('message', r),
              e.removeEventListener('error', n),
              v.warn(
                'Failed to create Worker. Fallback to execute module in main thread',
                t,
              ),
              (e = new w()).addEventListener('message', r),
              e.addEventListener('error', n);
          }
          e.addEventListener('message', r), e.addEventListener('error', n);
        });
      }
      let O = 0;
      const D = c.Z.getLogger('esri.core.workers'),
        { ABORT: M, INVOKE: q, OPEN: C, OPENED: Z, RESPONSE: P } = u.Cs;
      class R {
        constructor(e, t) {
          (this._outJobs = new Map()),
            (this._inJobs = new Map()),
            (this.worker = e),
            (this.id = t),
            e.addEventListener('message', this._onMessage.bind(this)),
            e.addEventListener('error', (e) => {
              e.preventDefault(), D.error(e);
            });
        }
        static async create(e) {
          const t = await (async function () {
            if (!(0, o.Z)('esri-workers') || ((0, o.Z)('mozilla'), 0))
              return T(new w());
            if (!E && !_)
              try {
                const e =
                  'let globalId=0;const outgoing=new Map,configuration=JSON.parse("{CONFIGURATION}");self.esriConfig=configuration.esriConfig;const workerPath=self.esriConfig.workers.workerPath,HANDSHAKE=0,OPEN=1,OPENED=2,RESPONSE=3,INVOKE=4,ABORT=5;function createAbortError(){const e=new Error("Aborted");return e.name="AbortError",e}function receiveMessage(e){return e&&e.data?"string"==typeof e.data?JSON.parse(e.data):e.data:null}function invokeStaticMessage(e,o,r){const t=r&&r.signal,n=globalId++;return new Promise(((r,i)=>{if(t){if(t.aborted)return i(createAbortError());t.addEventListener("abort",(()=>{outgoing.get(n)&&(outgoing.delete(n),self.postMessage({type:5,jobId:n}),i(createAbortError()))}))}outgoing.set(n,{resolve:r,reject:i}),self.postMessage({type:4,jobId:n,methodName:e,abortable:null!=t,data:o})}))}let workerRevisionChecked=!1;function checkWorkerRevision(e){if(!workerRevisionChecked&&e.kernelInfo){workerRevisionChecked=!0;const{revision:o,buildDate:r,version:t}=configuration.kernelInfo,{revision:n,buildDate:i,version:s}=e.kernelInfo;o!==n&&console.warn(`[esri.core.workers] Version mismatch detected between ArcGIS API for JavaScript and assets:\\nAPI version: ${t} [Date: ${r}, Revision: ${o.slice(0,8)}]\nAssets version: ${s} [Date: ${i}, Revision: ${n.slice(0,8)}]`)}}function messageHandler(e){const o=receiveMessage(e);if(!o)return;const r=o.jobId;switch(o.type){case 1:let e;function t(o){const t=e.connect(o);self.postMessage({type:2,jobId:r,data:t},[t])}"function"==typeof define&&define.amd?require([workerPath],(r=>{e=r.default||r,checkWorkerRevision(e),e.loadWorker(o.modulePath).then((e=>e||new Promise((e=>{require([o.modulePath],e)})))).then(t)})):"System"in self&&"function"==typeof System.import?System.import(workerPath).then((r=>(e=r.default,checkWorkerRevision(e),e.loadWorker(o.modulePath)))).then((e=>e||System.import(o.modulePath))).then(t):esriConfig.workers.useDynamicImport?import(workerPath).then((r=>{e=r.default||r,checkWorkerRevision(e),e.loadWorker(o.modulePath).then((e=>e||import(o.modulePath))).then(t)})):(self.RemoteClient||importScripts(workerPath),e=self.RemoteClient.default||self.RemoteClient,checkWorkerRevision(e),e.loadWorker(o.modulePath).then(t));break;case 3:if(outgoing.has(r)){const e=outgoing.get(r);outgoing.delete(r),o.error?e.reject(JSON.parse(o.error)):e.resolve(o.data)}}}self.dojoConfig=configuration.loaderConfig,esriConfig.workers.loaderUrl&&(self.importScripts(esriConfig.workers.loaderUrl),"function"==typeof require&&"function"==typeof require.config&&require.config(configuration.loaderConfig)),self.addEventListener("message",messageHandler),self.postMessage({type:0});'.replace(
                    '"{CONFIGURATION}"',
                    `'${(function () {
                      let e;
                      if (null != h.Z.default) {
                        const t = { ...h.Z };
                        delete t.default, (e = JSON.parse(JSON.stringify(t)));
                      } else e = JSON.parse(JSON.stringify(h.Z));
                      (e.assetsPath = (0, f.hF)(e.assetsPath)),
                        (e.request.interceptors = []),
                        (e.log.interceptors = []),
                        (e.locale = (0, b.Kd)()),
                        (e.has = {
                          'esri-csp-restrictions': (0, o.Z)(
                            'esri-csp-restrictions',
                          ),
                          'esri-2d-debug': !1,
                          'esri-2d-update-debug': (0, o.Z)(
                            'esri-2d-update-debug',
                          ),
                          'esri-2d-query-centroid-enabled': (0, o.Z)(
                            'esri-2d-query-centroid-enabled',
                          ),
                          'featurelayer-pbf': (0, o.Z)('featurelayer-pbf'),
                          'featurelayer-simplify-thresholds': (0, o.Z)(
                            'featurelayer-simplify-thresholds',
                          ),
                          'featurelayer-simplify-payload-size-factors': (0,
                          o.Z)('featurelayer-simplify-payload-size-factors'),
                          'featurelayer-simplify-mobile-factor': (0, o.Z)(
                            'featurelayer-simplify-mobile-factor',
                          ),
                          'esri-atomics': (0, o.Z)('esri-atomics'),
                          'esri-shared-array-buffer': (0, o.Z)(
                            'esri-shared-array-buffer',
                          ),
                          'esri-tiles-debug': (0, o.Z)('esri-tiles-debug'),
                          'esri-workers-arraybuffer-transfer': (0, o.Z)(
                            'esri-workers-arraybuffer-transfer',
                          ),
                          'feature-polyline-generalization-factor': (0, o.Z)(
                            'feature-polyline-generalization-factor',
                          ),
                          'host-webworker': 1,
                        }),
                        e.workers.loaderUrl &&
                          (e.workers.loaderUrl = (0, f.hF)(
                            e.workers.loaderUrl,
                          )),
                        e.workers.workerPath
                          ? (e.workers.workerPath = (0, f.hF)(
                              e.workers.workerPath,
                            ))
                          : (e.workers.workerPath = (0, f.hF)(
                              (0, d.V)('esri/core/workers/RemoteClient.js'),
                            )),
                        (e.workers.useDynamicImport = !1);
                      const t = h.Z.workers.loaderConfig,
                        r = p({
                          baseUrl: null == t ? void 0 : t.baseUrl,
                          locale: (0, b.Kd)(),
                          has: {
                            'csp-restrictions': 1,
                            'dojo-test-sniff': 0,
                            'host-webworker': 1,
                            ...(null == t ? void 0 : t.has),
                          },
                          map: { ...(null == t ? void 0 : t.map) },
                          paths: { ...(null == t ? void 0 : t.paths) },
                          packages: (null == t ? void 0 : t.packages) || [],
                        }),
                        n = { version: l.i8, buildDate: k.r, revision: k.$ };
                      return JSON.stringify({
                        esriConfig: e,
                        loaderConfig: r,
                        kernelInfo: n,
                      });
                    })()}'`,
                  );
                E = URL.createObjectURL(
                  new Blob([e], { type: 'text/javascript' }),
                );
              } catch (e) {
                _ = e || {};
              }
            let e;
            if (E)
              try {
                e = new Worker(E, { name: 'esri-worker-' + O++ });
              } catch (t) {
                v.warn(L, _), (e = new w());
              }
            else v.warn(L, _), (e = new w());
            return T(e);
          })();
          return new R(t, e);
        }
        terminate() {
          this.worker.terminate();
        }
        async open(e, t = {}) {
          const { signal: r } = t,
            n = (0, u.jt)();
          return new Promise((t, o) => {
            const a = {
              resolve: t,
              reject: o,
              abortHandle: (0, s.$F)(r, () => {
                this._outJobs.delete(n), this._post({ type: M, jobId: n });
              }),
            };
            this._outJobs.set(n, a),
              this._post({ type: C, jobId: n, modulePath: e });
          });
        }
        _onMessage(e) {
          const t = (0, u.QM)(e);
          if (t)
            switch (t.type) {
              case Z:
                this._onOpenedMessage(t);
                break;
              case P:
                this._onResponseMessage(t);
                break;
              case M:
                this._onAbortMessage(t);
                break;
              case q:
                this._onInvokeMessage(t);
            }
        }
        _onAbortMessage(e) {
          const t = this._inJobs,
            r = e.jobId,
            n = t.get(r);
          n && (n.controller && n.controller.abort(), t.delete(r));
        }
        _onInvokeMessage(e) {
          const { methodName: t, jobId: r, data: n, abortable: o } = e,
            a = o ? new AbortController() : null,
            i = this._inJobs,
            c = l.Nv[t];
          let d;
          try {
            if ('function' != typeof c)
              throw new TypeError(`${t} is not a function`);
            d = c.call(null, n, { signal: a ? a.signal : null });
          } catch (e) {
            return void this._post({ type: P, jobId: r, error: (0, u.AB)(e) });
          }
          (0, s.y8)(d)
            ? (i.set(r, { controller: a, promise: d }),
              d.then(
                (e) => {
                  i.has(r) &&
                    (i.delete(r), this._post({ type: P, jobId: r }, e));
                },
                (e) => {
                  i.has(r) &&
                    (i.delete(r),
                    e || (e = { message: 'Error encountered at method' + t }),
                    (0, s.D_)(e) ||
                      this._post({
                        type: P,
                        jobId: r,
                        error: (0, u.AB)(
                          e || { message: `Error encountered at method ${t}` },
                        ),
                      }));
                },
              ))
            : this._post({ type: P, jobId: r }, d);
        }
        _onOpenedMessage(e) {
          var t;
          const { jobId: r, data: n } = e,
            o = this._outJobs.get(r);
          o &&
            (this._outJobs.delete(r),
            null == (t = o.abortHandle) || t.remove(),
            o.resolve(n));
        }
        _onResponseMessage(e) {
          var t;
          const { jobId: r, error: o, data: s } = e,
            a = this._outJobs.get(r);
          a &&
            (this._outJobs.delete(r),
            null == (t = a.abortHandle) || t.remove(),
            o ? a.reject(n.Z.fromJSON(JSON.parse(o))) : a.resolve(s));
        }
        _post(e, t, r) {
          return (0, u.oi)(this.worker, e, t, r);
        }
      }
      let F = (0, o.Z)('esri-workers-debug')
        ? 1
        : (0, o.Z)('host-browser')
        ? navigator.hardwareConcurrency - 1
        : 0;
      F ||
        (F =
          ((0, o.Z)('safari') && (0, o.Z)('mac')) || (0, o.Z)('trident')
            ? 7
            : 2);
      let I = 0;
      const A = [];
      async function x(e, t) {
        const r = new a.Z();
        return await r.open(e, t), r;
      }
      async function N(e, t = {}) {
        if ('string' != typeof e)
          throw new n.Z('workers:undefined-module', 'modulePath is missing');
        let r = t.strategy || 'distributed';
        if (
          ((0, o.Z)('host-webworker') &&
            !(0, o.Z)('esri-workers') &&
            (r = 'local'),
          'local' === r)
        ) {
          let r = await i.default.loadWorker(e);
          r || (r = await import(e)), (0, s.k_)(t.signal);
          const n = t.client || r;
          return x([i.default.connect(r)], { ...t, client: n });
        }
        if (
          (await (async function () {
            if (U) return U;
            j = new AbortController();
            const e = [];
            for (let t = 0; t < F; t++) {
              const r = R.create(t).then((e) => ((A[t] = e), e));
              e.push(r);
            }
            return (U = Promise.all(e)), U;
          })(),
          (0, s.k_)(t.signal),
          'dedicated' === r)
        ) {
          const r = I++ % F;
          return x([await A[r].open(e, t)], t);
        }
        if (t.maxNumWorkers && t.maxNumWorkers > 0) {
          const r = Math.min(t.maxNumWorkers, F);
          if (r < F) {
            const n = new Array(r);
            for (let o = 0; o < r; ++o) {
              const r = I++ % F;
              n[o] = A[r].open(e, t);
            }
            return x(n, t);
          }
        }
        return x(
          A.map((r) => r.open(e, t)),
          t,
        );
      }
      let j,
        U = null;
    },
    2587: (e, t, r) => {
      r(90344), r(18848), r(940), r(70171);
      var n = r(94443),
        o = r(3172),
        s = r(20102),
        a = r(70586);
      async function i(e) {
        if ((0, a.pC)(l.fetchBundleAsset)) return l.fetchBundleAsset(e);
        const t = await (0, o.default)(e, { responseType: 'text' });
        return JSON.parse(t.data);
      }
      const l = {};
      var c,
        u = r(99880);
      (0, n.tz)(
        ((c = { pattern: 'esri/', location: u.V }),
        new (class {
          constructor({
            base: e = '',
            pattern: t,
            location: r = new URL(window.location.href),
          }) {
            let n;
            (n =
              'string' == typeof r
                ? (e) => new URL(e, new URL(r, window.location.href)).href
                : r instanceof URL
                ? (e) => new URL(e, r).href
                : r),
              (this.pattern = 'string' == typeof t ? new RegExp(`^${t}`) : t),
              (this.getAssetUrl = n),
              (e = e ? (e.endsWith('/') ? e : e + '/') : ''),
              (this.matcher = new RegExp(`^${e}(?:(.*)/)?(.*)$`));
          }
          fetchMessageBundle(e, t) {
            return (async function (e, t, r, o) {
              const a = t.exec(r);
              if (!a)
                throw new s.Z(
                  'esri-intl:invalid-bundle',
                  `Bundle id "${r}" is not compatible with the pattern "${t}"`,
                );
              const l = a[1] ? `${a[1]}/` : '',
                c = a[2],
                u = (0, n.Su)(o),
                d = `${l}${c}.json`,
                h = u ? `${l}${c}_${u}.json` : d;
              let f;
              try {
                f = await i(e(h));
              } catch (t) {
                if (h === d)
                  throw new s.Z(
                    'intl:unknown-bundle',
                    `Bundle "${r}" cannot be loaded`,
                    { error: t },
                  );
                try {
                  f = await i(e(d));
                } catch (e) {
                  throw new s.Z(
                    'intl:unknown-bundle',
                    `Bundle "${r}" cannot be loaded`,
                    { error: e },
                  );
                }
              }
              return f;
            })(this.getAssetUrl, this.matcher, e, t);
          }
        })(c)),
      );
    },
    90344: (e, t, r) => {
      r.d(t, { Ze: () => g, p6: () => y });
      var n = r(35454),
        o = r(70171);
      const s = { year: 'numeric', month: 'numeric', day: 'numeric' },
        a = { year: 'numeric', month: 'long', day: 'numeric' },
        i = { year: 'numeric', month: 'short', day: 'numeric' },
        l = { year: 'numeric', month: 'long', weekday: 'long', day: 'numeric' },
        c = { hour: 'numeric', minute: 'numeric' },
        u = { ...c, second: 'numeric' },
        d = {
          'short-date': s,
          'short-date-short-time': { ...s, ...c },
          'short-date-short-time-24': { ...s, ...c, hour12: !1 },
          'short-date-long-time': { ...s, ...u },
          'short-date-long-time-24': { ...s, ...u, hour12: !1 },
          'short-date-le': s,
          'short-date-le-short-time': { ...s, ...c },
          'short-date-le-short-time-24': { ...s, ...c, hour12: !1 },
          'short-date-le-long-time': { ...s, ...u },
          'short-date-le-long-time-24': { ...s, ...u, hour12: !1 },
          'long-month-day-year': a,
          'long-month-day-year-short-time': { ...a, ...c },
          'long-month-day-year-short-time-24': { ...a, ...c, hour12: !1 },
          'long-month-day-year-long-time': { ...a, ...u },
          'long-month-day-year-long-time-24': { ...a, ...u, hour12: !1 },
          'day-short-month-year': i,
          'day-short-month-year-short-time': { ...i, ...c },
          'day-short-month-year-short-time-24': { ...i, ...c, hour12: !1 },
          'day-short-month-year-long-time': { ...i, ...u },
          'day-short-month-year-long-time-24': { ...i, ...u, hour12: !1 },
          'long-date': l,
          'long-date-short-time': { ...l, ...c },
          'long-date-short-time-24': { ...l, ...c, hour12: !1 },
          'long-date-long-time': { ...l, ...u },
          'long-date-long-time-24': { ...l, ...u, hour12: !1 },
          'long-month-year': { month: 'long', year: 'numeric' },
          'short-month-year': { month: 'short', year: 'numeric' },
          year: { year: 'numeric' },
          'short-time': c,
          'long-time': u,
        },
        h = (0, n.w)()({
          shortDate: 'short-date',
          shortDateShortTime: 'short-date-short-time',
          shortDateShortTime24: 'short-date-short-time-24',
          shortDateLongTime: 'short-date-long-time',
          shortDateLongTime24: 'short-date-long-time-24',
          shortDateLE: 'short-date-le',
          shortDateLEShortTime: 'short-date-le-short-time',
          shortDateLEShortTime24: 'short-date-le-short-time-24',
          shortDateLELongTime: 'short-date-le-long-time',
          shortDateLELongTime24: 'short-date-le-long-time-24',
          longMonthDayYear: 'long-month-day-year',
          longMonthDayYearShortTime: 'long-month-day-year-short-time',
          longMonthDayYearShortTime24: 'long-month-day-year-short-time-24',
          longMonthDayYearLongTime: 'long-month-day-year-long-time',
          longMonthDayYearLongTime24: 'long-month-day-year-long-time-24',
          dayShortMonthYear: 'day-short-month-year',
          dayShortMonthYearShortTime: 'day-short-month-year-short-time',
          dayShortMonthYearShortTime24: 'day-short-month-year-short-time-24',
          dayShortMonthYearLongTime: 'day-short-month-year-long-time',
          dayShortMonthYearLongTime24: 'day-short-month-year-long-time-24',
          longDate: 'long-date',
          longDateShortTime: 'long-date-short-time',
          longDateShortTime24: 'long-date-short-time-24',
          longDateLongTime: 'long-date-long-time',
          longDateLongTime24: 'long-date-long-time-24',
          longMonthYear: 'long-month-year',
          shortMonthYear: 'short-month-year',
          year: 'year',
        }),
        f =
          (h.apiValues,
          h.toJSON.bind(h),
          h.fromJSON.bind(h),
          { ar: 'ar-u-nu-latn-ca-gregory' });
      let m = new WeakMap(),
        p = d['short-date-short-time'];
      function g(e) {
        return d[e] || null;
      }
      function y(e, t) {
        return (function (e) {
          const t = e || p;
          if (!m.has(t)) {
            const e = (0, o.Kd)(),
              r = f[(0, o.Kd)()] || e;
            m.set(t, new Intl.DateTimeFormat(r, t));
          }
          return m.get(t);
        })(t).format(e);
      }
      (0, o.Ze)(() => {
        (m = new WeakMap()), (p = d['short-date-short-time']);
      });
    },
    94443: (e, t, r) => {
      r.d(t, { ME: () => f, Su: () => m, tz: () => h });
      var n = r(20102),
        o = r(95330),
        s = r(70171);
      const a = /^([a-z]{2})(?:[-_]([A-Za-z]{2}))?$/,
        i = {
          ar: !0,
          bg: !0,
          bs: !0,
          ca: !0,
          cs: !0,
          da: !0,
          de: !0,
          el: !0,
          en: !0,
          es: !0,
          et: !0,
          fi: !0,
          fr: !0,
          he: !0,
          hr: !0,
          hu: !0,
          id: !0,
          it: !0,
          ja: !0,
          ko: !0,
          lt: !0,
          lv: !0,
          nb: !0,
          nl: !0,
          pl: !0,
          'pt-BR': !0,
          'pt-PT': !0,
          ro: !0,
          ru: !0,
          sk: !0,
          sl: !0,
          sr: !0,
          sv: !0,
          th: !0,
          tr: !0,
          uk: !0,
          vi: !0,
          'zh-CN': !0,
          'zh-HK': !0,
          'zh-TW': !0,
        };
      function l(e) {
        var t;
        return null != (t = i[e]) && t;
      }
      const c = [],
        u = new Map();
      function d(e) {
        for (const t of u.keys()) p(e.pattern, t) && u.delete(t);
      }
      function h(e) {
        return (
          c.includes(e) || (d(e), c.unshift(e)),
          {
            remove() {
              const t = c.indexOf(e);
              t > -1 && (c.splice(t, 1), d(e));
            },
          }
        );
      }
      async function f(e) {
        const t = (0, s.Kd)();
        u.has(e) ||
          u.set(
            e,
            (async function (e, t) {
              const r = [];
              for (const n of c)
                if (p(n.pattern, e))
                  try {
                    return await n.fetchMessageBundle(e, t);
                  } catch (e) {
                    r.push(e);
                  }
              if (r.length)
                throw new n.Z(
                  'intl:message-bundle-error',
                  `Errors occurred while loading "${e}"`,
                  { errors: r },
                );
              throw new n.Z(
                'intl:no-message-bundle-loader',
                `No loader found for message bundle "${e}"`,
              );
            })(e, t),
          );
        const r = u.get(e);
        return await g.add(r), r;
      }
      function m(e) {
        if (!a.test(e)) return null;
        const [, t, r] = a.exec(e),
          n = t + (r ? '-' + r.toUpperCase() : '');
        return l(n) ? n : l(t) ? t : null;
      }
      function p(e, t) {
        return 'string' == typeof e ? t.startsWith(e) : e.test(t);
      }
      (0, s.Ze)(() => {
        u.clear();
      });
      const g = new (class {
        constructor() {
          this._numLoading = 0;
        }
        async waitForAll() {
          this._dfd && (await this._dfd.promise);
        }
        add(e) {
          return (
            this._increase(),
            e.then(
              () => this._decrease(),
              () => this._decrease(),
            ),
            this.waitForAll()
          );
        }
        _increase() {
          this._numLoading++, this._dfd || (this._dfd = (0, o.dD)());
        }
        _decrease() {
          (this._numLoading = Math.max(this._numLoading - 1, 0)),
            this._dfd &&
              0 === this._numLoading &&
              (this._dfd.resolve(), (this._dfd = null));
        }
      })();
    },
    18848: (e, t, r) => {
      r.d(t, { sh: () => l, uf: () => c });
      var n = r(70586),
        o = r(70171);
      const s = { ar: 'ar-u-nu-latn' };
      let a = new WeakMap(),
        i = {};
      function l(e = {}) {
        const t = {};
        return (
          null != e.digitSeparator && (t.useGrouping = e.digitSeparator),
          null != e.places &&
            (t.minimumFractionDigits = t.maximumFractionDigits = e.places),
          t
        );
      }
      function c(e, t) {
        return (function (e) {
          const t = e || i;
          if (!a.has(t)) {
            const r = (0, o.Kd)(),
              n = s[(0, o.Kd)()] || r;
            a.set(t, new Intl.NumberFormat(n, e));
          }
          return (0, n.j0)(a.get(t));
        })(t).format(e);
      }
      (0, o.Ze)(() => {
        (a = new WeakMap()), (i = {});
      });
    },
    940: (e, t, r) => {
      r.d(t, { n: () => c });
      var n = r(92604),
        o = r(78286),
        s = r(19153),
        a = r(90344),
        i = r(18848);
      const l = n.Z.getLogger('esri.intl');
      function c(e, t, r = {}) {
        const { format: n = {} } = r;
        return (0, s.gx)(e, (e) =>
          (function (e, t, r) {
            let n, s;
            const a = e.indexOf(':');
            if (
              (-1 === a
                ? (n = e.trim())
                : ((n = e.slice(0, a).trim()), (s = e.slice(a + 1).trim())),
              !n)
            )
              return '';
            const i = (0, o.hS)(n, t);
            if (null == i) return '';
            const l = r[s] || r[n];
            return l ? u(i, l) : s ? d(i, s) : h(i);
          })(e, t, n),
        );
      }
      function u(e, t) {
        switch (t.type) {
          case 'date':
            return (0, a.p6)(e, t.intlOptions);
          case 'number':
            return (0, i.uf)(e, t.intlOptions);
          default:
            return l.warn('missing format descriptor for key {key}'), h(e);
        }
      }
      function d(e, t) {
        switch (t.toLowerCase()) {
          case 'dateformat':
            return (0, a.p6)(e);
          case 'numberformat':
            return (0, i.uf)(e);
          default:
            return (
              l.warn(`inline format is unsupported since 4.12: ${t}`),
              /^(dateformat|datestring)/i.test(t)
                ? (0, a.p6)(e)
                : /^numberformat/i.test(t)
                ? (0, i.uf)(e)
                : h(e)
            );
        }
      }
      function h(e) {
        switch (typeof e) {
          case 'string':
            return e;
          case 'number':
            return (0, i.uf)(e);
          case 'boolean':
            return '' + e;
          default:
            return e instanceof Date ? (0, a.p6)(e) : '';
        }
      }
    },
    99514: (e, t, r) => {
      r.d(t, { Z: () => a });
      var n = r(35671);
      function o(e) {
        return 'oid' === e.type || 'esriFieldTypeOID' === e.type;
      }
      function s(e) {
        return 'global-id' === e.type || 'esriFieldTypeGlobalID' === e.type;
      }
      class a {
        constructor(e) {
          if (
            ((this.fields = e),
            (this._fieldsMap = new Map()),
            (this._dateFieldsSet = new Set()),
            (this._numericFieldsSet = new Set()),
            (this.dateFields = []),
            (this.numericFields = []),
            (this._requiredFields = null),
            !e)
          )
            return;
          const t = [];
          for (const a of e) {
            const e = a && a.name;
            if (e) {
              const l = i(e);
              this._fieldsMap.set(e, a),
                this._fieldsMap.set(l, a),
                t.push(l),
                'date' === (r = a).type || 'esriFieldTypeDate' === r.type
                  ? (this.dateFields.push(a), this._dateFieldsSet.add(a))
                  : (0, n.H7)(a) &&
                    (this._numericFieldsSet.add(a), this.numericFields.push(a)),
                o(a) ||
                  s(a) ||
                  ((a.editable = null == a.editable || !!a.editable),
                  (a.nullable = null == a.nullable || !!a.nullable));
            }
          }
          var r;
          t.sort(), (this.uid = t.join(','));
        }
        destroy() {
          this._fieldsMap.clear();
        }
        get requiredFields() {
          if (!this._requiredFields) {
            this._requiredFields = [];
            for (const e of this.fields)
              o(e) ||
                s(e) ||
                e.nullable ||
                void 0 !== (0, n.os)(e) ||
                this._requiredFields.push(e);
          }
          return this._requiredFields;
        }
        has(e) {
          return null != this.get(e);
        }
        get(e) {
          return null != e
            ? this._fieldsMap.get(e) || this._fieldsMap.get(i(e))
            : void 0;
        }
        isDateField(e) {
          return this._dateFieldsSet.has(this.get(e));
        }
        isNumericField(e) {
          return this._numericFieldsSet.has(this.get(e));
        }
        normalizeFieldName(e) {
          const t = this.get(e);
          if (t) return t.name;
        }
      }
      function i(e) {
        return e.toLowerCase().trim();
      }
    },
    3172: (e, t, r) => {
      r.r(t), r.d(t, { default: () => f });
      var n = r(68773),
        o = r(40330),
        s = r(20102),
        a = r(80442),
        i = r(22974),
        l = r(70586),
        c = r(95330),
        u = r(17452),
        d = r(71058),
        h = r(85958);
      async function f(e, t) {
        var i;
        const h = (0, u.HK)(e),
          y = (0, u.jc)(e);
        y || h || (e = (0, u.Fv)(e));
        const w = { url: e, requestOptions: { ...(0, l.Wg)(t) } };
        let b = (0, u.oh)(e);
        if (b) {
          const e = await (async function (e, t) {
            if (null != e.responseData) return e.responseData;
            if (
              (e.headers &&
                (t.requestOptions.headers = {
                  ...t.requestOptions.headers,
                  ...e.headers,
                }),
              e.query &&
                (t.requestOptions.query = {
                  ...t.requestOptions.query,
                  ...e.query,
                }),
              e.before)
            ) {
              let r, n;
              try {
                n = await e.before(t);
              } catch (e) {
                r = E('request:interceptor', e, t);
              }
              if (
                ((n instanceof Error || n instanceof s.Z) &&
                  (r = E('request:interceptor', n, t)),
                r)
              )
                throw (e.error && e.error(r), r);
              return n;
            }
          })(b, w);
          if (null != e)
            return {
              data: e,
              getHeader: k,
              requestOptions: w.requestOptions,
              url: w.url,
            };
          b.after || b.error || (b = null);
        }
        if (((e = w.url), 'image' === (t = w.requestOptions).responseType)) {
          if ((0, a.Z)('host-webworker') || (0, a.Z)('host-node'))
            throw E(
              'request:invalid-parameters',
              new Error(
                "responseType 'image' is not supported in Web Workers or Node environment",
              ),
              w,
            );
        } else if (h)
          throw E(
            'request:invalid-parameters',
            new Error(
              'Data URLs are not supported for responseType = ' +
                t.responseType,
            ),
            w,
          );
        if ('head' === t.method) {
          if (t.body)
            throw E(
              'request:invalid-parameters',
              new Error("body parameter cannot be set when method is 'head'"),
              w,
            );
          if (h || y)
            throw E(
              'request:invalid-parameters',
              new Error(
                "data and blob URLs are not supported for method 'head'",
              ),
              w,
            );
        }
        if (
          (await (async function () {
            (0, a.Z)('host-webworker')
              ? m || (m = await r.e(9884).then(r.bind(r, 29884)))
              : f._abortableFetch ||
                (f._abortableFetch = globalThis.fetch.bind(globalThis));
          })(),
          m)
        )
          return m.execute(e, t);
        const v = new AbortController();
        (0, c.fu)(t, () => v.abort());
        const S = {
            controller: v,
            credential: null,
            credentialToken: null,
            fetchOptions: null,
            hasToken: !1,
            interceptor: b,
            params: w,
            redoRequest: !1,
            useIdentity: p.useIdentity,
            useProxy: !1,
            useSSL: !1,
            withCredentials: !1,
          },
          O = await (async function (e) {
            var t, r;
            let s, a;
            await (async function (e) {
              const t = e.params.url,
                r = e.params.requestOptions,
                s = e.controller.signal,
                a = r.body;
              let i = null,
                l = null,
                u = null;
              if (
                (g &&
                  'HTMLFormElement' in globalThis &&
                  (a instanceof FormData
                    ? (i = a)
                    : a instanceof HTMLFormElement &&
                      ((l = a), (i = new FormData(l)))),
                'string' == typeof a && (u = a),
                (e.fetchOptions = {
                  cache:
                    r.cacheBust && !f._abortableFetch.polyfill
                      ? 'no-cache'
                      : 'default',
                  credentials: 'same-origin',
                  headers: r.headers || {},
                  method: 'head' === r.method ? 'HEAD' : 'GET',
                  mode: 'cors',
                  redirect: 'follow',
                  signal: s,
                }),
                (i || u) && (e.fetchOptions.body = i || u),
                'anonymous' === r.authMode && (e.useIdentity = !1),
                (e.hasToken = !!(
                  /token=/i.test(t) ||
                  (r.query && r.query.token) ||
                  (i && i.get && i.get('token')) ||
                  (l && l.elements.token)
                )),
                !e.hasToken &&
                  n.Z.apiKey &&
                  (0, d.r)(t) &&
                  (r.query || (r.query = {}),
                  (r.query.token = n.Z.apiKey),
                  (e.hasToken = !0)),
                e.useIdentity &&
                  !e.hasToken &&
                  !e.credentialToken &&
                  !L(t) &&
                  !(0, c.Hc)(s))
              ) {
                let n;
                'immediate' === r.authMode
                  ? (await _(),
                    (n = await o.id.getCredential(t, { signal: s })),
                    (e.credential = n))
                  : 'no-prompt' === r.authMode
                  ? (await _(),
                    (n = await o.id
                      .getCredential(t, { prompt: !1, signal: s })
                      .catch(() => {})),
                    (e.credential = n))
                  : o.id && (n = o.id.findCredential(t)),
                  n && ((e.credentialToken = n.token), (e.useSSL = !!n.ssl));
              }
            })(e);
            try {
              do {
                [s, a] = await T(e);
              } while (!(await D(e, s, a)));
            } catch (t) {
              const r = E('request:server', t, e.params, s);
              throw (
                ((r.details.ssl = e.useSSL),
                e.interceptor && e.interceptor.error && e.interceptor.error(r),
                r)
              );
            }
            const i = e.params.url;
            if (
              /\/sharing\/rest\/(accounts|portals)\/self/i.test(i) &&
              !e.hasToken &&
              !e.credentialToken &&
              null != (t = a) &&
              null != (r = t.user) &&
              r.username &&
              !(0, u.kl)(i)
            ) {
              const e = (0, u.P$)(i, !0);
              e && p.trustedServers.push(e);
            }
            const l = e.credential;
            if (l && o.id) {
              const e = o.id.findServerInfo(l.server);
              let t = e && e.owningSystemUrl;
              if (t) {
                t = t.replace(/\/?$/, '/sharing');
                const e = o.id.findCredential(t, l.userId);
                e &&
                  -1 === o.id._getIdenticalSvcIdx(t, e) &&
                  e.resources.unshift(t);
              }
            }
            return {
              data: a,
              getHeader: s ? (e) => s.headers.get(e) : k,
              requestOptions: e.params.requestOptions,
              ssl: e.useSSL,
              url: e.params.url,
            };
          })(S);
        return null == (i = b) || null == i.after || i.after(O), O;
      }
      let m;
      const p = n.Z.request,
        g = 'FormData' in globalThis,
        y = [499, 498, 403, 401],
        w = ['COM_0056', 'COM_0057', 'SB_0008'],
        b = [
          /\/arcgis\/tokens/i,
          /\/sharing(\/rest)?\/generatetoken/i,
          /\/rest\/info/i,
        ],
        k = () => null,
        v = Symbol();
      function S(e) {
        const t = (0, u.P$)(e);
        return (
          !t ||
          t.endsWith('.arcgis.com') ||
          f._corsServers.includes(t) ||
          (0, u.kl)(t)
        );
      }
      function E(e, t, r, n) {
        let o = 'Error';
        const a = {
          url: r.url,
          requestOptions: r.requestOptions,
          getHeader: k,
          ssl: !1,
        };
        if (t instanceof s.Z)
          return (
            t.details
              ? ((t.details = (0, i.d9)(t.details)),
                (t.details.url = r.url),
                (t.details.requestOptions = r.requestOptions))
              : (t.details = a),
            t
          );
        if (t) {
          const e = n && ((e) => n.headers.get(e)),
            r = n && n.status,
            s = t.message;
          s && (o = s),
            e && (a.getHeader = e),
            (a.httpStatus =
              (null != t.httpCode ? t.httpCode : t.code) || r || 0),
            (a.subCode = t.subcode),
            (a.messageCode = t.messageCode),
            'string' == typeof t.details
              ? (a.messages = [t.details])
              : (a.messages = t.details),
            (a.raw = v in t ? t[v] : t);
        }
        return (0, c.D_)(t) ? (0, c.zE)() : new s.Z(e, o, a);
      }
      async function _() {
        o.id ||
          (await Promise.all([r.e(280), r.e(1400), r.e(7913)]).then(
            r.bind(r, 33107),
          ));
      }
      function L(e) {
        return b.some((t) => t.test(e));
      }
      async function T(e) {
        let t = e.params.url;
        const r = e.params.requestOptions,
          n = e.fetchOptions,
          s = (0, u.jc)(t) || (0, u.HK)(t),
          i = r.responseType || 'json',
          l = s ? 0 : null != r.timeout ? r.timeout : p.timeout;
        let d = !1;
        if (!s) {
          e.useSSL && (t = (0, u.hO)(t)),
            r.cacheBust &&
              'default' === n.cache &&
              (t = (0, u.ZN)(t, 'request.preventCache', Date.now()));
          let s = { ...r.query };
          e.credentialToken && (s.token = e.credentialToken);
          let i = (0, u.B7)(s);
          (0, a.Z)('esri-url-encodes-apostrophe') &&
            (i = i.replace(/'/g, '%27'));
          const l = t.length + 1 + i.length;
          let c;
          d =
            'delete' === r.method ||
            'post' === r.method ||
            'put' === r.method ||
            !!r.body ||
            l > p.maxUrlLength;
          const h = r.useProxy || !!(0, u.ed)(t);
          if (h) {
            const e = (0, u.b7)(t);
            (c = e.path),
              !d && c.length + 1 + l > p.maxUrlLength && (d = !0),
              e.query && (s = { ...e.query, ...s });
          }
          if ('HEAD' === n.method && (d || h)) {
            if (d) {
              if (l > p.maxUrlLength)
                throw E(
                  'request:invalid-parameters',
                  new Error('URL exceeds maximum length'),
                  e.params,
                );
              throw E(
                'request:invalid-parameters',
                new Error("cannot use POST request when method is 'head'"),
                e.params,
              );
            }
            if (h)
              throw E(
                'request:invalid-parameters',
                new Error("cannot use proxy when method is 'head'"),
                e.params,
              );
          }
          if (
            (d
              ? ((n.method =
                  'delete' === r.method
                    ? 'DELETE'
                    : 'put' === r.method
                    ? 'PUT'
                    : 'POST'),
                r.body
                  ? (t = (0, u.fl)(t, s))
                  : ((n.body = (0, u.B7)(s)),
                    (n.headers['Content-Type'] =
                      'application/x-www-form-urlencoded')))
              : (t = (0, u.fl)(t, s)),
            h && ((e.useProxy = !0), (t = `${c}?${t}`)),
            s.token && g && n.body instanceof FormData)
          ) {
            const e = n.body;
            e.set ? e.set('token', s.token) : e.append('token', s.token);
          }
          if (r.hasOwnProperty('withCredentials'))
            e.withCredentials = r.withCredentials;
          else if (!(0, u.D6)(t, (0, u.TI)()))
            if ((0, u.kl)(t)) e.withCredentials = !0;
            else if (o.id) {
              const r = o.id.findServerInfo(t);
              r && r.webTierAuth && (e.withCredentials = !0);
            }
          e.withCredentials && (n.credentials = 'include');
        }
        let h,
          m,
          y = 0,
          w = !1;
        l > 0 &&
          (y = setTimeout(() => {
            (w = !0), e.controller.abort();
          }, l));
        try {
          if ('native-request-init' === r.responseType) (m = n), (m.url = t);
          else if (
            'image' !== r.responseType ||
            'default' !== n.cache ||
            'GET' !== n.method ||
            d ||
            (function (e) {
              if (e)
                for (const t of Object.getOwnPropertyNames(e))
                  if (e[t]) return !0;
              return !1;
            })(r.headers) ||
            (!s && !e.useProxy && p.proxyUrl && !S(t))
          ) {
            if (
              ((h = await f._abortableFetch(t, n)),
              e.useProxy ||
                (function (e) {
                  const t = (0, u.P$)(e);
                  t && !f._corsServers.includes(t) && f._corsServers.push(t);
                })(t),
              'native' === r.responseType)
            )
              m = h;
            else if ('HEAD' !== n.method)
              if (h.ok) {
                switch (i) {
                  case 'array-buffer':
                    m = await h.arrayBuffer();
                    break;
                  case 'blob':
                  case 'image':
                    m = await h.blob();
                    break;
                  default:
                    m = await h.text();
                }
                if (
                  (y && (clearTimeout(y), (y = 0)),
                  'json' === i || 'xml' === i || 'document' === i)
                )
                  if (m)
                    switch (i) {
                      case 'json':
                        m = JSON.parse(m);
                        break;
                      case 'xml':
                        m = O(m, 'application/xml');
                        break;
                      case 'document':
                        m = O(m, 'text/html');
                    }
                  else m = null;
                if (m) {
                  if ('array-buffer' === i || 'blob' === i) {
                    const e = h.headers.get('Content-Type');
                    if (
                      /application\/json|text\/plain/i.test(e) &&
                      m['blob' === i ? 'size' : 'byteLength'] <= 750
                    )
                      try {
                        const e = await new Response(m).json();
                        e.error && (m = e);
                      } catch {}
                  }
                  'image' === i &&
                    m instanceof Blob &&
                    (m = await M(URL.createObjectURL(m), e, !0));
                }
              } else m = await h.text();
          } else m = await M(t, e);
        } catch (n) {
          if ('AbortError' === n.name) {
            if (w) throw new Error('Timeout exceeded');
            throw (0, c.zE)('Request canceled');
          }
          if (
            !(!h && n instanceof TypeError && p.proxyUrl) ||
            r.body ||
            'delete' === r.method ||
            'head' === r.method ||
            'post' === r.method ||
            'put' === r.method ||
            e.useProxy ||
            S(t)
          )
            throw n;
          (e.redoRequest = !0),
            (0, u.tD)({ proxyUrl: p.proxyUrl, urlPrefix: (0, u.P$)(t) });
        } finally {
          y && clearTimeout(y);
        }
        return [h, m];
      }
      function O(e, t) {
        let r;
        try {
          r = new DOMParser().parseFromString(e, t);
        } catch {}
        if (!r || r.getElementsByTagName('parsererror').length)
          throw new SyntaxError('XML Parse error');
        return r;
      }
      async function D(e, t, r) {
        if (e.redoRequest) return (e.redoRequest = !1), !1;
        const n = e.params.requestOptions;
        if (
          !t ||
          'native' === n.responseType ||
          'native-request-init' === n.responseType
        )
          return !0;
        let s, a, i, l;
        if (!t.ok)
          throw (
            ((s = new Error(`Unable to load ${t.url} status: ${t.status}`)),
            (s[v] = r),
            s)
          );
        null != r && r.error && (s = r.error),
          s &&
            ((a = Number(s.code)),
            (i = s.hasOwnProperty('subcode') ? Number(s.subcode) : null),
            (l = s.messageCode),
            (l = l && l.toUpperCase()));
        const c = n.authMode;
        if (
          403 === a &&
          (4 === i ||
            (s.message &&
              s.message.toLowerCase().indexOf('ssl') > -1 &&
              -1 === s.message.toLowerCase().indexOf('permission')))
        ) {
          if (!e.useSSL) return (e.useSSL = !0), !1;
        } else if (
          !e.hasToken &&
          e.useIdentity &&
          ('no-prompt' !== c || 498 === a) &&
          -1 !== y.indexOf(a) &&
          !L(e.params.url) &&
          (403 !== a ||
            (-1 === w.indexOf(l) &&
              (null == i || (2 === i && e.credentialToken))))
        ) {
          await _();
          try {
            const t = await o.id.getCredential(e.params.url, {
              error: E('request:server', s, e.params),
              prompt: 'no-prompt' !== c,
              signal: e.controller.signal,
              token: e.credentialToken,
            });
            return (
              (e.credential = t),
              (e.credentialToken = t.token),
              (e.useSSL = e.useSSL || t.ssl),
              !1
            );
          } catch (t) {
            if ('no-prompt' === c)
              return (e.credential = null), (e.credentialToken = null), !1;
            s = t;
          }
        }
        if (s) throw s;
        return !0;
      }
      function M(e, t, r = !1) {
        const n = t.controller.signal,
          o = new Image();
        return (
          t.withCredentials
            ? (o.crossOrigin = 'use-credentials')
            : (o.crossOrigin = 'anonymous'),
          (o.alt = ''),
          (o.src = e),
          (0, h.f)(o, e, r, n)
        );
      }
      (f._abortableFetch = null),
        (f._corsServers = [
          'https://server.arcgisonline.com',
          'https://services.arcgisonline.com',
        ]);
    },
    71058: (e, t, r) => {
      r.d(t, { r: () => s });
      var n = r(17452);
      const o = [
        'elevation3d.arcgis.com',
        'js.arcgis.com',
        'jsdev.arcgis.com',
        'jsqa.arcgis.com',
        'static.arcgis.com',
      ];
      function s(e) {
        const t = (0, n.P$)(e, !0);
        return (
          t &&
          t.endsWith('.arcgis.com') &&
          !o.includes(t) &&
          !e.endsWith('/sharing/rest/generateToken')
        );
      }
    },
    85958: (e, t, r) => {
      r.d(t, { f: () => a });
      var n = r(80442),
        o = r(70586),
        s = r(95330);
      function a(e, t, r = !1, a) {
        return new Promise((l, c) => {
          if ((0, s.Hc)(a)) return void c(i());
          let u = () => {
              f(), c(new Error(`Unable to load ${t}`));
            },
            d = () => {
              const t = e;
              f(), l(t);
            },
            h = () => {
              if (!e) return;
              const t = e;
              f(), (t.src = ''), c(i());
            };
          const f = () => {
            (0, n.Z)('esri-image-decode') ||
              (e.removeEventListener('error', u),
              e.removeEventListener('load', d)),
              (u = null),
              (d = null),
              (e = null),
              (0, o.pC)(a) && a.removeEventListener('abort', h),
              (h = null),
              r && URL.revokeObjectURL(t);
          };
          (0, o.pC)(a) && a.addEventListener('abort', h),
            (0, n.Z)('esri-image-decode')
              ? e.decode().then(d, u)
              : (e.addEventListener('error', u), e.addEventListener('load', d));
        });
      }
      function i() {
        try {
          return new DOMException('Aborted', 'AbortError');
        } catch {
          const e = new Error();
          return (e.name = 'AbortError'), e;
        }
      }
    },
  },
]);
