'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [5329],
  {
    25329: (e, t, a) => {
      a.r(t), a.d(t, { createSymbolSchema: () => i });
      var l = a(66039),
        r = a(63523);
      function n(e) {
        var t;
        return 'line-marker' === e.type
          ? {
              type: 'line-marker',
              color: null == (t = e.color) ? void 0 : t.toJSON(),
              placement: e.placement,
              style: e.style,
            }
          : e.constructor.fromJSON(e.toJSON()).toJSON();
      }
      function s(e) {
        return hydrateKey(e);
      }
      function i(e, t, a) {
        if (!e) return null;
        switch (e.type) {
          case 'simple-fill':
          case 'picture-fill':
            return o(e, t, a);
          case 'simple-marker':
          case 'picture-marker':
            return h(e, t, a);
          case 'simple-line':
            return u(e, t, a);
          case 'text':
            return m(e, t, a);
          case 'label':
            return c(e, t, a);
          case 'cim':
            return {
              type: 'cim',
              rendererKey: t.vvFlags,
              data: e.data,
              maxVVSize: t.maxVVSize,
            };
          case 'CIMSymbolReference':
            return {
              type: 'cim',
              rendererKey: t.vvFlags,
              data: e,
              maxVVSize: t.maxVVSize,
            };
          case 'web-style':
            return {
              ...n(e),
              type: 'web-style',
              hash: e.hash(),
              rendererKey: t.vvFlags,
              maxVVSize: t.maxVVSize,
            };
          default:
            throw new Error(`symbol not supported ${e.type}`);
        }
      }
      function c(e, t, a) {
        const n = e.toJSON(),
          i = (0, r.jj)(l.LW.LABEL, { ...t, placement: n.labelPlacement });
        return {
          materialKey: a ? s(i) : i,
          hash: e.hash(),
          ...n,
          labelPlacement: n.labelPlacement,
        };
      }
      function o(e, t, a) {
        const i = t.supportsOutlineFills,
          c = (0, r.jj)(l.LW.FILL, { ...t, isOutlinedFill: i }),
          o = a ? s(c) : c,
          u = e.clone(),
          h = u.outline;
        t.supportsOutlineFills || (u.outline = null);
        const m = {
          materialKey: o,
          hash: u.hash(),
          isOutlinedFill: !!t.supportsOutlineFills,
          ...n(u),
        };
        if (t.supportsOutlineFills) return m;
        const p = [];
        if ((p.push(m), h)) {
          const e = (0, r.jj)(l.LW.LINE, { ...t, isOutline: !0 }),
            i = { materialKey: a ? s(e) : e, hash: h.hash(), ...n(h) };
          p.push(i);
        }
        return {
          type: 'composite-symbol',
          layers: p,
          hash: p.reduce((e, t) => t.hash + e, ''),
        };
      }
      function u(e, t, a) {
        const i = (0, r.jj)(l.LW.LINE, t),
          c = a ? s(i) : i,
          o = e.clone(),
          u = o.marker;
        o.marker = null;
        const h = [];
        if ((h.push({ materialKey: c, hash: o.hash(), ...n(o) }), u)) {
          var m;
          const e = (0, r.jj)(l.LW.MARKER, t),
            i = a ? s(e) : e;
          (u.color = null != (m = u.color) ? m : o.color),
            h.push({
              materialKey: i,
              hash: u.hash(),
              lineWidth: o.width,
              ...n(u),
            });
        }
        return {
          type: 'composite-symbol',
          layers: h,
          hash: h.reduce((e, t) => t.hash + e, ''),
        };
      }
      function h(e, t, a) {
        const i = (0, r.jj)(l.LW.MARKER, t),
          c = a ? s(i) : i,
          o = n(e);
        return {
          materialKey: c,
          hash: e.hash(),
          ...o,
          angle: e.angle,
          maxVVSize: t.maxVVSize,
        };
      }
      function m(e, t, a) {
        const i = (0, r.jj)(l.LW.TEXT, t),
          c = a ? s(i) : i,
          o = n(e);
        return {
          materialKey: c,
          hash: e.hash(),
          ...o,
          angle: e.angle,
          maxVVSize: t.maxVVSize,
        };
      }
    },
  },
]);
