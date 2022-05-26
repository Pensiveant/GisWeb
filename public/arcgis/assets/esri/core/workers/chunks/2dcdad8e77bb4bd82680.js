'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [3003, 4889],
  {
    38171: (e, t, r) => {
      r.d(t, { Z: () => h });
      var n = r(43697),
        s = r(66577),
        o = r(51773),
        i = r(78223),
        a = r(2368),
        l = r(96674),
        u = r(70586),
        c = r(99001),
        p = r(5600),
        d = (r(67676), r(80442), r(75215), r(52011)),
        f = r(33955);
      function y(e) {
        if (!(0, u.pC)(e)) return null;
        const t = {};
        for (const r in e) {
          const n = e[r];
          n && (t[r] = n.toJSON());
        }
        return 0 !== Object.keys(t).length ? t : null;
      }
      let m = class extends (0, a.J)(l.wq) {
        constructor(...e) {
          super(...e),
            (this.isAggregate = !1),
            (this.layer = null),
            (this.popupTemplate = null),
            (this.sourceLayer = null),
            Object.defineProperty(this, 'uid', {
              value: (0, c.D)(),
              configurable: !0,
            });
        }
        normalizeCtorArgs(e, t, r, n) {
          return e && !e.declaredClass
            ? e
            : { geometry: e, symbol: t, attributes: r, popupTemplate: n };
        }
        set aggregateGeometries(e) {
          const t = this._get('aggregateGeometries');
          JSON.stringify(t) !== JSON.stringify(e) &&
            this._set('aggregateGeometries', e);
        }
        set attributes(e) {
          const t = this._get('attributes');
          t !== e &&
            (this._set('attributes', e), this._notifyLayer('attributes', t, e));
        }
        set geometry(e) {
          const t = this._get('geometry');
          t !== e &&
            (this._set('geometry', e), this._notifyLayer('geometry', t, e));
        }
        set symbol(e) {
          const t = this._get('symbol');
          t !== e &&
            (this._set('symbol', e), this._notifyLayer('symbol', t, e));
        }
        set visible(e) {
          const t = this._get('visible');
          t !== e &&
            (this._set('visible', e), this._notifyLayer('visible', t, e));
        }
        getEffectivePopupTemplate(e = !1) {
          if (this.popupTemplate) return this.popupTemplate;
          for (const t of [this.sourceLayer, this.layer])
            if (t) {
              if ('popupTemplate' in t && t.popupTemplate)
                return t.popupTemplate;
              if (
                e &&
                'defaultPopupTemplate' in t &&
                (0, u.pC)(t.defaultPopupTemplate)
              )
                return t.defaultPopupTemplate;
            }
          return null;
        }
        getAttribute(e) {
          return this.attributes && this.attributes[e];
        }
        setAttribute(e, t) {
          if (this.attributes) {
            const r = this.getAttribute(e);
            (this.attributes[e] = t), this._notifyLayer('attributes', r, t, e);
          } else
            (this.attributes = { [e]: t }),
              this._notifyLayer('attributes', void 0, t, e);
        }
        getObjectId() {
          return this.sourceLayer &&
            'objectIdField' in this.sourceLayer &&
            this.sourceLayer.objectIdField
            ? this.getAttribute(this.sourceLayer.objectIdField)
            : null;
        }
        toJSON() {
          return {
            aggregateGeometries: y(this.aggregateGeometries),
            geometry: (0, u.pC)(this.geometry) ? this.geometry.toJSON() : null,
            symbol: (0, u.pC)(this.symbol) ? this.symbol.toJSON() : null,
            attributes: { ...this.attributes },
            popupTemplate: this.popupTemplate && this.popupTemplate.toJSON(),
          };
        }
        notifyGeometryChanged() {
          this._notifyLayer('geometry', this.geometry, this.geometry);
        }
        notifyMeshTransformChanged() {
          (0, u.pC)(this.geometry) &&
            'mesh' === this.geometry.type &&
            this._notifyLayer(
              'transform',
              this.geometry.transform,
              this.geometry.transform,
            );
        }
        _notifyLayer(e, t, r, n) {
          if (!this.layer || !('graphicChanged' in this.layer)) return;
          const s = { graphic: this, property: e, oldValue: t, newValue: r };
          'attributes' === e && (s.attributeName = n),
            this.layer.graphicChanged(s);
        }
      };
      (0, n._)(
        [
          (0, p.Cb)({
            value: null,
            json: {
              read: function (e) {
                if (!e) return null;
                const t = {};
                for (const r in e) {
                  const n = (0, f.im)(e[r]);
                  n && (t[r] = n);
                }
                return 0 !== Object.keys(t).length ? t : null;
              },
            },
          }),
        ],
        m.prototype,
        'aggregateGeometries',
        null,
      ),
        (0, n._)([(0, p.Cb)({ value: null })], m.prototype, 'attributes', null),
        (0, n._)(
          [(0, p.Cb)({ value: null, types: s.qM, json: { read: f.im } })],
          m.prototype,
          'geometry',
          null,
        ),
        (0, n._)(
          [(0, p.Cb)({ type: Boolean })],
          m.prototype,
          'isAggregate',
          void 0,
        ),
        (0, n._)(
          [(0, p.Cb)({ clonable: 'reference' })],
          m.prototype,
          'layer',
          void 0,
        ),
        (0, n._)(
          [(0, p.Cb)({ type: o.Z })],
          m.prototype,
          'popupTemplate',
          void 0,
        ),
        (0, n._)(
          [(0, p.Cb)({ clonable: 'reference' })],
          m.prototype,
          'sourceLayer',
          void 0,
        ),
        (0, n._)(
          [(0, p.Cb)({ value: null, types: i.LB })],
          m.prototype,
          'symbol',
          null,
        ),
        (0, n._)(
          [(0, p.Cb)({ type: Boolean, value: !0 })],
          m.prototype,
          'visible',
          null,
        ),
        (m = (0, n._)([(0, d.j)('esri.Graphic')], m)),
        ((m || (m = {})).generateUID = c.D);
      const h = m;
    },
    74085: (e, t, r) => {
      function n(e) {}
      r.d(t, { Bg: () => n }), r(80442);
    },
    78346: (e, t, r) => {
      r.d(t, { bA: () => D });
      var n = r(20102),
        s = r(80442),
        o = r(95330),
        i = r(80903),
        a = r(25045),
        l = r(40330),
        u = r(92604),
        c = r(94362),
        p = r(99880),
        d = r(68773),
        f = (r(2587), r(17452));
      const y = {};
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
      var h = r(41213);
      class g {
        constructor() {
          const e = document.createDocumentFragment();
          ['addEventListener', 'dispatchEvent', 'removeEventListener'].forEach(
            (t) => {
              this[t] = (...r) => e[t](...r);
            },
          );
        }
      }
      class b {
        constructor() {
          (this._dispatcher = new g()),
            this._workerPostMessage({ type: c.Cs.HANDSHAKE });
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
          (0, h.Y)(() => {
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
          (0, h.Y)(() => {
            this.dispatchEvent(new MessageEvent('message', { data: e }));
          });
        }
        async _workerMessageHandler(e) {
          const t = (0, c.QM)(e);
          if (t && t.type === c.Cs.OPEN) {
            const { modulePath: e, jobId: r } = t;
            let n = await a.default.loadWorker(e);
            n || (n = await import(e));
            const s = a.default.connect(n);
            this._workerPostMessage({ type: c.Cs.OPENED, jobId: r, data: s });
          }
        }
      }
      var w = r(70171),
        v = r(17202);
      const C = u.Z.getLogger('esri.core.workers'),
        { HANDSHAKE: S } = c.Cs;
      let _, F;
      const x =
        'Failed to create Worker. Fallback to execute module in main thread';
      async function k(e) {
        return new Promise((t) => {
          function r(s) {
            const o = (0, c.QM)(s);
            o &&
              o.type === S &&
              (e.removeEventListener('message', r),
              e.removeEventListener('error', n),
              t(e));
          }
          function n(t) {
            t.preventDefault(),
              e.removeEventListener('message', r),
              e.removeEventListener('error', n),
              C.warn(
                'Failed to create Worker. Fallback to execute module in main thread',
                t,
              ),
              (e = new b()).addEventListener('message', r),
              e.addEventListener('error', n);
          }
          e.addEventListener('message', r), e.addEventListener('error', n);
        });
      }
      let E = 0;
      const P = u.Z.getLogger('esri.core.workers'),
        { ABORT: T, INVOKE: R, OPEN: I, OPENED: O, RESPONSE: N } = c.Cs;
      class j {
        constructor(e, t) {
          (this._outJobs = new Map()),
            (this._inJobs = new Map()),
            (this.worker = e),
            (this.id = t),
            e.addEventListener('message', this._onMessage.bind(this)),
            e.addEventListener('error', (e) => {
              e.preventDefault(), P.error(e);
            });
        }
        static async create(e) {
          const t = await (async function () {
            if (!(0, s.Z)('esri-workers') || ((0, s.Z)('mozilla'), 0))
              return k(new b());
            if (!_ && !F)
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
                          'esri-csp-restrictions': (0, s.Z)(
                            'esri-csp-restrictions',
                          ),
                          'esri-2d-debug': !1,
                          'esri-2d-update-debug': (0, s.Z)(
                            'esri-2d-update-debug',
                          ),
                          'esri-2d-query-centroid-enabled': (0, s.Z)(
                            'esri-2d-query-centroid-enabled',
                          ),
                          'featurelayer-pbf': (0, s.Z)('featurelayer-pbf'),
                          'featurelayer-simplify-thresholds': (0, s.Z)(
                            'featurelayer-simplify-thresholds',
                          ),
                          'featurelayer-simplify-payload-size-factors': (0,
                          s.Z)('featurelayer-simplify-payload-size-factors'),
                          'featurelayer-simplify-mobile-factor': (0, s.Z)(
                            'featurelayer-simplify-mobile-factor',
                          ),
                          'esri-atomics': (0, s.Z)('esri-atomics'),
                          'esri-shared-array-buffer': (0, s.Z)(
                            'esri-shared-array-buffer',
                          ),
                          'esri-tiles-debug': (0, s.Z)('esri-tiles-debug'),
                          'esri-workers-arraybuffer-transfer': (0, s.Z)(
                            'esri-workers-arraybuffer-transfer',
                          ),
                          'feature-polyline-generalization-factor': (0, s.Z)(
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
                              (0, p.V)('esri/core/workers/RemoteClient.js'),
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
                        n = { version: l.i8, buildDate: v.r, revision: v.$ };
                      return JSON.stringify({
                        esriConfig: e,
                        loaderConfig: r,
                        kernelInfo: n,
                      });
                    })()}'`,
                  );
                _ = URL.createObjectURL(
                  new Blob([e], { type: 'text/javascript' }),
                );
              } catch (e) {
                F = e || {};
              }
            let e;
            if (_)
              try {
                e = new Worker(_, { name: 'esri-worker-' + E++ });
              } catch (t) {
                C.warn(x, F), (e = new b());
              }
            else C.warn(x, F), (e = new b());
            return k(e);
          })();
          return new j(t, e);
        }
        terminate() {
          this.worker.terminate();
        }
        async open(e, t = {}) {
          const { signal: r } = t,
            n = (0, c.jt)();
          return new Promise((t, s) => {
            const i = {
              resolve: t,
              reject: s,
              abortHandle: (0, o.$F)(r, () => {
                this._outJobs.delete(n), this._post({ type: T, jobId: n });
              }),
            };
            this._outJobs.set(n, i),
              this._post({ type: I, jobId: n, modulePath: e });
          });
        }
        _onMessage(e) {
          const t = (0, c.QM)(e);
          if (t)
            switch (t.type) {
              case O:
                this._onOpenedMessage(t);
                break;
              case N:
                this._onResponseMessage(t);
                break;
              case T:
                this._onAbortMessage(t);
                break;
              case R:
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
          const { methodName: t, jobId: r, data: n, abortable: s } = e,
            i = s ? new AbortController() : null,
            a = this._inJobs,
            u = l.Nv[t];
          let p;
          try {
            if ('function' != typeof u)
              throw new TypeError(`${t} is not a function`);
            p = u.call(null, n, { signal: i ? i.signal : null });
          } catch (e) {
            return void this._post({ type: N, jobId: r, error: (0, c.AB)(e) });
          }
          (0, o.y8)(p)
            ? (a.set(r, { controller: i, promise: p }),
              p.then(
                (e) => {
                  a.has(r) &&
                    (a.delete(r), this._post({ type: N, jobId: r }, e));
                },
                (e) => {
                  a.has(r) &&
                    (a.delete(r),
                    e || (e = { message: 'Error encountered at method' + t }),
                    (0, o.D_)(e) ||
                      this._post({
                        type: N,
                        jobId: r,
                        error: (0, c.AB)(
                          e || { message: `Error encountered at method ${t}` },
                        ),
                      }));
                },
              ))
            : this._post({ type: N, jobId: r }, p);
        }
        _onOpenedMessage(e) {
          var t;
          const { jobId: r, data: n } = e,
            s = this._outJobs.get(r);
          s &&
            (this._outJobs.delete(r),
            null == (t = s.abortHandle) || t.remove(),
            s.resolve(n));
        }
        _onResponseMessage(e) {
          var t;
          const { jobId: r, error: s, data: o } = e,
            i = this._outJobs.get(r);
          i &&
            (this._outJobs.delete(r),
            null == (t = i.abortHandle) || t.remove(),
            s ? i.reject(n.Z.fromJSON(JSON.parse(s))) : i.resolve(o));
        }
        _post(e, t, r) {
          return (0, c.oi)(this.worker, e, t, r);
        }
      }
      let Z = (0, s.Z)('esri-workers-debug')
        ? 1
        : (0, s.Z)('host-browser')
        ? navigator.hardwareConcurrency - 1
        : 0;
      Z ||
        (Z =
          ((0, s.Z)('safari') && (0, s.Z)('mac')) || (0, s.Z)('trident')
            ? 7
            : 2);
      let L = 0;
      const M = [];
      async function U(e, t) {
        const r = new i.Z();
        return await r.open(e, t), r;
      }
      async function D(e, t = {}) {
        if ('string' != typeof e)
          throw new n.Z('workers:undefined-module', 'modulePath is missing');
        let r = t.strategy || 'distributed';
        if (
          ((0, s.Z)('host-webworker') &&
            !(0, s.Z)('esri-workers') &&
            (r = 'local'),
          'local' === r)
        ) {
          let r = await a.default.loadWorker(e);
          r || (r = await import(e)), (0, o.k_)(t.signal);
          const n = t.client || r;
          return U([a.default.connect(r)], { ...t, client: n });
        }
        if (
          (await (async function () {
            if (q) return q;
            A = new AbortController();
            const e = [];
            for (let t = 0; t < Z; t++) {
              const r = j.create(t).then((e) => ((M[t] = e), e));
              e.push(r);
            }
            return (q = Promise.all(e)), q;
          })(),
          (0, o.k_)(t.signal),
          'dedicated' === r)
        ) {
          const r = L++ % Z;
          return U([await M[r].open(e, t)], t);
        }
        if (t.maxNumWorkers && t.maxNumWorkers > 0) {
          const r = Math.min(t.maxNumWorkers, Z);
          if (r < Z) {
            const n = new Array(r);
            for (let s = 0; s < r; ++s) {
              const r = L++ % Z;
              n[s] = M[r].open(e, t);
            }
            return U(n, t);
          }
        }
        return U(
          M.map((r) => r.open(e, t)),
          t,
        );
      }
      let A,
        q = null;
    },
    2587: (e, t, r) => {
      r(90344), r(18848), r(940), r(70171);
      var n = r(94443),
        s = r(3172),
        o = r(20102),
        i = r(70586);
      async function a(e) {
        if ((0, i.pC)(u.fetchBundleAsset)) return u.fetchBundleAsset(e);
        const t = await (0, s.default)(e, { responseType: 'text' });
        return JSON.parse(t.data);
      }
      class l {
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
          return (async function (e, t, r, s) {
            const i = t.exec(r);
            if (!i)
              throw new o.Z(
                'esri-intl:invalid-bundle',
                `Bundle id "${r}" is not compatible with the pattern "${t}"`,
              );
            const l = i[1] ? `${i[1]}/` : '',
              u = i[2],
              c = (0, n.Su)(s),
              p = `${l}${u}.json`,
              d = c ? `${l}${u}_${c}.json` : p;
            let f;
            try {
              f = await a(e(d));
            } catch (t) {
              if (d === p)
                throw new o.Z(
                  'intl:unknown-bundle',
                  `Bundle "${r}" cannot be loaded`,
                  { error: t },
                );
              try {
                f = await a(e(p));
              } catch (e) {
                throw new o.Z(
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
      const u = {};
      var c,
        p = r(99880);
      (0, n.tz)(((c = { pattern: 'esri/', location: p.V }), new l(c)));
    },
    94443: (e, t, r) => {
      r.d(t, { ME: () => f, Su: () => y, tz: () => d });
      var n = r(20102),
        s = r(95330),
        o = r(70171);
      const i = /^([a-z]{2})(?:[-_]([A-Za-z]{2}))?$/,
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
      const u = [],
        c = new Map();
      function p(e) {
        for (const t of c.keys()) m(e.pattern, t) && c.delete(t);
      }
      function d(e) {
        return (
          u.includes(e) || (p(e), u.unshift(e)),
          {
            remove() {
              const t = u.indexOf(e);
              t > -1 && (u.splice(t, 1), p(e));
            },
          }
        );
      }
      async function f(e) {
        const t = (0, o.Kd)();
        c.has(e) ||
          c.set(
            e,
            (async function (e, t) {
              const r = [];
              for (const n of u)
                if (m(n.pattern, e))
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
        const r = c.get(e);
        return await h.add(r), r;
      }
      function y(e) {
        if (!i.test(e)) return null;
        const [, t, r] = i.exec(e),
          n = t + (r ? '-' + r.toUpperCase() : '');
        return l(n) ? n : l(t) ? t : null;
      }
      function m(e, t) {
        return 'string' == typeof e ? t.startsWith(e) : e.test(t);
      }
      (0, o.Ze)(() => {
        c.clear();
      });
      const h = new (class {
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
          this._numLoading++, this._dfd || (this._dfd = (0, s.dD)());
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
      r.d(t, { n: () => u });
      var n = r(92604),
        s = r(78286),
        o = r(19153),
        i = r(90344),
        a = r(18848);
      const l = n.Z.getLogger('esri.intl');
      function u(e, t, r = {}) {
        const { format: n = {} } = r;
        return (0, o.gx)(e, (e) =>
          (function (e, t, r) {
            let n, o;
            const i = e.indexOf(':');
            if (
              (-1 === i
                ? (n = e.trim())
                : ((n = e.slice(0, i).trim()), (o = e.slice(i + 1).trim())),
              !n)
            )
              return '';
            const a = (0, s.hS)(n, t);
            if (null == a) return '';
            const l = r[o] || r[n];
            return l ? c(a, l) : o ? p(a, o) : d(a);
          })(e, t, n),
        );
      }
      function c(e, t) {
        switch (t.type) {
          case 'date':
            return (0, i.p6)(e, t.intlOptions);
          case 'number':
            return (0, a.uf)(e, t.intlOptions);
          default:
            return l.warn('missing format descriptor for key {key}'), d(e);
        }
      }
      function p(e, t) {
        switch (t.toLowerCase()) {
          case 'dateformat':
            return (0, i.p6)(e);
          case 'numberformat':
            return (0, a.uf)(e);
          default:
            return (
              l.warn(`inline format is unsupported since 4.12: ${t}`),
              /^(dateformat|datestring)/i.test(t)
                ? (0, i.p6)(e)
                : /^numberformat/i.test(t)
                ? (0, a.uf)(e)
                : d(e)
            );
        }
      }
      function d(e) {
        switch (typeof e) {
          case 'string':
            return e;
          case 'number':
            return (0, a.uf)(e);
          case 'boolean':
            return '' + e;
          default:
            return e instanceof Date ? (0, i.p6)(e) : '';
        }
      }
    },
    12653: (e, t, r) => {
      r.r(t), r.d(t, { default: () => Q });
      var n = r(43697),
        s = (r(66577), r(51773)),
        o =
          (r(16050),
          r(12501),
          r(95088),
          r(79056),
          r(5499),
          r(84382),
          r(30687),
          r(91423),
          r(32400)),
        i = r(70586),
        a = r(16453),
        l = r(78286),
        u = r(17452),
        c = r(5600),
        p = (r(67676), r(80442)),
        d = r(75215),
        f = r(52011),
        y = r(30556),
        m = r(86973),
        h = r(29600),
        g = r(20102),
        b = r(3920),
        w = r(83379),
        v = r(95330),
        C = r(78346),
        S = r(25278),
        _ = r(74556),
        F = r(74889),
        x = r(6570);
      let k = class extends (0, b.p)(w.Z) {
        constructor() {
          super(...arguments),
            (this.capabilities = (0, S.MS)(!1, !1)),
            (this.type = 'wfs'),
            (this.refresh = (0, v.Ds)(async (e) => {
              await this.load();
              const { extent: t } = await this._connection.invoke('refresh', e);
              return (
                (this.sourceJSON.extent = t),
                { dataChanged: !0, updates: { extent: this.sourceJSON.extent } }
              );
            }));
        }
        load(e) {
          var t;
          const r = null != (t = (0, i.pC)(e) && e.signal) ? t : null;
          return (
            this.addResolvingPromise(this._startWorker({ signal: r })),
            Promise.resolve(this)
          );
        }
        destroy() {
          var e;
          null == (e = this._connection) || e.close(),
            (this._connection = null);
        }
        async openPorts() {
          return await this.load(), this._connection.openPorts();
        }
        async queryFeatures(e, t = {}) {
          await this.load(t);
          const r = await this._connection.invoke(
            'queryFeatures',
            e ? e.toJSON() : null,
            t,
          );
          return F.default.fromJSON(r);
        }
        async queryFeaturesJSON(e, t = {}) {
          return (
            await this.load(t),
            this._connection.invoke('queryFeatures', e ? e.toJSON() : null, t)
          );
        }
        async queryFeatureCount(e, t = {}) {
          return (
            await this.load(t),
            this._connection.invoke(
              'queryFeatureCount',
              e ? e.toJSON() : null,
              t,
            )
          );
        }
        async queryObjectIds(e, t = {}) {
          return (
            await this.load(t),
            this._connection.invoke('queryObjectIds', e ? e.toJSON() : null, t)
          );
        }
        async queryExtent(e, t = {}) {
          await this.load(t);
          const r = await this._connection.invoke(
            'queryExtent',
            e ? e.toJSON() : null,
            t,
          );
          return { count: r.count, extent: x.Z.fromJSON(r.extent) };
        }
        async querySnapping(e, t = {}) {
          return (
            await this.load(t), this._connection.invoke('querySnapping', e, t)
          );
        }
        async _createLoadOptions(e) {
          const {
            url: t,
            customParameters: r,
            name: n,
            namespaceUri: s,
            spatialReference: o,
            fields: a,
            geometryType: l,
            swapXY: u,
          } = this.layer;
          if (!t)
            throw new g.Z(
              'wfs-layer:missing-url',
              'WFSLayer must be created with a url',
            );
          this.wfsCapabilities ||
            (this.wfsCapabilities = await (0, _.FU)(t, {
              customParameters: r,
              ...e,
            }));
          const c = [
              'fields',
              'geometryType',
              'name',
              'namespaceUri',
              'spatialReference',
              'swapXY',
            ].some((e) => null == this.layer[e]),
            p = c
              ? await (0, _.be)(this.wfsCapabilities, n, s, {
                  spatialReference: o,
                  customParameters: r,
                  signal: null == e ? void 0 : e.signal,
                })
              : {
                  ...(0, _.eB)(a),
                  geometryType: l,
                  name: n,
                  namespaceUri: s,
                  spatialReference: o,
                  swapXY: u,
                },
            d = (0, i.Wg)(
              (0, _.ft)(
                this.wfsCapabilities.readFeatureTypes(),
                p.name,
                p.namespaceUri,
              ),
            ),
            f = m.Mk.toJSON(p.geometryType);
          return {
            customParameters: r,
            featureType: d,
            fields: p.fields.map((e) => e.toJSON()),
            geometryField: p.geometryField,
            geometryType: f,
            getFeatureUrl: this.wfsCapabilities.operations.GetFeature.url,
            getFeatureOutputFormat:
              this.wfsCapabilities.operations.GetFeature.outputFormat,
            objectIdField: p.objectIdField,
            spatialReference: p.spatialReference.toJSON(),
            swapXY: p.swapXY,
          };
        }
        async _startWorker(e) {
          const [t, r] = await (0, v.as)([
              this._createLoadOptions(e),
              (0, C.bA)('WFSSourceWorker', {
                ...e,
                strategy: (0, p.Z)('feature-layers-workers')
                  ? 'dedicated'
                  : 'local',
              }),
            ]),
            n = t.error || r.error || null,
            s = r.value || null;
          if (n) throw (s && s.close(), n);
          const o = t.value;
          this._connection = r.value;
          const { extent: i } = await this._connection.invoke('load', o, e);
          this.sourceJSON = {
            extent: i,
            fields: o.fields,
            geometryType: o.geometryType,
            objectIdField: o.objectIdField,
            geometryField: o.geometryField,
            drawingInfo: (0, S.bU)(o.geometryType),
            name: o.featureType.title,
            wfsInfo: {
              name: o.featureType.name,
              featureUrl: o.getFeatureUrl,
              maxFeatures: 3e3,
              swapXY: o.swapXY,
              supportedSpatialReferences:
                o.featureType.supportedSpatialReferences,
              version: '2.0.0',
              wfsNamespace: o.featureType.namespaceUri,
            },
          };
        }
      };
      (0, n._)([(0, c.Cb)()], k.prototype, 'capabilities', void 0),
        (0, n._)(
          [(0, c.Cb)({ constructOnly: !0 })],
          k.prototype,
          'layer',
          void 0,
        ),
        (0, n._)([(0, c.Cb)()], k.prototype, 'sourceJSON', void 0),
        (0, n._)([(0, c.Cb)()], k.prototype, 'type', void 0),
        (0, n._)([(0, c.Cb)()], k.prototype, 'wfsCapabilities', void 0),
        (k = (0, n._)([(0, f.j)('esri.layers.graphics.sources.WFSSource')], k));
      const E = k;
      var P,
        T = r(71612),
        R = r(17017),
        I = r(69637),
        O = r(38009),
        N = r(68825),
        j = r(16859),
        Z = r(34760),
        L = r(72965),
        M = r(28294),
        U = r(21506),
        D = r(55785),
        A = r(1231),
        q = r(53518),
        V = r(35671),
        G = r(2319),
        z = r(30707),
        $ = r(57444),
        J = r(32163),
        W = r(82971);
      const H = (0, q.v)();
      let B = (P = class extends (
        (0, N.c)(
          (0, R.N)(
            (0, I.b)(
              (0, T.h)(
                (0, M.n)((0, Z.Q)((0, L.M)((0, O.q)((0, j.I)((0, a.R)(h.Z)))))),
              ),
            ),
          ),
        )
      ) {
        constructor(e) {
          super(e),
            (this.capabilities = null),
            (this.copyright = null),
            (this.customParameters = null),
            (this.definitionExpression = null),
            (this.displayField = null),
            (this.elevationInfo = null),
            (this.featureReduction = null),
            (this.featureUrl = void 0),
            (this.fields = null),
            (this.fieldsIndex = null),
            (this.fullExtent = null),
            (this.geometryType = null),
            (this.labelsVisible = !0),
            (this.labelingInfo = null),
            (this.legendEnabled = !0),
            (this.objectIdField = null),
            (this.operationalLayerType = 'WFS'),
            (this.maxFeatures = 3e3),
            (this.mode = 0),
            (this.name = null),
            (this.namespaceUri = null),
            (this.outFields = null),
            (this.popupEnabled = !0),
            (this.popupTemplate = null),
            (this.screenSizePerspectiveEnabled = !0),
            (this.source = new E({ layer: this })),
            (this.spatialReference = W.Z.WGS84),
            (this.spatialReferences = [4326]),
            (this.swapXY = void 0),
            (this.title = 'WFS'),
            (this.type = 'wfs'),
            (this.url = null),
            (this.version = void 0);
        }
        static fromWFSLayerInfo(e) {
          const {
            customParameters: t,
            fields: r,
            geometryField: n,
            geometryType: s,
            name: o,
            namespaceUri: i,
            objectIdField: a,
            spatialReference: l,
            swapXY: u,
            url: c,
            wfsCapabilities: p,
          } = e;
          return new P({
            customParameters: t,
            fields: r,
            geometryField: n,
            geometryType: s,
            name: o,
            namespaceUri: i,
            objectIdField: a,
            spatialReference: l,
            swapXY: u,
            url: c,
            wfsCapabilities: p,
          });
        }
        destroy() {
          var e;
          null == (e = this.source) || e.destroy();
        }
        load(e) {
          return (
            this.addResolvingPromise(
              this.loadFromPortal({ supportedTypes: ['WFS'] }, e)
                .then(() => this.source.load(e))
                .then(() => {
                  this.read(this.source.sourceJSON, {
                    origin: 'service',
                    url: this.parsedUrl,
                  }),
                    this.revert(
                      [
                        'objectIdField',
                        'fields',
                        'timeInfo',
                        'spatialReference',
                        'name',
                        'namespaceUri',
                      ],
                      'service',
                    ),
                    (0, V.YN)(this.renderer, this.fieldsIndex),
                    (0, V.UF)(this.timeInfo, this.fieldsIndex);
                }),
            ),
            Promise.resolve(this)
          );
        }
        get createQueryVersion() {
          return (
            this.commitProperty('definitionExpression'),
            this.commitProperty('timeExtent'),
            this.commitProperty('timeOffset'),
            this.commitProperty('geometryType'),
            this.commitProperty('capabilities'),
            (this._get('createQueryVersion') || 0) + 1
          );
        }
        get defaultPopupTemplate() {
          return this.createPopupTemplate();
        }
        writeFields(e, t, r) {
          const n = e.filter((e) => e.name !== _.M8);
          this.geometryField &&
            n.unshift(
              new A.Z({
                name: this.geometryField,
                alias: this.geometryField,
                type: 'geometry',
              }),
            ),
            (0, l.RB)(
              r,
              n.map((e) => e.toJSON()),
              t,
            );
        }
        get parsedUrl() {
          return this.url ? (0, u.mN)(this.url) : null;
        }
        set renderer(e) {
          (0, V.YN)(e, this.fieldsIndex), this._set('renderer', e);
        }
        createPopupTemplate(e) {
          return (0, J.eZ)(this, e);
        }
        createQuery() {
          const e = new $.Z();
          (e.returnGeometry = !0),
            (e.outFields = ['*']),
            (e.where = this.definitionExpression || '1=1');
          const { timeOffset: t, timeExtent: r } = this;
          return (
            (e.timeExtent =
              null != t && null != r ? r.offset(-t.value, t.unit) : r || null),
            e
          );
        }
        getFieldDomain(e, t) {
          var r;
          return null == (r = this.getField(e)) ? void 0 : r.domain;
        }
        getField(e) {
          return this.fieldsIndex.get(e);
        }
        queryFeatures(e, t) {
          return this.load()
            .then(() =>
              this.source.queryFeatures($.Z.from(e) || this.createQuery(), t),
            )
            .then((e) => {
              if (null != e && e.features)
                for (const t of e.features) t.layer = t.sourceLayer = this;
              return e;
            });
        }
        queryObjectIds(e, t) {
          return this.load().then(() =>
            this.source.queryObjectIds($.Z.from(e) || this.createQuery(), t),
          );
        }
        queryFeatureCount(e, t) {
          return this.load().then(() =>
            this.source.queryFeatureCount($.Z.from(e) || this.createQuery(), t),
          );
        }
        queryExtent(e, t) {
          return this.load().then(() =>
            this.source.queryExtent($.Z.from(e) || this.createQuery(), t),
          );
        }
        async hasDataChanged() {
          try {
            const { dataChanged: e, updates: t } = await this.source.refresh(
              this.customParameters,
            );
            return (
              (0, i.pC)(t) &&
                this.read(t, {
                  origin: 'service',
                  url: this.parsedUrl,
                  ignoreDefaults: !0,
                }),
              e
            );
          } catch {}
          return !1;
        }
      });
      (0, n._)(
        [(0, c.Cb)({ readOnly: !0, aliasOf: 'source.capabilities' })],
        B.prototype,
        'capabilities',
        void 0,
      ),
        (0, n._)(
          [(0, c.Cb)({ type: String })],
          B.prototype,
          'copyright',
          void 0,
        ),
        (0, n._)(
          [(0, c.Cb)({ readOnly: !0 })],
          B.prototype,
          'createQueryVersion',
          null,
        ),
        (0, n._)(
          [
            (0, c.Cb)({
              json: {
                name: 'wfsInfo.customParameters',
                write: { ignoreOrigin: !0 },
              },
            }),
          ],
          B.prototype,
          'customParameters',
          void 0,
        ),
        (0, n._)(
          [(0, c.Cb)({ readOnly: !0 })],
          B.prototype,
          'defaultPopupTemplate',
          null,
        ),
        (0, n._)(
          [
            (0, c.Cb)({
              type: String,
              json: {
                name: 'layerDefinition.definitionExpression',
                write: { enabled: !0, allowNull: !0 },
              },
            }),
          ],
          B.prototype,
          'definitionExpression',
          void 0,
        ),
        (0, n._)(
          [(0, c.Cb)({ type: String })],
          B.prototype,
          'displayField',
          void 0,
        ),
        (0, n._)([(0, c.Cb)(U.PV)], B.prototype, 'elevationInfo', void 0),
        (0, n._)([(0, c.Cb)(D.d)], B.prototype, 'featureReduction', void 0),
        (0, n._)(
          [
            (0, c.Cb)({
              type: String,
              readOnly: !0,
              json: {
                name: 'wfsInfo.featureUrl',
                write: { ignoreOrigin: !0, isRequired: !0 },
              },
            }),
          ],
          B.prototype,
          'featureUrl',
          void 0,
        ),
        (0, n._)(
          [
            (0, c.Cb)({
              type: [A.Z],
              json: {
                name: 'layerDefinition.fields',
                write: { ignoreOrigin: !0, isRequired: !0 },
                origins: { service: { name: 'fields' } },
              },
            }),
          ],
          B.prototype,
          'fields',
          void 0,
        ),
        (0, n._)([(0, y.c)('fields')], B.prototype, 'writeFields', null),
        (0, n._)(
          [(0, c.Cb)(H.fieldsIndex)],
          B.prototype,
          'fieldsIndex',
          void 0,
        ),
        (0, n._)(
          [(0, c.Cb)({ type: x.Z, json: { name: 'extent' } })],
          B.prototype,
          'fullExtent',
          void 0,
        ),
        (0, n._)([(0, c.Cb)()], B.prototype, 'geometryField', void 0),
        (0, n._)(
          [
            (0, c.Cb)({
              type: String,
              json: {
                read: {
                  source: 'layerDefinition.geometryType',
                  reader: m.Mk.read,
                },
                write: {
                  target: 'layerDefinition.geometryType',
                  writer: m.Mk.write,
                  ignoreOrigin: !0,
                },
                origins: { service: { read: m.Mk.read } },
              },
            }),
          ],
          B.prototype,
          'geometryType',
          void 0,
        ),
        (0, n._)([(0, c.Cb)({ type: String })], B.prototype, 'id', void 0),
        (0, n._)([(0, c.Cb)(U.iR)], B.prototype, 'labelsVisible', void 0),
        (0, n._)(
          [
            (0, c.Cb)({
              type: [G.Z],
              json: {
                name: 'layerDefinition.drawingInfo.labelingInfo',
                read: { reader: z.r },
                write: !0,
              },
            }),
          ],
          B.prototype,
          'labelingInfo',
          void 0,
        ),
        (0, n._)([(0, c.Cb)(U.rn)], B.prototype, 'legendEnabled', void 0),
        (0, n._)(
          [(0, c.Cb)({ type: ['show', 'hide'] })],
          B.prototype,
          'listMode',
          void 0,
        ),
        (0, n._)(
          [(0, c.Cb)({ type: String })],
          B.prototype,
          'objectIdField',
          void 0,
        ),
        (0, n._)(
          [(0, c.Cb)({ type: ['WFS'] })],
          B.prototype,
          'operationalLayerType',
          void 0,
        ),
        (0, n._)(
          [
            (0, c.Cb)({
              type: d.z8,
              json: {
                name: 'wfsInfo.maxFeatures',
                write: { ignoreOrigin: !0, isRequired: !0 },
              },
            }),
          ],
          B.prototype,
          'maxFeatures',
          void 0,
        ),
        (0, n._)(
          [
            (0, c.Cb)({
              type: [0],
              readOnly: !0,
              json: {
                origins: {
                  'web-map': { write: { ignoreOrigin: !0, isRequired: !0 } },
                },
              },
            }),
          ],
          B.prototype,
          'mode',
          void 0,
        ),
        (0, n._)(
          [
            (0, c.Cb)({
              type: String,
              json: {
                name: 'wfsInfo.name',
                write: { ignoreOrigin: !0, isRequired: !0 },
              },
            }),
          ],
          B.prototype,
          'name',
          void 0,
        ),
        (0, n._)(
          [
            (0, c.Cb)({
              type: String,
              json: {
                name: 'wfsInfo.wfsNamespace',
                write: { ignoreOrigin: !0, isRequired: !0 },
              },
            }),
          ],
          B.prototype,
          'namespaceUri',
          void 0,
        ),
        (0, n._)([(0, c.Cb)(U.bT)], B.prototype, 'opacity', void 0),
        (0, n._)([(0, c.Cb)(H.outFields)], B.prototype, 'outFields', void 0),
        (0, n._)([(0, c.Cb)({ readOnly: !0 })], B.prototype, 'parsedUrl', null),
        (0, n._)([(0, c.Cb)(U.C_)], B.prototype, 'popupEnabled', void 0),
        (0, n._)(
          [(0, c.Cb)({ type: s.Z, json: { name: 'popupInfo', write: !0 } })],
          B.prototype,
          'popupTemplate',
          void 0,
        ),
        (0, n._)(
          [
            (0, c.Cb)({
              types: o.A,
              json: {
                origins: {
                  service: { name: 'drawingInfo.renderer' },
                  'web-scene': {
                    types: o.o,
                    name: 'layerDefinition.drawingInfo.renderer',
                    write: !0,
                  },
                },
                name: 'layerDefinition.drawingInfo.renderer',
                write: { ignoreOrigin: !0 },
              },
            }),
          ],
          B.prototype,
          'renderer',
          null,
        ),
        (0, n._)(
          [(0, c.Cb)(U.YI)],
          B.prototype,
          'screenSizePerspectiveEnabled',
          void 0,
        ),
        (0, n._)([(0, c.Cb)({ readOnly: !0 })], B.prototype, 'source', void 0),
        (0, n._)(
          [
            (0, c.Cb)({
              type: W.Z,
              json: {
                name: 'layerDefinition.spatialReference',
                write: { ignoreOrigin: !0, isRequired: !0 },
                origins: { service: { name: 'extent.spatialReference' } },
              },
            }),
          ],
          B.prototype,
          'spatialReference',
          void 0,
        ),
        (0, n._)(
          [
            (0, c.Cb)({
              readOnly: !0,
              type: [d.z8],
              json: {
                name: 'wfsInfo.supportedSpatialReferences',
                write: { ignoreOrigin: !0, isRequired: !0 },
              },
            }),
          ],
          B.prototype,
          'spatialReferences',
          void 0,
        ),
        (0, n._)(
          [
            (0, c.Cb)({
              type: Boolean,
              value: !1,
              json: {
                name: 'wfsInfo.swapXY',
                write: { ignoreOrigin: !0, isRequired: !0 },
              },
            }),
          ],
          B.prototype,
          'swapXY',
          void 0,
        ),
        (0, n._)(
          [
            (0, c.Cb)({
              json: {
                write: { ignoreOrigin: !0, isRequired: !0 },
                origins: { service: { name: 'name' } },
              },
            }),
          ],
          B.prototype,
          'title',
          void 0,
        ),
        (0, n._)(
          [(0, c.Cb)({ json: { read: !1 }, readOnly: !0 })],
          B.prototype,
          'type',
          void 0,
        ),
        (0, n._)([(0, c.Cb)(U.HQ)], B.prototype, 'url', void 0),
        (0, n._)(
          [
            (0, c.Cb)({
              type: String,
              readOnly: !0,
              json: {
                name: 'wfsInfo.version',
                write: { ignoreOrigin: !0, isRequired: !0 },
              },
            }),
          ],
          B.prototype,
          'version',
          void 0,
        ),
        (0, n._)(
          [(0, c.Cb)({ aliasOf: 'source.wfsCapabilities' })],
          B.prototype,
          'wfsCapabilities',
          void 0,
        ),
        (B = P = (0, n._)([(0, f.j)('esri.layers.WFSLayer')], B));
      const Q = B;
    },
    61159: (e, t, r) => {
      r.d(t, { g: () => n });
      const n = {
        supportsStatistics: !0,
        supportsPercentileStatistics: !0,
        supportsSpatialAggregationStatistics: !1,
        supportedSpatialAggregationStatistics: {
          envelope: !1,
          centroid: !1,
          convexHull: !1,
        },
        supportsCentroid: !0,
        supportsCacheHint: !1,
        supportsDistance: !0,
        supportsDistinct: !0,
        supportsExtent: !0,
        supportsGeometryProperties: !1,
        supportsHavingClause: !0,
        supportsOrderBy: !0,
        supportsPagination: !0,
        supportsQuantization: !0,
        supportsQuantizationEditMode: !1,
        supportsQueryGeometry: !0,
        supportsResultType: !1,
        supportsSqlExpression: !0,
        supportsMaxRecordCountFactor: !1,
        supportsStandardizedQueriesOnly: !0,
        supportsTopFeaturesQuery: !1,
        supportsQueryByOthers: !0,
        supportsHistoricMoment: !1,
        supportsFormatPBF: !1,
        supportsDisjointSpatialRelationship: !0,
        supportsDefaultSpatialReference: !1,
        supportsCompactGeometry: !1,
        maxRecordCountFactor: void 0,
        maxRecordCount: void 0,
        standardMaxRecordCount: void 0,
        tileMaxRecordCount: void 0,
      };
    },
    92722: (e, t, r) => {
      r.d(t, { lG: () => _, q9: () => l, my: () => S, O3: () => C });
      var n = r(20102),
        s = r(70272),
        o = r(5428),
        i = r(35671);
      const a = {
        LineString: 'esriGeometryPolyline',
        MultiLineString: 'esriGeometryPolyline',
        MultiPoint: 'esriGeometryMultipoint',
        Point: 'esriGeometryPoint',
        Polygon: 'esriGeometryPolygon',
        MultiPolygon: 'esriGeometryPolygon',
      };
      function l(e) {
        return a[e];
      }
      function* u(e) {
        switch (e.type) {
          case 'Feature':
            yield e;
            break;
          case 'FeatureCollection':
            for (const t of e.features) t && (yield t);
        }
      }
      function* c(e) {
        if (!e) return null;
        switch (e.type) {
          case 'Point':
            yield e.coordinates;
            break;
          case 'LineString':
          case 'MultiPoint':
            yield* e.coordinates;
            break;
          case 'MultiLineString':
          case 'Polygon':
            for (const t of e.coordinates) yield* t;
            break;
          case 'MultiPolygon':
            for (const t of e.coordinates) for (const e of t) yield* e;
        }
      }
      function p(e) {
        for (const t of e) if (t.length > 2) return !0;
        return !1;
      }
      function d(e) {
        let t = 0;
        for (let r = 0; r < e.length; r++) {
          const n = e[r],
            s = e[(r + 1) % e.length];
          t += n[0] * s[1] - s[0] * n[1];
        }
        return t <= 0;
      }
      function f(e) {
        const t = e[0],
          r = e[e.length - 1];
        return (
          (t[0] === r[0] && t[1] === r[1] && t[2] === r[2]) || e.push(t), e
        );
      }
      function y(e, t, r) {
        switch (t.type) {
          case 'LineString':
          case 'MultiPoint':
            return (function (e, t, r) {
              return g(e, t.coordinates, r), e;
            })(e, t, r);
          case 'MultiLineString':
            return (function (e, t, r) {
              for (const n of t.coordinates) g(e, n, r);
              return e;
            })(e, t, r);
          case 'MultiPolygon':
            return (function (e, t, r) {
              for (const n of t.coordinates) {
                m(e, n[0], r);
                for (let t = 1; t < n.length; t++) h(e, n[t], r);
              }
              return e;
            })(e, t, r);
          case 'Point':
            return (function (e, t, r) {
              return w(e, t.coordinates, r), e;
            })(e, t, r);
          case 'Polygon':
            return (function (e, t, r) {
              const n = t.coordinates;
              m(e, n[0], r);
              for (let t = 1; t < n.length; t++) h(e, n[t], r);
              return e;
            })(e, t, r);
        }
      }
      function m(e, t, r) {
        const n = f(t);
        !(function (e) {
          return !d(e);
        })(n)
          ? g(e, n, r)
          : b(e, n, r);
      }
      function h(e, t, r) {
        const n = f(t);
        !(function (e) {
          return d(e);
        })(n)
          ? g(e, n, r)
          : b(e, n, r);
      }
      function g(e, t, r) {
        for (const n of t) w(e, n, r);
        e.lengths.push(t.length);
      }
      function b(e, t, r) {
        for (let n = t.length - 1; n >= 0; n--) w(e, t[n], r);
        e.lengths.push(t.length);
      }
      function w(e, t, r) {
        const [n, s, o] = t;
        e.coords.push(n, s), r.hasZ && e.coords.push(o || 0);
      }
      function v(e) {
        switch (typeof e) {
          case 'string':
            return 'esriFieldTypeString';
          case 'number':
            return 'esriFieldTypeDouble';
          default:
            return 'unknown';
        }
      }
      function C(e) {
        if (!e) throw new n.Z('geojson-layer:empty', 'GeoJSON data is empty');
        if ('Feature' !== e.type && 'FeatureCollection' !== e.type)
          throw new n.Z(
            'geojson-layer:unsupported-geojson-object',
            'missing or not supported GeoJSON object type',
            { data: e },
          );
        const { crs: t } = e;
        if (!t) return;
        const r =
            'string' == typeof t
              ? t
              : 'name' === t.type
              ? t.properties.name
              : 'EPSG' === t.type
              ? t.properties.code
              : null,
          s = new RegExp('.*(CRS84H?|4326)$', 'i');
        if (!r || !s.test(r))
          throw new n.Z(
            'geojson-layer:unsupported-crs',
            "unsupported GeoJSON 'crs' member",
            { crs: t },
          );
      }
      function S(e, t = {}) {
        const r = [],
          n = new Set(),
          s = new Set();
        let o,
          a = !1,
          d = null,
          f = !1,
          { geometryType: y = null } = t,
          m = !1;
        for (const t of u(e)) {
          const { geometry: e, properties: i, id: u } = t;
          if (
            (!e || (y || (y = l(e.type)), l(e.type) === y)) &&
            (a || (a = p(c(e))),
            f ||
              ((f = null != u),
              f &&
                ((o = typeof u),
                (d = Object.keys(i).filter((e) => i[e] === u)))),
            f &&
              null != u &&
              (d.length > 1
                ? (d = d.filter((e) => i[e] === u))
                : 1 === d.length && (d = i[d[0]] === u ? d : [])),
            !m && i)
          ) {
            let e = !0;
            for (const t in i) {
              if (n.has(t)) continue;
              const o = i[t];
              if (null == o) {
                (e = !1), s.add(t);
                continue;
              }
              const a = v(o);
              'unknown' !== a
                ? (s.delete(t),
                  n.add(t),
                  r.push({ name: t, alias: t, type: a }))
                : s.add(t);
            }
            m = e;
          }
        }
        const h = (d && 1 === d.length && d[0]) || null;
        if (h)
          for (const e of r)
            if (e.name === h && (0, i.H7)(e)) {
              e.type = 'esriFieldTypeOID';
              break;
            }
        return {
          fields: r,
          geometryType: y,
          hasZ: a,
          objectIdFieldName: h,
          objectIdFieldType: o,
          unknownFields: Array.from(s),
        };
      }
      function _(e, t) {
        return Array.from(
          (function* (e, t = {}) {
            const { geometryType: r, objectIdField: n } = t;
            for (const a of e) {
              var i;
              const { geometry: e, properties: u, id: c } = a;
              if (e && l(e.type) !== r) continue;
              const p = u || {};
              let d = null != (i = p[n]) ? i : null;
              n && null != c && !p[n] && (p[n] = d = c);
              const f = new s.u_(e ? y(new o.Z(), e, t) : null, p, null, d);
              yield f;
            }
          })(u(e), t),
        );
      }
    },
    25278: (e, t, r) => {
      r.d(t, { MS: () => d, Dm: () => c, Hq: () => p, bU: () => a });
      var n = r(80442),
        s = r(22974),
        o = r(61159),
        i = r(58333);
      function a(e) {
        return {
          renderer: {
            type: 'simple',
            symbol:
              'esriGeometryPoint' === e || 'esriGeometryMultipoint' === e
                ? i.I4
                : 'esriGeometryPolyline' === e
                ? i.ET
                : i.lF,
          },
        };
      }
      const l = /^[_$a-zA-Z][_$a-zA-Z0-9]*$/;
      let u = 1;
      function c(e, t) {
        if ((0, n.Z)('esri-csp-restrictions'))
          return () => ({ [t]: null, ...e });
        try {
          let r = `this.${t} = null;`;
          for (const t in e)
            r += `this${l.test(t) ? `.${t}` : `["${t}"]`} = ${JSON.stringify(
              e[t],
            )};`;
          const n = new Function(
            `\n      return class AttributesClass$${u++} {\n        constructor() {\n          ${r};\n        }\n      }\n    `,
          )();
          return () => new n();
        } catch (r) {
          return () => ({ [t]: null, ...e });
        }
      }
      function p(e = {}) {
        return [
          {
            name: 'New Feature',
            description: '',
            prototype: { attributes: (0, s.d9)(e) },
          },
        ];
      }
      function d(e, t) {
        return {
          attachment: null,
          data: {
            isVersioned: !1,
            supportsAttachment: !1,
            supportsM: !1,
            supportsZ: e,
          },
          metadata: { supportsAdvancedFieldProperties: !1 },
          operations: {
            supportsCalculate: !1,
            supportsTruncate: !1,
            supportsValidateSql: !1,
            supportsAdd: t,
            supportsDelete: t,
            supportsEditing: t,
            supportsChangeTracking: !1,
            supportsQuery: !0,
            supportsQueryAttachments: !1,
            supportsResizeAttachments: !1,
            supportsSync: !1,
            supportsUpdate: t,
            supportsExceedsLimitStatistics: !0,
          },
          query: o.g,
          queryRelated: {
            supportsCount: !0,
            supportsOrderBy: !0,
            supportsPagination: !0,
          },
          editing: {
            supportsGeometryUpdate: t,
            supportsGlobalId: !1,
            supportsReturnServiceEditsInSourceSpatialReference: !1,
            supportsRollbackOnFailure: !1,
            supportsUpdateWithoutM: !1,
            supportsUploadWithItemId: !1,
            supportsDeleteByAnonymous: !1,
            supportsDeleteByOthers: !1,
            supportsUpdateByAnonymous: !1,
            supportsUpdateByOthers: !1,
          },
        };
      }
    },
    68825: (e, t, r) => {
      r.d(t, { c: () => m });
      var n,
        s = r(43697),
        o = r(78286),
        i = r(5600),
        a = (r(67676), r(80442), r(75215), r(52011)),
        l = r(35454),
        u = r(96674);
      const c = new l.X({ asc: 'ascending', desc: 'descending' });
      let p = (n = class extends u.wq {
        constructor(e) {
          super(e),
            (this.field = null),
            (this.valueExpression = null),
            (this.order = 'ascending');
        }
        clone() {
          return new n({
            field: this.field,
            valueExpression: this.valueExpression,
            order: this.order,
          });
        }
      });
      (0, s._)(
        [(0, i.Cb)({ type: String, json: { write: !0 } })],
        p.prototype,
        'field',
        void 0,
      ),
        (0, s._)(
          [(0, i.Cb)({ type: String, json: { write: !0 } })],
          p.prototype,
          'valueExpression',
          void 0,
        ),
        (0, s._)(
          [
            (0, i.Cb)({
              type: c.apiValues,
              json: { read: c.read, write: c.write },
            }),
          ],
          p.prototype,
          'order',
          void 0,
        ),
        (p = n = (0, s._)([(0, a.j)('esri.layers.support.OrderByInfo')], p));
      const d = p;
      function f(e, t, r) {
        if (!e) return null;
        const n = e.find((e) => !!e.field);
        if (!n) return null;
        const s = new d();
        return s.read(n, r), [s];
      }
      function y(e, t, r, n) {
        const s = e.find((e) => !!e.field);
        s && (0, o.RB)(r, [s.toJSON()], t);
      }
      const m = (e) => {
        let t = class extends e {
          constructor() {
            super(...arguments), (this.orderBy = null);
          }
        };
        return (
          (0, s._)(
            [
              (0, i.Cb)({
                type: [d],
                json: {
                  origins: { 'web-scene': { write: !1, read: !1 } },
                  read: { source: 'layerDefinition.orderBy', reader: f },
                  write: { target: 'layerDefinition.orderBy', writer: y },
                },
              }),
            ],
            t.prototype,
            'orderBy',
            void 0,
          ),
          (t = (0, s._)([(0, a.j)('esri.layers.mixins.OrderedLayer')], t)),
          t
        );
      };
    },
    16859: (e, t, r) => {
      r.d(t, { I: () => v });
      var n = r(43697),
        s = r(40330),
        o = r(3172),
        i = r(66643),
        a = r(20102),
        l = r(92604),
        u = r(70586),
        c = r(95330),
        p = r(17452),
        d = r(5600),
        f = (r(67676), r(80442), r(75215), r(71715)),
        y = r(52011),
        m = r(30556),
        h = r(65587),
        g = r(15235),
        b = r(86082);
      const w = l.Z.getLogger('esri.layers.mixins.PortalLayer'),
        v = (e) => {
          let t = class extends e {
            constructor() {
              super(...arguments),
                (this.resourceReferences = { portalItem: null, paths: [] }),
                (this.userHasEditingPrivileges = !0);
            }
            destroy() {
              var e;
              null == (e = this.portalItem) || e.destroy(),
                (this.portalItem = null);
            }
            set portalItem(e) {
              e !== this._get('portalItem') &&
                (this.removeOrigin('portal-item'), this._set('portalItem', e));
            }
            readPortalItem(e, t, r) {
              if (t.itemId)
                return new g.default({ id: t.itemId, portal: r && r.portal });
            }
            writePortalItem(e, t) {
              e && e.id && (t.itemId = e.id);
            }
            async loadFromPortal(e, t) {
              if (this.portalItem && this.portalItem.id)
                try {
                  const n = await r.e(8062).then(r.bind(r, 18062));
                  return (
                    (0, c.k_)(t),
                    await n.load(
                      {
                        instance: this,
                        supportedTypes: e.supportedTypes,
                        validateItem: e.validateItem,
                        supportsData: e.supportsData,
                      },
                      t,
                    )
                  );
                } catch (e) {
                  throw (
                    ((0, c.D_)(e) ||
                      w.warn(
                        `Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${e}`,
                      ),
                    e)
                  );
                }
            }
            async finishLoadEditablePortalLayer(e) {
              this._set(
                'userHasEditingPrivileges',
                await this._fetchUserHasEditingPrivileges(e).catch(
                  (e) => ((0, c.r9)(e), !0),
                ),
              );
            }
            async _fetchUserHasEditingPrivileges(e) {
              const t = this.url
                ? null == s.id
                  ? void 0
                  : s.id.findCredential(this.url)
                : null;
              if (!t) return !0;
              const r =
                C.credential === t ? C.user : await this._fetchEditingUser(e);
              return (
                (C.credential = t),
                (C.user = r),
                (0, u.Wi)(r) ||
                  null == r.privileges ||
                  r.privileges.includes('features:user:edit')
              );
            }
            async _fetchEditingUser(e) {
              var t, r;
              const n =
                null == (t = this.portalItem) || null == (r = t.portal)
                  ? void 0
                  : r.user;
              if (n) return n;
              const a = s.id.findServerInfo(this.url);
              if (null == a || !a.owningSystemUrl) return null;
              const l = `${a.owningSystemUrl}/sharing/rest`,
                c = h.Z.getDefault();
              if (c && c.loaded && (0, p.Fv)(c.restUrl) === (0, p.Fv)(l))
                return c.user;
              const d = `${l}/community/self`,
                f = (0, u.pC)(e) ? e.signal : null,
                y = await (0, i.q6)(
                  (0, o.default)(d, {
                    authMode: 'no-prompt',
                    query: { f: 'json' },
                    signal: f,
                  }),
                );
              return y.ok ? b.default.fromJSON(y.value.data) : null;
            }
            read(e, t) {
              t && (t.layer = this), super.read(e, t);
            }
            write(e, t) {
              const r = t && t.portal,
                n =
                  this.portalItem &&
                  this.portalItem.id &&
                  (this.portalItem.portal || h.Z.getDefault());
              return r && n && !(0, p.tm)(n.restUrl, r.restUrl)
                ? (t.messages &&
                    t.messages.push(
                      new a.Z(
                        'layer:cross-portal',
                        `The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save the scene, set the layer.portalItem to null or save the scene to the same portal as the item associated with the layer`,
                        { layer: this },
                      ),
                    ),
                  null)
                : super.write(e, { ...t, layer: this });
            }
          };
          return (
            (0, n._)(
              [(0, d.Cb)({ type: g.default })],
              t.prototype,
              'portalItem',
              null,
            ),
            (0, n._)(
              [(0, f.r)('web-document', 'portalItem', ['itemId'])],
              t.prototype,
              'readPortalItem',
              null,
            ),
            (0, n._)(
              [
                (0, m.c)('web-document', 'portalItem', {
                  itemId: { type: String },
                }),
              ],
              t.prototype,
              'writePortalItem',
              null,
            ),
            (0, n._)(
              [(0, d.Cb)({ clonable: !1 })],
              t.prototype,
              'resourceReferences',
              void 0,
            ),
            (0, n._)(
              [(0, d.Cb)({ readOnly: !0 })],
              t.prototype,
              'userHasEditingPrivileges',
              void 0,
            ),
            (t = (0, n._)([(0, y.j)('esri.layers.mixins.PortalLayer')], t)),
            t
          );
        },
        C = { credential: null, user: null };
    },
    74556: (e, t, r) => {
      r.d(t, {
        M8: () => C,
        ft: () => P,
        FU: () => x,
        Bm: () => j,
        be: () => T,
        eB: () => R,
      }),
        r(66577);
      var n = r(3172),
        s = r(20102);
      function o(e, t) {
        for (const r of e) if (null != r && t(r)) return r;
      }
      var i = r(70586),
        a = r(95330),
        l = r(17452),
        u = r(44547),
        c = r(8744),
        p = r(86973),
        d = r(92722);
      function f(e) {
        var t, r, n, s;
        const o = y.exec(e);
        if (!o) return null;
        const i = o.groups,
          a = +i.year,
          l = +i.month - 1,
          u = +i.day,
          c = +(null != (t = i.hours) ? t : '0'),
          p = +(null != (r = i.minutes) ? r : '0'),
          d = +(null != (n = i.seconds) ? n : '0');
        if (c > 23) return null;
        if (p > 59) return null;
        if (d > 59) return null;
        const f = null != (s = i.ms) ? s : '0',
          m = f ? +f.padEnd(3, '0').substring(0, 3) : 0;
        let h;
        if (i.isUTC) h = Date.UTC(a, l, u, c, p, d, m);
        else if (i.offsetSign) {
          const e = +i.offsetHours,
            t = +i.offsetMinutes;
          h =
            6e4 * ('+' === i.offsetSign ? -1 : 1) * (60 * e + t) +
            Date.UTC(a, l, u, c, p, d, m);
        } else h = new Date(a, l, u, c, p, d, m).getTime();
        return Number.isNaN(h) ? null : h;
      }
      const y =
        /^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/;
      var m = r(88724),
        h = r(1231),
        g = r(82971),
        b = r(6570);
      const w = 'xlink:href',
        v = '2.0.0',
        C = '__esri_wfs_id__',
        S = 'wfs-layer:feature-type-not-found',
        _ = 'wfs-layer:unknown-geometry-type',
        F = 'wfs-layer:unsupported-wfs-version';
      async function x(e, t) {
        const r = (function (e) {
          const t = L(e);
          (function (e) {
            const t = e.firstElementChild.getAttribute('version');
            if (t && t !== v)
              throw new s.Z(
                F,
                `Unsupported WFS version ${t}. Supported version: ${v}`,
              );
          })(t),
            U(t);
          const r = t.firstElementChild,
            n = (function (e) {
              const t = [];
              return function* () {
                yield* t;
                for (const r of e) t.push(r), yield r;
              };
            })(
              (function (e) {
                return (0, m.H)(e, {
                  FeatureTypeList: {
                    FeatureType: (e) => {
                      const t = {
                          typeName: 'undefined:undefined',
                          name: '',
                          title: '',
                          description: '',
                          extent: null,
                          namespacePrefix: '',
                          namespaceUri: '',
                          supportedSpatialReferences: [],
                        },
                        r = new Set([4326]),
                        n = (e) => {
                          var t, n;
                          const s = parseInt(
                            null ==
                              (t = e.textContent.match(/(?<wkid>\d+$)/i)) ||
                              null == (n = t.groups)
                              ? void 0
                              : n.wkid,
                            10,
                          );
                          Number.isNaN(s) || r.add(s);
                        };
                      return (
                        (0, m.h)(e, {
                          Name: (e) => {
                            const { name: r, prefix: n } = M(e.textContent);
                            (t.typeName = `${n}:${r}`),
                              (t.name = r),
                              (t.namespacePrefix = n),
                              (t.namespaceUri = e.lookupNamespaceURI(n));
                          },
                          Abstract: (e) => {
                            t.description = e.textContent;
                          },
                          Title: (e) => {
                            t.title = e.textContent;
                          },
                          WGS84BoundingBox: (e) => {
                            t.extent = (function (e) {
                              let t, r, n, s;
                              for (const o of e.children)
                                switch (o.localName) {
                                  case 'LowerCorner':
                                    [t, r] = o.textContent
                                      .split(' ')
                                      .map((e) => Number.parseFloat(e));
                                    break;
                                  case 'UpperCorner':
                                    [n, s] = o.textContent
                                      .split(' ')
                                      .map((e) => Number.parseFloat(e));
                                }
                              return {
                                xmin: t,
                                ymin: r,
                                xmax: n,
                                ymax: s,
                                spatialReference: c.Zn,
                              };
                            })(e);
                          },
                          DefaultSRS: n,
                          DefaultCRS: n,
                          OtherSRS: n,
                          OtherCRS: n,
                        }),
                        t.title || (t.title = t.name),
                        t.supportedSpatialReferences.push(...r),
                        t
                      );
                    },
                  },
                });
              })(r),
            );
          return {
            operations: E(r),
            get featureTypes() {
              return Array.from(n());
            },
            readFeatureTypes: n,
          };
        })(
          (
            await (0, n.default)(e, {
              responseType: 'text',
              query: {
                SERVICE: 'WFS',
                REQUEST: 'GetCapabilities',
                VERSION: v,
                ...(null == t ? void 0 : t.customParameters),
              },
              signal: null == t ? void 0 : t.signal,
            })
          ).data,
        );
        return (
          (function (e, t) {
            (0, l.$U)(e) &&
              ((0, l.D6)(e, t.operations.DescribeFeatureType.url, !0) &&
                (t.operations.DescribeFeatureType.url = (0, l.hO)(
                  t.operations.DescribeFeatureType.url,
                )),
              (0, l.D6)(e, t.operations.GetFeature.url, !0) &&
                (t.operations.GetFeature.url = (0, l.hO)(
                  t.operations.GetFeature.url,
                )));
          })(e, r),
          r
        );
      }
      const k = new Set([
        'json',
        'application/json',
        'geojson',
        'application/json; subtype=geojson',
      ]);
      function E(e) {
        let t = !1;
        const r = {
          GetCapabilities: { url: '' },
          DescribeFeatureType: { url: '' },
          GetFeature: { url: '', outputFormat: null, supportsPagination: !1 },
        };
        if (
          ((0, m.h)(e, {
            OperationsMetadata: {
              Operation: (e) => {
                switch (e.getAttribute('name')) {
                  case 'GetCapabilities':
                    return {
                      DCP: {
                        HTTP: {
                          Get: (e) => {
                            r.GetCapabilities.url = e.getAttribute(w);
                          },
                        },
                      },
                    };
                  case 'DescribeFeatureType':
                    return {
                      DCP: {
                        HTTP: {
                          Get: (e) => {
                            r.DescribeFeatureType.url = e.getAttribute(w);
                          },
                        },
                      },
                    };
                  case 'GetFeature':
                    return {
                      DCP: {
                        HTTP: {
                          Get: (e) => {
                            r.GetFeature.url = e.getAttribute(w);
                          },
                        },
                      },
                      Parameter: (e) => {
                        if ('outputFormat' === e.getAttribute('name'))
                          return {
                            AllowedValues: {
                              Value: (e) => {
                                const t = e.textContent;
                                k.has(t.toLowerCase()) &&
                                  (r.GetFeature.outputFormat = t);
                              },
                            },
                          };
                      },
                    };
                }
              },
              Constraint: (e) => {
                switch (e.getAttribute('name')) {
                  case 'KVPEncoding':
                    return {
                      DefaultValue: (e) => {
                        t = 'true' === e.textContent.toLowerCase();
                      },
                    };
                  case 'ImplementsResultPaging':
                    return {
                      DefaultValue: (e) => {
                        r.GetFeature.supportsPagination =
                          'true' === e.textContent.toLowerCase();
                      },
                    };
                }
              },
            },
          }),
          !t)
        )
          throw new s.Z(
            'wfs-layer:kvp-encoding-not-supported',
            "WFS service doesn't support key/value pair (KVP) encoding",
          );
        if ((0, i.Wi)(r.GetFeature.outputFormat))
          throw new s.Z(
            'wfs-layer:geojson-not-supported',
            "WFS service doesn't support GeoJSON output format",
          );
        return r;
      }
      function P(e, t, r) {
        return o(e, (e) =>
          r
            ? e.name === t && e.namespaceUri === r
            : e.typeName === t || e.name === t,
        );
      }
      async function T(e, t, r, n = {}) {
        var o;
        const { featureType: l, extent: p } = await (async function (
            e,
            t,
            r,
            n = {},
          ) {
            const { spatialReference: o = g.Z.WGS84 } = n,
              a = e.readFeatureTypes(),
              l = t ? P(a, t, r) : a.next().value;
            if ((0, i.Wi)(l))
              throw t
                ? new s.Z(
                    S,
                    `The type '${t}' could not be found in the service`,
                  )
                : new s.Z('wfs-layer:empty-service', 'The service is empty');
            let p = new b.Z({ ...l.extent, spatialReference: o });
            if (!(0, c.fS)(o, c.Zn))
              try {
                await (0, u.iQ)(c.Zn, o, void 0, n), (p = (0, u.iV)(p, c.Zn));
              } catch {
                throw new s.Z(
                  'wfs-layer:unsupported-spatial-reference',
                  'Projection not supported',
                );
              }
            return { extent: p, spatialReference: o, featureType: l };
          })(e, t, r, n),
          {
            fields: d,
            geometryType: f,
            swapXY: y,
            objectIdField: m,
            geometryField: h,
          } = await (async function (e, t, r = {}) {
            const [n, o] = await (0, a.as)([
              O(e.operations.DescribeFeatureType.url, t, r),
              I(e, t, r),
            ]);
            if (n.error || o.error)
              throw new s.Z(
                'wfs-layer:getWFSLayerTypeInfo-error',
                `An error occurred while getting info about the feature type '${t}'`,
                { error: n.error || o.error },
              );
            const { fields: l, errors: u } = n.value,
              c = n.value.geometryType || o.value.geometryType,
              p = o.value.swapXY;
            if ((0, i.Wi)(c))
              throw new s.Z(
                _,
                `The geometry type could not be determined for type '${t}`,
                { typeName: t, geometryType: c, fields: l, errors: u },
              );
            return { ...R(l), geometryType: c, swapXY: p };
          })(e, l.typeName, n);
        return {
          url: e.operations.GetCapabilities.url,
          name: l.name,
          namespaceUri: l.namespaceUri,
          fields: d,
          geometryField: h,
          geometryType: f,
          objectIdField: m,
          spatialReference: null != (o = n.spatialReference) ? o : g.Z.WGS84,
          extent: p,
          swapXY: y,
          wfsCapabilities: e,
          customParameters: n.customParameters,
        };
      }
      function R(e) {
        var t;
        const r = e.find((e) => 'geometry' === e.type);
        let n = e.find((e) => 'oid' === e.type);
        return (
          (e = e.filter((e) => 'geometry' !== e.type)),
          n ||
            ((n = new h.Z({ name: C, type: 'oid', alias: C })), e.unshift(n)),
          {
            geometryField: null != (t = null == r ? void 0 : r.name) ? t : null,
            objectIdField: n.name,
            fields: e,
          }
        );
      }
      async function I(e, t, r = {}) {
        var s;
        let o,
          i = !1;
        const [a, l] = await Promise.all([
            j(
              e.operations.GetFeature.url,
              t,
              e.operations.GetFeature.outputFormat,
              { ...r, count: 1 },
            ),
            (0, n.default)(e.operations.GetFeature.url, {
              responseType: 'text',
              query: Z(t, void 0, { ...r, count: 1 }),
              signal: null == r ? void 0 : r.signal,
            }),
          ]),
          u =
            'FeatureCollection' === a.type &&
            (null == (s = a.features[0]) ? void 0 : s.geometry);
        if (u) {
          let e;
          switch (((o = p.Mk.fromJSON((0, d.q9)(u.type))), u.type)) {
            case 'Point':
              e = u.coordinates;
              break;
            case 'LineString':
            case 'MultiPoint':
              e = u.coordinates[0];
              break;
            case 'MultiLineString':
            case 'Polygon':
              e = u.coordinates[0][0];
              break;
            case 'MultiPolygon':
              e = u.coordinates[0][0][0];
          }
          const t = /<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(
            l.data,
          );
          if (t) {
            const r = e[0].toFixed(3),
              n = e[1].toFixed(3),
              s = parseFloat(t[1]).toFixed(3);
            r === parseFloat(t[2]).toFixed(3) && n === s && (i = !0);
          }
        }
        return { geometryType: o, swapXY: i };
      }
      async function O(e, t, r) {
        return (function (e, t) {
          const { name: r } = M(e),
            n = L(t);
          U(n);
          const a = o(
            (0, m.H)(n.firstElementChild, {
              element: (e) => ({
                name: e.getAttribute('name'),
                typeName: M(e.getAttribute('type')).name,
              }),
            }),
            ({ name: e }) => e === r,
          );
          if ((0, i.pC)(a)) {
            const e = o(
              (0, m.H)(n.firstElementChild, { complexType: (e) => e }),
              (e) => e.getAttribute('name') === a.typeName,
            );
            if ((0, i.pC)(e))
              return (function (e) {
                var t, r;
                const n = [],
                  o = [];
                let i;
                const a = (0, m.H)(e, {
                  complexContent: {
                    extension: { sequence: { element: (e) => e } },
                  },
                });
                for (const l of a) {
                  const a = l.getAttribute('name');
                  if (!a) continue;
                  let u, c;
                  if (
                    (l.hasAttribute('type')
                      ? (u = M(l.getAttribute('type')).name)
                      : (0, m.h)(l, {
                          simpleType: {
                            restriction: (e) => (
                              (u = M(e.getAttribute('base')).name),
                              {
                                maxLength: (e) => {
                                  c = +e.getAttribute('value');
                                },
                              }
                            ),
                          },
                        }),
                    !u)
                  )
                    continue;
                  const p = 'true' === l.getAttribute('nillable');
                  let d = !1;
                  switch (u.toLowerCase()) {
                    case 'integer':
                    case 'nonpositiveinteger':
                    case 'negativeinteger':
                    case 'long':
                    case 'int':
                    case 'short':
                    case 'byte':
                    case 'nonnegativeinteger':
                    case 'unsignedlong':
                    case 'unsignedint':
                    case 'unsignedshort':
                    case 'unsignedbyte':
                    case 'positiveinteger':
                      o.push(
                        new h.Z({
                          name: a,
                          alias: a,
                          type: 'integer',
                          nullable: p,
                        }),
                      );
                      break;
                    case 'float':
                    case 'double':
                    case 'decimal':
                      o.push(
                        new h.Z({
                          name: a,
                          alias: a,
                          type: 'double',
                          nullable: p,
                        }),
                      );
                      break;
                    case 'boolean':
                    case 'string':
                    case 'gyearmonth':
                    case 'gyear':
                    case 'gmonthday':
                    case 'gday':
                    case 'gmonth':
                    case 'anyuri':
                    case 'qname':
                    case 'notation':
                    case 'normalizedstring':
                    case 'token':
                    case 'language':
                    case 'idrefs':
                    case 'entities':
                    case 'nmtoken':
                    case 'nmtokens':
                    case 'name':
                    case 'ncname':
                    case 'id':
                    case 'idref':
                    case 'entity':
                    case 'duration':
                    case 'time':
                      o.push(
                        new h.Z({
                          name: a,
                          alias: a,
                          type: 'string',
                          nullable: p,
                          length: null != (t = c) ? t : 255,
                        }),
                      );
                      break;
                    case 'datetime':
                    case 'date':
                      o.push(
                        new h.Z({
                          name: a,
                          alias: a,
                          type: 'date',
                          nullable: p,
                          length: null != (r = c) ? r : 36,
                        }),
                      );
                      break;
                    case 'pointpropertytype':
                      (i = 'point'), (d = !0);
                      break;
                    case 'multipointpropertytype':
                      (i = 'multipoint'), (d = !0);
                      break;
                    case 'curvepropertytype':
                    case 'multicurvepropertytype':
                    case 'multilinestringpropertytype':
                      (i = 'polyline'), (d = !0);
                      break;
                    case 'surfacepropertytype':
                    case 'multisurfacepropertytype':
                    case 'multipolygonpropertytype':
                      (i = 'polygon'), (d = !0);
                      break;
                    case 'geometrypropertytype':
                    case 'multigeometrypropertytype':
                      (d = !0),
                        n.push(
                          new s.Z(_, `geometry type '${u}' is not supported`, {
                            type: new XMLSerializer().serializeToString(e),
                          }),
                        );
                      break;
                    default:
                      n.push(
                        new s.Z(
                          'wfs-layer:unknown-field-type',
                          `Unknown field type '${u}'`,
                          { type: new XMLSerializer().serializeToString(e) },
                        ),
                      );
                  }
                  d &&
                    o.push(
                      new h.Z({
                        name: a,
                        alias: a,
                        type: 'geometry',
                        nullable: p,
                      }),
                    );
                }
                for (const e of o)
                  if (
                    'integer' === e.type &&
                    !e.nullable &&
                    N.has(e.name.toLowerCase())
                  ) {
                    e.type = 'oid';
                    break;
                  }
                return { geometryType: i, fields: o, errors: n };
              })(e);
          }
          throw new s.Z(S, `Type '${e}' not found in document`, {
            document: new XMLSerializer().serializeToString(n),
          });
        })(
          t,
          (
            await (0, n.default)(e, {
              responseType: 'text',
              query: {
                SERVICE: 'WFS',
                REQUEST: 'DescribeFeatureType',
                VERSION: v,
                TYPENAME: t,
                ...(null == r ? void 0 : r.customParameters),
              },
              signal: null == r ? void 0 : r.signal,
            })
          ).data,
        );
      }
      const N = new Set(['objectid', 'fid']);
      async function j(e, t, r, o) {
        let { data: i } = await (0, n.default)(e, {
          responseType: 'text',
          query: Z(t, r, o),
          signal: null == o ? void 0 : o.signal,
        });
        i = i.replace(/": +(-?\d+),(\d+)(,)?/g, '": $1.$2$3');
        try {
          var a;
          if (null != o && null != (a = o.dateFields) && a.length) {
            const e = new Set(o.dateFields);
            return JSON.parse(i, (t, r) =>
              e.has(t)
                ? (function (e) {
                    var t;
                    return null != (t = f(e))
                      ? t
                      : (function (e) {
                          const t = new Date(e).getTime();
                          return Number.isNaN(t) ? null : t;
                        })(e);
                  })(r)
                : r,
            );
          }
          return JSON.parse(i);
        } catch (e) {
          throw new s.Z(
            'wfs-layer:malformed-json',
            'Error while parsing the response',
            { response: i, error: e },
          );
        }
      }
      function Z(e, t, r) {
        return {
          SERVICE: 'WFS',
          REQUEST: 'GetFeature',
          VERSION: v,
          TYPENAMES: e,
          OUTPUTFORMAT: t,
          SRSNAME: 'EPSG:4326',
          STARTINDEX: null == r ? void 0 : r.startIndex,
          COUNT: null == r ? void 0 : r.count,
          ...(null == r ? void 0 : r.customParameters),
        };
      }
      function L(e) {
        return new DOMParser().parseFromString(e.trim(), 'text/xml');
      }
      function M(e) {
        const [t, r] = e.split(':');
        return { prefix: r ? t : '', name: null != r ? r : t };
      }
      function U(e) {
        let t, r;
        if (
          ((0, m.h)(e.firstElementChild, {
            Exception: (e) => (
              (t = e.getAttribute('exceptionCode')),
              {
                ExceptionText: (e) => {
                  r = e.textContent;
                },
              }
            ),
          }),
          t)
        )
          throw new s.Z(`wfs-layer:${t}`, r);
      }
    },
    88724: (e, t, r) => {
      function n(e, t) {
        for (const r of e.children)
          if (r.localName in t) {
            const e = t[r.localName];
            if ('function' == typeof e) {
              const t = e(r);
              t && n(r, t);
            } else n(r, e);
          }
      }
      function* s(e, t) {
        for (const r of e.children)
          if (r.localName in t) {
            const e = t[r.localName];
            'function' == typeof e ? yield e(r) : yield* s(r, e);
          }
      }
      r.d(t, { H: () => s, h: () => n });
    },
    99282: (e, t, r) => {
      r.d(t, { a: () => o });
      var n = r(67900),
        s = r(68441);
      const o = {
        inches: (0, n.En)(1, 'meters', 'inches'),
        feet: (0, n.En)(1, 'meters', 'feet'),
        'us-feet': (0, n.En)(1, 'meters', 'us-feet'),
        yards: (0, n.En)(1, 'meters', 'yards'),
        miles: (0, n.En)(1, 'meters', 'miles'),
        'nautical-miles': (0, n.En)(1, 'meters', 'nautical-miles'),
        millimeters: (0, n.En)(1, 'meters', 'millimeters'),
        centimeters: (0, n.En)(1, 'meters', 'centimeters'),
        decimeters: (0, n.En)(1, 'meters', 'decimeters'),
        meters: (0, n.En)(1, 'meters', 'meters'),
        kilometers: (0, n.En)(1, 'meters', 'kilometers'),
        'decimal-degrees': 1 / (0, n.ty)(1, 'meters', s.sv.radius),
      };
    },
    51706: (e, t, r) => {
      var n, s;
      function o(e) {
        return (
          e && 'esri.renderers.visualVariables.SizeVariable' === e.declaredClass
        );
      }
      function i(e) {
        return null != e && !isNaN(e) && isFinite(e);
      }
      function a(e) {
        return e.valueExpression
          ? n.Expression
          : e.field && 'string' == typeof e.field
          ? n.Field
          : n.Unknown;
      }
      function l(e, t) {
        const r = t || a(e),
          o = e.valueUnit || 'unknown';
        return r === n.Unknown
          ? s.Constant
          : e.stops
          ? s.Stops
          : null != e.minSize &&
            null != e.maxSize &&
            null != e.minDataValue &&
            null != e.maxDataValue
          ? s.ClampedLinear
          : 'unknown' === o
          ? null != e.minSize && null != e.minDataValue
            ? e.minSize && e.minDataValue
              ? s.Proportional
              : s.Additive
            : s.Identity
          : s.RealWorldSize;
      }
      r.d(t, {
        RY: () => n,
        hL: () => s,
        PS: () => a,
        QW: () => l,
        iY: () => o,
        qh: () => i,
      }),
        (function (e) {
          (e.Unknown = 'unknown'),
            (e.Expression = 'expression'),
            (e.Field = 'field');
        })(n || (n = {})),
        (function (e) {
          (e.Unknown = 'unknown'),
            (e.Stops = 'stops'),
            (e.ClampedLinear = 'clamped-linear'),
            (e.Proportional = 'proportional'),
            (e.Additive = 'additive'),
            (e.Constant = 'constant'),
            (e.Identity = 'identity'),
            (e.RealWorldSize = 'real-world-size');
        })(s || (s = {}));
    },
    28101: (e, t, r) => {
      r.d(t, {
        PR: () => S,
        Lq: () => y,
        Km: () => m,
        cM: () => h,
        ap: () => g,
        V3: () => v,
        B3: () => f,
      });
      var n = r(22303),
        s = r(38171),
        o = r(74085),
        i = r(92604),
        a = r(70586),
        l = r(99282),
        u = r(51706);
      const c = i.Z.getLogger(
          'esri.renderers.visualVariables.support.visualVariableUtils',
        ),
        p = new s.Z(),
        d = Math.PI,
        f = /^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i;
      function y(e, t, r) {
        const s =
          'visualVariables' in e && e.visualVariables
            ? e.visualVariables.find((e) => 'color' === e.type)
            : e;
        if (!s) return;
        if ('esri.renderers.visualVariables.ColorVariable' !== s.declaredClass)
          return void c.warn(
            'The visualVariable should be an instance of esri.renderers.visualVariables.ColorVariable',
          );
        const o = 'number' == typeof t,
          i = o ? null : t,
          l = i && i.attributes;
        let u = o ? t : null;
        const p = s.field,
          { ipData: d, hasExpression: f } = s.cache;
        let y = s.cache.compiledFunc;
        if (!p && !f) {
          const e = s.stops;
          return e && e[0] && e[0].color;
        }
        if ('number' != typeof u)
          if (f) {
            if (!(0, a.pC)(r) || !(0, a.pC)(r.arcade))
              return void c.error(
                'Use of arcade expressions requires an arcade context',
              );
            const e = {
                viewingMode: r.viewingMode,
                scale: r.scale,
                spatialReference: r.spatialReference,
              },
              t = r.arcade.arcadeUtils,
              n = t.getViewInfo(e),
              o = t.createExecContext(i, n);
            if (!y) {
              const e = t.createSyntaxTree(s.valueExpression);
              (y = t.createFunction(e)), (s.cache.compiledFunc = y);
            }
            u = t.executeFunction(y, o);
          } else l && (u = l[p]);
        const m = s.normalizationField,
          h = l ? parseFloat(l[m]) : void 0;
        if (null != u && (!m || o || (!isNaN(h) && 0 !== h))) {
          isNaN(h) || o || (u /= h);
          const e = C(u, d);
          if (e) {
            const t = e[0],
              o = e[1],
              i =
                t === o
                  ? s.stops[t].color
                  : n.Z.blendColors(
                      s.stops[t].color,
                      s.stops[o].color,
                      e[2],
                      (0, a.pC)(r) ? r.color : void 0,
                    );
            return new n.Z(i);
          }
        }
      }
      function m(e, t, r) {
        const n =
          'visualVariables' in e && e.visualVariables
            ? e.visualVariables.find((e) => 'opacity' === e.type)
            : e;
        if (!n) return;
        if (
          'esri.renderers.visualVariables.OpacityVariable' !== n.declaredClass
        )
          return void c.warn(
            'The visualVariable should be an instance of esri.renderers.visualVariables.OpacityVariable',
          );
        const s = 'number' == typeof t,
          o = s ? null : t,
          i = o && o.attributes;
        let l = s ? t : null;
        const u = n.field,
          { ipData: p, hasExpression: d } = n.cache;
        let f = n.cache.compiledFunc;
        if (!u && !d) {
          const e = n.stops;
          return e && e[0] && e[0].opacity;
        }
        if ('number' != typeof l)
          if (d) {
            if ((0, a.Wi)(r) || (0, a.Wi)(r.arcade))
              return void c.error(
                'Use of arcade expressions requires an arcade context',
              );
            const e = {
                viewingMode: r.viewingMode,
                scale: r.scale,
                spatialReference: r.spatialReference,
              },
              t = r.arcade.arcadeUtils,
              s = t.getViewInfo(e),
              i = t.createExecContext(o, s);
            if (!f) {
              const e = t.createSyntaxTree(n.valueExpression);
              (f = t.createFunction(e)), (n.cache.compiledFunc = f);
            }
            l = t.executeFunction(f, i);
          } else i && (l = i[u]);
        const y = n.normalizationField,
          m = i ? parseFloat(i[y]) : void 0;
        if (null != l && (!y || s || (!isNaN(m) && 0 !== m))) {
          isNaN(m) || s || (l /= m);
          const e = C(l, p);
          if (e) {
            const t = e[0],
              r = e[1];
            if (t === r) return n.stops[t].opacity;
            {
              const s = n.stops[t].opacity;
              return s + (n.stops[r].opacity - s) * e[2];
            }
          }
        }
      }
      function h(e, t, r) {
        const n =
          'visualVariables' in e && e.visualVariables
            ? e.visualVariables.find((e) => 'rotation' === e.type)
            : e;
        if (!n) return;
        if (
          'esri.renderers.visualVariables.RotationVariable' !== n.declaredClass
        )
          return void c.warn(
            'The visualVariable should be an instance of esri.renderers.visualVariables.RotationVariable',
          );
        const s = n.axis || 'heading',
          o = 'heading' === s && 'arithmetic' === n.rotationType ? 90 : 0,
          i = 'heading' === s && 'arithmetic' === n.rotationType ? -1 : 1,
          l = 'number' == typeof t ? null : t,
          u = l && l.attributes,
          p = n.field,
          { hasExpression: d } = n.cache;
        let f = n.cache.compiledFunc,
          y = 0;
        if (!p && !d) return y;
        if (d) {
          if ((0, a.Wi)(r) || (0, a.Wi)(r.arcade))
            return void c.error(
              'Use of arcade expressions requires an arcade context',
            );
          const e = {
              viewingMode: r.viewingMode,
              scale: r.scale,
              spatialReference: r.spatialReference,
            },
            t = r.arcade.arcadeUtils,
            s = t.getViewInfo(e),
            o = t.createExecContext(l, s);
          if (!f) {
            const e = t.createSyntaxTree(n.valueExpression);
            (f = t.createFunction(e)), (n.cache.compiledFunc = f);
          }
          y = t.executeFunction(f, o);
        } else u && (y = u[p] || 0);
        return (y = 'number' != typeof y || isNaN(y) ? null : o + i * y), y;
      }
      function g(e, t, r) {
        const n =
          'visualVariables' in e && e.visualVariables
            ? e.visualVariables.find((e) => 'size' === e.type)
            : e;
        if (!n) return;
        if ('esri.renderers.visualVariables.SizeVariable' !== n.declaredClass)
          return void c.warn(
            'The visualVariable should be an instance of esri.renderers.visualVariables.SizeVariable',
          );
        const s = (function (e, t, r, n, s) {
          switch (t.transformationType) {
            case u.hL.Additive:
              return (function (e, t, r, n) {
                return e + (b(t.minSize, r, n) || t.minDataValue);
              })(e, t, r, n);
            case u.hL.Constant:
              return (function (e, t, r) {
                const n = e.stops;
                let s = n && n.length && n[0].size;
                return null == s && (s = e.minSize), b(s, t, r);
              })(t, r, n);
            case u.hL.ClampedLinear:
              return (function (e, t, r, n) {
                const s =
                    (e - t.minDataValue) / (t.maxDataValue - t.minDataValue),
                  o = b(t.minSize, r, n),
                  i = b(t.maxSize, r, n),
                  l = (0, a.pC)(n) ? n.shape : void 0;
                if (e <= t.minDataValue) return o;
                if (e >= t.maxDataValue) return i;
                if ('area' === t.scaleBy && l) {
                  const e = 'circle' === l,
                    t = e ? d * (o / 2) ** 2 : o * o,
                    r = t + s * ((e ? d * (i / 2) ** 2 : i * i) - t);
                  return e ? 2 * Math.sqrt(r / d) : Math.sqrt(r);
                }
                return o + s * (i - o);
              })(e, t, r, n);
            case u.hL.Proportional:
              return (function (e, t, r, n) {
                const s = (0, a.pC)(n) ? n.shape : void 0,
                  o = e / t.minDataValue,
                  i = b(t.minSize, r, n),
                  l = b(t.maxSize, r, n);
                let u = null;
                return (
                  (u =
                    'circle' === s
                      ? 2 * Math.sqrt(o * (i / 2) ** 2)
                      : 'square' === s || 'diamond' === s || 'image' === s
                      ? Math.sqrt(o * i ** 2)
                      : o * i),
                  w(u, i, l)
                );
              })(e, t, r, n);
            case u.hL.Stops:
              return (function (e, t, r, n, s) {
                const [o, i, a] = C(e, s);
                if (o === i) return b(t.stops[o].size, r, n);
                {
                  const e = b(t.stops[o].size, r, n);
                  return e + (b(t.stops[i].size, r, n) - e) * a;
                }
              })(e, t, r, n, s);
            case u.hL.RealWorldSize:
              return (function (e, t, r, n) {
                const s =
                    ((0, a.pC)(n) && n.resolution ? n.resolution : 1) *
                    l.a[t.valueUnit],
                  o = b(t.minSize, r, n),
                  i = b(t.maxSize, r, n),
                  { valueRepresentation: u } = t;
                let c = null;
                return (
                  (c =
                    'area' === u
                      ? (2 * Math.sqrt(e / d)) / s
                      : 'radius' === u || 'distance' === u
                      ? (2 * e) / s
                      : e / s),
                  w(c, o, i)
                );
              })(e, t, r, n);
            case u.hL.Identity:
              return e;
            case u.hL.Unknown:
              return null;
          }
        })(
          (function (e, t, r) {
            const n = 'number' == typeof t,
              s = n ? null : t,
              o = s && s.attributes;
            let i = n ? t : null;
            const { isScaleDriven: l } = e.cache;
            let p = e.cache.compiledFunc;
            if (l) {
              const t = (0, a.pC)(r) ? r.scale : void 0,
                n = (0, a.pC)(r) ? r.view : void 0;
              i =
                null == t || '3d' === n
                  ? (function (e) {
                      let t = null,
                        r = null;
                      const n = e.stops;
                      return (
                        n
                          ? ((t = n[0].value), (r = n[n.length - 1].value))
                          : ((t = e.minDataValue || 0),
                            (r = e.maxDataValue || 0)),
                        (t + r) / 2
                      );
                    })(e)
                  : t;
            } else if (!n)
              switch (e.inputValueType) {
                case u.RY.Expression: {
                  if ((0, a.Wi)(r) || (0, a.Wi)(r.arcade))
                    return void c.error(
                      'Use of arcade expressions requires an arcade context',
                    );
                  const t = {
                      viewingMode: r.viewingMode,
                      scale: r.scale,
                      spatialReference: r.spatialReference,
                    },
                    n = r.arcade.arcadeUtils,
                    o = n.getViewInfo(t),
                    l = n.createExecContext(s, o);
                  if (!p) {
                    const t = n.createSyntaxTree(e.valueExpression);
                    (p = n.createFunction(t)), (e.cache.compiledFunc = p);
                  }
                  i = n.executeFunction(p, l);
                  break;
                }
                case u.RY.Field:
                  o && (i = o[e.field]);
                  break;
                case u.RY.Unknown:
                  i = null;
              }
            if (!(0, u.qh)(i)) return null;
            if (n || !e.normalizationField) return i;
            const d = o ? parseFloat(o[e.normalizationField]) : null;
            return (0, u.qh)(d) && 0 !== d ? i / d : null;
          })(n, t, r),
          n,
          t,
          r,
          n.cache.ipData,
        );
        return null == s || isNaN(s) ? 0 : s;
      }
      function b(e, t, r) {
        return null == e
          ? null
          : (0, u.iY)(e)
          ? g(e, t, r)
          : (0, u.qh)(e)
          ? e
          : null;
      }
      function w(e, t, r) {
        return (0, u.qh)(r) && e > r ? r : (0, u.qh)(t) && e < t ? t : e;
      }
      function v(e, t, r) {
        const { isScaleDriven: n } = e.cache;
        if (!((n && '3d' === r) || t)) return null;
        const s = { scale: t, view: r };
        let o = b(e.minSize, p, s),
          i = b(e.maxSize, p, s);
        if (null != o || null != i) {
          if (o > i) {
            const e = i;
            (i = o), (o = e);
          }
          return { minSize: o, maxSize: i };
        }
      }
      function C(e, t) {
        if (!t) return;
        let r = 0,
          n = t.length - 1;
        return (
          t.some((t, s) => (e < t ? ((n = s), !0) : ((r = s), !1))),
          [r, n, (e - t[r]) / (t[n] - t[r])]
        );
      }
      function S(e, t, r) {
        const n = ['proportional', 'proportional', 'proportional'];
        for (const s of e) {
          const e = s.useSymbolValue ? 'symbol-value' : g(s, t, r);
          switch (s.axis) {
            case 'width':
              n[0] = e;
              break;
            case 'depth':
              n[1] = e;
              break;
            case 'height':
              n[2] = e;
              break;
            case 'width-and-depth':
              (n[0] = e), (n[1] = e);
              break;
            case 'all':
            case void 0:
            case null:
              (n[0] = e), (n[1] = e), (n[2] = e);
              break;
            default:
              (0, o.Bg)(s.axis);
          }
        }
        return n;
      }
    },
    74889: (e, t, r) => {
      r.r(t), r.d(t, { default: () => v });
      var n,
        s = r(43697),
        o = r(66577),
        i = r(38171),
        a = r(35454),
        l = r(96674),
        u = r(22974),
        c = r(70586),
        p = r(5600),
        d = (r(75215), r(71715)),
        f = r(52011),
        y = r(30556),
        m = r(82971),
        h = r(33955),
        g = r(1231);
      const b = new a.X({
        esriGeometryPoint: 'point',
        esriGeometryMultipoint: 'multipoint',
        esriGeometryPolyline: 'polyline',
        esriGeometryPolygon: 'polygon',
        esriGeometryEnvelope: 'extent',
        mesh: 'mesh',
        '': null,
      });
      let w = (n = class extends l.wq {
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
            n = [];
          for (let t = 0; t < e.length; t++) {
            const s = e[t],
              o = i.Z.fromJSON(s),
              a = s.geometry && s.geometry.spatialReference;
            (0, c.pC)(o.geometry) && !a && (o.geometry.spatialReference = r);
            const l = s.aggregateGeometries,
              u = o.aggregateGeometries;
            if (l && (0, c.pC)(u))
              for (const e in u) {
                const t = u[e],
                  n = l[e],
                  s = null == n ? void 0 : n.spatialReference;
                (0, c.pC)(t) && !s && (t.spatialReference = r);
              }
            n.push(o);
          }
          return n;
        }
        writeGeometryType(e, t, r, n) {
          if (e) return void b.write(e, t, r, n);
          const { features: s } = this;
          if (s)
            for (const e of s)
              if (e && (0, c.pC)(e.geometry))
                return void b.write(e.geometry.type, t, r, n);
        }
        readQueryGeometry(e, t) {
          if (!e) return null;
          const r = !!e.spatialReference,
            n = (0, h.im)(e);
          return (
            !r &&
              t.spatialReference &&
              (n.spatialReference = m.Z.fromJSON(t.spatialReference)),
            n
          );
        }
        writeSpatialReference(e, t) {
          if (e) return void (t.spatialReference = e.toJSON());
          const { features: r } = this;
          if (r)
            for (const e of r)
              if (e && (0, c.pC)(e.geometry) && e.geometry.spatialReference)
                return void (t.spatialReference =
                  e.geometry.spatialReference.toJSON());
        }
        clone() {
          return new n(this.cloneProperties());
        }
        cloneProperties() {
          return (0, u.d9)({
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
              const n = t.features[r];
              if (n.geometry) {
                const t = e && e[r];
                n.geometry = (t && t.toJSON()) || n.geometry;
              }
            }
          return t;
        }
        quantize(e) {
          const {
              scale: [t, r],
              translate: [n, s],
            } = e,
            o = this.features,
            i = this._getQuantizationFunction(
              this.geometryType,
              (e) => Math.round((e - n) / t),
              (e) => Math.round((s - e) / r),
            );
          for (let e = 0, t = o.length; e < t; e++)
            i((0, c.Wg)(o[e].geometry)) || (o.splice(e, 1), e--, t--);
          return (this.transform = e), this;
        }
        unquantize() {
          const { geometryType: e, features: t, transform: r } = this;
          if (!r) return this;
          const {
              translate: [n, s],
              scale: [o, i],
            } = r,
            a = this._getHydrationFunction(
              e,
              (e) => e * o + n,
              (e) => s - e * i,
            );
          for (const { geometry: e } of t) (0, c.pC)(e) && a(e);
          return (this.transform = null), this;
        }
        _quantizePoints(e, t, r) {
          let n, s;
          const o = [];
          for (let i = 0, a = e.length; i < a; i++) {
            const a = e[i];
            if (i > 0) {
              const e = t(a[0]),
                i = r(a[1]);
              (e === n && i === s) ||
                (o.push([e - n, i - s]), (n = e), (s = i));
            } else (n = t(a[0])), (s = r(a[1])), o.push([n, s]);
          }
          return o.length > 0 ? o : null;
        }
        _getQuantizationFunction(e, t, r) {
          return 'point' === e
            ? (e) => ((e.x = t(e.x)), (e.y = r(e.y)), e)
            : 'polyline' === e || 'polygon' === e
            ? (e) => {
                const n = (0, h.oU)(e) ? e.rings : e.paths,
                  s = [];
                for (let e = 0, o = n.length; e < o; e++) {
                  const o = n[e],
                    i = this._quantizePoints(o, t, r);
                  i && s.push(i);
                }
                return s.length > 0
                  ? ((0, h.oU)(e) ? (e.rings = s) : (e.paths = s), e)
                  : null;
              }
            : 'multipoint' === e
            ? (e) => {
                const n = this._quantizePoints(e.points, t, r);
                return n.length > 0 ? ((e.points = n), e) : null;
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
                const n = (0, h.oU)(e) ? e.rings : e.paths;
                let s, o;
                for (let e = 0, i = n.length; e < i; e++) {
                  const i = n[e];
                  for (let e = 0, n = i.length; e < n; e++) {
                    const n = i[e];
                    e > 0
                      ? ((s += n[0]), (o += n[1]))
                      : ((s = n[0]), (o = n[1])),
                      (n[0] = t(s)),
                      (n[1] = r(o));
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
                const n = e.points;
                let s, o;
                for (let e = 0, i = n.length; e < i; e++) {
                  const i = n[e];
                  e > 0 ? ((s += i[0]), (o += i[1])) : ((s = i[0]), (o = i[1])),
                    (i[0] = t(s)),
                    (i[1] = r(o));
                }
              }
            : void 0;
        }
      });
      (0, s._)(
        [(0, p.Cb)({ type: String, json: { write: !0 } })],
        w.prototype,
        'displayFieldName',
        void 0,
      ),
        (0, s._)(
          [
            (0, p.Cb)({
              type: Boolean,
              json: { write: { overridePolicy: (e) => ({ enabled: e }) } },
            }),
          ],
          w.prototype,
          'exceededTransferLimit',
          void 0,
        ),
        (0, s._)(
          [(0, p.Cb)({ type: [i.Z], json: { write: !0 } })],
          w.prototype,
          'features',
          void 0,
        ),
        (0, s._)([(0, d.r)('features')], w.prototype, 'readFeatures', null),
        (0, s._)(
          [(0, p.Cb)({ type: [g.Z], json: { write: !0 } })],
          w.prototype,
          'fields',
          void 0,
        ),
        (0, s._)(
          [
            (0, p.Cb)({
              type: [
                'point',
                'multipoint',
                'polyline',
                'polygon',
                'extent',
                'mesh',
              ],
              json: { read: { reader: b.read } },
            }),
          ],
          w.prototype,
          'geometryType',
          void 0,
        ),
        (0, s._)(
          [(0, y.c)('geometryType')],
          w.prototype,
          'writeGeometryType',
          null,
        ),
        (0, s._)(
          [
            (0, p.Cb)({
              type: Boolean,
              json: { write: { overridePolicy: (e) => ({ enabled: e }) } },
            }),
          ],
          w.prototype,
          'hasM',
          void 0,
        ),
        (0, s._)(
          [
            (0, p.Cb)({
              type: Boolean,
              json: { write: { overridePolicy: (e) => ({ enabled: e }) } },
            }),
          ],
          w.prototype,
          'hasZ',
          void 0,
        ),
        (0, s._)(
          [(0, p.Cb)({ types: o.qM, json: { write: !0 } })],
          w.prototype,
          'queryGeometry',
          void 0,
        ),
        (0, s._)(
          [(0, d.r)('queryGeometry')],
          w.prototype,
          'readQueryGeometry',
          null,
        ),
        (0, s._)(
          [(0, p.Cb)({ type: m.Z, json: { write: !0 } })],
          w.prototype,
          'spatialReference',
          void 0,
        ),
        (0, s._)(
          [(0, y.c)('spatialReference')],
          w.prototype,
          'writeSpatialReference',
          null,
        ),
        (0, s._)(
          [(0, p.Cb)({ json: { write: !0 } })],
          w.prototype,
          'transform',
          void 0,
        ),
        (w = n = (0, s._)([(0, f.j)('esri.rest.support.FeatureSet')], w)),
        (w.prototype.toJSON.isDefaultToJSON = !0);
      const v = w;
    },
  },
]);
