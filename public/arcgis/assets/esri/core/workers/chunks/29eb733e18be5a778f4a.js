'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [3230],
  {
    24133: (e, t, n) => {
      n.d(t, { Q: () => a });
      var r = n(67676),
        i = n(70586),
        s = n(44553),
        o = n(88764);
      class a {
        constructor(e = 9, t) {
          (this.compareMinX = d),
            (this.compareMinY = h),
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
          this.clear(), w.prune(), x.prune(), v.prune(), S.prune();
        }
        all(e) {
          this._all(this.data, e);
        }
        search(e, t) {
          let n = this.data;
          const r = this._toBBox;
          if (_(e, n))
            for (w.clear(); n; ) {
              for (let i = 0, s = n.children.length; i < s; i++) {
                const s = n.children[i],
                  o = n.leaf ? r(s) : s;
                _(e, o) &&
                  (n.leaf ? t(s) : g(e, o) ? this._all(s, t) : w.push(s));
              }
              n = w.pop();
            }
        }
        collides(e) {
          let t = this.data;
          const n = this._toBBox;
          if (!_(e, t)) return !1;
          for (w.clear(); t; ) {
            for (let r = 0, i = t.children.length; r < i; r++) {
              const i = t.children[r],
                s = t.leaf ? n(i) : i;
              if (_(e, s)) {
                if (t.leaf || g(e, s)) return !0;
                w.push(i);
              }
            }
            t = w.pop();
          }
          return !1;
        }
        load(e) {
          if (!e.length) return this;
          if (e.length < this._minEntries) {
            for (let t = 0, n = e.length; t < n; t++) this.insert(e[t]);
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
          return (this.data = new T([])), this;
        }
        remove(e) {
          if (!e) return this;
          let t,
            n = this.data,
            s = null,
            o = 0,
            a = !1;
          const l = this._toBBox(e);
          for (v.clear(), S.clear(); n || v.length > 0; ) {
            var u;
            if (
              (n ||
                ((n = (0, i.j0)(v.pop())),
                (s = v.data[v.length - 1]),
                (o = null != (u = S.pop()) ? u : 0),
                (a = !0)),
              n.leaf &&
                ((t = (0, r.cq)(n.children, e, n.children.length, n.indexHint)),
                -1 !== t))
            )
              return (
                n.children.splice(t, 1), v.push(n), this._condense(v), this
              );
            a || n.leaf || !g(n, l)
              ? s
                ? (o++, (n = s.children[o]), (a = !1))
                : (n = null)
              : (v.push(n), S.push(o), (o = 0), (s = n), (n = n.children[0]));
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
          let n = e;
          for (x.clear(); n; ) {
            var r;
            if (!0 === n.leaf) for (const e of n.children) t(e);
            else x.pushArray(n.children);
            n = null != (r = x.pop()) ? r : null;
          }
        }
        _build(e, t, n, r) {
          const i = n - t + 1;
          let s = this._maxEntries;
          if (i <= s) {
            const r = new T(e.slice(t, n + 1));
            return l(r, this._toBBox), r;
          }
          r ||
            ((r = Math.ceil(Math.log(i) / Math.log(s))),
            (s = Math.ceil(i / s ** (r - 1))));
          const o = new I([]);
          o.height = r;
          const a = Math.ceil(i / s),
            u = a * Math.ceil(Math.sqrt(s));
          b(e, t, n, u, this.compareMinX);
          for (let i = t; i <= n; i += u) {
            const t = Math.min(i + u - 1, n);
            b(e, i, t, a, this.compareMinY);
            for (let n = i; n <= t; n += a) {
              const i = Math.min(n + a - 1, t);
              o.children.push(this._build(e, n, i, r - 1));
            }
          }
          return l(o, this._toBBox), o;
        }
        _chooseSubtree(e, t, n, r) {
          for (; r.push(t), !0 !== t.leaf && r.length - 1 !== n; ) {
            let n,
              r = 1 / 0,
              i = 1 / 0;
            for (let s = 0, o = t.children.length; s < o; s++) {
              const o = t.children[s],
                a = p(o),
                l = y(e, o) - a;
              l < i
                ? ((i = l), (r = a < r ? a : r), (n = o))
                : l === i && a < r && ((r = a), (n = o));
            }
            t = n || t.children[0];
          }
          return t;
        }
        _insert(e, t, n) {
          const r = this._toBBox,
            i = n ? e : r(e);
          v.clear();
          const s = this._chooseSubtree(i, this.data, t, v);
          for (
            s.children.push(e), c(s, i);
            t >= 0 && v.data[t].children.length > this._maxEntries;

          )
            this._split(v, t), t--;
          this._adjustParentBBoxes(i, v, t);
        }
        _split(e, t) {
          const n = e.data[t],
            r = n.children.length,
            i = this._minEntries;
          this._chooseSplitAxis(n, i, r);
          const s = this._chooseSplitIndex(n, i, r);
          if (!s)
            return void console.log(
              '  Error: assertion failed at PooledRBush._split: no valid split index',
            );
          const o = n.children.splice(s, n.children.length - s),
            a = n.leaf ? new T(o) : new I(o);
          (a.height = n.height),
            l(n, this._toBBox),
            l(a, this._toBBox),
            t ? e.data[t - 1].children.push(a) : this._splitRoot(n, a);
        }
        _splitRoot(e, t) {
          (this.data = new I([e, t])),
            (this.data.height = e.height + 1),
            l(this.data, this._toBBox);
        }
        _chooseSplitIndex(e, t, n) {
          let r, i, s;
          r = i = 1 / 0;
          for (let o = t; o <= n - t; o++) {
            const t = u(e, 0, o, this._toBBox),
              a = u(e, o, n, this._toBBox),
              l = f(t, a),
              c = p(t) + p(a);
            l < r
              ? ((r = l), (s = o), (i = c < i ? c : i))
              : l === r && c < i && ((i = c), (s = o));
          }
          return s;
        }
        _chooseSplitAxis(e, t, n) {
          const r = e.leaf ? this.compareMinX : d,
            i = e.leaf ? this.compareMinY : h;
          this._allDistMargin(e, t, n, r) < this._allDistMargin(e, t, n, i) &&
            e.children.sort(r);
        }
        _allDistMargin(e, t, n, r) {
          e.children.sort(r);
          const i = this._toBBox,
            s = u(e, 0, t, i),
            o = u(e, n - t, n, i);
          let a = m(s) + m(o);
          for (let r = t; r < n - t; r++) {
            const t = e.children[r];
            c(s, e.leaf ? i(t) : t), (a += m(s));
          }
          for (let r = n - t - 1; r >= t; r--) {
            const t = e.children[r];
            c(o, e.leaf ? i(t) : t), (a += m(o));
          }
          return a;
        }
        _adjustParentBBoxes(e, t, n) {
          for (let r = n; r >= 0; r--) c(t.data[r], e);
        }
        _condense(e) {
          for (let t = e.length - 1; t >= 0; t--) {
            const n = e.data[t];
            if (0 === n.children.length)
              if (t > 0) {
                const i = e.data[t - 1],
                  s = i.children;
                s.splice((0, r.cq)(s, n, s.length, i.indexHint), 1);
              } else this.clear();
            else l(n, this._toBBox);
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
      function u(e, t, n, r, i) {
        i || (i = new T([])),
          (i.minX = 1 / 0),
          (i.minY = 1 / 0),
          (i.maxX = -1 / 0),
          (i.maxY = -1 / 0);
        for (let s, o = t; o < n; o++)
          (s = e.children[o]), c(i, e.leaf ? r(s) : s);
        return i;
      }
      function c(e, t) {
        (e.minX = Math.min(e.minX, t.minX)),
          (e.minY = Math.min(e.minY, t.minY)),
          (e.maxX = Math.max(e.maxX, t.maxX)),
          (e.maxY = Math.max(e.maxY, t.maxY));
      }
      function d(e, t) {
        return e.minX - t.minX;
      }
      function h(e, t) {
        return e.minY - t.minY;
      }
      function p(e) {
        return (e.maxX - e.minX) * (e.maxY - e.minY);
      }
      function m(e) {
        return e.maxX - e.minX + (e.maxY - e.minY);
      }
      function y(e, t) {
        return (
          (Math.max(t.maxX, e.maxX) - Math.min(t.minX, e.minX)) *
          (Math.max(t.maxY, e.maxY) - Math.min(t.minY, e.minY))
        );
      }
      function f(e, t) {
        const n = Math.max(e.minX, t.minX),
          r = Math.max(e.minY, t.minY),
          i = Math.min(e.maxX, t.maxX),
          s = Math.min(e.maxY, t.maxY);
        return Math.max(0, i - n) * Math.max(0, s - r);
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
      function b(e, t, n, r, s) {
        const a = [t, n];
        for (; a.length; ) {
          const t = (0, i.j0)(a.pop()),
            n = (0, i.j0)(a.pop());
          if (t - n <= r) continue;
          const l = n + Math.ceil((t - n) / r / 2) * r;
          (0, o.q)(e, l, n, t, s), a.push(n, l, l, t);
        }
      }
      const w = new s.Z(),
        x = new s.Z(),
        v = new s.Z(),
        S = new s.Z({ deallocator: void 0 });
      class F extends class {
        constructor() {
          (this.minX = 1 / 0),
            (this.minY = 1 / 0),
            (this.maxX = -1 / 0),
            (this.maxY = -1 / 0);
        }
      } {
        constructor() {
          super(...arguments), (this.height = 1), (this.indexHint = new r.SO());
        }
      }
      class T extends F {
        constructor(e) {
          super(), (this.children = e), (this.leaf = !0);
        }
      }
      class I extends F {
        constructor(e) {
          super(), (this.children = e), (this.leaf = !1);
        }
      }
    },
    37549: (e, t, n) => {
      n.d(t, { H: () => o });
      var r = n(80442),
        i = n(24133);
      const s = { minX: 0, minY: 0, maxX: 0, maxY: 0 };
      class o {
        constructor() {
          (this._indexInvalid = !1),
            (this._boundsToLoad = []),
            (this._boundsById = new Map()),
            (this._idByBounds = new Map()),
            (this._index = new i.Q(
              9,
              (0, r.Z)('esri-csp-restrictions')
                ? (e) => ({ minX: e[0], minY: e[1], maxX: e[2], maxY: e[3] })
                : ['[0]', '[1]', '[2]', '[3]'],
            )),
            (this._loadIndex = () => {
              if (this._indexInvalid) {
                const e = new Array(this._idByBounds.size);
                let t = 0;
                this._idByBounds.forEach((n, r) => {
                  e[t++] = r;
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
            (function (e, t, n) {
              (s.minX = t[0]),
                (s.minY = t[1]),
                (s.maxX = t[2]),
                (s.maxY = t[3]),
                e.search(s, n);
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
    57191: (e, t, n) => {
      n.d(t, { Z: () => y });
      var r = n(20102),
        i = n(32448),
        s = n(92604),
        o = n(70586),
        a = n(60437),
        l = n(24470),
        u = n(98732),
        c = n(37549),
        d = n(29730),
        h = n(70272),
        p = n(5428);
      const m = {
        getObjectId: (e) => e.objectId,
        getAttributes: (e) => e.attributes,
        getAttribute: (e, t) => e.attributes[t],
        cloneWithGeometry: (e, t) =>
          new h.u_(t, e.attributes, null, e.objectId),
        getGeometry: (e) => e.geometry,
        getCentroid: (e, t) => (
          (0, o.Wi)(e.centroid) &&
            (e.centroid = (0, d.Y)(new p.Z(), e.geometry, t.hasZ, t.hasM)),
          e.centroid
        ),
      };
      class y {
        constructor(e) {
          (this.geometryInfo = e),
            (this._boundsStore = new c.H()),
            (this._featuresById = new Map()),
            (this._markedIds = new Set()),
            (this.events = new i.Z()),
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
              const n = this._boundsStore.get(t.objectId);
              n &&
                ((e[0] = Math.min(n[0], e[0])),
                (e[1] = Math.min(n[1], e[1])),
                (e[2] = Math.max(n[2], e[2])),
                (e[3] = Math.max(n[3], e[3])));
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
        forEachBounds(e, t, n) {
          for (const r of e) {
            const e = this._boundsStore.get(r.objectId);
            e && t((0, a.JR)(n, e));
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
          this._featuresById.forEach((t, n) => {
            this._markedIds.has(n) || ((e = !0), this._remove(t));
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
            return void s.Z.getLogger(
              'esri.layers.graphics.data.FeatureStore',
            ).error(
              new r.Z('featurestore:invalid-feature', 'feature id is missing', {
                feature: e,
              }),
            );
          const n = this._featuresById.get(t);
          let i;
          if (
            (this._markedIds.add(t),
            n
              ? ((e.displayId = n.displayId),
                (i = this._boundsStore.get(t)),
                this._boundsStore.delete(t))
              : (0, o.pC)(this.onFeatureAdd) && this.onFeatureAdd(e),
            (0, o.Wi)(e.geometry) ||
              !e.geometry.coords ||
              !e.geometry.coords.length)
          )
            return (
              this._boundsStore.set(t, null), void this._featuresById.set(t, e)
            );
          (i = (0, u.$)(
            (0, o.pC)(i) ? i : (0, l.Ue)(),
            e.geometry,
            this.geometryInfo.hasZ,
            this.geometryInfo.hasM,
          )),
            (0, o.pC)(i) && this._boundsStore.set(t, i),
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
    43230: (e, t, n) => {
      n.r(t), n.d(t, { default: () => f });
      var r = n(20102),
        i = n(92604),
        s = n(70586),
        o = n(95330),
        a = n(8744),
        l = n(98732),
        u = n(57191),
        c = n(37427),
        d = n(7673),
        h = n(92722),
        p = n(23095),
        m = n(74556),
        y = n(99514);
      class f {
        constructor() {
          (this._queryEngine = null),
            (this._customParameters = null),
            (this._snapshotFeatures = async (e) => {
              const { objectIdField: t } = this._queryEngine,
                n = await (0, m.Bm)(
                  this._getFeatureUrl,
                  this._featureType.typeName,
                  this._getFeatureOutputFormat,
                  {
                    customParameters: this._customParameters,
                    dateFields: this._queryEngine.fieldsIndex.dateFields.map(
                      (e) => e.name,
                    ),
                    signal: e,
                  },
                );
              await (0, h.O3)(n), (0, o.k_)(e);
              const r = (0, h.lG)(n, {
                geometryType: this._queryEngine.geometryType,
                hasZ: !1,
                objectIdField: t,
              });
              if (!(0, a.fS)(this._queryEngine.spatialReference, a.Zn))
                for (const e of r)
                  (0, s.pC)(e.geometry) &&
                    (e.geometry = (0, l.GH)(
                      (0, c.iV)(
                        (0, l.di)(
                          e.geometry,
                          this._queryEngine.geometryType,
                          !1,
                          !1,
                        ),
                        a.Zn,
                        this._queryEngine.spatialReference,
                      ),
                    ));
              let i = 1;
              for (const e of r) {
                const n = {};
                (0, p.O0)(this._fieldsIndex, n, e.attributes, !0),
                  (e.attributes = n),
                  null == e.attributes[t] &&
                    (e.objectId = e.attributes[t] = i++);
              }
              return r;
            });
        }
        destroy() {
          var e;
          null == (e = this._queryEngine) || e.destroy(),
            (this._queryEngine = null);
        }
        async load(e, t) {
          const {
            getFeatureUrl: n,
            getFeatureOutputFormat: r,
            spatialReference: i,
            fields: a,
            geometryType: l,
            featureType: c,
            objectIdField: h,
            customParameters: p,
          } = e;
          (this._featureType = c),
            (this._customParameters = p),
            (this._getFeatureUrl = n),
            (this._getFeatureOutputFormat = r),
            (this._fieldsIndex = new y.Z(a)),
            await this._checkProjection(i),
            (0, o.k_)(t),
            (this._queryEngine = new d.Z({
              fields: a,
              geometryType: l,
              hasM: !1,
              hasZ: !1,
              objectIdField: h,
              spatialReference: i,
              timeInfo: null,
              featureStore: new u.Z({ geometryType: l, hasM: !1, hasZ: !1 }),
            }));
          const m = await this._snapshotFeatures((0, s.Wg)(t.signal));
          return (
            this._queryEngine.featureStore.addMany(m),
            { extent: this._queryEngine.fullExtent }
          );
        }
        async applyEdits() {
          throw new r.Z(
            'wfs-source:editing-not-supported',
            'applyEdits() is not supported on WFSLayer',
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
            (this._customParameters = e),
            null == (t = this._snapshotTask) || t.abort(),
            (this._snapshotTask = (0, o.vr)(this._snapshotFeatures)),
            this._snapshotTask.promise.then(
              (e) => {
                this._queryEngine.featureStore.clear(),
                  e && this._queryEngine.featureStore.addMany(e);
              },
              (e) => {
                this._queryEngine.featureStore.clear(),
                  (0, o.D_)(e) ||
                    i.Z.getLogger('esri.layers.WFSLayer').error(
                      new r.Z(
                        'wfs-layer:getfeature-error',
                        'An error occurred during the GetFeature request',
                        { error: e },
                      ),
                    );
              },
            ),
            await this._waitSnapshotComplete(),
            { extent: this._queryEngine.fullExtent }
          );
        }
        async _waitSnapshotComplete() {
          if (this._snapshotTask && !this._snapshotTask.finished) {
            try {
              await this._snapshotTask.promise;
            } catch {}
            return this._waitSnapshotComplete();
          }
        }
        async _checkProjection(e) {
          try {
            await (0, c._W)(a.Zn, e);
          } catch {
            throw new r.Z(
              'unsupported-projection',
              'Projection not supported',
              { spatialReference: e },
            );
          }
        }
      }
    },
    92722: (e, t, n) => {
      n.d(t, { lG: () => S, q9: () => l, my: () => v, O3: () => x });
      var r = n(20102),
        i = n(70272),
        s = n(5428),
        o = n(35671);
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
      function* c(e) {
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
      function d(e) {
        for (const t of e) if (t.length > 2) return !0;
        return !1;
      }
      function h(e) {
        let t = 0;
        for (let n = 0; n < e.length; n++) {
          const r = e[n],
            i = e[(n + 1) % e.length];
          t += r[0] * i[1] - i[0] * r[1];
        }
        return t <= 0;
      }
      function p(e) {
        const t = e[0],
          n = e[e.length - 1];
        return (
          (t[0] === n[0] && t[1] === n[1] && t[2] === n[2]) || e.push(t), e
        );
      }
      function m(e, t, n) {
        switch (t.type) {
          case 'LineString':
          case 'MultiPoint':
            return (function (e, t, n) {
              return g(e, t.coordinates, n), e;
            })(e, t, n);
          case 'MultiLineString':
            return (function (e, t, n) {
              for (const r of t.coordinates) g(e, r, n);
              return e;
            })(e, t, n);
          case 'MultiPolygon':
            return (function (e, t, n) {
              for (const r of t.coordinates) {
                y(e, r[0], n);
                for (let t = 1; t < r.length; t++) f(e, r[t], n);
              }
              return e;
            })(e, t, n);
          case 'Point':
            return (function (e, t, n) {
              return b(e, t.coordinates, n), e;
            })(e, t, n);
          case 'Polygon':
            return (function (e, t, n) {
              const r = t.coordinates;
              y(e, r[0], n);
              for (let t = 1; t < r.length; t++) f(e, r[t], n);
              return e;
            })(e, t, n);
        }
      }
      function y(e, t, n) {
        const r = p(t);
        !(function (e) {
          return !h(e);
        })(r)
          ? g(e, r, n)
          : _(e, r, n);
      }
      function f(e, t, n) {
        const r = p(t);
        !(function (e) {
          return h(e);
        })(r)
          ? g(e, r, n)
          : _(e, r, n);
      }
      function g(e, t, n) {
        for (const r of t) b(e, r, n);
        e.lengths.push(t.length);
      }
      function _(e, t, n) {
        for (let r = t.length - 1; r >= 0; r--) b(e, t[r], n);
        e.lengths.push(t.length);
      }
      function b(e, t, n) {
        const [r, i, s] = t;
        e.coords.push(r, i), n.hasZ && e.coords.push(s || 0);
      }
      function w(e) {
        switch (typeof e) {
          case 'string':
            return 'esriFieldTypeString';
          case 'number':
            return 'esriFieldTypeDouble';
          default:
            return 'unknown';
        }
      }
      function x(e) {
        if (!e) throw new r.Z('geojson-layer:empty', 'GeoJSON data is empty');
        if ('Feature' !== e.type && 'FeatureCollection' !== e.type)
          throw new r.Z(
            'geojson-layer:unsupported-geojson-object',
            'missing or not supported GeoJSON object type',
            { data: e },
          );
        const { crs: t } = e;
        if (!t) return;
        const n =
            'string' == typeof t
              ? t
              : 'name' === t.type
              ? t.properties.name
              : 'EPSG' === t.type
              ? t.properties.code
              : null,
          i = new RegExp('.*(CRS84H?|4326)$', 'i');
        if (!n || !i.test(n))
          throw new r.Z(
            'geojson-layer:unsupported-crs',
            "unsupported GeoJSON 'crs' member",
            { crs: t },
          );
      }
      function v(e, t = {}) {
        const n = [],
          r = new Set(),
          i = new Set();
        let s,
          a = !1,
          h = null,
          p = !1,
          { geometryType: m = null } = t,
          y = !1;
        for (const t of u(e)) {
          const { geometry: e, properties: o, id: u } = t;
          if (
            (!e || (m || (m = l(e.type)), l(e.type) === m)) &&
            (a || (a = d(c(e))),
            p ||
              ((p = null != u),
              p &&
                ((s = typeof u),
                (h = Object.keys(o).filter((e) => o[e] === u)))),
            p &&
              null != u &&
              (h.length > 1
                ? (h = h.filter((e) => o[e] === u))
                : 1 === h.length && (h = o[h[0]] === u ? h : [])),
            !y && o)
          ) {
            let e = !0;
            for (const t in o) {
              if (r.has(t)) continue;
              const s = o[t];
              if (null == s) {
                (e = !1), i.add(t);
                continue;
              }
              const a = w(s);
              'unknown' !== a
                ? (i.delete(t),
                  r.add(t),
                  n.push({ name: t, alias: t, type: a }))
                : i.add(t);
            }
            y = e;
          }
        }
        const f = (h && 1 === h.length && h[0]) || null;
        if (f)
          for (const e of n)
            if (e.name === f && (0, o.H7)(e)) {
              e.type = 'esriFieldTypeOID';
              break;
            }
        return {
          fields: n,
          geometryType: m,
          hasZ: a,
          objectIdFieldName: f,
          objectIdFieldType: s,
          unknownFields: Array.from(i),
        };
      }
      function S(e, t) {
        return Array.from(
          (function* (e, t = {}) {
            const { geometryType: n, objectIdField: r } = t;
            for (const a of e) {
              var o;
              const { geometry: e, properties: u, id: c } = a;
              if (e && l(e.type) !== n) continue;
              const d = u || {};
              let h = null != (o = d[r]) ? o : null;
              r && null != c && !d[r] && (d[r] = h = c);
              const p = new i.u_(e ? m(new s.Z(), e, t) : null, d, null, h);
              yield p;
            }
          })(u(e), t),
        );
      }
    },
    23095: (e, t, n) => {
      n.d(t, {
        av: () => a,
        d1: () => u,
        b: () => y,
        O0: () => d,
        og: () => m,
      });
      var r = n(8744),
        i = n(35671);
      class s {
        constructor() {
          (this.code = null), (this.description = null);
        }
      }
      class o {
        constructor(e) {
          (this.error = new s()),
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
      const c = new Set();
      function d(e, t, n, r = !1, s) {
        c.clear();
        for (const o in n) {
          const l = e.get(o);
          if (!l) continue;
          const u = n[o],
            d = h(l, u);
          if (
            (d !== u &&
              s &&
              s.push({
                name: 'invalid-value-type',
                message:
                  'attribute value was converted to match the field type',
                details: { field: l, originalValue: u, sanitizedValue: d },
              }),
            c.add(l.name),
            l && (r || l.editable))
          ) {
            const e = (0, i.Qc)(l, d);
            if (e) return a((0, i.vP)(e, l, d));
            t[l.name] = d;
          }
        }
        for (const t of e.requiredFields)
          if (!c.has(t.name)) return a(`missing required field "${t.name}"`);
        return null;
      }
      function h(e, t) {
        let n = t;
        return (
          'string' == typeof t && (0, i.H7)(e)
            ? (n = parseFloat(t))
            : null != t &&
              (0, i.qN)(e) &&
              'string' != typeof t &&
              (n = String(t)),
          (0, i.Pz)(n)
        );
      }
      let p;
      function m(e, t) {
        if (!e || !(0, r.JY)(t)) return e;
        if ('rings' in e || 'paths' in e) {
          if (!p) throw new TypeError('geometry engine not loaded');
          return p.simplify(t, e);
        }
        return e;
      }
      async function y(e, t) {
        !(0, r.JY)(e) ||
          ('esriGeometryPolygon' !== t && 'esriGeometryPolyline' !== t) ||
          (await (async function () {
            return (
              p ||
              ((p = await Promise.all([n.e(5837), n.e(247)]).then(
                n.bind(n, 30247),
              )),
              p)
            );
          })());
      }
    },
    74556: (e, t, n) => {
      n.d(t, {
        M8: () => x,
        ft: () => B,
        FU: () => T,
        Bm: () => k,
        be: () => M,
        eB: () => E,
      }),
        n(66577);
      var r = n(3172),
        i = n(20102);
      function s(e, t) {
        for (const n of e) if (null != n && t(n)) return n;
      }
      var o = n(70586),
        a = n(95330),
        l = n(17452),
        u = n(44547),
        c = n(8744),
        d = n(86973),
        h = n(92722);
      function p(e) {
        var t, n, r, i;
        const s = m.exec(e);
        if (!s) return null;
        const o = s.groups,
          a = +o.year,
          l = +o.month - 1,
          u = +o.day,
          c = +(null != (t = o.hours) ? t : '0'),
          d = +(null != (n = o.minutes) ? n : '0'),
          h = +(null != (r = o.seconds) ? r : '0');
        if (c > 23) return null;
        if (d > 59) return null;
        if (h > 59) return null;
        const p = null != (i = o.ms) ? i : '0',
          y = p ? +p.padEnd(3, '0').substring(0, 3) : 0;
        let f;
        if (o.isUTC) f = Date.UTC(a, l, u, c, d, h, y);
        else if (o.offsetSign) {
          const e = +o.offsetHours,
            t = +o.offsetMinutes;
          f =
            6e4 * ('+' === o.offsetSign ? -1 : 1) * (60 * e + t) +
            Date.UTC(a, l, u, c, d, h, y);
        } else f = new Date(a, l, u, c, d, h, y).getTime();
        return Number.isNaN(f) ? null : f;
      }
      const m =
        /^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/;
      var y = n(88724),
        f = n(1231),
        g = n(82971),
        _ = n(6570);
      const b = 'xlink:href',
        w = '2.0.0',
        x = '__esri_wfs_id__',
        v = 'wfs-layer:feature-type-not-found',
        S = 'wfs-layer:unknown-geometry-type',
        F = 'wfs-layer:unsupported-wfs-version';
      async function T(e, t) {
        const n = (function (e) {
          const t = X(e);
          (function (e) {
            const t = e.firstElementChild.getAttribute('version');
            if (t && t !== w)
              throw new i.Z(
                F,
                `Unsupported WFS version ${t}. Supported version: ${w}`,
              );
          })(t),
            q(t);
          const n = t.firstElementChild,
            r = (function (e) {
              const t = [];
              return function* () {
                yield* t;
                for (const n of e) t.push(n), yield n;
              };
            })(
              (function (e) {
                return (0, y.H)(e, {
                  FeatureTypeList: {
                    FeatureType: (e) => {
                      const t = {
                          typeName: 'undefined:undefined',
                          name: '',
                          title: '',
                          description: '',
                          extent: null,
                          namespacePrefix: '',
                          namespaceUri: '',
                          supportedSpatialReferences: [],
                        },
                        n = new Set([4326]),
                        r = (e) => {
                          var t, r;
                          const i = parseInt(
                            null ==
                              (t = e.textContent.match(/(?<wkid>\d+$)/i)) ||
                              null == (r = t.groups)
                              ? void 0
                              : r.wkid,
                            10,
                          );
                          Number.isNaN(i) || n.add(i);
                        };
                      return (
                        (0, y.h)(e, {
                          Name: (e) => {
                            const { name: n, prefix: r } = Y(e.textContent);
                            (t.typeName = `${r}:${n}`),
                              (t.name = n),
                              (t.namespacePrefix = r),
                              (t.namespaceUri = e.lookupNamespaceURI(r));
                          },
                          Abstract: (e) => {
                            t.description = e.textContent;
                          },
                          Title: (e) => {
                            t.title = e.textContent;
                          },
                          WGS84BoundingBox: (e) => {
                            t.extent = (function (e) {
                              let t, n, r, i;
                              for (const s of e.children)
                                switch (s.localName) {
                                  case 'LowerCorner':
                                    [t, n] = s.textContent
                                      .split(' ')
                                      .map((e) => Number.parseFloat(e));
                                    break;
                                  case 'UpperCorner':
                                    [r, i] = s.textContent
                                      .split(' ')
                                      .map((e) => Number.parseFloat(e));
                                }
                              return {
                                xmin: t,
                                ymin: n,
                                xmax: r,
                                ymax: i,
                                spatialReference: c.Zn,
                              };
                            })(e);
                          },
                          DefaultSRS: r,
                          DefaultCRS: r,
                          OtherSRS: r,
                          OtherCRS: r,
                        }),
                        t.title || (t.title = t.name),
                        t.supportedSpatialReferences.push(...n),
                        t
                      );
                    },
                  },
                });
              })(n),
            );
          return {
            operations: C(n),
            get featureTypes() {
              return Array.from(r());
            },
            readFeatureTypes: r,
          };
        })(
          (
            await (0, r.default)(e, {
              responseType: 'text',
              query: {
                SERVICE: 'WFS',
                REQUEST: 'GetCapabilities',
                VERSION: w,
                ...(null == t ? void 0 : t.customParameters),
              },
              signal: null == t ? void 0 : t.signal,
            })
          ).data,
        );
        return (
          (function (e, t) {
            (0, l.$U)(e) &&
              ((0, l.D6)(e, t.operations.DescribeFeatureType.url, !0) &&
                (t.operations.DescribeFeatureType.url = (0, l.hO)(
                  t.operations.DescribeFeatureType.url,
                )),
              (0, l.D6)(e, t.operations.GetFeature.url, !0) &&
                (t.operations.GetFeature.url = (0, l.hO)(
                  t.operations.GetFeature.url,
                )));
          })(e, n),
          n
        );
      }
      const I = new Set([
        'json',
        'application/json',
        'geojson',
        'application/json; subtype=geojson',
      ]);
      function C(e) {
        let t = !1;
        const n = {
          GetCapabilities: { url: '' },
          DescribeFeatureType: { url: '' },
          GetFeature: { url: '', outputFormat: null, supportsPagination: !1 },
        };
        if (
          ((0, y.h)(e, {
            OperationsMetadata: {
              Operation: (e) => {
                switch (e.getAttribute('name')) {
                  case 'GetCapabilities':
                    return {
                      DCP: {
                        HTTP: {
                          Get: (e) => {
                            n.GetCapabilities.url = e.getAttribute(b);
                          },
                        },
                      },
                    };
                  case 'DescribeFeatureType':
                    return {
                      DCP: {
                        HTTP: {
                          Get: (e) => {
                            n.DescribeFeatureType.url = e.getAttribute(b);
                          },
                        },
                      },
                    };
                  case 'GetFeature':
                    return {
                      DCP: {
                        HTTP: {
                          Get: (e) => {
                            n.GetFeature.url = e.getAttribute(b);
                          },
                        },
                      },
                      Parameter: (e) => {
                        if ('outputFormat' === e.getAttribute('name'))
                          return {
                            AllowedValues: {
                              Value: (e) => {
                                const t = e.textContent;
                                I.has(t.toLowerCase()) &&
                                  (n.GetFeature.outputFormat = t);
                              },
                            },
                          };
                      },
                    };
                }
              },
              Constraint: (e) => {
                switch (e.getAttribute('name')) {
                  case 'KVPEncoding':
                    return {
                      DefaultValue: (e) => {
                        t = 'true' === e.textContent.toLowerCase();
                      },
                    };
                  case 'ImplementsResultPaging':
                    return {
                      DefaultValue: (e) => {
                        n.GetFeature.supportsPagination =
                          'true' === e.textContent.toLowerCase();
                      },
                    };
                }
              },
            },
          }),
          !t)
        )
          throw new i.Z(
            'wfs-layer:kvp-encoding-not-supported',
            "WFS service doesn't support key/value pair (KVP) encoding",
          );
        if ((0, o.Wi)(n.GetFeature.outputFormat))
          throw new i.Z(
            'wfs-layer:geojson-not-supported',
            "WFS service doesn't support GeoJSON output format",
          );
        return n;
      }
      function B(e, t, n) {
        return s(e, (e) =>
          n
            ? e.name === t && e.namespaceUri === n
            : e.typeName === t || e.name === t,
        );
      }
      async function M(e, t, n, r = {}) {
        var s;
        const { featureType: l, extent: d } = await (async function (
            e,
            t,
            n,
            r = {},
          ) {
            const { spatialReference: s = g.Z.WGS84 } = r,
              a = e.readFeatureTypes(),
              l = t ? B(a, t, n) : a.next().value;
            if ((0, o.Wi)(l))
              throw t
                ? new i.Z(
                    v,
                    `The type '${t}' could not be found in the service`,
                  )
                : new i.Z('wfs-layer:empty-service', 'The service is empty');
            let d = new _.Z({ ...l.extent, spatialReference: s });
            if (!(0, c.fS)(s, c.Zn))
              try {
                await (0, u.iQ)(c.Zn, s, void 0, r), (d = (0, u.iV)(d, c.Zn));
              } catch {
                throw new i.Z(
                  'wfs-layer:unsupported-spatial-reference',
                  'Projection not supported',
                );
              }
            return { extent: d, spatialReference: s, featureType: l };
          })(e, t, n, r),
          {
            fields: h,
            geometryType: p,
            swapXY: m,
            objectIdField: y,
            geometryField: f,
          } = await (async function (e, t, n = {}) {
            const [r, s] = await (0, a.as)([
              P(e.operations.DescribeFeatureType.url, t, n),
              j(e, t, n),
            ]);
            if (r.error || s.error)
              throw new i.Z(
                'wfs-layer:getWFSLayerTypeInfo-error',
                `An error occurred while getting info about the feature type '${t}'`,
                { error: r.error || s.error },
              );
            const { fields: l, errors: u } = r.value,
              c = r.value.geometryType || s.value.geometryType,
              d = s.value.swapXY;
            if ((0, o.Wi)(c))
              throw new i.Z(
                S,
                `The geometry type could not be determined for type '${t}`,
                { typeName: t, geometryType: c, fields: l, errors: u },
              );
            return { ...E(l), geometryType: c, swapXY: d };
          })(e, l.typeName, r);
        return {
          url: e.operations.GetCapabilities.url,
          name: l.name,
          namespaceUri: l.namespaceUri,
          fields: h,
          geometryField: f,
          geometryType: p,
          objectIdField: y,
          spatialReference: null != (s = r.spatialReference) ? s : g.Z.WGS84,
          extent: d,
          swapXY: m,
          wfsCapabilities: e,
          customParameters: r.customParameters,
        };
      }
      function E(e) {
        var t;
        const n = e.find((e) => 'geometry' === e.type);
        let r = e.find((e) => 'oid' === e.type);
        return (
          (e = e.filter((e) => 'geometry' !== e.type)),
          r ||
            ((r = new f.Z({ name: x, type: 'oid', alias: x })), e.unshift(r)),
          {
            geometryField: null != (t = null == n ? void 0 : n.name) ? t : null,
            objectIdField: r.name,
            fields: e,
          }
        );
      }
      async function j(e, t, n = {}) {
        var i;
        let s,
          o = !1;
        const [a, l] = await Promise.all([
            k(
              e.operations.GetFeature.url,
              t,
              e.operations.GetFeature.outputFormat,
              { ...n, count: 1 },
            ),
            (0, r.default)(e.operations.GetFeature.url, {
              responseType: 'text',
              query: N(t, void 0, { ...n, count: 1 }),
              signal: null == n ? void 0 : n.signal,
            }),
          ]),
          u =
            'FeatureCollection' === a.type &&
            (null == (i = a.features[0]) ? void 0 : i.geometry);
        if (u) {
          let e;
          switch (((s = d.Mk.fromJSON((0, h.q9)(u.type))), u.type)) {
            case 'Point':
              e = u.coordinates;
              break;
            case 'LineString':
            case 'MultiPoint':
              e = u.coordinates[0];
              break;
            case 'MultiLineString':
            case 'Polygon':
              e = u.coordinates[0][0];
              break;
            case 'MultiPolygon':
              e = u.coordinates[0][0][0];
          }
          const t = /<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(
            l.data,
          );
          if (t) {
            const n = e[0].toFixed(3),
              r = e[1].toFixed(3),
              i = parseFloat(t[1]).toFixed(3);
            n === parseFloat(t[2]).toFixed(3) && r === i && (o = !0);
          }
        }
        return { geometryType: s, swapXY: o };
      }
      async function P(e, t, n) {
        return (function (e, t) {
          const { name: n } = Y(e),
            r = X(t);
          q(r);
          const a = s(
            (0, y.H)(r.firstElementChild, {
              element: (e) => ({
                name: e.getAttribute('name'),
                typeName: Y(e.getAttribute('type')).name,
              }),
            }),
            ({ name: e }) => e === n,
          );
          if ((0, o.pC)(a)) {
            const e = s(
              (0, y.H)(r.firstElementChild, { complexType: (e) => e }),
              (e) => e.getAttribute('name') === a.typeName,
            );
            if ((0, o.pC)(e))
              return (function (e) {
                var t, n;
                const r = [],
                  s = [];
                let o;
                const a = (0, y.H)(e, {
                  complexContent: {
                    extension: { sequence: { element: (e) => e } },
                  },
                });
                for (const l of a) {
                  const a = l.getAttribute('name');
                  if (!a) continue;
                  let u, c;
                  if (
                    (l.hasAttribute('type')
                      ? (u = Y(l.getAttribute('type')).name)
                      : (0, y.h)(l, {
                          simpleType: {
                            restriction: (e) => (
                              (u = Y(e.getAttribute('base')).name),
                              {
                                maxLength: (e) => {
                                  c = +e.getAttribute('value');
                                },
                              }
                            ),
                          },
                        }),
                    !u)
                  )
                    continue;
                  const d = 'true' === l.getAttribute('nillable');
                  let h = !1;
                  switch (u.toLowerCase()) {
                    case 'integer':
                    case 'nonpositiveinteger':
                    case 'negativeinteger':
                    case 'long':
                    case 'int':
                    case 'short':
                    case 'byte':
                    case 'nonnegativeinteger':
                    case 'unsignedlong':
                    case 'unsignedint':
                    case 'unsignedshort':
                    case 'unsignedbyte':
                    case 'positiveinteger':
                      s.push(
                        new f.Z({
                          name: a,
                          alias: a,
                          type: 'integer',
                          nullable: d,
                        }),
                      );
                      break;
                    case 'float':
                    case 'double':
                    case 'decimal':
                      s.push(
                        new f.Z({
                          name: a,
                          alias: a,
                          type: 'double',
                          nullable: d,
                        }),
                      );
                      break;
                    case 'boolean':
                    case 'string':
                    case 'gyearmonth':
                    case 'gyear':
                    case 'gmonthday':
                    case 'gday':
                    case 'gmonth':
                    case 'anyuri':
                    case 'qname':
                    case 'notation':
                    case 'normalizedstring':
                    case 'token':
                    case 'language':
                    case 'idrefs':
                    case 'entities':
                    case 'nmtoken':
                    case 'nmtokens':
                    case 'name':
                    case 'ncname':
                    case 'id':
                    case 'idref':
                    case 'entity':
                    case 'duration':
                    case 'time':
                      s.push(
                        new f.Z({
                          name: a,
                          alias: a,
                          type: 'string',
                          nullable: d,
                          length: null != (t = c) ? t : 255,
                        }),
                      );
                      break;
                    case 'datetime':
                    case 'date':
                      s.push(
                        new f.Z({
                          name: a,
                          alias: a,
                          type: 'date',
                          nullable: d,
                          length: null != (n = c) ? n : 36,
                        }),
                      );
                      break;
                    case 'pointpropertytype':
                      (o = 'point'), (h = !0);
                      break;
                    case 'multipointpropertytype':
                      (o = 'multipoint'), (h = !0);
                      break;
                    case 'curvepropertytype':
                    case 'multicurvepropertytype':
                    case 'multilinestringpropertytype':
                      (o = 'polyline'), (h = !0);
                      break;
                    case 'surfacepropertytype':
                    case 'multisurfacepropertytype':
                    case 'multipolygonpropertytype':
                      (o = 'polygon'), (h = !0);
                      break;
                    case 'geometrypropertytype':
                    case 'multigeometrypropertytype':
                      (h = !0),
                        r.push(
                          new i.Z(S, `geometry type '${u}' is not supported`, {
                            type: new XMLSerializer().serializeToString(e),
                          }),
                        );
                      break;
                    default:
                      r.push(
                        new i.Z(
                          'wfs-layer:unknown-field-type',
                          `Unknown field type '${u}'`,
                          { type: new XMLSerializer().serializeToString(e) },
                        ),
                      );
                  }
                  h &&
                    s.push(
                      new f.Z({
                        name: a,
                        alias: a,
                        type: 'geometry',
                        nullable: d,
                      }),
                    );
                }
                for (const e of s)
                  if (
                    'integer' === e.type &&
                    !e.nullable &&
                    Z.has(e.name.toLowerCase())
                  ) {
                    e.type = 'oid';
                    break;
                  }
                return { geometryType: o, fields: s, errors: r };
              })(e);
          }
          throw new i.Z(v, `Type '${e}' not found in document`, {
            document: new XMLSerializer().serializeToString(r),
          });
        })(
          t,
          (
            await (0, r.default)(e, {
              responseType: 'text',
              query: {
                SERVICE: 'WFS',
                REQUEST: 'DescribeFeatureType',
                VERSION: w,
                TYPENAME: t,
                ...(null == n ? void 0 : n.customParameters),
              },
              signal: null == n ? void 0 : n.signal,
            })
          ).data,
        );
      }
      const Z = new Set(['objectid', 'fid']);
      async function k(e, t, n, s) {
        let { data: o } = await (0, r.default)(e, {
          responseType: 'text',
          query: N(t, n, s),
          signal: null == s ? void 0 : s.signal,
        });
        o = o.replace(/": +(-?\d+),(\d+)(,)?/g, '": $1.$2$3');
        try {
          var a;
          if (null != s && null != (a = s.dateFields) && a.length) {
            const e = new Set(s.dateFields);
            return JSON.parse(o, (t, n) =>
              e.has(t)
                ? (function (e) {
                    var t;
                    return null != (t = p(e))
                      ? t
                      : (function (e) {
                          const t = new Date(e).getTime();
                          return Number.isNaN(t) ? null : t;
                        })(e);
                  })(n)
                : n,
            );
          }
          return JSON.parse(o);
        } catch (e) {
          throw new i.Z(
            'wfs-layer:malformed-json',
            'Error while parsing the response',
            { response: o, error: e },
          );
        }
      }
      function N(e, t, n) {
        return {
          SERVICE: 'WFS',
          REQUEST: 'GetFeature',
          VERSION: w,
          TYPENAMES: e,
          OUTPUTFORMAT: t,
          SRSNAME: 'EPSG:4326',
          STARTINDEX: null == n ? void 0 : n.startIndex,
          COUNT: null == n ? void 0 : n.count,
          ...(null == n ? void 0 : n.customParameters),
        };
      }
      function X(e) {
        return new DOMParser().parseFromString(e.trim(), 'text/xml');
      }
      function Y(e) {
        const [t, n] = e.split(':');
        return { prefix: n ? t : '', name: null != n ? n : t };
      }
      function q(e) {
        let t, n;
        if (
          ((0, y.h)(e.firstElementChild, {
            Exception: (e) => (
              (t = e.getAttribute('exceptionCode')),
              {
                ExceptionText: (e) => {
                  n = e.textContent;
                },
              }
            ),
          }),
          t)
        )
          throw new i.Z(`wfs-layer:${t}`, n);
      }
    },
    88724: (e, t, n) => {
      function r(e, t) {
        for (const n of e.children)
          if (n.localName in t) {
            const e = t[n.localName];
            if ('function' == typeof e) {
              const t = e(n);
              t && r(n, t);
            } else r(n, e);
          }
      }
      function* i(e, t) {
        for (const n of e.children)
          if (n.localName in t) {
            const e = t[n.localName];
            'function' == typeof e ? yield e(n) : yield* i(n, e);
          }
      }
      n.d(t, { H: () => i, h: () => r });
    },
    1231: (e, t, n) => {
      n.d(t, { Z: () => f });
      var r,
        i = n(43697),
        s = n(35454),
        o = n(96674),
        a = n(5600),
        l = (n(67676), n(80442), n(75215)),
        u = n(36030),
        c = n(71715),
        d = n(52011),
        h = n(72729),
        p = n(86719);
      const m = new s.X({
        binary: 'binary',
        coordinate: 'coordinate',
        countOrAmount: 'count-or-amount',
        dateAndTime: 'date-and-time',
        description: 'description',
        locationOrPlaceName: 'location-or-place-name',
        measurement: 'measurement',
        nameOrTitle: 'name-or-title',
        none: 'none',
        orderedOrRanked: 'ordered-or-ranked',
        percentageOrRatio: 'percentage-or-ratio',
        typeOrCategory: 'type-or-category',
        uniqueIdentifier: 'unique-identifier',
      });
      let y = (r = class extends o.wq {
        constructor(e) {
          super(e),
            (this.alias = null),
            (this.defaultValue = void 0),
            (this.description = null),
            (this.domain = null),
            (this.editable = !0),
            (this.length = -1),
            (this.name = null),
            (this.nullable = !0),
            (this.type = null),
            (this.valueType = null);
        }
        readDescription(e, { description: t }) {
          let n;
          try {
            n = JSON.parse(t);
          } catch (e) {}
          return n ? n.value : null;
        }
        readValueType(e, { description: t }) {
          let n;
          try {
            n = JSON.parse(t);
          } catch (e) {}
          return n ? m.fromJSON(n.fieldValueType) : null;
        }
        clone() {
          return new r({
            alias: this.alias,
            defaultValue: this.defaultValue,
            description: this.description,
            domain: (this.domain && this.domain.clone()) || null,
            editable: this.editable,
            length: this.length,
            name: this.name,
            nullable: this.nullable,
            type: this.type,
            valueType: this.valueType,
          });
        }
      });
      (0, i._)(
        [(0, a.Cb)({ type: String, json: { write: !0 } })],
        y.prototype,
        'alias',
        void 0,
      ),
        (0, i._)(
          [
            (0, a.Cb)({
              type: [String, Number],
              json: { write: { allowNull: !0 } },
            }),
          ],
          y.prototype,
          'defaultValue',
          void 0,
        ),
        (0, i._)([(0, a.Cb)()], y.prototype, 'description', void 0),
        (0, i._)(
          [(0, c.r)('description')],
          y.prototype,
          'readDescription',
          null,
        ),
        (0, i._)(
          [
            (0, a.Cb)({
              types: h.V5,
              json: { read: { reader: h.im }, write: !0 },
            }),
          ],
          y.prototype,
          'domain',
          void 0,
        ),
        (0, i._)(
          [(0, a.Cb)({ type: Boolean, json: { write: !0 } })],
          y.prototype,
          'editable',
          void 0,
        ),
        (0, i._)(
          [(0, a.Cb)({ type: l.z8, json: { write: !0 } })],
          y.prototype,
          'length',
          void 0,
        ),
        (0, i._)(
          [(0, a.Cb)({ type: String, json: { write: !0 } })],
          y.prototype,
          'name',
          void 0,
        ),
        (0, i._)(
          [(0, a.Cb)({ type: Boolean, json: { write: !0 } })],
          y.prototype,
          'nullable',
          void 0,
        ),
        (0, i._)([(0, u.J)(p.v)], y.prototype, 'type', void 0),
        (0, i._)([(0, a.Cb)()], y.prototype, 'valueType', void 0),
        (0, i._)(
          [(0, c.r)('valueType', ['description'])],
          y.prototype,
          'readValueType',
          null,
        ),
        (y = r = (0, i._)([(0, d.j)('esri.layers.support.Field')], y));
      const f = y;
    },
    72729: (e, t, n) => {
      n.d(t, { im: () => T, V5: () => F }), n(80442);
      var r,
        i = n(43697),
        s = n(22974),
        o = n(5600),
        a = (n(75215), n(36030)),
        l = n(52011),
        u = n(96674);
      n(67676);
      let c = (r = class extends u.wq {
        constructor(e) {
          super(e), (this.name = null), (this.code = null);
        }
        clone() {
          return new r({ name: this.name, code: this.code });
        }
      });
      (0, i._)(
        [(0, o.Cb)({ type: String, json: { write: !0 } })],
        c.prototype,
        'name',
        void 0,
      ),
        (0, i._)(
          [(0, o.Cb)({ type: [String, Number], json: { write: !0 } })],
          c.prototype,
          'code',
          void 0,
        ),
        (c = r = (0, i._)([(0, l.j)('esri.layers.support.CodedValue')], c));
      const d = c,
        h = new (n(35454).X)({
          inherited: 'inherited',
          codedValue: 'coded-value',
          range: 'range',
        });
      let p = class extends u.wq {
        constructor(e) {
          super(e), (this.name = null), (this.type = null);
        }
      };
      (0, i._)(
        [(0, o.Cb)({ type: String, json: { write: !0 } })],
        p.prototype,
        'name',
        void 0,
      ),
        (0, i._)([(0, a.J)(h)], p.prototype, 'type', void 0),
        (p = (0, i._)([(0, l.j)('esri.layers.support.Domain')], p));
      const m = p;
      var y;
      let f = (y = class extends m {
        constructor(e) {
          super(e), (this.codedValues = null), (this.type = 'coded-value');
        }
        getName(e) {
          let t = null;
          if (this.codedValues) {
            const n = String(e);
            this.codedValues.some(
              (e) => (String(e.code) === n && (t = e.name), !!t),
            );
          }
          return t;
        }
        clone() {
          return new y({
            codedValues: (0, s.d9)(this.codedValues),
            name: this.name,
          });
        }
      });
      (0, i._)(
        [(0, o.Cb)({ type: [d], json: { write: !0 } })],
        f.prototype,
        'codedValues',
        void 0,
      ),
        (0, i._)(
          [(0, a.J)({ codedValue: 'coded-value' })],
          f.prototype,
          'type',
          void 0,
        ),
        (f = y =
          (0, i._)([(0, l.j)('esri.layers.support.CodedValueDomain')], f));
      const g = f;
      var _;
      n(92604), n(37697);
      let b = (_ = class extends m {
        constructor(e) {
          super(e), (this.type = 'inherited');
        }
        clone() {
          return new _();
        }
      });
      (0, i._)(
        [(0, a.J)({ inherited: 'inherited' })],
        b.prototype,
        'type',
        void 0,
      ),
        (b = _ =
          (0, i._)([(0, l.j)('esri.layers.support.InheritedDomain')], b));
      const w = b;
      var x;
      let v = (x = class extends m {
        constructor(e) {
          super(e),
            (this.maxValue = null),
            (this.minValue = null),
            (this.type = 'range');
        }
        clone() {
          return new x({
            maxValue: this.maxValue,
            minValue: this.minValue,
            name: this.name,
          });
        }
      });
      (0, i._)(
        [
          (0, o.Cb)({
            type: Number,
            json: {
              type: [Number],
              read: {
                source: 'range',
                reader: (e, t) => t.range && t.range[1],
              },
              write: {
                enabled: !1,
                overridePolicy() {
                  return {
                    enabled: null != this.maxValue && null == this.minValue,
                  };
                },
                target: 'range',
                writer(e, t, n) {
                  t[n] = [this.minValue || 0, e];
                },
              },
            },
          }),
        ],
        v.prototype,
        'maxValue',
        void 0,
      ),
        (0, i._)(
          [
            (0, o.Cb)({
              type: Number,
              json: {
                type: [Number],
                read: {
                  source: 'range',
                  reader: (e, t) => t.range && t.range[0],
                },
                write: {
                  target: 'range',
                  writer(e, t, n) {
                    t[n] = [e, this.maxValue || 0];
                  },
                },
              },
            }),
          ],
          v.prototype,
          'minValue',
          void 0,
        ),
        (0, i._)([(0, a.J)({ range: 'range' })], v.prototype, 'type', void 0),
        (v = x = (0, i._)([(0, l.j)('esri.layers.support.RangeDomain')], v));
      const S = v,
        F = {
          key: 'type',
          base: m,
          typeMap: { range: v, 'coded-value': g, inherited: w },
        };
      function T(e) {
        if (!e || !e.type) return null;
        switch (e.type) {
          case 'range':
            return S.fromJSON(e);
          case 'codedValue':
            return g.fromJSON(e);
          case 'inherited':
            return w.fromJSON(e);
        }
        return null;
      }
    },
    86719: (e, t, n) => {
      n.d(t, { v: () => r });
      const r = new (n(35454).X)({
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
  },
]);
