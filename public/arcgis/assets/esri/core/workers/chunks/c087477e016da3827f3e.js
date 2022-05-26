'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [6088],
  {
    70921: (e, t, i) => {
      i.d(t, { R: () => a, Z: () => s });
      var r = i(80539);
      function s(e, t, i = r.Z) {
        return (
          t || (t = new i()),
          t === e ||
            (t.removeAll(),
            (s = e) &&
            (Array.isArray(s) || ('items' in s && Array.isArray(s.items)))
              ? t.addMany(e)
              : e && t.add(e)),
          t
        );
        var s;
      }
      function a(e) {
        return e;
      }
    },
    68668: (e, t, i) => {
      i.d(t, { G: () => n, w: () => o });
      var r = i(66643),
        s = i(80539),
        a = i(83379),
        l = i(70586);
      async function n(e, t) {
        return await e.load(), o(e, t);
      }
      async function o(e, t) {
        const i = [],
          n = (...e) => {
            for (const t of e)
              (0, l.Wi)(t) ||
                (Array.isArray(t)
                  ? n(...t)
                  : s.Z.isCollection(t)
                  ? t.forEach((e) => n(e))
                  : a.Z.isLoadable(t) && i.push(t));
          };
        t(n);
        let o = null;
        if (
          (await (0, r.UI)(i, async (e) => {
            !1 !==
              (
                await (0, r.q6)(
                  (function (e) {
                    return 'loadAll' in e && 'function' == typeof e.loadAll;
                  })(e)
                    ? e.loadAll()
                    : e.load(),
                )
              ).ok ||
              o ||
              (o = e);
          }),
          o)
        )
          throw o.loadError;
        return e;
      }
    },
    63144: (e, t, i) => {
      i.r(t), i.d(t, { default: () => P });
      var r = i(43697),
        s = i(68668),
        a = i(70586),
        l = i(16453),
        n = i(5600),
        o = (i(67676), i(80442), i(1153)),
        d = (i(75215), i(52011)),
        u = i(30556),
        y = i(29600),
        h = i(71612),
        p = i(38009),
        c = i(16859),
        m = i(72965),
        f = i(80539),
        v = i(70921),
        b = i(92604),
        g = i(95330);
      function w(e) {
        return e && 'group' === e.type;
      }
      function _(e, t, i) {
        let r, s;
        if (e)
          for (let a = 0, l = e.length; a < l; a++) {
            if (((r = e.getItemAt(a)), r[t] === i)) return r;
            if (w(r) && ((s = _(r.layers, t, i)), s)) return s;
          }
      }
      const I = b.Z.getLogger('esri.support.LayersMixin'),
        L = (e) => {
          let t = class extends e {
            constructor(...e) {
              super(...e), (this.layers = new f.Z());
              const t = (e) => {
                  (e.parent = this),
                    this.layerAdded(e),
                    ('elevation' !== e.type && 'base-elevation' !== e.type) ||
                      I.error(
                        `Layer 'title:${e.title}, id:${e.id}' of type '${e.type}' is not supported as an operational layer and will therefore be ignored.`,
                      );
                },
                i = (e) => {
                  (e.parent = null), this.layerRemoved(e);
                };
              this.layers.on('before-add', (e) =>
                ((e) => {
                  e.parent && 'remove' in e.parent && e.parent.remove(e);
                })(e.item),
              ),
                this.layers.on('after-add', (e) => t(e.item)),
                this.layers.on('after-remove', (e) => i(e.item));
            }
            destroy() {
              const e = this.layers.removeAll();
              for (const t of e) this.layerRemoved(t), t.destroy();
              this.layers.destroy();
            }
            set layers(e) {
              this._set('layers', (0, v.Z)(e, this._get('layers')));
            }
            add(e, t) {
              const i = this.layers;
              if (((t = i.getNextIndex(t)), e instanceof y.Z)) {
                const r = e;
                r.parent === this ? this.reorder(r, t) : i.add(r, t);
              } else
                (0, g.y8)(e)
                  ? e.then((e) => {
                      this.destroyed || this.add(e, t);
                    })
                  : I.error(
                      '#add()',
                      'The item being added is not a Layer or a Promise that resolves to a Layer.',
                    );
            }
            addMany(e, t) {
              const i = this.layers;
              (t = i.getNextIndex(t)),
                e.slice().forEach((e) => {
                  e.parent !== this
                    ? (i.add(e, t), (t += 1))
                    : this.reorder(e, t);
                });
            }
            findLayerById(e) {
              return _(this.layers, 'id', e);
            }
            findLayerByUid(e) {
              return _(this.layers, 'uid', e);
            }
            remove(e) {
              return this.layers.remove(e);
            }
            removeMany(e) {
              return this.layers.removeMany(e);
            }
            removeAll() {
              return this.layers.removeAll();
            }
            reorder(e, t) {
              return this.layers.reorder(e, t);
            }
            layerAdded(e) {}
            layerRemoved(e) {}
          };
          return (
            (0, r._)([(0, n.Cb)()], t.prototype, 'layers', null),
            (t = (0, r._)([(0, d.j)('esri.support.LayersMixin')], t)),
            t
          );
        },
        E = 'esri.support.TablesMixin',
        M = b.Z.getLogger(E);
      function C(e) {
        return e && 'group' === e.type;
      }
      function x(e, t, i) {
        if (e)
          for (let r = 0, s = e.length; r < s; r++) {
            const s = e.getItemAt(r);
            if (s[t] === i) return s;
            if (C(s)) {
              const e = x(s.tables, t, i);
              if (e) return e;
            }
          }
      }
      const A = (e) => {
        let t = class extends e {
          constructor(...e) {
            super(...e),
              (this.tables = new f.Z()),
              this.tables.on('after-add', (e) => {
                const t = e.item;
                t.parent &&
                  t.parent !== this &&
                  'tables' in t.parent &&
                  t.parent.tables.remove(t),
                  (t.parent = this),
                  'feature' !== t.type &&
                    M.error(
                      `Layer 'title:${t.title}, id:${t.id}' of type '${t.type}' is not supported as a table and will therefore be ignored.`,
                    );
              }),
              this.tables.on('after-remove', (e) => {
                e.item.parent = null;
              });
          }
          destroy() {
            const e = this.tables.removeAll();
            for (const t of e) t.destroy();
            this.tables.destroy();
          }
          set tables(e) {
            this._set('tables', (0, v.Z)(e, this._get('tables')));
          }
          findTableById(e) {
            return x(this.tables, 'id', e);
          }
          findTableByUid(e) {
            return x(this.tables, 'uid', e);
          }
        };
        return (
          (0, r._)([(0, n.Cb)()], t.prototype, 'tables', null),
          (t = (0, r._)([(0, d.j)(E)], t)),
          t
        );
      };
      var S = i(15650);
      let k = class extends (0, h.h)(
        (0, m.M)((0, p.q)((0, c.I)(A(L((0, l.R)(y.Z)))))),
      ) {
        constructor(e) {
          super(e),
            (this._visibilityHandles = {}),
            (this.fullExtent = void 0),
            (this.operationalLayerType = 'GroupLayer'),
            (this.spatialReference = void 0),
            (this.type = 'group'),
            (this._visibilityWatcher = this._visibilityWatcher.bind(this));
        }
        initialize() {
          this._enforceVisibility(this.visibilityMode, this.visible),
            this.watch('visible', this._visibleWatcher.bind(this), !0);
        }
        _writeLayers(e, t, i, r) {
          const s = [];
          if (!e) return s;
          e.forEach((e) => {
            const t = (0, S.Nw)(
              e,
              r.webmap ? r.webmap.getLayerJSONFromResourceInfo(e) : null,
              r,
            );
            (0, a.pC)(t) && t.layerType && s.push(t);
          }),
            (t.layers = s);
        }
        set portalItem(e) {
          this._set('portalItem', e);
        }
        set visibilityMode(e) {
          const t = this._get('visibilityMode') !== e;
          this._set('visibilityMode', e),
            t && this._enforceVisibility(e, this.visible);
        }
        load(e) {
          return (
            this.addResolvingPromise(
              this.loadFromPortal(
                {
                  supportedTypes: [
                    'Feature Service',
                    'Feature Collection',
                    'Scene Service',
                  ],
                },
                e,
              ),
            ),
            Promise.resolve(this)
          );
        }
        loadAll() {
          return (0, s.G)(this, (e) => {
            e(this.layers, this.tables);
          });
        }
        layerAdded(e) {
          e.visible && 'exclusive' === this.visibilityMode
            ? this._turnOffOtherLayers(e)
            : 'inherited' === this.visibilityMode && (e.visible = this.visible),
            (this._visibilityHandles[e.uid] = e.watch(
              'visible',
              this._visibilityWatcher,
              !0,
            ));
        }
        layerRemoved(e) {
          const t = this._visibilityHandles[e.uid];
          t && (t.remove(), delete this._visibilityHandles[e.uid]),
            this._enforceVisibility(this.visibilityMode, this.visible);
        }
        _turnOffOtherLayers(e) {
          this.layers.forEach((t) => {
            t !== e && (t.visible = !1);
          });
        }
        _enforceVisibility(e, t) {
          if (!(0, o.vw)(this).initialized) return;
          const i = this.layers;
          let r = i.find((e) => e.visible);
          switch (e) {
            case 'exclusive':
              i.length && !r && ((r = i.getItemAt(0)), (r.visible = !0)),
                this._turnOffOtherLayers(r);
              break;
            case 'inherited':
              i.forEach((e) => {
                e.visible = t;
              });
          }
        }
        _visibleWatcher(e) {
          'inherited' === this.visibilityMode &&
            this.layers.forEach((t) => {
              t.visible = e;
            });
        }
        _visibilityWatcher(e, t, i, r) {
          const s = r;
          switch (this.visibilityMode) {
            case 'exclusive':
              e
                ? this._turnOffOtherLayers(s)
                : this._isAnyLayerVisible() || (s.visible = !0);
              break;
            case 'inherited':
              s.visible = this.visible;
          }
        }
        _isAnyLayerVisible() {
          return this.layers.some((e) => e.visible);
        }
      };
      (0, r._)([(0, n.Cb)()], k.prototype, 'fullExtent', void 0),
        (0, r._)(
          [(0, n.Cb)({ json: { read: !1, write: { ignoreOrigin: !0 } } })],
          k.prototype,
          'layers',
          void 0,
        ),
        (0, r._)([(0, u.c)('layers')], k.prototype, '_writeLayers', null),
        (0, r._)(
          [(0, n.Cb)({ type: ['GroupLayer'] })],
          k.prototype,
          'operationalLayerType',
          void 0,
        ),
        (0, r._)(
          [
            (0, n.Cb)({
              json: { origins: { 'web-document': { read: !1, write: !1 } } },
            }),
          ],
          k.prototype,
          'portalItem',
          null,
        ),
        (0, r._)([(0, n.Cb)()], k.prototype, 'spatialReference', void 0),
        (0, r._)(
          [(0, n.Cb)({ json: { read: !1 }, readOnly: !0, value: 'group' })],
          k.prototype,
          'type',
          void 0,
        ),
        (0, r._)(
          [
            (0, n.Cb)({
              type: ['independent', 'inherited', 'exclusive'],
              value: 'independent',
              json: {
                write: !0,
                origins: { 'web-map': { read: !1, write: !1 } },
              },
            }),
          ],
          k.prototype,
          'visibilityMode',
          null,
        ),
        (k = (0, r._)([(0, d.j)('esri.layers.GroupLayer')], k));
      const P = k;
    },
    16859: (e, t, i) => {
      i.d(t, { I: () => w });
      var r = i(43697),
        s = i(40330),
        a = i(3172),
        l = i(66643),
        n = i(20102),
        o = i(92604),
        d = i(70586),
        u = i(95330),
        y = i(17452),
        h = i(5600),
        p = (i(67676), i(80442), i(75215), i(71715)),
        c = i(52011),
        m = i(30556),
        f = i(65587),
        v = i(15235),
        b = i(86082);
      const g = o.Z.getLogger('esri.layers.mixins.PortalLayer'),
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
            readPortalItem(e, t, i) {
              if (t.itemId)
                return new v.default({ id: t.itemId, portal: i && i.portal });
            }
            writePortalItem(e, t) {
              e && e.id && (t.itemId = e.id);
            }
            async loadFromPortal(e, t) {
              if (this.portalItem && this.portalItem.id)
                try {
                  const r = await i.e(8062).then(i.bind(i, 18062));
                  return (
                    (0, u.k_)(t),
                    await r.load(
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
                    ((0, u.D_)(e) ||
                      g.warn(
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
                  (e) => ((0, u.r9)(e), !0),
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
              const i =
                _.credential === t ? _.user : await this._fetchEditingUser(e);
              return (
                (_.credential = t),
                (_.user = i),
                (0, d.Wi)(i) ||
                  null == i.privileges ||
                  i.privileges.includes('features:user:edit')
              );
            }
            async _fetchEditingUser(e) {
              var t, i;
              const r =
                null == (t = this.portalItem) || null == (i = t.portal)
                  ? void 0
                  : i.user;
              if (r) return r;
              const n = s.id.findServerInfo(this.url);
              if (null == n || !n.owningSystemUrl) return null;
              const o = `${n.owningSystemUrl}/sharing/rest`,
                u = f.Z.getDefault();
              if (u && u.loaded && (0, y.Fv)(u.restUrl) === (0, y.Fv)(o))
                return u.user;
              const h = `${o}/community/self`,
                p = (0, d.pC)(e) ? e.signal : null,
                c = await (0, l.q6)(
                  (0, a.default)(h, {
                    authMode: 'no-prompt',
                    query: { f: 'json' },
                    signal: p,
                  }),
                );
              return c.ok ? b.default.fromJSON(c.value.data) : null;
            }
            read(e, t) {
              t && (t.layer = this), super.read(e, t);
            }
            write(e, t) {
              const i = t && t.portal,
                r =
                  this.portalItem &&
                  this.portalItem.id &&
                  (this.portalItem.portal || f.Z.getDefault());
              return i && r && !(0, y.tm)(r.restUrl, i.restUrl)
                ? (t.messages &&
                    t.messages.push(
                      new n.Z(
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
            (0, r._)(
              [(0, h.Cb)({ type: v.default })],
              t.prototype,
              'portalItem',
              null,
            ),
            (0, r._)(
              [(0, p.r)('web-document', 'portalItem', ['itemId'])],
              t.prototype,
              'readPortalItem',
              null,
            ),
            (0, r._)(
              [
                (0, m.c)('web-document', 'portalItem', {
                  itemId: { type: String },
                }),
              ],
              t.prototype,
              'writePortalItem',
              null,
            ),
            (0, r._)(
              [(0, h.Cb)({ clonable: !1 })],
              t.prototype,
              'resourceReferences',
              void 0,
            ),
            (0, r._)(
              [(0, h.Cb)({ readOnly: !0 })],
              t.prototype,
              'userHasEditingPrivileges',
              void 0,
            ),
            (t = (0, r._)([(0, c.j)('esri.layers.mixins.PortalLayer')], t)),
            t
          );
        },
        _ = { credential: null, user: null };
    },
    99282: (e, t, i) => {
      i.d(t, { a: () => a });
      var r = i(67900),
        s = i(68441);
      const a = {
        inches: (0, r.En)(1, 'meters', 'inches'),
        feet: (0, r.En)(1, 'meters', 'feet'),
        'us-feet': (0, r.En)(1, 'meters', 'us-feet'),
        yards: (0, r.En)(1, 'meters', 'yards'),
        miles: (0, r.En)(1, 'meters', 'miles'),
        'nautical-miles': (0, r.En)(1, 'meters', 'nautical-miles'),
        millimeters: (0, r.En)(1, 'meters', 'millimeters'),
        centimeters: (0, r.En)(1, 'meters', 'centimeters'),
        decimeters: (0, r.En)(1, 'meters', 'decimeters'),
        meters: (0, r.En)(1, 'meters', 'meters'),
        kilometers: (0, r.En)(1, 'meters', 'kilometers'),
        'decimal-degrees': 1 / (0, r.ty)(1, 'meters', s.sv.radius),
      };
    },
    65242: (e, t, i) => {
      i.d(t, { a: () => s, b: () => a });
      var r = i(75215);
      function s(e) {
        const t = (0, r.vU)(100 * (1 - e));
        return Math.max(0, Math.min(t, 100));
      }
      function a(e) {
        const t = 1 - e / 100;
        return Math.max(0, Math.min(t, 1));
      }
    },
    15650: (e, t, i) => {
      i.d(t, { Nw: () => p });
      var r = i(20102),
        s = i(22974),
        a = i(70586),
        l = i(78286),
        n = i(827);
      const o = new Set([
          'bing-maps',
          'imagery',
          'imagery-tile',
          'map-image',
          'open-street-map',
          'tile',
          'unknown',
          'unsupported',
          'vector-tile',
          'web-tile',
          'wms',
          'wmts',
        ]),
        d = new Set([
          'csv',
          'feature',
          'geo-rss',
          'geojson',
          'group',
          'imagery',
          'imagery-tile',
          'kml',
          'map-image',
          'map-notes',
          'ogc-feature',
          'route',
          'tile',
          'unknown',
          'unsupported',
          'vector-tile',
          'web-tile',
          'wfs',
          'wms',
          'wmts',
        ]);
      function u(e) {
        return !(
          'feature' !== e.type ||
          e.url ||
          !e.source ||
          'memory' !== e.source.type
        );
      }
      function y(e, t) {
        if (t.restrictedWebMapWriting) {
          const i = (function (e) {
            return 'basemap' === e.layerContainerType
              ? o
              : 'operational-layers' === e.layerContainerType
              ? d
              : null;
          })(t);
          return !(0, a.pC)(i) || (i.has(e.type) && !u(e));
        }
        return !0;
      }
      function h(e, t) {
        'maxScale' in e && (t.maxScale = (0, n.k)(e.maxScale)),
          'minScale' in e && (t.minScale = (0, n.k)(e.minScale));
      }
      function p(e, t, i) {
        if (!('write' in e) || !e.write)
          return (
            i &&
              i.messages &&
              i.messages.push(
                new r.Z(
                  'layer:unsupported',
                  `Layers (${e.title}, ${e.id}) of type '${e.declaredClass}' cannot be persisted`,
                  { layer: e },
                ),
              ),
            null
          );
        if (y(e, i)) {
          const t = {};
          return e.write(t, i) ? t : null;
        }
        return (
          (0, a.pC)(t) &&
            (function (e, t) {
              if (
                ((function (e, t) {
                  if (u(e)) {
                    const i = (0, l.hS)('featureCollection.layers', t),
                      r = i && i[0] && i[0].layerDefinition;
                    r && h(e, r);
                  } else
                    'stream' === e.type
                      ? h(e, (t.layerDefinition = t.layerDefinition || {}))
                      : 'group' !== e.type && h(e, t);
                })(e, t),
                'blendMode' in e &&
                  ((t.blendMode = e.blendMode),
                  'normal' === t.blendMode && delete t.blendMode),
                (t.opacity = (0, n.k)(e.opacity)),
                (t.title = e.title || 'Layer'),
                (t.visibility = e.visible),
                'legendEnabled' in e && 'wmts' !== e.type)
              )
                if (u(e)) {
                  const i = t.featureCollection;
                  i && (i.showLegend = e.legendEnabled);
                } else t.showLegend = e.legendEnabled;
            })(e, (t = (0, s.d9)(t))),
          t
        );
      }
    },
  },
]);
