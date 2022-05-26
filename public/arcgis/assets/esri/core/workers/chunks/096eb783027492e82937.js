'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [5808],
  {
    38171: (e, t, r) => {
      r.d(t, { Z: () => f });
      var o = r(43697),
        i = r(66577),
        s = r(51773),
        a = r(78223),
        n = r(2368),
        l = r(96674),
        u = r(70586),
        p = r(99001),
        c = r(5600),
        d = (r(67676), r(80442), r(75215), r(52011)),
        y = r(33955);
      function h(e) {
        if (!(0, u.pC)(e)) return null;
        const t = {};
        for (const r in e) {
          const o = e[r];
          o && (t[r] = o.toJSON());
        }
        return 0 !== Object.keys(t).length ? t : null;
      }
      let m = class extends (0, n.J)(l.wq) {
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
        normalizeCtorArgs(e, t, r, o) {
          return e && !e.declaredClass
            ? e
            : { geometry: e, symbol: t, attributes: r, popupTemplate: o };
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
        _notifyLayer(e, t, r, o) {
          if (!this.layer || !('graphicChanged' in this.layer)) return;
          const i = { graphic: this, property: e, oldValue: t, newValue: r };
          'attributes' === e && (i.attributeName = o),
            this.layer.graphicChanged(i);
        }
      };
      (0, o._)(
        [
          (0, c.Cb)({
            value: null,
            json: {
              read: function (e) {
                if (!e) return null;
                const t = {};
                for (const r in e) {
                  const o = (0, y.im)(e[r]);
                  o && (t[r] = o);
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
        (0, o._)([(0, c.Cb)({ value: null })], m.prototype, 'attributes', null),
        (0, o._)(
          [(0, c.Cb)({ value: null, types: i.qM, json: { read: y.im } })],
          m.prototype,
          'geometry',
          null,
        ),
        (0, o._)(
          [(0, c.Cb)({ type: Boolean })],
          m.prototype,
          'isAggregate',
          void 0,
        ),
        (0, o._)(
          [(0, c.Cb)({ clonable: 'reference' })],
          m.prototype,
          'layer',
          void 0,
        ),
        (0, o._)(
          [(0, c.Cb)({ type: s.Z })],
          m.prototype,
          'popupTemplate',
          void 0,
        ),
        (0, o._)(
          [(0, c.Cb)({ clonable: 'reference' })],
          m.prototype,
          'sourceLayer',
          void 0,
        ),
        (0, o._)(
          [(0, c.Cb)({ value: null, types: a.LB })],
          m.prototype,
          'symbol',
          null,
        ),
        (0, o._)(
          [(0, c.Cb)({ type: Boolean, value: !0 })],
          m.prototype,
          'visible',
          null,
        ),
        (m = (0, o._)([(0, d.j)('esri.Graphic')], m)),
        ((m || (m = {})).generateUID = p.D);
      const f = m;
    },
    74085: (e, t, r) => {
      function o(e) {}
      r.d(t, { Bg: () => o }), r(80442);
    },
    70082: (e, t, r) => {
      r.d(t, { Z: () => c });
      var o = r(43697),
        i = r(2368),
        s = r(35454),
        a = r(96674),
        n = r(5600),
        l = (r(67676), r(80442), r(75215), r(52011));
      const u = new s.X({
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
      let p = class extends (0, i.J)(a.wq) {
        constructor(e) {
          super(e),
            (this.name = null),
            (this.description = null),
            (this.drawingTool = null),
            (this.prototype = null),
            (this.thumbnail = null);
        }
      };
      (0, o._)(
        [(0, n.Cb)({ json: { write: !0 } })],
        p.prototype,
        'name',
        void 0,
      ),
        (0, o._)(
          [(0, n.Cb)({ json: { write: !0 } })],
          p.prototype,
          'description',
          void 0,
        ),
        (0, o._)(
          [(0, n.Cb)({ json: { read: u.read, write: u.write } })],
          p.prototype,
          'drawingTool',
          void 0,
        ),
        (0, o._)(
          [(0, n.Cb)({ json: { write: !0 } })],
          p.prototype,
          'prototype',
          void 0,
        ),
        (0, o._)(
          [(0, n.Cb)({ json: { write: !0 } })],
          p.prototype,
          'thumbnail',
          void 0,
        ),
        (p = (0, o._)([(0, l.j)('esri.layers.support.FeatureTemplate')], p));
      const c = p;
    },
    16451: (e, t, r) => {
      r.d(t, { Z: () => y });
      var o = r(43697),
        i = r(2368),
        s = r(96674),
        a = r(5600),
        n = (r(67676), r(80442), r(75215), r(71715)),
        l = r(52011),
        u = r(30556),
        p = r(72729),
        c = r(70082);
      let d = class extends (0, i.J)(s.wq) {
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
            var o;
            e[t] && (r[t] = null == (o = e[t]) ? void 0 : o.toJSON());
          }
          t.domains = r;
        }
      };
      (0, o._)([(0, a.Cb)({ json: { write: !0 } })], d.prototype, 'id', void 0),
        (0, o._)(
          [(0, a.Cb)({ json: { write: !0 } })],
          d.prototype,
          'name',
          void 0,
        ),
        (0, o._)(
          [(0, a.Cb)({ json: { write: !0 } })],
          d.prototype,
          'domains',
          void 0,
        ),
        (0, o._)([(0, n.r)('domains')], d.prototype, 'readDomains', null),
        (0, o._)([(0, u.c)('domains')], d.prototype, 'writeDomains', null),
        (0, o._)(
          [(0, a.Cb)({ type: [c.Z], json: { write: !0 } })],
          d.prototype,
          'templates',
          void 0,
        ),
        (d = (0, o._)([(0, l.j)('esri.layers.support.FeatureType')], d));
      const y = d;
    },
    14147: (e, t, r) => {
      r.d(t, { W: () => p });
      var o = r(40330),
        i = r(3172),
        s = r(70586),
        a = r(95330),
        n = r(67284),
        l = r(65587),
        u = r(15235);
      class p {
        constructor(e, t, r, o) {
          (this.parsedUrl = e),
            (this.portalItem = t),
            (this.apiKey = r),
            (this.signal = o),
            (this.rootDocument = null);
          const i = this.parsedUrl.path.match(
            /^(.*)\/SceneServer\/layers\/([\d]*)\/?$/i,
          );
          i && (this.urlParts = { root: i[1], layerId: parseInt(i[2], 10) });
        }
        async fetch() {
          var e;
          if (!this.urlParts) return null;
          const t =
            null != (e = this.portalItem)
              ? e
              : await this._portalItemFromServiceItemId();
          if ((0, s.Wi)(t)) return this._loadFromUrl();
          const r = await this._findAndLoadRelatedPortalItem(t);
          return (0, s.Wi)(r) ? null : this._loadFeatureLayerFromPortalItem(r);
        }
        async fetchPortalItem() {
          var e;
          if (!this.urlParts) return null;
          const t =
            null != (e = this.portalItem)
              ? e
              : await this._portalItemFromServiceItemId();
          return (0, s.Wi)(t) ? null : this._findAndLoadRelatedPortalItem(t);
        }
        async _fetchRootDocument() {
          if ((0, s.pC)(this.rootDocument)) return this.rootDocument;
          if ((0, s.Wi)(this.urlParts)) return (this.rootDocument = {}), {};
          const e = {
              query: { f: 'json', token: this.apiKey },
              responseType: 'json',
              signal: this.signal,
            },
            t = `${this.urlParts.root}/SceneServer`;
          try {
            const r = await (0, i.default)(t, e);
            this.rootDocument = r.data;
          } catch {
            this.rootDocument = {};
          }
          return this.rootDocument;
        }
        async _fetchServiceOwningPortalUrl() {
          var e;
          const t =
            null == (e = o.id) ? void 0 : e.findServerInfo(this.parsedUrl.path);
          if (null != t && t.owningSystemUrl) return t.owningSystemUrl;
          const r =
            this.parsedUrl.path.replace(/(.*\/rest)\/.*/i, '$1') + '/info';
          try {
            const e = (
              await (0, i.default)(r, {
                query: { f: 'json' },
                responseType: 'json',
                signal: this.signal,
              })
            ).data.owningSystemUrl;
            if (e) return e;
          } catch (e) {
            (0, a.r9)(e);
          }
          return null;
        }
        async _findAndLoadRelatedPortalItem(e) {
          try {
            return (
              (
                await e.fetchRelatedItems(
                  { relationshipType: 'Service2Service', direction: 'reverse' },
                  { signal: this.signal },
                )
              ).find((e) => 'Feature Service' === e.type) || null
            );
          } catch (e) {
            return (0, a.r9)(e), null;
          }
        }
        async _loadFeatureLayerFromPortalItem(e) {
          await e.load({ signal: this.signal });
          const t = await this._findMatchingAssociatedSublayerUrl(e.url);
          return new n.default({ url: t, portalItem: e }).load({
            signal: this.signal,
          });
        }
        async _loadFromUrl() {
          const e = await this._findMatchingAssociatedSublayerUrl(
            `${this.urlParts.root}/FeatureServer`,
          );
          return new n.default({ url: e }).load({ signal: this.signal });
        }
        async _findMatchingAssociatedSublayerUrl(e) {
          const t = e.replace(/^(.*FeatureServer)(\/[\d]*\/?)?$/i, '$1'),
            r = {
              query: { f: 'json' },
              responseType: 'json',
              authMode: 'no-prompt',
              signal: this.signal,
            },
            o = this.urlParts.layerId,
            s = this._fetchRootDocument(),
            a = (0, i.default)(t, r),
            [n, l] = await Promise.all([a, s]),
            u = l && l.layers,
            p = n.data && n.data.layers;
          if (!Array.isArray(p)) throw new Error('expected layers array');
          if (Array.isArray(u)) {
            for (let e = 0; e < Math.min(u.length, p.length); e++)
              if (u[e].id === o) return `${t}/${p[e].id}`;
          } else if (o < p.length) return `${t}/${p[o].id}`;
          throw new Error('could not find matching associated sublayer');
        }
        async _portalItemFromServiceItemId() {
          const e = (await this._fetchRootDocument()).serviceItemId;
          if (!e) return null;
          const t = new u.default({ id: e, apiKey: this.apiKey }),
            r = await this._fetchServiceOwningPortalUrl();
          (0, s.pC)(r) && (t.portal = new l.Z({ url: r }));
          try {
            return t.load({ signal: this.signal });
          } catch (e) {
            return (0, a.r9)(e), null;
          }
        }
      }
    },
    51161: (e, t, r) => {
      r.d(t, { H3: () => b, QI: () => c, U4: () => l, Yh: () => y });
      var o = r(43697),
        i = r(96674),
        s = r(5600),
        a = (r(67676), r(80442), r(75215), r(36030)),
        n = r(52011);
      let l = class extends i.wq {
        constructor() {
          super(...arguments),
            (this.nodesPerPage = null),
            (this.rootIndex = 0),
            (this.lodSelectionMetricType = null);
        }
      };
      (0, o._)(
        [(0, s.Cb)({ type: Number })],
        l.prototype,
        'nodesPerPage',
        void 0,
      ),
        (0, o._)(
          [(0, s.Cb)({ type: Number })],
          l.prototype,
          'rootIndex',
          void 0,
        ),
        (0, o._)(
          [(0, s.Cb)({ type: String })],
          l.prototype,
          'lodSelectionMetricType',
          void 0,
        ),
        (l = (0, o._)(
          [(0, n.j)('esri.layer.support.I3SNodePageDefinition')],
          l,
        ));
      let u = class extends i.wq {
        constructor() {
          super(...arguments), (this.factor = 1);
        }
      };
      (0, o._)(
        [
          (0, s.Cb)({
            type: Number,
            json: { read: { source: 'textureSetDefinitionId' } },
          }),
        ],
        u.prototype,
        'id',
        void 0,
      ),
        (0, o._)([(0, s.Cb)({ type: Number })], u.prototype, 'factor', void 0),
        (u = (0, o._)([(0, n.j)('esri.layer.support.I3SMaterialTexture')], u));
      let p = class extends i.wq {
        constructor() {
          super(...arguments),
            (this.baseColorFactor = [1, 1, 1, 1]),
            (this.baseColorTexture = null),
            (this.metallicRoughnessTexture = null),
            (this.metallicFactor = 1),
            (this.roughnessFactor = 1);
        }
      };
      (0, o._)(
        [(0, s.Cb)({ type: [Number] })],
        p.prototype,
        'baseColorFactor',
        void 0,
      ),
        (0, o._)(
          [(0, s.Cb)({ type: u })],
          p.prototype,
          'baseColorTexture',
          void 0,
        ),
        (0, o._)(
          [(0, s.Cb)({ type: u })],
          p.prototype,
          'metallicRoughnessTexture',
          void 0,
        ),
        (0, o._)(
          [(0, s.Cb)({ type: Number })],
          p.prototype,
          'metallicFactor',
          void 0,
        ),
        (0, o._)(
          [(0, s.Cb)({ type: Number })],
          p.prototype,
          'roughnessFactor',
          void 0,
        ),
        (p = (0, o._)(
          [(0, n.j)('esri.layer.support.I3SMaterialPBRMetallicRoughness')],
          p,
        ));
      let c = class extends i.wq {
        constructor() {
          super(...arguments),
            (this.alphaMode = 'opaque'),
            (this.alphaCutoff = 0.25),
            (this.doubleSided = !1),
            (this.cullFace = 'none'),
            (this.normalTexture = null),
            (this.occlusionTexture = null),
            (this.emissiveTexture = null),
            (this.emissiveFactor = null),
            (this.pbrMetallicRoughness = null);
        }
      };
      (0, o._)(
        [(0, a.J)({ opaque: 'opaque', mask: 'mask', blend: 'blend' })],
        c.prototype,
        'alphaMode',
        void 0,
      ),
        (0, o._)(
          [(0, s.Cb)({ type: Number })],
          c.prototype,
          'alphaCutoff',
          void 0,
        ),
        (0, o._)(
          [(0, s.Cb)({ type: Boolean })],
          c.prototype,
          'doubleSided',
          void 0,
        ),
        (0, o._)(
          [(0, a.J)({ none: 'none', back: 'back', front: 'front' })],
          c.prototype,
          'cullFace',
          void 0,
        ),
        (0, o._)(
          [(0, s.Cb)({ type: u })],
          c.prototype,
          'normalTexture',
          void 0,
        ),
        (0, o._)(
          [(0, s.Cb)({ type: u })],
          c.prototype,
          'occlusionTexture',
          void 0,
        ),
        (0, o._)(
          [(0, s.Cb)({ type: u })],
          c.prototype,
          'emissiveTexture',
          void 0,
        ),
        (0, o._)(
          [(0, s.Cb)({ type: [Number] })],
          c.prototype,
          'emissiveFactor',
          void 0,
        ),
        (0, o._)(
          [(0, s.Cb)({ type: p })],
          c.prototype,
          'pbrMetallicRoughness',
          void 0,
        ),
        (c = (0, o._)(
          [(0, n.j)('esri.layer.support.I3SMaterialDefinition')],
          c,
        ));
      let d = class extends i.wq {};
      (0, o._)(
        [
          (0, s.Cb)({
            type: String,
            json: {
              read: {
                source: ['name', 'index'],
                reader: (e, t) => (null != e ? e : `${t.index}`),
              },
            },
          }),
        ],
        d.prototype,
        'name',
        void 0,
      ),
        (0, o._)(
          [
            (0, a.J)({
              jpg: 'jpg',
              png: 'png',
              dds: 'dds',
              'ktx-etc2': 'ktx-etc2',
              ktx2: 'ktx2',
              basis: 'basis',
            }),
          ],
          d.prototype,
          'format',
          void 0,
        ),
        (d = (0, o._)([(0, n.j)('esri.layer.support.I3STextureFormat')], d));
      let y = class extends i.wq {
        constructor() {
          super(...arguments), (this.atlas = !1);
        }
      };
      (0, o._)([(0, s.Cb)({ type: [d] })], y.prototype, 'formats', void 0),
        (0, o._)([(0, s.Cb)({ type: Boolean })], y.prototype, 'atlas', void 0),
        (y = (0, o._)(
          [(0, n.j)('esri.layer.support.I3STextureSetDefinition')],
          y,
        ));
      let h = class extends i.wq {};
      (0, o._)(
        [
          (0, a.J)({
            Float32: 'Float32',
            UInt64: 'UInt64',
            UInt32: 'UInt32',
            UInt16: 'UInt16',
            UInt8: 'UInt8',
          }),
        ],
        h.prototype,
        'type',
        void 0,
      ),
        (0, o._)(
          [(0, s.Cb)({ type: Number })],
          h.prototype,
          'component',
          void 0,
        ),
        (h = (0, o._)(
          [(0, n.j)('esri.layer.support.I3SGeometryAttribute')],
          h,
        ));
      let m = class extends i.wq {};
      (0, o._)([(0, a.J)({ draco: 'draco' })], m.prototype, 'encoding', void 0),
        (0, o._)(
          [(0, s.Cb)({ type: [String] })],
          m.prototype,
          'attributes',
          void 0,
        ),
        (m = (0, o._)(
          [(0, n.j)('esri.layer.support.I3SGeometryCompressedAttributes')],
          m,
        ));
      let f = class extends i.wq {
        constructor() {
          super(...arguments), (this.offset = 0);
        }
      };
      (0, o._)([(0, s.Cb)({ type: Number })], f.prototype, 'offset', void 0),
        (0, o._)([(0, s.Cb)({ type: h })], f.prototype, 'position', void 0),
        (0, o._)([(0, s.Cb)({ type: h })], f.prototype, 'normal', void 0),
        (0, o._)([(0, s.Cb)({ type: h })], f.prototype, 'uv0', void 0),
        (0, o._)([(0, s.Cb)({ type: h })], f.prototype, 'color', void 0),
        (0, o._)([(0, s.Cb)({ type: h })], f.prototype, 'uvRegion', void 0),
        (0, o._)([(0, s.Cb)({ type: h })], f.prototype, 'featureId', void 0),
        (0, o._)([(0, s.Cb)({ type: h })], f.prototype, 'faceRange', void 0),
        (0, o._)(
          [(0, s.Cb)({ type: m })],
          f.prototype,
          'compressedAttributes',
          void 0,
        ),
        (f = (0, o._)([(0, n.j)('esri.layer.support.I3SGeometryBuffer')], f));
      let b = class extends i.wq {};
      (0, o._)(
        [(0, a.J)({ triangle: 'triangle' })],
        b.prototype,
        'topology',
        void 0,
      ),
        (0, o._)([(0, s.Cb)()], b.prototype, 'geometryBuffers', void 0),
        (b = (0, o._)(
          [(0, n.j)('esri.layer.support.I3SGeometryDefinition')],
          b,
        ));
    },
    56765: (e, t, r) => {
      r.d(t, { Z: () => p });
      var o,
        i = r(43697),
        s = r(80539),
        a = r(96674),
        n = r(5600),
        l = (r(67676), r(80442), r(75215), r(52011));
      let u = (o = class extends a.wq {
        constructor(e) {
          super(e),
            (this.floorField = null),
            (this.viewAllMode = !1),
            (this.viewAllLevelIds = new s.Z());
        }
        clone() {
          return new o({
            floorField: this.floorField,
            viewAllMode: this.viewAllMode,
            viewAllLevelIds: this.viewAllLevelIds,
          });
        }
      });
      (0, i._)(
        [(0, n.Cb)({ type: String, json: { write: !0 } })],
        u.prototype,
        'floorField',
        void 0,
      ),
        (0, i._)(
          [(0, n.Cb)({ json: { read: !1, write: !1 } })],
          u.prototype,
          'viewAllMode',
          void 0,
        ),
        (0, i._)(
          [(0, n.Cb)({ json: { read: !1, write: !1 } })],
          u.prototype,
          'viewAllLevelIds',
          void 0,
        ),
        (u = o = (0, i._)([(0, l.j)('esri.layers.support.LayerFloorInfo')], u));
      const p = u;
    },
    15506: (e, t, r) => {
      r.d(t, { C: () => o });
      const o = {
        attachment: {
          supportsContentType: !1,
          supportsExifInfo: !1,
          supportsKeywords: !1,
          supportsName: !1,
          supportsSize: !1,
        },
        data: {
          isVersioned: !1,
          supportsAttachment: !1,
          supportsM: !1,
          supportsZ: !1,
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
          supportsUpdateWithoutM: !1,
          supportsUploadWithItemId: !1,
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
        queryRelated: {
          supportsCount: !1,
          supportsOrderBy: !1,
          supportsPagination: !1,
        },
        query: {
          maxRecordCount: 0,
          maxRecordCountFactor: 0,
          standardMaxRecordCount: 0,
          supportsCacheHint: !1,
          supportsCentroid: !1,
          supportsCompactGeometry: !1,
          supportsDefaultSpatialReference: !1,
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
          supportsSqlExpression: !1,
          supportsStandardizedQueriesOnly: !1,
          supportsTopFeaturesQuery: !1,
          supportsSpatialAggregationStatistics: !1,
          supportedSpatialAggregationStatistics: {
            envelope: !1,
            centroid: !1,
            convexHull: !1,
          },
          supportsStatistics: !1,
          tileMaxRecordCount: 0,
        },
      };
    },
    51706: (e, t, r) => {
      var o, i;
      function s(e) {
        return (
          e && 'esri.renderers.visualVariables.SizeVariable' === e.declaredClass
        );
      }
      function a(e) {
        return null != e && !isNaN(e) && isFinite(e);
      }
      function n(e) {
        return e.valueExpression
          ? o.Expression
          : e.field && 'string' == typeof e.field
          ? o.Field
          : o.Unknown;
      }
      function l(e, t) {
        const r = t || n(e),
          s = e.valueUnit || 'unknown';
        return r === o.Unknown
          ? i.Constant
          : e.stops
          ? i.Stops
          : null != e.minSize &&
            null != e.maxSize &&
            null != e.minDataValue &&
            null != e.maxDataValue
          ? i.ClampedLinear
          : 'unknown' === s
          ? null != e.minSize && null != e.minDataValue
            ? e.minSize && e.minDataValue
              ? i.Proportional
              : i.Additive
            : i.Identity
          : i.RealWorldSize;
      }
      r.d(t, {
        RY: () => o,
        hL: () => i,
        PS: () => n,
        QW: () => l,
        iY: () => s,
        qh: () => a,
      }),
        (function (e) {
          (e.Unknown = 'unknown'),
            (e.Expression = 'expression'),
            (e.Field = 'field');
        })(o || (o = {})),
        (function (e) {
          (e.Unknown = 'unknown'),
            (e.Stops = 'stops'),
            (e.ClampedLinear = 'clamped-linear'),
            (e.Proportional = 'proportional'),
            (e.Additive = 'additive'),
            (e.Constant = 'constant'),
            (e.Identity = 'identity'),
            (e.RealWorldSize = 'real-world-size');
        })(i || (i = {}));
    },
    28101: (e, t, r) => {
      r.d(t, {
        PR: () => _,
        Lq: () => h,
        Km: () => m,
        cM: () => f,
        ap: () => b,
        V3: () => w,
        B3: () => y,
      });
      var o = r(22303),
        i = r(38171),
        s = r(74085),
        a = r(92604),
        n = r(70586),
        l = r(99282),
        u = r(51706);
      const p = a.Z.getLogger(
          'esri.renderers.visualVariables.support.visualVariableUtils',
        ),
        c = new i.Z(),
        d = Math.PI,
        y = /^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i;
      function h(e, t, r) {
        const i =
          'visualVariables' in e && e.visualVariables
            ? e.visualVariables.find((e) => 'color' === e.type)
            : e;
        if (!i) return;
        if ('esri.renderers.visualVariables.ColorVariable' !== i.declaredClass)
          return void p.warn(
            'The visualVariable should be an instance of esri.renderers.visualVariables.ColorVariable',
          );
        const s = 'number' == typeof t,
          a = s ? null : t,
          l = a && a.attributes;
        let u = s ? t : null;
        const c = i.field,
          { ipData: d, hasExpression: y } = i.cache;
        let h = i.cache.compiledFunc;
        if (!c && !y) {
          const e = i.stops;
          return e && e[0] && e[0].color;
        }
        if ('number' != typeof u)
          if (y) {
            if (!(0, n.pC)(r) || !(0, n.pC)(r.arcade))
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
              s = t.createExecContext(a, o);
            if (!h) {
              const e = t.createSyntaxTree(i.valueExpression);
              (h = t.createFunction(e)), (i.cache.compiledFunc = h);
            }
            u = t.executeFunction(h, s);
          } else l && (u = l[c]);
        const m = i.normalizationField,
          f = l ? parseFloat(l[m]) : void 0;
        if (null != u && (!m || s || (!isNaN(f) && 0 !== f))) {
          isNaN(f) || s || (u /= f);
          const e = C(u, d);
          if (e) {
            const t = e[0],
              s = e[1],
              a =
                t === s
                  ? i.stops[t].color
                  : o.Z.blendColors(
                      i.stops[t].color,
                      i.stops[s].color,
                      e[2],
                      (0, n.pC)(r) ? r.color : void 0,
                    );
            return new o.Z(a);
          }
        }
      }
      function m(e, t, r) {
        const o =
          'visualVariables' in e && e.visualVariables
            ? e.visualVariables.find((e) => 'opacity' === e.type)
            : e;
        if (!o) return;
        if (
          'esri.renderers.visualVariables.OpacityVariable' !== o.declaredClass
        )
          return void p.warn(
            'The visualVariable should be an instance of esri.renderers.visualVariables.OpacityVariable',
          );
        const i = 'number' == typeof t,
          s = i ? null : t,
          a = s && s.attributes;
        let l = i ? t : null;
        const u = o.field,
          { ipData: c, hasExpression: d } = o.cache;
        let y = o.cache.compiledFunc;
        if (!u && !d) {
          const e = o.stops;
          return e && e[0] && e[0].opacity;
        }
        if ('number' != typeof l)
          if (d) {
            if ((0, n.Wi)(r) || (0, n.Wi)(r.arcade))
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
              a = t.createExecContext(s, i);
            if (!y) {
              const e = t.createSyntaxTree(o.valueExpression);
              (y = t.createFunction(e)), (o.cache.compiledFunc = y);
            }
            l = t.executeFunction(y, a);
          } else a && (l = a[u]);
        const h = o.normalizationField,
          m = a ? parseFloat(a[h]) : void 0;
        if (null != l && (!h || i || (!isNaN(m) && 0 !== m))) {
          isNaN(m) || i || (l /= m);
          const e = C(l, c);
          if (e) {
            const t = e[0],
              r = e[1];
            if (t === r) return o.stops[t].opacity;
            {
              const i = o.stops[t].opacity;
              return i + (o.stops[r].opacity - i) * e[2];
            }
          }
        }
      }
      function f(e, t, r) {
        const o =
          'visualVariables' in e && e.visualVariables
            ? e.visualVariables.find((e) => 'rotation' === e.type)
            : e;
        if (!o) return;
        if (
          'esri.renderers.visualVariables.RotationVariable' !== o.declaredClass
        )
          return void p.warn(
            'The visualVariable should be an instance of esri.renderers.visualVariables.RotationVariable',
          );
        const i = o.axis || 'heading',
          s = 'heading' === i && 'arithmetic' === o.rotationType ? 90 : 0,
          a = 'heading' === i && 'arithmetic' === o.rotationType ? -1 : 1,
          l = 'number' == typeof t ? null : t,
          u = l && l.attributes,
          c = o.field,
          { hasExpression: d } = o.cache;
        let y = o.cache.compiledFunc,
          h = 0;
        if (!c && !d) return h;
        if (d) {
          if ((0, n.Wi)(r) || (0, n.Wi)(r.arcade))
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
            s = t.createExecContext(l, i);
          if (!y) {
            const e = t.createSyntaxTree(o.valueExpression);
            (y = t.createFunction(e)), (o.cache.compiledFunc = y);
          }
          h = t.executeFunction(y, s);
        } else u && (h = u[c] || 0);
        return (h = 'number' != typeof h || isNaN(h) ? null : s + a * h), h;
      }
      function b(e, t, r) {
        const o =
          'visualVariables' in e && e.visualVariables
            ? e.visualVariables.find((e) => 'size' === e.type)
            : e;
        if (!o) return;
        if ('esri.renderers.visualVariables.SizeVariable' !== o.declaredClass)
          return void p.warn(
            'The visualVariable should be an instance of esri.renderers.visualVariables.SizeVariable',
          );
        const i = (function (e, t, r, o, i) {
          switch (t.transformationType) {
            case u.hL.Additive:
              return (function (e, t, r, o) {
                return e + (v(t.minSize, r, o) || t.minDataValue);
              })(e, t, r, o);
            case u.hL.Constant:
              return (function (e, t, r) {
                const o = e.stops;
                let i = o && o.length && o[0].size;
                return null == i && (i = e.minSize), v(i, t, r);
              })(t, r, o);
            case u.hL.ClampedLinear:
              return (function (e, t, r, o) {
                const i =
                    (e - t.minDataValue) / (t.maxDataValue - t.minDataValue),
                  s = v(t.minSize, r, o),
                  a = v(t.maxSize, r, o),
                  l = (0, n.pC)(o) ? o.shape : void 0;
                if (e <= t.minDataValue) return s;
                if (e >= t.maxDataValue) return a;
                if ('area' === t.scaleBy && l) {
                  const e = 'circle' === l,
                    t = e ? d * (s / 2) ** 2 : s * s,
                    r = t + i * ((e ? d * (a / 2) ** 2 : a * a) - t);
                  return e ? 2 * Math.sqrt(r / d) : Math.sqrt(r);
                }
                return s + i * (a - s);
              })(e, t, r, o);
            case u.hL.Proportional:
              return (function (e, t, r, o) {
                const i = (0, n.pC)(o) ? o.shape : void 0,
                  s = e / t.minDataValue,
                  a = v(t.minSize, r, o),
                  l = v(t.maxSize, r, o);
                let u = null;
                return (
                  (u =
                    'circle' === i
                      ? 2 * Math.sqrt(s * (a / 2) ** 2)
                      : 'square' === i || 'diamond' === i || 'image' === i
                      ? Math.sqrt(s * a ** 2)
                      : s * a),
                  g(u, a, l)
                );
              })(e, t, r, o);
            case u.hL.Stops:
              return (function (e, t, r, o, i) {
                const [s, a, n] = C(e, i);
                if (s === a) return v(t.stops[s].size, r, o);
                {
                  const e = v(t.stops[s].size, r, o);
                  return e + (v(t.stops[a].size, r, o) - e) * n;
                }
              })(e, t, r, o, i);
            case u.hL.RealWorldSize:
              return (function (e, t, r, o) {
                const i =
                    ((0, n.pC)(o) && o.resolution ? o.resolution : 1) *
                    l.a[t.valueUnit],
                  s = v(t.minSize, r, o),
                  a = v(t.maxSize, r, o),
                  { valueRepresentation: u } = t;
                let p = null;
                return (
                  (p =
                    'area' === u
                      ? (2 * Math.sqrt(e / d)) / i
                      : 'radius' === u || 'distance' === u
                      ? (2 * e) / i
                      : e / i),
                  g(p, s, a)
                );
              })(e, t, r, o);
            case u.hL.Identity:
              return e;
            case u.hL.Unknown:
              return null;
          }
        })(
          (function (e, t, r) {
            const o = 'number' == typeof t,
              i = o ? null : t,
              s = i && i.attributes;
            let a = o ? t : null;
            const { isScaleDriven: l } = e.cache;
            let c = e.cache.compiledFunc;
            if (l) {
              const t = (0, n.pC)(r) ? r.scale : void 0,
                o = (0, n.pC)(r) ? r.view : void 0;
              a =
                null == t || '3d' === o
                  ? (function (e) {
                      let t = null,
                        r = null;
                      const o = e.stops;
                      return (
                        o
                          ? ((t = o[0].value), (r = o[o.length - 1].value))
                          : ((t = e.minDataValue || 0),
                            (r = e.maxDataValue || 0)),
                        (t + r) / 2
                      );
                    })(e)
                  : t;
            } else if (!o)
              switch (e.inputValueType) {
                case u.RY.Expression: {
                  if ((0, n.Wi)(r) || (0, n.Wi)(r.arcade))
                    return void p.error(
                      'Use of arcade expressions requires an arcade context',
                    );
                  const t = {
                      viewingMode: r.viewingMode,
                      scale: r.scale,
                      spatialReference: r.spatialReference,
                    },
                    o = r.arcade.arcadeUtils,
                    s = o.getViewInfo(t),
                    l = o.createExecContext(i, s);
                  if (!c) {
                    const t = o.createSyntaxTree(e.valueExpression);
                    (c = o.createFunction(t)), (e.cache.compiledFunc = c);
                  }
                  a = o.executeFunction(c, l);
                  break;
                }
                case u.RY.Field:
                  s && (a = s[e.field]);
                  break;
                case u.RY.Unknown:
                  a = null;
              }
            if (!(0, u.qh)(a)) return null;
            if (o || !e.normalizationField) return a;
            const d = s ? parseFloat(s[e.normalizationField]) : null;
            return (0, u.qh)(d) && 0 !== d ? a / d : null;
          })(o, t, r),
          o,
          t,
          r,
          o.cache.ipData,
        );
        return null == i || isNaN(i) ? 0 : i;
      }
      function v(e, t, r) {
        return null == e
          ? null
          : (0, u.iY)(e)
          ? b(e, t, r)
          : (0, u.qh)(e)
          ? e
          : null;
      }
      function g(e, t, r) {
        return (0, u.qh)(r) && e > r ? r : (0, u.qh)(t) && e < t ? t : e;
      }
      function w(e, t, r) {
        const { isScaleDriven: o } = e.cache;
        if (!((o && '3d' === r) || t)) return null;
        const i = { scale: t, view: r };
        let s = v(e.minSize, c, i),
          a = v(e.maxSize, c, i);
        if (null != s || null != a) {
          if (s > a) {
            const e = a;
            (a = s), (s = e);
          }
          return { minSize: s, maxSize: a };
        }
      }
      function C(e, t) {
        if (!t) return;
        let r = 0,
          o = t.length - 1;
        return (
          t.some((t, i) => (e < t ? ((o = i), !0) : ((r = i), !1))),
          [r, o, (e - t[r]) / (t[o] - t[r])]
        );
      }
      function _(e, t, r) {
        const o = ['proportional', 'proportional', 'proportional'];
        for (const i of e) {
          const e = i.useSymbolValue ? 'symbol-value' : b(i, t, r);
          switch (i.axis) {
            case 'width':
              o[0] = e;
              break;
            case 'depth':
              o[1] = e;
              break;
            case 'height':
              o[2] = e;
              break;
            case 'width-and-depth':
              (o[0] = e), (o[1] = e);
              break;
            case 'all':
            case void 0:
            case null:
              (o[0] = e), (o[1] = e), (o[2] = e);
              break;
            default:
              (0, s.Bg)(i.axis);
          }
        }
        return o;
      }
    },
  },
]);
