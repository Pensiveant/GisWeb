'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [712, 4475],
  {
    38171: (e, t, r) => {
      r.d(t, { Z: () => f });
      var i = r(43697),
        s = r(66577),
        o = r(51773),
        n = r(78223),
        a = r(2368),
        l = r(96674),
        u = r(70586),
        p = r(99001),
        c = r(5600),
        d = (r(67676), r(80442), r(75215), r(52011)),
        h = r(33955);
      function y(e) {
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
            aggregateGeometries: y(this.aggregateGeometries),
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
          const s = { graphic: this, property: e, oldValue: t, newValue: r };
          'attributes' === e && (s.attributeName = i),
            this.layer.graphicChanged(s);
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
                  const i = (0, h.im)(e[r]);
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
          [(0, c.Cb)({ value: null, types: s.qM, json: { read: h.im } })],
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
          [(0, c.Cb)({ value: null, types: n.LB })],
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
      const f = m;
    },
    74085: (e, t, r) => {
      function i(e) {}
      r.d(t, { Bg: () => i }), r(80442);
    },
    45425: (e, t, r) => {
      r.r(t), r.d(t, { default: () => F });
      var i = r(43697),
        s = (r(66577), r(20102)),
        o = r(70586),
        n = r(17452),
        a = r(5600),
        l = (r(67676), r(80442)),
        u = (r(75215), r(71715)),
        p = r(52011),
        c = r(67284),
        d = r(83379),
        h = r(95330),
        y = r(78346),
        m = r(74889),
        f = r(6570);
      let g = class extends d.Z {
        constructor(e) {
          super(e),
            (this.type = 'csv'),
            (this.refresh = (0, h.Ds)(async (e) => {
              await this.load();
              const { extent: t, timeExtent: r } =
                await this._connection.invoke('refresh', e);
              return (
                (this.sourceJSON.extent = t),
                r && (this.sourceJSON.timeInfo.timeExtent = [r.start, r.end]),
                {
                  dataChanged: !0,
                  updates: {
                    extent: this.sourceJSON.extent,
                    timeInfo: this.sourceJSON.timeInfo,
                  },
                }
              );
            }));
        }
        load(e) {
          const t = (0, o.pC)(e) ? e.signal : null;
          return (
            this.addResolvingPromise(this._startWorker(t)),
            Promise.resolve(this)
          );
        }
        destroy() {
          var e;
          null == (e = this._connection) || e.close(),
            (this._connection = null);
        }
        async openPorts() {
          return await this.load(), this._connection.openPorts();
        }
        async queryFeatures(e, t = {}) {
          await this.load(t);
          const r = await this._connection.invoke(
            'queryFeatures',
            e ? e.toJSON() : null,
            t,
          );
          return m.default.fromJSON(r);
        }
        async queryFeaturesJSON(e, t = {}) {
          return (
            await this.load(t),
            this._connection.invoke('queryFeatures', e ? e.toJSON() : null, t)
          );
        }
        async queryFeatureCount(e, t = {}) {
          return (
            await this.load(t),
            this._connection.invoke(
              'queryFeatureCount',
              e ? e.toJSON() : null,
              t,
            )
          );
        }
        async queryObjectIds(e, t = {}) {
          return (
            await this.load(t),
            this._connection.invoke('queryObjectIds', e ? e.toJSON() : null, t)
          );
        }
        async queryExtent(e, t = {}) {
          await this.load(t);
          const r = await this._connection.invoke(
            'queryExtent',
            e ? e.toJSON() : null,
            t,
          );
          return { count: r.count, extent: f.Z.fromJSON(r.extent) };
        }
        async querySnapping(e, t = {}) {
          return (
            await this.load(t), this._connection.invoke('querySnapping', e, t)
          );
        }
        async _startWorker(e) {
          this._connection = await (0, y.bA)('CSVSourceWorker', {
            strategy: (0, l.Z)('feature-layers-workers')
              ? 'dedicated'
              : 'local',
            signal: e,
          });
          const {
              url: t,
              delimiter: r,
              fields: i,
              latitudeField: s,
              longitudeField: o,
              spatialReference: n,
              timeInfo: a,
            } = this.loadOptions,
            u = await this._connection.invoke(
              'load',
              {
                url: t,
                customParameters: this.customParameters,
                parsingOptions: {
                  delimiter: r,
                  fields: null == i ? void 0 : i.map((e) => e.toJSON()),
                  latitudeField: s,
                  longitudeField: o,
                  spatialReference: null == n ? void 0 : n.toJSON(),
                  timeInfo: null == a ? void 0 : a.toJSON(),
                },
              },
              { signal: e },
            );
          (this.locationInfo = u.locationInfo),
            (this.sourceJSON = u.layerDefinition),
            (this.delimiter = u.delimiter);
        }
      };
      (0, i._)([(0, a.Cb)()], g.prototype, 'type', void 0),
        (0, i._)([(0, a.Cb)()], g.prototype, 'loadOptions', void 0),
        (0, i._)([(0, a.Cb)()], g.prototype, 'customParameters', void 0),
        (0, i._)([(0, a.Cb)()], g.prototype, 'locationInfo', void 0),
        (0, i._)([(0, a.Cb)()], g.prototype, 'sourceJSON', void 0),
        (0, i._)([(0, a.Cb)()], g.prototype, 'delimiter', void 0),
        (g = (0, i._)([(0, p.j)('esri.layers.graphics.sources.CSVSource')], g));
      const v = g;
      var b = r(25278),
        w = r(57444),
        C = r(25929),
        _ = r(82971);
      let S = class extends c.default {
        constructor(...e) {
          super(...e),
            (this.capabilities = (0, b.MS)(!1, !1)),
            (this.delimiter = null),
            (this.editingEnabled = !1),
            (this.fields = null),
            (this.latitudeField = null),
            (this.locationType = 'coordinates'),
            (this.longitudeField = null),
            (this.operationalLayerType = 'CSV'),
            (this.outFields = ['*']),
            (this.path = null),
            (this.portalItem = null),
            (this.spatialReference = _.Z.WGS84),
            (this.source = null),
            (this.type = 'csv');
        }
        normalizeCtorArgs(e, t) {
          return 'string' == typeof e ? { url: e, ...t } : e;
        }
        get isTable() {
          return this.loaded && null == this.geometryType;
        }
        readWebMapLabelsVisible(e, t) {
          return null != t.showLabels
            ? t.showLabels
            : !!(
                t.layerDefinition &&
                t.layerDefinition.drawingInfo &&
                t.layerDefinition.drawingInfo.labelingInfo
              );
        }
        set url(e) {
          if (!e) return void this._set('url', e);
          const t = (0, n.mN)(e);
          this._set('url', t.path),
            t.query &&
              (this.customParameters = {
                ...this.customParameters,
                ...t.query,
              });
        }
        async createGraphicsSource(e) {
          const t = new v({
            loadOptions: {
              delimiter: this.delimiter,
              fields: this.fields,
              latitudeField: this.latitudeField,
              longitudeField: this.longitudeField,
              spatialReference: this.spatialReference,
              timeInfo: this.timeInfo,
              url: this.url,
            },
            customParameters: this.customParameters,
          });
          return (
            this._set('source', t),
            await t.load({ signal: e }),
            this.read(
              { locationInfo: t.locationInfo, columnDelimiter: t.delimiter },
              { origin: 'service', url: this.parsedUrl },
            ),
            t
          );
        }
        queryFeatures(e, t) {
          return this.load()
            .then(() =>
              this.source.queryFeatures(w.Z.from(e) || this.createQuery()),
            )
            .then((e) => {
              if (null != e && e.features)
                for (const t of e.features) t.layer = t.sourceLayer = this;
              return e;
            });
        }
        queryObjectIds(e, t) {
          return this.load().then(() =>
            this.source.queryObjectIds(w.Z.from(e) || this.createQuery()),
          );
        }
        queryFeatureCount(e, t) {
          return this.load().then(() =>
            this.source.queryFeatureCount(w.Z.from(e) || this.createQuery()),
          );
        }
        queryExtent(e, t) {
          return this.load().then(() =>
            this.source.queryExtent(w.Z.from(e) || this.createQuery()),
          );
        }
        write(e, t) {
          return super.write(e, { ...t, writeLayerSchema: !0 });
        }
        clone() {
          throw new s.Z(
            'CSVLayer',
            `CSVLayer (title: ${this.title}, id: ${this.id}) cannot be cloned`,
          );
        }
        async hasDataChanged() {
          try {
            const { dataChanged: e, updates: t } = await this.source.refresh(
              this.customParameters,
            );
            return (
              (0, o.pC)(t) &&
                this.read(t, {
                  origin: 'service',
                  url: this.parsedUrl,
                  ignoreDefaults: !0,
                }),
              e
            );
          } catch {}
          return !1;
        }
        _verifyFields() {}
        _verifySource() {}
        _hasMemorySource() {
          return !1;
        }
      };
      (0, i._)(
        [(0, a.Cb)({ readOnly: !0, json: { read: !1, write: !1 } })],
        S.prototype,
        'capabilities',
        void 0,
      ),
        (0, i._)(
          [
            (0, a.Cb)({
              type: [',', ' ', ';', '|', '\t'],
              json: {
                read: { source: 'columnDelimiter' },
                write: { target: 'columnDelimiter', ignoreOrigin: !0 },
              },
            }),
          ],
          S.prototype,
          'delimiter',
          void 0,
        ),
        (0, i._)(
          [
            (0, a.Cb)({
              readOnly: !0,
              type: Boolean,
              json: { origins: { 'web-scene': { read: !1, write: !1 } } },
            }),
          ],
          S.prototype,
          'editingEnabled',
          void 0,
        ),
        (0, i._)(
          [
            (0, a.Cb)({
              json: {
                read: { source: 'layerDefinition.fields' },
                write: { target: 'layerDefinition.fields' },
              },
            }),
          ],
          S.prototype,
          'fields',
          void 0,
        ),
        (0, i._)(
          [(0, a.Cb)({ type: Boolean, readOnly: !0 })],
          S.prototype,
          'isTable',
          null,
        ),
        (0, i._)(
          [
            (0, u.r)('web-map', 'labelsVisible', [
              'layerDefinition.drawingInfo.labelingInfo',
              'showLabels',
            ]),
          ],
          S.prototype,
          'readWebMapLabelsVisible',
          null,
        ),
        (0, i._)(
          [
            (0, a.Cb)({
              type: String,
              json: {
                read: { source: 'locationInfo.latitudeFieldName' },
                write: {
                  target: 'locationInfo.latitudeFieldName',
                  ignoreOrigin: !0,
                },
              },
            }),
          ],
          S.prototype,
          'latitudeField',
          void 0,
        ),
        (0, i._)(
          [(0, a.Cb)({ type: ['show', 'hide'] })],
          S.prototype,
          'listMode',
          void 0,
        ),
        (0, i._)(
          [
            (0, a.Cb)({
              type: ['coordinates'],
              json: {
                read: { source: 'locationInfo.locationType' },
                write: {
                  target: 'locationInfo.locationType',
                  ignoreOrigin: !0,
                  isRequired: !0,
                },
              },
            }),
          ],
          S.prototype,
          'locationType',
          void 0,
        ),
        (0, i._)(
          [
            (0, a.Cb)({
              type: String,
              json: {
                read: { source: 'locationInfo.longitudeFieldName' },
                write: {
                  target: 'locationInfo.longitudeFieldName',
                  ignoreOrigin: !0,
                },
              },
            }),
          ],
          S.prototype,
          'longitudeField',
          void 0,
        ),
        (0, i._)(
          [(0, a.Cb)({ type: ['CSV'] })],
          S.prototype,
          'operationalLayerType',
          void 0,
        ),
        (0, i._)([(0, a.Cb)()], S.prototype, 'outFields', void 0),
        (0, i._)(
          [
            (0, a.Cb)({
              type: String,
              json: {
                origins: { 'web-scene': { read: !1, write: !1 } },
                read: !1,
                write: !1,
              },
            }),
          ],
          S.prototype,
          'path',
          void 0,
        ),
        (0, i._)(
          [
            (0, a.Cb)({
              json: {
                read: !1,
                write: !1,
                origins: { 'web-document': { read: !1, write: !1 } },
              },
            }),
          ],
          S.prototype,
          'portalItem',
          void 0,
        ),
        (0, i._)(
          [
            (0, a.Cb)({
              json: { read: !1 },
              cast: null,
              type: v,
              readOnly: !0,
            }),
          ],
          S.prototype,
          'source',
          void 0,
        ),
        (0, i._)(
          [(0, a.Cb)({ json: { read: !1 }, value: 'csv', readOnly: !0 })],
          S.prototype,
          'type',
          void 0,
        ),
        (0, i._)(
          [
            (0, a.Cb)({
              json: {
                read: C.r,
                write: { isRequired: !0, ignoreOrigin: !0, writer: C.w },
              },
            }),
          ],
          S.prototype,
          'url',
          null,
        ),
        (S = (0, i._)([(0, p.j)('esri.layers.CSVLayer')], S));
      const F = S;
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
    25278: (e, t, r) => {
      r.d(t, { MS: () => d, Dm: () => p, Hq: () => c, bU: () => a });
      var i = r(80442),
        s = r(22974),
        o = r(61159),
        n = r(58333);
      function a(e) {
        return {
          renderer: {
            type: 'simple',
            symbol:
              'esriGeometryPoint' === e || 'esriGeometryMultipoint' === e
                ? n.I4
                : 'esriGeometryPolyline' === e
                ? n.ET
                : n.lF,
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
            prototype: { attributes: (0, s.d9)(e) },
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
      r.d(t, { V: () => n });
      var i = r(43697),
        s = r(5600),
        o = (r(67676), r(80442), r(75215), r(52011));
      const n = (e) => {
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
          (0, i._)([(0, s.Cb)({ type: String })], t.prototype, 'apiKey', null),
          (t = (0, i._)([(0, o.j)('esri.layers.mixins.APIKeyMixin')], t)),
          t
        );
      };
    },
    17287: (e, t, r) => {
      r.d(t, { Y: () => u });
      var i = r(43697),
        s = r(92604),
        o = r(70586),
        n = r(5600),
        a = (r(67676), r(80442), r(75215), r(52011)),
        l = r(66677);
      const u = (e) => {
        let t = class extends e {
          get title() {
            if (this._get('title') && 'defaults' !== this.originOf('title'))
              return this._get('title');
            if (this.url) {
              const e = (0, l.Qc)(this.url);
              if ((0, o.pC)(e) && e.title) return e.title;
            }
            return this._get('title') || '';
          }
          set title(e) {
            this._set('title', e);
          }
          set url(e) {
            this._set('url', (0, l.Nm)(e, s.Z.getLogger(this.declaredClass)));
          }
        };
        return (
          (0, i._)([(0, n.Cb)()], t.prototype, 'title', null),
          (0, i._)([(0, n.Cb)({ type: String })], t.prototype, 'url', null),
          (t = (0, i._)([(0, a.j)('esri.layers.mixins.ArcGISService')], t)),
          t
        );
      };
    },
    16859: (e, t, r) => {
      r.d(t, { I: () => w });
      var i = r(43697),
        s = r(40330),
        o = r(3172),
        n = r(66643),
        a = r(20102),
        l = r(92604),
        u = r(70586),
        p = r(95330),
        c = r(17452),
        d = r(5600),
        h = (r(67676), r(80442), r(75215), r(71715)),
        y = r(52011),
        m = r(30556),
        f = r(65587),
        g = r(15235),
        v = r(86082);
      const b = l.Z.getLogger('esri.layers.mixins.PortalLayer'),
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
                      b.warn(
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
                ? null == s.id
                  ? void 0
                  : s.id.findCredential(this.url)
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
              const a = s.id.findServerInfo(this.url);
              if (null == a || !a.owningSystemUrl) return null;
              const l = `${a.owningSystemUrl}/sharing/rest`,
                p = f.Z.getDefault();
              if (p && p.loaded && (0, c.Fv)(p.restUrl) === (0, c.Fv)(l))
                return p.user;
              const d = `${l}/community/self`,
                h = (0, u.pC)(e) ? e.signal : null,
                y = await (0, n.q6)(
                  (0, o.default)(d, {
                    authMode: 'no-prompt',
                    query: { f: 'json' },
                    signal: h,
                  }),
                );
              return y.ok ? v.default.fromJSON(y.value.data) : null;
            }
            read(e, t) {
              t && (t.layer = this), super.read(e, t);
            }
            write(e, t) {
              const r = t && t.portal,
                i =
                  this.portalItem &&
                  this.portalItem.id &&
                  (this.portalItem.portal || f.Z.getDefault());
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
              [(0, h.r)('web-document', 'portalItem', ['itemId'])],
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
            (t = (0, i._)([(0, y.j)('esri.layers.mixins.PortalLayer')], t)),
            t
          );
        },
        C = { credential: null, user: null };
    },
    70082: (e, t, r) => {
      r.d(t, { Z: () => c });
      var i = r(43697),
        s = r(2368),
        o = r(35454),
        n = r(96674),
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
      let p = class extends (0, s.J)(n.wq) {
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
      r.d(t, { Z: () => h });
      var i = r(43697),
        s = r(2368),
        o = r(96674),
        n = r(5600),
        a = (r(67676), r(80442), r(75215), r(71715)),
        l = r(52011),
        u = r(30556),
        p = r(72729),
        c = r(70082);
      let d = class extends (0, s.J)(o.wq) {
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
      (0, i._)([(0, n.Cb)({ json: { write: !0 } })], d.prototype, 'id', void 0),
        (0, i._)(
          [(0, n.Cb)({ json: { write: !0 } })],
          d.prototype,
          'name',
          void 0,
        ),
        (0, i._)(
          [(0, n.Cb)({ json: { write: !0 } })],
          d.prototype,
          'domains',
          void 0,
        ),
        (0, i._)([(0, a.r)('domains')], d.prototype, 'readDomains', null),
        (0, i._)([(0, u.c)('domains')], d.prototype, 'writeDomains', null),
        (0, i._)(
          [(0, n.Cb)({ type: [c.Z], json: { write: !0 } })],
          d.prototype,
          'templates',
          void 0,
        ),
        (d = (0, i._)([(0, l.j)('esri.layers.support.FeatureType')], d));
      const h = d;
    },
    56765: (e, t, r) => {
      r.d(t, { Z: () => p });
      var i,
        s = r(43697),
        o = r(80539),
        n = r(96674),
        a = r(5600),
        l = (r(67676), r(80442), r(75215), r(52011));
      let u = (i = class extends n.wq {
        constructor(e) {
          super(e),
            (this.floorField = null),
            (this.viewAllMode = !1),
            (this.viewAllLevelIds = new o.Z());
        }
        clone() {
          return new i({
            floorField: this.floorField,
            viewAllMode: this.viewAllMode,
            viewAllLevelIds: this.viewAllLevelIds,
          });
        }
      });
      (0, s._)(
        [(0, a.Cb)({ type: String, json: { write: !0 } })],
        u.prototype,
        'floorField',
        void 0,
      ),
        (0, s._)(
          [(0, a.Cb)({ json: { read: !1, write: !1 } })],
          u.prototype,
          'viewAllMode',
          void 0,
        ),
        (0, s._)(
          [(0, a.Cb)({ json: { read: !1, write: !1 } })],
          u.prototype,
          'viewAllLevelIds',
          void 0,
        ),
        (u = i = (0, s._)([(0, l.j)('esri.layers.support.LayerFloorInfo')], u));
      const p = u;
    },
    99282: (e, t, r) => {
      r.d(t, { a: () => o });
      var i = r(67900),
        s = r(68441);
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
        'decimal-degrees': 1 / (0, i.ty)(1, 'meters', s.sv.radius),
      };
    },
    51706: (e, t, r) => {
      var i, s;
      function o(e) {
        return (
          e && 'esri.renderers.visualVariables.SizeVariable' === e.declaredClass
        );
      }
      function n(e) {
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
          ? s.Constant
          : e.stops
          ? s.Stops
          : null != e.minSize &&
            null != e.maxSize &&
            null != e.minDataValue &&
            null != e.maxDataValue
          ? s.ClampedLinear
          : 'unknown' === o
          ? null != e.minSize && null != e.minDataValue
            ? e.minSize && e.minDataValue
              ? s.Proportional
              : s.Additive
            : s.Identity
          : s.RealWorldSize;
      }
      r.d(t, {
        RY: () => i,
        hL: () => s,
        PS: () => a,
        QW: () => l,
        iY: () => o,
        qh: () => n,
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
        })(s || (s = {}));
    },
    28101: (e, t, r) => {
      r.d(t, {
        PR: () => _,
        Lq: () => y,
        Km: () => m,
        cM: () => f,
        ap: () => g,
        V3: () => w,
        B3: () => h,
      });
      var i = r(22303),
        s = r(38171),
        o = r(74085),
        n = r(92604),
        a = r(70586),
        l = r(99282),
        u = r(51706);
      const p = n.Z.getLogger(
          'esri.renderers.visualVariables.support.visualVariableUtils',
        ),
        c = new s.Z(),
        d = Math.PI,
        h = /^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i;
      function y(e, t, r) {
        const s =
          'visualVariables' in e && e.visualVariables
            ? e.visualVariables.find((e) => 'color' === e.type)
            : e;
        if (!s) return;
        if ('esri.renderers.visualVariables.ColorVariable' !== s.declaredClass)
          return void p.warn(
            'The visualVariable should be an instance of esri.renderers.visualVariables.ColorVariable',
          );
        const o = 'number' == typeof t,
          n = o ? null : t,
          l = n && n.attributes;
        let u = o ? t : null;
        const c = s.field,
          { ipData: d, hasExpression: h } = s.cache;
        let y = s.cache.compiledFunc;
        if (!c && !h) {
          const e = s.stops;
          return e && e[0] && e[0].color;
        }
        if ('number' != typeof u)
          if (h) {
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
              o = t.createExecContext(n, i);
            if (!y) {
              const e = t.createSyntaxTree(s.valueExpression);
              (y = t.createFunction(e)), (s.cache.compiledFunc = y);
            }
            u = t.executeFunction(y, o);
          } else l && (u = l[c]);
        const m = s.normalizationField,
          f = l ? parseFloat(l[m]) : void 0;
        if (null != u && (!m || o || (!isNaN(f) && 0 !== f))) {
          isNaN(f) || o || (u /= f);
          const e = C(u, d);
          if (e) {
            const t = e[0],
              o = e[1],
              n =
                t === o
                  ? s.stops[t].color
                  : i.Z.blendColors(
                      s.stops[t].color,
                      s.stops[o].color,
                      e[2],
                      (0, a.pC)(r) ? r.color : void 0,
                    );
            return new i.Z(n);
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
        const s = 'number' == typeof t,
          o = s ? null : t,
          n = o && o.attributes;
        let l = s ? t : null;
        const u = i.field,
          { ipData: c, hasExpression: d } = i.cache;
        let h = i.cache.compiledFunc;
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
              s = t.getViewInfo(e),
              n = t.createExecContext(o, s);
            if (!h) {
              const e = t.createSyntaxTree(i.valueExpression);
              (h = t.createFunction(e)), (i.cache.compiledFunc = h);
            }
            l = t.executeFunction(h, n);
          } else n && (l = n[u]);
        const y = i.normalizationField,
          m = n ? parseFloat(n[y]) : void 0;
        if (null != l && (!y || s || (!isNaN(m) && 0 !== m))) {
          isNaN(m) || s || (l /= m);
          const e = C(l, c);
          if (e) {
            const t = e[0],
              r = e[1];
            if (t === r) return i.stops[t].opacity;
            {
              const s = i.stops[t].opacity;
              return s + (i.stops[r].opacity - s) * e[2];
            }
          }
        }
      }
      function f(e, t, r) {
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
        const s = i.axis || 'heading',
          o = 'heading' === s && 'arithmetic' === i.rotationType ? 90 : 0,
          n = 'heading' === s && 'arithmetic' === i.rotationType ? -1 : 1,
          l = 'number' == typeof t ? null : t,
          u = l && l.attributes,
          c = i.field,
          { hasExpression: d } = i.cache;
        let h = i.cache.compiledFunc,
          y = 0;
        if (!c && !d) return y;
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
            s = t.getViewInfo(e),
            o = t.createExecContext(l, s);
          if (!h) {
            const e = t.createSyntaxTree(i.valueExpression);
            (h = t.createFunction(e)), (i.cache.compiledFunc = h);
          }
          y = t.executeFunction(h, o);
        } else u && (y = u[c] || 0);
        return (y = 'number' != typeof y || isNaN(y) ? null : o + n * y), y;
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
        const s = (function (e, t, r, i, s) {
          switch (t.transformationType) {
            case u.hL.Additive:
              return (function (e, t, r, i) {
                return e + (v(t.minSize, r, i) || t.minDataValue);
              })(e, t, r, i);
            case u.hL.Constant:
              return (function (e, t, r) {
                const i = e.stops;
                let s = i && i.length && i[0].size;
                return null == s && (s = e.minSize), v(s, t, r);
              })(t, r, i);
            case u.hL.ClampedLinear:
              return (function (e, t, r, i) {
                const s =
                    (e - t.minDataValue) / (t.maxDataValue - t.minDataValue),
                  o = v(t.minSize, r, i),
                  n = v(t.maxSize, r, i),
                  l = (0, a.pC)(i) ? i.shape : void 0;
                if (e <= t.minDataValue) return o;
                if (e >= t.maxDataValue) return n;
                if ('area' === t.scaleBy && l) {
                  const e = 'circle' === l,
                    t = e ? d * (o / 2) ** 2 : o * o,
                    r = t + s * ((e ? d * (n / 2) ** 2 : n * n) - t);
                  return e ? 2 * Math.sqrt(r / d) : Math.sqrt(r);
                }
                return o + s * (n - o);
              })(e, t, r, i);
            case u.hL.Proportional:
              return (function (e, t, r, i) {
                const s = (0, a.pC)(i) ? i.shape : void 0,
                  o = e / t.minDataValue,
                  n = v(t.minSize, r, i),
                  l = v(t.maxSize, r, i);
                let u = null;
                return (
                  (u =
                    'circle' === s
                      ? 2 * Math.sqrt(o * (n / 2) ** 2)
                      : 'square' === s || 'diamond' === s || 'image' === s
                      ? Math.sqrt(o * n ** 2)
                      : o * n),
                  b(u, n, l)
                );
              })(e, t, r, i);
            case u.hL.Stops:
              return (function (e, t, r, i, s) {
                const [o, n, a] = C(e, s);
                if (o === n) return v(t.stops[o].size, r, i);
                {
                  const e = v(t.stops[o].size, r, i);
                  return e + (v(t.stops[n].size, r, i) - e) * a;
                }
              })(e, t, r, i, s);
            case u.hL.RealWorldSize:
              return (function (e, t, r, i) {
                const s =
                    ((0, a.pC)(i) && i.resolution ? i.resolution : 1) *
                    l.a[t.valueUnit],
                  o = v(t.minSize, r, i),
                  n = v(t.maxSize, r, i),
                  { valueRepresentation: u } = t;
                let p = null;
                return (
                  (p =
                    'area' === u
                      ? (2 * Math.sqrt(e / d)) / s
                      : 'radius' === u || 'distance' === u
                      ? (2 * e) / s
                      : e / s),
                  b(p, o, n)
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
              s = i ? null : t,
              o = s && s.attributes;
            let n = i ? t : null;
            const { isScaleDriven: l } = e.cache;
            let c = e.cache.compiledFunc;
            if (l) {
              const t = (0, a.pC)(r) ? r.scale : void 0,
                i = (0, a.pC)(r) ? r.view : void 0;
              n =
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
                    l = i.createExecContext(s, o);
                  if (!c) {
                    const t = i.createSyntaxTree(e.valueExpression);
                    (c = i.createFunction(t)), (e.cache.compiledFunc = c);
                  }
                  n = i.executeFunction(c, l);
                  break;
                }
                case u.RY.Field:
                  o && (n = o[e.field]);
                  break;
                case u.RY.Unknown:
                  n = null;
              }
            if (!(0, u.qh)(n)) return null;
            if (i || !e.normalizationField) return n;
            const d = o ? parseFloat(o[e.normalizationField]) : null;
            return (0, u.qh)(d) && 0 !== d ? n / d : null;
          })(i, t, r),
          i,
          t,
          r,
          i.cache.ipData,
        );
        return null == s || isNaN(s) ? 0 : s;
      }
      function v(e, t, r) {
        return null == e
          ? null
          : (0, u.iY)(e)
          ? g(e, t, r)
          : (0, u.qh)(e)
          ? e
          : null;
      }
      function b(e, t, r) {
        return (0, u.qh)(r) && e > r ? r : (0, u.qh)(t) && e < t ? t : e;
      }
      function w(e, t, r) {
        const { isScaleDriven: i } = e.cache;
        if (!((i && '3d' === r) || t)) return null;
        const s = { scale: t, view: r };
        let o = v(e.minSize, c, s),
          n = v(e.maxSize, c, s);
        if (null != o || null != n) {
          if (o > n) {
            const e = n;
            (n = o), (o = e);
          }
          return { minSize: o, maxSize: n };
        }
      }
      function C(e, t) {
        if (!t) return;
        let r = 0,
          i = t.length - 1;
        return (
          t.some((t, s) => (e < t ? ((i = s), !0) : ((r = s), !1))),
          [r, i, (e - t[r]) / (t[i] - t[r])]
        );
      }
      function _(e, t, r) {
        const i = ['proportional', 'proportional', 'proportional'];
        for (const s of e) {
          const e = s.useSymbolValue ? 'symbol-value' : g(s, t, r);
          switch (s.axis) {
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
              (0, o.Bg)(s.axis);
          }
        }
        return i;
      }
    },
  },
]);
