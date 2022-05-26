'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [609],
  {
    38171: (e, t, i) => {
      i.d(t, { Z: () => y });
      var r = i(43697),
        a = i(66577),
        n = i(51773),
        o = i(78223),
        s = i(2368),
        l = i(96674),
        c = i(70586),
        u = i(99001),
        d = i(5600),
        p = (i(67676), i(80442), i(75215), i(52011)),
        g = i(33955);
      function m(e) {
        if (!(0, c.pC)(e)) return null;
        const t = {};
        for (const i in e) {
          const r = e[i];
          r && (t[i] = r.toJSON());
        }
        return 0 !== Object.keys(t).length ? t : null;
      }
      let M = class extends (0, s.J)(l.wq) {
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
                (0, c.pC)(t.defaultPopupTemplate)
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
            geometry: (0, c.pC)(this.geometry) ? this.geometry.toJSON() : null,
            symbol: (0, c.pC)(this.symbol) ? this.symbol.toJSON() : null,
            attributes: { ...this.attributes },
            popupTemplate: this.popupTemplate && this.popupTemplate.toJSON(),
          };
        }
        notifyGeometryChanged() {
          this._notifyLayer('geometry', this.geometry, this.geometry);
        }
        notifyMeshTransformChanged() {
          (0, c.pC)(this.geometry) &&
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
          (0, d.Cb)({
            value: null,
            json: {
              read: function (e) {
                if (!e) return null;
                const t = {};
                for (const i in e) {
                  const r = (0, g.im)(e[i]);
                  r && (t[i] = r);
                }
                return 0 !== Object.keys(t).length ? t : null;
              },
            },
          }),
        ],
        M.prototype,
        'aggregateGeometries',
        null,
      ),
        (0, r._)([(0, d.Cb)({ value: null })], M.prototype, 'attributes', null),
        (0, r._)(
          [(0, d.Cb)({ value: null, types: a.qM, json: { read: g.im } })],
          M.prototype,
          'geometry',
          null,
        ),
        (0, r._)(
          [(0, d.Cb)({ type: Boolean })],
          M.prototype,
          'isAggregate',
          void 0,
        ),
        (0, r._)(
          [(0, d.Cb)({ clonable: 'reference' })],
          M.prototype,
          'layer',
          void 0,
        ),
        (0, r._)(
          [(0, d.Cb)({ type: n.Z })],
          M.prototype,
          'popupTemplate',
          void 0,
        ),
        (0, r._)(
          [(0, d.Cb)({ clonable: 'reference' })],
          M.prototype,
          'sourceLayer',
          void 0,
        ),
        (0, r._)(
          [(0, d.Cb)({ value: null, types: o.LB })],
          M.prototype,
          'symbol',
          null,
        ),
        (0, r._)(
          [(0, d.Cb)({ type: Boolean, value: !0 })],
          M.prototype,
          'visible',
          null,
        ),
        (M = (0, r._)([(0, p.j)('esri.Graphic')], M)),
        ((M || (M = {})).generateUID = u.D);
      const y = M;
    },
    84552: (e, t, i) => {
      i.d(t, { Z: () => d });
      var r,
        a = i(43697),
        n = i(96674),
        o = i(35463),
        s = i(5600),
        l = (i(67676), i(80442), i(75215), i(52011)),
        c = i(78981);
      let u = (r = class extends n.wq {
        constructor(e) {
          super(e), (this.value = 0), (this.unit = 'milliseconds');
        }
        toMilliseconds() {
          return (0, o.rJ)(this.value, this.unit, 'milliseconds');
        }
        clone() {
          return new r({ value: this.value, unit: this.unit });
        }
      });
      (0, a._)(
        [(0, s.Cb)({ type: Number, json: { write: !0 }, nonNullable: !0 })],
        u.prototype,
        'value',
        void 0,
      ),
        (0, a._)(
          [
            (0, s.Cb)({
              type: c.v.apiValues,
              json: { type: c.v.jsonValues, read: c.v.read, write: c.v.write },
              nonNullable: !0,
            }),
          ],
          u.prototype,
          'unit',
          void 0,
        ),
        (u = r = (0, a._)([(0, l.j)('esri.TimeInterval')], u));
      const d = u;
    },
    74669: (e, t, i) => {
      i.d(t, { Z: () => a });
      var r = i(69801);
      class a {
        constructor(e, t) {
          (this._storage = new r.WJ()),
            (this._storage.maxSize = e),
            t && this._storage.registerRemoveFunc('', t);
        }
        put(e, t) {
          this._storage.put(e, t, 1, 1);
        }
        pop(e) {
          return this._storage.pop(e);
        }
        get(e) {
          return this._storage.get(e);
        }
        clear() {
          this._storage.clearAll();
        }
        destroy() {
          this._storage.destroy();
        }
      }
    },
    74085: (e, t, i) => {
      function r(e) {}
      i.d(t, { Bg: () => r }), i(80442);
    },
    17017: (e, t, i) => {
      i.d(t, { N: () => o });
      var r = i(43697),
        a = i(5600),
        n = (i(67676), i(80442), i(75215), i(52011));
      const o = (e) => {
        let t = class extends e {
          constructor() {
            super(...arguments), (this.customParameters = null);
          }
        };
        return (
          (0, r._)(
            [
              (0, a.Cb)({
                type: Object,
                json: {
                  write: {
                    overridePolicy: (e) => ({
                      enabled: !!(e && Object.keys(e).length > 0),
                    }),
                  },
                },
              }),
            ],
            t.prototype,
            'customParameters',
            void 0,
          ),
          (t = (0, r._)(
            [(0, n.j)('esri.layers.mixins.CustomParametersMixin')],
            t,
          )),
          t
        );
      };
    },
    34760: (e, t, i) => {
      i.d(t, { Q: () => h });
      var r = i(43697),
        a = i(92604),
        n = i(95330),
        o = i(5600),
        s = (i(67676), i(80442), i(75215), i(52011)),
        l = i(80539),
        c = (i(20102), i(26258), i(87538));
      const u = new l.Z(),
        d = new WeakMap();
      function p(e) {
        return (
          e && 'object' == typeof e && 'refreshInterval' in e && 'refresh' in e
        );
      }
      function g(e, t) {
        return Number.isFinite(e) && Number.isFinite(t)
          ? t <= 0
            ? e
            : g(t, e % t)
          : 0;
      }
      let m = 0,
        M = 0;
      function y() {
        const e = Date.now();
        for (const i of u)
          if (i.refreshInterval) {
            var t;
            e - (null != (t = d.get(i)) ? t : 0) + 5 >=
              6e4 * i.refreshInterval && (d.set(i, e), i.refresh(e));
          }
      }
      (0, c.EH)(() => {
        const e = Date.now();
        let t = 0;
        for (const i of u)
          (t = g(Math.round(6e4 * i.refreshInterval), t)),
            i.refreshInterval ? d.get(i) || d.set(i, e) : d.delete(i);
        if (t !== M) {
          if (((M = t), clearInterval(m), 0 === M)) return void (m = 0);
          m = setInterval(y, M);
        }
      });
      const h = (e) => {
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
                    p(e) && u.push(e);
                  })(this);
                },
                () => {},
              );
          }
          destroy() {
            var e;
            p((e = this)) && u.includes(e) && u.remove(e);
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
                a.Z.getLogger(this.declaredClass).error(e),
                  this.emit('refresh', { dataChanged: !1, error: e });
              },
            );
          }
          async hasDataChanged() {
            return !0;
          }
        };
        return (
          (0, r._)(
            [
              (0, o.Cb)({
                type: Number,
                cast: (e) => (e >= 0.1 ? e : e <= 0 ? 0 : 0.1),
                json: { write: !0 },
              }),
            ],
            t.prototype,
            'refreshInterval',
            void 0,
          ),
          (0, r._)(
            [(0, o.Cb)({ readOnly: !0 })],
            t.prototype,
            'refreshTimestamp',
            void 0,
          ),
          (0, r._)([(0, o.Cb)()], t.prototype, 'refreshParameters', null),
          (t = (0, r._)([(0, s.j)('esri.layers.mixins.RefreshableLayer')], t)),
          t
        );
      };
    },
    28294: (e, t, i) => {
      i.d(t, { n: () => p });
      var r = i(43697),
        a = i(92835),
        n = i(84552),
        o = i(5600),
        s = (i(67676), i(80442), i(75215), i(71715)),
        l = i(52011),
        c = i(30547),
        u = i(35671),
        d = i(78981);
      const p = (e) => {
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
            const r = i.timeOffset,
              a = d.v.fromJSON(i.timeOffsetUnits);
            return r && a ? new n.Z({ value: r, unit: a }) : null;
          }
          set timeInfo(e) {
            (0, u.UF)(e, this.fieldsIndex), this._set('timeInfo', e);
          }
        };
        return (
          (0, r._)(
            [(0, o.Cb)({ type: a.Z, json: { write: !1 } })],
            t.prototype,
            'timeExtent',
            void 0,
          ),
          (0, r._)(
            [(0, o.Cb)({ type: n.Z })],
            t.prototype,
            'timeOffset',
            void 0,
          ),
          (0, r._)(
            [(0, s.r)('service', 'timeOffset', ['timeInfo.exportOptions'])],
            t.prototype,
            'readOffset',
            null,
          ),
          (0, r._)(
            [
              (0, o.Cb)({
                value: null,
                type: c.Z,
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
          (0, r._)(
            [
              (0, o.Cb)({
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
          (t = (0, r._)([(0, l.j)('esri.layers.mixins.TemporalLayer')], t)),
          t
        );
      };
    },
    35956: (e, t, i) => {
      i.d(t, { Z: () => d });
      var r,
        a = i(43697),
        n = i(96674),
        o = i(22974),
        s = i(5600),
        l = i(75215),
        c = i(52011);
      let u = (r = class extends n.wq {
        constructor(e) {
          super(e),
            (this.variableName = null),
            (this.dimensionName = null),
            (this.values = []),
            (this.isSlice = !1);
        }
        clone() {
          return new r({
            variableName: this.variableName,
            dimensionName: this.dimensionName,
            values: (0, o.d9)(this.values),
            isSlice: this.isSlice,
          });
        }
      });
      (0, a._)(
        [(0, s.Cb)({ type: String, json: { write: !0 } })],
        u.prototype,
        'variableName',
        void 0,
      ),
        (0, a._)(
          [(0, s.Cb)({ type: String, json: { write: !0 } })],
          u.prototype,
          'dimensionName',
          void 0,
        ),
        (0, a._)(
          [
            (0, s.Cb)({
              type: l.V5.array(
                l.V5.oneOf([
                  l.V5.native(Number),
                  l.V5.array(l.V5.native(Number)),
                ]),
              ),
              json: { write: !0 },
            }),
          ],
          u.prototype,
          'values',
          void 0,
        ),
        (0, a._)(
          [(0, s.Cb)({ type: Boolean, json: { write: !0 } })],
          u.prototype,
          'isSlice',
          void 0,
        ),
        (u = r =
          (0, a._)([(0, c.j)('esri.layers.support.DimensionalDefinition')], u));
      const d = u;
    },
    88281: (e, t, i) => {
      i.d(t, { Z: () => s });
      var r = i(20102),
        a = i(70586),
        n = i(78346),
        o = i(54163);
      class s {
        constructor() {
          (this._workerThread = null), (this._destroyed = !1);
        }
        async initialize() {
          const e = await (0, n.bA)('RasterWorker');
          this._destroyed ? e.close() : (this._workerThread = e);
        }
        destroy() {
          (this._destroyed = !0),
            this._workerThread &&
              (this._workerThread.close(), (this._workerThread = null));
        }
        async convertVectorFieldData(e, t) {
          if (!this._workerThread)
            throw new r.Z(
              'raster-jobhandler:no-connection',
              'no available worker connection',
            );
          const i = await this._workerThread.invoke(
            'convertVectorFieldData',
            { pixelBlock: e.pixelBlock.toJSON(), type: e.dataType },
            t,
          );
          return i ? new o.Z(i) : null;
        }
        async decode(e, t) {
          if (!this._workerThread)
            throw new r.Z(
              'raster-jobhandler:no-connection',
              'no available worker connection',
            );
          const i = await this._workerThread.invoke('decode', e, t);
          return i ? new o.Z(i) : null;
        }
        async symbolize(e, t) {
          if (!this._workerThread)
            throw new r.Z(
              'raster-jobhandler:no-connection',
              'no available worker connection',
            );
          const i = {
              extent: e.extent && e.extent.toJSON(),
              pixelBlock: (0, a.pC)(e.pixelBlock) && e.pixelBlock.toJSON(),
              simpleStretchParams: e.simpleStretchParams,
              bandIds: e.bandIds,
            },
            n = await this._workerThread.invoke('symbolize', i, t);
          return n ? new o.Z(n) : null;
        }
        async updateSymbolizer(e, t) {
          var i;
          if (!this._workerThread)
            throw new r.Z(
              'raster-jobhandler:no-connection',
              'no available worker connection',
            );
          const a =
            null == e || null == (i = e.rendererJSON) ? void 0 : i.histograms;
          await Promise.all(
            this._workerThread.broadcast(
              'updateSymbolizer',
              { symbolizerJSON: e.toJSON(), histograms: a },
              t,
            ),
          );
        }
        async stretch(e, t) {
          if (!this._workerThread)
            throw new r.Z(
              'raster-jobhandler:no-connection',
              'no available worker connection',
            );
          if (null == e || !e.pixelBlock) return null;
          const i = {
              srcPixelBlock: e.pixelBlock.toJSON(),
              stretchParams: e.stretchParams,
            },
            a = await this._workerThread.invoke('stretch', i, t);
          return a ? new o.Z(a) : null;
        }
        async split(e, t) {
          if (!this._workerThread)
            throw new r.Z(
              'raster-jobhandler:no-connection',
              'no available worker connection',
            );
          if (null == e || !e.pixelBlock) return null;
          const i = {
              srcPixelBlock: e.pixelBlock.toJSON(),
              tileSize: e.tileSize,
              maximumPyramidLevel: e.maximumPyramidLevel,
            },
            a = await this._workerThread.invoke('split', i, t);
          return (
            a &&
              a.forEach((e, t) => {
                a.set(t, e ? o.Z.fromJSON(e) : null);
              }),
            Promise.resolve(a)
          );
        }
        async estimateStatisticsHistograms(e, t) {
          if (!this._workerThread)
            throw new r.Z(
              'raster-jobhandler:no-connection',
              'no available worker connection',
            );
          if (null == e || !e.pixelBlock) return null;
          const i = { srcPixelBlock: e.pixelBlock.toJSON() },
            a = await this._workerThread.invoke(
              'estimateStatisticsHistograms',
              i,
              t,
            );
          return Promise.resolve(a);
        }
        async mosaicAndTransform(e, t) {
          var i;
          if (!this._workerThread)
            throw new r.Z(
              'raster-jobhandler:no-connection',
              'no available worker connection',
            );
          if (null == e || null == (i = e.srcPixelBlocks) || !i.length)
            return { pixelBlock: null };
          const n = {
              ...e,
              srcPixelBlocks: e.srcPixelBlocks.map((e) =>
                (0, a.pC)(e) ? e.toJSON() : null,
              ),
            },
            s = await this._workerThread.invoke('mosaicAndTransform', n, t);
          return {
            pixelBlock: s.pixelBlock ? new o.Z(s.pixelBlock) : null,
            localNorthDirections: s.localNorthDirections,
          };
        }
        async createStreamlinesMesh(e, t) {
          if (!this._workerThread)
            throw new r.Z(
              'raster-jobhandler:no-connection',
              'no available worker connection',
            );
          const i = {
              buffer: e.flowData.data.buffer,
              width: e.flowData.width,
              height: e.flowData.height,
            },
            a = e.rendererSettings,
            n = await this._workerThread.invoke(
              'createStreamlinesMesh',
              { flowData: i, rendererSettings: a },
              { ...t, transferList: [i.buffer] },
            );
          return {
            vertexData: new Float32Array(n.vertexBuffer),
            indexData: new Uint32Array(n.indexBuffer),
          };
        }
        getProjectionOffsetGrid(e, t) {
          if (!this._workerThread)
            throw new r.Z(
              'raster-jobhandler:no-connection',
              'no available worker connection',
            );
          const i = (0, a.pC)(e.datumTransformation)
              ? e.datumTransformation.steps.map((e) => ({
                  wkid: e.wkid,
                  wkt: e.wkt,
                  isInverse: e.isInverse,
                }))
              : null,
            n = (0, a.pC)(e.rasterTransform)
              ? e.rasterTransform.toJSON()
              : null,
            o = {
              projectedExtent: e.projectedExtent.toJSON(),
              srcBufferExtent: e.srcBufferExtent.toJSON(),
              pixelSize: e.pixelSize,
              hasWrapAround: e.hasWrapAround,
              spacing: e.spacing,
              datumTransformationSteps: i,
              rasterTransform: n,
              isAdaptive: e.isAdaptive,
              includeGCSGrid: e.includeGCSGrid,
            };
          return this._workerThread.invoke('getProjectionOffsetGrid', o, t);
        }
      }
    },
    30547: (e, t, i) => {
      i.d(t, { Z: () => w });
      var r,
        a = i(43697),
        n = i(92835),
        o = i(84552),
        s = i(96674),
        l = i(22974),
        c = i(70586),
        u = i(5600),
        d = (i(75215), i(71715)),
        p = i(52011),
        g = i(30556);
      i(67676), i(80442);
      let m = (r = class extends s.wq {
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
          return new r({ respectsDaylightSaving: e, timezone: t });
        }
      });
      (0, a._)(
        [(0, u.Cb)({ type: Boolean, json: { write: !0 } })],
        m.prototype,
        'respectsDaylightSaving',
        void 0,
      ),
        (0, a._)(
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
        (0, a._)(
          [
            (0, u.Cb)({
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
        (m = r = (0, a._)([(0, p.j)('esri.layers.support.TimeReference')], m));
      const M = m;
      var y,
        h = i(78981);
      let I = (y = class extends s.wq {
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
            r = new Date(t.timeExtent[1]);
          return new n.Z({ start: i, end: r });
        }
        writeFullTimeExtent(e, t) {
          e && (0, c.pC)(e.start) && (0, c.pC)(e.end)
            ? (t.timeExtent = [e.start.getTime(), e.end.getTime()])
            : (t.timeExtent = null);
        }
        readInterval(e, t) {
          return t.timeInterval && t.timeIntervalUnits
            ? new o.Z({
                value: t.timeInterval,
                unit: h.v.fromJSON(t.timeIntervalUnits),
              })
            : t.defaultTimeInterval && t.defaultTimeIntervalUnits
            ? new o.Z({
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
            interval: r,
            startField: a,
            timeReference: n,
            fullTimeExtent: o,
            trackIdField: s,
            useTime: c,
          } = this;
          return new y({
            cumulative: e,
            endField: t,
            hasLiveData: i,
            interval: r,
            startField: a,
            timeReference: (0, l.d9)(n),
            fullTimeExtent: (0, l.d9)(o),
            trackIdField: s,
            useTime: c,
          });
        }
      });
      (0, a._)(
        [
          (0, u.Cb)({
            type: Boolean,
            json: {
              read: { source: 'exportOptions.timeDataCumulative' },
              write: { target: 'exportOptions.timeDataCumulative' },
            },
          }),
        ],
        I.prototype,
        'cumulative',
        void 0,
      ),
        (0, a._)(
          [
            (0, u.Cb)({
              type: String,
              json: {
                read: { source: 'endTimeField' },
                write: { target: 'endTimeField', allowNull: !0 },
              },
            }),
          ],
          I.prototype,
          'endField',
          void 0,
        ),
        (0, a._)(
          [
            (0, u.Cb)({
              type: n.Z,
              json: { write: { enabled: !0, allowNull: !0 } },
            }),
          ],
          I.prototype,
          'fullTimeExtent',
          void 0,
        ),
        (0, a._)(
          [(0, d.r)('fullTimeExtent', ['timeExtent'])],
          I.prototype,
          'readFullTimeExtent',
          null,
        ),
        (0, a._)(
          [(0, g.c)('fullTimeExtent')],
          I.prototype,
          'writeFullTimeExtent',
          null,
        ),
        (0, a._)(
          [(0, u.Cb)({ type: Boolean, json: { write: !0 } })],
          I.prototype,
          'hasLiveData',
          void 0,
        ),
        (0, a._)(
          [
            (0, u.Cb)({
              type: o.Z,
              json: { write: { enabled: !0, allowNull: !0 } },
            }),
          ],
          I.prototype,
          'interval',
          void 0,
        ),
        (0, a._)(
          [
            (0, d.r)('interval', [
              'timeInterval',
              'timeIntervalUnits',
              'defaultTimeInterval',
              'defaultTimeIntervalUnits',
            ]),
          ],
          I.prototype,
          'readInterval',
          null,
        ),
        (0, a._)([(0, g.c)('interval')], I.prototype, 'writeInterval', null),
        (0, a._)(
          [
            (0, u.Cb)({
              type: String,
              json: {
                read: { source: 'startTimeField' },
                write: { target: 'startTimeField', allowNull: !0 },
              },
            }),
          ],
          I.prototype,
          'startField',
          void 0,
        ),
        (0, a._)(
          [
            (0, u.Cb)({
              type: M,
              json: { write: { enabled: !0, allowNull: !0 } },
            }),
          ],
          I.prototype,
          'timeReference',
          void 0,
        ),
        (0, a._)(
          [
            (0, u.Cb)({
              type: String,
              json: { write: { enabled: !0, allowNull: !0 } },
            }),
          ],
          I.prototype,
          'trackIdField',
          void 0,
        ),
        (0, a._)(
          [
            (0, u.Cb)({
              type: Boolean,
              json: {
                read: { source: 'exportOptions.useTime' },
                write: { target: 'exportOptions.useTime' },
              },
            }),
          ],
          I.prototype,
          'useTime',
          void 0,
        ),
        (I = y = (0, a._)([(0, p.j)('esri.layers.support.TimeInfo')], I));
      const w = I;
    },
    69608: (e, t, i) => {
      i.d(t, { c: () => a, k: () => n });
      var r = i(35454);
      const a = (0, r.w)()({
          RSP_NearestNeighbor: 'nearest',
          RSP_BilinearInterpolation: 'bilinear',
          RSP_CubicConvolution: 'cubic',
          RSP_Majority: 'majority',
        }),
        n = (0, r.w)()({
          esriNoDataMatchAny: 'any',
          esriNoDataMatchAll: 'all',
        });
    },
    78981: (e, t, i) => {
      i.d(t, { v: () => r });
      const r = (0, i(35454).w)()({
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
    30030: (e, t, i) => {
      i.d(t, { dr: () => d, ij: () => m, FK: () => p });
      var r = i(20941),
        a = i(16050),
        n = i(24705),
        o = i(28092),
        s = i(73622),
        l = i(60849),
        c = i(30687),
        u = i(3943);
      const d = {
          key: 'type',
          base: null,
          typeMap: {
            'unique-value': c.Z,
            'class-breaks': a.Z,
            'raster-colormap': o.Z,
            'raster-stretch': l.Z,
            'vector-field': u.Z,
            'raster-shaded-relief': s.Z,
            flow: n.Z,
          },
        },
        p = { ...d, typeMap: { ...d.typeMap } };
      delete p.typeMap['vector-field'], delete p.typeMap.flow;
      const g = {
        uniqueValue: c.Z,
        classBreaks: a.Z,
        rasterStretch: l.Z,
        rasterColormap: o.Z,
        vectorField: u.Z,
        rasterShadedRelief: s.Z,
        flowRenderer: n.Z,
      };
      function m(e, t) {
        if (!e) return null;
        if ('classBreaks' === e.type && e.classificationMethod) {
          const t = e.authoringInfo || { classificationMethod: '' };
          (t.classificationMethod = e.classificationMethod),
            (e.authoringInfo = t);
        }
        'vectorField' === e.type &&
          e.visualVariables &&
          !Array.isArray(e.visualVariables) &&
          (e.visualVariables = [e.visualVariables]);
        const i = ((a = e) && g[a.type]) || null;
        var a;
        if (i) {
          const r = new i();
          return r.read(e, t), r;
        }
        return (
          t &&
            t.messages &&
            e &&
            t.messages.push(
              new r.Z(
                'renderer:unsupported',
                "Renderers of type '" +
                  (e.type || 'unknown') +
                  "' are not supported",
                { definition: e, context: t },
              ),
            ),
          null
        );
      }
    },
    24705: (e, t, i) => {
      i.d(t, { Z: () => h });
      var r,
        a = i(43697),
        n = i(22303),
        o = i(35454),
        s = i(96674),
        l = i(62357),
        c = i(5600),
        u = (i(67676), i(80442), i(75215), i(36030)),
        d = i(52011),
        p = i(12571),
        g = i(69237),
        m = i(66338);
      const M = new o.X({ flow_from: 'flow-from', flow_to: 'flow-to' });
      let y = (r = class extends (0, p.W)(s.wq) {
        constructor(e) {
          super(e),
            (this.density = 0.8),
            (this.color = new n.Z([255, 255, 255, 1])),
            (this.maxPathLength = 200),
            (this.trailWidth = 1.5),
            (this.flowSpeed = 10),
            (this.trailLength = 100),
            (this.smoothing = 0),
            (this.flowRepresentation = 'flow-from'),
            (this.type = 'flow'),
            (this.authoringInfo = null),
            (this.legendOptions = null);
        }
        clone() {
          var e, t;
          const {
              density: i,
              maxPathLength: a,
              trailWidth: n,
              flowSpeed: o,
              trailLength: s,
              smoothing: l,
              flowRepresentation: c,
            } = this,
            u = this.color.clone(),
            d = (this.visualVariables || []).map((e) => e.clone()),
            p = null == (e = this.authoringInfo) ? void 0 : e.clone(),
            g = null == (t = this.legendOptions) ? void 0 : t.clone();
          return new r({
            density: i,
            color: u,
            maxPathLength: a,
            trailWidth: n,
            flowSpeed: o,
            trailLength: s,
            smoothing: l,
            flowRepresentation: c,
            visualVariables: d,
            authoringInfo: p,
            legendOptions: g,
          });
        }
        getSymbol(e, t) {}
        async getSymbolAsync(e, t) {}
        getSymbols() {
          return [];
        }
      });
      (0, a._)(
        [(0, c.Cb)({ type: Number, json: { write: !0 } })],
        y.prototype,
        'density',
        void 0,
      ),
        (0, a._)(
          [(0, c.Cb)({ type: n.Z, json: { write: { allowNull: !0 } } })],
          y.prototype,
          'color',
          void 0,
        ),
        (0, a._)(
          [(0, c.Cb)({ type: Number, cast: l.t_, json: { write: !0 } })],
          y.prototype,
          'maxPathLength',
          void 0,
        ),
        (0, a._)(
          [(0, c.Cb)({ type: Number, cast: l.t_, json: { write: !0 } })],
          y.prototype,
          'trailWidth',
          void 0,
        ),
        (0, a._)(
          [(0, c.Cb)({ type: Number, json: { write: !0 } })],
          y.prototype,
          'flowSpeed',
          void 0,
        ),
        (0, a._)(
          [(0, c.Cb)({ type: Number, json: { write: !0 } })],
          y.prototype,
          'trailLength',
          void 0,
        ),
        (0, a._)(
          [(0, c.Cb)({ type: Number, cast: l.t_, json: { write: !1 } })],
          y.prototype,
          'smoothing',
          void 0,
        ),
        (0, a._)(
          [
            (0, c.Cb)({
              type: M.apiValues,
              json: {
                type: M.jsonValues,
                read: { reader: M.read },
                write: { writer: M.write },
              },
            }),
          ],
          y.prototype,
          'flowRepresentation',
          void 0,
        ),
        (0, a._)(
          [(0, u.J)({ flowRenderer: 'flow' })],
          y.prototype,
          'type',
          void 0,
        ),
        (0, a._)(
          [(0, c.Cb)({ type: g.Z, json: { write: !0 } })],
          y.prototype,
          'authoringInfo',
          void 0,
        ),
        (0, a._)(
          [(0, c.Cb)({ type: m.Z, json: { write: !0 } })],
          y.prototype,
          'legendOptions',
          void 0,
        ),
        (y = r = (0, a._)([(0, d.j)('esri.renderers.FlowRenderer')], y));
      const h = y;
    },
    28092: (e, t, i) => {
      i.d(t, { Z: () => M });
      var r = i(43697),
        a = i(96674),
        n = i(5600),
        o = (i(67676), i(80442), i(75215)),
        s = i(36030),
        l = i(52011),
        c = i(22303);
      let u = class extends a.wq {
        constructor() {
          super(...arguments),
            (this.value = null),
            (this.label = null),
            (this.color = null);
        }
      };
      (0, r._)(
        [(0, n.Cb)({ type: Number, json: { write: !0 } })],
        u.prototype,
        'value',
        void 0,
      ),
        (0, r._)(
          [(0, n.Cb)({ type: String, json: { write: !0 } })],
          u.prototype,
          'label',
          void 0,
        ),
        (0, r._)(
          [(0, n.Cb)({ type: c.Z, json: { type: [o.z8], write: !0 } })],
          u.prototype,
          'color',
          void 0,
        ),
        (u = (0, r._)([(0, l.j)('esri.renderers.support.ColormapInfo')], u));
      const d = u;
      var p,
        g = i(93010);
      let m = (p = class extends a.wq {
        constructor(e) {
          super(e),
            (this.colormapInfos = null),
            (this.type = 'raster-colormap');
        }
        static createFromColormap(e, t) {
          if (!e) return null;
          const i = 5 === e[0].length,
            r = [...e]
              .sort((e) => e[0][0] - e[1][0])
              .map((e) => {
                var r;
                return d.fromJSON({
                  value: e[0],
                  color: i ? e.slice(1, 5) : e.slice(1, 4).concat([255]),
                  label: t ? (null != (r = t[e[0]]) ? r : '') : e[0],
                });
              });
          return new p({ colormapInfos: r });
        }
        static createFromColorramp(e) {
          const t = (0, g.Jw)(e, 256);
          return p.createFromColormap(t);
        }
        clone() {
          return new p({
            colormapInfos: this.colormapInfos.map((e) => e.toJSON()),
          });
        }
        extractColormap() {
          return this.colormapInfos
            .map(({ value: e, color: t }) => [
              e,
              t.r,
              t.g,
              t.b,
              t.a > 1 ? t.a : (255 * t.a) & 255,
            ])
            .sort((e, t) => e[0] - t[0]);
        }
      });
      (0, r._)(
        [(0, n.Cb)({ type: [d], json: { write: !0 } })],
        m.prototype,
        'colormapInfos',
        void 0,
      ),
        (0, r._)(
          [(0, s.J)({ rasterColormap: 'raster-colormap' })],
          m.prototype,
          'type',
          void 0,
        ),
        (m = p =
          (0, r._)([(0, l.j)('esri.renderers.RasterColormapRenderer')], m));
      const M = m;
    },
    73622: (e, t, i) => {
      i.d(t, { Z: () => g });
      var r,
        a = i(43697),
        n = i(96674),
        o = i(22974),
        s = i(5600),
        l = (i(75215), i(36030)),
        c = i(71715),
        u = i(52011),
        d = i(94593);
      let p = (r = class extends n.wq {
        constructor(e) {
          super(e),
            (this.altitude = 45),
            (this.azimuth = 315),
            (this.colorRamp = null),
            (this.hillshadeType = 'multi-directional'),
            (this.pixelSizePower = 0.664),
            (this.pixelSizeFactor = 0.024),
            (this.scalingType = 'none'),
            (this.type = 'raster-shaded-relief'),
            (this.zFactor = 1);
        }
        readColorRamp(e) {
          return (0, d.i)(e);
        }
        clone() {
          return new r({
            hillshadeType: this.hillshadeType,
            altitude: this.altitude,
            azimuth: this.azimuth,
            zFactor: this.zFactor,
            scalingType: this.scalingType,
            pixelSizeFactor: this.pixelSizeFactor,
            pixelSizePower: this.pixelSizePower,
            colorRamp: (0, o.d9)(this.colorRamp),
          });
        }
      });
      (0, a._)(
        [(0, s.Cb)({ type: Number, json: { write: !0 } })],
        p.prototype,
        'altitude',
        void 0,
      ),
        (0, a._)(
          [(0, s.Cb)({ type: Number, json: { write: !0 } })],
          p.prototype,
          'azimuth',
          void 0,
        ),
        (0, a._)(
          [(0, s.Cb)({ types: d.V, json: { write: !0 } })],
          p.prototype,
          'colorRamp',
          void 0,
        ),
        (0, a._)([(0, c.r)('colorRamp')], p.prototype, 'readColorRamp', null),
        (0, a._)(
          [
            (0, s.Cb)({
              type: ['traditional', 'multi-directional'],
              json: { write: !0 },
            }),
          ],
          p.prototype,
          'hillshadeType',
          void 0,
        ),
        (0, a._)(
          [(0, s.Cb)({ type: Number, json: { write: !0 } })],
          p.prototype,
          'pixelSizePower',
          void 0,
        ),
        (0, a._)(
          [(0, s.Cb)({ type: Number, json: { write: !0 } })],
          p.prototype,
          'pixelSizeFactor',
          void 0,
        ),
        (0, a._)(
          [(0, s.Cb)({ type: ['none', 'adjusted'], json: { write: !0 } })],
          p.prototype,
          'scalingType',
          void 0,
        ),
        (0, a._)(
          [(0, l.J)({ rasterShadedRelief: 'raster-shaded-relief' })],
          p.prototype,
          'type',
          void 0,
        ),
        (0, a._)(
          [(0, s.Cb)({ type: Number, json: { write: !0 } })],
          p.prototype,
          'zFactor',
          void 0,
        ),
        (p = r =
          (0, a._)([(0, u.j)('esri.renderers.RasterShadedReliefRenderer')], p));
      const g = p;
    },
    60849: (e, t, i) => {
      i.d(t, { Z: () => M });
      var r,
        a = i(43697),
        n = i(96674),
        o = i(22974),
        s = i(5600),
        l = (i(75215), i(36030)),
        c = i(71715),
        u = i(52011),
        d = i(30556),
        p = i(75509),
        g = i(94593);
      let m = (r = class extends n.wq {
        constructor(e) {
          super(e),
            (this.colorRamp = null),
            (this.computeGamma = !1),
            (this.dynamicRangeAdjustment = !1),
            (this.gamma = []),
            (this.maxPercent = null),
            (this.minPercent = null),
            (this.numberOfStandardDeviations = null),
            (this.outputMax = null),
            (this.outputMin = null),
            (this.sigmoidStrengthLevel = null),
            (this.statistics = []),
            (this.histograms = null),
            (this.useGamma = !1),
            (this.stretchType = 'none'),
            (this.type = 'raster-stretch');
        }
        readColorRamp(e) {
          if (e) return (0, g.i)(e);
        }
        writeStatistics(e, t, i) {
          var r;
          null != (r = e) &&
            r.length &&
            (Array.isArray(e[0]) ||
              (e = e.map((e) => [e.min, e.max, e.avg, e.stddev])),
            (t[i] = e));
        }
        readStretchType(e, t) {
          let i = t.stretchType;
          return 'number' == typeof i && (i = p.J[i]), p.v.read(i);
        }
        clone() {
          return new r({
            stretchType: this.stretchType,
            outputMin: this.outputMin,
            outputMax: this.outputMax,
            useGamma: this.useGamma,
            computeGamma: this.computeGamma,
            statistics: (0, o.d9)(this.statistics),
            gamma: (0, o.d9)(this.gamma),
            sigmoidStrengthLevel: this.sigmoidStrengthLevel,
            numberOfStandardDeviations: this.numberOfStandardDeviations,
            minPercent: this.minPercent,
            maxPercent: this.maxPercent,
            colorRamp: (0, o.d9)(this.colorRamp),
            histograms: (0, o.d9)(this.histograms),
            dynamicRangeAdjustment: this.dynamicRangeAdjustment,
          });
        }
      });
      (0, a._)(
        [(0, s.Cb)({ types: g.V, json: { write: !0 } })],
        m.prototype,
        'colorRamp',
        void 0,
      ),
        (0, a._)([(0, c.r)('colorRamp')], m.prototype, 'readColorRamp', null),
        (0, a._)(
          [(0, s.Cb)({ type: Boolean, json: { write: !0 } })],
          m.prototype,
          'computeGamma',
          void 0,
        ),
        (0, a._)(
          [
            (0, s.Cb)({
              type: Boolean,
              json: { write: { target: 'dra' }, read: { source: 'dra' } },
            }),
          ],
          m.prototype,
          'dynamicRangeAdjustment',
          void 0,
        ),
        (0, a._)(
          [(0, s.Cb)({ type: [Number], json: { write: !0 } })],
          m.prototype,
          'gamma',
          void 0,
        ),
        (0, a._)(
          [(0, s.Cb)({ type: Number, json: { write: !0 } })],
          m.prototype,
          'maxPercent',
          void 0,
        ),
        (0, a._)(
          [(0, s.Cb)({ type: Number, json: { write: !0 } })],
          m.prototype,
          'minPercent',
          void 0,
        ),
        (0, a._)(
          [(0, s.Cb)({ type: Number, json: { write: !0 } })],
          m.prototype,
          'numberOfStandardDeviations',
          void 0,
        ),
        (0, a._)(
          [
            (0, s.Cb)({
              type: Number,
              json: { read: { source: 'max' }, write: { target: 'max' } },
            }),
          ],
          m.prototype,
          'outputMax',
          void 0,
        ),
        (0, a._)(
          [
            (0, s.Cb)({
              type: Number,
              json: { read: { source: 'min' }, write: { target: 'min' } },
            }),
          ],
          m.prototype,
          'outputMin',
          void 0,
        ),
        (0, a._)(
          [(0, s.Cb)({ type: Number, json: { write: !0 } })],
          m.prototype,
          'sigmoidStrengthLevel',
          void 0,
        ),
        (0, a._)(
          [(0, s.Cb)({ json: { type: [[Number]], write: !0 } })],
          m.prototype,
          'statistics',
          void 0,
        ),
        (0, a._)([(0, s.Cb)()], m.prototype, 'histograms', void 0),
        (0, a._)(
          [(0, d.c)('statistics')],
          m.prototype,
          'writeStatistics',
          null,
        ),
        (0, a._)(
          [(0, s.Cb)({ type: Boolean, json: { write: !0 } })],
          m.prototype,
          'useGamma',
          void 0,
        ),
        (0, a._)(
          [
            (0, s.Cb)({
              type: p.v.apiValues,
              json: { type: p.v.jsonValues, write: p.v.write },
            }),
          ],
          m.prototype,
          'stretchType',
          void 0,
        ),
        (0, a._)(
          [(0, c.r)('stretchType', ['stretchType'])],
          m.prototype,
          'readStretchType',
          null,
        ),
        (0, a._)(
          [(0, l.J)({ rasterStretch: 'raster-stretch' })],
          m.prototype,
          'type',
          void 0,
        ),
        (m = r =
          (0, a._)([(0, u.j)('esri.renderers.RasterStretchRenderer')], m));
      const M = m;
    },
    3943: (e, t, i) => {
      i.d(t, { Z: () => E });
      var r = i(43697),
        a = i(22303),
        n = (i(66577), i(38171)),
        o = i(78223),
        s = i(35454),
        l = i(96674),
        c = i(22974),
        u = i(70586),
        d = i(5600),
        p = (i(75215), i(36030)),
        g = i(71715),
        m = i(52011),
        M = i(82526),
        y = i(80676),
        h = i(16050),
        I = i(12571),
        w = i(32984),
        f = i(89513),
        b = i(27922),
        v = i(28101),
        C = i(4095),
        A = i(77987),
        D = i(66643),
        T = (i(80442), i(65617));
      function L(e) {
        for (const t of e) if ('number' == typeof t) return t;
        return null;
      }
      function S(e, t, i) {
        for (let r = 0; r < 3; r++) {
          const a = e[r];
          switch (a) {
            case 'symbol-value':
              return null != i[r] ? i[r] / t[r] : 1;
            case 'proportional':
              break;
            default:
              if (a && t[r]) return a / t[r];
          }
        }
        return 1;
      }
      function j(e, t, i, r) {
        switch (e) {
          case 'proportional':
            return i * r;
          case 'symbol-value':
            return null != t ? t : i;
          default:
            return e;
        }
      }
      async function N(e, t) {
        if (e && t)
          return (0, o.dU)(e)
            ? (async function (e, t) {
                const r = e.symbolLayers;
                r &&
                  (await (0, D.Ed)(r, async (e) =>
                    (async function (e, t) {
                      switch (e.type) {
                        case 'extrude':
                          !(function (e, t) {
                            e.size = 'number' == typeof t[2] ? t[2] : 0;
                          })(e, t);
                          break;
                        case 'icon':
                        case 'line':
                        case 'text':
                          !(function (e, t) {
                            const i = L(t);
                            (0, u.pC)(i) && (e.size = i);
                          })(e, t);
                          break;
                        case 'path':
                          !(function (e, t) {
                            const i = S(t, T.O, [e.width, void 0, e.height]);
                            (e.width = j(t[0], e.width, 1, i)),
                              (e.height = j(t[2], e.height, 1, i));
                          })(e, t);
                          break;
                        case 'object':
                          await (async function (e, t) {
                            const { resourceSize: r, symbolSize: a } =
                                await (async function (e) {
                                  const t = await i
                                      .e(2134)
                                      .then(i.bind(i, 42134)),
                                    r = await t.computeObjectLayerResourceSize(
                                      e,
                                      10,
                                    ),
                                    { width: a, height: n, depth: o } = e,
                                    s = [a, o, n];
                                  let l = 1;
                                  for (let e = 0; e < 3; e++)
                                    if (null != s[e]) {
                                      l = s[e] / r[e];
                                      break;
                                    }
                                  for (let e = 0; e < 3; e++)
                                    null == s[e] && (s[e] = r[e] * l);
                                  return { resourceSize: r, symbolSize: s };
                                })(e),
                              n = S(t, r, a);
                            (e.width = j(t[0], a[0], r[0], n)),
                              (e.depth = j(t[1], a[1], r[1], n)),
                              (e.height = j(t[2], a[2], r[2], n));
                          })(e, t);
                      }
                    })(e, t),
                  ));
              })(e, t)
            : void (
                (0, o.cT)(e) &&
                (function (e, t) {
                  const i = L(t);
                  if (!(0, u.Wi)(i))
                    switch (e.type) {
                      case 'simple-marker':
                        e.size = i;
                        break;
                      case 'picture-marker': {
                        const t = e.width / e.height;
                        t > 1
                          ? ((e.width = i), (e.height = i * t))
                          : ((e.width = i * t), (e.height = i));
                        break;
                      }
                      case 'simple-line':
                        e.width = i;
                        break;
                      case 'text':
                        e.font.size = i;
                    }
                })(e, t)
              );
      }
      new (i(57520), i(99880), i(3172), i(74669)).Z(1e3),
        new a.Z([128, 128, 128]),
        i(52879),
        new a.Z('white');
      var x,
        Z = i(13473),
        z = i(37898);
      const B = new Set([
          'esriMetersPerSecond',
          'esriKilometersPerHour',
          'esriKnots',
          'esriFeetPerSecond',
          'esriMilesPerHour',
        ]),
        U = new s.X({
          beaufort_ft: 'beaufort-ft',
          beaufort_km: 'beaufort-km',
          beaufort_kn: 'beaufort-kn',
          beaufort_m: 'beaufort-m',
          beaufort_mi: 'beaufort-mi',
          classified_arrow: 'classified-arrow',
          ocean_current_kn: 'ocean-current-kn',
          ocean_current_m: 'ocean-current-m',
          simple_scalar: 'simple-scalar',
          single_arrow: 'single-arrow',
          wind_speed: 'wind-barb',
        }),
        H = new s.X({ flow_from: 'flow-from', flow_to: 'flow-to' });
      let k = (x = class extends (0, I.W)(l.wq) {
        constructor(e) {
          super(e),
            (this.attributeField = 'Magnitude'),
            (this.flowRepresentation = 'flow-from'),
            (this.rotationType = 'arithmetic'),
            (this.style = 'single-arrow'),
            (this.symbolTileSize = 50),
            (this.type = 'vector-field');
        }
        readInputUnit(e, t) {
          return B.has(e) ? y.NL.fromJSON(e) : null;
        }
        readOutputUnit(e, t) {
          return B.has(e) ? y.NL.fromJSON(e) : null;
        }
        get styleRenderer() {
          const e = this.style,
            t = this.attributeField,
            i = this._createStyleRenderer(e);
          return (i.field = t), i;
        }
        get sizeVariables() {
          const e = [];
          if (this.visualVariables)
            for (const t of this.visualVariables)
              'size' === t.type && e.push(t);
          if (0 === e.length) {
            const t = new b.Z({
              field: 'Magnitude',
              minSize: 0.2 * this.symbolTileSize,
              maxSize: 0.8 * this.symbolTileSize,
            });
            this.visualVariables
              ? this.visualVariables.push(t)
              : this._set('visualVariables', [t]),
              e.push(t);
          }
          return e;
        }
        get rotationVariables() {
          const e = [];
          if (this.visualVariables)
            for (const t of this.visualVariables)
              'rotation' === t.type && e.push(t);
          if (0 === e.length) {
            const t = new f.Z({
              field: 'Direction',
              rotationType: this.rotationType,
            });
            this.visualVariables
              ? this.visualVariables.push(t)
              : this._set('visualVariables', [t]),
              e.push(t);
          }
          return e;
        }
        clone() {
          return new x({
            attributeField: this.attributeField,
            flowRepresentation: this.flowRepresentation,
            rotationType: this.rotationType,
            symbolTileSize: this.symbolTileSize,
            style: this.style,
            visualVariables: (0, c.d9)(this.visualVariables),
            inputUnit: this.inputUnit,
            outputUnit: this.outputUnit,
          });
        }
        async getGraphicsFromPixelData(e, t = !1, i = []) {
          var r;
          const a = new Array(),
            o = (0, y.Yx)(this.inputUnit, this.outputUnit),
            s =
              (null == (r = this.rotationVariables[0])
                ? void 0
                : r.rotationType) || this.rotationType,
            l = t
              ? (0, y.KC)(e.pixelBlock, 'vector-uv', s, o)
              : (0, y.QI)(e.pixelBlock, 'vector-magdir', o);
          if ((0, u.Wi)(l)) return a;
          const c = e.extent,
            d = l.mask && l.mask.length > 0;
          let p = 0;
          const g = (c.xmax - c.xmin) / l.width,
            m = (c.ymax - c.ymin) / l.height;
          for (let e = 0; e < l.height; e++)
            for (let t = 0; t < l.width; t++, p++) {
              let r = new Z.Z({
                x: c.xmin + t * g + g / 2,
                y: c.ymax - e * m - m / 2,
                spatialReference: c.spatialReference,
              });
              r = (await (0, M.aX)(r))[0];
              const o = i.some((e) => e.intersects(r));
              if ((!d || l.mask[p]) && !o) {
                const e = {
                    Magnitude: l.pixels[0][p],
                    Direction: l.pixels[1][p],
                  },
                  t = new n.Z({
                    geometry: {
                      type: 'point',
                      x: r.x,
                      y: r.y,
                      spatialReference: c.spatialReference,
                    },
                    attributes: e,
                  });
                (t.symbol = this._getVisualVariablesAppliedSymbol(t)),
                  a.push(t);
              }
            }
          return a;
        }
        getSymbol(e, t) {}
        async getSymbolAsync(e, t) {}
        getSymbols() {
          return [];
        }
        getClassBreakInfos() {
          var e;
          return null == (e = this.styleRenderer) ? void 0 : e.classBreakInfos;
        }
        getDefaultSymbol() {
          var e;
          return null == (e = this.styleRenderer) ? void 0 : e.defaultSymbol;
        }
        _getDefaultSymbol(e) {
          return new A.Z({
            path: 'M14,32 14,18 9,23 16,3 22,23 17,18 17,32 z',
            outline: new C.Z({ width: 0 }),
            size: 20,
            color: e || new a.Z([0, 92, 230]),
          });
        }
        _getVisualVariablesAppliedSymbol(e) {
          if (!e) return;
          let t = this.styleRenderer && this.styleRenderer.getSymbol(e);
          t = t.clone();
          const i = this.sizeVariables,
            r = this.rotationVariables;
          if (
            (i &&
              i.length &&
              this.sizeVariables.forEach((i) => N(t, (0, v.PR)([i], e))),
            r && r.length)
          ) {
            const i =
              ('flow-to' === this.flowRepresentation) ==
              ('ocean-current-kn' === this.style ||
                'ocean-current-m' === this.style)
                ? 0
                : 180;
            (e.attributes.Direction = e.attributes.Direction + i),
              this.rotationVariables.forEach((i) =>
                (function (e, t, i) {
                  if (e && null != t)
                    if ((0, o.dU)(e)) {
                      const r = e.symbolLayers;
                      r &&
                        r.forEach((e) => {
                          if (e && 'object' === e.type)
                            switch (i) {
                              case 'tilt':
                                e.tilt = t;
                                break;
                              case 'roll':
                                e.roll = t;
                                break;
                              default:
                                e.heading = t;
                            }
                        });
                    } else
                      (0, o.cT)(e) &&
                        (('simple-marker' !== e.type &&
                          'picture-marker' !== e.type &&
                          'text' !== e.type) ||
                          (e.angle = t));
                })(t, (0, v.cM)(i, e), i.axis),
              );
          }
          return t;
        }
        _createStyleRenderer(e) {
          let t = {
            defaultSymbol: this._getDefaultSymbol(),
            classBreakInfos: [],
          };
          switch (e) {
            case 'single-arrow':
              t = this._createSingleArrowRenderer();
              break;
            case 'beaufort-kn':
              t = this._createBeaufortKnotsRenderer();
              break;
            case 'beaufort-m':
              t = this._createBeaufortMeterRenderer();
              break;
            case 'beaufort-ft':
              t = this._createBeaufortFeetRenderer();
              break;
            case 'beaufort-mi':
              t = this._createBeaufortMilesRenderer();
              break;
            case 'beaufort-km':
              t = this._createBeaufortKilometersRenderer();
              break;
            case 'ocean-current-m':
              t = this._createCurrentMeterRenderer();
              break;
            case 'ocean-current-kn':
              t = this._createCurrentKnotsRenderer();
              break;
            case 'simple-scalar':
              t = this._createSimpleScalarRenderer();
              break;
            case 'wind-barb':
              t = this._createWindBarbsRenderer();
              break;
            case 'classified-arrow':
              t = this._createClassifiedArrowRenderer();
          }
          return new h.Z(t);
        }
        _createSingleArrowRenderer() {
          return { defaultSymbol: this._getDefaultSymbol() };
        }
        _createBeaufortKnotsRenderer() {
          return {
            defaultSymbol: this._getDefaultSymbol(new a.Z([214, 47, 39])),
            classBreakInfos: this._getClassBreaks(
              [0, 1, 3, 6, 10, 16, 21, 27, 33, 40, 47, 55, 63],
              [
                [40, 146, 199],
                [89, 162, 186],
                [129, 179, 171],
                [160, 194, 155],
                [191, 212, 138],
                [218, 230, 119],
                [250, 250, 100],
                [252, 213, 83],
                [252, 179, 102],
                [250, 141, 52],
                [247, 110, 42],
                [240, 71, 29],
              ],
            ),
          };
        }
        _createBeaufortMeterRenderer() {
          return {
            defaultSymbol: this._getDefaultSymbol(new a.Z([214, 47, 39])),
            classBreakInfos: this._getClassBreaks(
              [
                0, 0.2, 1.8, 3.3, 5.4, 8.5, 11, 14.1, 17.2, 20.8, 24.4, 28.6,
                32.7,
              ],
              [
                [69, 117, 181],
                [101, 137, 184],
                [132, 158, 186],
                [162, 180, 189],
                [192, 204, 190],
                [222, 227, 191],
                [255, 255, 191],
                [255, 220, 161],
                [250, 185, 132],
                [245, 152, 105],
                [237, 117, 81],
                [232, 21, 21],
              ],
            ),
          };
        }
        _createBeaufortFeetRenderer() {
          const e = this._getDefaultSymbol(new a.Z([214, 47, 39]));
          let t = [
            0, 0.2, 1.8, 3.3, 5.4, 8.5, 11, 14.1, 17.2, 20.8, 24.4, 28.6, 32.7,
          ];
          return (
            (t = t.map((e) => 3.28084 * e)),
            {
              defaultSymbol: e,
              classBreakInfos: this._getClassBreaks(t, [
                [69, 117, 181],
                [101, 137, 184],
                [132, 158, 186],
                [162, 180, 189],
                [192, 204, 190],
                [222, 227, 191],
                [255, 255, 191],
                [255, 220, 161],
                [250, 185, 132],
                [245, 152, 105],
                [237, 117, 81],
                [232, 21, 21],
              ]),
            }
          );
        }
        _createBeaufortMilesRenderer() {
          const e = this._getDefaultSymbol(new a.Z([214, 47, 39]));
          let t = [
            0, 0.2, 1.8, 3.3, 5.4, 8.5, 11, 14.1, 17.2, 20.8, 24.4, 28.6, 32.7,
          ];
          return (
            (t = t.map((e) => 2.23694 * e)),
            {
              defaultSymbol: e,
              classBreakInfos: this._getClassBreaks(t, [
                [69, 117, 181],
                [101, 137, 184],
                [132, 158, 186],
                [162, 180, 189],
                [192, 204, 190],
                [222, 227, 191],
                [255, 255, 191],
                [255, 220, 161],
                [250, 185, 132],
                [245, 152, 105],
                [237, 117, 81],
                [232, 21, 21],
              ]),
            }
          );
        }
        _createBeaufortKilometersRenderer() {
          const e = this._getDefaultSymbol(new a.Z([214, 47, 39]));
          let t = [
            0, 0.2, 1.8, 3.3, 5.4, 8.5, 11, 14.1, 17.2, 20.8, 24.4, 28.6, 32.7,
          ];
          return (
            (t = t.map((e) => 3.6 * e)),
            {
              defaultSymbol: e,
              classBreakInfos: this._getClassBreaks(t, [
                [69, 117, 181],
                [101, 137, 184],
                [132, 158, 186],
                [162, 180, 189],
                [192, 204, 190],
                [222, 227, 191],
                [255, 255, 191],
                [255, 220, 161],
                [250, 185, 132],
                [245, 152, 105],
                [237, 117, 81],
                [232, 21, 21],
              ]),
            }
          );
        }
        _createCurrentMeterRenderer() {
          return {
            defaultSymbol: this._getDefaultSymbol(new a.Z([177, 177, 177])),
            classBreakInfos: this._getClassBreaks(
              [0, 0.5, 1, 1.5, 2],
              [
                [78, 26, 153],
                [179, 27, 26],
                [202, 128, 26],
                [177, 177, 177],
              ],
            ),
          };
        }
        _createCurrentKnotsRenderer() {
          return {
            defaultSymbol: this._getDefaultSymbol(new a.Z([177, 177, 177])),
            classBreakInfos: this._getClassBreaks(
              [0, 0.25, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4],
              [
                [0, 0, 0],
                [0, 37, 100],
                [78, 26, 153],
                [151, 0, 100],
                [179, 27, 26],
                [177, 78, 26],
                [202, 128, 26],
                [177, 179, 52],
                [177, 177, 177],
              ],
            ),
          };
        }
        _createClassifiedArrowRenderer() {
          var e;
          const t = this._getDefaultSymbol(new a.Z([56, 168, 0]));
          let i = [0, 1e-6, 3.5, 7, 10.5, 14];
          if (null != (e = this.sizeVariables) && e.length) {
            const e = this.sizeVariables[0].minDataValue,
              t = this.sizeVariables[0].maxDataValue;
            if (e && t) {
              const r = (t - e) / 5;
              i = Array.from(Array(6).keys()).map((t) => e + r * t);
            }
          }
          return {
            defaultSymbol: t,
            classBreakInfos: this._getClassBreaks(i, [
              [56, 168, 0],
              [139, 309, 0],
              [255, 255, 0],
              [255, 128, 0],
              [255, 0, 0],
            ]),
          };
        }
        _createSimpleScalarRenderer() {
          return {
            defaultSymbol: z.Z.fromJSON({
              imageData:
                'iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAQAAABLVLlLAAAABGdBTUEAAYagMeiWXwAAAAJiS0dEAACqjSMyAAAACXBIWXMAAABIAAAASABGyWs+AAAC3ElEQVRIx9XXvW4cVRQH8N982btpsIREJECyiCXsxX4DKh6AliqGKCBBE2SlwlHgAbBD/AKmyEYUeQ1KahPZSZQvBCkQLTHZ7KGY8Xodz4w3a1NwbzVzz/znfJ//zbStVC5q3icKak9GAs2QIdDx3PtW/S011NW3p+M5Eomh11ipTIKe6+4LQzHaQ+G+63pIZNJJQXMpljwTwj1brpgx5w1zZlyx5Z4QnllEIm2xeeSUHBf0hV0bejo1Uh09G3aFvgXk7cCJFBc9EdaRVuHJJaOdKyTV2TVhYLMduNR0Q9gxL5GaaTDw8GzejrDRBpxWoGsySRW0dttKuattwNkIlFw2YXgzOdYq4Ox49PlM+JrKd5OusjTWhBuVxUfMX/KXXZ3WEmkuqa67wspR4BTbwtKr/5u4fFgStse/T7EifFPnnYl9zPq4vmUOPrRndgoHjDti1gOPqlyXoifcRNGQzUd31lDyfHmob1Gp35vSr+P6vilcQ5Egtyd8YF/ySg9NhPM+9M/IOaHwp5+PSZayXTvCogEUwlatC3J8LLwYtcWB8EuDXQVuCkV5/B4eNHb7wGBs87LBDS+xjdVSn09wq1G8dFM+9tSUhIGneLvUdniKxKpTYljCpu3j7rVWlHj/P23v4NPGUEyeCQnexe9lJjzEQqMjJs+EzNAX6B98dBZVRmroJx95x/A/6gln18EyfCUsl+qdXb/tjvfbw+mwforpUOBz4XLVoBwAn3aWnfeH246NyBXhrq7TTN5lNSP9RkU+puUJm3W2Tsdq0nZWM07srk7MwQrZSRysjjGWBLRJNsNbfj2JMR4AbxpU1XLAb9Mxfpsq5EjMuuiR8L0JiHOOBX3hiUvOmavN0nMueSzcceFk0BK4pMqLo7vDD1Z0qrtDx7Itt4Xwm9UqbMmk8S0Dtuzb2pvOU99Z1nLTOfleNmvfZfP2pYZmPfajwosKdDBNpacNpVGGsWX9CyDI8Xq/Sj6QAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE0LTExLTEwVDAzOjE3OjU4LTA1OjAwF+tHyQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNC0xMS0xMFQwMzoxNzo1OC0wNTowMGa2/3UAAAAASUVORK5CYII=',
              height: 20,
              width: 20,
              type: 'esriPMS',
              angle: 0,
            }),
          };
        }
        _createWindBarbsRenderer() {
          const e = Array.from(Array(31).keys()).map((e) => 5 * e),
            t = [
              {
                range: '0-5',
                path: 'M20 20 M5 20 A15 15 0 1 0 35 20 A15 15 0 1 0 5 20 M20 20 M10 20 A10 10 0 1 0 30 20 A10 10 0 1 0 10 20',
                imageData:
                  'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTIwIDIwIE01IDIwIEExNSAxNSAwIDEgMCAzNSAyMCBBMTUgMTUgMCAxIDAgNSAyMCBNMjAgMjAgTTEwIDIwIEExMCAxMCAwIDEgMCAzMCAyMCBBMTAgMTAgMCAxIDAgMTAgMjAiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=',
              },
              {
                range: '5-10',
                path: 'M25 0 L25 40 M25 35 L17.5 37.5',
                imageData:
                  'PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjkgMCAyNyA0NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMjUgMCBMMjUgNDAgTTI1IDM1IEwxNy41IDM3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=',
              },
              {
                range: '10-15',
                path: 'M25 0 L25 40 L10 45 L25 40',
                imageData:
                  'PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjkgMCAyNyA0NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMjUgMCBMMjUgNDAgTDEwIDQ1IEwyNSA0MCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==',
              },
              {
                range: '15-20',
                path: 'M25 0 L25 40 L10 45 L25 40 M25 35 L17.5 37.5',
                imageData:
                  'PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjEyIDAgMTUgNDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxNy41IDM3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=',
              },
              {
                range: '20-25',
                path: 'M25 0 L25 40 L10 45 L25 40 M25 35 L10 40',
                imageData:
                  'PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjkgMCAyNiA0NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMjUgMCBMMjUgNDAgTDEwIDQ1IEwyNSA0MCBNMjUgMzUgTDEwIDQwIiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+',
              },
              {
                range: '25-30',
                path: 'M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L17.5 32.5',
                imageData:
                  'PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjkgMCAyNiA0NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMjUgMCBMMjUgNDAgTDEwIDQ1IEwyNSA0MCBNMjUgMzUgTDEwIDQwIEwyNSAzNSBNMjUgMzAgTDE3LjUgMzIuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==',
              },
              {
                range: '30-35',
                path: 'M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L10 35',
                imageData:
                  'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0NiI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==',
              },
              {
                range: '35-40',
                path: 'M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L17.5 27.5',
                imageData:
                  'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0NiI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxNy41IDI3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=',
              },
              {
                range: '40-45',
                path: 'M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30',
                imageData:
                  'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0NiI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==',
              },
              {
                range: '45-50',
                path: 'M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L17.5 22.5',
                imageData:
                  'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0NiI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxNy41IDIyLjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=',
              },
              {
                range: '50-55',
                path: 'M25 0 L25 40 L10 40 L25 35',
                imageData:
                  'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=',
              },
              {
                range: '55-60',
                path: 'M25 0 L25 40 L10 40 L25 35 M25 30 L17.5 32.5',
                imageData:
                  'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxNy41IDMyLjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=',
              },
              {
                range: '60-65',
                path: 'M25 0 L25 40 L10 40 L25 35 M25 30 L10 35',
                imageData:
                  'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==',
              },
              {
                range: '65-70',
                path: 'M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L17.5 27.5',
                imageData:
                  'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxNy41IDI3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=',
              },
              {
                range: '70-75',
                path: 'M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30',
                imageData:
                  'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==',
              },
              {
                range: '75-80',
                path: 'M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L17.5 22.5',
                imageData:
                  'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxNy41IDIyLjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=',
              },
              {
                range: '80-85',
                path: 'M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L10 25',
                imageData:
                  'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxMCAyNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==',
              },
              {
                range: '85-90',
                path: 'M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L10 25 L25 20 M25 15 L17.5 17.5',
                imageData:
                  'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxMCAyNSBMMjUgMjAgTTI1IDE1IEwxNy41IDE3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=',
              },
              {
                range: '90-95',
                path: 'M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L10 25 L25 20 M25 15 L10 20',
                imageData:
                  'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxMCAyNSBMMjUgMjAgTTI1IDE1IEwxMCAyMCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==',
              },
              {
                range: '95-100',
                path: 'M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L10 25 L25 20 M25 15 L10 20 L25 15 M25 10 L17.5 12.5',
                imageData:
                  'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxMCAyNSBMMjUgMjAgTTI1IDE1IEwxMCAyMCBMMjUgMTUgTTI1IDEwIEwxNy41IDEyLjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=',
              },
              {
                range: '100-105',
                path: 'M25 0 L25 40 L10 40 L25 35 L10 35 L25 30',
                imageData:
                  'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==',
              },
              {
                range: '105-110',
                path: 'M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L17.5 27.5',
                imageData:
                  'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDE3LjUgMjcuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==',
              },
              {
                range: '110-115',
                path: 'M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30',
                imageData:
                  'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+',
              },
              {
                range: '115-120',
                path: 'M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L17.5 22.5',
                imageData:
                  'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDE3LjUgMjIuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==',
              },
              {
                range: '120-125',
                path: 'M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25',
                imageData:
                  'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+',
              },
              {
                range: '125-130',
                path: 'M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L17.5 17.5',
                imageData:
                  'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDE3LjUgMTcuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==',
              },
              {
                range: '130-135',
                path: 'M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L10 20',
                imageData:
                  'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDEwIDIwIiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+',
              },
              {
                range: '135-140',
                path: 'M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L10 20 M25 15 M25 10 L17.5 12.5',
                imageData:
                  'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDEwIDIwIE0yNSAxNSBNMjUgMTAgTDE3LjUgMTIuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg==',
              },
              {
                range: '140-145',
                path: 'M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L10 20 M25 15 M25 10 L17.5 12.5',
                imageData:
                  'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDEwIDIwIE0yNSAxNSBNMjUgMTAgTDEwIDE1IiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+',
              },
              {
                range: '145-150',
                path: 'M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L10 20 M25 15 M25 10 L17.5 12.5',
                imageData:
                  'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDEwIDIwIE0yNSAxNSBNMjUgMTAgTDEwIDE1IE0yNSAxMCBNMjUgNSBMMTcuNSA3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4=',
              },
            ],
            i = z.Z.fromJSON({
              imageData:
                'iVBORw0KGgoAAAANSUhEUgAAACgAAAApCAQAAADtq6NDAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAJiS0dEAP+Hj8y/AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAEY0lEQVRIx5XXWWxWRRQH8N+d+31tUdGAVjGglYJABFEBY91jfDAg7piYaFTccA++uMQEFRcSXlATtxiXqMQt4G4iisYl0ai4sIQYtVFZ1KIFKdTS0l4f7vRCS5fPebozc+bM/2z/Mzcx0AgSiUxXnKfIdMn875FIhX53U2n/B/s+kKM4UINTjTBZImixxnrv+9a2iL6zEoUBXcoudrWj/OtHm3wt02lfU9Qao9OnHvIhgmww84MEl1qnxfNmGrqHxAizLdPpC6chGcAxKGGcL+30gOERf1BSpUqVslQSV8d5ReZFe8VQ9avufJn31cWwlJV7iafKStGOE/1qvfH9qUxxu8ydUdmuSKbGO8YUdT2inKLG69pM70tliktl5qIkCAJGmusDG7Vqsc0WjZa4UBlBiA5YZIcjYzB7qDtH5kaUJFLs7RGZTZ42W4PRRmtwvbdt1+wGiaS4drEtDttdZYIDNVuAclR3vA3+dI3qHqmVSy7U6Tv1MScCPvPR7nIpFlsdCy3FdTLPGhK92e2CUITjMJ9ocwKxnsZqc3O3JwMma3d6UVLnyVxB4aXemZqvPqLdpJhW3KVVbY4yYImPo6M5Urv50fj+0z/FG9YaEiENs8UtMfXUaTeTePNHlhXfA1UU+2lyD1Il3Gtt9+adfpNG7dNlpg2U/T3KYLZ2dUWFdTgp3/rQ4sK973qnInV5TIf40x3dhvrJPBiqyWUo4wAtLqhQYS71qK+QKOFRywmGK/kpikzV6WMKhh58vGWs4TIJNjiEYLIuP8Tt4/zmLyqk+AyrJSbF+Qq1DgqRUPMxyl+9q3IQhX/rMCJ6tEunriDs1oSyQZKlr9AkhT2ZIARbJfaJS1vtVbHB+Rgi0RK/y1q1BWsEEyLoz40xtGKcARPVWB1BTPO7f4LNtpkUl1aoMbViLyZo0GRjPD3BxnxjqXeLYlvhqYrzMMG3HoyJXa3JjfnGlbYYFlP7Jh3qKsKY4hQ7TY0nG+xwRL61n63mxHtqNHosigyMLmClNwvuecFnOZB88nNBDzNkzhxEZaKMBVoKapggMzvHHXBEpNSSFAvtcFRsVn0bW8LlMmcXs+c0Kne3gRR32+zg4uXwjC6zit6Wt4a8LXVfcp/MtQXHn2ynGbuCmb8GvvFeJLEE82ReU9/n6+dkq2x3buG9Wn94smcgAw631RPR7BTH+kbmHReZoEpOdEe7zWqZl40s0JWs9Hmv7hjBHqPDwsjGKVJnWWqjbdZp1KhJi0aPmxYZsIRhlttgeF+Jlke41QcOQKoqilSb6HJzSvNG3G/UoWnxwsmt+sVaYwd63dRbqdnMyCPVeyRPvpYgdavM22oGKoMUVRbJfOWMwidJ8Zzb1UvmWK/VVUXzHaTjjrVYh1897HT7xxYEVUaa5SWb/WO+YUWa9SrwvigzM8YlzlYv2GSdVCYxxlBtVnnFq5olwp5/BEk/OLsf5LUmG2+inRJdVvjZ97ZH9/zP34ug1O91pf4p+D+JYBpvrKxfbwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNC0xMS0xMFQwMzoxMjowOS0wNTowMB9ViV0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTQtMTEtMTBUMDM6MTI6MDktMDU6MDBuCDHhAAAAAElFTkSuQmCC',
              height: 20,
              width: 20,
              type: 'esriPMS',
              angle: 0,
            }),
            r = e.map((r, a) => {
              let n;
              if (a !== e.length - 1)
                if (0 === a) n = { minValue: r, maxValue: e[a + 1], symbol: i };
                else {
                  const i = z.Z.fromJSON({
                    type: 'esriPMS',
                    imageData: t[a].imageData,
                    contentType: 'image/svg+xml',
                    height: 32,
                    width: 32,
                    angle: 0,
                  });
                  n = { minValue: r, maxValue: e[a + 1], symbol: i };
                }
              return new w.Z(n);
            });
          return { defaultSymbol: i, classBreakInfos: r };
        }
        _getClassBreaks(e, t) {
          return t.map(
            (t, i) =>
              new w.Z({
                minValue: e[i],
                maxValue: e[i + 1],
                symbol: this._getDefaultSymbol(new a.Z(t)),
              }),
          );
        }
      });
      (0, r._)(
        [(0, d.Cb)({ type: String, json: { write: !0 } })],
        k.prototype,
        'attributeField',
        void 0,
      ),
        (0, r._)(
          [
            (0, d.Cb)({
              type: H.apiValues,
              json: {
                type: H.jsonValues,
                read: { reader: H.read },
                write: { writer: H.write },
              },
            }),
          ],
          k.prototype,
          'flowRepresentation',
          void 0,
        ),
        (0, r._)(
          [
            (0, d.Cb)({
              type: ['geographic', 'arithmetic'],
              json: { write: !0 },
            }),
          ],
          k.prototype,
          'rotationType',
          void 0,
        ),
        (0, r._)(
          [
            (0, d.Cb)({
              type: U.apiValues,
              json: {
                type: U.jsonValues,
                read: { reader: U.read },
                write: { writer: U.write },
              },
            }),
          ],
          k.prototype,
          'style',
          void 0,
        ),
        (0, r._)(
          [(0, d.Cb)({ json: { write: !0 } })],
          k.prototype,
          'symbolTileSize',
          void 0,
        ),
        (0, r._)(
          [
            (0, d.Cb)({
              type: y.NL.apiValues,
              json: { type: y.NL.jsonValues, write: { writer: y.NL.write } },
            }),
          ],
          k.prototype,
          'inputUnit',
          void 0,
        ),
        (0, r._)([(0, g.r)('inputUnit')], k.prototype, 'readInputUnit', null),
        (0, r._)(
          [
            (0, d.Cb)({
              type: y.NL.apiValues,
              json: {
                type: y.NL.jsonValues,
                read: { reader: y.NL.read },
                write: { writer: y.NL.write },
              },
            }),
          ],
          k.prototype,
          'outputUnit',
          void 0,
        ),
        (0, r._)([(0, g.r)('outputUnit')], k.prototype, 'readOutputUnit', null),
        (0, r._)(
          [(0, p.J)({ vectorField: 'vector-field' })],
          k.prototype,
          'type',
          void 0,
        ),
        (0, r._)(
          [(0, d.Cb)({ type: h.Z })],
          k.prototype,
          'styleRenderer',
          null,
        ),
        (0, r._)(
          [(0, d.Cb)({ type: b.Z })],
          k.prototype,
          'sizeVariables',
          null,
        ),
        (0, r._)(
          [(0, d.Cb)({ type: f.Z })],
          k.prototype,
          'rotationVariables',
          null,
        ),
        (k = x = (0, r._)([(0, m.j)('esri.renderers.VectorFieldRenderer')], k));
      const E = k;
    },
    67058: (e, t, i) => {
      i.d(t, {
        Ob: () => I,
        YD: () => b,
        In: () => f,
        U0: () => w,
        ol: () => j,
      });
      var r = i(22303),
        a = (i(30030), i(70586)),
        n = (i(67900), i(1231)),
        o = i(48526),
        s = (i(24705), i(69237)),
        l = (i(32984), i(93010)),
        c = i(44262),
        u = (i(98046), i(57316), i(1515)),
        d = i(60849),
        p = i(30687),
        g = i(28092),
        m = (i(73622), i(16050), i(3943));
      const M = u.Z.fromJSON({
          type: 'multipart',
          colorRamps: [
            { fromColor: [0, 0, 255], toColor: [0, 255, 255] },
            { fromColor: [0, 255, 255], toColor: [255, 255, 0] },
            { fromColor: [255, 255, 0], toColor: [255, 0, 0] },
          ],
        }),
        y = u.Z.fromJSON(l.Ms[0]),
        h = new Set([
          'scientific',
          'standard-time',
          'vector-uv',
          'vector-magdir',
          'vector-u',
          'vector-v',
          'vector-magnitude',
          'vector-direction',
        ]);
      function I(e, t) {
        const { attributeTable: i, colormap: n } = e;
        if (T(e)) {
          const t = (function (e) {
            if (!T(e)) return null;
            let t;
            if (
              (0, a.pC)(e.statistics) &&
              e.statistics.length &&
              ('vector-magdir' === e.dataType || 'vector-uv' === e.dataType)
            ) {
              const { minMagnitude: i, maxMagnitude: r } = (function (e, t) {
                let i, r;
                if ('vector-magdir' === e) (i = t[0].min), (r = t[0].max);
                else {
                  const e = t[0].min,
                    a = t[0].max,
                    n = t[1].min,
                    o = t[1].max;
                  (i = 0),
                    (r = Math.max(
                      Math.abs(e),
                      Math.abs(n),
                      Math.abs(a),
                      Math.abs(o),
                    ));
                }
                return { minMagnitude: i, maxMagnitude: r };
              })(e.dataType, e.statistics);
              t = [
                {
                  type: 'size',
                  field: 'Magnitude',
                  minSize: 10,
                  maxSize: 40,
                  minDataValue: i,
                  maxDataValue: r,
                },
              ];
            }
            const i = (0, a.pC)(e.multidimensionalInfo)
                ? L.get(e.multidimensionalInfo.variables[0].unit)
                : null,
              r = new m.Z({
                visualVariables: t,
                inputUnit: i,
                rotationType: 'geographic',
              });
            return (
              (r.visualVariables = [
                ...r.sizeVariables,
                ...r.rotationVariables,
              ]),
              r
            );
          })(e);
          if ((0, a.pC)(t)) return t;
        }
        if ((0, a.pC)(n)) {
          const t = (function (e) {
            if (!D(e)) return null;
            let t;
            const { attributeTable: i, colormap: r } = e;
            if ((0, a.pC)(i)) {
              const e = C(i, 'value'),
                r = v(i, null, !0);
              'string' === r.type &&
                ((t = {}),
                i.features.forEach((i) => {
                  const a = i.attributes;
                  t[a[e.name]] = r ? a[r.name] : a[e.name];
                }));
            }
            return g.Z.createFromColormap((0, a.Wg)(r), t);
          })(e);
          if ((0, a.pC)(t)) return t;
        }
        if ((0, a.pC)(i)) {
          const t = (function (e, t, i, n) {
            if (!A(e, t)) return null;
            const { attributeTable: o, statistics: u } = e,
              d = v(o, t),
              g = C(o, 'red'),
              m = C(o, 'green'),
              M = C(o, 'blue'),
              h = new s.Z(),
              I = [],
              w = new Set(),
              f = !!(g && m && M);
            if ((0, a.pC)(o))
              o.features.forEach((e) => {
                const t = e.attributes[d.name];
                if (!w.has(e.attributes[d.name]) && null != t) {
                  w.add(t);
                  const i =
                      f &&
                      ('single' === g.type || 'double' === g.type) &&
                      ('single' === m.type || 'double' === m.type) &&
                      ('single' === M.type || 'double' === M.type) &&
                      !o.features.some(
                        (e) =>
                          e.attributes[g.name] > 1 ||
                          e.attributes[m.name] > 1 ||
                          e.attributes[M.name] > 1,
                      ),
                    a = i ? 255 : 1;
                  I.push(
                    new c.Z({
                      value: e.attributes[d.name],
                      label: e.attributes[d.name] + '',
                      symbol: {
                        type: 'simple-fill',
                        style: 'solid',
                        outline: null,
                        color: new r.Z(
                          f
                            ? [
                                e.attributes[g.name] * a,
                                e.attributes[m.name] * a,
                                e.attributes[M.name] * a,
                                1,
                              ]
                            : [0, 0, 0, 0],
                        ),
                      },
                    }),
                  );
                }
              });
            else if (null != u && u[0])
              for (let e = u[0].min; e <= u[0].max; e++)
                I.push(
                  new c.Z({
                    value: e,
                    label: e.toString(),
                    symbol: {
                      type: 'simple-fill',
                      style: 'solid',
                      outline: null,
                      color: new r.Z([0, 0, 0, 0]),
                    },
                  }),
                );
            if (
              (I.sort((e, t) =>
                e.value && 'string' == typeof e.value.valueOf()
                  ? 0
                  : e.value > t.value
                  ? 1
                  : -1,
              ),
              !f)
            ) {
              const e = (0, l.Jw)(y, I.length);
              I.forEach((t, i) => (t.symbol.color = new r.Z(e[i].slice(1, 4)))),
                (h.colorRamp = y);
            }
            return new p.Z({
              field: d.name,
              uniqueValueInfos: I,
              authoringInfo: h,
            });
          })(e);
          if ((0, a.pC)(t)) return t;
        }
        return (function (e, t) {
          var i, r, n, s;
          e = (function (e, t) {
            if (null == t) return e;
            let i = (0, a.Wg)(e.statistics),
              r = (0, a.Wg)(e.histograms);
            const { multidimensionalInfo: n } = e;
            if (t && (0, a.pC)(n)) {
              const { statistics: e, histograms: a } = n.variables.find(
                (e) => e.name === t,
              );
              null != e && e.length && (i = e),
                null != a && a.length && (r = a);
            }
            return o.Z.fromJSON({
              ...e.toJSON(),
              statistics: i,
              histograms: r,
            });
          })(e, null == t ? void 0 : t.variableName);
          const { bandCount: l } = e;
          let { bandIds: c, stretchType: u } = t || {};
          null != (i = c) && i.some((e) => e >= l) && (c = null);
          let p = (0, a.Wg)(e.statistics),
            g = (0, a.Wg)(e.histograms);
          var m;
          l > 1
            ? ((c = null != (m = c) && m.length ? c : b(e)),
              (p = null == p ? null : c.map((e) => p[e])),
              (g = null == g ? null : c.map((e) => g[e])))
            : (c = [0]),
            null == u &&
              (u = (function (e) {
                let t = 'percent-clip';
                const {
                  pixelType: i,
                  dataType: r,
                  histograms: n,
                  statistics: o,
                } = e;
                return (
                  'u8' !== i ||
                  ('processed' !== r && (0, a.pC)(n) && (0, a.pC)(o))
                    ? 'u8' === i || 'elevation' === r || h.has(r)
                      ? (t = 'min-max')
                      : (0, a.pC)(n)
                      ? (t = 'percent-clip')
                      : (0, a.pC)(o) && ((t = 'min-max'), (t = 'min-max'))
                    : (t = 'none'),
                  t
                );
              })(e));
          let y = !1;
          switch (u) {
            case 'none':
              y = !1;
              break;
            case 'percent-clip':
              y = !(null != (r = g) && r.length);
              break;
            default:
              y = !(null != (n = p) && n.length);
          }
          const { dataType: I } = e,
            w =
              1 === (null == (s = c) ? void 0 : s.length) && h.has(I)
                ? M
                : null,
            f = new d.Z({
              stretchType: u,
              dynamicRangeAdjustment: y,
              colorRamp: w,
              outputMin: 0,
              outputMax: 255,
              gamma: 1 === c.length ? [1] : [1, 1, 1],
              useGamma: !1,
            });
          return (
            'percent-clip' === u
              ? (f.maxPercent = f.minPercent = 0.25)
              : 'standard-deviation' === u &&
                (f.numberOfStandardDeviations = 2),
            !y &&
              ((0, a.pC)(e.multidimensionalInfo) ||
                (null != t && t.includeStatisticsInStretch)) &&
              ('percent-clip' === u
                ? (f.histograms = g)
                : ('min-max' !== u && 'standard-deviation' !== u) ||
                  (f.statistics = p)),
            f
          );
        })(e, t);
      }
      function w(e) {
        const t = ['raster-stretch'];
        return (
          D(e) && t.push('raster-colormap'),
          A(e) && t.push('unique-value'),
          (function (e) {
            const { attributeTable: t, bandCount: i } = e;
            return 1 === i && ((0, a.pC)(t) || (0, a.pC)(e.histograms));
          })(e) && t.push('class-breaks'),
          (function (e) {
            return 'elevation' === e.dataType;
          })(e) && t.push('raster-shaded-relief'),
          T(e) && t.push('vector-field'),
          (function (e) {
            const { dataType: t } = e;
            return 'vector-uv' === t || 'vector-magdir' === t;
          })(e) && t.push('flow'),
          t
        );
      }
      function f(e, t, i) {
        const r = ['nearest', 'bilinear', 'cubic', 'majority'].find(
          (e) => e === (null == i ? void 0 : i.toLowerCase()),
        );
        return 'Map' === t
          ? null != r
            ? r
            : 'bilinear'
          : 'standard-time' === e.dataType
          ? null != r
            ? r
            : 'nearest'
          : 'thematic' === e.dataType || e.attributeTable || e.colormap
          ? 'nearest' === r || 'majority' === r
            ? r
            : 'nearest'
          : null != r
          ? r
          : 'bilinear';
      }
      function b(e) {
        const t = e.bandCount;
        if (1 === t) return null;
        if (2 === t) return [0];
        const i = e.keyProperties && e.keyProperties.BandProperties;
        let r;
        if (i && i.length === t) {
          const {
            red: e,
            green: t,
            blue: a,
            nir: n,
          } = (function (e) {
            const t = {};
            for (let r = 0; r < e.length; r++) {
              var i;
              const a = e[r],
                n = null == (i = a.BandName) ? void 0 : i.toLowerCase();
              if ('red' === n) t.red = r;
              else if ('green' === n) t.green = r;
              else if ('blue' === n) t.blue = r;
              else if (
                'nearinfrared' === n ||
                'nearinfrared_1' === n ||
                'nir' === n
              )
                t.nir = r;
              else if (a.WavelengthMax && a.WavelengthMin) {
                const e = a.WavelengthMin,
                  i = a.WavelengthMax;
                null == t.blue && e >= 410 && e <= 480 && i >= 480 && i <= 540
                  ? (t.blue = r)
                  : null == t.green &&
                    e >= 490 &&
                    e <= 560 &&
                    i >= 560 &&
                    i <= 610
                  ? (t.green = r)
                  : null == t.red &&
                    e >= 595 &&
                    e <= 670 &&
                    i >= 660 &&
                    i <= 730
                  ? (t.red = r)
                  : null == t.nir &&
                    e >= 700 &&
                    e <= 860 &&
                    i >= 800 &&
                    i <= 950 &&
                    (t.nir = r);
              }
            }
            return t;
          })(i);
          null != e && null != t && null != a
            ? (r = [e, t, a])
            : null != n && null != e && null != t && (r = [n, e, t]);
        }
        return !r && t >= 3 && (r = [0, 1, 2]), r;
      }
      function v(e, t, i) {
        let r;
        return (
          (0, a.pC)(e)
            ? ((r = t
                ? e.fields.find((e) => t.toLowerCase() === e.name.toLowerCase())
                : (function (e) {
                    let t;
                    for (let i = 0; i < e.length; i++) {
                      const r = e[i].name.toLowerCase();
                      if ('string' === e[i].type) {
                        if (r.startsWith('class')) {
                          t = e[i];
                          break;
                        }
                        null == t &&
                          (r.endsWith('name') || r.endsWith('type')) &&
                          (t = e[i]);
                      }
                    }
                    return t;
                  })(e.fields)),
              r ||
                (i || (r = e.fields.find((e) => 'string' === e.type)),
                r || (r = C(e, 'value'))))
            : (r = new n.Z({ name: 'value' })),
          r
        );
      }
      function C(e, t) {
        return (0, a.pC)(e)
          ? e.fields.find((e) => e.name.toLowerCase() === t)
          : null;
      }
      function A(e, t) {
        const { attributeTable: i, bandCount: r } = e;
        return !(
          ((0, a.pC)(i) ||
            !(function (e) {
              var t, i, r;
              return (
                ['u8', 's8'].indexOf(e.pixelType) > -1 &&
                null !=
                  (null == (t = e.statistics) || null == (i = t[0])
                    ? void 0
                    : i.min) &&
                null != (null == (r = e.statistics[0]) ? void 0 : r.max) &&
                1 === e.bandCount
              );
            })(e)) &&
          (!(0, a.pC)(i) ||
            r > 1 ||
            (t &&
              null ==
                i.fields.find((e) => e.name.toLowerCase() === t.toLowerCase())))
        );
      }
      function D(e) {
        const { bandCount: t, colormap: i } = e;
        return (0, a.pC)(i) && i.length && 1 === t;
      }
      function T(e) {
        const { dataType: t } = e;
        return 'vector-uv' === t || 'vector-magdir' === t;
      }
      const L = new Map([
        ['m/s', 'meter-per-second'],
        ['km/h', 'kilometer-per-hour'],
        ['knots', 'knots'],
        ['ft/s', 'feet-per-second'],
        ['mph', 'mile-per-hour'],
      ]);
      function S(e) {
        var t;
        return {
          color: null == (t = e.symbolLayers[0].material) ? void 0 : t.color,
          type: 'esriSFS',
          style: 'esriSFSSolid',
        };
      }
      function j(e) {
        if ('uniqueValue' === e.type) {
          var t;
          const i = e.uniqueValueInfos,
            r = i[0].symbol;
          return (
            null != r &&
              null != (t = r.symbolLayers) &&
              t.length &&
              (e.uniqueValueInfos = i.map((e) => ({
                value: e.value,
                label: e.label,
                symbol: e.symbol ? S(e.symbol) : null,
              }))),
            e
          );
        }
        if ('classBreaks' === e.type) {
          var i;
          const t = e.classBreakInfos,
            r = t[0].symbol;
          return (
            null != r &&
              null != (i = r.symbolLayers) &&
              i.length &&
              (e.classBreakInfos = t.map((e) => ({
                classMinValue: e.classMinValue,
                classMaxValue: e.classMaxValue,
                label: e.label,
                symbol: e.symbol ? S(e.symbol) : null,
              }))),
            e
          );
        }
        return e;
      }
    },
    75509: (e, t, i) => {
      i.d(t, { J: () => a, v: () => r });
      const r = new (i(35454).X)({
          none: 'none',
          standardDeviation: 'standard-deviation',
          histogramEqualization: 'histogram-equalization',
          minMax: 'min-max',
          percentClip: 'percent-clip',
          sigmoid: 'sigmoid',
        }),
        a = {
          0: 'none',
          3: 'standardDeviation',
          4: 'histogramEqualization',
          5: 'minMax',
          6: 'percentClip',
          9: 'sigmoid',
        };
    },
    51706: (e, t, i) => {
      var r, a;
      function n(e) {
        return (
          e && 'esri.renderers.visualVariables.SizeVariable' === e.declaredClass
        );
      }
      function o(e) {
        return null != e && !isNaN(e) && isFinite(e);
      }
      function s(e) {
        return e.valueExpression
          ? r.Expression
          : e.field && 'string' == typeof e.field
          ? r.Field
          : r.Unknown;
      }
      function l(e, t) {
        const i = t || s(e),
          n = e.valueUnit || 'unknown';
        return i === r.Unknown
          ? a.Constant
          : e.stops
          ? a.Stops
          : null != e.minSize &&
            null != e.maxSize &&
            null != e.minDataValue &&
            null != e.maxDataValue
          ? a.ClampedLinear
          : 'unknown' === n
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
        PS: () => s,
        QW: () => l,
        iY: () => n,
        qh: () => o,
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
        PR: () => v,
        Lq: () => m,
        Km: () => M,
        cM: () => y,
        ap: () => h,
        V3: () => f,
        B3: () => g,
      });
      var r = i(22303),
        a = i(38171),
        n = i(74085),
        o = i(92604),
        s = i(70586),
        l = i(99282),
        c = i(51706);
      const u = o.Z.getLogger(
          'esri.renderers.visualVariables.support.visualVariableUtils',
        ),
        d = new a.Z(),
        p = Math.PI,
        g = /^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i;
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
        const n = 'number' == typeof t,
          o = n ? null : t,
          l = o && o.attributes;
        let c = n ? t : null;
        const d = a.field,
          { ipData: p, hasExpression: g } = a.cache;
        let m = a.cache.compiledFunc;
        if (!d && !g) {
          const e = a.stops;
          return e && e[0] && e[0].color;
        }
        if ('number' != typeof c)
          if (g) {
            if (!(0, s.pC)(i) || !(0, s.pC)(i.arcade))
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
              n = t.createExecContext(o, r);
            if (!m) {
              const e = t.createSyntaxTree(a.valueExpression);
              (m = t.createFunction(e)), (a.cache.compiledFunc = m);
            }
            c = t.executeFunction(m, n);
          } else l && (c = l[d]);
        const M = a.normalizationField,
          y = l ? parseFloat(l[M]) : void 0;
        if (null != c && (!M || n || (!isNaN(y) && 0 !== y))) {
          isNaN(y) || n || (c /= y);
          const e = b(c, p);
          if (e) {
            const t = e[0],
              n = e[1],
              o =
                t === n
                  ? a.stops[t].color
                  : r.Z.blendColors(
                      a.stops[t].color,
                      a.stops[n].color,
                      e[2],
                      (0, s.pC)(i) ? i.color : void 0,
                    );
            return new r.Z(o);
          }
        }
      }
      function M(e, t, i) {
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
          n = a ? null : t,
          o = n && n.attributes;
        let l = a ? t : null;
        const c = r.field,
          { ipData: d, hasExpression: p } = r.cache;
        let g = r.cache.compiledFunc;
        if (!c && !p) {
          const e = r.stops;
          return e && e[0] && e[0].opacity;
        }
        if ('number' != typeof l)
          if (p) {
            if ((0, s.Wi)(i) || (0, s.Wi)(i.arcade))
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
              o = t.createExecContext(n, a);
            if (!g) {
              const e = t.createSyntaxTree(r.valueExpression);
              (g = t.createFunction(e)), (r.cache.compiledFunc = g);
            }
            l = t.executeFunction(g, o);
          } else o && (l = o[c]);
        const m = r.normalizationField,
          M = o ? parseFloat(o[m]) : void 0;
        if (null != l && (!m || a || (!isNaN(M) && 0 !== M))) {
          isNaN(M) || a || (l /= M);
          const e = b(l, d);
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
      function y(e, t, i) {
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
          n = 'heading' === a && 'arithmetic' === r.rotationType ? 90 : 0,
          o = 'heading' === a && 'arithmetic' === r.rotationType ? -1 : 1,
          l = 'number' == typeof t ? null : t,
          c = l && l.attributes,
          d = r.field,
          { hasExpression: p } = r.cache;
        let g = r.cache.compiledFunc,
          m = 0;
        if (!d && !p) return m;
        if (p) {
          if ((0, s.Wi)(i) || (0, s.Wi)(i.arcade))
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
            n = t.createExecContext(l, a);
          if (!g) {
            const e = t.createSyntaxTree(r.valueExpression);
            (g = t.createFunction(e)), (r.cache.compiledFunc = g);
          }
          m = t.executeFunction(g, n);
        } else c && (m = c[d] || 0);
        return (m = 'number' != typeof m || isNaN(m) ? null : n + o * m), m;
      }
      function h(e, t, i) {
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
            case c.hL.Additive:
              return (function (e, t, i, r) {
                return e + (I(t.minSize, i, r) || t.minDataValue);
              })(e, t, i, r);
            case c.hL.Constant:
              return (function (e, t, i) {
                const r = e.stops;
                let a = r && r.length && r[0].size;
                return null == a && (a = e.minSize), I(a, t, i);
              })(t, i, r);
            case c.hL.ClampedLinear:
              return (function (e, t, i, r) {
                const a =
                    (e - t.minDataValue) / (t.maxDataValue - t.minDataValue),
                  n = I(t.minSize, i, r),
                  o = I(t.maxSize, i, r),
                  l = (0, s.pC)(r) ? r.shape : void 0;
                if (e <= t.minDataValue) return n;
                if (e >= t.maxDataValue) return o;
                if ('area' === t.scaleBy && l) {
                  const e = 'circle' === l,
                    t = e ? p * (n / 2) ** 2 : n * n,
                    i = t + a * ((e ? p * (o / 2) ** 2 : o * o) - t);
                  return e ? 2 * Math.sqrt(i / p) : Math.sqrt(i);
                }
                return n + a * (o - n);
              })(e, t, i, r);
            case c.hL.Proportional:
              return (function (e, t, i, r) {
                const a = (0, s.pC)(r) ? r.shape : void 0,
                  n = e / t.minDataValue,
                  o = I(t.minSize, i, r),
                  l = I(t.maxSize, i, r);
                let c = null;
                return (
                  (c =
                    'circle' === a
                      ? 2 * Math.sqrt(n * (o / 2) ** 2)
                      : 'square' === a || 'diamond' === a || 'image' === a
                      ? Math.sqrt(n * o ** 2)
                      : n * o),
                  w(c, o, l)
                );
              })(e, t, i, r);
            case c.hL.Stops:
              return (function (e, t, i, r, a) {
                const [n, o, s] = b(e, a);
                if (n === o) return I(t.stops[n].size, i, r);
                {
                  const e = I(t.stops[n].size, i, r);
                  return e + (I(t.stops[o].size, i, r) - e) * s;
                }
              })(e, t, i, r, a);
            case c.hL.RealWorldSize:
              return (function (e, t, i, r) {
                const a =
                    ((0, s.pC)(r) && r.resolution ? r.resolution : 1) *
                    l.a[t.valueUnit],
                  n = I(t.minSize, i, r),
                  o = I(t.maxSize, i, r),
                  { valueRepresentation: c } = t;
                let u = null;
                return (
                  (u =
                    'area' === c
                      ? (2 * Math.sqrt(e / p)) / a
                      : 'radius' === c || 'distance' === c
                      ? (2 * e) / a
                      : e / a),
                  w(u, n, o)
                );
              })(e, t, i, r);
            case c.hL.Identity:
              return e;
            case c.hL.Unknown:
              return null;
          }
        })(
          (function (e, t, i) {
            const r = 'number' == typeof t,
              a = r ? null : t,
              n = a && a.attributes;
            let o = r ? t : null;
            const { isScaleDriven: l } = e.cache;
            let d = e.cache.compiledFunc;
            if (l) {
              const t = (0, s.pC)(i) ? i.scale : void 0,
                r = (0, s.pC)(i) ? i.view : void 0;
              o =
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
                case c.RY.Expression: {
                  if ((0, s.Wi)(i) || (0, s.Wi)(i.arcade))
                    return void u.error(
                      'Use of arcade expressions requires an arcade context',
                    );
                  const t = {
                      viewingMode: i.viewingMode,
                      scale: i.scale,
                      spatialReference: i.spatialReference,
                    },
                    r = i.arcade.arcadeUtils,
                    n = r.getViewInfo(t),
                    l = r.createExecContext(a, n);
                  if (!d) {
                    const t = r.createSyntaxTree(e.valueExpression);
                    (d = r.createFunction(t)), (e.cache.compiledFunc = d);
                  }
                  o = r.executeFunction(d, l);
                  break;
                }
                case c.RY.Field:
                  n && (o = n[e.field]);
                  break;
                case c.RY.Unknown:
                  o = null;
              }
            if (!(0, c.qh)(o)) return null;
            if (r || !e.normalizationField) return o;
            const p = n ? parseFloat(n[e.normalizationField]) : null;
            return (0, c.qh)(p) && 0 !== p ? o / p : null;
          })(r, t, i),
          r,
          t,
          i,
          r.cache.ipData,
        );
        return null == a || isNaN(a) ? 0 : a;
      }
      function I(e, t, i) {
        return null == e
          ? null
          : (0, c.iY)(e)
          ? h(e, t, i)
          : (0, c.qh)(e)
          ? e
          : null;
      }
      function w(e, t, i) {
        return (0, c.qh)(i) && e > i ? i : (0, c.qh)(t) && e < t ? t : e;
      }
      function f(e, t, i) {
        const { isScaleDriven: r } = e.cache;
        if (!((r && '3d' === i) || t)) return null;
        const a = { scale: t, view: i };
        let n = I(e.minSize, d, a),
          o = I(e.maxSize, d, a);
        if (null != n || null != o) {
          if (n > o) {
            const e = o;
            (o = n), (n = e);
          }
          return { minSize: n, maxSize: o };
        }
      }
      function b(e, t) {
        if (!t) return;
        let i = 0,
          r = t.length - 1;
        return (
          t.some((t, a) => (e < t ? ((r = a), !0) : ((i = a), !1))),
          [i, r, (e - t[i]) / (t[r] - t[i])]
        );
      }
      function v(e, t, i) {
        const r = ['proportional', 'proportional', 'proportional'];
        for (const a of e) {
          const e = a.useSymbolValue ? 'symbol-value' : h(a, t, i);
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
              (0, n.Bg)(a.axis);
          }
        }
        return r;
      }
    },
    32163: (e, t, i) => {
      i.d(t, { eZ: () => d });
      var r = i(51773),
        a = i(35671),
        n = i(84649),
        o = (i(63801), i(48074), i(38745), i(9190)),
        s = (i(10214), i(44951), i(422)),
        l = i(63061);
      const c = ['oid', 'global-id'],
        u = ['oid', 'global-id', 'guid'];
      function d(
        {
          displayField: e,
          editFieldsInfo: t,
          fields: i,
          objectIdField: l,
          title: c,
        },
        u,
      ) {
        if (!i) return null;
        const d = (function (
          { editFieldsInfo: e, fields: t, objectIdField: i },
          r,
        ) {
          return (function (e, t) {
            const i = e;
            return (
              t && (e = e.filter((e) => -1 === t.indexOf(e.type))),
              e === i && (e = e.slice()),
              e.sort(m),
              e
            );
          })(t, (null == r ? void 0 : r.ignoreFieldTypes) || w).map(
            (t) =>
              new s.Z({
                fieldName: t.name,
                isEditable: y(t, e),
                label: t.alias,
                format: h(t),
                visible: g(t, {
                  editFieldsInfo: e,
                  objectIdField: i,
                  visibleFieldNames: null == r ? void 0 : r.visibleFieldNames,
                }),
              }),
          );
        })({ editFieldsInfo: t, fields: i, objectIdField: l }, u);
        if (!d.length) return null;
        const p = (function (e) {
            const t = (0, a.O5)(e),
              { titleBase: i } = e;
            return t ? `${i}: {${t.trim()}}` : i;
          })({ titleBase: c, fields: i, displayField: e }),
          M = [new o.Z(), new n.Z()];
        return new r.Z({ title: p, content: M, fieldInfos: d });
      }
      const p = [
          /^fnode_$/i,
          /^tnode_$/i,
          /^lpoly_$/i,
          /^rpoly_$/i,
          /^poly_$/i,
          /^subclass$/i,
          /^subclass_$/i,
          /^rings_ok$/i,
          /^rings_nok$/i,
          /shape/i,
          /perimeter/i,
          /objectid/i,
          /_i$/i,
        ],
        g = (
          e,
          { editFieldsInfo: t, objectIdField: i, visibleFieldNames: r },
        ) =>
          r
            ? r.has(e.name)
            : !(
                M(e.name, t) ||
                (i && e.name === i) ||
                c.indexOf(e.type) > -1 ||
                p.some((t) => t.test(e.name))
              );
      function m(e, t) {
        return 'oid' === e.type
          ? -1
          : 'oid' === t.type
          ? 1
          : I(e)
          ? -1
          : I(t)
          ? 1
          : (e.alias || e.name)
              .toLocaleLowerCase()
              .localeCompare((t.alias || t.name).toLocaleLowerCase());
      }
      function M(e, t) {
        if (!e || !t) return !1;
        const {
          creationDateField: i,
          creatorField: r,
          editDateField: a,
          editorField: n,
        } = t;
        return (
          -1 !==
          [
            i && i.toLowerCase(),
            r && r.toLowerCase(),
            a && a.toLowerCase(),
            n && n.toLowerCase(),
          ].indexOf(e.toLowerCase())
        );
      }
      function y(e, t) {
        return e.editable && -1 === u.indexOf(e.type) && !M(e.name, t);
      }
      function h(e) {
        switch (e.type) {
          case 'small-integer':
          case 'integer':
          case 'single':
            return new l.Z({ digitSeparator: !0, places: 0 });
          case 'double':
            return new l.Z({ digitSeparator: !0, places: 2 });
          case 'date':
            return new l.Z({ dateFormat: 'long-month-day-year' });
          default:
            return null;
        }
      }
      function I(e) {
        return (
          'name' === (e.name && e.name.toLowerCase()) ||
          'name' === (e.alias && e.alias.toLowerCase()) ||
          void 0
        );
      }
      const w = ['geometry', 'blob', 'raster', 'guid', 'xml'];
    },
  },
]);
