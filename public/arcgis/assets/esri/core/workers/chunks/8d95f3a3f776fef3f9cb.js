'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [1412, 3172],
  {
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
    88669: (e, t, r) => {
      function n() {
        return [0, 0, 0, 0];
      }
      function o(e, t, r, n) {
        return [e, t, r, n];
      }
      function s(e, t) {
        return new Float64Array(e, t, 4);
      }
      function a() {
        return o(1, 1, 1, 1);
      }
      function i() {
        return o(1, 0, 0, 0);
      }
      function l() {
        return o(0, 1, 0, 0);
      }
      function c() {
        return o(0, 0, 1, 0);
      }
      function u() {
        return o(0, 0, 0, 1);
      }
      r.d(t, { a: () => s, c: () => n, f: () => o });
      const d = a(),
        f = i(),
        h = l(),
        m = c(),
        p = u();
      Object.freeze({
        __proto__: null,
        create: n,
        clone: function (e) {
          return [e[0], e[1], e[2], e[3]];
        },
        fromValues: o,
        fromArray: function (e) {
          const t = [0, 0, 0, 0],
            r = Math.min(4, e.length);
          for (let n = 0; n < r; ++n) t[n] = e[n];
          return t;
        },
        createView: s,
        zeros: function () {
          return [0, 0, 0, 0];
        },
        ones: a,
        unitX: i,
        unitY: l,
        unitZ: c,
        unitW: u,
        ZEROS: [0, 0, 0, 0],
        ONES: d,
        UNIT_X: f,
        UNIT_Y: h,
        UNIT_Z: m,
        UNIT_W: p,
      });
    },
    3172: (e, t, r) => {
      r.r(t), r.d(t, { default: () => h });
      var n = r(68773),
        o = r(40330),
        s = r(20102),
        a = r(80442),
        i = r(22974),
        l = r(70586),
        c = r(95330),
        u = r(17452),
        d = r(71058),
        f = r(85958);
      async function h(e, t) {
        var i;
        const f = (0, u.HK)(e),
          b = (0, u.jc)(e);
        b || f || (e = (0, u.Fv)(e));
        const w = { url: e, requestOptions: { ...(0, l.Wg)(t) } };
        let g = (0, u.oh)(e);
        if (g) {
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
                r = O('request:interceptor', e, t);
              }
              if (
                ((n instanceof Error || n instanceof s.Z) &&
                  (r = O('request:interceptor', n, t)),
                r)
              )
                throw (e.error && e.error(r), r);
              return n;
            }
          })(g, w);
          if (null != e)
            return {
              data: e,
              getHeader: E,
              requestOptions: w.requestOptions,
              url: w.url,
            };
          g.after || g.error || (g = null);
        }
        if (((e = w.url), 'image' === (t = w.requestOptions).responseType)) {
          if ((0, a.Z)('host-webworker') || (0, a.Z)('host-node'))
            throw O(
              'request:invalid-parameters',
              new Error(
                "responseType 'image' is not supported in Web Workers or Node environment",
              ),
              w,
            );
        } else if (f)
          throw O(
            'request:invalid-parameters',
            new Error(
              'Data URLs are not supported for responseType = ' +
                t.responseType,
            ),
            w,
          );
        if ('head' === t.method) {
          if (t.body)
            throw O(
              'request:invalid-parameters',
              new Error("body parameter cannot be set when method is 'head'"),
              w,
            );
          if (f || b)
            throw O(
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
              : h._abortableFetch ||
                (h._abortableFetch = globalThis.fetch.bind(globalThis));
          })(),
          m)
        )
          return m.execute(e, t);
        const T = new AbortController();
        (0, c.fu)(t, () => T.abort());
        const v = {
            controller: T,
            credential: null,
            credentialToken: null,
            fetchOptions: null,
            hasToken: !1,
            interceptor: g,
            params: w,
            redoRequest: !1,
            useIdentity: p.useIdentity,
            useProxy: !1,
            useSSL: !1,
            withCredentials: !1,
          },
          S = await (async function (e) {
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
                (y &&
                  'HTMLFormElement' in globalThis &&
                  (a instanceof FormData
                    ? (i = a)
                    : a instanceof HTMLFormElement &&
                      ((l = a), (i = new FormData(l)))),
                'string' == typeof a && (u = a),
                (e.fetchOptions = {
                  cache:
                    r.cacheBust && !h._abortableFetch.polyfill
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
                  ? (await k(),
                    (n = await o.id.getCredential(t, { signal: s })),
                    (e.credential = n))
                  : 'no-prompt' === r.authMode
                  ? (await k(),
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
                [s, a] = await P(e);
              } while (!(await C(e, s, a)));
            } catch (t) {
              const r = O('request:server', t, e.params, s);
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
              getHeader: s ? (e) => s.headers.get(e) : E,
              requestOptions: e.params.requestOptions,
              ssl: e.useSSL,
              url: e.params.url,
            };
          })(v);
        return null == (i = g) || null == i.after || i.after(S), S;
      }
      let m;
      const p = n.Z.request,
        y = 'FormData' in globalThis,
        b = [499, 498, 403, 401],
        w = ['COM_0056', 'COM_0057', 'SB_0008'],
        g = [
          /\/arcgis\/tokens/i,
          /\/sharing(\/rest)?\/generatetoken/i,
          /\/rest\/info/i,
        ],
        E = () => null,
        T = Symbol();
      function v(e) {
        const t = (0, u.P$)(e);
        return (
          !t ||
          t.endsWith('.arcgis.com') ||
          h._corsServers.includes(t) ||
          (0, u.kl)(t)
        );
      }
      function O(e, t, r, n) {
        let o = 'Error';
        const a = {
          url: r.url,
          requestOptions: r.requestOptions,
          getHeader: E,
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
            (a.raw = T in t ? t[T] : t);
        }
        return (0, c.D_)(t) ? (0, c.zE)() : new s.Z(e, o, a);
      }
      async function k() {
        o.id ||
          (await Promise.all([r.e(280), r.e(1400), r.e(7913)]).then(
            r.bind(r, 33107),
          ));
      }
      function L(e) {
        return g.some((t) => t.test(e));
      }
      async function P(e) {
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
          const f = r.useProxy || !!(0, u.ed)(t);
          if (f) {
            const e = (0, u.b7)(t);
            (c = e.path),
              !d && c.length + 1 + l > p.maxUrlLength && (d = !0),
              e.query && (s = { ...e.query, ...s });
          }
          if ('HEAD' === n.method && (d || f)) {
            if (d) {
              if (l > p.maxUrlLength)
                throw O(
                  'request:invalid-parameters',
                  new Error('URL exceeds maximum length'),
                  e.params,
                );
              throw O(
                'request:invalid-parameters',
                new Error("cannot use POST request when method is 'head'"),
                e.params,
              );
            }
            if (f)
              throw O(
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
            f && ((e.useProxy = !0), (t = `${c}?${t}`)),
            s.token && y && n.body instanceof FormData)
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
        let f,
          m,
          b = 0,
          w = !1;
        l > 0 &&
          (b = setTimeout(() => {
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
            (!s && !e.useProxy && p.proxyUrl && !v(t))
          ) {
            if (
              ((f = await h._abortableFetch(t, n)),
              e.useProxy ||
                (function (e) {
                  const t = (0, u.P$)(e);
                  t && !h._corsServers.includes(t) && h._corsServers.push(t);
                })(t),
              'native' === r.responseType)
            )
              m = f;
            else if ('HEAD' !== n.method)
              if (f.ok) {
                switch (i) {
                  case 'array-buffer':
                    m = await f.arrayBuffer();
                    break;
                  case 'blob':
                  case 'image':
                    m = await f.blob();
                    break;
                  default:
                    m = await f.text();
                }
                if (
                  (b && (clearTimeout(b), (b = 0)),
                  'json' === i || 'xml' === i || 'document' === i)
                )
                  if (m)
                    switch (i) {
                      case 'json':
                        m = JSON.parse(m);
                        break;
                      case 'xml':
                        m = S(m, 'application/xml');
                        break;
                      case 'document':
                        m = S(m, 'text/html');
                    }
                  else m = null;
                if (m) {
                  if ('array-buffer' === i || 'blob' === i) {
                    const e = f.headers.get('Content-Type');
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
                    (m = await q(URL.createObjectURL(m), e, !0));
                }
              } else m = await f.text();
          } else m = await q(t, e);
        } catch (n) {
          if ('AbortError' === n.name) {
            if (w) throw new Error('Timeout exceeded');
            throw (0, c.zE)('Request canceled');
          }
          if (
            !(!f && n instanceof TypeError && p.proxyUrl) ||
            r.body ||
            'delete' === r.method ||
            'head' === r.method ||
            'post' === r.method ||
            'put' === r.method ||
            e.useProxy ||
            v(t)
          )
            throw n;
          (e.redoRequest = !0),
            (0, u.tD)({ proxyUrl: p.proxyUrl, urlPrefix: (0, u.P$)(t) });
        } finally {
          b && clearTimeout(b);
        }
        return [f, m];
      }
      function S(e, t) {
        let r;
        try {
          r = new DOMParser().parseFromString(e, t);
        } catch {}
        if (!r || r.getElementsByTagName('parsererror').length)
          throw new SyntaxError('XML Parse error');
        return r;
      }
      async function C(e, t, r) {
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
            (s[T] = r),
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
          -1 !== b.indexOf(a) &&
          !L(e.params.url) &&
          (403 !== a ||
            (-1 === w.indexOf(l) &&
              (null == i || (2 === i && e.credentialToken))))
        ) {
          await k();
          try {
            const t = await o.id.getCredential(e.params.url, {
              error: O('request:server', s, e.params),
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
      function q(e, t, r = !1) {
        const n = t.controller.signal,
          o = new Image();
        return (
          t.withCredentials
            ? (o.crossOrigin = 'use-credentials')
            : (o.crossOrigin = 'anonymous'),
          (o.alt = ''),
          (o.src = e),
          (0, f.f)(o, e, r, n)
        );
      }
      (h._abortableFetch = null),
        (h._corsServers = [
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
              h(), c(new Error(`Unable to load ${t}`));
            },
            d = () => {
              const t = e;
              h(), l(t);
            },
            f = () => {
              if (!e) return;
              const t = e;
              h(), (t.src = ''), c(i());
            };
          const h = () => {
            (0, n.Z)('esri-image-decode') ||
              (e.removeEventListener('error', u),
              e.removeEventListener('load', d)),
              (u = null),
              (d = null),
              (e = null),
              (0, o.pC)(a) && a.removeEventListener('abort', f),
              (f = null),
              r && URL.revokeObjectURL(t);
          };
          (0, o.pC)(a) && a.addEventListener('abort', f),
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
    31412: (e, t, r) => {
      r.r(t),
        r.d(t, {
          destroyContext: () => T,
          dracoDecompressPointCloudData: () => b,
          filterObbsForModifications: () => w,
          filterObbsForModificationsSync: () => S,
          initialize: () => U,
          interpretObbModificationResults: () => P,
          process: () => y,
          setLegacySchema: () => E,
          setModifications: () => g,
          setModificationsSync: () => k,
          test: () => x,
        });
      var n,
        o,
        s = r(70586),
        a = r(1533);
      !(function (e) {
        (e[(e.None = 0)] = 'None'),
          (e[(e.Int16 = 1)] = 'Int16'),
          (e[(e.Int32 = 2)] = 'Int32');
      })(n || (n = {})),
        (function (e) {
          (e[(e.Replace = 0)] = 'Replace'),
            (e[(e.Outside = 1)] = 'Outside'),
            (e[(e.Inside = 2)] = 'Inside'),
            (e[(e.Finished = 3)] = 'Finished');
        })(o || (o = {}));
      var i = r(99880);
      function l(e) {
        return (0, i.V)(`esri/libs/i3s/${e}`);
      }
      let c;
      var u, d, f, h, m, p;
      async function y(e) {
        await U();
        const t = [e.geometryBuffer];
        return { result: L(e, t), transferList: t };
      }
      async function b(e) {
        var t;
        await U();
        const r = [e.geometryBuffer],
          { geometryBuffer: n } = e,
          o = n.byteLength,
          s = O._malloc(o),
          i = new Uint8Array(O.HEAPU8.buffer, s, o);
        i.set(new Uint8Array(n));
        const l = O.dracoDecompressPointCloudData(s, i.byteLength);
        if ((O._free(s), l.error.length > 0)) throw `i3s.wasm: ${l.error}`;
        const c =
            (null == (t = l.featureIds) ? void 0 : t.length) > 0
              ? (0, a.tP)(l.featureIds)
              : null,
          u = (0, a.tP)(l.positions);
        return (
          c && r.push(c.buffer),
          r.push(u.buffer),
          { result: { positions: u, featureIds: c }, transferList: r }
        );
      }
      async function w(e) {
        await U(), S(e);
        const t = { buffer: e.buffer };
        return { result: t, transferList: [t.buffer] };
      }
      async function g(e) {
        await U(), k(e);
      }
      async function E(e) {
        await U(), O.setLegacySchema(e.context, e.jsonSchema);
      }
      function T(e) {
        C(e);
      }
      let v, O;
      function k(e) {
        const t = e.modifications,
          r = O._malloc(8 * t.length),
          n = new Float64Array(O.HEAPU8.buffer, r, t.length);
        for (let e = 0; e < t.length; ++e) n[e] = t[e];
        O.setModifications(e.context, r, t.length, e.isGeodetic), O._free(r);
      }
      function L(e, t) {
        if (!O) return null;
        const {
            context: r,
            localOrigin: o,
            globalTrafo: i,
            mbs: l,
            obb: c,
            elevationOffset: u,
            geometryBuffer: d,
            geometryDescriptor: f,
            indexToVertexProjector: h,
            vertexToRenderProjector: m,
          } = e,
          p = O._malloc(d.byteLength),
          y = O._malloc(33 * Float64Array.BYTES_PER_ELEMENT),
          b = new Uint8Array(O.HEAPU8.buffer, p, d.byteLength);
        b.set(new Uint8Array(d));
        const w = new Float64Array(O.HEAPU8.buffer, y, 33);
        q(w, o);
        let g = w.byteOffset + 3 * w.BYTES_PER_ELEMENT,
          E = new Float64Array(w.buffer, g);
        q(E, i),
          (g += 16 * w.BYTES_PER_ELEMENT),
          (E = new Float64Array(w.buffer, g)),
          q(E, l),
          (g += 4 * w.BYTES_PER_ELEMENT),
          (0, s.pC)(c) &&
            ((E = new Float64Array(w.buffer, g)),
            q(E, c.center),
            (g += 3 * w.BYTES_PER_ELEMENT),
            (E = new Float64Array(w.buffer, g)),
            q(E, c.halfSize),
            (g += 3 * w.BYTES_PER_ELEMENT),
            (E = new Float64Array(w.buffer, g)),
            q(E, c.quaternion));
        const T = f,
          v = {
            isDraco: !1,
            isLegacy: !1,
            color: e.layouts.some((e) => e.some((e) => 'color' === e.name)),
            normal:
              e.needNormals &&
              e.layouts.some((e) =>
                e.some((e) => 'normalCompressed' === e.name),
              ),
            uv0: e.layouts.some((e) => e.some((e) => 'uv0' === e.name)),
            uvRegion: e.layouts.some((e) =>
              e.some((e) => 'uvRegion' === e.name),
            ),
            featureIndex: T.featureIndex,
          },
          k = O.process(
            r,
            !!e.obb,
            p,
            b.byteLength,
            T,
            v,
            y,
            u,
            h,
            m,
            e.normalReferenceFrame,
          );
        if ((O._free(y), O._free(p), k.error.length > 0))
          throw `i3s.wasm: ${k.error}`;
        if (k.discarded) return null;
        const L =
            k.componentOffsets.length > 0
              ? (0, a.tP)(k.componentOffsets)
              : null,
          P = k.featureIds.length > 0 ? (0, a.tP)(k.featureIds) : null,
          S = (0, a.tP)(k.interleavedVertedData).buffer,
          C =
            k.indicesType === n.Int16
              ? (0, a.tP)(
                  new Uint16Array(
                    k.indices.buffer,
                    k.indices.byteOffset,
                    k.indices.byteLength / 2,
                  ),
                )
              : (0, a.tP)(
                  new Uint32Array(
                    k.indices.buffer,
                    k.indices.byteOffset,
                    k.indices.byteLength / 4,
                  ),
                ),
          U = (0, a.tP)(k.positions),
          x =
            k.positionIndicesType === n.Int16
              ? (0, a.tP)(
                  new Uint16Array(
                    k.positionIndices.buffer,
                    k.positionIndices.byteOffset,
                    k.positionIndices.byteLength / 2,
                  ),
                )
              : (0, a.tP)(
                  new Uint32Array(
                    k.positionIndices.buffer,
                    k.positionIndices.byteOffset,
                    k.positionIndices.byteLength / 4,
                  ),
                ),
          _ = {
            layout: e.layouts[0],
            interleavedVertexData: S,
            indices: C,
            hasColors: k.hasColors,
            hasModifications: k.hasModifications,
            positionData: { data: U, indices: x },
          };
        return (
          P && t.push(P.buffer),
          L && t.push(L.buffer),
          t.push(S),
          t.push(C.buffer),
          t.push(U.buffer),
          t.push(x.buffer),
          {
            componentOffsets: L,
            featureIds: P,
            transformedGeometry: _,
            obb: k.obb,
          }
        );
      }
      function P(e) {
        return 0 === e
          ? d.Unmodified
          : 1 === e
          ? d.PotentiallyModified
          : 2 === e
          ? d.Culled
          : d.Unknown;
      }
      function S(e) {
        const { context: t, buffer: r } = e,
          n = O._malloc(r.byteLength),
          o = r.byteLength / Float64Array.BYTES_PER_ELEMENT,
          s = new Float64Array(O.HEAPU8.buffer, n, o),
          a = new Float64Array(r);
        s.set(a), O.filterOBBs(t, n, o), a.set(s), O._free(n);
      }
      function C(e) {
        O && O.destroy(e);
      }
      function q(e, t) {
        for (let r = 0; r < t.length; ++r) e[r] = t[r];
      }
      function U() {
        return O
          ? Promise.resolve()
          : (v ||
              (v = (c ||
                (c = new Promise((e) =>
                  r
                    .e(6710)
                    .then(r.bind(r, 26710))
                    .then((e) => e.i)
                    .then(({ default: t }) => {
                      const r = t({
                        locateFile: l,
                        onRuntimeInitialized: () => e(r),
                      });
                      delete r.then;
                    }),
                ).catch((e) => Promise.reject(e))),
              c).then((e) => {
                (O = e), (v = null);
              })),
            v);
      }
      r(88669),
        ((p = u || (u = {}))[(p.Unmodified = 0)] = 'Unmodified'),
        (p[(p.Culled = 1)] = 'Culled'),
        (p[(p.NotChecked = 2)] = 'NotChecked'),
        (function (e) {
          (e[(e.Unmodified = 0)] = 'Unmodified'),
            (e[(e.PotentiallyModified = 1)] = 'PotentiallyModified'),
            (e[(e.Culled = 2)] = 'Culled'),
            (e[(e.Unknown = 3)] = 'Unknown'),
            (e[(e.NotChecked = 4)] = 'NotChecked');
        })(d || (d = {})),
        (function (e) {
          (e[(e.Unknown = 0)] = 'Unknown'),
            (e[(e.Uncached = 1)] = 'Uncached'),
            (e[(e.Cached = 2)] = 'Cached');
        })(f || (f = {})),
        (function (e) {
          (e[(e.None = 0)] = 'None'),
            (e[(e.MaxScreenThreshold = 1)] = 'MaxScreenThreshold'),
            (e[(e.ScreenSpaceRelative = 2)] = 'ScreenSpaceRelative'),
            (e[(e.RemovedFeatureDiameter = 3)] = 'RemovedFeatureDiameter'),
            (e[(e.DistanceRangeFromDefaultCamera = 4)] =
              'DistanceRangeFromDefaultCamera');
        })(h || (h = {})),
        (function (e) {
          (e[(e.Hole = 0)] = 'Hole'), (e[(e.Leaf = 1)] = 'Leaf');
        })(m || (m = {}));
      const x = { transform: L, destroy: C };
    },
  },
]);
