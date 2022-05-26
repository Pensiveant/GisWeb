'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [635],
  {
    84552: (e, t, i) => {
      i.d(t, { Z: () => d });
      var s,
        r = i(43697),
        n = i(96674),
        l = i(35463),
        o = i(5600),
        a = (i(67676), i(80442), i(75215), i(52011)),
        u = i(78981);
      let p = (s = class extends n.wq {
        constructor(e) {
          super(e), (this.value = 0), (this.unit = 'milliseconds');
        }
        toMilliseconds() {
          return (0, l.rJ)(this.value, this.unit, 'milliseconds');
        }
        clone() {
          return new s({ value: this.value, unit: this.unit });
        }
      });
      (0, r._)(
        [(0, o.Cb)({ type: Number, json: { write: !0 }, nonNullable: !0 })],
        p.prototype,
        'value',
        void 0,
      ),
        (0, r._)(
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
        (p = s = (0, r._)([(0, a.j)('esri.TimeInterval')], p));
      const d = p;
    },
    69637: (e, t, i) => {
      i.d(t, { b: () => S });
      var s,
        r = i(43697),
        n = i(5600),
        l = (i(67676), i(80442), i(75215), i(52011)),
        o = i(20102),
        a = i(96674),
        u = i(70586),
        p = i(78286),
        d = i(57520),
        c = i(66577),
        y = i(92835),
        m = i(35454),
        f = i(22974),
        v = i(57444);
      const h = new m.X({
          esriSpatialRelIntersects: 'intersects',
          esriSpatialRelContains: 'contains',
          esriSpatialRelCrosses: 'crosses',
          esriSpatialRelDisjoint: 'disjoint',
          esriSpatialRelEnvelopeIntersects: 'envelope-intersects',
          esriSpatialRelIndexIntersects: 'index-intersects',
          esriSpatialRelOverlaps: 'overlaps',
          esriSpatialRelTouches: 'touches',
          esriSpatialRelWithin: 'within',
          esriSpatialRelRelation: 'relation',
        }),
        w = new m.X({
          esriSRUnit_Meter: 'meters',
          esriSRUnit_Kilometer: 'kilometers',
          esriSRUnit_Foot: 'feet',
          esriSRUnit_StatuteMile: 'miles',
          esriSRUnit_NauticalMile: 'nautical-miles',
          esriSRUnit_USNauticalMile: 'us-nautical-miles',
        });
      let b = (s = class extends a.wq {
        constructor(e) {
          super(e),
            (this.where = null),
            (this.geometry = null),
            (this.spatialRelationship = 'intersects'),
            (this.distance = void 0),
            (this.objectIds = null),
            (this.units = null),
            (this.timeExtent = null);
        }
        createQuery(e = {}) {
          const {
            where: t,
            geometry: i,
            spatialRelationship: s,
            timeExtent: r,
            objectIds: n,
            units: l,
            distance: o,
          } = this;
          return new v.Z({
            geometry: (0, f.d9)(i),
            objectIds: (0, f.d9)(n),
            spatialRelationship: s,
            timeExtent: (0, f.d9)(r),
            where: t,
            units: l,
            distance: o,
            ...e,
          });
        }
        clone() {
          const {
            where: e,
            geometry: t,
            spatialRelationship: i,
            timeExtent: r,
            objectIds: n,
            units: l,
            distance: o,
          } = this;
          return new s({
            geometry: (0, f.d9)(t),
            objectIds: (0, f.d9)(n),
            spatialRelationship: i,
            timeExtent: (0, f.d9)(r),
            where: e,
            units: l,
            distance: o,
          });
        }
      });
      (0, r._)(
        [(0, n.Cb)({ type: String, json: { write: !0 } })],
        b.prototype,
        'where',
        void 0,
      ),
        (0, r._)(
          [(0, n.Cb)({ types: c.qM, json: { write: !0 } })],
          b.prototype,
          'geometry',
          void 0,
        ),
        (0, r._)(
          [
            (0, n.Cb)({
              type: h.apiValues,
              json: {
                name: 'spatialRel',
                read: { reader: h.read },
                write: {
                  allowNull: !1,
                  writer: h.write,
                  overridePolicy() {
                    return { enabled: (0, u.pC)(this.geometry) };
                  },
                },
              },
            }),
          ],
          b.prototype,
          'spatialRelationship',
          void 0,
        ),
        (0, r._)(
          [
            (0, n.Cb)({
              type: Number,
              json: {
                write: {
                  overridePolicy(e) {
                    return { enabled: null != e && null != this.geometry };
                  },
                },
              },
            }),
          ],
          b.prototype,
          'distance',
          void 0,
        ),
        (0, r._)(
          [(0, n.Cb)({ type: [Number], json: { write: !0 } })],
          b.prototype,
          'objectIds',
          void 0,
        ),
        (0, r._)(
          [
            (0, n.Cb)({
              type: w.apiValues,
              json: {
                read: w.read,
                write: {
                  writer: w.write,
                  overridePolicy(e) {
                    return { enabled: null != e && null != this.geometry };
                  },
                },
              },
            }),
          ],
          b.prototype,
          'units',
          void 0,
        ),
        (0, r._)(
          [(0, n.Cb)({ type: y.Z, json: { write: !0 } })],
          b.prototype,
          'timeExtent',
          void 0,
        ),
        (b = s = (0, r._)([(0, l.j)('esri.layers.support.FeatureFilter')], b));
      const g = b;
      var x;
      let _ = (x = class extends a.wq {
        constructor(e) {
          super(e),
            (this.filter = null),
            (this.includedEffect = null),
            (this.excludedEffect = null),
            (this.excludedLabelsVisible = !1);
        }
        write(e, t) {
          const i = super.write(e, t);
          if (null != t && t.origin) {
            if (i.filter) {
              const e = Object.keys(i.filter);
              var s;
              if (e.length > 1 || 'where' !== e[0])
                return (
                  null == (s = t.messages) ||
                    s.push(
                      new o.Z(
                        'web-document-write:unsupported-feature-effect',
                        "Invalid feature effect 'filter'. A filter can only contain a 'where' property",
                        { layer: t.layer, effect: this },
                      ),
                    ),
                  null
                );
            }
            var r;
            if ('showExcludedLabels' in i)
              return (
                null == (r = t.messages) ||
                  r.push(
                    new o.Z(
                      'web-document-write:unsupported-feature-effect',
                      "Invalid value for property 'excludedLabelsVisible' which should always be 'true'",
                      { layer: t.layer, effect: this },
                    ),
                  ),
                null
              );
          }
          return i;
        }
        clone() {
          return new x({
            filter: (0, u.pC)(this.filter) && this.filter.clone(),
            includedEffect: this.includedEffect,
            excludedEffect: this.excludedEffect,
            excludedLabelsVisible: this.excludedLabelsVisible,
          });
        }
      });
      (0, r._)(
        [
          (0, n.Cb)({
            type: g,
            json: {
              write: {
                allowNull: !0,
                writer(e, t, i, s) {
                  const r = null == e ? void 0 : e.write({}, s);
                  r && 0 !== Object.keys(r).length
                    ? (0, p.RB)(i, r, t)
                    : (0, p.RB)(i, null, t);
                },
              },
            },
          }),
        ],
        _.prototype,
        'filter',
        void 0,
      ),
        (0, r._)(
          [
            (0, n.Cb)({
              json: {
                write: !0,
                origins: {
                  'web-map': {
                    read: { reader: d.ij },
                    write: {
                      writer: d.cW,
                      overridePolicy() {
                        return {
                          allowNull: null != this.excludedEffect,
                          isRequired: null == this.excludedEffect,
                        };
                      },
                    },
                  },
                },
              },
            }),
          ],
          _.prototype,
          'includedEffect',
          void 0,
        ),
        (0, r._)(
          [
            (0, n.Cb)({
              json: {
                write: !0,
                origins: {
                  'web-map': {
                    read: { reader: d.ij },
                    write: {
                      writer: d.cW,
                      overridePolicy() {
                        return {
                          allowNull: null != this.includedEffect,
                          isRequired: null == this.includedEffect,
                        };
                      },
                    },
                  },
                },
              },
            }),
          ],
          _.prototype,
          'excludedEffect',
          void 0,
        ),
        (0, r._)(
          [
            (0, n.Cb)({
              type: Boolean,
              json: {
                write: !0,
                name: 'showExcludedLabels',
                origins: {
                  'web-map': { name: 'showExcludedLabels', default: !0 },
                },
              },
            }),
          ],
          _.prototype,
          'excludedLabelsVisible',
          void 0,
        ),
        (_ = x = (0, r._)([(0, l.j)('esri.layers.support.FeatureEffect')], _));
      const j = _,
        S = (e) => {
          let t = class extends e {
            constructor() {
              super(...arguments), (this.featureEffect = null);
            }
          };
          return (
            (0, r._)(
              [
                (0, n.Cb)({
                  type: j,
                  json: {
                    origins: { 'web-map': { write: { allowNull: !0 } } },
                  },
                }),
              ],
              t.prototype,
              'featureEffect',
              void 0,
            ),
            (t = (0, r._)(
              [(0, l.j)('esri.layers.mixins.FeatureEffectLayer')],
              t,
            )),
            t
          );
        };
    },
    28294: (e, t, i) => {
      i.d(t, { n: () => c });
      var s = i(43697),
        r = i(92835),
        n = i(84552),
        l = i(5600),
        o = (i(67676), i(80442), i(75215), i(71715)),
        a = i(52011),
        u = i(30547),
        p = i(35671),
        d = i(78981);
      const c = (e) => {
        let t = class extends e {
          constructor() {
            super(...arguments),
              (this.timeExtent = null),
              (this.timeOffset = null),
              (this.useViewTime = !0);
          }
          readOffset(e, t) {
            const i = t.timeInfo.exportOptions;
            if (!i) return null;
            const s = i.timeOffset,
              r = d.v.fromJSON(i.timeOffsetUnits);
            return s && r ? new n.Z({ value: s, unit: r }) : null;
          }
          set timeInfo(e) {
            (0, p.UF)(e, this.fieldsIndex), this._set('timeInfo', e);
          }
        };
        return (
          (0, s._)(
            [(0, l.Cb)({ type: r.Z, json: { write: !1 } })],
            t.prototype,
            'timeExtent',
            void 0,
          ),
          (0, s._)(
            [(0, l.Cb)({ type: n.Z })],
            t.prototype,
            'timeOffset',
            void 0,
          ),
          (0, s._)(
            [(0, o.r)('service', 'timeOffset', ['timeInfo.exportOptions'])],
            t.prototype,
            'readOffset',
            null,
          ),
          (0, s._)(
            [
              (0, l.Cb)({
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
          (0, s._)(
            [
              (0, l.Cb)({
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
          (t = (0, s._)([(0, a.j)('esri.layers.mixins.TemporalLayer')], t)),
          t
        );
      };
    },
    61960: (e, t, i) => {
      i.d(t, { Z: () => a });
      var s = i(43697),
        r = i(96674),
        n = i(5600),
        l = (i(67676), i(80442), i(75215), i(52011));
      let o = class extends r.wq {
        constructor() {
          super(...arguments), (this.type = null);
        }
      };
      (0, s._)(
        [
          (0, n.Cb)({
            type: ['selection', 'cluster'],
            readOnly: !0,
            json: { read: !1, write: !0 },
          }),
        ],
        o.prototype,
        'type',
        void 0,
      ),
        (o = (0, s._)([(0, l.j)('esri.layers.support.FeatureReduction')], o));
      const a = o;
    },
    85857: (e, t, i) => {
      i.d(t, { Z: () => u });
      var s,
        r = i(43697),
        n = i(5600),
        l = (i(67676), i(80442), i(75215), i(52011)),
        o = i(61960);
      let a = (s = class extends o.Z {
        constructor(e) {
          super(e), (this.type = 'selection');
        }
        clone() {
          return new s();
        }
      });
      (0, r._)(
        [(0, n.Cb)({ type: ['selection'] })],
        a.prototype,
        'type',
        void 0,
      ),
        (a = s =
          (0, r._)(
            [(0, l.j)('esri.layers.support.FeatureReductionSelection')],
            a,
          ));
      const u = a;
    },
    30547: (e, t, i) => {
      i.d(t, { Z: () => b });
      var s,
        r = i(43697),
        n = i(92835),
        l = i(84552),
        o = i(96674),
        a = i(22974),
        u = i(70586),
        p = i(5600),
        d = (i(75215), i(71715)),
        c = i(52011),
        y = i(30556);
      i(67676), i(80442);
      let m = (s = class extends o.wq {
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
          return new s({ respectsDaylightSaving: e, timezone: t });
        }
      });
      (0, r._)(
        [(0, p.Cb)({ type: Boolean, json: { write: !0 } })],
        m.prototype,
        'respectsDaylightSaving',
        void 0,
      ),
        (0, r._)(
          [
            (0, d.r)('respectsDaylightSaving', [
              'respectsDaylightSaving',
              'respectDaylightSaving',
            ]),
          ],
          m.prototype,
          'readRespectsDaylightSaving',
          null,
        ),
        (0, r._)(
          [
            (0, p.Cb)({
              type: String,
              json: {
                read: { source: 'timeZone' },
                write: { target: 'timeZone' },
              },
            }),
          ],
          m.prototype,
          'timezone',
          void 0,
        ),
        (m = s = (0, r._)([(0, c.j)('esri.layers.support.TimeReference')], m));
      const f = m;
      var v,
        h = i(78981);
      let w = (v = class extends o.wq {
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
          const i = new Date(t.timeExtent[0]),
            s = new Date(t.timeExtent[1]);
          return new n.Z({ start: i, end: s });
        }
        writeFullTimeExtent(e, t) {
          e && (0, u.pC)(e.start) && (0, u.pC)(e.end)
            ? (t.timeExtent = [e.start.getTime(), e.end.getTime()])
            : (t.timeExtent = null);
        }
        readInterval(e, t) {
          return t.timeInterval && t.timeIntervalUnits
            ? new l.Z({
                value: t.timeInterval,
                unit: h.v.fromJSON(t.timeIntervalUnits),
              })
            : t.defaultTimeInterval && t.defaultTimeIntervalUnits
            ? new l.Z({
                value: t.defaultTimeInterval,
                unit: h.v.fromJSON(t.defaultTimeIntervalUnits),
              })
            : null;
        }
        writeInterval(e, t) {
          if (e) {
            const i = e.toJSON();
            (t.timeInterval = i.value), (t.timeIntervalUnits = i.unit);
          } else (t.timeInterval = null), (t.timeIntervalUnits = null);
        }
        clone() {
          const {
            cumulative: e,
            endField: t,
            hasLiveData: i,
            interval: s,
            startField: r,
            timeReference: n,
            fullTimeExtent: l,
            trackIdField: o,
            useTime: u,
          } = this;
          return new v({
            cumulative: e,
            endField: t,
            hasLiveData: i,
            interval: s,
            startField: r,
            timeReference: (0, a.d9)(n),
            fullTimeExtent: (0, a.d9)(l),
            trackIdField: o,
            useTime: u,
          });
        }
      });
      (0, r._)(
        [
          (0, p.Cb)({
            type: Boolean,
            json: {
              read: { source: 'exportOptions.timeDataCumulative' },
              write: { target: 'exportOptions.timeDataCumulative' },
            },
          }),
        ],
        w.prototype,
        'cumulative',
        void 0,
      ),
        (0, r._)(
          [
            (0, p.Cb)({
              type: String,
              json: {
                read: { source: 'endTimeField' },
                write: { target: 'endTimeField', allowNull: !0 },
              },
            }),
          ],
          w.prototype,
          'endField',
          void 0,
        ),
        (0, r._)(
          [
            (0, p.Cb)({
              type: n.Z,
              json: { write: { enabled: !0, allowNull: !0 } },
            }),
          ],
          w.prototype,
          'fullTimeExtent',
          void 0,
        ),
        (0, r._)(
          [(0, d.r)('fullTimeExtent', ['timeExtent'])],
          w.prototype,
          'readFullTimeExtent',
          null,
        ),
        (0, r._)(
          [(0, y.c)('fullTimeExtent')],
          w.prototype,
          'writeFullTimeExtent',
          null,
        ),
        (0, r._)(
          [(0, p.Cb)({ type: Boolean, json: { write: !0 } })],
          w.prototype,
          'hasLiveData',
          void 0,
        ),
        (0, r._)(
          [
            (0, p.Cb)({
              type: l.Z,
              json: { write: { enabled: !0, allowNull: !0 } },
            }),
          ],
          w.prototype,
          'interval',
          void 0,
        ),
        (0, r._)(
          [
            (0, d.r)('interval', [
              'timeInterval',
              'timeIntervalUnits',
              'defaultTimeInterval',
              'defaultTimeIntervalUnits',
            ]),
          ],
          w.prototype,
          'readInterval',
          null,
        ),
        (0, r._)([(0, y.c)('interval')], w.prototype, 'writeInterval', null),
        (0, r._)(
          [
            (0, p.Cb)({
              type: String,
              json: {
                read: { source: 'startTimeField' },
                write: { target: 'startTimeField', allowNull: !0 },
              },
            }),
          ],
          w.prototype,
          'startField',
          void 0,
        ),
        (0, r._)(
          [
            (0, p.Cb)({
              type: f,
              json: { write: { enabled: !0, allowNull: !0 } },
            }),
          ],
          w.prototype,
          'timeReference',
          void 0,
        ),
        (0, r._)(
          [
            (0, p.Cb)({
              type: String,
              json: { write: { enabled: !0, allowNull: !0 } },
            }),
          ],
          w.prototype,
          'trackIdField',
          void 0,
        ),
        (0, r._)(
          [
            (0, p.Cb)({
              type: Boolean,
              json: {
                read: { source: 'exportOptions.useTime' },
                write: { target: 'exportOptions.useTime' },
              },
            }),
          ],
          w.prototype,
          'useTime',
          void 0,
        ),
        (w = v = (0, r._)([(0, c.j)('esri.layers.support.TimeInfo')], w));
      const b = w;
    },
    55785: (e, t, i) => {
      i.d(t, { d: () => S });
      var s,
        r = i(61960),
        n = i(43697),
        l = i(51773),
        o = i(78223),
        a = i(96674),
        u = i(22974),
        p = i(62357),
        d = i(5600),
        c = (i(75215), i(52011));
      i(67676), i(80442);
      let y = (s = class extends a.wq {
        constructor() {
          super(...arguments),
            (this.statisticType = null),
            (this.onStatisticField = null),
            (this.onStatisticValueExpression = null);
        }
        clone() {
          return new s({
            statisticType: this.statisticType,
            onStatisticField: this.onStatisticField,
            onStatisticValueExpression: this.onStatisticValueExpression,
          });
        }
      });
      (0, n._)(
        [(0, d.Cb)({ type: String, json: { write: !0 } })],
        y.prototype,
        'statisticType',
        void 0,
      ),
        (0, n._)(
          [(0, d.Cb)({ type: String, json: { write: !0 } })],
          y.prototype,
          'onStatisticField',
          void 0,
        ),
        (0, n._)(
          [(0, d.Cb)({ type: String, json: { write: !0 } })],
          y.prototype,
          'onStatisticValueExpression',
          void 0,
        ),
        (y = s = (0, n._)([(0, c.j)('esri.layers.support.OutStatistic')], y));
      const m = y;
      var f;
      let v = (f = class extends a.wq {
        constructor() {
          super(...arguments), (this.name = null);
        }
        clone() {
          return new f({
            name: this.name,
            outStatistic: this.outStatistic.clone(),
          });
        }
      });
      (0, n._)(
        [(0, d.Cb)({ type: String, json: { write: !0 } })],
        v.prototype,
        'name',
        void 0,
      ),
        (0, n._)(
          [(0, d.Cb)({ type: m, json: { write: !0 } })],
          v.prototype,
          'outStatistic',
          void 0,
        ),
        (v = f = (0, n._)([(0, c.j)('esri.layers.support.AggregateField')], v));
      const h = v;
      var w,
        b = i(21506),
        g = i(2319);
      let x = (w = class extends a.wq {
        constructor(e) {
          super(e),
            (this.type = 'cluster'),
            (this.clusterRadius = (0, p.t_)('80px')),
            (this.clusterMinSize = (0, p.t_)('12px')),
            (this.clusterMaxSize = (0, p.t_)('50px')),
            (this.popupEnabled = !0),
            (this.popupTemplate = null),
            (this.symbol = null),
            (this.labelingInfo = null),
            (this.labelsVisible = !0),
            (this.fields = null);
        }
        clone() {
          return new w({
            clusterRadius: this.clusterRadius,
            clusterMinSize: this.clusterMinSize,
            clusterMaxSize: this.clusterMaxSize,
            labelingInfo: (0, u.d9)(this.labelingInfo),
            labelsVisible: this.labelsVisible,
            fields: (0, u.d9)(this.fields),
            popupEnabled: this.popupEnabled,
            popupTemplate: (0, u.d9)(this.popupTemplate),
          });
        }
      });
      (0, n._)(
        [(0, d.Cb)({ type: ['cluster'], readOnly: !0, json: { write: !0 } })],
        x.prototype,
        'type',
        void 0,
      ),
        (0, n._)(
          [
            (0, d.Cb)({
              type: Number,
              cast: (e) => ('auto' === e ? e : (0, p.t_)(e)),
              json: { write: !0 },
            }),
          ],
          x.prototype,
          'clusterRadius',
          void 0,
        ),
        (0, n._)(
          [(0, d.Cb)({ type: Number, cast: p.t_, json: { write: !0 } })],
          x.prototype,
          'clusterMinSize',
          void 0,
        ),
        (0, n._)(
          [(0, d.Cb)({ type: Number, cast: p.t_, json: { write: !0 } })],
          x.prototype,
          'clusterMaxSize',
          void 0,
        ),
        (0, n._)([(0, d.Cb)(b.C_)], x.prototype, 'popupEnabled', void 0),
        (0, n._)(
          [
            (0, d.Cb)({
              type: l.Z,
              json: {
                read: { source: 'popupInfo' },
                write: { target: 'popupInfo' },
              },
            }),
          ],
          x.prototype,
          'popupTemplate',
          void 0,
        ),
        (0, n._)([(0, d.Cb)({ types: o.AH })], x.prototype, 'symbol', void 0),
        (0, n._)(
          [
            (0, d.Cb)({
              type: [g.Z],
              json: {
                read: { source: 'drawingInfo.labelingInfo' },
                write: { target: 'drawingInfo.labelingInfo' },
              },
            }),
          ],
          x.prototype,
          'labelingInfo',
          void 0,
        ),
        (0, n._)([(0, d.Cb)(b.iR)], x.prototype, 'labelsVisible', void 0),
        (0, n._)(
          [
            (0, d.Cb)({
              type: [h],
              json: {
                write: !0,
                origins: {
                  'web-document': { write: !1 },
                  'portal-item': { write: !1 },
                },
              },
            }),
          ],
          x.prototype,
          'fields',
          void 0,
        ),
        (x = w =
          (0, n._)(
            [(0, c.j)('esri.layers.support.FeatureReductionCluster')],
            x,
          ));
      const _ = x;
      var j = i(85857);
      const S = {
        types: {
          key: 'type',
          base: r.Z,
          typeMap: { selection: j.Z, cluster: _ },
        },
        json: {
          name: 'layerDefinition.featureReduction',
          write: { allowNull: !0 },
          origins: {
            'web-map': {
              types: { key: 'type', base: r.Z, typeMap: { selection: _ } },
            },
            'web-scene': {
              types: { key: 'type', base: r.Z, typeMap: { selection: j.Z } },
            },
          },
        },
      };
    },
    53518: (e, t, i) => {
      i.d(t, { v: () => a });
      var s = i(92604),
        r = i(1231),
        n = i(99514),
        l = i(35671);
      const o = s.Z.getLogger('esri.layers.support.fieldProperties');
      function a() {
        return {
          fields: { type: [r.Z], value: null },
          fieldsIndex: {
            readOnly: !0,
            get() {
              return new n.Z(this.fields || []);
            },
          },
          outFields: {
            type: [String],
            json: { read: !1 },
            set: function (e) {
              (this._userOutFields = e), this.notifyChange('outFields');
            },
            get: function () {
              const e = this._userOutFields;
              if (!e || !e.length) return null;
              if (e.includes('*')) return ['*'];
              if (!this.fields) return e;
              for (const t of e)
                this.fieldsIndex.has(t) ||
                  o.error(
                    'field-attributes-layer:invalid-field',
                    `Invalid field ${t} found in outFields`,
                    { layer: this, outFields: e },
                  );
              return (0, l.Q0)(this.fieldsIndex, e);
            },
          },
        };
      }
    },
    30707: (e, t, i) => {
      i.d(t, { r: () => n });
      var s = i(2319);
      const r = /\[([^\[\]]+)\]/gi;
      function n(e, t, i) {
        return e
          ? e.map((e) => {
              const n = new s.Z();
              if ((n.read(e, i), n.labelExpression)) {
                const e =
                  t.fields ||
                  (t.layerDefinition && t.layerDefinition.fields) ||
                  this.fields;
                n.labelExpression = n.labelExpression.replace(
                  r,
                  (t, i) =>
                    `[${(function (e, t) {
                      if (!t) return e;
                      const i = e.toLowerCase();
                      for (let e = 0; e < t.length; e++) {
                        const s = t[e].name;
                        if (s.toLowerCase() === i) return s;
                      }
                      return e;
                    })(i, e)}]`,
                );
              }
              return n;
            })
          : null;
      }
    },
    78981: (e, t, i) => {
      i.d(t, { v: () => s });
      const s = (0, i(35454).w)()({
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
  },
]);
