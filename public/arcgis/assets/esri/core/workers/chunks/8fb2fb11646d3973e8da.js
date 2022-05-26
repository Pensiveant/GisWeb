'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [7055, 4889],
  {
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
        m = r(58901),
        d = r(13473);
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
              i = new m.Z({ ...s, spatialReference: o }),
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
                          geometry: new d.Z({
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
            m = 0,
            d = 0,
            h = 0;
          if (
            ((u = e.match(/((\+|\-)[^\+\-\|]+|\|)/g)),
            u || (u = []),
            0 === parseInt(u[m], 32))
          ) {
            m = 2;
            const e = parseInt(u[m], 32);
            m++,
              (y = parseInt(u[m], 32)),
              m++,
              1 & e &&
                ((d = u.indexOf('|') + 1), (c = parseInt(u[d], 32)), d++),
              2 & e &&
                ((h = u.indexOf('|', d) + 1), (f = parseInt(u[h], 32)), h++);
          } else (y = parseInt(u[m], 32)), m++;
          for (; m < u.length && '|' !== u[m]; ) {
            (n = parseInt(u[m], 32) + t),
              m++,
              (t = n),
              (a = parseInt(u[m], 32) + r),
              m++,
              (r = a);
            const e = [n / y, a / y];
            d && ((p = parseInt(u[d], 32) + s), d++, (s = p), e.push(p / c)),
              h && ((l = parseInt(u[h], 32) + o), h++, (o = l), e.push(l / f)),
              i.push(e);
          }
          return { paths: [i], hasZ: d > 0, hasM: h > 0 };
        }
        _mergePolylinesToSinglePath(e, t) {
          if (0 === e.length) return new m.Z({ spatialReference: t });
          const r = [];
          for (const t of e) for (const e of t.paths) r.push(...e);
          const s = [];
          r.forEach((e, t) => {
            (0 !== t && e[0] === r[t - 1][0] && e[1] === r[t - 1][1]) ||
              s.push(e);
          });
          const { hasM: o, hasZ: i } = e[0];
          return new m.Z({ hasM: o, hasZ: i, paths: [s], spatialReference: t });
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
      r.r(t), r.d(t, { default: () => b });
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
        m = r(30556),
        d = r(82971),
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
      let _ = (s = class extends l.wq {
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
          const r = d.Z.fromJSON(t.spatialReference),
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
              (s.spatialReference = d.Z.fromJSON(t.spatialReference)),
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
        _.prototype,
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
          _.prototype,
          'exceededTransferLimit',
          void 0,
        ),
        (0, o._)(
          [(0, y.Cb)({ type: [n.Z], json: { write: !0 } })],
          _.prototype,
          'features',
          void 0,
        ),
        (0, o._)([(0, c.r)('features')], _.prototype, 'readFeatures', null),
        (0, o._)(
          [(0, y.Cb)({ type: [g.Z], json: { write: !0 } })],
          _.prototype,
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
          _.prototype,
          'geometryType',
          void 0,
        ),
        (0, o._)(
          [(0, m.c)('geometryType')],
          _.prototype,
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
          _.prototype,
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
          _.prototype,
          'hasZ',
          void 0,
        ),
        (0, o._)(
          [(0, y.Cb)({ types: i.qM, json: { write: !0 } })],
          _.prototype,
          'queryGeometry',
          void 0,
        ),
        (0, o._)(
          [(0, c.r)('queryGeometry')],
          _.prototype,
          'readQueryGeometry',
          null,
        ),
        (0, o._)(
          [(0, y.Cb)({ type: d.Z, json: { write: !0 } })],
          _.prototype,
          'spatialReference',
          void 0,
        ),
        (0, o._)(
          [(0, m.c)('spatialReference')],
          _.prototype,
          'writeSpatialReference',
          null,
        ),
        (0, o._)(
          [(0, y.Cb)({ json: { write: !0 } })],
          _.prototype,
          'transform',
          void 0,
        ),
        (_ = s = (0, o._)([(0, f.j)('esri.rest.support.FeatureSet')], _)),
        (_.prototype.toJSON.isDefaultToJSON = !0);
      const b = _;
    },
    17055: (e, t, r) => {
      r.r(t), r.d(t, { default: () => S });
      var s = r(43697),
        o = r(5600),
        i = (r(67676), r(80442), r(75215), r(52011)),
        n = r(3172),
        a = r(28263),
        l = r(82526),
        p = r(93924),
        u = r(11282),
        y = (r(66577), r(38171)),
        c = r(96674),
        f = r(70586),
        m = r(71715),
        d = r(82971),
        h = r(95642),
        g = r(74889),
        v = r(79166),
        _ = r(13473),
        b = r(58901),
        C = r(38913);
      function R(e) {
        return g.default.fromJSON(e).features.map((e) => e.geometry);
      }
      let Z = class extends c.wq {
        constructor(e) {
          super(e),
            (this.directions = null),
            (this.facilities = null),
            (this.incidents = null),
            (this.messages = null),
            (this.pointBarriers = null),
            (this.polylineBarriers = null),
            (this.polygonBarriers = null),
            (this.routes = null);
        }
        readFacilities(e) {
          return R(e);
        }
        readIncidents(e) {
          return R(e);
        }
        readPointBarriers(e, t) {
          return R(t.barriers);
        }
        readPolylineBarriers(e) {
          return R(e);
        }
        readPolygonBarriers(e) {
          return R(e);
        }
        readRoutes(e) {
          return (function (e) {
            return e.features.map((t) => {
              const r = d.Z.fromJSON(e.spatialReference),
                s = y.Z.fromJSON(t);
              return (
                (0, f.pC)(s.geometry) && (s.geometry.spatialReference = r), s
              );
            });
          })(e);
        }
      };
      (0, s._)([(0, o.Cb)({ type: [h.Z] })], Z.prototype, 'directions', void 0),
        (0, s._)(
          [(0, o.Cb)({ type: [_.Z] })],
          Z.prototype,
          'facilities',
          void 0,
        ),
        (0, s._)([(0, m.r)('facilities')], Z.prototype, 'readFacilities', null),
        (0, s._)(
          [(0, o.Cb)({ type: [_.Z] })],
          Z.prototype,
          'incidents',
          void 0,
        ),
        (0, s._)([(0, m.r)('incidents')], Z.prototype, 'readIncidents', null),
        (0, s._)([(0, o.Cb)({ type: [v.Z] })], Z.prototype, 'messages', void 0),
        (0, s._)(
          [(0, o.Cb)({ type: [_.Z] })],
          Z.prototype,
          'pointBarriers',
          void 0,
        ),
        (0, s._)(
          [(0, m.r)('pointBarriers', ['barriers'])],
          Z.prototype,
          'readPointBarriers',
          null,
        ),
        (0, s._)(
          [(0, o.Cb)({ type: [b.Z] })],
          Z.prototype,
          'polylineBarriers',
          void 0,
        ),
        (0, s._)(
          [(0, m.r)('polylineBarriers')],
          Z.prototype,
          'readPolylineBarriers',
          null,
        ),
        (0, s._)(
          [(0, o.Cb)({ type: [C.Z] })],
          Z.prototype,
          'polygonBarriers',
          void 0,
        ),
        (0, s._)(
          [(0, m.r)('polygonBarriers')],
          Z.prototype,
          'readPolygonBarriers',
          null,
        ),
        (0, s._)([(0, o.Cb)({ type: [y.Z] })], Z.prototype, 'routes', void 0),
        (0, s._)([(0, m.r)('routes')], Z.prototype, 'readRoutes', null),
        (Z = (0, s._)(
          [(0, i.j)('esri.rest.support.ClosestFacilitySolveResult')],
          Z,
        ));
      const B = Z,
        T = (0, a.E)({
          accumulateAttributes: { name: 'accumulateAttributeNames' },
          attributeParameterValues: !0,
          directionsTimeAttribute: { name: 'directionsTimeAttributeName' },
          impedanceAttribute: { name: 'impedanceAttributeName' },
          facilities: !0,
          incidents: !0,
          outSpatialReference: {
            name: 'outSR',
            getter: (e) => e.outSpatialReference.wkid,
          },
          pointBarriers: { name: 'barriers' },
          polylineBarriers: !0,
          polygonBarriers: !0,
          restrictionAttributes: { name: 'restrictionAttributeNames' },
          returnPointBarriers: { name: 'returnBarriers' },
          returnRoutes: { name: 'returnCFRoutes' },
          travelMode: !0,
        });
      var x = r(59633);
      let w = class extends x.Z {
        constructor(e) {
          super(e), (this.url = null);
        }
        solve(e, t) {
          return (async function (e, t, r) {
            const s = [],
              o = [],
              i = {},
              a = {},
              y = (0, u.en)(e),
              { path: c } = y;
            t.incidents &&
              t.incidents.features &&
              (0, p.et)(t.incidents.features, o, 'incidents.features', i),
              t.facilities &&
                t.facilities.features &&
                (0, p.et)(t.facilities.features, o, 'facilities.features', i),
              t.pointBarriers &&
                t.pointBarriers.features &&
                (0, p.et)(
                  t.pointBarriers.features,
                  o,
                  'pointBarriers.features',
                  i,
                ),
              t.polylineBarriers &&
                t.polylineBarriers.features &&
                (0, p.et)(
                  t.polylineBarriers.features,
                  o,
                  'polylineBarriers.features',
                  i,
                ),
              t.polygonBarriers &&
                t.polygonBarriers.features &&
                (0, p.et)(
                  t.polygonBarriers.features,
                  o,
                  'polygonBarriers.features',
                  i,
                );
            const f = await (0, l.aX)(o);
            for (const e in i) {
              const t = i[e];
              s.push(e), (a[e] = f.slice(t[0], t[1]));
            }
            if ((0, p.Wf)(a, s)) {
              let e = null;
              try {
                e = await (0, p.bI)(c, t.apiKey, r);
              } catch {}
              e && !e.hasZ && (0, p.ef)(a, s);
            }
            for (const e in a)
              a[e].forEach((r, s) => {
                t.get(e)[s].geometry = r;
              });
            const m = {
                ...r,
                query: { ...y.query, ...T.toQueryParams(t), f: 'json' },
              },
              { data: d } = await (0, n.default)(
                `${c}/solveClosestFacility`,
                m,
              );
            return B.fromJSON(d);
          })(this.url, e, t);
        }
      };
      (0, s._)([(0, o.Cb)()], w.prototype, 'url', void 0),
        (w = (0, s._)([(0, i.j)('esri.tasks.ClosestFacilityTask')], w));
      const S = w;
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
