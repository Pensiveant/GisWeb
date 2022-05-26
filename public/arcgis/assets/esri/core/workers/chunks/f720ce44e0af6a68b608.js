'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [9032, 4889],
  {
    78346: (e, t, r) => {
      r.d(t, { bA: () => A });
      var i = r(20102),
        n = r(80442),
        s = r(95330),
        a = r(80903),
        o = r(25045),
        l = r(40330),
        c = r(92604),
        u = r(94362),
        h = r(99880),
        d = r(68773),
        f = (r(2587), r(17452));
      const p = {};
      function m(e) {
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
          e.baseUrl || (r.baseUrl = p.baseUrl),
          null == (t = p.packages) ||
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
      class x {
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
            let i = await o.default.loadWorker(e);
            i || (i = await import(e));
            const n = o.default.connect(i);
            this._workerPostMessage({ type: u.Cs.OPENED, jobId: r, data: n });
          }
        }
      }
      var w = r(70171),
        b = r(17202);
      const v = c.Z.getLogger('esri.core.workers'),
        { HANDSHAKE: I } = u.Cs;
      let _, C;
      const S =
        'Failed to create Worker. Fallback to execute module in main thread';
      async function k(e) {
        return new Promise((t) => {
          function r(n) {
            const s = (0, u.QM)(n);
            s &&
              s.type === I &&
              (e.removeEventListener('message', r),
              e.removeEventListener('error', i),
              t(e));
          }
          function i(t) {
            t.preventDefault(),
              e.removeEventListener('message', r),
              e.removeEventListener('error', i),
              v.warn(
                'Failed to create Worker. Fallback to execute module in main thread',
                t,
              ),
              (e = new x()).addEventListener('message', r),
              e.addEventListener('error', i);
          }
          e.addEventListener('message', r), e.addEventListener('error', i);
        });
      }
      let R = 0;
      const T = c.Z.getLogger('esri.core.workers'),
        { ABORT: P, INVOKE: M, OPEN: O, OPENED: E, RESPONSE: F } = u.Cs;
      class B {
        constructor(e, t) {
          (this._outJobs = new Map()),
            (this._inJobs = new Map()),
            (this.worker = e),
            (this.id = t),
            e.addEventListener('message', this._onMessage.bind(this)),
            e.addEventListener('error', (e) => {
              e.preventDefault(), T.error(e);
            });
        }
        static async create(e) {
          const t = await (async function () {
            if (!(0, n.Z)('esri-workers') || ((0, n.Z)('mozilla'), 0))
              return k(new x());
            if (!_ && !C)
              try {
                const e =
                  'let globalId=0;const outgoing=new Map,configuration=JSON.parse("{CONFIGURATION}");self.esriConfig=configuration.esriConfig;const workerPath=self.esriConfig.workers.workerPath,HANDSHAKE=0,OPEN=1,OPENED=2,RESPONSE=3,INVOKE=4,ABORT=5;function createAbortError(){const e=new Error("Aborted");return e.name="AbortError",e}function receiveMessage(e){return e&&e.data?"string"==typeof e.data?JSON.parse(e.data):e.data:null}function invokeStaticMessage(e,o,r){const t=r&&r.signal,n=globalId++;return new Promise(((r,i)=>{if(t){if(t.aborted)return i(createAbortError());t.addEventListener("abort",(()=>{outgoing.get(n)&&(outgoing.delete(n),self.postMessage({type:5,jobId:n}),i(createAbortError()))}))}outgoing.set(n,{resolve:r,reject:i}),self.postMessage({type:4,jobId:n,methodName:e,abortable:null!=t,data:o})}))}let workerRevisionChecked=!1;function checkWorkerRevision(e){if(!workerRevisionChecked&&e.kernelInfo){workerRevisionChecked=!0;const{revision:o,buildDate:r,version:t}=configuration.kernelInfo,{revision:n,buildDate:i,version:s}=e.kernelInfo;o!==n&&console.warn(`[esri.core.workers] Version mismatch detected between ArcGIS API for JavaScript and assets:\\nAPI version: ${t} [Date: ${r}, Revision: ${o.slice(0,8)}]\nAssets version: ${s} [Date: ${i}, Revision: ${n.slice(0,8)}]`)}}function messageHandler(e){const o=receiveMessage(e);if(!o)return;const r=o.jobId;switch(o.type){case 1:let e;function t(o){const t=e.connect(o);self.postMessage({type:2,jobId:r,data:t},[t])}"function"==typeof define&&define.amd?require([workerPath],(r=>{e=r.default||r,checkWorkerRevision(e),e.loadWorker(o.modulePath).then((e=>e||new Promise((e=>{require([o.modulePath],e)})))).then(t)})):"System"in self&&"function"==typeof System.import?System.import(workerPath).then((r=>(e=r.default,checkWorkerRevision(e),e.loadWorker(o.modulePath)))).then((e=>e||System.import(o.modulePath))).then(t):esriConfig.workers.useDynamicImport?import(workerPath).then((r=>{e=r.default||r,checkWorkerRevision(e),e.loadWorker(o.modulePath).then((e=>e||import(o.modulePath))).then(t)})):(self.RemoteClient||importScripts(workerPath),e=self.RemoteClient.default||self.RemoteClient,checkWorkerRevision(e),e.loadWorker(o.modulePath).then(t));break;case 3:if(outgoing.has(r)){const e=outgoing.get(r);outgoing.delete(r),o.error?e.reject(JSON.parse(o.error)):e.resolve(o.data)}}}self.dojoConfig=configuration.loaderConfig,esriConfig.workers.loaderUrl&&(self.importScripts(esriConfig.workers.loaderUrl),"function"==typeof require&&"function"==typeof require.config&&require.config(configuration.loaderConfig)),self.addEventListener("message",messageHandler),self.postMessage({type:0});'.replace(
                    '"{CONFIGURATION}"',
                    `'${(function () {
                      let e;
                      if (null != d.Z.default) {
                        const t = { ...d.Z };
                        delete t.default, (e = JSON.parse(JSON.stringify(t)));
                      } else e = JSON.parse(JSON.stringify(d.Z));
                      (e.assetsPath = (0, f.hF)(e.assetsPath)),
                        (e.request.interceptors = []),
                        (e.log.interceptors = []),
                        (e.locale = (0, w.Kd)()),
                        (e.has = {
                          'esri-csp-restrictions': (0, n.Z)(
                            'esri-csp-restrictions',
                          ),
                          'esri-2d-debug': !1,
                          'esri-2d-update-debug': (0, n.Z)(
                            'esri-2d-update-debug',
                          ),
                          'esri-2d-query-centroid-enabled': (0, n.Z)(
                            'esri-2d-query-centroid-enabled',
                          ),
                          'featurelayer-pbf': (0, n.Z)('featurelayer-pbf'),
                          'featurelayer-simplify-thresholds': (0, n.Z)(
                            'featurelayer-simplify-thresholds',
                          ),
                          'featurelayer-simplify-payload-size-factors': (0,
                          n.Z)('featurelayer-simplify-payload-size-factors'),
                          'featurelayer-simplify-mobile-factor': (0, n.Z)(
                            'featurelayer-simplify-mobile-factor',
                          ),
                          'esri-atomics': (0, n.Z)('esri-atomics'),
                          'esri-shared-array-buffer': (0, n.Z)(
                            'esri-shared-array-buffer',
                          ),
                          'esri-tiles-debug': (0, n.Z)('esri-tiles-debug'),
                          'esri-workers-arraybuffer-transfer': (0, n.Z)(
                            'esri-workers-arraybuffer-transfer',
                          ),
                          'feature-polyline-generalization-factor': (0, n.Z)(
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
                              (0, h.V)('esri/core/workers/RemoteClient.js'),
                            )),
                        (e.workers.useDynamicImport = !1);
                      const t = d.Z.workers.loaderConfig,
                        r = m({
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
                        i = { version: l.i8, buildDate: b.r, revision: b.$ };
                      return JSON.stringify({
                        esriConfig: e,
                        loaderConfig: r,
                        kernelInfo: i,
                      });
                    })()}'`,
                  );
                _ = URL.createObjectURL(
                  new Blob([e], { type: 'text/javascript' }),
                );
              } catch (e) {
                C = e || {};
              }
            let e;
            if (_)
              try {
                e = new Worker(_, { name: 'esri-worker-' + R++ });
              } catch (t) {
                v.warn(S, C), (e = new x());
              }
            else v.warn(S, C), (e = new x());
            return k(e);
          })();
          return new B(t, e);
        }
        terminate() {
          this.worker.terminate();
        }
        async open(e, t = {}) {
          const { signal: r } = t,
            i = (0, u.jt)();
          return new Promise((t, n) => {
            const a = {
              resolve: t,
              reject: n,
              abortHandle: (0, s.$F)(r, () => {
                this._outJobs.delete(i), this._post({ type: P, jobId: i });
              }),
            };
            this._outJobs.set(i, a),
              this._post({ type: O, jobId: i, modulePath: e });
          });
        }
        _onMessage(e) {
          const t = (0, u.QM)(e);
          if (t)
            switch (t.type) {
              case E:
                this._onOpenedMessage(t);
                break;
              case F:
                this._onResponseMessage(t);
                break;
              case P:
                this._onAbortMessage(t);
                break;
              case M:
                this._onInvokeMessage(t);
            }
        }
        _onAbortMessage(e) {
          const t = this._inJobs,
            r = e.jobId,
            i = t.get(r);
          i && (i.controller && i.controller.abort(), t.delete(r));
        }
        _onInvokeMessage(e) {
          const { methodName: t, jobId: r, data: i, abortable: n } = e,
            a = n ? new AbortController() : null,
            o = this._inJobs,
            c = l.Nv[t];
          let h;
          try {
            if ('function' != typeof c)
              throw new TypeError(`${t} is not a function`);
            h = c.call(null, i, { signal: a ? a.signal : null });
          } catch (e) {
            return void this._post({ type: F, jobId: r, error: (0, u.AB)(e) });
          }
          (0, s.y8)(h)
            ? (o.set(r, { controller: a, promise: h }),
              h.then(
                (e) => {
                  o.has(r) &&
                    (o.delete(r), this._post({ type: F, jobId: r }, e));
                },
                (e) => {
                  o.has(r) &&
                    (o.delete(r),
                    e || (e = { message: 'Error encountered at method' + t }),
                    (0, s.D_)(e) ||
                      this._post({
                        type: F,
                        jobId: r,
                        error: (0, u.AB)(
                          e || { message: `Error encountered at method ${t}` },
                        ),
                      }));
                },
              ))
            : this._post({ type: F, jobId: r }, h);
        }
        _onOpenedMessage(e) {
          var t;
          const { jobId: r, data: i } = e,
            n = this._outJobs.get(r);
          n &&
            (this._outJobs.delete(r),
            null == (t = n.abortHandle) || t.remove(),
            n.resolve(i));
        }
        _onResponseMessage(e) {
          var t;
          const { jobId: r, error: n, data: s } = e,
            a = this._outJobs.get(r);
          a &&
            (this._outJobs.delete(r),
            null == (t = a.abortHandle) || t.remove(),
            n ? a.reject(i.Z.fromJSON(JSON.parse(n))) : a.resolve(s));
        }
        _post(e, t, r) {
          return (0, u.oi)(this.worker, e, t, r);
        }
      }
      let D = (0, n.Z)('esri-workers-debug')
        ? 1
        : (0, n.Z)('host-browser')
        ? navigator.hardwareConcurrency - 1
        : 0;
      D ||
        (D =
          ((0, n.Z)('safari') && (0, n.Z)('mac')) || (0, n.Z)('trident')
            ? 7
            : 2);
      let N = 0;
      const Z = [];
      async function L(e, t) {
        const r = new a.Z();
        return await r.open(e, t), r;
      }
      async function A(e, t = {}) {
        if ('string' != typeof e)
          throw new i.Z('workers:undefined-module', 'modulePath is missing');
        let r = t.strategy || 'distributed';
        if (
          ((0, n.Z)('host-webworker') &&
            !(0, n.Z)('esri-workers') &&
            (r = 'local'),
          'local' === r)
        ) {
          let r = await o.default.loadWorker(e);
          r || (r = await import(e)), (0, s.k_)(t.signal);
          const i = t.client || r;
          return L([o.default.connect(r)], { ...t, client: i });
        }
        if (
          (await (async function () {
            if (z) return z;
            H = new AbortController();
            const e = [];
            for (let t = 0; t < D; t++) {
              const r = B.create(t).then((e) => ((Z[t] = e), e));
              e.push(r);
            }
            return (z = Promise.all(e)), z;
          })(),
          (0, s.k_)(t.signal),
          'dedicated' === r)
        ) {
          const r = N++ % D;
          return L([await Z[r].open(e, t)], t);
        }
        if (t.maxNumWorkers && t.maxNumWorkers > 0) {
          const r = Math.min(t.maxNumWorkers, D);
          if (r < D) {
            const i = new Array(r);
            for (let n = 0; n < r; ++n) {
              const r = N++ % D;
              i[n] = Z[r].open(e, t);
            }
            return L(i, t);
          }
        }
        return L(
          Z.map((r) => r.open(e, t)),
          t,
        );
      }
      let H,
        z = null;
    },
    2587: (e, t, r) => {
      r(90344), r(18848), r(940), r(70171);
      var i = r(94443),
        n = r(3172),
        s = r(20102),
        a = r(70586);
      async function o(e) {
        if ((0, a.pC)(c.fetchBundleAsset)) return c.fetchBundleAsset(e);
        const t = await (0, n.default)(e, { responseType: 'text' });
        return JSON.parse(t.data);
      }
      class l {
        constructor({
          base: e = '',
          pattern: t,
          location: r = new URL(window.location.href),
        }) {
          let i;
          (i =
            'string' == typeof r
              ? (e) => new URL(e, new URL(r, window.location.href)).href
              : r instanceof URL
              ? (e) => new URL(e, r).href
              : r),
            (this.pattern = 'string' == typeof t ? new RegExp(`^${t}`) : t),
            (this.getAssetUrl = i),
            (e = e ? (e.endsWith('/') ? e : e + '/') : ''),
            (this.matcher = new RegExp(`^${e}(?:(.*)/)?(.*)$`));
        }
        fetchMessageBundle(e, t) {
          return (async function (e, t, r, n) {
            const a = t.exec(r);
            if (!a)
              throw new s.Z(
                'esri-intl:invalid-bundle',
                `Bundle id "${r}" is not compatible with the pattern "${t}"`,
              );
            const l = a[1] ? `${a[1]}/` : '',
              c = a[2],
              u = (0, i.Su)(n),
              h = `${l}${c}.json`,
              d = u ? `${l}${c}_${u}.json` : h;
            let f;
            try {
              f = await o(e(d));
            } catch (t) {
              if (d === h)
                throw new s.Z(
                  'intl:unknown-bundle',
                  `Bundle "${r}" cannot be loaded`,
                  { error: t },
                );
              try {
                f = await o(e(h));
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
      }
      const c = {};
      var u,
        h = r(99880);
      (0, i.tz)(((u = { pattern: 'esri/', location: h.V }), new l(u)));
    },
    94443: (e, t, r) => {
      r.d(t, { ME: () => f, Su: () => p, tz: () => d });
      var i = r(20102),
        n = r(95330),
        s = r(70171);
      const a = /^([a-z]{2})(?:[-_]([A-Za-z]{2}))?$/,
        o = {
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
        return null != (t = o[e]) && t;
      }
      const c = [],
        u = new Map();
      function h(e) {
        for (const t of u.keys()) m(e.pattern, t) && u.delete(t);
      }
      function d(e) {
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
      async function f(e) {
        const t = (0, s.Kd)();
        u.has(e) ||
          u.set(
            e,
            (async function (e, t) {
              const r = [];
              for (const i of c)
                if (m(i.pattern, e))
                  try {
                    return await i.fetchMessageBundle(e, t);
                  } catch (e) {
                    r.push(e);
                  }
              if (r.length)
                throw new i.Z(
                  'intl:message-bundle-error',
                  `Errors occurred while loading "${e}"`,
                  { errors: r },
                );
              throw new i.Z(
                'intl:no-message-bundle-loader',
                `No loader found for message bundle "${e}"`,
              );
            })(e, t),
          );
        const r = u.get(e);
        return await g.add(r), r;
      }
      function p(e) {
        if (!a.test(e)) return null;
        const [, t, r] = a.exec(e),
          i = t + (r ? '-' + r.toUpperCase() : '');
        return l(i) ? i : l(t) ? t : null;
      }
      function m(e, t) {
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
          this._numLoading++, this._dfd || (this._dfd = (0, n.dD)());
        }
        _decrease() {
          (this._numLoading = Math.max(this._numLoading - 1, 0)),
            this._dfd &&
              0 === this._numLoading &&
              (this._dfd.resolve(), (this._dfd = null));
        }
      })();
    },
    940: (e, t, r) => {
      r.d(t, { n: () => c });
      var i = r(92604),
        n = r(78286),
        s = r(19153),
        a = r(90344),
        o = r(18848);
      const l = i.Z.getLogger('esri.intl');
      function c(e, t, r = {}) {
        const { format: i = {} } = r;
        return (0, s.gx)(e, (e) =>
          (function (e, t, r) {
            let i, s;
            const a = e.indexOf(':');
            if (
              (-1 === a
                ? (i = e.trim())
                : ((i = e.slice(0, a).trim()), (s = e.slice(a + 1).trim())),
              !i)
            )
              return '';
            const o = (0, n.hS)(i, t);
            if (null == o) return '';
            const l = r[s] || r[i];
            return l ? u(o, l) : s ? h(o, s) : d(o);
          })(e, t, i),
        );
      }
      function u(e, t) {
        switch (t.type) {
          case 'date':
            return (0, a.p6)(e, t.intlOptions);
          case 'number':
            return (0, o.uf)(e, t.intlOptions);
          default:
            return l.warn('missing format descriptor for key {key}'), d(e);
        }
      }
      function h(e, t) {
        switch (t.toLowerCase()) {
          case 'dateformat':
            return (0, a.p6)(e);
          case 'numberformat':
            return (0, o.uf)(e);
          default:
            return (
              l.warn(`inline format is unsupported since 4.12: ${t}`),
              /^(dateformat|datestring)/i.test(t)
                ? (0, a.p6)(e)
                : /^numberformat/i.test(t)
                ? (0, o.uf)(e)
                : d(e)
            );
        }
      }
      function d(e) {
        switch (typeof e) {
          case 'string':
            return e;
          case 'number':
            return (0, o.uf)(e);
          case 'boolean':
            return '' + e;
          default:
            return e instanceof Date ? (0, a.p6)(e) : '';
        }
      }
    },
    52294: (e, t, r) => {
      r.r(t), r.d(t, { default: () => $e });
      var i = r(43697),
        n = r(51773),
        s = r(30030),
        a = r(20102),
        o = r(70586),
        l = r(16453),
        c = r(95330),
        u = r(5600),
        h = (r(67676), r(80442), r(75215)),
        d = r(36030),
        f = r(71715),
        p = r(52011),
        m = r(29600),
        g = r(71612),
        y = r(17017),
        x = (r(66577), r(3172)),
        w = r(92604),
        b = r(44422),
        v = r(8744),
        I = r(66677),
        _ = r(21506),
        C = r(35956),
        S = r(88281),
        k = r(11145),
        R = r(80676),
        T = r(67058),
        P = r(91219),
        M = r(23808),
        O = r(6570),
        E = r(82971);
      const F = w.Z.getLogger('esri.layers.mixins.ImageryTileMixin'),
        B = (e) => {
          let t = class extends e {
            constructor() {
              super(...arguments),
                (this._rasterJobHandler = {
                  instance: null,
                  refCount: 0,
                  connectionPromise: null,
                }),
                (this.bandIds = null),
                (this.copyright = null),
                (this.fullExtent = null),
                (this.interpolation = 'nearest'),
                (this.multidimensionalDefinition = null),
                (this.raster = null),
                (this.rasterInfo = null),
                (this.sourceJSON = null),
                (this.spatialReference = null),
                (this.tileInfo = null),
                (this.symbolizer = null);
            }
            set url(e) {
              this._set('url', (0, I.Nm)(e, F));
            }
            set renderer(e) {
              this._set('renderer', e), this.updateRenderer();
            }
            async convertVectorFieldData(e, t) {
              if ((0, o.Wi)(e)) return null;
              const r = this._rasterJobHandler.instance,
                i = this.rasterInfo.dataType;
              return r
                ? r.convertVectorFieldData({ pixelBlock: e, dataType: i }, t)
                : (0, R.KC)(e, i);
            }
            async createStreamlinesMesh(e, t) {
              const r = this._rasterJobHandler.instance;
              return r
                ? r.createStreamlinesMesh(e, t)
                : (0, M.z_)(
                    e.rendererSettings,
                    e.flowData,
                    (0, o.pC)(t.signal)
                      ? t.signal
                      : new AbortController().signal,
                  );
            }
            normalizeRasterFetchOptions(e) {
              const { multidimensionalInfo: t } = this.rasterInfo;
              if ((0, o.Wi)(t)) return e;
              let r =
                e.multidimensionalDefinition || this.multidimensionalDefinition;
              (!(0, o.Wi)(r) && r.length) || (r = this._getDefaultSlice());
              const i = e.timeExtent || this.timeExtent;
              if (
                (0, o.pC)(r) &&
                (0, o.pC)(i) &&
                ((0, o.pC)(i.start) || (0, o.pC)(i.end))
              ) {
                var n, s;
                r = r.map((e) => e.clone());
                const a =
                    null ==
                      (n = t.variables.find(
                        ({ name: e }) => e === r[0].variableName,
                      )) || null == (s = n.dimensions)
                      ? void 0
                      : s.find(({ name: e }) => 'StdTime' === e),
                  l = r.find(({ dimensionName: e }) => 'StdTime' === e);
                if (!a || !l) return { ...e, multidimensionalDefinition: null };
                const { start: c, end: u } = i,
                  h = (0, o.Wi)(c) ? null : c.getTime(),
                  d = (0, o.Wi)(u) ? null : u.getTime(),
                  f = null != h ? h : d,
                  p = null != d ? d : h;
                if ((0, o.pC)(a.values)) {
                  const e = a.values.filter((e) => {
                    if (Array.isArray(e)) {
                      if (f === p) return e[0] <= f && e[1] >= f;
                      const t =
                          (e[0] <= f && e[1] > f) || (e[0] < p && e[1] >= p),
                        r = (e[0] >= f && e[1] <= p) || (e[0] < f && e[1] > p);
                      return t || r;
                    }
                    return f === p ? e === f : e >= f && e <= p;
                  });
                  if (e.length) {
                    const t = e.sort((e, t) => {
                      var r, i, n, s;
                      return f === p
                        ? (null != (n = e[0]) ? n : e) -
                            (null != (s = t[0]) ? s : t)
                        : Math.abs((null != (r = e[1]) ? r : e) - p) -
                            Math.abs((null != (i = t[1]) ? i : t) - p);
                    })[0];
                    l.values = [t];
                  } else r = null;
                } else if (a.hasRegularIntervals && a.extent) {
                  const [e, t] = a.extent;
                  f > t || p < e
                    ? (r = null)
                    : (l.values =
                        f === p ? [f] : [Math.max(e, f), Math.min(t, p)]);
                }
              }
              return { ...e, multidimensionalDefinition: r };
            }
            async updateRenderer() {
              if (!this.loaded) return;
              if (
                JSON.stringify(this._cachedRendererJson) ===
                JSON.stringify(this.renderer)
              )
                return;
              const e = this._rasterJobHandler.instance;
              e &&
                ((this.symbolizer.rendererJSON = (0, T.ol)(
                  this.renderer.toJSON(),
                )),
                this.symbolizer.bind(),
                await e.updateSymbolizer(this.symbolizer),
                (this._cachedRendererJson = this.renderer.toJSON()));
            }
            async applyRenderer(e, t) {
              const r = e && e.pixelBlock;
              if (!((0, o.pC)(r) && r.pixels && r.pixels.length > 0))
                return null;
              let i;
              await this.updateRenderer();
              const n = this._rasterJobHandler.instance,
                { bandIds: s } = this;
              return (
                (i = n
                  ? await n.symbolize({
                      ...e,
                      simpleStretchParams: t,
                      bandIds: s,
                    })
                  : this.symbolizer.symbolize({
                      ...e,
                      simpleStretchParams: t,
                      bandIds: s,
                    })),
                i
              );
            }
            getTileUrl(e, t, r) {
              return 'RasterTileServer' === this.raster.datasetFormat
                ? `${this.url}/tile/${e}/${t}/${r}`
                : '';
            }
            getCompatibleTileInfo(e, t, r = !1) {
              if (!this.loaded || (0, o.Wi)(t)) return null;
              if (r && e.equals(this.spatialReference)) return this.tileInfo;
              const i = (0, v.C5)(e);
              return k.Z.create({
                size: 256,
                spatialReference: e,
                origin: i
                  ? { x: i.origin[0], y: i.origin[1] }
                  : { x: t.xmin, y: t.ymax },
              });
            }
            getCompatibleFullExtent(e) {
              return this.loaded
                ? ((this._compatibleFullExtent &&
                    this._compatibleFullExtent.spatialReference.equals(e)) ||
                    (this._compatibleFullExtent = this.raster.computeExtent(e)),
                  this._compatibleFullExtent)
                : null;
            }
            async fetchTile(e, t, r, i = {}) {
              if (i.requestAsImageElement) {
                const n = this.getTileUrl(e, t, r);
                return (0, x.default)(n, {
                  responseType: 'image',
                  query: {
                    ...this.refreshParameters,
                    ...this.raster.ioConfig.customFetchParameters,
                  },
                  signal: i.signal,
                }).then((e) => e.data);
              }
              if (
                (0, o.pC)(this.rasterInfo.multidimensionalInfo) &&
                ((i = this.normalizeRasterFetchOptions(i)),
                (0, o.Wi)(i.multidimensionalDefinition))
              ) {
                const n = i.tileInfo || this.rasterInfo.storageInfo.tileInfo;
                return {
                  extent: this.raster.getTileExtentFromTileInfo(e, t, r, n),
                  pixelBlock: null,
                };
              }
              return (
                await this._initJobHandler(),
                'raster-shaded-relief' === this.renderer.type &&
                  (i = { ...i, buffer: { cols: 1, rows: 1 } }),
                this.raster.fetchTile(e, t, r, i)
              );
            }
            async fetchPixels(e, t, r, i = {}) {
              return (0, o.pC)(this.rasterInfo.multidimensionalInfo) &&
                ((i = this.normalizeRasterFetchOptions(i)),
                (0, o.Wi)(i.multidimensionalDefinition))
                ? { extent: e, pixelBlock: null }
                : (await this._initJobHandler(),
                  this.raster.fetchPixels(e, t, r, i));
            }
            async identify(e, t = {}) {
              return (0, o.pC)(this.rasterInfo.multidimensionalInfo) &&
                ((t = this.normalizeRasterFetchOptions(t)),
                (0, o.Wi)(t.multidimensionalDefinition))
                ? { location: e, value: null }
                : this.raster.identify(e, t);
            }
            increaseRasterJobHandlerUsage() {
              this._rasterJobHandler.refCount++;
            }
            decreaseRasterJobHandlerUsage() {
              this._rasterJobHandler.refCount--,
                this._rasterJobHandler.refCount <= 0 &&
                  this._shutdownJobHandler();
            }
            hasStandardTime() {
              var e;
              const t = this.rasterInfo.multidimensionalInfo;
              if (!(0, o.pC)(t) || 'standard-time' !== this.rasterInfo.dataType)
                return !1;
              const r =
                null == (e = this.multidimensionalDefinition[0])
                  ? void 0
                  : e.variableName;
              return t.variables.some(
                (e) =>
                  e.name === r &&
                  e.dimensions.some((e) => 'StdTime' === e.name),
              );
            }
            getStandardTimeValue(e) {
              return new Date(24 * (e - 25569) * 3600 * 1e3).toString();
            }
            _configDefaultSettings() {
              this._configDefaultInterpolation(),
                this.multidimensionalDefinition ||
                  (this.multidimensionalDefinition = this._getDefaultSlice()),
                this._configDefaultRenderer();
            }
            _initJobHandler() {
              if (null != this._rasterJobHandler.connectionPromise)
                return this._rasterJobHandler.connectionPromise;
              const e = new S.Z();
              return (
                (this._rasterJobHandler.connectionPromise = e
                  .initialize()
                  .then(() => {
                    (this._rasterJobHandler.instance = e),
                      (this.raster.rasterJobHandler = e),
                      this.renderer && this.updateRenderer();
                  })
                  .catch(() => null)),
                this._rasterJobHandler.connectionPromise
              );
            }
            _shutdownJobHandler() {
              this._rasterJobHandler.instance &&
                this._rasterJobHandler.instance.destroy(),
                (this._rasterJobHandler.instance = null),
                (this._rasterJobHandler.connectionPromise = null),
                (this._rasterJobHandler.refCount = 0),
                (this.raster.rasterJobHandler = null);
            }
            _configDefaultInterpolation() {
              if (null == this.interpolation) {
                var e;
                const t = (0, T.In)(
                  this.rasterInfo,
                  this.raster.tileType,
                  null == (e = this.sourceJSON)
                    ? void 0
                    : e.defaultResamplingMethod,
                );
                this._set('interpolation', t);
              }
            }
            _getDefaultSlice() {
              const { multidimensionalInfo: e } = this.raster.rasterInfo;
              if (!(0, o.pC)(e)) return null;
              const t = e.variables[0];
              return t.dimensions.map((e) => {
                var r, i;
                return new C.Z({
                  variableName: t.name,
                  dimensionName: e.name,
                  values: [
                    null != (r = null == (i = e.values) ? void 0 : i[0])
                      ? r
                      : e.extent[0],
                  ],
                  isSlice: !0,
                });
              });
            }
            _configDefaultRenderer() {
              const e = this.raster.rasterInfo;
              var t;
              this.bandIds || (this.bandIds = (0, T.YD)(e)),
                this.renderer ||
                  (this.renderer = (0, T.Ob)(e, {
                    bandIds: this.bandIds,
                    variableName: (0, o.pC)(this.multidimensionalDefinition)
                      ? null == (t = this.multidimensionalDefinition[0])
                        ? void 0
                        : t.variableName
                      : null,
                  })),
                this.symbolizer
                  ? ((this.symbolizer.rendererJSON = (0, T.ol)(
                      this.renderer.toJSON(),
                    )),
                    (this.symbolizer.rasterInfo = e))
                  : (this.symbolizer = new P.Z({
                      rendererJSON: this.renderer.toJSON(),
                      rasterInfo: e,
                    }));
              const r = this.symbolizer.bind();
              r.success ||
                F.warn(
                  'imagery-tile-mixin',
                  r.error ||
                    'The given renderer is not supported by the layer.',
                );
            }
          };
          return (
            (0, i._)([(0, u.Cb)()], t.prototype, '_cachedRendererJson', void 0),
            (0, i._)(
              [(0, u.Cb)()],
              t.prototype,
              '_compatibleFullExtent',
              void 0,
            ),
            (0, i._)([(0, u.Cb)()], t.prototype, '_rasterJobHandler', void 0),
            (0, i._)([(0, u.Cb)()], t.prototype, 'bandIds', void 0),
            (0, i._)(
              [
                (0, u.Cb)({
                  json: {
                    origins: { service: { read: { source: 'copyrightText' } } },
                  },
                }),
              ],
              t.prototype,
              'copyright',
              void 0,
            ),
            (0, i._)(
              [
                (0, u.Cb)({ type: O.Z, json: { read: !1 } }),
                (0, b.B)('rasterInfo.extent'),
              ],
              t.prototype,
              'fullExtent',
              void 0,
            ),
            (0, i._)([(0, u.Cb)()], t.prototype, 'interpolation', void 0),
            (0, i._)([(0, u.Cb)()], t.prototype, 'ioConfig', void 0),
            (0, i._)(
              [(0, u.Cb)({ type: [C.Z] })],
              t.prototype,
              'multidimensionalDefinition',
              void 0,
            ),
            (0, i._)([(0, u.Cb)()], t.prototype, 'raster', void 0),
            (0, i._)(
              [(0, u.Cb)({ readOnly: !0 }), (0, b.B)('raster.rasterInfo')],
              t.prototype,
              'rasterInfo',
              void 0,
            ),
            (0, i._)([(0, u.Cb)()], t.prototype, 'sourceJSON', void 0),
            (0, i._)(
              [
                (0, u.Cb)({ type: E.Z, json: { read: !1 } }),
                (0, b.B)('rasterInfo.spatialReference'),
              ],
              t.prototype,
              'spatialReference',
              void 0,
            ),
            (0, i._)(
              [
                (0, u.Cb)({ type: k.Z, json: { read: !1 } }),
                (0, b.B)('rasterInfo.storageInfo.tileInfo'),
              ],
              t.prototype,
              'tileInfo',
              void 0,
            ),
            (0, i._)([(0, u.Cb)(_.HQ)], t.prototype, 'url', null),
            (0, i._)(
              [(0, u.Cb)({ types: s.dr })],
              t.prototype,
              'renderer',
              null,
            ),
            (0, i._)([(0, u.Cb)()], t.prototype, 'symbolizer', void 0),
            (t = (0, i._)([(0, p.j)('esri.layers.ImageryTileMixin')], t)),
            t
          );
        };
      var D = r(38009),
        N = r(16859),
        Z = r(34760),
        L = r(72965),
        A = r(28294),
        H = r(1231),
        z = r(69608),
        J = r(48526),
        W = r(36679),
        j = r(96674),
        q = r(609),
        U = r(73506),
        G = r(13473);
      const $ = new Map(),
        V = new (class {
          constructor(e = 15e3, t = 5e3) {
            (this._timer = null),
              (this._cachedBlocks = new Map()),
              (this._size = -1),
              (this._duration = e),
              (this._interval = Math.min(e, t));
          }
          decreaseRefCount(e, t) {
            const r = e + '/' + t,
              i = this._cachedBlocks;
            if (i.has(r)) {
              const e = i.get(r);
              return (
                e.refCount--,
                e.refCount <= 0 &&
                  (i.delete(r), e.controller && e.controller.abort()),
                e.refCount
              );
            }
            return 0;
          }
          getBlock(e, t) {
            const r = e + '/' + t,
              i = this._cachedBlocks;
            if (i.has(r)) {
              const e = i.get(r);
              return (
                (e.ts = Date.now()),
                e.refCount++,
                i.delete(r),
                i.set(r, e),
                e.block
              );
            }
            return null;
          }
          putBlock(e, t, r, i = null) {
            const n = this._cachedBlocks,
              s = e + '/' + t;
            if (n.has(s)) {
              const e = n.get(s);
              (e.ts = Date.now()), e.refCount++;
            } else
              n.set(s, {
                block: r,
                ts: Date.now(),
                refCount: 1,
                controller: i,
              });
            this._trim(), this._updateTimer();
          }
          deleteBlock(e, t) {
            const r = this._cachedBlocks,
              i = e + '/' + t;
            r.has(i) && r.delete(i);
          }
          updateMaxSize(e) {
            (this._size = e), this._trim();
          }
          empty() {
            this._cachedBlocks.clear(), this._clearTimer();
          }
          getCurrentSize() {
            return this._cachedBlocks.size;
          }
          _updateTimer() {
            if (null != this._timer) return;
            const e = this._cachedBlocks;
            this._timer = setInterval(() => {
              const t = Array.from(e),
                r = Date.now();
              for (
                let i = 0;
                i < t.length && t[i][1].ts <= r - this._duration;
                i++
              )
                e.delete(t[i][0]);
              0 === e.size && this._clearTimer();
            }, this._interval);
          }
          _trim() {
            const e = this._cachedBlocks;
            if (-1 === this._size || this._size >= e.size) return;
            const t = Array.from(e);
            for (let r = 0; r < t.length - this._size; r++) e.delete(t[r][0]);
          }
          _clearTimer() {
            null != this._timer &&
              (clearInterval(this._timer), (this._timer = null));
          }
        })();
      function Y(e, t) {
        return null == t ? e : `${e}?sliceId=${t}`;
      }
      function K(e, t, r) {
        if (!$.has(e)) return null == t ? V.decreaseRefCount(e, r) : 0;
        const i = $.get(e);
        if (null == i[t]) return V.decreaseRefCount(e, r);
        const n = i[t].cache;
        if (n.has(r)) {
          const e = n.get(r);
          if ((e.refCount--, 0 === e.refCount)) {
            n.delete(r);
            for (let e = 0; e < i.length; e++)
              i[e] && i[e].cache.has(r) && i[e].cache.delete(r);
            e.controller && e.controller.abort();
          }
          return e.refCount;
        }
        return 0;
      }
      function X(e, t, r) {
        if (!$.has(e)) return null == t ? V.getBlock(e, r) : null;
        const i = $.get(e);
        if (null == i[t]) {
          for (let e = 0; e < i.length; e++)
            if (i[e] && i[e].cache.has(r)) {
              const t = i[e].cache.get(r);
              return t.refCount++, t.block;
            }
          return V.getBlock(e, r);
        }
        const n = i[t].cache;
        if (n.has(r)) {
          const e = n.get(r);
          return e.refCount++, e.block;
        }
        for (let e = 0; e < i.length; e++)
          if (e !== t && i[e] && i[e] && i[e].cache.has(r)) {
            const t = i[e].cache.get(r);
            return t.refCount++, n.set(r, t), t.block;
          }
        return null;
      }
      function Q(e, t, r, i, n = null) {
        if (!$.has(e)) return void (null == t && V.putBlock(e, r, i, n));
        const s = $.get(e);
        if (null == s[t]) return void V.putBlock(e, r, i, n);
        const a = {
          refCount: 1,
          block: i,
          isResolved: !1,
          isRejected: !1,
          controller: n,
        };
        i.then(() => (a.isResolved = !0)).catch(() => (a.isRejected = !0)),
          s[t].cache.set(r, a);
      }
      function ee(e, t, r) {
        if (!$.has(e)) return void (null == t && V.deleteBlock(e, r));
        const i = $.get(e);
        null != i[t] ? i[t].cache.delete(r) : V.deleteBlock(e, r);
      }
      var te = r(75993),
        re = r(55914);
      let ie = class extends (0, q.v)(j.wq) {
        constructor() {
          super(...arguments),
            (this.rasterJobHandler = null),
            (this.datasetName = null),
            (this.datasetFormat = null),
            (this.rasterInfo = null),
            (this.ioConfig = { sampling: 'closest' });
        }
        async init() {
          const e = (0, U.zD)();
          this.addResolvingPromise(e), await this.when();
        }
        normalizeCtorArgs(e) {
          return (
            e &&
              e.ioConfig &&
              (e = {
                ...e,
                ioConfig: {
                  resolution: null,
                  bandIds: null,
                  sampling: 'closest',
                  tileInfo: k.Z.create(),
                  ...e.ioConfig,
                },
              }),
            e
          );
        }
        get _isGlobalWrappableSource() {
          const { rasterInfo: e } = this,
            t = (0, U.ut)(e.spatialReference);
          return (0, o.pC)(t) && e.extent.width >= t / 2;
        }
        set url(e) {
          this._set('url', (0, I.Nm)(e, w.Z.getLogger(this.declaredClass)));
        }
        async open(e) {
          throw new a.Z(
            'BaseRaster:open-not-implemented',
            'open() is not implemented',
          );
        }
        async fetchTile(e, t, r, i = {}) {
          const n = i.tileInfo || this.rasterInfo.storageInfo.tileInfo,
            s = this.getTileExtentFromTileInfo(e, t, r, n);
          return this.fetchPixels(s, n.size[0], n.size[1], i);
        }
        async identify(e, t = {}) {
          t = this._getRequestOptionsWithSliceId(t);
          const { spatialReference: r, extent: i } = this.rasterInfo,
            { datumTransformation: n } = t;
          let s = (0, U.nF)(e, r, n);
          if (!i.intersects(s)) return { location: s, value: null };
          if ((0, o.pC)(this.rasterInfo.transform)) {
            const e = this.rasterInfo.transform.inverseTransform(s);
            if (!this.rasterInfo.nativeExtent.intersects(e))
              return { location: e, value: null };
            s = e;
          }
          let a = 0;
          if (t.srcResolution)
            a = (0, U.kr)(
              t.srcResolution,
              this.rasterInfo,
              this.ioConfig.sampling,
            ).pyramidLevel;
          else if (
            ((a = await this.computeBestPyramidLevelForLocation(e, t)),
            null == a)
          )
            return { location: s, value: null };
          const l = this.identifyPixelLocation(s, a, null);
          if (null === l) return { location: s, value: null };
          const { row: c, col: u, rowOffset: h, colOffset: d } = l,
            f = Y(this.url, t.sliceId),
            p = `${a}/${c}/${u}`;
          let m = X(f, null, p);
          (0, o.Wi)(m) &&
            ((m = this.fetchRawTile(a, c, u, t)), Q(f, null, p, m));
          const g = await m;
          if ((0, o.Wi)(g) || !g.pixels || 0 === g.pixels.length)
            return { location: s, value: null };
          const y = h * this.rasterInfo.storageInfo.blockHeight + d,
            x = !g.mask || g.mask[y] ? g.pixels.map((e) => e[y]) : null,
            w = this.rasterInfo.dataType;
          return ('vector-magdir' === w || 'vector-uv' === w) &&
            (null == x ? void 0 : x.length) > 1
            ? {
                location: s,
                value: x,
                magdirValue:
                  'vector-magdir' === w
                    ? [x[0], x[1]]
                    : (0, R.Tg)([x[0], x[1]]),
                pyramidLevel: a,
              }
            : { location: s, value: x, pyramidLevel: a };
        }
        async fetchPixels(e, t, r, i = {}) {
          if (
            ((e = (0, U.kZ)(e)),
            (i = this._getRequestOptionsWithSliceId(i)).requestRawData)
          )
            return this._fetchPixels(e, t, r, i);
          const n = (0, U.ut)(e.spatialReference),
            s = (0, U.Hq)(e);
          if (
            (0, o.Wi)(n) ||
            0 === s ||
            (1 === s && this._isGlobalWrappableSource)
          )
            return this._fetchPixels(e, t, r, i);
          if (s >= 3) return { extent: e, pixelBlock: null };
          const a = [],
            { xmin: l, xmax: c } = e,
            u = Math.round((n / (c - l)) * t),
            h = u - Math.round(((n / 2 - l) / (c - l)) * t);
          let d = 0;
          const f = [];
          for (let o = 0; o <= s; o++) {
            const p = new O.Z({
                xmin: 0 === o ? l : -n / 2,
                xmax: o === s ? c - n * o : n / 2,
                ymin: e.ymin,
                ymax: e.ymax,
                spatialReference: e.spatialReference,
              }),
              m = 0 === o ? u - h : o === s ? t - d : u;
            (d += m), f.push(m);
            const g =
              i.disableWrapAround && o > 0
                ? null
                : this._fetchPixels(p, m, r, i);
            a.push(g);
          }
          const p = (await Promise.all(a)).map((e) =>
            null == e ? void 0 : e.pixelBlock,
          );
          let m = null;
          const g = { width: t, height: r };
          return (
            (m = this.rasterJobHandler
              ? (
                  await this.rasterJobHandler.mosaicAndTransform(
                    {
                      srcPixelBlocks: p,
                      srcMosaicSize: g,
                      destDimension: null,
                      coefs: null,
                      sampleSpacing: null,
                      interpolation: 'nearest',
                      alignmentInfo: null,
                      blockWidths: f,
                    },
                    i,
                  )
                ).pixelBlock
              : (0, re.us)(p, g, { blockWidths: f })),
            {
              extent: e,
              srcExtent: (0, U.tB)(
                e,
                this.rasterInfo.spatialReference,
                i.datumTransformation,
              ),
              pixelBlock: m,
            }
          );
        }
        async fetchRawPixels(e, t, r, i = {}) {
          t = { x: Math.floor(t.x), y: Math.floor(t.y) };
          const n = await this._fetchRawTiles(e, t, r, i),
            {
              nativeExtent: s,
              nativePixelSize: a,
              storageInfo: l,
            } = this.rasterInfo,
            c = 2 ** e,
            u = a.x * c,
            h = a.y * c,
            d = new O.Z({
              xmin: s.xmin + u * t.x,
              xmax: s.xmin + u * (t.x + r.width - 1),
              ymin: s.ymax - h * (t.y + r.height - 1),
              ymax: s.ymax - h * t.y,
              spatialReference: s.spatialReference,
            });
          if (!n) return { extent: d, srcExtent: d, pixelBlock: null };
          const { pixelBlocks: f, mosaicSize: p } = n;
          if (
            1 === f.length &&
            (0, o.pC)(f[0]) &&
            f[0].width === r.width &&
            f[0].height === r.height
          )
            return { extent: d, srcExtent: d, pixelBlock: n.pixelBlocks[0] };
          const m = e > 0 ? l.pyramidBlockWidth : l.blockWidth,
            g = e > 0 ? l.pyramidBlockHeight : l.blockHeight,
            y = { x: t.x % m, y: t.y % g };
          let x;
          return (
            (x = this.rasterJobHandler
              ? (
                  await this.rasterJobHandler.mosaicAndTransform(
                    {
                      srcPixelBlocks: f,
                      srcMosaicSize: p,
                      destDimension: r,
                      clipOffset: y,
                      clipSize: r,
                      coefs: null,
                      sampleSpacing: null,
                      interpolation: i.interpolation,
                      alignmentInfo: null,
                      blockWidths: null,
                    },
                    i,
                  )
                ).pixelBlock
              : (0, re.us)(f, p, { clipOffset: y, clipSize: r })),
            { extent: d, srcExtent: d, pixelBlock: x }
          );
        }
        fetchRawTile(e, t, r, i) {
          throw new a.Z(
            'BaseRaster:read-not-implemented',
            'fetchRawTile() is not implemented',
          );
        }
        computeExtent(e) {
          return (0, U.tB)(this.rasterInfo.extent, e);
        }
        decodePixelBlock(e, t) {
          return !this.rasterJobHandler || t.useCanvas
            ? (0, te.J)(e, t)
            : this.rasterJobHandler.decode({ data: e, options: t });
        }
        async request(e, t, r) {
          var i, n;
          const { customFetchParameters: s } = this.ioConfig,
            { range: a, query: o, headers: l } = t;
          r =
            null != (i = null != (n = r) ? n : t.retryCount)
              ? i
              : this.ioConfig.retryCount;
          const c = a ? { Range: `bytes=${a.from}-${a.to}` } : null;
          try {
            return await (0, x.default)(e, {
              ...t,
              query: { ...o, ...s },
              headers: { ...l, ...c },
            });
          } catch (i) {
            if (r > 0) return r--, this.request(e, t, r);
            throw i;
          }
        }
        getSliceIndex(e) {
          const { multidimensionalInfo: t } = this.rasterInfo;
          if (!(0, o.pC)(t)) return null;
          if (!(0, o.pC)(e) || 0 === e.length) return null;
          let r = 0;
          const i = e[0].variableName;
          for (let n = 0; n < t.variables.length; n++) {
            const s = t.variables[n],
              a = s.dimensions;
            if (s.name !== i) {
              r += a
                .map((e) => this._getDimensionValuesCount(e))
                .reduce((e, t) => e + t);
              break;
            }
            const o = a.map((e) => this._getDimensionValuesCount(e)),
              l = a.length;
            for (let t = 0; t < l; t++) {
              const i = e.find((e) => e.dimensionName === a[t].name);
              if (null == i) return null;
              const n = Array.isArray(i.values[0])
                  ? i.values[0][0]
                  : i.values[0],
                s = this._getIndexFromDimensions(n, a[t]);
              if (-1 === s) return null;
              o.shift(), (r += t === l - 1 ? s : s * o.reduce((e, t) => e + t));
            }
          }
          return r;
        }
        getTileExtentFromTileInfo(e, t, r, i) {
          const n = i.lodAt(e);
          return this.getTileExtent(
            { x: n.resolution, y: n.resolution },
            t,
            r,
            i.origin,
            i.spatialReference,
            i.size,
          );
        }
        updateTileInfo() {
          const {
            storageInfo: e,
            spatialReference: t,
            extent: r,
            pixelSize: i,
          } = this.rasterInfo;
          if (!e.tileInfo) {
            const n = [],
              s = e.maximumPyramidLevel || 0;
            let a = Math.max(i.x, i.y),
              o = (1 / 0.0254) * 96 * a;
            for (let e = 0; e <= s; e++)
              n.push({ level: s - e, resolution: a, scale: o }),
                (a *= 2),
                (o *= 2);
            const l = new G.Z({ x: r.xmin, y: r.ymax, spatialReference: t });
            (e.tileInfo = new k.Z({
              origin: l,
              size: [e.blockWidth, e.blockHeight],
              spatialReference: t,
              lods: n,
            })),
              (e.isVirtualTileInfo = !0);
          }
        }
        createRemoteDatasetStorageInfo(e, t = 512, r = 512, i) {
          const {
              width: n,
              height: s,
              nativeExtent: a,
              pixelSize: o,
              spatialReference: l,
            } = e,
            c = new G.Z({ x: a.xmin, y: a.ymax, spatialReference: l });
          null == i &&
            (i = Math.max(
              0,
              Math.round(Math.log(Math.max(n, s)) / Math.LN2 - 8),
            ));
          const u = this.computeBlockBoundary(
            a,
            512,
            512,
            { x: a.xmin, y: a.ymax },
            [o],
            i,
          );
          e.storageInfo = new W.Z({
            blockWidth: t,
            blockHeight: r,
            pyramidBlockWidth: t,
            pyramidBlockHeight: r,
            origin: c,
            firstPyramidLevel: 1,
            maximumPyramidLevel: i,
            blockBoundary: u,
          });
        }
        async computeBestPyramidLevelForLocation(e, t = {}) {
          return 0;
        }
        computeBlockBoundary(e, t, r, i, n, s = 0, a = 2) {
          if (1 === n.length && s > 0) {
            n = [...n];
            let { x: e, y: t } = n[0];
            for (let r = 0; r < s; r++)
              (e *= a), (t *= a), n.push({ x: e, y: t });
          }
          const o = [],
            { x: l, y: c } = i;
          for (let i = 0; i < n.length; i++) {
            const { x: s, y: a } = n[i];
            o.push({
              minCol: Math.floor((e.xmin - l + 0.1 * s) / t / s),
              maxCol: Math.floor((e.xmax - l - 0.1 * s) / t / s),
              minRow: Math.floor((c - e.ymax + 0.1 * a) / r / a),
              maxRow: Math.floor((c - e.ymin - 0.1 * a) / r / a),
            });
          }
          return o;
        }
        getPyramidPixelSize(e) {
          const { nativePixelSize: t } = this.rasterInfo,
            { pyramidResolutions: r, pyramidScalingFactor: i } =
              this.rasterInfo.storageInfo;
          if (0 === e) return t;
          if ((0, o.pC)(r) && r.length) return r[e - 1];
          const n = i ** e;
          return { x: t.x * n, y: t.y * n };
        }
        identifyPixelLocation(e, t, r) {
          const { spatialReference: i, nativeExtent: n } = this.rasterInfo,
            {
              blockWidth: s,
              blockHeight: a,
              maximumPyramidLevel: o,
              origin: l,
            } = this.rasterInfo.storageInfo,
            c = (0, U.nF)(e, i, r);
          if (!n.intersects(c)) return null;
          if (t < 0 || t > o) return null;
          const u = this.getPyramidPixelSize(t),
            { x: h, y: d } = u,
            f = (l.y - c.y) / d / a,
            p = (c.x - l.x) / h / s,
            m = Math.min(a - 1, Math.floor((f - Math.floor(f)) * a)),
            g = Math.min(s - 1, Math.floor((p - Math.floor(p)) * s));
          return {
            pyramidLevel: t,
            row: Math.floor(f),
            col: Math.floor(p),
            rowOffset: m,
            colOffset: g,
            srcLocation: c,
          };
        }
        getTileExtent(e, t, r, i, n, s) {
          const [a, o] = s,
            l = i.x + r * a * e.x,
            c = l + a * e.x,
            u = i.y - t * o * e.y,
            h = u - o * e.y;
          return new O.Z({
            xmin: l,
            xmax: c,
            ymin: h,
            ymax: u,
            spatialReference: n,
          });
        }
        getBlockWidthHeight(e) {
          return {
            blockWidth:
              e > 0
                ? this.rasterInfo.storageInfo.pyramidBlockWidth
                : this.rasterInfo.storageInfo.blockWidth,
            blockHeight:
              e > 0
                ? this.rasterInfo.storageInfo.pyramidBlockHeight
                : this.rasterInfo.storageInfo.blockHeight,
          };
        }
        isBlockOutside(e, t, r) {
          const i = this.rasterInfo.storageInfo.blockBoundary[e];
          return (
            !i || i.maxRow < t || i.maxCol < r || i.minRow > t || i.minCol > r
          );
        }
        async _fetchPixels(e, t, r, i = {}) {
          let n = (0, U.Hq)(e);
          if (n >= 2) return { extent: e, pixelBlock: null };
          const s = this._getSourceDataInfo(e, t, r, i),
            {
              pyramidLevel: a,
              pyramidResolution: l,
              srcResolution: c,
              srcExtent: u,
              srcWidth: h,
              srcHeight: d,
            } = s;
          if (0 === h || 0 === d)
            return { extent: e, srcExtent: u, pixelBlock: null };
          const f = (0, o.Wg)(this.rasterInfo.transform),
            p = 'gcs-shift' === (null == f ? void 0 : f.type),
            m = (0, o.pC)((0, U.ut)(e.spatialReference));
          (!p && m) || (n = (0, U.Hq)(s.srcExtent, p));
          const g = this.rasterInfo.storageInfo,
            y = {
              x: Math.floor((u.xmin - g.origin.x) / l.x + 0.1),
              y: Math.floor((g.origin.y - u.ymax) / l.y + 0.1),
            },
            x = await this._fetchRawTiles(
              a,
              y,
              { width: h, height: d, wrapCount: n },
              i,
            );
          if (!x) return { extent: e, srcExtent: u, pixelBlock: null };
          const w = a > 0 ? g.pyramidBlockWidth : g.blockWidth,
            b = a > 0 ? g.pyramidBlockHeight : g.blockHeight,
            v = w === h && b === d && y.x % w == 0 && y.y % b == 0,
            I = new G.Z({
              x: (e.xmax - e.xmin) / t,
              y: (e.ymax - e.ymin) / r,
              spatialReference: e.spatialReference,
            }),
            _ = !e.spatialReference.equals(this.rasterInfo.spatialReference),
            { datumTransformation: C } = i;
          if (
            !_ &&
            v &&
            1 === x.pixelBlocks.length &&
            w === t &&
            b === r &&
            c.x === I.x &&
            c.y === I.y
          )
            return { extent: e, srcExtent: u, pixelBlock: x.pixelBlocks[0] };
          const S = m && (0, o.pC)((0, U.ut)(u.spatialReference)),
            k =
              i.requestProjectedLocalDirections &&
              this.rasterInfo.dataType.startsWith('vector');
          k && !this.rasterJobHandler && (await (0, U.zD)());
          const T = this.rasterJobHandler
            ? await this.rasterJobHandler.getProjectionOffsetGrid(
                {
                  projectedExtent: e,
                  srcBufferExtent: x.extent,
                  pixelSize: I.toJSON(),
                  datumTransformation: C,
                  rasterTransform: f,
                  hasWrapAround: n > 0 || S,
                  isAdaptive: !1 !== this.ioConfig.optimizeProjectionAccuracy,
                  includeGCSGrid: k,
                },
                i,
              )
            : (0, U.Qp)({
                projectedExtent: e,
                srcBufferExtent: x.extent,
                pixelSize: I,
                datumTransformation: C,
                rasterTransform: f,
                hasWrapAround: n > 0 || S,
                isAdaptive: !1,
                includeGCSGrid: k,
              });
          let P;
          const M = !i.requestRawData,
            O = { rows: T.spacing[0], cols: T.spacing[1] },
            E = (0, o.Wg)(this._getRasterTileAlignmentInfo(a, x.extent.xmin)),
            { pixelBlocks: F, mosaicSize: B, isPartiallyFilled: D } = x;
          let N = null;
          if (this.rasterJobHandler) {
            const e = await this.rasterJobHandler.mosaicAndTransform(
              {
                srcPixelBlocks: F,
                srcMosaicSize: B,
                destDimension: M ? { width: t, height: r } : null,
                coefs: M ? T.coefficients : null,
                sampleSpacing: M ? O : null,
                projectDirections: k,
                gcsGrid: k ? T.gcsGrid : null,
                isUV: 'vector-uv' === this.rasterInfo.dataType,
                interpolation: i.interpolation,
                alignmentInfo: E,
                blockWidths: null,
              },
              i,
            );
            ({ pixelBlock: P, localNorthDirections: N } = e);
          } else {
            const e = (0, re.us)(F, B, { alignmentInfo: E });
            (P = M
              ? (0, re.Uk)(
                  e,
                  { width: t, height: r },
                  T.coefficients,
                  O,
                  i.interpolation,
                )
              : e),
              k &&
                T.gcsGrid &&
                ((N = (0, re.Qh)({ width: t, height: r }, T.gcsGrid)),
                (P = (0, R.xQ)(P, this.rasterInfo.dataType, N)));
          }
          return i.requestRawData || k
            ? {
                srcExtent: u,
                pixelBlock: P,
                transformGrid: T,
                localNorthDirections: N,
                extent: e,
                isPartiallyFilled: D,
              }
            : { srcExtent: u, extent: e, pixelBlock: P };
        }
        async _fetchRawTiles(e, t, r, i) {
          const { origin: n, blockBoundary: s } = this.rasterInfo.storageInfo,
            { blockWidth: a, blockHeight: l } = this.getBlockWidthHeight(e);
          let { x: c, y: u } = t,
            { width: h, height: d, wrapCount: f } = r;
          const p = this._getRasterTileAlignmentInfo(e, 0);
          i.buffer &&
            ((c -= i.buffer.cols),
            (u -= i.buffer.rows),
            (h += 2 * i.buffer.cols),
            (d += 2 * i.buffer.rows));
          let m = 0,
            g = 0,
            y = 0;
          f &&
            (0, o.pC)(p) &&
            (({
              worldColumnCountFromOrigin: g,
              originColumnOffset: y,
              rightPadding: m,
            } = p),
            g * p.blockWidth - m >= c + h && (m = 0));
          const x = Math.floor(c / a),
            w = Math.floor(u / l),
            b = Math.floor((c + h + m - 1) / a),
            v = Math.floor((u + d + m - 1) / l),
            I = s[e];
          if (!I) return null;
          const { minRow: _, minCol: C, maxCol: S, maxRow: k } = I;
          if (0 === f && (v < _ || b < C || w > k || x > S)) return null;
          const R = new Array();
          let T = !1;
          const P =
            null == this.ioConfig.allowPartialFill
              ? i.allowPartialFill
              : this.ioConfig.allowPartialFill;
          for (let t = w; t <= v; t++)
            for (let r = x; r <= b; r++) {
              let n = r;
              if (
                (!i.disableWrapAround &&
                  f &&
                  (0, o.pC)(p) &&
                  g <= r &&
                  (n = r - g - y),
                t >= _ && n >= C && k >= t && S >= n)
              ) {
                const r = this._fetchRawTile(e, t, n, i);
                P
                  ? R.push(
                      new Promise((e) => {
                        r.then((t) => e(t)).catch(() => {
                          (T = !0), e(null);
                        });
                      }),
                    )
                  : R.push(r);
              } else R.push(null);
            }
          if (0 === R.length) return null;
          const M = await Promise.all(R),
            E = { height: (v - w + 1) * l, width: (b - x + 1) * a },
            { spatialReference: F } = this.rasterInfo,
            B = this.getPyramidPixelSize(e),
            { x: D, y: N } = B;
          return {
            extent: new O.Z({
              xmin: n.x + x * a * D,
              xmax: n.x + (b + 1) * a * D,
              ymin: n.y - (v + 1) * l * N,
              ymax: n.y - w * l * N,
              spatialReference: F,
            }),
            pixelBlocks: M,
            mosaicSize: E,
            isPartiallyFilled: T,
          };
        }
        _fetchRawTile(e, t, r, i) {
          const n = this.rasterInfo.storageInfo.blockBoundary[e];
          if (!n) return Promise.resolve(null);
          const { minRow: s, minCol: a, maxCol: l, maxRow: u } = n;
          if (t < s || r < a || t > u || r > l) return Promise.resolve(null);
          const h = Y(this.url, i.sliceId),
            d = `${e}/${t}/${r}`;
          let f = X(h, i.registryId, d);
          if ((0, o.Wi)(f)) {
            const n = new AbortController();
            (f = this.fetchRawTile(e, t, r, { ...i, signal: n.signal })),
              Q(h, i.registryId, d, f, n),
              f.catch(() => ee(h, i.registryId, d));
          }
          return (
            i.signal &&
              (0, c.fu)(i, () => {
                K(h, i.registryId, d);
              }),
            f
          );
        }
        _getIndexFromDimensions(e, t) {
          const { extent: r, interval: i, unit: n, values: s } = t;
          if (null != s && s.length)
            return Array.isArray(s[0])
              ? s.findIndex((t) => t[0] <= e && t[1] >= e)
              : s.indexOf(e);
          if (e > r[1]) return -1;
          const a = r[0];
          let o = -1;
          if ('ISO8601' === n) {
            var l;
            switch (
              (null == (l = t.intervalUnit) ? void 0 : l.toLowerCase()) ||
              'seconds'
            ) {
              case 'seconds':
                o = Math.round((e - a) / 1e3 / i);
                break;
              case 'minutes':
                o = Math.round((e - a) / 6e4 / i);
                break;
              case 'hours':
                o = Math.round((e - a) / 36e5 / i);
                break;
              case 'days':
                o = Math.round((e - a) / 864e5 / i);
                break;
              case 'years':
                o = Math.round(
                  (new Date(e).getUTCFullYear() -
                    new Date(a).getUTCFullYear()) /
                    i,
                );
                break;
              case 'decades':
                o = Math.round(
                  (new Date(e).getUTCFullYear() -
                    new Date(a).getUTCFullYear()) /
                    10 /
                    i,
                );
            }
            return o;
          }
          return Math.round((e - a) / i);
        }
        _getDimensionValuesCount(e) {
          const { extent: t, interval: r, unit: i, values: n } = e;
          let s = (null == n ? void 0 : n.length) || 0;
          if (s) return s;
          const a = t[0];
          if (0 === s && 'ISO8601' === i) {
            var o;
            switch (
              (null == (o = e.intervalUnit) ? void 0 : o.toLowerCase()) ||
              'seconds'
            ) {
              case 'seconds':
                s = Math.round((t[1] - t[0]) / 1e3 / r);
                break;
              case 'minutes':
                s = Math.round((t[1] - t[0]) / 6e4 / r);
                break;
              case 'hours':
                s = Math.round((t[1] - t[0]) / 36e5 / r);
                break;
              case 'days':
                s = Math.round((t[1] - t[0]) / 864e5 / r);
                break;
              case 'years':
                s = Math.round(
                  (new Date(t[1]).getUTCFullYear() -
                    new Date(a).getUTCFullYear()) /
                    r,
                );
                break;
              case 'decades':
                s = Math.round(
                  (new Date(t[1]).getUTCFullYear() -
                    new Date(a).getUTCFullYear()) /
                    10 /
                    r,
                );
            }
            return s;
          }
          return Math.round((t[1] - t[0]) / r);
        }
        _getRasterTileAlignmentInfo(e, t) {
          return (
            null == this._rasterTileAlighmentInfo &&
              (this._rasterTileAlighmentInfo = (0, U.P_)(this.rasterInfo)),
            (0, o.pC)(this._rasterTileAlighmentInfo.pyramidsInfo)
              ? {
                  startX: t,
                  halfWorldWidth: this._rasterTileAlighmentInfo.halfWorldWidth,
                  hasGCSSShiftTransform:
                    this._rasterTileAlighmentInfo.hasGCSSShiftTransform,
                  ...this._rasterTileAlighmentInfo.pyramidsInfo[e],
                }
              : null
          );
        }
        _getSourceDataInfo(e, t, r, i = {}) {
          const n = {
            datumTransformation: i.datumTransformation,
            pyramidLevel: 0,
            pyramidResolution: null,
            srcExtent: null,
            srcHeight: 0,
            srcResolution: null,
            srcWidth: 0,
          };
          i.srcResolution &&
            ((n.srcResolution = i.srcResolution),
            this._updateSourceDataInfo(e, n));
          const s = this.rasterInfo.storageInfo.maximumPyramidLevel || 0,
            { srcWidth: a, srcHeight: o, pyramidLevel: l } = n,
            c = a / t,
            u = o / r,
            h = l < s && c * u >= 16;
          if (h || (l === s && (c > 8 || u > 8)) || 0 === a || 0 === o) {
            const a = new G.Z({
              x: (e.xmax - e.xmin) / t,
              y: (e.ymax - e.ymin) / r,
              spatialReference: e.spatialReference,
            });
            let o = (0, U.VO)(
              a,
              this.rasterInfo.spatialReference,
              e,
              n.datumTransformation,
            );
            const d =
              !o ||
              (i.srcResolution &&
                o.x + o.y < i.srcResolution.x + i.srcResolution.y);
            if (h && i.srcResolution && d) {
              const e = Math.round(Math.log(Math.max(c, u)) / Math.LN2) - 1;
              if (s - l + 3 >= e) {
                const t = 2 ** e;
                o = { x: i.srcResolution.x * t, y: i.srcResolution.y * t };
              }
            }
            o && ((n.srcResolution = o), this._updateSourceDataInfo(e, n));
          }
          return (
            (n.srcWidth / t > 8 || n.srcHeight / r > 8) &&
              ((n.srcWidth = 0), (n.srcHeight = 0)),
            n
          );
        }
        _updateSourceDataInfo(e, t) {
          (t.srcWidth = 0), (t.srcHeight = 0);
          const r = this.rasterInfo.spatialReference,
            { srcResolution: i, datumTransformation: n } = t,
            {
              pyramidLevel: s,
              pyramidResolution: a,
              excessiveReading: l,
            } = (0, U.kr)(i, this.rasterInfo, this.ioConfig.sampling);
          if (l) return;
          let c = t.srcExtent || (0, U.tB)(e, r, n);
          if (null == c) return;
          const u = (0, o.Wg)(this.rasterInfo.transform);
          u && (c = u.inverseTransform(c)), (t.srcExtent = c);
          const h = Math.ceil((c.xmax - c.xmin) / a.x - 0.1),
            d = Math.ceil((c.ymax - c.ymin) / a.y - 0.1);
          (t.pyramidLevel = s),
            (t.pyramidResolution = a),
            (t.srcWidth = h),
            (t.srcHeight = d);
        }
        _getRequestOptionsWithSliceId(e) {
          return (
            (0, o.pC)(this.rasterInfo.multidimensionalInfo) &&
              null == e.sliceId &&
              (e = {
                ...e,
                sliceId: this.getSliceIndex(e.multidimensionalDefinition),
              }),
            e
          );
        }
      };
      (0, i._)([(0, u.Cb)()], ie.prototype, '_rasterTileAlighmentInfo', void 0),
        (0, i._)(
          [(0, u.Cb)({ readOnly: !0 })],
          ie.prototype,
          '_isGlobalWrappableSource',
          null,
        ),
        (0, i._)([(0, u.Cb)(_.HQ)], ie.prototype, 'url', null),
        (0, i._)(
          [(0, u.Cb)({ type: String, json: { write: !0 } })],
          ie.prototype,
          'datasetName',
          void 0,
        ),
        (0, i._)(
          [(0, u.Cb)({ type: String, json: { write: !0 } })],
          ie.prototype,
          'datasetFormat',
          void 0,
        ),
        (0, i._)([(0, u.Cb)()], ie.prototype, 'rasterInfo', void 0),
        (0, i._)([(0, u.Cb)()], ie.prototype, 'ioConfig', void 0),
        (0, i._)([(0, u.Cb)()], ie.prototype, 'sourceJSON', void 0),
        (ie = (0, i._)(
          [(0, p.j)('esri.layers.support.rasterDatasets.BaseRaster')],
          ie,
        ));
      const ne = ie;
      var se = r(20095);
      function ae(e) {
        const t = e.fields,
          r = e.records,
          i = t.some((e) => 'oid' === e.name.toLowerCase())
            ? 'OBJECTID'
            : 'OID',
          n = [{ name: i, type: 'esriFieldTypeOID', alias: 'OID' }].concat(
            t.map((e) => ({
              name: e.name,
              type: 'esriFieldType' + e.typeName,
              alias: e.name,
            })),
          ),
          s = n.map((e) => e.name),
          a = [];
        let o = 0,
          l = 0;
        return (
          r.forEach((e) => {
            const t = {};
            for (t[i] = o++, l = 1; l < s.length; l++) t[s[l]] = e[l - 1];
            a.push({ attributes: t });
          }),
          { displayFieldName: '', fields: n, features: a }
        );
      }
      var oe = r(87521),
        le = r(74889);
      const ce = new Map();
      ce.set('int16', 'esriFieldTypeSmallInteger'),
        ce.set('int32', 'esriFieldTypeInteger'),
        ce.set('int64', 'esriFieldTypeInteger'),
        ce.set('float32', 'esriFieldTypeSingle'),
        ce.set('float64', 'esriFieldTypeDouble'),
        ce.set('text', 'esriFieldTypeString');
      let ue = class extends ne {
        constructor() {
          super(...arguments),
            (this.storageInfo = null),
            (this.datasetFormat = 'CRF');
        }
        async open(e) {
          await this.init();
          const { data: t } = await this.request(this.url + '/conf.json', {
            signal: null == e ? void 0 : e.signal,
          });
          if (!this._validateHeader(t))
            throw new a.Z(
              'cloudraster:open',
              'Invalid or unsupported conf.json.',
            );
          this.datasetName = this.url.slice(this.url.lastIndexOf('/') + 1);
          const { storageInfo: r, rasterInfo: i } = this._parseHeader(t);
          if ('thematic' === i.dataType) {
            const e = await this._fetchAuxiliaryInformation();
            i.attributeTable = e;
          }
          this._set('storageInfo', r),
            this._set('rasterInfo', i),
            (this.ioConfig.retryCount = this.ioConfig.retryCount || 0);
        }
        async fetchRawTile(e, t, r, i = {}) {
          const n = this.rasterInfo.storageInfo.maximumPyramidLevel - e;
          if (n < 0) return null;
          const s = this._buildCacheFilePath(
              n,
              t,
              r,
              i.multidimensionalDefinition,
            ),
            a = this._getIndexRecordFromBundle(t, r),
            o = await this.request(s, {
              range: { from: 0, to: this.storageInfo.headerSize - 1 },
              responseType: 'array-buffer',
              signal: i.signal,
            });
          if (!o) return null;
          const l = new Uint8Array(o.data),
            c = this._getTileEndAndContentType(l, a);
          if (0 === c.recordSize) return null;
          const u = await this.request(s, {
            range: { from: c.position, to: c.position + c.recordSize },
            responseType: 'array-buffer',
            signal: i.signal,
          });
          return u
            ? this.decodePixelBlock(u.data, {
                width: this.rasterInfo.storageInfo.tileInfo.size[0],
                height: this.rasterInfo.storageInfo.tileInfo.size[1],
                planes: null,
                pixelType: null,
              })
            : null;
        }
        _validateHeader(e) {
          return (
            e &&
            'RasterInfo' === e.type &&
            ![
              'origin',
              'extent',
              'geodataXform',
              'LODInfos',
              'blockWidth',
              'blockHeight',
              'bandCount',
              'pixelType',
              'pixelSizeX',
              'pixelSizeY',
              'format',
              'packetSize',
            ].some((t) => !e[t])
          );
        }
        _parseHeader(e) {
          var t, r;
          const i = [
              'u1',
              'u2',
              'u4',
              'u8',
              's8',
              'u16',
              's16',
              'u32',
              's32',
              'f32',
              'f64',
            ][e.pixelType],
            {
              bandCount: n,
              histograms: s,
              colormap: a,
              blockWidth: o,
              blockHeight: l,
              firstPyramidLevel: c,
              maximumPyramidLevel: u,
            } = e,
            h =
              e.statistics &&
              e.statistics.map((e) => ({
                min: e.min,
                max: e.max,
                avg: e.mean,
                stddev: e.standardDeviation,
                median: e.median,
                mode: e.mode,
              })),
            d = e.extent.spatialReference,
            f = null == (t = e.geodataXform) ? void 0 : t.spatialReference,
            p = new E.Z((null != d && d.wkid) || (null != d && d.wkt) ? d : f);
          let m = new O.Z({
            xmin: e.extent.xmin,
            ymin: e.extent.ymin,
            xmax: e.extent.xmax,
            ymax: e.extent.ymax,
            spatialReference: p,
          });
          const g = new G.Z({
              x: e.pixelSizeX,
              y: e.pixelSizeY,
              spatialReference: p,
            }),
            y = Math.round((m.xmax - m.xmin) / g.x),
            x = Math.round((m.ymax - m.ymin) / g.y),
            w = this._parseTransform(e.geodataXform),
            b = w ? m : null;
          w &&
            ((m = w.forwardTransform(m)),
            (g.x = (m.xmax - m.xmin) / y),
            (g.y = (m.ymax - m.ymin) / x));
          const v = null != (r = e.properties) ? r : {},
            I = e.format.toLowerCase().replace('cache/', ''),
            _ = new G.Z(e.origin.x, e.origin.y, p);
          let C, S, R, T;
          if (a && a.colors)
            for (C = [], S = 0; S < a.colors.length; S++)
              (R = a.colors[S]),
                (T = a.values ? a.values[S] : S),
                C.push([
                  T,
                  255 & R,
                  (R << 16) >>> 24,
                  (R << 8) >>> 24,
                  R >>> 24,
                ]);
          const P = e.LODInfos,
            M = [];
          for (S = 0; S < P.levels.length; S++)
            M.push({
              level: P.levels[S],
              resolution: P.resolutions[S],
              scale: (96 / 0.0254) * P.resolutions[S],
            });
          const F = new k.Z({
              dpi: 96,
              lods: M,
              format: I,
              origin: _,
              size: [o, l],
              spatialReference: p,
            }),
            B = {
              recordSize: 8,
              packetSize: e.packetSize,
              headerSize: e.packetSize * e.packetSize * 8 + 64,
            },
            D = [
              {
                maxCol: Math.ceil(y / o) - 1,
                maxRow: Math.ceil(x / l) - 1,
                minCol: 0,
                minRow: 0,
              },
            ];
          let N = 2;
          if (u > 0)
            for (S = 0; S < u; S++)
              D.push({
                maxCol: Math.ceil(y / N / o) - 1,
                maxRow: Math.ceil(x / N / l) - 1,
                minCol: 0,
                minRow: 0,
              }),
                (N *= 2);
          const Z = e.mdInfo;
          return {
            storageInfo: B,
            rasterInfo: new J.Z({
              width: y,
              height: x,
              pixelType: i,
              bandCount: n,
              extent: m,
              nativeExtent: b,
              transform: w,
              spatialReference: p,
              pixelSize: g,
              keyProperties: v,
              statistics: h,
              histograms: s,
              multidimensionalInfo: Z,
              colormap: C,
              storageInfo: new W.Z({
                blockWidth: o,
                blockHeight: l,
                pyramidBlockWidth: o,
                pyramidBlockHeight: l,
                origin: _,
                tileInfo: F,
                firstPyramidLevel: c,
                maximumPyramidLevel: u,
                blockBoundary: D,
              }),
            }),
          };
        }
        _parseTransform(e) {
          var t, r;
          if (!(0, oe.j)(e))
            throw new a.Z(
              'cloudraster:open',
              'the data contains unsupported geodata transform types',
            );
          const i = (0, oe.c)(e);
          if ('identity' === i.type) return null;
          if (
            'polynomial' !== i.type ||
            null == (t = i.forwardCoefficients) ||
            !t.length ||
            null == (r = i.inverseCoefficients) ||
            !r.length
          )
            throw new a.Z(
              'cloudraster:open',
              'the data contains unsupported geodata transforms - both forward and inverse coefficients are required currently',
            );
          return i;
        }
        async _fetchAuxiliaryInformation(e) {
          const t = this.request(this.url + '/conf.vat.json', { signal: e })
              .then((e) => e.data)
              .catch(() => null),
            r = this.request(this.url + '/conf.vat.dbf', {
              responseType: 'array-buffer',
              signal: e,
            })
              .then((e) => e.data)
              .catch(() => null),
            i = await Promise.all([t, r]);
          let n;
          if (i[0]) {
            let e = i[0].fields;
            const t = i[0].values;
            if (e && t) {
              e = e.map((e) => ({
                type: 'OID' === e.name ? 'esriFieldTypeOID' : ce.get(e.type),
                name: e.name,
                alias: e.alias || e.name,
              }));
              const r = t.map((e) => ({ attributes: e }));
              e && t && (n = { fields: e, features: r });
            }
          }
          return (
            !n &&
              i[1] &&
              (n = class {
                static get supportedVersions() {
                  return [5];
                }
                static parse(e) {
                  const t = new DataView(e),
                    r = 3 & t.getUint8(0);
                  if (3 !== r)
                    return { header: { version: r }, recordSet: null };
                  const i = t.getUint32(4, !0),
                    n = t.getUint16(8, !0),
                    s = t.getUint16(10, !0),
                    a = {
                      version: r,
                      recordCount: i,
                      headerByteCount: n,
                      recordByteCount: s,
                    };
                  let o = 32;
                  const l = [],
                    c = [];
                  let u;
                  if (3 === r) {
                    for (; 13 !== t.getUint8(o); )
                      (u = String.fromCharCode(t.getUint8(o + 11)).trim()),
                        l.push({
                          name: (0, se.f)(new Uint8Array(e, o, 11)),
                          type: u,
                          typeName: [
                            'String',
                            'Date',
                            'Double',
                            'Boolean',
                            'String',
                            'Integer',
                          ][['C', 'D', 'F', 'L', 'M', 'N'].indexOf(u)],
                          length: t.getUint8(o + 16),
                        }),
                        (o += 32);
                    if (((o += 1), l.length > 0))
                      for (; c.length < i && e.byteLength - o > s; ) {
                        const r = [];
                        32 === t.getUint8(o)
                          ? ((o += 1),
                            l.forEach((t) => {
                              if ('C' === t.type)
                                r.push(
                                  (0, se.f)(
                                    new Uint8Array(e, o, t.length),
                                  ).trim(),
                                );
                              else if ('N' === t.type)
                                r.push(
                                  parseInt(
                                    String.fromCharCode
                                      .apply(
                                        null,
                                        new Uint8Array(e, o, t.length),
                                      )
                                      .trim(),
                                    10,
                                  ),
                                );
                              else if ('F' === t.type)
                                r.push(
                                  parseFloat(
                                    String.fromCharCode
                                      .apply(
                                        null,
                                        new Uint8Array(e, o, t.length),
                                      )
                                      .trim(),
                                  ),
                                );
                              else if ('D' === t.type) {
                                const i = String.fromCharCode
                                  .apply(null, new Uint8Array(e, o, t.length))
                                  .trim();
                                r.push(
                                  new Date(
                                    parseInt(i.substring(0, 4), 10),
                                    parseInt(i.substring(4, 6), 10) - 1,
                                    parseInt(i.substring(6, 8), 10),
                                  ),
                                );
                              }
                              o += t.length;
                            }),
                            c.push(r))
                          : (o += s);
                      }
                  }
                  return {
                    header: a,
                    fields: l,
                    records: c,
                    recordSet: ae({ fields: l, records: c }),
                  };
                }
              }.parse(i[1]).recordSet),
            le.default.fromJSON(n)
          );
        }
        _buildCacheFilePath(e, t, r, i) {
          const n = this.storageInfo.packetSize,
            s = Math.floor(t / n) * n,
            a = Math.floor(r / n) * n,
            l = 'R' + this._toHexString4(s) + 'C' + this._toHexString4(a);
          let c = 'L';
          c += e >= 10 ? e.toString() : '0' + e.toString();
          const { multidimensionalInfo: u } = this.rasterInfo,
            h = null == i ? void 0 : i[0];
          if (!(0, o.pC)(u) || !h)
            return `${this.url}/_alllayers/${c}/${l}.bundle`;
          let d = u.variables
            .find((e) => e.name === h.variableName)
            .dimensions[0].values.indexOf(h.values[0])
            .toString(16);
          const f = 4 - d.length;
          for (let e = 0; e < f; e++) d = '0' + d;
          return (
            (d = 'S' + d),
            `${this.url}/_alllayers/${h.variableName}/${d}/${c}/${l}.bundle`
          );
        }
        _getIndexRecordFromBundle(e, t) {
          const r = this.storageInfo.packetSize,
            i = r * (e % r) + (t % r);
          if (i < 0) throw 'Invalid level / row / col';
          return 20 + i * this.storageInfo.recordSize + 44;
        }
        _getTileEndAndContentType(e, t) {
          const r = e.subarray(t, t + 8);
          let i,
            n = 0;
          for (i = 0; i < 5; i++) n |= (255 & r[i]) << (8 * i);
          const s = 0xffffffffff & n;
          for (n = 0, i = 5; i < 8; i++) n |= (255 & r[i]) << (8 * (i - 5));
          return { position: s, recordSize: 0xffffffffff & n };
        }
        _toHexString4(e) {
          let t = e.toString(16);
          if (4 !== t.length) {
            let e = 4 - t.length;
            for (; e-- > 0; ) t = '0' + t;
          }
          return t;
        }
      };
      (0, i._)(
        [(0, u.Cb)({ readOnly: !0 })],
        ue.prototype,
        'storageInfo',
        void 0,
      ),
        (0, i._)(
          [(0, u.Cb)({ type: String, json: { write: !0 } })],
          ue.prototype,
          'datasetFormat',
          void 0,
        ),
        (ue = (0, i._)(
          [(0, p.j)('esri.layers.support.rasterDatasets.CloudRaster')],
          ue,
        ));
      const he = ue;
      let de = class extends ne {
        constructor() {
          super(...arguments), (this.datasetFormat = 'MEMORY');
        }
        async open(e) {
          var t;
          await this.init();
          const {
              pixelBlock: r,
              statistics: i,
              histograms: n,
              name: s,
              keyProperties: a,
              nativeExtent: o,
              transform: l,
            } = this.data,
            { width: c, height: u, pixelType: h } = r,
            d =
              this.data.extent ||
              new O.Z({
                xmin: -0.5,
                ymin: 0.5,
                xmax: c - 0.5,
                ymax: u - 0.5,
                spatialReference: new E.Z({ wkid: 3857 }),
              }),
            f =
              null != (t = this.data.isPseudoSpatialReference)
                ? t
                : !this.data.extent,
            p = { x: d.width / c, y: d.height / u },
            m = new J.Z({
              width: c,
              height: u,
              pixelType: h,
              extent: d,
              nativeExtent: o,
              transform: l,
              pixelSize: p,
              spatialReference: d.spatialReference,
              bandCount: 3,
              keyProperties: a || {},
              statistics: i,
              isPseudoSpatialReference: f,
              histograms: n,
            });
          this.createRemoteDatasetStorageInfo(m, 512, 512),
            this._set('rasterInfo', m),
            this.updateTileInfo(),
            await this._buildInMemoryRaster(r, { width: 512, height: 512 }, e),
            (this.datasetName = s),
            (this.url = '/InMemory/' + s);
        }
        fetchRawTile(e, t, r, i = {}) {
          const n = this._pixelBlockTiles.get(`${e}/${t}/${r}`);
          return Promise.resolve(n);
        }
        async _buildInMemoryRaster(e, t, r) {
          const i = this.rasterInfo.storageInfo.maximumPyramidLevel,
            n = this.rasterJobHandler
              ? this.rasterJobHandler.split(
                  { pixelBlock: e, tileSize: t, maximumPyramidLevel: i },
                  r,
                )
              : Promise.resolve((0, re.Vl)(e, t, i)),
            s = (0, o.pC)(this.rasterInfo.statistics),
            l = (0, o.pC)(this.rasterInfo.histograms),
            u =
              s && l
                ? Promise.resolve({ statistics: null, histograms: null })
                : this.rasterJobHandler
                ? this.rasterJobHandler.estimateStatisticsHistograms(
                    { pixelBlock: e },
                    r,
                  )
                : Promise.resolve((0, re.Hv)(e)),
            h = await (0, c.as)([n, u]);
          if (!h[0].value && h[1].value)
            throw new a.Z(
              'inmemory-raster:open',
              'failed to build in memory raster',
            );
          var d, f;
          (this._pixelBlockTiles = h[0].value),
            s ||
              (this.rasterInfo.statistics =
                null == (d = h[1].value) ? void 0 : d.statistics),
            l &&
              (this.rasterInfo.histograms =
                null == (f = h[1].value) ? void 0 : f.histograms);
        }
      };
      (0, i._)(
        [(0, u.Cb)({ type: String, json: { write: !0 } })],
        de.prototype,
        'datasetFormat',
        void 0,
      ),
        (0, i._)([(0, u.Cb)()], de.prototype, 'data', void 0),
        (de = (0, i._)(
          [(0, p.j)('esri.layers.support.rasterDatasets.InMemoryRaster')],
          de,
        ));
      const fe = de;
      function pe(e, t) {
        if (!e || !t) return [];
        let r = t;
        t.indexOf('/') > -1
          ? ((r = t.slice(0, t.indexOf('/'))),
            (t = t.slice(t.indexOf('/') + 1)))
          : (t = '');
        const i = [];
        if (t) {
          const n = pe(e, r);
          for (let e = 0; e < n.length; e++)
            pe(n[e], t).forEach((e) => i.push(e));
          return i;
        }
        const n = e.getElementsByTagNameNS('*', r);
        if (!n || 0 === n.length) return [];
        for (let e = 0; e < n.length; e++) i.push(n[e] || n.item[e]);
        return i;
      }
      function me(e, t) {
        if (!e || !t) return null;
        let r = t;
        t.indexOf('/') > -1
          ? ((r = t.slice(0, t.indexOf('/'))),
            (t = t.slice(t.indexOf('/') + 1)))
          : (t = '');
        const i = pe(e, r);
        return i.length > 0 ? (t ? me(i[0], t) : i[0]) : null;
      }
      function ge(e, t = null) {
        const r = t ? me(e, t) : e;
        let i;
        return r
          ? ((i = r.textContent || r.nodeValue), i ? i.trim() : null)
          : null;
      }
      function ye(e, t) {
        return (function (e, t) {
          const r = pe(e, t),
            i = [];
          let n;
          for (let e = 0; e < r.length; e++)
            (n = r[e].textContent || r[e].nodeValue),
              n && ((n = n.trim()), '' !== n && i.push(n));
          return i;
        })(e, t).map((e) => Number(e));
      }
      function xe(e, t) {
        const r = ge(e, t);
        return Number(r);
      }
      function we(e, t) {
        var r;
        const i =
            null == e || null == (r = e.nodeName) ? void 0 : r.toLowerCase(),
          n = t.toLowerCase();
        return i.slice(i.lastIndexOf(':') + 1) === n;
      }
      var be = r(87390);
      function ve(e, t) {
        if (!e || !t) return null;
        const r = [];
        for (let i = 0; i < e.length; i++) r.push(e[i]), r.push(t[i]);
        return r;
      }
      function Ie(e) {
        if (!e) return null;
        let t = Number(e);
        if (!isNaN(t) && 0 !== t) return new E.Z({ wkid: t });
        if ((e = String(e)).startsWith('COMPD_CS')) {
          if (
            !e.includes('VERTCS') ||
            (!e.includes('GEOGCS') && !e.startsWith('PROJCS'))
          )
            return null;
          const r = e.indexOf('VERTCS'),
            i = e.indexOf('PROJCS'),
            n = i > -1 ? i : e.indexOf('GEOGCS');
          if (-1 === n) return null;
          const s = e.slice(n, e.lastIndexOf(']', r) + 1).trim(),
            a = e.slice(r, e.lastIndexOf(']')).trim();
          t = _e(s);
          const o = new E.Z(t ? { wkid: t } : { wkt: s }),
            l = _e(a);
          return l && (o.vcsWkid = l), o;
        }
        return e.startsWith('GEOGCS') || e.startsWith('PROJCS')
          ? ((t = _e(e)), new E.Z(0 !== t ? { wkid: t } : { wkt: e }))
          : null;
      }
      function _e(e) {
        var t;
        const r = e
            .replace(/\]/g, '[')
            .replace(/\"/g, '')
            .split('[')
            .map((e) => e.trim())
            .filter((e) => '' !== e),
          i = r[r.length - 1].split(','),
          n = null == (t = i[0]) ? void 0 : t.toLowerCase();
        if (('epsg' === n || 'esri' === n) && e.endsWith('"]]')) {
          const e = Number(i[1]);
          if (!isNaN(e) && 0 !== e) return e;
        }
        return 0;
      }
      function Ce(e) {
        var t;
        if (
          'pamdataset' !==
          (null == e || null == (t = e.documentElement.tagName)
            ? void 0
            : t.toLowerCase())
        )
          return {};
        const r = {
          spatialReference: null,
          transform: null,
          metadata: {},
          rasterBands: [],
          statistics: null,
          histograms: null,
        };
        e.documentElement.childNodes.forEach((e) => {
          if (1 === e.nodeType)
            if (we(e, 'SRS')) {
              if (!r.spatialReference) {
                const t = ge(e);
                r.spatialReference = Ie(t);
              }
            } else if (we(e, 'Metadata'))
              if ('xml:ESRI' === e.getAttribute('domain')) {
                const { spatialReference: t, transform: i } = (function (e) {
                  var t;
                  const r = me(e, 'GeodataXform'),
                    i = Ie(
                      xe(r, 'SpatialReference/WKID') ||
                        ge(r, 'SpatialReference/WKT'),
                    );
                  if ('typens:PolynomialXform' !== r.getAttribute('xsi:type'))
                    return { spatialReference: i, transform: null };
                  const n = null != (t = xe(r, 'PolynomialOrder')) ? t : 1,
                    s = ye(r, 'CoeffX/Double'),
                    a = ye(r, 'CoeffY/Double'),
                    o = ye(r, 'InverseCoeffX/Double'),
                    l = ye(r, 'InverseCoeffY/Double'),
                    c = ve(s, a),
                    u = ve(o, l);
                  return {
                    spatialReference: i,
                    transform: new be.Z({
                      spatialReference: i,
                      polynomialOrder: n,
                      forwardCoefficients: c,
                      inverseCoefficients: u,
                    }),
                  };
                })(e);
                (r.transform = i),
                  r.spatialReference || (r.spatialReference = t);
              } else
                pe(e, 'MDI').forEach(
                  (e) => (r.metadata[e.getAttribute('key')] = ge(e)),
                );
            else if (we(e, 'PAMRasterBand')) {
              const t = (function (e) {
                var t;
                const r = xe(e, 'NoDataValue'),
                  i = me(e, 'Histograms/HistItem'),
                  n = xe(i, 'HistMin'),
                  s = xe(i, 'HistMax'),
                  a = xe(i, 'BucketCount'),
                  o =
                    null == (t = ge(i, 'HistCounts'))
                      ? void 0
                      : t.split('|').map((e) => Number(e));
                let l, c, u, h;
                pe(e, 'Metadata/MDI').forEach((e) => {
                  var t;
                  const r = Number(
                    null != (t = e.textContent) ? t : e.nodeValue,
                  );
                  switch (e.getAttribute('key').toUpperCase()) {
                    case 'STATISTICS_MINIMUM':
                      l = r;
                      break;
                    case 'STATISTICS_MAXIMUM':
                      c = r;
                      break;
                    case 'STATISTICS_MEAN':
                      u = r;
                      break;
                    case 'STATISTICS_STDDEV':
                      h = r;
                  }
                });
                const d = xe(e, 'Metadata/SourceBandIndex');
                return {
                  noDataValue: r,
                  histogram:
                    null != o && o.length && null != l && null != c
                      ? { min: n, max: s, size: a || o.length, counts: o }
                      : null,
                  sourceBandIndex: d,
                  statistics:
                    null != l && null != c
                      ? { min: l, max: c, avg: u, stddev: h }
                      : null,
                };
              })(e);
              null != t.sourceBandIndex &&
              null == r.rasterBands[t.sourceBandIndex]
                ? (r.rasterBands[t.sourceBandIndex] = t)
                : r.rasterBands.push(t);
            }
        });
        const i = r.rasterBands;
        if (i) {
          const e = !!i[0].statistics;
          r.statistics = e ? i.map((e) => e.statistics) : null;
          const t = !!i[0].histogram;
          r.histograms = t ? i.map((e) => e.histogram) : null;
        }
        return r;
      }
      let Se = class extends ne {
        async open(e) {
          await this.init();
          const t = await this._fetchData(e);
          let {
            spatialReference: r,
            statistics: i,
            histograms: n,
            transform: s,
          } = await this._fetchAuxiliaryData(e);
          const a = !r;
          a && (r = new E.Z({ wkid: 3857 })),
            null != n && n.length && null == i && (i = (0, re.Oh)(n));
          const { width: o, height: l } = t;
          let c = new O.Z({
            xmin: -0.5,
            ymin: 0.5 - l,
            xmax: o - 0.5,
            ymax: 0.5,
            spatialReference: r,
          });
          const u = s ? s.forwardTransform(c) : c;
          let h = !0;
          if (s) {
            const e = s.forwardCoefficients;
            (h = e && 0 === e[1] && 0 === e[2]), h && ((s = null), (c = u));
          }
          const d = new fe({
            data: {
              extent: u,
              nativeExtent: c,
              transform: s,
              pixelBlock: t,
              statistics: i,
              histograms: n,
              keyProperties: { DateType: 'Processed' },
              isPseudoSpatialReference: a,
            },
          });
          await d.open(),
            this._set('rasterInfo', d.rasterInfo),
            (this._inMemoryRaster = d);
        }
        fetchRawTile(e, t, r, i = {}) {
          return this._inMemoryRaster.fetchRawTile(e, t, r, i);
        }
        async _fetchData(e) {
          const { data: t } = await this.request(this.url, {
              responseType: 'array-buffer',
              signal: null == e ? void 0 : e.signal,
            }),
            r = (0, te.y)(t).toUpperCase();
          if ('JPG' !== r && 'PNG' !== r && 'GIF' !== r && 'BMP' !== r)
            throw new a.Z(
              'image-aux-raster:open',
              'the data is not a supported format',
            );
          return (
            this._set('datasetFormat', r),
            await this.decodePixelBlock(t, {
              format: 'jpg',
              width: 1,
              height: 1,
              useCanvas: !0,
            })
          );
        }
        async _fetchAuxiliaryData(e) {
          var t, r;
          const i = (0, o.Wg)(null == e ? void 0 : e.signal),
            n = null != (t = this.ioConfig.skipExtensions) ? t : [],
            s =
              n.indexOf('aux.xml') > -1
                ? null
                : this.request(this.url + '.aux.xml', {
                    responseType: 'xml',
                    signal: i,
                  }),
            a = this.datasetFormat,
            l =
              'JPG' === a
                ? 'jgw'
                : 'PNG' === a
                ? 'pgw'
                : 'BMP' === a
                ? 'bpw'
                : null,
            u =
              n.indexOf(l) > -1
                ? null
                : this.request(
                    this.url.slice(0, this.url.lastIndexOf('.')) + '.' + l,
                    { responseType: 'text', signal: i },
                  ),
            h = await (0, c.as)([s, u]);
          if (null != i && i.aborted) throw (0, c.zE)();
          const d = Ce(null == (r = h[0].value) ? void 0 : r.data);
          if (!d.transform) {
            const e = h[1].value
              ? h[1].value.data
                  .split('\n')
                  .slice(0, 6)
                  .map((e) => Number(e))
              : null;
            d.transform =
              6 === (null == e ? void 0 : e.length)
                ? new be.Z({
                    forwardCoefficients: [e[4], e[5], e[0], -e[1], e[2], -e[3]],
                  })
                : null;
          }
          return d;
        }
      };
      (0, i._)(
        [(0, u.Cb)({ type: String, json: { write: !0 } })],
        Se.prototype,
        'datasetFormat',
        void 0,
      ),
        (Se = (0, i._)(
          [(0, p.j)('esri.layers.support.rasterDatasets.ImageAuxRaster')],
          Se,
        ));
      const ke = Se;
      var Re = r(17452),
        Te = r(45322),
        Pe = r(56608),
        Me = r(29680);
      let Oe = class extends ne {
        constructor() {
          super(...arguments),
            (this._levelOffset = 0),
            (this._slices = null),
            (this._tilemapCache = null),
            (this.datasetFormat = 'RasterTileServer');
        }
        async open(e) {
          await this.init();
          const t = e && e.signal,
            r = this.sourceJSON
              ? { data: this.sourceJSON }
              : await this.request(this.url, {
                  query: { f: 'json' },
                  signal: t,
                });
          r.ssl && (this.url = this.url.replace(/^http:/i, 'https:'));
          const i = r.data;
          if (((this.sourceJSON = i), !i))
            throw new a.Z(
              'imageserverraster:open',
              'cannot initialize tiled image service, missing service info',
            );
          if (!i.tileInfo)
            throw new a.Z(
              'imageserverraster:open',
              'use ImageryLayer to open non-tiled image services',
            );
          this._fixScaleInServiceInfo(),
            (this.tileType = i.cacheType),
            null == this.tileType &&
              ([
                'jpg',
                'jpeg',
                'png',
                'png8',
                'png24',
                'png32',
                'mixed',
              ].indexOf(i.tileInfo.format.toLowerCase()) > -1
                ? (this.tileType = 'Map')
                : 'lerc' === i.tileInfo.format.toLowerCase()
                ? (this.tileType = 'Elevation')
                : (this.tileType = 'Raster')),
            (this.datasetName = i.name.slice(i.name.indexOf('/') + 1));
          const n = await this._fetchRasterInfo({ signal: t });
          if (!(0, o.pC)(n))
            throw new a.Z(
              'image-server-raster:open',
              'cannot initialize image service',
            );
          {
            const e =
                'Map' === this.tileType
                  ? (0, Te.d)(i.tileInfo, i)
                  : k.Z.fromJSON(i.tileInfo),
              { extent: t, pixelSize: r } = n,
              s = (0.5 / n.width) * r.x;
            let a, o;
            const l = e.lodAt(
              Math.max.apply(
                null,
                e.lods.map((e) => e.level),
              ),
            );
            'Map' !== this.tileType &&
              0 !== i.maxScale &&
              ('Raster' === this.tileType
                ? ((a = e.lods.find((e) => e.resolution === r.x)),
                  a || (a = e.lods[e.lods.length - 1]))
                : ((a = e.lods.find((e) => Math.abs(e.scale - i.maxScale) < s)),
                  a ||
                    (a = e.lods
                      .filter((e) => e.scale > i.maxScale)
                      .sort((e, t) => (e.scale > t.scale ? 1 : -1))[0])),
              (r.x = r.y = a.resolution),
              (n.width = Math.ceil((t.xmax - t.xmin) / r.x - 0.1)),
              (n.height = Math.ceil((t.ymax - t.ymin) / r.y - 0.1))),
              a || (a = l);
            const c = e.lodAt(
              Math.min.apply(
                null,
                e.lods.map((e) => e.level),
              ),
            );
            'Map' === this.tileType
              ? (this._levelOffset = e.lods[0].level)
              : 0 !== i.minScale &&
                'Elevation' === this.tileType &&
                ((o = e.lods.find((e) => Math.abs(e.scale - i.minScale) < s)),
                (this._levelOffset = o.level - c.level)),
              o || (o = c);
            const u = Math.max(r.x, r.y);
            (Math.abs(r.x - r.y) > s ||
              !e.lods.some((e) => Math.abs(e.resolution - u) < s)) &&
              ((r.x = r.y = a.resolution),
              (n.width = Math.ceil((t.xmax - t.xmin) / r.x - 0.1)),
              (n.height = Math.ceil((t.ymax - t.ymin) / r.y - 0.1)));
            const h = a.level - o.level,
              [d, f] = e.size,
              p = [];
            e.lods.forEach((e) => {
              e.level >= o.level &&
                e.level <= a.level &&
                p.push({ x: e.resolution, y: e.resolution });
            }),
              p.sort((e, t) => e.x - t.x);
            const m = this.computeBlockBoundary(t, d, f, e.origin, p, h),
              g = p.length > 1 ? p.slice(1) : null;
            (n.storageInfo = new W.Z({
              blockWidth: e.size[0],
              blockHeight: e.size[1],
              pyramidBlockWidth: e.size[0],
              pyramidBlockHeight: e.size[1],
              pyramidResolutions: g,
              compression: e.format,
              origin: e.origin,
              firstPyramidLevel: 1,
              maximumPyramidLevel: h,
              tileInfo: e,
              blockBoundary: m,
            })),
              this._fixGCSShift(n),
              this._set('rasterInfo', n);
          }
          if (i.capabilities.toLowerCase().indexOf('tilemap') > -1) {
            const e = {
              tileInfo: n.storageInfo.tileInfo,
              parsedUrl: (0, Re.mN)(this.url),
              url: this.url,
              tileServers: [],
              type: 'tile',
            };
            this._tilemapCache = new Pe.y({ layer: e });
          }
        }
        async fetchRawTile(e, t, r, i = {}) {
          if (this._slices && null == i.sliceId) return null;
          const { storageInfo: n, extent: s } = this.rasterInfo,
            a = n.maximumPyramidLevel - e + this._levelOffset,
            o = `${this.url}/tile/${a}/${t}/${r}`,
            l = this._slices ? { sliceId: i.sliceId || 0 } : null,
            { data: c } = await this.request(o, {
              query: l,
              responseType: 'array-buffer',
              signal: i.signal,
            });
          if (!c) return null;
          const u = await this.decodePixelBlock(c, {
              width: n.tileInfo.size[0],
              height: n.tileInfo.size[1],
              planes: null,
              pixelType: null,
              isPoint: 'Elevation' === this.tileType,
            }),
            h = n.blockBoundary[e];
          if (
            'jpg' !== n.compression ||
            (r > h.minCol && r < h.maxCol && t > h.minRow && t < h.maxRow)
          )
            return u;
          const { origin: d, blockWidth: f, blockHeight: p } = n,
            { x: m, y: g } = this.getPyramidPixelSize(e),
            y = Math.round((s.xmin - d.x) / m) % f,
            x = Math.round((s.xmax - d.x) / m) % f || f,
            w = Math.round((d.y - s.ymax) / g) % p,
            b = Math.round((d.y - s.ymin) / g) % p || p,
            v = r === h.minCol ? y : 0,
            I = t === h.minRow ? w : 0,
            _ = r === h.maxCol ? x : f,
            C = t === h.maxRow ? b : p;
          return (
            (0, re.pW)(u, { x: v, y: I }, { width: _ - v, height: C - I }), u
          );
        }
        getSliceIndex(e) {
          if (!this._slices || (0, o.Wi)(e) || 0 === e.length) return null;
          const t = e;
          for (let e = 0; e < this._slices.length; e++) {
            const r = this._slices[e].multidimensionalDefinition;
            if (
              r.length === t.length &&
              !r.some((e) => {
                const r = t.find(
                  (t) =>
                    e.variableName === t.variableName &&
                    t.dimensionName === e.dimensionName,
                );
                return (
                  !r ||
                  (Array.isArray(e.values[0])
                    ? `${e.values[0][0]}-${e.values[0][1]}`
                    : e.values[0]) !==
                    (Array.isArray(r.values[0])
                      ? `${r.values[0][0]}-${r.values[0][1]}`
                      : r.values[0])
                );
              })
            )
              return e;
          }
          return null;
        }
        async fetchVariableStatisticsHistograms(e, t) {
          const r = this.request(this.url + '/statistics', {
              query: { variable: e, f: 'json' },
              signal: t,
            }).then((e) => {
              var t;
              return null == (t = e.data) ? void 0 : t.statistics;
            }),
            i = this.request(this.url + '/histograms', {
              query: { variable: e, f: 'json' },
              signal: t,
            }).then((e) => {
              var t;
              return null == (t = e.data) ? void 0 : t.histograms;
            }),
            n = await Promise.all([r, i]);
          return (
            n[0] &&
              n[0].forEach((e) => {
                (e.avg = e.mean), (e.stddev = e.standardDeviation);
              }),
            { statistics: n[0] || null, histograms: n[1] || null }
          );
        }
        async computeBestPyramidLevelForLocation(e, t = {}) {
          if (!this._tilemapCache) return 0;
          let r = this.identifyPixelLocation(
            e,
            0,
            (0, o.Wg)(t.datumTransformation),
          );
          if (null === r) return null;
          let i = 0;
          const { maximumPyramidLevel: n } = this.rasterInfo.storageInfo;
          let s = n - i + this._levelOffset;
          const a = r.srcLocation;
          for (; s >= 0; ) {
            try {
              if (
                'available' ===
                (await this._tilemapCache.fetchAvailability(s, r.row, r.col, t))
              )
                break;
            } catch {}
            if (
              (s--,
              i++,
              (r = this.identifyPixelLocation(
                a,
                i,
                (0, o.Wg)(t.datumTransformation),
              )),
              null === r)
            )
              return null;
          }
          return -1 === s || null == r ? null : i;
        }
        async _fetchRasterInfo(e) {
          const t = this.sourceJSON,
            r = Math.ceil((t.extent.xmax - t.extent.xmin) / t.pixelSizeX - 0.1),
            i = Math.ceil((t.extent.ymax - t.extent.ymin) / t.pixelSizeY - 0.1),
            n = E.Z.fromJSON(t.spatialReference || t.extent.spatialReference);
          if ('Map' === this.tileType)
            return new J.Z({
              width: r,
              height: i,
              bandCount: 3,
              extent: O.Z.fromJSON(t.extent),
              spatialReference: n,
              pixelSize: new G.Z({
                x: t.pixelSizeX,
                y: t.pixelSizeY,
                spatialReference: n,
              }),
              pixelType: 'u8',
              statistics: null,
              keyProperties: { DataType: 'processed' },
            });
          const { slice: s, signal: a } = e,
            o =
              !!t.hasRasterAttributeTable &&
              this.request(this.url + '/rasterAttributeTable', {
                query: { slice: s, f: 'json' },
                signal: a,
              })
                .then((e) => le.default.fromJSON(e.data))
                .catch(() => null),
            l =
              !!t.hasColormap &&
              this.request(this.url + '/colormap', {
                query: { slice: s, f: 'json' },
                signal: a,
              }).then((e) => {
                var t;
                return null == (t = e.data) ? void 0 : t.colormap;
              }),
            c =
              !!t.hasHistograms &&
              this.request(this.url + '/histograms', {
                query: { slice: s, f: 'json' },
                signal: a,
              }).then((e) => {
                var t;
                return null == (t = e.data) ? void 0 : t.histograms;
              }),
            u = this.request(this.url + '/keyProperties', {
              query: { f: 'json' },
              signal: a,
            })
              .then((e) => e.data)
              .catch(() => {}),
            h = !!t.hasMultidimensions && this._fetchMultidimensionalInfo(),
            d =
              !!t.hasMultidimensions &&
              this.request(this.url + '/slices', {
                query: { f: 'json' },
                signal: a,
              })
                .then((e) => e.data && e.data.slices)
                .catch(() => {});
          return Promise.all([o, l, c, u, h, d]).then((e) => {
            let s = null;
            if (t.minValues && t.minValues.length === t.bandCount) {
              s = [];
              for (let e = 0; e < t.minValues.length; e++)
                s.push({
                  min: t.minValues[e],
                  max: t.maxValues[e],
                  avg: t.meanValues[e],
                  stddev: t.stdvValues[e],
                });
            }
            return (
              (this._slices = e[5] || null),
              new J.Z({
                width: r,
                height: i,
                bandCount: t.bandCount,
                extent: O.Z.fromJSON(t.extent),
                spatialReference: n,
                pixelSize: new G.Z({
                  x: t.pixelSizeX,
                  y: t.pixelSizeY,
                  spatialReference: n,
                }),
                pixelType: t.pixelType.toLowerCase(),
                statistics: s,
                attributeTable: e[0] || null,
                colormap: e[1] || null,
                histograms: e[2] || null,
                keyProperties: e[3] || {},
                multidimensionalInfo: e[4] || null,
              })
            );
          });
        }
        async _fetchMultidimensionalInfo(e) {
          var t;
          const r = await this.request(this.url + '/multidimensionalInfo', {
            query: { f: 'json' },
            signal: e,
          }).then((e) => {
            var t;
            return null == (t = e.data) ? void 0 : t.multidimensionalInfo;
          });
          return (
            null != (t = r.variables) &&
              t.length &&
              r.variables.forEach((e) => {
                var t;
                null != (t = e.statistics) &&
                  t.length &&
                  e.statistics.forEach((e) => {
                    (e.avg = e.mean), (e.stddev = e.standardDeviation);
                  });
              }),
            r
          );
        }
        _fixScaleInServiceInfo() {
          const { sourceJSON: e } = this;
          e.minScale && e.minScale < 0 && (e.minScale = 0),
            e.maxScale && e.maxScale < 0 && (e.maxScale = 0);
        }
        _fixGCSShift(e) {
          const { extent: t, spatialReference: r } = e;
          0 === t.xmin &&
            360 === t.xmax &&
            r.wkid &&
            r.isGeographic &&
            ((e.nativeExtent = e.extent),
            (e.transform = new Me.Z()),
            (e.extent = e.transform.forwardTransform(t)));
        }
      };
      (0, i._)(
        [(0, u.Cb)({ type: String, json: { write: !0 } })],
        Oe.prototype,
        'datasetFormat',
        void 0,
      ),
        (0, i._)([(0, u.Cb)()], Oe.prototype, 'tileType', void 0),
        (Oe = (0, i._)(
          [(0, p.j)('esri.layers.support.rasterDatasets.ImageServerRaster')],
          Oe,
        ));
      const Ee = Oe;
      var Fe = r(54163),
        Be = r(48279);
      const De = new Map();
      De.set('Int8', 's8'),
        De.set('UInt8', 'u8'),
        De.set('Int16', 's16'),
        De.set('UInt16', 'u16'),
        De.set('Int32', 's32'),
        De.set('UInt32', 'u32'),
        De.set('Float32', 'f32'),
        De.set('Float64', 'f32'),
        De.set('Double64', 'f32');
      const Ne = new Map();
      Ne.set('none', {
        blobExtension: '.til',
        isOneSegment: !0,
        decoderFormat: 'bip',
      }),
        Ne.set('lerc', {
          blobExtension: '.lrc',
          isOneSegment: !1,
          decoderFormat: 'lerc',
        }),
        Ne.set('deflate', {
          blobExtension: '.pzp',
          isOneSegment: !0,
          decoderFormat: 'deflate',
        }),
        Ne.set('jpeg', {
          blobExtension: '.pjg',
          isOneSegment: !0,
          decoderFormat: 'jpg',
        });
      let Ze = class extends ne {
        constructor() {
          super(...arguments),
            (this._files = null),
            (this._storageIndex = null),
            (this.datasetFormat = 'MRF');
        }
        async open(e) {
          var t;
          await this.init(),
            (this.datasetName = this.url.slice(this.url.lastIndexOf('/') + 1));
          const r = e ? (0, o.Wg)(e.signal) : null,
            i = await this.request(this.url, {
              responseType: 'xml',
              signal: r,
            }),
            { rasterInfo: n, files: s } = this._parseHeader(i.data);
          if (
            -1 ===
            (null == (t = this.ioConfig.skipExtensions)
              ? void 0
              : t.indexOf('aux.xml'))
          ) {
            const t = await this._fetchAuxiliaryData(e);
            var a;
            null != t &&
              ((n.statistics = null != (a = t.statistics) ? a : n.statistics),
              (n.histograms = t.histograms),
              t.histograms &&
                !(0, o.pC)(n.statistics) &&
                (n.statistics = (0, re.Oh)(t.histograms)));
          }
          this._set('rasterInfo', n), (this._files = s);
          const l = await this.request(s.index, {
            responseType: 'array-buffer',
            signal: r,
          });
          this._storageIndex = this._parseIndex(l.data);
          const { blockWidth: c, blockHeight: u } = this.rasterInfo.storageInfo,
            h = this.rasterInfo.storageInfo.pyramidScalingFactor,
            { width: d, height: f } = this.rasterInfo,
            p = [],
            m = this._getBandSegmentCount();
          let g = 0,
            y = -1;
          for (; g < this._storageIndex.length; ) {
            y++;
            const e = Math.ceil(d / c / h ** y) - 1,
              t = Math.ceil(f / u / h ** y) - 1;
            (g += (e + 1) * (t + 1) * m * 4),
              p.push({ maxRow: t, maxCol: e, minCol: 0, minRow: 0 });
          }
          (this.rasterInfo.storageInfo.blockBoundary = p),
            y > 0 &&
              ((this.rasterInfo.storageInfo.firstPyramidLevel = 1),
              (this.rasterInfo.storageInfo.maximumPyramidLevel = y)),
            this.updateTileInfo();
        }
        async fetchRawTile(e, t, r, i = {}) {
          const {
              blockWidth: n,
              blockHeight: s,
              blockBoundary: a,
            } = this.rasterInfo.storageInfo,
            l = a[e];
          if (
            !l ||
            l.maxRow < t ||
            l.maxCol < r ||
            l.minRow > t ||
            l.minCol > r
          )
            return null;
          const { bandCount: c, pixelType: u } = this.rasterInfo,
            {
              ranges: h,
              actualTileWidth: d,
              actualTileHeight: f,
            } = this._getTileLocation(e, t, r);
          if (!h || 0 === h.length) return null;
          if (0 === h[0].from && 0 === h[0].to) {
            const e = new Uint8Array(n * s);
            return new Fe.Z({
              width: n,
              height: s,
              pixels: null,
              mask: e,
              validPixelCount: 0,
            });
          }
          const { bandIds: p } = this.ioConfig,
            m = this._getBandSegmentCount(),
            g = [];
          let y = 0;
          for (y = 0; y < m; y++)
            (!p || p.indexOf[y] > -1) &&
              g.push(
                this.request(this._files.data, {
                  range: { from: h[y].from, to: h[y].to },
                  responseType: 'array-buffer',
                  signal: i.signal,
                }),
              );
          const x = await Promise.all(g),
            w = x.map((e) => e.data.byteLength).reduce((e, t) => e + t),
            b = new Uint8Array(w);
          let v = 0;
          for (y = 0; y < m; y++)
            b.set(new Uint8Array(x[y].data), v), (v += x[y].data.byteLength);
          const I = Ne.get(
              this.rasterInfo.storageInfo.compression,
            ).decoderFormat,
            _ = await this.decodePixelBlock(b.buffer, {
              width: n,
              height: s,
              format: I,
              planes: (null == p ? void 0 : p.length) || c,
              pixelType: u,
            });
          if (
            (0, o.pC)(this.rasterInfo.noDataValue) &&
            'lerc' !== I &&
            !_.mask
          ) {
            const e = this.rasterInfo.noDataValue[0];
            if (null != e) {
              const t = _.width * _.height,
                r = new Uint8Array(t);
              if (Math.abs(e) > 1e24)
                for (y = 0; y < t; y++)
                  Math.abs((_.pixels[0][y] - e) / e) > 1e-6 && (r[y] = 1);
              else for (y = 0; y < t; y++) _.pixels[0][y] !== e && (r[y] = 1);
              _.mask = r;
            }
          }
          let C = 0,
            S = 0;
          if (d !== n || f !== s) {
            let e = _.mask;
            if (e)
              for (y = 0; y < s; y++)
                if (((S = y * n), y < f)) for (C = d; C < n; C++) e[S + C] = 0;
                else for (C = 0; C < n; C++) e[S + C] = 0;
            else
              for (e = new Uint8Array(n * s), _.mask = e, y = 0; y < f; y++)
                for (S = y * n, C = 0; C < d; C++) e[S + C] = 1;
          }
          return _;
        }
        _parseIndex(e) {
          if (e.byteLength % 16 > 0)
            throw 'invalid array buffer must be multiples of 16';
          let t, r, i, n, s, a;
          if (Be.f) {
            for (
              r = new Uint8Array(e),
                n = new ArrayBuffer(e.byteLength),
                i = new Uint8Array(n),
                s = 0;
              s < e.byteLength / 4;
              s++
            )
              for (a = 0; a < 4; a++) i[4 * s + a] = r[4 * s + 3 - a];
            t = new Uint32Array(n);
          } else t = new Uint32Array(e);
          return t;
        }
        _getBandSegmentCount() {
          return Ne.get(this.rasterInfo.storageInfo.compression).isOneSegment
            ? 1
            : this.rasterInfo.bandCount;
        }
        _getTileLocation(e, t, r) {
          const {
              blockWidth: i,
              blockHeight: n,
              pyramidScalingFactor: s,
            } = this.rasterInfo.storageInfo,
            { width: a, height: o } = this.rasterInfo,
            l = this._getBandSegmentCount();
          let c,
            u,
            h,
            d = 0,
            f = 0;
          for (h = 0; h < e; h++)
            (f = s ** h),
              (c = Math.ceil(a / i / f)),
              (u = Math.ceil(o / n / f)),
              (d += c * u);
          (f = s ** e),
            (c = Math.ceil(a / i / f)),
            (u = Math.ceil(o / n / f)),
            (d += t * c + r),
            (d *= 4 * l);
          const p = this._storageIndex.subarray(d, d + 4 * l);
          let m = 0,
            g = 0;
          const y = [];
          for (let e = 0; e < l; e++)
            (m = p[4 * e + 0] * 2 ** 32 + p[4 * e + 1]),
              (g = m + p[4 * e + 2] * 2 ** 32 + p[4 * e + 3]),
              y.push({ from: m, to: g });
          return {
            ranges: y,
            actualTileWidth: r < c - 1 ? i : Math.ceil(a / f) - i * (c - 1),
            actualTileHeight: t < u - 1 ? n : Math.ceil(o / f) - n * (u - 1),
          };
        }
        _parseHeader(e) {
          const t = me(e, 'MRF_META/Raster');
          if (!t) throw new a.Z('mrf:open', 'not a valid MRF format');
          const r = me(t, 'Size'),
            i = parseInt(r.getAttribute('x'), 10),
            n = parseInt(r.getAttribute('y'), 10),
            s = parseInt(r.getAttribute('c'), 10),
            o = (ge(t, 'Compression') || 'none').toLowerCase();
          if (!Ne.has(o))
            throw new a.Z(
              'mrf:open',
              'currently does not support compression ' + o,
            );
          const l = ge(t, 'DataType') || 'UInt8',
            c = De.get(l);
          if (null == c)
            throw new a.Z(
              'mrf:open',
              'currently does not support pixel type ' + l,
            );
          const u = me(t, 'PageSize'),
            h = parseInt(u.getAttribute('x'), 10),
            d = parseInt(u.getAttribute('y'), 10),
            f = me(t, 'DataValues');
          let p, m;
          if (
            (f &&
              ((m = f.getAttribute('NoData')),
              null != m &&
                (p = m
                  .trim()
                  .split(' ')
                  .map((e) => parseFloat(e)))),
            me(e, 'MRF_META/CachedSource'))
          )
            throw new a.Z(
              'mrf:open',
              'currently does not support MRF referencing other data files',
            );
          const g = me(e, 'MRF_META/GeoTags'),
            y = me(g, 'BoundingBox');
          let x,
            w = !1;
          if (null != y) {
            const e = parseFloat(y.getAttribute('minx')),
              t = parseFloat(y.getAttribute('miny')),
              r = parseFloat(y.getAttribute('maxx')),
              i = parseFloat(y.getAttribute('maxy')),
              n = ge(g, 'Projection') || '';
            let s;
            if ('LOCAL_CS[]' !== n)
              if (n.toLowerCase().startsWith('epsg:')) {
                const e = Number(n.slice(5));
                isNaN(e) || 0 === e || (s = new E.Z({ wkid: e }));
              } else s = Ie(n);
            else (w = !0), (s = new E.Z({ wkid: 3857 }));
            (x = new O.Z(e, t, r, i)), (x.spatialReference = s);
          } else
            (w = !0),
              (x = new O.Z({
                xmin: -0.5,
                ymin: 0.5 - n,
                xmax: i - 0.5,
                ymax: 0.5,
                spatialReference: new E.Z({ wkid: 3857 }),
              }));
          const b = me(e, 'MRF_META/Rsets'),
            v = parseInt((b && b.getAttribute('scale')) || '2', 10),
            I = x.spatialReference,
            _ = new W.Z({
              origin: new G.Z({ x: x.xmin, y: x.ymax, spatialReference: I }),
              blockWidth: h,
              blockHeight: d,
              pyramidBlockWidth: h,
              pyramidBlockHeight: d,
              compression: o,
              pyramidScalingFactor: v,
            }),
            C = new G.Z({
              x: x.width / i,
              y: x.height / n,
              spatialReference: I,
            }),
            S = new J.Z({
              width: i,
              height: n,
              extent: x,
              isPseudoSpatialReference: w,
              spatialReference: I,
              bandCount: s,
              pixelType: c,
              pixelSize: C,
              noDataValue: p,
              storageInfo: _,
            }),
            k = ge(e, 'datafile'),
            R = ge(e, 'IndexFile');
          return {
            rasterInfo: S,
            files: {
              mrf: this.url,
              index: R || this.url.replace('.mrf', '.idx'),
              data: k || this.url.replace('.mrf', Ne.get(o).blobExtension),
            },
          };
        }
        async _fetchAuxiliaryData(e) {
          try {
            const { data: t } = await this.request(this.url + '.aux.xml', {
              responseType: 'xml',
              signal: null == e ? void 0 : e.signal,
            });
            return Ce(t);
          } catch {
            return null;
          }
        }
      };
      (0, i._)([(0, u.Cb)()], Ze.prototype, '_files', void 0),
        (0, i._)([(0, u.Cb)()], Ze.prototype, '_storageIndex', void 0),
        (0, i._)(
          [(0, u.Cb)({ type: String, json: { write: !0 } })],
          Ze.prototype,
          'datasetFormat',
          void 0,
        ),
        (Ze = (0, i._)(
          [(0, p.j)('esri.layers.support.rasterIO.MRFRaster')],
          Ze,
        ));
      const Le = Ze;
      var Ae = r(94793),
        He = r(9832);
      const ze = function (e, t) {
          const r = e.get(t);
          return r && r.values;
        },
        Je = function (e, t) {
          const r = e.get(t);
          return r && r.values[0];
        };
      let We = class extends ne {
        constructor() {
          super(...arguments),
            (this._files = null),
            (this._headerInfo = null),
            (this._bufferSize = 1048576),
            (this.datasetFormat = 'TIFF');
        }
        async open(e) {
          var t, r, i;
          await this.init();
          const n = e ? (0, o.Wg)(e.signal) : null,
            { data: s } = await this.request(this.url, {
              range: { from: 0, to: this._bufferSize },
              responseType: 'array-buffer',
              signal: n,
            });
          if (!s)
            throw new a.Z('tiffraster:open', 'failed to open url ' + this.url);
          this.datasetName = this.url.slice(this.url.lastIndexOf('/') + 1);
          const { littleEndian: l, firstIFD: c, isBigTiff: u } = (0, Ae.cK)(s),
            h = [];
          await this._readIFDs(h, s, l, c, 0, u ? 8 : 4, n);
          const d = (0, Ae.FI)(h),
            {
              width: f,
              height: p,
              tileWidth: m,
              tileHeight: g,
              planes: y,
              pixelType: x,
              compression: w,
              firstPyramidLevel: b,
              maximumPyramidLevel: v,
              pyramidBlockWidth: I,
              pyramidBlockHeight: _,
              tileBoundary: C,
              affine: S,
              metadata: k,
            } = d;
          let R = Ie(
              (null == (t = d.extent.spatialReference) ? void 0 : t.wkt) ||
                (null == (r = d.extent.spatialReference) ? void 0 : r.wkid),
            ),
            T = !1;
          null == R && ((T = !0), (R = new E.Z({ wkid: 3857 })));
          const P = new O.Z({ ...d.extent, spatialReference: R }),
            M = new G.Z(
              P
                ? { x: P.xmin, y: P.ymax, spatialReference: R }
                : { x: 0, y: 0 },
            ),
            F = new W.Z({
              blockWidth: m,
              blockHeight: g,
              pyramidBlockWidth: I,
              pyramidBlockHeight: _,
              compression: w,
              origin: M,
              firstPyramidLevel: b,
              maximumPyramidLevel: v,
              blockBoundary: C,
            }),
            B = new G.Z({
              x: (P.xmax - P.xmin) / f,
              y: (P.ymax - P.ymin) / p,
              spatialReference: R,
            }),
            D = k
              ? { BandProperties: k.bandProperties, DataType: k.dataType }
              : {},
            N = new J.Z({
              width: f,
              height: p,
              bandCount: y,
              pixelType: x,
              compression: w,
              pixelSize: B,
              storageInfo: F,
              spatialReference: R,
              isPseudoSpatialReference: T,
              keyProperties: D,
              extent: P,
              statistics: k ? k.statistics : null,
            });
          if (
            (null != S &&
              S.length &&
              ((N.nativeExtent = new O.Z({
                xmin: -0.5,
                ymin: 0.5 - p,
                xmax: f - 0.5,
                ymax: 0.5,
                spatialReference: R,
              })),
              (N.transform = new be.Z({
                polynomialOrder: 1,
                forwardCoefficients: [
                  S[2] + S[0] / 2,
                  S[5] - S[3] / 2,
                  S[0],
                  S[3],
                  -S[1],
                  -S[4],
                ],
              })),
              (N.extent = N.transform.forwardTransform(N.nativeExtent)),
              (N.pixelSize = new G.Z({
                x: (P.xmax - P.xmin) / f,
                y: (P.ymax - P.ymin) / p,
                spatialReference: R,
              })),
              (F.origin.x = -0.5),
              (F.origin.y = 0.5)),
            null == (i = this.ioConfig.skipExtensions) ||
              !i.includes('aux.xml'))
          ) {
            const t = await this._fetchAuxiliaryData(e);
            if (null != t) {
              var Z;
              if (
                ((N.statistics = null != (Z = t.statistics) ? Z : N.statistics),
                (N.histograms = t.histograms),
                t.histograms &&
                  !(0, o.pC)(N.statistics) &&
                  (N.statistics = (0, re.Oh)(t.histograms)),
                t.transform && !S)
              ) {
                (N.transform = t.transform), (N.nativeExtent = N.extent);
                const e = N.transform.forwardTransform(N.nativeExtent);
                (N.pixelSize = new G.Z({
                  x: (e.xmax - e.xmin) / f,
                  y: (e.ymax - e.ymin) / p,
                  spatialReference: R,
                })),
                  (N.extent = e);
              }
              N.spatialReference || (N.spatialReference = t.spatialReference);
            }
          }
          if (
            (this._set('rasterInfo', N),
            (this._headerInfo = {
              littleEndian: l,
              isBigTiff: u,
              ifds: h,
              ...d,
            }),
            !this._headerInfo.isSupported)
          )
            throw new a.Z(
              'tiffraster:open',
              'this tiff is not supported: ' + this._headerInfo.message,
            );
          this.updateTileInfo();
        }
        async fetchRawTile(e, t, r, i = {}) {
          var n;
          if (
            null == (n = this._headerInfo) ||
            !n.isSupported ||
            this.isBlockOutside(e, t, r)
          )
            return null;
          const s = this._getTileLocation(e, t, r);
          if (!s) return null;
          const {
              ranges: a,
              actualTileWidth: o,
              actualTileHeight: l,
              ifd: c,
            } = s,
            u = a.map((e) =>
              this.request(this.url, {
                range: e,
                responseType: 'array-buffer',
                signal: i.signal,
              }),
            ),
            h = await Promise.all(u),
            d = h.map((e) => e.data.byteLength).reduce((e, t) => e + t),
            f = 1 === h.length ? h[0].data : new ArrayBuffer(d),
            p = [0],
            m = [0];
          if (h.length > 1) {
            const e = new Uint8Array(f);
            for (let t = 0, r = 0; t < h.length; t++) {
              const i = h[t].data;
              e.set(new Uint8Array(i), r),
                (p[t] = r),
                (r += i.byteLength),
                (m[t] = i.byteLength);
            }
          }
          const { blockWidth: g, blockHeight: y } = this.getBlockWidthHeight(e),
            x = await this.decodePixelBlock(f, {
              format: 'tiff',
              customOptions: {
                headerInfo: this._headerInfo,
                ifd: c,
                offsets: p,
                sizes: m,
              },
              width: g,
              height: y,
              planes: null,
              pixelType: null,
            });
          let w, b, v;
          if (o !== g || l !== y) {
            let e = x.mask;
            if (e)
              for (w = 0; w < y; w++)
                if (((v = w * g), w < l)) for (b = o; b < g; b++) e[v + b] = 0;
                else for (b = 0; b < g; b++) e[v + b] = 0;
            else
              for (e = new Uint8Array(g * y), x.mask = e, w = 0; w < l; w++)
                for (v = w * g, b = 0; b < o; b++) e[v + b] = 1;
          }
          return x;
        }
        async _readIFDs(e, t, r, i, n, s = 4, a) {
          if (!i) return null;
          (i >= t.byteLength || i < 0) &&
            ((t = (
              await this.request(this.url, {
                range: { from: i + n, to: i + n + this._bufferSize },
                responseType: 'array-buffer',
                signal: a,
              })
            ).data),
            (n = i + n),
            (i = 0));
          const o = await this._readIFD(t, r, i, n, He.Z.TIFF_TAGS, s, a);
          if ((e.push(o.ifd), !o.nextIFD)) return null;
          await this._readIFDs(e, t, r, o.nextIFD - n, n, s, a);
        }
        async _readIFD(e, t, r, i, n = He.Z.TIFF_TAGS, s = 4, a) {
          if (!e) return null;
          const o = (0, Ae.vr)(e, t, r, i, n, s);
          if (o.success) {
            const r = [];
            if (
              (o.ifd.forEach((e) => {
                e.values || r.push(e);
              }),
              r.length > 0)
            ) {
              const n = r.map((e) => e.offlineOffsetSize),
                s = Math.min.apply(
                  null,
                  n.map((e) => e[0]),
                );
              if (
                Math.min.apply(
                  null,
                  n.map((e) => e[0] + e[1]),
                ) -
                  s <=
                this._bufferSize
              ) {
                const { data: n } = await this.request(this.url, {
                  range: { from: s, to: s + this._bufferSize },
                  responseType: 'array-buffer',
                  signal: a,
                });
                (e = n), (i = s), r.forEach((r) => (0, Ae.Dq)(e, t, r, i));
              }
            }
            if (o.ifd.has('GEOKEYDIRECTORY')) {
              const r = o.ifd.get('GEOKEYDIRECTORY'),
                n = r.values;
              if (n && n.length > 4) {
                const s = n[0] + '.' + n[1] + '.' + n[2],
                  o = await this._readIFD(
                    e,
                    t,
                    r.valueOffset + 6 - i,
                    i,
                    He.Z.GEO_KEYS,
                    2,
                    a,
                  );
                (r.data = o.ifd),
                  r.data &&
                    r.data.set('GEOTIFFVersion', {
                      id: 0,
                      type: 2,
                      valueCount: 1,
                      valueOffset: null,
                      values: [s],
                    });
              }
            }
            return o;
          }
          if (o.requiredBufferSize && o.requiredBufferSize !== e.byteLength) {
            const r = await this.request(this.url, {
              range: { from: i, to: i + o.requiredBufferSize + 4 },
              responseType: 'array-buffer',
              signal: a,
            });
            return (e = r.data).byteLength < o.requiredBufferSize
              ? null
              : this._readIFD(e, t, 0, i, He.Z.TIFF_TAGS, 4, a);
          }
        }
        _getTileLocation(e, t, r) {
          const { firstPyramidLevel: i, blockBoundary: n } =
              this.rasterInfo.storageInfo,
            s = 0 === e ? 0 : e - (i - 1),
            a = this._headerInfo.ifds[s];
          if (!a) return null;
          const o = (0, Ae.If)(a, this._headerInfo),
            l = ze(a, 'TILEOFFSETS');
          if (void 0 === l) return null;
          const c = ze(a, 'TILEBYTECOUNTS'),
            { minRow: u, minCol: h, maxRow: d, maxCol: f } = n[s];
          if (t > d || r > f || t < u || r < h) return null;
          const p = Je(a, 'IMAGEWIDTH'),
            m = Je(a, 'IMAGELENGTH'),
            g = Je(a, 'TILEWIDTH'),
            y = Je(a, 'TILELENGTH'),
            x = o ? this.rasterInfo.bandCount : 1,
            w = x * t * (f + 1) + r,
            b = [{ from: l[w], to: l[w + x - 1] + c[w + x - 1] - 1 }];
          if (o) {
            let e = !0;
            for (let t = 0; t < x; t++)
              if (l[w + t] + c[w + t] !== l[w + t + 1]) {
                e = !1;
                break;
              }
            if (!e)
              for (let e = 0; e < x; e++)
                b[e] = { from: l[w + e], to: l[w + e] + c[w + e] - 1 };
          }
          const v = l[w],
            I = c[w];
          return null == v || null == I
            ? null
            : {
                ranges: b,
                ifd: a,
                actualTileWidth: r === f ? p % g : g,
                actualTileHeight: t === d ? m % y : y,
              };
        }
        async _fetchAuxiliaryData(e) {
          try {
            const { data: t } = await this.request(this.url + '.aux.xml', {
              responseType: 'xml',
              signal: null == e ? void 0 : e.signal,
            });
            return Ce(t);
          } catch {
            return null;
          }
        }
      };
      (0, i._)([(0, u.Cb)()], We.prototype, '_files', void 0),
        (0, i._)([(0, u.Cb)()], We.prototype, '_headerInfo', void 0),
        (0, i._)([(0, u.Cb)()], We.prototype, '_bufferSize', void 0),
        (0, i._)(
          [(0, u.Cb)({ type: String, json: { write: !0 } })],
          We.prototype,
          'datasetFormat',
          void 0,
        ),
        (We = (0, i._)(
          [(0, p.j)('esri.layers.support.rasterDatasets.TIFFRaster')],
          We,
        ));
      const je = We,
        qe = new Map();
      qe.set('CRF', { desc: 'Cloud Raster Format', constructor: he }),
        qe.set('MRF', { desc: 'Meta Raster Format', constructor: Le }),
        qe.set('TIFF', { desc: 'GeoTIFF', constructor: je }),
        qe.set('RasterTileServer', {
          desc: 'Raster Tile Server',
          constructor: Ee,
        }),
        qe.set('JPG', { desc: 'JPG Raster Format', constructor: ke }),
        qe.set('PNG', { desc: 'PNG Raster Format', constructor: ke }),
        qe.set('GIF', { desc: 'GIF Raster Format', constructor: ke }),
        qe.set('BMP', { desc: 'BMP Raster Format', constructor: ke });
      var Ue = r(32163);
      let Ge = class extends (0, g.h)(
        (0, L.M)(
          (0, D.q)((0, N.I)((0, y.N)(B((0, A.n)((0, Z.Q)((0, l.R)(m.Z))))))),
        ),
      ) {
        constructor(...e) {
          super(...e),
            (this.bandIds = null),
            (this.interpolation = null),
            (this.legendEnabled = !0),
            (this.isReference = null),
            (this.listMode = 'show'),
            (this.sourceJSON = null),
            (this.version = null),
            (this.title = null),
            (this.type = 'imagery-tile'),
            (this.operationalLayerType = 'ArcGISTiledImageServiceLayer'),
            (this.popupEnabled = !0),
            (this.popupTemplate = null),
            (this.fields = null);
        }
        normalizeCtorArgs(e, t) {
          return 'string' == typeof e ? { url: e, ...t } : e;
        }
        load(e) {
          const t = (0, o.pC)(e) ? e.signal : null;
          return (
            this.addResolvingPromise(
              this.loadFromPortal({ supportedTypes: ['Image Service'] }, e)
                .catch(c.r9)
                .then(() => this._openRaster(t)),
            ),
            Promise.resolve(this)
          );
        }
        get defaultPopupTemplate() {
          return this.createPopupTemplate();
        }
        get rasterFields() {
          var e, t;
          let r = [
            new H.Z({
              name: 'Raster.ServicePixelValue',
              alias: 'Pixel Value',
              domain: null,
              editable: !1,
              length: 50,
              type: 'string',
            }),
          ];
          const i =
            null == (e = this.rasterInfo) || null == (t = e.attributeTable)
              ? void 0
              : t.fields;
          if (i) {
            const e = i
              .filter(
                (e) => 'oid' !== e.type && 'value' !== e.name.toLowerCase(),
              )
              .map((e) => {
                const t = e.clone();
                return (t.name = 'Raster.' + e.name), t;
              });
            r = r.concat(e);
          }
          const n = this.rasterInfo.dataType;
          if (
            ('vector-magdir' === n || 'vector-uv' === n) &&
            (0, o.pC)(this.rasterInfo.multidimensionalInfo)
          ) {
            var s;
            const e =
                null ==
                (s = this.rasterInfo.multidimensionalInfo.variables[0].unit)
                  ? void 0
                  : s.trim(),
              t = 'Magnitude' + (e ? ` (${e})` : '');
            r.push(
              new H.Z({
                name: 'Raster.Magnitude',
                alias: t,
                domain: null,
                editable: !1,
                type: 'double',
              }),
            ),
              r.push(
                new H.Z({
                  name: 'Raster.Direction',
                  alias: 'Direction (°)',
                  domain: null,
                  editable: !1,
                  type: 'double',
                }),
              );
          }
          return r;
        }
        set renderer(e) {
          this._set('renderer', e), this.updateRenderer();
        }
        readRenderer(e, t, r) {
          const i =
              t &&
              t.layerDefinition &&
              t.layerDefinition.drawingInfo &&
              t.layerDefinition.drawingInfo.renderer,
            n = (0, s.ij)(i, r) || void 0;
          if (null != n) return n;
        }
        createPopupTemplate(e) {
          return (0, Ue.eZ)(
            { fields: this.rasterFields, title: this.title },
            e,
          );
        }
        write(e, t) {
          const { raster: r } = this;
          if (
            this.loaded
              ? 'RasterTileServer' === r.datasetFormat &&
                ('Raster' === r.tileType || 'Map' === r.tileType)
              : this.url && /\/ImageServer(\/|\/?$)/i.test(this.url)
          )
            return super.write(e, t);
          if (t && t.messages) {
            const e = `${t.origin}/${
              t.layerContainerType || 'operational-layers'
            }`;
            t.messages.push(
              new a.Z(
                'layer:unsupported',
                `Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${e}'`,
                { layer: this },
              ),
            );
          }
          return null;
        }
        async _openRaster(e) {
          this.raster
            ? (this.raster.rasterInfo || (await this.raster.open()),
              (this.url = this.raster.url))
            : (this.raster = await class {
                static get supportedFormats() {
                  const e = new Set();
                  return qe.forEach((t, r) => e.add(r)), e;
                }
                static async open(e) {
                  const { url: t, ioConfig: r, sourceJSON: i } = e;
                  let n = e.datasetFormat;
                  null == n &&
                    t.lastIndexOf('.') &&
                    (n = t.slice(t.lastIndexOf('.') + 1).toUpperCase()),
                    'OVR' === n || 'TIF' === n
                      ? (n = 'TIFF')
                      : ('JPG' !== n && 'JPEG' !== n && 'JFIF' !== n) ||
                        (n = 'JPG'),
                    t.toLowerCase().indexOf('/imageserver') > -1 &&
                      -1 === t.toLowerCase().indexOf('/wcsserver') &&
                      (n = 'RasterTileServer');
                  const s = {
                    url: t,
                    sourceJSON: i,
                    datasetFormat: n,
                    ioConfig: r || { bandIds: null, sampling: null },
                  };
                  let o, l;
                  if (this.supportedFormats.has(n))
                    return (
                      (o = qe.get(n).constructor),
                      (l = new o(s)),
                      await l.open({ signal: e.signal }),
                      l
                    );
                  if (n)
                    throw new a.Z(
                      'rasterfactory:open',
                      'not a supported format ' + n,
                    );
                  const c = Array.from(qe.keys());
                  let u = 0;
                  const h = function () {
                    return (
                      (n = c[u++]),
                      n
                        ? ((o = qe.get(n).constructor),
                          (l = new o(s)),
                          l
                            .open({ signal: e.signal })
                            .then(() => l)
                            .catch(() => h()))
                        : null
                    );
                  };
                  return h();
                }
                static register(e, t, r) {
                  qe.has(e.toUpperCase()) ||
                    qe.set(e.toUpperCase(), { desc: t, constructor: r });
                }
              }.open({
                url: this.url,
                sourceJSON: this.sourceJSON,
                ioConfig: {
                  sampling: 'closest',
                  ...this.ioConfig,
                  customFetchParameters: this.customParameters,
                },
                signal: e,
              }));
          const { rasterInfo: t } = this.raster;
          if (!t)
            throw new a.Z(
              'imagery-tile-layer:load',
              'cannot load resources on ' + this.url,
            );
          if (
            ((this.sourceJSON = this.sourceJSON || this.raster.sourceJSON),
            null != this.sourceJSON)
          ) {
            const e =
              'Map' === this.raster.tileType &&
              null != this.sourceJSON.minLOD &&
              null != this.sourceJSON.maxLOD
                ? this.sourceJSON
                : { ...this.sourceJSON, minScale: 0, maxScale: 0 };
            this.read(e, { origin: 'service' });
          }
          null == this.title && (this.title = this.raster.datasetName),
            'Map' === this.raster.tileType && (this.popupEnabled = !1),
            this._configDefaultSettings(),
            this.watch(
              'customParameters',
              (e) => (this.raster.ioConfig.customFetchParameters = e),
            );
        }
      };
      (0, i._)(
        [
          (0, u.Cb)({
            type: [h.z8],
            json: {
              write: {
                overridePolicy() {
                  var e;
                  return {
                    enabled:
                      !this.loaded ||
                      'Raster' === this.raster.tileType ||
                      '0,1,2' !==
                        (null == (e = this.bandIds) ? void 0 : e.join(',')),
                  };
                },
              },
            },
          }),
        ],
        Ge.prototype,
        'bandIds',
        void 0,
      ),
        (0, i._)(
          [
            (0, u.Cb)({
              json: {
                write: {
                  overridePolicy() {
                    return {
                      enabled:
                        !this.loaded ||
                        'Raster' === this.raster.tileType ||
                        'bilinear' !== this.interpolation,
                    };
                  },
                },
              },
            }),
            (0, d.J)(z.c),
          ],
          Ge.prototype,
          'interpolation',
          void 0,
        ),
        (0, i._)(
          [(0, u.Cb)({ json: { write: !0 } })],
          Ge.prototype,
          'multidimensionalDefinition',
          void 0,
        ),
        (0, i._)([(0, u.Cb)(_.rn)], Ge.prototype, 'legendEnabled', void 0),
        (0, i._)(
          [
            (0, u.Cb)({
              type: Boolean,
              json: {
                read: !1,
                write: { enabled: !0, overridePolicy: () => ({ enabled: !1 }) },
              },
            }),
          ],
          Ge.prototype,
          'isReference',
          void 0,
        ),
        (0, i._)(
          [(0, u.Cb)({ type: ['show', 'hide'] })],
          Ge.prototype,
          'listMode',
          void 0,
        ),
        (0, i._)([(0, u.Cb)()], Ge.prototype, 'sourceJSON', void 0),
        (0, i._)(
          [
            (0, u.Cb)({
              readOnly: !0,
              json: {
                origins: { service: { read: { source: 'currentVersion' } } },
              },
            }),
          ],
          Ge.prototype,
          'version',
          void 0,
        ),
        (0, i._)([(0, u.Cb)()], Ge.prototype, 'title', void 0),
        (0, i._)(
          [(0, u.Cb)({ readOnly: !0, json: { read: !1 } })],
          Ge.prototype,
          'type',
          void 0,
        ),
        (0, i._)(
          [(0, u.Cb)({ type: ['ArcGISTiledImageServiceLayer'] })],
          Ge.prototype,
          'operationalLayerType',
          void 0,
        ),
        (0, i._)(
          [
            (0, u.Cb)({
              type: Boolean,
              value: !0,
              json: {
                read: {
                  source: 'disablePopup',
                  reader: (e, t) => !t.disablePopup,
                },
                write: {
                  target: 'disablePopup',
                  overridePolicy() {
                    return {
                      enabled:
                        !this.loaded || 'Raster' === this.raster.tileType,
                    };
                  },
                  writer(e, t, r) {
                    t[r] = !e;
                  },
                },
              },
            }),
          ],
          Ge.prototype,
          'popupEnabled',
          void 0,
        ),
        (0, i._)(
          [
            (0, u.Cb)({
              type: n.Z,
              json: {
                read: { source: 'popupInfo' },
                write: {
                  target: 'popupInfo',
                  overridePolicy() {
                    return {
                      enabled:
                        !this.loaded || 'Raster' === this.raster.tileType,
                    };
                  },
                },
              },
            }),
          ],
          Ge.prototype,
          'popupTemplate',
          void 0,
        ),
        (0, i._)(
          [(0, u.Cb)({ readOnly: !0 })],
          Ge.prototype,
          'defaultPopupTemplate',
          null,
        ),
        (0, i._)(
          [(0, u.Cb)({ readOnly: !0, type: [H.Z] })],
          Ge.prototype,
          'fields',
          void 0,
        ),
        (0, i._)(
          [(0, u.Cb)({ readOnly: !0, type: [H.Z] })],
          Ge.prototype,
          'rasterFields',
          null,
        ),
        (0, i._)(
          [
            (0, u.Cb)({
              types: s.dr,
              json: {
                name: 'layerDefinition.drawingInfo.renderer',
                write: {
                  overridePolicy() {
                    var e;
                    const t =
                      'raster-stretch' ===
                        (null == (e = this.renderer) ? void 0 : e.type) &&
                      'none' === this.renderer.stretchType &&
                      !this.renderer.useGamma;
                    return {
                      enabled:
                        !this.loaded || 'Raster' === this.raster.tileType || !t,
                    };
                  },
                },
                origins: {
                  'web-scene': {
                    types: s.FK,
                    name: 'layerDefinition.drawingInfo.renderer',
                    write: {
                      overridePolicy: (e) => ({
                        enabled:
                          e && 'vector-field' !== e.type && 'flow' !== e.type,
                      }),
                    },
                  },
                },
              },
            }),
          ],
          Ge.prototype,
          'renderer',
          null,
        ),
        (0, i._)([(0, f.r)('renderer')], Ge.prototype, 'readRenderer', null),
        (Ge = (0, i._)([(0, p.j)('esri.layers.ImageryTileLayer')], Ge));
      const $e = Ge;
    },
    74889: (e, t, r) => {
      r.r(t), r.d(t, { default: () => b });
      var i,
        n = r(43697),
        s = r(66577),
        a = r(38171),
        o = r(35454),
        l = r(96674),
        c = r(22974),
        u = r(70586),
        h = r(5600),
        d = (r(75215), r(71715)),
        f = r(52011),
        p = r(30556),
        m = r(82971),
        g = r(33955),
        y = r(1231);
      const x = new o.X({
        esriGeometryPoint: 'point',
        esriGeometryMultipoint: 'multipoint',
        esriGeometryPolyline: 'polyline',
        esriGeometryPolygon: 'polygon',
        esriGeometryEnvelope: 'extent',
        mesh: 'mesh',
        '': null,
      });
      let w = (i = class extends l.wq {
        constructor(e) {
          super(e),
            (this.displayFieldName = null),
            (this.exceededTransferLimit = !1),
            (this.features = []),
            (this.fields = null),
            (this.geometryType = null),
            (this.hasM = !1),
            (this.hasZ = !1),
            (this.queryGeometry = null),
            (this.spatialReference = null);
        }
        readFeatures(e, t) {
          const r = m.Z.fromJSON(t.spatialReference),
            i = [];
          for (let t = 0; t < e.length; t++) {
            const n = e[t],
              s = a.Z.fromJSON(n),
              o = n.geometry && n.geometry.spatialReference;
            (0, u.pC)(s.geometry) && !o && (s.geometry.spatialReference = r);
            const l = n.aggregateGeometries,
              c = s.aggregateGeometries;
            if (l && (0, u.pC)(c))
              for (const e in c) {
                const t = c[e],
                  i = l[e],
                  n = null == i ? void 0 : i.spatialReference;
                (0, u.pC)(t) && !n && (t.spatialReference = r);
              }
            i.push(s);
          }
          return i;
        }
        writeGeometryType(e, t, r, i) {
          if (e) return void x.write(e, t, r, i);
          const { features: n } = this;
          if (n)
            for (const e of n)
              if (e && (0, u.pC)(e.geometry))
                return void x.write(e.geometry.type, t, r, i);
        }
        readQueryGeometry(e, t) {
          if (!e) return null;
          const r = !!e.spatialReference,
            i = (0, g.im)(e);
          return (
            !r &&
              t.spatialReference &&
              (i.spatialReference = m.Z.fromJSON(t.spatialReference)),
            i
          );
        }
        writeSpatialReference(e, t) {
          if (e) return void (t.spatialReference = e.toJSON());
          const { features: r } = this;
          if (r)
            for (const e of r)
              if (e && (0, u.pC)(e.geometry) && e.geometry.spatialReference)
                return void (t.spatialReference =
                  e.geometry.spatialReference.toJSON());
        }
        clone() {
          return new i(this.cloneProperties());
        }
        cloneProperties() {
          return (0, c.d9)({
            displayFieldName: this.displayFieldName,
            exceededTransferLimit: this.exceededTransferLimit,
            features: this.features,
            fields: this.fields,
            geometryType: this.geometryType,
            hasM: this.hasM,
            hasZ: this.hasZ,
            queryGeometry: this.queryGeometry,
            spatialReference: this.spatialReference,
            transform: this.transform,
          });
        }
        toJSON(e) {
          const t = this.write();
          if (t.features && Array.isArray(e) && e.length > 0)
            for (let r = 0; r < t.features.length; r++) {
              const i = t.features[r];
              if (i.geometry) {
                const t = e && e[r];
                i.geometry = (t && t.toJSON()) || i.geometry;
              }
            }
          return t;
        }
        quantize(e) {
          const {
              scale: [t, r],
              translate: [i, n],
            } = e,
            s = this.features,
            a = this._getQuantizationFunction(
              this.geometryType,
              (e) => Math.round((e - i) / t),
              (e) => Math.round((n - e) / r),
            );
          for (let e = 0, t = s.length; e < t; e++)
            a((0, u.Wg)(s[e].geometry)) || (s.splice(e, 1), e--, t--);
          return (this.transform = e), this;
        }
        unquantize() {
          const { geometryType: e, features: t, transform: r } = this;
          if (!r) return this;
          const {
              translate: [i, n],
              scale: [s, a],
            } = r,
            o = this._getHydrationFunction(
              e,
              (e) => e * s + i,
              (e) => n - e * a,
            );
          for (const { geometry: e } of t) (0, u.pC)(e) && o(e);
          return (this.transform = null), this;
        }
        _quantizePoints(e, t, r) {
          let i, n;
          const s = [];
          for (let a = 0, o = e.length; a < o; a++) {
            const o = e[a];
            if (a > 0) {
              const e = t(o[0]),
                a = r(o[1]);
              (e === i && a === n) ||
                (s.push([e - i, a - n]), (i = e), (n = a));
            } else (i = t(o[0])), (n = r(o[1])), s.push([i, n]);
          }
          return s.length > 0 ? s : null;
        }
        _getQuantizationFunction(e, t, r) {
          return 'point' === e
            ? (e) => ((e.x = t(e.x)), (e.y = r(e.y)), e)
            : 'polyline' === e || 'polygon' === e
            ? (e) => {
                const i = (0, g.oU)(e) ? e.rings : e.paths,
                  n = [];
                for (let e = 0, s = i.length; e < s; e++) {
                  const s = i[e],
                    a = this._quantizePoints(s, t, r);
                  a && n.push(a);
                }
                return n.length > 0
                  ? ((0, g.oU)(e) ? (e.rings = n) : (e.paths = n), e)
                  : null;
              }
            : 'multipoint' === e
            ? (e) => {
                const i = this._quantizePoints(e.points, t, r);
                return i.length > 0 ? ((e.points = i), e) : null;
              }
            : 'extent' === e
            ? (e) => e
            : null;
        }
        _getHydrationFunction(e, t, r) {
          return 'point' === e
            ? (e) => {
                (e.x = t(e.x)), (e.y = r(e.y));
              }
            : 'polyline' === e || 'polygon' === e
            ? (e) => {
                const i = (0, g.oU)(e) ? e.rings : e.paths;
                let n, s;
                for (let e = 0, a = i.length; e < a; e++) {
                  const a = i[e];
                  for (let e = 0, i = a.length; e < i; e++) {
                    const i = a[e];
                    e > 0
                      ? ((n += i[0]), (s += i[1]))
                      : ((n = i[0]), (s = i[1])),
                      (i[0] = t(n)),
                      (i[1] = r(s));
                  }
                }
              }
            : 'extent' === e
            ? (e) => {
                (e.xmin = t(e.xmin)),
                  (e.ymin = r(e.ymin)),
                  (e.xmax = t(e.xmax)),
                  (e.ymax = r(e.ymax));
              }
            : 'multipoint' === e
            ? (e) => {
                const i = e.points;
                let n, s;
                for (let e = 0, a = i.length; e < a; e++) {
                  const a = i[e];
                  e > 0 ? ((n += a[0]), (s += a[1])) : ((n = a[0]), (s = a[1])),
                    (a[0] = t(n)),
                    (a[1] = r(s));
                }
              }
            : void 0;
        }
      });
      (0, n._)(
        [(0, h.Cb)({ type: String, json: { write: !0 } })],
        w.prototype,
        'displayFieldName',
        void 0,
      ),
        (0, n._)(
          [
            (0, h.Cb)({
              type: Boolean,
              json: { write: { overridePolicy: (e) => ({ enabled: e }) } },
            }),
          ],
          w.prototype,
          'exceededTransferLimit',
          void 0,
        ),
        (0, n._)(
          [(0, h.Cb)({ type: [a.Z], json: { write: !0 } })],
          w.prototype,
          'features',
          void 0,
        ),
        (0, n._)([(0, d.r)('features')], w.prototype, 'readFeatures', null),
        (0, n._)(
          [(0, h.Cb)({ type: [y.Z], json: { write: !0 } })],
          w.prototype,
          'fields',
          void 0,
        ),
        (0, n._)(
          [
            (0, h.Cb)({
              type: [
                'point',
                'multipoint',
                'polyline',
                'polygon',
                'extent',
                'mesh',
              ],
              json: { read: { reader: x.read } },
            }),
          ],
          w.prototype,
          'geometryType',
          void 0,
        ),
        (0, n._)(
          [(0, p.c)('geometryType')],
          w.prototype,
          'writeGeometryType',
          null,
        ),
        (0, n._)(
          [
            (0, h.Cb)({
              type: Boolean,
              json: { write: { overridePolicy: (e) => ({ enabled: e }) } },
            }),
          ],
          w.prototype,
          'hasM',
          void 0,
        ),
        (0, n._)(
          [
            (0, h.Cb)({
              type: Boolean,
              json: { write: { overridePolicy: (e) => ({ enabled: e }) } },
            }),
          ],
          w.prototype,
          'hasZ',
          void 0,
        ),
        (0, n._)(
          [(0, h.Cb)({ types: s.qM, json: { write: !0 } })],
          w.prototype,
          'queryGeometry',
          void 0,
        ),
        (0, n._)(
          [(0, d.r)('queryGeometry')],
          w.prototype,
          'readQueryGeometry',
          null,
        ),
        (0, n._)(
          [(0, h.Cb)({ type: m.Z, json: { write: !0 } })],
          w.prototype,
          'spatialReference',
          void 0,
        ),
        (0, n._)(
          [(0, p.c)('spatialReference')],
          w.prototype,
          'writeSpatialReference',
          null,
        ),
        (0, n._)(
          [(0, h.Cb)({ json: { write: !0 } })],
          w.prototype,
          'transform',
          void 0,
        ),
        (w = i = (0, n._)([(0, f.j)('esri.rest.support.FeatureSet')], w)),
        (w.prototype.toJSON.isDefaultToJSON = !0);
      const b = w;
    },
  },
]);
