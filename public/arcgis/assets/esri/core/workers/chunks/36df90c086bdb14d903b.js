'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [7319],
  {
    6352: (t, e, o) => {
      o.d(e, { a: () => c });
      var r,
        s = o(43697),
        i = o(22303),
        l = o(96674),
        n = o(22974),
        a = o(5600),
        p = (o(75215), o(52011)),
        y = o(37308);
      let h = (r = class extends l.wq {
        constructor() {
          super(...arguments), (this.color = new i.Z('white'));
        }
        clone() {
          return new r({ color: (0, n.d9)(this.color) });
        }
      });
      (0, s._)([(0, a.Cb)(y.a)], h.prototype, 'color', void 0),
        (h = r =
          (0, s._)([(0, p.j)('esri.symbols.callouts.LineCallout3DBorder')], h));
      const c = h;
      Object.freeze({
        __proto__: null,
        get LineCallout3DBorder() {
          return h;
        },
        default: c,
      });
    },
    2368: (t, e, o) => {
      o.d(e, { J: () => h });
      var r = o(43697),
        s = o(15923),
        i = (o(80442), o(22974)),
        l = o(92604),
        n = o(70586),
        a = o(31263),
        p = o(1153),
        y = o(52011);
      l.Z.getLogger('esri.core.Clonable');
      const h = (t) => {
        let e = class extends t {
          clone() {
            const t = (0, n.s3)(
                (0, p.vw)(this),
                'unable to clone instance of non-accessor class',
              ),
              e = t.metadatas,
              o = t.store,
              r = {},
              s = new Map();
            for (const t in e) {
              const l = e[t],
                n = null == o ? void 0 : o.originOf(t),
                p = l.clonable;
              if (
                l.readOnly ||
                !1 === p ||
                (n !== a.s3.USER &&
                  n !== a.s3.DEFAULTS &&
                  n !== a.s3.WEB_MAP &&
                  n !== a.s3.WEB_SCENE)
              )
                continue;
              const y = this[t];
              let h = null;
              (h =
                'function' == typeof p
                  ? p(y)
                  : 'reference' === p
                  ? y
                  : (0, i.Vo)(y)),
                (null != y && null == h) ||
                  (n === a.s3.DEFAULTS ? s.set(t, h) : (r[t] = h));
            }
            const l = new (0, Object.getPrototypeOf(this).constructor)(r);
            if (s.size) {
              var y;
              const t = null == (y = (0, p.vw)(l)) ? void 0 : y.store;
              if (t) for (const [e, o] of s) t.set(e, o, a.s3.DEFAULTS);
            }
            return l;
          }
        };
        return (e = (0, r._)([(0, y.j)('esri.core.Clonable')], e)), e;
      };
      let c = class extends h(s.Z) {};
      c = (0, r._)([(0, y.j)('esri.core.Clonable')], c);
    },
    10699: (t, e, o) => {
      o.d(e, { I: () => l });
      var r = o(43697),
        s = o(52011);
      let i = 0;
      const l = (t) => {
        let e = class extends t {
          constructor(...t) {
            super(...t),
              Object.defineProperty(this, 'uid', {
                writable: !1,
                configurable: !1,
                value: Date.now().toString(16) + '-object-' + i++,
              });
          }
        };
        return (e = (0, r._)([(0, s.j)('esri.core.Identifiable')], e)), e;
      };
      let n = class extends l(class {}) {};
      n = (0, r._)([(0, s.j)('esri.core.Identifiable')], n);
    },
    70921: (t, e, o) => {
      o.d(e, { R: () => i, Z: () => s });
      var r = o(80539);
      function s(t, e, o = r.Z) {
        return (
          e || (e = new o()),
          e === t ||
            (e.removeAll(),
            (s = t) &&
            (Array.isArray(s) || ('items' in s && Array.isArray(s.items)))
              ? e.addMany(t)
              : t && e.add(t)),
          e
        );
        var s;
      }
      function i(t) {
        return t;
      }
    },
    78223: (t, e, o) => {
      o.d(e, {
        se: () => I,
        cT: () => P,
        dU: () => A,
        S9: () => W,
        LB: () => J,
        AH: () => T,
        yK: () => U,
        S6: () => H,
        QT: () => q,
        f_: () => F,
      });
      var r,
        s = o(75215),
        i = o(63213),
        l = o(17386),
        n = (o(38445), o(21218)),
        a = o(95191),
        p = (o(31134), o(50575), o(20825)),
        y = o(98587),
        h = (o(38128), o(40908), o(43697)),
        c = o(80539),
        d = o(22974),
        u = o(5600),
        b = o(36030),
        m = o(52011),
        w = o(87223);
      const v = c.Z.ofType({ base: null, key: 'type', typeMap: { fill: a.Z } });
      let f = (r = class extends w.Z {
        constructor(t) {
          super(t), (this.symbolLayers = new v()), (this.type = 'mesh-3d');
        }
        clone() {
          return new r({
            styleOrigin: (0, d.d9)(this.styleOrigin),
            symbolLayers: (0, d.d9)(this.symbolLayers),
            thumbnail: (0, d.d9)(this.thumbnail),
          });
        }
      });
      (0, h._)([(0, u.Cb)({ type: v })], f.prototype, 'symbolLayers', void 0),
        (0, h._)(
          [(0, b.J)({ MeshSymbol3D: 'mesh-3d' }, { readOnly: !0 })],
          f.prototype,
          'type',
          void 0,
        ),
        (f = r = (0, h._)([(0, m.j)('esri.symbols.MeshSymbol3D')], f));
      const g = f;
      o(17143), o(96742);
      var _,
        C = o(62357),
        S = o(94075);
      let j = (_ = class extends n.Z {
        constructor(...t) {
          super(...t),
            (this.type = 'picture-fill'),
            (this.url = null),
            (this.xscale = 1),
            (this.yscale = 1),
            (this.width = 12),
            (this.height = 12),
            (this.xoffset = 0),
            (this.yoffset = 0),
            (this.source = null);
        }
        normalizeCtorArgs(t, e, o, r) {
          if (t && 'string' != typeof t && null == t.imageData) return t;
          const s = {};
          return (
            t && (s.url = t),
            e && (s.outline = e),
            null != o && (s.width = (0, C.t_)(o)),
            null != r && (s.height = (0, C.t_)(r)),
            s
          );
        }
        clone() {
          const t = new _({
            color: (0, d.d9)(this.color),
            height: this.height,
            outline: this.outline && this.outline.clone(),
            url: this.url,
            width: this.width,
            xoffset: this.xoffset,
            xscale: this.xscale,
            yoffset: this.yoffset,
            yscale: this.yscale,
          });
          return t._set('source', (0, d.d9)(this.source)), t;
        }
        hash() {
          var t;
          return `${super.hash()}.${
            null == (t = this.color) ? void 0 : t.hash()
          }.${this.height}.${this.url}.${this.width}.${this.xoffset}.${
            this.xscale
          }.${this.yoffset}.${this.yscale}`;
        }
      });
      (0, h._)(
        [(0, b.J)({ esriPFS: 'picture-fill' }, { readOnly: !0 })],
        j.prototype,
        'type',
        void 0,
      ),
        (0, h._)([(0, u.Cb)(S.KA)], j.prototype, 'url', void 0),
        (0, h._)(
          [(0, u.Cb)({ type: Number, json: { write: !0 } })],
          j.prototype,
          'xscale',
          void 0,
        ),
        (0, h._)(
          [(0, u.Cb)({ type: Number, json: { write: !0 } })],
          j.prototype,
          'yscale',
          void 0,
        ),
        (0, h._)(
          [(0, u.Cb)({ type: Number, cast: C.t_, json: { write: !0 } })],
          j.prototype,
          'width',
          void 0,
        ),
        (0, h._)(
          [(0, u.Cb)({ type: Number, cast: C.t_, json: { write: !0 } })],
          j.prototype,
          'height',
          void 0,
        ),
        (0, h._)(
          [(0, u.Cb)({ type: Number, cast: C.t_, json: { write: !0 } })],
          j.prototype,
          'xoffset',
          void 0,
        ),
        (0, h._)(
          [(0, u.Cb)({ type: Number, cast: C.t_, json: { write: !0 } })],
          j.prototype,
          'yoffset',
          void 0,
        ),
        (0, h._)([(0, u.Cb)(S.Ds)], j.prototype, 'source', void 0),
        (j = _ = (0, h._)([(0, m.j)('esri.symbols.PictureFillSymbol')], j));
      const Z = j;
      var x = o(37898),
        L = o(42143),
        z = o(86114),
        k = o(20256),
        O = o(4095),
        D = o(77987),
        N = o(89164),
        M = (o(95868), o(78724)),
        $ = (o(2283), o(44398), o(59390));
      function P(t) {
        if (!t) return !1;
        switch (t.type) {
          case 'picture-fill':
          case 'picture-marker':
          case 'simple-fill':
          case 'simple-line':
          case 'simple-marker':
          case 'text':
          case 'cim':
            return !0;
          default:
            return !1;
        }
      }
      function A(t) {
        if (!t) return !1;
        switch (t.type) {
          case 'label-3d':
          case 'line-3d':
          case 'mesh-3d':
          case 'point-3d':
          case 'polygon-3d':
            return !0;
          default:
            return !1;
        }
      }
      o(69496), o(6352);
      const J = {
          base: N.Z,
          key: 'type',
          typeMap: {
            'simple-fill': k.Z,
            'picture-fill': Z,
            'picture-marker': x.Z,
            'simple-line': O.Z,
            'simple-marker': D.Z,
            text: M.Z,
            'label-3d': p.Z,
            'line-3d': y.Z,
            'mesh-3d': g,
            'point-3d': L.Z,
            'polygon-3d': z.Z,
            'web-style': $.Z,
            cim: l.Z,
          },
          errorContext: 'symbol',
        },
        T = {
          base: N.Z,
          key: 'type',
          typeMap: {
            'picture-marker': x.Z,
            'simple-marker': D.Z,
            text: M.Z,
            'web-style': $.Z,
            cim: l.Z,
          },
          errorContext: 'symbol',
        },
        W = (0, i.d)({ types: J }),
        q = {
          base: N.Z,
          key: 'type',
          typeMap: {
            'simple-fill': k.Z,
            'picture-fill': Z,
            'picture-marker': x.Z,
            'simple-line': O.Z,
            'simple-marker': D.Z,
            text: M.Z,
            'line-3d': y.Z,
            'mesh-3d': g,
            'point-3d': L.Z,
            'polygon-3d': z.Z,
            'web-style': $.Z,
            cim: l.Z,
          },
          errorContext: 'symbol',
        },
        U = {
          base: N.Z,
          key: 'type',
          typeMap: { text: M.Z, 'label-3d': p.Z },
          errorContext: 'symbol',
        },
        F =
          (N.Z,
          p.Z,
          y.Z,
          L.Z,
          z.Z,
          $.Z,
          {
            base: N.Z,
            key: 'type',
            typeMap: {
              'line-3d': y.Z,
              'mesh-3d': g,
              'point-3d': L.Z,
              'polygon-3d': z.Z,
              'web-style': $.Z,
              cim: l.Z,
            },
            errorContext: 'symbol',
          }),
        H = {
          base: N.Z,
          key: 'type',
          typeMap: { 'label-3d': p.Z },
          errorContext: 'symbol',
        },
        I = (0, s.N7)(J);
    },
    17386: (t, e, o) => {
      o.d(e, { Z: () => b });
      var r,
        s = o(43697),
        i = o(22974),
        l = o(19153),
        n = o(5600),
        a = (o(75215), o(36030)),
        p = o(71715),
        y = o(52011),
        h = o(30556),
        c = o(35671),
        d = o(89164);
      let u = (r = class extends d.Z {
        constructor(t) {
          super(t), (this.data = null), (this.type = 'cim');
        }
        readData(t, e) {
          return e;
        }
        writeData(t, e) {
          if (t) for (const o in t) e[o] = t[o];
        }
        async collectRequiredFields(t, e) {
          if ('CIMSymbolReference' === this.data.type) {
            const o = this.data.primitiveOverrides;
            if (o) {
              const r = o.map((o) => {
                const r = o.valueExpressionInfo;
                return (0, c.io)(t, e, r.expression);
              });
              await Promise.all(r);
            }
          }
        }
        clone() {
          return new r({ data: (0, i.d9)(this.data) });
        }
        hash() {
          return (0, l.hP)(JSON.stringify(this.data)).toString();
        }
      });
      (0, s._)(
        [(0, n.Cb)({ json: { write: !1 } })],
        u.prototype,
        'color',
        void 0,
      ),
        (0, s._)(
          [(0, n.Cb)({ json: { write: !0 } })],
          u.prototype,
          'data',
          void 0,
        ),
        (0, s._)([(0, p.r)('data', ['symbol'])], u.prototype, 'readData', null),
        (0, s._)([(0, h.c)('data', {})], u.prototype, 'writeData', null),
        (0, s._)(
          [(0, a.J)({ CIMSymbolReference: 'cim' }, { readOnly: !0 })],
          u.prototype,
          'type',
          void 0,
        ),
        (u = r = (0, s._)([(0, y.j)('esri.symbols.CIMSymbol')], u));
      const b = u;
    },
    38445: (t, e, o) => {
      o.d(e, { Z: () => d });
      var r,
        s = o(43697),
        i = o(70586),
        l = o(5600),
        n = (o(67676), o(80442), o(75215), o(36030)),
        a = o(52011),
        p = o(95868),
        y = o(56332),
        h = o(52879);
      let c = (r = class extends p.Z {
        constructor(t) {
          super(t),
            (this.type = 'extrude'),
            (this.size = 1),
            (this.material = null),
            (this.castShadows = !0),
            (this.edges = null);
        }
        clone() {
          return new r({
            edges: this.edges && this.edges.clone(),
            enabled: this.enabled,
            material: (0, i.pC)(this.material) ? this.material.clone() : null,
            castShadows: this.castShadows,
            size: this.size,
          });
        }
      });
      (0, s._)(
        [(0, n.J)({ Extrude: 'extrude' }, { readOnly: !0 })],
        c.prototype,
        'type',
        void 0,
      ),
        (0, s._)(
          [
            (0, l.Cb)({
              type: Number,
              json: { write: { enabled: !0, isRequired: !0 } },
              nonNullable: !0,
            }),
          ],
          c.prototype,
          'size',
          void 0,
        ),
        (0, s._)(
          [(0, l.Cb)({ type: h.b, json: { write: !0 } })],
          c.prototype,
          'material',
          void 0,
        ),
        (0, s._)(
          [
            (0, l.Cb)({
              type: Boolean,
              nonNullable: !0,
              json: { write: !0, default: !0 },
            }),
          ],
          c.prototype,
          'castShadows',
          void 0,
        ),
        (0, s._)([(0, l.Cb)(y.Z)], c.prototype, 'edges', void 0),
        (c = r = (0, s._)([(0, a.j)('esri.symbols.ExtrudeSymbol3DLayer')], c));
      const d = c;
    },
    21218: (t, e, o) => {
      o.d(e, { Z: () => p });
      var r = o(43697),
        s = o(5600),
        i = (o(67676), o(80442), o(75215), o(52011)),
        l = o(4095),
        n = o(89164);
      let a = class extends n.Z {
        constructor(t) {
          super(t), (this.outline = null), (this.type = null);
        }
        hash() {
          return `${this.type}.${this.outline && this.outline.hash()}`;
        }
      };
      (0, r._)(
        [
          (0, s.Cb)({
            types: {
              key: 'type',
              base: null,
              defaultKeyValue: 'simple-line',
              typeMap: { 'simple-line': l.Z },
            },
            json: { default: null, write: !0 },
          }),
        ],
        a.prototype,
        'outline',
        void 0,
      ),
        (0, r._)(
          [(0, s.Cb)({ type: ['simple-fill', 'picture-fill'], readOnly: !0 })],
          a.prototype,
          'type',
          void 0,
        ),
        (a = (0, r._)([(0, i.j)('esri.symbols.FillSymbol')], a));
      const p = a;
    },
    95191: (t, e, o) => {
      o.d(e, { Z: () => x });
      var r,
        s = o(43697),
        i = o(70586),
        l = o(5600),
        n = (o(67676), o(80442), o(75215), o(36030)),
        a = o(52011),
        p = o(95868),
        y = o(56332),
        h = o(4618),
        c = o(74721),
        d = o(17495),
        u = o(50178),
        b = (o(92604), o(37697), o(52879));
      let m = (r = class extends b.b {
        constructor(t) {
          super(t), (this.colorMixMode = null);
        }
        clone() {
          const t = {
            color: (0, i.pC)(this.color) ? this.color.clone() : null,
            colorMixMode: this.colorMixMode,
          };
          return new r(t);
        }
      });
      (0, s._)(
        [(0, n.J)({ multiply: 'multiply', replace: 'replace', tint: 'tint' })],
        m.prototype,
        'colorMixMode',
        void 0,
      ),
        (m = r =
          (0, s._)([(0, a.j)('esri.symbols.support.Symbol3DFillMaterial')], m));
      var w,
        v = o(22303),
        f = o(96674),
        g = o(62357),
        _ = o(37308),
        C = o(45119);
      let S = (w = class extends f.wq {
        constructor(t) {
          super(t),
            (this.color = new v.Z([0, 0, 0, 1])),
            (this.size = (0, g.Wz)(1)),
            (this.pattern = null),
            (this.patternCap = 'butt');
        }
        clone() {
          const t = {
            color: (0, i.pC)(this.color) ? this.color.clone() : null,
            size: this.size,
            pattern: (0, i.pC)(this.pattern) ? this.pattern.clone() : null,
            patternCap: this.patternCap,
          };
          return new w(t);
        }
      });
      var j;
      (0, s._)([(0, l.Cb)(_.a)], S.prototype, 'color', void 0),
        (0, s._)([(0, l.Cb)(_.y)], S.prototype, 'size', void 0),
        (0, s._)([(0, l.Cb)(d.D)], S.prototype, 'pattern', void 0),
        (0, s._)(
          [
            (0, l.Cb)({
              type: C.Hc,
              json: {
                default: 'butt',
                write: {
                  overridePolicy() {
                    return { enabled: (0, i.pC)(this.pattern) };
                  },
                },
              },
            }),
          ],
          S.prototype,
          'patternCap',
          void 0,
        ),
        (S = w =
          (0, s._)([(0, a.j)('esri.symbols.support.Symbol3DOutline')], S));
      let Z = (j = class extends p.Z {
        constructor(t) {
          super(t),
            (this.type = 'fill'),
            (this.material = null),
            (this.pattern = null),
            (this.castShadows = !0),
            (this.outline = null),
            (this.edges = null);
        }
        clone() {
          const t = {
            edges: (0, i.pC)(this.edges) ? this.edges.clone() : null,
            enabled: this.enabled,
            material: (0, i.pC)(this.material) ? this.material.clone() : null,
            pattern: (0, i.pC)(this.pattern) ? this.pattern.clone() : null,
            castShadows: this.castShadows,
            outline: (0, i.pC)(this.outline) ? this.outline.clone() : null,
          };
          return new j(t);
        }
        static fromSimpleFillSymbol(t) {
          var e, o, r, s, i, l;
          const n =
              t.outline &&
              t.outline.style &&
              'inside-frame' !== t.outline.style &&
              'solid' !== t.outline.style
                ? new h.Z({ style: t.outline.style })
                : null,
            a = {
              size:
                null != (e = null == (o = t.outline) ? void 0 : o.width)
                  ? e
                  : 0,
              color: (null != (r = null == (s = t.outline) ? void 0 : s.color)
                ? r
                : u.ix
              ).clone(),
              pattern: n,
            };
          return (
            n &&
              null != (i = t.outline) &&
              i.cap &&
              (a.patternCap = t.outline.cap),
            new j({
              material: new m({
                color: (null != (l = t.color) ? l : u.l9).clone(),
              }),
              pattern:
                t.style && 'solid' !== t.style
                  ? new c.Z({ style: t.style })
                  : null,
              outline: a,
            })
          );
        }
      });
      (0, s._)(
        [(0, n.J)({ Fill: 'fill' }, { readOnly: !0 })],
        Z.prototype,
        'type',
        void 0,
      ),
        (0, s._)(
          [(0, l.Cb)({ type: m, json: { write: !0 } })],
          Z.prototype,
          'material',
          void 0,
        ),
        (0, s._)([(0, l.Cb)(d.q)], Z.prototype, 'pattern', void 0),
        (0, s._)(
          [
            (0, l.Cb)({
              type: Boolean,
              nonNullable: !0,
              json: { write: !0, default: !0 },
            }),
          ],
          Z.prototype,
          'castShadows',
          void 0,
        ),
        (0, s._)(
          [(0, l.Cb)({ type: S, json: { write: !0 } })],
          Z.prototype,
          'outline',
          void 0,
        ),
        (0, s._)([(0, l.Cb)(y.Z)], Z.prototype, 'edges', void 0),
        (Z = j = (0, s._)([(0, a.j)('esri.symbols.FillSymbol3DLayer')], Z));
      const x = Z;
    },
    31134: (t, e, o) => {
      o.d(e, { Z: () => c });
      var r,
        s = o(43697),
        i = o(96674),
        l = o(62357),
        n = o(5600),
        a = (o(67676), o(80442), o(90578)),
        p = o(52011),
        y = o(61565);
      let h = (r = class extends i.wq {
        constructor(t) {
          super(t),
            (this.decoration = 'none'),
            (this.family = 'sans-serif'),
            (this.size = 9),
            (this.style = 'normal'),
            (this.weight = 'normal');
        }
        castSize(t) {
          return (0, l.t_)(t);
        }
        clone() {
          return new r({
            decoration: this.decoration,
            family: this.family,
            size: this.size,
            style: this.style,
            weight: this.weight,
          });
        }
        hash() {
          return `${this.decoration}.${this.family}.${this.size}.${this.style}.${this.weight}`;
        }
      });
      (0, s._)(
        [(0, n.Cb)({ type: y.uC, json: { default: 'none', write: !0 } })],
        h.prototype,
        'decoration',
        void 0,
      ),
        (0, s._)(
          [(0, n.Cb)({ type: String, json: { write: !0 } })],
          h.prototype,
          'family',
          void 0,
        ),
        (0, s._)(
          [
            (0, n.Cb)({
              type: Number,
              json: {
                write: {
                  overridePolicy: (t, e, o) => ({
                    enabled: !o || !o.textSymbol3D,
                  }),
                },
              },
            }),
          ],
          h.prototype,
          'size',
          void 0,
        ),
        (0, s._)([(0, a.p)('size')], h.prototype, 'castSize', null),
        (0, s._)(
          [(0, n.Cb)({ type: y.hR, json: { default: 'normal', write: !0 } })],
          h.prototype,
          'style',
          void 0,
        ),
        (0, s._)(
          [(0, n.Cb)({ type: y.Xw, json: { default: 'normal', write: !0 } })],
          h.prototype,
          'weight',
          void 0,
        ),
        (h = r = (0, s._)([(0, p.j)('esri.symbols.Font')], h));
      const c = h;
    },
    50575: (t, e, o) => {
      o.d(e, { Z: () => A });
      var r,
        s = o(43697),
        i = o(92604),
        l = o(70586),
        n = o(17452),
        a = o(5600),
        p = (o(67676), o(80442), o(75215), o(36030)),
        y = o(52011),
        h = o(95868),
        c = o(50178),
        d = o(35454),
        u = o(96674),
        b = o(71715),
        m = o(30556),
        w = o(25929);
      const v = (0, d.w)()({
        circle: 'circle',
        square: 'square',
        cross: 'cross',
        x: 'x',
        kite: 'kite',
        triangle: 'triangle',
      });
      let f = (r = class extends u.wq {
        constructor(t) {
          super(t);
        }
        readHref(t, e, o) {
          return t ? (0, w.f)(t, o) : e.dataURI;
        }
        writeHref(t, e, o, r) {
          t &&
            ((0, n.HK)(t)
              ? (e.dataURI = t)
              : ((e.href = (0, w.t)(t, r)),
                (0, n.YP)(e.href) && (e.href = (0, n.Fv)(e.href))));
        }
        clone() {
          return new r({ href: this.href, primitive: this.primitive });
        }
      });
      (0, s._)(
        [
          (0, a.Cb)({
            type: String,
            json: { write: !0, read: { source: ['href', 'dataURI'] } },
          }),
        ],
        f.prototype,
        'href',
        void 0,
      ),
        (0, s._)([(0, b.r)('href')], f.prototype, 'readHref', null),
        (0, s._)(
          [
            (0, m.c)('href', {
              href: { type: String },
              dataURI: { type: String },
            }),
          ],
          f.prototype,
          'writeHref',
          null,
        ),
        (0, s._)([(0, p.J)(v)], f.prototype, 'primitive', void 0),
        (f = r =
          (0, s._)(
            [(0, y.j)('esri.symbols.support.IconSymbol3DLayerResource')],
            f,
          ));
      var g,
        _ = o(37308),
        C = o(15923);
      let S = (g = class extends C.Z {
        constructor() {
          super(...arguments), (this.x = 0), (this.y = 0);
        }
        clone() {
          return new g({ x: this.x, y: this.y });
        }
      });
      (0, s._)([(0, a.Cb)({ type: Number })], S.prototype, 'x', void 0),
        (0, s._)([(0, a.Cb)({ type: Number })], S.prototype, 'y', void 0),
        (S = g =
          (0, s._)(
            [(0, y.j)('esri.symbols.support.Symbol3DAnchorPosition2D')],
            S,
          ));
      var j,
        Z = o(22303),
        x = o(62357);
      let L = (j = class extends u.wq {
        constructor(t) {
          super(t),
            (this.color = new Z.Z([0, 0, 0, 1])),
            (this.size = (0, x.Wz)(1));
        }
        clone() {
          const t = {
            color: (0, l.pC)(this.color) ? this.color.clone() : null,
            size: this.size,
          };
          return new j(t);
        }
      });
      (0, s._)([(0, a.Cb)(_.a)], L.prototype, 'color', void 0),
        (0, s._)([(0, a.Cb)(_.y)], L.prototype, 'size', void 0),
        (L = j =
          (0, s._)([(0, y.j)('esri.symbols.support.Symbol3DIconOutline')], L));
      var z,
        k = o(52879);
      const O = i.Z.getLogger('esri.symbols.IconSymbol3DLayer');
      let D = (z = class extends h.Z {
        constructor(t) {
          super(t),
            (this.material = null),
            (this.resource = null),
            (this.type = 'icon'),
            (this.size = 12),
            (this.anchor = 'center'),
            (this.anchorPosition = void 0),
            (this.outline = void 0);
        }
        clone() {
          return new z({
            anchor: this.anchor,
            anchorPosition: this.anchorPosition && this.anchorPosition.clone(),
            enabled: this.enabled,
            material: (0, l.pC)(this.material) ? this.material.clone() : null,
            outline: (0, l.pC)(this.outline) ? this.outline.clone() : null,
            resource: this.resource && this.resource.clone(),
            size: this.size,
          });
        }
        static fromSimpleMarkerSymbol(t) {
          const e = t.color || c.ix,
            o = N(t),
            r =
              t.outline && t.outline.width > 0
                ? {
                    size: t.outline.width,
                    color: (t.outline.color || c.ix).clone(),
                  }
                : null;
          return new z({
            size: t.size,
            resource: { primitive: P(t.style) },
            material: { color: e },
            outline: r,
            anchor: o ? 'relative' : void 0,
            anchorPosition: o,
          });
        }
        static fromPictureMarkerSymbol(t) {
          const e = !t.color || (0, c.rx)(t.color) ? c.ix : t.color,
            o = N(t);
          return new z({
            size: t.width <= t.height ? t.height : t.width,
            resource: { href: t.url },
            material: { color: e.clone() },
            anchor: o ? 'relative' : void 0,
            anchorPosition: o,
          });
        }
        static fromCIMSymbol(t) {
          return new z({
            resource: {
              href: (0, n._l)({
                mediaType: 'application/json',
                data: JSON.stringify(t.data),
              }),
            },
          });
        }
      });
      function N(t) {
        const e = 'width' in t ? t.width : t.size,
          o = 'height' in t ? t.height : t.size,
          r = M(t.xoffset),
          s = M(t.yoffset);
        return (r || s) && e && o ? { x: -r / e, y: s / o } : null;
      }
      function M(t) {
        return isFinite(t) ? t : 0;
      }
      (0, s._)(
        [(0, a.Cb)({ type: k.b, json: { write: !0 } })],
        D.prototype,
        'material',
        void 0,
      ),
        (0, s._)(
          [(0, a.Cb)({ type: f, json: { write: !0 } })],
          D.prototype,
          'resource',
          void 0,
        ),
        (0, s._)(
          [(0, p.J)({ Icon: 'icon' }, { readOnly: !0 })],
          D.prototype,
          'type',
          void 0,
        ),
        (0, s._)([(0, a.Cb)(_.y)], D.prototype, 'size', void 0),
        (0, s._)(
          [
            (0, p.J)({
              center: 'center',
              left: 'left',
              right: 'right',
              top: 'top',
              bottom: 'bottom',
              topLeft: 'top-left',
              topRight: 'top-right',
              bottomLeft: 'bottom-left',
              bottomRight: 'bottom-right',
              relative: 'relative',
            }),
            (0, a.Cb)({ json: { default: 'center' } }),
          ],
          D.prototype,
          'anchor',
          void 0,
        ),
        (0, s._)(
          [
            (0, a.Cb)({
              type: S,
              json: {
                type: [Number],
                read: { reader: (t) => new S({ x: t[0], y: t[1] }) },
                write: {
                  writer: (t, e) => {
                    e.anchorPosition = [t.x, t.y];
                  },
                  overridePolicy() {
                    return { enabled: 'relative' === this.anchor };
                  },
                },
              },
            }),
          ],
          D.prototype,
          'anchorPosition',
          void 0,
        ),
        (0, s._)(
          [(0, a.Cb)({ type: L, json: { write: !0 } })],
          D.prototype,
          'outline',
          void 0,
        ),
        (D = z = (0, s._)([(0, y.j)('esri.symbols.IconSymbol3DLayer')], D));
      const $ = {
        circle: 'circle',
        cross: 'cross',
        diamond: 'kite',
        square: 'square',
        x: 'x',
        triangle: 'triangle',
        path: null,
      };
      function P(t) {
        return (
          $[t] ||
          (O.warn(`${t} cannot be mapped to Icon symbol. Fallback to "circle"`),
          'circle')
        );
      }
      const A = D;
    },
    20825: (t, e, o) => {
      o.d(e, { Z: () => m });
      var r,
        s = o(43697),
        i = o(80539),
        l = o(22974),
        n = o(5600),
        a = (o(75215), o(36030)),
        p = o(52011),
        y = o(87223),
        h = o(2283),
        c = o(84275),
        d = o(7413);
      const u = i.Z.ofType({ base: null, key: 'type', typeMap: { text: h.Z } });
      let b = (r = class extends y.Z {
        constructor(t) {
          super(t),
            (this.verticalOffset = null),
            (this.callout = null),
            (this.styleOrigin = null),
            (this.symbolLayers = new u()),
            (this.type = 'label-3d');
        }
        supportsCallout() {
          return !0;
        }
        hasVisibleCallout() {
          return (0, c.gv)(this);
        }
        hasVisibleVerticalOffset() {
          return (0, c.Uy)(this);
        }
        clone() {
          return new r({
            styleOrigin: (0, l.d9)(this.styleOrigin),
            symbolLayers: (0, l.d9)(this.symbolLayers),
            thumbnail: (0, l.d9)(this.thumbnail),
            callout: (0, l.d9)(this.callout),
            verticalOffset: (0, l.d9)(this.verticalOffset),
          });
        }
        static fromTextSymbol(t) {
          return new r({ symbolLayers: [h.Z.fromTextSymbol(t)] });
        }
      });
      (0, s._)(
        [(0, n.Cb)({ type: d._, json: { write: !0 } })],
        b.prototype,
        'verticalOffset',
        void 0,
      ),
        (0, s._)([(0, n.Cb)(c.Y2)], b.prototype, 'callout', void 0),
        (0, s._)(
          [(0, n.Cb)({ json: { read: !1, write: !1 } })],
          b.prototype,
          'styleOrigin',
          void 0,
        ),
        (0, s._)([(0, n.Cb)({ type: u })], b.prototype, 'symbolLayers', void 0),
        (0, s._)(
          [(0, a.J)({ LabelSymbol3D: 'label-3d' }, { readOnly: !0 })],
          b.prototype,
          'type',
          void 0,
        ),
        (b = r = (0, s._)([(0, p.j)('esri.symbols.LabelSymbol3D')], b));
      const m = b;
    },
    98587: (t, e, o) => {
      o.d(e, { Z: () => m });
      var r,
        s = o(43697),
        i = o(80539),
        l = o(22974),
        n = o(5600),
        a = (o(75215), o(36030)),
        p = o(52011),
        y = o(38128),
        h = o(96742),
        c = o(87223);
      const d = i.Z.ofType({
          base: null,
          key: 'type',
          typeMap: { line: y.Z, path: h.Z },
        }),
        u = i.Z.ofType({
          base: null,
          key: 'type',
          typeMap: { line: y.Z, path: h.Z },
        });
      let b = (r = class extends c.Z {
        constructor(t) {
          super(t), (this.symbolLayers = new d()), (this.type = 'line-3d');
        }
        clone() {
          return new r({
            styleOrigin: (0, l.d9)(this.styleOrigin),
            symbolLayers: (0, l.d9)(this.symbolLayers),
            thumbnail: (0, l.d9)(this.thumbnail),
          });
        }
        static fromSimpleLineSymbol(t) {
          return new r({ symbolLayers: [y.Z.fromSimpleLineSymbol(t)] });
        }
      });
      (0, s._)(
        [(0, n.Cb)({ type: d, json: { type: u } })],
        b.prototype,
        'symbolLayers',
        void 0,
      ),
        (0, s._)(
          [(0, a.J)({ LineSymbol3D: 'line-3d' }, { readOnly: !0 })],
          b.prototype,
          'type',
          void 0,
        ),
        (b = r = (0, s._)([(0, p.j)('esri.symbols.LineSymbol3D')], b));
      const m = b;
    },
    38128: (t, e, o) => {
      o.d(e, { Z: () => Z });
      var r = o(43697),
        s = o(70586),
        i = o(62357),
        l = o(5600),
        n = (o(67676), o(80442), o(75215)),
        a = o(36030),
        p = o(52011),
        y = o(22303),
        h = o(2368),
        c = o(96674),
        d = o(57742);
      let u = class extends (0, h.J)(c.wq) {
        constructor(t) {
          super(t),
            (this.type = 'style'),
            (this.placement = 'begin-end'),
            (this.style = 'arrow'),
            (this.color = null);
        }
        equals(t) {
          return (
            (0, s.pC)(t) &&
            t.placement === this.placement &&
            t.style === this.style &&
            (((0, s.Wi)(this.color) && (0, s.Wi)(t.color)) ||
              ((0, s.pC)(this.color) &&
                (0, s.pC)(t.color) &&
                this.color.toJSON() === t.color.toJSON()))
          );
        }
      };
      (0, r._)(
        [
          (0, l.Cb)({
            type: ['style'],
            readOnly: !0,
            json: { read: !0, write: { ignoreOrigin: !0 } },
          }),
        ],
        u.prototype,
        'type',
        void 0,
      ),
        (0, r._)(
          [(0, l.Cb)({ type: d.J, json: { default: 'begin-end', write: !0 } })],
          u.prototype,
          'placement',
          void 0,
        ),
        (0, r._)(
          [(0, l.Cb)({ type: d.k, json: { default: 'arrow', write: !0 } })],
          u.prototype,
          'style',
          void 0,
        ),
        (0, r._)(
          [
            (0, l.Cb)({
              type: y.Z,
              json: { type: [n.z8], default: null, write: !0 },
            }),
          ],
          u.prototype,
          'color',
          void 0,
        ),
        (u = (0, r._)([(0, p.j)('esri.symbols.LineStyleMarker3D')], u));
      const b = u;
      var m,
        w = o(95868),
        v = o(4618),
        f = o(17495),
        g = o(50178),
        _ = o(37308),
        C = o(52879),
        S = o(45119);
      let j = (m = class extends w.Z {
        constructor(t) {
          super(t),
            (this.material = null),
            (this.type = 'line'),
            (this.join = 'miter'),
            (this.cap = 'butt'),
            (this.size = (0, i.Wz)(1)),
            (this.pattern = null),
            (this.marker = null);
        }
        clone() {
          const t = {
            enabled: this.enabled,
            material: (0, s.pC)(this.material) ? this.material.clone() : null,
            size: this.size,
            join: this.join,
            cap: this.cap,
            pattern: (0, s.pC)(this.pattern) ? this.pattern.clone() : null,
            marker: (0, s.pC)(this.marker) ? this.marker.clone() : null,
          };
          return new m(t);
        }
        static fromSimpleLineSymbol(t) {
          var e, o, r;
          const s = {
            enabled: !0,
            size: null != (e = t.width) ? e : (0, i.Wz)(1),
            cap: t.cap || 'butt',
            join: t.join || 'miter',
            pattern:
              t.style && 'inside-frame' !== t.style
                ? new v.Z({ style: t.style })
                : null,
            material: new C.b({ color: (t.color || g.ix).clone() }),
            marker: t.marker
              ? new b({
                  placement: t.marker.placement,
                  style: t.marker.style,
                  color:
                    null !=
                    (o = null == (r = t.marker.color) ? void 0 : r.clone())
                      ? o
                      : null,
                })
              : null,
          };
          return new m(s);
        }
      });
      (0, r._)(
        [(0, l.Cb)({ type: C.b, json: { write: !0 } })],
        j.prototype,
        'material',
        void 0,
      ),
        (0, r._)(
          [(0, a.J)({ Line: 'line' }, { readOnly: !0 })],
          j.prototype,
          'type',
          void 0,
        ),
        (0, r._)(
          [(0, l.Cb)({ type: S.w2, json: { write: !0, default: 'miter' } })],
          j.prototype,
          'join',
          void 0,
        ),
        (0, r._)(
          [(0, l.Cb)({ type: S.Hc, json: { write: !0, default: 'butt' } })],
          j.prototype,
          'cap',
          void 0,
        ),
        (0, r._)([(0, l.Cb)(_.y)], j.prototype, 'size', void 0),
        (0, r._)([(0, l.Cb)(f.D)], j.prototype, 'pattern', void 0),
        (0, r._)(
          [
            (0, l.Cb)({
              types: { key: 'type', base: b, typeMap: { style: b } },
              json: { write: !0 },
            }),
          ],
          j.prototype,
          'marker',
          void 0,
        ),
        (j = m = (0, r._)([(0, p.j)('esri.symbols.LineSymbol3DLayer')], j));
      const Z = j;
    },
    40908: (t, e, o) => {
      o.d(e, { Z: () => p });
      var r = o(43697),
        s = o(62357),
        i = o(5600),
        l = (o(67676), o(80442), o(75215), o(52011)),
        n = o(89164);
      let a = class extends n.Z {
        constructor(t) {
          super(t),
            (this.angle = 0),
            (this.type = null),
            (this.xoffset = 0),
            (this.yoffset = 0),
            (this.size = 9);
        }
        hash() {
          return `${this.type}.${this.angle}.${this.size}.${this.xoffset}.${this.yoffset}`;
        }
      };
      (0, r._)(
        [
          (0, i.Cb)({
            type: Number,
            json: {
              read: (t) => t && -1 * t,
              write: (t, e) => (e.angle = t && -1 * t),
            },
          }),
        ],
        a.prototype,
        'angle',
        void 0,
      ),
        (0, r._)(
          [
            (0, i.Cb)({
              type: ['simple-marker', 'picture-marker'],
              readOnly: !0,
            }),
          ],
          a.prototype,
          'type',
          void 0,
        ),
        (0, r._)(
          [(0, i.Cb)({ type: Number, cast: s.t_, json: { write: !0 } })],
          a.prototype,
          'xoffset',
          void 0,
        ),
        (0, r._)(
          [(0, i.Cb)({ type: Number, cast: s.t_, json: { write: !0 } })],
          a.prototype,
          'yoffset',
          void 0,
        ),
        (0, r._)(
          [
            (0, i.Cb)({
              type: Number,
              cast: (t) => ('auto' === t ? t : (0, s.t_)(t)),
              json: { write: !0 },
            }),
          ],
          a.prototype,
          'size',
          void 0,
        ),
        (a = (0, r._)([(0, l.j)('esri.symbols.MarkerSymbol')], a));
      const p = a;
    },
    17143: (t, e, o) => {
      o.d(e, { Z: () => _ });
      var r,
        s = o(43697),
        i = o(70586),
        l = o(5600),
        n = (o(67676), o(80442), o(75215), o(36030)),
        a = o(52011),
        p = o(95868),
        y = o(35454),
        h = o(96674),
        c = o(25929);
      const d = (0, y.w)()({
        sphere: 'sphere',
        cylinder: 'cylinder',
        cube: 'cube',
        cone: 'cone',
        diamond: 'diamond',
        tetrahedron: 'tetrahedron',
        invertedCone: 'inverted-cone',
      });
      let u = (r = class extends h.wq {
        clone() {
          return new r({ href: this.href, primitive: this.primitive });
        }
      });
      (0, s._)(
        [(0, l.Cb)({ type: String, json: { read: c.r, write: c.w } })],
        u.prototype,
        'href',
        void 0,
      ),
        (0, s._)([(0, n.J)(d)], u.prototype, 'primitive', void 0),
        (u = r =
          (0, s._)(
            [(0, a.j)('esri.symbols.support.ObjectSymbol3DLayerResource')],
            u,
          ));
      var b,
        m = o(15923);
      let w = (b = class extends m.Z {
        constructor() {
          super(...arguments), (this.x = 0), (this.y = 0), (this.z = 0);
        }
        clone() {
          return new b({ x: this.x, y: this.y, z: this.z });
        }
      });
      (0, s._)([(0, l.Cb)({ type: Number })], w.prototype, 'x', void 0),
        (0, s._)([(0, l.Cb)({ type: Number })], w.prototype, 'y', void 0),
        (0, s._)([(0, l.Cb)({ type: Number })], w.prototype, 'z', void 0),
        (w = b =
          (0, s._)(
            [(0, a.j)('esri.symbols.support.Symbol3DAnchorPosition3D')],
            w,
          ));
      var v,
        f = o(52879);
      let g = (v = class extends p.Z {
        constructor(t) {
          super(t),
            (this.material = null),
            (this.castShadows = !0),
            (this.resource = null),
            (this.type = 'object'),
            (this.width = void 0),
            (this.height = void 0),
            (this.depth = void 0),
            (this.anchor = void 0),
            (this.anchorPosition = void 0),
            (this.heading = void 0),
            (this.tilt = void 0),
            (this.roll = void 0);
        }
        clone() {
          return new v({
            heading: this.heading,
            tilt: this.tilt,
            roll: this.roll,
            anchor: this.anchor,
            anchorPosition: this.anchorPosition && this.anchorPosition.clone(),
            depth: this.depth,
            enabled: this.enabled,
            height: this.height,
            material: (0, i.pC)(this.material) ? this.material.clone() : null,
            castShadows: this.castShadows,
            resource: this.resource && this.resource.clone(),
            width: this.width,
          });
        }
        get isPrimitive() {
          return !this.resource || 'string' != typeof this.resource.href;
        }
      });
      (0, s._)(
        [(0, l.Cb)({ type: f.b, json: { write: !0 } })],
        g.prototype,
        'material',
        void 0,
      ),
        (0, s._)(
          [
            (0, l.Cb)({
              type: Boolean,
              nonNullable: !0,
              json: { write: !0, default: !0 },
            }),
          ],
          g.prototype,
          'castShadows',
          void 0,
        ),
        (0, s._)(
          [(0, l.Cb)({ type: u, json: { write: !0 } })],
          g.prototype,
          'resource',
          void 0,
        ),
        (0, s._)(
          [(0, n.J)({ Object: 'object' }, { readOnly: !0 })],
          g.prototype,
          'type',
          void 0,
        ),
        (0, s._)(
          [(0, l.Cb)({ type: Number, json: { write: !0 } })],
          g.prototype,
          'width',
          void 0,
        ),
        (0, s._)(
          [(0, l.Cb)({ type: Number, json: { write: !0 } })],
          g.prototype,
          'height',
          void 0,
        ),
        (0, s._)(
          [(0, l.Cb)({ type: Number, json: { write: !0 } })],
          g.prototype,
          'depth',
          void 0,
        ),
        (0, s._)(
          [
            (0, n.J)({
              center: 'center',
              top: 'top',
              bottom: 'bottom',
              origin: 'origin',
              relative: 'relative',
            }),
            (0, l.Cb)({ json: { default: 'origin' } }),
          ],
          g.prototype,
          'anchor',
          void 0,
        ),
        (0, s._)(
          [
            (0, l.Cb)({
              type: w,
              json: {
                type: [Number],
                read: { reader: (t) => new w({ x: t[0], y: t[1], z: t[2] }) },
                write: {
                  writer: (t, e) => {
                    e.anchorPosition = [t.x, t.y, t.z];
                  },
                  overridePolicy() {
                    return { enabled: 'relative' === this.anchor };
                  },
                },
              },
            }),
          ],
          g.prototype,
          'anchorPosition',
          void 0,
        ),
        (0, s._)(
          [(0, l.Cb)({ type: Number, json: { write: !0 } })],
          g.prototype,
          'heading',
          void 0,
        ),
        (0, s._)(
          [(0, l.Cb)({ type: Number, json: { write: !0 } })],
          g.prototype,
          'tilt',
          void 0,
        ),
        (0, s._)(
          [(0, l.Cb)({ type: Number, json: { write: !0 } })],
          g.prototype,
          'roll',
          void 0,
        ),
        (0, s._)(
          [(0, l.Cb)({ readOnly: !0 })],
          g.prototype,
          'isPrimitive',
          null,
        ),
        (g = v = (0, s._)([(0, a.j)('esri.symbols.ObjectSymbol3DLayer')], g));
      const _ = g;
    },
    96742: (t, e, o) => {
      o.d(e, { Z: () => u });
      var r,
        s = o(43697),
        i = o(70586),
        l = o(5600),
        n = (o(67676), o(80442), o(75215), o(36030)),
        a = o(71715),
        p = o(52011),
        y = o(95868),
        h = o(52879),
        c = o(45119);
      let d = (r = class extends y.Z {
        constructor(t) {
          super(t),
            (this.material = null),
            (this.castShadows = !0),
            (this.type = 'path'),
            (this.profile = 'circle'),
            (this.join = 'miter'),
            (this.cap = 'butt'),
            (this.width = void 0),
            (this.height = void 0),
            (this.anchor = 'center'),
            (this.profileRotation = 'all');
        }
        readWidth(t, e) {
          return null != t
            ? t
            : null == e.height && null != e.size
            ? e.size
            : void 0;
        }
        readHeight(t, e) {
          return null != t
            ? t
            : null == e.width && null != e.size
            ? e.size
            : void 0;
        }
        clone() {
          return new r({
            enabled: this.enabled,
            material: (0, i.pC)(this.material) ? this.material.clone() : null,
            castShadows: this.castShadows,
            profile: this.profile,
            join: this.join,
            cap: this.cap,
            width: this.width,
            height: this.height,
            profileRotation: this.profileRotation,
            anchor: this.anchor,
          });
        }
      });
      (0, s._)(
        [(0, l.Cb)({ type: h.b, json: { write: !0 } })],
        d.prototype,
        'material',
        void 0,
      ),
        (0, s._)(
          [
            (0, l.Cb)({
              type: Boolean,
              nonNullable: !0,
              json: { write: !0, default: !0 },
            }),
          ],
          d.prototype,
          'castShadows',
          void 0,
        ),
        (0, s._)(
          [(0, n.J)({ Path: 'path' }, { readOnly: !0 })],
          d.prototype,
          'type',
          void 0,
        ),
        (0, s._)(
          [
            (0, l.Cb)({
              type: ['circle', 'quad'],
              json: { write: !0, default: 'circle' },
            }),
          ],
          d.prototype,
          'profile',
          void 0,
        ),
        (0, s._)(
          [(0, l.Cb)({ type: c.w2, json: { write: !0, default: 'miter' } })],
          d.prototype,
          'join',
          void 0,
        ),
        (0, s._)(
          [(0, l.Cb)({ type: c.KW, json: { write: !0, default: 'butt' } })],
          d.prototype,
          'cap',
          void 0,
        ),
        (0, s._)(
          [
            (0, l.Cb)({
              type: Number,
              json: {
                write: {
                  enabled: !0,
                  target: { width: { type: Number }, size: { type: Number } },
                },
              },
            }),
          ],
          d.prototype,
          'width',
          void 0,
        ),
        (0, s._)(
          [(0, a.r)('width', ['width', 'size', 'height'])],
          d.prototype,
          'readWidth',
          null,
        ),
        (0, s._)(
          [(0, l.Cb)({ type: Number, json: { write: !0 } })],
          d.prototype,
          'height',
          void 0,
        ),
        (0, s._)(
          [(0, a.r)('height', ['height', 'size', 'width'])],
          d.prototype,
          'readHeight',
          null,
        ),
        (0, s._)(
          [
            (0, l.Cb)({
              type: ['center', 'bottom', 'top'],
              json: { write: !0, default: 'center' },
            }),
          ],
          d.prototype,
          'anchor',
          void 0,
        ),
        (0, s._)(
          [
            (0, l.Cb)({
              type: ['heading', 'all'],
              json: { write: !0, default: 'all' },
            }),
          ],
          d.prototype,
          'profileRotation',
          void 0,
        ),
        (d = r = (0, s._)([(0, p.j)('esri.symbols.PathSymbol3DLayer')], d));
      const u = d;
    },
    37898: (t, e, o) => {
      o.d(e, { Z: () => u });
      var r,
        s = o(43697),
        i = o(22974),
        l = o(62357),
        n = o(5600),
        a = (o(75215), o(36030)),
        p = o(71715),
        y = o(52011),
        h = o(40908),
        c = o(94075);
      let d = (r = class extends h.Z {
        constructor(...t) {
          super(...t),
            (this.color = null),
            (this.type = 'picture-marker'),
            (this.url = null),
            (this.source = null),
            (this.height = 12),
            (this.width = 12),
            (this.size = null);
        }
        normalizeCtorArgs(t, e, o) {
          if (t && 'string' != typeof t && null == t.imageData) return t;
          const r = {};
          return (
            t && (r.url = t),
            null != e && (r.width = (0, l.t_)(e)),
            null != o && (r.height = (0, l.t_)(o)),
            r
          );
        }
        readHeight(t, e) {
          return e.size || t;
        }
        readWidth(t, e) {
          return e.size || t;
        }
        clone() {
          const t = new r({
            angle: this.angle,
            height: this.height,
            url: this.url,
            width: this.width,
            xoffset: this.xoffset,
            yoffset: this.yoffset,
          });
          return t._set('source', (0, i.d9)(this.source)), t;
        }
        hash() {
          return `${super.hash()}.${this.height}.${this.url}.${this.width}`;
        }
      });
      (0, s._)(
        [(0, n.Cb)({ json: { write: !1 } })],
        d.prototype,
        'color',
        void 0,
      ),
        (0, s._)(
          [(0, a.J)({ esriPMS: 'picture-marker' }, { readOnly: !0 })],
          d.prototype,
          'type',
          void 0,
        ),
        (0, s._)([(0, n.Cb)(c.KA)], d.prototype, 'url', void 0),
        (0, s._)([(0, n.Cb)(c.Ds)], d.prototype, 'source', void 0),
        (0, s._)(
          [(0, n.Cb)({ type: Number, cast: l.t_, json: { write: !0 } })],
          d.prototype,
          'height',
          void 0,
        ),
        (0, s._)(
          [(0, p.r)('height', ['height', 'size'])],
          d.prototype,
          'readHeight',
          null,
        ),
        (0, s._)(
          [(0, n.Cb)({ type: Number, cast: l.t_, json: { write: !0 } })],
          d.prototype,
          'width',
          void 0,
        ),
        (0, s._)(
          [(0, n.Cb)({ json: { write: !1 } })],
          d.prototype,
          'size',
          void 0,
        ),
        (d = r = (0, s._)([(0, y.j)('esri.symbols.PictureMarkerSymbol')], d));
      const u = d;
    },
    42143: (t, e, o) => {
      o.d(e, { Z: () => v });
      var r,
        s = o(43697),
        i = o(80539),
        l = o(22974),
        n = o(5600),
        a = (o(75215), o(36030)),
        p = o(52011),
        y = o(50575),
        h = o(17143),
        c = o(87223),
        d = o(2283),
        u = o(84275),
        b = o(7413);
      const m = i.Z.ofType({
        base: null,
        key: 'type',
        typeMap: { icon: y.Z, object: h.Z, text: d.Z },
      });
      let w = (r = class extends c.Z {
        constructor(t) {
          super(t),
            (this.verticalOffset = null),
            (this.callout = null),
            (this.symbolLayers = new m()),
            (this.type = 'point-3d');
        }
        supportsCallout() {
          if ((this.symbolLayers ? this.symbolLayers.length : 0) < 1) return !1;
          for (const t of this.symbolLayers.items)
            switch (t.type) {
              case 'icon':
              case 'text':
              case 'object':
                continue;
              default:
                return !1;
            }
          return !0;
        }
        hasVisibleCallout() {
          return (0, u.gv)(this);
        }
        hasVisibleVerticalOffset() {
          return (0, u.Uy)(this);
        }
        clone() {
          return new r({
            verticalOffset: (0, l.d9)(this.verticalOffset),
            callout: (0, l.d9)(this.callout),
            styleOrigin: (0, l.d9)(this.styleOrigin),
            symbolLayers: (0, l.d9)(this.symbolLayers),
            thumbnail: (0, l.d9)(this.thumbnail),
          });
        }
        static fromSimpleMarkerSymbol(t) {
          return new r({ symbolLayers: [y.Z.fromSimpleMarkerSymbol(t)] });
        }
        static fromPictureMarkerSymbol(t) {
          return new r({ symbolLayers: [y.Z.fromPictureMarkerSymbol(t)] });
        }
        static fromCIMSymbol(t) {
          var e, o;
          return 'CIMPointSymbol' !==
            (null == (e = t.data) || null == (o = e.symbol) ? void 0 : o.type)
            ? null
            : t.data.symbol.callout
            ? new r({
                symbolLayers: [y.Z.fromCIMSymbol(t)],
                callout: { type: 'line', size: 0.5, color: [0, 0, 0] },
                verticalOffset: { screenLength: 40 },
              })
            : new r({ symbolLayers: [y.Z.fromCIMSymbol(t)] });
        }
        static fromTextSymbol(t) {
          return new r({ symbolLayers: [d.Z.fromTextSymbol(t)] });
        }
      });
      (0, s._)(
        [(0, n.Cb)({ type: b._, json: { write: !0 } })],
        w.prototype,
        'verticalOffset',
        void 0,
      ),
        (0, s._)([(0, n.Cb)(u.Y2)], w.prototype, 'callout', void 0),
        (0, s._)(
          [
            (0, n.Cb)({
              type: m,
              json: { origins: { 'web-scene': { write: !0 } } },
            }),
          ],
          w.prototype,
          'symbolLayers',
          void 0,
        ),
        (0, s._)(
          [(0, a.J)({ PointSymbol3D: 'point-3d' }, { readOnly: !0 })],
          w.prototype,
          'type',
          void 0,
        ),
        (w = r = (0, s._)([(0, p.j)('esri.symbols.PointSymbol3D')], w));
      const v = w;
    },
    86114: (t, e, o) => {
      o.d(e, { Z: () => j });
      var r,
        s = o(43697),
        i = o(80539),
        l = o(20102),
        n = o(22974),
        a = o(70586),
        p = o(5600),
        y = (o(75215), o(36030)),
        h = o(52011),
        c = o(30556),
        d = o(38445),
        u = o(95191),
        b = o(50575),
        m = o(38128),
        w = o(17143),
        v = o(87223),
        f = o(2283),
        g = o(44398);
      const _ = i.Z.ofType({
          base: null,
          key: 'type',
          typeMap: {
            extrude: d.Z,
            fill: u.Z,
            icon: b.Z,
            line: m.Z,
            object: w.Z,
            text: f.Z,
            water: g.Z,
          },
        }),
        C = i.Z.ofType({
          base: null,
          key: 'type',
          typeMap: {
            extrude: d.Z,
            fill: u.Z,
            icon: b.Z,
            line: m.Z,
            object: w.Z,
            water: g.Z,
          },
        });
      let S = (r = class extends v.Z {
        constructor(t) {
          super(t), (this.symbolLayers = new _()), (this.type = 'polygon-3d');
        }
        writeSymbolLayers(t, e, o, r) {
          const s = t.filter((t) => 'text' !== t.type);
          if (r && r.messages && s.length < t.length) {
            const e = t.find((t) => 'text' === t.type);
            r.messages.push(
              new l.Z(
                'symbol-layer:unsupported',
                "Symbol layers of type 'text' cannot be persisted in PolygonSymbol3D",
                { symbolLayer: e },
              ),
            );
          }
          e[o] = s.map((t) => t.write({}, r)).toArray();
        }
        clone() {
          return new r({
            styleOrigin: (0, n.d9)(this.styleOrigin),
            symbolLayers: (0, n.d9)(this.symbolLayers),
            thumbnail: (0, n.d9)(this.thumbnail),
          });
        }
        static fromJSON(t) {
          const e = new r();
          if (
            (e.read(t),
            2 === e.symbolLayers.length &&
              'fill' === e.symbolLayers.getItemAt(0).type &&
              'line' === e.symbolLayers.getItemAt(1).type)
          ) {
            const o = e.symbolLayers.getItemAt(0),
              r = e.symbolLayers.getItemAt(1);
            !r.enabled ||
              (t.symbolLayers &&
                t.symbolLayers[1] &&
                !1 === t.symbolLayers[1].enable) ||
              (o.outline = {
                size: r.size,
                color: (0, a.pC)(r.material) ? r.material.color : null,
              }),
              e.symbolLayers.removeAt(1);
          }
          return e;
        }
        static fromSimpleFillSymbol(t) {
          return new r({ symbolLayers: [u.Z.fromSimpleFillSymbol(t)] });
        }
      });
      (0, s._)(
        [(0, p.Cb)({ type: _, json: { type: C } })],
        S.prototype,
        'symbolLayers',
        void 0,
      ),
        (0, s._)(
          [(0, c.c)('web-scene', 'symbolLayers')],
          S.prototype,
          'writeSymbolLayers',
          null,
        ),
        (0, s._)(
          [(0, y.J)({ PolygonSymbol3D: 'polygon-3d' }, { readOnly: !0 })],
          S.prototype,
          'type',
          void 0,
        ),
        (S = r = (0, s._)([(0, h.j)('esri.symbols.PolygonSymbol3D')], S));
      const j = S;
    },
    20256: (t, e, o) => {
      o.d(e, { Z: () => b });
      var r,
        s = o(43697),
        i = o(22303),
        l = o(35454),
        n = o(22974),
        a = o(5600),
        p = (o(75215), o(36030)),
        y = o(52011),
        h = o(21218),
        c = o(4095);
      const d = new l.X({
        esriSFSSolid: 'solid',
        esriSFSNull: 'none',
        esriSFSHorizontal: 'horizontal',
        esriSFSVertical: 'vertical',
        esriSFSForwardDiagonal: 'forward-diagonal',
        esriSFSBackwardDiagonal: 'backward-diagonal',
        esriSFSCross: 'cross',
        esriSFSDiagonalCross: 'diagonal-cross',
      });
      let u = (r = class extends h.Z {
        constructor(...t) {
          super(...t),
            (this.color = new i.Z([0, 0, 0, 0.25])),
            (this.outline = new c.Z()),
            (this.type = 'simple-fill'),
            (this.style = 'solid');
        }
        normalizeCtorArgs(t, e, o) {
          if (t && 'string' != typeof t) return t;
          const r = {};
          return (
            t && (r.style = t), e && (r.outline = e), o && (r.color = o), r
          );
        }
        clone() {
          return new r({
            color: (0, n.d9)(this.color),
            outline: this.outline && this.outline.clone(),
            style: this.style,
          });
        }
        hash() {
          return `${super.hash()}${this.style}.${
            this.color && this.color.hash()
          }`;
        }
      });
      (0, s._)([(0, a.Cb)()], u.prototype, 'color', void 0),
        (0, s._)([(0, a.Cb)()], u.prototype, 'outline', void 0),
        (0, s._)(
          [(0, p.J)({ esriSFS: 'simple-fill' }, { readOnly: !0 })],
          u.prototype,
          'type',
          void 0,
        ),
        (0, s._)(
          [
            (0, a.Cb)({
              type: d.apiValues,
              json: { read: d.read, write: d.write },
            }),
          ],
          u.prototype,
          'style',
          void 0,
        ),
        (u = r = (0, s._)([(0, y.j)('esri.symbols.SimpleFillSymbol')], u));
      const b = u;
    },
    4095: (t, e, o) => {
      o.d(e, { Z: () => j });
      var r = o(43697),
        s = o(35454),
        i = o(22974),
        l = o(62357),
        n = o(5600),
        a = (o(75215), o(36030)),
        p = o(52011),
        y = (o(67676), o(80442), o(89164));
      let h = class extends y.Z {
        constructor(t) {
          super(t), (this.type = 'simple-line'), (this.width = 0.75);
        }
        hash() {
          return `${this.type}.${this.width}`;
        }
      };
      (0, r._)(
        [(0, a.J)({ esriSLS: 'simple-line' }, { readOnly: !0 })],
        h.prototype,
        'type',
        void 0,
      ),
        (0, r._)(
          [(0, n.Cb)({ type: Number, cast: l.t_, json: { write: !0 } })],
          h.prototype,
          'width',
          void 0,
        ),
        (h = (0, r._)([(0, p.j)('esri.symbols.LineSymbol')], h));
      const c = h;
      var d,
        u = o(22303),
        b = o(96674),
        m = o(71715),
        w = o(30556),
        v = o(57742);
      let f = (d = class extends b.wq {
        constructor(t) {
          super(t),
            (this.placement = 'begin-end'),
            (this.type = 'line-marker'),
            (this.style = 'arrow');
        }
        writeStyle(t, e, o, r) {
          'web-map' === (null == r ? void 0 : r.origin)
            ? (e[o] = 'arrow')
            : (e[o] = t);
        }
        set color(t) {
          this._set('color', t);
        }
        readColor(t) {
          return t && null != t[0] ? [t[0], t[1], t[2], t[3] / 255] : t;
        }
        writeColor(t, e, o, r) {
          'web-map' === (null == r ? void 0 : r.origin) || (e[o] = t);
        }
        clone() {
          return new d({
            color: (0, i.d9)(this.color),
            placement: this.placement,
            style: this.style,
          });
        }
        hash() {
          var t;
          return `${this.placement}.${
            null == (t = this.color) ? void 0 : t.hash()
          }.${this.style}`;
        }
      });
      (0, r._)(
        [
          (0, n.Cb)({
            type: ['begin', 'end', 'begin-end'],
            json: { write: !0 },
          }),
        ],
        f.prototype,
        'placement',
        void 0,
      ),
        (0, r._)(
          [
            (0, a.J)({ 'line-marker': 'line-marker' }, { readOnly: !0 }),
            (0, n.Cb)({ json: { origins: { 'web-map': { write: !1 } } } }),
          ],
          f.prototype,
          'type',
          void 0,
        ),
        (0, r._)([(0, n.Cb)({ type: v.k })], f.prototype, 'style', void 0),
        (0, r._)([(0, w.c)('style')], f.prototype, 'writeStyle', null),
        (0, r._)(
          [
            (0, n.Cb)({
              type: u.Z,
              value: null,
              json: { write: { allowNull: !0 } },
            }),
          ],
          f.prototype,
          'color',
          null,
        ),
        (0, r._)([(0, m.r)('color')], f.prototype, 'readColor', null),
        (0, r._)([(0, w.c)('color')], f.prototype, 'writeColor', null),
        (f = d = (0, r._)([(0, p.j)('esri.symbols.LineSymbolMarker')], f));
      const g = f;
      var _;
      const C = new s.X({
        esriSLSSolid: 'solid',
        esriSLSDash: 'dash',
        esriSLSDot: 'dot',
        esriSLSDashDot: 'dash-dot',
        esriSLSDashDotDot: 'long-dash-dot-dot',
        esriSLSNull: 'none',
        esriSLSInsideFrame: 'inside-frame',
        esriSLSShortDash: 'short-dash',
        esriSLSShortDot: 'short-dot',
        esriSLSShortDashDot: 'short-dash-dot',
        esriSLSShortDashDotDot: 'short-dash-dot-dot',
        esriSLSLongDash: 'long-dash',
        esriSLSLongDashDot: 'long-dash-dot',
      });
      let S = (_ = class extends c {
        constructor(...t) {
          super(...t),
            (this.type = 'simple-line'),
            (this.style = 'solid'),
            (this.cap = 'round'),
            (this.join = 'round'),
            (this.marker = null),
            (this.miterLimit = 2);
        }
        normalizeCtorArgs(t, e, o, r, s, i) {
          if (t && 'string' != typeof t) return t;
          const n = {};
          return (
            null != t && (n.style = t),
            null != e && (n.color = e),
            null != o && (n.width = (0, l.t_)(o)),
            null != r && (n.cap = r),
            null != s && (n.join = s),
            null != i && (n.miterLimit = (0, l.t_)(i)),
            n
          );
        }
        clone() {
          var t;
          return new _({
            color: (0, i.d9)(this.color),
            style: this.style,
            width: this.width,
            cap: this.cap,
            join: this.join,
            miterLimit: this.miterLimit,
            marker: null == (t = this.marker) ? void 0 : t.clone(),
          });
        }
        hash() {
          var t, e;
          return `${super.hash()}.${
            null == (t = this.color) ? void 0 : t.hash()
          }.${this.style}.${this.cap}.${this.join}.${this.miterLimit}.${
            null == (e = this.marker) ? void 0 : e.hash()
          }`;
        }
      });
      (0, r._)(
        [(0, a.J)({ esriSLS: 'simple-line' }, { readOnly: !0 })],
        S.prototype,
        'type',
        void 0,
      ),
        (0, r._)(
          [
            (0, n.Cb)({
              type: C.apiValues,
              json: { read: C.read, write: C.write },
            }),
          ],
          S.prototype,
          'style',
          void 0,
        ),
        (0, r._)(
          [
            (0, n.Cb)({
              type: ['butt', 'round', 'square'],
              json: {
                write: {
                  overridePolicy: (t, e, o) => ({
                    enabled: 'round' !== t && (null == o || null == o.origin),
                  }),
                },
              },
            }),
          ],
          S.prototype,
          'cap',
          void 0,
        ),
        (0, r._)(
          [
            (0, n.Cb)({
              type: ['miter', 'round', 'bevel'],
              json: {
                write: {
                  overridePolicy: (t, e, o) => ({
                    enabled: 'round' !== t && (null == o || null == o.origin),
                  }),
                },
              },
            }),
          ],
          S.prototype,
          'join',
          void 0,
        ),
        (0, r._)(
          [
            (0, n.Cb)({
              types: {
                key: 'type',
                base: null,
                defaultKeyValue: 'line-marker',
                typeMap: { 'line-marker': g },
              },
              json: { write: !0, origins: { 'web-scene': { write: !1 } } },
            }),
          ],
          S.prototype,
          'marker',
          void 0,
        ),
        (0, r._)(
          [(0, n.Cb)({ type: Number, json: { read: !1, write: !1 } })],
          S.prototype,
          'miterLimit',
          void 0,
        ),
        (S = _ = (0, r._)([(0, p.j)('esri.symbols.SimpleLineSymbol')], S));
      const j = S;
    },
    77987: (t, e, o) => {
      o.d(e, { Z: () => w });
      var r,
        s = o(43697),
        i = o(22303),
        l = o(35454),
        n = o(22974),
        a = o(62357),
        p = o(5600),
        y = (o(75215), o(36030)),
        h = o(52011),
        c = o(30556),
        d = o(40908),
        u = o(4095);
      const b = new l.X({
        esriSMSCircle: 'circle',
        esriSMSSquare: 'square',
        esriSMSCross: 'cross',
        esriSMSX: 'x',
        esriSMSDiamond: 'diamond',
        esriSMSTriangle: 'triangle',
        esriSMSPath: 'path',
      });
      let m = (r = class extends d.Z {
        constructor(...t) {
          super(...t),
            (this.color = new i.Z([255, 255, 255, 0.25])),
            (this.type = 'simple-marker'),
            (this.size = 12),
            (this.style = 'circle'),
            (this.outline = new u.Z());
        }
        normalizeCtorArgs(t, e, o, r) {
          if (t && 'string' != typeof t) return t;
          const s = {};
          return (
            t && (s.style = t),
            null != e && (s.size = (0, a.t_)(e)),
            o && (s.outline = o),
            r && (s.color = r),
            s
          );
        }
        writeColor(t, e) {
          t &&
            'x' !== this.style &&
            'cross' !== this.style &&
            (e.color = t.toJSON()),
            null === t && (e.color = null);
        }
        set path(t) {
          (this.style = 'path'), this._set('path', t);
        }
        clone() {
          return new r({
            angle: this.angle,
            color: (0, n.d9)(this.color),
            outline: this.outline && this.outline.clone(),
            path: this.path,
            size: this.size,
            style: this.style,
            xoffset: this.xoffset,
            yoffset: this.yoffset,
          });
        }
        hash() {
          var t;
          return `${super.hash()}.${this.color && this.color.hash()}.${
            this.path
          }.${this.style}.${null == (t = this.outline) ? void 0 : t.hash()}`;
        }
      });
      (0, s._)([(0, p.Cb)()], m.prototype, 'color', void 0),
        (0, s._)([(0, c.c)('color')], m.prototype, 'writeColor', null),
        (0, s._)(
          [(0, y.J)({ esriSMS: 'simple-marker' }, { readOnly: !0 })],
          m.prototype,
          'type',
          void 0,
        ),
        (0, s._)([(0, p.Cb)()], m.prototype, 'size', void 0),
        (0, s._)(
          [
            (0, p.Cb)({
              type: b.apiValues,
              json: { read: b.read, write: b.write },
            }),
          ],
          m.prototype,
          'style',
          void 0,
        ),
        (0, s._)(
          [(0, p.Cb)({ type: String, json: { write: !0 } })],
          m.prototype,
          'path',
          null,
        ),
        (0, s._)(
          [
            (0, p.Cb)({
              types: {
                key: 'type',
                base: null,
                defaultKeyValue: 'simple-line',
                typeMap: { 'simple-line': u.Z },
              },
              json: { default: null, write: !0 },
            }),
          ],
          m.prototype,
          'outline',
          void 0,
        ),
        (m = r = (0, s._)([(0, h.j)('esri.symbols.SimpleMarkerSymbol')], m));
      const w = m;
    },
    87223: (t, e, o) => {
      o.d(e, { Z: () => N });
      var r = o(43697),
        s = o(80539),
        i = o(70921),
        l = o(92604),
        n = o(17452),
        a = o(20941),
        p = o(5600),
        y = (o(67676), o(80442), o(90578)),
        h = o(71715),
        c = o(52011),
        d = o(30556),
        u = o(65587),
        b = o(25929),
        m = o(38445),
        w = o(95191),
        v = o(50575),
        f = o(38128),
        g = o(17143),
        _ = o(96742),
        C = o(89164),
        S = o(95868),
        j = o(2283),
        Z = o(44398),
        x = o(71144),
        L = o(23203);
      const z = {
          icon: v.Z,
          object: g.Z,
          line: f.Z,
          path: _.Z,
          fill: w.Z,
          extrude: m.Z,
          text: j.Z,
          water: Z.Z,
        },
        k = s.Z.ofType({
          base: S.Z,
          key: 'type',
          typeMap: z,
          errorContext: 'symbol-layer',
        }),
        O = l.Z.getLogger('esri.symbols.Symbol3D');
      let D = class extends C.Z {
        constructor(t) {
          super(t),
            (this.styleOrigin = null),
            (this.thumbnail = null),
            (this.type = null);
          const e =
              this.__accessor__ &&
              this.__accessor__.metadatas &&
              this.__accessor__.metadatas.symbolLayers,
            o = (e && e.type) || s.Z;
          this._set('symbolLayers', new o());
        }
        get color() {
          return null;
        }
        set color(t) {
          this.initialized &&
            O.error(
              'Symbol3D does not support colors on the symbol level. Colors may be set on individual symbol layer materials instead.',
            );
        }
        set symbolLayers(t) {
          (0, i.Z)(t, this._get('symbolLayers'));
        }
        readStyleOrigin(t, e, o) {
          if (t.styleUrl && t.name) {
            const e = (0, b.f)(t.styleUrl, o);
            return new x.Z({ styleUrl: e, name: t.name });
          }
          if (t.styleName && t.name)
            return new x.Z({
              portal: (o && o.portal) || u.Z.getDefault(),
              styleName: t.styleName,
              name: t.name,
            });
          o &&
            o.messages &&
            o.messages.push(
              new a.Z(
                'symbol3d:incomplete-style-origin',
                "Style origin requires either a 'styleUrl' or 'styleName' and a 'name' property",
                { context: o, definition: t },
              ),
            );
        }
        writeStyleOrigin(t, e, o, r) {
          if (t.styleUrl && t.name) {
            let o = (0, b.t)(t.styleUrl, r);
            (0, n.YP)(o) && (o = (0, n.Fv)(o)),
              (e.styleOrigin = { styleUrl: o, name: t.name });
          } else
            t.styleName &&
              t.name &&
              (t.portal &&
              r &&
              r.portal &&
              !(0, n.tm)(t.portal.restUrl, r.portal.restUrl)
                ? r &&
                  r.messages &&
                  r.messages.push(
                    new a.Z(
                      'symbol:cross-portal',
                      'The symbol style origin cannot be persisted because it refers to an item on a different portal than the one being saved to.',
                      { symbol: this },
                    ),
                  )
                : (e.styleOrigin = { styleName: t.styleName, name: t.name }));
        }
        normalizeCtorArgs(t) {
          return t instanceof S.Z || (t && z[t.type])
            ? { symbolLayers: [t] }
            : Array.isArray(t)
            ? { symbolLayers: t }
            : t;
        }
      };
      (0, r._)(
        [(0, p.Cb)({ json: { read: !1, write: !1 } })],
        D.prototype,
        'color',
        null,
      ),
        (0, r._)(
          [
            (0, p.Cb)({ type: k, nonNullable: !0, json: { write: !0 } }),
            (0, y.p)(i.R),
          ],
          D.prototype,
          'symbolLayers',
          null,
        ),
        (0, r._)(
          [(0, p.Cb)({ type: x.Z })],
          D.prototype,
          'styleOrigin',
          void 0,
        ),
        (0, r._)(
          [(0, h.r)('styleOrigin')],
          D.prototype,
          'readStyleOrigin',
          null,
        ),
        (0, r._)(
          [
            (0, d.c)('styleOrigin', {
              'styleOrigin.styleUrl': { type: String },
              'styleOrigin.styleName': { type: String },
              'styleOrigin.name': { type: String },
            }),
          ],
          D.prototype,
          'writeStyleOrigin',
          null,
        ),
        (0, r._)(
          [(0, p.Cb)({ type: L.p, json: { read: !1 } })],
          D.prototype,
          'thumbnail',
          void 0,
        ),
        (0, r._)(
          [
            (0, p.Cb)({
              type: [
                'point-3d',
                'line-3d',
                'polygon-3d',
                'mesh-3d',
                'label-3d',
              ],
              readOnly: !0,
            }),
          ],
          D.prototype,
          'type',
          void 0,
        ),
        (D = (0, r._)([(0, c.j)('esri.symbols.Symbol3D')], D));
      const N = D;
    },
    95868: (t, e, o) => {
      o.d(e, { Z: () => p });
      var r = o(43697),
        s = o(96674),
        i = o(5600),
        l = (o(67676), o(80442), o(75215), o(52011)),
        n = o(30556);
      let a = class extends s.wq {
        constructor(t) {
          super(t), (this.enabled = !0), (this.type = null);
        }
        writeEnabled(t, e, o) {
          t || (e[o] = t);
        }
      };
      (0, r._)(
        [
          (0, i.Cb)({
            type: Boolean,
            json: { read: { source: 'enable' }, write: { target: 'enable' } },
          }),
        ],
        a.prototype,
        'enabled',
        void 0,
      ),
        (0, r._)([(0, n.c)('enabled')], a.prototype, 'writeEnabled', null),
        (0, r._)(
          [
            (0, i.Cb)({
              type: [
                'icon',
                'object',
                'line',
                'path',
                'fill',
                'water',
                'extrude',
                'text',
              ],
              readOnly: !0,
            }),
          ],
          a.prototype,
          'type',
          void 0,
        ),
        (a = (0, r._)([(0, l.j)('esri.symbols.Symbol3DLayer')], a));
      const p = a;
    },
    78724: (t, e, o) => {
      o.d(e, { Z: () => w });
      var r,
        s = o(43697),
        i = o(22303),
        l = o(22974),
        n = o(62357),
        a = o(5600),
        p = o(90578),
        y = o(36030),
        h = o(52011),
        c = o(30556),
        d = o(31134),
        u = o(89164),
        b = o(61565);
      let m = (r = class extends u.Z {
        constructor(...t) {
          super(...t),
            (this.backgroundColor = null),
            (this.borderLineColor = null),
            (this.borderLineSize = null),
            (this.font = new d.Z()),
            (this.horizontalAlignment = 'center'),
            (this.kerning = !0),
            (this.haloColor = null),
            (this.haloSize = null),
            (this.rightToLeft = null),
            (this.rotated = !1),
            (this.text = ''),
            (this.type = 'text'),
            (this.verticalAlignment = 'baseline'),
            (this.xoffset = 0),
            (this.yoffset = 0),
            (this.angle = 0),
            (this.width = null),
            (this.lineWidth = 192),
            (this.lineHeight = 1);
        }
        normalizeCtorArgs(t, e, o) {
          if (t && 'string' != typeof t) return t;
          const r = {};
          return t && (r.text = t), e && (r.font = e), o && (r.color = o), r;
        }
        writeLineWidth(t, e, o, r) {
          r && 'string' != typeof r ? r.origin : (e[o] = t);
        }
        castLineWidth(t) {
          return (0, n.t_)(t);
        }
        writeLineHeight(t, e, o, r) {
          r && 'string' != typeof r ? r.origin : (e[o] = t);
        }
        clone() {
          return new r({
            angle: this.angle,
            backgroundColor: (0, l.d9)(this.backgroundColor),
            borderLineColor: (0, l.d9)(this.borderLineColor),
            borderLineSize: this.borderLineSize,
            color: (0, l.d9)(this.color),
            font: this.font && this.font.clone(),
            haloColor: (0, l.d9)(this.haloColor),
            haloSize: this.haloSize,
            horizontalAlignment: this.horizontalAlignment,
            kerning: this.kerning,
            lineHeight: this.lineHeight,
            lineWidth: this.lineWidth,
            rightToLeft: this.rightToLeft,
            rotated: this.rotated,
            text: this.text,
            verticalAlignment: this.verticalAlignment,
            width: this.width,
            xoffset: this.xoffset,
            yoffset: this.yoffset,
          });
        }
        hash() {
          return `${this.backgroundColor && this.backgroundColor.hash()}.${
            this.borderLineColor
          }.${this.borderLineSize}.${this.color.hash()}.${
            this.font && this.font.hash()
          }.${this.haloColor && this.haloColor.hash()}.${this.haloSize}.${
            this.horizontalAlignment
          }.${this.kerning}.${this.rightToLeft}.${this.rotated}.${this.text}.${
            this.verticalAlignment
          }.${this.width}.${this.xoffset}.${this.yoffset}.${this.lineHeight}.${
            this.lineWidth
          }.${this.angle}`;
        }
      });
      (0, s._)(
        [(0, a.Cb)({ type: i.Z, json: { write: !0 } })],
        m.prototype,
        'backgroundColor',
        void 0,
      ),
        (0, s._)(
          [(0, a.Cb)({ type: i.Z, json: { write: !0 } })],
          m.prototype,
          'borderLineColor',
          void 0,
        ),
        (0, s._)(
          [(0, a.Cb)({ type: Number, json: { write: !0 } })],
          m.prototype,
          'borderLineSize',
          void 0,
        ),
        (0, s._)(
          [(0, a.Cb)({ type: d.Z, json: { write: !0 } })],
          m.prototype,
          'font',
          void 0,
        ),
        (0, s._)(
          [(0, a.Cb)({ ...b.x0, json: { write: !0 } })],
          m.prototype,
          'horizontalAlignment',
          void 0,
        ),
        (0, s._)(
          [(0, a.Cb)({ type: Boolean, json: { write: !0 } })],
          m.prototype,
          'kerning',
          void 0,
        ),
        (0, s._)(
          [(0, a.Cb)({ type: i.Z, json: { write: !0 } })],
          m.prototype,
          'haloColor',
          void 0,
        ),
        (0, s._)(
          [(0, a.Cb)({ type: Number, cast: n.t_, json: { write: !0 } })],
          m.prototype,
          'haloSize',
          void 0,
        ),
        (0, s._)(
          [(0, a.Cb)({ type: Boolean, json: { write: !0 } })],
          m.prototype,
          'rightToLeft',
          void 0,
        ),
        (0, s._)(
          [(0, a.Cb)({ type: Boolean, json: { write: !0 } })],
          m.prototype,
          'rotated',
          void 0,
        ),
        (0, s._)(
          [(0, a.Cb)({ type: String, json: { write: !0 } })],
          m.prototype,
          'text',
          void 0,
        ),
        (0, s._)(
          [(0, y.J)({ esriTS: 'text' }, { readOnly: !0 })],
          m.prototype,
          'type',
          void 0,
        ),
        (0, s._)(
          [(0, a.Cb)({ ...b.Nj, json: { write: !0 } })],
          m.prototype,
          'verticalAlignment',
          void 0,
        ),
        (0, s._)(
          [(0, a.Cb)({ type: Number, cast: n.t_, json: { write: !0 } })],
          m.prototype,
          'xoffset',
          void 0,
        ),
        (0, s._)(
          [(0, a.Cb)({ type: Number, cast: n.t_, json: { write: !0 } })],
          m.prototype,
          'yoffset',
          void 0,
        ),
        (0, s._)(
          [
            (0, a.Cb)({
              type: Number,
              json: {
                read: (t) => t && -1 * t,
                write: (t, e) => (e.angle = t && -1 * t),
              },
            }),
          ],
          m.prototype,
          'angle',
          void 0,
        ),
        (0, s._)(
          [(0, a.Cb)({ type: Number, json: { write: !0 } })],
          m.prototype,
          'width',
          void 0,
        ),
        (0, s._)(
          [(0, a.Cb)({ type: Number })],
          m.prototype,
          'lineWidth',
          void 0,
        ),
        (0, s._)([(0, c.c)('lineWidth')], m.prototype, 'writeLineWidth', null),
        (0, s._)([(0, p.p)('lineWidth')], m.prototype, 'castLineWidth', null),
        (0, s._)([(0, a.Cb)(b.Ck)], m.prototype, 'lineHeight', void 0),
        (0, s._)(
          [(0, c.c)('lineHeight')],
          m.prototype,
          'writeLineHeight',
          null,
        ),
        (m = r = (0, s._)([(0, h.j)('esri.symbols.TextSymbol')], m));
      const w = m;
    },
    2283: (t, e, o) => {
      o.d(e, { Z: () => j });
      var r,
        s = o(43697),
        i = o(22974),
        l = o(70586),
        n = o(5600),
        a = (o(75215), o(36030)),
        p = o(52011),
        y = o(30556),
        h = o(31134),
        c = o(95868),
        d = o(37308),
        u = o(22303),
        b = o(96674);
      let m = (r = class extends b.wq {
        constructor() {
          super(...arguments),
            (this.color = new u.Z([0, 0, 0, 1])),
            (this.size = 0);
        }
        clone() {
          const t = { color: (0, i.d9)(this.color), size: this.size };
          return new r(t);
        }
      });
      (0, s._)([(0, n.Cb)(d.a)], m.prototype, 'color', void 0),
        (0, s._)([(0, n.Cb)(d.y)], m.prototype, 'size', void 0),
        (m = r = (0, s._)([(0, p.j)('esri.symbols.support.Symbol3DHalo')], m));
      var w = o(52879),
        v = o(2368);
      o(67676), o(80442);
      let f = class extends (0, v.J)(b.wq) {
        constructor(t) {
          super(t), (this.color = null);
        }
      };
      (0, s._)([(0, n.Cb)(d.a)], f.prototype, 'color', void 0),
        (f = (0, s._)(
          [(0, p.j)('esri.symbols.support.Symbol3DTextBackground')],
          f,
        ));
      var g,
        _ = o(61565);
      let C = (g = class extends c.Z {
        constructor(t) {
          super(t),
            (this._userSize = void 0),
            (this.halo = null),
            (this.horizontalAlignment = 'center'),
            (this.lineHeight = 1),
            (this.material = null),
            (this.background = null),
            (this.text = null),
            (this.type = 'text'),
            (this.verticalAlignment = 'baseline');
        }
        get font() {
          return this._get('font') || null;
        }
        set font(t) {
          (0, l.pC)(t) &&
            (0, l.pC)(this._userSize) &&
            (t.size = this._userSize),
            this._set('font', t);
        }
        writeFont(t, e, o, r) {
          const s = { ...r, textSymbol3D: !0 };
          (e.font = t.write({}, s)), delete e.font.size;
        }
        get size() {
          return (0, l.pC)(this._userSize)
            ? this._userSize
            : (0, l.pC)(this.font) && null != this.font.size
            ? this.font.size
            : 9;
        }
        set size(t) {
          (this._userSize = t),
            (0, l.pC)(this.font) && (this.font.size = this._userSize),
            this.notifyChange('size');
        }
        clone() {
          const t = new g({
            enabled: this.enabled,
            font: this.font && (0, i.d9)(this.font),
            halo: this.halo && (0, i.d9)(this.halo),
            horizontalAlignment: this.horizontalAlignment,
            lineHeight: this.lineHeight,
            material: (0, l.pC)(this.material) ? this.material.clone() : null,
            text: this.text,
            verticalAlignment: this.verticalAlignment,
            background: (0, i.d9)(this.background),
          });
          return (t._userSize = this._userSize), t;
        }
        static fromTextSymbol(t) {
          return new g({
            font: (0, l.pC)(t.font) ? t.font.clone() : new h.Z(),
            halo: S(t.haloColor, t.haloSize),
            horizontalAlignment: t.horizontalAlignment,
            lineHeight: t.lineHeight,
            material: t.color ? new w.b({ color: t.color.clone() }) : null,
            text: t.text,
            verticalAlignment: t.verticalAlignment,
            background: t.backgroundColor
              ? new f({ color: t.backgroundColor.clone() })
              : null,
          });
        }
      });
      function S(t, e) {
        return t && e > 0 ? new m({ color: (0, i.d9)(t), size: e }) : null;
      }
      (0, s._)(
        [(0, n.Cb)({ type: h.Z, json: { write: !0 } })],
        C.prototype,
        'font',
        null,
      ),
        (0, s._)([(0, y.c)('font')], C.prototype, 'writeFont', null),
        (0, s._)(
          [(0, n.Cb)({ type: m, json: { write: !0 } })],
          C.prototype,
          'halo',
          void 0,
        ),
        (0, s._)(
          [(0, n.Cb)({ ..._.OJ, json: { default: 'center', write: !0 } })],
          C.prototype,
          'horizontalAlignment',
          void 0,
        ),
        (0, s._)(
          [(0, n.Cb)({ ..._.Ck, json: { default: 1, write: !0 } })],
          C.prototype,
          'lineHeight',
          void 0,
        ),
        (0, s._)(
          [(0, n.Cb)({ type: w.b, json: { write: !0 } })],
          C.prototype,
          'material',
          void 0,
        ),
        (0, s._)(
          [(0, n.Cb)({ type: f, json: { write: !0 } })],
          C.prototype,
          'background',
          void 0,
        ),
        (0, s._)([(0, n.Cb)(d.y)], C.prototype, 'size', null),
        (0, s._)(
          [(0, n.Cb)({ type: String, json: { write: !0 } })],
          C.prototype,
          'text',
          void 0,
        ),
        (0, s._)(
          [(0, a.J)({ Text: 'text' }, { readOnly: !0 })],
          C.prototype,
          'type',
          void 0,
        ),
        (0, s._)(
          [(0, n.Cb)({ ..._.Nj, json: { default: 'baseline', write: !0 } })],
          C.prototype,
          'verticalAlignment',
          void 0,
        ),
        (C = g = (0, s._)([(0, p.j)('esri.symbols.TextSymbol3DLayer')], C));
      const j = C;
    },
    44398: (t, e, o) => {
      o.d(e, { Z: () => u });
      var r,
        s = o(43697),
        i = o(22303),
        l = o(22974),
        n = o(5600),
        a = o(75215),
        p = o(36030),
        y = o(52011),
        h = o(95868);
      let c = (r = class extends h.Z {
        constructor(t) {
          super(t),
            (this.color = d.clone()),
            (this.type = 'water'),
            (this.waterbodySize = 'medium'),
            (this.waveDirection = null),
            (this.waveStrength = 'moderate');
        }
        clone() {
          return new r({
            color: (0, l.d9)(this.color),
            waterbodySize: this.waterbodySize,
            waveDirection: this.waveDirection,
            waveStrength: this.waveStrength,
          });
        }
      });
      (0, s._)(
        [
          (0, n.Cb)({
            type: i.Z,
            nonNullable: !0,
            json: {
              type: [a.z8],
              write: (t, e, o) =>
                (e[o] = t.toArray(i.Z.AlphaMode.UNLESS_OPAQUE)),
              default: () => d.clone(),
              defaultEquals: (t) => t.toCss(!0) === d.toCss(!0),
            },
          }),
        ],
        c.prototype,
        'color',
        void 0,
      ),
        (0, s._)(
          [(0, p.J)({ Water: 'water' }, { readOnly: !0 })],
          c.prototype,
          'type',
          void 0,
        ),
        (0, s._)(
          [
            (0, n.Cb)({
              type: ['small', 'medium', 'large'],
              json: { write: !0, default: 'medium' },
            }),
          ],
          c.prototype,
          'waterbodySize',
          void 0,
        ),
        (0, s._)(
          [(0, n.Cb)({ type: Number, json: { write: !0, default: null } })],
          c.prototype,
          'waveDirection',
          void 0,
        ),
        (0, s._)(
          [
            (0, n.Cb)({
              type: ['calm', 'rippled', 'slight', 'moderate'],
              json: { write: !0, default: 'moderate' },
            }),
          ],
          c.prototype,
          'waveStrength',
          void 0,
        ),
        (c = r = (0, s._)([(0, y.j)('esri.symbols.WaterSymbol3DLayer')], c));
      const d = new i.Z([0, 119, 190]),
        u = c;
    },
    59390: (t, e, o) => {
      o.d(e, { Z: () => m });
      var r,
        s = o(43697),
        i = o(92604),
        l = o(95330),
        n = o(5600),
        a = (o(67676), o(80442), o(75215), o(36030)),
        p = o(52011),
        y = o(65587),
        h = o(25929),
        c = o(89164),
        d = o(23203);
      const u = i.Z.getLogger('esri.symbols.WebStyleSymbol');
      let b = (r = class extends c.Z {
        constructor(t) {
          super(t),
            (this.styleName = null),
            (this.portal = null),
            (this.styleUrl = null),
            (this.thumbnail = null),
            (this.name = null),
            (this.type = 'web-style');
        }
        read(t, e) {
          (this.portal = e ? e.portal : void 0), super.read(t, e);
        }
        clone() {
          return new r({
            name: this.name,
            styleUrl: this.styleUrl,
            styleName: this.styleName,
            portal: this.portal,
          });
        }
        fetchSymbol(t) {
          return this._fetchSymbol('webRef', t);
        }
        fetchCIMSymbol(t) {
          return this._fetchSymbol('cimRef', t);
        }
        async _fetchSymbol(t, e) {
          const r = await o.e(4499).then(o.bind(o, 74499));
          (0, l.k_)(e);
          const s = r.resolveWebStyleSymbol(
            this,
            { portal: this.portal },
            t,
            e,
          );
          return (
            s.catch((t) => {
              u.error(
                '#fetchSymbol()',
                'Failed to create symbol from style',
                t,
              );
            }),
            s
          );
        }
      });
      (0, s._)(
        [(0, n.Cb)({ json: { write: !1 } })],
        b.prototype,
        'color',
        void 0,
      ),
        (0, s._)(
          [(0, n.Cb)({ type: String, json: { write: !0 } })],
          b.prototype,
          'styleName',
          void 0,
        ),
        (0, s._)(
          [(0, n.Cb)({ type: y.Z, json: { write: !1 } })],
          b.prototype,
          'portal',
          void 0,
        ),
        (0, s._)(
          [(0, n.Cb)({ type: String, json: { read: h.r, write: h.w } })],
          b.prototype,
          'styleUrl',
          void 0,
        ),
        (0, s._)(
          [(0, n.Cb)({ type: d.p, json: { read: !1 } })],
          b.prototype,
          'thumbnail',
          void 0,
        ),
        (0, s._)(
          [(0, n.Cb)({ type: String, json: { write: !0 } })],
          b.prototype,
          'name',
          void 0,
        ),
        (0, s._)(
          [(0, a.J)({ styleSymbolReference: 'web-style' }, { readOnly: !0 })],
          b.prototype,
          'type',
          void 0,
        ),
        (b = r = (0, s._)([(0, p.j)('esri.symbols.WebStyleSymbol')], b));
      const m = b;
    },
    27539: (t, e, o) => {
      o.d(e, { Z: () => a });
      var r = o(43697),
        s = o(96674),
        i = o(5600),
        l = (o(67676), o(80442), o(75215), o(52011));
      let n = class extends s.wq {
        constructor(t) {
          super(t), (this.visible = !0);
        }
        clone() {}
      };
      (0, r._)(
        [
          (0, i.Cb)({
            type: ['line'],
            readOnly: !0,
            json: { read: !1, write: { ignoreOrigin: !0 } },
          }),
        ],
        n.prototype,
        'type',
        void 0,
      ),
        (0, r._)([(0, i.Cb)({ readOnly: !0 })], n.prototype, 'visible', void 0),
        (n = (0, r._)([(0, l.j)('esri.symbols.callouts.Callout3D')], n));
      const a = n;
    },
    69496: (t, e, o) => {
      o.d(e, { Z: () => m });
      var r,
        s = o(43697),
        i = o(22303),
        l = o(22974),
        n = o(70586),
        a = o(62357),
        p = o(5600),
        y = (o(75215), o(36030)),
        h = o(52011),
        c = o(27539),
        d = o(6352),
        u = o(37308);
      let b = (r = class extends c.Z {
        constructor(t) {
          super(t),
            (this.type = 'line'),
            (this.color = new i.Z([0, 0, 0, 1])),
            (this.size = (0, a.Wz)(1)),
            (this.border = null);
        }
        get visible() {
          return this.size > 0 && (0, n.pC)(this.color) && this.color.a > 0;
        }
        clone() {
          return new r({
            color: (0, l.d9)(this.color),
            size: this.size,
            border: (0, l.d9)(this.border),
          });
        }
      });
      (0, s._)(
        [(0, y.J)({ line: 'line' }, { readOnly: !0 })],
        b.prototype,
        'type',
        void 0,
      ),
        (0, s._)([(0, p.Cb)(u.a)], b.prototype, 'color', void 0),
        (0, s._)([(0, p.Cb)(u.y)], b.prototype, 'size', void 0),
        (0, s._)(
          [(0, p.Cb)({ type: d.a, json: { write: !0 } })],
          b.prototype,
          'border',
          void 0,
        ),
        (0, s._)([(0, p.Cb)({ readOnly: !0 })], b.prototype, 'visible', null),
        (b = r =
          (0, s._)([(0, h.j)('esri.symbols.callouts.LineCallout3D')], b));
      const m = b;
    },
    84275: (t, e, o) => {
      o.d(e, { Y2: () => n, gv: () => l, Uy: () => i });
      var r = o(27539),
        s = o(69496);
      function i(t) {
        if (!t) return !1;
        const e = t.verticalOffset;
        return !!e && !(e.screenLength <= 0 || e.maxWorldLength <= 0);
      }
      function l(t) {
        if (!t) return !1;
        if (!t.supportsCallout || !t.supportsCallout()) return !1;
        const e = t.callout;
        return !!e && !!e.visible && !!i(t);
      }
      const n = {
        types: { key: 'type', base: r.Z, typeMap: { line: s.Z } },
        json: { write: !0 },
      };
    },
    56332: (t, e, o) => {
      o.d(e, { Z: () => f });
      var r = o(43697),
        s = o(22303),
        i = o(96674),
        l = o(22974),
        n = o(62357),
        a = o(5600),
        p = (o(75215), o(52011)),
        y = o(37308);
      let h = class extends i.wq {
        constructor(t) {
          super(t),
            (this.color = new s.Z([0, 0, 0, 1])),
            (this.extensionLength = 0),
            (this.size = (0, n.Wz)(1));
        }
        clone() {}
        cloneProperties() {
          return {
            color: (0, l.d9)(this.color),
            size: this.size,
            extensionLength: this.extensionLength,
          };
        }
      };
      (0, r._)(
        [
          (0, a.Cb)({
            type: ['solid', 'sketch'],
            readOnly: !0,
            json: { read: !0, write: { ignoreOrigin: !0 } },
          }),
        ],
        h.prototype,
        'type',
        void 0,
      ),
        (0, r._)([(0, a.Cb)(y.a)], h.prototype, 'color', void 0),
        (0, r._)(
          [
            (0, a.Cb)({
              ...y.y,
              json: { write: { overridePolicy: (t) => ({ enabled: !!t }) } },
            }),
          ],
          h.prototype,
          'extensionLength',
          void 0,
        ),
        (0, r._)([(0, a.Cb)(y.y)], h.prototype, 'size', void 0),
        (h = (0, r._)([(0, p.j)('esri.symbols.edges.Edges3D')], h));
      const c = h;
      o(92604), o(67676), o(80442), o(37697);
      var d,
        u = o(36030);
      let b = (d = class extends c {
        constructor(t) {
          super(t), (this.type = 'sketch');
        }
        clone() {
          return new d(this.cloneProperties());
        }
      });
      (0, r._)(
        [(0, u.J)({ sketch: 'sketch' }, { readOnly: !0 })],
        b.prototype,
        'type',
        void 0,
      ),
        (b = d = (0, r._)([(0, p.j)('esri.symbols.edges.SketchEdges3D')], b));
      const m = b;
      var w;
      let v = (w = class extends c {
        constructor(t) {
          super(t), (this.type = 'solid');
        }
        clone() {
          return new w(this.cloneProperties());
        }
      });
      (0, r._)(
        [(0, u.J)({ solid: 'solid' }, { readOnly: !0 })],
        v.prototype,
        'type',
        void 0,
      ),
        (v = w = (0, r._)([(0, p.j)('esri.symbols.support.SolidEdges3D')], v));
      const f = {
        types: { key: 'type', base: c, typeMap: { solid: v, sketch: m } },
        json: { write: !0 },
      };
    },
    32626: (t, e, o) => {
      o.d(e, { Z: () => a });
      var r = o(43697),
        s = o(96674),
        i = o(5600),
        l = (o(67676), o(80442), o(75215), o(52011));
      let n = class extends s.wq {
        constructor(t) {
          super(t);
        }
        clone() {}
      };
      (0, r._)(
        [
          (0, i.Cb)({
            type: ['style'],
            readOnly: !0,
            json: { read: !0, write: { ignoreOrigin: !0 } },
          }),
        ],
        n.prototype,
        'type',
        void 0,
      ),
        (n = (0, r._)([(0, l.j)('esri.symbols.patterns.LinePattern3D')], n));
      const a = n;
    },
    4618: (t, e, o) => {
      o.d(e, { Z: () => c });
      var r,
        s = o(43697),
        i = o(35454),
        l = o(5600),
        n = (o(67676), o(80442), o(75215), o(36030)),
        a = o(52011),
        p = o(32626);
      const y = (0, i.w)()({
        dash: 'dash',
        'dash-dot': 'dash-dot',
        'dash-dot-dot': 'long-dash-dot-dot',
        dot: 'dot',
        'long-dash': 'long-dash',
        'long-dash-dot': 'long-dash-dot',
        null: 'none',
        'short-dash': 'short-dash',
        'short-dash-dot': 'short-dash-dot',
        'short-dash-dot-dot': 'short-dash-dot-dot',
        'short-dot': 'short-dot',
        solid: 'solid',
      });
      let h = (r = class extends p.Z {
        constructor(t) {
          super(t), (this.type = 'style'), (this.style = 'solid');
        }
        clone() {
          const t = { style: this.style };
          return new r(t);
        }
      });
      (0, s._)([(0, l.Cb)({ type: ['style'] })], h.prototype, 'type', void 0),
        (0, s._)(
          [
            (0, n.J)(y),
            (0, l.Cb)({
              type: [
                'dash',
                'dash-dot',
                'dot',
                'long-dash',
                'long-dash-dot',
                'long-dash-dot-dot',
                'none',
                'short-dash',
                'short-dash-dot',
                'short-dash-dot-dot',
                'short-dot',
                'solid',
              ],
            }),
          ],
          h.prototype,
          'style',
          void 0,
        ),
        (h = r =
          (0, s._)([(0, a.j)('esri.symbols.patterns.LineStylePattern3D')], h));
      const c = h;
    },
    41776: (t, e, o) => {
      o.d(e, { Z: () => a });
      var r = o(43697),
        s = o(96674),
        i = o(5600),
        l = (o(67676), o(80442), o(75215), o(52011));
      let n = class extends s.wq {
        constructor(t) {
          super(t);
        }
        clone() {}
      };
      (0, r._)(
        [
          (0, i.Cb)({
            type: ['style'],
            readOnly: !0,
            json: { read: !0, write: { ignoreOrigin: !0 } },
          }),
        ],
        n.prototype,
        'type',
        void 0,
      ),
        (n = (0, r._)([(0, l.j)('esri.symbols.patterns.Pattern3D')], n));
      const a = n;
    },
    74721: (t, e, o) => {
      o.d(e, { Z: () => p });
      var r,
        s = o(43697),
        i = o(5600),
        l = (o(67676), o(80442), o(75215), o(52011)),
        n = o(41776);
      let a = (r = class extends n.Z {
        constructor(t) {
          super(t), (this.type = 'style'), (this.style = 'solid');
        }
        clone() {
          const t = { style: this.style };
          return new r(t);
        }
      });
      (0, s._)([(0, i.Cb)({ type: ['style'] })], a.prototype, 'type', void 0),
        (0, s._)(
          [
            (0, i.Cb)({
              type: [
                'backward-diagonal',
                'cross',
                'diagonal-cross',
                'forward-diagonal',
                'horizontal',
                'none',
                'solid',
                'vertical',
              ],
              json: { read: !0, write: !0 },
            }),
          ],
          a.prototype,
          'style',
          void 0,
        ),
        (a = r =
          (0, s._)([(0, l.j)('esri.symbols.patterns.StylePattern3D')], a));
      const p = a;
    },
    17495: (t, e, o) => {
      o.d(e, { D: () => a, q: () => n });
      var r = o(32626),
        s = o(4618),
        i = o(41776),
        l = o(74721);
      const n = {
          types: { key: 'type', base: i.Z, typeMap: { style: l.Z } },
          json: { write: !0 },
        },
        a = {
          types: { key: 'type', base: r.Z, typeMap: { style: s.Z } },
          json: { write: !0 },
        };
    },
    71144: (t, e, o) => {
      o.d(e, { Z: () => y });
      var r,
        s = o(43697),
        i = o(15923),
        l = o(5600),
        n = (o(67676), o(80442), o(75215), o(52011)),
        a = o(65587);
      let p = (r = class extends i.Z {
        constructor() {
          super(...arguments), (this.portal = null);
        }
        clone() {
          return new r({
            name: this.name,
            styleUrl: this.styleUrl,
            styleName: this.styleName,
            portal: this.portal,
          });
        }
      });
      (0, s._)([(0, l.Cb)({ type: String })], p.prototype, 'name', void 0),
        (0, s._)(
          [(0, l.Cb)({ type: String })],
          p.prototype,
          'styleUrl',
          void 0,
        ),
        (0, s._)(
          [(0, l.Cb)({ type: String })],
          p.prototype,
          'styleName',
          void 0,
        ),
        (0, s._)([(0, l.Cb)({ type: a.Z })], p.prototype, 'portal', void 0),
        (p = r = (0, s._)([(0, n.j)('esri.symbols.support.StyleOrigin')], p));
      const y = p;
    },
    52879: (t, e, o) => {
      o.d(e, { b: () => y });
      var r,
        s = o(43697),
        i = o(96674),
        l = o(70586),
        n = o(5600),
        a = (o(67676), o(80442), o(75215), o(52011)),
        p = o(37308);
      let y = (r = class extends i.wq {
        constructor(t) {
          super(t), (this.color = null);
        }
        clone() {
          const t = {
            color: (0, l.pC)(this.color) ? this.color.clone() : null,
          };
          return new r(t);
        }
      });
      (0, s._)([(0, n.Cb)(p.a)], y.prototype, 'color', void 0),
        (y = r =
          (0, s._)([(0, a.j)('esri.symbols.support.Symbol3DMaterial')], y));
    },
    7413: (t, e, o) => {
      o.d(e, { _: () => p });
      var r,
        s = o(43697),
        i = o(96674),
        l = o(5600),
        n = (o(67676), o(80442), o(75215), o(52011)),
        a = o(37308);
      let p = (r = class extends i.wq {
        constructor() {
          super(...arguments),
            (this.screenLength = 0),
            (this.minWorldLength = 0);
        }
        clone() {
          return new r({
            screenLength: this.screenLength,
            minWorldLength: this.minWorldLength,
            maxWorldLength: this.maxWorldLength,
          });
        }
      });
      (0, s._)([(0, l.Cb)(a.y)], p.prototype, 'screenLength', void 0),
        (0, s._)(
          [(0, l.Cb)({ type: Number, json: { write: !0, default: 0 } })],
          p.prototype,
          'minWorldLength',
          void 0,
        ),
        (0, s._)(
          [(0, l.Cb)({ type: Number, json: { write: !0 } })],
          p.prototype,
          'maxWorldLength',
          void 0,
        ),
        (p = r =
          (0, s._)(
            [(0, n.j)('esri.symbols.support.Symbol3DVerticalOffset')],
            p,
          ));
    },
    23203: (t, e, o) => {
      o.d(e, { p: () => a });
      var r,
        s = o(43697),
        i = o(15923),
        l = o(5600),
        n = (o(67676), o(80442), o(75215), o(52011));
      let a = (r = class extends i.Z {
        clone() {
          return new r({ url: this.url });
        }
      });
      (0, s._)([(0, l.Cb)({ type: String })], a.prototype, 'url', void 0),
        (a = r = (0, s._)([(0, n.j)('esri.symbols.support.Thumbnail')], a));
    },
    50178: (t, e, o) => {
      o.d(e, { rx: () => l, l9: () => i, ix: () => s });
      var r = o(22303);
      const s = new r.Z('white'),
        i = (new r.Z('black'), new r.Z([255, 255, 255, 0]));
      function l(t) {
        return 0 === t.r && 0 === t.g && 0 === t.b;
      }
    },
    57742: (t, e, o) => {
      o.d(e, { J: () => r, k: () => s });
      const r = ['begin', 'end', 'begin-end'],
        s = ['arrow', 'circle', 'square', 'diamond', 'cross', 'x'];
    },
    37308: (t, e, o) => {
      o.d(e, { a: () => n, y: () => a });
      var r = o(22303),
        s = o(62357),
        i = o(75215),
        l = o(65242);
      const n = {
          type: r.Z,
          json: {
            type: [i.z8],
            default: null,
            read: {
              source: ['color', 'transparency'],
              reader: function (t, e) {
                const o = null != e.transparency ? (0, l.b)(e.transparency) : 1,
                  s = e.color;
                return s && Array.isArray(s)
                  ? new r.Z([s[0] || 0, s[1] || 0, s[2] || 0, o])
                  : null;
              },
            },
            write: {
              target: { color: { type: [i.z8] }, transparency: { type: i.z8 } },
              writer: function (t, e) {
                e.color = t.toJSON().slice(0, 3);
                const o = (0, l.a)(t.a);
                0 !== o && (e.transparency = o);
              },
            },
          },
        },
        a = { type: Number, cast: s.t_, json: { write: !0 } };
    },
    45119: (t, e, o) => {
      o.d(e, {
        Hc: () => y,
        w2: () => c,
        Uz: () => p,
        $K: () => i,
        KW: () => h,
      }),
        o(80442);
      var r = o(65617),
        s = o(60437);
      function i(t, { isPrimitive: e, width: o, depth: s, height: i }) {
        const l = e ? 10 : 1;
        if (null == o && null == i && null == s)
          return [l * t[0], l * t[1], l * t[2]];
        const n = (0, r.f)(o, s, i);
        let a;
        for (let e = 0; e < 3; e++) {
          const o = n[e];
          if (null != o) {
            a = o / t[e];
            break;
          }
        }
        for (let e = 0; e < 3; e++) null == n[e] && (n[e] = t[e] * a);
        return n;
      }
      const l = (0, s.al)(-0.5, -0.5, -0.5, 0.5, 0.5, 0.5),
        n = (0, s.al)(-0.5, -0.5, 0, 0.5, 0.5, 1),
        a = (0, s.al)(-0.5, -0.5, 0, 0.5, 0.5, 0.5);
      function p(t) {
        switch (t) {
          case 'sphere':
          case 'cube':
          case 'diamond':
            return l;
          case 'cylinder':
          case 'cone':
          case 'inverted-cone':
            return n;
          case 'tetrahedron':
            return a;
          default:
            return;
        }
      }
      const y = ['butt', 'square', 'round'],
        h = [...y, 'none'],
        c = ['miter', 'bevel', 'round'];
    },
    61565: (t, e, o) => {
      o.d(e, {
        uC: () => i,
        hR: () => l,
        Xw: () => n,
        x0: () => p,
        OJ: () => y,
        Ck: () => a,
        Nj: () => h,
      });
      var r = o(22021),
        s = o(75215);
      const i = ['none', 'underline', 'line-through'],
        l = ['normal', 'italic', 'oblique'],
        n = ['normal', 'lighter', 'bold', 'bolder'],
        a = {
          type: Number,
          cast: (t) => {
            const e = (0, s.q9)(t);
            return 0 === e ? 1 : (0, r.uZ)(e, 0.1, 4);
          },
          nonNullable: !0,
        },
        p = { type: ['left', 'right', 'center', 'justify'], nonNullable: !0 },
        y = { type: ['left', 'right', 'center'], nonNullable: !0 },
        h = { type: ['baseline', 'top', 'middle', 'bottom'], nonNullable: !0 };
    },
    94075: (t, e, o) => {
      o.d(e, { Ds: () => n, KA: () => l });
      var r = o(17452),
        s = o(25929);
      function i(t, e) {
        return (function (t) {
          return (
            t &&
            ('service' === t.origin || 'portal-item' === t.origin) &&
            t.layer &&
            ('feature' === t.layer.type || 'stream' === t.layer.type)
          );
        })(e) &&
          !(0, r.YP)(t) &&
          e.layer.parsedUrl
          ? (0, r.v_)(e.layer.parsedUrl.path, 'images', t)
          : (0, s.f)(t, e);
      }
      const l = {
          json: {
            read: {
              source: ['imageData', 'url'],
              reader: function (t, e, o) {
                return e.imageData
                  ? (0, r._l)({
                      mediaType: e.contentType || 'image/png',
                      isBase64: !0,
                      data: e.imageData,
                    })
                  : i(e.url, o);
              },
            },
            write: {
              writer(t, e, o, i) {
                !(function (t, e, o, i) {
                  if ((0, r.HK)(t)) {
                    const l = (0, r.sJ)(t);
                    (e.contentType = l.mediaType),
                      (e.imageData = l.data),
                      o &&
                        o.imageData === e.imageData &&
                        o.url &&
                        (0, s.w)(o.url, e, 'url', i);
                  } else (0, s.w)(t, e, 'url', i);
                })(t, e, this.source, i);
              },
            },
          },
        },
        n = {
          readOnly: !0,
          json: {
            read: {
              source: ['imageData', 'url'],
              reader(t, e, o) {
                const r = {};
                return (
                  e.imageData && (r.imageData = e.imageData),
                  e.contentType && (r.contentType = e.contentType),
                  e.url && (r.url = i(e.url, o)),
                  r
                );
              },
            },
          },
        };
    },
    65242: (t, e, o) => {
      o.d(e, { a: () => s, b: () => i });
      var r = o(75215);
      function s(t) {
        const e = (0, r.vU)(100 * (1 - t));
        return Math.max(0, Math.min(e, 100));
      }
      function i(t) {
        const e = 1 - t / 100;
        return Math.max(0, Math.min(e, 1));
      }
    },
  },
]);
