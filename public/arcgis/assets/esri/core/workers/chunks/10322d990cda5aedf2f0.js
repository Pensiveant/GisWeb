'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [3172],
  {
    3172: (e, t, r) => {
      r.r(t), r.d(t, { default: () => p });
      var n = r(68773),
        s = r(40330),
        o = r(20102),
        a = r(80442),
        i = r(22974),
        l = r(70586),
        u = r(95330),
        c = r(17452),
        d = r(71058),
        h = r(85958);
      async function p(e, t) {
        var i;
        const h = (0, c.HK)(e),
          y = (0, c.jc)(e);
        y || h || (e = (0, c.Fv)(e));
        const g = { url: e, requestOptions: { ...(0, l.Wg)(t) } };
        let b = (0, c.oh)(e);
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
                r = v('request:interceptor', e, t);
              }
              if (
                ((n instanceof Error || n instanceof o.Z) &&
                  (r = v('request:interceptor', n, t)),
                r)
              )
                throw (e.error && e.error(r), r);
              return n;
            }
          })(b, g);
          if (null != e)
            return {
              data: e,
              getHeader: k,
              requestOptions: g.requestOptions,
              url: g.url,
            };
          b.after || b.error || (b = null);
        }
        if (((e = g.url), 'image' === (t = g.requestOptions).responseType)) {
          if ((0, a.Z)('host-webworker') || (0, a.Z)('host-node'))
            throw v(
              'request:invalid-parameters',
              new Error(
                "responseType 'image' is not supported in Web Workers or Node environment",
              ),
              g,
            );
        } else if (h)
          throw v(
            'request:invalid-parameters',
            new Error(
              'Data URLs are not supported for responseType = ' +
                t.responseType,
            ),
            g,
          );
        if ('head' === t.method) {
          if (t.body)
            throw v(
              'request:invalid-parameters',
              new Error("body parameter cannot be set when method is 'head'"),
              g,
            );
          if (h || y)
            throw v(
              'request:invalid-parameters',
              new Error(
                "data and blob URLs are not supported for method 'head'",
              ),
              g,
            );
        }
        if (
          (await (async function () {
            (0, a.Z)('host-webworker')
              ? f || (f = await r.e(9884).then(r.bind(r, 29884)))
              : p._abortableFetch ||
                (p._abortableFetch = globalThis.fetch.bind(globalThis));
          })(),
          f)
        )
          return f.execute(e, t);
        const q = new AbortController();
        (0, u.fu)(t, () => q.abort());
        const T = {
            controller: q,
            credential: null,
            credentialToken: null,
            fetchOptions: null,
            hasToken: !1,
            interceptor: b,
            params: g,
            redoRequest: !1,
            useIdentity: m.useIdentity,
            useProxy: !1,
            useSSL: !1,
            withCredentials: !1,
          },
          x = await (async function (e) {
            var t, r;
            let o, a;
            await (async function (e) {
              const t = e.params.url,
                r = e.params.requestOptions,
                o = e.controller.signal,
                a = r.body;
              let i = null,
                l = null,
                c = null;
              if (
                (w &&
                  'HTMLFormElement' in globalThis &&
                  (a instanceof FormData
                    ? (i = a)
                    : a instanceof HTMLFormElement &&
                      ((l = a), (i = new FormData(l)))),
                'string' == typeof a && (c = a),
                (e.fetchOptions = {
                  cache:
                    r.cacheBust && !p._abortableFetch.polyfill
                      ? 'no-cache'
                      : 'default',
                  credentials: 'same-origin',
                  headers: r.headers || {},
                  method: 'head' === r.method ? 'HEAD' : 'GET',
                  mode: 'cors',
                  redirect: 'follow',
                  signal: o,
                }),
                (i || c) && (e.fetchOptions.body = i || c),
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
                  !E(t) &&
                  !(0, u.Hc)(o))
              ) {
                let n;
                'immediate' === r.authMode
                  ? (await O(),
                    (n = await s.id.getCredential(t, { signal: o })),
                    (e.credential = n))
                  : 'no-prompt' === r.authMode
                  ? (await O(),
                    (n = await s.id
                      .getCredential(t, { prompt: !1, signal: o })
                      .catch(() => {})),
                    (e.credential = n))
                  : s.id && (n = s.id.findCredential(t)),
                  n && ((e.credentialToken = n.token), (e.useSSL = !!n.ssl));
              }
            })(e);
            try {
              do {
                [o, a] = await S(e);
              } while (!(await C(e, o, a)));
            } catch (t) {
              const r = v('request:server', t, e.params, o);
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
              !(0, c.kl)(i)
            ) {
              const e = (0, c.P$)(i, !0);
              e && m.trustedServers.push(e);
            }
            const l = e.credential;
            if (l && s.id) {
              const e = s.id.findServerInfo(l.server);
              let t = e && e.owningSystemUrl;
              if (t) {
                t = t.replace(/\/?$/, '/sharing');
                const e = s.id.findCredential(t, l.userId);
                e &&
                  -1 === s.id._getIdenticalSvcIdx(t, e) &&
                  e.resources.unshift(t);
              }
            }
            return {
              data: a,
              getHeader: o ? (e) => o.headers.get(e) : k,
              requestOptions: e.params.requestOptions,
              ssl: e.useSSL,
              url: e.params.url,
            };
          })(T);
        return null == (i = b) || null == i.after || i.after(x), x;
      }
      let f;
      const m = n.Z.request,
        w = 'FormData' in globalThis,
        y = [499, 498, 403, 401],
        g = ['COM_0056', 'COM_0057', 'SB_0008'],
        b = [
          /\/arcgis\/tokens/i,
          /\/sharing(\/rest)?\/generatetoken/i,
          /\/rest\/info/i,
        ],
        k = () => null,
        q = Symbol();
      function T(e) {
        const t = (0, c.P$)(e);
        return (
          !t ||
          t.endsWith('.arcgis.com') ||
          p._corsServers.includes(t) ||
          (0, c.kl)(t)
        );
      }
      function v(e, t, r, n) {
        let s = 'Error';
        const a = {
          url: r.url,
          requestOptions: r.requestOptions,
          getHeader: k,
          ssl: !1,
        };
        if (t instanceof o.Z)
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
            o = t.message;
          o && (s = o),
            e && (a.getHeader = e),
            (a.httpStatus =
              (null != t.httpCode ? t.httpCode : t.code) || r || 0),
            (a.subCode = t.subcode),
            (a.messageCode = t.messageCode),
            'string' == typeof t.details
              ? (a.messages = [t.details])
              : (a.messages = t.details),
            (a.raw = q in t ? t[q] : t);
        }
        return (0, u.D_)(t) ? (0, u.zE)() : new o.Z(e, s, a);
      }
      async function O() {
        s.id ||
          (await Promise.all([r.e(280), r.e(1400), r.e(7913)]).then(
            r.bind(r, 33107),
          ));
      }
      function E(e) {
        return b.some((t) => t.test(e));
      }
      async function S(e) {
        let t = e.params.url;
        const r = e.params.requestOptions,
          n = e.fetchOptions,
          o = (0, c.jc)(t) || (0, c.HK)(t),
          i = r.responseType || 'json',
          l = o ? 0 : null != r.timeout ? r.timeout : m.timeout;
        let d = !1;
        if (!o) {
          e.useSSL && (t = (0, c.hO)(t)),
            r.cacheBust &&
              'default' === n.cache &&
              (t = (0, c.ZN)(t, 'request.preventCache', Date.now()));
          let o = { ...r.query };
          e.credentialToken && (o.token = e.credentialToken);
          let i = (0, c.B7)(o);
          (0, a.Z)('esri-url-encodes-apostrophe') &&
            (i = i.replace(/'/g, '%27'));
          const l = t.length + 1 + i.length;
          let u;
          d =
            'delete' === r.method ||
            'post' === r.method ||
            'put' === r.method ||
            !!r.body ||
            l > m.maxUrlLength;
          const h = r.useProxy || !!(0, c.ed)(t);
          if (h) {
            const e = (0, c.b7)(t);
            (u = e.path),
              !d && u.length + 1 + l > m.maxUrlLength && (d = !0),
              e.query && (o = { ...e.query, ...o });
          }
          if ('HEAD' === n.method && (d || h)) {
            if (d) {
              if (l > m.maxUrlLength)
                throw v(
                  'request:invalid-parameters',
                  new Error('URL exceeds maximum length'),
                  e.params,
                );
              throw v(
                'request:invalid-parameters',
                new Error("cannot use POST request when method is 'head'"),
                e.params,
              );
            }
            if (h)
              throw v(
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
                  ? (t = (0, c.fl)(t, o))
                  : ((n.body = (0, c.B7)(o)),
                    (n.headers['Content-Type'] =
                      'application/x-www-form-urlencoded')))
              : (t = (0, c.fl)(t, o)),
            h && ((e.useProxy = !0), (t = `${u}?${t}`)),
            o.token && w && n.body instanceof FormData)
          ) {
            const e = n.body;
            e.set ? e.set('token', o.token) : e.append('token', o.token);
          }
          if (r.hasOwnProperty('withCredentials'))
            e.withCredentials = r.withCredentials;
          else if (!(0, c.D6)(t, (0, c.TI)()))
            if ((0, c.kl)(t)) e.withCredentials = !0;
            else if (s.id) {
              const r = s.id.findServerInfo(t);
              r && r.webTierAuth && (e.withCredentials = !0);
            }
          e.withCredentials && (n.credentials = 'include');
        }
        let h,
          f,
          y = 0,
          g = !1;
        l > 0 &&
          (y = setTimeout(() => {
            (g = !0), e.controller.abort();
          }, l));
        try {
          if ('native-request-init' === r.responseType) (f = n), (f.url = t);
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
            (!o && !e.useProxy && m.proxyUrl && !T(t))
          ) {
            if (
              ((h = await p._abortableFetch(t, n)),
              e.useProxy ||
                (function (e) {
                  const t = (0, c.P$)(e);
                  t && !p._corsServers.includes(t) && p._corsServers.push(t);
                })(t),
              'native' === r.responseType)
            )
              f = h;
            else if ('HEAD' !== n.method)
              if (h.ok) {
                switch (i) {
                  case 'array-buffer':
                    f = await h.arrayBuffer();
                    break;
                  case 'blob':
                  case 'image':
                    f = await h.blob();
                    break;
                  default:
                    f = await h.text();
                }
                if (
                  (y && (clearTimeout(y), (y = 0)),
                  'json' === i || 'xml' === i || 'document' === i)
                )
                  if (f)
                    switch (i) {
                      case 'json':
                        f = JSON.parse(f);
                        break;
                      case 'xml':
                        f = x(f, 'application/xml');
                        break;
                      case 'document':
                        f = x(f, 'text/html');
                    }
                  else f = null;
                if (f) {
                  if ('array-buffer' === i || 'blob' === i) {
                    const e = h.headers.get('Content-Type');
                    if (
                      /application\/json|text\/plain/i.test(e) &&
                      f['blob' === i ? 'size' : 'byteLength'] <= 750
                    )
                      try {
                        const e = await new Response(f).json();
                        e.error && (f = e);
                      } catch {}
                  }
                  'image' === i &&
                    f instanceof Blob &&
                    (f = await L(URL.createObjectURL(f), e, !0));
                }
              } else f = await h.text();
          } else f = await L(t, e);
        } catch (n) {
          if ('AbortError' === n.name) {
            if (g) throw new Error('Timeout exceeded');
            throw (0, u.zE)('Request canceled');
          }
          if (
            !(!h && n instanceof TypeError && m.proxyUrl) ||
            r.body ||
            'delete' === r.method ||
            'head' === r.method ||
            'post' === r.method ||
            'put' === r.method ||
            e.useProxy ||
            T(t)
          )
            throw n;
          (e.redoRequest = !0),
            (0, c.tD)({ proxyUrl: m.proxyUrl, urlPrefix: (0, c.P$)(t) });
        } finally {
          y && clearTimeout(y);
        }
        return [h, f];
      }
      function x(e, t) {
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
        let o, a, i, l;
        if (!t.ok)
          throw (
            ((o = new Error(`Unable to load ${t.url} status: ${t.status}`)),
            (o[q] = r),
            o)
          );
        null != r && r.error && (o = r.error),
          o &&
            ((a = Number(o.code)),
            (i = o.hasOwnProperty('subcode') ? Number(o.subcode) : null),
            (l = o.messageCode),
            (l = l && l.toUpperCase()));
        const u = n.authMode;
        if (
          403 === a &&
          (4 === i ||
            (o.message &&
              o.message.toLowerCase().indexOf('ssl') > -1 &&
              -1 === o.message.toLowerCase().indexOf('permission')))
        ) {
          if (!e.useSSL) return (e.useSSL = !0), !1;
        } else if (
          !e.hasToken &&
          e.useIdentity &&
          ('no-prompt' !== u || 498 === a) &&
          -1 !== y.indexOf(a) &&
          !E(e.params.url) &&
          (403 !== a ||
            (-1 === g.indexOf(l) &&
              (null == i || (2 === i && e.credentialToken))))
        ) {
          await O();
          try {
            const t = await s.id.getCredential(e.params.url, {
              error: v('request:server', o, e.params),
              prompt: 'no-prompt' !== u,
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
            if ('no-prompt' === u)
              return (e.credential = null), (e.credentialToken = null), !1;
            o = t;
          }
        }
        if (o) throw o;
        return !0;
      }
      function L(e, t, r = !1) {
        const n = t.controller.signal,
          s = new Image();
        return (
          t.withCredentials
            ? (s.crossOrigin = 'use-credentials')
            : (s.crossOrigin = 'anonymous'),
          (s.alt = ''),
          (s.src = e),
          (0, h.f)(s, e, r, n)
        );
      }
      (p._abortableFetch = null),
        (p._corsServers = [
          'https://server.arcgisonline.com',
          'https://services.arcgisonline.com',
        ]);
    },
    71058: (e, t, r) => {
      r.d(t, { r: () => o });
      var n = r(17452);
      const s = [
        'elevation3d.arcgis.com',
        'js.arcgis.com',
        'jsdev.arcgis.com',
        'jsqa.arcgis.com',
        'static.arcgis.com',
      ];
      function o(e) {
        const t = (0, n.P$)(e, !0);
        return (
          t &&
          t.endsWith('.arcgis.com') &&
          !s.includes(t) &&
          !e.endsWith('/sharing/rest/generateToken')
        );
      }
    },
    85958: (e, t, r) => {
      r.d(t, { f: () => a });
      var n = r(80442),
        s = r(70586),
        o = r(95330);
      function a(e, t, r = !1, a) {
        return new Promise((l, u) => {
          if ((0, o.Hc)(a)) return void u(i());
          let c = () => {
              p(), u(new Error(`Unable to load ${t}`));
            },
            d = () => {
              const t = e;
              p(), l(t);
            },
            h = () => {
              if (!e) return;
              const t = e;
              p(), (t.src = ''), u(i());
            };
          const p = () => {
            (0, n.Z)('esri-image-decode') ||
              (e.removeEventListener('error', c),
              e.removeEventListener('load', d)),
              (c = null),
              (d = null),
              (e = null),
              (0, s.pC)(a) && a.removeEventListener('abort', h),
              (h = null),
              r && URL.revokeObjectURL(t);
          };
          (0, s.pC)(a) && a.addEventListener('abort', h),
            (0, n.Z)('esri-image-decode')
              ? e.decode().then(d, c)
              : (e.addEventListener('error', c), e.addEventListener('load', d));
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
