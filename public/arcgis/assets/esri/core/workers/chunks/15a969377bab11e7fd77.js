'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [5313],
  {
    91040: (e, t, r) => {
      r.d(t, { yZ: () => i });
      var n = r(67900);
      function i(e, t) {
        const r = t || e.extent,
          i = e.width,
          s = (0, n.c9)(r && r.spatialReference);
        return r && i ? (r.width / i) * s * n.hd * 96 : 0;
      }
    },
    11282: (e, t, r) => {
      r.d(t, { lA: () => i, cv: () => o, en: () => s });
      var n = r(17452);
      function i(e, t) {
        return t ? { ...t, query: { ...e, ...t.query } } : { query: e };
      }
      function s(e) {
        return 'string' == typeof e ? (0, n.mN)(e) : e;
      }
      function o(e, t, r) {
        const n = {};
        for (const i in e) {
          if ('declaredClass' === i) continue;
          const s = e[i];
          if (null != s && 'function' != typeof s)
            if (Array.isArray(s)) {
              n[i] = [];
              for (let e = 0; e < s.length; e++) n[i][e] = o(s[e]);
            } else if ('object' == typeof s)
              if (s.toJSON) {
                const e = s.toJSON(r && r[i]);
                n[i] = t ? e : JSON.stringify(e);
              } else n[i] = t ? s : JSON.stringify(s);
            else n[i] = s;
        }
        return n;
      }
      r(91040);
    },
    85313: (e, t, r) => {
      r.r(t), r.d(t, { default: () => P });
      var n = r(43697),
        i = r(5600),
        s = (r(67676), r(80442), r(75215)),
        o = r(52011),
        a = r(3172),
        l = r(11282);
      r(66577);
      var u = r(33955);
      function f(e) {
        return {
          geometryType: (0, u.Ji)(e[0]),
          geometries: e.map((e) => e.toJSON()),
        };
      }
      function c(e, t, r) {
        const n = (0, u.q9)(t);
        return e.map((e) => {
          const t = n.fromJSON(e);
          return (t.spatialReference = r), t;
        });
      }
      var N = r(38913);
      async function p(e, t, r, n) {
        const i = t[0].spatialReference,
          s = (0, l.en)(e),
          o = {
            ...s.query,
            f: 'json',
            sr: JSON.stringify(i.toJSON()),
            polygons: JSON.stringify(f(t).geometries),
            polylines: JSON.stringify(f(r).geometries),
          },
          u = (0, l.lA)(o, n);
        return (0, a.default)(s.path + '/autoComplete', u).then(({ data: e }) =>
          (e.geometries || []).map(
            ({ rings: e }) => new N.Z({ spatialReference: i, rings: e }),
          ),
        );
      }
      async function y(e, t, r) {
        const n = t[0].spatialReference,
          i = (0, l.en)(e),
          s = {
            ...i.query,
            f: 'json',
            sr: JSON.stringify(n.toJSON()),
            geometries: JSON.stringify(f(t)),
          },
          o = (0, l.lA)(s, r);
        return (0, a.default)(i.path + '/convexHull', o).then(({ data: e }) =>
          (0, u.im)(e.geometry).set({ spatialReference: n }),
        );
      }
      async function m(e, t, r, n) {
        const i = t[0].spatialReference,
          s = (0, l.en)(e);
        let o = {
          query: {
            ...s.query,
            f: 'json',
            sr: JSON.stringify(i.toJSON()),
            geometries: JSON.stringify(f(t)),
            geometry: JSON.stringify({
              geometryType: (0, u.Ji)(r),
              geometry: r.toJSON(),
            }),
          },
        };
        return (
          n && (o = { ...n, ...o }),
          (0, a.default)(s.path + '/difference', o).then(({ data: e }) =>
            (e.geometries || []).map((e) =>
              (0, u.im)(e).set({ spatialReference: i }),
            ),
          )
        );
      }
      var d = r(35454);
      const _ = new d.X({
          MGRS: 'mgrs',
          USNG: 'usng',
          UTM: 'utm',
          GeoRef: 'geo-ref',
          GARS: 'gars',
          DMS: 'dms',
          DDM: 'ddm',
          DD: 'dd',
        }),
        g = new d.X({
          109006: 'centimeters',
          9102: 'decimal-degrees',
          109005: 'decimeters',
          9002: 'feet',
          109009: 'inches',
          9036: 'kilometers',
          9001: 'meters',
          9035: 'miles',
          109007: 'millimeters',
          109012: 'nautical-miles',
          9096: 'yards',
        });
      var S = r(96674);
      let T = class extends S.wq {
        constructor(e) {
          super(e),
            (this.deviationUnit = null),
            (this.geometries = null),
            (this.maxDeviation = null);
        }
      };
      (0, n._)(
        [(0, i.Cb)({ type: String, json: { write: !0 } })],
        T.prototype,
        'deviationUnit',
        void 0,
      ),
        (0, n._)(
          [
            (0, i.Cb)({
              json: {
                read: {
                  reader: (e) => (e ? e.map((e) => (0, u.im)(e)) : null),
                },
                write: {
                  writer: (e, t) => {
                    t.geometries = e.map((e) => e.toJSON());
                  },
                },
              },
            }),
          ],
          T.prototype,
          'geometries',
          void 0,
        ),
        (0, n._)(
          [(0, i.Cb)({ type: Number, json: { write: !0 } })],
          T.prototype,
          'maxDeviation',
          void 0,
        ),
        (T = (0, n._)([(0, o.j)('esri.rest.support.GeneralizeParameters')], T)),
        (T.from = (0, s.se)(T));
      const I = T;
      async function O(e, t, r, n) {
        const i = t[0].spatialReference,
          s = (0, l.en)(e),
          o = {
            ...s.query,
            f: 'json',
            sr: JSON.stringify(i.toJSON()),
            geometries: JSON.stringify(f(t)),
            geometry: JSON.stringify({
              geometryType: (0, u.Ji)(r),
              geometry: r.toJSON(),
            }),
          },
          c = (0, l.lA)(o, n);
        return (0, a.default)(s.path + '/intersect', c).then(({ data: e }) =>
          (e.geometries || []).map((e) =>
            (0, u.im)(e).set({ spatialReference: i }),
          ),
        );
      }
      const h = new d.X({ preserveShape: 'preserve-shape' });
      function R(e) {
        const {
            polylines: t,
            lengthUnit: r,
            geodesic: n,
            calculationType: i,
          } = e.toJSON(),
          s = {};
        s.polylines = JSON.stringify(t);
        const o = e.polylines[0].spatialReference;
        return (
          (s.sr = o.wkid ? o.wkid : JSON.stringify(o.toJSON())),
          r && (s.lengthUnit = r),
          n && (s.geodesic = n),
          i && (s.calculationType = h.toJSON(i)),
          s
        );
      }
      var U = r(58901);
      let A = class extends S.wq {
        constructor(e) {
          super(e),
            (this.calculationType = null),
            (this.geodesic = null),
            (this.lengthUnit = null),
            (this.polylines = null);
        }
      };
      (0, n._)(
        [(0, i.Cb)({ type: String, json: { write: !0 } })],
        A.prototype,
        'calculationType',
        void 0,
      ),
        (0, n._)(
          [(0, i.Cb)({ type: Boolean, json: { write: !0 } })],
          A.prototype,
          'geodesic',
          void 0,
        ),
        (0, n._)(
          [(0, i.Cb)({ json: { write: !0 } })],
          A.prototype,
          'lengthUnit',
          void 0,
        ),
        (0, n._)(
          [
            (0, i.Cb)({
              type: [U.Z],
              json: {
                read: {
                  reader: (e) => (e ? e.map((e) => (0, u.im)(e)) : null),
                },
                write: {
                  writer: (e, t) => {
                    t.polylines = e.map((e) => e.toJSON());
                  },
                },
              },
            }),
          ],
          A.prototype,
          'polylines',
          void 0,
        ),
        (A = (0, n._)([(0, o.j)('esri.rest.support.LengthsParameters')], A)),
        (A.from = (0, s.se)(A));
      const J = A,
        E = new d.X({
          esriGeometryOffsetBevelled: 'bevelled',
          esriGeometryOffsetMitered: 'mitered',
          esriGeometryOffsetRounded: 'rounded',
        }),
        w = new d.X({
          9001: 'meters',
          9002: 'feet',
          9036: 'kilometers',
          9093: 'miles',
          109012: 'nautical-miles',
          109001: 'yards',
        });
      let C = class extends S.wq {
        constructor(e) {
          super(e),
            (this.bevelRatio = null),
            (this.geometries = null),
            (this.offsetDistance = null),
            (this.offsetHow = null),
            (this.offsetUnit = null);
        }
      };
      (0, n._)(
        [(0, i.Cb)({ type: Number, json: { write: !0 } })],
        C.prototype,
        'bevelRatio',
        void 0,
      ),
        (0, n._)(
          [
            (0, i.Cb)({
              json: {
                read: {
                  reader: (e) => (e ? e.map((e) => (0, u.im)(e)) : null),
                },
                write: {
                  writer: (e, t) => {
                    t.geometries = e.map((e) => e.toJSON());
                  },
                },
              },
            }),
          ],
          C.prototype,
          'geometries',
          void 0,
        ),
        (0, n._)(
          [(0, i.Cb)({ type: Number, json: { write: !0 } })],
          C.prototype,
          'offsetDistance',
          void 0,
        ),
        (0, n._)(
          [(0, i.Cb)({ type: String, json: { write: !0 } })],
          C.prototype,
          'offsetHow',
          void 0,
        ),
        (0, n._)(
          [(0, i.Cb)({ type: String, json: { write: !0 } })],
          C.prototype,
          'offsetUnit',
          void 0,
        ),
        (C = (0, n._)([(0, o.j)('esri.rest.support.OffsetParameters')], C)),
        (C.from = (0, s.se)(C));
      const v = C;
      let j = class extends S.wq {
        constructor(e) {
          super(e),
            (this.geometries = null),
            (this.outSpatialReference = null),
            (this.transformation = null),
            (this.transformForward = null);
        }
        toJSON() {
          const e = this.geometries.map(function (e) {
              return e.toJSON();
            }),
            t = this.geometries[0],
            r = {};
          return (
            (r.outSR =
              this.outSpatialReference.wkid ||
              JSON.stringify(this.outSpatialReference.toJSON())),
            (r.inSR =
              t.spatialReference.wkid ||
              JSON.stringify(t.spatialReference.toJSON())),
            (r.geometries = JSON.stringify({
              geometryType: (0, u.Ji)(t),
              geometries: e,
            })),
            this.transformation &&
              (r.transformation =
                this.transformation.wkid ||
                JSON.stringify(this.transformation)),
            null != this.transformForward &&
              (r.transformForward = this.transformForward),
            r
          );
        }
      };
      (0, n._)([(0, i.Cb)()], j.prototype, 'geometries', void 0),
        (0, n._)(
          [(0, i.Cb)({ json: { read: { source: 'outSR' } } })],
          j.prototype,
          'outSpatialReference',
          void 0,
        ),
        (0, n._)([(0, i.Cb)()], j.prototype, 'transformation', void 0),
        (0, n._)([(0, i.Cb)()], j.prototype, 'transformForward', void 0),
        (j = (0, n._)([(0, o.j)('esri.rest.support.ProjectParameters')], j));
      const b = j,
        D = (0, s.se)(b),
        q = new d.X({
          esriGeometryRelationCross: 'cross',
          esriGeometryRelationDisjoint: 'disjoint',
          esriGeometryRelationIn: 'in',
          esriGeometryRelationInteriorIntersection: 'interior-intersection',
          esriGeometryRelationIntersection: 'intersection',
          esriGeometryRelationLineCoincidence: 'line-coincidence',
          esriGeometryRelationLineTouch: 'line-touch',
          esriGeometryRelationOverlap: 'overlap',
          esriGeometryRelationPointTouch: 'point-touch',
          esriGeometryRelationTouch: 'touch',
          esriGeometryRelationWithin: 'within',
          esriGeometryRelationRelation: 'relation',
        });
      let L = class extends S.wq {
        constructor(e) {
          super(e),
            (this.geometries1 = null),
            (this.geometries2 = null),
            (this.relation = null),
            (this.relationParameter = null);
        }
      };
      (0, n._)(
        [
          (0, i.Cb)({
            json: {
              read: { reader: (e) => (e ? e.map((e) => (0, u.im)(e)) : null) },
              write: {
                writer: (e, t) => {
                  t.geometries1 = e.map((e) => e.toJSON());
                },
              },
            },
          }),
        ],
        L.prototype,
        'geometries1',
        void 0,
      ),
        (0, n._)(
          [
            (0, i.Cb)({
              json: {
                read: {
                  reader: (e) => (e ? e.map((e) => (0, u.im)(e)) : null),
                },
                write: {
                  writer: (e, t) => {
                    t.geometries2 = e.map((e) => e.toJSON());
                  },
                },
              },
            }),
          ],
          L.prototype,
          'geometries2',
          void 0,
        ),
        (0, n._)(
          [(0, i.Cb)({ type: String, json: { write: !0 } })],
          L.prototype,
          'relation',
          void 0,
        ),
        (0, n._)(
          [(0, i.Cb)({ type: String, json: { write: !0 } })],
          L.prototype,
          'relationParameter',
          void 0,
        ),
        (L = (0, n._)([(0, o.j)('esri.rest.support.RelationParameters')], L)),
        (L.from = (0, s.se)(L));
      const M = L;
      var x = r(17452);
      async function G(e, t, r) {
        const n = 'string' == typeof e ? (0, x.mN)(e) : e,
          i = t[0].spatialReference,
          s = (0, u.Ji)(t[0]),
          o = {
            ...r,
            query: {
              ...n.query,
              f: 'json',
              sr: i.wkid ? i.wkid : JSON.stringify(i),
              geometries: JSON.stringify(f(t)),
            },
          },
          { data: l } = await (0, a.default)(n.path + '/simplify', o);
        return c(l.geometries, s, i);
      }
      const H = new d.X({
        0: 'default-curve-extension',
        1: 'relocate-ends',
        2: 'keep-end-attributes',
        4: 'no-end-attributes',
        8: 'no-extend-at-from',
        16: 'no-extend-at-to',
      });
      let k = class extends S.wq {
        constructor(e) {
          super(e),
            (this.extendHow = 'default-curve-extension'),
            (this.polylines = null),
            (this.trimExtendTo = null);
        }
      };
      (0, n._)(
        [(0, i.Cb)({ type: String, json: { write: !0 } })],
        k.prototype,
        'extendHow',
        void 0,
      ),
        (0, n._)(
          [
            (0, i.Cb)({
              type: [U.Z],
              json: {
                read: {
                  reader: (e) => (e ? e.map((e) => (0, u.im)(e)) : null),
                },
                write: {
                  writer: (e, t) => {
                    t.polylines = e.map((e) => e.toJSON());
                  },
                },
              },
            }),
          ],
          k.prototype,
          'polylines',
          void 0,
        ),
        (0, n._)(
          [
            (0, i.Cb)({
              json: {
                read: { reader: (e) => (e ? (0, u.im)(e) : null) },
                write: {
                  writer: (e, t) => {
                    t.trimExtendTo = e.toJSON();
                  },
                },
              },
            }),
          ],
          k.prototype,
          'trimExtendTo',
          void 0,
        ),
        (k = (0, n._)([(0, o.j)('esri.rest.support.TrimExtendParameters')], k)),
        (k.from = (0, s.se)(k));
      const F = k;
      async function Y(e, t, r) {
        const n = t[0].spatialReference,
          i = (0, l.en)(e),
          s = {
            ...i.query,
            f: 'json',
            sr: JSON.stringify(n.toJSON()),
            geometries: JSON.stringify(f(t)),
          },
          o = (0, l.lA)(s, r);
        return (0, a.default)(i.path + '/union', o).then(({ data: e }) =>
          (0, u.im)(e.geometry).set({ spatialReference: n }),
        );
      }
      var K = r(59633);
      let B = class extends K.Z {
        constructor(e) {
          super(e), (this.url = null);
        }
        areasAndLengths(e, t) {
          return (async function (e, t, r) {
            const n = (0, l.en)(e),
              i = { ...n.query, f: 'json', ...t.toJSON() },
              s = (0, l.lA)(i, r);
            return (0, a.default)(n.path + '/areasAndLengths', s).then(
              (e) => e.data,
            );
          })(this.url, e, t);
        }
        autoComplete(e, t, r) {
          return p(this.url, e, t, r);
        }
        buffer(e, t) {
          return (async function (e, t, r) {
            const n = (0, l.en)(e),
              i = { ...n.query, f: 'json', ...t.toJSON() },
              s = t.outSpatialReference || t.geometries[0].spatialReference,
              o = (0, l.lA)(i, r);
            return (0, a.default)(n.path + '/buffer', o).then((e) =>
              (e.data.geometries || []).map(
                ({ rings: e }) => new N.Z({ spatialReference: s, rings: e }),
              ),
            );
          })(this.url, e, t);
        }
        convexHull(e, t) {
          return y(this.url, e, t);
        }
        cut(e, t, r) {
          return (async function (e, t, r, n) {
            const i = (0, l.en)(e),
              s = t[0].spatialReference,
              o = {
                ...n,
                query: {
                  ...i.query,
                  f: 'json',
                  sr: JSON.stringify(s),
                  target: JSON.stringify({
                    geometryType: (0, u.Ji)(t[0]),
                    geometries: t,
                  }),
                  cutter: JSON.stringify(r),
                },
              },
              f = await (0, a.default)(i.path + '/cut', o),
              { cutIndexes: c, geometries: N = [] } = f.data;
            return {
              cutIndexes: c,
              geometries: N.map((e) => {
                const t = (0, u.im)(e);
                return (t.spatialReference = s), t;
              }),
            };
          })(this.url, e, t, r);
        }
        densify(e, t) {
          return (async function (e, t, r) {
            const n = t.geometries[0].spatialReference,
              i = (0, l.en)(e),
              s = { ...i.query, f: 'json', ...t.toJSON() },
              o = (0, l.lA)(s, r);
            return (0, a.default)(i.path + '/densify', o).then(({ data: e }) =>
              (e.geometries || []).map((e) =>
                (0, u.im)(e).set({ spatialReference: n }),
              ),
            );
          })(this.url, e, t);
        }
        difference(e, t, r) {
          return m(this.url, e, t, r);
        }
        distance(e, t) {
          return (async function (e, t, r) {
            const n = (0, l.en)(e),
              i = { ...n.query, f: 'json', ...t.toJSON() },
              s = (0, l.lA)(i, r);
            return (0, a.default)(n.path + '/distance', s).then(
              ({ data: e }) => e && e.distance,
            );
          })(this.url, e, t);
        }
        fromGeoCoordinateString(e, t) {
          return (async function (e, t, r) {
            const n = {};
            null != t.sr && 'object' == typeof t.sr
              ? (n.sr = t.sr.wkid || JSON.stringify(t.sr))
              : (n.sr = t.sr),
              (n.strings = JSON.stringify(t.strings));
            const i = t.conversionType || 'mgrs';
            (n.conversionType = _.toJSON(i)),
              (n.conversionMode = t.conversionMode);
            const s = (0, l.en)(e),
              o = { ...s.query, f: 'json', ...n },
              u = (0, l.lA)(o, r);
            return (0, a.default)(s.path + '/fromGeoCoordinateString', u).then(
              ({ data: e }) => e.coordinates,
            );
          })(this.url, e, t);
        }
        generalize(e, t) {
          return (async function (e, t, r) {
            const n = (t = I.from(t)).toJSON(),
              i = (function (e) {
                const {
                    geometries: t,
                    deviationUnit: r,
                    maxDeviation: n,
                  } = e.toJSON(),
                  i = { maxDeviation: n };
                return (
                  t &&
                    t.length &&
                    ((i.geometries = JSON.stringify({
                      geometryType: (0, u.Ji)(t[0]),
                      geometries: t,
                    })),
                    (i.sr = JSON.stringify(t[0].spatialReference))),
                  g.write(r, i, 'deviationUnit'),
                  i
                );
              })(t),
              s = (0, l.en)(e),
              o = { ...s.query, f: 'json', ...i },
              f = n.geometries[0].spatialReference,
              c = (0, l.lA)(o, r);
            return (0, a.default)(s.path + '/generalize', c).then(
              ({ data: e }) =>
                (e.geometries || []).map((e) =>
                  (0, u.im)(e).set({ spatialReference: f }),
                ),
            );
          })(this.url, e, t);
        }
        intersect(e, t, r) {
          return O(this.url, e, t, r);
        }
        labelPoints(e, t) {
          return (function (e, t, r) {
            const n = t.map((e) => e.toJSON()),
              i = t[0].spatialReference,
              s = (0, l.en)(e),
              o = {
                ...s.query,
                f: 'json',
                sr: i.wkid ? i.wkid : JSON.stringify(i.toJSON()),
                polygons: JSON.stringify(n),
              },
              f = (0, l.lA)(o, r);
            return (0, a.default)(s.path + '/labelPoints', f).then(
              ({ data: e }) =>
                (e.labelPoints || []).map((e) =>
                  (0, u.im)(e).set({ spatialReference: i }),
                ),
            );
          })(this.url, e, t);
        }
        lengths(e, t) {
          return (async function (e, t, r) {
            const n = R((t = J.from(t))),
              i = (0, l.en)(e),
              s = { ...i.query, f: 'json', ...n },
              o = (0, l.lA)(s, r);
            return (0, a.default)(i.path + '/lengths', o).then(
              ({ data: e }) => e,
            );
          })(this.url, e, t);
        }
        offset(e, t) {
          return (async function (e, t, r) {
            const n = (function (e) {
                const {
                    geometries: t,
                    bevelRatio: r,
                    offsetDistance: n,
                    offsetHow: i,
                    offsetUnit: s,
                  } = e.toJSON(),
                  o = { bevelRatio: r, offsetDistance: n };
                return (
                  t &&
                    t.length &&
                    ((o.geometries = JSON.stringify({
                      geometryType: (0, u.Ji)(t[0]),
                      geometries: t,
                    })),
                    (o.sr = JSON.stringify(t[0].spatialReference))),
                  i && (o.offsetHow = E.toJSON(i)),
                  s && (o.offsetUnit = w.toJSON(s)),
                  o
                );
              })((t = v.from(t))),
              i = (0, l.en)(e),
              s = { ...i.query, f: 'json', ...n },
              o = t.geometries[0].spatialReference,
              f = (0, l.lA)(s, r);
            return (0, a.default)(i.path + '/offset', f).then(({ data: e }) =>
              (e.geometries || []).map((e) =>
                (0, u.im)(e).set({ spatialReference: o }),
              ),
            );
          })(this.url, e, t);
        }
        project(e, t) {
          return (async function (e, t, r) {
            t = D(t);
            const n = (0, l.en)(e),
              i = { ...n.query, f: 'json', ...t.toJSON() },
              s = t.outSpatialReference,
              o = (0, u.Ji)(t.geometries[0]),
              f = (0, l.lA)(i, r);
            return (0, a.default)(n.path + '/project', f).then(
              ({ data: { geometries: e } }) => c(e, o, s),
            );
          })(this.url, e, t);
        }
        relation(e, t) {
          return (async function (e, t, r) {
            const n = (function (e) {
                const {
                    geometries1: t,
                    geometries2: r,
                    relation: n,
                    relationParameter: i,
                  } = e.toJSON(),
                  s = {};
                if (t && t.length) {
                  s.geometries1 = JSON.stringify({
                    geometryType: (0, u.Ji)(t[0]),
                    geometries: t,
                  });
                  const e = t[0].spatialReference;
                  s.sr = e.wkid ? e.wkid : JSON.stringify(e);
                }
                return (
                  r &&
                    r.length > 0 &&
                    (s.geometries2 = JSON.stringify({
                      geometryType: (0, u.Ji)(r[0]),
                      geometries: r,
                    })),
                  n && (s.relation = q.toJSON(n)),
                  i && (s.relationParam = i),
                  s
                );
              })((t = M.from(t))),
              i = (0, l.en)(e),
              s = { ...i.query, f: 'json', ...n },
              o = (0, l.lA)(s, r);
            return (0, a.default)(i.path + '/relation', o).then(
              ({ data: e }) => e.relations,
            );
          })(this.url, e, t);
        }
        reshape(e, t, r) {
          return (async function (e, t, r, n) {
            const i = t.spatialReference,
              s = (0, l.en)(e),
              o = {
                ...s.query,
                f: 'json',
                sr: JSON.stringify(i.toJSON()),
                target: JSON.stringify({
                  geometryType: (0, u.Ji)(t),
                  geometry: t.toJSON(),
                }),
                reshaper: JSON.stringify(r.toJSON()),
              },
              f = (0, l.lA)(o, n);
            return (0, a.default)(s.path + '/reshape', f).then(({ data: e }) =>
              (0, u.im)(e.geometry).set({ spatialReference: i }),
            );
          })(this.url, e, t, r);
        }
        simplify(e, t) {
          return G(this.url, e, t);
        }
        toGeoCoordinateString(e, t) {
          return (async function (e, t, r) {
            const n = {};
            null != t.sr && 'object' == typeof t.sr
              ? (n.sr = t.sr.wkid || JSON.stringify(t.sr))
              : (n.sr = t.sr),
              (n.coordinates = JSON.stringify(t.coordinates));
            const i = t.conversionType || 'mgrs';
            (n.conversionType = _.toJSON(i)),
              (n.conversionMode = t.conversionMode),
              (n.numOfDigits = t.numOfDigits),
              (n.rounding = t.rounding),
              (n.addSpaces = t.addSpaces);
            const s = (0, l.en)(e),
              o = { ...s.query, f: 'json', ...n },
              u = (0, l.lA)(o, r);
            return (0, a.default)(s.path + '/toGeoCoordinateString', u).then(
              ({ data: e }) => e.strings,
            );
          })(this.url, e, t);
        }
        trimExtend(e, t) {
          return (async function (e, t, r) {
            const n = (function (e) {
                const {
                    extendHow: t,
                    polylines: r,
                    trimExtendTo: n,
                  } = e.toJSON(),
                  i = {};
                return (
                  (i.extendHow = H.toJSON(t)),
                  r &&
                    r.length &&
                    ((i.polylines = JSON.stringify(r)),
                    (i.sr = JSON.stringify(r[0].spatialReference))),
                  n && (i.trimExtendTo = JSON.stringify(n)),
                  i
                );
              })((t = F.from(t))),
              i = (0, l.en)(e),
              s = { ...i.query, f: 'json', ...n },
              o = t.sr,
              u = (0, l.lA)(s, r);
            return (0, a.default)(i.path + '/trimExtend', u).then(
              ({ data: e }) =>
                (e.geometries || []).map(
                  ({ paths: e }) => new U.Z({ spatialReference: o, paths: e }),
                ),
            );
          })(this.url, e, t);
        }
        union(e, t) {
          return Y(this.url, e, t);
        }
      };
      (B.UNIT_METER = 9001),
        (B.UNIT_GERMAN_METER = 9031),
        (B.UNIT_FOOT = 9002),
        (B.UNIT_SURVEY_FOOT = 9003),
        (B.UNIT_CLARKE_FOOT = 9005),
        (B.UNIT_FATHOM = 9014),
        (B.UNIT_NAUTICAL_MILE = 9030),
        (B.UNIT_SURVEY_CHAIN = 9033),
        (B.UNIT_SURVEY_LINK = 9034),
        (B.UNIT_SURVEY_MILE = 9035),
        (B.UNIT_KILOMETER = 9036),
        (B.UNIT_CLARKE_YARD = 9037),
        (B.UNIT_CLARKE_CHAIN = 9038),
        (B.UNIT_CLARKE_LINK = 9039),
        (B.UNIT_SEARS_YARD = 9040),
        (B.UNIT_SEARS_FOOT = 9041),
        (B.UNIT_SEARS_CHAIN = 9042),
        (B.UNIT_SEARS_LINK = 9043),
        (B.UNIT_BENOIT_1895A_YARD = 9050),
        (B.UNIT_BENOIT_1895A_FOOT = 9051),
        (B.UNIT_BENOIT_1895A_CHAIN = 9052),
        (B.UNIT_BENOIT_1895A_LINK = 9053),
        (B.UNIT_BENOIT_1895B_YARD = 9060),
        (B.UNIT_BENOIT_1895B_FOOT = 9061),
        (B.UNIT_BENOIT_1895B_CHAIN = 9062),
        (B.UNIT_BENOIT_1895B_LINK = 9063),
        (B.UNIT_INDIAN_FOOT = 9080),
        (B.UNIT_INDIAN_1937_FOOT = 9081),
        (B.UNIT_INDIAN_1962_FOOT = 9082),
        (B.UNIT_INDIAN_1975_FOOT = 9083),
        (B.UNIT_INDIAN_YARD = 9084),
        (B.UNIT_INDIAN_1937_YARD = 9085),
        (B.UNIT_INDIAN_1962_YARD = 9086),
        (B.UNIT_INDIAN_1975_YARD = 9087),
        (B.UNIT_FOOT_1865 = 9070),
        (B.UNIT_RADIAN = 9101),
        (B.UNIT_DEGREE = 9102),
        (B.UNIT_ARCMINUTE = 9103),
        (B.UNIT_ARCSECOND = 9104),
        (B.UNIT_GRAD = 9105),
        (B.UNIT_GON = 9106),
        (B.UNIT_MICRORADIAN = 9109),
        (B.UNIT_ARCMINUTE_CENTESIMAL = 9112),
        (B.UNIT_ARCSECOND_CENTESIMAL = 9113),
        (B.UNIT_MIL6400 = 9114),
        (B.UNIT_BRITISH_1936_FOOT = 9095),
        (B.UNIT_GOLDCOAST_FOOT = 9094),
        (B.UNIT_INTERNATIONAL_CHAIN = 109003),
        (B.UNIT_INTERNATIONAL_LINK = 109004),
        (B.UNIT_INTERNATIONAL_YARD = 109001),
        (B.UNIT_STATUTE_MILE = 9093),
        (B.UNIT_SURVEY_YARD = 109002),
        (B.UNIT_50KILOMETER_LENGTH = 109030),
        (B.UNIT_150KILOMETER_LENGTH = 109031),
        (B.UNIT_DECIMETER = 109005),
        (B.UNIT_CENTIMETER = 109006),
        (B.UNIT_MILLIMETER = 109007),
        (B.UNIT_INTERNATIONAL_INCH = 109008),
        (B.UNIT_US_SURVEY_INCH = 109009),
        (B.UNIT_INTERNATIONAL_ROD = 109010),
        (B.UNIT_US_SURVEY_ROD = 109011),
        (B.UNIT_US_NAUTICAL_MILE = 109012),
        (B.UNIT_UK_NAUTICAL_MILE = 109013),
        (B.UNIT_SQUARE_INCHES = 'esriSquareInches'),
        (B.UNIT_SQUARE_FEET = 'esriSquareFeet'),
        (B.UNIT_SQUARE_YARDS = 'esriSquareYards'),
        (B.UNIT_ACRES = 'esriAcres'),
        (B.UNIT_SQUARE_MILES = 'esriSquareMiles'),
        (B.UNIT_SQUARE_MILLIMETERS = 'esriSquareMillimeters'),
        (B.UNIT_SQUARE_CENTIMETERS = 'esriSquareCentimeters'),
        (B.UNIT_SQUARE_DECIMETERS = 'esriSquareDecimeters'),
        (B.UNIT_SQUARE_METERS = 'esriSquareMeters'),
        (B.UNIT_ARES = 'esriAres'),
        (B.UNIT_HECTARES = 'esriHectares'),
        (B.UNIT_SQUARE_KILOMETERS = 'esriSquareKilometers'),
        (0, n._)([(0, i.Cb)()], B.prototype, 'url', void 0),
        (B = (0, n._)([(0, o.j)('esri.tasks.GeometryService')], B));
      const P = B;
    },
    59633: (e, t, r) => {
      r.d(t, { Z: () => u });
      var n = r(43697),
        i = r(15923),
        s = r(17452),
        o = r(5600),
        a = (r(67676), r(80442), r(75215), r(52011));
      let l = class extends i.Z {
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
          return e ? (0, s.mN)(e) : null;
        }
        _encode(e, t, r) {
          const n = {};
          for (const i in e) {
            if ('declaredClass' === i) continue;
            const s = e[i];
            if (null != s && 'function' != typeof s)
              if (Array.isArray(s)) {
                n[i] = [];
                for (let e = 0; e < s.length; e++) n[i][e] = this._encode(s[e]);
              } else if ('object' == typeof s)
                if (s.toJSON) {
                  const e = s.toJSON(r && r[i]);
                  n[i] = t ? e : JSON.stringify(e);
                } else n[i] = t ? s : JSON.stringify(s);
              else n[i] = s;
          }
          return n;
        }
      };
      (0, n._)([(0, o.Cb)({ readOnly: !0 })], l.prototype, 'parsedUrl', null),
        (0, n._)([(0, o.Cb)()], l.prototype, 'requestOptions', void 0),
        (0, n._)([(0, o.Cb)({ type: String })], l.prototype, 'url', void 0),
        (l = (0, n._)([(0, a.j)('esri.tasks.Task')], l));
      const u = l;
    },
  },
]);
