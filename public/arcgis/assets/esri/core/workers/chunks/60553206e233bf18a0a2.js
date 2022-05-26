'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [7039],
  {
    57039: (e, r, t) => {
      t.r(r), t.d(r, { default: () => N });
      var s = t(43697),
        i = t(5600),
        o = (t(67676), t(80442), t(75215), t(52011)),
        a = t(3172),
        n = t(28263),
        l = t(82526),
        u = t(93924),
        p = t(11282),
        y = (t(66577), t(38171)),
        c = t(96674),
        f = t(70586),
        d = t(71715),
        g = t(82971),
        B = t(79166),
        m = t(13473),
        v = t(58901),
        _ = t(38913),
        b = t(33955);
      function h(e) {
        return e.features.map((r) => {
          const t = g.Z.fromJSON(e.spatialReference),
            s = y.Z.fromJSON(r);
          return ((0, f.Wg)(s.geometry).spatialReference = t), s;
        });
      }
      function P(e) {
        return (0, f.lV)(
          e.features.map(
            (r) => (
              (0, f.pC)(r.geometry) &&
                (r.geometry.spatialReference = e.spatialReference),
              (0, b.im)(r.geometry)
            ),
          ),
        );
      }
      let A = class extends c.wq {
        constructor(e) {
          super(e),
            (this.facilities = null),
            (this.messages = null),
            (this.pointBarriers = null),
            (this.polylineBarriers = null),
            (this.polygonBarriers = null),
            (this.serviceAreaPolylines = null),
            (this.serviceAreaPolygons = null);
        }
        readFacilities(e) {
          return P(e);
        }
        readPointBarriers(e, r) {
          return P(r.barriers);
        }
        readPolylineBarriers(e) {
          return P(e);
        }
        readPolygonBarriers(e) {
          return P(e);
        }
        readIncidents(e, r) {
          return h(r.saPolylines);
        }
        readServiceAreaPolygons(e, r) {
          return h(r.saPolygons);
        }
      };
      (0, s._)([(0, i.Cb)({ type: [m.Z] })], A.prototype, 'facilities', void 0),
        (0, s._)([(0, d.r)('facilities')], A.prototype, 'readFacilities', null),
        (0, s._)([(0, i.Cb)({ type: [B.Z] })], A.prototype, 'messages', void 0),
        (0, s._)(
          [(0, i.Cb)({ type: [m.Z] })],
          A.prototype,
          'pointBarriers',
          void 0,
        ),
        (0, s._)(
          [(0, d.r)('pointBarriers', ['barriers'])],
          A.prototype,
          'readPointBarriers',
          null,
        ),
        (0, s._)(
          [(0, i.Cb)({ type: [v.Z] })],
          A.prototype,
          'polylineBarriers',
          void 0,
        ),
        (0, s._)(
          [(0, d.r)('polylineBarriers')],
          A.prototype,
          'readPolylineBarriers',
          null,
        ),
        (0, s._)(
          [(0, i.Cb)({ type: [_.Z] })],
          A.prototype,
          'polygonBarriers',
          void 0,
        ),
        (0, s._)(
          [(0, d.r)('polygonBarriers')],
          A.prototype,
          'readPolygonBarriers',
          null,
        ),
        (0, s._)(
          [(0, i.Cb)({ type: [y.Z] })],
          A.prototype,
          'serviceAreaPolylines',
          void 0,
        ),
        (0, s._)(
          [(0, d.r)('serviceAreaPolylines', ['saPolylines'])],
          A.prototype,
          'readIncidents',
          null,
        ),
        (0, s._)(
          [(0, i.Cb)({ type: [y.Z] })],
          A.prototype,
          'serviceAreaPolygons',
          void 0,
        ),
        (0, s._)(
          [(0, d.r)('serviceAreaPolygons', ['saPolygons'])],
          A.prototype,
          'readServiceAreaPolygons',
          null,
        ),
        (A = (0, s._)(
          [(0, o.j)('esri.rest.support.ServiceAreaSolveResult')],
          A,
        ));
      const C = A,
        S = (0, n.E)({
          accumulateAttributes: { name: 'accumulateAttributeNames' },
          attributeParameterValues: !0,
          defaultBreaks: !0,
          facilities: !0,
          outSpatialReference: {
            name: 'outSR',
            getter: (e) => e.outSpatialReference.wkid,
          },
          pointBarriers: { name: 'barriers' },
          polylineBarriers: !0,
          polygonBarriers: !0,
          restrictionAttributes: { name: 'restrictionAttributeNames' },
          returnPointBarriers: { name: 'returnBarriers' },
          travelMode: !0,
        });
      var Z = t(59633);
      let k = class extends Z.Z {
        constructor(e) {
          super(e), (this.url = null);
        }
        solve(e, r) {
          return (async function (e, r, t) {
            const s = [],
              i = [],
              o = {},
              n = {},
              y = (0, p.en)(e),
              { path: c } = y;
            r.facilities &&
              r.facilities.features &&
              (0, u.et)(r.facilities.features, i, 'facilities.features', o),
              r.pointBarriers &&
                r.pointBarriers.features &&
                (0, u.et)(
                  r.pointBarriers.features,
                  i,
                  'pointBarriers.features',
                  o,
                ),
              r.polylineBarriers &&
                r.polylineBarriers.features &&
                (0, u.et)(
                  r.polylineBarriers.features,
                  i,
                  'polylineBarriers.features',
                  o,
                ),
              r.polygonBarriers &&
                r.polygonBarriers.features &&
                (0, u.et)(
                  r.polygonBarriers.features,
                  i,
                  'polygonBarriers.features',
                  o,
                );
            const f = await (0, l.aX)(i);
            for (const e in o) {
              const r = o[e];
              s.push(e), (n[e] = f.slice(r[0], r[1]));
            }
            if ((0, u.Wf)(n, s)) {
              let e = null;
              try {
                e = await (0, u.bI)(c, r.apiKey, t);
              } catch {}
              e && !e.hasZ && (0, u.ef)(n, s);
            }
            for (const e in n)
              n[e].forEach((t, s) => {
                r.get(e)[s].geometry = t;
              });
            const d = {
                ...t,
                query: { ...y.query, ...S.toQueryParams(r), f: 'json' },
              },
              { data: g } = await (0, a.default)(`${c}/solveServiceArea`, d);
            return C.fromJSON(g);
          })(this.url, e, r);
        }
      };
      (0, s._)([(0, i.Cb)()], k.prototype, 'url', void 0),
        (k = (0, s._)([(0, o.j)('esri.tasks.ServiceAreaTask')], k));
      const N = k;
    },
    59633: (e, r, t) => {
      t.d(r, { Z: () => u });
      var s = t(43697),
        i = t(15923),
        o = t(17452),
        a = t(5600),
        n = (t(67676), t(80442), t(75215), t(52011));
      let l = class extends i.Z {
        constructor(...e) {
          super(...e), (this.requestOptions = null), (this.url = null);
        }
        normalizeCtorArgs(e, r) {
          return 'string' != typeof e ? e : { url: e, ...r };
        }
        get parsedUrl() {
          return this._parseUrl(this.url);
        }
        _parseUrl(e) {
          return e ? (0, o.mN)(e) : null;
        }
        _encode(e, r, t) {
          const s = {};
          for (const i in e) {
            if ('declaredClass' === i) continue;
            const o = e[i];
            if (null != o && 'function' != typeof o)
              if (Array.isArray(o)) {
                s[i] = [];
                for (let e = 0; e < o.length; e++) s[i][e] = this._encode(o[e]);
              } else if ('object' == typeof o)
                if (o.toJSON) {
                  const e = o.toJSON(t && t[i]);
                  s[i] = r ? e : JSON.stringify(e);
                } else s[i] = r ? o : JSON.stringify(o);
              else s[i] = o;
          }
          return s;
        }
      };
      (0, s._)([(0, a.Cb)({ readOnly: !0 })], l.prototype, 'parsedUrl', null),
        (0, s._)([(0, a.Cb)()], l.prototype, 'requestOptions', void 0),
        (0, s._)([(0, a.Cb)({ type: String })], l.prototype, 'url', void 0),
        (l = (0, s._)([(0, n.j)('esri.tasks.Task')], l));
      const u = l;
    },
  },
]);
