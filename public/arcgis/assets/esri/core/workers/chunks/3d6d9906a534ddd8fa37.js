'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [9932],
  {
    10699: (e, t, r) => {
      r.d(t, { I: () => s });
      var o = r(43697),
        i = r(52011);
      let n = 0;
      const s = (e) => {
        let t = class extends e {
          constructor(...e) {
            super(...e),
              Object.defineProperty(this, 'uid', {
                writable: !1,
                configurable: !1,
                value: Date.now().toString(16) + '-object-' + n++,
              });
          }
        };
        return (t = (0, o._)([(0, i.j)('esri.core.Identifiable')], t)), t;
      };
      let a = class extends s(class {}) {};
      a = (0, o._)([(0, i.j)('esri.core.Identifiable')], a);
    },
    16453: (e, t, r) => {
      r.d(t, { R: () => w, w: () => b });
      var o = r(43697),
        i = r(15923),
        n = r(70586),
        s = r(41103),
        a = r(22974),
        l = r(31263);
      class c {
        constructor() {
          (this._propertyOriginMap = new Map()),
            (this._originStores = new Array(l.kk)),
            (this._values = new Map()),
            (this.multipleOriginsSupported = !0);
        }
        clone(e) {
          const t = new c(),
            r = this._originStores[l.s3.DEFAULTS];
          r &&
            r.forEach((e, r) => {
              t.set(r, (0, a.d9)(e), l.s3.DEFAULTS);
            });
          for (let r = l.s3.SERVICE; r < l.kk; r++) {
            const o = this._originStores[r];
            o &&
              o.forEach((o, i) => {
                (e && e.has(i)) || t.set(i, (0, a.d9)(o), r);
              });
          }
          return t;
        }
        get(e, t) {
          const r = void 0 === t ? this._values : this._originStores[t];
          return r ? r.get(e) : void 0;
        }
        keys(e) {
          const t = null == e ? this._values : this._originStores[e];
          return t ? [...t.keys()] : [];
        }
        set(e, t, r = l.s3.USER) {
          let o = this._originStores[r];
          if (
            (o || ((o = new Map()), (this._originStores[r] = o)),
            o.set(e, t),
            !this._values.has(e) ||
              (0, n.j0)(this._propertyOriginMap.get(e)) <= r)
          ) {
            const o = this._values.get(e);
            return (
              this._values.set(e, t), this._propertyOriginMap.set(e, r), o !== t
            );
          }
          return !1;
        }
        delete(e, t = l.s3.USER) {
          const r = this._originStores[t];
          if (!r) return;
          const o = r.get(e);
          if (
            (r.delete(e),
            this._values.has(e) && this._propertyOriginMap.get(e) === t)
          ) {
            this._values.delete(e);
            for (let r = t - 1; r >= 0; r--) {
              const t = this._originStores[r];
              if (t && t.has(e)) {
                this._values.set(e, t.get(e)),
                  this._propertyOriginMap.set(e, r);
                break;
              }
            }
          }
          return o;
        }
        has(e, t) {
          const r = void 0 === t ? this._values : this._originStores[t];
          return !!r && r.has(e);
        }
        revert(e, t) {
          for (; t > 0 && !this.has(e, t); ) --t;
          const r = this._originStores[t],
            o = r && r.get(e),
            i = this._values.get(e);
          return (
            this._values.set(e, o), this._propertyOriginMap.set(e, t), i !== o
          );
        }
        originOf(e) {
          return this._propertyOriginMap.get(e) || l.s3.DEFAULTS;
        }
        forEach(e) {
          this._values.forEach(e);
        }
      }
      var d = r(50549),
        h = r(1153),
        u = r(52011);
      const p = (e) => {
        let t = class extends e {
          constructor(...e) {
            super(...e);
            const t = (0, n.j0)((0, h.vw)(this)),
              r = t.store,
              o = new c();
            (t.store = o), (0, s.M)(t, r, o);
          }
          read(e, t) {
            (0, d.i)(this, e, t);
          }
          getAtOrigin(e, t) {
            const r = y(this),
              o = (0, l.M9)(t);
            if ('string' == typeof e) return r.get(e, o);
            const i = {};
            return (
              e.forEach((e) => {
                i[e] = r.get(e, o);
              }),
              i
            );
          }
          originOf(e) {
            return (0, l.x3)(this.originIdOf(e));
          }
          originIdOf(e) {
            return y(this).originOf(e);
          }
          revert(e, t) {
            const r = y(this),
              o = (0, l.M9)(t),
              i = (0, h.vw)(this);
            let n;
            (n = 'string' == typeof e ? ('*' === e ? r.keys(o) : [e]) : e),
              n.forEach((e) => {
                i.invalidate(e), r.revert(e, o), i.commit(e);
              });
          }
        };
        return (
          (t = (0, o._)(
            [(0, u.j)('esri.core.ReadOnlyMultiOriginJSONSupport')],
            t,
          )),
          t
        );
      };
      function y(e) {
        return (0, h.vw)(e).store;
      }
      let g = class extends p(i.Z) {};
      g = (0, o._)([(0, u.j)('esri.core.ReadOnlyMultiOriginJSONSupport')], g);
      var m = r(76169);
      const f = (e) => {
        let t = class extends e {
          constructor(...e) {
            super(...e);
          }
          clear(e, t = 'user') {
            return v(this).delete(e, (0, l.M9)(t));
          }
          write(e = {}, t) {
            return (0, m.c)(this, (e = e || {}), t), e;
          }
          setAtOrigin(e, t, r) {
            (0, h.vw)(this).setAtOrigin(e, t, (0, l.M9)(r));
          }
          removeOrigin(e) {
            const t = v(this),
              r = (0, l.M9)(e),
              o = t.keys(r);
            for (const e of o)
              t.originOf(e) === r && t.set(e, t.get(e, r), l.s3.USER);
          }
          updateOrigin(e, t) {
            const r = v(this),
              o = (0, l.M9)(t),
              i = this.get(e);
            for (let t = o + 1; t < l.kk; ++t) r.delete(e, t);
            r.set(e, i, o);
          }
          toJSON(e) {
            return this.write({}, e);
          }
        };
        return (
          (t = (0, o._)(
            [(0, u.j)('esri.core.WriteableMultiOriginJSONSupport')],
            t,
          )),
          (t.prototype.toJSON.isDefaultToJSON = !0),
          t
        );
      };
      function v(e) {
        return (0, h.vw)(e).store;
      }
      const w = (e) => {
        let t = class extends f(p(e)) {
          constructor(...e) {
            super(...e);
          }
        };
        return (
          (t = (0, o._)([(0, u.j)('esri.core.MultiOriginJSONSupport')], t)), t
        );
      };
      let b = class extends w(i.Z) {};
      b = (0, o._)([(0, u.j)('esri.core.MultiOriginJSONSupport')], b);
    },
    78346: (e, t, r) => {
      r.d(t, { bA: () => P });
      var o = r(20102),
        i = r(80442),
        n = r(95330),
        s = r(80903),
        a = r(25045),
        l = r(40330),
        c = r(92604),
        d = r(94362),
        h = r(99880),
        u = r(68773),
        p = (r(2587), r(17452));
      const y = {};
      function g(e) {
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
          e.baseUrl || (r.baseUrl = y.baseUrl),
          null == (t = y.packages) ||
            t.forEach((e) => {
              !(function (e, t) {
                for (const r of e) if (r.name === t.name) return;
                e.push(t);
              })(r.packages, e);
            }),
          r
        );
      }
      var m = r(41213);
      class f {
        constructor() {
          const e = document.createDocumentFragment();
          ['addEventListener', 'dispatchEvent', 'removeEventListener'].forEach(
            (t) => {
              this[t] = (...r) => e[t](...r);
            },
          );
        }
      }
      class v {
        constructor() {
          (this._dispatcher = new f()),
            this._workerPostMessage({ type: d.Cs.HANDSHAKE });
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
          (0, m.Y)(() => {
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
          (0, m.Y)(() => {
            this.dispatchEvent(new MessageEvent('message', { data: e }));
          });
        }
        async _workerMessageHandler(e) {
          const t = (0, d.QM)(e);
          if (t && t.type === d.Cs.OPEN) {
            const { modulePath: e, jobId: r } = t;
            let o = await a.default.loadWorker(e);
            o || (o = await import(e));
            const i = a.default.connect(o);
            this._workerPostMessage({ type: d.Cs.OPENED, jobId: r, data: i });
          }
        }
      }
      var w = r(70171),
        b = r(17202);
      const _ = c.Z.getLogger('esri.core.workers'),
        { HANDSHAKE: S } = d.Cs;
      let k, L;
      const C =
        'Failed to create Worker. Fallback to execute module in main thread';
      async function I(e) {
        return new Promise((t) => {
          function r(i) {
            const n = (0, d.QM)(i);
            n &&
              n.type === S &&
              (e.removeEventListener('message', r),
              e.removeEventListener('error', o),
              t(e));
          }
          function o(t) {
            t.preventDefault(),
              e.removeEventListener('message', r),
              e.removeEventListener('error', o),
              _.warn(
                'Failed to create Worker. Fallback to execute module in main thread',
                t,
              ),
              (e = new v()).addEventListener('message', r),
              e.addEventListener('error', o);
          }
          e.addEventListener('message', r), e.addEventListener('error', o);
        });
      }
      let M = 0;
      const E = c.Z.getLogger('esri.core.workers'),
        { ABORT: O, INVOKE: T, OPEN: x, OPENED: j, RESPONSE: D } = d.Cs;
      class A {
        constructor(e, t) {
          (this._outJobs = new Map()),
            (this._inJobs = new Map()),
            (this.worker = e),
            (this.id = t),
            e.addEventListener('message', this._onMessage.bind(this)),
            e.addEventListener('error', (e) => {
              e.preventDefault(), E.error(e);
            });
        }
        static async create(e) {
          const t = await (async function () {
            if (!(0, i.Z)('esri-workers') || ((0, i.Z)('mozilla'), 0))
              return I(new v());
            if (!k && !L)
              try {
                const e =
                  'let globalId=0;const outgoing=new Map,configuration=JSON.parse("{CONFIGURATION}");self.esriConfig=configuration.esriConfig;const workerPath=self.esriConfig.workers.workerPath,HANDSHAKE=0,OPEN=1,OPENED=2,RESPONSE=3,INVOKE=4,ABORT=5;function createAbortError(){const e=new Error("Aborted");return e.name="AbortError",e}function receiveMessage(e){return e&&e.data?"string"==typeof e.data?JSON.parse(e.data):e.data:null}function invokeStaticMessage(e,o,r){const t=r&&r.signal,n=globalId++;return new Promise(((r,i)=>{if(t){if(t.aborted)return i(createAbortError());t.addEventListener("abort",(()=>{outgoing.get(n)&&(outgoing.delete(n),self.postMessage({type:5,jobId:n}),i(createAbortError()))}))}outgoing.set(n,{resolve:r,reject:i}),self.postMessage({type:4,jobId:n,methodName:e,abortable:null!=t,data:o})}))}let workerRevisionChecked=!1;function checkWorkerRevision(e){if(!workerRevisionChecked&&e.kernelInfo){workerRevisionChecked=!0;const{revision:o,buildDate:r,version:t}=configuration.kernelInfo,{revision:n,buildDate:i,version:s}=e.kernelInfo;o!==n&&console.warn(`[esri.core.workers] Version mismatch detected between ArcGIS API for JavaScript and assets:\\nAPI version: ${t} [Date: ${r}, Revision: ${o.slice(0,8)}]\nAssets version: ${s} [Date: ${i}, Revision: ${n.slice(0,8)}]`)}}function messageHandler(e){const o=receiveMessage(e);if(!o)return;const r=o.jobId;switch(o.type){case 1:let e;function t(o){const t=e.connect(o);self.postMessage({type:2,jobId:r,data:t},[t])}"function"==typeof define&&define.amd?require([workerPath],(r=>{e=r.default||r,checkWorkerRevision(e),e.loadWorker(o.modulePath).then((e=>e||new Promise((e=>{require([o.modulePath],e)})))).then(t)})):"System"in self&&"function"==typeof System.import?System.import(workerPath).then((r=>(e=r.default,checkWorkerRevision(e),e.loadWorker(o.modulePath)))).then((e=>e||System.import(o.modulePath))).then(t):esriConfig.workers.useDynamicImport?import(workerPath).then((r=>{e=r.default||r,checkWorkerRevision(e),e.loadWorker(o.modulePath).then((e=>e||import(o.modulePath))).then(t)})):(self.RemoteClient||importScripts(workerPath),e=self.RemoteClient.default||self.RemoteClient,checkWorkerRevision(e),e.loadWorker(o.modulePath).then(t));break;case 3:if(outgoing.has(r)){const e=outgoing.get(r);outgoing.delete(r),o.error?e.reject(JSON.parse(o.error)):e.resolve(o.data)}}}self.dojoConfig=configuration.loaderConfig,esriConfig.workers.loaderUrl&&(self.importScripts(esriConfig.workers.loaderUrl),"function"==typeof require&&"function"==typeof require.config&&require.config(configuration.loaderConfig)),self.addEventListener("message",messageHandler),self.postMessage({type:0});'.replace(
                    '"{CONFIGURATION}"',
                    `'${(function () {
                      let e;
                      if (null != u.Z.default) {
                        const t = { ...u.Z };
                        delete t.default, (e = JSON.parse(JSON.stringify(t)));
                      } else e = JSON.parse(JSON.stringify(u.Z));
                      (e.assetsPath = (0, p.hF)(e.assetsPath)),
                        (e.request.interceptors = []),
                        (e.log.interceptors = []),
                        (e.locale = (0, w.Kd)()),
                        (e.has = {
                          'esri-csp-restrictions': (0, i.Z)(
                            'esri-csp-restrictions',
                          ),
                          'esri-2d-debug': !1,
                          'esri-2d-update-debug': (0, i.Z)(
                            'esri-2d-update-debug',
                          ),
                          'esri-2d-query-centroid-enabled': (0, i.Z)(
                            'esri-2d-query-centroid-enabled',
                          ),
                          'featurelayer-pbf': (0, i.Z)('featurelayer-pbf'),
                          'featurelayer-simplify-thresholds': (0, i.Z)(
                            'featurelayer-simplify-thresholds',
                          ),
                          'featurelayer-simplify-payload-size-factors': (0,
                          i.Z)('featurelayer-simplify-payload-size-factors'),
                          'featurelayer-simplify-mobile-factor': (0, i.Z)(
                            'featurelayer-simplify-mobile-factor',
                          ),
                          'esri-atomics': (0, i.Z)('esri-atomics'),
                          'esri-shared-array-buffer': (0, i.Z)(
                            'esri-shared-array-buffer',
                          ),
                          'esri-tiles-debug': (0, i.Z)('esri-tiles-debug'),
                          'esri-workers-arraybuffer-transfer': (0, i.Z)(
                            'esri-workers-arraybuffer-transfer',
                          ),
                          'feature-polyline-generalization-factor': (0, i.Z)(
                            'feature-polyline-generalization-factor',
                          ),
                          'host-webworker': 1,
                        }),
                        e.workers.loaderUrl &&
                          (e.workers.loaderUrl = (0, p.hF)(
                            e.workers.loaderUrl,
                          )),
                        e.workers.workerPath
                          ? (e.workers.workerPath = (0, p.hF)(
                              e.workers.workerPath,
                            ))
                          : (e.workers.workerPath = (0, p.hF)(
                              (0, h.V)('esri/core/workers/RemoteClient.js'),
                            )),
                        (e.workers.useDynamicImport = !1);
                      const t = u.Z.workers.loaderConfig,
                        r = g({
                          baseUrl: null == t ? void 0 : t.baseUrl,
                          locale: (0, w.Kd)(),
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
                        o = { version: l.i8, buildDate: b.r, revision: b.$ };
                      return JSON.stringify({
                        esriConfig: e,
                        loaderConfig: r,
                        kernelInfo: o,
                      });
                    })()}'`,
                  );
                k = URL.createObjectURL(
                  new Blob([e], { type: 'text/javascript' }),
                );
              } catch (e) {
                L = e || {};
              }
            let e;
            if (k)
              try {
                e = new Worker(k, { name: 'esri-worker-' + M++ });
              } catch (t) {
                _.warn(C, L), (e = new v());
              }
            else _.warn(C, L), (e = new v());
            return I(e);
          })();
          return new A(t, e);
        }
        terminate() {
          this.worker.terminate();
        }
        async open(e, t = {}) {
          const { signal: r } = t,
            o = (0, d.jt)();
          return new Promise((t, i) => {
            const s = {
              resolve: t,
              reject: i,
              abortHandle: (0, n.$F)(r, () => {
                this._outJobs.delete(o), this._post({ type: O, jobId: o });
              }),
            };
            this._outJobs.set(o, s),
              this._post({ type: x, jobId: o, modulePath: e });
          });
        }
        _onMessage(e) {
          const t = (0, d.QM)(e);
          if (t)
            switch (t.type) {
              case j:
                this._onOpenedMessage(t);
                break;
              case D:
                this._onResponseMessage(t);
                break;
              case O:
                this._onAbortMessage(t);
                break;
              case T:
                this._onInvokeMessage(t);
            }
        }
        _onAbortMessage(e) {
          const t = this._inJobs,
            r = e.jobId,
            o = t.get(r);
          o && (o.controller && o.controller.abort(), t.delete(r));
        }
        _onInvokeMessage(e) {
          const { methodName: t, jobId: r, data: o, abortable: i } = e,
            s = i ? new AbortController() : null,
            a = this._inJobs,
            c = l.Nv[t];
          let h;
          try {
            if ('function' != typeof c)
              throw new TypeError(`${t} is not a function`);
            h = c.call(null, o, { signal: s ? s.signal : null });
          } catch (e) {
            return void this._post({ type: D, jobId: r, error: (0, d.AB)(e) });
          }
          (0, n.y8)(h)
            ? (a.set(r, { controller: s, promise: h }),
              h.then(
                (e) => {
                  a.has(r) &&
                    (a.delete(r), this._post({ type: D, jobId: r }, e));
                },
                (e) => {
                  a.has(r) &&
                    (a.delete(r),
                    e || (e = { message: 'Error encountered at method' + t }),
                    (0, n.D_)(e) ||
                      this._post({
                        type: D,
                        jobId: r,
                        error: (0, d.AB)(
                          e || { message: `Error encountered at method ${t}` },
                        ),
                      }));
                },
              ))
            : this._post({ type: D, jobId: r }, h);
        }
        _onOpenedMessage(e) {
          var t;
          const { jobId: r, data: o } = e,
            i = this._outJobs.get(r);
          i &&
            (this._outJobs.delete(r),
            null == (t = i.abortHandle) || t.remove(),
            i.resolve(o));
        }
        _onResponseMessage(e) {
          var t;
          const { jobId: r, error: i, data: n } = e,
            s = this._outJobs.get(r);
          s &&
            (this._outJobs.delete(r),
            null == (t = s.abortHandle) || t.remove(),
            i ? s.reject(o.Z.fromJSON(JSON.parse(i))) : s.resolve(n));
        }
        _post(e, t, r) {
          return (0, d.oi)(this.worker, e, t, r);
        }
      }
      let N = (0, i.Z)('esri-workers-debug')
        ? 1
        : (0, i.Z)('host-browser')
        ? navigator.hardwareConcurrency - 1
        : 0;
      N ||
        (N =
          ((0, i.Z)('safari') && (0, i.Z)('mac')) || (0, i.Z)('trident')
            ? 7
            : 2);
      let Z = 0;
      const R = [];
      async function U(e, t) {
        const r = new s.Z();
        return await r.open(e, t), r;
      }
      async function P(e, t = {}) {
        if ('string' != typeof e)
          throw new o.Z('workers:undefined-module', 'modulePath is missing');
        let r = t.strategy || 'distributed';
        if (
          ((0, i.Z)('host-webworker') &&
            !(0, i.Z)('esri-workers') &&
            (r = 'local'),
          'local' === r)
        ) {
          let r = await a.default.loadWorker(e);
          r || (r = await import(e)), (0, n.k_)(t.signal);
          const o = t.client || r;
          return U([a.default.connect(r)], { ...t, client: o });
        }
        if (
          (await (async function () {
            if (G) return G;
            $ = new AbortController();
            const e = [];
            for (let t = 0; t < N; t++) {
              const r = A.create(t).then((e) => ((R[t] = e), e));
              e.push(r);
            }
            return (G = Promise.all(e)), G;
          })(),
          (0, n.k_)(t.signal),
          'dedicated' === r)
        ) {
          const r = Z++ % N;
          return U([await R[r].open(e, t)], t);
        }
        if (t.maxNumWorkers && t.maxNumWorkers > 0) {
          const r = Math.min(t.maxNumWorkers, N);
          if (r < N) {
            const o = new Array(r);
            for (let i = 0; i < r; ++i) {
              const r = Z++ % N;
              o[i] = R[r].open(e, t);
            }
            return U(o, t);
          }
        }
        return U(
          R.map((r) => r.open(e, t)),
          t,
        );
      }
      let $,
        G = null;
    },
    79235: (e, t, r) => {
      r.d(t, { Z: () => w });
      var o,
        i = r(43697),
        n = r(67676),
        s = r(35454),
        a = r(96674),
        l = r(67900),
        c = r(20941),
        d = r(5600),
        h = (r(80442), r(75215), r(71715)),
        u = r(52011),
        p = r(30556);
      const y = (0, s.w)()({
          orthometric: 'gravity-related-height',
          gravity_related_height: 'gravity-related-height',
          ellipsoidal: 'ellipsoidal',
        }),
        g = y.jsonValues.slice();
      (0, n.e$)(g, 'orthometric');
      const m = (0, s.w)()({
        meter: 'meters',
        foot: 'feet',
        'us-foot': 'us-feet',
        'clarke-foot': 'clarke-feet',
        'clarke-yard': 'clarke-yards',
        'clarke-link': 'clarke-links',
        'sears-yard': 'sears-yards',
        'sears-foot': 'sears-feet',
        'sears-chain': 'sears-chains',
        'benoit-1895-b-chain': 'benoit-1895-b-chains',
        'indian-yard': 'indian-yards',
        'indian-1937-yard': 'indian-1937-yards',
        'gold-coast-foot': 'gold-coast-feet',
        'sears-1922-truncated-chain': 'sears-1922-truncated-chains',
        '50-kilometers': '50-kilometers',
        '150-kilometers': '150-kilometers',
      });
      let f = (o = class extends a.wq {
        constructor(e) {
          super(e),
            (this.heightModel = 'gravity-related-height'),
            (this.heightUnit = 'meters'),
            (this.vertCRS = null);
        }
        writeHeightModel(e, t, r) {
          return y.write(e, t, r);
        }
        readHeightModel(e, t, r) {
          return (
            y.read(e) ||
            (r &&
              r.messages &&
              r.messages.push(
                (function (e, t) {
                  return new c.Z(
                    'height-model:unsupported',
                    `Height model of value '${e}' is not supported`,
                    t,
                  );
                })(e, { context: r }),
              ),
            null)
          );
        }
        readHeightUnit(e, t, r) {
          return (
            m.read(e) ||
            (r && r.messages && r.messages.push(v(e, { context: r })), null)
          );
        }
        readHeightUnitService(e, t, r) {
          return (
            (0, l.$C)(e) ||
            m.read(e) ||
            (r && r.messages && r.messages.push(v(e, { context: r })), null)
          );
        }
        readVertCRS(e, t) {
          return t.vertCRS || t.ellipsoid || t.geoid;
        }
        clone() {
          return new o({
            heightModel: this.heightModel,
            heightUnit: this.heightUnit,
            vertCRS: this.vertCRS,
          });
        }
        equals(e) {
          return (
            !!e &&
            (this === e ||
              (this.heightModel === e.heightModel &&
                this.heightUnit === e.heightUnit &&
                this.vertCRS === e.vertCRS))
          );
        }
        static deriveUnitFromSR(e, t) {
          const r = (0, l.cM)(t);
          return new o({
            heightModel: e.heightModel,
            heightUnit: r,
            vertCRS: e.vertCRS,
          });
        }
        write(e, t) {
          return (t = { origin: 'web-scene', ...t }), super.write(e, t);
        }
        static fromJSON(e) {
          if (!e) return null;
          const t = new o();
          return t.read(e, { origin: 'web-scene' }), t;
        }
      });
      function v(e, t) {
        return new c.Z(
          'height-unit:unsupported',
          `Height unit of value '${e}' is not supported`,
          t,
        );
      }
      (0, i._)(
        [
          (0, d.Cb)({
            type: y.apiValues,
            constructOnly: !0,
            json: {
              origins: { 'web-scene': { type: g, default: 'ellipsoidal' } },
            },
          }),
        ],
        f.prototype,
        'heightModel',
        void 0,
      ),
        (0, i._)(
          [(0, p.c)('web-scene', 'heightModel')],
          f.prototype,
          'writeHeightModel',
          null,
        ),
        (0, i._)(
          [(0, h.r)(['web-scene', 'service'], 'heightModel')],
          f.prototype,
          'readHeightModel',
          null,
        ),
        (0, i._)(
          [
            (0, d.Cb)({
              type: m.apiValues,
              constructOnly: !0,
              json: {
                origins: {
                  'web-scene': { type: m.jsonValues, write: m.write },
                },
              },
            }),
          ],
          f.prototype,
          'heightUnit',
          void 0,
        ),
        (0, i._)(
          [(0, h.r)('web-scene', 'heightUnit')],
          f.prototype,
          'readHeightUnit',
          null,
        ),
        (0, i._)(
          [(0, h.r)('service', 'heightUnit')],
          f.prototype,
          'readHeightUnitService',
          null,
        ),
        (0, i._)(
          [
            (0, d.Cb)({
              type: String,
              constructOnly: !0,
              json: { origins: { 'web-scene': { write: !0 } } },
            }),
          ],
          f.prototype,
          'vertCRS',
          void 0,
        ),
        (0, i._)(
          [(0, h.r)('service', 'vertCRS', ['vertCRS', 'ellipsoid', 'geoid'])],
          f.prototype,
          'readVertCRS',
          null,
        ),
        (f = o = (0, i._)([(0, u.j)('esri.geometry.HeightModelInfo')], f));
      const w = f;
    },
    2587: (e, t, r) => {
      r(90344), r(18848), r(940), r(70171);
      var o = r(94443),
        i = r(3172),
        n = r(20102),
        s = r(70586);
      async function a(e) {
        if ((0, s.pC)(c.fetchBundleAsset)) return c.fetchBundleAsset(e);
        const t = await (0, i.default)(e, { responseType: 'text' });
        return JSON.parse(t.data);
      }
      class l {
        constructor({
          base: e = '',
          pattern: t,
          location: r = new URL(window.location.href),
        }) {
          let o;
          (o =
            'string' == typeof r
              ? (e) => new URL(e, new URL(r, window.location.href)).href
              : r instanceof URL
              ? (e) => new URL(e, r).href
              : r),
            (this.pattern = 'string' == typeof t ? new RegExp(`^${t}`) : t),
            (this.getAssetUrl = o),
            (e = e ? (e.endsWith('/') ? e : e + '/') : ''),
            (this.matcher = new RegExp(`^${e}(?:(.*)/)?(.*)$`));
        }
        fetchMessageBundle(e, t) {
          return (async function (e, t, r, i) {
            const s = t.exec(r);
            if (!s)
              throw new n.Z(
                'esri-intl:invalid-bundle',
                `Bundle id "${r}" is not compatible with the pattern "${t}"`,
              );
            const l = s[1] ? `${s[1]}/` : '',
              c = s[2],
              d = (0, o.Su)(i),
              h = `${l}${c}.json`,
              u = d ? `${l}${c}_${d}.json` : h;
            let p;
            try {
              p = await a(e(u));
            } catch (t) {
              if (u === h)
                throw new n.Z(
                  'intl:unknown-bundle',
                  `Bundle "${r}" cannot be loaded`,
                  { error: t },
                );
              try {
                p = await a(e(h));
              } catch (e) {
                throw new n.Z(
                  'intl:unknown-bundle',
                  `Bundle "${r}" cannot be loaded`,
                  { error: e },
                );
              }
            }
            return p;
          })(this.getAssetUrl, this.matcher, e, t);
        }
      }
      const c = {};
      var d,
        h = r(99880);
      (0, o.tz)(((d = { pattern: 'esri/', location: h.V }), new l(d)));
    },
    90344: (e, t, r) => {
      r.d(t, { Ze: () => m, p6: () => f });
      var o = r(35454),
        i = r(70171);
      const n = { year: 'numeric', month: 'numeric', day: 'numeric' },
        s = { year: 'numeric', month: 'long', day: 'numeric' },
        a = { year: 'numeric', month: 'short', day: 'numeric' },
        l = { year: 'numeric', month: 'long', weekday: 'long', day: 'numeric' },
        c = { hour: 'numeric', minute: 'numeric' },
        d = { ...c, second: 'numeric' },
        h = {
          'short-date': n,
          'short-date-short-time': { ...n, ...c },
          'short-date-short-time-24': { ...n, ...c, hour12: !1 },
          'short-date-long-time': { ...n, ...d },
          'short-date-long-time-24': { ...n, ...d, hour12: !1 },
          'short-date-le': n,
          'short-date-le-short-time': { ...n, ...c },
          'short-date-le-short-time-24': { ...n, ...c, hour12: !1 },
          'short-date-le-long-time': { ...n, ...d },
          'short-date-le-long-time-24': { ...n, ...d, hour12: !1 },
          'long-month-day-year': s,
          'long-month-day-year-short-time': { ...s, ...c },
          'long-month-day-year-short-time-24': { ...s, ...c, hour12: !1 },
          'long-month-day-year-long-time': { ...s, ...d },
          'long-month-day-year-long-time-24': { ...s, ...d, hour12: !1 },
          'day-short-month-year': a,
          'day-short-month-year-short-time': { ...a, ...c },
          'day-short-month-year-short-time-24': { ...a, ...c, hour12: !1 },
          'day-short-month-year-long-time': { ...a, ...d },
          'day-short-month-year-long-time-24': { ...a, ...d, hour12: !1 },
          'long-date': l,
          'long-date-short-time': { ...l, ...c },
          'long-date-short-time-24': { ...l, ...c, hour12: !1 },
          'long-date-long-time': { ...l, ...d },
          'long-date-long-time-24': { ...l, ...d, hour12: !1 },
          'long-month-year': { month: 'long', year: 'numeric' },
          'short-month-year': { month: 'short', year: 'numeric' },
          year: { year: 'numeric' },
          'short-time': c,
          'long-time': d,
        },
        u = (0, o.w)()({
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
        p =
          (u.apiValues,
          u.toJSON.bind(u),
          u.fromJSON.bind(u),
          { ar: 'ar-u-nu-latn-ca-gregory' });
      let y = new WeakMap(),
        g = h['short-date-short-time'];
      function m(e) {
        return h[e] || null;
      }
      function f(e, t) {
        return (function (e) {
          const t = e || g;
          if (!y.has(t)) {
            const e = (0, i.Kd)(),
              r = p[(0, i.Kd)()] || e;
            y.set(t, new Intl.DateTimeFormat(r, t));
          }
          return y.get(t);
        })(t).format(e);
      }
      (0, i.Ze)(() => {
        (y = new WeakMap()), (g = h['short-date-short-time']);
      });
    },
    94443: (e, t, r) => {
      r.d(t, { ME: () => p, Su: () => y, tz: () => u });
      var o = r(20102),
        i = r(95330),
        n = r(70171);
      const s = /^([a-z]{2})(?:[-_]([A-Za-z]{2}))?$/,
        a = {
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
        return null != (t = a[e]) && t;
      }
      const c = [],
        d = new Map();
      function h(e) {
        for (const t of d.keys()) g(e.pattern, t) && d.delete(t);
      }
      function u(e) {
        return (
          c.includes(e) || (h(e), c.unshift(e)),
          {
            remove() {
              const t = c.indexOf(e);
              t > -1 && (c.splice(t, 1), h(e));
            },
          }
        );
      }
      async function p(e) {
        const t = (0, n.Kd)();
        d.has(e) ||
          d.set(
            e,
            (async function (e, t) {
              const r = [];
              for (const o of c)
                if (g(o.pattern, e))
                  try {
                    return await o.fetchMessageBundle(e, t);
                  } catch (e) {
                    r.push(e);
                  }
              if (r.length)
                throw new o.Z(
                  'intl:message-bundle-error',
                  `Errors occurred while loading "${e}"`,
                  { errors: r },
                );
              throw new o.Z(
                'intl:no-message-bundle-loader',
                `No loader found for message bundle "${e}"`,
              );
            })(e, t),
          );
        const r = d.get(e);
        return await m.add(r), r;
      }
      function y(e) {
        if (!s.test(e)) return null;
        const [, t, r] = s.exec(e),
          o = t + (r ? '-' + r.toUpperCase() : '');
        return l(o) ? o : l(t) ? t : null;
      }
      function g(e, t) {
        return 'string' == typeof e ? t.startsWith(e) : e.test(t);
      }
      (0, n.Ze)(() => {
        d.clear();
      });
      const m = new (class {
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
          this._numLoading++, this._dfd || (this._dfd = (0, i.dD)());
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
      var o = r(70586),
        i = r(70171);
      const n = { ar: 'ar-u-nu-latn' };
      let s = new WeakMap(),
        a = {};
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
          const t = e || a;
          if (!s.has(t)) {
            const r = (0, i.Kd)(),
              o = n[(0, i.Kd)()] || r;
            s.set(t, new Intl.NumberFormat(o, e));
          }
          return (0, o.j0)(s.get(t));
        })(t).format(e);
      }
      (0, i.Ze)(() => {
        (s = new WeakMap()), (a = {});
      });
    },
    940: (e, t, r) => {
      r.d(t, { n: () => c });
      var o = r(92604),
        i = r(78286),
        n = r(19153),
        s = r(90344),
        a = r(18848);
      const l = o.Z.getLogger('esri.intl');
      function c(e, t, r = {}) {
        const { format: o = {} } = r;
        return (0, n.gx)(e, (e) =>
          (function (e, t, r) {
            let o, n;
            const s = e.indexOf(':');
            if (
              (-1 === s
                ? (o = e.trim())
                : ((o = e.slice(0, s).trim()), (n = e.slice(s + 1).trim())),
              !o)
            )
              return '';
            const a = (0, i.hS)(o, t);
            if (null == a) return '';
            const l = r[n] || r[o];
            return l ? d(a, l) : n ? h(a, n) : u(a);
          })(e, t, o),
        );
      }
      function d(e, t) {
        switch (t.type) {
          case 'date':
            return (0, s.p6)(e, t.intlOptions);
          case 'number':
            return (0, a.uf)(e, t.intlOptions);
          default:
            return l.warn('missing format descriptor for key {key}'), u(e);
        }
      }
      function h(e, t) {
        switch (t.toLowerCase()) {
          case 'dateformat':
            return (0, s.p6)(e);
          case 'numberformat':
            return (0, a.uf)(e);
          default:
            return (
              l.warn(`inline format is unsupported since 4.12: ${t}`),
              /^(dateformat|datestring)/i.test(t)
                ? (0, s.p6)(e)
                : /^numberformat/i.test(t)
                ? (0, a.uf)(e)
                : u(e)
            );
        }
      }
      function u(e) {
        switch (typeof e) {
          case 'string':
            return e;
          case 'number':
            return (0, a.uf)(e);
          case 'boolean':
            return '' + e;
          default:
            return e instanceof Date ? (0, s.p6)(e) : '';
        }
      }
    },
    49932: (e, t, r) => {
      r.r(t), r.d(t, { default: () => O });
      var o = r(43697),
        i = r(3172),
        n = r(20102),
        s = r(92604),
        a = r(70586),
        l = r(16453),
        c = r(95330),
        d = r(17452),
        h = r(5600),
        u = r(67676),
        p = (r(80442), r(75215), r(71715)),
        y = r(52011),
        g = r(79235),
        m = r(29600),
        f = r(46486),
        v = r(17287),
        w = r(38009),
        b = r(16859),
        _ = r(21506),
        S = r(50758),
        k = r(78346);
      const L = s.Z.getLogger('esri.core.workers.WorkerHandle');
      class C extends class {
        constructor(e, t, r, o = {}) {
          (this._mainMethod = t),
            (this._listeners = []),
            (this._promise = (0, k.bA)(e, { ...o, schedule: r }).then((e) => {
              if (void 0 === this._thread) {
                (this._thread = e),
                  (this._promise = null),
                  o.hasInitialize && this.broadcast({}, 'initialize');
                for (const e of this._listeners) this._connectListener(e);
              } else e.close();
            })),
            this._promise.catch((t) =>
              L.error(`Failed to initialize ${e} worker: ${t}`),
            );
        }
        on(e, t) {
          const r = {
            removed: !1,
            eventName: e,
            callback: t,
            threadHandle: null,
          };
          return (
            this._listeners.push(r),
            this._connectListener(r),
            (0, S.kB)(() => {
              (r.removed = !0),
                (0, u.Od)(this._listeners, r),
                this._thread &&
                  (0, a.pC)(r.threadHandle) &&
                  r.threadHandle.remove();
            })
          );
        }
        destroy() {
          this._thread && (this._thread.close(), (this._thread = null)),
            (this._promise = null);
        }
        invoke(e, t) {
          return this.invokeMethod(this._mainMethod, e, t);
        }
        invokeMethod(e, t, r) {
          if (this._thread) {
            const o = this.getTransferList(t, e);
            return this._thread.invoke(e, t, { transferList: o, signal: r });
          }
          return this._promise
            ? this._promise.then(
                () => ((0, c.k_)(r), this.invokeMethod(e, t, r)),
              )
            : Promise.reject(null);
        }
        broadcast(e, t) {
          return this._thread
            ? Promise.all(this._thread.broadcast(t, e)).then(() => {})
            : this._promise
            ? this._promise.then(() => this.broadcast(e, t))
            : Promise.reject();
        }
        get promise() {
          return this._promise;
        }
        _connectListener(e) {
          this._thread &&
            this._thread.on(e.eventName, e.callback).then((t) => {
              e.removed || (e.threadHandle = t);
            });
        }
      } {
        constructor(e = null) {
          super('LercWorker', '_decode', e, { strategy: 'dedicated' }),
            (this.schedule = e),
            (this.ref = 0);
        }
        decode(e, t, r) {
          return e && 0 !== e.byteLength
            ? this.invoke({ buffer: e, options: t }, r)
            : Promise.resolve(null);
        }
        getTransferList(e) {
          return [e.buffer];
        }
        release() {
          --this.ref <= 0 &&
            (I.forEach((e, t) => {
              e === this && I.delete(t);
            }),
            this.destroy());
        }
      }
      const I = new Map(),
        M = s.Z.getLogger('esri.layers.ElevationLayer');
      let E = class extends (0, f.Z)(
        (0, v.Y)((0, w.q)((0, b.I)((0, l.R)(m.Z)))),
      ) {
        constructor(...e) {
          super(...e),
            (this.copyright = null),
            (this.heightModelInfo = null),
            (this.path = null),
            (this.opacity = 1),
            (this.operationalLayerType = 'ArcGISTiledElevationServiceLayer'),
            (this.sourceJSON = null),
            (this.type = 'elevation'),
            (this.url = null),
            (this.version = null),
            (this._lercDecoder = (function (e = null) {
              let t = I.get((0, a.Wg)(e));
              return (
                t ||
                  ((0, a.pC)(e)
                    ? ((t = new C((t) => e.schedule(t))), I.set(e, t))
                    : ((t = new C()), I.set(null, t))),
                ++t.ref,
                t
              );
            })());
        }
        normalizeCtorArgs(e, t) {
          return 'string' == typeof e ? { url: e, ...t } : e;
        }
        destroy() {
          this._lercDecoder = (0, a.RY)(this._lercDecoder);
        }
        set minScale(e) {
          this.constructed &&
            M.warn(
              `${this.declaredClass}.minScale support has been removed (since 4.5)`,
            );
        }
        get minScale() {}
        set maxScale(e) {
          this.constructed &&
            M.warn(
              `${this.declaredClass}.maxScale support has been removed (since 4.5)`,
            );
        }
        get maxScale() {}
        readVersion(e, t) {
          let r = t.currentVersion;
          return r || (r = 9.3), r;
        }
        load(e) {
          const t = (0, a.pC)(e) ? e.signal : null;
          return (
            this.addResolvingPromise(
              this.loadFromPortal(
                {
                  supportedTypes: ['Image Service'],
                  supportsData: !1,
                  validateItem: (e) => {
                    for (let t = 0; t < e.typeKeywords.length; t++)
                      if (
                        'elevation 3d layer' === e.typeKeywords[t].toLowerCase()
                      )
                        return !0;
                    throw new n.Z(
                      'portal:invalid-layer-item-type',
                      "Invalid layer item type '${type}', expected '${expectedType}' ",
                      {
                        type: 'Image Service',
                        expectedType: 'Image Service Elevation 3D Layer',
                      },
                    );
                  },
                },
                e,
              )
                .catch(c.r9)
                .then(() => this._fetchImageService(t)),
            ),
            Promise.resolve(this)
          );
        }
        fetchTile(e, t, r, o) {
          const n = (0, a.pC)((o = o || { signal: null }).signal)
              ? o.signal
              : (o.signal = new AbortController().signal),
            s = { responseType: 'array-buffer', signal: n },
            l = { noDataValue: o.noDataValue, returnFileInfo: !0 };
          return this.load()
            .then(() => this._fetchTileAvailability(e, t, r, o))
            .then(() => (0, i.default)(this.getTileUrl(e, t, r), s))
            .then((e) => this._lercDecoder.decode(e.data, l, n))
            .then((e) => ({
              values: e.pixelData,
              width: e.width,
              height: e.height,
              maxZError: e.fileInfo.maxZError,
              noDataValue: e.noDataValue,
              minValue: e.minValue,
              maxValue: e.maxValue,
            }));
        }
        getTileUrl(e, t, r) {
          const o = !this.tilemapCache && this.supportsBlankTile,
            i = (0, d.B7)({ ...this.parsedUrl.query, blankTile: !o && null });
          return `${this.parsedUrl.path}/tile/${e}/${t}/${r}${
            i ? '?' + i : ''
          }`;
        }
        async queryElevation(e, t) {
          const { ElevationQuery: o } = await Promise.all([
            r.e(4547),
            r.e(3127),
          ]).then(r.bind(r, 33127));
          return (0, c.k_)(t), new o().query(this, e, t);
        }
        async createElevationSampler(e, t) {
          const { ElevationQuery: o } = await Promise.all([
            r.e(4547),
            r.e(3127),
          ]).then(r.bind(r, 33127));
          return (0, c.k_)(t), new o().createSampler(this, e, t);
        }
        _fetchTileAvailability(e, t, r, o) {
          return this.tilemapCache
            ? this.tilemapCache.fetchAvailability(e, t, r, o)
            : Promise.resolve('unknown');
        }
        async _fetchImageService(e) {
          if (this.sourceJSON) return this.sourceJSON;
          const t = {
              query: { f: 'json', ...this.parsedUrl.query },
              responseType: 'json',
              signal: e,
            },
            r = await (0, i.default)(this.parsedUrl.path, t);
          r.ssl && (this.url = this.url.replace(/^http:/i, 'https:')),
            (this.sourceJSON = r.data),
            this.read(r.data, { origin: 'service', url: this.parsedUrl });
        }
        get hasOverriddenFetchTile() {
          return !this.fetchTile.__isDefault__;
        }
      };
      (0, o._)(
        [(0, h.Cb)({ json: { read: { source: 'copyrightText' } } })],
        E.prototype,
        'copyright',
        void 0,
      ),
        (0, o._)(
          [(0, h.Cb)({ readOnly: !0, type: g.Z })],
          E.prototype,
          'heightModelInfo',
          void 0,
        ),
        (0, o._)(
          [
            (0, h.Cb)({
              type: String,
              json: {
                origins: { 'web-scene': { read: !0, write: !0 } },
                read: !1,
              },
            }),
          ],
          E.prototype,
          'path',
          void 0,
        ),
        (0, o._)(
          [(0, h.Cb)({ type: ['show', 'hide'] })],
          E.prototype,
          'listMode',
          void 0,
        ),
        (0, o._)(
          [
            (0, h.Cb)({
              json: {
                read: !1,
                write: !1,
                origins: {
                  service: { read: !1, write: !1 },
                  'portal-item': { read: !1, write: !1 },
                  'web-document': { read: !1, write: !1 },
                },
              },
            }),
          ],
          E.prototype,
          'minScale',
          null,
        ),
        (0, o._)(
          [
            (0, h.Cb)({
              json: {
                read: !1,
                write: !1,
                origins: {
                  service: { read: !1, write: !1 },
                  'portal-item': { read: !1, write: !1 },
                  'web-document': { read: !1, write: !1 },
                },
              },
            }),
          ],
          E.prototype,
          'maxScale',
          null,
        ),
        (0, o._)(
          [
            (0, h.Cb)({
              json: {
                read: !1,
                write: !1,
                origins: { 'web-document': { read: !1, write: !1 } },
              },
            }),
          ],
          E.prototype,
          'opacity',
          void 0,
        ),
        (0, o._)(
          [(0, h.Cb)({ type: ['ArcGISTiledElevationServiceLayer'] })],
          E.prototype,
          'operationalLayerType',
          void 0,
        ),
        (0, o._)([(0, h.Cb)()], E.prototype, 'sourceJSON', void 0),
        (0, o._)(
          [(0, h.Cb)({ json: { read: !1 }, value: 'elevation', readOnly: !0 })],
          E.prototype,
          'type',
          void 0,
        ),
        (0, o._)([(0, h.Cb)(_.HQ)], E.prototype, 'url', void 0),
        (0, o._)([(0, h.Cb)()], E.prototype, 'version', void 0),
        (0, o._)(
          [(0, p.r)('version', ['currentVersion'])],
          E.prototype,
          'readVersion',
          null,
        ),
        (E = (0, o._)([(0, y.j)('esri.layers.ElevationLayer')], E)),
        (E.prototype.fetchTile.__isDefault__ = !0);
      const O = E;
    },
    29600: (e, t, r) => {
      r.d(t, { Z: () => b });
      var o = r(43697),
        i = r(68773),
        n = (r(66577), r(3172)),
        s = r(20102),
        a = r(32448),
        l = r(10699),
        c = r(83379),
        d = r(92604),
        h = r(95330),
        u = r(17452),
        p = r(5600),
        y = (r(67676), r(80442), r(75215), r(52011)),
        g = r(6570),
        m = r(82971);
      let f = 0;
      const v = d.Z.getLogger('esri.layers.Layer');
      let w = class extends a.Z.EventedMixin((0, l.I)(c.Z)) {
        constructor() {
          super(...arguments),
            (this.attributionDataUrl = null),
            (this.fullExtent = new g.Z(-180, -90, 180, 90, m.Z.WGS84)),
            (this.id = Date.now().toString(16) + '-layer-' + f++),
            (this.legendEnabled = !0),
            (this.listMode = 'show'),
            (this.opacity = 1),
            (this.parent = null),
            (this.popupEnabled = !0),
            (this.attributionVisible = !0),
            (this.spatialReference = m.Z.WGS84),
            (this.title = null),
            (this.type = null),
            (this.url = null),
            (this.visible = !0);
        }
        static async fromArcGISServerUrl(e) {
          const t = 'string' == typeof e ? { url: e } : e,
            o = await r.e(3529).then(r.bind(r, 63529));
          try {
            return await o.fromUrl(t);
          } catch (e) {
            throw (
              (v.error(
                "#fromArcGISServerUrl({ url: '" + t.url + "'})",
                'Failed to create layer from arcgis server url',
                e,
              ),
              e)
            );
          }
        }
        static async fromPortalItem(e) {
          const t = 'portalItem' in e ? e : { portalItem: e },
            o = await r.e(4579).then(r.bind(r, 44579));
          try {
            return await o.fromItem(t);
          } catch (e) {
            const r = t && t.portalItem,
              o = (r && r.id) || 'unset',
              n = (r && r.portal && r.portal.url) || i.Z.portalUrl;
            throw (
              (v.error(
                '#fromPortalItem()',
                "Failed to create layer from portal item (portal: '" +
                  n +
                  "', id: '" +
                  o +
                  "')",
                e,
              ),
              e)
            );
          }
        }
        initialize() {
          this.when().catch((e) => {
            var t, r;
            (0, h.D_)(e) ||
              d.Z.getLogger(this.declaredClass).error(
                '#load()',
                `Failed to load layer (title: '${
                  null != (t = this.title) ? t : 'no title'
                }', id: '${null != (r = this.id) ? r : 'no id'}')`,
                { error: e },
              );
          });
        }
        destroy() {
          if (this.parent) {
            const e = this,
              t = this.parent;
            'layers' in t && t.layers.includes(e)
              ? t.layers.remove(e)
              : 'tables' in t && t.tables.includes(e)
              ? t.tables.remove(e)
              : 'baseLayers' in t && t.baseLayers.includes(e)
              ? t.baseLayers.remove(e)
              : 'baseLayers' in t &&
                t.referenceLayers.includes(e) &&
                t.referenceLayers.remove(e);
          }
        }
        get hasAttributionData() {
          return null != this.attributionDataUrl;
        }
        get parsedUrl() {
          const e = this.url;
          return e ? (0, u.mN)(e) : null;
        }
        async fetchAttributionData() {
          const e = this.attributionDataUrl;
          if (this.hasAttributionData && e)
            return (
              await (0, n.default)(e, {
                query: { f: 'json' },
                responseType: 'json',
              })
            ).data;
          throw new s.Z(
            'layer:no-attribution-data',
            'Layer does not have attribution data',
          );
        }
      };
      (0, o._)(
        [(0, p.Cb)({ type: String })],
        w.prototype,
        'attributionDataUrl',
        void 0,
      ),
        (0, o._)([(0, p.Cb)({ type: g.Z })], w.prototype, 'fullExtent', void 0),
        (0, o._)(
          [(0, p.Cb)({ readOnly: !0 })],
          w.prototype,
          'hasAttributionData',
          null,
        ),
        (0, o._)(
          [(0, p.Cb)({ type: String, clonable: !1 })],
          w.prototype,
          'id',
          void 0,
        ),
        (0, o._)(
          [(0, p.Cb)({ type: Boolean, nonNullable: !0 })],
          w.prototype,
          'legendEnabled',
          void 0,
        ),
        (0, o._)(
          [(0, p.Cb)({ type: ['show', 'hide', 'hide-children'] })],
          w.prototype,
          'listMode',
          void 0,
        ),
        (0, o._)(
          [
            (0, p.Cb)({
              type: Number,
              range: { min: 0, max: 1 },
              nonNullable: !0,
            }),
          ],
          w.prototype,
          'opacity',
          void 0,
        ),
        (0, o._)([(0, p.Cb)({ clonable: !1 })], w.prototype, 'parent', void 0),
        (0, o._)([(0, p.Cb)({ readOnly: !0 })], w.prototype, 'parsedUrl', null),
        (0, o._)(
          [(0, p.Cb)({ type: Boolean })],
          w.prototype,
          'popupEnabled',
          void 0,
        ),
        (0, o._)(
          [(0, p.Cb)({ type: Boolean })],
          w.prototype,
          'attributionVisible',
          void 0,
        ),
        (0, o._)(
          [(0, p.Cb)({ type: m.Z })],
          w.prototype,
          'spatialReference',
          void 0,
        ),
        (0, o._)([(0, p.Cb)({ type: String })], w.prototype, 'title', void 0),
        (0, o._)(
          [(0, p.Cb)({ type: String, readOnly: !0, json: { read: !1 } })],
          w.prototype,
          'type',
          void 0,
        ),
        (0, o._)([(0, p.Cb)()], w.prototype, 'url', void 0),
        (0, o._)(
          [(0, p.Cb)({ type: Boolean, nonNullable: !0 })],
          w.prototype,
          'visible',
          void 0,
        ),
        (w = (0, o._)([(0, y.j)('esri.layers.Layer')], w));
      const b = w;
    },
    46486: (e, t, r) => {
      r.d(t, { Z: () => d });
      var o = r(43697),
        i = (r(66577), r(5600)),
        n = (r(67676), r(80442), r(75215), r(71715)),
        s = r(52011),
        a = r(45322),
        l = r(56608),
        c = r(82971);
      const d = (e) => {
        let t = class extends e {
          constructor() {
            super(...arguments),
              (this.copyright = null),
              (this.minScale = 0),
              (this.maxScale = 0),
              (this.spatialReference = null),
              (this.tileInfo = null),
              (this.tilemapCache = null);
          }
          readMinScale(e, t) {
            return null != t.minLOD && null != t.maxLOD ? e : 0;
          }
          readMaxScale(e, t) {
            return null != t.minLOD && null != t.maxLOD ? e : 0;
          }
          get supportsBlankTile() {
            return this.version >= 10.2;
          }
          readTilemapCache(e, t) {
            return t.capabilities && t.capabilities.indexOf('Tilemap') > -1
              ? new l.y({ layer: this })
              : null;
          }
        };
        return (
          (0, o._)(
            [(0, i.Cb)({ json: { read: { source: 'copyrightText' } } })],
            t.prototype,
            'copyright',
            void 0,
          ),
          (0, o._)([(0, i.Cb)()], t.prototype, 'minScale', void 0),
          (0, o._)(
            [(0, n.r)('service', 'minScale')],
            t.prototype,
            'readMinScale',
            null,
          ),
          (0, o._)([(0, i.Cb)()], t.prototype, 'maxScale', void 0),
          (0, o._)(
            [(0, n.r)('service', 'maxScale')],
            t.prototype,
            'readMaxScale',
            null,
          ),
          (0, o._)(
            [(0, i.Cb)({ type: c.Z })],
            t.prototype,
            'spatialReference',
            void 0,
          ),
          (0, o._)(
            [(0, i.Cb)({ readOnly: !0 })],
            t.prototype,
            'supportsBlankTile',
            null,
          ),
          (0, o._)([(0, i.Cb)(a.h)], t.prototype, 'tileInfo', void 0),
          (0, o._)([(0, i.Cb)()], t.prototype, 'tilemapCache', void 0),
          (0, o._)(
            [(0, n.r)('service', 'tilemapCache', ['capabilities'])],
            t.prototype,
            'readTilemapCache',
            null,
          ),
          (0, o._)([(0, i.Cb)()], t.prototype, 'version', void 0),
          (t = (0, o._)(
            [(0, s.j)('esri.layers.mixins.ArcGISCachedService')],
            t,
          )),
          t
        );
      };
    },
    17287: (e, t, r) => {
      r.d(t, { Y: () => c });
      var o = r(43697),
        i = r(92604),
        n = r(70586),
        s = r(5600),
        a = (r(67676), r(80442), r(75215), r(52011)),
        l = r(66677);
      const c = (e) => {
        let t = class extends e {
          get title() {
            if (this._get('title') && 'defaults' !== this.originOf('title'))
              return this._get('title');
            if (this.url) {
              const e = (0, l.Qc)(this.url);
              if ((0, n.pC)(e) && e.title) return e.title;
            }
            return this._get('title') || '';
          }
          set title(e) {
            this._set('title', e);
          }
          set url(e) {
            this._set('url', (0, l.Nm)(e, i.Z.getLogger(this.declaredClass)));
          }
        };
        return (
          (0, o._)([(0, s.Cb)()], t.prototype, 'title', null),
          (0, o._)([(0, s.Cb)({ type: String })], t.prototype, 'url', null),
          (t = (0, o._)([(0, a.j)('esri.layers.mixins.ArcGISService')], t)),
          t
        );
      };
    },
    38009: (e, t, r) => {
      r.d(t, { q: () => p });
      var o = r(43697),
        i = r(20102),
        n = r(17452),
        s = r(5600),
        a = (r(67676), r(80442), r(75215), r(52011)),
        l = r(30556),
        c = r(50549),
        d = r(76169);
      const h = {
        'web-scene/operational-layers': {
          ArcGISFeatureLayer: !0,
          ArcGISImageServiceLayer: !0,
          ArcGISMapServiceLayer: !0,
          ArcGISSceneServiceLayer: !0,
          ArcGISTiledElevationServiceLayer: !0,
          ArcGISTiledImageServiceLayer: !0,
          ArcGISTiledMapServiceLayer: !0,
          BuildingSceneLayer: !0,
          GroupLayer: !0,
          IntegratedMeshLayer: !0,
          OGCFeatureLayer: !0,
          PointCloudLayer: !0,
          WebTiledLayer: !0,
          CSV: !0,
          GeoJSON: !0,
          VectorTileLayer: !0,
          WFS: !0,
          WMS: !0,
          KML: !0,
          RasterDataLayer: !0,
          Voxel: !0,
        },
        'web-scene/basemap': {
          ArcGISTiledImageServiceLayer: !0,
          ArcGISTiledMapServiceLayer: !0,
          WebTiledLayer: !0,
          OpenStreetMap: !0,
          VectorTileLayer: !0,
          ArcGISImageServiceLayer: !0,
          WMS: !0,
          ArcGISMapServiceLayer: !0,
        },
        'web-scene/ground': {
          ArcGISTiledElevationServiceLayer: !0,
          RasterDataElevationLayer: !0,
        },
        'web-map/operational-layers': {
          ArcGISFeatureLayer: !0,
          ArcGISImageServiceLayer: !0,
          ArcGISImageServiceVectorLayer: !0,
          ArcGISMapServiceLayer: !0,
          ArcGISStreamLayer: !0,
          ArcGISTiledImageServiceLayer: !0,
          ArcGISTiledMapServiceLayer: !0,
          BingMapsAerial: !0,
          BingMapsHybrid: !0,
          BingMapsRoad: !0,
          CSV: !0,
          GeoRSS: !0,
          GeoJSON: !0,
          GroupLayer: !0,
          KML: !0,
          OGCFeatureLayer: !0,
          SubtypeGroupLayer: !0,
          VectorTileLayer: !0,
          WFS: !0,
          WMS: !0,
          WebTiledLayer: !0,
        },
        'web-map/basemap': {
          ArcGISImageServiceLayer: !0,
          ArcGISImageServiceVectorLayer: !0,
          ArcGISMapServiceLayer: !0,
          ArcGISTiledImageServiceLayer: !0,
          ArcGISTiledMapServiceLayer: !0,
          OpenStreetMap: !0,
          VectorTileLayer: !0,
          WMS: !0,
          WebTiledLayer: !0,
          BingMapsAerial: !0,
          BingMapsRoad: !0,
          BingMapsHybrid: !0,
        },
        'web-map/tables': { ArcGISFeatureLayer: !0 },
        'portal-item/operational-layers': {
          ArcGISFeatureLayer: !0,
          ArcGISSceneServiceLayer: !0,
          PointCloudLayer: !0,
          BuildingSceneLayer: !0,
          IntegratedMeshLayer: !0,
        },
      };
      var u = r(21506);
      const p = (e) => {
        let t = class extends e {
          constructor() {
            super(...arguments), (this.title = null);
          }
          writeListMode(e, t, r, o) {
            ((o && 'ground' === o.layerContainerType) ||
              (e && (0, d.d)(this, r, {}, o))) &&
              (t[r] = e);
          }
          writeOperationalLayerType(e, t, r, o) {
            !e || (o && 'tables' === o.layerContainerType) || (t.layerType = e);
          }
          writeTitle(e, t) {
            t.title = e || 'Layer';
          }
          read(e, t) {
            t && (t.layer = this),
              (0, c.$)(this, e, (t) => super.read(e, t), t);
          }
          write(e, t) {
            if (null != t && t.origin) {
              const e = `${t.origin}/${
                  t.layerContainerType || 'operational-layers'
                }`,
                o = h[e];
              let n = o && o[this.operationalLayerType];
              var r;
              if (
                ('ArcGISTiledElevationServiceLayer' ===
                  this.operationalLayerType &&
                  'web-scene/operational-layers' === e &&
                  (n = !1),
                !n)
              )
                return (
                  null == (r = t.messages) ||
                    r.push(
                      new i.Z(
                        'layer:unsupported',
                        `Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${e}'`,
                        { layer: this },
                      ),
                    ),
                  null
                );
            }
            const o = super.write(e, { ...t, layer: this }),
              s =
                !!t &&
                !!t.messages &&
                !!t.messages.filter(
                  (e) =>
                    e instanceof i.Z &&
                    'web-document-write:property-required' === e.name,
                ).length;
            var a;
            return (0, n.jc)(null == o ? void 0 : o.url)
              ? (null == t ||
                  null == (a = t.messages) ||
                  a.push(
                    new i.Z(
                      'layer:invalid-url',
                      `Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' using a Blob URL cannot be written to web scenes and web maps`,
                      { layer: this },
                    ),
                  ),
                null)
              : !this.url && s
              ? null
              : o;
          }
          beforeSave() {}
        };
        return (
          (0, o._)(
            [
              (0, s.Cb)({
                type: String,
                json: {
                  write: { ignoreOrigin: !0 },
                  origins: {
                    'web-scene': {
                      write: { isRequired: !0, ignoreOrigin: !0 },
                    },
                    'portal-item': { write: !1 },
                  },
                },
              }),
            ],
            t.prototype,
            'id',
            void 0,
          ),
          (0, o._)(
            [
              (0, s.Cb)({
                json: {
                  write: { ignoreOrigin: !0 },
                  origins: { 'web-map': { read: !1, write: !1 } },
                },
              }),
            ],
            t.prototype,
            'listMode',
            void 0,
          ),
          (0, o._)([(0, l.c)('listMode')], t.prototype, 'writeListMode', null),
          (0, o._)(
            [
              (0, s.Cb)({
                type: String,
                readOnly: !0,
                json: {
                  read: !1,
                  write: { target: 'layerType', ignoreOrigin: !0 },
                  origins: { 'portal-item': { write: !1 } },
                },
              }),
            ],
            t.prototype,
            'operationalLayerType',
            void 0,
          ),
          (0, o._)(
            [(0, l.c)('operationalLayerType')],
            t.prototype,
            'writeOperationalLayerType',
            null,
          ),
          (0, o._)([(0, s.Cb)(u.Oh)], t.prototype, 'opacity', void 0),
          (0, o._)(
            [
              (0, s.Cb)({
                type: String,
                json: {
                  write: { ignoreOrigin: !0, writerEnsuresNonNull: !0 },
                  origins: {
                    'web-scene': {
                      write: {
                        isRequired: !0,
                        ignoreOrigin: !0,
                        writerEnsuresNonNull: !0,
                      },
                    },
                    'portal-item': { write: !1 },
                  },
                },
                value: 'Layer',
              }),
            ],
            t.prototype,
            'title',
            void 0,
          ),
          (0, o._)([(0, l.c)('title')], t.prototype, 'writeTitle', null),
          (0, o._)(
            [(0, s.Cb)({ type: Boolean, json: { name: 'visibility' } })],
            t.prototype,
            'visible',
            void 0,
          ),
          (t = (0, o._)([(0, a.j)('esri.layers.mixins.OperationalLayer')], t)),
          t
        );
      };
    },
    21506: (e, t, r) => {
      r.d(t, {
        qG: () => b,
        PV: () => m,
        id: () => S,
        iR: () => p,
        rn: () => g,
        u1: () => L,
        rO: () => k,
        Oh: () => v,
        bT: () => w,
        C_: () => u,
        Lx: () => f,
        vg: () => _,
        YI: () => h,
        HQ: () => y,
      });
      var o = r(92835),
        i = r(6570),
        n = r(82971),
        s = r(25929),
        a = r(70586),
        l = (r(95330), r(35463)),
        c = r(20682),
        d = r(65242);
      const h = {
          type: Boolean,
          value: !0,
          json: {
            origins: {
              service: { read: !1, write: !1 },
              'web-map': { read: !1, write: !1 },
            },
            name: 'screenSizePerspective',
            write: !0,
          },
        },
        u = {
          type: Boolean,
          value: !0,
          json: {
            name: 'disablePopup',
            read: { reader: (e, t) => !t.disablePopup },
            write: {
              enabled: !0,
              writer(e, t, r) {
                t[r] = !e;
              },
            },
          },
        },
        p = {
          type: Boolean,
          value: !0,
          json: { name: 'showLabels', write: !0 },
        },
        y = {
          type: String,
          json: {
            origins: { 'portal-item': { write: !1 } },
            write: { isRequired: !0, ignoreOrigin: !0, writer: s.w },
          },
        },
        g = {
          type: Boolean,
          value: !0,
          json: {
            origins: { service: { read: { enabled: !1 } } },
            name: 'showLegend',
            write: !0,
          },
        },
        m = {
          value: null,
          type: c.Z,
          json: {
            origins: { service: { name: 'elevationInfo', write: !0 } },
            name: 'layerDefinition.elevationInfo',
            write: !0,
          },
        };
      function f(e) {
        return {
          type: e,
          readOnly: !0,
          json: { origins: { service: { read: !0 } }, read: !1 },
        };
      }
      const v = {
          type: Number,
          json: {
            origins: {
              'web-document': { write: !0, read: !0 },
              'portal-item': { write: !0 },
            },
          },
        },
        w = {
          ...v,
          json: {
            ...v.json,
            origins: {
              'web-document': {
                ...v.json.origins['web-document'],
                write: {
                  enabled: !0,
                  target: {
                    opacity: { type: Number },
                    'layerDefinition.drawingInfo.transparency': {
                      type: Number,
                    },
                  },
                },
              },
            },
            read: {
              source: [
                'layerDefinition.drawingInfo.transparency',
                'drawingInfo.transparency',
              ],
              reader: (e, t, r) =>
                (r && 'service' !== r.origin) ||
                !t.drawingInfo ||
                void 0 === t.drawingInfo.transparency
                  ? t.layerDefinition &&
                    t.layerDefinition.drawingInfo &&
                    void 0 !== t.layerDefinition.drawingInfo.transparency
                    ? (0, d.b)(t.layerDefinition.drawingInfo.transparency)
                    : void 0
                  : (0, d.b)(t.drawingInfo.transparency),
            },
          },
        },
        b = {
          type: o.Z,
          readOnly: !0,
          get() {
            var e, t;
            if (null == (e = this.layer) || !e.timeInfo) return null;
            const {
                datesInUnknownTimezone: r,
                timeOffset: i,
                useViewTime: n,
              } = this.layer,
              s = null == (t = this.view) ? void 0 : t.timeExtent;
            let c = this.layer.timeExtent;
            r &&
              (c = (function (e) {
                if (!e) return e;
                const { start: t, end: r } = e;
                return new o.Z({
                  start: (0, a.pC)(t)
                    ? (0, l.Nm)(t, t.getTimezoneOffset(), 'minutes')
                    : t,
                  end: (0, a.pC)(r)
                    ? (0, l.Nm)(r, r.getTimezoneOffset(), 'minutes')
                    : r,
                });
              })(c));
            let d = n ? (s && c ? s.intersection(c) : s || c) : c;
            if (!d || d.isEmpty || d.isAllTime) return d;
            i && (d = d.offset(-i.value, i.unit)),
              r &&
                (d = (function (e) {
                  if (!e) return e;
                  const { start: t, end: r } = e;
                  return new o.Z({
                    start: (0, a.pC)(t)
                      ? (0, l.Nm)(t, -t.getTimezoneOffset(), 'minutes')
                      : t,
                    end: (0, a.pC)(r)
                      ? (0, l.Nm)(r, -r.getTimezoneOffset(), 'minutes')
                      : r,
                  });
                })(d));
            const h = this._get('timeExtent');
            return d.equals(h) ? h : d;
          },
        },
        _ = {
          type: i.Z,
          readOnly: !0,
          json: {
            origins: {
              service: {
                read: {
                  source: ['fullExtent', 'spatialReference'],
                  reader: (e, t) => {
                    const r = i.Z.fromJSON(e);
                    return (
                      null != t.spatialReference &&
                        'object' == typeof t.spatialReference &&
                        (r.spatialReference = n.Z.fromJSON(t.spatialReference)),
                      r
                    );
                  },
                },
              },
            },
            read: !1,
          },
        },
        S = {
          type: String,
          json: {
            origins: { service: { read: !1 }, 'portal-item': { read: !1 } },
          },
        },
        k = {
          type: Number,
          json: {
            origins: { service: { write: { enabled: !1 } } },
            read: { source: 'layerDefinition.minScale' },
            write: { target: 'layerDefinition.minScale' },
          },
        },
        L = {
          type: Number,
          json: {
            origins: { service: { write: { enabled: !1 } } },
            read: { source: 'layerDefinition.maxScale' },
            write: { target: 'layerDefinition.maxScale' },
          },
        };
    },
    20682: (e, t, r) => {
      r.d(t, { Z: () => _ });
      var o,
        i = r(43697),
        n = r(35454),
        s = r(96674),
        a = r(70586),
        l = r(5600),
        c = (r(67676), r(80442), r(75215), r(71715)),
        d = r(52011),
        h = r(30556),
        u = r(35671);
      let p = (o = class extends s.wq {
        async collectRequiredFields(e, t) {
          return (0, u.io)(e, t, this.expression);
        }
        clone() {
          return new o({ expression: this.expression, title: this.title });
        }
      });
      (0, i._)(
        [(0, l.Cb)({ type: String, json: { write: !0 } })],
        p.prototype,
        'expression',
        void 0,
      ),
        (0, i._)(
          [(0, l.Cb)({ type: String, json: { write: !0 } })],
          p.prototype,
          'title',
          void 0,
        ),
        (p = o =
          (0, i._)([(0, d.j)('esri.layers.support.FeatureExpressionInfo')], p));
      const y = p;
      var g = r(99282);
      const m = (function () {
        const e = Object.keys(g.a);
        return e.sort(), e;
      })();
      var f;
      const v = (0, n.w)()({
          onTheGround: 'on-the-ground',
          relativeToGround: 'relative-to-ground',
          relativeToScene: 'relative-to-scene',
          absoluteHeight: 'absolute-height',
        }),
        w = new n.X({
          foot: 'feet',
          kilometer: 'kilometers',
          meter: 'meters',
          mile: 'miles',
          'us-foot': 'us-feet',
          yard: 'yards',
        });
      let b = (f = class extends s.wq {
        constructor() {
          super(...arguments), (this.offset = null);
        }
        readFeatureExpressionInfo(e, t) {
          return null != e
            ? e
            : t.featureExpression && 0 === t.featureExpression.value
            ? { expression: '0' }
            : void 0;
        }
        writeFeatureExpressionInfo(e, t, r, o) {
          (t[r] = e.write({}, o)),
            '0' === e.expression && (t.featureExpression = { value: 0 });
        }
        get mode() {
          const { offset: e, featureExpressionInfo: t } = this;
          return this._isOverridden('mode')
            ? this._get('mode')
            : (0, a.pC)(e) || t
            ? 'relative-to-ground'
            : 'on-the-ground';
        }
        set mode(e) {
          this._override('mode', e);
        }
        set unit(e) {
          this._set('unit', e);
        }
        write(e, t) {
          return this.offset ||
            this.mode ||
            this.featureExpressionInfo ||
            this.unit
            ? super.write(e, t)
            : null;
        }
        clone() {
          return new f({
            mode: this.mode,
            offset: this.offset,
            featureExpressionInfo: this.featureExpressionInfo
              ? this.featureExpressionInfo.clone()
              : void 0,
            unit: this.unit,
          });
        }
      });
      (0, i._)(
        [(0, l.Cb)({ type: y, json: { write: !0 } })],
        b.prototype,
        'featureExpressionInfo',
        void 0,
      ),
        (0, i._)(
          [
            (0, c.r)('featureExpressionInfo', [
              'featureExpressionInfo',
              'featureExpression',
            ]),
          ],
          b.prototype,
          'readFeatureExpressionInfo',
          null,
        ),
        (0, i._)(
          [
            (0, h.c)('featureExpressionInfo', {
              featureExpressionInfo: { type: y },
              'featureExpression.value': { type: [0] },
            }),
          ],
          b.prototype,
          'writeFeatureExpressionInfo',
          null,
        ),
        (0, i._)(
          [
            (0, l.Cb)({
              type: v.apiValues,
              nonNullable: !0,
              json: {
                type: v.jsonValues,
                read: v.read,
                write: { writer: v.write, isRequired: !0 },
              },
            }),
          ],
          b.prototype,
          'mode',
          null,
        ),
        (0, i._)(
          [(0, l.Cb)({ type: Number, json: { write: !0 } })],
          b.prototype,
          'offset',
          void 0,
        ),
        (0, i._)(
          [
            (0, l.Cb)({
              type: m,
              json: { type: String, read: w.read, write: w.write },
            }),
          ],
          b.prototype,
          'unit',
          null,
        ),
        (b = f = (0, i._)([(0, d.j)('esri.layers.support.ElevationInfo')], b));
      const _ = b;
    },
    65242: (e, t, r) => {
      r.d(t, { a: () => i, b: () => n });
      var o = r(75215);
      function i(e) {
        const t = (0, o.vU)(100 * (1 - e));
        return Math.max(0, Math.min(t, 100));
      }
      function n(e) {
        const t = 1 - e / 100;
        return Math.max(0, Math.min(t, 1));
      }
    },
  },
]);
