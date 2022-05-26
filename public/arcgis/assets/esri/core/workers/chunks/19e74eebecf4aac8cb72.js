'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [5307],
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
        c = r(5600),
        d = (r(67676), r(80442), r(75215), r(52011)),
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
          (0, c.Cb)({
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
        (0, i._)([(0, c.Cb)({ value: null })], m.prototype, 'attributes', null),
        (0, i._)(
          [(0, c.Cb)({ value: null, types: s.qM, json: { read: h.im } })],
          m.prototype,
          'geometry',
          null,
        ),
        (0, i._)(
          [(0, c.Cb)({ type: Boolean })],
          m.prototype,
          'isAggregate',
          void 0,
        ),
        (0, i._)(
          [(0, c.Cb)({ clonable: 'reference' })],
          m.prototype,
          'layer',
          void 0,
        ),
        (0, i._)(
          [(0, c.Cb)({ type: n.Z })],
          m.prototype,
          'popupTemplate',
          void 0,
        ),
        (0, i._)(
          [(0, c.Cb)({ clonable: 'reference' })],
          m.prototype,
          'sourceLayer',
          void 0,
        ),
        (0, i._)(
          [(0, c.Cb)({ value: null, types: a.LB })],
          m.prototype,
          'symbol',
          null,
        ),
        (0, i._)(
          [(0, c.Cb)({ type: Boolean, value: !0 })],
          m.prototype,
          'visible',
          null,
        ),
        (m = (0, i._)([(0, d.j)('esri.Graphic')], m)),
        ((m || (m = {})).generateUID = p.D);
      const f = m;
    },
    74085: (e, t, r) => {
      function i(e) {}
      r.d(t, { Bg: () => i }), r(80442);
    },
    88387: (e, t, r) => {
      r.r(t), r.d(t, { default: () => K });
      var i,
        s = r(43697),
        n = (r(66577), r(51773)),
        a = (r(16050), r(12501), r(95088), r(79056), r(5499), r(84382)),
        o = r(30687),
        l = r(91423),
        u = r(32400),
        p = r(3172),
        c = r(78223),
        d = r(20102),
        h = r(92604),
        y = r(70586),
        m = r(16453),
        f = r(95330),
        b = r(5600),
        g = (r(67676), r(80442), r(75215)),
        v = r(71715),
        w = r(52011),
        C = r(63213),
        _ = r(86973),
        S = r(29600),
        I = r(17287),
        x = r(71612),
        V = r(17017),
        F = r(69637),
        T = r(38009),
        L = r(16859),
        E = r(34760),
        R = r(72965),
        k = r(28294),
        N = r(21506),
        z = r(55785),
        D = r(53518),
        P = r(35671),
        O = r(2319),
        U = r(30707),
        j = r(96674);
      let q = (i = class extends j.wq {
        constructor() {
          super(...arguments),
            (this.age = null),
            (this.ageReceived = null),
            (this.displayCount = null),
            (this.maxObservations = 1);
        }
        clone() {
          return new i({
            age: this.age,
            ageReceived: this.ageReceived,
            displayCount: this.displayCount,
            maxObservations: this.maxObservations,
          });
        }
      });
      (0, s._)(
        [(0, b.Cb)({ type: Number, json: { write: !0 } })],
        q.prototype,
        'age',
        void 0,
      ),
        (0, s._)(
          [(0, b.Cb)({ type: Number, json: { write: !0 } })],
          q.prototype,
          'ageReceived',
          void 0,
        ),
        (0, s._)(
          [(0, b.Cb)({ type: Number, json: { write: !0 } })],
          q.prototype,
          'displayCount',
          void 0,
        ),
        (0, s._)(
          [(0, b.Cb)({ type: Number, json: { write: !0 } })],
          q.prototype,
          'maxObservations',
          void 0,
        ),
        (q = i = (0, s._)([(0, w.j)('esri.layers.support.PurgeOptions')], q));
      const Z = q;
      var M = r(40555),
        A = r(57444),
        J = r(32163),
        G = r(20682),
        W = r(82971),
        Y = r(6570);
      const $ = h.Z.getLogger('esri.layers.StreamLayer'),
        B = (0, D.v)();
      let H = class extends (0, F.b)(
        (0, x.h)(
          (0, k.n)(
            (0, R.M)(
              (0, E.Q)((0, I.Y)((0, T.q)((0, L.I)((0, m.R)((0, V.N)(S.Z)))))),
            ),
          ),
        ),
      ) {
        constructor(...e) {
          super(...e),
            (this.copyright = null),
            (this.definitionExpression = null),
            (this.displayField = null),
            (this.elevationInfo = null),
            (this.featureReduction = null),
            (this.fields = null),
            (this.fieldsIndex = null),
            (this.geometryDefinition = null),
            (this.geometryType = null),
            (this.labelsVisible = !0),
            (this.labelingInfo = null),
            (this.legendEnabled = !0),
            (this.maxReconnectionAttempts = 0),
            (this.maxReconnectionInterval = 20),
            (this.maxScale = 0),
            (this.minScale = 0),
            (this.objectIdField = null),
            (this.operationalLayerType = 'ArcGISStreamLayer'),
            (this.popupEnabled = !0),
            (this.popupTemplate = null),
            (this.purgeOptions = new Z()),
            (this.screenSizePerspectiveEnabled = !0),
            (this.sourceJSON = null),
            (this.spatialReference = W.Z.WGS84),
            (this.type = 'stream'),
            (this.url = null),
            (this.updateInterval = 300),
            (this.webSocketUrl = null);
        }
        normalizeCtorArgs(e, t) {
          return 'string' == typeof e ? { url: e, ...t } : e;
        }
        load(e) {
          if (!('WebSocket' in globalThis))
            return (
              this.addResolvingPromise(
                Promise.reject(
                  new d.Z(
                    'stream-layer:websocket-unsupported',
                    'WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service.',
                  ),
                ),
              ),
              Promise.resolve(this)
            );
          const t = (0, y.pC)(e) ? e.signal : null;
          return (
            this.addResolvingPromise(
              this.loadFromPortal(
                { supportedTypes: ['Stream Service', 'Feed'] },
                e,
              )
                .catch(f.r9)
                .then(() => this._fetchService(t)),
            ),
            Promise.resolve(this)
          );
        }
        get defaultPopupTemplate() {
          return this.createPopupTemplate();
        }
        set renderer(e) {
          (0, P.YN)(e, this.fieldsIndex), this._set('renderer', e);
        }
        readRenderer(e, t, r) {
          const i =
            ((t = t.layerDefinition || t).drawingInfo &&
              t.drawingInfo.renderer) ||
            void 0;
          if (i) {
            const e = (0, l.a)(i, t, r) || void 0;
            return (
              e ||
                $.error('Failed to create renderer', {
                  rendererDefinition: t.drawingInfo.renderer,
                  layer: this,
                  context: r,
                }),
              e
            );
          }
          if (t.defaultSymbol)
            return t.types && t.types.length
              ? new o.Z({
                  defaultSymbol: Q(t.defaultSymbol, t, r),
                  field: t.typeIdField,
                  uniqueValueInfos: t.types.map((e) => ({
                    id: e.id,
                    symbol: Q(e.symbol, e, r),
                  })),
                })
              : new a.Z({ symbol: Q(t.defaultSymbol, t, r) });
        }
        createPopupTemplate(e) {
          return (0, J.eZ)(this, e);
        }
        createQuery() {
          const e = new A.Z();
          return (
            (e.returnGeometry = !0),
            (e.outFields = ['*']),
            (e.where = this.definitionExpression || '1=1'),
            e
          );
        }
        getFieldDomain(e, t) {
          if (!this.fields) return null;
          let r = null;
          return (
            this.fields.some((t) => (t.name === e && (r = t.domain), !!r)), r
          );
        }
        getField(e) {
          return this.fieldsIndex.get(e);
        }
        serviceSupportsSpatialReference(e) {
          return !0;
        }
        async _fetchService(e) {
          var t;
          if (this.webSocketUrl) {
            var r;
            if (null == (r = this.timeInfo) || !r.trackIdField)
              throw new d.Z(
                'stream-layer:missing-metadata',
                'The stream layer trackIdField must be specified.',
              );
            if (!this.objectIdField)
              throw new d.Z(
                'stream-layer:missing-metadata',
                'The stream layer objectIdField must be specified.',
              );
            if (!this.fields)
              throw new d.Z(
                'stream-layer:missing-metadata',
                'The stream layer fields must be specified.',
              );
            if (!this.geometryType)
              throw new d.Z(
                'stream-layer:missing-metadata',
                'The stream layer geometryType must be specified.',
              );
            this.url = this.webSocketUrl;
          } else if (!this.sourceJSON) {
            const { data: t } = await (0, p.default)(this.parsedUrl.path, {
              query: {
                f: 'json',
                ...this.customParameters,
                ...this.parsedUrl.query,
              },
              responseType: 'json',
              signal: e,
            });
            this.sourceJSON = t;
          }
          return (
            (this.sourceJSON = {
              ...(null != (t = this.sourceJSON) ? t : {}),
              objectIdField: '__esri_stream_id__',
            }),
            this.read(this.sourceJSON, {
              origin: 'service',
              url: this.parsedUrl,
            }),
            (0, P.YN)(this.renderer, this.fieldsIndex),
            (0, P.UF)(this.timeInfo, this.fieldsIndex),
            (0, M.y)(this, { origin: 'service' })
          );
        }
      };
      (0, s._)([(0, b.Cb)({ type: String })], H.prototype, 'copyright', void 0),
        (0, s._)(
          [(0, b.Cb)({ readOnly: !0 })],
          H.prototype,
          'defaultPopupTemplate',
          null,
        ),
        (0, s._)(
          [
            (0, b.Cb)({
              type: String,
              json: {
                name: 'layerDefinition.definitionExpression',
                write: { enabled: !0, allowNull: !0 },
              },
            }),
          ],
          H.prototype,
          'definitionExpression',
          void 0,
        ),
        (0, s._)(
          [(0, b.Cb)({ type: String })],
          H.prototype,
          'displayField',
          void 0,
        ),
        (0, s._)(
          [(0, b.Cb)({ type: G.Z })],
          H.prototype,
          'elevationInfo',
          void 0,
        ),
        (0, s._)([(0, b.Cb)(z.d)], H.prototype, 'featureReduction', void 0),
        (0, s._)([(0, b.Cb)(B.fields)], H.prototype, 'fields', void 0),
        (0, s._)(
          [(0, b.Cb)(B.fieldsIndex)],
          H.prototype,
          'fieldsIndex',
          void 0,
        ),
        (0, s._)(
          [(0, b.Cb)({ type: Y.Z })],
          H.prototype,
          'geometryDefinition',
          void 0,
        ),
        (0, s._)(
          [
            (0, b.Cb)({
              type: _.Mk.apiValues,
              json: { read: { reader: _.Mk.read } },
            }),
          ],
          H.prototype,
          'geometryType',
          void 0,
        ),
        (0, s._)([(0, b.Cb)(N.iR)], H.prototype, 'labelsVisible', void 0),
        (0, s._)(
          [
            (0, b.Cb)({
              type: [O.Z],
              json: {
                read: {
                  source: 'layerDefinition.drawingInfo.labelingInfo',
                  reader: U.r,
                },
                write: { target: 'layerDefinition.drawingInfo.labelingInfo' },
              },
            }),
          ],
          H.prototype,
          'labelingInfo',
          void 0,
        ),
        (0, s._)([(0, b.Cb)(N.rn)], H.prototype, 'legendEnabled', void 0),
        (0, s._)(
          [(0, b.Cb)({ type: ['show', 'hide'] })],
          H.prototype,
          'listMode',
          void 0,
        ),
        (0, s._)(
          [(0, b.Cb)({ type: g.z8 })],
          H.prototype,
          'maxReconnectionAttempts',
          void 0,
        ),
        (0, s._)(
          [(0, b.Cb)({ type: g.z8 })],
          H.prototype,
          'maxReconnectionInterval',
          void 0,
        ),
        (0, s._)([(0, b.Cb)(N.u1)], H.prototype, 'maxScale', void 0),
        (0, s._)([(0, b.Cb)(N.rO)], H.prototype, 'minScale', void 0),
        (0, s._)(
          [(0, b.Cb)({ type: String })],
          H.prototype,
          'objectIdField',
          void 0,
        ),
        (0, s._)(
          [
            (0, b.Cb)({
              value: 'ArcGISStreamLayer',
              type: ['ArcGISStreamLayer'],
            }),
          ],
          H.prototype,
          'operationalLayerType',
          void 0,
        ),
        (0, s._)([(0, b.Cb)(N.C_)], H.prototype, 'popupEnabled', void 0),
        (0, s._)(
          [
            (0, b.Cb)({
              type: n.Z,
              json: {
                read: { source: 'popupInfo' },
                write: { target: 'popupInfo' },
              },
            }),
          ],
          H.prototype,
          'popupTemplate',
          void 0,
        ),
        (0, s._)([(0, b.Cb)({ type: Z })], H.prototype, 'purgeOptions', void 0),
        (0, s._)(
          [
            (0, b.Cb)({
              types: u.A,
              json: {
                origins: {
                  service: {
                    write: { target: 'drawingInfo.renderer', enabled: !1 },
                  },
                  'web-scene': {
                    name: 'layerDefinition.drawingInfo.renderer',
                    types: u.o,
                    write: !0,
                  },
                },
                write: { target: 'layerDefinition.drawingInfo.renderer' },
              },
            }),
          ],
          H.prototype,
          'renderer',
          null,
        ),
        (0, s._)(
          [
            (0, v.r)('service', 'renderer', [
              'drawingInfo.renderer',
              'defaultSymbol',
            ]),
            (0, v.r)('renderer', [
              'layerDefinition.drawingInfo.renderer',
              'layerDefinition.defaultSymbol',
            ]),
          ],
          H.prototype,
          'readRenderer',
          null,
        ),
        (0, s._)(
          [(0, b.Cb)(N.YI)],
          H.prototype,
          'screenSizePerspectiveEnabled',
          void 0,
        ),
        (0, s._)([(0, b.Cb)()], H.prototype, 'sourceJSON', void 0),
        (0, s._)(
          [
            (0, b.Cb)({
              type: W.Z,
              json: {
                origins: { service: { read: { source: 'spatialReference' } } },
              },
            }),
          ],
          H.prototype,
          'spatialReference',
          void 0,
        ),
        (0, s._)(
          [(0, b.Cb)({ json: { read: !1 } })],
          H.prototype,
          'type',
          void 0,
        ),
        (0, s._)([(0, b.Cb)(N.HQ)], H.prototype, 'url', void 0),
        (0, s._)(
          [(0, b.Cb)({ type: Number })],
          H.prototype,
          'updateInterval',
          void 0,
        ),
        (0, s._)(
          [(0, b.Cb)({ type: String })],
          H.prototype,
          'webSocketUrl',
          void 0,
        ),
        (H = (0, s._)([(0, w.j)('esri.layers.StreamLayer')], H));
      const Q = (0, C.d)({ types: c.QT }),
        K = H;
    },
    17287: (e, t, r) => {
      r.d(t, { Y: () => u });
      var i = r(43697),
        s = r(92604),
        n = r(70586),
        a = r(5600),
        o = (r(67676), r(80442), r(75215), r(52011)),
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
            this._set('url', (0, l.Nm)(e, s.Z.getLogger(this.declaredClass)));
          }
        };
        return (
          (0, i._)([(0, a.Cb)()], t.prototype, 'title', null),
          (0, i._)([(0, a.Cb)({ type: String })], t.prototype, 'url', null),
          (t = (0, i._)([(0, o.j)('esri.layers.mixins.ArcGISService')], t)),
          t
        );
      };
    },
    16859: (e, t, r) => {
      r.d(t, { I: () => w });
      var i = r(43697),
        s = r(40330),
        n = r(3172),
        a = r(66643),
        o = r(20102),
        l = r(92604),
        u = r(70586),
        p = r(95330),
        c = r(17452),
        d = r(5600),
        h = (r(67676), r(80442), r(75215), r(71715)),
        y = r(52011),
        m = r(30556),
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
              const o = s.id.findServerInfo(this.url);
              if (null == o || !o.owningSystemUrl) return null;
              const l = `${o.owningSystemUrl}/sharing/rest`,
                p = f.Z.getDefault();
              if (p && p.loaded && (0, c.Fv)(p.restUrl) === (0, c.Fv)(l))
                return p.user;
              const d = `${l}/community/self`,
                h = (0, u.pC)(e) ? e.signal : null,
                y = await (0, a.q6)(
                  (0, n.default)(d, {
                    authMode: 'no-prompt',
                    query: { f: 'json' },
                    signal: h,
                  }),
                );
              return y.ok ? g.default.fromJSON(y.value.data) : null;
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
              [(0, d.Cb)({ type: b.default })],
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
            (t = (0, i._)([(0, y.j)('esri.layers.mixins.PortalLayer')], t)),
            t
          );
        },
        C = { credential: null, user: null };
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
    40555: (e, t, r) => {
      r.d(t, { y: () => a });
      var i = r(66643),
        s = r(95330),
        n = r(20941);
      async function a(e, t, r) {
        const a = e && e.getAtOrigin && e.getAtOrigin('renderer', t.origin);
        if (a && 'unique-value' === a.type && a.styleOrigin) {
          const o = await (0, i.q6)(a.populateFromStyle());
          if (((0, s.k_)(r), !1 === o.ok)) {
            const r = o.error;
            t &&
              t.messages &&
              t.messages.push(
                new n.Z(
                  'renderer:style-reference',
                  `Failed to create unique value renderer from style reference: ${r.message}`,
                  { error: r, context: t },
                ),
              ),
              e.clear('renderer', t.origin);
          }
        }
      }
    },
    51706: (e, t, r) => {
      var i, s;
      function n(e) {
        return (
          e && 'esri.renderers.visualVariables.SizeVariable' === e.declaredClass
        );
      }
      function a(e) {
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
          n = e.valueUnit || 'unknown';
        return r === i.Unknown
          ? s.Constant
          : e.stops
          ? s.Stops
          : null != e.minSize &&
            null != e.maxSize &&
            null != e.minDataValue &&
            null != e.maxDataValue
          ? s.ClampedLinear
          : 'unknown' === n
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
        })(s || (s = {}));
    },
    28101: (e, t, r) => {
      r.d(t, {
        PR: () => _,
        Lq: () => y,
        Km: () => m,
        cM: () => f,
        ap: () => b,
        V3: () => w,
        B3: () => h,
      });
      var i = r(22303),
        s = r(38171),
        n = r(74085),
        a = r(92604),
        o = r(70586),
        l = r(99282),
        u = r(51706);
      const p = a.Z.getLogger(
          'esri.renderers.visualVariables.support.visualVariableUtils',
        ),
        c = new s.Z(),
        d = Math.PI,
        h = /^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i;
      function y(e, t, r) {
        const s =
          'visualVariables' in e && e.visualVariables
            ? e.visualVariables.find((e) => 'color' === e.type)
            : e;
        if (!s) return;
        if ('esri.renderers.visualVariables.ColorVariable' !== s.declaredClass)
          return void p.warn(
            'The visualVariable should be an instance of esri.renderers.visualVariables.ColorVariable',
          );
        const n = 'number' == typeof t,
          a = n ? null : t,
          l = a && a.attributes;
        let u = n ? t : null;
        const c = s.field,
          { ipData: d, hasExpression: h } = s.cache;
        let y = s.cache.compiledFunc;
        if (!c && !h) {
          const e = s.stops;
          return e && e[0] && e[0].color;
        }
        if ('number' != typeof u)
          if (h) {
            if (!(0, o.pC)(r) || !(0, o.pC)(r.arcade))
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
            if (!y) {
              const e = t.createSyntaxTree(s.valueExpression);
              (y = t.createFunction(e)), (s.cache.compiledFunc = y);
            }
            u = t.executeFunction(y, n);
          } else l && (u = l[c]);
        const m = s.normalizationField,
          f = l ? parseFloat(l[m]) : void 0;
        if (null != u && (!m || n || (!isNaN(f) && 0 !== f))) {
          isNaN(f) || n || (u /= f);
          const e = C(u, d);
          if (e) {
            const t = e[0],
              n = e[1],
              a =
                t === n
                  ? s.stops[t].color
                  : i.Z.blendColors(
                      s.stops[t].color,
                      s.stops[n].color,
                      e[2],
                      (0, o.pC)(r) ? r.color : void 0,
                    );
            return new i.Z(a);
          }
        }
      }
      function m(e, t, r) {
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
        const s = 'number' == typeof t,
          n = s ? null : t,
          a = n && n.attributes;
        let l = s ? t : null;
        const u = i.field,
          { ipData: c, hasExpression: d } = i.cache;
        let h = i.cache.compiledFunc;
        if (!u && !d) {
          const e = i.stops;
          return e && e[0] && e[0].opacity;
        }
        if ('number' != typeof l)
          if (d) {
            if ((0, o.Wi)(r) || (0, o.Wi)(r.arcade))
              return void p.error(
                'Use of arcade expressions requires an arcade context',
              );
            const e = {
                viewingMode: r.viewingMode,
                scale: r.scale,
                spatialReference: r.spatialReference,
              },
              t = r.arcade.arcadeUtils,
              s = t.getViewInfo(e),
              a = t.createExecContext(n, s);
            if (!h) {
              const e = t.createSyntaxTree(i.valueExpression);
              (h = t.createFunction(e)), (i.cache.compiledFunc = h);
            }
            l = t.executeFunction(h, a);
          } else a && (l = a[u]);
        const y = i.normalizationField,
          m = a ? parseFloat(a[y]) : void 0;
        if (null != l && (!y || s || (!isNaN(m) && 0 !== m))) {
          isNaN(m) || s || (l /= m);
          const e = C(l, c);
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
        const s = i.axis || 'heading',
          n = 'heading' === s && 'arithmetic' === i.rotationType ? 90 : 0,
          a = 'heading' === s && 'arithmetic' === i.rotationType ? -1 : 1,
          l = 'number' == typeof t ? null : t,
          u = l && l.attributes,
          c = i.field,
          { hasExpression: d } = i.cache;
        let h = i.cache.compiledFunc,
          y = 0;
        if (!c && !d) return y;
        if (d) {
          if ((0, o.Wi)(r) || (0, o.Wi)(r.arcade))
            return void p.error(
              'Use of arcade expressions requires an arcade context',
            );
          const e = {
              viewingMode: r.viewingMode,
              scale: r.scale,
              spatialReference: r.spatialReference,
            },
            t = r.arcade.arcadeUtils,
            s = t.getViewInfo(e),
            n = t.createExecContext(l, s);
          if (!h) {
            const e = t.createSyntaxTree(i.valueExpression);
            (h = t.createFunction(e)), (i.cache.compiledFunc = h);
          }
          y = t.executeFunction(h, n);
        } else u && (y = u[c] || 0);
        return (y = 'number' != typeof y || isNaN(y) ? null : n + a * y), y;
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
                  n = g(t.minSize, r, i),
                  a = g(t.maxSize, r, i),
                  l = (0, o.pC)(i) ? i.shape : void 0;
                if (e <= t.minDataValue) return n;
                if (e >= t.maxDataValue) return a;
                if ('area' === t.scaleBy && l) {
                  const e = 'circle' === l,
                    t = e ? d * (n / 2) ** 2 : n * n,
                    r = t + s * ((e ? d * (a / 2) ** 2 : a * a) - t);
                  return e ? 2 * Math.sqrt(r / d) : Math.sqrt(r);
                }
                return n + s * (a - n);
              })(e, t, r, i);
            case u.hL.Proportional:
              return (function (e, t, r, i) {
                const s = (0, o.pC)(i) ? i.shape : void 0,
                  n = e / t.minDataValue,
                  a = g(t.minSize, r, i),
                  l = g(t.maxSize, r, i);
                let u = null;
                return (
                  (u =
                    'circle' === s
                      ? 2 * Math.sqrt(n * (a / 2) ** 2)
                      : 'square' === s || 'diamond' === s || 'image' === s
                      ? Math.sqrt(n * a ** 2)
                      : n * a),
                  v(u, a, l)
                );
              })(e, t, r, i);
            case u.hL.Stops:
              return (function (e, t, r, i, s) {
                const [n, a, o] = C(e, s);
                if (n === a) return g(t.stops[n].size, r, i);
                {
                  const e = g(t.stops[n].size, r, i);
                  return e + (g(t.stops[a].size, r, i) - e) * o;
                }
              })(e, t, r, i, s);
            case u.hL.RealWorldSize:
              return (function (e, t, r, i) {
                const s =
                    ((0, o.pC)(i) && i.resolution ? i.resolution : 1) *
                    l.a[t.valueUnit],
                  n = g(t.minSize, r, i),
                  a = g(t.maxSize, r, i),
                  { valueRepresentation: u } = t;
                let p = null;
                return (
                  (p =
                    'area' === u
                      ? (2 * Math.sqrt(e / d)) / s
                      : 'radius' === u || 'distance' === u
                      ? (2 * e) / s
                      : e / s),
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
              s = i ? null : t,
              n = s && s.attributes;
            let a = i ? t : null;
            const { isScaleDriven: l } = e.cache;
            let c = e.cache.compiledFunc;
            if (l) {
              const t = (0, o.pC)(r) ? r.scale : void 0,
                i = (0, o.pC)(r) ? r.view : void 0;
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
                  if ((0, o.Wi)(r) || (0, o.Wi)(r.arcade))
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
                    l = i.createExecContext(s, n);
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
            const d = n ? parseFloat(n[e.normalizationField]) : null;
            return (0, u.qh)(d) && 0 !== d ? a / d : null;
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
      function w(e, t, r) {
        const { isScaleDriven: i } = e.cache;
        if (!((i && '3d' === r) || t)) return null;
        const s = { scale: t, view: r };
        let n = g(e.minSize, c, s),
          a = g(e.maxSize, c, s);
        if (null != n || null != a) {
          if (n > a) {
            const e = a;
            (a = n), (n = e);
          }
          return { minSize: n, maxSize: a };
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
      function _(e, t, r) {
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
              (0, n.Bg)(s.axis);
          }
        }
        return i;
      }
    },
  },
]);
