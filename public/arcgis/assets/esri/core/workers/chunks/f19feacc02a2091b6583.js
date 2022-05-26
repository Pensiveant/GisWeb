'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [9254],
  {
    49254: (e, t, r) => {
      r.r(t), r.d(t, { default: () => J });
      var i = r(43697),
        s = r(51773),
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
        a = r(3172),
        n = r(80539),
        l = r(20102),
        p = r(92604),
        d = r(70586),
        y = r(16453),
        u = r(95330),
        c = r(17445),
        h = r(17452),
        f = r(5600),
        g = (r(67676), r(80442), r(1153)),
        b = (r(75215), r(71715)),
        m = r(52011),
        v = r(31263),
        I = r(29600),
        _ = r(54295),
        w = r(17287),
        C = r(38009),
        L = r(16859),
        F = r(72965),
        S = r(32271),
        j = r(15506),
        E = r(21506),
        O = r(61960),
        T = r(85857),
        x = r(14147),
        P = r(53518),
        A = r(99514),
        D = r(35671),
        R = r(51161),
        Z = r(2319),
        N = r(30707),
        U = r(56765),
        q = r(96674);
      let Q = class extends q.wq {
        constructor() {
          super(...arguments),
            (this.name = null),
            (this.field = null),
            (this.currentRangeExtent = null),
            (this.fullRangeExtent = null),
            (this.type = 'rangeInfo');
        }
      };
      (0, i._)(
        [(0, f.Cb)({ type: String, json: { read: !0, write: !0 } })],
        Q.prototype,
        'name',
        void 0,
      ),
        (0, i._)(
          [(0, f.Cb)({ type: String, json: { read: !0, write: !0 } })],
          Q.prototype,
          'field',
          void 0,
        ),
        (0, i._)(
          [(0, f.Cb)({ type: [Number], json: { read: !0, write: !0 } })],
          Q.prototype,
          'currentRangeExtent',
          void 0,
        ),
        (0, i._)(
          [(0, f.Cb)({ type: [Number], json: { read: !0, write: !0 } })],
          Q.prototype,
          'fullRangeExtent',
          void 0,
        ),
        (0, i._)(
          [
            (0, f.Cb)({
              type: ['rangeInfo'],
              readOnly: !0,
              json: { read: !1, write: !0 },
            }),
          ],
          Q.prototype,
          'type',
          void 0,
        ),
        (Q = (0, i._)([(0, m.j)('esri.layers.support.RangeInfo')], Q));
      const k = Q;
      var V = r(40555),
        G = r(57444),
        W = r(32163),
        K = r(65242);
      const M = ['3DObject', 'Point'],
        Y = p.Z.getLogger('esri.layers.SceneLayer'),
        $ = (0, P.v)();
      let z = class extends (0, S.Vt)(
        (0, w.Y)((0, C.q)((0, L.I)((0, F.M)((0, y.R)((0, _.V)(I.Z)))))),
      ) {
        constructor(...e) {
          super(...e),
            (this.featureReduction = null),
            (this.rangeInfos = null),
            (this.operationalLayerType = 'ArcGISSceneServiceLayer'),
            (this.type = 'scene'),
            (this.fields = null),
            (this.floorInfo = null),
            (this.outFields = null),
            (this.nodePages = null),
            (this.materialDefinitions = null),
            (this.textureSetDefinitions = null),
            (this.geometryDefinitions = null),
            (this.serviceUpdateTimeStamp = null),
            (this.excludeObjectIds = new n.Z()),
            (this.definitionExpression = null),
            (this.path = null),
            (this.labelsVisible = !0),
            (this.labelingInfo = null),
            (this.legendEnabled = !0),
            (this.cachedDrawingInfo = { color: !1 }),
            (this.popupEnabled = !0),
            (this.popupTemplate = null),
            (this.objectIdField = null),
            (this.globalIdField = null),
            (this._fieldUsageInfo = {}),
            (this.screenSizePerspectiveEnabled = !0);
        }
        normalizeCtorArgs(e, t) {
          return 'string' == typeof e ? { url: e, ...t } : e;
        }
        getField(e) {
          return this.fieldsIndex.get(e);
        }
        getFieldDomain(e, t) {
          var r, i, s, o;
          const a =
            null == (r = this.getFeatureType(null == t ? void 0 : t.feature)) ||
            null == (i = r.domains)
              ? void 0
              : i[e];
          return a && 'inherited' !== a.type
            ? a
            : null != (s = null == (o = this.getField(e)) ? void 0 : o.domain)
            ? s
            : null;
        }
        getFeatureType(e) {
          return e && (0, d.pC)(this.associatedLayer)
            ? this.associatedLayer.getFeatureType(e)
            : null;
        }
        get types() {
          return (0, d.pC)(this.associatedLayer)
            ? this.associatedLayer.types
            : [];
        }
        get typeIdField() {
          return (0, d.pC)(this.associatedLayer)
            ? this.associatedLayer.typeIdField
            : null;
        }
        get formTemplate() {
          return (0, d.pC)(this.associatedLayer)
            ? this.associatedLayer.formTemplate
            : null;
        }
        get fieldsIndex() {
          return new A.Z(this.fields);
        }
        readNodePages(e, t, r) {
          return (
            'Point' === t.layerType && (e = t.pointNodePages),
            null == e || 'object' != typeof e ? null : R.U4.fromJSON(e, r)
          );
        }
        set elevationInfo(e) {
          this._set('elevationInfo', e),
            this.loaded && this._validateElevationInfo();
        }
        get geometryType() {
          return B[this.profile] || 'mesh';
        }
        set renderer(e) {
          (0, D.YN)(e, this.fieldsIndex), this._set('renderer', e);
        }
        readCachedDrawingInfo(e) {
          return (
            (null != e && 'object' == typeof e) || (e = {}),
            null == e.color && (e.color = !1),
            e
          );
        }
        get capabilities() {
          const e =
              (0, d.pC)(this.associatedLayer) &&
              this.associatedLayer.capabilities
                ? this.associatedLayer.capabilities
                : j.C,
            {
              query: t,
              editing: {
                supportsGlobalId: r,
                supportsRollbackOnFailure: i,
                supportsUploadWithItemId: s,
                supportsReturnServiceEditsInSourceSpatialReference: o,
              },
              data: {
                supportsZ: a,
                supportsM: n,
                isVersioned: l,
                supportsAttachment: p,
              },
              operations: {
                supportsEditing: y,
                supportsUpdate: u,
                supportsQuery: c,
                supportsQueryAttachments: h,
              },
            } = e,
            f = e.operations.supportsChangeTracking;
          return {
            query: t,
            editing: {
              supportsGlobalId: r,
              supportsReturnServiceEditsInSourceSpatialReference: o,
              supportsRollbackOnFailure: i,
              supportsGeometryUpdate: !1,
              supportsUploadWithItemId: s,
            },
            data: {
              supportsAttachment: p,
              supportsZ: a,
              supportsM: n,
              isVersioned: l,
            },
            operations: {
              supportsQuery: c,
              supportsQueryAttachments: h,
              supportsEditing: y && f,
              supportsAdd: !1,
              supportsDelete: !1,
              supportsUpdate: u && f,
            },
          };
        }
        get editingEnabled() {
          return this._isOverridden('editingEnabled')
            ? this._get('editingEnabled')
            : this.userHasEditingPrivileges;
        }
        set editingEnabled(e) {
          null != e
            ? this._override('editingEnabled', e)
            : this._clearOverride('editingEnabled');
        }
        get defaultPopupTemplate() {
          return (0, d.pC)(this.associatedLayer) || this.attributeStorageInfo
            ? this.createPopupTemplate()
            : null;
        }
        readObjectIdField(e, t) {
          return (
            !e &&
              t.fields &&
              t.fields.some(
                (t) => ('esriFieldTypeOID' === t.type && (e = t.name), !!e),
              ),
            e || void 0
          );
        }
        readGlobalIdField(e, t) {
          return (
            !e &&
              t.fields &&
              t.fields.some(
                (t) => (
                  'esriFieldTypeGlobalID' === t.type && (e = t.name), !!e
                ),
              ),
            e || void 0
          );
        }
        get displayField() {
          return (0, d.pC)(this.associatedLayer)
            ? this.associatedLayer.displayField
            : null;
        }
        readProfile(e, t) {
          const r = t.store.profile;
          return null != r && H[r]
            ? H[r]
            : (Y.error('Unknown or missing profile', {
                profile: r,
                layer: this,
              }),
              'mesh-pyramids');
        }
        load(e) {
          const t = (0, d.pC)(e) ? e.signal : null,
            r = this.loadFromPortal({ supportedTypes: ['Scene Service'] }, e)
              .catch(u.r9)
              .then(() => this._fetchService(t))
              .then(() =>
                Promise.all([
                  this._fetchIndexAndUpdateExtent(this.nodePages, t),
                  this._setAssociatedFeatureLayer(t),
                ]),
              )
              .then(() => this._validateElevationInfo())
              .then(() => this._applyAssociatedLayerOverrides())
              .then(() => this._populateFieldUsageInfo())
              .then(() => (0, V.y)(this, { origin: 'service' }, t))
              .then(() => (0, D.YN)(this.renderer, this.fieldsIndex))
              .then(() => this.finishLoadEditablePortalLayer(e));
          return this.addResolvingPromise(r), Promise.resolve(this);
        }
        createQuery() {
          const e = new G.Z();
          return (
            'mesh' !== this.geometryType &&
              ((e.returnGeometry = !0), (e.returnZ = !0)),
            (e.where = this.definitionExpression || '1=1'),
            (e.sqlFormat = 'standard'),
            e
          );
        }
        queryExtent(e, t) {
          return this._getAssociatedLayerForQuery().then((r) =>
            r.queryExtent(e || this.createQuery(), t),
          );
        }
        queryFeatureCount(e, t) {
          return this._getAssociatedLayerForQuery().then((r) =>
            r.queryFeatureCount(e || this.createQuery(), t),
          );
        }
        queryFeatures(e, t) {
          return this._getAssociatedLayerForQuery()
            .then((r) => r.queryFeatures(e || this.createQuery(), t))
            .then((e) => {
              if (null != e && e.features)
                for (const t of e.features)
                  (t.layer = this), (t.sourceLayer = this);
              return e;
            });
        }
        queryObjectIds(e, t) {
          return this._getAssociatedLayerForQuery().then((r) =>
            r.queryObjectIds(e || this.createQuery(), t),
          );
        }
        queryAttachments(e, t) {
          return this._getAssociatedLayerForQuery().then((r) =>
            r.queryAttachments(e, t),
          );
        }
        getFieldUsageInfo(e) {
          const t = {
            supportsLabelingInfo: !1,
            supportsRenderer: !1,
            supportsPopupTemplate: !1,
            supportsLayerQuery: !1,
          };
          return this.loaded
            ? this._fieldUsageInfo[e] || t
            : (Y.error(
                '#getFieldUsageInfo()',
                'Unavailable until layer is loaded',
              ),
              t);
        }
        createPopupTemplate(e) {
          return (0, W.eZ)(this, e);
        }
        _getAssociatedLayerForQuery() {
          const e = this.associatedLayer;
          return (0, d.pC)(e) && e.loaded
            ? Promise.resolve(e)
            : this._loadAssociatedLayerForQuery();
        }
        async _loadAssociatedLayerForQuery() {
          if ((await this.load(), (0, d.Wi)(this.associatedLayer)))
            throw new l.Z(
              'scenelayer:query-not-available',
              'SceneLayer queries are not available without an associated feature layer',
              { layer: this },
            );
          try {
            await this.associatedLayer.load();
          } catch (e) {
            throw new l.Z(
              'scenelayer:query-not-available',
              'SceneLayer associated feature layer could not be loaded',
              { layer: this, error: e },
            );
          }
          return this.associatedLayer;
        }
        hasCachedStatistics(e) {
          return (
            null != this.statisticsInfo &&
            this.statisticsInfo.some((t) => t.name === e)
          );
        }
        async queryCachedStatistics(e, t) {
          if ((await this.load(t), !this.statisticsInfo))
            throw new l.Z(
              'scenelayer:no-cached-statistics',
              'Cached statistics are not available for this layer',
            );
          const r = this.fieldsIndex.get(e);
          if (!r)
            throw new l.Z(
              'scenelayer:field-unexisting',
              `Field '${e}' does not exist on the layer`,
            );
          for (const e of this.statisticsInfo)
            if (e.name === r.name) {
              const r = (0, h.v_)(this.parsedUrl.path, e.href);
              return (0, a.default)(r, {
                query: { f: 'json', token: this.apiKey },
                responseType: 'json',
                signal: t ? t.signal : null,
              }).then((e) => e.data);
            }
          throw new l.Z(
            'scenelayer:no-cached-statistics',
            'Cached statistics for this attribute are not available',
          );
        }
        async saveAs(e, t) {
          return this._debouncedSaveOperations(
            S.xp.SAVE_AS,
            {
              ...t,
              getTypeKeywords: () => this._getTypeKeywords(),
              portalItemLayerType: 'scene',
            },
            e,
          );
        }
        async save() {
          const e = {
            getTypeKeywords: () => this._getTypeKeywords(),
            portalItemLayerType: 'scene',
          };
          return this._debouncedSaveOperations(S.xp.SAVE, e);
        }
        async applyEdits(e, t) {
          const i = await r.e(4720).then(r.bind(r, 14720));
          if ((await this.load(), (0, d.Wi)(this.associatedLayer)))
            throw new l.Z(
              `${this.type}-layer:not-editable`,
              'Service is not editable',
            );
          return (
            await this.associatedLayer.load(),
            i.applyEdits(this, this.associatedLayer.source, e, t)
          );
        }
        on(e, t) {
          return super.on(e, t);
        }
        validateLayer(e) {
          if (e.layerType && -1 === M.indexOf(e.layerType))
            throw new l.Z(
              'scenelayer:layer-type-not-supported',
              'SceneLayer does not support this layer type',
              { layerType: e.layerType },
            );
          if (isNaN(this.version.major) || isNaN(this.version.minor))
            throw new l.Z(
              'layer:service-version-not-supported',
              'Service version is not supported.',
              {
                serviceVersion: this.version.versionString,
                supportedVersions: '1.x, 2.x',
              },
            );
          if (this.version.major > 2)
            throw new l.Z(
              'layer:service-version-too-new',
              'Service version is too new.',
              {
                serviceVersion: this.version.versionString,
                supportedVersions: '1.x, 2.x',
              },
            );
          !(function (e, t) {
            let r = !1,
              i = !1;
            if (null == e) (r = !0), (i = !0);
            else {
              const s = t && t.isGeographic;
              switch (e) {
                case 'east-north-up':
                case 'earth-centered':
                  (r = !0), (i = s);
                  break;
                case 'vertex-reference-frame':
                  (r = !0), (i = !s);
                  break;
                default:
                  r = !1;
              }
            }
            if (!r)
              throw new l.Z(
                'scenelayer:unsupported-normal-reference-frame',
                'Normal reference frame is invalid.',
              );
            if (!i)
              throw new l.Z(
                'scenelayer:incompatible-normal-reference-frame',
                'Normal reference frame is incompatible with layer spatial reference.',
              );
          })(this.normalReferenceFrame, this.spatialReference);
        }
        _getTypeKeywords() {
          const e = [];
          if ('points' === this.profile) e.push('Point');
          else {
            if ('mesh-pyramids' !== this.profile)
              throw new l.Z(
                'scenelayer:unknown-profile',
                'SceneLayer:save() encountered an unknown SceneLayer profile: ' +
                  this.profile,
              );
            e.push('3DObject');
          }
          return e;
        }
        _populateFieldUsageInfo() {
          if (((this._fieldUsageInfo = {}), this.fields))
            for (const e of this.fields) {
              const t = !(
                  !this.attributeStorageInfo ||
                  !this.attributeStorageInfo.some((t) => t.name === e.name)
                ),
                r = !!(
                  (0, d.pC)(this.associatedLayer) &&
                  this.associatedLayer.fields &&
                  this.associatedLayer.fields.some(
                    (t) => t && e.name === t.name,
                  )
                ),
                i = {
                  supportsLabelingInfo: t,
                  supportsRenderer: t,
                  supportsPopupTemplate: t || r,
                  supportsLayerQuery: r,
                };
              this._fieldUsageInfo[e.name] = i;
            }
        }
        _applyAssociatedLayerOverrides() {
          this._applyAssociatedLayerFieldsOverrides(),
            this._applyAssociatedLayerPopupOverrides();
        }
        _applyAssociatedLayerFieldsOverrides() {
          if ((0, d.Wi)(this.associatedLayer) || !this.associatedLayer.fields)
            return;
          let e = null;
          for (const t of this.associatedLayer.fields) {
            const r = this.getField(t.name);
            r
              ? (!r.domain && t.domain && (r.domain = t.domain.clone()),
                (r.editable = t.editable),
                (r.nullable = t.nullable),
                (r.length = t.length))
              : (e || (e = this.fields ? this.fields.slice() : []),
                e.push(t.clone()));
          }
          e && this._set('fields', e);
        }
        _applyAssociatedLayerPopupOverrides() {
          if ((0, d.Wi)(this.associatedLayer)) return;
          const e = ['popupTemplate', 'popupEnabled'],
            t = (0, g.vw)(this);
          for (let r = 0; r < e.length; r++) {
            const i = e[r],
              s = this.originIdOf(i),
              o = this.associatedLayer.originIdOf(i);
            s < o &&
              (o === v.s3.SERVICE || o === v.s3.PORTAL_ITEM) &&
              t.setAtOrigin(i, this.associatedLayer[i], o);
          }
        }
        async _setAssociatedFeatureLayer(e) {
          if (-1 === ['mesh-pyramids', 'points'].indexOf(this.profile)) return;
          const t = new x.W(this.parsedUrl, this.portalItem, this.apiKey, e);
          try {
            this.associatedLayer = await t.fetch();
          } catch (e) {
            (0, u.D_)(e) || this._logWarningOnPopupEnabled();
          }
        }
        async _logWarningOnPopupEnabled() {
          await (0, c.N1)(
            () => this.popupEnabled && null != this.popupTemplate,
          );
          const e = `this SceneLayer: ${this.title}`;
          null == this.attributeStorageInfo
            ? Y.warn(
                `Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ${e}`,
              )
            : Y.info(
                `Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ${e}`,
              );
        }
        _validateElevationInfo() {
          const e = this.elevationInfo;
          e &&
            ('mesh-pyramids' === this.profile &&
              'absolute-height' !== e.mode &&
              Y.warn(
                '.elevationInfo=',
                'Mesh scene layers only support absolute-height elevation mode',
              ),
            e.featureExpressionInfo &&
              '0' !== e.featureExpressionInfo.expression &&
              Y.warn(
                '.elevationInfo=',
                'Scene layers do not support featureExpressionInfo',
              ));
        }
      };
      (0, i._)(
        [
          (0, f.Cb)({
            types: { key: 'type', base: O.Z, typeMap: { selection: T.Z } },
            json: {
              origins: {
                'web-scene': {
                  name: 'layerDefinition.featureReduction',
                  write: !0,
                },
                'portal-item': {
                  name: 'layerDefinition.featureReduction',
                  write: !0,
                },
              },
            },
          }),
        ],
        z.prototype,
        'featureReduction',
        void 0,
      ),
        (0, i._)(
          [
            (0, f.Cb)({
              type: [k],
              json: {
                read: !1,
                origins: {
                  'web-scene': {
                    name: 'layerDefinition.rangeInfos',
                    write: !0,
                  },
                  'portal-item': {
                    name: 'layerDefinition.rangeInfos',
                    write: !0,
                  },
                },
              },
            }),
          ],
          z.prototype,
          'rangeInfos',
          void 0,
        ),
        (0, i._)(
          [(0, f.Cb)({ json: { read: !1 } })],
          z.prototype,
          'associatedLayer',
          void 0,
        ),
        (0, i._)(
          [(0, f.Cb)({ type: ['show', 'hide'] })],
          z.prototype,
          'listMode',
          void 0,
        ),
        (0, i._)(
          [(0, f.Cb)({ type: ['ArcGISSceneServiceLayer'] })],
          z.prototype,
          'operationalLayerType',
          void 0,
        ),
        (0, i._)(
          [(0, f.Cb)({ json: { read: !1 }, readOnly: !0 })],
          z.prototype,
          'type',
          void 0,
        ),
        (0, i._)(
          [
            (0, f.Cb)({
              ...$.fields,
              readOnly: !0,
              json: { read: !1, origins: { service: { read: !0 } } },
            }),
          ],
          z.prototype,
          'fields',
          void 0,
        ),
        (0, i._)([(0, f.Cb)()], z.prototype, 'types', null),
        (0, i._)([(0, f.Cb)()], z.prototype, 'typeIdField', null),
        (0, i._)([(0, f.Cb)()], z.prototype, 'formTemplate', null),
        (0, i._)(
          [(0, f.Cb)({ readOnly: !0 })],
          z.prototype,
          'fieldsIndex',
          null,
        ),
        (0, i._)(
          [
            (0, f.Cb)({
              type: U.Z,
              json: {
                read: { source: 'layerDefinition.floorInfo' },
                write: { target: 'layerDefinition.floorInfo' },
              },
            }),
          ],
          z.prototype,
          'floorInfo',
          void 0,
        ),
        (0, i._)([(0, f.Cb)($.outFields)], z.prototype, 'outFields', void 0),
        (0, i._)(
          [(0, f.Cb)({ type: R.U4, readOnly: !0, json: { read: !1 } })],
          z.prototype,
          'nodePages',
          void 0,
        ),
        (0, i._)(
          [(0, b.r)('service', 'nodePages', ['nodePages', 'pointNodePages'])],
          z.prototype,
          'readNodePages',
          null,
        ),
        (0, i._)(
          [(0, f.Cb)({ type: [R.QI], readOnly: !0 })],
          z.prototype,
          'materialDefinitions',
          void 0,
        ),
        (0, i._)(
          [(0, f.Cb)({ type: [R.Yh], readOnly: !0 })],
          z.prototype,
          'textureSetDefinitions',
          void 0,
        ),
        (0, i._)(
          [(0, f.Cb)({ type: [R.H3], readOnly: !0 })],
          z.prototype,
          'geometryDefinitions',
          void 0,
        ),
        (0, i._)(
          [(0, f.Cb)({ readOnly: !0 })],
          z.prototype,
          'serviceUpdateTimeStamp',
          void 0,
        ),
        (0, i._)(
          [(0, f.Cb)({ readOnly: !0 })],
          z.prototype,
          'attributeStorageInfo',
          void 0,
        ),
        (0, i._)(
          [(0, f.Cb)({ readOnly: !0 })],
          z.prototype,
          'statisticsInfo',
          void 0,
        ),
        (0, i._)(
          [
            (0, f.Cb)({
              type: n.Z.ofType(Number),
              nonNullable: !0,
              json: {
                origins: { service: { read: !1, write: !1 } },
                name: 'layerDefinition.excludeObjectIds',
                write: { enabled: !0 },
              },
            }),
          ],
          z.prototype,
          'excludeObjectIds',
          void 0,
        ),
        (0, i._)(
          [
            (0, f.Cb)({
              type: String,
              json: {
                origins: { service: { read: !1, write: !1 } },
                name: 'layerDefinition.definitionExpression',
                write: { enabled: !0, allowNull: !0 },
              },
            }),
          ],
          z.prototype,
          'definitionExpression',
          void 0,
        ),
        (0, i._)(
          [
            (0, f.Cb)({
              type: String,
              json: {
                origins: { 'web-scene': { read: !0, write: !0 } },
                read: !1,
              },
            }),
          ],
          z.prototype,
          'path',
          void 0,
        ),
        (0, i._)([(0, f.Cb)(E.PV)], z.prototype, 'elevationInfo', null),
        (0, i._)(
          [(0, f.Cb)({ type: String })],
          z.prototype,
          'geometryType',
          null,
        ),
        (0, i._)([(0, f.Cb)(E.iR)], z.prototype, 'labelsVisible', void 0),
        (0, i._)(
          [
            (0, f.Cb)({
              type: [Z.Z],
              json: {
                origins: {
                  service: {
                    name: 'drawingInfo.labelingInfo',
                    read: { reader: N.r },
                    write: !1,
                  },
                },
                name: 'layerDefinition.drawingInfo.labelingInfo',
                read: { reader: N.r },
                write: !0,
              },
            }),
          ],
          z.prototype,
          'labelingInfo',
          void 0,
        ),
        (0, i._)([(0, f.Cb)(E.rn)], z.prototype, 'legendEnabled', void 0),
        (0, i._)(
          [
            (0, f.Cb)({
              type: Number,
              json: {
                origins: {
                  'web-document': {
                    default: 1,
                    write: {
                      enabled: !0,
                      target: {
                        opacity: { type: Number },
                        'layerDefinition.drawingInfo.transparency': {
                          type: Number,
                        },
                      },
                    },
                    read: {
                      source: [
                        'opacity',
                        'layerDefinition.drawingInfo.transparency',
                      ],
                      reader(e, t) {
                        var r, i;
                        if ('number' == typeof e && e >= 0 && e <= 1) return e;
                        const s =
                          null == (r = t.layerDefinition) ||
                          null == (i = r.drawingInfo)
                            ? void 0
                            : i.transparency;
                        return void 0 !== s ? (0, K.b)(s) : void 0;
                      },
                    },
                  },
                  'portal-item': { write: !0 },
                  service: { read: !1 },
                },
              },
            }),
          ],
          z.prototype,
          'opacity',
          void 0,
        ),
        (0, i._)(
          [
            (0, f.Cb)({
              types: o.o,
              json: {
                origins: {
                  service: { read: { source: 'drawingInfo.renderer' } },
                },
                name: 'layerDefinition.drawingInfo.renderer',
                write: !0,
              },
              value: null,
            }),
          ],
          z.prototype,
          'renderer',
          null,
        ),
        (0, i._)(
          [(0, f.Cb)({ json: { read: !1 } })],
          z.prototype,
          'cachedDrawingInfo',
          void 0,
        ),
        (0, i._)(
          [(0, b.r)('service', 'cachedDrawingInfo')],
          z.prototype,
          'readCachedDrawingInfo',
          null,
        ),
        (0, i._)(
          [(0, f.Cb)({ readOnly: !0, json: { read: !1 } })],
          z.prototype,
          'capabilities',
          null,
        ),
        (0, i._)(
          [(0, f.Cb)({ type: Boolean, json: { read: !1 } })],
          z.prototype,
          'editingEnabled',
          null,
        ),
        (0, i._)([(0, f.Cb)(E.C_)], z.prototype, 'popupEnabled', void 0),
        (0, i._)(
          [(0, f.Cb)({ type: s.Z, json: { name: 'popupInfo', write: !0 } })],
          z.prototype,
          'popupTemplate',
          void 0,
        ),
        (0, i._)(
          [(0, f.Cb)({ readOnly: !0, json: { read: !1 } })],
          z.prototype,
          'defaultPopupTemplate',
          null,
        ),
        (0, i._)(
          [(0, f.Cb)({ type: String, json: { read: !1 } })],
          z.prototype,
          'objectIdField',
          void 0,
        ),
        (0, i._)(
          [(0, b.r)('service', 'objectIdField', ['objectIdField', 'fields'])],
          z.prototype,
          'readObjectIdField',
          null,
        ),
        (0, i._)(
          [(0, f.Cb)({ type: String, json: { read: !1 } })],
          z.prototype,
          'globalIdField',
          void 0,
        ),
        (0, i._)(
          [(0, b.r)('service', 'globalIdField', ['globalIdField', 'fields'])],
          z.prototype,
          'readGlobalIdField',
          null,
        ),
        (0, i._)(
          [(0, f.Cb)({ readOnly: !0, type: String, json: { read: !1 } })],
          z.prototype,
          'displayField',
          null,
        ),
        (0, i._)(
          [(0, f.Cb)({ type: String, json: { read: !1 } })],
          z.prototype,
          'profile',
          void 0,
        ),
        (0, i._)(
          [(0, b.r)('service', 'profile', ['store.profile'])],
          z.prototype,
          'readProfile',
          null,
        ),
        (0, i._)(
          [
            (0, f.Cb)({
              readOnly: !0,
              type: String,
              json: {
                origins: {
                  service: { read: { source: 'store.normalReferenceFrame' } },
                },
                read: !1,
              },
            }),
          ],
          z.prototype,
          'normalReferenceFrame',
          void 0,
        ),
        (0, i._)(
          [(0, f.Cb)(E.YI)],
          z.prototype,
          'screenSizePerspectiveEnabled',
          void 0,
        ),
        (z = (0, i._)([(0, m.j)('esri.layers.SceneLayer')], z));
      const H = {
          'mesh-pyramids': 'mesh-pyramids',
          meshpyramids: 'mesh-pyramids',
          'features-meshes': 'mesh-pyramids',
          points: 'points',
          'features-points': 'points',
          lines: 'lines',
          'features-lines': 'lines',
          polygons: 'polygons',
          'features-polygons': 'polygons',
        },
        B = {
          'mesh-pyramids': 'mesh',
          points: 'point',
          lines: 'polyline',
          polygons: 'polygon',
        },
        J = z;
    },
  },
]);
