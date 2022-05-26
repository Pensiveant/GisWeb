'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [7845],
  {
    24133: (e, t, i) => {
      i.d(t, { Q: () => a });
      var n = i(67676),
        s = i(70586),
        r = i(44553),
        o = i(88764);
      class a {
        constructor(e = 9, t) {
          (this.compareMinX = h),
            (this.compareMinY = c),
            (this._toBBox = function (e) {
              return e;
            }),
            (this._maxEntries = Math.max(4, e || 9)),
            (this._minEntries = Math.max(2, Math.ceil(0.4 * this._maxEntries))),
            t &&
              ('function' == typeof t
                ? (this._toBBox = t)
                : this._initFormat(t)),
            this.clear();
        }
        destroy() {
          this.clear(), x.prune(), b.prune(), S.prune(), w.prune();
        }
        all(e) {
          this._all(this.data, e);
        }
        search(e, t) {
          let i = this.data;
          const n = this._toBBox;
          if (_(e, i))
            for (x.clear(); i; ) {
              for (let s = 0, r = i.children.length; s < r; s++) {
                const r = i.children[s],
                  o = i.leaf ? n(r) : r;
                _(e, o) &&
                  (i.leaf ? t(r) : g(e, o) ? this._all(r, t) : x.push(r));
              }
              i = x.pop();
            }
        }
        collides(e) {
          let t = this.data;
          const i = this._toBBox;
          if (!_(e, t)) return !1;
          for (x.clear(); t; ) {
            for (let n = 0, s = t.children.length; n < s; n++) {
              const s = t.children[n],
                r = t.leaf ? i(s) : s;
              if (_(e, r)) {
                if (t.leaf || g(e, r)) return !0;
                x.push(s);
              }
            }
            t = x.pop();
          }
          return !1;
        }
        load(e) {
          if (!e.length) return this;
          if (e.length < this._minEntries) {
            for (let t = 0, i = e.length; t < i; t++) this.insert(e[t]);
            return this;
          }
          let t = this._build(e.slice(0, e.length), 0, e.length - 1, 0);
          if (this.data.children.length)
            if (this.data.height === t.height) this._splitRoot(this.data, t);
            else {
              if (this.data.height < t.height) {
                const e = this.data;
                (this.data = t), (t = e);
              }
              this._insert(t, this.data.height - t.height - 1, !0);
            }
          else this.data = t;
          return this;
        }
        insert(e) {
          return e && this._insert(e, this.data.height - 1), this;
        }
        clear() {
          return (this.data = new B([])), this;
        }
        remove(e) {
          if (!e) return this;
          let t,
            i = this.data,
            r = null,
            o = 0,
            a = !1;
          const l = this._toBBox(e);
          for (S.clear(), w.clear(); i || S.length > 0; ) {
            var u;
            if (
              (i ||
                ((i = (0, s.j0)(S.pop())),
                (r = S.data[S.length - 1]),
                (o = null != (u = w.pop()) ? u : 0),
                (a = !0)),
              i.leaf &&
                ((t = (0, n.cq)(i.children, e, i.children.length, i.indexHint)),
                -1 !== t))
            )
              return (
                i.children.splice(t, 1), S.push(i), this._condense(S), this
              );
            a || i.leaf || !g(i, l)
              ? r
                ? (o++, (i = r.children[o]), (a = !1))
                : (i = null)
              : (S.push(i), w.push(o), (o = 0), (r = i), (i = i.children[0]));
          }
          return this;
        }
        toJSON() {
          return this.data;
        }
        fromJSON(e) {
          return (this.data = e), this;
        }
        _all(e, t) {
          let i = e;
          for (b.clear(); i; ) {
            var n;
            if (!0 === i.leaf) for (const e of i.children) t(e);
            else b.pushArray(i.children);
            i = null != (n = b.pop()) ? n : null;
          }
        }
        _build(e, t, i, n) {
          const s = i - t + 1;
          let r = this._maxEntries;
          if (s <= r) {
            const n = new B(e.slice(t, i + 1));
            return l(n, this._toBBox), n;
          }
          n ||
            ((n = Math.ceil(Math.log(s) / Math.log(r))),
            (r = Math.ceil(s / r ** (n - 1))));
          const o = new E([]);
          o.height = n;
          const a = Math.ceil(s / r),
            u = a * Math.ceil(Math.sqrt(r));
          I(e, t, i, u, this.compareMinX);
          for (let s = t; s <= i; s += u) {
            const t = Math.min(s + u - 1, i);
            I(e, s, t, a, this.compareMinY);
            for (let i = s; i <= t; i += a) {
              const s = Math.min(i + a - 1, t);
              o.children.push(this._build(e, i, s, n - 1));
            }
          }
          return l(o, this._toBBox), o;
        }
        _chooseSubtree(e, t, i, n) {
          for (; n.push(t), !0 !== t.leaf && n.length - 1 !== i; ) {
            let i,
              n = 1 / 0,
              s = 1 / 0;
            for (let r = 0, o = t.children.length; r < o; r++) {
              const o = t.children[r],
                a = p(o),
                l = y(e, o) - a;
              l < s
                ? ((s = l), (n = a < n ? a : n), (i = o))
                : l === s && a < n && ((n = a), (i = o));
            }
            t = i || t.children[0];
          }
          return t;
        }
        _insert(e, t, i) {
          const n = this._toBBox,
            s = i ? e : n(e);
          S.clear();
          const r = this._chooseSubtree(s, this.data, t, S);
          for (
            r.children.push(e), d(r, s);
            t >= 0 && S.data[t].children.length > this._maxEntries;

          )
            this._split(S, t), t--;
          this._adjustParentBBoxes(s, S, t);
        }
        _split(e, t) {
          const i = e.data[t],
            n = i.children.length,
            s = this._minEntries;
          this._chooseSplitAxis(i, s, n);
          const r = this._chooseSplitIndex(i, s, n);
          if (!r)
            return void console.log(
              '  Error: assertion failed at PooledRBush._split: no valid split index',
            );
          const o = i.children.splice(r, i.children.length - r),
            a = i.leaf ? new B(o) : new E(o);
          (a.height = i.height),
            l(i, this._toBBox),
            l(a, this._toBBox),
            t ? e.data[t - 1].children.push(a) : this._splitRoot(i, a);
        }
        _splitRoot(e, t) {
          (this.data = new E([e, t])),
            (this.data.height = e.height + 1),
            l(this.data, this._toBBox);
        }
        _chooseSplitIndex(e, t, i) {
          let n, s, r;
          n = s = 1 / 0;
          for (let o = t; o <= i - t; o++) {
            const t = u(e, 0, o, this._toBBox),
              a = u(e, o, i, this._toBBox),
              l = m(t, a),
              d = p(t) + p(a);
            l < n
              ? ((n = l), (r = o), (s = d < s ? d : s))
              : l === n && d < s && ((s = d), (r = o));
          }
          return r;
        }
        _chooseSplitAxis(e, t, i) {
          const n = e.leaf ? this.compareMinX : h,
            s = e.leaf ? this.compareMinY : c;
          this._allDistMargin(e, t, i, n) < this._allDistMargin(e, t, i, s) &&
            e.children.sort(n);
        }
        _allDistMargin(e, t, i, n) {
          e.children.sort(n);
          const s = this._toBBox,
            r = u(e, 0, t, s),
            o = u(e, i - t, i, s);
          let a = f(r) + f(o);
          for (let n = t; n < i - t; n++) {
            const t = e.children[n];
            d(r, e.leaf ? s(t) : t), (a += f(r));
          }
          for (let n = i - t - 1; n >= t; n--) {
            const t = e.children[n];
            d(o, e.leaf ? s(t) : t), (a += f(o));
          }
          return a;
        }
        _adjustParentBBoxes(e, t, i) {
          for (let n = i; n >= 0; n--) d(t.data[n], e);
        }
        _condense(e) {
          for (let t = e.length - 1; t >= 0; t--) {
            const i = e.data[t];
            if (0 === i.children.length)
              if (t > 0) {
                const s = e.data[t - 1],
                  r = s.children;
                r.splice((0, n.cq)(r, i, r.length, s.indexHint), 1);
              } else this.clear();
            else l(i, this._toBBox);
          }
        }
        _initFormat(e) {
          const t = ['return a', ' - b', ';'];
          (this.compareMinX = new Function('a', 'b', t.join(e[0]))),
            (this.compareMinY = new Function('a', 'b', t.join(e[1]))),
            (this._toBBox = new Function(
              'a',
              'return {minX: a' +
                e[0] +
                ', minY: a' +
                e[1] +
                ', maxX: a' +
                e[2] +
                ', maxY: a' +
                e[3] +
                '};',
            ));
        }
      }
      function l(e, t) {
        u(e, 0, e.children.length, t, e);
      }
      function u(e, t, i, n, s) {
        s || (s = new B([])),
          (s.minX = 1 / 0),
          (s.minY = 1 / 0),
          (s.maxX = -1 / 0),
          (s.maxY = -1 / 0);
        for (let r, o = t; o < i; o++)
          (r = e.children[o]), d(s, e.leaf ? n(r) : r);
        return s;
      }
      function d(e, t) {
        (e.minX = Math.min(e.minX, t.minX)),
          (e.minY = Math.min(e.minY, t.minY)),
          (e.maxX = Math.max(e.maxX, t.maxX)),
          (e.maxY = Math.max(e.maxY, t.maxY));
      }
      function h(e, t) {
        return e.minX - t.minX;
      }
      function c(e, t) {
        return e.minY - t.minY;
      }
      function p(e) {
        return (e.maxX - e.minX) * (e.maxY - e.minY);
      }
      function f(e) {
        return e.maxX - e.minX + (e.maxY - e.minY);
      }
      function y(e, t) {
        return (
          (Math.max(t.maxX, e.maxX) - Math.min(t.minX, e.minX)) *
          (Math.max(t.maxY, e.maxY) - Math.min(t.minY, e.minY))
        );
      }
      function m(e, t) {
        const i = Math.max(e.minX, t.minX),
          n = Math.max(e.minY, t.minY),
          s = Math.min(e.maxX, t.maxX),
          r = Math.min(e.maxY, t.maxY);
        return Math.max(0, s - i) * Math.max(0, r - n);
      }
      function g(e, t) {
        return (
          e.minX <= t.minX &&
          e.minY <= t.minY &&
          t.maxX <= e.maxX &&
          t.maxY <= e.maxY
        );
      }
      function _(e, t) {
        return (
          t.minX <= e.maxX &&
          t.minY <= e.maxY &&
          t.maxX >= e.minX &&
          t.maxY >= e.minY
        );
      }
      function I(e, t, i, n, r) {
        const a = [t, i];
        for (; a.length; ) {
          const t = (0, s.j0)(a.pop()),
            i = (0, s.j0)(a.pop());
          if (t - i <= n) continue;
          const l = i + Math.ceil((t - i) / n / 2) * n;
          (0, o.q)(e, l, i, t, r), a.push(i, l, l, t);
        }
      }
      const x = new r.Z(),
        b = new r.Z(),
        S = new r.Z(),
        w = new r.Z({ deallocator: void 0 });
      class F extends class {
        constructor() {
          (this.minX = 1 / 0),
            (this.minY = 1 / 0),
            (this.maxX = -1 / 0),
            (this.maxY = -1 / 0);
        }
      } {
        constructor() {
          super(...arguments), (this.height = 1), (this.indexHint = new n.SO());
        }
      }
      class B extends F {
        constructor(e) {
          super(), (this.children = e), (this.leaf = !0);
        }
      }
      class E extends F {
        constructor(e) {
          super(), (this.children = e), (this.leaf = !1);
        }
      }
    },
    37549: (e, t, i) => {
      i.d(t, { H: () => o });
      var n = i(80442),
        s = i(24133);
      const r = { minX: 0, minY: 0, maxX: 0, maxY: 0 };
      class o {
        constructor() {
          (this._indexInvalid = !1),
            (this._boundsToLoad = []),
            (this._boundsById = new Map()),
            (this._idByBounds = new Map()),
            (this._index = new s.Q(
              9,
              (0, n.Z)('esri-csp-restrictions')
                ? (e) => ({ minX: e[0], minY: e[1], maxX: e[2], maxY: e[3] })
                : ['[0]', '[1]', '[2]', '[3]'],
            )),
            (this._loadIndex = () => {
              if (this._indexInvalid) {
                const e = new Array(this._idByBounds.size);
                let t = 0;
                this._idByBounds.forEach((i, n) => {
                  e[t++] = n;
                }),
                  (this._indexInvalid = !1),
                  this._index.clear(),
                  this._index.load(e);
              } else
                this._boundsToLoad.length &&
                  (this._index.load(
                    this._boundsToLoad.filter((e) => this._idByBounds.has(e)),
                  ),
                  (this._boundsToLoad.length = 0));
            });
        }
        clear() {
          (this._indexInvalid = !1),
            (this._boundsToLoad.length = 0),
            this._boundsById.clear(),
            this._idByBounds.clear(),
            this._index.clear();
        }
        delete(e) {
          const t = this._boundsById.get(e);
          this._boundsById.delete(e),
            t &&
              (this._idByBounds.delete(t),
              this._indexInvalid || this._index.remove(t));
        }
        forEachInBounds(e, t) {
          this._loadIndex(),
            (function (e, t, i) {
              (r.minX = t[0]),
                (r.minY = t[1]),
                (r.maxX = t[2]),
                (r.maxY = t[3]),
                e.search(r, i);
            })(this._index, e, (e) => t(this._idByBounds.get(e)));
        }
        get(e) {
          return this._boundsById.get(e);
        }
        has(e) {
          return this._boundsById.has(e);
        }
        invalidateIndex() {
          this._indexInvalid ||
            ((this._indexInvalid = !0), (this._boundsToLoad.length = 0));
        }
        set(e, t) {
          if (!this._indexInvalid) {
            const t = this._boundsById.get(e);
            t && (this._index.remove(t), this._idByBounds.delete(t));
          }
          this._boundsById.set(e, t),
            t &&
              (this._idByBounds.set(t, e),
              this._indexInvalid ||
                (this._boundsToLoad.push(t),
                this._boundsToLoad.length > 5e4 && this._loadIndex()));
        }
      }
    },
    57191: (e, t, i) => {
      i.d(t, { Z: () => y });
      var n = i(20102),
        s = i(32448),
        r = i(92604),
        o = i(70586),
        a = i(60437),
        l = i(24470),
        u = i(98732),
        d = i(37549),
        h = i(29730),
        c = i(70272),
        p = i(5428);
      const f = {
        getObjectId: (e) => e.objectId,
        getAttributes: (e) => e.attributes,
        getAttribute: (e, t) => e.attributes[t],
        cloneWithGeometry: (e, t) =>
          new c.u_(t, e.attributes, null, e.objectId),
        getGeometry: (e) => e.geometry,
        getCentroid: (e, t) => (
          (0, o.Wi)(e.centroid) &&
            (e.centroid = (0, h.Y)(new p.Z(), e.geometry, t.hasZ, t.hasM)),
          e.centroid
        ),
      };
      class y {
        constructor(e) {
          (this.geometryInfo = e),
            (this._boundsStore = new d.H()),
            (this._featuresById = new Map()),
            (this._markedIds = new Set()),
            (this.events = new s.Z()),
            (this.featureAdapter = f);
        }
        get geometryType() {
          return this.geometryInfo.geometryType;
        }
        get hasM() {
          return this.geometryInfo.hasM;
        }
        get hasZ() {
          return this.geometryInfo.hasZ;
        }
        get numFeatures() {
          return this._featuresById.size;
        }
        get fullBounds() {
          if (!this.numFeatures) return null;
          const e = (0, l.Ue)(l.Gv);
          return (
            this._featuresById.forEach((t) => {
              const i = this._boundsStore.get(t.objectId);
              i &&
                ((e[0] = Math.min(i[0], e[0])),
                (e[1] = Math.min(i[1], e[1])),
                (e[2] = Math.max(i[2], e[2])),
                (e[3] = Math.max(i[3], e[3])));
            }),
            e
          );
        }
        get storeStatistics() {
          let e = 0;
          return (
            this._featuresById.forEach((t) => {
              (0, o.pC)(t.geometry) &&
                t.geometry.coords &&
                (e += t.geometry.coords.length);
            }),
            {
              featureCount: this._featuresById.size,
              vertexCount:
                e / (this.hasZ ? (this.hasM ? 4 : 3) : this.hasM ? 3 : 2),
            }
          );
        }
        add(e) {
          this._add(e), this._emitChanged();
        }
        addMany(e) {
          for (const t of e) this._add(t);
          this._emitChanged();
        }
        clear() {
          this._featuresById.clear(),
            this._boundsStore.clear(),
            this._emitChanged();
        }
        removeById(e) {
          const t = this._featuresById.get(e);
          return t ? (this._remove(t), this._emitChanged(), t) : null;
        }
        removeManyById(e) {
          this._boundsStore.invalidateIndex();
          for (const t of e) {
            const e = this._featuresById.get(t);
            e && this._remove(e);
          }
          this._emitChanged();
        }
        forEachBounds(e, t, i) {
          for (const n of e) {
            const e = this._boundsStore.get(n.objectId);
            e && t((0, a.JR)(i, e));
          }
        }
        getFeature(e) {
          return this._featuresById.get(e);
        }
        has(e) {
          return this._featuresById.has(e);
        }
        forEach(e) {
          this._featuresById.forEach((t) => e(t));
        }
        forEachInBounds(e, t) {
          this._boundsStore.forEachInBounds(e, (e) => {
            t(this._featuresById.get(e));
          });
        }
        startMarkingUsedFeatures() {
          this._boundsStore.invalidateIndex(), this._markedIds.clear();
        }
        sweep() {
          let e = !1;
          this._featuresById.forEach((t, i) => {
            this._markedIds.has(i) || ((e = !0), this._remove(t));
          }),
            this._markedIds.clear(),
            e && this._emitChanged();
        }
        _emitChanged() {
          this.events.emit('changed', void 0);
        }
        _add(e) {
          if (!e) return;
          const t = e.objectId;
          if (null == t)
            return void r.Z.getLogger(
              'esri.layers.graphics.data.FeatureStore',
            ).error(
              new n.Z('featurestore:invalid-feature', 'feature id is missing', {
                feature: e,
              }),
            );
          const i = this._featuresById.get(t);
          let s;
          if (
            (this._markedIds.add(t),
            i
              ? ((e.displayId = i.displayId),
                (s = this._boundsStore.get(t)),
                this._boundsStore.delete(t))
              : (0, o.pC)(this.onFeatureAdd) && this.onFeatureAdd(e),
            (0, o.Wi)(e.geometry) ||
              !e.geometry.coords ||
              !e.geometry.coords.length)
          )
            return (
              this._boundsStore.set(t, null), void this._featuresById.set(t, e)
            );
          (s = (0, u.$)(
            (0, o.pC)(s) ? s : (0, l.Ue)(),
            e.geometry,
            this.geometryInfo.hasZ,
            this.geometryInfo.hasM,
          )),
            (0, o.pC)(s) && this._boundsStore.set(t, s),
            this._featuresById.set(t, e);
        }
        _remove(e) {
          return (
            (0, o.pC)(this.onFeatureRemove) && this.onFeatureRemove(e),
            this._markedIds.delete(e.objectId),
            this._boundsStore.delete(e.objectId),
            this._featuresById.delete(e.objectId),
            e
          );
        }
      }
    },
    97845: (e, t, i) => {
      i.r(t), i.d(t, { default: () => b });
      var n = i(3172),
        s = i(20102),
        r = i(92604),
        o = i(70586),
        a = i(95330),
        l = i(33955),
        u = i(8744),
        d = i(98732),
        h = i(57191),
        c = i(37427),
        p = i(7673),
        f = i(92722),
        y = i(25278),
        m = i(23095),
        g = i(99514),
        _ = i(86719),
        I = i(35671);
      const x = {
        hasAttachments: !1,
        capabilities: 'query, editing, create, delete, update',
        useStandardizedQueries: !0,
        supportsCoordinatesQuantization: !0,
        supportsReturningQueryGeometry: !0,
        advancedQueryCapabilities: {
          supportsQueryAttachments: !1,
          supportsStatistics: !0,
          supportsPercentileStatistics: !0,
          supportsReturningGeometryCentroid: !0,
          supportsQueryWithDistance: !0,
          supportsDistinct: !0,
          supportsReturningQueryExtent: !0,
          supportsReturningGeometryProperties: !1,
          supportsHavingClause: !0,
          supportsOrderBy: !0,
          supportsPagination: !0,
          supportsQueryWithResultType: !1,
          supportsSqlExpression: !0,
          supportsDisjointSpatialRel: !0,
        },
      };
      class b {
        constructor() {
          (this._queryEngine = null),
            (this._snapshotFeatures = async (e) => {
              const t = await this._fetch(e);
              return this._createFeatures(t);
            });
        }
        destroy() {
          var e;
          null == (e = this._queryEngine) || e.destroy(),
            (this._queryEngine =
              this._fieldsIndex =
              this._createDefaultAttributes =
                null);
        }
        async load(e, t = {}) {
          this.loadOptions = {
            url: e.url,
            customParameters: e.customParameters,
          };
          const i = [];
          await this._checkProjection(e.spatialReference);
          let n = null;
          e.url && (n = await this._fetch(null == t ? void 0 : t.signal));
          const r = (0, f.my)(n, { geometryType: e.geometryType }),
            o = e.fields || r.fields || [],
            a = null != e.hasZ ? e.hasZ : r.hasZ,
            l = r.geometryType,
            d = e.objectIdField || r.objectIdFieldName || '__OBJECTID',
            c = e.spatialReference || u.Zn;
          let m = e.timeInfo;
          o === r.fields &&
            r.unknownFields.length > 0 &&
            i.push({
              name: 'geojson-layer:unknown-field-types',
              message:
                "Some fields types couldn't be inferred from the features and were dropped",
              details: { unknownFields: r.unknownFields },
            });
          let b = o.find((e) => e.name === d);
          b
            ? ('esriFieldTypeString' !== b.type &&
                (b.type = 'esriFieldTypeOID'),
              (b.editable = !1),
              (b.nullable = !1))
            : ((b = {
                alias: d,
                name: d,
                type:
                  'string' === r.objectIdFieldType
                    ? 'esriFieldTypeString'
                    : 'esriFieldTypeOID',
                editable: !1,
                nullable: !1,
              }),
              o.unshift(b));
          const S = {};
          for (const e of o) {
            if (
              (null == e.name && (e.name = e.alias),
              null == e.alias && (e.alias = e.name),
              !e.name)
            )
              throw new s.Z(
                'geojson-layer:invalid-field-name',
                'field name is missing',
                { field: e },
              );
            if (!_.v.jsonValues.includes(e.type))
              throw new s.Z(
                'geojson-layer:invalid-field-type',
                `invalid type for field "${e.name}"`,
                { field: e },
              );
            if (e.name !== b.name) {
              const t = (0, I.os)(e);
              void 0 !== t && (S[e.name] = t);
            }
          }
          this._fieldsIndex = new g.Z(o);
          const w = this._fieldsIndex.requiredFields.indexOf(b);
          if ((w > -1 && this._fieldsIndex.requiredFields.splice(w, 1), m)) {
            if (m.startTimeField) {
              const e = this._fieldsIndex.get(m.startTimeField);
              e
                ? ((m.startTimeField = e.name), (e.type = 'esriFieldTypeDate'))
                : (m.startTimeField = null);
            }
            if (m.endTimeField) {
              const e = this._fieldsIndex.get(m.endTimeField);
              e
                ? ((m.endTimeField = e.name), (e.type = 'esriFieldTypeDate'))
                : (m.endTimeField = null);
            }
            if (m.trackIdField) {
              const e = this._fieldsIndex.get(m.trackIdField);
              e
                ? (m.trackIdField = e.name)
                : ((m.trackIdField = null),
                  i.push({
                    name: 'geojson-layer:invalid-timeInfo-trackIdField',
                    message: 'trackIdField is missing',
                    details: { timeInfo: m },
                  }));
            }
            m.startTimeField ||
              m.endTimeField ||
              (i.push({
                name: 'geojson-layer:invalid-timeInfo',
                message: 'startTimeField and endTimeField are missing',
                details: { timeInfo: m },
              }),
              (m = null));
          }
          const F = l ? (0, y.bU)(l) : null,
            B = {
              warnings: i,
              featureErrors: [],
              layerDefinition: {
                ...x,
                drawingInfo: F,
                templates: (0, y.Hq)(S),
                extent: null,
                geometryType: l,
                objectIdField: d,
                fields: o,
                hasZ: !!a,
                timeInfo: m,
              },
            };
          (this._queryEngine = new p.Z({
            fields: o,
            geometryType: l,
            hasM: !1,
            hasZ: a,
            objectIdField: d,
            spatialReference: c,
            timeInfo: m,
            featureStore: new h.Z({ geometryType: l, hasM: !1, hasZ: a }),
            cacheSpatialQueries: !0,
          })),
            (this._createDefaultAttributes = (0, y.Dm)(S, d));
          const E = await this._createFeatures(n);
          this._objectIdGenerator = this._createObjectIdGenerator(
            this._queryEngine,
            E,
          );
          const M = this._normalizeFeatures(E, B.warnings, B.featureErrors);
          if (
            (this._queryEngine.featureStore.addMany(M),
            (B.layerDefinition.extent = this._queryEngine.fullExtent),
            B.layerDefinition.timeInfo)
          ) {
            const { start: e, end: t } = this._queryEngine.timeExtent;
            B.layerDefinition.timeInfo.timeExtent = [e, t];
          }
          return B;
        }
        async applyEdits(e) {
          const { spatialReference: t, geometryType: i } = this._queryEngine;
          return (
            await Promise.all([
              (0, m.b)(t, i),
              (0, c._W)(e.adds, t),
              (0, c._W)(e.updates, t),
            ]),
            await this._waitSnapshotComplete(),
            this._applyEdits(e)
          );
        }
        async queryFeatures(e = {}, t = {}) {
          return (
            await this._waitSnapshotComplete(),
            this._queryEngine.executeQuery(e, t.signal)
          );
        }
        async queryFeatureCount(e = {}, t = {}) {
          return (
            await this._waitSnapshotComplete(),
            this._queryEngine.executeQueryForCount(e, t.signal)
          );
        }
        async queryObjectIds(e = {}, t = {}) {
          return (
            await this._waitSnapshotComplete(),
            this._queryEngine.executeQueryForIds(e, t.signal)
          );
        }
        async queryExtent(e = {}, t = {}) {
          return (
            await this._waitSnapshotComplete(),
            this._queryEngine.executeQueryForExtent(e, t.signal)
          );
        }
        async querySnapping(e, t = {}) {
          return (
            await this._waitSnapshotComplete(),
            this._queryEngine.executeQueryForSnapping(e, t.signal)
          );
        }
        async refresh(e) {
          var t;
          return (
            (this.loadOptions.customParameters = e),
            null == (t = this._snapshotTask) || t.abort(),
            (this._snapshotTask = (0, a.vr)(this._snapshotFeatures)),
            this._snapshotTask.promise.then(
              (e) => {
                this._queryEngine.featureStore.clear(),
                  (this._objectIdGenerator = this._createObjectIdGenerator(
                    this._queryEngine,
                    e,
                  ));
                const t = this._normalizeFeatures(e);
                t && this._queryEngine.featureStore.addMany(t);
              },
              (e) => {
                this._queryEngine.featureStore.clear(),
                  (0, a.D_)(e) ||
                    r.Z.getLogger('esri.layers.GeoJSONLayer').error(
                      new s.Z(
                        'geojson-layer:refresh',
                        'An error occurred during refresh',
                        { error: e },
                      ),
                    );
              },
            ),
            await this._waitSnapshotComplete(),
            {
              extent: this._queryEngine.fullExtent,
              timeExtent: this._queryEngine.timeExtent,
            }
          );
        }
        async _createFeatures(e) {
          const {
              geometryType: t,
              hasZ: i,
              objectIdField: n,
            } = this._queryEngine,
            s = (0, f.lG)(e, { geometryType: t, hasZ: i, objectIdField: n });
          if (!(0, u.fS)(this._queryEngine.spatialReference, u.Zn))
            for (const e of s)
              (0, o.pC)(e.geometry) &&
                (e.geometry = (0, d.GH)(
                  (0, c.iV)(
                    (0, d.di)(
                      e.geometry,
                      this._queryEngine.geometryType,
                      this._queryEngine.hasZ,
                      !1,
                    ),
                    u.Zn,
                    this._queryEngine.spatialReference,
                  ),
                ));
          return s;
        }
        async _waitSnapshotComplete() {
          if (this._snapshotTask && !this._snapshotTask.finished) {
            try {
              await this._snapshotTask.promise;
            } catch {}
            return this._waitSnapshotComplete();
          }
        }
        async _fetch(e) {
          const { url: t, customParameters: i } = this.loadOptions,
            s = (
              await (0, n.default)(t, {
                responseType: 'json',
                query: { ...i },
                signal: e,
              })
            ).data;
          return await (0, f.O3)(s), s;
        }
        _normalizeFeatures(e, t, i) {
          const { objectIdField: n } = this._queryEngine,
            s = [];
          for (const r of e) {
            const e = this._createDefaultAttributes(),
              o = (0, m.O0)(this._fieldsIndex, e, r.attributes, !0, t);
            o
              ? null == i || i.push(o)
              : (this._assignObjectId(e, r.attributes, !0),
                (r.attributes = e),
                (r.objectId = e[n]),
                s.push(r));
          }
          return s;
        }
        _applyEdits(e) {
          const { adds: t, updates: i, deletes: n } = e,
            s = {
              addResults: [],
              deleteResults: [],
              updateResults: [],
              uidToObjectId: {},
            };
          if (
            (t && t.length && this._applyAddEdits(s, t),
            i && i.length && this._applyUpdateEdits(s, i),
            n && n.length)
          ) {
            for (const e of n) s.deleteResults.push((0, m.d1)(e));
            this._queryEngine.featureStore.removeManyById(n);
          }
          return {
            extent: this._queryEngine.fullExtent,
            timeExtent: this._queryEngine.timeExtent,
            featureEditResults: s,
          };
        }
        _applyAddEdits(e, t) {
          const { addResults: i } = e,
            {
              geometryType: n,
              hasM: s,
              hasZ: r,
              objectIdField: a,
              spatialReference: u,
              featureStore: h,
            } = this._queryEngine,
            p = [];
          for (const s of t) {
            if (s.geometry && n !== (0, l.Ji)(s.geometry)) {
              i.push((0, m.av)('Incorrect geometry type.'));
              continue;
            }
            const t = this._createDefaultAttributes(),
              r = (0, m.O0)(this._fieldsIndex, t, s.attributes);
            if (r) i.push(r);
            else {
              if (
                (this._assignObjectId(t, s.attributes),
                (s.attributes = t),
                null != s.uid)
              ) {
                const t = s.attributes[a];
                e.uidToObjectId[s.uid] = t;
              }
              (0, o.pC)(s.geometry) &&
                (s.geometry = (0, c.iV)(
                  (0, m.og)(s.geometry, u),
                  s.geometry.spatialReference,
                  u,
                )),
                p.push(s),
                i.push((0, m.d1)(s.attributes[a]));
            }
          }
          h.addMany((0, d.Yn)([], p, n, r, s, a));
        }
        _applyUpdateEdits({ updateResults: e }, t) {
          const {
            geometryType: i,
            hasM: n,
            hasZ: s,
            objectIdField: r,
            spatialReference: a,
            featureStore: u,
          } = this._queryEngine;
          for (const h of t) {
            const { attributes: t, geometry: p } = h,
              f = t && t[r];
            if (null == f) {
              e.push((0, m.av)(`Identifier field ${r} missing`));
              continue;
            }
            if (!u.has(f)) {
              e.push((0, m.av)(`Feature with object id ${f} missing`));
              continue;
            }
            const y = (0, d.EI)(u.getFeature(f), i, s, n);
            if ((0, o.pC)(p)) {
              if (i !== (0, l.Ji)(p)) {
                e.push((0, m.av)('Incorrect geometry type.'));
                continue;
              }
              y.geometry = (0, c.iV)((0, m.og)(p, a), p.spatialReference, a);
            }
            if (t) {
              const i = (0, m.O0)(this._fieldsIndex, y.attributes, t);
              if (i) {
                e.push(i);
                continue;
              }
            }
            u.add((0, d.XA)(y, i, s, n, r)), e.push((0, m.d1)(f));
          }
        }
        _createObjectIdGenerator(e, t) {
          const i = e.fieldsIndex.get(e.objectIdField);
          if ('esriFieldTypeString' === i.type)
            return () => i.name + '-' + Date.now().toString(16);
          let n = Number.NEGATIVE_INFINITY;
          for (const e of t) e.objectId && (n = Math.max(n, e.objectId));
          return (n = Math.max(0, n) + 1), () => n++;
        }
        _assignObjectId(e, t, i = !1) {
          const n = this._queryEngine.objectIdField;
          e[n] = i && n in t ? t[n] : this._objectIdGenerator();
        }
        async _checkProjection(e) {
          try {
            await (0, c._W)(u.Zn, e);
          } catch {
            throw new s.Z('geojson-layer', 'Projection not supported');
          }
        }
      }
    },
    92722: (e, t, i) => {
      i.d(t, { lG: () => w, q9: () => l, my: () => S, O3: () => b });
      var n = i(20102),
        s = i(70272),
        r = i(5428),
        o = i(35671);
      const a = {
        LineString: 'esriGeometryPolyline',
        MultiLineString: 'esriGeometryPolyline',
        MultiPoint: 'esriGeometryMultipoint',
        Point: 'esriGeometryPoint',
        Polygon: 'esriGeometryPolygon',
        MultiPolygon: 'esriGeometryPolygon',
      };
      function l(e) {
        return a[e];
      }
      function* u(e) {
        switch (e.type) {
          case 'Feature':
            yield e;
            break;
          case 'FeatureCollection':
            for (const t of e.features) t && (yield t);
        }
      }
      function* d(e) {
        if (!e) return null;
        switch (e.type) {
          case 'Point':
            yield e.coordinates;
            break;
          case 'LineString':
          case 'MultiPoint':
            yield* e.coordinates;
            break;
          case 'MultiLineString':
          case 'Polygon':
            for (const t of e.coordinates) yield* t;
            break;
          case 'MultiPolygon':
            for (const t of e.coordinates) for (const e of t) yield* e;
        }
      }
      function h(e) {
        for (const t of e) if (t.length > 2) return !0;
        return !1;
      }
      function c(e) {
        let t = 0;
        for (let i = 0; i < e.length; i++) {
          const n = e[i],
            s = e[(i + 1) % e.length];
          t += n[0] * s[1] - s[0] * n[1];
        }
        return t <= 0;
      }
      function p(e) {
        const t = e[0],
          i = e[e.length - 1];
        return (
          (t[0] === i[0] && t[1] === i[1] && t[2] === i[2]) || e.push(t), e
        );
      }
      function f(e, t, i) {
        switch (t.type) {
          case 'LineString':
          case 'MultiPoint':
            return (function (e, t, i) {
              return g(e, t.coordinates, i), e;
            })(e, t, i);
          case 'MultiLineString':
            return (function (e, t, i) {
              for (const n of t.coordinates) g(e, n, i);
              return e;
            })(e, t, i);
          case 'MultiPolygon':
            return (function (e, t, i) {
              for (const n of t.coordinates) {
                y(e, n[0], i);
                for (let t = 1; t < n.length; t++) m(e, n[t], i);
              }
              return e;
            })(e, t, i);
          case 'Point':
            return (function (e, t, i) {
              return I(e, t.coordinates, i), e;
            })(e, t, i);
          case 'Polygon':
            return (function (e, t, i) {
              const n = t.coordinates;
              y(e, n[0], i);
              for (let t = 1; t < n.length; t++) m(e, n[t], i);
              return e;
            })(e, t, i);
        }
      }
      function y(e, t, i) {
        const n = p(t);
        !(function (e) {
          return !c(e);
        })(n)
          ? g(e, n, i)
          : _(e, n, i);
      }
      function m(e, t, i) {
        const n = p(t);
        !(function (e) {
          return c(e);
        })(n)
          ? g(e, n, i)
          : _(e, n, i);
      }
      function g(e, t, i) {
        for (const n of t) I(e, n, i);
        e.lengths.push(t.length);
      }
      function _(e, t, i) {
        for (let n = t.length - 1; n >= 0; n--) I(e, t[n], i);
        e.lengths.push(t.length);
      }
      function I(e, t, i) {
        const [n, s, r] = t;
        e.coords.push(n, s), i.hasZ && e.coords.push(r || 0);
      }
      function x(e) {
        switch (typeof e) {
          case 'string':
            return 'esriFieldTypeString';
          case 'number':
            return 'esriFieldTypeDouble';
          default:
            return 'unknown';
        }
      }
      function b(e) {
        if (!e) throw new n.Z('geojson-layer:empty', 'GeoJSON data is empty');
        if ('Feature' !== e.type && 'FeatureCollection' !== e.type)
          throw new n.Z(
            'geojson-layer:unsupported-geojson-object',
            'missing or not supported GeoJSON object type',
            { data: e },
          );
        const { crs: t } = e;
        if (!t) return;
        const i =
            'string' == typeof t
              ? t
              : 'name' === t.type
              ? t.properties.name
              : 'EPSG' === t.type
              ? t.properties.code
              : null,
          s = new RegExp('.*(CRS84H?|4326)$', 'i');
        if (!i || !s.test(i))
          throw new n.Z(
            'geojson-layer:unsupported-crs',
            "unsupported GeoJSON 'crs' member",
            { crs: t },
          );
      }
      function S(e, t = {}) {
        const i = [],
          n = new Set(),
          s = new Set();
        let r,
          a = !1,
          c = null,
          p = !1,
          { geometryType: f = null } = t,
          y = !1;
        for (const t of u(e)) {
          const { geometry: e, properties: o, id: u } = t;
          if (
            (!e || (f || (f = l(e.type)), l(e.type) === f)) &&
            (a || (a = h(d(e))),
            p ||
              ((p = null != u),
              p &&
                ((r = typeof u),
                (c = Object.keys(o).filter((e) => o[e] === u)))),
            p &&
              null != u &&
              (c.length > 1
                ? (c = c.filter((e) => o[e] === u))
                : 1 === c.length && (c = o[c[0]] === u ? c : [])),
            !y && o)
          ) {
            let e = !0;
            for (const t in o) {
              if (n.has(t)) continue;
              const r = o[t];
              if (null == r) {
                (e = !1), s.add(t);
                continue;
              }
              const a = x(r);
              'unknown' !== a
                ? (s.delete(t),
                  n.add(t),
                  i.push({ name: t, alias: t, type: a }))
                : s.add(t);
            }
            y = e;
          }
        }
        const m = (c && 1 === c.length && c[0]) || null;
        if (m)
          for (const e of i)
            if (e.name === m && (0, o.H7)(e)) {
              e.type = 'esriFieldTypeOID';
              break;
            }
        return {
          fields: i,
          geometryType: f,
          hasZ: a,
          objectIdFieldName: m,
          objectIdFieldType: r,
          unknownFields: Array.from(s),
        };
      }
      function w(e, t) {
        return Array.from(
          (function* (e, t = {}) {
            const { geometryType: i, objectIdField: n } = t;
            for (const a of e) {
              var o;
              const { geometry: e, properties: u, id: d } = a;
              if (e && l(e.type) !== i) continue;
              const h = u || {};
              let c = null != (o = h[n]) ? o : null;
              n && null != d && !h[n] && (h[n] = c = d);
              const p = new s.u_(e ? f(new r.Z(), e, t) : null, h, null, c);
              yield p;
            }
          })(u(e), t),
        );
      }
    },
    25278: (e, t, i) => {
      i.d(t, { MS: () => c, Dm: () => d, Hq: () => h, bU: () => a });
      var n = i(80442),
        s = i(22974),
        r = i(61159),
        o = i(58333);
      function a(e) {
        return {
          renderer: {
            type: 'simple',
            symbol:
              'esriGeometryPoint' === e || 'esriGeometryMultipoint' === e
                ? o.I4
                : 'esriGeometryPolyline' === e
                ? o.ET
                : o.lF,
          },
        };
      }
      const l = /^[_$a-zA-Z][_$a-zA-Z0-9]*$/;
      let u = 1;
      function d(e, t) {
        if ((0, n.Z)('esri-csp-restrictions'))
          return () => ({ [t]: null, ...e });
        try {
          let i = `this.${t} = null;`;
          for (const t in e)
            i += `this${l.test(t) ? `.${t}` : `["${t}"]`} = ${JSON.stringify(
              e[t],
            )};`;
          const n = new Function(
            `\n      return class AttributesClass$${u++} {\n        constructor() {\n          ${i};\n        }\n      }\n    `,
          )();
          return () => new n();
        } catch (i) {
          return () => ({ [t]: null, ...e });
        }
      }
      function h(e = {}) {
        return [
          {
            name: 'New Feature',
            description: '',
            prototype: { attributes: (0, s.d9)(e) },
          },
        ];
      }
      function c(e, t) {
        return {
          attachment: null,
          data: {
            isVersioned: !1,
            supportsAttachment: !1,
            supportsM: !1,
            supportsZ: e,
          },
          metadata: { supportsAdvancedFieldProperties: !1 },
          operations: {
            supportsCalculate: !1,
            supportsTruncate: !1,
            supportsValidateSql: !1,
            supportsAdd: t,
            supportsDelete: t,
            supportsEditing: t,
            supportsChangeTracking: !1,
            supportsQuery: !0,
            supportsQueryAttachments: !1,
            supportsResizeAttachments: !1,
            supportsSync: !1,
            supportsUpdate: t,
            supportsExceedsLimitStatistics: !0,
          },
          query: r.g,
          queryRelated: {
            supportsCount: !0,
            supportsOrderBy: !0,
            supportsPagination: !0,
          },
          editing: {
            supportsGeometryUpdate: t,
            supportsGlobalId: !1,
            supportsReturnServiceEditsInSourceSpatialReference: !1,
            supportsRollbackOnFailure: !1,
            supportsUpdateWithoutM: !1,
            supportsUploadWithItemId: !1,
            supportsDeleteByAnonymous: !1,
            supportsDeleteByOthers: !1,
            supportsUpdateByAnonymous: !1,
            supportsUpdateByOthers: !1,
          },
        };
      }
    },
    23095: (e, t, i) => {
      i.d(t, {
        av: () => a,
        d1: () => u,
        b: () => y,
        O0: () => h,
        og: () => f,
      });
      var n = i(8744),
        s = i(35671);
      class r {
        constructor() {
          (this.code = null), (this.description = null);
        }
      }
      class o {
        constructor(e) {
          (this.error = new r()),
            (this.globalId = null),
            (this.objectId = null),
            (this.success = !1),
            (this.uniqueId = null),
            (this.error.description = e);
        }
      }
      function a(e) {
        return new o(e);
      }
      class l {
        constructor(e) {
          (this.globalId = null),
            (this.success = !0),
            (this.objectId = this.uniqueId = e);
        }
      }
      function u(e) {
        return new l(e);
      }
      const d = new Set();
      function h(e, t, i, n = !1, r) {
        d.clear();
        for (const o in i) {
          const l = e.get(o);
          if (!l) continue;
          const u = i[o],
            h = c(l, u);
          if (
            (h !== u &&
              r &&
              r.push({
                name: 'invalid-value-type',
                message:
                  'attribute value was converted to match the field type',
                details: { field: l, originalValue: u, sanitizedValue: h },
              }),
            d.add(l.name),
            l && (n || l.editable))
          ) {
            const e = (0, s.Qc)(l, h);
            if (e) return a((0, s.vP)(e, l, h));
            t[l.name] = h;
          }
        }
        for (const t of e.requiredFields)
          if (!d.has(t.name)) return a(`missing required field "${t.name}"`);
        return null;
      }
      function c(e, t) {
        let i = t;
        return (
          'string' == typeof t && (0, s.H7)(e)
            ? (i = parseFloat(t))
            : null != t &&
              (0, s.qN)(e) &&
              'string' != typeof t &&
              (i = String(t)),
          (0, s.Pz)(i)
        );
      }
      let p;
      function f(e, t) {
        if (!e || !(0, n.JY)(t)) return e;
        if ('rings' in e || 'paths' in e) {
          if (!p) throw new TypeError('geometry engine not loaded');
          return p.simplify(t, e);
        }
        return e;
      }
      async function y(e, t) {
        !(0, n.JY)(e) ||
          ('esriGeometryPolygon' !== t && 'esriGeometryPolyline' !== t) ||
          (await (async function () {
            return (
              p ||
              ((p = await Promise.all([i.e(5837), i.e(247)]).then(
                i.bind(i, 30247),
              )),
              p)
            );
          })());
      }
    },
    86719: (e, t, i) => {
      i.d(t, { v: () => n });
      const n = new (i(35454).X)({
        esriFieldTypeSmallInteger: 'small-integer',
        esriFieldTypeInteger: 'integer',
        esriFieldTypeSingle: 'single',
        esriFieldTypeDouble: 'double',
        esriFieldTypeLong: 'long',
        esriFieldTypeString: 'string',
        esriFieldTypeDate: 'date',
        esriFieldTypeOID: 'oid',
        esriFieldTypeGeometry: 'geometry',
        esriFieldTypeBlob: 'blob',
        esriFieldTypeRaster: 'raster',
        esriFieldTypeGUID: 'guid',
        esriFieldTypeGlobalID: 'global-id',
        esriFieldTypeXML: 'xml',
      });
    },
    58333: (e, t, i) => {
      i.d(t, {
        I4: () => s,
        lF: () => o,
        ET: () => r,
        qP: () => a,
        eG: () => l,
        lj: () => d,
        wW: () => u,
      });
      const n = [252, 146, 31, 255],
        s = {
          type: 'esriSMS',
          style: 'esriSMSCircle',
          size: 6,
          color: n,
          outline: {
            type: 'esriSLS',
            style: 'esriSLSSolid',
            width: 0.75,
            color: [153, 153, 153, 255],
          },
        },
        r = { type: 'esriSLS', style: 'esriSLSSolid', width: 0.75, color: n },
        o = {
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
        a = {
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
        l = {
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
