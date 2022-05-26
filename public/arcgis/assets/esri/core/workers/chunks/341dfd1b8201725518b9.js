'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [5853],
  {
    55853: (e, t, r) => {
      r.r(t), r.d(t, { default: () => pe });
      var i = r(43697),
        s = r(3172),
        l = r(80539),
        a = r(20102),
        n = r(61247),
        o = r(22974),
        u = r(16453),
        c = r(78286),
        d = r(95330),
        p = r(17452),
        h = r(5600),
        m = (r(75215), r(71715)),
        y = r(52011),
        f = r(30556),
        g = r(6570),
        v = r(29600),
        w = r(16199),
        x = r(71612),
        S = r(38009),
        b = r(16859),
        M = r(34760),
        C = r(72965),
        I = r(11145);
      class _ {
        constructor(e, t = 0, r = e.lods.length - 1) {
          (this.tileInfo = e), (this.minLOD = t), (this.maxLOD = r);
        }
        getAvailability(e, t, r) {
          const i = this.tileInfo.lodAt(e);
          return !i || e < this.minLOD || e > this.maxLOD
            ? 'unavailable'
            : i.cols && i.rows
            ? r >= i.cols[0] &&
              r <= i.cols[1] &&
              t >= i.rows[0] &&
              t <= i.rows[1]
              ? 'available'
              : 'unavailable'
            : 'available';
        }
        async fetchAvailability(e, t, r, i) {
          return await (0, d.Yn)(i), this.getAvailability(e, t, r);
        }
        async fetchAvailabilityUpsample(e, t, r, i, s) {
          await (0, d.Yn)(s), (i.level = e), (i.row = t), (i.col = r);
          const l = this.tileInfo;
          for (l.updateTileInfo(i); ; ) {
            const e = this.getAvailability(i.level, i.row, i.col);
            if ('unavailable' !== e) return e;
            if (!l.upsampleTile(i)) return 'unavailable';
          }
        }
      }
      var L,
        T = r(5833),
        E = r(96674);
      r(67676), r(80442);
      let P = (L = class extends E.wq {
        constructor(e) {
          super(e),
            (this.fullExtent = null),
            (this.id = null),
            (this.tileInfo = null);
        }
        clone() {
          const e = new L();
          return (
            this.hasOwnProperty('fullExtent') &&
              (e.fullExtent = this.fullExtent && this.fullExtent.clone()),
            this.hasOwnProperty('id') && (e.id = this.id),
            this.hasOwnProperty('tileInfo') &&
              (e.tileInfo = this.tileInfo && this.tileInfo.clone()),
            e
          );
        }
      });
      (0, i._)(
        [(0, h.Cb)({ type: g.Z, json: { read: { source: 'fullExtent' } } })],
        P.prototype,
        'fullExtent',
        void 0,
      ),
        (0, i._)(
          [(0, h.Cb)({ type: String, json: { read: { source: 'id' } } })],
          P.prototype,
          'id',
          void 0,
        ),
        (0, i._)(
          [(0, h.Cb)({ type: I.Z, json: { read: { source: 'tileInfo' } } })],
          P.prototype,
          'tileInfo',
          void 0,
        ),
        (P = L = (0, i._)([(0, y.j)('esri.layer.support.TileMatrixSet')], P));
      const O = P;
      var R;
      let F = (R = class extends E.wq {
        constructor(e) {
          super(e),
            (this.id = null),
            (this.title = null),
            (this.description = null),
            (this.legendUrl = null);
        }
        clone() {
          const e = new R();
          return (
            this.hasOwnProperty('description') &&
              (e.description = this.description),
            this.hasOwnProperty('id') && (e.id = this.id),
            this.hasOwnProperty('isDefault') && (e.isDefault = this.isDefault),
            this.hasOwnProperty('keywords') &&
              (e.keywords = this.keywords && this.keywords.slice()),
            this.hasOwnProperty('legendUrl') && (e.legendUrl = this.legendUrl),
            this.hasOwnProperty('title') && (e.title = this.title),
            e
          );
        }
      });
      (0, i._)(
        [(0, h.Cb)({ json: { read: { source: 'id' } } })],
        F.prototype,
        'id',
        void 0,
      ),
        (0, i._)(
          [(0, h.Cb)({ json: { read: { source: 'title' } } })],
          F.prototype,
          'title',
          void 0,
        ),
        (0, i._)(
          [(0, h.Cb)({ json: { read: { source: 'abstract' } } })],
          F.prototype,
          'description',
          void 0,
        ),
        (0, i._)(
          [(0, h.Cb)({ json: { read: { source: 'legendUrl' } } })],
          F.prototype,
          'legendUrl',
          void 0,
        ),
        (0, i._)(
          [(0, h.Cb)({ json: { read: { source: 'isDefault' } } })],
          F.prototype,
          'isDefault',
          void 0,
        ),
        (0, i._)(
          [(0, h.Cb)({ json: { read: { source: 'keywords' } } })],
          F.prototype,
          'keywords',
          void 0,
        ),
        (F = R = (0, i._)([(0, y.j)('esri.layer.support.WMTSStyle')], F));
      const A = F;
      var V;
      let j = (V = class extends E.wq {
        constructor(e) {
          super(e),
            (this.fullExtent = null),
            (this.fullExtents = null),
            (this.imageFormats = null),
            (this.id = null),
            (this.layer = null),
            (this.styles = null),
            (this.tileMatrixSetId = null),
            (this.tileMatrixSets = null);
        }
        get description() {
          return this._get('description');
        }
        set description(e) {
          this._set('description', e);
        }
        readFullExtent(e, t) {
          return (e = t.fullExtent) ? g.Z.fromJSON(e) : null;
        }
        readFullExtents(e, t) {
          var r;
          return null != (r = t.fullExtents) && r.length
            ? t.fullExtents.map((e) => g.Z.fromJSON(e))
            : t.tileMatrixSets
                .map((e) => g.Z.fromJSON(e.fullExtent))
                .filter((e) => e);
        }
        get imageFormat() {
          let e = this._get('imageFormat');
          return (
            e ||
              (e =
                this.imageFormats && this.imageFormats.length
                  ? this.imageFormats[0]
                  : ''),
            e
          );
        }
        set imageFormat(e) {
          const t = this.imageFormats;
          e &&
          (e.indexOf('image/') > -1 || (t && -1 === t.indexOf(e))) &&
          (-1 === e.indexOf('image/') && (e = 'image/' + e),
          t && -1 === t.indexOf(e))
            ? console.error("The layer doesn't support the format of " + e)
            : this._set('imageFormat', e);
        }
        get styleId() {
          let e = this._get('styleId');
          return (
            e ||
              (e =
                this.styles && this.styles.length
                  ? this.styles.getItemAt(0).id
                  : ''),
            e
          );
        }
        set styleId(e) {
          this._set('styleId', e);
        }
        get title() {
          return this._get('title');
        }
        set title(e) {
          this._set('title', e);
        }
        get tileMatrixSet() {
          return this.tileMatrixSets
            ? this.tileMatrixSets.find((e) => e.id === this.tileMatrixSetId)
            : null;
        }
        clone() {
          const e = new V();
          return (
            this.hasOwnProperty('description') &&
              (e.description = this.description),
            this.hasOwnProperty('imageFormats') &&
              (e.imageFormats = this.imageFormats && this.imageFormats.slice()),
            this.hasOwnProperty('imageFormat') &&
              (e.imageFormat = this.imageFormat),
            this.hasOwnProperty('fullExtent') &&
              (e.fullExtent = this.fullExtent && this.fullExtent.clone()),
            this.hasOwnProperty('id') && (e.id = this.id),
            this.hasOwnProperty('layer') && (e.layer = this.layer),
            this.hasOwnProperty('styleId') && (e.styleId = this.styleId),
            this.hasOwnProperty('styles') &&
              (e.styles = this.styles && this.styles.clone()),
            this.hasOwnProperty('tileMatrixSetId') &&
              (e.tileMatrixSetId = this.tileMatrixSetId),
            this.hasOwnProperty('tileMatrixSets') &&
              (e.tileMatrixSets = this.tileMatrixSets.clone()),
            this.hasOwnProperty('title') && (e.title = this.title),
            e
          );
        }
      });
      (0, i._)([(0, h.Cb)()], j.prototype, 'description', null),
        (0, i._)([(0, h.Cb)()], j.prototype, 'fullExtent', void 0),
        (0, i._)(
          [(0, m.r)('fullExtent', ['fullExtent'])],
          j.prototype,
          'readFullExtent',
          null,
        ),
        (0, i._)(
          [(0, h.Cb)({ readOnly: !0 })],
          j.prototype,
          'fullExtents',
          void 0,
        ),
        (0, i._)(
          [(0, m.r)('fullExtents', ['fullExtents', 'tileMatrixSets'])],
          j.prototype,
          'readFullExtents',
          null,
        ),
        (0, i._)([(0, h.Cb)()], j.prototype, 'imageFormat', null),
        (0, i._)(
          [(0, h.Cb)({ json: { read: { source: 'formats' } } })],
          j.prototype,
          'imageFormats',
          void 0,
        ),
        (0, i._)([(0, h.Cb)()], j.prototype, 'id', void 0),
        (0, i._)([(0, h.Cb)()], j.prototype, 'layer', void 0),
        (0, i._)([(0, h.Cb)()], j.prototype, 'styleId', null),
        (0, i._)(
          [
            (0, h.Cb)({
              type: l.Z.ofType(A),
              json: { read: { source: 'styles' } },
            }),
          ],
          j.prototype,
          'styles',
          void 0,
        ),
        (0, i._)(
          [(0, h.Cb)({ value: null, json: { write: { ignoreOrigin: !0 } } })],
          j.prototype,
          'title',
          null,
        ),
        (0, i._)([(0, h.Cb)()], j.prototype, 'tileMatrixSetId', void 0),
        (0, i._)(
          [(0, h.Cb)({ readOnly: !0 })],
          j.prototype,
          'tileMatrixSet',
          null,
        ),
        (0, i._)(
          [
            (0, h.Cb)({
              type: l.Z.ofType(O),
              json: { read: { source: 'tileMatrixSets' } },
            }),
          ],
          j.prototype,
          'tileMatrixSets',
          void 0,
        ),
        (j = V = (0, i._)([(0, y.j)('esri.layers.support.WMTSSublayer')], j));
      const U = j;
      var N = r(70586),
        k = r(13473),
        Z = r(24678),
        D = r(58116),
        W = r(52162),
        K = r(88724);
      const B = 90.71428571428571;
      function H(e) {
        return e.nodeType === Node.ELEMENT_NODE;
      }
      function q(e, t) {
        for (let r = 0; r < t.childNodes.length; r++) {
          const i = t.childNodes[r];
          if (H(i) && i.nodeName === e) return i;
        }
        return null;
      }
      function J(e, t) {
        const r = [];
        for (let i = 0; i < t.childNodes.length; i++) {
          const s = t.childNodes[i];
          H(s) && s.nodeName === e && r.push(s);
        }
        return r;
      }
      function $(e, t) {
        const r = [];
        for (let i = 0; i < t.childNodes.length; i++) {
          const s = t.childNodes[i];
          H(s) && s.nodeName === e && r.push(s);
        }
        return r.map((e) => e.textContent);
      }
      function G(e, t) {
        return (
          e.split('>').forEach((e) => {
            t && (t = q(e, t));
          }),
          t && t.textContent
        );
      }
      function Y(e, t, r, i) {
        let s;
        return (
          Array.prototype.slice.call(i.childNodes).some((i) => {
            if (i.nodeName.indexOf(e) > -1) {
              const e = q(t, i),
                l = e && e.textContent;
              if (l === r || (r.split(':') && r.split(':')[1] === l))
                return (s = i), !0;
            }
            return !1;
          }),
          s
        );
      }
      function z(e, t, r, i, s) {
        const l = G('Abstract', t),
          a = $('Format', t);
        return {
          id: e,
          fullExtent: X(t),
          fullExtents: ee(t),
          description: l,
          formats: a,
          styles: te(t, i),
          title: G('Title', t),
          tileMatrixSets: re(s, t, r),
        };
      }
      function Q(e, t) {
        var r;
        const i = [],
          s = null == (r = e.layerMap) ? void 0 : r.get(t);
        if (!s) return;
        const l = J('ResourceURL', s),
          a = J('Dimension', s);
        let n, o, u, c;
        return (
          a.length &&
            ((n = G('Identifier', a[0])),
            (o = $('Default', a[0]) || $('Value', a[0]))),
          a.length > 1 &&
            ((u = G('Identifier', a[1])),
            (c = $('Default', a[1]) || $('Value', a[1]))),
          e.dimensionMap.set(t, { dimensions: o, dimensions2: c }),
          l.forEach((e) => {
            let t = e.getAttribute('template');
            if ('tile' === e.getAttribute('resourceType')) {
              if (n && o.length)
                if (t.indexOf('{' + n + '}') > -1)
                  t = t.replace('{' + n + '}', '{dimensionValue}');
                else {
                  const e = t
                    .toLowerCase()
                    .indexOf('{' + n.toLowerCase() + '}');
                  e > -1 &&
                    (t =
                      t.substring(0, e) +
                      '{dimensionValue}' +
                      t.substring(e + n.length + 2));
                }
              if (u && c.length)
                if (t.indexOf('{' + u + '}') > -1)
                  t = t.replace('{' + u + '}', '{dimensionValue2}');
                else {
                  const e = t
                    .toLowerCase()
                    .indexOf('{' + u.toLowerCase() + '}');
                  e > -1 &&
                    (t =
                      t.substring(0, e) +
                      '{dimensionValue2}' +
                      t.substring(e + u.length + 2));
                }
              i.push({
                template: t,
                format: e.getAttribute('format'),
                resourceType: 'tile',
              });
            }
          }),
          i
        );
      }
      function X(e) {
        const t = q('WGS84BoundingBox', e),
          r = t ? G('LowerCorner', t).split(' ') : ['-180', '-90'],
          i = t ? G('UpperCorner', t).split(' ') : ['180', '90'];
        return {
          xmin: parseFloat(r[0]),
          ymin: parseFloat(r[1]),
          xmax: parseFloat(i[0]),
          ymax: parseFloat(i[1]),
          spatialReference: { wkid: 4326 },
        };
      }
      function ee(e) {
        const t = [];
        return (
          (0, K.h)(e, {
            BoundingBox: (e) => {
              if (!e.getAttribute('crs')) return;
              const r = e.getAttribute('crs').toLowerCase(),
                i = ie(r),
                s = r.includes('epsg') && (0, W.A)(i.wkid);
              let l, a, n, o;
              (0, K.h)(e, {
                LowerCorner: (e) => {
                  ([l, a] = e.textContent
                    .split(' ')
                    .map((e) => Number.parseFloat(e))),
                    s && ([l, a] = [a, l]);
                },
                UpperCorner: (e) => {
                  ([n, o] = e.textContent
                    .split(' ')
                    .map((e) => Number.parseFloat(e))),
                    s && ([n, o] = [o, n]);
                },
              }),
                t.push({
                  xmin: l,
                  ymin: a,
                  xmax: n,
                  ymax: o,
                  spatialReference: i,
                });
            },
          }),
          t
        );
      }
      function te(e, t) {
        return J('Style', e).map((e) => {
          const r = q('LegendURL', e),
            i = q('Keywords', e),
            s = i && $('Keyword', i);
          let l = r && r.getAttribute('xlink:href');
          return (
            t && (l = l && l.replace(/^http:/i, 'https:')),
            {
              abstract: G('Abstract', e),
              id: G('Identifier', e),
              isDefault: 'true' === e.getAttribute('isDefault'),
              keywords: s,
              legendUrl: l,
              title: G('Title', e),
            }
          );
        });
      }
      function re(e, t, r) {
        return J('TileMatrixSetLink', t).map((t) =>
          (function (e, t, r) {
            const i = q('TileMatrixSet', t).textContent,
              s = $('TileMatrix', t),
              l = r.find((e) => {
                const t = q('Identifier', e),
                  r = t && t.textContent;
                return !!(r === i || (i.split(':') && i.split(':')[1] === r));
              }),
              a = q('TileMatrixSetLimits', t),
              n = a && J('TileMatrixLimits', a),
              o = new Map();
            if (null != n && n.length)
              for (const e of n) {
                const t = q('TileMatrix', e).textContent,
                  r = +q('MinTileRow', e).textContent,
                  i = +q('MaxTileRow', e).textContent,
                  s = +q('MinTileCol', e).textContent,
                  l = +q('MaxTileCol', e).textContent;
                o.set(t, { minCol: s, maxCol: l, minRow: r, maxRow: i });
              }
            const u = G('SupportedCRS', l).toLowerCase(),
              c = (function (e, t) {
                return se(q('TileMatrix', e), t);
              })(l, u),
              d = c.spatialReference,
              p = q('TileMatrix', l),
              h = [
                parseInt(G('TileWidth', p), 10),
                parseInt(G('TileHeight', p), 10),
              ],
              m = [];
            s.length
              ? s.forEach((e, t) => {
                  const r = Y('TileMatrix', 'Identifier', e, l);
                  m.push(ne(r, u, t, i, o));
                })
              : J('TileMatrix', l).forEach((e, t) => {
                  m.push(ne(e, u, t, i, o));
                });
            const y = (function (e, t, r, i, s) {
                const l = q('BoundingBox', t);
                let a, n, o, u, c, d;
                if (
                  (l &&
                    ((a = G('LowerCorner', l).split(' ')),
                    (n = G('UpperCorner', l).split(' '))),
                  a && a.length > 1 && n && n.length > 1)
                )
                  (o = parseFloat(a[0])),
                    (c = parseFloat(a[1])),
                    (u = parseFloat(n[0])),
                    (d = parseFloat(n[1]));
                else {
                  const e = q('TileMatrix', t),
                    l = parseInt(G('MatrixWidth', e), 10),
                    a = parseInt(G('MatrixHeight', e), 10);
                  (o = r.x),
                    (d = r.y),
                    (u = o + l * i[0] * s.resolution),
                    (c = d - a * i[1] * s.resolution);
                }
                return (function (e, t) {
                  return '1.0.0' === e && (0, W.A)(t.wkid);
                })(e, r.spatialReference)
                  ? new g.Z(c, o, d, u, r.spatialReference)
                  : new g.Z(o, c, u, d, r.spatialReference);
              })(e, l, c, h, m[0]).toJSON(),
              f = new I.Z({
                dpi: 96,
                spatialReference: d,
                size: h,
                origin: c,
                lods: m,
              }).toJSON();
            return { id: i, fullExtent: y, tileInfo: f };
          })(e, t, r),
        );
      }
      function ie(e) {
        e = e.toLowerCase();
        let t = parseInt(e.split(':').pop(), 10);
        (900913 !== t && 3857 !== t) || (t = 102100);
        const r = (function (e) {
          return e.includes('crs84') || e.includes('crs:84')
            ? le.CRS84
            : e.includes('crs83') || e.includes('crs:83')
            ? le.CRS83
            : e.includes('crs27') || e.includes('crs:27')
            ? le.CRS27
            : null;
        })(e);
        return (0, N.pC)(r) && (t = r), { wkid: t };
      }
      function se(e, t) {
        const r = ie(t),
          [i, s] = G('TopLeftCorner', e)
            .split(' ')
            .map((e) => parseFloat(e)),
          l = t.includes('epsg') && (0, W.A)(r.wkid);
        return new k.Z(
          l
            ? { x: s, y: i, spatialReference: r }
            : { x: i, y: s, spatialReference: r },
        );
      }
      var le, ae;
      function ne(e, t, r, i, s) {
        var l;
        const a = ie(t),
          n = G('Identifier', e);
        let o = parseFloat(G('ScaleDenominator', e));
        const u = oe(a.wkid, o, i);
        o *= 96 / B;
        const c = +G('MatrixWidth', e),
          d = +G('MatrixHeight', e),
          {
            maxCol: p = c - 1,
            maxRow: h = d - 1,
            minCol: m = 0,
            minRow: y = 0,
          } = null != (l = s.get(n)) ? l : {},
          { x: f, y: g } = se(e, t);
        return {
          cols: [m, p],
          level: r,
          levelValue: n,
          origin: [f, g],
          scale: o,
          resolution: u,
          rows: [y, h],
        };
      }
      function oe(e, t, r) {
        let i;
        return (
          (i = D.Z.hasOwnProperty('' + e)
            ? D.Z.values[D.Z[e]]
            : 'default028mm' === r
            ? (6370997 * Math.PI) / 180
            : (0, Z.e8)(e).metersPerDegree),
          (7 * t) / 25e3 / i
        );
      }
      ((ae = le || (le = {}))[(ae.CRS84 = 4326)] = 'CRS84'),
        (ae[(ae.CRS83 = 4269)] = 'CRS83'),
        (ae[(ae.CRS27 = 4267)] = 'CRS27');
      const ue = {
          'image/png': '.png',
          'image/png8': '.png',
          'image/png24': '.png',
          'image/png32': '.png',
          'image/jpg': '.jpg',
          'image/jpeg': '.jpeg',
          'image/gif': '.gif',
          'image/bmp': '.bmp',
          'image/tiff': '.tif',
          'image/jpgpng': '',
          'image/jpegpng': '',
          'image/unknown': '',
        },
        ce = new Set([
          'version',
          'service',
          'request',
          'layer',
          'style',
          'format',
          'tilematrixset',
          'tilematrix',
          'tilerow',
          'tilecol',
        ]);
      let de = class extends (0, x.h)(
        (0, M.Q)((0, C.M)((0, S.q)((0, b.I)((0, u.R)(v.Z))))),
      ) {
        constructor(...e) {
          super(...e),
            (this._sublayersHandles = new n.Z()),
            (this.copyright = ''),
            (this.customParameters = null),
            (this.customLayerParameters = null),
            (this.fullExtent = null),
            (this.operationalLayerType = 'WebTiledLayer'),
            (this.resourceInfo = null),
            (this.serviceMode = 'RESTful'),
            (this.sublayers = null),
            (this.type = 'wmts'),
            (this.version = '1.0.0'),
            this.watch(
              'activeLayer',
              (e, t) => {
                t && (t.layer = null), e && (e.layer = this);
              },
              !0,
            ),
            this.watch(
              'sublayers',
              (e, t) => {
                t &&
                  (t.forEach((e) => {
                    e.layer = null;
                  }),
                  this._sublayersHandles.removeAll(),
                  (this._sublayersHandles = null)),
                  e &&
                    (e.forEach((e) => {
                      e.layer = this;
                    }),
                    this._sublayersHandles ||
                      (this._sublayersHandles = new n.Z()),
                    this._sublayersHandles.add([
                      e.on('after-add', ({ item: e }) => {
                        e.layer = this;
                      }),
                      e.on('after-remove', ({ item: e }) => {
                        e.layer = null;
                      }),
                    ]));
              },
              !0,
            );
        }
        normalizeCtorArgs(e, t) {
          return 'string' == typeof e ? { url: e, ...t } : e;
        }
        load(e) {
          if ('KVP' === this.serviceMode || 'RESTful' === this.serviceMode)
            return (
              this.addResolvingPromise(
                this.loadFromPortal({ supportedTypes: ['WMTS'] }, e)
                  .catch(d.r9)
                  .then(() => this._fetchService(e))
                  .catch((e) => {
                    throw (
                      ((0, d.r9)(e),
                      new a.Z(
                        'wmtslayer:unsupported-service-data',
                        'Invalid response from the WMTS service.',
                        { error: e },
                      ))
                    );
                  }),
              ),
              Promise.resolve(this)
            );
          console.error("WMTS mode could only be 'KVP' or 'RESTful'");
        }
        get activeLayer() {
          return this._get('activeLayer');
        }
        set activeLayer(e) {
          this._set('activeLayer', e);
        }
        readActiveLayerFromService(e, t, r) {
          this.activeLayer || (this.activeLayer = new U());
          let i = t.layers.find((e) => e.id === this.activeLayer.id);
          return (
            i || (i = t.layers[0]),
            this.activeLayer.read(i, r),
            this.activeLayer
          );
        }
        readActiveLayerFromItemOrWebDoc(e, t) {
          const { templateUrl: r, wmtsInfo: i } = t,
            s = r ? this._getLowerCasedUrlParams(r) : null,
            l = null == i ? void 0 : i.layerIdentifier;
          let a = null;
          const n = null == i ? void 0 : i.tileMatrixSet;
          n && (Array.isArray(n) ? n.length && (a = n[0]) : (a = n));
          const o = null == s ? void 0 : s.format,
            u = null == s ? void 0 : s.style;
          return new U({
            id: l,
            imageFormat: o,
            styleId: u,
            tileMatrixSetId: a,
          });
        }
        writeActiveLayer(e, t, r, i) {
          const s = this.activeLayer;
          t.templateUrl = this.getUrlTemplate(
            s.id,
            s.tileMatrixSetId,
            s.imageFormat,
            s.styleId,
          );
          const l = (0, c.hS)('tileMatrixSet.tileInfo', s);
          (t.tileInfo = l ? l.toJSON(i) : null),
            (t.wmtsInfo = {
              ...t.wmtsInfo,
              layerIdentifier: s.id,
              tileMatrixSet: s.tileMatrixSetId,
            });
        }
        readCustomParameters(e, t) {
          const r = t.wmtsInfo;
          return r ? this._mergeParams(r.customParameters, r.url) : null;
        }
        get fullExtents() {
          return this.activeLayer.fullExtents;
        }
        readServiceMode(e, t) {
          return t.templateUrl.indexOf('?') > -1 ? 'KVP' : 'RESTful';
        }
        readSublayersFromService(e, t, r) {
          return (function (e, t) {
            return e.map((e) => {
              const r = new U();
              return r.read(e, t), r;
            });
          })(t.layers, r);
        }
        get supportedSpatialReferences() {
          return this.activeLayer.tileMatrixSets
            .map((e) => e.tileInfo.spatialReference)
            .toArray();
        }
        get tilemapCache() {
          var e, t;
          const r =
            null == (e = this.activeLayer) || null == (t = e.tileMatrixSet)
              ? void 0
              : t.tileInfo;
          return new _(r);
        }
        get title() {
          var e, t;
          return null != (e = null == (t = this.activeLayer) ? void 0 : t.title)
            ? e
            : 'Layer';
        }
        set title(e) {
          e ? this._override('title', e) : this._clearOverride('title');
        }
        get url() {
          return this._get('url');
        }
        set url(e) {
          e && '/' === e.substr(-1)
            ? this._set('url', e.slice(0, -1))
            : this._set('url', e);
        }
        createWebTileLayer(e) {
          const t = this.getUrlTemplate(
              this.activeLayer.id,
              this.activeLayer.tileMatrixSetId,
              this.activeLayer.imageFormat,
              this.activeLayer.styleId,
            ),
            r = this._getTileMatrixSetById(e.tileMatrixSetId).tileInfo,
            i = e.fullExtent,
            s = new T.Z({
              layerIdentifier: e.id,
              tileMatrixSet: e.tileMatrixSetId,
              url: this.url,
            });
          return (
            this.customLayerParameters &&
              (s.customLayerParameters = this.customLayerParameters),
            this.customParameters &&
              (s.customParameters = this.customParameters),
            new w.default({
              fullExtent: i,
              urlTemplate: t,
              tileInfo: r,
              wmtsInfo: s,
            })
          );
        }
        fetchTile(e, t, r) {
          const i = this.getTileUrl(e, t, r);
          return (0, s.default)(i, { responseType: 'image' }).then(
            (e) => e.data,
          );
        }
        findSublayerById(e) {
          return this.sublayers.find((t) => t.id === e);
        }
        getTileUrl(e, t, r) {
          const i = this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId)
              .tileInfo.lods[e],
            s = i ? (i.levelValue ? i.levelValue : `${i.level}`) : `${e}`;
          let l = this.resourceInfo
            ? ''
            : (function (e, t, r, i, s, l, a, n) {
                var o, u;
                const c = (function (e, t, r) {
                  const i = Q(e, t),
                    s = i.filter((e) => e.format === r);
                  return s.length ? s : i;
                })(e, t, i);
                if (!((null == c ? void 0 : c.length) > 0)) return '';
                const { dimensionMap: d } = e,
                  p = null == (o = d.get(t).dimensions) ? void 0 : o[0],
                  h = null == (u = d.get(t).dimensions2) ? void 0 : u[0];
                return c[a % c.length].template
                  .replace(/\{Style\}/gi, s)
                  .replace(/\{TileMatrixSet\}/gi, r)
                  .replace(/\{TileMatrix\}/gi, l)
                  .replace(/\{TileRow\}/gi, '' + a)
                  .replace(/\{TileCol\}/gi, '' + n)
                  .replace(/\{dimensionValue\}/gi, p)
                  .replace(/\{dimensionValue2\}/gi, h);
              })(
                { dimensionMap: this.dimensionMap, layerMap: this.layerMap },
                this.activeLayer.id,
                this.activeLayer.tileMatrixSetId,
                this.activeLayer.imageFormat,
                this.activeLayer.styleId,
                s,
                t,
                r,
              );
          return (
            l ||
              (l = this.getUrlTemplate(
                this.activeLayer.id,
                this.activeLayer.tileMatrixSetId,
                this.activeLayer.imageFormat,
                this.activeLayer.styleId,
              )
                .replace(/\{level\}/gi, s)
                .replace(/\{row\}/gi, `${t}`)
                .replace(/\{col\}/gi, `${r}`)),
            (l = this._appendCustomLayerParameters(l)),
            l
          );
        }
        getUrlTemplate(e, t, r, i) {
          if (!this.resourceInfo) {
            const r = (function (e, t, r, i) {
              const { dimensionMap: s } = e,
                l = Q(e, t);
              let a = '';
              if (l && l.length > 0) {
                const e = s.get(t).dimensions && s.get(t).dimensions[0],
                  n = s.get(t).dimensions2 && s.get(t).dimensions2[0];
                (a = l[0].template),
                  a.indexOf('.xxx') === a.length - 4 &&
                    (a = a.slice(0, a.length - 4)),
                  (a = a.replace(/\{Style\}/gi, i)),
                  (a = a.replace(/\{TileMatrixSet\}/gi, r)),
                  (a = a.replace(/\{TileMatrix\}/gi, '{level}')),
                  (a = a.replace(/\{TileRow\}/gi, '{row}')),
                  (a = a.replace(/\{TileCol\}/gi, '{col}')),
                  (a = a.replace(/\{dimensionValue\}/gi, e)),
                  (a = a.replace(/\{dimensionValue2\}/gi, n));
              }
              return a;
            })(
              { dimensionMap: this.dimensionMap, layerMap: this.layerMap },
              e,
              t,
              i,
            );
            if (r) return r;
          }
          if ('KVP' === this.serviceMode)
            return (
              this.url +
              '?SERVICE=WMTS&VERSION=' +
              this.version +
              '&REQUEST=GetTile&LAYER=' +
              e +
              '&STYLE=' +
              i +
              '&FORMAT=' +
              r +
              '&TILEMATRIXSET=' +
              t +
              '&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}'
            );
          if ('RESTful' === this.serviceMode) {
            let s = '';
            return (
              ue[r.toLowerCase()] && (s = ue[r.toLowerCase()]),
              this.url + e + '/' + i + '/' + t + '/{level}/{row}/{col}' + s
            );
          }
          return '';
        }
        async _fetchService(e) {
          let t;
          if (this.resourceInfo)
            'KVP' === this.resourceInfo.serviceMode &&
              (this.url += this.url.indexOf('?') > -1 ? '' : '?'),
              (t = { ssl: !1, data: this.resourceInfo });
          else
            try {
              t = await this._getCapabilities(this.serviceMode, e);
            } catch {
              const r = 'KVP' === this.serviceMode ? 'RESTful' : 'KVP';
              try {
                (t = await this._getCapabilities(r, e)), (this.serviceMode = r);
              } catch (e) {
                throw new a.Z(
                  'wmtslayer:unsupported-service-data',
                  'Services does not support RESTful or KVP service modes.',
                  { error: e },
                );
              }
            }
          this.resourceInfo
            ? (t.data = (function (e) {
                return (
                  e.layers.forEach((e) => {
                    e.tileMatrixSets.forEach((e) => {
                      const t = e.tileInfo;
                      96 !== t.dpi &&
                        (t.lods.forEach((r) => {
                          (r.scale = (96 * r.scale) / t.dpi),
                            (r.resolution = oe(
                              t.spatialReference.wkid,
                              (r.scale * B) / 96,
                              e.id,
                            ));
                        }),
                        (t.dpi = 96));
                    });
                  }),
                  e
                );
              })(t.data))
            : (t.data = (function (e, t) {
                var r, i;
                e = e.replace(/ows:/gi, '');
                const s = new DOMParser().parseFromString(
                    e,
                    'text/xml',
                  ).documentElement,
                  l = new Map(),
                  n = new Map(),
                  o = q('Contents', s);
                if (!o)
                  throw new a.Z('wmtslayer:wmts-capabilities-xml-is-not-valid');
                const u = q('OperationsMetadata', s),
                  c = null == u ? void 0 : u.querySelector("[name='GetTile']"),
                  d = null == c ? void 0 : c.getElementsByTagName('Get'),
                  p = d && Array.prototype.slice.call(d),
                  h =
                    null !=
                      (r =
                        (null == t || null == (i = t.url)
                          ? void 0
                          : i.indexOf('https')) > -1) && r;
                let m,
                  y,
                  f = t.serviceMode,
                  g = t && t.url;
                if (
                  (p &&
                    p.length &&
                    p.some((e) => {
                      const t = q('Constraint', e);
                      return !t || Y('AllowedValues', 'Value', f, t)
                        ? ((g = e.attributes[0].nodeValue), !0)
                        : (!t ||
                          Y('AllowedValues', 'Value', 'RESTful', t) ||
                          Y('AllowedValues', 'Value', 'REST', t)
                            ? (y = e.attributes[0].nodeValue)
                            : (t && !Y('AllowedValues', 'Value', 'KVP', t)) ||
                              (m = e.attributes[0].nodeValue),
                          !1);
                    }),
                  !g)
                )
                  if (y) (g = y), (f = 'RESTful');
                  else if (m) (g = m), (f = 'KVP');
                  else {
                    const e = q('ServiceMetadataURL', s);
                    g = e && e.getAttribute('xlink:href');
                  }
                const v = g.indexOf('1.0.0/');
                -1 === v && 'RESTful' === f
                  ? (g += '/')
                  : v > -1 && (g = g.substring(0, v)),
                  'KVP' === f && (g += v > -1 ? '' : '?'),
                  h && (g = g.replace(/^http:/i, 'https:'));
                const w = G('ServiceIdentification>ServiceTypeVersion', s),
                  x = G('ServiceIdentification>AccessConstraints', s),
                  S = J('Layer', o),
                  b = J('TileMatrixSet', o),
                  M = S.map((e) => {
                    const t = G('Identifier', e);
                    return l.set(t, e), z(t, e, b, h, w);
                  });
                return {
                  copyright: x,
                  dimensionMap: n,
                  layerMap: l,
                  layers: M,
                  serviceMode: f,
                  tileUrl: g,
                };
              })(t.data, { serviceMode: this.serviceMode, url: this.url })),
            t.data && this.read(t.data, { origin: 'service' });
        }
        async _getCapabilities(e, t) {
          const r = this._getCapabilitiesUrl(e);
          return await (0, s.default)(r, { ...t, responseType: 'text' });
        }
        _getTileMatrixSetById(e) {
          return this.findSublayerById(this.activeLayer.id).tileMatrixSets.find(
            (t) => t.id === e,
          );
        }
        _appendCustomParameters(e) {
          return this._appendParameters(e, this.customParameters);
        }
        _appendCustomLayerParameters(e) {
          return this._appendParameters(e, {
            ...(0, o.d9)(this.customParameters),
            ...this.customLayerParameters,
          });
        }
        _appendParameters(e, t) {
          const r = (0, p.mN)(e),
            i = { ...r.query, ...t },
            s = (0, p.B7)(i);
          return '' === s ? r.path : `${r.path}?${s}`;
        }
        _getCapabilitiesUrl(e) {
          let t;
          return (
            (this.url = this.url.split('?')[0]),
            'KVP' === e
              ? (t =
                  this.url +
                  '?request=GetCapabilities&service=WMTS&version=' +
                  this.version)
              : 'RESTful' === e &&
                (t = this.url + '/' + this.version + '/WMTSCapabilities.xml'),
            (t = this._appendCustomParameters(t)),
            t
          );
        }
        _getLowerCasedUrlParams(e) {
          if (!e) return null;
          const t = (0, p.mN)(e).query;
          if (!t) return null;
          const r = {};
          return (
            Object.keys(t).forEach((e) => {
              r[e.toLowerCase()] = t[e];
            }),
            r
          );
        }
        _mergeParams(e, t) {
          const r = this._getLowerCasedUrlParams(t);
          if (r) {
            const t = Object.keys(r);
            t.length &&
              ((e = e ? (0, o.d9)(e) : {}),
              t.forEach((t) => {
                e.hasOwnProperty(t) || ce.has(t) || (e[t] = r[t]);
              }));
          }
          return e;
        }
      };
      (0, i._)([(0, h.Cb)()], de.prototype, 'dimensionMap', void 0),
        (0, i._)([(0, h.Cb)()], de.prototype, 'layerMap', void 0),
        (0, i._)(
          [
            (0, h.Cb)({
              type: U,
              json: {
                origins: { 'web-document': { write: { ignoreOrigin: !0 } } },
              },
            }),
          ],
          de.prototype,
          'activeLayer',
          null,
        ),
        (0, i._)(
          [(0, m.r)('service', 'activeLayer', ['layers'])],
          de.prototype,
          'readActiveLayerFromService',
          null,
        ),
        (0, i._)(
          [
            (0, m.r)(['web-document', 'portal-item'], 'activeLayer', [
              'wmtsInfo',
            ]),
          ],
          de.prototype,
          'readActiveLayerFromItemOrWebDoc',
          null,
        ),
        (0, i._)(
          [
            (0, f.c)(['web-document', 'portal-item'], 'activeLayer', {
              templateUrl: { type: String },
              tileInfo: { type: I.Z },
              'wmtsInfo.layerIdentifier': { type: String },
              'wmtsInfo.tileMatrixSet': { type: String },
            }),
          ],
          de.prototype,
          'writeActiveLayer',
          null,
        ),
        (0, i._)(
          [(0, h.Cb)({ type: String, value: '', json: { write: !0 } })],
          de.prototype,
          'copyright',
          void 0,
        ),
        (0, i._)(
          [(0, h.Cb)({ type: ['show', 'hide'] })],
          de.prototype,
          'listMode',
          void 0,
        ),
        (0, i._)(
          [
            (0, h.Cb)({
              json: {
                origins: {
                  'web-document': {
                    read: {
                      source: ['wmtsInfo.customParameters', 'wmtsInfo.url'],
                    },
                    write: { target: 'wmtsInfo.customParameters' },
                  },
                  'portal-item': {
                    read: {
                      source: ['wmtsInfo.customParameters', 'wmtsInfo.url'],
                    },
                    write: { target: 'wmtsInfo.customParameters' },
                  },
                },
              },
            }),
          ],
          de.prototype,
          'customParameters',
          void 0,
        ),
        (0, i._)(
          [(0, m.r)(['portal-item', 'web-document'], 'customParameters')],
          de.prototype,
          'readCustomParameters',
          null,
        ),
        (0, i._)(
          [
            (0, h.Cb)({
              json: {
                origins: {
                  'web-document': {
                    read: { source: 'wmtsInfo.customLayerParameters' },
                    write: { target: 'wmtsInfo.customLayerParameters' },
                  },
                  'portal-item': {
                    read: { source: 'wmtsInfo.customLayerParameters' },
                    write: { target: 'wmtsInfo.customLayerParameters' },
                  },
                },
              },
            }),
          ],
          de.prototype,
          'customLayerParameters',
          void 0,
        ),
        (0, i._)(
          [
            (0, h.Cb)({
              type: g.Z,
              json: {
                write: { ignoreOrigin: !0 },
                origins: {
                  'web-document': { read: { source: 'fullExtent' } },
                  'portal-item': { read: { source: 'fullExtent' } },
                },
              },
            }),
          ],
          de.prototype,
          'fullExtent',
          void 0,
        ),
        (0, i._)(
          [(0, h.Cb)({ readOnly: !0 })],
          de.prototype,
          'fullExtents',
          null,
        ),
        (0, i._)(
          [(0, h.Cb)({ type: ['WebTiledLayer'] })],
          de.prototype,
          'operationalLayerType',
          void 0,
        ),
        (0, i._)([(0, h.Cb)()], de.prototype, 'resourceInfo', void 0),
        (0, i._)([(0, h.Cb)()], de.prototype, 'serviceMode', void 0),
        (0, i._)(
          [
            (0, m.r)(['portal-item', 'web-document'], 'serviceMode', [
              'templateUrl',
            ]),
          ],
          de.prototype,
          'readServiceMode',
          null,
        ),
        (0, i._)(
          [(0, h.Cb)({ type: l.Z.ofType(U) })],
          de.prototype,
          'sublayers',
          void 0,
        ),
        (0, i._)(
          [(0, m.r)('service', 'sublayers', ['layers'])],
          de.prototype,
          'readSublayersFromService',
          null,
        ),
        (0, i._)(
          [(0, h.Cb)({ readOnly: !0 })],
          de.prototype,
          'supportedSpatialReferences',
          null,
        ),
        (0, i._)(
          [(0, h.Cb)({ readOnly: !0 })],
          de.prototype,
          'tilemapCache',
          null,
        ),
        (0, i._)(
          [(0, h.Cb)({ json: { read: { source: 'title' } } })],
          de.prototype,
          'title',
          null,
        ),
        (0, i._)(
          [(0, h.Cb)({ json: { read: !1 }, readOnly: !0, value: 'wmts' })],
          de.prototype,
          'type',
          void 0,
        ),
        (0, i._)(
          [
            (0, h.Cb)({
              json: {
                origins: {
                  service: { read: { source: 'tileUrl' } },
                  'web-document': {
                    read: { source: 'wmtsInfo.url' },
                    write: { target: 'wmtsInfo.url' },
                  },
                  'portal-item': {
                    read: { source: 'wmtsInfo.url' },
                    write: { target: 'wmtsInfo.url' },
                  },
                },
              },
            }),
          ],
          de.prototype,
          'url',
          null,
        ),
        (0, i._)([(0, h.Cb)()], de.prototype, 'version', void 0),
        (de = (0, i._)([(0, y.j)('esri.layers.WMTSLayer')], de));
      const pe = de;
    },
    52162: (e, t, r) => {
      r.d(t, { A: () => s });
      const i = [
        [3819, 3819],
        [3821, 3824],
        [3889, 3889],
        [3906, 3906],
        [4001, 4025],
        [4027, 4036],
        [4039, 4047],
        [4052, 4055],
        [4074, 4075],
        [4080, 4081],
        [4120, 4176],
        [4178, 4185],
        [4188, 4216],
        [4218, 4289],
        [4291, 4304],
        [4306, 4319],
        [4322, 4326],
        [4463, 4463],
        [4470, 4470],
        [4475, 4475],
        [4483, 4483],
        [4490, 4490],
        [4555, 4558],
        [4600, 4646],
        [4657, 4765],
        [4801, 4811],
        [4813, 4821],
        [4823, 4824],
        [4901, 4904],
        [5013, 5013],
        [5132, 5132],
        [5228, 5229],
        [5233, 5233],
        [5246, 5246],
        [5252, 5252],
        [5264, 5264],
        [5324, 5340],
        [5354, 5354],
        [5360, 5360],
        [5365, 5365],
        [5370, 5373],
        [5381, 5381],
        [5393, 5393],
        [5451, 5451],
        [5464, 5464],
        [5467, 5467],
        [5489, 5489],
        [5524, 5524],
        [5527, 5527],
        [5546, 5546],
        [2044, 2045],
        [2081, 2083],
        [2085, 2086],
        [2093, 2093],
        [2096, 2098],
        [2105, 2132],
        [2169, 2170],
        [2176, 2180],
        [2193, 2193],
        [2200, 2200],
        [2206, 2212],
        [2319, 2319],
        [2320, 2462],
        [2523, 2549],
        [2551, 2735],
        [2738, 2758],
        [2935, 2941],
        [2953, 2953],
        [3006, 3030],
        [3034, 3035],
        [3038, 3051],
        [3058, 3059],
        [3068, 3068],
        [3114, 3118],
        [3126, 3138],
        [3150, 3151],
        [3300, 3301],
        [3328, 3335],
        [3346, 3346],
        [3350, 3352],
        [3366, 3366],
        [3389, 3390],
        [3416, 3417],
        [3833, 3841],
        [3844, 3850],
        [3854, 3854],
        [3873, 3885],
        [3907, 3910],
        [4026, 4026],
        [4037, 4038],
        [4417, 4417],
        [4434, 4434],
        [4491, 4554],
        [4839, 4839],
        [5048, 5048],
        [5105, 5130],
        [5253, 5259],
        [5269, 5275],
        [5343, 5349],
        [5479, 5482],
        [5518, 5519],
        [5520, 5520],
        [20004, 20032],
        [20064, 20092],
        [21413, 21423],
        [21473, 21483],
        [21896, 21899],
        [22171, 22177],
        [22181, 22187],
        [22191, 22197],
        [25884, 25884],
        [27205, 27232],
        [27391, 27398],
        [27492, 27492],
        [28402, 28432],
        [28462, 28492],
        [30161, 30179],
        [30800, 30800],
        [31251, 31259],
        [31275, 31279],
        [31281, 31290],
        [31466, 31700],
      ];
      function s(e) {
        return i.some(([t, r]) => e >= t && e <= r);
      }
    },
    88724: (e, t, r) => {
      function i(e, t) {
        for (const r of e.children)
          if (r.localName in t) {
            const e = t[r.localName];
            if ('function' == typeof e) {
              const t = e(r);
              t && i(r, t);
            } else i(r, e);
          }
      }
      function* s(e, t) {
        for (const r of e.children)
          if (r.localName in t) {
            const e = t[r.localName];
            'function' == typeof e ? yield e(r) : yield* s(r, e);
          }
      }
      r.d(t, { H: () => s, h: () => i });
    },
  },
]);
