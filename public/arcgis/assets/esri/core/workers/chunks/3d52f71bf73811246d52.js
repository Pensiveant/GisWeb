'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [5163, 4475],
  {
    38171: (e, t, r) => {
      r.d(t, { Z: () => f });
      var i = r(43697),
        o = r(66577),
        n = r(51773),
        a = r(78223),
        s = r(2368),
        l = r(96674),
        u = r(70586),
        p = r(99001),
        c = r(5600),
        y = (r(67676), r(80442), r(75215), r(52011)),
        d = r(33955);
      function m(e) {
        if (!(0, u.pC)(e)) return null;
        const t = {};
        for (const r in e) {
          const i = e[r];
          i && (t[r] = i.toJSON());
        }
        return 0 !== Object.keys(t).length ? t : null;
      }
      let h = class extends (0, s.J)(l.wq) {
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
            aggregateGeometries: m(this.aggregateGeometries),
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
          const o = { graphic: this, property: e, oldValue: t, newValue: r };
          'attributes' === e && (o.attributeName = i),
            this.layer.graphicChanged(o);
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
                  const i = (0, d.im)(e[r]);
                  i && (t[r] = i);
                }
                return 0 !== Object.keys(t).length ? t : null;
              },
            },
          }),
        ],
        h.prototype,
        'aggregateGeometries',
        null,
      ),
        (0, i._)([(0, c.Cb)({ value: null })], h.prototype, 'attributes', null),
        (0, i._)(
          [(0, c.Cb)({ value: null, types: o.qM, json: { read: d.im } })],
          h.prototype,
          'geometry',
          null,
        ),
        (0, i._)(
          [(0, c.Cb)({ type: Boolean })],
          h.prototype,
          'isAggregate',
          void 0,
        ),
        (0, i._)(
          [(0, c.Cb)({ clonable: 'reference' })],
          h.prototype,
          'layer',
          void 0,
        ),
        (0, i._)(
          [(0, c.Cb)({ type: n.Z })],
          h.prototype,
          'popupTemplate',
          void 0,
        ),
        (0, i._)(
          [(0, c.Cb)({ clonable: 'reference' })],
          h.prototype,
          'sourceLayer',
          void 0,
        ),
        (0, i._)(
          [(0, c.Cb)({ value: null, types: a.LB })],
          h.prototype,
          'symbol',
          null,
        ),
        (0, i._)(
          [(0, c.Cb)({ type: Boolean, value: !0 })],
          h.prototype,
          'visible',
          null,
        ),
        (h = (0, i._)([(0, y.j)('esri.Graphic')], h)),
        ((h || (h = {})).generateUID = p.D);
      const f = h;
    },
    74085: (e, t, r) => {
      function i(e) {}
      r.d(t, { Bg: () => i }), r(80442);
    },
    62128: (e, t, r) => {
      r.r(t), r.d(t, { default: () => Y });
      var i = r(43697),
        o = (r(66577), r(38171)),
        n = (r(78223), r(80539)),
        a = r(20102),
        s = r(22974),
        l = r(70586),
        u = r(16453),
        p = r(78286),
        c = r(20941),
        y = r(5600),
        d = r(75215),
        m = r(71715),
        h = r(52011),
        f = r(30556),
        b = r(44547),
        g = r(82526),
        v = r(8744),
        w = r(67284),
        _ = (r(67676), r(80442), r(70921)),
        C = r(3920);
      r(92604).Z.getLogger('esri.core.support.OwningCollection');
      let S = class extends (0, C.p)(n.Z) {
        constructor(e) {
          super(e),
            this.handles.add([
              this.on('before-add', (e) => {
                (0, l.Wi)(e.item) && e.preventDefault();
              }),
              this.on('after-add', (e) => this._own(e.item)),
              this.on('after-remove', (e) => this._release(e.item)),
            ]);
        }
        get owner() {
          return this._get('owner');
        }
        set owner(e) {
          e !== this._get('owner') &&
            (this._releaseAll(), this._set('owner', e), this._ownAll());
        }
        _ownAll() {
          for (const e of this.items) this._own(e);
        }
        _releaseAll() {
          for (const e of this.items) this._release(e);
        }
        _createNewInstance(e) {
          return this.itemType
            ? new (n.Z.ofType(this.itemType.Type))(e)
            : new n.Z(e);
        }
      };
      (0, i._)([(0, y.Cb)()], S.prototype, 'owner', null),
        (S = (0, i._)([(0, h.j)('esri.core.support.OwningCollection')], S));
      var x = r(29600),
        T = r(71612),
        O = r(72965),
        L = (r(37697), r(52421));
      let I = class extends S {
        _own(e) {
          e.layer &&
            'remove' in e.layer &&
            e.layer !== this.owner &&
            e.layer.remove(e),
            (e.layer = this.owner);
        }
        _release(e) {
          e.layer === this.owner && (e.layer = null);
        }
      };
      (0, i._)(
        [(0, L.c)({ Type: o.Z, ensureType: (0, d.se)(o.Z) })],
        I.prototype,
        'itemType',
        void 0,
      ),
        (I = (0, i._)([(0, h.j)('esri.support.GraphicsCollection')], I));
      var N = r(20682);
      let F = class extends (0, T.h)((0, O.M)(x.Z)) {
        constructor(e) {
          super(e),
            (this.elevationInfo = null),
            (this.graphics = new I()),
            (this.screenSizePerspectiveEnabled = !0),
            (this.type = 'graphics'),
            (this.internal = !1);
        }
        destroy() {
          this.removeAll(), this.graphics.destroy();
        }
        add(e) {
          return this.graphics.add(e), this;
        }
        addMany(e) {
          return this.graphics.addMany(e), this;
        }
        removeAll() {
          return this.graphics.removeAll(), this;
        }
        remove(e) {
          this.graphics.remove(e);
        }
        removeMany(e) {
          this.graphics.removeMany(e);
        }
        on(e, t) {
          return super.on(e, t);
        }
        graphicChanged(e) {
          this.emit('graphic-update', e);
        }
      };
      var E, V;
      (0, i._)(
        [(0, y.Cb)({ type: N.Z })],
        F.prototype,
        'elevationInfo',
        void 0,
      ),
        (0, i._)(
          [
            (0, y.Cb)(
              ((E = I),
              (V = 'graphics'),
              {
                type: E,
                cast: _.R,
                set(e) {
                  const t = (0, _.Z)(e, this._get(V), E);
                  (t.owner = this), this._set(V, t);
                },
              }),
            ),
          ],
          F.prototype,
          'graphics',
          void 0,
        ),
        (0, i._)(
          [(0, y.Cb)({ type: ['show', 'hide'] })],
          F.prototype,
          'listMode',
          void 0,
        ),
        (0, i._)(
          [(0, y.Cb)()],
          F.prototype,
          'screenSizePerspectiveEnabled',
          void 0,
        ),
        (0, i._)([(0, y.Cb)({ readOnly: !0 })], F.prototype, 'type', void 0),
        (0, i._)(
          [(0, y.Cb)({ constructOnly: !0 })],
          F.prototype,
          'internal',
          void 0,
        ),
        (F = (0, i._)([(0, h.j)('esri.layers.GraphicsLayer')], F));
      const M = F;
      var Z = r(92908),
        j = r(38009),
        D = r(16859),
        J = r(1231),
        R = r(20256),
        P = r(4095),
        z = r(77987),
        A = r(78724),
        k = r(82971),
        U = r(6570);
      function q(e) {
        return e.layers.some((e) => null != e.layerDefinition.visibilityField);
      }
      const G = new J.Z({
          name: 'OBJECTID',
          alias: 'OBJECTID',
          type: 'oid',
          nullable: !1,
          editable: !1,
        }),
        W = new J.Z({
          name: 'title',
          alias: 'Title',
          type: 'string',
          nullable: !0,
          editable: !0,
        });
      let $ = class extends M {
        constructor() {
          super(...arguments), (this.visibilityMode = 'inherited');
        }
        initialize() {
          for (const e of this.graphics) e.sourceLayer = this.layer;
          this.graphics.on('after-add', (e) => {
            e.item.sourceLayer = this.layer;
          }),
            this.graphics.on('after-remove', (e) => {
              e.item.sourceLayer = null;
            });
        }
        get sublayers() {
          return this.graphics;
        }
      };
      (0, i._)([(0, y.Cb)({ readOnly: !0 })], $.prototype, 'sublayers', null),
        (0, i._)([(0, y.Cb)()], $.prototype, 'layer', void 0),
        (0, i._)(
          [(0, y.Cb)({ readOnly: !0 })],
          $.prototype,
          'visibilityMode',
          void 0,
        ),
        ($ = (0, i._)(
          [(0, h.j)('esri.layers.MapNotesLayer.MapNotesSublayer')],
          $,
        ));
      const B = [
        {
          geometryType: 'polygon',
          geometryTypeJSON: 'esriGeometryPolygon',
          layerId: 'polygonLayer',
          title: 'Polygons',
          identifyingSymbol: new R.Z().toJSON(),
        },
        {
          geometryType: 'polyline',
          geometryTypeJSON: 'esriGeometryPolyline',
          layerId: 'polylineLayer',
          title: 'Polylines',
          identifyingSymbol: new P.Z().toJSON(),
        },
        {
          geometryType: 'multipoint',
          geometryTypeJSON: 'esriGeometryMultipoint',
          layerId: 'multipointLayer',
          title: 'Multipoints',
          identifyingSymbol: new z.Z().toJSON(),
        },
        {
          geometryType: 'point',
          geometryTypeJSON: 'esriGeometryPoint',
          layerId: 'pointLayer',
          title: 'Points',
          identifyingSymbol: new z.Z().toJSON(),
        },
        {
          geometryType: 'point',
          geometryTypeJSON: 'esriGeometryPoint',
          layerId: 'textLayer',
          title: 'Text',
          identifyingSymbol: new A.Z().toJSON(),
        },
      ];
      let K = class extends (0, T.h)(
        (0, O.M)((0, j.q)((0, D.I)((0, u.R)(x.Z)))),
      ) {
        constructor(e) {
          super(e),
            (this.capabilities = {
              operations: { supportsMapNotesEditing: !0 },
            }),
            (this.featureCollections = null),
            (this.featureCollectionJSON = null),
            (this.featureCollectionType = 'notes'),
            (this.legendEnabled = !1),
            (this.minScale = 0),
            (this.maxScale = 0),
            (this.spatialReference = k.Z.WGS84),
            (this.sublayers = new n.Z(
              B.map(
                (e) => new $({ id: e.layerId, title: e.title, layer: this }),
              ),
            )),
            (this.title = 'Map Notes'),
            (this.type = 'map-notes'),
            (this.visibilityMode = 'inherited');
        }
        readCapabilities(e, t, r) {
          return {
            operations: {
              supportsMapNotesEditing:
                !q(t) && 'portal-item' !== (null == r ? void 0 : r.origin),
            },
          };
        }
        readFeatureCollections(e, t, r) {
          if (!q(t)) return null;
          const i = t.layers.map((e) => {
            const t = new w.default();
            return t.read(e, r), t;
          });
          return new n.Z({ items: i });
        }
        readLegacyfeatureCollectionJSON(e, t) {
          return q(t) ? (0, s.d9)(t.featureCollection) : null;
        }
        readFullExtent(e, t) {
          if (
            !t.layers.length ||
            t.layers.every((e) => !e.layerDefinition.extent)
          )
            return new U.Z({
              xmin: -180,
              ymin: -90,
              xmax: 180,
              ymax: 90,
              spatialReference: k.Z.WGS84,
            });
          const r = k.Z.fromJSON(t.layers[0].layerDefinition.spatialReference);
          return t.layers.reduce((e, t) => {
            const r = t.layerDefinition.extent;
            return r ? U.Z.fromJSON(r).union(e) : e;
          }, new U.Z({ spatialReference: r }));
        }
        readMinScale(e, t) {
          for (const e of t.layers)
            if (null != e.layerDefinition.minScale)
              return e.layerDefinition.minScale;
          return 0;
        }
        readMaxScale(e, t) {
          for (const e of t.layers)
            if (null != e.layerDefinition.maxScale)
              return e.layerDefinition.maxScale;
          return 0;
        }
        get multipointLayer() {
          return this._findSublayer('multipointLayer');
        }
        get pointLayer() {
          return this._findSublayer('pointLayer');
        }
        get polygonLayer() {
          return this._findSublayer('polygonLayer');
        }
        get polylineLayer() {
          return this._findSublayer('polylineLayer');
        }
        readSpatialReference(e, t) {
          return t.layers.length
            ? k.Z.fromJSON(t.layers[0].layerDefinition.spatialReference)
            : k.Z.WGS84;
        }
        readSublayers(e, t, r) {
          if (q(t)) return null;
          const i = [];
          for (let e = 0; e < t.layers.length; e++) {
            var a;
            const { layerDefinition: r, featureSet: n } = t.layers[e],
              s = null != (a = r.geometryType) ? a : n.geometryType,
              l = B.find((e) => {
                var t, i, o;
                return (
                  s === e.geometryTypeJSON &&
                  (null == (t = r.drawingInfo) ||
                  null == (i = t.renderer) ||
                  null == (o = i.symbol)
                    ? void 0
                    : o.type) === e.identifyingSymbol.type
                );
              });
            if (l) {
              const e = new $({
                id: l.layerId,
                title: r.name,
                layer: this,
                graphics: n.features.map(
                  ({ geometry: e, symbol: t, attributes: r, popupInfo: i }) =>
                    o.Z.fromJSON({
                      attributes: r,
                      geometry: e,
                      symbol: t,
                      popupTemplate: i,
                    }),
                ),
              });
              i.push(e);
            }
          }
          return new n.Z(i);
        }
        writeSublayers(e, t, r, i) {
          const { minScale: o, maxScale: n } = this;
          if ((0, l.Wi)(e)) return;
          const s = e.some((e) => e.graphics.length > 0);
          var u;
          if (!this.capabilities.operations.supportsMapNotesEditing)
            return void (
              s &&
              (null == i ||
                null == (u = i.messages) ||
                u.push(
                  new a.Z(
                    'map-notes-layer:editing-not-supported',
                    'New map notes cannot be added to this layer',
                  ),
                ))
            );
          const c = [];
          let y = this.spatialReference.toJSON();
          e: for (const t of e)
            for (const e of t.graphics)
              if ((0, l.pC)(e.geometry)) {
                y = e.geometry.spatialReference.toJSON();
                break e;
              }
          for (const t of B) {
            const r = e.find((e) => t.layerId === e.id);
            this._writeMapNoteSublayer(c, r, t, o, n, y, i);
          }
          (0, p.RB)('featureCollection.layers', c, t);
        }
        get textLayer() {
          return this._findSublayer('textLayer');
        }
        load(e) {
          return (
            this.addResolvingPromise(
              this.loadFromPortal(
                { supportedTypes: ['Feature Collection'] },
                e,
              ),
            ),
            Promise.resolve(this)
          );
        }
        read(e, t) {
          'featureCollection' in e &&
            ((e = (0, s.d9)(e)), Object.assign(e, e.featureCollection)),
            super.read(e, t);
        }
        async beforeSave() {
          if ((0, l.Wi)(this.sublayers)) return;
          let e = null;
          const t = [];
          for (const r of this.sublayers)
            for (const i of r.graphics)
              if ((0, l.pC)(i.geometry)) {
                const r = i.geometry;
                e
                  ? (0, v.fS)(r.spatialReference, e) ||
                    ((0, b.Up)(r.spatialReference, e) ||
                      (0, b.kR)() ||
                      (await (0, b.zD)()),
                    (i.geometry = (0, b.iV)(r, e)))
                  : (e = r.spatialReference),
                  t.push(i);
              }
          const r = await (0, g.aX)(t.map((e) => e.geometry));
          t.forEach((e, t) => (e.geometry = r[t]));
        }
        _findSublayer(e) {
          var t, r;
          return (0, l.Wi)(this.sublayers)
            ? null
            : null !=
              (t =
                null == (r = this.sublayers)
                  ? void 0
                  : r.find((t) => t.id === e))
            ? t
            : null;
        }
        _writeMapNoteSublayer(e, t, r, i, o, n, a) {
          const u = [];
          if (!(0, l.Wi)(t)) {
            for (const e of t.graphics)
              this._writeMapNote(u, e, r.geometryType, a);
            this._normalizeObjectIds(u, G),
              e.push({
                layerDefinition: {
                  name: t.title,
                  drawingInfo: {
                    renderer: {
                      type: 'simple',
                      symbol: (0, s.d9)(r.identifyingSymbol),
                    },
                  },
                  geometryType: r.geometryTypeJSON,
                  minScale: i,
                  maxScale: o,
                  objectIdField: 'OBJECTID',
                  fields: [G.toJSON(), W.toJSON()],
                  spatialReference: n,
                },
                featureSet: { features: u, geometryType: r.geometryTypeJSON },
              });
          }
        }
        _writeMapNote(e, t, r, i) {
          if ((0, l.Wi)(t)) return;
          const { geometry: o, symbol: n, popupTemplate: a } = t;
          if ((0, l.Wi)(o)) return;
          var s, u;
          if (o.type !== r)
            return void (
              null == i ||
              null == (s = i.messages) ||
              s.push(
                new c.Z(
                  'map-notes-layer:invalid-geometry-type',
                  `Geometry "${o.type}" cannot be saved in "${r}" layer`,
                  { graphic: t },
                ),
              )
            );
          if ((0, l.Wi)(n))
            return void (
              null == i ||
              null == (u = i.messages) ||
              u.push(
                new c.Z(
                  'map-notes-layer:no-symbol',
                  'Skipping map notes with no symbol',
                  { graphic: t },
                ),
              )
            );
          const p = {
            attributes: { ...t.attributes },
            geometry: o.toJSON(),
            symbol: n.toJSON(),
          };
          (0, l.pC)(a) && (p.popupInfo = a.toJSON()), e.push(p);
        }
        _normalizeObjectIds(e, t) {
          const r = t.name;
          let i = (0, Z.S)(r, e) + 1;
          const o = new Set();
          for (const t of e) {
            t.attributes || (t.attributes = {});
            const { attributes: e } = t;
            (null == e[r] || o.has(e[r])) && (e[r] = i++), o.add(e[r]);
          }
        }
      };
      (0, i._)(
        [(0, y.Cb)({ readOnly: !0 })],
        K.prototype,
        'capabilities',
        void 0,
      ),
        (0, i._)(
          [(0, m.r)(['portal-item', 'web-map'], 'capabilities', ['layers'])],
          K.prototype,
          'readCapabilities',
          null,
        ),
        (0, i._)(
          [(0, y.Cb)({ readOnly: !0 })],
          K.prototype,
          'featureCollections',
          void 0,
        ),
        (0, i._)(
          [
            (0, m.r)(['web-map', 'portal-item'], 'featureCollections', [
              'layers',
            ]),
          ],
          K.prototype,
          'readFeatureCollections',
          null,
        ),
        (0, i._)(
          [
            (0, y.Cb)({
              readOnly: !0,
              json: {
                origins: {
                  'web-map': {
                    write: { enabled: !0, target: 'featureCollection' },
                  },
                },
              },
            }),
          ],
          K.prototype,
          'featureCollectionJSON',
          void 0,
        ),
        (0, i._)(
          [
            (0, m.r)(['web-map', 'portal-item'], 'featureCollectionJSON', [
              'featureCollection',
            ]),
          ],
          K.prototype,
          'readLegacyfeatureCollectionJSON',
          null,
        ),
        (0, i._)(
          [
            (0, y.Cb)({
              readOnly: !0,
              json: { read: !1, write: { enabled: !0, ignoreOrigin: !0 } },
            }),
          ],
          K.prototype,
          'featureCollectionType',
          void 0,
        ),
        (0, i._)(
          [(0, y.Cb)({ json: { write: !1 } })],
          K.prototype,
          'fullExtent',
          void 0,
        ),
        (0, i._)(
          [(0, m.r)(['web-map', 'portal-item'], 'fullExtent', ['layers'])],
          K.prototype,
          'readFullExtent',
          null,
        ),
        (0, i._)(
          [
            (0, y.Cb)({
              readOnly: !0,
              json: {
                origins: {
                  'web-map': {
                    write: {
                      target: 'featureCollection.showLegend',
                      overridePolicy() {
                        return { enabled: null != this.featureCollectionJSON };
                      },
                    },
                  },
                },
              },
            }),
          ],
          K.prototype,
          'legendEnabled',
          void 0,
        ),
        (0, i._)(
          [(0, y.Cb)({ type: ['show', 'hide'] })],
          K.prototype,
          'listMode',
          void 0,
        ),
        (0, i._)(
          [(0, y.Cb)({ type: Number, nonNullable: !0, json: { write: !1 } })],
          K.prototype,
          'minScale',
          void 0,
        ),
        (0, i._)(
          [(0, m.r)(['web-map', 'portal-item'], 'minScale', ['layers'])],
          K.prototype,
          'readMinScale',
          null,
        ),
        (0, i._)(
          [(0, y.Cb)({ type: Number, nonNullable: !0, json: { write: !1 } })],
          K.prototype,
          'maxScale',
          void 0,
        ),
        (0, i._)(
          [(0, m.r)(['web-map', 'portal-item'], 'maxScale', ['layers'])],
          K.prototype,
          'readMaxScale',
          null,
        ),
        (0, i._)(
          [(0, y.Cb)({ readOnly: !0 })],
          K.prototype,
          'multipointLayer',
          null,
        ),
        (0, i._)(
          [
            (0, y.Cb)({
              value: 'ArcGISFeatureLayer',
              type: ['ArcGISFeatureLayer'],
            }),
          ],
          K.prototype,
          'operationalLayerType',
          void 0,
        ),
        (0, i._)(
          [(0, y.Cb)({ readOnly: !0 })],
          K.prototype,
          'pointLayer',
          null,
        ),
        (0, i._)(
          [(0, y.Cb)({ readOnly: !0 })],
          K.prototype,
          'polygonLayer',
          null,
        ),
        (0, i._)(
          [(0, y.Cb)({ readOnly: !0 })],
          K.prototype,
          'polylineLayer',
          null,
        ),
        (0, i._)(
          [(0, y.Cb)({ type: k.Z })],
          K.prototype,
          'spatialReference',
          void 0,
        ),
        (0, i._)(
          [
            (0, m.r)(['web-map', 'portal-item'], 'spatialReference', [
              'layers',
            ]),
          ],
          K.prototype,
          'readSpatialReference',
          null,
        ),
        (0, i._)(
          [
            (0, y.Cb)({
              readOnly: !0,
              json: { origins: { 'web-map': { write: { ignoreOrigin: !0 } } } },
            }),
          ],
          K.prototype,
          'sublayers',
          void 0,
        ),
        (0, i._)(
          [(0, m.r)('web-map', 'sublayers', ['layers'])],
          K.prototype,
          'readSublayers',
          null,
        ),
        (0, i._)(
          [(0, f.c)('web-map', 'sublayers')],
          K.prototype,
          'writeSublayers',
          null,
        ),
        (0, i._)([(0, y.Cb)({ readOnly: !0 })], K.prototype, 'textLayer', null),
        (0, i._)([(0, y.Cb)()], K.prototype, 'title', void 0),
        (0, i._)(
          [(0, y.Cb)({ readOnly: !0, json: { read: !1 } })],
          K.prototype,
          'type',
          void 0,
        ),
        (K = (0, i._)([(0, h.j)('esri.layers.MapNotesLayer')], K));
      const Y = K;
    },
    92908: (e, t, r) => {
      r.d(t, { S: () => o, X: () => i });
      const i = 1;
      function o(e, t) {
        let r = 0;
        for (const o of t) {
          var i;
          const t = null == (i = o.attributes) ? void 0 : i[e];
          'number' == typeof t && isFinite(t) && (r = Math.max(r, t));
        }
        return r;
      }
    },
    54295: (e, t, r) => {
      r.d(t, { V: () => a });
      var i = r(43697),
        o = r(5600),
        n = (r(67676), r(80442), r(75215), r(52011));
      const a = (e) => {
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
          (0, i._)([(0, o.Cb)({ type: String })], t.prototype, 'apiKey', null),
          (t = (0, i._)([(0, n.j)('esri.layers.mixins.APIKeyMixin')], t)),
          t
        );
      };
    },
    17287: (e, t, r) => {
      r.d(t, { Y: () => u });
      var i = r(43697),
        o = r(92604),
        n = r(70586),
        a = r(5600),
        s = (r(67676), r(80442), r(75215), r(52011)),
        l = r(66677);
      const u = (e) => {
        let t = class extends e {
          get title() {
            if (this._get('title') && 'defaults' !== this.originOf('title'))
              return this._get('title');
            if (this.url) {
              const e = (0, l.Qc)(this.url);
              if ((0, n.pC)(e) && e.title) return e.title;
            }
            return this._get('title') || '';
          }
          set title(e) {
            this._set('title', e);
          }
          set url(e) {
            this._set('url', (0, l.Nm)(e, o.Z.getLogger(this.declaredClass)));
          }
        };
        return (
          (0, i._)([(0, a.Cb)()], t.prototype, 'title', null),
          (0, i._)([(0, a.Cb)({ type: String })], t.prototype, 'url', null),
          (t = (0, i._)([(0, s.j)('esri.layers.mixins.ArcGISService')], t)),
          t
        );
      };
    },
    16859: (e, t, r) => {
      r.d(t, { I: () => w });
      var i = r(43697),
        o = r(40330),
        n = r(3172),
        a = r(66643),
        s = r(20102),
        l = r(92604),
        u = r(70586),
        p = r(95330),
        c = r(17452),
        y = r(5600),
        d = (r(67676), r(80442), r(75215), r(71715)),
        m = r(52011),
        h = r(30556),
        f = r(65587),
        b = r(15235),
        g = r(86082);
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
                return new b.default({ id: t.itemId, portal: r && r.portal });
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
                ? null == o.id
                  ? void 0
                  : o.id.findCredential(this.url)
                : null;
              if (!t) return !0;
              const r =
                _.credential === t ? _.user : await this._fetchEditingUser(e);
              return (
                (_.credential = t),
                (_.user = r),
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
              const s = o.id.findServerInfo(this.url);
              if (null == s || !s.owningSystemUrl) return null;
              const l = `${s.owningSystemUrl}/sharing/rest`,
                p = f.Z.getDefault();
              if (p && p.loaded && (0, c.Fv)(p.restUrl) === (0, c.Fv)(l))
                return p.user;
              const y = `${l}/community/self`,
                d = (0, u.pC)(e) ? e.signal : null,
                m = await (0, a.q6)(
                  (0, n.default)(y, {
                    authMode: 'no-prompt',
                    query: { f: 'json' },
                    signal: d,
                  }),
                );
              return m.ok ? g.default.fromJSON(m.value.data) : null;
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
                      new s.Z(
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
              [(0, y.Cb)({ type: b.default })],
              t.prototype,
              'portalItem',
              null,
            ),
            (0, i._)(
              [(0, d.r)('web-document', 'portalItem', ['itemId'])],
              t.prototype,
              'readPortalItem',
              null,
            ),
            (0, i._)(
              [
                (0, h.c)('web-document', 'portalItem', {
                  itemId: { type: String },
                }),
              ],
              t.prototype,
              'writePortalItem',
              null,
            ),
            (0, i._)(
              [(0, y.Cb)({ clonable: !1 })],
              t.prototype,
              'resourceReferences',
              void 0,
            ),
            (0, i._)(
              [(0, y.Cb)({ readOnly: !0 })],
              t.prototype,
              'userHasEditingPrivileges',
              void 0,
            ),
            (t = (0, i._)([(0, m.j)('esri.layers.mixins.PortalLayer')], t)),
            t
          );
        },
        _ = { credential: null, user: null };
    },
    70082: (e, t, r) => {
      r.d(t, { Z: () => c });
      var i = r(43697),
        o = r(2368),
        n = r(35454),
        a = r(96674),
        s = r(5600),
        l = (r(67676), r(80442), r(75215), r(52011));
      const u = new n.X({
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
      let p = class extends (0, o.J)(a.wq) {
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
        [(0, s.Cb)({ json: { write: !0 } })],
        p.prototype,
        'name',
        void 0,
      ),
        (0, i._)(
          [(0, s.Cb)({ json: { write: !0 } })],
          p.prototype,
          'description',
          void 0,
        ),
        (0, i._)(
          [(0, s.Cb)({ json: { read: u.read, write: u.write } })],
          p.prototype,
          'drawingTool',
          void 0,
        ),
        (0, i._)(
          [(0, s.Cb)({ json: { write: !0 } })],
          p.prototype,
          'prototype',
          void 0,
        ),
        (0, i._)(
          [(0, s.Cb)({ json: { write: !0 } })],
          p.prototype,
          'thumbnail',
          void 0,
        ),
        (p = (0, i._)([(0, l.j)('esri.layers.support.FeatureTemplate')], p));
      const c = p;
    },
    16451: (e, t, r) => {
      r.d(t, { Z: () => d });
      var i = r(43697),
        o = r(2368),
        n = r(96674),
        a = r(5600),
        s = (r(67676), r(80442), r(75215), r(71715)),
        l = r(52011),
        u = r(30556),
        p = r(72729),
        c = r(70082);
      let y = class extends (0, o.J)(n.wq) {
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
      (0, i._)([(0, a.Cb)({ json: { write: !0 } })], y.prototype, 'id', void 0),
        (0, i._)(
          [(0, a.Cb)({ json: { write: !0 } })],
          y.prototype,
          'name',
          void 0,
        ),
        (0, i._)(
          [(0, a.Cb)({ json: { write: !0 } })],
          y.prototype,
          'domains',
          void 0,
        ),
        (0, i._)([(0, s.r)('domains')], y.prototype, 'readDomains', null),
        (0, i._)([(0, u.c)('domains')], y.prototype, 'writeDomains', null),
        (0, i._)(
          [(0, a.Cb)({ type: [c.Z], json: { write: !0 } })],
          y.prototype,
          'templates',
          void 0,
        ),
        (y = (0, i._)([(0, l.j)('esri.layers.support.FeatureType')], y));
      const d = y;
    },
    56765: (e, t, r) => {
      r.d(t, { Z: () => p });
      var i,
        o = r(43697),
        n = r(80539),
        a = r(96674),
        s = r(5600),
        l = (r(67676), r(80442), r(75215), r(52011));
      let u = (i = class extends a.wq {
        constructor(e) {
          super(e),
            (this.floorField = null),
            (this.viewAllMode = !1),
            (this.viewAllLevelIds = new n.Z());
        }
        clone() {
          return new i({
            floorField: this.floorField,
            viewAllMode: this.viewAllMode,
            viewAllLevelIds: this.viewAllLevelIds,
          });
        }
      });
      (0, o._)(
        [(0, s.Cb)({ type: String, json: { write: !0 } })],
        u.prototype,
        'floorField',
        void 0,
      ),
        (0, o._)(
          [(0, s.Cb)({ json: { read: !1, write: !1 } })],
          u.prototype,
          'viewAllMode',
          void 0,
        ),
        (0, o._)(
          [(0, s.Cb)({ json: { read: !1, write: !1 } })],
          u.prototype,
          'viewAllLevelIds',
          void 0,
        ),
        (u = i = (0, o._)([(0, l.j)('esri.layers.support.LayerFloorInfo')], u));
      const p = u;
    },
    99282: (e, t, r) => {
      r.d(t, { a: () => n });
      var i = r(67900),
        o = r(68441);
      const n = {
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
        'decimal-degrees': 1 / (0, i.ty)(1, 'meters', o.sv.radius),
      };
    },
    51706: (e, t, r) => {
      var i, o;
      function n(e) {
        return (
          e && 'esri.renderers.visualVariables.SizeVariable' === e.declaredClass
        );
      }
      function a(e) {
        return null != e && !isNaN(e) && isFinite(e);
      }
      function s(e) {
        return e.valueExpression
          ? i.Expression
          : e.field && 'string' == typeof e.field
          ? i.Field
          : i.Unknown;
      }
      function l(e, t) {
        const r = t || s(e),
          n = e.valueUnit || 'unknown';
        return r === i.Unknown
          ? o.Constant
          : e.stops
          ? o.Stops
          : null != e.minSize &&
            null != e.maxSize &&
            null != e.minDataValue &&
            null != e.maxDataValue
          ? o.ClampedLinear
          : 'unknown' === n
          ? null != e.minSize && null != e.minDataValue
            ? e.minSize && e.minDataValue
              ? o.Proportional
              : o.Additive
            : o.Identity
          : o.RealWorldSize;
      }
      r.d(t, {
        RY: () => i,
        hL: () => o,
        PS: () => s,
        QW: () => l,
        iY: () => n,
        qh: () => a,
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
        })(o || (o = {}));
    },
    28101: (e, t, r) => {
      r.d(t, {
        PR: () => C,
        Lq: () => m,
        Km: () => h,
        cM: () => f,
        ap: () => b,
        V3: () => w,
        B3: () => d,
      });
      var i = r(22303),
        o = r(38171),
        n = r(74085),
        a = r(92604),
        s = r(70586),
        l = r(99282),
        u = r(51706);
      const p = a.Z.getLogger(
          'esri.renderers.visualVariables.support.visualVariableUtils',
        ),
        c = new o.Z(),
        y = Math.PI,
        d = /^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i;
      function m(e, t, r) {
        const o =
          'visualVariables' in e && e.visualVariables
            ? e.visualVariables.find((e) => 'color' === e.type)
            : e;
        if (!o) return;
        if ('esri.renderers.visualVariables.ColorVariable' !== o.declaredClass)
          return void p.warn(
            'The visualVariable should be an instance of esri.renderers.visualVariables.ColorVariable',
          );
        const n = 'number' == typeof t,
          a = n ? null : t,
          l = a && a.attributes;
        let u = n ? t : null;
        const c = o.field,
          { ipData: y, hasExpression: d } = o.cache;
        let m = o.cache.compiledFunc;
        if (!c && !d) {
          const e = o.stops;
          return e && e[0] && e[0].color;
        }
        if ('number' != typeof u)
          if (d) {
            if (!(0, s.pC)(r) || !(0, s.pC)(r.arcade))
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
              n = t.createExecContext(a, i);
            if (!m) {
              const e = t.createSyntaxTree(o.valueExpression);
              (m = t.createFunction(e)), (o.cache.compiledFunc = m);
            }
            u = t.executeFunction(m, n);
          } else l && (u = l[c]);
        const h = o.normalizationField,
          f = l ? parseFloat(l[h]) : void 0;
        if (null != u && (!h || n || (!isNaN(f) && 0 !== f))) {
          isNaN(f) || n || (u /= f);
          const e = _(u, y);
          if (e) {
            const t = e[0],
              n = e[1],
              a =
                t === n
                  ? o.stops[t].color
                  : i.Z.blendColors(
                      o.stops[t].color,
                      o.stops[n].color,
                      e[2],
                      (0, s.pC)(r) ? r.color : void 0,
                    );
            return new i.Z(a);
          }
        }
      }
      function h(e, t, r) {
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
        const o = 'number' == typeof t,
          n = o ? null : t,
          a = n && n.attributes;
        let l = o ? t : null;
        const u = i.field,
          { ipData: c, hasExpression: y } = i.cache;
        let d = i.cache.compiledFunc;
        if (!u && !y) {
          const e = i.stops;
          return e && e[0] && e[0].opacity;
        }
        if ('number' != typeof l)
          if (y) {
            if ((0, s.Wi)(r) || (0, s.Wi)(r.arcade))
              return void p.error(
                'Use of arcade expressions requires an arcade context',
              );
            const e = {
                viewingMode: r.viewingMode,
                scale: r.scale,
                spatialReference: r.spatialReference,
              },
              t = r.arcade.arcadeUtils,
              o = t.getViewInfo(e),
              a = t.createExecContext(n, o);
            if (!d) {
              const e = t.createSyntaxTree(i.valueExpression);
              (d = t.createFunction(e)), (i.cache.compiledFunc = d);
            }
            l = t.executeFunction(d, a);
          } else a && (l = a[u]);
        const m = i.normalizationField,
          h = a ? parseFloat(a[m]) : void 0;
        if (null != l && (!m || o || (!isNaN(h) && 0 !== h))) {
          isNaN(h) || o || (l /= h);
          const e = _(l, c);
          if (e) {
            const t = e[0],
              r = e[1];
            if (t === r) return i.stops[t].opacity;
            {
              const o = i.stops[t].opacity;
              return o + (i.stops[r].opacity - o) * e[2];
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
        const o = i.axis || 'heading',
          n = 'heading' === o && 'arithmetic' === i.rotationType ? 90 : 0,
          a = 'heading' === o && 'arithmetic' === i.rotationType ? -1 : 1,
          l = 'number' == typeof t ? null : t,
          u = l && l.attributes,
          c = i.field,
          { hasExpression: y } = i.cache;
        let d = i.cache.compiledFunc,
          m = 0;
        if (!c && !y) return m;
        if (y) {
          if ((0, s.Wi)(r) || (0, s.Wi)(r.arcade))
            return void p.error(
              'Use of arcade expressions requires an arcade context',
            );
          const e = {
              viewingMode: r.viewingMode,
              scale: r.scale,
              spatialReference: r.spatialReference,
            },
            t = r.arcade.arcadeUtils,
            o = t.getViewInfo(e),
            n = t.createExecContext(l, o);
          if (!d) {
            const e = t.createSyntaxTree(i.valueExpression);
            (d = t.createFunction(e)), (i.cache.compiledFunc = d);
          }
          m = t.executeFunction(d, n);
        } else u && (m = u[c] || 0);
        return (m = 'number' != typeof m || isNaN(m) ? null : n + a * m), m;
      }
      function b(e, t, r) {
        const i =
          'visualVariables' in e && e.visualVariables
            ? e.visualVariables.find((e) => 'size' === e.type)
            : e;
        if (!i) return;
        if ('esri.renderers.visualVariables.SizeVariable' !== i.declaredClass)
          return void p.warn(
            'The visualVariable should be an instance of esri.renderers.visualVariables.SizeVariable',
          );
        const o = (function (e, t, r, i, o) {
          switch (t.transformationType) {
            case u.hL.Additive:
              return (function (e, t, r, i) {
                return e + (g(t.minSize, r, i) || t.minDataValue);
              })(e, t, r, i);
            case u.hL.Constant:
              return (function (e, t, r) {
                const i = e.stops;
                let o = i && i.length && i[0].size;
                return null == o && (o = e.minSize), g(o, t, r);
              })(t, r, i);
            case u.hL.ClampedLinear:
              return (function (e, t, r, i) {
                const o =
                    (e - t.minDataValue) / (t.maxDataValue - t.minDataValue),
                  n = g(t.minSize, r, i),
                  a = g(t.maxSize, r, i),
                  l = (0, s.pC)(i) ? i.shape : void 0;
                if (e <= t.minDataValue) return n;
                if (e >= t.maxDataValue) return a;
                if ('area' === t.scaleBy && l) {
                  const e = 'circle' === l,
                    t = e ? y * (n / 2) ** 2 : n * n,
                    r = t + o * ((e ? y * (a / 2) ** 2 : a * a) - t);
                  return e ? 2 * Math.sqrt(r / y) : Math.sqrt(r);
                }
                return n + o * (a - n);
              })(e, t, r, i);
            case u.hL.Proportional:
              return (function (e, t, r, i) {
                const o = (0, s.pC)(i) ? i.shape : void 0,
                  n = e / t.minDataValue,
                  a = g(t.minSize, r, i),
                  l = g(t.maxSize, r, i);
                let u = null;
                return (
                  (u =
                    'circle' === o
                      ? 2 * Math.sqrt(n * (a / 2) ** 2)
                      : 'square' === o || 'diamond' === o || 'image' === o
                      ? Math.sqrt(n * a ** 2)
                      : n * a),
                  v(u, a, l)
                );
              })(e, t, r, i);
            case u.hL.Stops:
              return (function (e, t, r, i, o) {
                const [n, a, s] = _(e, o);
                if (n === a) return g(t.stops[n].size, r, i);
                {
                  const e = g(t.stops[n].size, r, i);
                  return e + (g(t.stops[a].size, r, i) - e) * s;
                }
              })(e, t, r, i, o);
            case u.hL.RealWorldSize:
              return (function (e, t, r, i) {
                const o =
                    ((0, s.pC)(i) && i.resolution ? i.resolution : 1) *
                    l.a[t.valueUnit],
                  n = g(t.minSize, r, i),
                  a = g(t.maxSize, r, i),
                  { valueRepresentation: u } = t;
                let p = null;
                return (
                  (p =
                    'area' === u
                      ? (2 * Math.sqrt(e / y)) / o
                      : 'radius' === u || 'distance' === u
                      ? (2 * e) / o
                      : e / o),
                  v(p, n, a)
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
              o = i ? null : t,
              n = o && o.attributes;
            let a = i ? t : null;
            const { isScaleDriven: l } = e.cache;
            let c = e.cache.compiledFunc;
            if (l) {
              const t = (0, s.pC)(r) ? r.scale : void 0,
                i = (0, s.pC)(r) ? r.view : void 0;
              a =
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
                  if ((0, s.Wi)(r) || (0, s.Wi)(r.arcade))
                    return void p.error(
                      'Use of arcade expressions requires an arcade context',
                    );
                  const t = {
                      viewingMode: r.viewingMode,
                      scale: r.scale,
                      spatialReference: r.spatialReference,
                    },
                    i = r.arcade.arcadeUtils,
                    n = i.getViewInfo(t),
                    l = i.createExecContext(o, n);
                  if (!c) {
                    const t = i.createSyntaxTree(e.valueExpression);
                    (c = i.createFunction(t)), (e.cache.compiledFunc = c);
                  }
                  a = i.executeFunction(c, l);
                  break;
                }
                case u.RY.Field:
                  n && (a = n[e.field]);
                  break;
                case u.RY.Unknown:
                  a = null;
              }
            if (!(0, u.qh)(a)) return null;
            if (i || !e.normalizationField) return a;
            const y = n ? parseFloat(n[e.normalizationField]) : null;
            return (0, u.qh)(y) && 0 !== y ? a / y : null;
          })(i, t, r),
          i,
          t,
          r,
          i.cache.ipData,
        );
        return null == o || isNaN(o) ? 0 : o;
      }
      function g(e, t, r) {
        return null == e
          ? null
          : (0, u.iY)(e)
          ? b(e, t, r)
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
        const o = { scale: t, view: r };
        let n = g(e.minSize, c, o),
          a = g(e.maxSize, c, o);
        if (null != n || null != a) {
          if (n > a) {
            const e = a;
            (a = n), (n = e);
          }
          return { minSize: n, maxSize: a };
        }
      }
      function _(e, t) {
        if (!t) return;
        let r = 0,
          i = t.length - 1;
        return (
          t.some((t, o) => (e < t ? ((i = o), !0) : ((r = o), !1))),
          [r, i, (e - t[r]) / (t[i] - t[r])]
        );
      }
      function C(e, t, r) {
        const i = ['proportional', 'proportional', 'proportional'];
        for (const o of e) {
          const e = o.useSymbolValue ? 'symbol-value' : b(o, t, r);
          switch (o.axis) {
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
              (0, n.Bg)(o.axis);
          }
        }
        return i;
      }
    },
  },
]);
