'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [8734, 5235, 2515, 999],
  {
    38171: (e, t, r) => {
      r.d(t, { Z: () => g });
      var i = r(43697),
        s = r(66577),
        n = r(51773),
        a = r(78223),
        l = r(2368),
        o = r(96674),
        u = r(70586),
        d = r(99001),
        c = r(5600),
        h = (r(67676), r(80442), r(75215), r(52011)),
        p = r(33955);
      function f(e) {
        if (!(0, u.pC)(e)) return null;
        const t = {};
        for (const r in e) {
          const i = e[r];
          i && (t[r] = i.toJSON());
        }
        return 0 !== Object.keys(t).length ? t : null;
      }
      let y = class extends (0, l.J)(o.wq) {
        constructor(...e) {
          super(...e),
            (this.isAggregate = !1),
            (this.layer = null),
            (this.popupTemplate = null),
            (this.sourceLayer = null),
            Object.defineProperty(this, 'uid', {
              value: (0, d.D)(),
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
            aggregateGeometries: f(this.aggregateGeometries),
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
                  const i = (0, p.im)(e[r]);
                  i && (t[r] = i);
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
        (0, i._)([(0, c.Cb)({ value: null })], y.prototype, 'attributes', null),
        (0, i._)(
          [(0, c.Cb)({ value: null, types: s.qM, json: { read: p.im } })],
          y.prototype,
          'geometry',
          null,
        ),
        (0, i._)(
          [(0, c.Cb)({ type: Boolean })],
          y.prototype,
          'isAggregate',
          void 0,
        ),
        (0, i._)(
          [(0, c.Cb)({ clonable: 'reference' })],
          y.prototype,
          'layer',
          void 0,
        ),
        (0, i._)(
          [(0, c.Cb)({ type: n.Z })],
          y.prototype,
          'popupTemplate',
          void 0,
        ),
        (0, i._)(
          [(0, c.Cb)({ clonable: 'reference' })],
          y.prototype,
          'sourceLayer',
          void 0,
        ),
        (0, i._)(
          [(0, c.Cb)({ value: null, types: a.LB })],
          y.prototype,
          'symbol',
          null,
        ),
        (0, i._)(
          [(0, c.Cb)({ type: Boolean, value: !0 })],
          y.prototype,
          'visible',
          null,
        ),
        (y = (0, i._)([(0, h.j)('esri.Graphic')], y)),
        ((y || (y = {})).generateUID = d.D);
      const g = y;
    },
    28924: (e, t, r) => {
      r.d(t, { Z: () => s });
      var i = r(95330);
      class s {
        constructor() {
          (this.declaredRootClass = 'esri.arcade.featureSetCollection'),
            (this._layerById = {}),
            (this._layerByName = {});
        }
        add(e, t, r) {
          (this._layerById[t] = r), (this._layerByName[e] = r);
        }
        featureSetByName(e, t = !0, r = ['*']) {
          return void 0 === this._layerByName[e]
            ? this.resolvePromise(null)
            : this.resolvePromise(this._layerByName[e]);
        }
        featureSetById(e, t = !0, r = ['*']) {
          return void 0 === this._layerById[e]
            ? this.resolvePromise(null)
            : this.resolvePromise(this._layerById[e]);
        }
        castToText() {
          return 'object, FeatureSetCollection';
        }
        resolvePromise(e) {
          return (0, i.DB)(e);
        }
      }
    },
    42666: (e, t, r) => {
      r.r(t),
        r.d(t, {
          constructAssociationMetaDataFeatureSetFromUrl: () => ae,
          constructFeatureSet: () => se,
          constructFeatureSetFromPortalItem: () => ye,
          constructFeatureSetFromRelationship: () => le,
          constructFeatureSetFromUrl: () => ie,
          convertToFeatureSet: () => fe,
          createFeatureSetCollectionFromMap: () => de,
          createFeatureSetCollectionFromService: () => ce,
          getPortal: () => he,
          initialiseMetaDataCache: () => te,
          lookupUser: () => pe,
        });
      var i = r(40330),
        s = r(3172),
        n = r(28924),
        a = r(84328),
        l = r(38171),
        o = r(61363),
        u = r(70409),
        d = r(85065),
        c = r(91136),
        h = r(90961),
        p = r(3823),
        f = r(90658),
        y = r(36515),
        g = r(95002),
        _ = r(41534);
      class m {
        clone() {
          const e = new m();
          return (
            (e.field = this.field),
            (e.tofieldname = this.tofieldname),
            (e.typeofstat = this.typeofstat),
            (e.workingexpr = this.workingexpr),
            e
          );
        }
        static parseStatField(e, t, r) {
          const i = new m();
          i.field = e;
          const s = _.WhereClause.create(t, r),
            n = (function (e) {
              if ('function' === e.parseTree.type) {
                if (0 === e.parseTree.args.value.length)
                  return { name: e.parseTree.name, expr: null };
                if (e.parseTree.args.value.length > 1)
                  throw new Error('Statistic does not have 1 or 0 Parameters');
                const t = _.WhereClause.create(
                  (0, y.XF)(
                    e.parseTree.args.value[0],
                    f.Bj.Standardised,
                    e.parameters,
                  ),
                  e.fieldsIndex,
                );
                return { name: e.parseTree.name, expr: t };
              }
              return null;
            })(s);
          if (null === n) throw new Error('Invalid Statistic Function');
          const a = n.name.toUpperCase().trim();
          if ('MIN' === a) {
            if (((i.typeofstat = 'MIN'), (i.workingexpr = n.expr), null === s))
              throw new Error('Invalid Statistic Function Parameters');
          } else if ('MAX' === a) {
            if (((i.typeofstat = 'MAX'), (i.workingexpr = n.expr), null === s))
              throw new Error('Invalid Statistic Function Parameters');
          } else if ('COUNT' === a)
            (i.typeofstat = 'COUNT'), (i.workingexpr = n.expr);
          else if ('STDEV' === a) {
            if (
              ((i.typeofstat = 'STDDEV'), (i.workingexpr = n.expr), null === s)
            )
              throw new Error('Invalid Statistic Function Parameters');
          } else if ('SUM' === a) {
            if (((i.typeofstat = 'SUM'), (i.workingexpr = n.expr), null === s))
              throw new Error('Invalid Statistic Function Parameters');
          } else if ('MEAN' === a) {
            if (((i.typeofstat = 'AVG'), (i.workingexpr = n.expr), null === s))
              throw new Error('Invalid Statistic Function Parameters');
          } else if ('AVG' === a) {
            if (((i.typeofstat = 'AVG'), (i.workingexpr = n.expr), null === s))
              throw new Error('Invalid Statistic Function Parameters');
          } else {
            if ('VAR' !== a) throw new Error('Invalid Statistic Function');
            if (((i.typeofstat = 'VAR'), (i.workingexpr = n.expr), null === s))
              throw new Error('Invalid Statistic Function Parameters');
          }
          return i;
        }
        toStatisticsName() {
          switch (this.typeofstat.toUpperCase()) {
            case 'MIN':
              return 'min';
            case 'MAX':
              return 'max';
            case 'SUM':
              return 'sum';
            case 'COUNT':
            default:
              return 'count';
            case 'VAR':
              return 'var';
            case 'STDDEV':
              return 'stddev';
            case 'AVG':
              return 'avg';
          }
        }
      }
      function b(e, t) {
        const r = (65535 & e) + (65535 & t);
        return (((e >> 16) + (t >> 16) + (r >> 16)) << 16) | (65535 & r);
      }
      function w(e, t, r, i, s, n) {
        return b(
          (function (e, t) {
            return (e << t) | (e >>> (32 - t));
          })(b(b(t, e), b(i, n)), s),
          r,
        );
      }
      function S(e, t, r, i, s, n, a) {
        return w((t & r) | (~t & i), e, t, s, n, a);
      }
      function v(e, t, r, i, s, n, a) {
        return w((t & i) | (r & ~i), e, t, s, n, a);
      }
      function F(e, t, r, i, s, n, a) {
        return w(t ^ r ^ i, e, t, s, n, a);
      }
      function I(e, t, r, i, s, n, a) {
        return w(r ^ (t | ~i), e, t, s, n, a);
      }
      function C(e, t) {
        (e[t >> 5] |= 128 << t % 32), (e[14 + (((t + 64) >>> 9) << 4)] = t);
        let r = 1732584193,
          i = -271733879,
          s = -1732584194,
          n = 271733878;
        for (let t = 0; t < e.length; t += 16) {
          const a = r,
            l = i,
            o = s,
            u = n;
          (r = S(r, i, s, n, e[t + 0], 7, -680876936)),
            (n = S(n, r, i, s, e[t + 1], 12, -389564586)),
            (s = S(s, n, r, i, e[t + 2], 17, 606105819)),
            (i = S(i, s, n, r, e[t + 3], 22, -1044525330)),
            (r = S(r, i, s, n, e[t + 4], 7, -176418897)),
            (n = S(n, r, i, s, e[t + 5], 12, 1200080426)),
            (s = S(s, n, r, i, e[t + 6], 17, -1473231341)),
            (i = S(i, s, n, r, e[t + 7], 22, -45705983)),
            (r = S(r, i, s, n, e[t + 8], 7, 1770035416)),
            (n = S(n, r, i, s, e[t + 9], 12, -1958414417)),
            (s = S(s, n, r, i, e[t + 10], 17, -42063)),
            (i = S(i, s, n, r, e[t + 11], 22, -1990404162)),
            (r = S(r, i, s, n, e[t + 12], 7, 1804603682)),
            (n = S(n, r, i, s, e[t + 13], 12, -40341101)),
            (s = S(s, n, r, i, e[t + 14], 17, -1502002290)),
            (i = S(i, s, n, r, e[t + 15], 22, 1236535329)),
            (r = v(r, i, s, n, e[t + 1], 5, -165796510)),
            (n = v(n, r, i, s, e[t + 6], 9, -1069501632)),
            (s = v(s, n, r, i, e[t + 11], 14, 643717713)),
            (i = v(i, s, n, r, e[t + 0], 20, -373897302)),
            (r = v(r, i, s, n, e[t + 5], 5, -701558691)),
            (n = v(n, r, i, s, e[t + 10], 9, 38016083)),
            (s = v(s, n, r, i, e[t + 15], 14, -660478335)),
            (i = v(i, s, n, r, e[t + 4], 20, -405537848)),
            (r = v(r, i, s, n, e[t + 9], 5, 568446438)),
            (n = v(n, r, i, s, e[t + 14], 9, -1019803690)),
            (s = v(s, n, r, i, e[t + 3], 14, -187363961)),
            (i = v(i, s, n, r, e[t + 8], 20, 1163531501)),
            (r = v(r, i, s, n, e[t + 13], 5, -1444681467)),
            (n = v(n, r, i, s, e[t + 2], 9, -51403784)),
            (s = v(s, n, r, i, e[t + 7], 14, 1735328473)),
            (i = v(i, s, n, r, e[t + 12], 20, -1926607734)),
            (r = F(r, i, s, n, e[t + 5], 4, -378558)),
            (n = F(n, r, i, s, e[t + 8], 11, -2022574463)),
            (s = F(s, n, r, i, e[t + 11], 16, 1839030562)),
            (i = F(i, s, n, r, e[t + 14], 23, -35309556)),
            (r = F(r, i, s, n, e[t + 1], 4, -1530992060)),
            (n = F(n, r, i, s, e[t + 4], 11, 1272893353)),
            (s = F(s, n, r, i, e[t + 7], 16, -155497632)),
            (i = F(i, s, n, r, e[t + 10], 23, -1094730640)),
            (r = F(r, i, s, n, e[t + 13], 4, 681279174)),
            (n = F(n, r, i, s, e[t + 0], 11, -358537222)),
            (s = F(s, n, r, i, e[t + 3], 16, -722521979)),
            (i = F(i, s, n, r, e[t + 6], 23, 76029189)),
            (r = F(r, i, s, n, e[t + 9], 4, -640364487)),
            (n = F(n, r, i, s, e[t + 12], 11, -421815835)),
            (s = F(s, n, r, i, e[t + 15], 16, 530742520)),
            (i = F(i, s, n, r, e[t + 2], 23, -995338651)),
            (r = I(r, i, s, n, e[t + 0], 6, -198630844)),
            (n = I(n, r, i, s, e[t + 7], 10, 1126891415)),
            (s = I(s, n, r, i, e[t + 14], 15, -1416354905)),
            (i = I(i, s, n, r, e[t + 5], 21, -57434055)),
            (r = I(r, i, s, n, e[t + 12], 6, 1700485571)),
            (n = I(n, r, i, s, e[t + 3], 10, -1894986606)),
            (s = I(s, n, r, i, e[t + 10], 15, -1051523)),
            (i = I(i, s, n, r, e[t + 1], 21, -2054922799)),
            (r = I(r, i, s, n, e[t + 8], 6, 1873313359)),
            (n = I(n, r, i, s, e[t + 15], 10, -30611744)),
            (s = I(s, n, r, i, e[t + 6], 15, -1560198380)),
            (i = I(i, s, n, r, e[t + 13], 21, 1309151649)),
            (r = I(r, i, s, n, e[t + 4], 6, -145523070)),
            (n = I(n, r, i, s, e[t + 11], 10, -1120210379)),
            (s = I(s, n, r, i, e[t + 2], 15, 718787259)),
            (i = I(i, s, n, r, e[t + 9], 21, -343485551)),
            (r = b(r, a)),
            (i = b(i, l)),
            (s = b(s, o)),
            (n = b(n, u));
        }
        return [r, i, s, n];
      }
      function x(e, t = 1) {
        const r = t || 0,
          i = C(
            (function (e) {
              const t = [];
              for (let r = 0, i = 8 * e.length; r < i; r += 8)
                t[r >> 5] |= (255 & e.charCodeAt(r / 8)) << r % 32;
              return t;
            })(e),
            8 * e.length,
          );
        switch (r) {
          case 3:
            return i;
          case 1:
            return (function (e) {
              const t = '0123456789abcdef',
                r = [];
              for (let i = 0, s = 4 * e.length; i < s; i++)
                r.push(
                  t.charAt((e[i >> 2] >> ((i % 4) * 8 + 4)) & 15) +
                    t.charAt((e[i >> 2] >> ((i % 4) * 8)) & 15),
                );
              return r.join('');
            })(i);
          case 2:
            return (function (e) {
              const t = [];
              for (let r = 0, i = 32 * e.length; r < i; r += 8)
                t.push(String.fromCharCode((e[r >> 5] >>> r % 32) & 255));
              return t.join('');
            })(i);
          case 0:
            return (function (e) {
              const t = [];
              for (let r = 0, i = 4 * e.length; r < i; r += 3) {
                const i =
                  (((e[r >> 2] >> ((r % 4) * 8)) & 255) << 16) |
                  (((e[(r + 1) >> 2] >> (((r + 1) % 4) * 8)) & 255) << 8) |
                  ((e[(r + 2) >> 2] >> (((r + 2) % 4) * 8)) & 255);
                for (let s = 0; s < 4; s++)
                  8 * r + 6 * s > 32 * e.length
                    ? t.push('=')
                    : t.push(
                        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.charAt(
                          (i >> (6 * (3 - s))) & 63,
                        ),
                      );
              }
              return t.join('');
            })(i);
        }
      }
      var D = r(95330),
        k = r(82971),
        R = r(1231),
        T = r(99514);
      function O(e) {
        if (!e) return 'COUNT';
        switch (e.toLowerCase()) {
          case 'max':
            return 'MAX';
          case 'var':
          case 'variance':
            return 'VAR';
          case 'avg':
          case 'average':
          case 'mean':
            return 'AVG';
          case 'min':
            return 'MIN';
          case 'sum':
            return 'SUM';
          case 'stdev':
          case 'stddev':
            return 'STDDEV';
          case 'count':
            return 'COUNT';
        }
        return 'COUNT';
      }
      class N extends c.Z {
        constructor(e) {
          super(e),
            (this._decodedStatsfield = []),
            (this._decodedGroupbyfield = []),
            (this._candosimplegroupby = !0),
            (this.phsyicalgroupbyfields = []),
            (this.objectIdField = 'ROW__ID'),
            (this._internalObjectIdField = 'ROW__ID'),
            (this._adaptedFields = []),
            (this.declaredClass = 'esri.arcade.featureset.actions.Aggregate'),
            (this._uniqueIds = 1),
            (this._maxQuery = 10),
            (this._maxProcessing = 10),
            (this._parent = e.parentfeatureset),
            (this._config = e);
        }
        isTable() {
          return !0;
        }
        _getSet(e) {
          return null === this._wset
            ? this._getFilteredSet('', null, null, null, e).then(
                (e) => ((this._wset = e), this._wset),
              )
            : (0, D.DB)(this._wset);
        }
        _isInFeatureSet() {
          return f.dj.InFeatureSet;
        }
        _nextUniqueName(e) {
          for (; 1 === e['T' + this._uniqueIds.toString()]; ) this._uniqueIds++;
          const t = 'T' + this._uniqueIds.toString();
          return (e[t] = 1), t;
        }
        _convertToEsriFieldType(e) {
          return e;
        }
        _initialiseFeatureSet() {
          const e = {};
          let t = !1,
            r = 1;
          const i = this._parent ? this._parent.getFieldsIndex() : new T.Z([]);
          for (
            this.objectIdField = 'ROW__ID', this.globalIdField = '';
            !1 === t;

          ) {
            let e = !1;
            for (let t = 0; t < this._config.groupbyfields.length; t++)
              if (
                this._config.groupbyfields[t].name.toLowerCase() ===
                this.objectIdField.toLowerCase()
              ) {
                e = !0;
                break;
              }
            if (!1 === e)
              for (let t = 0; t < this._config.statsfields.length; t++)
                if (
                  this._config.statsfields[t].name.toLowerCase() ===
                  this.objectIdField.toLowerCase()
                ) {
                  e = !0;
                  break;
                }
            !1 === e
              ? (t = !0)
              : ((this.objectIdField = 'ROW__ID' + r.toString()), r++);
          }
          for (const e of this._config.statsfields) {
            const t = new m();
            (t.field = e.name),
              (t.tofieldname = e.name),
              (t.workingexpr =
                e.expression instanceof _.WhereClause
                  ? e.expression
                  : _.WhereClause.create(e.expression, i)),
              (t.typeofstat = O(e.statistic)),
              this._decodedStatsfield.push(t);
          }
          this._decodedGroupbyfield = [];
          for (const e of this._config.groupbyfields) {
            const t = {
              name: e.name,
              singlefield: null,
              tofieldname: e.name,
              expression:
                e.expression instanceof _.WhereClause
                  ? e.expression
                  : _.WhereClause.create(e.expression, i),
            };
            this._decodedGroupbyfield.push(t);
          }
          if (null !== this._parent) {
            (this.geometryType = this._parent.geometryType),
              (this.spatialReference = this._parent.spatialReference),
              (this.hasM = this._parent.hasM),
              (this.hasZ = this._parent.hasZ),
              (this.typeIdField = '');
            for (const t of this._parent.fields) e[t.name.toUpperCase()] = 1;
            this.types = null;
          } else
            (this.geometryType = f.Qk.point),
              (this.typeIdField = ''),
              (this.types = null),
              (this.spatialReference = new k.Z({ wkid: 4326 }));
          this.fields = [];
          const s = new m();
          (s.field = this._nextUniqueName(e)),
            (s.tofieldname = this.objectIdField),
            (s.workingexpr = _.WhereClause.create(
              this._parent.objectIdField,
              this._parent.getFieldsIndex(),
            )),
            (s.typeofstat = 'MIN'),
            this._decodedStatsfield.push(s);
          for (const t of this._decodedGroupbyfield) {
            const r = new R.Z();
            if (
              ((t.name = this._nextUniqueName(e)),
              (r.name = t.tofieldname),
              (r.alias = r.name),
              (0, y.y5)(t.expression))
            ) {
              const e = this._parent.getField(
                (0, y.zR)(t.expression, f.Bj.Standardised),
              );
              if (!e) throw new Error('Field is not present for Aggregation');
              (t.name = e.name),
                (t.singlefield = e.name),
                this.phsyicalgroupbyfields.push(e.name),
                (r.type = e.type);
            } else {
              r.type = this._convertToEsriFieldType(
                (0, y.DT)(t.expression, this._parent.fields),
              );
              const e = new R.Z();
              (e.name = t.name),
                (e.alias = e.name),
                this.phsyicalgroupbyfields.push(t.name),
                this._adaptedFields.push(new u.yN(e, t.expression)),
                (this._candosimplegroupby = !1);
            }
            this.fields.push(r);
          }
          if (this._adaptedFields.length > 0)
            for (const e of this._parent.fields)
              this._adaptedFields.push(new u.$X(e));
          for (let t = 0; t < this._decodedStatsfield.length; t++) {
            const r = new R.Z();
            let i = null;
            const s = this._decodedStatsfield[t];
            (s.field = this._nextUniqueName(e)),
              s.tofieldname === this.objectIdField &&
                (this._internalObjectIdField = s.field),
              (r.name = s.tofieldname),
              (r.alias = r.name);
            const n =
              null !== s.workingexpr && (0, y.y5)(s.workingexpr)
                ? (0, y.zR)(s.workingexpr, f.Bj.Standardised)
                : '';
            switch (this._decodedStatsfield[t].typeofstat) {
              case 'SUM':
                if ('' !== n) {
                  if (((i = this._parent.getField(n)), !i))
                    throw new Error('Field is not present for Aggregation');
                  r.type = i.type;
                } else r.type = 'double';
                break;
              case 'MIN':
              case 'MAX':
                if ('' !== n) {
                  if (((i = this._parent.getField(n)), !i))
                    throw new Error('Field is not present for Aggregation');
                  r.type = i.type;
                } else r.type = 'double';
                break;
              case 'COUNT':
                r.type = 'integer';
                break;
              case 'STDDEV':
              case 'VAR':
              case 'AVG':
                if ('' !== n && ((i = this._parent.getField(n)), !i))
                  throw new Error('Field is not present for Aggregation');
                r.type = 'double';
            }
            this.fields.push(r);
          }
        }
        _canDoAggregates() {
          return (0, D.DB)(!1);
        }
        _getFeatures(e, t, r, i) {
          -1 !== t && this._featureCache[t];
          const s = this._maxQuery;
          return !0 === this._checkIfNeedToExpandKnownPage(e, s)
            ? this._expandPagedSet(e, s, 0, 0, i).then(() =>
                this._getFeatures(e, t, r, i),
              )
            : (0, D.DB)('success');
        }
        _getFilteredSet(e, t, r, i, s) {
          if ('' !== e) return (0, D.DB)(new h.Z([], [], !0, null));
          let n = null;
          const l = { ordered: !1, nowhereclause: !1 };
          return this._ensureLoaded()
            .then(() => {
              if (null !== r)
                for (let e = 0; e < this._decodedStatsfield.length; e++)
                  if (
                    !0 === (0, y.hq)(r, this._decodedStatsfield[e].tofieldname)
                  ) {
                    (l.nowhereclause = !0), (r = null);
                    break;
                  }
              if (null !== i) {
                l.ordered = !0;
                for (let e = 0; e < this._decodedStatsfield.length; e++)
                  if (
                    !0 ===
                    i.scanForField(this._decodedStatsfield[e].tofieldname)
                  ) {
                    (i = null), (l.ordered = !1);
                    break;
                  }
                if (null !== i)
                  for (const e of this._decodedGroupbyfield)
                    if (
                      null === e.singlefield &&
                      !0 === i.scanForField(e.tofieldname)
                    ) {
                      (i = null), (l.ordered = !1);
                      break;
                    }
              }
              return !1 === this._candosimplegroupby
                ? (0, D.DB)(!1)
                : this._parent._canDoAggregates(
                    this.phsyicalgroupbyfields,
                    this._decodedStatsfield,
                    '',
                    null,
                    null,
                  );
            })
            .then((e) => {
              if (e) {
                let e = null;
                r && (e = this._reformulateWhereClauseWithoutGroupByFields(r));
                let t = null;
                return (
                  i &&
                    (t = this._reformulateOrderClauseWithoutGroupByFields(i)),
                  this._parent
                    ._getAggregatePagesDataSourceDefinition(
                      this.phsyicalgroupbyfields,
                      this._decodedStatsfield,
                      '',
                      null,
                      e,
                      t,
                      this._internalObjectIdField,
                    )
                    .then(
                      (e) => (
                        this._checkCancelled(s),
                        (n =
                          !0 === l.nowhereclause
                            ? new h.Z(
                                e._candidates
                                  .slice(0)
                                  .concat(e._known.slice(0)),
                                [],
                                !0 === l.ordered && e._ordered,
                                this._clonePageDefinition(e.pagesDefinition),
                              )
                            : new h.Z(
                                e._candidates.slice(0),
                                e._known.slice(0),
                                !0 === l.ordered && e._ordered,
                                this._clonePageDefinition(e.pagesDefinition),
                              )),
                        n
                      ),
                    )
                );
              }
              let t = this._parent;
              if (
                (this._adaptedFields.length > 0 &&
                  (t = new u.Xx({
                    parentfeatureset: this._parent,
                    adaptedFields: this._adaptedFields,
                    extraFilter: null,
                  })),
                !0 === l.nowhereclause)
              )
                n = new h.Z(['GETPAGES'], [], !1, {
                  aggregatefeaturesetpagedefinition: !0,
                  resultOffset: 0,
                  resultRecordCount: this._maxQuery,
                  internal: {
                    fullyResolved: !1,
                    workingItem: null,
                    type: 'manual',
                    iterator: null,
                    set: [],
                    subfeatureset: new d.Z({
                      parentfeatureset: t,
                      orderbyclause: new p.Z(
                        this.phsyicalgroupbyfields.join(',') +
                          ',' +
                          this._parent.objectIdField +
                          ' ASC',
                      ),
                    }),
                  },
                });
              else {
                let e = t;
                if (null !== r) {
                  let t = null;
                  r &&
                    (t = this._reformulateWhereClauseWithoutGroupByFields(r)),
                    (e = new a.Z({ parentfeatureset: e, whereclause: t }));
                }
                n = new h.Z(['GETPAGES'], [], !1, {
                  aggregatefeaturesetpagedefinition: !0,
                  resultOffset: 0,
                  resultRecordCount: this._maxQuery,
                  internal: {
                    fullyResolved: !1,
                    workingItem: null,
                    type: 'manual',
                    iterator: null,
                    set: [],
                    subfeatureset: new d.Z({
                      parentfeatureset: e,
                      orderbyclause: new p.Z(
                        this.phsyicalgroupbyfields.join(',') +
                          ',' +
                          this._parent.objectIdField +
                          ' ASC',
                      ),
                    }),
                  },
                });
              }
              return n;
            });
        }
        _reformulateWhereClauseWithoutStatsFields(e) {
          for (const t of this._decodedStatsfield)
            e = (0, y.bB)(
              e,
              t.tofieldname,
              (0, y.zR)(t.workingexpr, f.Bj.Standardised),
              this._parent.getFieldsIndex(),
            );
          return e;
        }
        _reformulateWhereClauseWithoutGroupByFields(e) {
          for (const t of this._decodedGroupbyfield)
            t.tofieldname !== t.name &&
              (e = (0, y.bB)(
                e,
                t.tofieldname,
                (0, y.zR)(t.expression, f.Bj.Standardised),
                this._parent.getFieldsIndex(),
              ));
          return e;
        }
        _reformulateOrderClauseWithoutGroupByFields(e) {
          const t = [];
          for (const e of this._decodedGroupbyfield)
            e.tofieldname !== e.name &&
              t.push({ field: e.tofieldname, newfield: e.name });
          return t.length > 0 ? e.replaceFields(t) : e;
        }
        _clonePageDefinition(e) {
          return null === e
            ? null
            : !0 === e.aggregatefeaturesetpagedefinition
            ? {
                aggregatefeaturesetpagedefinition: !0,
                resultRecordCount: e.resultRecordCount,
                resultOffset: e.resultOffset,
                internal: e.internal,
              }
            : this._parent._clonePageDefinition(e);
        }
        _refineSetBlock(e, t, r) {
          try {
            return !0 ===
              this._checkIfNeedToExpandCandidatePage(e, this._maxQuery)
              ? this._expandPagedSet(e, this._maxQuery, 0, 0, r).then(() =>
                  this._refineSetBlock(e, t, r),
                )
              : (this._checkCancelled(r),
                e._candidates.length,
                this._refineKnowns(e, t),
                e._candidates.length,
                e._candidates.length,
                (0, D.DB)(e));
          } catch (e) {
            return (0, D.d1)(e);
          }
        }
        _expandPagedSet(e, t, r, i, s) {
          return this._expandPagedSetFeatureSet(e, t, r, i, s);
        }
        _getPhysicalPage(e, t, r) {
          return !0 === e.pagesDefinition.aggregatefeaturesetpagedefinition
            ? (0, D.Ue)((t, i) => {
                this._sequentialGetPhysicalItem(
                  e,
                  e.pagesDefinition.resultRecordCount,
                  r,
                  [],
                ).then((e) => {
                  t(e);
                }, i);
              })
            : this._getAgregagtePhysicalPage(e, t, r).then((e) => {
                for (const t of e) {
                  const e = { geometry: t.geometry, attributes: {} };
                  for (const r of this._decodedGroupbyfield)
                    e.attributes[r.tofieldname] = t.attributes[r.name];
                  for (const r of this._decodedStatsfield)
                    e.attributes[r.tofieldname] = t.attributes[r.field];
                  this._featureCache[e.attributes[this.objectIdField]] =
                    new l.Z(e);
                }
                return e.length;
              });
        }
        _sequentialGetPhysicalItem(e, t, r, i) {
          return (0, D.Ue)((s, n) => {
            null === e.pagesDefinition.internal.iterator &&
              (e.pagesDefinition.internal.iterator =
                e.pagesDefinition.internal.subfeatureset.iterator(r)),
              !0 === e.pagesDefinition.internal.fullyResolved || 0 === t
                ? s(i.length)
                : this._nextAggregateItem(
                    e,
                    t,
                    r,
                    i,
                    (n) => {
                      null === n
                        ? s(i.length)
                        : ((t -= 1),
                          s(this._sequentialGetPhysicalItem(e, t, r, i)));
                    },
                    n,
                  );
          });
        }
        _nextAggregateItem(e, t, r, i, s, n) {
          try {
            (0, o.X)(e.pagesDefinition.internal.iterator.next()).then((a) => {
              if (null === a)
                if (null !== e.pagesDefinition.internal.workingItem) {
                  const t = this._calculateAndAppendAggregateItem(
                    e.pagesDefinition.internal.workingItem,
                  );
                  i.push(t),
                    (e.pagesDefinition.internal.workingItem = null),
                    e.pagesDefinition.internal.set.push(
                      t.attributes[this.objectIdField],
                    ),
                    (e.pagesDefinition.internal.fullyResolved = !0),
                    s(null);
                } else (e.pagesDefinition.internal.fullyResolved = !0), s(null);
              else {
                const l = this._generateAggregateHash(a);
                if (null === e.pagesDefinition.internal.workingItem)
                  e.pagesDefinition.internal.workingItem = {
                    features: [a],
                    id: l,
                  };
                else {
                  if (l !== e.pagesDefinition.internal.workingItem.id) {
                    const r = this._calculateAndAppendAggregateItem(
                      e.pagesDefinition.internal.workingItem,
                    );
                    return (
                      i.push(r),
                      (e.pagesDefinition.internal.workingItem = null),
                      e.pagesDefinition.internal.set.push(
                        r.attributes[this.objectIdField],
                      ),
                      (t -= 1),
                      (e.pagesDefinition.internal.workingItem = {
                        features: [a],
                        id: l,
                      }),
                      void s(r)
                    );
                  }
                  e.pagesDefinition.internal.workingItem.features.push(a);
                }
                this._nextAggregateItem(e, t, r, i, s, n);
              }
            }, n);
          } catch (e) {
            n(e);
          }
        }
        _calculateFieldStat(e, t, r) {
          const i = [];
          for (let r = 0; r < e.features.length; r++)
            if (null !== t.workingexpr) {
              const s = t.workingexpr.calculateValue(e.features[r]);
              null !== s && i.push(s);
            } else i.push(null);
          switch (t.typeofstat) {
            case 'MIN':
              r.attributes[t.tofieldname] = (0, g.tj)('min', i, -1);
              break;
            case 'MAX':
              r.attributes[t.tofieldname] = (0, g.tj)('max', i, -1);
              break;
            case 'SUM':
              r.attributes[t.tofieldname] = (0, g.tj)('sum', i, -1);
              break;
            case 'COUNT':
              r.attributes[t.tofieldname] = i.length;
              break;
            case 'VAR':
              r.attributes[t.tofieldname] = (0, g.tj)('var', i, -1);
              break;
            case 'STDDEV':
              r.attributes[t.tofieldname] = (0, g.tj)('stddev', i, -1);
              break;
            case 'AVG':
              r.attributes[t.tofieldname] = (0, g.tj)('avg', i, -1);
          }
          return !0;
        }
        _calculateAndAppendAggregateItem(e) {
          const t = { attributes: {}, geometry: null };
          for (const r of this._decodedGroupbyfield) {
            const i = r.singlefield
              ? e.features[0].attributes[r.singlefield]
              : r.expression.calculateValue(e.features[0]);
            t.attributes[r.tofieldname] = i;
          }
          for (const r of this._decodedStatsfield)
            this._calculateFieldStat(e, r, t);
          const r = [];
          for (let i = 0; i < this._decodedStatsfield.length; i++)
            r.push(this._calculateFieldStat(e, this._decodedStatsfield[i], t));
          return (
            (this._featureCache[t.attributes[this.objectIdField]] = new l.Z({
              attributes: t.attributes,
              geometry: t.geometry,
            })),
            t
          );
        }
        _generateAggregateHash(e) {
          let t = '';
          for (const r of this._decodedGroupbyfield) {
            const i = r.singlefield
              ? e.attributes[r.singlefield]
              : r.expression.calculateValue(e);
            t += null == i ? ':' : ':' + i.toString();
          }
          return x(t, 2);
        }
        _stat() {
          return (0, D.DB)({ calculated: !1 });
        }
        getFeatureByObjectId() {
          return (0, D.DB)(null);
        }
        static registerAction() {
          c.Z._featuresetFunctions.groupby = function (e, t) {
            return new N({
              parentfeatureset: this,
              groupbyfields: e,
              statsfields: t,
            });
          };
        }
      }
      var P = r(53073),
        E = r(63991),
        L = r(80692),
        j = r(33955),
        A = r(67284),
        B = r(98732),
        q = (r(17452), r(67900), r(98326), r(56545), r(41818)),
        U = (r(66577), r(34599)),
        Z = r(57444),
        G = r(5396),
        V = r(4967),
        W = (r(80442), r(8744), r(74889)),
        M = r(75935),
        z = (r(82526), r(28141), r(78760)),
        J = r(58539),
        Q = r(33586);
      class K extends c.Z {
        constructor(e) {
          super(e),
            (this.declaredClass =
              'esri.arcade.featureset.sources.FeatureLayerDynamic'),
            (this._removeGeometry = !1),
            (this._overrideFields = null),
            (this.formulaCredential = null),
            (this._pageJustIds = !1),
            (this._requestStandardised = !1),
            (this._useDefinitionExpression = !0),
            e.spatialReference && (this.spatialReference = e.spatialReference),
            (this._transparent = !0),
            (this._maxProcessing = 1e3),
            (this._layer = e.layer),
            (this._wset = null),
            void 0 !== e.outFields && (this._overrideFields = e.outFields),
            void 0 !== e.includeGeometry &&
              (this._removeGeometry = !1 === e.includeGeometry);
        }
        _maxQueryRate() {
          return f.tI;
        }
        end() {
          return this._layer;
        }
        optimisePagingFeatureQueries(e) {
          this._pageJustIds = e;
        }
        convertQueryToLruCacheKey(e) {
          return x((0, f.hd)(e.toJSON()), 2);
        }
        load() {
          return (
            null === this._loadPromise &&
              (this._loadPromise = (0, D.Ue)((e, t) => {
                try {
                  if (!0 === this._layer.loaded)
                    return this._initialiseFeatureSet(), void e(this);
                  this._layer.when().then(() => {
                    try {
                      this._initialiseFeatureSet(), e(this);
                    } catch (e) {
                      t(e);
                    }
                  }, t),
                    this._layer.load();
                } catch (e) {
                  t(e);
                }
              })),
            this._loadPromise
          );
        }
        _initialiseFeatureSet() {
          if (
            (null == this.spatialReference &&
              (this.spatialReference = this._layer.spatialReference),
            (this.geometryType = this._layer.geometryType),
            (this.fields = this._layer.fields.slice(0)),
            this._layer.outFields)
          )
            if (
              1 === this._layer.outFields.length &&
              '*' === this._layer.outFields[0]
            );
            else {
              const e = [];
              for (const t of this.fields)
                if ('oid' === t.type) e.push(t);
                else
                  for (const r of this._layer.outFields)
                    if (r.toLowerCase() === t.name.toLowerCase()) {
                      e.push(t);
                      break;
                    }
              this.fields = e;
            }
          if (null !== this._overrideFields)
            if (
              1 === this._overrideFields.length &&
              '*' === this._overrideFields[0]
            )
              this._overrideFields = null;
            else {
              const e = [],
                t = [];
              for (const r of this.fields)
                if ('oid' === r.type) e.push(r), t.push(r.name);
                else
                  for (const i of this._overrideFields)
                    if (i.toLowerCase() === r.name.toLowerCase()) {
                      e.push(r), t.push(r.name);
                      break;
                    }
              (this.fields = e), (this._overrideFields = t);
            }
          if (this._layer.source && this._layer.source.sourceJSON) {
            const e = this._layer.source.sourceJSON.currentVersion;
            !0 === this._layer.source.sourceJSON.useStandardizedQueries
              ? ((this._databaseType = f.Bj.StandardisedNoInterval),
                null != e &&
                  e >= 10.61 &&
                  (this._databaseType = f.Bj.Standardised))
              : null != e &&
                (e >= 10.5 &&
                  ((this._databaseType = f.Bj.StandardisedNoInterval),
                  (this._requestStandardised = !0)),
                e >= 10.61 && (this._databaseType = f.Bj.Standardised));
          }
          this.objectIdField = this._layer.objectIdField;
          for (const e of this.fields)
            'global-id' === e.type && (this.globalIdField = e.name);
          (this.hasM = this._layer.supportsM),
            (this.hasZ = this._layer.supportsZ),
            (this.typeIdField = this._layer.typeIdField),
            (this.types = this._layer.types);
        }
        _isInFeatureSet() {
          return f.dj.InFeatureSet;
        }
        _refineSetBlock(e) {
          return (0, D.DB)(e);
        }
        _candidateIdTransform(e) {
          return e;
        }
        _getSet(e) {
          return null === this._wset
            ? this._ensureLoaded()
                .then(() => this._getFilteredSet('', null, null, null, e))
                .then((e) => ((this._wset = e), e))
            : (0, D.DB)(this._wset);
        }
        _runDatabaseProbe(e) {
          return (0, D.Ue)((t, r) => {
            try {
              this._ensureLoaded().then(() => {
                try {
                  const i = new Z.Z();
                  (i.where = e.replace('OBJECTID', this._layer.objectIdField)),
                    this._layer.queryObjectIds(i).then(
                      () => {
                        t(!0);
                      },
                      () => {
                        try {
                          t(!1);
                        } catch (e) {
                          r(e);
                        }
                      },
                    );
                } catch (e) {
                  r(e);
                }
              });
            } catch (e) {
              r(e);
            }
          });
        }
        _canUsePagination() {
          return !(
            !this._layer.capabilities ||
            !this._layer.capabilities.query ||
            !0 !== this._layer.capabilities.query.supportsPagination
          );
        }
        _cacheableFeatureSetSourceKey() {
          return this._layer.url;
        }
        pbfSupportedForQuery(e) {
          return (
            !e.outStatistics &&
            this._layer &&
            this._layer.capabilities &&
            this._layer.capabilities.query &&
            !0 === this._layer.capabilities.query.supportsFormatPBF &&
            !0 === this._layer.capabilities.query.supportsQuantizationEditMode
          );
        }
        queryPBF(e) {
          return (
            (e.quantizationParameters = { mode: 'edit' }),
            (0, U.executeQueryPBF)(this._layer.parsedUrl, e, new z.J({})).then(
              (e) => W.default.fromJSON((0, B.cn)(e.data)).unquantize(),
            )
          );
        }
        get gdbVersion() {
          return this._layer &&
            this._layer.capabilities &&
            this._layer.capabilities.data &&
            this._layer.capabilities.data.isVersioned
            ? this._layer.gdbVersion
              ? this._layer.gdbVersion
              : 'SDE.DEFAULT'
            : '';
        }
        nativeCapabilities() {
          return {
            title: this._layer.title,
            source: this,
            canQueryRelated: !0,
            capabilities: this._layer.capabilities,
            databaseType: this._databaseType,
            requestStandardised: this._requestStandardised,
          };
        }
        executeQuery(e, t) {
          const r = 'execute' === t ? V.e : 'executeForCount' === t ? q.P : G.G,
            i = 'execute' === t && this.pbfSupportedForQuery(e);
          let s = null;
          if (this.recentlyUsedQueries) {
            const t = this.convertQueryToLruCacheKey(e);
            (s = this.recentlyUsedQueries.getFromCache(t)),
              null === s &&
                ((s =
                  !0 !== i
                    ? r(this._layer.parsedUrl.path, e)
                    : this.queryPBF(e)),
                this.recentlyUsedQueries.addToCache(t, s),
                (s = s.catch((e) => {
                  throw (this.recentlyUsedQueries.removeFromCache(t), e);
                })));
          }
          return (
            this.featureSetQueryInterceptor &&
              this.featureSetQueryInterceptor.preLayerQueryCallback({
                layer: this._layer,
                query: e,
                method: t,
              }),
            null === s &&
              (s =
                !0 !== i ? r(this._layer.parsedUrl.path, e) : this.queryPBF(e)),
            s
          );
        }
        _getFilteredSet(e, t, r, i, s) {
          return this.databaseType().then((n) => {
            if (this.isTable() && t && null !== e && '' !== e)
              return new h.Z([], [], !0, null);
            if (this._canUsePagination())
              return this._getFilteredSetUsingPaging(e, t, r, i, s);
            let a = '',
              l = !1;
            null !== i &&
              this._layer.capabilities &&
              this._layer.capabilities.query &&
              !0 === this._layer.capabilities.query.supportsOrderBy &&
              ((a = i.constructClause()), (l = !0));
            const o = new Z.Z();
            return (
              (o.where =
                null === r ? (null === t ? '1=1' : '') : (0, y.zR)(r, n)),
              this._requestStandardised && (o.sqlFormat = 'standard'),
              (o.spatialRelationship = this._makeRelationshipEnum(e)),
              (o.outSpatialReference = this.spatialReference),
              (o.orderByFields = '' !== a ? a.split(',') : null),
              (o.geometry = null === t ? null : t),
              (o.relationParameter = this._makeRelationshipParam(e)),
              this.executeQuery(o, 'executeForIds').then(
                (e) => (
                  null === e && (e = []),
                  this._checkCancelled(s),
                  new h.Z([], e, l, null)
                ),
              )
            );
          });
        }
        _expandPagedSet(e, t, r, i, s) {
          return this._expandPagedSetFeatureSet(e, t, r, i, s);
        }
        _getFilteredSetUsingPaging(e, t, r, i, s) {
          try {
            let n = '',
              a = !1;
            return (
              null !== i &&
                this._layer.capabilities &&
                this._layer.capabilities.query &&
                !0 === this._layer.capabilities.query.supportsOrderBy &&
                ((n = i.constructClause()), (a = !0)),
              this.databaseType().then((i) => {
                let l =
                  null === r ? (null === t ? '1=1' : '') : (0, y.zR)(r, i);
                this._layer.definitionExpression &&
                  this._useDefinitionExpression &&
                  (l =
                    '' !== l
                      ? '((' +
                        this._layer.definitionExpression +
                        ') AND (' +
                        l +
                        '))'
                      : this._layer.definitionExpression);
                let o = this._maxQueryRate();
                const u = this._layer.capabilities.query.maxRecordCount;
                void 0 !== u && u < o && (o = u);
                let d = null;
                if (!0 === this._pageJustIds)
                  d = new h.Z([], ['GETPAGES'], a, {
                    spatialRel: this._makeRelationshipEnum(e),
                    relationParam: this._makeRelationshipParam(e),
                    outFields: this._layer.objectIdField,
                    resultRecordCount: o,
                    resultOffset: 0,
                    geometry: null === t ? null : t,
                    where: l,
                    orderByFields: n,
                    returnGeometry: !1,
                    returnIdsOnly: 'false',
                    internal: {
                      set: [],
                      lastRetrieved: 0,
                      lastPage: 0,
                      fullyResolved: !1,
                    },
                  });
                else {
                  let r = !0;
                  !0 === this._removeGeometry && (r = !1);
                  const i =
                    null !== this._overrideFields
                      ? this._overrideFields
                      : this._fieldsIncludingObjectId(
                          this._layer.outFields ? this._layer.outFields : ['*'],
                        );
                  d = new h.Z([], ['GETPAGES'], a, {
                    spatialRel: this._makeRelationshipEnum(e),
                    relationParam: this._makeRelationshipParam(e),
                    outFields: i.join(','),
                    resultRecordCount: o,
                    resultOffset: 0,
                    geometry: null === t ? null : t,
                    where: l,
                    orderByFields: n,
                    returnGeometry: r,
                    returnIdsOnly: 'false',
                    internal: {
                      set: [],
                      lastRetrieved: 0,
                      lastPage: 0,
                      fullyResolved: !1,
                    },
                  });
                }
                return this._expandPagedSet(d, o, 0, 1, s).then(() => d);
              })
            );
          } catch (e) {
            return (0, D.d1)(e);
          }
        }
        _clonePageDefinition(e) {
          return null === e
            ? null
            : !0 !== e.groupbypage
            ? {
                groupbypage: !1,
                spatialRel: e.spatialRel,
                relationParam: e.relationParam,
                outFields: e.outFields,
                resultRecordCount: e.resultRecordCount,
                resultOffset: e.resultOffset,
                geometry: e.geometry,
                where: e.where,
                orderByFields: e.orderByFields,
                returnGeometry: e.returnGeometry,
                returnIdsOnly: e.returnIdsOnly,
                internal: e.internal,
              }
            : {
                groupbypage: !0,
                spatialRel: e.spatialRel,
                relationParam: e.relationParam,
                outFields: e.outFields,
                resultRecordCount: e.resultRecordCount,
                useOIDpagination: e.useOIDpagination,
                generatedOid: e.generatedOid,
                groupByFieldsForStatistics: e.groupByFieldsForStatistics,
                resultOffset: e.resultOffset,
                outStatistics: e.outStatistics,
                geometry: e.geometry,
                where: e.where,
                orderByFields: e.orderByFields,
                returnGeometry: e.returnGeometry,
                returnIdsOnly: e.returnIdsOnly,
                internal: e.internal,
              };
        }
        _getPhysicalPage(e, t, r) {
          try {
            const t = e.pagesDefinition.internal.lastRetrieved,
              i = t,
              s = e.pagesDefinition.internal.lastPage,
              n = new Z.Z();
            return (
              this._requestStandardised && (n.sqlFormat = 'standard'),
              (n.spatialRelationship = e.pagesDefinition.spatialRel),
              (n.relationParameter = e.pagesDefinition.relationParam),
              (n.outFields = e.pagesDefinition.outFields.split(',')),
              (n.num = e.pagesDefinition.resultRecordCount),
              (n.start = e.pagesDefinition.internal.lastPage),
              (n.geometry = e.pagesDefinition.geometry),
              (n.where = e.pagesDefinition.where),
              (n.orderByFields =
                '' !== e.pagesDefinition.orderByFields
                  ? e.pagesDefinition.orderByFields.split(',')
                  : null),
              (n.returnGeometry = e.pagesDefinition.returnGeometry),
              (n.outSpatialReference = this.spatialReference),
              this.executeQuery(n, 'execute').then((n) => {
                if (
                  (this._checkCancelled(r),
                  e.pagesDefinition.internal.lastPage !== s)
                )
                  return 'done';
                for (let t = 0; t < n.features.length; t++)
                  e.pagesDefinition.internal.set[i + t] =
                    n.features[t].attributes[this._layer.objectIdField];
                if (!1 === this._pageJustIds)
                  for (let e = 0; e < n.features.length; e++)
                    this._featureCache[
                      n.features[e].attributes[this._layer.objectIdField]
                    ] = n.features[e];
                return (
                  ((void 0 === n.exceededTransferLimit &&
                    n.features.length !==
                      e.pagesDefinition.resultRecordCount) ||
                    !1 === n.exceededTransferLimit) &&
                    (e.pagesDefinition.internal.fullyResolved = !0),
                  (e.pagesDefinition.internal.lastRetrieved =
                    t + n.features.length),
                  (e.pagesDefinition.internal.lastPage +=
                    e.pagesDefinition.resultRecordCount),
                  'done'
                );
              })
            );
          } catch (e) {
            return (0, D.d1)(e);
          }
        }
        _fieldsIncludingObjectId(e) {
          if (null === e) return [this.objectIdField];
          const t = e.slice(0);
          if (t.indexOf('*') > -1) return t;
          let r = !1;
          for (const e of t)
            if (e.toUpperCase() === this.objectIdField.toUpperCase()) {
              r = !0;
              break;
            }
          return !1 === r && t.push(this.objectIdField), t;
        }
        _getFeatures(e, t, r, i) {
          const s = [];
          try {
            if (
              (-1 !== t && void 0 === this._featureCache[t] && s.push(t),
              !0 ===
                this._checkIfNeedToExpandKnownPage(
                  e,
                  this._maxProcessingRate(),
                ))
            )
              return this._expandPagedSet(
                e,
                this._maxProcessingRate(),
                0,
                0,
                i,
              ).then(() => this._getFeatures(e, t, r, i));
            let n = 0;
            for (let i = e._lastFetchedIndex; i < e._known.length; i++) {
              if (
                ((e._lastFetchedIndex += 1),
                n++,
                void 0 === this._featureCache[e._known[i]])
              ) {
                let r = !1;
                if (
                  null !== this._layer._mode &&
                  void 0 !== this._layer._mode
                ) {
                  const t = this._layer._mode;
                  if (void 0 !== t._featureMap[e._known[i]]) {
                    const s = t._featureMap[e._known[i]];
                    null !== s &&
                      ((r = !0), (this._featureCache[e._known[i]] = s));
                  }
                }
                if (
                  !1 === r &&
                  (e._known[i] !== t && s.push(e._known[i]),
                  s.length >= this._maxProcessingRate() - 1)
                )
                  break;
              }
              if (n >= r && 0 === s.length) break;
            }
            if (0 === s.length) return (0, D.DB)('success');
            try {
              const e = new Z.Z();
              return (
                this._requestStandardised && (e.sqlFormat = 'standard'),
                (e.objectIds = s),
                (e.outFields =
                  null !== this._overrideFields
                    ? this._overrideFields
                    : this._fieldsIncludingObjectId(
                        this._layer.outFields ? this._layer.outFields : ['*'],
                      )),
                (e.returnGeometry = !0),
                !0 === this._removeGeometry && (e.returnGeometry = !1),
                (e.outSpatialReference = this.spatialReference),
                this.executeQuery(e, 'execute').then((e) => {
                  if ((this._checkCancelled(i), void 0 !== e.error))
                    return (0, D.d1)(new Error(e.error));
                  for (let t = 0; t < e.features.length; t++)
                    this._featureCache[
                      e.features[t].attributes[this._layer.objectIdField]
                    ] = e.features[t];
                  return 'success';
                })
              );
            } catch (e) {
              return (0, D.d1)(e);
            }
          } catch (e) {
            return (0, D.d1)(e);
          }
        }
        _getDistinctPages(e, t, r, i, s, n, a, l, o) {
          return this._ensureLoaded()
            .then(() => this.databaseType())
            .then((u) => {
              let d = r.parseTree.column;
              for (let e = 0; e < this._layer.fields.length; e++)
                if (
                  this._layer.fields[e].name.toLowerCase() === d.toLowerCase()
                ) {
                  d = this._layer.fields[e].name;
                  break;
                }
              const c = new Z.Z();
              this._requestStandardised && (c.sqlFormat = 'standard');
              let h = null === n ? (null === s ? '1=1' : '') : (0, y.zR)(n, u);
              return (
                this._layer.definitionExpression &&
                  this._useDefinitionExpression &&
                  (h =
                    '' !== h
                      ? '((' +
                        this._layer.definitionExpression +
                        ') AND (' +
                        h +
                        '))'
                      : this._layer.definitionExpression),
                (c.where = h),
                (c.spatialRelationship = this._makeRelationshipEnum(i)),
                (c.relationParameter = this._makeRelationshipParam(i)),
                (c.geometry = null === s ? null : s),
                (c.returnDistinctValues = !0),
                (c.returnGeometry = !1),
                (c.outFields = [d]),
                this.executeQuery(c, 'execute').then((u) => {
                  if ((this._checkCancelled(o), !u.hasOwnProperty('features')))
                    return (0, D.d1)(
                      new Error(
                        'Unnexected Result querying statistics from layer',
                      ),
                    );
                  let c = !1;
                  for (let e = 0; e < this._layer.fields.length; e++)
                    if (this._layer.fields[e].name === d) {
                      'date' === this._layer.fields[e].type && (c = !0);
                      break;
                    }
                  for (let e = 0; e < u.features.length; e++) {
                    if (c) {
                      const t = u.features[e].attributes[d];
                      null !== t ? l.push(new Date(t)) : l.push(t);
                    } else l.push(u.features[e].attributes[d]);
                    if (l.length >= a) break;
                  }
                  return 0 === u.features.length
                    ? l
                    : u.features.length ===
                        this._layer.capabilities.query.maxRecordCount &&
                      l.length < a
                    ? this._getDistinctPages(
                        e + u.features.length,
                        t,
                        r,
                        i,
                        s,
                        n,
                        a,
                        l,
                        o,
                      ).then((e) => ({ calculated: !0, result: e }))
                    : l;
                })
              );
            });
        }
        _distinctStat(e, t, r, i, s, n, a) {
          return this._getDistinctPages(0, e, t, r, i, s, n, [], a).then(
            (e) => ({ calculated: !0, result: e }),
          );
        }
        isTable() {
          return (
            this._layer.isTable ||
            null === this._layer.geometryType ||
            'table' === this._layer.type ||
            '' === this._layer.geometryType
          );
        }
        _countstat(e, t, r, i) {
          return this.databaseType().then((e) => {
            const s = new Z.Z();
            if (
              (this._requestStandardised && (s.sqlFormat = 'standard'),
              this.isTable() && r && null !== t && '' !== t)
            )
              return { calculated: !0, result: 0 };
            let n = null === i ? (null === r ? '1=1' : '') : (0, y.zR)(i, e);
            return (
              this._layer.definitionExpression &&
                this._useDefinitionExpression &&
                (n =
                  '' !== n
                    ? '((' +
                      this._layer.definitionExpression +
                      ') AND (' +
                      n +
                      '))'
                    : this._layer.definitionExpression),
              (s.where = n),
              (s.where = n),
              (s.spatialRelationship = this._makeRelationshipEnum(t)),
              (s.relationParameter = this._makeRelationshipParam(t)),
              (s.geometry = null === r ? null : r),
              (s.returnGeometry = !1),
              this.executeQuery(s, 'executeForCount').then((e) => ({
                calculated: !0,
                result: e,
              }))
            );
          });
        }
        _stats(e, t, r, i, s, n, a) {
          return this._ensureLoaded().then(() => {
            const l =
                this._layer.capabilities &&
                this._layer.capabilities.query &&
                !0 === this._layer.capabilities.query.supportsSqlExpression,
              o =
                this._layer.capabilities &&
                this._layer.capabilities.query &&
                !0 === this._layer.capabilities.query.supportsStatistics,
              u =
                this._layer.capabilities &&
                this._layer.capabilities.query &&
                !0 === this._layer.capabilities.query.supportsDistinct;
            return 'count' === e
              ? u
                ? this._countstat(e, r, i, s)
                : { calculated: !1 }
              : !1 === o ||
                (!1 === (0, y.y5)(t) && !1 === l) ||
                !1 === t.isStandardized
              ? '' !== r || null !== s
                ? { calculated: !1 }
                : this._manualStat(e, t, n, a)
              : 'distinct' === e
              ? !1 === u
                ? '' !== r || null !== s
                  ? { calculated: !1 }
                  : this._manualStat(e, t, n, a)
                : this._distinctStat(e, t, r, i, s, n, a)
              : this.databaseType().then((n) => {
                  if (this.isTable() && i && null !== r && '' !== r)
                    return { calculated: !0, result: null };
                  const a = new Z.Z();
                  this._requestStandardised && (a.sqlFormat = 'standard');
                  let l =
                    null === s ? (null === i ? '1=1' : '') : (0, y.zR)(s, n);
                  this._layer.definitionExpression &&
                    this._useDefinitionExpression &&
                    (l =
                      '' !== l
                        ? '((' +
                          this._layer.definitionExpression +
                          ') AND (' +
                          l +
                          '))'
                        : this._layer.definitionExpression),
                    (a.where = l),
                    (a.spatialRelationship = this._makeRelationshipEnum(r)),
                    (a.relationParameter = this._makeRelationshipParam(r)),
                    (a.geometry = null === i ? null : i);
                  const o = new J.Z();
                  (o.statisticType = (0, g.g3)(e)),
                    (o.onStatisticField = (0, y.zR)(t, n)),
                    (o.outStatisticFieldName = 'ARCADE_STAT_RESULT'),
                    (a.returnGeometry = !1);
                  let u = 'ARCADE_STAT_RESULT';
                  return (
                    (a.outStatistics = [o]),
                    this.executeQuery(a, 'execute').then((e) => {
                      if (
                        !e.hasOwnProperty('features') ||
                        0 === e.features.length
                      )
                        return (0, D.d1)(
                          new Error(
                            'Unnexected Result querying statistics from layer',
                          ),
                        );
                      let t = !1;
                      for (let r = 0; r < e.fields.length; r++)
                        if (
                          'ARCADE_STAT_RESULT' ===
                          e.fields[r].name.toUpperCase()
                        ) {
                          (u = e.fields[r].name),
                            'date' === e.fields[r].type && (t = !0);
                          break;
                        }
                      if (t) {
                        let t = e.features[0].attributes[u];
                        return (
                          null !== t &&
                            (t = new Date(e.features[0].attributes[u])),
                          { calculated: !0, result: t }
                        );
                      }
                      return {
                        calculated: !0,
                        result: e.features[0].attributes[u],
                      };
                    })
                  );
                });
          });
        }
        _stat(e, t, r, i, s, n, a) {
          return this._stats(e, t, r, i, s, n, a);
        }
        _canDoAggregates(e, t) {
          return this._ensureLoaded().then(() => {
            let e = !1;
            const r =
              this._layer.capabilities &&
              this._layer.capabilities.query &&
              !0 === this._layer.capabilities.query.supportsSqlExpression;
            if (
              (void 0 !== this._layer.capabilities &&
                null !== this._layer.capabilities.query &&
                !0 === this._layer.capabilities.query.supportsStatistics &&
                !0 === this._layer.capabilities.query.supportsOrderBy &&
                (e = !0),
              e)
            )
              for (let i = 0; i < t.length - 1; i++)
                null !== t[i].workingexpr &&
                  (!1 === t[i].workingexpr.isStandardized ||
                    (!1 === (0, y.y5)(t[i].workingexpr) && !1 === r)) &&
                  (e = !1);
            return !1 !== e;
          });
        }
        _makeRelationshipEnum(e) {
          if (e.indexOf('esriSpatialRelRelation') >= 0) return 'relation';
          switch (e) {
            case 'esriSpatialRelRelation':
              return 'relation';
            case 'esriSpatialRelIntersects':
              return 'intersects';
            case 'esriSpatialRelContains':
              return 'contains';
            case 'esriSpatialRelOverlaps':
              return 'overlaps';
            case 'esriSpatialRelWithin':
              return 'within';
            case 'esriSpatialRelTouches':
              return 'touches';
            case 'esriSpatialRelCrosses':
              return 'crosses';
            case 'esriSpatialRelEnvelopeIntersects':
              return 'envelope-intersects';
          }
          return e;
        }
        _makeRelationshipParam(e) {
          return e.indexOf('esriSpatialRelRelation') >= 0
            ? e.split(':')[1]
            : '';
        }
        _getAggregatePagesDataSourceDefinition(e, t, r, i, s, n, a) {
          return this._ensureLoaded()
            .then(() => this.databaseType())
            .then((l) => {
              let o = '',
                u = !1,
                d = !1;
              null !== n &&
                this._layer.capabilities &&
                this._layer.capabilities.query &&
                !0 === this._layer.capabilities.query.supportsOrderBy &&
                ((o = n.constructClause()), (d = !0)),
                this._layer.capabilities &&
                  this._layer.capabilities.query &&
                  !1 === this._layer.capabilities.query.supportsPagination &&
                  ((d = !1), (u = !0), (o = this._layer.objectIdField));
              const c = [];
              for (let e = 0; e < t.length; e++) {
                const r = new J.Z();
                (r.onStatisticField =
                  null !== t[e].workingexpr
                    ? (0, y.zR)(t[e].workingexpr, l)
                    : ''),
                  (r.outStatisticFieldName = t[e].field),
                  (r.statisticType = t[e].toStatisticsName()),
                  c.push(r);
              }
              '' === o && (o = e.join(','));
              let p = this._maxQueryRate();
              const f = this._layer.capabilities.query.maxRecordCount;
              void 0 !== f && f < p && (p = f);
              let g = null === s ? (null === i ? '1=1' : '') : (0, y.zR)(s, l);
              return (
                this._layer.definitionExpression &&
                  this._useDefinitionExpression &&
                  (g =
                    '' !== g
                      ? '((' +
                        this._layer.definitionExpression +
                        ') AND (' +
                        g +
                        '))'
                      : this._layer.definitionExpression),
                new h.Z([], ['GETPAGES'], d, {
                  groupbypage: !0,
                  spatialRel: this._makeRelationshipEnum(r),
                  relationParam: this._makeRelationshipParam(r),
                  outFields: ['*'],
                  useOIDpagination: u,
                  generatedOid: a,
                  resultRecordCount: p,
                  resultOffset: 0,
                  groupByFieldsForStatistics: e,
                  outStatistics: c,
                  geometry: null === i ? null : i,
                  where: g,
                  orderByFields: o,
                  returnGeometry: !1,
                  returnIdsOnly: !1,
                  internal: {
                    lastMaxId: -1,
                    set: [],
                    lastRetrieved: 0,
                    lastPage: 0,
                    fullyResolved: !1,
                  },
                })
              );
            });
        }
        _getAgregagtePhysicalPage(e, t, r) {
          try {
            let t = e.pagesDefinition.where;
            !0 === e.pagesDefinition.useOIDpagination &&
              (t =
                '' !== t
                  ? '(' +
                    t +
                    ') AND (' +
                    e.pagesDefinition.generatedOid +
                    '>' +
                    e.pagesDefinition.internal.lastMaxId.toString() +
                    ')'
                  : e.pagesDefinition.generatedOid +
                    '>' +
                    e.pagesDefinition.internal.lastMaxId.toString());
            const i = e.pagesDefinition.internal.lastRetrieved,
              s = i,
              n = e.pagesDefinition.internal.lastPage,
              a = new Z.Z();
            return (
              this._requestStandardised && (a.sqlFormat = 'standard'),
              (a.where = t),
              (a.spatialRelationship = e.pagesDefinition.spatialRel),
              (a.relationParameter = e.pagesDefinition.relationParam),
              (a.outFields = e.pagesDefinition.outFields),
              (a.outStatistics = e.pagesDefinition.outStatistics),
              (a.geometry = e.pagesDefinition.geometry),
              (a.groupByFieldsForStatistics =
                e.pagesDefinition.groupByFieldsForStatistics),
              (a.num = e.pagesDefinition.resultRecordCount),
              (a.start = e.pagesDefinition.internal.lastPage),
              (a.returnGeometry = e.pagesDefinition.returnGeometry),
              (a.orderByFields =
                '' !== e.pagesDefinition.orderByFields
                  ? e.pagesDefinition.orderByFields.split(',')
                  : null),
              this.isTable() && a.geometry && a.spatialRelationship
                ? (0, D.DB)([])
                : this.executeQuery(a, 'execute').then((t) => {
                    if (
                      (this._checkCancelled(r), !t.hasOwnProperty('features'))
                    )
                      return (0, D.d1)(
                        new Error(
                          'Unnexected Result querying aggregates from layer',
                        ),
                      );
                    const a = [];
                    if (e.pagesDefinition.internal.lastPage !== n) return [];
                    for (let r = 0; r < t.features.length; r++)
                      e.pagesDefinition.internal.set[s + r] =
                        t.features[r].attributes[
                          e.pagesDefinition.generatedOid
                        ];
                    for (let e = 0; e < t.features.length; e++)
                      a.push(
                        new l.Z({
                          attributes: t.features[e].attributes,
                          geometry: null,
                        }),
                      );
                    return (
                      !0 === e.pagesDefinition.useOIDpagination
                        ? 0 === t.features.length
                          ? (e.pagesDefinition.internal.fullyResolved = !0)
                          : (e.pagesDefinition.internal.lastMaxId =
                              t.features[t.features.length - 1].attributes[
                                e.pagesDefinition.generatedOid
                              ])
                        : ((void 0 === t.exceededTransferLimit &&
                            t.features.length !==
                              e.pagesDefinition.resultRecordCount) ||
                            !1 === t.exceededTransferLimit) &&
                          (e.pagesDefinition.internal.fullyResolved = !0),
                      (e.pagesDefinition.internal.lastRetrieved =
                        i + t.features.length),
                      (e.pagesDefinition.internal.lastPage +=
                        e.pagesDefinition.resultRecordCount),
                      a
                    );
                  })
            );
          } catch (e) {
            return (0, D.d1)(e);
          }
        }
        static create(e, t, r, i, s) {
          const n = new A.default({
            url: e,
            outFields: null === t ? ['*'] : t,
          });
          return new K({
            layer: n,
            spatialReference: r,
            lrucache: i,
            interceptor: s,
          });
        }
        relationshipMetaData() {
          return this._layer &&
            this._layer.source &&
            this._layer.source.sourceJSON &&
            this._layer.source.sourceJSON.relationships
            ? this._layer.source.sourceJSON.relationships
            : [];
        }
        serviceUrl() {
          return (0, f.US)(this._layer.parsedUrl.path);
        }
        queryAttachments(e, t, r, i, s) {
          if (
            this._layer.capabilities.data.supportsAttachment &&
            this._layer.capabilities.operations.supportsQueryAttachments
          ) {
            const n = { objectIds: [e], returnMetadata: s };
            return (
              ((t && t > 0) || (r && r > 0)) &&
                (n.size = [t && t > 0 ? t : 0, r && r > 0 ? r : t + 1]),
              i && i.length > 0 && (n.attachmentTypes = i),
              this.featureSetQueryInterceptor &&
                this.featureSetQueryInterceptor.preLayerQueryCallback({
                  layer: this._layer,
                  query: n,
                  method: 'attachments',
                }),
              this._layer.queryAttachments(n).then((t) => {
                const r = [];
                return (
                  t &&
                    t[e] &&
                    t[e].forEach((t) => {
                      const i =
                        this._layer.parsedUrl.path +
                        '/' +
                        e.toString() +
                        '/attachments/' +
                        t.id.toString();
                      let n = null;
                      s &&
                        t.exifInfo &&
                        (n = Q.Z.convertJsonToArcade(t.exifInfo, !0)),
                        r.push(
                          new L.Z(t.id, t.name, t.contentType, t.size, i, n),
                        );
                    }),
                  r
                );
              })
            );
          }
          return (0, D.DB)([]);
        }
        queryRelatedFeatures(e) {
          const t = {
            f: 'json',
            relationshipId: e.relationshipId.toString(),
            definitionExpression: e.where,
            outFields: e.outFields.join(','),
            returnGeometry: e.returnGeometry.toString(),
          };
          return (
            void 0 !== e.resultOffset &&
              null !== e.resultOffset &&
              (t.resultOffset = e.resultOffset.toString()),
            void 0 !== e.resultRecordCount &&
              null !== e.resultRecordCount &&
              (t.resultRecordCount = e.resultRecordCount.toString()),
            e.orderByFields && (t.orderByFields = e.orderByFields.join(',')),
            e.objectIds.length > 0 && (t.objectIds = e.objectIds.join(',')),
            e.outSpatialReference &&
              (t.outSR = JSON.stringify(e.outSpatialReference.toJSON())),
            this.featureSetQueryInterceptor &&
              this.featureSetQueryInterceptor.preRequestCallback({
                layer: this._layer,
                queryPayload: t,
                method: 'relatedrecords',
                url: this._layer.parsedUrl.path + '/queryRelatedRecords',
              }),
            (0, s.default)(
              this._layer.parsedUrl.path + '/queryRelatedRecords',
              { responseType: 'json', query: t },
            ).then((e) => {
              if (e.data) {
                const t = {},
                  r = e.data;
                if (r && r.relatedRecordGroups) {
                  const e = r.spatialReference;
                  for (const i of r.relatedRecordGroups) {
                    const s = i.objectId,
                      n = [];
                    for (const t of i.relatedRecords) {
                      t.geometry && (t.geometry.spatialReference = e);
                      const r = new l.Z({
                        geometry: t.geometry ? (0, j.im)(t.geometry) : null,
                        attributes: t.attributes,
                      });
                      n.push(r);
                    }
                    t[s] = {
                      features: n,
                      exceededTransferLimit: !0 === r.exceededTransferLimit,
                    };
                  }
                }
                return t;
              }
              return (0, D.d1)('Invalid Request');
            })
          );
        }
        getFeatureByObjectId(e, t) {
          const r = new Z.Z();
          return (
            (r.outFields = t),
            (r.returnGeometry = !1),
            (r.outSpatialReference = this.spatialReference),
            (r.where = this.objectIdField + '=' + e.toString()),
            this.featureSetQueryInterceptor &&
              this.featureSetQueryInterceptor.preLayerQueryCallback({
                layer: this._layer,
                query: r,
                method: 'execute',
              }),
            (0, V.e)(this._layer.parsedUrl.path, r).then((e) =>
              1 === e.features.length ? e.features[0] : null,
            )
          );
        }
        getIdentityUser() {
          return this.load().then(() => {
            var e;
            const t =
              null == (e = i.id) ? void 0 : e.findCredential(this._layer.url);
            return t ? t.userId : null;
          });
        }
        getOwningSystemUrl() {
          return this.load().then(() => {
            var e;
            const t =
              null == (e = i.id) ? void 0 : e.findServerInfo(this._layer.url);
            if (t) return (0, D.DB)(t.owningSystemUrl);
            let r = this._layer.url;
            const n = r.toLowerCase().indexOf('/rest/services');
            return (
              (r = n > -1 ? r.substring(0, n) : r),
              r
                ? ((r += '/rest/info'),
                  (0, D.Ue)((e, t) => {
                    (0, s.default)(r, { query: { f: 'json' } }).then(
                      (t) => {
                        let r = '';
                        t.data &&
                          t.data.owningSystemUrl &&
                          (r = t.data.owningSystemUrl),
                          e(r);
                      },
                      (t) => {
                        e('');
                      },
                    );
                  }))
                : (0, D.DB)('')
            );
          });
        }
        getDataSourceFeatureSet() {
          const e = new K({
            layer: this._layer,
            spatialReference: this.spatialReference,
            outFields: this._overrideFields,
            includeGeometry: !this._removeGeometry,
            lrucache: this.recentlyUsedQueries,
            interceptor: this.featureSetQueryInterceptor,
          });
          return (e._useDefinitionExpression = !1), e;
        }
      }
      var $ = r(17805);
      class H extends c.Z {
        constructor(e) {
          super(e),
            (this.declaredClass =
              'esri.arcade.featureset.sources.FeatureLayerRelated'),
            (this._findObjectId = -1),
            (this._requestStandardised = !1),
            (this._removeGeometry = !1),
            (this._overrideFields = null),
            (this.featureObjectId = null),
            (this.relatedLayer = null),
            (this.relationship = null),
            e.spatialReference && (this.spatialReference = e.spatialReference),
            (this._transparent = !0),
            (this._maxProcessing = 1e3),
            (this._layer = e.layer),
            (this._wset = null),
            (this._findObjectId = e.objectId),
            (this.featureObjectId = e.objectId),
            (this.relationship = e.relationship),
            (this.relatedLayer = e.relatedLayer),
            void 0 !== e.outFields && (this._overrideFields = e.outFields),
            void 0 !== e.includeGeometry &&
              (this._removeGeometry = !1 === e.includeGeometry);
        }
        _maxQueryRate() {
          return f.tI;
        }
        end() {
          return this._layer;
        }
        optimisePagingFeatureQueries() {}
        load() {
          return (
            null === this._loadPromise &&
              (this._loadPromise = (0, D.Ue)((e, t) => {
                (0, D.$6)([this._layer.load(), this.relatedLayer.load()]).then(
                  () => {
                    this._initialiseFeatureSet(), e(this);
                  },
                  t,
                );
              })),
            this._loadPromise
          );
        }
        nativeCapabilities() {
          return this.relatedLayer.nativeCapabilities();
        }
        _initialiseFeatureSet() {
          if (
            (null == this.spatialReference &&
              (this.spatialReference = this._layer.spatialReference),
            (this.geometryType = this.relatedLayer.geometryType),
            (this.fields = this.relatedLayer.fields.slice(0)),
            null !== this._overrideFields)
          )
            if (
              1 === this._overrideFields.length &&
              '*' === this._overrideFields[0]
            )
              this._overrideFields = null;
            else {
              const e = [],
                t = [];
              for (const r of this.fields)
                if ('oid' === r.type) e.push(r), t.push(r.name);
                else
                  for (const i of this._overrideFields)
                    if (i.toLowerCase() === r.name.toLowerCase()) {
                      e.push(r), t.push(r.name);
                      break;
                    }
              (this.fields = e), (this._overrideFields = t);
            }
          const e = this._layer.nativeCapabilities();
          e &&
            ((this._databaseType = e.databaseType),
            (this._requestStandardised = e.requestStandardised)),
            (this.objectIdField = this.relatedLayer.objectIdField),
            (this.globalIdField = this.relatedLayer.globalIdField),
            (this.hasM = this.relatedLayer.supportsM),
            (this.hasZ = this.relatedLayer.supportsZ),
            (this.typeIdField = this.relatedLayer.typeIdField),
            (this.types = this.relatedLayer.types);
        }
        databaseType() {
          return this.relatedLayer
            .databaseType()
            .then(
              () => (
                (this._databaseType = this.relatedLayer._databaseType),
                this._databaseType
              ),
            );
        }
        isTable() {
          return this.relatedLayer.isTable();
        }
        _isInFeatureSet() {
          return f.dj.InFeatureSet;
        }
        _candidateIdTransform(e) {
          return e;
        }
        _getSet(e) {
          return null === this._wset
            ? this._ensureLoaded()
                .then(() => this._getFilteredSet('', null, null, null, e))
                .then((e) => ((this._wset = e), e))
            : (0, D.DB)(this._wset);
        }
        _changeFeature(e) {
          const t = {};
          for (const r of this.fields) t[r.name] = e.attributes[r.name];
          return new l.Z({
            geometry: !0 === this._removeGeometry ? null : e.geometry,
            attributes: t,
          });
        }
        _getFilteredSet(e, t, r, i, s) {
          return this.databaseType().then(() => {
            if (this.isTable() && t && null !== e && '' !== e)
              return new h.Z([], [], !0, null);
            const n = this._layer.nativeCapabilities();
            if (!1 === n.canQueryRelated) return new h.Z([], [], !0, null);
            if (
              n.capabilities.queryRelated &&
              n.capabilities.queryRelated.supportsPagination
            )
              return this._getFilteredSetUsingPaging(e, t, r, i, s);
            let a = '',
              l = !1;
            null !== i &&
              n.capabilities &&
              n.capabilities.queryRelated &&
              !0 === n.capabilities.queryRelated.supportsOrderBy &&
              ((a = i.constructClause()), (l = !0));
            const o = new M.Z();
            o.objectIds = [this._findObjectId];
            const u =
              null !== this._overrideFields
                ? this._overrideFields
                : this._fieldsIncludingObjectId(
                    this.relatedLayer.fields
                      ? this.relatedLayer.fields.map((e) => e.name)
                      : ['*'],
                  );
            (o.outFields = u),
              (o.relationshipId = this.relationship.id),
              (o.where = '1=1');
            let d = !0;
            return (
              !0 === this._removeGeometry && (d = !1),
              (o.returnGeometry = d),
              this._requestStandardised && (o.sqlFormat = 'standard'),
              (o.outSpatialReference = this.spatialReference),
              (o.orderByFields = '' !== a ? a.split(',') : null),
              n.source.queryRelatedFeatures(o).then((i) => {
                this._checkCancelled(s);
                const n = i[this._findObjectId]
                    ? i[this._findObjectId].features
                    : [],
                  a = [];
                for (let e = 0; e < n.length; e++)
                  (this._featureCache[
                    n[e].attributes[this.relatedLayer.objectIdField]
                  ] = n[e]),
                    a.push(n[e].attributes[this.relatedLayer.objectIdField]);
                const o = t && null !== e && '' !== e,
                  u = null != r;
                return new h.Z(o || u ? a : [], o || u ? [] : a, l, null);
              })
            );
          });
        }
        _fieldsIncludingObjectId(e) {
          if (null === e) return [this.objectIdField];
          const t = e.slice(0);
          if (t.indexOf('*') > -1) return t;
          let r = !1;
          for (const e of t)
            if (e.toUpperCase() === this.objectIdField.toUpperCase()) {
              r = !0;
              break;
            }
          return !1 === r && t.push(this.objectIdField), t;
        }
        _getFilteredSetUsingPaging(e, t, r, i, s) {
          try {
            let n = '',
              a = !1;
            const l = this._layer.nativeCapabilities();
            return (
              null !== i &&
                l &&
                l.capabilities.queryRelated &&
                !0 === l.capabilities.queryRelated.supportsOrderBy &&
                ((n = i.constructClause()), (a = !0)),
              this.databaseType().then(() => {
                let i = this._maxQueryRate();
                const o = l.capabilities.query.maxRecordCount;
                void 0 !== o && o < i && (i = o);
                const u = t && null !== e && '' !== e,
                  d = null != r;
                let c = null,
                  p = !0;
                !0 === this._removeGeometry && (p = !1);
                const f =
                  null !== this._overrideFields
                    ? this._overrideFields
                    : this._fieldsIncludingObjectId(
                        this.relatedLayer.fields
                          ? this.relatedLayer.fields.map((e) => e.name)
                          : ['*'],
                      );
                return (
                  (c = new h.Z(
                    u || d ? ['GETPAGES'] : [],
                    u || d ? [] : ['GETPAGES'],
                    a,
                    {
                      outFields: f.join(','),
                      resultRecordCount: i,
                      resultOffset: 0,
                      objectIds: [this._findObjectId],
                      where: '1=1',
                      orderByFields: n,
                      returnGeometry: p,
                      returnIdsOnly: 'false',
                      internal: {
                        set: [],
                        lastRetrieved: 0,
                        lastPage: 0,
                        fullyResolved: !1,
                      },
                    },
                  )),
                  this._expandPagedSet(c, i, 0, 0, s).then(() => c)
                );
              })
            );
          } catch (e) {
            return (0, D.d1)(e);
          }
        }
        _expandPagedSet(e, t, r, i, s) {
          return this._expandPagedSetFeatureSet(e, t, r, i, s);
        }
        _clonePageDefinition(e) {
          return null === e
            ? null
            : !0 !== e.groupbypage
            ? {
                groupbypage: !1,
                outFields: e.outFields,
                resultRecordCount: e.resultRecordCount,
                resultOffset: e.resultOffset,
                where: e.where,
                objectIds: e.objectIds,
                orderByFields: e.orderByFields,
                returnGeometry: e.returnGeometry,
                returnIdsOnly: e.returnIdsOnly,
                internal: e.internal,
              }
            : {
                groupbypage: !0,
                outFields: e.outFields,
                resultRecordCount: e.resultRecordCount,
                useOIDpagination: e.useOIDpagination,
                generatedOid: e.generatedOid,
                groupByFieldsForStatistics: e.groupByFieldsForStatistics,
                resultOffset: e.resultOffset,
                outStatistics: e.outStatistics,
                geometry: e.geometry,
                where: e.where,
                objectIds: e.objectIds,
                orderByFields: e.orderByFields,
                returnGeometry: e.returnGeometry,
                returnIdsOnly: e.returnIdsOnly,
                internal: e.internal,
              };
        }
        _getPhysicalPage(e, t, r) {
          try {
            const t = e.pagesDefinition.internal.lastRetrieved,
              i = t,
              s = e.pagesDefinition.internal.lastPage,
              n = this._layer.nativeCapabilities(),
              a = new M.Z();
            return (
              !0 === this._requestStandardised && (a.sqlFormat = 'standard'),
              (a.relationshipId = this.relationship.id),
              (a.objectIds = e.pagesDefinition.objectIds),
              (a.resultOffset = e.pagesDefinition.internal.lastPage),
              (a.resultRecordCount = e.pagesDefinition.resultRecordCount),
              (a.outFields = e.pagesDefinition.outFields.split(',')),
              (a.where = e.pagesDefinition.where),
              (a.orderByFields =
                '' !== e.pagesDefinition.orderByFields
                  ? e.pagesDefinition.orderByFields.split(',')
                  : null),
              (a.returnGeometry = e.pagesDefinition.returnGeometry),
              (a.outSpatialReference = this.spatialReference),
              n.source.queryRelatedFeatures(a).then((n) => {
                if (
                  (this._checkCancelled(r),
                  e.pagesDefinition.internal.lastPage !== s)
                )
                  return 0;
                const a = n[this._findObjectId]
                  ? n[this._findObjectId].features
                  : [];
                for (let t = 0; t < a.length; t++)
                  e.pagesDefinition.internal.set[i + t] =
                    a[t].attributes[this.relatedLayer.objectIdField];
                for (let e = 0; e < a.length; e++)
                  this._featureCache[
                    a[e].attributes[this.relatedLayer.objectIdField]
                  ] = a[e];
                const l =
                  !n[this._findObjectId] ||
                  !1 === n[this._findObjectId].exceededTransferLimit;
                return (
                  a.length !== e.pagesDefinition.resultRecordCount &&
                    l &&
                    (e.pagesDefinition.internal.fullyResolved = !0),
                  (e.pagesDefinition.internal.lastRetrieved = t + a.length),
                  (e.pagesDefinition.internal.lastPage +=
                    e.pagesDefinition.resultRecordCount),
                  a.length
                );
              })
            );
          } catch (e) {
            return (0, D.d1)(e);
          }
        }
        _getFeatures(e, t, r, i) {
          const s = [];
          -1 !== t && void 0 === this._featureCache[t] && s.push(t);
          const n = this._maxQueryRate();
          if (!0 === this._checkIfNeedToExpandKnownPage(e, n))
            return this._expandPagedSet(e, n, 0, 0, i).then(() =>
              this._getFeatures(e, t, r, i),
            );
          let a = 0;
          for (
            let i = e._lastFetchedIndex;
            i < e._known.length &&
            (a++,
            a <= r && (e._lastFetchedIndex += 1),
            !(
              'GETPAGES' !== e._known[i] &&
              void 0 === this._featureCache[e._known[i]] &&
              (e._known[i] !== t && s.push(e._known[i]), s.length > r)
            )) &&
            !(a >= r && 0 === s.length);
            i++
          );
          return 0 === s.length
            ? (0, D.DB)('success')
            : (0, D.d1)(
                new Error(
                  'Unaccounted for Features. Not in Feature Collection',
                ),
              );
        }
        _refineSetBlock(e, t, r) {
          return (0, D.DB)(e);
        }
        _stat(e, t, r, i, s, n, a) {
          return (0, D.DB)({ calculated: !1 });
        }
        get gdbVersion() {
          return this.relatedLayer.gdbVersion;
        }
        _canDoAggregates(e, t, r, i, s) {
          return (0, D.DB)(!1);
        }
        relationshipMetaData() {
          return this.relatedLayer.relationshipMetaData();
        }
        serviceUrl() {
          return this.relatedLayer.serviceUrl();
        }
        queryAttachments(e, t, r, i, s) {
          return this.relatedLayer.queryAttachments(e, t, r, i, s);
        }
        getFeatureByObjectId(e, t) {
          return this.relatedLayer.getFeatureByObjectId(e, t);
        }
        getOwningSystemUrl() {
          return this.relatedLayer.getOwningSystemUrl();
        }
        getIdentityUser() {
          return this.relatedLayer.getIdentityUser();
        }
        getDataSourceFeatureSet() {
          return this.relatedLayer;
        }
      }
      var X = r(48039),
        Y = r(65587),
        ee = r(15235);
      function te() {
        null === X.Z.applicationCache && (X.Z.applicationCache = new X.Z());
      }
      function re(e, t) {
        if (X.Z.applicationCache) {
          const r = X.Z.applicationCache.getLayerInfo(e);
          if (r)
            return r.then((r) =>
              (0, D.DB)(new A.default({ url: e, outFields: t, sourceJSON: r })),
            );
          const i = new A.default({ url: e, outFields: t });
          let s = (0, D.Ue)((e, t) => {
            i.load().then(
              () => {
                e(i.sourceJSON);
              },
              (e) => {
                t(e);
              },
            );
          });
          return (
            X.Z.applicationCache &&
              (X.Z.applicationCache.setLayerInfo(e, s),
              (s = s.catch((t) => {
                throw (X.Z.applicationCache.clearLayerInfo(e), t);
              }))),
            s.then(() => (0, D.DB)(i))
          );
        }
        return (0, D.DB)(new A.default({ url: e, outFields: t }));
      }
      function ie(e, t, r, i, s, n = null) {
        return re(e, ['*']).then((e) => (0, D.DB)(se(e, t, r, i, s, n)));
      }
      function se(e, t = null, r = null, i = !0, s = null, n = null) {
        return !0 === e._hasMemorySource()
          ? new $.Z({
              layer: e,
              spatialReference: t,
              outFields: r,
              includeGeometry: i,
              lrucache: s,
              interceptor: n,
            })
          : new K({
              layer: e,
              spatialReference: t,
              outFields: r,
              includeGeometry: i,
              lrucache: s,
              interceptor: n,
            });
      }
      function ne(e) {
        if (null !== X.Z.applicationCache) {
          const t = X.Z.applicationCache.getLayerInfo(e);
          if (null !== t) return t;
        }
        let t = (0, s.default)(e, {
          responseType: 'json',
          query: { f: 'json' },
        }).then((e) => {
          if (e.data) {
            const t = e.data;
            return (
              t.layers || (t.layers = []),
              t.tables || (t.tables = []),
              (0, D.DB)(t)
            );
          }
          return (0, D.DB)({ layers: [], tables: [] });
        });
        return (
          null !== X.Z.applicationCache &&
            (X.Z.applicationCache.setLayerInfo(e, t),
            (t = t.catch((t) => {
              throw (X.Z.applicationCache.clearLayerInfo(e), t);
            }))),
          t
        );
      }
      function ae(e, t) {
        const r = {
          metadata: null,
          networkId: -1,
          unVersion: 3,
          terminals: [],
          queryelem: null,
          layerNameLkp: {},
          lkp: null,
        };
        return ne(e).then((i) => {
          if (
            ((r.metadata = i),
            i.controllerDatasetLayers &&
              void 0 !== i.controllerDatasetLayers.utilityNetworkLayerId &&
              null !== i.controllerDatasetLayers.utilityNetworkLayerId)
          ) {
            if (i.layers)
              for (const e of i.layers) r.layerNameLkp[e.id] = e.name;
            if (i.tables)
              for (const e of i.tables) r.layerNameLkp[e.id] = e.name;
            const n = i.controllerDatasetLayers.utilityNetworkLayerId;
            return (
              (r.networkId = n),
              (function (e, t) {
                const r = 'QUERYDATAELEMTS:' + t.toString() + ':' + e;
                if (null !== X.Z.applicationCache) {
                  const e = X.Z.applicationCache.getLayerInfo(r);
                  if (null !== e) return e;
                }
                let i = (0, s.default)(e + '/queryDataElements', {
                  method: 'post',
                  responseType: 'json',
                  query: { layers: JSON.stringify([t.toString()]), f: 'json' },
                }).then((e) => {
                  if (e.data) {
                    const t = e.data;
                    if (t.layerDataElements && t.layerDataElements[0])
                      return t.layerDataElements[0];
                  }
                  throw new Error('Not Found');
                });
                return (
                  null !== X.Z.applicationCache &&
                    (X.Z.applicationCache.setLayerInfo(r, i),
                    (i = i.catch((e) => {
                      throw (X.Z.applicationCache.clearLayerInfo(r), e);
                    }))),
                  i
                );
              })(e, n).then((i) => {
                if (i) {
                  (r.queryelem = i),
                    r.queryelem &&
                      r.queryelem.dataElement &&
                      void 0 !== r.queryelem.dataElement.schemaGeneration &&
                      (r.unVersion = r.queryelem.dataElement.schemaGeneration),
                    (r.lkp = {}),
                    r.queryelem.dataElement.domainNetworks ||
                      (r.queryelem.dataElement.domainNetworks = []);
                  for (const e of r.queryelem.dataElement.domainNetworks) {
                    for (const t of e.edgeSources ? e.edgeSources : []) {
                      const e = {
                        layerId: t.layerId,
                        sourceId: t.sourceId,
                        className: r.layerNameLkp[t.layerId]
                          ? r.layerNameLkp[t.layerId]
                          : null,
                      };
                      e.className && (r.lkp[e.className] = e);
                    }
                    for (const t of e.junctionSources
                      ? e.junctionSources
                      : []) {
                      const e = {
                        layerId: t.layerId,
                        sourceId: t.sourceId,
                        className: r.layerNameLkp[t.layerId]
                          ? r.layerNameLkp[t.layerId]
                          : null,
                      };
                      e.className && (r.lkp[e.className] = e);
                    }
                  }
                  if (r.queryelem.dataElement.terminalConfigurations)
                    for (const e of r.queryelem.dataElement
                      .terminalConfigurations)
                      for (const t of e.terminals)
                        r.terminals.push({
                          terminalId: t.terminalId,
                          terminalName: t.terminalName,
                        });
                  return (function (e) {
                    if (null !== X.Z.applicationCache) {
                      const t = X.Z.applicationCache.getLayerInfo(e);
                      if (null !== t) return t;
                    }
                    let t = (0, s.default)(e, {
                      responseType: 'json',
                      query: { f: 'json' },
                    }).then((e) => {
                      if (e.data) {
                        const t = e.data;
                        return (0, D.DB)(t);
                      }
                      return (0, D.DB)(null);
                    });
                    return (
                      null !== X.Z.applicationCache &&
                        (X.Z.applicationCache.setLayerInfo(e, t),
                        (t = t.catch((t) => {
                          throw (X.Z.applicationCache.clearLayerInfo(e), t);
                        }))),
                      t
                    );
                  })(e + '/' + n).then((i) => {
                    if (
                      i.systemLayers &&
                      void 0 !== i.systemLayers.associationsTableId &&
                      null !== i.systemLayers.associationsTableId
                    ) {
                      const s = [];
                      return (
                        r.unVersion >= 4 &&
                          (s.push('STATUS'), s.push('PERCENTALONG')),
                        ie(
                          e +
                            '/' +
                            i.systemLayers.associationsTableId.toString(),
                          t,
                          [
                            'OBJECTID',
                            'FROMNETWORKSOURCEID',
                            'TONETWORKSOURCEID',
                            'FROMGLOBALID',
                            'TOGLOBALID',
                            'TOTERMINALID',
                            'FROMTERMINALID',
                            'ASSOCIATIONTYPE',
                            'ISCONTENTVISIBLE',
                            'GLOBALID',
                            ...s,
                          ],
                          !1,
                          null,
                          null,
                        )
                          .then((e) => e.load())
                          .then((e) =>
                            r.unVersion >= 4
                              ? (e = e.filter(
                                  _.WhereClause.create(
                                    'STATUS NOT IN (1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 23, 25, 26, 27, 28, 29, 30, 31, 33, 34, 35, 36, 37, 38, 39, 41, 42, 43, 44, 45, 46, 47, 49, 50, 51, 52, 53, 54, 55, 57, 58, 59, 60, 61, 62,63)',
                                    e.getFieldsIndex(),
                                  ),
                                )).load()
                              : e,
                          )
                          .then((e) => ({
                            lkp: r.lkp,
                            associations: e,
                            unVersion: r.unVersion,
                            terminals: r.terminals,
                          }))
                      );
                    }
                    return {
                      associations: null,
                      unVersion: r.unVersion,
                      lkp: null,
                      terminals: [],
                    };
                  });
                }
                return {
                  associations: null,
                  unVersion: r.unVersion,
                  lkp: null,
                  terminals: [],
                };
              })
            );
          }
          return {
            associations: null,
            unVersion: r.unVersion,
            lkp: null,
            terminals: [],
          };
        });
      }
      function le(e, t, r, i = null, s = null, n = !0, a = null, l = null) {
        let o = e.serviceUrl();
        return o
          ? ((o =
              '/' === o.charAt(o.length - 1)
                ? o + t.relatedTableId.toString()
                : o + '/' + t.relatedTableId.toString()),
            ie(o, i, s, n, a, l).then(
              (o) =>
                new H({
                  layer: e,
                  relatedLayer: o,
                  relationship: t,
                  objectId: r,
                  spatialReference: i,
                  outFields: s,
                  includeGeometry: n,
                  lrucache: a,
                  interceptor: l,
                }),
            ))
          : null;
      }
      a.Z.registerAction(),
        N.registerAction(),
        d.Z.registerAction(),
        P.Z.registerAction(),
        E.Z.registerAction();
      class oe extends n.Z {
        constructor(e, t = null, r = null, i = null) {
          super(),
            (this._map = e),
            (this._overridespref = t),
            (this.lrucache = r),
            (this.interceptor = i),
            (this._instantLayers = []);
        }
        _makeAndAddFeatureSet(e, t = !0, r = null) {
          const i = se(
            e,
            this._overridespref,
            null === r ? ['*'] : r,
            t,
            this.lrucache,
            this.interceptor,
          );
          return (
            this._instantLayers.push({
              featureset: i,
              opitem: e,
              includeGeometry: t,
              outFields: JSON.stringify(r),
            }),
            i
          );
        }
        featureSetByName(e, t = !0, r = null) {
          if (
            void 0 !== this._map.loaded &&
            void 0 !== this._map.load &&
            !1 === this._map.loaded
          )
            return this._map.load().then(() => {
              try {
                return this.featureSetByName(e, t, r);
              } catch (e) {
                return (0, D.d1)(e);
              }
            });
          null === r && (r = ['*']), (r = (r = r.slice(0)).sort());
          const i = JSON.stringify(r);
          for (let r = 0; r < this._instantLayers.length; r++) {
            const s = this._instantLayers[r];
            if (
              s.opitem.title === e &&
              s.includeGeometry === t &&
              s.outFields === i
            )
              return this.resolvePromise(this._instantLayers[r].featureset);
          }
          const s = this._map.allLayers.find(
            (t) => t instanceof A.default && t.title === e,
          );
          if (s)
            return this.resolvePromise(this._makeAndAddFeatureSet(s, t, r));
          if (this._map.tables) {
            const i = this._map.tables.find(
              (t) =>
                !!((t.title && t.title === e) || (t.title && t.title === e)),
            );
            if (i) {
              if (i instanceof A.default)
                return this.resolvePromise(this._makeAndAddFeatureSet(i, t, r));
              if (i._materializedTable);
              else {
                const e = i.outFields ? i : { ...i, outFields: ['*'] };
                i._materializedTable = new A.default(e);
              }
              return i._materializedTable
                .load()
                .then(() =>
                  this.resolvePromise(
                    this._makeAndAddFeatureSet(i._materializedTable, t, r),
                  ),
                );
            }
          }
          return this.resolvePromise(null);
        }
        featureSetById(e, t = !0, r = ['*']) {
          if (
            void 0 !== this._map.loaded &&
            void 0 !== this._map.load &&
            !1 === this._map.loaded
          )
            return this._map.load().then(() => {
              try {
                return this.featureSetById(e, t, r);
              } catch (e) {
                return (0, D.d1)(e);
              }
            });
          null === r && (r = ['*']), (r = (r = r.slice(0)).sort());
          const i = JSON.stringify(r);
          for (let r = 0; r < this._instantLayers.length; r++) {
            const s = this._instantLayers[r];
            if (
              s.opitem.id === e &&
              s.includeGeometry === t &&
              s.outFields === i
            )
              return this.resolvePromise(this._instantLayers[r].featureset);
          }
          const s = this._map.allLayers.find(
            (t) => t instanceof A.default && t.id === e,
          );
          if (s)
            return this.resolvePromise(this._makeAndAddFeatureSet(s, t, r));
          if (this._map.tables) {
            const i = this._map.tables.find((t) => t.id === e);
            if (i) {
              if (i instanceof A.default)
                return this.resolvePromise(this._makeAndAddFeatureSet(i, t, r));
              if (i._materializedTable);
              else {
                const e = { ...i, outFields: ['*'] };
                i._materializedTable = new A.default(e);
              }
              return i._materializedTable
                .load()
                .then(() =>
                  this.resolvePromise(
                    this._makeAndAddFeatureSet(i._materializedTable, t, r),
                  ),
                );
            }
          }
          return this.resolvePromise(null);
        }
      }
      class ue extends n.Z {
        constructor(e, t = null, r = null, i = null) {
          super(),
            (this._url = e),
            (this._overridespref = t),
            (this.lrucache = r),
            (this.interceptor = i),
            (this.metadata = null),
            (this._instantLayers = []);
        }
        get url() {
          return this._url;
        }
        _makeAndAddFeatureSet(e, t = !0, r = null) {
          const i = se(
            e,
            this._overridespref,
            null === r ? ['*'] : r,
            t,
            this.lrucache,
          );
          return (
            this._instantLayers.push({
              featureset: i,
              opitem: e,
              includeGeometry: t,
              outFields: JSON.stringify(r),
            }),
            i
          );
        }
        _loadMetaData() {
          return ne(this._url).then((e) => ((this.metadata = e), e));
        }
        load() {
          return this._loadMetaData();
        }
        clone() {
          return new ue(
            this._url,
            this._overridespref,
            this.lrucache,
            this.interceptor,
          );
        }
        featureSetByName(e, t = !0, r = null) {
          null === r && (r = ['*']), (r = (r = r.slice(0)).sort());
          const i = JSON.stringify(r);
          for (let r = 0; r < this._instantLayers.length; r++) {
            const s = this._instantLayers[r];
            if (
              s.opitem.title === e &&
              s.includeGeometry === t &&
              s.outFields === i
            )
              return this.resolvePromise(this._instantLayers[r].featureset);
          }
          return this._loadMetaData().then((i) => {
            let s = null;
            for (const t of i.layers ? i.layers : []) t.name === e && (s = t);
            if (!s)
              for (const t of i.tables ? i.tables : []) t.name === e && (s = t);
            return s
              ? re(this._url + '/' + s.id, ['*']).then((e) =>
                  this._makeAndAddFeatureSet(e, t, r),
                )
              : this.resolvePromise(null);
          });
        }
        featureSetById(e, t = !0, r = ['*']) {
          null === r && (r = ['*']), (r = (r = r.slice(0)).sort());
          const i = JSON.stringify(r);
          e = null != e ? e.toString() : '';
          for (let r = 0; r < this._instantLayers.length; r++) {
            const s = this._instantLayers[r];
            if (
              s.opitem.id === e &&
              s.includeGeometry === t &&
              s.outFields === i
            )
              return this.resolvePromise(this._instantLayers[r].featureset);
          }
          return this._loadMetaData().then((i) => {
            let s = null;
            for (const t of i.layers ? i.layers : [])
              null !== t.id &&
                void 0 !== t.id &&
                t.id.toString() === e &&
                (s = t);
            if (!s)
              for (const t of i.tables ? i.tables : [])
                null !== t.id &&
                  void 0 !== t.id &&
                  t.id.toString() === e &&
                  (s = t);
            return s
              ? re(this._url + '/' + s.id, ['*']).then((e) =>
                  this._makeAndAddFeatureSet(e, t, r),
                )
              : this.resolvePromise(null);
          });
        }
      }
      function de(e, t, r = null, i = null) {
        return new oe(e, t, r, i);
      }
      function ce(e, t, r = null, i = null) {
        return new ue(e, t, r, i);
      }
      function he(e, t) {
        return null === e ? t : new Y.Z({ url: e.field('url') });
      }
      function pe(e, t, r) {
        return i.id.findCredential(e.restUrl)
          ? 'loaded' === e.loadStatus &&
            '' === t &&
            e.user &&
            e.user.sourceJSON &&
            !1 === r
            ? (0, D.DB)(e.user.sourceJSON)
            : '' === t
            ? (0, s.default)(e.restUrl + '/community/self', {
                responseType: 'json',
                query: {
                  f: 'json',
                  ...(!1 === r ? {} : { returnUserLicenseTypeExtensions: !0 }),
                },
              }).then((e) => {
                if (e.data) {
                  const t = e.data;
                  if (t && t.username) return (0, D.DB)(t);
                }
                return (0, D.DB)(null);
              })
            : (0, s.default)(e.restUrl + '/community/users/' + t, {
                responseType: 'json',
                query: { f: 'json' },
              }).then((e) => {
                if (e.data) {
                  const t = e.data;
                  return t.error ? null : (0, D.DB)(t);
                }
                return (0, D.DB)(null);
              })
          : (0, D.DB)(null);
      }
      function fe(e, t, r, i, s) {
        if (null === e) return null;
        if (e instanceof A.default) {
          switch (t) {
            case 'datasource':
              return se(e, s, e.outFields, !0, r, i).getDataSourceFeatureSet();
            case 'parent':
            case 'root':
              return se(e, s, e.outFields, !0, r, i);
          }
          return null;
        }
        if (e instanceof c.Z)
          switch (t) {
            case 'datasource':
              return e.getDataSourceFeatureSet();
            case 'parent':
              return e;
            case 'root':
              return e.getRootFeatureSet();
          }
        return null;
      }
      function ye(e, t, r, i, s, n, a, l = null) {
        if (X.Z.applicationCache) {
          const o = X.Z.applicationCache.getLayerInfo(e + ':' + n.url);
          if (o)
            return o.then(
              (e) => {
                try {
                  const n = new A.default({
                    url: (0, f.US)(e.url) + '/' + t,
                    outFields: ['*'],
                  });
                  return (0, D.DB)(se(n, r, i, s, a, l));
                } catch (e) {
                  return (0, D.d1)(e);
                }
              },
              (e) => (0, D.d1)(e),
            );
        }
        return (0, D.Ue)((o, u) => {
          const d = new ee.default({ id: e, portal: n }).load();
          X.Z.applicationCache &&
            X.Z.applicationCache.setLayerInfo(e + ':' + n.url, d),
            d.then(
              (e) => {
                try {
                  const n = new A.default({
                    url: (0, f.US)(e.url) + '/' + t,
                    outFields: ['*'],
                  });
                  o(se(n, r, i, s, a, l));
                } catch (e) {
                  u(e);
                }
              },
              (t) => {
                X.Z.applicationCache &&
                  X.Z.applicationCache.clearLayerInfo(e + ':' + n.url),
                  u(t);
              },
            );
        });
      }
    },
    70409: (e, t, r) => {
      r.d(t, {
        Xx: () => _,
        QP: () => f,
        $X: () => p,
        yN: () => g,
        TO: () => y,
      });
      var i = r(38171),
        s = r(77286),
        n = r(91136),
        a = r(90961),
        l = r(90658),
        o = r(36515),
        u = r(95330),
        d = r(41534),
        c = r(82971);
      class h {
        constructor(e) {
          (this.field = e), (this.sqlRewritable = !1);
        }
        postInitialization(e, t) {}
      }
      class p extends h {
        constructor(e) {
          super(e), (this.sqlRewritable = !0);
        }
        extractValue(e) {
          return e.attributes[this.field.name];
        }
        rewriteSql(e) {
          return { rewritten: this.sqlRewritable, where: e };
        }
      }
      class f extends h {
        constructor(e, t, r) {
          super((0, l.JW)(e)),
            (this.originalField = e),
            (this.sqlRewritable = !0),
            (this.field.name = t),
            (this.field.alias = r);
        }
        rewriteSql(e, t) {
          return {
            rewritten: this.sqlRewritable,
            where: (0, o.bB)(
              e,
              this.field.name,
              this.originalField.name,
              t.getFieldsIndex(),
            ),
          };
        }
        extractValue(e) {
          return e.attributes[this.originalField.name];
        }
      }
      class y extends h {
        constructor(e, t, r) {
          super(e),
            (this.codefield = t),
            (this.lkp = r),
            (this.reverseLkp = {});
          for (const e in r) this.reverseLkp[r[e]] = e;
          this.sqlRewritable = !0;
        }
        rewriteSql(e, t) {
          const r = this.evaluateNodeToWhereClause(
            e.parseTree,
            l.Bj.Standardised,
            this.field.name,
            this.codefield instanceof d.WhereClause
              ? (0, o.zR)(this.codefield, l.Bj.Standardised)
              : this.codefield,
            e.parameters,
          );
          return r.indexOf(y.BADNESS) >= 0
            ? { rewritten: !1, where: e }
            : {
                rewritten: this.sqlRewritable,
                where: d.WhereClause.create(r, t._parent.getFieldsIndex()),
              };
        }
        evaluateNodeToWhereClause(e, t, r = null, i = null, s) {
          let n, a, l, u;
          switch (e.type) {
            case 'interval':
              return (0, o.TE)(
                this.evaluateNodeToWhereClause(e.value, t, r, i, s),
                e.qualifier,
                e.op,
              );
            case 'case_expression': {
              let i = ' CASE ';
              'simple' === e.format &&
                (i += this.evaluateNodeToWhereClause(
                  e.operand,
                  t,
                  r,
                  y.BADNESS,
                  s,
                ));
              for (let n = 0; n < e.clauses.length; n++)
                i +=
                  ' WHEN ' +
                  this.evaluateNodeToWhereClause(
                    e.clauses[n].operand,
                    t,
                    r,
                    y.BADNESS,
                    s,
                  ) +
                  ' THEN ' +
                  this.evaluateNodeToWhereClause(
                    e.clauses[n].value,
                    t,
                    r,
                    y.BADNESS,
                    s,
                  );
              return (
                null !== e.else &&
                  (i +=
                    ' ELSE ' +
                    this.evaluateNodeToWhereClause(e.else, t, r, y.BADNESS, s)),
                (i += ' END '),
                i
              );
            }
            case 'param': {
              const r = s[e.value.toLowerCase()];
              if ('string' == typeof r)
                return (
                  "'" +
                  s[e.value.toLowerCase()].toString().replace(/'/g, "''") +
                  "'"
                );
              if (r instanceof Date) return (0, o.oX)(r, t);
              if (r instanceof Array) {
                const e = [];
                for (let i = 0; i < r.length; i++)
                  'string' == typeof r[i]
                    ? e.push("'" + r[i].toString().replace(/'/g, "''") + "'")
                    : r[i] instanceof Date
                    ? e.push((0, o.oX)(r[i], t))
                    : e.push(r[i].toString());
                return e;
              }
              return r.toString();
            }
            case 'expr_list':
              a = [];
              for (const n of e.value)
                a.push(this.evaluateNodeToWhereClause(n, t, r, i, s));
              return a;
            case 'unary_expr':
              return (
                ' ( NOT ' +
                this.evaluateNodeToWhereClause(e.expr, t, r, y.BADNESS, s) +
                ' ) '
              );
            case 'binary_expr':
              switch (e.operator) {
                case 'AND':
                  return (
                    ' (' +
                    this.evaluateNodeToWhereClause(e.left, t, r, i, s) +
                    ' AND ' +
                    this.evaluateNodeToWhereClause(e.right, t, r, i, s) +
                    ') '
                  );
                case 'OR':
                  return (
                    ' (' +
                    this.evaluateNodeToWhereClause(e.left, t, r, i, s) +
                    ' OR ' +
                    this.evaluateNodeToWhereClause(e.right, t, r, i, s) +
                    ') '
                  );
                case 'IS':
                  if ('null' !== e.right.type)
                    throw new Error('Unsupported RHS for IS');
                  return (
                    ' (' +
                    this.evaluateNodeToWhereClause(e.left, t, r, i, s) +
                    ' IS NULL )'
                  );
                case 'ISNOT':
                  if ('null' !== e.right.type)
                    throw new Error('Unsupported RHS for IS');
                  return (
                    ' (' +
                    this.evaluateNodeToWhereClause(e.left, t, r, i, s) +
                    ' IS NOT NULL )'
                  );
                case 'IN':
                  if (((n = []), 'expr_list' === e.right.type)) {
                    if (
                      'column_ref' === e.left.type &&
                      e.left.column.toUpperCase() ===
                        this.field.name.toUpperCase()
                    ) {
                      const n = [];
                      let a = !0;
                      for (const t of e.right.value) {
                        if ('string' !== t.type) {
                          a = !1;
                          break;
                        }
                        if (void 0 === this.lkp[t.value]) {
                          a = !1;
                          break;
                        }
                        n.push(this.lkp[t.value].toString());
                      }
                      if (a)
                        return (
                          ' (' +
                          this.evaluateNodeToWhereClause(e.left, t, r, i, s) +
                          ' IN (' +
                          n.join(',') +
                          ')) '
                        );
                    }
                    return (
                      (n = this.evaluateNodeToWhereClause(e.right, t, r, i, s)),
                      ' (' +
                        this.evaluateNodeToWhereClause(e.left, t, r, i, s) +
                        ' IN (' +
                        n.join(',') +
                        ')) '
                    );
                  }
                  return (
                    (u = this.evaluateNodeToWhereClause(e.right, t, r, i, s)),
                    u instanceof Array
                      ? ' (' +
                        this.evaluateNodeToWhereClause(e.left, t, r, i, s) +
                        ' IN (' +
                        u.join(',') +
                        ')) '
                      : ' (' +
                        this.evaluateNodeToWhereClause(e.left, t, r, i, s) +
                        ' IN (' +
                        u +
                        ')) '
                  );
                case 'NOT IN':
                  if (((n = []), 'expr_list' === e.right.type)) {
                    if (
                      'column_ref' === e.left.type &&
                      e.left.column.toUpperCase() ===
                        this.field.name.toUpperCase()
                    ) {
                      const n = [];
                      let a = !0;
                      for (const t of e.right.value) {
                        if ('string' !== t.type) {
                          a = !1;
                          break;
                        }
                        if (void 0 === this.lkp[t.value]) {
                          a = !1;
                          break;
                        }
                        n.push(this.lkp[t.value].toString());
                      }
                      if (a)
                        return (
                          ' (' +
                          this.evaluateNodeToWhereClause(e.left, t, r, i, s) +
                          ' NOT IN (' +
                          n.join(',') +
                          ')) '
                        );
                    }
                    return (
                      (n = this.evaluateNodeToWhereClause(e.right, t, r, i, s)),
                      ' (' +
                        this.evaluateNodeToWhereClause(e.left, t, r, i, s) +
                        ' NOT IN (' +
                        n.join(',') +
                        ')) '
                    );
                  }
                  return (
                    (u = this.evaluateNodeToWhereClause(e.right, t, r, i, s)),
                    u instanceof Array
                      ? ' (' +
                        this.evaluateNodeToWhereClause(e.left, t, r, i, s) +
                        ' NOT IN (' +
                        u.join(',') +
                        ')) '
                      : ' (' +
                        this.evaluateNodeToWhereClause(e.left, t, r, i, s) +
                        ' NOT IN (' +
                        u +
                        ')) '
                  );
                case 'BETWEEN':
                  return (
                    (l = this.evaluateNodeToWhereClause(
                      e.right,
                      t,
                      r,
                      y.BADNESS,
                      s,
                    )),
                    ' (' +
                      this.evaluateNodeToWhereClause(
                        e.left,
                        t,
                        r,
                        y.BADNESS,
                        s,
                      ) +
                      ' BETWEEN ' +
                      l[0] +
                      ' AND ' +
                      l[1] +
                      ' ) '
                  );
                case 'NOTBETWEEN':
                  return (
                    (l = this.evaluateNodeToWhereClause(
                      e.right,
                      t,
                      r,
                      y.BADNESS,
                      s,
                    )),
                    ' (' +
                      this.evaluateNodeToWhereClause(
                        e.left,
                        t,
                        r,
                        y.BADNESS,
                        s,
                      ) +
                      ' NOT BETWEEN ' +
                      l[0] +
                      ' AND ' +
                      l[1] +
                      ' ) '
                  );
                case 'LIKE':
                  return '' !== e.escape
                    ? ' (' +
                        this.evaluateNodeToWhereClause(
                          e.left,
                          t,
                          r,
                          y.BADNESS,
                          s,
                        ) +
                        ' LIKE ' +
                        this.evaluateNodeToWhereClause(
                          e.right,
                          t,
                          r,
                          y.BADNESS,
                          s,
                        ) +
                        " ESCAPE '" +
                        e.escape +
                        "') "
                    : ' (' +
                        this.evaluateNodeToWhereClause(
                          e.left,
                          t,
                          r,
                          y.BADNESS,
                          s,
                        ) +
                        ' LIKE ' +
                        this.evaluateNodeToWhereClause(
                          e.right,
                          t,
                          r,
                          y.BADNESS,
                          s,
                        ) +
                        ') ';
                case 'NOT LIKE':
                  return '' !== e.escape
                    ? ' (' +
                        this.evaluateNodeToWhereClause(
                          e.left,
                          t,
                          r,
                          y.BADNESS,
                          s,
                        ) +
                        ' NOT LIKE ' +
                        this.evaluateNodeToWhereClause(
                          e.right,
                          t,
                          r,
                          y.BADNESS,
                          s,
                        ) +
                        " ESCAPE '" +
                        e.escape +
                        "') "
                    : ' (' +
                        this.evaluateNodeToWhereClause(
                          e.left,
                          t,
                          r,
                          y.BADNESS,
                          s,
                        ) +
                        ' NOT LIKE ' +
                        this.evaluateNodeToWhereClause(
                          e.right,
                          t,
                          r,
                          y.BADNESS,
                          s,
                        ) +
                        ') ';
                case '<>':
                case '=':
                  if (
                    'column_ref' === e.left.type &&
                    'string' === e.right.type
                  ) {
                    if (
                      e.left.column.toUpperCase() ===
                        this.field.name.toUpperCase() &&
                      void 0 !== this.lkp[e.right.value.toString()]
                    )
                      return (
                        ' (' +
                        i +
                        ' ' +
                        e.operator +
                        ' ' +
                        this.lkp[e.right.value.toString()].toString() +
                        ') '
                      );
                  } else if (
                    'column_ref' === e.right.type &&
                    'string' === e.left.type &&
                    e.right.column.toUpperCase() ===
                      this.field.name.toUpperCase()
                  )
                    return (
                      ' (' +
                      this.lkp[e.right.value.toString()].toString() +
                      ' ' +
                      e.operator +
                      ' ' +
                      i +
                      ') '
                    );
                  return (
                    ' (' +
                    this.evaluateNodeToWhereClause(e.left, t, r, y.BADNESS, s) +
                    ' ' +
                    e.operator +
                    ' ' +
                    this.evaluateNodeToWhereClause(
                      e.right,
                      t,
                      r,
                      y.BADNESS,
                      s,
                    ) +
                    ') '
                  );
                case '<':
                case '>':
                case '>=':
                case '<=':
                case '*':
                case '-':
                case '+':
                case '/':
                  return (
                    ' (' +
                    this.evaluateNodeToWhereClause(e.left, t, r, y.BADNESS, s) +
                    ' ' +
                    e.operator +
                    ' ' +
                    this.evaluateNodeToWhereClause(
                      e.right,
                      t,
                      r,
                      y.BADNESS,
                      s,
                    ) +
                    ') '
                  );
              }
              throw new Error('Not Supported Operator ' + e.operator);
            case 'null':
              return 'null';
            case 'bool':
              return !0 === e.value ? '1' : '0';
            case 'string':
              return "'" + e.value.toString().replace(/'/g, "''") + "'";
            case 'timestamp':
            case 'date':
              return (0, o.oX)(e.value, t);
            case 'number':
              return e.value.toString();
            case 'current_time':
              return (0, o.vR)('date' === e.mode, t);
            case 'column_ref':
              return r && r.toLowerCase() === e.column.toLowerCase()
                ? '(' + i + ')'
                : e.column;
            case 'function': {
              const i = this.evaluateNodeToWhereClause(
                e.args,
                t,
                r,
                y.BADNESS,
                s,
              );
              return (0, o.fz)(e.name, i, t);
            }
          }
          throw new Error('Unsupported sql syntax ' + e.type);
        }
        extractValue(e) {
          return this.codefield instanceof d.WhereClause
            ? this.reverseLkp[this.codefield.calculateValueCompiled(e)]
            : this.reverseLkp[e.attributes[this.codefield]];
        }
      }
      y.BADNESS = '_!!!_BAD_LKP_!!!!';
      class g extends h {
        constructor(e, t) {
          super(e), (this.sql = t);
        }
        rewriteSql(e, t) {
          return {
            rewritten: !0,
            where: (0, o.bB)(
              e,
              this.field.name,
              (0, o.zR)(this.sql, l.Bj.Standardised),
              t.getFieldsIndex(),
            ),
          };
        }
        extractValue(e) {
          return this.sql.calculateValueCompiled(e);
        }
      }
      class _ extends n.Z {
        constructor(e) {
          super(e),
            (this._calcFunc = null),
            (this.declaredClass = 'esri.arcade.featureset.actions.Adapted'),
            (this.adaptedFields = null),
            (this._extraFilter = null),
            (this._extraFilter = e.extraFilter),
            (this._parent = e.parentfeatureset),
            (this._maxProcessing = 30),
            (this.adaptedFields = e.adaptedFields);
        }
        static findField(e, t) {
          for (const r of e)
            if (r.name.toLowerCase() === t.toString().toLowerCase()) return r;
          return null;
        }
        _initialiseFeatureSet() {
          null !== this._parent
            ? ((this.geometryType = this._parent.geometryType),
              (this.objectIdField = this._parent.objectIdField),
              (this.globalIdField = this._parent.globalIdField),
              (this.spatialReference = this._parent.spatialReference),
              (this.hasM = this._parent.hasM),
              (this.hasZ = this._parent.hasZ),
              (this.typeIdField = this._parent.typeIdField),
              (this.types = this._parent.types))
            : ((this.spatialReference = new c.Z({ wkid: 4326 })),
              (this.objectIdField = ''),
              (this.globalIdField = ''),
              (this.geometryType = l.Qk.point),
              (this.typeIdField = ''),
              (this.types = null)),
            (this.fields = []);
          for (const e of this.adaptedFields)
            e.postInitialization(this, this._parent), this.fields.push(e.field);
        }
        _getSet(e) {
          return null === this._wset
            ? this._ensureLoaded()
                .then(() =>
                  this._extraFilter
                    ? this._getFilteredSet('', null, null, null, e)
                    : this._parent._getSet(e),
                )
                .then(
                  (t) => (
                    this._checkCancelled(e),
                    (this._wset = new a.Z(
                      t._candidates.slice(0),
                      t._known.slice(0),
                      t._ordered,
                      this._clonePageDefinition(t.pagesDefinition),
                    )),
                    this._wset
                  ),
                )
            : (0, u.DB)(this._wset);
        }
        _isInFeatureSet(e) {
          return this._parent._isInFeatureSet(e);
        }
        _getFeatures(e, t, r, n) {
          const l = [];
          -1 !== t && void 0 === this._featureCache[t] && l.push(t);
          const o = this._maxQueryRate();
          if (!0 === this._checkIfNeedToExpandKnownPage(e, o))
            return this._expandPagedSet(e, o, 0, 0, n).then(() =>
              this._getFeatures(e, t, r, n),
            );
          let d = 0;
          for (
            let i = e._lastFetchedIndex;
            i < e._known.length &&
            (d++,
            d <= r && (e._lastFetchedIndex += 1),
            !(
              void 0 === this._featureCache[e._known[i]] &&
              (e._known[i] !== t && l.push(e._known[i]), l.length >= o)
            ));
            i++
          );
          if (0 === l.length) return (0, u.DB)('success');
          e = new a.Z([], l, e._ordered, null);
          const c = Math.min(l.length, r);
          return this._parent._getFeatures(e, -1, c, n).then(() => {
            this._checkCancelled(n);
            const e = [];
            for (let t = 0; t < c; t++) {
              const r = this._parent._featureFromCache(l[t]);
              void 0 !== r &&
                e.push({
                  geometry: r.geometry,
                  attributes: r.attributes,
                  id: l[t],
                });
            }
            for (const t of e) {
              const e = [];
              for (const r of this.adaptedFields)
                e[r.field.name] = r.extractValue(t);
              this._featureCache[t.id] = new i.Z({
                attributes: e,
                geometry: (0, s.r1)(t.geometry),
              });
            }
            return 'success';
          });
        }
        _fetchAndRefineFeatures() {
          return (0, u.d1)(
            new Error(
              'Fetch and Refine should not be called in this featureset',
            ),
          );
        }
        _getFilteredSet(e, t, r, i, s) {
          let n = !1;
          const l = this._reformulateWithoutAdaptions(r);
          (n = l.cannot), (r = l.where);
          let u = !1;
          if (null !== i) {
            u = !0;
            const e = [];
            for (const t of this.adaptedFields)
              if (!(t instanceof p) && !0 === i.scanForField(t.field.name)) {
                if (!(t instanceof f)) {
                  (i = null), (u = !1);
                  break;
                }
                e.push({ field: t.field.name, newfield: t.originalField.name });
              }
            i && e.length > 0 && (i = i.replaceFields(e));
          }
          return (
            null !== r
              ? null !== this._extraFilter &&
                (r = (0, o.$e)(this._extraFilter, r))
              : (r = this._extraFilter),
            this._ensureLoaded()
              .then(() => this._parent._getFilteredSet(e, t, r, i, s))
              .then((e) => {
                let t;
                return (
                  this._checkCancelled(s),
                  (t =
                    !0 === n
                      ? new a.Z(
                          e._candidates.slice(0).concat(e._known.slice(0)),
                          [],
                          !0 === u && e._ordered,
                          this._clonePageDefinition(e.pagesDefinition),
                        )
                      : new a.Z(
                          e._candidates.slice(0),
                          e._known.slice(0),
                          !0 === u && e._ordered,
                          this._clonePageDefinition(e.pagesDefinition),
                        )),
                  t
                );
              })
          );
        }
        _reformulateWithoutAdaptions(e) {
          const t = { cannot: !1, where: e };
          if (null !== e)
            for (const r of this.adaptedFields)
              if (!0 === (0, o.hq)(e, r.field.name)) {
                const i = r.rewriteSql(e, this);
                if (!0 !== i.rewritten) {
                  (t.cannot = !0), (t.where = null);
                  break;
                }
                t.where = i.where;
              }
          return t;
        }
        _stat(e, t, r, i, s, n, a) {
          let l = !1,
            d = this._reformulateWithoutAdaptions(t);
          return (
            (l = d.cannot),
            (t = d.where),
            (d = this._reformulateWithoutAdaptions(s)),
            (l = l || d.cannot),
            null !== (s = d.where)
              ? null !== this._extraFilter &&
                (s = (0, o.$e)(this._extraFilter, s))
              : (s = this._extraFilter),
            !0 === l
              ? null === s && '' === r && null === i
                ? this._manualStat(e, t, n, a)
                : (0, u.DB)({ calculated: !1 })
              : this._parent
                  ._stat(e, t, r, i, s, n, a)
                  .then((l) =>
                    !1 === l.calculated
                      ? null === s && '' === r && null === i
                        ? this._manualStat(e, t, n, a)
                        : { calculated: !1 }
                      : l,
                  )
          );
        }
        _canDoAggregates(e, t, r, i, s) {
          if (null === this._parent) return (0, u.DB)(!1);
          for (let t = 0; t < e.length; t++)
            for (const r of this.adaptedFields)
              if (
                e[t].toLowerCase() === r.field.name.toLowerCase() &&
                !(r instanceof p)
              )
                return (0, u.DB)(!1);
          const n = [];
          for (let e = 0; e < t.length; e++) {
            const r = t[e];
            if (null !== r.workingexpr) {
              const e = this._reformulateWithoutAdaptions(r.workingexpr);
              if (e.cannot) return (0, u.DB)(!1);
              const t = r.clone();
              (t.workingexpr = e.where), n.push(t);
            } else n.push(r);
          }
          const a = this._reformulateWithoutAdaptions(s);
          return a.cannot
            ? (0, u.DB)(!1)
            : (null !== (s = a.where)
                ? null !== this._extraFilter &&
                  (s = (0, o.$e)(this._extraFilter, s))
                : (s = this._extraFilter),
              this._parent._canDoAggregates(e, n, r, i, s));
        }
        _getAggregatePagesDataSourceDefinition(e, t, r, i, s, n, a) {
          if (null === this._parent)
            return (0, u.d1)(new Error('Should never be called'));
          const l = [];
          for (let e = 0; e < t.length; e++) {
            const r = t[e];
            if (null !== r.workingexpr) {
              const e = this._reformulateWithoutAdaptions(r.workingexpr);
              if (e.cannot)
                return (0, u.d1)(new Error('Should never be called'));
              const t = r.clone();
              (t.workingexpr = e.where), l.push(t);
            } else l.push(r);
          }
          const d = this._reformulateWithoutAdaptions(s);
          return d.cannot
            ? (0, u.d1)(new Error('Should never be called'))
            : (null !== (s = d.where)
                ? null !== this._extraFilter &&
                  (s = (0, o.$e)(this._extraFilter, s))
                : (s = this._extraFilter),
              this._parent._getAggregatePagesDataSourceDefinition(
                e,
                l,
                r,
                i,
                s,
                n,
                a,
              ));
        }
      }
    },
    84328: (e, t, r) => {
      r.d(t, { Z: () => d });
      var i = r(91136),
        s = r(90961),
        n = r(90658),
        a = r(36515),
        l = r(95330),
        o = r(41534),
        u = r(82971);
      class d extends i.Z {
        constructor(e) {
          super(e),
            (this.declaredClass =
              'esri.arcade.featureset.actions.AttributeFilter'),
            (this._maxProcessing = 1e3),
            (this._parent = e.parentfeatureset),
            e.whereclause instanceof o.WhereClause
              ? ((this._whereclause = e.whereclause),
                (this._whereClauseFunction = null))
              : ((this._whereClauseFunction = e.whereclause),
                (this._whereclause = null));
        }
        _initialiseFeatureSet() {
          null !== this._parent
            ? ((this.fields = this._parent.fields.slice(0)),
              (this.geometryType = this._parent.geometryType),
              (this.objectIdField = this._parent.objectIdField),
              (this.globalIdField = this._parent.globalIdField),
              (this.spatialReference = this._parent.spatialReference),
              (this.hasM = this._parent.hasM),
              (this.hasZ = this._parent.hasZ),
              (this.typeIdField = this._parent.typeIdField),
              (this.types = this._parent.types))
            : ((this.fields = []),
              (this.typeIdField = ''),
              (this.objectIdField = ''),
              (this.globalIdField = ''),
              (this.spatialReference = new u.Z({ wkid: 4326 })),
              (this.geometryType = n.Qk.point));
        }
        _getSet(e) {
          return null === this._wset
            ? this._ensureLoaded()
                .then(() =>
                  this._parent._getFilteredSet(
                    '',
                    null,
                    this._whereclause,
                    null,
                    e,
                  ),
                )
                .then(
                  (t) => (
                    this._checkCancelled(e),
                    null !== this._whereClauseFunction
                      ? (this._wset = new s.Z(
                          t._candidates.slice(0).concat(t._known.slice(0)),
                          [],
                          t._ordered,
                          this._clonePageDefinition(t.pagesDefinition),
                        ))
                      : (this._wset = new s.Z(
                          t._candidates.slice(0),
                          t._known.slice(0),
                          t._ordered,
                          this._clonePageDefinition(t.pagesDefinition),
                        )),
                    this._wset
                  ),
                )
            : (0, l.DB)(this._wset);
        }
        _isInFeatureSet(e) {
          let t = this._parent._isInFeatureSet(e);
          return t === n.dj.NotInFeatureSet
            ? t
            : ((t = this._idstates[e]), void 0 === t ? n.dj.Unknown : t);
        }
        _getFeature(e, t, r) {
          return this._parent._getFeature(e, t, r);
        }
        _getFeatures(e, t, r, i) {
          return this._parent._getFeatures(e, t, r, i);
        }
        _featureFromCache(e) {
          return this._parent._featureFromCache(e);
        }
        executeWhereClause(e) {
          return this._whereclause.testFeature(e);
        }
        executeWhereClauseDeferred(e) {
          if (null !== this._whereClauseFunction)
            try {
              const t = this._whereClauseFunction(e);
              return (0, l.y8)(t) ? t : (0, l.DB)(t);
            } catch (e) {
              return (0, l.d1)(e);
            }
          return (0, l.DB)(this.executeWhereClause(e));
        }
        _fetchAndRefineFeatures(e, t, r) {
          const i = new s.Z([], e, !1, null),
            a = Math.min(t, e.length);
          return this._parent._getFeatures(i, -1, a, r).then(() => {
            if ((this._checkCancelled(r), null == this._whereClauseFunction)) {
              for (let t = 0; t < a; t++) {
                const r = this._parent._featureFromCache(e[t]);
                !0 === this.executeWhereClause(r)
                  ? (this._idstates[e[t]] = n.dj.InFeatureSet)
                  : (this._idstates[e[t]] = n.dj.NotInFeatureSet);
              }
              return 'success';
            }
            const i = [];
            for (let t = 0; t < a; t++) {
              const r = this._parent._featureFromCache(e[t]);
              i.push(this.executeWhereClauseDeferred(r));
            }
            return (0, l.$6)(i).then((r) => {
              for (let i = 0; i < t; i++)
                !0 === r[i]
                  ? (this._idstates[e[i]] = n.dj.InFeatureSet)
                  : (this._idstates[e[i]] = n.dj.NotInFeatureSet);
              return 'success';
            });
          });
        }
        _getFilteredSet(e, t, r, i, n) {
          return (
            null !== this._whereClauseFunction ||
              (null !== r
                ? null !== this._whereclause &&
                  (r = (0, a.$e)(this._whereclause, r))
                : (r = this._whereclause)),
            this._ensureLoaded()
              .then(() => this._parent._getFilteredSet(e, t, r, i, n))
              .then((e) => {
                let t;
                return (
                  this._checkCancelled(n),
                  (t =
                    null !== this._whereClauseFunction
                      ? new s.Z(
                          e._candidates.slice(0).concat(e._known.slice(0)),
                          [],
                          e._ordered,
                          this._clonePageDefinition(e.pagesDefinition),
                        )
                      : new s.Z(
                          e._candidates.slice(0),
                          e._known.slice(0),
                          e._ordered,
                          this._clonePageDefinition(e.pagesDefinition),
                        )),
                  t
                );
              })
          );
        }
        _stat(e, t, r, i, s, n, o) {
          if (null !== this._whereClauseFunction)
            return null === s && '' === r && null === i
              ? this._manualStat(e, t, n, o)
              : (0, l.DB)({ calculated: !1 });
          let u = this._whereclause;
          return (
            null !== s &&
              null !== this._whereclause &&
              (u = (0, a.$e)(this._whereclause, s)),
            this._parent
              ._stat(e, t, r, i, u, n, o)
              .then((a) =>
                !1 === a.calculated
                  ? null === s && '' === r && null === i
                    ? this._manualStat(e, t, n, o)
                    : { calculated: !1 }
                  : a,
              )
          );
        }
        _canDoAggregates(e, t, r, i, s) {
          return null !== this._whereClauseFunction
            ? (0, l.DB)(!1)
            : (null !== s
                ? null !== this._whereclause &&
                  (s = (0, a.$e)(this._whereclause, s))
                : (s = this._whereclause),
              null === this._parent
                ? (0, l.DB)(!1)
                : this._parent._canDoAggregates(e, t, r, i, s));
        }
        _getAggregatePagesDataSourceDefinition(e, t, r, i, s, n, o) {
          return null === this._parent
            ? (0, l.d1)(new Error('Should never be called'))
            : (null !== s
                ? null !== this._whereclause &&
                  (s = (0, a.$e)(this._whereclause, s))
                : (s = this._whereclause),
              this._parent._getAggregatePagesDataSourceDefinition(
                e,
                t,
                r,
                i,
                s,
                n,
                o,
              ));
        }
        static registerAction() {
          i.Z._featuresetFunctions.filter = function (e) {
            if ('function' == typeof e)
              return new d({ parentfeatureset: this, whereclause: e });
            let t = null;
            return (
              e instanceof o.WhereClause && (t = e),
              new d({ parentfeatureset: this, whereclause: t })
            );
          };
        }
      }
    },
    85065: (e, t, r) => {
      r.d(t, { Z: () => o });
      var i = r(61363),
        s = r(91136),
        n = r(90961),
        a = r(3823),
        l = r(95330);
      class o extends s.Z {
        constructor(e) {
          super(e),
            (this._orderbyclause = null),
            (this.declaredClass = 'esri.arcade.featureset.actions.OrderBy'),
            (this._maxProcessing = 100),
            (this._orderbyclause = e.orderbyclause),
            (this._parent = e.parentfeatureset);
        }
        _getSet(e) {
          return null === this._wset
            ? this._ensureLoaded()
                .then(() =>
                  this._getFilteredSet('', null, null, this._orderbyclause, e),
                )
                .then(
                  (t) => (
                    this._checkCancelled(e), (this._wset = t), this._wset
                  ),
                )
            : (0, l.DB)(this._wset);
        }
        manualOrderSet(e, t) {
          return this.getIdColumnDictionary(e, [], -1, t).then((e) => {
            this._orderbyclause.order(e);
            const t = new n.Z([], [], !0, null);
            for (let r = 0; r < e.length; r++) t._known.push(e[r].id);
            return t;
          });
        }
        getIdColumnDictionary(e, t, r, s) {
          if (r < e._known.length - 1) {
            const n = this._maxQueryRate();
            if ('GETPAGES' === e._known[r + 1])
              return (0, i.X)(this._parent._expandPagedSet(e, n, 0, 0, s)).then(
                () => this.getIdColumnDictionary(e, t, r, s),
              );
            let a = r + 1;
            const l = [];
            for (; a < e._known.length && 'GETPAGES' !== e._known[a]; )
              l.push(e._known[a]), a++;
            return (
              (r += l.length),
              (0, i.X)(this._parent._getFeatureBatch(l, s)).then((i) => {
                this._checkCancelled(s);
                for (const e of i)
                  t.push({ id: e.attributes[this.objectIdField], feature: e });
                return this.getIdColumnDictionary(e, t, r, s);
              })
            );
          }
          return e._candidates.length > 0
            ? (0, i.X)(
                this._refineSetBlock(e, this._maxProcessingRate(), s),
              ).then(
                () => (
                  this._checkCancelled(s),
                  this.getIdColumnDictionary(e, t, r, s)
                ),
              )
            : (0, l.DB)(t);
        }
        _isInFeatureSet(e) {
          return this._parent._isInFeatureSet(e);
        }
        _getFeatures(e, t, r, i) {
          return this._parent._getFeatures(e, t, r, i);
        }
        _featureFromCache(e) {
          if (void 0 === this._featureCache[e]) {
            const t = this._parent._featureFromCache(e);
            if (void 0 === t) return;
            return null === t ? null : ((this._featureCache[e] = t), t);
          }
          return this._featureCache[e];
        }
        _fetchAndRefineFeatures() {
          return (0, l.d1)(
            new Error(
              'Fetch and Refine should not be called in this featureset',
            ),
          );
        }
        _getFilteredSet(e, t, r, i, s) {
          return this._ensureLoaded()
            .then(() =>
              this._parent._getFilteredSet(
                e,
                t,
                r,
                null === i ? this._orderbyclause : i,
                s,
              ),
            )
            .then((e) => {
              this._checkCancelled(s);
              const i = new n.Z(
                e._candidates.slice(0),
                e._known.slice(0),
                e._ordered,
                this._clonePageDefinition(e.pagesDefinition),
              );
              let a = !0;
              return (
                e._candidates.length > 0 && (a = !1),
                !1 === i._ordered
                  ? this.manualOrderSet(i, s).then(
                      (e) => (
                        !1 === a &&
                          ((null === t && null === r) ||
                            (e = new n.Z(
                              e._candidates.slice(0).concat(e._known.slice(0)),
                              [],
                              e._ordered,
                              this._clonePageDefinition(e.pagesDefinition),
                            ))),
                        e
                      ),
                    )
                  : i
              );
            });
        }
        static registerAction() {
          s.Z._featuresetFunctions.orderBy = function (e) {
            return '' === e
              ? this
              : new o({ parentfeatureset: this, orderbyclause: new a.Z(e) });
          };
        }
      }
    },
    63991: (e, t, r) => {
      r.d(t, { Z: () => l });
      var i = r(91136),
        s = r(90961),
        n = r(90658),
        a = r(95330);
      class l extends i.Z {
        constructor(e) {
          super(e),
            (this._topnum = 0),
            (this.declaredClass = 'esri.arcade.featureset.actions.Top'),
            (this._countedin = 0),
            (this._maxProcessing = 100),
            (this._topnum = e.topnum),
            (this._parent = e.parentfeatureset);
        }
        _getSet(e) {
          return null === this._wset
            ? this._ensureLoaded()
                .then(() => this._parent._getSet(e))
                .then(
                  (e) => (
                    (this._wset = new s.Z(
                      e._candidates.slice(0),
                      e._known.slice(0),
                      !1,
                      this._clonePageDefinition(e.pagesDefinition),
                    )),
                    this._setKnownLength(this._wset) > this._topnum &&
                      (this._wset._known = this._wset._known.slice(
                        0,
                        this._topnum,
                      )),
                    this._setKnownLength(this._wset) >= this._topnum &&
                      (this._wset._candidates = []),
                    this._wset
                  ),
                )
            : (0, a.DB)(this._wset);
        }
        _setKnownLength(e) {
          return e._known.length > 0 &&
            'GETPAGES' === e._known[e._known.length - 1]
            ? e._known.length - 1
            : e._known.length;
        }
        _isInFeatureSet(e) {
          const t = this._parent._isInFeatureSet(e);
          if (t === n.dj.NotInFeatureSet) return t;
          const r = this._idstates[e];
          return r === n.dj.InFeatureSet || r === n.dj.NotInFeatureSet
            ? r
            : t === n.dj.InFeatureSet && void 0 === r
            ? this._countedin < this._topnum
              ? ((this._idstates[e] = n.dj.InFeatureSet),
                this._countedin++,
                n.dj.InFeatureSet)
              : ((this._idstates[e] = n.dj.NotInFeatureSet),
                n.dj.NotInFeatureSet)
            : n.dj.Unknown;
        }
        _expandPagedSet(e, t, r, i, s) {
          if (null === this._parent)
            return (0, a.d1)(new Error('Parent Paging not implemented'));
          if (
            (t > this._topnum && (t = this._topnum),
            this._countedin >= this._topnum &&
              e.pagesDefinition.internal.set.length <=
                e.pagesDefinition.resultOffset)
          ) {
            let t = e._known.length;
            return (
              t > 0 &&
                'GETPAGES' === e._known[t - 1] &&
                (e._known.length = t - 1),
              (t = e._candidates.length),
              t > 0 &&
                'GETPAGES' === e._candidates[t - 1] &&
                (e._candidates.length = t - 1),
              (0, a.DB)('success')
            );
          }
          return this._parent
            ._expandPagedSet(e, t, r, i, s)
            .then(
              (t) => (
                this._setKnownLength(e) > this._topnum &&
                  (e._known.length = this._topnum),
                this._setKnownLength(e) >= this._topnum &&
                  (e._candidates.length = 0),
                t
              ),
            );
        }
        _getFeatures(e, t, r, i) {
          const n = [],
            l = this._maxQueryRate();
          if (!0 === this._checkIfNeedToExpandKnownPage(e, l))
            return this._expandPagedSet(e, l, 0, 0, i).then(() =>
              this._getFeatures(e, t, r, i),
            );
          -1 !== t && void 0 === this._featureCache[t] && n.push(t);
          let o = 0;
          for (
            let i = e._lastFetchedIndex;
            i < e._known.length &&
            (o++,
            o <= r && (e._lastFetchedIndex += 1),
            !(
              void 0 === this._featureCache[e._known[i]] &&
              (e._known[i] !== t && n.push(e._known[i]), n.length > l)
            ));
            i++
          );
          if (0 === n.length) return (0, a.DB)('success');
          const u = new s.Z([], n, !1, null),
            d = Math.min(n.length, r);
          return this._parent._getFeatures(u, -1, d, i).then(() => {
            for (let e = 0; e < d; e++) {
              const t = this._parent._featureFromCache(n[e]);
              void 0 !== t && (this._featureCache[n[e]] = t);
            }
            return 'success';
          });
        }
        _getFilteredSet(e, t, r, i, n) {
          return this._ensureLoaded()
            .then(() => this._getSet(n))
            .then(
              (e) =>
                new s.Z(
                  e._candidates.slice(0).concat(e._known.slice(0)),
                  [],
                  !1,
                  this._clonePageDefinition(e.pagesDefinition),
                ),
            );
        }
        _refineKnowns(e, t) {
          let r = 0,
            i = null;
          const s = [];
          for (let a = 0; a < e._candidates.length; a++) {
            const l = this._isInFeatureSet(e._candidates[a]);
            if (l === n.dj.InFeatureSet) {
              if (
                (e._known.push(e._candidates[a]),
                (r += 1),
                null === i
                  ? (i = { start: a, end: a })
                  : i.end === a - 1
                  ? (i.end = a)
                  : (s.push(i), (i = { start: a, end: a })),
                e._known.length >= this._topnum)
              )
                break;
            } else if (l === n.dj.NotInFeatureSet)
              null === i
                ? (i = { start: a, end: a })
                : i.end === a - 1
                ? (i.end = a)
                : (s.push(i), (i = { start: a, end: a })),
                (r += 1);
            else if (l === n.dj.Unknown) break;
            if (r >= t) break;
          }
          null !== i && s.push(i);
          for (let t = s.length - 1; t >= 0; t--)
            e._candidates.splice(s[t].start, s[t].end - s[t].start + 1);
          this._setKnownLength(e) > this._topnum &&
            (e._known = e._known.slice(0, this._topnum)),
            this._setKnownLength(e) >= this._topnum && (e._candidates = []);
        }
        _stat() {
          return (0, a.DB)({ calculated: !1 });
        }
        _canDoAggregates() {
          return (0, a.DB)(!1);
        }
        static registerAction() {
          i.Z._featuresetFunctions.top = function (e) {
            return new l({ parentfeatureset: this, topnum: e });
          };
        }
      }
    },
    17805: (e, t, r) => {
      r.d(t, { Z: () => f });
      var i = r(38171),
        s = r(91136),
        n = r(90961),
        a = r(90658),
        l = r(36515),
        o = r(95330),
        u = r(9361),
        d = r(67284),
        c = r(16451),
        h = r(1231),
        p = r(57444);
      class f extends s.Z {
        constructor(e) {
          super(e),
            (this.declaredClass =
              'esri.arcade.featureset.sources.FeatureLayerMemory'),
            (this._removeGeometry = !1),
            (this._overrideFields = null),
            (this._forceIsTable = !1),
            e.spatialReference && (this.spatialReference = e.spatialReference),
            (this._transparent = !0),
            (this._maxProcessing = 1e3),
            (this._layer = e.layer),
            (this._wset = null),
            !0 === e.isTable && (this._forceIsTable = !0),
            void 0 !== e.outFields && (this._overrideFields = e.outFields),
            void 0 !== e.includeGeometry &&
              (this._removeGeometry = !1 === e.includeGeometry);
        }
        _maxQueryRate() {
          return a.tI;
        }
        end() {
          return this._layer;
        }
        optimisePagingFeatureQueries() {}
        load() {
          return (
            null === this._loadPromise &&
              (this._loadPromise = (0, o.Ue)((e, t) => {
                if (!0 === this._layer.loaded)
                  return this._initialiseFeatureSet(), void e(this);
                this._layer.when().then(() => {
                  try {
                    this._initialiseFeatureSet(), e(this);
                  } catch (e) {
                    t(e);
                  }
                }, t),
                  this._layer.load();
              })),
            this._loadPromise
          );
        }
        get gdbVersion() {
          return '';
        }
        _initialiseFeatureSet() {
          if (
            (null == this.spatialReference &&
              (this.spatialReference = this._layer.spatialReference),
            (this.geometryType = this._layer.geometryType),
            (this.fields = this._layer.fields.slice(0)),
            this._layer.outFields)
          )
            if (
              1 === this._layer.outFields.length &&
              '*' === this._layer.outFields[0]
            );
            else {
              const e = [];
              for (const t of this.fields)
                if ('oid' === t.type) e.push(t);
                else
                  for (const r of this._layer.outFields)
                    if (r.toLowerCase() === t.name.toLowerCase()) {
                      e.push(t);
                      break;
                    }
              this.fields = e;
            }
          if (null !== this._overrideFields)
            if (
              1 === this._overrideFields.length &&
              '*' === this._overrideFields[0]
            )
              this._overrideFields = null;
            else {
              const e = [],
                t = [];
              for (const r of this.fields)
                if ('oid' === r.type) e.push(r), t.push(r.name);
                else
                  for (const i of this._overrideFields)
                    if (i.toLowerCase() === r.name.toLowerCase()) {
                      e.push(r), t.push(r.name);
                      break;
                    }
              (this.fields = e), (this._overrideFields = t);
            }
          this.objectIdField = this._layer.objectIdField;
          for (const e of this.fields)
            'global-id' === e.type && (this.globalIdField = e.name);
          (this.hasM = this._layer.supportsM),
            (this.hasZ = this._layer.supportsZ),
            (this._databaseType = a.Bj.Standardised),
            (this.typeIdField = this._layer.typeIdField),
            (this.types = this._layer.types);
        }
        isTable() {
          return (
            this._forceIsTable ||
            this._layer.isTable ||
            'table' === this._layer.type ||
            !this._layer.geometryType
          );
        }
        _isInFeatureSet() {
          return a.dj.InFeatureSet;
        }
        _candidateIdTransform(e) {
          return e;
        }
        _getSet(e) {
          return null === this._wset
            ? this._ensureLoaded()
                .then(() => this._getFilteredSet('', null, null, null, e))
                .then((e) => ((this._wset = e), e))
            : (0, o.DB)(this._wset);
        }
        _changeFeature(e) {
          const t = {};
          for (const r of this.fields) t[r.name] = e.attributes[r.name];
          return new i.Z({
            geometry: !0 === this._removeGeometry ? null : e.geometry,
            attributes: t,
          });
        }
        _getFilteredSet(e, t, r, i, s) {
          let u = '',
            d = !1;
          if (
            (null !== i && ((u = i.constructClause()), (d = !0)),
            this.isTable() && t && null !== e && '' !== e)
          ) {
            const e = new n.Z([], [], !0, null);
            return (0, o.DB)(e);
          }
          const c = new p.Z();
          return (
            (c.where =
              null === r
                ? null === t
                  ? '1=1'
                  : ''
                : (0, l.zR)(r, a.Bj.Standardised)),
            (c.spatialRelationship = this._makeRelationshipEnum(e)),
            (c.outSpatialReference = this.spatialReference),
            (c.orderByFields = '' !== u ? u.split(',') : null),
            (c.geometry = null === t ? null : t),
            (c.returnGeometry = !0),
            (c.relationParameter = this._makeRelationshipParam(e)),
            this._layer.queryFeatures(c).then((e) => {
              if (null === e) return new n.Z([], [], d, null);
              this._checkCancelled(s);
              const t = [];
              return (
                e.features.forEach((e) => {
                  const r = e.attributes[this._layer.objectIdField];
                  t.push(r), (this._featureCache[r] = this._changeFeature(e));
                }),
                new n.Z([], t, d, null)
              );
            })
          );
        }
        _makeRelationshipEnum(e) {
          if (e.indexOf('esriSpatialRelRelation') >= 0) return 'relation';
          switch (e) {
            case 'esriSpatialRelRelation':
              return 'relation';
            case 'esriSpatialRelIntersects':
              return 'intersects';
            case 'esriSpatialRelContains':
              return 'contains';
            case 'esriSpatialRelOverlaps':
              return 'overlaps';
            case 'esriSpatialRelWithin':
              return 'within';
            case 'esriSpatialRelTouches':
              return 'touches';
            case 'esriSpatialRelCrosses':
              return 'crosses';
            case 'esriSpatialRelEnvelopeIntersects':
              return 'envelope-intersects';
          }
          return e;
        }
        _makeRelationshipParam(e) {
          return e.indexOf('esriSpatialRelRelation') >= 0
            ? e.split(':')[1]
            : '';
        }
        _queryAllFeatures() {
          if (this._wset) return (0, o.DB)(this._wset);
          const e = new p.Z();
          return (
            (e.where = '1=1'),
            this._ensureLoaded().then(() => {
              if (this._layer.source && this._layer.source.items) {
                const e = [];
                return (
                  this._layer.source.items.forEach((t) => {
                    const r = t.attributes[this._layer.objectIdField];
                    e.push(r), (this._featureCache[r] = this._changeFeature(t));
                  }),
                  (this._wset = new n.Z([], e, !1, null)),
                  this._wset
                );
              }
              return this._layer.queryFeatures(e).then((e) => {
                const t = [];
                return (
                  e.features.forEach((e) => {
                    const r = e.attributes[this._layer.objectIdField];
                    t.push(r), (this._featureCache[r] = this._changeFeature(e));
                  }),
                  (this._wset = new n.Z([], t, !1, null)),
                  this._wset
                );
              });
            })
          );
        }
        _getFeatures(e, t, r) {
          const i = [];
          -1 !== t && void 0 === this._featureCache[t] && i.push(t);
          for (
            let s = e._lastFetchedIndex;
            s < e._known.length &&
            ((e._lastFetchedIndex += 1),
            !(
              void 0 === this._featureCache[e._known[s]] &&
              (e._known[s] !== t && i.push(e._known[s]), i.length > r)
            ));
            s++
          );
          return 0 === i.length
            ? (0, o.DB)('success')
            : (0, o.d1)(
                new Error(
                  'Unaccounted for Features. Not in Feature Collection',
                ),
              );
        }
        _refineSetBlock(e) {
          return (0, o.DB)(e);
        }
        _stat() {
          return (0, o.DB)({ calculated: !1 });
        }
        _canDoAggregates() {
          return (0, o.DB)(!1);
        }
        relationshipMetaData() {
          return [];
        }
        static _cloneAttr(e) {
          const t = {};
          for (const r in e) t[r] = e[r];
          return t;
        }
        nativeCapabilities() {
          return {
            title: this._layer.title,
            canQueryRelated: !1,
            source: this,
            capabilities: this._layer.capabilities,
            databaseType: this._databaseType,
            requestStandardised: !0,
          };
        }
        static create(e, t) {
          let r = e.layerDefinition.objectIdField;
          const i = e.layerDefinition.typeIdField
              ? e.layerDefinition.typeIdField
              : '',
            s = [];
          if (e.layerDefinition.types)
            for (const t of e.layerDefinition.types) s.push(c.Z.fromJSON(t));
          let n = e.layerDefinition.geometryType;
          void 0 === n && (n = e.featureSet.geometryType || '');
          let a = e.featureSet.features;
          const l = t.toJSON();
          if ('' === r || void 0 === r) {
            let t = !1;
            for (const i of e.layerDefinition.fields)
              if ('oid' === i.type || 'esriFieldTypeOID' === i.type) {
                (r = i.name), (t = !0);
                break;
              }
            if (!1 === t) {
              let t = 'FID',
                i = !0,
                s = 0;
              for (; i; ) {
                let r = !0;
                for (const i of e.layerDefinition.fields)
                  if (i.name === t) {
                    r = !1;
                    break;
                  }
                !0 === r ? (i = !1) : (s++, (t = 'FID' + s.toString()));
              }
              e.layerDefinition.fields.push({
                type: 'esriFieldTypeOID',
                name: t,
                alias: t,
              });
              const n = [];
              for (let r = 0; r < a.length; r++)
                n.push({
                  geometry: e.featureSet.features[r].geometry,
                  attributes: e.featureSet.features[r].attributes
                    ? this._cloneAttr(e.featureSet.features[r].attributes)
                    : {},
                }),
                  (n[r].attributes[t] = r);
              (a = n), (r = t);
            }
          }
          const o = [];
          for (const t of e.layerDefinition.fields)
            t instanceof h.Z ? o.push(t) : o.push(h.Z.fromJSON(t));
          let p = n;
          switch (p) {
            case 'esriGeometryPoint':
              p = 'point';
              break;
            case 'esriGeometryPolyline':
              p = 'polyline';
              break;
            case 'esriGeometryPolygon':
              p = 'polygon';
              break;
            case 'esriGeometryExtent':
              p = 'extent';
              break;
            case 'esriGeometryMultipoint':
              p = 'multipoint';
          }
          for (const e of a)
            e.geometry &&
              e.geometry instanceof u.Z == 0 &&
              ((e.geometry.type = p),
              void 0 === e.geometry.spatialReference &&
                (e.geometry.spatialReference = l));
          const y = {
            outFields: ['*'],
            source: a,
            fields: o,
            types: s,
            typeIdField: i,
            objectIdField: r,
            spatialReference: t,
          };
          y.geometryType = p || 'point';
          const g = new d.default(y);
          return new f({
            layer: g,
            spatialReference: t,
            isTable: null === p || '' === p,
          });
        }
        queryAttachments() {
          return (0, o.DB)([]);
        }
        getFeatureByObjectId(e) {
          const t = new p.Z();
          return (
            (t.where = this.objectIdField + '=' + e.toString()),
            this._layer
              .queryFeatures(t)
              .then((e) => (1 === e.features.length ? e.features[0] : null))
          );
        }
        getOwningSystemUrl() {
          return (0, o.DB)('');
        }
        getIdentityUser() {
          return (0, o.DB)('');
        }
      }
    },
    3823: (e, t, r) => {
      function i(e, t) {
        return e === t ? 0 : null === e ? -1 : null === t ? 1 : e < t ? -1 : 1;
      }
      r.d(t, { Z: () => s });
      class s {
        constructor(e) {
          const t = e.split(',');
          (this._fields = []), (this._directions = []);
          for (let e = 0; e < t.length; e++) {
            const r = t[e].match(/\S+/g);
            this._fields.push(r[0]),
              2 === r.length
                ? 'asc' === r[1].toLowerCase()
                  ? this._directions.push(1)
                  : this._directions.push(0)
                : this._directions.push(1);
          }
        }
        constructClause() {
          let e = '';
          for (let t = 0; t < this._fields.length; t++)
            0 !== t && (e += ','),
              (e += this._fields[t]),
              1 === this._directions[t] ? (e += ' ASC') : (e += ' DESC');
          return e;
        }
        order(e) {
          e.sort((e, t) => {
            for (let r = 0; r < this._fields.length; r++) {
              const s = this.featureValue(e.feature, this._fields[r], r),
                n = this.featureValue(t.feature, this._fields[r], r);
              let a = 0;
              if (
                ((a = 1 === this._directions[r] ? i(s, n) : -1 * i(s, n)),
                0 !== a)
              )
                return a;
            }
            return 0;
          });
        }
        scanForField(e) {
          for (let t = 0; t < this._fields.length; t++)
            if (this._fields[t].toLowerCase().trim() === e.toLowerCase().trim())
              return !0;
          return !1;
        }
        replaceFields(e) {
          let t = '';
          for (let r = 0; r < this._fields.length; r++) {
            0 !== r && (t += ',');
            let i = this._fields[r];
            for (const t of e)
              if (i.toLowerCase() === t.field.toLowerCase()) {
                i = t.newfield;
                break;
              }
            (t += i),
              1 === this._directions[r] ? (t += ' ASC') : (t += ' DESC');
          }
          return new s(t);
        }
        featureValue(e, t, r) {
          const i = e.attributes[t];
          if (void 0 !== i) return i;
          for (const i in e.attributes)
            if (t.toLowerCase() === i.toLowerCase())
              return (this._fields[r] = i), e.attributes[i];
          return null;
        }
      }
    },
    25929: (e, t, r) => {
      r.d(t, {
        M: () => p,
        f: () => n,
        i: () => c,
        p: () => y,
        r: () => l,
        t: () => a,
        w: () => o,
      });
      var i = r(70586),
        s = r(17452);
      function n(e, t) {
        const r = t && t.url && t.url.path;
        if (
          e &&
          r &&
          ((e = (0, s.hF)(e, r, { preserveProtocolRelative: !0 })),
          t.portalItem && t.readResourcePaths)
        ) {
          const r = (0, s.PF)(e, t.portalItem.itemUrl);
          d.test(r) &&
            t.readResourcePaths.push(t.portalItem.resourceFromPath(r).path);
        }
        return h(e, t && t.portal);
      }
      function a(e, t, r = p.YES) {
        if (!e) return e;
        !(0, s.YP)(e) &&
          t &&
          t.blockedRelativeUrls &&
          t.blockedRelativeUrls.push(e);
        let i = (0, s.hF)(e);
        if (t) {
          const r =
            (t.verifyItemRelativeUrls && t.verifyItemRelativeUrls.rootPath) ||
            (t.url && t.url.path);
          if (r) {
            const n = h(r, t.portal);
            (i = (0, s.PF)(h(i, t.portal), n, n)),
              i !== e &&
                t.verifyItemRelativeUrls &&
                t.verifyItemRelativeUrls.writtenUrls.push(i);
          }
        }
        return (
          (i = (function (e, t) {
            return t && !t.isPortal && t.urlKey && t.customBaseUrl
              ? (0, s.Ie)(e, `${t.urlKey}.${t.customBaseUrl}`, t.portalHostname)
              : e;
          })(i, t && t.portal)),
          (0, s.YP)(i) && (i = (0, s.Fv)(i)),
          null != t &&
            t.resources &&
            null != t &&
            t.portalItem &&
            !(0, s.YP)(i) &&
            !(0, s.HK)(i) &&
            r === p.YES &&
            t.resources.toKeep.push({
              resource: t.portalItem.resourceFromPath(i),
            }),
          i
        );
      }
      function l(e, t, r) {
        return n(e, r);
      }
      function o(e, t, r, i) {
        const s = a(e, i);
        void 0 !== s && (t[r] = s);
      }
      const u = /\/items\/([^\/]+)\/resources\//,
        d = /^\.\/resources\//;
      function c(e) {
        const t = (0, i.pC)(e) ? e.match(u) : null;
        return (0, i.pC)(t) ? t[1] : null;
      }
      function h(e, t) {
        if (!t || t.isPortal || !t.urlKey || !t.customBaseUrl) return e;
        const r = `${t.urlKey}.${t.customBaseUrl}`,
          i = (0, s.TI)();
        return (0, s.D6)(i, `${i.scheme}://${r}`)
          ? (0, s.Ie)(e, t.portalHostname, r)
          : (0, s.Ie)(e, r, t.portalHostname);
      }
      var p, f;
      ((f = p || (p = {}))[(f.YES = 0)] = 'YES'), (f[(f.NO = 1)] = 'NO');
      const y = Object.freeze({
        __proto__: null,
        fromJSON: n,
        toJSON: a,
        read: l,
        write: o,
        itemIdFromResourceUrl: c,
        get MarkKeep() {
          return p;
        },
      });
    },
    22862: (e, t, r) => {
      r.d(t, { Hg: () => y, uD: () => p, V7: () => f });
      var i = r(15923),
        s = r(80539),
        n = r(70586),
        a = r(1153);
      const l = [
        'esri.Color',
        'esri.portal.Portal',
        'esri.symbols.support.Symbol3DAnchorPosition2D',
        'esri.symbols.support.Symbol3DAnchorPosition3D',
      ];
      function o(e) {
        return e instanceof i.Z;
      }
      function u(e) {
        return e instanceof s.Z
          ? Object.keys(e.items)
          : o(e)
          ? (0, a.vw)(e).keys()
          : e
          ? Object.keys(e)
          : [];
      }
      function d(e, t) {
        return e instanceof s.Z ? e.items[t] : e[t];
      }
      function c(e) {
        return e ? e.declaredClass : null;
      }
      function h(e, t) {
        const r = e.diff;
        if (r && 'function' == typeof r) return r(e, t);
        const i = u(e),
          s = u(t);
        if (0 === i.length && 0 === s.length) return;
        if (
          !i.length ||
          !s.length ||
          (function (e, t) {
            return (
              !(!Array.isArray(e) || !Array.isArray(t)) && e.length !== t.length
            );
          })(e, t)
        )
          return { type: 'complete', oldValue: e, newValue: t };
        const a = s.filter((e) => -1 === i.indexOf(e)),
          p = i.filter((e) => -1 === s.indexOf(e)),
          f = i
            .filter((r) => s.indexOf(r) > -1 && d(e, r) !== d(t, r))
            .concat(a, p)
            .sort(),
          y = c(e);
        if (y && l.indexOf(y) > -1 && f.length)
          return { type: 'complete', oldValue: e, newValue: t };
        let g;
        const _ = o(e) && o(t);
        for (const i of f) {
          const s = d(e, i),
            a = d(t, i);
          let l;
          (_ || ('function' != typeof s && 'function' != typeof a)) &&
            s !== a &&
            ((null == s && null == a) ||
              ((l =
                r && r[i] && 'function' == typeof r[i]
                  ? r[i](s, a)
                  : 'object' == typeof s &&
                    'object' == typeof a &&
                    c(s) === c(a)
                  ? h(s, a)
                  : { type: 'complete', oldValue: s, newValue: a }),
              (0, n.pC)(l) &&
                ((0, n.pC)(g)
                  ? (g.diff[i] = l)
                  : (g = { type: 'partial', diff: { [i]: l } }))));
        }
        return g;
      }
      function p(e, t) {
        if ((0, n.Wi)(e)) return !1;
        const r = t.split('.');
        let i = e;
        for (const e of r) {
          if ('complete' === i.type) return !0;
          if ('partial' !== i.type) return !1;
          {
            const t = i.diff[e];
            if (!t) return !1;
            i = t;
          }
        }
        return !0;
      }
      function f(e, t) {
        for (const r of t) if (p(e, r)) return !0;
        return !1;
      }
      function y(e, t) {
        if (
          !(
            'function' == typeof e ||
            'function' == typeof t ||
            ((0, n.Wi)(e) && (0, n.Wi)(t))
          )
        )
          return (0, n.Wi)(e) ||
            (0, n.Wi)(t) ||
            ('object' == typeof e && 'object' == typeof t && c(e) !== c(t))
            ? { type: 'complete', oldValue: e, newValue: t }
            : h(e, t);
      }
    },
    66643: (e, t, r) => {
      r.d(t, { Ed: () => n, UI: () => a, q6: () => l, mt: () => o });
      var i = r(70586),
        s = r(95330);
      function n(e, t, r) {
        return (0, s.as)(e.map((e, i) => t.apply(r, [e, i])));
      }
      function a(e, t, r) {
        return (0, s.as)(e.map((e, i) => t.apply(r, [e, i]))).then((e) =>
          e.map((e) => e.value),
        );
      }
      function l(e) {
        return (0, i.Wi)(e)
          ? (0, s.DB)()
          : e
              .then((e) => ({ ok: !0, value: e }))
              .catch((e) => ({ ok: !1, error: e }));
      }
      function o(e) {
        return e
          .then((e) => ({ ok: !0, value: e }))
          .catch((e) => ((0, s.r9)(e), { ok: !1, error: e }));
      }
    },
    74085: (e, t, r) => {
      function i(e) {}
      r.d(t, { Bg: () => i }), r(80442);
    },
    91040: (e, t, r) => {
      r.d(t, { yZ: () => s });
      var i = r(67900);
      function s(e, t) {
        const r = t || e.extent,
          s = e.width,
          n = (0, i.c9)(r && r.spatialReference);
        return r && s ? (r.width / s) * n * i.hd * 96 : 0;
      }
    },
    54295: (e, t, r) => {
      r.d(t, { V: () => a });
      var i = r(43697),
        s = r(5600),
        n = (r(67676), r(80442), r(75215), r(52011));
      const a = (e) => {
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
          (t = (0, i._)([(0, n.j)('esri.layers.mixins.APIKeyMixin')], t)),
          t
        );
      };
    },
    17287: (e, t, r) => {
      r.d(t, { Y: () => u });
      var i = r(43697),
        s = r(92604),
        n = r(70586),
        a = r(5600),
        l = (r(67676), r(80442), r(75215), r(52011)),
        o = r(66677);
      const u = (e) => {
        let t = class extends e {
          get title() {
            if (this._get('title') && 'defaults' !== this.originOf('title'))
              return this._get('title');
            if (this.url) {
              const e = (0, o.Qc)(this.url);
              if ((0, n.pC)(e) && e.title) return e.title;
            }
            return this._get('title') || '';
          }
          set title(e) {
            this._set('title', e);
          }
          set url(e) {
            this._set('url', (0, o.Nm)(e, s.Z.getLogger(this.declaredClass)));
          }
        };
        return (
          (0, i._)([(0, a.Cb)()], t.prototype, 'title', null),
          (0, i._)([(0, a.Cb)({ type: String })], t.prototype, 'url', null),
          (t = (0, i._)([(0, l.j)('esri.layers.mixins.ArcGISService')], t)),
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
        l = r(20102),
        o = r(92604),
        u = r(70586),
        d = r(95330),
        c = r(17452),
        h = r(5600),
        p = (r(67676), r(80442), r(75215), r(71715)),
        f = r(52011),
        y = r(30556),
        g = r(65587),
        _ = r(15235),
        m = r(86082);
      const b = o.Z.getLogger('esri.layers.mixins.PortalLayer'),
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
                return new _.default({ id: t.itemId, portal: r && r.portal });
            }
            writePortalItem(e, t) {
              e && e.id && (t.itemId = e.id);
            }
            async loadFromPortal(e, t) {
              if (this.portalItem && this.portalItem.id)
                try {
                  const i = await r.e(8062).then(r.bind(r, 18062));
                  return (
                    (0, d.k_)(t),
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
                    ((0, d.D_)(e) ||
                      b.warn(
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
                  (e) => ((0, d.r9)(e), !0),
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
                S.credential === t ? S.user : await this._fetchEditingUser(e);
              return (
                (S.credential = t),
                (S.user = r),
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
              const l = s.id.findServerInfo(this.url);
              if (null == l || !l.owningSystemUrl) return null;
              const o = `${l.owningSystemUrl}/sharing/rest`,
                d = g.Z.getDefault();
              if (d && d.loaded && (0, c.Fv)(d.restUrl) === (0, c.Fv)(o))
                return d.user;
              const h = `${o}/community/self`,
                p = (0, u.pC)(e) ? e.signal : null,
                f = await (0, a.q6)(
                  (0, n.default)(h, {
                    authMode: 'no-prompt',
                    query: { f: 'json' },
                    signal: p,
                  }),
                );
              return f.ok ? m.default.fromJSON(f.value.data) : null;
            }
            read(e, t) {
              t && (t.layer = this), super.read(e, t);
            }
            write(e, t) {
              const r = t && t.portal,
                i =
                  this.portalItem &&
                  this.portalItem.id &&
                  (this.portalItem.portal || g.Z.getDefault());
              return r && i && !(0, c.tm)(i.restUrl, r.restUrl)
                ? (t.messages &&
                    t.messages.push(
                      new l.Z(
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
              [(0, h.Cb)({ type: _.default })],
              t.prototype,
              'portalItem',
              null,
            ),
            (0, i._)(
              [(0, p.r)('web-document', 'portalItem', ['itemId'])],
              t.prototype,
              'readPortalItem',
              null,
            ),
            (0, i._)(
              [
                (0, y.c)('web-document', 'portalItem', {
                  itemId: { type: String },
                }),
              ],
              t.prototype,
              'writePortalItem',
              null,
            ),
            (0, i._)(
              [(0, h.Cb)({ clonable: !1 })],
              t.prototype,
              'resourceReferences',
              void 0,
            ),
            (0, i._)(
              [(0, h.Cb)({ readOnly: !0 })],
              t.prototype,
              'userHasEditingPrivileges',
              void 0,
            ),
            (t = (0, i._)([(0, f.j)('esri.layers.mixins.PortalLayer')], t)),
            t
          );
        },
        S = { credential: null, user: null };
    },
    70082: (e, t, r) => {
      r.d(t, { Z: () => c });
      var i = r(43697),
        s = r(2368),
        n = r(35454),
        a = r(96674),
        l = r(5600),
        o = (r(67676), r(80442), r(75215), r(52011));
      const u = new n.X({
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
      let d = class extends (0, s.J)(a.wq) {
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
        [(0, l.Cb)({ json: { write: !0 } })],
        d.prototype,
        'name',
        void 0,
      ),
        (0, i._)(
          [(0, l.Cb)({ json: { write: !0 } })],
          d.prototype,
          'description',
          void 0,
        ),
        (0, i._)(
          [(0, l.Cb)({ json: { read: u.read, write: u.write } })],
          d.prototype,
          'drawingTool',
          void 0,
        ),
        (0, i._)(
          [(0, l.Cb)({ json: { write: !0 } })],
          d.prototype,
          'prototype',
          void 0,
        ),
        (0, i._)(
          [(0, l.Cb)({ json: { write: !0 } })],
          d.prototype,
          'thumbnail',
          void 0,
        ),
        (d = (0, i._)([(0, o.j)('esri.layers.support.FeatureTemplate')], d));
      const c = d;
    },
    16451: (e, t, r) => {
      r.d(t, { Z: () => p });
      var i = r(43697),
        s = r(2368),
        n = r(96674),
        a = r(5600),
        l = (r(67676), r(80442), r(75215), r(71715)),
        o = r(52011),
        u = r(30556),
        d = r(72729),
        c = r(70082);
      let h = class extends (0, s.J)(n.wq) {
        constructor(e) {
          super(e),
            (this.id = null),
            (this.name = null),
            (this.domains = null),
            (this.templates = null);
        }
        readDomains(e) {
          const t = {};
          for (const r of Object.keys(e)) t[r] = (0, d.im)(e[r]);
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
      (0, i._)([(0, a.Cb)({ json: { write: !0 } })], h.prototype, 'id', void 0),
        (0, i._)(
          [(0, a.Cb)({ json: { write: !0 } })],
          h.prototype,
          'name',
          void 0,
        ),
        (0, i._)(
          [(0, a.Cb)({ json: { write: !0 } })],
          h.prototype,
          'domains',
          void 0,
        ),
        (0, i._)([(0, l.r)('domains')], h.prototype, 'readDomains', null),
        (0, i._)([(0, u.c)('domains')], h.prototype, 'writeDomains', null),
        (0, i._)(
          [(0, a.Cb)({ type: [c.Z], json: { write: !0 } })],
          h.prototype,
          'templates',
          void 0,
        ),
        (h = (0, i._)([(0, o.j)('esri.layers.support.FeatureType')], h));
      const p = h;
    },
    56765: (e, t, r) => {
      r.d(t, { Z: () => d });
      var i,
        s = r(43697),
        n = r(80539),
        a = r(96674),
        l = r(5600),
        o = (r(67676), r(80442), r(75215), r(52011));
      let u = (i = class extends a.wq {
        constructor(e) {
          super(e),
            (this.floorField = null),
            (this.viewAllMode = !1),
            (this.viewAllLevelIds = new n.Z());
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
        [(0, l.Cb)({ type: String, json: { write: !0 } })],
        u.prototype,
        'floorField',
        void 0,
      ),
        (0, s._)(
          [(0, l.Cb)({ json: { read: !1, write: !1 } })],
          u.prototype,
          'viewAllMode',
          void 0,
        ),
        (0, s._)(
          [(0, l.Cb)({ json: { read: !1, write: !1 } })],
          u.prototype,
          'viewAllLevelIds',
          void 0,
        ),
        (u = i = (0, s._)([(0, o.j)('esri.layers.support.LayerFloorInfo')], u));
      const d = u;
    },
    66677: (e, t, r) => {
      r.d(t, {
        ld: () => f,
        B5: () => c,
        M8: () => g,
        G: () => w,
        Qc: () => h,
        DR: () => p,
        Nm: () => _,
        XG: () => m,
        a7: () => y,
        wH: () => b,
      });
      var i = r(70586),
        s = r(17452),
        n = r(25929);
      const a = {
          mapserver: 'MapServer',
          imageserver: 'ImageServer',
          featureserver: 'FeatureServer',
          sceneserver: 'SceneServer',
          streamserver: 'StreamServer',
          vectortileserver: 'VectorTileServer',
        },
        l = Object.values(a),
        o = new RegExp(
          `^((?:https?:)?\\/\\/\\S+?\\/rest\\/services\\/(.+?)\\/(${l.join(
            '|',
          )}))(?:\\/(?:layers\\/)?(\\d+))?`,
          'i',
        ),
        u = new RegExp(
          `^((?:https?:)?\\/\\/\\S+?\\/([^\\/\\n]+)\\/(${l.join(
            '|',
          )}))(?:\\/(?:layers\\/)?(\\d+))?`,
          'i',
        ),
        d = /(.*?)\/(?:layers\/)?(\d+)\/?$/i;
      function c(e) {
        return !!o.test(e);
      }
      function h(e) {
        const t = (0, s.mN)(e),
          r = t.path.match(o) || t.path.match(u);
        if (!r) return null;
        const [, i, n, l, d] = r,
          c = n.indexOf('/');
        return {
          title: f(-1 !== c ? n.slice(c + 1) : n),
          serverType: a[l.toLowerCase()],
          sublayer: null != d && '' !== d ? parseInt(d, 10) : null,
          url: { path: i },
        };
      }
      function p(e) {
        const t = (0, s.mN)(e).path.match(d);
        return t ? { serviceUrl: t[1], sublayerId: Number(t[2]) } : null;
      }
      function f(e) {
        return (
          (e = e.replace(/\s*[/_]+\s*/g, ' '))[0].toUpperCase() + e.slice(1)
        );
      }
      function y(e, t) {
        const r = [];
        if (e) {
          const t = h(e);
          (0, i.pC)(t) && t.title && r.push(t.title);
        }
        if (t) {
          const e = f(t);
          r.push(e);
        }
        if (2 === r.length) {
          if (-1 !== r[0].toLowerCase().indexOf(r[1].toLowerCase()))
            return r[0];
          if (-1 !== r[1].toLowerCase().indexOf(r[0].toLowerCase()))
            return r[1];
        }
        return r.join(' - ');
      }
      function g(e) {
        if (!e) return !1;
        const t = -1 !== (e = e.toLowerCase()).indexOf('.arcgis.com/'),
          r =
            -1 !== e.indexOf('//services') ||
            -1 !== e.indexOf('//tiles') ||
            -1 !== e.indexOf('//features');
        return t && r;
      }
      function _(e, t) {
        return e ? (0, s.Qj)((0, s.Hu)(e, t)) : e;
      }
      function m(e) {
        let { url: t } = e;
        if (!t) return { url: t };
        t = (0, s.Hu)(t, e.logger);
        const r = (0, s.mN)(t),
          n = h(r.path);
        let a;
        if ((0, i.pC)(n))
          null != n.sublayer && null == e.layer.layerId && (a = n.sublayer),
            (t = n.url.path);
        else if (e.nonStandardUrlAllowed) {
          const e = p(r.path);
          (0, i.pC)(e) && ((t = e.serviceUrl), (a = e.sublayerId));
        }
        return { url: (0, s.Qj)(t), layerId: a };
      }
      function b(e, t, r, i, a) {
        (0, n.w)(t, i, 'url', a),
          i.url &&
            null != e.layerId &&
            (i.url = (0, s.v_)(i.url, r, e.layerId.toString()));
      }
      function w(e) {
        if (!e) return !1;
        const t = e.toLowerCase(),
          r = -1 !== t.indexOf('/services/'),
          i = -1 !== t.indexOf('/mapserver/wmsserver'),
          s = -1 !== t.indexOf('/imageserver/wmsserver'),
          n = -1 !== t.indexOf('/wmsserver');
        return r && (i || s || n);
      }
    },
    15235: (e, t, r) => {
      r.r(t), r.d(t, { default: () => D });
      var i = r(43697),
        s = r(99880),
        n = r(20102),
        a = r(96674),
        l = r(22974),
        o = r(83379),
        u = r(70586),
        d = r(17452),
        c = r(5600),
        h = r(75215),
        p = r(71715),
        f = r(52011),
        y = r(6570),
        g = r(65587),
        _ = r(15923),
        m = r(92604),
        b = (r(67676), r(80442), r(90578));
      const w = m.Z.getLogger('esri.portal.PortalItemResource');
      let S = class extends _.Z {
        constructor(e) {
          super(e), (this.portalItem = null);
        }
        normalizeCtorArgs(e) {
          return e && e.portalItem && e.path
            ? { ...e, path: this._normalizePath(e.path, e.portalItem) }
            : e;
        }
        set path(e) {
          (0, u.pC)(e) && (0, d.YP)(e)
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
          const r = this.url;
          if ((0, u.Wi)(r))
            throw new n.Z(
              'portal-item-resource:fetch',
              'Portal item resource does not refer to a valid item or path',
            );
          return this.portalItem.portal._request(r, {
            responseType: e,
            query: { token: this.portalItem.apiKey },
            signal: (0, u.U2)(t, 'signal'),
          });
        }
        async update(e, t) {
          return (await r.e(7873).then(r.bind(r, 97873))).addOrUpdateResource(
            this,
            'update',
            e,
            t,
          );
        }
        hasPath() {
          return (0, u.pC)(this.path);
        }
        _normalizePath(e, t) {
          return (0, u.Wi)(e)
            ? e
            : ((e = e.replace(/^\/+/, '')),
              (0, u.pC)(t) && (0, d.YP)(e) && (e = (0, d.PF)(e, t.itemUrl)),
              e.replace(/^\/+/, '').replace(/^(\.\/)?resources\//, ''));
        }
      };
      (0, i._)([(0, c.Cb)()], S.prototype, 'portalItem', void 0),
        (0, i._)(
          [(0, c.Cb)({ type: String, value: null })],
          S.prototype,
          'path',
          null,
        ),
        (0, i._)([(0, b.p)('path')], S.prototype, '_castPath', null),
        (0, i._)(
          [(0, c.Cb)({ type: String, readOnly: !0 })],
          S.prototype,
          'url',
          null,
        ),
        (0, i._)(
          [(0, c.Cb)({ type: String, readOnly: !0 })],
          S.prototype,
          'itemRelativeUrl',
          null,
        ),
        (S = (0, i._)([(0, f.j)('esri.portal.PortalItemResource')], S));
      const v = S;
      let F = class extends _.Z {
        constructor(e) {
          super(e), (this.created = null), (this.rating = null);
        }
      };
      (0, i._)([(0, c.Cb)()], F.prototype, 'created', void 0),
        (0, i._)([(0, c.Cb)()], F.prototype, 'rating', void 0),
        (F = (0, i._)([(0, f.j)('esri.portal.PortalRating')], F));
      const I = F;
      var C;
      let x = (C = class extends (0, a.eC)(o.Z) {
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
          return (0, h.TJ)(C, e);
        }
        destroy() {
          this.portal = null;
        }
        get displayName() {
          const e = this.type,
            t = this.typeKeywords || [];
          let r = e;
          return (
            'Feature Service' === e || 'Feature Collection' === e
              ? (r =
                  t.indexOf('Table') > -1
                    ? 'Table'
                    : t.indexOf('Route Layer') > -1
                    ? 'Route Layer'
                    : t.indexOf('Markup') > -1
                    ? 'Markup'
                    : 'Feature Layer')
              : 'Image Service' === e
              ? (r =
                  t.indexOf('Elevation 3D Layer') > -1
                    ? 'Elevation Layer'
                    : t.indexOf('Tiled Imagery') > -1
                    ? 'Tiled Imagery Layer'
                    : 'Imagery Layer')
              : 'Scene Service' === e
              ? (r = 'Scene Layer')
              : 'Media Service' === e
              ? (r = 'Media Layer')
              : 'Scene Package' === e
              ? (r = 'Scene Layer Package')
              : 'Stream Service' === e
              ? (r = 'Feature Layer')
              : 'Geoprocessing Service' === e &&
                this.portal &&
                this.portal.isPortal
              ? (r =
                  t.indexOf('Web Tool') > -1 ? 'Tool' : 'Geoprocessing Service')
              : 'Geocoding Service' === e
              ? (r = 'Locator')
              : 'Geoenrichment Service' === e
              ? (r = 'GeoEnrichment Service')
              : 'Microsoft Powerpoint' === e
              ? (r = 'Microsoft PowerPoint')
              : 'GeoJson' === e
              ? (r = 'GeoJSON')
              : 'Globe Service' === e
              ? (r = 'Globe Layer')
              : 'Vector Tile Service' === e
              ? (r = 'Tile Layer')
              : 'netCDF' === e
              ? (r = 'NetCDF')
              : 'Map Service' === e
              ? (r =
                  -1 === t.indexOf('Spatiotemporal') &&
                  (t.indexOf('Hosted Service') > -1 ||
                    t.indexOf('Tiled') > -1) &&
                  -1 === t.indexOf('Relational')
                    ? 'Tile Layer'
                    : 'Map Image Layer')
              : e && e.toLowerCase().indexOf('add in') > -1
              ? (r = e.replace(/(add in)/gi, 'Add-In'))
              : 'datastore catalog service' === e
              ? (r = 'Big Data File Share')
              : 'Compact Tile Package' === e
              ? (r = 'Tile Package (tpkx)')
              : 'OGCFeatureServer' === e
              ? (r = 'OGC Feature Layer')
              : 'web mapping application' === e &&
                t.indexOf('configurableApp') > -1 &&
                (r = 'Instant App'),
            r
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
          let r,
            i = !1,
            n = !1,
            a = !1,
            l = !1,
            o = !1,
            u = !1;
          return (
            e.indexOf('service') > 0 ||
            'feature collection' === e ||
            'kml' === e ||
            'wms' === e ||
            'wmts' === e ||
            'wfs' === e
              ? ((i = t.indexOf('Hosted Service') > -1),
                'feature service' === e ||
                'feature collection' === e ||
                'kml' === e ||
                'wfs' === e
                  ? ((n = t.indexOf('Table') > -1),
                    (a = t.indexOf('Route Layer') > -1),
                    (l = t.indexOf('Markup') > -1),
                    (o = -1 !== t.indexOf('Spatiotemporal')),
                    (u = -1 !== t.indexOf('UtilityNetwork')),
                    (r =
                      o && n
                        ? 'spatiotemporaltable'
                        : n
                        ? 'table'
                        : a
                        ? 'routelayer'
                        : l
                        ? 'markup'
                        : o
                        ? 'spatiotemporal'
                        : i
                        ? 'featureshosted'
                        : u
                        ? 'utilitynetwork'
                        : 'features'))
                  : (r =
                      'map service' === e || 'wms' === e || 'wmts' === e
                        ? i || t.indexOf('Tiled') > -1 || 'wmts' === e
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
              : (r =
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
            r ? (0, s.V)('esri/images/portal/' + r + '16.png') : null
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
                    signal: (0, u.pC)(e) ? e.signal : null,
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
            e instanceof I && (e = e.rating),
            isNaN(e) || 'number' != typeof e || (t.query.rating = e),
            this.portal
              ._request(this.itemUrl + '/addRating', t)
              .then(() => new I({ rating: e, created: new Date() }))
          );
        }
        clone() {
          const e = {
            access: this.access,
            accessInformation: this.accessInformation,
            applicationProxies: (0, l.d9)(this.applicationProxies),
            avgRating: this.avgRating,
            categories: (0, l.d9)(this.categories),
            created: (0, l.d9)(this.created),
            culture: this.culture,
            description: this.description,
            extent: (0, l.d9)(this.extent),
            groupCategories: (0, l.d9)(this.groupCategories),
            id: this.id,
            itemControl: this.itemControl,
            licenseInfo: this.licenseInfo,
            modified: (0, l.d9)(this.modified),
            name: this.name,
            numComments: this.numComments,
            numRatings: this.numRatings,
            numViews: this.numViews,
            owner: this.owner,
            ownerFolder: this.ownerFolder,
            portal: this.portal,
            screenshots: (0, l.d9)(this.screenshots),
            size: this.size,
            snippet: this.snippet,
            tags: (0, l.d9)(this.tags),
            thumbnail: this.thumbnail,
            title: this.title,
            type: this.type,
            typeKeywords: (0, l.d9)(this.typeKeywords),
            url: this.url,
          };
          return (
            this.loaded && (e.loadStatus = 'loaded'),
            new C({ sourceJSON: this.sourceJSON }).set(e)
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
                ? ((e.created = new Date(e.created)), new I(e))
                : null,
            );
        }
        fetchRelatedItems(e, t) {
          return this.portal._requestToTypedArray(
            this.itemUrl + '/relatedItems',
            { query: { ...e, token: this.apiKey }, ...t },
            C,
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
                    r = { method: 'post' };
                  r.query = this.createPostQuery();
                  for (const e in r.query)
                    null === r.query[e] && (r.query[e] = '');
                  return (
                    (r.query.clearEmptyFields = !0),
                    null != t &&
                      ('string' == typeof t
                        ? (r.query.text = t)
                        : 'object' == typeof t &&
                          (r.query.text = JSON.stringify(t))),
                    this.portal
                      ._request(`${this.userItemUrl}/update`, r)
                      .then(() => this.reload())
                  );
                })
            : Promise.reject(
                new n.Z(
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
                    r = e.filename,
                    i = { method: 'post' };
                  if ('string' == typeof t)
                    (0, d.HK)(t)
                      ? (i.query = { data: t })
                      : (i.query = { url: (0, d.hF)(t) }),
                      (0, u.pC)(r) && (i.query.filename = r);
                  else {
                    const e = new FormData();
                    (0, u.pC)(r) ? e.append('file', t, r) : e.append('file', t),
                      (i.body = e);
                  }
                  return this.portal
                    ._request(`${this.userItemUrl}/updateThumbnail`, i)
                    .then(() => this.reload());
                })
            : Promise.reject(
                new n.Z(
                  'portal:item-does-not-exist',
                  'The item does not exist yet and cannot be updated',
                ),
              );
        }
        async fetchResources(e = {}, t) {
          return (await r.e(7873).then(r.bind(r, 97873))).fetchResources(
            this,
            e,
            t,
          );
        }
        async addResource(e, t, i) {
          const s = await r.e(7873).then(r.bind(r, 97873));
          return (e.portalItem = this), s.addOrUpdateResource(e, 'add', t, i);
        }
        async removeResource(e, t) {
          const i = await r.e(7873).then(r.bind(r, 97873));
          if (e.portalItem && e.portalItem.itemUrl !== this.itemUrl)
            throw new n.Z(
              'removeresource:portal-item-mismatch',
              'The portal item associated with the provided resource does not match the item',
            );
          return i.removeResource(this, e, t);
        }
        async removeAllResources(e) {
          return (await r.e(7873).then(r.bind(r, 97873))).removeAllResources(
            this,
            e,
          );
        }
        resourceFromPath(e) {
          return new v({ portalItem: this, path: e });
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
          return (0, l.yd)(t);
        }
        static fromJSON(e) {
          if (!e) return null;
          if (e.declaredClass)
            throw new Error('JSON object is already hydrated');
          return new C({ sourceJSON: e });
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
      (0, i._)(
        [(0, c.Cb)({ type: ['private', 'shared', 'org', 'public'] })],
        x.prototype,
        'access',
        void 0,
      ),
        (0, i._)([(0, c.Cb)()], x.prototype, 'accessInformation', void 0),
        (0, i._)([(0, c.Cb)({ type: String })], x.prototype, 'apiKey', void 0),
        (0, i._)(
          [(0, c.Cb)({ json: { read: { source: 'appProxies' } } })],
          x.prototype,
          'applicationProxies',
          void 0,
        ),
        (0, i._)([(0, c.Cb)()], x.prototype, 'avgRating', void 0),
        (0, i._)([(0, c.Cb)()], x.prototype, 'categories', void 0),
        (0, i._)([(0, c.Cb)({ type: Date })], x.prototype, 'created', void 0),
        (0, i._)([(0, c.Cb)()], x.prototype, 'culture', void 0),
        (0, i._)([(0, c.Cb)()], x.prototype, 'description', void 0),
        (0, i._)(
          [(0, c.Cb)({ readOnly: !0 })],
          x.prototype,
          'displayName',
          null,
        ),
        (0, i._)([(0, c.Cb)({ type: y.Z })], x.prototype, 'extent', void 0),
        (0, i._)([(0, p.r)('extent')], x.prototype, 'readExtent', null),
        (0, i._)([(0, c.Cb)()], x.prototype, 'groupCategories', void 0),
        (0, i._)([(0, c.Cb)({ readOnly: !0 })], x.prototype, 'iconUrl', null),
        (0, i._)([(0, c.Cb)()], x.prototype, 'id', void 0),
        (0, i._)([(0, c.Cb)({ readOnly: !0 })], x.prototype, 'isLayer', null),
        (0, i._)([(0, c.Cb)()], x.prototype, 'itemControl', void 0),
        (0, i._)([(0, c.Cb)({ readOnly: !0 })], x.prototype, 'itemUrl', null),
        (0, i._)([(0, c.Cb)()], x.prototype, 'licenseInfo', void 0),
        (0, i._)([(0, c.Cb)({ type: Date })], x.prototype, 'modified', void 0),
        (0, i._)([(0, c.Cb)()], x.prototype, 'name', void 0),
        (0, i._)([(0, c.Cb)()], x.prototype, 'numComments', void 0),
        (0, i._)([(0, c.Cb)()], x.prototype, 'numRatings', void 0),
        (0, i._)([(0, c.Cb)()], x.prototype, 'numViews', void 0),
        (0, i._)([(0, c.Cb)()], x.prototype, 'owner', void 0),
        (0, i._)([(0, c.Cb)()], x.prototype, 'ownerFolder', void 0),
        (0, i._)([(0, c.Cb)({ type: g.Z })], x.prototype, 'portal', void 0),
        (0, i._)([(0, c.Cb)()], x.prototype, 'screenshots', void 0),
        (0, i._)([(0, c.Cb)()], x.prototype, 'size', void 0),
        (0, i._)([(0, c.Cb)()], x.prototype, 'snippet', void 0),
        (0, i._)([(0, c.Cb)()], x.prototype, 'sourceJSON', void 0),
        (0, i._)([(0, c.Cb)()], x.prototype, 'tags', void 0),
        (0, i._)([(0, c.Cb)()], x.prototype, 'thumbnail', void 0),
        (0, i._)(
          [(0, c.Cb)({ readOnly: !0 })],
          x.prototype,
          'thumbnailUrl',
          null,
        ),
        (0, i._)([(0, c.Cb)()], x.prototype, 'title', void 0),
        (0, i._)([(0, c.Cb)()], x.prototype, 'type', void 0),
        (0, i._)([(0, c.Cb)()], x.prototype, 'typeKeywords', void 0),
        (0, i._)([(0, c.Cb)()], x.prototype, 'url', void 0),
        (0, i._)(
          [(0, c.Cb)({ readOnly: !0 })],
          x.prototype,
          'userItemUrl',
          null,
        ),
        (x = C = (0, i._)([(0, f.j)('esri.portal.PortalItem')], x));
      const D = x;
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
    28101: (e, t, r) => {
      r.d(t, {
        PR: () => v,
        Lq: () => f,
        Km: () => y,
        cM: () => g,
        ap: () => _,
        V3: () => w,
        B3: () => p,
      });
      var i = r(22303),
        s = r(38171),
        n = r(74085),
        a = r(92604),
        l = r(70586),
        o = r(99282),
        u = r(51706);
      const d = a.Z.getLogger(
          'esri.renderers.visualVariables.support.visualVariableUtils',
        ),
        c = new s.Z(),
        h = Math.PI,
        p = /^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i;
      function f(e, t, r) {
        const s =
          'visualVariables' in e && e.visualVariables
            ? e.visualVariables.find((e) => 'color' === e.type)
            : e;
        if (!s) return;
        if ('esri.renderers.visualVariables.ColorVariable' !== s.declaredClass)
          return void d.warn(
            'The visualVariable should be an instance of esri.renderers.visualVariables.ColorVariable',
          );
        const n = 'number' == typeof t,
          a = n ? null : t,
          o = a && a.attributes;
        let u = n ? t : null;
        const c = s.field,
          { ipData: h, hasExpression: p } = s.cache;
        let f = s.cache.compiledFunc;
        if (!c && !p) {
          const e = s.stops;
          return e && e[0] && e[0].color;
        }
        if ('number' != typeof u)
          if (p) {
            if (!(0, l.pC)(r) || !(0, l.pC)(r.arcade))
              return void d.error(
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
            if (!f) {
              const e = t.createSyntaxTree(s.valueExpression);
              (f = t.createFunction(e)), (s.cache.compiledFunc = f);
            }
            u = t.executeFunction(f, n);
          } else o && (u = o[c]);
        const y = s.normalizationField,
          g = o ? parseFloat(o[y]) : void 0;
        if (null != u && (!y || n || (!isNaN(g) && 0 !== g))) {
          isNaN(g) || n || (u /= g);
          const e = S(u, h);
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
                      (0, l.pC)(r) ? r.color : void 0,
                    );
            return new i.Z(a);
          }
        }
      }
      function y(e, t, r) {
        const i =
          'visualVariables' in e && e.visualVariables
            ? e.visualVariables.find((e) => 'opacity' === e.type)
            : e;
        if (!i) return;
        if (
          'esri.renderers.visualVariables.OpacityVariable' !== i.declaredClass
        )
          return void d.warn(
            'The visualVariable should be an instance of esri.renderers.visualVariables.OpacityVariable',
          );
        const s = 'number' == typeof t,
          n = s ? null : t,
          a = n && n.attributes;
        let o = s ? t : null;
        const u = i.field,
          { ipData: c, hasExpression: h } = i.cache;
        let p = i.cache.compiledFunc;
        if (!u && !h) {
          const e = i.stops;
          return e && e[0] && e[0].opacity;
        }
        if ('number' != typeof o)
          if (h) {
            if ((0, l.Wi)(r) || (0, l.Wi)(r.arcade))
              return void d.error(
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
            if (!p) {
              const e = t.createSyntaxTree(i.valueExpression);
              (p = t.createFunction(e)), (i.cache.compiledFunc = p);
            }
            o = t.executeFunction(p, a);
          } else a && (o = a[u]);
        const f = i.normalizationField,
          y = a ? parseFloat(a[f]) : void 0;
        if (null != o && (!f || s || (!isNaN(y) && 0 !== y))) {
          isNaN(y) || s || (o /= y);
          const e = S(o, c);
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
      function g(e, t, r) {
        const i =
          'visualVariables' in e && e.visualVariables
            ? e.visualVariables.find((e) => 'rotation' === e.type)
            : e;
        if (!i) return;
        if (
          'esri.renderers.visualVariables.RotationVariable' !== i.declaredClass
        )
          return void d.warn(
            'The visualVariable should be an instance of esri.renderers.visualVariables.RotationVariable',
          );
        const s = i.axis || 'heading',
          n = 'heading' === s && 'arithmetic' === i.rotationType ? 90 : 0,
          a = 'heading' === s && 'arithmetic' === i.rotationType ? -1 : 1,
          o = 'number' == typeof t ? null : t,
          u = o && o.attributes,
          c = i.field,
          { hasExpression: h } = i.cache;
        let p = i.cache.compiledFunc,
          f = 0;
        if (!c && !h) return f;
        if (h) {
          if ((0, l.Wi)(r) || (0, l.Wi)(r.arcade))
            return void d.error(
              'Use of arcade expressions requires an arcade context',
            );
          const e = {
              viewingMode: r.viewingMode,
              scale: r.scale,
              spatialReference: r.spatialReference,
            },
            t = r.arcade.arcadeUtils,
            s = t.getViewInfo(e),
            n = t.createExecContext(o, s);
          if (!p) {
            const e = t.createSyntaxTree(i.valueExpression);
            (p = t.createFunction(e)), (i.cache.compiledFunc = p);
          }
          f = t.executeFunction(p, n);
        } else u && (f = u[c] || 0);
        return (f = 'number' != typeof f || isNaN(f) ? null : n + a * f), f;
      }
      function _(e, t, r) {
        const i =
          'visualVariables' in e && e.visualVariables
            ? e.visualVariables.find((e) => 'size' === e.type)
            : e;
        if (!i) return;
        if ('esri.renderers.visualVariables.SizeVariable' !== i.declaredClass)
          return void d.warn(
            'The visualVariable should be an instance of esri.renderers.visualVariables.SizeVariable',
          );
        const s = (function (e, t, r, i, s) {
          switch (t.transformationType) {
            case u.hL.Additive:
              return (function (e, t, r, i) {
                return e + (m(t.minSize, r, i) || t.minDataValue);
              })(e, t, r, i);
            case u.hL.Constant:
              return (function (e, t, r) {
                const i = e.stops;
                let s = i && i.length && i[0].size;
                return null == s && (s = e.minSize), m(s, t, r);
              })(t, r, i);
            case u.hL.ClampedLinear:
              return (function (e, t, r, i) {
                const s =
                    (e - t.minDataValue) / (t.maxDataValue - t.minDataValue),
                  n = m(t.minSize, r, i),
                  a = m(t.maxSize, r, i),
                  o = (0, l.pC)(i) ? i.shape : void 0;
                if (e <= t.minDataValue) return n;
                if (e >= t.maxDataValue) return a;
                if ('area' === t.scaleBy && o) {
                  const e = 'circle' === o,
                    t = e ? h * (n / 2) ** 2 : n * n,
                    r = t + s * ((e ? h * (a / 2) ** 2 : a * a) - t);
                  return e ? 2 * Math.sqrt(r / h) : Math.sqrt(r);
                }
                return n + s * (a - n);
              })(e, t, r, i);
            case u.hL.Proportional:
              return (function (e, t, r, i) {
                const s = (0, l.pC)(i) ? i.shape : void 0,
                  n = e / t.minDataValue,
                  a = m(t.minSize, r, i),
                  o = m(t.maxSize, r, i);
                let u = null;
                return (
                  (u =
                    'circle' === s
                      ? 2 * Math.sqrt(n * (a / 2) ** 2)
                      : 'square' === s || 'diamond' === s || 'image' === s
                      ? Math.sqrt(n * a ** 2)
                      : n * a),
                  b(u, a, o)
                );
              })(e, t, r, i);
            case u.hL.Stops:
              return (function (e, t, r, i, s) {
                const [n, a, l] = S(e, s);
                if (n === a) return m(t.stops[n].size, r, i);
                {
                  const e = m(t.stops[n].size, r, i);
                  return e + (m(t.stops[a].size, r, i) - e) * l;
                }
              })(e, t, r, i, s);
            case u.hL.RealWorldSize:
              return (function (e, t, r, i) {
                const s =
                    ((0, l.pC)(i) && i.resolution ? i.resolution : 1) *
                    o.a[t.valueUnit],
                  n = m(t.minSize, r, i),
                  a = m(t.maxSize, r, i),
                  { valueRepresentation: u } = t;
                let d = null;
                return (
                  (d =
                    'area' === u
                      ? (2 * Math.sqrt(e / h)) / s
                      : 'radius' === u || 'distance' === u
                      ? (2 * e) / s
                      : e / s),
                  b(d, n, a)
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
            const { isScaleDriven: o } = e.cache;
            let c = e.cache.compiledFunc;
            if (o) {
              const t = (0, l.pC)(r) ? r.scale : void 0,
                i = (0, l.pC)(r) ? r.view : void 0;
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
                  if ((0, l.Wi)(r) || (0, l.Wi)(r.arcade))
                    return void d.error(
                      'Use of arcade expressions requires an arcade context',
                    );
                  const t = {
                      viewingMode: r.viewingMode,
                      scale: r.scale,
                      spatialReference: r.spatialReference,
                    },
                    i = r.arcade.arcadeUtils,
                    n = i.getViewInfo(t),
                    o = i.createExecContext(s, n);
                  if (!c) {
                    const t = i.createSyntaxTree(e.valueExpression);
                    (c = i.createFunction(t)), (e.cache.compiledFunc = c);
                  }
                  a = i.executeFunction(c, o);
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
            const h = n ? parseFloat(n[e.normalizationField]) : null;
            return (0, u.qh)(h) && 0 !== h ? a / h : null;
          })(i, t, r),
          i,
          t,
          r,
          i.cache.ipData,
        );
        return null == s || isNaN(s) ? 0 : s;
      }
      function m(e, t, r) {
        return null == e
          ? null
          : (0, u.iY)(e)
          ? _(e, t, r)
          : (0, u.qh)(e)
          ? e
          : null;
      }
      function b(e, t, r) {
        return (0, u.qh)(r) && e > r ? r : (0, u.qh)(t) && e < t ? t : e;
      }
      function w(e, t, r) {
        const { isScaleDriven: i } = e.cache;
        if (!((i && '3d' === r) || t)) return null;
        const s = { scale: t, view: r };
        let n = m(e.minSize, c, s),
          a = m(e.maxSize, c, s);
        if (null != n || null != a) {
          if (n > a) {
            const e = a;
            (a = n), (n = e);
          }
          return { minSize: n, maxSize: a };
        }
      }
      function S(e, t) {
        if (!t) return;
        let r = 0,
          i = t.length - 1;
        return (
          t.some((t, s) => (e < t ? ((i = s), !0) : ((r = s), !1))),
          [r, i, (e - t[r]) / (t[i] - t[r])]
        );
      }
      function v(e, t, r) {
        const i = ['proportional', 'proportional', 'proportional'];
        for (const s of e) {
          const e = s.useSymbolValue ? 'symbol-value' : _(s, t, r);
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
    41818: (e, t, r) => {
      r.d(t, { P: () => a });
      var i = r(11282),
        s = r(34599),
        n = r(57444);
      async function a(e, t, r) {
        const a = (0, i.en)(e);
        return (0, s.executeQueryForCount)(a, n.Z.from(t), { ...r }).then(
          (e) => e.data.count,
        );
      }
    },
    5396: (e, t, r) => {
      r.d(t, { G: () => a });
      var i = r(11282),
        s = r(34599),
        n = r(57444);
      async function a(e, t, r) {
        const a = (0, i.en)(e);
        return (0, s.executeQueryForIds)(a, n.Z.from(t), { ...r }).then(
          (e) => e.data.objectIds,
        );
      }
    },
    4967: (e, t, r) => {
      r.d(t, { e: () => l, F: () => o });
      var i = r(11282),
        s = r(34599),
        n = r(74889),
        a = r(57444);
      async function l(e, t, r) {
        const i = await o(e, t, r);
        return n.default.fromJSON(i);
      }
      async function o(e, t, r) {
        const n = (0, i.en)(e),
          l = { ...r },
          o = a.Z.from(t),
          { data: u } = await (0, s.executeQuery)(
            n,
            o,
            o.sourceSpatialReference,
            l,
          );
        return u;
      }
    },
    98326: (e, t, r) => {
      r.d(t, { Z: () => c });
      var i,
        s = r(43697),
        n = r(96674),
        a = r(5600),
        l = (r(67676), r(80442), r(75215)),
        o = r(52011);
      const u = {
        1: { id: 1, rotation: 0, mirrored: !1 },
        2: { id: 2, rotation: 0, mirrored: !0 },
        3: { id: 3, rotation: 180, mirrored: !1 },
        4: { id: 4, rotation: 180, mirrored: !0 },
        5: { id: 5, rotation: -90, mirrored: !0 },
        6: { id: 6, rotation: 90, mirrored: !1 },
        7: { id: 7, rotation: 90, mirrored: !0 },
        8: { id: 8, rotation: -90, mirrored: !1 },
      };
      let d = (i = class extends n.wq {
        constructor(e) {
          super(e),
            (this.contentType = null),
            (this.exifInfo = null),
            (this.id = null),
            (this.globalId = null),
            (this.keywords = null),
            (this.name = null),
            (this.parentGlobalId = null),
            (this.parentObjectId = null),
            (this.size = null),
            (this.url = null);
        }
        get orientationInfo() {
          const { exifInfo: e } = this,
            t = (function (e) {
              const { exifInfo: t, exifName: r, tagName: i } = e;
              if (!t || !r || !i) return null;
              const s = t.find((e) => e.name === r);
              return s
                ? (function (e) {
                    const { tagName: t, tags: r } = e;
                    if (!r || !t) return null;
                    const i = r.find((e) => e.name === t);
                    return (i && i.value) || null;
                  })({ tagName: i, tags: s.tags })
                : null;
            })({ exifName: 'Exif IFD0', tagName: 'Orientation', exifInfo: e });
          return u[t] || null;
        }
        clone() {
          return new i({
            contentType: this.contentType,
            exifInfo: this.exifInfo,
            id: this.id,
            globalId: this.globalId,
            keywords: this.keywords,
            name: this.name,
            parentGlobalId: this.parentGlobalId,
            parentObjectId: this.parentObjectId,
            size: this.size,
            url: this.url,
          });
        }
      });
      (0, s._)(
        [(0, a.Cb)({ type: String })],
        d.prototype,
        'contentType',
        void 0,
      ),
        (0, s._)([(0, a.Cb)()], d.prototype, 'exifInfo', void 0),
        (0, s._)(
          [(0, a.Cb)({ readOnly: !0 })],
          d.prototype,
          'orientationInfo',
          null,
        ),
        (0, s._)([(0, a.Cb)({ type: l.z8 })], d.prototype, 'id', void 0),
        (0, s._)(
          [(0, a.Cb)({ type: String })],
          d.prototype,
          'globalId',
          void 0,
        ),
        (0, s._)(
          [(0, a.Cb)({ type: String })],
          d.prototype,
          'keywords',
          void 0,
        ),
        (0, s._)([(0, a.Cb)({ type: String })], d.prototype, 'name', void 0),
        (0, s._)(
          [(0, a.Cb)({ json: { read: !1 } })],
          d.prototype,
          'parentGlobalId',
          void 0,
        ),
        (0, s._)(
          [(0, a.Cb)({ json: { read: !1 } })],
          d.prototype,
          'parentObjectId',
          void 0,
        ),
        (0, s._)([(0, a.Cb)({ type: l.z8 })], d.prototype, 'size', void 0),
        (0, s._)(
          [(0, a.Cb)({ json: { read: !1 } })],
          d.prototype,
          'url',
          void 0,
        ),
        (d = i = (0, s._)([(0, o.j)('esri.layers.support.AttachmentInfo')], d));
      const c = d;
    },
    11282: (e, t, r) => {
      r.d(t, { lA: () => s, cv: () => a, en: () => n });
      var i = r(17452);
      function s(e, t) {
        return t ? { ...t, query: { ...e, ...t.query } } : { query: e };
      }
      function n(e) {
        return 'string' == typeof e ? (0, i.mN)(e) : e;
      }
      function a(e, t, r) {
        const i = {};
        for (const s in e) {
          if ('declaredClass' === s) continue;
          const n = e[s];
          if (null != n && 'function' != typeof n)
            if (Array.isArray(n)) {
              i[s] = [];
              for (let e = 0; e < n.length; e++) i[s][e] = a(n[e]);
            } else if ('object' == typeof n)
              if (n.toJSON) {
                const e = n.toJSON(r && r[s]);
                i[s] = t ? e : JSON.stringify(e);
              } else i[s] = t ? n : JSON.stringify(n);
            else i[s] = n;
        }
        return i;
      }
      r(91040);
    },
    58333: (e, t, r) => {
      r.d(t, {
        I4: () => s,
        lF: () => a,
        ET: () => n,
        qP: () => l,
        eG: () => o,
        lj: () => d,
        wW: () => u,
      });
      const i = [252, 146, 31, 255],
        s = {
          type: 'esriSMS',
          style: 'esriSMSCircle',
          size: 6,
          color: i,
          outline: {
            type: 'esriSLS',
            style: 'esriSLSSolid',
            width: 0.75,
            color: [153, 153, 153, 255],
          },
        },
        n = { type: 'esriSLS', style: 'esriSLSSolid', width: 0.75, color: i },
        a = {
          type: 'esriSFS',
          style: 'esriSFSSolid',
          color: [252, 146, 31, 196],
          outline: {
            type: 'esriSLS',
            style: 'esriSLSSolid',
            width: 0.75,
            color: [255, 255, 255, 191],
          },
        },
        l = {
          type: 'esriTS',
          color: [255, 255, 255, 255],
          font: { family: 'arial-unicode-ms', size: 10, weight: 'bold' },
          horizontalAlignment: 'center',
          kerning: !0,
          haloColor: [0, 0, 0, 255],
          haloSize: 1,
          rotated: !1,
          text: '',
          xoffset: 0,
          yoffset: 0,
          angle: 0,
        },
        o = {
          type: 'esriSMS',
          style: 'esriSMSCircle',
          color: [0, 0, 0, 255],
          outline: null,
          size: 10.5,
        },
        u = {
          type: 'esriSLS',
          style: 'esriSLSSolid',
          color: [0, 0, 0, 255],
          width: 1.5,
        },
        d = {
          type: 'esriSFS',
          style: 'esriSFSSolid',
          color: [0, 0, 0, 255],
          outline: null,
        };
    },
  },
]);
