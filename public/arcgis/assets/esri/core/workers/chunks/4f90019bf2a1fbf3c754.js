'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [8121, 5235, 2515, 999, 4475],
  {
    38171: (e, t, i) => {
      i.d(t, { Z: () => g });
      var r = i(43697),
        a = i(66577),
        o = i(51773),
        s = i(78223),
        n = i(2368),
        l = i(96674),
        p = i(70586),
        u = i(99001),
        c = i(5600),
        d = (i(67676), i(80442), i(75215), i(52011)),
        h = i(33955);
      function m(e) {
        if (!(0, p.pC)(e)) return null;
        const t = {};
        for (const i in e) {
          const r = e[i];
          r && (t[i] = r.toJSON());
        }
        return 0 !== Object.keys(t).length ? t : null;
      }
      let y = class extends (0, n.J)(l.wq) {
        constructor(...e) {
          super(...e),
            (this.isAggregate = !1),
            (this.layer = null),
            (this.popupTemplate = null),
            (this.sourceLayer = null),
            Object.defineProperty(this, 'uid', {
              value: (0, u.D)(),
              configurable: !0,
            });
        }
        normalizeCtorArgs(e, t, i, r) {
          return e && !e.declaredClass
            ? e
            : { geometry: e, symbol: t, attributes: i, popupTemplate: r };
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
                (0, p.pC)(t.defaultPopupTemplate)
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
            const i = this.getAttribute(e);
            (this.attributes[e] = t), this._notifyLayer('attributes', i, t, e);
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
            geometry: (0, p.pC)(this.geometry) ? this.geometry.toJSON() : null,
            symbol: (0, p.pC)(this.symbol) ? this.symbol.toJSON() : null,
            attributes: { ...this.attributes },
            popupTemplate: this.popupTemplate && this.popupTemplate.toJSON(),
          };
        }
        notifyGeometryChanged() {
          this._notifyLayer('geometry', this.geometry, this.geometry);
        }
        notifyMeshTransformChanged() {
          (0, p.pC)(this.geometry) &&
            'mesh' === this.geometry.type &&
            this._notifyLayer(
              'transform',
              this.geometry.transform,
              this.geometry.transform,
            );
        }
        _notifyLayer(e, t, i, r) {
          if (!this.layer || !('graphicChanged' in this.layer)) return;
          const a = { graphic: this, property: e, oldValue: t, newValue: i };
          'attributes' === e && (a.attributeName = r),
            this.layer.graphicChanged(a);
        }
      };
      (0, r._)(
        [
          (0, c.Cb)({
            value: null,
            json: {
              read: function (e) {
                if (!e) return null;
                const t = {};
                for (const i in e) {
                  const r = (0, h.im)(e[i]);
                  r && (t[i] = r);
                }
                return 0 !== Object.keys(t).length ? t : null;
              },
            },
          }),
        ],
        y.prototype,
        'aggregateGeometries',
        null,
      ),
        (0, r._)([(0, c.Cb)({ value: null })], y.prototype, 'attributes', null),
        (0, r._)(
          [(0, c.Cb)({ value: null, types: a.qM, json: { read: h.im } })],
          y.prototype,
          'geometry',
          null,
        ),
        (0, r._)(
          [(0, c.Cb)({ type: Boolean })],
          y.prototype,
          'isAggregate',
          void 0,
        ),
        (0, r._)(
          [(0, c.Cb)({ clonable: 'reference' })],
          y.prototype,
          'layer',
          void 0,
        ),
        (0, r._)(
          [(0, c.Cb)({ type: o.Z })],
          y.prototype,
          'popupTemplate',
          void 0,
        ),
        (0, r._)(
          [(0, c.Cb)({ clonable: 'reference' })],
          y.prototype,
          'sourceLayer',
          void 0,
        ),
        (0, r._)(
          [(0, c.Cb)({ value: null, types: s.LB })],
          y.prototype,
          'symbol',
          null,
        ),
        (0, r._)(
          [(0, c.Cb)({ type: Boolean, value: !0 })],
          y.prototype,
          'visible',
          null,
        ),
        (y = (0, r._)([(0, d.j)('esri.Graphic')], y)),
        ((y || (y = {})).generateUID = u.D);
      const g = y;
    },
    66643: (e, t, i) => {
      i.d(t, { Ed: () => o, UI: () => s, q6: () => n, mt: () => l });
      var r = i(70586),
        a = i(95330);
      function o(e, t, i) {
        return (0, a.as)(e.map((e, r) => t.apply(i, [e, r])));
      }
      function s(e, t, i) {
        return (0, a.as)(e.map((e, r) => t.apply(i, [e, r]))).then((e) =>
          e.map((e) => e.value),
        );
      }
      function n(e) {
        return (0, r.Wi)(e)
          ? (0, a.DB)()
          : e
              .then((e) => ({ ok: !0, value: e }))
              .catch((e) => ({ ok: !1, error: e }));
      }
      function l(e) {
        return e
          .then((e) => ({ ok: !0, value: e }))
          .catch((e) => ((0, a.r9)(e), { ok: !1, error: e }));
      }
    },
    74085: (e, t, i) => {
      function r(e) {}
      i.d(t, { Bg: () => r }), i(80442);
    },
    70171: (e, t, i) => {
      var r, a, o;
      let s;
      i.d(t, { Ze: () => h, Kd: () => p, qe: () => c });
      const n =
        null != (r = null == (a = globalThis.esriConfig) ? void 0 : a.locale)
          ? r
          : null == (o = globalThis.dojoConfig)
          ? void 0
          : o.locale;
      function l() {
        var e, t;
        return null !=
          (e =
            null != n
              ? n
              : null == (t = globalThis.navigator)
              ? void 0
              : t.language)
          ? e
          : 'en';
      }
      function p() {
        return void 0 === s && (s = l()), s;
      }
      const u = [];
      function c(e) {
        return (
          u.push(e),
          {
            remove() {
              u.splice(u.indexOf(e), 1);
            },
          }
        );
      }
      const d = [];
      function h(e) {
        return (
          d.push(e),
          {
            remove() {
              u.splice(d.indexOf(e), 1);
            },
          }
        );
      }
      null == globalThis.addEventListener ||
        globalThis.addEventListener('languagechange', function () {
          const e = null != undefined ? undefined : l();
          s !== e &&
            ((s = e),
            [...d].forEach((t) => {
              t.call(null, e);
            }),
            [...u].forEach((t) => {
              t.call(null, e);
            }));
        });
    },
    54295: (e, t, i) => {
      i.d(t, { V: () => s });
      var r = i(43697),
        a = i(5600),
        o = (i(67676), i(80442), i(75215), i(52011));
      const s = (e) => {
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
          (0, r._)([(0, a.Cb)({ type: String })], t.prototype, 'apiKey', null),
          (t = (0, r._)([(0, o.j)('esri.layers.mixins.APIKeyMixin')], t)),
          t
        );
      };
    },
    17287: (e, t, i) => {
      i.d(t, { Y: () => p });
      var r = i(43697),
        a = i(92604),
        o = i(70586),
        s = i(5600),
        n = (i(67676), i(80442), i(75215), i(52011)),
        l = i(66677);
      const p = (e) => {
        let t = class extends e {
          get title() {
            if (this._get('title') && 'defaults' !== this.originOf('title'))
              return this._get('title');
            if (this.url) {
              const e = (0, l.Qc)(this.url);
              if ((0, o.pC)(e) && e.title) return e.title;
            }
            return this._get('title') || '';
          }
          set title(e) {
            this._set('title', e);
          }
          set url(e) {
            this._set('url', (0, l.Nm)(e, a.Z.getLogger(this.declaredClass)));
          }
        };
        return (
          (0, r._)([(0, s.Cb)()], t.prototype, 'title', null),
          (0, r._)([(0, s.Cb)({ type: String })], t.prototype, 'url', null),
          (t = (0, r._)([(0, n.j)('esri.layers.mixins.ArcGISService')], t)),
          t
        );
      };
    },
    16859: (e, t, i) => {
      i.d(t, { I: () => w });
      var r = i(43697),
        a = i(40330),
        o = i(3172),
        s = i(66643),
        n = i(20102),
        l = i(92604),
        p = i(70586),
        u = i(95330),
        c = i(17452),
        d = i(5600),
        h = (i(67676), i(80442), i(75215), i(71715)),
        m = i(52011),
        y = i(30556),
        g = i(65587),
        f = i(15235),
        b = i(86082);
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
            readPortalItem(e, t, i) {
              if (t.itemId)
                return new f.default({ id: t.itemId, portal: i && i.portal });
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
                  (e) => ((0, u.r9)(e), !0),
                ),
              );
            }
            async _fetchUserHasEditingPrivileges(e) {
              const t = this.url
                ? null == a.id
                  ? void 0
                  : a.id.findCredential(this.url)
                : null;
              if (!t) return !0;
              const i =
                C.credential === t ? C.user : await this._fetchEditingUser(e);
              return (
                (C.credential = t),
                (C.user = i),
                (0, p.Wi)(i) ||
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
              const n = a.id.findServerInfo(this.url);
              if (null == n || !n.owningSystemUrl) return null;
              const l = `${n.owningSystemUrl}/sharing/rest`,
                u = g.Z.getDefault();
              if (u && u.loaded && (0, c.Fv)(u.restUrl) === (0, c.Fv)(l))
                return u.user;
              const d = `${l}/community/self`,
                h = (0, p.pC)(e) ? e.signal : null,
                m = await (0, s.q6)(
                  (0, o.default)(d, {
                    authMode: 'no-prompt',
                    query: { f: 'json' },
                    signal: h,
                  }),
                );
              return m.ok ? b.default.fromJSON(m.value.data) : null;
            }
            read(e, t) {
              t && (t.layer = this), super.read(e, t);
            }
            write(e, t) {
              const i = t && t.portal,
                r =
                  this.portalItem &&
                  this.portalItem.id &&
                  (this.portalItem.portal || g.Z.getDefault());
              return i && r && !(0, c.tm)(r.restUrl, i.restUrl)
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
              [(0, d.Cb)({ type: f.default })],
              t.prototype,
              'portalItem',
              null,
            ),
            (0, r._)(
              [(0, h.r)('web-document', 'portalItem', ['itemId'])],
              t.prototype,
              'readPortalItem',
              null,
            ),
            (0, r._)(
              [
                (0, y.c)('web-document', 'portalItem', {
                  itemId: { type: String },
                }),
              ],
              t.prototype,
              'writePortalItem',
              null,
            ),
            (0, r._)(
              [(0, d.Cb)({ clonable: !1 })],
              t.prototype,
              'resourceReferences',
              void 0,
            ),
            (0, r._)(
              [(0, d.Cb)({ readOnly: !0 })],
              t.prototype,
              'userHasEditingPrivileges',
              void 0,
            ),
            (t = (0, r._)([(0, m.j)('esri.layers.mixins.PortalLayer')], t)),
            t
          );
        },
        C = { credential: null, user: null };
    },
    70082: (e, t, i) => {
      i.d(t, { Z: () => c });
      var r = i(43697),
        a = i(2368),
        o = i(35454),
        s = i(96674),
        n = i(5600),
        l = (i(67676), i(80442), i(75215), i(52011));
      const p = new o.X({
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
      let u = class extends (0, a.J)(s.wq) {
        constructor(e) {
          super(e),
            (this.name = null),
            (this.description = null),
            (this.drawingTool = null),
            (this.prototype = null),
            (this.thumbnail = null);
        }
      };
      (0, r._)(
        [(0, n.Cb)({ json: { write: !0 } })],
        u.prototype,
        'name',
        void 0,
      ),
        (0, r._)(
          [(0, n.Cb)({ json: { write: !0 } })],
          u.prototype,
          'description',
          void 0,
        ),
        (0, r._)(
          [(0, n.Cb)({ json: { read: p.read, write: p.write } })],
          u.prototype,
          'drawingTool',
          void 0,
        ),
        (0, r._)(
          [(0, n.Cb)({ json: { write: !0 } })],
          u.prototype,
          'prototype',
          void 0,
        ),
        (0, r._)(
          [(0, n.Cb)({ json: { write: !0 } })],
          u.prototype,
          'thumbnail',
          void 0,
        ),
        (u = (0, r._)([(0, l.j)('esri.layers.support.FeatureTemplate')], u));
      const c = u;
    },
    16451: (e, t, i) => {
      i.d(t, { Z: () => h });
      var r = i(43697),
        a = i(2368),
        o = i(96674),
        s = i(5600),
        n = (i(67676), i(80442), i(75215), i(71715)),
        l = i(52011),
        p = i(30556),
        u = i(72729),
        c = i(70082);
      let d = class extends (0, a.J)(o.wq) {
        constructor(e) {
          super(e),
            (this.id = null),
            (this.name = null),
            (this.domains = null),
            (this.templates = null);
        }
        readDomains(e) {
          const t = {};
          for (const i of Object.keys(e)) t[i] = (0, u.im)(e[i]);
          return t;
        }
        writeDomains(e, t) {
          const i = {};
          for (const t of Object.keys(e)) {
            var r;
            e[t] && (i[t] = null == (r = e[t]) ? void 0 : r.toJSON());
          }
          t.domains = i;
        }
      };
      (0, r._)([(0, s.Cb)({ json: { write: !0 } })], d.prototype, 'id', void 0),
        (0, r._)(
          [(0, s.Cb)({ json: { write: !0 } })],
          d.prototype,
          'name',
          void 0,
        ),
        (0, r._)(
          [(0, s.Cb)({ json: { write: !0 } })],
          d.prototype,
          'domains',
          void 0,
        ),
        (0, r._)([(0, n.r)('domains')], d.prototype, 'readDomains', null),
        (0, r._)([(0, p.c)('domains')], d.prototype, 'writeDomains', null),
        (0, r._)(
          [(0, s.Cb)({ type: [c.Z], json: { write: !0 } })],
          d.prototype,
          'templates',
          void 0,
        ),
        (d = (0, r._)([(0, l.j)('esri.layers.support.FeatureType')], d));
      const h = d;
    },
    56765: (e, t, i) => {
      i.d(t, { Z: () => u });
      var r,
        a = i(43697),
        o = i(80539),
        s = i(96674),
        n = i(5600),
        l = (i(67676), i(80442), i(75215), i(52011));
      let p = (r = class extends s.wq {
        constructor(e) {
          super(e),
            (this.floorField = null),
            (this.viewAllMode = !1),
            (this.viewAllLevelIds = new o.Z());
        }
        clone() {
          return new r({
            floorField: this.floorField,
            viewAllMode: this.viewAllMode,
            viewAllLevelIds: this.viewAllLevelIds,
          });
        }
      });
      (0, a._)(
        [(0, n.Cb)({ type: String, json: { write: !0 } })],
        p.prototype,
        'floorField',
        void 0,
      ),
        (0, a._)(
          [(0, n.Cb)({ json: { read: !1, write: !1 } })],
          p.prototype,
          'viewAllMode',
          void 0,
        ),
        (0, a._)(
          [(0, n.Cb)({ json: { read: !1, write: !1 } })],
          p.prototype,
          'viewAllLevelIds',
          void 0,
        ),
        (p = r = (0, a._)([(0, l.j)('esri.layers.support.LayerFloorInfo')], p));
      const u = p;
    },
    15235: (e, t, i) => {
      i.r(t), i.d(t, { default: () => O });
      var r = i(43697),
        a = i(99880),
        o = i(20102),
        s = i(96674),
        n = i(22974),
        l = i(83379),
        p = i(70586),
        u = i(17452),
        c = i(5600),
        d = i(75215),
        h = i(71715),
        m = i(52011),
        y = i(6570),
        g = i(65587),
        f = i(15923),
        b = i(92604),
        v = (i(67676), i(80442), i(90578));
      const w = b.Z.getLogger('esri.portal.PortalItemResource');
      let C = class extends f.Z {
        constructor(e) {
          super(e), (this.portalItem = null);
        }
        normalizeCtorArgs(e) {
          return e && e.portalItem && e.path
            ? { ...e, path: this._normalizePath(e.path, e.portalItem) }
            : e;
        }
        set path(e) {
          (0, p.pC)(e) && (0, u.YP)(e)
            ? w.error(
                'portalitemresource:invalid-path',
                'A portal item resource path must be relative',
              )
            : this._set('path', e);
        }
        _castPath(e) {
          return this._normalizePath(e, this.portalItem);
        }
        get url() {
          return this.portalItem && this.path
            ? `${this.portalItem.itemUrl}/resources/${this.path}`
            : null;
        }
        get itemRelativeUrl() {
          return this.portalItem && this.path
            ? `./resources/${this.path}`
            : null;
        }
        fetch(e = 'json', t) {
          const i = this.url;
          if ((0, p.Wi)(i))
            throw new o.Z(
              'portal-item-resource:fetch',
              'Portal item resource does not refer to a valid item or path',
            );
          return this.portalItem.portal._request(i, {
            responseType: e,
            query: { token: this.portalItem.apiKey },
            signal: (0, p.U2)(t, 'signal'),
          });
        }
        async update(e, t) {
          return (await i.e(7873).then(i.bind(i, 97873))).addOrUpdateResource(
            this,
            'update',
            e,
            t,
          );
        }
        hasPath() {
          return (0, p.pC)(this.path);
        }
        _normalizePath(e, t) {
          return (0, p.Wi)(e)
            ? e
            : ((e = e.replace(/^\/+/, '')),
              (0, p.pC)(t) && (0, u.YP)(e) && (e = (0, u.PF)(e, t.itemUrl)),
              e.replace(/^\/+/, '').replace(/^(\.\/)?resources\//, ''));
        }
      };
      (0, r._)([(0, c.Cb)()], C.prototype, 'portalItem', void 0),
        (0, r._)(
          [(0, c.Cb)({ type: String, value: null })],
          C.prototype,
          'path',
          null,
        ),
        (0, r._)([(0, v.p)('path')], C.prototype, '_castPath', null),
        (0, r._)(
          [(0, c.Cb)({ type: String, readOnly: !0 })],
          C.prototype,
          'url',
          null,
        ),
        (0, r._)(
          [(0, c.Cb)({ type: String, readOnly: !0 })],
          C.prototype,
          'itemRelativeUrl',
          null,
        ),
        (C = (0, r._)([(0, m.j)('esri.portal.PortalItemResource')], C));
      const x = C;
      let _ = class extends f.Z {
        constructor(e) {
          super(e), (this.created = null), (this.rating = null);
        }
      };
      (0, r._)([(0, c.Cb)()], _.prototype, 'created', void 0),
        (0, r._)([(0, c.Cb)()], _.prototype, 'rating', void 0),
        (_ = (0, r._)([(0, m.j)('esri.portal.PortalRating')], _));
      const k = _;
      var S;
      let I = (S = class extends (0, s.eC)(l.Z) {
        constructor(e) {
          super(e),
            (this.access = null),
            (this.accessInformation = null),
            (this.apiKey = null),
            (this.applicationProxies = null),
            (this.avgRating = null),
            (this.categories = null),
            (this.created = null),
            (this.culture = null),
            (this.description = null),
            (this.extent = null),
            (this.groupCategories = null),
            (this.id = null),
            (this.itemControl = null),
            (this.licenseInfo = null),
            (this.modified = null),
            (this.name = null),
            (this.numComments = null),
            (this.numRatings = null),
            (this.numViews = null),
            (this.owner = null),
            (this.ownerFolder = null),
            (this.portal = null),
            (this.screenshots = null),
            (this.size = null),
            (this.snippet = null),
            (this.sourceJSON = null),
            (this.tags = null),
            (this.title = null),
            (this.type = null),
            (this.typeKeywords = null),
            (this.url = null);
        }
        static from(e) {
          return (0, d.TJ)(S, e);
        }
        destroy() {
          this.portal = null;
        }
        get displayName() {
          const e = this.type,
            t = this.typeKeywords || [];
          let i = e;
          return (
            'Feature Service' === e || 'Feature Collection' === e
              ? (i =
                  t.indexOf('Table') > -1
                    ? 'Table'
                    : t.indexOf('Route Layer') > -1
                    ? 'Route Layer'
                    : t.indexOf('Markup') > -1
                    ? 'Markup'
                    : 'Feature Layer')
              : 'Image Service' === e
              ? (i =
                  t.indexOf('Elevation 3D Layer') > -1
                    ? 'Elevation Layer'
                    : t.indexOf('Tiled Imagery') > -1
                    ? 'Tiled Imagery Layer'
                    : 'Imagery Layer')
              : 'Scene Service' === e
              ? (i = 'Scene Layer')
              : 'Media Service' === e
              ? (i = 'Media Layer')
              : 'Scene Package' === e
              ? (i = 'Scene Layer Package')
              : 'Stream Service' === e
              ? (i = 'Feature Layer')
              : 'Geoprocessing Service' === e &&
                this.portal &&
                this.portal.isPortal
              ? (i =
                  t.indexOf('Web Tool') > -1 ? 'Tool' : 'Geoprocessing Service')
              : 'Geocoding Service' === e
              ? (i = 'Locator')
              : 'Geoenrichment Service' === e
              ? (i = 'GeoEnrichment Service')
              : 'Microsoft Powerpoint' === e
              ? (i = 'Microsoft PowerPoint')
              : 'GeoJson' === e
              ? (i = 'GeoJSON')
              : 'Globe Service' === e
              ? (i = 'Globe Layer')
              : 'Vector Tile Service' === e
              ? (i = 'Tile Layer')
              : 'netCDF' === e
              ? (i = 'NetCDF')
              : 'Map Service' === e
              ? (i =
                  -1 === t.indexOf('Spatiotemporal') &&
                  (t.indexOf('Hosted Service') > -1 ||
                    t.indexOf('Tiled') > -1) &&
                  -1 === t.indexOf('Relational')
                    ? 'Tile Layer'
                    : 'Map Image Layer')
              : e && e.toLowerCase().indexOf('add in') > -1
              ? (i = e.replace(/(add in)/gi, 'Add-In'))
              : 'datastore catalog service' === e
              ? (i = 'Big Data File Share')
              : 'Compact Tile Package' === e
              ? (i = 'Tile Package (tpkx)')
              : 'OGCFeatureServer' === e
              ? (i = 'OGC Feature Layer')
              : 'web mapping application' === e &&
                t.indexOf('configurableApp') > -1 &&
                (i = 'Instant App'),
            i
          );
        }
        readExtent(e) {
          return e && e.length
            ? new y.Z(e[0][0], e[0][1], e[1][0], e[1][1])
            : null;
        }
        get iconUrl() {
          const e = (this.type && this.type.toLowerCase()) || '',
            t = this.typeKeywords || [];
          let i,
            r = !1,
            o = !1,
            s = !1,
            n = !1,
            l = !1,
            p = !1;
          return (
            e.indexOf('service') > 0 ||
            'feature collection' === e ||
            'kml' === e ||
            'wms' === e ||
            'wmts' === e ||
            'wfs' === e
              ? ((r = t.indexOf('Hosted Service') > -1),
                'feature service' === e ||
                'feature collection' === e ||
                'kml' === e ||
                'wfs' === e
                  ? ((o = t.indexOf('Table') > -1),
                    (s = t.indexOf('Route Layer') > -1),
                    (n = t.indexOf('Markup') > -1),
                    (l = -1 !== t.indexOf('Spatiotemporal')),
                    (p = -1 !== t.indexOf('UtilityNetwork')),
                    (i =
                      l && o
                        ? 'spatiotemporaltable'
                        : o
                        ? 'table'
                        : s
                        ? 'routelayer'
                        : n
                        ? 'markup'
                        : l
                        ? 'spatiotemporal'
                        : r
                        ? 'featureshosted'
                        : p
                        ? 'utilitynetwork'
                        : 'features'))
                  : (i =
                      'map service' === e || 'wms' === e || 'wmts' === e
                        ? r || t.indexOf('Tiled') > -1 || 'wmts' === e
                          ? 'maptiles'
                          : 'mapimages'
                        : 'scene service' === e
                        ? t.indexOf('Line') > -1
                          ? 'sceneweblayerline'
                          : t.indexOf('3DObject') > -1
                          ? 'sceneweblayermultipatch'
                          : t.indexOf('Point') > -1
                          ? 'sceneweblayerpoint'
                          : t.indexOf('IntegratedMesh') > -1
                          ? 'sceneweblayermesh'
                          : t.indexOf('PointCloud') > -1
                          ? 'sceneweblayerpointcloud'
                          : t.indexOf('Polygon') > -1
                          ? 'sceneweblayerpolygon'
                          : t.indexOf('Building') > -1
                          ? 'sceneweblayerbuilding'
                          : t.indexOf('Voxel') > -1
                          ? 'sceneweblayervoxel'
                          : 'sceneweblayer'
                        : 'image service' === e
                        ? t.indexOf('Elevation 3D Layer') > -1
                          ? 'elevationlayer'
                          : t.indexOf('Tiled Imagery') > -1
                          ? 'tiledimagerylayer'
                          : 'imagery'
                        : 'stream service' === e
                        ? 'streamlayer'
                        : 'media service' === e
                        ? 'mediaservice'
                        : 'vector tile service' === e
                        ? 'vectortile'
                        : 'datastore catalog service' === e
                        ? 'datastorecollection'
                        : 'geocoding service' === e
                        ? 'geocodeservice'
                        : 'geoprocessing service' === e &&
                          t.indexOf('Web Tool') > -1 &&
                          this.portal &&
                          this.portal.isPortal
                        ? 'tool'
                        : 'layers'))
              : (i =
                  'web map' === e || 'cityengine web scene' === e
                    ? 'maps'
                    : 'web scene' === e
                    ? t.indexOf('ViewingMode-Local') > -1
                      ? 'webscenelocal'
                      : 'websceneglobal'
                    : 'web mapping application' === e &&
                      t.indexOf('configurableApp') > -1
                    ? 'instantapps'
                    : 'web mapping application' === e ||
                      'mobile application' === e ||
                      'application' === e ||
                      'operation view' === e ||
                      'desktop application' === e
                    ? 'apps'
                    : 'map document' === e ||
                      'map package' === e ||
                      'published map' === e ||
                      'scene document' === e ||
                      'globe document' === e ||
                      'basemap package' === e ||
                      'mobile basemap package' === e ||
                      'mobile map package' === e ||
                      'project package' === e ||
                      'project template' === e ||
                      'pro map' === e ||
                      'layout' === e ||
                      ('layer' === e && t.indexOf('ArcGIS Pro') > -1) ||
                      ('explorer map' === e && t.indexOf('Explorer Document'))
                    ? 'mapsgray'
                    : 'service definition' === e ||
                      'csv' === e ||
                      'shapefile' === e ||
                      'cad drawing' === e ||
                      'geojson' === e ||
                      '360 vr experience' === e ||
                      'netcdf' === e ||
                      'administrative report' === e
                    ? 'datafiles'
                    : 'explorer add in' === e ||
                      'desktop add in' === e ||
                      'windows viewer add in' === e ||
                      'windows viewer configuration' === e
                    ? 'appsgray'
                    : 'arcgis pro add in' === e ||
                      'arcgis pro configuration' === e
                    ? 'addindesktop'
                    : 'rule package' === e ||
                      'file geodatabase' === e ||
                      'sqlite geodatabase' === e ||
                      'csv collection' === e ||
                      'kml collection' === e ||
                      'windows mobile package' === e ||
                      'map template' === e ||
                      'desktop application template' === e ||
                      'gml' === e ||
                      'arcpad package' === e ||
                      'code sample' === e ||
                      'form' === e ||
                      'document link' === e ||
                      'earth configuration' === e ||
                      'operations dashboard add in' === e ||
                      'rules package' === e ||
                      'image' === e ||
                      'workflow manager package' === e ||
                      ('explorer map' === e &&
                        t.indexOf('Explorer Mapping Application') > -1) ||
                      t.indexOf('Document') > -1
                    ? 'datafilesgray'
                    : 'network analysis service' === e ||
                      'geoprocessing service' === e ||
                      'geodata service' === e ||
                      'geometry service' === e ||
                      'geoprocessing package' === e ||
                      'locator package' === e ||
                      'geoprocessing sample' === e ||
                      'workflow manager service' === e
                    ? 'toolsgray'
                    : 'layer' === e ||
                      'layer package' === e ||
                      'explorer layer' === e
                    ? 'layersgray'
                    : 'scene package' === e
                    ? 'scenepackage'
                    : 'mobile scene package' === e
                    ? 'mobilescenepackage'
                    : 'tile package' === e || 'compact tile package' === e
                    ? 'tilepackage'
                    : 'task file' === e
                    ? 'taskfile'
                    : 'report template' === e
                    ? 'report-template'
                    : 'statistical data collection' === e
                    ? 'statisticaldatacollection'
                    : 'insights workbook' === e
                    ? 'workbook'
                    : 'insights model' === e
                    ? 'insightsmodel'
                    : 'insights page' === e
                    ? 'insightspage'
                    : 'insights theme' === e
                    ? 'insightstheme'
                    : 'hub initiative' === e
                    ? 'hubinitiative'
                    : 'hubpage' === e
                    ? 'hubpage'
                    : 'hub event' === e
                    ? 'hubevent'
                    : 'hub site application' === e
                    ? 'hubsite'
                    : 'hub project' === e
                    ? 'hubproject'
                    : 'relational database connection' === e
                    ? 'relationaldatabaseconnection'
                    : 'big data file share' === e
                    ? 'datastorecollection'
                    : 'image collection' === e
                    ? 'imagecollection'
                    : 'style' === e
                    ? 'style'
                    : 'desktop style' === e
                    ? 'desktopstyle'
                    : 'dashboard' === e
                    ? 'dashboard'
                    : 'raster function template' === e
                    ? 'rasterprocessingtemplate'
                    : 'vector tile package' === e
                    ? 'vectortilepackage'
                    : 'ortho mapping project' === e
                    ? 'orthomappingproject'
                    : 'ortho mapping template' === e
                    ? 'orthomappingtemplate'
                    : 'solution' === e
                    ? 'solutions'
                    : 'geopackage' === e
                    ? 'geopackage'
                    : 'deep learning package' === e
                    ? 'deeplearningpackage'
                    : 'real time analytic' === e
                    ? 'realtimeanalytics'
                    : 'big data analytic' === e
                    ? 'bigdataanalytics'
                    : 'feed' === e
                    ? 'feed'
                    : 'excalibur imagery project' === e
                    ? 'excaliburimageryproject'
                    : 'notebook' === e
                    ? 'notebook'
                    : 'storymap' === e
                    ? 'storymap'
                    : 'survey123 add in' === e
                    ? 'survey123addin'
                    : 'mission' === e
                    ? 'mission'
                    : 'mission report' === e
                    ? 'missionreport'
                    : 'quickcapture project' === e
                    ? 'quickcaptureproject'
                    : 'pro report' === e
                    ? 'proreport'
                    : 'urban model' === e
                    ? 'urbanmodel'
                    : 'web experience' === e
                    ? 'experiencebuilder'
                    : 'web experience template' === e
                    ? 'webexperiencetemplate'
                    : 'experience builder widget' === e
                    ? 'experiencebuilderwidget'
                    : 'experience builder widget package' === e
                    ? 'experiencebuilderwidgetpackage'
                    : 'workflow' === e
                    ? 'workflow'
                    : 'insights script' === e
                    ? 'insightsscript'
                    : 'kernel gateway connection' === e
                    ? 'kernelgatewayconnection'
                    : 'hub initiative template' === e
                    ? 'hubinitiativetemplate'
                    : 'storymap theme' === e
                    ? 'storymaptheme'
                    : 'knowledge graph' === e
                    ? 'knowledgegraph'
                    : 'native application' === e
                    ? 'nativeapp'
                    : 'native application installer' === e
                    ? 'nativeappinstaller'
                    : 'link chart' === e
                    ? 'linkchart'
                    : 'investigation' === e
                    ? 'investigation'
                    : 'ogcfeatureserver' === e
                    ? 'features'
                    : 'pro project' === e
                    ? 'proproject'
                    : 'insights workbook package' === e
                    ? 'insightsworkbookpackage'
                    : 'apache parquet' === e
                    ? 'apacheparquet'
                    : 'maps'),
            i ? (0, a.V)('esri/images/portal/' + i + '16.png') : null
          );
        }
        get isLayer() {
          return (
            [
              'Map Service',
              'Feature Service',
              'Feature Collection',
              'Scene Service',
              'Image Service',
              'Stream Service',
              'Vector Tile Service',
              'WMTS',
              'WMS',
            ].indexOf(this.type) > -1
          );
        }
        get itemUrl() {
          const e = this.get('portal.restUrl');
          return e ? e + '/content/items/' + this.id : null;
        }
        get thumbnailUrl() {
          const e = this.itemUrl,
            t = this.thumbnail;
          return e && t
            ? this.portal._normalizeUrl(`${e}/info/${t}?f=json`)
            : null;
        }
        get userItemUrl() {
          const e = this.get('portal.restUrl');
          if (!e) return null;
          const t = this.owner || this.get('portal.user.username');
          return t
            ? `${e}/content/users/${
                this.ownerFolder ? `${t}/${this.ownerFolder}` : t
              }/items/${this.id}`
            : null;
        }
        load(e) {
          this.portal || (this.portal = g.Z.getDefault());
          const t = this.portal
            .load(e)
            .then(() =>
              this.sourceJSON
                ? this.sourceJSON
                : this.id && this.itemUrl
                ? this.portal._request(this.itemUrl, {
                    signal: (0, p.pC)(e) ? e.signal : null,
                    query: { token: this.apiKey },
                  })
                : {},
            )
            .then((e) => {
              (this.sourceJSON = e), this.read(e);
            });
          return this.addResolvingPromise(t), Promise.resolve(this);
        }
        addRating(e) {
          const t = { method: 'post', query: {} };
          return (
            e instanceof k && (e = e.rating),
            isNaN(e) || 'number' != typeof e || (t.query.rating = e),
            this.portal
              ._request(this.itemUrl + '/addRating', t)
              .then(() => new k({ rating: e, created: new Date() }))
          );
        }
        clone() {
          const e = {
            access: this.access,
            accessInformation: this.accessInformation,
            applicationProxies: (0, n.d9)(this.applicationProxies),
            avgRating: this.avgRating,
            categories: (0, n.d9)(this.categories),
            created: (0, n.d9)(this.created),
            culture: this.culture,
            description: this.description,
            extent: (0, n.d9)(this.extent),
            groupCategories: (0, n.d9)(this.groupCategories),
            id: this.id,
            itemControl: this.itemControl,
            licenseInfo: this.licenseInfo,
            modified: (0, n.d9)(this.modified),
            name: this.name,
            numComments: this.numComments,
            numRatings: this.numRatings,
            numViews: this.numViews,
            owner: this.owner,
            ownerFolder: this.ownerFolder,
            portal: this.portal,
            screenshots: (0, n.d9)(this.screenshots),
            size: this.size,
            snippet: this.snippet,
            tags: (0, n.d9)(this.tags),
            thumbnail: this.thumbnail,
            title: this.title,
            type: this.type,
            typeKeywords: (0, n.d9)(this.typeKeywords),
            url: this.url,
          };
          return (
            this.loaded && (e.loadStatus = 'loaded'),
            new S({ sourceJSON: this.sourceJSON }).set(e)
          );
        }
        createPostQuery() {
          const e = this.toJSON();
          for (const t in e)
            'tags' === t && null !== e[t] && (e[t] = e[t].join(', ')),
              'typeKeywords' === t && null !== e[t] && (e[t] = e[t].join(', ')),
              'extent' === t && e[t] && (e[t] = JSON.stringify(e[t]));
          return e;
        }
        deleteRating() {
          return this.portal
            ._request(this.itemUrl + '/deleteRating', { method: 'post' })
            .then(() => {});
        }
        fetchData(e = 'json', t) {
          return this.portal._request(this.itemUrl + '/data', {
            responseType: e,
            ...t,
            query: { token: this.apiKey },
          });
        }
        fetchRating(e) {
          return this.portal
            ._request(this.itemUrl + '/rating', {
              query: { token: this.apiKey },
              ...e,
            })
            .then((e) =>
              null != e.rating
                ? ((e.created = new Date(e.created)), new k(e))
                : null,
            );
        }
        fetchRelatedItems(e, t) {
          return this.portal._requestToTypedArray(
            this.itemUrl + '/relatedItems',
            { query: { ...e, token: this.apiKey }, ...t },
            S,
          );
        }
        getThumbnailUrl(e) {
          let t = this.thumbnailUrl;
          return t && e && (t += `&w=${e}`), t;
        }
        reload() {
          return this.portal
            ._request(this.itemUrl, {
              cacheBust: !0,
              query: { token: this.apiKey },
            })
            .then((e) => ((this.sourceJSON = e), this.read(e), this));
        }
        update(e) {
          return this.id
            ? this.load()
                .then(() => this.portal._signIn())
                .then(() => {
                  const t = e && e.data,
                    i = { method: 'post' };
                  i.query = this.createPostQuery();
                  for (const e in i.query)
                    null === i.query[e] && (i.query[e] = '');
                  return (
                    (i.query.clearEmptyFields = !0),
                    null != t &&
                      ('string' == typeof t
                        ? (i.query.text = t)
                        : 'object' == typeof t &&
                          (i.query.text = JSON.stringify(t))),
                    this.portal
                      ._request(`${this.userItemUrl}/update`, i)
                      .then(() => this.reload())
                  );
                })
            : Promise.reject(
                new o.Z(
                  'portal:item-does-not-exist',
                  'The item does not exist yet and cannot be updated',
                ),
              );
        }
        updateThumbnail(e) {
          return this.id
            ? this.load()
                .then(() => this.portal._signIn())
                .then(() => {
                  const t = e.thumbnail,
                    i = e.filename,
                    r = { method: 'post' };
                  if ('string' == typeof t)
                    (0, u.HK)(t)
                      ? (r.query = { data: t })
                      : (r.query = { url: (0, u.hF)(t) }),
                      (0, p.pC)(i) && (r.query.filename = i);
                  else {
                    const e = new FormData();
                    (0, p.pC)(i) ? e.append('file', t, i) : e.append('file', t),
                      (r.body = e);
                  }
                  return this.portal
                    ._request(`${this.userItemUrl}/updateThumbnail`, r)
                    .then(() => this.reload());
                })
            : Promise.reject(
                new o.Z(
                  'portal:item-does-not-exist',
                  'The item does not exist yet and cannot be updated',
                ),
              );
        }
        async fetchResources(e = {}, t) {
          return (await i.e(7873).then(i.bind(i, 97873))).fetchResources(
            this,
            e,
            t,
          );
        }
        async addResource(e, t, r) {
          const a = await i.e(7873).then(i.bind(i, 97873));
          return (e.portalItem = this), a.addOrUpdateResource(e, 'add', t, r);
        }
        async removeResource(e, t) {
          const r = await i.e(7873).then(i.bind(i, 97873));
          if (e.portalItem && e.portalItem.itemUrl !== this.itemUrl)
            throw new o.Z(
              'removeresource:portal-item-mismatch',
              'The portal item associated with the provided resource does not match the item',
            );
          return r.removeResource(this, e, t);
        }
        async removeAllResources(e) {
          return (await i.e(7873).then(i.bind(i, 97873))).removeAllResources(
            this,
            e,
          );
        }
        resourceFromPath(e) {
          return new x({ portalItem: this, path: e });
        }
        toJSON() {
          const e = this.extent,
            t = {
              created: this.created && this.created.getTime(),
              description: this.description,
              extent: e && [
                [e.xmin, e.ymin],
                [e.xmax, e.ymax],
              ],
              id: this.id,
              modified: this.modified && this.modified.getTime(),
              name: this.name,
              owner: this.owner,
              ownerFolder: this.ownerFolder,
              snippet: this.snippet,
              tags: this.tags,
              thumbnail: this.thumbnail,
              title: this.title,
              type: this.type,
              typeKeywords: this.typeKeywords,
              url: this.url,
            };
          return (0, n.yd)(t);
        }
        static fromJSON(e) {
          if (!e) return null;
          if (e.declaredClass)
            throw new Error('JSON object is already hydrated');
          return new S({ sourceJSON: e });
        }
        _getPostQuery() {
          const e = this.toJSON();
          for (const t in e)
            'tags' === t && null !== e[t] && (e[t] = e[t].join(', ')),
              'typeKeywords' === t && null !== e[t] && (e[t] = e[t].join(', ')),
              'extent' === t && e[t] && (e[t] = JSON.stringify(e[t]));
          return e;
        }
      });
      (0, r._)(
        [(0, c.Cb)({ type: ['private', 'shared', 'org', 'public'] })],
        I.prototype,
        'access',
        void 0,
      ),
        (0, r._)([(0, c.Cb)()], I.prototype, 'accessInformation', void 0),
        (0, r._)([(0, c.Cb)({ type: String })], I.prototype, 'apiKey', void 0),
        (0, r._)(
          [(0, c.Cb)({ json: { read: { source: 'appProxies' } } })],
          I.prototype,
          'applicationProxies',
          void 0,
        ),
        (0, r._)([(0, c.Cb)()], I.prototype, 'avgRating', void 0),
        (0, r._)([(0, c.Cb)()], I.prototype, 'categories', void 0),
        (0, r._)([(0, c.Cb)({ type: Date })], I.prototype, 'created', void 0),
        (0, r._)([(0, c.Cb)()], I.prototype, 'culture', void 0),
        (0, r._)([(0, c.Cb)()], I.prototype, 'description', void 0),
        (0, r._)(
          [(0, c.Cb)({ readOnly: !0 })],
          I.prototype,
          'displayName',
          null,
        ),
        (0, r._)([(0, c.Cb)({ type: y.Z })], I.prototype, 'extent', void 0),
        (0, r._)([(0, h.r)('extent')], I.prototype, 'readExtent', null),
        (0, r._)([(0, c.Cb)()], I.prototype, 'groupCategories', void 0),
        (0, r._)([(0, c.Cb)({ readOnly: !0 })], I.prototype, 'iconUrl', null),
        (0, r._)([(0, c.Cb)()], I.prototype, 'id', void 0),
        (0, r._)([(0, c.Cb)({ readOnly: !0 })], I.prototype, 'isLayer', null),
        (0, r._)([(0, c.Cb)()], I.prototype, 'itemControl', void 0),
        (0, r._)([(0, c.Cb)({ readOnly: !0 })], I.prototype, 'itemUrl', null),
        (0, r._)([(0, c.Cb)()], I.prototype, 'licenseInfo', void 0),
        (0, r._)([(0, c.Cb)({ type: Date })], I.prototype, 'modified', void 0),
        (0, r._)([(0, c.Cb)()], I.prototype, 'name', void 0),
        (0, r._)([(0, c.Cb)()], I.prototype, 'numComments', void 0),
        (0, r._)([(0, c.Cb)()], I.prototype, 'numRatings', void 0),
        (0, r._)([(0, c.Cb)()], I.prototype, 'numViews', void 0),
        (0, r._)([(0, c.Cb)()], I.prototype, 'owner', void 0),
        (0, r._)([(0, c.Cb)()], I.prototype, 'ownerFolder', void 0),
        (0, r._)([(0, c.Cb)({ type: g.Z })], I.prototype, 'portal', void 0),
        (0, r._)([(0, c.Cb)()], I.prototype, 'screenshots', void 0),
        (0, r._)([(0, c.Cb)()], I.prototype, 'size', void 0),
        (0, r._)([(0, c.Cb)()], I.prototype, 'snippet', void 0),
        (0, r._)([(0, c.Cb)()], I.prototype, 'sourceJSON', void 0),
        (0, r._)([(0, c.Cb)()], I.prototype, 'tags', void 0),
        (0, r._)([(0, c.Cb)()], I.prototype, 'thumbnail', void 0),
        (0, r._)(
          [(0, c.Cb)({ readOnly: !0 })],
          I.prototype,
          'thumbnailUrl',
          null,
        ),
        (0, r._)([(0, c.Cb)()], I.prototype, 'title', void 0),
        (0, r._)([(0, c.Cb)()], I.prototype, 'type', void 0),
        (0, r._)([(0, c.Cb)()], I.prototype, 'typeKeywords', void 0),
        (0, r._)([(0, c.Cb)()], I.prototype, 'url', void 0),
        (0, r._)(
          [(0, c.Cb)({ readOnly: !0 })],
          I.prototype,
          'userItemUrl',
          null,
        ),
        (I = S = (0, r._)([(0, m.j)('esri.portal.PortalItem')], I));
      const O = I;
    },
    99282: (e, t, i) => {
      i.d(t, { a: () => o });
      var r = i(67900),
        a = i(68441);
      const o = {
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
        'decimal-degrees': 1 / (0, r.ty)(1, 'meters', a.sv.radius),
      };
    },
    51706: (e, t, i) => {
      var r, a;
      function o(e) {
        return (
          e && 'esri.renderers.visualVariables.SizeVariable' === e.declaredClass
        );
      }
      function s(e) {
        return null != e && !isNaN(e) && isFinite(e);
      }
      function n(e) {
        return e.valueExpression
          ? r.Expression
          : e.field && 'string' == typeof e.field
          ? r.Field
          : r.Unknown;
      }
      function l(e, t) {
        const i = t || n(e),
          o = e.valueUnit || 'unknown';
        return i === r.Unknown
          ? a.Constant
          : e.stops
          ? a.Stops
          : null != e.minSize &&
            null != e.maxSize &&
            null != e.minDataValue &&
            null != e.maxDataValue
          ? a.ClampedLinear
          : 'unknown' === o
          ? null != e.minSize && null != e.minDataValue
            ? e.minSize && e.minDataValue
              ? a.Proportional
              : a.Additive
            : a.Identity
          : a.RealWorldSize;
      }
      i.d(t, {
        RY: () => r,
        hL: () => a,
        PS: () => n,
        QW: () => l,
        iY: () => o,
        qh: () => s,
      }),
        (function (e) {
          (e.Unknown = 'unknown'),
            (e.Expression = 'expression'),
            (e.Field = 'field');
        })(r || (r = {})),
        (function (e) {
          (e.Unknown = 'unknown'),
            (e.Stops = 'stops'),
            (e.ClampedLinear = 'clamped-linear'),
            (e.Proportional = 'proportional'),
            (e.Additive = 'additive'),
            (e.Constant = 'constant'),
            (e.Identity = 'identity'),
            (e.RealWorldSize = 'real-world-size');
        })(a || (a = {}));
    },
    28101: (e, t, i) => {
      i.d(t, {
        PR: () => x,
        Lq: () => m,
        Km: () => y,
        cM: () => g,
        ap: () => f,
        V3: () => w,
        B3: () => h,
      });
      var r = i(22303),
        a = i(38171),
        o = i(74085),
        s = i(92604),
        n = i(70586),
        l = i(99282),
        p = i(51706);
      const u = s.Z.getLogger(
          'esri.renderers.visualVariables.support.visualVariableUtils',
        ),
        c = new a.Z(),
        d = Math.PI,
        h = /^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i;
      function m(e, t, i) {
        const a =
          'visualVariables' in e && e.visualVariables
            ? e.visualVariables.find((e) => 'color' === e.type)
            : e;
        if (!a) return;
        if ('esri.renderers.visualVariables.ColorVariable' !== a.declaredClass)
          return void u.warn(
            'The visualVariable should be an instance of esri.renderers.visualVariables.ColorVariable',
          );
        const o = 'number' == typeof t,
          s = o ? null : t,
          l = s && s.attributes;
        let p = o ? t : null;
        const c = a.field,
          { ipData: d, hasExpression: h } = a.cache;
        let m = a.cache.compiledFunc;
        if (!c && !h) {
          const e = a.stops;
          return e && e[0] && e[0].color;
        }
        if ('number' != typeof p)
          if (h) {
            if (!(0, n.pC)(i) || !(0, n.pC)(i.arcade))
              return void u.error(
                'Use of arcade expressions requires an arcade context',
              );
            const e = {
                viewingMode: i.viewingMode,
                scale: i.scale,
                spatialReference: i.spatialReference,
              },
              t = i.arcade.arcadeUtils,
              r = t.getViewInfo(e),
              o = t.createExecContext(s, r);
            if (!m) {
              const e = t.createSyntaxTree(a.valueExpression);
              (m = t.createFunction(e)), (a.cache.compiledFunc = m);
            }
            p = t.executeFunction(m, o);
          } else l && (p = l[c]);
        const y = a.normalizationField,
          g = l ? parseFloat(l[y]) : void 0;
        if (null != p && (!y || o || (!isNaN(g) && 0 !== g))) {
          isNaN(g) || o || (p /= g);
          const e = C(p, d);
          if (e) {
            const t = e[0],
              o = e[1],
              s =
                t === o
                  ? a.stops[t].color
                  : r.Z.blendColors(
                      a.stops[t].color,
                      a.stops[o].color,
                      e[2],
                      (0, n.pC)(i) ? i.color : void 0,
                    );
            return new r.Z(s);
          }
        }
      }
      function y(e, t, i) {
        const r =
          'visualVariables' in e && e.visualVariables
            ? e.visualVariables.find((e) => 'opacity' === e.type)
            : e;
        if (!r) return;
        if (
          'esri.renderers.visualVariables.OpacityVariable' !== r.declaredClass
        )
          return void u.warn(
            'The visualVariable should be an instance of esri.renderers.visualVariables.OpacityVariable',
          );
        const a = 'number' == typeof t,
          o = a ? null : t,
          s = o && o.attributes;
        let l = a ? t : null;
        const p = r.field,
          { ipData: c, hasExpression: d } = r.cache;
        let h = r.cache.compiledFunc;
        if (!p && !d) {
          const e = r.stops;
          return e && e[0] && e[0].opacity;
        }
        if ('number' != typeof l)
          if (d) {
            if ((0, n.Wi)(i) || (0, n.Wi)(i.arcade))
              return void u.error(
                'Use of arcade expressions requires an arcade context',
              );
            const e = {
                viewingMode: i.viewingMode,
                scale: i.scale,
                spatialReference: i.spatialReference,
              },
              t = i.arcade.arcadeUtils,
              a = t.getViewInfo(e),
              s = t.createExecContext(o, a);
            if (!h) {
              const e = t.createSyntaxTree(r.valueExpression);
              (h = t.createFunction(e)), (r.cache.compiledFunc = h);
            }
            l = t.executeFunction(h, s);
          } else s && (l = s[p]);
        const m = r.normalizationField,
          y = s ? parseFloat(s[m]) : void 0;
        if (null != l && (!m || a || (!isNaN(y) && 0 !== y))) {
          isNaN(y) || a || (l /= y);
          const e = C(l, c);
          if (e) {
            const t = e[0],
              i = e[1];
            if (t === i) return r.stops[t].opacity;
            {
              const a = r.stops[t].opacity;
              return a + (r.stops[i].opacity - a) * e[2];
            }
          }
        }
      }
      function g(e, t, i) {
        const r =
          'visualVariables' in e && e.visualVariables
            ? e.visualVariables.find((e) => 'rotation' === e.type)
            : e;
        if (!r) return;
        if (
          'esri.renderers.visualVariables.RotationVariable' !== r.declaredClass
        )
          return void u.warn(
            'The visualVariable should be an instance of esri.renderers.visualVariables.RotationVariable',
          );
        const a = r.axis || 'heading',
          o = 'heading' === a && 'arithmetic' === r.rotationType ? 90 : 0,
          s = 'heading' === a && 'arithmetic' === r.rotationType ? -1 : 1,
          l = 'number' == typeof t ? null : t,
          p = l && l.attributes,
          c = r.field,
          { hasExpression: d } = r.cache;
        let h = r.cache.compiledFunc,
          m = 0;
        if (!c && !d) return m;
        if (d) {
          if ((0, n.Wi)(i) || (0, n.Wi)(i.arcade))
            return void u.error(
              'Use of arcade expressions requires an arcade context',
            );
          const e = {
              viewingMode: i.viewingMode,
              scale: i.scale,
              spatialReference: i.spatialReference,
            },
            t = i.arcade.arcadeUtils,
            a = t.getViewInfo(e),
            o = t.createExecContext(l, a);
          if (!h) {
            const e = t.createSyntaxTree(r.valueExpression);
            (h = t.createFunction(e)), (r.cache.compiledFunc = h);
          }
          m = t.executeFunction(h, o);
        } else p && (m = p[c] || 0);
        return (m = 'number' != typeof m || isNaN(m) ? null : o + s * m), m;
      }
      function f(e, t, i) {
        const r =
          'visualVariables' in e && e.visualVariables
            ? e.visualVariables.find((e) => 'size' === e.type)
            : e;
        if (!r) return;
        if ('esri.renderers.visualVariables.SizeVariable' !== r.declaredClass)
          return void u.warn(
            'The visualVariable should be an instance of esri.renderers.visualVariables.SizeVariable',
          );
        const a = (function (e, t, i, r, a) {
          switch (t.transformationType) {
            case p.hL.Additive:
              return (function (e, t, i, r) {
                return e + (b(t.minSize, i, r) || t.minDataValue);
              })(e, t, i, r);
            case p.hL.Constant:
              return (function (e, t, i) {
                const r = e.stops;
                let a = r && r.length && r[0].size;
                return null == a && (a = e.minSize), b(a, t, i);
              })(t, i, r);
            case p.hL.ClampedLinear:
              return (function (e, t, i, r) {
                const a =
                    (e - t.minDataValue) / (t.maxDataValue - t.minDataValue),
                  o = b(t.minSize, i, r),
                  s = b(t.maxSize, i, r),
                  l = (0, n.pC)(r) ? r.shape : void 0;
                if (e <= t.minDataValue) return o;
                if (e >= t.maxDataValue) return s;
                if ('area' === t.scaleBy && l) {
                  const e = 'circle' === l,
                    t = e ? d * (o / 2) ** 2 : o * o,
                    i = t + a * ((e ? d * (s / 2) ** 2 : s * s) - t);
                  return e ? 2 * Math.sqrt(i / d) : Math.sqrt(i);
                }
                return o + a * (s - o);
              })(e, t, i, r);
            case p.hL.Proportional:
              return (function (e, t, i, r) {
                const a = (0, n.pC)(r) ? r.shape : void 0,
                  o = e / t.minDataValue,
                  s = b(t.minSize, i, r),
                  l = b(t.maxSize, i, r);
                let p = null;
                return (
                  (p =
                    'circle' === a
                      ? 2 * Math.sqrt(o * (s / 2) ** 2)
                      : 'square' === a || 'diamond' === a || 'image' === a
                      ? Math.sqrt(o * s ** 2)
                      : o * s),
                  v(p, s, l)
                );
              })(e, t, i, r);
            case p.hL.Stops:
              return (function (e, t, i, r, a) {
                const [o, s, n] = C(e, a);
                if (o === s) return b(t.stops[o].size, i, r);
                {
                  const e = b(t.stops[o].size, i, r);
                  return e + (b(t.stops[s].size, i, r) - e) * n;
                }
              })(e, t, i, r, a);
            case p.hL.RealWorldSize:
              return (function (e, t, i, r) {
                const a =
                    ((0, n.pC)(r) && r.resolution ? r.resolution : 1) *
                    l.a[t.valueUnit],
                  o = b(t.minSize, i, r),
                  s = b(t.maxSize, i, r),
                  { valueRepresentation: p } = t;
                let u = null;
                return (
                  (u =
                    'area' === p
                      ? (2 * Math.sqrt(e / d)) / a
                      : 'radius' === p || 'distance' === p
                      ? (2 * e) / a
                      : e / a),
                  v(u, o, s)
                );
              })(e, t, i, r);
            case p.hL.Identity:
              return e;
            case p.hL.Unknown:
              return null;
          }
        })(
          (function (e, t, i) {
            const r = 'number' == typeof t,
              a = r ? null : t,
              o = a && a.attributes;
            let s = r ? t : null;
            const { isScaleDriven: l } = e.cache;
            let c = e.cache.compiledFunc;
            if (l) {
              const t = (0, n.pC)(i) ? i.scale : void 0,
                r = (0, n.pC)(i) ? i.view : void 0;
              s =
                null == t || '3d' === r
                  ? (function (e) {
                      let t = null,
                        i = null;
                      const r = e.stops;
                      return (
                        r
                          ? ((t = r[0].value), (i = r[r.length - 1].value))
                          : ((t = e.minDataValue || 0),
                            (i = e.maxDataValue || 0)),
                        (t + i) / 2
                      );
                    })(e)
                  : t;
            } else if (!r)
              switch (e.inputValueType) {
                case p.RY.Expression: {
                  if ((0, n.Wi)(i) || (0, n.Wi)(i.arcade))
                    return void u.error(
                      'Use of arcade expressions requires an arcade context',
                    );
                  const t = {
                      viewingMode: i.viewingMode,
                      scale: i.scale,
                      spatialReference: i.spatialReference,
                    },
                    r = i.arcade.arcadeUtils,
                    o = r.getViewInfo(t),
                    l = r.createExecContext(a, o);
                  if (!c) {
                    const t = r.createSyntaxTree(e.valueExpression);
                    (c = r.createFunction(t)), (e.cache.compiledFunc = c);
                  }
                  s = r.executeFunction(c, l);
                  break;
                }
                case p.RY.Field:
                  o && (s = o[e.field]);
                  break;
                case p.RY.Unknown:
                  s = null;
              }
            if (!(0, p.qh)(s)) return null;
            if (r || !e.normalizationField) return s;
            const d = o ? parseFloat(o[e.normalizationField]) : null;
            return (0, p.qh)(d) && 0 !== d ? s / d : null;
          })(r, t, i),
          r,
          t,
          i,
          r.cache.ipData,
        );
        return null == a || isNaN(a) ? 0 : a;
      }
      function b(e, t, i) {
        return null == e
          ? null
          : (0, p.iY)(e)
          ? f(e, t, i)
          : (0, p.qh)(e)
          ? e
          : null;
      }
      function v(e, t, i) {
        return (0, p.qh)(i) && e > i ? i : (0, p.qh)(t) && e < t ? t : e;
      }
      function w(e, t, i) {
        const { isScaleDriven: r } = e.cache;
        if (!((r && '3d' === i) || t)) return null;
        const a = { scale: t, view: i };
        let o = b(e.minSize, c, a),
          s = b(e.maxSize, c, a);
        if (null != o || null != s) {
          if (o > s) {
            const e = s;
            (s = o), (o = e);
          }
          return { minSize: o, maxSize: s };
        }
      }
      function C(e, t) {
        if (!t) return;
        let i = 0,
          r = t.length - 1;
        return (
          t.some((t, a) => (e < t ? ((r = a), !0) : ((i = a), !1))),
          [i, r, (e - t[i]) / (t[r] - t[i])]
        );
      }
      function x(e, t, i) {
        const r = ['proportional', 'proportional', 'proportional'];
        for (const a of e) {
          const e = a.useSymbolValue ? 'symbol-value' : f(a, t, i);
          switch (a.axis) {
            case 'width':
              r[0] = e;
              break;
            case 'depth':
              r[1] = e;
              break;
            case 'height':
              r[2] = e;
              break;
            case 'width-and-depth':
              (r[0] = e), (r[1] = e);
              break;
            case 'all':
            case void 0:
            case null:
              (r[0] = e), (r[1] = e), (r[2] = e);
              break;
            default:
              (0, o.Bg)(a.axis);
          }
        }
        return r;
      }
    },
  },
]);
