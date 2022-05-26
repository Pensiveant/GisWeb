'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [9151],
  {
    43090: (e, t, i) => {
      function l(e) {
        return 32 + e.length;
      }
      function r(e) {
        if (!e) return 0;
        let t = 32;
        for (const i in e)
          if (e.hasOwnProperty(i)) {
            const r = e[i];
            switch (typeof r) {
              case 'string':
                t += l(r);
                break;
              case 'number':
                t += 16;
                break;
              case 'boolean':
                t += 4;
            }
          }
        return t;
      }
      function s(e, t) {
        return 32 + e.length * t;
      }
      var a;
      i.d(t, { Y8: () => a, f2: () => r, do: () => s }),
        (function (e) {
          (e[(e.KILOBYTES = 1024)] = 'KILOBYTES'),
            (e[(e.MEGABYTES = 1048576)] = 'MEGABYTES'),
            (e[(e.GIGABYTES = 1073741824)] = 'GIGABYTES');
        })(a || (a = {}));
    },
    16859: (e, t, i) => {
      i.d(t, { I: () => b });
      var l = i(43697),
        r = i(40330),
        s = i(3172),
        a = i(66643),
        o = i(20102),
        n = i(92604),
        c = i(70586),
        h = i(95330),
        p = i(17452),
        u = i(5600),
        d = (i(67676), i(80442), i(75215), i(71715)),
        m = i(52011),
        f = i(30556),
        v = i(65587),
        y = i(15235),
        g = i(86082);
      const w = n.Z.getLogger('esri.layers.mixins.PortalLayer'),
        b = (e) => {
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
                return new y.default({ id: t.itemId, portal: i && i.portal });
            }
            writePortalItem(e, t) {
              e && e.id && (t.itemId = e.id);
            }
            async loadFromPortal(e, t) {
              if (this.portalItem && this.portalItem.id)
                try {
                  const l = await i.e(8062).then(i.bind(i, 18062));
                  return (
                    (0, h.k_)(t),
                    await l.load(
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
                    ((0, h.D_)(e) ||
                      w.warn(
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
                  (e) => ((0, h.r9)(e), !0),
                ),
              );
            }
            async _fetchUserHasEditingPrivileges(e) {
              const t = this.url
                ? null == r.id
                  ? void 0
                  : r.id.findCredential(this.url)
                : null;
              if (!t) return !0;
              const i =
                _.credential === t ? _.user : await this._fetchEditingUser(e);
              return (
                (_.credential = t),
                (_.user = i),
                (0, c.Wi)(i) ||
                  null == i.privileges ||
                  i.privileges.includes('features:user:edit')
              );
            }
            async _fetchEditingUser(e) {
              var t, i;
              const l =
                null == (t = this.portalItem) || null == (i = t.portal)
                  ? void 0
                  : i.user;
              if (l) return l;
              const o = r.id.findServerInfo(this.url);
              if (null == o || !o.owningSystemUrl) return null;
              const n = `${o.owningSystemUrl}/sharing/rest`,
                h = v.Z.getDefault();
              if (h && h.loaded && (0, p.Fv)(h.restUrl) === (0, p.Fv)(n))
                return h.user;
              const u = `${n}/community/self`,
                d = (0, c.pC)(e) ? e.signal : null,
                m = await (0, a.q6)(
                  (0, s.default)(u, {
                    authMode: 'no-prompt',
                    query: { f: 'json' },
                    signal: d,
                  }),
                );
              return m.ok ? g.default.fromJSON(m.value.data) : null;
            }
            read(e, t) {
              t && (t.layer = this), super.read(e, t);
            }
            write(e, t) {
              const i = t && t.portal,
                l =
                  this.portalItem &&
                  this.portalItem.id &&
                  (this.portalItem.portal || v.Z.getDefault());
              return i && l && !(0, p.tm)(l.restUrl, i.restUrl)
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
            (0, l._)(
              [(0, u.Cb)({ type: y.default })],
              t.prototype,
              'portalItem',
              null,
            ),
            (0, l._)(
              [(0, d.r)('web-document', 'portalItem', ['itemId'])],
              t.prototype,
              'readPortalItem',
              null,
            ),
            (0, l._)(
              [
                (0, f.c)('web-document', 'portalItem', {
                  itemId: { type: String },
                }),
              ],
              t.prototype,
              'writePortalItem',
              null,
            ),
            (0, l._)(
              [(0, u.Cb)({ clonable: !1 })],
              t.prototype,
              'resourceReferences',
              void 0,
            ),
            (0, l._)(
              [(0, u.Cb)({ readOnly: !0 })],
              t.prototype,
              'userHasEditingPrivileges',
              void 0,
            ),
            (t = (0, l._)([(0, m.j)('esri.layers.mixins.PortalLayer')], t)),
            t
          );
        },
        _ = { credential: null, user: null };
    },
    39450: (e, t, i) => {
      i.d(t, { Z: () => h });
      var l,
        r = i(43697),
        s = i(96674),
        a = i(5600),
        o = (i(67676), i(80442), i(75215)),
        n = i(52011);
      let c = (l = class extends s.wq {
        constructor(e) {
          super(e),
            (this.cols = null),
            (this.level = 0),
            (this.levelValue = null),
            (this.origin = null),
            (this.resolution = 0),
            (this.rows = null),
            (this.scale = 0);
        }
        clone() {
          return new l({
            cols: this.cols,
            level: this.level,
            levelValue: this.levelValue,
            resolution: this.resolution,
            rows: this.rows,
            scale: this.scale,
          });
        }
      });
      (0, r._)(
        [
          (0, a.Cb)({
            json: {
              write: !0,
              origins: {
                'web-document': { read: !1, write: !1 },
                'portal-item': { read: !1, write: !1 },
              },
            },
          }),
        ],
        c.prototype,
        'cols',
        void 0,
      ),
        (0, r._)(
          [(0, a.Cb)({ type: o.z8, json: { write: !0 } })],
          c.prototype,
          'level',
          void 0,
        ),
        (0, r._)(
          [(0, a.Cb)({ type: String, json: { write: !0 } })],
          c.prototype,
          'levelValue',
          void 0,
        ),
        (0, r._)(
          [
            (0, a.Cb)({
              json: {
                write: !0,
                origins: {
                  'web-document': { read: !1, write: !1 },
                  'portal-item': { read: !1, write: !1 },
                },
              },
            }),
          ],
          c.prototype,
          'origin',
          void 0,
        ),
        (0, r._)(
          [(0, a.Cb)({ type: Number, json: { write: !0 } })],
          c.prototype,
          'resolution',
          void 0,
        ),
        (0, r._)(
          [
            (0, a.Cb)({
              json: {
                write: !0,
                origins: {
                  'web-document': { read: !1, write: !1 },
                  'portal-item': { read: !1, write: !1 },
                },
              },
            }),
          ],
          c.prototype,
          'rows',
          void 0,
        ),
        (0, r._)(
          [(0, a.Cb)({ type: Number, json: { write: !0 } })],
          c.prototype,
          'scale',
          void 0,
        ),
        (c = l = (0, r._)([(0, n.j)('esri.layers.support.LOD')], c));
      const h = c;
    },
    11145: (e, t, i) => {
      i.d(t, { Z: () => T });
      var l,
        r = i(43697),
        s = i(35454),
        a = i(96674),
        o = i(70586),
        n = i(67900),
        c = i(5600),
        h = (i(67676), i(80442), i(75215)),
        p = i(71715),
        u = i(52011),
        d = i(30556),
        m = i(13473),
        f = i(82971),
        v = i(24470),
        y = i(8744),
        g = i(40488),
        w = i(39450);
      const b = new s.X({
        PNG: 'png',
        PNG8: 'png8',
        PNG24: 'png24',
        PNG32: 'png32',
        JPEG: 'jpg',
        JPG: 'jpg',
        DIB: 'dib',
        TIFF: 'tiff',
        EMF: 'emf',
        PS: 'ps',
        PDF: 'pdf',
        GIF: 'gif',
        SVG: 'svg',
        SVGZ: 'svgz',
        Mixed: 'mixed',
        MIXED: 'mixed',
        LERC: 'lerc',
        LERC2D: 'lerc2d',
        RAW: 'raw',
        pbf: 'pbf',
      });
      let _ = (l = class extends a.wq {
        constructor(e) {
          super(e),
            (this.dpi = 96),
            (this.format = null),
            (this.origin = null),
            (this.minScale = 0),
            (this.maxScale = 0),
            (this.size = null),
            (this.spatialReference = null);
        }
        static create(e = {}) {
          const {
            resolutionFactor: t = 1,
            scales: i,
            size: r = 256,
            spatialReference: s = f.Z.WebMercator,
            numLODs: a = 24,
          } = e;
          if (!(0, y.JY)(s)) {
            const e = [];
            if (i)
              for (let t = 0; t < i.length; t++) {
                const l = i[t];
                e.push({ level: t, scale: l, resolution: l });
              }
            else {
              let t = 5e-4;
              for (let i = a - 1; i >= 0; i--)
                e.unshift({ level: i, scale: t, resolution: t }), (t *= 2);
            }
            return new l({
              dpi: 96,
              lods: e,
              origin: new m.Z(0, 0, s),
              size: [r, r],
              spatialReference: s,
            });
          }
          const o = (0, y.C5)(s),
            c = e.origin
              ? new m.Z({ x: e.origin.x, y: e.origin.y, spatialReference: s })
              : new m.Z(
                  o
                    ? { x: o.origin[0], y: o.origin[1], spatialReference: s }
                    : { x: 0, y: 0, spatialReference: s },
                ),
            h = 1 / (39.37 * (0, n.c9)(s) * 96),
            p = [];
          if (i)
            for (let e = 0; e < i.length; e++) {
              const t = i[e],
                l = t * h;
              p.push({ level: e, scale: t, resolution: l });
            }
          else {
            let e = (0, y.sT)(s)
              ? (512 / r) * 591657527.5917094
              : (256 / r) * 591657527.591555;
            const i = Math.ceil(a / t);
            p.push({ level: 0, scale: e, resolution: e * h });
            for (let l = 1; l < i; l++) {
              const i = e / 2 ** t,
                r = i * h;
              p.push({ level: l, scale: i, resolution: r }), (e = i);
            }
          }
          return new l({
            dpi: 96,
            lods: p,
            origin: c,
            size: [r, r],
            spatialReference: s,
          });
        }
        get isWrappable() {
          const { spatialReference: e, origin: t } = this;
          if (e && t) {
            const i = (0, y.C5)(e);
            return e.isWrappable && Math.abs(i.origin[0] - t.x) <= i.dx;
          }
          return !1;
        }
        readOrigin(e, t) {
          return m.Z.fromJSON({ spatialReference: t.spatialReference, ...e });
        }
        set lods(e) {
          let t = 0,
            i = 0;
          const l = [];
          (this._levelToLOD = {}),
            e &&
              ((t = -1 / 0),
              (i = 1 / 0),
              e.forEach((e) => {
                l.push(e.scale),
                  (t = e.scale > t ? e.scale : t),
                  (i = e.scale < i ? e.scale : i),
                  (this._levelToLOD[e.level] = e);
              })),
            this._set('scales', l),
            this._set('minScale', t),
            this._set('maxScale', i),
            this._set('lods', e),
            this._initializeUpsampleLevels();
        }
        readSize(e, t) {
          return [t.cols, t.rows];
        }
        writeSize(e, t) {
          (t.cols = e[0]), (t.rows = e[1]);
        }
        zoomToScale(e) {
          const t = this.scales;
          if (e <= 0) return t[0];
          if (e >= t.length - 1) return t[t.length - 1];
          {
            const i = Math.floor(e),
              l = i + 1;
            return t[i] / (t[i] / t[l]) ** (e - i);
          }
        }
        scaleToZoom(e) {
          const t = this.scales,
            i = t.length - 1;
          let l = 0;
          for (; l < i; l++) {
            const i = t[l],
              r = t[l + 1];
            if (i <= e) return l;
            if (r === e) return l + 1;
            if (i > e && r < e) return l + Math.log(i / e) / Math.log(i / r);
          }
          return l;
        }
        snapScale(e, t = 0.95) {
          const i = this.scaleToZoom(e);
          return i % Math.floor(i) >= t
            ? this.zoomToScale(Math.ceil(i))
            : this.zoomToScale(Math.floor(i));
        }
        tileAt(e, t, i, l) {
          const r = this.lodAt(e);
          if (!r) return null;
          let s, a;
          if ('number' == typeof t) (s = t), (a = i);
          else if ((0, y.fS)(t.spatialReference, this.spatialReference))
            (s = t.x), (a = t.y), (l = i);
          else {
            const e = (0, g.iV)(t, this.spatialReference);
            if ((0, o.Wi)(e)) return null;
            (s = e.x), (a = e.y), (l = i);
          }
          const n = r.resolution * this.size[0],
            c = r.resolution * this.size[1];
          return (
            l ||
              (l = { id: null, level: 0, row: 0, col: 0, extent: (0, v.Ue)() }),
            (l.level = e),
            (l.row = Math.floor((this.origin.y - a) / c + 0.001)),
            (l.col = Math.floor((s - this.origin.x) / n + 0.001)),
            this.updateTileInfo(l),
            l
          );
        }
        updateTileInfo(e, t = l.ExtrapolateOptions.NONE) {
          let i = this.lodAt(e.level);
          if (!i && t === l.ExtrapolateOptions.POWER_OF_TWO) {
            const t = this.lods[this.lods.length - 1];
            t.level < e.level && (i = t);
          }
          if (!i) return;
          const r = e.level - i.level,
            s = (i.resolution * this.size[0]) / 2 ** r,
            a = (i.resolution * this.size[1]) / 2 ** r;
          (e.id = `${e.level}/${e.row}/${e.col}`),
            e.extent || (e.extent = (0, v.Ue)()),
            (e.extent[0] = this.origin.x + e.col * s),
            (e.extent[1] = this.origin.y - (e.row + 1) * a),
            (e.extent[2] = e.extent[0] + s),
            (e.extent[3] = e.extent[1] + a);
        }
        upsampleTile(e) {
          const t = this._upsampleLevels[e.level];
          return !(
            !t ||
            -1 === t.parentLevel ||
            ((e.level = t.parentLevel),
            (e.row = Math.floor(e.row / t.factor + 0.001)),
            (e.col = Math.floor(e.col / t.factor + 0.001)),
            this.updateTileInfo(e),
            0)
          );
        }
        getTileBounds(e, t) {
          const { resolution: i } = this.lodAt(t.level),
            l = i * this.size[0],
            r = i * this.size[1];
          return (
            (e[0] = this.origin.x + t.col * l),
            (e[1] = this.origin.y - (t.row + 1) * r),
            (e[2] = e[0] + l),
            (e[3] = e[1] + r),
            e
          );
        }
        lodAt(e) {
          return (this._levelToLOD && this._levelToLOD[e]) || null;
        }
        clone() {
          return l.fromJSON(this.write({}));
        }
        getOrCreateCompatible(e, t) {
          if (256 === this.size[0] && 256 === this.size[1])
            return 256 === e ? this : null;
          const i = [],
            r = this.lods.length;
          for (let e = 0; e < r; e++) {
            const l = this.lods[e],
              r = l.resolution * t;
            i.push(new w.Z({ level: l.level, scale: l.scale, resolution: r }));
          }
          return new l({
            size: [e, e],
            dpi: this.dpi,
            format: this.format,
            compressionQuality: this.compressionQuality,
            origin: this.origin,
            spatialReference: this.spatialReference,
            lods: i,
          });
        }
        _initializeUpsampleLevels() {
          const e = this.lods;
          this._upsampleLevels = [];
          let t = null;
          for (let i = 0; i < e.length; i++) {
            const l = e[i];
            (this._upsampleLevels[l.level] = {
              parentLevel: t ? t.level : -1,
              factor: t ? t.resolution / l.resolution : 0,
            }),
              (t = l);
          }
        }
      });
      var S, O;
      (0, r._)(
        [(0, c.Cb)({ type: Number, json: { write: !0 } })],
        _.prototype,
        'compressionQuality',
        void 0,
      ),
        (0, r._)(
          [(0, c.Cb)({ type: Number, json: { write: !0 } })],
          _.prototype,
          'dpi',
          void 0,
        ),
        (0, r._)(
          [
            (0, c.Cb)({
              type: String,
              json: {
                read: b.read,
                write: b.write,
                origins: { 'web-scene': { read: !1, write: !1 } },
              },
            }),
          ],
          _.prototype,
          'format',
          void 0,
        ),
        (0, r._)(
          [(0, c.Cb)({ readOnly: !0 })],
          _.prototype,
          'isWrappable',
          null,
        ),
        (0, r._)(
          [(0, c.Cb)({ type: m.Z, json: { write: !0 } })],
          _.prototype,
          'origin',
          void 0,
        ),
        (0, r._)([(0, p.r)('origin')], _.prototype, 'readOrigin', null),
        (0, r._)(
          [(0, c.Cb)({ type: [w.Z], value: null, json: { write: !0 } })],
          _.prototype,
          'lods',
          null,
        ),
        (0, r._)(
          [(0, c.Cb)({ readOnly: !0 })],
          _.prototype,
          'minScale',
          void 0,
        ),
        (0, r._)(
          [(0, c.Cb)({ readOnly: !0 })],
          _.prototype,
          'maxScale',
          void 0,
        ),
        (0, r._)([(0, c.Cb)({ readOnly: !0 })], _.prototype, 'scales', void 0),
        (0, r._)(
          [
            (0, c.Cb)({
              cast: (e) =>
                Array.isArray(e)
                  ? e
                  : 'number' == typeof e
                  ? [e, e]
                  : [256, 256],
            }),
          ],
          _.prototype,
          'size',
          void 0,
        ),
        (0, r._)(
          [(0, p.r)('size', ['rows', 'cols'])],
          _.prototype,
          'readSize',
          null,
        ),
        (0, r._)(
          [(0, d.c)('size', { cols: { type: h.z8 }, rows: { type: h.z8 } })],
          _.prototype,
          'writeSize',
          null,
        ),
        (0, r._)(
          [(0, c.Cb)({ type: f.Z, json: { write: !0 } })],
          _.prototype,
          'spatialReference',
          void 0,
        ),
        (_ = l = (0, r._)([(0, u.j)('esri.layers.support.TileInfo')], _)),
        ((O =
          (S = _ || (_ = {})).ExtrapolateOptions ||
          (S.ExtrapolateOptions = {}))[(O.NONE = 0)] = 'NONE'),
        (O[(O.POWER_OF_TWO = 1)] = 'POWER_OF_TWO');
      const T = _;
    },
    56608: (e, t, i) => {
      i.d(t, { y: () => E });
      var l,
        r = i(43697),
        s = i(3172),
        a = i(15923),
        o = i(43090),
        n = i(20102),
        c = i(3920),
        h = i(92604),
        p = i(13867),
        u = i(44553),
        d = i(95330),
        m = i(17445),
        f = i(1654),
        v = i(17452),
        y = i(5600),
        g = i(67676),
        w = (i(80442), i(90578)),
        b = i(52011),
        _ = i(22974);
      class S {
        constructor() {
          (this.location = { left: 0, top: 0, width: 0, height: 0 }),
            (this._allAvailability = 'unknown'),
            (this.byteSize = 40);
        }
        getAvailability(e, t) {
          if ('unknown' !== this._allAvailability) return this._allAvailability;
          const i =
              (e - this.location.top) * this.location.width +
              (t - this.location.left),
            l = i % 8,
            r = i >> 3,
            s = this._tileAvailabilityBitSet;
          return r < 0 || r > s.length
            ? 'unknown'
            : s[r] & (1 << l)
            ? 'available'
            : 'unavailable';
        }
        _updateFromData(e) {
          const t = this.location.width,
            i = this.location.height;
          let l = !0,
            r = !0;
          const s = Math.ceil((t * i) / 8),
            a = new Uint8Array(s);
          let o = 0;
          for (let t = 0; t < e.length; t++) {
            const i = t % 8;
            e[t] ? ((r = !1), (a[o] |= 1 << i)) : (l = !1), 7 === i && ++o;
          }
          r
            ? (this._allAvailability = 'unavailable')
            : l
            ? (this._allAvailability = 'available')
            : ((this._allAvailability = 'unknown'),
              (this._tileAvailabilityBitSet = a),
              (this.byteSize += a.length));
        }
        static fromDefinition(e, t) {
          const i = e.service.request || s.default,
            { row: l, col: r, width: a, height: o } = e,
            c = { query: { f: 'json' } };
          return (
            (t = t ? { ...c, ...t } : c),
            i(
              (function (e) {
                let t;
                if ('vector-tile' === e.service.type)
                  t = `${e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`;
                else {
                  const i = e.service.tileServers;
                  t = `${
                    i && i.length ? i[e.row % i.length] : e.service.url
                  }/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${
                    e.height
                  }`;
                }
                const i = e.service.query;
                return i && (t = `${t}?${i}`), t;
              })(e),
              t,
            )
              .then((e) => e.data)
              .catch((e) => {
                if (e && e.details && 422 === e.details.httpStatus)
                  return {
                    location: { top: l, left: r, width: a, height: o },
                    valid: !0,
                    data: (0, g.a9)(a * o, 0),
                  };
                throw e;
              })
              .then((e) => {
                if (
                  e.location &&
                  (e.location.top !== l ||
                    e.location.left !== r ||
                    e.location.width !== a ||
                    e.location.height !== o)
                )
                  throw new n.Z(
                    'tilemap:location-mismatch',
                    'Tilemap response for different location than requested',
                    {
                      response: e,
                      definition: { top: l, left: r, width: a, height: o },
                    },
                  );
                return S.fromJSON(e);
              })
          );
        }
        static fromJSON(e) {
          S._validateJSON(e);
          const t = new S();
          return (
            (t.location = Object.freeze((0, _.d9)(e.location))),
            t._updateFromData(e.data),
            Object.freeze(t)
          );
        }
        static _validateJSON(e) {
          if (!e || !e.location)
            throw new n.Z(
              'tilemap:missing-location',
              'Location missing from tilemap response',
            );
          if (!1 === e.valid)
            throw new n.Z(
              'tilemap:invalid',
              'Tilemap response was marked as invalid',
            );
          if (!e.data)
            throw new n.Z(
              'tilemap:missing-data',
              'Data missing from tilemap response',
            );
          if (!Array.isArray(e.data))
            throw new n.Z(
              'tilemap:data-mismatch',
              'Data must be an array of numbers',
            );
          if (e.data.length !== e.location.width * e.location.height)
            throw new n.Z(
              'tilemap:data-mismatch',
              'Number of data items does not match width/height of tilemap',
            );
        }
      }
      function O(e) {
        return `${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`;
      }
      const T = h.Z.getLogger('esri.layers.support.TilemapCache');
      let E = (l = class extends (0, c.p)(a.Z) {
        constructor(e) {
          super(e),
            (this._pendingTilemapRequests = {}),
            (this._availableLevels = {}),
            (this.levels = 5),
            (this.cacheByteSize = 2 * o.Y8.MEGABYTES),
            (this.request = s.default),
            (this._prefetchingEnabled = !0);
        }
        initialize() {
          (this._tilemapCache = new p.Z(this.cacheByteSize)),
            this.handles.add([
              this.watch(
                [
                  'layer.parsedUrl',
                  'layer.tileServers?',
                  'layer.apiKey?',
                  'layer.customParameters?',
                ],
                () => this._initializeTilemapDefinition(),
              ),
              (0, m.YP)(
                () => {
                  var e, t;
                  return null == (e = this.layer) || null == (t = e.tileInfo)
                    ? void 0
                    : t.lods;
                },
                (e) => this._initializeAvailableLevels(e),
                m.tX,
              ),
            ]),
            this._initializeTilemapDefinition();
        }
        castLevels(e) {
          return e <= 2
            ? (T.error('Minimum levels for Tilemap is 3, but got ', e), 3)
            : e;
        }
        get size() {
          return 1 << this.levels;
        }
        fetchTilemap(e, t, i, l) {
          if (!this._availableLevels[e])
            return Promise.reject(
              new n.Z(
                'tilemap-cache:level-unavailable',
                `Level ${e} is unavailable in the service`,
              ),
            );
          const r = this._tmpTilemapDefinition,
            s = this._tilemapFromCache(e, t, i, r);
          if (s) return Promise.resolve(s);
          const a = l && l.signal;
          return (
            (l = { ...l, signal: null }),
            new Promise((e, t) => {
              (0, d.fu)(a, () => t((0, d.zE)()));
              const i = O(r);
              let s = this._pendingTilemapRequests[i];
              if (!s) {
                s = S.fromDefinition(r, l).then(
                  (e) => (this._tilemapCache.put(i, e, e.byteSize), e),
                );
                const e = () => delete this._pendingTilemapRequests[i];
                (this._pendingTilemapRequests[i] = s), s.then(e, e);
              }
              s.then(e, t);
            })
          );
        }
        getAvailability(e, t, i) {
          if (!this._availableLevels[e]) return 'unavailable';
          const l = this._tilemapFromCache(e, t, i, this._tmpTilemapDefinition);
          return l ? l.getAvailability(t, i) : 'unknown';
        }
        fetchAvailability(e, t, i, l) {
          return this._availableLevels[e]
            ? this.fetchTilemap(e, t, i, l)
                .catch((e) => e)
                .then((l) => {
                  if (l instanceof S) {
                    const r = l.getAvailability(t, i);
                    return 'unavailable' === r
                      ? Promise.reject(
                          new n.Z(
                            'tile-map:tile-unavailable',
                            'Tile is not available',
                            { level: e, row: t, col: i },
                          ),
                        )
                      : r;
                  }
                  if ((0, d.D_)(l)) throw l;
                  return 'unknown';
                })
            : Promise.reject(
                new n.Z(
                  'tilemap-cache:level-unavailable',
                  `Level ${e} is unavailable in the service`,
                ),
              );
        }
        fetchAvailabilityUpsample(e, t, i, l, r) {
          (l.level = e), (l.row = t), (l.col = i);
          const s = this.layer.tileInfo;
          s.updateTileInfo(l);
          const a = this.fetchAvailability(e, t, i, r).catch((e) => {
            if ((0, d.D_)(e)) throw e;
            if (s.upsampleTile(l))
              return this.fetchAvailabilityUpsample(l.level, l.row, l.col, l);
            throw e;
          });
          return (
            this._fetchAvailabilityUpsamplePrefetch(l.id, e, t, i, r, a), a
          );
        }
        async _fetchAvailabilityUpsamplePrefetch(e, t, i, r, s, a) {
          if (!this._prefetchingEnabled) return;
          const o = `prefetch-${e}`;
          if (this.handles.has(o)) return;
          const n = new AbortController();
          a.then(
            () => n.abort(),
            () => n.abort(),
          );
          let c = !1;
          const h = {
            remove() {
              c || ((c = !0), n.abort());
            },
          };
          if (
            (this.handles.add(h, o),
            await (0, f.MU)(10, n.signal).catch(() => {}),
            c || ((c = !0), this.handles.remove(o)),
            (0, d.Hc)(n))
          )
            return;
          const p = { id: e, level: t, row: i, col: r },
            u = { ...s, signal: n.signal },
            m = this.layer.tileInfo;
          for (
            let e = 0;
            l._prefetches.length < l._maxPrefetch && m.upsampleTile(p);
            ++e
          ) {
            const e = this.fetchAvailability(p.level, p.row, p.col, u);
            l._prefetches.push(e);
            const t = () => {
              l._prefetches.removeUnordered(e);
            };
            e.then(t, t);
          }
        }
        _initializeTilemapDefinition() {
          var e;
          if (!this.layer.parsedUrl) return;
          const { parsedUrl: t, apiKey: i, customParameters: l } = this.layer;
          this._tilemapCache.clear(),
            (this._tmpTilemapDefinition = {
              service: {
                url: t.path,
                query: (0, v.B7)({
                  ...t.query,
                  ...l,
                  token:
                    null != i ? i : null == (e = t.query) ? void 0 : e.token,
                }),
                tileServers: this.layer.tileServers,
                request: this.request,
                type: this.layer.type,
              },
              width: this.size,
              height: this.size,
              level: 0,
              row: 0,
              col: 0,
            });
        }
        _tilemapFromCache(e, t, i, l) {
          (l.level = e),
            (l.row = t - (t % this.size)),
            (l.col = i - (i % this.size));
          const r = O(l);
          return this._tilemapCache.get(r);
        }
        _initializeAvailableLevels(e) {
          (this._availableLevels = {}),
            e && e.forEach((e) => (this._availableLevels[e.level] = !0));
        }
        get test() {
          const e = this;
          return {
            get prefetchingEnabled() {
              return e._prefetchingEnabled;
            },
            set prefetchingEnabled(t) {
              e._prefetchingEnabled = t;
            },
            hasTilemap: (t, i, l) =>
              !!e._tilemapFromCache(t, i, l, e._tmpTilemapDefinition),
          };
        }
      });
      (E._maxPrefetch = 4),
        (E._prefetches = new u.Z({ initialSize: l._maxPrefetch })),
        (0, r._)(
          [(0, y.Cb)({ constructOnly: !0, type: Number })],
          E.prototype,
          'levels',
          void 0,
        ),
        (0, r._)([(0, w.p)('levels')], E.prototype, 'castLevels', null),
        (0, r._)(
          [(0, y.Cb)({ readOnly: !0, type: Number })],
          E.prototype,
          'size',
          null,
        ),
        (0, r._)(
          [(0, y.Cb)({ constructOnly: !0, type: Number })],
          E.prototype,
          'cacheByteSize',
          void 0,
        ),
        (0, r._)(
          [(0, y.Cb)({ constructOnly: !0 })],
          E.prototype,
          'layer',
          void 0,
        ),
        (0, r._)(
          [(0, y.Cb)({ constructOnly: !0 })],
          E.prototype,
          'request',
          void 0,
        ),
        (E = l = (0, r._)([(0, b.j)('esri.layers.support.TilemapCache')], E));
    },
    45322: (e, t, i) => {
      i.d(t, { d: () => s, h: () => r });
      var l = i(11145);
      const r = {
        type: l.Z,
        json: {
          origins: {
            service: {
              read: {
                source: [
                  'tileInfo',
                  'minScale',
                  'maxScale',
                  'minLOD',
                  'maxLOD',
                ],
                reader: s,
              },
            },
          },
        },
      };
      function s(e, t, i, r) {
        if (!e) return null;
        const { minScale: s, maxScale: a, minLOD: o, maxLOD: n } = t;
        if (null != o && null != n)
          return r && r.ignoreMinMaxLOD
            ? l.Z.fromJSON(e)
            : l.Z.fromJSON({
                ...e,
                lods: e.lods.filter(
                  ({ level: e }) => null != e && e >= o && e <= n,
                ),
              });
        if (0 !== s && 0 !== a) {
          const t = (e) => Math.round(1e4 * e) / 1e4,
            i = s ? t(s) : 1 / 0,
            r = a ? t(a) : -1 / 0;
          return l.Z.fromJSON({
            ...e,
            lods: e.lods.filter((e) => {
              const l = t(e.scale);
              return l <= i && l >= r;
            }),
          });
        }
        return l.Z.fromJSON(e);
      }
    },
    99282: (e, t, i) => {
      i.d(t, { a: () => s });
      var l = i(67900),
        r = i(68441);
      const s = {
        inches: (0, l.En)(1, 'meters', 'inches'),
        feet: (0, l.En)(1, 'meters', 'feet'),
        'us-feet': (0, l.En)(1, 'meters', 'us-feet'),
        yards: (0, l.En)(1, 'meters', 'yards'),
        miles: (0, l.En)(1, 'meters', 'miles'),
        'nautical-miles': (0, l.En)(1, 'meters', 'nautical-miles'),
        millimeters: (0, l.En)(1, 'meters', 'millimeters'),
        centimeters: (0, l.En)(1, 'meters', 'centimeters'),
        decimeters: (0, l.En)(1, 'meters', 'decimeters'),
        meters: (0, l.En)(1, 'meters', 'meters'),
        kilometers: (0, l.En)(1, 'meters', 'kilometers'),
        'decimal-degrees': 1 / (0, l.ty)(1, 'meters', r.sv.radius),
      };
    },
  },
]);
