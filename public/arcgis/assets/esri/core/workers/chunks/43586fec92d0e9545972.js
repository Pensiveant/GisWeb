'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [6785, 4889],
  {
    38171: (e, t, r) => {
      r.d(t, { Z: () => h });
      var i = r(43697),
        n = r(66577),
        o = r(51773),
        s = r(78223),
        a = r(2368),
        l = r(96674),
        u = r(70586),
        p = r(99001),
        c = r(5600),
        d = (r(67676), r(80442), r(75215), r(52011)),
        y = r(33955);
      function f(e) {
        if (!(0, u.pC)(e)) return null;
        const t = {};
        for (const r in e) {
          const i = e[r];
          i && (t[r] = i.toJSON());
        }
        return 0 !== Object.keys(t).length ? t : null;
      }
      let m = class extends (0, a.J)(l.wq) {
        constructor(...e) {
          super(...e),
            (this.isAggregate = !1),
            (this.layer = null),
            (this.popupTemplate = null),
            (this.sourceLayer = null),
            Object.defineProperty(this, 'uid', {
              value: (0, p.D)(),
              configurable: !0,
            });
        }
        normalizeCtorArgs(e, t, r, i) {
          return e && !e.declaredClass
            ? e
            : { geometry: e, symbol: t, attributes: r, popupTemplate: i };
        }
        set aggregateGeometries(e) {
          const t = this._get('aggregateGeometries');
          JSON.stringify(t) !== JSON.stringify(e) &&
            this._set('aggregateGeometries', e);
        }
        set attributes(e) {
          const t = this._get('attributes');
          t !== e &&
            (this._set('attributes', e), this._notifyLayer('attributes', t, e));
        }
        set geometry(e) {
          const t = this._get('geometry');
          t !== e &&
            (this._set('geometry', e), this._notifyLayer('geometry', t, e));
        }
        set symbol(e) {
          const t = this._get('symbol');
          t !== e &&
            (this._set('symbol', e), this._notifyLayer('symbol', t, e));
        }
        set visible(e) {
          const t = this._get('visible');
          t !== e &&
            (this._set('visible', e), this._notifyLayer('visible', t, e));
        }
        getEffectivePopupTemplate(e = !1) {
          if (this.popupTemplate) return this.popupTemplate;
          for (const t of [this.sourceLayer, this.layer])
            if (t) {
              if ('popupTemplate' in t && t.popupTemplate)
                return t.popupTemplate;
              if (
                e &&
                'defaultPopupTemplate' in t &&
                (0, u.pC)(t.defaultPopupTemplate)
              )
                return t.defaultPopupTemplate;
            }
          return null;
        }
        getAttribute(e) {
          return this.attributes && this.attributes[e];
        }
        setAttribute(e, t) {
          if (this.attributes) {
            const r = this.getAttribute(e);
            (this.attributes[e] = t), this._notifyLayer('attributes', r, t, e);
          } else
            (this.attributes = { [e]: t }),
              this._notifyLayer('attributes', void 0, t, e);
        }
        getObjectId() {
          return this.sourceLayer &&
            'objectIdField' in this.sourceLayer &&
            this.sourceLayer.objectIdField
            ? this.getAttribute(this.sourceLayer.objectIdField)
            : null;
        }
        toJSON() {
          return {
            aggregateGeometries: f(this.aggregateGeometries),
            geometry: (0, u.pC)(this.geometry) ? this.geometry.toJSON() : null,
            symbol: (0, u.pC)(this.symbol) ? this.symbol.toJSON() : null,
            attributes: { ...this.attributes },
            popupTemplate: this.popupTemplate && this.popupTemplate.toJSON(),
          };
        }
        notifyGeometryChanged() {
          this._notifyLayer('geometry', this.geometry, this.geometry);
        }
        notifyMeshTransformChanged() {
          (0, u.pC)(this.geometry) &&
            'mesh' === this.geometry.type &&
            this._notifyLayer(
              'transform',
              this.geometry.transform,
              this.geometry.transform,
            );
        }
        _notifyLayer(e, t, r, i) {
          if (!this.layer || !('graphicChanged' in this.layer)) return;
          const n = { graphic: this, property: e, oldValue: t, newValue: r };
          'attributes' === e && (n.attributeName = i),
            this.layer.graphicChanged(n);
        }
      };
      (0, i._)(
        [
          (0, c.Cb)({
            value: null,
            json: {
              read: function (e) {
                if (!e) return null;
                const t = {};
                for (const r in e) {
                  const i = (0, y.im)(e[r]);
                  i && (t[r] = i);
                }
                return 0 !== Object.keys(t).length ? t : null;
              },
            },
          }),
        ],
        m.prototype,
        'aggregateGeometries',
        null,
      ),
        (0, i._)([(0, c.Cb)({ value: null })], m.prototype, 'attributes', null),
        (0, i._)(
          [(0, c.Cb)({ value: null, types: n.qM, json: { read: y.im } })],
          m.prototype,
          'geometry',
          null,
        ),
        (0, i._)(
          [(0, c.Cb)({ type: Boolean })],
          m.prototype,
          'isAggregate',
          void 0,
        ),
        (0, i._)(
          [(0, c.Cb)({ clonable: 'reference' })],
          m.prototype,
          'layer',
          void 0,
        ),
        (0, i._)(
          [(0, c.Cb)({ type: o.Z })],
          m.prototype,
          'popupTemplate',
          void 0,
        ),
        (0, i._)(
          [(0, c.Cb)({ clonable: 'reference' })],
          m.prototype,
          'sourceLayer',
          void 0,
        ),
        (0, i._)(
          [(0, c.Cb)({ value: null, types: s.LB })],
          m.prototype,
          'symbol',
          null,
        ),
        (0, i._)(
          [(0, c.Cb)({ type: Boolean, value: !0 })],
          m.prototype,
          'visible',
          null,
        ),
        (m = (0, i._)([(0, d.j)('esri.Graphic')], m)),
        ((m || (m = {})).generateUID = p.D);
      const h = m;
    },
    74085: (e, t, r) => {
      function i(e) {}
      r.d(t, { Bg: () => i }), r(80442);
    },
    88068: (e, t, r) => {
      r.r(t), r.d(t, { default: () => z });
      var i = r(43697),
        n = (r(66577), r(51773)),
        o =
          (r(16050),
          r(12501),
          r(95088),
          r(79056),
          r(5499),
          r(84382),
          r(30687),
          r(91423),
          r(32400)),
        s = r(16453),
        a = r(5600),
        l = (r(67676), r(80442), r(75215), r(52011)),
        u = r(86973),
        p = r(29600),
        c = r(20102),
        d = r(83379),
        y = r(70586),
        f = r(16467),
        m = r(74889),
        h = r(82971);
      let g = class extends d.Z {
        constructor() {
          super(...arguments),
            (this.featureDefinition = null),
            (this.type = 'ogc-feature');
        }
        load(e) {
          return (
            this.addResolvingPromise(this._loadOGCServices(this.layer, e)),
            this.when()
          );
        }
        getFeatureDefinition() {
          const {
            featureDefinition: {
              collection: e,
              layerDefinition: t,
              spatialReference: r,
              supportedCrs: i,
            },
            layer: { apiKey: n, capabilities: o, customParameters: s },
          } = this;
          return {
            capabilities: o,
            collection: e,
            layerDefinition: t,
            queryParameters: { apiKey: n, customParameters: s },
            spatialReference: r,
            supportedCrs: i,
          };
        }
        queryExtent(e, t = {}) {
          return null;
        }
        queryFeatureCount(e, t = {}) {
          return null;
        }
        queryFeatures(e, t = {}) {
          return this.queryFeaturesJSON(e, t).then((e) =>
            m.default.fromJSON(e),
          );
        }
        queryFeaturesJSON(e, t = {}) {
          const r = this.getFeatureDefinition();
          return this.load(t).then(() => (0, f.yN)(r, e, t));
        }
        queryObjectIds(e, t = {}) {
          return null;
        }
        serviceSupportsSpatialReference(e) {
          return !(
            !e.isWGS84 &&
            !e.isWebMercator &&
            !this.featureDefinition.supportedCrs[e.wkid]
          );
        }
        _conformsToType(e, t) {
          var r;
          const i = new RegExp(`^${t}$`, 'i');
          return null != (r = e.conformsTo.some((e) => i.test(e))) && r;
        }
        _getCapabilities(e, t) {
          var r, i, n, o, s, a, l;
          const u = (0, y.pC)(t)
            ? null == (r = t.components)
              ? void 0
              : r.parameters
            : null;
          return {
            attachment: null,
            data: {
              isVersioned: !1,
              supportsAttachment: !1,
              supportsM: !1,
              supportsZ: e,
            },
            metadata: { supportsAdvancedFieldProperties: !1 },
            operations: {
              supportsCalculate: !1,
              supportsTruncate: !1,
              supportsValidateSql: !1,
              supportsAdd: !1,
              supportsDelete: !1,
              supportsEditing: !1,
              supportsChangeTracking: !1,
              supportsQuery: !1,
              supportsQueryAttachments: !1,
              supportsResizeAttachments: !1,
              supportsSync: !1,
              supportsUpdate: !1,
              supportsExceedsLimitStatistics: !1,
            },
            query: {
              maxRecordCount:
                null !=
                (i =
                  null !=
                  (n =
                    null == u || null == (o = u.limit) || null == (s = o.schema)
                      ? void 0
                      : s.maximum)
                    ? n
                    : null == u ||
                      null == (a = u.limitFeatures) ||
                      null == (l = a.schema)
                    ? void 0
                    : l.maximum)
                  ? i
                  : 5e3,
              maxRecordCountFactor: void 0,
              standardMaxRecordCount: void 0,
              supportsCacheHint: !1,
              supportsCentroid: !1,
              supportsDisjointSpatialRelationship: !1,
              supportsDistance: !1,
              supportsDistinct: !1,
              supportsExtent: !1,
              supportsFormatPBF: !1,
              supportsGeometryProperties: !1,
              supportsHavingClause: !1,
              supportsHistoricMoment: !1,
              supportsMaxRecordCountFactor: !1,
              supportsOrderBy: !1,
              supportsPagination: !1,
              supportsPercentileStatistics: !1,
              supportsQuantization: !1,
              supportsQuantizationEditMode: !1,
              supportsQueryByOthers: !1,
              supportsQueryGeometry: !1,
              supportsResultType: !1,
              supportsStandardizedQueriesOnly: !1,
              supportsTopFeaturesQuery: !1,
              supportsStatistics: !1,
              supportsSpatialAggregationStatistics: !1,
              supportedSpatialAggregationStatistics: {
                envelope: !1,
                centroid: !1,
                convexHull: !1,
              },
              supportsDefaultSpatialReference: !1,
              supportsCompactGeometry: !1,
              supportsSqlExpression: !1,
              tileMaxRecordCount: void 0,
            },
            queryRelated: {
              supportsCount: !1,
              supportsOrderBy: !1,
              supportsPagination: !1,
            },
            editing: {
              supportsDeleteByAnonymous: !1,
              supportsDeleteByOthers: !1,
              supportsGeometryUpdate: !1,
              supportsGlobalId: !1,
              supportsReturnServiceEditsInSourceSpatialReference: !1,
              supportsRollbackOnFailure: !1,
              supportsUpdateByAnonymous: !1,
              supportsUpdateByOthers: !1,
              supportsUploadWithItemId: !1,
              supportsUpdateWithoutM: !1,
            },
          };
        }
        _getExtent(e) {
          var t;
          const r = null == (t = e.extent) ? void 0 : t.spatial;
          if (!r) return null;
          const i = r.bbox[0],
            n = 4 === i.length,
            o = i[0],
            s = i[1],
            a = n ? void 0 : i[2];
          return {
            xmin: o,
            ymin: s,
            xmax: n ? i[2] : i[3],
            ymax: n ? i[3] : i[4],
            zmin: a,
            zmax: n ? void 0 : i[5],
            spatialReference: h.Z.WGS84.toJSON(),
          };
        }
        _getStorageSpatialReference(e) {
          var t;
          const r = null != (t = e.storageCrs) ? t : f.$9,
            i = (0, f.d)(r);
          return (0, y.Wi)(i) ? h.Z.WGS84 : new h.Z({ wkid: i });
        }
        _getSupportedSpatialReferences(e, t) {
          var r;
          const i = '#/crs',
            n = null != (r = e.crs) ? r : [f.$9],
            o = n.includes(i) ? n.filter((e) => e !== i).concat(t.crs) : n,
            s = /^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;
          return o.filter((e) => !s.test(e));
        }
        async _loadOGCServices(e, t) {
          const r = (0, y.pC)(t) ? t.signal : null,
            {
              apiKey: i,
              collectionId: n,
              customParameters: o,
              fields: s,
              geometryType: a,
              hasZ: l,
              objectIdField: p,
              timeInfo: d,
              url: m,
            } = e,
            h = {
              fields: null == s ? void 0 : s.map((e) => e.toJSON()),
              geometryType: u.P$.toJSON(a),
              hasZ: l,
              objectIdField: p,
              timeInfo: null == d ? void 0 : d.toJSON(),
            },
            g = { apiKey: i, customParameters: o, signal: r },
            b = await (0, f.gp)(m, g),
            [v, w] = await Promise.all([(0, f.G4)(b, g), (0, f.j)(b, g)]);
          if (
            !this._conformsToType(
              v,
              'http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson',
            )
          )
            throw new c.Z(
              'ogc-feature-layer:no-geojson-support',
              'Server does not support geojson',
            );
          const C = w.collections.find((e) => e.id === n);
          if (!C)
            throw new c.Z(
              'ogc-feature-layer:collection-not-found',
              'Server does not contain the named collection',
            );
          const S = this._conformsToType(
              v,
              'http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30',
            )
              ? await (0, f.eS)(b, g)
              : null,
            F = await (0, f.w9)(C, h, g),
            _ = this._getCapabilities(F.hasZ, S),
            x = this._getExtent(C),
            T = this._getStorageSpatialReference(C).toJSON(),
            I = this._getSupportedSpatialReferences(C, w),
            j = new RegExp(`^${f.Lu}`, 'i'),
            R = {};
          for (const e of I) {
            const t = (0, f.d)(e);
            (0, y.pC)(t) && (R[t] || (R[t] = e.replace(j, '')));
          }
          (F.extent = x),
            (this.featureDefinition = {
              capabilities: _,
              collection: C,
              layerDefinition: F,
              queryParameters: {},
              spatialReference: T,
              supportedCrs: R,
            });
        }
      };
      (0, i._)([(0, a.Cb)()], g.prototype, 'featureDefinition', void 0),
        (0, i._)(
          [(0, a.Cb)({ constructOnly: !0 })],
          g.prototype,
          'layer',
          void 0,
        ),
        (0, i._)([(0, a.Cb)()], g.prototype, 'type', void 0),
        (g = (0, i._)(
          [(0, l.j)('esri.layers.graphics.sources.OGCFeatureSource')],
          g,
        ));
      const b = g;
      var v = r(54295),
        w = r(71612),
        C = r(17017),
        S = r(69637),
        F = r(38009),
        _ = r(68825),
        x = r(16859),
        T = r(34760),
        I = r(72965),
        j = r(28294),
        R = r(21506),
        P = r(55785),
        O = r(16451),
        E = r(1231),
        D = r(53518),
        Z = r(35671),
        k = r(2319),
        N = r(30707),
        V = r(57444),
        G = r(32163),
        q = r(6570);
      const M = (0, D.v)();
      let L = class extends (0, v.V)(
        (0, C.N)(
          (0, S.b)(
            (0, w.h)(
              (0, _.c)(
                (0, j.n)((0, I.M)((0, F.q)((0, x.I)((0, T.Q)((0, s.R)(p.Z)))))),
              ),
            ),
          ),
        ),
      ) {
        constructor(e) {
          super(e),
            (this.collectionId = null),
            (this.copyright = null),
            (this.definitionExpression = null),
            (this.description = null),
            (this.displayField = null),
            (this.elevationInfo = null),
            (this.featureReduction = null),
            (this.fields = null),
            (this.fieldsIndex = null),
            (this.fullExtent = null),
            (this.geometryType = null),
            (this.hasZ = void 0),
            (this.labelingInfo = null),
            (this.labelsVisible = !0),
            (this.legendEnabled = !0),
            (this.objectIdField = null),
            (this.operationalLayerType = 'OGCFeatureLayer'),
            (this.popupEnabled = !0),
            (this.popupTemplate = null),
            (this.screenSizePerspectiveEnabled = !0),
            (this.source = new b({ layer: this })),
            (this.spatialReference = null),
            (this.title = null),
            (this.type = 'ogc-feature'),
            (this.typeIdField = null),
            (this.types = null),
            (this.url = null);
        }
        destroy() {
          var e;
          null == (e = this.source) || e.destroy();
        }
        load(e) {
          return (
            this.addResolvingPromise(
              this.loadFromPortal(
                { supportedTypes: ['OGCFeatureServer'] },
                e,
              ).then(() => this._fetchService(e)),
            ),
            this.when()
          );
        }
        get defaultPopupTemplate() {
          return this.createPopupTemplate();
        }
        get isTable() {
          return this.loaded && null == this.geometryType;
        }
        set renderer(e) {
          (0, Z.YN)(e, this.fieldsIndex), this._set('renderer', e);
        }
        on(e, t) {
          return super.on(e, t);
        }
        createPopupTemplate(e) {
          return (0, G.eZ)(this, e);
        }
        createQuery() {
          return new V.Z();
        }
        getField(e) {
          return this.fieldsIndex.get(e);
        }
        getFieldDomain(e, t) {
          var r;
          let i,
            n = !1;
          const o =
              null == t || null == (r = t.feature) ? void 0 : r.attributes,
            s = this.typeIdField && (null == o ? void 0 : o[this.typeIdField]);
          return (
            null != s &&
              this.types &&
              (n = this.types.some((t) => {
                var r, n;
                return (
                  t.id == s &&
                  ((i = null == (r = t.domains) ? void 0 : r[e]),
                  'inherited' === (null == (n = i) ? void 0 : n.type) &&
                    (i = this._getLayerDomain(e)),
                  !0)
                );
              })),
            n || i || (i = this._getLayerDomain(e)),
            i
          );
        }
        queryFeatures(e, t) {
          return this.load()
            .then(() =>
              this.source.queryFeatures(V.Z.from(e) || this.createQuery(), t),
            )
            .then((e) => {
              var t;
              return (
                null == e ||
                  null == (t = e.features) ||
                  t.forEach((e) => {
                    e.layer = e.sourceLayer = this;
                  }),
                e
              );
            });
        }
        serviceSupportsSpatialReference(e) {
          var t, r;
          return (
            null !=
              (t =
                null == (r = this.source)
                  ? void 0
                  : r.serviceSupportsSpatialReference(e)) && t
          );
        }
        async _fetchService(e) {
          await this.source.load(e),
            this.read(this.source.featureDefinition, { origin: 'service' }),
            (0, Z.YN)(this.renderer, this.fieldsIndex),
            (0, Z.UF)(this.timeInfo, this.fieldsIndex);
        }
        _getLayerDomain(e) {
          if (!this.fields) return null;
          for (const t of this.fields)
            if (t.name === e && t.domain) return t.domain;
          return null;
        }
      };
      (0, i._)(
        [
          (0, a.Cb)({
            readOnly: !0,
            json: { origins: { service: { read: !0 } } },
          }),
        ],
        L.prototype,
        'capabilities',
        void 0,
      ),
        (0, i._)(
          [(0, a.Cb)({ type: String, json: { write: !0 } })],
          L.prototype,
          'collectionId',
          void 0,
        ),
        (0, i._)(
          [(0, a.Cb)({ type: String })],
          L.prototype,
          'copyright',
          void 0,
        ),
        (0, i._)(
          [(0, a.Cb)({ readOnly: !0 })],
          L.prototype,
          'defaultPopupTemplate',
          null,
        ),
        (0, i._)(
          [(0, a.Cb)({ type: String })],
          L.prototype,
          'definitionExpression',
          void 0,
        ),
        (0, i._)(
          [
            (0, a.Cb)({
              readOnly: !0,
              type: String,
              json: {
                origins: { service: { name: 'collection.description' } },
              },
            }),
          ],
          L.prototype,
          'description',
          void 0,
        ),
        (0, i._)(
          [(0, a.Cb)({ type: String })],
          L.prototype,
          'displayField',
          void 0,
        ),
        (0, i._)([(0, a.Cb)(R.PV)], L.prototype, 'elevationInfo', void 0),
        (0, i._)([(0, a.Cb)(P.d)], L.prototype, 'featureReduction', void 0),
        (0, i._)(
          [
            (0, a.Cb)({
              type: [E.Z],
              json: {
                origins: { service: { name: 'layerDefinition.fields' } },
              },
            }),
          ],
          L.prototype,
          'fields',
          void 0,
        ),
        (0, i._)(
          [(0, a.Cb)(M.fieldsIndex)],
          L.prototype,
          'fieldsIndex',
          void 0,
        ),
        (0, i._)(
          [
            (0, a.Cb)({
              readOnly: !0,
              type: q.Z,
              json: {
                origins: { service: { name: 'layerDefinition.extent' } },
              },
            }),
          ],
          L.prototype,
          'fullExtent',
          void 0,
        ),
        (0, i._)(
          [
            (0, a.Cb)({
              type: u.Mk.apiValues,
              json: {
                origins: {
                  service: {
                    name: 'layerDefinition.geometryType',
                    read: { reader: u.Mk.read },
                  },
                },
              },
            }),
          ],
          L.prototype,
          'geometryType',
          void 0,
        ),
        (0, i._)(
          [
            (0, a.Cb)({
              type: Boolean,
              json: { origins: { service: { name: 'layerDefinition.hasZ' } } },
            }),
          ],
          L.prototype,
          'hasZ',
          void 0,
        ),
        (0, i._)(
          [(0, a.Cb)({ type: Boolean, readOnly: !0 })],
          L.prototype,
          'isTable',
          null,
        ),
        (0, i._)(
          [
            (0, a.Cb)({
              type: [k.Z],
              json: {
                origins: {
                  'web-document': {
                    name: 'layerDefinition.drawingInfo.labelingInfo',
                    read: { reader: N.r },
                    write: !0,
                  },
                },
              },
            }),
          ],
          L.prototype,
          'labelingInfo',
          void 0,
        ),
        (0, i._)([(0, a.Cb)(R.iR)], L.prototype, 'labelsVisible', void 0),
        (0, i._)([(0, a.Cb)(R.rn)], L.prototype, 'legendEnabled', void 0),
        (0, i._)(
          [
            (0, a.Cb)({
              type: String,
              json: {
                origins: { service: { name: 'layerDefinition.objectIdField' } },
              },
            }),
          ],
          L.prototype,
          'objectIdField',
          void 0,
        ),
        (0, i._)(
          [(0, a.Cb)({ type: ['OGCFeatureLayer'] })],
          L.prototype,
          'operationalLayerType',
          void 0,
        ),
        (0, i._)([(0, a.Cb)(R.C_)], L.prototype, 'popupEnabled', void 0),
        (0, i._)(
          [(0, a.Cb)({ type: n.Z, json: { name: 'popupInfo', write: !0 } })],
          L.prototype,
          'popupTemplate',
          void 0,
        ),
        (0, i._)(
          [
            (0, a.Cb)({
              types: o.A,
              json: {
                origins: {
                  service: {
                    name: 'layerDefinition.drawingInfo.renderer',
                    write: !1,
                  },
                  'web-scene': {
                    types: o.o,
                    name: 'layerDefinition.drawingInfo.renderer',
                    write: !0,
                  },
                },
                name: 'layerDefinition.drawingInfo.renderer',
                write: !0,
              },
            }),
          ],
          L.prototype,
          'renderer',
          null,
        ),
        (0, i._)(
          [(0, a.Cb)(R.YI)],
          L.prototype,
          'screenSizePerspectiveEnabled',
          void 0,
        ),
        (0, i._)([(0, a.Cb)({ readOnly: !0 })], L.prototype, 'source', void 0),
        (0, i._)(
          [
            (0, a.Cb)({
              readOnly: !0,
              type: h.Z,
              json: { origins: { service: { read: !0 } } },
            }),
          ],
          L.prototype,
          'spatialReference',
          void 0,
        ),
        (0, i._)(
          [
            (0, a.Cb)({
              type: String,
              json: {
                write: { enabled: !0, ignoreOrigin: !0, isRequired: !0 },
                origins: { service: { name: 'collection.title' } },
              },
            }),
          ],
          L.prototype,
          'title',
          void 0,
        ),
        (0, i._)(
          [(0, a.Cb)({ readOnly: !0, json: { read: !1 } })],
          L.prototype,
          'type',
          void 0,
        ),
        (0, i._)(
          [(0, a.Cb)({ type: String, readOnly: !0 })],
          L.prototype,
          'typeIdField',
          void 0,
        ),
        (0, i._)([(0, a.Cb)({ type: [O.Z] })], L.prototype, 'types', void 0),
        (0, i._)([(0, a.Cb)(R.HQ)], L.prototype, 'url', void 0),
        (L = (0, i._)([(0, l.j)('esri.layers.OGCFeatureLayer')], L));
      const z = L;
    },
    61159: (e, t, r) => {
      r.d(t, { g: () => i });
      const i = {
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
    92722: (e, t, r) => {
      r.d(t, { lG: () => F, q9: () => l, my: () => S, O3: () => C });
      var i = r(20102),
        n = r(70272),
        o = r(5428),
        s = r(35671);
      const a = {
        LineString: 'esriGeometryPolyline',
        MultiLineString: 'esriGeometryPolyline',
        MultiPoint: 'esriGeometryMultipoint',
        Point: 'esriGeometryPoint',
        Polygon: 'esriGeometryPolygon',
        MultiPolygon: 'esriGeometryPolygon',
      };
      function l(e) {
        return a[e];
      }
      function* u(e) {
        switch (e.type) {
          case 'Feature':
            yield e;
            break;
          case 'FeatureCollection':
            for (const t of e.features) t && (yield t);
        }
      }
      function* p(e) {
        if (!e) return null;
        switch (e.type) {
          case 'Point':
            yield e.coordinates;
            break;
          case 'LineString':
          case 'MultiPoint':
            yield* e.coordinates;
            break;
          case 'MultiLineString':
          case 'Polygon':
            for (const t of e.coordinates) yield* t;
            break;
          case 'MultiPolygon':
            for (const t of e.coordinates) for (const e of t) yield* e;
        }
      }
      function c(e) {
        for (const t of e) if (t.length > 2) return !0;
        return !1;
      }
      function d(e) {
        let t = 0;
        for (let r = 0; r < e.length; r++) {
          const i = e[r],
            n = e[(r + 1) % e.length];
          t += i[0] * n[1] - n[0] * i[1];
        }
        return t <= 0;
      }
      function y(e) {
        const t = e[0],
          r = e[e.length - 1];
        return (
          (t[0] === r[0] && t[1] === r[1] && t[2] === r[2]) || e.push(t), e
        );
      }
      function f(e, t, r) {
        switch (t.type) {
          case 'LineString':
          case 'MultiPoint':
            return (function (e, t, r) {
              return g(e, t.coordinates, r), e;
            })(e, t, r);
          case 'MultiLineString':
            return (function (e, t, r) {
              for (const i of t.coordinates) g(e, i, r);
              return e;
            })(e, t, r);
          case 'MultiPolygon':
            return (function (e, t, r) {
              for (const i of t.coordinates) {
                m(e, i[0], r);
                for (let t = 1; t < i.length; t++) h(e, i[t], r);
              }
              return e;
            })(e, t, r);
          case 'Point':
            return (function (e, t, r) {
              return v(e, t.coordinates, r), e;
            })(e, t, r);
          case 'Polygon':
            return (function (e, t, r) {
              const i = t.coordinates;
              m(e, i[0], r);
              for (let t = 1; t < i.length; t++) h(e, i[t], r);
              return e;
            })(e, t, r);
        }
      }
      function m(e, t, r) {
        const i = y(t);
        !(function (e) {
          return !d(e);
        })(i)
          ? g(e, i, r)
          : b(e, i, r);
      }
      function h(e, t, r) {
        const i = y(t);
        !(function (e) {
          return d(e);
        })(i)
          ? g(e, i, r)
          : b(e, i, r);
      }
      function g(e, t, r) {
        for (const i of t) v(e, i, r);
        e.lengths.push(t.length);
      }
      function b(e, t, r) {
        for (let i = t.length - 1; i >= 0; i--) v(e, t[i], r);
        e.lengths.push(t.length);
      }
      function v(e, t, r) {
        const [i, n, o] = t;
        e.coords.push(i, n), r.hasZ && e.coords.push(o || 0);
      }
      function w(e) {
        switch (typeof e) {
          case 'string':
            return 'esriFieldTypeString';
          case 'number':
            return 'esriFieldTypeDouble';
          default:
            return 'unknown';
        }
      }
      function C(e) {
        if (!e) throw new i.Z('geojson-layer:empty', 'GeoJSON data is empty');
        if ('Feature' !== e.type && 'FeatureCollection' !== e.type)
          throw new i.Z(
            'geojson-layer:unsupported-geojson-object',
            'missing or not supported GeoJSON object type',
            { data: e },
          );
        const { crs: t } = e;
        if (!t) return;
        const r =
            'string' == typeof t
              ? t
              : 'name' === t.type
              ? t.properties.name
              : 'EPSG' === t.type
              ? t.properties.code
              : null,
          n = new RegExp('.*(CRS84H?|4326)$', 'i');
        if (!r || !n.test(r))
          throw new i.Z(
            'geojson-layer:unsupported-crs',
            "unsupported GeoJSON 'crs' member",
            { crs: t },
          );
      }
      function S(e, t = {}) {
        const r = [],
          i = new Set(),
          n = new Set();
        let o,
          a = !1,
          d = null,
          y = !1,
          { geometryType: f = null } = t,
          m = !1;
        for (const t of u(e)) {
          const { geometry: e, properties: s, id: u } = t;
          if (
            (!e || (f || (f = l(e.type)), l(e.type) === f)) &&
            (a || (a = c(p(e))),
            y ||
              ((y = null != u),
              y &&
                ((o = typeof u),
                (d = Object.keys(s).filter((e) => s[e] === u)))),
            y &&
              null != u &&
              (d.length > 1
                ? (d = d.filter((e) => s[e] === u))
                : 1 === d.length && (d = s[d[0]] === u ? d : [])),
            !m && s)
          ) {
            let e = !0;
            for (const t in s) {
              if (i.has(t)) continue;
              const o = s[t];
              if (null == o) {
                (e = !1), n.add(t);
                continue;
              }
              const a = w(o);
              'unknown' !== a
                ? (n.delete(t),
                  i.add(t),
                  r.push({ name: t, alias: t, type: a }))
                : n.add(t);
            }
            m = e;
          }
        }
        const h = (d && 1 === d.length && d[0]) || null;
        if (h)
          for (const e of r)
            if (e.name === h && (0, s.H7)(e)) {
              e.type = 'esriFieldTypeOID';
              break;
            }
        return {
          fields: r,
          geometryType: f,
          hasZ: a,
          objectIdFieldName: h,
          objectIdFieldType: o,
          unknownFields: Array.from(n),
        };
      }
      function F(e, t) {
        return Array.from(
          (function* (e, t = {}) {
            const { geometryType: r, objectIdField: i } = t;
            for (const a of e) {
              var s;
              const { geometry: e, properties: u, id: p } = a;
              if (e && l(e.type) !== r) continue;
              const c = u || {};
              let d = null != (s = c[i]) ? s : null;
              i && null != p && !c[i] && (c[i] = d = p);
              const y = new n.u_(e ? f(new o.Z(), e, t) : null, c, null, d);
              yield y;
            }
          })(u(e), t),
        );
      }
    },
    25278: (e, t, r) => {
      r.d(t, { MS: () => d, Dm: () => p, Hq: () => c, bU: () => a });
      var i = r(80442),
        n = r(22974),
        o = r(61159),
        s = r(58333);
      function a(e) {
        return {
          renderer: {
            type: 'simple',
            symbol:
              'esriGeometryPoint' === e || 'esriGeometryMultipoint' === e
                ? s.I4
                : 'esriGeometryPolyline' === e
                ? s.ET
                : s.lF,
          },
        };
      }
      const l = /^[_$a-zA-Z][_$a-zA-Z0-9]*$/;
      let u = 1;
      function p(e, t) {
        if ((0, i.Z)('esri-csp-restrictions'))
          return () => ({ [t]: null, ...e });
        try {
          let r = `this.${t} = null;`;
          for (const t in e)
            r += `this${l.test(t) ? `.${t}` : `["${t}"]`} = ${JSON.stringify(
              e[t],
            )};`;
          const i = new Function(
            `\n      return class AttributesClass$${u++} {\n        constructor() {\n          ${r};\n        }\n      }\n    `,
          )();
          return () => new i();
        } catch (r) {
          return () => ({ [t]: null, ...e });
        }
      }
      function c(e = {}) {
        return [
          {
            name: 'New Feature',
            description: '',
            prototype: { attributes: (0, n.d9)(e) },
          },
        ];
      }
      function d(e, t) {
        return {
          attachment: null,
          data: {
            isVersioned: !1,
            supportsAttachment: !1,
            supportsM: !1,
            supportsZ: e,
          },
          metadata: { supportsAdvancedFieldProperties: !1 },
          operations: {
            supportsCalculate: !1,
            supportsTruncate: !1,
            supportsValidateSql: !1,
            supportsAdd: t,
            supportsDelete: t,
            supportsEditing: t,
            supportsChangeTracking: !1,
            supportsQuery: !0,
            supportsQueryAttachments: !1,
            supportsResizeAttachments: !1,
            supportsSync: !1,
            supportsUpdate: t,
            supportsExceedsLimitStatistics: !0,
          },
          query: o.g,
          queryRelated: {
            supportsCount: !0,
            supportsOrderBy: !0,
            supportsPagination: !0,
          },
          editing: {
            supportsGeometryUpdate: t,
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
    54295: (e, t, r) => {
      r.d(t, { V: () => s });
      var i = r(43697),
        n = r(5600),
        o = (r(67676), r(80442), r(75215), r(52011));
      const s = (e) => {
        let t = class extends e {
          get apiKey() {
            var e;
            return this._isOverridden('apiKey')
              ? this._get('apiKey')
              : (function (e) {
                  return 'portalItem' in e;
                })(this)
              ? null == (e = this.portalItem)
                ? void 0
                : e.apiKey
              : null;
          }
          set apiKey(e) {
            null != e
              ? this._override('apiKey', e)
              : (this._clearOverride('apiKey'), this.clear('apiKey', 'user'));
          }
        };
        return (
          (0, i._)([(0, n.Cb)({ type: String })], t.prototype, 'apiKey', null),
          (t = (0, i._)([(0, o.j)('esri.layers.mixins.APIKeyMixin')], t)),
          t
        );
      };
    },
    68825: (e, t, r) => {
      r.d(t, { c: () => m });
      var i,
        n = r(43697),
        o = r(78286),
        s = r(5600),
        a = (r(67676), r(80442), r(75215), r(52011)),
        l = r(35454),
        u = r(96674);
      const p = new l.X({ asc: 'ascending', desc: 'descending' });
      let c = (i = class extends u.wq {
        constructor(e) {
          super(e),
            (this.field = null),
            (this.valueExpression = null),
            (this.order = 'ascending');
        }
        clone() {
          return new i({
            field: this.field,
            valueExpression: this.valueExpression,
            order: this.order,
          });
        }
      });
      (0, n._)(
        [(0, s.Cb)({ type: String, json: { write: !0 } })],
        c.prototype,
        'field',
        void 0,
      ),
        (0, n._)(
          [(0, s.Cb)({ type: String, json: { write: !0 } })],
          c.prototype,
          'valueExpression',
          void 0,
        ),
        (0, n._)(
          [
            (0, s.Cb)({
              type: p.apiValues,
              json: { read: p.read, write: p.write },
            }),
          ],
          c.prototype,
          'order',
          void 0,
        ),
        (c = i = (0, n._)([(0, a.j)('esri.layers.support.OrderByInfo')], c));
      const d = c;
      function y(e, t, r) {
        if (!e) return null;
        const i = e.find((e) => !!e.field);
        if (!i) return null;
        const n = new d();
        return n.read(i, r), [n];
      }
      function f(e, t, r, i) {
        const n = e.find((e) => !!e.field);
        n && (0, o.RB)(r, [n.toJSON()], t);
      }
      const m = (e) => {
        let t = class extends e {
          constructor() {
            super(...arguments), (this.orderBy = null);
          }
        };
        return (
          (0, n._)(
            [
              (0, s.Cb)({
                type: [d],
                json: {
                  origins: { 'web-scene': { write: !1, read: !1 } },
                  read: { source: 'layerDefinition.orderBy', reader: y },
                  write: { target: 'layerDefinition.orderBy', writer: f },
                },
              }),
            ],
            t.prototype,
            'orderBy',
            void 0,
          ),
          (t = (0, n._)([(0, a.j)('esri.layers.mixins.OrderedLayer')], t)),
          t
        );
      };
    },
    16859: (e, t, r) => {
      r.d(t, { I: () => w });
      var i = r(43697),
        n = r(40330),
        o = r(3172),
        s = r(66643),
        a = r(20102),
        l = r(92604),
        u = r(70586),
        p = r(95330),
        c = r(17452),
        d = r(5600),
        y = (r(67676), r(80442), r(75215), r(71715)),
        f = r(52011),
        m = r(30556),
        h = r(65587),
        g = r(15235),
        b = r(86082);
      const v = l.Z.getLogger('esri.layers.mixins.PortalLayer'),
        w = (e) => {
          let t = class extends e {
            constructor() {
              super(...arguments),
                (this.resourceReferences = { portalItem: null, paths: [] }),
                (this.userHasEditingPrivileges = !0);
            }
            destroy() {
              var e;
              null == (e = this.portalItem) || e.destroy(),
                (this.portalItem = null);
            }
            set portalItem(e) {
              e !== this._get('portalItem') &&
                (this.removeOrigin('portal-item'), this._set('portalItem', e));
            }
            readPortalItem(e, t, r) {
              if (t.itemId)
                return new g.default({ id: t.itemId, portal: r && r.portal });
            }
            writePortalItem(e, t) {
              e && e.id && (t.itemId = e.id);
            }
            async loadFromPortal(e, t) {
              if (this.portalItem && this.portalItem.id)
                try {
                  const i = await r.e(8062).then(r.bind(r, 18062));
                  return (
                    (0, p.k_)(t),
                    await i.load(
                      {
                        instance: this,
                        supportedTypes: e.supportedTypes,
                        validateItem: e.validateItem,
                        supportsData: e.supportsData,
                      },
                      t,
                    )
                  );
                } catch (e) {
                  throw (
                    ((0, p.D_)(e) ||
                      v.warn(
                        `Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${e}`,
                      ),
                    e)
                  );
                }
            }
            async finishLoadEditablePortalLayer(e) {
              this._set(
                'userHasEditingPrivileges',
                await this._fetchUserHasEditingPrivileges(e).catch(
                  (e) => ((0, p.r9)(e), !0),
                ),
              );
            }
            async _fetchUserHasEditingPrivileges(e) {
              const t = this.url
                ? null == n.id
                  ? void 0
                  : n.id.findCredential(this.url)
                : null;
              if (!t) return !0;
              const r =
                C.credential === t ? C.user : await this._fetchEditingUser(e);
              return (
                (C.credential = t),
                (C.user = r),
                (0, u.Wi)(r) ||
                  null == r.privileges ||
                  r.privileges.includes('features:user:edit')
              );
            }
            async _fetchEditingUser(e) {
              var t, r;
              const i =
                null == (t = this.portalItem) || null == (r = t.portal)
                  ? void 0
                  : r.user;
              if (i) return i;
              const a = n.id.findServerInfo(this.url);
              if (null == a || !a.owningSystemUrl) return null;
              const l = `${a.owningSystemUrl}/sharing/rest`,
                p = h.Z.getDefault();
              if (p && p.loaded && (0, c.Fv)(p.restUrl) === (0, c.Fv)(l))
                return p.user;
              const d = `${l}/community/self`,
                y = (0, u.pC)(e) ? e.signal : null,
                f = await (0, s.q6)(
                  (0, o.default)(d, {
                    authMode: 'no-prompt',
                    query: { f: 'json' },
                    signal: y,
                  }),
                );
              return f.ok ? b.default.fromJSON(f.value.data) : null;
            }
            read(e, t) {
              t && (t.layer = this), super.read(e, t);
            }
            write(e, t) {
              const r = t && t.portal,
                i =
                  this.portalItem &&
                  this.portalItem.id &&
                  (this.portalItem.portal || h.Z.getDefault());
              return r && i && !(0, c.tm)(i.restUrl, r.restUrl)
                ? (t.messages &&
                    t.messages.push(
                      new a.Z(
                        'layer:cross-portal',
                        `The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save the scene, set the layer.portalItem to null or save the scene to the same portal as the item associated with the layer`,
                        { layer: this },
                      ),
                    ),
                  null)
                : super.write(e, { ...t, layer: this });
            }
          };
          return (
            (0, i._)(
              [(0, d.Cb)({ type: g.default })],
              t.prototype,
              'portalItem',
              null,
            ),
            (0, i._)(
              [(0, y.r)('web-document', 'portalItem', ['itemId'])],
              t.prototype,
              'readPortalItem',
              null,
            ),
            (0, i._)(
              [
                (0, m.c)('web-document', 'portalItem', {
                  itemId: { type: String },
                }),
              ],
              t.prototype,
              'writePortalItem',
              null,
            ),
            (0, i._)(
              [(0, d.Cb)({ clonable: !1 })],
              t.prototype,
              'resourceReferences',
              void 0,
            ),
            (0, i._)(
              [(0, d.Cb)({ readOnly: !0 })],
              t.prototype,
              'userHasEditingPrivileges',
              void 0,
            ),
            (t = (0, i._)([(0, f.j)('esri.layers.mixins.PortalLayer')], t)),
            t
          );
        },
        C = { credential: null, user: null };
    },
    16467: (e, t, r) => {
      r.d(t, {
        $9: () => b,
        Lu: () => g,
        w9: () => v,
        j: () => w,
        G4: () => C,
        gp: () => S,
        eS: () => F,
        d: () => _,
        yN: () => x,
        WW: () => T,
      }),
        r(66577);
      var i = r(3172),
        n = r(20102),
        o = r(92604),
        s = r(70586),
        a = r(8744),
        l = r(40488),
        u = r(98732),
        p = r(44876),
        c = r(92722),
        d = r(25278),
        y = r(99514),
        f = r(86719),
        m = r(82971);
      const h = o.Z.getLogger('esri.layers.graphics.sources.ogcfeature'),
        g = 'http://www.opengis.net/def/crs/',
        b = `${g}OGC/1.3/CRS84`;
      async function v(e, t, r = {}, o = 5) {
        const { links: a } = e,
          l =
            P(a, 'items', 'application/geo+json') ||
            P(
              a,
              'http://www.opengis.net/def/rel/ogc/1.0/items',
              'application/geo+json',
            );
        if ((0, s.Wi)(l))
          throw new n.Z(
            'ogc-feature-layer:missing-items-page',
            'Missing items url',
          );
        const { data: u } = await (0, i.default)(l.href, {
          signal: r.signal,
          query: { limit: o, ...r.customParameters, token: r.apiKey },
          headers: { accept: 'application/geo+json' },
        });
        await (0, c.O3)(u);
        const p = (0, c.my)(u, { geometryType: t.geometryType }),
          m = t.fields || p.fields || [],
          g = null != t.hasZ ? t.hasZ : p.hasZ,
          b = p.geometryType,
          v = t.objectIdField || p.objectIdFieldName || 'OBJECTID';
        let w = t.timeInfo;
        const C = m.find((e) => e.name === v);
        if (C)
          (C.type = 'esriFieldTypeOID'), (C.editable = !1), (C.nullable = !1);
        else {
          if (!p.objectIdFieldType)
            throw new n.Z(
              'ogc-feature-layer:missing-feature-id',
              'Collection geojson require a feature id as a unique identifier',
            );
          m.unshift({
            name: v,
            alias: v,
            type: 'esriFieldTypeOID',
            editable: !1,
            nullable: !1,
          });
        }
        if (v !== p.objectIdFieldName) {
          const e = m.find((e) => e.name === p.objectIdFieldName);
          e && (e.type = 'esriFieldTypeInteger');
        }
        m === p.fields &&
          p.unknownFields.length > 0 &&
          h.warn({
            name: 'ogc-feature-layer:unknown-field-types',
            message:
              "Some fields types couldn't be inferred from the features and were dropped",
            details: { unknownFields: p.unknownFields },
          });
        for (const e of m) {
          if (
            (null == e.name && (e.name = e.alias),
            null == e.alias && (e.alias = e.name),
            'esriFieldTypeOID' !== e.type &&
              'esriFieldTypeGlobalID' !== e.type &&
              ((e.editable = null == e.editable || !!e.editable),
              (e.nullable = null == e.nullable || !!e.nullable)),
            !e.name)
          )
            throw new n.Z(
              'ogc-feature-layer:invalid-field-name',
              'field name is missing',
              { field: e },
            );
          if (-1 === f.v.jsonValues.indexOf(e.type))
            throw new n.Z(
              'ogc-feature-layer:invalid-field-type',
              `invalid type for field "${e.name}"`,
              { field: e },
            );
        }
        if (w) {
          const e = new y.Z(m);
          if (w.startTimeField) {
            const t = e.get(w.startTimeField);
            t
              ? ((w.startTimeField = t.name), (t.type = 'esriFieldTypeDate'))
              : (w.startTimeField = null);
          }
          if (w.endTimeField) {
            const t = e.get(w.endTimeField);
            t
              ? ((w.endTimeField = t.name), (t.type = 'esriFieldTypeDate'))
              : (w.endTimeField = null);
          }
          if (w.trackIdField) {
            const t = e.get(w.trackIdField);
            t
              ? (w.trackIdField = t.name)
              : ((w.trackIdField = null),
                h.warn({
                  name: 'ogc-feature-layer:invalid-timeInfo-trackIdField',
                  message: 'trackIdField is missing',
                  details: { timeInfo: w },
                }));
          }
          w.startTimeField ||
            w.endTimeField ||
            (h.warn({
              name: 'ogc-feature-layer:invalid-timeInfo',
              message: 'startTimeField and endTimeField are missing',
              details: { timeInfo: w },
            }),
            (w = null));
        }
        return {
          drawingInfo: b ? (0, d.bU)(b) : null,
          geometryType: b,
          fields: m,
          hasZ: !!g,
          objectIdField: v,
          timeInfo: w,
        };
      }
      async function w(e, t = {}) {
        const { links: r } = e,
          o =
            P(r, 'data', 'application/json') ||
            P(
              r,
              'http://www.opengis.net/def/rel/ogc/1.0/data',
              'application/json',
            );
        if ((0, s.Wi)(o))
          throw new n.Z(
            'ogc-feature-layer:missing-collections-page',
            'Missing collections url',
          );
        const { apiKey: a, customParameters: l, signal: u } = t,
          { data: p } = await (0, i.default)(o.href, {
            signal: u,
            headers: { accept: 'application/json' },
            query: { ...l, token: a },
          });
        return p;
      }
      async function C(e, t = {}) {
        const { links: r } = e,
          o =
            P(r, 'conformance', 'application/json') ||
            P(
              r,
              'http://www.opengis.net/def/rel/ogc/1.0/conformance',
              'application/json',
            );
        if ((0, s.Wi)(o))
          throw new n.Z(
            'ogc-feature-layer:missing-conformance-page',
            'Missing conformance url',
          );
        const { apiKey: a, customParameters: l, signal: u } = t,
          { data: p } = await (0, i.default)(o.href, {
            signal: u,
            headers: { accept: 'application/json' },
            query: { ...l, token: a },
          });
        return p;
      }
      async function S(e, t = {}) {
        const { apiKey: r, customParameters: n, signal: o } = t,
          { data: s } = await (0, i.default)(e, {
            signal: o,
            headers: { accept: 'application/json' },
            query: { ...n, token: r },
          });
        return s;
      }
      async function F(e, t = {}) {
        const r = 'application/vnd.oai.openapi+json;version=3.0',
          n = P(e.links, 'service-desc', r);
        if ((0, s.Wi)(n))
          return (
            h.warn(
              'ogc-feature-layer:missing-openapi-page',
              'The OGC API-Features server does not have an OpenAPI page.',
            ),
            null
          );
        const { apiKey: o, customParameters: a, signal: l } = t,
          { data: u } = await (0, i.default)(n.href, {
            signal: l,
            headers: { accept: r },
            query: { ...a, token: o },
          });
        return u;
      }
      function _(e) {
        const t =
            /^http:\/\/www\.opengis.net\/def\/crs\/(?<authority>.*)\/(?<version>.*)\/(?<code>.*)$/i.exec(
              e,
            ),
          r = null == t ? void 0 : t.groups;
        if (!r) return null;
        const { authority: i, code: n } = r;
        switch (i.toLowerCase()) {
          case 'ogc':
            switch (n.toLowerCase()) {
              case 'crs27':
                return m.Z.GCS_NAD_1927.wkid;
              case 'crs83':
                return 4269;
              case 'crs84':
              case 'crs84h':
                return m.Z.WGS84.wkid;
              default:
                return null;
            }
          case 'esri':
          case 'epsg': {
            const e = Number.parseInt(n, 10);
            return Number.isNaN(e) ? null : e;
          }
          default:
            return null;
        }
      }
      async function x(e, t, r) {
        const i = await T(e, t, r);
        return (0, u.cn)(i);
      }
      async function T(e, t, r) {
        const {
            capabilities: {
              query: { maxRecordCount: o },
            },
            collection: d,
            layerDefinition: y,
            queryParameters: { apiKey: f, customParameters: h },
            spatialReference: g,
            supportedCrs: b,
          } = e,
          { links: v } = d,
          w =
            P(v, 'items', 'application/geo+json') ||
            P(
              v,
              'http://www.opengis.net/def/rel/ogc/1.0/items',
              'application/geo+json',
            );
        if ((0, s.Wi)(w))
          throw new n.Z(
            'ogc-feature-layer:missing-items-page',
            'Missing items url',
          );
        const { geometry: C, num: S, start: F, timeExtent: _, where: x } = t;
        if (t.objectIds)
          throw new n.Z(
            'ogc-feature-layer:query-by-objectids-not-supported',
            'Queries with objectids are not supported',
          );
        const T = m.Z.fromJSON(g),
          j = (0, s.Pt)(t.outSpatialReference, T),
          O = j.isWGS84 ? null : I(j, b),
          E = R(C, b),
          D = (function (e) {
            if ((0, s.Wi)(e)) return null;
            const { start: t, end: r } = e;
            return `${(0, s.pC)(t) ? t.toISOString() : '..'}/${
              (0, s.pC)(r) ? r.toISOString() : '..'
            }`;
          })(_),
          Z = ((V = x), (0, s.Wi)(V) || !V || '1=1' === V ? null : V),
          k = null != S ? S : null != F && void 0 !== F ? 10 : o,
          { data: N } = await (0, i.default)(w.href, {
            ...r,
            query: {
              ...h,
              ...E,
              crs: O,
              datetime: D,
              query: Z,
              limit: k,
              startindex: F,
              token: f,
            },
            headers: { accept: 'application/geo+json' },
          });
        var V;
        let G = !1;
        N.links && (G = !!N.links.find((e) => 'next' === e.rel)),
          !G &&
            Number.isInteger(N.numberMatched) &&
            Number.isInteger(N.numberReturned) &&
            (G = N.numberReturned < N.numberMatched);
        const {
            fields: q,
            globalIdField: M,
            hasM: L,
            hasZ: z,
            objectIdField: A,
          } = y,
          U = y.geometryType,
          $ = (0, c.lG)(N, { geometryType: U, hasZ: z, objectIdField: A });
        if (!O && j.isWebMercator)
          for (const e of $)
            if ((0, s.pC)(e.geometry)) {
              const t = (0, u.di)(e.geometry, U, z, !1);
              (t.spatialReference = m.Z.WGS84),
                (e.geometry = (0, u.GH)((0, l.iV)(t, j)));
            }
        for (const e of $) e.objectId = e.attributes[A];
        const W = O || (!O && j.isWebMercator) ? j.toJSON() : a.Zn,
          J = new p.Z();
        return (
          (J.exceededTransferLimit = G),
          (J.features = $),
          (J.fields = q),
          (J.geometryType = U),
          (J.globalIdFieldName = M),
          (J.hasM = L),
          (J.hasZ = z),
          (J.objectIdFieldName = A),
          (J.spatialReference = W),
          J
        );
      }
      function I(e, t) {
        var r, i, n;
        const { isWebMercator: o, wkid: s } = e;
        if (!s) return null;
        const a = o
          ? null !=
            (r =
              null != (i = null != (n = t[3857]) ? n : t[102100])
                ? i
                : t[102113])
            ? r
            : t[900913]
          : t[e.wkid];
        return a ? `${g}${a}` : null;
      }
      function j(e) {
        if ((0, s.Wi)(e)) return '';
        const { xmin: t, ymin: r, xmax: i, ymax: n } = e;
        return `${t},${r},${i},${n}`;
      }
      function R(e, t) {
        if (
          !(function (e) {
            return (0, s.pC)(e) && 'extent' === e.type;
          })(e)
        )
          return null;
        const { spatialReference: r } = e;
        if (!r || r.isWGS84) return { bbox: j(e) };
        const i = I(r, t);
        return (0, s.pC)(i)
          ? { bbox: j(e), 'bbox-crs': i }
          : r.isWebMercator
          ? { bbox: j((0, l.iV)(e, m.Z.WGS84)) }
          : null;
      }
      function P(e, t, r) {
        return (
          e.find((e) => e.rel === t && e.type === r) ||
          e.find((e) => e.rel === t && !e.type)
        );
      }
    },
    70082: (e, t, r) => {
      r.d(t, { Z: () => c });
      var i = r(43697),
        n = r(2368),
        o = r(35454),
        s = r(96674),
        a = r(5600),
        l = (r(67676), r(80442), r(75215), r(52011));
      const u = new o.X({
        esriFeatureEditToolAutoCompletePolygon: 'auto-complete-polygon',
        esriFeatureEditToolCircle: 'circle',
        esriFeatureEditToolEllipse: 'ellipse',
        esriFeatureEditToolFreehand: 'freehand',
        esriFeatureEditToolLine: 'line',
        esriFeatureEditToolNone: 'none',
        esriFeatureEditToolPoint: 'point',
        esriFeatureEditToolPolygon: 'polygon',
        esriFeatureEditToolRectangle: 'rectangle',
        esriFeatureEditToolArrow: 'arrow',
        esriFeatureEditToolTriangle: 'triangle',
        esriFeatureEditToolLeftArrow: 'left-arrow',
        esriFeatureEditToolRightArrow: 'right-arrow',
        esriFeatureEditToolUpArrow: 'up-arrow',
        esriFeatureEditToolDownArrow: 'down-arrow',
      });
      let p = class extends (0, n.J)(s.wq) {
        constructor(e) {
          super(e),
            (this.name = null),
            (this.description = null),
            (this.drawingTool = null),
            (this.prototype = null),
            (this.thumbnail = null);
        }
      };
      (0, i._)(
        [(0, a.Cb)({ json: { write: !0 } })],
        p.prototype,
        'name',
        void 0,
      ),
        (0, i._)(
          [(0, a.Cb)({ json: { write: !0 } })],
          p.prototype,
          'description',
          void 0,
        ),
        (0, i._)(
          [(0, a.Cb)({ json: { read: u.read, write: u.write } })],
          p.prototype,
          'drawingTool',
          void 0,
        ),
        (0, i._)(
          [(0, a.Cb)({ json: { write: !0 } })],
          p.prototype,
          'prototype',
          void 0,
        ),
        (0, i._)(
          [(0, a.Cb)({ json: { write: !0 } })],
          p.prototype,
          'thumbnail',
          void 0,
        ),
        (p = (0, i._)([(0, l.j)('esri.layers.support.FeatureTemplate')], p));
      const c = p;
    },
    16451: (e, t, r) => {
      r.d(t, { Z: () => y });
      var i = r(43697),
        n = r(2368),
        o = r(96674),
        s = r(5600),
        a = (r(67676), r(80442), r(75215), r(71715)),
        l = r(52011),
        u = r(30556),
        p = r(72729),
        c = r(70082);
      let d = class extends (0, n.J)(o.wq) {
        constructor(e) {
          super(e),
            (this.id = null),
            (this.name = null),
            (this.domains = null),
            (this.templates = null);
        }
        readDomains(e) {
          const t = {};
          for (const r of Object.keys(e)) t[r] = (0, p.im)(e[r]);
          return t;
        }
        writeDomains(e, t) {
          const r = {};
          for (const t of Object.keys(e)) {
            var i;
            e[t] && (r[t] = null == (i = e[t]) ? void 0 : i.toJSON());
          }
          t.domains = r;
        }
      };
      (0, i._)([(0, s.Cb)({ json: { write: !0 } })], d.prototype, 'id', void 0),
        (0, i._)(
          [(0, s.Cb)({ json: { write: !0 } })],
          d.prototype,
          'name',
          void 0,
        ),
        (0, i._)(
          [(0, s.Cb)({ json: { write: !0 } })],
          d.prototype,
          'domains',
          void 0,
        ),
        (0, i._)([(0, a.r)('domains')], d.prototype, 'readDomains', null),
        (0, i._)([(0, u.c)('domains')], d.prototype, 'writeDomains', null),
        (0, i._)(
          [(0, s.Cb)({ type: [c.Z], json: { write: !0 } })],
          d.prototype,
          'templates',
          void 0,
        ),
        (d = (0, i._)([(0, l.j)('esri.layers.support.FeatureType')], d));
      const y = d;
    },
    99282: (e, t, r) => {
      r.d(t, { a: () => o });
      var i = r(67900),
        n = r(68441);
      const o = {
        inches: (0, i.En)(1, 'meters', 'inches'),
        feet: (0, i.En)(1, 'meters', 'feet'),
        'us-feet': (0, i.En)(1, 'meters', 'us-feet'),
        yards: (0, i.En)(1, 'meters', 'yards'),
        miles: (0, i.En)(1, 'meters', 'miles'),
        'nautical-miles': (0, i.En)(1, 'meters', 'nautical-miles'),
        millimeters: (0, i.En)(1, 'meters', 'millimeters'),
        centimeters: (0, i.En)(1, 'meters', 'centimeters'),
        decimeters: (0, i.En)(1, 'meters', 'decimeters'),
        meters: (0, i.En)(1, 'meters', 'meters'),
        kilometers: (0, i.En)(1, 'meters', 'kilometers'),
        'decimal-degrees': 1 / (0, i.ty)(1, 'meters', n.sv.radius),
      };
    },
    51706: (e, t, r) => {
      var i, n;
      function o(e) {
        return (
          e && 'esri.renderers.visualVariables.SizeVariable' === e.declaredClass
        );
      }
      function s(e) {
        return null != e && !isNaN(e) && isFinite(e);
      }
      function a(e) {
        return e.valueExpression
          ? i.Expression
          : e.field && 'string' == typeof e.field
          ? i.Field
          : i.Unknown;
      }
      function l(e, t) {
        const r = t || a(e),
          o = e.valueUnit || 'unknown';
        return r === i.Unknown
          ? n.Constant
          : e.stops
          ? n.Stops
          : null != e.minSize &&
            null != e.maxSize &&
            null != e.minDataValue &&
            null != e.maxDataValue
          ? n.ClampedLinear
          : 'unknown' === o
          ? null != e.minSize && null != e.minDataValue
            ? e.minSize && e.minDataValue
              ? n.Proportional
              : n.Additive
            : n.Identity
          : n.RealWorldSize;
      }
      r.d(t, {
        RY: () => i,
        hL: () => n,
        PS: () => a,
        QW: () => l,
        iY: () => o,
        qh: () => s,
      }),
        (function (e) {
          (e.Unknown = 'unknown'),
            (e.Expression = 'expression'),
            (e.Field = 'field');
        })(i || (i = {})),
        (function (e) {
          (e.Unknown = 'unknown'),
            (e.Stops = 'stops'),
            (e.ClampedLinear = 'clamped-linear'),
            (e.Proportional = 'proportional'),
            (e.Additive = 'additive'),
            (e.Constant = 'constant'),
            (e.Identity = 'identity'),
            (e.RealWorldSize = 'real-world-size');
        })(n || (n = {}));
    },
    28101: (e, t, r) => {
      r.d(t, {
        PR: () => S,
        Lq: () => f,
        Km: () => m,
        cM: () => h,
        ap: () => g,
        V3: () => w,
        B3: () => y,
      });
      var i = r(22303),
        n = r(38171),
        o = r(74085),
        s = r(92604),
        a = r(70586),
        l = r(99282),
        u = r(51706);
      const p = s.Z.getLogger(
          'esri.renderers.visualVariables.support.visualVariableUtils',
        ),
        c = new n.Z(),
        d = Math.PI,
        y = /^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i;
      function f(e, t, r) {
        const n =
          'visualVariables' in e && e.visualVariables
            ? e.visualVariables.find((e) => 'color' === e.type)
            : e;
        if (!n) return;
        if ('esri.renderers.visualVariables.ColorVariable' !== n.declaredClass)
          return void p.warn(
            'The visualVariable should be an instance of esri.renderers.visualVariables.ColorVariable',
          );
        const o = 'number' == typeof t,
          s = o ? null : t,
          l = s && s.attributes;
        let u = o ? t : null;
        const c = n.field,
          { ipData: d, hasExpression: y } = n.cache;
        let f = n.cache.compiledFunc;
        if (!c && !y) {
          const e = n.stops;
          return e && e[0] && e[0].color;
        }
        if ('number' != typeof u)
          if (y) {
            if (!(0, a.pC)(r) || !(0, a.pC)(r.arcade))
              return void p.error(
                'Use of arcade expressions requires an arcade context',
              );
            const e = {
                viewingMode: r.viewingMode,
                scale: r.scale,
                spatialReference: r.spatialReference,
              },
              t = r.arcade.arcadeUtils,
              i = t.getViewInfo(e),
              o = t.createExecContext(s, i);
            if (!f) {
              const e = t.createSyntaxTree(n.valueExpression);
              (f = t.createFunction(e)), (n.cache.compiledFunc = f);
            }
            u = t.executeFunction(f, o);
          } else l && (u = l[c]);
        const m = n.normalizationField,
          h = l ? parseFloat(l[m]) : void 0;
        if (null != u && (!m || o || (!isNaN(h) && 0 !== h))) {
          isNaN(h) || o || (u /= h);
          const e = C(u, d);
          if (e) {
            const t = e[0],
              o = e[1],
              s =
                t === o
                  ? n.stops[t].color
                  : i.Z.blendColors(
                      n.stops[t].color,
                      n.stops[o].color,
                      e[2],
                      (0, a.pC)(r) ? r.color : void 0,
                    );
            return new i.Z(s);
          }
        }
      }
      function m(e, t, r) {
        const i =
          'visualVariables' in e && e.visualVariables
            ? e.visualVariables.find((e) => 'opacity' === e.type)
            : e;
        if (!i) return;
        if (
          'esri.renderers.visualVariables.OpacityVariable' !== i.declaredClass
        )
          return void p.warn(
            'The visualVariable should be an instance of esri.renderers.visualVariables.OpacityVariable',
          );
        const n = 'number' == typeof t,
          o = n ? null : t,
          s = o && o.attributes;
        let l = n ? t : null;
        const u = i.field,
          { ipData: c, hasExpression: d } = i.cache;
        let y = i.cache.compiledFunc;
        if (!u && !d) {
          const e = i.stops;
          return e && e[0] && e[0].opacity;
        }
        if ('number' != typeof l)
          if (d) {
            if ((0, a.Wi)(r) || (0, a.Wi)(r.arcade))
              return void p.error(
                'Use of arcade expressions requires an arcade context',
              );
            const e = {
                viewingMode: r.viewingMode,
                scale: r.scale,
                spatialReference: r.spatialReference,
              },
              t = r.arcade.arcadeUtils,
              n = t.getViewInfo(e),
              s = t.createExecContext(o, n);
            if (!y) {
              const e = t.createSyntaxTree(i.valueExpression);
              (y = t.createFunction(e)), (i.cache.compiledFunc = y);
            }
            l = t.executeFunction(y, s);
          } else s && (l = s[u]);
        const f = i.normalizationField,
          m = s ? parseFloat(s[f]) : void 0;
        if (null != l && (!f || n || (!isNaN(m) && 0 !== m))) {
          isNaN(m) || n || (l /= m);
          const e = C(l, c);
          if (e) {
            const t = e[0],
              r = e[1];
            if (t === r) return i.stops[t].opacity;
            {
              const n = i.stops[t].opacity;
              return n + (i.stops[r].opacity - n) * e[2];
            }
          }
        }
      }
      function h(e, t, r) {
        const i =
          'visualVariables' in e && e.visualVariables
            ? e.visualVariables.find((e) => 'rotation' === e.type)
            : e;
        if (!i) return;
        if (
          'esri.renderers.visualVariables.RotationVariable' !== i.declaredClass
        )
          return void p.warn(
            'The visualVariable should be an instance of esri.renderers.visualVariables.RotationVariable',
          );
        const n = i.axis || 'heading',
          o = 'heading' === n && 'arithmetic' === i.rotationType ? 90 : 0,
          s = 'heading' === n && 'arithmetic' === i.rotationType ? -1 : 1,
          l = 'number' == typeof t ? null : t,
          u = l && l.attributes,
          c = i.field,
          { hasExpression: d } = i.cache;
        let y = i.cache.compiledFunc,
          f = 0;
        if (!c && !d) return f;
        if (d) {
          if ((0, a.Wi)(r) || (0, a.Wi)(r.arcade))
            return void p.error(
              'Use of arcade expressions requires an arcade context',
            );
          const e = {
              viewingMode: r.viewingMode,
              scale: r.scale,
              spatialReference: r.spatialReference,
            },
            t = r.arcade.arcadeUtils,
            n = t.getViewInfo(e),
            o = t.createExecContext(l, n);
          if (!y) {
            const e = t.createSyntaxTree(i.valueExpression);
            (y = t.createFunction(e)), (i.cache.compiledFunc = y);
          }
          f = t.executeFunction(y, o);
        } else u && (f = u[c] || 0);
        return (f = 'number' != typeof f || isNaN(f) ? null : o + s * f), f;
      }
      function g(e, t, r) {
        const i =
          'visualVariables' in e && e.visualVariables
            ? e.visualVariables.find((e) => 'size' === e.type)
            : e;
        if (!i) return;
        if ('esri.renderers.visualVariables.SizeVariable' !== i.declaredClass)
          return void p.warn(
            'The visualVariable should be an instance of esri.renderers.visualVariables.SizeVariable',
          );
        const n = (function (e, t, r, i, n) {
          switch (t.transformationType) {
            case u.hL.Additive:
              return (function (e, t, r, i) {
                return e + (b(t.minSize, r, i) || t.minDataValue);
              })(e, t, r, i);
            case u.hL.Constant:
              return (function (e, t, r) {
                const i = e.stops;
                let n = i && i.length && i[0].size;
                return null == n && (n = e.minSize), b(n, t, r);
              })(t, r, i);
            case u.hL.ClampedLinear:
              return (function (e, t, r, i) {
                const n =
                    (e - t.minDataValue) / (t.maxDataValue - t.minDataValue),
                  o = b(t.minSize, r, i),
                  s = b(t.maxSize, r, i),
                  l = (0, a.pC)(i) ? i.shape : void 0;
                if (e <= t.minDataValue) return o;
                if (e >= t.maxDataValue) return s;
                if ('area' === t.scaleBy && l) {
                  const e = 'circle' === l,
                    t = e ? d * (o / 2) ** 2 : o * o,
                    r = t + n * ((e ? d * (s / 2) ** 2 : s * s) - t);
                  return e ? 2 * Math.sqrt(r / d) : Math.sqrt(r);
                }
                return o + n * (s - o);
              })(e, t, r, i);
            case u.hL.Proportional:
              return (function (e, t, r, i) {
                const n = (0, a.pC)(i) ? i.shape : void 0,
                  o = e / t.minDataValue,
                  s = b(t.minSize, r, i),
                  l = b(t.maxSize, r, i);
                let u = null;
                return (
                  (u =
                    'circle' === n
                      ? 2 * Math.sqrt(o * (s / 2) ** 2)
                      : 'square' === n || 'diamond' === n || 'image' === n
                      ? Math.sqrt(o * s ** 2)
                      : o * s),
                  v(u, s, l)
                );
              })(e, t, r, i);
            case u.hL.Stops:
              return (function (e, t, r, i, n) {
                const [o, s, a] = C(e, n);
                if (o === s) return b(t.stops[o].size, r, i);
                {
                  const e = b(t.stops[o].size, r, i);
                  return e + (b(t.stops[s].size, r, i) - e) * a;
                }
              })(e, t, r, i, n);
            case u.hL.RealWorldSize:
              return (function (e, t, r, i) {
                const n =
                    ((0, a.pC)(i) && i.resolution ? i.resolution : 1) *
                    l.a[t.valueUnit],
                  o = b(t.minSize, r, i),
                  s = b(t.maxSize, r, i),
                  { valueRepresentation: u } = t;
                let p = null;
                return (
                  (p =
                    'area' === u
                      ? (2 * Math.sqrt(e / d)) / n
                      : 'radius' === u || 'distance' === u
                      ? (2 * e) / n
                      : e / n),
                  v(p, o, s)
                );
              })(e, t, r, i);
            case u.hL.Identity:
              return e;
            case u.hL.Unknown:
              return null;
          }
        })(
          (function (e, t, r) {
            const i = 'number' == typeof t,
              n = i ? null : t,
              o = n && n.attributes;
            let s = i ? t : null;
            const { isScaleDriven: l } = e.cache;
            let c = e.cache.compiledFunc;
            if (l) {
              const t = (0, a.pC)(r) ? r.scale : void 0,
                i = (0, a.pC)(r) ? r.view : void 0;
              s =
                null == t || '3d' === i
                  ? (function (e) {
                      let t = null,
                        r = null;
                      const i = e.stops;
                      return (
                        i
                          ? ((t = i[0].value), (r = i[i.length - 1].value))
                          : ((t = e.minDataValue || 0),
                            (r = e.maxDataValue || 0)),
                        (t + r) / 2
                      );
                    })(e)
                  : t;
            } else if (!i)
              switch (e.inputValueType) {
                case u.RY.Expression: {
                  if ((0, a.Wi)(r) || (0, a.Wi)(r.arcade))
                    return void p.error(
                      'Use of arcade expressions requires an arcade context',
                    );
                  const t = {
                      viewingMode: r.viewingMode,
                      scale: r.scale,
                      spatialReference: r.spatialReference,
                    },
                    i = r.arcade.arcadeUtils,
                    o = i.getViewInfo(t),
                    l = i.createExecContext(n, o);
                  if (!c) {
                    const t = i.createSyntaxTree(e.valueExpression);
                    (c = i.createFunction(t)), (e.cache.compiledFunc = c);
                  }
                  s = i.executeFunction(c, l);
                  break;
                }
                case u.RY.Field:
                  o && (s = o[e.field]);
                  break;
                case u.RY.Unknown:
                  s = null;
              }
            if (!(0, u.qh)(s)) return null;
            if (i || !e.normalizationField) return s;
            const d = o ? parseFloat(o[e.normalizationField]) : null;
            return (0, u.qh)(d) && 0 !== d ? s / d : null;
          })(i, t, r),
          i,
          t,
          r,
          i.cache.ipData,
        );
        return null == n || isNaN(n) ? 0 : n;
      }
      function b(e, t, r) {
        return null == e
          ? null
          : (0, u.iY)(e)
          ? g(e, t, r)
          : (0, u.qh)(e)
          ? e
          : null;
      }
      function v(e, t, r) {
        return (0, u.qh)(r) && e > r ? r : (0, u.qh)(t) && e < t ? t : e;
      }
      function w(e, t, r) {
        const { isScaleDriven: i } = e.cache;
        if (!((i && '3d' === r) || t)) return null;
        const n = { scale: t, view: r };
        let o = b(e.minSize, c, n),
          s = b(e.maxSize, c, n);
        if (null != o || null != s) {
          if (o > s) {
            const e = s;
            (s = o), (o = e);
          }
          return { minSize: o, maxSize: s };
        }
      }
      function C(e, t) {
        if (!t) return;
        let r = 0,
          i = t.length - 1;
        return (
          t.some((t, n) => (e < t ? ((i = n), !0) : ((r = n), !1))),
          [r, i, (e - t[r]) / (t[i] - t[r])]
        );
      }
      function S(e, t, r) {
        const i = ['proportional', 'proportional', 'proportional'];
        for (const n of e) {
          const e = n.useSymbolValue ? 'symbol-value' : g(n, t, r);
          switch (n.axis) {
            case 'width':
              i[0] = e;
              break;
            case 'depth':
              i[1] = e;
              break;
            case 'height':
              i[2] = e;
              break;
            case 'width-and-depth':
              (i[0] = e), (i[1] = e);
              break;
            case 'all':
            case void 0:
            case null:
              (i[0] = e), (i[1] = e), (i[2] = e);
              break;
            default:
              (0, o.Bg)(n.axis);
          }
        }
        return i;
      }
    },
    74889: (e, t, r) => {
      r.r(t), r.d(t, { default: () => w });
      var i,
        n = r(43697),
        o = r(66577),
        s = r(38171),
        a = r(35454),
        l = r(96674),
        u = r(22974),
        p = r(70586),
        c = r(5600),
        d = (r(75215), r(71715)),
        y = r(52011),
        f = r(30556),
        m = r(82971),
        h = r(33955),
        g = r(1231);
      const b = new a.X({
        esriGeometryPoint: 'point',
        esriGeometryMultipoint: 'multipoint',
        esriGeometryPolyline: 'polyline',
        esriGeometryPolygon: 'polygon',
        esriGeometryEnvelope: 'extent',
        mesh: 'mesh',
        '': null,
      });
      let v = (i = class extends l.wq {
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
            i = [];
          for (let t = 0; t < e.length; t++) {
            const n = e[t],
              o = s.Z.fromJSON(n),
              a = n.geometry && n.geometry.spatialReference;
            (0, p.pC)(o.geometry) && !a && (o.geometry.spatialReference = r);
            const l = n.aggregateGeometries,
              u = o.aggregateGeometries;
            if (l && (0, p.pC)(u))
              for (const e in u) {
                const t = u[e],
                  i = l[e],
                  n = null == i ? void 0 : i.spatialReference;
                (0, p.pC)(t) && !n && (t.spatialReference = r);
              }
            i.push(o);
          }
          return i;
        }
        writeGeometryType(e, t, r, i) {
          if (e) return void b.write(e, t, r, i);
          const { features: n } = this;
          if (n)
            for (const e of n)
              if (e && (0, p.pC)(e.geometry))
                return void b.write(e.geometry.type, t, r, i);
        }
        readQueryGeometry(e, t) {
          if (!e) return null;
          const r = !!e.spatialReference,
            i = (0, h.im)(e);
          return (
            !r &&
              t.spatialReference &&
              (i.spatialReference = m.Z.fromJSON(t.spatialReference)),
            i
          );
        }
        writeSpatialReference(e, t) {
          if (e) return void (t.spatialReference = e.toJSON());
          const { features: r } = this;
          if (r)
            for (const e of r)
              if (e && (0, p.pC)(e.geometry) && e.geometry.spatialReference)
                return void (t.spatialReference =
                  e.geometry.spatialReference.toJSON());
        }
        clone() {
          return new i(this.cloneProperties());
        }
        cloneProperties() {
          return (0, u.d9)({
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
              const i = t.features[r];
              if (i.geometry) {
                const t = e && e[r];
                i.geometry = (t && t.toJSON()) || i.geometry;
              }
            }
          return t;
        }
        quantize(e) {
          const {
              scale: [t, r],
              translate: [i, n],
            } = e,
            o = this.features,
            s = this._getQuantizationFunction(
              this.geometryType,
              (e) => Math.round((e - i) / t),
              (e) => Math.round((n - e) / r),
            );
          for (let e = 0, t = o.length; e < t; e++)
            s((0, p.Wg)(o[e].geometry)) || (o.splice(e, 1), e--, t--);
          return (this.transform = e), this;
        }
        unquantize() {
          const { geometryType: e, features: t, transform: r } = this;
          if (!r) return this;
          const {
              translate: [i, n],
              scale: [o, s],
            } = r,
            a = this._getHydrationFunction(
              e,
              (e) => e * o + i,
              (e) => n - e * s,
            );
          for (const { geometry: e } of t) (0, p.pC)(e) && a(e);
          return (this.transform = null), this;
        }
        _quantizePoints(e, t, r) {
          let i, n;
          const o = [];
          for (let s = 0, a = e.length; s < a; s++) {
            const a = e[s];
            if (s > 0) {
              const e = t(a[0]),
                s = r(a[1]);
              (e === i && s === n) ||
                (o.push([e - i, s - n]), (i = e), (n = s));
            } else (i = t(a[0])), (n = r(a[1])), o.push([i, n]);
          }
          return o.length > 0 ? o : null;
        }
        _getQuantizationFunction(e, t, r) {
          return 'point' === e
            ? (e) => ((e.x = t(e.x)), (e.y = r(e.y)), e)
            : 'polyline' === e || 'polygon' === e
            ? (e) => {
                const i = (0, h.oU)(e) ? e.rings : e.paths,
                  n = [];
                for (let e = 0, o = i.length; e < o; e++) {
                  const o = i[e],
                    s = this._quantizePoints(o, t, r);
                  s && n.push(s);
                }
                return n.length > 0
                  ? ((0, h.oU)(e) ? (e.rings = n) : (e.paths = n), e)
                  : null;
              }
            : 'multipoint' === e
            ? (e) => {
                const i = this._quantizePoints(e.points, t, r);
                return i.length > 0 ? ((e.points = i), e) : null;
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
                const i = (0, h.oU)(e) ? e.rings : e.paths;
                let n, o;
                for (let e = 0, s = i.length; e < s; e++) {
                  const s = i[e];
                  for (let e = 0, i = s.length; e < i; e++) {
                    const i = s[e];
                    e > 0
                      ? ((n += i[0]), (o += i[1]))
                      : ((n = i[0]), (o = i[1])),
                      (i[0] = t(n)),
                      (i[1] = r(o));
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
                const i = e.points;
                let n, o;
                for (let e = 0, s = i.length; e < s; e++) {
                  const s = i[e];
                  e > 0 ? ((n += s[0]), (o += s[1])) : ((n = s[0]), (o = s[1])),
                    (s[0] = t(n)),
                    (s[1] = r(o));
                }
              }
            : void 0;
        }
      });
      (0, n._)(
        [(0, c.Cb)({ type: String, json: { write: !0 } })],
        v.prototype,
        'displayFieldName',
        void 0,
      ),
        (0, n._)(
          [
            (0, c.Cb)({
              type: Boolean,
              json: { write: { overridePolicy: (e) => ({ enabled: e }) } },
            }),
          ],
          v.prototype,
          'exceededTransferLimit',
          void 0,
        ),
        (0, n._)(
          [(0, c.Cb)({ type: [s.Z], json: { write: !0 } })],
          v.prototype,
          'features',
          void 0,
        ),
        (0, n._)([(0, d.r)('features')], v.prototype, 'readFeatures', null),
        (0, n._)(
          [(0, c.Cb)({ type: [g.Z], json: { write: !0 } })],
          v.prototype,
          'fields',
          void 0,
        ),
        (0, n._)(
          [
            (0, c.Cb)({
              type: [
                'point',
                'multipoint',
                'polyline',
                'polygon',
                'extent',
                'mesh',
              ],
              json: { read: { reader: b.read } },
            }),
          ],
          v.prototype,
          'geometryType',
          void 0,
        ),
        (0, n._)(
          [(0, f.c)('geometryType')],
          v.prototype,
          'writeGeometryType',
          null,
        ),
        (0, n._)(
          [
            (0, c.Cb)({
              type: Boolean,
              json: { write: { overridePolicy: (e) => ({ enabled: e }) } },
            }),
          ],
          v.prototype,
          'hasM',
          void 0,
        ),
        (0, n._)(
          [
            (0, c.Cb)({
              type: Boolean,
              json: { write: { overridePolicy: (e) => ({ enabled: e }) } },
            }),
          ],
          v.prototype,
          'hasZ',
          void 0,
        ),
        (0, n._)(
          [(0, c.Cb)({ types: o.qM, json: { write: !0 } })],
          v.prototype,
          'queryGeometry',
          void 0,
        ),
        (0, n._)(
          [(0, d.r)('queryGeometry')],
          v.prototype,
          'readQueryGeometry',
          null,
        ),
        (0, n._)(
          [(0, c.Cb)({ type: m.Z, json: { write: !0 } })],
          v.prototype,
          'spatialReference',
          void 0,
        ),
        (0, n._)(
          [(0, f.c)('spatialReference')],
          v.prototype,
          'writeSpatialReference',
          null,
        ),
        (0, n._)(
          [(0, c.Cb)({ json: { write: !0 } })],
          v.prototype,
          'transform',
          void 0,
        ),
        (v = i = (0, n._)([(0, y.j)('esri.rest.support.FeatureSet')], v)),
        (v.prototype.toJSON.isDefaultToJSON = !0);
      const w = v;
    },
  },
]);
