'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [9870],
  {
    80539: (e, t, s) => {
      s.d(t, { Z: () => L });
      var i,
        n = s(43697),
        r = s(3894),
        h = s(32448),
        o = s(22974),
        l = s(70586),
        a = s(71143);
      !(function (e) {
        (e[(e.ADD = 1)] = 'ADD'),
          (e[(e.REMOVE = 2)] = 'REMOVE'),
          (e[(e.MOVE = 4)] = 'MOVE');
      })(i || (i = {}));
      var c,
        u = s(1654),
        f = s(5600),
        _ = s(75215),
        m = s(52421),
        d = s(52011),
        p = s(58971),
        g = s(39020);
      class v {
        constructor() {
          this._observers = [];
        }
        observe(e) {
          return (
            this._observers.includes(e) || this._observers.push(e),
            new g.X(this._observers, e)
          );
        }
        notify() {
          const e = this._observers.slice();
          for (let t = 0; t < e.length; ++t) {
            const s = e[t];
            s.onInvalidated(), s.onCommitted();
          }
        }
      }
      const b = new a.Z(
          class {
            constructor() {
              (this.target = null),
                (this.cancellable = !1),
                (this.defaultPrevented = !1),
                (this.item = void 0),
                (this.type = void 0);
            }
            preventDefault() {
              this.cancellable && (this.defaultPrevented = !0);
            }
            reset(e) {
              (this.defaultPrevented = !1), (this.item = e);
            }
          },
          void 0,
          (e) => {
            (e.item = null),
              (e.target = null),
              (e.defaultPrevented = !1),
              (e.cancellable = !1);
          },
        ),
        y = () => {};
      function E(e) {
        return e
          ? e instanceof O
            ? e.toArray()
            : e.length
            ? Array.prototype.slice.apply(e)
            : []
          : [];
      }
      function M(e) {
        if (e && e.length) return e[0];
      }
      function A(e, t, s, i) {
        const n = Math.min(e.length - s, t.length - i);
        let r = 0;
        for (; r < n && e[s + r] === t[i + r]; ) r++;
        return r;
      }
      function x(e, t, s, i) {
        t &&
          t.forEach((t, n, r) => {
            e.push(t), x(e, s.call(i, t, n, r), s, i);
          });
      }
      const z = new Set(),
        C = new Set(),
        S = new Set(),
        R = new Map();
      let w = 0,
        O = (c = class extends h.Z.EventedAccessor {
          constructor(e) {
            super(e),
              (this._chgListeners = []),
              (this._notifications = null),
              (this._timer = null),
              (this._observable = new v()),
              (this.length = 0),
              (this._items = []),
              Object.defineProperty(this, 'uid', { value: w++ });
          }
          static isCollection(e) {
            return null != e && e instanceof c;
          }
          normalizeCtorArgs(e) {
            return e
              ? Array.isArray(e) || e instanceof c
                ? { items: e }
                : e
              : {};
          }
          destroy() {
            this.removeAll();
          }
          *[Symbol.iterator]() {
            yield* this.items;
          }
          get items() {
            return (0, p.it)(this._observable), this._items;
          }
          set items(e) {
            this._emitBeforeChanges(i.ADD) ||
              (this._splice(0, this.length, E(e)),
              this._emitAfterChanges(i.ADD));
          }
          hasEventListener(e) {
            return 'change' === e
              ? this._chgListeners.length > 0
              : this._emitter.hasEventListener(e);
          }
          on(e, t) {
            if ('change' === e) {
              const e = this._chgListeners,
                s = { removed: !1, callback: t };
              return (
                e.push(s),
                this._notifications &&
                  this._notifications.push({
                    listeners: e.slice(),
                    items: this._items.slice(),
                    changes: [],
                  }),
                {
                  remove() {
                    (this.remove = y),
                      (s.removed = !0),
                      e.splice(e.indexOf(s), 1);
                  },
                }
              );
            }
            return this._emitter.on(e, t);
          }
          once(e, t) {
            const s = this.on(e, t);
            return {
              remove() {
                s.remove();
              },
            };
          }
          add(e, t) {
            if (((0, p.it)(this._observable), this._emitBeforeChanges(i.ADD)))
              return this;
            const s = this.getNextIndex(null != t ? t : null);
            return this._splice(s, 0, [e]), this._emitAfterChanges(i.ADD), this;
          }
          addMany(e, t = this._items.length) {
            if (((0, p.it)(this._observable), !e || !e.length)) return this;
            if (this._emitBeforeChanges(i.ADD)) return this;
            const s = this.getNextIndex(t);
            return (
              this._splice(s, 0, E(e)), this._emitAfterChanges(i.ADD), this
            );
          }
          at(e) {
            if (
              ((0, p.it)(this._observable),
              (e = Math.trunc(e) || 0) < 0 && (e += this.length),
              !(e < 0 || e >= this.length))
            )
              return this._items[e];
          }
          removeAll() {
            if (
              ((0, p.it)(this._observable),
              !this.length || this._emitBeforeChanges(i.REMOVE))
            )
              return [];
            const e = this._splice(0, this.length) || [];
            return this._emitAfterChanges(i.REMOVE), e;
          }
          clone() {
            return (
              (0, p.it)(this._observable),
              this._createNewInstance({ items: this._items.map(o.d9) })
            );
          }
          concat(...e) {
            (0, p.it)(this._observable);
            const t = e.map(E);
            return this._createNewInstance({ items: this._items.concat(...t) });
          }
          drain(e, t) {
            if (
              ((0, p.it)(this._observable),
              !this.length || this._emitBeforeChanges(i.REMOVE))
            )
              return;
            const s = (0, l.j0)(this._splice(0, this.length)),
              n = s.length;
            for (let i = 0; i < n; i++) e.call(t, s[i], i, s);
            this._emitAfterChanges(i.REMOVE);
          }
          every(e, t) {
            return (0, p.it)(this._observable), this._items.every(e, t);
          }
          filter(e, t) {
            let s;
            return (
              (0, p.it)(this._observable),
              (s =
                2 === arguments.length
                  ? this._items.filter(e, t)
                  : this._items.filter(e)),
              this._createNewInstance({ items: s })
            );
          }
          find(e, t) {
            return (0, p.it)(this._observable), this._items.find(e, t);
          }
          findIndex(e, t) {
            return (0, p.it)(this._observable), this._items.findIndex(e, t);
          }
          flatten(e, t) {
            (0, p.it)(this._observable);
            const s = [];
            return x(s, this, e, t), new c(s);
          }
          forEach(e, t) {
            return (0, p.it)(this._observable), this._items.forEach(e, t);
          }
          getItemAt(e) {
            return (0, p.it)(this._observable), this._items[e];
          }
          getNextIndex(e) {
            (0, p.it)(this._observable);
            const t = this.length;
            return (e = null == e ? t : e) < 0 ? (e = 0) : e > t && (e = t), e;
          }
          includes(e, t = 0) {
            return (0, p.it)(this._observable), this._items.includes(e, t);
          }
          indexOf(e, t = 0) {
            return (0, p.it)(this._observable), this._items.indexOf(e, t);
          }
          join(e = ',') {
            return (0, p.it)(this._observable), this._items.join(e);
          }
          lastIndexOf(e, t = this.length - 1) {
            return (0, p.it)(this._observable), this._items.lastIndexOf(e, t);
          }
          map(e, t) {
            (0, p.it)(this._observable);
            const s = this._items.map(e, t);
            return new c({ items: s });
          }
          reorder(e, t = this.length - 1) {
            (0, p.it)(this._observable);
            const s = this.indexOf(e);
            if (-1 !== s) {
              if (
                (t < 0 ? (t = 0) : t >= this.length && (t = this.length - 1),
                s !== t)
              ) {
                if (this._emitBeforeChanges(i.MOVE)) return e;
                this._splice(s, 1),
                  this._splice(t, 0, [e]),
                  this._emitAfterChanges(i.MOVE);
              }
              return e;
            }
          }
          pop() {
            if (
              ((0, p.it)(this._observable),
              !this.length || this._emitBeforeChanges(i.REMOVE))
            )
              return;
            const e = M(this._splice(this.length - 1, 1));
            return this._emitAfterChanges(i.REMOVE), e;
          }
          push(...e) {
            return (
              (0, p.it)(this._observable),
              this._emitBeforeChanges(i.ADD) ||
                (this._splice(this.length, 0, e),
                this._emitAfterChanges(i.ADD)),
              this.length
            );
          }
          reduce(e, t) {
            (0, p.it)(this._observable);
            const s = this._items;
            return 2 === arguments.length ? s.reduce(e, t) : s.reduce(e);
          }
          reduceRight(e, t) {
            (0, p.it)(this._observable);
            const s = this._items;
            return 2 === arguments.length
              ? s.reduceRight(e, t)
              : s.reduceRight(e);
          }
          remove(e) {
            return (0, p.it)(this._observable), this.removeAt(this.indexOf(e));
          }
          removeAt(e) {
            if (
              ((0, p.it)(this._observable),
              e < 0 || e >= this.length || this._emitBeforeChanges(i.REMOVE))
            )
              return;
            const t = M(this._splice(e, 1));
            return this._emitAfterChanges(i.REMOVE), t;
          }
          removeMany(e) {
            if (
              ((0, p.it)(this._observable),
              !e || !e.length || this._emitBeforeChanges(i.REMOVE))
            )
              return [];
            const t = e instanceof c ? e.toArray() : e,
              s = this._items,
              n = [],
              r = t.length;
            for (let e = 0; e < r; e++) {
              const i = t[e],
                r = s.indexOf(i);
              if (r > -1) {
                const i = 1 + A(t, s, e + 1, r + 1),
                  h = this._splice(r, i);
                h && h.length > 0 && n.push.apply(n, h), (e += i - 1);
              }
            }
            return this._emitAfterChanges(i.REMOVE), n;
          }
          reverse() {
            if (((0, p.it)(this._observable), this._emitBeforeChanges(i.MOVE)))
              return this;
            const e = this._splice(0, this.length);
            return (
              e && (e.reverse(), this._splice(0, 0, e)),
              this._emitAfterChanges(i.MOVE),
              this
            );
          }
          shift() {
            if (
              ((0, p.it)(this._observable),
              !this.length || this._emitBeforeChanges(i.REMOVE))
            )
              return;
            const e = M(this._splice(0, 1));
            return this._emitAfterChanges(i.REMOVE), e;
          }
          slice(e = 0, t = this.length) {
            return (
              (0, p.it)(this._observable),
              this._createNewInstance({ items: this._items.slice(e, t) })
            );
          }
          some(e, t) {
            return (0, p.it)(this._observable), this._items.some(e, t);
          }
          sort(e) {
            if (
              ((0, p.it)(this._observable),
              !this.length || this._emitBeforeChanges(i.MOVE))
            )
              return this;
            const t = (0, l.j0)(this._splice(0, this.length));
            return (
              arguments.length ? t.sort(e) : t.sort(),
              this._splice(0, 0, t),
              this._emitAfterChanges(i.MOVE),
              this
            );
          }
          splice(e, t, ...s) {
            (0, p.it)(this._observable);
            const n = (t ? i.REMOVE : 0) | (s.length ? i.ADD : 0);
            if (this._emitBeforeChanges(n)) return [];
            const r = this._splice(e, t, s) || [];
            return this._emitAfterChanges(n), r;
          }
          toArray() {
            return (0, p.it)(this._observable), this._items.slice();
          }
          toJSON() {
            return (0, p.it)(this._observable), this.toArray();
          }
          toLocaleString() {
            return (0, p.it)(this._observable), this._items.toLocaleString();
          }
          toString() {
            return (0, p.it)(this._observable), this._items.toString();
          }
          unshift(...e) {
            return (
              (0, p.it)(this._observable),
              !e.length ||
                this._emitBeforeChanges(i.ADD) ||
                (this._splice(0, 0, e), this._emitAfterChanges(i.ADD)),
              this.length
            );
          }
          _createNewInstance(e) {
            return new this.constructor(e);
          }
          _splice(e, t, s) {
            const i = this._items,
              n = this.itemType;
            let r, h;
            if (
              (!this._notifications &&
                this.hasEventListener('change') &&
                ((this._notifications = [
                  {
                    listeners: this._chgListeners.slice(),
                    items: this._items.slice(),
                    changes: [],
                  },
                ]),
                this._timer && this._timer.remove(),
                (this._timer = (0, u.Os)(() => this._dispatchChange()))),
              t)
            ) {
              if (
                ((h = i.splice(e, t)), this.hasEventListener('before-remove'))
              ) {
                const t = b.acquire();
                (t.target = this), (t.cancellable = !0);
                for (let s = 0, n = h.length; s < n; s++)
                  (r = h[s]),
                    t.reset(r),
                    this.emit('before-remove', t),
                    t.defaultPrevented &&
                      (h.splice(s, 1),
                      i.splice(e, 0, r),
                      (e += 1),
                      (s -= 1),
                      (n -= 1));
                b.release(t);
              }
              if (
                ((this.length = this._items.length),
                this.hasEventListener('after-remove'))
              ) {
                const e = b.acquire();
                (e.target = this), (e.cancellable = !1);
                const t = h.length;
                for (let s = 0; s < t; s++)
                  e.reset(h[s]), this.emit('after-remove', e);
                b.release(e);
              }
            }
            if (s && s.length) {
              if (n) {
                const e = [];
                for (const t of s) {
                  const s = n.ensureType(t);
                  (null == s && null != t) || e.push(s);
                }
                s = e;
              }
              const t = this.hasEventListener('before-add'),
                r = this.hasEventListener('after-add'),
                h = e === this.length;
              if (t || r) {
                const n = b.acquire();
                (n.target = this), (n.cancellable = !0);
                const o = b.acquire();
                (o.target = this), (o.cancellable = !1);
                for (const l of s)
                  t
                    ? (n.reset(l),
                      this.emit('before-add', n),
                      n.defaultPrevented ||
                        (h ? i.push(l) : i.splice(e++, 0, l),
                        this._set('length', i.length),
                        r && (o.reset(l), this.emit('after-add', o))))
                    : (h ? i.push(l) : i.splice(e++, 0, l),
                      this._set('length', i.length),
                      o.reset(l),
                      this.emit('after-add', o));
                b.release(o), b.release(n);
              } else {
                if (h) for (const e of s) i.push(e);
                else i.splice(e, 0, ...s);
                this._set('length', i.length);
              }
            }
            return (
              ((s && s.length) || (h && h.length)) &&
                this._notifyChangeEvent(s, h),
              h
            );
          }
          _emitBeforeChanges(e) {
            let t = !1;
            if (this.hasEventListener('before-changes')) {
              const s = b.acquire();
              (s.target = this),
                (s.cancellable = !0),
                (s.type = e),
                this.emit('before-changes', s),
                (t = s.defaultPrevented),
                b.release(s);
            }
            return t;
          }
          _emitAfterChanges(e) {
            if (this.hasEventListener('after-changes')) {
              const t = b.acquire();
              (t.target = this),
                (t.cancellable = !1),
                (t.type = e),
                this.emit('after-changes', t),
                b.release(t);
            }
            this._observable.notify();
          }
          _notifyChangeEvent(e, t) {
            this.hasEventListener('change') &&
              this._notifications &&
              this._notifications[this._notifications.length - 1].changes.push({
                added: e,
                removed: t,
              });
          }
          _dispatchChange() {
            if (
              (this._timer && (this._timer.remove(), (this._timer = null)),
              !this._notifications)
            )
              return;
            const e = this._notifications;
            this._notifications = null;
            for (const t of e) {
              const e = t.changes;
              z.clear(), C.clear(), S.clear();
              for (const { added: t, removed: s } of e) {
                if (t)
                  if (0 === S.size && 0 === C.size) for (const e of t) z.add(e);
                  else
                    for (const e of t)
                      C.has(e) ? (S.add(e), C.delete(e)) : S.has(e) || z.add(e);
                if (s)
                  if (0 === S.size && 0 === z.size) for (const e of s) C.add(e);
                  else
                    for (const e of s)
                      z.has(e) ? z.delete(e) : (S.delete(e), C.add(e));
              }
              const s = r.Z.acquire();
              z.forEach((e) => {
                s.push(e);
              });
              const i = r.Z.acquire();
              C.forEach((e) => {
                i.push(e);
              });
              const n = this._items,
                h = t.items,
                o = r.Z.acquire();
              if (
                (S.forEach((e) => {
                  h.indexOf(e) !== n.indexOf(e) && o.push(e);
                }),
                t.listeners && (s.length || i.length || o.length))
              ) {
                const e = { target: this, added: s, removed: i, moved: o },
                  n = t.listeners.length;
                for (let s = 0; s < n; s++) {
                  const i = t.listeners[s];
                  i.removed || i.callback.call(this, e);
                }
              }
              r.Z.release(s), r.Z.release(i), r.Z.release(o);
            }
            z.clear(), C.clear(), S.clear();
          }
        });
      (O.ofType = (e) => {
        if (!e) return c;
        if (R.has(e)) return R.get(e);
        let t = null;
        if ('function' == typeof e) t = e.prototype.declaredClass;
        else if (e.base) t = e.base.prototype.declaredClass;
        else
          for (const s in e.typeMap) {
            const i = e.typeMap[s].prototype.declaredClass;
            t ? (t += ` | ${i}`) : (t = i);
          }
        let s = class extends c {};
        return (
          (0, n._)(
            [
              (0, m.c)({
                Type: e,
                ensureType:
                  'function' == typeof e ? (0, _.se)(e) : (0, _.N7)(e),
              }),
            ],
            s.prototype,
            'itemType',
            void 0,
          ),
          (s = (0, n._)([(0, d.j)(`esri.core.Collection<${t}>`)], s)),
          R.set(e, s),
          s
        );
      }),
        (0, n._)([(0, f.Cb)()], O.prototype, 'length', void 0),
        (0, n._)([(0, f.Cb)()], O.prototype, 'items', null),
        (O = c = (0, n._)([(0, d.j)('esri.core.Collection')], O));
      const L = O;
    },
    32448: (e, t, s) => {
      s.d(t, { Z: () => l });
      var i = s(43697),
        n = s(15923),
        r = s(50758),
        h = s(52011);
      class o {
        constructor() {
          this._emitter = new o.EventEmitter(this);
        }
        emit(e, t) {
          return this._emitter.emit(e, t);
        }
        on(e, t) {
          return this._emitter.on(e, t);
        }
        once(e, t) {
          return this._emitter.once(e, t);
        }
        hasEventListener(e) {
          return this._emitter.hasEventListener(e);
        }
      }
      !(function (e) {
        class t {
          constructor(e = null) {
            (this.target = e), (this._listenersMap = null);
          }
          clear() {
            this._listenersMap && this._listenersMap.clear(),
              (this._listenersMap = null);
          }
          emit(e, t) {
            const s = this._listenersMap && this._listenersMap.get(e);
            if (!s) return !1;
            const i = this.target || this;
            return (
              [...s].forEach((e) => {
                e.call(i, t);
              }),
              s.length > 0
            );
          }
          on(e, t) {
            if (Array.isArray(e)) {
              const s = e.map((e) => this.on(e, t));
              return (0, r.AL)(s);
            }
            if (e.indexOf(',') > -1)
              throw new TypeError(
                'Evented.on() with a comma delimited string of event types is not supported',
              );
            this._listenersMap || (this._listenersMap = new Map());
            const s = this._listenersMap.get(e) || [];
            return (
              s.push(t),
              this._listenersMap.set(e, s),
              {
                remove: () => {
                  const s =
                      (this._listenersMap && this._listenersMap.get(e)) || [],
                    i = s.indexOf(t);
                  i >= 0 && s.splice(i, 1);
                },
              }
            );
          }
          once(e, t) {
            const s = this.on(e, (e) => {
              s.remove(), t.call(null, e);
            });
            return s;
          }
          hasEventListener(e) {
            const t = this._listenersMap && this._listenersMap.get(e);
            return null != t && t.length > 0;
          }
        }
        (e.EventEmitter = t),
          (e.EventedMixin = (e) => {
            let s = class extends e {
              constructor() {
                super(...arguments), (this._emitter = new t());
              }
              destroy() {
                this._emitter.clear();
              }
              emit(e, t) {
                return this._emitter.emit(e, t);
              }
              on(e, t) {
                return this._emitter.on(e, t);
              }
              once(e, t) {
                return this._emitter.once(e, t);
              }
              hasEventListener(e) {
                return this._emitter.hasEventListener(e);
              }
            };
            return (s = (0, i._)([(0, h.j)('esri.core.Evented')], s)), s;
          });
        let s = class extends n.Z {
          constructor() {
            super(...arguments), (this._emitter = new o.EventEmitter(this));
          }
          destroy() {
            this._emitter.clear();
          }
          emit(e, t) {
            return this._emitter.emit(e, t);
          }
          on(e, t) {
            return this._emitter.on(e, t);
          }
          once(e, t) {
            return this._emitter.once(e, t);
          }
          hasEventListener(e) {
            return this._emitter.hasEventListener(e);
          }
        };
        (s = (0, i._)([(0, h.j)('esri.core.Evented')], s)),
          (e.EventedAccessor = s);
      })(o || (o = {}));
      const l = o;
    },
    61247: (e, t, s) => {
      s.d(t, { Z: () => c });
      var i = s(43697),
        n = s(15923),
        r = s(80539),
        h = s(70586),
        o = s(5600),
        l = s(52011);
      let a = class extends n.Z {
        constructor(e) {
          super(e), (this._groups = new Map());
        }
        destroy() {
          this.removeAll();
        }
        get size() {
          let e = 0;
          return (
            this._groups.forEach((t) => {
              e += t.length;
            }),
            e
          );
        }
        add(e, t) {
          if (!this._isHandle(e) && !Array.isArray(e) && !r.Z.isCollection(e))
            return this;
          const s = this._getOrCreateGroup(t);
          return (
            Array.isArray(e) || r.Z.isCollection(e)
              ? e.forEach((e) => this._isHandle(e) && s.push(e))
              : s.push(e),
            this.notifyChange('size'),
            this
          );
        }
        forEach(e, t) {
          if ('function' == typeof e) this._groups.forEach((t) => t.forEach(e));
          else {
            const s = this._getGroup(e);
            s && t && s.forEach(t);
          }
        }
        has(e) {
          return this._groups.has(this._ensureGroupKey(e));
        }
        remove(e) {
          if (Array.isArray(e) || r.Z.isCollection(e))
            return e.forEach(this.remove, this), this;
          if (!this.has(e)) return this;
          const t = this._getGroup(e);
          for (let e = 0; e < t.length; e++) t[e].remove();
          return this._deleteGroup(e), this.notifyChange('size'), this;
        }
        removeAll() {
          return (
            this._groups.forEach((e) => {
              for (let t = 0; t < e.length; t++) e[t].remove();
            }),
            this._groups.clear(),
            this.notifyChange('size'),
            this
          );
        }
        _isHandle(e) {
          return e && !!e.remove;
        }
        _getOrCreateGroup(e) {
          if (this.has(e)) return this._getGroup(e);
          const t = [];
          return this._groups.set(this._ensureGroupKey(e), t), t;
        }
        _getGroup(e) {
          return (0, h.j0)(this._groups.get(this._ensureGroupKey(e)));
        }
        _deleteGroup(e) {
          return this._groups.delete(this._ensureGroupKey(e));
        }
        _ensureGroupKey(e) {
          return e || '_default_';
        }
      };
      (0, i._)([(0, o.Cb)({ readOnly: !0 })], a.prototype, 'size', null),
        (a = (0, i._)([(0, l.j)('esri.core.Handles')], a));
      const c = a;
    },
    69801: (e, t, s) => {
      s.d(t, { Xq: () => o, WJ: () => l });
      var i,
        n,
        r = s(70586),
        h = s(44553);
      ((n = i || (i = {}))[(n.ALL = 0)] = 'ALL'), (n[(n.SOME = 1)] = 'SOME');
      class o {
        constructor(e, t, s) {
          (this._namespace = e),
            (this._storage = t),
            (this._removeFunc = !1),
            (this._hit = 0),
            (this._miss = 0),
            this._storage.register(this),
            (this._namespace += ':'),
            s &&
              (this._storage.registerRemoveFunc(this._namespace, s),
              (this._removeFunc = !0));
        }
        destroy() {
          this._storage.clear(this._namespace),
            this._removeFunc &&
              this._storage.deregisterRemoveFunc(this._namespace),
            this._storage.deregister(this),
            (this._storage = null);
        }
        get namespace() {
          return this._namespace.slice(0, -1);
        }
        get hitRate() {
          return this._hit / (this._hit + this._miss);
        }
        get size() {
          return this._storage.size;
        }
        get maxSize() {
          return this._storage.maxSize;
        }
        resetHitRate() {
          this._hit = this._miss = 0;
        }
        put(e, t, s, i = 0) {
          this._storage.put(this._namespace + e, t, s, i);
        }
        get(e) {
          const t = this._storage.get(this._namespace + e);
          return void 0 === t ? ++this._miss : ++this._hit, t;
        }
        pop(e) {
          const t = this._storage.pop(this._namespace + e);
          return void 0 === t ? ++this._miss : ++this._hit, t;
        }
        updateSize(e, t, s) {
          this._storage.updateSize(this._namespace + e, t, s);
        }
        clear() {
          this._storage.clear(this._namespace);
        }
        clearAll() {
          this._storage.clearAll();
        }
        getStats() {
          return this._storage.getStats();
        }
        resetStats() {
          this._storage.resetStats();
        }
      }
      class l {
        constructor(e = 10485760) {
          (this._maxSize = e),
            (this._db = new Map()),
            (this._size = 0),
            (this._hit = 0),
            (this._miss = 0),
            (this._removeFuncs = new h.Z()),
            (this._users = new h.Z());
        }
        destroy() {
          this.clearAll(),
            this._removeFuncs.clear(),
            this._users.clear(),
            (this._db = null);
        }
        register(e) {
          this._users.push(e);
        }
        deregister(e) {
          this._users.removeUnordered(e);
        }
        registerRemoveFunc(e, t) {
          this._removeFuncs.push([e, t]);
        }
        deregisterRemoveFunc(e) {
          this._removeFuncs.filterInPlace((t) => t[0] !== e);
        }
        get size() {
          return this._size;
        }
        get maxSize() {
          return this._maxSize;
        }
        set maxSize(e) {
          (this._maxSize = Math.max(e, 0)), this._checkSizeLimit();
        }
        put(e, t, s, n) {
          const r = this._db.get(e);
          if (
            (r &&
              ((this._size -= r.size),
              this._db.delete(e),
              r.entry !== t && this._notifyRemove(e, r.entry, i.ALL)),
            s > this._maxSize)
          )
            return void this._notifyRemove(e, t, i.ALL);
          if (void 0 === t)
            return void console.warn('Refusing to cache undefined entry ');
          if (!s || s < 0)
            return void console.warn(
              'Refusing to cache entry with invalid size ' + s,
            );
          const h = 1 + Math.max(n, -3) - -3;
          this._db.set(e, { entry: t, size: s, lifetime: h, lives: h }),
            (this._size += s),
            this._checkSizeLimit();
        }
        updateSize(e, t, s) {
          const n = this._db.get(e);
          if (n && n.entry === t) {
            for (this._size -= n.size; s > this._maxSize; ) {
              const n = this._notifyRemove(e, t, i.SOME);
              if (!((0, r.pC)(n) && n > 0)) return void this._db.delete(e);
              s = n;
            }
            (n.size = s), (this._size += s), this._checkSizeLimit();
          }
        }
        pop(e) {
          const t = this._db.get(e);
          if (t)
            return (
              (this._size -= t.size), this._db.delete(e), ++this._hit, t.entry
            );
          ++this._miss;
        }
        get(e) {
          const t = this._db.get(e);
          if (void 0 !== t)
            return (
              this._db.delete(e),
              (t.lives = t.lifetime),
              this._db.set(e, t),
              ++this._hit,
              t.entry
            );
          ++this._miss;
        }
        getStats() {
          const e = {
              Size:
                Math.round(this._size / 1048576) +
                '/' +
                Math.round(this._maxSize / 1048576) +
                'MB',
              'Hit rate': Math.round(100 * this._getHitRate()) + '%',
              Entries: this._db.size.toString(),
            },
            t = {},
            s = new Array();
          this._db.forEach((e, i) => {
            const n = e.lifetime;
            (s[n] = (s[n] || 0) + e.size),
              this._users.forAll((s) => {
                const n = s.namespace;
                if (i.startsWith(n)) {
                  const s = t[n] || 0;
                  t[n] = s + e.size;
                }
              });
          });
          const i = {};
          this._users.forAll((e) => {
            const s = e.namespace;
            if (!isNaN(e.hitRate) && e.hitRate > 0) {
              const n = t[s] || 0;
              (t[s] = n), (i[s] = Math.round(100 * e.hitRate) + '%');
            } else i[s] = '0%';
          });
          const n = Object.keys(t);
          n.sort((e, s) => t[s] - t[e]),
            n.forEach(
              (s) => (e[s] = Math.round(t[s] / 2 ** 20) + 'MB / ' + i[s]),
            );
          for (let t = s.length - 1; t >= 0; --t) {
            const i = s[t];
            i &&
              (e['Priority ' + (t + -3 - 1)] =
                Math.round((i / this.size) * 100) + '%');
          }
          return e;
        }
        resetStats() {
          (this._hit = this._miss = 0),
            this._users.forAll((e) => e.resetHitRate());
        }
        clear(e) {
          this._db.forEach((t, s) => {
            s.startsWith(e) &&
              ((this._size -= t.size),
              this._db.delete(s),
              this._notifyRemove(s, t.entry, i.ALL));
          });
        }
        clearAll() {
          this._db.forEach((e, t) => this._notifyRemove(t, e.entry, i.ALL)),
            (this._size = 0),
            this._db.clear();
        }
        _getHitRate() {
          return this._hit / (this._hit + this._miss);
        }
        _notifyRemove(e, t, s) {
          let i;
          return (
            this._removeFuncs.some((n) => {
              if (e.startsWith(n[0])) {
                const e = n[1](t, s);
                return 'number' == typeof e && (i = e), !0;
              }
              return !1;
            }),
            i
          );
        }
        _checkSizeLimit() {
          if (!(this._size <= this._maxSize))
            for (const [e, t] of this._db) {
              if ((this._db.delete(e), t.lives <= 1)) {
                this._size -= t.size;
                const s = this._notifyRemove(e, t.entry, i.SOME);
                (0, r.pC)(s) &&
                  s > 0 &&
                  ((this._size += s),
                  (t.lives = t.lifetime),
                  (t.size = s),
                  this._db.set(e, t));
              } else --t.lives, this._db.set(e, t);
              if (this._size <= 0.9 * this.maxSize) return;
            }
        }
      }
    },
    52421: (e, t, s) => {
      function i(e) {
        return (t, s) => {
          t[s] = e;
        };
      }
      s.d(t, { c: () => i });
    },
    17445: (e, t, s) => {
      s.d(t, {
        nn: () => p,
        on: () => u,
        Z_: () => d,
        tX: () => g,
        YP: () => l,
        gx: () => a,
        N1: () => f,
      });
      var i = s(91460),
        n = s(50758),
        r = s(70586),
        h = s(95330),
        o = s(26258);
      function l(e, t, s = {}) {
        return c(e, t, s, _);
      }
      function a(e, t, s = {}) {
        return c(e, t, s, m);
      }
      function c(e, t, s = {}, i) {
        let n = null;
        const h = s.once
          ? (e, s) => {
              i(e) && ((0, r.hw)(n), t(e, s));
            }
          : (e, s) => {
              i(e) && t(e, s);
            };
        if (((n = (0, o.aQ)(e, h, s.sync, s.equals)), s.initial)) {
          const t = e();
          h(t, t);
        }
        return n;
      }
      function u(e, t, s, h = {}) {
        let o = null,
          a = null,
          c = null;
        function u() {
          o &&
            a &&
            (a.remove(),
            null == h.onListenerRemove || h.onListenerRemove(o),
            (o = null),
            (a = null));
        }
        function f(e) {
          h.once && h.once && (0, r.hw)(c), s(e);
        }
        const _ = l(
          e,
          (e, s) => {
            u(),
              (0, i.vT)(e) &&
                ((o = e),
                (a = (0, i.on)(e, t, f)),
                null == h.onListenerAdd || h.onListenerAdd(e));
          },
          { sync: h.sync, initial: !0 },
        );
        return (
          (c = (0, n.kB)(() => {
            _.remove(), u();
          })),
          c
        );
      }
      function f(e, t) {
        return (function (e, t, s) {
          if ((0, h.Hc)(s)) return Promise.reject((0, h.zE)());
          const i = e();
          if (null != t && t(i)) return Promise.resolve(i);
          let o = null;
          function l() {
            o = (0, r.hw)(o);
          }
          return new Promise((i, r) => {
            o = (0, n.AL)([
              (0, h.fu)(s, () => {
                l(), r((0, h.zE)());
              }),
              c(
                e,
                (e) => {
                  l(), i(e);
                },
                { sync: !1, once: !0 },
                null != t ? t : _,
              ),
            ]);
          });
        })(e, m, t);
      }
      function _(e) {
        return !0;
      }
      function m(e) {
        return !!e;
      }
      s(87538);
      const d = { sync: !0 },
        p = { initial: !0 },
        g = { sync: !0, initial: !0 };
    },
    60437: (e, t, s) => {
      s.d(t, {
        Gv: () => p,
        Ue: () => n,
        cS: () => f,
        fS: () => d,
        TC: () => h,
        pp: () => o,
        JR: () => _,
        al: () => r,
        t8: () => u,
        Tn: () => c,
        op: () => a,
        dp: () => l,
      });
      var i = s(70586);
      function n(e = g) {
        return [e[0], e[1], e[2], e[3], e[4], e[5]];
      }
      function r(e, t, s, i, r, h, o = n()) {
        return (
          (o[0] = e),
          (o[1] = t),
          (o[2] = s),
          (o[3] = i),
          (o[4] = r),
          (o[5] = h),
          o
        );
      }
      function h(e, t) {
        (e[0] = Math.min(e[0], t[0])),
          (e[1] = Math.min(e[1], t[1])),
          (e[2] = Math.min(e[2], t[2])),
          (e[3] = Math.max(e[3], t[3])),
          (e[4] = Math.max(e[4], t[4])),
          (e[5] = Math.max(e[5], t[5]));
      }
      function o(e, t) {
        (e[0] = Math.min(e[0], t[0])),
          (e[1] = Math.min(e[1], t[1])),
          (e[2] = Math.min(e[2], t[2])),
          (e[3] = Math.max(e[3], t[0])),
          (e[4] = Math.max(e[4], t[1])),
          (e[5] = Math.max(e[5], t[2]));
      }
      function l(e, t = [0, 0, 0]) {
        return (
          (t[0] = (function (e) {
            return e[0] >= e[3] ? 0 : e[3] - e[0];
          })(e)),
          (t[1] = (function (e) {
            return e[1] >= e[4] ? 0 : e[4] - e[1];
          })(e)),
          (t[2] = (function (e) {
            return e[2] >= e[5] ? 0 : e[5] - e[2];
          })(e)),
          t
        );
      }
      function a(e, t, s = e) {
        return (
          (s[0] = t[0]),
          (s[1] = t[1]),
          (s[2] = t[2]),
          s !== e && ((s[3] = e[3]), (s[4] = e[4]), (s[5] = e[5])),
          s
        );
      }
      function c(e, t, s = e) {
        return (
          (s[3] = t[0]),
          (s[4] = t[1]),
          (s[5] = t[2]),
          s !== e && ((s[0] = e[0]), (s[1] = e[1]), (s[2] = e[2])),
          e
        );
      }
      function u(e, t) {
        return (
          (e[0] = t[0]),
          (e[1] = t[1]),
          (e[2] = t[2]),
          (e[3] = t[3]),
          (e[4] = t[4]),
          (e[5] = t[5]),
          e
        );
      }
      function f(e) {
        return e ? u(e, p) : n(p);
      }
      function _(e, t) {
        return (
          (e[0] = t[0]),
          (e[1] = t[1]),
          (e[2] = Number.NEGATIVE_INFINITY),
          (e[3] = t[2]),
          (e[4] = t[3]),
          (e[5] = Number.POSITIVE_INFINITY),
          e
        );
      }
      function m(e) {
        return 6 === e.length;
      }
      function d(e, t, s) {
        if ((0, i.Wi)(e) || (0, i.Wi)(t)) return e === t;
        if (!m(e) || !m(t)) return !1;
        if (s) {
          for (let i = 0; i < e.length; i++) if (!s(e[i], t[i])) return !1;
        } else for (let s = 0; s < e.length; s++) if (e[s] !== t[s]) return !1;
        return !0;
      }
      s(6570), s(24470);
      const p = [1 / 0, 1 / 0, 1 / 0, -1 / 0, -1 / 0, -1 / 0],
        g = [0, 0, 0, 0, 0, 0];
      n();
    },
    82526: (e, t, s) => {
      s.d(t, { aX: () => C });
      var i = s(68773),
        n = s(20102),
        r = s(92604),
        h = s(70586),
        o = s(38913),
        l = s(58901),
        a = s(82971),
        c = s(33955);
      const u = {
        102100: {
          maxX: 20037508.342788905,
          minX: -20037508.342788905,
          plus180Line: new l.Z({
            paths: [
              [
                [20037508.342788905, -20037508.342788905],
                [20037508.342788905, 20037508.342788905],
              ],
            ],
            spatialReference: a.Z.WebMercator,
          }),
          minus180Line: new l.Z({
            paths: [
              [
                [-20037508.342788905, -20037508.342788905],
                [-20037508.342788905, 20037508.342788905],
              ],
            ],
            spatialReference: a.Z.WebMercator,
          }),
        },
        4326: {
          maxX: 180,
          minX: -180,
          plus180Line: new l.Z({
            paths: [
              [
                [180, -180],
                [180, 180],
              ],
            ],
            spatialReference: a.Z.WGS84,
          }),
          minus180Line: new l.Z({
            paths: [
              [
                [-180, -180],
                [-180, 180],
              ],
            ],
            spatialReference: a.Z.WGS84,
          }),
        },
      };
      function f(e, t) {
        return Math.ceil((e - t) / (2 * t));
      }
      function _(e, t) {
        const s = m(e);
        for (const e of s) for (const s of e) s[0] += t;
        return e;
      }
      function m(e) {
        return (0, c.oU)(e) ? e.rings : e.paths;
      }
      var d = s(8744),
        p = s(40488),
        g = (s(66577), s(3172)),
        v = s(17452);
      function b(e) {
        return {
          geometryType: (0, c.Ji)(e[0]),
          geometries: e.map((e) => e.toJSON()),
        };
      }
      const y = r.Z.getLogger('esri.geometry.support.normalizeUtils');
      function E(e) {
        return 'polygon' === e[0].type;
      }
      function M(e) {
        return 'polyline' === e[0].type;
      }
      function A(e, t, s) {
        if (t) {
          const t = (function (e, t) {
            if (!(e instanceof l.Z || e instanceof o.Z)) {
              const e =
                'straightLineDensify: the input geometry is neither polyline nor polygon';
              throw (y.error(e), new n.Z(e));
            }
            const s = m(e),
              i = [];
            for (const e of s) {
              const s = [];
              i.push(s), s.push([e[0][0], e[0][1]]);
              for (let i = 0; i < e.length - 1; i++) {
                const n = e[i][0],
                  r = e[i][1],
                  h = e[i + 1][0],
                  o = e[i + 1][1],
                  l = Math.sqrt((h - n) * (h - n) + (o - r) * (o - r)),
                  a = (o - r) / l,
                  c = (h - n) / l,
                  u = l / t;
                if (u > 1) {
                  for (let e = 1; e <= u - 1; e++) {
                    const i = e * t,
                      h = c * i + n,
                      o = a * i + r;
                    s.push([h, o]);
                  }
                  const e = (l + Math.floor(u - 1) * t) / 2,
                    i = c * e + n,
                    h = a * e + r;
                  s.push([i, h]);
                }
                s.push([h, o]);
              }
            }
            return (function (e) {
              return 'polygon' === e.type;
            })(e)
              ? new o.Z({ rings: i, spatialReference: e.spatialReference })
              : new l.Z({ paths: i, spatialReference: e.spatialReference });
          })(e, 1e6);
          e = (0, p.Sx)(t, !0);
        }
        return s && (e = _(e, s)), e;
      }
      function x(e, t, s) {
        if (Array.isArray(e)) {
          const i = e[0];
          if (i > t) {
            const s = f(i, t);
            e[0] = i + s * (-2 * t);
          } else if (i < s) {
            const t = f(i, s);
            e[0] = i + t * (-2 * s);
          }
        } else {
          const i = e.x;
          if (i > t) {
            const s = f(i, t);
            e = e.clone().offset(s * (-2 * t), 0);
          } else if (i < s) {
            const t = f(i, s);
            e = e.clone().offset(t * (-2 * s), 0);
          }
        }
        return e;
      }
      function z(e, t) {
        let s = -1;
        for (let i = 0; i < t.cutIndexes.length; i++) {
          const n = t.cutIndexes[i],
            r = t.geometries[i],
            h = m(r);
          for (let e = 0; e < h.length; e++) {
            const t = h[e];
            t.some((s) => {
              if (s[0] < 180) return !0;
              {
                let s = 0;
                for (let e = 0; e < t.length; e++) {
                  const i = t[e][0];
                  s = i > s ? i : s;
                }
                s = Number(s.toFixed(9));
                const i = -360 * f(s, 180);
                for (let s = 0; s < t.length; s++) {
                  const t = r.getPoint(e, s);
                  r.setPoint(e, s, t.clone().offset(i, 0));
                }
                return !0;
              }
            });
          }
          if (n === s) {
            if (E(e)) for (const t of m(r)) e[n] = e[n].addRing(t);
            else if (M(e)) for (const t of m(r)) e[n] = e[n].addPath(t);
          } else (s = n), (e[n] = r);
        }
        return e;
      }
      async function C(e, t, s) {
        var n;
        if (!Array.isArray(e)) return C([e], t);
        const r =
          null != (n = null == t ? void 0 : t.url) ? n : i.Z.geometryServiceUrl;
        let a,
          m,
          y,
          E,
          M,
          S,
          R,
          w,
          O = 0;
        const L = [],
          F = [];
        for (const t of e)
          if ((0, h.Wi)(t)) F.push(t);
          else if (
            (a ||
              ((a = t.spatialReference),
              (m = (0, d.C5)(a)),
              (y = a.isWebMercator),
              (S = y ? 102100 : 4326),
              (E = u[S].maxX),
              (M = u[S].minX),
              (R = u[S].plus180Line),
              (w = u[S].minus180Line)),
            m)
          )
            if ('mesh' === t.type) F.push(t);
            else if ('point' === t.type) F.push(x(t.clone(), E, M));
            else if ('multipoint' === t.type) {
              const e = t.clone();
              (e.points = e.points.map((e) => x(e, E, M))), F.push(e);
            } else if ('extent' === t.type) {
              const e = t.clone()._normalize(!1, !1, m);
              F.push(e.rings ? new o.Z(e) : e);
            } else if (t.extent) {
              const e = t.extent,
                s = f(e.xmin, M) * (2 * E);
              let i = 0 === s ? t.clone() : _(t.clone(), s);
              e.offset(s, 0),
                e.intersects(R) && e.xmax !== E
                  ? ((O = e.xmax > O ? e.xmax : O),
                    (i = A(i, y)),
                    L.push(i),
                    F.push('cut'))
                  : e.intersects(w) && e.xmin !== M
                  ? ((O = e.xmax * (2 * E) > O ? e.xmax * (2 * E) : O),
                    (i = A(i, y, 360)),
                    L.push(i),
                    F.push('cut'))
                  : F.push(i);
            } else F.push(t.clone());
          else F.push(t);
        let Z = f(O, E),
          D = -90;
        const N = Z,
          I = new l.Z();
        for (; Z > 0; ) {
          const e = 360 * Z - 180;
          I.addPath([
            [e, D],
            [e, -1 * D],
          ]),
            (D *= -1),
            Z--;
        }
        if (L.length > 0 && N > 0) {
          const t = z(
              L,
              await (async function (e, t, s, i) {
                const n = 'string' == typeof e ? (0, v.mN)(e) : e,
                  r = t[0].spatialReference,
                  h = {
                    ...i,
                    query: {
                      ...n.query,
                      f: 'json',
                      sr: JSON.stringify(r),
                      target: JSON.stringify({
                        geometryType: (0, c.Ji)(t[0]),
                        geometries: t,
                      }),
                      cutter: JSON.stringify(s),
                    },
                  },
                  o = await (0, g.default)(n.path + '/cut', h),
                  { cutIndexes: l, geometries: a = [] } = o.data;
                return {
                  cutIndexes: l,
                  geometries: a.map((e) => {
                    const t = (0, c.im)(e);
                    return (t.spatialReference = r), t;
                  }),
                };
              })(r, L, I, s),
            ),
            i = [],
            n = [];
          for (let s = 0; s < F.length; s++) {
            const r = F[s];
            if ('cut' !== r) n.push(r);
            else {
              const r = t.shift(),
                o = e[s];
              (0, h.pC)(o) &&
              'polygon' === o.type &&
              o.rings &&
              o.rings.length > 1 &&
              r.rings.length >= o.rings.length
                ? (i.push(r), n.push('simplify'))
                : n.push(y ? (0, p.$)(r) : r);
            }
          }
          if (!i.length) return n;
          const o = await (async function (e, t, s) {
              const i = 'string' == typeof e ? (0, v.mN)(e) : e,
                n = t[0].spatialReference,
                r = (0, c.Ji)(t[0]),
                h = {
                  ...s,
                  query: {
                    ...i.query,
                    f: 'json',
                    sr: n.wkid ? n.wkid : JSON.stringify(n),
                    geometries: JSON.stringify(b(t)),
                  },
                };
              return (function (e, t, s) {
                const i = (0, c.q9)(t);
                return e.map((e) => {
                  const t = i.fromJSON(e);
                  return (t.spatialReference = s), t;
                });
              })((await (0, g.default)(i.path + '/simplify', h)).data, r, n);
            })(r, i, s),
            l = [];
          for (let e = 0; e < n.length; e++) {
            const t = n[e];
            'simplify' !== t
              ? l.push(t)
              : l.push(y ? (0, p.$)(o.shift()) : o.shift());
          }
          return l;
        }
        const V = [];
        for (let e = 0; e < F.length; e++) {
          const t = F[e];
          if ('cut' !== t) V.push(t);
          else {
            const e = L.shift();
            V.push(!0 === y ? (0, p.$)(e) : e);
          }
        }
        return Promise.resolve(V);
      }
    },
    99514: (e, t, s) => {
      s.d(t, { Z: () => h });
      var i = s(35671);
      function n(e) {
        return 'oid' === e.type || 'esriFieldTypeOID' === e.type;
      }
      function r(e) {
        return 'global-id' === e.type || 'esriFieldTypeGlobalID' === e.type;
      }
      class h {
        constructor(e) {
          if (
            ((this.fields = e),
            (this._fieldsMap = new Map()),
            (this._dateFieldsSet = new Set()),
            (this._numericFieldsSet = new Set()),
            (this.dateFields = []),
            (this.numericFields = []),
            (this._requiredFields = null),
            !e)
          )
            return;
          const t = [];
          for (const h of e) {
            const e = h && h.name;
            if (e) {
              const l = o(e);
              this._fieldsMap.set(e, h),
                this._fieldsMap.set(l, h),
                t.push(l),
                'date' === (s = h).type || 'esriFieldTypeDate' === s.type
                  ? (this.dateFields.push(h), this._dateFieldsSet.add(h))
                  : (0, i.H7)(h) &&
                    (this._numericFieldsSet.add(h), this.numericFields.push(h)),
                n(h) ||
                  r(h) ||
                  ((h.editable = null == h.editable || !!h.editable),
                  (h.nullable = null == h.nullable || !!h.nullable));
            }
          }
          var s;
          t.sort(), (this.uid = t.join(','));
        }
        destroy() {
          this._fieldsMap.clear();
        }
        get requiredFields() {
          if (!this._requiredFields) {
            this._requiredFields = [];
            for (const e of this.fields)
              n(e) ||
                r(e) ||
                e.nullable ||
                void 0 !== (0, i.os)(e) ||
                this._requiredFields.push(e);
          }
          return this._requiredFields;
        }
        has(e) {
          return null != this.get(e);
        }
        get(e) {
          return null != e
            ? this._fieldsMap.get(e) || this._fieldsMap.get(o(e))
            : void 0;
        }
        isDateField(e) {
          return this._dateFieldsSet.has(this.get(e));
        }
        isNumericField(e) {
          return this._numericFieldsSet.has(this.get(e));
        }
        normalizeFieldName(e) {
          const t = this.get(e);
          if (t) return t.name;
        }
      }
      function o(e) {
        return e.toLowerCase().trim();
      }
    },
  },
]);
