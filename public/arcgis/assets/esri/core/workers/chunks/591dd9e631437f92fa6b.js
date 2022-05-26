'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [5517],
  {
    91040: (t, e, r) => {
      r.d(e, { yZ: () => n });
      var s = r(67900);
      function n(t, e) {
        const r = e || t.extent,
          n = t.width,
          o = (0, s.c9)(r && r.spatialReference);
        return r && n ? (r.width / n) * o * s.hd * 96 : 0;
      }
    },
    61159: (t, e, r) => {
      r.d(e, { g: () => s });
      const s = {
        supportsStatistics: !0,
        supportsPercentileStatistics: !0,
        supportsSpatialAggregationStatistics: !1,
        supportedSpatialAggregationStatistics: {
          envelope: !1,
          centroid: !1,
          convexHull: !1,
        },
        supportsCentroid: !0,
        supportsCacheHint: !1,
        supportsDistance: !0,
        supportsDistinct: !0,
        supportsExtent: !0,
        supportsGeometryProperties: !1,
        supportsHavingClause: !0,
        supportsOrderBy: !0,
        supportsPagination: !0,
        supportsQuantization: !0,
        supportsQuantizationEditMode: !1,
        supportsQueryGeometry: !0,
        supportsResultType: !1,
        supportsSqlExpression: !0,
        supportsMaxRecordCountFactor: !1,
        supportsStandardizedQueriesOnly: !0,
        supportsTopFeaturesQuery: !1,
        supportsQueryByOthers: !0,
        supportsHistoricMoment: !1,
        supportsFormatPBF: !1,
        supportsDisjointSpatialRelationship: !0,
        supportsDefaultSpatialReference: !1,
        supportsCompactGeometry: !1,
        maxRecordCountFactor: void 0,
        maxRecordCount: void 0,
        standardMaxRecordCount: void 0,
        tileMaxRecordCount: void 0,
      };
    },
    85517: (t, e, r) => {
      r.r(e), r.d(e, { default: () => ut });
      var s = r(43697),
        n = (r(66577), r(38171)),
        o = r(3172),
        a = r(92835),
        i = r(20102),
        u = r(80442),
        l = r(35454),
        d = r(83379),
        c = r(70586),
        p = r(78286),
        h = r(95330),
        y = r(17452),
        f = r(5600),
        m = (r(67676), r(75215), r(52011)),
        g = r(6570),
        b = r(33955),
        F = r(25278),
        O = r(59431),
        R = r(40330),
        S = r(76497),
        I = r(98326);
      function _(t) {
        const e = t.toJSON();
        return (
          e.attachmentTypes &&
            (e.attachmentTypes = e.attachmentTypes.join(',')),
          e.keywords && (e.keywords = e.keywords.join(',')),
          e.globalIds && (e.globalIds = e.globalIds.join(',')),
          e.objectIds && (e.objectIds = e.objectIds.join(',')),
          e.size && (e.size = e.size.join(',')),
          e
        );
      }
      function q(t, e) {
        const r = {};
        for (const s of t) {
          const {
            parentObjectId: t,
            parentGlobalId: n,
            attachmentInfos: o,
          } = s;
          for (const s of o) {
            const { id: o } = s,
              a = (0, y.qg)((0, R.Dp)(`${e}/${t}/attachments/${o}`)),
              i = I.Z.fromJSON(s);
            i.set({ url: a, parentObjectId: t, parentGlobalId: n }),
              r[t] ? r[t].push(i) : (r[t] = [i]);
          }
        }
        return r;
      }
      function v(t, e, r) {
        let s = { query: (0, S.A)({ ...t.query, f: 'json', ..._(e) }) };
        return (
          r && (s = { ...r, ...s, query: { ...r.query, ...s.query } }),
          (0, o.default)(t.path + '/queryAttachments', s)
        );
      }
      var x = r(10158),
        C = r(11282),
        w = r(56545),
        j = r(41818),
        E = r(34599),
        T = r(57444),
        D = r(5396),
        A = r(4967),
        N = r(74085),
        P = r(69285),
        G = r(98732);
      function J(t, e) {
        return e;
      }
      function Z(t, e, r, s) {
        switch (r) {
          case 0:
            return z(t, e + s, 0);
          case 1:
            return 'lowerLeft' === t.originPosition
              ? z(t, e + s, 1)
              : (function ({ translate: t, scale: e }, r, s) {
                  return t[s] - r * e[s];
                })(t, e + s, 1);
        }
      }
      function k(t, e, r, s) {
        return 2 === r ? z(t, e, 2) : Z(t, e, r, s);
      }
      function Q(t, e, r, s) {
        return 2 === r ? z(t, e, 3) : Z(t, e, r, s);
      }
      function M(t, e, r, s) {
        return 3 === r ? z(t, e, 3) : k(t, e, r, s);
      }
      function z({ translate: t, scale: e }, r, s) {
        return t[s] + r * e[s];
      }
      class B {
        constructor(t) {
          (this.options = t),
            (this.geometryTypes = [
              'esriGeometryPoint',
              'esriGeometryMultipoint',
              'esriGeometryPolyline',
              'esriGeometryPolygon',
            ]),
            (this.previousCoordinate = [0, 0]),
            (this.transform = null),
            (this.applyTransform = J),
            (this.lengths = []),
            (this.currentLengthIndex = 0),
            (this.toAddInCurrentPath = 0),
            (this.vertexDimension = 0),
            (this.coordinateBuffer = null),
            (this.coordinateBufferPtr = 0),
            (this._attributesConstructor = function () {});
        }
        createFeatureResult() {
          return { fields: [], features: [] };
        }
        finishFeatureResult(t) {
          if (
            (this.options.applyTransform && (t.transform = null),
            (this._attributesConstructor = function () {}),
            (this.coordinateBuffer = null),
            (this.lengths.length = 0),
            !t.hasZ)
          )
            return;
          const e = (0, P.k)(
            t.geometryType,
            this.options.sourceSpatialReference,
            t.spatialReference,
          );
          if (!(0, c.Wi)(e)) for (const r of t.features) e(r.geometry);
        }
        createSpatialReference() {
          return {};
        }
        addField(t, e) {
          t.fields.push(e);
          const r = t.fields.map((t) => t.name);
          this._attributesConstructor = function () {
            for (const t of r) this[t] = null;
          };
        }
        addFeature(t, e) {
          t.features.push(e);
        }
        prepareFeatures(t) {
          switch (
            ((this.transform = t.transform),
            this.options.applyTransform &&
              t.transform &&
              (this.applyTransform = this._deriveApplyTransform(t)),
            (this.vertexDimension = 2),
            t.hasZ && this.vertexDimension++,
            t.hasM && this.vertexDimension++,
            t.geometryType)
          ) {
            case 'esriGeometryPoint':
              (this.addCoordinate = (t, e, r) =>
                this.addCoordinatePoint(t, e, r)),
                (this.createGeometry = (t) => this.createPointGeometry(t));
              break;
            case 'esriGeometryPolygon':
              (this.addCoordinate = (t, e, r) =>
                this._addCoordinatePolygon(t, e, r)),
                (this.createGeometry = (t) => this._createPolygonGeometry(t));
              break;
            case 'esriGeometryPolyline':
              (this.addCoordinate = (t, e, r) =>
                this._addCoordinatePolyline(t, e, r)),
                (this.createGeometry = (t) => this._createPolylineGeometry(t));
              break;
            case 'esriGeometryMultipoint':
              (this.addCoordinate = (t, e, r) =>
                this._addCoordinateMultipoint(t, e, r)),
                (this.createGeometry = (t) =>
                  this._createMultipointGeometry(t));
              break;
            default:
              (0, N.Bg)(t.geometryType);
          }
        }
        createFeature() {
          return (
            (this.lengths.length = 0),
            (this.currentLengthIndex = 0),
            (this.previousCoordinate[0] = 0),
            (this.previousCoordinate[1] = 0),
            (this.coordinateBuffer = null),
            (this.coordinateBufferPtr = 0),
            { attributes: new this._attributesConstructor() }
          );
        }
        allocateCoordinates() {}
        addLength(t, e, r) {
          0 === this.lengths.length && (this.toAddInCurrentPath = e),
            this.lengths.push(e);
        }
        addQueryGeometry(t, e) {
          const { queryGeometry: r, queryGeometryType: s } = e,
            n = (0, G.$g)(r.clone(), r, !1, !1, this.transform),
            o = (0, G.di)(n, s, !1, !1);
          (t.queryGeometryType = s), (t.queryGeometry = { ...o });
        }
        createPointGeometry(t) {
          const e = { x: 0, y: 0, spatialReference: t.spatialReference };
          return t.hasZ && (e.z = 0), t.hasM && (e.m = 0), e;
        }
        addCoordinatePoint(t, e, r) {
          switch (((e = this.applyTransform(this.transform, e, r, 0)), r)) {
            case 0:
              t.x = e;
              break;
            case 1:
              t.y = e;
              break;
            case 2:
              'z' in t ? (t.z = e) : (t.m = e);
              break;
            case 3:
              t.m = e;
          }
        }
        _transformPathLikeValue(t, e) {
          let r = 0;
          return (
            e <= 1 &&
              ((r = this.previousCoordinate[e]),
              (this.previousCoordinate[e] += t)),
            this.applyTransform(this.transform, t, e, r)
          );
        }
        _addCoordinatePolyline(t, e, r) {
          this._dehydratedAddPointsCoordinate(t.paths, e, r);
        }
        _addCoordinatePolygon(t, e, r) {
          this._dehydratedAddPointsCoordinate(t.rings, e, r);
        }
        _addCoordinateMultipoint(t, e, r) {
          0 === r && t.points.push([]);
          const s = this._transformPathLikeValue(e, r);
          t.points[t.points.length - 1].push(s);
        }
        _createPolygonGeometry(t) {
          return {
            rings: [[]],
            spatialReference: t.spatialReference,
            hasZ: !!t.hasZ,
            hasM: !!t.hasM,
          };
        }
        _createPolylineGeometry(t) {
          return {
            paths: [[]],
            spatialReference: t.spatialReference,
            hasZ: !!t.hasZ,
            hasM: !!t.hasM,
          };
        }
        _createMultipointGeometry(t) {
          return {
            points: [],
            spatialReference: t.spatialReference,
            hasZ: !!t.hasZ,
            hasM: !!t.hasM,
          };
        }
        _dehydratedAddPointsCoordinate(t, e, r) {
          0 === r &&
            0 == this.toAddInCurrentPath-- &&
            (t.push([]),
            (this.toAddInCurrentPath =
              this.lengths[++this.currentLengthIndex] - 1),
            (this.previousCoordinate[0] = 0),
            (this.previousCoordinate[1] = 0));
          const s = this._transformPathLikeValue(e, r),
            n = t[t.length - 1];
          0 === r &&
            ((this.coordinateBufferPtr = 0),
            (this.coordinateBuffer = new Array(this.vertexDimension)),
            n.push(this.coordinateBuffer)),
            (this.coordinateBuffer[this.coordinateBufferPtr++] = s);
        }
        _deriveApplyTransform(t) {
          const { hasZ: e, hasM: r } = t;
          return e && r ? M : e ? k : r ? Q : Z;
        }
      }
      var U = r(74889);
      function V(t, e) {
        const r = t.toJSON();
        return (
          r.objectIds && (r.objectIds = r.objectIds.join(',')),
          r.orderByFields && (r.orderByFields = r.orderByFields.join(',')),
          !r.outFields || (null != e && e.returnCountOnly)
            ? delete r.outFields
            : -1 !== r.outFields.indexOf('*')
            ? (r.outFields = '*')
            : (r.outFields = r.outFields.join(',')),
          r.outSpatialReference &&
            ((r.outSR = r.outSR.wkid || JSON.stringify(r.outSR.toJSON())),
            delete r.outSpatialReference),
          r.dynamicDataSource &&
            ((r.layer = JSON.stringify({ source: r.dynamicDataSource })),
            delete r.dynamicDataSource),
          r
        );
      }
      async function L(t, e, r = {}, s) {
        const n = (0, S.A)({ ...t.query, f: 'json', ...s, ...V(e, s) });
        return (0, o.default)(t.path + '/queryRelatedRecords', {
          ...r,
          query: { ...r.query, ...n },
        });
      }
      var $ = r(75935);
      var W = r(82526),
        H = r(28694);
      const X = 'Layer does not support extent calculation.';
      function Y(t, e) {
        var r, s;
        const n = t.geometry,
          o = t.toJSON(),
          a = o;
        if (
          ((0, c.pC)(n) &&
            ((a.geometry = JSON.stringify(n)),
            (a.geometryType = (0, b.Ji)(n)),
            (a.inSR =
              n.spatialReference.wkid || JSON.stringify(n.spatialReference))),
          null != (r = o.topFilter) &&
            r.groupByFields &&
            (a.topFilter.groupByFields = o.topFilter.groupByFields.join(',')),
          null != (s = o.topFilter) &&
            s.orderByFields &&
            (a.topFilter.orderByFields = o.topFilter.orderByFields.join(',')),
          o.topFilter && (a.topFilter = JSON.stringify(a.topFilter)),
          o.objectIds && (a.objectIds = o.objectIds.join(',')),
          o.orderByFields && (a.orderByFields = o.orderByFields.join(',')),
          o.outFields &&
          !(
            (null != e && e.returnCountOnly) ||
            (null != e && e.returnExtentOnly) ||
            (null != e && e.returnIdsOnly)
          )
            ? -1 !== o.outFields.indexOf('*')
              ? (a.outFields = '*')
              : (a.outFields = o.outFields.join(','))
            : delete a.outFields,
          o.outSR
            ? (a.outSR = o.outSR.wkid || JSON.stringify(o.outSR))
            : n && o.returnGeometry && (a.outSR = a.inSR),
          o.returnGeometry && delete o.returnGeometry,
          o.timeExtent)
        ) {
          const t = o.timeExtent,
            { start: e, end: r } = t;
          (null == e && null == r) ||
            (a.time =
              e === r
                ? e
                : `${null == e ? 'null' : e},${null == r ? 'null' : r}`),
            delete o.timeExtent;
        }
        return a;
      }
      function K(t, e, r, s = {}, n = {}) {
        const a = 'string' == typeof t ? (0, y.mN)(t) : t,
          i = e.geometry ? [e.geometry] : [];
        return (
          (s.responseType = 'pbf' === r ? 'array-buffer' : 'json'),
          (0, W.aX)(i, null, s).then((t) => {
            const i = t && t[0];
            (0, c.pC)(i) && ((e = e.clone()).geometry = i);
            const u = (0, S.A)({ ...a.query, f: r, ...n, ...Y(e, n) });
            return (0, o.default)((0, y.v_)(a.path, 'queryTopFeatures'), {
              ...s,
              query: { ...u, ...s.query },
            });
          })
        );
      }
      var tt = r(28141);
      var et = r(59633);
      let rt = class extends et.Z {
        constructor(t) {
          super(t),
            (this.dynamicDataSource = null),
            (this.fieldsIndex = null),
            (this.format = 'json'),
            (this.gdbVersion = null),
            (this.infoFor3D = null),
            (this.sourceSpatialReference = null);
        }
        execute(t, e) {
          return this.executeJSON(t, e).then((r) =>
            this.featureSetFromJSON(t, r, e),
          );
        }
        async executeJSON(t, e) {
          var r;
          const s = { ...this.requestOptions, ...e },
            n = this._normalizeQuery(t),
            o = null != (null == (r = t.outStatistics) ? void 0 : r[0]),
            a = (0, u.Z)('featurelayer-pbf-statistics'),
            i = !o || a;
          let l;
          if ('pbf' === this.format && i)
            try {
              l = await (async function (t, e, r) {
                const s = (0, C.en)(t),
                  n = { ...r },
                  o = T.Z.from(e),
                  a = !o.quantizationParameters,
                  { data: i } = await (0, E.executeQueryPBF)(
                    s,
                    o,
                    new B({
                      sourceSpatialReference: o.sourceSpatialReference,
                      applyTransform: a,
                    }),
                    n,
                  );
                return i;
              })(this.url, n, s);
            } catch (t) {
              if ('query:parsing-pbf' !== t.name) throw t;
              this.format = 'json';
            }
          return (
            ('json' !== this.format && i) ||
              (l = await (0, A.F)(this.url, n, s)),
            this._normalizeFields(l.fields),
            l
          );
        }
        async featureSetFromJSON(t, e, s) {
          if (
            !(
              this._queryIs3DObjectFormat(t) &&
              (0, c.pC)(this.infoFor3D) &&
              e.features &&
              e.features.length
            )
          )
            return U.default.fromJSON(e);
          const { meshFeatureSetFromJSON: n } = await (0, h.Hl)(
            Promise.all([r.e(4547), r.e(6481), r.e(6459), r.e(8163)]).then(
              r.bind(r, 38163),
            ),
            s,
          );
          return n(t, this.infoFor3D, e);
        }
        executeForCount(t, e) {
          const r = { ...this.requestOptions, ...e },
            s = this._normalizeQuery(t);
          return (0, j.P)(this.url, s, r);
        }
        executeForExtent(t, e) {
          const r = { ...this.requestOptions, ...e },
            s = this._normalizeQuery(t);
          return (async function (t, e, r) {
            const s = (0, C.en)(t);
            return (0, E.executeQueryForExtent)(s, T.Z.from(e), { ...r }).then(
              (t) => ({
                count: t.data.count,
                extent: g.Z.fromJSON(t.data.extent),
              }),
            );
          })(this.url, s, r);
        }
        executeForIds(t, e) {
          const r = { ...this.requestOptions, ...e },
            s = this._normalizeQuery(t);
          return (0, D.G)(this.url, s, r);
        }
        executeRelationshipQuery(t, e) {
          t = $.Z.from(t);
          const r = { ...this.requestOptions, ...e };
          return (
            (this.gdbVersion || this.dynamicDataSource) &&
              (((t = t.clone()).gdbVersion = t.gdbVersion || this.gdbVersion),
              (t.dynamicDataSource =
                t.dynamicDataSource || this.dynamicDataSource)),
            (async function (t, e, r) {
              return (
                (e = $.Z.from(e)),
                (async function (t, e, r) {
                  const s = await L(t, e, r),
                    n = s.data,
                    o = n.geometryType,
                    a = n.spatialReference,
                    i = {};
                  for (const t of n.relatedRecordGroups) {
                    const e = {
                      fields: void 0,
                      objectIdFieldName: void 0,
                      geometryType: o,
                      spatialReference: a,
                      hasZ: !!n.hasZ,
                      hasM: !!n.hasM,
                      features: t.relatedRecords,
                    };
                    if (null != t.objectId) i[t.objectId] = e;
                    else
                      for (const r in t)
                        t.hasOwnProperty(r) &&
                          'relatedRecords' !== r &&
                          (i[t[r]] = e);
                  }
                  return { ...s, data: i };
                })((0, C.en)(t), e, r).then((t) => {
                  const e = t.data,
                    r = {};
                  return (
                    Object.keys(e).forEach(
                      (t) => (r[t] = U.default.fromJSON(e[t])),
                    ),
                    r
                  );
                })
              );
            })(this.url, t, r)
          );
        }
        executeRelationshipQueryForCount(t, e) {
          t = $.Z.from(t);
          const r = { ...this.requestOptions, ...e };
          return (
            (this.gdbVersion || this.dynamicDataSource) &&
              (((t = t.clone()).gdbVersion = t.gdbVersion || this.gdbVersion),
              (t.dynamicDataSource =
                t.dynamicDataSource || this.dynamicDataSource)),
            (async function (t, e, r) {
              return (
                (e = $.Z.from(e)),
                (async function (t, e, r) {
                  const s = await L(t, e, r, { returnCountOnly: !0 }),
                    n = s.data,
                    o = {};
                  for (const t of n.relatedRecordGroups)
                    null != t.objectId && (o[t.objectId] = t.count);
                  return { ...s, data: o };
                })((0, C.en)(t), e, { ...r }).then((t) => t.data)
              );
            })(this.url, t, r)
          );
        }
        executeAttachmentQuery(t, e) {
          const r = { ...this.requestOptions, ...e };
          return (async function (t, e, r) {
            const s = (0, C.en)(t);
            return v(s, w.Z.from(e), { ...r }).then((t) =>
              q(t.data.attachmentGroups, s.path),
            );
          })(this.url, t, r);
        }
        executeTopFeaturesQuery(t, e) {
          const r = { ...this.requestOptions, ...e };
          return (async function (t, e, r, s) {
            const n = (0, C.en)(t),
              o = { ...s },
              { data: a } = await (async function (t, e, r, s) {
                const n = await K(t, e, 'json', s);
                return (0, H.p)(e, r, n.data), n;
              })(n, tt.Z.from(e), r, o);
            return U.default.fromJSON(a);
          })(this.parsedUrl, t, this.sourceSpatialReference, r);
        }
        executeForTopIds(t, e) {
          const r = { ...this.requestOptions, ...e };
          return (async function (t, e, r) {
            const s = (0, C.en)(t);
            return (
              await (async function (t, e, r) {
                return (0, c.pC)(e.timeExtent) && e.timeExtent.isEmpty
                  ? Promise.resolve({ data: { objectIds: [] } })
                  : K(t, e, 'json', r, { returnIdsOnly: !0 });
              })(s, tt.Z.from(e), { ...r })
            ).data.objectIds;
          })(this.parsedUrl, t, r);
        }
        executeForTopExtents(t, e) {
          const r = { ...this.requestOptions, ...e };
          return (async function (t, e, r) {
            const s = (0, C.en)(t),
              n = await (async function (t, e, r) {
                return (0, c.pC)(e.timeExtent) && e.timeExtent.isEmpty
                  ? Promise.resolve({ data: { count: 0, extent: null } })
                  : K(t, e, 'json', r, {
                      returnExtentOnly: !0,
                      returnCountOnly: !0,
                    }).then((t) => {
                      const e = t.data;
                      if (e.hasOwnProperty('extent')) return t;
                      if (e.features) throw new Error(X);
                      if (e.hasOwnProperty('count')) throw new Error(X);
                      return t;
                    });
              })(s, tt.Z.from(e), { ...r });
            return { count: n.data.count, extent: g.Z.fromJSON(n.data.extent) };
          })(this.parsedUrl, t, r);
        }
        executeForTopCount(t, e) {
          const r = { ...this.requestOptions, ...e };
          return (async function (t, e, r) {
            const s = (0, C.en)(t);
            return (
              await (function (t, e, r) {
                return (0, c.pC)(e.timeExtent) && e.timeExtent.isEmpty
                  ? Promise.resolve({ data: { count: 0 } })
                  : K(t, e, 'json', r, {
                      returnIdsOnly: !0,
                      returnCountOnly: !0,
                    });
              })(s, tt.Z.from(e), { ...r })
            ).data.count;
          })(this.parsedUrl, t, r);
        }
        _normalizeQuery(t) {
          let e = T.Z.from(t);
          if (
            ((e.sourceSpatialReference =
              e.sourceSpatialReference || this.sourceSpatialReference),
            (this.gdbVersion || this.dynamicDataSource) &&
              ((e = e === t ? e.clone() : e),
              (e.gdbVersion = t.gdbVersion || this.gdbVersion),
              (e.dynamicDataSource = t.dynamicDataSource
                ? x.n.from(t.dynamicDataSource)
                : this.dynamicDataSource)),
            (0, c.pC)(this.infoFor3D) && this._queryIs3DObjectFormat(t))
          ) {
            (e = e === t ? e.clone() : e), (e.formatOf3DObjects = null);
            for (const t of this.infoFor3D.queryFormats) {
              if ('3D_glb' === t.id) {
                e.formatOf3DObjects = t.id;
                break;
              }
              '3D_gltf' !== t.id ||
                e.formatOf3DObjects ||
                (e.formatOf3DObjects = t.id);
            }
            if (!e.formatOf3DObjects)
              throw new i.Z(
                'query:unsupported-3d-query-formats',
                'Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf',
              );
            if ((0, c.Wi)(e.outFields) || !e.outFields.includes('*')) {
              (e = e === t ? e.clone() : e),
                (0, c.Wi)(e.outFields) && (e.outFields = []);
              const {
                originX: r,
                originY: s,
                originZ: n,
                translationX: o,
                translationY: a,
                translationZ: i,
                scaleX: u,
                scaleY: l,
                scaleZ: d,
                rotationX: p,
                rotationY: h,
                rotationZ: y,
                rotationDeg: f,
              } = this.infoFor3D.transformFieldRoles;
              e.outFields.push(r, s, n, o, a, i, u, l, d, p, h, y, f);
            }
          }
          return e;
        }
        _normalizeFields(t) {
          if ((0, c.pC)(this.fieldsIndex) && (0, c.pC)(t))
            for (const e of t) {
              const t = this.fieldsIndex.get(e.name);
              t && Object.assign(e, t.toJSON());
            }
        }
        _queryIs3DObjectFormat(t) {
          return (
            (0, c.pC)(this.infoFor3D) &&
            t.returnGeometry &&
            'xyFootprint' !== t.multipatchOption &&
            !t.outStatistics
          );
        }
      };
      (0, s._)(
        [(0, f.Cb)({ type: x.n })],
        rt.prototype,
        'dynamicDataSource',
        void 0,
      ),
        (0, s._)([(0, f.Cb)()], rt.prototype, 'fieldsIndex', void 0),
        (0, s._)([(0, f.Cb)()], rt.prototype, 'format', void 0),
        (0, s._)([(0, f.Cb)()], rt.prototype, 'gdbVersion', void 0),
        (0, s._)([(0, f.Cb)()], rt.prototype, 'infoFor3D', void 0),
        (0, s._)([(0, f.Cb)()], rt.prototype, 'sourceSpatialReference', void 0),
        (rt = (0, s._)([(0, m.j)('esri.tasks.QueryTask')], rt));
      const st = rt;
      var nt = r(82971);
      const ot = new l.X({
          originalAndCurrentFeatures: 'original-and-current-features',
          none: 'none',
        }),
        at = new Set(['Feature Layer', 'Table']);
      let it = class extends d.Z {
        constructor() {
          super(...arguments),
            (this.type = 'feature-layer'),
            (this.refresh = (0, h.Ds)(async () => {
              var t, e;
              await this.load();
              const r =
                null == (t = this.sourceJSON.editingInfo)
                  ? void 0
                  : t.lastEditDate;
              if (null == r) return { dataChanged: !0, updates: {} };
              try {
                await this._fetchService(null);
              } catch {
                return { dataChanged: !0, updates: {} };
              }
              const s =
                r !==
                (null == (e = this.sourceJSON.editingInfo)
                  ? void 0
                  : e.lastEditDate);
              return {
                dataChanged: s,
                updates: s
                  ? {
                      editingInfo: this.sourceJSON.editingInfo,
                      extent: this.sourceJSON.extent,
                    }
                  : null,
              };
            }));
        }
        load(t) {
          const e = (0, c.pC)(t) ? t.signal : null;
          return (
            this.addResolvingPromise(
              this._fetchService(this.layer.sourceJSON, e),
            ),
            Promise.resolve(this)
          );
        }
        get queryTask() {
          const {
              capabilities: {
                query: { supportsFormatPBF: t },
              },
              parsedUrl: e,
              dynamicDataSource: r,
              infoFor3D: s,
              gdbVersion: n,
              spatialReference: o,
              fieldsIndex: a,
            } = this.layer,
            i =
              (0, u.Z)('featurelayer-pbf') && t && (0, c.Wi)(s)
                ? 'pbf'
                : 'json';
          return new st({
            url: e.path,
            format: i,
            fieldsIndex: a,
            infoFor3D: s,
            dynamicDataSource: r,
            gdbVersion: n,
            sourceSpatialReference: o,
          });
        }
        async addAttachment(t, e) {
          await this.load();
          const r = t.attributes[this.layer.objectIdField],
            s = this.layer.parsedUrl.path + '/' + r + '/addAttachment',
            n = this._getLayerRequestOptions(),
            a = this._getFormDataForAttachment(e, n.query);
          try {
            const t = await (0, o.default)(s, { body: a });
            return this._createFeatureEditResult(t.data.addAttachmentResult);
          } catch (t) {
            throw this._createAttachmentErrorResult(r, t);
          }
        }
        async updateAttachment(t, e, r) {
          await this.load();
          const s = t.attributes[this.layer.objectIdField],
            n = this.layer.parsedUrl.path + '/' + s + '/updateAttachment',
            a = this._getLayerRequestOptions({ query: { attachmentId: e } }),
            i = this._getFormDataForAttachment(r, a.query);
          try {
            const t = await (0, o.default)(n, { body: i });
            return this._createFeatureEditResult(t.data.updateAttachmentResult);
          } catch (t) {
            throw this._createAttachmentErrorResult(s, t);
          }
        }
        async applyEdits(t, e) {
          await this.load();
          const r = t.addFeatures.map(this._serializeFeature, this),
            s = t.updateFeatures.map(this._serializeFeature, this),
            n = this._getFeatureIds(
              t.deleteFeatures,
              null == e ? void 0 : e.globalIdUsed,
            );
          (0, O.P)(r, s, this.layer.spatialReference);
          const a = [],
            i = [],
            u = [...t.deleteAttachments];
          for (const e of t.addAttachments)
            a.push(await this._serializeAttachment(e));
          for (const e of t.updateAttachments)
            i.push(await this._serializeAttachment(e));
          const l =
              a.length || i.length || u.length
                ? { adds: a, updates: i, deletes: u }
                : null,
            d = {
              gdbVersion:
                (null == e ? void 0 : e.gdbVersion) || this.layer.gdbVersion,
              rollbackOnFailure:
                null == e ? void 0 : e.rollbackOnFailureEnabled,
              useGlobalIds: null == e ? void 0 : e.globalIdUsed,
              returnEditMoment: null == e ? void 0 : e.returnEditMoment,
              usePreviousEditMoment:
                null == e ? void 0 : e.usePreviousEditMoment,
              sessionId: null == e ? void 0 : e.sessionId,
            };
          null != e && e.returnServiceEditsOption
            ? ((d.edits = JSON.stringify([
                {
                  id: this.layer.layerId,
                  adds: r,
                  updates: s,
                  deletes: n,
                  attachments: l,
                },
              ])),
              (d.returnServiceEditsOption = ot.toJSON(
                null == e ? void 0 : e.returnServiceEditsOption,
              )),
              (d.returnServiceEditsInSourceSR =
                null == e ? void 0 : e.returnServiceEditsInSourceSR))
            : ((d.adds = r.length ? JSON.stringify(r) : null),
              (d.updates = s.length ? JSON.stringify(s) : null),
              (d.deletes = n.length
                ? null != e && e.globalIdUsed
                  ? JSON.stringify(n)
                  : n.join(',')
                : null),
              (d.attachments = l && JSON.stringify(l)));
          const c = this._getLayerRequestOptions({ method: 'post', query: d }),
            p =
              null != e && e.returnServiceEditsOption
                ? this.layer.url
                : this.layer.parsedUrl.path,
            h = await (0, o.default)(p + '/applyEdits', c);
          return this._createEditsResult(h);
        }
        async deleteAttachments(t, e) {
          await this.load();
          const r = t.attributes[this.layer.objectIdField],
            s = this.layer.parsedUrl.path + '/' + r + '/deleteAttachments';
          try {
            return (
              await (0, o.default)(
                s,
                this._getLayerRequestOptions({
                  query: { attachmentIds: e.join(',') },
                  method: 'post',
                }),
              )
            ).data.deleteAttachmentResults.map(this._createFeatureEditResult);
          } catch (t) {
            throw this._createAttachmentErrorResult(r, t);
          }
        }
        fetchRecomputedExtents(t = {}) {
          const e = t.signal;
          return this.load({ signal: e }).then(async () => {
            const e = this._getLayerRequestOptions({
                ...t,
                query: { returnUpdates: !0 },
              }),
              { layerId: r, url: s } = this.layer,
              { data: n } = await (0, o.default)(`${s}/${r}`, e),
              { id: i, extent: u, fullExtent: l, timeExtent: d } = n,
              c = u || l;
            return {
              id: i,
              fullExtent: c && g.Z.fromJSON(c),
              timeExtent: d && a.Z.fromJSON({ start: d[0], end: d[1] }),
            };
          });
        }
        async queryAttachments(t, e = {}) {
          const { parsedUrl: r } = this.layer,
            s = r.path;
          await this.load();
          const n = this._getLayerRequestOptions(e);
          if (
            !this.layer.get('capabilities.operations.supportsQueryAttachments')
          ) {
            const { objectIds: e } = t,
              r = [];
            for (const t of e) {
              const e = s + '/' + t + '/attachments';
              r.push((0, o.default)(e, n));
            }
            return Promise.all(r)
              .then((t) =>
                e.map((e, r) => ({
                  parentObjectId: e,
                  attachmentInfos: t[r].data.attachmentInfos,
                })),
              )
              .then((t) => q(t, s));
          }
          return this.queryTask.executeAttachmentQuery(t, n);
        }
        async queryFeatures(t, e) {
          return (
            await this.load(),
            this.queryTask.execute(t, {
              ...e,
              query: this._createRequestQueryOptions(e),
            })
          );
        }
        async queryFeaturesJSON(t, e) {
          return (
            await this.load(),
            this.queryTask.executeJSON(t, {
              ...e,
              query: this._createRequestQueryOptions(e),
            })
          );
        }
        async queryObjectIds(t, e) {
          return (
            await this.load(),
            this.queryTask.executeForIds(t, {
              ...e,
              query: this._createRequestQueryOptions(e),
            })
          );
        }
        async queryFeatureCount(t, e) {
          return (
            await this.load(),
            this.queryTask.executeForCount(t, {
              ...e,
              query: this._createRequestQueryOptions(e),
            })
          );
        }
        async queryExtent(t, e) {
          return (
            await this.load(),
            this.queryTask.executeForExtent(t, {
              ...e,
              query: this._createRequestQueryOptions(e),
            })
          );
        }
        async queryRelatedFeatures(t, e) {
          return (
            await this.load(),
            this.queryTask.executeRelationshipQuery(t, {
              ...e,
              query: this._createRequestQueryOptions(e),
            })
          );
        }
        async queryRelatedFeaturesCount(t, e) {
          return (
            await this.load(),
            this.queryTask.executeRelationshipQueryForCount(t, {
              ...e,
              query: this._createRequestQueryOptions(e),
            })
          );
        }
        async queryTopFeatures(t, e) {
          return (
            await this.load(),
            this.queryTask.executeTopFeaturesQuery(t, {
              ...e,
              query: this._createRequestQueryOptions(e),
            })
          );
        }
        async queryTopObjectIds(t, e) {
          return (
            await this.load(),
            this.queryTask.executeForTopIds(t, {
              ...e,
              query: this._createRequestQueryOptions(e),
            })
          );
        }
        async queryTopExtents(t, e) {
          return (
            await this.load(),
            this.queryTask.executeForTopExtents(t, {
              ...e,
              query: this._createRequestQueryOptions(e),
            })
          );
        }
        async queryTopCount(t, e) {
          return (
            await this.load(),
            this.queryTask.executeForTopCount(t, {
              ...e,
              query: this._createRequestQueryOptions(e),
            })
          );
        }
        _createRequestQueryOptions(t) {
          const e = {
            ...this.layer.customParameters,
            token: this.layer.apiKey,
            ...(null == t ? void 0 : t.query),
          };
          return (
            this.layer.datesInUnknownTimezone &&
              (e.timeReferenceUnknownClient = !0),
            e
          );
        }
        async _fetchService(t, e) {
          if (!t) {
            const { data: r } = await (0, o.default)(
              this.layer.parsedUrl.path,
              this._getLayerRequestOptions({
                query: (0, u.Z)('featurelayer-advanced-symbols')
                  ? { returnAdvancedSymbols: !0 }
                  : {},
                signal: e,
              }),
            );
            t = r;
          }
          this.sourceJSON = this._patchServiceJSON(t);
          const r = t.type;
          if (!at.has(r))
            throw new i.Z(
              'feature-layer-source:unsupported-type',
              `Source type "${r}" is not supported`,
            );
        }
        _patchServiceJSON(t) {
          var e;
          if (
            'Table' !== t.type &&
            t.geometryType &&
            (null == t || null == (e = t.drawingInfo) || !e.renderer) &&
            !t.defaultSymbol
          ) {
            const e = (0, F.bU)(t.geometryType).renderer;
            (0, p.RB)('drawingInfo.renderer', e, t);
          }
          return (
            'esriGeometryMultiPatch' === t.geometryType &&
              t.infoFor3D &&
              (t.geometryType = 'mesh'),
            t
          );
        }
        _serializeFeature(t) {
          const { geometry: e, attributes: r } = t;
          return (0, c.Wi)(e)
            ? { attributes: r }
            : 'mesh' === e.type || 'extent' === e.type
            ? null
            : { geometry: e.toJSON(), attributes: r };
        }
        async _serializeAttachment(t) {
          const { feature: e, attachment: r } = t,
            { globalId: s, name: n, contentType: o, data: a, uploadId: i } = r,
            u = {
              globalId: s,
              parentGlobalId: null,
              contentType: null,
              name: null,
              uploadId: null,
              data: null,
            };
          if (
            (e &&
              (u.parentGlobalId =
                'attributes' in e
                  ? e.attributes && e.attributes[this.layer.globalIdField]
                  : e.globalId),
            i)
          )
            u.uploadId = i;
          else if (a) {
            const t = await (async function (t) {
              return 'string' == typeof t
                ? (0, y.sJ)(t) || { data: t }
                : new Promise((e, r) => {
                    const s = new FileReader();
                    s.readAsDataURL(t),
                      (s.onload = () => e((0, y.sJ)(s.result))),
                      (s.onerror = (t) => r(t));
                  });
            })(a);
            (u.contentType = t.mediaType),
              (u.data = t.data),
              a instanceof File && (u.name = a.name);
          }
          return n && (u.name = n), o && (u.contentType = o), u;
        }
        _getFeatureIds(t, e) {
          const r = t[0];
          return r
            ? this._canUseGlobalIds(e, t)
              ? this._getGlobalIdsFromFeatureIdentifier(t)
              : 'objectId' in r
              ? this._getObjectIdsFromFeatureIdentifier(t)
              : this._getIdsFromFeatures(t)
            : [];
        }
        _getIdsFromFeatures(t) {
          const e = this.layer.objectIdField;
          return t.map((t) => t.attributes && t.attributes[e]);
        }
        _canUseGlobalIds(t, e) {
          return t && 'globalId' in e[0];
        }
        _getObjectIdsFromFeatureIdentifier(t) {
          return t.map((t) => t.objectId);
        }
        _getGlobalIdsFromFeatureIdentifier(t) {
          return t.map((t) => t.globalId);
        }
        _createEditsResult(t) {
          var e;
          const r = t.data,
            { layerId: s } = this.layer,
            n = [];
          let o = null;
          if (Array.isArray(r))
            for (const t of r)
              n.push({ id: t.id, editedFeatures: t.editedFeatures }),
                t.id === s &&
                  (o = {
                    addResults: t.addResults,
                    updateResults: t.updateResults,
                    deleteResults: t.deleteResults,
                    attachments: t.attachments,
                    editMoment: t.editMoment,
                  });
          else o = r;
          const a = null == (e = o) ? void 0 : e.attachments,
            i = {
              addFeatureResults: o.addResults
                ? o.addResults.map(this._createFeatureEditResult, this)
                : [],
              updateFeatureResults: o.updateResults
                ? o.updateResults.map(this._createFeatureEditResult, this)
                : [],
              deleteFeatureResults: o.deleteResults
                ? o.deleteResults.map(this._createFeatureEditResult, this)
                : [],
              addAttachmentResults:
                a && a.addResults
                  ? a.addResults.map(this._createFeatureEditResult, this)
                  : [],
              updateAttachmentResults:
                a && a.updateResults
                  ? a.updateResults.map(this._createFeatureEditResult, this)
                  : [],
              deleteAttachmentResults:
                a && a.deleteResults
                  ? a.deleteResults.map(this._createFeatureEditResult, this)
                  : [],
            };
          if ((o.editMoment && (i.editMoment = o.editMoment), n.length > 0)) {
            i.editedFeatureResults = [];
            for (const t of n) {
              const {
                  adds: e,
                  updates: r,
                  deletes: s,
                  spatialReference: n,
                } = t.editedFeatures,
                o = n ? new nt.Z(n) : null;
              i.editedFeatureResults.push({
                layerId: t.id,
                editedFeatures: {
                  adds:
                    (null == e
                      ? void 0
                      : e.map((t) => this._createEditedFeature(t, o))) || [],
                  updates:
                    (null == r
                      ? void 0
                      : r.map((t) => ({
                          original: this._createEditedFeature(t[0], o),
                          current: this._createEditedFeature(t[1], o),
                        }))) || [],
                  deletes:
                    (null == s
                      ? void 0
                      : s.map((t) => this._createEditedFeature(t, o))) || [],
                  spatialReference: o,
                },
              });
            }
          }
          return i;
        }
        _createEditedFeature(t, e) {
          return new n.Z({
            attributes: t.attributes,
            geometry: (0, b.im)({ ...t.geometry, spatialReference: e }),
          });
        }
        _createFeatureEditResult(t) {
          const e =
            !0 === t.success
              ? null
              : t.error || { code: void 0, description: void 0 };
          return {
            objectId: t.objectId,
            globalId: t.globalId,
            error: e
              ? new i.Z('feature-layer-source:edit-failure', e.description, {
                  code: e.code,
                })
              : null,
          };
        }
        _createAttachmentErrorResult(t, e) {
          const r = (e.details.messages && e.details.messages[0]) || e.message,
            s = e.details.httpStatus || e.details.messageCode;
          return {
            objectId: t,
            globalId: null,
            error: new i.Z('feature-layer-source:attachment-failure', r, {
              code: s,
            }),
          };
        }
        _getFormDataForAttachment(t, e) {
          const r =
            t instanceof FormData
              ? t
              : t && t.elements
              ? new FormData(t)
              : null;
          if (r)
            for (const t in e) {
              const s = e[t];
              null != s && (r.set ? r.set(t, s) : r.append(t, s));
            }
          return r;
        }
        _getLayerRequestOptions(t = {}) {
          const {
            parsedUrl: e,
            gdbVersion: r,
            dynamicDataSource: s,
          } = this.layer;
          return {
            ...t,
            query: {
              gdbVersion: r,
              layer: s ? JSON.stringify({ source: s }) : void 0,
              ...e.query,
              f: 'json',
              ...this._createRequestQueryOptions(t),
            },
            responseType: 'json',
          };
        }
      };
      (0, s._)([(0, f.Cb)()], it.prototype, 'type', void 0),
        (0, s._)(
          [(0, f.Cb)({ constructOnly: !0 })],
          it.prototype,
          'layer',
          void 0,
        ),
        (0, s._)(
          [(0, f.Cb)({ readOnly: !0 })],
          it.prototype,
          'queryTask',
          null,
        ),
        (it = (0, s._)(
          [(0, m.j)('esri.layers.graphics.sources.FeatureLayerSource')],
          it,
        ));
      const ut = it;
    },
    25278: (t, e, r) => {
      r.d(e, { MS: () => p, Dm: () => d, Hq: () => c, bU: () => i });
      var s = r(80442),
        n = r(22974),
        o = r(61159),
        a = r(58333);
      function i(t) {
        return {
          renderer: {
            type: 'simple',
            symbol:
              'esriGeometryPoint' === t || 'esriGeometryMultipoint' === t
                ? a.I4
                : 'esriGeometryPolyline' === t
                ? a.ET
                : a.lF,
          },
        };
      }
      const u = /^[_$a-zA-Z][_$a-zA-Z0-9]*$/;
      let l = 1;
      function d(t, e) {
        if ((0, s.Z)('esri-csp-restrictions'))
          return () => ({ [e]: null, ...t });
        try {
          let r = `this.${e} = null;`;
          for (const e in t)
            r += `this${u.test(e) ? `.${e}` : `["${e}"]`} = ${JSON.stringify(
              t[e],
            )};`;
          const s = new Function(
            `\n      return class AttributesClass$${l++} {\n        constructor() {\n          ${r};\n        }\n      }\n    `,
          )();
          return () => new s();
        } catch (r) {
          return () => ({ [e]: null, ...t });
        }
      }
      function c(t = {}) {
        return [
          {
            name: 'New Feature',
            description: '',
            prototype: { attributes: (0, n.d9)(t) },
          },
        ];
      }
      function p(t, e) {
        return {
          attachment: null,
          data: {
            isVersioned: !1,
            supportsAttachment: !1,
            supportsM: !1,
            supportsZ: t,
          },
          metadata: { supportsAdvancedFieldProperties: !1 },
          operations: {
            supportsCalculate: !1,
            supportsTruncate: !1,
            supportsValidateSql: !1,
            supportsAdd: e,
            supportsDelete: e,
            supportsEditing: e,
            supportsChangeTracking: !1,
            supportsQuery: !0,
            supportsQueryAttachments: !1,
            supportsResizeAttachments: !1,
            supportsSync: !1,
            supportsUpdate: e,
            supportsExceedsLimitStatistics: !0,
          },
          query: o.g,
          queryRelated: {
            supportsCount: !0,
            supportsOrderBy: !0,
            supportsPagination: !0,
          },
          editing: {
            supportsGeometryUpdate: e,
            supportsGlobalId: !1,
            supportsReturnServiceEditsInSourceSpatialReference: !1,
            supportsRollbackOnFailure: !1,
            supportsUpdateWithoutM: !1,
            supportsUploadWithItemId: !1,
            supportsDeleteByAnonymous: !1,
            supportsDeleteByOthers: !1,
            supportsUpdateByAnonymous: !1,
            supportsUpdateByOthers: !1,
          },
        };
      }
    },
    41818: (t, e, r) => {
      r.d(e, { P: () => a });
      var s = r(11282),
        n = r(34599),
        o = r(57444);
      async function a(t, e, r) {
        const a = (0, s.en)(t);
        return (0, n.executeQueryForCount)(a, o.Z.from(e), { ...r }).then(
          (t) => t.data.count,
        );
      }
    },
    5396: (t, e, r) => {
      r.d(e, { G: () => a });
      var s = r(11282),
        n = r(34599),
        o = r(57444);
      async function a(t, e, r) {
        const a = (0, s.en)(t);
        return (0, n.executeQueryForIds)(a, o.Z.from(e), { ...r }).then(
          (t) => t.data.objectIds,
        );
      }
    },
    4967: (t, e, r) => {
      r.d(e, { e: () => i, F: () => u });
      var s = r(11282),
        n = r(34599),
        o = r(74889),
        a = r(57444);
      async function i(t, e, r) {
        const s = await u(t, e, r);
        return o.default.fromJSON(s);
      }
      async function u(t, e, r) {
        const o = (0, s.en)(t),
          i = { ...r },
          u = a.Z.from(e),
          { data: l } = await (0, n.executeQuery)(
            o,
            u,
            u.sourceSpatialReference,
            i,
          );
        return l;
      }
    },
    98326: (t, e, r) => {
      r.d(e, { Z: () => c });
      var s,
        n = r(43697),
        o = r(96674),
        a = r(5600),
        i = (r(67676), r(80442), r(75215)),
        u = r(52011);
      const l = {
        1: { id: 1, rotation: 0, mirrored: !1 },
        2: { id: 2, rotation: 0, mirrored: !0 },
        3: { id: 3, rotation: 180, mirrored: !1 },
        4: { id: 4, rotation: 180, mirrored: !0 },
        5: { id: 5, rotation: -90, mirrored: !0 },
        6: { id: 6, rotation: 90, mirrored: !1 },
        7: { id: 7, rotation: 90, mirrored: !0 },
        8: { id: 8, rotation: -90, mirrored: !1 },
      };
      let d = (s = class extends o.wq {
        constructor(t) {
          super(t),
            (this.contentType = null),
            (this.exifInfo = null),
            (this.id = null),
            (this.globalId = null),
            (this.keywords = null),
            (this.name = null),
            (this.parentGlobalId = null),
            (this.parentObjectId = null),
            (this.size = null),
            (this.url = null);
        }
        get orientationInfo() {
          const { exifInfo: t } = this,
            e = (function (t) {
              const { exifInfo: e, exifName: r, tagName: s } = t;
              if (!e || !r || !s) return null;
              const n = e.find((t) => t.name === r);
              return n
                ? (function (t) {
                    const { tagName: e, tags: r } = t;
                    if (!r || !e) return null;
                    const s = r.find((t) => t.name === e);
                    return (s && s.value) || null;
                  })({ tagName: s, tags: n.tags })
                : null;
            })({ exifName: 'Exif IFD0', tagName: 'Orientation', exifInfo: t });
          return l[e] || null;
        }
        clone() {
          return new s({
            contentType: this.contentType,
            exifInfo: this.exifInfo,
            id: this.id,
            globalId: this.globalId,
            keywords: this.keywords,
            name: this.name,
            parentGlobalId: this.parentGlobalId,
            parentObjectId: this.parentObjectId,
            size: this.size,
            url: this.url,
          });
        }
      });
      (0, n._)(
        [(0, a.Cb)({ type: String })],
        d.prototype,
        'contentType',
        void 0,
      ),
        (0, n._)([(0, a.Cb)()], d.prototype, 'exifInfo', void 0),
        (0, n._)(
          [(0, a.Cb)({ readOnly: !0 })],
          d.prototype,
          'orientationInfo',
          null,
        ),
        (0, n._)([(0, a.Cb)({ type: i.z8 })], d.prototype, 'id', void 0),
        (0, n._)(
          [(0, a.Cb)({ type: String })],
          d.prototype,
          'globalId',
          void 0,
        ),
        (0, n._)(
          [(0, a.Cb)({ type: String })],
          d.prototype,
          'keywords',
          void 0,
        ),
        (0, n._)([(0, a.Cb)({ type: String })], d.prototype, 'name', void 0),
        (0, n._)(
          [(0, a.Cb)({ json: { read: !1 } })],
          d.prototype,
          'parentGlobalId',
          void 0,
        ),
        (0, n._)(
          [(0, a.Cb)({ json: { read: !1 } })],
          d.prototype,
          'parentObjectId',
          void 0,
        ),
        (0, n._)([(0, a.Cb)({ type: i.z8 })], d.prototype, 'size', void 0),
        (0, n._)(
          [(0, a.Cb)({ json: { read: !1 } })],
          d.prototype,
          'url',
          void 0,
        ),
        (d = s = (0, n._)([(0, u.j)('esri.layers.support.AttachmentInfo')], d));
      const c = d;
    },
    11282: (t, e, r) => {
      r.d(e, { lA: () => n, cv: () => a, en: () => o });
      var s = r(17452);
      function n(t, e) {
        return e ? { ...e, query: { ...t, ...e.query } } : { query: t };
      }
      function o(t) {
        return 'string' == typeof t ? (0, s.mN)(t) : t;
      }
      function a(t, e, r) {
        const s = {};
        for (const n in t) {
          if ('declaredClass' === n) continue;
          const o = t[n];
          if (null != o && 'function' != typeof o)
            if (Array.isArray(o)) {
              s[n] = [];
              for (let t = 0; t < o.length; t++) s[n][t] = a(o[t]);
            } else if ('object' == typeof o)
              if (o.toJSON) {
                const t = o.toJSON(r && r[n]);
                s[n] = e ? t : JSON.stringify(t);
              } else s[n] = e ? o : JSON.stringify(o);
            else s[n] = o;
        }
        return s;
      }
      r(91040);
    },
    59633: (t, e, r) => {
      r.d(e, { Z: () => l });
      var s = r(43697),
        n = r(15923),
        o = r(17452),
        a = r(5600),
        i = (r(67676), r(80442), r(75215), r(52011));
      let u = class extends n.Z {
        constructor(...t) {
          super(...t), (this.requestOptions = null), (this.url = null);
        }
        normalizeCtorArgs(t, e) {
          return 'string' != typeof t ? t : { url: t, ...e };
        }
        get parsedUrl() {
          return this._parseUrl(this.url);
        }
        _parseUrl(t) {
          return t ? (0, o.mN)(t) : null;
        }
        _encode(t, e, r) {
          const s = {};
          for (const n in t) {
            if ('declaredClass' === n) continue;
            const o = t[n];
            if (null != o && 'function' != typeof o)
              if (Array.isArray(o)) {
                s[n] = [];
                for (let t = 0; t < o.length; t++) s[n][t] = this._encode(o[t]);
              } else if ('object' == typeof o)
                if (o.toJSON) {
                  const t = o.toJSON(r && r[n]);
                  s[n] = e ? t : JSON.stringify(t);
                } else s[n] = e ? o : JSON.stringify(o);
              else s[n] = o;
          }
          return s;
        }
      };
      (0, s._)([(0, a.Cb)({ readOnly: !0 })], u.prototype, 'parsedUrl', null),
        (0, s._)([(0, a.Cb)()], u.prototype, 'requestOptions', void 0),
        (0, s._)([(0, a.Cb)({ type: String })], u.prototype, 'url', void 0),
        (u = (0, s._)([(0, i.j)('esri.tasks.Task')], u));
      const l = u;
    },
  },
]);
