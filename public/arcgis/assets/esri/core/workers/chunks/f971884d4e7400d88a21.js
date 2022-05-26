'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [4499],
  {
    32243: (e, n, t) => {
      function o(e) {
        return (
          (e = e || globalThis.location.hostname),
          m.some((n) => {
            var t;
            return null != (null == (t = e) ? void 0 : t.match(n));
          })
        );
      }
      function s(e, n) {
        return e && (n = n || globalThis.location.hostname)
          ? null != n.match(l) || null != n.match(i)
            ? e.replace('static.arcgis.com', 'staticdev.arcgis.com')
            : null != n.match(r) || null != n.match(a)
            ? e.replace('static.arcgis.com', 'staticqa.arcgis.com')
            : e
          : e;
      }
      t.d(n, { pJ: () => s, XO: () => o });
      const l = /^devext.arcgis.com$/,
        r = /^qaext.arcgis.com$/,
        i = /^[\w-]*\.mapsdevext.arcgis.com$/,
        a = /^[\w-]*\.mapsqa.arcgis.com$/,
        m = [
          /^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,
          l,
          r,
          /^jsapps.esri.com$/,
          i,
          a,
        ];
    },
    21878: (e, n, t) => {
      t.d(n, { im: () => Z, cW: () => h, vX: () => w });
      var o = t(78223),
        s = t(20102),
        l = t(70586),
        r = t(87223),
        i = t(59390),
        a = t(42143),
        m = t(4095),
        c = t(98587),
        u = t(77987),
        y = t(37898),
        b = t(20256),
        p = t(86114),
        f = t(78724),
        d = t(20825);
      const g = { retainId: !1, ignoreDrivers: !1, hasLabelingContext: !0 };
      function h(e, n, t, o) {
        const s = S(e, {}, { context: o, isLabelSymbol: !1 });
        (0, l.pC)(s) && (n[t] = s);
      }
      function w(e, n, t, o) {
        const s = S(e, {}, { context: o, isLabelSymbol: !0 });
        (0, l.pC)(s) && (n[t] = s);
      }
      function S(e, n, t) {
        if ((0, l.Wi)(e)) return null;
        const { context: h, isLabelSymbol: w } = t;
        if (
          h &&
          'web-scene' === h.origin &&
          !(e instanceof r.Z) &&
          !(e instanceof i.Z)
        ) {
          const t = (function (e, n = g) {
            if (!e) return { symbol: null };
            const {
              retainId: t = g.retainId,
              ignoreDrivers: l = g.ignoreDrivers,
              hasLabelingContext: r = g.hasLabelingContext,
              retainCIM: h = g.retainCIM,
            } = n;
            let w;
            if ((0, o.dU)(e) || e instanceof i.Z) w = e.clone();
            else if ('cim' === e.type) {
              var S, Z;
              const n =
                null == (S = e.data) || null == (Z = S.symbol)
                  ? void 0
                  : Z.type;
              if ('CIMPointSymbol' !== n)
                return {
                  error: new s.Z(
                    'symbol-conversion:unsupported-cim-symbol',
                    `CIM symbol of type '${
                      n || 'unknown'
                    }' is unsupported in 3D`,
                    { symbol: e },
                  ),
                };
              w = h ? e.clone() : a.Z.fromCIMSymbol(e);
            } else if (e instanceof m.Z) w = c.Z.fromSimpleLineSymbol(e);
            else if (e instanceof u.Z) w = a.Z.fromSimpleMarkerSymbol(e);
            else if (e instanceof y.Z) w = a.Z.fromPictureMarkerSymbol(e);
            else if (e instanceof b.Z) w = p.Z.fromSimpleFillSymbol(e);
            else {
              if (!(e instanceof f.Z))
                return {
                  error: new s.Z(
                    'symbol-conversion:unsupported-2d-symbol',
                    `2D symbol of type '${
                      e.type || e.declaredClass
                    }' is unsupported in 3D`,
                    { symbol: e },
                  ),
                };
              w = r ? d.Z.fromTextSymbol(e) : a.Z.fromTextSymbol(e);
            }
            if ((t && 'cim' !== w.type && (w.id = e.id), l && (0, o.dU)(w)))
              for (let e = 0; e < w.symbolLayers.length; ++e)
                w.symbolLayers.getItemAt(e)._ignoreDrivers = !0;
            return { symbol: w };
          })(e, { retainCIM: !0, hasLabelingContext: w });
          return (0, l.pC)(t.symbol)
            ? t.symbol.write(n, h)
            : (h.messages &&
                h.messages.push(
                  new s.Z(
                    'symbol:unsupported',
                    `Symbols of type '${e.declaredClass}' are not supported in scenes. Use 3D symbology instead when working with WebScene and SceneView`,
                    { symbol: e, context: h, error: t.error },
                  ),
                ),
              null);
        }
        return h && 'web-map' === h.origin && 'web-style' === e.type
          ? (h.messages &&
              h.messages.push(
                new s.Z(
                  'symbol:unsupported',
                  `Symbols of type '${e.declaredClass}' are not supported in webmaps. Use CIMSymbol instead when working with WebMap in MapView.`,
                  { symbol: e, context: h },
                ),
              ),
            null)
          : e.write(n, h);
      }
      function Z(e, n) {
        return (0, o.S9)(e, null, n);
      }
    },
    74499: (e, n, t) => {
      t.r(n),
        t.d(n, {
          fetchSymbolFromStyle: () => p,
          resolveWebStyleSymbol: () => b,
        });
      var o = t(78223),
        s = t(32243),
        l = t(20102),
        r = t(17452),
        i = t(65587),
        a = t(25929),
        m = t(21878),
        c = t(71144),
        u = t(27391),
        y = t(23203);
      function b(e, n, t, o) {
        return e.name
          ? e.styleName && 'Esri2DPointSymbolsStyle' === e.styleName
            ? (function (e, n, t) {
                const o = u.wm.replace(/\{SymbolName\}/gi, e.name);
                return (0, u.EJ)(o, t).then((e) => {
                  const t = (0, u.KV)(e.data);
                  return (0, m.im)(t, {
                    portal: n.portal,
                    url: (0, r.mN)((0, r.Yd)(o)),
                    origin: 'portal-item',
                  });
                });
              })(e, n, o)
            : (0, u.n2)(e, n, o).then((s) => p(s, e.name, n, t, o))
          : Promise.reject(
              new l.Z(
                'symbolstyleutils:style-symbol-reference-name-missing',
                'Missing name in style symbol reference',
              ),
            );
      }
      function p(e, n, t, b, p) {
        const f = e.data,
          d = {
            portal: (t && t.portal) || i.Z.getDefault(),
            url: (0, r.mN)(e.baseUrl),
            origin: 'portal-item',
          },
          g = f.items.find((e) => e.name === n);
        if (!g) {
          const e = `The symbol name '${n}' could not be found`;
          return Promise.reject(
            new l.Z('symbolstyleutils:symbol-name-not-found', e, {
              symbolName: n,
            }),
          );
        }
        let h = (0, a.f)((0, u.v9)(g, b), d),
          w = g.thumbnail && g.thumbnail.href;
        const S = g.thumbnail && g.thumbnail.imageData;
        (0, s.XO)() && ((h = (0, s.pJ)(h)), (w = (0, s.pJ)(w)));
        const Z = {
          portal: t.portal,
          url: (0, r.mN)((0, r.Yd)(h)),
          origin: 'portal-item',
        };
        return (0, u.EJ)(h, p).then((s) => {
          const l = 'cimRef' === b ? (0, u.KV)(s.data) : s.data,
            r = (0, m.im)(l, Z);
          if (r && (0, o.dU)(r)) {
            if (w) {
              const e = (0, a.f)(w, d);
              r.thumbnail = new y.p({ url: e });
            } else
              S &&
                (r.thumbnail = new y.p({ url: `data:image/png;base64,${S}` }));
            e.styleUrl
              ? (r.styleOrigin = new c.Z({
                  portal: t.portal,
                  styleUrl: e.styleUrl,
                  name: n,
                }))
              : e.styleName &&
                (r.styleOrigin = new c.Z({
                  portal: t.portal,
                  styleName: e.styleName,
                  name: n,
                }));
          }
          return r;
        });
      }
    },
  },
]);
