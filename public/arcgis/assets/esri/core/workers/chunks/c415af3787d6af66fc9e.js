'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [8234, 4889],
  {
    23334: (e, t, r) => {
      r.d(t, { F: () => N });
      var s = r(3172),
        o = r(70586),
        i = r(28263),
        n = r(82526),
        a = r(93924),
        l = r(11282),
        p = r(43697),
        u = r(38171),
        y = r(96674),
        c = r(5600),
        f = (r(67676), r(80442), r(75215), r(71715)),
        d = r(52011),
        m = r(74889),
        h = r(79166),
        g = r(95642);
      let v = class extends y.wq {
        constructor(e) {
          super(e),
            (this.directionLines = null),
            (this.directionPoints = null),
            (this.directions = null),
            (this.route = null),
            (this.routeName = null),
            (this.stops = null);
        }
      };
      (0, p._)(
        [(0, c.Cb)({ type: m.default, json: { write: !0 } })],
        v.prototype,
        'directionLines',
        void 0,
      ),
        (0, p._)(
          [(0, c.Cb)({ type: m.default, json: { write: !0 } })],
          v.prototype,
          'directionPoints',
          void 0,
        ),
        (0, p._)(
          [(0, c.Cb)({ type: g.Z, json: { write: !0 } })],
          v.prototype,
          'directions',
          void 0,
        ),
        (0, p._)(
          [(0, c.Cb)({ type: u.Z, json: { write: !0 } })],
          v.prototype,
          'route',
          void 0,
        ),
        (0, p._)(
          [(0, c.Cb)({ type: String, json: { write: !0 } })],
          v.prototype,
          'routeName',
          void 0,
        ),
        (0, p._)(
          [(0, c.Cb)({ type: [u.Z], json: { write: !0 } })],
          v.prototype,
          'stops',
          void 0,
        ),
        (v = (0, p._)([(0, d.j)('esri.rest.support.RouteResult')], v));
      const b = v;
      function _(e) {
        return e && m.default.fromJSON(e).features.map((e) => e);
      }
      let R = class extends y.wq {
        constructor(e) {
          super(e),
            (this.messages = null),
            (this.pointBarriers = null),
            (this.polylineBarriers = null),
            (this.polygonBarriers = null),
            (this.routeResults = null);
        }
        readPointBarriers(e, t) {
          return _(t.barriers);
        }
        readPolylineBarriers(e) {
          return _(e);
        }
        readPolygonBarriers(e) {
          return _(e);
        }
      };
      (0, p._)([(0, c.Cb)({ type: [h.Z] })], R.prototype, 'messages', void 0),
        (0, p._)(
          [(0, c.Cb)({ type: [u.Z] })],
          R.prototype,
          'pointBarriers',
          void 0,
        ),
        (0, p._)(
          [(0, f.r)('pointBarriers', ['barriers'])],
          R.prototype,
          'readPointBarriers',
          null,
        ),
        (0, p._)(
          [(0, c.Cb)({ type: [u.Z] })],
          R.prototype,
          'polylineBarriers',
          void 0,
        ),
        (0, p._)(
          [(0, f.r)('polylineBarriers')],
          R.prototype,
          'readPolylineBarriers',
          null,
        ),
        (0, p._)(
          [(0, c.Cb)({ type: [u.Z] })],
          R.prototype,
          'polygonBarriers',
          void 0,
        ),
        (0, p._)(
          [(0, f.r)('polygonBarriers')],
          R.prototype,
          'readPolygonBarriers',
          null,
        ),
        (0, p._)(
          [(0, c.Cb)({ type: [b] })],
          R.prototype,
          'routeResults',
          void 0,
        ),
        (R = (0, p._)([(0, d.j)('esri.rest.support.RouteSolveResult')], R));
      const C = R,
        T = (0, i.E)({
          accumulateAttributes: { name: 'accumulateAttributeNames' },
          attributeParameterValues: !0,
          directionsTimeAttribute: { name: 'directionsTimeAttributeName' },
          impedanceAttribute: { name: 'impedanceAttributeName' },
          outSpatialReference: {
            name: 'outSR',
            getter: (e) => e.outSpatialReference.wkid,
          },
          pointBarriers: { name: 'barriers' },
          polylineBarriers: !0,
          polygonBarriers: !0,
          restrictionAttributes: { name: 'restrictionAttributeNames' },
          stops: !0,
          travelMode: !0,
        });
      function w(e) {
        return (
          'esri.rest.support.FeatureSet' ===
          (null == e ? void 0 : e.declaredClass)
        );
      }
      async function N(e, t, r) {
        const i = [],
          p = [],
          u = {},
          y = {},
          c = (0, l.en)(e),
          { path: f } = c;
        w(t.stops) && (0, a.et)(t.stops.features, p, 'stops.features', u),
          w(t.pointBarriers) &&
            (0, a.et)(t.pointBarriers.features, p, 'pointBarriers.features', u),
          w(t.polylineBarriers) &&
            (0, a.et)(
              t.polylineBarriers.features,
              p,
              'polylineBarriers.features',
              u,
            ),
          w(t.polygonBarriers) &&
            (0, a.et)(
              t.polygonBarriers.features,
              p,
              'polygonBarriers.features',
              u,
            );
        const d = await (0, n.aX)(p);
        for (const e in u) {
          const t = u[e];
          i.push(e), (y[e] = d.slice(t[0], t[1]));
        }
        if ((0, a.Wf)(y, i)) {
          let e = null;
          try {
            e = await (0, a.bI)(f, t.apiKey, r);
          } catch {}
          e && !e.hasZ && (0, a.ef)(y, i);
        }
        for (const e in y)
          y[e].forEach((r, s) => {
            t.get(e)[s].geometry = r;
          });
        const m = {
            ...r,
            query: { ...c.query, ...T.toQueryParams(t), f: 'json' },
          },
          h = f.endsWith('/solve') ? f : `${f}/solve`,
          { data: g } = await (0, s.default)(h, m);
        return (function (e) {
          var t, r, s, i, n;
          const a = new Map(),
            {
              directionLines: l,
              directionPoints: p,
              directions: u,
              routes: y,
              stops: c,
              barriers: f,
              polygonBarriers: d,
              polylineBarriers: m,
              messages: h,
            } = e,
            g =
              null !=
              (t =
                null !=
                (r =
                  null !=
                  (s =
                    null != (i = null == y ? void 0 : y.spatialReference)
                      ? i
                      : null == c
                      ? void 0
                      : c.spatialReference)
                    ? s
                    : null == f
                    ? void 0
                    : f.spatialReference)
                  ? r
                  : null == d
                  ? void 0
                  : d.spatialReference)
                ? t
                : null == m
                ? void 0
                : m.spatialReference;
          null == y ||
            y.features.forEach((e) => {
              const t = e.attributes.Name,
                r = e.attributes.ObjectID;
              a.has(t)
                ? ((a.get(t).route = e), (a.get(t).routeId = r))
                : a.set(t, { route: e, routeId: r, routeName: t }),
                (0, o.pC)(e.geometry) && (e.geometry.spatialReference = g);
            }),
            null == u ||
              u.forEach((e) => {
                const t = e.routeName;
                a.has(t)
                  ? (a.get(t).directions = e)
                  : a.set(t, { routeName: t, directions: e });
              }),
            null == c ||
              c.features.forEach((e) => {
                var t;
                const r = null != (t = e.attributes.RouteName) ? t : null;
                a.has(r)
                  ? a.get(r).stops
                    ? a.get(r).stops.push(e)
                    : (a.get(r).stops = [e])
                  : a.set(r, { stops: [e], routeName: r }),
                  (0, o.pC)(e.geometry) && (e.geometry.spatialReference = g);
              });
          const v =
            null ==
              (n =
                null == c
                  ? void 0
                  : c.features.every((e) => null == e.attributes.RouteName)) ||
            n;
          if ((null == c ? void 0 : c.features.length) > 0 && v) {
            const e = Array.from(a.keys())[0];
            (a.get(e).stops = a.get(null).stops), a.delete(null);
          }
          null == l ||
            l.features.forEach((e) => {
              var t;
              const r = e.attributes.RouteID,
                s =
                  null ==
                  (t = Array.from(a.values()).find((e) => e.routeId === r))
                    ? void 0
                    : t.routeName;
              if (s)
                if (a.has(s))
                  if (a.get(s).directionLines)
                    a.get(s).directionLines.features.push(e);
                  else {
                    const {
                      fieldAliases: t,
                      geometryType: r,
                      spatialReference: o,
                    } = l;
                    a.get(s).directionLines = {
                      features: [e],
                      fieldAliases: t,
                      geometryType: r,
                      spatialReference: o,
                    };
                  }
                else {
                  const {
                    fieldAliases: t,
                    geometryType: r,
                    spatialReference: o,
                  } = l;
                  a.set(s, {
                    routeName: s,
                    directionLines: {
                      features: [e],
                      fieldAliases: t,
                      geometryType: r,
                      spatialReference: o,
                    },
                  });
                }
            }),
            null == p ||
              p.features.forEach((e) => {
                var t;
                const r = e.attributes.RouteID,
                  s =
                    null ==
                    (t = Array.from(a.values()).find((e) => e.routeId === r))
                      ? void 0
                      : t.routeName;
                if (s)
                  if (a.has(s))
                    if (a.get(s).directionPoints)
                      a.get(s).directionPoints.features.push(e);
                    else {
                      const {
                        fieldAliases: t,
                        geometryType: r,
                        spatialReference: o,
                      } = p;
                      a.get(s).directionPoints = {
                        features: [e],
                        fieldAliases: t,
                        geometryType: r,
                        spatialReference: o,
                      };
                    }
                  else {
                    const {
                      fieldAliases: t,
                      geometryType: r,
                      spatialReference: o,
                    } = p;
                    a.set(s, {
                      routeName: s,
                      directionPoints: {
                        features: [e],
                        fieldAliases: t,
                        geometryType: r,
                        spatialReference: o,
                      },
                    });
                  }
              });
          const b = Array.from(a.values());
          return C.fromJSON({
            routeResults: b,
            barriers: f,
            polygonBarriers: d,
            polylineBarriers: m,
            messages: h,
          });
        })(g);
      }
    },
    95642: (e, t, r) => {
      r.d(t, { Z: () => g });
      var s = r(43697),
        o = (r(66577), r(70586)),
        i = r(5600),
        n = (r(67676), r(80442), r(75215), r(71715)),
        a = r(52011),
        l = r(38171);
      let p = class extends l.Z {};
      (0, s._)([(0, i.Cb)()], p.prototype, 'events', void 0),
        (0, s._)([(0, i.Cb)()], p.prototype, 'strings', void 0),
        (p = (0, s._)([(0, a.j)('esri.rest.support.DirectionsFeature')], p));
      const u = p;
      var y = r(74889),
        c = r(6570),
        f = r(82971),
        d = r(58901),
        m = r(13473);
      let h = class extends y.default {
        constructor(e) {
          super(e),
            (this.extent = null),
            (this.features = null),
            (this.geometryType = 'polyline'),
            (this.routeId = null),
            (this.routeName = null),
            (this.totalDriveTime = null),
            (this.totalLength = null),
            (this.totalTime = null);
        }
        readFeatures(e, t) {
          var r;
          if (!e) return [];
          const s =
              null != (r = t.summary.envelope.spatialReference)
                ? r
                : t.spatialReference,
            o = s && f.Z.fromJSON(s);
          return e.map((e) => {
            var t, r;
            const s = this._decompressGeometry(e.compressedGeometry),
              i = new d.Z({ ...s, spatialReference: o }),
              n =
                null !=
                (t =
                  null == (r = e.events)
                    ? void 0
                    : r.map((e) => {
                        const {
                          arriveTimeUTC: t,
                          ETA: r,
                          point: { x: s, y: i, z: n },
                          strings: a,
                        } = e;
                        return new u({
                          geometry: new m.Z({
                            x: s,
                            y: i,
                            z: n,
                            hasZ: void 0 !== n,
                            spatialReference: o,
                          }),
                          attributes: { ETA: r, arriveTimeUTC: t },
                          strings: a,
                        });
                      }))
                  ? t
                  : [];
            return new u({
              attributes: e.attributes,
              events: n,
              geometry: i,
              strings: e.strings,
            });
          });
        }
        get mergedGeometry() {
          if (!this.features) return null;
          const e = this.features.map(({ geometry: e }) => (0, o.Wg)(e)),
            t = this.get('extent.spatialReference');
          return this._mergePolylinesToSinglePath(e, t);
        }
        get strings() {
          return this.features.map(({ strings: e }) => e);
        }
        _decompressGeometry(e) {
          let t = 0,
            r = 0,
            s = 0,
            o = 0;
          const i = [];
          let n,
            a,
            l,
            p,
            u,
            y,
            c,
            f,
            d = 0,
            m = 0,
            h = 0;
          if (
            ((u = e.match(/((\+|\-)[^\+\-\|]+|\|)/g)),
            u || (u = []),
            0 === parseInt(u[d], 32))
          ) {
            d = 2;
            const e = parseInt(u[d], 32);
            d++,
              (y = parseInt(u[d], 32)),
              d++,
              1 & e &&
                ((m = u.indexOf('|') + 1), (c = parseInt(u[m], 32)), m++),
              2 & e &&
                ((h = u.indexOf('|', m) + 1), (f = parseInt(u[h], 32)), h++);
          } else (y = parseInt(u[d], 32)), d++;
          for (; d < u.length && '|' !== u[d]; ) {
            (n = parseInt(u[d], 32) + t),
              d++,
              (t = n),
              (a = parseInt(u[d], 32) + r),
              d++,
              (r = a);
            const e = [n / y, a / y];
            m && ((p = parseInt(u[m], 32) + s), m++, (s = p), e.push(p / c)),
              h && ((l = parseInt(u[h], 32) + o), h++, (o = l), e.push(l / f)),
              i.push(e);
          }
          return { paths: [i], hasZ: m > 0, hasM: h > 0 };
        }
        _mergePolylinesToSinglePath(e, t) {
          if (0 === e.length) return new d.Z({ spatialReference: t });
          const r = [];
          for (const t of e) for (const e of t.paths) r.push(...e);
          const s = [];
          r.forEach((e, t) => {
            (0 !== t && e[0] === r[t - 1][0] && e[1] === r[t - 1][1]) ||
              s.push(e);
          });
          const { hasM: o, hasZ: i } = e[0];
          return new d.Z({ hasM: o, hasZ: i, paths: [s], spatialReference: t });
        }
      };
      (0, s._)(
        [
          (0, i.Cb)({
            type: c.Z,
            json: { read: { source: 'summary.envelope' } },
          }),
        ],
        h.prototype,
        'extent',
        void 0,
      ),
        (0, s._)([(0, i.Cb)()], h.prototype, 'features', void 0),
        (0, s._)([(0, n.r)('features')], h.prototype, 'readFeatures', null),
        (0, s._)([(0, i.Cb)()], h.prototype, 'geometryType', void 0),
        (0, s._)(
          [(0, i.Cb)({ readOnly: !0 })],
          h.prototype,
          'mergedGeometry',
          null,
        ),
        (0, s._)([(0, i.Cb)()], h.prototype, 'routeId', void 0),
        (0, s._)([(0, i.Cb)()], h.prototype, 'routeName', void 0),
        (0, s._)(
          [(0, i.Cb)({ value: null, readOnly: !0 })],
          h.prototype,
          'strings',
          null,
        ),
        (0, s._)(
          [(0, i.Cb)({ json: { read: { source: 'summary.totalDriveTime' } } })],
          h.prototype,
          'totalDriveTime',
          void 0,
        ),
        (0, s._)(
          [(0, i.Cb)({ json: { read: { source: 'summary.totalLength' } } })],
          h.prototype,
          'totalLength',
          void 0,
        ),
        (0, s._)(
          [(0, i.Cb)({ json: { read: { source: 'summary.totalTime' } } })],
          h.prototype,
          'totalTime',
          void 0,
        ),
        (h = (0, s._)([(0, a.j)('esri.rest.support.DirectionsFeatureSet')], h));
      const g = h;
    },
    74889: (e, t, r) => {
      r.r(t), r.d(t, { default: () => _ });
      var s,
        o = r(43697),
        i = r(66577),
        n = r(38171),
        a = r(35454),
        l = r(96674),
        p = r(22974),
        u = r(70586),
        y = r(5600),
        c = (r(75215), r(71715)),
        f = r(52011),
        d = r(30556),
        m = r(82971),
        h = r(33955),
        g = r(1231);
      const v = new a.X({
        esriGeometryPoint: 'point',
        esriGeometryMultipoint: 'multipoint',
        esriGeometryPolyline: 'polyline',
        esriGeometryPolygon: 'polygon',
        esriGeometryEnvelope: 'extent',
        mesh: 'mesh',
        '': null,
      });
      let b = (s = class extends l.wq {
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
            s = [];
          for (let t = 0; t < e.length; t++) {
            const o = e[t],
              i = n.Z.fromJSON(o),
              a = o.geometry && o.geometry.spatialReference;
            (0, u.pC)(i.geometry) && !a && (i.geometry.spatialReference = r);
            const l = o.aggregateGeometries,
              p = i.aggregateGeometries;
            if (l && (0, u.pC)(p))
              for (const e in p) {
                const t = p[e],
                  s = l[e],
                  o = null == s ? void 0 : s.spatialReference;
                (0, u.pC)(t) && !o && (t.spatialReference = r);
              }
            s.push(i);
          }
          return s;
        }
        writeGeometryType(e, t, r, s) {
          if (e) return void v.write(e, t, r, s);
          const { features: o } = this;
          if (o)
            for (const e of o)
              if (e && (0, u.pC)(e.geometry))
                return void v.write(e.geometry.type, t, r, s);
        }
        readQueryGeometry(e, t) {
          if (!e) return null;
          const r = !!e.spatialReference,
            s = (0, h.im)(e);
          return (
            !r &&
              t.spatialReference &&
              (s.spatialReference = m.Z.fromJSON(t.spatialReference)),
            s
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
          return new s(this.cloneProperties());
        }
        cloneProperties() {
          return (0, p.d9)({
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
            i = this.features,
            n = this._getQuantizationFunction(
              this.geometryType,
              (e) => Math.round((e - s) / t),
              (e) => Math.round((o - e) / r),
            );
          for (let e = 0, t = i.length; e < t; e++)
            n((0, u.Wg)(i[e].geometry)) || (i.splice(e, 1), e--, t--);
          return (this.transform = e), this;
        }
        unquantize() {
          const { geometryType: e, features: t, transform: r } = this;
          if (!r) return this;
          const {
              translate: [s, o],
              scale: [i, n],
            } = r,
            a = this._getHydrationFunction(
              e,
              (e) => e * i + s,
              (e) => o - e * n,
            );
          for (const { geometry: e } of t) (0, u.pC)(e) && a(e);
          return (this.transform = null), this;
        }
        _quantizePoints(e, t, r) {
          let s, o;
          const i = [];
          for (let n = 0, a = e.length; n < a; n++) {
            const a = e[n];
            if (n > 0) {
              const e = t(a[0]),
                n = r(a[1]);
              (e === s && n === o) ||
                (i.push([e - s, n - o]), (s = e), (o = n));
            } else (s = t(a[0])), (o = r(a[1])), i.push([s, o]);
          }
          return i.length > 0 ? i : null;
        }
        _getQuantizationFunction(e, t, r) {
          return 'point' === e
            ? (e) => ((e.x = t(e.x)), (e.y = r(e.y)), e)
            : 'polyline' === e || 'polygon' === e
            ? (e) => {
                const s = (0, h.oU)(e) ? e.rings : e.paths,
                  o = [];
                for (let e = 0, i = s.length; e < i; e++) {
                  const i = s[e],
                    n = this._quantizePoints(i, t, r);
                  n && o.push(n);
                }
                return o.length > 0
                  ? ((0, h.oU)(e) ? (e.rings = o) : (e.paths = o), e)
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
                const s = (0, h.oU)(e) ? e.rings : e.paths;
                let o, i;
                for (let e = 0, n = s.length; e < n; e++) {
                  const n = s[e];
                  for (let e = 0, s = n.length; e < s; e++) {
                    const s = n[e];
                    e > 0
                      ? ((o += s[0]), (i += s[1]))
                      : ((o = s[0]), (i = s[1])),
                      (s[0] = t(o)),
                      (s[1] = r(i));
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
                let o, i;
                for (let e = 0, n = s.length; e < n; e++) {
                  const n = s[e];
                  e > 0 ? ((o += n[0]), (i += n[1])) : ((o = n[0]), (i = n[1])),
                    (n[0] = t(o)),
                    (n[1] = r(i));
                }
              }
            : void 0;
        }
      });
      (0, o._)(
        [(0, y.Cb)({ type: String, json: { write: !0 } })],
        b.prototype,
        'displayFieldName',
        void 0,
      ),
        (0, o._)(
          [
            (0, y.Cb)({
              type: Boolean,
              json: { write: { overridePolicy: (e) => ({ enabled: e }) } },
            }),
          ],
          b.prototype,
          'exceededTransferLimit',
          void 0,
        ),
        (0, o._)(
          [(0, y.Cb)({ type: [n.Z], json: { write: !0 } })],
          b.prototype,
          'features',
          void 0,
        ),
        (0, o._)([(0, c.r)('features')], b.prototype, 'readFeatures', null),
        (0, o._)(
          [(0, y.Cb)({ type: [g.Z], json: { write: !0 } })],
          b.prototype,
          'fields',
          void 0,
        ),
        (0, o._)(
          [
            (0, y.Cb)({
              type: [
                'point',
                'multipoint',
                'polyline',
                'polygon',
                'extent',
                'mesh',
              ],
              json: { read: { reader: v.read } },
            }),
          ],
          b.prototype,
          'geometryType',
          void 0,
        ),
        (0, o._)(
          [(0, d.c)('geometryType')],
          b.prototype,
          'writeGeometryType',
          null,
        ),
        (0, o._)(
          [
            (0, y.Cb)({
              type: Boolean,
              json: { write: { overridePolicy: (e) => ({ enabled: e }) } },
            }),
          ],
          b.prototype,
          'hasM',
          void 0,
        ),
        (0, o._)(
          [
            (0, y.Cb)({
              type: Boolean,
              json: { write: { overridePolicy: (e) => ({ enabled: e }) } },
            }),
          ],
          b.prototype,
          'hasZ',
          void 0,
        ),
        (0, o._)(
          [(0, y.Cb)({ types: i.qM, json: { write: !0 } })],
          b.prototype,
          'queryGeometry',
          void 0,
        ),
        (0, o._)(
          [(0, c.r)('queryGeometry')],
          b.prototype,
          'readQueryGeometry',
          null,
        ),
        (0, o._)(
          [(0, y.Cb)({ type: m.Z, json: { write: !0 } })],
          b.prototype,
          'spatialReference',
          void 0,
        ),
        (0, o._)(
          [(0, d.c)('spatialReference')],
          b.prototype,
          'writeSpatialReference',
          null,
        ),
        (0, o._)(
          [(0, y.Cb)({ json: { write: !0 } })],
          b.prototype,
          'transform',
          void 0,
        ),
        (b = s = (0, o._)([(0, f.j)('esri.rest.support.FeatureSet')], b)),
        (b.prototype.toJSON.isDefaultToJSON = !0);
      const _ = b;
    },
    8234: (e, t, r) => {
      r.r(t), r.d(t, { default: () => l });
      var s = r(43697),
        o = (r(92604), r(75215), r(67676), r(80442), r(37697), r(52011)),
        i = r(23334),
        n = r(59633);
      let a = class extends n.Z {
        constructor(e) {
          super(e);
        }
        solve(e, t) {
          return (0, i.F)(this.url, e, t);
        }
      };
      a = (0, s._)([(0, o.j)('esri.tasks.RouteTask')], a);
      const l = a;
    },
    59633: (e, t, r) => {
      r.d(t, { Z: () => p });
      var s = r(43697),
        o = r(15923),
        i = r(17452),
        n = r(5600),
        a = (r(67676), r(80442), r(75215), r(52011));
      let l = class extends o.Z {
        constructor(...e) {
          super(...e), (this.requestOptions = null), (this.url = null);
        }
        normalizeCtorArgs(e, t) {
          return 'string' != typeof e ? e : { url: e, ...t };
        }
        get parsedUrl() {
          return this._parseUrl(this.url);
        }
        _parseUrl(e) {
          return e ? (0, i.mN)(e) : null;
        }
        _encode(e, t, r) {
          const s = {};
          for (const o in e) {
            if ('declaredClass' === o) continue;
            const i = e[o];
            if (null != i && 'function' != typeof i)
              if (Array.isArray(i)) {
                s[o] = [];
                for (let e = 0; e < i.length; e++) s[o][e] = this._encode(i[e]);
              } else if ('object' == typeof i)
                if (i.toJSON) {
                  const e = i.toJSON(r && r[o]);
                  s[o] = t ? e : JSON.stringify(e);
                } else s[o] = t ? i : JSON.stringify(i);
              else s[o] = i;
          }
          return s;
        }
      };
      (0, s._)([(0, n.Cb)({ readOnly: !0 })], l.prototype, 'parsedUrl', null),
        (0, s._)([(0, n.Cb)()], l.prototype, 'requestOptions', void 0),
        (0, s._)([(0, n.Cb)({ type: String })], l.prototype, 'url', void 0),
        (l = (0, s._)([(0, a.j)('esri.tasks.Task')], l));
      const p = l;
    },
  },
]);
