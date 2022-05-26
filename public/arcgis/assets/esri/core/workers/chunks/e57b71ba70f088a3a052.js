'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [6903],
  {
    84475: (e, t, s) => {
      s.r(t), s.d(t, { DictionaryLoader: () => p });
      var i = s(22303),
        o = s(3172),
        r = s(20102),
        n = s(92604),
        a = s(13867),
        l = s(70586),
        c = s(95330),
        y = s(19153),
        h = s(59266),
        m = s(17386);
      const u = n.Z.getLogger('esri.renderers.support.DictionaryLoader'),
        f = {
          type: 'CIMSimpleLineCallout',
          lineSymbol: {
            type: 'CIMLineSymbol',
            symbolLayers: [
              { type: 'CIMSolidStroke', width: 0.5, color: [0, 0, 0, 255] },
            ],
          },
        };
      class p {
        constructor(e, t, s) {
          (this.config = null),
            (this.fieldMap = null),
            (this.url = null),
            (this._ongoingRequests = new Map()),
            (this._symbolCache = new a.Z(100)),
            (this.url = e),
            (this.config = t),
            (this.fieldMap = s);
        }
        getSymbolFields() {
          return this._symbolFields;
        }
        async getSymbolAsync(e, t) {
          let s;
          this._dictionaryPromise ||
            (this._dictionaryPromise = this.fetchResources(t));
          try {
            s = await this._dictionaryPromise;
          } catch (e) {
            if ((0, c.D_)(e)) return (this._dictionaryPromise = null), null;
          }
          const o = {};
          if (this.fieldMap)
            for (const t of this._symbolFields) {
              const s = this.fieldMap[t];
              if (s && null != e.attributes[s]) {
                const i = '' + e.attributes[s];
                o[t] = i;
              } else o[t] = '';
            }
          const r = s(o, t);
          if (!r || 'string' != typeof r) return null;
          const n = (0, y.hP)(r).toString(),
            a = this._symbolCache.get(n);
          if (a)
            return (
              a.catch(() => {
                this._symbolCache.pop(n);
              }),
              a
            );
          const h = r.split(';'),
            m = [],
            u = [];
          for (const e of h)
            if (e)
              if (e.includes('po:')) {
                const t = e.substr(3).split('|');
                if (3 === t.length) {
                  const e = t[0],
                    s = t[1];
                  let o = t[2];
                  if ('DashTemplate' === s)
                    o = o.split(' ').map((e) => Number(e));
                  else if ('Color' === s) {
                    const e = new i.Z(o).toRgba();
                    o = [e[0], e[1], e[2], 255 * e[3]];
                  } else o = Number(o);
                  u.push({ primitiveName: e, propertyName: s, value: o });
                }
              } else if (e.includes('|')) {
                for (const t of e.split('|'))
                  if (this._itemNames.has(t)) {
                    m.push(t);
                    break;
                  }
              } else this._itemNames.has(e) && m.push(e);
          const f =
              !(0, l.pC)(e.geometry) ||
              (!e.geometry.hasZ && 'point' === e.geometry.type),
            p = this._cimPartsToCIMSymbol(m, u, f, t);
          return this._symbolCache.put(n, p, 1), p;
        }
        async fetchResources(e) {
          if (this._dictionaryPromise) return this._dictionaryPromise;
          if (!this.url) return void u.error('no valid URL!');
          const t = (0, l.pC)(e) ? e.abortOptions : null,
            s = (0, o.default)(
              this.url + '/resources/styles/dictionary-info.json',
              { responseType: 'json', query: { f: 'json' }, ...t },
            ),
            [{ data: i }] = await Promise.all([s, (0, h.LC)()]);
          if (!i)
            throw (
              ((this._dictionaryPromise = null),
              new r.Z(
                'esri.renderers.DictionaryRenderer',
                'Bad dictionary data!',
              ))
            );
          const n = i.expression,
            a = i.authoringInfo;
          (this._refSymbolUrlTemplate = this.url + '/' + i.cimRefTemplateUrl),
            (this._itemNames = new Set(i.itemsNames)),
            (this._symbolFields = a.symbol);
          const c = {};
          if (this.config) {
            const e = this.config;
            for (const t in e) c[t] = e[t];
          }
          if (a.configuration)
            for (const e of a.configuration)
              c.hasOwnProperty(e.name) || (c[e.name] = e.value);
          const y = [];
          if ((0, l.pC)(e) && e.fields && this.fieldMap)
            for (const t of this._symbolFields) {
              const s = this.fieldMap[t],
                i = e.fields.filter((e) => e.name === s);
              i.length > 0 && y.push({ ...i[0], name: t });
            }
          return (
            (this._dictionaryPromise = (0, h.pp)(
              n,
              (0, l.pC)(e) ? e.spatialReference : null,
              y,
              c,
            )
              .then((e) => {
                const t = { scale: 0 };
                return (s, i) => {
                  const o = e.repurposeFeature({
                    geometry: null,
                    attributes: s,
                  });
                  return (
                    (t.scale = (0, l.pC)(i) ? i.scale : void 0),
                    e.evaluate({ $feature: o, $view: t })
                  );
                };
              })
              .catch(
                (e) => (
                  u.error('Creating dictinoary expression failed:', e), null
                ),
              )),
            this._dictionaryPromise
          );
        }
        async _cimPartsToCIMSymbol(e, t, s, i) {
          const o = new Array(e.length);
          for (let t = 0; t < e.length; t++)
            o[t] = this._getSymbolPart(e[t], i);
          const r = await Promise.all(o),
            n = this.fieldMap;
          for (const e of r) d(e, n);
          return new m.Z({ data: this._combineSymbolParts(r, t, s) });
        }
        async _getSymbolPart(e, t) {
          if (this._ongoingRequests.has(e))
            return this._ongoingRequests.get(e).then((e) => e.data);
          const s = this._refSymbolUrlTemplate.replace(/\{itemName\}/gi, e),
            i = (0, o.default)(s, {
              responseType: 'json',
              query: { f: 'json' },
              ...t,
            });
          this._ongoingRequests.set(e, i);
          try {
            return (await i).data;
          } catch (t) {
            return this._ongoingRequests.delete(e), Promise.reject(t);
          }
        }
        _combineSymbolParts(e, t, s) {
          if (!e || 0 === e.length) return null;
          const i = { ...e[0] };
          if (e.length > 1) {
            i.symbolLayers = [];
            for (const t of e) {
              const e = t;
              i.symbolLayers.unshift(...e.symbolLayers);
            }
          }
          return (
            s && (i.callout = f),
            { type: 'CIMSymbolReference', symbol: i, primitiveOverrides: t }
          );
        }
      }
      function d(e, t) {
        if (!e) return;
        const s = e.symbolLayers;
        if (!s) return;
        let i = s.length;
        for (; i--; ) {
          const e = s[i];
          e && !1 !== e.enable && 'CIMVectorMarker' === e.type && b(e, t);
        }
      }
      function b(e, t) {
        const s = e.markerGraphics;
        if (s)
          for (const e of s) {
            if (!e) continue;
            const s = e.symbol;
            if (s)
              switch (s.type) {
                case 'CIMPointSymbol':
                case 'CIMLineSymbol':
                case 'CIMPolygonSymbol':
                  d(s, t);
                  break;
                case 'CIMTextSymbol':
                  s.fieldMap = t;
              }
          }
      }
    },
    17386: (e, t, s) => {
      s.d(t, { Z: () => p });
      var i,
        o = s(43697),
        r = s(22974),
        n = s(19153),
        a = s(5600),
        l = (s(75215), s(36030)),
        c = s(71715),
        y = s(52011),
        h = s(30556),
        m = s(35671),
        u = s(89164);
      let f = (i = class extends u.Z {
        constructor(e) {
          super(e), (this.data = null), (this.type = 'cim');
        }
        readData(e, t) {
          return t;
        }
        writeData(e, t) {
          if (e) for (const s in e) t[s] = e[s];
        }
        async collectRequiredFields(e, t) {
          if ('CIMSymbolReference' === this.data.type) {
            const s = this.data.primitiveOverrides;
            if (s) {
              const i = s.map((s) => {
                const i = s.valueExpressionInfo;
                return (0, m.io)(e, t, i.expression);
              });
              await Promise.all(i);
            }
          }
        }
        clone() {
          return new i({ data: (0, r.d9)(this.data) });
        }
        hash() {
          return (0, n.hP)(JSON.stringify(this.data)).toString();
        }
      });
      (0, o._)(
        [(0, a.Cb)({ json: { write: !1 } })],
        f.prototype,
        'color',
        void 0,
      ),
        (0, o._)(
          [(0, a.Cb)({ json: { write: !0 } })],
          f.prototype,
          'data',
          void 0,
        ),
        (0, o._)([(0, c.r)('data', ['symbol'])], f.prototype, 'readData', null),
        (0, o._)([(0, h.c)('data', {})], f.prototype, 'writeData', null),
        (0, o._)(
          [(0, l.J)({ CIMSymbolReference: 'cim' }, { readOnly: !0 })],
          f.prototype,
          'type',
          void 0,
        ),
        (f = i = (0, o._)([(0, y.j)('esri.symbols.CIMSymbol')], f));
      const p = f;
    },
  },
]);
