'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [2279],
  {
    38171: (e, t, r) => {
      r.d(t, { Z: () => f });
      var i = r(43697),
        s = r(66577),
        n = r(51773),
        a = r(78223),
        o = r(2368),
        l = r(96674),
        u = r(70586),
        p = r(99001),
        d = r(5600),
        c = (r(67676), r(80442), r(75215), r(52011)),
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
      let m = class extends (0, o.J)(l.wq) {
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
          (0, d.Cb)({
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
        (0, i._)([(0, d.Cb)({ value: null })], m.prototype, 'attributes', null),
        (0, i._)(
          [(0, d.Cb)({ value: null, types: s.qM, json: { read: h.im } })],
          m.prototype,
          'geometry',
          null,
        ),
        (0, i._)(
          [(0, d.Cb)({ type: Boolean })],
          m.prototype,
          'isAggregate',
          void 0,
        ),
        (0, i._)(
          [(0, d.Cb)({ clonable: 'reference' })],
          m.prototype,
          'layer',
          void 0,
        ),
        (0, i._)(
          [(0, d.Cb)({ type: n.Z })],
          m.prototype,
          'popupTemplate',
          void 0,
        ),
        (0, i._)(
          [(0, d.Cb)({ clonable: 'reference' })],
          m.prototype,
          'sourceLayer',
          void 0,
        ),
        (0, i._)(
          [(0, d.Cb)({ value: null, types: a.LB })],
          m.prototype,
          'symbol',
          null,
        ),
        (0, i._)(
          [(0, d.Cb)({ type: Boolean, value: !0 })],
          m.prototype,
          'visible',
          null,
        ),
        (m = (0, i._)([(0, c.j)('esri.Graphic')], m)),
        ((m || (m = {})).generateUID = p.D);
      const f = m;
    },
    84552: (e, t, r) => {
      r.d(t, { Z: () => d });
      var i,
        s = r(43697),
        n = r(96674),
        a = r(35463),
        o = r(5600),
        l = (r(67676), r(80442), r(75215), r(52011)),
        u = r(78981);
      let p = (i = class extends n.wq {
        constructor(e) {
          super(e), (this.value = 0), (this.unit = 'milliseconds');
        }
        toMilliseconds() {
          return (0, a.rJ)(this.value, this.unit, 'milliseconds');
        }
        clone() {
          return new i({ value: this.value, unit: this.unit });
        }
      });
      (0, s._)(
        [(0, o.Cb)({ type: Number, json: { write: !0 }, nonNullable: !0 })],
        p.prototype,
        'value',
        void 0,
      ),
        (0, s._)(
          [
            (0, o.Cb)({
              type: u.v.apiValues,
              json: { type: u.v.jsonValues, read: u.v.read, write: u.v.write },
              nonNullable: !0,
            }),
          ],
          p.prototype,
          'unit',
          void 0,
        ),
        (p = i = (0, s._)([(0, l.j)('esri.TimeInterval')], p));
      const d = p;
    },
    57435: (e, t, r) => {
      r.d(t, { Z: () => d });
      var i = r(43697),
        s = r(80539),
        n = r(3920),
        a = r(70586),
        o = (r(20102), r(92604), r(26258), r(87538)),
        l = r(5600),
        u = (r(67676), r(80442), r(75215), r(52011));
      let p = class extends (0, n.p)(s.Z) {
        constructor(e) {
          super(e), (this.getCollections = null);
        }
        initialize() {
          this.handles.add((0, o.EH)(() => this._refresh()));
        }
        destroy() {
          this.getCollections = null;
        }
        _refresh() {
          const e = (0, a.pC)(this.getCollections)
            ? this.getCollections()
            : null;
          if ((0, a.Wi)(e)) return void this.removeAll();
          let t = 0;
          for (const r of e)
            (0, a.pC)(r) && (t = this._processCollection(t, r));
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
      (0, i._)([(0, l.Cb)()], p.prototype, 'getCollections', void 0),
        (0, i._)([(0, l.Cb)()], p.prototype, 'getChildrenFunction', void 0),
        (0, i._)([(0, l.Cb)()], p.prototype, 'itemFilterFunction', void 0),
        (p = (0, i._)([(0, u.j)('esri.core.CollectionFlattener')], p));
      const d = p;
    },
    16453: (e, t, r) => {
      r.d(t, { R: () => v, w: () => _ });
      var i = r(43697),
        s = r(15923),
        n = r(70586),
        a = r(41103),
        o = r(22974),
        l = r(31263);
      class u {
        constructor() {
          (this._propertyOriginMap = new Map()),
            (this._originStores = new Array(l.kk)),
            (this._values = new Map()),
            (this.multipleOriginsSupported = !0);
        }
        clone(e) {
          const t = new u(),
            r = this._originStores[l.s3.DEFAULTS];
          r &&
            r.forEach((e, r) => {
              t.set(r, (0, o.d9)(e), l.s3.DEFAULTS);
            });
          for (let r = l.s3.SERVICE; r < l.kk; r++) {
            const i = this._originStores[r];
            i &&
              i.forEach((i, s) => {
                (e && e.has(s)) || t.set(s, (0, o.d9)(i), r);
              });
          }
          return t;
        }
        get(e, t) {
          const r = void 0 === t ? this._values : this._originStores[t];
          return r ? r.get(e) : void 0;
        }
        keys(e) {
          const t = null == e ? this._values : this._originStores[e];
          return t ? [...t.keys()] : [];
        }
        set(e, t, r = l.s3.USER) {
          let i = this._originStores[r];
          if (
            (i || ((i = new Map()), (this._originStores[r] = i)),
            i.set(e, t),
            !this._values.has(e) ||
              (0, n.j0)(this._propertyOriginMap.get(e)) <= r)
          ) {
            const i = this._values.get(e);
            return (
              this._values.set(e, t), this._propertyOriginMap.set(e, r), i !== t
            );
          }
          return !1;
        }
        delete(e, t = l.s3.USER) {
          const r = this._originStores[t];
          if (!r) return;
          const i = r.get(e);
          if (
            (r.delete(e),
            this._values.has(e) && this._propertyOriginMap.get(e) === t)
          ) {
            this._values.delete(e);
            for (let r = t - 1; r >= 0; r--) {
              const t = this._originStores[r];
              if (t && t.has(e)) {
                this._values.set(e, t.get(e)),
                  this._propertyOriginMap.set(e, r);
                break;
              }
            }
          }
          return i;
        }
        has(e, t) {
          const r = void 0 === t ? this._values : this._originStores[t];
          return !!r && r.has(e);
        }
        revert(e, t) {
          for (; t > 0 && !this.has(e, t); ) --t;
          const r = this._originStores[t],
            i = r && r.get(e),
            s = this._values.get(e);
          return (
            this._values.set(e, i), this._propertyOriginMap.set(e, t), s !== i
          );
        }
        originOf(e) {
          return this._propertyOriginMap.get(e) || l.s3.DEFAULTS;
        }
        forEach(e) {
          this._values.forEach(e);
        }
      }
      var p = r(50549),
        d = r(1153),
        c = r(52011);
      const h = (e) => {
        let t = class extends e {
          constructor(...e) {
            super(...e);
            const t = (0, n.j0)((0, d.vw)(this)),
              r = t.store,
              i = new u();
            (t.store = i), (0, a.M)(t, r, i);
          }
          read(e, t) {
            (0, p.i)(this, e, t);
          }
          getAtOrigin(e, t) {
            const r = y(this),
              i = (0, l.M9)(t);
            if ('string' == typeof e) return r.get(e, i);
            const s = {};
            return (
              e.forEach((e) => {
                s[e] = r.get(e, i);
              }),
              s
            );
          }
          originOf(e) {
            return (0, l.x3)(this.originIdOf(e));
          }
          originIdOf(e) {
            return y(this).originOf(e);
          }
          revert(e, t) {
            const r = y(this),
              i = (0, l.M9)(t),
              s = (0, d.vw)(this);
            let n;
            (n = 'string' == typeof e ? ('*' === e ? r.keys(i) : [e]) : e),
              n.forEach((e) => {
                s.invalidate(e), r.revert(e, i), s.commit(e);
              });
          }
        };
        return (
          (t = (0, i._)(
            [(0, c.j)('esri.core.ReadOnlyMultiOriginJSONSupport')],
            t,
          )),
          t
        );
      };
      function y(e) {
        return (0, d.vw)(e).store;
      }
      let m = class extends h(s.Z) {};
      m = (0, i._)([(0, c.j)('esri.core.ReadOnlyMultiOriginJSONSupport')], m);
      var f = r(76169);
      const g = (e) => {
        let t = class extends e {
          constructor(...e) {
            super(...e);
          }
          clear(e, t = 'user') {
            return b(this).delete(e, (0, l.M9)(t));
          }
          write(e = {}, t) {
            return (0, f.c)(this, (e = e || {}), t), e;
          }
          setAtOrigin(e, t, r) {
            (0, d.vw)(this).setAtOrigin(e, t, (0, l.M9)(r));
          }
          removeOrigin(e) {
            const t = b(this),
              r = (0, l.M9)(e),
              i = t.keys(r);
            for (const e of i)
              t.originOf(e) === r && t.set(e, t.get(e, r), l.s3.USER);
          }
          updateOrigin(e, t) {
            const r = b(this),
              i = (0, l.M9)(t),
              s = this.get(e);
            for (let t = i + 1; t < l.kk; ++t) r.delete(e, t);
            r.set(e, s, i);
          }
          toJSON(e) {
            return this.write({}, e);
          }
        };
        return (
          (t = (0, i._)(
            [(0, c.j)('esri.core.WriteableMultiOriginJSONSupport')],
            t,
          )),
          (t.prototype.toJSON.isDefaultToJSON = !0),
          t
        );
      };
      function b(e) {
        return (0, d.vw)(e).store;
      }
      const v = (e) => {
        let t = class extends g(h(e)) {
          constructor(...e) {
            super(...e);
          }
        };
        return (
          (t = (0, i._)([(0, c.j)('esri.core.MultiOriginJSONSupport')], t)), t
        );
      };
      let _ = class extends v(s.Z) {};
      _ = (0, i._)([(0, c.j)('esri.core.MultiOriginJSONSupport')], _);
    },
    91040: (e, t, r) => {
      r.d(t, { yZ: () => s });
      var i = r(67900);
      function s(e, t) {
        const r = t || e.extent,
          s = e.width,
          n = (0, i.c9)(r && r.spatialReference);
        return r && s ? (r.width / s) * n * i.hd * 96 : 0;
      }
    },
    29600: (e, t, r) => {
      r.d(t, { Z: () => _ });
      var i = r(43697),
        s = r(68773),
        n = (r(66577), r(3172)),
        a = r(20102),
        o = r(32448),
        l = r(10699),
        u = r(83379),
        p = r(92604),
        d = r(95330),
        c = r(17452),
        h = r(5600),
        y = (r(67676), r(80442), r(75215), r(52011)),
        m = r(6570),
        f = r(82971);
      let g = 0;
      const b = p.Z.getLogger('esri.layers.Layer');
      let v = class extends o.Z.EventedMixin((0, l.I)(u.Z)) {
        constructor() {
          super(...arguments),
            (this.attributionDataUrl = null),
            (this.fullExtent = new m.Z(-180, -90, 180, 90, f.Z.WGS84)),
            (this.id = Date.now().toString(16) + '-layer-' + g++),
            (this.legendEnabled = !0),
            (this.listMode = 'show'),
            (this.opacity = 1),
            (this.parent = null),
            (this.popupEnabled = !0),
            (this.attributionVisible = !0),
            (this.spatialReference = f.Z.WGS84),
            (this.title = null),
            (this.type = null),
            (this.url = null),
            (this.visible = !0);
        }
        static async fromArcGISServerUrl(e) {
          const t = 'string' == typeof e ? { url: e } : e,
            i = await r.e(3529).then(r.bind(r, 63529));
          try {
            return await i.fromUrl(t);
          } catch (e) {
            throw (
              (b.error(
                "#fromArcGISServerUrl({ url: '" + t.url + "'})",
                'Failed to create layer from arcgis server url',
                e,
              ),
              e)
            );
          }
        }
        static async fromPortalItem(e) {
          const t = 'portalItem' in e ? e : { portalItem: e },
            i = await r.e(4579).then(r.bind(r, 44579));
          try {
            return await i.fromItem(t);
          } catch (e) {
            const r = t && t.portalItem,
              i = (r && r.id) || 'unset',
              n = (r && r.portal && r.portal.url) || s.Z.portalUrl;
            throw (
              (b.error(
                '#fromPortalItem()',
                "Failed to create layer from portal item (portal: '" +
                  n +
                  "', id: '" +
                  i +
                  "')",
                e,
              ),
              e)
            );
          }
        }
        initialize() {
          this.when().catch((e) => {
            var t, r;
            (0, d.D_)(e) ||
              p.Z.getLogger(this.declaredClass).error(
                '#load()',
                `Failed to load layer (title: '${
                  null != (t = this.title) ? t : 'no title'
                }', id: '${null != (r = this.id) ? r : 'no id'}')`,
                { error: e },
              );
          });
        }
        destroy() {
          if (this.parent) {
            const e = this,
              t = this.parent;
            'layers' in t && t.layers.includes(e)
              ? t.layers.remove(e)
              : 'tables' in t && t.tables.includes(e)
              ? t.tables.remove(e)
              : 'baseLayers' in t && t.baseLayers.includes(e)
              ? t.baseLayers.remove(e)
              : 'baseLayers' in t &&
                t.referenceLayers.includes(e) &&
                t.referenceLayers.remove(e);
          }
        }
        get hasAttributionData() {
          return null != this.attributionDataUrl;
        }
        get parsedUrl() {
          const e = this.url;
          return e ? (0, c.mN)(e) : null;
        }
        async fetchAttributionData() {
          const e = this.attributionDataUrl;
          if (this.hasAttributionData && e)
            return (
              await (0, n.default)(e, {
                query: { f: 'json' },
                responseType: 'json',
              })
            ).data;
          throw new a.Z(
            'layer:no-attribution-data',
            'Layer does not have attribution data',
          );
        }
      };
      (0, i._)(
        [(0, h.Cb)({ type: String })],
        v.prototype,
        'attributionDataUrl',
        void 0,
      ),
        (0, i._)([(0, h.Cb)({ type: m.Z })], v.prototype, 'fullExtent', void 0),
        (0, i._)(
          [(0, h.Cb)({ readOnly: !0 })],
          v.prototype,
          'hasAttributionData',
          null,
        ),
        (0, i._)(
          [(0, h.Cb)({ type: String, clonable: !1 })],
          v.prototype,
          'id',
          void 0,
        ),
        (0, i._)(
          [(0, h.Cb)({ type: Boolean, nonNullable: !0 })],
          v.prototype,
          'legendEnabled',
          void 0,
        ),
        (0, i._)(
          [(0, h.Cb)({ type: ['show', 'hide', 'hide-children'] })],
          v.prototype,
          'listMode',
          void 0,
        ),
        (0, i._)(
          [
            (0, h.Cb)({
              type: Number,
              range: { min: 0, max: 1 },
              nonNullable: !0,
            }),
          ],
          v.prototype,
          'opacity',
          void 0,
        ),
        (0, i._)([(0, h.Cb)({ clonable: !1 })], v.prototype, 'parent', void 0),
        (0, i._)([(0, h.Cb)({ readOnly: !0 })], v.prototype, 'parsedUrl', null),
        (0, i._)(
          [(0, h.Cb)({ type: Boolean })],
          v.prototype,
          'popupEnabled',
          void 0,
        ),
        (0, i._)(
          [(0, h.Cb)({ type: Boolean })],
          v.prototype,
          'attributionVisible',
          void 0,
        ),
        (0, i._)(
          [(0, h.Cb)({ type: f.Z })],
          v.prototype,
          'spatialReference',
          void 0,
        ),
        (0, i._)([(0, h.Cb)({ type: String })], v.prototype, 'title', void 0),
        (0, i._)(
          [(0, h.Cb)({ type: String, readOnly: !0, json: { read: !1 } })],
          v.prototype,
          'type',
          void 0,
        ),
        (0, i._)([(0, h.Cb)()], v.prototype, 'url', void 0),
        (0, i._)(
          [(0, h.Cb)({ type: Boolean, nonNullable: !0 })],
          v.prototype,
          'visible',
          void 0,
        ),
        (v = (0, i._)([(0, y.j)('esri.layers.Layer')], v));
      const _ = v;
    },
    25906: (e, t, r) => {
      r.r(t), r.d(t, { default: () => ve });
      var i = r(43697),
        s = r(68773),
        n = r(38171),
        a = r(51773),
        o = r(3172),
        l = r(80539),
        u = r(57435),
        p = r(3920),
        d = r(35454),
        c = r(22974),
        h = r(70586),
        y = r(16453),
        m = r(95330),
        f = r(17452),
        g = r(5600),
        b = r(75215),
        v = r(71715),
        _ = r(52011),
        w = r(30556),
        x = r(76169),
        C = r(6570),
        S = r(82971),
        I = r(91040),
        E = r(8744),
        O = r(29600),
        N = r(71612),
        T = r(38009),
        U = r(16859),
        F = r(34760),
        L = r(72965),
        j = r(28294),
        R = r(52162),
        A = r(66677),
        M = r(21506),
        P = r(15923);
      r(67676), r(80442);
      const D = { visible: 'visibleSublayers' };
      let Z = class extends (0, p.p)(P.Z) {
        constructor(e) {
          super(e), (this.scale = 0);
        }
        set layer(e) {
          this._get('layer') !== e &&
            (this._set('layer', e),
            this.handles.remove('layer'),
            e &&
              this.handles.add(
                [
                  e.sublayers.on('change', () =>
                    this.notifyChange('visibleSublayers'),
                  ),
                  e.on('wms-sublayer-update', (e) =>
                    this.notifyChange(D[e.propertyName]),
                  ),
                ],
                'layer',
              ));
        }
        get layers() {
          const { visibleSublayers: e } = this;
          return e
            .filter((e) => e.name)
            .map((e) => e.name)
            .join(',');
        }
        get version() {
          this.commitProperty('layers');
          const e = this.layer;
          return (
            e && e.commitProperty('imageTransparency'),
            (this._get('version') || 0) + 1
          );
        }
        get visibleSublayers() {
          const { layer: e, scale: t } = this,
            r = null == e ? void 0 : e.sublayers,
            i = [],
            s = (e) => {
              const { minScale: r, maxScale: n, sublayers: a, visible: o } = e;
              o &&
                (0 === t || ((0 === r || t <= r) && (0 === n || t >= n))) &&
                (a ? a.forEach(s) : i.unshift(e));
            };
          return null == r || r.forEach(s), i;
        }
        toJSON() {
          const { layer: e, layers: t } = this,
            { imageFormat: r, imageTransparency: i, version: s } = e;
          return {
            format: r,
            request: 'GetMap',
            service: 'WMS',
            styles: '',
            transparent: i ? 'TRUE' : 'FALSE',
            version: s,
            layers: t,
          };
        }
      };
      (0, i._)([(0, g.Cb)()], Z.prototype, 'layer', null),
        (0, i._)([(0, g.Cb)({ readOnly: !0 })], Z.prototype, 'layers', null),
        (0, i._)([(0, g.Cb)({ type: Number })], Z.prototype, 'scale', void 0),
        (0, i._)([(0, g.Cb)({ readOnly: !0 })], Z.prototype, 'version', null),
        (0, i._)(
          [(0, g.Cb)({ readOnly: !0 })],
          Z.prototype,
          'visibleSublayers',
          null,
        ),
        (Z = (0, i._)(
          [(0, _.j)('esri.layers.support.ExportWMSImageParameters')],
          Z,
        ));
      var q,
        k = r(61247),
        V = r(90578);
      let B = 0,
        J = (q = class extends y.w {
          constructor(e) {
            super(e),
              (this._sublayersHandles = new k.Z()),
              (this.dimensions = null),
              (this.fullExtents = null),
              (this.featureInfoFormat = null),
              (this.featureInfoUrl = null),
              (this.legendUrl = null),
              (this.legendEnabled = !0),
              (this.maxScale = 0),
              (this.minScale = 0),
              (this.popupEnabled = !1),
              (this.queryable = !1),
              (this.spatialReferences = null);
          }
          get description() {
            return this._get('description');
          }
          set description(e) {
            this._set('description', e);
          }
          get fullExtent() {
            return this._get('fullExtent');
          }
          set fullExtent(e) {
            this._set('fullExtent', e);
          }
          readExtent(e, t) {
            return (e = t.extent) ? C.Z.fromJSON(e) : null;
          }
          get id() {
            const e = this._get('id');
            return null == e ? B++ : e;
          }
          set id(e) {
            this._set('id', e);
          }
          readLegendUrl(e, t) {
            return t ? t.legendUrl || t.legendURL : null;
          }
          set layer(e) {
            this._set('layer', e),
              this.sublayers && this.sublayers.forEach((t) => (t.layer = e));
          }
          get effectiveScaleRange() {
            const { minScale: e, maxScale: t } = this;
            return { minScale: e, maxScale: t };
          }
          get name() {
            return this._get('name');
          }
          set name(e) {
            this._set('name', e);
          }
          set sublayers(e) {
            const t = this._get('sublayers');
            t &&
              (t.forEach((e) => {
                e.layer = null;
              }),
              this._sublayersHandles.removeAll(),
              (this._sublayersHandles = null)),
              e &&
                (e.forEach((e) => {
                  (e.parent = this), (e.layer = this.layer);
                }),
                this._sublayersHandles.add([
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
            return (0, b.se)(l.Z.ofType(q), e);
          }
          get title() {
            return this._get('title');
          }
          set title(e) {
            this._set('title', e);
          }
          get visible() {
            return this._get('visible');
          }
          set visible(e) {
            this._setAndNotifyLayer('visible', e);
          }
          clone() {
            const e = new q();
            return (
              this.hasOwnProperty('description') &&
                (e.description = this.description),
              this.hasOwnProperty('fullExtent') &&
                (e.fullExtent = this.fullExtent.clone()),
              this.hasOwnProperty('fullExtents') &&
                (e.fullExtents = this.fullExtents.map((e) => e.clone())),
              this.hasOwnProperty('featureInfoFormat') &&
                (e.featureInfoFormat = this.featureInfoFormat),
              this.hasOwnProperty('featureInfoUrl') &&
                (e.featureInfoUrl = this.featureInfoUrl),
              this.hasOwnProperty('legendUrl') &&
                (e.legendUrl = this.legendUrl),
              this.hasOwnProperty('legendEnabled') &&
                (e.legendEnabled = this.legendEnabled),
              this.hasOwnProperty('layer') && (e.layer = this.layer),
              this.hasOwnProperty('name') && (e.name = this.name),
              this.hasOwnProperty('parent') && (e.parent = this.parent),
              this.hasOwnProperty('queryable') &&
                (e.queryable = this.queryable),
              this.hasOwnProperty('sublayers') &&
                (e.sublayers =
                  this.sublayers && this.sublayers.map((e) => e.clone())),
              this.hasOwnProperty('spatialReferences') &&
                (e.spatialReferences = this.spatialReferences.map((e) => e)),
              this.hasOwnProperty('visible') && (e.visible = this.visible),
              this.hasOwnProperty('title') && (e.title = this.title),
              e
            );
          }
          _setAndNotifyLayer(e, t) {
            const r = this.layer;
            this._get(e) !== t &&
              (this._set(e, t),
              r &&
                r.emit('wms-sublayer-update', {
                  propertyName: e,
                  id: this.id,
                }));
          }
        });
      (0, i._)([(0, g.Cb)()], J.prototype, 'description', null),
        (0, i._)(
          [(0, g.Cb)({ readOnly: !0 })],
          J.prototype,
          'dimensions',
          void 0,
        ),
        (0, i._)([(0, g.Cb)({ value: null })], J.prototype, 'fullExtent', null),
        (0, i._)(
          [(0, v.r)('fullExtent', ['extent'])],
          J.prototype,
          'readExtent',
          null,
        ),
        (0, i._)([(0, g.Cb)()], J.prototype, 'fullExtents', void 0),
        (0, i._)([(0, g.Cb)()], J.prototype, 'featureInfoFormat', void 0),
        (0, i._)([(0, g.Cb)()], J.prototype, 'featureInfoUrl', void 0),
        (0, i._)(
          [
            (0, g.Cb)({
              type: Number,
              json: {
                write: {
                  enabled: !1,
                  overridePolicy: () => ({ ignoreOrigin: !0, enabled: !0 }),
                },
              },
            }),
          ],
          J.prototype,
          'id',
          null,
        ),
        (0, i._)(
          [
            (0, g.Cb)({
              type: String,
              json: {
                origins: {
                  'web-document': {
                    read: { source: ['legendUrl', 'legendURL'] },
                    write: { target: 'legendUrl', ignoreOrigin: !0 },
                  },
                },
                read: { source: 'legendURL' },
                write: { ignoreOrigin: !0 },
              },
            }),
          ],
          J.prototype,
          'legendUrl',
          void 0,
        ),
        (0, i._)(
          [(0, v.r)(['web-document'], 'legendUrl')],
          J.prototype,
          'readLegendUrl',
          null,
        ),
        (0, i._)(
          [
            (0, g.Cb)({
              value: !0,
              type: Boolean,
              json: {
                read: { source: 'showLegend' },
                write: { target: 'showLegend' },
                origins: {
                  'web-map': { read: !1, write: !1 },
                  'web-scene': { read: !1, write: !1 },
                },
              },
            }),
          ],
          J.prototype,
          'legendEnabled',
          void 0,
        ),
        (0, i._)([(0, g.Cb)({ value: null })], J.prototype, 'layer', null),
        (0, i._)([(0, g.Cb)()], J.prototype, 'maxScale', void 0),
        (0, i._)([(0, g.Cb)()], J.prototype, 'minScale', void 0),
        (0, i._)(
          [(0, g.Cb)({ readOnly: !0 })],
          J.prototype,
          'effectiveScaleRange',
          null,
        ),
        (0, i._)(
          [
            (0, g.Cb)({
              type: String,
              value: null,
              json: { read: { source: 'name' }, write: { ignoreOrigin: !0 } },
            }),
          ],
          J.prototype,
          'name',
          null,
        ),
        (0, i._)([(0, g.Cb)()], J.prototype, 'parent', void 0),
        (0, i._)(
          [
            (0, g.Cb)({
              type: Boolean,
              json: {
                read: { source: 'showPopup' },
                write: { ignoreOrigin: !0, target: 'showPopup' },
              },
            }),
          ],
          J.prototype,
          'popupEnabled',
          void 0,
        ),
        (0, i._)(
          [(0, g.Cb)({ type: Boolean, json: { write: { ignoreOrigin: !0 } } })],
          J.prototype,
          'queryable',
          void 0,
        ),
        (0, i._)([(0, g.Cb)()], J.prototype, 'sublayers', null),
        (0, i._)([(0, V.p)('sublayers')], J.prototype, 'castSublayers', null),
        (0, i._)(
          [
            (0, g.Cb)({
              type: [Number],
              json: { read: { source: 'spatialReferences' } },
            }),
          ],
          J.prototype,
          'spatialReferences',
          void 0,
        ),
        (0, i._)(
          [
            (0, g.Cb)({
              type: String,
              value: null,
              json: { write: { ignoreOrigin: !0 } },
            }),
          ],
          J.prototype,
          'title',
          null,
        ),
        (0, i._)(
          [
            (0, g.Cb)({
              type: Boolean,
              value: !0,
              json: { read: { source: 'defaultVisibility' } },
            }),
          ],
          J.prototype,
          'visible',
          null,
        ),
        (J = q = (0, i._)([(0, _.j)('esri.layers.support.WMSSublayer')], J));
      const W = J;
      var G = r(20102);
      const $ = { 84: 4326, 83: 4269, 27: 4267 };
      function H(e) {
        if (!e) return null;
        const t = { idCounter: -1 };
        'string' == typeof e &&
          (e = new DOMParser().parseFromString(e, 'text/xml'));
        const r = e.documentElement;
        if ('ServiceExceptionReport' === r.nodeName) {
          const e = Array.prototype.slice
            .call(r.childNodes)
            .map((e) => e.textContent)
            .join('\r\n');
          throw new G.Z(
            'wmslayer:wms-capabilities-xml-is-not-valid',
            'The server returned errors when the WMS capabilities were requested.',
            e,
          );
        }
        const i = Y('Capability', r),
          s = Y('Service', r),
          n = Y('Request', i);
        if (!i || !s || !n) return null;
        const a = Y('Layer', i);
        if (!a) return null;
        const o =
            'WMS_Capabilities' === r.nodeName ||
            'WMT_MS_Capabilities' === r.nodeName
              ? r.getAttribute('version')
              : '1.3.0',
          l = ee('Title', s, '') || ee('Name', s, ''),
          u = ee('AccessConstraints', s, ''),
          p = ee('Abstract', s, ''),
          d = parseInt(ee('MaxWidth', s, '5000'), 10),
          c = parseInt(ee('MaxHeight', s, '5000'), 10),
          h = ie(n, 'GetMap'),
          y = re(n, 'GetMap'),
          m = ne(a, o, t);
        let f,
          g,
          b,
          v = 0;
        if (
          (Array.prototype.slice.call(i.childNodes).forEach((e) => {
            'Layer' === e.nodeName &&
              (0 === v
                ? (f = e)
                : 1 === v
                ? (m.name && ((m.name = ''), m.sublayers.push(ne(f, o, t))),
                  m.sublayers.push(ne(e, o, t)))
                : m.sublayers.push(ne(e, o, t)),
              v++);
          }),
          !m)
        )
          return null;
        const _ = m.fullExtents;
        if (
          ((g = m.sublayers),
          g || (g = []),
          0 === g.length && g.push(m),
          (b = m.extent),
          !b)
        ) {
          const e = new C.Z(g[0].extent);
          (m.extent = e.toJSON()), (b = m.extent);
        }
        const w = m.spatialReferences.length > 0 ? m.spatialReferences : X(m),
          x = re(n, 'GetFeatureInfo');
        let S;
        if (x) {
          const e = ie(n, 'GetFeatureInfo');
          e.indexOf('text/html') > -1
            ? (S = 'text/html')
            : e.indexOf('text/plain') > -1 && (S = 'text/plain');
        }
        if (!S) {
          const e = function (t) {
            t &&
              ((t.queryable = !1),
              t.sublayers &&
                t.sublayers.forEach((t) => {
                  e(t);
                }));
          };
          e(m);
        }
        const I = z(g),
          E = m.minScale || 0,
          O = m.maxScale || 0,
          N = m.dimensions,
          T = I.reduce((e, t) => e.concat(t.dimensions), []),
          U = N.concat(T).filter(oe);
        let F = null;
        if (U.length > 0) {
          let e = Number.POSITIVE_INFINITY,
            t = Number.NEGATIVE_INFINITY;
          U.forEach((r) => {
            const { extent: i } = r;
            !(function (e) {
              return Array.isArray(e) && e.length > 0 && e[0] instanceof Date;
            })(i)
              ? i.forEach((r) => {
                  (e = Math.min(e, r.min.getTime())),
                    (t = Math.max(t, r.max.getTime()));
                })
              : i.forEach((r) => {
                  (e = Math.min(e, r.getTime())),
                    (t = Math.max(t, r.getTime()));
                });
          }),
            (F = {
              startTimeField: null,
              endTimeField: null,
              trackIdField: null,
              timeExtent: [e, t],
            });
        }
        return {
          copyright: u,
          description: p,
          dimensions: N,
          extent: b,
          fullExtents: _,
          featureInfoFormat: S,
          featureInfoUrl: x,
          mapUrl: y,
          maxWidth: d,
          maxHeight: c,
          maxScale: O,
          minScale: E,
          layers: I,
          spatialReferences: w,
          supportedImageFormatTypes: h,
          timeInfo: F,
          title: l,
          version: o,
        };
      }
      function X(e) {
        if (e.spatialReferences.length > 0) return e.spatialReferences;
        if (e.sublayers)
          for (const t of e.sublayers) {
            const e = X(t);
            if (e.length > 0) return e;
          }
        return [];
      }
      function z(e) {
        let t = [];
        return (
          e.forEach((e) => {
            t.push(e),
              e.sublayers &&
                e.sublayers.length &&
                ((t = t.concat(z(e.sublayers))), delete e.sublayers);
          }),
          t
        );
      }
      function Q(e, t, r) {
        var i;
        return null != (i = t.getAttribute(e)) ? i : r;
      }
      function Y(e, t) {
        for (let r = 0; r < t.childNodes.length; r++) {
          const i = t.childNodes[r];
          if (ae(i) && i.nodeName === e) return i;
        }
        return null;
      }
      function K(e, t) {
        const r = [];
        for (let i = 0; i < t.childNodes.length; i++) {
          const s = t.childNodes[i];
          ae(s) && s.nodeName === e && r.push(s);
        }
        return r;
      }
      function ee(e, t, r) {
        const i = Y(e, t);
        return i ? i.textContent : r;
      }
      function te(e, t, r) {
        if (!e) return null;
        const i = parseFloat(e.getAttribute('minx')),
          s = parseFloat(e.getAttribute('miny')),
          n = parseFloat(e.getAttribute('maxx')),
          a = parseFloat(e.getAttribute('maxy'));
        let o, l, u, p;
        r
          ? ((o = isNaN(s) ? -Number.MAX_VALUE : s),
            (l = isNaN(i) ? -Number.MAX_VALUE : i),
            (u = isNaN(a) ? Number.MAX_VALUE : a),
            (p = isNaN(n) ? Number.MAX_VALUE : n))
          : ((o = isNaN(i) ? -Number.MAX_VALUE : i),
            (l = isNaN(s) ? -Number.MAX_VALUE : s),
            (u = isNaN(n) ? Number.MAX_VALUE : n),
            (p = isNaN(a) ? Number.MAX_VALUE : a));
        const d = new S.Z({ wkid: t });
        return new C.Z({
          xmin: o,
          ymin: l,
          xmax: u,
          ymax: p,
          spatialReference: d,
        });
      }
      function re(e, t) {
        const r = Y(t, e);
        if (r) {
          const e = Y('DCPType', r);
          if (e) {
            const t = Y('HTTP', e);
            if (t) {
              const e = Y('Get', t);
              if (e) {
                let t = (function (e, t, r, i) {
                  const s = Y('OnlineResource', r);
                  return s ? Q('xlink:href', s, null) : null;
                })(0, 0, e);
                if (t)
                  return (
                    t.indexOf('&') === t.length - 1 &&
                      (t = t.substring(0, t.length - 1)),
                    (function (e, t) {
                      const r = [],
                        i = (0, f.mN)(e);
                      for (const e in i.query)
                        i.query.hasOwnProperty(e) &&
                          -1 === t.indexOf(e.toLowerCase()) &&
                          r.push(e + '=' + i.query[e]);
                      return i.path + (r.length ? '?' + r.join('&') : '');
                    })(t, ['service', 'request'])
                  );
              }
            }
          }
        }
        return null;
      }
      function ie(e, t) {
        const r = K('Operation', e);
        if (0 === r.length)
          return K('Format', Y(t, e)).map((e) => e.textContent);
        const i = [];
        return (
          r.forEach((e) => {
            e.getAttribute('name') === t &&
              K('Format', e).forEach((e) => {
                i.push(e.textContent);
              });
          }),
          i
        );
      }
      function se(e, t, r) {
        const i = Y(t, e);
        if (!i) return r;
        const { textContent: s } = i;
        if (null == s || '' === s) return r;
        const n = Number(s);
        return isNaN(n) ? r : n;
      }
      function ne(e, t, r) {
        var i;
        if (!e) return null;
        const s = {
            id: r.idCounter++,
            fullExtents: [],
            parentLayerId: null,
            queryable: '1' === e.getAttribute('queryable'),
            spatialReferences: [],
            sublayers: null,
          },
          n = Y('LatLonBoundingBox', e),
          a = Y('EX_GeographicBoundingBox', e);
        let o = null;
        n && (o = te(n, 4326)),
          a &&
            ((o = new C.Z(0, 0, 0, 0, new S.Z({ wkid: 4326 }))),
            (o.xmin = parseFloat(ee('westBoundLongitude', a, '0'))),
            (o.ymin = parseFloat(ee('southBoundLatitude', a, '0'))),
            (o.xmax = parseFloat(ee('eastBoundLongitude', a, '0'))),
            (o.ymax = parseFloat(ee('northBoundLatitude', a, '0')))),
          n || a || (o = new C.Z(-180, -90, 180, 90, new S.Z({ wkid: 4326 }))),
          (s.minScale = se(e, 'MaxScaleDenominator', 0)),
          (s.maxScale = se(e, 'MinScaleDenominator', 0));
        const l = ['1.0.0', '1.1.0', '1.1.1'].indexOf(t) > -1 ? 'SRS' : 'CRS';
        return (
          Array.prototype.slice.call(e.childNodes).forEach((e) => {
            if ('Name' === e.nodeName) s.name = e.textContent || '';
            else if ('Title' === e.nodeName) s.title = e.textContent || '';
            else if ('Abstract' === e.nodeName)
              s.description = e.textContent || '';
            else if ('BoundingBox' === e.nodeName) {
              const r = e.getAttribute(l);
              if (r && 0 === r.indexOf('EPSG:')) {
                const i = parseInt(r.substring(5), 10);
                0 === i ||
                  isNaN(i) ||
                  o ||
                  (o = '1.3.0' === t ? te(e, i, (0, R.A)(i)) : te(e, i));
              }
              const i = r && r.indexOf(':');
              if (i && i > -1) {
                let n = parseInt(r.substring(i + 1, r.length), 10);
                0 === n || isNaN(n) || (n = $[n] ? $[n] : n);
                const a = '1.3.0' === t ? te(e, n, (0, R.A)(n)) : te(e, n);
                s.fullExtents.push(a);
              }
            } else if (e.nodeName === l)
              e.textContent.split(' ').forEach((e) => {
                const t = e.includes(':')
                  ? parseInt(e.split(':')[1], 10)
                  : parseInt(e, 10);
                if (0 !== t && !isNaN(t)) {
                  const e = $[t] ? $[t] : t;
                  s.spatialReferences.includes(e) ||
                    s.spatialReferences.push(e);
                }
              });
            else if ('Style' !== e.nodeName || s.legendURL) {
              if ('Layer' === e.nodeName) {
                const i = ne(e, t, r);
                i &&
                  ((i.parentLayerId = s.id),
                  s.sublayers || (s.sublayers = []),
                  s.sublayers.push(i));
              }
            } else {
              const t = Y('LegendURL', e);
              if (t) {
                const e = Y('OnlineResource', t);
                e && (s.legendURL = e.getAttribute('xlink:href'));
              }
            }
          }),
          (s.extent = null == (i = o) ? void 0 : i.toJSON()),
          (s.dimensions = K('Dimension', e)
            .filter(
              (e) =>
                e.getAttribute('name') &&
                e.getAttribute('units') &&
                e.textContent,
            )
            .map((e) => {
              const t = e.getAttribute('name'),
                r = e.getAttribute('units'),
                i = e.textContent,
                s = e.getAttribute('unitSymbol'),
                n = e.getAttribute('default'),
                a = '0' !== Q('default', e, '0'),
                o = '0' !== Q('nearestValue', e, '0'),
                l = '0' !== Q('current', e, '0');
              return oe({ name: t, units: r })
                ? {
                    name: 'time',
                    units: 'ISO8601',
                    extent: pe(i),
                    default: pe(n),
                    multipleValues: a,
                    nearestValue: o,
                    current: l,
                  }
                : (function (e) {
                    return (
                      /^elevation$/i.test(e.name) &&
                      /^(epsg|crs):\d+$/i.test(e.units)
                    );
                  })({ name: t, units: r })
                ? {
                    name: 'elevation',
                    units: r,
                    extent: le(i),
                    unitSymbol: s,
                    default: le(n),
                    multipleValues: a,
                    nearestValue: o,
                  }
                : {
                    name: t,
                    units: r,
                    extent: ue(i),
                    unitSymbol: s,
                    default: ue(n),
                    multipleValues: a,
                    nearestValue: o,
                  };
            })),
          s
        );
      }
      function ae(e) {
        return e.nodeType === Node.ELEMENT_NODE;
      }
      function oe(e) {
        return /^time$/i.test(e.name) && /^iso8601$/i.test(e.units);
      }
      function le(e) {
        if (!e) return null;
        const t = -1 !== e.indexOf('/'),
          r = e.split(',');
        return t
          ? r
              .map((e) => {
                const t = e.split('/');
                return t.length < 2
                  ? null
                  : {
                      min: parseFloat(t[0]),
                      max: parseFloat(t[1]),
                      resolution:
                        t.length >= 3 && '0' !== t[2]
                          ? parseFloat(t[2])
                          : void 0,
                    };
              })
              .filter((e) => e)
          : r.map((e) => parseFloat(e));
      }
      function ue(e) {
        if (!e) return null;
        const t = -1 !== e.indexOf('/'),
          r = e.split(',');
        return t
          ? r
              .map((e) => {
                const t = e.split('/');
                return t.length < 2
                  ? null
                  : {
                      min: t[0],
                      max: t[1],
                      resolution: t.length >= 3 && '0' !== t[2] ? t[2] : void 0,
                    };
              })
              .filter((e) => e)
          : r;
      }
      function pe(e) {
        if (!e) return null;
        const t = -1 !== e.indexOf('/'),
          r = e.split(',');
        return t
          ? r
              .map((e) => {
                const t = e.split('/');
                return t.length < 2
                  ? null
                  : {
                      min: new Date(t[0]),
                      max: new Date(t[1]),
                      resolution:
                        t.length >= 3 && '0' !== t[2] ? de(t[2]) : void 0,
                    };
              })
              .filter((e) => e)
          : r.map((e) => new Date(e));
      }
      function de(e) {
        const t = e.match(
          /(?:p(\d+y|\d+(?:.|,)\d+y)?(\d+m|\d+(?:.|,)\d+m)?(\d+d|\d+(?:.|,)\d+d)?)?(?:t(\d+h|\d+(?:.|,)\d+h)?(\d+m|\d+(?:.|,)\d+m)?(\d+s|\d+(?:.|,)\d+s)?)?/i,
        );
        return t
          ? {
              years: ce(t[1]),
              months: ce(t[2]),
              days: ce(t[3]),
              hours: ce(t[4]),
              minutes: ce(t[5]),
              seconds: ce(t[6]),
            }
          : null;
      }
      function ce(e) {
        if (!e) return 0;
        const t = e.match(/(?:\d+(?:.|,)\d+|\d+)/);
        if (!t) return 0;
        const r = t[0].replace(',', '.');
        return Number(r);
      }
      function he(e) {
        return e.toISOString().replace(/\.[0-9]{3}/, '');
      }
      const ye = new Set([102100, 3857, 102113, 900913]),
        me = new Set([3395, 54004]),
        fe = new d.X(
          {
            bmp: 'image/bmp',
            gif: 'image/gif',
            jpg: 'image/jpeg',
            png: 'image/png',
            svg: 'image/svg+xml',
          },
          { ignoreUnknown: !1 },
        );
      let ge = class extends (0, p.p)(
        (0, N.h)(
          (0, j.n)((0, F.Q)((0, L.M)((0, T.q)((0, U.I)((0, y.R)(O.Z)))))),
        ),
      ) {
        constructor(...e) {
          super(...e),
            (this.allSublayers = new u.Z({
              getCollections: () => [this.sublayers],
              getChildrenFunction: (e) => e.sublayers,
            })),
            (this.customParameters = null),
            (this.customLayerParameters = null),
            (this.copyright = null),
            (this.description = null),
            (this.dimensions = null),
            (this.fullExtent = null),
            (this.fullExtents = null),
            (this.featureInfoFormat = null),
            (this.featureInfoUrl = null),
            (this.imageFormat = null),
            (this.imageMaxHeight = 2048),
            (this.imageMaxWidth = 2048),
            (this.imageTransparency = !0),
            (this.legendEnabled = !0),
            (this.mapUrl = null),
            (this.isReference = null),
            (this.operationalLayerType = 'WMS'),
            (this.spatialReference = null),
            (this.spatialReferences = null),
            (this.sublayers = null),
            (this.type = 'wms'),
            (this.url = null),
            (this.version = null),
            this.watch(
              'sublayers',
              (e, t) => {
                if (t) {
                  for (const e of t) e.layer = null;
                  this.handles.remove('wms-sublayer');
                }
                if (e) {
                  for (const t of e) (t.parent = this), (t.layer = this);
                  this.handles.add(
                    [
                      e.on('after-add', ({ item: e }) => {
                        (e.parent = this), (e.layer = this);
                      }),
                      e.on('after-remove', ({ item: e }) => {
                        (e.parent = null), (e.layer = null);
                      }),
                    ],
                    'wms-sublayer',
                  );
                }
              },
              !0,
            );
        }
        normalizeCtorArgs(e, t) {
          return 'string' == typeof e ? { url: e, ...t } : e;
        }
        load(e) {
          const t = (0, h.pC)(e) ? e.signal : null;
          return (
            this.addResolvingPromise(
              this.loadFromPortal({ supportedTypes: ['WMS'] }, e)
                .catch(m.r9)
                .then(() => this._fetchService(t)),
            ),
            Promise.resolve(this)
          );
        }
        readFullExtentFromItemOrMap(e, t) {
          const r = t.extent;
          return new C.Z({
            xmin: r[0][0],
            ymin: r[0][1],
            xmax: r[1][0],
            ymax: r[1][1],
          });
        }
        writeFullExtent(e, t) {
          t.extent = [
            [e.xmin, e.ymin],
            [e.xmax, e.ymax],
          ];
        }
        readImageFormat(e, t) {
          const r = t.supportedImageFormatTypes;
          return r && r.indexOf('image/png') > -1 ? 'image/png' : r && r[0];
        }
        readSpatialReferenceFromItemOrDocument(e, t) {
          return new S.Z(t.spatialReferences[0]);
        }
        writeSpatialReferences(e, t) {
          const r = this.spatialReference && this.spatialReference.wkid;
          e && r
            ? ((t.spatialReferences = e.filter((e) => e !== r)),
              t.spatialReferences.unshift(r))
            : (t.spatialReferences = e);
        }
        readSublayersFromItemOrMap(e, t, r) {
          return be(t.layers, r, t.visibleLayers);
        }
        readSublayers(e, t, r) {
          return be(t.layers, r);
        }
        writeSublayers(e, t, r, i) {
          t.layers = [];
          const s = new Map(),
            n = e.flatten(({ sublayers: e }) => e && e.toArray()).toArray();
          n.forEach((e) => {
            'number' == typeof e.parent.id &&
              (s.has(e.parent.id)
                ? s.get(e.parent.id).push(e.id)
                : s.set(e.parent.id, [e.id]));
          }),
            n.forEach((e) => {
              const r = { sublayer: e, ...i },
                n = e.write(
                  {
                    parentLayerId:
                      'number' == typeof e.parent.id ? e.parent.id : -1,
                  },
                  r,
                );
              if (
                (s.has(e.id) && (n.sublayerIds = s.get(e.id)),
                !e.sublayers && e.name)
              ) {
                const i = e.write({}, r);
                delete i.id, t.layers.push(i);
              }
            }),
            (t.visibleLayers = n
              .filter((e) => e.visible && !e.sublayers)
              .map((e) => e.name));
        }
        createExportImageParameters(e, t, r, i) {
          const s = (i && i.pixelRatio) || 1,
            n = (0, I.yZ)({ extent: e, width: t }) * s,
            a = new Z({ layer: this, scale: n }),
            { xmin: o, ymin: l, xmax: u, ymax: p, spatialReference: d } = e,
            c = (function (e, t) {
              let r = e.wkid;
              return (0, h.Wi)(t)
                ? r
                : (!t.includes(r) && e.latestWkid && (r = e.latestWkid),
                  ye.has(r)
                    ? t.find((e) => ye.has(e)) ||
                      t.find((e) => me.has(e)) ||
                      102100
                    : r);
            })(d, this.spatialReferences),
            y =
              '1.3.0' === this.version && (0, R.A)(c)
                ? `${l},${o},${p},${u}`
                : `${o},${l},${u},${p}`,
            m = a.toJSON();
          return {
            bbox: y,
            ['1.3.0' === this.version ? 'crs' : 'srs']: isNaN(c)
              ? void 0
              : 'EPSG:' + c,
            ...m,
          };
        }
        async fetchImage(e, t, r, i) {
          var s, n;
          const a = this.mapUrl,
            l = this.createExportImageParameters(e, t, r, i);
          if (!l.layers) {
            const e = document.createElement('canvas');
            return (e.width = t), (e.height = r), e;
          }
          const u = null == i || null == (s = i.timeExtent) ? void 0 : s.start,
            p = null == i || null == (n = i.timeExtent) ? void 0 : n.end,
            d =
              (0, h.pC)(u) && (0, h.pC)(p)
                ? u.getTime() === p.getTime()
                  ? he(u)
                  : `${he(u)}/${he(p)}`
                : void 0,
            c = {
              responseType: 'image',
              query: this._mixCustomParameters({
                width: t,
                height: r,
                ...l,
                time: d,
                ...this.refreshParameters,
              }),
              signal: null == i ? void 0 : i.signal,
            };
          return (0, o.default)(a, c).then((e) => e.data);
        }
        fetchFeatureInfo(e, t, r, i, s) {
          const o = (0, I.yZ)({ extent: e, width: t }),
            l = (function (e) {
              return e.length
                ? e
                    .filter((e) => e.popupEnabled && e.name && e.queryable)
                    .map((e) => e.name)
                    .join(',')
                : '';
            })(new Z({ layer: this, scale: o }).visibleSublayers);
          if (!this.featureInfoUrl || !l) return null;
          const u = '1.3.0' === this.version ? { I: i, J: s } : { x: i, y: s },
            p = {
              query_layers: l,
              request: 'GetFeatureInfo',
              info_format: this.featureInfoFormat,
              feature_count: 25,
              width: t,
              height: r,
              ...u,
            },
            d = { ...this.createExportImageParameters(e, t, r), ...p },
            c = this._mixCustomParameters(d),
            h = (0, f.fl)(this.featureInfoUrl, c),
            y = document.createElement('iframe');
          (y.src = h),
            (y.style.border = 'none'),
            (y.style.margin = '0'),
            (y.style.width = '100%'),
            y.setAttribute('sandbox', '');
          const m = new a.Z({ title: this.title, content: y });
          return new n.Z({ sourceLayer: this, popupTemplate: m });
        }
        findSublayerById(e) {
          return this.allSublayers.find((t) => t.id === e);
        }
        findSublayerByName(e) {
          return this.allSublayers.find((t) => t.name === e);
        }
        serviceSupportsSpatialReference(e) {
          return (
            (0, A.G)(this.url) ||
            this.spatialReferences.some((t) => {
              const r = 900913 === t ? S.Z.WebMercator : new S.Z({ wkid: t });
              return (0, E.fS)(r, e);
            })
          );
        }
        async _fetchService(e) {
          if (!this.resourceInfo) {
            this.parsedUrl.query &&
              this.parsedUrl.query.service &&
              ((this.parsedUrl.query.SERVICE = this.parsedUrl.query.service),
              delete this.parsedUrl.query.service),
              this.parsedUrl.query &&
                this.parsedUrl.query.request &&
                ((this.parsedUrl.query.REQUEST = this.parsedUrl.query.request),
                delete this.parsedUrl.query.request);
            const t = await (0, o.default)(this.parsedUrl.path, {
              query: {
                SERVICE: 'WMS',
                REQUEST: 'GetCapabilities',
                ...this.parsedUrl.query,
                ...this.customParameters,
              },
              responseType: 'xml',
              signal: e,
            });
            this.resourceInfo = H(t.data);
          }
          if (this.parsedUrl) {
            const e = new f.R9(this.parsedUrl.path);
            'https' !== e.scheme ||
              (e.port && '443' !== e.port) ||
              -1 !== s.Z.request.httpsDomains.indexOf(e.host) ||
              s.Z.request.httpsDomains.push(e.host);
          }
          this.read(this.resourceInfo, { origin: 'service' });
        }
        _mixCustomParameters(e) {
          if (!this.customLayerParameters && !this.customParameters) return e;
          const t = { ...this.customParameters, ...this.customLayerParameters };
          for (const r in t) e[r.toLowerCase()] = t[r];
          return e;
        }
      };
      function be(e, t, r) {
        const i = new Map();
        e.every((e) => null == e.id) &&
          (e = (0, c.d9)(e)).forEach((e, t) => (e.id = t));
        for (const s of e) {
          const e = new W();
          e.read(s, t),
            -1 === (null == r ? void 0 : r.indexOf(e.name)) && (e.visible = !1),
            i.set(e.id, e);
        }
        const s = [];
        for (const t of e) {
          const e = i.get(t.id);
          if (null != t.parentLayerId && t.parentLayerId >= 0) {
            const r = i.get(t.parentLayerId);
            r.sublayers || (r.sublayers = new l.Z()), r.sublayers.unshift(e);
          } else s.unshift(e);
        }
        return s;
      }
      (0, i._)(
        [(0, g.Cb)({ readOnly: !0 })],
        ge.prototype,
        'allSublayers',
        void 0,
      ),
        (0, i._)(
          [(0, g.Cb)({ json: { type: Object, write: !0 } })],
          ge.prototype,
          'customParameters',
          void 0,
        ),
        (0, i._)(
          [(0, g.Cb)({ json: { type: Object, write: !0 } })],
          ge.prototype,
          'customLayerParameters',
          void 0,
        ),
        (0, i._)(
          [(0, g.Cb)({ type: String, json: { write: !0 } })],
          ge.prototype,
          'copyright',
          void 0,
        ),
        (0, i._)([(0, g.Cb)()], ge.prototype, 'description', void 0),
        (0, i._)(
          [(0, g.Cb)({ readOnly: !0 })],
          ge.prototype,
          'dimensions',
          void 0,
        ),
        (0, i._)(
          [
            (0, g.Cb)({
              json: {
                type: [[Number]],
                read: { source: 'extent' },
                write: { target: 'extent' },
                origins: {
                  'web-document': { write: { ignoreOrigin: !0 } },
                  'portal-item': { write: { ignoreOrigin: !0 } },
                },
              },
            }),
          ],
          ge.prototype,
          'fullExtent',
          void 0,
        ),
        (0, i._)(
          [(0, v.r)(['web-document', 'portal-item'], 'fullExtent', ['extent'])],
          ge.prototype,
          'readFullExtentFromItemOrMap',
          null,
        ),
        (0, i._)(
          [
            (0, w.c)(['web-document', 'portal-item'], 'fullExtent', {
              extent: { type: [[Number]] },
            }),
          ],
          ge.prototype,
          'writeFullExtent',
          null,
        ),
        (0, i._)([(0, g.Cb)()], ge.prototype, 'fullExtents', void 0),
        (0, i._)(
          [(0, g.Cb)({ type: String, json: { write: { ignoreOrigin: !0 } } })],
          ge.prototype,
          'featureInfoFormat',
          void 0,
        ),
        (0, i._)(
          [(0, g.Cb)({ type: String, json: { write: { ignoreOrigin: !0 } } })],
          ge.prototype,
          'featureInfoUrl',
          void 0,
        ),
        (0, i._)(
          [
            (0, g.Cb)({
              type: String,
              json: {
                origins: {
                  'web-document': {
                    default: 'image/png',
                    type: fe.jsonValues,
                    read: { reader: fe.read, source: 'format' },
                    write: { writer: fe.write, target: 'format' },
                  },
                },
              },
            }),
          ],
          ge.prototype,
          'imageFormat',
          void 0,
        ),
        (0, i._)(
          [(0, v.r)('imageFormat', ['supportedImageFormatTypes'])],
          ge.prototype,
          'readImageFormat',
          null,
        ),
        (0, i._)(
          [
            (0, g.Cb)({
              type: Number,
              json: {
                read: { source: 'maxHeight' },
                write: { target: 'maxHeight' },
              },
            }),
          ],
          ge.prototype,
          'imageMaxHeight',
          void 0,
        ),
        (0, i._)(
          [
            (0, g.Cb)({
              type: Number,
              json: {
                read: { source: 'maxWidth' },
                write: { target: 'maxWidth' },
              },
            }),
          ],
          ge.prototype,
          'imageMaxWidth',
          void 0,
        ),
        (0, i._)([(0, g.Cb)()], ge.prototype, 'imageTransparency', void 0),
        (0, i._)([(0, g.Cb)(M.rn)], ge.prototype, 'legendEnabled', void 0),
        (0, i._)(
          [(0, g.Cb)({ type: ['show', 'hide', 'hide-children'] })],
          ge.prototype,
          'listMode',
          void 0,
        ),
        (0, i._)(
          [(0, g.Cb)({ type: String, json: { write: { ignoreOrigin: !0 } } })],
          ge.prototype,
          'mapUrl',
          void 0,
        ),
        (0, i._)(
          [
            (0, g.Cb)({
              type: Boolean,
              json: {
                read: !1,
                write: { enabled: !0, overridePolicy: () => ({ enabled: !1 }) },
              },
            }),
          ],
          ge.prototype,
          'isReference',
          void 0,
        ),
        (0, i._)(
          [(0, g.Cb)({ type: ['WMS'] })],
          ge.prototype,
          'operationalLayerType',
          void 0,
        ),
        (0, i._)([(0, g.Cb)()], ge.prototype, 'resourceInfo', void 0),
        (0, i._)(
          [
            (0, g.Cb)({
              type: S.Z,
              json: {
                origins: {
                  service: { read: { source: 'extent.spatialReference' } },
                },
                write: !1,
              },
            }),
          ],
          ge.prototype,
          'spatialReference',
          void 0,
        ),
        (0, i._)(
          [
            (0, v.r)(['web-document', 'portal-item'], 'spatialReference', [
              'spatialReferences',
            ]),
          ],
          ge.prototype,
          'readSpatialReferenceFromItemOrDocument',
          null,
        ),
        (0, i._)(
          [
            (0, g.Cb)({
              type: [b.z8],
              json: {
                read: !1,
                origins: {
                  service: { read: !0 },
                  'web-document': { read: !1, write: { ignoreOrigin: !0 } },
                  'portal-item': { read: !1, write: { ignoreOrigin: !0 } },
                },
              },
            }),
          ],
          ge.prototype,
          'spatialReferences',
          void 0,
        ),
        (0, i._)(
          [(0, w.c)(['web-document', 'portal-item'], 'spatialReferences')],
          ge.prototype,
          'writeSpatialReferences',
          null,
        ),
        (0, i._)(
          [
            (0, g.Cb)({
              type: l.Z.ofType(W),
              json: {
                write: {
                  target: 'layers',
                  overridePolicy(e, t, r) {
                    if (
                      (function (e, t) {
                        return e.some((e) => {
                          for (const r in e)
                            if ((0, x.d)(e, r, null, t)) return !0;
                          return !1;
                        });
                      })(this.allSublayers, r)
                    )
                      return { ignoreOrigin: !0 };
                  },
                },
              },
            }),
          ],
          ge.prototype,
          'sublayers',
          void 0,
        ),
        (0, i._)(
          [
            (0, v.r)(['web-document', 'portal-item'], 'sublayers', [
              'layers',
              'visibleLayers',
            ]),
          ],
          ge.prototype,
          'readSublayersFromItemOrMap',
          null,
        ),
        (0, i._)(
          [(0, v.r)('service', 'sublayers', ['layers'])],
          ge.prototype,
          'readSublayers',
          null,
        ),
        (0, i._)(
          [
            (0, w.c)('sublayers', {
              layers: { type: [W] },
              visibleLayers: { type: [String] },
            }),
          ],
          ge.prototype,
          'writeSublayers',
          null,
        ),
        (0, i._)(
          [(0, g.Cb)({ json: { read: !1 }, readOnly: !0, value: 'wms' })],
          ge.prototype,
          'type',
          void 0,
        ),
        (0, i._)([(0, g.Cb)(M.HQ)], ge.prototype, 'url', void 0),
        (0, i._)(
          [(0, g.Cb)({ type: String, json: { write: { ignoreOrigin: !0 } } })],
          ge.prototype,
          'version',
          void 0,
        ),
        (ge = (0, i._)([(0, _.j)('esri.layers.WMSLayer')], ge));
      const ve = ge;
    },
    16859: (e, t, r) => {
      r.d(t, { I: () => _ });
      var i = r(43697),
        s = r(40330),
        n = r(3172),
        a = r(66643),
        o = r(20102),
        l = r(92604),
        u = r(70586),
        p = r(95330),
        d = r(17452),
        c = r(5600),
        h = (r(67676), r(80442), r(75215), r(71715)),
        y = r(52011),
        m = r(30556),
        f = r(65587),
        g = r(15235),
        b = r(86082);
      const v = l.Z.getLogger('esri.layers.mixins.PortalLayer'),
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
                ? null == s.id
                  ? void 0
                  : s.id.findCredential(this.url)
                : null;
              if (!t) return !0;
              const r =
                w.credential === t ? w.user : await this._fetchEditingUser(e);
              return (
                (w.credential = t),
                (w.user = r),
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
              const o = s.id.findServerInfo(this.url);
              if (null == o || !o.owningSystemUrl) return null;
              const l = `${o.owningSystemUrl}/sharing/rest`,
                p = f.Z.getDefault();
              if (p && p.loaded && (0, d.Fv)(p.restUrl) === (0, d.Fv)(l))
                return p.user;
              const c = `${l}/community/self`,
                h = (0, u.pC)(e) ? e.signal : null,
                y = await (0, a.q6)(
                  (0, n.default)(c, {
                    authMode: 'no-prompt',
                    query: { f: 'json' },
                    signal: h,
                  }),
                );
              return y.ok ? b.default.fromJSON(y.value.data) : null;
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
              return r && i && !(0, d.tm)(i.restUrl, r.restUrl)
                ? (t.messages &&
                    t.messages.push(
                      new o.Z(
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
              [(0, c.Cb)({ type: g.default })],
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
              [(0, c.Cb)({ clonable: !1 })],
              t.prototype,
              'resourceReferences',
              void 0,
            ),
            (0, i._)(
              [(0, c.Cb)({ readOnly: !0 })],
              t.prototype,
              'userHasEditingPrivileges',
              void 0,
            ),
            (t = (0, i._)([(0, y.j)('esri.layers.mixins.PortalLayer')], t)),
            t
          );
        },
        w = { credential: null, user: null };
    },
    34760: (e, t, r) => {
      r.d(t, { Q: () => g });
      var i = r(43697),
        s = r(92604),
        n = r(95330),
        a = r(5600),
        o = (r(67676), r(80442), r(75215), r(52011)),
        l = r(80539),
        u = (r(20102), r(26258), r(87538));
      const p = new l.Z(),
        d = new WeakMap();
      function c(e) {
        return (
          e && 'object' == typeof e && 'refreshInterval' in e && 'refresh' in e
        );
      }
      function h(e, t) {
        return Number.isFinite(e) && Number.isFinite(t)
          ? t <= 0
            ? e
            : h(t, e % t)
          : 0;
      }
      let y = 0,
        m = 0;
      function f() {
        const e = Date.now();
        for (const r of p)
          if (r.refreshInterval) {
            var t;
            e - (null != (t = d.get(r)) ? t : 0) + 5 >=
              6e4 * r.refreshInterval && (d.set(r, e), r.refresh(e));
          }
      }
      (0, u.EH)(() => {
        const e = Date.now();
        let t = 0;
        for (const r of p)
          (t = h(Math.round(6e4 * r.refreshInterval), t)),
            r.refreshInterval ? d.get(r) || d.set(r, e) : d.delete(r);
        if (t !== m) {
          if (((m = t), clearInterval(y), 0 === m)) return void (y = 0);
          y = setInterval(f, m);
        }
      });
      const g = (e) => {
        let t = class extends e {
          constructor(...e) {
            super(...e),
              (this.refreshInterval = 0),
              (this.refreshTimestamp = 0),
              (this._debounceHasDataChanged = (0, n.Ds)(() =>
                this.hasDataChanged(),
              )),
              this.when().then(
                () => {
                  !(function (e) {
                    c(e) && p.push(e);
                  })(this);
                },
                () => {},
              );
          }
          destroy() {
            c(this) && p.includes(this) && p.remove(this);
          }
          get refreshParameters() {
            return { _ts: this.refreshTimestamp || null };
          }
          refresh(e = Date.now()) {
            (0, n.R8)(this._debounceHasDataChanged()).then(
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
              (0, a.Cb)({
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
            [(0, a.Cb)({ readOnly: !0 })],
            t.prototype,
            'refreshTimestamp',
            void 0,
          ),
          (0, i._)([(0, a.Cb)()], t.prototype, 'refreshParameters', null),
          (t = (0, i._)([(0, o.j)('esri.layers.mixins.RefreshableLayer')], t)),
          t
        );
      };
    },
    28294: (e, t, r) => {
      r.d(t, { n: () => c });
      var i = r(43697),
        s = r(92835),
        n = r(84552),
        a = r(5600),
        o = (r(67676), r(80442), r(75215), r(71715)),
        l = r(52011),
        u = r(30547),
        p = r(35671),
        d = r(78981);
      const c = (e) => {
        let t = class extends e {
          constructor() {
            super(...arguments),
              (this.timeExtent = null),
              (this.timeOffset = null),
              (this.useViewTime = !0);
          }
          readOffset(e, t) {
            const r = t.timeInfo.exportOptions;
            if (!r) return null;
            const i = r.timeOffset,
              s = d.v.fromJSON(r.timeOffsetUnits);
            return i && s ? new n.Z({ value: i, unit: s }) : null;
          }
          set timeInfo(e) {
            (0, p.UF)(e, this.fieldsIndex), this._set('timeInfo', e);
          }
        };
        return (
          (0, i._)(
            [(0, a.Cb)({ type: s.Z, json: { write: !1 } })],
            t.prototype,
            'timeExtent',
            void 0,
          ),
          (0, i._)(
            [(0, a.Cb)({ type: n.Z })],
            t.prototype,
            'timeOffset',
            void 0,
          ),
          (0, i._)(
            [(0, o.r)('service', 'timeOffset', ['timeInfo.exportOptions'])],
            t.prototype,
            'readOffset',
            null,
          ),
          (0, i._)(
            [
              (0, a.Cb)({
                value: null,
                type: u.Z,
                json: {
                  write: !0,
                  origins: { 'web-document': { read: !1, write: !1 } },
                },
              }),
            ],
            t.prototype,
            'timeInfo',
            null,
          ),
          (0, i._)(
            [
              (0, a.Cb)({
                type: Boolean,
                json: {
                  read: { source: 'timeAnimation' },
                  write: { target: 'timeAnimation' },
                  origins: { 'web-scene': { read: !1, write: !1 } },
                },
              }),
            ],
            t.prototype,
            'useViewTime',
            void 0,
          ),
          (t = (0, i._)([(0, l.j)('esri.layers.mixins.TemporalLayer')], t)),
          t
        );
      };
    },
    52162: (e, t, r) => {
      r.d(t, { A: () => s });
      const i = [
        [3819, 3819],
        [3821, 3824],
        [3889, 3889],
        [3906, 3906],
        [4001, 4025],
        [4027, 4036],
        [4039, 4047],
        [4052, 4055],
        [4074, 4075],
        [4080, 4081],
        [4120, 4176],
        [4178, 4185],
        [4188, 4216],
        [4218, 4289],
        [4291, 4304],
        [4306, 4319],
        [4322, 4326],
        [4463, 4463],
        [4470, 4470],
        [4475, 4475],
        [4483, 4483],
        [4490, 4490],
        [4555, 4558],
        [4600, 4646],
        [4657, 4765],
        [4801, 4811],
        [4813, 4821],
        [4823, 4824],
        [4901, 4904],
        [5013, 5013],
        [5132, 5132],
        [5228, 5229],
        [5233, 5233],
        [5246, 5246],
        [5252, 5252],
        [5264, 5264],
        [5324, 5340],
        [5354, 5354],
        [5360, 5360],
        [5365, 5365],
        [5370, 5373],
        [5381, 5381],
        [5393, 5393],
        [5451, 5451],
        [5464, 5464],
        [5467, 5467],
        [5489, 5489],
        [5524, 5524],
        [5527, 5527],
        [5546, 5546],
        [2044, 2045],
        [2081, 2083],
        [2085, 2086],
        [2093, 2093],
        [2096, 2098],
        [2105, 2132],
        [2169, 2170],
        [2176, 2180],
        [2193, 2193],
        [2200, 2200],
        [2206, 2212],
        [2319, 2319],
        [2320, 2462],
        [2523, 2549],
        [2551, 2735],
        [2738, 2758],
        [2935, 2941],
        [2953, 2953],
        [3006, 3030],
        [3034, 3035],
        [3038, 3051],
        [3058, 3059],
        [3068, 3068],
        [3114, 3118],
        [3126, 3138],
        [3150, 3151],
        [3300, 3301],
        [3328, 3335],
        [3346, 3346],
        [3350, 3352],
        [3366, 3366],
        [3389, 3390],
        [3416, 3417],
        [3833, 3841],
        [3844, 3850],
        [3854, 3854],
        [3873, 3885],
        [3907, 3910],
        [4026, 4026],
        [4037, 4038],
        [4417, 4417],
        [4434, 4434],
        [4491, 4554],
        [4839, 4839],
        [5048, 5048],
        [5105, 5130],
        [5253, 5259],
        [5269, 5275],
        [5343, 5349],
        [5479, 5482],
        [5518, 5519],
        [5520, 5520],
        [20004, 20032],
        [20064, 20092],
        [21413, 21423],
        [21473, 21483],
        [21896, 21899],
        [22171, 22177],
        [22181, 22187],
        [22191, 22197],
        [25884, 25884],
        [27205, 27232],
        [27391, 27398],
        [27492, 27492],
        [28402, 28432],
        [28462, 28492],
        [30161, 30179],
        [30800, 30800],
        [31251, 31259],
        [31275, 31279],
        [31281, 31290],
        [31466, 31700],
      ];
      function s(e) {
        return i.some(([t, r]) => e >= t && e <= r);
      }
    },
    30547: (e, t, r) => {
      r.d(t, { Z: () => v });
      var i,
        s = r(43697),
        n = r(92835),
        a = r(84552),
        o = r(96674),
        l = r(22974),
        u = r(70586),
        p = r(5600),
        d = (r(75215), r(71715)),
        c = r(52011),
        h = r(30556);
      r(67676), r(80442);
      let y = (i = class extends o.wq {
        constructor(e) {
          super(e), (this.respectsDaylightSaving = !1), (this.timezone = null);
        }
        readRespectsDaylightSaving(e, t) {
          return void 0 !== t.respectsDaylightSaving
            ? t.respectsDaylightSaving
            : void 0 !== t.respectDaylightSaving && t.respectDaylightSaving;
        }
        clone() {
          const { respectsDaylightSaving: e, timezone: t } = this;
          return new i({ respectsDaylightSaving: e, timezone: t });
        }
      });
      (0, s._)(
        [(0, p.Cb)({ type: Boolean, json: { write: !0 } })],
        y.prototype,
        'respectsDaylightSaving',
        void 0,
      ),
        (0, s._)(
          [
            (0, d.r)('respectsDaylightSaving', [
              'respectsDaylightSaving',
              'respectDaylightSaving',
            ]),
          ],
          y.prototype,
          'readRespectsDaylightSaving',
          null,
        ),
        (0, s._)(
          [
            (0, p.Cb)({
              type: String,
              json: {
                read: { source: 'timeZone' },
                write: { target: 'timeZone' },
              },
            }),
          ],
          y.prototype,
          'timezone',
          void 0,
        ),
        (y = i = (0, s._)([(0, c.j)('esri.layers.support.TimeReference')], y));
      const m = y;
      var f,
        g = r(78981);
      let b = (f = class extends o.wq {
        constructor(e) {
          super(e),
            (this.cumulative = !1),
            (this.endField = null),
            (this.fullTimeExtent = null),
            (this.hasLiveData = !1),
            (this.interval = null),
            (this.startField = null),
            (this.timeReference = null),
            (this.trackIdField = null),
            (this.useTime = !0);
        }
        readFullTimeExtent(e, t) {
          if (
            !t.timeExtent ||
            !Array.isArray(t.timeExtent) ||
            2 !== t.timeExtent.length
          )
            return null;
          const r = new Date(t.timeExtent[0]),
            i = new Date(t.timeExtent[1]);
          return new n.Z({ start: r, end: i });
        }
        writeFullTimeExtent(e, t) {
          e && (0, u.pC)(e.start) && (0, u.pC)(e.end)
            ? (t.timeExtent = [e.start.getTime(), e.end.getTime()])
            : (t.timeExtent = null);
        }
        readInterval(e, t) {
          return t.timeInterval && t.timeIntervalUnits
            ? new a.Z({
                value: t.timeInterval,
                unit: g.v.fromJSON(t.timeIntervalUnits),
              })
            : t.defaultTimeInterval && t.defaultTimeIntervalUnits
            ? new a.Z({
                value: t.defaultTimeInterval,
                unit: g.v.fromJSON(t.defaultTimeIntervalUnits),
              })
            : null;
        }
        writeInterval(e, t) {
          if (e) {
            const r = e.toJSON();
            (t.timeInterval = r.value), (t.timeIntervalUnits = r.unit);
          } else (t.timeInterval = null), (t.timeIntervalUnits = null);
        }
        clone() {
          const {
            cumulative: e,
            endField: t,
            hasLiveData: r,
            interval: i,
            startField: s,
            timeReference: n,
            fullTimeExtent: a,
            trackIdField: o,
            useTime: u,
          } = this;
          return new f({
            cumulative: e,
            endField: t,
            hasLiveData: r,
            interval: i,
            startField: s,
            timeReference: (0, l.d9)(n),
            fullTimeExtent: (0, l.d9)(a),
            trackIdField: o,
            useTime: u,
          });
        }
      });
      (0, s._)(
        [
          (0, p.Cb)({
            type: Boolean,
            json: {
              read: { source: 'exportOptions.timeDataCumulative' },
              write: { target: 'exportOptions.timeDataCumulative' },
            },
          }),
        ],
        b.prototype,
        'cumulative',
        void 0,
      ),
        (0, s._)(
          [
            (0, p.Cb)({
              type: String,
              json: {
                read: { source: 'endTimeField' },
                write: { target: 'endTimeField', allowNull: !0 },
              },
            }),
          ],
          b.prototype,
          'endField',
          void 0,
        ),
        (0, s._)(
          [
            (0, p.Cb)({
              type: n.Z,
              json: { write: { enabled: !0, allowNull: !0 } },
            }),
          ],
          b.prototype,
          'fullTimeExtent',
          void 0,
        ),
        (0, s._)(
          [(0, d.r)('fullTimeExtent', ['timeExtent'])],
          b.prototype,
          'readFullTimeExtent',
          null,
        ),
        (0, s._)(
          [(0, h.c)('fullTimeExtent')],
          b.prototype,
          'writeFullTimeExtent',
          null,
        ),
        (0, s._)(
          [(0, p.Cb)({ type: Boolean, json: { write: !0 } })],
          b.prototype,
          'hasLiveData',
          void 0,
        ),
        (0, s._)(
          [
            (0, p.Cb)({
              type: a.Z,
              json: { write: { enabled: !0, allowNull: !0 } },
            }),
          ],
          b.prototype,
          'interval',
          void 0,
        ),
        (0, s._)(
          [
            (0, d.r)('interval', [
              'timeInterval',
              'timeIntervalUnits',
              'defaultTimeInterval',
              'defaultTimeIntervalUnits',
            ]),
          ],
          b.prototype,
          'readInterval',
          null,
        ),
        (0, s._)([(0, h.c)('interval')], b.prototype, 'writeInterval', null),
        (0, s._)(
          [
            (0, p.Cb)({
              type: String,
              json: {
                read: { source: 'startTimeField' },
                write: { target: 'startTimeField', allowNull: !0 },
              },
            }),
          ],
          b.prototype,
          'startField',
          void 0,
        ),
        (0, s._)(
          [
            (0, p.Cb)({
              type: m,
              json: { write: { enabled: !0, allowNull: !0 } },
            }),
          ],
          b.prototype,
          'timeReference',
          void 0,
        ),
        (0, s._)(
          [
            (0, p.Cb)({
              type: String,
              json: { write: { enabled: !0, allowNull: !0 } },
            }),
          ],
          b.prototype,
          'trackIdField',
          void 0,
        ),
        (0, s._)(
          [
            (0, p.Cb)({
              type: Boolean,
              json: {
                read: { source: 'exportOptions.useTime' },
                write: { target: 'exportOptions.useTime' },
              },
            }),
          ],
          b.prototype,
          'useTime',
          void 0,
        ),
        (b = f = (0, s._)([(0, c.j)('esri.layers.support.TimeInfo')], b));
      const v = b;
    },
    78981: (e, t, r) => {
      r.d(t, { v: () => i });
      const i = (0, r(35454).w)()({
        esriTimeUnitsMilliseconds: 'milliseconds',
        esriTimeUnitsSeconds: 'seconds',
        esriTimeUnitsMinutes: 'minutes',
        esriTimeUnitsHours: 'hours',
        esriTimeUnitsDays: 'days',
        esriTimeUnitsWeeks: 'weeks',
        esriTimeUnitsMonths: 'months',
        esriTimeUnitsYears: 'years',
        esriTimeUnitsDecades: 'decades',
        esriTimeUnitsCenturies: 'centuries',
        esriTimeUnitsUnknown: void 0,
      });
    },
    99282: (e, t, r) => {
      r.d(t, { a: () => n });
      var i = r(67900),
        s = r(68441);
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
        'decimal-degrees': 1 / (0, i.ty)(1, 'meters', s.sv.radius),
      };
    },
  },
]);
