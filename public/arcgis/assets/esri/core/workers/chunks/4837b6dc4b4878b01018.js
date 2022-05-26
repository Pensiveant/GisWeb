'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [5318],
  {
    38171: (e, t, r) => {
      r.d(t, { Z: () => f });
      var i = r(43697),
        s = r(66577),
        o = r(51773),
        n = r(78223),
        a = r(2368),
        l = r(96674),
        u = r(70586),
        p = r(99001),
        c = r(5600),
        d = (r(67676), r(80442), r(75215), r(52011)),
        y = r(33955);
      function m(e) {
        if (!(0, u.pC)(e)) return null;
        const t = {};
        for (const r in e) {
          const i = e[r];
          i && (t[r] = i.toJSON());
        }
        return 0 !== Object.keys(t).length ? t : null;
      }
      let h = class extends (0, a.J)(l.wq) {
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
          (0, c.Cb)({
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
        h.prototype,
        'aggregateGeometries',
        null,
      ),
        (0, i._)([(0, c.Cb)({ value: null })], h.prototype, 'attributes', null),
        (0, i._)(
          [(0, c.Cb)({ value: null, types: s.qM, json: { read: y.im } })],
          h.prototype,
          'geometry',
          null,
        ),
        (0, i._)(
          [(0, c.Cb)({ type: Boolean })],
          h.prototype,
          'isAggregate',
          void 0,
        ),
        (0, i._)(
          [(0, c.Cb)({ clonable: 'reference' })],
          h.prototype,
          'layer',
          void 0,
        ),
        (0, i._)(
          [(0, c.Cb)({ type: o.Z })],
          h.prototype,
          'popupTemplate',
          void 0,
        ),
        (0, i._)(
          [(0, c.Cb)({ clonable: 'reference' })],
          h.prototype,
          'sourceLayer',
          void 0,
        ),
        (0, i._)(
          [(0, c.Cb)({ value: null, types: n.LB })],
          h.prototype,
          'symbol',
          null,
        ),
        (0, i._)(
          [(0, c.Cb)({ type: Boolean, value: !0 })],
          h.prototype,
          'visible',
          null,
        ),
        (h = (0, i._)([(0, d.j)('esri.Graphic')], h)),
        ((h || (h = {})).generateUID = p.D);
      const f = h;
    },
    28263: (e, t, r) => {
      r.d(t, { E: () => s });
      class i {
        constructor(e = {}) {
          this._options = e;
        }
        toQueryParams(e) {
          if (!e) return null;
          const t = e.toJSON(),
            r = {};
          return (
            Object.keys(t).forEach((e) => {
              const i = this._options[e];
              if (i) {
                const s = 'boolean' != typeof i && i.name ? i.name : e,
                  o = 'boolean' != typeof i && i.getter ? i.getter(t) : t[e];
                null != o &&
                  (r[s] = ((e) => {
                    if (!Array.isArray(e)) return !1;
                    const [t] = e;
                    return 'number' == typeof t || 'string' == typeof t;
                  })(o)
                    ? o.join(',')
                    : 'object' == typeof o
                    ? JSON.stringify(o)
                    : o);
              } else r[e] = t[e];
            }, this),
            r
          );
        }
      }
      function s(e) {
        return new i(e);
      }
    },
    91040: (e, t, r) => {
      r.d(t, { yZ: () => s });
      var i = r(67900);
      function s(e, t) {
        const r = t || e.extent,
          s = e.width,
          o = (0, i.c9)(r && r.spatialReference);
        return r && s ? (r.width / s) * o * i.hd * 96 : 0;
      }
    },
    93924: (e, t, r) => {
      r.d(t, { et: () => b, ef: () => v, bI: () => w, Wf: () => N });
      var i = r(3172),
        s = r(20102),
        o = r(70586),
        n = r(78286),
        a = r(17452),
        l = r(11282),
        u = r(43697),
        p = r(96674),
        c = r(5600),
        d = (r(67676), r(80442), r(75215), r(36030)),
        y = r(52011),
        m = r(49352),
        h = r(49827);
      let f = class extends p.wq {
        constructor(e) {
          super(e),
            (this.accumulateAttributeNames = null),
            (this.currentVersion = null),
            (this.defaultTravelMode = null),
            (this.directionsLanguage = null),
            (this.directionsLengthUnits = null),
            (this.directionsSupportedLanguages = null),
            (this.directionsTimeAttribute = null),
            (this.hasZ = null),
            (this.impedance = null),
            (this.networkDataset = null),
            (this.supportedTravelModes = null);
        }
      };
      (0, u._)([(0, c.Cb)()], f.prototype, 'accumulateAttributeNames', void 0),
        (0, u._)([(0, c.Cb)()], f.prototype, 'currentVersion', void 0),
        (0, u._)([(0, c.Cb)()], f.prototype, 'defaultTravelMode', void 0),
        (0, u._)([(0, c.Cb)()], f.prototype, 'directionsLanguage', void 0),
        (0, u._)(
          [(0, d.J)(m.GX)],
          f.prototype,
          'directionsLengthUnits',
          void 0,
        ),
        (0, u._)(
          [(0, c.Cb)()],
          f.prototype,
          'directionsSupportedLanguages',
          void 0,
        ),
        (0, u._)([(0, c.Cb)()], f.prototype, 'directionsTimeAttribute', void 0),
        (0, u._)([(0, c.Cb)()], f.prototype, 'hasZ', void 0),
        (0, u._)([(0, c.Cb)()], f.prototype, 'impedance', void 0),
        (0, u._)([(0, c.Cb)()], f.prototype, 'networkDataset', void 0),
        (0, u._)(
          [(0, c.Cb)({ type: [h.Z] })],
          f.prototype,
          'supportedTravelModes',
          void 0,
        ),
        (f = (0, u._)(
          [(0, y.j)('esri.rest.support.NetworkServiceDescription')],
          f,
        ));
      const g = f;
      function b(e, t, r, i) {
        (i[r] = [t.length, t.length + e.length]),
          e.forEach((e) => {
            t.push(e.geometry);
          });
      }
      function v(e, t) {
        for (let r = 0; r < t.length; r++) {
          const i = e[t[r]];
          if (i && i.length) for (const e of i) e.z = void 0;
        }
        console.log(
          'The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.',
        );
      }
      function N(e, t) {
        for (let r = 0; r < t.length; r++) {
          const i = e[t[r]];
          if (i && i.length)
            for (const e of i) if ((0, o.pC)(e) && e.hasZ) return !0;
        }
        return !1;
      }
      async function w(e, t, r) {
        if (!e)
          throw new s.Z(
            'network-service:missing-url',
            'Url to Network service is missing',
          );
        const o = (0, l.lA)({ f: 'json', token: t }, r),
          { data: u } = await (0, i.default)(e, o);
        u.supportedTravelModes || (u.supportedTravelModes = []);
        for (let e = 0; e < u.supportedTravelModes.length; e++)
          u.supportedTravelModes[e].id ||
            (u.supportedTravelModes[e].id = u.supportedTravelModes[e].itemId);
        const p =
            u.currentVersion >= 10.4
              ? (async function (e, t, r) {
                  try {
                    const s = (0, l.lA)({ f: 'json', token: t }, r),
                      o = (0, a.Qj)(e) + '/retrieveTravelModes',
                      {
                        data: { supportedTravelModes: n, defaultTravelMode: u },
                      } = await (0, i.default)(o, s);
                    return { supportedTravelModes: n, defaultTravelMode: u };
                  } catch (e) {
                    throw new s.Z(
                      'network-service:retrieveTravelModes',
                      "Could not get to the NAServer's retrieveTravelModes.",
                      { error: e },
                    );
                  }
                })(e, t, r)
              : (async function (e, t) {
                  var r, s;
                  const o = (0, l.lA)({ f: 'json' }, t),
                    { data: u } = await (0, i.default)(
                      e.replace(/\/rest\/.*$/i, '/info'),
                      o,
                    );
                  if (!u || !u.owningSystemUrl)
                    return {
                      supportedTravelModes: [],
                      defaultTravelMode: null,
                    };
                  const { owningSystemUrl: p } = u,
                    c = (0, a.Qj)(p) + '/sharing/rest/portals/self',
                    { data: d } = await (0, i.default)(c, o),
                    y = (0, n.hS)('helperServices.routingUtilities.url', d);
                  if (!y)
                    return {
                      supportedTravelModes: [],
                      defaultTravelMode: null,
                    };
                  const m = (0, l.en)(p),
                    h = /\/solve$/i.test(m.path)
                      ? 'Route'
                      : /\/solveclosestfacility$/i.test(m.path)
                      ? 'ClosestFacility'
                      : 'ServiceAreas',
                    f = (0, l.lA)({ f: 'json', serviceName: h }, t),
                    g = (0, a.Qj)(y) + '/GetTravelModes/execute',
                    b = await (0, i.default)(g, f),
                    v = [];
                  let N = null;
                  if (
                    null != b &&
                    null != (r = b.data) &&
                    null != (s = r.results) &&
                    s.length
                  ) {
                    const e = b.data.results;
                    for (const t of e) {
                      var w;
                      if ('supportedTravelModes' === t.paramName) {
                        if (null != (w = t.value) && w.features)
                          for (const { attributes: e } of t.value.features)
                            if (e) {
                              const t = JSON.parse(e.TravelMode);
                              v.push(t);
                            }
                      } else
                        'defaultTravelMode' === t.paramName && (N = t.value);
                    }
                  }
                  return { supportedTravelModes: v, defaultTravelMode: N };
                })(e, r),
          { defaultTravelMode: c, supportedTravelModes: d } = await p;
        return (
          (u.defaultTravelMode = c), (u.supportedTravelModes = d), g.fromJSON(u)
        );
      }
    },
    51623: (e, t, r) => {
      r.d(t, { Z: () => p });
      var i = r(43697),
        s = r(35454),
        o = r(96674),
        n = r(5600),
        a = (r(67676), r(80442), r(75215), r(52011));
      const l = new s.X({
        esriJobMessageTypeInformative: 'informative',
        esriJobMessageTypeProcessDefinition: 'process-definition',
        esriJobMessageTypeProcessStart: 'process-start',
        esriJobMessageTypeProcessStop: 'process-stop',
        esriJobMessageTypeWarning: 'warning',
        esriJobMessageTypeError: 'error',
        esriJobMessageTypeEmpty: 'empty',
        esriJobMessageTypeAbort: 'abort',
      });
      let u = class extends o.wq {
        constructor(e) {
          super(e), (this.description = null), (this.type = null);
        }
      };
      (0, i._)(
        [(0, n.Cb)({ type: String, json: { write: !0 } })],
        u.prototype,
        'description',
        void 0,
      ),
        (0, i._)(
          [(0, n.Cb)({ type: String, json: { read: l.read, write: l.write } })],
          u.prototype,
          'type',
          void 0,
        ),
        (u = (0, i._)([(0, a.j)('esri.rest.support.GPMessage')], u));
      const p = u;
    },
    79166: (e, t, r) => {
      r.d(t, { Z: () => p });
      var i = r(43697),
        s = r(35454),
        o = r(5600),
        n = (r(67676), r(80442), r(75215), r(52011)),
        a = r(51623);
      const l = new s.X({
        0: 'informative',
        1: 'process-definition',
        2: 'process-start',
        3: 'process-stop',
        50: 'warning',
        100: 'error',
        101: 'empty',
        200: 'abort',
      });
      let u = class extends a.Z {
        constructor(e) {
          super(e), (this.type = null);
        }
      };
      (0, i._)(
        [(0, o.Cb)({ type: String, json: { read: l.read, write: l.write } })],
        u.prototype,
        'type',
        void 0,
      ),
        (u = (0, i._)([(0, n.j)('esri.rest.support.NAMessage')], u));
      const p = u;
    },
    49827: (e, t, r) => {
      r.d(t, { Z: () => d });
      var i,
        s = r(43697),
        o = r(96674),
        n = r(22974),
        a = r(5600),
        l = (r(75215), r(36030)),
        u = r(52011),
        p = r(49352);
      let c = (i = class extends o.wq {
        constructor(e) {
          super(e),
            (this.attributeParameterValues = null),
            (this.description = null),
            (this.distanceAttributeName = null),
            (this.id = null),
            (this.impedanceAttributeName = null),
            (this.name = null),
            (this.restrictionAttributeNames = null),
            (this.simplificationTolerance = null),
            (this.simplificationToleranceUnits = null),
            (this.timeAttributeName = null),
            (this.type = null),
            (this.useHierarchy = null),
            (this.uturnAtJunctions = null);
        }
        clone() {
          return new i(
            (0, n.d9)({
              attributeParameterValues: this.attributeParameterValues,
              description: this.description,
              distanceAttributeName: this.distanceAttributeName,
              id: this.id,
              impedanceAttributeName: this.impedanceAttributeName,
              name: this.name,
              restrictionAttributeNames: this.restrictionAttributeNames,
              simplificationTolerance: this.simplificationTolerance,
              simplificationToleranceUnits: this.simplificationToleranceUnits,
              timeAttributeName: this.timeAttributeName,
              type: this.type,
              useHierarchy: this.useHierarchy,
              uturnAtJunctions: this.uturnAtJunctions,
            }),
          );
        }
      });
      (0, s._)(
        [(0, a.Cb)({ type: [Object], json: { write: !0 } })],
        c.prototype,
        'attributeParameterValues',
        void 0,
      ),
        (0, s._)(
          [(0, a.Cb)({ type: String, json: { write: !0 } })],
          c.prototype,
          'description',
          void 0,
        ),
        (0, s._)(
          [(0, a.Cb)({ type: String, json: { write: !0 } })],
          c.prototype,
          'distanceAttributeName',
          void 0,
        ),
        (0, s._)(
          [(0, a.Cb)({ type: String, json: { write: !0 } })],
          c.prototype,
          'id',
          void 0,
        ),
        (0, s._)(
          [(0, a.Cb)({ type: String, json: { write: !0 } })],
          c.prototype,
          'impedanceAttributeName',
          void 0,
        ),
        (0, s._)(
          [(0, a.Cb)({ type: String, json: { write: !0 } })],
          c.prototype,
          'name',
          void 0,
        ),
        (0, s._)(
          [(0, a.Cb)({ type: [String], json: { write: !0 } })],
          c.prototype,
          'restrictionAttributeNames',
          void 0,
        ),
        (0, s._)(
          [(0, a.Cb)({ type: Number, json: { write: { allowNull: !0 } } })],
          c.prototype,
          'simplificationTolerance',
          void 0,
        ),
        (0, s._)(
          [(0, l.J)(p.q$)],
          c.prototype,
          'simplificationToleranceUnits',
          void 0,
        ),
        (0, s._)(
          [(0, a.Cb)({ type: String, json: { write: !0 } })],
          c.prototype,
          'timeAttributeName',
          void 0,
        ),
        (0, s._)([(0, l.J)(p.DJ)], c.prototype, 'type', void 0),
        (0, s._)(
          [(0, a.Cb)({ type: Boolean, json: { write: !0 } })],
          c.prototype,
          'useHierarchy',
          void 0,
        ),
        (0, s._)([(0, l.J)(p.ip)], c.prototype, 'uturnAtJunctions', void 0),
        (c = i = (0, s._)([(0, u.j)('esri.rest.support.TravelMode')], c));
      const d = c;
    },
    49352: (e, t, r) => {
      r.d(t, {
        oi: () => h,
        W7: () => c,
        td: () => b,
        cW: () => g,
        GX: () => o,
        $7: () => a,
        hB: () => n,
        Dd: () => f,
        q$: () => s,
        yP: () => d,
        no: () => l,
        ip: () => u,
        BW: () => m,
        SS: () => y,
        DJ: () => p,
      });
      var i = r(35454);
      const s = (0, i.w)()({
          esriCentimeters: 'centimeters',
          esriDecimalDegrees: 'decimal-degrees',
          esriDecimeters: 'decimeters',
          esriFeet: 'feet',
          esriInches: 'inches',
          esriKilometers: 'kilometers',
          esriMeters: 'meters',
          esriMiles: 'miles',
          esriMillimeters: 'millimeters',
          esriNauticalMiles: 'nautical-miles',
          esriPoints: 'points',
          esriUnknownUnits: 'unknown',
          esriYards: 'yards',
        }),
        o = (0, i.w)()({
          esriNAUCentimeters: 'centimeters',
          esriNAUDecimalDegrees: 'decimal-degrees',
          esriNAUDecimeters: 'decimeters',
          esriNAUFeet: 'feet',
          esriNAUInches: 'inches',
          esriNAUKilometers: 'kilometers',
          esriNAUMeters: 'meters',
          esriNAUMiles: 'miles',
          esriNAUMillimeters: 'millimeters',
          esriNAUNauticalMiles: 'nautical-miles',
          esriNAUPoints: 'points',
          esriNAUYards: 'yards',
        }),
        n = (0, i.w)()({
          esriNAUDays: 'days',
          esriNAUHours: 'hours',
          esriNAUMinutes: 'minutes',
          esriNAUSeconds: 'seconds',
        }),
        a = (0, i.w)()({
          esriDOTComplete: 'complete',
          esriDOTCompleteNoEvents: 'complete-no-events',
          esriDOTFeatureSets: 'featuresets',
          esriDOTInstructionsOnly: 'instructions-only',
          esriDOTStandard: 'standard',
          esriDOTSummaryOnly: 'summary-only',
        }),
        l = (0, i.w)()({
          esriNAOutputLineNone: 'none',
          esriNAOutputLineStraight: 'straight',
          esriNAOutputLineTrueShape: 'true-shape',
          esriNAOutputLineTrueShapeWithMeasure: 'true-shape-with-measure',
        }),
        u =
          ((0, i.w)()({
            esriNAOutputPolygonNone: 'none',
            esriNAOutputPolygonSimplified: 'simplified',
            esriNAOutputPolygonDetailed: 'detailed',
          }),
          (0, i.w)()({
            esriNFSBAllowBacktrack: 'allow-backtrack',
            esriNFSBAtDeadEndsOnly: 'at-dead-ends-only',
            esriNFSBNoBacktrack: 'no-backtrack',
            esriNFSBAtDeadEndsAndIntersections:
              'at-dead-ends-and-intersections',
          })),
        p =
          ((0, i.w)()({
            esriNATravelDirectionFromFacility: 'from-facility',
            esriNATravelDirectionToFacility: 'to-facility',
          }),
          (0, i.w)()({
            esriNATimeOfDayNotUsed: 'not-used',
            esriNATimeOfDayUseAsStartTime: 'start',
            esriNATimeOfDayUseAsEndTime: 'end',
          }),
          (0, i.w)()({
            AUTOMOBILE: 'automobile',
            TRUCK: 'truck',
            WALK: 'walk',
            OTHER: 'other',
          })),
        c = (0, i.w)()(
          {
            0: 'either-side-of-vehicle',
            1: 'right-side-of-vehicle',
            2: 'left-side-of-vehicle',
            3: 'no-u-turn',
          },
          { useNumericKeys: !0 },
        ),
        d = (0, i.w)()(
          { 0: 'stop', 1: 'waypoint', 2: 'break' },
          { useNumericKeys: !0 },
        ),
        y = (0, i.w)()(
          {
            0: 'ok',
            1: 'not-located',
            2: 'network-element-not-located',
            3: 'element-not-traversable',
            4: 'invalid-field-values',
            5: 'not-reached',
            6: 'time-window-violation',
            7: 'not-located-on-closest',
          },
          { useNumericKeys: !0 },
        ),
        m = (0, i.w)()({ 1: 'right', 2: 'left' }, { useNumericKeys: !0 }),
        h = (0, i.w)()(
          { 0: 'restriction', 1: 'added-cost' },
          { useNumericKeys: !0 },
        ),
        f = (0, i.w)()({ 0: 'permit', 1: 'restrict' }, { useNumericKeys: !0 }),
        g = (0, i.w)()(
          {
            1: 'header',
            50: 'arrive',
            51: 'depart',
            52: 'straight',
            100: 'on-ferry',
            101: 'off-ferry',
            102: 'central-fork',
            103: 'roundabout',
            104: 'u-turn',
            150: 'door',
            151: 'stairs',
            152: 'elevator',
            153: 'escalator',
            154: 'pedestrian-ramp',
            200: 'left-fork',
            201: 'left-ramp',
            202: 'clockwise-roundabout',
            203: 'left-handed-u-turn',
            204: 'bear-left',
            205: 'left-turn',
            206: 'sharp-left',
            207: 'left-turn-and-immediate-left-turn',
            208: 'left-turn-and-immediate-right-turn',
            300: 'right-fork',
            301: 'right-ramp',
            302: 'counter-clockwise-roundabout',
            303: 'right-handed-u-turn',
            304: 'bear-right',
            305: 'right-turn',
            306: 'sharp-right',
            307: 'right-turn-and-immediate-left-turn',
            308: 'right-turn-and-immediate-right-turn',
            400: 'up-elevator',
            401: 'up-escalator',
            402: 'up-stairs',
            500: 'down-elevator',
            501: 'down-escalator',
            502: 'down-stairs',
            1e3: 'general-event',
            1001: 'landmark',
            1002: 'time-zone-change',
            1003: 'traffic-event',
            1004: 'scaled-cost-barrier-event',
            1005: 'boundary-crossing',
            1006: 'restriction-violation',
          },
          { useNumericKeys: !0 },
        ),
        b = (0, i.w)()(
          {
            0: 'unknown',
            1: 'segment',
            2: 'maneuver-segment',
            3: 'restriction-violation',
            4: 'scaled-cost-barrier',
            5: 'heavy-traffic',
            6: 'slow-traffic',
            7: 'moderate-traffic',
          },
          { useNumericKeys: !0 },
        );
    },
    11282: (e, t, r) => {
      r.d(t, { lA: () => s, cv: () => n, en: () => o });
      var i = r(17452);
      function s(e, t) {
        return t ? { ...t, query: { ...e, ...t.query } } : { query: e };
      }
      function o(e) {
        return 'string' == typeof e ? (0, i.mN)(e) : e;
      }
      function n(e, t, r) {
        const i = {};
        for (const s in e) {
          if ('declaredClass' === s) continue;
          const o = e[s];
          if (null != o && 'function' != typeof o)
            if (Array.isArray(o)) {
              i[s] = [];
              for (let e = 0; e < o.length; e++) i[s][e] = n(o[e]);
            } else if ('object' == typeof o)
              if (o.toJSON) {
                const e = o.toJSON(r && r[s]);
                i[s] = t ? e : JSON.stringify(e);
              } else i[s] = t ? o : JSON.stringify(o);
            else i[s] = o;
        }
        return i;
      }
      r(91040);
    },
  },
]);
