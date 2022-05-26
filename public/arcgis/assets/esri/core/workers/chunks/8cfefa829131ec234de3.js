'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [4166],
  {
    10699: (t, e, r) => {
      r.d(e, { I: () => n });
      var i = r(43697),
        s = r(52011);
      let o = 0;
      const n = (t) => {
        let e = class extends t {
          constructor(...t) {
            super(...t),
              Object.defineProperty(this, 'uid', {
                writable: !1,
                configurable: !1,
                value: Date.now().toString(16) + '-object-' + o++,
              });
          }
        };
        return (e = (0, i._)([(0, s.j)('esri.core.Identifiable')], e)), e;
      };
      let a = class extends n(class {}) {};
      a = (0, i._)([(0, s.j)('esri.core.Identifiable')], a);
    },
    16453: (t, e, r) => {
      r.d(e, { R: () => b, w: () => _ });
      var i = r(43697),
        s = r(15923),
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
        clone(t) {
          const e = new u(),
            r = this._originStores[l.s3.DEFAULTS];
          r &&
            r.forEach((t, r) => {
              e.set(r, (0, a.d9)(t), l.s3.DEFAULTS);
            });
          for (let r = l.s3.SERVICE; r < l.kk; r++) {
            const i = this._originStores[r];
            i &&
              i.forEach((i, s) => {
                (t && t.has(s)) || e.set(s, (0, a.d9)(i), r);
              });
          }
          return e;
        }
        get(t, e) {
          const r = void 0 === e ? this._values : this._originStores[e];
          return r ? r.get(t) : void 0;
        }
        keys(t) {
          const e = null == t ? this._values : this._originStores[t];
          return e ? [...e.keys()] : [];
        }
        set(t, e, r = l.s3.USER) {
          let i = this._originStores[r];
          if (
            (i || ((i = new Map()), (this._originStores[r] = i)),
            i.set(t, e),
            !this._values.has(t) ||
              (0, o.j0)(this._propertyOriginMap.get(t)) <= r)
          ) {
            const i = this._values.get(t);
            return (
              this._values.set(t, e), this._propertyOriginMap.set(t, r), i !== e
            );
          }
          return !1;
        }
        delete(t, e = l.s3.USER) {
          const r = this._originStores[e];
          if (!r) return;
          const i = r.get(t);
          if (
            (r.delete(t),
            this._values.has(t) && this._propertyOriginMap.get(t) === e)
          ) {
            this._values.delete(t);
            for (let r = e - 1; r >= 0; r--) {
              const e = this._originStores[r];
              if (e && e.has(t)) {
                this._values.set(t, e.get(t)),
                  this._propertyOriginMap.set(t, r);
                break;
              }
            }
          }
          return i;
        }
        has(t, e) {
          const r = void 0 === e ? this._values : this._originStores[e];
          return !!r && r.has(t);
        }
        revert(t, e) {
          for (; e > 0 && !this.has(t, e); ) --e;
          const r = this._originStores[e],
            i = r && r.get(t),
            s = this._values.get(t);
          return (
            this._values.set(t, i), this._propertyOriginMap.set(t, e), s !== i
          );
        }
        originOf(t) {
          return this._propertyOriginMap.get(t) || l.s3.DEFAULTS;
        }
        forEach(t) {
          this._values.forEach(t);
        }
      }
      var p = r(50549),
        d = r(1153),
        h = r(52011);
      const c = (t) => {
        let e = class extends t {
          constructor(...t) {
            super(...t);
            const e = (0, o.j0)((0, d.vw)(this)),
              r = e.store,
              i = new u();
            (e.store = i), (0, n.M)(e, r, i);
          }
          read(t, e) {
            (0, p.i)(this, t, e);
          }
          getAtOrigin(t, e) {
            const r = y(this),
              i = (0, l.M9)(e);
            if ('string' == typeof t) return r.get(t, i);
            const s = {};
            return (
              t.forEach((t) => {
                s[t] = r.get(t, i);
              }),
              s
            );
          }
          originOf(t) {
            return (0, l.x3)(this.originIdOf(t));
          }
          originIdOf(t) {
            return y(this).originOf(t);
          }
          revert(t, e) {
            const r = y(this),
              i = (0, l.M9)(e),
              s = (0, d.vw)(this);
            let o;
            (o = 'string' == typeof t ? ('*' === t ? r.keys(i) : [t]) : t),
              o.forEach((t) => {
                s.invalidate(t), r.revert(t, i), s.commit(t);
              });
          }
        };
        return (
          (e = (0, i._)(
            [(0, h.j)('esri.core.ReadOnlyMultiOriginJSONSupport')],
            e,
          )),
          e
        );
      };
      function y(t) {
        return (0, d.vw)(t).store;
      }
      let g = class extends c(s.Z) {};
      g = (0, i._)([(0, h.j)('esri.core.ReadOnlyMultiOriginJSONSupport')], g);
      var f = r(76169);
      const v = (t) => {
        let e = class extends t {
          constructor(...t) {
            super(...t);
          }
          clear(t, e = 'user') {
            return m(this).delete(t, (0, l.M9)(e));
          }
          write(t = {}, e) {
            return (0, f.c)(this, (t = t || {}), e), t;
          }
          setAtOrigin(t, e, r) {
            (0, d.vw)(this).setAtOrigin(t, e, (0, l.M9)(r));
          }
          removeOrigin(t) {
            const e = m(this),
              r = (0, l.M9)(t),
              i = e.keys(r);
            for (const t of i)
              e.originOf(t) === r && e.set(t, e.get(t, r), l.s3.USER);
          }
          updateOrigin(t, e) {
            const r = m(this),
              i = (0, l.M9)(e),
              s = this.get(t);
            for (let e = i + 1; e < l.kk; ++e) r.delete(t, e);
            r.set(t, s, i);
          }
          toJSON(t) {
            return this.write({}, t);
          }
        };
        return (
          (e = (0, i._)(
            [(0, h.j)('esri.core.WriteableMultiOriginJSONSupport')],
            e,
          )),
          (e.prototype.toJSON.isDefaultToJSON = !0),
          e
        );
      };
      function m(t) {
        return (0, d.vw)(t).store;
      }
      const b = (t) => {
        let e = class extends v(c(t)) {
          constructor(...t) {
            super(...t);
          }
        };
        return (
          (e = (0, i._)([(0, h.j)('esri.core.MultiOriginJSONSupport')], e)), e
        );
      };
      let _ = class extends b(s.Z) {};
      _ = (0, i._)([(0, h.j)('esri.core.MultiOriginJSONSupport')], _);
    },
    29600: (t, e, r) => {
      r.d(e, { Z: () => _ });
      var i = r(43697),
        s = r(68773),
        o = (r(66577), r(3172)),
        n = r(20102),
        a = r(32448),
        l = r(10699),
        u = r(83379),
        p = r(92604),
        d = r(95330),
        h = r(17452),
        c = r(5600),
        y = (r(67676), r(80442), r(75215), r(52011)),
        g = r(6570),
        f = r(82971);
      let v = 0;
      const m = p.Z.getLogger('esri.layers.Layer');
      let b = class extends a.Z.EventedMixin((0, l.I)(u.Z)) {
        constructor() {
          super(...arguments),
            (this.attributionDataUrl = null),
            (this.fullExtent = new g.Z(-180, -90, 180, 90, f.Z.WGS84)),
            (this.id = Date.now().toString(16) + '-layer-' + v++),
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
        static async fromArcGISServerUrl(t) {
          const e = 'string' == typeof t ? { url: t } : t,
            i = await r.e(3529).then(r.bind(r, 63529));
          try {
            return await i.fromUrl(e);
          } catch (t) {
            throw (
              (m.error(
                "#fromArcGISServerUrl({ url: '" + e.url + "'})",
                'Failed to create layer from arcgis server url',
                t,
              ),
              t)
            );
          }
        }
        static async fromPortalItem(t) {
          const e = 'portalItem' in t ? t : { portalItem: t },
            i = await r.e(4579).then(r.bind(r, 44579));
          try {
            return await i.fromItem(e);
          } catch (t) {
            const r = e && e.portalItem,
              i = (r && r.id) || 'unset',
              o = (r && r.portal && r.portal.url) || s.Z.portalUrl;
            throw (
              (m.error(
                '#fromPortalItem()',
                "Failed to create layer from portal item (portal: '" +
                  o +
                  "', id: '" +
                  i +
                  "')",
                t,
              ),
              t)
            );
          }
        }
        initialize() {
          this.when().catch((t) => {
            var e, r;
            (0, d.D_)(t) ||
              p.Z.getLogger(this.declaredClass).error(
                '#load()',
                `Failed to load layer (title: '${
                  null != (e = this.title) ? e : 'no title'
                }', id: '${null != (r = this.id) ? r : 'no id'}')`,
                { error: t },
              );
          });
        }
        destroy() {
          if (this.parent) {
            const t = this,
              e = this.parent;
            'layers' in e && e.layers.includes(t)
              ? e.layers.remove(t)
              : 'tables' in e && e.tables.includes(t)
              ? e.tables.remove(t)
              : 'baseLayers' in e && e.baseLayers.includes(t)
              ? e.baseLayers.remove(t)
              : 'baseLayers' in e &&
                e.referenceLayers.includes(t) &&
                e.referenceLayers.remove(t);
          }
        }
        get hasAttributionData() {
          return null != this.attributionDataUrl;
        }
        get parsedUrl() {
          const t = this.url;
          return t ? (0, h.mN)(t) : null;
        }
        async fetchAttributionData() {
          const t = this.attributionDataUrl;
          if (this.hasAttributionData && t)
            return (
              await (0, o.default)(t, {
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
      (0, i._)(
        [(0, c.Cb)({ type: String })],
        b.prototype,
        'attributionDataUrl',
        void 0,
      ),
        (0, i._)([(0, c.Cb)({ type: g.Z })], b.prototype, 'fullExtent', void 0),
        (0, i._)(
          [(0, c.Cb)({ readOnly: !0 })],
          b.prototype,
          'hasAttributionData',
          null,
        ),
        (0, i._)(
          [(0, c.Cb)({ type: String, clonable: !1 })],
          b.prototype,
          'id',
          void 0,
        ),
        (0, i._)(
          [(0, c.Cb)({ type: Boolean, nonNullable: !0 })],
          b.prototype,
          'legendEnabled',
          void 0,
        ),
        (0, i._)(
          [(0, c.Cb)({ type: ['show', 'hide', 'hide-children'] })],
          b.prototype,
          'listMode',
          void 0,
        ),
        (0, i._)(
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
        (0, i._)([(0, c.Cb)({ clonable: !1 })], b.prototype, 'parent', void 0),
        (0, i._)([(0, c.Cb)({ readOnly: !0 })], b.prototype, 'parsedUrl', null),
        (0, i._)(
          [(0, c.Cb)({ type: Boolean })],
          b.prototype,
          'popupEnabled',
          void 0,
        ),
        (0, i._)(
          [(0, c.Cb)({ type: Boolean })],
          b.prototype,
          'attributionVisible',
          void 0,
        ),
        (0, i._)(
          [(0, c.Cb)({ type: f.Z })],
          b.prototype,
          'spatialReference',
          void 0,
        ),
        (0, i._)([(0, c.Cb)({ type: String })], b.prototype, 'title', void 0),
        (0, i._)(
          [(0, c.Cb)({ type: String, readOnly: !0, json: { read: !1 } })],
          b.prototype,
          'type',
          void 0,
        ),
        (0, i._)([(0, c.Cb)()], b.prototype, 'url', void 0),
        (0, i._)(
          [(0, c.Cb)({ type: Boolean, nonNullable: !0 })],
          b.prototype,
          'visible',
          void 0,
        ),
        (b = (0, i._)([(0, y.j)('esri.layers.Layer')], b));
      const _ = b;
    },
    44166: (t, e, r) => {
      r.r(e), r.d(e, { default: () => h });
      var i = r(43697),
        s = r(20102),
        o = r(16453),
        n = r(1654),
        a = r(5600),
        l = (r(67676), r(80442), r(75215), r(52011)),
        u = r(29600),
        p = r(16859);
      let d = class extends (0, p.I)((0, o.R)(u.Z)) {
        constructor(t) {
          super(t), (this.resourceInfo = null), (this.type = 'unknown');
        }
        initialize() {
          this.addResolvingPromise(
            new Promise((t, e) => {
              (0, n.Os)(() => {
                const t =
                  this.resourceInfo &&
                  (this.resourceInfo.layerType || this.resourceInfo.type);
                let r = 'Unknown layer type';
                t && (r += ' ' + t),
                  e(new s.Z('layer:unknown-layer-type', r, { layerType: t }));
              });
            }),
          );
        }
        read(t, e) {
          super.read({ resourceInfo: t }, e);
        }
        write() {
          return null;
        }
      };
      (0, i._)(
        [(0, a.Cb)({ readOnly: !0 })],
        d.prototype,
        'resourceInfo',
        void 0,
      ),
        (0, i._)(
          [(0, a.Cb)({ type: ['show', 'hide'] })],
          d.prototype,
          'listMode',
          void 0,
        ),
        (0, i._)(
          [(0, a.Cb)({ json: { read: !1 }, readOnly: !0, value: 'unknown' })],
          d.prototype,
          'type',
          void 0,
        ),
        (d = (0, i._)([(0, l.j)('esri.layers.UnknownLayer')], d));
      const h = d;
    },
    16859: (t, e, r) => {
      r.d(e, { I: () => _ });
      var i = r(43697),
        s = r(40330),
        o = r(3172),
        n = r(66643),
        a = r(20102),
        l = r(92604),
        u = r(70586),
        p = r(95330),
        d = r(17452),
        h = r(5600),
        c = (r(67676), r(80442), r(75215), r(71715)),
        y = r(52011),
        g = r(30556),
        f = r(65587),
        v = r(15235),
        m = r(86082);
      const b = l.Z.getLogger('esri.layers.mixins.PortalLayer'),
        _ = (t) => {
          let e = class extends t {
            constructor() {
              super(...arguments),
                (this.resourceReferences = { portalItem: null, paths: [] }),
                (this.userHasEditingPrivileges = !0);
            }
            destroy() {
              var t;
              null == (t = this.portalItem) || t.destroy(),
                (this.portalItem = null);
            }
            set portalItem(t) {
              t !== this._get('portalItem') &&
                (this.removeOrigin('portal-item'), this._set('portalItem', t));
            }
            readPortalItem(t, e, r) {
              if (e.itemId)
                return new v.default({ id: e.itemId, portal: r && r.portal });
            }
            writePortalItem(t, e) {
              t && t.id && (e.itemId = t.id);
            }
            async loadFromPortal(t, e) {
              if (this.portalItem && this.portalItem.id)
                try {
                  const i = await r.e(8062).then(r.bind(r, 18062));
                  return (
                    (0, p.k_)(e),
                    await i.load(
                      {
                        instance: this,
                        supportedTypes: t.supportedTypes,
                        validateItem: t.validateItem,
                        supportsData: t.supportsData,
                      },
                      e,
                    )
                  );
                } catch (t) {
                  throw (
                    ((0, p.D_)(t) ||
                      b.warn(
                        `Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${t}`,
                      ),
                    t)
                  );
                }
            }
            async finishLoadEditablePortalLayer(t) {
              this._set(
                'userHasEditingPrivileges',
                await this._fetchUserHasEditingPrivileges(t).catch(
                  (t) => ((0, p.r9)(t), !0),
                ),
              );
            }
            async _fetchUserHasEditingPrivileges(t) {
              const e = this.url
                ? null == s.id
                  ? void 0
                  : s.id.findCredential(this.url)
                : null;
              if (!e) return !0;
              const r =
                w.credential === e ? w.user : await this._fetchEditingUser(t);
              return (
                (w.credential = e),
                (w.user = r),
                (0, u.Wi)(r) ||
                  null == r.privileges ||
                  r.privileges.includes('features:user:edit')
              );
            }
            async _fetchEditingUser(t) {
              var e, r;
              const i =
                null == (e = this.portalItem) || null == (r = e.portal)
                  ? void 0
                  : r.user;
              if (i) return i;
              const a = s.id.findServerInfo(this.url);
              if (null == a || !a.owningSystemUrl) return null;
              const l = `${a.owningSystemUrl}/sharing/rest`,
                p = f.Z.getDefault();
              if (p && p.loaded && (0, d.Fv)(p.restUrl) === (0, d.Fv)(l))
                return p.user;
              const h = `${l}/community/self`,
                c = (0, u.pC)(t) ? t.signal : null,
                y = await (0, n.q6)(
                  (0, o.default)(h, {
                    authMode: 'no-prompt',
                    query: { f: 'json' },
                    signal: c,
                  }),
                );
              return y.ok ? m.default.fromJSON(y.value.data) : null;
            }
            read(t, e) {
              e && (e.layer = this), super.read(t, e);
            }
            write(t, e) {
              const r = e && e.portal,
                i =
                  this.portalItem &&
                  this.portalItem.id &&
                  (this.portalItem.portal || f.Z.getDefault());
              return r && i && !(0, d.tm)(i.restUrl, r.restUrl)
                ? (e.messages &&
                    e.messages.push(
                      new a.Z(
                        'layer:cross-portal',
                        `The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save the scene, set the layer.portalItem to null or save the scene to the same portal as the item associated with the layer`,
                        { layer: this },
                      ),
                    ),
                  null)
                : super.write(t, { ...e, layer: this });
            }
          };
          return (
            (0, i._)(
              [(0, h.Cb)({ type: v.default })],
              e.prototype,
              'portalItem',
              null,
            ),
            (0, i._)(
              [(0, c.r)('web-document', 'portalItem', ['itemId'])],
              e.prototype,
              'readPortalItem',
              null,
            ),
            (0, i._)(
              [
                (0, g.c)('web-document', 'portalItem', {
                  itemId: { type: String },
                }),
              ],
              e.prototype,
              'writePortalItem',
              null,
            ),
            (0, i._)(
              [(0, h.Cb)({ clonable: !1 })],
              e.prototype,
              'resourceReferences',
              void 0,
            ),
            (0, i._)(
              [(0, h.Cb)({ readOnly: !0 })],
              e.prototype,
              'userHasEditingPrivileges',
              void 0,
            ),
            (e = (0, i._)([(0, y.j)('esri.layers.mixins.PortalLayer')], e)),
            e
          );
        },
        w = { credential: null, user: null };
    },
  },
]);
