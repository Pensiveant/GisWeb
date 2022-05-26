'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [9754, 4889],
  {
    38171: (e, t, r) => {
      r.d(t, { Z: () => m });
      var s = r(43697),
        o = r(66577),
        n = r(51773),
        i = r(78223),
        a = r(2368),
        l = r(96674),
        u = r(70586),
        c = r(99001),
        p = r(5600),
        d = (r(67676), r(80442), r(75215), r(52011)),
        h = r(33955);
      function f(e) {
        if (!(0, u.pC)(e)) return null;
        const t = {};
        for (const r in e) {
          const s = e[r];
          s && (t[r] = s.toJSON());
        }
        return 0 !== Object.keys(t).length ? t : null;
      }
      let y = class extends (0, a.J)(l.wq) {
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
        normalizeCtorArgs(e, t, r, s) {
          return e && !e.declaredClass
            ? e
            : { geometry: e, symbol: t, attributes: r, popupTemplate: s };
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
            aggregateGeometries: f(this.aggregateGeometries),
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
        _notifyLayer(e, t, r, s) {
          if (!this.layer || !('graphicChanged' in this.layer)) return;
          const o = { graphic: this, property: e, oldValue: t, newValue: r };
          'attributes' === e && (o.attributeName = s),
            this.layer.graphicChanged(o);
        }
      };
      (0, s._)(
        [
          (0, p.Cb)({
            value: null,
            json: {
              read: function (e) {
                if (!e) return null;
                const t = {};
                for (const r in e) {
                  const s = (0, h.im)(e[r]);
                  s && (t[r] = s);
                }
                return 0 !== Object.keys(t).length ? t : null;
              },
            },
          }),
        ],
        y.prototype,
        'aggregateGeometries',
        null,
      ),
        (0, s._)([(0, p.Cb)({ value: null })], y.prototype, 'attributes', null),
        (0, s._)(
          [(0, p.Cb)({ value: null, types: o.qM, json: { read: h.im } })],
          y.prototype,
          'geometry',
          null,
        ),
        (0, s._)(
          [(0, p.Cb)({ type: Boolean })],
          y.prototype,
          'isAggregate',
          void 0,
        ),
        (0, s._)(
          [(0, p.Cb)({ clonable: 'reference' })],
          y.prototype,
          'layer',
          void 0,
        ),
        (0, s._)(
          [(0, p.Cb)({ type: n.Z })],
          y.prototype,
          'popupTemplate',
          void 0,
        ),
        (0, s._)(
          [(0, p.Cb)({ clonable: 'reference' })],
          y.prototype,
          'sourceLayer',
          void 0,
        ),
        (0, s._)(
          [(0, p.Cb)({ value: null, types: i.LB })],
          y.prototype,
          'symbol',
          null,
        ),
        (0, s._)(
          [(0, p.Cb)({ type: Boolean, value: !0 })],
          y.prototype,
          'visible',
          null,
        ),
        (y = (0, s._)([(0, d.j)('esri.Graphic')], y)),
        ((y || (y = {})).generateUID = c.D);
      const m = y;
    },
    74085: (e, t, r) => {
      function s(e) {}
      r.d(t, { Bg: () => s }), r(80442);
    },
    78346: (e, t, r) => {
      r.d(t, { bA: () => D });
      var s = r(20102),
        o = r(80442),
        n = r(95330),
        i = r(80903),
        a = r(25045),
        l = r(40330),
        u = r(92604),
        c = r(94362),
        p = r(99880),
        d = r(68773),
        h = (r(2587), r(17452));
      const f = {};
      function y(e) {
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
          e.baseUrl || (r.baseUrl = f.baseUrl),
          null == (t = f.packages) ||
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
          const t = (0, c.QM)(e);
          if (t && t.type === c.Cs.OPEN) {
            const { modulePath: e, jobId: r } = t;
            let s = await a.default.loadWorker(e);
            s || (s = await import(e));
            const o = a.default.connect(s);
            this._workerPostMessage({ type: c.Cs.OPENED, jobId: r, data: o });
          }
        }
      }
      var v = r(70171),
        w = r(17202);
      const _ = u.Z.getLogger('esri.core.workers'),
        { HANDSHAKE: C } = c.Cs;
      let E, S;
      const k =
        'Failed to create Worker. Fallback to execute module in main thread';
      async function x(e) {
        return new Promise((t) => {
          function r(o) {
            const n = (0, c.QM)(o);
            n &&
              n.type === C &&
              (e.removeEventListener('message', r),
              e.removeEventListener('error', s),
              t(e));
          }
          function s(t) {
            t.preventDefault(),
              e.removeEventListener('message', r),
              e.removeEventListener('error', s),
              _.warn(
                'Failed to create Worker. Fallback to execute module in main thread',
                t,
              ),
              (e = new b()).addEventListener('message', r),
              e.addEventListener('error', s);
          }
          e.addEventListener('message', r), e.addEventListener('error', s);
        });
      }
      let F = 0;
      const O = u.Z.getLogger('esri.core.workers'),
        { ABORT: R, INVOKE: N, OPEN: I, OPENED: j, RESPONSE: P } = c.Cs;
      class T {
        constructor(e, t) {
          (this._outJobs = new Map()),
            (this._inJobs = new Map()),
            (this.worker = e),
            (this.id = t),
            e.addEventListener('message', this._onMessage.bind(this)),
            e.addEventListener('error', (e) => {
              e.preventDefault(), O.error(e);
            });
        }
        static async create(e) {
          const t = await (async function () {
            if (!(0, o.Z)('esri-workers') || ((0, o.Z)('mozilla'), 0))
              return x(new b());
            if (!E && !S)
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
                      (e.assetsPath = (0, h.hF)(e.assetsPath)),
                        (e.request.interceptors = []),
                        (e.log.interceptors = []),
                        (e.locale = (0, v.Kd)()),
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
                          (e.workers.loaderUrl = (0, h.hF)(
                            e.workers.loaderUrl,
                          )),
                        e.workers.workerPath
                          ? (e.workers.workerPath = (0, h.hF)(
                              e.workers.workerPath,
                            ))
                          : (e.workers.workerPath = (0, h.hF)(
                              (0, p.V)('esri/core/workers/RemoteClient.js'),
                            )),
                        (e.workers.useDynamicImport = !1);
                      const t = d.Z.workers.loaderConfig,
                        r = y({
                          baseUrl: null == t ? void 0 : t.baseUrl,
                          locale: (0, v.Kd)(),
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
                        s = { version: l.i8, buildDate: w.r, revision: w.$ };
                      return JSON.stringify({
                        esriConfig: e,
                        loaderConfig: r,
                        kernelInfo: s,
                      });
                    })()}'`,
                  );
                E = URL.createObjectURL(
                  new Blob([e], { type: 'text/javascript' }),
                );
              } catch (e) {
                S = e || {};
              }
            let e;
            if (E)
              try {
                e = new Worker(E, { name: 'esri-worker-' + F++ });
              } catch (t) {
                _.warn(k, S), (e = new b());
              }
            else _.warn(k, S), (e = new b());
            return x(e);
          })();
          return new T(t, e);
        }
        terminate() {
          this.worker.terminate();
        }
        async open(e, t = {}) {
          const { signal: r } = t,
            s = (0, c.jt)();
          return new Promise((t, o) => {
            const i = {
              resolve: t,
              reject: o,
              abortHandle: (0, n.$F)(r, () => {
                this._outJobs.delete(s), this._post({ type: R, jobId: s });
              }),
            };
            this._outJobs.set(s, i),
              this._post({ type: I, jobId: s, modulePath: e });
          });
        }
        _onMessage(e) {
          const t = (0, c.QM)(e);
          if (t)
            switch (t.type) {
              case j:
                this._onOpenedMessage(t);
                break;
              case P:
                this._onResponseMessage(t);
                break;
              case R:
                this._onAbortMessage(t);
                break;
              case N:
                this._onInvokeMessage(t);
            }
        }
        _onAbortMessage(e) {
          const t = this._inJobs,
            r = e.jobId,
            s = t.get(r);
          s && (s.controller && s.controller.abort(), t.delete(r));
        }
        _onInvokeMessage(e) {
          const { methodName: t, jobId: r, data: s, abortable: o } = e,
            i = o ? new AbortController() : null,
            a = this._inJobs,
            u = l.Nv[t];
          let p;
          try {
            if ('function' != typeof u)
              throw new TypeError(`${t} is not a function`);
            p = u.call(null, s, { signal: i ? i.signal : null });
          } catch (e) {
            return void this._post({ type: P, jobId: r, error: (0, c.AB)(e) });
          }
          (0, n.y8)(p)
            ? (a.set(r, { controller: i, promise: p }),
              p.then(
                (e) => {
                  a.has(r) &&
                    (a.delete(r), this._post({ type: P, jobId: r }, e));
                },
                (e) => {
                  a.has(r) &&
                    (a.delete(r),
                    e || (e = { message: 'Error encountered at method' + t }),
                    (0, n.D_)(e) ||
                      this._post({
                        type: P,
                        jobId: r,
                        error: (0, c.AB)(
                          e || { message: `Error encountered at method ${t}` },
                        ),
                      }));
                },
              ))
            : this._post({ type: P, jobId: r }, p);
        }
        _onOpenedMessage(e) {
          var t;
          const { jobId: r, data: s } = e,
            o = this._outJobs.get(r);
          o &&
            (this._outJobs.delete(r),
            null == (t = o.abortHandle) || t.remove(),
            o.resolve(s));
        }
        _onResponseMessage(e) {
          var t;
          const { jobId: r, error: o, data: n } = e,
            i = this._outJobs.get(r);
          i &&
            (this._outJobs.delete(r),
            null == (t = i.abortHandle) || t.remove(),
            o ? i.reject(s.Z.fromJSON(JSON.parse(o))) : i.resolve(n));
        }
        _post(e, t, r) {
          return (0, c.oi)(this.worker, e, t, r);
        }
      }
      let Z = (0, o.Z)('esri-workers-debug')
        ? 1
        : (0, o.Z)('host-browser')
        ? navigator.hardwareConcurrency - 1
        : 0;
      Z ||
        (Z =
          ((0, o.Z)('safari') && (0, o.Z)('mac')) || (0, o.Z)('trident')
            ? 7
            : 2);
      let L = 0;
      const M = [];
      async function J(e, t) {
        const r = new i.Z();
        return await r.open(e, t), r;
      }
      async function D(e, t = {}) {
        if ('string' != typeof e)
          throw new s.Z('workers:undefined-module', 'modulePath is missing');
        let r = t.strategy || 'distributed';
        if (
          ((0, o.Z)('host-webworker') &&
            !(0, o.Z)('esri-workers') &&
            (r = 'local'),
          'local' === r)
        ) {
          let r = await a.default.loadWorker(e);
          r || (r = await import(e)), (0, n.k_)(t.signal);
          const s = t.client || r;
          return J([a.default.connect(r)], { ...t, client: s });
        }
        if (
          (await (async function () {
            if (V) return V;
            q = new AbortController();
            const e = [];
            for (let t = 0; t < Z; t++) {
              const r = T.create(t).then((e) => ((M[t] = e), e));
              e.push(r);
            }
            return (V = Promise.all(e)), V;
          })(),
          (0, n.k_)(t.signal),
          'dedicated' === r)
        ) {
          const r = L++ % Z;
          return J([await M[r].open(e, t)], t);
        }
        if (t.maxNumWorkers && t.maxNumWorkers > 0) {
          const r = Math.min(t.maxNumWorkers, Z);
          if (r < Z) {
            const s = new Array(r);
            for (let o = 0; o < r; ++o) {
              const r = L++ % Z;
              s[o] = M[r].open(e, t);
            }
            return J(s, t);
          }
        }
        return J(
          M.map((r) => r.open(e, t)),
          t,
        );
      }
      let q,
        V = null;
    },
    2587: (e, t, r) => {
      r(90344), r(18848), r(940), r(70171);
      var s = r(94443),
        o = r(3172),
        n = r(20102),
        i = r(70586);
      async function a(e) {
        if ((0, i.pC)(l.fetchBundleAsset)) return l.fetchBundleAsset(e);
        const t = await (0, o.default)(e, { responseType: 'text' });
        return JSON.parse(t.data);
      }
      const l = {};
      var u,
        c = r(99880);
      (0, s.tz)(
        ((u = { pattern: 'esri/', location: c.V }),
        new (class {
          constructor({
            base: e = '',
            pattern: t,
            location: r = new URL(window.location.href),
          }) {
            let s;
            (s =
              'string' == typeof r
                ? (e) => new URL(e, new URL(r, window.location.href)).href
                : r instanceof URL
                ? (e) => new URL(e, r).href
                : r),
              (this.pattern = 'string' == typeof t ? new RegExp(`^${t}`) : t),
              (this.getAssetUrl = s),
              (e = e ? (e.endsWith('/') ? e : e + '/') : ''),
              (this.matcher = new RegExp(`^${e}(?:(.*)/)?(.*)$`));
          }
          fetchMessageBundle(e, t) {
            return (async function (e, t, r, o) {
              const i = t.exec(r);
              if (!i)
                throw new n.Z(
                  'esri-intl:invalid-bundle',
                  `Bundle id "${r}" is not compatible with the pattern "${t}"`,
                );
              const l = i[1] ? `${i[1]}/` : '',
                u = i[2],
                c = (0, s.Su)(o),
                p = `${l}${u}.json`,
                d = c ? `${l}${u}_${c}.json` : p;
              let h;
              try {
                h = await a(e(d));
              } catch (t) {
                if (d === p)
                  throw new n.Z(
                    'intl:unknown-bundle',
                    `Bundle "${r}" cannot be loaded`,
                    { error: t },
                  );
                try {
                  h = await a(e(p));
                } catch (e) {
                  throw new n.Z(
                    'intl:unknown-bundle',
                    `Bundle "${r}" cannot be loaded`,
                    { error: e },
                  );
                }
              }
              return h;
            })(this.getAssetUrl, this.matcher, e, t);
          }
        })(u)),
      );
    },
    94443: (e, t, r) => {
      r.d(t, { ME: () => h, Su: () => f, tz: () => d });
      var s = r(20102),
        o = r(95330),
        n = r(70171);
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
        for (const t of c.keys()) y(e.pattern, t) && c.delete(t);
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
      async function h(e) {
        const t = (0, n.Kd)();
        c.has(e) ||
          c.set(
            e,
            (async function (e, t) {
              const r = [];
              for (const s of u)
                if (y(s.pattern, e))
                  try {
                    return await s.fetchMessageBundle(e, t);
                  } catch (e) {
                    r.push(e);
                  }
              if (r.length)
                throw new s.Z(
                  'intl:message-bundle-error',
                  `Errors occurred while loading "${e}"`,
                  { errors: r },
                );
              throw new s.Z(
                'intl:no-message-bundle-loader',
                `No loader found for message bundle "${e}"`,
              );
            })(e, t),
          );
        const r = c.get(e);
        return await m.add(r), r;
      }
      function f(e) {
        if (!i.test(e)) return null;
        const [, t, r] = i.exec(e),
          s = t + (r ? '-' + r.toUpperCase() : '');
        return l(s) ? s : l(t) ? t : null;
      }
      function y(e, t) {
        return 'string' == typeof e ? t.startsWith(e) : e.test(t);
      }
      (0, n.Ze)(() => {
        c.clear();
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
    940: (e, t, r) => {
      r.d(t, { n: () => u });
      var s = r(92604),
        o = r(78286),
        n = r(19153),
        i = r(90344),
        a = r(18848);
      const l = s.Z.getLogger('esri.intl');
      function u(e, t, r = {}) {
        const { format: s = {} } = r;
        return (0, n.gx)(e, (e) =>
          (function (e, t, r) {
            let s, n;
            const i = e.indexOf(':');
            if (
              (-1 === i
                ? (s = e.trim())
                : ((s = e.slice(0, i).trim()), (n = e.slice(i + 1).trim())),
              !s)
            )
              return '';
            const a = (0, o.hS)(s, t);
            if (null == a) return '';
            const l = r[n] || r[s];
            return l ? c(a, l) : n ? p(a, n) : d(a);
          })(e, t, s),
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
    23477: (e, t, r) => {
      r.r(t), r.d(t, { default: () => W });
      var s = r(43697),
        o = (r(66577), r(51773)),
        n =
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
        l = r(17452),
        u = r(5600),
        c = (r(67676), r(80442)),
        p = (r(75215), r(52011)),
        d = r(86973),
        h = r(29600),
        f = r(20102),
        y = r(83379),
        m = r(92604),
        g = r(95330),
        b = r(78346),
        v = r(25278),
        w = r(74889),
        _ = r(6570),
        C = r(38913);
      const E = m.Z.getLogger('esri.layers.graphics.sources.GeoJSONSource');
      let S = class extends y.Z {
        constructor() {
          super(...arguments),
            (this.type = 'geojson'),
            (this.refresh = (0, g.Ds)(async (e) => {
              await this.load();
              const { extent: t, timeExtent: r } =
                await this._connection.invoke('refresh', e);
              return (
                (this.sourceJSON.extent = t),
                r && (this.sourceJSON.timeInfo.timeExtent = [r.start, r.end]),
                {
                  dataChanged: !0,
                  updates: {
                    extent: this.sourceJSON.extent,
                    timeInfo: this.sourceJSON.timeInfo,
                  },
                }
              );
            }));
        }
        load(e) {
          const t = (0, i.pC)(e) ? e.signal : null;
          return (
            this.addResolvingPromise(this._startWorker(t)),
            Promise.resolve(this)
          );
        }
        destroy() {
          var e;
          null == (e = this._connection) || e.close(),
            (this._connection = null);
        }
        applyEdits(e) {
          return this.load().then(() => this._applyEdits(e));
        }
        openPorts() {
          return this.load().then(() => this._connection.openPorts());
        }
        queryFeatures(e, t = {}) {
          return this.load(t)
            .then(() =>
              this._connection.invoke(
                'queryFeatures',
                e ? e.toJSON() : null,
                t,
              ),
            )
            .then((e) => w.default.fromJSON(e));
        }
        queryFeaturesJSON(e, t = {}) {
          return this.load(t).then(() =>
            this._connection.invoke('queryFeatures', e ? e.toJSON() : null, t),
          );
        }
        queryFeatureCount(e, t = {}) {
          return this.load(t).then(() =>
            this._connection.invoke(
              'queryFeatureCount',
              e ? e.toJSON() : null,
              t,
            ),
          );
        }
        queryObjectIds(e, t = {}) {
          return this.load(t).then(() =>
            this._connection.invoke('queryObjectIds', e ? e.toJSON() : null, t),
          );
        }
        queryExtent(e, t = {}) {
          return this.load(t)
            .then(() =>
              this._connection.invoke('queryExtent', e ? e.toJSON() : null, t),
            )
            .then((e) => ({ count: e.count, extent: _.Z.fromJSON(e.extent) }));
        }
        querySnapping(e, t = {}) {
          return this.load(t).then(() =>
            this._connection.invoke('querySnapping', e, t),
          );
        }
        _applyEdits(e) {
          if (!this._connection)
            throw new f.Z(
              'geojson-layer-source:edit-failure',
              'Memory source not loaded',
            );
          const t = this.layer.objectIdField,
            r = [],
            s = [],
            o = [];
          if (e.addFeatures)
            for (const t of e.addFeatures) r.push(this._serializeFeature(t));
          if (e.deleteFeatures)
            for (const r of e.deleteFeatures)
              'objectId' in r && null != r.objectId
                ? s.push(r.objectId)
                : 'attributes' in r &&
                  null != r.attributes[t] &&
                  s.push(r.attributes[t]);
          if (e.updateFeatures)
            for (const t of e.updateFeatures) o.push(this._serializeFeature(t));
          return this._connection
            .invoke('applyEdits', { adds: r, updates: o, deletes: s })
            .then(
              ({ extent: e, timeExtent: t, featureEditResults: r }) => (
                (this.sourceJSON.extent = e),
                t && (this.sourceJSON.timeInfo.timeExtent = [t.start, t.end]),
                this._createEditsResult(r)
              ),
            );
        }
        _createEditsResult(e) {
          return {
            addFeatureResults: e.addResults
              ? e.addResults.map(this._createFeatureEditResult, this)
              : [],
            updateFeatureResults: e.updateResults
              ? e.updateResults.map(this._createFeatureEditResult, this)
              : [],
            deleteFeatureResults: e.deleteResults
              ? e.deleteResults.map(this._createFeatureEditResult, this)
              : [],
            addAttachmentResults: [],
            updateAttachmentResults: [],
            deleteAttachmentResults: [],
          };
        }
        _createFeatureEditResult(e) {
          const t =
            !0 === e.success
              ? null
              : e.error || { code: void 0, description: void 0 };
          return {
            objectId: e.objectId,
            globalId: e.globalId,
            error: t
              ? new f.Z('geojson-layer-source:edit-failure', t.description, {
                  code: t.code,
                })
              : null,
          };
        }
        _serializeFeature(e) {
          const { attributes: t } = e,
            r = this._geometryForSerialization(e);
          return r
            ? { geometry: r.toJSON(), attributes: t }
            : { attributes: t };
        }
        _geometryForSerialization(e) {
          const { geometry: t } = e;
          return (0, i.Wi)(t)
            ? null
            : 'mesh' === t.type || 'extent' === t.type
            ? C.Z.fromExtent(t.extent)
            : t;
        }
        async _startWorker(e) {
          this._connection = await (0, b.bA)('GeoJSONSourceWorker', {
            strategy: (0, c.Z)('feature-layers-workers')
              ? 'dedicated'
              : 'local',
            signal: e,
          });
          const {
              fields: t,
              spatialReference: r,
              hasZ: s,
              geometryType: o,
              objectIdField: n,
              url: i,
              timeInfo: a,
              customParameters: l,
            } = this.layer,
            u = 'defaults' === this.layer.originOf('spatialReference'),
            p = {
              url: i,
              customParameters: l,
              fields: t && t.map((e) => e.toJSON()),
              geometryType: d.Mk.toJSON(o),
              hasZ: s,
              objectIdField: n,
              timeInfo: a ? a.toJSON() : null,
              spatialReference: u ? null : r && r.toJSON(),
            },
            h = await this._connection.invoke('load', p, { signal: e });
          for (const e of h.warnings)
            E.warn(e.message, { layer: this.layer, warning: e });
          h.featureErrors.length &&
            E.warn(
              `Encountered ${h.featureErrors.length} validation errors while loading features`,
              h.featureErrors,
            ),
            (this.sourceJSON = h.layerDefinition),
            (this.capabilities = (0, v.MS)(this.sourceJSON.hasZ, !0));
        }
      };
      (0, s._)([(0, u.Cb)()], S.prototype, 'capabilities', void 0),
        (0, s._)([(0, u.Cb)()], S.prototype, 'type', void 0),
        (0, s._)(
          [(0, u.Cb)({ constructOnly: !0 })],
          S.prototype,
          'layer',
          void 0,
        ),
        (0, s._)([(0, u.Cb)()], S.prototype, 'sourceJSON', void 0),
        (S = (0, s._)(
          [(0, p.j)('esri.layers.graphics.sources.GeoJSONSource')],
          S,
        ));
      const k = S;
      var x = r(71612),
        F = r(17017),
        O = r(69637),
        R = r(38009),
        N = r(68825),
        I = r(34760),
        j = r(72965),
        P = r(28294),
        T = r(21506),
        Z = r(55785),
        L = r(70082),
        M = r(16451),
        J = r(1231),
        D = r(53518),
        q = r(35671),
        V = r(2319),
        A = r(30707),
        z = r(57444),
        U = r(32163),
        G = r(82971);
      const $ = (0, D.v)();
      let B = class extends (0, N.c)(
        (0, F.N)(
          (0, O.b)(
            (0, x.h)((0, P.n)((0, j.M)((0, I.Q)((0, R.q)((0, a.R)(h.Z)))))),
          ),
        ),
      ) {
        constructor(e) {
          super(e),
            (this.copyright = null),
            (this.definitionExpression = null),
            (this.displayField = null),
            (this.editingEnabled = !1),
            (this.elevationInfo = null),
            (this.featureReduction = null),
            (this.fields = null),
            (this.fieldsIndex = null),
            (this.fullExtent = null),
            (this.geometryType = null),
            (this.hasZ = void 0),
            (this.labelsVisible = !0),
            (this.labelingInfo = null),
            (this.legendEnabled = !0),
            (this.objectIdField = null),
            (this.operationalLayerType = 'GeoJSON'),
            (this.popupEnabled = !0),
            (this.popupTemplate = null),
            (this.screenSizePerspectiveEnabled = !0),
            (this.source = new k({ layer: this })),
            (this.spatialReference = G.Z.WGS84),
            (this.templates = null),
            (this.title = 'GeoJSON'),
            (this.type = 'geojson'),
            (this.typeIdField = null),
            (this.types = null);
        }
        destroy() {
          var e;
          null == (e = this.source) || e.destroy();
        }
        load(e) {
          return (
            this.addResolvingPromise(
              this.source.load(e).then(() => {
                this.read(this.source.sourceJSON, {
                  origin: 'service',
                  url: this.parsedUrl,
                }),
                  this.revert(
                    ['objectIdField', 'fields', 'timeInfo'],
                    'service',
                  ),
                  (0, q.YN)(this.renderer, this.fieldsIndex),
                  (0, q.UF)(this.timeInfo, this.fieldsIndex);
              }),
            ),
            Promise.resolve(this)
          );
        }
        get capabilities() {
          return this.source ? this.source.capabilities : null;
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
        get isTable() {
          return this.loaded && null == this.geometryType;
        }
        get parsedUrl() {
          return this.url ? (0, l.mN)(this.url) : null;
        }
        set renderer(e) {
          (0, q.YN)(e, this.fieldsIndex), this._set('renderer', e);
        }
        set url(e) {
          if (!e) return void this._set('url', e);
          const t = (0, l.mN)(e);
          this._set('url', t.path),
            t.query &&
              (this.customParameters = {
                ...this.customParameters,
                ...t.query,
              });
        }
        async applyEdits(e, t) {
          const s = await r.e(4720).then(r.bind(r, 14720));
          await this.load();
          const o = await s.applyEdits(this, this.source, e, t);
          return (
            this.read(
              {
                extent: this.source.sourceJSON.extent,
                timeInfo: this.source.sourceJSON.timeInfo,
              },
              { origin: 'service', ignoreDefaults: !0 },
            ),
            o
          );
        }
        on(e, t) {
          return super.on(e, t);
        }
        createPopupTemplate(e) {
          return (0, U.eZ)(this, e);
        }
        createQuery() {
          const e = new z.Z(),
            t = this.get('capabilities.data');
          (e.returnGeometry = !0),
            t && t.supportsZ && (e.returnZ = !0),
            (e.outFields = ['*']),
            (e.where = this.definitionExpression || '1=1');
          const { timeOffset: r, timeExtent: s } = this;
          return (
            (e.timeExtent =
              null != r && null != s ? s.offset(-r.value, r.unit) : s || null),
            e
          );
        }
        getFieldDomain(e, t) {
          let r,
            s = !1;
          const o = t && t.feature,
            n = o && o.attributes,
            i = this.typeIdField && n && n[this.typeIdField];
          return (
            null != i &&
              this.types &&
              (s = this.types.some(
                (t) =>
                  t.id == i &&
                  ((r = t.domains && t.domains[e]),
                  r && 'inherited' === r.type && (r = this._getLayerDomain(e)),
                  !0),
              )),
            s || r || (r = this._getLayerDomain(e)),
            r
          );
        }
        getField(e) {
          return this.fieldsIndex.get(e);
        }
        queryFeatures(e, t) {
          return this.load()
            .then(() =>
              this.source.queryFeatures(z.Z.from(e) || this.createQuery(), t),
            )
            .then((e) => {
              if (null != e && e.features)
                for (const t of e.features) t.layer = t.sourceLayer = this;
              return e;
            });
        }
        queryObjectIds(e, t) {
          return this.load().then(() =>
            this.source.queryObjectIds(z.Z.from(e) || this.createQuery(), t),
          );
        }
        queryFeatureCount(e, t) {
          return this.load().then(() =>
            this.source.queryFeatureCount(z.Z.from(e) || this.createQuery(), t),
          );
        }
        queryExtent(e, t) {
          return this.load().then(() =>
            this.source.queryExtent(z.Z.from(e) || this.createQuery(), t),
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
        _getLayerDomain(e) {
          if (!this.fields) return null;
          let t = null;
          return (
            this.fields.some((r) => (r.name === e && (t = r.domain), !!t)), t
          );
        }
      };
      (0, s._)(
        [(0, u.Cb)({ readOnly: !0, json: { read: !1, write: !1 } })],
        B.prototype,
        'capabilities',
        null,
      ),
        (0, s._)(
          [(0, u.Cb)({ type: String })],
          B.prototype,
          'copyright',
          void 0,
        ),
        (0, s._)(
          [(0, u.Cb)({ readOnly: !0 })],
          B.prototype,
          'createQueryVersion',
          null,
        ),
        (0, s._)(
          [(0, u.Cb)({ readOnly: !0 })],
          B.prototype,
          'defaultPopupTemplate',
          null,
        ),
        (0, s._)(
          [
            (0, u.Cb)({
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
        (0, s._)(
          [(0, u.Cb)({ type: String })],
          B.prototype,
          'displayField',
          void 0,
        ),
        (0, s._)(
          [(0, u.Cb)({ type: Boolean })],
          B.prototype,
          'editingEnabled',
          void 0,
        ),
        (0, s._)([(0, u.Cb)(T.PV)], B.prototype, 'elevationInfo', void 0),
        (0, s._)([(0, u.Cb)(Z.d)], B.prototype, 'featureReduction', void 0),
        (0, s._)(
          [
            (0, u.Cb)({
              type: [J.Z],
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
        (0, s._)(
          [(0, u.Cb)($.fieldsIndex)],
          B.prototype,
          'fieldsIndex',
          void 0,
        ),
        (0, s._)(
          [(0, u.Cb)({ type: _.Z, json: { name: 'extent' } })],
          B.prototype,
          'fullExtent',
          void 0,
        ),
        (0, s._)(
          [
            (0, u.Cb)({
              type: ['point', 'polygon', 'polyline', 'multipoint'],
              json: { read: { reader: d.Mk.read } },
            }),
          ],
          B.prototype,
          'geometryType',
          void 0,
        ),
        (0, s._)([(0, u.Cb)({ type: Boolean })], B.prototype, 'hasZ', void 0),
        (0, s._)([(0, u.Cb)(T.id)], B.prototype, 'id', void 0),
        (0, s._)(
          [(0, u.Cb)({ type: Boolean, readOnly: !0 })],
          B.prototype,
          'isTable',
          null,
        ),
        (0, s._)([(0, u.Cb)(T.iR)], B.prototype, 'labelsVisible', void 0),
        (0, s._)(
          [
            (0, u.Cb)({
              type: [V.Z],
              json: {
                name: 'layerDefinition.drawingInfo.labelingInfo',
                read: { reader: A.r },
                write: !0,
              },
            }),
          ],
          B.prototype,
          'labelingInfo',
          void 0,
        ),
        (0, s._)([(0, u.Cb)(T.rn)], B.prototype, 'legendEnabled', void 0),
        (0, s._)(
          [(0, u.Cb)({ type: ['show', 'hide'] })],
          B.prototype,
          'listMode',
          void 0,
        ),
        (0, s._)(
          [
            (0, u.Cb)({
              type: String,
              json: {
                name: 'layerDefinition.objectIdField',
                write: { ignoreOrigin: !0, isRequired: !0 },
                origins: { service: { name: 'objectIdField' } },
              },
            }),
          ],
          B.prototype,
          'objectIdField',
          void 0,
        ),
        (0, s._)([(0, u.Cb)(T.Oh)], B.prototype, 'opacity', void 0),
        (0, s._)(
          [(0, u.Cb)({ type: ['GeoJSON'] })],
          B.prototype,
          'operationalLayerType',
          void 0,
        ),
        (0, s._)([(0, u.Cb)({ readOnly: !0 })], B.prototype, 'parsedUrl', null),
        (0, s._)([(0, u.Cb)(T.C_)], B.prototype, 'popupEnabled', void 0),
        (0, s._)(
          [(0, u.Cb)({ type: o.Z, json: { name: 'popupInfo', write: !0 } })],
          B.prototype,
          'popupTemplate',
          void 0,
        ),
        (0, s._)(
          [
            (0, u.Cb)({
              types: n.A,
              json: {
                name: 'layerDefinition.drawingInfo.renderer',
                write: !0,
                origins: {
                  service: { name: 'drawingInfo.renderer' },
                  'web-scene': { types: n.o },
                },
              },
            }),
          ],
          B.prototype,
          'renderer',
          null,
        ),
        (0, s._)(
          [(0, u.Cb)(T.YI)],
          B.prototype,
          'screenSizePerspectiveEnabled',
          void 0,
        ),
        (0, s._)([(0, u.Cb)({ readOnly: !0 })], B.prototype, 'source', void 0),
        (0, s._)(
          [(0, u.Cb)({ type: G.Z })],
          B.prototype,
          'spatialReference',
          void 0,
        ),
        (0, s._)(
          [(0, u.Cb)({ type: [L.Z] })],
          B.prototype,
          'templates',
          void 0,
        ),
        (0, s._)([(0, u.Cb)()], B.prototype, 'title', void 0),
        (0, s._)(
          [(0, u.Cb)({ json: { read: !1 }, readOnly: !0 })],
          B.prototype,
          'type',
          void 0,
        ),
        (0, s._)(
          [(0, u.Cb)({ type: String, readOnly: !0 })],
          B.prototype,
          'typeIdField',
          void 0,
        ),
        (0, s._)([(0, u.Cb)({ type: [M.Z] })], B.prototype, 'types', void 0),
        (0, s._)([(0, u.Cb)(T.HQ)], B.prototype, 'url', null),
        (B = (0, s._)([(0, p.j)('esri.layers.GeoJSONLayer')], B));
      const W = B;
    },
    61159: (e, t, r) => {
      r.d(t, { g: () => s });
      const s = {
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
    25278: (e, t, r) => {
      r.d(t, { MS: () => d, Dm: () => c, Hq: () => p, bU: () => a });
      var s = r(80442),
        o = r(22974),
        n = r(61159),
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
        if ((0, s.Z)('esri-csp-restrictions'))
          return () => ({ [t]: null, ...e });
        try {
          let r = `this.${t} = null;`;
          for (const t in e)
            r += `this${l.test(t) ? `.${t}` : `["${t}"]`} = ${JSON.stringify(
              e[t],
            )};`;
          const s = new Function(
            `\n      return class AttributesClass$${u++} {\n        constructor() {\n          ${r};\n        }\n      }\n    `,
          )();
          return () => new s();
        } catch (r) {
          return () => ({ [t]: null, ...e });
        }
      }
      function p(e = {}) {
        return [
          {
            name: 'New Feature',
            description: '',
            prototype: { attributes: (0, o.d9)(e) },
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
          query: n.g,
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
      r.d(t, { c: () => y });
      var s,
        o = r(43697),
        n = r(78286),
        i = r(5600),
        a = (r(67676), r(80442), r(75215), r(52011)),
        l = r(35454),
        u = r(96674);
      const c = new l.X({ asc: 'ascending', desc: 'descending' });
      let p = (s = class extends u.wq {
        constructor(e) {
          super(e),
            (this.field = null),
            (this.valueExpression = null),
            (this.order = 'ascending');
        }
        clone() {
          return new s({
            field: this.field,
            valueExpression: this.valueExpression,
            order: this.order,
          });
        }
      });
      (0, o._)(
        [(0, i.Cb)({ type: String, json: { write: !0 } })],
        p.prototype,
        'field',
        void 0,
      ),
        (0, o._)(
          [(0, i.Cb)({ type: String, json: { write: !0 } })],
          p.prototype,
          'valueExpression',
          void 0,
        ),
        (0, o._)(
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
        (p = s = (0, o._)([(0, a.j)('esri.layers.support.OrderByInfo')], p));
      const d = p;
      function h(e, t, r) {
        if (!e) return null;
        const s = e.find((e) => !!e.field);
        if (!s) return null;
        const o = new d();
        return o.read(s, r), [o];
      }
      function f(e, t, r, s) {
        const o = e.find((e) => !!e.field);
        o && (0, n.RB)(r, [o.toJSON()], t);
      }
      const y = (e) => {
        let t = class extends e {
          constructor() {
            super(...arguments), (this.orderBy = null);
          }
        };
        return (
          (0, o._)(
            [
              (0, i.Cb)({
                type: [d],
                json: {
                  origins: { 'web-scene': { write: !1, read: !1 } },
                  read: { source: 'layerDefinition.orderBy', reader: h },
                  write: { target: 'layerDefinition.orderBy', writer: f },
                },
              }),
            ],
            t.prototype,
            'orderBy',
            void 0,
          ),
          (t = (0, o._)([(0, a.j)('esri.layers.mixins.OrderedLayer')], t)),
          t
        );
      };
    },
    70082: (e, t, r) => {
      r.d(t, { Z: () => p });
      var s = r(43697),
        o = r(2368),
        n = r(35454),
        i = r(96674),
        a = r(5600),
        l = (r(67676), r(80442), r(75215), r(52011));
      const u = new n.X({
        esriFeatureEditToolAutoCompletePolygon: 'auto-complete-polygon',
        esriFeatureEditToolCircle: 'circle',
        esriFeatureEditToolEllipse: 'ellipse',
        esriFeatureEditToolFreehand: 'freehand',
        esriFeatureEditToolLine: 'line',
        esriFeatureEditToolNone: 'none',
        esriFeatureEditToolPoint: 'point',
        esriFeatureEditToolPolygon: 'polygon',
        esriFeatureEditToolRectangle: 'rectangle',
        esriFeatureEditToolArrow: 'arrow',
        esriFeatureEditToolTriangle: 'triangle',
        esriFeatureEditToolLeftArrow: 'left-arrow',
        esriFeatureEditToolRightArrow: 'right-arrow',
        esriFeatureEditToolUpArrow: 'up-arrow',
        esriFeatureEditToolDownArrow: 'down-arrow',
      });
      let c = class extends (0, o.J)(i.wq) {
        constructor(e) {
          super(e),
            (this.name = null),
            (this.description = null),
            (this.drawingTool = null),
            (this.prototype = null),
            (this.thumbnail = null);
        }
      };
      (0, s._)(
        [(0, a.Cb)({ json: { write: !0 } })],
        c.prototype,
        'name',
        void 0,
      ),
        (0, s._)(
          [(0, a.Cb)({ json: { write: !0 } })],
          c.prototype,
          'description',
          void 0,
        ),
        (0, s._)(
          [(0, a.Cb)({ json: { read: u.read, write: u.write } })],
          c.prototype,
          'drawingTool',
          void 0,
        ),
        (0, s._)(
          [(0, a.Cb)({ json: { write: !0 } })],
          c.prototype,
          'prototype',
          void 0,
        ),
        (0, s._)(
          [(0, a.Cb)({ json: { write: !0 } })],
          c.prototype,
          'thumbnail',
          void 0,
        ),
        (c = (0, s._)([(0, l.j)('esri.layers.support.FeatureTemplate')], c));
      const p = c;
    },
    16451: (e, t, r) => {
      r.d(t, { Z: () => h });
      var s = r(43697),
        o = r(2368),
        n = r(96674),
        i = r(5600),
        a = (r(67676), r(80442), r(75215), r(71715)),
        l = r(52011),
        u = r(30556),
        c = r(72729),
        p = r(70082);
      let d = class extends (0, o.J)(n.wq) {
        constructor(e) {
          super(e),
            (this.id = null),
            (this.name = null),
            (this.domains = null),
            (this.templates = null);
        }
        readDomains(e) {
          const t = {};
          for (const r of Object.keys(e)) t[r] = (0, c.im)(e[r]);
          return t;
        }
        writeDomains(e, t) {
          const r = {};
          for (const t of Object.keys(e)) {
            var s;
            e[t] && (r[t] = null == (s = e[t]) ? void 0 : s.toJSON());
          }
          t.domains = r;
        }
      };
      (0, s._)([(0, i.Cb)({ json: { write: !0 } })], d.prototype, 'id', void 0),
        (0, s._)(
          [(0, i.Cb)({ json: { write: !0 } })],
          d.prototype,
          'name',
          void 0,
        ),
        (0, s._)(
          [(0, i.Cb)({ json: { write: !0 } })],
          d.prototype,
          'domains',
          void 0,
        ),
        (0, s._)([(0, a.r)('domains')], d.prototype, 'readDomains', null),
        (0, s._)([(0, u.c)('domains')], d.prototype, 'writeDomains', null),
        (0, s._)(
          [(0, i.Cb)({ type: [p.Z], json: { write: !0 } })],
          d.prototype,
          'templates',
          void 0,
        ),
        (d = (0, s._)([(0, l.j)('esri.layers.support.FeatureType')], d));
      const h = d;
    },
    99282: (e, t, r) => {
      r.d(t, { a: () => n });
      var s = r(67900),
        o = r(68441);
      const n = {
        inches: (0, s.En)(1, 'meters', 'inches'),
        feet: (0, s.En)(1, 'meters', 'feet'),
        'us-feet': (0, s.En)(1, 'meters', 'us-feet'),
        yards: (0, s.En)(1, 'meters', 'yards'),
        miles: (0, s.En)(1, 'meters', 'miles'),
        'nautical-miles': (0, s.En)(1, 'meters', 'nautical-miles'),
        millimeters: (0, s.En)(1, 'meters', 'millimeters'),
        centimeters: (0, s.En)(1, 'meters', 'centimeters'),
        decimeters: (0, s.En)(1, 'meters', 'decimeters'),
        meters: (0, s.En)(1, 'meters', 'meters'),
        kilometers: (0, s.En)(1, 'meters', 'kilometers'),
        'decimal-degrees': 1 / (0, s.ty)(1, 'meters', o.sv.radius),
      };
    },
    51706: (e, t, r) => {
      var s, o;
      function n(e) {
        return (
          e && 'esri.renderers.visualVariables.SizeVariable' === e.declaredClass
        );
      }
      function i(e) {
        return null != e && !isNaN(e) && isFinite(e);
      }
      function a(e) {
        return e.valueExpression
          ? s.Expression
          : e.field && 'string' == typeof e.field
          ? s.Field
          : s.Unknown;
      }
      function l(e, t) {
        const r = t || a(e),
          n = e.valueUnit || 'unknown';
        return r === s.Unknown
          ? o.Constant
          : e.stops
          ? o.Stops
          : null != e.minSize &&
            null != e.maxSize &&
            null != e.minDataValue &&
            null != e.maxDataValue
          ? o.ClampedLinear
          : 'unknown' === n
          ? null != e.minSize && null != e.minDataValue
            ? e.minSize && e.minDataValue
              ? o.Proportional
              : o.Additive
            : o.Identity
          : o.RealWorldSize;
      }
      r.d(t, {
        RY: () => s,
        hL: () => o,
        PS: () => a,
        QW: () => l,
        iY: () => n,
        qh: () => i,
      }),
        (function (e) {
          (e.Unknown = 'unknown'),
            (e.Expression = 'expression'),
            (e.Field = 'field');
        })(s || (s = {})),
        (function (e) {
          (e.Unknown = 'unknown'),
            (e.Stops = 'stops'),
            (e.ClampedLinear = 'clamped-linear'),
            (e.Proportional = 'proportional'),
            (e.Additive = 'additive'),
            (e.Constant = 'constant'),
            (e.Identity = 'identity'),
            (e.RealWorldSize = 'real-world-size');
        })(o || (o = {}));
    },
    28101: (e, t, r) => {
      r.d(t, {
        PR: () => C,
        Lq: () => f,
        Km: () => y,
        cM: () => m,
        ap: () => g,
        V3: () => w,
        B3: () => h,
      });
      var s = r(22303),
        o = r(38171),
        n = r(74085),
        i = r(92604),
        a = r(70586),
        l = r(99282),
        u = r(51706);
      const c = i.Z.getLogger(
          'esri.renderers.visualVariables.support.visualVariableUtils',
        ),
        p = new o.Z(),
        d = Math.PI,
        h = /^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i;
      function f(e, t, r) {
        const o =
          'visualVariables' in e && e.visualVariables
            ? e.visualVariables.find((e) => 'color' === e.type)
            : e;
        if (!o) return;
        if ('esri.renderers.visualVariables.ColorVariable' !== o.declaredClass)
          return void c.warn(
            'The visualVariable should be an instance of esri.renderers.visualVariables.ColorVariable',
          );
        const n = 'number' == typeof t,
          i = n ? null : t,
          l = i && i.attributes;
        let u = n ? t : null;
        const p = o.field,
          { ipData: d, hasExpression: h } = o.cache;
        let f = o.cache.compiledFunc;
        if (!p && !h) {
          const e = o.stops;
          return e && e[0] && e[0].color;
        }
        if ('number' != typeof u)
          if (h) {
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
              s = t.getViewInfo(e),
              n = t.createExecContext(i, s);
            if (!f) {
              const e = t.createSyntaxTree(o.valueExpression);
              (f = t.createFunction(e)), (o.cache.compiledFunc = f);
            }
            u = t.executeFunction(f, n);
          } else l && (u = l[p]);
        const y = o.normalizationField,
          m = l ? parseFloat(l[y]) : void 0;
        if (null != u && (!y || n || (!isNaN(m) && 0 !== m))) {
          isNaN(m) || n || (u /= m);
          const e = _(u, d);
          if (e) {
            const t = e[0],
              n = e[1],
              i =
                t === n
                  ? o.stops[t].color
                  : s.Z.blendColors(
                      o.stops[t].color,
                      o.stops[n].color,
                      e[2],
                      (0, a.pC)(r) ? r.color : void 0,
                    );
            return new s.Z(i);
          }
        }
      }
      function y(e, t, r) {
        const s =
          'visualVariables' in e && e.visualVariables
            ? e.visualVariables.find((e) => 'opacity' === e.type)
            : e;
        if (!s) return;
        if (
          'esri.renderers.visualVariables.OpacityVariable' !== s.declaredClass
        )
          return void c.warn(
            'The visualVariable should be an instance of esri.renderers.visualVariables.OpacityVariable',
          );
        const o = 'number' == typeof t,
          n = o ? null : t,
          i = n && n.attributes;
        let l = o ? t : null;
        const u = s.field,
          { ipData: p, hasExpression: d } = s.cache;
        let h = s.cache.compiledFunc;
        if (!u && !d) {
          const e = s.stops;
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
              o = t.getViewInfo(e),
              i = t.createExecContext(n, o);
            if (!h) {
              const e = t.createSyntaxTree(s.valueExpression);
              (h = t.createFunction(e)), (s.cache.compiledFunc = h);
            }
            l = t.executeFunction(h, i);
          } else i && (l = i[u]);
        const f = s.normalizationField,
          y = i ? parseFloat(i[f]) : void 0;
        if (null != l && (!f || o || (!isNaN(y) && 0 !== y))) {
          isNaN(y) || o || (l /= y);
          const e = _(l, p);
          if (e) {
            const t = e[0],
              r = e[1];
            if (t === r) return s.stops[t].opacity;
            {
              const o = s.stops[t].opacity;
              return o + (s.stops[r].opacity - o) * e[2];
            }
          }
        }
      }
      function m(e, t, r) {
        const s =
          'visualVariables' in e && e.visualVariables
            ? e.visualVariables.find((e) => 'rotation' === e.type)
            : e;
        if (!s) return;
        if (
          'esri.renderers.visualVariables.RotationVariable' !== s.declaredClass
        )
          return void c.warn(
            'The visualVariable should be an instance of esri.renderers.visualVariables.RotationVariable',
          );
        const o = s.axis || 'heading',
          n = 'heading' === o && 'arithmetic' === s.rotationType ? 90 : 0,
          i = 'heading' === o && 'arithmetic' === s.rotationType ? -1 : 1,
          l = 'number' == typeof t ? null : t,
          u = l && l.attributes,
          p = s.field,
          { hasExpression: d } = s.cache;
        let h = s.cache.compiledFunc,
          f = 0;
        if (!p && !d) return f;
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
            o = t.getViewInfo(e),
            n = t.createExecContext(l, o);
          if (!h) {
            const e = t.createSyntaxTree(s.valueExpression);
            (h = t.createFunction(e)), (s.cache.compiledFunc = h);
          }
          f = t.executeFunction(h, n);
        } else u && (f = u[p] || 0);
        return (f = 'number' != typeof f || isNaN(f) ? null : n + i * f), f;
      }
      function g(e, t, r) {
        const s =
          'visualVariables' in e && e.visualVariables
            ? e.visualVariables.find((e) => 'size' === e.type)
            : e;
        if (!s) return;
        if ('esri.renderers.visualVariables.SizeVariable' !== s.declaredClass)
          return void c.warn(
            'The visualVariable should be an instance of esri.renderers.visualVariables.SizeVariable',
          );
        const o = (function (e, t, r, s, o) {
          switch (t.transformationType) {
            case u.hL.Additive:
              return (function (e, t, r, s) {
                return e + (b(t.minSize, r, s) || t.minDataValue);
              })(e, t, r, s);
            case u.hL.Constant:
              return (function (e, t, r) {
                const s = e.stops;
                let o = s && s.length && s[0].size;
                return null == o && (o = e.minSize), b(o, t, r);
              })(t, r, s);
            case u.hL.ClampedLinear:
              return (function (e, t, r, s) {
                const o =
                    (e - t.minDataValue) / (t.maxDataValue - t.minDataValue),
                  n = b(t.minSize, r, s),
                  i = b(t.maxSize, r, s),
                  l = (0, a.pC)(s) ? s.shape : void 0;
                if (e <= t.minDataValue) return n;
                if (e >= t.maxDataValue) return i;
                if ('area' === t.scaleBy && l) {
                  const e = 'circle' === l,
                    t = e ? d * (n / 2) ** 2 : n * n,
                    r = t + o * ((e ? d * (i / 2) ** 2 : i * i) - t);
                  return e ? 2 * Math.sqrt(r / d) : Math.sqrt(r);
                }
                return n + o * (i - n);
              })(e, t, r, s);
            case u.hL.Proportional:
              return (function (e, t, r, s) {
                const o = (0, a.pC)(s) ? s.shape : void 0,
                  n = e / t.minDataValue,
                  i = b(t.minSize, r, s),
                  l = b(t.maxSize, r, s);
                let u = null;
                return (
                  (u =
                    'circle' === o
                      ? 2 * Math.sqrt(n * (i / 2) ** 2)
                      : 'square' === o || 'diamond' === o || 'image' === o
                      ? Math.sqrt(n * i ** 2)
                      : n * i),
                  v(u, i, l)
                );
              })(e, t, r, s);
            case u.hL.Stops:
              return (function (e, t, r, s, o) {
                const [n, i, a] = _(e, o);
                if (n === i) return b(t.stops[n].size, r, s);
                {
                  const e = b(t.stops[n].size, r, s);
                  return e + (b(t.stops[i].size, r, s) - e) * a;
                }
              })(e, t, r, s, o);
            case u.hL.RealWorldSize:
              return (function (e, t, r, s) {
                const o =
                    ((0, a.pC)(s) && s.resolution ? s.resolution : 1) *
                    l.a[t.valueUnit],
                  n = b(t.minSize, r, s),
                  i = b(t.maxSize, r, s),
                  { valueRepresentation: u } = t;
                let c = null;
                return (
                  (c =
                    'area' === u
                      ? (2 * Math.sqrt(e / d)) / o
                      : 'radius' === u || 'distance' === u
                      ? (2 * e) / o
                      : e / o),
                  v(c, n, i)
                );
              })(e, t, r, s);
            case u.hL.Identity:
              return e;
            case u.hL.Unknown:
              return null;
          }
        })(
          (function (e, t, r) {
            const s = 'number' == typeof t,
              o = s ? null : t,
              n = o && o.attributes;
            let i = s ? t : null;
            const { isScaleDriven: l } = e.cache;
            let p = e.cache.compiledFunc;
            if (l) {
              const t = (0, a.pC)(r) ? r.scale : void 0,
                s = (0, a.pC)(r) ? r.view : void 0;
              i =
                null == t || '3d' === s
                  ? (function (e) {
                      let t = null,
                        r = null;
                      const s = e.stops;
                      return (
                        s
                          ? ((t = s[0].value), (r = s[s.length - 1].value))
                          : ((t = e.minDataValue || 0),
                            (r = e.maxDataValue || 0)),
                        (t + r) / 2
                      );
                    })(e)
                  : t;
            } else if (!s)
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
                    s = r.arcade.arcadeUtils,
                    n = s.getViewInfo(t),
                    l = s.createExecContext(o, n);
                  if (!p) {
                    const t = s.createSyntaxTree(e.valueExpression);
                    (p = s.createFunction(t)), (e.cache.compiledFunc = p);
                  }
                  i = s.executeFunction(p, l);
                  break;
                }
                case u.RY.Field:
                  n && (i = n[e.field]);
                  break;
                case u.RY.Unknown:
                  i = null;
              }
            if (!(0, u.qh)(i)) return null;
            if (s || !e.normalizationField) return i;
            const d = n ? parseFloat(n[e.normalizationField]) : null;
            return (0, u.qh)(d) && 0 !== d ? i / d : null;
          })(s, t, r),
          s,
          t,
          r,
          s.cache.ipData,
        );
        return null == o || isNaN(o) ? 0 : o;
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
      function v(e, t, r) {
        return (0, u.qh)(r) && e > r ? r : (0, u.qh)(t) && e < t ? t : e;
      }
      function w(e, t, r) {
        const { isScaleDriven: s } = e.cache;
        if (!((s && '3d' === r) || t)) return null;
        const o = { scale: t, view: r };
        let n = b(e.minSize, p, o),
          i = b(e.maxSize, p, o);
        if (null != n || null != i) {
          if (n > i) {
            const e = i;
            (i = n), (n = e);
          }
          return { minSize: n, maxSize: i };
        }
      }
      function _(e, t) {
        if (!t) return;
        let r = 0,
          s = t.length - 1;
        return (
          t.some((t, o) => (e < t ? ((s = o), !0) : ((r = o), !1))),
          [r, s, (e - t[r]) / (t[s] - t[r])]
        );
      }
      function C(e, t, r) {
        const s = ['proportional', 'proportional', 'proportional'];
        for (const o of e) {
          const e = o.useSymbolValue ? 'symbol-value' : g(o, t, r);
          switch (o.axis) {
            case 'width':
              s[0] = e;
              break;
            case 'depth':
              s[1] = e;
              break;
            case 'height':
              s[2] = e;
              break;
            case 'width-and-depth':
              (s[0] = e), (s[1] = e);
              break;
            case 'all':
            case void 0:
            case null:
              (s[0] = e), (s[1] = e), (s[2] = e);
              break;
            default:
              (0, n.Bg)(o.axis);
          }
        }
        return s;
      }
    },
    74889: (e, t, r) => {
      r.r(t), r.d(t, { default: () => w });
      var s,
        o = r(43697),
        n = r(66577),
        i = r(38171),
        a = r(35454),
        l = r(96674),
        u = r(22974),
        c = r(70586),
        p = r(5600),
        d = (r(75215), r(71715)),
        h = r(52011),
        f = r(30556),
        y = r(82971),
        m = r(33955),
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
      let v = (s = class extends l.wq {
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
          const r = y.Z.fromJSON(t.spatialReference),
            s = [];
          for (let t = 0; t < e.length; t++) {
            const o = e[t],
              n = i.Z.fromJSON(o),
              a = o.geometry && o.geometry.spatialReference;
            (0, c.pC)(n.geometry) && !a && (n.geometry.spatialReference = r);
            const l = o.aggregateGeometries,
              u = n.aggregateGeometries;
            if (l && (0, c.pC)(u))
              for (const e in u) {
                const t = u[e],
                  s = l[e],
                  o = null == s ? void 0 : s.spatialReference;
                (0, c.pC)(t) && !o && (t.spatialReference = r);
              }
            s.push(n);
          }
          return s;
        }
        writeGeometryType(e, t, r, s) {
          if (e) return void b.write(e, t, r, s);
          const { features: o } = this;
          if (o)
            for (const e of o)
              if (e && (0, c.pC)(e.geometry))
                return void b.write(e.geometry.type, t, r, s);
        }
        readQueryGeometry(e, t) {
          if (!e) return null;
          const r = !!e.spatialReference,
            s = (0, m.im)(e);
          return (
            !r &&
              t.spatialReference &&
              (s.spatialReference = y.Z.fromJSON(t.spatialReference)),
            s
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
          return new s(this.cloneProperties());
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
              const s = t.features[r];
              if (s.geometry) {
                const t = e && e[r];
                s.geometry = (t && t.toJSON()) || s.geometry;
              }
            }
          return t;
        }
        quantize(e) {
          const {
              scale: [t, r],
              translate: [s, o],
            } = e,
            n = this.features,
            i = this._getQuantizationFunction(
              this.geometryType,
              (e) => Math.round((e - s) / t),
              (e) => Math.round((o - e) / r),
            );
          for (let e = 0, t = n.length; e < t; e++)
            i((0, c.Wg)(n[e].geometry)) || (n.splice(e, 1), e--, t--);
          return (this.transform = e), this;
        }
        unquantize() {
          const { geometryType: e, features: t, transform: r } = this;
          if (!r) return this;
          const {
              translate: [s, o],
              scale: [n, i],
            } = r,
            a = this._getHydrationFunction(
              e,
              (e) => e * n + s,
              (e) => o - e * i,
            );
          for (const { geometry: e } of t) (0, c.pC)(e) && a(e);
          return (this.transform = null), this;
        }
        _quantizePoints(e, t, r) {
          let s, o;
          const n = [];
          for (let i = 0, a = e.length; i < a; i++) {
            const a = e[i];
            if (i > 0) {
              const e = t(a[0]),
                i = r(a[1]);
              (e === s && i === o) ||
                (n.push([e - s, i - o]), (s = e), (o = i));
            } else (s = t(a[0])), (o = r(a[1])), n.push([s, o]);
          }
          return n.length > 0 ? n : null;
        }
        _getQuantizationFunction(e, t, r) {
          return 'point' === e
            ? (e) => ((e.x = t(e.x)), (e.y = r(e.y)), e)
            : 'polyline' === e || 'polygon' === e
            ? (e) => {
                const s = (0, m.oU)(e) ? e.rings : e.paths,
                  o = [];
                for (let e = 0, n = s.length; e < n; e++) {
                  const n = s[e],
                    i = this._quantizePoints(n, t, r);
                  i && o.push(i);
                }
                return o.length > 0
                  ? ((0, m.oU)(e) ? (e.rings = o) : (e.paths = o), e)
                  : null;
              }
            : 'multipoint' === e
            ? (e) => {
                const s = this._quantizePoints(e.points, t, r);
                return s.length > 0 ? ((e.points = s), e) : null;
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
                const s = (0, m.oU)(e) ? e.rings : e.paths;
                let o, n;
                for (let e = 0, i = s.length; e < i; e++) {
                  const i = s[e];
                  for (let e = 0, s = i.length; e < s; e++) {
                    const s = i[e];
                    e > 0
                      ? ((o += s[0]), (n += s[1]))
                      : ((o = s[0]), (n = s[1])),
                      (s[0] = t(o)),
                      (s[1] = r(n));
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
                const s = e.points;
                let o, n;
                for (let e = 0, i = s.length; e < i; e++) {
                  const i = s[e];
                  e > 0 ? ((o += i[0]), (n += i[1])) : ((o = i[0]), (n = i[1])),
                    (i[0] = t(o)),
                    (i[1] = r(n));
                }
              }
            : void 0;
        }
      });
      (0, o._)(
        [(0, p.Cb)({ type: String, json: { write: !0 } })],
        v.prototype,
        'displayFieldName',
        void 0,
      ),
        (0, o._)(
          [
            (0, p.Cb)({
              type: Boolean,
              json: { write: { overridePolicy: (e) => ({ enabled: e }) } },
            }),
          ],
          v.prototype,
          'exceededTransferLimit',
          void 0,
        ),
        (0, o._)(
          [(0, p.Cb)({ type: [i.Z], json: { write: !0 } })],
          v.prototype,
          'features',
          void 0,
        ),
        (0, o._)([(0, d.r)('features')], v.prototype, 'readFeatures', null),
        (0, o._)(
          [(0, p.Cb)({ type: [g.Z], json: { write: !0 } })],
          v.prototype,
          'fields',
          void 0,
        ),
        (0, o._)(
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
          v.prototype,
          'geometryType',
          void 0,
        ),
        (0, o._)(
          [(0, f.c)('geometryType')],
          v.prototype,
          'writeGeometryType',
          null,
        ),
        (0, o._)(
          [
            (0, p.Cb)({
              type: Boolean,
              json: { write: { overridePolicy: (e) => ({ enabled: e }) } },
            }),
          ],
          v.prototype,
          'hasM',
          void 0,
        ),
        (0, o._)(
          [
            (0, p.Cb)({
              type: Boolean,
              json: { write: { overridePolicy: (e) => ({ enabled: e }) } },
            }),
          ],
          v.prototype,
          'hasZ',
          void 0,
        ),
        (0, o._)(
          [(0, p.Cb)({ types: n.qM, json: { write: !0 } })],
          v.prototype,
          'queryGeometry',
          void 0,
        ),
        (0, o._)(
          [(0, d.r)('queryGeometry')],
          v.prototype,
          'readQueryGeometry',
          null,
        ),
        (0, o._)(
          [(0, p.Cb)({ type: y.Z, json: { write: !0 } })],
          v.prototype,
          'spatialReference',
          void 0,
        ),
        (0, o._)(
          [(0, f.c)('spatialReference')],
          v.prototype,
          'writeSpatialReference',
          null,
        ),
        (0, o._)(
          [(0, p.Cb)({ json: { write: !0 } })],
          v.prototype,
          'transform',
          void 0,
        ),
        (v = s = (0, o._)([(0, h.j)('esri.rest.support.FeatureSet')], v)),
        (v.prototype.toJSON.isDefaultToJSON = !0);
      const w = v;
    },
  },
]);
