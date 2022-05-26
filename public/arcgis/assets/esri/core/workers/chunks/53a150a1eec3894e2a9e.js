'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [214, 6088],
  {
    10699: (e, t, r) => {
      r.d(t, { I: () => o });
      var i = r(43697),
        s = r(52011);
      let n = 0;
      const o = (e) => {
        let t = class extends e {
          constructor(...e) {
            super(...e),
              Object.defineProperty(this, 'uid', {
                writable: !1,
                configurable: !1,
                value: Date.now().toString(16) + '-object-' + n++,
              });
          }
        };
        return (t = (0, i._)([(0, s.j)('esri.core.Identifiable')], t)), t;
      };
      let a = class extends o(class {}) {};
      a = (0, i._)([(0, s.j)('esri.core.Identifiable')], a);
    },
    16453: (e, t, r) => {
      r.d(t, { R: () => g, w: () => _ });
      var i = r(43697),
        s = r(15923),
        n = r(70586),
        o = r(41103),
        a = r(22974),
        l = r(31263);
      class d {
        constructor() {
          (this._propertyOriginMap = new Map()),
            (this._originStores = new Array(l.kk)),
            (this._values = new Map()),
            (this.multipleOriginsSupported = !0);
        }
        clone(e) {
          const t = new d(),
            r = this._originStores[l.s3.DEFAULTS];
          r &&
            r.forEach((e, r) => {
              t.set(r, (0, a.d9)(e), l.s3.DEFAULTS);
            });
          for (let r = l.s3.SERVICE; r < l.kk; r++) {
            const i = this._originStores[r];
            i &&
              i.forEach((i, s) => {
                (e && e.has(s)) || t.set(s, (0, a.d9)(i), r);
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
      var u = r(50549),
        p = r(1153),
        h = r(52011);
      const y = (e) => {
        let t = class extends e {
          constructor(...e) {
            super(...e);
            const t = (0, n.j0)((0, p.vw)(this)),
              r = t.store,
              i = new d();
            (t.store = i), (0, o.M)(t, r, i);
          }
          read(e, t) {
            (0, u.i)(this, e, t);
          }
          getAtOrigin(e, t) {
            const r = c(this),
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
            return c(this).originOf(e);
          }
          revert(e, t) {
            const r = c(this),
              i = (0, l.M9)(t),
              s = (0, p.vw)(this);
            let n;
            (n = 'string' == typeof e ? ('*' === e ? r.keys(i) : [e]) : e),
              n.forEach((e) => {
                s.invalidate(e), r.revert(e, i), s.commit(e);
              });
          }
        };
        return (
          (t = (0, i._)(
            [(0, h.j)('esri.core.ReadOnlyMultiOriginJSONSupport')],
            t,
          )),
          t
        );
      };
      function c(e) {
        return (0, p.vw)(e).store;
      }
      let m = class extends y(s.Z) {};
      m = (0, i._)([(0, h.j)('esri.core.ReadOnlyMultiOriginJSONSupport')], m);
      var f = r(76169);
      const b = (e) => {
        let t = class extends e {
          constructor(...e) {
            super(...e);
          }
          clear(e, t = 'user') {
            return v(this).delete(e, (0, l.M9)(t));
          }
          write(e = {}, t) {
            return (0, f.c)(this, (e = e || {}), t), e;
          }
          setAtOrigin(e, t, r) {
            (0, p.vw)(this).setAtOrigin(e, t, (0, l.M9)(r));
          }
          removeOrigin(e) {
            const t = v(this),
              r = (0, l.M9)(e),
              i = t.keys(r);
            for (const e of i)
              t.originOf(e) === r && t.set(e, t.get(e, r), l.s3.USER);
          }
          updateOrigin(e, t) {
            const r = v(this),
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
            [(0, h.j)('esri.core.WriteableMultiOriginJSONSupport')],
            t,
          )),
          (t.prototype.toJSON.isDefaultToJSON = !0),
          t
        );
      };
      function v(e) {
        return (0, p.vw)(e).store;
      }
      const g = (e) => {
        let t = class extends b(y(e)) {
          constructor(...e) {
            super(...e);
          }
        };
        return (
          (t = (0, i._)([(0, h.j)('esri.core.MultiOriginJSONSupport')], t)), t
        );
      };
      let _ = class extends g(s.Z) {};
      _ = (0, i._)([(0, h.j)('esri.core.MultiOriginJSONSupport')], _);
    },
    70921: (e, t, r) => {
      r.d(t, { R: () => n, Z: () => s });
      var i = r(80539);
      function s(e, t, r = i.Z) {
        return (
          t || (t = new r()),
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
      function n(e) {
        return e;
      }
    },
    68668: (e, t, r) => {
      r.d(t, { G: () => a, w: () => l });
      var i = r(66643),
        s = r(80539),
        n = r(83379),
        o = r(70586);
      async function a(e, t) {
        return await e.load(), l(e, t);
      }
      async function l(e, t) {
        const r = [],
          a = (...e) => {
            for (const t of e)
              (0, o.Wi)(t) ||
                (Array.isArray(t)
                  ? a(...t)
                  : s.Z.isCollection(t)
                  ? t.forEach((e) => a(e))
                  : n.Z.isLoadable(t) && r.push(t));
          };
        t(a);
        let l = null;
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
              l ||
              (l = e);
          }),
          l)
        )
          throw l.loadError;
        return e;
      }
    },
    63144: (e, t, r) => {
      r.r(t), r.d(t, { default: () => Z });
      var i = r(43697),
        s = r(68668),
        n = r(70586),
        o = r(16453),
        a = r(5600),
        l = (r(67676), r(80442), r(1153)),
        d = (r(75215), r(52011)),
        u = r(30556),
        p = r(29600),
        h = r(71612),
        y = r(38009),
        c = r(16859),
        m = r(72965),
        f = r(80539),
        b = r(70921),
        v = r(92604),
        g = r(95330);
      function _(e) {
        return e && 'group' === e.type;
      }
      function w(e, t, r) {
        let i, s;
        if (e)
          for (let n = 0, o = e.length; n < o; n++) {
            if (((i = e.getItemAt(n)), i[t] === r)) return i;
            if (_(i) && ((s = w(i.layers, t, r)), s)) return s;
          }
      }
      const S = v.Z.getLogger('esri.support.LayersMixin'),
        I = (e) => {
          let t = class extends e {
            constructor(...e) {
              super(...e), (this.layers = new f.Z());
              const t = (e) => {
                  (e.parent = this),
                    this.layerAdded(e),
                    ('elevation' !== e.type && 'base-elevation' !== e.type) ||
                      S.error(
                        `Layer 'title:${e.title}, id:${e.id}' of type '${e.type}' is not supported as an operational layer and will therefore be ignored.`,
                      );
                },
                r = (e) => {
                  (e.parent = null), this.layerRemoved(e);
                };
              this.layers.on('before-add', (e) =>
                ((e) => {
                  e.parent && 'remove' in e.parent && e.parent.remove(e);
                })(e.item),
              ),
                this.layers.on('after-add', (e) => t(e.item)),
                this.layers.on('after-remove', (e) => r(e.item));
            }
            destroy() {
              const e = this.layers.removeAll();
              for (const t of e) this.layerRemoved(t), t.destroy();
              this.layers.destroy();
            }
            set layers(e) {
              this._set('layers', (0, b.Z)(e, this._get('layers')));
            }
            add(e, t) {
              const r = this.layers;
              if (((t = r.getNextIndex(t)), e instanceof p.Z)) {
                const i = e;
                i.parent === this ? this.reorder(i, t) : r.add(i, t);
              } else
                (0, g.y8)(e)
                  ? e.then((e) => {
                      this.destroyed || this.add(e, t);
                    })
                  : S.error(
                      '#add()',
                      'The item being added is not a Layer or a Promise that resolves to a Layer.',
                    );
            }
            addMany(e, t) {
              const r = this.layers;
              (t = r.getNextIndex(t)),
                e.slice().forEach((e) => {
                  e.parent !== this
                    ? (r.add(e, t), (t += 1))
                    : this.reorder(e, t);
                });
            }
            findLayerById(e) {
              return w(this.layers, 'id', e);
            }
            findLayerByUid(e) {
              return w(this.layers, 'uid', e);
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
            (0, i._)([(0, a.Cb)()], t.prototype, 'layers', null),
            (t = (0, i._)([(0, d.j)('esri.support.LayersMixin')], t)),
            t
          );
        },
        M = 'esri.support.TablesMixin',
        E = v.Z.getLogger(M);
      function O(e) {
        return e && 'group' === e.type;
      }
      function L(e, t, r) {
        if (e)
          for (let i = 0, s = e.length; i < s; i++) {
            const s = e.getItemAt(i);
            if (s[t] === r) return s;
            if (O(s)) {
              const e = L(s.tables, t, r);
              if (e) return e;
            }
          }
      }
      const C = (e) => {
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
                    E.error(
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
            this._set('tables', (0, b.Z)(e, this._get('tables')));
          }
          findTableById(e) {
            return L(this.tables, 'id', e);
          }
          findTableByUid(e) {
            return L(this.tables, 'uid', e);
          }
        };
        return (
          (0, i._)([(0, a.Cb)()], t.prototype, 'tables', null),
          (t = (0, i._)([(0, d.j)(M)], t)),
          t
        );
      };
      var x = r(15650);
      let A = class extends (0, h.h)(
        (0, m.M)((0, y.q)((0, c.I)(C(I((0, o.R)(p.Z)))))),
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
        _writeLayers(e, t, r, i) {
          const s = [];
          if (!e) return s;
          e.forEach((e) => {
            const t = (0, x.Nw)(
              e,
              i.webmap ? i.webmap.getLayerJSONFromResourceInfo(e) : null,
              i,
            );
            (0, n.pC)(t) && t.layerType && s.push(t);
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
          if (!(0, l.vw)(this).initialized) return;
          const r = this.layers;
          let i = r.find((e) => e.visible);
          switch (e) {
            case 'exclusive':
              r.length && !i && ((i = r.getItemAt(0)), (i.visible = !0)),
                this._turnOffOtherLayers(i);
              break;
            case 'inherited':
              r.forEach((e) => {
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
        _visibilityWatcher(e, t, r, i) {
          const s = i;
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
      (0, i._)([(0, a.Cb)()], A.prototype, 'fullExtent', void 0),
        (0, i._)(
          [(0, a.Cb)({ json: { read: !1, write: { ignoreOrigin: !0 } } })],
          A.prototype,
          'layers',
          void 0,
        ),
        (0, i._)([(0, u.c)('layers')], A.prototype, '_writeLayers', null),
        (0, i._)(
          [(0, a.Cb)({ type: ['GroupLayer'] })],
          A.prototype,
          'operationalLayerType',
          void 0,
        ),
        (0, i._)(
          [
            (0, a.Cb)({
              json: { origins: { 'web-document': { read: !1, write: !1 } } },
            }),
          ],
          A.prototype,
          'portalItem',
          null,
        ),
        (0, i._)([(0, a.Cb)()], A.prototype, 'spatialReference', void 0),
        (0, i._)(
          [(0, a.Cb)({ json: { read: !1 }, readOnly: !0, value: 'group' })],
          A.prototype,
          'type',
          void 0,
        ),
        (0, i._)(
          [
            (0, a.Cb)({
              type: ['independent', 'inherited', 'exclusive'],
              value: 'independent',
              json: {
                write: !0,
                origins: { 'web-map': { read: !1, write: !1 } },
              },
            }),
          ],
          A.prototype,
          'visibilityMode',
          null,
        ),
        (A = (0, i._)([(0, d.j)('esri.layers.GroupLayer')], A));
      const Z = A;
    },
    29600: (e, t, r) => {
      r.d(t, { Z: () => _ });
      var i = r(43697),
        s = r(68773),
        n = (r(66577), r(3172)),
        o = r(20102),
        a = r(32448),
        l = r(10699),
        d = r(83379),
        u = r(92604),
        p = r(95330),
        h = r(17452),
        y = r(5600),
        c = (r(67676), r(80442), r(75215), r(52011)),
        m = r(6570),
        f = r(82971);
      let b = 0;
      const v = u.Z.getLogger('esri.layers.Layer');
      let g = class extends a.Z.EventedMixin((0, l.I)(d.Z)) {
        constructor() {
          super(...arguments),
            (this.attributionDataUrl = null),
            (this.fullExtent = new m.Z(-180, -90, 180, 90, f.Z.WGS84)),
            (this.id = Date.now().toString(16) + '-layer-' + b++),
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
            i = await r.e(4579).then(r.bind(r, 44579));
          try {
            return await i.fromItem(t);
          } catch (e) {
            const r = t && t.portalItem,
              i = (r && r.id) || 'unset',
              n = (r && r.portal && r.portal.url) || s.Z.portalUrl;
            throw (
              (v.error(
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
            (0, p.D_)(e) ||
              u.Z.getLogger(this.declaredClass).error(
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
          return e ? (0, h.mN)(e) : null;
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
          throw new o.Z(
            'layer:no-attribution-data',
            'Layer does not have attribution data',
          );
        }
      };
      (0, i._)(
        [(0, y.Cb)({ type: String })],
        g.prototype,
        'attributionDataUrl',
        void 0,
      ),
        (0, i._)([(0, y.Cb)({ type: m.Z })], g.prototype, 'fullExtent', void 0),
        (0, i._)(
          [(0, y.Cb)({ readOnly: !0 })],
          g.prototype,
          'hasAttributionData',
          null,
        ),
        (0, i._)(
          [(0, y.Cb)({ type: String, clonable: !1 })],
          g.prototype,
          'id',
          void 0,
        ),
        (0, i._)(
          [(0, y.Cb)({ type: Boolean, nonNullable: !0 })],
          g.prototype,
          'legendEnabled',
          void 0,
        ),
        (0, i._)(
          [(0, y.Cb)({ type: ['show', 'hide', 'hide-children'] })],
          g.prototype,
          'listMode',
          void 0,
        ),
        (0, i._)(
          [
            (0, y.Cb)({
              type: Number,
              range: { min: 0, max: 1 },
              nonNullable: !0,
            }),
          ],
          g.prototype,
          'opacity',
          void 0,
        ),
        (0, i._)([(0, y.Cb)({ clonable: !1 })], g.prototype, 'parent', void 0),
        (0, i._)([(0, y.Cb)({ readOnly: !0 })], g.prototype, 'parsedUrl', null),
        (0, i._)(
          [(0, y.Cb)({ type: Boolean })],
          g.prototype,
          'popupEnabled',
          void 0,
        ),
        (0, i._)(
          [(0, y.Cb)({ type: Boolean })],
          g.prototype,
          'attributionVisible',
          void 0,
        ),
        (0, i._)(
          [(0, y.Cb)({ type: f.Z })],
          g.prototype,
          'spatialReference',
          void 0,
        ),
        (0, i._)([(0, y.Cb)({ type: String })], g.prototype, 'title', void 0),
        (0, i._)(
          [(0, y.Cb)({ type: String, readOnly: !0, json: { read: !1 } })],
          g.prototype,
          'type',
          void 0,
        ),
        (0, i._)([(0, y.Cb)()], g.prototype, 'url', void 0),
        (0, i._)(
          [(0, y.Cb)({ type: Boolean, nonNullable: !0 })],
          g.prototype,
          'visible',
          void 0,
        ),
        (g = (0, i._)([(0, c.j)('esri.layers.Layer')], g));
      const _ = g;
    },
    16859: (e, t, r) => {
      r.d(t, { I: () => _ });
      var i = r(43697),
        s = r(40330),
        n = r(3172),
        o = r(66643),
        a = r(20102),
        l = r(92604),
        d = r(70586),
        u = r(95330),
        p = r(17452),
        h = r(5600),
        y = (r(67676), r(80442), r(75215), r(71715)),
        c = r(52011),
        m = r(30556),
        f = r(65587),
        b = r(15235),
        v = r(86082);
      const g = l.Z.getLogger('esri.layers.mixins.PortalLayer'),
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
                    (0, u.k_)(t),
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
              const r =
                w.credential === t ? w.user : await this._fetchEditingUser(e);
              return (
                (w.credential = t),
                (w.user = r),
                (0, d.Wi)(r) ||
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
                u = f.Z.getDefault();
              if (u && u.loaded && (0, p.Fv)(u.restUrl) === (0, p.Fv)(l))
                return u.user;
              const h = `${l}/community/self`,
                y = (0, d.pC)(e) ? e.signal : null,
                c = await (0, o.q6)(
                  (0, n.default)(h, {
                    authMode: 'no-prompt',
                    query: { f: 'json' },
                    signal: y,
                  }),
                );
              return c.ok ? v.default.fromJSON(c.value.data) : null;
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
              return r && i && !(0, p.tm)(i.restUrl, r.restUrl)
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
              [(0, h.Cb)({ type: b.default })],
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
                (0, m.c)('web-document', 'portalItem', {
                  itemId: { type: String },
                }),
              ],
              t.prototype,
              'writePortalItem',
              null,
            ),
            (0, i._)(
              [(0, h.Cb)({ clonable: !1 })],
              t.prototype,
              'resourceReferences',
              void 0,
            ),
            (0, i._)(
              [(0, h.Cb)({ readOnly: !0 })],
              t.prototype,
              'userHasEditingPrivileges',
              void 0,
            ),
            (t = (0, i._)([(0, c.j)('esri.layers.mixins.PortalLayer')], t)),
            t
          );
        },
        w = { credential: null, user: null };
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
    65242: (e, t, r) => {
      r.d(t, { a: () => s, b: () => n });
      var i = r(75215);
      function s(e) {
        const t = (0, i.vU)(100 * (1 - e));
        return Math.max(0, Math.min(t, 100));
      }
      function n(e) {
        const t = 1 - e / 100;
        return Math.max(0, Math.min(t, 1));
      }
    },
    15650: (e, t, r) => {
      r.d(t, { Nw: () => y });
      var i = r(20102),
        s = r(22974),
        n = r(70586),
        o = r(78286),
        a = r(827);
      const l = new Set([
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
      function p(e, t) {
        if (t.restrictedWebMapWriting) {
          const r = (function (e) {
            return 'basemap' === e.layerContainerType
              ? l
              : 'operational-layers' === e.layerContainerType
              ? d
              : null;
          })(t);
          return !(0, n.pC)(r) || (r.has(e.type) && !u(e));
        }
        return !0;
      }
      function h(e, t) {
        'maxScale' in e && (t.maxScale = (0, a.k)(e.maxScale)),
          'minScale' in e && (t.minScale = (0, a.k)(e.minScale));
      }
      function y(e, t, r) {
        if (!('write' in e) || !e.write)
          return (
            r &&
              r.messages &&
              r.messages.push(
                new i.Z(
                  'layer:unsupported',
                  `Layers (${e.title}, ${e.id}) of type '${e.declaredClass}' cannot be persisted`,
                  { layer: e },
                ),
              ),
            null
          );
        if (p(e, r)) {
          const t = {};
          return e.write(t, r) ? t : null;
        }
        return (
          (0, n.pC)(t) &&
            (function (e, t) {
              if (
                ((function (e, t) {
                  if (u(e)) {
                    const r = (0, o.hS)('featureCollection.layers', t),
                      i = r && r[0] && r[0].layerDefinition;
                    i && h(e, i);
                  } else
                    'stream' === e.type
                      ? h(e, (t.layerDefinition = t.layerDefinition || {}))
                      : 'group' !== e.type && h(e, t);
                })(e, t),
                'blendMode' in e &&
                  ((t.blendMode = e.blendMode),
                  'normal' === t.blendMode && delete t.blendMode),
                (t.opacity = (0, a.k)(e.opacity)),
                (t.title = e.title || 'Layer'),
                (t.visibility = e.visible),
                'legendEnabled' in e && 'wmts' !== e.type)
              )
                if (u(e)) {
                  const r = t.featureCollection;
                  r && (r.showLegend = e.legendEnabled);
                } else t.showLegend = e.legendEnabled;
            })(e, (t = (0, s.d9)(t))),
          t
        );
      }
    },
  },
]);
