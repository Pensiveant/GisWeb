'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [4475],
  {
    38171: (e, t, r) => {
      r.d(t, { Z: () => y });
      var i = r(43697),
        s = r(66577),
        a = r(51773),
        n = r(78223),
        o = r(2368),
        l = r(96674),
        u = r(70586),
        c = r(99001),
        p = r(5600),
        d = (r(67676), r(80442), r(75215), r(52011)),
        h = r(33955);
      function m(e) {
        if (!(0, u.pC)(e)) return null;
        const t = {};
        for (const r in e) {
          const i = e[r];
          i && (t[r] = i.toJSON());
        }
        return 0 !== Object.keys(t).length ? t : null;
      }
      let f = class extends (0, o.J)(l.wq) {
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
                  const i = (0, h.im)(e[r]);
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
          [(0, p.Cb)({ value: null, types: s.qM, json: { read: h.im } })],
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
          [(0, p.Cb)({ type: a.Z })],
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
      const y = f;
    },
    74085: (e, t, r) => {
      function i(e) {}
      r.d(t, { Bg: () => i }), r(80442);
    },
    54295: (e, t, r) => {
      r.d(t, { V: () => n });
      var i = r(43697),
        s = r(5600),
        a = (r(67676), r(80442), r(75215), r(52011));
      const n = (e) => {
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
          (0, i._)([(0, s.Cb)({ type: String })], t.prototype, 'apiKey', null),
          (t = (0, i._)([(0, a.j)('esri.layers.mixins.APIKeyMixin')], t)),
          t
        );
      };
    },
    17287: (e, t, r) => {
      r.d(t, { Y: () => u });
      var i = r(43697),
        s = r(92604),
        a = r(70586),
        n = r(5600),
        o = (r(67676), r(80442), r(75215), r(52011)),
        l = r(66677);
      const u = (e) => {
        let t = class extends e {
          get title() {
            if (this._get('title') && 'defaults' !== this.originOf('title'))
              return this._get('title');
            if (this.url) {
              const e = (0, l.Qc)(this.url);
              if ((0, a.pC)(e) && e.title) return e.title;
            }
            return this._get('title') || '';
          }
          set title(e) {
            this._set('title', e);
          }
          set url(e) {
            this._set('url', (0, l.Nm)(e, s.Z.getLogger(this.declaredClass)));
          }
        };
        return (
          (0, i._)([(0, n.Cb)()], t.prototype, 'title', null),
          (0, i._)([(0, n.Cb)({ type: String })], t.prototype, 'url', null),
          (t = (0, i._)([(0, o.j)('esri.layers.mixins.ArcGISService')], t)),
          t
        );
      };
    },
    16859: (e, t, r) => {
      r.d(t, { I: () => w });
      var i = r(43697),
        s = r(40330),
        a = r(3172),
        n = r(66643),
        o = r(20102),
        l = r(92604),
        u = r(70586),
        c = r(95330),
        p = r(17452),
        d = r(5600),
        h = (r(67676), r(80442), r(75215), r(71715)),
        m = r(52011),
        f = r(30556),
        y = r(65587),
        v = r(15235),
        b = r(86082);
      const g = l.Z.getLogger('esri.layers.mixins.PortalLayer'),
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
                return new v.default({ id: t.itemId, portal: r && r.portal });
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
              const o = s.id.findServerInfo(this.url);
              if (null == o || !o.owningSystemUrl) return null;
              const l = `${o.owningSystemUrl}/sharing/rest`,
                c = y.Z.getDefault();
              if (c && c.loaded && (0, p.Fv)(c.restUrl) === (0, p.Fv)(l))
                return c.user;
              const d = `${l}/community/self`,
                h = (0, u.pC)(e) ? e.signal : null,
                m = await (0, n.q6)(
                  (0, a.default)(d, {
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
              const r = t && t.portal,
                i =
                  this.portalItem &&
                  this.portalItem.id &&
                  (this.portalItem.portal || y.Z.getDefault());
              return r && i && !(0, p.tm)(i.restUrl, r.restUrl)
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
              [(0, d.Cb)({ type: v.default })],
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
            (t = (0, i._)([(0, m.j)('esri.layers.mixins.PortalLayer')], t)),
            t
          );
        },
        _ = { credential: null, user: null };
    },
    70082: (e, t, r) => {
      r.d(t, { Z: () => p });
      var i = r(43697),
        s = r(2368),
        a = r(35454),
        n = r(96674),
        o = r(5600),
        l = (r(67676), r(80442), r(75215), r(52011));
      const u = new a.X({
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
      let c = class extends (0, s.J)(n.wq) {
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
        [(0, o.Cb)({ json: { write: !0 } })],
        c.prototype,
        'name',
        void 0,
      ),
        (0, i._)(
          [(0, o.Cb)({ json: { write: !0 } })],
          c.prototype,
          'description',
          void 0,
        ),
        (0, i._)(
          [(0, o.Cb)({ json: { read: u.read, write: u.write } })],
          c.prototype,
          'drawingTool',
          void 0,
        ),
        (0, i._)(
          [(0, o.Cb)({ json: { write: !0 } })],
          c.prototype,
          'prototype',
          void 0,
        ),
        (0, i._)(
          [(0, o.Cb)({ json: { write: !0 } })],
          c.prototype,
          'thumbnail',
          void 0,
        ),
        (c = (0, i._)([(0, l.j)('esri.layers.support.FeatureTemplate')], c));
      const p = c;
    },
    16451: (e, t, r) => {
      r.d(t, { Z: () => h });
      var i = r(43697),
        s = r(2368),
        a = r(96674),
        n = r(5600),
        o = (r(67676), r(80442), r(75215), r(71715)),
        l = r(52011),
        u = r(30556),
        c = r(72729),
        p = r(70082);
      let d = class extends (0, s.J)(a.wq) {
        constructor(e) {
          super(e),
            (this.id = null),
            (this.name = null),
            (this.domains = null),
            (this.templates = null);
        }
        readDomains(e) {
          const t = {};
          for (const r of Object.keys(e)) t[r] = (0, c.im)(e[r]);
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
      (0, i._)([(0, n.Cb)({ json: { write: !0 } })], d.prototype, 'id', void 0),
        (0, i._)(
          [(0, n.Cb)({ json: { write: !0 } })],
          d.prototype,
          'name',
          void 0,
        ),
        (0, i._)(
          [(0, n.Cb)({ json: { write: !0 } })],
          d.prototype,
          'domains',
          void 0,
        ),
        (0, i._)([(0, o.r)('domains')], d.prototype, 'readDomains', null),
        (0, i._)([(0, u.c)('domains')], d.prototype, 'writeDomains', null),
        (0, i._)(
          [(0, n.Cb)({ type: [p.Z], json: { write: !0 } })],
          d.prototype,
          'templates',
          void 0,
        ),
        (d = (0, i._)([(0, l.j)('esri.layers.support.FeatureType')], d));
      const h = d;
    },
    56765: (e, t, r) => {
      r.d(t, { Z: () => c });
      var i,
        s = r(43697),
        a = r(80539),
        n = r(96674),
        o = r(5600),
        l = (r(67676), r(80442), r(75215), r(52011));
      let u = (i = class extends n.wq {
        constructor(e) {
          super(e),
            (this.floorField = null),
            (this.viewAllMode = !1),
            (this.viewAllLevelIds = new a.Z());
        }
        clone() {
          return new i({
            floorField: this.floorField,
            viewAllMode: this.viewAllMode,
            viewAllLevelIds: this.viewAllLevelIds,
          });
        }
      });
      (0, s._)(
        [(0, o.Cb)({ type: String, json: { write: !0 } })],
        u.prototype,
        'floorField',
        void 0,
      ),
        (0, s._)(
          [(0, o.Cb)({ json: { read: !1, write: !1 } })],
          u.prototype,
          'viewAllMode',
          void 0,
        ),
        (0, s._)(
          [(0, o.Cb)({ json: { read: !1, write: !1 } })],
          u.prototype,
          'viewAllLevelIds',
          void 0,
        ),
        (u = i = (0, s._)([(0, l.j)('esri.layers.support.LayerFloorInfo')], u));
      const c = u;
    },
    99282: (e, t, r) => {
      r.d(t, { a: () => a });
      var i = r(67900),
        s = r(68441);
      const a = {
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
    51706: (e, t, r) => {
      var i, s;
      function a(e) {
        return (
          e && 'esri.renderers.visualVariables.SizeVariable' === e.declaredClass
        );
      }
      function n(e) {
        return null != e && !isNaN(e) && isFinite(e);
      }
      function o(e) {
        return e.valueExpression
          ? i.Expression
          : e.field && 'string' == typeof e.field
          ? i.Field
          : i.Unknown;
      }
      function l(e, t) {
        const r = t || o(e),
          a = e.valueUnit || 'unknown';
        return r === i.Unknown
          ? s.Constant
          : e.stops
          ? s.Stops
          : null != e.minSize &&
            null != e.maxSize &&
            null != e.minDataValue &&
            null != e.maxDataValue
          ? s.ClampedLinear
          : 'unknown' === a
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
        PS: () => o,
        QW: () => l,
        iY: () => a,
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
        PR: () => C,
        Lq: () => m,
        Km: () => f,
        cM: () => y,
        ap: () => v,
        V3: () => w,
        B3: () => h,
      });
      var i = r(22303),
        s = r(38171),
        a = r(74085),
        n = r(92604),
        o = r(70586),
        l = r(99282),
        u = r(51706);
      const c = n.Z.getLogger(
          'esri.renderers.visualVariables.support.visualVariableUtils',
        ),
        p = new s.Z(),
        d = Math.PI,
        h = /^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i;
      function m(e, t, r) {
        const s =
          'visualVariables' in e && e.visualVariables
            ? e.visualVariables.find((e) => 'color' === e.type)
            : e;
        if (!s) return;
        if ('esri.renderers.visualVariables.ColorVariable' !== s.declaredClass)
          return void c.warn(
            'The visualVariable should be an instance of esri.renderers.visualVariables.ColorVariable',
          );
        const a = 'number' == typeof t,
          n = a ? null : t,
          l = n && n.attributes;
        let u = a ? t : null;
        const p = s.field,
          { ipData: d, hasExpression: h } = s.cache;
        let m = s.cache.compiledFunc;
        if (!p && !h) {
          const e = s.stops;
          return e && e[0] && e[0].color;
        }
        if ('number' != typeof u)
          if (h) {
            if (!(0, o.pC)(r) || !(0, o.pC)(r.arcade))
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
              a = t.createExecContext(n, i);
            if (!m) {
              const e = t.createSyntaxTree(s.valueExpression);
              (m = t.createFunction(e)), (s.cache.compiledFunc = m);
            }
            u = t.executeFunction(m, a);
          } else l && (u = l[p]);
        const f = s.normalizationField,
          y = l ? parseFloat(l[f]) : void 0;
        if (null != u && (!f || a || (!isNaN(y) && 0 !== y))) {
          isNaN(y) || a || (u /= y);
          const e = _(u, d);
          if (e) {
            const t = e[0],
              a = e[1],
              n =
                t === a
                  ? s.stops[t].color
                  : i.Z.blendColors(
                      s.stops[t].color,
                      s.stops[a].color,
                      e[2],
                      (0, o.pC)(r) ? r.color : void 0,
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
          a = s ? null : t,
          n = a && a.attributes;
        let l = s ? t : null;
        const u = i.field,
          { ipData: p, hasExpression: d } = i.cache;
        let h = i.cache.compiledFunc;
        if (!u && !d) {
          const e = i.stops;
          return e && e[0] && e[0].opacity;
        }
        if ('number' != typeof l)
          if (d) {
            if ((0, o.Wi)(r) || (0, o.Wi)(r.arcade))
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
              n = t.createExecContext(a, s);
            if (!h) {
              const e = t.createSyntaxTree(i.valueExpression);
              (h = t.createFunction(e)), (i.cache.compiledFunc = h);
            }
            l = t.executeFunction(h, n);
          } else n && (l = n[u]);
        const m = i.normalizationField,
          f = n ? parseFloat(n[m]) : void 0;
        if (null != l && (!m || s || (!isNaN(f) && 0 !== f))) {
          isNaN(f) || s || (l /= f);
          const e = _(l, p);
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
      function y(e, t, r) {
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
          a = 'heading' === s && 'arithmetic' === i.rotationType ? 90 : 0,
          n = 'heading' === s && 'arithmetic' === i.rotationType ? -1 : 1,
          l = 'number' == typeof t ? null : t,
          u = l && l.attributes,
          p = i.field,
          { hasExpression: d } = i.cache;
        let h = i.cache.compiledFunc,
          m = 0;
        if (!p && !d) return m;
        if (d) {
          if ((0, o.Wi)(r) || (0, o.Wi)(r.arcade))
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
            a = t.createExecContext(l, s);
          if (!h) {
            const e = t.createSyntaxTree(i.valueExpression);
            (h = t.createFunction(e)), (i.cache.compiledFunc = h);
          }
          m = t.executeFunction(h, a);
        } else u && (m = u[p] || 0);
        return (m = 'number' != typeof m || isNaN(m) ? null : a + n * m), m;
      }
      function v(e, t, r) {
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
                return e + (b(t.minSize, r, i) || t.minDataValue);
              })(e, t, r, i);
            case u.hL.Constant:
              return (function (e, t, r) {
                const i = e.stops;
                let s = i && i.length && i[0].size;
                return null == s && (s = e.minSize), b(s, t, r);
              })(t, r, i);
            case u.hL.ClampedLinear:
              return (function (e, t, r, i) {
                const s =
                    (e - t.minDataValue) / (t.maxDataValue - t.minDataValue),
                  a = b(t.minSize, r, i),
                  n = b(t.maxSize, r, i),
                  l = (0, o.pC)(i) ? i.shape : void 0;
                if (e <= t.minDataValue) return a;
                if (e >= t.maxDataValue) return n;
                if ('area' === t.scaleBy && l) {
                  const e = 'circle' === l,
                    t = e ? d * (a / 2) ** 2 : a * a,
                    r = t + s * ((e ? d * (n / 2) ** 2 : n * n) - t);
                  return e ? 2 * Math.sqrt(r / d) : Math.sqrt(r);
                }
                return a + s * (n - a);
              })(e, t, r, i);
            case u.hL.Proportional:
              return (function (e, t, r, i) {
                const s = (0, o.pC)(i) ? i.shape : void 0,
                  a = e / t.minDataValue,
                  n = b(t.minSize, r, i),
                  l = b(t.maxSize, r, i);
                let u = null;
                return (
                  (u =
                    'circle' === s
                      ? 2 * Math.sqrt(a * (n / 2) ** 2)
                      : 'square' === s || 'diamond' === s || 'image' === s
                      ? Math.sqrt(a * n ** 2)
                      : a * n),
                  g(u, n, l)
                );
              })(e, t, r, i);
            case u.hL.Stops:
              return (function (e, t, r, i, s) {
                const [a, n, o] = _(e, s);
                if (a === n) return b(t.stops[a].size, r, i);
                {
                  const e = b(t.stops[a].size, r, i);
                  return e + (b(t.stops[n].size, r, i) - e) * o;
                }
              })(e, t, r, i, s);
            case u.hL.RealWorldSize:
              return (function (e, t, r, i) {
                const s =
                    ((0, o.pC)(i) && i.resolution ? i.resolution : 1) *
                    l.a[t.valueUnit],
                  a = b(t.minSize, r, i),
                  n = b(t.maxSize, r, i),
                  { valueRepresentation: u } = t;
                let c = null;
                return (
                  (c =
                    'area' === u
                      ? (2 * Math.sqrt(e / d)) / s
                      : 'radius' === u || 'distance' === u
                      ? (2 * e) / s
                      : e / s),
                  g(c, a, n)
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
              a = s && s.attributes;
            let n = i ? t : null;
            const { isScaleDriven: l } = e.cache;
            let p = e.cache.compiledFunc;
            if (l) {
              const t = (0, o.pC)(r) ? r.scale : void 0,
                i = (0, o.pC)(r) ? r.view : void 0;
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
                  if ((0, o.Wi)(r) || (0, o.Wi)(r.arcade))
                    return void c.error(
                      'Use of arcade expressions requires an arcade context',
                    );
                  const t = {
                      viewingMode: r.viewingMode,
                      scale: r.scale,
                      spatialReference: r.spatialReference,
                    },
                    i = r.arcade.arcadeUtils,
                    a = i.getViewInfo(t),
                    l = i.createExecContext(s, a);
                  if (!p) {
                    const t = i.createSyntaxTree(e.valueExpression);
                    (p = i.createFunction(t)), (e.cache.compiledFunc = p);
                  }
                  n = i.executeFunction(p, l);
                  break;
                }
                case u.RY.Field:
                  a && (n = a[e.field]);
                  break;
                case u.RY.Unknown:
                  n = null;
              }
            if (!(0, u.qh)(n)) return null;
            if (i || !e.normalizationField) return n;
            const d = a ? parseFloat(a[e.normalizationField]) : null;
            return (0, u.qh)(d) && 0 !== d ? n / d : null;
          })(i, t, r),
          i,
          t,
          r,
          i.cache.ipData,
        );
        return null == s || isNaN(s) ? 0 : s;
      }
      function b(e, t, r) {
        return null == e
          ? null
          : (0, u.iY)(e)
          ? v(e, t, r)
          : (0, u.qh)(e)
          ? e
          : null;
      }
      function g(e, t, r) {
        return (0, u.qh)(r) && e > r ? r : (0, u.qh)(t) && e < t ? t : e;
      }
      function w(e, t, r) {
        const { isScaleDriven: i } = e.cache;
        if (!((i && '3d' === r) || t)) return null;
        const s = { scale: t, view: r };
        let a = b(e.minSize, p, s),
          n = b(e.maxSize, p, s);
        if (null != a || null != n) {
          if (a > n) {
            const e = n;
            (n = a), (a = e);
          }
          return { minSize: a, maxSize: n };
        }
      }
      function _(e, t) {
        if (!t) return;
        let r = 0,
          i = t.length - 1;
        return (
          t.some((t, s) => (e < t ? ((i = s), !0) : ((r = s), !1))),
          [r, i, (e - t[r]) / (t[i] - t[r])]
        );
      }
      function C(e, t, r) {
        const i = ['proportional', 'proportional', 'proportional'];
        for (const s of e) {
          const e = s.useSymbolValue ? 'symbol-value' : v(s, t, r);
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
              (0, a.Bg)(s.axis);
          }
        }
        return i;
      }
    },
  },
]);
