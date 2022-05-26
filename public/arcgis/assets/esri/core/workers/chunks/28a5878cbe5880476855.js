'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [4889],
  {
    74889: (e, t, r) => {
      r.r(t), r.d(t, { default: () => v });
      var o,
        n = r(43697),
        i = r(66577),
        s = r(38171),
        l = r(35454),
        a = r(96674),
        p = r(22974),
        y = r(70586),
        u = r(5600),
        f = (r(75215), r(71715)),
        c = r(52011),
        m = r(30556),
        h = r(82971),
        d = r(33955),
        g = r(1231);
      const R = new l.X({
        esriGeometryPoint: 'point',
        esriGeometryMultipoint: 'multipoint',
        esriGeometryPolyline: 'polyline',
        esriGeometryPolygon: 'polygon',
        esriGeometryEnvelope: 'extent',
        mesh: 'mesh',
        '': null,
      });
      let _ = (o = class extends a.wq {
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
          const r = h.Z.fromJSON(t.spatialReference),
            o = [];
          for (let t = 0; t < e.length; t++) {
            const n = e[t],
              i = s.Z.fromJSON(n),
              l = n.geometry && n.geometry.spatialReference;
            (0, y.pC)(i.geometry) && !l && (i.geometry.spatialReference = r);
            const a = n.aggregateGeometries,
              p = i.aggregateGeometries;
            if (a && (0, y.pC)(p))
              for (const e in p) {
                const t = p[e],
                  o = a[e],
                  n = null == o ? void 0 : o.spatialReference;
                (0, y.pC)(t) && !n && (t.spatialReference = r);
              }
            o.push(i);
          }
          return o;
        }
        writeGeometryType(e, t, r, o) {
          if (e) return void R.write(e, t, r, o);
          const { features: n } = this;
          if (n)
            for (const e of n)
              if (e && (0, y.pC)(e.geometry))
                return void R.write(e.geometry.type, t, r, o);
        }
        readQueryGeometry(e, t) {
          if (!e) return null;
          const r = !!e.spatialReference,
            o = (0, d.im)(e);
          return (
            !r &&
              t.spatialReference &&
              (o.spatialReference = h.Z.fromJSON(t.spatialReference)),
            o
          );
        }
        writeSpatialReference(e, t) {
          if (e) return void (t.spatialReference = e.toJSON());
          const { features: r } = this;
          if (r)
            for (const e of r)
              if (e && (0, y.pC)(e.geometry) && e.geometry.spatialReference)
                return void (t.spatialReference =
                  e.geometry.spatialReference.toJSON());
        }
        clone() {
          return new o(this.cloneProperties());
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
              const o = t.features[r];
              if (o.geometry) {
                const t = e && e[r];
                o.geometry = (t && t.toJSON()) || o.geometry;
              }
            }
          return t;
        }
        quantize(e) {
          const {
              scale: [t, r],
              translate: [o, n],
            } = e,
            i = this.features,
            s = this._getQuantizationFunction(
              this.geometryType,
              (e) => Math.round((e - o) / t),
              (e) => Math.round((n - e) / r),
            );
          for (let e = 0, t = i.length; e < t; e++)
            s((0, y.Wg)(i[e].geometry)) || (i.splice(e, 1), e--, t--);
          return (this.transform = e), this;
        }
        unquantize() {
          const { geometryType: e, features: t, transform: r } = this;
          if (!r) return this;
          const {
              translate: [o, n],
              scale: [i, s],
            } = r,
            l = this._getHydrationFunction(
              e,
              (e) => e * i + o,
              (e) => n - e * s,
            );
          for (const { geometry: e } of t) (0, y.pC)(e) && l(e);
          return (this.transform = null), this;
        }
        _quantizePoints(e, t, r) {
          let o, n;
          const i = [];
          for (let s = 0, l = e.length; s < l; s++) {
            const l = e[s];
            if (s > 0) {
              const e = t(l[0]),
                s = r(l[1]);
              (e === o && s === n) ||
                (i.push([e - o, s - n]), (o = e), (n = s));
            } else (o = t(l[0])), (n = r(l[1])), i.push([o, n]);
          }
          return i.length > 0 ? i : null;
        }
        _getQuantizationFunction(e, t, r) {
          return 'point' === e
            ? (e) => ((e.x = t(e.x)), (e.y = r(e.y)), e)
            : 'polyline' === e || 'polygon' === e
            ? (e) => {
                const o = (0, d.oU)(e) ? e.rings : e.paths,
                  n = [];
                for (let e = 0, i = o.length; e < i; e++) {
                  const i = o[e],
                    s = this._quantizePoints(i, t, r);
                  s && n.push(s);
                }
                return n.length > 0
                  ? ((0, d.oU)(e) ? (e.rings = n) : (e.paths = n), e)
                  : null;
              }
            : 'multipoint' === e
            ? (e) => {
                const o = this._quantizePoints(e.points, t, r);
                return o.length > 0 ? ((e.points = o), e) : null;
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
                const o = (0, d.oU)(e) ? e.rings : e.paths;
                let n, i;
                for (let e = 0, s = o.length; e < s; e++) {
                  const s = o[e];
                  for (let e = 0, o = s.length; e < o; e++) {
                    const o = s[e];
                    e > 0
                      ? ((n += o[0]), (i += o[1]))
                      : ((n = o[0]), (i = o[1])),
                      (o[0] = t(n)),
                      (o[1] = r(i));
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
                const o = e.points;
                let n, i;
                for (let e = 0, s = o.length; e < s; e++) {
                  const s = o[e];
                  e > 0 ? ((n += s[0]), (i += s[1])) : ((n = s[0]), (i = s[1])),
                    (s[0] = t(n)),
                    (s[1] = r(i));
                }
              }
            : void 0;
        }
      });
      (0, n._)(
        [(0, u.Cb)({ type: String, json: { write: !0 } })],
        _.prototype,
        'displayFieldName',
        void 0,
      ),
        (0, n._)(
          [
            (0, u.Cb)({
              type: Boolean,
              json: { write: { overridePolicy: (e) => ({ enabled: e }) } },
            }),
          ],
          _.prototype,
          'exceededTransferLimit',
          void 0,
        ),
        (0, n._)(
          [(0, u.Cb)({ type: [s.Z], json: { write: !0 } })],
          _.prototype,
          'features',
          void 0,
        ),
        (0, n._)([(0, f.r)('features')], _.prototype, 'readFeatures', null),
        (0, n._)(
          [(0, u.Cb)({ type: [g.Z], json: { write: !0 } })],
          _.prototype,
          'fields',
          void 0,
        ),
        (0, n._)(
          [
            (0, u.Cb)({
              type: [
                'point',
                'multipoint',
                'polyline',
                'polygon',
                'extent',
                'mesh',
              ],
              json: { read: { reader: R.read } },
            }),
          ],
          _.prototype,
          'geometryType',
          void 0,
        ),
        (0, n._)(
          [(0, m.c)('geometryType')],
          _.prototype,
          'writeGeometryType',
          null,
        ),
        (0, n._)(
          [
            (0, u.Cb)({
              type: Boolean,
              json: { write: { overridePolicy: (e) => ({ enabled: e }) } },
            }),
          ],
          _.prototype,
          'hasM',
          void 0,
        ),
        (0, n._)(
          [
            (0, u.Cb)({
              type: Boolean,
              json: { write: { overridePolicy: (e) => ({ enabled: e }) } },
            }),
          ],
          _.prototype,
          'hasZ',
          void 0,
        ),
        (0, n._)(
          [(0, u.Cb)({ types: i.qM, json: { write: !0 } })],
          _.prototype,
          'queryGeometry',
          void 0,
        ),
        (0, n._)(
          [(0, f.r)('queryGeometry')],
          _.prototype,
          'readQueryGeometry',
          null,
        ),
        (0, n._)(
          [(0, u.Cb)({ type: h.Z, json: { write: !0 } })],
          _.prototype,
          'spatialReference',
          void 0,
        ),
        (0, n._)(
          [(0, m.c)('spatialReference')],
          _.prototype,
          'writeSpatialReference',
          null,
        ),
        (0, n._)(
          [(0, u.Cb)({ json: { write: !0 } })],
          _.prototype,
          'transform',
          void 0,
        ),
        (_ = o = (0, n._)([(0, c.j)('esri.rest.support.FeatureSet')], _)),
        (_.prototype.toJSON.isDefaultToJSON = !0);
      const v = _;
    },
  },
]);
