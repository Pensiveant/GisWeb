'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [639],
  {
    24133: (e, t, i) => {
      i.d(t, { Q: () => a });
      var s = i(67676),
        n = i(70586),
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
          this.clear(), x.prune(), b.prune(), B.prune(), F.prune();
        }
        all(e) {
          this._all(this.data, e);
        }
        search(e, t) {
          let i = this.data;
          const s = this._toBBox;
          if (_(e, i))
            for (x.clear(); i; ) {
              for (let n = 0, r = i.children.length; n < r; n++) {
                const r = i.children[n],
                  o = i.leaf ? s(r) : r;
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
            for (let s = 0, n = t.children.length; s < n; s++) {
              const n = t.children[s],
                r = t.leaf ? i(n) : n;
              if (_(e, r)) {
                if (t.leaf || g(e, r)) return !0;
                x.push(n);
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
          return (this.data = new M([])), this;
        }
        remove(e) {
          if (!e) return this;
          let t,
            i = this.data,
            r = null,
            o = 0,
            a = !1;
          const l = this._toBBox(e);
          for (B.clear(), F.clear(); i || B.length > 0; ) {
            var d;
            if (
              (i ||
                ((i = (0, n.j0)(B.pop())),
                (r = B.data[B.length - 1]),
                (o = null != (d = F.pop()) ? d : 0),
                (a = !0)),
              i.leaf &&
                ((t = (0, s.cq)(i.children, e, i.children.length, i.indexHint)),
                -1 !== t))
            )
              return (
                i.children.splice(t, 1), B.push(i), this._condense(B), this
              );
            a || i.leaf || !g(i, l)
              ? r
                ? (o++, (i = r.children[o]), (a = !1))
                : (i = null)
              : (B.push(i), F.push(o), (o = 0), (r = i), (i = i.children[0]));
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
            var s;
            if (!0 === i.leaf) for (const e of i.children) t(e);
            else b.pushArray(i.children);
            i = null != (s = b.pop()) ? s : null;
          }
        }
        _build(e, t, i, s) {
          const n = i - t + 1;
          let r = this._maxEntries;
          if (n <= r) {
            const s = new M(e.slice(t, i + 1));
            return l(s, this._toBBox), s;
          }
          s ||
            ((s = Math.ceil(Math.log(n) / Math.log(r))),
            (r = Math.ceil(n / r ** (s - 1))));
          const o = new v([]);
          o.height = s;
          const a = Math.ceil(n / r),
            d = a * Math.ceil(Math.sqrt(r));
          I(e, t, i, d, this.compareMinX);
          for (let n = t; n <= i; n += d) {
            const t = Math.min(n + d - 1, i);
            I(e, n, t, a, this.compareMinY);
            for (let i = n; i <= t; i += a) {
              const n = Math.min(i + a - 1, t);
              o.children.push(this._build(e, i, n, s - 1));
            }
          }
          return l(o, this._toBBox), o;
        }
        _chooseSubtree(e, t, i, s) {
          for (; s.push(t), !0 !== t.leaf && s.length - 1 !== i; ) {
            let i,
              s = 1 / 0,
              n = 1 / 0;
            for (let r = 0, o = t.children.length; r < o; r++) {
              const o = t.children[r],
                a = p(o),
                l = f(e, o) - a;
              l < n
                ? ((n = l), (s = a < s ? a : s), (i = o))
                : l === n && a < s && ((s = a), (i = o));
            }
            t = i || t.children[0];
          }
          return t;
        }
        _insert(e, t, i) {
          const s = this._toBBox,
            n = i ? e : s(e);
          B.clear();
          const r = this._chooseSubtree(n, this.data, t, B);
          for (
            r.children.push(e), u(r, n);
            t >= 0 && B.data[t].children.length > this._maxEntries;

          )
            this._split(B, t), t--;
          this._adjustParentBBoxes(n, B, t);
        }
        _split(e, t) {
          const i = e.data[t],
            s = i.children.length,
            n = this._minEntries;
          this._chooseSplitAxis(i, n, s);
          const r = this._chooseSplitIndex(i, n, s);
          if (!r)
            return void console.log(
              '  Error: assertion failed at PooledRBush._split: no valid split index',
            );
          const o = i.children.splice(r, i.children.length - r),
            a = i.leaf ? new M(o) : new v(o);
          (a.height = i.height),
            l(i, this._toBBox),
            l(a, this._toBBox),
            t ? e.data[t - 1].children.push(a) : this._splitRoot(i, a);
        }
        _splitRoot(e, t) {
          (this.data = new v([e, t])),
            (this.data.height = e.height + 1),
            l(this.data, this._toBBox);
        }
        _chooseSplitIndex(e, t, i) {
          let s, n, r;
          s = n = 1 / 0;
          for (let o = t; o <= i - t; o++) {
            const t = d(e, 0, o, this._toBBox),
              a = d(e, o, i, this._toBBox),
              l = y(t, a),
              u = p(t) + p(a);
            l < s
              ? ((s = l), (r = o), (n = u < n ? u : n))
              : l === s && u < n && ((n = u), (r = o));
          }
          return r;
        }
        _chooseSplitAxis(e, t, i) {
          const s = e.leaf ? this.compareMinX : h,
            n = e.leaf ? this.compareMinY : c;
          this._allDistMargin(e, t, i, s) < this._allDistMargin(e, t, i, n) &&
            e.children.sort(s);
        }
        _allDistMargin(e, t, i, s) {
          e.children.sort(s);
          const n = this._toBBox,
            r = d(e, 0, t, n),
            o = d(e, i - t, i, n);
          let a = m(r) + m(o);
          for (let s = t; s < i - t; s++) {
            const t = e.children[s];
            u(r, e.leaf ? n(t) : t), (a += m(r));
          }
          for (let s = i - t - 1; s >= t; s--) {
            const t = e.children[s];
            u(o, e.leaf ? n(t) : t), (a += m(o));
          }
          return a;
        }
        _adjustParentBBoxes(e, t, i) {
          for (let s = i; s >= 0; s--) u(t.data[s], e);
        }
        _condense(e) {
          for (let t = e.length - 1; t >= 0; t--) {
            const i = e.data[t];
            if (0 === i.children.length)
              if (t > 0) {
                const n = e.data[t - 1],
                  r = n.children;
                r.splice((0, s.cq)(r, i, r.length, n.indexHint), 1);
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
        d(e, 0, e.children.length, t, e);
      }
      function d(e, t, i, s, n) {
        n || (n = new M([])),
          (n.minX = 1 / 0),
          (n.minY = 1 / 0),
          (n.maxX = -1 / 0),
          (n.maxY = -1 / 0);
        for (let r, o = t; o < i; o++)
          (r = e.children[o]), u(n, e.leaf ? s(r) : r);
        return n;
      }
      function u(e, t) {
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
      function m(e) {
        return e.maxX - e.minX + (e.maxY - e.minY);
      }
      function f(e, t) {
        return (
          (Math.max(t.maxX, e.maxX) - Math.min(t.minX, e.minX)) *
          (Math.max(t.maxY, e.maxY) - Math.min(t.minY, e.minY))
        );
      }
      function y(e, t) {
        const i = Math.max(e.minX, t.minX),
          s = Math.max(e.minY, t.minY),
          n = Math.min(e.maxX, t.maxX),
          r = Math.min(e.maxY, t.maxY);
        return Math.max(0, n - i) * Math.max(0, r - s);
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
      function I(e, t, i, s, r) {
        const a = [t, i];
        for (; a.length; ) {
          const t = (0, n.j0)(a.pop()),
            i = (0, n.j0)(a.pop());
          if (t - i <= s) continue;
          const l = i + Math.ceil((t - i) / s / 2) * s;
          (0, o.q)(e, l, i, t, r), a.push(i, l, l, t);
        }
      }
      const x = new r.Z(),
        b = new r.Z(),
        B = new r.Z(),
        F = new r.Z({ deallocator: void 0 });
      class S extends class {
        constructor() {
          (this.minX = 1 / 0),
            (this.minY = 1 / 0),
            (this.maxX = -1 / 0),
            (this.maxY = -1 / 0);
        }
      } {
        constructor() {
          super(...arguments), (this.height = 1), (this.indexHint = new s.SO());
        }
      }
      class M extends S {
        constructor(e) {
          super(), (this.children = e), (this.leaf = !0);
        }
      }
      class v extends S {
        constructor(e) {
          super(), (this.children = e), (this.leaf = !1);
        }
      }
    },
    37549: (e, t, i) => {
      i.d(t, { H: () => o });
      var s = i(80442),
        n = i(24133);
      const r = { minX: 0, minY: 0, maxX: 0, maxY: 0 };
      class o {
        constructor() {
          (this._indexInvalid = !1),
            (this._boundsToLoad = []),
            (this._boundsById = new Map()),
            (this._idByBounds = new Map()),
            (this._index = new n.Q(
              9,
              (0, s.Z)('esri-csp-restrictions')
                ? (e) => ({ minX: e[0], minY: e[1], maxX: e[2], maxY: e[3] })
                : ['[0]', '[1]', '[2]', '[3]'],
            )),
            (this._loadIndex = () => {
              if (this._indexInvalid) {
                const e = new Array(this._idByBounds.size);
                let t = 0;
                this._idByBounds.forEach((i, s) => {
                  e[t++] = s;
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
      i.d(t, { Z: () => f });
      var s = i(20102),
        n = i(32448),
        r = i(92604),
        o = i(70586),
        a = i(60437),
        l = i(24470),
        d = i(98732),
        u = i(37549),
        h = i(29730),
        c = i(70272),
        p = i(5428);
      const m = {
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
      class f {
        constructor(e) {
          (this.geometryInfo = e),
            (this._boundsStore = new u.H()),
            (this._featuresById = new Map()),
            (this._markedIds = new Set()),
            (this.events = new n.Z()),
            (this.featureAdapter = m);
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
          for (const s of e) {
            const e = this._boundsStore.get(s.objectId);
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
              new s.Z('featurestore:invalid-feature', 'feature id is missing', {
                feature: e,
              }),
            );
          const i = this._featuresById.get(t);
          let n;
          if (
            (this._markedIds.add(t),
            i
              ? ((e.displayId = i.displayId),
                (n = this._boundsStore.get(t)),
                this._boundsStore.delete(t))
              : (0, o.pC)(this.onFeatureAdd) && this.onFeatureAdd(e),
            (0, o.Wi)(e.geometry) ||
              !e.geometry.coords ||
              !e.geometry.coords.length)
          )
            return (
              this._boundsStore.set(t, null), void this._featuresById.set(t, e)
            );
          (n = (0, d.$)(
            (0, o.pC)(n) ? n : (0, l.Ue)(),
            e.geometry,
            this.geometryInfo.hasZ,
            this.geometryInfo.hasM,
          )),
            (0, o.pC)(n) && this._boundsStore.set(t, n),
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
    92908: (e, t, i) => {
      i.d(t, { S: () => n, X: () => s });
      const s = 1;
      function n(e, t) {
        let i = 0;
        for (const n of t) {
          var s;
          const t = null == (s = n.attributes) ? void 0 : s[e];
          'number' == typeof t && isFinite(t) && (i = Math.max(i, t));
        }
        return i;
      }
    },
    30639: (e, t, i) => {
      i.r(t), i.d(t, { default: () => B });
      var s = i(20102),
        n = i(70586),
        r = i(33955),
        o = i(8744),
        a = i(98732),
        l = i(92908),
        d = i(57191),
        u = i(37427),
        h = i(7673),
        c = i(25278),
        p = i(23095),
        m = i(99514),
        f = i(86719),
        y = i(35671);
      const g = o.Zn,
        _ = {
          xmin: -180,
          ymin: -90,
          xmax: 180,
          ymax: 90,
          spatialReference: o.Zn,
        },
        I = {
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
      function x(e) {
        return (0, r.wp)(e) ? null != e.z : !!e.hasZ;
      }
      function b(e) {
        return (0, r.wp)(e) ? null != e.m : !!e.hasM;
      }
      class B {
        constructor() {
          (this._queryEngine = null), (this._nextObjectId = null);
        }
        destroy() {
          this._queryEngine && this._queryEngine && this._queryEngine.destroy(),
            (this._queryEngine =
              this._fieldsIndex =
              this._createDefaultAttributes =
                null);
        }
        async load(e) {
          const t = [],
            { features: i } = e,
            n = this._inferLayerProperties(i, e.fields),
            r = e.fields || [],
            o = null != e.hasM ? e.hasM : n.hasM,
            a = null != e.hasZ ? e.hasZ : n.hasZ,
            p = !e.spatialReference && !n.spatialReference,
            x = p ? g : e.spatialReference || n.spatialReference,
            b = p ? _ : null,
            B = e.geometryType || n.geometryType,
            F = !B;
          let S = e.objectIdField || n.objectIdField,
            M = e.timeInfo;
          if (
            !F &&
            (p &&
              t.push({
                name: 'feature-layer:spatial-reference-not-found',
                message:
                  'Spatial reference not provided or found in features. Defaults to WGS84',
              }),
            !B)
          )
            throw new s.Z(
              'feature-layer:missing-property',
              "geometryType not set and couldn't be inferred from the provided features",
            );
          if (!S)
            throw new s.Z(
              'feature-layer:missing-property',
              "objectIdField not set and couldn't be found in the provided fields",
            );
          if (
            (n.objectIdField &&
              S !== n.objectIdField &&
              (t.push({
                name: 'feature-layer:duplicated-oid-field',
                message: `Provided objectIdField "${S}" doesn't match the field name "${n.objectIdField}", found in the provided fields`,
              }),
              (S = n.objectIdField)),
            S && !n.objectIdField)
          ) {
            let e = null;
            r.some((t) => t.name === S && ((e = t), !0))
              ? ((e.type = 'esriFieldTypeOID'),
                (e.editable = !1),
                (e.nullable = !1))
              : r.unshift({
                  alias: S,
                  name: S,
                  type: 'esriFieldTypeOID',
                  editable: !1,
                  nullable: !1,
                });
          }
          for (const e of r) {
            if (
              (null == e.name && (e.name = e.alias),
              null == e.alias && (e.alias = e.name),
              !e.name)
            )
              throw new s.Z(
                'feature-layer:invalid-field-name',
                'field name is missing',
                { field: e },
              );
            if (
              (e.name === S && (e.type = 'esriFieldTypeOID'),
              -1 === f.v.jsonValues.indexOf(e.type))
            )
              throw new s.Z(
                'feature-layer:invalid-field-type',
                `invalid type for field "${e.name}"`,
                { field: e },
              );
          }
          const v = {};
          for (const e of r)
            if (
              'esriFieldTypeOID' !== e.type &&
              'esriFieldTypeGlobalID' !== e.type
            ) {
              const t = (0, y.os)(e);
              void 0 !== t && (v[e.name] = t);
            }
          if (
            ((this._fieldsIndex = new m.Z(r)),
            (this._createDefaultAttributes = (0, c.Dm)(v, S)),
            M)
          ) {
            if (M.startTimeField) {
              const e = this._fieldsIndex.get(M.startTimeField);
              e
                ? ((M.startTimeField = e.name), (e.type = 'esriFieldTypeDate'))
                : (M.startTimeField = null);
            }
            if (M.endTimeField) {
              const e = this._fieldsIndex.get(M.endTimeField);
              e
                ? ((M.endTimeField = e.name), (e.type = 'esriFieldTypeDate'))
                : (M.endTimeField = null);
            }
            if (M.trackIdField) {
              const e = this._fieldsIndex.get(M.trackIdField);
              e
                ? (M.trackIdField = e.name)
                : ((M.trackIdField = null),
                  t.push({
                    name: 'feature-layer:invalid-timeInfo-trackIdField',
                    message: 'trackIdField is missing',
                    details: { timeInfo: M },
                  }));
            }
            M.startTimeField ||
              M.endTimeField ||
              (t.push({
                name: 'feature-layer:invalid-timeInfo',
                message:
                  'startTimeField and endTimeField are missing or invalid',
                details: { timeInfo: M },
              }),
              (M = null));
          }
          const w = {
            warnings: t,
            featureErrors: [],
            layerDefinition: {
              ...I,
              drawingInfo: (0, c.bU)(B),
              templates: (0, c.Hq)(v),
              extent: b,
              geometryType: B,
              objectIdField: S,
              fields: r,
              hasZ: !!a,
              hasM: !!o,
              timeInfo: M,
            },
            assignedObjectIds: {},
          };
          if (
            ((this._queryEngine = new h.Z({
              fields: r,
              geometryType: B,
              hasM: o,
              hasZ: a,
              objectIdField: S,
              spatialReference: x,
              featureStore: new d.Z({ geometryType: B, hasM: o, hasZ: a }),
              timeInfo: M,
              cacheSpatialQueries: !0,
            })),
            !i || !i.length)
          )
            return (this._nextObjectId = l.X), w;
          const E = (0, l.S)(S, i);
          return (
            (this._nextObjectId = E + 1),
            await (0, u._W)(i, x),
            this._loadInitialFeatures(w, i)
          );
        }
        async applyEdits(e) {
          const { spatialReference: t, geometryType: i } = this._queryEngine;
          return (
            await Promise.all([
              (0, p.b)(t, i),
              (0, u._W)(e.adds, t),
              (0, u._W)(e.updates, t),
            ]),
            this._applyEdits(e)
          );
        }
        queryFeatures(e, t = {}) {
          return this._queryEngine.executeQuery(e, t.signal);
        }
        queryFeatureCount(e, t = {}) {
          return this._queryEngine.executeQueryForCount(e, t.signal);
        }
        queryObjectIds(e, t = {}) {
          return this._queryEngine.executeQueryForIds(e, t.signal);
        }
        queryExtent(e, t = {}) {
          return this._queryEngine.executeQueryForExtent(e, t.signal);
        }
        querySnapping(e, t = {}) {
          return this._queryEngine.executeQueryForSnapping(e, t.signal);
        }
        _inferLayerProperties(e, t) {
          let i,
            s,
            o = null,
            a = null,
            l = null;
          for (const t of e) {
            const e = t.geometry;
            if (
              !(0, n.Wi)(e) &&
              (o || (o = (0, r.Ji)(e)),
              a || (a = e.spatialReference),
              null == i && (i = x(e)),
              null == s && (s = b(e)),
              o && a && null != i && null != s)
            )
              break;
          }
          if (t && t.length) {
            let e = null;
            t.some((t) => {
              const i = 'esriFieldTypeOID' === t.type,
                s = !t.type && t.name && 'objectid' === t.name.toLowerCase();
              return (e = t), i || s;
            }) && (l = e.name);
          }
          return {
            geometryType: o,
            spatialReference: a,
            objectIdField: l,
            hasM: s,
            hasZ: i,
          };
        }
        _loadInitialFeatures(e, t) {
          const {
              geometryType: i,
              hasM: s,
              hasZ: o,
              objectIdField: l,
              spatialReference: d,
              featureStore: h,
            } = this._queryEngine,
            c = [];
          for (const s of t) {
            if (
              (null != s.uid && (e.assignedObjectIds[s.uid] = -1),
              s.geometry && i !== (0, r.Ji)(s.geometry))
            ) {
              e.featureErrors.push((0, p.av)('Incorrect geometry type.'));
              continue;
            }
            const t = this._createDefaultAttributes(),
              o = (0, p.O0)(this._fieldsIndex, t, s.attributes, !0, e.warnings);
            o
              ? e.featureErrors.push(o)
              : (this._assignObjectId(t, s.attributes, !0),
                (s.attributes = t),
                null != s.uid && (e.assignedObjectIds[s.uid] = s.attributes[l]),
                (0, n.pC)(s.geometry) &&
                  (s.geometry = (0, u.iV)(
                    s.geometry,
                    s.geometry.spatialReference,
                    d,
                  )),
                c.push(s));
          }
          if (
            (h.addMany((0, a.Yn)([], c, i, o, s, l)),
            (e.layerDefinition.extent = this._queryEngine.fullExtent),
            e.layerDefinition.timeInfo)
          ) {
            const { start: t, end: i } = this._queryEngine.timeExtent;
            e.layerDefinition.timeInfo.timeExtent = [t, i];
          }
          return e;
        }
        _applyEdits(e) {
          const { adds: t, updates: i, deletes: s } = e,
            n = {
              addResults: [],
              deleteResults: [],
              updateResults: [],
              uidToObjectId: {},
            };
          if (
            (t && t.length && this._applyAddEdits(n, t),
            i && i.length && this._applyUpdateEdits(n, i),
            s && s.length)
          ) {
            for (const e of s) n.deleteResults.push((0, p.d1)(e));
            this._queryEngine.featureStore.removeManyById(s);
          }
          return {
            fullExtent: this._queryEngine.fullExtent,
            featureEditResults: n,
          };
        }
        _applyAddEdits(e, t) {
          const { addResults: i } = e,
            {
              geometryType: s,
              hasM: o,
              hasZ: l,
              objectIdField: d,
              spatialReference: h,
              featureStore: c,
            } = this._queryEngine,
            m = [];
          for (const o of t) {
            if (o.geometry && s !== (0, r.Ji)(o.geometry)) {
              i.push((0, p.av)('Incorrect geometry type.'));
              continue;
            }
            const t = this._createDefaultAttributes(),
              a = (0, p.O0)(this._fieldsIndex, t, o.attributes);
            if (a) i.push(a);
            else {
              if (
                (this._assignObjectId(t, o.attributes),
                (o.attributes = t),
                null != o.uid)
              ) {
                const t = o.attributes[d];
                e.uidToObjectId[o.uid] = t;
              }
              (0, n.pC)(o.geometry) &&
                (o.geometry = (0, u.iV)(
                  (0, p.og)(o.geometry, h),
                  o.geometry.spatialReference,
                  h,
                )),
                m.push(o),
                i.push((0, p.d1)(o.attributes[d]));
            }
          }
          c.addMany((0, a.Yn)([], m, s, l, o, d));
        }
        _applyUpdateEdits({ updateResults: e }, t) {
          const {
            geometryType: i,
            hasM: s,
            hasZ: o,
            objectIdField: l,
            spatialReference: d,
            featureStore: h,
          } = this._queryEngine;
          for (const c of t) {
            const { attributes: t, geometry: m } = c,
              f = t && t[l];
            if (null == f) {
              e.push((0, p.av)(`Identifier field ${l} missing`));
              continue;
            }
            if (!h.has(f)) {
              e.push((0, p.av)(`Feature with object id ${f} missing`));
              continue;
            }
            const y = (0, a.EI)(h.getFeature(f), i, o, s);
            if ((0, n.pC)(m)) {
              if (i !== (0, r.Ji)(m)) {
                e.push((0, p.av)('Incorrect geometry type.'));
                continue;
              }
              y.geometry = (0, u.iV)((0, p.og)(m, d), m.spatialReference, d);
            }
            if (t) {
              const i = (0, p.O0)(this._fieldsIndex, y.attributes, t);
              if (i) {
                e.push(i);
                continue;
              }
            }
            h.add((0, a.XA)(y, i, o, s, l)), e.push((0, p.d1)(f));
          }
        }
        _assignObjectId(e, t, i = !1) {
          const s = this._queryEngine.objectIdField;
          i && t && isFinite(t[s])
            ? (e[s] = t[s])
            : (e[s] = this._nextObjectId++);
        }
      }
    },
    25278: (e, t, i) => {
      i.d(t, { MS: () => c, Dm: () => u, Hq: () => h, bU: () => a });
      var s = i(80442),
        n = i(22974),
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
      let d = 1;
      function u(e, t) {
        if ((0, s.Z)('esri-csp-restrictions'))
          return () => ({ [t]: null, ...e });
        try {
          let i = `this.${t} = null;`;
          for (const t in e)
            i += `this${l.test(t) ? `.${t}` : `["${t}"]`} = ${JSON.stringify(
              e[t],
            )};`;
          const s = new Function(
            `\n      return class AttributesClass$${d++} {\n        constructor() {\n          ${i};\n        }\n      }\n    `,
          )();
          return () => new s();
        } catch (i) {
          return () => ({ [t]: null, ...e });
        }
      }
      function h(e = {}) {
        return [
          {
            name: 'New Feature',
            description: '',
            prototype: { attributes: (0, n.d9)(e) },
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
        d1: () => d,
        b: () => f,
        O0: () => h,
        og: () => m,
      });
      var s = i(8744),
        n = i(35671);
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
      function d(e) {
        return new l(e);
      }
      const u = new Set();
      function h(e, t, i, s = !1, r) {
        u.clear();
        for (const o in i) {
          const l = e.get(o);
          if (!l) continue;
          const d = i[o],
            h = c(l, d);
          if (
            (h !== d &&
              r &&
              r.push({
                name: 'invalid-value-type',
                message:
                  'attribute value was converted to match the field type',
                details: { field: l, originalValue: d, sanitizedValue: h },
              }),
            u.add(l.name),
            l && (s || l.editable))
          ) {
            const e = (0, n.Qc)(l, h);
            if (e) return a((0, n.vP)(e, l, h));
            t[l.name] = h;
          }
        }
        for (const t of e.requiredFields)
          if (!u.has(t.name)) return a(`missing required field "${t.name}"`);
        return null;
      }
      function c(e, t) {
        let i = t;
        return (
          'string' == typeof t && (0, n.H7)(e)
            ? (i = parseFloat(t))
            : null != t &&
              (0, n.qN)(e) &&
              'string' != typeof t &&
              (i = String(t)),
          (0, n.Pz)(i)
        );
      }
      let p;
      function m(e, t) {
        if (!e || !(0, s.JY)(t)) return e;
        if ('rings' in e || 'paths' in e) {
          if (!p) throw new TypeError('geometry engine not loaded');
          return p.simplify(t, e);
        }
        return e;
      }
      async function f(e, t) {
        !(0, s.JY)(e) ||
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
      i.d(t, { v: () => s });
      const s = new (i(35454).X)({
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
        I4: () => n,
        lF: () => o,
        ET: () => r,
        qP: () => a,
        eG: () => l,
        lj: () => u,
        wW: () => d,
      });
      const s = [252, 146, 31, 255],
        n = {
          type: 'esriSMS',
          style: 'esriSMSCircle',
          size: 6,
          color: s,
          outline: {
            type: 'esriSLS',
            style: 'esriSLSSolid',
            width: 0.75,
            color: [153, 153, 153, 255],
          },
        },
        r = { type: 'esriSLS', style: 'esriSLSSolid', width: 0.75, color: s },
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
        d = {
          type: 'esriSLS',
          style: 'esriSLSSolid',
          color: [0, 0, 0, 255],
          width: 1.5,
        },
        u = {
          type: 'esriSFS',
          style: 'esriSFSSolid',
          color: [0, 0, 0, 255],
          outline: null,
        };
    },
  },
]);
