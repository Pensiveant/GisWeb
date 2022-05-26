'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [6353],
  {
    84552: (e, t, i) => {
      i.d(t, { Z: () => d });
      var s,
        r = i(43697),
        n = i(96674),
        o = i(35463),
        a = i(5600),
        l = (i(67676), i(80442), i(75215), i(52011)),
        u = i(78981);
      let h = (s = class extends n.wq {
        constructor(e) {
          super(e), (this.value = 0), (this.unit = 'milliseconds');
        }
        toMilliseconds() {
          return (0, o.rJ)(this.value, this.unit, 'milliseconds');
        }
        clone() {
          return new s({ value: this.value, unit: this.unit });
        }
      });
      (0, r._)(
        [(0, a.Cb)({ type: Number, json: { write: !0 }, nonNullable: !0 })],
        h.prototype,
        'value',
        void 0,
      ),
        (0, r._)(
          [
            (0, a.Cb)({
              type: u.v.apiValues,
              json: { type: u.v.jsonValues, read: u.v.read, write: u.v.write },
              nonNullable: !0,
            }),
          ],
          h.prototype,
          'unit',
          void 0,
        ),
        (h = s = (0, r._)([(0, l.j)('esri.TimeInterval')], h));
      const d = h;
    },
    66643: (e, t, i) => {
      i.d(t, { Ed: () => n, UI: () => o, q6: () => a, mt: () => l });
      var s = i(70586),
        r = i(95330);
      function n(e, t, i) {
        return (0, r.as)(e.map((e, s) => t.apply(i, [e, s])));
      }
      function o(e, t, i) {
        return (0, r.as)(e.map((e, s) => t.apply(i, [e, s]))).then((e) =>
          e.map((e) => e.value),
        );
      }
      function a(e) {
        return (0, s.Wi)(e)
          ? (0, r.DB)()
          : e
              .then((e) => ({ ok: !0, value: e }))
              .catch((e) => ({ ok: !1, error: e }));
      }
      function l(e) {
        return e
          .then((e) => ({ ok: !0, value: e }))
          .catch((e) => ((0, r.r9)(e), { ok: !1, error: e }));
      }
    },
    43090: (e, t, i) => {
      function s(e) {
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
                t += s(r);
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
      function n(e, t) {
        return 32 + e.length * t;
      }
      var o;
      i.d(t, { Y8: () => o, f2: () => r, do: () => n }),
        (function (e) {
          (e[(e.KILOBYTES = 1024)] = 'KILOBYTES'),
            (e[(e.MEGABYTES = 1048576)] = 'MEGABYTES'),
            (e[(e.GIGABYTES = 1073741824)] = 'GIGABYTES');
        })(o || (o = {}));
    },
    24133: (e, t, i) => {
      i.d(t, { Q: () => a });
      var s = i(67676),
        r = i(70586),
        n = i(44553),
        o = i(88764);
      class a {
        constructor(e = 9, t) {
          (this.compareMinX = d),
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
          this.clear(), b.prune(), C.prune(), T.prune(), w.prune();
        }
        all(e) {
          this._all(this.data, e);
        }
        search(e, t) {
          let i = this.data;
          const s = this._toBBox;
          if (_(e, i))
            for (b.clear(); i; ) {
              for (let r = 0, n = i.children.length; r < n; r++) {
                const n = i.children[r],
                  o = i.leaf ? s(n) : n;
                _(e, o) &&
                  (i.leaf ? t(n) : y(e, o) ? this._all(n, t) : b.push(n));
              }
              i = b.pop();
            }
        }
        collides(e) {
          let t = this.data;
          const i = this._toBBox;
          if (!_(e, t)) return !1;
          for (b.clear(); t; ) {
            for (let s = 0, r = t.children.length; s < r; s++) {
              const r = t.children[s],
                n = t.leaf ? i(r) : r;
              if (_(e, n)) {
                if (t.leaf || y(e, n)) return !0;
                b.push(r);
              }
            }
            t = b.pop();
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
          return (this.data = new E([])), this;
        }
        remove(e) {
          if (!e) return this;
          let t,
            i = this.data,
            n = null,
            o = 0,
            a = !1;
          const l = this._toBBox(e);
          for (T.clear(), w.clear(); i || T.length > 0; ) {
            var u;
            if (
              (i ||
                ((i = (0, r.j0)(T.pop())),
                (n = T.data[T.length - 1]),
                (o = null != (u = w.pop()) ? u : 0),
                (a = !0)),
              i.leaf &&
                ((t = (0, s.cq)(i.children, e, i.children.length, i.indexHint)),
                -1 !== t))
            )
              return (
                i.children.splice(t, 1), T.push(i), this._condense(T), this
              );
            a || i.leaf || !y(i, l)
              ? n
                ? (o++, (i = n.children[o]), (a = !1))
                : (i = null)
              : (T.push(i), w.push(o), (o = 0), (n = i), (i = i.children[0]));
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
          for (C.clear(); i; ) {
            var s;
            if (!0 === i.leaf) for (const e of i.children) t(e);
            else C.pushArray(i.children);
            i = null != (s = C.pop()) ? s : null;
          }
        }
        _build(e, t, i, s) {
          const r = i - t + 1;
          let n = this._maxEntries;
          if (r <= n) {
            const s = new E(e.slice(t, i + 1));
            return l(s, this._toBBox), s;
          }
          s ||
            ((s = Math.ceil(Math.log(r) / Math.log(n))),
            (n = Math.ceil(r / n ** (s - 1))));
          const o = new F([]);
          o.height = s;
          const a = Math.ceil(r / n),
            u = a * Math.ceil(Math.sqrt(n));
          v(e, t, i, u, this.compareMinX);
          for (let r = t; r <= i; r += u) {
            const t = Math.min(r + u - 1, i);
            v(e, r, t, a, this.compareMinY);
            for (let i = r; i <= t; i += a) {
              const r = Math.min(i + a - 1, t);
              o.children.push(this._build(e, i, r, s - 1));
            }
          }
          return l(o, this._toBBox), o;
        }
        _chooseSubtree(e, t, i, s) {
          for (; s.push(t), !0 !== t.leaf && s.length - 1 !== i; ) {
            let i,
              s = 1 / 0,
              r = 1 / 0;
            for (let n = 0, o = t.children.length; n < o; n++) {
              const o = t.children[n],
                a = p(o),
                l = m(e, o) - a;
              l < r
                ? ((r = l), (s = a < s ? a : s), (i = o))
                : l === r && a < s && ((s = a), (i = o));
            }
            t = i || t.children[0];
          }
          return t;
        }
        _insert(e, t, i) {
          const s = this._toBBox,
            r = i ? e : s(e);
          T.clear();
          const n = this._chooseSubtree(r, this.data, t, T);
          for (
            n.children.push(e), h(n, r);
            t >= 0 && T.data[t].children.length > this._maxEntries;

          )
            this._split(T, t), t--;
          this._adjustParentBBoxes(r, T, t);
        }
        _split(e, t) {
          const i = e.data[t],
            s = i.children.length,
            r = this._minEntries;
          this._chooseSplitAxis(i, r, s);
          const n = this._chooseSplitIndex(i, r, s);
          if (!n)
            return void console.log(
              '  Error: assertion failed at PooledRBush._split: no valid split index',
            );
          const o = i.children.splice(n, i.children.length - n),
            a = i.leaf ? new E(o) : new F(o);
          (a.height = i.height),
            l(i, this._toBBox),
            l(a, this._toBBox),
            t ? e.data[t - 1].children.push(a) : this._splitRoot(i, a);
        }
        _splitRoot(e, t) {
          (this.data = new F([e, t])),
            (this.data.height = e.height + 1),
            l(this.data, this._toBBox);
        }
        _chooseSplitIndex(e, t, i) {
          let s, r, n;
          s = r = 1 / 0;
          for (let o = t; o <= i - t; o++) {
            const t = u(e, 0, o, this._toBBox),
              a = u(e, o, i, this._toBBox),
              l = g(t, a),
              h = p(t) + p(a);
            l < s
              ? ((s = l), (n = o), (r = h < r ? h : r))
              : l === s && h < r && ((r = h), (n = o));
          }
          return n;
        }
        _chooseSplitAxis(e, t, i) {
          const s = e.leaf ? this.compareMinX : d,
            r = e.leaf ? this.compareMinY : c;
          this._allDistMargin(e, t, i, s) < this._allDistMargin(e, t, i, r) &&
            e.children.sort(s);
        }
        _allDistMargin(e, t, i, s) {
          e.children.sort(s);
          const r = this._toBBox,
            n = u(e, 0, t, r),
            o = u(e, i - t, i, r);
          let a = f(n) + f(o);
          for (let s = t; s < i - t; s++) {
            const t = e.children[s];
            h(n, e.leaf ? r(t) : t), (a += f(n));
          }
          for (let s = i - t - 1; s >= t; s--) {
            const t = e.children[s];
            h(o, e.leaf ? r(t) : t), (a += f(o));
          }
          return a;
        }
        _adjustParentBBoxes(e, t, i) {
          for (let s = i; s >= 0; s--) h(t.data[s], e);
        }
        _condense(e) {
          for (let t = e.length - 1; t >= 0; t--) {
            const i = e.data[t];
            if (0 === i.children.length)
              if (t > 0) {
                const r = e.data[t - 1],
                  n = r.children;
                n.splice((0, s.cq)(n, i, n.length, r.indexHint), 1);
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
      function u(e, t, i, s, r) {
        r || (r = new E([])),
          (r.minX = 1 / 0),
          (r.minY = 1 / 0),
          (r.maxX = -1 / 0),
          (r.maxY = -1 / 0);
        for (let n, o = t; o < i; o++)
          (n = e.children[o]), h(r, e.leaf ? s(n) : n);
        return r;
      }
      function h(e, t) {
        (e.minX = Math.min(e.minX, t.minX)),
          (e.minY = Math.min(e.minY, t.minY)),
          (e.maxX = Math.max(e.maxX, t.maxX)),
          (e.maxY = Math.max(e.maxY, t.maxY));
      }
      function d(e, t) {
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
      function m(e, t) {
        return (
          (Math.max(t.maxX, e.maxX) - Math.min(t.minX, e.minX)) *
          (Math.max(t.maxY, e.maxY) - Math.min(t.minY, e.minY))
        );
      }
      function g(e, t) {
        const i = Math.max(e.minX, t.minX),
          s = Math.max(e.minY, t.minY),
          r = Math.min(e.maxX, t.maxX),
          n = Math.min(e.maxY, t.maxY);
        return Math.max(0, r - i) * Math.max(0, n - s);
      }
      function y(e, t) {
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
      function v(e, t, i, s, n) {
        const a = [t, i];
        for (; a.length; ) {
          const t = (0, r.j0)(a.pop()),
            i = (0, r.j0)(a.pop());
          if (t - i <= s) continue;
          const l = i + Math.ceil((t - i) / s / 2) * s;
          (0, o.q)(e, l, i, t, n), a.push(i, l, l, t);
        }
      }
      const b = new n.Z(),
        C = new n.Z(),
        T = new n.Z(),
        w = new n.Z({ deallocator: void 0 });
      class x extends class {
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
      class E extends x {
        constructor(e) {
          super(), (this.children = e), (this.leaf = !0);
        }
      }
      class F extends x {
        constructor(e) {
          super(), (this.children = e), (this.leaf = !1);
        }
      }
    },
    37549: (e, t, i) => {
      i.d(t, { H: () => o });
      var s = i(80442),
        r = i(24133);
      const n = { minX: 0, minY: 0, maxX: 0, maxY: 0 };
      class o {
        constructor() {
          (this._indexInvalid = !1),
            (this._boundsToLoad = []),
            (this._boundsById = new Map()),
            (this._idByBounds = new Map()),
            (this._index = new r.Q(
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
              (n.minX = t[0]),
                (n.minY = t[1]),
                (n.maxX = t[2]),
                (n.maxY = t[3]),
                e.search(n, i);
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
      i.d(t, { Z: () => m });
      var s = i(20102),
        r = i(32448),
        n = i(92604),
        o = i(70586),
        a = i(60437),
        l = i(24470),
        u = i(98732),
        h = i(37549),
        d = i(29730),
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
            (e.centroid = (0, d.Y)(new p.Z(), e.geometry, t.hasZ, t.hasM)),
          e.centroid
        ),
      };
      class m {
        constructor(e) {
          (this.geometryInfo = e),
            (this._boundsStore = new h.H()),
            (this._featuresById = new Map()),
            (this._markedIds = new Set()),
            (this.events = new r.Z()),
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
            return void n.Z.getLogger(
              'esri.layers.graphics.data.FeatureStore',
            ).error(
              new s.Z('featurestore:invalid-feature', 'feature id is missing', {
                feature: e,
              }),
            );
          const i = this._featuresById.get(t);
          let r;
          if (
            (this._markedIds.add(t),
            i
              ? ((e.displayId = i.displayId),
                (r = this._boundsStore.get(t)),
                this._boundsStore.delete(t))
              : (0, o.pC)(this.onFeatureAdd) && this.onFeatureAdd(e),
            (0, o.Wi)(e.geometry) ||
              !e.geometry.coords ||
              !e.geometry.coords.length)
          )
            return (
              this._boundsStore.set(t, null), void this._featuresById.set(t, e)
            );
          (r = (0, u.$)(
            (0, o.pC)(r) ? r : (0, l.Ue)(),
            e.geometry,
            this.geometryInfo.hasZ,
            this.geometryInfo.hasM,
          )),
            (0, o.pC)(r) && this._boundsStore.set(t, r),
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
    1231: (e, t, i) => {
      i.d(t, { Z: () => g });
      var s,
        r = i(43697),
        n = i(35454),
        o = i(96674),
        a = i(5600),
        l = (i(67676), i(80442), i(75215)),
        u = i(36030),
        h = i(71715),
        d = i(52011),
        c = i(72729),
        p = i(86719);
      const f = new n.X({
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
      let m = (s = class extends o.wq {
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
          let i;
          try {
            i = JSON.parse(t);
          } catch (e) {}
          return i ? i.value : null;
        }
        readValueType(e, { description: t }) {
          let i;
          try {
            i = JSON.parse(t);
          } catch (e) {}
          return i ? f.fromJSON(i.fieldValueType) : null;
        }
        clone() {
          return new s({
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
      (0, r._)(
        [(0, a.Cb)({ type: String, json: { write: !0 } })],
        m.prototype,
        'alias',
        void 0,
      ),
        (0, r._)(
          [
            (0, a.Cb)({
              type: [String, Number],
              json: { write: { allowNull: !0 } },
            }),
          ],
          m.prototype,
          'defaultValue',
          void 0,
        ),
        (0, r._)([(0, a.Cb)()], m.prototype, 'description', void 0),
        (0, r._)(
          [(0, h.r)('description')],
          m.prototype,
          'readDescription',
          null,
        ),
        (0, r._)(
          [
            (0, a.Cb)({
              types: c.V5,
              json: { read: { reader: c.im }, write: !0 },
            }),
          ],
          m.prototype,
          'domain',
          void 0,
        ),
        (0, r._)(
          [(0, a.Cb)({ type: Boolean, json: { write: !0 } })],
          m.prototype,
          'editable',
          void 0,
        ),
        (0, r._)(
          [(0, a.Cb)({ type: l.z8, json: { write: !0 } })],
          m.prototype,
          'length',
          void 0,
        ),
        (0, r._)(
          [(0, a.Cb)({ type: String, json: { write: !0 } })],
          m.prototype,
          'name',
          void 0,
        ),
        (0, r._)(
          [(0, a.Cb)({ type: Boolean, json: { write: !0 } })],
          m.prototype,
          'nullable',
          void 0,
        ),
        (0, r._)([(0, u.J)(p.v)], m.prototype, 'type', void 0),
        (0, r._)([(0, a.Cb)()], m.prototype, 'valueType', void 0),
        (0, r._)(
          [(0, h.r)('valueType', ['description'])],
          m.prototype,
          'readValueType',
          null,
        ),
        (m = s = (0, r._)([(0, d.j)('esri.layers.support.Field')], m));
      const g = m;
    },
    39450: (e, t, i) => {
      i.d(t, { Z: () => h });
      var s,
        r = i(43697),
        n = i(96674),
        o = i(5600),
        a = (i(67676), i(80442), i(75215)),
        l = i(52011);
      let u = (s = class extends n.wq {
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
          return new s({
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
          (0, o.Cb)({
            json: {
              write: !0,
              origins: {
                'web-document': { read: !1, write: !1 },
                'portal-item': { read: !1, write: !1 },
              },
            },
          }),
        ],
        u.prototype,
        'cols',
        void 0,
      ),
        (0, r._)(
          [(0, o.Cb)({ type: a.z8, json: { write: !0 } })],
          u.prototype,
          'level',
          void 0,
        ),
        (0, r._)(
          [(0, o.Cb)({ type: String, json: { write: !0 } })],
          u.prototype,
          'levelValue',
          void 0,
        ),
        (0, r._)(
          [
            (0, o.Cb)({
              json: {
                write: !0,
                origins: {
                  'web-document': { read: !1, write: !1 },
                  'portal-item': { read: !1, write: !1 },
                },
              },
            }),
          ],
          u.prototype,
          'origin',
          void 0,
        ),
        (0, r._)(
          [(0, o.Cb)({ type: Number, json: { write: !0 } })],
          u.prototype,
          'resolution',
          void 0,
        ),
        (0, r._)(
          [
            (0, o.Cb)({
              json: {
                write: !0,
                origins: {
                  'web-document': { read: !1, write: !1 },
                  'portal-item': { read: !1, write: !1 },
                },
              },
            }),
          ],
          u.prototype,
          'rows',
          void 0,
        ),
        (0, r._)(
          [(0, o.Cb)({ type: Number, json: { write: !0 } })],
          u.prototype,
          'scale',
          void 0,
        ),
        (u = s = (0, r._)([(0, l.j)('esri.layers.support.LOD')], u));
      const h = u;
    },
    11145: (e, t, i) => {
      i.d(t, { Z: () => x });
      var s,
        r = i(43697),
        n = i(35454),
        o = i(96674),
        a = i(70586),
        l = i(67900),
        u = i(5600),
        h = (i(67676), i(80442), i(75215)),
        d = i(71715),
        c = i(52011),
        p = i(30556),
        f = i(13473),
        m = i(82971),
        g = i(24470),
        y = i(8744),
        _ = i(40488),
        v = i(39450);
      const b = new n.X({
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
      let C = (s = class extends o.wq {
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
            spatialReference: n = m.Z.WebMercator,
            numLODs: o = 24,
          } = e;
          if (!(0, y.JY)(n)) {
            const e = [];
            if (i)
              for (let t = 0; t < i.length; t++) {
                const s = i[t];
                e.push({ level: t, scale: s, resolution: s });
              }
            else {
              let t = 5e-4;
              for (let i = o - 1; i >= 0; i--)
                e.unshift({ level: i, scale: t, resolution: t }), (t *= 2);
            }
            return new s({
              dpi: 96,
              lods: e,
              origin: new f.Z(0, 0, n),
              size: [r, r],
              spatialReference: n,
            });
          }
          const a = (0, y.C5)(n),
            u = e.origin
              ? new f.Z({ x: e.origin.x, y: e.origin.y, spatialReference: n })
              : new f.Z(
                  a
                    ? { x: a.origin[0], y: a.origin[1], spatialReference: n }
                    : { x: 0, y: 0, spatialReference: n },
                ),
            h = 1 / (39.37 * (0, l.c9)(n) * 96),
            d = [];
          if (i)
            for (let e = 0; e < i.length; e++) {
              const t = i[e],
                s = t * h;
              d.push({ level: e, scale: t, resolution: s });
            }
          else {
            let e = (0, y.sT)(n)
              ? (512 / r) * 591657527.5917094
              : (256 / r) * 591657527.591555;
            const i = Math.ceil(o / t);
            d.push({ level: 0, scale: e, resolution: e * h });
            for (let s = 1; s < i; s++) {
              const i = e / 2 ** t,
                r = i * h;
              d.push({ level: s, scale: i, resolution: r }), (e = i);
            }
          }
          return new s({
            dpi: 96,
            lods: d,
            origin: u,
            size: [r, r],
            spatialReference: n,
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
          return f.Z.fromJSON({ spatialReference: t.spatialReference, ...e });
        }
        set lods(e) {
          let t = 0,
            i = 0;
          const s = [];
          (this._levelToLOD = {}),
            e &&
              ((t = -1 / 0),
              (i = 1 / 0),
              e.forEach((e) => {
                s.push(e.scale),
                  (t = e.scale > t ? e.scale : t),
                  (i = e.scale < i ? e.scale : i),
                  (this._levelToLOD[e.level] = e);
              })),
            this._set('scales', s),
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
              s = i + 1;
            return t[i] / (t[i] / t[s]) ** (e - i);
          }
        }
        scaleToZoom(e) {
          const t = this.scales,
            i = t.length - 1;
          let s = 0;
          for (; s < i; s++) {
            const i = t[s],
              r = t[s + 1];
            if (i <= e) return s;
            if (r === e) return s + 1;
            if (i > e && r < e) return s + Math.log(i / e) / Math.log(i / r);
          }
          return s;
        }
        snapScale(e, t = 0.95) {
          const i = this.scaleToZoom(e);
          return i % Math.floor(i) >= t
            ? this.zoomToScale(Math.ceil(i))
            : this.zoomToScale(Math.floor(i));
        }
        tileAt(e, t, i, s) {
          const r = this.lodAt(e);
          if (!r) return null;
          let n, o;
          if ('number' == typeof t) (n = t), (o = i);
          else if ((0, y.fS)(t.spatialReference, this.spatialReference))
            (n = t.x), (o = t.y), (s = i);
          else {
            const e = (0, _.iV)(t, this.spatialReference);
            if ((0, a.Wi)(e)) return null;
            (n = e.x), (o = e.y), (s = i);
          }
          const l = r.resolution * this.size[0],
            u = r.resolution * this.size[1];
          return (
            s ||
              (s = { id: null, level: 0, row: 0, col: 0, extent: (0, g.Ue)() }),
            (s.level = e),
            (s.row = Math.floor((this.origin.y - o) / u + 0.001)),
            (s.col = Math.floor((n - this.origin.x) / l + 0.001)),
            this.updateTileInfo(s),
            s
          );
        }
        updateTileInfo(e, t = s.ExtrapolateOptions.NONE) {
          let i = this.lodAt(e.level);
          if (!i && t === s.ExtrapolateOptions.POWER_OF_TWO) {
            const t = this.lods[this.lods.length - 1];
            t.level < e.level && (i = t);
          }
          if (!i) return;
          const r = e.level - i.level,
            n = (i.resolution * this.size[0]) / 2 ** r,
            o = (i.resolution * this.size[1]) / 2 ** r;
          (e.id = `${e.level}/${e.row}/${e.col}`),
            e.extent || (e.extent = (0, g.Ue)()),
            (e.extent[0] = this.origin.x + e.col * n),
            (e.extent[1] = this.origin.y - (e.row + 1) * o),
            (e.extent[2] = e.extent[0] + n),
            (e.extent[3] = e.extent[1] + o);
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
            s = i * this.size[0],
            r = i * this.size[1];
          return (
            (e[0] = this.origin.x + t.col * s),
            (e[1] = this.origin.y - (t.row + 1) * r),
            (e[2] = e[0] + s),
            (e[3] = e[1] + r),
            e
          );
        }
        lodAt(e) {
          return (this._levelToLOD && this._levelToLOD[e]) || null;
        }
        clone() {
          return s.fromJSON(this.write({}));
        }
        getOrCreateCompatible(e, t) {
          if (256 === this.size[0] && 256 === this.size[1])
            return 256 === e ? this : null;
          const i = [],
            r = this.lods.length;
          for (let e = 0; e < r; e++) {
            const s = this.lods[e],
              r = s.resolution * t;
            i.push(new v.Z({ level: s.level, scale: s.scale, resolution: r }));
          }
          return new s({
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
            const s = e[i];
            (this._upsampleLevels[s.level] = {
              parentLevel: t ? t.level : -1,
              factor: t ? t.resolution / s.resolution : 0,
            }),
              (t = s);
          }
        }
      });
      var T, w;
      (0, r._)(
        [(0, u.Cb)({ type: Number, json: { write: !0 } })],
        C.prototype,
        'compressionQuality',
        void 0,
      ),
        (0, r._)(
          [(0, u.Cb)({ type: Number, json: { write: !0 } })],
          C.prototype,
          'dpi',
          void 0,
        ),
        (0, r._)(
          [
            (0, u.Cb)({
              type: String,
              json: {
                read: b.read,
                write: b.write,
                origins: { 'web-scene': { read: !1, write: !1 } },
              },
            }),
          ],
          C.prototype,
          'format',
          void 0,
        ),
        (0, r._)(
          [(0, u.Cb)({ readOnly: !0 })],
          C.prototype,
          'isWrappable',
          null,
        ),
        (0, r._)(
          [(0, u.Cb)({ type: f.Z, json: { write: !0 } })],
          C.prototype,
          'origin',
          void 0,
        ),
        (0, r._)([(0, d.r)('origin')], C.prototype, 'readOrigin', null),
        (0, r._)(
          [(0, u.Cb)({ type: [v.Z], value: null, json: { write: !0 } })],
          C.prototype,
          'lods',
          null,
        ),
        (0, r._)(
          [(0, u.Cb)({ readOnly: !0 })],
          C.prototype,
          'minScale',
          void 0,
        ),
        (0, r._)(
          [(0, u.Cb)({ readOnly: !0 })],
          C.prototype,
          'maxScale',
          void 0,
        ),
        (0, r._)([(0, u.Cb)({ readOnly: !0 })], C.prototype, 'scales', void 0),
        (0, r._)(
          [
            (0, u.Cb)({
              cast: (e) =>
                Array.isArray(e)
                  ? e
                  : 'number' == typeof e
                  ? [e, e]
                  : [256, 256],
            }),
          ],
          C.prototype,
          'size',
          void 0,
        ),
        (0, r._)(
          [(0, d.r)('size', ['rows', 'cols'])],
          C.prototype,
          'readSize',
          null,
        ),
        (0, r._)(
          [(0, p.c)('size', { cols: { type: h.z8 }, rows: { type: h.z8 } })],
          C.prototype,
          'writeSize',
          null,
        ),
        (0, r._)(
          [(0, u.Cb)({ type: m.Z, json: { write: !0 } })],
          C.prototype,
          'spatialReference',
          void 0,
        ),
        (C = s = (0, r._)([(0, c.j)('esri.layers.support.TileInfo')], C)),
        (T = C || (C = {})),
        ((w = T.ExtrapolateOptions || (T.ExtrapolateOptions = {}))[
          (w.NONE = 0)
        ] = 'NONE'),
        (w[(w.POWER_OF_TWO = 1)] = 'POWER_OF_TWO');
      const x = C;
    },
    30547: (e, t, i) => {
      i.d(t, { Z: () => v });
      var s,
        r = i(43697),
        n = i(92835),
        o = i(84552),
        a = i(96674),
        l = i(22974),
        u = i(70586),
        h = i(5600),
        d = (i(75215), i(71715)),
        c = i(52011),
        p = i(30556);
      i(67676), i(80442);
      let f = (s = class extends a.wq {
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
        [(0, h.Cb)({ type: Boolean, json: { write: !0 } })],
        f.prototype,
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
          f.prototype,
          'readRespectsDaylightSaving',
          null,
        ),
        (0, r._)(
          [
            (0, h.Cb)({
              type: String,
              json: {
                read: { source: 'timeZone' },
                write: { target: 'timeZone' },
              },
            }),
          ],
          f.prototype,
          'timezone',
          void 0,
        ),
        (f = s = (0, r._)([(0, c.j)('esri.layers.support.TimeReference')], f));
      const m = f;
      var g,
        y = i(78981);
      let _ = (g = class extends a.wq {
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
            ? new o.Z({
                value: t.timeInterval,
                unit: y.v.fromJSON(t.timeIntervalUnits),
              })
            : t.defaultTimeInterval && t.defaultTimeIntervalUnits
            ? new o.Z({
                value: t.defaultTimeInterval,
                unit: y.v.fromJSON(t.defaultTimeIntervalUnits),
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
            fullTimeExtent: o,
            trackIdField: a,
            useTime: u,
          } = this;
          return new g({
            cumulative: e,
            endField: t,
            hasLiveData: i,
            interval: s,
            startField: r,
            timeReference: (0, l.d9)(n),
            fullTimeExtent: (0, l.d9)(o),
            trackIdField: a,
            useTime: u,
          });
        }
      });
      (0, r._)(
        [
          (0, h.Cb)({
            type: Boolean,
            json: {
              read: { source: 'exportOptions.timeDataCumulative' },
              write: { target: 'exportOptions.timeDataCumulative' },
            },
          }),
        ],
        _.prototype,
        'cumulative',
        void 0,
      ),
        (0, r._)(
          [
            (0, h.Cb)({
              type: String,
              json: {
                read: { source: 'endTimeField' },
                write: { target: 'endTimeField', allowNull: !0 },
              },
            }),
          ],
          _.prototype,
          'endField',
          void 0,
        ),
        (0, r._)(
          [
            (0, h.Cb)({
              type: n.Z,
              json: { write: { enabled: !0, allowNull: !0 } },
            }),
          ],
          _.prototype,
          'fullTimeExtent',
          void 0,
        ),
        (0, r._)(
          [(0, d.r)('fullTimeExtent', ['timeExtent'])],
          _.prototype,
          'readFullTimeExtent',
          null,
        ),
        (0, r._)(
          [(0, p.c)('fullTimeExtent')],
          _.prototype,
          'writeFullTimeExtent',
          null,
        ),
        (0, r._)(
          [(0, h.Cb)({ type: Boolean, json: { write: !0 } })],
          _.prototype,
          'hasLiveData',
          void 0,
        ),
        (0, r._)(
          [
            (0, h.Cb)({
              type: o.Z,
              json: { write: { enabled: !0, allowNull: !0 } },
            }),
          ],
          _.prototype,
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
          _.prototype,
          'readInterval',
          null,
        ),
        (0, r._)([(0, p.c)('interval')], _.prototype, 'writeInterval', null),
        (0, r._)(
          [
            (0, h.Cb)({
              type: String,
              json: {
                read: { source: 'startTimeField' },
                write: { target: 'startTimeField', allowNull: !0 },
              },
            }),
          ],
          _.prototype,
          'startField',
          void 0,
        ),
        (0, r._)(
          [
            (0, h.Cb)({
              type: m,
              json: { write: { enabled: !0, allowNull: !0 } },
            }),
          ],
          _.prototype,
          'timeReference',
          void 0,
        ),
        (0, r._)(
          [
            (0, h.Cb)({
              type: String,
              json: { write: { enabled: !0, allowNull: !0 } },
            }),
          ],
          _.prototype,
          'trackIdField',
          void 0,
        ),
        (0, r._)(
          [
            (0, h.Cb)({
              type: Boolean,
              json: {
                read: { source: 'exportOptions.useTime' },
                write: { target: 'exportOptions.useTime' },
              },
            }),
          ],
          _.prototype,
          'useTime',
          void 0,
        ),
        (_ = g = (0, r._)([(0, c.j)('esri.layers.support.TimeInfo')], _));
      const v = _;
    },
    72729: (e, t, i) => {
      i.d(t, { im: () => E, V5: () => x }), i(80442);
      var s,
        r = i(43697),
        n = i(22974),
        o = i(5600),
        a = (i(75215), i(36030)),
        l = i(52011),
        u = i(96674);
      i(67676);
      let h = (s = class extends u.wq {
        constructor(e) {
          super(e), (this.name = null), (this.code = null);
        }
        clone() {
          return new s({ name: this.name, code: this.code });
        }
      });
      (0, r._)(
        [(0, o.Cb)({ type: String, json: { write: !0 } })],
        h.prototype,
        'name',
        void 0,
      ),
        (0, r._)(
          [(0, o.Cb)({ type: [String, Number], json: { write: !0 } })],
          h.prototype,
          'code',
          void 0,
        ),
        (h = s = (0, r._)([(0, l.j)('esri.layers.support.CodedValue')], h));
      const d = h,
        c = new (i(35454).X)({
          inherited: 'inherited',
          codedValue: 'coded-value',
          range: 'range',
        });
      let p = class extends u.wq {
        constructor(e) {
          super(e), (this.name = null), (this.type = null);
        }
      };
      (0, r._)(
        [(0, o.Cb)({ type: String, json: { write: !0 } })],
        p.prototype,
        'name',
        void 0,
      ),
        (0, r._)([(0, a.J)(c)], p.prototype, 'type', void 0),
        (p = (0, r._)([(0, l.j)('esri.layers.support.Domain')], p));
      const f = p;
      var m;
      let g = (m = class extends f {
        constructor(e) {
          super(e), (this.codedValues = null), (this.type = 'coded-value');
        }
        getName(e) {
          let t = null;
          if (this.codedValues) {
            const i = String(e);
            this.codedValues.some(
              (e) => (String(e.code) === i && (t = e.name), !!t),
            );
          }
          return t;
        }
        clone() {
          return new m({
            codedValues: (0, n.d9)(this.codedValues),
            name: this.name,
          });
        }
      });
      (0, r._)(
        [(0, o.Cb)({ type: [d], json: { write: !0 } })],
        g.prototype,
        'codedValues',
        void 0,
      ),
        (0, r._)(
          [(0, a.J)({ codedValue: 'coded-value' })],
          g.prototype,
          'type',
          void 0,
        ),
        (g = m =
          (0, r._)([(0, l.j)('esri.layers.support.CodedValueDomain')], g));
      const y = g;
      var _;
      i(92604), i(37697);
      let v = (_ = class extends f {
        constructor(e) {
          super(e), (this.type = 'inherited');
        }
        clone() {
          return new _();
        }
      });
      (0, r._)(
        [(0, a.J)({ inherited: 'inherited' })],
        v.prototype,
        'type',
        void 0,
      ),
        (v = _ =
          (0, r._)([(0, l.j)('esri.layers.support.InheritedDomain')], v));
      const b = v;
      var C;
      let T = (C = class extends f {
        constructor(e) {
          super(e),
            (this.maxValue = null),
            (this.minValue = null),
            (this.type = 'range');
        }
        clone() {
          return new C({
            maxValue: this.maxValue,
            minValue: this.minValue,
            name: this.name,
          });
        }
      });
      (0, r._)(
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
                writer(e, t, i) {
                  t[i] = [this.minValue || 0, e];
                },
              },
            },
          }),
        ],
        T.prototype,
        'maxValue',
        void 0,
      ),
        (0, r._)(
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
                  writer(e, t, i) {
                    t[i] = [e, this.maxValue || 0];
                  },
                },
              },
            }),
          ],
          T.prototype,
          'minValue',
          void 0,
        ),
        (0, r._)([(0, a.J)({ range: 'range' })], T.prototype, 'type', void 0),
        (T = C = (0, r._)([(0, l.j)('esri.layers.support.RangeDomain')], T));
      const w = T,
        x = {
          key: 'type',
          base: f,
          typeMap: { range: T, 'coded-value': y, inherited: b },
        };
      function E(e) {
        if (!e || !e.type) return null;
        switch (e.type) {
          case 'range':
            return w.fromJSON(e);
          case 'codedValue':
            return y.fromJSON(e);
          case 'inherited':
            return b.fromJSON(e);
        }
        return null;
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
    98363: (e, t, i) => {
      i.r(t),
        i.d(t, {
          FeatureServiceSnappingSourceWorker: () => ee,
          default: () => te,
        });
      var s = i(43697),
        r = i(32448),
        n = i(61247),
        o = i(70586),
        a = i(95330);
      function l(e, t, i, s, r) {
        const n = 'function' == typeof s ? s : null,
          o = 'object' == typeof s ? s : null;
        'boolean' == typeof s && (r = s);
        let l,
          u = !1;
        function h() {
          l && (l.remove(), (l = null));
        }
        const d = (0, a.dD)();
        (0, a.fu)(o, () => {
          h(), d.reject((0, a.zE)());
        });
        const c = {
          then: d.promise.then.bind(d.promise),
          catch: d.promise.catch.bind(d.promise),
          remove: h,
        };
        return (
          Object.freeze(c),
          (l = (function (e, t, i, s, r) {
            const n = e.watch(
              t,
              (t, r, n, o) => {
                (i && !i(t)) || null == s || s.call(e, t, r, n, o);
              },
              r,
            );
            if (Array.isArray(t))
              for (const r of t) {
                const n = e.get(r);
                i && i(n) && (null == s || s.call(e, n, n, t, e));
              }
            else {
              const r = e.get(t);
              i && i(r) && (null == s || s.call(e, r, r, t, e));
            }
            return n;
          })(
            e,
            t,
            i,
            (t, i, s, r) => {
              (u = !0),
                h(),
                n && n.call(e, t, i, s, r),
                d.resolve({
                  value: t,
                  oldValue: i,
                  propertyName: s,
                  target: r,
                });
            },
            r,
          )),
          u && h(),
          c
        );
      }
      function u(e) {
        return !e;
      }
      i(91460), i(22974);
      var h = i(5600),
        d = i(67676),
        c = (i(80442), i(75215), i(52011)),
        p = i(82971),
        f = i(57191),
        m = i(7673),
        g = i(11145),
        y = i(30547),
        _ = i(57444),
        v = i(15923);
      let b = class extends v.Z {
        constructor() {
          super(...arguments), (this.updating = !1), (this.pending = []);
        }
        push(e, t) {
          this.pending.push({ promise: e, callback: t }),
            1 === this.pending.length && this._process();
        }
        _process() {
          if (!this.pending.length) return void (this.updating = !1);
          this.updating = !0;
          const e = this.pending[0];
          e.promise
            .then((t) => e.callback(t))
            .catch(() => {})
            .then(() => {
              this.pending.shift(), this._process();
            });
        }
      };
      (0, s._)([(0, h.Cb)()], b.prototype, 'updating', void 0),
        (b = (0, s._)([(0, c.j)('esri.core.AsyncSequence')], b));
      var C,
        T,
        w = i(3920),
        x = i(50758),
        E = i(92604),
        F = i(17445),
        I = i(6570),
        S = i(24470),
        O = i(98732),
        B = i(78760),
        M = i(34599),
        D = i(66643);
      class R {
        constructor(e, t) {
          (this.data = e),
            (this.resolution = t),
            (this.state = { type: C.CREATED }),
            (this.alive = !0);
        }
        process(e) {
          switch (this.state.type) {
            case C.CREATED:
              return (
                (this.state = this._gotoFetchCount(this.state, e)),
                this.state.task.promise.then(e.resume, e.resume)
              );
            case C.FETCH_COUNT:
              break;
            case C.FETCHED_COUNT:
              return (
                (this.state = this._gotoFetchFeatures(this.state, e)),
                this.state.task.promise.then(e.resume, e.resume)
              );
            case C.FETCH_FEATURES:
              break;
            case C.FETCHED_FEATURES:
              this.state = this._goToDone(this.state, e);
            case C.DONE:
          }
          return null;
        }
        get debugInfo() {
          return {
            data: this.data,
            featureCount: this.featureCount,
            state: this.stateToString,
          };
        }
        get featureCount() {
          switch (this.state.type) {
            case C.CREATED:
            case C.FETCH_COUNT:
              return 0;
            case C.FETCHED_COUNT:
              return this.state.featureCount;
            case C.FETCH_FEATURES:
              return this.state.previous.featureCount;
            case C.FETCHED_FEATURES:
              return this.state.features.length;
            case C.DONE:
              return this.state.previous.features.length;
          }
        }
        get stateToString() {
          switch (this.state.type) {
            case C.CREATED:
              return 'created';
            case C.FETCH_COUNT:
              return 'fetch-count';
            case C.FETCHED_COUNT:
              return 'fetched-count';
            case C.FETCH_FEATURES:
              return 'fetch-features';
            case C.FETCHED_FEATURES:
              return 'fetched-features';
            case C.DONE:
              return 'done';
          }
        }
        _gotoFetchCount(e, t) {
          return {
            type: C.FETCH_COUNT,
            previous: e,
            task: (0, a.vr)(async (e) => {
              const i = await (0, D.mt)(t.fetchCount(this, e));
              this.state.type === C.FETCH_COUNT &&
                (this.state = this._gotoFetchedCount(
                  this.state,
                  i.ok ? i.value : 1 / 0,
                ));
            }),
          };
        }
        _gotoFetchedCount(e, t) {
          return { type: C.FETCHED_COUNT, featureCount: t, previous: e };
        }
        _gotoFetchFeatures(e, t) {
          return {
            type: C.FETCH_FEATURES,
            previous: e,
            task: (0, a.vr)(async (i) => {
              const s = await (0, D.mt)(
                t.fetchFeatures(this, e.featureCount, i),
              );
              this.state.type === C.FETCH_FEATURES &&
                (this.state = this._gotoFetchedFeatures(
                  this.state,
                  s.ok ? s.value : [],
                ));
            }),
          };
        }
        _gotoFetchedFeatures(e, t) {
          return { type: C.FETCHED_FEATURES, previous: e, features: t };
        }
        _goToDone(e, t) {
          return t.finish(this, e.features), { type: C.DONE, previous: e };
        }
        reset() {
          const e = this.state;
          switch (((this.state = { type: C.CREATED }), e.type)) {
            case C.CREATED:
            case C.FETCHED_COUNT:
            case C.FETCHED_FEATURES:
            case C.DONE:
              break;
            case C.FETCH_COUNT:
            case C.FETCH_FEATURES:
              e.task.abort();
          }
        }
        intersects(e) {
          return (
            !(!(0, o.Wi)(e) && this.data.extent) ||
            ((0, S.oJ)(e, j), (0, S.kK)(this.data.extent, j))
          );
        }
      }
      ((T = C || (C = {}))[(T.CREATED = 0)] = 'CREATED'),
        (T[(T.FETCH_COUNT = 1)] = 'FETCH_COUNT'),
        (T[(T.FETCHED_COUNT = 2)] = 'FETCHED_COUNT'),
        (T[(T.FETCH_FEATURES = 3)] = 'FETCH_FEATURES'),
        (T[(T.FETCHED_FEATURES = 4)] = 'FETCHED_FEATURES'),
        (T[(T.DONE = 5)] = 'DONE');
      const j = (0, S.Ue)(),
        A = E.Z.getLogger(
          'esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher',
        );
      let N = class extends w.r {
        constructor(e) {
          super(e),
            (this.tilesOfInterest = []),
            (this.availability = 0),
            (this.pendingTiles = new Map()),
            (this.pendingEdits = new b()),
            (this.pendingEditsAbortController = new AbortController());
        }
        get minimumVerticesPerFeature() {
          var e;
          switch (
            null == (e = this.store) ? void 0 : e.featureStore.geometryType
          ) {
            case 'esriGeometryPoint':
            case 'esriGeometryMultipoint':
              return 1;
            case 'esriGeometryPolygon':
              return 4;
            case 'esriGeometryPolyline':
              return 2;
          }
        }
        set filter(e) {
          const t = this._get('filter'),
            i = this._filterProperties(e);
          JSON.stringify(t) !== JSON.stringify(i) && this._set('filter', i);
        }
        set customParameters(e) {
          const t = this._get('customParameters');
          JSON.stringify(t) !== JSON.stringify(e) &&
            this._set('customParameters', e);
        }
        get configuration() {
          return {
            filter: this.filter,
            customParameters: this.customParameters,
            tileInfo: this.tileInfo,
            tileSize: this.tileSize,
          };
        }
        set tileInfo(e) {
          const t = this._get('tileInfo');
          t !== e &&
            (((0, o.pC)(e) &&
              (0, o.pC)(t) &&
              JSON.stringify(e) === JSON.stringify(t)) ||
              (this._set('tileInfo', e), (this.store.tileInfo = e)));
        }
        set tileSize(e) {
          this._get('tileSize') !== e && this._set('tileSize', e);
        }
        get updating() {
          return this.updatingHandles.updating || this.pendingEdits.updating;
        }
        initialize() {
          this._initializeFetchExtent(),
            this.updatingHandles.add(
              () => this.configuration,
              () => this.refresh(),
            ),
            this.updatingHandles.add(
              () => this.tilesOfInterest,
              (e, t) => {
                (0, d.fS)(e, t, ({ id: e }, { id: t }) => e === t) ||
                  this._process();
              },
              F.Z_,
            );
        }
        destroy() {
          this.pendingTiles.forEach((e) => this._deletePendingTile(e)),
            this.pendingTiles.clear(),
            this.store.destroy(),
            (this.tilesOfInterest.length = 0),
            this.pendingEditsAbortController.abort(),
            (this.pendingEditsAbortController = null);
        }
        refresh() {
          this.store.refresh(),
            this.pendingTiles.forEach((e) => this._deletePendingTile(e)),
            this._process();
        }
        applyEdits(e) {
          this.pendingEdits.push(e, async (e) => {
            if (
              0 === e.addedFeatures.length &&
              0 === e.updatedFeatures.length &&
              0 === e.deletedFeatures.length
            )
              return;
            for (const [, e] of this.pendingTiles) e.reset();
            const t = {
              ...e,
              deletedFeatures: e.deletedFeatures.map(
                ({ objectId: e, globalId: t }) =>
                  e && -1 !== e ? e : this._lookupObjectIdByGlobalId(t),
              ),
            };
            await this.updatingHandles.addPromise(
              this.store.processEdits(
                t,
                (e, t) => this._queryFeaturesById(e, t),
                this.pendingEditsAbortController.signal,
              ),
            ),
              this._processPendingTiles();
          });
        }
        _initializeFetchExtent() {
          if (!this.capabilities.query.supportsExtent) return;
          const e = (0, a.vr)(async (e) => {
            try {
              var t;
              const i = await (0, M.executeQueryForExtent)(
                this.url,
                new _.Z({
                  where: '1=1',
                  outSpatialReference: this.spatialReference,
                  cacheHint:
                    !!this.capabilities.query.supportsCacheHint || void 0,
                }),
                { query: this.configuration.customParameters, signal: e },
              );
              this.store.extent = I.Z.fromJSON(
                null == (t = i.data) ? void 0 : t.extent,
              );
            } catch (e) {
              (0, a.r9)(e), A.warn('Failed to fetch data extent', e);
            }
          });
          this.updatingHandles.addPromise(
            e.promise.then(() => this._process()),
          ),
            this.handles.add((0, x.kB)(() => e.abort()));
        }
        get debugInfo() {
          return {
            numberOfFeatures: this.store.featureStore.numFeatures,
            tilesOfInterest: this.tilesOfInterest,
            pendingTiles: Array.from(this.pendingTiles.values()).map(
              (e) => e.debugInfo,
            ),
            storedTiles: this.store.debugInfo,
          };
        }
        _process() {
          this._markTilesNotAlive(),
            this._createPendingTiles(),
            this._deletePendingTiles(),
            this._processPendingTiles();
        }
        _markTilesNotAlive() {
          for (const [, e] of this.pendingTiles) e.alive = !1;
        }
        _createPendingTiles() {
          const e = this._collectMissingTilesInfo();
          if (
            (this._setAvailability(
              (0, o.Wi)(e) ? 1 : e.coveredArea / e.fullArea,
            ),
            !(0, o.Wi)(e))
          )
            for (const { data: t, resolution: i } of e.missingTiles) {
              const e = this.pendingTiles.get(t.id);
              e
                ? ((e.resolution = i), (e.alive = !0))
                : this._createPendingTile(t, i);
            }
        }
        _collectMissingTilesInfo() {
          let e = null;
          for (let t = this.tilesOfInterest.length - 1; t >= 0; t--) {
            const i = this.tilesOfInterest[t],
              s = this.store.process(i, (e, t) =>
                this._verifyTileComplexity(e, t),
              );
            (0, o.Wi)(e) ? (e = s) : e.prepend(s);
          }
          return e;
        }
        _deletePendingTiles() {
          for (const [, e] of this.pendingTiles)
            e.alive || this._deletePendingTile(e);
        }
        _processPendingTiles() {
          const e = {
            fetchCount: (e, t) => this._fetchCount(e, t),
            fetchFeatures: (e, t, i) => this._fetchFeatures(e, t, i),
            finish: (e, t) => this._finishPendingTile(e, t),
            resume: () => this._processPendingTiles(),
          };
          if (this._ensureFetchAllCounts(e))
            for (const [, t] of this.pendingTiles)
              this._verifyTileComplexity(
                this.store.getFeatureCount(t.data),
                t.resolution,
              ) && this.updatingHandles.addPromise(t.process(e));
        }
        _verifyTileComplexity(e, t) {
          return (
            this._verifyVertexComplexity(e) && this._verifyFeatureDensity(e, t)
          );
        }
        _verifyVertexComplexity(e) {
          return e * this.minimumVerticesPerFeature < U;
        }
        _verifyFeatureDensity(e, t) {
          if ((0, o.Wi)(this.tileInfo)) return !1;
          const i = this.tileSize * t;
          return e * (H / (i * i)) < Z;
        }
        _ensureFetchAllCounts(e) {
          let t = !0;
          for (const [, i] of this.pendingTiles)
            i.state.type < C.FETCHED_COUNT &&
              this.updatingHandles.addPromise(i.process(e)),
              i.state.type <= C.FETCH_COUNT && (t = !1);
          return t;
        }
        _finishPendingTile(e, t) {
          this.store.add(e.data, t),
            this._deletePendingTile(e),
            this._updateAvailability();
        }
        _updateAvailability() {
          const e = this._collectMissingTilesInfo();
          this._setAvailability((0, o.Wi)(e) ? 1 : e.coveredArea / e.fullArea);
        }
        _setAvailability(e) {
          this._set('availability', e);
        }
        _createPendingTile(e, t) {
          const i = new R(e, t);
          return this.pendingTiles.set(e.id, i), i;
        }
        _deletePendingTile(e) {
          e.reset(), this.pendingTiles.delete(e.data.id);
        }
        async _fetchCount(e, t) {
          return this.store.fetchCount(
            e.data,
            this.url,
            this._createCountQuery(e),
            { query: this.customParameters, timeout: z, signal: t },
          );
        }
        async _fetchFeatures(e, t, i) {
          let s,
            r = 0,
            n = 0,
            a = t;
          for (;;) {
            const l = this._createFeaturesQuery(e),
              u = this._setPagingParameters(l, r, a),
              { features: h, exceededTransferLimit: d } =
                await this._queryFeatures(l, i);
            if (
              (u && (r += (0, o.Wg)(l.num)),
              (n += h.length),
              (s = s ? s.concat(h) : h),
              (a = t - n),
              !u || !d || a <= 0)
            )
              return s;
          }
        }
        _filterProperties(e) {
          return (0, o.Wi)(e)
            ? { where: '1=1', gdbVersion: void 0, timeExtent: void 0 }
            : {
                where: e.where || '1=1',
                timeExtent: e.timeExtent,
                gdbVersion: e.gdbVersion,
              };
        }
        _lookupObjectIdByGlobalId(e) {
          const t = this.globalIdField,
            i = this.objectIdField;
          if ((0, o.Wi)(t))
            throw new Error('Expected globalIdField to be defined');
          let s = null;
          if (
            (this.store.featureStore.forEach((r) => {
              var n;
              e === r.attributes[t] &&
                (s = null != (n = r.objectId) ? n : r.attributes[i]);
            }),
            (0, o.Wi)(s))
          )
            throw new Error(`Expected to find a feature with globalId ${e}`);
          return s;
        }
        _queryFeaturesById(e, t) {
          const i = this._createFeaturesQuery(null);
          return (i.objectIds = e), this._queryFeatures(i, t);
        }
        _queryFeatures(e, t) {
          return this.capabilities.query.supportsFormatPBF
            ? this._queryFeaturesPBF(e, t)
            : this._queryFeaturesJSON(e, t);
        }
        async _queryFeaturesPBF(e, t) {
          const { sourceSpatialReference: i } = this,
            { data: s } = await (0, M.executeQueryPBF)(
              this.url,
              e,
              new B.J({ sourceSpatialReference: i }),
              {
                query: this.configuration.customParameters,
                timeout: z,
                signal: t,
              },
            );
          return (0, O.lM)(s);
        }
        async _queryFeaturesJSON(e, t) {
          const { sourceSpatialReference: i } = this,
            { data: s } = await (0, M.executeQuery)(this.url, e, i, {
              query: this.configuration.customParameters,
              timeout: z,
              signal: t,
            });
          return (0, O.h_)(s, this.objectIdField);
        }
        _createCountQuery(e) {
          const t = this._createBaseQuery(e);
          return (
            this.capabilities.query.supportsCacheHint && (t.cacheHint = !0), t
          );
        }
        _createFeaturesQuery(e) {
          const t = this._createBaseQuery(e);
          return (
            (t.outFields = this.globalIdField
              ? [this.globalIdField, this.objectIdField]
              : [this.objectIdField]),
            (t.returnGeometry = !0),
            (0, o.pC)(e) &&
              (this.capabilities.query.supportsResultType
                ? (t.resultType = 'tile')
                : this.capabilities.query.supportsCacheHint &&
                  (t.cacheHint = !0)),
            t
          );
        }
        _createBaseQuery(e) {
          const t = new _.Z({
              returnZ: !1,
              returnM: !1,
              geometry:
                (0, o.pC)(this.tileInfo) && (0, o.pC)(e)
                  ? (0, S.HH)(e.data.extent, this.tileInfo.spatialReference)
                  : void 0,
            }),
            i = this.configuration.filter;
          return (
            (0, o.pC)(i) &&
              ((t.where = i.where),
              (t.gdbVersion = i.gdbVersion),
              (t.timeExtent = i.timeExtent)),
            (t.outSpatialReference = this.spatialReference),
            t
          );
        }
        _setPagingParameters(e, t, i) {
          if (!this.capabilities.query.supportsPagination) return !1;
          const {
              supportsMaxRecordCountFactor: s,
              supportsCacheHint: r,
              tileMaxRecordCount: n,
              maxRecordCount: o,
              supportsResultType: a,
            } = this.capabilities.query,
            l = s ? _.Z.MAX_MAX_RECORD_COUNT_FACTOR : 1,
            u = l * ((a || r) && n ? n : o || P);
          return (
            (e.start = t),
            s
              ? ((e.maxRecordCountFactor = Math.min(l, Math.ceil(i / u))),
                (e.num = Math.min(i, e.maxRecordCountFactor * u)))
              : (e.num = Math.min(i, u)),
            !0
          );
        }
      };
      (0, s._)([(0, h.Cb)({ constructOnly: !0 })], N.prototype, 'url', void 0),
        (0, s._)(
          [(0, h.Cb)({ constructOnly: !0 })],
          N.prototype,
          'objectIdField',
          void 0,
        ),
        (0, s._)(
          [(0, h.Cb)({ constructOnly: !0 })],
          N.prototype,
          'globalIdField',
          void 0,
        ),
        (0, s._)(
          [(0, h.Cb)({ constructOnly: !0 })],
          N.prototype,
          'capabilities',
          void 0,
        ),
        (0, s._)(
          [(0, h.Cb)({ constructOnly: !0 })],
          N.prototype,
          'sourceSpatialReference',
          void 0,
        ),
        (0, s._)(
          [(0, h.Cb)({ constructOnly: !0 })],
          N.prototype,
          'spatialReference',
          void 0,
        ),
        (0, s._)(
          [(0, h.Cb)({ constructOnly: !0 })],
          N.prototype,
          'store',
          void 0,
        ),
        (0, s._)(
          [(0, h.Cb)({ readOnly: !0 })],
          N.prototype,
          'minimumVerticesPerFeature',
          null,
        ),
        (0, s._)([(0, h.Cb)()], N.prototype, 'filter', null),
        (0, s._)([(0, h.Cb)()], N.prototype, 'customParameters', null),
        (0, s._)(
          [(0, h.Cb)({ readOnly: !0 })],
          N.prototype,
          'configuration',
          null,
        ),
        (0, s._)([(0, h.Cb)()], N.prototype, 'tileInfo', null),
        (0, s._)([(0, h.Cb)()], N.prototype, 'tileSize', null),
        (0, s._)([(0, h.Cb)()], N.prototype, 'tilesOfInterest', void 0),
        (0, s._)([(0, h.Cb)({ readOnly: !0 })], N.prototype, 'updating', null),
        (0, s._)(
          [(0, h.Cb)({ readOnly: !0 })],
          N.prototype,
          'availability',
          void 0,
        ),
        (N = (0, s._)(
          [
            (0, c.j)(
              'esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher',
            ),
          ],
          N,
        ));
      const P = 2e3,
        z = 6e5,
        U = 1e6,
        H = 25,
        Z = 1;
      var k = i(43090),
        V = i(37549);
      class Y {
        constructor() {
          (this._store = new Map()), (this._byteSize = 0);
        }
        set(e, t) {
          this.delete(e), this._store.set(e, t), (this._byteSize += t.byteSize);
        }
        delete(e) {
          const t = this._store.get(e);
          return (
            !!this._store.delete(e) && ((this._byteSize -= t.byteSize), !0)
          );
        }
        get(e) {
          return this._used(e), this._store.get(e);
        }
        has(e) {
          return this._used(e), this._store.has(e);
        }
        clear() {
          this._store.clear();
        }
        applyByteSizeLimit(e, t) {
          for (const [i, s] of this._store) {
            if (this._byteSize <= e) break;
            this.delete(i), t(s);
          }
        }
        values() {
          return this._store.values();
        }
        [Symbol.iterator]() {
          return this._store[Symbol.iterator]();
        }
        _used(e) {
          const t = this._store.get(e);
          t && (this._store.delete(e), this._store.set(e, t));
        }
      }
      let X = class extends v.Z {
        constructor(e) {
          super(e),
            (this.tileInfo = null),
            (this.extent = null),
            (this.maximumByteSize = 10 * k.Y8.MEGABYTES),
            (this.tileBounds = new V.H()),
            (this.tiles = new Y()),
            (this.refCounts = new Map()),
            (this.tileFeatureCounts = new Map()),
            (this.tmpBoundingRect = (0, S.Ue)());
        }
        add(e, t) {
          const i = [];
          for (const e of t)
            this._referenceFeature(e.objectId) === Q.ADDED && i.push(e);
          this._addTileStorage(
            e,
            new Set(t.map(({ objectId: e }) => e)),
            (function (e) {
              return e.reduce(
                (e, t) =>
                  e +
                  (function (e) {
                    return (
                      32 +
                      (function (e) {
                        if ((0, o.Wi)(e)) return 0;
                        const t = (0, k.do)(e.lengths, 4);
                        return 32 + (0, k.do)(e.coords, 8) + t;
                      })(e.geometry) +
                      (0, k.f2)(e.attributes)
                    );
                  })(t),
                0,
              );
            })(t),
          ),
            this.featureStore.addMany(i),
            this.tiles.applyByteSizeLimit(this.maximumByteSize, (e) =>
              this._removeTileStorage(e),
            );
        }
        destroy() {
          this.clear(), this.tileFeatureCounts.clear();
        }
        clear() {
          this.featureStore.clear(),
            this.tileBounds.clear(),
            this.tiles.clear(),
            this.refCounts.clear();
        }
        refresh() {
          this.clear(), this.tileFeatureCounts.clear();
        }
        processEdits(e, t, i) {
          return (
            this._processEditsDelete(
              e.deletedFeatures.concat(e.updatedFeatures),
            ),
            this._processEditsRefetch(
              e.addedFeatures.concat(e.updatedFeatures),
              t,
              i,
            )
          );
        }
        _addTileStorage(e, t, i) {
          this.tiles.set(e.id, new L(e, t, i)),
            this.tileBounds.set(e.id, e.extent),
            this.tileFeatureCounts.set(e.id, t.size);
        }
        _remove({ id: e }) {
          const t = this.tiles.get(e);
          t && this._removeTileStorage(t);
        }
        _removeTileStorage(e) {
          const t = [];
          for (const i of e.objectIds)
            this._unreferenceFeature(i) === Q.REMOVED && t.push(i);
          this.featureStore.removeManyById(t);
          const i = e.data.id;
          this.tiles.delete(i), this.tileBounds.delete(i);
        }
        _processEditsDelete(e) {
          this.featureStore.removeManyById(e);
          for (const [, t] of this.tiles) {
            for (const i of e) t.objectIds.delete(i);
            this.tileFeatureCounts.set(t.data.id, t.objectIds.size);
          }
          for (const t of e) this.refCounts.delete(t);
        }
        async _processEditsRefetch(e, t, i) {
          const s = (await t(e, i)).features,
            { hasZ: r, hasM: n } = this.featureStore;
          for (const e of s) {
            const t = (0, O.$)(this.tmpBoundingRect, e.geometry, r, n);
            (0, o.Wi)(t) ||
              this.tileBounds.forEachInBounds(t, (t) => {
                const i = this.tiles.get(t);
                this.featureStore.add(e),
                  i.objectIds.has(e.objectId) ||
                    (i.objectIds.add(e.objectId),
                    this._referenceFeature(e.objectId),
                    this.tileFeatureCounts.set(i.data.id, i.objectIds.size));
              });
          }
        }
        process(e, t = () => !0) {
          if (
            (0, o.Wi)(this.tileInfo) ||
            !e.extent ||
            ((0, o.pC)(this.extent) &&
              !(0, S.kK)(
                (0, S.oJ)(this.extent, this.tmpBoundingRect),
                e.extent,
              ))
          )
            return new J(e);
          if (this.tiles.has(e.id)) return new J(e);
          const i = this._createTileTree(e, this.tileInfo);
          return (
            this._simplify(i, t, null, 0, 1),
            this._collectMissingTiles(e, i, this.tileInfo)
          );
        }
        get debugInfo() {
          return Array.from(this.tiles.values()).map(({ data: e }) => ({
            data: e,
            featureCount: this.tileFeatureCounts.get(e.id) || 0,
          }));
        }
        getFeatureCount(e) {
          const t = this.tileFeatureCounts.get(e.id);
          return null != t ? t : 0;
        }
        async fetchCount(e, t, i, s) {
          const r = this.tileFeatureCounts.get(e.id);
          if (null != r) return r;
          const n = await (0, M.executeQueryForCount)(t, i, s);
          return this.tileFeatureCounts.set(e.id, n.data.count), n.data.count;
        }
        _createTileTree(e, t) {
          const i = new q(e.level, e.row, e.col);
          return (
            t.updateTileInfo(i, g.Z.ExtrapolateOptions.POWER_OF_TWO),
            this.tileBounds.forEachInBounds(e.extent, (s) => {
              const r = this.tiles.get(s).data;
              this._tilesAreRelated(e, r) &&
                this._populateChildren(
                  i,
                  r,
                  t,
                  this.tileFeatureCounts.get(r.id) || 0,
                );
            }),
            i
          );
        }
        _tilesAreRelated(e, t) {
          if (!e || !t) return !1;
          if (e.level === t.level) return e.row === t.row && e.col === t.col;
          const i = e.level < t.level,
            s = i ? e : t,
            r = i ? t : e,
            n = 1 << (r.level - s.level);
          return (
            Math.floor(r.row / n) === s.row && Math.floor(r.col / n) === s.col
          );
        }
        _populateChildren(e, t, i, s) {
          const r = t.level - e.level - 1;
          if (r < 0) return void (e.isLeaf = !0);
          const n = t.row >> r,
            a = t.col >> r,
            l = e.row << 1,
            u = a - (e.col << 1) + ((n - l) << 1),
            h = e.children[u];
          if ((0, o.pC)(h)) this._populateChildren(h, t, i, s);
          else {
            const r = new q(e.level + 1, n, a);
            i.updateTileInfo(r, g.Z.ExtrapolateOptions.POWER_OF_TWO),
              (e.children[u] = r),
              this._populateChildren(r, t, i, s);
          }
        }
        _simplify(e, t, i, s, r) {
          const n = r * r;
          if (e.isLeaf)
            return t(this.getFeatureCount(e), r)
              ? 0
              : (this._remove(e), (0, o.pC)(i) && (i.children[s] = null), n);
          const a = r / 2,
            l = a * a;
          let u = 0;
          for (let i = 0; i < e.children.length; i++) {
            const s = e.children[i];
            u += (0, o.pC)(s) ? this._simplify(s, t, e, i, a) : l;
          }
          return (
            0 === u
              ? this._mergeChildren(e)
              : 1 - u / n < G &&
                (this._purge(e),
                (0, o.pC)(i) && (i.children[s] = null),
                (u = n)),
            u
          );
        }
        _mergeChildren(e) {
          const t = new Set();
          let i = 0;
          this._forEachLeaf(e, (e) => {
            const s = this.tiles.get(e.id);
            if (s) {
              i += s.byteSize;
              for (const e of s.objectIds)
                t.has(e) || (t.add(e), this._referenceFeature(e));
              this._remove(e);
            }
          }),
            this._addTileStorage(e, t, i),
            (e.isLeaf = !0),
            (e.children[0] =
              e.children[1] =
              e.children[2] =
              e.children[3] =
                null),
            this.tileFeatureCounts.set(e.id, t.size);
        }
        _forEachLeaf(e, t) {
          for (const i of e.children)
            (0, o.Wi)(i) || (i.isLeaf ? t(i) : this._forEachLeaf(i, t));
        }
        _purge(e) {
          if (!(0, o.Wi)(e))
            if (e.isLeaf) this._remove(e);
            else
              for (let t = 0; t < e.children.length; t++) {
                const i = e.children[t];
                this._purge(i), (e.children[t] = null);
              }
        }
        _collectMissingTiles(e, t, i) {
          const s = new W(i, e, this.extent);
          return this._collectMissingTilesRecurse(t, s, 1), s.info;
        }
        _collectMissingTilesRecurse(e, t, i) {
          if (e.isLeaf) return;
          if (!e.hasChildren)
            return void t.addMissing(e.level, e.row, e.col, i);
          const s = i / 2;
          for (let i = 0; i < e.children.length; i++) {
            const r = e.children[i];
            (0, o.Wi)(r)
              ? t.addMissing(
                  e.level + 1,
                  (e.row << 1) + ((2 & i) >> 1),
                  (e.col << 1) + (1 & i),
                  s,
                )
              : this._collectMissingTilesRecurse(r, t, s);
          }
        }
        _referenceFeature(e) {
          const t = (this.refCounts.get(e) || 0) + 1;
          return this.refCounts.set(e, t), 1 === t ? Q.ADDED : Q.UNCHANGED;
        }
        _unreferenceFeature(e) {
          const t = (this.refCounts.get(e) || 0) - 1;
          return 0 === t
            ? (this.refCounts.delete(e), Q.REMOVED)
            : (t > 0 && this.refCounts.set(e, t), Q.UNCHANGED);
        }
        get test() {
          return {
            tiles: Array.from(this.tiles.values()).map(
              (e) => `${e.data.id}:[${Array.from(e.objectIds)}]`,
            ),
            featureReferences: Array.from(this.refCounts.keys()).map(
              (e) => `${e}:${this.refCounts.get(e)}`,
            ),
          };
        }
      };
      (0, s._)(
        [(0, h.Cb)({ constructOnly: !0 })],
        X.prototype,
        'featureStore',
        void 0,
      ),
        (0, s._)([(0, h.Cb)()], X.prototype, 'tileInfo', void 0),
        (0, s._)([(0, h.Cb)()], X.prototype, 'extent', void 0),
        (0, s._)([(0, h.Cb)()], X.prototype, 'maximumByteSize', void 0),
        (X = (0, s._)(
          [
            (0, c.j)(
              'esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTileStore',
            ),
          ],
          X,
        ));
      class L {
        constructor(e, t, i) {
          (this.data = e), (this.objectIds = t), (this.byteSize = i);
        }
      }
      class q {
        constructor(e, t, i) {
          (this.level = e),
            (this.row = t),
            (this.col = i),
            (this.isLeaf = !1),
            (this.extent = null),
            (this.children = [null, null, null, null]);
        }
        get hasChildren() {
          return (
            !this.isLeaf &&
            ((0, o.pC)(this.children[0]) ||
              (0, o.pC)(this.children[1]) ||
              (0, o.pC)(this.children[2]) ||
              (0, o.pC)(this.children[3]))
          );
        }
      }
      class J {
        constructor(e, t = []) {
          (this.missingTiles = t),
            (this.fullArea = 0),
            (this.coveredArea = 0),
            (this.fullArea = (0, S.SO)(e.extent)),
            (this.coveredArea = this.fullArea);
        }
        prepend(e) {
          (this.missingTiles = e.missingTiles.concat(this.missingTiles)),
            (this.coveredArea += e.coveredArea),
            (this.fullArea += e.fullArea);
        }
      }
      class W {
        constructor(e, t, i) {
          (this.tileInfo = e),
            (this.extent = null),
            (this.info = new J(t)),
            (0, o.pC)(i) && (this.extent = (0, S.oJ)(i));
        }
        addMissing(e, t, i, s) {
          const r = { id: null, level: e, row: t, col: i };
          this.tileInfo.updateTileInfo(r, g.Z.ExtrapolateOptions.POWER_OF_TWO),
            !(0, o.pC)(r.extent) ||
              ((0, o.pC)(this.extent) && !(0, S.kK)(this.extent, r.extent)) ||
              (this.info.missingTiles.push({ data: r, resolution: s }),
              (this.info.coveredArea -= (0, S.SO)(r.extent)));
        }
      }
      const G = 0.18751;
      var Q, $;
      (($ = Q || (Q = {}))[($.ADDED = 0)] = 'ADDED'),
        ($[($.REMOVED = 1)] = 'REMOVED'),
        ($[($.UNCHANGED = 2)] = 'UNCHANGED');
      var K = i(89749);
      let ee = class extends r.Z.EventedAccessor {
        constructor() {
          super(...arguments),
            (this.isInitializing = !0),
            (this.whenSetup = (0, a.dD)()),
            (this.handles = new n.Z()),
            (this.updatingHandles = new K.t()),
            (this.pendingApplyEdits = new Map());
        }
        get updating() {
          return (
            this.featureFetcher.updating ||
            this.isInitializing ||
            this.updatingHandles.updating
          );
        }
        destroy() {
          this.featureFetcher.destroy(),
            this.queryEngine.destroy(),
            this.featureStore.clear(),
            this.handles.destroy();
        }
        async setup(e) {
          const {
            geometryType: t,
            objectIdField: i,
            timeInfo: s,
            fields: r,
          } = e.serviceInfo;
          return (
            (this.featureStore = new f.Z({
              ...e.serviceInfo,
              hasZ: !1,
              hasM: !1,
            })),
            (this.queryEngine = new m.Z({
              spatialReference: e.spatialReference,
              featureStore: this.featureStore,
              geometryType: t,
              fields: r,
              hasZ: !1,
              hasM: !1,
              objectIdField: i,
              timeInfo: s ? y.Z.fromJSON(s) : null,
            })),
            (this.featureFetcher = new N({
              store: new X({ featureStore: this.featureStore }),
              url: e.serviceInfo.url,
              objectIdField: e.serviceInfo.objectIdField,
              globalIdField: e.serviceInfo.globalIdField,
              capabilities: e.serviceInfo.capabilities,
              spatialReference: p.Z.fromJSON(e.spatialReference),
              sourceSpatialReference: p.Z.fromJSON(
                e.serviceInfo.spatialReference,
              ),
            })),
            this.handles.add([
              this.featureFetcher.watch(
                'availability',
                (e) => this.emit('notify-availability', { availability: e }),
                !0,
              ),
              this.watch('updating', () => this._notifyUpdating()),
            ]),
            this.whenSetup.resolve(),
            (this.isInitializing = !1),
            this.configure(e.configuration)
          );
        }
        async configure(e) {
          return (
            await this.updatingHandles.addPromise(this.whenSetup.promise),
            this._updateFeatureFetcherConfiguration(e),
            { result: {} }
          );
        }
        async fetchCandidates(e, t) {
          return (
            await this.whenSetup.promise,
            (0, a.k_)(t),
            {
              result: await this.queryEngine.executeQueryForSnapping(
                {
                  point: e.point,
                  distance: e.distance,
                  types: e.types,
                  query: (0, o.pC)(e.filter) ? e.filter : { where: '1=1' },
                },
                (0, o.pC)(t) ? t.signal : null,
              ),
            }
          );
        }
        async updateTiles(e, t) {
          return (
            await this.updatingHandles.addPromise(this.whenSetup.promise),
            (0, a.k_)(t),
            (this.featureFetcher.tileSize = e.tileSize),
            (this.featureFetcher.tilesOfInterest = e.tiles),
            (this.featureFetcher.tileInfo = (0, o.pC)(e.tileInfo)
              ? g.Z.fromJSON(e.tileInfo)
              : null),
            { result: {} }
          );
        }
        async refresh(e, t) {
          return (
            await this.updatingHandles.addPromise(this.whenSetup.promise),
            (0, a.k_)(t),
            this.featureFetcher.refresh(),
            { result: {} }
          );
        }
        async whenNotUpdating(e, t) {
          return (
            await this.updatingHandles.addPromise(this.whenSetup.promise),
            (0, a.k_)(t),
            await (0, a.Hl)(
              ((i = this), l(i, 'updating', u, void 0, void 0)),
              t,
            ),
            { result: {} }
          );
          var i;
        }
        async getDebugInfo(e, t) {
          return (0, a.k_)(t), { result: this.featureFetcher.debugInfo };
        }
        async beginApplyEdits(e, t) {
          this.updatingHandles.addPromise(this.whenSetup.promise), (0, a.k_)(t);
          const i = (0, a.dD)();
          return (
            this.pendingApplyEdits.set(e.id, i),
            this.featureFetcher.applyEdits(i.promise),
            this.updatingHandles.addPromise(i.promise),
            { result: {} }
          );
        }
        async endApplyEdits(e, t) {
          const i = this.pendingApplyEdits.get(e.id);
          return i && i.resolve(e.edits), (0, a.k_)(t), { result: {} };
        }
        _updateFeatureFetcherConfiguration(e) {
          (this.featureFetcher.filter = (0, o.pC)(e.filter)
            ? _.Z.fromJSON(e.filter)
            : null),
            (this.featureFetcher.customParameters = e.customParameters);
        }
        _notifyUpdating() {
          this.emit('notify-updating', { updating: this.updating });
        }
      };
      function te() {
        return new ee();
      }
      (0, s._)([(0, h.Cb)({ readOnly: !0 })], ee.prototype, 'updating', null),
        (0, s._)([(0, h.Cb)()], ee.prototype, 'isInitializing', void 0),
        (ee = (0, s._)(
          [
            (0, c.j)(
              'esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorker',
            ),
          ],
          ee,
        ));
    },
  },
]);
