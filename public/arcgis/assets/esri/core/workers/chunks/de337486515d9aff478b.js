'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [1400],
  {
    43697: (t, e, r) => {
      function n(t, e, r, n) {
        var s,
          i = arguments.length,
          o =
            i < 3
              ? e
              : null === n
              ? (n = Object.getOwnPropertyDescriptor(e, r))
              : n;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          o = Reflect.decorate(t, e, r, n);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (s = t[a]) &&
              (o = (i < 3 ? s(o) : i > 3 ? s(e, r, o) : s(e, r)) || o);
        return i > 3 && o && Object.defineProperty(e, r, o), o;
      }
      r.d(e, { _: () => n });
    },
    15923: (t, e, r) => {
      r.d(e, { Z: () => j });
      var n = r(60235),
        s = r(92604),
        i = r(67723),
        o = r(97831),
        a = r(7628),
        l = (r(80442), r(22974)),
        c = r(71143),
        u = r(31263),
        h = r(58971),
        f = r(44550),
        d = r(39020);
      class p {
        constructor(t, e, r) {
          (this.properties = t),
            (this.propertyName = e),
            (this.metadata = r),
            (this._observers = null),
            (this._accessed = null),
            (this._handles = null),
            (this.flags =
              f.v.Dirty |
              (r.nonNullable ? f.v.NonNullable : 0) |
              (r.hasOwnProperty('value') ? f.v.HasDefaultValue : 0) |
              (void 0 === r.get ? f.v.DepTrackingInitialized : 0) |
              (void 0 === r.dependsOn ? f.v.AutoTracked : 0));
        }
        destroy() {
          (this._accessed = null),
            (this._observers = null),
            this._clearObservationHandles();
        }
        getComputed() {
          (0, h.it)(this);
          const t = this.properties.store,
            e = this.propertyName,
            r = this.flags,
            n = t.get(e);
          if (r & f.v.Computing) return n;
          if (~r & f.v.Dirty && t.has(e)) return n;
          this.flags |= f.v.Computing;
          const s = this.properties.host;
          let i;
          r & f.v.AutoTracked
            ? (i = (0, h.LJ)(this, this.metadata.get, s))
            : ((0, h.GF)(s, this), (i = this.metadata.get.call(s))),
            t.set(e, i, u.s3.COMPUTED);
          const o = t.get(e);
          return (
            o === n ? (this.flags &= ~f.v.Dirty) : (0, h.gb)(this.commit, this),
            (this.flags &= ~f.v.Computing),
            o
          );
        }
        onObservableAccessed(t) {
          t !== this &&
            (null === this._accessed && (this._accessed = []),
            this._accessed.includes(t) || this._accessed.push(t));
        }
        onTrackingEnd() {
          this._clearObservationHandles(),
            (this.flags |= f.v.DepTrackingInitialized);
          const t = this._accessed;
          if (null === t) return;
          let e = this._handles;
          null === e && (e = this._handles = []);
          for (let r = 0; r < t.length; ++r) e.push(t[r].observe(this));
          t.length = 0;
        }
        observe(t) {
          return (
            null === this._observers && (this._observers = []),
            this._observers.includes(t) || this._observers.push(t),
            new d.X(this._observers, t)
          );
        }
        notifyChange() {
          this.onInvalidated(), this.onCommitted();
        }
        invalidate() {
          this.onInvalidated();
        }
        onInvalidated() {
          ~this.flags & f.v.Overriden && (this.flags |= f.v.Dirty);
          const t = this._observers;
          if (null !== t)
            for (let e = 0; e < t.length; ++e) t[e].onInvalidated();
        }
        commit() {
          (this.flags &= ~f.v.Dirty), this.onCommitted();
        }
        onCommitted() {
          if (null === this._observers) return;
          const t = this._observers.slice();
          for (let e = 0; e < t.length; ++e) t[e].onCommitted();
        }
        _clearObservationHandles() {
          const t = this._handles;
          if (null !== t) {
            for (let e = 0; e < t.length; ++e) t[e].remove();
            t.length = 0;
          }
        }
      }
      class g {
        constructor() {
          (this._values = new Map()), (this.multipleOriginsSupported = !1);
        }
        clone(t) {
          const e = new g();
          return (
            this._values.forEach((r, n) => {
              (t && t.has(n)) || e.set(n, (0, l.d9)(r));
            }),
            e
          );
        }
        get(t) {
          return this._values.get(t);
        }
        originOf() {
          return u.s3.USER;
        }
        keys() {
          return [...this._values.keys()];
        }
        set(t, e) {
          this._values.set(t, e);
        }
        delete(t) {
          this._values.delete(t);
        }
        has(t) {
          return this._values.has(t);
        }
        forEach(t) {
          this._values.forEach(t);
        }
      }
      var y = r(1153);
      function v(t, e, r) {
        return void 0 !== t;
      }
      function _(t, e, r, n) {
        return !(
          void 0 === t ||
          (null == r &&
            t.flags & f.v.NonNullable &&
            (n.lifecycle, o.F.INITIALIZING, 1))
        );
      }
      function m(t) {
        return t && 'function' == typeof t.destroy;
      }
      s.Z.getLogger('esri.core.accessorSupport.Properties');
      class w {
        constructor(t) {
          (this.host = t),
            (this.properties = new Map()),
            (this.ctorArgs = null),
            (this.destroyed = !1),
            (this.lifecycle = o.F.INITIALIZING),
            (this.store = new g()),
            (this._origin = u.s3.USER);
          const e = this.host.constructor.__accessorMetadata__,
            r = e.properties;
          for (const t in r) {
            const e = new p(this, t, r[t]);
            this.properties.set(t, e);
          }
          (this.metadatas = r), (this._autoDestroy = e.autoDestroy);
        }
        initialize() {
          this.lifecycle = o.F.CONSTRUCTING;
        }
        constructed() {
          this.lifecycle = o.F.CONSTRUCTED;
        }
        destroy() {
          if (((this.destroyed = !0), this._autoDestroy))
            for (const [t, e] of this.properties) {
              const r = this.internalGet(t);
              r &&
                m(r) &&
                (r.destroy(),
                ~e.flags & f.v.NonNullable && this._internalSet(e, null)),
                e.destroy();
            }
          else for (const [t, e] of this.properties) e.destroy();
        }
        get initialized() {
          return this.lifecycle !== o.F.INITIALIZING;
        }
        get(t) {
          const e = this.properties.get(t);
          if (e.metadata.get) return e.getComputed();
          (0, h.it)(e);
          const r = this.store;
          return r.has(t) ? r.get(t) : e.metadata.value;
        }
        originOf(t) {
          const e = this.store.originOf(t);
          if (void 0 === e) {
            const e = this.properties.get(t);
            if (void 0 !== e && e.flags & f.v.HasDefaultValue)
              return 'defaults';
          }
          return (0, u.x3)(e);
        }
        has(t) {
          return !!this.properties.has(t) && this.store.has(t);
        }
        keys() {
          return [...this.properties.keys()];
        }
        internalGet(t) {
          const e = this.properties.get(t);
          if (v(e))
            return this.store.has(t) ? this.store.get(t) : e.metadata.value;
        }
        internalSet(t, e) {
          const r = this.properties.get(t);
          v(r) && this._internalSet(r, e);
        }
        getDependsInfo(t, e, r) {
          const n = this.properties.get(e);
          if (!v(n)) return '';
          const s = new Set(),
            i = (0, h.LJ)(
              {
                onObservableAccessed: (t) => s.add(t),
                onTrackingEnd: () => {},
              },
              () => {
                var e;
                return null == (e = n.metadata.get) ? void 0 : e.call(t);
              },
            );
          let o = `${r}${t.declaredClass.split('.').pop()}.${e}: ${i}\n`;
          if (0 === s.size) return o;
          r += '  ';
          for (const t of s) {
            if (!(t instanceof p)) continue;
            const e = t.properties.host,
              n = t.propertyName,
              s = (0, y.vw)(e);
            o += s ? s.getDependsInfo(e, n, r) : `${r}${n}: undefined\n`;
          }
          return o;
        }
        setAtOrigin(t, e, r) {
          const n = this.properties.get(t);
          if (v(n)) return this._setAtOrigin(n, e, r);
        }
        isOverridden(t) {
          const e = this.properties.get(t);
          return void 0 !== e && !!(e.flags & f.v.Overriden);
        }
        clearOverride(t) {
          const e = this.properties.get(t);
          void 0 !== e &&
            e.flags & f.v.Overriden &&
            ((e.flags &= ~f.v.Overriden), e.notifyChange());
        }
        override(t, e) {
          const r = this.properties.get(t);
          if (!_(r, 0, e, this)) return;
          const n = r.metadata.cast;
          if (n) {
            const t = this._cast(n, e),
              { valid: r, value: s } = t;
            if ((b.release(t), !r)) return;
            e = s;
          }
          (r.flags |= f.v.Overriden), this._internalSet(r, e);
        }
        set(t, e) {
          const r = this.properties.get(t);
          if (!_(r, 0, e, this)) return;
          const n = r.metadata.cast;
          if (n) {
            const t = this._cast(n, e),
              { valid: r, value: s } = t;
            if ((b.release(t), !r)) return;
            e = s;
          }
          const s = r.metadata.set;
          s ? s.call(this.host, e) : this._internalSet(r, e);
        }
        setDefaultOrigin(t) {
          this._origin = (0, u.M9)(t);
        }
        getDefaultOrigin() {
          return (0, u.x3)(this._origin);
        }
        notifyChange(t) {
          const e = this.properties.get(t);
          void 0 !== e && e.notifyChange();
        }
        invalidate(t) {
          const e = this.properties.get(t);
          void 0 !== e && e.invalidate();
        }
        commit(t) {
          const e = this.properties.get(t);
          void 0 !== e && e.commit();
        }
        _internalSet(t, e) {
          const r =
            this.lifecycle !== o.F.INITIALIZING ? this._origin : u.s3.DEFAULTS;
          this._setAtOrigin(t, e, r);
        }
        _setAtOrigin(t, e, r) {
          const n = this.store,
            s = t.propertyName;
          (n.has(s, r) &&
            (0, l.fS)(e, n.get(s)) &&
            ~t.flags & f.v.Overriden &&
            r === n.originOf(s)) ||
            (t.invalidate(),
            n.set(s, e, r),
            t.commit(),
            (0, h.mS)(this.host, t));
        }
        _cast(t, e) {
          const r = b.acquire();
          return (
            (r.valid = !0),
            (r.value = e),
            t && (r.value = t.call(this.host, e, r)),
            r
          );
        }
      }
      const b = new c.Z(
        class {
          constructor() {
            (this.value = null), (this.valid = !0);
          }
          acquire() {
            this.valid = !0;
          }
          release() {
            this.value = null;
          }
        },
      );
      var O = r(37697),
        A = r(26258),
        S = r(5600),
        T = r(52011);
      function N(t) {
        if (null == t) return { value: t };
        if (Array.isArray(t)) return { type: [t[0]], value: null };
        switch (typeof t) {
          case 'object':
            return (t.constructor && t.constructor.__accessorMetadata__) ||
              t instanceof Date
              ? { type: t.constructor, value: t }
              : t;
          case 'boolean':
            return { type: Boolean, value: t };
          case 'string':
            return { type: String, value: t };
          case 'number':
            return { type: Number, value: t };
          case 'function':
            return { type: t, value: null };
          default:
            return;
        }
      }
      class j {
        constructor(...t) {
          if (this.constructor === j)
            throw new Error(
              '[accessor] cannot instantiate Accessor. This can be fixed by creating a subclass of Accessor',
            );
          Object.defineProperty(this, '__accessor__', {
            enumerable: !1,
            value: new w(this),
          }),
            t.length > 0 &&
              this.normalizeCtorArgs &&
              (this.__accessor__.ctorArgs = this.normalizeCtorArgs.apply(
                this,
                t,
              ));
        }
        static createSubclass(t = {}) {
          if (Array.isArray(t))
            throw new Error('Multi-inheritance unsupported since 4.16');
          const { properties: e, declaredClass: r, constructor: n } = t;
          delete t.declaredClass, delete t.properties, delete t.constructor;
          const s = this;
          class i extends s {
            constructor(...t) {
              super(...t), (this.inherited = null), n && n.apply(this, t);
            }
          }
          (0, a.JT)(i.prototype);
          for (const e in t) {
            const r = t[e];
            i.prototype[e] =
              'function' == typeof r
                ? function (...t) {
                    const n = this.inherited;
                    let i;
                    this.inherited = function (...t) {
                      if (s.prototype[e]) return s.prototype[e].apply(this, t);
                    };
                    try {
                      i = r.apply(this, t);
                    } catch (t) {
                      throw ((this.inherited = n), t);
                    }
                    return (this.inherited = n), i;
                  }
                : t[e];
          }
          for (const t in e) {
            const r = N(e[t]);
            (0, S.Cb)(r)(i.prototype, t);
          }
          return (0, T.j)(r)(i);
        }
        postscript(t) {
          const e = this.__accessor__,
            r = e.ctorArgs || t;
          e.initialize(),
            r && (this.set(r), (e.ctorArgs = null)),
            e.constructed(),
            this.initialize();
        }
        initialize() {}
        destroy() {
          this.destroyed || ((0, A.BT)(this), this.__accessor__.destroy());
        }
        get initialized() {
          return (this.__accessor__ && this.__accessor__.initialized) || !1;
        }
        get constructed() {
          return (
            (this.__accessor__ &&
              this.__accessor__.lifecycle === o.F.CONSTRUCTED) ||
            !1
          );
        }
        get destroyed() {
          return (this.__accessor__ && this.__accessor__.destroyed) || !1;
        }
        commitProperty(t) {
          this.get(t);
        }
        get(t) {
          return (0, i.U2)(this, t);
        }
        hasOwnProperty(t) {
          return this.__accessor__
            ? this.__accessor__.has(t)
            : Object.prototype.hasOwnProperty.call(this, t);
        }
        isInstanceOf(t) {
          return (
            (0, n.XV)(s.Z.getLogger(this.declaredClass), 'isInstanceOf', {
              replacement: 'Use instanceof directly',
              version: '4.16',
            }),
            this instanceof t
          );
        }
        keys() {
          return this.__accessor__ ? this.__accessor__.keys() : [];
        }
        set(t, e) {
          return (0, O.t)(this, t, e), this;
        }
        watch(t, e, r) {
          return (0, A.YP)(this, t, e, r);
        }
        _clearOverride(t) {
          return this.__accessor__.clearOverride(t);
        }
        _override(t, e) {
          return this.__accessor__.override(t, e);
        }
        _isOverridden(t) {
          return this.__accessor__.isOverridden(t);
        }
        notifyChange(t) {
          this.__accessor__.notifyChange(t);
        }
        _get(t) {
          return this.__accessor__.internalGet(t);
        }
        _set(t, e) {
          return this.__accessor__.internalSet(t, e), this;
        }
      }
    },
    3894: (t, e, r) => {
      r.d(e, { Z: () => i });
      var n = r(71143);
      function s(t) {
        t.length = 0;
      }
      class i {
        constructor(t = 50, e = 50) {
          this._pool = new n.Z(Array, void 0, s, e, t);
        }
        acquire() {
          return this._pool.acquire();
        }
        release(t) {
          this._pool.release(t);
        }
        prune() {
          this._pool.prune(0);
        }
        static acquire() {
          return o.acquire();
        }
        static release(t) {
          return o.release(t);
        }
        static prune() {
          o.prune();
        }
      }
      const o = new i(100);
    },
    96674: (t, e, r) => {
      r.d(e, { wq: () => v, eC: () => g });
      var n = r(43697),
        s = r(15923),
        i = r(70586),
        o = r(22974),
        a = r(31263);
      class l {
        constructor() {
          (this._values = new Map()), (this.multipleOriginsSupported = !1);
        }
        clone(t) {
          const e = new l();
          return (
            this._values.forEach((r, n) => {
              (t && t.has(n)) || e.set(n, (0, o.d9)(r.value), r.origin);
            }),
            e
          );
        }
        get(t, e) {
          e = this._normalizeOrigin(e);
          const r = this._values.get(t);
          return null == e || (null == r ? void 0 : r.origin) === e
            ? null == r
              ? void 0
              : r.value
            : void 0;
        }
        originOf(t) {
          var e, r;
          return null !=
            (e = null == (r = this._values.get(t)) ? void 0 : r.origin)
            ? e
            : a.s3.USER;
        }
        keys(t) {
          t = this._normalizeOrigin(t);
          const e = [...this._values.keys()];
          return null == t
            ? e
            : e.filter((e) => {
                var r;
                return (
                  (null == (r = this._values.get(e)) ? void 0 : r.origin) === t
                );
              });
        }
        set(t, e, r) {
          if ((r = this._normalizeOrigin(r)) === a.s3.DEFAULTS) {
            const e = this._values.get(t);
            if (e && null != e.origin && e.origin > r) return;
          }
          this._values.set(t, new c(e, r));
        }
        delete(t, e) {
          var r;
          (null != (e = this._normalizeOrigin(e)) &&
            (null == (r = this._values.get(t)) ? void 0 : r.origin) !== e) ||
            this._values.delete(t);
        }
        has(t, e) {
          var r;
          return null != (e = this._normalizeOrigin(e))
            ? (null == (r = this._values.get(t)) ? void 0 : r.origin) === e
            : this._values.has(t);
        }
        forEach(t) {
          this._values.forEach(({ value: e }, r) => t(e, r));
        }
        _normalizeOrigin(t) {
          if (null != t) return t === a.s3.DEFAULTS ? t : a.s3.USER;
        }
      }
      class c {
        constructor(t, e) {
          (this.value = t), (this.origin = e);
        }
      }
      var u = r(41103),
        h = r(50549),
        f = r(1153),
        d = r(76169),
        p = r(52011);
      const g = (t) => {
        let e = class extends t {
          constructor(...t) {
            super(...t);
            const e = (0, i.j0)((0, f.vw)(this)),
              r = e.store,
              n = new l();
            (e.store = n), (0, u.M)(e, r, n);
          }
          read(t, e) {
            (0, h.i)(this, t, e);
          }
          write(t = {}, e) {
            return (0, d.c)(this, t, e);
          }
          toJSON(t) {
            return this.write({}, t);
          }
          static fromJSON(t, e) {
            return y.call(this, t, e);
          }
        };
        return (
          (e = (0, n._)([(0, p.j)('esri.core.JSONSupport')], e)),
          (e.prototype.toJSON.isDefaultToJSON = !0),
          e
        );
      };
      function y(t, e) {
        if (!t) return null;
        if (t.declaredClass) throw new Error('JSON object is already hydrated');
        const r = new this();
        return r.read(t, e), r;
      }
      let v = class extends g(s.Z) {};
      v = (0, n._)([(0, p.j)('esri.core.JSONSupport')], v);
    },
    30175: (t, e, r) => {
      function n(t, e, r) {
        const n = t.get(e);
        if (void 0 !== n) return n;
        const s = r();
        return t.set(e, s), s;
      }
      r.d(e, { s1: () => n });
    },
    71143: (t, e, r) => {
      r.d(e, { Z: () => n });
      class n {
        constructor(t, e, r, n = 1, s = 0) {
          if (
            ((this.ctor = t),
            (this.acquireFunction = e),
            (this.releaseFunction = r),
            (this.allocationSize = n),
            (this._pool = new Array(s)),
            (this._initialSize = s),
            this.ctor)
          )
            for (let t = 0; t < s; t++) this._pool[t] = new this.ctor();
          this.allocationSize = Math.max(n, 1);
        }
        destroy() {
          this.prune(0);
        }
        acquire(...t) {
          let e;
          if (n.test.disabled) e = new this.ctor();
          else {
            if (0 === this._pool.length) {
              const t = this.allocationSize;
              for (let e = 0; e < t; e++) this._pool[e] = new this.ctor();
            }
            e = this._pool.pop();
          }
          return (
            this.acquireFunction
              ? this.acquireFunction(e, ...t)
              : (function (t) {
                  return t && t.acquire && 'function' == typeof t.acquire;
                })(e) && e.acquire(...t),
            e
          );
        }
        release(t) {
          var e;
          t &&
            !n.test.disabled &&
            (this.releaseFunction
              ? this.releaseFunction(t)
              : (e = t) &&
                e.release &&
                'function' == typeof e.release &&
                t.release(),
            this._pool.push(t));
        }
        prune(t = this._initialSize) {
          if (!(t >= this._pool.length)) {
            for (let e = t; e < this._pool.length; ++e) {
              const t = this._pool[e];
              this._dispose(t);
            }
            this._pool.length = t;
          }
        }
        _dispose(t) {
          t.dispose && 'function' == typeof t.dispose && t.dispose();
        }
      }
      n.test = { disabled: !1 };
    },
    54790: (t, e, r) => {
      r.d(e, { Z: () => n });
      class n {
        constructor(t, e = 29) {
          (this.name = t), (this._counter = 0), (this._items = new Array(e));
        }
        record(t) {
          this._items[++this._counter % this._items.length] = t;
        }
        get median() {
          return this._items.slice().sort((t, e) => t - e)[
            Math.floor(this._items.length / 2)
          ];
        }
        get average() {
          return this._items.reduce((t, e) => t + e, 0) / this._items.length;
        }
        get last() {
          return this._items[this._counter % this._items.length];
        }
      }
    },
    44553: (t, e, r) => {
      r.d(e, { Z: () => o });
      var n,
        s = r(67676);
      !(function (t) {
        const e = (t, e, r, n) => {
            let s = e,
              i = e;
            const o = r >>> 1,
              a = t[s - 1];
            for (; i <= o; ) {
              (i = s << 1), i < r && n(t[i - 1], t[i]) < 0 && ++i;
              const e = t[i - 1];
              if (n(e, a) <= 0) break;
              (t[s - 1] = e), (s = i);
            }
            t[s - 1] = a;
          },
          r = (t, e) => (t < e ? -1 : t > e ? 1 : 0);
        (t.sort = function (t, n, s, i) {
          void 0 === n && (n = 0),
            void 0 === s && (s = t.length),
            void 0 === i && (i = r);
          for (let r = s >>> 1; r > n; r--) e(t, r, s, i);
          const o = n + 1;
          for (let r = s - 1; r > n; r--) {
            const s = t[n];
            (t[n] = t[r]), (t[r] = s), e(t, o, r, i);
          }
        }),
          (t.iterableSort = function* (t, n, s, i) {
            void 0 === n && (n = 0),
              void 0 === s && (s = t.length),
              void 0 === i && (i = r);
            for (let r = s >>> 1; r > n; r--) e(t, r, s, i), yield;
            const o = n + 1;
            for (let r = s - 1; r > n; r--) {
              const s = t[n];
              (t[n] = t[r]), (t[r] = s), e(t, o, r, i), yield;
            }
          });
      })(n || (n = {}));
      const i = n;
      class o {
        constructor(t) {
          (this.data = []),
            (this._length = 0),
            (this._allocator = void 0),
            (this._deallocator = () => null),
            (this._shrink = () => {}),
            (this._hint = new s.SO()),
            t &&
              (t.initialSize && (this.data = new Array(t.initialSize)),
              t.allocator && (this._allocator = t.allocator),
              void 0 !== t.deallocator && (this._deallocator = t.deallocator),
              t.shrink && (this._shrink = () => a(this)));
        }
        toArray() {
          return this.data.slice(0, this.length);
        }
        filter(t) {
          const e = new Array();
          for (let r = 0; r < this._length; r++) {
            const n = this.data[r];
            t(n) && e.push(n);
          }
          return e;
        }
        getItemAt(t) {
          if (!(t < 0 || t >= this._length)) return this.data[t];
        }
        get length() {
          return this._length;
        }
        set length(t) {
          if (t > this._length) {
            if (this._allocator) {
              for (; this._length < t; )
                this.data[this._length++] = this._allocator(
                  this.data[this._length],
                );
              return;
            }
            this._length = t;
          } else {
            if (this._deallocator)
              for (let e = t; e < this._length; ++e)
                this.data[e] = this._deallocator(this.data[e]);
            (this._length = t), this._shrink();
          }
        }
        clear() {
          this.length = 0;
        }
        prune() {
          this.clear(), (this.data = []);
        }
        push(t) {
          this.data[this._length++] = t;
        }
        pushArray(t, e = t.length) {
          for (let r = 0; r < e; r++) this.data[this._length++] = t[r];
        }
        fill(t, e) {
          for (let r = 0; r < e; r++) this.data[this._length++] = t;
        }
        pushNew() {
          this._allocator &&
            (this.data[this.length] = this._allocator(this.data[this.length]));
          const t = this.data[this._length];
          return ++this._length, t;
        }
        unshift(t) {
          this.data.unshift(t), this._length++, a(this);
        }
        pop() {
          if (0 === this.length) return;
          const t = this.data[this.length - 1];
          return (this.length = this.length - 1), this._shrink(), t;
        }
        remove(t) {
          const e = (0, s.cq)(this.data, t, this.length, this._hint);
          if (-1 !== e)
            return this.data.splice(e, 1), (this.length = this.length - 1), t;
        }
        removeUnordered(t) {
          const e = (0, s.e$)(this.data, t, this.length, this._hint);
          return (
            void 0 !== e && (this.length = this.length - 1), this._shrink(), e
          );
        }
        removeUnorderedIndex(t) {
          if (!(t >= this.length || t < 0))
            return this.swapElements(t, this.length - 1), this.pop();
        }
        removeUnorderedMany(t, e = t.length, r) {
          (this.length = (0, s.FY)(
            this.data,
            t,
            this.length,
            e,
            this._hint,
            r,
          )),
            this._shrink();
        }
        front() {
          if (0 !== this.length) return this.data[0];
        }
        back() {
          if (0 !== this.length) return this.data[this.length - 1];
        }
        swapElements(t, e) {
          t >= this.length ||
            e >= this.length ||
            t === e ||
            ([this.data[t], this.data[e]] = [this.data[e], this.data[t]]);
        }
        sort(t) {
          i.sort(this.data, 0, this.length, t);
        }
        iterableSort(t) {
          return i.iterableSort(this.data, 0, this.length, t);
        }
        some(t, e) {
          for (let r = 0; r < this.length; ++r)
            if (t.call(e, this.data[r], r, this.data)) return !0;
          return !1;
        }
        filterInPlace(t, e) {
          let r = 0;
          for (let n = 0; n < this._length; ++n) {
            const s = this.data[n];
            t.call(e, s, n, this.data) &&
              ((this.data[n] = this.data[r]), (this.data[r] = s), r++);
          }
          if (this._deallocator)
            for (let t = r; t < this._length; t++)
              this.data[t] = this._deallocator(this.data[t]);
          return (this._length = r), this._shrink(), this;
        }
        forAll(t, e) {
          const r = this.length,
            n = this.data;
          for (let s = 0; s < r; ++s) t.call(e, n[s], s, n);
        }
        forEach(t, e) {
          for (let r = 0; r < this.length; ++r)
            t.call(e, this.data[r], r, this.data);
        }
        map(t, e) {
          const r = new Array(this.length);
          for (let n = 0; n < this.length; ++n)
            r[n] = t.call(e, this.data[n], n, this.data);
          return r;
        }
        reduce(t, e) {
          let r = e;
          for (let e = 0; e < this.length; ++e)
            r = t(r, this.data[e], e, this.data);
          return r;
        }
        has(t) {
          const e = this.length,
            r = this.data;
          for (let n = 0; n < e; ++n) if (r[n] === t) return !0;
          return !1;
        }
      }
      function a(t) {
        t.data.length > 1.5 * t.length &&
          (t.data.length = Math.floor(1.1 * t.length));
      }
    },
    20941: (t, e, r) => {
      r.d(e, { Z: () => s });
      var n = r(58896);
      class s extends n.Z {
        constructor(t, e, r) {
          if ((super(t, e, r), !(this instanceof s))) return new s(t, e, r);
        }
      }
      s.prototype.type = 'warning';
    },
    31263: (t, e, r) => {
      r.d(e, {
        s3: () => n,
        kk: () => o,
        x3: () => l,
        Wm: () => c,
        M9: () => a,
      });
      var n,
        s,
        i = r(70586);
      ((s = n || (n = {}))[(s.DEFAULTS = 0)] = 'DEFAULTS'),
        (s[(s.COMPUTED = 1)] = 'COMPUTED'),
        (s[(s.SERVICE = 2)] = 'SERVICE'),
        (s[(s.PORTAL_ITEM = 3)] = 'PORTAL_ITEM'),
        (s[(s.WEB_SCENE = 4)] = 'WEB_SCENE'),
        (s[(s.WEB_MAP = 5)] = 'WEB_MAP'),
        (s[(s.USER = 6)] = 'USER');
      const o = n.USER + 1;
      function a(t) {
        switch (t) {
          case 'defaults':
            return n.DEFAULTS;
          case 'service':
            return n.SERVICE;
          case 'portal-item':
            return n.PORTAL_ITEM;
          case 'web-scene':
            return n.WEB_SCENE;
          case 'web-map':
            return n.WEB_MAP;
          case 'user':
            return n.USER;
        }
      }
      function l(t) {
        switch (t) {
          case n.DEFAULTS:
            return 'defaults';
          case n.SERVICE:
            return 'service';
          case n.PORTAL_ITEM:
            return 'portal-item';
          case n.WEB_SCENE:
            return 'web-scene';
          case n.WEB_MAP:
            return 'web-map';
          case n.USER:
            return 'user';
        }
        return (0, i.j0)(void 0);
      }
      function c(t) {
        return l(t);
      }
    },
    90578: (t, e, r) => {
      r.d(e, { p: () => l });
      var n = r(75215),
        s = r(7628);
      const i = Object.prototype.toString;
      function o(t) {
        const e = '__accessorMetadata__' in t ? (0, n.se)(t) : t;
        return function (...t) {
          if ((t.push(e), 'number' == typeof t[2]))
            throw new Error(
              'Using @cast has parameter decorator is not supported since 4.16',
            );
          return a.apply(this, t);
        };
      }
      function a(t, e, r, n) {
        (0, s.VZ)(t, e).cast = n;
      }
      function l(...t) {
        if (3 !== t.length || 'string' != typeof t[1])
          return 1 === t.length && '[object Function]' === i.call(t[0])
            ? o(t[0])
            : 1 === t.length && 'string' == typeof t[0]
            ? (function (t) {
                return function (e, r) {
                  (0, s.VZ)(e, t).cast = e[r];
                };
              })(t[0])
            : void 0;
      }
    },
    5600: (t, e, r) => {
      r.d(e, { Eg: () => u, Cb: () => l, CJ: () => c });
      var n = r(92604),
        s = r(75215),
        i = r(67723),
        o = r(7628),
        a = r(37697);
      function l(t = {}) {
        return (e, r) => {
          if (e === Function.prototype)
            throw new Error(
              `Inappropriate use of @property() on a static field: ${e.name}.${r}. Accessor does not support static properties.`,
            );
          const l = Object.getOwnPropertyDescriptor(e, r),
            c = (0, o.VZ)(e, r);
          l &&
            (l.get || l.set
              ? ((c.get = l.get || c.get), (c.set = l.set || c.set))
              : 'value' in l &&
                ('value' in t &&
                  n.Z.getLogger(
                    'esri.core.accessorSupport.decorators.property',
                  ).warn(
                    `@property() will redefine the value of "${r}" on "${e.constructor.name}" already defined in the metadata`,
                    t,
                  ),
                (c.value = t.value = l.value))),
            null != t.readOnly && (c.readOnly = t.readOnly);
          const h = t.aliasOf;
          if (h) {
            const t = 'string' == typeof h ? h : h.source,
              e = 'string' == typeof h ? null : !0 === h.overridable;
            let n;
            (c.dependsOn = [t]),
              (c.get = function () {
                let e = (0, i.U2)(this, t);
                if ('function' == typeof e) {
                  n || (n = t.split('.').slice(0, -1).join('.'));
                  const r = (0, i.U2)(this, n);
                  r && (e = e.bind(r));
                }
                return e;
              }),
              c.readOnly ||
                (c.set = e
                  ? function (t) {
                      void 0 !== t
                        ? this._override(r, t)
                        : this._clearOverride(r);
                    }
                  : function (e) {
                      (0, a.t)(this, t, e);
                    });
          }
          const f = t.type,
            d = t.types;
          c.cast ||
            (f
              ? (c.cast = (function (t) {
                  let e = 0,
                    r = t;
                  if ((0, s.AY)(t)) return (0, s.sY)(t);
                  for (
                    ;
                    Array.isArray(r) &&
                    1 === r.length &&
                    'string' != typeof r[0] &&
                    'number' != typeof r[0];

                  )
                    (r = r[0]), e++;
                  const n = r;
                  if ((0, s.gB)(n))
                    return 0 === e ? (0, s.i$)(n) : (0, s.Iu)((0, s.i$)(n), e);
                  if (1 === e) return (0, s.rY)(n);
                  if (e > 1) return (0, s.di)(n, e);
                  const i = t;
                  return i.from ? i.from : (0, s.se)(i);
                })(f))
              : d &&
                (Array.isArray(d)
                  ? (c.cast = (0, s.Ls)((0, s.N7)(d[0])))
                  : (c.cast = (0, s.N7)(d)))),
            t.range && (c.cast = u(c.cast, t.range)),
            (0, o.tz)(c, t);
        };
      }
      function c(t, e, r) {
        const n = (0, o.VZ)(t, r);
        n.json || (n.json = {});
        let s = n.json;
        return (
          void 0 !== e &&
            (s.origins || (s.origins = {}),
            s.origins[e] || (s.origins[e] = {}),
            (s = s.origins[e])),
          s
        );
      }
      function u(t, e) {
        return (r) => {
          let n = +t(r);
          return (
            null != e.step && (n = Math.round(n / e.step) * e.step),
            null != e.min && (n = Math.max(e.min, n)),
            null != e.max && (n = Math.min(e.max, n)),
            n
          );
        };
      }
    },
    52011: (t, e, r) => {
      r.d(e, { j: () => c }), r(80442);
      var n = r(97831),
        s = r(7628),
        i = r(58971),
        o = r(53906);
      const a = new Set(),
        l = new Set();
      function c(t) {
        return (e) => {
          (e.prototype.declaredClass = t), h(e);
          const r = [],
            n = [];
          let i = e.prototype;
          for (; i; )
            i.hasOwnProperty('initialize') &&
              !a.has(i.initialize) &&
              (a.add(i.initialize), r.push(i.initialize)),
              i.hasOwnProperty('destroy') &&
                !l.has(i.destroy) &&
                (l.add(i.destroy), n.push(i.destroy)),
              (i = Object.getPrototypeOf(i));
          a.clear(), l.clear();
          class o extends e {
            constructor(...t) {
              if (
                (super(...t),
                this.constructor === o && 'function' == typeof this.postscript)
              ) {
                if (
                  (r.length &&
                    Object.defineProperty(this, 'initialize', {
                      enumerable: !1,
                      configurable: !0,
                      value() {
                        for (let t = r.length - 1; t >= 0; t--) r[t].call(this);
                      },
                    }),
                  n.length)
                ) {
                  let t = !1;
                  Object.defineProperty(this, 'destroy', {
                    enumerable: !1,
                    configurable: !0,
                    value() {
                      if (!t) {
                        t = !0;
                        for (let t = 0; t < n.length; t++) n[t].call(this);
                      }
                    },
                  });
                }
                this.postscript(...t);
              }
            }
          }
          return (
            (o.__accessorMetadata__ = (0, s.JT)(e.prototype)),
            (o.prototype.declaredClass = t),
            o
          );
        };
      }
      function u(t, e) {
        return null == e.get
          ? function () {
              const e = this.__accessor__.properties.get(t);
              if (void 0 === e) return;
              (0, i.it)(e);
              const r = this.__accessor__.store;
              return r.has(t) ? r.get(t) : e.metadata.value;
            }
          : function () {
              const e = this.__accessor__.properties.get(t);
              if (void 0 !== e) return e.getComputed();
            };
      }
      function h(t) {
        const e = t.prototype,
          r = (0, s.JT)(e).properties,
          i = {};
        for (const t of Object.getOwnPropertyNames(r)) {
          const e = r[t];
          (0, o.OM)(e),
            (i[t] = {
              enumerable: !0,
              configurable: !0,
              get: u(t, e),
              set(r) {
                const s = this.__accessor__;
                if (void 0 !== s) {
                  if (!Object.isFrozen(this)) {
                    if (s.initialized && e.readOnly)
                      throw new TypeError(
                        `[accessor] cannot assign to read-only property '${t}' of ${this.declaredClass}`,
                      );
                    if (s.lifecycle === n.F.CONSTRUCTED && e.constructOnly)
                      throw new TypeError(
                        `[accessor] cannot assign to construct-only property '${t}' of ${this.declaredClass}`,
                      );
                    s.set(t, r);
                  }
                } else
                  Object.defineProperty(this, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r,
                  });
              },
            });
        }
        Object.defineProperties(t.prototype, i);
      }
    },
    41103: (t, e, r) => {
      r.d(e, { M: () => s });
      var n = r(31263);
      function s(t, e, r) {
        e.keys().forEach((t) => {
          r.set(t, e.get(t), n.s3.DEFAULTS);
        });
        const s = t.metadatas;
        Object.keys(s).forEach((e) => {
          t.internalGet(e) && r.set(e, t.internalGet(e), n.s3.DEFAULTS);
        });
      }
    },
    75215: (t, e, r) => {
      r.d(e, {
        z8: () => k,
        rY: () => O,
        Ls: () => b,
        TJ: () => y,
        vU: () => u,
        sY: () => D,
        di: () => T,
        Iu: () => S,
        q9: () => c,
        i$: () => j,
        N7: () => E,
        Zs: () => l,
        se: () => w,
        AY: () => I,
        gB: () => N,
        V5: () => C,
      }),
        r(80442);
      var n = r(92604),
        s = r(30175);
      const i = n.Z.getLogger('esri.core.Accessor');
      function o(t) {
        return null == t ? t : new Date(t);
      }
      function a(t) {
        return null == t ? t : !!t;
      }
      function l(t) {
        return null == t ? t : t.toString();
      }
      function c(t) {
        return null == t ? t : ((t = parseFloat(t)), isNaN(t) ? 0 : t);
      }
      function u(t) {
        return null == t ? t : Math.round(parseFloat(t));
      }
      function h(t) {
        return (
          t && t.constructor && void 0 !== t.constructor.__accessorMetadata__
        );
      }
      function f(t, e) {
        return null != e && t && !(e instanceof t);
      }
      function d(t) {
        return t && 'isCollection' in t;
      }
      function p(t) {
        return t && t.Type
          ? 'function' == typeof t.Type
            ? t.Type
            : t.Type.base
          : null;
      }
      function g(t, e) {
        return (
          !!h(e) &&
          (i.error(
            'Accessor#set',
            "Assigning an instance of '" +
              (e.declaredClass || 'unknown') +
              "' which is not a subclass of '" +
              v(t) +
              "'",
          ),
          !0)
        );
      }
      function y(t, e) {
        return null == e
          ? e
          : d(t)
          ? (function (t, e) {
              if (!e || !e.constructor || !d(e.constructor))
                return g(t, e) ? e : new t(e);
              const r = p(t.prototype.itemType),
                n = p(e.constructor.prototype.itemType);
              return r
                ? n
                  ? r === n
                    ? e
                    : r.prototype.isPrototypeOf(n.prototype)
                    ? new t(e)
                    : (g(t, e), e)
                  : new t(e)
                : e;
            })(t, e)
          : f(t, e)
          ? g(t, e)
            ? e
            : new t(e)
          : e;
      }
      function v(t) {
        return (t && t.prototype && t.prototype.declaredClass) || 'unknown';
      }
      const _ = new WeakMap();
      function m(t) {
        switch (t) {
          case Number:
            return c;
          case k:
            return u;
          case Boolean:
            return a;
          case String:
            return l;
          case Date:
            return o;
          default:
            return (0, s.s1)(_, t, () => y.bind(null, t));
        }
      }
      function w(t, e) {
        const r = m(t);
        return 1 === arguments.length ? r : r(e);
      }
      function b(t, e, r) {
        return 1 === arguments.length
          ? b.bind(null, t)
          : e
          ? Array.isArray(e)
            ? e.map((e) => t(e, r))
            : [t(e, r)]
          : e;
      }
      function O(t, e) {
        return 1 === arguments.length
          ? b(w.bind(null, t))
          : b(w.bind(null, t), e);
      }
      function A(t, e, r) {
        return 0 !== e && Array.isArray(r)
          ? r.map((r) => A(t, e - 1, r))
          : t(r);
      }
      function S(t, e, r) {
        if (2 === arguments.length) return S.bind(null, t, e);
        if (!r) return r;
        let n = e,
          s = (r = A(t, e, r));
        for (; n > 0 && Array.isArray(s); ) n--, (s = s[0]);
        if (void 0 !== s) for (let t = 0; t < n; t++) r = [r];
        return r;
      }
      function T(t, e, r) {
        return 2 === arguments.length
          ? S(w.bind(null, t), e)
          : S(w.bind(null, t), e, r);
      }
      function N(t) {
        return (
          !!Array.isArray(t) &&
          !t.some((e) => {
            const r = typeof e;
            return !(
              'string' === r ||
              'number' === r ||
              ('function' === r && t.length > 1)
            );
          })
        );
      }
      function j(t, e) {
        if (2 === arguments.length) return j(t).call(null, e);
        const r = new Set(),
          n = t.filter((t) => 'function' != typeof t),
          s = t.filter((t) => 'function' == typeof t);
        for (const e of t)
          ('string' != typeof e && 'number' != typeof e) || r.add(e);
        let o = null,
          a = null;
        return (t, e) => {
          if (null == t) return t;
          const l = typeof t,
            c = 'string' === l || 'number' === l;
          return (c &&
            (r.has(t) ||
              s.some(
                (t) =>
                  ('string' === l && t === String) ||
                  ('number' === l && t === Number),
              ))) ||
            ('object' === l && s.some((e) => !f(t, e)))
            ? t
            : (c && n.length
                ? (o ||
                    (o = n
                      .map((t) => ('string' == typeof t ? `'${t}'` : `${t}`))
                      .join(', ')),
                  i.error(
                    'Accessor#set',
                    `'${t}' is not a valid value for this property, only the following values are valid: ${o}`,
                  ))
                : 'object' == typeof t && s.length
                ? (a || (a = s.map((t) => v(t)).join(', ')),
                  i.error(
                    'Accessor#set',
                    `'${t}' is not a valid value for this property, value must be one of ${a}`,
                  ))
                : i.error(
                    'Accessor#set',
                    `'${t}' is not a valid value for this property`,
                  ),
              e && (e.valid = !1),
              null);
        };
      }
      function E(t, e) {
        if (2 === arguments.length) return E(t).call(null, e);
        const r = {},
          n = [],
          s = [];
        for (const e in t.typeMap) {
          const i = t.typeMap[e];
          (r[e] = w(i)), n.push(v(i)), s.push(e);
        }
        const o = () => `'${n.join("', '")}'`,
          a = () => `'${s.join("', '")}'`,
          l = 'string' == typeof t.key ? (e) => e[t.key] : t.key;
        return (e) => {
          if (t.base && !f(t.base, e)) return e;
          if (null == e) return e;
          const n = l(e) || t.defaultKeyValue,
            s = r[n];
          if (!s)
            return (
              i.error(
                'Accessor#set',
                `Invalid property value, value needs to be one of ${o()}, or a plain object that can autocast (having .type = ${a()})`,
              ),
              null
            );
          if (!f(t.typeMap[n], e)) return e;
          if ('string' == typeof t.key && !h(e)) {
            const r = {};
            for (const n in e) n !== t.key && (r[n] = e[n]);
            return s(r);
          }
          return s(e);
        };
      }
      class k {}
      const C = {
        native: (t) => ({ type: 'native', value: t }),
        array: (t) => ({ type: 'array', value: t }),
        oneOf: (t) => ({ type: 'one-of', values: t }),
      };
      function I(t) {
        if (!t || !('type' in t)) return !1;
        switch (t.type) {
          case 'native':
          case 'array':
          case 'one-of':
            return !0;
        }
        return !1;
      }
      function D(t) {
        switch (t.type) {
          case 'native':
            return w(t.value);
          case 'array':
            return b(D(t.value));
          case 'one-of':
            return (function (t) {
              let e = null;
              return (r, n) =>
                U(r, t)
                  ? r
                  : (null == e && (e = M(t)),
                    i.error(
                      'Accessor#set',
                      `Invalid property value, value needs to be of type ${e}`,
                    ),
                    n && (n.valid = !1),
                    null);
            })(t);
          default:
            return null;
        }
      }
      function M(t) {
        switch (t.type) {
          case 'native':
            switch (t.value) {
              case Number:
                return 'number';
              case String:
                return 'string';
              case Boolean:
                return 'boolean';
              case k:
                return 'integer';
              case Date:
                return 'date';
              default:
                return v(t.value);
            }
          case 'array':
            return `array of ${M(t.value)}`;
          case 'one-of': {
            const e = t.values.map((t) => M(t));
            return `one of ${e.slice(0, e.length - 1)} or ${e[e.length - 1]}`;
          }
        }
        return 'unknown';
      }
      function U(t, e) {
        if (null == t) return !0;
        switch (e.type) {
          case 'native':
            switch (e.value) {
              case Number:
              case k:
                return 'number' == typeof t;
              case Boolean:
                return 'boolean' == typeof t;
              case String:
                return 'string' == typeof t;
            }
            return t instanceof e.value;
          case 'array':
            return !!Array.isArray(t) && !t.some((t) => !U(t, e.value));
          case 'one-of':
            return e.values.some((e) => U(t, e));
        }
      }
    },
    53906: (t, e, r) => {
      r.d(e, { hk: () => f, HS: () => u, Ah: () => h, OM: () => y });
      var n = r(75215),
        s = r(63213);
      function i(t) {
        if (
          (t.json || (t.json = {}),
          a(t.json),
          l(t.json),
          o(t.json),
          t.json.origins)
        )
          for (const e in t.json.origins)
            a(t.json.origins[e]), l(t.json.origins[e]), o(t.json.origins[e]);
        return !0;
      }
      function o(t) {
        t.name &&
          (t.read && 'object' == typeof t.read
            ? void 0 === t.read.source && (t.read.source = t.name)
            : (t.read = { source: t.name }),
          t.write && 'object' == typeof t.write
            ? void 0 === t.write.target && (t.write.target = t.name)
            : (t.write = { target: t.name }));
      }
      function a(t) {
        'boolean' == typeof t.read
          ? (t.read = { enabled: t.read })
          : 'function' == typeof t.read
          ? (t.read = { enabled: !0, reader: t.read })
          : t.read &&
            'object' == typeof t.read &&
            void 0 === t.read.enabled &&
            (t.read.enabled = !0);
      }
      function l(t) {
        'boolean' == typeof t.write
          ? (t.write = { enabled: t.write })
          : 'function' == typeof t.write
          ? (t.write = { enabled: !0, writer: t.write })
          : t.write &&
            'object' == typeof t.write &&
            void 0 === t.write.enabled &&
            (t.write.enabled = !0);
      }
      var c = r(827);
      function u(t, e) {
        return f(t, 'read', e);
      }
      function h(t, e) {
        return f(t, 'write', e);
      }
      function f(t, e, r) {
        let n = t && t.json;
        if (t && t.json && t.json.origins && r) {
          const s = t.json.origins[r.origin];
          s && ('any' === e || e in s) && (n = s);
        }
        return n;
      }
      function d(t) {
        return t.type ? p(t) : g(t);
      }
      function p(t) {
        if (!t.type) return;
        let e = 0,
          r = t.type;
        for (; Array.isArray(r) && !(0, n.gB)(r); ) (r = r[0]), e++;
        return { type: r, ndimArray: e };
      }
      function g(t) {
        if (!t.types) return;
        let e = 0,
          r = t.types;
        for (; Array.isArray(r); ) (r = r[0]), e++;
        return { types: r, ndimArray: e };
      }
      function y(t) {
        i(t) &&
          ((function (t) {
            if (t.json && t.json.origins) {
              const e = t.json.origins,
                r = { 'web-document': ['web-scene', 'web-map'] };
              for (const t in r)
                if (e[t]) {
                  const n = e[t];
                  r[t].forEach((t) => {
                    e[t] = n;
                  }),
                    delete e[t];
                }
            }
          })(t),
          (function (t) {
            const e = (function (t) {
              return t.json.types ? g(t.json) : t.type ? p(t) : g(t);
            })(t);
            if (t.json.origins)
              for (const r in t.json.origins) {
                const n = t.json.origins[r],
                  i = n.types ? d(n) : e;
                (0, s.U)(i, n, !1),
                  n.types &&
                    !n.write &&
                    t.json.write &&
                    t.json.write.enabled &&
                    (n.write = { ...t.json.write }),
                  (0, c.U)(i, n);
              }
            (0, s.U)(e, t.json, !0), (0, c.U)(e, t.json);
          })(t));
      }
    },
    63213: (t, e, r) => {
      r.d(e, { U: () => c, d: () => u });
      var n = r(92604),
        s = r(78286),
        i = r(20941),
        o = r(7628),
        a = r(14062);
      const l = n.Z.getLogger(
        'esri.core.accessorSupport.extensions.serializableProperty.reader',
      );
      function c(t, e, r) {
        var n, i;
        t &&
          ((!r && !e.read) ||
            (null != (n = e.read) && n.reader) ||
            !1 === (null == (i = e.read) ? void 0 : i.enabled) ||
            ((function (t) {
              return 'types' in t ? y(t.types) : g(t.type);
            })(t) &&
              (0, s.RB)('read.reader', u(t), e)));
      }
      function u(t) {
        var e;
        const r = null != (e = t.ndimArray) ? e : 0;
        if (r > 1)
          return (function (t) {
            var e;
            const r = h(t),
              n = f.bind(null, r),
              s = null != (e = t.ndimArray) ? e : 0;
            return (t, e, r) => {
              if (null == t) return t;
              t = n(t, r, s);
              let i = s,
                o = t;
              for (; i > 0 && Array.isArray(o); ) i--, (o = o[0]);
              if (void 0 !== o) for (let e = 0; e < i; e++) t = [t];
              return t;
            };
          })(t);
        if (1 === r) return d(t);
        if ('type' in t && p(t.type)) {
          var n, s;
          const e =
              null == (n = t.type.prototype) || null == (s = n.itemType)
                ? void 0
                : s.Type,
            r = d('function' == typeof e ? { type: e } : { types: e });
          return (e, n, s) => {
            const i = r(e, n, s);
            return i ? new t.type(i) : i;
          };
        }
        return h(t);
      }
      function h(t) {
        return 'type' in t
          ? (function (t) {
              return t.prototype.read
                ? (e, r, n) => {
                    if (null == e) return e;
                    const s = typeof e;
                    if ('object' !== s)
                      return void l.error(
                        `Expected JSON value of type 'object' to deserialize type '${t.prototype.declaredClass}', but got '${s}'`,
                      );
                    const i = new t();
                    return i.read(e, n), i;
                  }
                : t.fromJSON;
            })(t.type)
          : (function (t) {
              var e;
              let r = null;
              const n = null != (e = t.errorContext) ? e : 'type';
              return (e, s, a) => {
                if (null == e) return e;
                const c = typeof e;
                if ('object' !== c)
                  return void l.error(
                    `Expected JSON value of type 'object' to deserialize, but got '${c}'`,
                  );
                r ||
                  (r = (function (t) {
                    const e = {};
                    for (const s in t.typeMap) {
                      var r, n;
                      const i = t.typeMap[s],
                        a = (0, o.JT)(i.prototype);
                      if ('function' == typeof t.key) continue;
                      const l = a.properties[t.key];
                      if (!l) continue;
                      null != (r = l.json) &&
                        r.type &&
                        Array.isArray(l.json.type) &&
                        1 === l.json.type.length &&
                        'string' == typeof l.json.type[0] &&
                        (e[l.json.type[0]] = i);
                      const c = null == (n = l.json) ? void 0 : n.write;
                      if (!c || !c.writer) {
                        e[s] = i;
                        continue;
                      }
                      const u = c.target,
                        h = 'string' == typeof u ? u : t.key,
                        f = {};
                      c.writer(s, f, h), f[h] && (e[f[h]] = i);
                    }
                    return e;
                  })(t));
                const u = t.key;
                if ('string' != typeof u) return;
                const h = e[u],
                  f = h
                    ? r[h]
                    : t.defaultKeyValue
                    ? t.typeMap[t.defaultKeyValue]
                    : void 0;
                if (!f) {
                  const t = `Type '${h || 'unknown'}' is not supported`;
                  return (
                    a &&
                      a.messages &&
                      e &&
                      a.messages.push(
                        new i.Z(`${n}:unsupported`, t, {
                          definition: e,
                          context: a,
                        }),
                      ),
                    void l.error(t)
                  );
                }
                const d = new f();
                return d.read(e, a), d;
              };
            })(t.types);
      }
      function f(t, e, r, n) {
        return 0 !== n && Array.isArray(e)
          ? e.map((e) => f(t, e, r, n - 1))
          : t(e, void 0, r);
      }
      function d(t) {
        const e = h(t);
        return (t, r, n) => {
          if (null == t) return t;
          if (Array.isArray(t)) {
            const r = [];
            for (const s of t) {
              const t = e(s, void 0, n);
              void 0 !== t && r.push(t);
            }
            return r;
          }
          const s = e(t, void 0, n);
          return void 0 !== s ? [s] : void 0;
        };
      }
      function p(t) {
        if (!(0, a.u)(t)) return !1;
        const e = t.prototype.itemType;
        return (
          !(!e || !e.Type) &&
          ('function' == typeof e.Type ? g(e.Type) : y(e.Type))
        );
      }
      function g(t) {
        return (
          !Array.isArray(t) &&
          !!t &&
          t.prototype &&
          ('read' in t.prototype || 'fromJSON' in t || p(t))
        );
      }
      function y(t) {
        for (const e in t.typeMap) if (!g(t.typeMap[e])) return !1;
        return !0;
      }
    },
    14062: (t, e, r) => {
      function n(t) {
        return (
          !!t &&
          t.prototype &&
          t.prototype.declaredClass &&
          0 === t.prototype.declaredClass.indexOf('esri.core.Collection')
        );
      }
      r.d(e, { u: () => n });
    },
    827: (t, e, r) => {
      r.d(e, { U: () => l, k: () => f });
      var n = r(20102),
        s = r(92604),
        i = r(78286),
        o = r(14062);
      const a = s.Z.getLogger(
        'esri.core.accessorSupport.extensions.serializableProperty.writer',
      );
      function l(t, e) {
        var r;
        if (
          !e.write ||
          e.write.writer ||
          (!1 === e.write.enabled && !e.write.overridePolicy)
        )
          return;
        const n = null != (r = null == t ? void 0 : t.ndimArray) ? r : 0;
        t && (1 === n || ('type' in t && (0, o.u)(t.type)))
          ? (e.write.writer = d)
          : n > 1
          ? (e.write.writer = (function (t) {
              return function (e, r, n, s) {
                let o;
                if (null === e) o = null;
                else {
                  o = p(e, s, t);
                  let r = t,
                    n = o;
                  for (; r > 0 && Array.isArray(n); ) r--, (n = n[0]);
                  if (void 0 !== n) for (let t = 0; t < r; t++) o = [o];
                }
                (0, i.RB)(n, o, r);
              };
            })(n))
          : e.types
          ? Array.isArray(e.types)
            ? (e.write.writer = (function (t) {
                return (e, r, n, s) =>
                  e && Array.isArray(e)
                    ? u(
                        e.filter((e) => c(e, t, s)),
                        r,
                        n,
                        s,
                      )
                    : u(e, r, n, s);
              })(e.types[0]))
            : (e.write.writer = (function (t) {
                return (e, r, n, s) =>
                  e ? (c(e, t, s) ? u(e, r, n, s) : void 0) : u(e, r, n, s);
              })(e.types))
          : (e.write.writer = u);
      }
      function c(t, e, r) {
        for (const r in e.typeMap) if (t instanceof e.typeMap[r]) return !0;
        if (null != r && r.messages) {
          var s, i;
          const o = null != (s = e.errorContext) ? s : 'type',
            l = `Values of type '${
              null !=
              (i = 'function' != typeof e.key ? t[e.key] : t.declaredClass)
                ? i
                : 'Unknown'
            }' cannot be written`;
          r &&
            r.messages &&
            t &&
            r.messages.push(
              new n.Z(`${o}:unsupported`, l, { definition: t, context: r }),
            ),
            a.error(l);
        }
        return !1;
      }
      function u(t, e, r, n) {
        (0, i.RB)(r, h(t, n), e);
      }
      function h(t, e) {
        return t && 'function' == typeof t.write
          ? t.write({}, e)
          : t && 'function' == typeof t.toJSON
          ? t.toJSON()
          : 'number' == typeof t
          ? f(t)
          : t;
      }
      function f(t) {
        return t === -1 / 0
          ? -Number.MAX_VALUE
          : t === 1 / 0
          ? Number.MAX_VALUE
          : isNaN(t)
          ? null
          : t;
      }
      function d(t, e, r, n) {
        let s;
        null === t
          ? (s = null)
          : t && 'function' == typeof t.map
          ? ((s = t.map((t) => h(t, n))),
            'function' == typeof s.toArray && (s = s.toArray()))
          : (s = [h(t, n)]),
          (0, i.RB)(r, s, e);
      }
      function p(t, e, r) {
        return 0 !== r && Array.isArray(t)
          ? t.map((t) => p(t, e, r - 1))
          : h(t, e);
      }
    },
    67723: (t, e, r) => {
      r.d(e, { Gg: () => l, U2: () => a, $z: () => o });
      var n = r(1153);
      function s(t, e) {
        const r = '?' === t[t.length - 1] ? t.slice(0, -1) : t;
        if (null != e.getItemAt || Array.isArray(e)) {
          const t = parseInt(r, 10);
          if (!isNaN(t)) return Array.isArray(e) ? e[t] : e.getItemAt(t);
        }
        const s = (0, n.vw)(e);
        return (0, n.b6)(s, r) ? s.get(r) : e[r];
      }
      function i(t, e, r) {
        if (null == t) return t;
        const n = s(e[r], t);
        return !n && r < e.length - 1
          ? void 0
          : r === e.length - 1
          ? n
          : i(n, e, r + 1);
      }
      function o(t, e, r = 0) {
        return 'string' == typeof e && -1 === e.indexOf('.')
          ? s(e, t)
          : i(t, (0, n.NI)(e), r);
      }
      function a(t, e) {
        return o(t, e);
      }
      function l(t, e) {
        return void 0 !== o(e, t);
      }
    },
    97831: (t, e, r) => {
      var n;
      r.d(e, { F: () => n }),
        (function (t) {
          (t[(t.INITIALIZING = 0)] = 'INITIALIZING'),
            (t[(t.CONSTRUCTING = 1)] = 'CONSTRUCTING'),
            (t[(t.CONSTRUCTED = 2)] = 'CONSTRUCTED');
        })(n || (n = {}));
    },
    7628: (t, e, r) => {
      r.d(e, { JT: () => a, VZ: () => l, tz: () => c });
      var n = r(22974),
        s = r(70586),
        i = r(1153);
      class o {
        constructor(t) {
          (this.autoDestroy = !1), (this.properties = t);
        }
      }
      function a(t) {
        let e = t.constructor.__accessorMetadata__;
        const r = Object.prototype.hasOwnProperty.call(
          t.constructor,
          '__accessorMetadata__',
        );
        if (e) {
          if (!r) {
            const r = Object.create(e.properties),
              s = e.autoDestroy;
            for (const t in r) r[t] = (0, n.d9)(r[t]);
            (e = new o(r)),
              (e.autoDestroy = s),
              Object.defineProperty(t.constructor, '__accessorMetadata__', {
                value: e,
                enumerable: !1,
                configurable: !0,
                writable: !0,
              });
          }
        } else
          (e = new o({})),
            Object.defineProperty(t.constructor, '__accessorMetadata__', {
              value: e,
              enumerable: !1,
              configurable: !0,
              writable: !0,
            });
        return (0, s.j0)(t.constructor.__accessorMetadata__);
      }
      function l(t, e) {
        const r = (function (t) {
          return a(t).properties;
        })(t);
        let n = r[e];
        return n || (n = r[e] = {}), n;
      }
      function c(t, e) {
        return (0, i.TS)(t, e, h);
      }
      const u =
        /^(?:[^.]+\.)?(?:value|type|(?:json\.type|json\.origins\.[^.]\.type))$/;
      function h(t) {
        return u.test(t) ? 'replace' : 'merge';
      }
    },
    50549: (t, e, r) => {
      r.d(e, { i: () => u, $: () => h });
      var n = r(67723),
        s = r(1153),
        i = r(53906);
      function o(t, e, r) {
        if (!t || !t.read || !1 === t.read.enabled || !t.read.source) return !1;
        const s = t.read.source;
        if ('string' == typeof s) {
          if (s === e) return !0;
          if (s.indexOf('.') > -1 && 0 === s.indexOf(e) && (0, n.Gg)(s, r))
            return !0;
        } else
          for (const t of s) {
            if (t === e) return !0;
            if (t.indexOf('.') > -1 && 0 === t.indexOf(e) && (0, n.Gg)(t, r))
              return !0;
          }
        return !1;
      }
      function a(t, e, r, n, s) {
        let a = (0, i.HS)(e[r], s);
        (function (t) {
          return t && (!t.read || (!1 !== t.read.enabled && !t.read.source));
        })(a) && (t[r] = !0);
        for (const l of Object.getOwnPropertyNames(e))
          (a = (0, i.HS)(e[l], s)), o(a, r, n) && (t[l] = !0);
      }
      function l(t, e, r, n) {
        const s = r.metadatas,
          o = (0, i.hk)(s[e], 'any', n),
          a = o && o.default;
        if (void 0 === a) return;
        const l = 'function' == typeof a ? a.call(t, e, n) : a;
        void 0 !== l && r.set(e, l);
      }
      const c = { origin: 'service' };
      function u(t, e, r = c) {
        if (!e || 'object' != typeof e) return;
        const o = (0, s.vw)(t),
          u = o.metadatas,
          h = {};
        for (const t of Object.getOwnPropertyNames(e)) a(h, u, t, e, r);
        o.setDefaultOrigin(r.origin);
        for (const s of Object.getOwnPropertyNames(h)) {
          const a = (0, i.HS)(u[s], r).read,
            l = a && a.source;
          let c;
          (c = l && 'string' == typeof l ? (0, n.$z)(e, l) : e[s]),
            a && a.reader && (c = a.reader.call(t, c, e, r)),
            void 0 !== c && o.set(s, c);
        }
        if (!r || !r.ignoreDefaults) {
          o.setDefaultOrigin('defaults');
          for (const e of Object.getOwnPropertyNames(u)) h[e] || l(t, e, o, r);
        }
        o.setDefaultOrigin('user');
      }
      function h(t, e, r, n = c) {
        var s;
        const i = { ...n, messages: [] };
        r(i),
          null == (s = i.messages) ||
            s.forEach((e) => {
              'warning' !== e.type || t.loaded
                ? n && n.messages && n.messages.push(e)
                : t.loadWarnings.push(e);
            });
      }
    },
    37697: (t, e, r) => {
      r.d(e, { t: () => a });
      var n = r(20102),
        s = r(80442),
        i = r(92604),
        o = r(67723);
      function a(t, e, r) {
        if (t && e)
          if ('object' == typeof e)
            for (const r of Object.getOwnPropertyNames(e)) a(t, r, e[r]);
          else {
            if (-1 !== e.indexOf('.')) {
              const n = e.split('.'),
                s = n.splice(n.length - 1, 1)[0];
              return void a((0, o.U2)(t, n), s, r);
            }
            const i = t.__accessor__;
            null != i &&
              (function (t, e) {
                if (
                  (0, s.Z)('esri-unknown-property-errors') &&
                  !(function (t, e) {
                    return null != e.metadatas[t];
                  })(t, e)
                )
                  throw new n.Z(
                    'set:unknown-property',
                    (function (t, e) {
                      return (
                        "setting unknown property '" +
                        t +
                        "' on instance of " +
                        e.host.declaredClass
                      );
                    })(t, e),
                  );
              })(e, i),
              (t[e] = r);
          }
      }
      i.Z.getLogger('esri.core.accessorSupport.set');
    },
    58971: (t, e, r) => {
      r.d(e, {
        mS: () => v,
        LJ: () => f,
        gb: () => d,
        it: () => c,
        GF: () => m,
      }),
        r(80442);
      var n = r(92604),
        s = r(1153),
        i = r(44550);
      let o,
        a = [];
      const l = n.Z.getLogger('esri.core.Accessor');
      function c(t) {
        void 0 !== o && o.onObservableAccessed(t);
      }
      let u = !1,
        h = !1;
      function f(t, e, r) {
        if (u) return p(t, e, r);
        g(t);
        const n = e.call(r);
        return y(), n;
      }
      function d(t, e) {
        return f(void 0, t, e);
      }
      function p(t, e, r) {
        const n = u;
        (u = !0), g(t);
        let s = null;
        try {
          s = e.call(r);
        } catch (t) {
          h && l.error(t);
        }
        return y(), (u = n), s;
      }
      function g(t) {
        (o = t), a.push(t);
      }
      function y() {
        const t = a.pop();
        (o = a.length > 0 ? a[a.length - 1] : void 0),
          void 0 !== t && t.onTrackingEnd();
      }
      function v(t, e) {
        if (e.flags & i.v.DepTrackingInitialized) return;
        const r = h;
        (h = !1),
          e.flags & i.v.AutoTracked ? p(e, e.metadata.get, t) : m(t, e),
          (h = r);
      }
      const _ = [];
      function m(t, e) {
        e.flags & i.v.ExplicitlyTracking ||
          ((e.flags |= i.v.ExplicitlyTracking),
          p(e, () => {
            const r = e.metadata.dependsOn || _;
            for (const e of r)
              if ('string' == typeof e && -1 === e.indexOf('.')) w(t, e, !1);
              else {
                const r = (0, s.NI)(e);
                for (
                  let e = 0, n = t;
                  e < r.length && null != n && 'object' == typeof n;
                  ++e
                )
                  n = w(n, r[e], e !== r.length - 1);
              }
          }),
          (e.flags &= ~i.v.ExplicitlyTracking));
      }
      function w(t, e, r) {
        const n = '?' === e[e.length - 1] ? e.slice(0, -1) : e;
        if (null != t.getItemAt || Array.isArray(t)) {
          const e = parseInt(n, 10);
          if (!isNaN(e)) return Array.isArray(t) ? t[e] : t.getItemAt(e);
        }
        const i = (0, s.vw)(t),
          o = null == i ? void 0 : i.properties.get(n);
        return o && (c(o), v(t, o)), r ? t[n] : void 0;
      }
    },
    87538: (t, e, r) => {
      r.d(e, { EH: () => c, U5: () => a, Xz: () => l });
      var n = r(58971),
        s = r(38805);
      let i = !1;
      const o = [];
      function a(t, e) {
        let r = new s.M(function s() {
            if (!r || a) return;
            if (i) return void u(s);
            const l = o;
            r.clear(),
              (i = !0),
              (a = !0),
              (o = (0, n.LJ)(r, t)),
              (a = !1),
              (i = !1),
              e(o, l),
              h();
          }),
          o = null,
          a = !1;
        return (
          (a = !0),
          (o = (0, n.LJ)(r, t)),
          (a = !1),
          {
            remove: function () {
              r && (r.destroy(), (r = null), (o = null));
            },
          }
        );
      }
      function l(t, e) {
        let r = new s.M(function () {
            e(i, o);
          }),
          i = null;
        function o() {
          return r ? (r.clear(), (i = (0, n.LJ)(r, t)), i) : null;
        }
        return (
          o(),
          {
            remove: function () {
              r && (r.destroy(), (r = null)), (i = null);
            },
          }
        );
      }
      function c(t) {
        let e = new s.M(function s() {
            e &&
              !r &&
              (i
                ? u(s)
                : (e.clear(),
                  (i = !0),
                  (r = !0),
                  (0, n.LJ)(e, t),
                  (r = !1),
                  (i = !1),
                  h()));
          }),
          r = !1;
        return (
          (r = !0),
          (0, n.LJ)(e, t),
          (r = !1),
          {
            remove: function () {
              e && (e.destroy(), (e = null));
            },
          }
        );
      }
      function u(t) {
        o.includes(t) || o.unshift(t);
      }
      function h() {
        for (; o.length; ) o.pop()();
      }
    },
    44550: (t, e, r) => {
      var n;
      r.d(e, { v: () => n }),
        (function (t) {
          (t[(t.Dirty = 1)] = 'Dirty'),
            (t[(t.Overriden = 2)] = 'Overriden'),
            (t[(t.Computing = 4)] = 'Computing'),
            (t[(t.NonNullable = 8)] = 'NonNullable'),
            (t[(t.HasDefaultValue = 16)] = 'HasDefaultValue'),
            (t[(t.DepTrackingInitialized = 32)] = 'DepTrackingInitialized'),
            (t[(t.AutoTracked = 64)] = 'AutoTracked'),
            (t[(t.ExplicitlyTracking = 128)] = 'ExplicitlyTracking');
        })(n || (n = {}));
    },
    39020: (t, e, r) => {
      r.d(e, { X: () => s });
      var n = r(67676);
      class s {
        constructor(t, e) {
          (this._observers = t), (this._observer = e);
        }
        remove() {
          (0, n.Od)(this._observers, this._observer);
        }
      }
    },
    38805: (t, e, r) => {
      r.d(e, { M: () => n });
      class n {
        constructor(t) {
          (this._notify = t),
            (this._accessed = []),
            (this._handles = []),
            (this._invalidCount = 0);
        }
        destroy() {
          (this._accessed.length = 0), this.clear();
        }
        onInvalidated() {
          this._invalidCount++;
        }
        onCommitted() {
          const t = this._invalidCount;
          if (1 === t) return (this._invalidCount = 0), void this._notify();
          this._invalidCount = t > 0 ? t - 1 : 0;
        }
        onObservableAccessed(t) {
          this._accessed.includes(t) || this._accessed.push(t);
        }
        onTrackingEnd() {
          const t = this._handles,
            e = this._accessed;
          for (let r = 0; r < e.length; ++r) t.push(e[r].observe(this));
          e.length = 0;
        }
        clear() {
          const t = this._handles;
          for (let e = 0; e < t.length; ++e) t[e].remove();
          t.length = 0;
        }
      }
    },
    1153: (t, e, r) => {
      r.d(e, {
        vw: () => o,
        b6: () => a,
        TS: () => l,
        IH: () => d,
        Qc: () => f,
        NI: () => u,
      });
      var n = r(50758),
        s = r(22974),
        i = r(70586);
      function o(t) {
        return t
          ? t.__accessor__
            ? t.__accessor__
            : t.propertyInvalidated
            ? t
            : null
          : null;
      }
      function a(t, e) {
        return null != t && t.metadatas && null != t.metadatas[e];
      }
      function l(t, e, r) {
        return c(t, e, r ? { policy: r, path: '' } : null);
      }
      function c(t, e, r) {
        return e
          ? Object.keys(e).reduce(function (t, n) {
              let o = null,
                a = 'merge';
              if (
                (r && ((o = r.path ? `${r.path}.${n}` : n), (a = r.policy(o))),
                'replace' === a)
              )
                return (t[n] = e[n]), t;
              if (void 0 === t[n]) return (t[n] = (0, s.d9)(e[n])), t;
              let l = t[n],
                u = e[n];
              if (l === u) return t;
              if (Array.isArray(u) || Array.isArray(t))
                (l = l
                  ? Array.isArray(l)
                    ? (t[n] = l.concat())
                    : (t[n] = [l])
                  : (t[n] = [])),
                  u &&
                    (Array.isArray(u) || (u = [u]),
                    u.forEach((t) => {
                      -1 === l.indexOf(t) && l.push(t);
                    }));
              else if (u && 'object' == typeof u)
                if (r) {
                  const e = r.path;
                  (r.path = (0, i.j0)(o)), (t[n] = c(l, u, r)), (r.path = e);
                } else t[n] = c(l, u, null);
              else (t.hasOwnProperty(n) && !e.hasOwnProperty(n)) || (t[n] = u);
              return t;
            }, t || {})
          : t;
      }
      function u(t) {
        return Array.isArray(t) ? t : t.split('.');
      }
      function h(t) {
        return t.indexOf(',') > -1
          ? t.split(',').map((t) => t.trim())
          : [t.trim()];
      }
      function f(t, e, r, s) {
        const i = (function (t) {
          if (Array.isArray(t)) {
            const e = [];
            for (const r of t) e.push(...h(r));
            return e;
          }
          return h(t);
        })(e);
        if (1 !== i.length) {
          const e = i.map((e) => s(t, e, r));
          return (0, n.AL)(e);
        }
        return s(t, i[0], r);
      }
      function d(t) {
        let e = !1;
        return () => {
          e || ((e = !0), t());
        };
      }
    },
    26258: (t, e, r) => {
      r.d(e, { BT: () => b, YP: () => T, aQ: () => N });
      var n = r(3894),
        s = r(22974),
        i = r(70586),
        o = r(71143);
      class a extends o.Z {
        constructor() {
          super(...arguments), (this._set = new Set());
        }
        destroy() {
          super.destroy(), (this._set = (0, i.Bd)(this._set));
        }
        acquire(...t) {
          const e = super.acquire(...t);
          return this._set.delete(e), e;
        }
        release(t) {
          t && !this._set.has(t) && (super.release(t), this._set.add(t));
        }
        _dispose(t) {
          this._set.delete(t), super._dispose(t);
        }
      }
      var l,
        c,
        u = r(1654),
        h = r(99001),
        f = r(67723),
        d = r(87538),
        p = r(1153);
      ((c = l || (l = {}))[(c.Untracked = 0)] = 'Untracked'),
        (c[(c.Tracked = 1)] = 'Tracked');
      class g {
        constructor() {
          (this.uid = (0, h.D)()),
            (this.removed = !1),
            (this.type = null),
            (this.oldValue = null),
            (this.callback = null),
            (this.getValue = null),
            (this.target = null),
            (this.path = null),
            (this.equals = null);
        }
        static acquireUntracked(t, e, r, n, i) {
          return this.pool.acquire(l.Untracked, t, e, r, n, i, s.fS);
        }
        static acquireTracked(t, e, r, n) {
          return this.pool.acquire(l.Tracked, t, e, r, null, null, n);
        }
        notify(t, e) {
          this.type === l.Untracked
            ? this.callback.call(this.target, t, e, this.path, this.target)
            : this.callback.call(null, t, e);
        }
        acquire(t, e, r, n, s, i, o) {
          (this.uid = (0, h.D)()),
            (this.removed = !1),
            (this.type = t),
            (this.oldValue = e),
            (this.callback = r),
            (this.getValue = n),
            (this.target = s),
            (this.path = i),
            (this.equals = o);
        }
        release() {
          (this.target =
            this.path =
            this.oldValue =
            this.callback =
            this.getValue =
              null),
            (this.uid = (0, h.D)()),
            (this.removed = !0);
        }
      }
      g.pool = new a(g);
      const y = new n.Z(),
        v = new Set();
      let _;
      function m(t) {
        v.delete(t), v.add(t), _ || (_ = (0, u.Os)(O));
      }
      function w(t) {
        if (t.removed) return;
        const e = t.oldValue,
          r = t.getValue();
        t.equals(e, r) || ((t.oldValue = r), t.notify(r, e));
      }
      function b(t) {
        for (const e of v.values()) e.target === t && (e.removed = !0);
      }
      function O() {
        let t = 10;
        for (; _ && t--; ) {
          _ = null;
          const t = A(),
            e = y.acquire();
          for (const r of t) {
            const t = r.uid;
            w(r), t === r.uid && r.removed && e.push(r);
          }
          for (const t of v) t.removed && (e.push(t), v.delete(t));
          for (const t of e) g.pool.release(t);
          y.release(e), y.release(t), S.forEach((t) => t());
        }
      }
      function A() {
        const t = y.acquire();
        t.length = v.size;
        let e = 0;
        for (const r of v) (t[e] = r), ++e;
        return v.clear(), t;
      }
      const S = new Set();
      function T(t, e, r, n = !1) {
        return !t.__accessor__ || t.__accessor__.destroyed
          ? { remove() {} }
          : n
          ? (function (t, e, r) {
              const n = (0, p.Qc)(t, e, r, (t, e, r) => {
                let i = !1;
                return (0, d.U5)(
                  () => (0, f.$z)(t, e),
                  (o, a) => {
                    t.__accessor__.destroyed
                      ? n.remove()
                      : i ||
                        ((i = !0),
                        (0, s.fS)(a, o) || r.call(t, o, a, e, t),
                        (i = !1));
                  },
                );
              });
              return n;
            })(t, e, r)
          : (function (t, e, r) {
              let n = (0, p.Qc)(t, e, r, (t, e, r) => {
                let s,
                  i,
                  o = (0, d.Xz)(
                    () => (0, f.$z)(t, e),
                    (o, a) => {
                      t.__accessor__.destroyed || (s && s.uid !== i)
                        ? n.remove()
                        : (s ||
                            ((s = g.acquireUntracked(o, r, a, t, e)),
                            (i = s.uid)),
                          m(s));
                    },
                  );
                return {
                  remove: (0, p.IH)(() => {
                    o.remove(),
                      s &&
                        (s.uid !== i || s.removed || ((s.removed = !0), m(s)),
                        (s = null)),
                      (n = o = null);
                  }),
                };
              });
              return n;
            })(t, e, r);
      }
      function N(t, e, r = !1, n = s.fS) {
        return r
          ? (function (t, e, r) {
              let n = !1;
              return (0, d.U5)(t, (t, s) => {
                n || ((n = !0), r(s, t) || e(t, s), (n = !1));
              });
            })(t, e, n)
          : (function (t, e, r) {
              let n,
                s,
                i = (0, d.Xz)(t, (t, o) => {
                  n && n.uid !== s
                    ? i.remove()
                    : (n || ((n = g.acquireTracked(t, e, o, r)), (s = n.uid)),
                      m(n));
                });
              return {
                remove: (0, p.IH)(() => {
                  i.remove(),
                    n &&
                      (n.uid !== s || n.removed || ((n.removed = !0), m(n)),
                      (n = null)),
                    (i = null);
                }),
              };
            })(t, e, n);
      }
    },
    76169: (t, e, r) => {
      r.d(e, { d: () => f, c: () => d });
      var n = r(67676),
        s = r(20102),
        i = r(92604),
        o = r(31263),
        a = r(1153),
        l = r(53906);
      const c = i.Z.getLogger('esri.core.accessorSupport.write');
      function u(t, e, r, n, s) {
        var i, o;
        const a = {};
        return (
          null == (i = e.write) ||
            null == (o = i.writer) ||
            o.call(t, n, a, r, s),
          a
        );
      }
      function h(t, e, r, i, a, l) {
        if (!i || !i.write) return !1;
        const u = t.get(r);
        if (!a && i.write.overridePolicy) {
          const e = i.write.overridePolicy.call(t, u, r, l);
          void 0 !== e && (a = e);
        }
        if ((a || (a = i.write), !a || !1 === a.enabled)) return !1;
        if (
          ((null === u && !a.allowNull && !a.writerEnsuresNonNull) ||
            void 0 === u) &&
          a.isRequired
        ) {
          const e = new s.Z(
            'web-document-write:property-required',
            `Missing value for required property '${r}' on '${t.declaredClass}'`,
            { propertyName: r, target: t },
          );
          return (
            e && l && l.messages
              ? l.messages.push(e)
              : e && !l && c.error(e.name, e.message),
            !1
          );
        }
        return !(
          void 0 === u ||
          (null === u && !a.allowNull && !a.writerEnsuresNonNull) ||
          ((!e.store.multipleOriginsSupported ||
            e.store.originOf(r) === o.s3.DEFAULTS) &&
            (function (t, e, r, s, i) {
              const o = s.default;
              if (void 0 === o) return !1;
              if (null != s.defaultEquals) return s.defaultEquals(i);
              if ('function' == typeof o) {
                if (Array.isArray(i)) {
                  const s = o.call(t, e, r);
                  return (0, n.fS)(s, i);
                }
                return !1;
              }
              return o === i;
            })(t, r, l, i, u)) ||
          (!a.ignoreOrigin &&
            l &&
            l.origin &&
            e.store.multipleOriginsSupported &&
            e.store.originOf(r) < (0, o.M9)(l.origin))
        );
      }
      function f(t, e, r, n) {
        const s = (0, a.vw)(t),
          i = s.metadatas,
          o = (0, l.Ah)(i[e], n);
        return !!o && h(t, s, e, o, r, n);
      }
      function d(t, e, r) {
        if (
          t &&
          'function' == typeof t.toJSON &&
          (!t.toJSON.isDefaultToJSON || !t.write)
        )
          return (0, a.TS)(e, t.toJSON());
        const n = (0, a.vw)(t),
          s = n.metadatas;
        for (const f in s) {
          const d = (0, l.Ah)(s[f], r);
          if (!h(t, n, f, d, void 0, r)) continue;
          const p = t.get(f),
            g = u(
              t,
              d,
              d.write && 'string' == typeof d.write.target ? d.write.target : f,
              p,
              r,
            );
          var i, c;
          Object.keys(g).length > 0 &&
            ((e = (0, a.TS)(e, g)),
            null != r &&
              null != (i = r.resources) &&
              null != (c = i.pendingOperations) &&
              c.length &&
              Promise.all(r.resources.pendingOperations).then(() =>
                (0, a.TS)(e, g),
              ),
            r &&
              r.writtenProperties &&
              r.writtenProperties.push({
                target: t,
                propName: f,
                oldOrigin: (0, o.Wm)(n.store.originOf(f)),
                newOrigin: r.origin,
              }));
        }
        return e;
      }
    },
    60235: (t, e, r) => {
      r.d(e, { x9: () => l, XV: () => o, Mr: () => a });
      var n = r(80442);
      const s = new Set();
      function i(t, e, r = !1) {
        (r && s.has(e)) || (r && s.add(e), t.warn(`🛑 DEPRECATED - ${e}`));
      }
      function o(t, e, r = {}) {
        if ((0, n.Z)('esri-deprecation-warnings')) {
          const { moduleName: n } = r;
          l(t, 'Function: ' + (n ? n + '::' : '') + e + '()', r);
        }
      }
      function a(t, e, r = {}) {
        if ((0, n.Z)('esri-deprecation-warnings')) {
          const { moduleName: n } = r;
          l(t, 'Property: ' + (n ? n + '::' : '') + e, r);
        }
      }
      function l(t, e, r = {}) {
        if ((0, n.Z)('esri-deprecation-warnings')) {
          const { replacement: n, version: s, see: o, warnOnce: a } = r;
          let l = e;
          n && (l += `\n\t🛠️ Replacement: ${n}`),
            s && (l += `\n\t⚙️ Version: ${s}`),
            o && (l += `\n\t🔗 See ${o} for more details.`),
            i(t, l, a);
        }
      }
    },
    50758: (t, e, r) => {
      r.d(e, { AL: () => s, kB: () => i });
      var n = r(70586);
      function s(t) {
        return i(() => t.forEach((t) => (0, n.pC)(t) && t.remove()));
      }
      function i(t) {
        return {
          remove: () => {
            t && (t(), (t = void 0));
          },
        };
      }
    },
    35454: (t, e, r) => {
      r.d(e, { X: () => s, w: () => i });
      var n = r(78286);
      class s {
        constructor(t, e = { ignoreUnknown: !1, useNumericKeys: !1 }) {
          (this.jsonToAPI = t),
            (this.options = e),
            (this.apiValues = []),
            (this.jsonValues = []),
            (this.apiToJSON = this._invertMap(t)),
            (this.apiValues = this._getKeysSorted(this.apiToJSON)),
            (this.jsonValues = this._getKeysSorted(this.jsonToAPI)),
            (this.read = (t) => this.fromJSON(t)),
            (this.write = (t, e, r) => {
              const s = this.toJSON(t);
              void 0 !== s && (0, n.RB)(r, s, e);
            }),
            (this.write.isJSONMapWriter = !0);
        }
        toJSON(t) {
          if (this.apiToJSON.hasOwnProperty(t)) {
            const e = this.apiToJSON[t];
            return this.options.useNumericKeys ? +e : e;
          }
          return this.options.ignoreUnknown ? void 0 : t;
        }
        fromJSON(t) {
          return this.jsonToAPI.hasOwnProperty(t)
            ? this.jsonToAPI[t]
            : this.options.ignoreUnknown
            ? void 0
            : t;
        }
        _invertMap(t) {
          const e = {};
          for (const r in t) e[t[r]] = r;
          return e;
        }
        _getKeysSorted(t) {
          const e = [];
          for (const r in t) e.push(r);
          return e.sort(), e;
        }
      }
      function i() {
        return function (t, e) {
          return new s(t, { ignoreUnknown: !0, ...e });
        };
      }
    },
    41213: (t, e, r) => {
      r.d(e, { Y: () => s });
      const n = [];
      function s(t) {
        n.push(t),
          1 === n.length &&
            queueMicrotask(() => {
              const t = n.slice();
              n.length = 0;
              for (const e of t) e();
            });
      }
    },
    1654: (t, e, r) => {
      r.d(e, { Os: () => y, MU: () => w });
      var n = r(70586),
        s = r(41213),
        i = r(54790),
        o = r(44553),
        a = r(95330),
        l = r(76882);
      class c {
        constructor(t) {
          (this.callback = t), (this.isActive = !0);
        }
        remove() {
          this.isActive = !1;
        }
      }
      let u = 0;
      const h = {
          time: (0, l.HA)(0),
          deltaTime: (0, l.HA)(0),
          elapsedFrameTime: (0, l.HA)(0),
          frameDuration: (0, l.HA)(0),
        },
        f = [
          'prepare',
          'preRender',
          'render',
          'postRender',
          'update',
          'finish',
        ],
        d = [],
        p = new o.Z(),
        g = {
          frameTasks: p,
          willDispatch: !1,
          clearFrameTasks: function (t = !1) {
            p.forAll((t) => {
              t.removed = !0;
            }),
              t && _();
          },
          dispatch: m,
          executeFrameTasks: function (t) {
            const e = (0, l.HA)(t - u);
            u = t;
            const r = 1e3 / 60,
              n = Math.max(0, e - r);
            for (let s = 0; s < f.length; s++) {
              const i = performance.now(),
                o = f[s];
              p.forAll((i) => {
                var a;
                i.paused ||
                  i.removed ||
                  (0 === s && i.ticks++,
                  i.phases[o] &&
                    ((h.time = t),
                    (h.deltaTime = 0 === i.ticks ? (0, l.HA)(0) : e),
                    (h.elapsedFrameTime = (0, l.HA)(performance.now() - t)),
                    (h.frameDuration = (0, l.HA)(r - n)),
                    null == (a = i.phases[o]) || a.call(i, h)));
              }),
                b[s].record(performance.now() - i);
            }
            _(), O.record(performance.now() - t);
          },
        };
      function y(t) {
        const e = new c(t);
        return (
          d.push(e), g.willDispatch || ((g.willDispatch = !0), (0, s.Y)(m)), e
        );
      }
      const v = new o.Z();
      function _() {
        p.forAll((t) => {
          t.removed && v.push(t);
        }),
          p.removeUnorderedMany(v.data, v.length),
          v.clear();
      }
      function m() {
        for (; d.length; ) {
          const t = (0, n.j0)(d.shift());
          t.isActive && t.callback();
        }
        g.willDispatch = !1;
      }
      function w(t = 1, e) {
        const r = (0, a.hh)(),
          n = () => {
            (0, a.Hc)(e)
              ? r.reject((0, a.zE)())
              : 0 === t
              ? r()
              : (--t, (0, s.Y)(() => n()));
          };
        return n(), r.promise;
      }
      const b = f.map((t) => new i.Z(t)),
        O = new i.Z('total');
    },
    76882: (t, e, r) => {
      function n(t) {
        return t;
      }
      r.d(e, { HA: () => n });
    },
    99001: (t, e, r) => {
      r.d(e, { D: () => s });
      let n = 0;
      function s() {
        return ++n;
      }
    },
  },
]);
