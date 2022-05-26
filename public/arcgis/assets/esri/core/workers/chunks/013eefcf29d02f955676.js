'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [8014, 4889],
  {
    38171: (e, t, r) => {
      r.d(t, { Z: () => m });
      var i = r(43697),
        s = r(66577),
        o = r(51773),
        n = r(78223),
        l = r(2368),
        a = r(96674),
        u = r(70586),
        c = r(99001),
        p = r(5600),
        d = (r(67676), r(80442), r(75215), r(52011)),
        y = r(33955);
      function h(e) {
        if (!(0, u.pC)(e)) return null;
        const t = {};
        for (const r in e) {
          const i = e[r];
          i && (t[r] = i.toJSON());
        }
        return 0 !== Object.keys(t).length ? t : null;
      }
      let f = class extends (0, l.J)(a.wq) {
        constructor(...e) {
          super(...e),
            (this.isAggregate = !1),
            (this.layer = null),
            (this.popupTemplate = null),
            (this.sourceLayer = null),
            Object.defineProperty(this, 'uid', {
              value: (0, c.D)(),
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
            aggregateGeometries: h(this.aggregateGeometries),
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
          (0, p.Cb)({
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
        f.prototype,
        'aggregateGeometries',
        null,
      ),
        (0, i._)([(0, p.Cb)({ value: null })], f.prototype, 'attributes', null),
        (0, i._)(
          [(0, p.Cb)({ value: null, types: s.qM, json: { read: y.im } })],
          f.prototype,
          'geometry',
          null,
        ),
        (0, i._)(
          [(0, p.Cb)({ type: Boolean })],
          f.prototype,
          'isAggregate',
          void 0,
        ),
        (0, i._)(
          [(0, p.Cb)({ clonable: 'reference' })],
          f.prototype,
          'layer',
          void 0,
        ),
        (0, i._)(
          [(0, p.Cb)({ type: o.Z })],
          f.prototype,
          'popupTemplate',
          void 0,
        ),
        (0, i._)(
          [(0, p.Cb)({ clonable: 'reference' })],
          f.prototype,
          'sourceLayer',
          void 0,
        ),
        (0, i._)(
          [(0, p.Cb)({ value: null, types: n.LB })],
          f.prototype,
          'symbol',
          null,
        ),
        (0, i._)(
          [(0, p.Cb)({ type: Boolean, value: !0 })],
          f.prototype,
          'visible',
          null,
        ),
        (f = (0, i._)([(0, d.j)('esri.Graphic')], f)),
        ((f || (f = {})).generateUID = c.D);
      const m = f;
    },
    57435: (e, t, r) => {
      r.d(t, { Z: () => p });
      var i = r(43697),
        s = r(80539),
        o = r(3920),
        n = r(70586),
        l = (r(20102), r(92604), r(26258), r(87538)),
        a = r(5600),
        u = (r(67676), r(80442), r(75215), r(52011));
      let c = class extends (0, o.p)(s.Z) {
        constructor(e) {
          super(e), (this.getCollections = null);
        }
        initialize() {
          this.handles.add((0, l.EH)(() => this._refresh()));
        }
        destroy() {
          this.getCollections = null;
        }
        _refresh() {
          const e = (0, n.pC)(this.getCollections)
            ? this.getCollections()
            : null;
          if ((0, n.Wi)(e)) return void this.removeAll();
          let t = 0;
          for (const r of e)
            (0, n.pC)(r) && (t = this._processCollection(t, r));
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
      (0, i._)([(0, a.Cb)()], c.prototype, 'getCollections', void 0),
        (0, i._)([(0, a.Cb)()], c.prototype, 'getChildrenFunction', void 0),
        (0, i._)([(0, a.Cb)()], c.prototype, 'itemFilterFunction', void 0),
        (c = (0, i._)([(0, u.j)('esri.core.CollectionFlattener')], c));
      const p = c;
    },
    74085: (e, t, r) => {
      function i(e) {}
      r.d(t, { Bg: () => i }), r(80442);
    },
    42756: (e, t, r) => {
      r.r(t), r.d(t, { default: () => B });
      var i = r(43697),
        s = (r(66577), r(80539)),
        o = r(57435),
        n = r(70586),
        l = r(16453),
        a = r(95330),
        u = r(17452),
        c = r(5600),
        p = (r(67676), r(80442), r(75215)),
        d = r(71715),
        y = r(52011),
        h = r(30556),
        f = r(82971),
        m = r(29600),
        b = r(71612),
        g = r(38009),
        v = r(16859),
        _ = r(34760),
        C = r(72965),
        w = r(21506),
        S = r(32448),
        x = r(96674),
        I = r(83379),
        E = r(17445),
        V = r(19153),
        F = r(90578),
        P = r(68773),
        R = r(40330),
        j = (r(51773), r(3172)),
        M = r(22974),
        T = r(60437),
        L = r(20322);
      r(91423), r(74889);
      const N = {
        esriGeometryPoint: 'points',
        esriGeometryPolyline: 'polylines',
        esriGeometryPolygon: 'polygons',
      };
      function Z(e) {
        const t = e.folders || [],
          r = t.slice(),
          i = new Map(),
          s = new Map(),
          o = new Map(),
          n = new Map(),
          l = new Map(),
          a = {
            esriGeometryPoint: s,
            esriGeometryPolyline: o,
            esriGeometryPolygon: n,
          };
        ((e.featureCollection && e.featureCollection.layers) || []).forEach(
          (e) => {
            const t = (0, M.d9)(e);
            t.featureSet.features = [];
            const r = e.featureSet.geometryType;
            i.set(r, t);
            const l = e.layerDefinition.objectIdField;
            'esriGeometryPoint' === r
              ? q(s, l, e.featureSet.features)
              : 'esriGeometryPolyline' === r
              ? q(o, l, e.featureSet.features)
              : 'esriGeometryPolygon' === r && q(n, l, e.featureSet.features);
          },
        ),
          e.groundOverlays &&
            e.groundOverlays.forEach((e) => {
              l.set(e.id, e);
            }),
          t.forEach((t) => {
            t.networkLinkIds.forEach((i) => {
              const s = (function (e, t, r) {
                const i = (function (e, t) {
                  let r;
                  return t.some((t) => t.id === e && ((r = t), !0)), r;
                })(e, r);
                return i && ((i.parentFolderId = t), (i.networkLink = i)), i;
              })(i, t.id, e.networkLinks);
              s && r.push(s);
            });
          }),
          r.forEach((e) => {
            if (e.featureInfos) {
              (e.points = (0, M.d9)(i.get('esriGeometryPoint'))),
                (e.polylines = (0, M.d9)(i.get('esriGeometryPolyline'))),
                (e.polygons = (0, M.d9)(i.get('esriGeometryPolygon'))),
                (e.mapImages = []);
              for (const t of e.featureInfos)
                switch (t.type) {
                  case 'esriGeometryPoint':
                  case 'esriGeometryPolyline':
                  case 'esriGeometryPolygon': {
                    const r = a[t.type].get(t.id);
                    r && e[N[t.type]].featureSet.features.push(r);
                    break;
                  }
                  case 'GroundOverlay': {
                    const r = l.get(t.id);
                    r && e.mapImages.push(r);
                    break;
                  }
                }
              e.fullExtent = D([e]);
            }
          });
        const u = D(r);
        return { folders: t, sublayers: r, extent: u };
      }
      function k(e, t, r, i) {
        const s = R.id && R.id.findCredential(e);
        e = (0, u.fl)(e, { token: s && s.token });
        const o = P.Z.kmlServiceUrl;
        return (0, j.default)(o, {
          query: {
            url: e,
            model: 'simple',
            folders: '',
            refresh: 0 !== r || void 0,
            outSR: JSON.stringify(t),
          },
          responseType: 'json',
          signal: i,
        });
      }
      function O(e, t, r = null, i = []) {
        const s = [],
          o = {},
          n = t.sublayers,
          l = t.folders.map((e) => e.id);
        return (
          n.forEach((t) => {
            const n = new e();
            if (
              (r ? n.read(t, r) : n.read(t),
              i.length &&
                l.indexOf(n.id) > -1 &&
                (n.visible = -1 !== i.indexOf(n.id)),
              (o[t.id] = n),
              null != t.parentFolderId && -1 !== t.parentFolderId)
            ) {
              const e = o[t.parentFolderId];
              e.sublayers || (e.sublayers = []), e.sublayers.unshift(n);
            } else s.unshift(n);
          }),
          s
        );
      }
      function q(e, t, r) {
        r.forEach((r) => {
          e.set(r.attributes[t], r);
        });
      }
      function D(e) {
        const t = (0, T.Ue)(T.Gv),
          r = (0, T.Ue)(T.Gv);
        for (const i of e) {
          if (
            i.polygons &&
            i.polygons.featureSet &&
            i.polygons.featureSet.features
          )
            for (const e of i.polygons.featureSet.features)
              (0, L.Yg)(t, e.geometry), (0, T.TC)(r, t);
          if (
            i.polylines &&
            i.polylines.featureSet &&
            i.polylines.featureSet.features
          )
            for (const e of i.polylines.featureSet.features)
              (0, L.Yg)(t, e.geometry), (0, T.TC)(r, t);
          if (i.points && i.points.featureSet && i.points.featureSet.features)
            for (const e of i.points.featureSet.features)
              (0, L.Yg)(t, e.geometry), (0, T.TC)(r, t);
          if (i.mapImages)
            for (const e of i.mapImages)
              (0, L.Yg)(t, e.extent), (0, T.TC)(r, t);
        }
        return (0, T.fS)(r, T.Gv)
          ? null
          : {
              xmin: r[0],
              ymin: r[1],
              zmin: r[2],
              xmax: r[3],
              ymax: r[4],
              zmax: r[5],
              spatialReference: f.Z.WGS84,
            };
      }
      var z,
        G = r(6570);
      let U = (z = class extends S.Z.EventedMixin((0, x.eC)(I.Z)) {
        constructor() {
          super(...arguments),
            (this._sublayersHandles = null),
            (this.description = null),
            (this.id = null),
            (this.networkLink = null),
            (this.title = null),
            (this.sourceJSON = null),
            (this.fullExtent = null);
        }
        initialize() {
          (0, E.N1)(() => this.networkLink)
            .then(() => (0, E.N1)(() => !0 === this.visible))
            .then(() => this.load());
        }
        load(e) {
          if (!this.networkLink) return;
          if (this.networkLink.viewFormat) return;
          const t = (0, n.pC)(e) ? e.signal : null,
            r = this._fetchService(this._get('networkLink').href, t).then(
              (e) => {
                const t = D(e.sublayers);
                (this.fullExtent = G.Z.fromJSON(t)), (this.sourceJSON = e);
                const r = (0, p.se)(s.Z.ofType(z), O(z, e));
                this.sublayers
                  ? this.sublayers.addMany(r)
                  : (this.sublayers = r),
                  this.layer.emit('sublayer-update'),
                  this.layer && this.layer.notifyChange('visibleSublayers');
              },
            );
          return this.addResolvingPromise(r), Promise.resolve(this);
        }
        set sublayers(e) {
          const t = this._get('sublayers');
          t &&
            (t.forEach((e) => {
              (e.parent = null), (e.layer = null);
            }),
            this._sublayersHandles.forEach((e) => e.remove()),
            (this._sublayersHandles = null)),
            e &&
              (e.forEach((e) => {
                (e.parent = this), (e.layer = this.layer);
              }),
              (this._sublayersHandles = [
                e.on('after-add', ({ item: e }) => {
                  (e.parent = this), (e.layer = this.layer);
                }),
                e.on('after-remove', ({ item: e }) => {
                  (e.parent = null), (e.layer = null);
                }),
              ])),
            this._set('sublayers', e);
        }
        castSublayers(e) {
          return (0, p.se)(s.Z.ofType(z), e);
        }
        get visible() {
          return this._get('visible');
        }
        set visible(e) {
          this._get('visible') !== e &&
            (this._set('visible', e),
            this.layer && this.layer.notifyChange('visibleSublayers'));
        }
        readVisible(e, t) {
          return !!t.visibility;
        }
        set layer(e) {
          this._set('layer', e),
            this.sublayers && this.sublayers.forEach((t) => (t.layer = e));
        }
        _fetchService(e, t) {
          return k(
            e,
            this.layer.outSpatialReference,
            this.layer.refreshInterval,
            t,
          ).then((e) => Z(e.data));
        }
      });
      (0, i._)([(0, c.Cb)()], U.prototype, 'description', void 0),
        (0, i._)([(0, c.Cb)()], U.prototype, 'id', void 0),
        (0, i._)(
          [(0, c.Cb)({ readOnly: !0, value: null })],
          U.prototype,
          'networkLink',
          void 0,
        ),
        (0, i._)(
          [(0, c.Cb)({ json: { write: { allowNull: !0 } } })],
          U.prototype,
          'parent',
          void 0,
        ),
        (0, i._)(
          [(0, c.Cb)({ value: null, json: { write: { allowNull: !0 } } })],
          U.prototype,
          'sublayers',
          null,
        ),
        (0, i._)([(0, F.p)('sublayers')], U.prototype, 'castSublayers', null),
        (0, i._)(
          [
            (0, c.Cb)({
              value: null,
              json: { read: { source: 'name', reader: (e) => (0, V.Cb)(e) } },
            }),
          ],
          U.prototype,
          'title',
          void 0,
        ),
        (0, i._)([(0, c.Cb)({ value: !0 })], U.prototype, 'visible', null),
        (0, i._)(
          [(0, d.r)('visible', ['visibility'])],
          U.prototype,
          'readVisible',
          null,
        ),
        (0, i._)([(0, c.Cb)()], U.prototype, 'sourceJSON', void 0),
        (0, i._)([(0, c.Cb)({ value: null })], U.prototype, 'layer', null),
        (0, i._)([(0, c.Cb)({ type: G.Z })], U.prototype, 'fullExtent', void 0),
        (U = z = (0, i._)([(0, y.j)('esri.layers.support.KMLSublayer')], U));
      const A = U,
        J = ['kml', 'xml'];
      let H = class extends (0, b.h)(
        (0, _.Q)((0, C.M)((0, g.q)((0, v.I)((0, l.R)(m.Z))))),
      ) {
        constructor(...e) {
          super(...e),
            (this._visibleFolders = []),
            (this.allSublayers = new o.Z({
              getCollections: () => [this.sublayers],
              getChildrenFunction: (e) => e.sublayers,
            })),
            (this.outSpatialReference = f.Z.WGS84),
            (this.path = null),
            (this.legendEnabled = !1),
            (this.operationalLayerType = 'KML'),
            (this.sublayers = null),
            (this.type = 'kml'),
            (this.url = null);
        }
        initialize() {
          this.watch(
            'sublayers',
            (e, t) => {
              t &&
                t.forEach((e) => {
                  (e.parent = null), (e.layer = null);
                }),
                e &&
                  e.forEach((e) => {
                    (e.parent = this), (e.layer = this);
                  });
            },
            !0,
          ),
            this.on('sublayer-update', () => this.notifyChange('fullExtent'));
        }
        normalizeCtorArgs(e, t) {
          return 'string' == typeof e ? { url: e, ...t } : e;
        }
        readSublayersFromItemOrWebMap(e, t) {
          this._visibleFolders = t.visibleFolders;
        }
        readSublayers(e, t, r) {
          return O(A, t, r, this._visibleFolders);
        }
        writeSublayers(e, t) {
          const r = [],
            i = e.toArray();
          for (; i.length; ) {
            const e = i[0];
            e.networkLink ||
              (e.visible && r.push(e.id),
              e.sublayers && i.push(...e.sublayers.toArray())),
              i.shift();
          }
          t.visibleFolders = r;
        }
        get title() {
          const e = this._get('title');
          return e && 'defaults' !== this.originOf('title')
            ? e
            : this.url
            ? (0, u.vt)(this.url, J) || 'KML'
            : e || '';
        }
        set title(e) {
          this._set('title', e);
        }
        get visibleSublayers() {
          const e = this.sublayers,
            t = [],
            r = (e) => {
              e.visible && (t.push(e), e.sublayers && e.sublayers.forEach(r));
            };
          return e && e.forEach(r), t;
        }
        get fullExtent() {
          return this._recomputeFullExtent();
        }
        load(e) {
          const t = (0, n.pC)(e) ? e.signal : null;
          return (
            this.addResolvingPromise(
              this.loadFromPortal({ supportedTypes: ['KML'] }, e)
                .catch(a.r9)
                .then(() => this._fetchService(t)),
            ),
            Promise.resolve(this)
          );
        }
        destroy() {
          super.destroy(), this.allSublayers.destroy();
        }
        async _fetchService(e) {
          const t = Z(
            (
              await Promise.resolve().then(() =>
                this.resourceInfo
                  ? { ssl: !1, data: this.resourceInfo }
                  : k(
                      this.url,
                      this.outSpatialReference,
                      this.refreshInterval,
                      e,
                    ),
              )
            ).data,
          );
          t && this.read(t, { origin: 'service' });
        }
        _recomputeFullExtent() {
          let e = null;
          (0, n.pC)(this.extent) && (e = this.extent.clone());
          const t = (r) => {
            if (r.sublayers)
              for (const i of r.sublayers.items)
                t(i),
                  i.visible &&
                    i.fullExtent &&
                    ((0, n.pC)(e)
                      ? e.union(i.fullExtent)
                      : (e = i.fullExtent.clone()));
          };
          return t(this), e;
        }
      };
      (0, i._)(
        [(0, c.Cb)({ readOnly: !0 })],
        H.prototype,
        'allSublayers',
        void 0,
      ),
        (0, i._)(
          [(0, c.Cb)({ type: f.Z })],
          H.prototype,
          'outSpatialReference',
          void 0,
        ),
        (0, i._)(
          [
            (0, c.Cb)({
              type: String,
              json: {
                origins: { 'web-scene': { read: !0, write: !0 } },
                read: !1,
              },
            }),
          ],
          H.prototype,
          'path',
          void 0,
        ),
        (0, i._)(
          [(0, c.Cb)({ readOnly: !0, json: { read: !1, write: !1 } })],
          H.prototype,
          'legendEnabled',
          void 0,
        ),
        (0, i._)(
          [(0, c.Cb)({ type: ['show', 'hide', 'hide-children'] })],
          H.prototype,
          'listMode',
          void 0,
        ),
        (0, i._)(
          [(0, c.Cb)({ type: ['KML'] })],
          H.prototype,
          'operationalLayerType',
          void 0,
        ),
        (0, i._)([(0, c.Cb)({})], H.prototype, 'resourceInfo', void 0),
        (0, i._)(
          [
            (0, c.Cb)({
              type: s.Z.ofType(A),
              json: { write: { ignoreOrigin: !0 } },
            }),
          ],
          H.prototype,
          'sublayers',
          void 0,
        ),
        (0, i._)(
          [
            (0, d.r)(['web-map', 'portal-item'], 'sublayers', [
              'visibleFolders',
            ]),
          ],
          H.prototype,
          'readSublayersFromItemOrWebMap',
          null,
        ),
        (0, i._)(
          [(0, d.r)('service', 'sublayers', ['sublayers'])],
          H.prototype,
          'readSublayers',
          null,
        ),
        (0, i._)([(0, h.c)('sublayers')], H.prototype, 'writeSublayers', null),
        (0, i._)(
          [(0, c.Cb)({ readOnly: !0, json: { read: !1 } })],
          H.prototype,
          'type',
          void 0,
        ),
        (0, i._)(
          [
            (0, c.Cb)({
              json: {
                origins: { 'web-map': { read: { source: 'title' } } },
                write: { ignoreOrigin: !0 },
              },
            }),
          ],
          H.prototype,
          'title',
          null,
        ),
        (0, i._)([(0, c.Cb)(w.HQ)], H.prototype, 'url', void 0),
        (0, i._)(
          [(0, c.Cb)({ readOnly: !0 })],
          H.prototype,
          'visibleSublayers',
          null,
        ),
        (0, i._)([(0, c.Cb)({ type: G.Z })], H.prototype, 'extent', void 0),
        (0, i._)([(0, c.Cb)()], H.prototype, 'fullExtent', null),
        (H = (0, i._)([(0, y.j)('esri.layers.KMLLayer')], H));
      const B = H;
    },
    16859: (e, t, r) => {
      r.d(t, { I: () => _ });
      var i = r(43697),
        s = r(40330),
        o = r(3172),
        n = r(66643),
        l = r(20102),
        a = r(92604),
        u = r(70586),
        c = r(95330),
        p = r(17452),
        d = r(5600),
        y = (r(67676), r(80442), r(75215), r(71715)),
        h = r(52011),
        f = r(30556),
        m = r(65587),
        b = r(15235),
        g = r(86082);
      const v = a.Z.getLogger('esri.layers.mixins.PortalLayer'),
        _ = (e) => {
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
                    (0, c.k_)(t),
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
                    ((0, c.D_)(e) ||
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
                  (e) => ((0, c.r9)(e), !0),
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
              const l = s.id.findServerInfo(this.url);
              if (null == l || !l.owningSystemUrl) return null;
              const a = `${l.owningSystemUrl}/sharing/rest`,
                c = m.Z.getDefault();
              if (c && c.loaded && (0, p.Fv)(c.restUrl) === (0, p.Fv)(a))
                return c.user;
              const d = `${a}/community/self`,
                y = (0, u.pC)(e) ? e.signal : null,
                h = await (0, n.q6)(
                  (0, o.default)(d, {
                    authMode: 'no-prompt',
                    query: { f: 'json' },
                    signal: y,
                  }),
                );
              return h.ok ? g.default.fromJSON(h.value.data) : null;
            }
            read(e, t) {
              t && (t.layer = this), super.read(e, t);
            }
            write(e, t) {
              const r = t && t.portal,
                i =
                  this.portalItem &&
                  this.portalItem.id &&
                  (this.portalItem.portal || m.Z.getDefault());
              return r && i && !(0, p.tm)(i.restUrl, r.restUrl)
                ? (t.messages &&
                    t.messages.push(
                      new l.Z(
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
              [(0, d.Cb)({ type: b.default })],
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
                (0, f.c)('web-document', 'portalItem', {
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
            (t = (0, i._)([(0, h.j)('esri.layers.mixins.PortalLayer')], t)),
            t
          );
        },
        C = { credential: null, user: null };
    },
    34760: (e, t, r) => {
      r.d(t, { Q: () => b });
      var i = r(43697),
        s = r(92604),
        o = r(95330),
        n = r(5600),
        l = (r(67676), r(80442), r(75215), r(52011)),
        a = r(80539),
        u = (r(20102), r(26258), r(87538));
      const c = new a.Z(),
        p = new WeakMap();
      function d(e) {
        return (
          e && 'object' == typeof e && 'refreshInterval' in e && 'refresh' in e
        );
      }
      function y(e, t) {
        return Number.isFinite(e) && Number.isFinite(t)
          ? t <= 0
            ? e
            : y(t, e % t)
          : 0;
      }
      let h = 0,
        f = 0;
      function m() {
        const e = Date.now();
        for (const r of c)
          if (r.refreshInterval) {
            var t;
            e - (null != (t = p.get(r)) ? t : 0) + 5 >=
              6e4 * r.refreshInterval && (p.set(r, e), r.refresh(e));
          }
      }
      (0, u.EH)(() => {
        const e = Date.now();
        let t = 0;
        for (const r of c)
          (t = y(Math.round(6e4 * r.refreshInterval), t)),
            r.refreshInterval ? p.get(r) || p.set(r, e) : p.delete(r);
        if (t !== f) {
          if (((f = t), clearInterval(h), 0 === f)) return void (h = 0);
          h = setInterval(m, f);
        }
      });
      const b = (e) => {
        let t = class extends e {
          constructor(...e) {
            super(...e),
              (this.refreshInterval = 0),
              (this.refreshTimestamp = 0),
              (this._debounceHasDataChanged = (0, o.Ds)(() =>
                this.hasDataChanged(),
              )),
              this.when().then(
                () => {
                  !(function (e) {
                    d(e) && c.push(e);
                  })(this);
                },
                () => {},
              );
          }
          destroy() {
            d(this) && c.includes(this) && c.remove(this);
          }
          get refreshParameters() {
            return { _ts: this.refreshTimestamp || null };
          }
          refresh(e = Date.now()) {
            (0, o.R8)(this._debounceHasDataChanged()).then(
              (t) => {
                t && this._set('refreshTimestamp', e),
                  this.emit('refresh', { dataChanged: t });
              },
              (e) => {
                s.Z.getLogger(this.declaredClass).error(e),
                  this.emit('refresh', { dataChanged: !1, error: e });
              },
            );
          }
          async hasDataChanged() {
            return !0;
          }
        };
        return (
          (0, i._)(
            [
              (0, n.Cb)({
                type: Number,
                cast: (e) => (e >= 0.1 ? e : e <= 0 ? 0 : 0.1),
                json: { write: !0 },
              }),
            ],
            t.prototype,
            'refreshInterval',
            void 0,
          ),
          (0, i._)(
            [(0, n.Cb)({ readOnly: !0 })],
            t.prototype,
            'refreshTimestamp',
            void 0,
          ),
          (0, i._)([(0, n.Cb)()], t.prototype, 'refreshParameters', null),
          (t = (0, i._)([(0, l.j)('esri.layers.mixins.RefreshableLayer')], t)),
          t
        );
      };
    },
    12501: (e, t, r) => {
      r.d(t, { Z: () => h });
      var i,
        s = r(43697),
        o = r(22974),
        n = r(5600),
        l = (r(75215), r(52011)),
        a = r(30556),
        u = r(35671),
        c = r(5499),
        p = r(12571),
        d = r(84475);
      let y = (i = class extends (0, p.W)(c.Z) {
        constructor(e) {
          super(e),
            (this.config = null),
            (this.fieldMap = null),
            (this.scaleExpression = null),
            (this.scaleExpressionTitle = null),
            (this.url = null),
            (this.type = 'dictionary');
        }
        get _loader() {
          return new d.DictionaryLoader(this.url, this.config, this.fieldMap);
        }
        writeData(e, t) {
          e &&
            (t.scalingExpressionInfo = { expression: e, returnType: 'number' });
        }
        writeVisualVariables(e, t, r, i) {
          (null != i && i.origin) || super.writeVisualVariables(e, t, r, i);
        }
        clone() {
          return new i({
            config: (0, o.d9)(this.config),
            scaleExpression: this.scaleExpression,
            scaleExpressionTitle: this.scaleExpressionTitle,
            fieldMap: (0, o.d9)(this.fieldMap),
            url: (0, o.d9)(this.url),
            visualVariables: (0, o.d9)(this.visualVariables),
          });
        }
        async getSymbolAsync(e, t) {
          return this._loader.getSymbolAsync(e, t);
        }
        async collectRequiredFields(e, t) {
          await this.collectVVRequiredFields(e, t),
            this.scaleExpression &&
              (await (0, u.io)(e, t, this.scaleExpression));
          for (const r in this.fieldMap) {
            const i = this.fieldMap[r];
            t.has(i) && e.add(i);
          }
        }
        get arcadeRequired() {
          return !0;
        }
        getSymbol() {
          return null;
        }
        getSymbols() {
          return [];
        }
        getAttributeHash() {
          return (
            this.visualVariables &&
            this.visualVariables.reduce((e, t) => e + t.getAttributeHash(), '')
          );
        }
        getMeshHash() {
          return `${this.url}-${JSON.stringify(this.fieldMap)}`;
        }
        getSymbolFields() {
          return this._loader.getSymbolFields();
        }
      });
      (0, s._)(
        [(0, n.Cb)({ type: d.DictionaryLoader })],
        y.prototype,
        '_loader',
        null,
      ),
        (0, s._)(
          [
            (0, n.Cb)({
              type: Object,
              json: {
                read: { source: 'configuration' },
                write: { target: 'configuration' },
              },
            }),
          ],
          y.prototype,
          'config',
          void 0,
        ),
        (0, s._)(
          [(0, n.Cb)({ type: Object, json: { write: !0 } })],
          y.prototype,
          'fieldMap',
          void 0,
        ),
        (0, s._)(
          [
            (0, n.Cb)({
              type: String,
              json: {
                read: { source: 'scalingExpressionInfo.expression' },
                write: !0,
              },
            }),
          ],
          y.prototype,
          'scaleExpression',
          void 0,
        ),
        (0, s._)([(0, a.c)('scaleExpression')], y.prototype, 'writeData', null),
        (0, s._)(
          [
            (0, n.Cb)({
              type: String,
              json: {
                read: { source: 'scalingExpressionInfo.title' },
                write: {
                  target: 'scalingExpressionInfo.title',
                  overridePolicy(e) {
                    return { enabled: !!e && !!this.scaleExpression };
                  },
                },
              },
            }),
          ],
          y.prototype,
          'scaleExpressionTitle',
          void 0,
        ),
        (0, s._)(
          [(0, n.Cb)({ type: String, json: { write: !0 } })],
          y.prototype,
          'url',
          void 0,
        ),
        (0, s._)(
          [(0, a.c)('visualVariables')],
          y.prototype,
          'writeVisualVariables',
          null,
        ),
        (y = i = (0, s._)([(0, l.j)('esri.renderers.DictionaryRenderer')], y));
      const h = y;
    },
    95088: (e, t, r) => {
      r.d(t, { Z: () => F });
      var i,
        s = r(43697),
        o = r(22303),
        n = r(22974),
        l = r(44422),
        a = r(75215),
        u = r(36030),
        c = r(5600),
        p = r(52011),
        d = r(35671),
        y = r(5499),
        h = r(12571),
        f = r(96674),
        m = r(92604),
        b = (r(67676), r(80442), r(90578));
      const g = m.Z.getLogger('esri.renderers.support.AttributeColorInfo');
      let v = (i = class extends f.wq {
        constructor(e) {
          super(e),
            (this.color = null),
            (this.field = null),
            (this.label = null),
            (this.valueExpression = null),
            (this.valueExpressionTitle = null);
        }
        castField(e) {
          return null == e
            ? e
            : 'function' == typeof e
            ? (g.error('.field: field must be a string value'), null)
            : (0, a.Zs)(e);
        }
        getAttributeHash() {
          return `${this.field}-${this.valueExpression}`;
        }
        clone() {
          return new i({
            color: this.color && this.color.clone(),
            field: this.field,
            label: this.label,
            valueExpression: this.valueExpression,
            valueExpressionTitle: this.valueExpressionTitle,
          });
        }
      });
      (0, s._)(
        [(0, c.Cb)({ type: o.Z, json: { type: [Number], write: !0 } })],
        v.prototype,
        'color',
        void 0,
      ),
        (0, s._)(
          [(0, c.Cb)({ type: String, json: { write: !0 } })],
          v.prototype,
          'field',
          void 0,
        ),
        (0, s._)([(0, b.p)('field')], v.prototype, 'castField', null),
        (0, s._)(
          [(0, c.Cb)({ type: String, json: { write: !0 } })],
          v.prototype,
          'label',
          void 0,
        ),
        (0, s._)(
          [(0, c.Cb)({ type: String, json: { write: !0 } })],
          v.prototype,
          'valueExpression',
          void 0,
        ),
        (0, s._)(
          [(0, c.Cb)({ type: String, json: { write: !0 } })],
          v.prototype,
          'valueExpressionTitle',
          void 0,
        ),
        (v = i =
          (0, s._)([(0, p.j)('esri.renderers.support.AttributeColorInfo')], v));
      const _ = v;
      var C;
      let w = (C = class extends f.wq {
        constructor() {
          super(...arguments), (this.unit = null);
        }
        clone() {
          return new C({ unit: this.unit });
        }
      });
      (0, s._)(
        [(0, c.Cb)({ type: String, json: { write: !0 } })],
        w.prototype,
        'unit',
        void 0,
      ),
        (w = C =
          (0, s._)(
            [(0, p.j)('esri.renderers.support.DotDensityLegendOptions')],
            w,
          ));
      const S = w;
      var x,
        I = r(20256),
        E = r(4095);
      let V = (x = class extends (0, h.W)(y.Z) {
        constructor(e) {
          super(e),
            (this.attributes = null),
            (this.backgroundColor = new o.Z([0, 0, 0, 0])),
            (this.blendDots = !0),
            (this.dotBlendingEnabled = !0),
            (this.dotShape = 'square'),
            (this.dotSize = 1),
            (this.legendOptions = null),
            (this.outline = new E.Z()),
            (this.dotValue = null),
            (this.referenceDotValue = null),
            (this.referenceScale = null),
            (this.seed = 1),
            (this.type = 'dot-density');
        }
        calculateDotValue(e) {
          if (null == this.referenceScale) return this.dotValue;
          const t = (e / this.referenceScale) * this.dotValue;
          return t < 1 ? 1 : t;
        }
        getSymbol() {
          return new I.Z({ outline: this.outline });
        }
        async getSymbolAsync() {
          return this.getSymbol();
        }
        getSymbols() {
          return [this.getSymbol()];
        }
        getAttributeHash() {
          return (
            this.attributes &&
            this.attributes.reduce((e, t) => e + t.getAttributeHash(), '')
          );
        }
        getMeshHash() {
          return JSON.stringify(this.outline);
        }
        clone() {
          return new x({
            attributes: (0, n.d9)(this.attributes),
            backgroundColor: (0, n.d9)(this.backgroundColor),
            dotBlendingEnabled: (0, n.d9)(this.dotBlendingEnabled),
            dotShape: (0, n.d9)(this.dotShape),
            dotSize: (0, n.d9)(this.dotSize),
            dotValue: (0, n.d9)(this.dotValue),
            legendOptions: (0, n.d9)(this.legendOptions),
            outline: (0, n.d9)(this.outline),
            referenceScale: (0, n.d9)(this.referenceScale),
            visualVariables: (0, n.d9)(this.visualVariables),
            authoringInfo: this.authoringInfo && this.authoringInfo.clone(),
          });
        }
        getControllerHash() {
          return `${this.attributes.map(
            (e) => e.field || e.valueExpression || '',
          )}-${(this.outline && JSON.stringify(this.outline.toJSON())) || ''}`;
        }
        async collectRequiredFields(e, t) {
          await this.collectVVRequiredFields(e, t);
          for (const r of this.attributes)
            r.valueExpression && (await (0, d.io)(e, t, r.valueExpression)),
              r.field && e.add(r.field);
        }
      });
      (0, s._)(
        [(0, c.Cb)({ type: [_], json: { write: !0 } })],
        V.prototype,
        'attributes',
        void 0,
      ),
        (0, s._)(
          [(0, c.Cb)({ type: o.Z, json: { write: !0 } })],
          V.prototype,
          'backgroundColor',
          void 0,
        ),
        (0, s._)(
          [(0, c.Cb)({ type: Boolean }), (0, l.B)('dotBlendingEnabled')],
          V.prototype,
          'blendDots',
          void 0,
        ),
        (0, s._)(
          [(0, c.Cb)({ type: Boolean, json: { write: !0 } })],
          V.prototype,
          'dotBlendingEnabled',
          void 0,
        ),
        (0, s._)(
          [(0, c.Cb)({ type: String, json: { write: !1 } })],
          V.prototype,
          'dotShape',
          void 0,
        ),
        (0, s._)(
          [
            (0, c.Cb)({
              type: Number,
              json: {
                write: !0,
                origins: {
                  'web-map': { write: !1 },
                  'web-scene': { write: !1 },
                },
              },
            }),
          ],
          V.prototype,
          'dotSize',
          void 0,
        ),
        (0, s._)(
          [(0, c.Cb)({ type: S, json: { write: !0 } })],
          V.prototype,
          'legendOptions',
          void 0,
        ),
        (0, s._)(
          [(0, c.Cb)({ type: E.Z, json: { default: null, write: !0 } })],
          V.prototype,
          'outline',
          void 0,
        ),
        (0, s._)(
          [(0, c.Cb)({ type: Number, json: { write: !0 } })],
          V.prototype,
          'dotValue',
          void 0,
        ),
        (0, s._)(
          [(0, c.Cb)({ type: Number }), (0, l.B)('dotValue')],
          V.prototype,
          'referenceDotValue',
          void 0,
        ),
        (0, s._)(
          [(0, c.Cb)({ type: Number, json: { write: !0 } })],
          V.prototype,
          'referenceScale',
          void 0,
        ),
        (0, s._)(
          [(0, c.Cb)({ type: Number, json: { write: !0 } })],
          V.prototype,
          'seed',
          void 0,
        ),
        (0, s._)(
          [(0, u.J)({ dotDensity: 'dot-density' })],
          V.prototype,
          'type',
          void 0,
        ),
        (V = x = (0, s._)([(0, p.j)('esri.renderers.DotDensityRenderer')], V));
      const F = V;
    },
    79056: (e, t, r) => {
      r.d(t, { Z: () => b });
      var i,
        s = r(43697),
        o = r(22303),
        n = r(22974),
        l = r(5600),
        a = (r(75215), r(36030)),
        u = r(52011),
        c = r(35671),
        p = r(5499),
        d = r(96674);
      r(67676), r(80442);
      let y = (i = class extends d.wq {
        constructor(e) {
          super(e), (this.color = null), (this.ratio = null);
        }
        clone() {
          return new i({ color: this.color, ratio: this.ratio });
        }
      });
      (0, s._)(
        [(0, l.Cb)({ type: o.Z, json: { write: !0 } })],
        y.prototype,
        'color',
        void 0,
      ),
        (0, s._)(
          [(0, l.Cb)({ type: Number, json: { write: !0 } })],
          y.prototype,
          'ratio',
          void 0,
        ),
        (y = i =
          (0, s._)([(0, u.j)('esri.renderers.support.HeatmapColorStop')], y));
      const h = y;
      var f;
      let m = (f = class extends p.Z {
        constructor(e) {
          super(e),
            (this.blurRadius = 10),
            (this.referenceScale = 0),
            (this.colorStops = [
              new h({ ratio: 0, color: new o.Z('rgba(255, 140, 0, 0)') }),
              new h({ ratio: 0.75, color: new o.Z('rgba(255, 140, 0, 1)') }),
              new h({ ratio: 0.9, color: new o.Z('rgba(255, 0,   0, 1)') }),
            ]),
            (this.field = null),
            (this.fieldOffset = 0),
            (this.maxPixelIntensity = 100),
            (this.minPixelIntensity = 0),
            (this.type = 'heatmap');
        }
        async collectRequiredFields(e, t) {
          const r = this.field;
          r && 'string' == typeof r && (0, c.AB)(e, t, r);
        }
        getAttributeHash() {
          return null;
        }
        getMeshHash() {
          return `${JSON.stringify(this.colorStops)}.${this.blurRadius}.${
            this.field
          }`;
        }
        clone() {
          return new f({
            blurRadius: this.blurRadius,
            referenceScale: this.referenceScale,
            colorStops: (0, n.d9)(this.colorStops),
            field: this.field,
            maxPixelIntensity: this.maxPixelIntensity,
            minPixelIntensity: this.minPixelIntensity,
          });
        }
      });
      (0, s._)(
        [(0, l.Cb)({ type: Number, json: { write: !0 } })],
        m.prototype,
        'blurRadius',
        void 0,
      ),
        (0, s._)(
          [(0, l.Cb)({ type: Number })],
          m.prototype,
          'referenceScale',
          void 0,
        ),
        (0, s._)(
          [(0, l.Cb)({ type: [h], json: { write: !0 } })],
          m.prototype,
          'colorStops',
          void 0,
        ),
        (0, s._)(
          [(0, l.Cb)({ type: String, json: { write: !0 } })],
          m.prototype,
          'field',
          void 0,
        ),
        (0, s._)(
          [
            (0, l.Cb)({
              type: Number,
              json: {
                write: {
                  overridePolicy: (e, t, r) => ({ enabled: null == r }),
                },
              },
            }),
          ],
          m.prototype,
          'fieldOffset',
          void 0,
        ),
        (0, s._)(
          [(0, l.Cb)({ type: Number, json: { write: !0 } })],
          m.prototype,
          'maxPixelIntensity',
          void 0,
        ),
        (0, s._)(
          [(0, l.Cb)({ type: Number, json: { write: !0 } })],
          m.prototype,
          'minPixelIntensity',
          void 0,
        ),
        (0, s._)(
          [(0, a.J)({ heatmap: 'heatmap' })],
          m.prototype,
          'type',
          void 0,
        ),
        (m = f = (0, s._)([(0, u.j)('esri.renderers.HeatmapRenderer')], m));
      const b = m;
    },
    84382: (e, t, r) => {
      r.d(t, { Z: () => y });
      var i,
        s = r(43697),
        o = r(22974),
        n = r(5600),
        l = (r(75215), r(36030)),
        a = r(52011),
        u = r(5499),
        c = r(12571),
        p = r(9833);
      let d = (i = class extends (0, c.W)(u.Z) {
        constructor(e) {
          super(e),
            (this.description = null),
            (this.label = null),
            (this.symbol = null),
            (this.type = 'simple');
        }
        async collectRequiredFields(e, t) {
          await Promise.all([
            this.collectSymbolFields(e, t),
            this.collectVVRequiredFields(e, t),
          ]);
        }
        async collectSymbolFields(e, t) {
          await Promise.all(
            this.getSymbols().map((r) => r.collectRequiredFields(e, t)),
          );
        }
        getSymbol(e, t) {
          return this.symbol;
        }
        async getSymbolAsync(e, t) {
          return this.symbol;
        }
        getSymbols() {
          return this.symbol ? [this.symbol] : [];
        }
        getAttributeHash() {
          return (
            this.visualVariables &&
            this.visualVariables.reduce((e, t) => e + t.getAttributeHash(), '')
          );
        }
        getMeshHash() {
          return this.getSymbols().reduce((e, t) => e + JSON.stringify(t), '');
        }
        get arcadeRequired() {
          return this.arcadeRequiredForVisualVariables;
        }
        clone() {
          return new i({
            description: this.description,
            label: this.label,
            symbol: this.symbol && this.symbol.clone(),
            visualVariables: (0, o.d9)(this.visualVariables),
            authoringInfo: this.authoringInfo && this.authoringInfo.clone(),
          });
        }
      });
      (0, s._)(
        [(0, n.Cb)({ type: String, json: { write: !0 } })],
        d.prototype,
        'description',
        void 0,
      ),
        (0, s._)(
          [(0, n.Cb)({ type: String, json: { write: !0 } })],
          d.prototype,
          'label',
          void 0,
        ),
        (0, s._)([(0, n.Cb)(p.G)], d.prototype, 'symbol', void 0),
        (0, s._)([(0, l.J)({ simple: 'simple' })], d.prototype, 'type', void 0),
        (d = i = (0, s._)([(0, a.j)('esri.renderers.SimpleRenderer')], d));
      const y = d;
    },
    84475: (e, t, r) => {
      r.r(t), r.d(t, { DictionaryLoader: () => f });
      var i = r(22303),
        s = r(3172),
        o = r(20102),
        n = r(92604),
        l = r(13867),
        a = r(70586),
        u = r(95330),
        c = r(19153),
        p = r(59266),
        d = r(17386);
      const y = n.Z.getLogger('esri.renderers.support.DictionaryLoader'),
        h = {
          type: 'CIMSimpleLineCallout',
          lineSymbol: {
            type: 'CIMLineSymbol',
            symbolLayers: [
              { type: 'CIMSolidStroke', width: 0.5, color: [0, 0, 0, 255] },
            ],
          },
        };
      class f {
        constructor(e, t, r) {
          (this.config = null),
            (this.fieldMap = null),
            (this.url = null),
            (this._ongoingRequests = new Map()),
            (this._symbolCache = new l.Z(100)),
            (this.url = e),
            (this.config = t),
            (this.fieldMap = r);
        }
        getSymbolFields() {
          return this._symbolFields;
        }
        async getSymbolAsync(e, t) {
          let r;
          this._dictionaryPromise ||
            (this._dictionaryPromise = this.fetchResources(t));
          try {
            r = await this._dictionaryPromise;
          } catch (e) {
            if ((0, u.D_)(e)) return (this._dictionaryPromise = null), null;
          }
          const s = {};
          if (this.fieldMap)
            for (const t of this._symbolFields) {
              const r = this.fieldMap[t];
              if (r && null != e.attributes[r]) {
                const i = '' + e.attributes[r];
                s[t] = i;
              } else s[t] = '';
            }
          const o = r(s, t);
          if (!o || 'string' != typeof o) return null;
          const n = (0, c.hP)(o).toString(),
            l = this._symbolCache.get(n);
          if (l)
            return (
              l.catch(() => {
                this._symbolCache.pop(n);
              }),
              l
            );
          const p = o.split(';'),
            d = [],
            y = [];
          for (const e of p)
            if (e)
              if (e.includes('po:')) {
                const t = e.substr(3).split('|');
                if (3 === t.length) {
                  const e = t[0],
                    r = t[1];
                  let s = t[2];
                  if ('DashTemplate' === r)
                    s = s.split(' ').map((e) => Number(e));
                  else if ('Color' === r) {
                    const e = new i.Z(s).toRgba();
                    s = [e[0], e[1], e[2], 255 * e[3]];
                  } else s = Number(s);
                  y.push({ primitiveName: e, propertyName: r, value: s });
                }
              } else if (e.includes('|')) {
                for (const t of e.split('|'))
                  if (this._itemNames.has(t)) {
                    d.push(t);
                    break;
                  }
              } else this._itemNames.has(e) && d.push(e);
          const h =
              !(0, a.pC)(e.geometry) ||
              (!e.geometry.hasZ && 'point' === e.geometry.type),
            f = this._cimPartsToCIMSymbol(d, y, h, t);
          return this._symbolCache.put(n, f, 1), f;
        }
        async fetchResources(e) {
          if (this._dictionaryPromise) return this._dictionaryPromise;
          if (!this.url) return void y.error('no valid URL!');
          const t = (0, a.pC)(e) ? e.abortOptions : null,
            r = (0, s.default)(
              this.url + '/resources/styles/dictionary-info.json',
              { responseType: 'json', query: { f: 'json' }, ...t },
            ),
            [{ data: i }] = await Promise.all([r, (0, p.LC)()]);
          if (!i)
            throw (
              ((this._dictionaryPromise = null),
              new o.Z(
                'esri.renderers.DictionaryRenderer',
                'Bad dictionary data!',
              ))
            );
          const n = i.expression,
            l = i.authoringInfo;
          (this._refSymbolUrlTemplate = this.url + '/' + i.cimRefTemplateUrl),
            (this._itemNames = new Set(i.itemsNames)),
            (this._symbolFields = l.symbol);
          const u = {};
          if (this.config) {
            const e = this.config;
            for (const t in e) u[t] = e[t];
          }
          if (l.configuration)
            for (const e of l.configuration)
              u.hasOwnProperty(e.name) || (u[e.name] = e.value);
          const c = [];
          if ((0, a.pC)(e) && e.fields && this.fieldMap)
            for (const t of this._symbolFields) {
              const r = this.fieldMap[t],
                i = e.fields.filter((e) => e.name === r);
              i.length > 0 && c.push({ ...i[0], name: t });
            }
          return (
            (this._dictionaryPromise = (0, p.pp)(
              n,
              (0, a.pC)(e) ? e.spatialReference : null,
              c,
              u,
            )
              .then((e) => {
                const t = { scale: 0 };
                return (r, i) => {
                  const s = e.repurposeFeature({
                    geometry: null,
                    attributes: r,
                  });
                  return (
                    (t.scale = (0, a.pC)(i) ? i.scale : void 0),
                    e.evaluate({ $feature: s, $view: t })
                  );
                };
              })
              .catch(
                (e) => (
                  y.error('Creating dictinoary expression failed:', e), null
                ),
              )),
            this._dictionaryPromise
          );
        }
        async _cimPartsToCIMSymbol(e, t, r, i) {
          const s = new Array(e.length);
          for (let t = 0; t < e.length; t++)
            s[t] = this._getSymbolPart(e[t], i);
          const o = await Promise.all(s),
            n = this.fieldMap;
          for (const e of o) m(e, n);
          return new d.Z({ data: this._combineSymbolParts(o, t, r) });
        }
        async _getSymbolPart(e, t) {
          if (this._ongoingRequests.has(e))
            return this._ongoingRequests.get(e).then((e) => e.data);
          const r = this._refSymbolUrlTemplate.replace(/\{itemName\}/gi, e),
            i = (0, s.default)(r, {
              responseType: 'json',
              query: { f: 'json' },
              ...t,
            });
          this._ongoingRequests.set(e, i);
          try {
            return (await i).data;
          } catch (t) {
            return this._ongoingRequests.delete(e), Promise.reject(t);
          }
        }
        _combineSymbolParts(e, t, r) {
          if (!e || 0 === e.length) return null;
          const i = { ...e[0] };
          if (e.length > 1) {
            i.symbolLayers = [];
            for (const t of e) {
              const e = t;
              i.symbolLayers.unshift(...e.symbolLayers);
            }
          }
          return (
            r && (i.callout = h),
            { type: 'CIMSymbolReference', symbol: i, primitiveOverrides: t }
          );
        }
      }
      function m(e, t) {
        if (!e) return;
        const r = e.symbolLayers;
        if (!r) return;
        let i = r.length;
        for (; i--; ) {
          const e = r[i];
          e && !1 !== e.enable && 'CIMVectorMarker' === e.type && b(e, t);
        }
      }
      function b(e, t) {
        const r = e.markerGraphics;
        if (r)
          for (const e of r) {
            if (!e) continue;
            const r = e.symbol;
            if (r)
              switch (r.type) {
                case 'CIMPointSymbol':
                case 'CIMLineSymbol':
                case 'CIMPolygonSymbol':
                  m(r, t);
                  break;
                case 'CIMTextSymbol':
                  r.fieldMap = t;
              }
          }
      }
    },
    91423: (e, t, r) => {
      r.d(t, { a: () => l });
      var i = r(20941),
        s = r(63213),
        o = r(32400);
      const n = (0, s.d)({ types: o.A });
      function l(e, t, r) {
        return e
          ? e && (e.styleName || e.styleUrl) && 'uniqueValue' !== e.type
            ? (r &&
                r.messages &&
                r.messages.push(
                  new i.Z(
                    'renderer:unsupported',
                    "Only UniqueValueRenderer can be referenced from a web style, but found '" +
                      e.type +
                      "'",
                    { definition: e, context: r },
                  ),
                ),
              null)
            : n(e, t, r)
          : null;
      }
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
    32400: (e, t, r) => {
      r.d(t, { A: () => c, o: () => p });
      var i = r(16050),
        s = r(12501),
        o = r(95088),
        n = r(79056),
        l = r(5499),
        a = r(84382),
        u = r(30687);
      const c = {
          key: 'type',
          base: l.Z,
          typeMap: {
            heatmap: n.Z,
            simple: a.Z,
            'unique-value': u.Z,
            'class-breaks': i.Z,
            'dot-density': o.Z,
            dictionary: s.Z,
          },
          errorContext: 'renderer',
        },
        p = {
          key: 'type',
          base: l.Z,
          typeMap: { simple: a.Z, 'unique-value': u.Z, 'class-breaks': i.Z },
          errorContext: 'renderer',
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
      function l(e) {
        return e.valueExpression
          ? i.Expression
          : e.field && 'string' == typeof e.field
          ? i.Field
          : i.Unknown;
      }
      function a(e, t) {
        const r = t || l(e),
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
        PS: () => l,
        QW: () => a,
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
        PR: () => w,
        Lq: () => h,
        Km: () => f,
        cM: () => m,
        ap: () => b,
        V3: () => _,
        B3: () => y,
      });
      var i = r(22303),
        s = r(38171),
        o = r(74085),
        n = r(92604),
        l = r(70586),
        a = r(99282),
        u = r(51706);
      const c = n.Z.getLogger(
          'esri.renderers.visualVariables.support.visualVariableUtils',
        ),
        p = new s.Z(),
        d = Math.PI,
        y = /^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i;
      function h(e, t, r) {
        const s =
          'visualVariables' in e && e.visualVariables
            ? e.visualVariables.find((e) => 'color' === e.type)
            : e;
        if (!s) return;
        if ('esri.renderers.visualVariables.ColorVariable' !== s.declaredClass)
          return void c.warn(
            'The visualVariable should be an instance of esri.renderers.visualVariables.ColorVariable',
          );
        const o = 'number' == typeof t,
          n = o ? null : t,
          a = n && n.attributes;
        let u = o ? t : null;
        const p = s.field,
          { ipData: d, hasExpression: y } = s.cache;
        let h = s.cache.compiledFunc;
        if (!p && !y) {
          const e = s.stops;
          return e && e[0] && e[0].color;
        }
        if ('number' != typeof u)
          if (y) {
            if (!(0, l.pC)(r) || !(0, l.pC)(r.arcade))
              return void c.error(
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
            if (!h) {
              const e = t.createSyntaxTree(s.valueExpression);
              (h = t.createFunction(e)), (s.cache.compiledFunc = h);
            }
            u = t.executeFunction(h, o);
          } else a && (u = a[p]);
        const f = s.normalizationField,
          m = a ? parseFloat(a[f]) : void 0;
        if (null != u && (!f || o || (!isNaN(m) && 0 !== m))) {
          isNaN(m) || o || (u /= m);
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
                      (0, l.pC)(r) ? r.color : void 0,
                    );
            return new i.Z(n);
          }
        }
      }
      function f(e, t, r) {
        const i =
          'visualVariables' in e && e.visualVariables
            ? e.visualVariables.find((e) => 'opacity' === e.type)
            : e;
        if (!i) return;
        if (
          'esri.renderers.visualVariables.OpacityVariable' !== i.declaredClass
        )
          return void c.warn(
            'The visualVariable should be an instance of esri.renderers.visualVariables.OpacityVariable',
          );
        const s = 'number' == typeof t,
          o = s ? null : t,
          n = o && o.attributes;
        let a = s ? t : null;
        const u = i.field,
          { ipData: p, hasExpression: d } = i.cache;
        let y = i.cache.compiledFunc;
        if (!u && !d) {
          const e = i.stops;
          return e && e[0] && e[0].opacity;
        }
        if ('number' != typeof a)
          if (d) {
            if ((0, l.Wi)(r) || (0, l.Wi)(r.arcade))
              return void c.error(
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
            if (!y) {
              const e = t.createSyntaxTree(i.valueExpression);
              (y = t.createFunction(e)), (i.cache.compiledFunc = y);
            }
            a = t.executeFunction(y, n);
          } else n && (a = n[u]);
        const h = i.normalizationField,
          f = n ? parseFloat(n[h]) : void 0;
        if (null != a && (!h || s || (!isNaN(f) && 0 !== f))) {
          isNaN(f) || s || (a /= f);
          const e = C(a, p);
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
      function m(e, t, r) {
        const i =
          'visualVariables' in e && e.visualVariables
            ? e.visualVariables.find((e) => 'rotation' === e.type)
            : e;
        if (!i) return;
        if (
          'esri.renderers.visualVariables.RotationVariable' !== i.declaredClass
        )
          return void c.warn(
            'The visualVariable should be an instance of esri.renderers.visualVariables.RotationVariable',
          );
        const s = i.axis || 'heading',
          o = 'heading' === s && 'arithmetic' === i.rotationType ? 90 : 0,
          n = 'heading' === s && 'arithmetic' === i.rotationType ? -1 : 1,
          a = 'number' == typeof t ? null : t,
          u = a && a.attributes,
          p = i.field,
          { hasExpression: d } = i.cache;
        let y = i.cache.compiledFunc,
          h = 0;
        if (!p && !d) return h;
        if (d) {
          if ((0, l.Wi)(r) || (0, l.Wi)(r.arcade))
            return void c.error(
              'Use of arcade expressions requires an arcade context',
            );
          const e = {
              viewingMode: r.viewingMode,
              scale: r.scale,
              spatialReference: r.spatialReference,
            },
            t = r.arcade.arcadeUtils,
            s = t.getViewInfo(e),
            o = t.createExecContext(a, s);
          if (!y) {
            const e = t.createSyntaxTree(i.valueExpression);
            (y = t.createFunction(e)), (i.cache.compiledFunc = y);
          }
          h = t.executeFunction(y, o);
        } else u && (h = u[p] || 0);
        return (h = 'number' != typeof h || isNaN(h) ? null : o + n * h), h;
      }
      function b(e, t, r) {
        const i =
          'visualVariables' in e && e.visualVariables
            ? e.visualVariables.find((e) => 'size' === e.type)
            : e;
        if (!i) return;
        if ('esri.renderers.visualVariables.SizeVariable' !== i.declaredClass)
          return void c.warn(
            'The visualVariable should be an instance of esri.renderers.visualVariables.SizeVariable',
          );
        const s = (function (e, t, r, i, s) {
          switch (t.transformationType) {
            case u.hL.Additive:
              return (function (e, t, r, i) {
                return e + (g(t.minSize, r, i) || t.minDataValue);
              })(e, t, r, i);
            case u.hL.Constant:
              return (function (e, t, r) {
                const i = e.stops;
                let s = i && i.length && i[0].size;
                return null == s && (s = e.minSize), g(s, t, r);
              })(t, r, i);
            case u.hL.ClampedLinear:
              return (function (e, t, r, i) {
                const s =
                    (e - t.minDataValue) / (t.maxDataValue - t.minDataValue),
                  o = g(t.minSize, r, i),
                  n = g(t.maxSize, r, i),
                  a = (0, l.pC)(i) ? i.shape : void 0;
                if (e <= t.minDataValue) return o;
                if (e >= t.maxDataValue) return n;
                if ('area' === t.scaleBy && a) {
                  const e = 'circle' === a,
                    t = e ? d * (o / 2) ** 2 : o * o,
                    r = t + s * ((e ? d * (n / 2) ** 2 : n * n) - t);
                  return e ? 2 * Math.sqrt(r / d) : Math.sqrt(r);
                }
                return o + s * (n - o);
              })(e, t, r, i);
            case u.hL.Proportional:
              return (function (e, t, r, i) {
                const s = (0, l.pC)(i) ? i.shape : void 0,
                  o = e / t.minDataValue,
                  n = g(t.minSize, r, i),
                  a = g(t.maxSize, r, i);
                let u = null;
                return (
                  (u =
                    'circle' === s
                      ? 2 * Math.sqrt(o * (n / 2) ** 2)
                      : 'square' === s || 'diamond' === s || 'image' === s
                      ? Math.sqrt(o * n ** 2)
                      : o * n),
                  v(u, n, a)
                );
              })(e, t, r, i);
            case u.hL.Stops:
              return (function (e, t, r, i, s) {
                const [o, n, l] = C(e, s);
                if (o === n) return g(t.stops[o].size, r, i);
                {
                  const e = g(t.stops[o].size, r, i);
                  return e + (g(t.stops[n].size, r, i) - e) * l;
                }
              })(e, t, r, i, s);
            case u.hL.RealWorldSize:
              return (function (e, t, r, i) {
                const s =
                    ((0, l.pC)(i) && i.resolution ? i.resolution : 1) *
                    a.a[t.valueUnit],
                  o = g(t.minSize, r, i),
                  n = g(t.maxSize, r, i),
                  { valueRepresentation: u } = t;
                let c = null;
                return (
                  (c =
                    'area' === u
                      ? (2 * Math.sqrt(e / d)) / s
                      : 'radius' === u || 'distance' === u
                      ? (2 * e) / s
                      : e / s),
                  v(c, o, n)
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
            const { isScaleDriven: a } = e.cache;
            let p = e.cache.compiledFunc;
            if (a) {
              const t = (0, l.pC)(r) ? r.scale : void 0,
                i = (0, l.pC)(r) ? r.view : void 0;
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
                  if ((0, l.Wi)(r) || (0, l.Wi)(r.arcade))
                    return void c.error(
                      'Use of arcade expressions requires an arcade context',
                    );
                  const t = {
                      viewingMode: r.viewingMode,
                      scale: r.scale,
                      spatialReference: r.spatialReference,
                    },
                    i = r.arcade.arcadeUtils,
                    o = i.getViewInfo(t),
                    a = i.createExecContext(s, o);
                  if (!p) {
                    const t = i.createSyntaxTree(e.valueExpression);
                    (p = i.createFunction(t)), (e.cache.compiledFunc = p);
                  }
                  n = i.executeFunction(p, a);
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
      function _(e, t, r) {
        const { isScaleDriven: i } = e.cache;
        if (!((i && '3d' === r) || t)) return null;
        const s = { scale: t, view: r };
        let o = g(e.minSize, p, s),
          n = g(e.maxSize, p, s);
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
      function w(e, t, r) {
        const i = ['proportional', 'proportional', 'proportional'];
        for (const s of e) {
          const e = s.useSymbolValue ? 'symbol-value' : b(s, t, r);
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
    74889: (e, t, r) => {
      r.r(t), r.d(t, { default: () => _ });
      var i,
        s = r(43697),
        o = r(66577),
        n = r(38171),
        l = r(35454),
        a = r(96674),
        u = r(22974),
        c = r(70586),
        p = r(5600),
        d = (r(75215), r(71715)),
        y = r(52011),
        h = r(30556),
        f = r(82971),
        m = r(33955),
        b = r(1231);
      const g = new l.X({
        esriGeometryPoint: 'point',
        esriGeometryMultipoint: 'multipoint',
        esriGeometryPolyline: 'polyline',
        esriGeometryPolygon: 'polygon',
        esriGeometryEnvelope: 'extent',
        mesh: 'mesh',
        '': null,
      });
      let v = (i = class extends a.wq {
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
          const r = f.Z.fromJSON(t.spatialReference),
            i = [];
          for (let t = 0; t < e.length; t++) {
            const s = e[t],
              o = n.Z.fromJSON(s),
              l = s.geometry && s.geometry.spatialReference;
            (0, c.pC)(o.geometry) && !l && (o.geometry.spatialReference = r);
            const a = s.aggregateGeometries,
              u = o.aggregateGeometries;
            if (a && (0, c.pC)(u))
              for (const e in u) {
                const t = u[e],
                  i = a[e],
                  s = null == i ? void 0 : i.spatialReference;
                (0, c.pC)(t) && !s && (t.spatialReference = r);
              }
            i.push(o);
          }
          return i;
        }
        writeGeometryType(e, t, r, i) {
          if (e) return void g.write(e, t, r, i);
          const { features: s } = this;
          if (s)
            for (const e of s)
              if (e && (0, c.pC)(e.geometry))
                return void g.write(e.geometry.type, t, r, i);
        }
        readQueryGeometry(e, t) {
          if (!e) return null;
          const r = !!e.spatialReference,
            i = (0, m.im)(e);
          return (
            !r &&
              t.spatialReference &&
              (i.spatialReference = f.Z.fromJSON(t.spatialReference)),
            i
          );
        }
        writeSpatialReference(e, t) {
          if (e) return void (t.spatialReference = e.toJSON());
          const { features: r } = this;
          if (r)
            for (const e of r)
              if (e && (0, c.pC)(e.geometry) && e.geometry.spatialReference)
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
              translate: [i, s],
            } = e,
            o = this.features,
            n = this._getQuantizationFunction(
              this.geometryType,
              (e) => Math.round((e - i) / t),
              (e) => Math.round((s - e) / r),
            );
          for (let e = 0, t = o.length; e < t; e++)
            n((0, c.Wg)(o[e].geometry)) || (o.splice(e, 1), e--, t--);
          return (this.transform = e), this;
        }
        unquantize() {
          const { geometryType: e, features: t, transform: r } = this;
          if (!r) return this;
          const {
              translate: [i, s],
              scale: [o, n],
            } = r,
            l = this._getHydrationFunction(
              e,
              (e) => e * o + i,
              (e) => s - e * n,
            );
          for (const { geometry: e } of t) (0, c.pC)(e) && l(e);
          return (this.transform = null), this;
        }
        _quantizePoints(e, t, r) {
          let i, s;
          const o = [];
          for (let n = 0, l = e.length; n < l; n++) {
            const l = e[n];
            if (n > 0) {
              const e = t(l[0]),
                n = r(l[1]);
              (e === i && n === s) ||
                (o.push([e - i, n - s]), (i = e), (s = n));
            } else (i = t(l[0])), (s = r(l[1])), o.push([i, s]);
          }
          return o.length > 0 ? o : null;
        }
        _getQuantizationFunction(e, t, r) {
          return 'point' === e
            ? (e) => ((e.x = t(e.x)), (e.y = r(e.y)), e)
            : 'polyline' === e || 'polygon' === e
            ? (e) => {
                const i = (0, m.oU)(e) ? e.rings : e.paths,
                  s = [];
                for (let e = 0, o = i.length; e < o; e++) {
                  const o = i[e],
                    n = this._quantizePoints(o, t, r);
                  n && s.push(n);
                }
                return s.length > 0
                  ? ((0, m.oU)(e) ? (e.rings = s) : (e.paths = s), e)
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
                const i = (0, m.oU)(e) ? e.rings : e.paths;
                let s, o;
                for (let e = 0, n = i.length; e < n; e++) {
                  const n = i[e];
                  for (let e = 0, i = n.length; e < i; e++) {
                    const i = n[e];
                    e > 0
                      ? ((s += i[0]), (o += i[1]))
                      : ((s = i[0]), (o = i[1])),
                      (i[0] = t(s)),
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
                let s, o;
                for (let e = 0, n = i.length; e < n; e++) {
                  const n = i[e];
                  e > 0 ? ((s += n[0]), (o += n[1])) : ((s = n[0]), (o = n[1])),
                    (n[0] = t(s)),
                    (n[1] = r(o));
                }
              }
            : void 0;
        }
      });
      (0, s._)(
        [(0, p.Cb)({ type: String, json: { write: !0 } })],
        v.prototype,
        'displayFieldName',
        void 0,
      ),
        (0, s._)(
          [
            (0, p.Cb)({
              type: Boolean,
              json: { write: { overridePolicy: (e) => ({ enabled: e }) } },
            }),
          ],
          v.prototype,
          'exceededTransferLimit',
          void 0,
        ),
        (0, s._)(
          [(0, p.Cb)({ type: [n.Z], json: { write: !0 } })],
          v.prototype,
          'features',
          void 0,
        ),
        (0, s._)([(0, d.r)('features')], v.prototype, 'readFeatures', null),
        (0, s._)(
          [(0, p.Cb)({ type: [b.Z], json: { write: !0 } })],
          v.prototype,
          'fields',
          void 0,
        ),
        (0, s._)(
          [
            (0, p.Cb)({
              type: [
                'point',
                'multipoint',
                'polyline',
                'polygon',
                'extent',
                'mesh',
              ],
              json: { read: { reader: g.read } },
            }),
          ],
          v.prototype,
          'geometryType',
          void 0,
        ),
        (0, s._)(
          [(0, h.c)('geometryType')],
          v.prototype,
          'writeGeometryType',
          null,
        ),
        (0, s._)(
          [
            (0, p.Cb)({
              type: Boolean,
              json: { write: { overridePolicy: (e) => ({ enabled: e }) } },
            }),
          ],
          v.prototype,
          'hasM',
          void 0,
        ),
        (0, s._)(
          [
            (0, p.Cb)({
              type: Boolean,
              json: { write: { overridePolicy: (e) => ({ enabled: e }) } },
            }),
          ],
          v.prototype,
          'hasZ',
          void 0,
        ),
        (0, s._)(
          [(0, p.Cb)({ types: o.qM, json: { write: !0 } })],
          v.prototype,
          'queryGeometry',
          void 0,
        ),
        (0, s._)(
          [(0, d.r)('queryGeometry')],
          v.prototype,
          'readQueryGeometry',
          null,
        ),
        (0, s._)(
          [(0, p.Cb)({ type: f.Z, json: { write: !0 } })],
          v.prototype,
          'spatialReference',
          void 0,
        ),
        (0, s._)(
          [(0, h.c)('spatialReference')],
          v.prototype,
          'writeSpatialReference',
          null,
        ),
        (0, s._)(
          [(0, p.Cb)({ json: { write: !0 } })],
          v.prototype,
          'transform',
          void 0,
        ),
        (v = i = (0, s._)([(0, y.j)('esri.rest.support.FeatureSet')], v)),
        (v.prototype.toJSON.isDefaultToJSON = !0);
      const _ = v;
    },
  },
]);
