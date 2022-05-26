'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [2399],
  {
    47988: (e, t, r) => {
      r.d(t, { Z: () => l });
      var s = r(43697),
        n = r(3920),
        o = r(5600),
        i = (r(67676), r(80442), r(75215), r(52011));
      let a = class extends n.r {
        initialize() {}
        destroy() {}
        get supportsTileUpdates() {
          return !1;
        }
        get spatialReference() {
          const e = this.get('tileStore.tileScheme.spatialReference');
          return (e && e.toJSON()) || null;
        }
      };
      (0, s._)(
        [(0, o.Cb)({ readOnly: !0 })],
        a.prototype,
        'supportsTileUpdates',
        null,
      ),
        (0, s._)(
          [(0, o.Cb)({ constructOnly: !0 })],
          a.prototype,
          'remoteClient',
          void 0,
        ),
        (0, s._)(
          [(0, o.Cb)({ constructOnly: !0 })],
          a.prototype,
          'service',
          void 0,
        ),
        (0, s._)([(0, o.Cb)()], a.prototype, 'spatialReference', null),
        (0, s._)(
          [(0, o.Cb)({ constructOnly: !0 })],
          a.prototype,
          'tileInfo',
          void 0,
        ),
        (0, s._)(
          [(0, o.Cb)({ constructOnly: !0 })],
          a.prototype,
          'tileStore',
          void 0,
        ),
        (a = (0, s._)(
          [(0, i.j)('esri.views.2d.layers.features.processors.BaseProcessor')],
          a,
        ));
      const l = a;
    },
    12399: (e, t, r) => {
      r.r(t), r.d(t, { default: () => p });
      var s = r(43697),
        n = (r(80442), r(70586)),
        o = (r(92604), r(75215), r(67676), r(37697), r(52011)),
        i = r(22862);
      function a(e, t, r, s) {
        const { blurRadius: n, fieldOffset: o, field: i } = t,
          a = new Float64Array(r * s),
          l = (function (e) {
            const t = Math.round(3 * e),
              r = 2 * e * e,
              s = new Float64Array(2 * t + 1);
            for (let n = 0; n <= s.length; n++)
              s[n] =
                (Math.exp(-((n - t) ** 2) / r) / Math.sqrt(2 * Math.PI)) *
                (e / 2);
            return s;
          })(n),
          d = Math.round(3 * n);
        let c,
          u = Number.NEGATIVE_INFINITY;
        const h = (function (e, t) {
            return null != e
              ? 'string' == typeof t
                ? (t) => -1 * +t.readAttribute(e)
                : (r) => +r.readAttribute(e) + t
              : (e) => 1;
          })(i, o),
          p = new Set();
        for (const t of e) {
          const e = t.getCursor();
          for (; e.next(); ) {
            const t = e.getObjectId();
            if (p.has(t)) continue;
            p.add(t);
            const n = e.readLegacyPointGeometry(),
              o = 128;
            if (n.x < -o || n.x >= r + o || n.y < -o || n.y > s + o) continue;
            const i = +h(e),
              y = Math.round(n.x) - d,
              f = Math.round(n.y) - d,
              m = Math.max(0, y),
              w = Math.max(0, f),
              M = Math.min(s, Math.round(n.y) + d),
              T = Math.min(r, Math.round(n.x) + d);
            for (let e = w; e < M; e++) {
              const t = l[e - f];
              for (let s = m; s < T; s++) {
                const n = l[s - y];
                (c = a[e * r + s] += t * n * i), c > u && (u = c);
              }
            }
          }
        }
        return { matrix: a.buffer, max: u };
      }
      r(22021),
        (() => {
          if (!('document' in globalThis)) return () => null;
          const e = document.createElement('canvas');
          e.getContext('2d');
          (e.height = 512), (e.width = 1);
        })();
      var l = r(16534),
        d = r(47988),
        c = r(14867);
      class u {
        constructor(e, t) {
          (this.offset = e), (this.extent = t);
        }
      }
      let h = class extends d.Z {
        constructor() {
          super(...arguments),
            (this.type = 'heatmap'),
            (this._tileKeyToFeatureSets = new Map());
        }
        initialize() {
          this.handles.add([
            this.tileStore.on('update', this.onTileUpdate.bind(this)),
          ]);
        }
        async update(e, t) {
          const r = t.schema.processors[0];
          'heatmap' === r.type &&
            (0, i.Hg)(this._schema, r) &&
            ((e.mesh = !0), (this._schema = r));
        }
        onTileUpdate(e) {
          for (const t of e.removed)
            this._tileKeyToFeatureSets.delete(t.key.id);
        }
        onTileClear(e) {
          return (
            this._tileKeyToFeatureSets.delete(e.key.id),
            this.remoteClient.invoke('tileRenderer.onTileData', {
              tileKey: e.id,
              data: { clear: !0 },
            })
          );
        }
        async onTileMessage(e, t, r) {
          this._tileKeyToFeatureSets.has(e.key.id) ||
            this._tileKeyToFeatureSets.set(e.key.id, new Map());
          const s = this._tileKeyToFeatureSets.get(e.key.id);
          if (
            ((0, n.pC)(t.addOrUpdate) &&
              t.addOrUpdate.hasFeatures &&
              s.set(t.addOrUpdate.instance, t),
            t.end)
          ) {
            const t = [],
              s = (function (e) {
                const t = e.key,
                  r = new Map(),
                  s = 256,
                  n = l.I_,
                  o = e.tileInfoView.tileInfo.isWrappable;
                return (
                  r.set(
                    (0, c.M)(t, -1, -1, o).id,
                    new u([-n, -n], [n - s, n - s, n, n]),
                  ),
                  r.set(
                    (0, c.M)(t, 0, -1, o).id,
                    new u([0, -n], [0, n - s, n, n]),
                  ),
                  r.set(
                    (0, c.M)(t, 1, -1, o).id,
                    new u([n, -n], [0, n - s, s, n]),
                  ),
                  r.set(
                    (0, c.M)(t, -1, 0, o).id,
                    new u([-n, 0], [n - s, 0, n, n]),
                  ),
                  r.set((0, c.M)(t, 1, 0, o).id, new u([n, 0], [0, 0, s, n])),
                  r.set(
                    (0, c.M)(t, -1, 1, o).id,
                    new u([-n, n], [n - s, 0, n, s]),
                  ),
                  r.set((0, c.M)(t, 0, 1, o).id, new u([0, n], [0, 0, n, s])),
                  r.set((0, c.M)(t, 1, 1, o).id, new u([n, n], [0, 0, s, s])),
                  r
                );
              })(e);
            this._tileKeyToFeatureSets.forEach((r, o) => {
              if (o === e.key.id)
                r.forEach((e) => (0, n.yw)(e.addOrUpdate, (e) => t.push(e)));
              else if (s.has(o)) {
                const e = s.get(o),
                  [i, a] = e.offset;
                r.forEach((e) =>
                  (0, n.yw)(e.addOrUpdate, (e) => {
                    const r = e.transform(i, a, 1, 1);
                    t.push(r);
                  }),
                );
              }
            });
            const o = a(t, this._schema.mesh, 512, 512),
              i = { tileKey: e.key.id, intensityInfo: o },
              d = [o.matrix];
            return this.remoteClient.invoke('tileRenderer.onTileData', i, {
              ...r,
              transferList: d,
            });
          }
        }
        onTileError(e, t, r) {
          return this.remoteClient.invoke(
            'tileRenderer.onTileError',
            { tileKey: e.id, error: t },
            r,
          );
        }
      };
      h = (0, s._)(
        [(0, o.j)('esri.views.2d.layers.features.processors.HeatmapProcessor')],
        h,
      );
      const p = h;
    },
    14867: (e, t, r) => {
      function s(e, t, r, s) {
        const n = e.clone(),
          o = 1 << n.level,
          i = n.col + t,
          a = n.row + r;
        return (
          s && i < 0
            ? ((n.col = i + o), (n.world -= 1))
            : i >= o
            ? ((n.col = i - o), (n.world += 1))
            : (n.col = i),
          (n.row = a),
          n
        );
      }
      r.d(t, { M: () => s }), r(3651);
    },
  },
]);
