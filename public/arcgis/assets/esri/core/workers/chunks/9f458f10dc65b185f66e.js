(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [7913],
  {
    41993: (e) => {
      function t(e) {
        return Promise.resolve().then(() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = 'MODULE_NOT_FOUND'), t);
        });
      }
      (t.keys = () => []), (t.resolve = t), (t.id = 41993), (e.exports = t);
    },
    99880: (e, t, s) => {
      'use strict';
      s.d(t, { V: () => l });
      var r = s(68773),
        i = (s(3172), s(20102)),
        n = s(92604),
        o = s(17452);
      const a = n.Z.getLogger('esri.assets');
      function l(e) {
        if (!r.Z.assetsPath)
          throw (
            (a.errorOnce(
              'The API assets location needs to be set using config.assetsPath. More information: https://arcg.is/1OzLe50',
            ),
            new i.Z('assets:path-not-set', 'config.assetsPath is not set'))
          );
        return (0, o.v_)(r.Z.assetsPath, e);
      }
    },
    80539: (e, t, s) => {
      'use strict';
      s.d(t, { Z: () => E });
      var r,
        i = s(43697),
        n = s(3894),
        o = s(32448),
        a = s(22974),
        l = s(70586),
        h = s(71143);
      !(function (e) {
        (e[(e.ADD = 1)] = 'ADD'),
          (e[(e.REMOVE = 2)] = 'REMOVE'),
          (e[(e.MOVE = 4)] = 'MOVE');
      })(r || (r = {}));
      var c,
        d = s(1654),
        u = s(5600),
        p = s(75215),
        f = s(52421),
        _ = s(52011),
        m = s(58971),
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
      const y = new h.Z(
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
        w = () => {};
      function b(e) {
        return e
          ? e instanceof O
            ? e.toArray()
            : e.length
            ? Array.prototype.slice.apply(e)
            : []
          : [];
      }
      function S(e) {
        if (e && e.length) return e[0];
      }
      function I(e, t, s, r) {
        const i = Math.min(e.length - s, t.length - r);
        let n = 0;
        for (; n < i && e[s + n] === t[r + n]; ) n++;
        return n;
      }
      function A(e, t, s, r) {
        t &&
          t.forEach((t, i, n) => {
            e.push(t), A(e, s.call(r, t, i, n), s, r);
          });
      }
      const k = new Set(),
        C = new Set(),
        T = new Set(),
        x = new Map();
      let U = 0,
        O = (c = class extends o.Z.EventedAccessor {
          constructor(e) {
            super(e),
              (this._chgListeners = []),
              (this._notifications = null),
              (this._timer = null),
              (this._observable = new v()),
              (this.length = 0),
              (this._items = []),
              Object.defineProperty(this, 'uid', { value: U++ });
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
            return (0, m.it)(this._observable), this._items;
          }
          set items(e) {
            this._emitBeforeChanges(r.ADD) ||
              (this._splice(0, this.length, b(e)),
              this._emitAfterChanges(r.ADD));
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
                    (this.remove = w),
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
            if (((0, m.it)(this._observable), this._emitBeforeChanges(r.ADD)))
              return this;
            const s = this.getNextIndex(null != t ? t : null);
            return this._splice(s, 0, [e]), this._emitAfterChanges(r.ADD), this;
          }
          addMany(e, t = this._items.length) {
            if (((0, m.it)(this._observable), !e || !e.length)) return this;
            if (this._emitBeforeChanges(r.ADD)) return this;
            const s = this.getNextIndex(t);
            return (
              this._splice(s, 0, b(e)), this._emitAfterChanges(r.ADD), this
            );
          }
          at(e) {
            if (
              ((0, m.it)(this._observable),
              (e = Math.trunc(e) || 0) < 0 && (e += this.length),
              !(e < 0 || e >= this.length))
            )
              return this._items[e];
          }
          removeAll() {
            if (
              ((0, m.it)(this._observable),
              !this.length || this._emitBeforeChanges(r.REMOVE))
            )
              return [];
            const e = this._splice(0, this.length) || [];
            return this._emitAfterChanges(r.REMOVE), e;
          }
          clone() {
            return (
              (0, m.it)(this._observable),
              this._createNewInstance({ items: this._items.map(a.d9) })
            );
          }
          concat(...e) {
            (0, m.it)(this._observable);
            const t = e.map(b);
            return this._createNewInstance({ items: this._items.concat(...t) });
          }
          drain(e, t) {
            if (
              ((0, m.it)(this._observable),
              !this.length || this._emitBeforeChanges(r.REMOVE))
            )
              return;
            const s = (0, l.j0)(this._splice(0, this.length)),
              i = s.length;
            for (let r = 0; r < i; r++) e.call(t, s[r], r, s);
            this._emitAfterChanges(r.REMOVE);
          }
          every(e, t) {
            return (0, m.it)(this._observable), this._items.every(e, t);
          }
          filter(e, t) {
            let s;
            return (
              (0, m.it)(this._observable),
              (s =
                2 === arguments.length
                  ? this._items.filter(e, t)
                  : this._items.filter(e)),
              this._createNewInstance({ items: s })
            );
          }
          find(e, t) {
            return (0, m.it)(this._observable), this._items.find(e, t);
          }
          findIndex(e, t) {
            return (0, m.it)(this._observable), this._items.findIndex(e, t);
          }
          flatten(e, t) {
            (0, m.it)(this._observable);
            const s = [];
            return A(s, this, e, t), new c(s);
          }
          forEach(e, t) {
            return (0, m.it)(this._observable), this._items.forEach(e, t);
          }
          getItemAt(e) {
            return (0, m.it)(this._observable), this._items[e];
          }
          getNextIndex(e) {
            (0, m.it)(this._observable);
            const t = this.length;
            return (e = null == e ? t : e) < 0 ? (e = 0) : e > t && (e = t), e;
          }
          includes(e, t = 0) {
            return (0, m.it)(this._observable), this._items.includes(e, t);
          }
          indexOf(e, t = 0) {
            return (0, m.it)(this._observable), this._items.indexOf(e, t);
          }
          join(e = ',') {
            return (0, m.it)(this._observable), this._items.join(e);
          }
          lastIndexOf(e, t = this.length - 1) {
            return (0, m.it)(this._observable), this._items.lastIndexOf(e, t);
          }
          map(e, t) {
            (0, m.it)(this._observable);
            const s = this._items.map(e, t);
            return new c({ items: s });
          }
          reorder(e, t = this.length - 1) {
            (0, m.it)(this._observable);
            const s = this.indexOf(e);
            if (-1 !== s) {
              if (
                (t < 0 ? (t = 0) : t >= this.length && (t = this.length - 1),
                s !== t)
              ) {
                if (this._emitBeforeChanges(r.MOVE)) return e;
                this._splice(s, 1),
                  this._splice(t, 0, [e]),
                  this._emitAfterChanges(r.MOVE);
              }
              return e;
            }
          }
          pop() {
            if (
              ((0, m.it)(this._observable),
              !this.length || this._emitBeforeChanges(r.REMOVE))
            )
              return;
            const e = S(this._splice(this.length - 1, 1));
            return this._emitAfterChanges(r.REMOVE), e;
          }
          push(...e) {
            return (
              (0, m.it)(this._observable),
              this._emitBeforeChanges(r.ADD) ||
                (this._splice(this.length, 0, e),
                this._emitAfterChanges(r.ADD)),
              this.length
            );
          }
          reduce(e, t) {
            (0, m.it)(this._observable);
            const s = this._items;
            return 2 === arguments.length ? s.reduce(e, t) : s.reduce(e);
          }
          reduceRight(e, t) {
            (0, m.it)(this._observable);
            const s = this._items;
            return 2 === arguments.length
              ? s.reduceRight(e, t)
              : s.reduceRight(e);
          }
          remove(e) {
            return (0, m.it)(this._observable), this.removeAt(this.indexOf(e));
          }
          removeAt(e) {
            if (
              ((0, m.it)(this._observable),
              e < 0 || e >= this.length || this._emitBeforeChanges(r.REMOVE))
            )
              return;
            const t = S(this._splice(e, 1));
            return this._emitAfterChanges(r.REMOVE), t;
          }
          removeMany(e) {
            if (
              ((0, m.it)(this._observable),
              !e || !e.length || this._emitBeforeChanges(r.REMOVE))
            )
              return [];
            const t = e instanceof c ? e.toArray() : e,
              s = this._items,
              i = [],
              n = t.length;
            for (let e = 0; e < n; e++) {
              const r = t[e],
                n = s.indexOf(r);
              if (n > -1) {
                const r = 1 + I(t, s, e + 1, n + 1),
                  o = this._splice(n, r);
                o && o.length > 0 && i.push.apply(i, o), (e += r - 1);
              }
            }
            return this._emitAfterChanges(r.REMOVE), i;
          }
          reverse() {
            if (((0, m.it)(this._observable), this._emitBeforeChanges(r.MOVE)))
              return this;
            const e = this._splice(0, this.length);
            return (
              e && (e.reverse(), this._splice(0, 0, e)),
              this._emitAfterChanges(r.MOVE),
              this
            );
          }
          shift() {
            if (
              ((0, m.it)(this._observable),
              !this.length || this._emitBeforeChanges(r.REMOVE))
            )
              return;
            const e = S(this._splice(0, 1));
            return this._emitAfterChanges(r.REMOVE), e;
          }
          slice(e = 0, t = this.length) {
            return (
              (0, m.it)(this._observable),
              this._createNewInstance({ items: this._items.slice(e, t) })
            );
          }
          some(e, t) {
            return (0, m.it)(this._observable), this._items.some(e, t);
          }
          sort(e) {
            if (
              ((0, m.it)(this._observable),
              !this.length || this._emitBeforeChanges(r.MOVE))
            )
              return this;
            const t = (0, l.j0)(this._splice(0, this.length));
            return (
              arguments.length ? t.sort(e) : t.sort(),
              this._splice(0, 0, t),
              this._emitAfterChanges(r.MOVE),
              this
            );
          }
          splice(e, t, ...s) {
            (0, m.it)(this._observable);
            const i = (t ? r.REMOVE : 0) | (s.length ? r.ADD : 0);
            if (this._emitBeforeChanges(i)) return [];
            const n = this._splice(e, t, s) || [];
            return this._emitAfterChanges(i), n;
          }
          toArray() {
            return (0, m.it)(this._observable), this._items.slice();
          }
          toJSON() {
            return (0, m.it)(this._observable), this.toArray();
          }
          toLocaleString() {
            return (0, m.it)(this._observable), this._items.toLocaleString();
          }
          toString() {
            return (0, m.it)(this._observable), this._items.toString();
          }
          unshift(...e) {
            return (
              (0, m.it)(this._observable),
              !e.length ||
                this._emitBeforeChanges(r.ADD) ||
                (this._splice(0, 0, e), this._emitAfterChanges(r.ADD)),
              this.length
            );
          }
          _createNewInstance(e) {
            return new this.constructor(e);
          }
          _splice(e, t, s) {
            const r = this._items,
              i = this.itemType;
            let n, o;
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
                (this._timer = (0, d.Os)(() => this._dispatchChange()))),
              t)
            ) {
              if (
                ((o = r.splice(e, t)), this.hasEventListener('before-remove'))
              ) {
                const t = y.acquire();
                (t.target = this), (t.cancellable = !0);
                for (let s = 0, i = o.length; s < i; s++)
                  (n = o[s]),
                    t.reset(n),
                    this.emit('before-remove', t),
                    t.defaultPrevented &&
                      (o.splice(s, 1),
                      r.splice(e, 0, n),
                      (e += 1),
                      (s -= 1),
                      (i -= 1));
                y.release(t);
              }
              if (
                ((this.length = this._items.length),
                this.hasEventListener('after-remove'))
              ) {
                const e = y.acquire();
                (e.target = this), (e.cancellable = !1);
                const t = o.length;
                for (let s = 0; s < t; s++)
                  e.reset(o[s]), this.emit('after-remove', e);
                y.release(e);
              }
            }
            if (s && s.length) {
              if (i) {
                const e = [];
                for (const t of s) {
                  const s = i.ensureType(t);
                  (null == s && null != t) || e.push(s);
                }
                s = e;
              }
              const t = this.hasEventListener('before-add'),
                n = this.hasEventListener('after-add'),
                o = e === this.length;
              if (t || n) {
                const i = y.acquire();
                (i.target = this), (i.cancellable = !0);
                const a = y.acquire();
                (a.target = this), (a.cancellable = !1);
                for (const l of s)
                  t
                    ? (i.reset(l),
                      this.emit('before-add', i),
                      i.defaultPrevented ||
                        (o ? r.push(l) : r.splice(e++, 0, l),
                        this._set('length', r.length),
                        n && (a.reset(l), this.emit('after-add', a))))
                    : (o ? r.push(l) : r.splice(e++, 0, l),
                      this._set('length', r.length),
                      a.reset(l),
                      this.emit('after-add', a));
                y.release(a), y.release(i);
              } else {
                if (o) for (const e of s) r.push(e);
                else r.splice(e, 0, ...s);
                this._set('length', r.length);
              }
            }
            return (
              ((s && s.length) || (o && o.length)) &&
                this._notifyChangeEvent(s, o),
              o
            );
          }
          _emitBeforeChanges(e) {
            let t = !1;
            if (this.hasEventListener('before-changes')) {
              const s = y.acquire();
              (s.target = this),
                (s.cancellable = !0),
                (s.type = e),
                this.emit('before-changes', s),
                (t = s.defaultPrevented),
                y.release(s);
            }
            return t;
          }
          _emitAfterChanges(e) {
            if (this.hasEventListener('after-changes')) {
              const t = y.acquire();
              (t.target = this),
                (t.cancellable = !1),
                (t.type = e),
                this.emit('after-changes', t),
                y.release(t);
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
              k.clear(), C.clear(), T.clear();
              for (const { added: t, removed: s } of e) {
                if (t)
                  if (0 === T.size && 0 === C.size) for (const e of t) k.add(e);
                  else
                    for (const e of t)
                      C.has(e) ? (T.add(e), C.delete(e)) : T.has(e) || k.add(e);
                if (s)
                  if (0 === T.size && 0 === k.size) for (const e of s) C.add(e);
                  else
                    for (const e of s)
                      k.has(e) ? k.delete(e) : (T.delete(e), C.add(e));
              }
              const s = n.Z.acquire();
              k.forEach((e) => {
                s.push(e);
              });
              const r = n.Z.acquire();
              C.forEach((e) => {
                r.push(e);
              });
              const i = this._items,
                o = t.items,
                a = n.Z.acquire();
              if (
                (T.forEach((e) => {
                  o.indexOf(e) !== i.indexOf(e) && a.push(e);
                }),
                t.listeners && (s.length || r.length || a.length))
              ) {
                const e = { target: this, added: s, removed: r, moved: a },
                  i = t.listeners.length;
                for (let s = 0; s < i; s++) {
                  const r = t.listeners[s];
                  r.removed || r.callback.call(this, e);
                }
              }
              n.Z.release(s), n.Z.release(r), n.Z.release(a);
            }
            k.clear(), C.clear(), T.clear();
          }
        });
      (O.ofType = (e) => {
        if (!e) return c;
        if (x.has(e)) return x.get(e);
        let t = null;
        if ('function' == typeof e) t = e.prototype.declaredClass;
        else if (e.base) t = e.base.prototype.declaredClass;
        else
          for (const s in e.typeMap) {
            const r = e.typeMap[s].prototype.declaredClass;
            t ? (t += ` | ${r}`) : (t = r);
          }
        let s = class extends c {};
        return (
          (0, i._)(
            [
              (0, f.c)({
                Type: e,
                ensureType:
                  'function' == typeof e ? (0, p.se)(e) : (0, p.N7)(e),
              }),
            ],
            s.prototype,
            'itemType',
            void 0,
          ),
          (s = (0, i._)([(0, _.j)(`esri.core.Collection<${t}>`)], s)),
          x.set(e, s),
          s
        );
      }),
        (0, i._)([(0, u.Cb)()], O.prototype, 'length', void 0),
        (0, i._)([(0, u.Cb)()], O.prototype, 'items', null),
        (O = c = (0, i._)([(0, _.j)('esri.core.Collection')], O));
      const E = O;
    },
    32448: (e, t, s) => {
      'use strict';
      s.d(t, { Z: () => l });
      var r = s(43697),
        i = s(15923),
        n = s(50758),
        o = s(52011);
      class a {
        constructor() {
          this._emitter = new a.EventEmitter(this);
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
            const r = this.target || this;
            return (
              [...s].forEach((e) => {
                e.call(r, t);
              }),
              s.length > 0
            );
          }
          on(e, t) {
            if (Array.isArray(e)) {
              const s = e.map((e) => this.on(e, t));
              return (0, n.AL)(s);
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
                    r = s.indexOf(t);
                  r >= 0 && s.splice(r, 1);
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
            return (s = (0, r._)([(0, o.j)('esri.core.Evented')], s)), s;
          });
        let s = class extends i.Z {
          constructor() {
            super(...arguments), (this._emitter = new a.EventEmitter(this));
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
        (s = (0, r._)([(0, o.j)('esri.core.Evented')], s)),
          (e.EventedAccessor = s);
      })(a || (a = {}));
      const l = a;
    },
    61247: (e, t, s) => {
      'use strict';
      s.d(t, { Z: () => c });
      var r = s(43697),
        i = s(15923),
        n = s(80539),
        o = s(70586),
        a = s(5600),
        l = s(52011);
      let h = class extends i.Z {
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
          if (!this._isHandle(e) && !Array.isArray(e) && !n.Z.isCollection(e))
            return this;
          const s = this._getOrCreateGroup(t);
          return (
            Array.isArray(e) || n.Z.isCollection(e)
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
          if (Array.isArray(e) || n.Z.isCollection(e))
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
          return (0, o.j0)(this._groups.get(this._ensureGroupKey(e)));
        }
        _deleteGroup(e) {
          return this._groups.delete(this._ensureGroupKey(e));
        }
        _ensureGroupKey(e) {
          return e || '_default_';
        }
      };
      (0, r._)([(0, a.Cb)({ readOnly: !0 })], h.prototype, 'size', null),
        (h = (0, r._)([(0, l.j)('esri.core.Handles')], h));
      const c = h;
    },
    609: (e, t, s) => {
      'use strict';
      s.d(t, { D: () => u, v: () => d });
      var r,
        i,
        n = s(43697),
        o = s(15923),
        a = s(70586),
        l = s(95330),
        h = s(52011);
      ((i = r || (r = {}))[(i.PENDING = 0)] = 'PENDING'),
        (i[(i.RESOLVED = 1)] = 'RESOLVED'),
        (i[(i.REJECTED = 2)] = 'REJECTED');
      class c {
        constructor(e) {
          (this.instance = e),
            (this._resolver = (0, l.dD)()),
            (this._status = r.PENDING),
            (this._resolvingPromises = []),
            this._resolver.promise.then(
              () => {
                (this._status = r.RESOLVED), this._cleanUp();
              },
              () => {
                (this._status = r.REJECTED), this._cleanUp();
              },
            );
        }
        addResolvingPromise(e) {
          this._resolvingPromises.push(e), this._tryResolve();
        }
        isResolved() {
          return this._status === r.RESOLVED;
        }
        isRejected() {
          return this._status === r.REJECTED;
        }
        isFulfilled() {
          return this._status !== r.PENDING;
        }
        abort() {
          this._resolver.reject((0, l.zE)());
        }
        when(e, t) {
          return this._resolver.promise.then(e, t);
        }
        _cleanUp() {
          this._allPromise = this._resolvingPromises = this._allPromise = null;
        }
        _tryResolve() {
          if (this.isFulfilled()) return;
          const e = (0, l.dD)(),
            t = [...this._resolvingPromises, (0, a.j0)(e.promise)],
            s = (this._allPromise = Promise.all(t));
          s.then(
            () => {
              this.isFulfilled() ||
                this._allPromise !== s ||
                this._resolver.resolve(this.instance);
            },
            (e) => {
              this.isFulfilled() ||
                this._allPromise !== s ||
                (0, l.D_)(e) ||
                this._resolver.reject(e);
            },
          ),
            e.resolve();
        }
      }
      const d = (e) => {
        let t = class extends e {
          constructor(...e) {
            super(...e),
              (this._promiseProps = new c(this)),
              this.addResolvingPromise(Promise.resolve());
          }
          isResolved() {
            return this._promiseProps.isResolved();
          }
          isRejected() {
            return this._promiseProps.isRejected();
          }
          isFulfilled() {
            return this._promiseProps.isFulfilled();
          }
          when(e, t) {
            return new Promise((e, t) => {
              this._promiseProps.when(e, t);
            }).then(e, t);
          }
          catch(e) {
            return this.when(null, e);
          }
          addResolvingPromise(e) {
            e &&
              !this._promiseProps.isFulfilled() &&
              this._promiseProps.addResolvingPromise(
                '_promiseProps' in e ? e.when() : e,
              );
          }
        };
        return (t = (0, n._)([(0, h.j)('esri.core.Promise')], t)), t;
      };
      let u = class extends d(o.Z) {};
      u = (0, n._)([(0, h.j)('esri.core.Promise')], u);
    },
    52421: (e, t, s) => {
      'use strict';
      function r(e) {
        return (t, s) => {
          t[s] = e;
        };
      }
      s.d(t, { c: () => r });
    },
    17445: (e, t, s) => {
      'use strict';
      s.d(t, {
        nn: () => m,
        on: () => d,
        Z_: () => _,
        tX: () => g,
        YP: () => l,
        gx: () => h,
        N1: () => u,
      });
      var r = s(91460),
        i = s(50758),
        n = s(70586),
        o = s(95330),
        a = s(26258);
      function l(e, t, s = {}) {
        return c(e, t, s, p);
      }
      function h(e, t, s = {}) {
        return c(e, t, s, f);
      }
      function c(e, t, s = {}, r) {
        let i = null;
        const o = s.once
          ? (e, s) => {
              r(e) && ((0, n.hw)(i), t(e, s));
            }
          : (e, s) => {
              r(e) && t(e, s);
            };
        if (((i = (0, a.aQ)(e, o, s.sync, s.equals)), s.initial)) {
          const t = e();
          o(t, t);
        }
        return i;
      }
      function d(e, t, s, o = {}) {
        let a = null,
          h = null,
          c = null;
        function d() {
          a &&
            h &&
            (h.remove(),
            null == o.onListenerRemove || o.onListenerRemove(a),
            (a = null),
            (h = null));
        }
        function u(e) {
          o.once && o.once && (0, n.hw)(c), s(e);
        }
        const p = l(
          e,
          (e, s) => {
            d(),
              (0, r.vT)(e) &&
                ((a = e),
                (h = (0, r.on)(e, t, u)),
                null == o.onListenerAdd || o.onListenerAdd(e));
          },
          { sync: o.sync, initial: !0 },
        );
        return (
          (c = (0, i.kB)(() => {
            p.remove(), d();
          })),
          c
        );
      }
      function u(e, t) {
        return (function (e, t, s) {
          if ((0, o.Hc)(s)) return Promise.reject((0, o.zE)());
          const r = e();
          if (null != t && t(r)) return Promise.resolve(r);
          let a = null;
          function l() {
            a = (0, n.hw)(a);
          }
          return new Promise((r, n) => {
            a = (0, i.AL)([
              (0, o.fu)(s, () => {
                l(), n((0, o.zE)());
              }),
              c(
                e,
                (e) => {
                  l(), r(e);
                },
                { sync: !1, once: !0 },
                null != t ? t : p,
              ),
            ]);
          });
        })(e, f, t);
      }
      function p(e) {
        return !0;
      }
      function f(e) {
        return !!e;
      }
      s(87538);
      const _ = { sync: !0 },
        m = { initial: !0 },
        g = { sync: !0, initial: !0 };
    },
    41123: (e, t, s) => {
      'use strict';
      function r() {
        const e = crypto.getRandomValues(new Uint16Array(8));
        (e[3] = (4095 & e[3]) | 16384), (e[4] = (16383 & e[4]) | 32768);
        const t = (t) => e[t].toString(16);
        return (
          t(0) +
          t(1) +
          '-' +
          t(2) +
          '-' +
          t(3) +
          '-' +
          t(4) +
          '-' +
          t(5) +
          t(6) +
          t(7)
        );
      }
      s.d(t, { D: () => r });
    },
    33107: (e, t, s) => {
      'use strict';
      s.r(t), s.d(t, { default: () => ft });
      var r = s(40330),
        i = s(43697),
        n = s(68773),
        o = s(3172),
        a = s(20102),
        l = s(32448),
        h = s(91460),
        c = s(22974),
        d = s(78286),
        u = s(95330),
        p = s(17452),
        f = s(5600),
        _ = (s(75215), s(52011)),
        m = (s(67676), s(80442), s(940)),
        g = (s(2587), s(60235));
      (() => {
        if ('function' == typeof Element.prototype.closest)
          return (e, t) => e.closest(t);
        Element.prototype.matches || Element.prototype.msMatchesSelector;
      })();
      var v = s(61247),
        y = s(92604),
        w = s(70586),
        b = s(609),
        S = s(17445),
        I = s(41123),
        A = s(90578),
        k = s(58971),
        C = s(38805),
        T = s(8728),
        x = s(3894),
        U = s(50758);
      const O = new Map();
      function E() {
        O.clear();
      }
      function P(e) {
        O.delete(e);
      }
      y.Z.getLogger('esri.widgets.support.widgetUtils');
      function R(e) {
        const t = x.Z.acquire();
        for (let e = 0; e < arguments.length; e++) {
          const s = arguments[e],
            r = typeof s;
          if ('string' === r) t.push(s);
          else if (Array.isArray(s)) t.push.apply(t, s);
          else if ('object' === r) for (const e in s) s[e] && t.push(e);
        }
        const s = t.join(' ');
        return x.Z.release(t), s;
      }
      function D(e) {
        this[e.getAttribute('data-node-ref')] = e;
      }
      (() => {
        const e = new Map();
        new ResizeObserver((t) => {
          E();
          for (const s of t) e.get(s.target)(s);
        });
      })();
      const N = [
          'dd',
          'dl',
          'dt',
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'sub',
          'sup',
          'animate',
          'animatetransform',
          'circle',
          'clippath',
          'defs',
          'ellipse',
          'g',
          'image',
          'line',
          'lineargradient',
          'marker',
          'mask',
          'path',
          'pattern',
          'polygon',
          'polyline',
          'radialgradient',
          'rect',
          'stop',
          'svg',
          'switch',
          'symbol',
          'text',
          'textpath',
          'tspan',
          'use',
        ].reduce((e, t) => ((e[t] = []), e), {}),
        L = [
          'align',
          'alink',
          'alt',
          'bgcolor',
          'border',
          'cellpadding',
          'cellspacing',
          'class',
          'color',
          'cols',
          'colspan',
          'coords',
          'd',
          'dir',
          'face',
          'height',
          'hspace',
          'ismap',
          'lang',
          'marginheight',
          'marginwidth',
          'multiple',
          'nohref',
          'noresize',
          'noshade',
          'nowrap',
          'ref',
          'rel',
          'rev',
          'rows',
          'rowspan',
          'scrolling',
          'shape',
          'span',
          'summary',
          'tabindex',
          'title',
          'usemap',
          'valign',
          'value',
          'vlink',
          'vspace',
          'width',
        ],
        M = new T.Z(
          {
            whiteList: N,
            onTagAttr: (e, t, s) => {
              const r = `${t}="${s}"`;
              if (L.includes(t)) return r;
            },
            stripIgnoreTag: !0,
            stripIgnoreTagBody: ['script', 'style'],
          },
          !0,
        ),
        j = 'http://www.w3.org/',
        q = `${j}2000/svg`,
        V = `${j}1999/xlink`;
      let B,
        Z = [],
        F = (e, t) => {
          let s = {};
          return (
            Object.keys(e).forEach((t) => {
              s[t] = e[t];
            }),
            t &&
              Object.keys(t).forEach((e) => {
                s[e] = t[e];
              }),
            s
          );
        },
        z = (e, t) =>
          e.vnodeSelector === t.vnodeSelector &&
          (e.properties && t.properties
            ? e.properties.key === t.properties.key &&
              e.properties.bind === t.properties.bind
            : !e.properties && !t.properties),
        $ = (e) => {
          if ('string' != typeof e)
            throw new Error('Style values must be strings');
        },
        H = (e, t, s) => {
          if ('' !== t.vnodeSelector)
            for (let r = s; r < e.length; r++) if (z(e[r], t)) return r;
          return -1;
        },
        G = (e, t, s, r) => {
          let i = e[t];
          if ('' === i.vnodeSelector) return;
          let n = i.properties;
          if (!(n ? (void 0 === n.key ? n.bind : n.key) : void 0))
            for (let n = 0; n < e.length; n++)
              if (n !== t) {
                let t = e[n];
                if (z(t, i))
                  throw new Error(
                    `${s.vnodeSelector} had a ${i.vnodeSelector} child ${
                      'added' === r ? r : 'removed'
                    }, but there is now more than one. You must add unique key properties to make them distinguishable.`,
                  );
              }
        },
        J = (e) => {
          if (e.properties) {
            let t = e.properties.enterAnimation;
            t && t(e.domNode, e.properties);
          }
        },
        W = [],
        Y = !1,
        K = (e) => {
          (e.children || []).forEach(K),
            e.properties &&
              e.properties.afterRemoved &&
              e.properties.afterRemoved.apply(
                e.properties.bind || e.properties,
                [e.domNode],
              );
        },
        X = () => {
          (Y = !1), W.forEach(K), (W.length = 0);
        },
        Q = (e) => {
          W.push(e),
            Y ||
              ((Y = !0),
              'undefined' != typeof window && 'requestIdleCallback' in window
                ? window.requestIdleCallback(X, { timeout: 16 })
                : setTimeout(X, 16));
        },
        ee = (e) => {
          let t = e.domNode;
          if (e.properties) {
            let s = e.properties.exitAnimation;
            if (s) {
              t.style.pointerEvents = 'none';
              let r = () => {
                t.parentNode && (t.parentNode.removeChild(t), Q(e));
              };
              return void s(t, r, e.properties);
            }
          }
          t.parentNode && (t.parentNode.removeChild(t), Q(e));
        },
        te = (e, t, s) => {
          if (!t) return;
          let r = s.eventHandlerInterceptor,
            i = Object.keys(t),
            n = i.length;
          for (let o = 0; o < n; o++) {
            let n = i[o],
              a = t[n];
            if ('className' === n)
              throw new Error(
                'Property "className" is not supported, use "class".',
              );
            if ('class' === n) ie(e, a, !0);
            else if ('classes' === n) {
              let t = Object.keys(a),
                s = t.length;
              for (let r = 0; r < s; r++) {
                let s = t[r];
                a[s] && e.classList.add(s);
              }
            } else if ('styles' === n) {
              let t = Object.keys(a),
                r = t.length;
              for (let i = 0; i < r; i++) {
                let r = t[i],
                  n = a[r];
                n && ($(n), s.styleApplyer(e, r, n));
              }
            } else if ('key' !== n && null != a) {
              let i = typeof a;
              'function' === i
                ? (0 === n.lastIndexOf('on', 0) &&
                    (r && (a = r(n, a, e, t)),
                    'oninput' === n &&
                      (function () {
                        let e = a;
                        a = function (t) {
                          e.apply(this, [t]),
                            (t.target['oninput-value'] = t.target.value);
                        };
                      })()),
                  (e[n] = a))
                : s.namespace === q
                ? 'href' === n
                  ? e.setAttributeNS(V, n, a)
                  : e.setAttribute(n, a)
                : 'string' === i && 'value' !== n
                ? 'innerHTML' === n
                  ? (e[n] = M.sanitize(a))
                  : e.setAttribute(n, a)
                : (e[n] = a);
            }
          }
        },
        se = (e, t, s) => {
          ((e, t, s) => {
            if (t) for (let r of t) re(r, e, void 0, s);
          })(e, t.children, s),
            t.text && (e.textContent = t.text),
            te(e, t.properties, s),
            t.properties &&
              t.properties.afterCreate &&
              t.properties.afterCreate.apply(
                t.properties.bind || t.properties,
                [e, s, t.vnodeSelector, t.properties, t.children],
              );
        },
        re = (e, t, s, r) => {
          let i,
            n = 0,
            o = e.vnodeSelector,
            a = t.ownerDocument;
          if ('' === o)
            (i = e.domNode = a.createTextNode(e.text)),
              void 0 !== s ? t.insertBefore(i, s) : t.appendChild(i);
          else {
            for (let l = 0; l <= o.length; ++l) {
              let h = o.charAt(l);
              if (l === o.length || '.' === h || '#' === h) {
                let h = o.charAt(n - 1),
                  c = o.slice(n, l);
                '.' === h
                  ? i.classList.add(c)
                  : '#' === h
                  ? (i.id = c)
                  : ('svg' === c && (r = F(r, { namespace: q })),
                    void 0 !== r.namespace
                      ? (i = e.domNode = a.createElementNS(r.namespace, c))
                      : ((i = e.domNode = e.domNode || a.createElement(c)),
                        'input' === c &&
                          e.properties &&
                          void 0 !== e.properties.type &&
                          i.setAttribute('type', e.properties.type)),
                    void 0 !== s
                      ? t.insertBefore(i, s)
                      : i.parentNode !== t && t.appendChild(i)),
                  (n = l + 1);
              }
            }
            se(i, e, r);
          }
        },
        ie = (e, t, s) => {
          t &&
            t.split(' ').forEach((t) => {
              t && e.classList.toggle(t, s);
            });
        };
      B = (e, t, s) => {
        let r = e.domNode,
          i = !1;
        if (e === t) return !1;
        let n = !1;
        if ('' === t.vnodeSelector) {
          if (t.text !== e.text) {
            let e = r.ownerDocument.createTextNode(t.text);
            return (
              r.parentNode.replaceChild(e, r), (t.domNode = e), (i = !0), i
            );
          }
          t.domNode = r;
        } else
          0 === t.vnodeSelector.lastIndexOf('svg', 0) &&
            (s = F(s, { namespace: q })),
            e.text !== t.text &&
              ((n = !0),
              void 0 === t.text
                ? r.removeChild(r.firstChild)
                : (r.textContent = t.text)),
            (t.domNode = r),
            (n =
              ((e, t, s, r, i) => {
                if (s === r) return !1;
                r = r || Z;
                let n,
                  o = (s = s || Z).length,
                  a = r.length,
                  l = 0,
                  h = 0,
                  c = !1;
                for (; h < a; ) {
                  let a = l < o ? s[l] : void 0,
                    d = r[h];
                  if (void 0 !== a && z(a, d)) (c = B(a, d, i) || c), l++;
                  else {
                    let a = H(s, d, l + 1);
                    if (a >= 0) {
                      for (n = l; n < a; n++) ee(s[n]), G(s, n, e, 'removed');
                      (c = B(s[a], d, i) || c), (l = a + 1);
                    } else
                      re(d, t, l < o ? s[l].domNode : void 0, i),
                        J(d),
                        G(r, h, e, 'added');
                  }
                  h++;
                }
                if (o > l)
                  for (n = l; n < o; n++) ee(s[n]), G(s, n, e, 'removed');
                return c;
              })(t, r, e.children, t.children, s) || n),
            (n =
              ((e, t, s, r) => {
                if (!s) return;
                let i = !1,
                  n = Object.keys(s),
                  o = n.length;
                for (let a = 0; a < o; a++) {
                  let o = n[a],
                    l = s[o],
                    h = t[o];
                  if ('class' === o) h !== l && (ie(e, h, !1), ie(e, l, !0));
                  else if ('classes' === o) {
                    let t = e.classList,
                      s = Object.keys(l),
                      r = s.length;
                    for (let e = 0; e < r; e++) {
                      let r = s[e],
                        n = !!l[r];
                      n !== !!h[r] && ((i = !0), n ? t.add(r) : t.remove(r));
                    }
                  } else if ('styles' === o) {
                    let t = Object.keys(l),
                      s = t.length;
                    for (let n = 0; n < s; n++) {
                      let s = t[n],
                        o = l[s];
                      o !== h[s] &&
                        ((i = !0),
                        o
                          ? ($(o), r.styleApplyer(e, s, o))
                          : r.styleApplyer(e, s, ''));
                    }
                  } else if (
                    (l || 'string' != typeof h || (l = ''), 'value' === o)
                  ) {
                    let t = e[o];
                    t !== l &&
                      (e['oninput-value']
                        ? t === e['oninput-value']
                        : l !== h) &&
                      ((e[o] = l), (e['oninput-value'] = void 0)),
                      l !== h && (i = !0);
                  } else if (l !== h) {
                    let t = typeof l;
                    ('function' === t && r.eventHandlerInterceptor) ||
                      (r.namespace === q
                        ? 'href' === o
                          ? e.setAttributeNS(V, o, l)
                          : e.setAttribute(o, l)
                        : 'string' === t
                        ? 'innerHTML' === o
                          ? (e[o] = M.sanitize(l))
                          : 'role' === o && '' === l
                          ? e.removeAttribute(o)
                          : e.setAttribute(o, l)
                        : e[o] !== l && (e[o] = l),
                      (i = !0));
                  }
                }
                return i;
              })(r, e.properties, t.properties, s) || n),
            t.properties &&
              t.properties.afterUpdate &&
              t.properties.afterUpdate.apply(
                t.properties.bind || t.properties,
                [r, s, t.vnodeSelector, t.properties, t.children],
              );
        return (
          n &&
            t.properties &&
            t.properties.updateAnimation &&
            t.properties.updateAnimation(r, t.properties, e.properties),
          i
        );
      };
      let ne = (e, t) => ({
        getLastRender: () => e,
        update: (s) => {
          if (e.vnodeSelector !== s.vnodeSelector)
            throw new Error(
              'The selector for the root VNode may not be changed. (consider using dom.merge and add one extra level to the virtual DOM)',
            );
          let r = e;
          (e = s), B(r, s, t);
        },
        domNode: e.domNode,
      });
      const oe = {
        namespace: void 0,
        performanceLogger: () => {},
        eventHandlerInterceptor: void 0,
        styleApplyer: (e, t, s) => {
          '-' === t.charAt(0) ? e.style.setProperty(t, s) : (e.style[t] = s);
        },
      };
      let ae,
        le = (e) => F(oe, e),
        he = (e, t, s) => ((s = le(s)), re(t, e, void 0, s), ne(t, s)),
        ce = (e, t, s) => ((s = le(s)), re(t, e.parentNode, e, s), ne(t, s)),
        de = (e, t, s) => ((s = le(s)), (t.domNode = e), se(e, t, s), ne(t, s)),
        ue = (e, t, s) => (
          (s = le(s)),
          re(t, e.parentNode, e, s),
          e.parentNode.removeChild(e),
          ne(t, s)
        );
      ae = Array.prototype.find
        ? (e, t) => e.find(t)
        : (e, t) => e.filter(t)[0];
      const pe = {
          handleInterceptedEvent: (e, t, s, r) => (
            e.scheduleRender(),
            t.properties[`on${r.type}`].apply(t.properties.bind || s, [r])
          ),
        },
        fe = {
          namespace: void 0,
          performanceLogger: () => {},
          eventHandlerInterceptor: void 0,
          styleApplyer: (e, t, s) => {
            e.style[t] = s;
          },
        },
        _e = (e, t, s = !1) => {
          let r = e;
          return (
            t.forEach((e, i) => {
              var n;
              const o =
                null != (n = r) && n.children
                  ? ((e, t) => e.find(t))(r.children, (t) => t.domNode === e)
                  : void 0;
              (s && !o && i !== t.length - 1) || (r = o);
            }),
            r
          );
        };
      var me = s(77210),
        ge = s(99880);
      let ve;
      ve = 'components/assets';
      const ye = Symbol('widget'),
        we = [],
        be = {},
        Se = new WeakMap();
      function Ie(e, t) {
        let s = t.children;
        if (s && s.length)
          for (let t = 0; t < s.length; ++t) s[t] = Ie(e, s[t]);
        else s = we;
        const r = t.vnodeSelector;
        if (Te(r)) {
          const i = t.properties || be,
            n = i.key || r;
          return {
            vnodeSelector: 'div',
            properties: {
              key: n,
              afterCreate: Ae,
              afterUpdate: ke,
              afterRemoved: Ce,
              parentWidget: e,
              widgetConstructor: r,
              widgetProperties: { ...i, key: n, children: s },
            },
            children: void 0,
            text: void 0,
            domNode: null,
          };
        }
        return t;
      }
      function Ae(
        e,
        t,
        s,
        { parentWidget: r, widgetConstructor: i, widgetProperties: n },
      ) {
        const o = new i(n);
        (o.container = e),
          Se.set(e, o),
          null == o.afterCreate || o.afterCreate(o, e),
          r._internalHandles.add((0, U.kB)(() => Ce(e)));
      }
      function ke(e, t, s, { widgetProperties: r }) {
        const i = Se.get(e);
        i && (i.set(r), null == i.afterUpdate || i.afterUpdate(i, e));
      }
      function Ce(e) {
        const t = Se.get(e);
        t && (t.destroy(), Se.delete(e));
      }
      function Te(e) {
        return 'function' == typeof e && e[ye];
      }
      var xe = s(70171),
        Ue = s(94443);
      const Oe = 'esri.widgets.Widget',
        Ee = y.Z.getLogger(Oe);
      let Pe = 0;
      function Re(e, t) {
        for (const s in t)
          null != e[s] &&
            ('object' == typeof e[s] && 'object' == typeof t[s]
              ? Re(e[s], t[s])
              : (e[s] = t[s]));
        return e;
      }
      const De = ((e) => {
        let t;
        const s = { ...pe, ...e },
          r = ((n = s), { ...fe, ...n }),
          i = r.performanceLogger;
        var n;
        let o,
          a = !0,
          l = !1;
        const h = [],
          c = [],
          d = (e, n, o) => {
            let a;
            (r.eventHandlerInterceptor = (e, r, n, o) =>
              function (e) {
                let r;
                i('domEvent', e);
                const n = ((e, t) => {
                    const s = [];
                    for (; e && e !== t; ) s.push(e), (e = e.parentNode);
                    return s;
                  })(e.currentTarget, a.domNode),
                  o = n.some((e) => {
                    var t;
                    return customElements.get(
                      null == e || null == (t = e.tagName)
                        ? void 0
                        : t.toLowerCase(),
                    );
                  });
                if (e.eventPhase !== Event.CAPTURING_PHASE && o) {
                  const t = e.composedPath(),
                    s = t
                      .slice(t.indexOf(e.currentTarget), t.indexOf(a.domNode))
                      .filter((e) => e.getRootNode() === e.ownerDocument)
                      .reverse();
                  r = _e(a.getLastRender(), s, !0);
                } else n.reverse(), (r = _e(a.getLastRender(), n));
                let l;
                return (
                  r && (l = s.handleInterceptedEvent(t, r, this, e)),
                  i('domEventProcessed', e),
                  l
                );
              }),
              null == s.postProcessProjectionOptions ||
                s.postProcessProjectionOptions(r);
            const l = o();
            (a = e(n, l, r)),
              h.push(a),
              c.push(o),
              s.afterFirstVNodeRendered && s.afterFirstVNodeRendered(a, l);
          };
        let u = () => {
          if (((o = void 0), a)) {
            (a = !1), i('renderStart', void 0);
            for (let e = 0; e < h.length; e++) {
              const t = c[e]();
              i('rendered', void 0), h[e].update(t), i('patched', void 0);
            }
            i('renderDone', void 0), (a = !0);
          }
        };
        return (
          s.modifyDoRenderImplementation &&
            (u = s.modifyDoRenderImplementation(u, h, c)),
          (t = {
            renderNow: u,
            scheduleRender: () => {
              o || l || (o = requestAnimationFrame(u));
            },
            stop: () => {
              o && (cancelAnimationFrame(o), (o = void 0)), (l = !0);
            },
            resume: () => {
              (l = !1), (a = !0), t.scheduleRender();
            },
            append: (e, t) => {
              d(he, e, t);
            },
            insertBefore: (e, t) => {
              d(ce, e, t);
            },
            merge: (e, t) => {
              d(de, e, t);
            },
            replace: (e, t) => {
              d(ue, e, t);
            },
            detach: (e) => {
              for (let t = 0; t < c.length; t++)
                if (c[t] === e) return c.splice(t, 1), h.splice(t, 1)[0];
              throw new Error('renderFunction was not found');
            },
          }),
          t
        );
      })({
        postProcessProjectionOptions(e) {
          const t = e.eventHandlerInterceptor,
            s = /capture$/i;
          e.eventHandlerInterceptor = (e, r, i, n) => {
            const o = t(e, r, i, n),
              a = s.test(e);
            if (!((e = e.replace(s, '')).toLowerCase() in i) || a) {
              const t = e[2].toLowerCase() + e.slice(3),
                s = (e) => o.call(i, e);
              i.addEventListener(t, s, a);
              const r = () => i.removeEventListener(t, s, a),
                l = n.afterRemoved;
              n.afterRemoved = (e) => {
                null == l || l(e), r();
              };
            }
            return o;
          };
        },
        handleInterceptedEvent(e, t, s, r) {
          const { eventPhase: i, type: n } = r,
            o = i === Event.CAPTURING_PHASE;
          let a = `on${n}${o ? 'capture' : ''}`;
          const l = t.properties;
          (a in l ||
            ((a = `on${n[0].toUpperCase()}${n.slice(1)}${o ? 'Capture' : ''}`),
            a in l)) &&
            (E(), e.scheduleRender(), l[a].call(l.bind || s, r));
        },
      });
      let Ne = !1,
        Le = class extends (0, b.v)(l.Z.EventedAccessor) {
          constructor(e, t) {
            super(e, t),
              (this._attached = !1),
              (this._internalHandles = new v.Z()),
              (this._projector = De),
              (this._readyForTrueRender = !1),
              (this.domNode = null),
              (this.iconClass = 'esri-icon-checkbox-unchecked'),
              (this.label = this.declaredClass.split('.').pop()),
              (this.visible = !0),
              (this.key = this),
              (this._loadLocale = (0, u.Ds)(async () => {
                if (
                  this._messageBundleProps &&
                  this._messageBundleProps.length
                ) {
                  const e = await (0, u.as)(
                    this._messageBundleProps.map(
                      async ({ bundlePath: e, propertyName: t }) => {
                        let s = await (0, Ue.ME)(e);
                        this.uiStrings &&
                          Object.keys(this.uiStrings) &&
                          (s = Re((0, c.d9)(s), this.uiStrings)),
                          (this[t] = s);
                      },
                    ),
                  );
                  for (const t of e)
                    t.error &&
                      Ee.error(
                        'widget-intl:locale-error',
                        this.declaredClass,
                        t.error,
                      );
                }
                await this.loadLocale();
              })),
              (0, me.YY)((0, p.hF)((0, ge.V)('components/assets')));
            const s =
              getComputedStyle(document.body)
                .getPropertyValue('--esri-calcite-theme-name')
                .replace(/\s|'|"/g, '') || 'light';
            ['light', 'dark'].includes(s) ||
              (0, g.x9)(
                Ee,
                'The following themes are deprecated: light-blue, dark-blue, light-green, dark-green, light-purple, dark-purple, light-red, and dark-red.',
                {
                  version: '4.19',
                  warnOnce: !0,
                  see: 'https://developers.arcgis.com/javascript/latest/styling/',
                },
              );
            const r = 'esri-widget-uid-' + (0, I.D)(),
              i = this.render.bind(this);
            this._trackingTarget = new C.M(() => this.scheduleRender());
            const n = () => {
              var e;
              if (!this._readyForTrueRender || this.destroyed) return null;
              if (!this.visible)
                return {
                  vnodeSelector: 'div',
                  properties: {
                    key: r,
                    class: '',
                    styles: { display: 'none' },
                  },
                  domNode: void 0,
                  children: void 0,
                  text: void 0,
                };
              const t = i();
              let { properties: s } = t;
              s || (t.properties = s = {});
              let { key: n, styles: o } = s;
              n || (s.key = r),
                o || (s.styles = o = {}),
                o.display || (o.display = '');
              let a = 0;
              return (
                null == (e = t.children) ||
                  e.forEach((e) => {
                    if (Te(e.vnodeSelector)) return;
                    let { properties: t } = e;
                    t || (e.properties = t = {}),
                      t.key || (t.key = `${this.id}--${a++}`);
                  }),
                Ie(this, t)
              );
            };
            (this.render = () => {
              if (Ne) return n();
              let e = ((t = this), O.get(t));
              var t;
              if (e) return e;
              this._trackingTarget.clear(), (Ne = !0);
              try {
                e = (0, k.LJ)(this._trackingTarget, n);
              } finally {
                Ne = !1;
              }
              return (
                (function (e, t) {
                  O.set(e, t);
                })(this, e),
                e
              );
            }),
              this.addResolvingPromise(
                (this._resourcesFetch = this.beforeFirstRender().then(() => {
                  (this._readyForTrueRender = !0), this._postInitialize();
                })),
              );
          }
          normalizeCtorArgs(e, t) {
            const s = { ...e };
            return t && (s.container = t), s;
          }
          postInitialize() {}
          beforeFirstRender() {
            return Promise.all([this.loadDependencies(), this._loadLocale()])
              .then(() => {})
              .catch(u.H9);
          }
          async loadDependencies() {}
          async loadLocale() {}
          destroy() {
            this.destroyed ||
              ((this._trackingTarget = (0, w.SC)(this._trackingTarget)),
              (this.viewModel = (0, w.SC)(this.viewModel)),
              this._detach(this.container),
              this._set('container', null),
              this._internalHandles.destroy(),
              this._emitter.clear(),
              (this.render = () => null),
              (this._projector = null),
              P(this));
          }
          set container(e) {
            this._get('container') || this._set('container', e);
          }
          castContainer(e) {
            return (function (e) {
              return 'string' == typeof e ? document.getElementById(e) : e;
            })(e);
          }
          get id() {
            return (
              this._get('id') ||
              this.get('container.id') ||
              Date.now().toString(16) + '-widget-' + Pe++
            );
          }
          set id(e) {
            e && this._set('id', e);
          }
          get renderable() {
            return this._resourcesFetch;
          }
          get test() {
            return {
              projector: this._projector,
              handles: this._internalHandles,
            };
          }
          render() {
            throw new Error('not implemented');
          }
          scheduleRender() {
            this.destroyed || (P(this), this._projector.scheduleRender());
          }
          classes(...e) {
            return R.apply(this, e);
          }
          own(e) {
            arguments.length > 1 && (e = Array.prototype.slice.call(arguments)),
              this._internalHandles.add(e);
          }
          renderNow() {
            P(this), this._projector.renderNow();
          }
          _postInitialize() {
            var e;
            if (this.destroyed) return;
            this.scheduleRender(),
              null != (e = this._delegatedEventNames) &&
                e.length &&
                this._internalHandles.add(
                  (0, S.YP)(
                    () => this.viewModel,
                    (e, t) => {
                      t && this._internalHandles.remove('delegated-events'),
                        e &&
                          this._internalHandles.add(
                            this._delegatedEventNames.map((t) =>
                              e.on(t, (e) => {
                                this.emit(t, e);
                              }),
                            ),
                            'delegated-events',
                          );
                    },
                    S.nn,
                  ),
                ),
              this.postInitialize();
            const t = async () => {
              await this._loadLocale().catch(u.H9), this.scheduleRender();
            };
            this._internalHandles.add([
              (0, xe.qe)(t),
              (0, S.YP)(() => this.uiStrings, t),
              (0, S.gx)(
                () => this.container,
                (e) => {
                  this.destroyed || this._attach(e);
                },
                { initial: !0, once: !0 },
              ),
            ]);
          }
          _attach(e) {
            e && (this._projector.merge(e, this.render), (this._attached = !0));
          }
          _detach(e) {
            e &&
              this._attached &&
              (this._projector.detach(this.render),
              e.parentNode && e.parentNode.removeChild(e),
              (this._attached = !1));
          }
        };
      (Le[ye] = !0),
        (0, i._)([(0, f.Cb)()], Le.prototype, '_readyForTrueRender', void 0),
        (0, i._)([(0, f.Cb)({ value: null })], Le.prototype, 'container', null),
        (0, i._)([(0, A.p)('container')], Le.prototype, 'castContainer', null),
        (0, i._)(
          [(0, f.Cb)({ aliasOf: 'container' })],
          Le.prototype,
          'domNode',
          void 0,
        ),
        (0, i._)([(0, f.Cb)()], Le.prototype, 'iconClass', void 0),
        (0, i._)([(0, f.Cb)()], Le.prototype, 'id', null),
        (0, i._)([(0, f.Cb)()], Le.prototype, 'label', void 0),
        (0, i._)([(0, f.Cb)()], Le.prototype, 'renderable', null),
        (0, i._)([(0, f.Cb)()], Le.prototype, 'uiStrings', void 0),
        (0, i._)([(0, f.Cb)()], Le.prototype, 'viewModel', void 0),
        (0, i._)([(0, f.Cb)()], Le.prototype, 'visible', void 0),
        (0, i._)([(0, f.Cb)()], Le.prototype, 'key', void 0),
        (0, i._)([(0, f.Cb)()], Le.prototype, 'children', void 0),
        (0, i._)([(0, f.Cb)()], Le.prototype, 'afterCreate', void 0),
        (0, i._)([(0, f.Cb)()], Le.prototype, 'afterUpdate', void 0),
        (0, i._)([(0, f.Cb)()], Le.prototype, 'afterRemoved', void 0),
        (Le = (0, i._)([(0, _.j)(Oe)], Le));
      const Me = Le;
      function je(e) {
        return function (t, s) {
          t.hasOwnProperty('_messageBundleProps') ||
            (t._messageBundleProps = t._messageBundleProps
              ? t._messageBundleProps.slice()
              : []),
            t._messageBundleProps.push({ bundlePath: e, propertyName: s });
        };
      }
      var qe = function (e) {
          return {
            vnodeSelector: '',
            properties: void 0,
            children: void 0,
            text: e.toString(),
            domNode: null,
          };
        },
        Ve = function (e, t) {
          for (var s = 0, r = e.length; s < r; s++) {
            var i = e[s];
            Array.isArray(i)
              ? Ve(i, t)
              : null != i &&
                !1 !== i &&
                (i.hasOwnProperty('vnodeSelector') || (i = qe(i)), t.push(i));
          }
        };
      function Be(e, t, ...s) {
        return 'function' != typeof e || Te(e)
          ? (function (e, t) {
              for (var s = [], r = 2; r < arguments.length; r++)
                s[r - 2] = arguments[r];
              if (1 === s.length && 'string' == typeof s[0])
                return {
                  vnodeSelector: e,
                  properties: t || void 0,
                  children: void 0,
                  text: s[0],
                  domNode: null,
                };
              var i = [];
              return (
                Ve(s, i),
                {
                  vnodeSelector: e,
                  properties: t || void 0,
                  children: i,
                  text: void 0,
                  domNode: null,
                }
              );
            })(e, t, ...s)
          : e(t, ...s);
      }
      const Ze = 'esri-identity-form__group',
        Fe = 'esri-identity-form__label',
        ze = 'esri-input',
        $e = 'esri-button';
      let He = class extends Me {
        constructor(e, t) {
          super(e, t),
            (this._usernameInputNode = null),
            (this._passwordInputNode = null),
            (this.messages = null),
            (this.signingIn = !1),
            (this.server = null),
            (this.resource = null),
            (this.error = null),
            (this.oAuthPrompt = !1);
        }
        render() {
          const {
              error: e,
              server: t,
              resource: s,
              signingIn: r,
              oAuthPrompt: i,
              messages: n,
            } = this,
            o = Be(
              'div',
              { class: Ze },
              (0, m.n)(i ? n.oAuthInfo : n.info, {
                server: /\.arcgis\.com/i.test(t) ? 'ArcGIS Online' : t,
                resource: `(${s || n.lblItem})`,
              }),
            ),
            a = i
              ? null
              : Be(
                  'div',
                  { class: Ze, key: 'username' },
                  Be(
                    'label',
                    { class: Fe },
                    n.lblUser,
                    Be('input', {
                      value: '',
                      required: !0,
                      autocomplete: 'off',
                      spellcheck: !1,
                      type: 'text',
                      bind: this,
                      afterCreate: D,
                      'data-node-ref': '_usernameInputNode',
                      class: ze,
                    }),
                  ),
                ),
            l = i
              ? null
              : Be(
                  'div',
                  { class: Ze, key: 'password' },
                  Be(
                    'label',
                    { class: Fe },
                    n.lblPwd,
                    Be('input', {
                      value: '',
                      required: !0,
                      type: 'password',
                      bind: this,
                      afterCreate: D,
                      'data-node-ref': '_passwordInputNode',
                      class: ze,
                    }),
                  ),
                ),
            h = Be(
              'div',
              { class: this.classes(Ze, 'esri-identity-form__footer') },
              Be('input', {
                type: 'submit',
                disabled: !!r,
                value: r ? n.lblSigning : n.lblOk,
                class: $e,
              }),
              Be('input', {
                type: 'button',
                value: n.lblCancel,
                bind: this,
                onclick: this._cancel,
                class: this.classes($e, 'esri-button--secondary'),
              }),
            ),
            c = e
              ? Be(
                  'div',
                  null,
                  e.details && e.details.httpStatus
                    ? n.invalidUser
                    : n.noAuthService,
                )
              : null;
          return Be(
            'form',
            { class: 'esri-identity-form', bind: this, onsubmit: this._submit },
            o,
            c,
            a,
            l,
            h,
          );
        }
        _cancel() {
          this._set('signingIn', !1),
            this._usernameInputNode && (this._usernameInputNode.value = ''),
            this._passwordInputNode && (this._passwordInputNode.value = ''),
            this.emit('cancel');
        }
        _submit(e) {
          e.preventDefault(), this._set('signingIn', !0);
          const t = this.oAuthPrompt
            ? {}
            : {
                username:
                  this._usernameInputNode && this._usernameInputNode.value,
                password:
                  this._passwordInputNode && this._passwordInputNode.value,
              };
          this.emit('submit', t);
        }
      };
      (0, i._)(
        [(0, f.Cb)(), je('esri/identity/t9n/identity')],
        He.prototype,
        'messages',
        void 0,
      ),
        (0, i._)([(0, f.Cb)()], He.prototype, 'signingIn', void 0),
        (0, i._)([(0, f.Cb)()], He.prototype, 'server', void 0),
        (0, i._)([(0, f.Cb)()], He.prototype, 'resource', void 0),
        (0, i._)([(0, f.Cb)()], He.prototype, 'error', void 0),
        (0, i._)([(0, f.Cb)()], He.prototype, 'oAuthPrompt', void 0),
        (He = (0, i._)([(0, _.j)('esri.identity.IdentityForm')], He));
      const Ge = He;
      var Je = s(44291);
      const We = 'esri-identity-modal__content';
      let Ye = class extends Me {
        constructor(e, t) {
          super(e, t),
            (this.container = document.createElement('div')),
            (this.content = null),
            (this.open = !1),
            (this._close = () => {
              this.open = !1;
            }),
            document.body.appendChild(this.container),
            this.own(this.watch('open', () => this._toggleFocusTrap()));
        }
        destroy() {
          this._destroyFocusTrap();
        }
        render() {
          const e = this.id,
            { open: t, content: s, title: r, messages: i } = this,
            n = t && !!s,
            o = {
              'esri-identity-modal--open': n,
              'esri-identity-modal--closed': !n,
            },
            a = Be(
              'button',
              {
                class: 'esri-identity-modal__close-button',
                'aria-label': i.close,
                title: i.close,
                bind: this,
                onclick: this._close,
              },
              Be('span', { 'aria-hidden': 'true', class: 'esri-icon-close' }),
            ),
            l = `${e}_title`,
            h = `${e}_content`,
            c = r
              ? Be('h1', { id: l, class: 'esri-identity-modal__title' }, r)
              : null,
            d = n
              ? Be(
                  'div',
                  {
                    bind: this,
                    class: 'esri-identity-modal__dialog',
                    role: 'dialog',
                    'aria-labelledby': l,
                    'aria-describedby': h,
                    afterCreate: this._createFocusTrap,
                  },
                  a,
                  c,
                  this._renderContent(h),
                )
              : null;
          return Be(
            'div',
            { tabIndex: -1, class: this.classes('esri-identity-modal', o) },
            d,
          );
        }
        _destroyFocusTrap() {
          var e;
          null == (e = this._focusTrap) || e.deactivate({ onDeactivate: null }),
            (this._focusTrap = null);
        }
        _toggleFocusTrap() {
          const { _focusTrap: e, open: t } = this;
          e && (t ? e.activate() : e.deactivate());
        }
        _createFocusTrap(e) {
          this._destroyFocusTrap();
          const t = requestAnimationFrame(() => {
            (this._focusTrap = (0, Je.v)(e, {
              initialFocus: 'input',
              onDeactivate: this._close,
            })),
              this._toggleFocusTrap();
          });
          this.own((0, U.kB)(() => cancelAnimationFrame(t)));
        }
        _renderContent(e) {
          const t = this.content;
          return 'string' == typeof t
            ? Be('div', { class: We, id: e, innerHTML: t })
            : (function (e) {
                return e && 'function' == typeof e.render;
              })(t)
            ? Be('div', { class: We, id: e }, t.render())
            : t instanceof HTMLElement
            ? Be('div', {
                class: We,
                id: e,
                bind: t,
                afterCreate: this._attachToNode,
              })
            : null;
        }
        _attachToNode(e) {
          e.appendChild(this);
        }
      };
      (0, i._)(
        [(0, f.Cb)({ readOnly: !0 })],
        Ye.prototype,
        'container',
        void 0,
      ),
        (0, i._)([(0, f.Cb)()], Ye.prototype, 'content', void 0),
        (0, i._)([(0, f.Cb)()], Ye.prototype, 'open', void 0),
        (0, i._)(
          [(0, f.Cb)(), je('esri/t9n/common')],
          Ye.prototype,
          'messages',
          void 0,
        ),
        (0, i._)(
          [(0, f.Cb)({ aliasOf: 'messages.auth.signIn' })],
          Ye.prototype,
          'title',
          void 0,
        ),
        (Ye = (0, i._)([(0, _.j)('esri.identity.IdentityModal')], Ye));
      const Ke = Ye,
        Xe = 'esriJSAPIOAuth';
      class Qe {
        constructor(e, t) {
          (this.oAuthInfo = null),
            (this.storage = null),
            (this.appId = null),
            (this.codeVerifier = null),
            (this.expires = null),
            (this.refreshToken = null),
            (this.ssl = null),
            (this.stateUID = null),
            (this.token = null),
            (this.userId = null),
            (this.oAuthInfo = e),
            (this.storage = t),
            this._init();
        }
        isValid() {
          let e = !1;
          if (
            this.oAuthInfo &&
            this.userId &&
            (this.refreshToken || this.token)
          )
            if (null == this.expires && this.refreshToken) e = !0;
            else {
              const t = Date.now();
              this.expires > t &&
                (this.expires - t) / 1e3 >
                  60 * this.oAuthInfo.minTimeUntilExpiration &&
                (e = !0);
            }
          return e;
        }
        save() {
          if (!this.storage) return !1;
          const e = this._load(),
            t = this.oAuthInfo;
          if (t && t.authNamespace && t.portalUrl) {
            let s = e[t.authNamespace];
            s || (s = e[t.authNamespace] = {}),
              this.appId || (this.appId = t.appId),
              (s[t.portalUrl] = {
                appId: this.appId,
                codeVerifier: this.codeVerifier,
                expires: this.expires,
                refreshToken: this.refreshToken,
                ssl: this.ssl,
                stateUID: this.stateUID,
                token: this.token,
                userId: this.userId,
              });
            try {
              this.storage.setItem(Xe, JSON.stringify(e));
            } catch (e) {
              return console.warn(e), !1;
            }
            return !0;
          }
          return !1;
        }
        destroy() {
          const e = this._load(),
            t = this.oAuthInfo;
          if (
            t &&
            t.appId &&
            t.portalUrl &&
            (null == this.expires || this.expires > Date.now()) &&
            (this.refreshToken || this.token)
          ) {
            const e =
                t.portalUrl.replace(/^http:/i, 'https:') +
                '/sharing/rest/oauth2/revokeToken',
              s = new FormData();
            if (
              (s.append('f', 'json'),
              s.append('auth_token', this.refreshToken || this.token),
              s.append('client_id', t.appId),
              s.append(
                'token_type_hint',
                this.refreshToken ? 'refresh_token' : 'access_token',
              ),
              'function' == typeof navigator.sendBeacon)
            )
              navigator.sendBeacon(e, s);
            else {
              const t = new XMLHttpRequest();
              t.open('POST', e), t.send(s);
            }
          }
          if (t && t.authNamespace && t.portalUrl && this.storage) {
            const s = e[t.authNamespace];
            if (s) {
              delete s[t.portalUrl];
              try {
                this.storage.setItem(Xe, JSON.stringify(e));
              } catch (e) {
                console.log(e);
              }
            }
          }
          t && ((t._oAuthCred = null), (this.oAuthInfo = null));
        }
        _init() {
          const e = this._load(),
            t = this.oAuthInfo;
          if (t && t.authNamespace && t.portalUrl) {
            let s = e[t.authNamespace];
            s &&
              ((s = s[t.portalUrl]),
              s &&
                ((this.appId = s.appId),
                (this.codeVerifier = s.codeVerifier),
                (this.expires = s.expires),
                (this.refreshToken = s.refreshToken),
                (this.ssl = s.ssl),
                (this.stateUID = s.stateUID),
                (this.token = s.token),
                (this.userId = s.userId)));
          }
        }
        _load() {
          let e = {};
          if (this.storage) {
            const t = this.storage.getItem(Xe);
            if (t)
              try {
                e = JSON.parse(t);
              } catch (e) {
                console.warn(e);
              }
          }
          return e;
        }
      }
      Qe.prototype.declaredClass = 'esri.identity.OAuthCredential';
      var et,
        tt = s(96674);
      let st = (et = class extends tt.wq {
        constructor(e) {
          super(e),
            (this._oAuthCred = null),
            (this.appId = null),
            (this.authNamespace = '/'),
            (this.expiration = 20160),
            (this.flowType = 'auto'),
            (this.forceLogin = !1),
            (this.forceUserId = !1),
            (this.locale = null),
            (this.minTimeUntilExpiration = 30),
            (this.popup = !1),
            (this.popupCallbackUrl = 'oauth-callback.html'),
            (this.popupWindowFeatures =
              'height=490,width=800,resizable,scrollbars,status'),
            (this.portalUrl = 'https://www.arcgis.com'),
            (this.preserveUrlHash = !1),
            (this.userId = null);
        }
        clone() {
          return et.fromJSON(this.toJSON());
        }
      });
      (0, i._)(
        [(0, f.Cb)({ json: { write: !0 } })],
        st.prototype,
        'appId',
        void 0,
      ),
        (0, i._)(
          [(0, f.Cb)({ json: { write: !0 } })],
          st.prototype,
          'authNamespace',
          void 0,
        ),
        (0, i._)(
          [(0, f.Cb)({ json: { write: !0 } })],
          st.prototype,
          'expiration',
          void 0,
        ),
        (0, i._)(
          [(0, f.Cb)({ json: { write: !0 } })],
          st.prototype,
          'flowType',
          void 0,
        ),
        (0, i._)(
          [(0, f.Cb)({ json: { write: !0 } })],
          st.prototype,
          'forceLogin',
          void 0,
        ),
        (0, i._)(
          [(0, f.Cb)({ json: { write: !0 } })],
          st.prototype,
          'forceUserId',
          void 0,
        ),
        (0, i._)(
          [(0, f.Cb)({ json: { write: !0 } })],
          st.prototype,
          'locale',
          void 0,
        ),
        (0, i._)(
          [(0, f.Cb)({ json: { write: !0 } })],
          st.prototype,
          'minTimeUntilExpiration',
          void 0,
        ),
        (0, i._)(
          [(0, f.Cb)({ json: { write: !0 } })],
          st.prototype,
          'popup',
          void 0,
        ),
        (0, i._)(
          [(0, f.Cb)({ json: { write: !0 } })],
          st.prototype,
          'popupCallbackUrl',
          void 0,
        ),
        (0, i._)(
          [(0, f.Cb)({ json: { write: !0 } })],
          st.prototype,
          'popupWindowFeatures',
          void 0,
        ),
        (0, i._)(
          [(0, f.Cb)({ json: { write: !0 } })],
          st.prototype,
          'portalUrl',
          void 0,
        ),
        (0, i._)(
          [(0, f.Cb)({ json: { write: !0 } })],
          st.prototype,
          'preserveUrlHash',
          void 0,
        ),
        (0, i._)(
          [(0, f.Cb)({ json: { write: !0 } })],
          st.prototype,
          'userId',
          void 0,
        ),
        (st = et = (0, i._)([(0, _.j)('esri.identity.OAuthInfo')], st));
      const rt = st;
      let it = class extends tt.wq {
        constructor(e) {
          super(e),
            (this.adminTokenServiceUrl = null),
            (this.currentVersion = null),
            (this.hasPortal = null),
            (this.hasServer = null),
            (this.owningSystemUrl = null),
            (this.owningTenant = null),
            (this.server = null),
            (this.shortLivedTokenValidity = null),
            (this.tokenServiceUrl = null),
            (this.webTierAuth = null);
        }
      };
      (0, i._)(
        [(0, f.Cb)({ json: { write: !0 } })],
        it.prototype,
        'adminTokenServiceUrl',
        void 0,
      ),
        (0, i._)(
          [(0, f.Cb)({ json: { write: !0 } })],
          it.prototype,
          'currentVersion',
          void 0,
        ),
        (0, i._)(
          [(0, f.Cb)({ json: { write: !0 } })],
          it.prototype,
          'hasPortal',
          void 0,
        ),
        (0, i._)(
          [(0, f.Cb)({ json: { write: !0 } })],
          it.prototype,
          'hasServer',
          void 0,
        ),
        (0, i._)(
          [(0, f.Cb)({ json: { write: !0 } })],
          it.prototype,
          'owningSystemUrl',
          void 0,
        ),
        (0, i._)(
          [(0, f.Cb)({ json: { write: !0 } })],
          it.prototype,
          'owningTenant',
          void 0,
        ),
        (0, i._)(
          [(0, f.Cb)({ json: { write: !0 } })],
          it.prototype,
          'server',
          void 0,
        ),
        (0, i._)(
          [(0, f.Cb)({ json: { write: !0 } })],
          it.prototype,
          'shortLivedTokenValidity',
          void 0,
        ),
        (0, i._)(
          [(0, f.Cb)({ json: { write: !0 } })],
          it.prototype,
          'tokenServiceUrl',
          void 0,
        ),
        (0, i._)(
          [(0, f.Cb)({ json: { write: !0 } })],
          it.prototype,
          'webTierAuth',
          void 0,
        ),
        (it = (0, i._)([(0, _.j)('esri.identity.ServerInfo')], it));
      const nt = it,
        ot = {},
        at = (e) => {
          const t = new p.R9(e.owningSystemUrl).host,
            s = new p.R9(e.server).host,
            r = /.+\.arcgis\.com$/i;
          return r.test(t) && r.test(s);
        },
        lt = (e, t) => !!(at(e) && t && t.some((t) => t.test(e.server)));
      let ht = null,
        ct = null;
      try {
        (ht = window.localStorage), (ct = window.sessionStorage);
      } catch {}
      class dt extends l.Z {
        constructor() {
          super(),
            (this._portalConfig = globalThis.esriGeowConfig),
            (this.serverInfos = []),
            (this.oAuthInfos = []),
            (this.credentials = []),
            (this._soReqs = []),
            (this._xoReqs = []),
            (this._portals = []),
            (this.defaultOAuthInfo = null),
            (this.defaultTokenValidity = 60),
            (this.dialog = null),
            (this.formConstructor = Ge),
            (this.tokenValidity = null),
            (this.normalizeWebTierAuth = !1),
            (this._appOrigin =
              'null' !== window.origin
                ? window.origin
                : window.location.origin),
            (this._appUrlObj = (0, p.mN)(window.location.href)),
            (this._busy = null),
            (this._rejectOnPersistedPageShow = !1),
            (this._oAuthLocationParams = null),
            (this._gwTokenUrl = '/sharing/rest/generateToken'),
            (this._agsRest = '/rest/services'),
            (this._agsPortal = /\/sharing(\/|$)/i),
            (this._agsAdmin = /(https?:\/\/[^\/]+\/[^\/]+)\/admin\/?(\/.*)?$/i),
            (this._adminSvcs = /\/rest\/admin\/services(\/|$)/i),
            (this._gwDomains = [
              {
                regex: /^https?:\/\/www\.arcgis\.com/i,
                customBaseUrl: 'maps.arcgis.com',
                tokenServiceUrl:
                  'https://www.arcgis.com/sharing/rest/generateToken',
              },
              {
                regex: /^https?:\/\/(?:dev|[a-z\d-]+\.mapsdev)\.arcgis\.com/i,
                customBaseUrl: 'mapsdev.arcgis.com',
                tokenServiceUrl:
                  'https://dev.arcgis.com/sharing/rest/generateToken',
              },
              {
                regex:
                  /^https?:\/\/(?:devext|[a-z\d-]+\.mapsdevext)\.arcgis\.com/i,
                customBaseUrl: 'mapsdevext.arcgis.com',
                tokenServiceUrl:
                  'https://devext.arcgis.com/sharing/rest/generateToken',
              },
              {
                regex: /^https?:\/\/(?:qaext|[a-z\d-]+\.mapsqa)\.arcgis\.com/i,
                customBaseUrl: 'mapsqa.arcgis.com',
                tokenServiceUrl:
                  'https://qaext.arcgis.com/sharing/rest/generateToken',
              },
              {
                regex: /^https?:\/\/[a-z\d-]+\.maps\.arcgis\.com/i,
                customBaseUrl: 'maps.arcgis.com',
                tokenServiceUrl:
                  'https://www.arcgis.com/sharing/rest/generateToken',
              },
            ]),
            (this._legacyFed = []),
            (this._regexSDirUrl = /http.+\/rest\/services\/?/gi),
            (this._regexServerType =
              /(\/(FeatureServer|GPServer|GeoDataServer|GeocodeServer|GeoenrichmentServer|GeometryServer|GlobeServer|ImageServer|MapServer|MobileServer|NAServer|NetworkDiagramServer|OGCFeatureServer|ParcelFabricServer|RelationalCatalogServer|SceneServer|StreamServer|UtilityNetworkServer|ValidationServer|VectorTileServer|VersionManagementServer)).*/gi),
            (this._gwUser = /http.+\/users\/([^\/]+)\/?.*/i),
            (this._gwItem = /http.+\/items\/([^\/]+)\/?.*/i),
            (this._gwGroup = /http.+\/groups\/([^\/]+)\/?.*/i),
            (this._rePortalTokenSvc = /\/sharing(\/rest)?\/generatetoken/i),
            (this._createDefaultOAuthInfo = !0),
            (this._hasTestedIfAppIsOnPortal = !1),
            this._getOAuthLocationParams(),
            window.addEventListener('pageshow', (e) => {
              this._pageShowHandler(e);
            });
        }
        registerServers(e) {
          const t = this.serverInfos;
          t
            ? ((e = e.filter((e) => !this.findServerInfo(e.server))),
              (this.serverInfos = t.concat(e)))
            : (this.serverInfos = e),
            e.forEach((e) => {
              e.owningSystemUrl && this._portals.push(e.owningSystemUrl),
                e.hasPortal && this._portals.push(e.server);
            });
        }
        registerOAuthInfos(e) {
          const t = this.oAuthInfos;
          if (t) {
            for (const s of e) {
              const e = this.findOAuthInfo(s.portalUrl);
              e && t.splice(t.indexOf(e), 1);
            }
            this.oAuthInfos = t.concat(e);
          } else this.oAuthInfos = e;
        }
        registerToken(e) {
          e = { ...e };
          const t = this._sanitizeUrl(e.server),
            s = this._isServerRsrc(t);
          let r,
            i = this.findServerInfo(t),
            n = !0;
          i ||
            ((i = new nt()),
            (i.server = this._getServerInstanceRoot(t)),
            s
              ? (i.hasServer = !0)
              : ((i.tokenServiceUrl = this._getTokenSvcUrl(t)),
                (i.hasPortal = !0)),
            this.registerServers([i])),
            (r = this._findCredential(t)),
            r
              ? (delete e.server, Object.assign(r, e), (n = !1))
              : ((r = new ut({
                  userId: e.userId,
                  server: i.server,
                  token: e.token,
                  expires: e.expires,
                  ssl: e.ssl,
                  scope: s ? 'server' : 'portal',
                })),
                (r.resources = [t]),
                this.credentials.push(r)),
            r.emitTokenChange(!1),
            n || r.refreshServerTokens();
        }
        toJSON() {
          return (0, c.yd)({
            serverInfos: this.serverInfos.map((e) => e.toJSON()),
            oAuthInfos: this.oAuthInfos.map((e) => e.toJSON()),
            credentials: this.credentials.map((e) => e.toJSON()),
          });
        }
        initialize(e) {
          if (!e) return;
          'string' == typeof e && (e = JSON.parse(e));
          const t = e.serverInfos,
            s = e.oAuthInfos,
            r = e.credentials;
          if (t) {
            const e = [];
            t.forEach((t) => {
              t.server &&
                t.tokenServiceUrl &&
                e.push(t.declaredClass ? t : new nt(t));
            }),
              e.length && this.registerServers(e);
          }
          if (s) {
            const e = [];
            s.forEach((t) => {
              t.appId && e.push(t.declaredClass ? t : new rt(t));
            }),
              e.length && this.registerOAuthInfos(e);
          }
          r &&
            r.forEach((e) => {
              e.server &&
                e.token &&
                e.expires &&
                e.expires > Date.now() &&
                ((e = e.declaredClass ? e : new ut(e)).emitTokenChange(),
                this.credentials.push(e));
            });
        }
        findServerInfo(e) {
          let t;
          e = this._sanitizeUrl(e);
          for (const s of this.serverInfos)
            if (this._hasSameServerInstance(s.server, e)) {
              t = s;
              break;
            }
          return t;
        }
        findOAuthInfo(e) {
          let t;
          e = this._sanitizeUrl(e);
          for (const s of this.oAuthInfos)
            if (this._hasSameServerInstance(s.portalUrl, e)) {
              t = s;
              break;
            }
          return t;
        }
        findCredential(e, t) {
          let s;
          e = this._sanitizeUrl(e);
          const r = this._isServerRsrc(e) ? 'server' : 'portal';
          if (t) {
            for (const i of this.credentials)
              if (
                this._hasSameServerInstance(i.server, e) &&
                t === i.userId &&
                i.scope === r
              ) {
                s = i;
                break;
              }
          } else
            for (const t of this.credentials)
              if (
                this._hasSameServerInstance(t.server, e) &&
                -1 !== this._getIdenticalSvcIdx(e, t) &&
                t.scope === r
              ) {
                s = t;
                break;
              }
          return s;
        }
        getCredential(e, t) {
          let s,
            r,
            i = !0;
          t && ((s = !!t.token), (r = t.error), (i = !1 !== t.prompt)),
            (t = { ...t }),
            (e = this._sanitizeUrl(e));
          const n = new AbortController(),
            o = (0, u.hh)();
          if (
            (t.signal &&
              (0, u.fu)(t.signal, () => {
                n.abort();
              }),
            (0, u.fu)(n, () => {
              o.reject(new a.Z('identity-manager:user-aborted', 'ABORTED'));
            }),
            (0, u.Hc)(n))
          )
            return o.promise;
          t.signal = n.signal;
          const l = this._isAdminResource(e),
            h = s ? this.findCredential(e) : null;
          let c;
          if (h && r && r.details && 498 === r.details.httpStatus) h.destroy();
          else if (h)
            return (
              (c = new a.Z(
                'identity-manager:not-authorized',
                "You are currently signed in as: '" +
                  h.userId +
                  "'. You do not have access to this resource: " +
                  e,
                { error: r },
              )),
              o.reject(c),
              o.promise
            );
          const d = this._findCredential(e, t);
          if (d) return o.resolve(d), o.promise;
          let f = this.findServerInfo(e);
          if (f)
            !f.hasServer &&
              this._isServerRsrc(e) &&
              ((f._restInfoPms = this._getTokenSvcUrl(e)), (f.hasServer = !0));
          else {
            const t = this._getTokenSvcUrl(e);
            if (!t)
              return (
                (c = new a.Z(
                  'identity-manager:unknown-resource',
                  'Unknown resource - could not find token service endpoint.',
                )),
                o.reject(c),
                o.promise
              );
            (f = new nt()),
              (f.server = this._getServerInstanceRoot(e)),
              'string' == typeof t
                ? ((f.tokenServiceUrl = t), (f.hasPortal = !0))
                : ((f._restInfoPms = t), (f.hasServer = !0)),
              this.registerServers([f]);
          }
          return (
            f.hasPortal &&
              void 0 === f._selfReq &&
              (i ||
                (0, p.D6)(f.tokenServiceUrl, this._appOrigin) ||
                this._gwDomains.some(
                  (e) => e.tokenServiceUrl === f.tokenServiceUrl,
                )) &&
              (f._selfReq = {
                owningTenant: t && t.owningTenant,
                selfDfd: this._getPortalSelf(
                  f.tokenServiceUrl.replace(
                    this._rePortalTokenSvc,
                    '/sharing/rest/portals/self',
                  ),
                  e,
                ),
              }),
            this._enqueue(e, f, t, o, l)
          );
        }
        getResourceName(e) {
          return this._isRESTService(e)
            ? e
                .replace(this._regexSDirUrl, '')
                .replace(this._regexServerType, '') || ''
            : (this._gwUser.test(e) && e.replace(this._gwUser, '$1')) ||
                (this._gwItem.test(e) && e.replace(this._gwItem, '$1')) ||
                (this._gwGroup.test(e) && e.replace(this._gwGroup, '$1')) ||
                '';
        }
        generateToken(e, t, s) {
          const r = this._rePortalTokenSvc.test(e.tokenServiceUrl),
            i = new p.R9(this._appOrigin),
            n = e.shortLivedTokenValidity;
          let l, h, c, d, u, f, _, m;
          t &&
            ((m = this.tokenValidity || n || this.defaultTokenValidity),
            m > n && n > 0 && (m = n)),
            s &&
              ((l = s.isAdmin),
              (h = s.serverUrl),
              (c = s.token),
              (f = s.signal),
              (_ = s.ssl),
              (e.customParameters = s.customParameters)),
            l
              ? (d = e.adminTokenServiceUrl)
              : ((d = e.tokenServiceUrl),
                (u = new p.R9(d.toLowerCase())),
                e.webTierAuth &&
                  null != s &&
                  s.serverUrl &&
                  !_ &&
                  'http' === i.scheme &&
                  ((0, p.D6)(i.uri, d, !0) ||
                    ('https' === u.scheme &&
                      i.host === u.host &&
                      '7080' === i.port &&
                      '7443' === u.port)) &&
                  (d = d
                    .replace(/^https:/i, 'http:')
                    .replace(/:7443/i, ':7080')));
          const g = {
            query: {
              request: 'getToken',
              username: null == t ? void 0 : t.username,
              password: null == t ? void 0 : t.password,
              serverUrl: h,
              token: c,
              expiration: m,
              referer: l || r ? this._appOrigin : null,
              client: l ? 'referer' : null,
              f: 'json',
              ...e.customParameters,
            },
            method: 'post',
            authMode: 'anonymous',
            useProxy: this._useProxy(e, s),
            signal: f,
            ...(null == s ? void 0 : s.ioArgs),
          };
          return (
            r || (g.withCredentials = !1),
            (0, o.default)(d, g).then((s) => {
              const r = s.data;
              if (!r || !r.token)
                return new a.Z(
                  'identity-manager:authentication-failed',
                  'Unable to generate token',
                );
              const i = e.server;
              return (
                ot[i] || (ot[i] = {}),
                t && (ot[i][t.username] = t.password),
                (r.validity = m),
                r
              );
            })
          );
        }
        isBusy() {
          return !!this._busy;
        }
        checkSignInStatus(e) {
          return this.checkAppAccess(e, '').then((e) => e.credential);
        }
        checkAppAccess(e, t, s) {
          let r = !1;
          return this.getCredential(e, { prompt: !1 })
            .then((i) => {
              let n;
              const l = { f: 'json' };
              if ('portal' === i.scope)
                if (t && (this._doPortalSignIn(e) || (s && s.force)))
                  (n = i.server + '/sharing/rest/oauth2/validateAppAccess'),
                    (l.client_id = t);
                else {
                  if (!i.token) return { credential: i };
                  n = i.server + '/sharing/rest';
                }
              else {
                if (!i.token) return { credential: i };
                n = i.server + '/rest/services';
              }
              return (
                i.token && (l.token = i.token),
                (0, o.default)(n, { query: l, authMode: 'anonymous' })
                  .then((e) => {
                    if (!1 === e.data.valid)
                      throw new a.Z(
                        'identity-manager:not-authorized',
                        `You are currently signed in as: '${i.userId}'.`,
                        e.data,
                      );
                    return (
                      (r = !!e.data.viewOnlyUserTypeApp), { credential: i }
                    );
                  })
                  .catch((e) => {
                    if ('identity-manager:not-authorized' === e.name) throw e;
                    const t = e.details && e.details.httpStatus;
                    if (498 === t)
                      throw (
                        (i.destroy(),
                        new a.Z(
                          'identity-manager:not-authenticated',
                          'User is not signed in.',
                        ))
                      );
                    if (400 === t)
                      throw new a.Z('identity-manager:invalid-request');
                    return { credential: i };
                  })
              );
            })
            .then((e) => ({ credential: e.credential, viewOnly: r }));
        }
        setOAuthResponseHash(e) {
          e &&
            ('#' === e.charAt(0) && (e = e.substring(1)),
            this._processOAuthPopupParams((0, p.u0)(e)));
        }
        setOAuthRedirectionHandler(e) {
          this._oAuthRedirectFunc = e;
        }
        setProtocolErrorHandler(e) {
          this._protocolFunc = e;
        }
        signIn(e, t, s = {}) {
          const r = (0, u.hh)(),
            i = () => {
              var e, t, s, r, i;
              null == (e = l) || e.remove(),
                null == (t = h) || t.remove(),
                null == (s = c) || s.remove(),
                null == (r = o) || r.destroy(),
                null == (i = this.dialog) || i.destroy(),
                (this.dialog = o = l = h = c = null);
            },
            n = () => {
              i(),
                (this._oAuthDfd = null),
                r.reject(new a.Z('identity-manager:user-aborted', 'ABORTED'));
            };
          s.signal &&
            (0, u.fu)(s.signal, () => {
              n();
            });
          let o = new this.formConstructor();
          (o.resource = this.getResourceName(e)),
            (o.server = t.server),
            (this.dialog = new Ke()),
            (this.dialog.content = o),
            (this.dialog.open = !0),
            this.emit('dialog-create');
          let l = o.on('cancel', n),
            h = this.dialog.watch('open', n),
            c = o.on('submit', (e) => {
              this.generateToken(t, e, { isAdmin: s.isAdmin, signal: s.signal })
                .then((n) => {
                  i();
                  const o = new ut({
                    userId: e.username,
                    server: t.server,
                    token: n.token,
                    expires: null != n.expires ? Number(n.expires) : null,
                    ssl: !!n.ssl,
                    isAdmin: s.isAdmin,
                    validity: n.validity,
                  });
                  r.resolve(o);
                })
                .catch((e) => {
                  (o.error = e), (o.signingIn = !1);
                });
            });
          return r.promise;
        }
        oAuthSignIn(e, t, s, r) {
          this._oAuthDfd = (0, u.hh)();
          const i = this._oAuthDfd;
          let n;
          null != r &&
            r.signal &&
            (0, u.fu)(r.signal, () => {
              const e = this._oAuthDfd && this._oAuthDfd.oAuthWin_;
              e && !e.closed ? e.close() : this.dialog && f();
            }),
            (i.resUrl_ = e),
            (i.sinfo_ = t),
            (i.oinfo_ = s);
          const o = s._oAuthCred;
          if (
            o.storage &&
            ('authorization-code' === s.flowType ||
              ('auto' === s.flowType && !s.popup && t.currentVersion >= 8.4))
          ) {
            let e = crypto.getRandomValues(new Uint8Array(32));
            (n = (0, p.rS)(e)),
              (o.codeVerifier = n),
              (e = crypto.getRandomValues(new Uint8Array(32))),
              (o.stateUID = (0, p.rS)(e)),
              o.save() || (o.codeVerifier = n = null);
          } else o.codeVerifier = null;
          let l, h, c, d;
          this._getCodeChallenge(n).then((i) => {
            const n = !r || !1 !== r.oAuthPopupConfirmation;
            s.popup && n
              ? ((l = new this.formConstructor()),
                (l.oAuthPrompt = !0),
                (l.server = t.server),
                (this.dialog = new Ke()),
                (this.dialog.content = l),
                (this.dialog.open = !0),
                this.emit('dialog-create'),
                (h = l.on('cancel', f)),
                (c = this.dialog.watch('open', f)),
                (d = l.on('submit', () => {
                  _(), this._doOAuthSignIn(e, t, s, i);
                })))
              : this._doOAuthSignIn(e, t, s, i);
          });
          const f = () => {
              _(),
                (this._oAuthDfd = null),
                i.reject(new a.Z('identity-manager:user-aborted', 'ABORTED'));
            },
            _ = () => {
              var e, t, s, r, i;
              null == (e = h) || e.remove(),
                null == (t = c) || t.remove(),
                null == (s = d) || s.remove(),
                null == (r = l) || r.destroy(),
                null == (i = this.dialog) || i.destroy(),
                (this.dialog = null);
            };
          return i.promise;
        }
        destroyCredentials() {
          this.credentials &&
            this.credentials.slice().forEach((e) => {
              e.destroy();
            }),
            this.emit('credentials-destroy');
        }
        enablePostMessageAuth(e = 'https://www.arcgis.com/sharing/rest') {
          this._postMessageAuthHandle && this._postMessageAuthHandle.remove(),
            (this._postMessageAuthHandle = (0, h.on)(window, 'message', (t) => {
              var s;
              if (
                (t.origin === this._appOrigin ||
                  t.origin.endsWith('.arcgis.com')) &&
                'arcgis:auth:requestCredential' ===
                  (null == (s = t.data) ? void 0 : s.type)
              ) {
                const s = t.source;
                this.getCredential(e)
                  .then((e) => {
                    s.postMessage(
                      {
                        type: 'arcgis:auth:credential',
                        credential: {
                          expires: e.expires,
                          server: e.server,
                          ssl: e.ssl,
                          token: e.token,
                          userId: e.userId,
                        },
                      },
                      t.origin,
                    );
                  })
                  .catch((e) => {
                    s.postMessage(
                      {
                        type: 'arcgis:auth:error',
                        error: { name: e.name, message: e.message },
                      },
                      t.origin,
                    );
                  });
              }
            }));
        }
        disablePostMessageAuth() {
          this._postMessageAuthHandle &&
            (this._postMessageAuthHandle.remove(),
            (this._postMessageAuthHandle = null));
        }
        _getOAuthLocationParams() {
          let e = window.location.hash;
          if (e) {
            '#' === e.charAt(0) && (e = e.substring(1));
            const s = (0, p.u0)(e);
            let r = !1;
            if (
              s.access_token &&
              s.expires_in &&
              s.state &&
              s.hasOwnProperty('username')
            )
              try {
                (s.state = JSON.parse(s.state)),
                  s.state.portalUrl &&
                    ((this._oAuthLocationParams = s), (r = !0));
              } catch {}
            else if (
              s.error &&
              s.error_description &&
              (console.log(
                'IdentityManager OAuth Error: ',
                s.error,
                ' - ',
                s.error_description,
              ),
              'access_denied' === s.error && ((r = !0), s.state))
            )
              try {
                s.state = JSON.parse(s.state);
              } catch {}
            var t;
            r &&
              (window.location.hash =
                (null == (t = s.state) ? void 0 : t.hash) || '');
          }
          let s = window.location.search;
          if (s) {
            '?' === s.charAt(0) && (s = s.substring(1));
            const e = (0, p.u0)(s);
            let t = !1;
            if (e.code && e.state)
              try {
                (e.state = JSON.parse(e.state)),
                  e.state.portalUrl &&
                    e.state.uid &&
                    ((this._oAuthLocationParams = e), (t = !0));
              } catch {}
            else if (
              e.error &&
              e.error_description &&
              (console.log(
                'IdentityManager OAuth Error: ',
                e.error,
                ' - ',
                e.error_description,
              ),
              'access_denied' === e.error && ((t = !0), e.state))
            )
              try {
                e.state = JSON.parse(e.state);
              } catch {}
            if (t) {
              var r;
              const t = { ...e };
              [
                'code',
                'error',
                'error_description',
                'message_code',
                'persist',
                'state',
              ].forEach((e) => {
                delete t[e];
              });
              const s = (0, p.B7)(t),
                i =
                  window.location.pathname +
                  (s ? `?${s}` : '') +
                  ((null == (r = e.state) ? void 0 : r.hash) || '');
              window.history.replaceState(window.history.state, '', i);
            }
          }
        }
        _getOAuthToken(e, t, s, r, i) {
          return (
            (e = e.replace(/^http:/i, 'https:')),
            (0, o.default)(`${e}/sharing/rest/oauth2/token`, {
              authMode: 'anonymous',
              method: 'post',
              query:
                r && i
                  ? {
                      grant_type: 'authorization_code',
                      code: t,
                      redirect_uri: r,
                      client_id: s,
                      code_verifier: i,
                    }
                  : {
                      grant_type: 'refresh_token',
                      refresh_token: t,
                      client_id: s,
                    },
            }).then((e) => e.data)
          );
        }
        _getCodeChallenge(e) {
          if (e && globalThis.isSecureContext) {
            const t = new TextEncoder().encode(e);
            return crypto.subtle
              .digest('SHA-256', t)
              .then((e) => (0, p.rS)(new Uint8Array(e)));
          }
          return Promise.resolve(null);
        }
        _pageShowHandler(e) {
          if (e.persisted && this.isBusy() && this._rejectOnPersistedPageShow) {
            const e = new a.Z('identity-manager:user-aborted', 'ABORTED');
            this._errbackFunc(e);
          }
        }
        _findCredential(e, t) {
          let s,
            r,
            i,
            n,
            o = -1;
          const a = t && t.token,
            l = t && t.resource,
            h = this._isServerRsrc(e) ? 'server' : 'portal',
            c = this.credentials.filter(
              (t) => this._hasSameServerInstance(t.server, e) && t.scope === h,
            );
          if (((e = l || e), c.length))
            if (1 === c.length) {
              if (
                ((s = c[0]),
                (n = this.findServerInfo(s.server)),
                (r = n && n.owningSystemUrl),
                (i = r && this.findCredential(r, s.userId)),
                (o = this._getIdenticalSvcIdx(e, s)),
                !a)
              )
                return (
                  -1 === o && s.resources.push(e), this._addResource(e, i), s
                );
              -1 !== o &&
                (s.resources.splice(o, 1), this._removeResource(e, i));
            } else {
              let t, s;
              if (
                (c.some(
                  (a) => (
                    (s = this._getIdenticalSvcIdx(e, a)),
                    -1 !== s &&
                      ((t = a),
                      (n = this.findServerInfo(t.server)),
                      (r = n && n.owningSystemUrl),
                      (i = r && this.findCredential(r, t.userId)),
                      (o = s),
                      !0)
                  ),
                ),
                a)
              )
                t && (t.resources.splice(o, 1), this._removeResource(e, i));
              else if (t) return this._addResource(e, i), t;
            }
        }
        _findOAuthInfo(e) {
          let t = this.findOAuthInfo(e);
          if (!t)
            for (const s of this.oAuthInfos)
              if (this._isIdProvider(s.portalUrl, e)) {
                t = s;
                break;
              }
          return t;
        }
        _addResource(e, t) {
          t && -1 === this._getIdenticalSvcIdx(e, t) && t.resources.push(e);
        }
        _removeResource(e, t) {
          let s = -1;
          t &&
            ((s = this._getIdenticalSvcIdx(e, t)),
            s > -1 && t.resources.splice(s, 1));
        }
        _useProxy(e, t) {
          return (
            (t &&
              t.isAdmin &&
              !(0, p.D6)(e.adminTokenServiceUrl, this._appOrigin)) ||
            (!this._isPortalDomain(e.tokenServiceUrl) &&
              '10.1' === String(e.currentVersion) &&
              !(0, p.D6)(e.tokenServiceUrl, this._appOrigin))
          );
        }
        _getOrigin(e) {
          const t = new p.R9(e);
          return (
            t.scheme + '://' + t.host + (null != t.port ? ':' + t.port : '')
          );
        }
        _getServerInstanceRoot(e) {
          const t = e.toLowerCase();
          let s = t.indexOf(this._agsRest);
          return (
            -1 === s &&
              this._isAdminResource(e) &&
              (s = this._agsAdmin.test(e)
                ? e.replace(this._agsAdmin, '$1').length
                : e.search(this._adminSvcs)),
            -1 === s && (s = t.indexOf('/sharing')),
            -1 === s && '/' === t.substr(-1) && (s = t.length - 1),
            s > -1 ? e.substring(0, s) : e
          );
        }
        _hasSameServerInstance(e, t) {
          return (
            '/' === e.substr(-1) && (e = e.slice(0, -1)),
            (e = e.toLowerCase()),
            (t = this._getServerInstanceRoot(t).toLowerCase()),
            (e = this._normalizeAGOLorgDomain(e)),
            (t = this._normalizeAGOLorgDomain(t)),
            (e = e.substr(e.indexOf(':'))) === t.substr(t.indexOf(':'))
          );
        }
        _normalizeAGOLorgDomain(e) {
          const t = /^https?:\/\/(?:cdn|[a-z\d-]+\.maps)\.arcgis\.com/i,
            s = /^https?:\/\/(?:cdndev|[a-z\d-]+\.mapsdevext)\.arcgis\.com/i,
            r = /^https?:\/\/(?:cdnqa|[a-z\d-]+\.mapsqa)\.arcgis\.com/i;
          return (
            t.test(e)
              ? (e = e.replace(t, 'https://www.arcgis.com'))
              : s.test(e)
              ? (e = e.replace(s, 'https://devext.arcgis.com'))
              : r.test(e) && (e = e.replace(r, 'https://qaext.arcgis.com')),
            e
          );
        }
        _sanitizeUrl(e) {
          const t = (n.Z.request.proxyUrl || '').toLowerCase(),
            s = t ? e.toLowerCase().indexOf(t + '?') : -1;
          return (
            -1 !== s && (e = e.substring(s + t.length + 1)),
            (e = (0, p.Fv)(e)),
            (0, p.mN)(e).path
          );
        }
        _isRESTService(e) {
          return e.indexOf(this._agsRest) > -1;
        }
        _isAdminResource(e) {
          return this._agsAdmin.test(e) || this._adminSvcs.test(e);
        }
        _isServerRsrc(e) {
          return this._isRESTService(e) || this._isAdminResource(e);
        }
        _isIdenticalService(e, t) {
          let s;
          if (this._isRESTService(e) && this._isRESTService(t)) {
            const r = this._getSuffix(e).toLowerCase(),
              i = this._getSuffix(t).toLowerCase();
            if (((s = r === i), !s)) {
              const e =
                /(.*)\/(MapServer|FeatureServer|UtilityNetworkServer).*/gi;
              s = r.replace(e, '$1') === i.replace(e, '$1');
            }
          } else
            this._isAdminResource(e) && this._isAdminResource(t)
              ? (s = !0)
              : this._isServerRsrc(e) ||
                this._isServerRsrc(t) ||
                !this._isPortalDomain(e) ||
                (s = !0);
          return s;
        }
        _isPortalDomain(e) {
          const t = new p.R9(e.toLowerCase()),
            s = this._portalConfig;
          let r = this._gwDomains.some((e) => e.regex.test(t.uri));
          return (
            !r &&
              s &&
              (r = this._hasSameServerInstance(
                this._getServerInstanceRoot(s.restBaseUrl),
                t.uri,
              )),
            r || (n.Z.portalUrl && (r = (0, p.D6)(t, n.Z.portalUrl, !0))),
            r ||
              (r = this._portals.some((e) =>
                this._hasSameServerInstance(e, t.uri),
              )),
            (r = r || this._agsPortal.test(t.path)),
            r
          );
        }
        _isIdProvider(e, t) {
          let s = -1,
            r = -1;
          this._gwDomains.forEach((i, n) => {
            -1 === s && i.regex.test(e) && (s = n),
              -1 === r && i.regex.test(t) && (r = n);
          });
          let i = !1;
          if (
            (s > -1 &&
              r > -1 &&
              (0 === s || 4 === s
                ? (0 !== r && 4 !== r) || (i = !0)
                : 1 === s
                ? (1 !== r && 2 !== r) || (i = !0)
                : 2 === s
                ? 2 === r && (i = !0)
                : 3 === s && 3 === r && (i = !0)),
            !i)
          ) {
            const s = this.findServerInfo(t),
              r = s && s.owningSystemUrl;
            r &&
              at(s) &&
              this._isPortalDomain(r) &&
              this._isIdProvider(e, r) &&
              (i = !0);
          }
          return i;
        }
        _getIdenticalSvcIdx(e, t) {
          let s = -1;
          for (let r = 0; r < t.resources.length; r++) {
            const i = t.resources[r];
            if (this._isIdenticalService(e, i)) {
              s = r;
              break;
            }
          }
          return s;
        }
        _getSuffix(e) {
          return e
            .replace(this._regexSDirUrl, '')
            .replace(this._regexServerType, '$1');
        }
        _getTokenSvcUrl(e) {
          let t, s, r;
          if (this._isRESTService(e) || this._isAdminResource(e)) {
            const r = this._getServerInstanceRoot(e);
            return (
              (t = r + '/admin/generateToken'),
              (s = (0, o.default)((e = r + '/rest/info'), {
                query: { f: 'json' },
              }).then((e) => e.data)),
              { adminUrl: t, promise: s }
            );
          }
          if (this._isPortalDomain(e)) {
            let t = '';
            if (
              (this._gwDomains.some(
                (s) => (s.regex.test(e) && (t = s.tokenServiceUrl), !!t),
              ),
              t ||
                this._portals.some(
                  (s) => (
                    this._hasSameServerInstance(s, e) &&
                      (t = s + this._gwTokenUrl),
                    !!t
                  ),
                ),
              t ||
                ((r = e.toLowerCase().indexOf('/sharing')),
                -1 !== r && (t = e.substring(0, r) + this._gwTokenUrl)),
              t || (t = this._getOrigin(e) + this._gwTokenUrl),
              t)
            ) {
              const s = new p.R9(e).port;
              /^http:\/\//i.test(e) &&
                '7080' === s &&
                (t = t.replace(/:7080/i, ':7443')),
                (t = t.replace(/http:/i, 'https:'));
            }
            return t;
          }
          if (-1 !== e.toLowerCase().indexOf('premium.arcgisonline.com'))
            return 'https://premium.arcgisonline.com/server/tokens';
        }
        _processOAuthResponseParams(e, t, s) {
          const r = t._oAuthCred;
          if (e.code) {
            const i = r.codeVerifier;
            return (
              (r.codeVerifier = null),
              (r.stateUID = null),
              r.save(),
              this._getOAuthToken(
                s.server,
                e.code,
                t.appId,
                this._getRedirectURI(t, !0),
                i,
              ).then((i) => {
                const n = new ut({
                  userId: i.username,
                  server: s.server,
                  token: i.access_token,
                  expires: Date.now() + 1e3 * i.expires_in,
                  ssl: i.ssl,
                  oAuthState: e.state,
                  _oAuthCred: r,
                });
                return (
                  (t.userId = n.userId),
                  (r.storage = i.persist ? ht : ct),
                  (r.refreshToken = i.refresh_token),
                  (r.token = null),
                  (r.expires = i.refresh_token_expires_in
                    ? Date.now() + 1e3 * i.refresh_token_expires_in
                    : null),
                  (r.userId = n.userId),
                  (r.ssl = n.ssl),
                  r.save(),
                  n
                );
              })
            );
          }
          const i = new ut({
            userId: e.username,
            server: s.server,
            token: e.access_token,
            expires: Date.now() + 1e3 * Number(e.expires_in),
            ssl: 'true' === e.ssl,
            oAuthState: e.state,
            _oAuthCred: r,
          });
          return (
            (t.userId = i.userId),
            (r.storage = e.persist ? ht : ct),
            (r.refreshToken = null),
            (r.token = i.token),
            (r.expires = i.expires),
            (r.userId = i.userId),
            (r.ssl = i.ssl),
            r.save(),
            Promise.resolve(i)
          );
        }
        _processOAuthPopupParams(e) {
          var t;
          const s = this._oAuthDfd;
          if (((this._oAuthDfd = null), s))
            if (
              (clearInterval(this._oAuthIntervalId),
              null == (t = this._oAuthOnPopupHandle) || t.remove(),
              e.error)
            ) {
              const t = 'access_denied' === e.error,
                r = new a.Z(
                  t
                    ? 'identity-manager:user-aborted'
                    : 'identity-manager:authentication-failed',
                  t
                    ? 'ABORTED'
                    : 'OAuth: ' + e.error + ' - ' + e.error_description,
                );
              s.reject(r);
            } else
              this._processOAuthResponseParams(e, s.oinfo_, s.sinfo_)
                .then((e) => {
                  s.resolve(e);
                })
                .catch((e) => {
                  s.reject(e);
                });
        }
        _setOAuthResponseQueryString(e) {
          e &&
            ('?' === e.charAt(0) && (e = e.substring(1)),
            this._processOAuthPopupParams((0, p.u0)(e)));
        }
        _exchangeToken(e, t, s) {
          return (0, o.default)(`${e}/sharing/rest/oauth2/exchangeToken`, {
            authMode: 'anonymous',
            method: 'post',
            query: { f: 'json', client_id: t, token: s },
          }).then((e) => e.data.token);
        }
        _getPlatformSelf(e, t) {
          return (
            (e = e.replace(/^http:/i, 'https:')),
            (0, o.default)(`${e}/sharing/rest/oauth2/platformSelf`, {
              authMode: 'anonymous',
              headers: {
                'X-Esri-Auth-Client-Id': t,
                'X-Esri-Auth-Redirect-Uri': window.location.href.replace(
                  /#.*$/,
                  '',
                ),
              },
              method: 'post',
              query: { f: 'json', expiration: 30 },
              withCredentials: !0,
            }).then((e) => e.data)
          );
        }
        _getPortalSelf(e, t) {
          let s;
          return (
            this._gwDomains.some(
              (t) => (t.regex.test(e) && (s = t.customBaseUrl), !!s),
            ),
            s
              ? Promise.resolve({
                  allSSL: !0,
                  currentVersion: '8.4',
                  customBaseUrl: s,
                  portalMode: 'multitenant',
                  supportsOAuth: !0,
                })
              : (this._appOrigin.startsWith('https:')
                  ? (e = e
                      .replace(/^http:/i, 'https:')
                      .replace(/:7080/i, ':7443'))
                  : /^http:/i.test(t) &&
                    (e = e
                      .replace(/^https:/i, 'http:')
                      .replace(/:7443/i, ':7080')),
                (0, o.default)(e, {
                  query: { f: 'json' },
                  authMode: 'anonymous',
                  withCredentials: !0,
                }).then((e) => e.data))
          );
        }
        _doPortalSignIn(e) {
          const t = this._portalConfig,
            s = window.location.href,
            r = this.findServerInfo(e);
          return !(
            (!t && !this._isPortalDomain(s)) ||
            !(r
              ? r.hasPortal ||
                (r.owningSystemUrl && this._isPortalDomain(r.owningSystemUrl))
              : this._isPortalDomain(e)) ||
            !(
              this._isIdProvider(s, e) ||
              (t &&
                (this._hasSameServerInstance(
                  this._getServerInstanceRoot(t.restBaseUrl),
                  e,
                ) ||
                  this._isIdProvider(t.restBaseUrl, e))) ||
              (0, p.D6)(s, e, !0)
            )
          );
        }
        _checkProtocol(e, t, s, r) {
          let i = !0;
          const n = r ? t.adminTokenServiceUrl : t.tokenServiceUrl;
          return (
            n.trim().toLowerCase().startsWith('https:') &&
              !this._appOrigin.startsWith('https:') &&
              (0, p.ed)(n) &&
              ((i =
                !!this._protocolFunc &&
                !!this._protocolFunc({ resourceUrl: e, serverInfo: t })),
              !i) &&
              s(
                new a.Z(
                  'identity-manager:aborted',
                  'Aborted the Sign-In process to avoid sending password over insecure connection.',
                ),
              ),
            i
          );
        }
        _enqueue(e, t, s, r, i, n) {
          return (
            r || (r = (0, u.hh)()),
            (r.resUrl_ = e),
            (r.sinfo_ = t),
            (r.options_ = s),
            (r.admin_ = i),
            (r.refresh_ = n),
            this._busy
              ? this._hasSameServerInstance(
                  this._getServerInstanceRoot(e),
                  this._busy.resUrl_,
                )
                ? (this._oAuthDfd &&
                    this._oAuthDfd.oAuthWin_ &&
                    this._oAuthDfd.oAuthWin_.focus(),
                  this._soReqs.push(r))
                : this._xoReqs.push(r)
              : this._doSignIn(r),
            r.promise
          );
        }
        _doSignIn(e) {
          (this._busy = e), (this._rejectOnPersistedPageShow = !1);
          const t = (t) => {
              const s = e.options_ && e.options_.resource,
                r = e.resUrl_,
                i = e.refresh_;
              let n = !1;
              -1 === this.credentials.indexOf(t) &&
                (i && -1 !== this.credentials.indexOf(i)
                  ? ((i.userId = t.userId),
                    (i.token = t.token),
                    (i.expires = t.expires),
                    (i.validity = t.validity),
                    (i.ssl = t.ssl),
                    (i.creationTime = t.creationTime),
                    (n = !0),
                    (t = i))
                  : this.credentials.push(t)),
                t.resources || (t.resources = []),
                t.resources.includes(s || r) || t.resources.push(s || r),
                (t.scope = this._isServerRsrc(r) ? 'server' : 'portal'),
                t.emitTokenChange();
              const o = this._soReqs,
                a = {};
              (this._soReqs = []),
                o.forEach((e) => {
                  if (!this._isIdenticalService(r, e.resUrl_)) {
                    const s = this._getSuffix(e.resUrl_);
                    a[s] || ((a[s] = !0), t.resources.push(e.resUrl_));
                  }
                }),
                e.resolve(t),
                o.forEach((e) => {
                  this._hasSameServerInstance(
                    this._getServerInstanceRoot(r),
                    e.resUrl_,
                  )
                    ? e.resolve(t)
                    : this._soReqs.push(e);
                }),
                (this._busy = e.resUrl_ = e.sinfo_ = e.refresh_ = null),
                n || this.emit('credential-create', { credential: t }),
                this._soReqs.length
                  ? this._doSignIn(this._soReqs.shift())
                  : this._xoReqs.length && this._doSignIn(this._xoReqs.shift());
            },
            s = (t) => {
              e.reject(t),
                (this._busy = e.resUrl_ = e.sinfo_ = e.refresh_ = null),
                this._soReqs.length
                  ? this._doSignIn(this._soReqs.shift())
                  : this._xoReqs.length && this._doSignIn(this._xoReqs.shift());
            },
            r = (i, n, o, l) => {
              var c, d;
              const f = e.sinfo_,
                _ = !e.options_ || !1 !== e.options_.prompt,
                m = f.hasPortal && this._findOAuthInfo(e.resUrl_);
              let g, v;
              if (i)
                t(
                  new ut({
                    userId: i,
                    server: f.server,
                    token: o || null,
                    expires: null != l ? Number(l) : null,
                    ssl: !!n,
                  }),
                );
              else if (
                window !== window.parent &&
                null != (c = this._appUrlObj.query) &&
                c['arcgis-auth-origin'] &&
                null != (d = this._appUrlObj.query) &&
                d['arcgis-auth-portal'] &&
                this._hasSameServerInstance(
                  this._getServerInstanceRoot(
                    this._appUrlObj.query['arcgis-auth-portal'],
                  ),
                  e.resUrl_,
                )
              ) {
                var y;
                window.parent.postMessage(
                  { type: 'arcgis:auth:requestCredential' },
                  this._appUrlObj.query['arcgis-auth-origin'],
                );
                const r = (0, h.on)(window, 'message', (e) => {
                  e.source === window.parent &&
                    e.data &&
                    ('arcgis:auth:credential' === e.data.type
                      ? (r.remove(),
                        e.data.credential.expires < Date.now()
                          ? s(
                              new a.Z(
                                'identity-manager:credential-request-failed',
                                "Parent application's token has expired.",
                              ),
                            )
                          : t(new ut(e.data.credential)))
                      : 'arcgis:auth:error' === e.data.type &&
                        (r.remove(),
                        'tokenExpiredError' === e.data.error.name
                          ? s(
                              new a.Z(
                                'identity-manager:credential-request-failed',
                                "Parent application's token has expired.",
                              ),
                            )
                          : s(a.Z.fromJSON(e.data.error))));
                });
                (0, u.fu)(null == (y = e.options_) ? void 0 : y.signal, () => {
                  r.remove();
                });
              } else if (m) {
                let i = m._oAuthCred;
                if (!i) {
                  const e = new Qe(m, ht),
                    t = new Qe(m, ct);
                  e.isValid() && t.isValid()
                    ? e.expires > t.expires
                      ? ((i = e), t.destroy())
                      : ((i = t), e.destroy())
                    : (i = e.isValid() ? e : t),
                    (m._oAuthCred = i);
                }
                if (i.isValid()) {
                  g = new ut({
                    userId: i.userId,
                    server: f.server,
                    token: i.token,
                    expires: i.expires,
                    ssl: i.ssl,
                    _oAuthCred: i,
                  });
                  const s =
                    m.appId !== i.appId && this._doPortalSignIn(e.resUrl_);
                  s || i.refreshToken
                    ? ((e._pendingDfd = i.refreshToken
                        ? this._getOAuthToken(
                            f.server,
                            i.refreshToken,
                            i.appId,
                          ).then(
                            (e) => (
                              (g.expires = Date.now() + 1e3 * e.expires_in),
                              (g.token = e.access_token),
                              g
                            ),
                          )
                        : Promise.resolve(g)),
                      e._pendingDfd
                        .then((e) =>
                          s
                            ? this._exchangeToken(e.server, m.appId, e.token)
                                .then((t) => ((e.token = t), e))
                                .catch(() => e)
                            : e,
                        )
                        .then((e) => {
                          t(e);
                        })
                        .catch(() => {
                          i.destroy(), r();
                        }))
                    : t(g);
                } else if (
                  this._oAuthLocationParams &&
                  this._hasSameServerInstance(
                    m.portalUrl,
                    this._oAuthLocationParams.state.portalUrl,
                  ) &&
                  (this._oAuthLocationParams.access_token ||
                    (this._oAuthLocationParams.code &&
                      this._oAuthLocationParams.state.uid === i.stateUID &&
                      i.codeVerifier))
                ) {
                  const r = this._oAuthLocationParams;
                  (this._oAuthLocationParams = null),
                    (e._pendingDfd = this._processOAuthResponseParams(r, m, f)
                      .then((e) => {
                        t(e);
                      })
                      .catch(s));
                } else {
                  const r = () => {
                    _
                      ? (e._pendingDfd = this.oAuthSignIn(
                          e.resUrl_,
                          f,
                          m,
                          e.options_,
                        ).then(t, s))
                      : ((v = new a.Z(
                          'identity-manager:not-authenticated',
                          'User is not signed in.',
                        )),
                        s(v));
                  };
                  this._doPortalSignIn(e.resUrl_)
                    ? (e._pendingDfd = this._getPlatformSelf(f.server, m.appId)
                        .then((e) => {
                          (0, p.D6)(e.portalUrl, this._appOrigin, !0)
                            ? ((g = new ut({
                                userId: e.username,
                                server: f.server,
                                expires: Date.now() + 1e3 * e.expires_in,
                                token: e.token,
                              })),
                              t(g))
                            : r();
                        })
                        .catch(r))
                    : r();
                }
              } else if (_) {
                if (this._checkProtocol(e.resUrl_, f, s, e.admin_)) {
                  let r = e.options_;
                  e.admin_ && ((r = r || {}), (r.isAdmin = !0)),
                    (e._pendingDfd = this.signIn(e.resUrl_, f, r).then(t, s));
                }
              } else
                (v = new a.Z(
                  'identity-manager:not-authenticated',
                  'User is not signed in.',
                )),
                  s(v);
            },
            i = () => {
              const r = e.sinfo_,
                i = r.owningSystemUrl,
                n = e.options_;
              let o, a, l, h;
              if (
                (n && ((o = n.token), (a = n.error), (l = n.prompt)),
                (h = this._findCredential(i, {
                  token: o,
                  resource: e.resUrl_,
                })),
                !h)
              )
                for (const e of this.credentials)
                  if (this._isIdProvider(i, e.server)) {
                    h = e;
                    break;
                  }
              if (h) {
                const i = this.findCredential(e.resUrl_, h.userId);
                if (i) t(i);
                else if (lt(r, this._legacyFed)) {
                  const e = h.toJSON();
                  (e.server = r.server), (e.resources = null), t(new ut(e));
                } else
                  (e._pendingDfd = this.generateToken(
                    this.findServerInfo(h.server),
                    null,
                    {
                      serverUrl: e.resUrl_,
                      token: h.token,
                      signal: e.options_.signal,
                      ssl: h.ssl,
                    },
                  )).then((s) => {
                    t(
                      new ut({
                        userId: h.userId,
                        server: r.server,
                        token: s.token,
                        expires: null != s.expires ? Number(s.expires) : null,
                        ssl: !!s.ssl,
                        isAdmin: e.admin_,
                        validity: s.validity,
                      }),
                    );
                  }, s);
              } else
                (this._busy = null),
                  o && (e.options_.token = null),
                  (e._pendingDfd = this.getCredential(
                    i.replace(/\/?$/, '/sharing'),
                    {
                      resource: e.resUrl_,
                      owningTenant: r.owningTenant,
                      signal: e.options_.signal,
                      token: o,
                      error: a,
                      prompt: l,
                    },
                  )).then(
                    () => {
                      this._enqueue(
                        e.resUrl_,
                        e.sinfo_,
                        e.options_,
                        e,
                        e.admin_,
                      );
                    },
                    (t) => {
                      (e.resUrl_ = e.sinfo_ = e.refresh_ = null), e.reject(t);
                    },
                  );
            };
          this._errbackFunc = s;
          const n = e.sinfo_.owningSystemUrl,
            o = this._isServerRsrc(e.resUrl_),
            l = e.sinfo_._restInfoPms;
          l
            ? l.promise.then(
                (t) => {
                  const s = e.sinfo_;
                  if (s._restInfoPms) {
                    (s.adminTokenServiceUrl = s._restInfoPms.adminUrl),
                      (s._restInfoPms = null),
                      (s.tokenServiceUrl =
                        (0, d.hS)('authInfo.tokenServicesUrl', t) ||
                        (0, d.hS)('authInfo.tokenServiceUrl', t) ||
                        (0, d.hS)('tokenServiceUrl', t)),
                      (s.shortLivedTokenValidity = (0, d.hS)(
                        'authInfo.shortLivedTokenValidity',
                        t,
                      )),
                      (s.currentVersion = t.currentVersion),
                      (s.owningTenant = t.owningTenant);
                    const e = (s.owningSystemUrl = t.owningSystemUrl);
                    e && this._portals.push(e);
                  }
                  o && s.owningSystemUrl ? i() : r();
                },
                () => {
                  e.sinfo_._restInfoPms = null;
                  const t = new a.Z(
                    'identity-manager:server-identification-failed',
                    'Unknown resource - could not find token service endpoint.',
                  );
                  s(t);
                },
              )
            : o && n
            ? i()
            : e.sinfo_._selfReq
            ? e.sinfo_._selfReq.selfDfd
                .then((t) => {
                  const s = {};
                  let r, i, n, o;
                  return (
                    t &&
                      ((r = t.user && t.user.username),
                      (s.username = r),
                      (s.allSSL = t.allSSL),
                      (i = t.supportsOAuth),
                      (n = parseFloat(t.currentVersion)),
                      'multitenant' === t.portalMode && (o = t.customBaseUrl),
                      (e.sinfo_.currentVersion = n)),
                    (e.sinfo_.webTierAuth = !!r),
                    r && this.normalizeWebTierAuth
                      ? this.generateToken(e.sinfo_, null, { ssl: s.allSSL })
                          .catch(() => null)
                          .then(
                            (e) => (
                              (s.portalToken = e && e.token),
                              (s.tokenExpiration = e && e.expires),
                              s
                            ),
                          )
                      : !r && i && n >= 4.4 && !this._findOAuthInfo(e.resUrl_)
                      ? this._generateOAuthInfo({
                          portalUrl: e.sinfo_.server,
                          customBaseUrl: o,
                          owningTenant: e.sinfo_._selfReq.owningTenant,
                        })
                          .catch(() => null)
                          .then(() => s)
                      : s
                  );
                })
                .catch(() => null)
                .then((t) => {
                  (e.sinfo_._selfReq = null),
                    t
                      ? r(
                          t.username,
                          t.allSSL,
                          t.portalToken,
                          t.tokenExpiration,
                        )
                      : r();
                })
            : r();
        }
        _generateOAuthInfo(e) {
          let t,
            s,
            r = e.portalUrl;
          const i = e.customBaseUrl,
            n = e.owningTenant,
            a =
              !this.defaultOAuthInfo &&
              this._createDefaultOAuthInfo &&
              !this._hasTestedIfAppIsOnPortal;
          if (a) {
            s = window.location.href;
            let e = s.indexOf('?');
            e > -1 && (s = s.slice(0, e)),
              (e = s.search(/\/(apps|home)\//)),
              (s = e > -1 ? s.slice(0, e) : null);
          }
          return (
            a && s
              ? ((this._hasTestedIfAppIsOnPortal = !0),
                (t = (0, o.default)(s + '/sharing/rest', {
                  query: { f: 'json' },
                }).then(() => {
                  this.defaultOAuthInfo = new rt({
                    appId: 'arcgisonline',
                    popupCallbackUrl: s + '/home/oauth-callback.html',
                  });
                })))
              : (t = Promise.resolve()),
            t.then(() => {
              if (this.defaultOAuthInfo)
                return (
                  (r = r.replace(/^http:/i, 'https:')),
                  (0, o.default)(
                    r + '/sharing/rest/oauth2/validateRedirectUri',
                    {
                      query: {
                        accountId: n,
                        client_id: this.defaultOAuthInfo.appId,
                        redirect_uri: (0, p.hF)(
                          this.defaultOAuthInfo.popupCallbackUrl,
                        ),
                        f: 'json',
                      },
                    },
                  ).then((e) => {
                    if (e.data.valid) {
                      const t = this.defaultOAuthInfo.clone();
                      e.data.urlKey && i
                        ? (t.portalUrl =
                            'https://' + e.data.urlKey.toLowerCase() + '.' + i)
                        : (t.portalUrl = r),
                        (t.popup =
                          window !== window.top ||
                          !(
                            (0, p.D6)(r, this._appOrigin) ||
                            this._gwDomains.some(
                              (e) =>
                                e.regex.test(r) &&
                                e.regex.test(this._appOrigin),
                            )
                          )),
                        this.oAuthInfos.push(t);
                    }
                  })
                );
            })
          );
        }
        _doOAuthSignIn(e, t, s, r) {
          const i = s._oAuthCred,
            n = { portalUrl: s.portalUrl };
          !s.popup &&
            s.preserveUrlHash &&
            window.location.hash &&
            (n.hash = window.location.hash),
            i.stateUID && (n.uid = i.stateUID);
          const o = {
            client_id: s.appId,
            response_type: i.codeVerifier ? 'code' : 'token',
            state: JSON.stringify(n),
            expiration: s.expiration,
            locale: s.locale,
            redirect_uri: this._getRedirectURI(s, !!i.codeVerifier),
          };
          s.forceLogin && (o.force_login = !0),
            s.forceUserId && s.userId && (o.prepopulatedusername = s.userId),
            !s.popup &&
              this._doPortalSignIn(e) &&
              (o.redirectToUserOrgUrl = !0),
            i.codeVerifier &&
              ((o.code_challenge = r || i.codeVerifier),
              (o.code_challenge_method = r ? 'S256' : 'plain'));
          const l =
              s.portalUrl.replace(/^http:/i, 'https:') +
              '/sharing/oauth2/authorize',
            c = l + '?' + (0, p.B7)(o);
          if (s.popup) {
            const e = window.open(c, 'esriJSAPIOAuth', s.popupWindowFeatures);
            if (e)
              e.focus(),
                (this._oAuthDfd.oAuthWin_ = e),
                (this._oAuthIntervalId = setInterval(() => {
                  if (e.closed) {
                    clearInterval(this._oAuthIntervalId),
                      this._oAuthOnPopupHandle.remove();
                    const e = this._oAuthDfd;
                    if (e) {
                      const t = new a.Z(
                        'identity-manager:user-aborted',
                        'ABORTED',
                      );
                      e.reject(t);
                    }
                  }
                }, 500)),
                (this._oAuthOnPopupHandle = (0, h.on)(
                  window,
                  ['arcgis:auth:hash', 'arcgis:auth:location:search'],
                  (e) => {
                    'arcgis:auth:hash' === e.type
                      ? this.setOAuthResponseHash(e.detail)
                      : this._setOAuthResponseQueryString(e.detail);
                  },
                ));
            else {
              const e = new a.Z('identity-manager:popup-blocked', 'ABORTED');
              this._oAuthDfd.reject(e);
            }
          } else
            (this._rejectOnPersistedPageShow = !0),
              this._oAuthRedirectFunc
                ? this._oAuthRedirectFunc({
                    authorizeParams: o,
                    authorizeUrl: l,
                    resourceUrl: e,
                    serverInfo: t,
                    oAuthInfo: s,
                  })
                : (window.location.href = c);
        }
        _getRedirectURI(e, t) {
          const s = window.location.href.replace(/#.*$/, '');
          if (e.popup) return (0, p.hF)(e.popupCallbackUrl);
          if (t) {
            const e = (0, p.mN)(s);
            return (
              e.query &&
                [
                  'code',
                  'error',
                  'error_description',
                  'message_code',
                  'persist',
                  'state',
                ].forEach((t) => {
                  delete e.query[t];
                }),
              (0, p.fl)(e.path, e.query)
            );
          }
          return s;
        }
      }
      dt.prototype.declaredClass = 'esri.identity.IdentityManagerBase';
      let ut = class extends l.Z.EventedAccessor {
        constructor(e) {
          super(e),
            (this._oAuthCred = null),
            (this.tokenRefreshBuffer = 2),
            e && e._oAuthCred && (this._oAuthCred = e._oAuthCred);
        }
        initialize() {
          (this.resources = this.resources || []),
            null == this.creationTime && (this.creationTime = Date.now());
        }
        refreshToken() {
          const e = r.id.findServerInfo(this.server),
            t = e && e.owningSystemUrl,
            s = !!t && 'server' === this.scope,
            i = s && lt(e, r.id._legacyFed),
            n = e.webTierAuth,
            o = n && r.id.normalizeWebTierAuth,
            a = ot[this.server],
            l = a && a[this.userId];
          let h,
            c = this.resources && this.resources[0],
            d = s && r.id.findServerInfo(t),
            u = { username: this.userId, password: l };
          if (n && !o) return;
          s &&
            !d &&
            r.id.serverInfos.some(
              (e) => (r.id._isIdProvider(t, e.server) && (d = e), !!d),
            );
          const p = d && r.id.findCredential(d.server, this.userId);
          if (!s || p) {
            if (!i) {
              if (s) h = { serverUrl: c, token: p && p.token, ssl: p && p.ssl };
              else if (o) (u = null), (h = { ssl: this.ssl });
              else {
                if (!l) {
                  let t;
                  return (
                    c &&
                      ((c = r.id._sanitizeUrl(c)),
                      (this._enqueued = 1),
                      (t = r.id._enqueue(c, e, null, null, this.isAdmin, this)),
                      t
                        .then(() => {
                          (this._enqueued = 0), this.refreshServerTokens();
                        })
                        .catch(() => {
                          this._enqueued = 0;
                        })),
                    t
                  );
                }
                this.isAdmin && (h = { isAdmin: !0 });
              }
              return r.id
                .generateToken(s ? d : e, s ? null : u, h)
                .then((e) => {
                  (this.token = e.token),
                    (this.expires =
                      null != e.expires ? Number(e.expires) : null),
                    (this.creationTime = Date.now()),
                    (this.validity = e.validity),
                    this.emitTokenChange(),
                    this.refreshServerTokens();
                })
                .catch(() => {});
            }
            p.refreshToken();
          }
        }
        refreshServerTokens() {
          'portal' === this.scope &&
            r.id.credentials.forEach((e) => {
              const t = r.id.findServerInfo(e.server),
                s = t && t.owningSystemUrl;
              e !== this &&
                e.userId === this.userId &&
                s &&
                'server' === e.scope &&
                (r.id._hasSameServerInstance(this.server, s) ||
                  r.id._isIdProvider(s, this.server)) &&
                (lt(t, r.id._legacyFed)
                  ? ((e.token = this.token),
                    (e.expires = this.expires),
                    (e.creationTime = this.creationTime),
                    (e.validity = this.validity),
                    e.emitTokenChange())
                  : e.refreshToken());
            });
        }
        emitTokenChange(e) {
          clearTimeout(this._refreshTimer);
          const t = this.server && r.id.findServerInfo(this.server),
            s = t && t.owningSystemUrl,
            i = s && r.id.findServerInfo(s);
          !1 === e ||
            (s &&
              'portal' !== this.scope &&
              (!i || !i.webTierAuth || r.id.normalizeWebTierAuth)) ||
            (null == this.expires && null == this.validity) ||
            this._startRefreshTimer(),
            this.emit('token-change');
        }
        destroy() {
          (this.userId =
            this.server =
            this.token =
            this.expires =
            this.validity =
            this.resources =
            this.creationTime =
              null),
            this._oAuthCred &&
              (this._oAuthCred.destroy(), (this._oAuthCred = null));
          const e = r.id.credentials.indexOf(this);
          e > -1 && r.id.credentials.splice(e, 1),
            this.emitTokenChange(),
            this.emit('destroy');
        }
        toJSON() {
          const e = (0, c.yd)({
              userId: this.userId,
              server: this.server,
              token: this.token,
              expires: this.expires,
              validity: this.validity,
              ssl: this.ssl,
              isAdmin: this.isAdmin,
              creationTime: this.creationTime,
              scope: this.scope,
            }),
            t = this.resources;
          return t && t.length > 0 && (e.resources = t.slice()), e;
        }
        _startRefreshTimer() {
          clearTimeout(this._refreshTimer);
          const e = 6e4 * this.tokenRefreshBuffer,
            t = 2 ** 31 - 1;
          let s =
            (this.validity
              ? this.creationTime + 6e4 * this.validity
              : this.expires) - Date.now();
          s < 0 ? (s = 0) : s > t && (s = t),
            (this._refreshTimer = setTimeout(
              this.refreshToken.bind(this),
              s > e ? s - e : s,
            ));
        }
      };
      (0, i._)([(0, f.Cb)()], ut.prototype, 'creationTime', void 0),
        (0, i._)([(0, f.Cb)()], ut.prototype, 'expires', void 0),
        (0, i._)([(0, f.Cb)()], ut.prototype, 'isAdmin', void 0),
        (0, i._)([(0, f.Cb)()], ut.prototype, 'oAuthState', void 0),
        (0, i._)([(0, f.Cb)()], ut.prototype, 'resources', void 0),
        (0, i._)([(0, f.Cb)()], ut.prototype, 'scope', void 0),
        (0, i._)([(0, f.Cb)()], ut.prototype, 'server', void 0),
        (0, i._)([(0, f.Cb)()], ut.prototype, 'ssl', void 0),
        (0, i._)([(0, f.Cb)()], ut.prototype, 'token', void 0),
        (0, i._)([(0, f.Cb)()], ut.prototype, 'tokenRefreshBuffer', void 0),
        (0, i._)([(0, f.Cb)()], ut.prototype, 'userId', void 0),
        (0, i._)([(0, f.Cb)()], ut.prototype, 'validity', void 0),
        (ut = (0, i._)([(0, _.j)('esri.identity.Credential')], ut));
      class pt extends dt {}
      pt.prototype.declaredClass = 'esri.identity.IdentityManager';
      const ft = new pt();
      (0, r.qh)(ft);
    },
    2587: (e, t, s) => {
      'use strict';
      s(90344), s(18848), s(940), s(70171);
      var r = s(94443),
        i = s(3172),
        n = s(20102),
        o = s(70586);
      async function a(e) {
        if ((0, o.pC)(h.fetchBundleAsset)) return h.fetchBundleAsset(e);
        const t = await (0, i.default)(e, { responseType: 'text' });
        return JSON.parse(t.data);
      }
      class l {
        constructor({
          base: e = '',
          pattern: t,
          location: s = new URL(window.location.href),
        }) {
          let r;
          (r =
            'string' == typeof s
              ? (e) => new URL(e, new URL(s, window.location.href)).href
              : s instanceof URL
              ? (e) => new URL(e, s).href
              : s),
            (this.pattern = 'string' == typeof t ? new RegExp(`^${t}`) : t),
            (this.getAssetUrl = r),
            (e = e ? (e.endsWith('/') ? e : e + '/') : ''),
            (this.matcher = new RegExp(`^${e}(?:(.*)/)?(.*)$`));
        }
        fetchMessageBundle(e, t) {
          return (async function (e, t, s, i) {
            const o = t.exec(s);
            if (!o)
              throw new n.Z(
                'esri-intl:invalid-bundle',
                `Bundle id "${s}" is not compatible with the pattern "${t}"`,
              );
            const l = o[1] ? `${o[1]}/` : '',
              h = o[2],
              c = (0, r.Su)(i),
              d = `${l}${h}.json`,
              u = c ? `${l}${h}_${c}.json` : d;
            let p;
            try {
              p = await a(e(u));
            } catch (t) {
              if (u === d)
                throw new n.Z(
                  'intl:unknown-bundle',
                  `Bundle "${s}" cannot be loaded`,
                  { error: t },
                );
              try {
                p = await a(e(d));
              } catch (e) {
                throw new n.Z(
                  'intl:unknown-bundle',
                  `Bundle "${s}" cannot be loaded`,
                  { error: e },
                );
              }
            }
            return p;
          })(this.getAssetUrl, this.matcher, e, t);
        }
      }
      const h = {};
      var c,
        d = s(99880);
      (0, r.tz)(((c = { pattern: 'esri/', location: d.V }), new l(c)));
    },
    90344: (e, t, s) => {
      'use strict';
      s.d(t, { Ze: () => m, p6: () => g });
      var r = s(35454),
        i = s(70171);
      const n = { year: 'numeric', month: 'numeric', day: 'numeric' },
        o = { year: 'numeric', month: 'long', day: 'numeric' },
        a = { year: 'numeric', month: 'short', day: 'numeric' },
        l = { year: 'numeric', month: 'long', weekday: 'long', day: 'numeric' },
        h = { hour: 'numeric', minute: 'numeric' },
        c = { ...h, second: 'numeric' },
        d = {
          'short-date': n,
          'short-date-short-time': { ...n, ...h },
          'short-date-short-time-24': { ...n, ...h, hour12: !1 },
          'short-date-long-time': { ...n, ...c },
          'short-date-long-time-24': { ...n, ...c, hour12: !1 },
          'short-date-le': n,
          'short-date-le-short-time': { ...n, ...h },
          'short-date-le-short-time-24': { ...n, ...h, hour12: !1 },
          'short-date-le-long-time': { ...n, ...c },
          'short-date-le-long-time-24': { ...n, ...c, hour12: !1 },
          'long-month-day-year': o,
          'long-month-day-year-short-time': { ...o, ...h },
          'long-month-day-year-short-time-24': { ...o, ...h, hour12: !1 },
          'long-month-day-year-long-time': { ...o, ...c },
          'long-month-day-year-long-time-24': { ...o, ...c, hour12: !1 },
          'day-short-month-year': a,
          'day-short-month-year-short-time': { ...a, ...h },
          'day-short-month-year-short-time-24': { ...a, ...h, hour12: !1 },
          'day-short-month-year-long-time': { ...a, ...c },
          'day-short-month-year-long-time-24': { ...a, ...c, hour12: !1 },
          'long-date': l,
          'long-date-short-time': { ...l, ...h },
          'long-date-short-time-24': { ...l, ...h, hour12: !1 },
          'long-date-long-time': { ...l, ...c },
          'long-date-long-time-24': { ...l, ...c, hour12: !1 },
          'long-month-year': { month: 'long', year: 'numeric' },
          'short-month-year': { month: 'short', year: 'numeric' },
          year: { year: 'numeric' },
          'short-time': h,
          'long-time': c,
        },
        u = (0, r.w)()({
          shortDate: 'short-date',
          shortDateShortTime: 'short-date-short-time',
          shortDateShortTime24: 'short-date-short-time-24',
          shortDateLongTime: 'short-date-long-time',
          shortDateLongTime24: 'short-date-long-time-24',
          shortDateLE: 'short-date-le',
          shortDateLEShortTime: 'short-date-le-short-time',
          shortDateLEShortTime24: 'short-date-le-short-time-24',
          shortDateLELongTime: 'short-date-le-long-time',
          shortDateLELongTime24: 'short-date-le-long-time-24',
          longMonthDayYear: 'long-month-day-year',
          longMonthDayYearShortTime: 'long-month-day-year-short-time',
          longMonthDayYearShortTime24: 'long-month-day-year-short-time-24',
          longMonthDayYearLongTime: 'long-month-day-year-long-time',
          longMonthDayYearLongTime24: 'long-month-day-year-long-time-24',
          dayShortMonthYear: 'day-short-month-year',
          dayShortMonthYearShortTime: 'day-short-month-year-short-time',
          dayShortMonthYearShortTime24: 'day-short-month-year-short-time-24',
          dayShortMonthYearLongTime: 'day-short-month-year-long-time',
          dayShortMonthYearLongTime24: 'day-short-month-year-long-time-24',
          longDate: 'long-date',
          longDateShortTime: 'long-date-short-time',
          longDateShortTime24: 'long-date-short-time-24',
          longDateLongTime: 'long-date-long-time',
          longDateLongTime24: 'long-date-long-time-24',
          longMonthYear: 'long-month-year',
          shortMonthYear: 'short-month-year',
          year: 'year',
        }),
        p =
          (u.apiValues,
          u.toJSON.bind(u),
          u.fromJSON.bind(u),
          { ar: 'ar-u-nu-latn-ca-gregory' });
      let f = new WeakMap(),
        _ = d['short-date-short-time'];
      function m(e) {
        return d[e] || null;
      }
      function g(e, t) {
        return (function (e) {
          const t = e || _;
          if (!f.has(t)) {
            const e = (0, i.Kd)(),
              s = p[(0, i.Kd)()] || e;
            f.set(t, new Intl.DateTimeFormat(s, t));
          }
          return f.get(t);
        })(t).format(e);
      }
      (0, i.Ze)(() => {
        (f = new WeakMap()), (_ = d['short-date-short-time']);
      });
    },
    70171: (e, t, s) => {
      'use strict';
      var r, i, n;
      let o;
      s.d(t, { Ze: () => p, Kd: () => h, qe: () => d });
      const a =
        null != (r = null == (i = globalThis.esriConfig) ? void 0 : i.locale)
          ? r
          : null == (n = globalThis.dojoConfig)
          ? void 0
          : n.locale;
      function l() {
        var e, t;
        return null !=
          (e =
            null != a
              ? a
              : null == (t = globalThis.navigator)
              ? void 0
              : t.language)
          ? e
          : 'en';
      }
      function h() {
        return void 0 === o && (o = l()), o;
      }
      const c = [];
      function d(e) {
        return (
          c.push(e),
          {
            remove() {
              c.splice(c.indexOf(e), 1);
            },
          }
        );
      }
      const u = [];
      function p(e) {
        return (
          u.push(e),
          {
            remove() {
              c.splice(u.indexOf(e), 1);
            },
          }
        );
      }
      null == globalThis.addEventListener ||
        globalThis.addEventListener('languagechange', function () {
          const e = null != undefined ? undefined : l();
          o !== e &&
            ((o = e),
            [...u].forEach((t) => {
              t.call(null, e);
            }),
            [...c].forEach((t) => {
              t.call(null, e);
            }));
        });
    },
    94443: (e, t, s) => {
      'use strict';
      s.d(t, { ME: () => p, Su: () => f, tz: () => u });
      var r = s(20102),
        i = s(95330),
        n = s(70171);
      const o = /^([a-z]{2})(?:[-_]([A-Za-z]{2}))?$/,
        a = {
          ar: !0,
          bg: !0,
          bs: !0,
          ca: !0,
          cs: !0,
          da: !0,
          de: !0,
          el: !0,
          en: !0,
          es: !0,
          et: !0,
          fi: !0,
          fr: !0,
          he: !0,
          hr: !0,
          hu: !0,
          id: !0,
          it: !0,
          ja: !0,
          ko: !0,
          lt: !0,
          lv: !0,
          nb: !0,
          nl: !0,
          pl: !0,
          'pt-BR': !0,
          'pt-PT': !0,
          ro: !0,
          ru: !0,
          sk: !0,
          sl: !0,
          sr: !0,
          sv: !0,
          th: !0,
          tr: !0,
          uk: !0,
          vi: !0,
          'zh-CN': !0,
          'zh-HK': !0,
          'zh-TW': !0,
        };
      function l(e) {
        var t;
        return null != (t = a[e]) && t;
      }
      const h = [],
        c = new Map();
      function d(e) {
        for (const t of c.keys()) _(e.pattern, t) && c.delete(t);
      }
      function u(e) {
        return (
          h.includes(e) || (d(e), h.unshift(e)),
          {
            remove() {
              const t = h.indexOf(e);
              t > -1 && (h.splice(t, 1), d(e));
            },
          }
        );
      }
      async function p(e) {
        const t = (0, n.Kd)();
        c.has(e) ||
          c.set(
            e,
            (async function (e, t) {
              const s = [];
              for (const r of h)
                if (_(r.pattern, e))
                  try {
                    return await r.fetchMessageBundle(e, t);
                  } catch (e) {
                    s.push(e);
                  }
              if (s.length)
                throw new r.Z(
                  'intl:message-bundle-error',
                  `Errors occurred while loading "${e}"`,
                  { errors: s },
                );
              throw new r.Z(
                'intl:no-message-bundle-loader',
                `No loader found for message bundle "${e}"`,
              );
            })(e, t),
          );
        const s = c.get(e);
        return await m.add(s), s;
      }
      function f(e) {
        if (!o.test(e)) return null;
        const [, t, s] = o.exec(e),
          r = t + (s ? '-' + s.toUpperCase() : '');
        return l(r) ? r : l(t) ? t : null;
      }
      function _(e, t) {
        return 'string' == typeof e ? t.startsWith(e) : e.test(t);
      }
      (0, n.Ze)(() => {
        c.clear();
      });
      const m = new (class {
        constructor() {
          this._numLoading = 0;
        }
        async waitForAll() {
          this._dfd && (await this._dfd.promise);
        }
        add(e) {
          return (
            this._increase(),
            e.then(
              () => this._decrease(),
              () => this._decrease(),
            ),
            this.waitForAll()
          );
        }
        _increase() {
          this._numLoading++, this._dfd || (this._dfd = (0, i.dD)());
        }
        _decrease() {
          (this._numLoading = Math.max(this._numLoading - 1, 0)),
            this._dfd &&
              0 === this._numLoading &&
              (this._dfd.resolve(), (this._dfd = null));
        }
      })();
    },
    18848: (e, t, s) => {
      'use strict';
      s.d(t, { sh: () => l, uf: () => h });
      var r = s(70586),
        i = s(70171);
      const n = { ar: 'ar-u-nu-latn' };
      let o = new WeakMap(),
        a = {};
      function l(e = {}) {
        const t = {};
        return (
          null != e.digitSeparator && (t.useGrouping = e.digitSeparator),
          null != e.places &&
            (t.minimumFractionDigits = t.maximumFractionDigits = e.places),
          t
        );
      }
      function h(e, t) {
        return (function (e) {
          const t = e || a;
          if (!o.has(t)) {
            const s = (0, i.Kd)(),
              r = n[(0, i.Kd)()] || s;
            o.set(t, new Intl.NumberFormat(r, e));
          }
          return (0, r.j0)(o.get(t));
        })(t).format(e);
      }
      (0, i.Ze)(() => {
        (o = new WeakMap()), (a = {});
      });
    },
    940: (e, t, s) => {
      'use strict';
      s.d(t, { n: () => h });
      var r = s(92604),
        i = s(78286),
        n = s(19153),
        o = s(90344),
        a = s(18848);
      const l = r.Z.getLogger('esri.intl');
      function h(e, t, s = {}) {
        const { format: r = {} } = s;
        return (0, n.gx)(e, (e) =>
          (function (e, t, s) {
            let r, n;
            const o = e.indexOf(':');
            if (
              (-1 === o
                ? (r = e.trim())
                : ((r = e.slice(0, o).trim()), (n = e.slice(o + 1).trim())),
              !r)
            )
              return '';
            const a = (0, i.hS)(r, t);
            if (null == a) return '';
            const l = s[n] || s[r];
            return l ? c(a, l) : n ? d(a, n) : u(a);
          })(e, t, r),
        );
      }
      function c(e, t) {
        switch (t.type) {
          case 'date':
            return (0, o.p6)(e, t.intlOptions);
          case 'number':
            return (0, a.uf)(e, t.intlOptions);
          default:
            return l.warn('missing format descriptor for key {key}'), u(e);
        }
      }
      function d(e, t) {
        switch (t.toLowerCase()) {
          case 'dateformat':
            return (0, o.p6)(e);
          case 'numberformat':
            return (0, a.uf)(e);
          default:
            return (
              l.warn(`inline format is unsupported since 4.12: ${t}`),
              /^(dateformat|datestring)/i.test(t)
                ? (0, o.p6)(e)
                : /^numberformat/i.test(t)
                ? (0, a.uf)(e)
                : u(e)
            );
        }
      }
      function u(e) {
        switch (typeof e) {
          case 'string':
            return e;
          case 'number':
            return (0, a.uf)(e);
          case 'boolean':
            return '' + e;
          default:
            return e instanceof Date ? (0, o.p6)(e) : '';
        }
      }
    },
  },
]);
