'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [4959],
  {
    16453: (e, t, r) => {
      r.d(t, { R: () => b, w: () => _ });
      var s = r(43697),
        i = r(15923),
        o = r(70586),
        n = r(41103),
        a = r(22974),
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
              t.set(r, (0, a.d9)(e), l.s3.DEFAULTS);
            });
          for (let r = l.s3.SERVICE; r < l.kk; r++) {
            const s = this._originStores[r];
            s &&
              s.forEach((s, i) => {
                (e && e.has(i)) || t.set(i, (0, a.d9)(s), r);
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
          let s = this._originStores[r];
          if (
            (s || ((s = new Map()), (this._originStores[r] = s)),
            s.set(e, t),
            !this._values.has(e) ||
              (0, o.j0)(this._propertyOriginMap.get(e)) <= r)
          ) {
            const s = this._values.get(e);
            return (
              this._values.set(e, t), this._propertyOriginMap.set(e, r), s !== t
            );
          }
          return !1;
        }
        delete(e, t = l.s3.USER) {
          const r = this._originStores[t];
          if (!r) return;
          const s = r.get(e);
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
          return s;
        }
        has(e, t) {
          const r = void 0 === t ? this._values : this._originStores[t];
          return !!r && r.has(e);
        }
        revert(e, t) {
          for (; t > 0 && !this.has(e, t); ) --t;
          const r = this._originStores[t],
            s = r && r.get(e),
            i = this._values.get(e);
          return (
            this._values.set(e, s), this._propertyOriginMap.set(e, t), i !== s
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
        h = r(1153),
        d = r(52011);
      const c = (e) => {
        let t = class extends e {
          constructor(...e) {
            super(...e);
            const t = (0, o.j0)((0, h.vw)(this)),
              r = t.store,
              s = new u();
            (t.store = s), (0, n.M)(t, r, s);
          }
          read(e, t) {
            (0, p.i)(this, e, t);
          }
          getAtOrigin(e, t) {
            const r = y(this),
              s = (0, l.M9)(t);
            if ('string' == typeof e) return r.get(e, s);
            const i = {};
            return (
              e.forEach((e) => {
                i[e] = r.get(e, s);
              }),
              i
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
              s = (0, l.M9)(t),
              i = (0, h.vw)(this);
            let o;
            (o = 'string' == typeof e ? ('*' === e ? r.keys(s) : [e]) : e),
              o.forEach((e) => {
                i.invalidate(e), r.revert(e, s), i.commit(e);
              });
          }
        };
        return (
          (t = (0, s._)(
            [(0, d.j)('esri.core.ReadOnlyMultiOriginJSONSupport')],
            t,
          )),
          t
        );
      };
      function y(e) {
        return (0, h.vw)(e).store;
      }
      let m = class extends c(i.Z) {};
      m = (0, s._)([(0, d.j)('esri.core.ReadOnlyMultiOriginJSONSupport')], m);
      var g = r(76169);
      const f = (e) => {
        let t = class extends e {
          constructor(...e) {
            super(...e);
          }
          clear(e, t = 'user') {
            return v(this).delete(e, (0, l.M9)(t));
          }
          write(e = {}, t) {
            return (0, g.c)(this, (e = e || {}), t), e;
          }
          setAtOrigin(e, t, r) {
            (0, h.vw)(this).setAtOrigin(e, t, (0, l.M9)(r));
          }
          removeOrigin(e) {
            const t = v(this),
              r = (0, l.M9)(e),
              s = t.keys(r);
            for (const e of s)
              t.originOf(e) === r && t.set(e, t.get(e, r), l.s3.USER);
          }
          updateOrigin(e, t) {
            const r = v(this),
              s = (0, l.M9)(t),
              i = this.get(e);
            for (let t = s + 1; t < l.kk; ++t) r.delete(e, t);
            r.set(e, i, s);
          }
          toJSON(e) {
            return this.write({}, e);
          }
        };
        return (
          (t = (0, s._)(
            [(0, d.j)('esri.core.WriteableMultiOriginJSONSupport')],
            t,
          )),
          (t.prototype.toJSON.isDefaultToJSON = !0),
          t
        );
      };
      function v(e) {
        return (0, h.vw)(e).store;
      }
      const b = (e) => {
        let t = class extends f(c(e)) {
          constructor(...e) {
            super(...e);
          }
        };
        return (
          (t = (0, s._)([(0, d.j)('esri.core.MultiOriginJSONSupport')], t)), t
        );
      };
      let _ = class extends b(i.Z) {};
      _ = (0, s._)([(0, d.j)('esri.core.MultiOriginJSONSupport')], _);
    },
    3723: (e, t, r) => {
      r.r(t), r.d(t, { default: () => U });
      var s = r(43697),
        i = r(68773),
        o = r(3172),
        n = (r(78223), r(70586)),
        a = r(16453),
        l = r(95330),
        u = r(17452),
        p = r(5600),
        h = (r(67676), r(80442), r(75215), r(71715)),
        d = r(52011),
        c = r(6570),
        y = r(8744),
        m = r(29600),
        g = r(71612),
        f = r(38009),
        v = r(16859),
        b = r(34760),
        _ = r(72965),
        S = r(21506),
        C = r(89164),
        w = r(4095),
        I = r(37898),
        E = r(77987),
        O = r(20256);
      const M = ['atom', 'xml'],
        D = {
          base: C.Z,
          key: 'type',
          typeMap: { 'simple-line': w.Z },
          errorContext: 'symbol',
        },
        Z = {
          base: C.Z,
          key: 'type',
          typeMap: { 'picture-marker': I.Z, 'simple-marker': E.Z },
          errorContext: 'symbol',
        },
        k = {
          base: C.Z,
          key: 'type',
          typeMap: { 'simple-fill': O.Z },
          errorContext: 'symbol',
        };
      let P = class extends (0, g.h)(
        (0, b.Q)((0, f.q)((0, v.I)((0, _.M)((0, a.R)(m.Z))))),
      ) {
        constructor(...e) {
          super(...e),
            (this.description = null),
            (this.fullExtent = null),
            (this.legendEnabled = !0),
            (this.lineSymbol = null),
            (this.pointSymbol = null),
            (this.polygonSymbol = null),
            (this.operationalLayerType = 'GeoRSS'),
            (this.url = null),
            (this.type = 'geo-rss');
        }
        normalizeCtorArgs(e, t) {
          return 'string' == typeof e ? { url: e, ...t } : e;
        }
        readFeatureCollections(e, t) {
          return (
            t.featureCollection.layers.forEach((e) => {
              var t;
              const r = e.layerDefinition.drawingInfo.renderer.symbol;
              r &&
                'esriSFS' === r.type &&
                null != (t = r.outline) &&
                t.style.includes('esriSFS') &&
                (r.outline.style = 'esriSLSSolid');
            }),
            t.featureCollection.layers
          );
        }
        get hasPoints() {
          return this._hasGeometry('esriGeometryPoint');
        }
        get hasPolylines() {
          return this._hasGeometry('esriGeometryPolyline');
        }
        get hasPolygons() {
          return this._hasGeometry('esriGeometryPolygon');
        }
        get title() {
          const e = this._get('title');
          return e && 'defaults' !== this.originOf('title')
            ? e
            : this.url
            ? (0, u.vt)(this.url, M) || 'GeoRSS'
            : e || '';
        }
        set title(e) {
          this._set('title', e);
        }
        load(e) {
          const t = (0, n.pC)(e) ? e.signal : null;
          return (
            this.addResolvingPromise(
              this.loadFromPortal(
                {
                  supportedTypes: [
                    'Map Service',
                    'Feature Service',
                    'Feature Collection',
                    'Scene Service',
                  ],
                },
                e,
              )
                .catch(l.r9)
                .then(() => this._fetchService(t))
                .then((e) => {
                  this.read(e, { origin: 'service' });
                }),
            ),
            Promise.resolve(this)
          );
        }
        async hasDataChanged() {
          const e = await this._fetchService();
          return this.read(e, { origin: 'service', ignoreDefaults: !0 }), !0;
        }
        async _fetchService(e) {
          var t;
          const r = this.spatialReference,
            { data: s } = await (0, o.default)(i.Z.geoRSSServiceUrl, {
              query: {
                url: this.url,
                refresh: !!this.loaded || void 0,
                outSR: (0, y.oR)(r)
                  ? void 0
                  : null != (t = r.wkid)
                  ? t
                  : JSON.stringify(r),
              },
              signal: e,
            });
          return s;
        }
        _hasGeometry(e) {
          var t, r;
          return (
            null !=
              (t =
                null == (r = this.featureCollections)
                  ? void 0
                  : r.some((t) => {
                      var r, s;
                      return (
                        (null == (r = t.featureSet)
                          ? void 0
                          : r.geometryType) === e &&
                        (null == (s = t.featureSet.features)
                          ? void 0
                          : s.length) > 0
                      );
                    })) && t
          );
        }
      };
      (0, s._)([(0, p.Cb)()], P.prototype, 'description', void 0),
        (0, s._)([(0, p.Cb)()], P.prototype, 'featureCollections', void 0),
        (0, s._)(
          [
            (0, h.r)('service', 'featureCollections', [
              'featureCollection.layers',
            ]),
          ],
          P.prototype,
          'readFeatureCollections',
          null,
        ),
        (0, s._)(
          [(0, p.Cb)({ type: c.Z, json: { name: 'lookAtExtent' } })],
          P.prototype,
          'fullExtent',
          void 0,
        ),
        (0, s._)([(0, p.Cb)(S.id)], P.prototype, 'id', void 0),
        (0, s._)([(0, p.Cb)(S.rn)], P.prototype, 'legendEnabled', void 0),
        (0, s._)(
          [(0, p.Cb)({ types: D, json: { write: !0 } })],
          P.prototype,
          'lineSymbol',
          void 0,
        ),
        (0, s._)(
          [(0, p.Cb)({ type: ['show', 'hide'] })],
          P.prototype,
          'listMode',
          void 0,
        ),
        (0, s._)(
          [(0, p.Cb)({ types: Z, json: { write: !0 } })],
          P.prototype,
          'pointSymbol',
          void 0,
        ),
        (0, s._)(
          [(0, p.Cb)({ types: k, json: { write: !0 } })],
          P.prototype,
          'polygonSymbol',
          void 0,
        ),
        (0, s._)(
          [(0, p.Cb)({ type: ['GeoRSS'] })],
          P.prototype,
          'operationalLayerType',
          void 0,
        ),
        (0, s._)([(0, p.Cb)(S.HQ)], P.prototype, 'url', void 0),
        (0, s._)(
          [
            (0, p.Cb)({
              json: {
                origins: {
                  service: {
                    read: { source: 'name', reader: (e) => e || void 0 },
                  },
                },
              },
            }),
          ],
          P.prototype,
          'title',
          null,
        ),
        (0, s._)(
          [(0, p.Cb)({ readOnly: !0, json: { read: !1 }, value: 'geo-rss' })],
          P.prototype,
          'type',
          void 0,
        ),
        (P = (0, s._)([(0, d.j)('esri.layers.GeoRSSLayer')], P));
      const U = P;
    },
    29600: (e, t, r) => {
      r.d(t, { Z: () => _ });
      var s = r(43697),
        i = r(68773),
        o = (r(66577), r(3172)),
        n = r(20102),
        a = r(32448),
        l = r(10699),
        u = r(83379),
        p = r(92604),
        h = r(95330),
        d = r(17452),
        c = r(5600),
        y = (r(67676), r(80442), r(75215), r(52011)),
        m = r(6570),
        g = r(82971);
      let f = 0;
      const v = p.Z.getLogger('esri.layers.Layer');
      let b = class extends a.Z.EventedMixin((0, l.I)(u.Z)) {
        constructor() {
          super(...arguments),
            (this.attributionDataUrl = null),
            (this.fullExtent = new m.Z(-180, -90, 180, 90, g.Z.WGS84)),
            (this.id = Date.now().toString(16) + '-layer-' + f++),
            (this.legendEnabled = !0),
            (this.listMode = 'show'),
            (this.opacity = 1),
            (this.parent = null),
            (this.popupEnabled = !0),
            (this.attributionVisible = !0),
            (this.spatialReference = g.Z.WGS84),
            (this.title = null),
            (this.type = null),
            (this.url = null),
            (this.visible = !0);
        }
        static async fromArcGISServerUrl(e) {
          const t = 'string' == typeof e ? { url: e } : e,
            s = await r.e(3529).then(r.bind(r, 63529));
          try {
            return await s.fromUrl(t);
          } catch (e) {
            throw (
              (v.error(
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
            s = await r.e(4579).then(r.bind(r, 44579));
          try {
            return await s.fromItem(t);
          } catch (e) {
            const r = t && t.portalItem,
              s = (r && r.id) || 'unset',
              o = (r && r.portal && r.portal.url) || i.Z.portalUrl;
            throw (
              (v.error(
                '#fromPortalItem()',
                "Failed to create layer from portal item (portal: '" +
                  o +
                  "', id: '" +
                  s +
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
            (0, h.D_)(e) ||
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
          return e ? (0, d.mN)(e) : null;
        }
        async fetchAttributionData() {
          const e = this.attributionDataUrl;
          if (this.hasAttributionData && e)
            return (
              await (0, o.default)(e, {
                query: { f: 'json' },
                responseType: 'json',
              })
            ).data;
          throw new n.Z(
            'layer:no-attribution-data',
            'Layer does not have attribution data',
          );
        }
      };
      (0, s._)(
        [(0, c.Cb)({ type: String })],
        b.prototype,
        'attributionDataUrl',
        void 0,
      ),
        (0, s._)([(0, c.Cb)({ type: m.Z })], b.prototype, 'fullExtent', void 0),
        (0, s._)(
          [(0, c.Cb)({ readOnly: !0 })],
          b.prototype,
          'hasAttributionData',
          null,
        ),
        (0, s._)(
          [(0, c.Cb)({ type: String, clonable: !1 })],
          b.prototype,
          'id',
          void 0,
        ),
        (0, s._)(
          [(0, c.Cb)({ type: Boolean, nonNullable: !0 })],
          b.prototype,
          'legendEnabled',
          void 0,
        ),
        (0, s._)(
          [(0, c.Cb)({ type: ['show', 'hide', 'hide-children'] })],
          b.prototype,
          'listMode',
          void 0,
        ),
        (0, s._)(
          [
            (0, c.Cb)({
              type: Number,
              range: { min: 0, max: 1 },
              nonNullable: !0,
            }),
          ],
          b.prototype,
          'opacity',
          void 0,
        ),
        (0, s._)([(0, c.Cb)({ clonable: !1 })], b.prototype, 'parent', void 0),
        (0, s._)([(0, c.Cb)({ readOnly: !0 })], b.prototype, 'parsedUrl', null),
        (0, s._)(
          [(0, c.Cb)({ type: Boolean })],
          b.prototype,
          'popupEnabled',
          void 0,
        ),
        (0, s._)(
          [(0, c.Cb)({ type: Boolean })],
          b.prototype,
          'attributionVisible',
          void 0,
        ),
        (0, s._)(
          [(0, c.Cb)({ type: g.Z })],
          b.prototype,
          'spatialReference',
          void 0,
        ),
        (0, s._)([(0, c.Cb)({ type: String })], b.prototype, 'title', void 0),
        (0, s._)(
          [(0, c.Cb)({ type: String, readOnly: !0, json: { read: !1 } })],
          b.prototype,
          'type',
          void 0,
        ),
        (0, s._)([(0, c.Cb)()], b.prototype, 'url', void 0),
        (0, s._)(
          [(0, c.Cb)({ type: Boolean, nonNullable: !0 })],
          b.prototype,
          'visible',
          void 0,
        ),
        (b = (0, s._)([(0, y.j)('esri.layers.Layer')], b));
      const _ = b;
    },
    16859: (e, t, r) => {
      r.d(t, { I: () => _ });
      var s = r(43697),
        i = r(40330),
        o = r(3172),
        n = r(66643),
        a = r(20102),
        l = r(92604),
        u = r(70586),
        p = r(95330),
        h = r(17452),
        d = r(5600),
        c = (r(67676), r(80442), r(75215), r(71715)),
        y = r(52011),
        m = r(30556),
        g = r(65587),
        f = r(15235),
        v = r(86082);
      const b = l.Z.getLogger('esri.layers.mixins.PortalLayer'),
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
                return new f.default({ id: t.itemId, portal: r && r.portal });
            }
            writePortalItem(e, t) {
              e && e.id && (t.itemId = e.id);
            }
            async loadFromPortal(e, t) {
              if (this.portalItem && this.portalItem.id)
                try {
                  const s = await r.e(8062).then(r.bind(r, 18062));
                  return (
                    (0, p.k_)(t),
                    await s.load(
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
                ? null == i.id
                  ? void 0
                  : i.id.findCredential(this.url)
                : null;
              if (!t) return !0;
              const r =
                S.credential === t ? S.user : await this._fetchEditingUser(e);
              return (
                (S.credential = t),
                (S.user = r),
                (0, u.Wi)(r) ||
                  null == r.privileges ||
                  r.privileges.includes('features:user:edit')
              );
            }
            async _fetchEditingUser(e) {
              var t, r;
              const s =
                null == (t = this.portalItem) || null == (r = t.portal)
                  ? void 0
                  : r.user;
              if (s) return s;
              const a = i.id.findServerInfo(this.url);
              if (null == a || !a.owningSystemUrl) return null;
              const l = `${a.owningSystemUrl}/sharing/rest`,
                p = g.Z.getDefault();
              if (p && p.loaded && (0, h.Fv)(p.restUrl) === (0, h.Fv)(l))
                return p.user;
              const d = `${l}/community/self`,
                c = (0, u.pC)(e) ? e.signal : null,
                y = await (0, n.q6)(
                  (0, o.default)(d, {
                    authMode: 'no-prompt',
                    query: { f: 'json' },
                    signal: c,
                  }),
                );
              return y.ok ? v.default.fromJSON(y.value.data) : null;
            }
            read(e, t) {
              t && (t.layer = this), super.read(e, t);
            }
            write(e, t) {
              const r = t && t.portal,
                s =
                  this.portalItem &&
                  this.portalItem.id &&
                  (this.portalItem.portal || g.Z.getDefault());
              return r && s && !(0, h.tm)(s.restUrl, r.restUrl)
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
            (0, s._)(
              [(0, d.Cb)({ type: f.default })],
              t.prototype,
              'portalItem',
              null,
            ),
            (0, s._)(
              [(0, c.r)('web-document', 'portalItem', ['itemId'])],
              t.prototype,
              'readPortalItem',
              null,
            ),
            (0, s._)(
              [
                (0, m.c)('web-document', 'portalItem', {
                  itemId: { type: String },
                }),
              ],
              t.prototype,
              'writePortalItem',
              null,
            ),
            (0, s._)(
              [(0, d.Cb)({ clonable: !1 })],
              t.prototype,
              'resourceReferences',
              void 0,
            ),
            (0, s._)(
              [(0, d.Cb)({ readOnly: !0 })],
              t.prototype,
              'userHasEditingPrivileges',
              void 0,
            ),
            (t = (0, s._)([(0, y.j)('esri.layers.mixins.PortalLayer')], t)),
            t
          );
        },
        S = { credential: null, user: null };
    },
    34760: (e, t, r) => {
      r.d(t, { Q: () => f });
      var s = r(43697),
        i = r(92604),
        o = r(95330),
        n = r(5600),
        a = (r(67676), r(80442), r(75215), r(52011)),
        l = r(80539),
        u = (r(20102), r(26258), r(87538));
      const p = new l.Z(),
        h = new WeakMap();
      function d(e) {
        return (
          e && 'object' == typeof e && 'refreshInterval' in e && 'refresh' in e
        );
      }
      function c(e, t) {
        return Number.isFinite(e) && Number.isFinite(t)
          ? t <= 0
            ? e
            : c(t, e % t)
          : 0;
      }
      let y = 0,
        m = 0;
      function g() {
        const e = Date.now();
        for (const r of p)
          if (r.refreshInterval) {
            var t;
            e - (null != (t = h.get(r)) ? t : 0) + 5 >=
              6e4 * r.refreshInterval && (h.set(r, e), r.refresh(e));
          }
      }
      (0, u.EH)(() => {
        const e = Date.now();
        let t = 0;
        for (const r of p)
          (t = c(Math.round(6e4 * r.refreshInterval), t)),
            r.refreshInterval ? h.get(r) || h.set(r, e) : h.delete(r);
        if (t !== m) {
          if (((m = t), clearInterval(y), 0 === m)) return void (y = 0);
          y = setInterval(g, m);
        }
      });
      const f = (e) => {
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
                    d(e) && p.push(e);
                  })(this);
                },
                () => {},
              );
          }
          destroy() {
            d(this) && p.includes(this) && p.remove(this);
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
                i.Z.getLogger(this.declaredClass).error(e),
                  this.emit('refresh', { dataChanged: !1, error: e });
              },
            );
          }
          async hasDataChanged() {
            return !0;
          }
        };
        return (
          (0, s._)(
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
          (0, s._)(
            [(0, n.Cb)({ readOnly: !0 })],
            t.prototype,
            'refreshTimestamp',
            void 0,
          ),
          (0, s._)([(0, n.Cb)()], t.prototype, 'refreshParameters', null),
          (t = (0, s._)([(0, a.j)('esri.layers.mixins.RefreshableLayer')], t)),
          t
        );
      };
    },
    99282: (e, t, r) => {
      r.d(t, { a: () => o });
      var s = r(67900),
        i = r(68441);
      const o = {
        inches: (0, s.En)(1, 'meters', 'inches'),
        feet: (0, s.En)(1, 'meters', 'feet'),
        'us-feet': (0, s.En)(1, 'meters', 'us-feet'),
        yards: (0, s.En)(1, 'meters', 'yards'),
        miles: (0, s.En)(1, 'meters', 'miles'),
        'nautical-miles': (0, s.En)(1, 'meters', 'nautical-miles'),
        millimeters: (0, s.En)(1, 'meters', 'millimeters'),
        centimeters: (0, s.En)(1, 'meters', 'centimeters'),
        decimeters: (0, s.En)(1, 'meters', 'decimeters'),
        meters: (0, s.En)(1, 'meters', 'meters'),
        kilometers: (0, s.En)(1, 'meters', 'kilometers'),
        'decimal-degrees': 1 / (0, s.ty)(1, 'meters', i.sv.radius),
      };
    },
  },
]);
