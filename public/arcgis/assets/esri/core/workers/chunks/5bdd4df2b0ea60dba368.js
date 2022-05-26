'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [223],
  {
    57435: (e, t, r) => {
      r.d(t, { Z: () => d });
      var i = r(43697),
        s = r(80539),
        o = r(3920),
        l = r(70586),
        n = (r(20102), r(92604), r(26258), r(87538)),
        a = r(5600),
        p = (r(67676), r(80442), r(75215), r(52011));
      let y = class extends (0, o.p)(s.Z) {
        constructor(e) {
          super(e), (this.getCollections = null);
        }
        initialize() {
          this.handles.add((0, n.EH)(() => this._refresh()));
        }
        destroy() {
          this.getCollections = null;
        }
        _refresh() {
          const e = (0, l.pC)(this.getCollections)
            ? this.getCollections()
            : null;
          if ((0, l.Wi)(e)) return void this.removeAll();
          let t = 0;
          for (const r of e)
            (0, l.pC)(r) && (t = this._processCollection(t, r));
          this.splice(t, this.length);
        }
        _createNewInstance(e) {
          return new s.Z(e);
        }
        _processCollection(e, t) {
          if (!t) return e;
          const r = this.itemFilterFunction
            ? this.itemFilterFunction
            : (e) => !!e;
          for (const i of t)
            if (i) {
              if (r(i)) {
                const t = this.indexOf(i, e);
                t >= 0 ? t !== e && this.reorder(i, e) : this.add(i, e), ++e;
              }
              if (this.getChildrenFunction) {
                const t = this.getChildrenFunction(i);
                if (Array.isArray(t))
                  for (const r of t) e = this._processCollection(e, r);
                else e = this._processCollection(e, t);
              }
            }
          return e;
        }
      };
      (0, i._)([(0, a.Cb)()], y.prototype, 'getCollections', void 0),
        (0, i._)([(0, a.Cb)()], y.prototype, 'getChildrenFunction', void 0),
        (0, i._)([(0, a.Cb)()], y.prototype, 'itemFilterFunction', void 0),
        (y = (0, i._)([(0, p.j)('esri.core.CollectionFlattener')], y));
      const d = y;
    },
    68668: (e, t, r) => {
      r.d(t, { G: () => n, w: () => a });
      var i = r(66643),
        s = r(80539),
        o = r(83379),
        l = r(70586);
      async function n(e, t) {
        return await e.load(), a(e, t);
      }
      async function a(e, t) {
        const r = [],
          n = (...e) => {
            for (const t of e)
              (0, l.Wi)(t) ||
                (Array.isArray(t)
                  ? n(...t)
                  : s.Z.isCollection(t)
                  ? t.forEach((e) => n(e))
                  : o.Z.isLoadable(t) && r.push(t));
          };
        t(n);
        let a = null;
        if (
          (await (0, i.UI)(r, async (e) => {
            !1 !==
              (
                await (0, i.q6)(
                  (function (e) {
                    return 'loadAll' in e && 'function' == typeof e.loadAll;
                  })(e)
                    ? e.loadAll()
                    : e.load(),
                )
              ).ok ||
              a ||
              (a = e);
          }),
          a)
        )
          throw a.loadError;
        return e;
      }
    },
    30223: (e, t, r) => {
      r.r(t), r.d(t, { default: () => We });
      var i = r(43697),
        s = r(80539),
        o = r(57435),
        l = r(20102),
        n = r(22974),
        a = r(68668),
        p = r(92604),
        y = r(70586),
        d = r(16453),
        u = r(95330),
        c = r(17452),
        h = r(5600),
        b = r(75215),
        f = r(71715),
        g = r(52011),
        v = r(82971),
        m = r(29600),
        _ = r(51773),
        C =
          (r(16050),
          r(12501),
          r(95088),
          r(79056),
          r(5499),
          r(84382),
          r(30687),
          r(91423),
          r(32400)),
        w = r(3172),
        S = r(35454),
        j = r(83379),
        F = r(609),
        O = (r(67676), r(80442), r(36030)),
        x = r(6570),
        I = r(67284),
        L = r(10699),
        T = r(21506);
      let A = class extends (0, L.I)(d.w) {
        constructor(e) {
          super(e),
            (this.title = ''),
            (this.id = -1),
            (this.modelName = null),
            (this.isEmpty = null),
            (this.visible = !0),
            (this.opacity = 1);
        }
        readTitle(e, t) {
          return 'string' == typeof t.alias
            ? t.alias
            : 'string' == typeof t.name
            ? t.name
            : '';
        }
        readIdOnlyOnce(e) {
          return -1 !== this.id ? this.id : 'number' == typeof e ? e : void 0;
        }
      };
      (0, i._)(
        [
          (0, h.Cb)({
            type: String,
            json: {
              origins: {
                'web-scene': { write: !0 },
                'portal-item': { write: !0 },
              },
            },
          }),
        ],
        A.prototype,
        'title',
        void 0,
      ),
        (0, i._)(
          [(0, f.r)('service', 'title', ['alias', 'name'])],
          A.prototype,
          'readTitle',
          null,
        ),
        (0, i._)([(0, h.Cb)()], A.prototype, 'layer', void 0),
        (0, i._)(
          [
            (0, h.Cb)({
              type: b.z8,
              readOnly: !0,
              json: { read: !1, write: { ignoreOrigin: !0 } },
            }),
          ],
          A.prototype,
          'id',
          void 0,
        ),
        (0, i._)(
          [(0, f.r)('service', 'id')],
          A.prototype,
          'readIdOnlyOnce',
          null,
        ),
        (0, i._)(
          [(0, h.Cb)((0, T.Lx)(String))],
          A.prototype,
          'modelName',
          void 0,
        ),
        (0, i._)(
          [(0, h.Cb)((0, T.Lx)(Boolean))],
          A.prototype,
          'isEmpty',
          void 0,
        ),
        (0, i._)(
          [
            (0, h.Cb)({
              type: Boolean,
              json: { name: 'visibility', write: !0 },
            }),
          ],
          A.prototype,
          'visible',
          void 0,
        ),
        (0, i._)(
          [(0, h.Cb)({ type: Number, json: { write: !0 } })],
          A.prototype,
          'opacity',
          void 0,
        ),
        (A = (0, i._)(
          [(0, g.j)('esri.layers.buildingSublayers.BuildingSublayer')],
          A,
        ));
      const B = A;
      var q = r(15506),
        E = r(53518),
        Z = r(99514),
        R = r(61064),
        N = r(51161),
        k = r(57444),
        P = r(32163),
        M = r(20682);
      const U = p.Z.getLogger(
          'esri.layers.buildingSublayers.BuildingComponentSublayer',
        ),
        Q = (0, E.v)();
      let D = class extends j.Z.LoadableMixin((0, F.v)(B)) {
        constructor(e) {
          super(e),
            (this.type = 'building-component'),
            (this.nodePages = null),
            (this.materialDefinitions = null),
            (this.textureSetDefinitions = null),
            (this.geometryDefinitions = null),
            (this.serviceUpdateTimeStamp = null),
            (this.fields = null),
            (this.associatedLayer = null),
            (this.outFields = null),
            (this.listMode = 'show'),
            (this.renderer = null),
            (this.definitionExpression = null),
            (this.popupEnabled = !0),
            (this.popupTemplate = null),
            (this.layerType = '3d-object');
        }
        get parsedUrl() {
          return this.layer
            ? {
                path: `${this.layer.parsedUrl.path}/sublayers/${this.id}`,
                query: this.layer.parsedUrl.query,
              }
            : null;
        }
        get fieldsIndex() {
          return new Z.Z(this.fields);
        }
        readAssociatedLayer(e, t) {
          const r = this.layer.associatedFeatureServiceItem,
            i = t.associatedLayerID;
          return (0, y.pC)(r) && 'number' == typeof i
            ? new I.default({ portalItem: r, layerId: i })
            : null;
        }
        get objectIdField() {
          if (null != this.fields)
            for (const e of this.fields) if ('oid' === e.type) return e.name;
          return null;
        }
        get displayField() {
          return (0, y.pC)(this.associatedLayer)
            ? this.associatedLayer.displayField
            : null;
        }
        get apiKey() {
          return this.layer.apiKey;
        }
        get fullExtent() {
          return this.layer.fullExtent;
        }
        get spatialReference() {
          return this.layer.spatialReference;
        }
        get version() {
          return this.layer.version;
        }
        get elevationInfo() {
          return this.layer.elevationInfo;
        }
        get minScale() {
          return this.layer.minScale;
        }
        get maxScale() {
          return this.layer.maxScale;
        }
        get effectiveScaleRange() {
          return this.layer.effectiveScaleRange;
        }
        get defaultPopupTemplate() {
          return this.createPopupTemplate();
        }
        load(e) {
          const t = (0, y.pC)(e) ? e.signal : null,
            r = this._fetchService(t).then(() => {
              this.indexInfo = (0, R.T)(
                this.parsedUrl.path,
                this.rootNode,
                this.nodePages,
                this.apiKey,
                U,
                t,
              );
            });
          return this.addResolvingPromise(r), Promise.resolve(this);
        }
        createPopupTemplate(e) {
          return (0, P.eZ)(this, e);
        }
        async _fetchService(e) {
          const t = (
            await (0, w.default)(this.parsedUrl.path, {
              query: { f: 'json', token: this.apiKey },
              responseType: 'json',
              signal: e,
            })
          ).data;
          this.read(t, { origin: 'service', url: this.parsedUrl });
        }
        getField(e) {
          return this.fieldsIndex.get(e);
        }
        getFieldDomain(e, t) {
          var r, i, s, o;
          const l =
            null == (r = this.getFeatureType(null == t ? void 0 : t.feature)) ||
            null == (i = r.domains)
              ? void 0
              : i[e];
          return l && 'inherited' !== l.type
            ? l
            : null != (s = null == (o = this.getField(e)) ? void 0 : o.domain)
            ? s
            : null;
        }
        getFeatureType(e) {
          return e && (0, y.pC)(this.associatedLayer)
            ? this.associatedLayer.getFeatureType(e)
            : null;
        }
        get types() {
          return (0, y.pC)(this.associatedLayer)
            ? this.associatedLayer.types
            : [];
        }
        get typeIdField() {
          return (0, y.pC)(this.associatedLayer)
            ? this.associatedLayer.typeIdField
            : null;
        }
        get geometryType() {
          return '3d-object' === this.layerType ? 'mesh' : 'point';
        }
        get profile() {
          return '3d-object' === this.layerType ? 'mesh-pyramids' : 'points';
        }
        get capabilities() {
          const e =
              (0, y.pC)(this.associatedLayer) &&
              this.associatedLayer.capabilities
                ? this.associatedLayer.capabilities
                : q.C,
            {
              query: t,
              data: { supportsZ: r, supportsM: i, isVersioned: s },
            } = e;
          return {
            query: t,
            data: { supportsZ: r, supportsM: i, isVersioned: s },
          };
        }
        createQuery() {
          const e = new k.Z();
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
                  (t.layer = this.layer), (t.sourceLayer = this);
              return e;
            });
        }
        queryObjectIds(e, t) {
          return this._getAssociatedLayerForQuery().then((r) =>
            r.queryObjectIds(e || this.createQuery(), t),
          );
        }
        getFieldUsageInfo(e) {
          return this.fieldsIndex.has(e)
            ? {
                supportsLabelingInfo: !1,
                supportsRenderer: !1,
                supportsPopupTemplate: !1,
                supportsLayerQuery: !1,
              }
            : {
                supportsLabelingInfo: !1,
                supportsRenderer: !0,
                supportsPopupTemplate: !0,
                supportsLayerQuery: (0, y.pC)(this.associatedLayer),
              };
        }
        _getAssociatedLayerForQuery() {
          const e = this.associatedLayer;
          return (0, y.pC)(e) && e.loaded
            ? Promise.resolve(e)
            : this._loadAssociatedLayerForQuery();
        }
        async _loadAssociatedLayerForQuery() {
          if ((await this.load(), (0, y.Wi)(this.associatedLayer)))
            throw new l.Z(
              'buildingscenelayer:query-not-available',
              'BuildingSceneLayer component layer queries are not available without an associated feature layer',
              { layer: this },
            );
          try {
            await this.associatedLayer.load();
          } catch (e) {
            throw new l.Z(
              'buildingscenelayer:query-not-available',
              'BuildingSceneLayer associated feature layer could not be loaded',
              { layer: this, error: e },
            );
          }
          return this.associatedLayer;
        }
      };
      (0, i._)([(0, h.Cb)({ readOnly: !0 })], D.prototype, 'parsedUrl', null),
        (0, i._)(
          [(0, h.Cb)({ type: N.U4, readOnly: !0 })],
          D.prototype,
          'nodePages',
          void 0,
        ),
        (0, i._)(
          [(0, h.Cb)({ type: [N.QI], readOnly: !0 })],
          D.prototype,
          'materialDefinitions',
          void 0,
        ),
        (0, i._)(
          [(0, h.Cb)({ type: [N.Yh], readOnly: !0 })],
          D.prototype,
          'textureSetDefinitions',
          void 0,
        ),
        (0, i._)(
          [(0, h.Cb)({ type: [N.H3], readOnly: !0 })],
          D.prototype,
          'geometryDefinitions',
          void 0,
        ),
        (0, i._)(
          [(0, h.Cb)({ readOnly: !0 })],
          D.prototype,
          'serviceUpdateTimeStamp',
          void 0,
        ),
        (0, i._)([(0, h.Cb)({ readOnly: !0 })], D.prototype, 'store', void 0),
        (0, i._)(
          [
            (0, h.Cb)({
              type: String,
              readOnly: !0,
              json: { read: { source: 'store.rootNode' } },
            }),
          ],
          D.prototype,
          'rootNode',
          void 0,
        ),
        (0, i._)(
          [(0, h.Cb)({ readOnly: !0 })],
          D.prototype,
          'attributeStorageInfo',
          void 0,
        ),
        (0, i._)([(0, h.Cb)(Q.fields)], D.prototype, 'fields', void 0),
        (0, i._)(
          [(0, h.Cb)({ readOnly: !0 })],
          D.prototype,
          'fieldsIndex',
          null,
        ),
        (0, i._)(
          [(0, h.Cb)({ readOnly: !0, type: I.default })],
          D.prototype,
          'associatedLayer',
          void 0,
        ),
        (0, i._)(
          [(0, f.r)('service', 'associatedLayer', ['associatedLayerID'])],
          D.prototype,
          'readAssociatedLayer',
          null,
        ),
        (0, i._)([(0, h.Cb)(Q.outFields)], D.prototype, 'outFields', void 0),
        (0, i._)(
          [(0, h.Cb)({ type: String, readOnly: !0 })],
          D.prototype,
          'objectIdField',
          null,
        ),
        (0, i._)(
          [(0, h.Cb)({ readOnly: !0, type: String, json: { read: !1 } })],
          D.prototype,
          'displayField',
          null,
        ),
        (0, i._)(
          [(0, h.Cb)({ readOnly: !0, type: String })],
          D.prototype,
          'apiKey',
          null,
        ),
        (0, i._)(
          [(0, h.Cb)({ readOnly: !0, type: x.Z })],
          D.prototype,
          'fullExtent',
          null,
        ),
        (0, i._)(
          [(0, h.Cb)({ readOnly: !0, type: v.Z })],
          D.prototype,
          'spatialReference',
          null,
        ),
        (0, i._)([(0, h.Cb)({ readOnly: !0 })], D.prototype, 'version', null),
        (0, i._)(
          [(0, h.Cb)({ readOnly: !0, type: M.Z })],
          D.prototype,
          'elevationInfo',
          null,
        ),
        (0, i._)(
          [(0, h.Cb)({ readOnly: !0, type: Number })],
          D.prototype,
          'minScale',
          null,
        ),
        (0, i._)(
          [(0, h.Cb)({ readOnly: !0, type: Number })],
          D.prototype,
          'maxScale',
          null,
        ),
        (0, i._)(
          [(0, h.Cb)({ readOnly: !0, type: Number })],
          D.prototype,
          'effectiveScaleRange',
          null,
        ),
        (0, i._)(
          [(0, h.Cb)({ type: ['hide', 'show'], json: { write: !0 } })],
          D.prototype,
          'listMode',
          void 0,
        ),
        (0, i._)(
          [
            (0, h.Cb)({
              types: C.o,
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
          D.prototype,
          'renderer',
          void 0,
        ),
        (0, i._)(
          [
            (0, h.Cb)({
              type: String,
              json: {
                origins: { service: { read: !1, write: !1 } },
                name: 'layerDefinition.definitionExpression',
                write: { enabled: !0, allowNull: !0 },
              },
            }),
          ],
          D.prototype,
          'definitionExpression',
          void 0,
        ),
        (0, i._)([(0, h.Cb)(T.C_)], D.prototype, 'popupEnabled', void 0),
        (0, i._)(
          [
            (0, h.Cb)({
              type: _.Z,
              json: {
                read: { source: 'popupInfo' },
                write: { target: 'popupInfo' },
              },
            }),
          ],
          D.prototype,
          'popupTemplate',
          void 0,
        ),
        (0, i._)(
          [
            (0, h.Cb)({
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
          D.prototype,
          'normalReferenceFrame',
          void 0,
        ),
        (0, i._)(
          [(0, h.Cb)({ readOnly: !0, json: { read: !1 } })],
          D.prototype,
          'defaultPopupTemplate',
          null,
        ),
        (0, i._)([(0, h.Cb)()], D.prototype, 'types', null),
        (0, i._)([(0, h.Cb)()], D.prototype, 'typeIdField', null),
        (0, i._)(
          [
            (0, h.Cb)({ json: { write: !1 } }),
            (0, O.J)(new S.X({ '3DObject': '3d-object', Point: 'point' })),
          ],
          D.prototype,
          'layerType',
          void 0,
        ),
        (0, i._)([(0, h.Cb)()], D.prototype, 'geometryType', null),
        (0, i._)([(0, h.Cb)()], D.prototype, 'profile', null),
        (0, i._)(
          [(0, h.Cb)({ readOnly: !0, json: { read: !1 } })],
          D.prototype,
          'capabilities',
          null,
        ),
        (D = (0, i._)(
          [(0, g.j)('esri.layers.buildingSublayers.BuildingComponentSublayer')],
          D,
        ));
      const V = D;
      var K,
        J = r(20941);
      const H = {
        type: s.Z,
        readOnly: !0,
        json: {
          origins: { service: { read: { source: 'sublayers', reader: W } } },
          read: !1,
        },
      };
      function W(e, t, r) {
        if (e && Array.isArray(e))
          return new s.Z(
            e.map((e) => {
              const t = (function (e) {
                return 'group' === e.layerType ? G : V;
              })(e);
              if (t) {
                const i = new t();
                return i.read(e, r), i;
              }
              r &&
                r.messages &&
                e &&
                r.messages.push(
                  new J.Z(
                    'building-scene-layer:unsupported-sublayer-type',
                    "Building scene sublayer of type '" +
                      (e.type || 'unknown') +
                      "' are not supported",
                    { definition: e, context: r },
                  ),
                );
            }),
          );
      }
      let G = (K = class extends B {
        constructor(e) {
          super(e),
            (this.type = 'building-group'),
            (this.listMode = 'show'),
            (this.sublayers = null);
        }
        loadAll() {
          return (0, a.w)(this, (e) =>
            K.forEachSublayer(this.sublayers, (t) => {
              'building-group' !== t.type && e(t);
            }),
          );
        }
      });
      var z;
      (0, i._)(
        [
          (0, h.Cb)({
            type: ['hide', 'show', 'hide-children'],
            json: { write: !0 },
          }),
        ],
        G.prototype,
        'listMode',
        void 0,
      ),
        (0, i._)([(0, h.Cb)(H)], G.prototype, 'sublayers', void 0),
        (G = K =
          (0, i._)(
            [(0, g.j)('esri.layers.buildingSublayers.BuildingGroupSublayer')],
            G,
          )),
        ((z = G || (G = {})).sublayersProperty = H),
        (z.readSublayers = W),
        (z.forEachSublayer = function e(t, r) {
          t.forEach((t) => {
            r(t), 'building-group' === t.type && e(t.sublayers, r);
          });
        });
      const X = G;
      var Y = r(54295),
        $ = r(17287),
        ee = r(38009),
        te = r(16859),
        re = r(72965),
        ie = r(32271),
        se = r(96674),
        oe = r(41123);
      let le = class extends se.wq {
        constructor() {
          super(...arguments), (this.type = null);
        }
      };
      (0, i._)(
        [(0, h.Cb)({ type: String, readOnly: !0, json: { write: !0 } })],
        le.prototype,
        'type',
        void 0,
      ),
        (le = (0, i._)(
          [(0, g.j)('esri.layers.support.BuildingFilterAuthoringInfo')],
          le,
        ));
      const ne = le;
      var ae;
      let pe = (ae = class extends se.wq {
        constructor() {
          super(...arguments),
            (this.filterType = null),
            (this.filterValues = null);
        }
        clone() {
          return new ae({
            filterType: this.filterType,
            filterValues: (0, n.d9)(this.filterValues),
          });
        }
      });
      (0, i._)(
        [(0, h.Cb)({ type: String, json: { write: !0 } })],
        pe.prototype,
        'filterType',
        void 0,
      ),
        (0, i._)(
          [(0, h.Cb)({ type: [String], json: { write: !0 } })],
          pe.prototype,
          'filterValues',
          void 0,
        ),
        (pe = ae =
          (0, i._)(
            [(0, g.j)('esri.layers.support.BuildingFilterAuthoringInfoType')],
            pe,
          ));
      const ye = pe;
      var de;
      const ue = s.Z.ofType(ye);
      let ce = (de = class extends se.wq {
        clone() {
          return new de({ filterTypes: (0, n.d9)(this.filterTypes) });
        }
      });
      (0, i._)(
        [(0, h.Cb)({ type: ue, json: { write: !0 } })],
        ce.prototype,
        'filterTypes',
        void 0,
      ),
        (ce = de =
          (0, i._)(
            [(0, g.j)('esri.layers.support.BuildingFilterAuthoringInfoBlock')],
            ce,
          ));
      const he = ce;
      var be;
      const fe = s.Z.ofType(he);
      let ge = (be = class extends ne {
        constructor() {
          super(...arguments), (this.type = 'checkbox');
        }
        clone() {
          return new be({ filterBlocks: (0, n.d9)(this.filterBlocks) });
        }
      });
      (0, i._)(
        [(0, h.Cb)({ type: ['checkbox'] })],
        ge.prototype,
        'type',
        void 0,
      ),
        (0, i._)(
          [(0, h.Cb)({ type: fe, json: { write: !0 } })],
          ge.prototype,
          'filterBlocks',
          void 0,
        ),
        (ge = be =
          (0, i._)(
            [
              (0, g.j)(
                'esri.layers.support.BuildingFilterAuthoringInfoCheckbox',
              ),
            ],
            ge,
          ));
      const ve = ge;
      let me = class extends se.wq {};
      (0, i._)(
        [(0, h.Cb)({ readOnly: !0, json: { read: !1 } })],
        me.prototype,
        'type',
        void 0,
      ),
        (me = (0, i._)(
          [(0, g.j)('esri.layers.support.BuildingFilterMode')],
          me,
        ));
      const _e = me;
      var Ce;
      let we = (Ce = class extends _e {
        constructor() {
          super(...arguments), (this.type = 'solid');
        }
        clone() {
          return new Ce();
        }
      });
      (0, i._)(
        [(0, h.Cb)({ type: ['solid'], readOnly: !0, json: { write: !0 } })],
        we.prototype,
        'type',
        void 0,
      ),
        (we = Ce =
          (0, i._)(
            [(0, g.j)('esri.layers.support.BuildingFilterModeSolid')],
            we,
          ));
      const Se = we;
      var je,
        Fe = r(56332);
      let Oe = (je = class extends _e {
        constructor() {
          super(...arguments), (this.type = 'wire-frame'), (this.edges = null);
        }
        clone() {
          return new je({ edges: (0, n.d9)(this.edges) });
        }
      });
      (0, i._)(
        [(0, O.J)({ wireFrame: 'wire-frame' })],
        Oe.prototype,
        'type',
        void 0,
      ),
        (0, i._)([(0, h.Cb)(Fe.Z)], Oe.prototype, 'edges', void 0),
        (Oe = je =
          (0, i._)(
            [(0, g.j)('esri.layers.support.BuildingFilterModeWireFrame')],
            Oe,
          ));
      const xe = Oe;
      var Ie;
      let Le = (Ie = class extends _e {
        constructor() {
          super(...arguments), (this.type = 'x-ray');
        }
        clone() {
          return new Ie();
        }
      });
      (0, i._)(
        [(0, h.Cb)({ type: ['x-ray'], readOnly: !0, json: { write: !0 } })],
        Le.prototype,
        'type',
        void 0,
      ),
        (Le = Ie =
          (0, i._)(
            [(0, g.j)('esri.layers.support.BuildingFilterModeXRay')],
            Le,
          ));
      const Te = Le;
      var Ae;
      const Be = {
        nonNullable: !0,
        types: {
          key: 'type',
          base: _e,
          typeMap: { solid: Se, 'wire-frame': xe, 'x-ray': Te },
        },
        json: {
          read: (e) => {
            switch (e && e.type) {
              case 'solid':
                return Se.fromJSON(e);
              case 'wireFrame':
                return xe.fromJSON(e);
              case 'x-ray':
                return Te.fromJSON(e);
              default:
                return;
            }
          },
          write: { enabled: !0, isRequired: !0 },
        },
      };
      let qe = (Ae = class extends se.wq {
        constructor() {
          super(...arguments),
            (this.filterExpression = null),
            (this.filterMode = new Se()),
            (this.title = '');
        }
        clone() {
          return new Ae({
            filterExpression: this.filterExpression,
            filterMode: (0, n.d9)(this.filterMode),
            title: this.title,
          });
        }
      });
      (0, i._)(
        [
          (0, h.Cb)({
            type: String,
            json: { write: { enabled: !0, isRequired: !0 } },
          }),
        ],
        qe.prototype,
        'filterExpression',
        void 0,
      ),
        (0, i._)([(0, h.Cb)(Be)], qe.prototype, 'filterMode', void 0),
        (0, i._)(
          [
            (0, h.Cb)({
              type: String,
              json: { write: { enabled: !0, isRequired: !0 } },
            }),
          ],
          qe.prototype,
          'title',
          void 0,
        ),
        (qe = Ae =
          (0, i._)([(0, g.j)('esri.layers.support.BuildingFilterBlock')], qe));
      const Ee = qe;
      var Ze;
      const Re = s.Z.ofType(Ee);
      let Ne = (Ze = class extends se.wq {
        constructor() {
          super(...arguments),
            (this.description = null),
            (this.filterBlocks = null),
            (this.id = (0, oe.D)()),
            (this.name = null);
        }
        clone() {
          return new Ze({
            description: this.description,
            filterBlocks: (0, n.d9)(this.filterBlocks),
            id: this.id,
            name: this.name,
            filterAuthoringInfo: (0, n.d9)(this.filterAuthoringInfo),
          });
        }
      });
      (0, i._)(
        [(0, h.Cb)({ type: String, json: { write: !0 } })],
        Ne.prototype,
        'description',
        void 0,
      ),
        (0, i._)(
          [
            (0, h.Cb)({
              type: Re,
              json: { write: { enabled: !0, isRequired: !0 } },
            }),
          ],
          Ne.prototype,
          'filterBlocks',
          void 0,
        ),
        (0, i._)(
          [
            (0, h.Cb)({
              types: { key: 'type', base: ne, typeMap: { checkbox: ve } },
              json: {
                read: (e) =>
                  'checkbox' === (e && e.type) ? ve.fromJSON(e) : null,
                write: !0,
              },
            }),
          ],
          Ne.prototype,
          'filterAuthoringInfo',
          void 0,
        ),
        (0, i._)(
          [
            (0, h.Cb)({
              type: String,
              constructOnly: !0,
              json: { write: { enabled: !0, isRequired: !0 } },
            }),
          ],
          Ne.prototype,
          'id',
          void 0,
        ),
        (0, i._)(
          [
            (0, h.Cb)({
              type: String,
              json: { write: { enabled: !0, isRequired: !0 } },
            }),
          ],
          Ne.prototype,
          'name',
          void 0,
        ),
        (Ne = Ze =
          (0, i._)([(0, g.j)('esri.layers.support.BuildingFilter')], Ne));
      const ke = Ne,
        Pe = p.Z.getLogger('esri.layers.support.BuildingSummaryStatistics');
      let Me = class extends se.wq {
        constructor() {
          super(...arguments),
            (this.fieldName = null),
            (this.modelName = null),
            (this.label = null),
            (this.min = null),
            (this.max = null),
            (this.mostFrequentValues = null),
            (this.subLayerIds = null);
        }
      };
      (0, i._)(
        [(0, h.Cb)({ type: String })],
        Me.prototype,
        'fieldName',
        void 0,
      ),
        (0, i._)(
          [(0, h.Cb)({ type: String })],
          Me.prototype,
          'modelName',
          void 0,
        ),
        (0, i._)([(0, h.Cb)({ type: String })], Me.prototype, 'label', void 0),
        (0, i._)([(0, h.Cb)({ type: Number })], Me.prototype, 'min', void 0),
        (0, i._)([(0, h.Cb)({ type: Number })], Me.prototype, 'max', void 0),
        (0, i._)(
          [
            (0, h.Cb)({
              json: {
                read: (e) =>
                  Array.isArray(e) &&
                  (e.every((e) => 'string' == typeof e) ||
                    e.every((e) => 'number' == typeof e))
                    ? e.slice()
                    : null,
              },
            }),
          ],
          Me.prototype,
          'mostFrequentValues',
          void 0,
        ),
        (0, i._)(
          [(0, h.Cb)({ type: [Number] })],
          Me.prototype,
          'subLayerIds',
          void 0,
        ),
        (Me = (0, i._)(
          [(0, g.j)('esri.layers.support.BuildingFieldStatistics')],
          Me,
        ));
      let Ue = class extends j.Z.LoadableMixin((0, F.v)(se.wq)) {
        constructor() {
          super(...arguments), (this.url = null);
        }
        get fields() {
          return this.loaded || 'loading' === this.loadStatus
            ? this._get('fields')
            : (Pe.error('building summary statistics are not loaded'), null);
        }
        load(e) {
          const t = (0, y.pC)(e) ? e.signal : null;
          return (
            this.addResolvingPromise(this._fetchService(t)),
            Promise.resolve(this)
          );
        }
        async _fetchService(e) {
          const t = (
            await (0, w.default)(this.url, {
              query: { f: 'json' },
              responseType: 'json',
              signal: e,
            })
          ).data;
          this.read(t, { origin: 'service' });
        }
      };
      (0, i._)(
        [(0, h.Cb)({ constructOnly: !0, type: String })],
        Ue.prototype,
        'url',
        void 0,
      ),
        (0, i._)(
          [
            (0, h.Cb)({
              readOnly: !0,
              type: [Me],
              json: { read: { source: 'summary' } },
            }),
          ],
          Ue.prototype,
          'fields',
          null,
        ),
        (Ue = (0, i._)(
          [(0, g.j)('esri.layers.support.BuildingSummaryStatistics')],
          Ue,
        ));
      const Qe = Ue;
      var De = r(14147);
      const Ve = p.Z.getLogger('esri.layers.BuildingSceneLayer'),
        Ke = s.Z.ofType(ke),
        Je = (0, n.d9)(X.sublayersProperty);
      (Je.json.origins['web-scene'] = {
        type: [V],
        write: { enabled: !0, overridePolicy: () => ({ enabled: !1 }) },
      }),
        (Je.json.origins['portal-item'] = {
          type: [V],
          write: { enabled: !0, overridePolicy: () => ({ enabled: !1 }) },
        });
      let He = class extends (0, ie.Vt)(
        (0, $.Y)((0, ee.q)((0, te.I)((0, re.M)((0, d.R)((0, Y.V)(m.Z)))))),
      ) {
        constructor(e) {
          super(e),
            (this.operationalLayerType = 'BuildingSceneLayer'),
            (this.allSublayers = new o.Z({
              getCollections: () => [this.sublayers],
              getChildrenFunction: (e) =>
                'building-group' === e.type ? e.sublayers : null,
            })),
            (this.sublayers = null),
            (this.sublayerOverrides = null),
            (this.filters = new Ke()),
            (this.activeFilterId = null),
            (this.summaryStatistics = null),
            (this.outFields = null),
            (this.type = 'building-scene');
        }
        normalizeCtorArgs(e) {
          return 'string' == typeof e ? { url: e } : e;
        }
        destroy() {
          this.allSublayers.destroy();
        }
        readSublayers(e, t, r) {
          const i = X.readSublayers(e, t, r);
          return (
            X.forEachSublayer(i, (e) => (e.layer = this)),
            this.sublayerOverrides &&
              (this.applySublayerOverrides(i, this.sublayerOverrides),
              (this.sublayerOverrides = null)),
            i
          );
        }
        applySublayerOverrides(e, { overrides: t, context: r }) {
          X.forEachSublayer(e, (e) => e.read(t.get(e.id), r));
        }
        readSublayerOverrides(e, t) {
          const r = new Map();
          for (const i of e)
            null != i && 'object' == typeof i && 'number' == typeof i.id
              ? r.set(i.id, i)
              : t.messages.push(
                  new l.Z(
                    'building-scene-layer:invalid-sublayer-override',
                    'Invalid value for sublayer override. Not an object or no id specified.',
                    { value: i },
                  ),
                );
          return { overrides: r, context: t };
        }
        writeSublayerOverrides(e, t, r) {
          const i = [];
          X.forEachSublayer(this.sublayers, (e) => {
            const t = e.write({}, r);
            Object.keys(t).length > 1 && i.push(t);
          }),
            i.length > 0 && (t.sublayers = i);
        }
        writeUnappliedOverrides(e, t) {
          (t.sublayers = []),
            e.overrides.forEach((e) => {
              t.sublayers.push((0, n.d9)(e));
            });
        }
        write(e, t) {
          return (
            (e = super.write(e, t)),
            !t ||
              ('web-scene' !== t.origin && 'portal-item' !== t.origin) ||
              (this.sublayers
                ? this.writeSublayerOverrides(this.sublayers, e, t)
                : this.sublayerOverrides &&
                  this.writeUnappliedOverrides(this.sublayerOverrides, e)),
            e
          );
        }
        read(e, t) {
          if (
            (super.read(e, t),
            t &&
              ('web-scene' === t.origin || 'portal-item' === t.origin) &&
              null != e &&
              Array.isArray(e.sublayers))
          ) {
            const r = this.readSublayerOverrides(e.sublayers, t);
            this.sublayers
              ? this.applySublayerOverrides(this.sublayers, r)
              : (this.sublayerOverrides = r);
          }
        }
        readSummaryStatistics(e, t) {
          if ('string' == typeof t.statisticsHRef) {
            const e = (0, c.v_)(this.parsedUrl.path, t.statisticsHRef);
            return new Qe({ url: e });
          }
          return null;
        }
        set elevationInfo(e) {
          this._set('elevationInfo', e), this._validateElevationInfo();
        }
        load(e) {
          const t = (0, y.pC)(e) ? e.signal : null,
            r = this.loadFromPortal({ supportedTypes: ['Scene Service'] }, e)
              .catch(u.r9)
              .then(() => this._fetchService(t))
              .then(() => this._fetchAssociatedFeatureService(t));
          return this.addResolvingPromise(r), Promise.resolve(this);
        }
        loadAll() {
          return (0, a.G)(this, (e) => {
            X.forEachSublayer(this.sublayers, (t) => {
              'building-group' !== t.type && e(t);
            }),
              this.summaryStatistics && e(this.summaryStatistics);
          });
        }
        async saveAs(e, t) {
          return this._debouncedSaveOperations(
            ie.xp.SAVE_AS,
            {
              ...t,
              getTypeKeywords: () => this._getTypeKeywords(),
              portalItemLayerType: 'building-scene',
            },
            e,
          );
        }
        async save() {
          const e = {
            getTypeKeywords: () => this._getTypeKeywords(),
            portalItemLayerType: 'building-scene',
          };
          return this._debouncedSaveOperations(ie.xp.SAVE, e);
        }
        validateLayer(e) {
          if (!e.layerType || 'Building' !== e.layerType)
            throw new l.Z(
              'buildingscenelayer:layer-type-not-supported',
              'BuildingSceneLayer does not support this layer type',
              { layerType: e.layerType },
            );
        }
        _getTypeKeywords() {
          return ['Building'];
        }
        _validateElevationInfo() {
          const e = this.elevationInfo;
          e &&
            ('absolute-height' !== e.mode &&
              Ve.warn(
                '.elevationInfo=',
                'Building scene layers only support absolute-height elevation mode',
              ),
            e.featureExpressionInfo &&
              '0' !== e.featureExpressionInfo.expression &&
              Ve.warn(
                '.elevationInfo=',
                'Building scene layers do not support featureExpressionInfo',
              ));
        }
        async _fetchAssociatedFeatureService(e) {
          const t = new De.W(this.parsedUrl, this.portalItem, this.apiKey, e);
          try {
            this.associatedFeatureServiceItem = await t.fetchPortalItem();
          } catch (e) {
            Ve.warn('Associated feature service item could not be loaded', e);
          }
        }
      };
      (0, i._)(
        [(0, h.Cb)({ type: ['BuildingSceneLayer'] })],
        He.prototype,
        'operationalLayerType',
        void 0,
      ),
        (0, i._)(
          [(0, h.Cb)({ readOnly: !0 })],
          He.prototype,
          'allSublayers',
          void 0,
        ),
        (0, i._)([(0, h.Cb)(Je)], He.prototype, 'sublayers', void 0),
        (0, i._)(
          [(0, f.r)('service', 'sublayers')],
          He.prototype,
          'readSublayers',
          null,
        ),
        (0, i._)(
          [(0, h.Cb)({ type: Ke, nonNullable: !0, json: { write: !0 } })],
          He.prototype,
          'filters',
          void 0,
        ),
        (0, i._)(
          [(0, h.Cb)({ type: String, json: { write: !0 } })],
          He.prototype,
          'activeFilterId',
          void 0,
        ),
        (0, i._)(
          [(0, h.Cb)({ readOnly: !0, type: Qe })],
          He.prototype,
          'summaryStatistics',
          void 0,
        ),
        (0, i._)(
          [(0, f.r)('summaryStatistics', ['statisticsHRef'])],
          He.prototype,
          'readSummaryStatistics',
          null,
        ),
        (0, i._)(
          [(0, h.Cb)({ type: [String], json: { read: !1 } })],
          He.prototype,
          'outFields',
          void 0,
        ),
        (0, i._)([(0, h.Cb)(T.vg)], He.prototype, 'fullExtent', void 0),
        (0, i._)(
          [(0, h.Cb)({ type: ['show', 'hide', 'hide-children'] })],
          He.prototype,
          'listMode',
          void 0,
        ),
        (0, i._)(
          [(0, h.Cb)((0, T.Lx)(v.Z))],
          He.prototype,
          'spatialReference',
          void 0,
        ),
        (0, i._)([(0, h.Cb)(T.PV)], He.prototype, 'elevationInfo', null),
        (0, i._)(
          [(0, h.Cb)({ json: { read: !1 }, readOnly: !0 })],
          He.prototype,
          'type',
          void 0,
        ),
        (0, i._)(
          [(0, h.Cb)()],
          He.prototype,
          'associatedFeatureServiceItem',
          void 0,
        ),
        (He = (0, i._)([(0, g.j)('esri.layers.BuildingSceneLayer')], He));
      const We = He;
    },
  },
]);
